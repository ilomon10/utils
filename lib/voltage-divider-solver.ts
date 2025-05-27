import { evaluate } from "mathjs";

type Inputs = {
  v_s?: number;
  r_1?: number;
  r_2?: number;
  v_out?: number;
};

export default function solveVoltageDivider(inputs: Inputs): Inputs {
  const { v_s, r_1, r_2, v_out } = inputs;
  const knowns = { v_s, r_1, r_2, v_out };
  const defined = Object.entries(knowns).filter(([, v]) => v !== undefined);
  const missing = Object.entries(knowns).filter(([, v]) => v === undefined);

  if (defined.length !== 3 || missing.length !== 1) {
    throw new Error("Please provide exactly 3 known values.");
  }

  const scope = { v_s, r_1, r_2, v_out };

  switch (missing[0][0]) {
    case "v_out":
      scope.v_out = evaluate("v_s * (r_2 / (r_1 + r_2))", scope);
      break;
    case "v_s":
      scope.v_s = evaluate("v_out * ((r_1 + r_2) / r_2)", scope);
      break;
    case "r_1":
      scope.r_1 = evaluate("r_2 * ((v_s - v_out) / v_out)", scope);
      break;
    case "r_2":
      scope.r_2 = evaluate("(v_out * r_1) / (v_s - v_out)", scope);
      break;
    default:
      throw new Error("Unexpected missing variable.");
  }

  return scope;
}
