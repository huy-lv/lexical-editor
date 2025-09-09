import { r as L, u as P, o as B, a as F, j as e, L as K, m as U, n as Y, p as G, T as W, S as z, D as H, B as q } from "./index-CzXsaai9.js";
import { o as J } from "./LexicalAutoFocusPlugin.prod-Cy-l9r8B.js";
import { h as Q } from "./LexicalNestedComposer.prod-CFzYy_bw.js";
import { mergeRegister as V } from "@lexical/utils";
import { $getSelection as R, $isNodeSelection as b, $setSelection as T, SELECTION_CHANGE_COMMAND as X, COMMAND_PRIORITY_LOW as x, CLICK_COMMAND as Z, DRAGSTART_COMMAND as ee, KEY_ENTER_COMMAND as te, KEY_ESCAPE_COMMAND as ne, $getNodeByKey as ae } from "lexical";
import { useRef as I, useState as S, useCallback as w, useEffect as oe, Suspense as se } from "react";
const O = /* @__PURE__ */ new Set();
function le(a) {
  if (!O.has(a))
    throw new Promise((u) => {
      const o = new Image();
      o.src = a, o.onload = () => {
        O.add(a), u(null);
      };
    });
}
function ie({
  altText: a,
  className: u,
  imageRef: o,
  src: f,
  width: s,
  height: r,
  position: l
}) {
  return le(f), /* @__PURE__ */ e.jsx(
    "img",
    {
      className: u || void 0,
      src: f,
      alt: a,
      ref: o,
      "data-position": l,
      style: {
        display: "block",
        height: r,
        width: s
      },
      draggable: "false"
    }
  );
}
function re({
  activeEditor: a,
  nodeKey: u,
  onClose: o
}) {
  const s = a.getEditorState().read(
    () => ae(u)
  ), [r, l] = S(s.getAltText()), [C, N] = S(s.getShowCaption()), [j, p] = S(s.getPosition()), h = (d) => {
    N(d.target.checked);
  }, c = (d) => {
    p(d.target.value);
  }, m = () => {
    const d = { altText: r, position: j, showCaption: C };
    s && a.update(() => {
      s.update(d);
    }), o();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e.jsx(
      W,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: l,
        value: r,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ e.jsxs(
      z,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: j,
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: c,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ e.jsx("option", { value: "right", children: "Right" }),
          /* @__PURE__ */ e.jsx("option", { value: "full", children: "Full Width" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: "caption",
          type: "checkbox",
          checked: C,
          onChange: h
        }
      ),
      /* @__PURE__ */ e.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsx(
      q,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => m(),
        children: "Confirm"
      }
    ) })
  ] });
}
function pe({
  src: a,
  altText: u,
  nodeKey: o,
  width: f,
  height: s,
  showCaption: r,
  caption: l,
  position: C
}) {
  const [N, j] = L(), p = I(null), h = I(null), [c, m, d] = P(o), [t] = B(), [_, $] = S(null), v = I(null), M = F(), A = w(
    (i) => {
      const g = R(), n = h.current;
      if (c && b(g) && g.getNodes().length === 1) {
        if (r)
          return T(null), i.preventDefault(), l.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return i.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [l, c, r]
  ), D = w(
    (i) => v.current === l || h.current === i.target ? (T(null), t.update(() => {
      m(!0);
      const g = t.getRootElement();
      g !== null && g.focus();
    }), !0) : !1,
    [l, t, m]
  );
  oe(() => {
    let i = !0;
    const g = V(
      t.registerUpdateListener(({ editorState: n }) => {
        i && $(n.read(() => R()));
      }),
      t.registerCommand(
        X,
        (n, E) => (v.current = E, !1),
        x
      ),
      t.registerCommand(
        Z,
        (n) => {
          const E = n;
          return E.target === p.current ? (E.shiftKey ? m(!c) : (d(), m(!0)), !0) : !1;
        },
        x
      ),
      t.registerCommand(
        ee,
        (n) => n.target === p.current ? (n.preventDefault(), !0) : !1,
        x
      ),
      t.registerCommand(te, A, x),
      t.registerCommand(
        ne,
        D,
        x
      )
    );
    return () => {
      i = !1, g();
    };
  }, [
    d,
    t,
    c,
    o,
    A,
    D,
    m
  ]);
  const k = c && b(_), y = c && M;
  return /* @__PURE__ */ e.jsxs(se, { fallback: null, children: [
    /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("span", { draggable: k, children: [
        M && /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: h,
            onClick: () => {
              j("Update Inline Image", (i) => /* @__PURE__ */ e.jsx(
                re,
                {
                  activeEditor: t,
                  nodeKey: o,
                  onClose: i
                }
              ));
            },
            children: "Edit"
          }
        ),
        /* @__PURE__ */ e.jsx(
          ie,
          {
            className: y ? `focused ${b(_) ? "draggable" : ""}` : null,
            src: a,
            altText: u,
            imageRef: p,
            width: f,
            height: s,
            position: C
          }
        )
      ] }),
      r && /* @__PURE__ */ e.jsx("span", { className: "image-caption-container", children: /* @__PURE__ */ e.jsxs(Q, { initialEditor: l, children: [
        /* @__PURE__ */ e.jsx(J, {}),
        /* @__PURE__ */ e.jsx(K, {}),
        /* @__PURE__ */ e.jsx(
          U,
          {
            contentEditable: /* @__PURE__ */ e.jsx(
              G,
              {
                placeholder: "Enter a caption...",
                placeholderClassName: "InlineImageNode__placeholder",
                className: "InlineImageNode__contentEditable"
              }
            ),
            ErrorBoundary: Y
          }
        )
      ] }) })
    ] }),
    N
  ] });
}
export {
  re as UpdateInlineImageDialog,
  pe as default
};
