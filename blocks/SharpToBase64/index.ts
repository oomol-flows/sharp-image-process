import type { Context } from "@oomol/oocana-types";
import {Sharp} from "sharp";
type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{ sharp: Sharp }>;
type Outputs = Readonly<{ base64: string }>;

export default async function(inputs: Inputs, context: BlockContext): Promise<Outputs> {

  const obj = await inputs.sharp.toBuffer({resolveWithObject: true});
  return {
    base64: `data:image/png;base64,${obj.data.toString("base64")}`,
  }
};