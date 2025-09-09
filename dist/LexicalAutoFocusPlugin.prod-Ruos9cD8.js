import { o as l } from "./index-b9RrN2bn.js";
import { useEffect as c } from "react";
function f({ defaultSelection: o }) {
  const [t] = l();
  return c(() => {
    t.focus(() => {
      const n = document.activeElement, e = t.getRootElement();
      e === null || n !== null && e.contains(n) || e.focus({ preventScroll: !0 });
    }, { defaultSelection: o });
  }, [o, t]), null;
}
export {
  f as o
};
