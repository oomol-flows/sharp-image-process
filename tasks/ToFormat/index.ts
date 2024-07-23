import type { Context } from "@oomol/oocana-types";
import { type } from "os";
import { Sharp } from "sharp";

enum Formate {
  PNG = "png",
  JPEG = "jpeg",
  WEBP = "webp"
};

type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{sharp: Sharp, address: string, name: string, formate: Formate}>;
type Outputs = Readonly<{ file_address: string }>;

export default async function(inputs: Inputs, context: BlockContext): Promise<Outputs> {
  const address = `${inputs.address}/${inputs.name}.${inputs.formate}`
  await inputs.sharp.toFile(`${inputs.address}/${inputs.name}.${inputs.formate}`);
  return {
    file_address: address,
  }
};