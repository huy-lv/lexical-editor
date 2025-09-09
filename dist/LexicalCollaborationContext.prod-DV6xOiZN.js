import { useContext as l, createContext as t } from "react";
const g = [["Cat", "rgb(125, 50, 0)"], ["Dog", "rgb(100, 0, 0)"], ["Rabbit", "rgb(150, 0, 0)"], ["Frog", "rgb(200, 0, 0)"], ["Fox", "rgb(200, 75, 0)"], ["Hedgehog", "rgb(0, 75, 0)"], ["Pigeon", "rgb(0, 125, 0)"], ["Squirrel", "rgb(75, 100, 0)"], ["Bear", "rgb(125, 100, 0)"], ["Tiger", "rgb(0, 0, 150)"], ["Leopard", "rgb(0, 0, 200)"], ["Zebra", "rgb(0, 0, 250)"], ["Wolf", "rgb(0, 100, 150)"], ["Owl", "rgb(0, 100, 100)"], ["Gull", "rgb(100, 0, 100)"], ["Squid", "rgb(150, 0, 150)"]], b = g[Math.floor(Math.random() * g.length)], n = t({ clientID: 0, color: b[1], isCollabActive: !1, name: b[0], yjsDocMap: /* @__PURE__ */ new Map() });
function i(o, e) {
  const r = l(n);
  return o != null && (r.name = o), e != null && (r.color = e), r;
}
export {
  i as l
};
