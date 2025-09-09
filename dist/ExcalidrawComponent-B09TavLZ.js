import { j as s, M as $, B as z, o as p, a as F, u as P, c as T } from "./index-b9RrN2bn.js";
import { mergeRegister as S } from "@lexical/utils";
import { isDOMNode as H, CLICK_COMMAND as W, COMMAND_PRIORITY_LOW as J, $getNodeByKey as k } from "lexical";
import { useRef as N, useState as C, useEffect as _, useLayoutEffect as Y, useCallback as I, useMemo as q } from "react";
import { Excalidraw as G, exportToSvg as Q } from "@excalidraw/excalidraw";
import { createPortal as U } from "react-dom";
import { I as V } from "./ImageResizer-DWzZ3HAc.js";
function X({
  closeOnClickOutside: n = !1,
  onSave: r,
  initialElements: f,
  initialAppState: h,
  initialFiles: i,
  isShown: m = !1,
  onDelete: c,
  onClose: a
}) {
  const l = N(null), [x, E] = C(null), [o, M] = C(!1), [g, j] = C(f), [v, D] = C(i);
  _(() => {
    var e;
    (e = l.current) == null || e.focus();
  }, []), _(() => {
    var w;
    let e = null;
    const d = (O) => {
      const t = O.target;
      l.current !== null && H(t) && !l.current.contains(t) && n && c();
    };
    return l.current !== null && (e = (w = l.current) == null ? void 0 : w.parentElement, e == null || e.addEventListener("click", d)), () => {
      e == null || e.removeEventListener("click", d);
    };
  }, [n, c]), Y(() => {
    const e = l.current, d = (w) => {
      w.key === "Escape" && c();
    };
    return e == null || e.addEventListener("keydown", d), () => {
      e == null || e.removeEventListener("keydown", d);
    };
  }, [g, v, c]);
  const y = () => {
    if (g != null && g.some((e) => !e.isDeleted)) {
      const e = x == null ? void 0 : x.getAppState(), d = {
        exportBackground: e == null ? void 0 : e.exportBackground,
        exportScale: e == null ? void 0 : e.exportScale,
        exportWithDarkMode: (e == null ? void 0 : e.theme) === "dark",
        isBindingEnabled: e == null ? void 0 : e.isBindingEnabled,
        isLoading: e == null ? void 0 : e.isLoading,
        name: e == null ? void 0 : e.name,
        theme: e == null ? void 0 : e.theme,
        viewBackgroundColor: e == null ? void 0 : e.viewBackgroundColor,
        viewModeEnabled: e == null ? void 0 : e.viewModeEnabled,
        zenModeEnabled: e == null ? void 0 : e.zenModeEnabled,
        zoom: e == null ? void 0 : e.zoom
      };
      r(g, d, v);
    } else
      c();
  }, A = () => {
    M(!0);
  };
  function B() {
    return /* @__PURE__ */ s.jsxs(
      $,
      {
        title: "Discard",
        onClose: () => {
          M(!1);
        },
        closeOnClickOutside: !1,
        children: [
          "Are you sure you want to discard the changes?",
          /* @__PURE__ */ s.jsxs("div", { className: "ExcalidrawModal__discardModal", children: [
            /* @__PURE__ */ s.jsx(
              z,
              {
                onClick: () => {
                  M(!1), a();
                },
                children: "Discard"
              }
            ),
            " ",
            /* @__PURE__ */ s.jsx(
              z,
              {
                onClick: () => {
                  M(!1);
                },
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    );
  }
  if (m === !1)
    return null;
  const L = (e, d, w) => {
    j(e), D(w);
  };
  return U(
    /* @__PURE__ */ s.jsx("div", { className: "ExcalidrawModal__overlay", role: "dialog", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "ExcalidrawModal__modal",
        ref: l,
        tabIndex: -1,
        children: /* @__PURE__ */ s.jsxs("div", { className: "ExcalidrawModal__row", children: [
          o && /* @__PURE__ */ s.jsx(B, {}),
          /* @__PURE__ */ s.jsx(
            G,
            {
              onChange: L,
              excalidrawAPI: E,
              initialData: {
                appState: h || { isLoading: !1 },
                elements: f,
                files: i
              }
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "ExcalidrawModal__actions", children: [
            /* @__PURE__ */ s.jsx("button", { className: "action-button", onClick: A, children: "Discard" }),
            /* @__PURE__ */ s.jsx("button", { className: "action-button", onClick: y, children: "Save" })
          ] })
        ] })
      }
    ) }),
    document.body
  );
}
const Z = (n) => {
  var h;
  const r = (h = n == null ? void 0 : n.firstElementChild) == null ? void 0 : h.firstElementChild, f = n.getAttribute("viewBox");
  if (f != null) {
    const i = f.split(" ");
    n.setAttribute("width", i[2]), n.setAttribute("height", i[3]);
  }
  r && r.tagName === "style" && r.remove();
};
function K({
  elements: n,
  files: r,
  imageContainerRef: f,
  appState: h,
  rootClassName: i = null,
  width: m = "inherit",
  height: c = "inherit"
}) {
  const [a, l] = C(null);
  _(() => {
    (async () => {
      const o = await Q({
        appState: h,
        elements: n,
        files: r
      });
      Z(o), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("display", "block"), l(o);
    })();
  }, [n, r, h]);
  const x = {};
  return m !== "inherit" && (x.width = `${m}px`), c !== "inherit" && (x.height = `${c}px`), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: (E) => {
        E && f && (f.current = E);
      },
      className: i ?? "",
      style: x,
      dangerouslySetInnerHTML: { __html: (a == null ? void 0 : a.outerHTML) ?? "" }
    }
  );
}
function le({
  nodeKey: n,
  data: r,
  width: f,
  height: h
}) {
  const [i] = p(), m = F(), [c, a] = C(
    r === "[]" && i.isEditable()
  ), l = N(null), x = N(null), E = N(null), [o, M, g] = P(n), [j, v] = C(!1);
  _(() => {
    if (!m) {
      o && g();
      return;
    }
    return S(
      i.registerCommand(
        W,
        (t) => {
          const b = x.current, u = t.target;
          return j ? !0 : b !== null && H(u) && b.contains(u) ? (t.shiftKey || g(), M(!o), t.detail > 1 && a(!0), !0) : !1;
        },
        J
      )
    );
  }, [g, i, o, j, M, m]);
  const D = I(() => (a(!1), i.update(() => {
    const t = k(n);
    t && t.remove();
  })), [i, n]), y = (t, b, u) => i.update(() => {
    const R = k(n);
    T(R) && (t && t.length > 0 || Object.keys(u).length > 0 ? R.setData(
      JSON.stringify({
        appState: b,
        elements: t,
        files: u
      })
    ) : R.remove());
  }), A = () => {
    v(!0);
  }, B = (t, b) => {
    setTimeout(() => {
      v(!1);
    }, 200), i.update(() => {
      const u = k(n);
      T(u) && (u.setWidth(t), u.setHeight(b));
    });
  }, L = I(() => {
    a(!0);
  }, []), {
    elements: e = [],
    files: d = {},
    appState: w = {}
  } = q(() => JSON.parse(r), [r]), O = I(() => {
    a(!1), e.length === 0 && i.update(() => {
      const t = k(n);
      t && t.remove();
    });
  }, [i, n, e.length]);
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    m && c && /* @__PURE__ */ s.jsx(
      X,
      {
        initialElements: e,
        initialFiles: d,
        initialAppState: w,
        isShown: c,
        onDelete: D,
        onClose: O,
        onSave: (t, b, u) => {
          y(t, b, u), a(!1);
        },
        closeOnClickOutside: !1
      }
    ),
    e.length > 0 && /* @__PURE__ */ s.jsxs(
      "button",
      {
        ref: x,
        className: `excalidraw-button ${o ? "selected" : ""}`,
        children: [
          /* @__PURE__ */ s.jsx(
            K,
            {
              imageContainerRef: l,
              className: "image",
              elements: e,
              files: d,
              appState: w,
              width: f,
              height: h
            }
          ),
          o && m && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "image-edit-button",
              role: "button",
              tabIndex: 0,
              onMouseDown: (t) => t.preventDefault(),
              onClick: L
            }
          ),
          (o || j) && m && /* @__PURE__ */ s.jsx(
            V,
            {
              buttonRef: E,
              showCaption: !0,
              setShowCaption: () => null,
              imageRef: l,
              editor: i,
              onResizeStart: A,
              onResizeEnd: B,
              captionsEnabled: !0
            }
          )
        ]
      }
    )
  ] });
}
export {
  le as default
};
