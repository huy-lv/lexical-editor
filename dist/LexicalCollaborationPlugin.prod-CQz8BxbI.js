import { l as Q } from "./LexicalCollaborationContext.prod-DV6xOiZN.js";
import { o as V, j as T, A as W, C as X, F as Y, P as Z, G as $, H as ee, I as te, J as oe, N as re } from "./index-C5d_SB3B.js";
import * as ne from "react";
import { useRef as B, useEffect as b, useState as F, useCallback as L, useMemo as J } from "react";
import { mergeRegister as K } from "@lexical/utils";
import { FOCUS_COMMAND as se, COMMAND_PRIORITY_EDITOR as x, BLUR_COMMAND as ae, SKIP_COLLAB_TAG as z, UNDO_COMMAND as ie, REDO_COMMAND as ce, $getRoot as w, HISTORY_MERGE_TAG as P, $createParagraphNode as le, $getSelection as ue, CAN_UNDO_COMMAND as de, CAN_REDO_COMMAND as fe } from "lexical";
import { createPortal as me } from "react-dom";
import { UndoManager as pe } from "yjs";
function ge(t, c, e, m, r, S, v, n, y, D, _, p, l = X) {
  const s = B(!1), M = L(() => e.connect(), [e]), u = L(() => {
    try {
      e.disconnect();
    } catch {
    }
  }, [e]);
  b(() => {
    const { root: o } = n, { awareness: h } = e, g = ({ status: f }) => {
      t.dispatchCommand(oe, f === "connected");
    }, N = (f) => {
      v && f && o.isEmpty() && o._xmlText._length === 0 && s.current === !1 && function(i, a) {
        i.update(() => {
          const A = w();
          if (A.isEmpty()) if (a) switch (typeof a) {
            case "string": {
              const E = i.parseEditorState(a);
              i.setEditorState(E, { tag: P });
              break;
            }
            case "object":
              i.setEditorState(a, { tag: P });
              break;
            case "function":
              i.update(() => {
                w().isEmpty() && a(i);
              }, { tag: P });
          }
          else {
            const E = le();
            A.append(E);
            const { activeElement: R } = document;
            (ue() !== null || R !== null && R === i.getRootElement()) && E.select();
          }
        }, { tag: P });
      }(t, _), s.current = !1;
    }, k = () => {
      l(n, e);
    }, j = (f, i) => {
      const a = i.origin;
      a !== n && re(n, e, f, a instanceof pe, l);
    };
    Z(e, r, S, document.activeElement === t.getRootElement(), p || {});
    const C = (f) => {
      (function(i, a) {
        if (i.update(() => {
          const O = w();
          O.clear(), O.select();
        }, { tag: z }), a.cursors == null) return;
        const A = a.cursors;
        if (A == null) return;
        const E = a.cursorsContainer;
        if (E == null) return;
        const R = Array.from(A.values());
        for (let O = 0; O < R.length; O++) {
          const I = R[O].selection;
          if (I && I.selections != null) {
            const G = I.selections;
            for (let H = 0; H < G.length; H++) E.removeChild(G[O]);
          }
        }
      })(t, n), y(f), m.set(c, f), s.current = !0;
    };
    e.on("reload", C), e.on("status", g), e.on("sync", N), h.on("update", k), o.getSharedType().observeDeep(j);
    const q = t.registerUpdateListener(({ prevEditorState: f, editorState: i, dirtyLeaves: a, dirtyElements: A, normalizedNodes: E, tags: R }) => {
      R.has(z) === !1 && $(n, e, f, i, A, a, E, R);
    }), U = M();
    return () => {
      s.current === !1 && (U ? U.then(u) : u()), e.off("sync", N), e.off("status", g), e.off("reload", C), h.off("update", k), o.getSharedType().unobserveDeep(j), m.delete(c), q();
    };
  }, [n, S, M, u, m, t, c, _, r, e, v, p, y, l]);
  const d = J(() => me(T.jsx("div", { ref: (o) => {
    n.cursorsContainer = o;
  } }), D && D.current || document.body), [n, D]);
  return b(() => t.registerCommand(ee, (o) => (o ? (console.log("Collaboration connected!"), M()) : (console.log("Collaboration disconnected!"), u()), !0), x), [M, u, t]), d;
}
function Ce(t, c) {
  const e = J(() => te(c, c.root.getSharedType()), [c]);
  b(() => K(t.registerCommand(ie, () => (e.undo(), !0), x), t.registerCommand(ce, () => (e.redo(), !0), x)));
  const m = L(() => {
    e.clear();
  }, [e]);
  return ne.useEffect(() => {
    const r = () => {
      t.dispatchCommand(de, e.undoStack.length > 0), t.dispatchCommand(fe, e.redoStack.length > 0);
    };
    return e.on("stack-item-added", r), e.on("stack-item-popped", r), e.on("stack-cleared", r), () => {
      e.off("stack-item-added", r), e.off("stack-item-popped", r), e.off("stack-cleared", r);
    };
  }, [t, e]), m;
}
function Oe({ id: t, providerFactory: c, shouldBootstrap: e, username: m, cursorColor: r, cursorsContainerRef: S, initialEditorState: v, excludedProperties: n, awarenessData: y, syncCursorPositionsFn: D }) {
  const _ = B(!1), p = B(!1), l = Q(m, r), { yjsDocMap: s, name: M, color: u } = l, [d] = V();
  b(() => (l.isCollabActive = !0, () => {
    d._parentEditor == null && (l.isCollabActive = !1);
  }), [l, d]);
  const [o, h] = F(), [g, N] = F();
  b(() => {
    if (p.current) return;
    p.current = !0;
    const C = c(t, s);
    return h(C), N(s.get(t)), () => {
      C.disconnect();
    };
  }, [t, c, s]);
  const [k, j] = F();
  return b(() => {
    if (!o || _.current) return;
    _.current = !0;
    const C = W(d, o, t, g || s.get(t), s, n);
    return j(C), () => {
      C.root.destroy(C);
    };
  }, [d, o, t, s, g, n]), o && k ? T.jsx(Ee, { awarenessData: y, binding: k, collabContext: l, color: u, cursorsContainerRef: S, editor: d, id: t, initialEditorState: v, name: M, provider: o, setDoc: N, shouldBootstrap: e, yjsDocMap: s, syncCursorPositionsFn: D }) : T.jsx(T.Fragment, {});
}
function Ee({ editor: t, id: c, provider: e, yjsDocMap: m, name: r, color: S, shouldBootstrap: v, cursorsContainerRef: n, initialEditorState: y, awarenessData: D, collabContext: _, binding: p, setDoc: l, syncCursorPositionsFn: s }) {
  const M = ge(t, c, e, m, r, S, v, p, l, n, y, D, s);
  return _.clientID = p.clientID, Ce(t, p), function(u, d, o, h, g) {
    b(() => K(u.registerCommand(se, () => (Y(d, o, h, !0, g || {}), !1), x), u.registerCommand(ae, () => (Y(d, o, h, !1, g || {}), !1), x)), [h, u, o, d, g]);
  }(t, e, r, S, D), M;
}
export {
  Oe as _
};
