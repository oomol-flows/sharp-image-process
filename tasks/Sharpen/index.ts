import type { Context } from "@oomol/oocana-types";
import { Sharp } from "sharp";

type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{ sharp: Sharp, sigma: number }>;
type Outputs = Readonly<{ sharp: Sharp }>;

export default async function(inputs: Inputs, context: BlockContext): Promise<Outputs> {
  const sharp = inputs.sharp.clone().sharpen({sigma: inputs.sigma});
  const obj = await sharp.toBuffer({resolveWithObject: true});
  const base64 = `data:image/png;base64,${obj.data.toString("base64")}`;
  context.sendMessage({type: "image", data: base64});
  return {
    sharp: sharp,
  }
};