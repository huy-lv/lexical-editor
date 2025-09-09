import { j as V, o as Bn, u as _n, $ as Vn } from "./index-b9RrN2bn.js";
import * as m from "react";
import { useLayoutEffect as cn, useState as $e, useRef as Wn, useEffect as jn } from "react";
import * as ln from "react-dom";
import { setHours as Dt, setMinutes as Mt } from "date-fns";
import { $getNodeByKey as Hn } from "lexical";
import { DayPicker as qn } from "react-day-picker";
function Je() {
  return typeof window < "u";
}
function xe(e) {
  return St(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function J(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ce(e) {
  var t;
  return (t = (St(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function St(e) {
  return Je() ? e instanceof Node || e instanceof J(e).Node : !1;
}
function H(e) {
  return Je() ? e instanceof Element || e instanceof J(e).Element : !1;
}
function X(e) {
  return Je() ? e instanceof HTMLElement || e instanceof J(e).HTMLElement : !1;
}
function ht(e) {
  return !Je() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof J(e).ShadowRoot;
}
const Kn = /* @__PURE__ */ new Set(["inline", "contents"]);
function Fe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Kn.has(o);
}
const Un = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Xn(e) {
  return Un.has(xe(e));
}
const Yn = [":popover-open", ":modal"];
function Qe(e) {
  return Yn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const zn = ["transform", "translate", "scale", "rotate", "perspective"], Gn = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Zn = ["paint", "layout", "strict", "content"];
function Ct(e) {
  const t = et(), n = H(e) ? te(e) : e;
  return zn.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Gn.some((r) => (n.willChange || "").includes(r)) || Zn.some((r) => (n.contain || "").includes(r));
}
function Jn(e) {
  let t = fe(e);
  for (; X(t) && !ue(t); ) {
    if (Ct(t))
      return t;
    if (Qe(t))
      return null;
    t = fe(t);
  }
  return null;
}
function et() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Qn = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ue(e) {
  return Qn.has(xe(e));
}
function te(e) {
  return J(e).getComputedStyle(e);
}
function tt(e) {
  return H(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function fe(e) {
  if (xe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ht(e) && e.host || // Fallback.
    ce(e)
  );
  return ht(t) ? t.host : t;
}
function an(e) {
  const t = fe(e);
  return ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : X(t) && Fe(t) ? t : an(t);
}
function ve(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = an(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = J(o);
  if (i) {
    const c = bt(s);
    return t.concat(s, s.visualViewport || [], Fe(o) ? o : [], c && n ? ve(c) : []);
  }
  return t.concat(o, ve(o, [], n));
}
function bt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const He = Math.min, we = Math.max, qe = Math.round, Be = Math.floor, se = (e) => ({
  x: e,
  y: e
}), er = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, tr = {
  start: "end",
  end: "start"
};
function Ft(e, t, n) {
  return we(e, He(t, n));
}
function nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Re(e) {
  return e.split("-")[0];
}
function rt(e) {
  return e.split("-")[1];
}
function un(e) {
  return e === "x" ? "y" : "x";
}
function fn(e) {
  return e === "y" ? "height" : "width";
}
const nr = /* @__PURE__ */ new Set(["top", "bottom"]);
function he(e) {
  return nr.has(Re(e)) ? "y" : "x";
}
function dn(e) {
  return un(he(e));
}
function rr(e, t, n) {
  n === void 0 && (n = !1);
  const r = rt(e), o = dn(e), i = fn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ke(s)), [s, Ke(s)];
}
function or(e) {
  const t = Ke(e);
  return [vt(e), t, vt(t)];
}
function vt(e) {
  return e.replace(/start|end/g, (t) => tr[t]);
}
const Lt = ["left", "right"], kt = ["right", "left"], ir = ["top", "bottom"], sr = ["bottom", "top"];
function cr(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? kt : Lt : t ? Lt : kt;
    case "left":
    case "right":
      return t ? ir : sr;
    default:
      return [];
  }
}
function lr(e, t, n, r) {
  const o = rt(e);
  let i = cr(Re(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(vt)))), i;
}
function Ke(e) {
  return e.replace(/left|right|bottom|top/g, (t) => er[t]);
}
function ar(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ur(e) {
  return typeof e != "number" ? ar(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ue(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var fr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Xe = /* @__PURE__ */ fr.join(","), mn = typeof Element > "u", Pe = mn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ye = !mn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, ze = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = o === "" || o === "true", s = i || n && t && e(t.parentNode);
  return s;
}, dr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, pn = function(t, n, r) {
  if (ze(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(Xe));
  return n && Pe.call(t, Xe) && o.unshift(t), o = o.filter(r), o;
}, gn = function e(t, n, r) {
  for (var o = [], i = Array.from(t); i.length; ) {
    var s = i.shift();
    if (!ze(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), a = c.length ? c : s.children, l = e(a, !0, r);
        r.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: s,
          candidates: l
        });
      } else {
        var f = Pe.call(s, Xe);
        f && r.filter(s) && (n || !t.includes(s)) && o.push(s);
        var d = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), g = !ze(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (d && g) {
          var u = e(d === !0 ? s.children : d.children, !0, r);
          r.flatten ? o.push.apply(o, u) : o.push({
            scopeParent: s,
            candidates: u
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return o;
}, hn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, bn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || dr(t)) && !hn(t) ? 0 : t.tabIndex;
}, mr = function(t, n) {
  var r = bn(t);
  return r < 0 && n && !hn(t) ? 0 : r;
}, pr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, vn = function(t) {
  return t.tagName === "INPUT";
}, gr = function(t) {
  return vn(t) && t.type === "hidden";
}, hr = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, br = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, vr = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Ye(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(t.name));
  else
    try {
      o = r(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var i = br(o, t.form);
  return !i || i === t;
}, xr = function(t) {
  return vn(t) && t.type === "radio";
}, yr = function(t) {
  return xr(t) && !vr(t);
}, wr = function(t) {
  var n, r = t && Ye(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var s, c, a;
    for (i = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !i && o; ) {
      var l, f, d;
      r = Ye(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, i = !!((f = o) !== null && f !== void 0 && (d = f.ownerDocument) !== null && d !== void 0 && d.contains(o));
    }
  }
  return i;
}, Nt = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Rr = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = Pe.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Pe.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var a = t.parentElement, l = Ye(t);
        if (a && !a.shadowRoot && o(a) === !0)
          return Nt(t);
        t.assignedSlot ? t = t.assignedSlot : !a && l !== t.ownerDocument ? t = l.host : t = a;
      }
      t = c;
    }
    if (wr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Nt(t);
  return !1;
}, Er = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return Pe.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, xt = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  ze(n) || gr(n) || Rr(n, t) || // For a details element with a summary, the summary element gets the focus
  hr(n) || Er(n));
}, yt = function(t, n) {
  return !(yr(n) || bn(n) < 0 || !xt(t, n));
}, Sr = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Cr = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, i) {
    var s = !!o.scopeParent, c = s ? o.scopeParent : o, a = mr(c, s), l = s ? e(o.candidates) : c;
    a === 0 ? s ? n.push.apply(n, l) : n.push(c) : r.push({
      documentOrder: i,
      tabIndex: a,
      item: o,
      isScope: s,
      content: l
    });
  }), r.sort(pr).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(n);
}, ot = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = gn([t], n.includeContainer, {
    filter: yt.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Sr
  }) : r = pn(t, n.includeContainer, yt.bind(null, n)), Cr(r);
}, Tr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = gn([t], n.includeContainer, {
    filter: xt.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = pn(t, n.includeContainer, xt.bind(null, n)), r;
}, xn = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Pe.call(t, Xe) === !1 ? !1 : yt(n, t);
}, Ar = {};
function yn() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function wn() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function Or() {
  return /apple/i.test(navigator.vendor);
}
function wt() {
  const e = /android/i;
  return e.test(yn()) || e.test(wn());
}
function Ir() {
  return wn().includes("jsdom/");
}
const $t = "data-floating-ui-focusable", Pr = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Te(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function G(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ht(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function ge(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function at(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Dr(e) {
  return e.matches("html,body");
}
function re(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Mr(e) {
  return X(e) && e.matches(Pr);
}
function Bt(e) {
  return e ? e.getAttribute("role") === "combobox" && Mr(e) : !1;
}
function Rt(e) {
  return e ? e.hasAttribute($t) ? e : e.querySelector("[" + $t + "]") || e : null;
}
function Ae(e, t, n) {
  return n === void 0 && (n = !0), e.filter((o) => {
    var i;
    return o.parentId === t && (!n || ((i = o.context) == null ? void 0 : i.open));
  }).flatMap((o) => [o, ...Ae(e, o.id, n)]);
}
function _t(e, t) {
  var n;
  let r = [], o = (n = e.find((i) => i.id === t)) == null ? void 0 : n.parentId;
  for (; o; ) {
    const i = e.find((s) => s.id === o);
    o = i == null ? void 0 : i.parentId, i && (r = r.concat(i));
  }
  return r;
}
function ut(e) {
  e.preventDefault(), e.stopPropagation();
}
function Fr(e) {
  return "nativeEvent" in e;
}
function Lr(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : wt() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function kr(e) {
  return Ir() ? !1 : !wt() && e.width === 0 && e.height === 0 || wt() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
var Nr = typeof document < "u", $r = function() {
}, Z = Nr ? cn : $r;
const Br = {
  ...m
};
function ft(e) {
  const t = m.useRef(e);
  return Z(() => {
    t.current = e;
  }), t;
}
const _r = Br.useInsertionEffect, Vr = _r || ((e) => e());
function ie(e) {
  const t = m.useRef(() => {
    if (Ar.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Vr(() => {
    t.current = e;
  }), m.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
const Le = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Rn(e, t) {
  const n = ot(e, Le()), r = n.length;
  if (r === 0) return;
  const o = Te(re(e)), i = n.indexOf(o), s = i === -1 ? t === 1 ? 0 : r - 1 : i + t;
  return n[s];
}
function En(e) {
  return Rn(re(e).body, 1) || e;
}
function Sn(e) {
  return Rn(re(e).body, -1) || e;
}
function De(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !G(n, r);
}
function Wr(e) {
  ot(e, Le()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function Vt(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
function Wt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = he(t), s = dn(t), c = fn(s), a = Re(t), l = i === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, g = r[c] / 2 - o[c] / 2;
  let u;
  switch (a) {
    case "top":
      u = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      u = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      u = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      u = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      u = {
        x: r.x,
        y: r.y
      };
  }
  switch (rt(t)) {
    case "start":
      u[s] -= g * (n && l ? -1 : 1);
      break;
    case "end":
      u[s] += g * (n && l ? -1 : 1);
      break;
  }
  return u;
}
const jr = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = Wt(l, r, a), g = r, u = {}, h = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: w,
      fn: v
    } = c[b], {
      x: p,
      y: x,
      data: S,
      reset: C
    } = await v({
      x: f,
      y: d,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: u,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = p ?? f, d = x ?? d, u = {
      ...u,
      [w]: {
        ...u[w],
        ...S
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (g = C.placement), C.rects && (l = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: d
    } = Wt(l, g, a)), b = -1);
  }
  return {
    x: f,
    y: d,
    placement: g,
    strategy: o,
    middlewareData: u
  };
};
async function Cn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: c,
    strategy: a
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: g = !1,
    padding: u = 0
  } = nt(t, e), h = ur(u), w = c[g ? d === "floating" ? "reference" : "floating" : d], v = Ue(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: a
  })), p = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ue(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: p,
    offsetParent: x,
    strategy: a
  }) : p);
  return {
    top: (v.top - C.top + h.top) / S.y,
    bottom: (C.bottom - v.bottom + h.bottom) / S.y,
    left: (v.left - C.left + h.left) / S.x,
    right: (C.right - v.right + h.right) / S.x
  };
}
const Hr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: a,
        elements: l
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: g,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: b = !0,
        ...w
      } = nt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = Re(o), p = he(c), x = Re(c) === c, S = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), C = g || (x || !b ? [Ke(c)] : or(c)), _ = h !== "none";
      !g && _ && C.push(...lr(c, b, h, S));
      const L = [c, ...C], W = await Cn(t, w), T = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && T.push(W[v]), d) {
        const R = rr(o, s, S);
        T.push(W[R[0]], W[R[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var I, Y;
        const R = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, E = L[R];
        if (E && (!(d === "alignment" ? p !== he(E) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((y) => he(y.placement) === p ? y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: R,
              overflows: A
            },
            reset: {
              placement: E
            }
          };
        let k = (Y = A.filter(($) => $.overflows[0] <= 0).sort(($, y) => $.overflows[1] - y.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!k)
          switch (u) {
            case "bestFit": {
              var j;
              const $ = (j = A.filter((y) => {
                if (_) {
                  const D = he(y.placement);
                  return D === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((y) => [y.placement, y.overflows.filter((D) => D > 0).reduce((D, B) => D + B, 0)]).sort((y, D) => y[1] - D[1])[0]) == null ? void 0 : j[0];
              $ && (k = $);
              break;
            }
            case "initialPlacement":
              k = c;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
}, qr = /* @__PURE__ */ new Set(["left", "top"]);
async function Kr(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Re(n), c = rt(n), a = he(n) === "y", l = qr.has(s) ? -1 : 1, f = i && a ? -1 : 1, d = nt(t, e);
  let {
    mainAxis: g,
    crossAxis: u,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return c && typeof h == "number" && (u = c === "end" ? h * -1 : h), a ? {
    x: u * f,
    y: g * l
  } : {
    x: g * l,
    y: u * f
  };
}
const Ur = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: c
      } = t, a = await Kr(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, Xr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (w) => {
            let {
              x: v,
              y: p
            } = w;
            return {
              x: v,
              y: p
            };
          }
        },
        ...a
      } = nt(e, t), l = {
        x: n,
        y: r
      }, f = await Cn(t, a), d = he(Re(o)), g = un(d);
      let u = l[g], h = l[d];
      if (i) {
        const w = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", p = u + f[w], x = u - f[v];
        u = Ft(p, u, x);
      }
      if (s) {
        const w = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = h + f[w], x = h - f[v];
        h = Ft(p, h, x);
      }
      const b = c.fn({
        ...t,
        [g]: u,
        [d]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [g]: i,
            [d]: s
          }
        }
      };
    }
  };
};
function Tn(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = X(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = qe(n) !== i || qe(r) !== s;
  return c && (n = i, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Tt(e) {
  return H(e) ? e : e.contextElement;
}
function Oe(e) {
  const t = Tt(e);
  if (!X(t))
    return se(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Tn(t);
  let s = (i ? qe(n.width) : n.width) / r, c = (i ? qe(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Yr = /* @__PURE__ */ se(0);
function An(e) {
  const t = J(e);
  return !et() || !t.visualViewport ? Yr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function zr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== J(e) ? !1 : t;
}
function Ee(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Tt(e);
  let s = se(1);
  t && (r ? H(r) && (s = Oe(r)) : s = Oe(e));
  const c = zr(i, n, r) ? An(i) : se(0);
  let a = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, f = o.width / s.x, d = o.height / s.y;
  if (i) {
    const g = J(i), u = r && H(r) ? J(r) : r;
    let h = g, b = bt(h);
    for (; b && r && u !== h; ) {
      const w = Oe(b), v = b.getBoundingClientRect(), p = te(b), x = v.left + (b.clientLeft + parseFloat(p.paddingLeft)) * w.x, S = v.top + (b.clientTop + parseFloat(p.paddingTop)) * w.y;
      a *= w.x, l *= w.y, f *= w.x, d *= w.y, a += x, l += S, h = J(b), b = bt(h);
    }
  }
  return Ue({
    width: f,
    height: d,
    x: a,
    y: l
  });
}
function it(e, t) {
  const n = tt(e).scrollLeft;
  return t ? t.left + n : Ee(ce(e)).left + n;
}
function On(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - it(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Gr(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = ce(r), c = t ? Qe(t.floating) : !1;
  if (r === s || c && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = se(1);
  const f = se(0), d = X(r);
  if ((d || !d && !i) && ((xe(r) !== "body" || Fe(s)) && (a = tt(r)), X(r))) {
    const u = Ee(r);
    l = Oe(r), f.x = u.x + r.clientLeft, f.y = u.y + r.clientTop;
  }
  const g = s && !d && !i ? On(s, a) : se(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - a.scrollLeft * l.x + f.x + g.x,
    y: n.y * l.y - a.scrollTop * l.y + f.y + g.y
  };
}
function Zr(e) {
  return Array.from(e.getClientRects());
}
function Jr(e) {
  const t = ce(e), n = tt(e), r = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = we(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + it(e);
  const c = -n.scrollTop;
  return te(r).direction === "rtl" && (s += we(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
const jt = 25;
function Qr(e, t) {
  const n = J(e), r = ce(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, c = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const f = et();
    (!f || f && t === "fixed") && (c = o.offsetLeft, a = o.offsetTop);
  }
  const l = it(r);
  if (l <= 0) {
    const f = r.ownerDocument, d = f.body, g = getComputedStyle(d), u = f.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, h = Math.abs(r.clientWidth - d.clientWidth - u);
    h <= jt && (i -= h);
  } else l <= jt && (i += l);
  return {
    width: i,
    height: s,
    x: c,
    y: a
  };
}
const eo = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function to(e, t) {
  const n = Ee(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = X(e) ? Oe(e) : se(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, a = o * i.x, l = r * i.y;
  return {
    width: s,
    height: c,
    x: a,
    y: l
  };
}
function Ht(e, t, n) {
  let r;
  if (t === "viewport")
    r = Qr(e, n);
  else if (t === "document")
    r = Jr(ce(e));
  else if (H(t))
    r = to(t, n);
  else {
    const o = An(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ue(r);
}
function In(e, t) {
  const n = fe(e);
  return n === t || !H(n) || ue(n) ? !1 : te(n).position === "fixed" || In(n, t);
}
function no(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ve(e, [], !1).filter((c) => H(c) && xe(c) !== "body"), o = null;
  const i = te(e).position === "fixed";
  let s = i ? fe(e) : e;
  for (; H(s) && !ue(s); ) {
    const c = te(s), a = Ct(s);
    !a && c.position === "fixed" && (o = null), (i ? !a && !o : !a && c.position === "static" && !!o && eo.has(o.position) || Fe(s) && !a && In(e, s)) ? r = r.filter((f) => f !== s) : o = c, s = fe(s);
  }
  return t.set(e, r), r;
}
function ro(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Qe(t) ? [] : no(t, this._c) : [].concat(n), r], c = s[0], a = s.reduce((l, f) => {
    const d = Ht(t, f, o);
    return l.top = we(d.top, l.top), l.right = He(d.right, l.right), l.bottom = He(d.bottom, l.bottom), l.left = we(d.left, l.left), l;
  }, Ht(t, c, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function oo(e) {
  const {
    width: t,
    height: n
  } = Tn(e);
  return {
    width: t,
    height: n
  };
}
function io(e, t, n) {
  const r = X(t), o = ce(t), i = n === "fixed", s = Ee(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = se(0);
  function l() {
    a.x = it(o);
  }
  if (r || !r && !i)
    if ((xe(t) !== "body" || Fe(o)) && (c = tt(t)), r) {
      const u = Ee(t, !0, i, t);
      a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
    } else o && l();
  i && !r && o && l();
  const f = o && !r && !i ? On(o, c) : se(0), d = s.left + c.scrollLeft - a.x - f.x, g = s.top + c.scrollTop - a.y - f.y;
  return {
    x: d,
    y: g,
    width: s.width,
    height: s.height
  };
}
function dt(e) {
  return te(e).position === "static";
}
function qt(e, t) {
  if (!X(e) || te(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ce(e) === n && (n = n.ownerDocument.body), n;
}
function Pn(e, t) {
  const n = J(e);
  if (Qe(e))
    return n;
  if (!X(e)) {
    let o = fe(e);
    for (; o && !ue(o); ) {
      if (H(o) && !dt(o))
        return o;
      o = fe(o);
    }
    return n;
  }
  let r = qt(e, t);
  for (; r && Xn(r) && dt(r); )
    r = qt(r, t);
  return r && ue(r) && dt(r) && !Ct(r) ? n : r || Jn(e) || n;
}
const so = async function(e) {
  const t = this.getOffsetParent || Pn, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: io(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function co(e) {
  return te(e).direction === "rtl";
}
const lo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gr,
  getDocumentElement: ce,
  getClippingRect: ro,
  getOffsetParent: Pn,
  getElementRects: so,
  getClientRects: Zr,
  getDimensions: oo,
  getScale: Oe,
  isElement: H,
  isRTL: co
};
function Dn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ao(e, t) {
  let n = null, r;
  const o = ce(e);
  function i() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), i();
    const l = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: g,
      height: u
    } = l;
    if (c || t(), !g || !u)
      return;
    const h = Be(d), b = Be(o.clientWidth - (f + g)), w = Be(o.clientHeight - (d + u)), v = Be(f), x = {
      rootMargin: -h + "px " + -b + "px " + -w + "px " + -v + "px",
      threshold: we(0, He(1, a)) || 1
    };
    let S = !0;
    function C(_) {
      const L = _[0].intersectionRatio;
      if (L !== a) {
        if (!S)
          return s();
        L ? s(!1, L) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      L === 1 && !Dn(l, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function uo(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, l = Tt(e), f = o || i ? [...l ? ve(l) : [], ...ve(t)] : [];
  f.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = l && c ? ao(l, n) : null;
  let g = -1, u = null;
  s && (u = new ResizeObserver((v) => {
    let [p] = v;
    p && p.target === l && u && (u.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var x;
      (x = u) == null || x.observe(t);
    })), n();
  }), l && !a && u.observe(l), u.observe(t));
  let h, b = a ? Ee(e) : null;
  a && w();
  function w() {
    const v = Ee(e);
    b && !Dn(b, v) && n(), b = v, h = requestAnimationFrame(w);
  }
  return n(), () => {
    var v;
    f.forEach((p) => {
      o && p.removeEventListener("scroll", n), i && p.removeEventListener("resize", n);
    }), d == null || d(), (v = u) == null || v.disconnect(), u = null, a && cancelAnimationFrame(h);
  };
}
const fo = Ur, mo = Xr, po = Hr, go = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: lo,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return jr(e, t, {
    ...o,
    platform: i
  });
};
var ho = typeof document < "u", bo = function() {
}, je = ho ? cn : bo;
function Ge(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ge(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ge(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Mn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kt(e, t) {
  const n = Mn(e);
  return Math.round(t * n) / n;
}
function mt(e) {
  const t = m.useRef(e);
  return je(() => {
    t.current = e;
  }), t;
}
function vo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: a,
    open: l
  } = e, [f, d] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, u] = m.useState(r);
  Ge(g, r) || u(r);
  const [h, b] = m.useState(null), [w, v] = m.useState(null), p = m.useCallback((y) => {
    y !== _.current && (_.current = y, b(y));
  }, []), x = m.useCallback((y) => {
    y !== L.current && (L.current = y, v(y));
  }, []), S = i || h, C = s || w, _ = m.useRef(null), L = m.useRef(null), W = m.useRef(f), T = a != null, A = mt(a), I = mt(o), Y = mt(l), j = m.useCallback(() => {
    if (!_.current || !L.current)
      return;
    const y = {
      placement: t,
      strategy: n,
      middleware: g
    };
    I.current && (y.platform = I.current), go(_.current, L.current, y).then((D) => {
      const B = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      R.current && !Ge(W.current, B) && (W.current = B, ln.flushSync(() => {
        d(B);
      }));
    });
  }, [g, t, n, I, Y]);
  je(() => {
    l === !1 && W.current.isPositioned && (W.current.isPositioned = !1, d((y) => ({
      ...y,
      isPositioned: !1
    })));
  }, [l]);
  const R = m.useRef(!1);
  je(() => (R.current = !0, () => {
    R.current = !1;
  }), []), je(() => {
    if (S && (_.current = S), C && (L.current = C), S && C) {
      if (A.current)
        return A.current(S, C, j);
      j();
    }
  }, [S, C, j, A, T]);
  const E = m.useMemo(() => ({
    reference: _,
    floating: L,
    setReference: p,
    setFloating: x
  }), [p, x]), k = m.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), $ = m.useMemo(() => {
    const y = {
      position: n,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return y;
    const D = Kt(k.floating, f.x), B = Kt(k.floating, f.y);
    return c ? {
      ...y,
      transform: "translate(" + D + "px, " + B + "px)",
      ...Mn(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: B
    };
  }, [n, c, k.floating, f.x, f.y]);
  return m.useMemo(() => ({
    ...f,
    update: j,
    refs: E,
    elements: k,
    floatingStyles: $
  }), [f, j, E, k, $]);
}
const xo = (e, t) => ({
  ...fo(e),
  options: [e, t]
}), yo = (e, t) => ({
  ...mo(e),
  options: [e, t]
}), wo = (e, t) => ({
  ...po(e),
  options: [e, t]
});
var Fn = {};
const Ro = "data-floating-ui-focusable", Ut = "active", Xt = "selected", Eo = {
  ...m
};
let Yt = !1, So = 0;
const zt = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + So++
);
function Co() {
  const [e, t] = m.useState(() => Yt ? zt() : void 0);
  return Z(() => {
    e == null && t(zt());
  }, []), m.useEffect(() => {
    Yt = !0;
  }, []), e;
}
const To = Eo.useId, At = To || Co;
let Et;
Fn.NODE_ENV !== "production" && (Et = /* @__PURE__ */ new Set());
function Ao() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Et) != null && e.has(o))) {
    var i;
    (i = Et) == null || i.add(o), console.error(o);
  }
}
function Oo() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
    },
    off(t, n) {
      var r;
      (r = e.get(t)) == null || r.delete(n);
    }
  };
}
const Io = /* @__PURE__ */ m.createContext(null), Po = /* @__PURE__ */ m.createContext(null), Ln = () => {
  var e;
  return ((e = m.useContext(Io)) == null ? void 0 : e.id) || null;
}, Ot = () => m.useContext(Po);
function Me(e) {
  return "data-floating-ui-" + e;
}
function Do(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
let Gt = 0;
function Ce(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: o = !1
  } = t;
  r && cancelAnimationFrame(Gt);
  const i = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  o ? i() : Gt = requestAnimationFrame(i);
}
function Mo(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
const Ie = {
  inert: /* @__PURE__ */ new WeakMap(),
  "aria-hidden": /* @__PURE__ */ new WeakMap(),
  none: /* @__PURE__ */ new WeakMap()
};
function Zt(e) {
  return e === "inert" ? Ie.inert : e === "aria-hidden" ? Ie["aria-hidden"] : Ie.none;
}
let _e = /* @__PURE__ */ new WeakSet(), Ve = {}, pt = 0;
const Fo = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, kn = (e) => e && (e.host || kn(e.parentNode)), Lo = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = kn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function ko(e, t, n, r) {
  const o = "data-floating-ui-inert", i = r ? "inert" : n ? "aria-hidden" : null, s = Lo(t, e), c = /* @__PURE__ */ new Set(), a = new Set(s), l = [];
  Ve[o] || (Ve[o] = /* @__PURE__ */ new WeakMap());
  const f = Ve[o];
  s.forEach(d), g(t), c.clear();
  function d(u) {
    !u || c.has(u) || (c.add(u), u.parentNode && d(u.parentNode));
  }
  function g(u) {
    !u || a.has(u) || [].forEach.call(u.children, (h) => {
      if (xe(h) !== "script")
        if (c.has(h))
          g(h);
        else {
          const b = i ? h.getAttribute(i) : null, w = b !== null && b !== "false", v = Zt(i), p = (v.get(h) || 0) + 1, x = (f.get(h) || 0) + 1;
          v.set(h, p), f.set(h, x), l.push(h), p === 1 && w && _e.add(h), x === 1 && h.setAttribute(o, ""), !w && i && h.setAttribute(i, i === "inert" ? "" : "true");
        }
    });
  }
  return pt++, () => {
    l.forEach((u) => {
      const h = Zt(i), w = (h.get(u) || 0) - 1, v = (f.get(u) || 0) - 1;
      h.set(u, w), f.set(u, v), w || (!_e.has(u) && i && u.removeAttribute(i), _e.delete(u)), v || u.removeAttribute(o);
    }), pt--, pt || (Ie.inert = /* @__PURE__ */ new WeakMap(), Ie["aria-hidden"] = /* @__PURE__ */ new WeakMap(), Ie.none = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakSet(), Ve = {});
  };
}
function Jt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = Mo(e[0]).body;
  return ko(e.concat(Array.from(r.querySelectorAll('[aria-live],[role="status"],output'))), r, t, n);
}
const st = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, Ze = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const [r, o] = m.useState();
  Z(() => {
    Or() && o("button");
  }, []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Me("focus-guard")]: "",
    style: st
  };
  return /* @__PURE__ */ V.jsx("span", {
    ...t,
    ...i
  });
}), Nn = /* @__PURE__ */ m.createContext(null), Qt = /* @__PURE__ */ Me("portal");
function No(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = At(), o = $n(), [i, s] = m.useState(null), c = m.useRef(null);
  return Z(() => () => {
    i == null || i.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [i]), Z(() => {
    if (!r || c.current) return;
    const a = t ? document.getElementById(t) : null;
    if (!a) return;
    const l = document.createElement("div");
    l.id = r, l.setAttribute(Qt, ""), a.appendChild(l), c.current = l, s(l);
  }, [t, r]), Z(() => {
    if (n === null || !r || c.current) return;
    let a = n || (o == null ? void 0 : o.portalNode);
    a && !St(a) && (a = a.current), a = a || document.body;
    let l = null;
    t && (l = document.createElement("div"), l.id = t, a.appendChild(l));
    const f = document.createElement("div");
    f.id = r, f.setAttribute(Qt, ""), a = l || a, a.appendChild(f), c.current = f, s(f);
  }, [t, n, r, o]), i;
}
function $o(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: o = !0
  } = e, i = No({
    id: n,
    root: r
  }), [s, c] = m.useState(null), a = m.useRef(null), l = m.useRef(null), f = m.useRef(null), d = m.useRef(null), g = s == null ? void 0 : s.modal, u = s == null ? void 0 : s.open, h = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!s && // Guards are only for non-modal focus management.
    !s.modal && // Don't render if unmount is transitioning.
    s.open && o && !!(r || i)
  );
  return m.useEffect(() => {
    if (!i || !o || g)
      return;
    function b(w) {
      i && De(w) && (w.type === "focusin" ? Vt : Wr)(i);
    }
    return i.addEventListener("focusin", b, !0), i.addEventListener("focusout", b, !0), () => {
      i.removeEventListener("focusin", b, !0), i.removeEventListener("focusout", b, !0);
    };
  }, [i, o, g]), m.useEffect(() => {
    i && (u || Vt(i));
  }, [u, i]), /* @__PURE__ */ V.jsxs(Nn.Provider, {
    value: m.useMemo(() => ({
      preserveTabOrder: o,
      beforeOutsideRef: a,
      afterOutsideRef: l,
      beforeInsideRef: f,
      afterInsideRef: d,
      portalNode: i,
      setFocusManagerState: c
    }), [o, i]),
    children: [h && i && /* @__PURE__ */ V.jsx(Ze, {
      "data-type": "outside",
      ref: a,
      onFocus: (b) => {
        if (De(b, i)) {
          var w;
          (w = f.current) == null || w.focus();
        } else {
          const v = s ? s.domReference : null, p = Sn(v);
          p == null || p.focus();
        }
      }
    }), h && i && /* @__PURE__ */ V.jsx("span", {
      "aria-owns": i.id,
      style: st
    }), i && /* @__PURE__ */ ln.createPortal(t, i), h && i && /* @__PURE__ */ V.jsx(Ze, {
      "data-type": "outside",
      ref: l,
      onFocus: (b) => {
        if (De(b, i)) {
          var w;
          (w = d.current) == null || w.focus();
        } else {
          const v = s ? s.domReference : null, p = En(v);
          p == null || p.focus(), s != null && s.closeOnFocusOut && (s == null || s.onOpenChange(!1, b.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const $n = () => m.useContext(Nn);
function en(e) {
  return m.useMemo(() => (t) => {
    e.forEach((n) => {
      n && (n.current = t);
    });
  }, e);
}
const Bo = 20;
let be = [];
function It() {
  be = be.filter((e) => e.isConnected);
}
function _o(e) {
  It(), e && xe(e) !== "body" && (be.push(e), be.length > Bo && (be = be.slice(-20)));
}
function tn() {
  return It(), be[be.length - 1];
}
function Vo(e) {
  const t = Le();
  return xn(e, t) ? e : ot(e, t)[0] || e;
}
function nn(e, t) {
  var n;
  if (!t.current.includes("floating") && !((n = e.getAttribute("role")) != null && n.includes("dialog")))
    return;
  const r = Le(), i = Tr(e, r).filter((c) => {
    const a = c.getAttribute("data-tabindex") || "";
    return xn(c, r) || c.hasAttribute("data-tabindex") && !a.startsWith("-");
  }), s = e.getAttribute("tabindex");
  t.current.includes("floating") || i.length === 0 ? s !== "0" && e.setAttribute("tabindex", "0") : (s !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
const Wo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  return /* @__PURE__ */ V.jsx("button", {
    ...t,
    type: "button",
    ref: n,
    tabIndex: -1,
    style: st
  });
});
function jo(e) {
  const {
    context: t,
    children: n,
    disabled: r = !1,
    order: o = ["content"],
    guards: i = !0,
    initialFocus: s = 0,
    returnFocus: c = !0,
    restoreFocus: a = !1,
    modal: l = !0,
    visuallyHiddenDismiss: f = !1,
    closeOnFocusOut: d = !0,
    outsideElementsInert: g = !1,
    getInsideElements: u = () => []
  } = e, {
    open: h,
    onOpenChange: b,
    events: w,
    dataRef: v,
    elements: {
      domReference: p,
      floating: x
    }
  } = t, S = ie(() => {
    var O;
    return (O = v.current.floatingContext) == null ? void 0 : O.nodeId;
  }), C = ie(u), _ = typeof s == "number" && s < 0, L = Bt(p) && _, W = Fo(), T = W ? i : !0, A = !T || W && g, I = ft(o), Y = ft(s), j = ft(c), R = Ot(), E = $n(), k = m.useRef(null), $ = m.useRef(null), y = m.useRef(!1), D = m.useRef(!1), B = m.useRef(-1), ne = m.useRef(-1), Se = E != null, M = Rt(x), oe = ie(function(O) {
    return O === void 0 && (O = M), O ? ot(O, Le()) : [];
  }), K = ie((O) => {
    const F = oe(O);
    return I.current.map((P) => p && P === "reference" ? p : M && P === "floating" ? M : F).filter(Boolean).flat();
  });
  m.useEffect(() => {
    if (r || !l) return;
    function O(P) {
      if (P.key === "Tab") {
        G(M, Te(re(M))) && oe().length === 0 && !L && ut(P);
        const q = K(), U = ge(P);
        I.current[0] === "reference" && U === p && (ut(P), P.shiftKey ? Ce(q[q.length - 1]) : Ce(q[1])), I.current[1] === "floating" && U === M && P.shiftKey && (ut(P), Ce(q[0]));
      }
    }
    const F = re(M);
    return F.addEventListener("keydown", O), () => {
      F.removeEventListener("keydown", O);
    };
  }, [r, p, M, l, I, L, oe, K]), m.useEffect(() => {
    if (r || !x) return;
    function O(F) {
      const P = ge(F), U = oe().indexOf(P);
      U !== -1 && (B.current = U);
    }
    return x.addEventListener("focusin", O), () => {
      x.removeEventListener("focusin", O);
    };
  }, [r, x, oe]), m.useEffect(() => {
    if (r || !d) return;
    function O() {
      D.current = !0, setTimeout(() => {
        D.current = !1;
      });
    }
    function F(U) {
      const N = U.relatedTarget, le = U.currentTarget, ee = ge(U);
      queueMicrotask(() => {
        const z = S(), ye = !(G(p, N) || G(x, N) || G(N, x) || G(E == null ? void 0 : E.portalNode, N) || N != null && N.hasAttribute(Me("focus-guard")) || R && (Ae(R.nodesRef.current, z).find((me) => {
          var ae, pe;
          return G((ae = me.context) == null ? void 0 : ae.elements.floating, N) || G((pe = me.context) == null ? void 0 : pe.elements.domReference, N);
        }) || _t(R.nodesRef.current, z).find((me) => {
          var ae, pe, Pt;
          return [(ae = me.context) == null ? void 0 : ae.elements.floating, Rt((pe = me.context) == null ? void 0 : pe.elements.floating)].includes(N) || ((Pt = me.context) == null ? void 0 : Pt.elements.domReference) === N;
        })));
        if (le === p && M && nn(M, I), a && le !== p && !(ee != null && ee.isConnected) && Te(re(M)) === re(M).body) {
          X(M) && M.focus();
          const me = B.current, ae = oe(), pe = ae[me] || ae[ae.length - 1] || M;
          X(pe) && pe.focus();
        }
        if (v.current.insideReactTree) {
          v.current.insideReactTree = !1;
          return;
        }
        (L || !l) && N && ye && !D.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        N !== tn() && (y.current = !0, b(!1, U, "focus-out"));
      });
    }
    const P = !!(!R && E);
    function q() {
      Do(ne), v.current.insideReactTree = !0, ne.current = window.setTimeout(() => {
        v.current.insideReactTree = !1;
      });
    }
    if (x && X(p))
      return p.addEventListener("focusout", F), p.addEventListener("pointerdown", O), x.addEventListener("focusout", F), P && x.addEventListener("focusout", q, !0), () => {
        p.removeEventListener("focusout", F), p.removeEventListener("pointerdown", O), x.removeEventListener("focusout", F), P && x.removeEventListener("focusout", q, !0);
      };
  }, [r, p, x, M, l, R, E, b, d, a, oe, L, S, I, v]);
  const Q = m.useRef(null), de = m.useRef(null), ct = en([Q, E == null ? void 0 : E.beforeInsideRef]), lt = en([de, E == null ? void 0 : E.afterInsideRef]);
  m.useEffect(() => {
    var O, F;
    if (r || !x) return;
    const P = Array.from((E == null || (O = E.portalNode) == null ? void 0 : O.querySelectorAll("[" + Me("portal") + "]")) || []), U = (F = (R ? _t(R.nodesRef.current, S()) : []).find((ee) => {
      var z;
      return Bt(((z = ee.context) == null ? void 0 : z.elements.domReference) || null);
    })) == null || (F = F.context) == null ? void 0 : F.elements.domReference, N = [x, U, ...P, ...C(), k.current, $.current, Q.current, de.current, E == null ? void 0 : E.beforeOutsideRef.current, E == null ? void 0 : E.afterOutsideRef.current, I.current.includes("reference") || L ? p : null].filter((ee) => ee != null), le = l || L ? Jt(N, !A, A) : Jt(N);
    return () => {
      le();
    };
  }, [r, p, x, l, I, E, L, T, A, R, S, C]), Z(() => {
    if (r || !X(M)) return;
    const O = re(M), F = Te(O);
    queueMicrotask(() => {
      const P = K(M), q = Y.current, U = (typeof q == "number" ? P[q] : q.current) || M, N = G(M, F);
      !_ && !N && h && Ce(U, {
        preventScroll: U === M
      });
    });
  }, [r, h, M, _, K, Y]), Z(() => {
    if (r || !M) return;
    const O = re(M), F = Te(O);
    _o(F);
    function P(N) {
      let {
        reason: le,
        event: ee,
        nested: z
      } = N;
      if (["hover", "safe-polygon"].includes(le) && ee.type === "mouseleave" && (y.current = !0), le === "outside-press")
        if (z)
          y.current = !1;
        else if (Lr(ee) || kr(ee))
          y.current = !1;
        else {
          let ye = !1;
          document.createElement("div").focus({
            get preventScroll() {
              return ye = !0, !1;
            }
          }), ye ? y.current = !1 : y.current = !0;
        }
    }
    w.on("openchange", P);
    const q = O.createElement("span");
    q.setAttribute("tabindex", "-1"), q.setAttribute("aria-hidden", "true"), Object.assign(q.style, st), Se && p && p.insertAdjacentElement("afterend", q);
    function U() {
      if (typeof j.current == "boolean") {
        const N = p || tn();
        return N && N.isConnected ? N : q;
      }
      return j.current.current || q;
    }
    return () => {
      w.off("openchange", P);
      const N = Te(O), le = G(x, N) || R && Ae(R.nodesRef.current, S(), !1).some((z) => {
        var ye;
        return G((ye = z.context) == null ? void 0 : ye.elements.floating, N);
      }), ee = U();
      queueMicrotask(() => {
        const z = Vo(ee);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        j.current && !y.current && X(z) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!(z !== N && N !== O.body) || le) && z.focus({
          preventScroll: !0
        }), q.remove();
      });
    };
  }, [r, x, M, j, v, w, R, Se, p, S]), m.useEffect(() => (queueMicrotask(() => {
    y.current = !1;
  }), () => {
    queueMicrotask(It);
  }), [r]), Z(() => {
    if (!r && E)
      return E.setFocusManagerState({
        modal: l,
        closeOnFocusOut: d,
        open: h,
        onOpenChange: b,
        domReference: p
      }), () => {
        E.setFocusManagerState(null);
      };
  }, [r, E, l, h, b, d, p]), Z(() => {
    r || M && nn(M, I);
  }, [r, M, I]);
  function ke(O) {
    return r || !f || !l ? null : /* @__PURE__ */ V.jsx(Wo, {
      ref: O === "start" ? k : $,
      onClick: (F) => b(!1, F.nativeEvent),
      children: typeof f == "string" ? f : "Dismiss"
    });
  }
  const Ne = !r && T && (l ? !L : !0) && (Se || l);
  return /* @__PURE__ */ V.jsxs(V.Fragment, {
    children: [Ne && /* @__PURE__ */ V.jsx(Ze, {
      "data-type": "inside",
      ref: ct,
      onFocus: (O) => {
        if (l) {
          const P = K();
          Ce(o[0] === "reference" ? P[0] : P[P.length - 1]);
        } else if (E != null && E.preserveTabOrder && E.portalNode)
          if (y.current = !1, De(O, E.portalNode)) {
            const P = En(p);
            P == null || P.focus();
          } else {
            var F;
            (F = E.beforeOutsideRef.current) == null || F.focus();
          }
      }
    }), !L && ke("start"), n, ke("end"), Ne && /* @__PURE__ */ V.jsx(Ze, {
      "data-type": "inside",
      ref: lt,
      onFocus: (O) => {
        if (l)
          Ce(K()[0]);
        else if (E != null && E.preserveTabOrder && E.portalNode)
          if (d && (y.current = !0), De(O, E.portalNode)) {
            const P = Sn(p);
            P == null || P.focus();
          } else {
            var F;
            (F = E.afterOutsideRef.current) == null || F.focus();
          }
      }
    })]
  });
}
let We = 0;
const rn = "--floating-ui-scrollbar-width";
function Ho() {
  const e = yn(), t = /iP(hone|ad|od)|iOS/.test(e) || // iPads can claim to be MacIntel
  e === "MacIntel" && navigator.maxTouchPoints > 1, n = document.body.style, o = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight", i = window.innerWidth - document.documentElement.clientWidth, s = n.left ? parseFloat(n.left) : window.scrollX, c = n.top ? parseFloat(n.top) : window.scrollY;
  if (n.overflow = "hidden", n.setProperty(rn, i + "px"), i && (n[o] = i + "px"), t) {
    var a, l;
    const f = ((a = window.visualViewport) == null ? void 0 : a.offsetLeft) || 0, d = ((l = window.visualViewport) == null ? void 0 : l.offsetTop) || 0;
    Object.assign(n, {
      position: "fixed",
      top: -(c - Math.floor(d)) + "px",
      left: -(s - Math.floor(f)) + "px",
      right: "0"
    });
  }
  return () => {
    Object.assign(n, {
      overflow: "",
      [o]: ""
    }), n.removeProperty(rn), t && (Object.assign(n, {
      position: "",
      top: "",
      left: "",
      right: ""
    }), window.scrollTo(s, c));
  };
}
let on = () => {
};
const qo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    lockScroll: r = !1,
    ...o
  } = t;
  return Z(() => {
    if (r)
      return We++, We === 1 && (on = Ho()), () => {
        We--, We === 0 && on();
      };
  }, [r]), /* @__PURE__ */ V.jsx("div", {
    ref: n,
    ...o,
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...o.style
    }
  });
}), Ko = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Uo = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, sn = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Xo(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: i
  } = e, {
    enabled: s = !0,
    escapeKey: c = !0,
    outsidePress: a = !0,
    outsidePressEvent: l = "pointerdown",
    referencePress: f = !1,
    referencePressEvent: d = "pointerdown",
    ancestorScroll: g = !1,
    bubbles: u,
    capture: h
  } = t, b = Ot(), w = ie(typeof a == "function" ? a : () => !1), v = typeof a == "function" ? w : a, p = m.useRef(!1), {
    escapeKey: x,
    outsidePress: S
  } = sn(u), {
    escapeKey: C,
    outsidePress: _
  } = sn(h), L = m.useRef(!1), W = ie((R) => {
    var E;
    if (!n || !s || !c || R.key !== "Escape" || L.current)
      return;
    const k = (E = i.current.floatingContext) == null ? void 0 : E.nodeId, $ = b ? Ae(b.nodesRef.current, k) : [];
    if (!x && (R.stopPropagation(), $.length > 0)) {
      let y = !0;
      if ($.forEach((D) => {
        var B;
        if ((B = D.context) != null && B.open && !D.context.dataRef.current.__escapeKeyBubbles) {
          y = !1;
          return;
        }
      }), !y)
        return;
    }
    r(!1, Fr(R) ? R.nativeEvent : R, "escape-key");
  }), T = ie((R) => {
    var E;
    const k = () => {
      var $;
      W(R), ($ = ge(R)) == null || $.removeEventListener("keydown", k);
    };
    (E = ge(R)) == null || E.addEventListener("keydown", k);
  }), A = ie((R) => {
    var E;
    const k = i.current.insideReactTree;
    i.current.insideReactTree = !1;
    const $ = p.current;
    if (p.current = !1, l === "click" && $ || k || typeof v == "function" && !v(R))
      return;
    const y = ge(R), D = "[" + Me("inert") + "]", B = re(o.floating).querySelectorAll(D);
    let ne = H(y) ? y : null;
    for (; ne && !ue(ne); ) {
      const K = fe(ne);
      if (ue(K) || !H(K))
        break;
      ne = K;
    }
    if (B.length && H(y) && !Dr(y) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !G(y, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(B).every((K) => !G(ne, K)))
      return;
    if (X(y) && j) {
      const K = ue(y), Q = te(y), de = /auto|scroll/, ct = K || de.test(Q.overflowX), lt = K || de.test(Q.overflowY), ke = ct && y.clientWidth > 0 && y.scrollWidth > y.clientWidth, Ne = lt && y.clientHeight > 0 && y.scrollHeight > y.clientHeight, O = Q.direction === "rtl", F = Ne && (O ? R.offsetX <= y.offsetWidth - y.clientWidth : R.offsetX > y.clientWidth), P = ke && R.offsetY > y.clientHeight;
      if (F || P)
        return;
    }
    const Se = (E = i.current.floatingContext) == null ? void 0 : E.nodeId, M = b && Ae(b.nodesRef.current, Se).some((K) => {
      var Q;
      return at(R, (Q = K.context) == null ? void 0 : Q.elements.floating);
    });
    if (at(R, o.floating) || at(R, o.domReference) || M)
      return;
    const oe = b ? Ae(b.nodesRef.current, Se) : [];
    if (oe.length > 0) {
      let K = !0;
      if (oe.forEach((Q) => {
        var de;
        if ((de = Q.context) != null && de.open && !Q.context.dataRef.current.__outsidePressBubbles) {
          K = !1;
          return;
        }
      }), !K)
        return;
    }
    r(!1, R, "outside-press");
  }), I = ie((R) => {
    var E;
    const k = () => {
      var $;
      A(R), ($ = ge(R)) == null || $.removeEventListener(l, k);
    };
    (E = ge(R)) == null || E.addEventListener(l, k);
  });
  m.useEffect(() => {
    if (!n || !s)
      return;
    i.current.__escapeKeyBubbles = x, i.current.__outsidePressBubbles = S;
    let R = -1;
    function E(B) {
      r(!1, B, "ancestor-scroll");
    }
    function k() {
      window.clearTimeout(R), L.current = !0;
    }
    function $() {
      R = window.setTimeout(
        () => {
          L.current = !1;
        },
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        et() ? 5 : 0
      );
    }
    const y = re(o.floating);
    c && (y.addEventListener("keydown", C ? T : W, C), y.addEventListener("compositionstart", k), y.addEventListener("compositionend", $)), v && y.addEventListener(l, _ ? I : A, _);
    let D = [];
    return g && (H(o.domReference) && (D = ve(o.domReference)), H(o.floating) && (D = D.concat(ve(o.floating))), !H(o.reference) && o.reference && o.reference.contextElement && (D = D.concat(ve(o.reference.contextElement)))), D = D.filter((B) => {
      var ne;
      return B !== ((ne = y.defaultView) == null ? void 0 : ne.visualViewport);
    }), D.forEach((B) => {
      B.addEventListener("scroll", E, {
        passive: !0
      });
    }), () => {
      c && (y.removeEventListener("keydown", C ? T : W, C), y.removeEventListener("compositionstart", k), y.removeEventListener("compositionend", $)), v && y.removeEventListener(l, _ ? I : A, _), D.forEach((B) => {
        B.removeEventListener("scroll", E);
      }), window.clearTimeout(R);
    };
  }, [i, o, c, v, l, n, r, g, s, x, S, W, C, T, A, _, I]), m.useEffect(() => {
    i.current.insideReactTree = !1;
  }, [i, v, l]);
  const Y = m.useMemo(() => ({
    onKeyDown: W,
    ...f && {
      [Ko[d]]: (R) => {
        r(!1, R.nativeEvent, "reference-press");
      },
      ...d !== "click" && {
        onClick(R) {
          r(!1, R.nativeEvent, "reference-press");
        }
      }
    }
  }), [W, r, f, d]), j = m.useMemo(() => ({
    onKeyDown: W,
    onMouseDown() {
      p.current = !0;
    },
    onMouseUp() {
      p.current = !0;
    },
    [Uo[l]]: () => {
      i.current.insideReactTree = !0;
    }
  }), [W, l, i]);
  return m.useMemo(() => s ? {
    reference: Y,
    floating: j
  } : {}, [s, Y, j]);
}
function Yo(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = At(), i = m.useRef({}), [s] = m.useState(() => Oo()), c = Ln() != null;
  if (Fn.NODE_ENV !== "production") {
    const u = r.reference;
    u && !H(u) && Ao("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, l] = m.useState(r.reference), f = ie((u, h, b) => {
    i.current.openEvent = u ? h : void 0, s.emit("openchange", {
      open: u,
      event: h,
      reason: b,
      nested: c
    }), n == null || n(u, h, b);
  }), d = m.useMemo(() => ({
    setPositionReference: l
  }), []), g = m.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return m.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: f,
    elements: g,
    events: s,
    floatingId: o,
    refs: d
  }), [t, f, g, s, o, d]);
}
function zo(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Yo({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = m.useState(null), [c, a] = m.useState(null), f = (o == null ? void 0 : o.domReference) || i, d = m.useRef(null), g = Ot();
  Z(() => {
    f && (d.current = f);
  }, [f]);
  const u = vo({
    ...e,
    elements: {
      ...o,
      ...c && {
        reference: c
      }
    }
  }), h = m.useCallback((x) => {
    const S = H(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      getClientRects: () => x.getClientRects(),
      contextElement: x
    } : x;
    a(S), u.refs.setReference(S);
  }, [u.refs]), b = m.useCallback((x) => {
    (H(x) || x === null) && (d.current = x, s(x)), (H(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !H(x)) && u.refs.setReference(x);
  }, [u.refs]), w = m.useMemo(() => ({
    ...u.refs,
    setReference: b,
    setPositionReference: h,
    domReference: d
  }), [u.refs, b, h]), v = m.useMemo(() => ({
    ...u.elements,
    domReference: f
  }), [u.elements, f]), p = m.useMemo(() => ({
    ...u,
    ...r,
    refs: w,
    elements: v,
    nodeId: t
  }), [u, w, v, t, r]);
  return Z(() => {
    r.dataRef.current.floatingContext = p;
    const x = g == null ? void 0 : g.nodesRef.current.find((S) => S.id === t);
    x && (x.context = p);
  }), m.useMemo(() => ({
    ...u,
    context: p,
    refs: w,
    elements: v
  }), [u, w, v, p]);
}
function gt(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Ut]: s,
      [Xt]: c,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Ro]: ""
    },
    ...i,
    ...t.map((s) => {
      const c = s ? s[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((s, c) => (c && Object.entries(c).forEach((a) => {
      let [l, f] = a;
      if (!(o && [Ut, Xt].includes(l)))
        if (l.indexOf("on") === 0) {
          if (r.has(l) || r.set(l, []), typeof f == "function") {
            var d;
            (d = r.get(l)) == null || d.push(f), s[l] = function() {
              for (var g, u = arguments.length, h = new Array(u), b = 0; b < u; b++)
                h[b] = arguments[b];
              return (g = r.get(l)) == null ? void 0 : g.map((w) => w(...h)).find((w) => w !== void 0);
            };
          }
        } else
          s[l] = f;
    }), s), {})
  };
}
function Go(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), o = m.useCallback(
    (c) => gt(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = m.useCallback(
    (c) => gt(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = m.useCallback(
    (c) => gt(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return m.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
const Zo = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Jo(e, t) {
  var n, r;
  t === void 0 && (t = {});
  const {
    open: o,
    elements: i,
    floatingId: s
  } = e, {
    enabled: c = !0,
    role: a = "dialog"
  } = t, l = At(), f = ((n = i.domReference) == null ? void 0 : n.id) || l, d = m.useMemo(() => {
    var p;
    return ((p = Rt(i.floating)) == null ? void 0 : p.id) || s;
  }, [i.floating, s]), g = (r = Zo.get(a)) != null ? r : a, h = Ln() != null, b = m.useMemo(() => g === "tooltip" || a === "label" ? {
    ["aria-" + (a === "label" ? "labelledby" : "describedby")]: o ? d : void 0
  } : {
    "aria-expanded": o ? "true" : "false",
    "aria-haspopup": g === "alertdialog" ? "dialog" : g,
    "aria-controls": o ? d : void 0,
    ...g === "listbox" && {
      role: "combobox"
    },
    ...g === "menu" && {
      id: f
    },
    ...g === "menu" && h && {
      role: "menuitem"
    },
    ...a === "select" && {
      "aria-autocomplete": "none"
    },
    ...a === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [g, d, h, o, f, a]), w = m.useMemo(() => {
    const p = {
      id: d,
      ...g && {
        role: g
      }
    };
    return g === "tooltip" || a === "label" ? p : {
      ...p,
      ...g === "menu" && {
        "aria-labelledby": f
      }
    };
  }, [g, d, f, a]), v = m.useCallback((p) => {
    let {
      active: x,
      selected: S
    } = p;
    const C = {
      role: "option",
      ...x && {
        id: d + "-fui-option"
      }
    };
    switch (a) {
      case "select":
      case "combobox":
        return {
          ...C,
          "aria-selected": S
        };
    }
    return {};
  }, [d, a]);
  return m.useMemo(() => c ? {
    reference: b,
    floating: w,
    item: v
  } : {}, [c, b, w, v]);
}
const Qo = Intl.DateTimeFormat().resolvedOptions().timeZone;
function ii({
  dateTime: e,
  nodeKey: t
}) {
  const [n] = Bn(), [r, o] = $e(!1), i = Wn(null), [s, c] = $e(e), [a, l] = $e(() => {
    if (e === void 0)
      return !1;
    const T = e == null ? void 0 : e.getHours(), A = e == null ? void 0 : e.getMinutes();
    return T !== 0 || A !== 0;
  }), [f, d] = $e(() => {
    if (e === void 0)
      return "00:00";
    const T = e == null ? void 0 : e.getHours(), A = e == null ? void 0 : e.getMinutes();
    return T !== 0 || A !== 0 ? `${T == null ? void 0 : T.toString().padStart(2, "0")}:${A == null ? void 0 : A.toString().padStart(2, "0")}` : "00:00";
  }), [g, u, h] = _n(t), { refs: b, floatingStyles: w, context: v } = zo({
    elements: {
      reference: i.current
    },
    middleware: [
      xo(5),
      wo({
        fallbackPlacements: ["top-start"]
      }),
      yo({ padding: 10 })
    ],
    onOpenChange: o,
    open: r,
    placement: "bottom-start",
    strategy: "fixed",
    whileElementsMounted: uo
  }), p = Jo(v, { role: "dialog" }), x = Xo(v), { getFloatingProps: S } = Go([p, x]);
  jn(() => {
    const T = i.current;
    function A(I) {
      I.preventDefault(), o(!0);
    }
    return T && T.addEventListener("click", A), () => {
      T && T.removeEventListener("click", A);
    };
  }, [b, n]);
  const C = (T, A) => {
    n.update(
      () => {
        const I = Hn(t);
        Vn(I) && T(I);
      },
      { onUpdate: A }
    );
  }, _ = (T) => {
    C((A) => {
      if (T.target.checked)
        l(!0);
      else {
        if (s) {
          const I = Dt(Mt(s, 0), 0);
          A.setDateTime(I);
        }
        l(!1), d("00:00");
      }
    });
  }, L = (T) => {
    C((A) => {
      const I = T.target.value;
      if (!s) {
        d(I);
        return;
      }
      const [Y, j] = I.split(":").map((E) => parseInt(E, 10)), R = Dt(Mt(s, j), Y);
      c(R), A.setDateTime(R), d(I);
    });
  }, W = (T) => {
    C((A) => {
      if (!f || !T) {
        c(T);
        return;
      }
      const [I, Y] = f.split(":").map((R) => parseInt(R, 10)), j = new Date(
        T.getFullYear(),
        T.getMonth(),
        T.getDate(),
        I,
        Y
      );
      A.setDateTime(j), c(j);
    });
  };
  return /* @__PURE__ */ V.jsxs(
    "div",
    {
      className: `dateTimePill ${g ? "selected" : ""}`,
      ref: i,
      style: { cursor: "pointer", width: "fit-content" },
      children: [
        (e == null ? void 0 : e.toDateString()) + (a ? " " + f : "") || "Invalid Date",
        r && /* @__PURE__ */ V.jsx($o, { children: /* @__PURE__ */ V.jsx(qo, { lockScroll: !0, children: /* @__PURE__ */ V.jsx(jo, { context: v, initialFocus: -1, children: /* @__PURE__ */ V.jsxs(
          "div",
          {
            className: "dateTimePicker",
            ref: b.setFloating,
            style: w,
            ...S(),
            children: [
              /* @__PURE__ */ V.jsx(
                qn,
                {
                  captionLayout: "dropdown",
                  navLayout: "after",
                  fixedWeeks: !1,
                  showOutsideDays: !1,
                  mode: "single",
                  selected: s,
                  required: !0,
                  onSelect: W,
                  startMonth: new Date(1925, 0),
                  endMonth: new Date(2042, 7)
                }
              ),
              /* @__PURE__ */ V.jsx("form", { style: { marginBlockEnd: "1em" }, children: /* @__PURE__ */ V.jsxs(
                "div",
                {
                  style: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "300px"
                  },
                  children: [
                    /* @__PURE__ */ V.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "option1",
                        name: "option1",
                        value: "value1",
                        checked: a,
                        onChange: _
                      }
                    ),
                    /* @__PURE__ */ V.jsx("label", { children: /* @__PURE__ */ V.jsx(
                      "input",
                      {
                        type: "time",
                        value: f,
                        onChange: L,
                        disabled: !a
                      }
                    ) }),
                    /* @__PURE__ */ V.jsxs("span", { children: [
                      " ",
                      Qo
                    ] })
                  ]
                }
              ) })
            ]
          }
        ) }) }) })
      ]
    }
  );
}
export {
  ii as default
};
