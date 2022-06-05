import { Map } from "immutable";

export default function mergeDeeplyElements(page1, page2) {
  const p1M = Map(page1);
  const p2M = Map(page2);
  return p1M.mergeDeep(p2M);
}
