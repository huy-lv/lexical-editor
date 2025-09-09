import { o as C, u as P, j as e, B as j, s as O, t as k, v as f } from "./index-C0aYvSXU.js";
import { l as I } from "./LexicalCollaborationContext.prod-DV6xOiZN.js";
import { mergeRegister as S } from "@lexical/utils";
import { $getSelection as b, CLICK_COMMAND as $, COMMAND_PRIORITY_LOW as R, $isNodeSelection as y, $getNodeByKey as D } from "lexical";
import { useMemo as E, useState as M, useRef as g, useEffect as V } from "react";
function A(o) {
  return o.reduce((s, l) => s + l.votes.length, 0);
}
function B({
  option: o,
  index: s,
  options: l,
  totalVotes: r,
  withPollNode: p
}) {
  const { clientID: a } = I(), _ = g(null), m = o.votes, N = m.indexOf(a) !== -1, c = m.length, x = o.text;
  return /* @__PURE__ */ e.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: f(
          "PollNode__optionCheckboxWrapper",
          N && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: _,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: (d) => {
              p((n) => {
                n.toggleVote(o, a);
              });
            },
            checked: N
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${c === 0 ? 0 : c / r * 100}%` }
        }
      ),
      /* @__PURE__ */ e.jsx("span", { className: "PollNode__optionInputVotesCount", children: c > 0 && (c === 1 ? "1 vote" : `${c} votes`) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "PollNode__optionInput",
          type: "text",
          value: x,
          onChange: (d) => {
            const n = d.target, t = n.value, i = n.selectionStart, u = n.selectionEnd;
            p(
              (v) => {
                v.setOptionText(o, t);
              },
              () => {
                n.selectionStart = i, n.selectionEnd = u;
              }
            );
          },
          placeholder: `Option ${s + 1}`
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        disabled: l.length < 3,
        className: f(
          "PollNode__optionDelete",
          l.length < 3 && "PollNode__optionDeleteDisabled"
        ),
        "aria-label": "Remove",
        onClick: () => {
          p((d) => {
            d.deleteOption(o);
          });
        }
      }
    )
  ] });
}
function U({
  question: o,
  options: s,
  nodeKey: l
}) {
  const [r] = C(), p = E(() => A(s), [s]), [a, _, m] = P(l), [h, N] = M(null), c = g(null);
  V(() => S(
    r.registerUpdateListener(({ editorState: t }) => {
      N(t.read(() => b()));
    }),
    r.registerCommand(
      $,
      (t) => {
        const i = t;
        return i.target === c.current ? (i.shiftKey || m(), _(!a), !0) : !1;
      },
      R
    )
  ), [m, r, a, l, _]);
  const x = (t, i) => {
    r.update(
      () => {
        const u = D(l);
        O(u) && t(u);
      },
      { onUpdate: i }
    );
  }, d = () => {
    x((t) => {
      t.addOption(k());
    });
  }, n = y(h) && a;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `PollNode__container ${n ? "focused" : ""}`,
      ref: c,
      children: /* @__PURE__ */ e.jsxs("div", { className: "PollNode__inner", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "PollNode__heading", children: o }),
        s.map((t, i) => {
          const u = t.uid;
          return /* @__PURE__ */ e.jsx(
            B,
            {
              withPollNode: x,
              option: t,
              index: i,
              options: s,
              totalVotes: p
            },
            u
          );
        }),
        /* @__PURE__ */ e.jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ e.jsx(j, { onClick: d, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  U as default
};
