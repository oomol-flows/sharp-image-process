import type { AppProps } from "../src/App";

import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "../src/App";
import { Node } from "./Node";

const fakeProps: AppProps = {
  contextProps: {
    a: "aaa",
    b: "aaa",
  },
};

createRoot(document.getElementById("root")!).render(
  <Node>
    <App {...fakeProps} />
  </Node>
);