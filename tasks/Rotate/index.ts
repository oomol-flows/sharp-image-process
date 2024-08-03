import type { Context } from "@oomol/oocana-types";
import sharp, { Sharp } from "sharp";

type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{ sharp: Sharp, rotate: number }>;
type Outputs = Readonly<{ sharp: Sharp }>;

export default async function(inputs: Inputs, context: BlockContext): Promise<Outputs> {
  const sharp = inputs.sharp.clone().rotate(inputs.rotate)
  const obj = await sharp.toBuffer({resolveWithObject: true})
  const base64 = `data:image/png;base64,${obj.data.toString("base64")}`
  context.preview({type: "image", data: base64})
  return {
    sharp: sharp,
  }
};