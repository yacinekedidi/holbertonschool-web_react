import { Map, List } from "immutable";

export function concatElements(page1, page2) {
  const p1L = List(page1);
  const p2L = List(page2);
  return p1L.concat(p2L);
}

console.log(concatElements([1, 2], [3, 4]));

export function mergeElements(page1, page2) {
  const p1M = Map(page1);
  const p2M = Map(page2);
  return p1M.merge(p2M);
}
