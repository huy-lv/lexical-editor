import { l as N } from "./LexicalCollaborationContext.prod-DV6xOiZN.js";
import { O as E, Q as L, j as y } from "./index-CzXsaai9.js";
import { getRegisteredNode as D, createSharedNodeState as x, getStaticNodeConfig as K } from "lexical";
import { useRef as O, useContext as R, useMemo as j, useEffect as w } from "react";
function k(e) {
  const i = /* @__PURE__ */ new Set(), { ownNodeConfig: l } = K(e), d = e.transform();
  if (l) {
    const f = l.$transform;
    f && i.add(f);
  }
  return d && i.add(d), i;
}
function P({ initialEditor: e, children: i, initialNodes: l, initialTheme: d, skipCollabChecks: f, skipEditableListener: g }) {
  const _ = O(!1), m = R(E);
  m == null && function(o, ...c) {
    const n = new URL("https://lexical.dev/docs/error"), a = new URLSearchParams();
    a.append("code", o);
    for (const t of c) a.append("v", t);
    throw n.search = a.toString(), Error(`Minified Lexical error #${o}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(9);
  const [s, { getTheme: M }] = m, S = j(() => {
    const o = d || M() || void 0, c = L(m, o);
    o !== void 0 && (e._config.theme = o), e._parentEditor = e._parentEditor || s;
    const n = e._createEditorArgs, a = n && n.namespace;
    if (l) {
      a || (e._config.namespace = s._config.namespace);
      for (let t of l) {
        let p = null, r = null;
        if (typeof t != "function") {
          const h = t;
          t = h.replace, p = h.with, r = h.withKlass || null;
        }
        const v = D(e, t.getType());
        e._nodes.set(t.getType(), { exportDOM: v ? v.exportDOM : void 0, klass: t, replace: p, replaceWithKlass: r, sharedNodeState: x(t), transforms: k(t) });
      }
    } else if (n && n.nodes) a || (e._config.namespace = s._config.namespace);
    else {
      const t = e._nodes = new Map(s._nodes);
      a || (e._config.namespace = s._config.namespace);
      for (const [p, r] of t) e._nodes.set(p, { exportDOM: r.exportDOM, klass: r.klass, replace: r.replace, replaceWithKlass: r.replaceWithKlass, sharedNodeState: x(r.klass), transforms: k(r.klass) });
    }
    return [e, c];
  }, []), { isCollabActive: b, yjsDocMap: C } = N(), u = f || _.current || C.has(e.getKey());
  return w(() => {
    u && (_.current = !0);
  }, [u]), w(() => {
    if (!g) {
      const o = (c) => e.setEditable(c);
      return o(s.isEditable()), s.registerEditableListener(o);
    }
  }, [e, s, g]), y.jsx(E.Provider, { value: S, children: !b || u ? i : null });
}
export {
  P as h
};
