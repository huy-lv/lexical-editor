import { o as W, x as _e, E as Ke, d as He, e as de, f as Fe, j as g, g as Ge, u as Ve, a as We, h as ze, i as Je, L as Ue, k as Ye, l as Qe, m as Ze, n as qe, p as Xe, q as me } from "./index-CzXsaai9.js";
import { o as et } from "./LexicalAutoFocusPlugin.prod-Cy-l9r8B.js";
import { l as tt } from "./LexicalCollaborationContext.prod-DV6xOiZN.js";
import { _ as nt } from "./LexicalCollaborationPlugin.prod-DmqrwtxA.js";
import { HashtagNode as he, $createHashtagNode as rt } from "@lexical/hashtag";
import { mergeRegister as X } from "@lexical/utils";
import * as ot from "react";
import ge, { useEffect as P, useCallback as K, useState as H, useRef as z, useLayoutEffect as at, useMemo as le, forwardRef as it, Suspense as lt } from "react";
import { h as st } from "./LexicalNestedComposer.prod-CFzYy_bw.js";
import { TextNode as ut, $getSelection as U, $isRangeSelection as Q, $isTextNode as ae, getDOMSelection as ct, COMMAND_PRIORITY_LOW as J, createCommand as se, KEY_ARROW_DOWN_COMMAND as dt, KEY_ARROW_UP_COMMAND as mt, KEY_ESCAPE_COMMAND as ke, KEY_TAB_COMMAND as ht, KEY_ENTER_COMMAND as Ae, $getRoot as gt, $isNodeSelection as Y, COMMAND_PRIORITY_CRITICAL as ft, $isElementNode as Me, $isParagraphNode as pt, $setSelection as fe, SELECTION_CHANGE_COMMAND as yt, CLICK_COMMAND as Ct, DRAGSTART_COMMAND as St, $getNodeByKey as pe } from "lexical";
import * as Tt from "react-dom";
import { $generateHtmlFromNodes as bt } from "@lexical/html";
import { $isLinkNode as xt } from "@lexical/link";
import { $isMarkNode as Nt } from "@lexical/mark";
import { $isTableSelection as vt } from "@lexical/table";
import { I as Et } from "./ImageResizer-ixi6K2fj.js";
function Le(e, t, n) {
  const [o] = W();
  P(() => X(..._e(o, e, t, n)), [n, o, e, t]);
}
const Rt = new RegExp(function() {
  const { alpha: e, alphanumeric: t, hashChars: n } = function() {
    const r = String.fromCharCode, u = "A-Za-zªµºÀ-ÖØ-öø-Ɂɐ-ˁˆ-ˑˠ-ˤˮͺΆΈ-ΊΌΎ-ΡΣ-ώϐ-ϵϷ-ҁҊ-ӎӐ-ӹԀ-ԏԱ-Ֆՙա-ևא-תװ-ײء-غـ-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ݭހ-ޥޱऄ-हऽॐक़-ॡॽঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹఅ-ఌఎ-ఐఒ-నప-ళవ-హౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹൠ-ൡඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཪྈ-ྋက-အဣ-ဧဩ-ဪၐ-ၕႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᴀ-ᶿḀ-ẛẠ-ỹἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℱℳ-ℹℼ-ℿⅅ-ⅉⰀ-Ⱞⰰ-ⱞⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄬㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-龻ꀀ-ꒌꠀ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜÀ-ÖØ-öø-ÿĀ-ɏɓ-ɔɖ-ɗəɛɣɨɯɲʉʋʻ̀-ͯḀ-ỿЀ-ӿԀ-ԧⷠ-ⷿꙀ-֑ꚟ-ֿׁ-ׂׄ-ׇׅא-תװ-״﬒-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﭏؐ-ؚؠ-ٟٮ-ۓە-ۜ۞-۪ۨ-ۯۺ-ۼۿݐ-ݿࢠࢢ-ࢬࣤ-ࣾﭐ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼ‌-‌ก-ฺเ-๎ᄀ-ᇿ㄰-ㆅꥠ-꥿가-힯ힰ-퟿ﾡ-ￜァ-ヺー-ヾｦ-ﾟ０-９Ａ-Ｚａ-ｚぁ-ゖ゙-ゞ㐀-䶿一-鿿" + r(173824) + "-" + r(177983) + r(177984) + "-" + r(178207) + r(194560) + "-" + r(195103) + "〃々〻";
    return { alpha: u, alphanumeric: u + "̀-ͯ҃-֑҆-ֹֻ-ֽֿׁ-ׂׄ-ׇׅؐ-ًؕ-ٰٞۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ްँ-ः़ा-्॑-॔ॢ-ॣঁ-ঃ়া-ৄে-ৈো-্ৗৢ-ৣਁ-ਃ਼ਾ-ੂੇ-ੈੋ-੍ੰ-ੱઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣଁ-ଃ଼ା-ୃେ-ୈୋ-୍ୖ-ୗஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕ-ౖಂ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕ-ೖം-ഃാ-ൃെ-ൈൊ-്ൗං-ඃ්ා-ුූෘ-ෟෲ-ෳัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-༹༙༵༷༾-༿ཱ-྄྆-྇ྐ-ྗྙ-ྼ࿆ာ-ဲံ-္ၖ-ၙ፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈ-ᧉᨗ-ᨛ᷀-᷃⃐-⃥⃜⃡-⃫〪-゙〯-゚ꠂ꠆ꠋꠣ-ꠧﬞ︀-️︠-︣0-9٠-٩۰-۹०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉០-៩᠐-᠙᥆-᥏᧐-᧙０-９_", hashChars: "#\\uFF03" };
  }(), o = "[" + t + "]";
  return "(" + ("^|$|[^&/" + t + "]") + ")(" + ("[" + n + "]") + ")(" + o + "*" + ("[" + e + "]") + o + "*)";
}(), "i");
function wt() {
  const [e] = W();
  P(() => {
    if (!e.hasNodes([he])) throw new Error("HashtagPlugin: HashtagNode not registered on editor");
  }, [e]);
  const t = K((o) => rt(o.getTextContent()), []), n = K((o) => {
    const r = Rt.exec(o);
    if (r === null) return null;
    const u = r[3].length + 1, s = r.index + r[1].length;
    return { end: s + u, start: s };
  }, []);
  return Le(n, he, t), null;
}
const kt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%203H2v18h20v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3zm-2%204v2h-2v2h2v2h-2v2h2v2h-2v2H4V5h14v2h2zm-6%202h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v-2h-2V9zM6%207h2v2H6V7z'%20fill='%23000000'/%3e%3c/svg%3e", ye = /* @__PURE__ */ new Map([
  [":)", ["emoji happysmile", "🙂"]],
  [":D", ["emoji veryhappysmile", "😀"]],
  [":(", ["emoji unhappysmile", "🙁"]],
  ["<3", ["emoji heart", "❤"]]
]);
function At(e) {
  const t = e.getTextContent();
  for (let n = 0; n < t.length; n++) {
    const o = ye.get(t[n]) || ye.get(t.slice(n, n + 2));
    if (o !== void 0) {
      const [r, u] = o;
      let s;
      n === 0 ? [s] = e.splitText(n + 2) : [, s] = e.splitText(n, n + 2);
      const f = He(r, u);
      return s.replace(f), f;
    }
  }
  return null;
}
function Mt(e) {
  let t = e;
  for (; t !== null; ) {
    if (!t.isSimpleText())
      return;
    t = At(t);
  }
}
function Lt(e) {
  P(() => {
    if (!e.hasNodes([Ke]))
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    return e.registerNodeTransform(ut, Mt);
  }, [e]);
}
function jt() {
  const [e] = W();
  return Lt(e), null;
}
const Ot = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function Dt() {
  const [e] = W();
  P(() => {
    if (!e.hasNodes([de]))
      throw new Error("KeywordsPlugin: KeywordNode not registered on editor");
  }, [e]);
  const t = K((o) => Fe(o.getTextContent()), []), n = K((o) => {
    const r = Ot.exec(o);
    if (r === null)
      return null;
    const u = r[2].length, s = r.index + r[1].length;
    return {
      end: s + u,
      start: s
    };
  }, []);
  return Le(
    n,
    de,
    t
  ), null;
}
const Ce = "startTransition", ie = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Bt = ie ? at : P;
class $t {
  constructor(t) {
    this.key = t, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(t) {
    this.ref = { current: t };
  }
}
const Se = (e) => {
  const t = document.getElementById("typeahead-menu");
  if (!t) return;
  const n = t.getBoundingClientRect();
  n.top + n.height > window.innerHeight && t.scrollIntoView({ block: "center" }), n.top < 0 && t.scrollIntoView({ block: "center" }), e.scrollIntoView({ block: "nearest" });
};
function Te(e, t) {
  const n = e.getBoundingClientRect(), o = t.getBoundingClientRect();
  return n.top > o.top && n.top < o.bottom;
}
function Pt(e, t, n, o) {
  const [r] = W();
  P(() => {
    if (t != null && e != null) {
      const u = r.getRootElement(), s = u != null ? function(S, l) {
        let i = getComputedStyle(S);
        const y = i.position === "absolute", d = /(auto|scroll)/;
        if (i.position === "fixed") return document.body;
        for (let c = S; c = c.parentElement; ) if (i = getComputedStyle(c), (!y || i.position !== "static") && d.test(i.overflow + i.overflowY + i.overflowX)) return c;
        return document.body;
      }(u) : document.body;
      let f = !1, m = Te(t, s);
      const C = function() {
        f || (window.requestAnimationFrame(function() {
          n(), f = !1;
        }), f = !0);
        const S = Te(t, s);
        S !== m && (m = S, o != null && o(S));
      }, h = new ResizeObserver(n);
      return window.addEventListener("resize", n), document.addEventListener("scroll", C, { capture: !0, passive: !0 }), h.observe(t), () => {
        h.unobserve(t), window.removeEventListener("resize", n), document.removeEventListener("scroll", C, !0);
      };
    }
  }, [t, r, o, n, e]);
}
const be = se("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function It({ close: e, editor: t, anchorElementRef: n, resolution: o, options: r, menuRenderFn: u, onSelectOption: s, shouldSplitNodeWithQuery: f = !1, commandPriority: m = J, preselectFirstItem: C = !0 }) {
  const [h, S] = H(null), l = o.match && o.match.matchingString;
  P(() => {
    C && S(0);
  }, [l, C]);
  const i = K((d) => {
    t.update(() => {
      const c = o.match != null && f ? function(x) {
        const a = U();
        if (!Q(a) || !a.isCollapsed()) return null;
        const M = a.anchor;
        if (M.type !== "text") return null;
        const b = M.getNode();
        if (!b.isSimpleText()) return null;
        const j = M.offset, N = b.getTextContent().slice(0, j), k = x.replaceableString.length, v = j - function(R, B, L) {
          let T = L;
          for (let O = T; O <= B.length; O++) R.slice(-O) === B.substring(0, O) && (T = O);
          return T;
        }(N, x.matchingString, k);
        if (v < 0) return null;
        let p;
        return v === 0 ? [p] = b.splitText(j) : [, p] = b.splitText(v, j), p;
      }(o.match) : null;
      s(d, c, e, o.match ? o.match.matchingString : "");
    });
  }, [t, f, o.match, s, e]), y = K((d) => {
    const c = t.getRootElement();
    c !== null && (c.setAttribute("aria-activedescendant", "typeahead-item-" + d), S(d));
  }, [t]);
  return P(() => () => {
    const d = t.getRootElement();
    d !== null && d.removeAttribute("aria-activedescendant");
  }, [t]), Bt(() => {
    r === null ? S(null) : h === null && C && y(0);
  }, [r, h, y, C]), P(() => X(t.registerCommand(be, ({ option: d }) => !(!d.ref || d.ref.current == null) && (Se(d.ref.current), !0), m)), [t, y, m]), P(() => X(t.registerCommand(dt, (d) => {
    const c = d;
    if (r !== null && r.length) {
      const x = h === null ? 0 : h !== r.length - 1 ? h + 1 : 0;
      y(x);
      const a = r[x];
      a.ref != null && a.ref.current && t.dispatchCommand(be, { index: x, option: a }), c.preventDefault(), c.stopImmediatePropagation();
    }
    return !0;
  }, m), t.registerCommand(mt, (d) => {
    const c = d;
    if (r !== null && r.length) {
      const x = h === null ? r.length - 1 : h !== 0 ? h - 1 : r.length - 1;
      y(x);
      const a = r[x];
      a.ref != null && a.ref.current && Se(a.ref.current), c.preventDefault(), c.stopImmediatePropagation();
    }
    return !0;
  }, m), t.registerCommand(ke, (d) => {
    const c = d;
    return c.preventDefault(), c.stopImmediatePropagation(), e(), !0;
  }, m), t.registerCommand(ht, (d) => {
    const c = d;
    return r !== null && h !== null && r[h] != null && (c.preventDefault(), c.stopImmediatePropagation(), i(r[h]), !0);
  }, m), t.registerCommand(Ae, (d) => r !== null && h !== null && r[h] != null && (d !== null && (d.preventDefault(), d.stopImmediatePropagation()), i(r[h]), !0), m)), [i, e, t, r, h, y, m]), u(n, le(() => ({ options: r, selectOptionAndCleanUp: i, selectedIndex: h, setHighlightedIndex: S }), [i, h, r]), o.match ? o.match.matchingString : "");
}
function xe(e, t) {
  t != null && (e.className = t), e.setAttribute("aria-label", "Typeahead menu"), e.setAttribute("role", "listbox"), e.style.display = "block", e.style.position = "absolute";
}
const _t = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
se("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function Kt(e, { minLength: t = 1, maxLength: n = 75, punctuation: o = _t, allowWhitespace: r = !1 }) {
  return K((u) => {
    const s = new RegExp("(^|\\s|\\()([" + e + "]((?:" + ("[^" + e + o + (r ? "" : "\\s") + "]") + "){0," + n + "}))$").exec(u);
    if (s !== null) {
      const f = s[1], m = s[3];
      if (m.length >= t) return { leadOffset: s.index + f.length, matchingString: m, replaceableString: s[2] };
    }
    return null;
  }, [r, e, o, n, t]);
}
function Ht({ options: e, onQueryChange: t, onSelectOption: n, onOpen: o, onClose: r, menuRenderFn: u, triggerFn: s, anchorClassName: f, commandPriority: m = J, parent: C, preselectFirstItem: h = !0, ignoreEntityBoundary: S = !1 }) {
  const [l] = W(), [i, y] = H(null), d = function(a, M, b, j = ie ? document.body : void 0, N = !0) {
    const [k] = W(), v = ie ? document.createElement("div") : null, p = z(v), R = K(() => {
      if (p.current === null || j === void 0) return;
      p.current.style.top = p.current.style.bottom;
      const L = k.getRootElement(), T = p.current, O = T.firstChild;
      if (L !== null && a !== null) {
        const { left: G, top: I, width: _, height: D } = a.getRect(), $ = p.current.offsetHeight;
        if (T.style.top = `${I + $ + 3 + (N ? window.pageYOffset : 0)}px`, T.style.left = `${G + window.pageXOffset}px`, T.style.height = `${D}px`, T.style.width = `${_}px`, O !== null) {
          O.style.top = `${I}`;
          const w = O.getBoundingClientRect(), E = w.height, A = w.width, F = L.getBoundingClientRect();
          G + A > F.right && (T.style.left = `${F.right - A + window.pageXOffset}px`), (I + E > window.innerHeight || I + E > F.bottom) && I - F.top > E + D && (T.style.top = `${I - E - D + (N ? window.pageYOffset : 0)}px`);
        }
        T.isConnected || (xe(T, b), j.append(T)), T.setAttribute("id", "typeahead-menu"), L.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [k, a, N, b, j]);
    P(() => {
      const L = k.getRootElement();
      return a !== null && R(), () => {
        L !== null && L.removeAttribute("aria-controls");
        const T = p.current;
        T !== null && T.isConnected && (T.remove(), T.removeAttribute("id"));
      };
    }, [k, R, a]);
    const B = K((L) => {
      a !== null && (L || M(null));
    }, [a, M]);
    return Pt(a, p.current, R, B), v != null && v === p.current && (xe(v, b), j != null && j.append(v)), p;
  }(i, y, f, C), c = K(() => {
    y(null), r != null && i !== null && r();
  }, [r, i]), x = K((a) => {
    y(a), o != null && i === null && o(a);
  }, [o, i]);
  return P(() => {
    const a = l.registerUpdateListener(() => {
      l.getEditorState().read(() => {
        if (!l.isEditable()) return void c();
        const M = l._window || window, b = M.document.createRange(), j = U(), N = function(p) {
          let R = null;
          return p.getEditorState().read(() => {
            const B = U();
            Q(B) && (R = function(L) {
              const T = L.anchor;
              if (T.type !== "text") return null;
              const O = T.getNode();
              if (!O.isSimpleText()) return null;
              const G = T.offset;
              return O.getTextContent().slice(0, G);
            }(B));
          }), R;
        }(l);
        if (!Q(j) || !j.isCollapsed() || N === null || b === null) return void c();
        const k = s(N, l);
        if (t(k ? k.matchingString : null), k !== null && (S || !function(p, R) {
          return R === 0 && p.getEditorState().read(() => {
            const B = U();
            if (Q(B)) {
              const L = B.anchor.getNode().getPreviousSibling();
              return ae(L) && L.isTextEntity();
            }
            return !1;
          });
        }(l, k.leadOffset)) && function(R, B, L) {
          const T = ct(L);
          if (T === null || !T.isCollapsed) return !1;
          const O = T.anchorNode, G = R, I = T.anchorOffset;
          if (O == null || I == null) return !1;
          try {
            B.setStart(O, G), B.setEnd(O, I);
          } catch {
            return !1;
          }
          return !0;
        }(k.leadOffset, b, M) !== null)
          return v = () => x({ getRect: () => b.getBoundingClientRect(), match: k }), void (Ce in ge ? ge[Ce](v) : v());
        var v;
        c();
      });
    });
    return () => {
      a();
    };
  }, [l, s, t, i, c, x, S]), P(() => l.registerEditableListener((a) => {
    a || c();
  }), [l, c]), i === null || l === null || d.current === null ? null : g.jsx(It, { close: c, resolution: i, editor: l, anchorElementRef: d, options: e, menuRenderFn: u, shouldSplitNodeWithQuery: !0, onSelectOption: n, commandPriority: m, preselectFirstItem: h });
}
const Ft = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, Gt = {
  PUNCTUATION: Ft
}, je = Gt.PUNCTUATION, ue = ["@"].join(""), Oe = "[^" + ue + je + "\\s]", Vt = "(?:\\.[ |$]| |[" + je + "]|)", Wt = 75, zt = new RegExp(
  "(^|\\s|\\()([" + ue + "]((?:" + Oe + Vt + "){0," + Wt + "}))$"
), Jt = 50, Ut = new RegExp(
  "(^|\\s|\\()([" + ue + "]((?:" + Oe + "){0," + Jt + "}))$"
), Yt = 5, re = /* @__PURE__ */ new Map(), Qt = [
  "Aayla Secura",
  "Adi Gallia",
  "Admiral Dodd Rancit",
  "Admiral Firmus Piett",
  "Admiral Gial Ackbar",
  "Admiral Ozzel",
  "Admiral Raddus",
  "Admiral Terrinald Screed",
  "Admiral Trench",
  "Admiral U.O. Statura",
  "Agen Kolar",
  "Agent Kallus",
  "Aiolin and Morit Astarte",
  "Aks Moe",
  "Almec",
  "Alton Kastle",
  "Amee",
  "AP-5",
  "Armitage Hux",
  "Artoo",
  "Arvel Crynyd",
  "Asajj Ventress",
  "Aurra Sing",
  "AZI-3",
  "Bala-Tik",
  "Barada",
  "Bargwill Tomder",
  "Baron Papanoida",
  "Barriss Offee",
  "Baze Malbus",
  "Bazine Netal",
  "BB-8",
  "BB-9E",
  "Ben Quadinaros",
  "Berch Teller",
  "Beru Lars",
  "Bib Fortuna",
  "Biggs Darklighter",
  "Black Krrsantan",
  "Bo-Katan Kryze",
  "Boba Fett",
  "Bobbajo",
  "Bodhi Rook",
  "Borvo the Hutt",
  "Boss Nass",
  "Bossk",
  "Breha Antilles-Organa",
  "Bren Derlin",
  "Brendol Hux",
  "BT-1",
  "C-3PO",
  "C1-10P",
  "Cad Bane",
  "Caluan Ematt",
  "Captain Gregor",
  "Captain Phasma",
  "Captain Quarsh Panaka",
  "Captain Rex",
  "Carlist Rieekan",
  "Casca Panzoro",
  "Cassian Andor",
  "Cassio Tagge",
  "Cham Syndulla",
  "Che Amanwe Papanoida",
  "Chewbacca",
  "Chi Eekway Papanoida",
  "Chief Chirpa",
  "Chirrut Îmwe",
  "Ciena Ree",
  "Cin Drallig",
  "Clegg Holdfast",
  "Cliegg Lars",
  "Coleman Kcaj",
  "Coleman Trebor",
  "Colonel Kaplan",
  "Commander Bly",
  "Commander Cody (CC-2224)",
  "Commander Fil (CC-3714)",
  "Commander Fox",
  "Commander Gree",
  "Commander Jet",
  "Commander Wolffe",
  "Conan Antonio Motti",
  "Conder Kyl",
  "Constable Zuvio",
  "Cordé",
  "Cpatain Typho",
  "Crix Madine",
  "Cut Lawquane",
  "Dak Ralter",
  "Dapp",
  "Darth Bane",
  "Darth Maul",
  "Darth Tyranus",
  "Daultay Dofine",
  "Del Meeko",
  "Delian Mors",
  "Dengar",
  "Depa Billaba",
  "Derek Klivian",
  "Dexter Jettster",
  "Dineé Ellberger",
  "DJ",
  "Doctor Aphra",
  "Doctor Evazan",
  "Dogma",
  "Dormé",
  "Dr. Cylo",
  "Droidbait",
  "Droopy McCool",
  "Dryden Vos",
  "Dud Bolt",
  "Ebe E. Endocott",
  "Echuu Shen-Jon",
  "Eeth Koth",
  "Eighth Brother",
  "Eirtaé",
  "Eli Vanto",
  "Ellé",
  "Ello Asty",
  "Embo",
  "Eneb Ray",
  "Enfys Nest",
  "EV-9D9",
  "Evaan Verlaine",
  "Even Piell",
  "Ezra Bridger",
  "Faro Argyus",
  "Feral",
  "Fifth Brother",
  "Finis Valorum",
  "Finn",
  "Fives",
  "FN-1824",
  "FN-2003",
  "Fodesinbeed Annodue",
  "Fulcrum",
  "FX-7",
  "GA-97",
  "Galen Erso",
  "Gallius Rax",
  'Garazeb "Zeb" Orrelios',
  "Gardulla the Hutt",
  "Garrick Versio",
  "Garven Dreis",
  "Gavyn Sykes",
  "Gideon Hask",
  "Gizor Dellso",
  "Gonk droid",
  "Grand Inquisitor",
  "Greeata Jendowanian",
  "Greedo",
  "Greer Sonnel",
  "Grievous",
  "Grummgar",
  "Gungi",
  "Hammerhead",
  "Han Solo",
  "Harter Kalonia",
  "Has Obbit",
  "Hera Syndulla",
  "Hevy",
  "Hondo Ohnaka",
  "Huyang",
  "Iden Versio",
  "IG-88",
  "Ima-Gun Di",
  "Inquisitors",
  "Inspector Thanoth",
  "Jabba",
  "Jacen Syndulla",
  "Jan Dodonna",
  "Jango Fett",
  "Janus Greejatus",
  "Jar Jar Binks",
  "Jas Emari",
  "Jaxxon",
  "Jek Tono Porkins",
  "Jeremoch Colton",
  "Jira",
  "Jobal Naberrie",
  "Jocasta Nu",
  "Joclad Danva",
  "Joh Yowza",
  "Jom Barell",
  "Joph Seastriker",
  "Jova Tarkin",
  "Jubnuk",
  "Jyn Erso",
  "K-2SO",
  "Kanan Jarrus",
  "Karbin",
  "Karina the Great",
  "Kes Dameron",
  "Ketsu Onyo",
  "Ki-Adi-Mundi",
  "King Katuunko",
  "Kit Fisto",
  "Kitster Banai",
  "Klaatu",
  "Klik-Klak",
  "Korr Sella",
  "Kylo Ren",
  "L3-37",
  "Lama Su",
  "Lando Calrissian",
  "Lanever Villecham",
  "Leia Organa",
  "Letta Turmond",
  "Lieutenant Kaydel Ko Connix",
  "Lieutenant Thire",
  "Lobot",
  "Logray",
  "Lok Durd",
  "Longo Two-Guns",
  "Lor San Tekka",
  "Lorth Needa",
  "Lott Dod",
  "Luke Skywalker",
  "Lumat",
  "Luminara Unduli",
  "Lux Bonteri",
  "Lyn Me",
  "Lyra Erso",
  "Mace Windu",
  "Malakili",
  "Mama the Hutt",
  "Mars Guo",
  "Mas Amedda",
  "Mawhonic",
  "Max Rebo",
  "Maximilian Veers",
  "Maz Kanata",
  "ME-8D9",
  "Meena Tills",
  "Mercurial Swift",
  "Mina Bonteri",
  "Miraj Scintel",
  "Mister Bones",
  "Mod Terrik",
  "Moden Canady",
  "Mon Mothma",
  "Moradmin Bast",
  "Moralo Eval",
  "Morley",
  "Mother Talzin",
  "Nahdar Vebb",
  "Nahdonnis Praji",
  "Nien Nunb",
  "Niima the Hutt",
  "Nines",
  "Norra Wexley",
  "Nute Gunray",
  "Nuvo Vindi",
  "Obi-Wan Kenobi",
  "Odd Ball",
  "Ody Mandrell",
  "Omi",
  "Onaconda Farr",
  "Oola",
  "OOM-9",
  "Oppo Rancisis",
  "Orn Free Taa",
  "Oro Dassyne",
  "Orrimarko",
  "Osi Sobeck",
  "Owen Lars",
  "Pablo-Jill",
  "Padmé Amidala",
  "Pagetti Rook",
  "Paige Tico",
  "Paploo",
  "Petty Officer Thanisson",
  "Pharl McQuarrie",
  "Plo Koon",
  "Po Nudo",
  "Poe Dameron",
  "Poggle the Lesser",
  "Pong Krell",
  "Pooja Naberrie",
  "PZ-4CO",
  "Quarrie",
  "Quay Tolsite",
  "Queen Apailana",
  "Queen Jamillia",
  "Queen Neeyutnee",
  "Qui-Gon Jinn",
  "Quiggold",
  "Quinlan Vos",
  "R2-D2",
  "R2-KT",
  "R3-S6",
  "R4-P17",
  "R5-D4",
  "RA-7",
  "Rabé",
  "Rako Hardeen",
  "Ransolm Casterfo",
  "Rappertunie",
  "Ratts Tyerell",
  "Raymus Antilles",
  "Ree-Yees",
  "Reeve Panzoro",
  "Rey",
  "Ric Olié",
  "Riff Tamson",
  "Riley",
  "Rinnriyin Di",
  "Rio Durant",
  "Rogue Squadron",
  "Romba",
  "Roos Tarpals",
  "Rose Tico",
  "Rotta the Hutt",
  "Rukh",
  "Rune Haako",
  "Rush Clovis",
  "Ruwee Naberrie",
  "Ryoo Naberrie",
  "Sabé",
  "Sabine Wren",
  "Saché",
  "Saelt-Marae",
  "Saesee Tiin",
  "Salacious B. Crumb",
  "San Hill",
  "Sana Starros",
  "Sarco Plank",
  "Sarkli",
  "Satine Kryze",
  "Savage Opress",
  "Sebulba",
  "Senator Organa",
  "Sergeant Kreel",
  "Seventh Sister",
  "Shaak Ti",
  "Shara Bey",
  "Shmi Skywalker",
  "Shu Mai",
  "Sidon Ithano",
  "Sifo-Dyas",
  "Sim Aloo",
  "Siniir Rath Velus",
  "Sio Bibble",
  "Sixth Brother",
  "Slowen Lo",
  "Sly Moore",
  "Snaggletooth",
  "Snap Wexley",
  "Snoke",
  "Sola Naberrie",
  "Sora Bulq",
  "Strono Tuggs",
  "Sy Snootles",
  "Tallissan Lintra",
  "Tarfful",
  "Tasu Leech",
  "Taun We",
  "TC-14",
  "Tee Watt Kaa",
  "Teebo",
  "Teedo",
  "Teemto Pagalies",
  "Temiri Blagg",
  "Tessek",
  "Tey How",
  "Thane Kyrell",
  "The Bendu",
  "The Smuggler",
  "Thrawn",
  "Tiaan Jerjerrod",
  "Tion Medon",
  "Tobias Beckett",
  "Tulon Voidgazer",
  "Tup",
  "U9-C4",
  "Unkar Plutt",
  "Val Beckett",
  "Vanden Willard",
  "Vice Admiral Amilyn Holdo",
  "Vober Dand",
  "WAC-47",
  "Wag Too",
  "Wald",
  "Walrus Man",
  "Warok",
  "Wat Tambor",
  "Watto",
  "Wedge Antilles",
  "Wes Janson",
  "Wicket W. Warrick",
  "Wilhuff Tarkin",
  "Wollivan",
  "Wuher",
  "Wullf Yularen",
  "Xamuel Lennox",
  "Yaddle",
  "Yarael Poof",
  "Yoda",
  "Zam Wesell",
  "Zev Senesca",
  "Ziro the Hutt",
  "Zuckuss"
], Zt = {
  search(e, t) {
    setTimeout(() => {
      const n = Qt.filter(
        (o) => o.toLowerCase().includes(e.toLowerCase())
      );
      t(n);
    }, 500);
  }
};
function qt(e) {
  const [t, n] = H([]);
  return P(() => {
    const o = re.get(e);
    if (e == null) {
      n([]);
      return;
    }
    if (o !== null) {
      if (o !== void 0) {
        n(o);
        return;
      }
      re.set(e, null), Zt.search(e, (r) => {
        re.set(e, r), n(r);
      });
    }
  }, [e]), t;
}
function Xt(e, t) {
  let n = zt.exec(e);
  if (n === null && (n = Ut.exec(e)), n !== null) {
    const o = n[1], r = n[3];
    if (r.length >= t)
      return {
        leadOffset: n.index + o.length,
        matchingString: r,
        replaceableString: n[2]
      };
  }
  return null;
}
function en(e) {
  return Xt(e, 1);
}
class tn extends $t {
  constructor(t, n) {
    super(t), this.name = t, this.picture = n;
  }
}
function nn({
  index: e,
  isSelected: t,
  onClick: n,
  onMouseEnter: o,
  option: r
}) {
  let u = "item";
  return t && (u += " selected"), /* @__PURE__ */ g.jsxs(
    "li",
    {
      tabIndex: -1,
      className: u,
      ref: r.setRefElement,
      role: "option",
      "aria-selected": t,
      id: "typeahead-item-" + e,
      onMouseEnter: o,
      onClick: n,
      children: [
        r.picture,
        /* @__PURE__ */ g.jsx("span", { className: "text", children: r.name })
      ]
    },
    r.key
  );
}
function rn() {
  const [e] = W(), [t, n] = H(null), o = qt(t), r = Kt("/", {
    minLength: 0
  }), u = le(
    () => o.map(
      (m) => new tn(m, /* @__PURE__ */ g.jsx("i", { className: "icon user" }))
    ).slice(0, Yt),
    [o]
  ), s = K(
    (m, C, h) => {
      e.update(() => {
        const S = Ge(m.name);
        C && C.replace(S), S.select(), h();
      });
    },
    [e]
  ), f = K(
    (m) => r(m, e) !== null ? null : en(m),
    [r, e]
  );
  return /* @__PURE__ */ g.jsx(
    Ht,
    {
      onQueryChange: n,
      onSelectOption: s,
      triggerFn: f,
      options: u,
      menuRenderFn: (m, { selectedIndex: C, selectOptionAndCleanUp: h, setHighlightedIndex: S }) => m.current && o.length ? Tt.createPortal(
        /* @__PURE__ */ g.jsx("div", { className: "typeahead-popover mentions-menu", children: /* @__PURE__ */ g.jsx("ul", { children: u.map((l, i) => /* @__PURE__ */ g.jsx(
          nn,
          {
            index: i,
            isSelected: C === i,
            onClick: () => {
              S(i), h(l);
            },
            onMouseEnter: () => {
              S(i);
            },
            option: l
          },
          l.key
        )) }) }),
        m.current
      ) : null
    }
  );
}
const De = Object.freeze({ "	": "\\t", "\n": "\\n" }), Ne = new RegExp(Object.keys(De).join("|"), "g"), V = Object.freeze({ ancestorHasNextSibling: "|", ancestorIsLastChild: " ", hasNextSibling: "├", isLastChild: "└", selectedChar: "^", selectedLine: ">" }), on = [(e) => e.hasFormat("bold") && "Bold", (e) => e.hasFormat("code") && "Code", (e) => e.hasFormat("italic") && "Italic", (e) => e.hasFormat("strikethrough") && "Strikethrough", (e) => e.hasFormat("subscript") && "Subscript", (e) => e.hasFormat("superscript") && "Superscript", (e) => e.hasFormat("underline") && "Underline", (e) => e.hasFormat("highlight") && "Highlight"], an = [(e) => e.hasTextFormat("bold") && "Bold", (e) => e.hasTextFormat("code") && "Code", (e) => e.hasTextFormat("italic") && "Italic", (e) => e.hasTextFormat("strikethrough") && "Strikethrough", (e) => e.hasTextFormat("subscript") && "Subscript", (e) => e.hasTextFormat("superscript") && "Superscript", (e) => e.hasTextFormat("underline") && "Underline", (e) => e.hasTextFormat("highlight") && "Highlight"], ln = [(e) => e.isDirectionless() && "Directionless", (e) => e.isUnmergeable() && "Unmergeable"], sn = [(e) => e.isToken() && "Token", (e) => e.isSegmented() && "Segmented"];
function un(e, t, n, o, r = !1) {
  const u = e.getEditorState(), s = e._config, f = e._compositionKey, m = e._editable;
  if (n) {
    let l = "";
    return u.read(() => {
      l = function(i) {
        const y = document.createElement("div");
        return y.innerHTML = i.trim(), $e(y, 0).innerHTML;
      }(bt(e));
    }), l;
  }
  let C = ` root
`;
  const h = u.read(() => {
    const l = U();
    return Be(gt(), (i, y) => {
      const d = `(${i.getKey()})`, c = i.getType() || "", x = i.isSelected();
      C += `${x ? V.selectedLine : " "} ${y.join(" ")} ${d} ${c} ${function(a, M, b = !1) {
        const j = M ? M(a, b) : void 0;
        if (j !== void 0 && j.length > 0) return j;
        if (ae(a)) {
          const N = a.getTextContent(), k = N.length === 0 ? "(empty)" : `"${ve(N, b)}"`, v = function(p) {
            return [Ee(p), cn(p), dn(p), Re(p)].filter(Boolean).join(", ");
          }(a);
          return [k, v.length !== 0 ? `{ ${v} }` : null].filter(Boolean).join(" ").trim();
        }
        if (xt(a)) {
          const N = a.getURL(), k = N.length === 0 ? "(empty)" : `"${ve(N, b)}"`, v = function(p) {
            return [mn(p), hn(p), gn(p), Re(p)].filter(Boolean).join(", ");
          }(a);
          return [k, v.length !== 0 ? `{ ${v} }` : null].filter(Boolean).join(" ").trim();
        }
        if (Nt(a)) return `ids: [ ${a.getIDs().join(", ")} ]`;
        if (pt(a)) {
          const N = function(v) {
            let p = an.map((R) => R(v)).filter(Boolean).join(", ").toLocaleLowerCase();
            return p !== "" && (p = "format: " + p), p;
          }(a);
          let k = N !== "" ? `{ ${N} }` : "";
          return k += a.__style ? `(${a.__style})` : "", k;
        }
        return "";
      }(i, o, r)}
`, C += function({ indent: a, isSelected: M, node: b, nodeKeyDisplay: j, selection: N, typeDisplay: k }) {
        if (!ae(b) || !Q(N) || !M || Me(b)) return "";
        const v = N.anchor, p = N.focus;
        if (b.getTextContent() === "" || v.getNode() === N.focus.getNode() && v.offset === p.offset) return "";
        const [R, B] = function(D, $) {
          const w = $.getStartEndPoints();
          if (Y($) || w === null) return [-1, -1];
          const [E, A] = w, F = D.getTextContent(), ne = F.length;
          let Z = -1, ee = -1;
          if (E.type === "text" && A.type === "text") {
            const q = E.getNode(), te = A.getNode();
            q === te && D === q && E.offset !== A.offset ? [Z, ee] = E.offset < A.offset ? [E.offset, A.offset] : [A.offset, E.offset] : [Z, ee] = D === q ? q.isBefore(te) ? [E.offset, ne] : [0, E.offset] : D === te ? te.isBefore(q) ? [A.offset, ne] : [0, A.offset] : [0, ne];
          }
          const ce = (F.slice(0, Z).match(Ne) || []).length, Ie = (F.slice(Z, ee).match(Ne) || []).length;
          return [Z + ce, ee + ce + Ie];
        }(b, N);
        if (R === B) return "";
        const L = a[a.length - 1] === V.hasNextSibling ? V.ancestorHasNextSibling : V.ancestorIsLastChild, T = [...a.slice(0, a.length - 1), L], O = Array(R + 1).fill(" "), G = Array(B - R).fill(V.selectedChar), I = k.length + 2, _ = Array(j.length + I).fill(" ");
        return [V.selectedLine, T.join(" "), [..._, ...O, ...G].join("")].join(" ") + `
`;
      }({ indent: y, isSelected: x, node: i, nodeKeyDisplay: d, selection: l, typeDisplay: c });
    }), l === null ? ": null" : Q(l) ? function(i) {
      let y = "";
      const d = Ee(i);
      y += `: range ${d !== "" ? `{ ${d} }` : ""} ${i.style !== "" ? `{ style: ${i.style} } ` : ""}`;
      const c = i.anchor, x = i.focus, a = c.offset, M = x.offset;
      return y += `
  ├ anchor { key: ${c.key}, offset: ${a === null ? "null" : a}, type: ${c.type} }`, y += `
  └ focus { key: ${x.key}, offset: ${M === null ? "null" : M}, type: ${x.type} }`, y;
    }(l) : vt(l) ? function(i) {
      return `: table
  └ { table: ${i.tableKey}, anchorCell: ${i.anchor.key}, focusCell: ${i.focus.key} }`;
    }(l) : function(i) {
      return Y(i) ? `: node
  └ [${Array.from(i._nodes).join(", ")}]` : "";
    }(l);
  });
  if (C += `
 selection` + h, C += `

 commands:`, t.length) for (const { index: l, type: i, payload: y } of t) C += `
  └ ${l}. { type: ${i}, payload: ${y instanceof Event ? y.constructor.name : y} }`;
  else C += `
  └ None dispatched.`;
  const { version: S } = e.constructor;
  return C += `

 editor${S ? ` (v${S})` : ""}:`, C += `
  └ namespace ${s.namespace}`, f !== null && (C += `
  └ compositionKey ${f}`), C += `
  └ editable ${String(m)}`, C;
}
function Be(e, t, n = []) {
  const o = e.getChildren(), r = o.length;
  o.forEach((u, s) => {
    t(u, n.concat(s === r - 1 ? V.isLastChild : V.hasNextSibling)), Me(u) && Be(u, t, n.concat(s === r - 1 ? V.ancestorIsLastChild : V.ancestorHasNextSibling));
  });
}
function ve(e, t = !1) {
  const n = Object.entries(De).reduce((o, [r, u]) => o.replace(new RegExp(r, "g"), String(u)), e);
  return t ? n.replace(/[^\s]/g, "*") : n;
}
function cn(e) {
  let t = ln.map((n) => n(e)).filter(Boolean).join(", ").toLocaleLowerCase();
  return t !== "" && (t = "detail: " + t), t;
}
function dn(e) {
  let t = sn.map((n) => n(e)).filter(Boolean).join(", ").toLocaleLowerCase();
  return t !== "" && (t = "mode: " + t), t;
}
function Ee(e) {
  let t = on.map((n) => n(e)).filter(Boolean).join(", ").toLocaleLowerCase();
  return t !== "" && (t = "format: " + t), t;
}
function mn(e) {
  let t = e.getTarget();
  return t != null && (t = "target: " + t), t;
}
function hn(e) {
  let t = e.getRel();
  return t != null && (t = "rel: " + t), t;
}
function gn(e) {
  let t = e.getTitle();
  return t != null && (t = "title: " + t), t;
}
function Re(e) {
  if (!e.__state) return !1;
  const t = [];
  for (const [o, r] of e.__state.knownState.entries()) {
    if (o.isEqual(r, o.defaultValue)) continue;
    const u = JSON.stringify(o.unparse(r));
    t.push(`[${o.key}: ${u}]`);
  }
  let n = t.join(",");
  return n !== "" && (n = "state: " + n), n;
}
function $e(e, t) {
  const n = new Array(1 + t++).join("  "), o = new Array(t - 1).join("  ");
  let r;
  for (let u = 0; u < e.children.length; u++) r = document.createTextNode(`
` + n), e.insertBefore(r, e.children[u]), $e(e.children[u], t), e.lastElementChild === e.children[u] && (r = document.createTextNode(`
` + o), e.appendChild(r));
  return e;
}
const fn = it(function({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: o, viewClassName: r, timeTravelPanelClassName: u, editorState: s, setEditorState: f, setEditorReadOnly: m, generateContent: C, commandsLog: h = [] }, S) {
  const [l, i] = H([]), [y, d] = H(""), [c, x] = H(!1), [a, M] = H(!1), b = z(0), j = z(null), [N, k] = H(!1), [v, p] = H(!1), [R, B] = H(!1), L = z(), T = z([]), O = z(0), G = K((_) => {
    const D = ++O.current;
    C(_).then(($) => {
      D === O.current && d($);
    }).catch(($) => {
      D === O.current && d(`Error rendering tree: ${$.message}

Stack:
${$.stack}`);
    });
  }, [C]);
  P(() => {
    if (!(!R && s._nodeMap.size > 1e3 && (p(!0), !R)) && (L.current !== s || T.current !== h)) {
      const _ = L.current !== s;
      L.current = s, T.current = h, G(a), !c && _ && i((D) => [...D, [Date.now(), s]]);
    }
  }, [s, G, a, R, c, h]);
  const I = l.length;
  return P(() => {
    if (N) {
      let _;
      const D = () => {
        const $ = b.current;
        if ($ === I - 1) return void k(!1);
        const w = l[$][0], E = l[$ + 1][0];
        _ = setTimeout(() => {
          b.current++;
          const A = b.current, F = j.current;
          F !== null && (F.value = String(A)), f(l[A][1]), D();
        }, E - w);
      };
      return D(), () => {
        clearTimeout(_);
      };
    }
  }, [l, N, I, f]), g.jsxs("div", { className: r, children: [!R && v ? g.jsxs("div", { style: { padding: 20 }, children: [g.jsx("span", { style: { marginRight: 20 }, children: "Detected large EditorState, this can impact debugging performance." }), g.jsx("button", { onClick: () => {
    B(!0);
  }, style: { background: "transparent", border: "1px solid white", color: "white", cursor: "pointer", padding: 5 }, children: "Show full tree" })] }) : null, R ? null : g.jsx("button", { onClick: () => (G(!a), void M(!a)), className: e, type: "button", children: a ? "Tree" : "Export DOM" }), !c && (R || !v) && I > 2 && g.jsx("button", { onClick: () => {
    m(!0), b.current = I - 1, x(!0);
  }, className: t, type: "button", children: "Time Travel" }), (R || !v) && g.jsx("pre", { ref: S, children: y }), c && (R || !v) && g.jsxs("div", { className: u, children: [g.jsx("button", { className: o, onClick: () => {
    b.current === I - 1 && (b.current = 1), k(!N);
  }, type: "button", children: N ? "Pause" : "Play" }), g.jsx("input", { className: n, ref: j, onChange: (_) => {
    const D = Number(_.target.value), $ = l[D];
    $ && (b.current = D, f($[1]));
  }, type: "range", min: "1", max: I - 1 }), g.jsx("button", { className: o, onClick: () => {
    m(!1);
    const _ = l.length - 1, D = l[_];
    f(D[1]);
    const $ = j.current;
    $ !== null && ($.value = String(_)), x(!1), k(!1);
  }, type: "button", children: "Exit" })] })] });
});
function pn(e, t) {
  const n = /* @__PURE__ */ new Set();
  let o = 0;
  for (const [r] of e._commands) n.add(e.registerCommand(r, (u) => (t((s) => {
    o += 1;
    const f = [...s];
    return f.push({ index: o, payload: u, type: r.type ? r.type : "UNKNOWN" }), f.length > 10 && f.shift(), f;
  }), !1), ft));
  return () => n.forEach((r) => r());
}
function yn(e) {
  const [t, n] = H([]);
  return P(() => pn(e, n), [e]), le(() => t, [t]);
}
function Cn({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: o, timeTravelPanelClassName: r, viewClassName: u, editor: s, customPrintNode: f }) {
  const m = ot.createRef(), [C, h] = H(s.getEditorState()), S = yn(s);
  return P(() => X(s.registerUpdateListener(({ editorState: l }) => {
    h(l);
  }), s.registerEditableListener(() => {
    h(s.getEditorState());
  })), [s]), P(() => {
    const l = m.current;
    if (l !== null) return l.__lexicalEditor = s, () => {
      l.__lexicalEditor = null;
    };
  }, [s, m]), g.jsx(fn, { treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: o, viewClassName: u, timeTravelPanelClassName: r, setEditorReadOnly: (l) => {
    const i = s.getRootElement();
    i != null && (i.contentEditable = l ? "false" : "true");
  }, editorState: C, setEditorState: (l) => s.setEditorState(l), generateContent: async function(l) {
    return un(s, S, l, f);
  }, ref: m, commandsLog: S });
}
function Sn() {
  const [e] = W();
  return /* @__PURE__ */ g.jsx(
    Cn,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      editor: e
    }
  );
}
const oe = /* @__PURE__ */ new Map(), we = se("RIGHT_CLICK_IMAGE_COMMAND");
function Tn(e) {
  let t = oe.get(e);
  if (typeof t == "boolean")
    return t;
  throw t || (t = new Promise((n) => {
    const o = new Image();
    o.src = e, o.onload = () => n(!1), o.onerror = () => n(!0);
  }).then((n) => (oe.set(e, n), n)), oe.set(e, t), t);
}
function bn(e) {
  return e.toLowerCase().endsWith(".svg");
}
function xn({
  altText: e,
  className: t,
  imageRef: n,
  src: o,
  width: r,
  height: u,
  maxWidth: s,
  onError: f
}) {
  const [m, C] = H(null), h = bn(o);
  P(() => {
    if (n.current && h) {
      const { naturalWidth: y, naturalHeight: d } = n.current;
      C({
        height: d,
        width: y
      });
    }
  }, [n, h]);
  const S = Tn(o);
  if (P(() => {
    S && f();
  }, [S, f]), S)
    return /* @__PURE__ */ g.jsx(Pe, {});
  const i = (() => {
    if (!h)
      return {
        height: u,
        maxWidth: s,
        width: r
      };
    const y = (m == null ? void 0 : m.width) || 200, d = (m == null ? void 0 : m.height) || 200;
    let c = y, x = d;
    if (c > s) {
      const M = s / c;
      c = s, x = Math.round(x * M);
    }
    const a = 500;
    if (x > a) {
      const M = a / x;
      x = a, c = Math.round(c * M);
    }
    return {
      height: x,
      maxWidth: s,
      width: c
    };
  })();
  return /* @__PURE__ */ g.jsx(
    "img",
    {
      className: t || void 0,
      src: o,
      alt: e,
      ref: n,
      style: i,
      onError: f,
      draggable: "false",
      onLoad: (y) => {
        if (h) {
          const d = y.currentTarget;
          C({
            height: d.naturalHeight,
            width: d.naturalWidth
          });
        }
      }
    }
  );
}
function Pe() {
  return /* @__PURE__ */ g.jsx(
    "img",
    {
      src: kt,
      style: {
        height: 200,
        opacity: 0.2,
        width: 200
      },
      draggable: "false",
      alt: "Broken image"
    }
  );
}
function Pn({
  src: e,
  altText: t,
  nodeKey: n,
  width: o,
  height: r,
  maxWidth: u,
  resizable: s,
  showCaption: f,
  caption: m,
  captionsEnabled: C
}) {
  const h = z(null), S = z(null), [l, i, y] = Ve(n), [d, c] = H(!1), { isCollabActive: x } = tt(), [a] = W(), [M, b] = H(null), j = z(null), [N, k] = H(!1), v = We(), p = K(
    (w) => {
      const E = U(), A = S.current;
      if (l && Y(E) && E.getNodes().length === 1) {
        if (f)
          return fe(null), w.preventDefault(), m.focus(), !0;
        if (A !== null && A !== document.activeElement)
          return w.preventDefault(), A.focus(), !0;
      }
      return !1;
    },
    [m, l, f]
  ), R = K(
    (w) => j.current === m || S.current === w.target ? (fe(null), a.update(() => {
      i(!0);
      const E = a.getRootElement();
      E !== null && E.focus();
    }), !0) : !1,
    [m, a, i]
  ), B = K(
    (w) => {
      const E = w;
      return d ? !0 : E.target === h.current ? (E.shiftKey ? i(!l) : (y(), i(!0)), !0) : !1;
    },
    [d, l, i, y]
  ), L = K(
    (w) => {
      a.getEditorState().read(() => {
        const E = U();
        w.target.tagName === "IMG" && Q(E) && E.getNodes().length === 1 && a.dispatchCommand(we, w);
      });
    },
    [a]
  );
  P(() => {
    const w = a.getRootElement(), E = X(
      a.registerUpdateListener(({ editorState: A }) => {
        const F = A.read(() => U());
        Y(F) ? b(F) : b(null);
      }),
      a.registerCommand(
        yt,
        (A, F) => (j.current = F, !1),
        J
      ),
      a.registerCommand(
        Ct,
        B,
        J
      ),
      a.registerCommand(
        we,
        B,
        J
      ),
      a.registerCommand(
        St,
        (A) => A.target === h.current ? (A.preventDefault(), !0) : !1,
        J
      ),
      a.registerCommand(Ae, p, J),
      a.registerCommand(
        ke,
        R,
        J
      )
    );
    return w == null || w.addEventListener("contextmenu", L), () => {
      E(), w == null || w.removeEventListener("contextmenu", L);
    };
  }, [
    y,
    a,
    d,
    l,
    n,
    p,
    R,
    B,
    L,
    i
  ]);
  const T = () => {
    a.update(() => {
      const w = pe(n);
      me(w) && w.setShowCaption(!0);
    });
  }, O = (w, E) => {
    setTimeout(() => {
      c(!1);
    }, 200), a.update(() => {
      const A = pe(n);
      me(A) && A.setWidthAndHeight(w, E);
    });
  }, G = () => {
    c(!0);
  }, { historyState: I } = ze(), {
    settings: { showNestedEditorTreeView: _ }
  } = Je(), D = l && Y(M) && !d, $ = (l || d) && v;
  return /* @__PURE__ */ g.jsx(lt, { fallback: null, children: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { draggable: D, children: N ? /* @__PURE__ */ g.jsx(Pe, {}) : /* @__PURE__ */ g.jsx(
      xn,
      {
        className: $ ? `focused ${Y(M) ? "draggable" : ""}` : null,
        src: e,
        altText: t,
        imageRef: h,
        width: o,
        height: r,
        maxWidth: u,
        onError: () => k(!0)
      }
    ) }),
    f && /* @__PURE__ */ g.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ g.jsxs(st, { initialEditor: m, children: [
      /* @__PURE__ */ g.jsx(et, {}),
      /* @__PURE__ */ g.jsx(rn, {}),
      /* @__PURE__ */ g.jsx(Ue, {}),
      /* @__PURE__ */ g.jsx(jt, {}),
      /* @__PURE__ */ g.jsx(wt, {}),
      /* @__PURE__ */ g.jsx(Dt, {}),
      x ? /* @__PURE__ */ g.jsx(
        nt,
        {
          id: m.getKey(),
          providerFactory: Ye,
          shouldBootstrap: !0
        }
      ) : /* @__PURE__ */ g.jsx(Qe, { externalHistoryState: I }),
      /* @__PURE__ */ g.jsx(
        Ze,
        {
          contentEditable: /* @__PURE__ */ g.jsx(
            Xe,
            {
              placeholder: "Enter a caption...",
              placeholderClassName: "ImageNode__placeholder",
              className: "ImageNode__contentEditable"
            }
          ),
          ErrorBoundary: qe
        }
      ),
      _ === !0 ? /* @__PURE__ */ g.jsx(Sn, {}) : null
    ] }) }),
    s && Y(M) && $ && /* @__PURE__ */ g.jsx(
      Et,
      {
        showCaption: f,
        setShowCaption: T,
        editor: a,
        buttonRef: S,
        imageRef: h,
        maxWidth: u,
        onResizeStart: G,
        onResizeEnd: O,
        captionsEnabled: !N && C
      }
    )
  ] }) });
}
export {
  we as RIGHT_CLICK_IMAGE_COMMAND,
  Pn as default
};
