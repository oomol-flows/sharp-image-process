import type { Context } from "@oomol/oocana-types";
import sharp, { Sharp } from "sharp";

type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{ image: string }>;
type Outputs = Readonly<{ sharp: Sharp }>;

export default async function(inputs: Inputs, context: BlockContext): Promise<Outputs> {
  console.log("input", inputs.image);
  const Sharp = sharp(inputs.image)
  return {
    sharp: Sharp,
  }
};