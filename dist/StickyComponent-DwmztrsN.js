import { o as z, h as S, j as r, w as B, k as P, l as X, y as Y, n as _, p as $, z as h } from "./index-b9RrN2bn.js";
import { l as T } from "./LexicalCollaborationContext.prod-DV6xOiZN.js";
import { _ as W } from "./LexicalCollaborationPlugin.prod-YVomwQjX.js";
import { h as H } from "./LexicalNestedComposer.prod-BcvwlwJu.js";
import { calculateZoomLevel as E } from "@lexical/utils";
import { $getNodeByKey as C } from "lexical";
import { useRef as R, useEffect as b, useLayoutEffect as O } from "react";
function y(m, a) {
  const u = m.style, d = a.rootElementRect, p = d !== null ? d.left : 0, c = d !== null ? d.top : 0;
  u.top = c + a.y + "px", u.left = p + a.x + "px";
}
function I({
  x: m,
  y: a,
  nodeKey: u,
  color: d,
  caption: p
}) {
  const [c] = z(), l = R(null), f = R({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  }), { isCollabActive: L } = T();
  b(() => {
    const t = f.current;
    t.x = m, t.y = a;
    const o = l.current;
    o !== null && y(o, t);
  }, [m, a]), O(() => {
    const t = f.current, o = new ResizeObserver((s) => {
      for (let i = 0; i < s.length; i++) {
        const g = s[i], { target: w } = g;
        t.rootElementRect = w.getBoundingClientRect();
        const x = l.current;
        x !== null && y(x, t);
      }
    }), e = c.registerRootListener(
      (s, i) => {
        i !== null && o.unobserve(i), s !== null && o.observe(s);
      }
    ), n = () => {
      const s = c.getRootElement(), i = l.current;
      s !== null && i !== null && (t.rootElementRect = s.getBoundingClientRect(), y(i, t));
    };
    return window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n), e();
    };
  }, [c]), b(() => {
    const t = l.current;
    t !== null && setTimeout(() => {
      t.style.setProperty(
        "transition",
        "top 0.3s ease 0s, left 0.3s ease 0s"
      );
    }, 500);
  }, []);
  const k = (t) => {
    const o = l.current, e = f.current, n = e.rootElementRect, s = E(o);
    o !== null && e.isDragging && n !== null && (e.x = t.pageX / s - e.offsetX - n.left, e.y = t.pageY / s - e.offsetY - n.top, y(o, e));
  }, v = (t) => {
    const o = l.current, e = f.current;
    o !== null && (e.isDragging = !1, o.classList.remove("dragging"), c.update(() => {
      const n = C(u);
      h(n) && n.setPosition(e.x, e.y);
    })), document.removeEventListener("pointermove", k), document.removeEventListener("pointerup", v);
  }, j = () => {
    c.update(() => {
      const t = C(u);
      h(t) && t.remove();
    });
  }, N = () => {
    c.update(() => {
      const t = C(u);
      h(t) && t.toggleColor();
    });
  }, { historyState: D } = S();
  return /* @__PURE__ */ r.jsx("div", { ref: l, className: "sticky-note-container", children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `sticky-note ${d}`,
      onPointerDown: (t) => {
        const o = l.current;
        if (o == null || t.button === 2 || t.target !== o.firstChild)
          return;
        const e = o, n = f.current;
        if (e !== null) {
          const { top: s, left: i } = e.getBoundingClientRect(), g = E(e);
          n.offsetX = t.clientX / g - i, n.offsetY = t.clientY / g - s, n.isDragging = !0, e.classList.add("dragging"), document.addEventListener("pointermove", k), document.addEventListener("pointerup", v), t.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: j,
            className: "delete",
            "aria-label": "Delete sticky note",
            title: "Delete",
            children: "X"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: N,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ r.jsx("i", { className: "bucket" })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          H,
          {
            initialEditor: p,
            initialTheme: B,
            children: [
              L ? /* @__PURE__ */ r.jsx(
                W,
                {
                  id: p.getKey(),
                  providerFactory: P,
                  shouldBootstrap: !0
                }
              ) : /* @__PURE__ */ r.jsx(X, { externalHistoryState: D }),
              /* @__PURE__ */ r.jsx(
                Y,
                {
                  contentEditable: /* @__PURE__ */ r.jsx(
                    $,
                    {
                      placeholder: "What's up?",
                      placeholderClassName: "StickyNode__placeholder",
                      className: "StickyNode__contentEditable"
                    }
                  ),
                  ErrorBoundary: _
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
export {
  I as default
};
