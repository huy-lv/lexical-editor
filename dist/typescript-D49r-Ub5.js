var y8 = Object.defineProperty;
var _8 = (Yr, en, ir) => en in Yr ? y8(Yr, en, { enumerable: !0, configurable: !0, writable: !0, value: ir }) : Yr[en] = ir;
var y1 = (Yr, en, ir) => _8(Yr, typeof en != "symbol" ? en + "" : en, ir);
import { g as T8 } from "./_commonjsHelpers-C6fGbg64.js";
function x8(Yr, en) {
  for (var ir = 0; ir < en.length; ir++) {
    const Fn = en[ir];
    if (typeof Fn != "string" && !Array.isArray(Fn)) {
      for (const mn in Fn)
        if (mn !== "default" && !(mn in Yr)) {
          const zi = Object.getOwnPropertyDescriptor(Fn, mn);
          zi && Object.defineProperty(Yr, mn, zi.get ? zi : {
            enumerable: !0,
            get: () => Fn[mn]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(Yr, Symbol.toStringTag, { value: "Module" }));
}
var qm = { exports: {} };
(function(Yr, en) {
  (function(ir) {
    function Fn() {
      var mn = ir();
      return mn.default || mn;
    }
    Yr.exports = Fn();
  })(function() {
    var ir = Object.defineProperty, Fn = Object.getOwnPropertyDescriptor, mn = Object.getOwnPropertyNames, zi = Object.prototype.hasOwnProperty, _1 = (e) => {
      throw TypeError(e);
    }, zm = (e, r, i) => r in e ? ir(e, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[r] = i, T1 = (e, r) => {
      for (var i in r) ir(e, i, { get: r[i], enumerable: !0 });
    }, $m = (e, r, i, u) => {
      if (r && typeof r == "object" || typeof r == "function") for (let h of mn(r)) !zi.call(e, h) && h !== i && ir(e, h, { get: () => r[h], enumerable: !(u = Fn(r, h)) || u.enumerable });
      return e;
    }, Gm = (e) => $m(ir({}, "__esModule", { value: !0 }), e), $i = (e, r, i) => zm(e, typeof r != "symbol" ? r + "" : r, i), Wm = (e, r, i) => r.has(e) || _1("Cannot " + i), Vm = (e, r, i) => r.has(e) ? _1("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, i), _e = (e, r, i) => (Wm(e, r, "access private method"), i), x1 = {};
    T1(x1, { parsers: () => k1 });
    var k1 = {};
    T1(k1, { typescript: () => H3 });
    var Hm = () => () => {
    }, b1 = Hm, Xm = (e, r, i, u) => {
      if (!(e && r == null)) return r.replaceAll ? r.replaceAll(i, u) : i.global ? r.replace(i, u) : r.split(i).join(u);
    }, Za = Xm, Qm = "5.8", St = [], Zm = /* @__PURE__ */ new Map();
    function Gi(e) {
      return e !== void 0 ? e.length : 0;
    }
    function Nr(e, r) {
      if (e !== void 0) for (let i = 0; i < e.length; i++) {
        let u = r(e[i], i);
        if (u) return u;
      }
    }
    function Ym(e, r) {
      if (e !== void 0) for (let i = 0; i < e.length; i++) {
        let u = r(e[i], i);
        if (u !== void 0) return u;
      }
    }
    function v1(e, r, i) {
      let u = [];
      B.assertEqual(e.length, r.length);
      for (let h = 0; h < e.length; h++) u.push(i(e[h], r[h], h));
      return u;
    }
    function _l(e, r) {
      if (e !== void 0) {
        for (let i = 0; i < e.length; i++) if (!r(e[i], i)) return !1;
      }
      return !0;
    }
    function S1(e, r, i) {
      if (e !== void 0) for (let u = 0; u < e.length; u++) {
        let h = e[u];
        if (r(h, u)) return h;
      }
    }
    function Tl(e, r, i) {
      if (e === void 0) return -1;
      for (let u = i ?? 0; u < e.length; u++) if (r(e[u], u)) return u;
      return -1;
    }
    function e0(e, r, i = Sl) {
      if (e !== void 0) {
        for (let u = 0; u < e.length; u++) if (i(e[u], r)) return !0;
      }
      return !1;
    }
    function In(e, r) {
      if (e !== void 0) {
        let i = e.length, u = 0;
        for (; u < i && r(e[u]); ) u++;
        if (u < i) {
          let h = e.slice(0, u);
          for (u++; u < i; ) {
            let T = e[u];
            r(T) && h.push(T), u++;
          }
          return h;
        }
      }
      return e;
    }
    function xl(e, r) {
      let i;
      if (e !== void 0) {
        i = [];
        for (let u = 0; u < e.length; u++) i.push(r(e[u], u));
      }
      return i;
    }
    function C1(e) {
      let r = [];
      for (let i = 0; i < e.length; i++) {
        let u = e[i];
        u && (Ln(u) ? gr(r, u) : r.push(u));
      }
      return r;
    }
    function E1(e, r) {
      let i;
      if (e !== void 0) for (let u = 0; u < e.length; u++) {
        let h = r(e[u], u);
        h && (Ln(h) ? i = gr(i, h) : i = hr(i, h));
      }
      return i ?? St;
    }
    function t0(e, r) {
      let i;
      if (e !== void 0) for (let u = 0; u < e.length; u++) {
        let h = e[u], T = r(h, u);
        (i || h !== T || Ln(T)) && (i || (i = e.slice(0, u)), Ln(T) ? gr(i, T) : i.push(T));
      }
      return i ?? e;
    }
    function r0(e, r) {
      let i = [];
      if (e !== void 0) for (let u = 0; u < e.length; u++) {
        let h = r(e[u], u);
        h !== void 0 && i.push(h);
      }
      return i;
    }
    function $t(e, r) {
      if (e !== void 0) if (r !== void 0) {
        for (let i = 0; i < e.length; i++) if (r(e[i])) return !0;
      } else return e.length > 0;
      return !1;
    }
    function kl(e, r) {
      return r === void 0 || r.length === 0 ? e : e === void 0 || e.length === 0 ? r : [...e, ...r];
    }
    function n0(e, r, i = Sl) {
      if (e === void 0 || r === void 0) return e === r;
      if (e.length !== r.length) return !1;
      for (let u = 0; u < e.length; u++) if (!i(e[u], r[u], u)) return !1;
      return !0;
    }
    function hr(e, r) {
      return r === void 0 ? e : e === void 0 ? [r] : (e.push(r), e);
    }
    function w1(e, r) {
      return r < 0 ? e.length + r : r;
    }
    function gr(e, r, i, u) {
      if (r === void 0 || r.length === 0) return e;
      if (e === void 0) return r.slice(i, u);
      i = i === void 0 ? 0 : w1(r, i), u = u === void 0 ? r.length : w1(r, u);
      for (let h = i; h < u && h < r.length; h++) r[h] !== void 0 && e.push(r[h]);
      return e;
    }
    function a0(e, r, i) {
      return e0(e, r, i) ? !1 : (e.push(r), !0);
    }
    function i0(e, r, i) {
      return e !== void 0 ? (a0(e, r, i), e) : [r];
    }
    function s0(e, r) {
      return e.length === 0 ? St : e.slice().sort(r);
    }
    function bl(e) {
      return e === void 0 || e.length === 0 ? void 0 : e[0];
    }
    function Ya(e) {
      return e === void 0 || e.length === 0 ? void 0 : e[e.length - 1];
    }
    function o0(e) {
      return B.assert(e.length !== 0), e[e.length - 1];
    }
    function c0(e) {
      return e !== void 0 && e.length === 1 ? e[0] : void 0;
    }
    function u0(e, r, i, u, h) {
      return l0(e, i(r), i, u);
    }
    function l0(e, r, i, u, h) {
      if (!$t(e)) return -1;
      let T = 0, w = e.length - 1;
      for (; T <= w; ) {
        let N = T + (w - T >> 1), o = i(e[N], N);
        switch (u(o, r)) {
          case -1:
            T = N + 1;
            break;
          case 0:
            return N;
          case 1:
            w = N - 1;
            break;
        }
      }
      return ~T;
    }
    function d0(e, r, i, u, h) {
      if (e && e.length > 0) {
        let T = e.length;
        if (T > 0) {
          let w = 0, N = T - 1, o;
          for (arguments.length <= 2 ? (o = e[w], w++) : o = i; w <= N; ) o = r(o, e[w], w), w++;
          return o;
        }
      }
      return i;
    }
    var A1 = Object.prototype.hasOwnProperty;
    function hn(e, r) {
      return A1.call(e, r);
    }
    function p0(e) {
      let r = [];
      for (let i in e) A1.call(e, i) && r.push(i);
      return r;
    }
    function f0() {
      let e = /* @__PURE__ */ new Map();
      return e.add = m0, e.remove = h0, e;
    }
    function m0(e, r) {
      let i = this.get(e);
      return i !== void 0 ? i.push(r) : this.set(e, i = [r]), i;
    }
    function h0(e, r) {
      let i = this.get(e);
      i !== void 0 && (C0(i, r), i.length || this.delete(e));
    }
    function Ln(e) {
      return Array.isArray(e);
    }
    function vl(e) {
      return Ln(e) ? e : [e];
    }
    function g0(e, r) {
      return e !== void 0 && r(e) ? e : void 0;
    }
    function gn(e, r) {
      return e !== void 0 && r(e) ? e : B.fail(`Invalid cast. The supplied value ${e} did not pass the test '${B.getFunctionName(r)}'.`);
    }
    function _o(e) {
    }
    function y0() {
      return !0;
    }
    function gt(e) {
      return e;
    }
    function N1(e) {
      let r;
      return () => (e && (r = e(), e = void 0), r);
    }
    function Jr(e) {
      let r = /* @__PURE__ */ new Map();
      return (i) => {
        let u = `${typeof i}:${i}`, h = r.get(u);
        return h === void 0 && !r.has(u) && (h = e(i), r.set(u, h)), h;
      };
    }
    function Sl(e, r) {
      return e === r;
    }
    function _0(e, r) {
      return e === r || e !== void 0 && r !== void 0 && e.toUpperCase() === r.toUpperCase();
    }
    function T0(e, r) {
      return Sl(e, r);
    }
    function x0(e, r) {
      return e === r ? 0 : e === void 0 ? -1 : r === void 0 ? 1 : e < r ? -1 : 1;
    }
    function D1(e, r) {
      return x0(e, r);
    }
    function k0(e, r, i) {
      for (let u = 0; u < e.length; u++) r = Math.max(r, i(e[u]));
      return r;
    }
    function Wi(e, r, i) {
      let u = Math.max(2, Math.floor(e.length * 0.34)), h = Math.floor(e.length * 0.4) + 1, T;
      for (let w of r) {
        let N = i(w);
        if (N !== void 0 && Math.abs(N.length - e.length) <= u) {
          if (N === e || N.length < 3 && N.toLowerCase() !== e.toLowerCase()) continue;
          let o = b0(e, N, h - 0.1);
          if (o === void 0) continue;
          B.assert(o < h), h = o, T = w;
        }
      }
      return T;
    }
    function b0(e, r, i) {
      let u = new Array(r.length + 1), h = new Array(r.length + 1), T = i + 0.01;
      for (let N = 0; N <= r.length; N++) u[N] = N;
      for (let N = 1; N <= e.length; N++) {
        let o = e.charCodeAt(N - 1), $ = Math.ceil(N > i ? N - i : 1), d = Math.floor(r.length > i + N ? i + N : r.length);
        h[0] = N;
        let S = N;
        for (let v = 1; v < $; v++) h[v] = T;
        for (let v = $; v <= d; v++) {
          let F = e[N - 1].toLowerCase() === r[v - 1].toLowerCase() ? u[v - 1] + 0.1 : u[v - 1] + 2, re = o === r.charCodeAt(v - 1) ? u[v - 1] : Math.min(u[v] + 1, h[v - 1] + 1, F);
          h[v] = re, S = Math.min(S, re);
        }
        for (let v = d + 1; v <= r.length; v++) h[v] = T;
        if (S > i) return;
        let _ = u;
        u = h, h = _;
      }
      let w = u[r.length];
      return w > i ? void 0 : w;
    }
    function v0(e, r, i) {
      let u = e.length - r.length;
      return u >= 0 && (i ? _0(e.slice(u), r) : e.indexOf(r, u) === u);
    }
    function S0(e, r) {
      e[r] = e[e.length - 1], e.pop();
    }
    function C0(e, r) {
      return E0(e, (i) => i === r);
    }
    function E0(e, r) {
      for (let i = 0; i < e.length; i++) if (r(e[i])) return S0(e, i), !0;
      return !1;
    }
    function To(e, r, i) {
      return e.lastIndexOf(r, 0) === 0;
    }
    function Cl(e) {
      return e === void 0 ? void 0 : [e];
    }
    var B;
    ((e) => {
      let r = 0;
      e.currentLogLevel = 2, e.isDebugging = !1;
      function i(M) {
        return e.currentLogLevel <= M;
      }
      e.shouldLog = i;
      function u(M, oe) {
        e.loggingHost && i(M) && e.loggingHost.log(M, oe);
      }
      function h(M) {
        u(3, M);
      }
      e.log = h, ((M) => {
        function oe(Qe) {
          u(1, Qe);
        }
        M.error = oe;
        function me(Qe) {
          u(2, Qe);
        }
        M.warn = me;
        function be(Qe) {
          u(3, Qe);
        }
        M.log = be;
        function Xe(Qe) {
          u(4, Qe);
        }
        M.trace = Xe;
      })(h = e.log || (e.log = {}));
      let T = {};
      function w() {
        return r;
      }
      e.getAssertionLevel = w;
      function N(M) {
        let oe = r;
        if (r = M, M > oe) for (let me of p0(T)) {
          let be = T[me];
          be !== void 0 && e[me] !== be.assertion && M >= be.level && (e[me] = be, T[me] = void 0);
        }
      }
      e.setAssertionLevel = N;
      function o(M) {
        return r >= M;
      }
      e.shouldAssert = o;
      function $(M, oe) {
        return o(M) ? !0 : (T[oe] = { level: M, assertion: e[oe] }, e[oe] = _o, !1);
      }
      function d(M, oe) {
        debugger;
        let me = new Error(M ? `Debug Failure. ${M}` : "Debug Failure.");
        throw Error.captureStackTrace && Error.captureStackTrace(me, oe || d), me;
      }
      e.fail = d;
      function S(M, oe, me) {
        return d(`${oe || "Unexpected node."}\r
Node ${It(M.kind)} was unexpected.`, me || S);
      }
      e.failBadSyntaxKind = S;
      function _(M, oe, me, be) {
        M || (oe = oe ? `False expression: ${oe}` : "False expression.", me && (oe += `\r
Verbose Debug Information: ` + (typeof me == "string" ? me : me())), d(oe, be || _));
      }
      e.assert = _;
      function v(M, oe, me, be, Xe) {
        if (M !== oe) {
          let Qe = me ? be ? `${me} ${be}` : me : "";
          d(`Expected ${M} === ${oe}. ${Qe}`, Xe || v);
        }
      }
      e.assertEqual = v;
      function F(M, oe, me, be) {
        M >= oe && d(`Expected ${M} < ${oe}. ${me || ""}`, be || F);
      }
      e.assertLessThan = F;
      function re(M, oe, me) {
        M > oe && d(`Expected ${M} <= ${oe}`, me || re);
      }
      e.assertLessThanOrEqual = re;
      function ke(M, oe, me) {
        M < oe && d(`Expected ${M} >= ${oe}`, me || ke);
      }
      e.assertGreaterThanOrEqual = ke;
      function ge(M, oe, me) {
        M == null && d(oe, me || ge);
      }
      e.assertIsDefined = ge;
      function he(M, oe, me) {
        return ge(M, oe, me || he), M;
      }
      e.checkDefined = he;
      function I(M, oe, me) {
        for (let be of M) ge(be, oe, me || I);
      }
      e.assertEachIsDefined = I;
      function ae(M, oe, me) {
        return I(M, oe, me || ae), M;
      }
      e.checkEachDefined = ae;
      function Le(M, oe = "Illegal value:", me) {
        let be = typeof M == "object" && hn(M, "kind") && hn(M, "pos") ? "SyntaxKind: " + It(M.kind) : JSON.stringify(M);
        return d(`${oe} ${be}`, me || Le);
      }
      e.assertNever = Le;
      function z(M, oe, me, be) {
        $(1, "assertEachNode") && _(oe === void 0 || _l(M, oe), me || "Unexpected node.", () => `Node array did not pass test '${br(oe)}'.`, be || z);
      }
      e.assertEachNode = z;
      function ue(M, oe, me, be) {
        $(1, "assertNode") && _(M !== void 0 && (oe === void 0 || oe(M)), me || "Unexpected node.", () => `Node ${It(M == null ? void 0 : M.kind)} did not pass test '${br(oe)}'.`, be || ue);
      }
      e.assertNode = ue;
      function H(M, oe, me, be) {
        $(1, "assertNotNode") && _(M === void 0 || oe === void 0 || !oe(M), me || "Unexpected node.", () => `Node ${It(M.kind)} should not have passed test '${br(oe)}'.`, be || H);
      }
      e.assertNotNode = H;
      function ft(M, oe, me, be) {
        $(1, "assertOptionalNode") && _(oe === void 0 || M === void 0 || oe(M), me || "Unexpected node.", () => `Node ${It(M == null ? void 0 : M.kind)} did not pass test '${br(oe)}'.`, be || ft);
      }
      e.assertOptionalNode = ft;
      function rn(M, oe, me, be) {
        $(1, "assertOptionalToken") && _(oe === void 0 || M === void 0 || M.kind === oe, me || "Unexpected node.", () => `Node ${It(M == null ? void 0 : M.kind)} was not a '${It(oe)}' token.`, be || rn);
      }
      e.assertOptionalToken = rn;
      function kr(M, oe, me) {
        $(1, "assertMissingNode") && _(M === void 0, oe || "Unexpected node.", () => `Node ${It(M.kind)} was unexpected'.`, me || kr);
      }
      e.assertMissingNode = kr;
      function nn(M) {
      }
      e.type = nn;
      function br(M) {
        if (typeof M != "function") return "";
        if (hn(M, "name")) return M.name;
        {
          let oe = Function.prototype.toString.call(M), me = /^function\s+([\w$]+)\s*\(/.exec(oe);
          return me ? me[1] : "";
        }
      }
      e.getFunctionName = br;
      function Fr(M) {
        return `{ name: ${Yi(M.escapedName)}; flags: ${ut(M.flags)}; declarations: ${xl(M.declarations, (oe) => It(oe.kind))} }`;
      }
      e.formatSymbol = Fr;
      function Re(M = 0, oe, me) {
        let be = Un(oe);
        if (M === 0) return be.length > 0 && be[0][0] === 0 ? be[0][1] : "0";
        if (me) {
          let Xe = [], Qe = M;
          for (let [it, At] of be) {
            if (it > M) break;
            it !== 0 && it & M && (Xe.push(At), Qe &= ~it);
          }
          if (Qe === 0) return Xe.join("|");
        } else for (let [Xe, Qe] of be) if (Xe === M) return Qe;
        return M.toString();
      }
      e.formatEnum = Re;
      let an = /* @__PURE__ */ new Map();
      function Un(M) {
        let oe = an.get(M);
        if (oe) return oe;
        let me = [];
        for (let Xe in M) {
          let Qe = M[Xe];
          typeof Qe == "number" && me.push([Qe, Xe]);
        }
        let be = s0(me, (Xe, Qe) => D1(Xe[0], Qe[0]));
        return an.set(M, be), be;
      }
      function It(M) {
        return Re(M, Fe, !1);
      }
      e.formatSyntaxKind = It;
      function jr(M) {
        return Re(M, K1, !1);
      }
      e.formatSnippetKind = jr;
      function Ir(M) {
        return Re(M, On, !1);
      }
      e.formatScriptKind = Ir;
      function Lt(M) {
        return Re(M, Br, !0);
      }
      e.formatNodeFlags = Lt;
      function xt(M) {
        return Re(M, L1, !0);
      }
      e.formatNodeCheckFlags = xt;
      function He(M) {
        return Re(M, P1, !0);
      }
      e.formatModifierFlags = He;
      function qr(M) {
        return Re(M, B1, !0);
      }
      e.formatTransformFlags = qr;
      function Wt(M) {
        return Re(M, U1, !0);
      }
      e.formatEmitFlags = Wt;
      function ut(M) {
        return Re(M, I1, !0);
      }
      e.formatSymbolFlags = ut;
      function at(M) {
        return Re(M, er, !0);
      }
      e.formatTypeFlags = at;
      function Ut(M) {
        return Re(M, M1, !0);
      }
      e.formatSignatureFlags = Ut;
      function Ot(M) {
        return Re(M, O1, !0);
      }
      e.formatObjectFlags = Ot;
      function lt(M) {
        return Re(M, El, !0);
      }
      e.formatFlowFlags = lt;
      function sn(M) {
        return Re(M, F1, !0);
      }
      e.formatRelationComparisonResult = sn;
      function mt(M) {
        return Re(M, CheckMode, !0);
      }
      e.formatCheckMode = mt;
      function vr(M) {
        return Re(M, SignatureCheckMode, !0);
      }
      e.formatSignatureCheckMode = vr;
      function yt(M) {
        return Re(M, TypeFacts, !0);
      }
      e.formatTypeFacts = yt;
      let or = !1, rt;
      function jt(M) {
        "__debugFlowFlags" in M || Object.defineProperties(M, { __tsDebuggerDisplay: { value() {
          let oe = this.flags & 2 ? "FlowStart" : this.flags & 4 ? "FlowBranchLabel" : this.flags & 8 ? "FlowLoopLabel" : this.flags & 16 ? "FlowAssignment" : this.flags & 32 ? "FlowTrueCondition" : this.flags & 64 ? "FlowFalseCondition" : this.flags & 128 ? "FlowSwitchClause" : this.flags & 256 ? "FlowArrayMutation" : this.flags & 512 ? "FlowCall" : this.flags & 1024 ? "FlowReduceLabel" : this.flags & 1 ? "FlowUnreachable" : "UnknownFlow", me = this.flags & -2048;
          return `${oe}${me ? ` (${lt(me)})` : ""}`;
        } }, __debugFlowFlags: { get() {
          return Re(this.flags, El, !0);
        } }, __debugToString: { value() {
          return vn(this);
        } } });
      }
      function tr(M) {
        return or && (typeof Object.setPrototypeOf == "function" ? (rt || (rt = Object.create(Object.prototype), jt(rt)), Object.setPrototypeOf(M, rt)) : jt(M)), M;
      }
      e.attachFlowNodeDebugInfo = tr;
      let on;
      function kn(M) {
        "__tsDebuggerDisplay" in M || Object.defineProperties(M, { __tsDebuggerDisplay: { value(oe) {
          return oe = String(oe).replace(/(?:,[\s\w]+:[^,]+)+\]$/, "]"), `NodeArray ${oe}`;
        } } });
      }
      function bn(M) {
        or && (typeof Object.setPrototypeOf == "function" ? (on || (on = Object.create(Array.prototype), kn(on)), Object.setPrototypeOf(M, on)) : kn(M));
      }
      e.attachNodeArrayDebugInfo = bn;
      function Rr() {
        if (or) return;
        let M = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap();
        Object.defineProperties(Ct.getSymbolConstructor().prototype, { __tsDebuggerDisplay: { value() {
          let be = this.flags & 33554432 ? "TransientSymbol" : "Symbol", Xe = this.flags & -33554433;
          return `${be} '${Ul(this)}'${Xe ? ` (${ut(Xe)})` : ""}`;
        } }, __debugFlags: { get() {
          return ut(this.flags);
        } } }), Object.defineProperties(Ct.getTypeConstructor().prototype, { __tsDebuggerDisplay: { value() {
          let be = this.flags & 67359327 ? `IntrinsicType ${this.intrinsicName}${this.debugIntrinsicName ? ` (${this.debugIntrinsicName})` : ""}` : this.flags & 98304 ? "NullableType" : this.flags & 384 ? `LiteralType ${JSON.stringify(this.value)}` : this.flags & 2048 ? `LiteralType ${this.value.negative ? "-" : ""}${this.value.base10Value}n` : this.flags & 8192 ? "UniqueESSymbolType" : this.flags & 32 ? "EnumType" : this.flags & 1048576 ? "UnionType" : this.flags & 2097152 ? "IntersectionType" : this.flags & 4194304 ? "IndexType" : this.flags & 8388608 ? "IndexedAccessType" : this.flags & 16777216 ? "ConditionalType" : this.flags & 33554432 ? "SubstitutionType" : this.flags & 262144 ? "TypeParameter" : this.flags & 524288 ? this.objectFlags & 3 ? "InterfaceType" : this.objectFlags & 4 ? "TypeReference" : this.objectFlags & 8 ? "TupleType" : this.objectFlags & 16 ? "AnonymousType" : this.objectFlags & 32 ? "MappedType" : this.objectFlags & 1024 ? "ReverseMappedType" : this.objectFlags & 256 ? "EvolvingArrayType" : "ObjectType" : "Type", Xe = this.flags & 524288 ? this.objectFlags & -1344 : 0;
          return `${be}${this.symbol ? ` '${Ul(this.symbol)}'` : ""}${Xe ? ` (${Ot(Xe)})` : ""}`;
        } }, __debugFlags: { get() {
          return at(this.flags);
        } }, __debugObjectFlags: { get() {
          return this.flags & 524288 ? Ot(this.objectFlags) : "";
        } }, __debugTypeToString: { value() {
          let be = M.get(this);
          return be === void 0 && (be = this.checker.typeToString(this), M.set(this, be)), be;
        } } }), Object.defineProperties(Ct.getSignatureConstructor().prototype, { __debugFlags: { get() {
          return Ut(this.flags);
        } }, __debugSignatureToString: { value() {
          var be;
          return (be = this.checker) == null ? void 0 : be.signatureToString(this);
        } } });
        let me = [Ct.getNodeConstructor(), Ct.getIdentifierConstructor(), Ct.getTokenConstructor(), Ct.getSourceFileConstructor()];
        for (let be of me) hn(be.prototype, "__debugKind") || Object.defineProperties(be.prototype, { __tsDebuggerDisplay: { value() {
          return `${ni(this) ? "GeneratedIdentifier" : et(this) ? `Identifier '${_r(this)}'` : wa(this) ? `PrivateIdentifier '${_r(this)}'` : di(this) ? `StringLiteral ${JSON.stringify(this.text.length < 10 ? this.text : this.text.slice(10) + "...")}` : li(this) ? `NumericLiteral ${this.text}` : Oy(this) ? `BigIntLiteral ${this.text}n` : r2(this) ? "TypeParameterDeclaration" : Jo(this) ? "ParameterDeclaration" : n2(this) ? "ConstructorDeclaration" : fd(this) ? "GetAccessorDeclaration" : Ko(this) ? "SetAccessorDeclaration" : Ry(this) ? "CallSignatureDeclaration" : zy(this) ? "ConstructSignatureDeclaration" : a2(this) ? "IndexSignatureDeclaration" : $y(this) ? "TypePredicateNode" : i2(this) ? "TypeReferenceNode" : s2(this) ? "FunctionTypeNode" : o2(this) ? "ConstructorTypeNode" : Gy(this) ? "TypeQueryNode" : Wy(this) ? "TypeLiteralNode" : Vy(this) ? "ArrayTypeNode" : Hy(this) ? "TupleTypeNode" : Qy(this) ? "OptionalTypeNode" : Zy(this) ? "RestTypeNode" : Yy(this) ? "UnionTypeNode" : e_(this) ? "IntersectionTypeNode" : t_(this) ? "ConditionalTypeNode" : r_(this) ? "InferTypeNode" : n_(this) ? "ParenthesizedTypeNode" : a_(this) ? "ThisTypeNode" : i_(this) ? "TypeOperatorNode" : s_(this) ? "IndexedAccessTypeNode" : o_(this) ? "MappedTypeNode" : c_(this) ? "LiteralTypeNode" : Xy(this) ? "NamedTupleMember" : u_(this) ? "ImportTypeNode" : It(this.kind)}${this.flags ? ` (${Lt(this.flags)})` : ""}`;
        } }, __debugKind: { get() {
          return It(this.kind);
        } }, __debugNodeFlags: { get() {
          return Lt(this.flags);
        } }, __debugModifierFlags: { get() {
          return He(Hg(this));
        } }, __debugTransformFlags: { get() {
          return qr(this.transformFlags);
        } }, __debugIsParseTreeNode: { get() {
          return Co(this);
        } }, __debugEmitFlags: { get() {
          return Wt(si(this));
        } }, __debugGetText: { value(Xe) {
          if (oi(this)) return "";
          let Qe = oe.get(this);
          if (Qe === void 0) {
            let it = dh(this), At = it && na(it);
            Qe = At ? If(At, it, Xe) : "", oe.set(this, Qe);
          }
          return Qe;
        } } });
        or = !0;
      }
      e.enableDebugInfo = Rr;
      function zr(M) {
        let oe = M & 7, me = oe === 0 ? "in out" : oe === 3 ? "[bivariant]" : oe === 2 ? "in" : oe === 1 ? "out" : oe === 4 ? "[independent]" : "";
        return M & 8 ? me += " (unmeasurable)" : M & 16 && (me += " (unreliable)"), me;
      }
      e.formatVariance = zr;
      class jn {
        __debugToString() {
          var oe;
          switch (this.kind) {
            case 3:
              return ((oe = this.debugInfo) == null ? void 0 : oe.call(this)) || "(function mapper)";
            case 0:
              return `${this.source.__debugTypeToString()} -> ${this.target.__debugTypeToString()}`;
            case 1:
              return v1(this.sources, this.targets || xl(this.sources, () => "any"), (me, be) => `${me.__debugTypeToString()} -> ${typeof be == "string" ? be : be.__debugTypeToString()}`).join(", ");
            case 2:
              return v1(this.sources, this.targets, (me, be) => `${me.__debugTypeToString()} -> ${be().__debugTypeToString()}`).join(", ");
            case 5:
            case 4:
              return `m1: ${this.mapper1.__debugToString().split(`
`).join(`
    `)}
m2: ${this.mapper2.__debugToString().split(`
`).join(`
    `)}`;
            default:
              return Le(this);
          }
        }
      }
      e.DebugTypeMapper = jn;
      function $r(M) {
        return e.isDebugging ? Object.setPrototypeOf(M, jn.prototype) : M;
      }
      e.attachDebugPrototypeIfDebug = $r;
      function Ne(M) {
        return console.log(vn(M));
      }
      e.printControlFlowGraph = Ne;
      function vn(M) {
        let oe = -1;
        function me(L) {
          return L.id || (L.id = oe, oe--), L.id;
        }
        let be;
        ((L) => {
          L.lr = "─", L.ud = "│", L.dr = "╭", L.dl = "╮", L.ul = "╯", L.ur = "╰", L.udr = "├", L.udl = "┤", L.dlr = "┬", L.ulr = "┴", L.udlr = "╫";
        })(be || (be = {}));
        let Xe;
        ((L) => {
          L[L.None = 0] = "None", L[L.Up = 1] = "Up", L[L.Down = 2] = "Down", L[L.Left = 4] = "Left", L[L.Right = 8] = "Right", L[L.UpDown = 3] = "UpDown", L[L.LeftRight = 12] = "LeftRight", L[L.UpLeft = 5] = "UpLeft", L[L.UpRight = 9] = "UpRight", L[L.DownLeft = 6] = "DownLeft", L[L.DownRight = 10] = "DownRight", L[L.UpDownLeft = 7] = "UpDownLeft", L[L.UpDownRight = 11] = "UpDownRight", L[L.UpLeftRight = 13] = "UpLeftRight", L[L.DownLeftRight = 14] = "DownLeftRight", L[L.UpDownLeftRight = 15] = "UpDownLeftRight", L[L.NoChildren = 16] = "NoChildren";
        })(Xe || (Xe = {}));
        let Qe = 2032, it = 882, At = /* @__PURE__ */ Object.create(null), kt = [], st = ve(M, /* @__PURE__ */ new Set());
        for (let L of kt) L.text = Lr(L.flowNode, L.circular), Ce(L);
        let ua = Te(st), Sr = qe(ua);
        return Ze(st, 0), nt();
        function qn(L) {
          return !!(L.flags & 128);
        }
        function Gr(L) {
          return !!(L.flags & 12) && !!L.antecedent;
        }
        function La(L) {
          return !!(L.flags & Qe);
        }
        function K(L) {
          return !!(L.flags & it);
        }
        function Z(L) {
          let p = [];
          for (let Be of L.edges) Be.source === L && p.push(Be.target);
          return p;
        }
        function ee(L) {
          let p = [];
          for (let Be of L.edges) Be.target === L && p.push(Be.source);
          return p;
        }
        function ve(L, p) {
          let Be = me(L), Ve = At[Be];
          if (Ve && p.has(L)) return Ve.circular = !0, Ve = { id: -1, flowNode: L, edges: [], text: "", lane: -1, endLane: -1, level: -1, circular: "circularity" }, kt.push(Ve), Ve;
          if (p.add(L), !Ve) if (At[Be] = Ve = { id: Be, flowNode: L, edges: [], text: "", lane: -1, endLane: -1, level: -1, circular: !1 }, kt.push(Ve), Gr(L)) for (let j of L.antecedent) Se(Ve, j, p);
          else La(L) && Se(Ve, L.antecedent, p);
          return p.delete(L), Ve;
        }
        function Se(L, p, Be) {
          let Ve = ve(p, Be), j = { source: L, target: Ve };
          L.edges.push(j), Ve.edges.push(j);
        }
        function Ce(L) {
          if (L.level !== -1) return L.level;
          let p = 0;
          for (let Be of ee(L)) p = Math.max(p, Ce(Be) + 1);
          return L.level = p;
        }
        function Te(L) {
          let p = 0;
          for (let Be of Z(L)) p = Math.max(p, Te(Be));
          return p + 1;
        }
        function qe(L) {
          let p = Sn(Array(L), 0);
          for (let Be of kt) p[Be.level] = Math.max(p[Be.level], Be.text.length);
          return p;
        }
        function Ze(L, p) {
          if (L.lane === -1) {
            L.lane = p, L.endLane = p;
            let Be = Z(L);
            for (let Ve = 0; Ve < Be.length; Ve++) {
              Ve > 0 && p++;
              let j = Be[Ve];
              Ze(j, p), j.endLane > L.endLane && (p = j.endLane);
            }
            L.endLane = p;
          }
        }
        function Ge(L) {
          if (L & 2) return "Start";
          if (L & 4) return "Branch";
          if (L & 8) return "Loop";
          if (L & 16) return "Assignment";
          if (L & 32) return "True";
          if (L & 64) return "False";
          if (L & 128) return "SwitchClause";
          if (L & 256) return "ArrayMutation";
          if (L & 512) return "Call";
          if (L & 1024) return "ReduceLabel";
          if (L & 1) return "Unreachable";
          throw new Error();
        }
        function we(L) {
          let p = na(L);
          return If(p, L, !1);
        }
        function Lr(L, p) {
          let Be = Ge(L.flags);
          if (p && (Be = `${Be}#${me(L)}`), qn(L)) {
            let Ve = [], { switchStatement: j, clauseStart: Ye, clauseEnd: ze } = L.node;
            for (let We = Ye; We < ze; We++) {
              let Pt = j.caseBlock.clauses[We];
              E_(Pt) ? Ve.push("default") : Ve.push(we(Pt.expression));
            }
            Be += ` (${Ve.join(", ")})`;
          } else K(L) && L.node && (Be += ` (${we(L.node)})`);
          return p === "circularity" ? `Circular(${Be})` : Be;
        }
        function nt() {
          let L = Sr.length, p = k0(kt, 0, (ze) => ze.lane) + 1, Be = Sn(Array(p), ""), Ve = Sr.map(() => Array(p)), j = Sr.map(() => Sn(Array(p), 0));
          for (let ze of kt) {
            Ve[ze.level][ze.lane] = ze;
            let We = Z(ze);
            for (let _t = 0; _t < We.length; _t++) {
              let Ft = We[_t], Vt = 8;
              Ft.lane === ze.lane && (Vt |= 4), _t > 0 && (Vt |= 1), _t < We.length - 1 && (Vt |= 2), j[ze.level][Ft.lane] |= Vt;
            }
            We.length === 0 && (j[ze.level][ze.lane] |= 16);
            let Pt = ee(ze);
            for (let _t = 0; _t < Pt.length; _t++) {
              let Ft = Pt[_t], Vt = 4;
              _t > 0 && (Vt |= 1), _t < Pt.length - 1 && (Vt |= 2), j[ze.level - 1][Ft.lane] |= Vt;
            }
          }
          for (let ze = 0; ze < L; ze++) for (let We = 0; We < p; We++) {
            let Pt = ze > 0 ? j[ze - 1][We] : 0, _t = We > 0 ? j[ze][We - 1] : 0, Ft = j[ze][We];
            Ft || (Pt & 8 && (Ft |= 12), _t & 2 && (Ft |= 3), j[ze][We] = Ft);
          }
          for (let ze = 0; ze < L; ze++) for (let We = 0; We < Be.length; We++) {
            let Pt = j[ze][We], _t = Pt & 4 ? "─" : " ", Ft = Ve[ze][We];
            Ft ? (Ye(We, Ft.text), ze < L - 1 && (Ye(We, " "), Ye(We, O(_t, Sr[ze] - Ft.text.length)))) : ze < L - 1 && Ye(We, O(_t, Sr[ze] + 1)), Ye(We, cr(Pt)), Ye(We, Pt & 8 && ze < L - 1 && !Ve[ze + 1][We] ? "─" : " ");
          }
          return `
${Be.join(`
`)}
`;
          function Ye(ze, We) {
            Be[ze] += We;
          }
        }
        function cr(L) {
          switch (L) {
            case 3:
              return "│";
            case 12:
              return "─";
            case 5:
              return "╯";
            case 9:
              return "╰";
            case 6:
              return "╮";
            case 10:
              return "╭";
            case 7:
              return "┤";
            case 11:
              return "├";
            case 13:
              return "┴";
            case 14:
              return "┬";
            case 15:
              return "╫";
          }
          return " ";
        }
        function Sn(L, p) {
          if (L.fill) L.fill(p);
          else for (let Be = 0; Be < L.length; Be++) L[Be] = p;
          return L;
        }
        function O(L, p) {
          if (L.repeat) return p > 0 ? L.repeat(p) : "";
          let Be = "";
          for (; Be.length < p; ) Be += L;
          return Be;
        }
      }
      e.formatControlFlowGraph = vn;
    })(B || (B = {}));
    var xo, Fe = ((e) => (e[e.Unknown = 0] = "Unknown", e[e.EndOfFileToken = 1] = "EndOfFileToken", e[e.SingleLineCommentTrivia = 2] = "SingleLineCommentTrivia", e[e.MultiLineCommentTrivia = 3] = "MultiLineCommentTrivia", e[e.NewLineTrivia = 4] = "NewLineTrivia", e[e.WhitespaceTrivia = 5] = "WhitespaceTrivia", e[e.ShebangTrivia = 6] = "ShebangTrivia", e[e.ConflictMarkerTrivia = 7] = "ConflictMarkerTrivia", e[e.NonTextFileMarkerTrivia = 8] = "NonTextFileMarkerTrivia", e[e.NumericLiteral = 9] = "NumericLiteral", e[e.BigIntLiteral = 10] = "BigIntLiteral", e[e.StringLiteral = 11] = "StringLiteral", e[e.JsxText = 12] = "JsxText", e[e.JsxTextAllWhiteSpaces = 13] = "JsxTextAllWhiteSpaces", e[e.RegularExpressionLiteral = 14] = "RegularExpressionLiteral", e[e.NoSubstitutionTemplateLiteral = 15] = "NoSubstitutionTemplateLiteral", e[e.TemplateHead = 16] = "TemplateHead", e[e.TemplateMiddle = 17] = "TemplateMiddle", e[e.TemplateTail = 18] = "TemplateTail", e[e.OpenBraceToken = 19] = "OpenBraceToken", e[e.CloseBraceToken = 20] = "CloseBraceToken", e[e.OpenParenToken = 21] = "OpenParenToken", e[e.CloseParenToken = 22] = "CloseParenToken", e[e.OpenBracketToken = 23] = "OpenBracketToken", e[e.CloseBracketToken = 24] = "CloseBracketToken", e[e.DotToken = 25] = "DotToken", e[e.DotDotDotToken = 26] = "DotDotDotToken", e[e.SemicolonToken = 27] = "SemicolonToken", e[e.CommaToken = 28] = "CommaToken", e[e.QuestionDotToken = 29] = "QuestionDotToken", e[e.LessThanToken = 30] = "LessThanToken", e[e.LessThanSlashToken = 31] = "LessThanSlashToken", e[e.GreaterThanToken = 32] = "GreaterThanToken", e[e.LessThanEqualsToken = 33] = "LessThanEqualsToken", e[e.GreaterThanEqualsToken = 34] = "GreaterThanEqualsToken", e[e.EqualsEqualsToken = 35] = "EqualsEqualsToken", e[e.ExclamationEqualsToken = 36] = "ExclamationEqualsToken", e[e.EqualsEqualsEqualsToken = 37] = "EqualsEqualsEqualsToken", e[e.ExclamationEqualsEqualsToken = 38] = "ExclamationEqualsEqualsToken", e[e.EqualsGreaterThanToken = 39] = "EqualsGreaterThanToken", e[e.PlusToken = 40] = "PlusToken", e[e.MinusToken = 41] = "MinusToken", e[e.AsteriskToken = 42] = "AsteriskToken", e[e.AsteriskAsteriskToken = 43] = "AsteriskAsteriskToken", e[e.SlashToken = 44] = "SlashToken", e[e.PercentToken = 45] = "PercentToken", e[e.PlusPlusToken = 46] = "PlusPlusToken", e[e.MinusMinusToken = 47] = "MinusMinusToken", e[e.LessThanLessThanToken = 48] = "LessThanLessThanToken", e[e.GreaterThanGreaterThanToken = 49] = "GreaterThanGreaterThanToken", e[e.GreaterThanGreaterThanGreaterThanToken = 50] = "GreaterThanGreaterThanGreaterThanToken", e[e.AmpersandToken = 51] = "AmpersandToken", e[e.BarToken = 52] = "BarToken", e[e.CaretToken = 53] = "CaretToken", e[e.ExclamationToken = 54] = "ExclamationToken", e[e.TildeToken = 55] = "TildeToken", e[e.AmpersandAmpersandToken = 56] = "AmpersandAmpersandToken", e[e.BarBarToken = 57] = "BarBarToken", e[e.QuestionToken = 58] = "QuestionToken", e[e.ColonToken = 59] = "ColonToken", e[e.AtToken = 60] = "AtToken", e[e.QuestionQuestionToken = 61] = "QuestionQuestionToken", e[e.BacktickToken = 62] = "BacktickToken", e[e.HashToken = 63] = "HashToken", e[e.EqualsToken = 64] = "EqualsToken", e[e.PlusEqualsToken = 65] = "PlusEqualsToken", e[e.MinusEqualsToken = 66] = "MinusEqualsToken", e[e.AsteriskEqualsToken = 67] = "AsteriskEqualsToken", e[e.AsteriskAsteriskEqualsToken = 68] = "AsteriskAsteriskEqualsToken", e[e.SlashEqualsToken = 69] = "SlashEqualsToken", e[e.PercentEqualsToken = 70] = "PercentEqualsToken", e[e.LessThanLessThanEqualsToken = 71] = "LessThanLessThanEqualsToken", e[e.GreaterThanGreaterThanEqualsToken = 72] = "GreaterThanGreaterThanEqualsToken", e[e.GreaterThanGreaterThanGreaterThanEqualsToken = 73] = "GreaterThanGreaterThanGreaterThanEqualsToken", e[e.AmpersandEqualsToken = 74] = "AmpersandEqualsToken", e[e.BarEqualsToken = 75] = "BarEqualsToken", e[e.BarBarEqualsToken = 76] = "BarBarEqualsToken", e[e.AmpersandAmpersandEqualsToken = 77] = "AmpersandAmpersandEqualsToken", e[e.QuestionQuestionEqualsToken = 78] = "QuestionQuestionEqualsToken", e[e.CaretEqualsToken = 79] = "CaretEqualsToken", e[e.Identifier = 80] = "Identifier", e[e.PrivateIdentifier = 81] = "PrivateIdentifier", e[e.JSDocCommentTextToken = 82] = "JSDocCommentTextToken", e[e.BreakKeyword = 83] = "BreakKeyword", e[e.CaseKeyword = 84] = "CaseKeyword", e[e.CatchKeyword = 85] = "CatchKeyword", e[e.ClassKeyword = 86] = "ClassKeyword", e[e.ConstKeyword = 87] = "ConstKeyword", e[e.ContinueKeyword = 88] = "ContinueKeyword", e[e.DebuggerKeyword = 89] = "DebuggerKeyword", e[e.DefaultKeyword = 90] = "DefaultKeyword", e[e.DeleteKeyword = 91] = "DeleteKeyword", e[e.DoKeyword = 92] = "DoKeyword", e[e.ElseKeyword = 93] = "ElseKeyword", e[e.EnumKeyword = 94] = "EnumKeyword", e[e.ExportKeyword = 95] = "ExportKeyword", e[e.ExtendsKeyword = 96] = "ExtendsKeyword", e[e.FalseKeyword = 97] = "FalseKeyword", e[e.FinallyKeyword = 98] = "FinallyKeyword", e[e.ForKeyword = 99] = "ForKeyword", e[e.FunctionKeyword = 100] = "FunctionKeyword", e[e.IfKeyword = 101] = "IfKeyword", e[e.ImportKeyword = 102] = "ImportKeyword", e[e.InKeyword = 103] = "InKeyword", e[e.InstanceOfKeyword = 104] = "InstanceOfKeyword", e[e.NewKeyword = 105] = "NewKeyword", e[e.NullKeyword = 106] = "NullKeyword", e[e.ReturnKeyword = 107] = "ReturnKeyword", e[e.SuperKeyword = 108] = "SuperKeyword", e[e.SwitchKeyword = 109] = "SwitchKeyword", e[e.ThisKeyword = 110] = "ThisKeyword", e[e.ThrowKeyword = 111] = "ThrowKeyword", e[e.TrueKeyword = 112] = "TrueKeyword", e[e.TryKeyword = 113] = "TryKeyword", e[e.TypeOfKeyword = 114] = "TypeOfKeyword", e[e.VarKeyword = 115] = "VarKeyword", e[e.VoidKeyword = 116] = "VoidKeyword", e[e.WhileKeyword = 117] = "WhileKeyword", e[e.WithKeyword = 118] = "WithKeyword", e[e.ImplementsKeyword = 119] = "ImplementsKeyword", e[e.InterfaceKeyword = 120] = "InterfaceKeyword", e[e.LetKeyword = 121] = "LetKeyword", e[e.PackageKeyword = 122] = "PackageKeyword", e[e.PrivateKeyword = 123] = "PrivateKeyword", e[e.ProtectedKeyword = 124] = "ProtectedKeyword", e[e.PublicKeyword = 125] = "PublicKeyword", e[e.StaticKeyword = 126] = "StaticKeyword", e[e.YieldKeyword = 127] = "YieldKeyword", e[e.AbstractKeyword = 128] = "AbstractKeyword", e[e.AccessorKeyword = 129] = "AccessorKeyword", e[e.AsKeyword = 130] = "AsKeyword", e[e.AssertsKeyword = 131] = "AssertsKeyword", e[e.AssertKeyword = 132] = "AssertKeyword", e[e.AnyKeyword = 133] = "AnyKeyword", e[e.AsyncKeyword = 134] = "AsyncKeyword", e[e.AwaitKeyword = 135] = "AwaitKeyword", e[e.BooleanKeyword = 136] = "BooleanKeyword", e[e.ConstructorKeyword = 137] = "ConstructorKeyword", e[e.DeclareKeyword = 138] = "DeclareKeyword", e[e.GetKeyword = 139] = "GetKeyword", e[e.InferKeyword = 140] = "InferKeyword", e[e.IntrinsicKeyword = 141] = "IntrinsicKeyword", e[e.IsKeyword = 142] = "IsKeyword", e[e.KeyOfKeyword = 143] = "KeyOfKeyword", e[e.ModuleKeyword = 144] = "ModuleKeyword", e[e.NamespaceKeyword = 145] = "NamespaceKeyword", e[e.NeverKeyword = 146] = "NeverKeyword", e[e.OutKeyword = 147] = "OutKeyword", e[e.ReadonlyKeyword = 148] = "ReadonlyKeyword", e[e.RequireKeyword = 149] = "RequireKeyword", e[e.NumberKeyword = 150] = "NumberKeyword", e[e.ObjectKeyword = 151] = "ObjectKeyword", e[e.SatisfiesKeyword = 152] = "SatisfiesKeyword", e[e.SetKeyword = 153] = "SetKeyword", e[e.StringKeyword = 154] = "StringKeyword", e[e.SymbolKeyword = 155] = "SymbolKeyword", e[e.TypeKeyword = 156] = "TypeKeyword", e[e.UndefinedKeyword = 157] = "UndefinedKeyword", e[e.UniqueKeyword = 158] = "UniqueKeyword", e[e.UnknownKeyword = 159] = "UnknownKeyword", e[e.UsingKeyword = 160] = "UsingKeyword", e[e.FromKeyword = 161] = "FromKeyword", e[e.GlobalKeyword = 162] = "GlobalKeyword", e[e.BigIntKeyword = 163] = "BigIntKeyword", e[e.OverrideKeyword = 164] = "OverrideKeyword", e[e.OfKeyword = 165] = "OfKeyword", e[e.QualifiedName = 166] = "QualifiedName", e[e.ComputedPropertyName = 167] = "ComputedPropertyName", e[e.TypeParameter = 168] = "TypeParameter", e[e.Parameter = 169] = "Parameter", e[e.Decorator = 170] = "Decorator", e[e.PropertySignature = 171] = "PropertySignature", e[e.PropertyDeclaration = 172] = "PropertyDeclaration", e[e.MethodSignature = 173] = "MethodSignature", e[e.MethodDeclaration = 174] = "MethodDeclaration", e[e.ClassStaticBlockDeclaration = 175] = "ClassStaticBlockDeclaration", e[e.Constructor = 176] = "Constructor", e[e.GetAccessor = 177] = "GetAccessor", e[e.SetAccessor = 178] = "SetAccessor", e[e.CallSignature = 179] = "CallSignature", e[e.ConstructSignature = 180] = "ConstructSignature", e[e.IndexSignature = 181] = "IndexSignature", e[e.TypePredicate = 182] = "TypePredicate", e[e.TypeReference = 183] = "TypeReference", e[e.FunctionType = 184] = "FunctionType", e[e.ConstructorType = 185] = "ConstructorType", e[e.TypeQuery = 186] = "TypeQuery", e[e.TypeLiteral = 187] = "TypeLiteral", e[e.ArrayType = 188] = "ArrayType", e[e.TupleType = 189] = "TupleType", e[e.OptionalType = 190] = "OptionalType", e[e.RestType = 191] = "RestType", e[e.UnionType = 192] = "UnionType", e[e.IntersectionType = 193] = "IntersectionType", e[e.ConditionalType = 194] = "ConditionalType", e[e.InferType = 195] = "InferType", e[e.ParenthesizedType = 196] = "ParenthesizedType", e[e.ThisType = 197] = "ThisType", e[e.TypeOperator = 198] = "TypeOperator", e[e.IndexedAccessType = 199] = "IndexedAccessType", e[e.MappedType = 200] = "MappedType", e[e.LiteralType = 201] = "LiteralType", e[e.NamedTupleMember = 202] = "NamedTupleMember", e[e.TemplateLiteralType = 203] = "TemplateLiteralType", e[e.TemplateLiteralTypeSpan = 204] = "TemplateLiteralTypeSpan", e[e.ImportType = 205] = "ImportType", e[e.ObjectBindingPattern = 206] = "ObjectBindingPattern", e[e.ArrayBindingPattern = 207] = "ArrayBindingPattern", e[e.BindingElement = 208] = "BindingElement", e[e.ArrayLiteralExpression = 209] = "ArrayLiteralExpression", e[e.ObjectLiteralExpression = 210] = "ObjectLiteralExpression", e[e.PropertyAccessExpression = 211] = "PropertyAccessExpression", e[e.ElementAccessExpression = 212] = "ElementAccessExpression", e[e.CallExpression = 213] = "CallExpression", e[e.NewExpression = 214] = "NewExpression", e[e.TaggedTemplateExpression = 215] = "TaggedTemplateExpression", e[e.TypeAssertionExpression = 216] = "TypeAssertionExpression", e[e.ParenthesizedExpression = 217] = "ParenthesizedExpression", e[e.FunctionExpression = 218] = "FunctionExpression", e[e.ArrowFunction = 219] = "ArrowFunction", e[e.DeleteExpression = 220] = "DeleteExpression", e[e.TypeOfExpression = 221] = "TypeOfExpression", e[e.VoidExpression = 222] = "VoidExpression", e[e.AwaitExpression = 223] = "AwaitExpression", e[e.PrefixUnaryExpression = 224] = "PrefixUnaryExpression", e[e.PostfixUnaryExpression = 225] = "PostfixUnaryExpression", e[e.BinaryExpression = 226] = "BinaryExpression", e[e.ConditionalExpression = 227] = "ConditionalExpression", e[e.TemplateExpression = 228] = "TemplateExpression", e[e.YieldExpression = 229] = "YieldExpression", e[e.SpreadElement = 230] = "SpreadElement", e[e.ClassExpression = 231] = "ClassExpression", e[e.OmittedExpression = 232] = "OmittedExpression", e[e.ExpressionWithTypeArguments = 233] = "ExpressionWithTypeArguments", e[e.AsExpression = 234] = "AsExpression", e[e.NonNullExpression = 235] = "NonNullExpression", e[e.MetaProperty = 236] = "MetaProperty", e[e.SyntheticExpression = 237] = "SyntheticExpression", e[e.SatisfiesExpression = 238] = "SatisfiesExpression", e[e.TemplateSpan = 239] = "TemplateSpan", e[e.SemicolonClassElement = 240] = "SemicolonClassElement", e[e.Block = 241] = "Block", e[e.EmptyStatement = 242] = "EmptyStatement", e[e.VariableStatement = 243] = "VariableStatement", e[e.ExpressionStatement = 244] = "ExpressionStatement", e[e.IfStatement = 245] = "IfStatement", e[e.DoStatement = 246] = "DoStatement", e[e.WhileStatement = 247] = "WhileStatement", e[e.ForStatement = 248] = "ForStatement", e[e.ForInStatement = 249] = "ForInStatement", e[e.ForOfStatement = 250] = "ForOfStatement", e[e.ContinueStatement = 251] = "ContinueStatement", e[e.BreakStatement = 252] = "BreakStatement", e[e.ReturnStatement = 253] = "ReturnStatement", e[e.WithStatement = 254] = "WithStatement", e[e.SwitchStatement = 255] = "SwitchStatement", e[e.LabeledStatement = 256] = "LabeledStatement", e[e.ThrowStatement = 257] = "ThrowStatement", e[e.TryStatement = 258] = "TryStatement", e[e.DebuggerStatement = 259] = "DebuggerStatement", e[e.VariableDeclaration = 260] = "VariableDeclaration", e[e.VariableDeclarationList = 261] = "VariableDeclarationList", e[e.FunctionDeclaration = 262] = "FunctionDeclaration", e[e.ClassDeclaration = 263] = "ClassDeclaration", e[e.InterfaceDeclaration = 264] = "InterfaceDeclaration", e[e.TypeAliasDeclaration = 265] = "TypeAliasDeclaration", e[e.EnumDeclaration = 266] = "EnumDeclaration", e[e.ModuleDeclaration = 267] = "ModuleDeclaration", e[e.ModuleBlock = 268] = "ModuleBlock", e[e.CaseBlock = 269] = "CaseBlock", e[e.NamespaceExportDeclaration = 270] = "NamespaceExportDeclaration", e[e.ImportEqualsDeclaration = 271] = "ImportEqualsDeclaration", e[e.ImportDeclaration = 272] = "ImportDeclaration", e[e.ImportClause = 273] = "ImportClause", e[e.NamespaceImport = 274] = "NamespaceImport", e[e.NamedImports = 275] = "NamedImports", e[e.ImportSpecifier = 276] = "ImportSpecifier", e[e.ExportAssignment = 277] = "ExportAssignment", e[e.ExportDeclaration = 278] = "ExportDeclaration", e[e.NamedExports = 279] = "NamedExports", e[e.NamespaceExport = 280] = "NamespaceExport", e[e.ExportSpecifier = 281] = "ExportSpecifier", e[e.MissingDeclaration = 282] = "MissingDeclaration", e[e.ExternalModuleReference = 283] = "ExternalModuleReference", e[e.JsxElement = 284] = "JsxElement", e[e.JsxSelfClosingElement = 285] = "JsxSelfClosingElement", e[e.JsxOpeningElement = 286] = "JsxOpeningElement", e[e.JsxClosingElement = 287] = "JsxClosingElement", e[e.JsxFragment = 288] = "JsxFragment", e[e.JsxOpeningFragment = 289] = "JsxOpeningFragment", e[e.JsxClosingFragment = 290] = "JsxClosingFragment", e[e.JsxAttribute = 291] = "JsxAttribute", e[e.JsxAttributes = 292] = "JsxAttributes", e[e.JsxSpreadAttribute = 293] = "JsxSpreadAttribute", e[e.JsxExpression = 294] = "JsxExpression", e[e.JsxNamespacedName = 295] = "JsxNamespacedName", e[e.CaseClause = 296] = "CaseClause", e[e.DefaultClause = 297] = "DefaultClause", e[e.HeritageClause = 298] = "HeritageClause", e[e.CatchClause = 299] = "CatchClause", e[e.ImportAttributes = 300] = "ImportAttributes", e[e.ImportAttribute = 301] = "ImportAttribute", e[e.AssertClause = 300] = "AssertClause", e[e.AssertEntry = 301] = "AssertEntry", e[e.ImportTypeAssertionContainer = 302] = "ImportTypeAssertionContainer", e[e.PropertyAssignment = 303] = "PropertyAssignment", e[e.ShorthandPropertyAssignment = 304] = "ShorthandPropertyAssignment", e[e.SpreadAssignment = 305] = "SpreadAssignment", e[e.EnumMember = 306] = "EnumMember", e[e.SourceFile = 307] = "SourceFile", e[e.Bundle = 308] = "Bundle", e[e.JSDocTypeExpression = 309] = "JSDocTypeExpression", e[e.JSDocNameReference = 310] = "JSDocNameReference", e[e.JSDocMemberName = 311] = "JSDocMemberName", e[e.JSDocAllType = 312] = "JSDocAllType", e[e.JSDocUnknownType = 313] = "JSDocUnknownType", e[e.JSDocNullableType = 314] = "JSDocNullableType", e[e.JSDocNonNullableType = 315] = "JSDocNonNullableType", e[e.JSDocOptionalType = 316] = "JSDocOptionalType", e[e.JSDocFunctionType = 317] = "JSDocFunctionType", e[e.JSDocVariadicType = 318] = "JSDocVariadicType", e[e.JSDocNamepathType = 319] = "JSDocNamepathType", e[e.JSDoc = 320] = "JSDoc", e[e.JSDocComment = 320] = "JSDocComment", e[e.JSDocText = 321] = "JSDocText", e[e.JSDocTypeLiteral = 322] = "JSDocTypeLiteral", e[e.JSDocSignature = 323] = "JSDocSignature", e[e.JSDocLink = 324] = "JSDocLink", e[e.JSDocLinkCode = 325] = "JSDocLinkCode", e[e.JSDocLinkPlain = 326] = "JSDocLinkPlain", e[e.JSDocTag = 327] = "JSDocTag", e[e.JSDocAugmentsTag = 328] = "JSDocAugmentsTag", e[e.JSDocImplementsTag = 329] = "JSDocImplementsTag", e[e.JSDocAuthorTag = 330] = "JSDocAuthorTag", e[e.JSDocDeprecatedTag = 331] = "JSDocDeprecatedTag", e[e.JSDocClassTag = 332] = "JSDocClassTag", e[e.JSDocPublicTag = 333] = "JSDocPublicTag", e[e.JSDocPrivateTag = 334] = "JSDocPrivateTag", e[e.JSDocProtectedTag = 335] = "JSDocProtectedTag", e[e.JSDocReadonlyTag = 336] = "JSDocReadonlyTag", e[e.JSDocOverrideTag = 337] = "JSDocOverrideTag", e[e.JSDocCallbackTag = 338] = "JSDocCallbackTag", e[e.JSDocOverloadTag = 339] = "JSDocOverloadTag", e[e.JSDocEnumTag = 340] = "JSDocEnumTag", e[e.JSDocParameterTag = 341] = "JSDocParameterTag", e[e.JSDocReturnTag = 342] = "JSDocReturnTag", e[e.JSDocThisTag = 343] = "JSDocThisTag", e[e.JSDocTypeTag = 344] = "JSDocTypeTag", e[e.JSDocTemplateTag = 345] = "JSDocTemplateTag", e[e.JSDocTypedefTag = 346] = "JSDocTypedefTag", e[e.JSDocSeeTag = 347] = "JSDocSeeTag", e[e.JSDocPropertyTag = 348] = "JSDocPropertyTag", e[e.JSDocThrowsTag = 349] = "JSDocThrowsTag", e[e.JSDocSatisfiesTag = 350] = "JSDocSatisfiesTag", e[e.JSDocImportTag = 351] = "JSDocImportTag", e[e.SyntaxList = 352] = "SyntaxList", e[e.NotEmittedStatement = 353] = "NotEmittedStatement", e[e.NotEmittedTypeElement = 354] = "NotEmittedTypeElement", e[e.PartiallyEmittedExpression = 355] = "PartiallyEmittedExpression", e[e.CommaListExpression = 356] = "CommaListExpression", e[e.SyntheticReferenceExpression = 357] = "SyntheticReferenceExpression", e[e.Count = 358] = "Count", e[e.FirstAssignment = 64] = "FirstAssignment", e[e.LastAssignment = 79] = "LastAssignment", e[e.FirstCompoundAssignment = 65] = "FirstCompoundAssignment", e[e.LastCompoundAssignment = 79] = "LastCompoundAssignment", e[e.FirstReservedWord = 83] = "FirstReservedWord", e[e.LastReservedWord = 118] = "LastReservedWord", e[e.FirstKeyword = 83] = "FirstKeyword", e[e.LastKeyword = 165] = "LastKeyword", e[e.FirstFutureReservedWord = 119] = "FirstFutureReservedWord", e[e.LastFutureReservedWord = 127] = "LastFutureReservedWord", e[e.FirstTypeNode = 182] = "FirstTypeNode", e[e.LastTypeNode = 205] = "LastTypeNode", e[e.FirstPunctuation = 19] = "FirstPunctuation", e[e.LastPunctuation = 79] = "LastPunctuation", e[e.FirstToken = 0] = "FirstToken", e[e.LastToken = 165] = "LastToken", e[e.FirstTriviaToken = 2] = "FirstTriviaToken", e[e.LastTriviaToken = 7] = "LastTriviaToken", e[e.FirstLiteralToken = 9] = "FirstLiteralToken", e[e.LastLiteralToken = 15] = "LastLiteralToken", e[e.FirstTemplateToken = 15] = "FirstTemplateToken", e[e.LastTemplateToken = 18] = "LastTemplateToken", e[e.FirstBinaryOperator = 30] = "FirstBinaryOperator", e[e.LastBinaryOperator = 79] = "LastBinaryOperator", e[e.FirstStatement = 243] = "FirstStatement", e[e.LastStatement = 259] = "LastStatement", e[e.FirstNode = 166] = "FirstNode", e[e.FirstJSDocNode = 309] = "FirstJSDocNode", e[e.LastJSDocNode = 351] = "LastJSDocNode", e[e.FirstJSDocTagNode = 327] = "FirstJSDocTagNode", e[e.LastJSDocTagNode = 351] = "LastJSDocTagNode", e[e.FirstContextualKeyword = 128] = "FirstContextualKeyword", e[e.LastContextualKeyword = 165] = "LastContextualKeyword", e))(Fe || {}), Br = ((e) => (e[e.None = 0] = "None", e[e.Let = 1] = "Let", e[e.Const = 2] = "Const", e[e.Using = 4] = "Using", e[e.AwaitUsing = 6] = "AwaitUsing", e[e.NestedNamespace = 8] = "NestedNamespace", e[e.Synthesized = 16] = "Synthesized", e[e.Namespace = 32] = "Namespace", e[e.OptionalChain = 64] = "OptionalChain", e[e.ExportContext = 128] = "ExportContext", e[e.ContainsThis = 256] = "ContainsThis", e[e.HasImplicitReturn = 512] = "HasImplicitReturn", e[e.HasExplicitReturn = 1024] = "HasExplicitReturn", e[e.GlobalAugmentation = 2048] = "GlobalAugmentation", e[e.HasAsyncFunctions = 4096] = "HasAsyncFunctions", e[e.DisallowInContext = 8192] = "DisallowInContext", e[e.YieldContext = 16384] = "YieldContext", e[e.DecoratorContext = 32768] = "DecoratorContext", e[e.AwaitContext = 65536] = "AwaitContext", e[e.DisallowConditionalTypesContext = 131072] = "DisallowConditionalTypesContext", e[e.ThisNodeHasError = 262144] = "ThisNodeHasError", e[e.JavaScriptFile = 524288] = "JavaScriptFile", e[e.ThisNodeOrAnySubNodesHasError = 1048576] = "ThisNodeOrAnySubNodesHasError", e[e.HasAggregatedChildData = 2097152] = "HasAggregatedChildData", e[e.PossiblyContainsDynamicImport = 4194304] = "PossiblyContainsDynamicImport", e[e.PossiblyContainsImportMeta = 8388608] = "PossiblyContainsImportMeta", e[e.JSDoc = 16777216] = "JSDoc", e[e.Ambient = 33554432] = "Ambient", e[e.InWithStatement = 67108864] = "InWithStatement", e[e.JsonFile = 134217728] = "JsonFile", e[e.TypeCached = 268435456] = "TypeCached", e[e.Deprecated = 536870912] = "Deprecated", e[e.BlockScoped = 7] = "BlockScoped", e[e.Constant = 6] = "Constant", e[e.ReachabilityCheckFlags = 1536] = "ReachabilityCheckFlags", e[e.ReachabilityAndEmitFlags = 5632] = "ReachabilityAndEmitFlags", e[e.ContextFlags = 101441536] = "ContextFlags", e[e.TypeExcludesFlags = 81920] = "TypeExcludesFlags", e[e.PermanentlySetIncrementalFlags = 12582912] = "PermanentlySetIncrementalFlags", e[e.IdentifierHasExtendedUnicodeEscape = 256] = "IdentifierHasExtendedUnicodeEscape", e[e.IdentifierIsInJSDocNamespace = 4096] = "IdentifierIsInJSDocNamespace", e))(Br || {}), P1 = ((e) => (e[e.None = 0] = "None", e[e.Public = 1] = "Public", e[e.Private = 2] = "Private", e[e.Protected = 4] = "Protected", e[e.Readonly = 8] = "Readonly", e[e.Override = 16] = "Override", e[e.Export = 32] = "Export", e[e.Abstract = 64] = "Abstract", e[e.Ambient = 128] = "Ambient", e[e.Static = 256] = "Static", e[e.Accessor = 512] = "Accessor", e[e.Async = 1024] = "Async", e[e.Default = 2048] = "Default", e[e.Const = 4096] = "Const", e[e.In = 8192] = "In", e[e.Out = 16384] = "Out", e[e.Decorator = 32768] = "Decorator", e[e.Deprecated = 65536] = "Deprecated", e[e.JSDocPublic = 8388608] = "JSDocPublic", e[e.JSDocPrivate = 16777216] = "JSDocPrivate", e[e.JSDocProtected = 33554432] = "JSDocProtected", e[e.JSDocReadonly = 67108864] = "JSDocReadonly", e[e.JSDocOverride = 134217728] = "JSDocOverride", e[e.SyntacticOrJSDocModifiers = 31] = "SyntacticOrJSDocModifiers", e[e.SyntacticOnlyModifiers = 65504] = "SyntacticOnlyModifiers", e[e.SyntacticModifiers = 65535] = "SyntacticModifiers", e[e.JSDocCacheOnlyModifiers = 260046848] = "JSDocCacheOnlyModifiers", e[e.JSDocOnlyModifiers = 65536] = "JSDocOnlyModifiers", e[e.NonCacheOnlyModifiers = 131071] = "NonCacheOnlyModifiers", e[e.HasComputedJSDocModifiers = 268435456] = "HasComputedJSDocModifiers", e[e.HasComputedFlags = 536870912] = "HasComputedFlags", e[e.AccessibilityModifier = 7] = "AccessibilityModifier", e[e.ParameterPropertyModifier = 31] = "ParameterPropertyModifier", e[e.NonPublicAccessibilityModifier = 6] = "NonPublicAccessibilityModifier", e[e.TypeScriptModifier = 28895] = "TypeScriptModifier", e[e.ExportDefault = 2080] = "ExportDefault", e[e.All = 131071] = "All", e[e.Modifier = 98303] = "Modifier", e))(P1 || {}), F1 = ((e) => (e[e.None = 0] = "None", e[e.Succeeded = 1] = "Succeeded", e[e.Failed = 2] = "Failed", e[e.ReportsUnmeasurable = 8] = "ReportsUnmeasurable", e[e.ReportsUnreliable = 16] = "ReportsUnreliable", e[e.ReportsMask = 24] = "ReportsMask", e[e.ComplexityOverflow = 32] = "ComplexityOverflow", e[e.StackDepthOverflow = 64] = "StackDepthOverflow", e[e.Overflow = 96] = "Overflow", e))(F1 || {}), El = ((e) => (e[e.Unreachable = 1] = "Unreachable", e[e.Start = 2] = "Start", e[e.BranchLabel = 4] = "BranchLabel", e[e.LoopLabel = 8] = "LoopLabel", e[e.Assignment = 16] = "Assignment", e[e.TrueCondition = 32] = "TrueCondition", e[e.FalseCondition = 64] = "FalseCondition", e[e.SwitchClause = 128] = "SwitchClause", e[e.ArrayMutation = 256] = "ArrayMutation", e[e.Call = 512] = "Call", e[e.ReduceLabel = 1024] = "ReduceLabel", e[e.Referenced = 2048] = "Referenced", e[e.Shared = 4096] = "Shared", e[e.Label = 12] = "Label", e[e.Condition = 96] = "Condition", e))(El || {}), I1 = ((e) => (e[e.None = 0] = "None", e[e.FunctionScopedVariable = 1] = "FunctionScopedVariable", e[e.BlockScopedVariable = 2] = "BlockScopedVariable", e[e.Property = 4] = "Property", e[e.EnumMember = 8] = "EnumMember", e[e.Function = 16] = "Function", e[e.Class = 32] = "Class", e[e.Interface = 64] = "Interface", e[e.ConstEnum = 128] = "ConstEnum", e[e.RegularEnum = 256] = "RegularEnum", e[e.ValueModule = 512] = "ValueModule", e[e.NamespaceModule = 1024] = "NamespaceModule", e[e.TypeLiteral = 2048] = "TypeLiteral", e[e.ObjectLiteral = 4096] = "ObjectLiteral", e[e.Method = 8192] = "Method", e[e.Constructor = 16384] = "Constructor", e[e.GetAccessor = 32768] = "GetAccessor", e[e.SetAccessor = 65536] = "SetAccessor", e[e.Signature = 131072] = "Signature", e[e.TypeParameter = 262144] = "TypeParameter", e[e.TypeAlias = 524288] = "TypeAlias", e[e.ExportValue = 1048576] = "ExportValue", e[e.Alias = 2097152] = "Alias", e[e.Prototype = 4194304] = "Prototype", e[e.ExportStar = 8388608] = "ExportStar", e[e.Optional = 16777216] = "Optional", e[e.Transient = 33554432] = "Transient", e[e.Assignment = 67108864] = "Assignment", e[e.ModuleExports = 134217728] = "ModuleExports", e[e.All = -1] = "All", e[e.Enum = 384] = "Enum", e[e.Variable = 3] = "Variable", e[e.Value = 111551] = "Value", e[e.Type = 788968] = "Type", e[e.Namespace = 1920] = "Namespace", e[e.Module = 1536] = "Module", e[e.Accessor = 98304] = "Accessor", e[e.FunctionScopedVariableExcludes = 111550] = "FunctionScopedVariableExcludes", e[e.BlockScopedVariableExcludes = 111551] = "BlockScopedVariableExcludes", e[e.ParameterExcludes = 111551] = "ParameterExcludes", e[e.PropertyExcludes = 0] = "PropertyExcludes", e[e.EnumMemberExcludes = 900095] = "EnumMemberExcludes", e[e.FunctionExcludes = 110991] = "FunctionExcludes", e[e.ClassExcludes = 899503] = "ClassExcludes", e[e.InterfaceExcludes = 788872] = "InterfaceExcludes", e[e.RegularEnumExcludes = 899327] = "RegularEnumExcludes", e[e.ConstEnumExcludes = 899967] = "ConstEnumExcludes", e[e.ValueModuleExcludes = 110735] = "ValueModuleExcludes", e[e.NamespaceModuleExcludes = 0] = "NamespaceModuleExcludes", e[e.MethodExcludes = 103359] = "MethodExcludes", e[e.GetAccessorExcludes = 46015] = "GetAccessorExcludes", e[e.SetAccessorExcludes = 78783] = "SetAccessorExcludes", e[e.AccessorExcludes = 13247] = "AccessorExcludes", e[e.TypeParameterExcludes = 526824] = "TypeParameterExcludes", e[e.TypeAliasExcludes = 788968] = "TypeAliasExcludes", e[e.AliasExcludes = 2097152] = "AliasExcludes", e[e.ModuleMember = 2623475] = "ModuleMember", e[e.ExportHasLocal = 944] = "ExportHasLocal", e[e.BlockScoped = 418] = "BlockScoped", e[e.PropertyOrAccessor = 98308] = "PropertyOrAccessor", e[e.ClassMember = 106500] = "ClassMember", e[e.ExportSupportsDefaultModifier = 112] = "ExportSupportsDefaultModifier", e[e.ExportDoesNotSupportDefaultModifier = -113] = "ExportDoesNotSupportDefaultModifier", e[e.Classifiable = 2885600] = "Classifiable", e[e.LateBindingContainer = 6256] = "LateBindingContainer", e))(I1 || {}), L1 = ((e) => (e[e.None = 0] = "None", e[e.TypeChecked = 1] = "TypeChecked", e[e.LexicalThis = 2] = "LexicalThis", e[e.CaptureThis = 4] = "CaptureThis", e[e.CaptureNewTarget = 8] = "CaptureNewTarget", e[e.SuperInstance = 16] = "SuperInstance", e[e.SuperStatic = 32] = "SuperStatic", e[e.ContextChecked = 64] = "ContextChecked", e[e.MethodWithSuperPropertyAccessInAsync = 128] = "MethodWithSuperPropertyAccessInAsync", e[e.MethodWithSuperPropertyAssignmentInAsync = 256] = "MethodWithSuperPropertyAssignmentInAsync", e[e.CaptureArguments = 512] = "CaptureArguments", e[e.EnumValuesComputed = 1024] = "EnumValuesComputed", e[e.LexicalModuleMergesWithClass = 2048] = "LexicalModuleMergesWithClass", e[e.LoopWithCapturedBlockScopedBinding = 4096] = "LoopWithCapturedBlockScopedBinding", e[e.ContainsCapturedBlockScopeBinding = 8192] = "ContainsCapturedBlockScopeBinding", e[e.CapturedBlockScopedBinding = 16384] = "CapturedBlockScopedBinding", e[e.BlockScopedBindingInLoop = 32768] = "BlockScopedBindingInLoop", e[e.NeedsLoopOutParameter = 65536] = "NeedsLoopOutParameter", e[e.AssignmentsMarked = 131072] = "AssignmentsMarked", e[e.ContainsConstructorReference = 262144] = "ContainsConstructorReference", e[e.ConstructorReference = 536870912] = "ConstructorReference", e[e.ContainsClassWithPrivateIdentifiers = 1048576] = "ContainsClassWithPrivateIdentifiers", e[e.ContainsSuperPropertyInStaticInitializer = 2097152] = "ContainsSuperPropertyInStaticInitializer", e[e.InCheckIdentifier = 4194304] = "InCheckIdentifier", e[e.PartiallyTypeChecked = 8388608] = "PartiallyTypeChecked", e[e.LazyFlags = 539358128] = "LazyFlags", e))(L1 || {}), er = ((e) => (e[e.Any = 1] = "Any", e[e.Unknown = 2] = "Unknown", e[e.String = 4] = "String", e[e.Number = 8] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Enum = 32] = "Enum", e[e.BigInt = 64] = "BigInt", e[e.StringLiteral = 128] = "StringLiteral", e[e.NumberLiteral = 256] = "NumberLiteral", e[e.BooleanLiteral = 512] = "BooleanLiteral", e[e.EnumLiteral = 1024] = "EnumLiteral", e[e.BigIntLiteral = 2048] = "BigIntLiteral", e[e.ESSymbol = 4096] = "ESSymbol", e[e.UniqueESSymbol = 8192] = "UniqueESSymbol", e[e.Void = 16384] = "Void", e[e.Undefined = 32768] = "Undefined", e[e.Null = 65536] = "Null", e[e.Never = 131072] = "Never", e[e.TypeParameter = 262144] = "TypeParameter", e[e.Object = 524288] = "Object", e[e.Union = 1048576] = "Union", e[e.Intersection = 2097152] = "Intersection", e[e.Index = 4194304] = "Index", e[e.IndexedAccess = 8388608] = "IndexedAccess", e[e.Conditional = 16777216] = "Conditional", e[e.Substitution = 33554432] = "Substitution", e[e.NonPrimitive = 67108864] = "NonPrimitive", e[e.TemplateLiteral = 134217728] = "TemplateLiteral", e[e.StringMapping = 268435456] = "StringMapping", e[e.Reserved1 = 536870912] = "Reserved1", e[e.Reserved2 = 1073741824] = "Reserved2", e[e.AnyOrUnknown = 3] = "AnyOrUnknown", e[e.Nullable = 98304] = "Nullable", e[e.Literal = 2944] = "Literal", e[e.Unit = 109472] = "Unit", e[e.Freshable = 2976] = "Freshable", e[e.StringOrNumberLiteral = 384] = "StringOrNumberLiteral", e[e.StringOrNumberLiteralOrUnique = 8576] = "StringOrNumberLiteralOrUnique", e[e.DefinitelyFalsy = 117632] = "DefinitelyFalsy", e[e.PossiblyFalsy = 117724] = "PossiblyFalsy", e[e.Intrinsic = 67359327] = "Intrinsic", e[e.StringLike = 402653316] = "StringLike", e[e.NumberLike = 296] = "NumberLike", e[e.BigIntLike = 2112] = "BigIntLike", e[e.BooleanLike = 528] = "BooleanLike", e[e.EnumLike = 1056] = "EnumLike", e[e.ESSymbolLike = 12288] = "ESSymbolLike", e[e.VoidLike = 49152] = "VoidLike", e[e.Primitive = 402784252] = "Primitive", e[e.DefinitelyNonNullable = 470302716] = "DefinitelyNonNullable", e[e.DisjointDomains = 469892092] = "DisjointDomains", e[e.UnionOrIntersection = 3145728] = "UnionOrIntersection", e[e.StructuredType = 3670016] = "StructuredType", e[e.TypeVariable = 8650752] = "TypeVariable", e[e.InstantiableNonPrimitive = 58982400] = "InstantiableNonPrimitive", e[e.InstantiablePrimitive = 406847488] = "InstantiablePrimitive", e[e.Instantiable = 465829888] = "Instantiable", e[e.StructuredOrInstantiable = 469499904] = "StructuredOrInstantiable", e[e.ObjectFlagsType = 3899393] = "ObjectFlagsType", e[e.Simplifiable = 25165824] = "Simplifiable", e[e.Singleton = 67358815] = "Singleton", e[e.Narrowable = 536624127] = "Narrowable", e[e.IncludesMask = 473694207] = "IncludesMask", e[e.IncludesMissingType = 262144] = "IncludesMissingType", e[e.IncludesNonWideningType = 4194304] = "IncludesNonWideningType", e[e.IncludesWildcard = 8388608] = "IncludesWildcard", e[e.IncludesEmptyObject = 16777216] = "IncludesEmptyObject", e[e.IncludesInstantiable = 33554432] = "IncludesInstantiable", e[e.IncludesConstrainedTypeVariable = 536870912] = "IncludesConstrainedTypeVariable", e[e.IncludesError = 1073741824] = "IncludesError", e[e.NotPrimitiveUnion = 36323331] = "NotPrimitiveUnion", e))(er || {}), O1 = ((e) => (e[e.None = 0] = "None", e[e.Class = 1] = "Class", e[e.Interface = 2] = "Interface", e[e.Reference = 4] = "Reference", e[e.Tuple = 8] = "Tuple", e[e.Anonymous = 16] = "Anonymous", e[e.Mapped = 32] = "Mapped", e[e.Instantiated = 64] = "Instantiated", e[e.ObjectLiteral = 128] = "ObjectLiteral", e[e.EvolvingArray = 256] = "EvolvingArray", e[e.ObjectLiteralPatternWithComputedProperties = 512] = "ObjectLiteralPatternWithComputedProperties", e[e.ReverseMapped = 1024] = "ReverseMapped", e[e.JsxAttributes = 2048] = "JsxAttributes", e[e.JSLiteral = 4096] = "JSLiteral", e[e.FreshLiteral = 8192] = "FreshLiteral", e[e.ArrayLiteral = 16384] = "ArrayLiteral", e[e.PrimitiveUnion = 32768] = "PrimitiveUnion", e[e.ContainsWideningType = 65536] = "ContainsWideningType", e[e.ContainsObjectOrArrayLiteral = 131072] = "ContainsObjectOrArrayLiteral", e[e.NonInferrableType = 262144] = "NonInferrableType", e[e.CouldContainTypeVariablesComputed = 524288] = "CouldContainTypeVariablesComputed", e[e.CouldContainTypeVariables = 1048576] = "CouldContainTypeVariables", e[e.ClassOrInterface = 3] = "ClassOrInterface", e[e.RequiresWidening = 196608] = "RequiresWidening", e[e.PropagatingFlags = 458752] = "PropagatingFlags", e[e.InstantiatedMapped = 96] = "InstantiatedMapped", e[e.ObjectTypeKindMask = 1343] = "ObjectTypeKindMask", e[e.ContainsSpread = 2097152] = "ContainsSpread", e[e.ObjectRestType = 4194304] = "ObjectRestType", e[e.InstantiationExpressionType = 8388608] = "InstantiationExpressionType", e[e.SingleSignatureType = 134217728] = "SingleSignatureType", e[e.IsClassInstanceClone = 16777216] = "IsClassInstanceClone", e[e.IdenticalBaseTypeCalculated = 33554432] = "IdenticalBaseTypeCalculated", e[e.IdenticalBaseTypeExists = 67108864] = "IdenticalBaseTypeExists", e[e.IsGenericTypeComputed = 2097152] = "IsGenericTypeComputed", e[e.IsGenericObjectType = 4194304] = "IsGenericObjectType", e[e.IsGenericIndexType = 8388608] = "IsGenericIndexType", e[e.IsGenericType = 12582912] = "IsGenericType", e[e.ContainsIntersections = 16777216] = "ContainsIntersections", e[e.IsUnknownLikeUnionComputed = 33554432] = "IsUnknownLikeUnionComputed", e[e.IsUnknownLikeUnion = 67108864] = "IsUnknownLikeUnion", e[e.IsNeverIntersectionComputed = 16777216] = "IsNeverIntersectionComputed", e[e.IsNeverIntersection = 33554432] = "IsNeverIntersection", e[e.IsConstrainedTypeVariable = 67108864] = "IsConstrainedTypeVariable", e))(O1 || {}), M1 = ((e) => (e[e.None = 0] = "None", e[e.HasRestParameter = 1] = "HasRestParameter", e[e.HasLiteralTypes = 2] = "HasLiteralTypes", e[e.Abstract = 4] = "Abstract", e[e.IsInnerCallChain = 8] = "IsInnerCallChain", e[e.IsOuterCallChain = 16] = "IsOuterCallChain", e[e.IsUntypedSignatureInJSFile = 32] = "IsUntypedSignatureInJSFile", e[e.IsNonInferrable = 64] = "IsNonInferrable", e[e.IsSignatureCandidateForOverloadFailure = 128] = "IsSignatureCandidateForOverloadFailure", e[e.PropagatingFlags = 167] = "PropagatingFlags", e[e.CallChainFlags = 24] = "CallChainFlags", e))(M1 || {}), On = ((e) => (e[e.Unknown = 0] = "Unknown", e[e.JS = 1] = "JS", e[e.JSX = 2] = "JSX", e[e.TS = 3] = "TS", e[e.TSX = 4] = "TSX", e[e.External = 5] = "External", e[e.JSON = 6] = "JSON", e[e.Deferred = 7] = "Deferred", e))(On || {}), wl = ((e) => (e[e.ES3 = 0] = "ES3", e[e.ES5 = 1] = "ES5", e[e.ES2015 = 2] = "ES2015", e[e.ES2016 = 3] = "ES2016", e[e.ES2017 = 4] = "ES2017", e[e.ES2018 = 5] = "ES2018", e[e.ES2019 = 6] = "ES2019", e[e.ES2020 = 7] = "ES2020", e[e.ES2021 = 8] = "ES2021", e[e.ES2022 = 9] = "ES2022", e[e.ES2023 = 10] = "ES2023", e[e.ES2024 = 11] = "ES2024", e[e.ESNext = 99] = "ESNext", e[e.JSON = 100] = "JSON", e[e.Latest = 99] = "Latest", e))(wl || {}), J1 = ((e) => (e[e.Standard = 0] = "Standard", e[e.JSX = 1] = "JSX", e))(J1 || {}), Kr = ((e) => (e.Ts = ".ts", e.Tsx = ".tsx", e.Dts = ".d.ts", e.Js = ".js", e.Jsx = ".jsx", e.Json = ".json", e.TsBuildInfo = ".tsbuildinfo", e.Mjs = ".mjs", e.Mts = ".mts", e.Dmts = ".d.mts", e.Cjs = ".cjs", e.Cts = ".cts", e.Dcts = ".d.cts", e))(Kr || {}), B1 = ((e) => (e[e.None = 0] = "None", e[e.ContainsTypeScript = 1] = "ContainsTypeScript", e[e.ContainsJsx = 2] = "ContainsJsx", e[e.ContainsESNext = 4] = "ContainsESNext", e[e.ContainsES2022 = 8] = "ContainsES2022", e[e.ContainsES2021 = 16] = "ContainsES2021", e[e.ContainsES2020 = 32] = "ContainsES2020", e[e.ContainsES2019 = 64] = "ContainsES2019", e[e.ContainsES2018 = 128] = "ContainsES2018", e[e.ContainsES2017 = 256] = "ContainsES2017", e[e.ContainsES2016 = 512] = "ContainsES2016", e[e.ContainsES2015 = 1024] = "ContainsES2015", e[e.ContainsGenerator = 2048] = "ContainsGenerator", e[e.ContainsDestructuringAssignment = 4096] = "ContainsDestructuringAssignment", e[e.ContainsTypeScriptClassSyntax = 8192] = "ContainsTypeScriptClassSyntax", e[e.ContainsLexicalThis = 16384] = "ContainsLexicalThis", e[e.ContainsRestOrSpread = 32768] = "ContainsRestOrSpread", e[e.ContainsObjectRestOrSpread = 65536] = "ContainsObjectRestOrSpread", e[e.ContainsComputedPropertyName = 131072] = "ContainsComputedPropertyName", e[e.ContainsBlockScopedBinding = 262144] = "ContainsBlockScopedBinding", e[e.ContainsBindingPattern = 524288] = "ContainsBindingPattern", e[e.ContainsYield = 1048576] = "ContainsYield", e[e.ContainsAwait = 2097152] = "ContainsAwait", e[e.ContainsHoistedDeclarationOrCompletion = 4194304] = "ContainsHoistedDeclarationOrCompletion", e[e.ContainsDynamicImport = 8388608] = "ContainsDynamicImport", e[e.ContainsClassFields = 16777216] = "ContainsClassFields", e[e.ContainsDecorators = 33554432] = "ContainsDecorators", e[e.ContainsPossibleTopLevelAwait = 67108864] = "ContainsPossibleTopLevelAwait", e[e.ContainsLexicalSuper = 134217728] = "ContainsLexicalSuper", e[e.ContainsUpdateExpressionForIdentifier = 268435456] = "ContainsUpdateExpressionForIdentifier", e[e.ContainsPrivateIdentifierInExpression = 536870912] = "ContainsPrivateIdentifierInExpression", e[e.HasComputedFlags = -2147483648] = "HasComputedFlags", e[e.AssertTypeScript = 1] = "AssertTypeScript", e[e.AssertJsx = 2] = "AssertJsx", e[e.AssertESNext = 4] = "AssertESNext", e[e.AssertES2022 = 8] = "AssertES2022", e[e.AssertES2021 = 16] = "AssertES2021", e[e.AssertES2020 = 32] = "AssertES2020", e[e.AssertES2019 = 64] = "AssertES2019", e[e.AssertES2018 = 128] = "AssertES2018", e[e.AssertES2017 = 256] = "AssertES2017", e[e.AssertES2016 = 512] = "AssertES2016", e[e.AssertES2015 = 1024] = "AssertES2015", e[e.AssertGenerator = 2048] = "AssertGenerator", e[e.AssertDestructuringAssignment = 4096] = "AssertDestructuringAssignment", e[e.OuterExpressionExcludes = -2147483648] = "OuterExpressionExcludes", e[e.PropertyAccessExcludes = -2147483648] = "PropertyAccessExcludes", e[e.NodeExcludes = -2147483648] = "NodeExcludes", e[e.ArrowFunctionExcludes = -2072174592] = "ArrowFunctionExcludes", e[e.FunctionExcludes = -1937940480] = "FunctionExcludes", e[e.ConstructorExcludes = -1937948672] = "ConstructorExcludes", e[e.MethodOrAccessorExcludes = -2005057536] = "MethodOrAccessorExcludes", e[e.PropertyExcludes = -2013249536] = "PropertyExcludes", e[e.ClassExcludes = -2147344384] = "ClassExcludes", e[e.ModuleExcludes = -1941676032] = "ModuleExcludes", e[e.TypeExcludes = -2] = "TypeExcludes", e[e.ObjectLiteralExcludes = -2147278848] = "ObjectLiteralExcludes", e[e.ArrayLiteralOrCallOrNewExcludes = -2147450880] = "ArrayLiteralOrCallOrNewExcludes", e[e.VariableDeclarationListExcludes = -2146893824] = "VariableDeclarationListExcludes", e[e.ParameterExcludes = -2147483648] = "ParameterExcludes", e[e.CatchClauseExcludes = -2147418112] = "CatchClauseExcludes", e[e.BindingPatternExcludes = -2147450880] = "BindingPatternExcludes", e[e.ContainsLexicalThisOrSuper = 134234112] = "ContainsLexicalThisOrSuper", e[e.PropertyNamePropagatingFlags = 134234112] = "PropertyNamePropagatingFlags", e))(B1 || {}), K1 = ((e) => (e[e.TabStop = 0] = "TabStop", e[e.Placeholder = 1] = "Placeholder", e[e.Choice = 2] = "Choice", e[e.Variable = 3] = "Variable", e))(K1 || {}), U1 = ((e) => (e[e.None = 0] = "None", e[e.SingleLine = 1] = "SingleLine", e[e.MultiLine = 2] = "MultiLine", e[e.AdviseOnEmitNode = 4] = "AdviseOnEmitNode", e[e.NoSubstitution = 8] = "NoSubstitution", e[e.CapturesThis = 16] = "CapturesThis", e[e.NoLeadingSourceMap = 32] = "NoLeadingSourceMap", e[e.NoTrailingSourceMap = 64] = "NoTrailingSourceMap", e[e.NoSourceMap = 96] = "NoSourceMap", e[e.NoNestedSourceMaps = 128] = "NoNestedSourceMaps", e[e.NoTokenLeadingSourceMaps = 256] = "NoTokenLeadingSourceMaps", e[e.NoTokenTrailingSourceMaps = 512] = "NoTokenTrailingSourceMaps", e[e.NoTokenSourceMaps = 768] = "NoTokenSourceMaps", e[e.NoLeadingComments = 1024] = "NoLeadingComments", e[e.NoTrailingComments = 2048] = "NoTrailingComments", e[e.NoComments = 3072] = "NoComments", e[e.NoNestedComments = 4096] = "NoNestedComments", e[e.HelperName = 8192] = "HelperName", e[e.ExportName = 16384] = "ExportName", e[e.LocalName = 32768] = "LocalName", e[e.InternalName = 65536] = "InternalName", e[e.Indented = 131072] = "Indented", e[e.NoIndentation = 262144] = "NoIndentation", e[e.AsyncFunctionBody = 524288] = "AsyncFunctionBody", e[e.ReuseTempVariableScope = 1048576] = "ReuseTempVariableScope", e[e.CustomPrologue = 2097152] = "CustomPrologue", e[e.NoHoisting = 4194304] = "NoHoisting", e[e.Iterator = 8388608] = "Iterator", e[e.NoAsciiEscaping = 16777216] = "NoAsciiEscaping", e))(U1 || {}), Vi = { RegularExpressionFlagsUnicode: 2, RegularExpressionFlagsSticky: 2, RegularExpressionFlagsDotAll: 5, RegularExpressionFlagsHasIndices: 9, RegularExpressionFlagsUnicodeSets: 11 }, j1 = { reference: { args: [{ name: "types", optional: !0, captureSpan: !0 }, { name: "lib", optional: !0, captureSpan: !0 }, { name: "path", optional: !0, captureSpan: !0 }, { name: "no-default-lib", optional: !0 }, { name: "resolution-mode", optional: !0 }, { name: "preserve", optional: !0 }], kind: 1 }, "amd-dependency": { args: [{ name: "path" }, { name: "name", optional: !0 }], kind: 1 }, "amd-module": { args: [{ name: "name" }], kind: 1 }, "ts-check": { kind: 2 }, "ts-nocheck": { kind: 2 }, jsx: { args: [{ name: "factory" }], kind: 4 }, jsxfrag: { args: [{ name: "factory" }], kind: 4 }, jsximportsource: { args: [{ name: "factory" }], kind: 4 }, jsxruntime: { args: [{ name: "factory" }], kind: 4 } }, Hi = ((e) => (e[e.ParseAll = 0] = "ParseAll", e[e.ParseNone = 1] = "ParseNone", e[e.ParseForTypeErrors = 2] = "ParseForTypeErrors", e[e.ParseForTypeInfo = 3] = "ParseForTypeInfo", e))(Hi || {}), Mn = "/", w0 = "\\", q1 = "://", A0 = /\\/g;
    function N0(e) {
      return e === 47 || e === 92;
    }
    function D0(e, r) {
      return e.length > r.length && v0(e, r);
    }
    function Al(e) {
      return e.length > 0 && N0(e.charCodeAt(e.length - 1));
    }
    function R1(e) {
      return e >= 97 && e <= 122 || e >= 65 && e <= 90;
    }
    function P0(e, r) {
      let i = e.charCodeAt(r);
      if (i === 58) return r + 1;
      if (i === 37 && e.charCodeAt(r + 1) === 51) {
        let u = e.charCodeAt(r + 2);
        if (u === 97 || u === 65) return r + 3;
      }
      return -1;
    }
    function F0(e) {
      if (!e) return 0;
      let r = e.charCodeAt(0);
      if (r === 47 || r === 92) {
        if (e.charCodeAt(1) !== r) return 1;
        let u = e.indexOf(r === 47 ? Mn : w0, 2);
        return u < 0 ? e.length : u + 1;
      }
      if (R1(r) && e.charCodeAt(1) === 58) {
        let u = e.charCodeAt(2);
        if (u === 47 || u === 92) return 3;
        if (e.length === 2) return 2;
      }
      let i = e.indexOf(q1);
      if (i !== -1) {
        let u = i + q1.length, h = e.indexOf(Mn, u);
        if (h !== -1) {
          let T = e.slice(0, i), w = e.slice(u, h);
          if (T === "file" && (w === "" || w === "localhost") && R1(e.charCodeAt(h + 1))) {
            let N = P0(e, h + 2);
            if (N !== -1) {
              if (e.charCodeAt(N) === 47) return ~(N + 1);
              if (N === e.length) return ~N;
            }
          }
          return ~(h + 1);
        }
        return ~e.length;
      }
      return 0;
    }
    function Nl(e) {
      let r = F0(e);
      return r < 0 ? ~r : r;
    }
    function z1(e, r, i) {
      if (e = Dl(e), Nl(e) === e.length) return "";
      e = ko(e);
      let u = e.slice(Math.max(Nl(e), e.lastIndexOf(Mn) + 1)), h;
      return h ? u.slice(0, u.length - h.length) : u;
    }
    function $1(e, r, i) {
      if (To(r, ".") || (r = "." + r), e.length >= r.length && e.charCodeAt(e.length - r.length) === 46) {
        let u = e.slice(e.length - r.length);
        if (i(u, r)) return u;
      }
    }
    function I0(e, r, i) {
      if (typeof r == "string") return $1(e, r, i) || "";
      for (let u of r) {
        let h = $1(e, u, i);
        if (h) return h;
      }
      return "";
    }
    function L0(e, r, i) {
      if (r) return I0(ko(e), r, T0);
      let u = z1(e), h = u.lastIndexOf(".");
      return h >= 0 ? u.substring(h) : "";
    }
    function Dl(e) {
      return e.includes("\\") ? e.replace(A0, Mn) : e;
    }
    function O0(e, r) {
      let i = Nl(e);
      e = Dl(e);
      let u = G1(e);
      if (u !== void 0) return u.length > i ? ko(u) : u;
      let h = e.length, T = e.substring(0, i), w, N = i, o = N, $ = N, d = i !== 0;
      for (; N < h; ) {
        o = N;
        let S = e.charCodeAt(N);
        for (; S === 47 && N + 1 < h; ) N++, S = e.charCodeAt(N);
        N > o && (w ?? (w = e.substring(0, o - 1)), o = N);
        let _ = e.indexOf(Mn, N + 1);
        _ === -1 && (_ = h);
        let v = _ - o;
        if (v === 1 && e.charCodeAt(N) === 46) w ?? (w = e.substring(0, $));
        else if (v === 2 && e.charCodeAt(N) === 46 && e.charCodeAt(N + 1) === 46) if (!d) w !== void 0 ? w += w.length === i ? ".." : "/.." : $ = N + 2;
        else if (w === void 0) $ - 2 >= 0 ? w = e.substring(0, Math.max(i, e.lastIndexOf(Mn, $ - 2))) : w = e.substring(0, $);
        else {
          let F = w.lastIndexOf(Mn);
          F !== -1 ? w = w.substring(0, Math.max(i, F)) : w = T, w.length === i && (d = i !== 0);
        }
        else w !== void 0 ? (w.length !== i && (w += Mn), d = !0, w += e.substring(o, _)) : (d = !0, $ = _);
        N = _ + 1;
      }
      return w ?? (h > i ? ko(e) : e);
    }
    function M0(e) {
      e = Dl(e);
      let r = G1(e);
      return r !== void 0 ? r : (r = O0(e), r && Al(e) ? J0(r) : r);
    }
    function G1(e) {
      if (!W1.test(e)) return e;
      let r = e.replace(/\/\.\//g, "/");
      if (r.startsWith("./") && (r = r.slice(2)), r !== e && (e = r, !W1.test(e))) return e;
    }
    function ko(e) {
      return Al(e) ? e.substr(0, e.length - 1) : e;
    }
    function J0(e) {
      return Al(e) ? e : e + Mn;
    }
    var W1 = /\/\/|(?:^|\/)\.\.?(?:$|\/)/;
    function G(e, r, i, u, h, T, w) {
      return { code: e, category: r, key: i, message: u, reportsUnnecessary: h, elidedInCompatabilityPyramid: T, reportsDeprecated: w };
    }
    var C = { Unterminated_string_literal: G(1002, 1, "Unterminated_string_literal_1002", "Unterminated string literal."), Identifier_expected: G(1003, 1, "Identifier_expected_1003", "Identifier expected."), _0_expected: G(1005, 1, "_0_expected_1005", "'{0}' expected."), The_parser_expected_to_find_a_1_to_match_the_0_token_here: G(1007, 1, "The_parser_expected_to_find_a_1_to_match_the_0_token_here_1007", "The parser expected to find a '{1}' to match the '{0}' token here."), Asterisk_Slash_expected: G(1010, 1, "Asterisk_Slash_expected_1010", "'*/' expected."), An_element_access_expression_should_take_an_argument: G(1011, 1, "An_element_access_expression_should_take_an_argument_1011", "An element access expression should take an argument."), Unexpected_token: G(1012, 1, "Unexpected_token_1012", "Unexpected token."), super_must_be_followed_by_an_argument_list_or_member_access: G(1034, 1, "super_must_be_followed_by_an_argument_list_or_member_access_1034", "'super' must be followed by an argument list or member access."), Unexpected_token_A_constructor_method_accessor_or_property_was_expected: G(1068, 1, "Unexpected_token_A_constructor_method_accessor_or_property_was_expected_1068", "Unexpected token. A constructor, method, accessor, or property was expected."), Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces: G(1069, 1, "Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces_1069", "Unexpected token. A type parameter name was expected without curly braces."), Invalid_reference_directive_syntax: G(1084, 1, "Invalid_reference_directive_syntax_1084", "Invalid 'reference' directive syntax."), Expression_expected: G(1109, 1, "Expression_expected_1109", "Expression expected."), Type_expected: G(1110, 1, "Type_expected_1110", "Type expected."), Octal_literals_are_not_allowed_Use_the_syntax_0: G(1121, 1, "Octal_literals_are_not_allowed_Use_the_syntax_0_1121", "Octal literals are not allowed. Use the syntax '{0}'."), Digit_expected: G(1124, 1, "Digit_expected_1124", "Digit expected."), Hexadecimal_digit_expected: G(1125, 1, "Hexadecimal_digit_expected_1125", "Hexadecimal digit expected."), Unexpected_end_of_text: G(1126, 1, "Unexpected_end_of_text_1126", "Unexpected end of text."), Invalid_character: G(1127, 1, "Invalid_character_1127", "Invalid character."), Declaration_or_statement_expected: G(1128, 1, "Declaration_or_statement_expected_1128", "Declaration or statement expected."), Statement_expected: G(1129, 1, "Statement_expected_1129", "Statement expected."), case_or_default_expected: G(1130, 1, "case_or_default_expected_1130", "'case' or 'default' expected."), Property_or_signature_expected: G(1131, 1, "Property_or_signature_expected_1131", "Property or signature expected."), Enum_member_expected: G(1132, 1, "Enum_member_expected_1132", "Enum member expected."), Variable_declaration_expected: G(1134, 1, "Variable_declaration_expected_1134", "Variable declaration expected."), Argument_expression_expected: G(1135, 1, "Argument_expression_expected_1135", "Argument expression expected."), Property_assignment_expected: G(1136, 1, "Property_assignment_expected_1136", "Property assignment expected."), Expression_or_comma_expected: G(1137, 1, "Expression_or_comma_expected_1137", "Expression or comma expected."), Parameter_declaration_expected: G(1138, 1, "Parameter_declaration_expected_1138", "Parameter declaration expected."), Type_parameter_declaration_expected: G(1139, 1, "Type_parameter_declaration_expected_1139", "Type parameter declaration expected."), Type_argument_expected: G(1140, 1, "Type_argument_expected_1140", "Type argument expected."), Line_break_not_permitted_here: G(1142, 1, "Line_break_not_permitted_here_1142", "Line break not permitted here."), or_expected: G(1144, 1, "or_expected_1144", "'{' or ';' expected."), or_JSX_element_expected: G(1145, 1, "or_JSX_element_expected_1145", "'{' or JSX element expected."), Declaration_expected: G(1146, 1, "Declaration_expected_1146", "Declaration expected."), Unterminated_template_literal: G(1160, 1, "Unterminated_template_literal_1160", "Unterminated template literal."), Unterminated_regular_expression_literal: G(1161, 1, "Unterminated_regular_expression_literal_1161", "Unterminated regular expression literal."), Binary_digit_expected: G(1177, 1, "Binary_digit_expected_1177", "Binary digit expected."), Octal_digit_expected: G(1178, 1, "Octal_digit_expected_1178", "Octal digit expected."), Unexpected_token_expected: G(1179, 1, "Unexpected_token_expected_1179", "Unexpected token. '{' expected."), Property_destructuring_pattern_expected: G(1180, 1, "Property_destructuring_pattern_expected_1180", "Property destructuring pattern expected."), Array_element_destructuring_pattern_expected: G(1181, 1, "Array_element_destructuring_pattern_expected_1181", "Array element destructuring pattern expected."), Merge_conflict_marker_encountered: G(1185, 1, "Merge_conflict_marker_encountered_1185", "Merge conflict marker encountered."), An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: G(1198, 1, "An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive_1198", "An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive."), Unterminated_Unicode_escape_sequence: G(1199, 1, "Unterminated_Unicode_escape_sequence_1199", "Unterminated Unicode escape sequence."), Invalid_optional_chain_from_new_expression_Did_you_mean_to_call_0: G(1209, 1, "Invalid_optional_chain_from_new_expression_Did_you_mean_to_call_0_1209", "Invalid optional chain from new expression. Did you mean to call '{0}()'?"), _0_tag_already_specified: G(1223, 1, "_0_tag_already_specified_1223", "'{0}' tag already specified."), A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods: G(1228, 1, "A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods_1228", "A type predicate is only allowed in return type position for functions and methods."), Keywords_cannot_contain_escape_characters: G(1260, 1, "Keywords_cannot_contain_escape_characters_1260", "Keywords cannot contain escape characters."), An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal: G(1351, 1, "An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal_1351", "An identifier or keyword cannot immediately follow a numeric literal."), A_bigint_literal_cannot_use_exponential_notation: G(1352, 1, "A_bigint_literal_cannot_use_exponential_notation_1352", "A bigint literal cannot use exponential notation."), A_bigint_literal_must_be_an_integer: G(1353, 1, "A_bigint_literal_must_be_an_integer_1353", "A bigint literal must be an integer."), An_enum_member_name_must_be_followed_by_a_or: G(1357, 1, "An_enum_member_name_must_be_followed_by_a_or_1357", "An enum member name must be followed by a ',', '=', or '}'."), Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here: G(1359, 1, "Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here_1359", "Identifier expected. '{0}' is a reserved word that cannot be used here."), Did_you_mean_0: G(1369, 3, "Did_you_mean_0_1369", "Did you mean '{0}'?"), Unexpected_token_Did_you_mean_or_rbrace: G(1381, 1, "Unexpected_token_Did_you_mean_or_rbrace_1381", "Unexpected token. Did you mean `{'}'}` or `&rbrace;`?"), Unexpected_token_Did_you_mean_or_gt: G(1382, 1, "Unexpected_token_Did_you_mean_or_gt_1382", "Unexpected token. Did you mean `{'>'}` or `&gt;`?"), Function_type_notation_must_be_parenthesized_when_used_in_a_union_type: G(1385, 1, "Function_type_notation_must_be_parenthesized_when_used_in_a_union_type_1385", "Function type notation must be parenthesized when used in a union type."), Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type: G(1386, 1, "Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type_1386", "Constructor type notation must be parenthesized when used in a union type."), Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type: G(1387, 1, "Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type_1387", "Function type notation must be parenthesized when used in an intersection type."), Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type: G(1388, 1, "Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type_1388", "Constructor type notation must be parenthesized when used in an intersection type."), _0_is_not_allowed_as_a_variable_declaration_name: G(1389, 1, "_0_is_not_allowed_as_a_variable_declaration_name_1389", "'{0}' is not allowed as a variable declaration name."), _0_is_not_allowed_as_a_parameter_name: G(1390, 1, "_0_is_not_allowed_as_a_parameter_name_1390", "'{0}' is not allowed as a parameter name."), Neither_decorators_nor_modifiers_may_be_applied_to_this_parameters: G(1433, 1, "Neither_decorators_nor_modifiers_may_be_applied_to_this_parameters_1433", "Neither decorators nor modifiers may be applied to 'this' parameters."), Unexpected_keyword_or_identifier: G(1434, 1, "Unexpected_keyword_or_identifier_1434", "Unexpected keyword or identifier."), Unknown_keyword_or_identifier_Did_you_mean_0: G(1435, 1, "Unknown_keyword_or_identifier_Did_you_mean_0_1435", "Unknown keyword or identifier. Did you mean '{0}'?"), Decorators_must_precede_the_name_and_all_keywords_of_property_declarations: G(1436, 1, "Decorators_must_precede_the_name_and_all_keywords_of_property_declarations_1436", "Decorators must precede the name and all keywords of property declarations."), Namespace_must_be_given_a_name: G(1437, 1, "Namespace_must_be_given_a_name_1437", "Namespace must be given a name."), Interface_must_be_given_a_name: G(1438, 1, "Interface_must_be_given_a_name_1438", "Interface must be given a name."), Type_alias_must_be_given_a_name: G(1439, 1, "Type_alias_must_be_given_a_name_1439", "Type alias must be given a name."), Variable_declaration_not_allowed_at_this_location: G(1440, 1, "Variable_declaration_not_allowed_at_this_location_1440", "Variable declaration not allowed at this location."), Cannot_start_a_function_call_in_a_type_annotation: G(1441, 1, "Cannot_start_a_function_call_in_a_type_annotation_1441", "Cannot start a function call in a type annotation."), Expected_for_property_initializer: G(1442, 1, "Expected_for_property_initializer_1442", "Expected '=' for property initializer."), Module_declaration_names_may_only_use_or_quoted_strings: G(1443, 1, "Module_declaration_names_may_only_use_or_quoted_strings_1443", `Module declaration names may only use ' or " quoted strings.`), resolution_mode_should_be_either_require_or_import: G(1453, 1, "resolution_mode_should_be_either_require_or_import_1453", "`resolution-mode` should be either `require` or `import`."), catch_or_finally_expected: G(1472, 1, "catch_or_finally_expected_1472", "'catch' or 'finally' expected."), An_instantiation_expression_cannot_be_followed_by_a_property_access: G(1477, 1, "An_instantiation_expression_cannot_be_followed_by_a_property_access_1477", "An instantiation expression cannot be followed by a property access."), Identifier_or_string_literal_expected: G(1478, 1, "Identifier_or_string_literal_expected_1478", "Identifier or string literal expected."), Octal_escape_sequences_are_not_allowed_Use_the_syntax_0: G(1487, 1, "Octal_escape_sequences_are_not_allowed_Use_the_syntax_0_1487", "Octal escape sequences are not allowed. Use the syntax '{0}'."), Escape_sequence_0_is_not_allowed: G(1488, 1, "Escape_sequence_0_is_not_allowed_1488", "Escape sequence '{0}' is not allowed."), Decimals_with_leading_zeros_are_not_allowed: G(1489, 1, "Decimals_with_leading_zeros_are_not_allowed_1489", "Decimals with leading zeros are not allowed."), File_appears_to_be_binary: G(1490, 1, "File_appears_to_be_binary_1490", "File appears to be binary."), Unknown_regular_expression_flag: G(1499, 1, "Unknown_regular_expression_flag_1499", "Unknown regular expression flag."), Duplicate_regular_expression_flag: G(1500, 1, "Duplicate_regular_expression_flag_1500", "Duplicate regular expression flag."), This_regular_expression_flag_is_only_available_when_targeting_0_or_later: G(1501, 1, "This_regular_expression_flag_is_only_available_when_targeting_0_or_later_1501", "This regular expression flag is only available when targeting '{0}' or later."), The_Unicode_u_flag_and_the_Unicode_Sets_v_flag_cannot_be_set_simultaneously: G(1502, 1, "The_Unicode_u_flag_and_the_Unicode_Sets_v_flag_cannot_be_set_simultaneously_1502", "The Unicode (u) flag and the Unicode Sets (v) flag cannot be set simultaneously."), Named_capturing_groups_are_only_available_when_targeting_ES2018_or_later: G(1503, 1, "Named_capturing_groups_are_only_available_when_targeting_ES2018_or_later_1503", "Named capturing groups are only available when targeting 'ES2018' or later."), Subpattern_flags_must_be_present_when_there_is_a_minus_sign: G(1504, 1, "Subpattern_flags_must_be_present_when_there_is_a_minus_sign_1504", "Subpattern flags must be present when there is a minus sign."), Incomplete_quantifier_Digit_expected: G(1505, 1, "Incomplete_quantifier_Digit_expected_1505", "Incomplete quantifier. Digit expected."), Numbers_out_of_order_in_quantifier: G(1506, 1, "Numbers_out_of_order_in_quantifier_1506", "Numbers out of order in quantifier."), There_is_nothing_available_for_repetition: G(1507, 1, "There_is_nothing_available_for_repetition_1507", "There is nothing available for repetition."), Unexpected_0_Did_you_mean_to_escape_it_with_backslash: G(1508, 1, "Unexpected_0_Did_you_mean_to_escape_it_with_backslash_1508", "Unexpected '{0}'. Did you mean to escape it with backslash?"), This_regular_expression_flag_cannot_be_toggled_within_a_subpattern: G(1509, 1, "This_regular_expression_flag_cannot_be_toggled_within_a_subpattern_1509", "This regular expression flag cannot be toggled within a subpattern."), k_must_be_followed_by_a_capturing_group_name_enclosed_in_angle_brackets: G(1510, 1, "k_must_be_followed_by_a_capturing_group_name_enclosed_in_angle_brackets_1510", "'\\k' must be followed by a capturing group name enclosed in angle brackets."), q_is_only_available_inside_character_class: G(1511, 1, "q_is_only_available_inside_character_class_1511", "'\\q' is only available inside character class."), c_must_be_followed_by_an_ASCII_letter: G(1512, 1, "c_must_be_followed_by_an_ASCII_letter_1512", "'\\c' must be followed by an ASCII letter."), Undetermined_character_escape: G(1513, 1, "Undetermined_character_escape_1513", "Undetermined character escape."), Expected_a_capturing_group_name: G(1514, 1, "Expected_a_capturing_group_name_1514", "Expected a capturing group name."), Named_capturing_groups_with_the_same_name_must_be_mutually_exclusive_to_each_other: G(1515, 1, "Named_capturing_groups_with_the_same_name_must_be_mutually_exclusive_to_each_other_1515", "Named capturing groups with the same name must be mutually exclusive to each other."), A_character_class_range_must_not_be_bounded_by_another_character_class: G(1516, 1, "A_character_class_range_must_not_be_bounded_by_another_character_class_1516", "A character class range must not be bounded by another character class."), Range_out_of_order_in_character_class: G(1517, 1, "Range_out_of_order_in_character_class_1517", "Range out of order in character class."), Anything_that_would_possibly_match_more_than_a_single_character_is_invalid_inside_a_negated_character_class: G(1518, 1, "Anything_that_would_possibly_match_more_than_a_single_character_is_invalid_inside_a_negated_characte_1518", "Anything that would possibly match more than a single character is invalid inside a negated character class."), Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead: G(1519, 1, "Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead_1519", "Operators must not be mixed within a character class. Wrap it in a nested class instead."), Expected_a_class_set_operand: G(1520, 1, "Expected_a_class_set_operand_1520", "Expected a class set operand."), q_must_be_followed_by_string_alternatives_enclosed_in_braces: G(1521, 1, "q_must_be_followed_by_string_alternatives_enclosed_in_braces_1521", "'\\q' must be followed by string alternatives enclosed in braces."), A_character_class_must_not_contain_a_reserved_double_punctuator_Did_you_mean_to_escape_it_with_backslash: G(1522, 1, "A_character_class_must_not_contain_a_reserved_double_punctuator_Did_you_mean_to_escape_it_with_backs_1522", "A character class must not contain a reserved double punctuator. Did you mean to escape it with backslash?"), Expected_a_Unicode_property_name: G(1523, 1, "Expected_a_Unicode_property_name_1523", "Expected a Unicode property name."), Unknown_Unicode_property_name: G(1524, 1, "Unknown_Unicode_property_name_1524", "Unknown Unicode property name."), Expected_a_Unicode_property_value: G(1525, 1, "Expected_a_Unicode_property_value_1525", "Expected a Unicode property value."), Unknown_Unicode_property_value: G(1526, 1, "Unknown_Unicode_property_value_1526", "Unknown Unicode property value."), Expected_a_Unicode_property_name_or_value: G(1527, 1, "Expected_a_Unicode_property_name_or_value_1527", "Expected a Unicode property name or value."), Any_Unicode_property_that_would_possibly_match_more_than_a_single_character_is_only_available_when_the_Unicode_Sets_v_flag_is_set: G(1528, 1, "Any_Unicode_property_that_would_possibly_match_more_than_a_single_character_is_only_available_when_t_1528", "Any Unicode property that would possibly match more than a single character is only available when the Unicode Sets (v) flag is set."), Unknown_Unicode_property_name_or_value: G(1529, 1, "Unknown_Unicode_property_name_or_value_1529", "Unknown Unicode property name or value."), Unicode_property_value_expressions_are_only_available_when_the_Unicode_u_flag_or_the_Unicode_Sets_v_flag_is_set: G(1530, 1, "Unicode_property_value_expressions_are_only_available_when_the_Unicode_u_flag_or_the_Unicode_Sets_v__1530", "Unicode property value expressions are only available when the Unicode (u) flag or the Unicode Sets (v) flag is set."), _0_must_be_followed_by_a_Unicode_property_value_expression_enclosed_in_braces: G(1531, 1, "_0_must_be_followed_by_a_Unicode_property_value_expression_enclosed_in_braces_1531", "'\\{0}' must be followed by a Unicode property value expression enclosed in braces."), There_is_no_capturing_group_named_0_in_this_regular_expression: G(1532, 1, "There_is_no_capturing_group_named_0_in_this_regular_expression_1532", "There is no capturing group named '{0}' in this regular expression."), This_backreference_refers_to_a_group_that_does_not_exist_There_are_only_0_capturing_groups_in_this_regular_expression: G(1533, 1, "This_backreference_refers_to_a_group_that_does_not_exist_There_are_only_0_capturing_groups_in_this_r_1533", "This backreference refers to a group that does not exist. There are only {0} capturing groups in this regular expression."), This_backreference_refers_to_a_group_that_does_not_exist_There_are_no_capturing_groups_in_this_regular_expression: G(1534, 1, "This_backreference_refers_to_a_group_that_does_not_exist_There_are_no_capturing_groups_in_this_regul_1534", "This backreference refers to a group that does not exist. There are no capturing groups in this regular expression."), This_character_cannot_be_escaped_in_a_regular_expression: G(1535, 1, "This_character_cannot_be_escaped_in_a_regular_expression_1535", "This character cannot be escaped in a regular expression."), Octal_escape_sequences_and_backreferences_are_not_allowed_in_a_character_class_If_this_was_intended_as_an_escape_sequence_use_the_syntax_0_instead: G(1536, 1, "Octal_escape_sequences_and_backreferences_are_not_allowed_in_a_character_class_If_this_was_intended__1536", "Octal escape sequences and backreferences are not allowed in a character class. If this was intended as an escape sequence, use the syntax '{0}' instead."), Decimal_escape_sequences_and_backreferences_are_not_allowed_in_a_character_class: G(1537, 1, "Decimal_escape_sequences_and_backreferences_are_not_allowed_in_a_character_class_1537", "Decimal escape sequences and backreferences are not allowed in a character class."), Unicode_escape_sequences_are_only_available_when_the_Unicode_u_flag_or_the_Unicode_Sets_v_flag_is_set: G(1538, 1, "Unicode_escape_sequences_are_only_available_when_the_Unicode_u_flag_or_the_Unicode_Sets_v_flag_is_se_1538", "Unicode escape sequences are only available when the Unicode (u) flag or the Unicode Sets (v) flag is set."), Interface_name_cannot_be_0: G(2427, 1, "Interface_name_cannot_be_0_2427", "Interface name cannot be '{0}'."), Type_alias_name_cannot_be_0: G(2457, 1, "Type_alias_name_cannot_be_0_2457", "Type alias name cannot be '{0}'."), An_AMD_module_cannot_have_multiple_name_assignments: G(2458, 1, "An_AMD_module_cannot_have_multiple_name_assignments_2458", "An AMD module cannot have multiple name assignments."), JSX_expressions_must_have_one_parent_element: G(2657, 1, "JSX_expressions_must_have_one_parent_element_2657", "JSX expressions must have one parent element."), super_may_not_use_type_arguments: G(2754, 1, "super_may_not_use_type_arguments_2754", "'super' may not use type arguments."), Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_whole_assignment_in_parentheses: G(2809, 1, "Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_d_2809", "Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the whole assignment in parentheses."), Namespace_name_cannot_be_0: G(2819, 1, "Namespace_name_cannot_be_0_2819", "Namespace name cannot be '{0}'."), Numeric_separators_are_not_allowed_here: G(6188, 1, "Numeric_separators_are_not_allowed_here_6188", "Numeric separators are not allowed here."), Multiple_consecutive_numeric_separators_are_not_permitted: G(6189, 1, "Multiple_consecutive_numeric_separators_are_not_permitted_6189", "Multiple consecutive numeric separators are not permitted."), A_JSDoc_typedef_comment_may_not_contain_multiple_type_tags: G(8033, 1, "A_JSDoc_typedef_comment_may_not_contain_multiple_type_tags_8033", "A JSDoc '@typedef' comment may not contain multiple '@type' tags."), The_tag_was_first_specified_here: G(8034, 1, "The_tag_was_first_specified_here_8034", "The tag was first specified here."), A_JSDoc_template_tag_may_not_follow_a_typedef_callback_or_overload_tag: G(8039, 1, "A_JSDoc_template_tag_may_not_follow_a_typedef_callback_or_overload_tag_8039", "A JSDoc '@template' tag may not follow a '@typedef', '@callback', or '@overload' tag"), Expected_corresponding_JSX_closing_tag_for_0: G(17002, 1, "Expected_corresponding_JSX_closing_tag_for_0_17002", "Expected corresponding JSX closing tag for '{0}'."), An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: G(17006, 1, "An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_ex_17006", "An unary expression with the '{0}' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."), A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: G(17007, 1, "A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Con_17007", "A type assertion expression is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."), JSX_element_0_has_no_corresponding_closing_tag: G(17008, 1, "JSX_element_0_has_no_corresponding_closing_tag_17008", "JSX element '{0}' has no corresponding closing tag."), JSX_fragment_has_no_corresponding_closing_tag: G(17014, 1, "JSX_fragment_has_no_corresponding_closing_tag_17014", "JSX fragment has no corresponding closing tag."), Expected_corresponding_closing_tag_for_JSX_fragment: G(17015, 1, "Expected_corresponding_closing_tag_for_JSX_fragment_17015", "Expected corresponding closing tag for JSX fragment."), Unicode_escape_sequence_cannot_appear_here: G(17021, 1, "Unicode_escape_sequence_cannot_appear_here_17021", "Unicode escape sequence cannot appear here."), Private_identifiers_cannot_be_used_as_parameters: G(18009, 1, "Private_identifiers_cannot_be_used_as_parameters_18009", "Private identifiers cannot be used as parameters."), Private_identifiers_are_not_allowed_outside_class_bodies: G(18016, 1, "Private_identifiers_are_not_allowed_outside_class_bodies_18016", "Private identifiers are not allowed outside class bodies."), can_only_be_used_at_the_start_of_a_file: G(18026, 1, "can_only_be_used_at_the_start_of_a_file_18026", "'#!' can only be used at the start of a file."), Private_identifiers_are_not_allowed_in_variable_declarations: G(18029, 1, "Private_identifiers_are_not_allowed_in_variable_declarations_18029", "Private identifiers are not allowed in variable declarations."), An_optional_chain_cannot_contain_private_identifiers: G(18030, 1, "An_optional_chain_cannot_contain_private_identifiers_18030", "An optional chain cannot contain private identifiers.") };
    function Tt(e) {
      return e >= 80;
    }
    function B0(e) {
      return e === 32 || Tt(e);
    }
    var Pl = { abstract: 128, accessor: 129, any: 133, as: 130, asserts: 131, assert: 132, bigint: 163, boolean: 136, break: 83, case: 84, catch: 85, class: 86, continue: 88, const: 87, constructor: 137, debugger: 89, declare: 138, default: 90, delete: 91, do: 92, else: 93, enum: 94, export: 95, extends: 96, false: 97, finally: 98, for: 99, from: 161, function: 100, get: 139, if: 101, implements: 119, import: 102, in: 103, infer: 140, instanceof: 104, interface: 120, intrinsic: 141, is: 142, keyof: 143, let: 121, module: 144, namespace: 145, never: 146, new: 105, null: 106, number: 150, object: 151, package: 122, private: 123, protected: 124, public: 125, override: 164, out: 147, readonly: 148, require: 149, global: 162, return: 107, satisfies: 152, set: 153, static: 126, string: 154, super: 108, switch: 109, symbol: 155, this: 110, throw: 111, true: 112, try: 113, type: 156, typeof: 114, undefined: 157, unique: 158, unknown: 159, using: 160, var: 115, void: 116, while: 117, with: 118, yield: 127, async: 134, await: 135, of: 165 }, K0 = new Map(Object.entries(Pl)), V1 = new Map(Object.entries({ ...Pl, "{": 19, "}": 20, "(": 21, ")": 22, "[": 23, "]": 24, ".": 25, "...": 26, ";": 27, ",": 28, "<": 30, ">": 32, "<=": 33, ">=": 34, "==": 35, "!=": 36, "===": 37, "!==": 38, "=>": 39, "+": 40, "-": 41, "**": 43, "*": 42, "/": 44, "%": 45, "++": 46, "--": 47, "<<": 48, "</": 31, ">>": 49, ">>>": 50, "&": 51, "|": 52, "^": 53, "!": 54, "~": 55, "&&": 56, "||": 57, "?": 58, "??": 61, "?.": 29, ":": 59, "=": 64, "+=": 65, "-=": 66, "*=": 67, "**=": 68, "/=": 69, "%=": 70, "<<=": 71, ">>=": 72, ">>>=": 73, "&=": 74, "|=": 75, "^=": 79, "||=": 76, "&&=": 77, "??=": 78, "@": 60, "#": 63, "`": 62 })), H1 = /* @__PURE__ */ new Map([[100, 1], [103, 2], [105, 4], [109, 8], [115, 16], [117, 32], [118, 64], [121, 128]]), U0 = /* @__PURE__ */ new Map([[1, Vi.RegularExpressionFlagsHasIndices], [16, Vi.RegularExpressionFlagsDotAll], [32, Vi.RegularExpressionFlagsUnicode], [64, Vi.RegularExpressionFlagsUnicodeSets], [128, Vi.RegularExpressionFlagsSticky]]), j0 = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2208, 2208, 2210, 2220, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3807, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6e3, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7413, 7414, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43e3, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44002, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500], q0 = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 768, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1155, 1159, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1425, 1469, 1471, 1471, 1473, 1474, 1476, 1477, 1479, 1479, 1488, 1514, 1520, 1522, 1552, 1562, 1568, 1641, 1646, 1747, 1749, 1756, 1759, 1768, 1770, 1788, 1791, 1791, 1808, 1866, 1869, 1969, 1984, 2037, 2042, 2042, 2048, 2093, 2112, 2139, 2208, 2208, 2210, 2220, 2276, 2302, 2304, 2403, 2406, 2415, 2417, 2423, 2425, 2431, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2561, 2563, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2641, 2641, 2649, 2652, 2654, 2654, 2662, 2677, 2689, 2691, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2787, 2790, 2799, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2876, 2884, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2915, 2918, 2927, 2929, 2929, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3024, 3024, 3031, 3031, 3046, 3055, 3073, 3075, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3160, 3161, 3168, 3171, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3260, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3294, 3294, 3296, 3299, 3302, 3311, 3313, 3314, 3330, 3331, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3396, 3398, 3400, 3402, 3406, 3415, 3415, 3424, 3427, 3430, 3439, 3450, 3455, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789, 3792, 3801, 3804, 3807, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3948, 3953, 3972, 3974, 3991, 3993, 4028, 4038, 4038, 4096, 4169, 4176, 4253, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4957, 4959, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5908, 5920, 5940, 5952, 5971, 5984, 5996, 5998, 6e3, 6002, 6003, 6016, 6099, 6103, 6103, 6108, 6109, 6112, 6121, 6155, 6157, 6160, 6169, 6176, 6263, 6272, 6314, 6320, 6389, 6400, 6428, 6432, 6443, 6448, 6459, 6470, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6608, 6617, 6656, 6683, 6688, 6750, 6752, 6780, 6783, 6793, 6800, 6809, 6823, 6823, 6912, 6987, 6992, 7001, 7019, 7027, 7040, 7155, 7168, 7223, 7232, 7241, 7245, 7293, 7376, 7378, 7380, 7414, 7424, 7654, 7676, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8204, 8205, 8255, 8256, 8276, 8276, 8305, 8305, 8319, 8319, 8336, 8348, 8400, 8412, 8417, 8417, 8421, 8432, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11647, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11744, 11775, 11823, 11823, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12348, 12353, 12438, 12441, 12442, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42539, 42560, 42607, 42612, 42621, 42623, 42647, 42655, 42737, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43e3, 43047, 43072, 43123, 43136, 43204, 43216, 43225, 43232, 43255, 43259, 43259, 43264, 43309, 43312, 43347, 43360, 43388, 43392, 43456, 43471, 43481, 43520, 43574, 43584, 43597, 43600, 43609, 43616, 43638, 43642, 43643, 43648, 43714, 43739, 43741, 43744, 43759, 43762, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44010, 44012, 44013, 44016, 44025, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65024, 65039, 65056, 65062, 65075, 65076, 65101, 65103, 65136, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500], R0 = [65, 90, 97, 122, 170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 895, 895, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1327, 1329, 1366, 1369, 1369, 1376, 1416, 1488, 1514, 1519, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2144, 2154, 2160, 2183, 2185, 2190, 2208, 2249, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2432, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2556, 2556, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2809, 2809, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3129, 3133, 3133, 3160, 3162, 3165, 3165, 3168, 3169, 3200, 3200, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3293, 3294, 3296, 3297, 3313, 3314, 3332, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3412, 3414, 3423, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3718, 3722, 3724, 3747, 3749, 3749, 3751, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3807, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5109, 5112, 5117, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5880, 5888, 5905, 5919, 5937, 5952, 5969, 5984, 5996, 5998, 6e3, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6264, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6430, 6480, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6988, 7043, 7072, 7086, 7087, 7098, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7296, 7304, 7312, 7354, 7357, 7359, 7401, 7404, 7406, 7411, 7413, 7414, 7418, 7418, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8472, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11492, 11499, 11502, 11506, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12443, 12447, 12449, 12538, 12540, 12543, 12549, 12591, 12593, 12686, 12704, 12735, 12784, 12799, 13312, 19903, 19968, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42653, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42954, 42960, 42961, 42963, 42963, 42965, 42969, 42994, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43261, 43262, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43488, 43492, 43494, 43503, 43514, 43518, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43646, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43824, 43866, 43868, 43881, 43888, 44002, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65536, 65547, 65549, 65574, 65576, 65594, 65596, 65597, 65599, 65613, 65616, 65629, 65664, 65786, 65856, 65908, 66176, 66204, 66208, 66256, 66304, 66335, 66349, 66378, 66384, 66421, 66432, 66461, 66464, 66499, 66504, 66511, 66513, 66517, 66560, 66717, 66736, 66771, 66776, 66811, 66816, 66855, 66864, 66915, 66928, 66938, 66940, 66954, 66956, 66962, 66964, 66965, 66967, 66977, 66979, 66993, 66995, 67001, 67003, 67004, 67072, 67382, 67392, 67413, 67424, 67431, 67456, 67461, 67463, 67504, 67506, 67514, 67584, 67589, 67592, 67592, 67594, 67637, 67639, 67640, 67644, 67644, 67647, 67669, 67680, 67702, 67712, 67742, 67808, 67826, 67828, 67829, 67840, 67861, 67872, 67897, 67968, 68023, 68030, 68031, 68096, 68096, 68112, 68115, 68117, 68119, 68121, 68149, 68192, 68220, 68224, 68252, 68288, 68295, 68297, 68324, 68352, 68405, 68416, 68437, 68448, 68466, 68480, 68497, 68608, 68680, 68736, 68786, 68800, 68850, 68864, 68899, 69248, 69289, 69296, 69297, 69376, 69404, 69415, 69415, 69424, 69445, 69488, 69505, 69552, 69572, 69600, 69622, 69635, 69687, 69745, 69746, 69749, 69749, 69763, 69807, 69840, 69864, 69891, 69926, 69956, 69956, 69959, 69959, 69968, 70002, 70006, 70006, 70019, 70066, 70081, 70084, 70106, 70106, 70108, 70108, 70144, 70161, 70163, 70187, 70207, 70208, 70272, 70278, 70280, 70280, 70282, 70285, 70287, 70301, 70303, 70312, 70320, 70366, 70405, 70412, 70415, 70416, 70419, 70440, 70442, 70448, 70450, 70451, 70453, 70457, 70461, 70461, 70480, 70480, 70493, 70497, 70656, 70708, 70727, 70730, 70751, 70753, 70784, 70831, 70852, 70853, 70855, 70855, 71040, 71086, 71128, 71131, 71168, 71215, 71236, 71236, 71296, 71338, 71352, 71352, 71424, 71450, 71488, 71494, 71680, 71723, 71840, 71903, 71935, 71942, 71945, 71945, 71948, 71955, 71957, 71958, 71960, 71983, 71999, 71999, 72001, 72001, 72096, 72103, 72106, 72144, 72161, 72161, 72163, 72163, 72192, 72192, 72203, 72242, 72250, 72250, 72272, 72272, 72284, 72329, 72349, 72349, 72368, 72440, 72704, 72712, 72714, 72750, 72768, 72768, 72818, 72847, 72960, 72966, 72968, 72969, 72971, 73008, 73030, 73030, 73056, 73061, 73063, 73064, 73066, 73097, 73112, 73112, 73440, 73458, 73474, 73474, 73476, 73488, 73490, 73523, 73648, 73648, 73728, 74649, 74752, 74862, 74880, 75075, 77712, 77808, 77824, 78895, 78913, 78918, 82944, 83526, 92160, 92728, 92736, 92766, 92784, 92862, 92880, 92909, 92928, 92975, 92992, 92995, 93027, 93047, 93053, 93071, 93760, 93823, 93952, 94026, 94032, 94032, 94099, 94111, 94176, 94177, 94179, 94179, 94208, 100343, 100352, 101589, 101632, 101640, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 113664, 113770, 113776, 113788, 113792, 113800, 113808, 113817, 119808, 119892, 119894, 119964, 119966, 119967, 119970, 119970, 119973, 119974, 119977, 119980, 119982, 119993, 119995, 119995, 119997, 120003, 120005, 120069, 120071, 120074, 120077, 120084, 120086, 120092, 120094, 120121, 120123, 120126, 120128, 120132, 120134, 120134, 120138, 120144, 120146, 120485, 120488, 120512, 120514, 120538, 120540, 120570, 120572, 120596, 120598, 120628, 120630, 120654, 120656, 120686, 120688, 120712, 120714, 120744, 120746, 120770, 120772, 120779, 122624, 122654, 122661, 122666, 122928, 122989, 123136, 123180, 123191, 123197, 123214, 123214, 123536, 123565, 123584, 123627, 124112, 124139, 124896, 124902, 124904, 124907, 124909, 124910, 124912, 124926, 124928, 125124, 125184, 125251, 125259, 125259, 126464, 126467, 126469, 126495, 126497, 126498, 126500, 126500, 126503, 126503, 126505, 126514, 126516, 126519, 126521, 126521, 126523, 126523, 126530, 126530, 126535, 126535, 126537, 126537, 126539, 126539, 126541, 126543, 126545, 126546, 126548, 126548, 126551, 126551, 126553, 126553, 126555, 126555, 126557, 126557, 126559, 126559, 126561, 126562, 126564, 126564, 126567, 126570, 126572, 126578, 126580, 126583, 126585, 126588, 126590, 126590, 126592, 126601, 126603, 126619, 126625, 126627, 126629, 126633, 126635, 126651, 131072, 173791, 173824, 177977, 177984, 178205, 178208, 183969, 183984, 191456, 191472, 192093, 194560, 195101, 196608, 201546, 201552, 205743], z0 = [48, 57, 65, 90, 95, 95, 97, 122, 170, 170, 181, 181, 183, 183, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 768, 884, 886, 887, 890, 893, 895, 895, 902, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1155, 1159, 1162, 1327, 1329, 1366, 1369, 1369, 1376, 1416, 1425, 1469, 1471, 1471, 1473, 1474, 1476, 1477, 1479, 1479, 1488, 1514, 1519, 1522, 1552, 1562, 1568, 1641, 1646, 1747, 1749, 1756, 1759, 1768, 1770, 1788, 1791, 1791, 1808, 1866, 1869, 1969, 1984, 2037, 2042, 2042, 2045, 2045, 2048, 2093, 2112, 2139, 2144, 2154, 2160, 2183, 2185, 2190, 2200, 2273, 2275, 2403, 2406, 2415, 2417, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2556, 2556, 2558, 2558, 2561, 2563, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2641, 2641, 2649, 2652, 2654, 2654, 2662, 2677, 2689, 2691, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2787, 2790, 2799, 2809, 2815, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2876, 2884, 2887, 2888, 2891, 2893, 2901, 2903, 2908, 2909, 2911, 2915, 2918, 2927, 2929, 2929, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3024, 3024, 3031, 3031, 3046, 3055, 3072, 3084, 3086, 3088, 3090, 3112, 3114, 3129, 3132, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3160, 3162, 3165, 3165, 3168, 3171, 3174, 3183, 3200, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3260, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3293, 3294, 3296, 3299, 3302, 3311, 3313, 3315, 3328, 3340, 3342, 3344, 3346, 3396, 3398, 3400, 3402, 3406, 3412, 3415, 3423, 3427, 3430, 3439, 3450, 3455, 3457, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3558, 3567, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3718, 3722, 3724, 3747, 3749, 3749, 3751, 3773, 3776, 3780, 3782, 3782, 3784, 3790, 3792, 3801, 3804, 3807, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3948, 3953, 3972, 3974, 3991, 3993, 4028, 4038, 4038, 4096, 4169, 4176, 4253, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4957, 4959, 4969, 4977, 4992, 5007, 5024, 5109, 5112, 5117, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5880, 5888, 5909, 5919, 5940, 5952, 5971, 5984, 5996, 5998, 6e3, 6002, 6003, 6016, 6099, 6103, 6103, 6108, 6109, 6112, 6121, 6155, 6157, 6159, 6169, 6176, 6264, 6272, 6314, 6320, 6389, 6400, 6430, 6432, 6443, 6448, 6459, 6470, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6608, 6618, 6656, 6683, 6688, 6750, 6752, 6780, 6783, 6793, 6800, 6809, 6823, 6823, 6832, 6845, 6847, 6862, 6912, 6988, 6992, 7001, 7019, 7027, 7040, 7155, 7168, 7223, 7232, 7241, 7245, 7293, 7296, 7304, 7312, 7354, 7357, 7359, 7376, 7378, 7380, 7418, 7424, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8204, 8205, 8255, 8256, 8276, 8276, 8305, 8305, 8319, 8319, 8336, 8348, 8400, 8412, 8417, 8417, 8421, 8432, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8472, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11492, 11499, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11647, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11744, 11775, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12348, 12353, 12438, 12441, 12447, 12449, 12543, 12549, 12591, 12593, 12686, 12704, 12735, 12784, 12799, 13312, 19903, 19968, 42124, 42192, 42237, 42240, 42508, 42512, 42539, 42560, 42607, 42612, 42621, 42623, 42737, 42775, 42783, 42786, 42888, 42891, 42954, 42960, 42961, 42963, 42963, 42965, 42969, 42994, 43047, 43052, 43052, 43072, 43123, 43136, 43205, 43216, 43225, 43232, 43255, 43259, 43259, 43261, 43309, 43312, 43347, 43360, 43388, 43392, 43456, 43471, 43481, 43488, 43518, 43520, 43574, 43584, 43597, 43600, 43609, 43616, 43638, 43642, 43714, 43739, 43741, 43744, 43759, 43762, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43824, 43866, 43868, 43881, 43888, 44010, 44012, 44013, 44016, 44025, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65024, 65039, 65056, 65071, 65075, 65076, 65101, 65103, 65136, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65381, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65536, 65547, 65549, 65574, 65576, 65594, 65596, 65597, 65599, 65613, 65616, 65629, 65664, 65786, 65856, 65908, 66045, 66045, 66176, 66204, 66208, 66256, 66272, 66272, 66304, 66335, 66349, 66378, 66384, 66426, 66432, 66461, 66464, 66499, 66504, 66511, 66513, 66517, 66560, 66717, 66720, 66729, 66736, 66771, 66776, 66811, 66816, 66855, 66864, 66915, 66928, 66938, 66940, 66954, 66956, 66962, 66964, 66965, 66967, 66977, 66979, 66993, 66995, 67001, 67003, 67004, 67072, 67382, 67392, 67413, 67424, 67431, 67456, 67461, 67463, 67504, 67506, 67514, 67584, 67589, 67592, 67592, 67594, 67637, 67639, 67640, 67644, 67644, 67647, 67669, 67680, 67702, 67712, 67742, 67808, 67826, 67828, 67829, 67840, 67861, 67872, 67897, 67968, 68023, 68030, 68031, 68096, 68099, 68101, 68102, 68108, 68115, 68117, 68119, 68121, 68149, 68152, 68154, 68159, 68159, 68192, 68220, 68224, 68252, 68288, 68295, 68297, 68326, 68352, 68405, 68416, 68437, 68448, 68466, 68480, 68497, 68608, 68680, 68736, 68786, 68800, 68850, 68864, 68903, 68912, 68921, 69248, 69289, 69291, 69292, 69296, 69297, 69373, 69404, 69415, 69415, 69424, 69456, 69488, 69509, 69552, 69572, 69600, 69622, 69632, 69702, 69734, 69749, 69759, 69818, 69826, 69826, 69840, 69864, 69872, 69881, 69888, 69940, 69942, 69951, 69956, 69959, 69968, 70003, 70006, 70006, 70016, 70084, 70089, 70092, 70094, 70106, 70108, 70108, 70144, 70161, 70163, 70199, 70206, 70209, 70272, 70278, 70280, 70280, 70282, 70285, 70287, 70301, 70303, 70312, 70320, 70378, 70384, 70393, 70400, 70403, 70405, 70412, 70415, 70416, 70419, 70440, 70442, 70448, 70450, 70451, 70453, 70457, 70459, 70468, 70471, 70472, 70475, 70477, 70480, 70480, 70487, 70487, 70493, 70499, 70502, 70508, 70512, 70516, 70656, 70730, 70736, 70745, 70750, 70753, 70784, 70853, 70855, 70855, 70864, 70873, 71040, 71093, 71096, 71104, 71128, 71133, 71168, 71232, 71236, 71236, 71248, 71257, 71296, 71352, 71360, 71369, 71424, 71450, 71453, 71467, 71472, 71481, 71488, 71494, 71680, 71738, 71840, 71913, 71935, 71942, 71945, 71945, 71948, 71955, 71957, 71958, 71960, 71989, 71991, 71992, 71995, 72003, 72016, 72025, 72096, 72103, 72106, 72151, 72154, 72161, 72163, 72164, 72192, 72254, 72263, 72263, 72272, 72345, 72349, 72349, 72368, 72440, 72704, 72712, 72714, 72758, 72760, 72768, 72784, 72793, 72818, 72847, 72850, 72871, 72873, 72886, 72960, 72966, 72968, 72969, 72971, 73014, 73018, 73018, 73020, 73021, 73023, 73031, 73040, 73049, 73056, 73061, 73063, 73064, 73066, 73102, 73104, 73105, 73107, 73112, 73120, 73129, 73440, 73462, 73472, 73488, 73490, 73530, 73534, 73538, 73552, 73561, 73648, 73648, 73728, 74649, 74752, 74862, 74880, 75075, 77712, 77808, 77824, 78895, 78912, 78933, 82944, 83526, 92160, 92728, 92736, 92766, 92768, 92777, 92784, 92862, 92864, 92873, 92880, 92909, 92912, 92916, 92928, 92982, 92992, 92995, 93008, 93017, 93027, 93047, 93053, 93071, 93760, 93823, 93952, 94026, 94031, 94087, 94095, 94111, 94176, 94177, 94179, 94180, 94192, 94193, 94208, 100343, 100352, 101589, 101632, 101640, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 113664, 113770, 113776, 113788, 113792, 113800, 113808, 113817, 113821, 113822, 118528, 118573, 118576, 118598, 119141, 119145, 119149, 119154, 119163, 119170, 119173, 119179, 119210, 119213, 119362, 119364, 119808, 119892, 119894, 119964, 119966, 119967, 119970, 119970, 119973, 119974, 119977, 119980, 119982, 119993, 119995, 119995, 119997, 120003, 120005, 120069, 120071, 120074, 120077, 120084, 120086, 120092, 120094, 120121, 120123, 120126, 120128, 120132, 120134, 120134, 120138, 120144, 120146, 120485, 120488, 120512, 120514, 120538, 120540, 120570, 120572, 120596, 120598, 120628, 120630, 120654, 120656, 120686, 120688, 120712, 120714, 120744, 120746, 120770, 120772, 120779, 120782, 120831, 121344, 121398, 121403, 121452, 121461, 121461, 121476, 121476, 121499, 121503, 121505, 121519, 122624, 122654, 122661, 122666, 122880, 122886, 122888, 122904, 122907, 122913, 122915, 122916, 122918, 122922, 122928, 122989, 123023, 123023, 123136, 123180, 123184, 123197, 123200, 123209, 123214, 123214, 123536, 123566, 123584, 123641, 124112, 124153, 124896, 124902, 124904, 124907, 124909, 124910, 124912, 124926, 124928, 125124, 125136, 125142, 125184, 125259, 125264, 125273, 126464, 126467, 126469, 126495, 126497, 126498, 126500, 126500, 126503, 126503, 126505, 126514, 126516, 126519, 126521, 126521, 126523, 126523, 126530, 126530, 126535, 126535, 126537, 126537, 126539, 126539, 126541, 126543, 126545, 126546, 126548, 126548, 126551, 126551, 126553, 126553, 126555, 126555, 126557, 126557, 126559, 126559, 126561, 126562, 126564, 126564, 126567, 126570, 126572, 126578, 126580, 126583, 126585, 126588, 126590, 126590, 126592, 126601, 126603, 126619, 126625, 126627, 126629, 126633, 126635, 126651, 130032, 130041, 131072, 173791, 173824, 177977, 177984, 178205, 178208, 183969, 183984, 191456, 191472, 192093, 194560, 195101, 196608, 201546, 201552, 205743, 917760, 917999], $0 = /^\/\/\/?\s*@(ts-expect-error|ts-ignore)/, G0 = /^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)/, W0 = /@(?:see|link)/i;
    function bo(e, r) {
      if (e < r[0]) return !1;
      let i = 0, u = r.length, h;
      for (; i + 1 < u; ) {
        if (h = i + (u - i) / 2, h -= h % 2, r[h] <= e && e <= r[h + 1]) return !0;
        e < r[h] ? u = h : i = h + 2;
      }
      return !1;
    }
    function V0(e, r) {
      return r >= 2 ? bo(e, R0) : bo(e, j0);
    }
    function H0(e, r) {
      return r >= 2 ? bo(e, z0) : bo(e, q0);
    }
    function X1(e) {
      let r = [];
      return e.forEach((i, u) => {
        r[i] = u;
      }), r;
    }
    var X0 = X1(V1);
    function ct(e) {
      return X0[e];
    }
    function Q1(e) {
      return V1.get(e);
    }
    X1(H1);
    function Z1(e) {
      return H1.get(e);
    }
    function Y1(e) {
      let r = [], i = 0, u = 0;
      for (; i < e.length; ) {
        let h = e.charCodeAt(i);
        switch (i++, h) {
          case 13:
            e.charCodeAt(i) === 10 && i++;
          case 10:
            r.push(u), u = i;
            break;
          default:
            h > 127 && yr(h) && (r.push(u), u = i);
            break;
        }
      }
      return r.push(u), r;
    }
    function Q0(e, r, i, u, h) {
      (r < 0 || r >= e.length) && (h ? r = r < 0 ? 0 : r >= e.length ? e.length - 1 : r : B.fail(`Bad line number. Line: ${r}, lineStarts.length: ${e.length} , line map is correct? ${u !== void 0 ? n0(e, Y1(u)) : "unknown"}`));
      let T = e[r] + i;
      return h ? T > e[r + 1] ? e[r + 1] : typeof u == "string" && T > u.length ? u.length : T : (r < e.length - 1 ? B.assert(T < e[r + 1]) : u !== void 0 && B.assert(T <= u.length), T);
    }
    function Fl(e) {
      return e.lineMap || (e.lineMap = Y1(e.text));
    }
    function Z0(e, r) {
      let i = Y0(e, r);
      return { line: i, character: r - e[i] };
    }
    function Y0(e, r, i) {
      let u = u0(e, r, gt, D1);
      return u < 0 && (u = ~u - 1, B.assert(u !== -1, "position cannot precede the beginning of the file")), u;
    }
    function ef(e, r) {
      return Z0(Fl(e), r);
    }
    function Xi(e) {
      return Qi(e) || yr(e);
    }
    function Qi(e) {
      return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 133 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
    }
    function yr(e) {
      return e === 10 || e === 13 || e === 8232 || e === 8233;
    }
    function ea(e) {
      return e >= 48 && e <= 57;
    }
    function Il(e) {
      return ea(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
    }
    function Ll(e) {
      return e >= 65 && e <= 90 || e >= 97 && e <= 122;
    }
    function tf(e) {
      return Ll(e) || ea(e) || e === 95;
    }
    function Ol(e) {
      return e >= 48 && e <= 55;
    }
    function yn(e, r, i, u, h) {
      if (ss(r)) return r;
      let T = !1;
      for (; ; ) {
        let w = e.charCodeAt(r);
        switch (w) {
          case 13:
            e.charCodeAt(r + 1) === 10 && r++;
          case 10:
            if (r++, i) return r;
            T = !!h;
            continue;
          case 9:
          case 11:
          case 12:
          case 32:
            r++;
            continue;
          case 47:
            if (u) break;
            if (e.charCodeAt(r + 1) === 47) {
              for (r += 2; r < e.length && !yr(e.charCodeAt(r)); ) r++;
              T = !1;
              continue;
            }
            if (e.charCodeAt(r + 1) === 42) {
              for (r += 2; r < e.length; ) {
                if (e.charCodeAt(r) === 42 && e.charCodeAt(r + 1) === 47) {
                  r += 2;
                  break;
                }
                r++;
              }
              T = !1;
              continue;
            }
            break;
          case 60:
          case 124:
          case 61:
          case 62:
            if (ka(e, r)) {
              r = ei(e, r), T = !1;
              continue;
            }
            break;
          case 35:
            if (r === 0 && rf(e, r)) {
              r = nf(e, r), T = !1;
              continue;
            }
            break;
          case 42:
            if (T) {
              r++, T = !1;
              continue;
            }
            break;
          default:
            if (w > 127 && Xi(w)) {
              r++;
              continue;
            }
            break;
        }
        return r;
      }
    }
    var vo = 7;
    function ka(e, r) {
      if (B.assert(r >= 0), r === 0 || yr(e.charCodeAt(r - 1))) {
        let i = e.charCodeAt(r);
        if (r + vo < e.length) {
          for (let u = 0; u < vo; u++) if (e.charCodeAt(r + u) !== i) return !1;
          return i === 61 || e.charCodeAt(r + vo) === 32;
        }
      }
      return !1;
    }
    function ei(e, r, i) {
      i && i(C.Merge_conflict_marker_encountered, r, vo);
      let u = e.charCodeAt(r), h = e.length;
      if (u === 60 || u === 62) for (; r < h && !yr(e.charCodeAt(r)); ) r++;
      else for (B.assert(u === 124 || u === 61); r < h; ) {
        let T = e.charCodeAt(r);
        if ((T === 61 || T === 62) && T !== u && ka(e, r)) break;
        r++;
      }
      return r;
    }
    var Ml = /^#!.*/;
    function rf(e, r) {
      return B.assert(r === 0), Ml.test(e);
    }
    function nf(e, r) {
      let i = Ml.exec(e)[0];
      return r = r + i.length, r;
    }
    function So(e, r, i, u, h, T, w) {
      let N, o, $, d, S = !1, _ = u, v = w;
      if (i === 0) {
        _ = !0;
        let F = sf(r);
        F && (i = F.length);
      }
      e: for (; i >= 0 && i < r.length; ) {
        let F = r.charCodeAt(i);
        switch (F) {
          case 13:
            r.charCodeAt(i + 1) === 10 && i++;
          case 10:
            if (i++, u) break e;
            _ = !0, S && (d = !0);
            continue;
          case 9:
          case 11:
          case 12:
          case 32:
            i++;
            continue;
          case 47:
            let re = r.charCodeAt(i + 1), ke = !1;
            if (re === 47 || re === 42) {
              let ge = re === 47 ? 2 : 3, he = i;
              if (i += 2, re === 47) for (; i < r.length; ) {
                if (yr(r.charCodeAt(i))) {
                  ke = !0;
                  break;
                }
                i++;
              }
              else for (; i < r.length; ) {
                if (r.charCodeAt(i) === 42 && r.charCodeAt(i + 1) === 47) {
                  i += 2;
                  break;
                }
                i++;
              }
              if (_) {
                if (S && (v = h(N, o, $, d, T, v), !e && v)) return v;
                N = he, o = i, $ = ge, d = ke, S = !0;
              }
              continue;
            }
            break e;
          default:
            if (F > 127 && Xi(F)) {
              S && yr(F) && (d = !0), i++;
              continue;
            }
            break e;
        }
      }
      return S && (v = h(N, o, $, d, T, v)), v;
    }
    function eh(e, r, i, u) {
      return So(!1, e, r, !1, i, u);
    }
    function th(e, r, i, u) {
      return So(!1, e, r, !0, i, u);
    }
    function rh(e, r, i, u, h) {
      return So(!0, e, r, !1, i, u, h);
    }
    function nh(e, r, i, u, h) {
      return So(!0, e, r, !0, i, u, h);
    }
    function af(e, r, i, u, h, T = []) {
      return T.push({ kind: i, pos: e, end: r, hasTrailingNewLine: u }), T;
    }
    function Jl(e, r) {
      return rh(e, r, af, void 0, void 0);
    }
    function ah(e, r) {
      return nh(e, r, af, void 0, void 0);
    }
    function sf(e) {
      let r = Ml.exec(e);
      if (r) return r[0];
    }
    function tn(e, r) {
      return Ll(e) || e === 36 || e === 95 || e > 127 && V0(e, r);
    }
    function Jn(e, r, i) {
      return tf(e) || e === 36 || !1 || e > 127 && H0(e, r);
    }
    function ih(e, r, i) {
      let u = ba(e, 0);
      if (!tn(u, r)) return !1;
      for (let h = Bt(u); h < e.length; h += Bt(u)) if (!Jn(u = ba(e, h), r)) return !1;
      return !0;
    }
    function Bl(e, r, i = 0, u, h, T, w) {
      var N = u, o, $, d, S, _, v, F, re, ke = 0, ge = 0, he = 0;
      At(N, T, w);
      var I = { getTokenFullStart: () => d, getStartPos: () => d, getTokenEnd: () => o, getTextPos: () => o, getToken: () => _, getTokenStart: () => S, getTokenPos: () => S, getTokenText: () => N.substring(S, o), getTokenValue: () => v, hasUnicodeEscape: () => (F & 1024) !== 0, hasExtendedUnicodeEscape: () => (F & 8) !== 0, hasPrecedingLineBreak: () => (F & 1) !== 0, hasPrecedingJSDocComment: () => (F & 2) !== 0, hasPrecedingJSDocLeadingAsterisks: () => (F & 32768) !== 0, isIdentifier: () => _ === 80 || _ > 118, isReservedWord: () => _ >= 83 && _ <= 118, isUnterminated: () => (F & 4) !== 0, getCommentDirectives: () => re, getNumericLiteralFlags: () => F & 25584, getTokenFlags: () => F, reScanGreaterToken: lt, reScanAsteriskEqualsToken: sn, reScanSlashToken: mt, reScanTemplateToken: jt, reScanTemplateHeadOrNoSubstitutionTemplate: tr, scanJsxIdentifier: jn, scanJsxAttributeValue: $r, reScanJsxAttributeValue: Ne, reScanJsxToken: on, reScanLessThanToken: kn, reScanHashToken: bn, reScanQuestionToken: Rr, reScanInvalidIdentifier: Ut, scanJsxToken: zr, scanJsDocToken: M, scanJSDocCommentTextToken: vn, scan: ut, getText: Qe, clearCommentDirectives: it, setText: At, setScriptTarget: st, setLanguageVariant: ua, setScriptKind: Sr, setJSDocParsingMode: qn, setOnError: kt, resetTokenState: Gr, setTextPos: Gr, setSkipJsDocLeadingAsterisks: La, tryScan: Xe, lookAhead: be, scanRange: me };
      return B.isDebugging && Object.defineProperty(I, "__debugShowCurrentPositionInText", { get: () => {
        let K = I.getText();
        return K.slice(0, I.getTokenFullStart()) + "║" + K.slice(I.getTokenFullStart());
      } }), I;
      function ae(K) {
        return ba(N, K);
      }
      function Le(K) {
        return K >= 0 && K < $ ? ae(K) : -1;
      }
      function z(K) {
        return N.charCodeAt(K);
      }
      function ue(K) {
        return K >= 0 && K < $ ? z(K) : -1;
      }
      function H(K, Z = o, ee, ve) {
        if (h) {
          let Se = o;
          o = Z, h(K, ee || 0, ve), o = Se;
        }
      }
      function ft() {
        let K = o, Z = !1, ee = !1, ve = "";
        for (; ; ) {
          let Se = z(o);
          if (Se === 95) {
            F |= 512, Z ? (Z = !1, ee = !0, ve += N.substring(K, o)) : (F |= 16384, H(ee ? C.Multiple_consecutive_numeric_separators_are_not_permitted : C.Numeric_separators_are_not_allowed_here, o, 1)), o++, K = o;
            continue;
          }
          if (ea(Se)) {
            Z = !0, ee = !1, o++;
            continue;
          }
          break;
        }
        return z(o - 1) === 95 && (F |= 16384, H(C.Numeric_separators_are_not_allowed_here, o - 1, 1)), ve + N.substring(K, o);
      }
      function rn() {
        let K = o, Z;
        if (z(o) === 48) if (o++, z(o) === 95) F |= 16896, H(C.Numeric_separators_are_not_allowed_here, o, 1), o--, Z = ft();
        else if (!nn()) F |= 8192, Z = "" + +v;
        else if (!v) Z = "0";
        else {
          v = "" + parseInt(v, 8), F |= 32;
          let Te = _ === 41, qe = (Te ? "-" : "") + "0o" + (+v).toString(8);
          return Te && K--, H(C.Octal_literals_are_not_allowed_Use_the_syntax_0, K, o - K, qe), 9;
        }
        else Z = ft();
        let ee, ve;
        z(o) === 46 && (o++, ee = ft());
        let Se = o;
        if (z(o) === 69 || z(o) === 101) {
          o++, F |= 16, (z(o) === 43 || z(o) === 45) && o++;
          let Te = o, qe = ft();
          qe ? (ve = N.substring(Se, Te) + qe, Se = o) : H(C.Digit_expected);
        }
        let Ce;
        if (F & 512 ? (Ce = Z, ee && (Ce += "." + ee), ve && (Ce += ve)) : Ce = N.substring(K, Se), F & 8192) return H(C.Decimals_with_leading_zeros_are_not_allowed, K, Se - K), v = "" + +Ce, 9;
        if (ee !== void 0 || F & 16) return kr(K, ee === void 0 && !!(F & 16)), v = "" + +Ce, 9;
        {
          v = Ce;
          let Te = Wt();
          return kr(K), Te;
        }
      }
      function kr(K, Z) {
        if (!tn(ae(o), e)) return;
        let ee = o, { length: ve } = xt();
        ve === 1 && N[ee] === "n" ? H(Z ? C.A_bigint_literal_cannot_use_exponential_notation : C.A_bigint_literal_must_be_an_integer, K, ee - K + 1) : (H(C.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal, ee, ve), o = ee);
      }
      function nn() {
        let K = o, Z = !0;
        for (; ea(ue(o)); ) Ol(z(o)) || (Z = !1), o++;
        return v = N.substring(K, o), Z;
      }
      function br(K, Z) {
        let ee = Re(K, !1, Z);
        return ee ? parseInt(ee, 16) : -1;
      }
      function Fr(K, Z) {
        return Re(K, !0, Z);
      }
      function Re(K, Z, ee) {
        let ve = [], Se = !1, Ce = !1;
        for (; ve.length < K || Z; ) {
          let Te = z(o);
          if (ee && Te === 95) {
            F |= 512, Se ? (Se = !1, Ce = !0) : H(Ce ? C.Multiple_consecutive_numeric_separators_are_not_permitted : C.Numeric_separators_are_not_allowed_here, o, 1), o++;
            continue;
          }
          if (Se = ee, Te >= 65 && Te <= 70) Te += 32;
          else if (!(Te >= 48 && Te <= 57 || Te >= 97 && Te <= 102)) break;
          ve.push(Te), o++, Ce = !1;
        }
        return ve.length < K && (ve = []), z(o - 1) === 95 && H(C.Numeric_separators_are_not_allowed_here, o - 1, 1), String.fromCharCode(...ve);
      }
      function an(K = !1) {
        let Z = z(o);
        o++;
        let ee = "", ve = o;
        for (; ; ) {
          if (o >= $) {
            ee += N.substring(ve, o), F |= 4, H(C.Unterminated_string_literal);
            break;
          }
          let Se = z(o);
          if (Se === Z) {
            ee += N.substring(ve, o), o++;
            break;
          }
          if (Se === 92 && !K) {
            ee += N.substring(ve, o), ee += It(3), ve = o;
            continue;
          }
          if ((Se === 10 || Se === 13) && !K) {
            ee += N.substring(ve, o), F |= 4, H(C.Unterminated_string_literal);
            break;
          }
          o++;
        }
        return ee;
      }
      function Un(K) {
        let Z = z(o) === 96;
        o++;
        let ee = o, ve = "", Se;
        for (; ; ) {
          if (o >= $) {
            ve += N.substring(ee, o), F |= 4, H(C.Unterminated_template_literal), Se = Z ? 15 : 18;
            break;
          }
          let Ce = z(o);
          if (Ce === 96) {
            ve += N.substring(ee, o), o++, Se = Z ? 15 : 18;
            break;
          }
          if (Ce === 36 && o + 1 < $ && z(o + 1) === 123) {
            ve += N.substring(ee, o), o += 2, Se = Z ? 16 : 17;
            break;
          }
          if (Ce === 92) {
            ve += N.substring(ee, o), ve += It(1 | (K ? 2 : 0)), ee = o;
            continue;
          }
          if (Ce === 13) {
            ve += N.substring(ee, o), o++, o < $ && z(o) === 10 && o++, ve += `
`, ee = o;
            continue;
          }
          o++;
        }
        return B.assert(Se !== void 0), v = ve, Se;
      }
      function It(K) {
        let Z = o;
        if (o++, o >= $) return H(C.Unexpected_end_of_text), "";
        let ee = z(o);
        switch (o++, ee) {
          case 48:
            if (o >= $ || !ea(z(o))) return "\0";
          case 49:
          case 50:
          case 51:
            o < $ && Ol(z(o)) && o++;
          case 52:
          case 53:
          case 54:
          case 55:
            if (o < $ && Ol(z(o)) && o++, F |= 2048, K & 6) {
              let Ce = parseInt(N.substring(Z + 1, o), 8);
              return K & 4 && !(K & 32) && ee !== 48 ? H(C.Octal_escape_sequences_and_backreferences_are_not_allowed_in_a_character_class_If_this_was_intended_as_an_escape_sequence_use_the_syntax_0_instead, Z, o - Z, "\\x" + Ce.toString(16).padStart(2, "0")) : H(C.Octal_escape_sequences_are_not_allowed_Use_the_syntax_0, Z, o - Z, "\\x" + Ce.toString(16).padStart(2, "0")), String.fromCharCode(Ce);
            }
            return N.substring(Z, o);
          case 56:
          case 57:
            return F |= 2048, K & 6 ? (K & 4 && !(K & 32) ? H(C.Decimal_escape_sequences_and_backreferences_are_not_allowed_in_a_character_class, Z, o - Z) : H(C.Escape_sequence_0_is_not_allowed, Z, o - Z, N.substring(Z, o)), String.fromCharCode(ee)) : N.substring(Z, o);
          case 98:
            return "\b";
          case 116:
            return "	";
          case 110:
            return `
`;
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 114:
            return "\r";
          case 39:
            return "'";
          case 34:
            return '"';
          case 117:
            if (o < $ && z(o) === 123) {
              o -= 2;
              let Ce = jr(!!(K & 6));
              return K & 17 || (F |= 2048, K & 6 && H(C.Unicode_escape_sequences_are_only_available_when_the_Unicode_u_flag_or_the_Unicode_Sets_v_flag_is_set, Z, o - Z)), Ce;
            }
            for (; o < Z + 6; o++) if (!(o < $ && Il(z(o)))) return F |= 2048, K & 6 && H(C.Hexadecimal_digit_expected), N.substring(Z, o);
            F |= 1024;
            let ve = parseInt(N.substring(Z + 2, o), 16), Se = String.fromCharCode(ve);
            if (K & 16 && ve >= 55296 && ve <= 56319 && o + 6 < $ && N.substring(o, o + 2) === "\\u" && z(o + 2) !== 123) {
              let Ce = o, Te = o + 2;
              for (; Te < Ce + 6; Te++) if (!Il(z(Te))) return Se;
              let qe = parseInt(N.substring(Ce + 2, Te), 16);
              if (qe >= 56320 && qe <= 57343) return o = Te, Se + String.fromCharCode(qe);
            }
            return Se;
          case 120:
            for (; o < Z + 4; o++) if (!(o < $ && Il(z(o)))) return F |= 2048, K & 6 && H(C.Hexadecimal_digit_expected), N.substring(Z, o);
            return F |= 4096, String.fromCharCode(parseInt(N.substring(Z + 2, o), 16));
          case 13:
            o < $ && z(o) === 10 && o++;
          case 10:
          case 8232:
          case 8233:
            return "";
          default:
            return (K & 16 || K & 4 && !(K & 8) && Jn(ee, e)) && H(C.This_character_cannot_be_escaped_in_a_regular_expression, o - 2, 2), String.fromCharCode(ee);
        }
      }
      function jr(K) {
        let Z = o;
        o += 3;
        let ee = o, ve = Fr(1, !1), Se = ve ? parseInt(ve, 16) : -1, Ce = !1;
        return Se < 0 ? (K && H(C.Hexadecimal_digit_expected), Ce = !0) : Se > 1114111 && (K && H(C.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive, ee, o - ee), Ce = !0), o >= $ ? (K && H(C.Unexpected_end_of_text), Ce = !0) : z(o) === 125 ? o++ : (K && H(C.Unterminated_Unicode_escape_sequence), Ce = !0), Ce ? (F |= 2048, N.substring(Z, o)) : (F |= 8, of(Se));
      }
      function Ir() {
        if (o + 5 < $ && z(o + 1) === 117) {
          let K = o;
          o += 2;
          let Z = br(4, !1);
          return o = K, Z;
        }
        return -1;
      }
      function Lt() {
        if (ae(o + 1) === 117 && ae(o + 2) === 123) {
          let K = o;
          o += 3;
          let Z = Fr(1, !1), ee = Z ? parseInt(Z, 16) : -1;
          return o = K, ee;
        }
        return -1;
      }
      function xt() {
        let K = "", Z = o;
        for (; o < $; ) {
          let ee = ae(o);
          if (Jn(ee, e)) o += Bt(ee);
          else if (ee === 92) {
            if (ee = Lt(), ee >= 0 && Jn(ee, e)) {
              K += jr(!0), Z = o;
              continue;
            }
            if (ee = Ir(), !(ee >= 0 && Jn(ee, e))) break;
            F |= 1024, K += N.substring(Z, o), K += of(ee), o += 6, Z = o;
          } else break;
        }
        return K += N.substring(Z, o), K;
      }
      function He() {
        let K = v.length;
        if (K >= 2 && K <= 12) {
          let Z = v.charCodeAt(0);
          if (Z >= 97 && Z <= 122) {
            let ee = K0.get(v);
            if (ee !== void 0) return _ = ee;
          }
        }
        return _ = 80;
      }
      function qr(K) {
        let Z = "", ee = !1, ve = !1;
        for (; ; ) {
          let Se = z(o);
          if (Se === 95) {
            F |= 512, ee ? (ee = !1, ve = !0) : H(ve ? C.Multiple_consecutive_numeric_separators_are_not_permitted : C.Numeric_separators_are_not_allowed_here, o, 1), o++;
            continue;
          }
          if (ee = !0, !ea(Se) || Se - 48 >= K) break;
          Z += N[o], o++, ve = !1;
        }
        return z(o - 1) === 95 && H(C.Numeric_separators_are_not_allowed_here, o - 1, 1), Z;
      }
      function Wt() {
        return z(o) === 110 ? (v += "n", F & 384 && (v = yy(v) + "n"), o++, 10) : (v = "" + (F & 128 ? parseInt(v.slice(2), 2) : F & 256 ? parseInt(v.slice(2), 8) : +v), 9);
      }
      function ut() {
        for (d = o, F = 0; ; ) {
          if (S = o, o >= $) return _ = 1;
          let K = ae(o);
          if (o === 0 && K === 35 && rf(N, o)) {
            if (o = nf(N, o), r) continue;
            return _ = 6;
          }
          switch (K) {
            case 10:
            case 13:
              if (F |= 1, r) {
                o++;
                continue;
              } else return K === 13 && o + 1 < $ && z(o + 1) === 10 ? o += 2 : o++, _ = 4;
            case 9:
            case 11:
            case 12:
            case 32:
            case 160:
            case 5760:
            case 8192:
            case 8193:
            case 8194:
            case 8195:
            case 8196:
            case 8197:
            case 8198:
            case 8199:
            case 8200:
            case 8201:
            case 8202:
            case 8203:
            case 8239:
            case 8287:
            case 12288:
            case 65279:
              if (r) {
                o++;
                continue;
              } else {
                for (; o < $ && Qi(z(o)); ) o++;
                return _ = 5;
              }
            case 33:
              return z(o + 1) === 61 ? z(o + 2) === 61 ? (o += 3, _ = 38) : (o += 2, _ = 36) : (o++, _ = 54);
            case 34:
            case 39:
              return v = an(), _ = 11;
            case 96:
              return _ = Un(!1);
            case 37:
              return z(o + 1) === 61 ? (o += 2, _ = 70) : (o++, _ = 45);
            case 38:
              return z(o + 1) === 38 ? z(o + 2) === 61 ? (o += 3, _ = 77) : (o += 2, _ = 56) : z(o + 1) === 61 ? (o += 2, _ = 74) : (o++, _ = 51);
            case 40:
              return o++, _ = 21;
            case 41:
              return o++, _ = 22;
            case 42:
              if (z(o + 1) === 61) return o += 2, _ = 67;
              if (z(o + 1) === 42) return z(o + 2) === 61 ? (o += 3, _ = 68) : (o += 2, _ = 43);
              if (o++, ke && (F & 32768) === 0 && F & 1) {
                F |= 32768;
                continue;
              }
              return _ = 42;
            case 43:
              return z(o + 1) === 43 ? (o += 2, _ = 46) : z(o + 1) === 61 ? (o += 2, _ = 65) : (o++, _ = 40);
            case 44:
              return o++, _ = 28;
            case 45:
              return z(o + 1) === 45 ? (o += 2, _ = 47) : z(o + 1) === 61 ? (o += 2, _ = 66) : (o++, _ = 41);
            case 46:
              return ea(z(o + 1)) ? (rn(), _ = 9) : z(o + 1) === 46 && z(o + 2) === 46 ? (o += 3, _ = 26) : (o++, _ = 25);
            case 47:
              if (z(o + 1) === 47) {
                for (o += 2; o < $ && !yr(z(o)); ) o++;
                if (re = or(re, N.slice(S, o), $0, S), r) continue;
                return _ = 2;
              }
              if (z(o + 1) === 42) {
                o += 2;
                let Te = z(o) === 42 && z(o + 1) !== 47, qe = !1, Ze = S;
                for (; o < $; ) {
                  let Ge = z(o);
                  if (Ge === 42 && z(o + 1) === 47) {
                    o += 2, qe = !0;
                    break;
                  }
                  o++, yr(Ge) && (Ze = o, F |= 1);
                }
                if (Te && at() && (F |= 2), re = or(re, N.slice(Ze, o), G0, Ze), qe || H(C.Asterisk_Slash_expected), r) continue;
                return qe || (F |= 4), _ = 3;
              }
              return z(o + 1) === 61 ? (o += 2, _ = 69) : (o++, _ = 44);
            case 48:
              if (o + 2 < $ && (z(o + 1) === 88 || z(o + 1) === 120)) return o += 2, v = Fr(1, !0), v || (H(C.Hexadecimal_digit_expected), v = "0"), v = "0x" + v, F |= 64, _ = Wt();
              if (o + 2 < $ && (z(o + 1) === 66 || z(o + 1) === 98)) return o += 2, v = qr(2), v || (H(C.Binary_digit_expected), v = "0"), v = "0b" + v, F |= 128, _ = Wt();
              if (o + 2 < $ && (z(o + 1) === 79 || z(o + 1) === 111)) return o += 2, v = qr(8), v || (H(C.Octal_digit_expected), v = "0"), v = "0o" + v, F |= 256, _ = Wt();
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return _ = rn();
            case 58:
              return o++, _ = 59;
            case 59:
              return o++, _ = 27;
            case 60:
              if (ka(N, o)) {
                if (o = ei(N, o, H), r) continue;
                return _ = 7;
              }
              return z(o + 1) === 60 ? z(o + 2) === 61 ? (o += 3, _ = 71) : (o += 2, _ = 48) : z(o + 1) === 61 ? (o += 2, _ = 33) : i === 1 && z(o + 1) === 47 && z(o + 2) !== 42 ? (o += 2, _ = 31) : (o++, _ = 30);
            case 61:
              if (ka(N, o)) {
                if (o = ei(N, o, H), r) continue;
                return _ = 7;
              }
              return z(o + 1) === 61 ? z(o + 2) === 61 ? (o += 3, _ = 37) : (o += 2, _ = 35) : z(o + 1) === 62 ? (o += 2, _ = 39) : (o++, _ = 64);
            case 62:
              if (ka(N, o)) {
                if (o = ei(N, o, H), r) continue;
                return _ = 7;
              }
              return o++, _ = 32;
            case 63:
              return z(o + 1) === 46 && !ea(z(o + 2)) ? (o += 2, _ = 29) : z(o + 1) === 63 ? z(o + 2) === 61 ? (o += 3, _ = 78) : (o += 2, _ = 61) : (o++, _ = 58);
            case 91:
              return o++, _ = 23;
            case 93:
              return o++, _ = 24;
            case 94:
              return z(o + 1) === 61 ? (o += 2, _ = 79) : (o++, _ = 53);
            case 123:
              return o++, _ = 19;
            case 124:
              if (ka(N, o)) {
                if (o = ei(N, o, H), r) continue;
                return _ = 7;
              }
              return z(o + 1) === 124 ? z(o + 2) === 61 ? (o += 3, _ = 76) : (o += 2, _ = 57) : z(o + 1) === 61 ? (o += 2, _ = 75) : (o++, _ = 52);
            case 125:
              return o++, _ = 20;
            case 126:
              return o++, _ = 55;
            case 64:
              return o++, _ = 60;
            case 92:
              let Z = Lt();
              if (Z >= 0 && tn(Z, e)) return v = jr(!0) + xt(), _ = He();
              let ee = Ir();
              return ee >= 0 && tn(ee, e) ? (o += 6, F |= 1024, v = String.fromCharCode(ee) + xt(), _ = He()) : (H(C.Invalid_character), o++, _ = 0);
            case 35:
              if (o !== 0 && N[o + 1] === "!") return H(C.can_only_be_used_at_the_start_of_a_file, o, 2), o++, _ = 0;
              let ve = ae(o + 1);
              if (ve === 92) {
                o++;
                let Te = Lt();
                if (Te >= 0 && tn(Te, e)) return v = "#" + jr(!0) + xt(), _ = 81;
                let qe = Ir();
                if (qe >= 0 && tn(qe, e)) return o += 6, F |= 1024, v = "#" + String.fromCharCode(qe) + xt(), _ = 81;
                o--;
              }
              return tn(ve, e) ? (o++, Ot(ve, e)) : (v = "#", H(C.Invalid_character, o++, Bt(K))), _ = 81;
            case 65533:
              return H(C.File_appears_to_be_binary, 0, 0), o = $, _ = 8;
            default:
              let Se = Ot(K, e);
              if (Se) return _ = Se;
              if (Qi(K)) {
                o += Bt(K);
                continue;
              } else if (yr(K)) {
                F |= 1, o += Bt(K);
                continue;
              }
              let Ce = Bt(K);
              return H(C.Invalid_character, o, Ce), o += Ce, _ = 0;
          }
        }
      }
      function at() {
        switch (he) {
          case 0:
            return !0;
          case 1:
            return !1;
        }
        return ge !== 3 && ge !== 4 ? !0 : he === 3 ? !1 : W0.test(N.slice(d, o));
      }
      function Ut() {
        B.assert(_ === 0, "'reScanInvalidIdentifier' should only be called when the current token is 'SyntaxKind.Unknown'."), o = S = d, F = 0;
        let K = ae(o), Z = Ot(K, 99);
        return Z ? _ = Z : (o += Bt(K), _);
      }
      function Ot(K, Z) {
        let ee = K;
        if (tn(ee, Z)) {
          for (o += Bt(ee); o < $ && Jn(ee = ae(o), Z); ) o += Bt(ee);
          return v = N.substring(S, o), ee === 92 && (v += xt()), He();
        }
      }
      function lt() {
        if (_ === 32) {
          if (z(o) === 62) return z(o + 1) === 62 ? z(o + 2) === 61 ? (o += 3, _ = 73) : (o += 2, _ = 50) : z(o + 1) === 61 ? (o += 2, _ = 72) : (o++, _ = 49);
          if (z(o) === 61) return o++, _ = 34;
        }
        return _;
      }
      function sn() {
        return B.assert(_ === 67, "'reScanAsteriskEqualsToken' should only be called on a '*='"), o = S + 1, _ = 64;
      }
      function mt(K) {
        if (_ === 44 || _ === 69) {
          let Z = S + 1;
          o = Z;
          let ee = !1, ve = !1, Se = !1;
          for (; ; ) {
            let Te = ue(o);
            if (Te === -1 || yr(Te)) {
              F |= 4;
              break;
            }
            if (ee) ee = !1;
            else {
              if (Te === 47 && !Se) break;
              Te === 91 ? Se = !0 : Te === 92 ? ee = !0 : Te === 93 ? Se = !1 : !Se && Te === 40 && ue(o + 1) === 63 && ue(o + 2) === 60 && ue(o + 3) !== 61 && ue(o + 3) !== 33 && (ve = !0);
            }
            o++;
          }
          let Ce = o;
          if (F & 4) {
            o = Z, ee = !1;
            let Te = 0, qe = !1, Ze = 0;
            for (; o < Ce; ) {
              let Ge = z(o);
              if (ee) ee = !1;
              else if (Ge === 92) ee = !0;
              else if (Ge === 91) Te++;
              else if (Ge === 93 && Te) Te--;
              else if (!Te) {
                if (Ge === 123) qe = !0;
                else if (Ge === 125 && qe) qe = !1;
                else if (!qe) {
                  if (Ge === 40) Ze++;
                  else if (Ge === 41 && Ze) Ze--;
                  else if (Ge === 41 || Ge === 93 || Ge === 125) break;
                }
              }
              o++;
            }
            for (; Xi(ue(o - 1)) || ue(o - 1) === 59; ) o--;
            H(C.Unterminated_regular_expression_literal, S, o - S);
          } else {
            o++;
            let Te = 0;
            for (; ; ) {
              let qe = Le(o);
              if (qe === -1 || !Jn(qe, e)) break;
              let Ze = Bt(qe);
              if (K) {
                let Ge = Z1(qe);
                Ge === void 0 ? H(C.Unknown_regular_expression_flag, o, Ze) : Te & Ge ? H(C.Duplicate_regular_expression_flag, o, Ze) : ((Te | Ge) & 96) === 96 ? H(C.The_Unicode_u_flag_and_the_Unicode_Sets_v_flag_cannot_be_set_simultaneously, o, Ze) : (Te |= Ge, yt(Ge, Ze));
              }
              o += Ze;
            }
            K && me(Z, Ce - Z, () => {
              vr(Te, !0, ve);
            });
          }
          v = N.substring(S, o), _ = 14;
        }
        return _;
      }
      function vr(K, Z, ee) {
        var ve = !!(K & 64), Se = !!(K & 96), Ce = Se || !1, Te = !1, qe = 0, Ze, Ge, we, Lr = [], nt;
        function cr(W) {
          for (; ; ) {
            if (Lr.push(nt), nt = void 0, Sn(W), nt = Lr.pop(), ue(o) !== 124) return;
            o++;
          }
        }
        function Sn(W) {
          let de = !1;
          for (; ; ) {
            let je = o, xe = ue(o);
            switch (xe) {
              case -1:
                return;
              case 94:
              case 36:
                o++, de = !1;
                break;
              case 92:
                switch (o++, ue(o)) {
                  case 98:
                  case 66:
                    o++, de = !1;
                    break;
                  default:
                    L(), de = !0;
                    break;
                }
                break;
              case 40:
                if (o++, ue(o) === 63) switch (o++, ue(o)) {
                  case 61:
                  case 33:
                    o++, de = !Ce;
                    break;
                  case 60:
                    let bt = o;
                    switch (o++, ue(o)) {
                      case 61:
                      case 33:
                        o++, de = !1;
                        break;
                      default:
                        Ve(!1), ur(62), e < 5 && H(C.Named_capturing_groups_are_only_available_when_targeting_ES2018_or_later, bt, o - bt), qe++, de = !0;
                        break;
                    }
                    break;
                  default:
                    let Mt = o, lr = O(0);
                    ue(o) === 45 && (o++, O(lr), o === Mt + 1 && H(C.Subpattern_flags_must_be_present_when_there_is_a_minus_sign, Mt, o - Mt)), ur(58), de = !0;
                    break;
                }
                else qe++, de = !0;
                cr(!0), ur(41);
                break;
              case 123:
                o++;
                let J = o;
                nn();
                let ht = v;
                if (!Ce && !ht) {
                  de = !0;
                  break;
                }
                if (ue(o) === 44) {
                  o++, nn();
                  let bt = v;
                  if (ht) bt && Number.parseInt(ht) > Number.parseInt(bt) && (Ce || ue(o) === 125) && H(C.Numbers_out_of_order_in_quantifier, J, o - J);
                  else if (bt || ue(o) === 125) H(C.Incomplete_quantifier_Digit_expected, J, 0);
                  else {
                    H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, je, 1, String.fromCharCode(xe)), de = !0;
                    break;
                  }
                } else if (!ht) {
                  Ce && H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, je, 1, String.fromCharCode(xe)), de = !0;
                  break;
                }
                if (ue(o) !== 125) if (Ce) H(C._0_expected, o, 0, "}"), o--;
                else {
                  de = !0;
                  break;
                }
              case 42:
              case 43:
              case 63:
                o++, ue(o) === 63 && o++, de || H(C.There_is_nothing_available_for_repetition, je, o - je), de = !1;
                break;
              case 46:
                o++, de = !0;
                break;
              case 91:
                o++, ve ? ze() : Ye(), ur(93), de = !0;
                break;
              case 41:
                if (W) return;
              case 93:
              case 125:
                (Ce || xe === 41) && H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, o, 1, String.fromCharCode(xe)), o++, de = !0;
                break;
              case 47:
              case 124:
                return;
              default:
                Oa(), de = !0;
                break;
            }
          }
        }
        function O(W) {
          for (; ; ) {
            let de = Le(o);
            if (de === -1 || !Jn(de, e)) break;
            let je = Bt(de), xe = Z1(de);
            xe === void 0 ? H(C.Unknown_regular_expression_flag, o, je) : W & xe ? H(C.Duplicate_regular_expression_flag, o, je) : xe & 28 ? (W |= xe, yt(xe, je)) : H(C.This_regular_expression_flag_cannot_be_toggled_within_a_subpattern, o, je), o += je;
          }
          return W;
        }
        function L() {
          switch (B.assertEqual(z(o - 1), 92), ue(o)) {
            case 107:
              o++, ue(o) === 60 ? (o++, Ve(!0), ur(62)) : (Ce || ee) && H(C.k_must_be_followed_by_a_capturing_group_name_enclosed_in_angle_brackets, o - 2, 2);
              break;
            case 113:
              if (ve) {
                o++, H(C.q_is_only_available_inside_character_class, o - 2, 2);
                break;
              }
            default:
              B.assert(Cn() || p() || Be(!0));
              break;
          }
        }
        function p() {
          B.assertEqual(z(o - 1), 92);
          let W = ue(o);
          if (W >= 49 && W <= 57) {
            let de = o;
            return nn(), we = hr(we, { pos: de, end: o, value: +v }), !0;
          }
          return !1;
        }
        function Be(W) {
          B.assertEqual(z(o - 1), 92);
          let de = ue(o);
          switch (de) {
            case -1:
              return H(C.Undetermined_character_escape, o - 1, 1), "\\";
            case 99:
              if (o++, de = ue(o), Ll(de)) return o++, String.fromCharCode(de & 31);
              if (Ce) H(C.c_must_be_followed_by_an_ASCII_letter, o - 2, 2);
              else if (W) return o--, "\\";
              return String.fromCharCode(de);
            case 94:
            case 36:
            case 47:
            case 92:
            case 46:
            case 42:
            case 43:
            case 63:
            case 40:
            case 41:
            case 91:
            case 93:
            case 123:
            case 125:
            case 124:
              return o++, String.fromCharCode(de);
            default:
              return o--, It(12 | (Se ? 16 : 0) | (W ? 32 : 0));
          }
        }
        function Ve(W) {
          B.assertEqual(z(o - 1), 60), S = o, Ot(Le(o), e), o === S ? H(C.Expected_a_capturing_group_name) : W ? Ge = hr(Ge, { pos: S, end: o, name: v }) : nt != null && nt.has(v) || Lr.some((de) => de == null ? void 0 : de.has(v)) ? H(C.Named_capturing_groups_with_the_same_name_must_be_mutually_exclusive_to_each_other, S, o - S) : (nt ?? (nt = /* @__PURE__ */ new Set()), nt.add(v), Ze ?? (Ze = /* @__PURE__ */ new Set()), Ze.add(v));
        }
        function j(W) {
          return W === 93 || W === -1 || o >= $;
        }
        function Ye() {
          for (B.assertEqual(z(o - 1), 91), ue(o) === 94 && o++; ; ) {
            let W = ue(o);
            if (j(W)) return;
            let de = o, je = Vt();
            if (ue(o) === 45) {
              o++;
              let xe = ue(o);
              if (j(xe)) return;
              !je && Ce && H(C.A_character_class_range_must_not_be_bounded_by_another_character_class, de, o - 1 - de);
              let J = o, ht = Vt();
              if (!ht && Ce) {
                H(C.A_character_class_range_must_not_be_bounded_by_another_character_class, J, o - J);
                continue;
              }
              if (!je) continue;
              let bt = ba(je, 0), Mt = ba(ht, 0);
              je.length === Bt(bt) && ht.length === Bt(Mt) && bt > Mt && H(C.Range_out_of_order_in_character_class, de, o - de);
            }
          }
        }
        function ze() {
          B.assertEqual(z(o - 1), 91);
          let W = !1;
          ue(o) === 94 && (o++, W = !0);
          let de = !1, je = ue(o);
          if (j(je)) return;
          let xe = o, J;
          switch (N.slice(o, o + 2)) {
            case "--":
            case "&&":
              H(C.Expected_a_class_set_operand), Te = !1;
              break;
            default:
              J = Pt();
              break;
          }
          switch (ue(o)) {
            case 45:
              if (ue(o + 1) === 45) {
                W && Te && H(C.Anything_that_would_possibly_match_more_than_a_single_character_is_invalid_inside_a_negated_character_class, xe, o - xe), de = Te, We(3), Te = !W && de;
                return;
              }
              break;
            case 38:
              if (ue(o + 1) === 38) {
                We(2), W && Te && H(C.Anything_that_would_possibly_match_more_than_a_single_character_is_invalid_inside_a_negated_character_class, xe, o - xe), de = Te, Te = !W && de;
                return;
              } else H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, o, 1, String.fromCharCode(je));
              break;
            default:
              W && Te && H(C.Anything_that_would_possibly_match_more_than_a_single_character_is_invalid_inside_a_negated_character_class, xe, o - xe), de = Te;
              break;
          }
          for (; je = ue(o), je !== -1; ) {
            switch (je) {
              case 45:
                if (o++, je = ue(o), j(je)) {
                  Te = !W && de;
                  return;
                }
                if (je === 45) {
                  o++, H(C.Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead, o - 2, 2), xe = o - 2, J = N.slice(xe, o);
                  continue;
                } else {
                  J || H(C.A_character_class_range_must_not_be_bounded_by_another_character_class, xe, o - 1 - xe);
                  let ht = o, bt = Pt();
                  if (W && Te && H(C.Anything_that_would_possibly_match_more_than_a_single_character_is_invalid_inside_a_negated_character_class, ht, o - ht), de || (de = Te), !bt) {
                    H(C.A_character_class_range_must_not_be_bounded_by_another_character_class, ht, o - ht);
                    break;
                  }
                  if (!J) break;
                  let Mt = ba(J, 0), lr = ba(bt, 0);
                  J.length === Bt(Mt) && bt.length === Bt(lr) && Mt > lr && H(C.Range_out_of_order_in_character_class, xe, o - xe);
                }
                break;
              case 38:
                xe = o, o++, ue(o) === 38 ? (o++, H(C.Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead, o - 2, 2), ue(o) === 38 && (H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, o, 1, String.fromCharCode(je)), o++)) : H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, o - 1, 1, String.fromCharCode(je)), J = N.slice(xe, o);
                continue;
            }
            if (j(ue(o))) break;
            switch (xe = o, N.slice(o, o + 2)) {
              case "--":
              case "&&":
                H(C.Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead, o, 2), o += 2, J = N.slice(xe, o);
                break;
              default:
                J = Pt();
                break;
            }
          }
          Te = !W && de;
        }
        function We(W) {
          let de = Te;
          for (; ; ) {
            let je = ue(o);
            if (j(je)) break;
            switch (je) {
              case 45:
                o++, ue(o) === 45 ? (o++, W !== 3 && H(C.Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead, o - 2, 2)) : H(C.Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead, o - 1, 1);
                break;
              case 38:
                o++, ue(o) === 38 ? (o++, W !== 2 && H(C.Operators_must_not_be_mixed_within_a_character_class_Wrap_it_in_a_nested_class_instead, o - 2, 2), ue(o) === 38 && (H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, o, 1, String.fromCharCode(je)), o++)) : H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, o - 1, 1, String.fromCharCode(je));
                break;
              default:
                switch (W) {
                  case 3:
                    H(C._0_expected, o, 0, "--");
                    break;
                  case 2:
                    H(C._0_expected, o, 0, "&&");
                    break;
                }
                break;
            }
            if (je = ue(o), j(je)) {
              H(C.Expected_a_class_set_operand);
              break;
            }
            Pt(), de && (de = Te);
          }
          Te = de;
        }
        function Pt() {
          switch (Te = !1, ue(o)) {
            case -1:
              return "";
            case 91:
              return o++, ze(), ur(93), "";
            case 92:
              if (o++, Cn()) return "";
              if (ue(o) === 113) return o++, ue(o) === 123 ? (o++, _t(), ur(125), "") : (H(C.q_must_be_followed_by_string_alternatives_enclosed_in_braces, o - 2, 2), "q");
              o--;
            default:
              return Ft();
          }
        }
        function _t() {
          B.assertEqual(z(o - 1), 123);
          let W = 0;
          for (; ; ) switch (ue(o)) {
            case -1:
              return;
            case 125:
              W !== 1 && (Te = !0);
              return;
            case 124:
              W !== 1 && (Te = !0), o++, T = o, W = 0;
              break;
            default:
              Ft(), W++;
              break;
          }
        }
        function Ft() {
          let W = ue(o);
          if (W === -1) return "";
          if (W === 92) {
            o++;
            let de = ue(o);
            switch (de) {
              case 98:
                return o++, "\b";
              case 38:
              case 45:
              case 33:
              case 35:
              case 37:
              case 44:
              case 58:
              case 59:
              case 60:
              case 61:
              case 62:
              case 64:
              case 96:
              case 126:
                return o++, String.fromCharCode(de);
              default:
                return Be(!1);
            }
          } else if (W === ue(o + 1)) switch (W) {
            case 38:
            case 33:
            case 35:
            case 37:
            case 42:
            case 43:
            case 44:
            case 46:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 96:
            case 126:
              return H(C.A_character_class_must_not_contain_a_reserved_double_punctuator_Did_you_mean_to_escape_it_with_backslash, o, 2), o += 2, N.substring(o - 2, o);
          }
          switch (W) {
            case 47:
            case 40:
            case 41:
            case 91:
            case 93:
            case 123:
            case 125:
            case 45:
            case 124:
              return H(C.Unexpected_0_Did_you_mean_to_escape_it_with_backslash, o, 1, String.fromCharCode(W)), o++, String.fromCharCode(W);
          }
          return Oa();
        }
        function Vt() {
          if (ue(o) === 92) {
            o++;
            let W = ue(o);
            switch (W) {
              case 98:
                return o++, "\b";
              case 45:
                return o++, String.fromCharCode(W);
              default:
                return Cn() ? "" : Be(!1);
            }
          } else return Oa();
        }
        function Cn() {
          B.assertEqual(z(o - 1), 92);
          let W = !1, de = o - 1, je = ue(o);
          switch (je) {
            case 100:
            case 68:
            case 115:
            case 83:
            case 119:
            case 87:
              return o++, !0;
            case 80:
              W = !0;
            case 112:
              if (o++, ue(o) === 123) {
                o++;
                let xe = o, J = Wr();
                if (ue(o) === 61) {
                  let ht = cf.get(J);
                  if (o === xe) H(C.Expected_a_Unicode_property_name);
                  else if (ht === void 0) {
                    H(C.Unknown_Unicode_property_name, xe, o - xe);
                    let lr = Wi(J, cf.keys(), gt);
                    lr && H(C.Did_you_mean_0, xe, o - xe, lr);
                  }
                  o++;
                  let bt = o, Mt = Wr();
                  if (o === bt) H(C.Expected_a_Unicode_property_value);
                  else if (ht !== void 0 && !ti[ht].has(Mt)) {
                    H(C.Unknown_Unicode_property_value, bt, o - bt);
                    let lr = Wi(Mt, ti[ht], gt);
                    lr && H(C.Did_you_mean_0, bt, o - bt, lr);
                  }
                } else if (o === xe) H(C.Expected_a_Unicode_property_name_or_value);
                else if (lf.has(J)) ve ? W ? H(C.Anything_that_would_possibly_match_more_than_a_single_character_is_invalid_inside_a_negated_character_class, xe, o - xe) : Te = !0 : H(C.Any_Unicode_property_that_would_possibly_match_more_than_a_single_character_is_only_available_when_the_Unicode_Sets_v_flag_is_set, xe, o - xe);
                else if (!ti.General_Category.has(J) && !uf.has(J)) {
                  H(C.Unknown_Unicode_property_name_or_value, xe, o - xe);
                  let ht = Wi(J, [...ti.General_Category, ...uf, ...lf], gt);
                  ht && H(C.Did_you_mean_0, xe, o - xe, ht);
                }
                ur(125), Se || H(C.Unicode_property_value_expressions_are_only_available_when_the_Unicode_u_flag_or_the_Unicode_Sets_v_flag_is_set, de, o - de);
              } else if (Ce) H(C._0_must_be_followed_by_a_Unicode_property_value_expression_enclosed_in_braces, o - 2, 2, String.fromCharCode(je));
              else return o--, !1;
              return !0;
          }
          return !1;
        }
        function Wr() {
          let W = "";
          for (; ; ) {
            let de = ue(o);
            if (de === -1 || !tf(de)) break;
            W += String.fromCharCode(de), o++;
          }
          return W;
        }
        function Oa() {
          let W = Se ? Bt(Le(o)) : 1;
          return o += W, W > 0 ? N.substring(o - W, o) : "";
        }
        function ur(W) {
          ue(o) === W ? o++ : H(C._0_expected, o, 0, String.fromCharCode(W));
        }
        cr(!1), Nr(Ge, (W) => {
          if (!(Ze != null && Ze.has(W.name)) && (H(C.There_is_no_capturing_group_named_0_in_this_regular_expression, W.pos, W.end - W.pos, W.name), Ze)) {
            let de = Wi(W.name, Ze, gt);
            de && H(C.Did_you_mean_0, W.pos, W.end - W.pos, de);
          }
        }), Nr(we, (W) => {
          W.value > qe && (qe ? H(C.This_backreference_refers_to_a_group_that_does_not_exist_There_are_only_0_capturing_groups_in_this_regular_expression, W.pos, W.end - W.pos, qe) : H(C.This_backreference_refers_to_a_group_that_does_not_exist_There_are_no_capturing_groups_in_this_regular_expression, W.pos, W.end - W.pos));
        });
      }
      function yt(K, Z) {
        let ee = U0.get(K);
        ee && e < ee && H(C.This_regular_expression_flag_is_only_available_when_targeting_0_or_later, o, Z, py(ee));
      }
      function or(K, Z, ee, ve) {
        let Se = rt(Z.trimStart(), ee);
        return Se === void 0 ? K : hr(K, { range: { pos: ve, end: o }, type: Se });
      }
      function rt(K, Z) {
        let ee = Z.exec(K);
        if (ee) switch (ee[1]) {
          case "ts-expect-error":
            return 0;
          case "ts-ignore":
            return 1;
        }
      }
      function jt(K) {
        return o = S, _ = Un(!K);
      }
      function tr() {
        return o = S, _ = Un(!0);
      }
      function on(K = !0) {
        return o = S = d, _ = zr(K);
      }
      function kn() {
        return _ === 48 ? (o = S + 1, _ = 30) : _;
      }
      function bn() {
        return _ === 81 ? (o = S + 1, _ = 63) : _;
      }
      function Rr() {
        return B.assert(_ === 61, "'reScanQuestionToken' should only be called on a '??'"), o = S + 1, _ = 58;
      }
      function zr(K = !0) {
        if (d = S = o, o >= $) return _ = 1;
        let Z = z(o);
        if (Z === 60) return z(o + 1) === 47 ? (o += 2, _ = 31) : (o++, _ = 30);
        if (Z === 123) return o++, _ = 19;
        let ee = 0;
        for (; o < $ && (Z = z(o), Z !== 123); ) {
          if (Z === 60) {
            if (ka(N, o)) return o = ei(N, o, H), _ = 7;
            break;
          }
          if (Z === 62 && H(C.Unexpected_token_Did_you_mean_or_gt, o, 1), Z === 125 && H(C.Unexpected_token_Did_you_mean_or_rbrace, o, 1), yr(Z) && ee === 0) ee = -1;
          else {
            if (!K && yr(Z) && ee > 0) break;
            Xi(Z) || (ee = o);
          }
          o++;
        }
        return v = N.substring(d, o), ee === -1 ? 13 : 12;
      }
      function jn() {
        if (Tt(_)) {
          for (; o < $; ) {
            if (z(o) === 45) {
              v += "-", o++;
              continue;
            }
            let K = o;
            if (v += xt(), o === K) break;
          }
          return He();
        }
        return _;
      }
      function $r() {
        switch (d = o, z(o)) {
          case 34:
          case 39:
            return v = an(!0), _ = 11;
          default:
            return ut();
        }
      }
      function Ne() {
        return o = S = d, $r();
      }
      function vn(K) {
        if (d = S = o, F = 0, o >= $) return _ = 1;
        for (let Z = z(o); o < $ && !yr(Z) && Z !== 96 && !(!K && (Z === 123 || Z === 64 && o - 1 >= 0 && Qi(z(o - 1)) && !(o + 1 < $ && Xi(z(o + 1))))); Z = ae(++o)) ;
        return o === S ? M() : (v = N.substring(S, o), _ = 82);
      }
      function M() {
        if (d = S = o, F = 0, o >= $) return _ = 1;
        let K = ae(o);
        switch (o += Bt(K), K) {
          case 9:
          case 11:
          case 12:
          case 32:
            for (; o < $ && Qi(z(o)); ) o++;
            return _ = 5;
          case 64:
            return _ = 60;
          case 13:
            z(o) === 10 && o++;
          case 10:
            return F |= 1, _ = 4;
          case 42:
            return _ = 42;
          case 123:
            return _ = 19;
          case 125:
            return _ = 20;
          case 91:
            return _ = 23;
          case 93:
            return _ = 24;
          case 40:
            return _ = 21;
          case 41:
            return _ = 22;
          case 60:
            return _ = 30;
          case 62:
            return _ = 32;
          case 61:
            return _ = 64;
          case 44:
            return _ = 28;
          case 46:
            return _ = 25;
          case 96:
            return _ = 62;
          case 35:
            return _ = 63;
          case 92:
            o--;
            let Z = Lt();
            if (Z >= 0 && tn(Z, e)) return v = jr(!0) + xt(), _ = He();
            let ee = Ir();
            return ee >= 0 && tn(ee, e) ? (o += 6, F |= 1024, v = String.fromCharCode(ee) + xt(), _ = He()) : (o++, _ = 0);
        }
        if (tn(K, e)) {
          let Z = K;
          for (; o < $ && Jn(Z = ae(o), e) || Z === 45; ) o += Bt(Z);
          return v = N.substring(S, o), Z === 92 && (v += xt()), _ = He();
        } else return _ = 0;
      }
      function oe(K, Z) {
        let ee = o, ve = d, Se = S, Ce = _, Te = v, qe = F, Ze = K();
        return (!Ze || Z) && (o = ee, d = ve, S = Se, _ = Ce, v = Te, F = qe), Ze;
      }
      function me(K, Z, ee) {
        let ve = $, Se = o, Ce = d, Te = S, qe = _, Ze = v, Ge = F, we = re;
        At(N, K, Z);
        let Lr = ee();
        return $ = ve, o = Se, d = Ce, S = Te, _ = qe, v = Ze, F = Ge, re = we, Lr;
      }
      function be(K) {
        return oe(K, !0);
      }
      function Xe(K) {
        return oe(K, !1);
      }
      function Qe() {
        return N;
      }
      function it() {
        re = void 0;
      }
      function At(K, Z, ee) {
        N = K || "", $ = ee === void 0 ? N.length : Z + ee, Gr(Z || 0);
      }
      function kt(K) {
        h = K;
      }
      function st(K) {
        e = K;
      }
      function ua(K) {
        i = K;
      }
      function Sr(K) {
        ge = K;
      }
      function qn(K) {
        he = K;
      }
      function Gr(K) {
        B.assert(K >= 0), o = K, d = K, S = K, _ = 0, v = void 0, F = 0;
      }
      function La(K) {
        ke += K ? 1 : -1;
      }
    }
    function ba(e, r) {
      return e.codePointAt(r);
    }
    function Bt(e) {
      return e >= 65536 ? 2 : e === -1 ? 0 : 1;
    }
    function sh(e) {
      if (B.assert(0 <= e && e <= 1114111), e <= 65535) return String.fromCharCode(e);
      let r = Math.floor((e - 65536) / 1024) + 55296, i = (e - 65536) % 1024 + 56320;
      return String.fromCharCode(r, i);
    }
    var oh = String.fromCodePoint ? (e) => String.fromCodePoint(e) : sh;
    function of(e) {
      return oh(e);
    }
    var cf = new Map(Object.entries({ General_Category: "General_Category", gc: "General_Category", Script: "Script", sc: "Script", Script_Extensions: "Script_Extensions", scx: "Script_Extensions" })), uf = /* @__PURE__ */ new Set(["ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased", "CWL", "Changes_When_NFKC_Casefolded", "CWKCF", "Changes_When_Titlecased", "CWT", "Changes_When_Uppercased", "CWU", "Dash", "Default_Ignorable_Code_Point", "DI", "Deprecated", "Dep", "Diacritic", "Dia", "Emoji", "Emoji_Component", "EComp", "Emoji_Modifier", "EMod", "Emoji_Modifier_Base", "EBase", "Emoji_Presentation", "EPres", "Extended_Pictographic", "ExtPict", "Extender", "Ext", "Grapheme_Base", "Gr_Base", "Grapheme_Extend", "Gr_Ext", "Hex_Digit", "Hex", "IDS_Binary_Operator", "IDSB", "IDS_Trinary_Operator", "IDST", "ID_Continue", "IDC", "ID_Start", "IDS", "Ideographic", "Ideo", "Join_Control", "Join_C", "Logical_Order_Exception", "LOE", "Lowercase", "Lower", "Math", "Noncharacter_Code_Point", "NChar", "Pattern_Syntax", "Pat_Syn", "Pattern_White_Space", "Pat_WS", "Quotation_Mark", "QMark", "Radical", "Regional_Indicator", "RI", "Sentence_Terminal", "STerm", "Soft_Dotted", "SD", "Terminal_Punctuation", "Term", "Unified_Ideograph", "UIdeo", "Uppercase", "Upper", "Variation_Selector", "VS", "White_Space", "space", "XID_Continue", "XIDC", "XID_Start", "XIDS"]), lf = /* @__PURE__ */ new Set(["Basic_Emoji", "Emoji_Keycap_Sequence", "RGI_Emoji_Modifier_Sequence", "RGI_Emoji_Flag_Sequence", "RGI_Emoji_Tag_Sequence", "RGI_Emoji_ZWJ_Sequence", "RGI_Emoji"]), ti = { General_Category: /* @__PURE__ */ new Set(["C", "Other", "Cc", "Control", "cntrl", "Cf", "Format", "Cn", "Unassigned", "Co", "Private_Use", "Cs", "Surrogate", "L", "Letter", "LC", "Cased_Letter", "Ll", "Lowercase_Letter", "Lm", "Modifier_Letter", "Lo", "Other_Letter", "Lt", "Titlecase_Letter", "Lu", "Uppercase_Letter", "M", "Mark", "Combining_Mark", "Mc", "Spacing_Mark", "Me", "Enclosing_Mark", "Mn", "Nonspacing_Mark", "N", "Number", "Nd", "Decimal_Number", "digit", "Nl", "Letter_Number", "No", "Other_Number", "P", "Punctuation", "punct", "Pc", "Connector_Punctuation", "Pd", "Dash_Punctuation", "Pe", "Close_Punctuation", "Pf", "Final_Punctuation", "Pi", "Initial_Punctuation", "Po", "Other_Punctuation", "Ps", "Open_Punctuation", "S", "Symbol", "Sc", "Currency_Symbol", "Sk", "Modifier_Symbol", "Sm", "Math_Symbol", "So", "Other_Symbol", "Z", "Separator", "Zl", "Line_Separator", "Zp", "Paragraph_Separator", "Zs", "Space_Separator"]), Script: /* @__PURE__ */ new Set(["Adlm", "Adlam", "Aghb", "Caucasian_Albanian", "Ahom", "Arab", "Arabic", "Armi", "Imperial_Aramaic", "Armn", "Armenian", "Avst", "Avestan", "Bali", "Balinese", "Bamu", "Bamum", "Bass", "Bassa_Vah", "Batk", "Batak", "Beng", "Bengali", "Bhks", "Bhaiksuki", "Bopo", "Bopomofo", "Brah", "Brahmi", "Brai", "Braille", "Bugi", "Buginese", "Buhd", "Buhid", "Cakm", "Chakma", "Cans", "Canadian_Aboriginal", "Cari", "Carian", "Cham", "Cher", "Cherokee", "Chrs", "Chorasmian", "Copt", "Coptic", "Qaac", "Cpmn", "Cypro_Minoan", "Cprt", "Cypriot", "Cyrl", "Cyrillic", "Deva", "Devanagari", "Diak", "Dives_Akuru", "Dogr", "Dogra", "Dsrt", "Deseret", "Dupl", "Duployan", "Egyp", "Egyptian_Hieroglyphs", "Elba", "Elbasan", "Elym", "Elymaic", "Ethi", "Ethiopic", "Geor", "Georgian", "Glag", "Glagolitic", "Gong", "Gunjala_Gondi", "Gonm", "Masaram_Gondi", "Goth", "Gothic", "Gran", "Grantha", "Grek", "Greek", "Gujr", "Gujarati", "Guru", "Gurmukhi", "Hang", "Hangul", "Hani", "Han", "Hano", "Hanunoo", "Hatr", "Hatran", "Hebr", "Hebrew", "Hira", "Hiragana", "Hluw", "Anatolian_Hieroglyphs", "Hmng", "Pahawh_Hmong", "Hmnp", "Nyiakeng_Puachue_Hmong", "Hrkt", "Katakana_Or_Hiragana", "Hung", "Old_Hungarian", "Ital", "Old_Italic", "Java", "Javanese", "Kali", "Kayah_Li", "Kana", "Katakana", "Kawi", "Khar", "Kharoshthi", "Khmr", "Khmer", "Khoj", "Khojki", "Kits", "Khitan_Small_Script", "Knda", "Kannada", "Kthi", "Kaithi", "Lana", "Tai_Tham", "Laoo", "Lao", "Latn", "Latin", "Lepc", "Lepcha", "Limb", "Limbu", "Lina", "Linear_A", "Linb", "Linear_B", "Lisu", "Lyci", "Lycian", "Lydi", "Lydian", "Mahj", "Mahajani", "Maka", "Makasar", "Mand", "Mandaic", "Mani", "Manichaean", "Marc", "Marchen", "Medf", "Medefaidrin", "Mend", "Mende_Kikakui", "Merc", "Meroitic_Cursive", "Mero", "Meroitic_Hieroglyphs", "Mlym", "Malayalam", "Modi", "Mong", "Mongolian", "Mroo", "Mro", "Mtei", "Meetei_Mayek", "Mult", "Multani", "Mymr", "Myanmar", "Nagm", "Nag_Mundari", "Nand", "Nandinagari", "Narb", "Old_North_Arabian", "Nbat", "Nabataean", "Newa", "Nkoo", "Nko", "Nshu", "Nushu", "Ogam", "Ogham", "Olck", "Ol_Chiki", "Orkh", "Old_Turkic", "Orya", "Oriya", "Osge", "Osage", "Osma", "Osmanya", "Ougr", "Old_Uyghur", "Palm", "Palmyrene", "Pauc", "Pau_Cin_Hau", "Perm", "Old_Permic", "Phag", "Phags_Pa", "Phli", "Inscriptional_Pahlavi", "Phlp", "Psalter_Pahlavi", "Phnx", "Phoenician", "Plrd", "Miao", "Prti", "Inscriptional_Parthian", "Rjng", "Rejang", "Rohg", "Hanifi_Rohingya", "Runr", "Runic", "Samr", "Samaritan", "Sarb", "Old_South_Arabian", "Saur", "Saurashtra", "Sgnw", "SignWriting", "Shaw", "Shavian", "Shrd", "Sharada", "Sidd", "Siddham", "Sind", "Khudawadi", "Sinh", "Sinhala", "Sogd", "Sogdian", "Sogo", "Old_Sogdian", "Sora", "Sora_Sompeng", "Soyo", "Soyombo", "Sund", "Sundanese", "Sylo", "Syloti_Nagri", "Syrc", "Syriac", "Tagb", "Tagbanwa", "Takr", "Takri", "Tale", "Tai_Le", "Talu", "New_Tai_Lue", "Taml", "Tamil", "Tang", "Tangut", "Tavt", "Tai_Viet", "Telu", "Telugu", "Tfng", "Tifinagh", "Tglg", "Tagalog", "Thaa", "Thaana", "Thai", "Tibt", "Tibetan", "Tirh", "Tirhuta", "Tnsa", "Tangsa", "Toto", "Ugar", "Ugaritic", "Vaii", "Vai", "Vith", "Vithkuqi", "Wara", "Warang_Citi", "Wcho", "Wancho", "Xpeo", "Old_Persian", "Xsux", "Cuneiform", "Yezi", "Yezidi", "Yiii", "Yi", "Zanb", "Zanabazar_Square", "Zinh", "Inherited", "Qaai", "Zyyy", "Common", "Zzzz", "Unknown"]), Script_Extensions: void 0 };
    ti.Script_Extensions = ti.Script;
    function _n(e) {
      return e.start + e.length;
    }
    function ch(e) {
      return e.length === 0;
    }
    function Kl(e, r) {
      if (e < 0) throw new Error("start < 0");
      if (r < 0) throw new Error("length < 0");
      return { start: e, length: r };
    }
    function uh(e, r) {
      return Kl(e, r - e);
    }
    function Zi(e) {
      return Kl(e.span.start, e.newLength);
    }
    function lh(e) {
      return ch(e.span) && e.newLength === 0;
    }
    function df(e, r) {
      if (r < 0) throw new Error("newLength < 0");
      return { span: e, newLength: r };
    }
    df(Kl(0, 0), 0);
    function pf(e, r) {
      for (; e; ) {
        let i = r(e);
        if (i === "quit") return;
        if (i) return e;
        e = e.parent;
      }
    }
    function Co(e) {
      return (e.flags & 16) === 0;
    }
    function dh(e, r) {
      if (e === void 0 || Co(e)) return e;
      for (e = e.original; e; ) {
        if (Co(e)) return e;
        e = e.original;
      }
    }
    function ri(e) {
      return e.length >= 2 && e.charCodeAt(0) === 95 && e.charCodeAt(1) === 95 ? "_" + e : e;
    }
    function Yi(e) {
      let r = e;
      return r.length >= 3 && r.charCodeAt(0) === 95 && r.charCodeAt(1) === 95 && r.charCodeAt(2) === 95 ? r.substr(1) : r;
    }
    function _r(e) {
      return Yi(e.escapedText);
    }
    function ff(e) {
      let r = Q1(e.escapedText);
      return r ? g0(r, aa) : void 0;
    }
    function Ul(e) {
      return e.valueDeclaration && Jh(e.valueDeclaration) ? _r(e.valueDeclaration.name) : Yi(e.escapedName);
    }
    function mf(e) {
      let r = e.parent.parent;
      if (r) {
        if (Nf(r)) return Eo(r);
        switch (r.kind) {
          case 243:
            if (r.declarationList && r.declarationList.declarations[0]) return Eo(r.declarationList.declarations[0]);
            break;
          case 244:
            let i = r.expression;
            switch (i.kind === 226 && i.operatorToken.kind === 64 && (i = i.left), i.kind) {
              case 211:
                return i.name;
              case 212:
                let u = i.argumentExpression;
                if (et(u)) return u;
            }
            break;
          case 217:
            return Eo(r.expression);
          case 256: {
            if (Nf(r.statement) || Xh(r.statement)) return Eo(r.statement);
            break;
          }
        }
      }
    }
    function Eo(e) {
      let r = hf(e);
      return r && et(r) ? r : void 0;
    }
    function ph(e) {
      return e.name || mf(e);
    }
    function fh(e) {
      return !!e.name;
    }
    function jl(e) {
      switch (e.kind) {
        case 80:
          return e;
        case 348:
        case 341: {
          let { name: i } = e;
          if (i.kind === 166) return i.right;
          break;
        }
        case 213:
        case 226: {
          let i = e;
          switch (Vl(i)) {
            case 1:
            case 4:
            case 5:
            case 3:
              return Hl(i.left);
            case 7:
            case 8:
            case 9:
              return i.arguments[1];
            default:
              return;
          }
        }
        case 346:
          return ph(e);
        case 340:
          return mf(e);
        case 277: {
          let { expression: i } = e;
          return et(i) ? i : void 0;
        }
        case 212:
          let r = e;
          if (Kf(r)) return r.argumentExpression;
      }
      return e.name;
    }
    function hf(e) {
      if (e !== void 0) return jl(e) || (l2(e) || d2(e) || hd(e) ? mh(e) : void 0);
    }
    function mh(e) {
      if (e.parent) {
        if (w_(e.parent) || l_(e.parent)) return e.parent.name;
        if (pi(e.parent) && e === e.parent.right) {
          if (et(e.parent.left)) return e.parent.left;
          if (Gf(e.parent.left)) return Hl(e.parent.left);
        } else if (f2(e.parent) && et(e.parent.name)) return e.parent.name;
      } else return;
    }
    function hh(e) {
      if (Rg(e)) return In(e.modifiers, dd);
    }
    function gh(e) {
      if (is(e, 98303)) return In(e.modifiers, Uh);
    }
    function gf(e, r) {
      if (e.name) if (et(e.name)) {
        let i = e.name.escapedText;
        return es(e.parent, r).filter((u) => C2(u) && et(u.name) && u.name.escapedText === i);
      } else {
        let i = e.parent.parameters.indexOf(e);
        B.assert(i > -1, "Parameters should always be in their parents' parameter list");
        let u = es(e.parent, r).filter(C2);
        if (i < u.length) return [u[i]];
      }
      return St;
    }
    function yh(e) {
      return gf(e, !1);
    }
    function _h(e) {
      return gf(e, !0);
    }
    function yf(e, r) {
      let i = e.name.escapedText;
      return es(e.parent, r).filter((u) => q_(u) && u.typeParameters.some((h) => h.name.escapedText === i));
    }
    function Th(e) {
      return yf(e, !1);
    }
    function xh(e) {
      return yf(e, !0);
    }
    function kh(e) {
      return ta(e, I_);
    }
    function bh(e) {
      return Dh(e, R_);
    }
    function vh(e) {
      return ta(e, L_, !0);
    }
    function Sh(e) {
      return ta(e, O_, !0);
    }
    function Ch(e) {
      return ta(e, M_, !0);
    }
    function Eh(e) {
      return ta(e, J_, !0);
    }
    function wh(e) {
      return ta(e, B_, !0);
    }
    function Ah(e) {
      return ta(e, U_, !0);
    }
    function Nh(e) {
      let r = ta(e, yd);
      if (r && r.typeExpression && r.typeExpression.type) return r;
    }
    function es(e, r) {
      var i;
      if (!Ql(e)) return St;
      let u = (i = e.jsDoc) == null ? void 0 : i.jsDocCache;
      if (u === void 0 || r) {
        let h = wg(e, r);
        B.assert(h.length < 2 || h[0] !== h[1]), u = E1(h, (T) => v2(T) ? T.tags : T), r || (e.jsDoc ?? (e.jsDoc = []), e.jsDoc.jsDocCache = u);
      }
      return u;
    }
    function _f(e) {
      return es(e, !1);
    }
    function ta(e, r, i) {
      return S1(es(e, i), r);
    }
    function Dh(e, r) {
      return _f(e).filter(r);
    }
    function ql(e) {
      return e.kind === 80 || e.kind === 81;
    }
    function Ph(e) {
      return Kn(e) && !!(e.flags & 64);
    }
    function Fh(e) {
      return us(e) && !!(e.flags & 64);
    }
    function Tf(e) {
      return u2(e) && !!(e.flags & 64);
    }
    function Ih(e) {
      let r = e.kind;
      return !!(e.flags & 64) && (r === 211 || r === 212 || r === 213 || r === 235);
    }
    function Rl(e) {
      return _d(e, 8);
    }
    function Lh(e) {
      return Uo(e) && !!(e.flags & 64);
    }
    function zl(e) {
      return e >= 166;
    }
    function xf(e) {
      return e >= 0 && e <= 165;
    }
    function Oh(e) {
      return xf(e.kind);
    }
    function ra(e) {
      return hn(e, "pos") && hn(e, "end");
    }
    function Mh(e) {
      return 9 <= e && e <= 15;
    }
    function kf(e) {
      return 15 <= e && e <= 18;
    }
    function ni(e) {
      var r;
      return et(e) && ((r = e.emitNode) == null ? void 0 : r.autoGenerate) !== void 0;
    }
    function bf(e) {
      var r;
      return wa(e) && ((r = e.emitNode) == null ? void 0 : r.autoGenerate) !== void 0;
    }
    function Jh(e) {
      return (Bo(e) || Rh(e)) && wa(e.name);
    }
    function Bn(e) {
      switch (e) {
        case 128:
        case 129:
        case 134:
        case 87:
        case 138:
        case 90:
        case 95:
        case 103:
        case 125:
        case 123:
        case 124:
        case 148:
        case 126:
        case 147:
        case 164:
          return !0;
      }
      return !1;
    }
    function Bh(e) {
      return !!(zf(e) & 31);
    }
    function Kh(e) {
      return Bh(e) || e === 126 || e === 164 || e === 129;
    }
    function Uh(e) {
      return Bn(e.kind);
    }
    function vf(e) {
      let r = e.kind;
      return r === 80 || r === 81 || r === 11 || r === 9 || r === 167;
    }
    function Sf(e) {
      return !!e && qh(e.kind);
    }
    function jh(e) {
      switch (e) {
        case 262:
        case 174:
        case 176:
        case 177:
        case 178:
        case 218:
        case 219:
          return !0;
        default:
          return !1;
      }
    }
    function qh(e) {
      switch (e) {
        case 173:
        case 179:
        case 323:
        case 180:
        case 181:
        case 184:
        case 317:
        case 185:
          return !0;
        default:
          return jh(e);
      }
    }
    function ai(e) {
      return e && (e.kind === 263 || e.kind === 231);
    }
    function Rh(e) {
      switch (e.kind) {
        case 174:
        case 177:
        case 178:
          return !0;
        default:
          return !1;
      }
    }
    function zh(e) {
      let r = e.kind;
      return r === 303 || r === 304 || r === 305 || r === 174 || r === 177 || r === 178;
    }
    function $h(e) {
      return ey(e.kind);
    }
    function Gh(e) {
      if (e) {
        let r = e.kind;
        return r === 207 || r === 206;
      }
      return !1;
    }
    function Wh(e) {
      let r = e.kind;
      return r === 209 || r === 210;
    }
    function Vh(e) {
      switch (e.kind) {
        case 260:
        case 169:
        case 208:
          return !0;
      }
      return !1;
    }
    function ii(e) {
      return Cf(Rl(e).kind);
    }
    function Cf(e) {
      switch (e) {
        case 211:
        case 212:
        case 214:
        case 213:
        case 284:
        case 285:
        case 288:
        case 215:
        case 209:
        case 217:
        case 210:
        case 231:
        case 218:
        case 80:
        case 81:
        case 14:
        case 9:
        case 10:
        case 11:
        case 15:
        case 228:
        case 97:
        case 106:
        case 110:
        case 112:
        case 108:
        case 235:
        case 233:
        case 236:
        case 102:
        case 282:
          return !0;
        default:
          return !1;
      }
    }
    function Hh(e) {
      return Ef(Rl(e).kind);
    }
    function Ef(e) {
      switch (e) {
        case 224:
        case 225:
        case 220:
        case 221:
        case 222:
        case 223:
        case 216:
          return !0;
        default:
          return Cf(e);
      }
    }
    function Xh(e) {
      return Qh(Rl(e).kind);
    }
    function Qh(e) {
      switch (e) {
        case 227:
        case 229:
        case 219:
        case 226:
        case 230:
        case 234:
        case 232:
        case 356:
        case 355:
        case 238:
          return !0;
        default:
          return Ef(e);
      }
    }
    function Zh(e) {
      return e === 219 || e === 208 || e === 263 || e === 231 || e === 175 || e === 176 || e === 266 || e === 306 || e === 281 || e === 262 || e === 218 || e === 177 || e === 273 || e === 271 || e === 276 || e === 264 || e === 291 || e === 174 || e === 173 || e === 267 || e === 270 || e === 274 || e === 280 || e === 169 || e === 303 || e === 172 || e === 171 || e === 178 || e === 304 || e === 265 || e === 168 || e === 260 || e === 346 || e === 338 || e === 348 || e === 202;
    }
    function wf(e) {
      return e === 262 || e === 282 || e === 263 || e === 264 || e === 265 || e === 266 || e === 267 || e === 272 || e === 271 || e === 278 || e === 277 || e === 270;
    }
    function Af(e) {
      return e === 252 || e === 251 || e === 259 || e === 246 || e === 244 || e === 242 || e === 249 || e === 250 || e === 248 || e === 245 || e === 256 || e === 253 || e === 255 || e === 257 || e === 258 || e === 243 || e === 247 || e === 254 || e === 353;
    }
    function Nf(e) {
      return e.kind === 168 ? e.parent && e.parent.kind !== 345 || Ca(e) : Zh(e.kind);
    }
    function Yh(e) {
      let r = e.kind;
      return Af(r) || wf(r) || eg(e);
    }
    function eg(e) {
      return e.kind !== 241 || e.parent !== void 0 && (e.parent.kind === 258 || e.parent.kind === 299) ? !1 : !mg(e);
    }
    function tg(e) {
      let r = e.kind;
      return Af(r) || wf(r) || r === 241;
    }
    function Df(e) {
      return e.kind >= 309 && e.kind <= 351;
    }
    function rg(e) {
      return e.kind === 320 || e.kind === 319 || e.kind === 321 || ig(e) || ng(e) || F_(e) || S2(e);
    }
    function ng(e) {
      return e.kind >= 327 && e.kind <= 351;
    }
    function wo(e) {
      return e.kind === 178;
    }
    function Ao(e) {
      return e.kind === 177;
    }
    function va(e) {
      if (!Ql(e)) return !1;
      let { jsDoc: r } = e;
      return !!r && r.length > 0;
    }
    function ag(e) {
      return !!e.initializer;
    }
    function $l(e) {
      return e.kind === 11 || e.kind === 15;
    }
    function ig(e) {
      return e.kind === 324 || e.kind === 325 || e.kind === 326;
    }
    function Pf(e) {
      return (e.flags & 33554432) !== 0;
    }
    function sg(e, r) {
      let i = e.entries();
      for (let [u, h] of i) {
        let T = r(h, u);
        if (T) return T;
      }
    }
    function og(e) {
      return e.end - e.pos;
    }
    function Ff(e) {
      return cg(e), (e.flags & 1048576) !== 0;
    }
    function cg(e) {
      e.flags & 2097152 || ((e.flags & 262144 || Gt(e, Ff)) && (e.flags |= 1048576), e.flags |= 2097152);
    }
    function na(e) {
      for (; e && e.kind !== 307; ) e = e.parent;
      return e;
    }
    function Sa(e) {
      return e === void 0 ? !0 : e.pos === e.end && e.pos >= 0 && e.kind !== 1;
    }
    function Gl(e) {
      return !Sa(e);
    }
    function No(e, r, i) {
      if (Sa(e)) return e.pos;
      if (Df(e) || e.kind === 12) return yn((r ?? na(e)).text, e.pos, !1, !0);
      if (i && va(e)) return No(e.jsDoc[0], r);
      if (e.kind === 352) {
        r ?? (r = na(e));
        let u = bl(E2(e, r));
        if (u) return No(u, r, i);
      }
      return yn((r ?? na(e)).text, e.pos, !1, !1, hg(e));
    }
    function If(e, r, i = !1) {
      return ts(e.text, r, i);
    }
    function ug(e) {
      return !!pf(e, N_);
    }
    function ts(e, r, i = !1) {
      if (Sa(r)) return "";
      let u = e.substring(i ? r.pos : yn(e, r.pos), r.end);
      return ug(r) && (u = u.split(/\r\n|\n|\r/).map((h) => h.replace(/^\s*\*/, "").trimStart()).join(`
`)), u;
    }
    function si(e) {
      let r = e.emitNode;
      return r && r.flags || 0;
    }
    function lg(e, r, i) {
      B.assertGreaterThanOrEqual(r, 0), B.assertGreaterThanOrEqual(i, 0), B.assertLessThanOrEqual(r, e.length), B.assertLessThanOrEqual(r + i, e.length);
    }
    function Do(e) {
      return e.kind === 244 && e.expression.kind === 11;
    }
    function Wl(e) {
      return !!(si(e) & 2097152);
    }
    function Lf(e) {
      return Wl(e) && m2(e);
    }
    function dg(e) {
      return et(e.name) && !e.initializer;
    }
    function Of(e) {
      return Wl(e) && jo(e) && _l(e.declarationList.declarations, dg);
    }
    function pg(e, r) {
      let i = e.kind === 169 || e.kind === 168 || e.kind === 218 || e.kind === 219 || e.kind === 217 || e.kind === 260 || e.kind === 281 ? kl(ah(r, e.pos), Jl(r, e.pos)) : Jl(r, e.pos);
      return In(i, (u) => u.end <= e.end && r.charCodeAt(u.pos + 1) === 42 && r.charCodeAt(u.pos + 2) === 42 && r.charCodeAt(u.pos + 3) !== 47);
    }
    function fg(e) {
      if (e) switch (e.kind) {
        case 208:
        case 306:
        case 169:
        case 303:
        case 172:
        case 171:
        case 304:
        case 260:
          return !0;
      }
      return !1;
    }
    function mg(e) {
      return e && e.kind === 241 && Sf(e.parent);
    }
    function Mf(e) {
      let r = e.kind;
      return (r === 211 || r === 212) && e.expression.kind === 108;
    }
    function Ca(e) {
      return !!e && !!(e.flags & 524288);
    }
    function hg(e) {
      return !!e && !!(e.flags & 16777216);
    }
    function gg(e) {
      for (; Fo(e, !0); ) e = e.right;
      return e;
    }
    function yg(e) {
      return et(e) && e.escapedText === "exports";
    }
    function _g(e) {
      return et(e) && e.escapedText === "module";
    }
    function Jf(e) {
      return (Kn(e) || Bf(e)) && _g(e.expression) && as(e) === "exports";
    }
    function Vl(e) {
      let r = xg(e);
      return r === 5 || Ca(e) ? r : 0;
    }
    function Tg(e) {
      return Gi(e.arguments) === 3 && Kn(e.expression) && et(e.expression.expression) && _r(e.expression.expression) === "Object" && _r(e.expression.name) === "defineProperty" && Po(e.arguments[1]) && ns(e.arguments[0], !0);
    }
    function Bf(e) {
      return us(e) && Po(e.argumentExpression);
    }
    function rs(e, r) {
      return Kn(e) && (!r && e.expression.kind === 110 || et(e.name) && ns(e.expression, !0)) || Kf(e, r);
    }
    function Kf(e, r) {
      return Bf(e) && (!r && e.expression.kind === 110 || nd(e.expression) || rs(e.expression, !0));
    }
    function ns(e, r) {
      return nd(e) || rs(e, r);
    }
    function xg(e) {
      if (u2(e)) {
        if (!Tg(e)) return 0;
        let r = e.arguments[0];
        return yg(r) || Jf(r) ? 8 : rs(r) && as(r) === "prototype" ? 9 : 7;
      }
      return e.operatorToken.kind !== 64 || !Gf(e.left) || kg(gg(e)) ? 0 : ns(e.left.expression, !0) && as(e.left) === "prototype" && c2(vg(e)) ? 6 : bg(e.left);
    }
    function kg(e) {
      return f_(e) && li(e.expression) && e.expression.text === "0";
    }
    function Hl(e) {
      if (Kn(e)) return e.name;
      let r = Zl(e.argumentExpression);
      return li(r) || $l(r) ? r : e;
    }
    function as(e) {
      let r = Hl(e);
      if (r) {
        if (et(r)) return r.escapedText;
        if ($l(r) || li(r)) return ri(r.text);
      }
    }
    function bg(e) {
      if (e.expression.kind === 110) return 4;
      if (Jf(e)) return 2;
      if (ns(e.expression, !0)) {
        if (Zg(e.expression)) return 3;
        let r = e;
        for (; !et(r.expression); ) r = r.expression;
        let i = r.expression;
        if ((i.escapedText === "exports" || i.escapedText === "module" && as(r) === "exports") && rs(e)) return 1;
        if (ns(e, !0) || us(e) && Jg(e)) return 5;
      }
      return 0;
    }
    function vg(e) {
      for (; pi(e.right); ) e = e.right;
      return e.right;
    }
    function Sg(e) {
      return p2(e) && pi(e.expression) && Vl(e.expression) !== 0 && pi(e.expression.right) && (e.expression.right.operatorToken.kind === 57 || e.expression.right.operatorToken.kind === 61) ? e.expression.right.right : void 0;
    }
    function Cg(e) {
      switch (e.kind) {
        case 243:
          let r = Xl(e);
          return r && r.initializer;
        case 172:
          return e.initializer;
        case 303:
          return e.initializer;
      }
    }
    function Xl(e) {
      return jo(e) ? bl(e.declarationList.declarations) : void 0;
    }
    function Eg(e) {
      return ls(e) && e.body && e.body.kind === 267 ? e.body : void 0;
    }
    function Ql(e) {
      switch (e.kind) {
        case 219:
        case 226:
        case 241:
        case 252:
        case 179:
        case 296:
        case 263:
        case 231:
        case 175:
        case 176:
        case 185:
        case 180:
        case 251:
        case 259:
        case 246:
        case 212:
        case 242:
        case 1:
        case 266:
        case 306:
        case 277:
        case 278:
        case 281:
        case 244:
        case 249:
        case 250:
        case 248:
        case 262:
        case 218:
        case 184:
        case 177:
        case 80:
        case 245:
        case 272:
        case 271:
        case 181:
        case 264:
        case 317:
        case 323:
        case 256:
        case 174:
        case 173:
        case 267:
        case 202:
        case 270:
        case 210:
        case 169:
        case 217:
        case 211:
        case 303:
        case 172:
        case 171:
        case 253:
        case 240:
        case 178:
        case 304:
        case 305:
        case 255:
        case 257:
        case 258:
        case 265:
        case 168:
        case 260:
        case 243:
        case 247:
        case 254:
          return !0;
        default:
          return !1;
      }
    }
    function wg(e, r) {
      let i;
      fg(e) && ag(e) && va(e.initializer) && (i = gr(i, Uf(e, e.initializer.jsDoc)));
      let u = e;
      for (; u && u.parent; ) {
        if (va(u) && (i = gr(i, Uf(e, u.jsDoc))), u.kind === 169) {
          i = gr(i, (r ? _h : yh)(u));
          break;
        }
        if (u.kind === 168) {
          i = gr(i, (r ? xh : Th)(u));
          break;
        }
        u = Ng(u);
      }
      return i || St;
    }
    function Uf(e, r) {
      let i = o0(r);
      return E1(r, (u) => {
        if (u === i) {
          let h = In(u.tags, (T) => Ag(e, T));
          return u.tags === h ? [u] : h;
        } else return In(u.tags, K_);
      });
    }
    function Ag(e, r) {
      return !(yd(r) || z_(r)) || !r.parent || !v2(r.parent) || !md(r.parent.parent) || r.parent.parent === e;
    }
    function Ng(e) {
      let r = e.parent;
      if (r.kind === 303 || r.kind === 277 || r.kind === 172 || r.kind === 244 && e.kind === 211 || r.kind === 253 || Eg(r) || Fo(e)) return r;
      if (r.parent && (Xl(r.parent) === e || Fo(r))) return r.parent;
      if (r.parent && r.parent.parent && (Xl(r.parent.parent) || Cg(r.parent.parent) === e || Sg(r.parent.parent))) return r.parent.parent;
    }
    function Zl(e, r) {
      return _d(e, 1);
    }
    function Dg(e) {
      let r = Pg(e);
      if (r && Ca(e)) {
        let i = kh(e);
        if (i) return i.class;
      }
      return r;
    }
    function Pg(e) {
      let r = Yl(e.heritageClauses, 96);
      return r && r.types.length > 0 ? r.types[0] : void 0;
    }
    function Fg(e) {
      if (Ca(e)) return bh(e).map((r) => r.class);
      {
        let r = Yl(e.heritageClauses, 119);
        return r == null ? void 0 : r.types;
      }
    }
    function Ig(e) {
      return gd(e) ? Lg(e) || St : ai(e) && kl(Cl(Dg(e)), Fg(e)) || St;
    }
    function Lg(e) {
      let r = Yl(e.heritageClauses, 96);
      return r ? r.types : void 0;
    }
    function Yl(e, r) {
      if (e) {
        for (let i of e) if (i.token === r) return i;
      }
    }
    function aa(e) {
      return 83 <= e && e <= 165;
    }
    function Og(e) {
      return 19 <= e && e <= 79;
    }
    function ed(e) {
      return aa(e) || Og(e);
    }
    function Po(e) {
      return $l(e) || li(e);
    }
    function Mg(e) {
      return m_(e) && (e.operator === 40 || e.operator === 41) && li(e.operand);
    }
    function Jg(e) {
      if (!(e.kind === 167 || e.kind === 212)) return !1;
      let r = us(e) ? Zl(e.argumentExpression) : e.expression;
      return !Po(r) && !Mg(r);
    }
    function Bg(e) {
      return ql(e) ? _r(e) : b2(e) ? vy(e) : e.text;
    }
    function oi(e) {
      return ss(e.pos) || ss(e.end);
    }
    function td(e) {
      switch (e) {
        case 61:
          return 4;
        case 57:
          return 5;
        case 56:
          return 6;
        case 52:
          return 7;
        case 53:
          return 8;
        case 51:
          return 9;
        case 35:
        case 36:
        case 37:
        case 38:
          return 10;
        case 30:
        case 32:
        case 33:
        case 34:
        case 104:
        case 103:
        case 130:
        case 152:
          return 11;
        case 48:
        case 49:
        case 50:
          return 12;
        case 40:
        case 41:
          return 13;
        case 42:
        case 44:
        case 45:
          return 14;
        case 43:
          return 15;
      }
      return -1;
    }
    function rd(e) {
      return !!((e.templateFlags || 0) & 2048);
    }
    function Kg(e) {
      return e && !!(My(e) ? rd(e) : rd(e.head) || $t(e.templateSpans, (r) => rd(r.literal)));
    }
    new Map(Object.entries({ "	": "\\t", "\v": "\\v", "\f": "\\f", "\b": "\\b", "\r": "\\r", "\n": "\\n", "\\": "\\\\", '"': '\\"', "'": "\\'", "`": "\\`", "\u2028": "\\u2028", "\u2029": "\\u2029", "": "\\u0085", "\r\n": "\\r\\n" })), new Map(Object.entries({ '"': "&quot;", "'": "&apos;" }));
    function Ug(e) {
      return !!e && e.kind === 80 && jg(e);
    }
    function jg(e) {
      return e.escapedText === "this";
    }
    function is(e, r) {
      return !!zg(e, r);
    }
    function qg(e) {
      return is(e, 256);
    }
    function Rg(e) {
      return is(e, 32768);
    }
    function zg(e, r) {
      return Gg(e) & r;
    }
    function $g(e, r, i) {
      return e.kind >= 0 && e.kind <= 165 ? 0 : (e.modifierFlagsCache & 536870912 || (e.modifierFlagsCache = Rf(e) | 536870912), i || r && Ca(e) ? (!(e.modifierFlagsCache & 268435456) && e.parent && (e.modifierFlagsCache |= jf(e) | 268435456), qf(e.modifierFlagsCache)) : Wg(e.modifierFlagsCache));
    }
    function Gg(e) {
      return $g(e, !1);
    }
    function jf(e) {
      let r = 0;
      return e.parent && !Jo(e) && (Ca(e) && (vh(e) && (r |= 8388608), Sh(e) && (r |= 16777216), Ch(e) && (r |= 33554432), Eh(e) && (r |= 67108864), wh(e) && (r |= 134217728)), Ah(e) && (r |= 65536)), r;
    }
    function Wg(e) {
      return e & 65535;
    }
    function qf(e) {
      return e & 131071 | (e & 260046848) >>> 23;
    }
    function Vg(e) {
      return qf(jf(e));
    }
    function Hg(e) {
      return Rf(e) | Vg(e);
    }
    function Rf(e) {
      let r = xd(e) ? Dr(e.modifiers) : 0;
      return (e.flags & 8 || e.kind === 80 && e.flags & 4096) && (r |= 32), r;
    }
    function Dr(e) {
      let r = 0;
      if (e) for (let i of e) r |= zf(i.kind);
      return r;
    }
    function zf(e) {
      switch (e) {
        case 126:
          return 256;
        case 125:
          return 1;
        case 124:
          return 4;
        case 123:
          return 2;
        case 128:
          return 64;
        case 129:
          return 512;
        case 95:
          return 32;
        case 138:
          return 128;
        case 87:
          return 4096;
        case 90:
          return 2048;
        case 134:
          return 1024;
        case 148:
          return 8;
        case 164:
          return 16;
        case 103:
          return 8192;
        case 147:
          return 16384;
        case 170:
          return 32768;
      }
      return 0;
    }
    function Xg(e) {
      return e === 76 || e === 77 || e === 78;
    }
    function $f(e) {
      return e >= 64 && e <= 79;
    }
    function Fo(e, r) {
      return pi(e) && (r ? e.operatorToken.kind === 64 : $f(e.operatorToken.kind)) && ii(e.left);
    }
    function nd(e) {
      return e.kind === 80 || Qg(e);
    }
    function Qg(e) {
      return Kn(e) && et(e.name) && nd(e.expression);
    }
    function Zg(e) {
      return rs(e) && as(e) === "prototype";
    }
    function ad(e) {
      return e.flags & 3899393 ? e.objectFlags : 0;
    }
    function Yg(e) {
      let r;
      return Gt(e, (i) => {
        Gl(i) && (r = i);
      }, (i) => {
        for (let u = i.length - 1; u >= 0; u--) if (Gl(i[u])) {
          r = i[u];
          break;
        }
      }), r;
    }
    function ey(e) {
      return e >= 182 && e <= 205 || e === 133 || e === 159 || e === 150 || e === 163 || e === 151 || e === 136 || e === 154 || e === 155 || e === 116 || e === 157 || e === 146 || e === 141 || e === 233 || e === 312 || e === 313 || e === 314 || e === 315 || e === 316 || e === 317 || e === 318;
    }
    function Gf(e) {
      return e.kind === 211 || e.kind === 212;
    }
    function ty(e, r) {
      this.flags = e, this.escapedName = r, this.declarations = void 0, this.valueDeclaration = void 0, this.id = 0, this.mergeId = 0, this.parent = void 0, this.members = void 0, this.exports = void 0, this.exportSymbol = void 0, this.constEnumOnlyModule = void 0, this.isReferenced = void 0, this.lastAssignmentPos = void 0, this.links = void 0;
    }
    function ry(e, r) {
      this.flags = r, (B.isDebugging || xo) && (this.checker = e);
    }
    function ny(e, r) {
      this.flags = r, B.isDebugging && (this.checker = e);
    }
    function id(e, r, i) {
      this.pos = r, this.end = i, this.kind = e, this.id = 0, this.flags = 0, this.modifierFlagsCache = 0, this.transformFlags = 0, this.parent = void 0, this.original = void 0, this.emitNode = void 0;
    }
    function ay(e, r, i) {
      this.pos = r, this.end = i, this.kind = e, this.id = 0, this.flags = 0, this.transformFlags = 0, this.parent = void 0, this.emitNode = void 0;
    }
    function iy(e, r, i) {
      this.pos = r, this.end = i, this.kind = e, this.id = 0, this.flags = 0, this.transformFlags = 0, this.parent = void 0, this.original = void 0, this.emitNode = void 0;
    }
    function sy(e, r, i) {
      this.fileName = e, this.text = r, this.skipTrivia = i || ((u) => u);
    }
    var Ct = { getNodeConstructor: () => id, getTokenConstructor: () => ay, getIdentifierConstructor: () => iy, getPrivateIdentifierConstructor: () => id, getSourceFileConstructor: () => id, getSymbolConstructor: () => ty, getTypeConstructor: () => ry, getSignatureConstructor: () => ny, getSourceMapSourceConstructor: () => sy }, oy = [];
    function cy(e) {
      Object.assign(Ct, e), Nr(oy, (r) => r(Ct));
    }
    function uy(e, r) {
      return e.replace(/\{(\d+)\}/g, (i, u) => "" + B.checkDefined(r[+u]));
    }
    function ly(e) {
      return e.message;
    }
    function ci(e, r, i, u, h, ...T) {
      i + u > r.length && (u = r.length - i), lg(r, i, u);
      let w = ly(h);
      return $t(T) && (w = uy(w, T)), { file: void 0, start: i, length: u, messageText: w, category: h.category, code: h.code, reportsUnnecessary: h.reportsUnnecessary, fileName: e };
    }
    function dy(e) {
      return e.file === void 0 && e.start !== void 0 && e.length !== void 0 && typeof e.fileName == "string";
    }
    function Wf(e, r) {
      let i = r.fileName || "", u = r.text.length;
      B.assertEqual(e.fileName, i), B.assertLessThanOrEqual(e.start, u), B.assertLessThanOrEqual(e.start + e.length, u);
      let h = { file: r, start: e.start, length: e.length, messageText: e.messageText, category: e.category, code: e.code, reportsUnnecessary: e.reportsUnnecessary };
      if (e.relatedInformation) {
        h.relatedInformation = [];
        for (let T of e.relatedInformation) dy(T) && T.fileName === i ? (B.assertLessThanOrEqual(T.start, u), B.assertLessThanOrEqual(T.start + T.length, u), h.relatedInformation.push(Wf(T, r))) : h.relatedInformation.push(T);
      }
      return h;
    }
    function Ea(e, r) {
      let i = [];
      for (let u of e) i.push(Wf(u, r));
      return i;
    }
    function Vf(e) {
      return e === 4 || e === 2 || e === 1 || e === 6 ? 1 : 0;
    }
    function py(e) {
      return sg(targetOptionDeclaration.type, (r, i) => r === e ? i : void 0);
    }
    function fy(e, r) {
      return r || my(e) || 3;
    }
    function my(e) {
      switch (e.substr(e.lastIndexOf(".")).toLowerCase()) {
        case ".js":
        case ".cjs":
        case ".mjs":
          return 1;
        case ".jsx":
          return 2;
        case ".ts":
        case ".cts":
        case ".mts":
          return 3;
        case ".tsx":
          return 4;
        case ".json":
          return 6;
        default:
          return 0;
      }
    }
    var Hf = [[".ts", ".tsx", ".d.ts"], [".cts", ".d.cts"], [".mts", ".d.mts"]];
    C1(Hf), [...Hf];
    var hy = [[".js", ".jsx"], [".mjs"], [".cjs"]];
    C1(hy);
    var gy = [".d.ts", ".d.cts", ".d.mts"];
    function ss(e) {
      return !(e >= 0);
    }
    function Io(e, ...r) {
      return r.length && (e.relatedInformation || (e.relatedInformation = []), B.assert(e.relatedInformation !== St, "Diagnostic had empty array singleton for related info, but is still being constructed!"), e.relatedInformation.push(...r)), e;
    }
    function yy(e) {
      let r;
      switch (e.charCodeAt(1)) {
        case 98:
        case 66:
          r = 1;
          break;
        case 111:
        case 79:
          r = 3;
          break;
        case 120:
        case 88:
          r = 4;
          break;
        default:
          let $ = e.length - 1, d = 0;
          for (; e.charCodeAt(d) === 48; ) d++;
          return e.slice(d, $) || "0";
      }
      let i = 2, u = e.length - 1, h = (u - i) * r, T = new Uint16Array((h >>> 4) + (h & 15 ? 1 : 0));
      for (let $ = u - 1, d = 0; $ >= i; $--, d += r) {
        let S = d >>> 4, _ = e.charCodeAt($), v = (_ <= 57 ? _ - 48 : 10 + _ - (_ <= 70 ? 65 : 97)) << (d & 15);
        T[S] |= v;
        let F = v >>> 16;
        F && (T[S + 1] |= F);
      }
      let w = "", N = T.length - 1, o = !0;
      for (; o; ) {
        let $ = 0;
        o = !1;
        for (let d = N; d >= 0; d--) {
          let S = $ << 16 | T[d], _ = S / 10 | 0;
          T[d] = _, $ = S - _ * 10, _ && !o && (N = d, o = !0);
        }
        w = $ + w;
      }
      return w;
    }
    function _y({ negative: e, base10Value: r }) {
      return (e && r !== "0" ? "-" : "") + r;
    }
    function sd(e, r) {
      return e.pos = r, e;
    }
    function Ty(e, r) {
      return e.end = r, e;
    }
    function ia(e, r, i) {
      return Ty(sd(e, r), i);
    }
    function Xf(e, r, i) {
      return ia(e, r, r + i);
    }
    function od(e, r) {
      return e && r && (e.parent = r), e;
    }
    function xy(e, r) {
      if (!e) return e;
      return Z2(e, Df(e) ? i : h), e;
      function i(T, w) {
        if (T.parent === w) return "skip";
        od(T, w);
      }
      function u(T) {
        if (va(T)) for (let w of T.jsDoc) i(w, T), Z2(w, i);
      }
      function h(T, w) {
        return i(T, w) || u(T);
      }
    }
    function ky(e) {
      return !!(e.flags & 262144 && e.isThisType);
    }
    function by(e) {
      var r;
      return ((r = getSnippetElement(e)) == null ? void 0 : r.kind) === 0;
    }
    function vy(e) {
      return `${_r(e.namespace)}:${_r(e.name)}`;
    }
    var cd = ["assert", "assert/strict", "async_hooks", "buffer", "child_process", "cluster", "console", "constants", "crypto", "dgram", "diagnostics_channel", "dns", "dns/promises", "domain", "events", "fs", "fs/promises", "http", "http2", "https", "inspector", "inspector/promises", "module", "net", "os", "path", "path/posix", "path/win32", "perf_hooks", "process", "punycode", "querystring", "readline", "readline/promises", "repl", "stream", "stream/consumers", "stream/promises", "stream/web", "string_decoder", "sys", "test/mock_loader", "timers", "timers/promises", "tls", "trace_events", "tty", "url", "util", "util/types", "v8", "vm", "wasi", "worker_threads", "zlib"];
    new Set(cd);
    var Sy = /* @__PURE__ */ new Set(["node:sea", "node:sqlite", "node:test", "node:test/reporters"]);
    [...cd, ...cd.map((e) => `node:${e}`), ...Sy];
    function Cy() {
      let e, r, i, u, h;
      return { createBaseSourceFileNode: T, createBaseIdentifierNode: w, createBasePrivateIdentifierNode: N, createBaseTokenNode: o, createBaseNode: $ };
      function T(d) {
        return new (h || (h = Ct.getSourceFileConstructor()))(d, -1, -1);
      }
      function w(d) {
        return new (i || (i = Ct.getIdentifierConstructor()))(d, -1, -1);
      }
      function N(d) {
        return new (u || (u = Ct.getPrivateIdentifierConstructor()))(d, -1, -1);
      }
      function o(d) {
        return new (r || (r = Ct.getTokenConstructor()))(d, -1, -1);
      }
      function $(d) {
        return new (e || (e = Ct.getNodeConstructor()))(d, -1, -1);
      }
    }
    var Ey = { getParenthesizeLeftSideOfBinaryForOperator: (e) => gt, getParenthesizeRightSideOfBinaryForOperator: (e) => gt, parenthesizeLeftSideOfBinary: (e, r) => r, parenthesizeRightSideOfBinary: (e, r, i) => i, parenthesizeExpressionOfComputedPropertyName: gt, parenthesizeConditionOfConditionalExpression: gt, parenthesizeBranchOfConditionalExpression: gt, parenthesizeExpressionOfExportDefault: gt, parenthesizeExpressionOfNew: (e) => gn(e, ii), parenthesizeLeftSideOfAccess: (e) => gn(e, ii), parenthesizeOperandOfPostfixUnary: (e) => gn(e, ii), parenthesizeOperandOfPrefixUnary: (e) => gn(e, Hh), parenthesizeExpressionsOfCommaDelimitedList: (e) => gn(e, ra), parenthesizeExpressionForDisallowedComma: gt, parenthesizeExpressionOfExpressionStatement: gt, parenthesizeConciseBodyOfArrowFunction: gt, parenthesizeCheckTypeOfConditionalType: gt, parenthesizeExtendsTypeOfConditionalType: gt, parenthesizeConstituentTypesOfUnionType: (e) => gn(e, ra), parenthesizeConstituentTypeOfUnionType: gt, parenthesizeConstituentTypesOfIntersectionType: (e) => gn(e, ra), parenthesizeConstituentTypeOfIntersectionType: gt, parenthesizeOperandOfTypeOperator: gt, parenthesizeOperandOfReadonlyTypeOperator: gt, parenthesizeNonArrayTypeOfPostfixType: gt, parenthesizeElementTypesOfTupleType: (e) => gn(e, ra), parenthesizeElementTypeOfTupleType: gt, parenthesizeTypeOfOptionalType: gt, parenthesizeTypeArguments: (e) => e && gn(e, ra), parenthesizeLeadingTypeArgument: gt }, Lo = 0, wy = [];
    function ud(e, r) {
      let i = e & 8 ? gt : Fy, u = N1(() => e & 1 ? Ey : createParenthesizerRules(ge)), h = N1(() => e & 2 ? nullNodeConverters : createNodeConverters(ge)), T = Jr((t) => (n, a) => vi(n, t, a)), w = Jr((t) => (n) => Wn(t, n)), N = Jr((t) => (n) => pa(n, t)), o = Jr((t) => () => mu(t)), $ = Jr((t) => (n) => Vs(t, n)), d = Jr((t) => (n, a) => bp(t, n, a)), S = Jr((t) => (n, a) => hu(t, n, a)), _ = Jr((t) => (n, a) => kp(t, n, a)), v = Jr((t) => (n, a) => Iu(t, n, a)), F = Jr((t) => (n, a, c) => Ip(t, n, a, c)), re = Jr((t) => (n, a, c) => Lu(t, n, a, c)), ke = Jr((t) => (n, a, c, f) => Lp(t, n, a, c, f)), ge = { get parenthesizer() {
        return u();
      }, get converters() {
        return h();
      }, baseFactory: r, flags: e, createNodeArray: he, createNumericLiteral: z, createBigIntLiteral: ue, createStringLiteral: ft, createStringLiteralFromNode: rn, createRegularExpressionLiteral: kr, createLiteralLikeNode: nn, createIdentifier: Re, createTempVariable: an, createLoopVariable: Un, createUniqueName: It, getGeneratedNameForNode: jr, createPrivateIdentifier: Lt, createUniquePrivateName: He, getGeneratedPrivateNameForNode: qr, createToken: ut, createSuper: at, createThis: Ut, createNull: Ot, createTrue: lt, createFalse: sn, createModifier: mt, createModifiersFromModifierFlags: vr, createQualifiedName: yt, updateQualifiedName: or, createComputedPropertyName: rt, updateComputedPropertyName: jt, createTypeParameterDeclaration: tr, updateTypeParameterDeclaration: on, createParameterDeclaration: kn, updateParameterDeclaration: bn, createDecorator: Rr, updateDecorator: zr, createPropertySignature: jn, updatePropertySignature: $r, createPropertyDeclaration: vn, updatePropertyDeclaration: M, createMethodSignature: oe, updateMethodSignature: me, createMethodDeclaration: be, updateMethodDeclaration: Xe, createConstructorDeclaration: st, updateConstructorDeclaration: ua, createGetAccessorDeclaration: qn, updateGetAccessorDeclaration: Gr, createSetAccessorDeclaration: K, updateSetAccessorDeclaration: Z, createCallSignature: ve, updateCallSignature: Se, createConstructSignature: Ce, updateConstructSignature: Te, createIndexSignature: qe, updateIndexSignature: Ze, createClassStaticBlockDeclaration: it, updateClassStaticBlockDeclaration: At, createTemplateLiteralTypeSpan: Ge, updateTemplateLiteralTypeSpan: we, createKeywordTypeNode: Lr, createTypePredicateNode: nt, updateTypePredicateNode: cr, createTypeReferenceNode: Sn, updateTypeReferenceNode: O, createFunctionTypeNode: L, updateFunctionTypeNode: p, createConstructorTypeNode: Ve, updateConstructorTypeNode: ze, createTypeQueryNode: _t, updateTypeQueryNode: Ft, createTypeLiteralNode: Vt, updateTypeLiteralNode: Cn, createArrayTypeNode: Wr, updateArrayTypeNode: Oa, createTupleTypeNode: ur, updateTupleTypeNode: W, createNamedTupleMember: de, updateNamedTupleMember: je, createOptionalTypeNode: xe, updateOptionalTypeNode: J, createRestTypeNode: ht, updateRestTypeNode: bt, createUnionTypeNode: Kd, updateUnionTypeNode: Go, createIntersectionTypeNode: Rn, updateIntersectionTypeNode: Oe, createConditionalTypeNode: pt, updateConditionalTypeNode: Ud, createInferTypeNode: Vr, updateInferTypeNode: jd, createImportTypeNode: cn, updateImportTypeNode: yi, createParenthesizedType: Ht, updateParenthesizedType: wt, createThisTypeNode: A, createTypeOperatorNode: zt, updateTypeOperatorNode: zn, createIndexedAccessTypeNode: un, updateIndexedAccessTypeNode: _s, createMappedTypeNode: vt, updateMappedTypeNode: Jt, createLiteralTypeNode: la, updateLiteralTypeNode: En, createTemplateLiteralType: Rt, updateTemplateLiteralType: qd, createObjectBindingPattern: Wo, updateObjectBindingPattern: Rd, createArrayBindingPattern: $n, updateArrayBindingPattern: zd, createBindingElement: _i, updateBindingElement: da, createArrayLiteralExpression: Ts, updateArrayLiteralExpression: Vo, createObjectLiteralExpression: Ma, updateObjectLiteralExpression: $d, createPropertyAccessExpression: e & 4 ? (t, n) => setEmitFlags(ln(t, n), 262144) : ln, updatePropertyAccessExpression: Gd, createPropertyAccessChain: e & 4 ? (t, n, a) => setEmitFlags(Ja(t, n, a), 262144) : Ja, updatePropertyAccessChain: Ti, createElementAccessExpression: Ba, updateElementAccessExpression: Wd, createElementAccessChain: Qo, updateElementAccessChain: xs, createCallExpression: Ka, updateCallExpression: xi, createCallChain: ks, updateCallChain: Yo, createNewExpression: Cr, updateNewExpression: bs, createTaggedTemplateExpression: ki, updateTaggedTemplateExpression: ec, createTypeAssertion: tc, updateTypeAssertion: rc, createParenthesizedExpression: vs, updateParenthesizedExpression: nc, createFunctionExpression: Ss, updateFunctionExpression: ac, createArrowFunction: Cs, updateArrowFunction: ic, createDeleteExpression: sc, updateDeleteExpression: oc, createTypeOfExpression: bi, updateTypeOfExpression: dr, createVoidExpression: Es, updateVoidExpression: dn, createAwaitExpression: cc, updateAwaitExpression: Gn, createPrefixUnaryExpression: Wn, updatePrefixUnaryExpression: Vd, createPostfixUnaryExpression: pa, updatePostfixUnaryExpression: Hd, createBinaryExpression: vi, updateBinaryExpression: Xd, createConditionalExpression: lc, updateConditionalExpression: dc, createTemplateExpression: pc, updateTemplateExpression: Hr, createTemplateHead: mc, createTemplateMiddle: Si, createTemplateTail: ws, createNoSubstitutionTemplateLiteral: Zd, createTemplateLiteralLikeNode: ma, createYieldExpression: As, updateYieldExpression: Yd, createSpreadElement: hc, updateSpreadElement: ep, createClassExpression: gc, updateClassExpression: Ns, createOmittedExpression: Ds, createExpressionWithTypeArguments: yc, updateExpressionWithTypeArguments: _c, createAsExpression: pr, updateAsExpression: Ci, createNonNullExpression: Tc, updateNonNullExpression: xc, createSatisfiesExpression: Ps, updateSatisfiesExpression: kc, createNonNullChain: Fs, updateNonNullChain: Or, createMetaProperty: bc, updateMetaProperty: Is, createTemplateSpan: Xr, updateTemplateSpan: Ei, createSemicolonClassElement: vc, createBlock: Vn, updateBlock: tp, createVariableStatement: Ls, updateVariableStatement: Sc, createEmptyStatement: Cc, createExpressionStatement: ja, updateExpressionStatement: Ec, createIfStatement: wc, updateIfStatement: Ac, createDoStatement: Nc, updateDoStatement: Dc, createWhileStatement: Pc, updateWhileStatement: rp, createForStatement: Fc, updateForStatement: Ic, createForInStatement: Os, updateForInStatement: np, createForOfStatement: Lc, updateForOfStatement: ap, createContinueStatement: Oc, updateContinueStatement: ip, createBreakStatement: Ms, updateBreakStatement: Mc, createReturnStatement: Js, updateReturnStatement: sp, createWithStatement: Bs, updateWithStatement: Jc, createSwitchStatement: Ks, updateSwitchStatement: ha, createLabeledStatement: Bc, updateLabeledStatement: Kc, createThrowStatement: Uc, updateThrowStatement: op, createTryStatement: jc, updateTryStatement: cp, createDebuggerStatement: qc, createVariableDeclaration: wi, updateVariableDeclaration: Rc, createVariableDeclarationList: Us, updateVariableDeclarationList: up, createFunctionDeclaration: zc, updateFunctionDeclaration: js, createClassDeclaration: $c, updateClassDeclaration: Ai, createInterfaceDeclaration: Gc, updateInterfaceDeclaration: Wc, createTypeAliasDeclaration: ot, updateTypeAliasDeclaration: wn, createEnumDeclaration: qs, updateEnumDeclaration: An, createModuleDeclaration: Vc, updateModuleDeclaration: Et, createModuleBlock: Nn, updateModuleBlock: qt, createCaseBlock: Hc, updateCaseBlock: dp, createNamespaceExportDeclaration: Xc, updateNamespaceExportDeclaration: Qc, createImportEqualsDeclaration: Zc, updateImportEqualsDeclaration: Yc, createImportDeclaration: eu, updateImportDeclaration: tu, createImportClause: ru, updateImportClause: nu, createAssertClause: Rs, updateAssertClause: fp, createAssertEntry: qa, updateAssertEntry: au, createImportTypeAssertionContainer: zs, updateImportTypeAssertionContainer: iu, createImportAttributes: su, updateImportAttributes: $s, createImportAttribute: ou, updateImportAttribute: cu, createNamespaceImport: uu, updateNamespaceImport: mp, createNamespaceExport: lu, updateNamespaceExport: hp, createNamedImports: du, updateNamedImports: pu, createImportSpecifier: Dn, updateImportSpecifier: gp, createExportAssignment: Ni, updateExportAssignment: Ra, createExportDeclaration: Di, updateExportDeclaration: fu, createNamedExports: Gs, updateNamedExports: yp, createExportSpecifier: Pi, updateExportSpecifier: _p, createMissingDeclaration: Tp, createExternalModuleReference: Ws, updateExternalModuleReference: xp, get createJSDocAllType() {
        return o(312);
      }, get createJSDocUnknownType() {
        return o(313);
      }, get createJSDocNonNullableType() {
        return S(315);
      }, get updateJSDocNonNullableType() {
        return _(315);
      }, get createJSDocNullableType() {
        return S(314);
      }, get updateJSDocNullableType() {
        return _(314);
      }, get createJSDocOptionalType() {
        return $(316);
      }, get updateJSDocOptionalType() {
        return d(316);
      }, get createJSDocVariadicType() {
        return $(318);
      }, get updateJSDocVariadicType() {
        return d(318);
      }, get createJSDocNamepathType() {
        return $(319);
      }, get updateJSDocNamepathType() {
        return d(319);
      }, createJSDocFunctionType: gu, updateJSDocFunctionType: vp, createJSDocTypeLiteral: yu, updateJSDocTypeLiteral: Sp, createJSDocTypeExpression: _u, updateJSDocTypeExpression: Hs, createJSDocSignature: Tu, updateJSDocSignature: Cp, createJSDocTemplateTag: Xs, updateJSDocTemplateTag: xu, createJSDocTypedefTag: Fi, updateJSDocTypedefTag: Ep, createJSDocParameterTag: Qs, updateJSDocParameterTag: wp, createJSDocPropertyTag: ku, updateJSDocPropertyTag: bu, createJSDocCallbackTag: vu, updateJSDocCallbackTag: Su, createJSDocOverloadTag: Cu, updateJSDocOverloadTag: Zs, createJSDocAugmentsTag: Ys, updateJSDocAugmentsTag: $a, createJSDocImplementsTag: Eu, updateJSDocImplementsTag: Fp, createJSDocSeeTag: Xn, updateJSDocSeeTag: Ii, createJSDocImportTag: Ju, updateJSDocImportTag: Bu, createJSDocNameReference: wu, updateJSDocNameReference: Ap, createJSDocMemberName: Au, updateJSDocMemberName: Np, createJSDocLink: Nu, updateJSDocLink: Du, createJSDocLinkCode: Pu, updateJSDocLinkCode: Dp, createJSDocLinkPlain: Fu, updateJSDocLinkPlain: Pp, get createJSDocTypeTag() {
        return re(344);
      }, get updateJSDocTypeTag() {
        return ke(344);
      }, get createJSDocReturnTag() {
        return re(342);
      }, get updateJSDocReturnTag() {
        return ke(342);
      }, get createJSDocThisTag() {
        return re(343);
      }, get updateJSDocThisTag() {
        return ke(343);
      }, get createJSDocAuthorTag() {
        return v(330);
      }, get updateJSDocAuthorTag() {
        return F(330);
      }, get createJSDocClassTag() {
        return v(332);
      }, get updateJSDocClassTag() {
        return F(332);
      }, get createJSDocPublicTag() {
        return v(333);
      }, get updateJSDocPublicTag() {
        return F(333);
      }, get createJSDocPrivateTag() {
        return v(334);
      }, get updateJSDocPrivateTag() {
        return F(334);
      }, get createJSDocProtectedTag() {
        return v(335);
      }, get updateJSDocProtectedTag() {
        return F(335);
      }, get createJSDocReadonlyTag() {
        return v(336);
      }, get updateJSDocReadonlyTag() {
        return F(336);
      }, get createJSDocOverrideTag() {
        return v(337);
      }, get updateJSDocOverrideTag() {
        return F(337);
      }, get createJSDocDeprecatedTag() {
        return v(331);
      }, get updateJSDocDeprecatedTag() {
        return F(331);
      }, get createJSDocThrowsTag() {
        return re(349);
      }, get updateJSDocThrowsTag() {
        return ke(349);
      }, get createJSDocSatisfiesTag() {
        return re(350);
      }, get updateJSDocSatisfiesTag() {
        return ke(350);
      }, createJSDocEnumTag: Mu, updateJSDocEnumTag: eo, createJSDocUnknownTag: Ou, updateJSDocUnknownTag: Op, createJSDocText: to, updateJSDocText: Mp, createJSDocComment: Ga, updateJSDocComment: Ku, createJsxElement: Uu, updateJsxElement: Jp, createJsxSelfClosingElement: ju, updateJsxSelfClosingElement: ro, createJsxOpeningElement: no, updateJsxOpeningElement: qu, createJsxClosingElement: Li, updateJsxClosingElement: Xt, createJsxFragment: ao, createJsxText: Oi, updateJsxText: zu, createJsxOpeningFragment: Bp, createJsxJsxClosingFragment: Kp, updateJsxFragment: Ru, createJsxAttribute: $u, updateJsxAttribute: Mi, createJsxAttributes: Gu, updateJsxAttributes: Up, createJsxSpreadAttribute: Wu, updateJsxSpreadAttribute: jp, createJsxExpression: Ji, updateJsxExpression: Wa, createJsxNamespacedName: Vu, updateJsxNamespacedName: io, createCaseClause: so, updateCaseClause: qp, createDefaultClause: ga, updateDefaultClause: Hu, createHeritageClause: Xu, updateHeritageClause: Rp, createCatchClause: oo, updateCatchClause: Qu, createPropertyAssignment: Bi, updatePropertyAssignment: Qn, createShorthandPropertyAssignment: Zu, updateShorthandPropertyAssignment: $p, createSpreadAssignment: co, updateSpreadAssignment: Yu, createEnumMember: wr, updateEnumMember: el, createSourceFile: Wp, updateSourceFile: Xp, createRedirectedSourceFile: tl, createBundle: uo, updateBundle: Qp, createSyntheticExpression: Zp, createSyntaxList: Ui, createNotEmittedStatement: nl, createNotEmittedTypeElement: Yp, createPartiallyEmittedExpression: al, updatePartiallyEmittedExpression: il, createCommaListExpression: lo, updateCommaListExpression: sl, createSyntheticReferenceExpression: po, updateSyntheticReferenceExpression: ol, cloneNode: fo, get createComma() {
        return T(28);
      }, get createAssignment() {
        return T(64);
      }, get createLogicalOr() {
        return T(57);
      }, get createLogicalAnd() {
        return T(56);
      }, get createBitwiseOr() {
        return T(52);
      }, get createBitwiseXor() {
        return T(53);
      }, get createBitwiseAnd() {
        return T(51);
      }, get createStrictEquality() {
        return T(37);
      }, get createStrictInequality() {
        return T(38);
      }, get createEquality() {
        return T(35);
      }, get createInequality() {
        return T(36);
      }, get createLessThan() {
        return T(30);
      }, get createLessThanEquals() {
        return T(33);
      }, get createGreaterThan() {
        return T(32);
      }, get createGreaterThanEquals() {
        return T(34);
      }, get createLeftShift() {
        return T(48);
      }, get createRightShift() {
        return T(49);
      }, get createUnsignedRightShift() {
        return T(50);
      }, get createAdd() {
        return T(40);
      }, get createSubtract() {
        return T(41);
      }, get createMultiply() {
        return T(42);
      }, get createDivide() {
        return T(44);
      }, get createModulo() {
        return T(45);
      }, get createExponent() {
        return T(43);
      }, get createPrefixPlus() {
        return w(40);
      }, get createPrefixMinus() {
        return w(41);
      }, get createPrefixIncrement() {
        return w(46);
      }, get createPrefixDecrement() {
        return w(47);
      }, get createBitwiseNot() {
        return w(55);
      }, get createLogicalNot() {
        return w(54);
      }, get createPostfixIncrement() {
        return N(46);
      }, get createPostfixDecrement() {
        return N(47);
      }, createImmediatelyInvokedFunctionExpression: n1, createImmediatelyInvokedArrowFunction: a1, createVoidZero: ya, createExportDefault: ll, createExternalModuleExport: i1, createTypeCheck: mo, createIsNotTypeCheck: s1, createMethodCall: Zn, createGlobalMethodCall: Va, createFunctionBindCall: o1, createFunctionCallCall: c1, createFunctionApplyCall: u1, createArraySliceCall: Ha, createArrayConcatCall: l1, createObjectDefinePropertyCall: ho, createObjectGetOwnPropertyDescriptorCall: _a, createReflectGetCall: dl, createReflectSetCall: d1, createPropertyDescriptor: pl, createCallBinding: ml, createAssignmentTargetWrapper: s, inlineExpressions: l, getInternalName: g, getLocalName: k, getExportName: D, getDeclarationName: Q, getNamespaceMemberName: ce, getExternalModuleOrNamespaceExportName: te, restoreOuterExpressions: fl, restoreEnclosingLabel: go, createUseStrictPrologue: Ke, copyPrologue: Y, copyStandardPrologue: Me, copyCustomPrologue: Ae, ensureUseStrict: nr, liftToBlock: fr, mergeLexicalEnvironment: pn, replaceModifiers: Mr, replaceDecoratorsAndModifiers: Yn, replacePropertyName: m1 };
      return Nr(wy, (t) => t(ge)), ge;
      function he(t, n) {
        if (t === void 0 || t === St) t = [];
        else if (ra(t)) {
          if (n === void 0 || t.hasTrailingComma === n) return t.transformFlags === void 0 && Zf(t), B.attachNodeArrayDebugInfo(t), t;
          let f = t.slice();
          return f.pos = t.pos, f.end = t.end, f.hasTrailingComma = n, f.transformFlags = t.transformFlags, B.attachNodeArrayDebugInfo(f), f;
        }
        let a = t.length, c = a >= 1 && a <= 4 ? t.slice() : t;
        return c.pos = -1, c.end = -1, c.hasTrailingComma = !!n, c.transformFlags = 0, Zf(c), B.attachNodeArrayDebugInfo(c), c;
      }
      function I(t) {
        return r.createBaseNode(t);
      }
      function ae(t) {
        let n = I(t);
        return n.symbol = void 0, n.localSymbol = void 0, n;
      }
      function Le(t, n) {
        return t !== n && (t.typeArguments = n.typeArguments), U(t, n);
      }
      function z(t, n = 0) {
        let a = typeof t == "number" ? t + "" : t;
        B.assert(a.charCodeAt(0) !== 45, "Negative numbers should be created in combination with createPrefixUnaryExpression");
        let c = ae(9);
        return c.text = a, c.numericLiteralFlags = n, n & 384 && (c.transformFlags |= 1024), c;
      }
      function ue(t) {
        let n = Wt(10);
        return n.text = typeof t == "string" ? t : _y(t) + "n", n.transformFlags |= 32, n;
      }
      function H(t, n) {
        let a = ae(11);
        return a.text = t, a.singleQuote = n, a;
      }
      function ft(t, n, a) {
        let c = H(t, n);
        return c.hasExtendedUnicodeEscape = a, a && (c.transformFlags |= 1024), c;
      }
      function rn(t) {
        let n = H(Bg(t), void 0);
        return n.textSourceNode = t, n;
      }
      function kr(t) {
        let n = Wt(14);
        return n.text = t, n;
      }
      function nn(t, n) {
        switch (t) {
          case 9:
            return z(n, 0);
          case 10:
            return ue(n);
          case 11:
            return ft(n, void 0);
          case 12:
            return Oi(n, !1);
          case 13:
            return Oi(n, !0);
          case 14:
            return kr(n);
          case 15:
            return ma(t, n, void 0, 0);
        }
      }
      function br(t) {
        let n = r.createBaseIdentifierNode(80);
        return n.escapedText = t, n.jsDoc = void 0, n.flowNode = void 0, n.symbol = void 0, n;
      }
      function Fr(t, n, a, c) {
        let f = br(ri(t));
        return setIdentifierAutoGenerate(f, { flags: n, id: Lo, prefix: a, suffix: c }), Lo++, f;
      }
      function Re(t, n, a) {
        n === void 0 && t && (n = Q1(t)), n === 80 && (n = void 0);
        let c = br(ri(t));
        return a && (c.flags |= 256), c.escapedText === "await" && (c.transformFlags |= 67108864), c.flags & 256 && (c.transformFlags |= 1024), c;
      }
      function an(t, n, a, c) {
        let f = 1;
        n && (f |= 8);
        let x = Fr("", f, a, c);
        return t && t(x), x;
      }
      function Un(t) {
        let n = 2;
        return t && (n |= 8), Fr("", n, void 0, void 0);
      }
      function It(t, n = 0, a, c) {
        return B.assert(!(n & 7), "Argument out of range: flags"), B.assert((n & 48) !== 32, "GeneratedIdentifierFlags.FileLevel cannot be set without also setting GeneratedIdentifierFlags.Optimistic"), Fr(t, 3 | n, a, c);
      }
      function jr(t, n = 0, a, c) {
        B.assert(!(n & 7), "Argument out of range: flags");
        let f = t ? ql(t) ? Td(!1, a, t, c, _r) : `generated@${getNodeId(t)}` : "";
        (a || c) && (n |= 16);
        let x = Fr(f, 4 | n, a, c);
        return x.original = t, x;
      }
      function Ir(t) {
        let n = r.createBasePrivateIdentifierNode(81);
        return n.escapedText = t, n.transformFlags |= 16777216, n;
      }
      function Lt(t) {
        return To(t, "#") || B.fail("First character of private identifier must be #: " + t), Ir(ri(t));
      }
      function xt(t, n, a, c) {
        let f = Ir(ri(t));
        return setIdentifierAutoGenerate(f, { flags: n, id: Lo, prefix: a, suffix: c }), Lo++, f;
      }
      function He(t, n, a) {
        t && !To(t, "#") && B.fail("First character of private identifier must be #: " + t);
        let c = 8 | (t ? 3 : 1);
        return xt(t ?? "", c, n, a);
      }
      function qr(t, n, a) {
        let c = ql(t) ? Td(!0, n, t, a, _r) : `#generated@${getNodeId(t)}`, f = xt(c, 4 | (n || a ? 16 : 0), n, a);
        return f.original = t, f;
      }
      function Wt(t) {
        return r.createBaseTokenNode(t);
      }
      function ut(t) {
        B.assert(t >= 0 && t <= 165, "Invalid token"), B.assert(t <= 15 || t >= 18, "Invalid token. Use 'createTemplateLiteralLikeNode' to create template literals."), B.assert(t <= 9 || t >= 15, "Invalid token. Use 'createLiteralLikeNode' to create literals."), B.assert(t !== 80, "Invalid token. Use 'createIdentifier' to create identifiers");
        let n = Wt(t), a = 0;
        switch (t) {
          case 134:
            a = 384;
            break;
          case 160:
            a = 4;
            break;
          case 125:
          case 123:
          case 124:
          case 148:
          case 128:
          case 138:
          case 87:
          case 133:
          case 150:
          case 163:
          case 146:
          case 151:
          case 103:
          case 147:
          case 164:
          case 154:
          case 136:
          case 155:
          case 116:
          case 159:
          case 157:
            a = 1;
            break;
          case 108:
            a = 134218752, n.flowNode = void 0;
            break;
          case 126:
            a = 1024;
            break;
          case 129:
            a = 16777216;
            break;
          case 110:
            a = 16384, n.flowNode = void 0;
            break;
        }
        return a && (n.transformFlags |= a), n;
      }
      function at() {
        return ut(108);
      }
      function Ut() {
        return ut(110);
      }
      function Ot() {
        return ut(106);
      }
      function lt() {
        return ut(112);
      }
      function sn() {
        return ut(97);
      }
      function mt(t) {
        return ut(t);
      }
      function vr(t) {
        let n = [];
        return t & 32 && n.push(mt(95)), t & 128 && n.push(mt(138)), t & 2048 && n.push(mt(90)), t & 4096 && n.push(mt(87)), t & 1 && n.push(mt(125)), t & 2 && n.push(mt(123)), t & 4 && n.push(mt(124)), t & 64 && n.push(mt(128)), t & 256 && n.push(mt(126)), t & 16 && n.push(mt(164)), t & 8 && n.push(mt(148)), t & 512 && n.push(mt(129)), t & 1024 && n.push(mt(134)), t & 8192 && n.push(mt(103)), t & 16384 && n.push(mt(147)), n.length ? n : void 0;
      }
      function yt(t, n) {
        let a = I(166);
        return a.left = t, a.right = tt(n), a.transformFlags |= q(a.left) | ui(a.right), a.flowNode = void 0, a;
      }
      function or(t, n, a) {
        return t.left !== n || t.right !== a ? U(yt(n, a), t) : t;
      }
      function rt(t) {
        let n = I(167);
        return n.expression = u().parenthesizeExpressionOfComputedPropertyName(t), n.transformFlags |= q(n.expression) | 1024 | 131072, n;
      }
      function jt(t, n) {
        return t.expression !== n ? U(rt(n), t) : t;
      }
      function tr(t, n, a, c) {
        let f = ae(168);
        return f.modifiers = De(t), f.name = tt(n), f.constraint = a, f.default = c, f.transformFlags = 1, f.expression = void 0, f.jsDoc = void 0, f;
      }
      function on(t, n, a, c, f) {
        return t.modifiers !== n || t.name !== a || t.constraint !== c || t.default !== f ? U(tr(n, a, c, f), t) : t;
      }
      function kn(t, n, a, c, f, x) {
        let R = ae(169);
        return R.modifiers = De(t), R.dotDotDotToken = n, R.name = tt(a), R.questionToken = c, R.type = f, R.initializer = ji(x), Ug(R.name) ? R.transformFlags = 1 : R.transformFlags = Ee(R.modifiers) | q(R.dotDotDotToken) | Pr(R.name) | q(R.questionToken) | q(R.initializer) | (R.questionToken ?? R.type ? 1 : 0) | (R.dotDotDotToken ?? R.initializer ? 1024 : 0) | (Dr(R.modifiers) & 31 ? 8192 : 0), R.jsDoc = void 0, R;
      }
      function bn(t, n, a, c, f, x, R) {
        return t.modifiers !== n || t.dotDotDotToken !== a || t.name !== c || t.questionToken !== f || t.type !== x || t.initializer !== R ? U(kn(n, a, c, f, x, R), t) : t;
      }
      function Rr(t) {
        let n = I(170);
        return n.expression = u().parenthesizeLeftSideOfAccess(t, !1), n.transformFlags |= q(n.expression) | 1 | 8192 | 33554432, n;
      }
      function zr(t, n) {
        return t.expression !== n ? U(Rr(n), t) : t;
      }
      function jn(t, n, a, c) {
        let f = ae(171);
        return f.modifiers = De(t), f.name = tt(n), f.type = c, f.questionToken = a, f.transformFlags = 1, f.initializer = void 0, f.jsDoc = void 0, f;
      }
      function $r(t, n, a, c, f) {
        return t.modifiers !== n || t.name !== a || t.questionToken !== c || t.type !== f ? Ne(jn(n, a, c, f), t) : t;
      }
      function Ne(t, n) {
        return t !== n && (t.initializer = n.initializer), U(t, n);
      }
      function vn(t, n, a, c, f) {
        let x = ae(172);
        x.modifiers = De(t), x.name = tt(n), x.questionToken = a && e2(a) ? a : void 0, x.exclamationToken = a && Yf(a) ? a : void 0, x.type = c, x.initializer = ji(f);
        let R = x.flags & 33554432 || Dr(x.modifiers) & 128;
        return x.transformFlags = Ee(x.modifiers) | Pr(x.name) | q(x.initializer) | (R || x.questionToken || x.exclamationToken || x.type ? 1 : 0) | (t2(x.name) || Dr(x.modifiers) & 256 && x.initializer ? 8192 : 0) | 16777216, x.jsDoc = void 0, x;
      }
      function M(t, n, a, c, f, x) {
        return t.modifiers !== n || t.name !== a || t.questionToken !== (c !== void 0 && e2(c) ? c : void 0) || t.exclamationToken !== (c !== void 0 && Yf(c) ? c : void 0) || t.type !== f || t.initializer !== x ? U(vn(n, a, c, f, x), t) : t;
      }
      function oe(t, n, a, c, f, x) {
        let R = ae(173);
        return R.modifiers = De(t), R.name = tt(n), R.questionToken = a, R.typeParameters = De(c), R.parameters = De(f), R.type = x, R.transformFlags = 1, R.jsDoc = void 0, R.locals = void 0, R.nextContainer = void 0, R.typeArguments = void 0, R;
      }
      function me(t, n, a, c, f, x, R) {
        return t.modifiers !== n || t.name !== a || t.questionToken !== c || t.typeParameters !== f || t.parameters !== x || t.type !== R ? Le(oe(n, a, c, f, x, R), t) : t;
      }
      function be(t, n, a, c, f, x, R, fe) {
        let Je = ae(174);
        if (Je.modifiers = De(t), Je.asteriskToken = n, Je.name = tt(a), Je.questionToken = c, Je.exclamationToken = void 0, Je.typeParameters = De(f), Je.parameters = he(x), Je.type = R, Je.body = fe, !Je.body) Je.transformFlags = 1;
        else {
          let Zt = Dr(Je.modifiers) & 1024, Ar = !!Je.asteriskToken, Qr = Zt && Ar;
          Je.transformFlags = Ee(Je.modifiers) | q(Je.asteriskToken) | Pr(Je.name) | q(Je.questionToken) | Ee(Je.typeParameters) | Ee(Je.parameters) | q(Je.type) | q(Je.body) & -67108865 | (Qr ? 128 : Zt ? 256 : Ar ? 2048 : 0) | (Je.questionToken || Je.typeParameters || Je.type ? 1 : 0) | 1024;
        }
        return Je.typeArguments = void 0, Je.jsDoc = void 0, Je.locals = void 0, Je.nextContainer = void 0, Je.flowNode = void 0, Je.endFlowNode = void 0, Je.returnFlowNode = void 0, Je;
      }
      function Xe(t, n, a, c, f, x, R, fe, Je) {
        return t.modifiers !== n || t.asteriskToken !== a || t.name !== c || t.questionToken !== f || t.typeParameters !== x || t.parameters !== R || t.type !== fe || t.body !== Je ? Qe(be(n, a, c, f, x, R, fe, Je), t) : t;
      }
      function Qe(t, n) {
        return t !== n && (t.exclamationToken = n.exclamationToken), U(t, n);
      }
      function it(t) {
        let n = ae(175);
        return n.body = t, n.transformFlags = q(t) | 16777216, n.modifiers = void 0, n.jsDoc = void 0, n.locals = void 0, n.nextContainer = void 0, n.endFlowNode = void 0, n.returnFlowNode = void 0, n;
      }
      function At(t, n) {
        return t.body !== n ? kt(it(n), t) : t;
      }
      function kt(t, n) {
        return t !== n && (t.modifiers = n.modifiers), U(t, n);
      }
      function st(t, n, a) {
        let c = ae(176);
        return c.modifiers = De(t), c.parameters = he(n), c.body = a, c.body ? c.transformFlags = Ee(c.modifiers) | Ee(c.parameters) | q(c.body) & -67108865 | 1024 : c.transformFlags = 1, c.typeParameters = void 0, c.type = void 0, c.typeArguments = void 0, c.jsDoc = void 0, c.locals = void 0, c.nextContainer = void 0, c.endFlowNode = void 0, c.returnFlowNode = void 0, c;
      }
      function ua(t, n, a, c) {
        return t.modifiers !== n || t.parameters !== a || t.body !== c ? Sr(st(n, a, c), t) : t;
      }
      function Sr(t, n) {
        return t !== n && (t.typeParameters = n.typeParameters, t.type = n.type), Le(t, n);
      }
      function qn(t, n, a, c, f) {
        let x = ae(177);
        return x.modifiers = De(t), x.name = tt(n), x.parameters = he(a), x.type = c, x.body = f, x.body ? x.transformFlags = Ee(x.modifiers) | Pr(x.name) | Ee(x.parameters) | q(x.type) | q(x.body) & -67108865 | (x.type ? 1 : 0) : x.transformFlags = 1, x.typeArguments = void 0, x.typeParameters = void 0, x.jsDoc = void 0, x.locals = void 0, x.nextContainer = void 0, x.flowNode = void 0, x.endFlowNode = void 0, x.returnFlowNode = void 0, x;
      }
      function Gr(t, n, a, c, f, x) {
        return t.modifiers !== n || t.name !== a || t.parameters !== c || t.type !== f || t.body !== x ? La(qn(n, a, c, f, x), t) : t;
      }
      function La(t, n) {
        return t !== n && (t.typeParameters = n.typeParameters), Le(t, n);
      }
      function K(t, n, a, c) {
        let f = ae(178);
        return f.modifiers = De(t), f.name = tt(n), f.parameters = he(a), f.body = c, f.body ? f.transformFlags = Ee(f.modifiers) | Pr(f.name) | Ee(f.parameters) | q(f.body) & -67108865 | (f.type ? 1 : 0) : f.transformFlags = 1, f.typeArguments = void 0, f.typeParameters = void 0, f.type = void 0, f.jsDoc = void 0, f.locals = void 0, f.nextContainer = void 0, f.flowNode = void 0, f.endFlowNode = void 0, f.returnFlowNode = void 0, f;
      }
      function Z(t, n, a, c, f) {
        return t.modifiers !== n || t.name !== a || t.parameters !== c || t.body !== f ? ee(K(n, a, c, f), t) : t;
      }
      function ee(t, n) {
        return t !== n && (t.typeParameters = n.typeParameters, t.type = n.type), Le(t, n);
      }
      function ve(t, n, a) {
        let c = ae(179);
        return c.typeParameters = De(t), c.parameters = De(n), c.type = a, c.transformFlags = 1, c.jsDoc = void 0, c.locals = void 0, c.nextContainer = void 0, c.typeArguments = void 0, c;
      }
      function Se(t, n, a, c) {
        return t.typeParameters !== n || t.parameters !== a || t.type !== c ? Le(ve(n, a, c), t) : t;
      }
      function Ce(t, n, a) {
        let c = ae(180);
        return c.typeParameters = De(t), c.parameters = De(n), c.type = a, c.transformFlags = 1, c.jsDoc = void 0, c.locals = void 0, c.nextContainer = void 0, c.typeArguments = void 0, c;
      }
      function Te(t, n, a, c) {
        return t.typeParameters !== n || t.parameters !== a || t.type !== c ? Le(Ce(n, a, c), t) : t;
      }
      function qe(t, n, a) {
        let c = ae(181);
        return c.modifiers = De(t), c.parameters = De(n), c.type = a, c.transformFlags = 1, c.jsDoc = void 0, c.locals = void 0, c.nextContainer = void 0, c.typeArguments = void 0, c;
      }
      function Ze(t, n, a, c) {
        return t.parameters !== a || t.type !== c || t.modifiers !== n ? Le(qe(n, a, c), t) : t;
      }
      function Ge(t, n) {
        let a = I(204);
        return a.type = t, a.literal = n, a.transformFlags = 1, a;
      }
      function we(t, n, a) {
        return t.type !== n || t.literal !== a ? U(Ge(n, a), t) : t;
      }
      function Lr(t) {
        return ut(t);
      }
      function nt(t, n, a) {
        let c = I(182);
        return c.assertsModifier = t, c.parameterName = tt(n), c.type = a, c.transformFlags = 1, c;
      }
      function cr(t, n, a, c) {
        return t.assertsModifier !== n || t.parameterName !== a || t.type !== c ? U(nt(n, a, c), t) : t;
      }
      function Sn(t, n) {
        let a = I(183);
        return a.typeName = tt(t), a.typeArguments = n && u().parenthesizeTypeArguments(he(n)), a.transformFlags = 1, a;
      }
      function O(t, n, a) {
        return t.typeName !== n || t.typeArguments !== a ? U(Sn(n, a), t) : t;
      }
      function L(t, n, a) {
        let c = ae(184);
        return c.typeParameters = De(t), c.parameters = De(n), c.type = a, c.transformFlags = 1, c.modifiers = void 0, c.jsDoc = void 0, c.locals = void 0, c.nextContainer = void 0, c.typeArguments = void 0, c;
      }
      function p(t, n, a, c) {
        return t.typeParameters !== n || t.parameters !== a || t.type !== c ? Be(L(n, a, c), t) : t;
      }
      function Be(t, n) {
        return t !== n && (t.modifiers = n.modifiers), Le(t, n);
      }
      function Ve(...t) {
        return t.length === 4 ? j(...t) : t.length === 3 ? Ye(...t) : B.fail("Incorrect number of arguments specified.");
      }
      function j(t, n, a, c) {
        let f = ae(185);
        return f.modifiers = De(t), f.typeParameters = De(n), f.parameters = De(a), f.type = c, f.transformFlags = 1, f.jsDoc = void 0, f.locals = void 0, f.nextContainer = void 0, f.typeArguments = void 0, f;
      }
      function Ye(t, n, a) {
        return j(void 0, t, n, a);
      }
      function ze(...t) {
        return t.length === 5 ? We(...t) : t.length === 4 ? Pt(...t) : B.fail("Incorrect number of arguments specified.");
      }
      function We(t, n, a, c, f) {
        return t.modifiers !== n || t.typeParameters !== a || t.parameters !== c || t.type !== f ? Le(Ve(n, a, c, f), t) : t;
      }
      function Pt(t, n, a, c) {
        return We(t, t.modifiers, n, a, c);
      }
      function _t(t, n) {
        let a = I(186);
        return a.exprName = t, a.typeArguments = n && u().parenthesizeTypeArguments(n), a.transformFlags = 1, a;
      }
      function Ft(t, n, a) {
        return t.exprName !== n || t.typeArguments !== a ? U(_t(n, a), t) : t;
      }
      function Vt(t) {
        let n = ae(187);
        return n.members = he(t), n.transformFlags = 1, n;
      }
      function Cn(t, n) {
        return t.members !== n ? U(Vt(n), t) : t;
      }
      function Wr(t) {
        let n = I(188);
        return n.elementType = u().parenthesizeNonArrayTypeOfPostfixType(t), n.transformFlags = 1, n;
      }
      function Oa(t, n) {
        return t.elementType !== n ? U(Wr(n), t) : t;
      }
      function ur(t) {
        let n = I(189);
        return n.elements = he(u().parenthesizeElementTypesOfTupleType(t)), n.transformFlags = 1, n;
      }
      function W(t, n) {
        return t.elements !== n ? U(ur(n), t) : t;
      }
      function de(t, n, a, c) {
        let f = ae(202);
        return f.dotDotDotToken = t, f.name = n, f.questionToken = a, f.type = c, f.transformFlags = 1, f.jsDoc = void 0, f;
      }
      function je(t, n, a, c, f) {
        return t.dotDotDotToken !== n || t.name !== a || t.questionToken !== c || t.type !== f ? U(de(n, a, c, f), t) : t;
      }
      function xe(t) {
        let n = I(190);
        return n.type = u().parenthesizeTypeOfOptionalType(t), n.transformFlags = 1, n;
      }
      function J(t, n) {
        return t.type !== n ? U(xe(n), t) : t;
      }
      function ht(t) {
        let n = I(191);
        return n.type = t, n.transformFlags = 1, n;
      }
      function bt(t, n) {
        return t.type !== n ? U(ht(n), t) : t;
      }
      function Mt(t, n, a) {
        let c = I(t);
        return c.types = ge.createNodeArray(a(n)), c.transformFlags = 1, c;
      }
      function lr(t, n, a) {
        return t.types !== n ? U(Mt(t.kind, n, a), t) : t;
      }
      function Kd(t) {
        return Mt(192, t, u().parenthesizeConstituentTypesOfUnionType);
      }
      function Go(t, n) {
        return lr(t, n, u().parenthesizeConstituentTypesOfUnionType);
      }
      function Rn(t) {
        return Mt(193, t, u().parenthesizeConstituentTypesOfIntersectionType);
      }
      function Oe(t, n) {
        return lr(t, n, u().parenthesizeConstituentTypesOfIntersectionType);
      }
      function pt(t, n, a, c) {
        let f = I(194);
        return f.checkType = u().parenthesizeCheckTypeOfConditionalType(t), f.extendsType = u().parenthesizeExtendsTypeOfConditionalType(n), f.trueType = a, f.falseType = c, f.transformFlags = 1, f.locals = void 0, f.nextContainer = void 0, f;
      }
      function Ud(t, n, a, c, f) {
        return t.checkType !== n || t.extendsType !== a || t.trueType !== c || t.falseType !== f ? U(pt(n, a, c, f), t) : t;
      }
      function Vr(t) {
        let n = I(195);
        return n.typeParameter = t, n.transformFlags = 1, n;
      }
      function jd(t, n) {
        return t.typeParameter !== n ? U(Vr(n), t) : t;
      }
      function Rt(t, n) {
        let a = I(203);
        return a.head = t, a.templateSpans = he(n), a.transformFlags = 1, a;
      }
      function qd(t, n, a) {
        return t.head !== n || t.templateSpans !== a ? U(Rt(n, a), t) : t;
      }
      function cn(t, n, a, c, f = !1) {
        let x = I(205);
        return x.argument = t, x.attributes = n, x.assertions && x.assertions.assertClause && x.attributes && (x.assertions.assertClause = x.attributes), x.qualifier = a, x.typeArguments = c && u().parenthesizeTypeArguments(c), x.isTypeOf = f, x.transformFlags = 1, x;
      }
      function yi(t, n, a, c, f, x = t.isTypeOf) {
        return t.argument !== n || t.attributes !== a || t.qualifier !== c || t.typeArguments !== f || t.isTypeOf !== x ? U(cn(n, a, c, f, x), t) : t;
      }
      function Ht(t) {
        let n = I(196);
        return n.type = t, n.transformFlags = 1, n;
      }
      function wt(t, n) {
        return t.type !== n ? U(Ht(n), t) : t;
      }
      function A() {
        let t = I(197);
        return t.transformFlags = 1, t;
      }
      function zt(t, n) {
        let a = I(198);
        return a.operator = t, a.type = t === 148 ? u().parenthesizeOperandOfReadonlyTypeOperator(n) : u().parenthesizeOperandOfTypeOperator(n), a.transformFlags = 1, a;
      }
      function zn(t, n) {
        return t.type !== n ? U(zt(t.operator, n), t) : t;
      }
      function un(t, n) {
        let a = I(199);
        return a.objectType = u().parenthesizeNonArrayTypeOfPostfixType(t), a.indexType = n, a.transformFlags = 1, a;
      }
      function _s(t, n, a) {
        return t.objectType !== n || t.indexType !== a ? U(un(n, a), t) : t;
      }
      function vt(t, n, a, c, f, x) {
        let R = ae(200);
        return R.readonlyToken = t, R.typeParameter = n, R.nameType = a, R.questionToken = c, R.type = f, R.members = x && he(x), R.transformFlags = 1, R.locals = void 0, R.nextContainer = void 0, R;
      }
      function Jt(t, n, a, c, f, x, R) {
        return t.readonlyToken !== n || t.typeParameter !== a || t.nameType !== c || t.questionToken !== f || t.type !== x || t.members !== R ? U(vt(n, a, c, f, x, R), t) : t;
      }
      function la(t) {
        let n = I(201);
        return n.literal = t, n.transformFlags = 1, n;
      }
      function En(t, n) {
        return t.literal !== n ? U(la(n), t) : t;
      }
      function Wo(t) {
        let n = I(206);
        return n.elements = he(t), n.transformFlags |= Ee(n.elements) | 1024 | 524288, n.transformFlags & 32768 && (n.transformFlags |= 65664), n;
      }
      function Rd(t, n) {
        return t.elements !== n ? U(Wo(n), t) : t;
      }
      function $n(t) {
        let n = I(207);
        return n.elements = he(t), n.transformFlags |= Ee(n.elements) | 1024 | 524288, n;
      }
      function zd(t, n) {
        return t.elements !== n ? U($n(n), t) : t;
      }
      function _i(t, n, a, c) {
        let f = ae(208);
        return f.dotDotDotToken = t, f.propertyName = tt(n), f.name = tt(a), f.initializer = ji(c), f.transformFlags |= q(f.dotDotDotToken) | Pr(f.propertyName) | Pr(f.name) | q(f.initializer) | (f.dotDotDotToken ? 32768 : 0) | 1024, f.flowNode = void 0, f;
      }
      function da(t, n, a, c, f) {
        return t.propertyName !== a || t.dotDotDotToken !== n || t.name !== c || t.initializer !== f ? U(_i(n, a, c, f), t) : t;
      }
      function Ts(t, n) {
        let a = I(209), c = t && Ya(t), f = he(t, c && g_(c) ? !0 : void 0);
        return a.elements = u().parenthesizeExpressionsOfCommaDelimitedList(f), a.multiLine = n, a.transformFlags |= Ee(a.elements), a;
      }
      function Vo(t, n) {
        return t.elements !== n ? U(Ts(n, t.multiLine), t) : t;
      }
      function Ma(t, n) {
        let a = ae(210);
        return a.properties = he(t), a.multiLine = n, a.transformFlags |= Ee(a.properties), a.jsDoc = void 0, a;
      }
      function $d(t, n) {
        return t.properties !== n ? U(Ma(n, t.multiLine), t) : t;
      }
      function Ho(t, n, a) {
        let c = ae(211);
        return c.expression = t, c.questionDotToken = n, c.name = a, c.transformFlags = q(c.expression) | q(c.questionDotToken) | (et(c.name) ? ui(c.name) : q(c.name) | 536870912), c.jsDoc = void 0, c.flowNode = void 0, c;
      }
      function ln(t, n) {
        let a = Ho(u().parenthesizeLeftSideOfAccess(t, !1), void 0, tt(n));
        return ld(t) && (a.transformFlags |= 384), a;
      }
      function Gd(t, n, a) {
        return Ph(t) ? Ti(t, n, t.questionDotToken, gn(a, et)) : t.expression !== n || t.name !== a ? U(ln(n, a), t) : t;
      }
      function Ja(t, n, a) {
        let c = Ho(u().parenthesizeLeftSideOfAccess(t, !0), n, tt(a));
        return c.flags |= 64, c.transformFlags |= 32, c;
      }
      function Ti(t, n, a, c) {
        return B.assert(!!(t.flags & 64), "Cannot update a PropertyAccessExpression using updatePropertyAccessChain. Use updatePropertyAccess instead."), t.expression !== n || t.questionDotToken !== a || t.name !== c ? U(Ja(n, a, c), t) : t;
      }
      function Xo(t, n, a) {
        let c = ae(212);
        return c.expression = t, c.questionDotToken = n, c.argumentExpression = a, c.transformFlags |= q(c.expression) | q(c.questionDotToken) | q(c.argumentExpression), c.jsDoc = void 0, c.flowNode = void 0, c;
      }
      function Ba(t, n) {
        let a = Xo(u().parenthesizeLeftSideOfAccess(t, !1), void 0, fn(n));
        return ld(t) && (a.transformFlags |= 384), a;
      }
      function Wd(t, n, a) {
        return Fh(t) ? xs(t, n, t.questionDotToken, a) : t.expression !== n || t.argumentExpression !== a ? U(Ba(n, a), t) : t;
      }
      function Qo(t, n, a) {
        let c = Xo(u().parenthesizeLeftSideOfAccess(t, !0), n, fn(a));
        return c.flags |= 64, c.transformFlags |= 32, c;
      }
      function xs(t, n, a, c) {
        return B.assert(!!(t.flags & 64), "Cannot update a ElementAccessExpression using updateElementAccessChain. Use updateElementAccess instead."), t.expression !== n || t.questionDotToken !== a || t.argumentExpression !== c ? U(Qo(n, a, c), t) : t;
      }
      function Zo(t, n, a, c) {
        let f = ae(213);
        return f.expression = t, f.questionDotToken = n, f.typeArguments = a, f.arguments = c, f.transformFlags |= q(f.expression) | q(f.questionDotToken) | Ee(f.typeArguments) | Ee(f.arguments), f.typeArguments && (f.transformFlags |= 1), Mf(f.expression) && (f.transformFlags |= 16384), f;
      }
      function Ka(t, n, a) {
        let c = Zo(u().parenthesizeLeftSideOfAccess(t, !1), void 0, De(n), u().parenthesizeExpressionsOfCommaDelimitedList(he(a)));
        return Ky(c.expression) && (c.transformFlags |= 8388608), c;
      }
      function xi(t, n, a, c) {
        return Tf(t) ? Yo(t, n, t.questionDotToken, a, c) : t.expression !== n || t.typeArguments !== a || t.arguments !== c ? U(Ka(n, a, c), t) : t;
      }
      function ks(t, n, a, c) {
        let f = Zo(u().parenthesizeLeftSideOfAccess(t, !0), n, De(a), u().parenthesizeExpressionsOfCommaDelimitedList(he(c)));
        return f.flags |= 64, f.transformFlags |= 32, f;
      }
      function Yo(t, n, a, c, f) {
        return B.assert(!!(t.flags & 64), "Cannot update a CallExpression using updateCallChain. Use updateCall instead."), t.expression !== n || t.questionDotToken !== a || t.typeArguments !== c || t.arguments !== f ? U(ks(n, a, c, f), t) : t;
      }
      function Cr(t, n, a) {
        let c = ae(214);
        return c.expression = u().parenthesizeExpressionOfNew(t), c.typeArguments = De(n), c.arguments = a ? u().parenthesizeExpressionsOfCommaDelimitedList(a) : void 0, c.transformFlags |= q(c.expression) | Ee(c.typeArguments) | Ee(c.arguments) | 32, c.typeArguments && (c.transformFlags |= 1), c;
      }
      function bs(t, n, a, c) {
        return t.expression !== n || t.typeArguments !== a || t.arguments !== c ? U(Cr(n, a, c), t) : t;
      }
      function ki(t, n, a) {
        let c = I(215);
        return c.tag = u().parenthesizeLeftSideOfAccess(t, !1), c.typeArguments = De(n), c.template = a, c.transformFlags |= q(c.tag) | Ee(c.typeArguments) | q(c.template) | 1024, c.typeArguments && (c.transformFlags |= 1), Kg(c.template) && (c.transformFlags |= 128), c;
      }
      function ec(t, n, a, c) {
        return t.tag !== n || t.typeArguments !== a || t.template !== c ? U(ki(n, a, c), t) : t;
      }
      function tc(t, n) {
        let a = I(216);
        return a.expression = u().parenthesizeOperandOfPrefixUnary(n), a.type = t, a.transformFlags |= q(a.expression) | q(a.type) | 1, a;
      }
      function rc(t, n, a) {
        return t.type !== n || t.expression !== a ? U(tc(n, a), t) : t;
      }
      function vs(t) {
        let n = I(217);
        return n.expression = t, n.transformFlags = q(n.expression), n.jsDoc = void 0, n;
      }
      function nc(t, n) {
        return t.expression !== n ? U(vs(n), t) : t;
      }
      function Ss(t, n, a, c, f, x, R) {
        let fe = ae(218);
        fe.modifiers = De(t), fe.asteriskToken = n, fe.name = tt(a), fe.typeParameters = De(c), fe.parameters = he(f), fe.type = x, fe.body = R;
        let Je = Dr(fe.modifiers) & 1024, Zt = !!fe.asteriskToken, Ar = Je && Zt;
        return fe.transformFlags = Ee(fe.modifiers) | q(fe.asteriskToken) | Pr(fe.name) | Ee(fe.typeParameters) | Ee(fe.parameters) | q(fe.type) | q(fe.body) & -67108865 | (Ar ? 128 : Je ? 256 : Zt ? 2048 : 0) | (fe.typeParameters || fe.type ? 1 : 0) | 4194304, fe.typeArguments = void 0, fe.jsDoc = void 0, fe.locals = void 0, fe.nextContainer = void 0, fe.flowNode = void 0, fe.endFlowNode = void 0, fe.returnFlowNode = void 0, fe;
      }
      function ac(t, n, a, c, f, x, R, fe) {
        return t.name !== c || t.modifiers !== n || t.asteriskToken !== a || t.typeParameters !== f || t.parameters !== x || t.type !== R || t.body !== fe ? Le(Ss(n, a, c, f, x, R, fe), t) : t;
      }
      function Cs(t, n, a, c, f, x) {
        let R = ae(219);
        R.modifiers = De(t), R.typeParameters = De(n), R.parameters = he(a), R.type = c, R.equalsGreaterThanToken = f ?? ut(39), R.body = u().parenthesizeConciseBodyOfArrowFunction(x);
        let fe = Dr(R.modifiers) & 1024;
        return R.transformFlags = Ee(R.modifiers) | Ee(R.typeParameters) | Ee(R.parameters) | q(R.type) | q(R.equalsGreaterThanToken) | q(R.body) & -67108865 | (R.typeParameters || R.type ? 1 : 0) | (fe ? 16640 : 0) | 1024, R.typeArguments = void 0, R.jsDoc = void 0, R.locals = void 0, R.nextContainer = void 0, R.flowNode = void 0, R.endFlowNode = void 0, R.returnFlowNode = void 0, R;
      }
      function ic(t, n, a, c, f, x, R) {
        return t.modifiers !== n || t.typeParameters !== a || t.parameters !== c || t.type !== f || t.equalsGreaterThanToken !== x || t.body !== R ? Le(Cs(n, a, c, f, x, R), t) : t;
      }
      function sc(t) {
        let n = I(220);
        return n.expression = u().parenthesizeOperandOfPrefixUnary(t), n.transformFlags |= q(n.expression), n;
      }
      function oc(t, n) {
        return t.expression !== n ? U(sc(n), t) : t;
      }
      function bi(t) {
        let n = I(221);
        return n.expression = u().parenthesizeOperandOfPrefixUnary(t), n.transformFlags |= q(n.expression), n;
      }
      function dr(t, n) {
        return t.expression !== n ? U(bi(n), t) : t;
      }
      function Es(t) {
        let n = I(222);
        return n.expression = u().parenthesizeOperandOfPrefixUnary(t), n.transformFlags |= q(n.expression), n;
      }
      function dn(t, n) {
        return t.expression !== n ? U(Es(n), t) : t;
      }
      function cc(t) {
        let n = I(223);
        return n.expression = u().parenthesizeOperandOfPrefixUnary(t), n.transformFlags |= q(n.expression) | 256 | 128 | 2097152, n;
      }
      function Gn(t, n) {
        return t.expression !== n ? U(cc(n), t) : t;
      }
      function Wn(t, n) {
        let a = I(224);
        return a.operator = t, a.operand = u().parenthesizeOperandOfPrefixUnary(n), a.transformFlags |= q(a.operand), (t === 46 || t === 47) && et(a.operand) && !ni(a.operand) && !A2(a.operand) && (a.transformFlags |= 268435456), a;
      }
      function Vd(t, n) {
        return t.operand !== n ? U(Wn(t.operator, n), t) : t;
      }
      function pa(t, n) {
        let a = I(225);
        return a.operator = n, a.operand = u().parenthesizeOperandOfPostfixUnary(t), a.transformFlags |= q(a.operand), et(a.operand) && !ni(a.operand) && !A2(a.operand) && (a.transformFlags |= 268435456), a;
      }
      function Hd(t, n) {
        return t.operand !== n ? U(pa(n, t.operator), t) : t;
      }
      function vi(t, n, a) {
        let c = ae(226), f = hl(n), x = f.kind;
        return c.left = u().parenthesizeLeftSideOfBinary(x, t), c.operatorToken = f, c.right = u().parenthesizeRightSideOfBinary(x, c.left, a), c.transformFlags |= q(c.left) | q(c.operatorToken) | q(c.right), x === 61 ? c.transformFlags |= 32 : x === 64 ? c2(c.left) ? c.transformFlags |= 5248 | uc(c.left) : d_(c.left) && (c.transformFlags |= 5120 | uc(c.left)) : x === 43 || x === 68 ? c.transformFlags |= 512 : Xg(x) && (c.transformFlags |= 16), x === 103 && wa(c.left) && (c.transformFlags |= 536870912), c.jsDoc = void 0, c;
      }
      function uc(t) {
        return I2(t) ? 65536 : 0;
      }
      function Xd(t, n, a, c) {
        return t.left !== n || t.operatorToken !== a || t.right !== c ? U(vi(n, a, c), t) : t;
      }
      function lc(t, n, a, c, f) {
        let x = I(227);
        return x.condition = u().parenthesizeConditionOfConditionalExpression(t), x.questionToken = n ?? ut(58), x.whenTrue = u().parenthesizeBranchOfConditionalExpression(a), x.colonToken = c ?? ut(59), x.whenFalse = u().parenthesizeBranchOfConditionalExpression(f), x.transformFlags |= q(x.condition) | q(x.questionToken) | q(x.whenTrue) | q(x.colonToken) | q(x.whenFalse), x.flowNodeWhenFalse = void 0, x.flowNodeWhenTrue = void 0, x;
      }
      function dc(t, n, a, c, f, x) {
        return t.condition !== n || t.questionToken !== a || t.whenTrue !== c || t.colonToken !== f || t.whenFalse !== x ? U(lc(n, a, c, f, x), t) : t;
      }
      function pc(t, n) {
        let a = I(228);
        return a.head = t, a.templateSpans = he(n), a.transformFlags |= q(a.head) | Ee(a.templateSpans) | 1024, a;
      }
      function Hr(t, n, a) {
        return t.head !== n || t.templateSpans !== a ? U(pc(n, a), t) : t;
      }
      function Ua(t, n, a, c = 0) {
        B.assert(!(c & -7177), "Unsupported template flags.");
        let f;
        if (a !== void 0 && a !== n && (f = Ay(t, a), typeof f == "object")) return B.fail("Invalid raw text");
        if (n === void 0) {
          if (f === void 0) return B.fail("Arguments 'text' and 'rawText' may not both be undefined.");
          n = f;
        } else f !== void 0 && B.assert(n === f, "Expected argument 'text' to be the normalized (i.e. 'cooked') version of argument 'rawText'.");
        return n;
      }
      function fc(t) {
        let n = 1024;
        return t && (n |= 128), n;
      }
      function Qd(t, n, a, c) {
        let f = Wt(t);
        return f.text = n, f.rawText = a, f.templateFlags = c & 7176, f.transformFlags = fc(f.templateFlags), f;
      }
      function fa(t, n, a, c) {
        let f = ae(t);
        return f.text = n, f.rawText = a, f.templateFlags = c & 7176, f.transformFlags = fc(f.templateFlags), f;
      }
      function ma(t, n, a, c) {
        return t === 15 ? fa(t, n, a, c) : Qd(t, n, a, c);
      }
      function mc(t, n, a) {
        return t = Ua(16, t, n, a), ma(16, t, n, a);
      }
      function Si(t, n, a) {
        return t = Ua(16, t, n, a), ma(17, t, n, a);
      }
      function ws(t, n, a) {
        return t = Ua(16, t, n, a), ma(18, t, n, a);
      }
      function Zd(t, n, a) {
        return t = Ua(16, t, n, a), fa(15, t, n, a);
      }
      function As(t, n) {
        B.assert(!t || !!n, "A `YieldExpression` with an asteriskToken must have an expression.");
        let a = I(229);
        return a.expression = n && u().parenthesizeExpressionForDisallowedComma(n), a.asteriskToken = t, a.transformFlags |= q(a.expression) | q(a.asteriskToken) | 1024 | 128 | 1048576, a;
      }
      function Yd(t, n, a) {
        return t.expression !== a || t.asteriskToken !== n ? U(As(n, a), t) : t;
      }
      function hc(t) {
        let n = I(230);
        return n.expression = u().parenthesizeExpressionForDisallowedComma(t), n.transformFlags |= q(n.expression) | 1024 | 32768, n;
      }
      function ep(t, n) {
        return t.expression !== n ? U(hc(n), t) : t;
      }
      function gc(t, n, a, c, f) {
        let x = ae(231);
        return x.modifiers = De(t), x.name = tt(n), x.typeParameters = De(a), x.heritageClauses = De(c), x.members = he(f), x.transformFlags |= Ee(x.modifiers) | Pr(x.name) | Ee(x.typeParameters) | Ee(x.heritageClauses) | Ee(x.members) | (x.typeParameters ? 1 : 0) | 1024, x.jsDoc = void 0, x;
      }
      function Ns(t, n, a, c, f, x) {
        return t.modifiers !== n || t.name !== a || t.typeParameters !== c || t.heritageClauses !== f || t.members !== x ? U(gc(n, a, c, f, x), t) : t;
      }
      function Ds() {
        return I(232);
      }
      function yc(t, n) {
        let a = I(233);
        return a.expression = u().parenthesizeLeftSideOfAccess(t, !1), a.typeArguments = n && u().parenthesizeTypeArguments(n), a.transformFlags |= q(a.expression) | Ee(a.typeArguments) | 1024, a;
      }
      function _c(t, n, a) {
        return t.expression !== n || t.typeArguments !== a ? U(yc(n, a), t) : t;
      }
      function pr(t, n) {
        let a = I(234);
        return a.expression = t, a.type = n, a.transformFlags |= q(a.expression) | q(a.type) | 1, a;
      }
      function Ci(t, n, a) {
        return t.expression !== n || t.type !== a ? U(pr(n, a), t) : t;
      }
      function Tc(t) {
        let n = I(235);
        return n.expression = u().parenthesizeLeftSideOfAccess(t, !1), n.transformFlags |= q(n.expression) | 1, n;
      }
      function xc(t, n) {
        return Lh(t) ? Or(t, n) : t.expression !== n ? U(Tc(n), t) : t;
      }
      function Ps(t, n) {
        let a = I(238);
        return a.expression = t, a.type = n, a.transformFlags |= q(a.expression) | q(a.type) | 1, a;
      }
      function kc(t, n, a) {
        return t.expression !== n || t.type !== a ? U(Ps(n, a), t) : t;
      }
      function Fs(t) {
        let n = I(235);
        return n.flags |= 64, n.expression = u().parenthesizeLeftSideOfAccess(t, !0), n.transformFlags |= q(n.expression) | 1, n;
      }
      function Or(t, n) {
        return B.assert(!!(t.flags & 64), "Cannot update a NonNullExpression using updateNonNullChain. Use updateNonNullExpression instead."), t.expression !== n ? U(Fs(n), t) : t;
      }
      function bc(t, n) {
        let a = I(236);
        switch (a.keywordToken = t, a.name = n, a.transformFlags |= q(a.name), t) {
          case 105:
            a.transformFlags |= 1024;
            break;
          case 102:
            a.transformFlags |= 32;
            break;
          default:
            return B.assertNever(t);
        }
        return a.flowNode = void 0, a;
      }
      function Is(t, n) {
        return t.name !== n ? U(bc(t.keywordToken, n), t) : t;
      }
      function Xr(t, n) {
        let a = I(239);
        return a.expression = t, a.literal = n, a.transformFlags |= q(a.expression) | q(a.literal) | 1024, a;
      }
      function Ei(t, n, a) {
        return t.expression !== n || t.literal !== a ? U(Xr(n, a), t) : t;
      }
      function vc() {
        let t = I(240);
        return t.transformFlags |= 1024, t;
      }
      function Vn(t, n) {
        let a = I(241);
        return a.statements = he(t), a.multiLine = n, a.transformFlags |= Ee(a.statements), a.jsDoc = void 0, a.locals = void 0, a.nextContainer = void 0, a;
      }
      function tp(t, n) {
        return t.statements !== n ? U(Vn(n, t.multiLine), t) : t;
      }
      function Ls(t, n) {
        let a = I(243);
        return a.modifiers = De(t), a.declarationList = Ln(n) ? Us(n) : n, a.transformFlags |= Ee(a.modifiers) | q(a.declarationList), Dr(a.modifiers) & 128 && (a.transformFlags = 1), a.jsDoc = void 0, a.flowNode = void 0, a;
      }
      function Sc(t, n, a) {
        return t.modifiers !== n || t.declarationList !== a ? U(Ls(n, a), t) : t;
      }
      function Cc() {
        let t = I(242);
        return t.jsDoc = void 0, t;
      }
      function ja(t) {
        let n = I(244);
        return n.expression = u().parenthesizeExpressionOfExpressionStatement(t), n.transformFlags |= q(n.expression), n.jsDoc = void 0, n.flowNode = void 0, n;
      }
      function Ec(t, n) {
        return t.expression !== n ? U(ja(n), t) : t;
      }
      function wc(t, n, a) {
        let c = I(245);
        return c.expression = t, c.thenStatement = Nt(n), c.elseStatement = Nt(a), c.transformFlags |= q(c.expression) | q(c.thenStatement) | q(c.elseStatement), c.jsDoc = void 0, c.flowNode = void 0, c;
      }
      function Ac(t, n, a, c) {
        return t.expression !== n || t.thenStatement !== a || t.elseStatement !== c ? U(wc(n, a, c), t) : t;
      }
      function Nc(t, n) {
        let a = I(246);
        return a.statement = Nt(t), a.expression = n, a.transformFlags |= q(a.statement) | q(a.expression), a.jsDoc = void 0, a.flowNode = void 0, a;
      }
      function Dc(t, n, a) {
        return t.statement !== n || t.expression !== a ? U(Nc(n, a), t) : t;
      }
      function Pc(t, n) {
        let a = I(247);
        return a.expression = t, a.statement = Nt(n), a.transformFlags |= q(a.expression) | q(a.statement), a.jsDoc = void 0, a.flowNode = void 0, a;
      }
      function rp(t, n, a) {
        return t.expression !== n || t.statement !== a ? U(Pc(n, a), t) : t;
      }
      function Fc(t, n, a, c) {
        let f = I(248);
        return f.initializer = t, f.condition = n, f.incrementor = a, f.statement = Nt(c), f.transformFlags |= q(f.initializer) | q(f.condition) | q(f.incrementor) | q(f.statement), f.jsDoc = void 0, f.locals = void 0, f.nextContainer = void 0, f.flowNode = void 0, f;
      }
      function Ic(t, n, a, c, f) {
        return t.initializer !== n || t.condition !== a || t.incrementor !== c || t.statement !== f ? U(Fc(n, a, c, f), t) : t;
      }
      function Os(t, n, a) {
        let c = I(249);
        return c.initializer = t, c.expression = n, c.statement = Nt(a), c.transformFlags |= q(c.initializer) | q(c.expression) | q(c.statement), c.jsDoc = void 0, c.locals = void 0, c.nextContainer = void 0, c.flowNode = void 0, c;
      }
      function np(t, n, a, c) {
        return t.initializer !== n || t.expression !== a || t.statement !== c ? U(Os(n, a, c), t) : t;
      }
      function Lc(t, n, a, c) {
        let f = I(250);
        return f.awaitModifier = t, f.initializer = n, f.expression = u().parenthesizeExpressionForDisallowedComma(a), f.statement = Nt(c), f.transformFlags |= q(f.awaitModifier) | q(f.initializer) | q(f.expression) | q(f.statement) | 1024, t && (f.transformFlags |= 128), f.jsDoc = void 0, f.locals = void 0, f.nextContainer = void 0, f.flowNode = void 0, f;
      }
      function ap(t, n, a, c, f) {
        return t.awaitModifier !== n || t.initializer !== a || t.expression !== c || t.statement !== f ? U(Lc(n, a, c, f), t) : t;
      }
      function Oc(t) {
        let n = I(251);
        return n.label = tt(t), n.transformFlags |= q(n.label) | 4194304, n.jsDoc = void 0, n.flowNode = void 0, n;
      }
      function ip(t, n) {
        return t.label !== n ? U(Oc(n), t) : t;
      }
      function Ms(t) {
        let n = I(252);
        return n.label = tt(t), n.transformFlags |= q(n.label) | 4194304, n.jsDoc = void 0, n.flowNode = void 0, n;
      }
      function Mc(t, n) {
        return t.label !== n ? U(Ms(n), t) : t;
      }
      function Js(t) {
        let n = I(253);
        return n.expression = t, n.transformFlags |= q(n.expression) | 128 | 4194304, n.jsDoc = void 0, n.flowNode = void 0, n;
      }
      function sp(t, n) {
        return t.expression !== n ? U(Js(n), t) : t;
      }
      function Bs(t, n) {
        let a = I(254);
        return a.expression = t, a.statement = Nt(n), a.transformFlags |= q(a.expression) | q(a.statement), a.jsDoc = void 0, a.flowNode = void 0, a;
      }
      function Jc(t, n, a) {
        return t.expression !== n || t.statement !== a ? U(Bs(n, a), t) : t;
      }
      function Ks(t, n) {
        let a = I(255);
        return a.expression = u().parenthesizeExpressionForDisallowedComma(t), a.caseBlock = n, a.transformFlags |= q(a.expression) | q(a.caseBlock), a.jsDoc = void 0, a.flowNode = void 0, a.possiblyExhaustive = !1, a;
      }
      function ha(t, n, a) {
        return t.expression !== n || t.caseBlock !== a ? U(Ks(n, a), t) : t;
      }
      function Bc(t, n) {
        let a = I(256);
        return a.label = tt(t), a.statement = Nt(n), a.transformFlags |= q(a.label) | q(a.statement), a.jsDoc = void 0, a.flowNode = void 0, a;
      }
      function Kc(t, n, a) {
        return t.label !== n || t.statement !== a ? U(Bc(n, a), t) : t;
      }
      function Uc(t) {
        let n = I(257);
        return n.expression = t, n.transformFlags |= q(n.expression), n.jsDoc = void 0, n.flowNode = void 0, n;
      }
      function op(t, n) {
        return t.expression !== n ? U(Uc(n), t) : t;
      }
      function jc(t, n, a) {
        let c = I(258);
        return c.tryBlock = t, c.catchClause = n, c.finallyBlock = a, c.transformFlags |= q(c.tryBlock) | q(c.catchClause) | q(c.finallyBlock), c.jsDoc = void 0, c.flowNode = void 0, c;
      }
      function cp(t, n, a, c) {
        return t.tryBlock !== n || t.catchClause !== a || t.finallyBlock !== c ? U(jc(n, a, c), t) : t;
      }
      function qc() {
        let t = I(259);
        return t.jsDoc = void 0, t.flowNode = void 0, t;
      }
      function wi(t, n, a, c) {
        let f = ae(260);
        return f.name = tt(t), f.exclamationToken = n, f.type = a, f.initializer = ji(c), f.transformFlags |= Pr(f.name) | q(f.initializer) | (f.exclamationToken ?? f.type ? 1 : 0), f.jsDoc = void 0, f;
      }
      function Rc(t, n, a, c, f) {
        return t.name !== n || t.type !== c || t.exclamationToken !== a || t.initializer !== f ? U(wi(n, a, c, f), t) : t;
      }
      function Us(t, n = 0) {
        let a = I(261);
        return a.flags |= n & 7, a.declarations = he(t), a.transformFlags |= Ee(a.declarations) | 4194304, n & 7 && (a.transformFlags |= 263168), n & 4 && (a.transformFlags |= 4), a;
      }
      function up(t, n) {
        return t.declarations !== n ? U(Us(n, t.flags), t) : t;
      }
      function zc(t, n, a, c, f, x, R) {
        let fe = ae(262);
        if (fe.modifiers = De(t), fe.asteriskToken = n, fe.name = tt(a), fe.typeParameters = De(c), fe.parameters = he(f), fe.type = x, fe.body = R, !fe.body || Dr(fe.modifiers) & 128) fe.transformFlags = 1;
        else {
          let Je = Dr(fe.modifiers) & 1024, Zt = !!fe.asteriskToken, Ar = Je && Zt;
          fe.transformFlags = Ee(fe.modifiers) | q(fe.asteriskToken) | Pr(fe.name) | Ee(fe.typeParameters) | Ee(fe.parameters) | q(fe.type) | q(fe.body) & -67108865 | (Ar ? 128 : Je ? 256 : Zt ? 2048 : 0) | (fe.typeParameters || fe.type ? 1 : 0) | 4194304;
        }
        return fe.typeArguments = void 0, fe.jsDoc = void 0, fe.locals = void 0, fe.nextContainer = void 0, fe.endFlowNode = void 0, fe.returnFlowNode = void 0, fe;
      }
      function js(t, n, a, c, f, x, R, fe) {
        return t.modifiers !== n || t.asteriskToken !== a || t.name !== c || t.typeParameters !== f || t.parameters !== x || t.type !== R || t.body !== fe ? lp(zc(n, a, c, f, x, R, fe), t) : t;
      }
      function lp(t, n) {
        return t !== n && t.modifiers === n.modifiers && (t.modifiers = n.modifiers), Le(t, n);
      }
      function $c(t, n, a, c, f) {
        let x = ae(263);
        return x.modifiers = De(t), x.name = tt(n), x.typeParameters = De(a), x.heritageClauses = De(c), x.members = he(f), Dr(x.modifiers) & 128 ? x.transformFlags = 1 : (x.transformFlags |= Ee(x.modifiers) | Pr(x.name) | Ee(x.typeParameters) | Ee(x.heritageClauses) | Ee(x.members) | (x.typeParameters ? 1 : 0) | 1024, x.transformFlags & 8192 && (x.transformFlags |= 1)), x.jsDoc = void 0, x;
      }
      function Ai(t, n, a, c, f, x) {
        return t.modifiers !== n || t.name !== a || t.typeParameters !== c || t.heritageClauses !== f || t.members !== x ? U($c(n, a, c, f, x), t) : t;
      }
      function Gc(t, n, a, c, f) {
        let x = ae(264);
        return x.modifiers = De(t), x.name = tt(n), x.typeParameters = De(a), x.heritageClauses = De(c), x.members = he(f), x.transformFlags = 1, x.jsDoc = void 0, x;
      }
      function Wc(t, n, a, c, f, x) {
        return t.modifiers !== n || t.name !== a || t.typeParameters !== c || t.heritageClauses !== f || t.members !== x ? U(Gc(n, a, c, f, x), t) : t;
      }
      function ot(t, n, a, c) {
        let f = ae(265);
        return f.modifiers = De(t), f.name = tt(n), f.typeParameters = De(a), f.type = c, f.transformFlags = 1, f.jsDoc = void 0, f.locals = void 0, f.nextContainer = void 0, f;
      }
      function wn(t, n, a, c, f) {
        return t.modifiers !== n || t.name !== a || t.typeParameters !== c || t.type !== f ? U(ot(n, a, c, f), t) : t;
      }
      function qs(t, n, a) {
        let c = ae(266);
        return c.modifiers = De(t), c.name = tt(n), c.members = he(a), c.transformFlags |= Ee(c.modifiers) | q(c.name) | Ee(c.members) | 1, c.transformFlags &= -67108865, c.jsDoc = void 0, c;
      }
      function An(t, n, a, c) {
        return t.modifiers !== n || t.name !== a || t.members !== c ? U(qs(n, a, c), t) : t;
      }
      function Vc(t, n, a, c = 0) {
        let f = ae(267);
        return f.modifiers = De(t), f.flags |= c & 2088, f.name = n, f.body = a, Dr(f.modifiers) & 128 ? f.transformFlags = 1 : f.transformFlags |= Ee(f.modifiers) | q(f.name) | q(f.body) | 1, f.transformFlags &= -67108865, f.jsDoc = void 0, f.locals = void 0, f.nextContainer = void 0, f;
      }
      function Et(t, n, a, c) {
        return t.modifiers !== n || t.name !== a || t.body !== c ? U(Vc(n, a, c, t.flags), t) : t;
      }
      function Nn(t) {
        let n = I(268);
        return n.statements = he(t), n.transformFlags |= Ee(n.statements), n.jsDoc = void 0, n;
      }
      function qt(t, n) {
        return t.statements !== n ? U(Nn(n), t) : t;
      }
      function Hc(t) {
        let n = I(269);
        return n.clauses = he(t), n.transformFlags |= Ee(n.clauses), n.locals = void 0, n.nextContainer = void 0, n;
      }
      function dp(t, n) {
        return t.clauses !== n ? U(Hc(n), t) : t;
      }
      function Xc(t) {
        let n = ae(270);
        return n.name = tt(t), n.transformFlags |= ui(n.name) | 1, n.modifiers = void 0, n.jsDoc = void 0, n;
      }
      function Qc(t, n) {
        return t.name !== n ? pp(Xc(n), t) : t;
      }
      function pp(t, n) {
        return t !== n && (t.modifiers = n.modifiers), U(t, n);
      }
      function Zc(t, n, a, c) {
        let f = ae(271);
        return f.modifiers = De(t), f.name = tt(a), f.isTypeOnly = n, f.moduleReference = c, f.transformFlags |= Ee(f.modifiers) | ui(f.name) | q(f.moduleReference), x2(f.moduleReference) || (f.transformFlags |= 1), f.transformFlags &= -67108865, f.jsDoc = void 0, f;
      }
      function Yc(t, n, a, c, f) {
        return t.modifiers !== n || t.isTypeOnly !== a || t.name !== c || t.moduleReference !== f ? U(Zc(n, a, c, f), t) : t;
      }
      function eu(t, n, a, c) {
        let f = I(272);
        return f.modifiers = De(t), f.importClause = n, f.moduleSpecifier = a, f.attributes = f.assertClause = c, f.transformFlags |= q(f.importClause) | q(f.moduleSpecifier), f.transformFlags &= -67108865, f.jsDoc = void 0, f;
      }
      function tu(t, n, a, c, f) {
        return t.modifiers !== n || t.importClause !== a || t.moduleSpecifier !== c || t.attributes !== f ? U(eu(n, a, c, f), t) : t;
      }
      function ru(t, n, a) {
        let c = ae(273);
        return c.isTypeOnly = t, c.name = n, c.namedBindings = a, c.transformFlags |= q(c.name) | q(c.namedBindings), t && (c.transformFlags |= 1), c.transformFlags &= -67108865, c;
      }
      function nu(t, n, a, c) {
        return t.isTypeOnly !== n || t.name !== a || t.namedBindings !== c ? U(ru(n, a, c), t) : t;
      }
      function Rs(t, n) {
        let a = I(300);
        return a.elements = he(t), a.multiLine = n, a.token = 132, a.transformFlags |= 4, a;
      }
      function fp(t, n, a) {
        return t.elements !== n || t.multiLine !== a ? U(Rs(n, a), t) : t;
      }
      function qa(t, n) {
        let a = I(301);
        return a.name = t, a.value = n, a.transformFlags |= 4, a;
      }
      function au(t, n, a) {
        return t.name !== n || t.value !== a ? U(qa(n, a), t) : t;
      }
      function zs(t, n) {
        let a = I(302);
        return a.assertClause = t, a.multiLine = n, a;
      }
      function iu(t, n, a) {
        return t.assertClause !== n || t.multiLine !== a ? U(zs(n, a), t) : t;
      }
      function su(t, n, a) {
        let c = I(300);
        return c.token = a ?? 118, c.elements = he(t), c.multiLine = n, c.transformFlags |= 4, c;
      }
      function $s(t, n, a) {
        return t.elements !== n || t.multiLine !== a ? U(su(n, a, t.token), t) : t;
      }
      function ou(t, n) {
        let a = I(301);
        return a.name = t, a.value = n, a.transformFlags |= 4, a;
      }
      function cu(t, n, a) {
        return t.name !== n || t.value !== a ? U(ou(n, a), t) : t;
      }
      function uu(t) {
        let n = ae(274);
        return n.name = t, n.transformFlags |= q(n.name), n.transformFlags &= -67108865, n;
      }
      function mp(t, n) {
        return t.name !== n ? U(uu(n), t) : t;
      }
      function lu(t) {
        let n = ae(280);
        return n.name = t, n.transformFlags |= q(n.name) | 32, n.transformFlags &= -67108865, n;
      }
      function hp(t, n) {
        return t.name !== n ? U(lu(n), t) : t;
      }
      function du(t) {
        let n = I(275);
        return n.elements = he(t), n.transformFlags |= Ee(n.elements), n.transformFlags &= -67108865, n;
      }
      function pu(t, n) {
        return t.elements !== n ? U(du(n), t) : t;
      }
      function Dn(t, n, a) {
        let c = ae(276);
        return c.isTypeOnly = t, c.propertyName = n, c.name = a, c.transformFlags |= q(c.propertyName) | q(c.name), c.transformFlags &= -67108865, c;
      }
      function gp(t, n, a, c) {
        return t.isTypeOnly !== n || t.propertyName !== a || t.name !== c ? U(Dn(n, a, c), t) : t;
      }
      function Ni(t, n, a) {
        let c = ae(277);
        return c.modifiers = De(t), c.isExportEquals = n, c.expression = n ? u().parenthesizeRightSideOfBinary(64, void 0, a) : u().parenthesizeExpressionOfExportDefault(a), c.transformFlags |= Ee(c.modifiers) | q(c.expression), c.transformFlags &= -67108865, c.jsDoc = void 0, c;
      }
      function Ra(t, n, a) {
        return t.modifiers !== n || t.expression !== a ? U(Ni(n, t.isExportEquals, a), t) : t;
      }
      function Di(t, n, a, c, f) {
        let x = ae(278);
        return x.modifiers = De(t), x.isTypeOnly = n, x.exportClause = a, x.moduleSpecifier = c, x.attributes = x.assertClause = f, x.transformFlags |= Ee(x.modifiers) | q(x.exportClause) | q(x.moduleSpecifier), x.transformFlags &= -67108865, x.jsDoc = void 0, x;
      }
      function fu(t, n, a, c, f, x) {
        return t.modifiers !== n || t.isTypeOnly !== a || t.exportClause !== c || t.moduleSpecifier !== f || t.attributes !== x ? za(Di(n, a, c, f, x), t) : t;
      }
      function za(t, n) {
        return t !== n && t.modifiers === n.modifiers && (t.modifiers = n.modifiers), U(t, n);
      }
      function Gs(t) {
        let n = I(279);
        return n.elements = he(t), n.transformFlags |= Ee(n.elements), n.transformFlags &= -67108865, n;
      }
      function yp(t, n) {
        return t.elements !== n ? U(Gs(n), t) : t;
      }
      function Pi(t, n, a) {
        let c = I(281);
        return c.isTypeOnly = t, c.propertyName = tt(n), c.name = tt(a), c.transformFlags |= q(c.propertyName) | q(c.name), c.transformFlags &= -67108865, c.jsDoc = void 0, c;
      }
      function _p(t, n, a, c) {
        return t.isTypeOnly !== n || t.propertyName !== a || t.name !== c ? U(Pi(n, a, c), t) : t;
      }
      function Tp() {
        let t = ae(282);
        return t.jsDoc = void 0, t;
      }
      function Ws(t) {
        let n = I(283);
        return n.expression = t, n.transformFlags |= q(n.expression), n.transformFlags &= -67108865, n;
      }
      function xp(t, n) {
        return t.expression !== n ? U(Ws(n), t) : t;
      }
      function mu(t) {
        return I(t);
      }
      function hu(t, n, a = !1) {
        let c = Vs(t, a ? n && u().parenthesizeNonArrayTypeOfPostfixType(n) : n);
        return c.postfix = a, c;
      }
      function Vs(t, n) {
        let a = I(t);
        return a.type = n, a;
      }
      function kp(t, n, a) {
        return n.type !== a ? U(hu(t, a, n.postfix), n) : n;
      }
      function bp(t, n, a) {
        return n.type !== a ? U(Vs(t, a), n) : n;
      }
      function gu(t, n) {
        let a = ae(317);
        return a.parameters = De(t), a.type = n, a.transformFlags = Ee(a.parameters) | (a.type ? 1 : 0), a.jsDoc = void 0, a.locals = void 0, a.nextContainer = void 0, a.typeArguments = void 0, a;
      }
      function vp(t, n, a) {
        return t.parameters !== n || t.type !== a ? U(gu(n, a), t) : t;
      }
      function yu(t, n = !1) {
        let a = ae(322);
        return a.jsDocPropertyTags = De(t), a.isArrayType = n, a;
      }
      function Sp(t, n, a) {
        return t.jsDocPropertyTags !== n || t.isArrayType !== a ? U(yu(n, a), t) : t;
      }
      function _u(t) {
        let n = I(309);
        return n.type = t, n;
      }
      function Hs(t, n) {
        return t.type !== n ? U(_u(n), t) : t;
      }
      function Tu(t, n, a) {
        let c = ae(323);
        return c.typeParameters = De(t), c.parameters = he(n), c.type = a, c.jsDoc = void 0, c.locals = void 0, c.nextContainer = void 0, c;
      }
      function Cp(t, n, a, c) {
        return t.typeParameters !== n || t.parameters !== a || t.type !== c ? U(Tu(n, a, c), t) : t;
      }
      function rr(t) {
        let n = Oo(t.kind);
        return t.tagName.escapedText === ri(n) ? t.tagName : Re(n);
      }
      function Er(t, n, a) {
        let c = I(t);
        return c.tagName = n, c.comment = a, c;
      }
      function Hn(t, n, a) {
        let c = ae(t);
        return c.tagName = n, c.comment = a, c;
      }
      function Xs(t, n, a, c) {
        let f = Er(345, t ?? Re("template"), c);
        return f.constraint = n, f.typeParameters = he(a), f;
      }
      function xu(t, n = rr(t), a, c, f) {
        return t.tagName !== n || t.constraint !== a || t.typeParameters !== c || t.comment !== f ? U(Xs(n, a, c, f), t) : t;
      }
      function Fi(t, n, a, c) {
        let f = Hn(346, t ?? Re("typedef"), c);
        return f.typeExpression = n, f.fullName = a, f.name = D2(a), f.locals = void 0, f.nextContainer = void 0, f;
      }
      function Ep(t, n = rr(t), a, c, f) {
        return t.tagName !== n || t.typeExpression !== a || t.fullName !== c || t.comment !== f ? U(Fi(n, a, c, f), t) : t;
      }
      function Qs(t, n, a, c, f, x) {
        let R = Hn(341, t ?? Re("param"), x);
        return R.typeExpression = c, R.name = n, R.isNameFirst = !!f, R.isBracketed = a, R;
      }
      function wp(t, n = rr(t), a, c, f, x, R) {
        return t.tagName !== n || t.name !== a || t.isBracketed !== c || t.typeExpression !== f || t.isNameFirst !== x || t.comment !== R ? U(Qs(n, a, c, f, x, R), t) : t;
      }
      function ku(t, n, a, c, f, x) {
        let R = Hn(348, t ?? Re("prop"), x);
        return R.typeExpression = c, R.name = n, R.isNameFirst = !!f, R.isBracketed = a, R;
      }
      function bu(t, n = rr(t), a, c, f, x, R) {
        return t.tagName !== n || t.name !== a || t.isBracketed !== c || t.typeExpression !== f || t.isNameFirst !== x || t.comment !== R ? U(ku(n, a, c, f, x, R), t) : t;
      }
      function vu(t, n, a, c) {
        let f = Hn(338, t ?? Re("callback"), c);
        return f.typeExpression = n, f.fullName = a, f.name = D2(a), f.locals = void 0, f.nextContainer = void 0, f;
      }
      function Su(t, n = rr(t), a, c, f) {
        return t.tagName !== n || t.typeExpression !== a || t.fullName !== c || t.comment !== f ? U(vu(n, a, c, f), t) : t;
      }
      function Cu(t, n, a) {
        let c = Er(339, t ?? Re("overload"), a);
        return c.typeExpression = n, c;
      }
      function Zs(t, n = rr(t), a, c) {
        return t.tagName !== n || t.typeExpression !== a || t.comment !== c ? U(Cu(n, a, c), t) : t;
      }
      function Ys(t, n, a) {
        let c = Er(328, t ?? Re("augments"), a);
        return c.class = n, c;
      }
      function $a(t, n = rr(t), a, c) {
        return t.tagName !== n || t.class !== a || t.comment !== c ? U(Ys(n, a, c), t) : t;
      }
      function Eu(t, n, a) {
        let c = Er(329, t ?? Re("implements"), a);
        return c.class = n, c;
      }
      function Xn(t, n, a) {
        let c = Er(347, t ?? Re("see"), a);
        return c.name = n, c;
      }
      function Ii(t, n, a, c) {
        return t.tagName !== n || t.name !== a || t.comment !== c ? U(Xn(n, a, c), t) : t;
      }
      function wu(t) {
        let n = I(310);
        return n.name = t, n;
      }
      function Ap(t, n) {
        return t.name !== n ? U(wu(n), t) : t;
      }
      function Au(t, n) {
        let a = I(311);
        return a.left = t, a.right = n, a.transformFlags |= q(a.left) | q(a.right), a;
      }
      function Np(t, n, a) {
        return t.left !== n || t.right !== a ? U(Au(n, a), t) : t;
      }
      function Nu(t, n) {
        let a = I(324);
        return a.name = t, a.text = n, a;
      }
      function Du(t, n, a) {
        return t.name !== n ? U(Nu(n, a), t) : t;
      }
      function Pu(t, n) {
        let a = I(325);
        return a.name = t, a.text = n, a;
      }
      function Dp(t, n, a) {
        return t.name !== n ? U(Pu(n, a), t) : t;
      }
      function Fu(t, n) {
        let a = I(326);
        return a.name = t, a.text = n, a;
      }
      function Pp(t, n, a) {
        return t.name !== n ? U(Fu(n, a), t) : t;
      }
      function Fp(t, n = rr(t), a, c) {
        return t.tagName !== n || t.class !== a || t.comment !== c ? U(Eu(n, a, c), t) : t;
      }
      function Iu(t, n, a) {
        return Er(t, n ?? Re(Oo(t)), a);
      }
      function Ip(t, n, a = rr(n), c) {
        return n.tagName !== a || n.comment !== c ? U(Iu(t, a, c), n) : n;
      }
      function Lu(t, n, a, c) {
        let f = Er(t, n ?? Re(Oo(t)), c);
        return f.typeExpression = a, f;
      }
      function Lp(t, n, a = rr(n), c, f) {
        return n.tagName !== a || n.typeExpression !== c || n.comment !== f ? U(Lu(t, a, c, f), n) : n;
      }
      function Ou(t, n) {
        return Er(327, t, n);
      }
      function Op(t, n, a) {
        return t.tagName !== n || t.comment !== a ? U(Ou(n, a), t) : t;
      }
      function Mu(t, n, a) {
        let c = Hn(340, t ?? Re(Oo(340)), a);
        return c.typeExpression = n, c.locals = void 0, c.nextContainer = void 0, c;
      }
      function eo(t, n = rr(t), a, c) {
        return t.tagName !== n || t.typeExpression !== a || t.comment !== c ? U(Mu(n, a, c), t) : t;
      }
      function Ju(t, n, a, c, f) {
        let x = Er(351, t ?? Re("import"), f);
        return x.importClause = n, x.moduleSpecifier = a, x.attributes = c, x.comment = f, x;
      }
      function Bu(t, n, a, c, f, x) {
        return t.tagName !== n || t.comment !== x || t.importClause !== a || t.moduleSpecifier !== c || t.attributes !== f ? U(Ju(n, a, c, f, x), t) : t;
      }
      function to(t) {
        let n = I(321);
        return n.text = t, n;
      }
      function Mp(t, n) {
        return t.text !== n ? U(to(n), t) : t;
      }
      function Ga(t, n) {
        let a = I(320);
        return a.comment = t, a.tags = De(n), a;
      }
      function Ku(t, n, a) {
        return t.comment !== n || t.tags !== a ? U(Ga(n, a), t) : t;
      }
      function Uu(t, n, a) {
        let c = I(284);
        return c.openingElement = t, c.children = he(n), c.closingElement = a, c.transformFlags |= q(c.openingElement) | Ee(c.children) | q(c.closingElement) | 2, c;
      }
      function Jp(t, n, a, c) {
        return t.openingElement !== n || t.children !== a || t.closingElement !== c ? U(Uu(n, a, c), t) : t;
      }
      function ju(t, n, a) {
        let c = I(285);
        return c.tagName = t, c.typeArguments = De(n), c.attributes = a, c.transformFlags |= q(c.tagName) | Ee(c.typeArguments) | q(c.attributes) | 2, c.typeArguments && (c.transformFlags |= 1), c;
      }
      function ro(t, n, a, c) {
        return t.tagName !== n || t.typeArguments !== a || t.attributes !== c ? U(ju(n, a, c), t) : t;
      }
      function no(t, n, a) {
        let c = I(286);
        return c.tagName = t, c.typeArguments = De(n), c.attributes = a, c.transformFlags |= q(c.tagName) | Ee(c.typeArguments) | q(c.attributes) | 2, n && (c.transformFlags |= 1), c;
      }
      function qu(t, n, a, c) {
        return t.tagName !== n || t.typeArguments !== a || t.attributes !== c ? U(no(n, a, c), t) : t;
      }
      function Li(t) {
        let n = I(287);
        return n.tagName = t, n.transformFlags |= q(n.tagName) | 2, n;
      }
      function Xt(t, n) {
        return t.tagName !== n ? U(Li(n), t) : t;
      }
      function ao(t, n, a) {
        let c = I(288);
        return c.openingFragment = t, c.children = he(n), c.closingFragment = a, c.transformFlags |= q(c.openingFragment) | Ee(c.children) | q(c.closingFragment) | 2, c;
      }
      function Ru(t, n, a, c) {
        return t.openingFragment !== n || t.children !== a || t.closingFragment !== c ? U(ao(n, a, c), t) : t;
      }
      function Oi(t, n) {
        let a = I(12);
        return a.text = t, a.containsOnlyTriviaWhiteSpaces = !!n, a.transformFlags |= 2, a;
      }
      function zu(t, n, a) {
        return t.text !== n || t.containsOnlyTriviaWhiteSpaces !== a ? U(Oi(n, a), t) : t;
      }
      function Bp() {
        let t = I(289);
        return t.transformFlags |= 2, t;
      }
      function Kp() {
        let t = I(290);
        return t.transformFlags |= 2, t;
      }
      function $u(t, n) {
        let a = ae(291);
        return a.name = t, a.initializer = n, a.transformFlags |= q(a.name) | q(a.initializer) | 2, a;
      }
      function Mi(t, n, a) {
        return t.name !== n || t.initializer !== a ? U($u(n, a), t) : t;
      }
      function Gu(t) {
        let n = ae(292);
        return n.properties = he(t), n.transformFlags |= Ee(n.properties) | 2, n;
      }
      function Up(t, n) {
        return t.properties !== n ? U(Gu(n), t) : t;
      }
      function Wu(t) {
        let n = I(293);
        return n.expression = t, n.transformFlags |= q(n.expression) | 2, n;
      }
      function jp(t, n) {
        return t.expression !== n ? U(Wu(n), t) : t;
      }
      function Ji(t, n) {
        let a = I(294);
        return a.dotDotDotToken = t, a.expression = n, a.transformFlags |= q(a.dotDotDotToken) | q(a.expression) | 2, a;
      }
      function Wa(t, n) {
        return t.expression !== n ? U(Ji(t.dotDotDotToken, n), t) : t;
      }
      function Vu(t, n) {
        let a = I(295);
        return a.namespace = t, a.name = n, a.transformFlags |= q(a.namespace) | q(a.name) | 2, a;
      }
      function io(t, n, a) {
        return t.namespace !== n || t.name !== a ? U(Vu(n, a), t) : t;
      }
      function so(t, n) {
        let a = I(296);
        return a.expression = u().parenthesizeExpressionForDisallowedComma(t), a.statements = he(n), a.transformFlags |= q(a.expression) | Ee(a.statements), a.jsDoc = void 0, a;
      }
      function qp(t, n, a) {
        return t.expression !== n || t.statements !== a ? U(so(n, a), t) : t;
      }
      function ga(t) {
        let n = I(297);
        return n.statements = he(t), n.transformFlags = Ee(n.statements), n;
      }
      function Hu(t, n) {
        return t.statements !== n ? U(ga(n), t) : t;
      }
      function Xu(t, n) {
        let a = I(298);
        switch (a.token = t, a.types = he(n), a.transformFlags |= Ee(a.types), t) {
          case 96:
            a.transformFlags |= 1024;
            break;
          case 119:
            a.transformFlags |= 1;
            break;
          default:
            return B.assertNever(t);
        }
        return a;
      }
      function Rp(t, n) {
        return t.types !== n ? U(Xu(t.token, n), t) : t;
      }
      function oo(t, n) {
        let a = I(299);
        return a.variableDeclaration = Pn(t), a.block = n, a.transformFlags |= q(a.variableDeclaration) | q(a.block) | (t ? 0 : 64), a.locals = void 0, a.nextContainer = void 0, a;
      }
      function Qu(t, n, a) {
        return t.variableDeclaration !== n || t.block !== a ? U(oo(n, a), t) : t;
      }
      function Bi(t, n) {
        let a = ae(303);
        return a.name = tt(t), a.initializer = u().parenthesizeExpressionForDisallowedComma(n), a.transformFlags |= Pr(a.name) | q(a.initializer), a.modifiers = void 0, a.questionToken = void 0, a.exclamationToken = void 0, a.jsDoc = void 0, a;
      }
      function Qn(t, n, a) {
        return t.name !== n || t.initializer !== a ? zp(Bi(n, a), t) : t;
      }
      function zp(t, n) {
        return t !== n && (t.modifiers = n.modifiers, t.questionToken = n.questionToken, t.exclamationToken = n.exclamationToken), U(t, n);
      }
      function Zu(t, n) {
        let a = ae(304);
        return a.name = tt(t), a.objectAssignmentInitializer = n && u().parenthesizeExpressionForDisallowedComma(n), a.transformFlags |= ui(a.name) | q(a.objectAssignmentInitializer) | 1024, a.equalsToken = void 0, a.modifiers = void 0, a.questionToken = void 0, a.exclamationToken = void 0, a.jsDoc = void 0, a;
      }
      function $p(t, n, a) {
        return t.name !== n || t.objectAssignmentInitializer !== a ? Gp(Zu(n, a), t) : t;
      }
      function Gp(t, n) {
        return t !== n && (t.modifiers = n.modifiers, t.questionToken = n.questionToken, t.exclamationToken = n.exclamationToken, t.equalsToken = n.equalsToken), U(t, n);
      }
      function co(t) {
        let n = ae(305);
        return n.expression = u().parenthesizeExpressionForDisallowedComma(t), n.transformFlags |= q(n.expression) | 128 | 65536, n.jsDoc = void 0, n;
      }
      function Yu(t, n) {
        return t.expression !== n ? U(co(n), t) : t;
      }
      function wr(t, n) {
        let a = ae(306);
        return a.name = tt(t), a.initializer = n && u().parenthesizeExpressionForDisallowedComma(n), a.transformFlags |= q(a.name) | q(a.initializer) | 1, a.jsDoc = void 0, a;
      }
      function el(t, n, a) {
        return t.name !== n || t.initializer !== a ? U(wr(n, a), t) : t;
      }
      function Wp(t, n, a) {
        let c = r.createBaseSourceFileNode(307);
        return c.statements = he(t), c.endOfFileToken = n, c.flags |= a, c.text = "", c.fileName = "", c.path = "", c.resolvedPath = "", c.originalFileName = "", c.languageVersion = 1, c.languageVariant = 0, c.scriptKind = 0, c.isDeclarationFile = !1, c.hasNoDefaultLib = !1, c.transformFlags |= Ee(c.statements) | q(c.endOfFileToken), c.locals = void 0, c.nextContainer = void 0, c.endFlowNode = void 0, c.nodeCount = 0, c.identifierCount = 0, c.symbolCount = 0, c.parseDiagnostics = void 0, c.bindDiagnostics = void 0, c.bindSuggestionDiagnostics = void 0, c.lineMap = void 0, c.externalModuleIndicator = void 0, c.setExternalModuleIndicator = void 0, c.pragmas = void 0, c.checkJsDirective = void 0, c.referencedFiles = void 0, c.typeReferenceDirectives = void 0, c.libReferenceDirectives = void 0, c.amdDependencies = void 0, c.commentDirectives = void 0, c.identifiers = void 0, c.packageJsonLocations = void 0, c.packageJsonScope = void 0, c.imports = void 0, c.moduleAugmentations = void 0, c.ambientModuleNames = void 0, c.classifiableNames = void 0, c.impliedNodeFormat = void 0, c;
      }
      function tl(t) {
        let n = Object.create(t.redirectTarget);
        return Object.defineProperties(n, { id: { get() {
          return this.redirectInfo.redirectTarget.id;
        }, set(a) {
          this.redirectInfo.redirectTarget.id = a;
        } }, symbol: { get() {
          return this.redirectInfo.redirectTarget.symbol;
        }, set(a) {
          this.redirectInfo.redirectTarget.symbol = a;
        } } }), n.redirectInfo = t, n;
      }
      function Vp(t) {
        let n = tl(t.redirectInfo);
        return n.flags |= t.flags & -17, n.fileName = t.fileName, n.path = t.path, n.resolvedPath = t.resolvedPath, n.originalFileName = t.originalFileName, n.packageJsonLocations = t.packageJsonLocations, n.packageJsonScope = t.packageJsonScope, n.emitNode = void 0, n;
      }
      function rl(t) {
        let n = r.createBaseSourceFileNode(307);
        n.flags |= t.flags & -17;
        for (let a in t) if (!(hn(n, a) || !hn(t, a))) {
          if (a === "emitNode") {
            n.emitNode = void 0;
            continue;
          }
          n[a] = t[a];
        }
        return n;
      }
      function Ki(t) {
        let n = t.redirectInfo ? Vp(t) : rl(t);
        return i(n, t), n;
      }
      function Hp(t, n, a, c, f, x, R) {
        let fe = Ki(t);
        return fe.statements = he(n), fe.isDeclarationFile = a, fe.referencedFiles = c, fe.typeReferenceDirectives = f, fe.hasNoDefaultLib = x, fe.libReferenceDirectives = R, fe.transformFlags = Ee(fe.statements) | q(fe.endOfFileToken), fe;
      }
      function Xp(t, n, a = t.isDeclarationFile, c = t.referencedFiles, f = t.typeReferenceDirectives, x = t.hasNoDefaultLib, R = t.libReferenceDirectives) {
        return t.statements !== n || t.isDeclarationFile !== a || t.referencedFiles !== c || t.typeReferenceDirectives !== f || t.hasNoDefaultLib !== x || t.libReferenceDirectives !== R ? U(Hp(t, n, a, c, f, x, R), t) : t;
      }
      function uo(t) {
        let n = I(308);
        return n.sourceFiles = t, n.syntheticFileReferences = void 0, n.syntheticTypeReferences = void 0, n.syntheticLibReferences = void 0, n.hasNoDefaultLib = void 0, n;
      }
      function Qp(t, n) {
        return t.sourceFiles !== n ? U(uo(n), t) : t;
      }
      function Zp(t, n = !1, a) {
        let c = I(237);
        return c.type = t, c.isSpread = n, c.tupleNameSource = a, c;
      }
      function Ui(t) {
        let n = I(352);
        return n._children = t, n;
      }
      function nl(t) {
        let n = I(353);
        return n.original = t, sr(n, t), n;
      }
      function al(t, n) {
        let a = I(355);
        return a.expression = t, a.original = n, a.transformFlags |= q(a.expression) | 1, sr(a, n), a;
      }
      function il(t, n) {
        return t.expression !== n ? U(al(n, t.original), t) : t;
      }
      function Yp() {
        return I(354);
      }
      function e1(t) {
        if (oi(t) && !Co(t) && !t.original && !t.emitNode && !t.id) {
          if (T_(t)) return t.elements;
          if (pi(t) && Jy(t.operatorToken)) return [t.left, t.right];
        }
        return t;
      }
      function lo(t) {
        let n = I(356);
        return n.elements = he(t0(t, e1)), n.transformFlags |= Ee(n.elements), n;
      }
      function sl(t, n) {
        return t.elements !== n ? U(lo(n), t) : t;
      }
      function po(t, n) {
        let a = I(357);
        return a.expression = t, a.thisArg = n, a.transformFlags |= q(a.expression) | q(a.thisArg), a;
      }
      function ol(t, n, a) {
        return t.expression !== n || t.thisArg !== a ? U(po(n, a), t) : t;
      }
      function t1(t) {
        let n = br(t.escapedText);
        return n.flags |= t.flags & -17, n.transformFlags = t.transformFlags, i(n, t), setIdentifierAutoGenerate(n, { ...t.emitNode.autoGenerate }), n;
      }
      function r1(t) {
        let n = br(t.escapedText);
        n.flags |= t.flags & -17, n.jsDoc = t.jsDoc, n.flowNode = t.flowNode, n.symbol = t.symbol, n.transformFlags = t.transformFlags, i(n, t);
        let a = getIdentifierTypeArguments(t);
        return a && setIdentifierTypeArguments(n, a), n;
      }
      function cl(t) {
        let n = Ir(t.escapedText);
        return n.flags |= t.flags & -17, n.transformFlags = t.transformFlags, i(n, t), setIdentifierAutoGenerate(n, { ...t.emitNode.autoGenerate }), n;
      }
      function ul(t) {
        let n = Ir(t.escapedText);
        return n.flags |= t.flags & -17, n.transformFlags = t.transformFlags, i(n, t), n;
      }
      function fo(t) {
        if (t === void 0) return t;
        if (A_(t)) return Ki(t);
        if (ni(t)) return t1(t);
        if (et(t)) return r1(t);
        if (bf(t)) return cl(t);
        if (wa(t)) return ul(t);
        let n = zl(t.kind) ? r.createBaseNode(t.kind) : r.createBaseTokenNode(t.kind);
        n.flags |= t.flags & -17, n.transformFlags = t.transformFlags, i(n, t);
        for (let a in t) hn(n, a) || !hn(t, a) || (n[a] = t[a]);
        return n;
      }
      function n1(t, n, a) {
        return Ka(Ss(void 0, void 0, void 0, void 0, n ? [n] : [], void 0, Vn(t, !0)), void 0, a ? [a] : []);
      }
      function a1(t, n, a) {
        return Ka(Cs(void 0, void 0, n ? [n] : [], void 0, void 0, Vn(t, !0)), void 0, a ? [a] : []);
      }
      function ya() {
        return Es(z("0"));
      }
      function ll(t) {
        return Ni(void 0, !1, t);
      }
      function i1(t) {
        return Di(void 0, !1, Gs([Pi(!1, void 0, t)]));
      }
      function mo(t, n) {
        return n === "null" ? ge.createStrictEquality(t, Ot()) : n === "undefined" ? ge.createStrictEquality(t, ya()) : ge.createStrictEquality(bi(t), ft(n));
      }
      function s1(t, n) {
        return n === "null" ? ge.createStrictInequality(t, Ot()) : n === "undefined" ? ge.createStrictInequality(t, ya()) : ge.createStrictInequality(bi(t), ft(n));
      }
      function Zn(t, n, a) {
        return Tf(t) ? ks(Ja(t, void 0, n), void 0, void 0, a) : Ka(ln(t, n), void 0, a);
      }
      function o1(t, n, a) {
        return Zn(t, "bind", [n, ...a]);
      }
      function c1(t, n, a) {
        return Zn(t, "call", [n, ...a]);
      }
      function u1(t, n, a) {
        return Zn(t, "apply", [n, a]);
      }
      function Va(t, n, a) {
        return Zn(Re(t), n, a);
      }
      function Ha(t, n) {
        return Zn(t, "slice", n === void 0 ? [] : [fn(n)]);
      }
      function l1(t, n) {
        return Zn(t, "concat", n);
      }
      function ho(t, n, a) {
        return Va("Object", "defineProperty", [t, fn(n), a]);
      }
      function _a(t, n) {
        return Va("Object", "getOwnPropertyDescriptor", [t, fn(n)]);
      }
      function dl(t, n, a) {
        return Va("Reflect", "get", a ? [t, n, a] : [t, n]);
      }
      function d1(t, n, a, c) {
        return Va("Reflect", "set", c ? [t, n, a, c] : [t, n, a]);
      }
      function Ta(t, n, a) {
        return a ? (t.push(Bi(n, a)), !0) : !1;
      }
      function pl(t, n) {
        let a = [];
        Ta(a, "enumerable", fn(t.enumerable)), Ta(a, "configurable", fn(t.configurable));
        let c = Ta(a, "writable", fn(t.writable));
        c = Ta(a, "value", t.value) || c;
        let f = Ta(a, "get", t.get);
        return f = Ta(a, "set", t.set) || f, B.assert(!(c && f), "A PropertyDescriptor may not be both an accessor descriptor and a data descriptor."), Ma(a, !n);
      }
      function p1(t, n) {
        switch (t.kind) {
          case 217:
            return nc(t, n);
          case 216:
            return rc(t, t.type, n);
          case 234:
            return Ci(t, n, t.type);
          case 238:
            return kc(t, n, t.type);
          case 235:
            return xc(t, n);
          case 233:
            return _c(t, n, t.typeArguments);
          case 355:
            return il(t, n);
        }
      }
      function f1(t) {
        return md(t) && oi(t) && oi(getSourceMapRange(t)) && oi(getCommentRange(t)) && !$t(getSyntheticLeadingComments(t)) && !$t(getSyntheticTrailingComments(t));
      }
      function fl(t, n, a = 63) {
        return t && N2(t, a) && !f1(t) ? p1(t, fl(t.expression, n)) : n;
      }
      function go(t, n, a) {
        if (!n) return t;
        let c = Kc(n, n.label, x_(n.statement) ? go(t, n.statement) : t);
        return a && a(n), c;
      }
      function yo(t, n) {
        let a = Zl(t);
        switch (a.kind) {
          case 80:
            return n;
          case 110:
          case 9:
          case 10:
          case 11:
            return !1;
          case 209:
            return a.elements.length !== 0;
          case 210:
            return a.properties.length > 0;
          default:
            return !0;
        }
      }
      function ml(t, n, a, c = !1) {
        let f = _d(t, 63), x, R;
        return Mf(f) ? (x = Ut(), R = f) : ld(f) ? (x = Ut(), R = a !== void 0 && a < 2 ? sr(Re("_super"), f) : f) : si(f) & 8192 ? (x = ya(), R = u().parenthesizeLeftSideOfAccess(f, !1)) : Kn(f) ? yo(f.expression, c) ? (x = an(n), R = ln(sr(ge.createAssignment(x, f.expression), f.expression), f.name), sr(R, f)) : (x = f.expression, R = f) : us(f) ? yo(f.expression, c) ? (x = an(n), R = Ba(sr(ge.createAssignment(x, f.expression), f.expression), f.argumentExpression), sr(R, f)) : (x = f.expression, R = f) : (x = ya(), R = u().parenthesizeLeftSideOfAccess(t, !1)), { target: R, thisArg: x };
      }
      function s(t, n) {
        return ln(vs(Ma([K(void 0, "value", [kn(void 0, void 0, t, void 0, void 0, void 0)], Vn([ja(n)]))])), "value");
      }
      function l(t) {
        return t.length > 10 ? lo(t) : d0(t, ge.createComma);
      }
      function m(t, n, a, c = 0, f) {
        let x = f ? t && jl(t) : hf(t);
        if (x && et(x) && !ni(x)) {
          let R = od(sr(fo(x), x), x.parent);
          return c |= si(x), a || (c |= 96), n || (c |= 3072), c && setEmitFlags(R, c), R;
        }
        return jr(t);
      }
      function g(t, n, a) {
        return m(t, n, a, 98304);
      }
      function k(t, n, a, c) {
        return m(t, n, a, 32768, c);
      }
      function D(t, n, a) {
        return m(t, n, a, 16384);
      }
      function Q(t, n, a) {
        return m(t, n, a);
      }
      function ce(t, n, a, c) {
        let f = ln(t, oi(n) ? n : fo(n));
        sr(f, n);
        let x = 0;
        return c || (x |= 96), a || (x |= 3072), x && setEmitFlags(f, x), f;
      }
      function te(t, n, a, c) {
        return t && is(n, 32) ? ce(t, m(n), a, c) : D(n, a, c);
      }
      function Y(t, n, a, c) {
        let f = Me(t, n, 0, a);
        return Ae(t, n, f, c);
      }
      function pe(t) {
        return di(t.expression) && t.expression.text === "use strict";
      }
      function Ke() {
        return X_(ja(ft("use strict")));
      }
      function Me(t, n, a = 0, c) {
        B.assert(n.length === 0, "Prologue directives should be at the first statement in the target statements array");
        let f = !1, x = t.length;
        for (; a < x; ) {
          let R = t[a];
          if (Do(R)) pe(R) && (f = !0), n.push(R);
          else break;
          a++;
        }
        return c && !f && n.push(Ke()), a;
      }
      function Ae(t, n, a, c, f = y0) {
        let x = t.length;
        for (; a !== void 0 && a < x; ) {
          let R = t[a];
          if (si(R) & 2097152 && f(R)) hr(n, c ? visitNode(R, c, Yh) : R);
          else break;
          a++;
        }
        return a;
      }
      function nr(t) {
        return V_(t) ? t : sr(he([Ke(), ...t]), t);
      }
      function fr(t) {
        return B.assert(_l(t, tg), "Cannot lift nodes to a Block."), c0(t) || Vn(t);
      }
      function Qt(t, n, a) {
        let c = a;
        for (; c < t.length && n(t[c]); ) c++;
        return c;
      }
      function pn(t, n) {
        if (!$t(n)) return t;
        let a = Qt(t, Do, 0), c = Qt(t, Lf, a), f = Qt(t, Of, c), x = Qt(n, Do, 0), R = Qt(n, Lf, x), fe = Qt(n, Of, R), Je = Qt(n, Wl, fe);
        B.assert(Je === n.length, "Expected declarations to be valid standard or custom prologues");
        let Zt = ra(t) ? t.slice() : t;
        if (Je > fe && Zt.splice(f, 0, ...n.slice(fe, Je)), fe > R && Zt.splice(c, 0, ...n.slice(R, fe)), R > x && Zt.splice(a, 0, ...n.slice(x, R)), x > 0) if (a === 0) Zt.splice(0, 0, ...n.slice(0, x));
        else {
          let Ar = /* @__PURE__ */ new Map();
          for (let Qr = 0; Qr < a; Qr++) {
            let qi = t[Qr];
            Ar.set(qi.expression.text, !0);
          }
          for (let Qr = x - 1; Qr >= 0; Qr--) {
            let qi = n[Qr];
            Ar.has(qi.expression.text) || Zt.unshift(qi);
          }
        }
        return ra(t) ? sr(he(Zt, t.hasTrailingComma), t) : t;
      }
      function Mr(t, n) {
        let a;
        return typeof n == "number" ? a = vr(n) : a = n, r2(t) ? on(t, a, t.name, t.constraint, t.default) : Jo(t) ? bn(t, a, t.dotDotDotToken, t.name, t.questionToken, t.type, t.initializer) : o2(t) ? We(t, a, t.typeParameters, t.parameters, t.type) : jy(t) ? $r(t, a, t.name, t.questionToken, t.type) : Bo(t) ? M(t, a, t.name, t.questionToken ?? t.exclamationToken, t.type, t.initializer) : qy(t) ? me(t, a, t.name, t.questionToken, t.typeParameters, t.parameters, t.type) : pd(t) ? Xe(t, a, t.asteriskToken, t.name, t.questionToken, t.typeParameters, t.parameters, t.type, t.body) : n2(t) ? ua(t, a, t.parameters, t.body) : fd(t) ? Gr(t, a, t.name, t.parameters, t.type, t.body) : Ko(t) ? Z(t, a, t.name, t.parameters, t.body) : a2(t) ? Ze(t, a, t.parameters, t.type) : l2(t) ? ac(t, a, t.asteriskToken, t.name, t.typeParameters, t.parameters, t.type, t.body) : d2(t) ? ic(t, a, t.typeParameters, t.parameters, t.type, t.equalsGreaterThanToken, t.body) : hd(t) ? Ns(t, a, t.name, t.typeParameters, t.heritageClauses, t.members) : jo(t) ? Sc(t, a, t.declarationList) : m2(t) ? js(t, a, t.asteriskToken, t.name, t.typeParameters, t.parameters, t.type, t.body) : qo(t) ? Ai(t, a, t.name, t.typeParameters, t.heritageClauses, t.members) : gd(t) ? Wc(t, a, t.name, t.typeParameters, t.heritageClauses, t.members) : h2(t) ? wn(t, a, t.name, t.typeParameters, t.type) : b_(t) ? An(t, a, t.name, t.members) : ls(t) ? Et(t, a, t.name, t.body) : g2(t) ? Yc(t, a, t.isTypeOnly, t.name, t.moduleReference) : y2(t) ? tu(t, a, t.importClause, t.moduleSpecifier, t.attributes) : _2(t) ? Ra(t, a, t.expression) : T2(t) ? fu(t, a, t.isTypeOnly, t.exportClause, t.moduleSpecifier, t.attributes) : B.assertNever(t);
      }
      function Yn(t, n) {
        return Jo(t) ? bn(t, n, t.dotDotDotToken, t.name, t.questionToken, t.type, t.initializer) : Bo(t) ? M(t, n, t.name, t.questionToken ?? t.exclamationToken, t.type, t.initializer) : pd(t) ? Xe(t, n, t.asteriskToken, t.name, t.questionToken, t.typeParameters, t.parameters, t.type, t.body) : fd(t) ? Gr(t, n, t.name, t.parameters, t.type, t.body) : Ko(t) ? Z(t, n, t.name, t.parameters, t.body) : hd(t) ? Ns(t, n, t.name, t.typeParameters, t.heritageClauses, t.members) : qo(t) ? Ai(t, n, t.name, t.typeParameters, t.heritageClauses, t.members) : B.assertNever(t);
      }
      function m1(t, n) {
        switch (t.kind) {
          case 177:
            return Gr(t, t.modifiers, n, t.parameters, t.type, t.body);
          case 178:
            return Z(t, t.modifiers, n, t.parameters, t.body);
          case 174:
            return Xe(t, t.modifiers, t.asteriskToken, n, t.questionToken, t.typeParameters, t.parameters, t.type, t.body);
          case 173:
            return me(t, t.modifiers, n, t.questionToken, t.typeParameters, t.parameters, t.type);
          case 172:
            return M(t, t.modifiers, n, t.questionToken ?? t.exclamationToken, t.type, t.initializer);
          case 171:
            return $r(t, t.modifiers, n, t.questionToken, t.type);
          case 303:
            return Qn(t, n, t.initializer);
        }
      }
      function De(t) {
        return t ? he(t) : void 0;
      }
      function tt(t) {
        return typeof t == "string" ? Re(t) : t;
      }
      function fn(t) {
        return typeof t == "string" ? ft(t) : typeof t == "number" ? z(t) : typeof t == "boolean" ? t ? lt() : sn() : t;
      }
      function ji(t) {
        return t && u().parenthesizeExpressionForDisallowedComma(t);
      }
      function hl(t) {
        return typeof t == "number" ? ut(t) : t;
      }
      function Nt(t) {
        return t && S_(t) ? sr(i(Cc(), t), t) : t;
      }
      function Pn(t) {
        return typeof t == "string" || t && !f2(t) ? wi(t, void 0, void 0, void 0) : t;
      }
      function U(t, n) {
        return t !== n && (i(t, n), sr(t, n)), t;
      }
    }
    function Oo(e) {
      switch (e) {
        case 344:
          return "type";
        case 342:
          return "returns";
        case 343:
          return "this";
        case 340:
          return "enum";
        case 330:
          return "author";
        case 332:
          return "class";
        case 333:
          return "public";
        case 334:
          return "private";
        case 335:
          return "protected";
        case 336:
          return "readonly";
        case 337:
          return "override";
        case 345:
          return "template";
        case 346:
          return "typedef";
        case 341:
          return "param";
        case 348:
          return "prop";
        case 338:
          return "callback";
        case 339:
          return "overload";
        case 328:
          return "augments";
        case 329:
          return "implements";
        case 351:
          return "import";
        default:
          return B.fail(`Unsupported kind: ${B.formatSyntaxKind(e)}`);
      }
    }
    var Tr, Qf = {};
    function Ay(e, r) {
      switch (Tr || (Tr = Bl(99, !1, 0)), e) {
        case 15:
          Tr.setText("`" + r + "`");
          break;
        case 16:
          Tr.setText("`" + r + "${");
          break;
        case 17:
          Tr.setText("}" + r + "${");
          break;
        case 18:
          Tr.setText("}" + r + "`");
          break;
      }
      let i = Tr.scan();
      if (i === 20 && (i = Tr.reScanTemplateToken(!1)), Tr.isUnterminated()) return Tr.setText(void 0), Qf;
      let u;
      switch (i) {
        case 15:
        case 16:
        case 17:
        case 18:
          u = Tr.getTokenValue();
          break;
      }
      return u === void 0 || Tr.scan() !== 1 ? (Tr.setText(void 0), Qf) : (Tr.setText(void 0), u);
    }
    function Pr(e) {
      return e && et(e) ? ui(e) : q(e);
    }
    function ui(e) {
      return q(e) & -67108865;
    }
    function Ny(e, r) {
      return r | e.transformFlags & 134234112;
    }
    function q(e) {
      if (!e) return 0;
      let r = e.transformFlags & ~Dy(e.kind);
      return fh(e) && vf(e.name) ? Ny(e.name, r) : r;
    }
    function Ee(e) {
      return e ? e.transformFlags : 0;
    }
    function Zf(e) {
      let r = 0;
      for (let i of e) r |= q(i);
      e.transformFlags = r;
    }
    function Dy(e) {
      if (e >= 182 && e <= 205) return -2;
      switch (e) {
        case 213:
        case 214:
        case 209:
          return -2147450880;
        case 267:
          return -1941676032;
        case 169:
          return -2147483648;
        case 219:
          return -2072174592;
        case 218:
        case 262:
          return -1937940480;
        case 261:
          return -2146893824;
        case 263:
        case 231:
          return -2147344384;
        case 176:
          return -1937948672;
        case 172:
          return -2013249536;
        case 174:
        case 177:
        case 178:
          return -2005057536;
        case 133:
        case 150:
        case 163:
        case 146:
        case 154:
        case 151:
        case 136:
        case 155:
        case 116:
        case 168:
        case 171:
        case 173:
        case 179:
        case 180:
        case 181:
        case 264:
        case 265:
          return -2;
        case 210:
          return -2147278848;
        case 299:
          return -2147418112;
        case 206:
        case 207:
          return -2147450880;
        case 216:
        case 238:
        case 234:
        case 355:
        case 217:
        case 108:
          return -2147483648;
        case 211:
        case 212:
          return -2147483648;
        default:
          return -2147483648;
      }
    }
    var os = Cy();
    function cs(e) {
      return e.flags |= 16, e;
    }
    var Py = { createBaseSourceFileNode: (e) => cs(os.createBaseSourceFileNode(e)), createBaseIdentifierNode: (e) => cs(os.createBaseIdentifierNode(e)), createBasePrivateIdentifierNode: (e) => cs(os.createBasePrivateIdentifierNode(e)), createBaseTokenNode: (e) => cs(os.createBaseTokenNode(e)), createBaseNode: (e) => cs(os.createBaseNode(e)) };
    ud(4, Py);
    function Fy(e, r) {
      if (e.original !== r && (e.original = r, r)) {
        let i = r.emitNode;
        i && (e.emitNode = Iy(i, e.emitNode));
      }
      return e;
    }
    function Iy(e, r) {
      let { flags: i, internalFlags: u, leadingComments: h, trailingComments: T, commentRange: w, sourceMapRange: N, tokenSourceMapRanges: o, constantValue: $, helpers: d, startsOnNewLine: S, snippetElement: _, classThis: v, assignedName: F } = e;
      if (r || (r = {}), i && (r.flags = i), u && (r.internalFlags = u & -9), h && (r.leadingComments = gr(h.slice(), r.leadingComments)), T && (r.trailingComments = gr(T.slice(), r.trailingComments)), w && (r.commentRange = w), N && (r.sourceMapRange = N), o && (r.tokenSourceMapRanges = Ly(o, r.tokenSourceMapRanges)), $ !== void 0 && (r.constantValue = $), d) for (let re of d) r.helpers = i0(r.helpers, re);
      return S !== void 0 && (r.startsOnNewLine = S), _ !== void 0 && (r.snippetElement = _), v && (r.classThis = v), F && (r.assignedName = F), r;
    }
    function Ly(e, r) {
      r || (r = []);
      for (let i in e) r[i] = e[i];
      return r;
    }
    function li(e) {
      return e.kind === 9;
    }
    function Oy(e) {
      return e.kind === 10;
    }
    function di(e) {
      return e.kind === 11;
    }
    function My(e) {
      return e.kind === 15;
    }
    function Jy(e) {
      return e.kind === 28;
    }
    function Yf(e) {
      return e.kind === 54;
    }
    function e2(e) {
      return e.kind === 58;
    }
    function et(e) {
      return e.kind === 80;
    }
    function wa(e) {
      return e.kind === 81;
    }
    function By(e) {
      return e.kind === 95;
    }
    function Mo(e) {
      return e.kind === 134;
    }
    function ld(e) {
      return e.kind === 108;
    }
    function Ky(e) {
      return e.kind === 102;
    }
    function Uy(e) {
      return e.kind === 166;
    }
    function t2(e) {
      return e.kind === 167;
    }
    function r2(e) {
      return e.kind === 168;
    }
    function Jo(e) {
      return e.kind === 169;
    }
    function dd(e) {
      return e.kind === 170;
    }
    function jy(e) {
      return e.kind === 171;
    }
    function Bo(e) {
      return e.kind === 172;
    }
    function qy(e) {
      return e.kind === 173;
    }
    function pd(e) {
      return e.kind === 174;
    }
    function n2(e) {
      return e.kind === 176;
    }
    function fd(e) {
      return e.kind === 177;
    }
    function Ko(e) {
      return e.kind === 178;
    }
    function Ry(e) {
      return e.kind === 179;
    }
    function zy(e) {
      return e.kind === 180;
    }
    function a2(e) {
      return e.kind === 181;
    }
    function $y(e) {
      return e.kind === 182;
    }
    function i2(e) {
      return e.kind === 183;
    }
    function s2(e) {
      return e.kind === 184;
    }
    function o2(e) {
      return e.kind === 185;
    }
    function Gy(e) {
      return e.kind === 186;
    }
    function Wy(e) {
      return e.kind === 187;
    }
    function Vy(e) {
      return e.kind === 188;
    }
    function Hy(e) {
      return e.kind === 189;
    }
    function Xy(e) {
      return e.kind === 202;
    }
    function Qy(e) {
      return e.kind === 190;
    }
    function Zy(e) {
      return e.kind === 191;
    }
    function Yy(e) {
      return e.kind === 192;
    }
    function e_(e) {
      return e.kind === 193;
    }
    function t_(e) {
      return e.kind === 194;
    }
    function r_(e) {
      return e.kind === 195;
    }
    function n_(e) {
      return e.kind === 196;
    }
    function a_(e) {
      return e.kind === 197;
    }
    function i_(e) {
      return e.kind === 198;
    }
    function s_(e) {
      return e.kind === 199;
    }
    function o_(e) {
      return e.kind === 200;
    }
    function c_(e) {
      return e.kind === 201;
    }
    function u_(e) {
      return e.kind === 205;
    }
    function l_(e) {
      return e.kind === 208;
    }
    function d_(e) {
      return e.kind === 209;
    }
    function c2(e) {
      return e.kind === 210;
    }
    function Kn(e) {
      return e.kind === 211;
    }
    function us(e) {
      return e.kind === 212;
    }
    function u2(e) {
      return e.kind === 213;
    }
    function p_(e) {
      return e.kind === 215;
    }
    function md(e) {
      return e.kind === 217;
    }
    function l2(e) {
      return e.kind === 218;
    }
    function d2(e) {
      return e.kind === 219;
    }
    function f_(e) {
      return e.kind === 222;
    }
    function m_(e) {
      return e.kind === 224;
    }
    function pi(e) {
      return e.kind === 226;
    }
    function h_(e) {
      return e.kind === 230;
    }
    function hd(e) {
      return e.kind === 231;
    }
    function g_(e) {
      return e.kind === 232;
    }
    function y_(e) {
      return e.kind === 233;
    }
    function Uo(e) {
      return e.kind === 235;
    }
    function __(e) {
      return e.kind === 236;
    }
    function T_(e) {
      return e.kind === 356;
    }
    function jo(e) {
      return e.kind === 243;
    }
    function p2(e) {
      return e.kind === 244;
    }
    function x_(e) {
      return e.kind === 256;
    }
    function f2(e) {
      return e.kind === 260;
    }
    function k_(e) {
      return e.kind === 261;
    }
    function m2(e) {
      return e.kind === 262;
    }
    function qo(e) {
      return e.kind === 263;
    }
    function gd(e) {
      return e.kind === 264;
    }
    function h2(e) {
      return e.kind === 265;
    }
    function b_(e) {
      return e.kind === 266;
    }
    function ls(e) {
      return e.kind === 267;
    }
    function g2(e) {
      return e.kind === 271;
    }
    function y2(e) {
      return e.kind === 272;
    }
    function _2(e) {
      return e.kind === 277;
    }
    function T2(e) {
      return e.kind === 278;
    }
    function v_(e) {
      return e.kind === 279;
    }
    function S_(e) {
      return e.kind === 353;
    }
    function x2(e) {
      return e.kind === 283;
    }
    function k2(e) {
      return e.kind === 286;
    }
    function C_(e) {
      return e.kind === 289;
    }
    function b2(e) {
      return e.kind === 295;
    }
    function E_(e) {
      return e.kind === 297;
    }
    function w_(e) {
      return e.kind === 303;
    }
    function A_(e) {
      return e.kind === 307;
    }
    function N_(e) {
      return e.kind === 309;
    }
    function D_(e) {
      return e.kind === 314;
    }
    function P_(e) {
      return e.kind === 317;
    }
    function v2(e) {
      return e.kind === 320;
    }
    function F_(e) {
      return e.kind === 322;
    }
    function S2(e) {
      return e.kind === 323;
    }
    function I_(e) {
      return e.kind === 328;
    }
    function L_(e) {
      return e.kind === 333;
    }
    function O_(e) {
      return e.kind === 334;
    }
    function M_(e) {
      return e.kind === 335;
    }
    function J_(e) {
      return e.kind === 336;
    }
    function B_(e) {
      return e.kind === 337;
    }
    function K_(e) {
      return e.kind === 339;
    }
    function U_(e) {
      return e.kind === 331;
    }
    function C2(e) {
      return e.kind === 341;
    }
    function j_(e) {
      return e.kind === 342;
    }
    function yd(e) {
      return e.kind === 344;
    }
    function q_(e) {
      return e.kind === 345;
    }
    function R_(e) {
      return e.kind === 329;
    }
    function z_(e) {
      return e.kind === 350;
    }
    var Aa = /* @__PURE__ */ new WeakMap();
    function E2(e, r) {
      var i;
      let u = e.kind;
      return zl(u) ? u === 352 ? e._children : (i = Aa.get(r)) == null ? void 0 : i.get(e) : St;
    }
    function $_(e, r, i) {
      e.kind === 352 && B.fail("Should not need to re-set the children of a SyntaxList.");
      let u = Aa.get(r);
      return u === void 0 && (u = /* @__PURE__ */ new WeakMap(), Aa.set(r, u)), u.set(e, i), i;
    }
    function w2(e, r) {
      var i;
      e.kind === 352 && B.fail("Did not expect to unset the children of a SyntaxList."), (i = Aa.get(r)) == null || i.delete(e);
    }
    function G_(e, r) {
      let i = Aa.get(e);
      i !== void 0 && (Aa.delete(e), Aa.set(r, i));
    }
    function A2(e) {
      return (si(e) & 32768) !== 0;
    }
    function W_(e) {
      return di(e.expression) && e.expression.text === "use strict";
    }
    function V_(e) {
      for (let r of e) if (Do(r)) {
        if (W_(r)) return r;
      } else break;
    }
    function H_(e) {
      return md(e) && Ca(e) && !!Nh(e);
    }
    function N2(e, r = 63) {
      switch (e.kind) {
        case 217:
          return r & -2147483648 && H_(e) ? !1 : (r & 1) !== 0;
        case 216:
        case 234:
          return (r & 2) !== 0;
        case 238:
          return (r & 34) !== 0;
        case 233:
          return (r & 16) !== 0;
        case 235:
          return (r & 4) !== 0;
        case 355:
          return (r & 8) !== 0;
      }
      return !1;
    }
    function _d(e, r = 63) {
      for (; N2(e, r); ) e = e.expression;
      return e;
    }
    function X_(e) {
      return setStartsOnNewLine(e, !0);
    }
    function ds(e) {
      if (Vh(e)) return e.name;
      if (zh(e)) {
        switch (e.kind) {
          case 303:
            return ds(e.initializer);
          case 304:
            return e.name;
          case 305:
            return ds(e.expression);
        }
        return;
      }
      return Fo(e, !0) ? ds(e.left) : h_(e) ? ds(e.expression) : e;
    }
    function Q_(e) {
      switch (e.kind) {
        case 206:
        case 207:
        case 209:
          return e.elements;
        case 210:
          return e.properties;
      }
    }
    function D2(e) {
      if (e) {
        let r = e;
        for (; ; ) {
          if (et(r) || !r.body) return et(r) ? r : r.name;
          r = r.body;
        }
      }
    }
    var P2;
    ((e) => {
      function r(d, S, _, v, F, re, ke) {
        let ge = S > 0 ? F[S - 1] : void 0;
        return B.assertEqual(_[S], r), F[S] = d.onEnter(v[S], ge, ke), _[S] = N(d, r), S;
      }
      e.enter = r;
      function i(d, S, _, v, F, re, ke) {
        B.assertEqual(_[S], i), B.assertIsDefined(d.onLeft), _[S] = N(d, i);
        let ge = d.onLeft(v[S].left, F[S], v[S]);
        return ge ? ($(S, v, ge), o(S, _, v, F, ge)) : S;
      }
      e.left = i;
      function u(d, S, _, v, F, re, ke) {
        return B.assertEqual(_[S], u), B.assertIsDefined(d.onOperator), _[S] = N(d, u), d.onOperator(v[S].operatorToken, F[S], v[S]), S;
      }
      e.operator = u;
      function h(d, S, _, v, F, re, ke) {
        B.assertEqual(_[S], h), B.assertIsDefined(d.onRight), _[S] = N(d, h);
        let ge = d.onRight(v[S].right, F[S], v[S]);
        return ge ? ($(S, v, ge), o(S, _, v, F, ge)) : S;
      }
      e.right = h;
      function T(d, S, _, v, F, re, ke) {
        B.assertEqual(_[S], T), _[S] = N(d, T);
        let ge = d.onExit(v[S], F[S]);
        if (S > 0) {
          if (S--, d.foldState) {
            let he = _[S] === T ? "right" : "left";
            F[S] = d.foldState(F[S], ge, he);
          }
        } else re.value = ge;
        return S;
      }
      e.exit = T;
      function w(d, S, _, v, F, re, ke) {
        return B.assertEqual(_[S], w), S;
      }
      e.done = w;
      function N(d, S) {
        switch (S) {
          case r:
            if (d.onLeft) return i;
          case i:
            if (d.onOperator) return u;
          case u:
            if (d.onRight) return h;
          case h:
            return T;
          case T:
            return w;
          case w:
            return w;
          default:
            B.fail("Invalid state");
        }
      }
      e.nextState = N;
      function o(d, S, _, v, F) {
        return d++, S[d] = r, _[d] = F, v[d] = void 0, d;
      }
      function $(d, S, _) {
        if (B.shouldAssert(2)) for (; d >= 0; ) B.assert(S[d] !== _, "Circular traversal detected."), d--;
      }
    })(P2 || (P2 = {}));
    function F2(e, r) {
      return typeof e == "object" ? Td(!1, e.prefix, e.node, e.suffix, r) : typeof e == "string" ? e.length > 0 && e.charCodeAt(0) === 35 ? e.slice(1) : e : "";
    }
    function Z_(e, r) {
      return typeof e == "string" ? e : Y_(e, B.checkDefined(r));
    }
    function Y_(e, r) {
      return bf(e) ? r(e).slice(1) : ni(e) ? r(e) : wa(e) ? e.escapedText.slice(1) : _r(e);
    }
    function Td(e, r, i, u, h) {
      return r = F2(r, h), u = F2(u, h), i = Z_(i, h), `${e ? "#" : ""}${r}${i}${u}`;
    }
    function I2(e) {
      if (e.transformFlags & 65536) return !0;
      if (e.transformFlags & 128) for (let r of Q_(e)) {
        let i = ds(r);
        if (i && Wh(i) && (i.transformFlags & 65536 || i.transformFlags & 128 && I2(i))) return !0;
      }
      return !1;
    }
    function sr(e, r) {
      return r ? ia(e, r.pos, r.end) : e;
    }
    function xd(e) {
      let r = e.kind;
      return r === 168 || r === 169 || r === 171 || r === 172 || r === 173 || r === 174 || r === 176 || r === 177 || r === 178 || r === 181 || r === 185 || r === 218 || r === 219 || r === 231 || r === 243 || r === 262 || r === 263 || r === 264 || r === 265 || r === 266 || r === 267 || r === 271 || r === 272 || r === 277 || r === 278;
    }
    function e4(e) {
      let r = e.kind;
      return r === 169 || r === 172 || r === 174 || r === 177 || r === 178 || r === 231 || r === 263;
    }
    var L2, O2, M2, J2, B2, t4 = { createBaseSourceFileNode: (e) => new (B2 || (B2 = Ct.getSourceFileConstructor()))(e, -1, -1), createBaseIdentifierNode: (e) => new (M2 || (M2 = Ct.getIdentifierConstructor()))(e, -1, -1), createBasePrivateIdentifierNode: (e) => new (J2 || (J2 = Ct.getPrivateIdentifierConstructor()))(e, -1, -1), createBaseTokenNode: (e) => new (O2 || (O2 = Ct.getTokenConstructor()))(e, -1, -1), createBaseNode: (e) => new (L2 || (L2 = Ct.getNodeConstructor()))(e, -1, -1) };
    ud(1, t4);
    function b(e, r) {
      return r && e(r);
    }
    function se(e, r, i) {
      if (i) {
        if (r) return r(i);
        for (let u of i) {
          let h = e(u);
          if (h) return h;
        }
      }
    }
    function r4(e, r) {
      return e.charCodeAt(r + 1) === 42 && e.charCodeAt(r + 2) === 42 && e.charCodeAt(r + 3) !== 47;
    }
    function n4(e) {
      return Nr(e.statements, a4) || i4(e);
    }
    function a4(e) {
      return xd(e) && s4(e, 95) || g2(e) && x2(e.moduleReference) || y2(e) || _2(e) || T2(e) ? e : void 0;
    }
    function i4(e) {
      return e.flags & 8388608 ? K2(e) : void 0;
    }
    function K2(e) {
      return o4(e) ? e : Gt(e, K2);
    }
    function s4(e, r) {
      return $t(e.modifiers, (i) => i.kind === r);
    }
    function o4(e) {
      return __(e) && e.keywordToken === 102 && e.name.escapedText === "meta";
    }
    var c4 = { 166: function(e, r, i) {
      return b(r, e.left) || b(r, e.right);
    }, 168: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.constraint) || b(r, e.default) || b(r, e.expression);
    }, 304: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.questionToken) || b(r, e.exclamationToken) || b(r, e.equalsToken) || b(r, e.objectAssignmentInitializer);
    }, 305: function(e, r, i) {
      return b(r, e.expression);
    }, 169: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.dotDotDotToken) || b(r, e.name) || b(r, e.questionToken) || b(r, e.type) || b(r, e.initializer);
    }, 172: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.questionToken) || b(r, e.exclamationToken) || b(r, e.type) || b(r, e.initializer);
    }, 171: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.questionToken) || b(r, e.type) || b(r, e.initializer);
    }, 303: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.questionToken) || b(r, e.exclamationToken) || b(r, e.initializer);
    }, 260: function(e, r, i) {
      return b(r, e.name) || b(r, e.exclamationToken) || b(r, e.type) || b(r, e.initializer);
    }, 208: function(e, r, i) {
      return b(r, e.dotDotDotToken) || b(r, e.propertyName) || b(r, e.name) || b(r, e.initializer);
    }, 181: function(e, r, i) {
      return se(r, i, e.modifiers) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type);
    }, 185: function(e, r, i) {
      return se(r, i, e.modifiers) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type);
    }, 184: function(e, r, i) {
      return se(r, i, e.modifiers) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type);
    }, 179: U2, 180: U2, 174: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.asteriskToken) || b(r, e.name) || b(r, e.questionToken) || b(r, e.exclamationToken) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type) || b(r, e.body);
    }, 173: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.questionToken) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type);
    }, 176: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type) || b(r, e.body);
    }, 177: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type) || b(r, e.body);
    }, 178: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type) || b(r, e.body);
    }, 262: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.asteriskToken) || b(r, e.name) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type) || b(r, e.body);
    }, 218: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.asteriskToken) || b(r, e.name) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type) || b(r, e.body);
    }, 219: function(e, r, i) {
      return se(r, i, e.modifiers) || se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type) || b(r, e.equalsGreaterThanToken) || b(r, e.body);
    }, 175: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.body);
    }, 183: function(e, r, i) {
      return b(r, e.typeName) || se(r, i, e.typeArguments);
    }, 182: function(e, r, i) {
      return b(r, e.assertsModifier) || b(r, e.parameterName) || b(r, e.type);
    }, 186: function(e, r, i) {
      return b(r, e.exprName) || se(r, i, e.typeArguments);
    }, 187: function(e, r, i) {
      return se(r, i, e.members);
    }, 188: function(e, r, i) {
      return b(r, e.elementType);
    }, 189: function(e, r, i) {
      return se(r, i, e.elements);
    }, 192: j2, 193: j2, 194: function(e, r, i) {
      return b(r, e.checkType) || b(r, e.extendsType) || b(r, e.trueType) || b(r, e.falseType);
    }, 195: function(e, r, i) {
      return b(r, e.typeParameter);
    }, 205: function(e, r, i) {
      return b(r, e.argument) || b(r, e.attributes) || b(r, e.qualifier) || se(r, i, e.typeArguments);
    }, 302: function(e, r, i) {
      return b(r, e.assertClause);
    }, 196: q2, 198: q2, 199: function(e, r, i) {
      return b(r, e.objectType) || b(r, e.indexType);
    }, 200: function(e, r, i) {
      return b(r, e.readonlyToken) || b(r, e.typeParameter) || b(r, e.nameType) || b(r, e.questionToken) || b(r, e.type) || se(r, i, e.members);
    }, 201: function(e, r, i) {
      return b(r, e.literal);
    }, 202: function(e, r, i) {
      return b(r, e.dotDotDotToken) || b(r, e.name) || b(r, e.questionToken) || b(r, e.type);
    }, 206: R2, 207: R2, 209: function(e, r, i) {
      return se(r, i, e.elements);
    }, 210: function(e, r, i) {
      return se(r, i, e.properties);
    }, 211: function(e, r, i) {
      return b(r, e.expression) || b(r, e.questionDotToken) || b(r, e.name);
    }, 212: function(e, r, i) {
      return b(r, e.expression) || b(r, e.questionDotToken) || b(r, e.argumentExpression);
    }, 213: z2, 214: z2, 215: function(e, r, i) {
      return b(r, e.tag) || b(r, e.questionDotToken) || se(r, i, e.typeArguments) || b(r, e.template);
    }, 216: function(e, r, i) {
      return b(r, e.type) || b(r, e.expression);
    }, 217: function(e, r, i) {
      return b(r, e.expression);
    }, 220: function(e, r, i) {
      return b(r, e.expression);
    }, 221: function(e, r, i) {
      return b(r, e.expression);
    }, 222: function(e, r, i) {
      return b(r, e.expression);
    }, 224: function(e, r, i) {
      return b(r, e.operand);
    }, 229: function(e, r, i) {
      return b(r, e.asteriskToken) || b(r, e.expression);
    }, 223: function(e, r, i) {
      return b(r, e.expression);
    }, 225: function(e, r, i) {
      return b(r, e.operand);
    }, 226: function(e, r, i) {
      return b(r, e.left) || b(r, e.operatorToken) || b(r, e.right);
    }, 234: function(e, r, i) {
      return b(r, e.expression) || b(r, e.type);
    }, 235: function(e, r, i) {
      return b(r, e.expression);
    }, 238: function(e, r, i) {
      return b(r, e.expression) || b(r, e.type);
    }, 236: function(e, r, i) {
      return b(r, e.name);
    }, 227: function(e, r, i) {
      return b(r, e.condition) || b(r, e.questionToken) || b(r, e.whenTrue) || b(r, e.colonToken) || b(r, e.whenFalse);
    }, 230: function(e, r, i) {
      return b(r, e.expression);
    }, 241: $2, 268: $2, 307: function(e, r, i) {
      return se(r, i, e.statements) || b(r, e.endOfFileToken);
    }, 243: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.declarationList);
    }, 261: function(e, r, i) {
      return se(r, i, e.declarations);
    }, 244: function(e, r, i) {
      return b(r, e.expression);
    }, 245: function(e, r, i) {
      return b(r, e.expression) || b(r, e.thenStatement) || b(r, e.elseStatement);
    }, 246: function(e, r, i) {
      return b(r, e.statement) || b(r, e.expression);
    }, 247: function(e, r, i) {
      return b(r, e.expression) || b(r, e.statement);
    }, 248: function(e, r, i) {
      return b(r, e.initializer) || b(r, e.condition) || b(r, e.incrementor) || b(r, e.statement);
    }, 249: function(e, r, i) {
      return b(r, e.initializer) || b(r, e.expression) || b(r, e.statement);
    }, 250: function(e, r, i) {
      return b(r, e.awaitModifier) || b(r, e.initializer) || b(r, e.expression) || b(r, e.statement);
    }, 251: G2, 252: G2, 253: function(e, r, i) {
      return b(r, e.expression);
    }, 254: function(e, r, i) {
      return b(r, e.expression) || b(r, e.statement);
    }, 255: function(e, r, i) {
      return b(r, e.expression) || b(r, e.caseBlock);
    }, 269: function(e, r, i) {
      return se(r, i, e.clauses);
    }, 296: function(e, r, i) {
      return b(r, e.expression) || se(r, i, e.statements);
    }, 297: function(e, r, i) {
      return se(r, i, e.statements);
    }, 256: function(e, r, i) {
      return b(r, e.label) || b(r, e.statement);
    }, 257: function(e, r, i) {
      return b(r, e.expression);
    }, 258: function(e, r, i) {
      return b(r, e.tryBlock) || b(r, e.catchClause) || b(r, e.finallyBlock);
    }, 299: function(e, r, i) {
      return b(r, e.variableDeclaration) || b(r, e.block);
    }, 170: function(e, r, i) {
      return b(r, e.expression);
    }, 263: W2, 231: W2, 264: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || se(r, i, e.typeParameters) || se(r, i, e.heritageClauses) || se(r, i, e.members);
    }, 265: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || se(r, i, e.typeParameters) || b(r, e.type);
    }, 266: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || se(r, i, e.members);
    }, 306: function(e, r, i) {
      return b(r, e.name) || b(r, e.initializer);
    }, 267: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.body);
    }, 271: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || b(r, e.moduleReference);
    }, 272: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.importClause) || b(r, e.moduleSpecifier) || b(r, e.attributes);
    }, 273: function(e, r, i) {
      return b(r, e.name) || b(r, e.namedBindings);
    }, 300: function(e, r, i) {
      return se(r, i, e.elements);
    }, 301: function(e, r, i) {
      return b(r, e.name) || b(r, e.value);
    }, 270: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name);
    }, 274: function(e, r, i) {
      return b(r, e.name);
    }, 280: function(e, r, i) {
      return b(r, e.name);
    }, 275: V2, 279: V2, 278: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.exportClause) || b(r, e.moduleSpecifier) || b(r, e.attributes);
    }, 276: H2, 281: H2, 277: function(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.expression);
    }, 228: function(e, r, i) {
      return b(r, e.head) || se(r, i, e.templateSpans);
    }, 239: function(e, r, i) {
      return b(r, e.expression) || b(r, e.literal);
    }, 203: function(e, r, i) {
      return b(r, e.head) || se(r, i, e.templateSpans);
    }, 204: function(e, r, i) {
      return b(r, e.type) || b(r, e.literal);
    }, 167: function(e, r, i) {
      return b(r, e.expression);
    }, 298: function(e, r, i) {
      return se(r, i, e.types);
    }, 233: function(e, r, i) {
      return b(r, e.expression) || se(r, i, e.typeArguments);
    }, 283: function(e, r, i) {
      return b(r, e.expression);
    }, 282: function(e, r, i) {
      return se(r, i, e.modifiers);
    }, 356: function(e, r, i) {
      return se(r, i, e.elements);
    }, 284: function(e, r, i) {
      return b(r, e.openingElement) || se(r, i, e.children) || b(r, e.closingElement);
    }, 288: function(e, r, i) {
      return b(r, e.openingFragment) || se(r, i, e.children) || b(r, e.closingFragment);
    }, 285: X2, 286: X2, 292: function(e, r, i) {
      return se(r, i, e.properties);
    }, 291: function(e, r, i) {
      return b(r, e.name) || b(r, e.initializer);
    }, 293: function(e, r, i) {
      return b(r, e.expression);
    }, 294: function(e, r, i) {
      return b(r, e.dotDotDotToken) || b(r, e.expression);
    }, 287: function(e, r, i) {
      return b(r, e.tagName);
    }, 295: function(e, r, i) {
      return b(r, e.namespace) || b(r, e.name);
    }, 190: Na, 191: Na, 309: Na, 315: Na, 314: Na, 316: Na, 318: Na, 317: function(e, r, i) {
      return se(r, i, e.parameters) || b(r, e.type);
    }, 320: function(e, r, i) {
      return (typeof e.comment == "string" ? void 0 : se(r, i, e.comment)) || se(r, i, e.tags);
    }, 347: function(e, r, i) {
      return b(r, e.tagName) || b(r, e.name) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }, 310: function(e, r, i) {
      return b(r, e.name);
    }, 311: function(e, r, i) {
      return b(r, e.left) || b(r, e.right);
    }, 341: Q2, 348: Q2, 330: function(e, r, i) {
      return b(r, e.tagName) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }, 329: function(e, r, i) {
      return b(r, e.tagName) || b(r, e.class) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }, 328: function(e, r, i) {
      return b(r, e.tagName) || b(r, e.class) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }, 345: function(e, r, i) {
      return b(r, e.tagName) || b(r, e.constraint) || se(r, i, e.typeParameters) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }, 346: function(e, r, i) {
      return b(r, e.tagName) || (e.typeExpression && e.typeExpression.kind === 309 ? b(r, e.typeExpression) || b(r, e.fullName) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment)) : b(r, e.fullName) || b(r, e.typeExpression) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment)));
    }, 338: function(e, r, i) {
      return b(r, e.tagName) || b(r, e.fullName) || b(r, e.typeExpression) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }, 342: Da, 344: Da, 343: Da, 340: Da, 350: Da, 349: Da, 339: Da, 323: function(e, r, i) {
      return Nr(e.typeParameters, r) || Nr(e.parameters, r) || b(r, e.type);
    }, 324: kd, 325: kd, 326: kd, 322: function(e, r, i) {
      return Nr(e.jsDocPropertyTags, r);
    }, 327: sa, 332: sa, 333: sa, 334: sa, 335: sa, 336: sa, 331: sa, 337: sa, 351: u4, 355: l4 };
    function U2(e, r, i) {
      return se(r, i, e.typeParameters) || se(r, i, e.parameters) || b(r, e.type);
    }
    function j2(e, r, i) {
      return se(r, i, e.types);
    }
    function q2(e, r, i) {
      return b(r, e.type);
    }
    function R2(e, r, i) {
      return se(r, i, e.elements);
    }
    function z2(e, r, i) {
      return b(r, e.expression) || b(r, e.questionDotToken) || se(r, i, e.typeArguments) || se(r, i, e.arguments);
    }
    function $2(e, r, i) {
      return se(r, i, e.statements);
    }
    function G2(e, r, i) {
      return b(r, e.label);
    }
    function W2(e, r, i) {
      return se(r, i, e.modifiers) || b(r, e.name) || se(r, i, e.typeParameters) || se(r, i, e.heritageClauses) || se(r, i, e.members);
    }
    function V2(e, r, i) {
      return se(r, i, e.elements);
    }
    function H2(e, r, i) {
      return b(r, e.propertyName) || b(r, e.name);
    }
    function X2(e, r, i) {
      return b(r, e.tagName) || se(r, i, e.typeArguments) || b(r, e.attributes);
    }
    function Na(e, r, i) {
      return b(r, e.type);
    }
    function Q2(e, r, i) {
      return b(r, e.tagName) || (e.isNameFirst ? b(r, e.name) || b(r, e.typeExpression) : b(r, e.typeExpression) || b(r, e.name)) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }
    function Da(e, r, i) {
      return b(r, e.tagName) || b(r, e.typeExpression) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }
    function kd(e, r, i) {
      return b(r, e.name);
    }
    function sa(e, r, i) {
      return b(r, e.tagName) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }
    function u4(e, r, i) {
      return b(r, e.tagName) || b(r, e.importClause) || b(r, e.moduleSpecifier) || b(r, e.attributes) || (typeof e.comment == "string" ? void 0 : se(r, i, e.comment));
    }
    function l4(e, r, i) {
      return b(r, e.expression);
    }
    function Gt(e, r, i) {
      if (e === void 0 || e.kind <= 165) return;
      let u = c4[e.kind];
      return u === void 0 ? void 0 : u(e, r, i);
    }
    function Z2(e, r, i) {
      let u = Y2(e), h = [];
      for (; h.length < u.length; ) h.push(e);
      for (; u.length !== 0; ) {
        let T = u.pop(), w = h.pop();
        if (Ln(T))
          for (let N = T.length - 1; N >= 0; --N) u.push(T[N]), h.push(w);
        else {
          let N = r(T, w);
          if (N) {
            if (N === "skip") continue;
            return N;
          }
          if (T.kind >= 166) for (let o of Y2(T)) u.push(o), h.push(T);
        }
      }
    }
    function Y2(e) {
      let r = [];
      return Gt(e, i, i), r;
      function i(u) {
        r.unshift(u);
      }
    }
    function em(e) {
      e.externalModuleIndicator = n4(e);
    }
    function d4(e, r, i, u = !1, h) {
      var T, w;
      (T = xo) == null || T.push(xo.Phase.Parse, "createSourceFile", { path: e }, !0);
      let N, { languageVersion: o, setExternalModuleIndicator: $, impliedNodeFormat: d, jsDocParsingMode: S } = typeof i == "object" ? i : { languageVersion: i };
      if (o === 100) N = Pa.parseSourceFile(e, r, o, void 0, u, 6, _o, S);
      else {
        let _ = d === void 0 ? $ : (v) => (v.impliedNodeFormat = d, ($ || em)(v));
        N = Pa.parseSourceFile(e, r, o, void 0, u, h, _, S);
      }
      return (w = xo) == null || w.pop(), N;
    }
    function p4(e) {
      return e.externalModuleIndicator !== void 0;
    }
    function f4(e, r, i, u = !1) {
      let h = Ro.updateSourceFile(e, r, i, u);
      return h.flags |= e.flags & 12582912, h;
    }
    var Pa;
    ((e) => {
      var r = Bl(99, !0), i = 40960, u, h, T, w, N;
      function o(s) {
        return sn++, s;
      }
      var $ = { createBaseSourceFileNode: (s) => o(new N(s, 0, 0)), createBaseIdentifierNode: (s) => o(new T(s, 0, 0)), createBasePrivateIdentifierNode: (s) => o(new w(s, 0, 0)), createBaseTokenNode: (s) => o(new h(s, 0, 0)), createBaseNode: (s) => o(new u(s, 0, 0)) }, d = ud(11, $), { createNodeArray: S, createNumericLiteral: _, createStringLiteral: v, createLiteralLikeNode: F, createIdentifier: re, createPrivateIdentifier: ke, createToken: ge, createArrayLiteralExpression: he, createObjectLiteralExpression: I, createPropertyAccessExpression: ae, createPropertyAccessChain: Le, createElementAccessExpression: z, createElementAccessChain: ue, createCallExpression: H, createCallChain: ft, createNewExpression: rn, createParenthesizedExpression: kr, createBlock: nn, createVariableStatement: br, createExpressionStatement: Fr, createIfStatement: Re, createWhileStatement: an, createForStatement: Un, createForOfStatement: It, createVariableDeclaration: jr, createVariableDeclarationList: Ir } = d, Lt, xt, He, qr, Wt, ut, at, Ut, Ot, lt, sn, mt, vr, yt, or, rt, jt = !0, tr = !1;
      function on(s, l, m, g, k = !1, D, Q, ce = 0) {
        var te;
        if (D = fy(s, D), D === 6) {
          let pe = bn(s, l, m, g, k);
          return convertToJson(pe, (te = pe.statements[0]) == null ? void 0 : te.expression, pe.parseDiagnostics, !1, void 0), pe.referencedFiles = St, pe.typeReferenceDirectives = St, pe.libReferenceDirectives = St, pe.amdDependencies = St, pe.hasNoDefaultLib = !1, pe.pragmas = Zm, pe;
        }
        Rr(s, l, m, g, D, ce);
        let Y = jn(m, k, D, Q || em, ce);
        return zr(), Y;
      }
      e.parseSourceFile = on;
      function kn(s, l) {
        Rr("", s, l, void 0, 1, 0), j();
        let m = Wn(!0), g = p() === 1 && !at.length;
        return zr(), g ? m : void 0;
      }
      e.parseIsolatedEntityName = kn;
      function bn(s, l, m = 2, g, k = !1) {
        Rr(s, l, m, g, 6, 0), xt = rt, j();
        let D = O(), Q, ce;
        if (p() === 1) Q = wt([], D, D), ce = Rt();
        else {
          let pe;
          for (; p() !== 1; ) {
            let Ae;
            switch (p()) {
              case 23:
                Ae = Su();
                break;
              case 112:
              case 97:
              case 106:
                Ae = Rt();
                break;
              case 41:
                W(() => j() === 9 && j() !== 59) ? Ae = cu() : Ae = Zs();
                break;
              case 9:
              case 11:
                if (W(() => j() !== 59)) {
                  Ae = Hr();
                  break;
                }
              default:
                Ae = Zs();
                break;
            }
            pe && Ln(pe) ? pe.push(Ae) : pe ? pe = [pe, Ae] : (pe = Ae, p() !== 1 && we(C.Unexpected_token));
          }
          let Ke = Ln(pe) ? A(he(pe), D) : B.checkDefined(pe), Me = Fr(Ke);
          A(Me, D), Q = wt([Me], D), ce = Vr(1, C.Unexpected_token);
        }
        let te = oe(s, 2, 6, !1, Q, ce, xt, _o);
        k && M(te), te.nodeCount = sn, te.identifierCount = vr, te.identifiers = mt, te.parseDiagnostics = Ea(at, te), Ut && (te.jsDocDiagnostics = Ea(Ut, te));
        let Y = te;
        return zr(), Y;
      }
      e.parseJsonText = bn;
      function Rr(s, l, m, g, k, D) {
        switch (u = Ct.getNodeConstructor(), h = Ct.getTokenConstructor(), T = Ct.getIdentifierConstructor(), w = Ct.getPrivateIdentifierConstructor(), N = Ct.getSourceFileConstructor(), Lt = M0(s), He = l, qr = m, Ot = g, Wt = k, ut = Vf(k), at = [], yt = 0, mt = /* @__PURE__ */ new Map(), vr = 0, sn = 0, xt = 0, jt = !0, Wt) {
          case 1:
          case 2:
            rt = 524288;
            break;
          case 6:
            rt = 134742016;
            break;
          default:
            rt = 0;
            break;
        }
        tr = !1, r.setText(He), r.setOnError(Sn), r.setScriptTarget(qr), r.setLanguageVariant(ut), r.setScriptKind(Wt), r.setJSDocParsingMode(D);
      }
      function zr() {
        r.clearCommentDirectives(), r.setText(""), r.setOnError(void 0), r.setScriptKind(0), r.setJSDocParsingMode(0), He = void 0, qr = void 0, Ot = void 0, Wt = void 0, ut = void 0, xt = 0, at = void 0, Ut = void 0, yt = 0, mt = void 0, or = void 0, jt = !0;
      }
      function jn(s, l, m, g, k) {
        let D = g4(Lt);
        D && (rt |= 33554432), xt = rt, j();
        let Q = Cr(0, Xt);
        B.assert(p() === 1);
        let ce = L(), te = Ne(Rt(), ce), Y = oe(Lt, s, m, D, Q, te, xt, g);
        return T4(Y, He), x4(Y, pe), Y.commentDirectives = r.getCommentDirectives(), Y.nodeCount = sn, Y.identifierCount = vr, Y.identifiers = mt, Y.parseDiagnostics = Ea(at, Y), Y.jsDocParsingMode = k, Ut && (Y.jsDocDiagnostics = Ea(Ut, Y)), l && M(Y), Y;
        function pe(Ke, Me, Ae) {
          at.push(ci(Lt, He, Ke, Me, Ae));
        }
      }
      let $r = !1;
      function Ne(s, l) {
        if (!l) return s;
        B.assert(!s.jsDoc);
        let m = r0(pg(s, He), (g) => ml.parseJSDocComment(s, g.pos, g.end - g.pos));
        return m.length && (s.jsDoc = m), $r && ($r = !1, s.flags |= 536870912), s;
      }
      function vn(s) {
        let l = Ot, m = Ro.createSyntaxCursor(s);
        Ot = { currentNode: pe };
        let g = [], k = at;
        at = [];
        let D = 0, Q = te(s.statements, 0);
        for (; Q !== -1; ) {
          let Ke = s.statements[D], Me = s.statements[Q];
          gr(g, s.statements, D, Q), D = Y(s.statements, Q);
          let Ae = Tl(k, (fr) => fr.start >= Ke.pos), nr = Ae >= 0 ? Tl(k, (fr) => fr.start >= Me.pos, Ae) : -1;
          Ae >= 0 && gr(at, k, Ae, nr >= 0 ? nr : void 0), ur(() => {
            let fr = rt;
            for (rt |= 65536, r.resetTokenState(Me.pos), j(); p() !== 1; ) {
              let Qt = r.getTokenFullStart(), pn = bs(0, Xt);
              if (g.push(pn), Qt === r.getTokenFullStart() && j(), D >= 0) {
                let Mr = s.statements[D];
                if (pn.end === Mr.pos) break;
                pn.end > Mr.pos && (D = Y(s.statements, D + 1));
              }
            }
            rt = fr;
          }, 2), Q = D >= 0 ? te(s.statements, D) : -1;
        }
        if (D >= 0) {
          let Ke = s.statements[D];
          gr(g, s.statements, D);
          let Me = Tl(k, (Ae) => Ae.start >= Ke.pos);
          Me >= 0 && gr(at, k, Me);
        }
        return Ot = l, d.updateSourceFile(s, sr(S(g), s.statements));
        function ce(Ke) {
          return !(Ke.flags & 65536) && !!(Ke.transformFlags & 67108864);
        }
        function te(Ke, Me) {
          for (let Ae = Me; Ae < Ke.length; Ae++) if (ce(Ke[Ae])) return Ae;
          return -1;
        }
        function Y(Ke, Me) {
          for (let Ae = Me; Ae < Ke.length; Ae++) if (!ce(Ke[Ae])) return Ae;
          return -1;
        }
        function pe(Ke) {
          let Me = m.currentNode(Ke);
          return jt && Me && ce(Me) && bd(Me), Me;
        }
      }
      function M(s) {
        xy(s);
      }
      e.fixupParentReferences = M;
      function oe(s, l, m, g, k, D, Q, ce) {
        let te = d.createSourceFile(k, D, Q);
        if (Xf(te, 0, He.length), Y(te), !g && p4(te) && te.transformFlags & 67108864) {
          let pe = te;
          te = vn(te), pe !== te && Y(te);
        }
        return te;
        function Y(pe) {
          pe.text = He, pe.bindDiagnostics = [], pe.bindSuggestionDiagnostics = void 0, pe.languageVersion = l, pe.fileName = s, pe.languageVariant = Vf(m), pe.isDeclarationFile = g, pe.scriptKind = m, ce(pe), pe.setExternalModuleIndicator = ce;
        }
      }
      function me(s, l) {
        s ? rt |= l : rt &= ~l;
      }
      function be(s) {
        me(s, 8192);
      }
      function Xe(s) {
        me(s, 16384);
      }
      function Qe(s) {
        me(s, 32768);
      }
      function it(s) {
        me(s, 65536);
      }
      function At(s, l) {
        let m = s & rt;
        if (m) {
          me(!1, m);
          let g = l();
          return me(!0, m), g;
        }
        return l();
      }
      function kt(s, l) {
        let m = s & ~rt;
        if (m) {
          me(!0, m);
          let g = l();
          return me(!1, m), g;
        }
        return l();
      }
      function st(s) {
        return At(8192, s);
      }
      function ua(s) {
        return kt(8192, s);
      }
      function Sr(s) {
        return At(131072, s);
      }
      function qn(s) {
        return kt(131072, s);
      }
      function Gr(s) {
        return kt(16384, s);
      }
      function La(s) {
        return kt(32768, s);
      }
      function K(s) {
        return kt(65536, s);
      }
      function Z(s) {
        return At(65536, s);
      }
      function ee(s) {
        return kt(81920, s);
      }
      function ve(s) {
        return At(81920, s);
      }
      function Se(s) {
        return (rt & s) !== 0;
      }
      function Ce() {
        return Se(16384);
      }
      function Te() {
        return Se(8192);
      }
      function qe() {
        return Se(131072);
      }
      function Ze() {
        return Se(32768);
      }
      function Ge() {
        return Se(65536);
      }
      function we(s, ...l) {
        return nt(r.getTokenStart(), r.getTokenEnd(), s, ...l);
      }
      function Lr(s, l, m, ...g) {
        let k = Ya(at), D;
        return (!k || s !== k.start) && (D = ci(Lt, He, s, l, m, ...g), at.push(D)), tr = !0, D;
      }
      function nt(s, l, m, ...g) {
        return Lr(s, l - s, m, ...g);
      }
      function cr(s, l, ...m) {
        nt(s.pos, s.end, l, ...m);
      }
      function Sn(s, l, m) {
        Lr(r.getTokenEnd(), l, s, m);
      }
      function O() {
        return r.getTokenFullStart();
      }
      function L() {
        return r.hasPrecedingJSDocComment();
      }
      function p() {
        return lt;
      }
      function Be() {
        return lt = r.scan();
      }
      function Ve(s) {
        return j(), s();
      }
      function j() {
        return aa(lt) && (r.hasUnicodeEscape() || r.hasExtendedUnicodeEscape()) && nt(r.getTokenStart(), r.getTokenEnd(), C.Keywords_cannot_contain_escape_characters), Be();
      }
      function Ye() {
        return lt = r.scanJsDocToken();
      }
      function ze(s) {
        return lt = r.scanJSDocCommentTextToken(s);
      }
      function We() {
        return lt = r.reScanGreaterToken();
      }
      function Pt() {
        return lt = r.reScanSlashToken();
      }
      function _t(s) {
        return lt = r.reScanTemplateToken(s);
      }
      function Ft() {
        return lt = r.reScanLessThanToken();
      }
      function Vt() {
        return lt = r.reScanHashToken();
      }
      function Cn() {
        return lt = r.scanJsxIdentifier();
      }
      function Wr() {
        return lt = r.scanJsxToken();
      }
      function Oa() {
        return lt = r.scanJsxAttributeValue();
      }
      function ur(s, l) {
        let m = lt, g = at.length, k = tr, D = rt, Q = l !== 0 ? r.lookAhead(s) : r.tryScan(s);
        return B.assert(D === rt), (!Q || l !== 0) && (lt = m, l !== 2 && (at.length = g), tr = k), Q;
      }
      function W(s) {
        return ur(s, 1);
      }
      function de(s) {
        return ur(s, 0);
      }
      function je() {
        return p() === 80 ? !0 : p() > 118;
      }
      function xe() {
        return p() === 80 ? !0 : p() === 127 && Ce() || p() === 135 && Ge() ? !1 : p() > 118;
      }
      function J(s, l, m = !0) {
        return p() === s ? (m && j(), !0) : (l ? we(l) : we(C._0_expected, ct(s)), !1);
      }
      let ht = Object.keys(Pl).filter((s) => s.length > 2);
      function bt(s) {
        if (p_(s)) {
          nt(yn(He, s.template.pos), s.template.end, C.Module_declaration_names_may_only_use_or_quoted_strings);
          return;
        }
        let l = et(s) ? _r(s) : void 0;
        if (!l || !ih(l, qr)) {
          we(C._0_expected, ct(27));
          return;
        }
        let m = yn(He, s.pos);
        switch (l) {
          case "const":
          case "let":
          case "var":
            nt(m, s.end, C.Variable_declaration_not_allowed_at_this_location);
            return;
          case "declare":
            return;
          case "interface":
            Mt(C.Interface_name_cannot_be_0, C.Interface_must_be_given_a_name, 19);
            return;
          case "is":
            nt(m, r.getTokenStart(), C.A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods);
            return;
          case "module":
          case "namespace":
            Mt(C.Namespace_name_cannot_be_0, C.Namespace_must_be_given_a_name, 19);
            return;
          case "type":
            Mt(C.Type_alias_name_cannot_be_0, C.Type_alias_must_be_given_a_name, 64);
            return;
        }
        let g = Wi(l, ht, gt) ?? lr(l);
        if (g) {
          nt(m, s.end, C.Unknown_keyword_or_identifier_Did_you_mean_0, g);
          return;
        }
        p() !== 0 && nt(m, s.end, C.Unexpected_keyword_or_identifier);
      }
      function Mt(s, l, m) {
        p() === m ? we(l) : we(s, r.getTokenValue());
      }
      function lr(s) {
        for (let l of ht) if (s.length > l.length + 2 && To(s, l)) return `${l} ${s.slice(l.length)}`;
      }
      function Kd(s, l, m) {
        if (p() === 60 && !r.hasPrecedingLineBreak()) {
          we(C.Decorators_must_precede_the_name_and_all_keywords_of_property_declarations);
          return;
        }
        if (p() === 21) {
          we(C.Cannot_start_a_function_call_in_a_type_annotation), j();
          return;
        }
        if (l && !cn()) {
          m ? we(C._0_expected, ct(27)) : we(C.Expected_for_property_initializer);
          return;
        }
        if (!yi()) {
          if (m) {
            we(C._0_expected, ct(27));
            return;
          }
          bt(s);
        }
      }
      function Go(s) {
        return p() === s ? (Ye(), !0) : (B.assert(ed(s)), we(C._0_expected, ct(s)), !1);
      }
      function Rn(s, l, m, g) {
        if (p() === l) {
          j();
          return;
        }
        let k = we(C._0_expected, ct(l));
        m && k && Io(k, ci(Lt, He, g, 1, C.The_parser_expected_to_find_a_1_to_match_the_0_token_here, ct(s), ct(l)));
      }
      function Oe(s) {
        return p() === s ? (j(), !0) : !1;
      }
      function pt(s) {
        if (p() === s) return Rt();
      }
      function Ud(s) {
        if (p() === s) return qd();
      }
      function Vr(s, l, m) {
        return pt(s) || zt(s, !1, l || C._0_expected, m || ct(s));
      }
      function jd(s) {
        return Ud(s) || (B.assert(ed(s)), zt(s, !1, C._0_expected, ct(s)));
      }
      function Rt() {
        let s = O(), l = p();
        return j(), A(ge(l), s);
      }
      function qd() {
        let s = O(), l = p();
        return Ye(), A(ge(l), s);
      }
      function cn() {
        return p() === 27 ? !0 : p() === 20 || p() === 1 || r.hasPrecedingLineBreak();
      }
      function yi() {
        return cn() ? (p() === 27 && j(), !0) : !1;
      }
      function Ht() {
        return yi() || J(27);
      }
      function wt(s, l, m, g) {
        let k = S(s, g);
        return ia(k, l, m ?? r.getTokenFullStart()), k;
      }
      function A(s, l, m) {
        return ia(s, l, m ?? r.getTokenFullStart()), rt && (s.flags |= rt), tr && (tr = !1, s.flags |= 262144), s;
      }
      function zt(s, l, m, ...g) {
        l ? Lr(r.getTokenFullStart(), 0, m, ...g) : m && we(m, ...g);
        let k = O(), D = s === 80 ? re("", void 0) : kf(s) ? d.createTemplateLiteralLikeNode(s, "", "", void 0) : s === 9 ? _("", void 0) : s === 11 ? v("", void 0) : s === 282 ? d.createMissingDeclaration() : ge(s);
        return A(D, k);
      }
      function zn(s) {
        let l = mt.get(s);
        return l === void 0 && mt.set(s, l = s), l;
      }
      function un(s, l, m) {
        if (s) {
          vr++;
          let ce = r.hasPrecedingJSDocLeadingAsterisks() ? r.getTokenStart() : O(), te = p(), Y = zn(r.getTokenValue()), pe = r.hasExtendedUnicodeEscape();
          return Be(), A(re(Y, te, pe), ce);
        }
        if (p() === 81) return we(m || C.Private_identifiers_are_not_allowed_outside_class_bodies), un(!0);
        if (p() === 0 && r.tryScan(() => r.reScanInvalidIdentifier() === 80)) return un(!0);
        vr++;
        let g = p() === 1, k = r.isReservedWord(), D = r.getTokenText(), Q = k ? C.Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here : C.Identifier_expected;
        return zt(80, g, l || Q, D);
      }
      function _s(s) {
        return un(je(), void 0, s);
      }
      function vt(s, l) {
        return un(xe(), s, l);
      }
      function Jt(s) {
        return un(Tt(p()), s);
      }
      function la() {
        return (r.hasUnicodeEscape() || r.hasExtendedUnicodeEscape()) && we(C.Unicode_escape_sequence_cannot_appear_here), un(Tt(p()));
      }
      function En() {
        return Tt(p()) || p() === 11 || p() === 9 || p() === 10;
      }
      function Wo() {
        return Tt(p()) || p() === 11;
      }
      function Rd(s) {
        if (p() === 11 || p() === 9 || p() === 10) {
          let l = Hr();
          return l.text = zn(l.text), l;
        }
        return p() === 23 ? zd() : p() === 81 ? _i() : Jt();
      }
      function $n() {
        return Rd();
      }
      function zd() {
        let s = O();
        J(23);
        let l = st(Et);
        return J(24), A(d.createComputedPropertyName(l), s);
      }
      function _i() {
        let s = O(), l = ke(zn(r.getTokenValue()));
        return j(), A(l, s);
      }
      function da(s) {
        return p() === s && de(Vo);
      }
      function Ts() {
        return j(), r.hasPrecedingLineBreak() ? !1 : ln();
      }
      function Vo() {
        switch (p()) {
          case 87:
            return j() === 94;
          case 95:
            return j(), p() === 90 ? W(Ja) : p() === 156 ? W($d) : Ma();
          case 90:
            return Ja();
          case 126:
            return j(), ln();
          case 139:
          case 153:
            return j(), Gd();
          default:
            return Ts();
        }
      }
      function Ma() {
        return p() === 60 || p() !== 42 && p() !== 130 && p() !== 19 && ln();
      }
      function $d() {
        return j(), Ma();
      }
      function Ho() {
        return Bn(p()) && de(Vo);
      }
      function ln() {
        return p() === 23 || p() === 19 || p() === 42 || p() === 26 || En();
      }
      function Gd() {
        return p() === 23 || En();
      }
      function Ja() {
        return j(), p() === 86 || p() === 100 || p() === 120 || p() === 60 || p() === 128 && W(Ju) || p() === 134 && W(Bu);
      }
      function Ti(s, l) {
        if (ki(s)) return !0;
        switch (s) {
          case 0:
          case 1:
          case 3:
            return !(p() === 27 && l) && Ku();
          case 2:
            return p() === 84 || p() === 90;
          case 4:
            return W(Cc);
          case 5:
            return W(zp) || p() === 27 && !l;
          case 6:
            return p() === 23 || En();
          case 12:
            switch (p()) {
              case 23:
              case 42:
              case 26:
              case 25:
                return !0;
              default:
                return En();
            }
          case 18:
            return En();
          case 9:
            return p() === 23 || p() === 26 || En();
          case 24:
            return Wo();
          case 7:
            return p() === 19 ? W(Xo) : l ? xe() && !xs() : qs() && !xs();
          case 8:
            return Ji();
          case 10:
            return p() === 28 || p() === 26 || Ji();
          case 19:
            return p() === 103 || p() === 87 || xe();
          case 15:
            switch (p()) {
              case 28:
              case 25:
                return !0;
            }
          case 11:
            return p() === 26 || An();
          case 16:
            return Ci(!1);
          case 17:
            return Ci(!0);
          case 20:
          case 21:
            return p() === 28 || ha();
          case 22:
            return nl();
          case 23:
            return p() === 161 && W(Bp) ? !1 : p() === 11 ? !0 : Tt(p());
          case 13:
            return Tt(p()) || p() === 19;
          case 14:
            return !0;
          case 25:
            return !0;
          case 26:
            return B.fail("ParsingContext.Count used as a context");
          default:
            B.assertNever(s, "Non-exhaustive case in 'isListElement'.");
        }
      }
      function Xo() {
        if (B.assert(p() === 19), j() === 20) {
          let s = j();
          return s === 28 || s === 19 || s === 96 || s === 119;
        }
        return !0;
      }
      function Ba() {
        return j(), xe();
      }
      function Wd() {
        return j(), Tt(p());
      }
      function Qo() {
        return j(), B0(p());
      }
      function xs() {
        return p() === 119 || p() === 96 ? W(Zo) : !1;
      }
      function Zo() {
        return j(), An();
      }
      function Ka() {
        return j(), ha();
      }
      function xi(s) {
        if (p() === 1) return !0;
        switch (s) {
          case 1:
          case 2:
          case 4:
          case 5:
          case 6:
          case 12:
          case 9:
          case 23:
          case 24:
            return p() === 20;
          case 3:
            return p() === 20 || p() === 84 || p() === 90;
          case 7:
            return p() === 19 || p() === 96 || p() === 119;
          case 8:
            return ks();
          case 19:
            return p() === 32 || p() === 21 || p() === 19 || p() === 96 || p() === 119;
          case 11:
            return p() === 22 || p() === 27;
          case 15:
          case 21:
          case 10:
            return p() === 24;
          case 17:
          case 16:
          case 18:
            return p() === 22 || p() === 24;
          case 20:
            return p() !== 28;
          case 22:
            return p() === 19 || p() === 20;
          case 13:
            return p() === 32 || p() === 44;
          case 14:
            return p() === 30 && W(fo);
          default:
            return !1;
        }
      }
      function ks() {
        return !!(cn() || au(p()) || p() === 39);
      }
      function Yo() {
        B.assert(yt, "Missing parsing context");
        for (let s = 0; s < 26; s++) if (yt & 1 << s && (Ti(s, !0) || xi(s))) return !0;
        return !1;
      }
      function Cr(s, l) {
        let m = yt;
        yt |= 1 << s;
        let g = [], k = O();
        for (; !xi(s); ) {
          if (Ti(s, !1)) {
            g.push(bs(s, l));
            continue;
          }
          if (oc(s)) break;
        }
        return yt = m, wt(g, k);
      }
      function bs(s, l) {
        let m = ki(s);
        return m ? ec(m) : l();
      }
      function ki(s, l) {
        var m;
        if (!Ot || !tc(s) || tr) return;
        let g = Ot.currentNode(l ?? r.getTokenFullStart());
        if (!(Sa(g) || h4(g) || Ff(g) || (g.flags & 101441536) !== rt) && rc(g, s)) return Ql(g) && (m = g.jsDoc) != null && m.jsDocCache && (g.jsDoc.jsDocCache = void 0), g;
      }
      function ec(s) {
        return r.resetTokenState(s.end), j(), s;
      }
      function tc(s) {
        switch (s) {
          case 5:
          case 2:
          case 0:
          case 1:
          case 3:
          case 6:
          case 4:
          case 8:
          case 17:
          case 16:
            return !0;
        }
        return !1;
      }
      function rc(s, l) {
        switch (l) {
          case 5:
            return vs(s);
          case 2:
            return nc(s);
          case 0:
          case 1:
          case 3:
            return Ss(s);
          case 6:
            return ac(s);
          case 4:
            return Cs(s);
          case 8:
            return ic(s);
          case 17:
          case 16:
            return sc(s);
        }
        return !1;
      }
      function vs(s) {
        if (s) switch (s.kind) {
          case 176:
          case 181:
          case 177:
          case 178:
          case 172:
          case 240:
            return !0;
          case 174:
            let l = s;
            return !(l.name.kind === 80 && l.name.escapedText === "constructor");
        }
        return !1;
      }
      function nc(s) {
        if (s) switch (s.kind) {
          case 296:
          case 297:
            return !0;
        }
        return !1;
      }
      function Ss(s) {
        if (s) switch (s.kind) {
          case 262:
          case 243:
          case 241:
          case 245:
          case 244:
          case 257:
          case 253:
          case 255:
          case 252:
          case 251:
          case 249:
          case 250:
          case 248:
          case 247:
          case 254:
          case 242:
          case 258:
          case 256:
          case 246:
          case 259:
          case 272:
          case 271:
          case 278:
          case 277:
          case 267:
          case 263:
          case 264:
          case 266:
          case 265:
            return !0;
        }
        return !1;
      }
      function ac(s) {
        return s.kind === 306;
      }
      function Cs(s) {
        if (s) switch (s.kind) {
          case 180:
          case 173:
          case 181:
          case 171:
          case 179:
            return !0;
        }
        return !1;
      }
      function ic(s) {
        return s.kind !== 260 ? !1 : s.initializer === void 0;
      }
      function sc(s) {
        return s.kind !== 169 ? !1 : s.initializer === void 0;
      }
      function oc(s) {
        return bi(s), Yo() ? !0 : (j(), !1);
      }
      function bi(s) {
        switch (s) {
          case 0:
            return p() === 90 ? we(C._0_expected, ct(95)) : we(C.Declaration_or_statement_expected);
          case 1:
            return we(C.Declaration_or_statement_expected);
          case 2:
            return we(C.case_or_default_expected);
          case 3:
            return we(C.Statement_expected);
          case 18:
          case 4:
            return we(C.Property_or_signature_expected);
          case 5:
            return we(C.Unexpected_token_A_constructor_method_accessor_or_property_was_expected);
          case 6:
            return we(C.Enum_member_expected);
          case 7:
            return we(C.Expression_expected);
          case 8:
            return aa(p()) ? we(C._0_is_not_allowed_as_a_variable_declaration_name, ct(p())) : we(C.Variable_declaration_expected);
          case 9:
            return we(C.Property_destructuring_pattern_expected);
          case 10:
            return we(C.Array_element_destructuring_pattern_expected);
          case 11:
            return we(C.Argument_expression_expected);
          case 12:
            return we(C.Property_assignment_expected);
          case 15:
            return we(C.Expression_or_comma_expected);
          case 17:
            return we(C.Parameter_declaration_expected);
          case 16:
            return aa(p()) ? we(C._0_is_not_allowed_as_a_parameter_name, ct(p())) : we(C.Parameter_declaration_expected);
          case 19:
            return we(C.Type_parameter_declaration_expected);
          case 20:
            return we(C.Type_argument_expected);
          case 21:
            return we(C.Type_expected);
          case 22:
            return we(C.Unexpected_token_expected);
          case 23:
            return p() === 161 ? we(C._0_expected, "}") : we(C.Identifier_expected);
          case 13:
            return we(C.Identifier_expected);
          case 14:
            return we(C.Identifier_expected);
          case 24:
            return we(C.Identifier_or_string_literal_expected);
          case 25:
            return we(C.Identifier_expected);
          case 26:
            return B.fail("ParsingContext.Count used as a context");
          default:
            B.assertNever(s);
        }
      }
      function dr(s, l, m) {
        let g = yt;
        yt |= 1 << s;
        let k = [], D = O(), Q = -1;
        for (; ; ) {
          if (Ti(s, !1)) {
            let ce = r.getTokenFullStart(), te = bs(s, l);
            if (!te) {
              yt = g;
              return;
            }
            if (k.push(te), Q = r.getTokenStart(), Oe(28)) continue;
            if (Q = -1, xi(s)) break;
            J(28, Es(s)), m && p() === 27 && !r.hasPrecedingLineBreak() && j(), ce === r.getTokenFullStart() && j();
            continue;
          }
          if (xi(s) || oc(s)) break;
        }
        return yt = g, wt(k, D, void 0, Q >= 0);
      }
      function Es(s) {
        return s === 6 ? C.An_enum_member_name_must_be_followed_by_a_or : void 0;
      }
      function dn() {
        let s = wt([], O());
        return s.isMissingList = !0, s;
      }
      function cc(s) {
        return !!s.isMissingList;
      }
      function Gn(s, l, m, g) {
        if (J(m)) {
          let k = dr(s, l);
          return J(g), k;
        }
        return dn();
      }
      function Wn(s, l) {
        let m = O(), g = s ? Jt(l) : vt(l);
        for (; Oe(25) && p() !== 30; ) g = A(d.createQualifiedName(g, pa(s, !1, !0)), m);
        return g;
      }
      function Vd(s, l) {
        return A(d.createQualifiedName(s, l), s.pos);
      }
      function pa(s, l, m) {
        if (r.hasPrecedingLineBreak() && Tt(p()) && W(eo)) return zt(80, !0, C.Identifier_expected);
        if (p() === 81) {
          let g = _i();
          return l ? g : zt(80, !0, C.Identifier_expected);
        }
        return s ? m ? Jt() : la() : vt();
      }
      function Hd(s) {
        let l = O(), m = [], g;
        do
          g = pc(s), m.push(g);
        while (g.literal.kind === 17);
        return wt(m, l);
      }
      function vi(s) {
        let l = O();
        return A(d.createTemplateExpression(Ua(s), Hd(s)), l);
      }
      function uc() {
        let s = O();
        return A(d.createTemplateLiteralType(Ua(!1), Xd()), s);
      }
      function Xd() {
        let s = O(), l = [], m;
        do
          m = lc(), l.push(m);
        while (m.literal.kind === 17);
        return wt(l, s);
      }
      function lc() {
        let s = O();
        return A(d.createTemplateLiteralTypeSpan(ot(), dc(!1)), s);
      }
      function dc(s) {
        return p() === 20 ? (_t(s), fc()) : Vr(18, C._0_expected, ct(20));
      }
      function pc(s) {
        let l = O();
        return A(d.createTemplateSpan(st(Et), dc(s)), l);
      }
      function Hr() {
        return fa(p());
      }
      function Ua(s) {
        !s && r.getTokenFlags() & 26656 && _t(!1);
        let l = fa(p());
        return B.assert(l.kind === 16, "Template head has wrong token kind"), l;
      }
      function fc() {
        let s = fa(p());
        return B.assert(s.kind === 17 || s.kind === 18, "Template fragment has wrong token kind"), s;
      }
      function Qd(s) {
        let l = s === 15 || s === 18, m = r.getTokenText();
        return m.substring(1, m.length - (r.isUnterminated() ? 0 : l ? 1 : 2));
      }
      function fa(s) {
        let l = O(), m = kf(s) ? d.createTemplateLiteralLikeNode(s, r.getTokenValue(), Qd(s), r.getTokenFlags() & 7176) : s === 9 ? _(r.getTokenValue(), r.getNumericLiteralFlags()) : s === 11 ? v(r.getTokenValue(), void 0, r.hasExtendedUnicodeEscape()) : Mh(s) ? F(s, r.getTokenValue()) : B.fail();
        return r.hasExtendedUnicodeEscape() && (m.hasExtendedUnicodeEscape = !0), r.isUnterminated() && (m.isUnterminated = !0), j(), A(m, l);
      }
      function ma() {
        return Wn(!0, C.Type_expected);
      }
      function mc() {
        if (!r.hasPrecedingLineBreak() && Ft() === 30) return Gn(20, ot, 30, 32);
      }
      function Si() {
        let s = O();
        return A(d.createTypeReferenceNode(ma(), mc()), s);
      }
      function ws(s) {
        switch (s.kind) {
          case 183:
            return Sa(s.typeName);
          case 184:
          case 185: {
            let { parameters: l, type: m } = s;
            return cc(l) || ws(m);
          }
          case 196:
            return ws(s.type);
          default:
            return !1;
        }
      }
      function Zd(s) {
        return j(), A(d.createTypePredicateNode(void 0, s, ot()), s.pos);
      }
      function As() {
        let s = O();
        return j(), A(d.createThisTypeNode(), s);
      }
      function Yd() {
        let s = O();
        return j(), A(d.createJSDocAllType(), s);
      }
      function hc() {
        let s = O();
        return j(), A(d.createJSDocNonNullableType(Ks(), !1), s);
      }
      function ep() {
        let s = O();
        return j(), p() === 28 || p() === 20 || p() === 22 || p() === 32 || p() === 64 || p() === 52 ? A(d.createJSDocUnknownType(), s) : A(d.createJSDocNullableType(ot(), !1), s);
      }
      function gc() {
        let s = O(), l = L();
        if (de(cl)) {
          let m = Xr(36), g = Or(59, !1);
          return Ne(A(d.createJSDocFunctionType(m, g), s), l);
        }
        return A(d.createTypeReferenceNode(Jt(), void 0), s);
      }
      function Ns() {
        let s = O(), l;
        return (p() === 110 || p() === 105) && (l = Jt(), J(59)), A(d.createParameterDeclaration(void 0, void 0, l, void 0, Ds(), void 0), s);
      }
      function Ds() {
        r.setSkipJsDocLeadingAsterisks(!0);
        let s = O();
        if (Oe(144)) {
          let g = d.createJSDocNamepathType(void 0);
          e: for (; ; ) switch (p()) {
            case 20:
            case 1:
            case 28:
            case 5:
              break e;
            default:
              Ye();
          }
          return r.setSkipJsDocLeadingAsterisks(!1), A(g, s);
        }
        let l = Oe(26), m = Ai();
        return r.setSkipJsDocLeadingAsterisks(!1), l && (m = A(d.createJSDocVariadicType(m), s)), p() === 64 ? (j(), A(d.createJSDocOptionalType(m), s)) : m;
      }
      function yc() {
        let s = O();
        J(114);
        let l = Wn(!0), m = r.hasPrecedingLineBreak() ? void 0 : Ui();
        return A(d.createTypeQueryNode(l, m), s);
      }
      function _c() {
        let s = O(), l = wr(!1, !0), m = vt(), g, k;
        Oe(96) && (ha() || !An() ? g = ot() : k = pu());
        let D = Oe(64) ? ot() : void 0, Q = d.createTypeParameterDeclaration(l, m, g, D);
        return Q.expression = k, A(Q, s);
      }
      function pr() {
        if (p() === 30) return Gn(19, _c, 30, 32);
      }
      function Ci(s) {
        return p() === 26 || Ji() || Bn(p()) || p() === 60 || ha(!s);
      }
      function Tc(s) {
        let l = Wa(C.Private_identifiers_cannot_be_used_as_parameters);
        return og(l) === 0 && !$t(s) && Bn(p()) && j(), l;
      }
      function xc() {
        return je() || p() === 23 || p() === 19;
      }
      function Ps(s) {
        return Fs(s);
      }
      function kc(s) {
        return Fs(s, !1);
      }
      function Fs(s, l = !0) {
        let m = O(), g = L(), k = s ? K(() => wr(!0)) : Z(() => wr(!0));
        if (p() === 110) {
          let te = d.createParameterDeclaration(k, void 0, un(!0), void 0, wn(), void 0), Y = bl(k);
          return Y && cr(Y, C.Neither_decorators_nor_modifiers_may_be_applied_to_this_parameters), Ne(A(te, m), g);
        }
        let D = jt;
        jt = !1;
        let Q = pt(26);
        if (!l && !xc()) return;
        let ce = Ne(A(d.createParameterDeclaration(k, Q, Tc(k), pt(58), wn(), Nn()), m), g);
        return jt = D, ce;
      }
      function Or(s, l) {
        if (bc(s, l)) return Sr(Ai);
      }
      function bc(s, l) {
        return s === 39 ? (J(s), !0) : Oe(59) ? !0 : l && p() === 39 ? (we(C._0_expected, ct(59)), j(), !0) : !1;
      }
      function Is(s, l) {
        let m = Ce(), g = Ge();
        Xe(!!(s & 1)), it(!!(s & 2));
        let k = s & 32 ? dr(17, Ns) : dr(16, () => l ? Ps(g) : kc(g));
        return Xe(m), it(g), k;
      }
      function Xr(s) {
        if (!J(21)) return dn();
        let l = Is(s, !0);
        return J(22), l;
      }
      function Ei() {
        Oe(28) || Ht();
      }
      function vc(s) {
        let l = O(), m = L();
        s === 180 && J(105);
        let g = pr(), k = Xr(4), D = Or(59, !0);
        Ei();
        let Q = s === 179 ? d.createCallSignature(g, k, D) : d.createConstructSignature(g, k, D);
        return Ne(A(Q, l), m);
      }
      function Vn() {
        return p() === 23 && W(tp);
      }
      function tp() {
        if (j(), p() === 26 || p() === 24) return !0;
        if (Bn(p())) {
          if (j(), xe()) return !0;
        } else if (xe()) j();
        else return !1;
        return p() === 59 || p() === 28 ? !0 : p() !== 58 ? !1 : (j(), p() === 59 || p() === 28 || p() === 24);
      }
      function Ls(s, l, m) {
        let g = Gn(16, () => Ps(!1), 23, 24), k = wn();
        Ei();
        let D = d.createIndexSignature(m, g, k);
        return Ne(A(D, s), l);
      }
      function Sc(s, l, m) {
        let g = $n(), k = pt(58), D;
        if (p() === 21 || p() === 30) {
          let Q = pr(), ce = Xr(4), te = Or(59, !0);
          D = d.createMethodSignature(m, g, k, Q, ce, te);
        } else {
          let Q = wn();
          D = d.createPropertySignature(m, g, k, Q), p() === 64 && (D.initializer = Nn());
        }
        return Ei(), Ne(A(D, s), l);
      }
      function Cc() {
        if (p() === 21 || p() === 30 || p() === 139 || p() === 153) return !0;
        let s = !1;
        for (; Bn(p()); ) s = !0, j();
        return p() === 23 ? !0 : (En() && (s = !0, j()), s ? p() === 21 || p() === 30 || p() === 58 || p() === 59 || p() === 28 || cn() : !1);
      }
      function ja() {
        if (p() === 21 || p() === 30) return vc(179);
        if (p() === 105 && W(Ec)) return vc(180);
        let s = O(), l = L(), m = wr(!1);
        return da(139) ? Qn(s, l, m, 177, 4) : da(153) ? Qn(s, l, m, 178, 4) : Vn() ? Ls(s, l, m) : Sc(s, l, m);
      }
      function Ec() {
        return j(), p() === 21 || p() === 30;
      }
      function wc() {
        return j() === 25;
      }
      function Ac() {
        switch (j()) {
          case 21:
          case 30:
          case 25:
            return !0;
        }
        return !1;
      }
      function Nc() {
        let s = O();
        return A(d.createTypeLiteralNode(Dc()), s);
      }
      function Dc() {
        let s;
        return J(19) ? (s = Cr(4, ja), J(20)) : s = dn(), s;
      }
      function Pc() {
        return j(), p() === 40 || p() === 41 ? j() === 148 : (p() === 148 && j(), p() === 23 && Ba() && j() === 103);
      }
      function rp() {
        let s = O(), l = Jt();
        J(103);
        let m = ot();
        return A(d.createTypeParameterDeclaration(void 0, l, m, void 0), s);
      }
      function Fc() {
        let s = O();
        J(19);
        let l;
        (p() === 148 || p() === 40 || p() === 41) && (l = Rt(), l.kind !== 148 && J(148)), J(23);
        let m = rp(), g = Oe(130) ? ot() : void 0;
        J(24);
        let k;
        (p() === 58 || p() === 40 || p() === 41) && (k = Rt(), k.kind !== 58 && J(58));
        let D = wn();
        Ht();
        let Q = Cr(4, ja);
        return J(20), A(d.createMappedTypeNode(l, m, g, k, D, Q), s);
      }
      function Ic() {
        let s = O();
        if (Oe(26)) return A(d.createRestTypeNode(ot()), s);
        let l = ot();
        if (D_(l) && l.pos === l.type.pos) {
          let m = d.createOptionalTypeNode(l.type);
          return sr(m, l), m.flags = l.flags, m;
        }
        return l;
      }
      function Os() {
        return j() === 59 || p() === 58 && j() === 59;
      }
      function np() {
        return p() === 26 ? Tt(j()) && Os() : Tt(p()) && Os();
      }
      function Lc() {
        if (W(np)) {
          let s = O(), l = L(), m = pt(26), g = Jt(), k = pt(58);
          J(59);
          let D = Ic(), Q = d.createNamedTupleMember(m, g, k, D);
          return Ne(A(Q, s), l);
        }
        return Ic();
      }
      function ap() {
        let s = O();
        return A(d.createTupleTypeNode(Gn(21, Lc, 23, 24)), s);
      }
      function Oc() {
        let s = O();
        J(21);
        let l = ot();
        return J(22), A(d.createParenthesizedType(l), s);
      }
      function ip() {
        let s;
        if (p() === 128) {
          let l = O();
          j();
          let m = A(ge(128), l);
          s = wt([m], l);
        }
        return s;
      }
      function Ms() {
        let s = O(), l = L(), m = ip(), g = Oe(105);
        B.assert(!m || g, "Per isStartOfFunctionOrConstructorType, a function type cannot have modifiers.");
        let k = pr(), D = Xr(4), Q = Or(39, !1), ce = g ? d.createConstructorTypeNode(m, k, D, Q) : d.createFunctionTypeNode(k, D, Q);
        return Ne(A(ce, s), l);
      }
      function Mc() {
        let s = Rt();
        return p() === 25 ? void 0 : s;
      }
      function Js(s) {
        let l = O();
        s && j();
        let m = p() === 112 || p() === 97 || p() === 106 ? Rt() : fa(p());
        return s && (m = A(d.createPrefixUnaryExpression(41, m), l)), A(d.createLiteralTypeNode(m), l);
      }
      function sp() {
        return j(), p() === 102;
      }
      function Bs() {
        xt |= 4194304;
        let s = O(), l = Oe(114);
        J(102), J(21);
        let m = ot(), g;
        if (Oe(28)) {
          let Q = r.getTokenStart();
          J(19);
          let ce = p();
          if (ce === 118 || ce === 132 ? j() : we(C._0_expected, ct(118)), J(59), g = mo(ce, !0), !J(20)) {
            let te = Ya(at);
            te && te.code === C._0_expected.code && Io(te, ci(Lt, He, Q, 1, C.The_parser_expected_to_find_a_1_to_match_the_0_token_here, "{", "}"));
          }
        }
        J(22);
        let k = Oe(25) ? ma() : void 0, D = mc();
        return A(d.createImportTypeNode(m, g, k, D, l), s);
      }
      function Jc() {
        return j(), p() === 9 || p() === 10;
      }
      function Ks() {
        switch (p()) {
          case 133:
          case 159:
          case 154:
          case 150:
          case 163:
          case 155:
          case 136:
          case 157:
          case 146:
          case 151:
            return de(Mc) || Si();
          case 67:
            r.reScanAsteriskEqualsToken();
          case 42:
            return Yd();
          case 61:
            r.reScanQuestionToken();
          case 58:
            return ep();
          case 100:
            return gc();
          case 54:
            return hc();
          case 15:
          case 11:
          case 9:
          case 10:
          case 112:
          case 97:
          case 106:
            return Js();
          case 41:
            return W(Jc) ? Js(!0) : Si();
          case 116:
            return Rt();
          case 110: {
            let s = As();
            return p() === 142 && !r.hasPrecedingLineBreak() ? Zd(s) : s;
          }
          case 114:
            return W(sp) ? Bs() : yc();
          case 19:
            return W(Pc) ? Fc() : Nc();
          case 23:
            return ap();
          case 21:
            return Oc();
          case 102:
            return Bs();
          case 131:
            return W(eo) ? Wc() : Si();
          case 16:
            return uc();
          default:
            return Si();
        }
      }
      function ha(s) {
        switch (p()) {
          case 133:
          case 159:
          case 154:
          case 150:
          case 163:
          case 136:
          case 148:
          case 155:
          case 158:
          case 116:
          case 157:
          case 106:
          case 110:
          case 114:
          case 146:
          case 19:
          case 23:
          case 30:
          case 52:
          case 51:
          case 105:
          case 11:
          case 9:
          case 10:
          case 112:
          case 97:
          case 151:
          case 42:
          case 58:
          case 54:
          case 26:
          case 140:
          case 102:
          case 131:
          case 15:
          case 16:
            return !0;
          case 100:
            return !s;
          case 41:
            return !s && W(Jc);
          case 21:
            return !s && W(Bc);
          default:
            return xe();
        }
      }
      function Bc() {
        return j(), p() === 22 || Ci(!1) || ha();
      }
      function Kc() {
        let s = O(), l = Ks();
        for (; !r.hasPrecedingLineBreak(); ) switch (p()) {
          case 54:
            j(), l = A(d.createJSDocNonNullableType(l, !0), s);
            break;
          case 58:
            if (W(Ka)) return l;
            j(), l = A(d.createJSDocNullableType(l, !0), s);
            break;
          case 23:
            if (J(23), ha()) {
              let m = ot();
              J(24), l = A(d.createIndexedAccessTypeNode(l, m), s);
            } else J(24), l = A(d.createArrayTypeNode(l), s);
            break;
          default:
            return l;
        }
        return l;
      }
      function Uc(s) {
        let l = O();
        return J(s), A(d.createTypeOperatorNode(s, qc()), l);
      }
      function op() {
        if (Oe(96)) {
          let s = qn(ot);
          if (qe() || p() !== 58) return s;
        }
      }
      function jc() {
        let s = O(), l = vt(), m = de(op), g = d.createTypeParameterDeclaration(void 0, l, m);
        return A(g, s);
      }
      function cp() {
        let s = O();
        return J(140), A(d.createInferTypeNode(jc()), s);
      }
      function qc() {
        let s = p();
        switch (s) {
          case 143:
          case 158:
          case 148:
            return Uc(s);
          case 140:
            return cp();
        }
        return Sr(Kc);
      }
      function wi(s) {
        if (js()) {
          let l = Ms(), m;
          return s2(l) ? m = s ? C.Function_type_notation_must_be_parenthesized_when_used_in_a_union_type : C.Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type : m = s ? C.Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type : C.Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type, cr(l, m), l;
        }
      }
      function Rc(s, l, m) {
        let g = O(), k = s === 52, D = Oe(s), Q = D && wi(k) || l();
        if (p() === s || D) {
          let ce = [Q];
          for (; Oe(s); ) ce.push(wi(k) || l());
          Q = A(m(wt(ce, g)), g);
        }
        return Q;
      }
      function Us() {
        return Rc(51, qc, d.createIntersectionTypeNode);
      }
      function up() {
        return Rc(52, Us, d.createUnionTypeNode);
      }
      function zc() {
        return j(), p() === 105;
      }
      function js() {
        return p() === 30 || p() === 21 && W($c) ? !0 : p() === 105 || p() === 128 && W(zc);
      }
      function lp() {
        if (Bn(p()) && wr(!1), xe() || p() === 110) return j(), !0;
        if (p() === 23 || p() === 19) {
          let s = at.length;
          return Wa(), s === at.length;
        }
        return !1;
      }
      function $c() {
        return j(), !!(p() === 22 || p() === 26 || lp() && (p() === 59 || p() === 28 || p() === 58 || p() === 64 || p() === 22 && (j(), p() === 39)));
      }
      function Ai() {
        let s = O(), l = xe() && de(Gc), m = ot();
        return l ? A(d.createTypePredicateNode(void 0, l, m), s) : m;
      }
      function Gc() {
        let s = vt();
        if (p() === 142 && !r.hasPrecedingLineBreak()) return j(), s;
      }
      function Wc() {
        let s = O(), l = Vr(131), m = p() === 110 ? As() : vt(), g = Oe(142) ? ot() : void 0;
        return A(d.createTypePredicateNode(l, m, g), s);
      }
      function ot() {
        if (rt & 81920) return At(81920, ot);
        if (js()) return Ms();
        let s = O(), l = up();
        if (!qe() && !r.hasPrecedingLineBreak() && Oe(96)) {
          let m = qn(ot);
          J(58);
          let g = Sr(ot);
          J(59);
          let k = Sr(ot);
          return A(d.createConditionalTypeNode(l, m, g, k), s);
        }
        return l;
      }
      function wn() {
        return Oe(59) ? ot() : void 0;
      }
      function qs() {
        switch (p()) {
          case 110:
          case 108:
          case 106:
          case 112:
          case 97:
          case 9:
          case 10:
          case 11:
          case 15:
          case 16:
          case 21:
          case 23:
          case 19:
          case 100:
          case 86:
          case 105:
          case 44:
          case 69:
          case 80:
            return !0;
          case 102:
            return W(Ac);
          default:
            return xe();
        }
      }
      function An() {
        if (qs()) return !0;
        switch (p()) {
          case 40:
          case 41:
          case 55:
          case 54:
          case 91:
          case 114:
          case 116:
          case 46:
          case 47:
          case 30:
          case 135:
          case 127:
          case 81:
          case 60:
            return !0;
          default:
            return iu() ? !0 : xe();
        }
      }
      function Vc() {
        return p() !== 19 && p() !== 100 && p() !== 86 && p() !== 60 && An();
      }
      function Et() {
        let s = Ze();
        s && Qe(!1);
        let l = O(), m = qt(!0), g;
        for (; g = pt(28); ) m = $s(m, g, qt(!0), l);
        return s && Qe(!0), m;
      }
      function Nn() {
        return Oe(64) ? qt(!0) : void 0;
      }
      function qt(s) {
        if (Hc()) return Xc();
        let l = pp(s) || tu(s);
        if (l) return l;
        let m = O(), g = L(), k = qa(0);
        return k.kind === 80 && p() === 39 ? Qc(m, k, s, g, void 0) : ii(k) && $f(We()) ? $s(k, Rt(), qt(s), m) : fp(k, m, s);
      }
      function Hc() {
        return p() === 127 ? Ce() ? !0 : W(to) : !1;
      }
      function dp() {
        return j(), !r.hasPrecedingLineBreak() && xe();
      }
      function Xc() {
        let s = O();
        return j(), !r.hasPrecedingLineBreak() && (p() === 42 || An()) ? A(d.createYieldExpression(pt(42), qt(!0)), s) : A(d.createYieldExpression(void 0, void 0), s);
      }
      function Qc(s, l, m, g, k) {
        B.assert(p() === 39, "parseSimpleArrowFunctionExpression should only have been called if we had a =>");
        let D = d.createParameterDeclaration(void 0, void 0, l, void 0, void 0, void 0);
        A(D, l.pos);
        let Q = wt([D], D.pos, D.end), ce = Vr(39), te = Rs(!!k, m), Y = d.createArrowFunction(k, void 0, Q, void 0, ce, te);
        return Ne(A(Y, s), g);
      }
      function pp(s) {
        let l = Zc();
        if (l !== 0) return l === 1 ? nu(!0, !0) : de(() => eu(s));
      }
      function Zc() {
        return p() === 21 || p() === 30 || p() === 134 ? W(Yc) : p() === 39 ? 1 : 0;
      }
      function Yc() {
        if (p() === 134 && (j(), r.hasPrecedingLineBreak() || p() !== 21 && p() !== 30)) return 0;
        let s = p(), l = j();
        if (s === 21) {
          if (l === 22) switch (j()) {
            case 39:
            case 59:
            case 19:
              return 1;
            default:
              return 0;
          }
          if (l === 23 || l === 19) return 2;
          if (l === 26) return 1;
          if (Bn(l) && l !== 134 && W(Ba)) return j() === 130 ? 0 : 1;
          if (!xe() && l !== 110) return 0;
          switch (j()) {
            case 59:
              return 1;
            case 58:
              return j(), p() === 59 || p() === 28 || p() === 64 || p() === 22 ? 1 : 0;
            case 28:
            case 64:
            case 22:
              return 2;
          }
          return 0;
        } else return B.assert(s === 30), !xe() && p() !== 87 ? 0 : ut === 1 ? W(() => {
          Oe(87);
          let m = j();
          if (m === 96) switch (j()) {
            case 64:
            case 32:
            case 44:
              return !1;
            default:
              return !0;
          }
          else if (m === 28 || m === 64) return !0;
          return !1;
        }) ? 1 : 0 : 2;
      }
      function eu(s) {
        let l = r.getTokenStart();
        if (or != null && or.has(l)) return;
        let m = nu(!1, s);
        return m || (or || (or = /* @__PURE__ */ new Set())).add(l), m;
      }
      function tu(s) {
        if (p() === 134 && W(ru) === 1) {
          let l = O(), m = L(), g = el(), k = qa(0);
          return Qc(l, k, s, m, g);
        }
      }
      function ru() {
        if (p() === 134) {
          if (j(), r.hasPrecedingLineBreak() || p() === 39) return 0;
          let s = qa(0);
          if (!r.hasPrecedingLineBreak() && s.kind === 80 && p() === 39) return 1;
        }
        return 0;
      }
      function nu(s, l) {
        let m = O(), g = L(), k = el(), D = $t(k, Mo) ? 2 : 0, Q = pr(), ce;
        if (J(21)) {
          if (s) ce = Is(D, s);
          else {
            let Qt = Is(D, s);
            if (!Qt) return;
            ce = Qt;
          }
          if (!J(22) && !s) return;
        } else {
          if (!s) return;
          ce = dn();
        }
        let te = p() === 59, Y = Or(59, !1);
        if (Y && !s && ws(Y)) return;
        let pe = Y;
        for (; (pe == null ? void 0 : pe.kind) === 196; ) pe = pe.type;
        let Ke = pe && P_(pe);
        if (!s && p() !== 39 && (Ke || p() !== 19)) return;
        let Me = p(), Ae = Vr(39), nr = Me === 39 || Me === 19 ? Rs($t(k, Mo), l) : vt();
        if (!l && te && p() !== 59) return;
        let fr = d.createArrowFunction(k, Q, ce, Y, Ae, nr);
        return Ne(A(fr, m), g);
      }
      function Rs(s, l) {
        if (p() === 19) return Ii(s ? 2 : 0);
        if (p() !== 27 && p() !== 100 && p() !== 86 && Ku() && !Vc()) return Ii(16 | (s ? 2 : 0));
        let m = jt;
        jt = !1;
        let g = s ? K(() => qt(l)) : Z(() => qt(l));
        return jt = m, g;
      }
      function fp(s, l, m) {
        let g = pt(58);
        if (!g) return s;
        let k;
        return A(d.createConditionalExpression(s, g, At(i, () => qt(!1)), k = Vr(59), Gl(k) ? qt(m) : zt(80, !1, C._0_expected, ct(59))), l);
      }
      function qa(s) {
        let l = O(), m = pu();
        return zs(s, m, l);
      }
      function au(s) {
        return s === 103 || s === 165;
      }
      function zs(s, l, m) {
        for (; ; ) {
          We();
          let g = td(p());
          if (!(p() === 43 ? g >= s : g > s) || p() === 103 && Te()) break;
          if (p() === 130 || p() === 152) {
            if (r.hasPrecedingLineBreak()) break;
            {
              let k = p();
              j(), l = k === 152 ? su(l, ot()) : ou(l, ot());
            }
          } else l = $s(l, Rt(), qa(g), m);
        }
        return l;
      }
      function iu() {
        return Te() && p() === 103 ? !1 : td(p()) > 0;
      }
      function su(s, l) {
        return A(d.createSatisfiesExpression(s, l), s.pos);
      }
      function $s(s, l, m, g) {
        return A(d.createBinaryExpression(s, l, m), g);
      }
      function ou(s, l) {
        return A(d.createAsExpression(s, l), s.pos);
      }
      function cu() {
        let s = O();
        return A(d.createPrefixUnaryExpression(p(), Ve(Dn)), s);
      }
      function uu() {
        let s = O();
        return A(d.createDeleteExpression(Ve(Dn)), s);
      }
      function mp() {
        let s = O();
        return A(d.createTypeOfExpression(Ve(Dn)), s);
      }
      function lu() {
        let s = O();
        return A(d.createVoidExpression(Ve(Dn)), s);
      }
      function hp() {
        return p() === 135 ? Ge() ? !0 : W(to) : !1;
      }
      function du() {
        let s = O();
        return A(d.createAwaitExpression(Ve(Dn)), s);
      }
      function pu() {
        if (gp()) {
          let m = O(), g = Ni();
          return p() === 43 ? zs(td(p()), g, m) : g;
        }
        let s = p(), l = Dn();
        if (p() === 43) {
          let m = yn(He, l.pos), { end: g } = l;
          l.kind === 216 ? nt(m, g, C.A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses) : (B.assert(ed(s)), nt(m, g, C.An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses, ct(s)));
        }
        return l;
      }
      function Dn() {
        switch (p()) {
          case 40:
          case 41:
          case 55:
          case 54:
            return cu();
          case 91:
            return uu();
          case 114:
            return mp();
          case 116:
            return lu();
          case 30:
            return ut === 1 ? za(!0, void 0, void 0, !0) : yu();
          case 135:
            if (hp()) return du();
          default:
            return Ni();
        }
      }
      function gp() {
        switch (p()) {
          case 40:
          case 41:
          case 55:
          case 54:
          case 91:
          case 114:
          case 116:
          case 135:
            return !1;
          case 30:
            if (ut !== 1) return !1;
          default:
            return !0;
        }
      }
      function Ni() {
        if (p() === 46 || p() === 47) {
          let l = O();
          return A(d.createPrefixUnaryExpression(p(), Ve(Ra)), l);
        } else if (ut === 1 && p() === 30 && W(Qo)) return za(!0);
        let s = Ra();
        if (B.assert(ii(s)), (p() === 46 || p() === 47) && !r.hasPrecedingLineBreak()) {
          let l = p();
          return j(), A(d.createPostfixUnaryExpression(s, l), s.pos);
        }
        return s;
      }
      function Ra() {
        let s = O(), l;
        return p() === 102 ? W(Ec) ? (xt |= 4194304, l = Rt()) : W(wc) ? (j(), j(), l = A(d.createMetaProperty(102, Jt()), s), xt |= 8388608) : l = Di() : l = p() === 108 ? fu() : Di(), Xs(s, l);
      }
      function Di() {
        let s = O(), l = Qs();
        return rr(s, l, !0);
      }
      function fu() {
        let s = O(), l = Rt();
        if (p() === 30) {
          let m = O(), g = de(Fi);
          g !== void 0 && (nt(m, O(), C.super_may_not_use_type_arguments), Er() || (l = d.createExpressionWithTypeArguments(l, g)));
        }
        return p() === 21 || p() === 25 || p() === 23 ? l : (Vr(25, C.super_must_be_followed_by_an_argument_list_or_member_access), A(ae(l, pa(!0, !0, !0)), s));
      }
      function za(s, l, m, g = !1) {
        let k = O(), D = Tp(s), Q;
        if (D.kind === 286) {
          let ce = Pi(D), te, Y = ce[ce.length - 1];
          if ((Y == null ? void 0 : Y.kind) === 284 && !oa(Y.openingElement.tagName, Y.closingElement.tagName) && oa(D.tagName, Y.closingElement.tagName)) {
            let pe = Y.children.end, Ke = A(d.createJsxElement(Y.openingElement, Y.children, A(d.createJsxClosingElement(A(re(""), pe, pe)), pe, pe)), Y.openingElement.pos, pe);
            ce = wt([...ce.slice(0, ce.length - 1), Ke], ce.pos, pe), te = Y.closingElement;
          } else te = gu(D, s), oa(D.tagName, te.tagName) || (m && k2(m) && oa(te.tagName, m.tagName) ? cr(D.tagName, C.JSX_element_0_has_no_corresponding_closing_tag, ts(He, D.tagName)) : cr(te.tagName, C.Expected_corresponding_JSX_closing_tag_for_0, ts(He, D.tagName)));
          Q = A(d.createJsxElement(D, ce, te), k);
        } else D.kind === 289 ? Q = A(d.createJsxFragment(D, Pi(D), vp(s)), k) : (B.assert(D.kind === 285), Q = D);
        if (!g && s && p() === 30) {
          let ce = typeof l > "u" ? Q.pos : l, te = de(() => za(!0, ce));
          if (te) {
            let Y = zt(28, !1);
            return Xf(Y, te.pos, 0), nt(yn(He, ce), te.end, C.JSX_expressions_must_have_one_parent_element), A(d.createBinaryExpression(Q, Y, te), k);
          }
        }
        return Q;
      }
      function Gs() {
        let s = O(), l = d.createJsxText(r.getTokenValue(), lt === 13);
        return lt = r.scanJsxToken(), A(l, s);
      }
      function yp(s, l) {
        switch (l) {
          case 1:
            if (C_(s)) cr(s, C.JSX_fragment_has_no_corresponding_closing_tag);
            else {
              let m = s.tagName, g = Math.min(yn(He, m.pos), m.end);
              nt(g, m.end, C.JSX_element_0_has_no_corresponding_closing_tag, ts(He, s.tagName));
            }
            return;
          case 31:
          case 7:
            return;
          case 12:
          case 13:
            return Gs();
          case 19:
            return mu(!1);
          case 30:
            return za(!1, void 0, s);
          default:
            return B.assertNever(l);
        }
      }
      function Pi(s) {
        let l = [], m = O(), g = yt;
        for (yt |= 16384; ; ) {
          let k = yp(s, lt = r.reScanJsxToken());
          if (!k || (l.push(k), k2(s) && (k == null ? void 0 : k.kind) === 284 && !oa(k.openingElement.tagName, k.closingElement.tagName) && oa(s.tagName, k.closingElement.tagName))) break;
        }
        return yt = g, wt(l, m);
      }
      function _p() {
        let s = O();
        return A(d.createJsxAttributes(Cr(13, hu)), s);
      }
      function Tp(s) {
        let l = O();
        if (J(30), p() === 32) return Wr(), A(d.createJsxOpeningFragment(), l);
        let m = Ws(), g = rt & 524288 ? void 0 : Ui(), k = _p(), D;
        return p() === 32 ? (Wr(), D = d.createJsxOpeningElement(m, g, k)) : (J(44), J(32, void 0, !1) && (s ? j() : Wr()), D = d.createJsxSelfClosingElement(m, g, k)), A(D, l);
      }
      function Ws() {
        let s = O(), l = xp();
        if (b2(l)) return l;
        let m = l;
        for (; Oe(25); ) m = A(ae(m, pa(!0, !1, !1)), s);
        return m;
      }
      function xp() {
        let s = O();
        Cn();
        let l = p() === 110, m = la();
        return Oe(59) ? (Cn(), A(d.createJsxNamespacedName(m, la()), s)) : l ? A(d.createToken(110), s) : m;
      }
      function mu(s) {
        let l = O();
        if (!J(19)) return;
        let m, g;
        return p() !== 20 && (s || (m = pt(26)), g = Et()), s ? J(20) : J(20, void 0, !1) && Wr(), A(d.createJsxExpression(m, g), l);
      }
      function hu() {
        if (p() === 19) return bp();
        let s = O();
        return A(d.createJsxAttribute(kp(), Vs()), s);
      }
      function Vs() {
        if (p() === 64) {
          if (Oa() === 11) return Hr();
          if (p() === 19) return mu(!0);
          if (p() === 30) return za(!0);
          we(C.or_JSX_element_expected);
        }
      }
      function kp() {
        let s = O();
        Cn();
        let l = la();
        return Oe(59) ? (Cn(), A(d.createJsxNamespacedName(l, la()), s)) : l;
      }
      function bp() {
        let s = O();
        J(19), J(26);
        let l = Et();
        return J(20), A(d.createJsxSpreadAttribute(l), s);
      }
      function gu(s, l) {
        let m = O();
        J(31);
        let g = Ws();
        return J(32, void 0, !1) && (l || !oa(s.tagName, g) ? j() : Wr()), A(d.createJsxClosingElement(g), m);
      }
      function vp(s) {
        let l = O();
        return J(31), J(32, C.Expected_corresponding_closing_tag_for_JSX_fragment, !1) && (s ? j() : Wr()), A(d.createJsxJsxClosingFragment(), l);
      }
      function yu() {
        B.assert(ut !== 1, "Type assertions should never be parsed in JSX; they should be parsed as comparisons or JSX elements/fragments.");
        let s = O();
        J(30);
        let l = ot();
        J(32);
        let m = Dn();
        return A(d.createTypeAssertion(l, m), s);
      }
      function Sp() {
        return j(), Tt(p()) || p() === 23 || Er();
      }
      function _u() {
        return p() === 29 && W(Sp);
      }
      function Hs(s) {
        if (s.flags & 64) return !0;
        if (Uo(s)) {
          let l = s.expression;
          for (; Uo(l) && !(l.flags & 64); ) l = l.expression;
          if (l.flags & 64) {
            for (; Uo(s); ) s.flags |= 64, s = s.expression;
            return !0;
          }
        }
        return !1;
      }
      function Tu(s, l, m) {
        let g = pa(!0, !0, !0), k = m || Hs(l), D = k ? Le(l, m, g) : ae(l, g);
        if (k && wa(D.name) && cr(D.name, C.An_optional_chain_cannot_contain_private_identifiers), y_(l) && l.typeArguments) {
          let Q = l.typeArguments.pos - 1, ce = yn(He, l.typeArguments.end) + 1;
          nt(Q, ce, C.An_instantiation_expression_cannot_be_followed_by_a_property_access);
        }
        return A(D, s);
      }
      function Cp(s, l, m) {
        let g;
        if (p() === 24) g = zt(80, !0, C.An_element_access_expression_should_take_an_argument);
        else {
          let D = st(Et);
          Po(D) && (D.text = zn(D.text)), g = D;
        }
        J(24);
        let k = m || Hs(l) ? ue(l, m, g) : z(l, g);
        return A(k, s);
      }
      function rr(s, l, m) {
        for (; ; ) {
          let g, k = !1;
          if (m && _u() ? (g = Vr(29), k = Tt(p())) : k = Oe(25), k) {
            l = Tu(s, l, g);
            continue;
          }
          if ((g || !Ze()) && Oe(23)) {
            l = Cp(s, l, g);
            continue;
          }
          if (Er()) {
            l = !g && l.kind === 233 ? Hn(s, l.expression, g, l.typeArguments) : Hn(s, l, g, void 0);
            continue;
          }
          if (!g) {
            if (p() === 54 && !r.hasPrecedingLineBreak()) {
              j(), l = A(d.createNonNullExpression(l), s);
              continue;
            }
            let D = de(Fi);
            if (D) {
              l = A(d.createExpressionWithTypeArguments(l, D), s);
              continue;
            }
          }
          return l;
        }
      }
      function Er() {
        return p() === 15 || p() === 16;
      }
      function Hn(s, l, m, g) {
        let k = d.createTaggedTemplateExpression(l, g, p() === 15 ? (_t(!0), Hr()) : vi(!0));
        return (m || l.flags & 64) && (k.flags |= 64), k.questionDotToken = m, A(k, s);
      }
      function Xs(s, l) {
        for (; ; ) {
          l = rr(s, l, !0);
          let m, g = pt(29);
          if (g && (m = de(Fi), Er())) {
            l = Hn(s, l, g, m);
            continue;
          }
          if (m || p() === 21) {
            !g && l.kind === 233 && (m = l.typeArguments, l = l.expression);
            let k = xu(), D = g || Hs(l) ? ft(l, g, m, k) : H(l, m, k);
            l = A(D, s);
            continue;
          }
          if (g) {
            let k = zt(80, !1, C.Identifier_expected);
            l = A(Le(l, g, k), s);
          }
          break;
        }
        return l;
      }
      function xu() {
        J(21);
        let s = dr(11, vu);
        return J(22), s;
      }
      function Fi() {
        if (rt & 524288 || Ft() !== 30) return;
        j();
        let s = dr(20, ot);
        if (We() === 32) return j(), s && Ep() ? s : void 0;
      }
      function Ep() {
        switch (p()) {
          case 21:
          case 15:
          case 16:
            return !0;
          case 30:
          case 32:
          case 40:
          case 41:
            return !1;
        }
        return r.hasPrecedingLineBreak() || iu() || !An();
      }
      function Qs() {
        switch (p()) {
          case 15:
            r.getTokenFlags() & 26656 && _t(!1);
          case 9:
          case 10:
          case 11:
            return Hr();
          case 110:
          case 108:
          case 106:
          case 112:
          case 97:
            return Rt();
          case 21:
            return wp();
          case 23:
            return Su();
          case 19:
            return Zs();
          case 134:
            if (!W(Bu)) break;
            return Ys();
          case 60:
            return tl();
          case 86:
            return Vp();
          case 100:
            return Ys();
          case 105:
            return Eu();
          case 44:
          case 69:
            if (Pt() === 14) return Hr();
            break;
          case 16:
            return vi(!1);
          case 81:
            return _i();
        }
        return vt(C.Expression_expected);
      }
      function wp() {
        let s = O(), l = L();
        J(21);
        let m = st(Et);
        return J(22), Ne(A(kr(m), s), l);
      }
      function ku() {
        let s = O();
        J(26);
        let l = qt(!0);
        return A(d.createSpreadElement(l), s);
      }
      function bu() {
        return p() === 26 ? ku() : p() === 28 ? A(d.createOmittedExpression(), O()) : qt(!0);
      }
      function vu() {
        return At(i, bu);
      }
      function Su() {
        let s = O(), l = r.getTokenStart(), m = J(23), g = r.hasPrecedingLineBreak(), k = dr(15, bu);
        return Rn(23, 24, m, l), A(he(k, g), s);
      }
      function Cu() {
        let s = O(), l = L();
        if (pt(26)) {
          let Y = qt(!0);
          return Ne(A(d.createSpreadAssignment(Y), s), l);
        }
        let m = wr(!0);
        if (da(139)) return Qn(s, l, m, 177, 0);
        if (da(153)) return Qn(s, l, m, 178, 0);
        let g = pt(42), k = xe(), D = $n(), Q = pt(58), ce = pt(54);
        if (g || p() === 21 || p() === 30) return oo(s, l, m, g, D, Q, ce);
        let te;
        if (k && p() !== 59) {
          let Y = pt(64), pe = Y ? st(() => qt(!0)) : void 0;
          te = d.createShorthandPropertyAssignment(D, pe), te.equalsToken = Y;
        } else {
          J(59);
          let Y = st(() => qt(!0));
          te = d.createPropertyAssignment(D, Y);
        }
        return te.modifiers = m, te.questionToken = Q, te.exclamationToken = ce, Ne(A(te, s), l);
      }
      function Zs() {
        let s = O(), l = r.getTokenStart(), m = J(19), g = r.hasPrecedingLineBreak(), k = dr(12, Cu, !0);
        return Rn(19, 20, m, l), A(I(k, g), s);
      }
      function Ys() {
        let s = Ze();
        Qe(!1);
        let l = O(), m = L(), g = wr(!1);
        J(100);
        let k = pt(42), D = k ? 1 : 0, Q = $t(g, Mo) ? 2 : 0, ce = D && Q ? ee($a) : D ? Gr($a) : Q ? K($a) : $a(), te = pr(), Y = Xr(D | Q), pe = Or(59, !1), Ke = Ii(D | Q);
        Qe(s);
        let Me = d.createFunctionExpression(g, k, ce, te, Y, pe, Ke);
        return Ne(A(Me, l), m);
      }
      function $a() {
        return je() ? _s() : void 0;
      }
      function Eu() {
        let s = O();
        if (J(105), Oe(25)) {
          let D = Jt();
          return A(d.createMetaProperty(105, D), s);
        }
        let l = O(), m = rr(l, Qs(), !1), g;
        m.kind === 233 && (g = m.typeArguments, m = m.expression), p() === 29 && we(C.Invalid_optional_chain_from_new_expression_Did_you_mean_to_call_0, ts(He, m));
        let k = p() === 21 ? xu() : void 0;
        return A(rn(m, g, k), s);
      }
      function Xn(s, l) {
        let m = O(), g = L(), k = r.getTokenStart(), D = J(19, l);
        if (D || s) {
          let Q = r.hasPrecedingLineBreak(), ce = Cr(1, Xt);
          Rn(19, 20, D, k);
          let te = Ne(A(nn(ce, Q), m), g);
          return p() === 64 && (we(C.Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_whole_assignment_in_parentheses), j()), te;
        } else {
          let Q = dn();
          return Ne(A(nn(Q, void 0), m), g);
        }
      }
      function Ii(s, l) {
        let m = Ce();
        Xe(!!(s & 1));
        let g = Ge();
        it(!!(s & 2));
        let k = jt;
        jt = !1;
        let D = Ze();
        D && Qe(!1);
        let Q = Xn(!!(s & 16), l);
        return D && Qe(!0), jt = k, Xe(m), it(g), Q;
      }
      function wu() {
        let s = O(), l = L();
        return J(27), Ne(A(d.createEmptyStatement(), s), l);
      }
      function Ap() {
        let s = O(), l = L();
        J(101);
        let m = r.getTokenStart(), g = J(21), k = st(Et);
        Rn(21, 22, g, m);
        let D = Xt(), Q = Oe(93) ? Xt() : void 0;
        return Ne(A(Re(k, D, Q), s), l);
      }
      function Au() {
        let s = O(), l = L();
        J(92);
        let m = Xt();
        J(117);
        let g = r.getTokenStart(), k = J(21), D = st(Et);
        return Rn(21, 22, k, g), Oe(27), Ne(A(d.createDoStatement(m, D), s), l);
      }
      function Np() {
        let s = O(), l = L();
        J(117);
        let m = r.getTokenStart(), g = J(21), k = st(Et);
        Rn(21, 22, g, m);
        let D = Xt();
        return Ne(A(an(k, D), s), l);
      }
      function Nu() {
        let s = O(), l = L();
        J(99);
        let m = pt(135);
        J(21);
        let g;
        p() !== 27 && (p() === 115 || p() === 121 || p() === 87 || p() === 160 && W(ju) || p() === 135 && W(qu) ? g = so(!0) : g = ua(Et));
        let k;
        if (m ? J(165) : Oe(165)) {
          let D = st(() => qt(!0));
          J(22), k = It(m, g, D, Xt());
        } else if (Oe(103)) {
          let D = st(Et);
          J(22), k = d.createForInStatement(g, D, Xt());
        } else {
          J(27);
          let D = p() !== 27 && p() !== 22 ? st(Et) : void 0;
          J(27);
          let Q = p() !== 22 ? st(Et) : void 0;
          J(22), k = Un(g, D, Q, Xt());
        }
        return Ne(A(k, s), l);
      }
      function Du(s) {
        let l = O(), m = L();
        J(s === 252 ? 83 : 88);
        let g = cn() ? void 0 : vt();
        Ht();
        let k = s === 252 ? d.createBreakStatement(g) : d.createContinueStatement(g);
        return Ne(A(k, l), m);
      }
      function Pu() {
        let s = O(), l = L();
        J(107);
        let m = cn() ? void 0 : st(Et);
        return Ht(), Ne(A(d.createReturnStatement(m), s), l);
      }
      function Dp() {
        let s = O(), l = L();
        J(118);
        let m = r.getTokenStart(), g = J(21), k = st(Et);
        Rn(21, 22, g, m);
        let D = kt(67108864, Xt);
        return Ne(A(d.createWithStatement(k, D), s), l);
      }
      function Fu() {
        let s = O(), l = L();
        J(84);
        let m = st(Et);
        J(59);
        let g = Cr(3, Xt);
        return Ne(A(d.createCaseClause(m, g), s), l);
      }
      function Pp() {
        let s = O();
        J(90), J(59);
        let l = Cr(3, Xt);
        return A(d.createDefaultClause(l), s);
      }
      function Fp() {
        return p() === 84 ? Fu() : Pp();
      }
      function Iu() {
        let s = O();
        J(19);
        let l = Cr(2, Fp);
        return J(20), A(d.createCaseBlock(l), s);
      }
      function Ip() {
        let s = O(), l = L();
        J(109), J(21);
        let m = st(Et);
        J(22);
        let g = Iu();
        return Ne(A(d.createSwitchStatement(m, g), s), l);
      }
      function Lu() {
        let s = O(), l = L();
        J(111);
        let m = r.hasPrecedingLineBreak() ? void 0 : st(Et);
        return m === void 0 && (vr++, m = A(re(""), O())), yi() || bt(m), Ne(A(d.createThrowStatement(m), s), l);
      }
      function Lp() {
        let s = O(), l = L();
        J(113);
        let m = Xn(!1), g = p() === 85 ? Ou() : void 0, k;
        return (!g || p() === 98) && (J(98, C.catch_or_finally_expected), k = Xn(!1)), Ne(A(d.createTryStatement(m, g, k), s), l);
      }
      function Ou() {
        let s = O();
        J(85);
        let l;
        Oe(21) ? (l = io(), J(22)) : l = void 0;
        let m = Xn(!1);
        return A(d.createCatchClause(l, m), s);
      }
      function Op() {
        let s = O(), l = L();
        return J(89), Ht(), Ne(A(d.createDebuggerStatement(), s), l);
      }
      function Mu() {
        let s = O(), l = L(), m, g = p() === 21, k = st(Et);
        return et(k) && Oe(59) ? m = d.createLabeledStatement(k, Xt()) : (yi() || bt(k), m = Fr(k), g && (l = !1)), Ne(A(m, s), l);
      }
      function eo() {
        return j(), Tt(p()) && !r.hasPrecedingLineBreak();
      }
      function Ju() {
        return j(), p() === 86 && !r.hasPrecedingLineBreak();
      }
      function Bu() {
        return j(), p() === 100 && !r.hasPrecedingLineBreak();
      }
      function to() {
        return j(), (Tt(p()) || p() === 9 || p() === 10 || p() === 11) && !r.hasPrecedingLineBreak();
      }
      function Mp() {
        for (; ; ) switch (p()) {
          case 115:
          case 121:
          case 87:
          case 100:
          case 86:
          case 94:
            return !0;
          case 160:
            return no();
          case 135:
            return Li();
          case 120:
          case 156:
            return dp();
          case 144:
          case 145:
            return $u();
          case 128:
          case 129:
          case 134:
          case 138:
          case 123:
          case 124:
          case 125:
          case 148:
            let s = p();
            if (j(), r.hasPrecedingLineBreak()) return !1;
            if (s === 138 && p() === 156) return !0;
            continue;
          case 162:
            return j(), p() === 19 || p() === 80 || p() === 95;
          case 102:
            return j(), p() === 11 || p() === 42 || p() === 19 || Tt(p());
          case 95:
            let l = j();
            if (l === 156 && (l = W(j)), l === 64 || l === 42 || l === 19 || l === 90 || l === 130 || l === 60) return !0;
            continue;
          case 126:
            j();
            continue;
          default:
            return !1;
        }
      }
      function Ga() {
        return W(Mp);
      }
      function Ku() {
        switch (p()) {
          case 60:
          case 27:
          case 19:
          case 115:
          case 121:
          case 160:
          case 100:
          case 86:
          case 94:
          case 101:
          case 92:
          case 117:
          case 99:
          case 88:
          case 83:
          case 107:
          case 118:
          case 109:
          case 111:
          case 113:
          case 89:
          case 85:
          case 98:
            return !0;
          case 102:
            return Ga() || W(Ac);
          case 87:
          case 95:
            return Ga();
          case 134:
          case 138:
          case 120:
          case 144:
          case 145:
          case 156:
          case 162:
            return !0;
          case 129:
          case 125:
          case 123:
          case 124:
          case 126:
          case 148:
            return Ga() || !W(eo);
          default:
            return An();
        }
      }
      function Uu() {
        return j(), je() || p() === 19 || p() === 23;
      }
      function Jp() {
        return W(Uu);
      }
      function ju() {
        return ro(!0);
      }
      function ro(s) {
        return j(), s && p() === 165 ? !1 : (je() || p() === 19) && !r.hasPrecedingLineBreak();
      }
      function no() {
        return W(ro);
      }
      function qu(s) {
        return j() === 160 ? ro(s) : !1;
      }
      function Li() {
        return W(qu);
      }
      function Xt() {
        switch (p()) {
          case 27:
            return wu();
          case 19:
            return Xn(!1);
          case 115:
            return ga(O(), L(), void 0);
          case 121:
            if (Jp()) return ga(O(), L(), void 0);
            break;
          case 135:
            if (Li()) return ga(O(), L(), void 0);
            break;
          case 160:
            if (no()) return ga(O(), L(), void 0);
            break;
          case 100:
            return Hu(O(), L(), void 0);
          case 86:
            return rl(O(), L(), void 0);
          case 101:
            return Ap();
          case 92:
            return Au();
          case 117:
            return Np();
          case 99:
            return Nu();
          case 88:
            return Du(251);
          case 83:
            return Du(252);
          case 107:
            return Pu();
          case 118:
            return Dp();
          case 109:
            return Ip();
          case 111:
            return Lu();
          case 113:
          case 85:
          case 98:
            return Lp();
          case 89:
            return Op();
          case 60:
            return Ru();
          case 134:
          case 120:
          case 156:
          case 144:
          case 145:
          case 138:
          case 87:
          case 94:
          case 95:
          case 102:
          case 123:
          case 124:
          case 125:
          case 128:
          case 129:
          case 126:
          case 148:
          case 162:
            if (Ga()) return Ru();
            break;
        }
        return Mu();
      }
      function ao(s) {
        return s.kind === 138;
      }
      function Ru() {
        let s = O(), l = L(), m = wr(!0);
        if ($t(m, ao)) {
          let g = Oi(s);
          if (g) return g;
          for (let k of m) k.flags |= 33554432;
          return kt(33554432, () => zu(s, l, m));
        } else return zu(s, l, m);
      }
      function Oi(s) {
        return kt(33554432, () => {
          let l = ki(yt, s);
          if (l) return ec(l);
        });
      }
      function zu(s, l, m) {
        switch (p()) {
          case 115:
          case 121:
          case 87:
          case 160:
          case 135:
            return ga(s, l, m);
          case 100:
            return Hu(s, l, m);
          case 86:
            return rl(s, l, m);
          case 120:
            return il(s, l, m);
          case 156:
            return Yp(s, l, m);
          case 94:
            return lo(s, l, m);
          case 162:
          case 144:
          case 145:
            return t1(s, l, m);
          case 102:
            return a1(s, l, m);
          case 95:
            switch (j(), p()) {
              case 90:
              case 64:
                return fl(s, l, m);
              case 130:
                return n1(s, l, m);
              default:
                return f1(s, l, m);
            }
          default:
            if (m) {
              let g = zt(282, !0, C.Declaration_expected);
              return sd(g, s), g.modifiers = m, g;
            }
            return;
        }
      }
      function Bp() {
        return j() === 11;
      }
      function Kp() {
        return j(), p() === 161 || p() === 64;
      }
      function $u() {
        return j(), !r.hasPrecedingLineBreak() && (xe() || p() === 11);
      }
      function Mi(s, l) {
        if (p() !== 19) {
          if (s & 4) {
            Ei();
            return;
          }
          if (cn()) {
            Ht();
            return;
          }
        }
        return Ii(s, l);
      }
      function Gu() {
        let s = O();
        if (p() === 28) return A(d.createOmittedExpression(), s);
        let l = pt(26), m = Wa(), g = Nn();
        return A(d.createBindingElement(l, void 0, m, g), s);
      }
      function Up() {
        let s = O(), l = pt(26), m = je(), g = $n(), k;
        m && p() !== 59 ? (k = g, g = void 0) : (J(59), k = Wa());
        let D = Nn();
        return A(d.createBindingElement(l, g, k, D), s);
      }
      function Wu() {
        let s = O();
        J(19);
        let l = st(() => dr(9, Up));
        return J(20), A(d.createObjectBindingPattern(l), s);
      }
      function jp() {
        let s = O();
        J(23);
        let l = st(() => dr(10, Gu));
        return J(24), A(d.createArrayBindingPattern(l), s);
      }
      function Ji() {
        return p() === 19 || p() === 23 || p() === 81 || je();
      }
      function Wa(s) {
        return p() === 23 ? jp() : p() === 19 ? Wu() : _s(s);
      }
      function Vu() {
        return io(!0);
      }
      function io(s) {
        let l = O(), m = L(), g = Wa(C.Private_identifiers_are_not_allowed_in_variable_declarations), k;
        s && g.kind === 80 && p() === 54 && !r.hasPrecedingLineBreak() && (k = Rt());
        let D = wn(), Q = au(p()) ? void 0 : Nn(), ce = jr(g, k, D, Q);
        return Ne(A(ce, l), m);
      }
      function so(s) {
        let l = O(), m = 0;
        switch (p()) {
          case 115:
            break;
          case 121:
            m |= 1;
            break;
          case 87:
            m |= 2;
            break;
          case 160:
            m |= 4;
            break;
          case 135:
            B.assert(Li()), m |= 6, j();
            break;
          default:
            B.fail();
        }
        j();
        let g;
        if (p() === 165 && W(qp)) g = dn();
        else {
          let k = Te();
          be(s), g = dr(8, s ? io : Vu), be(k);
        }
        return A(Ir(g, m), l);
      }
      function qp() {
        return Ba() && j() === 22;
      }
      function ga(s, l, m) {
        let g = so(!1);
        Ht();
        let k = br(m, g);
        return Ne(A(k, s), l);
      }
      function Hu(s, l, m) {
        let g = Ge(), k = Dr(m);
        J(100);
        let D = pt(42), Q = k & 2048 ? $a() : _s(), ce = D ? 1 : 0, te = k & 1024 ? 2 : 0, Y = pr();
        k & 32 && it(!0);
        let pe = Xr(ce | te), Ke = Or(59, !1), Me = Mi(ce | te, C.or_expected);
        it(g);
        let Ae = d.createFunctionDeclaration(m, D, Q, Y, pe, Ke, Me);
        return Ne(A(Ae, s), l);
      }
      function Xu() {
        if (p() === 137) return J(137);
        if (p() === 11 && W(j) === 21) return de(() => {
          let s = Hr();
          return s.text === "constructor" ? s : void 0;
        });
      }
      function Rp(s, l, m) {
        return de(() => {
          if (Xu()) {
            let g = pr(), k = Xr(0), D = Or(59, !1), Q = Mi(0, C.or_expected), ce = d.createConstructorDeclaration(m, k, Q);
            return ce.typeParameters = g, ce.type = D, Ne(A(ce, s), l);
          }
        });
      }
      function oo(s, l, m, g, k, D, Q, ce) {
        let te = g ? 1 : 0, Y = $t(m, Mo) ? 2 : 0, pe = pr(), Ke = Xr(te | Y), Me = Or(59, !1), Ae = Mi(te | Y, ce), nr = d.createMethodDeclaration(m, g, k, D, pe, Ke, Me, Ae);
        return nr.exclamationToken = Q, Ne(A(nr, s), l);
      }
      function Qu(s, l, m, g, k) {
        let D = !k && !r.hasPrecedingLineBreak() ? pt(54) : void 0, Q = wn(), ce = At(90112, Nn);
        Kd(g, Q, ce);
        let te = d.createPropertyDeclaration(m, g, k || D, Q, ce);
        return Ne(A(te, s), l);
      }
      function Bi(s, l, m) {
        let g = pt(42), k = $n(), D = pt(58);
        return g || p() === 21 || p() === 30 ? oo(s, l, m, g, k, D, void 0, C.or_expected) : Qu(s, l, m, k, D);
      }
      function Qn(s, l, m, g, k) {
        let D = $n(), Q = pr(), ce = Xr(0), te = Or(59, !1), Y = Mi(k), pe = g === 177 ? d.createGetAccessorDeclaration(m, D, ce, te, Y) : d.createSetAccessorDeclaration(m, D, ce, Y);
        return pe.typeParameters = Q, Ko(pe) && (pe.type = te), Ne(A(pe, s), l);
      }
      function zp() {
        let s;
        if (p() === 60) return !0;
        for (; Bn(p()); ) {
          if (s = p(), Kh(s)) return !0;
          j();
        }
        if (p() === 42 || (En() && (s = p(), j()), p() === 23)) return !0;
        if (s !== void 0) {
          if (!aa(s) || s === 153 || s === 139) return !0;
          switch (p()) {
            case 21:
            case 30:
            case 54:
            case 59:
            case 64:
            case 58:
              return !0;
            default:
              return cn();
          }
        }
        return !1;
      }
      function Zu(s, l, m) {
        Vr(126);
        let g = $p(), k = Ne(A(d.createClassStaticBlockDeclaration(g), s), l);
        return k.modifiers = m, k;
      }
      function $p() {
        let s = Ce(), l = Ge();
        Xe(!1), it(!0);
        let m = Xn(!1);
        return Xe(s), it(l), m;
      }
      function Gp() {
        if (Ge() && p() === 135) {
          let s = O(), l = vt(C.Expression_expected);
          j();
          let m = rr(s, l, !0);
          return Xs(s, m);
        }
        return Ra();
      }
      function co() {
        let s = O();
        if (!Oe(60)) return;
        let l = La(Gp);
        return A(d.createDecorator(l), s);
      }
      function Yu(s, l, m) {
        let g = O(), k = p();
        if (p() === 87 && l) {
          if (!de(Ts)) return;
        } else if (m && p() === 126 && W(ul) || s && p() === 126 || !Ho()) return;
        return A(ge(k), g);
      }
      function wr(s, l, m) {
        let g = O(), k, D, Q, ce = !1, te = !1, Y = !1;
        if (s && p() === 60) for (; D = co(); ) k = hr(k, D);
        for (; Q = Yu(ce, l, m); ) Q.kind === 126 && (ce = !0), k = hr(k, Q), te = !0;
        if (te && s && p() === 60) for (; D = co(); ) k = hr(k, D), Y = !0;
        if (Y) for (; Q = Yu(ce, l, m); ) Q.kind === 126 && (ce = !0), k = hr(k, Q);
        return k && wt(k, g);
      }
      function el() {
        let s;
        if (p() === 134) {
          let l = O();
          j();
          let m = A(ge(134), l);
          s = wt([m], l);
        }
        return s;
      }
      function Wp() {
        let s = O(), l = L();
        if (p() === 27) return j(), Ne(A(d.createSemicolonClassElement(), s), l);
        let m = wr(!0, !0, !0);
        if (p() === 126 && W(ul)) return Zu(s, l, m);
        if (da(139)) return Qn(s, l, m, 177, 0);
        if (da(153)) return Qn(s, l, m, 178, 0);
        if (p() === 137 || p() === 11) {
          let g = Rp(s, l, m);
          if (g) return g;
        }
        if (Vn()) return Ls(s, l, m);
        if (Tt(p()) || p() === 11 || p() === 9 || p() === 10 || p() === 42 || p() === 23) if ($t(m, ao)) {
          for (let g of m) g.flags |= 33554432;
          return kt(33554432, () => Bi(s, l, m));
        } else return Bi(s, l, m);
        if (m) {
          let g = zt(80, !0, C.Declaration_expected);
          return Qu(s, l, m, g, void 0);
        }
        return B.fail("Should not have attempted to parse class member declaration.");
      }
      function tl() {
        let s = O(), l = L(), m = wr(!0);
        if (p() === 86) return Ki(s, l, m, 231);
        let g = zt(282, !0, C.Expression_expected);
        return sd(g, s), g.modifiers = m, g;
      }
      function Vp() {
        return Ki(O(), L(), void 0, 231);
      }
      function rl(s, l, m) {
        return Ki(s, l, m, 263);
      }
      function Ki(s, l, m, g) {
        let k = Ge();
        J(86);
        let D = Hp(), Q = pr();
        $t(m, By) && it(!0);
        let ce = uo(), te;
        J(19) ? (te = al(), J(20)) : te = dn(), it(k);
        let Y = g === 263 ? d.createClassDeclaration(m, D, Q, ce, te) : d.createClassExpression(m, D, Q, ce, te);
        return Ne(A(Y, s), l);
      }
      function Hp() {
        return je() && !Xp() ? un(je()) : void 0;
      }
      function Xp() {
        return p() === 119 && W(Wd);
      }
      function uo() {
        if (nl()) return Cr(22, Qp);
      }
      function Qp() {
        let s = O(), l = p();
        B.assert(l === 96 || l === 119), j();
        let m = dr(7, Zp);
        return A(d.createHeritageClause(l, m), s);
      }
      function Zp() {
        let s = O(), l = Ra();
        if (l.kind === 233) return l;
        let m = Ui();
        return A(d.createExpressionWithTypeArguments(l, m), s);
      }
      function Ui() {
        return p() === 30 ? Gn(20, ot, 30, 32) : void 0;
      }
      function nl() {
        return p() === 96 || p() === 119;
      }
      function al() {
        return Cr(5, Wp);
      }
      function il(s, l, m) {
        J(120);
        let g = vt(), k = pr(), D = uo(), Q = Dc(), ce = d.createInterfaceDeclaration(m, g, k, D, Q);
        return Ne(A(ce, s), l);
      }
      function Yp(s, l, m) {
        J(156), r.hasPrecedingLineBreak() && we(C.Line_break_not_permitted_here);
        let g = vt(), k = pr();
        J(64);
        let D = p() === 141 && de(Mc) || ot();
        Ht();
        let Q = d.createTypeAliasDeclaration(m, g, k, D);
        return Ne(A(Q, s), l);
      }
      function e1() {
        let s = O(), l = L(), m = $n(), g = st(Nn);
        return Ne(A(d.createEnumMember(m, g), s), l);
      }
      function lo(s, l, m) {
        J(94);
        let g = vt(), k;
        J(19) ? (k = ve(() => dr(6, e1)), J(20)) : k = dn();
        let D = d.createEnumDeclaration(m, g, k);
        return Ne(A(D, s), l);
      }
      function sl() {
        let s = O(), l;
        return J(19) ? (l = Cr(1, Xt), J(20)) : l = dn(), A(d.createModuleBlock(l), s);
      }
      function po(s, l, m, g) {
        let k = g & 32, D = g & 8 ? Jt() : vt(), Q = Oe(25) ? po(O(), !1, void 0, 8 | k) : sl(), ce = d.createModuleDeclaration(m, D, Q, g);
        return Ne(A(ce, s), l);
      }
      function ol(s, l, m) {
        let g = 0, k;
        p() === 162 ? (k = vt(), g |= 2048) : (k = Hr(), k.text = zn(k.text));
        let D;
        p() === 19 ? D = sl() : Ht();
        let Q = d.createModuleDeclaration(m, k, D, g);
        return Ne(A(Q, s), l);
      }
      function t1(s, l, m) {
        let g = 0;
        if (p() === 162) return ol(s, l, m);
        if (Oe(145)) g |= 32;
        else if (J(144), p() === 11) return ol(s, l, m);
        return po(s, l, m, g);
      }
      function r1() {
        return p() === 149 && W(cl);
      }
      function cl() {
        return j() === 21;
      }
      function ul() {
        return j() === 19;
      }
      function fo() {
        return j() === 44;
      }
      function n1(s, l, m) {
        J(130), J(145);
        let g = vt();
        Ht();
        let k = d.createNamespaceExportDeclaration(g);
        return k.modifiers = m, Ne(A(k, s), l);
      }
      function a1(s, l, m) {
        J(102);
        let g = r.getTokenFullStart(), k;
        xe() && (k = vt());
        let D = !1;
        if ((k == null ? void 0 : k.escapedText) === "type" && (p() !== 161 || xe() && W(Kp)) && (xe() || s1()) && (D = !0, k = xe() ? vt() : void 0), k && !Zn()) return o1(s, l, m, k, D);
        let Q = ya(k, g, D), ce = Ha(), te = ll();
        Ht();
        let Y = d.createImportDeclaration(m, Q, ce, te);
        return Ne(A(Y, s), l);
      }
      function ya(s, l, m, g = !1) {
        let k;
        return (s || p() === 42 || p() === 19) && (k = c1(s, l, m, g), J(161)), k;
      }
      function ll() {
        let s = p();
        if ((s === 118 || s === 132) && !r.hasPrecedingLineBreak()) return mo(s);
      }
      function i1() {
        let s = O(), l = Tt(p()) ? Jt() : fa(11);
        J(59);
        let m = qt(!0);
        return A(d.createImportAttribute(l, m), s);
      }
      function mo(s, l) {
        let m = O();
        l || J(s);
        let g = r.getTokenStart();
        if (J(19)) {
          let k = r.hasPrecedingLineBreak(), D = dr(24, i1, !0);
          if (!J(20)) {
            let Q = Ya(at);
            Q && Q.code === C._0_expected.code && Io(Q, ci(Lt, He, g, 1, C.The_parser_expected_to_find_a_1_to_match_the_0_token_here, "{", "}"));
          }
          return A(d.createImportAttributes(D, k, s), m);
        } else {
          let k = wt([], O(), void 0, !1);
          return A(d.createImportAttributes(k, !1, s), m);
        }
      }
      function s1() {
        return p() === 42 || p() === 19;
      }
      function Zn() {
        return p() === 28 || p() === 161;
      }
      function o1(s, l, m, g, k) {
        J(64);
        let D = u1();
        Ht();
        let Q = d.createImportEqualsDeclaration(m, k, g, D);
        return Ne(A(Q, s), l);
      }
      function c1(s, l, m, g) {
        let k;
        return (!s || Oe(28)) && (g && r.setSkipJsDocLeadingAsterisks(!0), k = p() === 42 ? l1() : dl(275), g && r.setSkipJsDocLeadingAsterisks(!1)), A(d.createImportClause(m, s, k), l);
      }
      function u1() {
        return r1() ? Va() : Wn(!1);
      }
      function Va() {
        let s = O();
        J(149), J(21);
        let l = Ha();
        return J(22), A(d.createExternalModuleReference(l), s);
      }
      function Ha() {
        if (p() === 11) {
          let s = Hr();
          return s.text = zn(s.text), s;
        } else return Et();
      }
      function l1() {
        let s = O();
        J(42), J(130);
        let l = vt();
        return A(d.createNamespaceImport(l), s);
      }
      function ho() {
        return Tt(p()) || p() === 11;
      }
      function _a(s) {
        return p() === 11 ? Hr() : s();
      }
      function dl(s) {
        let l = O(), m = s === 275 ? d.createNamedImports(Gn(23, Ta, 19, 20)) : d.createNamedExports(Gn(23, d1, 19, 20));
        return A(m, l);
      }
      function d1() {
        let s = L();
        return Ne(pl(281), s);
      }
      function Ta() {
        return pl(276);
      }
      function pl(s) {
        let l = O(), m = aa(p()) && !xe(), g = r.getTokenStart(), k = r.getTokenEnd(), D = !1, Q, ce = !0, te = _a(Jt);
        if (te.kind === 80 && te.escapedText === "type") if (p() === 130) {
          let Ke = Jt();
          if (p() === 130) {
            let Me = Jt();
            ho() ? (D = !0, Q = Ke, te = _a(pe), ce = !1) : (Q = te, te = Me, ce = !1);
          } else ho() ? (Q = te, ce = !1, te = _a(pe)) : (D = !0, te = Ke);
        } else ho() && (D = !0, te = _a(pe));
        ce && p() === 130 && (Q = te, J(130), te = _a(pe)), s === 276 && (te.kind !== 80 ? (nt(yn(He, te.pos), te.end, C.Identifier_expected), te = ia(zt(80, !1), te.pos, te.pos)) : m && nt(g, k, C.Identifier_expected));
        let Y = s === 276 ? d.createImportSpecifier(D, Q, te) : d.createExportSpecifier(D, Q, te);
        return A(Y, l);
        function pe() {
          return m = aa(p()) && !xe(), g = r.getTokenStart(), k = r.getTokenEnd(), Jt();
        }
      }
      function p1(s) {
        return A(d.createNamespaceExport(_a(Jt)), s);
      }
      function f1(s, l, m) {
        let g = Ge();
        it(!0);
        let k, D, Q, ce = Oe(156), te = O();
        Oe(42) ? (Oe(130) && (k = p1(te)), J(161), D = Ha()) : (k = dl(279), (p() === 161 || p() === 11 && !r.hasPrecedingLineBreak()) && (J(161), D = Ha()));
        let Y = p();
        D && (Y === 118 || Y === 132) && !r.hasPrecedingLineBreak() && (Q = mo(Y)), Ht(), it(g);
        let pe = d.createExportDeclaration(m, ce, k, D, Q);
        return Ne(A(pe, s), l);
      }
      function fl(s, l, m) {
        let g = Ge();
        it(!0);
        let k;
        Oe(64) ? k = !0 : J(90);
        let D = qt(!0);
        Ht(), it(g);
        let Q = d.createExportAssignment(m, k, D);
        return Ne(A(Q, s), l);
      }
      let go;
      ((s) => {
        s[s.SourceElements = 0] = "SourceElements", s[s.BlockStatements = 1] = "BlockStatements", s[s.SwitchClauses = 2] = "SwitchClauses", s[s.SwitchClauseStatements = 3] = "SwitchClauseStatements", s[s.TypeMembers = 4] = "TypeMembers", s[s.ClassMembers = 5] = "ClassMembers", s[s.EnumMembers = 6] = "EnumMembers", s[s.HeritageClauseElement = 7] = "HeritageClauseElement", s[s.VariableDeclarations = 8] = "VariableDeclarations", s[s.ObjectBindingElements = 9] = "ObjectBindingElements", s[s.ArrayBindingElements = 10] = "ArrayBindingElements", s[s.ArgumentExpressions = 11] = "ArgumentExpressions", s[s.ObjectLiteralMembers = 12] = "ObjectLiteralMembers", s[s.JsxAttributes = 13] = "JsxAttributes", s[s.JsxChildren = 14] = "JsxChildren", s[s.ArrayLiteralMembers = 15] = "ArrayLiteralMembers", s[s.Parameters = 16] = "Parameters", s[s.JSDocParameters = 17] = "JSDocParameters", s[s.RestProperties = 18] = "RestProperties", s[s.TypeParameters = 19] = "TypeParameters", s[s.TypeArguments = 20] = "TypeArguments", s[s.TupleElementTypes = 21] = "TupleElementTypes", s[s.HeritageClauses = 22] = "HeritageClauses", s[s.ImportOrExportSpecifiers = 23] = "ImportOrExportSpecifiers", s[s.ImportAttributes = 24] = "ImportAttributes", s[s.JSDocComment = 25] = "JSDocComment", s[s.Count = 26] = "Count";
      })(go || (go = {}));
      let yo;
      ((s) => {
        s[s.False = 0] = "False", s[s.True = 1] = "True", s[s.Unknown = 2] = "Unknown";
      })(yo || (yo = {}));
      let ml;
      ((s) => {
        function l(Y, pe, Ke) {
          Rr("file.js", Y, 99, void 0, 1, 0), r.setText(Y, pe, Ke), lt = r.scan();
          let Me = m(), Ae = oe("file.js", 99, 1, !1, [], ge(1), 0, _o), nr = Ea(at, Ae);
          return Ut && (Ae.jsDocDiagnostics = Ea(Ut, Ae)), zr(), Me ? { jsDocTypeExpression: Me, diagnostics: nr } : void 0;
        }
        s.parseJSDocTypeExpressionForTests = l;
        function m(Y) {
          let pe = O(), Ke = (Y ? Oe : J)(19), Me = kt(16777216, Ds);
          (!Y || Ke) && Go(20);
          let Ae = d.createJSDocTypeExpression(Me);
          return M(Ae), A(Ae, pe);
        }
        s.parseJSDocTypeExpression = m;
        function g() {
          let Y = O(), pe = Oe(19), Ke = O(), Me = Wn(!1);
          for (; p() === 81; ) Vt(), Ye(), Me = A(d.createJSDocMemberName(Me, vt()), Ke);
          pe && Go(20);
          let Ae = d.createJSDocNameReference(Me);
          return M(Ae), A(Ae, Y);
        }
        s.parseJSDocNameReference = g;
        function k(Y, pe, Ke) {
          Rr("", Y, 99, void 0, 1, 0);
          let Me = kt(16777216, () => te(pe, Ke)), Ae = Ea(at, { languageVariant: 0, text: Y });
          return zr(), Me ? { jsDoc: Me, diagnostics: Ae } : void 0;
        }
        s.parseIsolatedJSDocComment = k;
        function D(Y, pe, Ke) {
          let Me = lt, Ae = at.length, nr = tr, fr = kt(16777216, () => te(pe, Ke));
          return od(fr, Y), rt & 524288 && (Ut || (Ut = []), gr(Ut, at, Ae)), lt = Me, at.length = Ae, tr = nr, fr;
        }
        s.parseJSDocComment = D;
        let Q;
        ((Y) => {
          Y[Y.BeginningOfLine = 0] = "BeginningOfLine", Y[Y.SawAsterisk = 1] = "SawAsterisk", Y[Y.SavingComments = 2] = "SavingComments", Y[Y.SavingBackticks = 3] = "SavingBackticks";
        })(Q || (Q = {}));
        let ce;
        ((Y) => {
          Y[Y.Property = 1] = "Property", Y[Y.Parameter = 2] = "Parameter", Y[Y.CallbackParameter = 4] = "CallbackParameter";
        })(ce || (ce = {}));
        function te(Y = 0, pe) {
          let Ke = He, Me = pe === void 0 ? Ke.length : Y + pe;
          if (pe = Me - Y, B.assert(Y >= 0), B.assert(Y <= Me), B.assert(Me <= Ke.length), !r4(Ke, Y)) return;
          let Ae, nr, fr, Qt, pn, Mr = [], Yn = [], m1 = yt;
          yt |= 1 << 25;
          let De = r.scanRange(Y + 3, pe - 5, tt);
          return yt = m1, De;
          function tt() {
            let P = 1, V, X = Y - (Ke.lastIndexOf(`
`, Y) + 1) + 4;
            function ie(Ue) {
              V || (V = X), Mr.push(Ue), X += Ue.length;
            }
            for (Ye(); Qa(5); ) ;
            Qa(4) && (P = 0, X = 0);
            e: for (; ; ) {
              switch (p()) {
                case 60:
                  ji(Mr), pn || (pn = O()), fe(U(X)), P = 0, V = void 0;
                  break;
                case 4:
                  Mr.push(r.getTokenText()), P = 0, X = 0;
                  break;
                case 42:
                  let Ue = r.getTokenText();
                  P === 1 ? (P = 2, ie(Ue)) : (B.assert(P === 0), P = 1, X += Ue.length);
                  break;
                case 5:
                  B.assert(P !== 2, "whitespace shouldn't come from the scanner while saving top-level comment text");
                  let dt = r.getTokenText();
                  V !== void 0 && X + dt.length > V && Mr.push(dt.slice(V - X)), X += dt.length;
                  break;
                case 1:
                  break e;
                case 82:
                  P = 2, ie(r.getTokenValue());
                  break;
                case 19:
                  P = 2;
                  let mr = r.getTokenFullStart(), ar = r.getTokenEnd() - 1, Yt = a(ar);
                  if (Yt) {
                    Qt || fn(Mr), Yn.push(A(d.createJSDocText(Mr.join("")), Qt ?? Y, mr)), Yn.push(Yt), Mr = [], Qt = r.getTokenEnd();
                    break;
                  }
                default:
                  P = 2, ie(r.getTokenText());
                  break;
              }
              P === 2 ? ze(!1) : Ye();
            }
            let ne = Mr.join("").trimEnd();
            Yn.length && ne.length && Yn.push(A(d.createJSDocText(ne), Qt ?? Y, pn)), Yn.length && Ae && B.assertIsDefined(pn, "having parsed tags implies that the end of the comment span should be set");
            let Pe = Ae && wt(Ae, nr, fr);
            return A(d.createJSDocComment(Yn.length ? wt(Yn, Y, pn) : ne.length ? ne : void 0, Pe), Y, Me);
          }
          function fn(P) {
            for (; P.length && (P[0] === `
` || P[0] === "\r"); ) P.shift();
          }
          function ji(P) {
            for (; P.length; ) {
              let V = P[P.length - 1].trimEnd();
              if (V === "") P.pop();
              else if (V.length < P[P.length - 1].length) {
                P[P.length - 1] = V;
                break;
              } else break;
            }
          }
          function hl() {
            for (; ; ) {
              if (Ye(), p() === 1) return !0;
              if (!(p() === 5 || p() === 4)) return !1;
            }
          }
          function Nt() {
            if (!((p() === 5 || p() === 4) && W(hl))) for (; p() === 5 || p() === 4; ) Ye();
          }
          function Pn() {
            if ((p() === 5 || p() === 4) && W(hl)) return "";
            let P = r.hasPrecedingLineBreak(), V = !1, X = "";
            for (; P && p() === 42 || p() === 5 || p() === 4; ) X += r.getTokenText(), p() === 4 ? (P = !0, V = !0, X = "") : p() === 42 && (P = !1), Ye();
            return V ? X : "";
          }
          function U(P) {
            B.assert(p() === 60);
            let V = r.getTokenStart();
            Ye();
            let X = xa(void 0), ie = Pn(), ne;
            switch (X.escapedText) {
              case "author":
                ne = Y3(V, X, P, ie);
                break;
              case "implements":
                ne = t8(V, X, P, ie);
                break;
              case "augments":
              case "extends":
                ne = r8(V, X, P, ie);
                break;
              case "class":
              case "constructor":
                ne = Xa(V, d.createJSDocClassTag, X, P, ie);
                break;
              case "public":
                ne = Xa(V, d.createJSDocPublicTag, X, P, ie);
                break;
              case "private":
                ne = Xa(V, d.createJSDocPrivateTag, X, P, ie);
                break;
              case "protected":
                ne = Xa(V, d.createJSDocProtectedTag, X, P, ie);
                break;
              case "readonly":
                ne = Xa(V, d.createJSDocReadonlyTag, X, P, ie);
                break;
              case "override":
                ne = Xa(V, d.createJSDocOverrideTag, X, P, ie);
                break;
              case "deprecated":
                $r = !0, ne = Xa(V, d.createJSDocDeprecatedTag, X, P, ie);
                break;
              case "this":
                ne = Km(V, X, P, ie);
                break;
              case "enum":
                ne = s8(V, X, P, ie);
                break;
              case "arg":
              case "argument":
              case "param":
                return Qr(V, X, 2, P);
              case "return":
              case "returns":
                ne = X3(V, X, P, ie);
                break;
              case "template":
                ne = jm(V, X, P, ie);
                break;
              case "type":
                ne = Jm(V, X, P, ie);
                break;
              case "typedef":
                ne = o8(V, X, P, ie);
                break;
              case "callback":
                ne = u8(V, X, P, ie);
                break;
              case "overload":
                ne = l8(V, X, P, ie);
                break;
              case "satisfies":
                ne = n8(V, X, P, ie);
                break;
              case "see":
                ne = Q3(V, X, P, ie);
                break;
              case "exception":
              case "throws":
                ne = Z3(V, X, P, ie);
                break;
              case "import":
                ne = a8(V, X, P, ie);
                break;
              default:
                ne = R(V, X, P, ie);
                break;
            }
            return ne;
          }
          function t(P, V, X, ie) {
            return ie || (X += V - P), n(X, ie.slice(X));
          }
          function n(P, V) {
            let X = O(), ie = [], ne = [], Pe, Ue = 0, dt;
            function mr(Zr) {
              dt || (dt = P), ie.push(Zr), P += Zr.length;
            }
            V !== void 0 && (V !== "" && mr(V), Ue = 1);
            let ar = p();
            e: for (; ; ) {
              switch (ar) {
                case 4:
                  Ue = 0, ie.push(r.getTokenText()), P = 0;
                  break;
                case 60:
                  r.resetTokenState(r.getTokenEnd() - 1);
                  break e;
                case 1:
                  break e;
                case 5:
                  B.assert(Ue !== 2 && Ue !== 3, "whitespace shouldn't come from the scanner while saving comment text");
                  let Zr = r.getTokenText();
                  dt !== void 0 && P + Zr.length > dt && (ie.push(Zr.slice(dt - P)), Ue = 2), P += Zr.length;
                  break;
                case 19:
                  Ue = 2;
                  let gl = r.getTokenFullStart(), Ri = r.getTokenEnd() - 1, yl = a(Ri);
                  yl ? (ne.push(A(d.createJSDocText(ie.join("")), Pe ?? X, gl)), ne.push(yl), ie = [], Pe = r.getTokenEnd()) : mr(r.getTokenText());
                  break;
                case 62:
                  Ue === 3 ? Ue = 2 : Ue = 3, mr(r.getTokenText());
                  break;
                case 82:
                  Ue !== 3 && (Ue = 2), mr(r.getTokenValue());
                  break;
                case 42:
                  if (Ue === 0) {
                    Ue = 1, P += 1;
                    break;
                  }
                default:
                  Ue !== 3 && (Ue = 2), mr(r.getTokenText());
                  break;
              }
              Ue === 2 || Ue === 3 ? ar = ze(Ue === 3) : ar = Ye();
            }
            fn(ie);
            let Yt = ie.join("").trimEnd();
            if (ne.length) return Yt.length && ne.push(A(d.createJSDocText(Yt), Pe ?? X)), wt(ne, X, r.getTokenEnd());
            if (Yt.length) return Yt;
          }
          function a(P) {
            let V = de(f);
            if (!V) return;
            Ye(), Nt();
            let X = c(), ie = [];
            for (; p() !== 20 && p() !== 4 && p() !== 1; ) ie.push(r.getTokenText()), Ye();
            let ne = V === "link" ? d.createJSDocLink : V === "linkcode" ? d.createJSDocLinkCode : d.createJSDocLinkPlain;
            return A(ne(X, ie.join("")), P, r.getTokenEnd());
          }
          function c() {
            if (Tt(p())) {
              let P = O(), V = Jt();
              for (; Oe(25); ) V = A(d.createQualifiedName(V, p() === 81 ? zt(80, !1) : Jt()), P);
              for (; p() === 81; ) Vt(), Ye(), V = A(d.createJSDocMemberName(V, vt()), P);
              return V;
            }
          }
          function f() {
            if (Pn(), p() === 19 && Ye() === 60 && Tt(Ye())) {
              let P = r.getTokenValue();
              if (x(P)) return P;
            }
          }
          function x(P) {
            return P === "link" || P === "linkcode" || P === "linkplain";
          }
          function R(P, V, X, ie) {
            return A(d.createJSDocUnknownTag(V, t(P, O(), X, ie)), P);
          }
          function fe(P) {
            P && (Ae ? Ae.push(P) : (Ae = [P], nr = P.pos), fr = P.end);
          }
          function Je() {
            return Pn(), p() === 19 ? m() : void 0;
          }
          function Zt() {
            let P = Qa(23);
            P && Nt();
            let V = Qa(62), X = g8();
            return V && jd(62), P && (Nt(), pt(64) && Et(), J(24)), { name: X, isBracketed: P };
          }
          function Ar(P) {
            switch (P.kind) {
              case 151:
                return !0;
              case 188:
                return Ar(P.elementType);
              default:
                return i2(P) && et(P.typeName) && P.typeName.escapedText === "Object" && !P.typeArguments;
            }
          }
          function Qr(P, V, X, ie) {
            let ne = Je(), Pe = !ne;
            Pn();
            let { name: Ue, isBracketed: dt } = Zt(), mr = Pn();
            Pe && !W(f) && (ne = Je());
            let ar = t(P, O(), ie, mr), Yt = qi(ne, Ue, X, ie);
            Yt && (ne = Yt, Pe = !0);
            let Zr = X === 1 ? d.createJSDocPropertyTag(V, Ue, dt, ne, Pe, ar) : d.createJSDocParameterTag(V, Ue, dt, ne, Pe, ar);
            return A(Zr, P);
          }
          function qi(P, V, X, ie) {
            if (P && Ar(P.type)) {
              let ne = O(), Pe, Ue;
              for (; Pe = de(() => g1(X, ie, V)); ) Pe.kind === 341 || Pe.kind === 348 ? Ue = hr(Ue, Pe) : Pe.kind === 345 && cr(Pe.tagName, C.A_JSDoc_template_tag_may_not_follow_a_typedef_callback_or_overload_tag);
              if (Ue) {
                let dt = A(d.createJSDocTypeLiteral(Ue, P.type.kind === 188), ne);
                return A(d.createJSDocTypeExpression(dt), ne);
              }
            }
          }
          function X3(P, V, X, ie) {
            $t(Ae, j_) && nt(V.pos, r.getTokenStart(), C._0_tag_already_specified, Yi(V.escapedText));
            let ne = Je();
            return A(d.createJSDocReturnTag(V, ne, t(P, O(), X, ie)), P);
          }
          function Jm(P, V, X, ie) {
            $t(Ae, yd) && nt(V.pos, r.getTokenStart(), C._0_tag_already_specified, Yi(V.escapedText));
            let ne = m(!0), Pe = X !== void 0 && ie !== void 0 ? t(P, O(), X, ie) : void 0;
            return A(d.createJSDocTypeTag(V, ne, Pe), P);
          }
          function Q3(P, V, X, ie) {
            let ne = p() === 23 || W(() => Ye() === 60 && Tt(Ye()) && x(r.getTokenValue())) ? void 0 : g(), Pe = X !== void 0 && ie !== void 0 ? t(P, O(), X, ie) : void 0;
            return A(d.createJSDocSeeTag(V, ne, Pe), P);
          }
          function Z3(P, V, X, ie) {
            let ne = Je(), Pe = t(P, O(), X, ie);
            return A(d.createJSDocThrowsTag(V, ne, Pe), P);
          }
          function Y3(P, V, X, ie) {
            let ne = O(), Pe = e8(), Ue = r.getTokenFullStart(), dt = t(P, Ue, X, ie);
            dt || (Ue = r.getTokenFullStart());
            let mr = typeof dt != "string" ? wt(kl([A(Pe, ne, Ue)], dt), ne) : Pe.text + dt;
            return A(d.createJSDocAuthorTag(V, mr), P);
          }
          function e8() {
            let P = [], V = !1, X = r.getToken();
            for (; X !== 1 && X !== 4; ) {
              if (X === 30) V = !0;
              else {
                if (X === 60 && !V) break;
                if (X === 32 && V) {
                  P.push(r.getTokenText()), r.resetTokenState(r.getTokenEnd());
                  break;
                }
              }
              P.push(r.getTokenText()), X = Ye();
            }
            return d.createJSDocText(P.join(""));
          }
          function t8(P, V, X, ie) {
            let ne = Bm();
            return A(d.createJSDocImplementsTag(V, ne, t(P, O(), X, ie)), P);
          }
          function r8(P, V, X, ie) {
            let ne = Bm();
            return A(d.createJSDocAugmentsTag(V, ne, t(P, O(), X, ie)), P);
          }
          function n8(P, V, X, ie) {
            let ne = m(!1), Pe = X !== void 0 && ie !== void 0 ? t(P, O(), X, ie) : void 0;
            return A(d.createJSDocSatisfiesTag(V, ne, Pe), P);
          }
          function a8(P, V, X, ie) {
            let ne = r.getTokenFullStart(), Pe;
            xe() && (Pe = vt());
            let Ue = ya(Pe, ne, !0, !0), dt = Ha(), mr = ll(), ar = X !== void 0 && ie !== void 0 ? t(P, O(), X, ie) : void 0;
            return A(d.createJSDocImportTag(V, Ue, dt, mr, ar), P);
          }
          function Bm() {
            let P = Oe(19), V = O(), X = i8();
            r.setSkipJsDocLeadingAsterisks(!0);
            let ie = Ui();
            r.setSkipJsDocLeadingAsterisks(!1);
            let ne = d.createExpressionWithTypeArguments(X, ie), Pe = A(ne, V);
            return P && (Nt(), J(20)), Pe;
          }
          function i8() {
            let P = O(), V = xa();
            for (; Oe(25); ) {
              let X = xa();
              V = A(ae(V, X), P);
            }
            return V;
          }
          function Xa(P, V, X, ie, ne) {
            return A(V(X, t(P, O(), ie, ne)), P);
          }
          function Km(P, V, X, ie) {
            let ne = m(!0);
            return Nt(), A(d.createJSDocThisTag(V, ne, t(P, O(), X, ie)), P);
          }
          function s8(P, V, X, ie) {
            let ne = m(!0);
            return Nt(), A(d.createJSDocEnumTag(V, ne, t(P, O(), X, ie)), P);
          }
          function o8(P, V, X, ie) {
            let ne = Je();
            Pn();
            let Pe = h1();
            Nt();
            let Ue = n(X), dt;
            if (!ne || Ar(ne.type)) {
              let ar, Yt, Zr, gl = !1;
              for (; (ar = de(() => p8(X))) && ar.kind !== 345; ) if (gl = !0, ar.kind === 344) if (Yt) {
                let Ri = we(C.A_JSDoc_typedef_comment_may_not_contain_multiple_type_tags);
                Ri && Io(Ri, ci(Lt, He, 0, 0, C.The_tag_was_first_specified_here));
                break;
              } else Yt = ar;
              else Zr = hr(Zr, ar);
              if (gl) {
                let Ri = ne && ne.type.kind === 188, yl = d.createJSDocTypeLiteral(Zr, Ri);
                ne = Yt && Yt.typeExpression && !Ar(Yt.typeExpression.type) ? Yt.typeExpression : A(yl, P), dt = ne.end;
              }
            }
            dt = dt || Ue !== void 0 ? O() : (Pe ?? ne ?? V).end, Ue || (Ue = t(P, dt, X, ie));
            let mr = d.createJSDocTypedefTag(V, ne, Pe, Ue);
            return A(mr, P, dt);
          }
          function h1(P) {
            let V = r.getTokenStart();
            if (!Tt(p())) return;
            let X = xa();
            if (Oe(25)) {
              let ie = h1(!0), ne = d.createModuleDeclaration(void 0, X, ie, P ? 8 : void 0);
              return A(ne, V);
            }
            return P && (X.flags |= 4096), X;
          }
          function c8(P) {
            let V = O(), X, ie;
            for (; X = de(() => g1(4, P)); ) {
              if (X.kind === 345) {
                cr(X.tagName, C.A_JSDoc_template_tag_may_not_follow_a_typedef_callback_or_overload_tag);
                break;
              }
              ie = hr(ie, X);
            }
            return wt(ie || [], V);
          }
          function Um(P, V) {
            let X = c8(V), ie = de(() => {
              if (Qa(60)) {
                let ne = U(V);
                if (ne && ne.kind === 342) return ne;
              }
            });
            return A(d.createJSDocSignature(void 0, X, ie), P);
          }
          function u8(P, V, X, ie) {
            let ne = h1();
            Nt();
            let Pe = n(X), Ue = Um(P, X);
            Pe || (Pe = t(P, O(), X, ie));
            let dt = Pe !== void 0 ? O() : Ue.end;
            return A(d.createJSDocCallbackTag(V, Ue, ne, Pe), P, dt);
          }
          function l8(P, V, X, ie) {
            Nt();
            let ne = n(X), Pe = Um(P, X);
            ne || (ne = t(P, O(), X, ie));
            let Ue = ne !== void 0 ? O() : Pe.end;
            return A(d.createJSDocOverloadTag(V, Pe, ne), P, Ue);
          }
          function d8(P, V) {
            for (; !et(P) || !et(V); ) if (!et(P) && !et(V) && P.right.escapedText === V.right.escapedText) P = P.left, V = V.left;
            else return !1;
            return P.escapedText === V.escapedText;
          }
          function p8(P) {
            return g1(1, P);
          }
          function g1(P, V, X) {
            let ie = !0, ne = !1;
            for (; ; ) switch (Ye()) {
              case 60:
                if (ie) {
                  let Pe = f8(P, V);
                  return Pe && (Pe.kind === 341 || Pe.kind === 348) && X && (et(Pe.name) || !d8(X, Pe.name.left)) ? !1 : Pe;
                }
                ne = !1;
                break;
              case 4:
                ie = !0, ne = !1;
                break;
              case 42:
                ne && (ie = !1), ne = !0;
                break;
              case 80:
                ie = !1;
                break;
              case 1:
                return !1;
            }
          }
          function f8(P, V) {
            B.assert(p() === 60);
            let X = r.getTokenFullStart();
            Ye();
            let ie = xa(), ne = Pn(), Pe;
            switch (ie.escapedText) {
              case "type":
                return P === 1 && Jm(X, ie);
              case "prop":
              case "property":
                Pe = 1;
                break;
              case "arg":
              case "argument":
              case "param":
                Pe = 6;
                break;
              case "template":
                return jm(X, ie, V, ne);
              case "this":
                return Km(X, ie, V, ne);
              default:
                return !1;
            }
            return P & Pe ? Qr(X, ie, P, V) : !1;
          }
          function m8() {
            let P = O(), V = Qa(23);
            V && Nt();
            let X = wr(!1, !0), ie = xa(C.Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces), ne;
            if (V && (Nt(), J(64), ne = kt(16777216, Ds), J(24)), !Sa(ie)) return A(d.createTypeParameterDeclaration(X, ie, void 0, ne), P);
          }
          function h8() {
            let P = O(), V = [];
            do {
              Nt();
              let X = m8();
              X !== void 0 && V.push(X), Pn();
            } while (Qa(28));
            return wt(V, P);
          }
          function jm(P, V, X, ie) {
            let ne = p() === 19 ? m() : void 0, Pe = h8();
            return A(d.createJSDocTemplateTag(V, ne, Pe, t(P, O(), X, ie)), P);
          }
          function Qa(P) {
            return p() === P ? (Ye(), !0) : !1;
          }
          function g8() {
            let P = xa();
            for (Oe(23) && J(24); Oe(25); ) {
              let V = xa();
              Oe(23) && J(24), P = Vd(P, V);
            }
            return P;
          }
          function xa(P) {
            if (!Tt(p())) return zt(80, !P, P || C.Identifier_expected);
            vr++;
            let V = r.getTokenStart(), X = r.getTokenEnd(), ie = p(), ne = zn(r.getTokenValue()), Pe = A(re(ne, ie), V, X);
            return Ye(), Pe;
          }
        }
      })(ml = e.JSDocParser || (e.JSDocParser = {}));
    })(Pa || (Pa = {}));
    var tm = /* @__PURE__ */ new WeakSet();
    function m4(e) {
      tm.has(e) && B.fail("Source file has already been incrementally parsed"), tm.add(e);
    }
    var rm = /* @__PURE__ */ new WeakSet();
    function h4(e) {
      return rm.has(e);
    }
    function bd(e) {
      rm.add(e);
    }
    var Ro;
    ((e) => {
      function r(v, F, re, ke) {
        if (ke = ke || B.shouldAssert(2), d(v, F, re, ke), lh(re)) return v;
        if (v.statements.length === 0) return Pa.parseSourceFile(v.fileName, F, v.languageVersion, void 0, !0, v.scriptKind, v.setExternalModuleIndicator, v.jsDocParsingMode);
        m4(v), Pa.fixupParentReferences(v);
        let ge = v.text, he = S(v), I = o(v, re);
        d(v, F, I, ke), B.assert(I.span.start <= re.span.start), B.assert(_n(I.span) === _n(re.span)), B.assert(_n(Zi(I)) === _n(Zi(re)));
        let ae = Zi(I).length - I.span.length;
        N(v, I.span.start, _n(I.span), _n(Zi(I)), ae, ge, F, ke);
        let Le = Pa.parseSourceFile(v.fileName, F, v.languageVersion, he, !0, v.scriptKind, v.setExternalModuleIndicator, v.jsDocParsingMode);
        return Le.commentDirectives = i(v.commentDirectives, Le.commentDirectives, I.span.start, _n(I.span), ae, ge, F, ke), Le.impliedNodeFormat = v.impliedNodeFormat, G_(v, Le), Le;
      }
      e.updateSourceFile = r;
      function i(v, F, re, ke, ge, he, I, ae) {
        if (!v) return F;
        let Le, z = !1;
        for (let H of v) {
          let { range: ft, type: rn } = H;
          if (ft.end < re) Le = hr(Le, H);
          else if (ft.pos > ke) {
            ue();
            let kr = { range: { pos: ft.pos + ge, end: ft.end + ge }, type: rn };
            Le = hr(Le, kr), ae && B.assert(he.substring(ft.pos, ft.end) === I.substring(kr.range.pos, kr.range.end));
          }
        }
        return ue(), Le;
        function ue() {
          z || (z = !0, Le ? F && Le.push(...F) : Le = F);
        }
      }
      function u(v, F, re, ke, ge, he, I) {
        re ? Le(v) : ae(v);
        return;
        function ae(z) {
          let ue = "";
          if (I && h(z) && (ue = ge.substring(z.pos, z.end)), w2(z, F), ia(z, z.pos + ke, z.end + ke), I && h(z) && B.assert(ue === he.substring(z.pos, z.end)), Gt(z, ae, Le), va(z)) for (let H of z.jsDoc) ae(H);
          w(z, I);
        }
        function Le(z) {
          ia(z, z.pos + ke, z.end + ke);
          for (let ue of z) ae(ue);
        }
      }
      function h(v) {
        switch (v.kind) {
          case 11:
          case 9:
          case 80:
            return !0;
        }
        return !1;
      }
      function T(v, F, re, ke, ge) {
        B.assert(v.end >= F, "Adjusting an element that was entirely before the change range"), B.assert(v.pos <= re, "Adjusting an element that was entirely after the change range"), B.assert(v.pos <= v.end);
        let he = Math.min(v.pos, ke), I = v.end >= re ? v.end + ge : Math.min(v.end, ke);
        if (B.assert(he <= I), v.parent) {
          let ae = v.parent;
          B.assertGreaterThanOrEqual(he, ae.pos), B.assertLessThanOrEqual(I, ae.end);
        }
        ia(v, he, I);
      }
      function w(v, F) {
        if (F) {
          let re = v.pos, ke = (ge) => {
            B.assert(ge.pos >= re), re = ge.end;
          };
          if (va(v)) for (let ge of v.jsDoc) ke(ge);
          Gt(v, ke), B.assert(re <= v.end);
        }
      }
      function N(v, F, re, ke, ge, he, I, ae) {
        Le(v);
        return;
        function Le(ue) {
          if (B.assert(ue.pos <= ue.end), ue.pos > re) {
            u(ue, v, !1, ge, he, I, ae);
            return;
          }
          let H = ue.end;
          if (H >= F) {
            if (bd(ue), w2(ue, v), T(ue, F, re, ke, ge), Gt(ue, Le, z), va(ue)) for (let ft of ue.jsDoc) Le(ft);
            w(ue, ae);
            return;
          }
          B.assert(H < F);
        }
        function z(ue) {
          if (B.assert(ue.pos <= ue.end), ue.pos > re) {
            u(ue, v, !0, ge, he, I, ae);
            return;
          }
          let H = ue.end;
          if (H >= F) {
            bd(ue), T(ue, F, re, ke, ge);
            for (let ft of ue) Le(ft);
            return;
          }
          B.assert(H < F);
        }
      }
      function o(v, F) {
        let re = F.span.start;
        for (let he = 0; re > 0 && he <= 1; he++) {
          let I = $(v, re);
          B.assert(I.pos <= re);
          let ae = I.pos;
          re = Math.max(0, ae - 1);
        }
        let ke = uh(re, _n(F.span)), ge = F.newLength + (F.span.start - re);
        return df(ke, ge);
      }
      function $(v, F) {
        let re = v, ke;
        if (Gt(v, he), ke) {
          let I = ge(ke);
          I.pos > re.pos && (re = I);
        }
        return re;
        function ge(I) {
          for (; ; ) {
            let ae = Yg(I);
            if (ae) I = ae;
            else return I;
          }
        }
        function he(I) {
          if (!Sa(I)) if (I.pos <= F) {
            if (I.pos >= re.pos && (re = I), F < I.end) return Gt(I, he), !0;
            B.assert(I.end <= F), ke = I;
          } else return B.assert(I.pos > F), !0;
        }
      }
      function d(v, F, re, ke) {
        let ge = v.text;
        if (re && (B.assert(ge.length - re.span.length + re.newLength === F.length), ke || B.shouldAssert(3))) {
          let he = ge.substr(0, re.span.start), I = F.substr(0, re.span.start);
          B.assert(he === I);
          let ae = ge.substring(_n(re.span), ge.length), Le = F.substring(_n(Zi(re)), F.length);
          B.assert(ae === Le);
        }
      }
      function S(v) {
        let F = v.statements, re = 0;
        B.assert(re < F.length);
        let ke = F[re], ge = -1;
        return { currentNode(I) {
          return I !== ge && (ke && ke.end === I && re < F.length - 1 && (re++, ke = F[re]), (!ke || ke.pos !== I) && he(I)), ge = I, B.assert(!ke || ke.pos === I), ke;
        } };
        function he(I) {
          F = void 0, re = -1, ke = void 0, Gt(v, ae, Le);
          return;
          function ae(z) {
            return I >= z.pos && I < z.end ? (Gt(z, ae, Le), !0) : !1;
          }
          function Le(z) {
            if (I >= z.pos && I < z.end) for (let ue = 0; ue < z.length; ue++) {
              let H = z[ue];
              if (H) {
                if (H.pos === I) return F = z, re = ue, ke = H, !0;
                if (H.pos < I && I < H.end) return Gt(H, ae, Le), !0;
              }
            }
            return !1;
          }
        }
      }
      e.createSyntaxCursor = S;
      let _;
      ((v) => {
        v[v.Value = -1] = "Value";
      })(_ || (_ = {}));
    })(Ro || (Ro = {}));
    function g4(e) {
      return y4(e) !== void 0;
    }
    function y4(e) {
      let r = L0(e, gy);
      if (r) return r;
      if (D0(e, ".ts")) {
        let i = z1(e), u = i.lastIndexOf(".d.");
        if (u >= 0) return i.substring(u);
      }
    }
    function _4(e, r, i, u) {
      if (e) {
        if (e === "import") return 99;
        if (e === "require") return 1;
        u(r, i - r, C.resolution_mode_should_be_either_require_or_import);
      }
    }
    function T4(e, r) {
      let i = [];
      for (let u of Jl(r, 0) || St) {
        let h = r.substring(u.pos, u.end);
        S4(i, u, h);
      }
      e.pragmas = /* @__PURE__ */ new Map();
      for (let u of i) {
        if (e.pragmas.has(u.name)) {
          let h = e.pragmas.get(u.name);
          h instanceof Array ? h.push(u.args) : e.pragmas.set(u.name, [h, u.args]);
          continue;
        }
        e.pragmas.set(u.name, u.args);
      }
    }
    function x4(e, r) {
      e.checkJsDirective = void 0, e.referencedFiles = [], e.typeReferenceDirectives = [], e.libReferenceDirectives = [], e.amdDependencies = [], e.hasNoDefaultLib = !1, e.pragmas.forEach((i, u) => {
        switch (u) {
          case "reference": {
            let h = e.referencedFiles, T = e.typeReferenceDirectives, w = e.libReferenceDirectives;
            Nr(vl(i), (N) => {
              let { types: o, lib: $, path: d, ["resolution-mode"]: S, preserve: _ } = N.arguments, v = _ === "true" ? !0 : void 0;
              if (N.arguments["no-default-lib"] === "true") e.hasNoDefaultLib = !0;
              else if (o) {
                let F = _4(S, o.pos, o.end, r);
                T.push({ pos: o.pos, end: o.end, fileName: o.value, ...F ? { resolutionMode: F } : {}, ...v ? { preserve: v } : {} });
              } else $ ? w.push({ pos: $.pos, end: $.end, fileName: $.value, ...v ? { preserve: v } : {} }) : d ? h.push({ pos: d.pos, end: d.end, fileName: d.value, ...v ? { preserve: v } : {} }) : r(N.range.pos, N.range.end - N.range.pos, C.Invalid_reference_directive_syntax);
            });
            break;
          }
          case "amd-dependency": {
            e.amdDependencies = xl(vl(i), (h) => ({ name: h.arguments.name, path: h.arguments.path }));
            break;
          }
          case "amd-module": {
            if (i instanceof Array) for (let h of i) e.moduleName && r(h.range.pos, h.range.end - h.range.pos, C.An_AMD_module_cannot_have_multiple_name_assignments), e.moduleName = h.arguments.name;
            else e.moduleName = i.arguments.name;
            break;
          }
          case "ts-nocheck":
          case "ts-check": {
            Nr(vl(i), (h) => {
              (!e.checkJsDirective || h.range.pos > e.checkJsDirective.pos) && (e.checkJsDirective = { enabled: u === "ts-check", end: h.range.end, pos: h.range.pos });
            });
            break;
          }
          case "jsx":
          case "jsxfrag":
          case "jsximportsource":
          case "jsxruntime":
            return;
          default:
            B.fail("Unhandled pragma kind");
        }
      });
    }
    var vd = /* @__PURE__ */ new Map();
    function k4(e) {
      if (vd.has(e)) return vd.get(e);
      let r = new RegExp(`(\\s${e}\\s*=\\s*)(?:(?:'([^']*)')|(?:"([^"]*)"))`, "im");
      return vd.set(e, r), r;
    }
    var b4 = /^\/\/\/\s*<(\S+)\s.*?\/>/m, v4 = /^\/\/\/?\s*@([^\s:]+)((?:[^\S\r\n]|:).*)?$/m;
    function S4(e, r, i) {
      let u = r.kind === 2 && b4.exec(i);
      if (u) {
        let T = u[1].toLowerCase(), w = j1[T];
        if (!w || !(w.kind & 1)) return;
        if (w.args) {
          let N = {};
          for (let o of w.args) {
            let $ = k4(o.name).exec(i);
            if (!$ && !o.optional) return;
            if ($) {
              let d = $[2] || $[3];
              if (o.captureSpan) {
                let S = r.pos + $.index + $[1].length + 1;
                N[o.name] = { value: d, pos: S, end: S + d.length };
              } else N[o.name] = d;
            }
          }
          e.push({ name: T, args: { arguments: N, range: r } });
        } else e.push({ name: T, args: { arguments: {}, range: r } });
        return;
      }
      let h = r.kind === 2 && v4.exec(i);
      if (h) return nm(e, r, 2, h);
      if (r.kind === 3) {
        let T = /@(\S+)(\s+(?:\S.*)?)?$/gm, w;
        for (; w = T.exec(i); ) nm(e, r, 4, w);
      }
    }
    function nm(e, r, i, u) {
      if (!u) return;
      let h = u[1].toLowerCase(), T = j1[h];
      if (!T || !(T.kind & i)) return;
      let w = u[2], N = C4(T, w);
      N !== "fail" && e.push({ name: h, args: { arguments: N, range: r } });
    }
    function C4(e, r) {
      if (!r) return {};
      if (!e.args) return {};
      let i = r.trim().split(/\s+/), u = {};
      for (let h = 0; h < e.args.length; h++) {
        let T = e.args[h];
        if (!i[h] && !T.optional) return "fail";
        if (T.captureSpan) return B.fail("Capture spans not yet implemented for non-xml pragmas");
        u[T.name] = i[h];
      }
      return u;
    }
    function oa(e, r) {
      return e.kind !== r.kind ? !1 : e.kind === 80 ? e.escapedText === r.escapedText : e.kind === 110 ? !0 : e.kind === 295 ? e.namespace.escapedText === r.namespace.escapedText && e.name.escapedText === r.name.escapedText : e.name.escapedText === r.name.escapedText && oa(e.expression, r.expression);
    }
    var ps = Bl(wl.Latest, !0);
    function am(e, r, i, u) {
      let h = zl(e) ? new Sd(e, r, i) : e === 80 ? new sm(80, r, i) : e === 81 ? new om(81, r, i) : new im(e, r, i);
      return h.parent = u, h.flags = u.flags & 101441536, h;
    }
    var Sd = class {
      constructor(e, r, i) {
        this.pos = r, this.end = i, this.kind = e, this.id = 0, this.flags = 0, this.modifierFlagsCache = 0, this.transformFlags = 0, this.parent = void 0, this.original = void 0, this.emitNode = void 0;
      }
      assertHasRealPosition(e) {
        B.assert(!ss(this.pos) && !ss(this.end), e || "Node must have a real position for this operation");
      }
      getSourceFile() {
        return na(this);
      }
      getStart(e, r) {
        return this.assertHasRealPosition(), No(this, e, r);
      }
      getFullStart() {
        return this.assertHasRealPosition(), this.pos;
      }
      getEnd() {
        return this.assertHasRealPosition(), this.end;
      }
      getWidth(e) {
        return this.assertHasRealPosition(), this.getEnd() - this.getStart(e);
      }
      getFullWidth() {
        return this.assertHasRealPosition(), this.end - this.pos;
      }
      getLeadingTriviaWidth(e) {
        return this.assertHasRealPosition(), this.getStart(e) - this.pos;
      }
      getFullText(e) {
        return this.assertHasRealPosition(), (e || this.getSourceFile()).text.substring(this.pos, this.end);
      }
      getText(e) {
        return this.assertHasRealPosition(), e || (e = this.getSourceFile()), e.text.substring(this.getStart(e), this.getEnd());
      }
      getChildCount(e) {
        return this.getChildren(e).length;
      }
      getChildAt(e, r) {
        return this.getChildren(r)[e];
      }
      getChildren(e = na(this)) {
        return this.assertHasRealPosition("Node without a real position cannot be scanned and thus has no token nodes - use forEachChild and collect the result if that's fine"), E2(this, e) ?? $_(this, e, E4(this, e));
      }
      getFirstToken(e) {
        this.assertHasRealPosition();
        let r = this.getChildren(e);
        if (!r.length) return;
        let i = S1(r, (u) => u.kind < 309 || u.kind > 351);
        return i.kind < 166 ? i : i.getFirstToken(e);
      }
      getLastToken(e) {
        this.assertHasRealPosition();
        let r = this.getChildren(e), i = Ya(r);
        if (i) return i.kind < 166 ? i : i.getLastToken(e);
      }
      forEachChild(e, r) {
        return Gt(this, e, r);
      }
    };
    function E4(e, r) {
      let i = [];
      if (rg(e)) return e.forEachChild((w) => {
        i.push(w);
      }), i;
      ps.setText((r || e.getSourceFile()).text);
      let u = e.pos, h = (w) => {
        fs(i, u, w.pos, e), i.push(w), u = w.end;
      }, T = (w) => {
        fs(i, u, w.pos, e), i.push(w4(w, e)), u = w.end;
      };
      return Nr(e.jsDoc, h), u = e.pos, e.forEachChild(h, T), fs(i, u, e.end, e), ps.setText(void 0), i;
    }
    function fs(e, r, i, u) {
      for (ps.resetTokenState(r); r < i; ) {
        let h = ps.scan(), T = ps.getTokenEnd();
        if (T <= i) {
          if (h === 80) {
            if (by(u)) continue;
            B.fail(`Did not expect ${B.formatSyntaxKind(u.kind)} to have an Identifier in its trivia`);
          }
          e.push(am(h, r, T, u));
        }
        if (r = T, h === 1) break;
      }
    }
    function w4(e, r) {
      let i = am(352, e.pos, e.end, r), u = [], h = e.pos;
      for (let T of e) fs(u, h, T.pos, r), u.push(T), h = T.end;
      return fs(u, h, e.end, r), i._children = u, i;
    }
    var Cd = class {
      constructor(e, r, i) {
        this.pos = r, this.end = i, this.kind = e, this.id = 0, this.flags = 0, this.transformFlags = 0, this.parent = void 0, this.emitNode = void 0;
      }
      getSourceFile() {
        return na(this);
      }
      getStart(e, r) {
        return No(this, e, r);
      }
      getFullStart() {
        return this.pos;
      }
      getEnd() {
        return this.end;
      }
      getWidth(e) {
        return this.getEnd() - this.getStart(e);
      }
      getFullWidth() {
        return this.end - this.pos;
      }
      getLeadingTriviaWidth(e) {
        return this.getStart(e) - this.pos;
      }
      getFullText(e) {
        return (e || this.getSourceFile()).text.substring(this.pos, this.end);
      }
      getText(e) {
        return e || (e = this.getSourceFile()), e.text.substring(this.getStart(e), this.getEnd());
      }
      getChildCount() {
        return this.getChildren().length;
      }
      getChildAt(e) {
        return this.getChildren()[e];
      }
      getChildren() {
        return this.kind === 1 && this.jsDoc || St;
      }
      getFirstToken() {
      }
      getLastToken() {
      }
      forEachChild() {
      }
    }, A4 = class {
      constructor(e, r) {
        this.flags = e, this.escapedName = r, this.declarations = void 0, this.valueDeclaration = void 0, this.id = 0, this.mergeId = 0, this.parent = void 0, this.members = void 0, this.exports = void 0, this.exportSymbol = void 0, this.constEnumOnlyModule = void 0, this.isReferenced = void 0, this.lastAssignmentPos = void 0, this.links = void 0;
      }
      getFlags() {
        return this.flags;
      }
      get name() {
        return Ul(this);
      }
      getEscapedName() {
        return this.escapedName;
      }
      getName() {
        return this.name;
      }
      getDeclarations() {
        return this.declarations;
      }
      getDocumentationComment(e) {
        if (!this.documentationComment) if (this.documentationComment = St, !this.declarations && Pf(this) && this.links.target && Pf(this.links.target) && this.links.target.links.tupleLabelDeclaration) {
          let r = this.links.target.links.tupleLabelDeclaration;
          this.documentationComment = ms([r], e);
        } else this.documentationComment = ms(this.declarations, e);
        return this.documentationComment;
      }
      getContextualDocumentationComment(e, r) {
        if (e) {
          if (Ao(e) && (this.contextualGetAccessorDocumentationComment || (this.contextualGetAccessorDocumentationComment = St, this.contextualGetAccessorDocumentationComment = ms(In(this.declarations, Ao), r)), Gi(this.contextualGetAccessorDocumentationComment))) return this.contextualGetAccessorDocumentationComment;
          if (wo(e) && (this.contextualSetAccessorDocumentationComment || (this.contextualSetAccessorDocumentationComment = St, this.contextualSetAccessorDocumentationComment = ms(In(this.declarations, wo), r)), Gi(this.contextualSetAccessorDocumentationComment))) return this.contextualSetAccessorDocumentationComment;
        }
        return this.getDocumentationComment(r);
      }
      getJsDocTags(e) {
        return this.tags === void 0 && (this.tags = St, this.tags = zo(this.declarations, e)), this.tags;
      }
      getContextualJsDocTags(e, r) {
        if (e) {
          if (Ao(e) && (this.contextualGetAccessorTags || (this.contextualGetAccessorTags = St, this.contextualGetAccessorTags = zo(In(this.declarations, Ao), r)), Gi(this.contextualGetAccessorTags))) return this.contextualGetAccessorTags;
          if (wo(e) && (this.contextualSetAccessorTags || (this.contextualSetAccessorTags = St, this.contextualSetAccessorTags = zo(In(this.declarations, wo), r)), Gi(this.contextualSetAccessorTags))) return this.contextualSetAccessorTags;
        }
        return this.getJsDocTags(r);
      }
    }, im = class extends Cd {
      constructor(e, r, i) {
        super(e, r, i);
      }
    }, sm = class extends Cd {
      constructor(e, r, i) {
        super(e, r, i);
      }
      get text() {
        return _r(this);
      }
    }, om = class extends Cd {
      constructor(e, r, i) {
        super(e, r, i);
      }
      get text() {
        return _r(this);
      }
    }, N4 = class {
      constructor(e, r) {
        this.flags = r, this.checker = e;
      }
      getFlags() {
        return this.flags;
      }
      getSymbol() {
        return this.symbol;
      }
      getProperties() {
        return this.checker.getPropertiesOfType(this);
      }
      getProperty(e) {
        return this.checker.getPropertyOfType(this, e);
      }
      getApparentProperties() {
        return this.checker.getAugmentedPropertiesOfType(this);
      }
      getCallSignatures() {
        return this.checker.getSignaturesOfType(this, 0);
      }
      getConstructSignatures() {
        return this.checker.getSignaturesOfType(this, 1);
      }
      getStringIndexType() {
        return this.checker.getIndexTypeOfType(this, 0);
      }
      getNumberIndexType() {
        return this.checker.getIndexTypeOfType(this, 1);
      }
      getBaseTypes() {
        return this.isClassOrInterface() ? this.checker.getBaseTypes(this) : void 0;
      }
      isNullableType() {
        return this.checker.isNullableType(this);
      }
      getNonNullableType() {
        return this.checker.getNonNullableType(this);
      }
      getNonOptionalType() {
        return this.checker.getNonOptionalType(this);
      }
      getConstraint() {
        return this.checker.getBaseConstraintOfType(this);
      }
      getDefault() {
        return this.checker.getDefaultFromTypeParameter(this);
      }
      isUnion() {
        return !!(this.flags & 1048576);
      }
      isIntersection() {
        return !!(this.flags & 2097152);
      }
      isUnionOrIntersection() {
        return !!(this.flags & 3145728);
      }
      isLiteral() {
        return !!(this.flags & 2432);
      }
      isStringLiteral() {
        return !!(this.flags & 128);
      }
      isNumberLiteral() {
        return !!(this.flags & 256);
      }
      isTypeParameter() {
        return !!(this.flags & 262144);
      }
      isClassOrInterface() {
        return !!(ad(this) & 3);
      }
      isClass() {
        return !!(ad(this) & 1);
      }
      isIndexType() {
        return !!(this.flags & 4194304);
      }
      get typeArguments() {
        if (ad(this) & 4) return this.checker.getTypeArguments(this);
      }
    }, D4 = class {
      constructor(e, r) {
        this.flags = r, this.checker = e;
      }
      getDeclaration() {
        return this.declaration;
      }
      getTypeParameters() {
        return this.typeParameters;
      }
      getParameters() {
        return this.parameters;
      }
      getReturnType() {
        return this.checker.getReturnTypeOfSignature(this);
      }
      getTypeParameterAtPosition(e) {
        let r = this.checker.getParameterType(this, e);
        if (r.isIndexType() && ky(r.type)) {
          let i = r.type.getConstraint();
          if (i) return this.checker.getIndexType(i);
        }
        return r;
      }
      getDocumentationComment() {
        return this.documentationComment || (this.documentationComment = ms(Cl(this.declaration), this.checker));
      }
      getJsDocTags() {
        return this.jsDocTags || (this.jsDocTags = zo(Cl(this.declaration), this.checker));
      }
    };
    function cm(e) {
      return _f(e).some((r) => r.tagName.text === "inheritDoc" || r.tagName.text === "inheritdoc");
    }
    function zo(e, r) {
      if (!e) return St;
      let i = ts_JsDoc_exports.getJsDocTagsFromDeclarations(e, r);
      if (r && (i.length === 0 || e.some(cm))) {
        let u = /* @__PURE__ */ new Set();
        for (let h of e) {
          let T = um(r, h, (w) => {
            var N;
            if (!u.has(w)) return u.add(w), h.kind === 177 || h.kind === 178 ? w.getContextualJsDocTags(h, r) : ((N = w.declarations) == null ? void 0 : N.length) === 1 ? w.getJsDocTags(r) : void 0;
          });
          T && (i = [...T, ...i]);
        }
      }
      return i;
    }
    function ms(e, r) {
      if (!e) return St;
      let i = ts_JsDoc_exports.getJsDocCommentsFromDeclarations(e, r);
      if (r && (i.length === 0 || e.some(cm))) {
        let u = /* @__PURE__ */ new Set();
        for (let h of e) {
          let T = um(r, h, (w) => {
            if (!u.has(w)) return u.add(w), h.kind === 177 || h.kind === 178 ? w.getContextualDocumentationComment(h, r) : w.getDocumentationComment(r);
          });
          T && (i = i.length === 0 ? T.slice() : T.concat(lineBreakPart(), i));
        }
      }
      return i;
    }
    function um(e, r, i) {
      var u;
      let h = ((u = r.parent) == null ? void 0 : u.kind) === 176 ? r.parent.parent : r.parent;
      if (!h) return;
      let T = qg(r);
      return Ym(Ig(h), (w) => {
        let N = e.getTypeAtLocation(w), o = T && N.symbol ? e.getTypeOfSymbol(N.symbol) : N, $ = e.getPropertyOfType(o, r.symbol.name);
        return $ ? i($) : void 0;
      });
    }
    var P4 = class extends Sd {
      constructor(e, r, i) {
        super(e, r, i);
      }
      update(e, r) {
        return f4(this, e, r);
      }
      getLineAndCharacterOfPosition(e) {
        return ef(this, e);
      }
      getLineStarts() {
        return Fl(this);
      }
      getPositionOfLineAndCharacter(e, r, i) {
        return Q0(Fl(this), e, r, this.text, i);
      }
      getLineEndOfPosition(e) {
        let { line: r } = this.getLineAndCharacterOfPosition(e), i = this.getLineStarts(), u;
        r + 1 >= i.length && (u = this.getEnd()), u || (u = i[r + 1] - 1);
        let h = this.getFullText();
        return h[u] === `
` && h[u - 1] === "\r" ? u - 1 : u;
      }
      getNamedDeclarations() {
        return this.namedDeclarations || (this.namedDeclarations = this.computeNamedDeclarations()), this.namedDeclarations;
      }
      computeNamedDeclarations() {
        let e = f0();
        return this.forEachChild(h), e;
        function r(T) {
          let w = u(T);
          w && e.add(w, T);
        }
        function i(T) {
          let w = e.get(T);
          return w || e.set(T, w = []), w;
        }
        function u(T) {
          let w = jl(T);
          return w && (t2(w) && Kn(w.expression) ? w.expression.name.text : vf(w) ? getNameFromPropertyName(w) : void 0);
        }
        function h(T) {
          switch (T.kind) {
            case 262:
            case 218:
            case 174:
            case 173:
              let w = T, N = u(w);
              if (N) {
                let d = i(N), S = Ya(d);
                S && w.parent === S.parent && w.symbol === S.symbol ? w.body && !S.body && (d[d.length - 1] = w) : d.push(w);
              }
              Gt(T, h);
              break;
            case 263:
            case 231:
            case 264:
            case 265:
            case 266:
            case 267:
            case 271:
            case 281:
            case 276:
            case 273:
            case 274:
            case 177:
            case 178:
            case 187:
              r(T), Gt(T, h);
              break;
            case 169:
              if (!is(T, 31)) break;
            case 260:
            case 208: {
              let d = T;
              if (Gh(d.name)) {
                Gt(d.name, h);
                break;
              }
              d.initializer && h(d.initializer);
            }
            case 306:
            case 172:
            case 171:
              r(T);
              break;
            case 278:
              let o = T;
              o.exportClause && (v_(o.exportClause) ? Nr(o.exportClause.elements, h) : h(o.exportClause.name));
              break;
            case 272:
              let $ = T.importClause;
              $ && ($.name && r($.name), $.namedBindings && ($.namedBindings.kind === 274 ? r($.namedBindings) : Nr($.namedBindings.elements, h)));
              break;
            case 226:
              Vl(T) !== 0 && r(T);
            default:
              Gt(T, h);
          }
        }
      }
    }, F4 = class {
      constructor(e, r, i) {
        this.fileName = e, this.text = r, this.skipTrivia = i || ((u) => u);
      }
      getLineAndCharacterOfPosition(e) {
        return ef(this, e);
      }
    };
    function I4() {
      return { getNodeConstructor: () => Sd, getTokenConstructor: () => im, getIdentifierConstructor: () => sm, getPrivateIdentifierConstructor: () => om, getSourceFileConstructor: () => P4, getSymbolConstructor: () => A4, getTypeConstructor: () => N4, getSignatureConstructor: () => D4, getSourceMapSourceConstructor: () => F4 };
    }
    cy(I4());
    var lm = new Proxy({}, { get: () => !0 }), dm = lm["4.8"];
    function Tn(e, r = !1) {
      var i;
      if (e != null) {
        if (dm) {
          if (r || xd(e)) {
            let u = gh(e);
            return u ? [...u] : void 0;
          }
          return;
        }
        return (i = e.modifiers) == null ? void 0 : i.filter((u) => !dd(u));
      }
    }
    function fi(e, r = !1) {
      var i;
      if (e != null) {
        if (dm) {
          if (r || e4(e)) {
            let u = hh(e);
            return u ? [...u] : void 0;
          }
          return;
        }
        return (i = e.decorators) == null ? void 0 : i.filter(dd);
      }
    }
    var L4 = {}, pm = new Proxy({}, { get: (e, r) => r }), O4 = pm, M4 = pm, E = O4, Dt = M4, fm = lm["5.0"], le = Fe, J4 = /* @__PURE__ */ new Set([le.AmpersandAmpersandToken, le.BarBarToken, le.QuestionQuestionToken]), B4 = /* @__PURE__ */ new Set([Fe.AmpersandAmpersandEqualsToken, Fe.AmpersandEqualsToken, Fe.AsteriskAsteriskEqualsToken, Fe.AsteriskEqualsToken, Fe.BarBarEqualsToken, Fe.BarEqualsToken, Fe.CaretEqualsToken, Fe.EqualsToken, Fe.GreaterThanGreaterThanEqualsToken, Fe.GreaterThanGreaterThanGreaterThanEqualsToken, Fe.LessThanLessThanEqualsToken, Fe.MinusEqualsToken, Fe.PercentEqualsToken, Fe.PlusEqualsToken, Fe.QuestionQuestionEqualsToken, Fe.SlashEqualsToken]), K4 = /* @__PURE__ */ new Set([le.AmpersandAmpersandToken, le.AmpersandToken, le.AsteriskAsteriskToken, le.AsteriskToken, le.BarBarToken, le.BarToken, le.CaretToken, le.EqualsEqualsEqualsToken, le.EqualsEqualsToken, le.ExclamationEqualsEqualsToken, le.ExclamationEqualsToken, le.GreaterThanEqualsToken, le.GreaterThanGreaterThanGreaterThanToken, le.GreaterThanGreaterThanToken, le.GreaterThanToken, le.InKeyword, le.InstanceOfKeyword, le.LessThanEqualsToken, le.LessThanLessThanToken, le.LessThanToken, le.MinusToken, le.PercentToken, le.PlusToken, le.SlashToken]);
    function U4(e) {
      return B4.has(e.kind);
    }
    function j4(e) {
      return J4.has(e.kind);
    }
    function q4(e) {
      return K4.has(e.kind);
    }
    function ca(e) {
      return ct(e);
    }
    function R4(e) {
      return e.kind !== le.SemicolonClassElement;
    }
    function $e(e, r) {
      let i = Tn(r);
      return (i == null ? void 0 : i.some((u) => u.kind === e)) === !0;
    }
    function z4(e) {
      let r = Tn(e);
      return r == null ? null : r[r.length - 1] ?? null;
    }
    function $4(e) {
      return e.kind === le.CommaToken;
    }
    function G4(e) {
      return e.kind === le.SingleLineCommentTrivia || e.kind === le.MultiLineCommentTrivia;
    }
    function W4(e) {
      return e.kind === le.JSDocComment;
    }
    function V4(e) {
      if (U4(e)) return { type: E.AssignmentExpression, operator: ca(e.kind) };
      if (j4(e)) return { type: E.LogicalExpression, operator: ca(e.kind) };
      if (q4(e)) return { type: E.BinaryExpression, operator: ca(e.kind) };
      throw new Error(`Unexpected binary operator ${ct(e.kind)}`);
    }
    function $o(e, r) {
      let i = r.getLineAndCharacterOfPosition(e);
      return { column: i.character, line: i.line + 1 };
    }
    function Fa(e, r) {
      let [i, u] = e.map((h) => $o(h, r));
      return { end: u, start: i };
    }
    function H4(e) {
      if (e.kind === Fe.Block) switch (e.parent.kind) {
        case Fe.Constructor:
        case Fe.GetAccessor:
        case Fe.SetAccessor:
        case Fe.ArrowFunction:
        case Fe.FunctionExpression:
        case Fe.FunctionDeclaration:
        case Fe.MethodDeclaration:
          return !0;
        default:
          return !1;
      }
      return !0;
    }
    function mi(e, r) {
      return [e.getStart(r), e.getEnd()];
    }
    function X4(e) {
      return e.kind >= le.FirstToken && e.kind <= le.LastToken;
    }
    function mm(e) {
      return e.kind >= le.JsxElement && e.kind <= le.JsxAttribute;
    }
    function Ed(e) {
      return e.flags & Br.Let ? "let" : (e.flags & Br.AwaitUsing) === Br.AwaitUsing ? "await using" : e.flags & Br.Const ? "const" : e.flags & Br.Using ? "using" : "var";
    }
    function Ia(e) {
      let r = Tn(e);
      if (r != null) for (let i of r) switch (i.kind) {
        case le.PublicKeyword:
          return "public";
        case le.ProtectedKeyword:
          return "protected";
        case le.PrivateKeyword:
          return "private";
      }
    }
    function xn(e, r, i) {
      return u(r);
      function u(h) {
        return Oh(h) && h.pos === e.end ? h : s6(h.getChildren(i), (T) => (T.pos <= e.pos && T.end > e.end || T.pos === e.end) && i6(T, i) ? u(T) : void 0);
      }
    }
    function Q4(e, r) {
      let i = e;
      for (; i; ) {
        if (r(i)) return i;
        i = i.parent;
      }
    }
    function Z4(e) {
      return !!Q4(e, mm);
    }
    function hm(e) {
      return Za(!1, e, /&(?:#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+);/g, (r) => {
        let i = r.slice(1, -1);
        if (i[0] === "#") {
          let u = i[1] === "x" ? parseInt(i.slice(2), 16) : parseInt(i.slice(1), 10);
          return u > 1114111 ? r : String.fromCodePoint(u);
        }
        return L4[i] || r;
      });
    }
    function hi(e) {
      return e.kind === le.ComputedPropertyName;
    }
    function gm(e) {
      return !!e.questionToken;
    }
    function ym(e) {
      return e.type === E.ChainExpression;
    }
    function Y4(e, r) {
      return ym(r) && e.expression.kind !== Fe.ParenthesizedExpression;
    }
    function e6(e) {
      if (e.kind === le.NullKeyword) return Dt.Null;
      let r;
      if (fm && e.kind === le.Identifier ? r = ff(e) : "originalKeywordKind" in e && (r = e.originalKeywordKind), r) return r === le.NullKeyword ? Dt.Null : r >= le.FirstFutureReservedWord && r <= le.LastKeyword ? Dt.Identifier : Dt.Keyword;
      if (e.kind >= le.FirstKeyword && e.kind <= le.LastFutureReservedWord) return e.kind === le.FalseKeyword || e.kind === le.TrueKeyword ? Dt.Boolean : Dt.Keyword;
      if (e.kind >= le.FirstPunctuation && e.kind <= le.LastPunctuation) return Dt.Punctuator;
      if (e.kind >= le.NoSubstitutionTemplateLiteral && e.kind <= le.TemplateTail) return Dt.Template;
      switch (e.kind) {
        case le.NumericLiteral:
        case le.BigIntLiteral:
          return Dt.Numeric;
        case le.PrivateIdentifier:
          return Dt.PrivateIdentifier;
        case le.JsxText:
          return Dt.JSXText;
        case le.StringLiteral:
          return e.parent.kind === le.JsxAttribute || e.parent.kind === le.JsxElement ? Dt.JSXText : Dt.String;
        case le.RegularExpressionLiteral:
          return Dt.RegularExpression;
        case le.Identifier:
        case le.ConstructorKeyword:
        case le.GetKeyword:
        case le.SetKeyword:
      }
      return e.kind === le.Identifier && (mm(e.parent) || e.parent.kind === le.PropertyAccessExpression && Z4(e)) ? Dt.JSXIdentifier : Dt.Identifier;
    }
    function t6(e, r) {
      let i = e.kind === le.JsxText ? e.getFullStart() : e.getStart(r), u = e.getEnd(), h = r.text.slice(i, u), T = e6(e), w = [i, u], N = Fa(w, r);
      return T === Dt.RegularExpression ? { type: T, loc: N, range: w, regex: { flags: h.slice(h.lastIndexOf("/") + 1), pattern: h.slice(1, h.lastIndexOf("/")) }, value: h } : T === Dt.PrivateIdentifier ? { type: T, loc: N, range: w, value: h.slice(1) } : { type: T, loc: N, range: w, value: h };
    }
    function r6(e) {
      let r = [];
      function i(u) {
        G4(u) || W4(u) || (X4(u) && u.kind !== le.EndOfFileToken ? r.push(t6(u, e)) : u.getChildren(e).forEach(i));
      }
      return i(e), r;
    }
    var n6 = class extends Error {
      constructor(r, i, u) {
        super(r);
        y1(this, "fileName");
        y1(this, "location");
        this.fileName = i, this.location = u, Object.defineProperty(this, "name", { configurable: !0, enumerable: !1, value: new.target.name });
      }
      get index() {
        return this.location.start.offset;
      }
      get lineNumber() {
        return this.location.start.line;
      }
      get column() {
        return this.location.start.column;
      }
    };
    function _m(e, r, i, u = i) {
      let [h, T] = [i, u].map((w) => {
        let { character: N, line: o } = r.getLineAndCharacterOfPosition(w);
        return { column: N, line: o + 1, offset: w };
      });
      return new n6(e, r.fileName, { end: T, start: h });
    }
    function a6(e) {
      var r;
      return !!("illegalDecorators" in e && (r = e.illegalDecorators) != null && r.length);
    }
    function i6(e, r) {
      return e.kind === le.EndOfFileToken ? !!e.jsDoc : e.getWidth(r) !== 0;
    }
    function s6(e, r) {
      if (e !== void 0) for (let i = 0; i < e.length; i++) {
        let u = r(e[i], i);
        if (u !== void 0) return u;
      }
    }
    function o6(e) {
      return (fm ? ff(e) : e.originalKeywordKind) === le.ThisKeyword;
    }
    function Tm(e) {
      return !!e && e.kind === le.Identifier && o6(e);
    }
    function c6(e) {
      if (!Tm(e)) return !1;
      for (; Uy(e.parent) && e.parent.left === e; ) e = e.parent;
      return e.parent.kind === le.TypeQuery;
    }
    function u6(e) {
      return e == null ? !0 : e.pos === e.end && e.pos >= 0 && e.kind !== le.EndOfFileToken;
    }
    function xm(e) {
      return !u6(e);
    }
    function l6(e) {
      return pf(e.parent, Sf);
    }
    function d6(e) {
      return $e(le.AbstractKeyword, e);
    }
    function p6(e) {
      if (e.parameters.length && !S2(e)) {
        let r = e.parameters[0];
        if (f6(r)) return r;
      }
      return null;
    }
    function f6(e) {
      return Tm(e.name);
    }
    function m6(e) {
      switch (e.kind) {
        case le.ClassDeclaration:
          return !0;
        case le.ClassExpression:
          return !0;
        case le.PropertyDeclaration: {
          let { parent: r } = e;
          return !!(qo(r) || ai(r) && !d6(e));
        }
        case le.GetAccessor:
        case le.SetAccessor:
        case le.MethodDeclaration: {
          let { parent: r } = e;
          return !!e.body && (qo(r) || ai(r));
        }
        case le.Parameter: {
          let { parent: r } = e, i = r.parent;
          return !!r && "body" in r && !!r.body && (r.kind === le.Constructor || r.kind === le.MethodDeclaration || r.kind === le.SetAccessor) && p6(r) !== e && !!i && i.kind === le.ClassDeclaration;
        }
      }
      return !1;
    }
    function wd(e) {
      switch (e.kind) {
        case le.Identifier:
          return !0;
        case le.PropertyAccessExpression:
        case le.ElementAccessExpression:
          return !(e.flags & Br.OptionalChain);
        case le.ParenthesizedExpression:
        case le.TypeAssertionExpression:
        case le.AsExpression:
        case le.SatisfiesExpression:
        case le.ExpressionWithTypeArguments:
        case le.NonNullExpression:
          return wd(e.expression);
        default:
          return !1;
      }
    }
    function h6(e) {
      let r = Tn(e), i = e;
      for (; (!r || r.length === 0) && ls(i.parent); ) {
        let u = Tn(i.parent);
        u != null && u.length && (r = u), i = i.parent;
      }
      return r;
    }
    var y = Fe;
    function g6(e) {
      return _m("message" in e && e.message || e.messageText, e.file, e.start);
    }
    function y6(e) {
      return Kn(e) && et(e.name) && km(e.expression);
    }
    function km(e) {
      return e.kind === y.Identifier || y6(e);
    }
    var ye, Ad, bm, Ie, Kt, gi, Nd, _6 = class {
      constructor(e, r) {
        Vm(this, ye), $i(this, "allowPattern", !1), $i(this, "ast"), $i(this, "esTreeNodeToTSNodeMap", /* @__PURE__ */ new WeakMap()), $i(this, "options"), $i(this, "tsNodeToESTreeNodeMap", /* @__PURE__ */ new WeakMap()), this.ast = e, this.options = { ...r };
      }
      assertModuleSpecifier(e, r) {
        var i;
        !r && e.moduleSpecifier == null && _e(this, ye, Kt).call(this, e, "Module specifier must be a string literal."), e.moduleSpecifier && ((i = e.moduleSpecifier) == null ? void 0 : i.kind) !== y.StringLiteral && _e(this, ye, Kt).call(this, e.moduleSpecifier, "Module specifier must be a string literal.");
      }
      convertBindingNameWithTypeAnnotation(e, r, i) {
        let u = this.convertPattern(e);
        return r && (u.typeAnnotation = this.convertTypeAnnotation(r, i), this.fixParentLocation(u, u.typeAnnotation.range)), u;
      }
      convertBodyExpressions(e, r) {
        let i = H4(r);
        return e.map((u) => {
          let h = this.convertChild(u);
          if (i) {
            if (h != null && h.expression && p2(u) && di(u.expression)) {
              let T = h.expression.raw;
              return h.directive = T.slice(1, -1), h;
            }
            i = !1;
          }
          return h;
        }).filter((u) => u);
      }
      convertChainExpression(e, r) {
        let { child: i, isOptional: u } = e.type === E.MemberExpression ? { child: e.object, isOptional: e.optional } : e.type === E.CallExpression ? { child: e.callee, isOptional: e.optional } : { child: e.expression, isOptional: !1 }, h = Y4(r, i);
        if (!h && !u) return e;
        if (h && ym(i)) {
          let T = i.expression;
          e.type === E.MemberExpression ? e.object = T : e.type === E.CallExpression ? e.callee = T : e.expression = T;
        }
        return this.createNode(r, { type: E.ChainExpression, expression: e });
      }
      convertChild(e, r) {
        return this.converter(e, r, !1);
      }
      convertPattern(e, r) {
        return this.converter(e, r, !0);
      }
      convertTypeAnnotation(e, r) {
        let i = (r == null ? void 0 : r.kind) === y.FunctionType || (r == null ? void 0 : r.kind) === y.ConstructorType ? 2 : 1, u = [e.getFullStart() - i, e.end], h = Fa(u, this.ast);
        return { type: E.TSTypeAnnotation, loc: h, range: u, typeAnnotation: this.convertChild(e) };
      }
      convertTypeArgumentsToTypeParameterInstantiation(e, r) {
        let i = xn(e, this.ast, this.ast);
        return this.createNode(r, { type: E.TSTypeParameterInstantiation, range: [e.pos - 1, i.end], params: e.map((u) => this.convertChild(u)) });
      }
      convertTSTypeParametersToTypeParametersDeclaration(e) {
        let r = xn(e, this.ast, this.ast), i = [e.pos - 1, r.end];
        return { type: E.TSTypeParameterDeclaration, loc: Fa(i, this.ast), range: i, params: e.map((u) => this.convertChild(u)) };
      }
      convertParameters(e) {
        return e != null && e.length ? e.map((r) => {
          var i;
          let u = this.convertChild(r);
          return u.decorators = ((i = fi(r)) == null ? void 0 : i.map((h) => this.convertChild(h))) ?? [], u;
        }) : [];
      }
      converter(e, r, i) {
        if (!e) return null;
        _e(this, ye, bm).call(this, e);
        let u = this.allowPattern;
        i != null && (this.allowPattern = i);
        let h = this.convertNode(e, r ?? e.parent);
        return this.registerTSNodeInNodeMap(e, h), this.allowPattern = u, h;
      }
      convertImportAttributes(e) {
        return e == null ? [] : e.elements.map((r) => this.convertChild(r));
      }
      convertJSXIdentifier(e) {
        let r = this.createNode(e, { type: E.JSXIdentifier, name: e.getText() });
        return this.registerTSNodeInNodeMap(e, r), r;
      }
      convertJSXNamespaceOrIdentifier(e) {
        if (e.kind === Fe.JsxNamespacedName) {
          let u = this.createNode(e, { type: E.JSXNamespacedName, name: this.createNode(e.name, { type: E.JSXIdentifier, name: e.name.text }), namespace: this.createNode(e.namespace, { type: E.JSXIdentifier, name: e.namespace.text }) });
          return this.registerTSNodeInNodeMap(e, u), u;
        }
        let r = e.getText(), i = r.indexOf(":");
        if (i > 0) {
          let u = mi(e, this.ast), h = this.createNode(e, { type: E.JSXNamespacedName, range: u, name: this.createNode(e, { type: E.JSXIdentifier, range: [u[0] + i + 1, u[1]], name: r.slice(i + 1) }), namespace: this.createNode(e, { type: E.JSXIdentifier, range: [u[0], u[0] + i], name: r.slice(0, i) }) });
          return this.registerTSNodeInNodeMap(e, h), h;
        }
        return this.convertJSXIdentifier(e);
      }
      convertJSXTagName(e, r) {
        let i;
        switch (e.kind) {
          case y.PropertyAccessExpression:
            e.name.kind === y.PrivateIdentifier && _e(this, ye, Ie).call(this, e.name, "Non-private identifier expected."), i = this.createNode(e, { type: E.JSXMemberExpression, object: this.convertJSXTagName(e.expression, r), property: this.convertJSXIdentifier(e.name) });
            break;
          case y.ThisKeyword:
          case y.Identifier:
          default:
            return this.convertJSXNamespaceOrIdentifier(e);
        }
        return this.registerTSNodeInNodeMap(e, i), i;
      }
      convertMethodSignature(e) {
        return this.createNode(e, { type: E.TSMethodSignature, accessibility: Ia(e), computed: hi(e.name), key: this.convertChild(e.name), kind: (() => {
          switch (e.kind) {
            case y.GetAccessor:
              return "get";
            case y.SetAccessor:
              return "set";
            case y.MethodSignature:
              return "method";
          }
        })(), optional: gm(e), params: this.convertParameters(e.parameters), readonly: $e(y.ReadonlyKeyword, e), returnType: e.type && this.convertTypeAnnotation(e.type, e), static: $e(y.StaticKeyword, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
      }
      fixParentLocation(e, r) {
        r[0] < e.range[0] && (e.range[0] = r[0], e.loc.start = $o(e.range[0], this.ast)), r[1] > e.range[1] && (e.range[1] = r[1], e.loc.end = $o(e.range[1], this.ast));
      }
      convertNode(e, r) {
        var i, u, h, T, w, N, o, $;
        switch (e.kind) {
          case y.SourceFile:
            return this.createNode(e, { type: E.Program, range: [e.getStart(this.ast), e.endOfFileToken.end], body: this.convertBodyExpressions(e.statements, e), comments: void 0, sourceType: e.externalModuleIndicator ? "module" : "script", tokens: void 0 });
          case y.Block:
            return this.createNode(e, { type: E.BlockStatement, body: this.convertBodyExpressions(e.statements, e) });
          case y.Identifier:
            return c6(e) ? this.createNode(e, { type: E.ThisExpression }) : this.createNode(e, { type: E.Identifier, decorators: [], name: e.text, optional: !1, typeAnnotation: void 0 });
          case y.PrivateIdentifier:
            return this.createNode(e, { type: E.PrivateIdentifier, name: e.text.slice(1) });
          case y.WithStatement:
            return this.createNode(e, { type: E.WithStatement, body: this.convertChild(e.statement), object: this.convertChild(e.expression) });
          case y.ReturnStatement:
            return this.createNode(e, { type: E.ReturnStatement, argument: this.convertChild(e.expression) });
          case y.LabeledStatement:
            return this.createNode(e, { type: E.LabeledStatement, body: this.convertChild(e.statement), label: this.convertChild(e.label) });
          case y.ContinueStatement:
            return this.createNode(e, { type: E.ContinueStatement, label: this.convertChild(e.label) });
          case y.BreakStatement:
            return this.createNode(e, { type: E.BreakStatement, label: this.convertChild(e.label) });
          case y.IfStatement:
            return this.createNode(e, { type: E.IfStatement, alternate: this.convertChild(e.elseStatement), consequent: this.convertChild(e.thenStatement), test: this.convertChild(e.expression) });
          case y.SwitchStatement:
            return e.caseBlock.clauses.filter((d) => d.kind === y.DefaultClause).length > 1 && _e(this, ye, Ie).call(this, e, "A 'default' clause cannot appear more than once in a 'switch' statement."), this.createNode(e, { type: E.SwitchStatement, cases: e.caseBlock.clauses.map((d) => this.convertChild(d)), discriminant: this.convertChild(e.expression) });
          case y.CaseClause:
          case y.DefaultClause:
            return this.createNode(e, { type: E.SwitchCase, consequent: e.statements.map((d) => this.convertChild(d)), test: e.kind === y.CaseClause ? this.convertChild(e.expression) : null });
          case y.ThrowStatement:
            return e.expression.end === e.expression.pos && _e(this, ye, Kt).call(this, e, "A throw statement must throw an expression."), this.createNode(e, { type: E.ThrowStatement, argument: this.convertChild(e.expression) });
          case y.TryStatement:
            return this.createNode(e, { type: E.TryStatement, block: this.convertChild(e.tryBlock), finalizer: this.convertChild(e.finallyBlock), handler: this.convertChild(e.catchClause) });
          case y.CatchClause:
            return (i = e.variableDeclaration) != null && i.initializer && _e(this, ye, Ie).call(this, e.variableDeclaration.initializer, "Catch clause variable cannot have an initializer."), this.createNode(e, { type: E.CatchClause, body: this.convertChild(e.block), param: e.variableDeclaration ? this.convertBindingNameWithTypeAnnotation(e.variableDeclaration.name, e.variableDeclaration.type) : null });
          case y.WhileStatement:
            return this.createNode(e, { type: E.WhileStatement, body: this.convertChild(e.statement), test: this.convertChild(e.expression) });
          case y.DoStatement:
            return this.createNode(e, { type: E.DoWhileStatement, body: this.convertChild(e.statement), test: this.convertChild(e.expression) });
          case y.ForStatement:
            return this.createNode(e, { type: E.ForStatement, body: this.convertChild(e.statement), init: this.convertChild(e.initializer), test: this.convertChild(e.condition), update: this.convertChild(e.incrementor) });
          case y.ForInStatement:
            return _e(this, ye, Ad).call(this, e.initializer, e.kind), this.createNode(e, { type: E.ForInStatement, body: this.convertChild(e.statement), left: this.convertPattern(e.initializer), right: this.convertChild(e.expression) });
          case y.ForOfStatement:
            return _e(this, ye, Ad).call(this, e.initializer, e.kind), this.createNode(e, { type: E.ForOfStatement, await: !!(e.awaitModifier && e.awaitModifier.kind === y.AwaitKeyword), body: this.convertChild(e.statement), left: this.convertPattern(e.initializer), right: this.convertChild(e.expression) });
          case y.FunctionDeclaration: {
            let d = $e(y.DeclareKeyword, e), S = $e(y.AsyncKeyword, e), _ = !!e.asteriskToken;
            d ? e.body ? _e(this, ye, Ie).call(this, e, "An implementation cannot be declared in ambient contexts.") : S ? _e(this, ye, Ie).call(this, e, "'async' modifier cannot be used in an ambient context.") : _ && _e(this, ye, Ie).call(this, e, "Generators are not allowed in an ambient context.") : !e.body && _ && _e(this, ye, Ie).call(this, e, "A function signature cannot be declared as a generator.");
            let v = this.createNode(e, { type: e.body ? E.FunctionDeclaration : E.TSDeclareFunction, async: S, body: this.convertChild(e.body) || void 0, declare: d, expression: !1, generator: _, id: this.convertChild(e.name), params: this.convertParameters(e.parameters), returnType: e.type && this.convertTypeAnnotation(e.type, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
            return this.fixExports(e, v);
          }
          case y.VariableDeclaration: {
            let d = !!e.exclamationToken, S = this.convertChild(e.initializer), _ = this.convertBindingNameWithTypeAnnotation(e.name, e.type, e);
            return d && (S ? _e(this, ye, Ie).call(this, e, "Declarations with initializers cannot also have definite assignment assertions.") : (_.type !== E.Identifier || !_.typeAnnotation) && _e(this, ye, Ie).call(this, e, "Declarations with definite assignment assertions must also have type annotations.")), this.createNode(e, { type: E.VariableDeclarator, definite: d, id: _, init: S });
          }
          case y.VariableStatement: {
            let d = this.createNode(e, { type: E.VariableDeclaration, declarations: e.declarationList.declarations.map((S) => this.convertChild(S)), declare: $e(y.DeclareKeyword, e), kind: Ed(e.declarationList) });
            return d.declarations.length || _e(this, ye, Kt).call(this, e, "A variable declaration list must have at least one variable declarator."), (d.kind === "using" || d.kind === "await using") && e.declarationList.declarations.forEach((S, _) => {
              d.declarations[_].init == null && _e(this, ye, Ie).call(this, S, `'${d.kind}' declarations must be initialized.`), d.declarations[_].id.type !== E.Identifier && _e(this, ye, Ie).call(this, S.name, `'${d.kind}' declarations may not have binding patterns.`);
            }), (d.declare || ["await using", "const", "using"].includes(d.kind)) && e.declarationList.declarations.forEach((S, _) => {
              d.declarations[_].definite && _e(this, ye, Ie).call(this, S, "A definite assignment assertion '!' is not permitted in this context.");
            }), d.declare && e.declarationList.declarations.forEach((S, _) => {
              d.declarations[_].init && (["let", "var"].includes(d.kind) || d.declarations[_].id.typeAnnotation) && _e(this, ye, Ie).call(this, S, "Initializers are not permitted in ambient contexts.");
            }), this.fixExports(e, d);
          }
          case y.VariableDeclarationList: {
            let d = this.createNode(e, { type: E.VariableDeclaration, declarations: e.declarations.map((S) => this.convertChild(S)), declare: !1, kind: Ed(e) });
            return (d.kind === "using" || d.kind === "await using") && e.declarations.forEach((S, _) => {
              d.declarations[_].init != null && _e(this, ye, Ie).call(this, S, `'${d.kind}' declarations may not be initialized in for statement.`), d.declarations[_].id.type !== E.Identifier && _e(this, ye, Ie).call(this, S.name, `'${d.kind}' declarations may not have binding patterns.`);
            }), d;
          }
          case y.ExpressionStatement:
            return this.createNode(e, { type: E.ExpressionStatement, directive: void 0, expression: this.convertChild(e.expression) });
          case y.ThisKeyword:
            return this.createNode(e, { type: E.ThisExpression });
          case y.ArrayLiteralExpression:
            return this.allowPattern ? this.createNode(e, { type: E.ArrayPattern, decorators: [], elements: e.elements.map((d) => this.convertPattern(d)), optional: !1, typeAnnotation: void 0 }) : this.createNode(e, { type: E.ArrayExpression, elements: e.elements.map((d) => this.convertChild(d)) });
          case y.ObjectLiteralExpression: {
            if (this.allowPattern) return this.createNode(e, { type: E.ObjectPattern, decorators: [], optional: !1, properties: e.properties.map((S) => this.convertPattern(S)), typeAnnotation: void 0 });
            let d = [];
            for (let S of e.properties) (S.kind === y.GetAccessor || S.kind === y.SetAccessor || S.kind === y.MethodDeclaration) && !S.body && _e(this, ye, Kt).call(this, S.end - 1, "'{' expected."), d.push(this.convertChild(S));
            return this.createNode(e, { type: E.ObjectExpression, properties: d });
          }
          case y.PropertyAssignment: {
            let { exclamationToken: d, questionToken: S } = e;
            return S && _e(this, ye, Ie).call(this, S, "A property assignment cannot have a question token."), d && _e(this, ye, Ie).call(this, d, "A property assignment cannot have an exclamation token."), this.createNode(e, { type: E.Property, computed: hi(e.name), key: this.convertChild(e.name), kind: "init", method: !1, optional: !1, shorthand: !1, value: this.converter(e.initializer, e, this.allowPattern) });
          }
          case y.ShorthandPropertyAssignment: {
            let { exclamationToken: d, modifiers: S, questionToken: _ } = e;
            return S && _e(this, ye, Ie).call(this, S[0], "A shorthand property assignment cannot have modifiers."), _ && _e(this, ye, Ie).call(this, _, "A shorthand property assignment cannot have a question token."), d && _e(this, ye, Ie).call(this, d, "A shorthand property assignment cannot have an exclamation token."), e.objectAssignmentInitializer ? this.createNode(e, { type: E.Property, computed: !1, key: this.convertChild(e.name), kind: "init", method: !1, optional: !1, shorthand: !0, value: this.createNode(e, { type: E.AssignmentPattern, decorators: [], left: this.convertPattern(e.name), optional: !1, right: this.convertChild(e.objectAssignmentInitializer), typeAnnotation: void 0 }) }) : this.createNode(e, { type: E.Property, computed: !1, key: this.convertChild(e.name), kind: "init", method: !1, optional: !1, shorthand: !0, value: this.convertChild(e.name) });
          }
          case y.ComputedPropertyName:
            return this.convertChild(e.expression);
          case y.PropertyDeclaration: {
            let d = $e(y.AbstractKeyword, e);
            d && e.initializer && _e(this, ye, Ie).call(this, e.initializer, "Abstract property cannot have an initializer.");
            let S = $e(y.AccessorKeyword, e), _ = S ? d ? E.TSAbstractAccessorProperty : E.AccessorProperty : d ? E.TSAbstractPropertyDefinition : E.PropertyDefinition, v = this.convertChild(e.name);
            return this.createNode(e, { type: _, accessibility: Ia(e), computed: hi(e.name), declare: $e(y.DeclareKeyword, e), decorators: ((u = fi(e)) == null ? void 0 : u.map((F) => this.convertChild(F))) ?? [], definite: !!e.exclamationToken, key: v, optional: (v.type === E.Literal || e.name.kind === y.Identifier || e.name.kind === y.ComputedPropertyName || e.name.kind === y.PrivateIdentifier) && !!e.questionToken, override: $e(y.OverrideKeyword, e), readonly: $e(y.ReadonlyKeyword, e), static: $e(y.StaticKeyword, e), typeAnnotation: e.type && this.convertTypeAnnotation(e.type, e), value: d ? null : this.convertChild(e.initializer) });
          }
          case y.GetAccessor:
          case y.SetAccessor:
            if (e.parent.kind === y.InterfaceDeclaration || e.parent.kind === y.TypeLiteral) return this.convertMethodSignature(e);
          case y.MethodDeclaration: {
            let d = this.createNode(e, { type: e.body ? E.FunctionExpression : E.TSEmptyBodyFunctionExpression, range: [e.parameters.pos - 1, e.end], async: $e(y.AsyncKeyword, e), body: this.convertChild(e.body), declare: !1, expression: !1, generator: !!e.asteriskToken, id: null, params: [], returnType: e.type && this.convertTypeAnnotation(e.type, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
            d.typeParameters && this.fixParentLocation(d, d.typeParameters.range);
            let S;
            if (r.kind === y.ObjectLiteralExpression) d.params = e.parameters.map((_) => this.convertChild(_)), S = this.createNode(e, { type: E.Property, computed: hi(e.name), key: this.convertChild(e.name), kind: "init", method: e.kind === y.MethodDeclaration, optional: !!e.questionToken, shorthand: !1, value: d });
            else {
              d.params = this.convertParameters(e.parameters);
              let _ = $e(y.AbstractKeyword, e) ? E.TSAbstractMethodDefinition : E.MethodDefinition;
              S = this.createNode(e, { type: _, accessibility: Ia(e), computed: hi(e.name), decorators: ((h = fi(e)) == null ? void 0 : h.map((v) => this.convertChild(v))) ?? [], key: this.convertChild(e.name), kind: "method", optional: !!e.questionToken, override: $e(y.OverrideKeyword, e), static: $e(y.StaticKeyword, e), value: d });
            }
            return e.kind === y.GetAccessor ? S.kind = "get" : e.kind === y.SetAccessor ? S.kind = "set" : !S.static && e.name.kind === y.StringLiteral && e.name.text === "constructor" && S.type !== E.Property && (S.kind = "constructor"), S;
          }
          case y.Constructor: {
            let d = z4(e), S = (d && xn(d, e, this.ast)) ?? e.getFirstToken(), _ = this.createNode(e, { type: e.body ? E.FunctionExpression : E.TSEmptyBodyFunctionExpression, range: [e.parameters.pos - 1, e.end], async: !1, body: this.convertChild(e.body), declare: !1, expression: !1, generator: !1, id: null, params: this.convertParameters(e.parameters), returnType: e.type && this.convertTypeAnnotation(e.type, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
            _.typeParameters && this.fixParentLocation(_, _.typeParameters.range);
            let v = S.kind === y.StringLiteral ? this.createNode(S, { type: E.Literal, raw: S.getText(), value: "constructor" }) : this.createNode(e, { type: E.Identifier, range: [S.getStart(this.ast), S.end], decorators: [], name: "constructor", optional: !1, typeAnnotation: void 0 }), F = $e(y.StaticKeyword, e);
            return this.createNode(e, { type: $e(y.AbstractKeyword, e) ? E.TSAbstractMethodDefinition : E.MethodDefinition, accessibility: Ia(e), computed: !1, decorators: [], key: v, kind: F ? "method" : "constructor", optional: !1, override: !1, static: F, value: _ });
          }
          case y.FunctionExpression:
            return this.createNode(e, { type: E.FunctionExpression, async: $e(y.AsyncKeyword, e), body: this.convertChild(e.body), declare: !1, expression: !1, generator: !!e.asteriskToken, id: this.convertChild(e.name), params: this.convertParameters(e.parameters), returnType: e.type && this.convertTypeAnnotation(e.type, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
          case y.SuperKeyword:
            return this.createNode(e, { type: E.Super });
          case y.ArrayBindingPattern:
            return this.createNode(e, { type: E.ArrayPattern, decorators: [], elements: e.elements.map((d) => this.convertPattern(d)), optional: !1, typeAnnotation: void 0 });
          case y.OmittedExpression:
            return null;
          case y.ObjectBindingPattern:
            return this.createNode(e, { type: E.ObjectPattern, decorators: [], optional: !1, properties: e.elements.map((d) => this.convertPattern(d)), typeAnnotation: void 0 });
          case y.BindingElement: {
            if (r.kind === y.ArrayBindingPattern) {
              let S = this.convertChild(e.name, r);
              return e.initializer ? this.createNode(e, { type: E.AssignmentPattern, decorators: [], left: S, optional: !1, right: this.convertChild(e.initializer), typeAnnotation: void 0 }) : e.dotDotDotToken ? this.createNode(e, { type: E.RestElement, argument: S, decorators: [], optional: !1, typeAnnotation: void 0, value: void 0 }) : S;
            }
            let d;
            return e.dotDotDotToken ? d = this.createNode(e, { type: E.RestElement, argument: this.convertChild(e.propertyName ?? e.name), decorators: [], optional: !1, typeAnnotation: void 0, value: void 0 }) : d = this.createNode(e, { type: E.Property, computed: !!(e.propertyName && e.propertyName.kind === y.ComputedPropertyName), key: this.convertChild(e.propertyName ?? e.name), kind: "init", method: !1, optional: !1, shorthand: !e.propertyName, value: this.convertChild(e.name) }), e.initializer && (d.value = this.createNode(e, { type: E.AssignmentPattern, range: [e.name.getStart(this.ast), e.initializer.end], decorators: [], left: this.convertChild(e.name), optional: !1, right: this.convertChild(e.initializer), typeAnnotation: void 0 })), d;
          }
          case y.ArrowFunction:
            return this.createNode(e, { type: E.ArrowFunctionExpression, async: $e(y.AsyncKeyword, e), body: this.convertChild(e.body), expression: e.body.kind !== y.Block, generator: !1, id: null, params: this.convertParameters(e.parameters), returnType: e.type && this.convertTypeAnnotation(e.type, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
          case y.YieldExpression:
            return this.createNode(e, { type: E.YieldExpression, argument: this.convertChild(e.expression), delegate: !!e.asteriskToken });
          case y.AwaitExpression:
            return this.createNode(e, { type: E.AwaitExpression, argument: this.convertChild(e.expression) });
          case y.NoSubstitutionTemplateLiteral:
            return this.createNode(e, { type: E.TemplateLiteral, expressions: [], quasis: [this.createNode(e, { type: E.TemplateElement, tail: !0, value: { cooked: e.text, raw: this.ast.text.slice(e.getStart(this.ast) + 1, e.end - 1) } })] });
          case y.TemplateExpression: {
            let d = this.createNode(e, { type: E.TemplateLiteral, expressions: [], quasis: [this.convertChild(e.head)] });
            return e.templateSpans.forEach((S) => {
              d.expressions.push(this.convertChild(S.expression)), d.quasis.push(this.convertChild(S.literal));
            }), d;
          }
          case y.TaggedTemplateExpression:
            return this.createNode(e, { type: E.TaggedTemplateExpression, quasi: this.convertChild(e.template), tag: this.convertChild(e.tag), typeArguments: e.typeArguments && this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e) });
          case y.TemplateHead:
          case y.TemplateMiddle:
          case y.TemplateTail: {
            let d = e.kind === y.TemplateTail;
            return this.createNode(e, { type: E.TemplateElement, tail: d, value: { cooked: e.text, raw: this.ast.text.slice(e.getStart(this.ast) + 1, e.end - (d ? 1 : 2)) } });
          }
          case y.SpreadAssignment:
          case y.SpreadElement:
            return this.allowPattern ? this.createNode(e, { type: E.RestElement, argument: this.convertPattern(e.expression), decorators: [], optional: !1, typeAnnotation: void 0, value: void 0 }) : this.createNode(e, { type: E.SpreadElement, argument: this.convertChild(e.expression) });
          case y.Parameter: {
            let d, S;
            return e.dotDotDotToken ? d = S = this.createNode(e, { type: E.RestElement, argument: this.convertChild(e.name), decorators: [], optional: !1, typeAnnotation: void 0, value: void 0 }) : e.initializer ? (d = this.convertChild(e.name), S = this.createNode(e, { type: E.AssignmentPattern, range: [e.name.getStart(this.ast), e.initializer.end], decorators: [], left: d, optional: !1, right: this.convertChild(e.initializer), typeAnnotation: void 0 }), Tn(e) && (S.range[0] = d.range[0], S.loc = Fa(S.range, this.ast))) : d = S = this.convertChild(e.name, r), e.type && (d.typeAnnotation = this.convertTypeAnnotation(e.type, e), this.fixParentLocation(d, d.typeAnnotation.range)), e.questionToken && (e.questionToken.end > d.range[1] && (d.range[1] = e.questionToken.end, d.loc.end = $o(d.range[1], this.ast)), d.optional = !0), Tn(e) ? this.createNode(e, { type: E.TSParameterProperty, accessibility: Ia(e), decorators: [], override: $e(y.OverrideKeyword, e), parameter: S, readonly: $e(y.ReadonlyKeyword, e), static: $e(y.StaticKeyword, e) }) : S;
          }
          case y.ClassDeclaration:
            !e.name && (!$e(Fe.ExportKeyword, e) || !$e(Fe.DefaultKeyword, e)) && _e(this, ye, Kt).call(this, e, "A class declaration without the 'default' modifier must have a name.");
          case y.ClassExpression: {
            let d = e.heritageClauses ?? [], S = e.kind === y.ClassDeclaration ? E.ClassDeclaration : E.ClassExpression, _, v;
            for (let re of d) {
              let { token: ke, types: ge } = re;
              ge.length === 0 && _e(this, ye, Kt).call(this, re, `'${ct(ke)}' list cannot be empty.`), ke === y.ExtendsKeyword ? (_ && _e(this, ye, Kt).call(this, re, "'extends' clause already seen."), v && _e(this, ye, Kt).call(this, re, "'extends' clause must precede 'implements' clause."), ge.length > 1 && _e(this, ye, Kt).call(this, ge[1], "Classes can only extend a single class."), _ ?? (_ = re)) : ke === y.ImplementsKeyword && (v && _e(this, ye, Kt).call(this, re, "'implements' clause already seen."), v ?? (v = re));
            }
            let F = this.createNode(e, { type: S, abstract: $e(y.AbstractKeyword, e), body: this.createNode(e, { type: E.ClassBody, range: [e.members.pos - 1, e.end], body: e.members.filter(R4).map((re) => this.convertChild(re)) }), declare: $e(y.DeclareKeyword, e), decorators: ((T = fi(e)) == null ? void 0 : T.map((re) => this.convertChild(re))) ?? [], id: this.convertChild(e.name), implements: (v == null ? void 0 : v.types.map((re) => this.convertChild(re))) ?? [], superClass: _ != null && _.types[0] ? this.convertChild(_.types[0].expression) : null, superTypeArguments: void 0, typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
            return (w = _ == null ? void 0 : _.types[0]) != null && w.typeArguments && (F.superTypeArguments = this.convertTypeArgumentsToTypeParameterInstantiation(_.types[0].typeArguments, _.types[0])), this.fixExports(e, F);
          }
          case y.ModuleBlock:
            return this.createNode(e, { type: E.TSModuleBlock, body: this.convertBodyExpressions(e.statements, e) });
          case y.ImportDeclaration: {
            this.assertModuleSpecifier(e, !1);
            let d = this.createNode(e, _e(this, ye, gi).call(this, { type: E.ImportDeclaration, attributes: this.convertImportAttributes(e.attributes ?? e.assertClause), importKind: "value", source: this.convertChild(e.moduleSpecifier), specifiers: [] }, "assertions", "attributes", !0));
            if (e.importClause && (e.importClause.isTypeOnly && (d.importKind = "type"), e.importClause.name && d.specifiers.push(this.convertChild(e.importClause)), e.importClause.namedBindings)) switch (e.importClause.namedBindings.kind) {
              case y.NamespaceImport:
                d.specifiers.push(this.convertChild(e.importClause.namedBindings));
                break;
              case y.NamedImports:
                d.specifiers.push(...e.importClause.namedBindings.elements.map((S) => this.convertChild(S)));
                break;
            }
            return d;
          }
          case y.NamespaceImport:
            return this.createNode(e, { type: E.ImportNamespaceSpecifier, local: this.convertChild(e.name) });
          case y.ImportSpecifier:
            return this.createNode(e, { type: E.ImportSpecifier, imported: this.convertChild(e.propertyName ?? e.name), importKind: e.isTypeOnly ? "type" : "value", local: this.convertChild(e.name) });
          case y.ImportClause: {
            let d = this.convertChild(e.name);
            return this.createNode(e, { type: E.ImportDefaultSpecifier, range: d.range, local: d });
          }
          case y.ExportDeclaration:
            return ((N = e.exportClause) == null ? void 0 : N.kind) === y.NamedExports ? (this.assertModuleSpecifier(e, !0), this.createNode(e, _e(this, ye, gi).call(this, { type: E.ExportNamedDeclaration, attributes: this.convertImportAttributes(e.attributes ?? e.assertClause), declaration: null, exportKind: e.isTypeOnly ? "type" : "value", source: this.convertChild(e.moduleSpecifier), specifiers: e.exportClause.elements.map((d) => this.convertChild(d, e)) }, "assertions", "attributes", !0))) : (this.assertModuleSpecifier(e, !1), this.createNode(e, _e(this, ye, gi).call(this, { type: E.ExportAllDeclaration, attributes: this.convertImportAttributes(e.attributes ?? e.assertClause), exported: ((o = e.exportClause) == null ? void 0 : o.kind) === y.NamespaceExport ? this.convertChild(e.exportClause.name) : null, exportKind: e.isTypeOnly ? "type" : "value", source: this.convertChild(e.moduleSpecifier) }, "assertions", "attributes", !0)));
          case y.ExportSpecifier: {
            let d = e.propertyName ?? e.name;
            return d.kind === y.StringLiteral && r.kind === y.ExportDeclaration && (($ = r.moduleSpecifier) == null ? void 0 : $.kind) !== y.StringLiteral && _e(this, ye, Ie).call(this, d, "A string literal cannot be used as a local exported binding without `from`."), this.createNode(e, { type: E.ExportSpecifier, exported: this.convertChild(e.name), exportKind: e.isTypeOnly ? "type" : "value", local: this.convertChild(d) });
          }
          case y.ExportAssignment:
            return e.isExportEquals ? this.createNode(e, { type: E.TSExportAssignment, expression: this.convertChild(e.expression) }) : this.createNode(e, { type: E.ExportDefaultDeclaration, declaration: this.convertChild(e.expression), exportKind: "value" });
          case y.PrefixUnaryExpression:
          case y.PostfixUnaryExpression: {
            let d = ca(e.operator);
            return d === "++" || d === "--" ? (wd(e.operand) || _e(this, ye, Kt).call(this, e.operand, "Invalid left-hand side expression in unary operation"), this.createNode(e, { type: E.UpdateExpression, argument: this.convertChild(e.operand), operator: d, prefix: e.kind === y.PrefixUnaryExpression })) : this.createNode(e, { type: E.UnaryExpression, argument: this.convertChild(e.operand), operator: d, prefix: e.kind === y.PrefixUnaryExpression });
          }
          case y.DeleteExpression:
            return this.createNode(e, { type: E.UnaryExpression, argument: this.convertChild(e.expression), operator: "delete", prefix: !0 });
          case y.VoidExpression:
            return this.createNode(e, { type: E.UnaryExpression, argument: this.convertChild(e.expression), operator: "void", prefix: !0 });
          case y.TypeOfExpression:
            return this.createNode(e, { type: E.UnaryExpression, argument: this.convertChild(e.expression), operator: "typeof", prefix: !0 });
          case y.TypeOperator:
            return this.createNode(e, { type: E.TSTypeOperator, operator: ca(e.operator), typeAnnotation: this.convertChild(e.type) });
          case y.BinaryExpression: {
            if ($4(e.operatorToken)) {
              let S = this.createNode(e, { type: E.SequenceExpression, expressions: [] }), _ = this.convertChild(e.left);
              return _.type === E.SequenceExpression && e.left.kind !== y.ParenthesizedExpression ? S.expressions.push(..._.expressions) : S.expressions.push(_), S.expressions.push(this.convertChild(e.right)), S;
            }
            let d = V4(e.operatorToken);
            return this.allowPattern && d.type === E.AssignmentExpression ? this.createNode(e, { type: E.AssignmentPattern, decorators: [], left: this.convertPattern(e.left, e), optional: !1, right: this.convertChild(e.right), typeAnnotation: void 0 }) : this.createNode(e, { ...d, left: this.converter(e.left, e, d.type === E.AssignmentExpression), right: this.convertChild(e.right) });
          }
          case y.PropertyAccessExpression: {
            let d = this.convertChild(e.expression), S = this.convertChild(e.name), _ = this.createNode(e, { type: E.MemberExpression, computed: !1, object: d, optional: e.questionDotToken != null, property: S });
            return this.convertChainExpression(_, e);
          }
          case y.ElementAccessExpression: {
            let d = this.convertChild(e.expression), S = this.convertChild(e.argumentExpression), _ = this.createNode(e, { type: E.MemberExpression, computed: !0, object: d, optional: e.questionDotToken != null, property: S });
            return this.convertChainExpression(_, e);
          }
          case y.CallExpression: {
            if (e.expression.kind === y.ImportKeyword) return e.arguments.length !== 1 && e.arguments.length !== 2 && _e(this, ye, Kt).call(this, e.arguments[2] ?? e, "Dynamic import requires exactly one or two arguments."), this.createNode(e, _e(this, ye, gi).call(this, { type: E.ImportExpression, options: e.arguments[1] ? this.convertChild(e.arguments[1]) : null, source: this.convertChild(e.arguments[0]) }, "attributes", "options", !0));
            let d = this.convertChild(e.expression), S = e.arguments.map((F) => this.convertChild(F)), _ = e.typeArguments && this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e), v = this.createNode(e, { type: E.CallExpression, arguments: S, callee: d, optional: e.questionDotToken != null, typeArguments: _ });
            return this.convertChainExpression(v, e);
          }
          case y.NewExpression: {
            let d = e.typeArguments && this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e);
            return this.createNode(e, { type: E.NewExpression, arguments: e.arguments ? e.arguments.map((S) => this.convertChild(S)) : [], callee: this.convertChild(e.expression), typeArguments: d });
          }
          case y.ConditionalExpression:
            return this.createNode(e, { type: E.ConditionalExpression, alternate: this.convertChild(e.whenFalse), consequent: this.convertChild(e.whenTrue), test: this.convertChild(e.condition) });
          case y.MetaProperty:
            return this.createNode(e, { type: E.MetaProperty, meta: this.createNode(e.getFirstToken(), { type: E.Identifier, decorators: [], name: ca(e.keywordToken), optional: !1, typeAnnotation: void 0 }), property: this.convertChild(e.name) });
          case y.Decorator:
            return this.createNode(e, { type: E.Decorator, expression: this.convertChild(e.expression) });
          case y.StringLiteral:
            return this.createNode(e, { type: E.Literal, raw: e.getText(), value: r.kind === y.JsxAttribute ? hm(e.text) : e.text });
          case y.NumericLiteral:
            return this.createNode(e, { type: E.Literal, raw: e.getText(), value: Number(e.text) });
          case y.BigIntLiteral: {
            let d = mi(e, this.ast), S = this.ast.text.slice(d[0], d[1]), _ = Za(!1, S.slice(0, -1), "_", ""), v = typeof BigInt < "u" ? BigInt(_) : null;
            return this.createNode(e, { type: E.Literal, range: d, bigint: v == null ? _ : String(v), raw: S, value: v });
          }
          case y.RegularExpressionLiteral: {
            let d = e.text.slice(1, e.text.lastIndexOf("/")), S = e.text.slice(e.text.lastIndexOf("/") + 1), _ = null;
            try {
              _ = new RegExp(d, S);
            } catch {
            }
            return this.createNode(e, { type: E.Literal, raw: e.text, regex: { flags: S, pattern: d }, value: _ });
          }
          case y.TrueKeyword:
            return this.createNode(e, { type: E.Literal, raw: "true", value: !0 });
          case y.FalseKeyword:
            return this.createNode(e, { type: E.Literal, raw: "false", value: !1 });
          case y.NullKeyword:
            return this.createNode(e, { type: E.Literal, raw: "null", value: null });
          case y.EmptyStatement:
            return this.createNode(e, { type: E.EmptyStatement });
          case y.DebuggerStatement:
            return this.createNode(e, { type: E.DebuggerStatement });
          case y.JsxElement:
            return this.createNode(e, { type: E.JSXElement, children: e.children.map((d) => this.convertChild(d)), closingElement: this.convertChild(e.closingElement), openingElement: this.convertChild(e.openingElement) });
          case y.JsxFragment:
            return this.createNode(e, { type: E.JSXFragment, children: e.children.map((d) => this.convertChild(d)), closingFragment: this.convertChild(e.closingFragment), openingFragment: this.convertChild(e.openingFragment) });
          case y.JsxSelfClosingElement:
            return this.createNode(e, { type: E.JSXElement, children: [], closingElement: null, openingElement: this.createNode(e, { type: E.JSXOpeningElement, range: mi(e, this.ast), attributes: e.attributes.properties.map((d) => this.convertChild(d)), name: this.convertJSXTagName(e.tagName, e), selfClosing: !0, typeArguments: e.typeArguments ? this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e) : void 0 }) });
          case y.JsxOpeningElement:
            return this.createNode(e, { type: E.JSXOpeningElement, attributes: e.attributes.properties.map((d) => this.convertChild(d)), name: this.convertJSXTagName(e.tagName, e), selfClosing: !1, typeArguments: e.typeArguments && this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e) });
          case y.JsxClosingElement:
            return this.createNode(e, { type: E.JSXClosingElement, name: this.convertJSXTagName(e.tagName, e) });
          case y.JsxOpeningFragment:
            return this.createNode(e, { type: E.JSXOpeningFragment });
          case y.JsxClosingFragment:
            return this.createNode(e, { type: E.JSXClosingFragment });
          case y.JsxExpression: {
            let d = e.expression ? this.convertChild(e.expression) : this.createNode(e, { type: E.JSXEmptyExpression, range: [e.getStart(this.ast) + 1, e.getEnd() - 1] });
            return e.dotDotDotToken ? this.createNode(e, { type: E.JSXSpreadChild, expression: d }) : this.createNode(e, { type: E.JSXExpressionContainer, expression: d });
          }
          case y.JsxAttribute:
            return this.createNode(e, { type: E.JSXAttribute, name: this.convertJSXNamespaceOrIdentifier(e.name), value: this.convertChild(e.initializer) });
          case y.JsxText: {
            let d = e.getFullStart(), S = e.getEnd(), _ = this.ast.text.slice(d, S);
            return this.createNode(e, { type: E.JSXText, range: [d, S], raw: _, value: hm(_) });
          }
          case y.JsxSpreadAttribute:
            return this.createNode(e, { type: E.JSXSpreadAttribute, argument: this.convertChild(e.expression) });
          case y.QualifiedName:
            return this.createNode(e, { type: E.TSQualifiedName, left: this.convertChild(e.left), right: this.convertChild(e.right) });
          case y.TypeReference:
            return this.createNode(e, { type: E.TSTypeReference, typeArguments: e.typeArguments && this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e), typeName: this.convertChild(e.typeName) });
          case y.TypeParameter:
            return this.createNode(e, { type: E.TSTypeParameter, const: $e(y.ConstKeyword, e), constraint: e.constraint && this.convertChild(e.constraint), default: e.default ? this.convertChild(e.default) : void 0, in: $e(y.InKeyword, e), name: this.convertChild(e.name), out: $e(y.OutKeyword, e) });
          case y.ThisType:
            return this.createNode(e, { type: E.TSThisType });
          case y.AnyKeyword:
          case y.BigIntKeyword:
          case y.BooleanKeyword:
          case y.NeverKeyword:
          case y.NumberKeyword:
          case y.ObjectKeyword:
          case y.StringKeyword:
          case y.SymbolKeyword:
          case y.UnknownKeyword:
          case y.VoidKeyword:
          case y.UndefinedKeyword:
          case y.IntrinsicKeyword:
            return this.createNode(e, { type: E[`TS${y[e.kind]}`] });
          case y.NonNullExpression: {
            let d = this.createNode(e, { type: E.TSNonNullExpression, expression: this.convertChild(e.expression) });
            return this.convertChainExpression(d, e);
          }
          case y.TypeLiteral:
            return this.createNode(e, { type: E.TSTypeLiteral, members: e.members.map((d) => this.convertChild(d)) });
          case y.ArrayType:
            return this.createNode(e, { type: E.TSArrayType, elementType: this.convertChild(e.elementType) });
          case y.IndexedAccessType:
            return this.createNode(e, { type: E.TSIndexedAccessType, indexType: this.convertChild(e.indexType), objectType: this.convertChild(e.objectType) });
          case y.ConditionalType:
            return this.createNode(e, { type: E.TSConditionalType, checkType: this.convertChild(e.checkType), extendsType: this.convertChild(e.extendsType), falseType: this.convertChild(e.falseType), trueType: this.convertChild(e.trueType) });
          case y.TypeQuery:
            return this.createNode(e, { type: E.TSTypeQuery, exprName: this.convertChild(e.exprName), typeArguments: e.typeArguments && this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e) });
          case y.MappedType:
            return e.members && e.members.length > 0 && _e(this, ye, Kt).call(this, e.members[0], "A mapped type may not declare properties or methods."), this.createNode(e, _e(this, ye, Nd).call(this, { type: E.TSMappedType, constraint: this.convertChild(e.typeParameter.constraint), key: this.convertChild(e.typeParameter.name), nameType: this.convertChild(e.nameType) ?? null, optional: e.questionToken ? e.questionToken.kind === y.QuestionToken || ca(e.questionToken.kind) : !1, readonly: e.readonlyToken ? e.readonlyToken.kind === y.ReadonlyKeyword || ca(e.readonlyToken.kind) : void 0, typeAnnotation: e.type && this.convertChild(e.type) }, "typeParameter", "'constraint' and 'key'", this.convertChild(e.typeParameter)));
          case y.ParenthesizedExpression:
            return this.convertChild(e.expression, r);
          case y.TypeAliasDeclaration: {
            let d = this.createNode(e, { type: E.TSTypeAliasDeclaration, declare: $e(y.DeclareKeyword, e), id: this.convertChild(e.name), typeAnnotation: this.convertChild(e.type), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
            return this.fixExports(e, d);
          }
          case y.MethodSignature:
            return this.convertMethodSignature(e);
          case y.PropertySignature: {
            let { initializer: d } = e;
            return d && _e(this, ye, Ie).call(this, d, "A property signature cannot have an initializer."), this.createNode(e, { type: E.TSPropertySignature, accessibility: Ia(e), computed: hi(e.name), key: this.convertChild(e.name), optional: gm(e), readonly: $e(y.ReadonlyKeyword, e), static: $e(y.StaticKeyword, e), typeAnnotation: e.type && this.convertTypeAnnotation(e.type, e) });
          }
          case y.IndexSignature:
            return this.createNode(e, { type: E.TSIndexSignature, accessibility: Ia(e), parameters: e.parameters.map((d) => this.convertChild(d)), readonly: $e(y.ReadonlyKeyword, e), static: $e(y.StaticKeyword, e), typeAnnotation: e.type && this.convertTypeAnnotation(e.type, e) });
          case y.ConstructorType:
            return this.createNode(e, { type: E.TSConstructorType, abstract: $e(y.AbstractKeyword, e), params: this.convertParameters(e.parameters), returnType: e.type && this.convertTypeAnnotation(e.type, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
          case y.FunctionType: {
            let { modifiers: d } = e;
            d && _e(this, ye, Ie).call(this, d[0], "A function type cannot have modifiers.");
          }
          case y.ConstructSignature:
          case y.CallSignature: {
            let d = e.kind === y.ConstructSignature ? E.TSConstructSignatureDeclaration : e.kind === y.CallSignature ? E.TSCallSignatureDeclaration : E.TSFunctionType;
            return this.createNode(e, { type: d, params: this.convertParameters(e.parameters), returnType: e.type && this.convertTypeAnnotation(e.type, e), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
          }
          case y.ExpressionWithTypeArguments: {
            let d = r.kind, S = d === y.InterfaceDeclaration ? E.TSInterfaceHeritage : d === y.HeritageClause ? E.TSClassImplements : E.TSInstantiationExpression;
            return this.createNode(e, { type: S, expression: this.convertChild(e.expression), typeArguments: e.typeArguments && this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e) });
          }
          case y.InterfaceDeclaration: {
            let d = e.heritageClauses ?? [], S = [], _ = !1;
            for (let F of d) {
              F.token !== y.ExtendsKeyword && _e(this, ye, Ie).call(this, F, F.token === y.ImplementsKeyword ? "Interface declaration cannot have 'implements' clause." : "Unexpected token."), _ && _e(this, ye, Ie).call(this, F, "'extends' clause already seen."), _ = !0;
              for (let re of F.types) (!km(re.expression) || Ih(re.expression)) && _e(this, ye, Ie).call(this, re, "Interface declaration can only extend an identifier/qualified name with optional type arguments."), S.push(this.convertChild(re, e));
            }
            let v = this.createNode(e, { type: E.TSInterfaceDeclaration, body: this.createNode(e, { type: E.TSInterfaceBody, range: [e.members.pos - 1, e.end], body: e.members.map((F) => this.convertChild(F)) }), declare: $e(y.DeclareKeyword, e), extends: S, id: this.convertChild(e.name), typeParameters: e.typeParameters && this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) });
            return this.fixExports(e, v);
          }
          case y.TypePredicate: {
            let d = this.createNode(e, { type: E.TSTypePredicate, asserts: e.assertsModifier != null, parameterName: this.convertChild(e.parameterName), typeAnnotation: null });
            return e.type && (d.typeAnnotation = this.convertTypeAnnotation(e.type, e), d.typeAnnotation.loc = d.typeAnnotation.typeAnnotation.loc, d.typeAnnotation.range = d.typeAnnotation.typeAnnotation.range), d;
          }
          case y.ImportType: {
            let d = mi(e, this.ast);
            if (e.isTypeOf) {
              let v = xn(e.getFirstToken(), e, this.ast);
              d[0] = v.getStart(this.ast);
            }
            let S = null;
            if (e.attributes) {
              let v = this.createNode(e.attributes, { type: E.ObjectExpression, properties: e.attributes.elements.map((ae) => this.createNode(ae, { type: E.Property, computed: !1, key: this.convertChild(ae.name), kind: "init", method: !1, optional: !1, shorthand: !1, value: this.convertChild(ae.value) })) }), F = xn(e.argument, e, this.ast), re = xn(F, e, this.ast), ke = xn(e.attributes, e, this.ast), ge = xn(re, e, this.ast), he = mi(ge, this.ast), I = ge.kind === Fe.AssertKeyword ? "assert" : "with";
              S = this.createNode(e, { type: E.ObjectExpression, range: [re.getStart(this.ast), ke.end], properties: [this.createNode(e, { type: E.Property, range: [he[0], e.attributes.end], computed: !1, key: this.createNode(e, { type: E.Identifier, range: he, decorators: [], name: I, optional: !1, typeAnnotation: void 0 }), kind: "init", method: !1, optional: !1, shorthand: !1, value: v })] });
            }
            let _ = this.createNode(e, { type: E.TSImportType, range: d, argument: this.convertChild(e.argument), options: S, qualifier: this.convertChild(e.qualifier), typeArguments: e.typeArguments ? this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e) : null });
            return e.isTypeOf ? this.createNode(e, { type: E.TSTypeQuery, exprName: _, typeArguments: void 0 }) : _;
          }
          case y.EnumDeclaration: {
            let d = e.members.map((_) => this.convertChild(_)), S = this.createNode(e, _e(this, ye, Nd).call(this, { type: E.TSEnumDeclaration, body: this.createNode(e, { type: E.TSEnumBody, range: [e.members.pos - 1, e.end], members: d }), const: $e(y.ConstKeyword, e), declare: $e(y.DeclareKeyword, e), id: this.convertChild(e.name) }, "members", "'body.members'", e.members.map((_) => this.convertChild(_))));
            return this.fixExports(e, S);
          }
          case y.EnumMember:
            return this.createNode(e, { type: E.TSEnumMember, computed: e.name.kind === Fe.ComputedPropertyName, id: this.convertChild(e.name), initializer: e.initializer && this.convertChild(e.initializer) });
          case y.ModuleDeclaration: {
            let d = $e(y.DeclareKeyword, e), S = this.createNode(e, { type: E.TSModuleDeclaration, ...(() => {
              if (e.flags & Br.GlobalAugmentation) {
                let v = this.convertChild(e.name), F = this.convertChild(e.body);
                return (F == null || F.type === E.TSModuleDeclaration) && _e(this, ye, Kt).call(this, e.body ?? e, "Expected a valid module body"), v.type !== E.Identifier && _e(this, ye, Kt).call(this, e.name, "global module augmentation must have an Identifier id"), { body: F, declare: !1, global: !1, id: v, kind: "global" };
              }
              if (di(e.name)) {
                let v = this.convertChild(e.body);
                return { kind: "module", ...v != null ? { body: v } : {}, declare: !1, global: !1, id: this.convertChild(e.name) };
              }
              e.body == null && _e(this, ye, Kt).call(this, e, "Expected a module body"), e.name.kind !== Fe.Identifier && _e(this, ye, Kt).call(this, e.name, "`namespace`s must have an Identifier id");
              let _ = this.createNode(e.name, { type: E.Identifier, range: [e.name.getStart(this.ast), e.name.getEnd()], decorators: [], name: e.name.text, optional: !1, typeAnnotation: void 0 });
              for (; e.body && ls(e.body) && e.body.name; ) {
                e = e.body, d || (d = $e(y.DeclareKeyword, e));
                let v = e.name, F = this.createNode(v, { type: E.Identifier, range: [v.getStart(this.ast), v.getEnd()], decorators: [], name: v.text, optional: !1, typeAnnotation: void 0 });
                _ = this.createNode(v, { type: E.TSQualifiedName, range: [_.range[0], F.range[1]], left: _, right: F });
              }
              return { body: this.convertChild(e.body), declare: !1, global: !1, id: _, kind: e.flags & Br.Namespace ? "namespace" : "module" };
            })() });
            return S.declare = d, e.flags & Br.GlobalAugmentation && (S.global = !0), this.fixExports(e, S);
          }
          case y.ParenthesizedType:
            return this.convertChild(e.type);
          case y.UnionType:
            return this.createNode(e, { type: E.TSUnionType, types: e.types.map((d) => this.convertChild(d)) });
          case y.IntersectionType:
            return this.createNode(e, { type: E.TSIntersectionType, types: e.types.map((d) => this.convertChild(d)) });
          case y.AsExpression:
            return this.createNode(e, { type: E.TSAsExpression, expression: this.convertChild(e.expression), typeAnnotation: this.convertChild(e.type) });
          case y.InferType:
            return this.createNode(e, { type: E.TSInferType, typeParameter: this.convertChild(e.typeParameter) });
          case y.LiteralType:
            return e.literal.kind === y.NullKeyword ? this.createNode(e.literal, { type: E.TSNullKeyword }) : this.createNode(e, { type: E.TSLiteralType, literal: this.convertChild(e.literal) });
          case y.TypeAssertionExpression:
            return this.createNode(e, { type: E.TSTypeAssertion, expression: this.convertChild(e.expression), typeAnnotation: this.convertChild(e.type) });
          case y.ImportEqualsDeclaration:
            return this.fixExports(e, this.createNode(e, { type: E.TSImportEqualsDeclaration, id: this.convertChild(e.name), importKind: e.isTypeOnly ? "type" : "value", moduleReference: this.convertChild(e.moduleReference) }));
          case y.ExternalModuleReference:
            return e.expression.kind !== y.StringLiteral && _e(this, ye, Ie).call(this, e.expression, "String literal expected."), this.createNode(e, { type: E.TSExternalModuleReference, expression: this.convertChild(e.expression) });
          case y.NamespaceExportDeclaration:
            return this.createNode(e, { type: E.TSNamespaceExportDeclaration, id: this.convertChild(e.name) });
          case y.AbstractKeyword:
            return this.createNode(e, { type: E.TSAbstractKeyword });
          case y.TupleType: {
            let d = e.elements.map((S) => this.convertChild(S));
            return this.createNode(e, { type: E.TSTupleType, elementTypes: d });
          }
          case y.NamedTupleMember: {
            let d = this.createNode(e, { type: E.TSNamedTupleMember, elementType: this.convertChild(e.type, e), label: this.convertChild(e.name, e), optional: e.questionToken != null });
            return e.dotDotDotToken ? (d.range[0] = d.label.range[0], d.loc.start = d.label.loc.start, this.createNode(e, { type: E.TSRestType, typeAnnotation: d })) : d;
          }
          case y.OptionalType:
            return this.createNode(e, { type: E.TSOptionalType, typeAnnotation: this.convertChild(e.type) });
          case y.RestType:
            return this.createNode(e, { type: E.TSRestType, typeAnnotation: this.convertChild(e.type) });
          case y.TemplateLiteralType: {
            let d = this.createNode(e, { type: E.TSTemplateLiteralType, quasis: [this.convertChild(e.head)], types: [] });
            return e.templateSpans.forEach((S) => {
              d.types.push(this.convertChild(S.type)), d.quasis.push(this.convertChild(S.literal));
            }), d;
          }
          case y.ClassStaticBlockDeclaration:
            return this.createNode(e, { type: E.StaticBlock, body: this.convertBodyExpressions(e.body.statements, e) });
          case y.AssertEntry:
          case y.ImportAttribute:
            return this.createNode(e, { type: E.ImportAttribute, key: this.convertChild(e.name), value: this.convertChild(e.value) });
          case y.SatisfiesExpression:
            return this.createNode(e, { type: E.TSSatisfiesExpression, expression: this.convertChild(e.expression), typeAnnotation: this.convertChild(e.type) });
          default:
            return this.deeplyCopy(e);
        }
      }
      createNode(e, r) {
        let i = r;
        return i.range ?? (i.range = mi(e, this.ast)), i.loc ?? (i.loc = Fa(i.range, this.ast)), i && this.options.shouldPreserveNodeMaps && this.esTreeNodeToTSNodeMap.set(i, e), i;
      }
      convertProgram() {
        return this.converter(this.ast);
      }
      deeplyCopy(e) {
        e.kind === Fe.JSDocFunctionType && _e(this, ye, Ie).call(this, e, "JSDoc types can only be used inside documentation comments.");
        let r = `TS${y[e.kind]}`;
        if (this.options.errorOnUnknownASTType && !E[r]) throw new Error(`Unknown AST_NODE_TYPE: "${r}"`);
        let i = this.createNode(e, { type: r });
        "type" in e && (i.typeAnnotation = e.type && "kind" in e.type && $h(e.type) ? this.convertTypeAnnotation(e.type, e) : null), "typeArguments" in e && (i.typeArguments = e.typeArguments && "pos" in e.typeArguments ? this.convertTypeArgumentsToTypeParameterInstantiation(e.typeArguments, e) : null), "typeParameters" in e && (i.typeParameters = e.typeParameters && "pos" in e.typeParameters ? this.convertTSTypeParametersToTypeParametersDeclaration(e.typeParameters) : null);
        let u = fi(e);
        u != null && u.length && (i.decorators = u.map((T) => this.convertChild(T)));
        let h = /* @__PURE__ */ new Set(["_children", "decorators", "end", "flags", "heritageClauses", "illegalDecorators", "jsDoc", "kind", "locals", "localSymbol", "modifierFlagsCache", "modifiers", "nextContainer", "parent", "pos", "symbol", "transformFlags", "type", "typeArguments", "typeParameters"]);
        return Object.entries(e).filter(([T]) => !h.has(T)).forEach(([T, w]) => {
          Array.isArray(w) ? i[T] = w.map((N) => this.convertChild(N)) : w && typeof w == "object" && w.kind ? i[T] = this.convertChild(w) : i[T] = w;
        }), i;
      }
      fixExports(e, r) {
        let i = ls(e) && !di(e.name) ? h6(e) : Tn(e);
        if ((i == null ? void 0 : i[0].kind) === y.ExportKeyword) {
          this.registerTSNodeInNodeMap(e, r);
          let u = i[0], h = i[1], T = (h == null ? void 0 : h.kind) === y.DefaultKeyword, w = T ? xn(h, this.ast, this.ast) : xn(u, this.ast, this.ast);
          if (r.range[0] = w.getStart(this.ast), r.loc = Fa(r.range, this.ast), T) return this.createNode(e, { type: E.ExportDefaultDeclaration, range: [u.getStart(this.ast), r.range[1]], declaration: r, exportKind: "value" });
          let N = r.type === E.TSInterfaceDeclaration || r.type === E.TSTypeAliasDeclaration, o = "declare" in r && r.declare;
          return this.createNode(e, _e(this, ye, gi).call(this, { type: E.ExportNamedDeclaration, range: [u.getStart(this.ast), r.range[1]], attributes: [], declaration: r, exportKind: N || o ? "type" : "value", source: null, specifiers: [] }, "assertions", "attributes", !0));
        }
        return r;
      }
      getASTMaps() {
        return { esTreeNodeToTSNodeMap: this.esTreeNodeToTSNodeMap, tsNodeToESTreeNodeMap: this.tsNodeToESTreeNodeMap };
      }
      registerTSNodeInNodeMap(e, r) {
        r && this.options.shouldPreserveNodeMaps && !this.tsNodeToESTreeNodeMap.has(e) && this.tsNodeToESTreeNodeMap.set(e, r);
      }
    };
    ye = /* @__PURE__ */ new WeakSet(), Ad = function(e, r) {
      let i = r === Fe.ForInStatement ? "for...in" : "for...of";
      if (k_(e)) {
        e.declarations.length !== 1 && _e(this, ye, Ie).call(this, e, `Only a single variable declaration is allowed in a '${i}' statement.`);
        let u = e.declarations[0];
        u.initializer ? _e(this, ye, Ie).call(this, u, `The variable declaration of a '${i}' statement cannot have an initializer.`) : u.type && _e(this, ye, Ie).call(this, u, `The variable declaration of a '${i}' statement cannot have a type annotation.`), r === Fe.ForInStatement && e.flags & Br.Using && _e(this, ye, Ie).call(this, e, "The left-hand side of a 'for...in' statement cannot be a 'using' declaration.");
      } else !wd(e) && e.kind !== Fe.ObjectLiteralExpression && e.kind !== Fe.ArrayLiteralExpression && _e(this, ye, Ie).call(this, e, `The left-hand side of a '${i}' statement must be a variable or a property access.`);
    }, bm = function(e) {
      if (!this.options.allowInvalidAST) {
        a6(e) && _e(this, ye, Ie).call(this, e.illegalDecorators[0], "Decorators are not valid here.");
        for (let r of fi(e, !0) ?? []) m6(e) || (pd(e) && !xm(e.body) ? _e(this, ye, Ie).call(this, r, "A decorator can only decorate a method implementation, not an overload.") : _e(this, ye, Ie).call(this, r, "Decorators are not valid here."));
        for (let r of Tn(e, !0) ?? []) {
          if (r.kind !== y.ReadonlyKeyword && ((e.kind === y.PropertySignature || e.kind === y.MethodSignature) && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier cannot appear on a type member`), e.kind === y.IndexSignature && (r.kind !== y.StaticKeyword || !ai(e.parent)) && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier cannot appear on an index signature`)), r.kind !== y.InKeyword && r.kind !== y.OutKeyword && r.kind !== y.ConstKeyword && e.kind === y.TypeParameter && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier cannot appear on a type parameter`), (r.kind === y.InKeyword || r.kind === y.OutKeyword) && (e.kind !== y.TypeParameter || !(gd(e.parent) || ai(e.parent) || h2(e.parent))) && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier can only appear on a type parameter of a class, interface or type alias`), r.kind === y.ReadonlyKeyword && e.kind !== y.PropertyDeclaration && e.kind !== y.PropertySignature && e.kind !== y.IndexSignature && e.kind !== y.Parameter && _e(this, ye, Ie).call(this, r, "'readonly' modifier can only appear on a property declaration or index signature."), r.kind === y.DeclareKeyword && ai(e.parent) && !Bo(e) && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier cannot appear on class elements of this kind.`), r.kind === y.DeclareKeyword && jo(e)) {
            let i = Ed(e.declarationList);
            (i === "using" || i === "await using") && _e(this, ye, Ie).call(this, r, `'declare' modifier cannot appear on a '${i}' declaration.`);
          }
          if (r.kind === y.AbstractKeyword && e.kind !== y.ClassDeclaration && e.kind !== y.ConstructorType && e.kind !== y.MethodDeclaration && e.kind !== y.PropertyDeclaration && e.kind !== y.GetAccessor && e.kind !== y.SetAccessor && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier can only appear on a class, method, or property declaration.`), (r.kind === y.StaticKeyword || r.kind === y.PublicKeyword || r.kind === y.ProtectedKeyword || r.kind === y.PrivateKeyword) && (e.parent.kind === y.ModuleBlock || e.parent.kind === y.SourceFile) && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier cannot appear on a module or namespace element.`), r.kind === y.AccessorKeyword && e.kind !== y.PropertyDeclaration && _e(this, ye, Ie).call(this, r, "'accessor' modifier can only appear on a property declaration."), r.kind === y.AsyncKeyword && e.kind !== y.MethodDeclaration && e.kind !== y.FunctionDeclaration && e.kind !== y.FunctionExpression && e.kind !== y.ArrowFunction && _e(this, ye, Ie).call(this, r, "'async' modifier cannot be used here."), e.kind === y.Parameter && (r.kind === y.StaticKeyword || r.kind === y.ExportKeyword || r.kind === y.DeclareKeyword || r.kind === y.AsyncKeyword) && _e(this, ye, Ie).call(this, r, `'${ct(r.kind)}' modifier cannot appear on a parameter.`), r.kind === y.PublicKeyword || r.kind === y.ProtectedKeyword || r.kind === y.PrivateKeyword) for (let i of Tn(e) ?? []) i !== r && (i.kind === y.PublicKeyword || i.kind === y.ProtectedKeyword || i.kind === y.PrivateKeyword) && _e(this, ye, Ie).call(this, i, "Accessibility modifier already seen.");
          if (e.kind === y.Parameter && (r.kind === y.PublicKeyword || r.kind === y.PrivateKeyword || r.kind === y.ProtectedKeyword || r.kind === y.ReadonlyKeyword || r.kind === y.OverrideKeyword)) {
            let i = l6(e);
            i.kind === y.Constructor && xm(i.body) || _e(this, ye, Ie).call(this, r, "A parameter property is only allowed in a constructor implementation.");
          }
        }
      }
    }, Ie = function(e, r) {
      let i, u;
      throw typeof e == "number" ? i = u = e : (i = e.getStart(this.ast), u = e.getEnd()), _m(r, this.ast, i, u);
    }, Kt = function(e, r) {
      this.options.allowInvalidAST || _e(this, ye, Ie).call(this, e, r);
    }, gi = function(e, r, i, u = !1) {
      let h = u;
      return Object.defineProperty(e, r, { configurable: !0, get: this.options.suppressDeprecatedPropertyWarnings ? () => e[i] : () => (h || ((void 0)(`The '${r}' property is deprecated on ${e.type} nodes. Use '${i}' instead. See https://typescript-eslint.io/troubleshooting/faqs/general#the-key-property-is-deprecated-on-type-nodes-use-key-instead-warnings.`, "DeprecationWarning"), h = !0), e[i]), set(T) {
        Object.defineProperty(e, r, { enumerable: !0, value: T, writable: !0 });
      } }), e;
    }, Nd = function(e, r, i, u) {
      let h = !1;
      return Object.defineProperty(e, r, { configurable: !0, get: this.options.suppressDeprecatedPropertyWarnings ? () => u : () => (h || ((void 0)(`The '${r}' property is deprecated on ${e.type} nodes. Use ${i} instead. See https://typescript-eslint.io/troubleshooting/faqs/general#the-key-property-is-deprecated-on-type-nodes-use-key-instead-warnings.`, "DeprecationWarning"), h = !0), u), set(T) {
        Object.defineProperty(e, r, { enumerable: !0, value: T, writable: !0 });
      } }), e;
    };
    function T6(e, r, i = e.getSourceFile()) {
      let u = [];
      for (; ; ) {
        if (xf(e.kind)) r(e);
        else {
          let h = e.getChildren(i);
          if (h.length === 1) {
            e = h[0];
            continue;
          }
          for (let T = h.length - 1; T >= 0; --T) u.push(h[T]);
        }
        if (u.length === 0) break;
        e = u.pop();
      }
    }
    function x6(e, r, i = e.getSourceFile()) {
      let u = i.text, h = i.languageVariant !== J1.JSX;
      return T6(e, (w) => {
        if (w.pos !== w.end && (w.kind !== Fe.JsxText && eh(u, w.pos === 0 ? (sf(u) ?? "").length : w.pos, T), h || k6(w))) return th(u, w.end, T);
      }, i);
      function T(w, N, o) {
        r(u, { end: N, kind: o, pos: w });
      }
    }
    function k6(e) {
      switch (e.kind) {
        case Fe.CloseBraceToken:
          return e.parent.kind !== Fe.JsxExpression || !Dd(e.parent.parent);
        case Fe.GreaterThanToken:
          switch (e.parent.kind) {
            case Fe.JsxClosingElement:
            case Fe.JsxClosingFragment:
              return !Dd(e.parent.parent.parent);
            case Fe.JsxOpeningElement:
              return e.end !== e.parent.end;
            case Fe.JsxOpeningFragment:
              return !1;
            case Fe.JsxSelfClosingElement:
              return e.end !== e.parent.end || !Dd(e.parent.parent);
          }
      }
      return !0;
    }
    function Dd(e) {
      return e.kind === Fe.JsxElement || e.kind === Fe.JsxFragment;
    }
    var [b8, v8] = Qm.split(".").map((e) => Number.parseInt(e, 10));
    er.Intrinsic ?? er.Any | er.Unknown | er.String | er.Number | er.BigInt | er.Boolean | er.BooleanLiteral | er.ESSymbol | er.Void | er.Undefined | er.Null | er.Never | er.NonPrimitive;
    function b6(e, r) {
      let i = [];
      return x6(e, (u, h) => {
        let T = h.kind === Fe.SingleLineCommentTrivia ? Dt.Line : Dt.Block, w = [h.pos, h.end], N = Fa(w, e), o = w[0] + 2, $ = h.kind === Fe.SingleLineCommentTrivia ? w[1] - o : w[1] - o - 2;
        i.push({ type: T, loc: N, range: w, value: r.slice(o, o + $) });
      }, e), i;
    }
    var v6 = () => {
    };
    function S6(e, r, i) {
      let { parseDiagnostics: u } = e;
      if (u.length) throw g6(u[0]);
      let h = new _6(e, { allowInvalidAST: r.allowInvalidAST, errorOnUnknownASTType: r.errorOnUnknownASTType, shouldPreserveNodeMaps: i, suppressDeprecatedPropertyWarnings: r.suppressDeprecatedPropertyWarnings }), T = h.convertProgram();
      return (!r.range || !r.loc) && v6(), r.tokens && (T.tokens = r6(e)), r.comment && (T.comments = b6(e, r.codeFullText)), { astMaps: h.getASTMaps(), estree: T };
    }
    function vm(e) {
      if (typeof e != "object" || e == null) return !1;
      let r = e;
      return r.kind === Fe.SourceFile && typeof r.getFullText == "function";
    }
    var C6 = function(e) {
      return e && e.__esModule ? e : { default: e };
    }, E6 = C6({ extname: (e) => "." + e.split(".").pop() });
    function w6(e, r) {
      switch (E6.default.extname(e).toLowerCase()) {
        case Kr.Cjs:
        case Kr.Js:
        case Kr.Mjs:
          return On.JS;
        case Kr.Cts:
        case Kr.Mts:
        case Kr.Ts:
          return On.TS;
        case Kr.Json:
          return On.JSON;
        case Kr.Jsx:
          return On.JSX;
        case Kr.Tsx:
          return On.TSX;
        default:
          return r ? On.TSX : On.TS;
      }
    }
    var A6 = { default: b1 }, N6 = (0, A6.default)("typescript-eslint:typescript-estree:create-program:createSourceFile");
    function D6(e) {
      return N6("Getting AST without type information in %s mode for: %s", e.jsx ? "TSX" : "TS", e.filePath), vm(e.code) ? e.code : d4(e.filePath, e.codeFullText, { jsDocParsingMode: e.jsDocParsingMode, languageVersion: wl.Latest, setExternalModuleIndicator: e.setExternalModuleIndicator }, !0, w6(e.filePath, e.jsx));
    }
    var P6 = (e) => e, F6 = () => {
    }, I6 = class {
    }, L6 = () => !1, O6 = function(e) {
      return e && e.__esModule ? e : { default: e };
    }, M6 = {}, Pd = { default: b1 }, J6 = O6({ extname: (e) => "." + e.split(".").pop() }), B6 = (0, Pd.default)("typescript-eslint:typescript-estree:parseSettings:createParseSettings"), Sm, Fd = null, Cm, Em, wm, Am, hs = { ParseAll: (Cm = Hi) == null ? void 0 : Cm.ParseAll, ParseForTypeErrors: (Em = Hi) == null ? void 0 : Em.ParseForTypeErrors, ParseForTypeInfo: (wm = Hi) == null ? void 0 : wm.ParseForTypeInfo, ParseNone: (Am = Hi) == null ? void 0 : Am.ParseNone };
    function K6(e, r = {}) {
      var i;
      let u = U6(e), h = L6(), T = typeof r.tsconfigRootDir == "string" ? r.tsconfigRootDir : "/prettier-security-dirname-placeholder";
      r.loggerFn;
      let w = P6(typeof r.filePath == "string" && r.filePath !== "<input>" ? r.filePath : j6(r.jsx)), N = J6.default.extname(w).toLowerCase(), o = (() => {
        switch (r.jsDocParsingMode) {
          case "all":
            return hs.ParseAll;
          case "none":
            return hs.ParseNone;
          case "type-info":
            return hs.ParseForTypeInfo;
          default:
            return hs.ParseAll;
        }
      })(), $ = { loc: r.loc === !0, range: r.range === !0, allowInvalidAST: r.allowInvalidAST === !0, code: e, codeFullText: u, comment: r.comment === !0, comments: [], debugLevel: r.debugLevel === !0 ? /* @__PURE__ */ new Set(["typescript-eslint"]) : Array.isArray(r.debugLevel) ? new Set(r.debugLevel) : /* @__PURE__ */ new Set(), errorOnTypeScriptSyntacticAndSemanticIssues: !1, errorOnUnknownASTType: r.errorOnUnknownASTType === !0, extraFileExtensions: Array.isArray(r.extraFileExtensions) && r.extraFileExtensions.every((d) => typeof d == "string") ? r.extraFileExtensions : [], filePath: w, jsDocParsingMode: o, jsx: r.jsx === !0, log: typeof r.loggerFn == "function" ? r.loggerFn : r.loggerFn === !1 ? () => {
      } : console.log, preserveNodeMaps: r.preserveNodeMaps !== !1, programs: Array.isArray(r.programs) ? r.programs : null, projects: /* @__PURE__ */ new Map(), projectService: r.projectService || r.project && r.projectService !== !1 && (void 0).env.TYPESCRIPT_ESLINT_PROJECT_SERVICE === "true" ? q6(r.projectService, { jsDocParsingMode: o, tsconfigRootDir: T }) : void 0, setExternalModuleIndicator: r.sourceType === "module" || r.sourceType == null && N === Kr.Mjs || r.sourceType == null && N === Kr.Mts ? (d) => {
        d.externalModuleIndicator = !0;
      } : void 0, singleRun: h, suppressDeprecatedPropertyWarnings: r.suppressDeprecatedPropertyWarnings ?? !0, tokens: r.tokens === !0 ? [] : null, tsconfigMatchCache: Sm ?? (Sm = new I6(((i = r.cacheLifetime) == null ? void 0 : i.glob) ?? void 0)), tsconfigRootDir: T };
      if ($.debugLevel.size > 0) {
        let d = [];
        $.debugLevel.has("typescript-eslint") && d.push("typescript-eslint:*"), ($.debugLevel.has("eslint") || Pd.default.enabled("eslint:*,-eslint:code-path")) && d.push("eslint:*,-eslint:code-path"), Pd.default.enable(d.join(","));
      }
      if (Array.isArray(r.programs)) {
        if (!r.programs.length) throw new Error("You have set parserOptions.programs to an empty array. This will cause all files to not be found in existing programs. Either provide one or more existing TypeScript Program instances in the array, or remove the parserOptions.programs setting.");
        B6("parserOptions.programs was provided, so parserOptions.project will be ignored.");
      }
      return !$.programs && !$.projectService && ($.projects = /* @__PURE__ */ new Map()), r.jsDocParsingMode == null && $.projects.size === 0 && $.programs == null && $.projectService == null && ($.jsDocParsingMode = hs.ParseNone), $;
    }
    function U6(e) {
      return vm(e) ? e.getFullText(e) : typeof e == "string" ? e : String(e);
    }
    function j6(e) {
      return e ? "estree.tsx" : "estree.ts";
    }
    function q6(e, r) {
      let i = typeof e == "object" ? e : {};
      return F6(i.allowDefaultProject), Fd ?? (Fd = (0, M6.createProjectService)({ options: i, ...r })), Fd;
    }
    function R6(e, r) {
      let { ast: i } = z6(e, r, !1);
      return i;
    }
    function z6(e, r, i) {
      let u = K6(e, r);
      if (r != null && r.errorOnTypeScriptSyntacticAndSemanticIssues) throw new Error('"errorOnTypeScriptSyntacticAndSemanticIssues" is only supported for parseAndGenerateServices()');
      let h = D6(u), { astMaps: T, estree: w } = S6(h, u, i);
      return { ast: w, esTreeNodeToTSNodeMap: T.esTreeNodeToTSNodeMap, tsNodeToESTreeNodeMap: T.tsNodeToESTreeNodeMap };
    }
    function $6(e, r) {
      let i = new SyntaxError(e + " (" + r.loc.start.line + ":" + r.loc.start.column + ")");
      return Object.assign(i, r);
    }
    var G6 = $6;
    function W6(e) {
      let r = [];
      for (let i of e) try {
        return i();
      } catch (u) {
        r.push(u);
      }
      throw Object.assign(new Error("All combinations failed"), { errors: r });
    }
    var V6 = W6, H6 = (e, r, i) => {
      if (!(e && r == null)) {
        if (r.findLast) return r.findLast(i);
        for (let u = r.length - 1; u >= 0; u--) {
          let h = r[u];
          if (i(h, u, r)) return h;
        }
      }
    }, X6 = H6, Q6 = (e, r, i) => {
      if (!(e && r == null)) return Array.isArray(r) || typeof r == "string" ? r[i < 0 ? r.length + i : i] : r.at(i);
    }, Z6 = Q6, Y6 = new Proxy(() => {
    }, { get: () => Y6 });
    function Ur(e) {
      var r, i, u;
      let h = ((r = e.range) == null ? void 0 : r[0]) ?? e.start, T = (u = ((i = e.declaration) == null ? void 0 : i.decorators) ?? e.decorators) == null ? void 0 : u[0];
      return T ? Math.min(Ur(T), h) : h;
    }
    function xr(e) {
      var r;
      return ((r = e.range) == null ? void 0 : r[1]) ?? e.end;
    }
    function e3(e) {
      let r = new Set(e);
      return (i) => r.has(i == null ? void 0 : i.type);
    }
    var Id = e3;
    function t3(e, r, i) {
      let u = e.originalText.slice(r, i);
      for (let h of e[Symbol.for("comments")]) {
        let T = Ur(h);
        if (T > i) break;
        let w = xr(h);
        if (w < r) continue;
        let N = w - T;
        u = u.slice(0, T - r) + " ".repeat(N) + u.slice(w - r);
      }
      return u;
    }
    var r3 = t3, n3 = Id(["Block", "CommentBlock", "MultiLine"]), Ld = n3, a3 = Id(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose", "Hashbang", "InterpreterDirective"]), i3 = a3, Od = /* @__PURE__ */ new WeakMap();
    function s3(e) {
      return Od.has(e) || Od.set(e, Ld(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value)), Od.get(e);
    }
    var o3 = s3;
    function c3(e) {
      if (!Ld(e)) return !1;
      let r = `*${e.value}*`.split(`
`);
      return r.length > 1 && r.every((i) => i.trimStart()[0] === "*");
    }
    var Md = /* @__PURE__ */ new WeakMap();
    function u3(e) {
      return Md.has(e) || Md.set(e, c3(e)), Md.get(e);
    }
    var Nm = u3;
    function l3(e) {
      if (e.length < 2) return;
      let r;
      for (let i = e.length - 1; i >= 0; i--) {
        let u = e[i];
        if (r && xr(u) === Ur(r) && Nm(u) && Nm(r) && (e.splice(i + 1, 1), u.value += "*//*" + r.value, u.range = [Ur(u), xr(r)]), !i3(u) && !Ld(u)) throw new TypeError(`Unknown comment type: "${u.type}".`);
        r = u;
      }
    }
    var d3 = l3, gs = null;
    function ys(e) {
      if (gs !== null && typeof gs.property) {
        let r = gs;
        return gs = ys.prototype = null, r;
      }
      return gs = ys.prototype = e ?? /* @__PURE__ */ Object.create(null), new ys();
    }
    var p3 = 10;
    for (let e = 0; e <= p3; e++) ys();
    function f3(e) {
      return ys(e);
    }
    function m3(e, r = "type") {
      f3(e);
      function i(u) {
        let h = u[r], T = e[h];
        if (!Array.isArray(T)) throw Object.assign(new Error(`Missing visitor keys for '${h}'.`), { node: u });
        return T;
      }
      return i;
    }
    var h3 = m3, g3 = { ArrayExpression: ["elements"], AssignmentExpression: ["left", "right"], BinaryExpression: ["left", "right"], InterpreterDirective: [], Directive: ["value"], DirectiveLiteral: [], BlockStatement: ["directives", "body"], BreakStatement: ["label"], CallExpression: ["callee", "typeParameters", "typeArguments", "arguments"], CatchClause: ["param", "body"], ConditionalExpression: ["test", "consequent", "alternate"], ContinueStatement: ["label"], DebuggerStatement: [], DoWhileStatement: ["body", "test"], EmptyStatement: [], ExpressionStatement: ["expression"], File: ["program"], ForInStatement: ["left", "right", "body"], ForStatement: ["init", "test", "update", "body"], FunctionDeclaration: ["id", "typeParameters", "params", "predicate", "returnType", "body"], FunctionExpression: ["id", "typeParameters", "params", "returnType", "body"], Identifier: ["typeAnnotation", "decorators"], IfStatement: ["test", "consequent", "alternate"], LabeledStatement: ["label", "body"], StringLiteral: [], NumericLiteral: [], NullLiteral: [], BooleanLiteral: [], RegExpLiteral: [], LogicalExpression: ["left", "right"], MemberExpression: ["object", "property"], NewExpression: ["callee", "typeParameters", "typeArguments", "arguments"], Program: ["directives", "body"], ObjectExpression: ["properties"], ObjectMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectProperty: ["decorators", "key", "value"], RestElement: ["argument", "typeAnnotation", "decorators"], ReturnStatement: ["argument"], SequenceExpression: ["expressions"], ParenthesizedExpression: ["expression"], SwitchCase: ["test", "consequent"], SwitchStatement: ["discriminant", "cases"], ThisExpression: [], ThrowStatement: ["argument"], TryStatement: ["block", "handler", "finalizer"], UnaryExpression: ["argument"], UpdateExpression: ["argument"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id", "init"], WhileStatement: ["test", "body"], WithStatement: ["object", "body"], AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"], ArrayPattern: ["elements", "typeAnnotation", "decorators"], ArrowFunctionExpression: ["typeParameters", "params", "predicate", "returnType", "body"], ClassBody: ["body"], ClassExpression: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ClassDeclaration: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ExportAllDeclaration: ["source", "attributes", "exported"], ExportDefaultDeclaration: ["declaration"], ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"], ExportSpecifier: ["local", "exported"], ForOfStatement: ["left", "right", "body"], ImportDeclaration: ["specifiers", "source", "attributes"], ImportDefaultSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportSpecifier: ["imported", "local"], ImportExpression: ["source", "options"], MetaProperty: ["meta", "property"], ClassMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectPattern: ["decorators", "properties", "typeAnnotation"], SpreadElement: ["argument"], Super: [], TaggedTemplateExpression: ["tag", "typeParameters", "quasi", "typeArguments"], TemplateElement: [], TemplateLiteral: ["quasis", "expressions"], YieldExpression: ["argument"], AwaitExpression: ["argument"], BigIntLiteral: [], ExportNamespaceSpecifier: ["exported"], OptionalMemberExpression: ["object", "property"], OptionalCallExpression: ["callee", "typeParameters", "typeArguments", "arguments"], ClassProperty: ["decorators", "variance", "key", "typeAnnotation", "value"], ClassAccessorProperty: ["decorators", "key", "typeAnnotation", "value"], ClassPrivateProperty: ["decorators", "variance", "key", "typeAnnotation", "value"], ClassPrivateMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], PrivateName: ["id"], StaticBlock: ["body"], ImportAttribute: ["key", "value"], AnyTypeAnnotation: [], ArrayTypeAnnotation: ["elementType"], BooleanTypeAnnotation: [], BooleanLiteralTypeAnnotation: [], NullLiteralTypeAnnotation: [], ClassImplements: ["id", "typeParameters"], DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"], DeclareFunction: ["id", "predicate"], DeclareInterface: ["id", "typeParameters", "extends", "body"], DeclareModule: ["id", "body"], DeclareModuleExports: ["typeAnnotation"], DeclareTypeAlias: ["id", "typeParameters", "right"], DeclareOpaqueType: ["id", "typeParameters", "supertype"], DeclareVariable: ["id"], DeclareExportDeclaration: ["declaration", "specifiers", "source", "attributes"], DeclareExportAllDeclaration: ["source", "attributes"], DeclaredPredicate: ["value"], ExistsTypeAnnotation: [], FunctionTypeAnnotation: ["typeParameters", "this", "params", "rest", "returnType"], FunctionTypeParam: ["name", "typeAnnotation"], GenericTypeAnnotation: ["id", "typeParameters"], InferredPredicate: [], InterfaceExtends: ["id", "typeParameters"], InterfaceDeclaration: ["id", "typeParameters", "extends", "body"], InterfaceTypeAnnotation: ["extends", "body"], IntersectionTypeAnnotation: ["types"], MixedTypeAnnotation: [], EmptyTypeAnnotation: [], NullableTypeAnnotation: ["typeAnnotation"], NumberLiteralTypeAnnotation: [], NumberTypeAnnotation: [], ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"], ObjectTypeInternalSlot: ["id", "value"], ObjectTypeCallProperty: ["value"], ObjectTypeIndexer: ["variance", "id", "key", "value"], ObjectTypeProperty: ["key", "value", "variance"], ObjectTypeSpreadProperty: ["argument"], OpaqueType: ["id", "typeParameters", "supertype", "impltype"], QualifiedTypeIdentifier: ["qualification", "id"], StringLiteralTypeAnnotation: [], StringTypeAnnotation: [], SymbolTypeAnnotation: [], ThisTypeAnnotation: [], TupleTypeAnnotation: ["types", "elementTypes"], TypeofTypeAnnotation: ["argument", "typeArguments"], TypeAlias: ["id", "typeParameters", "right"], TypeAnnotation: ["typeAnnotation"], TypeCastExpression: ["expression", "typeAnnotation"], TypeParameter: ["bound", "default", "variance"], TypeParameterDeclaration: ["params"], TypeParameterInstantiation: ["params"], UnionTypeAnnotation: ["types"], Variance: [], VoidTypeAnnotation: [], EnumDeclaration: ["id", "body"], EnumBooleanBody: ["members"], EnumNumberBody: ["members"], EnumStringBody: ["members"], EnumSymbolBody: ["members"], EnumBooleanMember: ["id", "init"], EnumNumberMember: ["id", "init"], EnumStringMember: ["id", "init"], EnumDefaultedMember: ["id"], IndexedAccessType: ["objectType", "indexType"], OptionalIndexedAccessType: ["objectType", "indexType"], JSXAttribute: ["name", "value"], JSXClosingElement: ["name"], JSXElement: ["openingElement", "children", "closingElement"], JSXEmptyExpression: [], JSXExpressionContainer: ["expression"], JSXSpreadChild: ["expression"], JSXIdentifier: [], JSXMemberExpression: ["object", "property"], JSXNamespacedName: ["namespace", "name"], JSXOpeningElement: ["name", "typeParameters", "typeArguments", "attributes"], JSXSpreadAttribute: ["argument"], JSXText: [], JSXFragment: ["openingFragment", "children", "closingFragment"], JSXOpeningFragment: [], JSXClosingFragment: [], Noop: [], Placeholder: [], V8IntrinsicIdentifier: [], ArgumentPlaceholder: [], BindExpression: ["object", "callee"], Decorator: ["expression"], DoExpression: ["body"], ExportDefaultSpecifier: ["exported"], ModuleExpression: ["body"], TopicReference: [], PipelineTopicExpression: ["expression"], PipelineBareFunction: ["callee"], PipelinePrimaryTopicReference: [], TSParameterProperty: ["parameter", "decorators"], TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"], TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"], TSQualifiedName: ["left", "right"], TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSPropertySignature: ["key", "typeAnnotation"], TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSIndexSignature: ["parameters", "typeAnnotation"], TSAnyKeyword: [], TSBooleanKeyword: [], TSBigIntKeyword: [], TSIntrinsicKeyword: [], TSNeverKeyword: [], TSNullKeyword: [], TSNumberKeyword: [], TSObjectKeyword: [], TSStringKeyword: [], TSSymbolKeyword: [], TSUndefinedKeyword: [], TSUnknownKeyword: [], TSVoidKeyword: [], TSThisType: [], TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSTypeReference: ["typeName", "typeParameters", "typeArguments"], TSTypePredicate: ["parameterName", "typeAnnotation"], TSTypeQuery: ["exprName", "typeParameters", "typeArguments"], TSTypeLiteral: ["members"], TSArrayType: ["elementType"], TSTupleType: ["elementTypes"], TSOptionalType: ["typeAnnotation"], TSRestType: ["typeAnnotation"], TSNamedTupleMember: ["label", "elementType"], TSUnionType: ["types"], TSIntersectionType: ["types"], TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"], TSInferType: ["typeParameter"], TSParenthesizedType: ["typeAnnotation"], TSTypeOperator: ["typeAnnotation"], TSIndexedAccessType: ["objectType", "indexType"], TSMappedType: ["nameType", "typeAnnotation", "key", "constraint"], TSTemplateLiteralType: ["quasis", "types"], TSLiteralType: ["literal"], TSExpressionWithTypeArguments: ["expression", "typeParameters"], TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"], TSInterfaceBody: ["body"], TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"], TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"], TSAsExpression: ["expression", "typeAnnotation"], TSSatisfiesExpression: ["expression", "typeAnnotation"], TSTypeAssertion: ["typeAnnotation", "expression"], TSEnumBody: ["members"], TSEnumDeclaration: ["id", "body"], TSEnumMember: ["id", "initializer"], TSModuleDeclaration: ["id", "body"], TSModuleBlock: ["body"], TSImportType: ["argument", "options", "qualifier", "typeParameters", "typeArguments"], TSImportEqualsDeclaration: ["id", "moduleReference"], TSExternalModuleReference: ["expression"], TSNonNullExpression: ["expression"], TSExportAssignment: ["expression"], TSNamespaceExportDeclaration: ["id"], TSTypeAnnotation: ["typeAnnotation"], TSTypeParameterInstantiation: ["params"], TSTypeParameterDeclaration: ["params"], TSTypeParameter: ["constraint", "default", "name"], ChainExpression: ["expression"], ExperimentalRestProperty: ["argument"], ExperimentalSpreadProperty: ["argument"], Literal: [], MethodDefinition: ["decorators", "key", "value"], PrivateIdentifier: [], Property: ["key", "value"], PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"], AccessorProperty: ["decorators", "key", "typeAnnotation", "value"], TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"], TSAbstractKeyword: [], TSAbstractMethodDefinition: ["key", "value"], TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"], TSAsyncKeyword: [], TSClassImplements: ["expression", "typeArguments", "typeParameters"], TSDeclareKeyword: [], TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"], TSExportKeyword: [], TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"], TSPrivateKeyword: [], TSProtectedKeyword: [], TSPublicKeyword: [], TSReadonlyKeyword: [], TSStaticKeyword: [], AsConstExpression: ["expression"], AsExpression: ["expression", "typeAnnotation"], BigIntLiteralTypeAnnotation: [], BigIntTypeAnnotation: [], ComponentDeclaration: ["id", "params", "body", "typeParameters", "rendersType"], ComponentParameter: ["name", "local"], ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"], ComponentTypeParameter: ["name", "typeAnnotation"], ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"], DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"], DeclareEnum: ["id", "body"], DeclareHook: ["id"], DeclareNamespace: ["id", "body"], EnumBigIntBody: ["members"], EnumBigIntMember: ["id", "init"], HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"], HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"], InferTypeAnnotation: ["typeParameter"], KeyofTypeAnnotation: ["argument"], ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"], QualifiedTypeofIdentifier: ["qualification", "id"], TupleTypeLabeledElement: ["label", "elementType", "variance"], TupleTypeSpreadElement: ["label", "typeAnnotation"], TypeOperator: ["typeAnnotation"], TypePredicate: ["parameterName", "typeAnnotation", "asserts"], NGChainedExpression: ["expressions"], NGEmptyExpression: [], NGPipeExpression: ["left", "right", "arguments"], NGMicrosyntax: ["body"], NGMicrosyntaxAs: ["key", "alias"], NGMicrosyntaxExpression: ["expression", "alias"], NGMicrosyntaxKey: [], NGMicrosyntaxKeyedExpression: ["key", "expression"], NGMicrosyntaxLet: ["key", "value"], NGRoot: ["node"], JsExpressionRoot: ["node"], JsonRoot: ["node"], TSJSDocAllType: [], TSJSDocUnknownType: [], TSJSDocNullableType: ["typeAnnotation"], TSJSDocNonNullableType: ["typeAnnotation"], NeverTypeAnnotation: [], SatisfiesExpression: ["expression", "typeAnnotation"], UndefinedTypeAnnotation: [], UnknownTypeAnnotation: [] }, y3 = h3(g3), _3 = y3;
    function Jd(e, r) {
      if (!(e !== null && typeof e == "object")) return e;
      if (Array.isArray(e)) {
        for (let u = 0; u < e.length; u++) e[u] = Jd(e[u], r);
        return e;
      }
      let i = _3(e);
      for (let u = 0; u < i.length; u++) e[i[u]] = Jd(e[i[u]], r);
      return r(e) || e;
    }
    var T3 = Jd;
    Id(["RegExpLiteral", "BigIntLiteral", "NumericLiteral", "StringLiteral", "DirectiveLiteral", "Literal", "JSXText", "TemplateElement", "StringLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation"]);
    function x3(e, r) {
      let { parser: i, text: u } = r, { comments: h } = e, T = i === "oxc" && r.oxcAstType === "ts";
      d3(h);
      let w;
      e = T3(e, (o) => {
        switch (o.type) {
          case "ParenthesizedExpression": {
            let { expression: $ } = o, d = Ur(o);
            if ($.type === "TypeCastExpression") return $.range = [d, xr(o)], $;
            let S = !1;
            if (!T) {
              if (!w) {
                w = [];
                for (let v of h) o3(v) && w.push(xr(v));
              }
              let _ = X6(!1, w, (v) => v <= d);
              S = _ && u.slice(_, d).trim().length === 0;
            }
            if (!S) return $.extra = { ...$.extra, parenthesized: !0 }, $;
            break;
          }
          case "LogicalExpression":
            if (Pm(o)) return Bd(o);
            break;
          case "TemplateLiteral":
            if (o.expressions.length !== o.quasis.length - 1) throw new Error("Malformed template literal.");
            break;
          case "TemplateElement":
            if (i === "flow" || i === "hermes" || i === "espree" || i === "typescript" || T) {
              let $ = Ur(o) + 1, d = xr(o) - (o.tail ? 1 : 2);
              o.range = [$, d];
            }
            break;
          case "VariableDeclaration": {
            let $ = Z6(!1, o.declarations, -1);
            $ != null && $.init && u[xr($)] !== ";" && (o.range = [Ur(o), xr($)]);
            break;
          }
          case "TSParenthesizedType":
            return o.typeAnnotation;
          case "TSTypeParameter":
            Dm(o);
            break;
          case "TopicReference":
            e.extra = { ...e.extra, __isUsingHackPipeline: !0 };
            break;
          case "TSUnionType":
          case "TSIntersectionType":
            if (o.types.length === 1) return o.types[0];
            break;
          case "TSMappedType":
            if (!o.constraint && !o.key) {
              let { name: $, constraint: d } = Dm(o.typeParameter);
              o.constraint = d, o.key = $, delete o.typeParameter;
            }
            break;
          case "TSEnumDeclaration":
            if (!o.body) {
              let $ = xr(o.id), { members: d } = o, S = r3({ originalText: u, [Symbol.for("comments")]: h }, $, d[0] ? Ur(d[0]) : xr(o)), _ = $ + S.indexOf("{");
              o.body = { type: "TSEnumBody", members: d, range: [_, xr(o)] }, delete o.members;
            }
            break;
          case "ImportExpression":
            i === "hermes" && o.attributes && !o.options && (o.options = o.attributes);
            break;
        }
      });
      let N = e.type === "File" ? e.program : e;
      return N.interpreter && (h.unshift(N.interpreter), delete N.interpreter), T && e.hashbang && (h.unshift(e.hashbang), delete e.hashbang), e.type === "Program" && (e.range = [0, u.length]), e;
    }
    function Dm(e) {
      if (e.type === "TSTypeParameter" && typeof e.name == "string") {
        let r = Ur(e);
        e.name = { type: "Identifier", name: e.name, range: [r, r + e.name.length] };
      }
      return e;
    }
    function Pm(e) {
      return e.type === "LogicalExpression" && e.right.type === "LogicalExpression" && e.operator === e.right.operator;
    }
    function Bd(e) {
      return Pm(e) ? Bd({ type: "LogicalExpression", operator: e.operator, left: Bd({ type: "LogicalExpression", operator: e.operator, left: e.left, right: e.right.left, range: [Ur(e.left), xr(e.right.left)] }), right: e.right.right, range: [Ur(e), xr(e)] }) : e;
    }
    var k3 = x3, b3 = /\*\/$/, v3 = /^\/\*\*?/, S3 = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, C3 = /(^|\s+)\/\/([^\n\r]*)/g, Fm = /^(\r?\n)+/, E3 = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, Im = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, w3 = /(\r?\n|^) *\* ?/g, A3 = [];
    function N3(e) {
      let r = e.match(S3);
      return r ? r[0].trimStart() : "";
    }
    function D3(e) {
      let r = `
`;
      e = Za(!1, e.replace(v3, "").replace(b3, ""), w3, "$1");
      let i = "";
      for (; i !== e; ) i = e, e = Za(!1, e, E3, `${r}$1 $2${r}`);
      e = e.replace(Fm, "").trimEnd();
      let u = /* @__PURE__ */ Object.create(null), h = Za(!1, e, Im, "").replace(Fm, "").trimEnd(), T;
      for (; T = Im.exec(e); ) {
        let w = Za(!1, T[2], C3, "");
        if (typeof u[T[1]] == "string" || Array.isArray(u[T[1]])) {
          let N = u[T[1]];
          u[T[1]] = [...A3, ...Array.isArray(N) ? N : [N], w];
        } else u[T[1]] = w;
      }
      return { comments: h, pragmas: u };
    }
    var P3 = ["noformat", "noprettier"], F3 = ["format", "prettier"];
    function I3(e) {
      if (!e.startsWith("#!")) return "";
      let r = e.indexOf(`
`);
      return r === -1 ? e : e.slice(0, r);
    }
    var L3 = I3;
    function Lm(e) {
      let r = L3(e);
      r && (e = e.slice(r.length + 1));
      let i = N3(e), { pragmas: u, comments: h } = D3(i);
      return { shebang: r, text: e, pragmas: u, comments: h };
    }
    function O3(e) {
      let { pragmas: r } = Lm(e);
      return F3.some((i) => Object.prototype.hasOwnProperty.call(r, i));
    }
    function M3(e) {
      let { pragmas: r } = Lm(e);
      return P3.some((i) => Object.prototype.hasOwnProperty.call(r, i));
    }
    function J3(e) {
      return e = typeof e == "function" ? { parse: e } : e, { astFormat: "estree", hasPragma: O3, hasIgnorePragma: M3, locStart: Ur, locEnd: xr, ...e };
    }
    var B3 = J3, K3 = /^[^"'`]*<\/|^[^/]{2}.*\/>/mu;
    function U3(e) {
      return e.charAt(0) === "#" && e.charAt(1) === "!" ? "//" + e.slice(2) : e;
    }
    var j3 = U3, Om = "module", Mm = "script", q3 = [Om, Mm];
    function R3(e) {
      if (typeof e == "string") {
        if (e = e.toLowerCase(), /\.(?:mjs|mts)$/iu.test(e)) return Om;
        if (/\.(?:cjs|cts)$/iu.test(e)) return Mm;
      }
    }
    var z3 = { loc: !0, range: !0, comment: !0, tokens: !1, loggerFn: !1, project: !1, jsDocParsingMode: "none", suppressDeprecatedPropertyWarnings: !0 };
    function $3(e) {
      let { message: r, location: i } = e;
      if (!i) return e;
      let { start: u, end: h } = i;
      return G6(r, { loc: { start: { line: u.line, column: u.column + 1 }, end: { line: h.line, column: h.column + 1 } }, cause: e });
    }
    var G3 = (e) => e && /\.(?:js|mjs|cjs|jsx|ts|mts|cts|tsx)$/iu.test(e);
    function W3(e, r) {
      let i = [{ ...z3, filePath: r }], u = R3(r);
      if (u ? i = i.map((T) => ({ ...T, sourceType: u })) : i = q3.flatMap((T) => i.map((w) => ({ ...w, sourceType: T }))), G3(r)) return i;
      let h = K3.test(e);
      return [h, !h].flatMap((T) => i.map((w) => ({ ...w, jsx: T })));
    }
    function V3(e, r) {
      let i = r == null ? void 0 : r.filepath;
      typeof i != "string" && (i = void 0);
      let u = j3(e), h = W3(e, i), T;
      try {
        T = V6(h.map((w) => () => R6(u, w)));
      } catch ({ errors: [w] }) {
        throw $3(w);
      }
      return k3(T, { parser: "typescript", text: e });
    }
    var H3 = B3(V3);
    return Gm(x1);
  });
})(qm);
var Rm = qm.exports;
const k8 = /* @__PURE__ */ T8(Rm), E8 = /* @__PURE__ */ x8({
  __proto__: null,
  default: k8
}, [Rm]);
export {
  E8 as t
};
