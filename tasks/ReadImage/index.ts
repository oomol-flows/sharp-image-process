import type { Context } from "@oomol/oocana-types";
import sharp, { Sharp } from "sharp";

type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{ image: string }>;
type Outputs = Readonly<{ sharp: Sharp }>;

export default async function(inputs: Inputs, context: BlockContext): Promise<Outputs> {
  const Sharp = sharp(inputs.image)
  const obj = await Sharp.toBuffer({resolveWithObject: true})
  const base64 = `data:image/png;base64,${obj.data.toString("base64")}`
  context.preview({type: "image", data: base64})
  return {
    sharp: Sharp,
  }
};