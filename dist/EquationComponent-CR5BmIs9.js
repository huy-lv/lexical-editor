import { j as t, o as N, a as q, b as _, K as j } from "./index-C0aYvSXU.js";
import { mergeRegister as h } from "@lexical/utils";
import { isHTMLElement as C, $getNodeByKey as S, SELECTION_CHANGE_COMMAND as $, COMMAND_PRIORITY_HIGH as p, KEY_ESCAPE_COMMAND as v, $getSelection as M, $isNodeSelection as b } from "lexical";
import { forwardRef as k, useState as g, useRef as R, useCallback as A, useEffect as x } from "react";
import { ErrorBoundary as H } from "react-error-boundary";
function O({ equation: r, setEquation: c, inline: a }, e) {
  const i = (n) => {
    c(n.target.value);
  };
  return a && C(e) ? /* @__PURE__ */ t.jsxs("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: r,
        onChange: i,
        autoFocus: !0,
        ref: e
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: "$" })
  ] }) : /* @__PURE__ */ t.jsxs("div", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: `$$
` }),
    /* @__PURE__ */ t.jsx(
      "textarea",
      {
        className: "EquationEditor_blockEditor",
        value: r,
        onChange: i,
        ref: e
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: `
$$` })
  ] });
}
const B = k(O);
function F({
  equation: r,
  inline: c,
  nodeKey: a
}) {
  const [e] = N(), i = q(), [n, f] = g(r), [l, E] = g(!1), d = R(null), m = A(
    (s) => {
      E(!1), e.update(() => {
        const o = S(a);
        _(o) && (o.setEquation(n), s && o.selectNext(0, 0));
      });
    },
    [e, n, a]
  );
  return x(() => {
    !l && n !== r && f(r);
  }, [l, r, n]), x(() => {
    if (i)
      return l ? h(
        e.registerCommand(
          $,
          (s) => {
            const o = document.activeElement;
            return d.current !== o && m(), !1;
          },
          p
        ),
        e.registerCommand(
          v,
          (s) => {
            const o = document.activeElement;
            return d.current === o ? (m(!0), !0) : !1;
          },
          p
        )
      ) : e.registerUpdateListener(({ editorState: s }) => {
        s.read(() => {
          const u = M();
          return b(u) && u.has(a) && u.getNodes().length === 1;
        }) && E(!0);
      });
  }, [e, a, m, l, i]), /* @__PURE__ */ t.jsx(t.Fragment, { children: l && i ? /* @__PURE__ */ t.jsx(
    B,
    {
      equation: n,
      setEquation: f,
      inline: c,
      ref: d
    }
  ) : /* @__PURE__ */ t.jsx(H, { onError: (s) => e._onError(s), fallback: null, children: /* @__PURE__ */ t.jsx(
    j,
    {
      equation: n,
      inline: c,
      onDoubleClick: () => {
        i && E(!0);
      }
    }
  ) }) });
}
export {
  F as default
};
