// ==UserScript==
// @name         Super_preloaderPlus_one_New
// @name:zh-CN   Super_preloaderPlus_one_改
// @name:zh-TW   Super_preloaderPlus_one_改
// @namespace    https://github.com/machsix
// @description  Preload and Autopager
// @description:zh-CN  预读+翻页..全加速你的浏览体验
// @description:zh-TW  预读+翻页..全加速你的浏览体验
// @author       Mach6
// @contributers YFdyh000, suchunchen
// @thanksto     ywzhaiqi, NLF
// @version      6.11.3
// @license      GPL-3.0
// @update       2019/12/31
// @homepageURL  https://github.com/machsix/Super-preloader
// @supportURL   https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new/feedback
// @contributionURL https://ko-fi.com/machsix
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==
// @require      https://greasyfork.org/scripts/373124-gm4-polyfill-mach6-legacy/code/gm4-polyfill-mach6-legacy.js?version=758289
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @connect      wedata.net
// @connect      github.io
// @include      http*
// @exclude      http*://mail.google.com/*
// @exclude      http*://maps.google*
// @exclude      http*://www.google.com/reader*
// @exclude      http*://www.google.com/calendar*
// @exclude      https://docs.google.com/*
// @exclude      http*://app.yinxiang.com/*
// @exclude      http*://www.dropbox.com/*
// @exclude      http*://www.toodledo.com/*
// @exclude      http://cloud.feedly.com/*
// @exclude      http://weibo.com/*
// @exclude      http://w.qq.com/*
// @exclude      http://web2.qq.com/*
// @exclude      http://openapi.qzone.qq.com/*
// @exclude      http://*cloud.vip.xunlei.com/*
// @exclude      http*://www.wumii.com/*
// @exclude      http://pan.baidu.com/*
// @exclude      http://yun.baidu.com/*
// @exclude      http://www.cnbeta.com/*
// @exclude      http://www.youku.com/
// @exclude      http://v.youku.com/*
// @exclude      http://www.iqiyi.com/*
// @exclude      http://www.duokan.com/reader/*
// @exclude      https://www.kohls.com/*
// @exclude      http://list.jd.com/*
// @exclude      http*://eclick.baidu.com/*
// @exclude      http*://googleads.g.doubleclick.net/*
// @exclude      http*://pos.baidu.com/*
// @exclude      http*://tpc.googlesyndication.com/*
// @exclude      http*://ad.doubleclick.net/*
// @exclude      http*://ad.agrantsem.com/*
// ==/UserScript==

!function(e) {
	var t = {};
	function __webpack_require__(r) {
		if (t[r]) return t[r].exports;
		var n = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(n.exports, n, n.exports, __webpack_require__), n.l = !0, n.exports;
	}
	__webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, r) {
		__webpack_require__.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		});
	}, __webpack_require__.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		});
	}, __webpack_require__.t = function(e, t) {
		if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (__webpack_require__.r(r), Object.defineProperty(r, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var n in e) __webpack_require__.d(r, n, function(t) {
			return e[t];
		}.bind(null, n));
		return r;
	}, __webpack_require__.n = function(e) {
		var t = e && e.__esModule ? function getDefault() {
			return e.default;
		} : function getModuleExports() {
			return e;
		};
		return __webpack_require__.d(t, "a", t), t;
	}, __webpack_require__.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 167);
}([ function(e, t, r) {
	"use strict";
	var n = r(156), a = n.noConflict();
	t.a = a;
}, function(e, t, r) {
	"use strict";
	r.d(t, "c", (function() {
		return getElementByCSS;
	})), r.d(t, "d", (function() {
		return getElementByXpath;
	})), r.d(t, "b", (function() {
		return getAllElementsByXpath;
	})), r.d(t, "a", (function() {
		return getAllElements;
	})), r.d(t, "e", (function() {
		return getLastElement;
	}));
	var n = r(155), a = r.n(n), o = r(0);
	function getElementByCSS(e, t) {
		return (t || document).querySelector(e);
	}
	function getElementByXpath(e, t, r) {
		r = r || document, t = t || r;
		try {
			return r.evaluate(e, t, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		} catch (t) {
			return void o.a.error("[Super-preloader]", `Invalid xpath: ${e}`);
		}
	}
	function getAllElementsByXpath(e, t, r) {
		return r = r || document, t = t || r, r.evaluate(e, t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	}
	function getAllElements(e, t, r, n, o) {
		var i, s = [];
		if (!e) return s;
		if (r = r || document, n = n || window, o = o || void 0, t = t || r, "string" == typeof e) i = 0 === e.search(/^css;/i) ? function getAllElementsByCSS(e, t) {
			return (t || document).querySelectorAll(e);
		}(e.slice(4), t) : getAllElementsByXpath(e, t, r); else {
			if (!(i = e(r, n, o))) return s;
			if (i.nodeType) return s[0] = i, s;
		}
		return function makeArray(e) {
			var t, r, n, o = [];
			if (e.pop) {
				for (t = 0, r = e.length; t < r; t++) (n = e[t]) && (n.nodeType ? o.push(n) : o = o.concat(makeArray(n)));
				return a()(o);
			}
			if (e.item) {
				for (t = e.length; t; ) o[--t] = e[t];
				return o;
			}
			if (e.iterateNext) {
				for (t = e.snapshotLength; t; ) o[--t] = e.snapshotItem(t);
				return o;
			}
		}(i);
	}
	function getLastElement(e, t, r, n, a) {
		var o = getAllElements(e, r, n, a, t), i = o.length;
		if (i > 0) return o[i - 1];
	}
}, function(e, t, r) {
	"use strict";
	var n = r(13), a = r.n(n), o = r(36), i = r.n(o), s = r(35), c = r.n(s);
	function setAttr(e, t) {
		for (var r = 0, n = i()(t); r < n.length; r++) {
			var o = a()(n[r], 2), s = o[0], c = o[1];
			e.setAttribute(s, c);
		}
	}
	t.a = {
		create: function create(e, t) {
			var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document).createElement(e);
			return t.hasOwnProperty("attr") && setAttr(r, t.attr), t.hasOwnProperty("innerHTML") && (r.innerHTML = t.innerHTML),
			c()(t.children) && t.children.length > 0 && t.children.forEach((function(e) {
				r.appendChild(e);
			})), c()(t.eventListener) && t.eventListener.length > 0 && t.eventListener.forEach((function(e) {
				r.addEventListener(e.type, e.listener, e.useCapture || !1);
			})), r;
		},
		setAttr: setAttr
	};
}, function(e, t) {
	var r = e.exports = {
		version: "2.6.11"
	};
	"number" == typeof __e && (__e = r);
}, function(e, t, r) {
	e.exports = r(175);
}, function(e, t, r) {
	e.exports = r(193);
}, function(e, t) {
	var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = r);
}, function(e, t, r) {
	var n = r(6), a = r(3), o = r(52), i = r(24), s = r(23), $export = function(e, t, r) {
		var c, u, l, p = e & $export.F, f = e & $export.G, d = e & $export.S, _ = e & $export.P, h = e & $export.B, m = e & $export.W, g = f ? a : a[t] || (a[t] = {}), b = g.prototype, v = f ? n : d ? n[t] : (n[t] || {}).prototype;
		for (c in f && (r = t), r) (u = !p && v && void 0 !== v[c]) && s(g, c) || (l = u ? v[c] : r[c],
			g[c] = f && "function" != typeof v[c] ? r[c] : h && u ? o(l, n) : m && v[c] == l ? function(e) {
				var F = function(t, r, n) {
					if (this instanceof e) {
						switch (arguments.length) {
							case 0:
								return new e;

							case 1:
								return new e(t);

							case 2:
								return new e(t, r);
						}
						return new e(t, r, n);
					}
					return e.apply(this, arguments);
				};
				return F.prototype = e.prototype, F;
			}(l) : _ && "function" == typeof l ? o(Function.call, l) : l, _ && ((g.virtual || (g.virtual = {}))[c] = l,
		e & $export.R && b && !b[c] && i(b, c, l)));
	};
	$export.F = 1, $export.G = 2, $export.S = 4, $export.P = 8, $export.B = 16, $export.W = 32,
		$export.U = 64, $export.R = 128, e.exports = $export;
}, function(e, t) {
	var r = Array.isArray;
	e.exports = r;
}, function(e, t, r) {
	var n = r(72)("wks"), a = r(51), o = r(6).Symbol, i = "function" == typeof o;
	(e.exports = function(e) {
		return n[e] || (n[e] = i && o[e] || (i ? o : a)("Symbol." + e));
	}).store = n;
}, function(e, t, r) {
	var n = r(28), a = r(8), o = r(20), i = "[object String]";
	e.exports = function isString(e) {
		return "string" == typeof e || !a(e) && o(e) && n(e) == i;
	};
}, function(e, t, r) {
	e.exports = !r(26)((function() {
		return 7 != Object.defineProperty({}, "a", {
			get: function() {
				return 7;
			}
		}).a;
	}));
}, function(e, t, r) {
	var n = r(25);
	e.exports = function(e) {
		if (!n(e)) throw TypeError(e + " is not an object!");
		return e;
	};
}, function(e, t, r) {
	var n = r(179), a = r(180), o = r(192);
	e.exports = function _slicedToArray(e, t) {
		return n(e) || a(e, t) || o();
	};
}, function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return a;
	})), r.d(t, "b", (function() {
		return i;
	}));
	var n = r(154), a = Object(n.detect)(), o = GM.info || GM_info, i = {
		name: o.scriptHandler,
		version: o.version
	};
}, function(e, t, r) {
	var n = r(107), a = r(50);
	e.exports = function(e) {
		return n(a(e));
	};
}, function(e, t, r) {
	var n = r(12), a = r(111), o = r(75), i = Object.defineProperty;
	t.f = r(11) ? Object.defineProperty : function defineProperty(e, t, r) {
		if (n(e), t = o(t, !0), n(r), a) try {
			return i(e, t, r);
		} catch (e) {}
		if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
		return "value" in r && (e[t] = r.value), e;
	};
}, function(e, t, r) {
	var n = r(124), a = "object" == typeof self && self && self.Object === Object && self, o = n || a || Function("return this")();
	e.exports = o;
}, function(e, t, r) {
	"use strict";
	var n = r(45), a = r.n(n), o = r(66), i = r.n(o), s = r(37), c = r.n(s), u = r(38), l = r.n(u), p = r(39), f = r.n(p), d = r(29), _ = r.n(d), h = r(4), m = r.n(h), g = r(13), b = r.n(g), v = r(5), y = r.n(v), w = r(67), E = r.n(w), x = r(19), O = r.n(x), S = r(96), P = r.n(S), A = r(48), M = r.n(A), I = r(166), D = r.n(I), C = r(10), T = r.n(C), B = r(65), k = r.n(B), L = r(8), R = r.n(L), U = r(68), j = r(0);
	function ownKeys(e, t) {
		var r = _()(e);
		if (f.a) {
			var n = f()(e);
			t && (n = n.filter((function(t) {
				return l()(e, t).enumerable;
			}))), r.push.apply(r, n);
		}
		return r;
	}
	var W = U.a.create({
		cache: !1
	});
	class RuleProvider {
		constructor(e, t, r) {
			var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
			this.name = e, this.url = R()(t) ? t : [ t ], this.detailUrl = r, this.rule = [],
				k()(n) ? this.ruleParser = n : this.ruleParser = function(e) {
					return JSON.parse(e.data);
				};
		}
		setRule(e) {
			this.rule = e;
		}
		getRule() {
			return this.rule;
		}
		downloadRule() {
			var e = this;
			return M()(O.a.mark((function _callee() {
				var t, r, n, a, o, i, s, c, u;
				return O.a.wrap((function _callee$(l) {
					for (;;) switch (l.prev = l.next) {
						case 0:
							t = [], r = null, n = !0, a = !1, o = void 0, l.prev = 5, i = P()(e.url);

						case 7:
							if (n = (s = i.next()).done) {
								l.next = 25;
								break;
							}
							return c = s.value, l.prev = 9, l.next = 12, W.get(c);

						case 12:
							return u = l.sent, t = e.ruleParser(u), j.a.info("[Super-preloader]", `[DownloadRule] ${e.name} from ${c} [Status] Success`),
								l.abrupt("break", 25);

						case 18:
							l.prev = 18, l.t0 = l.catch(9), j.a.error("[Super-preloader]", `[DownloadRule] ${e.name} from ${c} [Status] ${l.t0}`),
								r = l.t0;

						case 22:
							n = !0, l.next = 7;
							break;

						case 25:
							l.next = 31;
							break;

						case 27:
							l.prev = 27, l.t1 = l.catch(5), a = !0, o = l.t1;

						case 31:
							l.prev = 31, l.prev = 32, n || null == i.return || i.return();

						case 34:
							if (l.prev = 34, !a) {
								l.next = 37;
								break;
							}
							throw o;

						case 37:
							return l.finish(34);

						case 38:
							return l.finish(31);

						case 39:
							if (!t) {
								l.next = 43;
								break;
							}
							return l.abrupt("return", t);

						case 43:
							throw new Error(r);

						case 44:
						case "end":
							return l.stop();
					}
				}), _callee, null, [ [ 5, 27, 31, 39 ], [ 9, 18 ], [ 32, , 34, 38 ] ]);
			})))();
		}
		updateRule(e) {
			var t = this;
			return M()(O.a.mark((function _callee2() {
				var r, n, a, o;
				return O.a.wrap((function _callee2$(i) {
					for (;;) switch (i.prev = i.next) {
						case 0:
							return r = null, i.prev = 1, i.next = 4, W.get(t.detailUrl);

						case 4:
							r = i.sent, i.next = 11;
							break;

						case 7:
							return i.prev = 7, i.t0 = i.catch(1), j.a.error("[Super-preloader]", `[UpdateRule] ${t.name} [Status] ${i.t0}`),
								i.abrupt("return", {
									status: "rejected",
									reason: i.t0
								});

						case 11:
							if (n = r.data, a = new Date(n.updated_at), !(e < a || t.rule.length < 1)) {
								i.next = 27;
								break;
							}
							return i.prev = 14, i.next = 17, t.downloadRule();

						case 17:
							o = i.sent, j.a.info("[Super-preloader]", `[UpdateRule] ${t.name} [Status] Success`),
								t.rule = o, i.next = 25;
							break;

						case 22:
							return i.prev = 22, i.t1 = i.catch(14), i.abrupt("return", {
								status: "rejected",
								reason: i.t1
							});

						case 25:
							i.next = 28;
							break;

						case 27:
							j.a.info("[Super-preloader]", `[UpdateRule] ${t.name} [Status] No need to update`);

						case 28:
							return i.abrupt("return", {
								status: "fulfilled",
								value: t.rule
							});

						case 29:
						case "end":
							return i.stop();
					}
				}), _callee2, null, [ [ 1, 7 ], [ 14, 22 ] ]);
			})))();
		}
	}
	var N = new RuleProvider("machsix.github.io", [ "https://machsix.github.io/Super-preloader/mydata.json", "https://super-preloader.netlify.com/mydata.json" ], "https://machsix.github.io/Super-preloader/mydata_detail.json"), K = new RuleProvider("wedata.net", [ "http://wedata.net/databases/AutoPagerize/items.json", "https://machsix.github.io/Super-preloader/wedata.json" ], "http://wedata.net/databases/AutoPagerize.json", (function(e) {
		return (T()(e.data) ? JSON.parse(e.data) : e.data).filter((function(e) {
			for (var t = [ "Generic Posts Rule", "hAtom" ], r = 0; r < t.length; r++) if (t[r].indexOf(e.name) >= 0) return !1;
			return !0;
		})).map((function(e) {
			return function _objectSpread(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ownKeys(Object(r), !0).forEach((function(t) {
						E()(e, t, r[t]);
					})) : c.a ? i()(e, c()(r)) : ownKeys(Object(r)).forEach((function(t) {
						a()(e, t, l()(r, t));
					}));
				}
				return e;
			}({}, e.data, {
				name: e.name
			});
		}));
	})), F = new Date("1992-05-15"), z = [ N, K ];
	t.a = {
		providers: z,
		RuleProvider: RuleProvider,
		rule: z.map((function() {
			return [];
		})),
		expire: F,
		updatePeriodInDay: 1,
		resetExpire() {
			this.expire = F;
		},
		getRule() {
			return D()(this.rule);
		},
		loadDB() {
			var e = this;
			return new y.a((function(t) {
				y.a.all([ GM.getValue("jsonRuleInfo", {
					expire: e.expire,
					updatePeriodInDay: e.updatePeriodInDay
				}), GM.getValue("SITEINFO_json", e.rule) ]).then((function(r) {
					var n = b()(r, 2), a = n[0], o = n[1];
					T()(a) && (a = JSON.parse(a)), T()(o) && (o = JSON.parse(o)), e.expire = new Date(a.expire),
						e.updatePeriodInDay = m()(a.updatePeriodInDay), e.rule = o, t(e.getRule());
				}));
			}));
		},
		saveDB() {
			var e = arguments, t = this;
			return M()(O.a.mark((function _callee3() {
				var r;
				return O.a.wrap((function _callee3$(n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							return r = !(e.length > 0 && void 0 !== e[0]) || e[0], n.next = 3, GM.setValue("jsonRuleInfo", {
								expire: t.expire,
								updatePeriodInDay: t.updatePeriodInDay
							});

						case 3:
							if (!r) {
								n.next = 6;
								break;
							}
							return n.next = 6, GM.setValue("SITEINFO_json", t.rule);

						case 6:
						case "end":
							return n.stop();
					}
				}), _callee3);
			})))();
		},
		updateRule() {
			var e = arguments, t = this;
			return M()(O.a.mark((function _callee4() {
				var r, n, a;
				return O.a.wrap((function _callee4$(o) {
					for (;;) switch (o.prev = o.next) {
						case 0:
							if (e.length > 0 && void 0 !== e[0] && e[0] && t.resetExpire(), r = new Date(+t.expire - 24 * t.updatePeriodInDay * 60 * 60 * 1e3),
								!((n = new Date) > t.expire)) {
								o.next = 10;
								break;
							}
							return a = t.providers.map((function(e) {
								return e.updateRule(r);
							})), o.next = 8, y.a.all(a).then((function(e) {
								e.map((function(e) {
									return "fulfilled" === e.status || !1;
								})).every((function(e) {
									return e;
								})) ? (t.rule = e.map((function(e) {
									var r = e.value;
									return r || t.rule;
								})), t.expire = new Date(+n + 24 * t.updatePeriodInDay * 60 * 60 * 1e3), j.a.info("[Super-preloader]", `[UpdateRule] Next update at: ${t.expire}`),
									t.saveDB()) : (t.expire = n, j.a.error("[Super-preloader]", "[UpdateRule] Fail"),
									t.saveDB(!1));
							}));

						case 8:
							o.next = 11;
							break;

						case 10:
							j.a.info("[Super-preloader]", `[UpdateRule] Next update at: ${t.expire}`);

						case 11:
						case "end":
							return o.stop();
					}
				}), _callee4);
			})))();
		}
	};
}, function(e, t, r) {
	e.exports = r(358);
}, function(e, t) {
	e.exports = function isObjectLike(e) {
		return null != e && "object" == typeof e;
	};
}, function(e, t, r) {
	var n, a, o;
	a = [], void 0 === (o = "function" == typeof (n = function() {
		var e = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
		function split(e) {
			var t = e.replace(/^v/, "").replace(/\+.*$/, ""), r = function indexOrEnd(e, t) {
				return -1 === e.indexOf(t) ? e.length : e.indexOf(t);
			}(t, "-"), n = t.substring(0, r).split(".");
			return n.push(t.substring(r + 1)), n;
		}
		function tryParse(e) {
			return isNaN(Number(e)) ? e : Number(e);
		}
		function validate(t) {
			if ("string" != typeof t) throw new TypeError("Invalid argument expected string");
			if (!e.test(t)) throw new Error("Invalid argument not valid semver ('" + t + "' received)");
		}
		function compareVersions(e, t) {
			[ e, t ].forEach(validate);
			for (var r = split(e), n = split(t), a = 0; a < Math.max(r.length - 1, n.length - 1); a++) {
				var o = parseInt(r[a] || 0, 10), i = parseInt(n[a] || 0, 10);
				if (o > i) return 1;
				if (i > o) return -1;
			}
			var s = r[r.length - 1], c = n[n.length - 1];
			if (s && c) {
				var u = s.split(".").map(tryParse), l = c.split(".").map(tryParse);
				for (a = 0; a < Math.max(u.length, l.length); a++) {
					if (void 0 === u[a] || "string" == typeof l[a] && "number" == typeof u[a]) return -1;
					if (void 0 === l[a] || "string" == typeof u[a] && "number" == typeof l[a]) return 1;
					if (u[a] > l[a]) return 1;
					if (l[a] > u[a]) return -1;
				}
			} else if (s || c) return s ? -1 : 1;
			return 0;
		}
		var t = [ ">", ">=", "=", "<", "<=" ], r = {
			">": [ 1 ],
			">=": [ 0, 1 ],
			"=": [ 0 ],
			"<=": [ -1, 0 ],
			"<": [ -1 ]
		};
		return compareVersions.compare = function(e, n, a) {
			!function validateOperator(e) {
				if ("string" != typeof e) throw new TypeError("Invalid operator type, expected string but got " + typeof e);
				if (-1 === t.indexOf(e)) throw new TypeError("Invalid operator, expected one of " + t.join("|"));
			}(a);
			var o = compareVersions(e, n);
			return r[a].indexOf(o) > -1;
		}, compareVersions;
	}) ? n.apply(t, a) : n) || (e.exports = o);
}, function(e, t, r) {
	"use strict";
	function addStyle(e, t, r) {
		var n = (r = r || document).getElementsByTagName("head");
		n = n ? n[0] : r.documentElement;
		var a = r.createElement("style");
		return t && a.setAttribute("id", t), a.setAttribute("type", "text/css"), a.textContent = e,
			n ? n.appendChild(a) : null;
	}
	r.d(t, "a", (function() {
		return addStyle;
	}));
}, function(e, t) {
	var r = {}.hasOwnProperty;
	e.exports = function(e, t) {
		return r.call(e, t);
	};
}, function(e, t, r) {
	var n = r(16), a = r(42);
	e.exports = r(11) ? function(e, t, r) {
		return n.f(e, t, a(1, r));
	} : function(e, t, r) {
		return e[t] = r, e;
	};
}, function(e, t) {
	e.exports = function(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	};
}, function(e, t) {
	e.exports = function(e) {
		try {
			return !!e();
		} catch (e) {
			return !0;
		}
	};
}, function(e, t, r) {
	var n = r(212), a = r(217);
	e.exports = function getNative(e, t) {
		var r = a(e, t);
		return n(r) ? r : void 0;
	};
}, function(e, t, r) {
	var n = r(43), a = r(213), o = r(214), i = "[object Null]", s = "[object Undefined]", c = n ? n.toStringTag : void 0;
	e.exports = function baseGetTag(e) {
		return null == e ? void 0 === e ? s : i : c && c in Object(e) ? a(e) : o(e);
	};
}, function(e, t, r) {
	e.exports = r(169);
}, function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return notice;
	}));
	var n, a, o, i = r(2);
	function notice(e, t) {
		if (!n) {
			var r = i.a.create("div", {
				attr: {
					style: "            position:fixed!important;            z-index:2147483647!important;            float:none!important;            width:auto!important;            height:auto!important;            font-size:13px!important;            padding:3px 20px 2px 5px!important;            background-color:#7f8f9c!important;            border:none!important;            color:#000!important;            text-align:left!important;            left:0!important;            bottom:0!important;            opacity:0;            -moz-border-radius:0 6px 0 0!important;            border-radius:0 6px 0 0!important;            -o-transition:opacity 0.3s ease-in-out;            -webkit-transition:opacity 0.3s ease-in-out;            -moz-transition:opacity 0.3s ease-in-out;        "
				}
			});
			document.body.appendChild(r), n = r;
		}
		clearTimeout(a), clearTimeout(o), n.innerHTML = e, n.style.display = "block", n.style.opacity = "0.96",
		void 0 === t && (t = 1666), t > 0 && (o = setTimeout((function() {
			n.style.opacity = "0";
		}), t), a = setTimeout((function() {
			n.style.display = "none";
		}), t + 300));
	}
}, function(e, t, r) {
	var n = r(106), a = r(73);
	e.exports = Object.keys || function keys(e) {
		return n(e, a);
	};
}, function(e, t) {
	e.exports = {};
}, function(e, t, r) {
	"use strict";
	(function(t) {
		var n, a = r(94), o = a.Buffer, i = {};
		for (n in a) a.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (i[n] = a[n]);
		var s = i.Buffer = {};
		for (n in o) o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (s[n] = o[n]);
		if (i.Buffer.prototype = o.prototype, s.from && s.from !== Uint8Array.from || (s.from = function(e, t, r) {
			if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
			if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
			return o(e, t, r);
		}), s.alloc || (s.alloc = function(e, t, r) {
			if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e);
			if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
			var n = o(e);
			return t && 0 !== t.length ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
				n;
		}), !i.kStringMaxLength) try {
			i.kStringMaxLength = t.binding("buffer").kStringMaxLength;
		} catch (e) {}
		i.constants || (i.constants = {
			MAX_LENGTH: i.kMaxLength
		}, i.kStringMaxLength && (i.constants.MAX_STRING_LENGTH = i.kStringMaxLength)),
			e.exports = i;
	}).call(this, r(91));
}, function(e, t) {
	e.exports = function isObject(e) {
		var t = typeof e;
		return null != e && ("object" == t || "function" == t);
	};
}, function(e, t, r) {
	e.exports = r(172);
}, function(e, t, r) {
	e.exports = r(303);
}, function(e, t, r) {
	e.exports = r(314);
}, function(e, t, r) {
	e.exports = r(318);
}, function(e, t, r) {
	e.exports = r(320);
}, function(e, t) {
	var r = {}.toString;
	e.exports = function(e) {
		return r.call(e).slice(8, -1);
	};
}, function(e, t) {
	e.exports = !0;
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			enumerable: !(1 & e),
			configurable: !(2 & e),
			writable: !(4 & e),
			value: t
		};
	};
}, function(e, t, r) {
	var n = r(17).Symbol;
	e.exports = n;
}, function(e, t) {
	t.f = {}.propertyIsEnumerable;
}, function(e, t, r) {
	e.exports = r(310);
}, function(e, t, r) {
	var n = r(295), a = r(21), o = new Date, i = {
		name: "Super_preloaderPlus_one_New",
		shortname: "Super-preloader",
		"name-CN": "Super_preloaderPlus_one_改",
		namespace: "https://github.com/machsix",
		icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==",
		author: n.author,
		version: n.version,
		license: n.license,
		changelog: "draggable floatWindow",
		greasyfork: "https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new",
		updateTime: `${o.getFullYear()}/${o.getMonth() + 1}/${o.getDate()}`,
		homepageURL: "https://github.com/machsix/Super-preloader",
		rewriteStorage: "6.6.83"
	};
	i.downloadURL = `${i.greasyfork}/code/${i.name}.user.js`, i.metaURL = `${i.greasyfork}/code/${i.name}.meta.js`;
	var s = {
		text: {
			zh_CN: "你现在可以通过拖拽改变悬浮窗位置！",
			en_US: "You can now change the location of the floatWindow by dragging it!"
		},
		title: i.name,
		image: i.icon,
		onload: function onload() {},
		show: function show(e, t) {
			return a(e, "6.11.0") < 0 && a(t, "6.11.0") >= 0;
		}
	}, c = `// ==UserScript==\n// @name         ${i.name}\n// @name:zh-CN   ${i["name-CN"]}\n// @name:zh-TW   ${i["name-CN"]}\n// @namespace    ${i.namespace}\n// @description  Preload and Autopager\n// @description:zh-CN  预读+翻页..全加速你的浏览体验\n// @description:zh-TW  预读+翻页..全加速你的浏览体验\n// @author       ${i.author}\n// @contributers YFdyh000, suchunchen\n// @thanksto     ywzhaiqi, NLF\n// @version      ${i.version}\n// @license      ${i.license}\n// @update       ${i.updateTime}\n// @homepageURL  ${i.homepageURL}\n// @supportURL   ${i.greasyfork}/feedback\n// @contributionURL https://ko-fi.com/machsix\n// @icon         ${i.icon}\n// @require      https://greasyfork.org/scripts/373124-gm4-polyfill-mach6-legacy/code/gm4-polyfill-mach6-legacy.js?version=758289\n// @grant        GM.getValue\n// @grant        GM_getValue\n// @grant        GM.setValue\n// @grant        GM_setValue\n// @grant        GM.notification\n// @grant        GM_notification\n// @grant        GM.xmlHttpRequest\n// @grant        GM_xmlhttpRequest\n// @grant        GM.info\n// @grant        GM_info\n// @grant        GM_registerMenuCommand\n// @connect      wedata.net\n// @connect      github.io\n// @include      http*\n// @exclude      http*://mail.google.com/*\n// @exclude      http*://maps.google*\n// @exclude      http*://www.google.com/reader*\n// @exclude      http*://www.google.com/calendar*\n// @exclude      https://docs.google.com/*\n// @exclude      http*://app.yinxiang.com/*\n// @exclude      http*://www.dropbox.com/*\n// @exclude      http*://www.toodledo.com/*\n// @exclude      http://cloud.feedly.com/*\n// @exclude      http://weibo.com/*\n// @exclude      http://w.qq.com/*\n// @exclude      http://web2.qq.com/*\n// @exclude      http://openapi.qzone.qq.com/*\n// @exclude      http://*cloud.vip.xunlei.com/*\n// @exclude      http*://www.wumii.com/*\n// @exclude      http://pan.baidu.com/*\n// @exclude      http://yun.baidu.com/*\n// @exclude      http://www.cnbeta.com/*\n// @exclude      http://www.youku.com/\n// @exclude      http://v.youku.com/*\n// @exclude      http://www.iqiyi.com/*\n// @exclude      http://www.duokan.com/reader/*\n// @exclude      https://www.kohls.com/*\n// @exclude      http://list.jd.com/*\n// @exclude      http*://eclick.baidu.com/*\n// @exclude      http*://googleads.g.doubleclick.net/*\n// @exclude      http*://pos.baidu.com/*\n// @exclude      http*://tpc.googlesyndication.com/*\n// @exclude      http*://ad.doubleclick.net/*\n// @exclude      http*://ad.agrantsem.com/*\n// ==/UserScript==\n`;
	e.exports = {
		NOTIFICATION: s,
		METADATA: c,
		SCRIPT_INFO: i
	};
}, function(e, t, r) {
	var n = r(141), a = r(143), o = r(59), i = r(8), s = r(60), c = r(88), u = r(142), l = r(89), p = "[object Map]", f = "[object Set]", d = Object.prototype.hasOwnProperty;
	e.exports = function isEmpty(e) {
		if (null == e) return !0;
		if (s(e) && (i(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || l(e) || o(e))) return !e.length;
		var t = a(e);
		if (t == p || t == f) return !e.size;
		if (u(e)) return !n(e).length;
		for (var r in e) if (d.call(e, r)) return !1;
		return !0;
	};
}, function(e, t, r) {
	var n = r(5);
	function asyncGeneratorStep(e, t, r, a, o, i, s) {
		try {
			var c = e[i](s), u = c.value;
		} catch (e) {
			return void r(e);
		}
		c.done ? t(u) : n.resolve(u).then(a, o);
	}
	e.exports = function _asyncToGenerator(e) {
		return function() {
			var t = this, r = arguments;
			return new n((function(n, a) {
				var o = e.apply(t, r);
				function _next(e) {
					asyncGeneratorStep(o, n, a, _next, _throw, "next", e);
				}
				function _throw(e) {
					asyncGeneratorStep(o, n, a, _next, _throw, "throw", e);
				}
				_next(void 0);
			}));
		};
	};
}, function(e, t, r) {
	var n = r(50);
	e.exports = function(e) {
		return Object(n(e));
	};
}, function(e, t) {
	e.exports = function(e) {
		if (null == e) throw TypeError("Can't call method on  " + e);
		return e;
	};
}, function(e, t) {
	var r = 0, n = Math.random();
	e.exports = function(e) {
		return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36));
	};
}, function(e, t, r) {
	var n = r(53);
	e.exports = function(e, t, r) {
		if (n(e), void 0 === t) return e;
		switch (r) {
			case 1:
				return function(r) {
					return e.call(t, r);
				};

			case 2:
				return function(r, n) {
					return e.call(t, r, n);
				};

			case 3:
				return function(r, n, a) {
					return e.call(t, r, n, a);
				};
		}
		return function() {
			return e.apply(t, arguments);
		};
	};
}, function(e, t) {
	e.exports = function(e) {
		if ("function" != typeof e) throw TypeError(e + " is not a function!");
		return e;
	};
}, function(e, t, r) {
	var n = r(16).f, a = r(23), o = r(9)("toStringTag");
	e.exports = function(e, t, r) {
		e && !a(e = r ? e : e.prototype, o) && n(e, o, {
			configurable: !0,
			value: t
		});
	};
}, function(e, t, r) {
	var n = r(27)(Object, "create");
	e.exports = n;
}, function(e, t, r) {
	var n = r(222), a = r(223), o = r(224), i = r(225), s = r(226);
	function ListCache(e) {
		var t = -1, r = null == e ? 0 : e.length;
		for (this.clear(); ++t < r; ) {
			var n = e[t];
			this.set(n[0], n[1]);
		}
	}
	ListCache.prototype.clear = n, ListCache.prototype.delete = a, ListCache.prototype.get = o,
		ListCache.prototype.has = i, ListCache.prototype.set = s, e.exports = ListCache;
}, function(e, t, r) {
	var n = r(127);
	e.exports = function assocIndexOf(e, t) {
		for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
		return -1;
	};
}, function(e, t, r) {
	var n = r(228);
	e.exports = function getMapData(e, t) {
		var r = e.__data__;
		return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
	};
}, function(e, t, r) {
	var n = r(238), a = r(20), o = Object.prototype, i = o.hasOwnProperty, s = o.propertyIsEnumerable, c = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return a(e) && i.call(e, "callee") && !s.call(e, "callee");
	};
	e.exports = c;
}, function(e, t, r) {
	var n = r(65), a = r(85);
	e.exports = function isArrayLike(e) {
		return null != e && a(e.length) && !n(e);
	};
}, function(e, t, r) {
	var n = r(28), a = r(20), o = "[object Symbol]";
	e.exports = function isSymbol(e) {
		return "symbol" == typeof e || a(e) && n(e) == o;
	};
}, function(e, t, r) {
	var n = r(61), a = 1 / 0;
	e.exports = function toKey(e) {
		if ("string" == typeof e || n(e)) return e;
		var t = e + "";
		return "0" == t && 1 / e == -a ? "-0" : t;
	};
}, function(e, t, r) {
	"use strict";
	e.exports = function(e) {
		var t = [];
		return t.toString = function toString() {
			return this.map((function(t) {
				var r = function cssWithMappingToString(e, t) {
					var r = e[1] || "", n = e[3];
					if (!n) return r;
					if (t && "function" == typeof btoa) {
						var a = function toComment(e) {
							var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);
							return "/*# ".concat(r, " */");
						}(n), o = n.sources.map((function(e) {
							return "/*# sourceURL=".concat(n.sourceRoot).concat(e, " */");
						}));
						return [ r ].concat(o).concat([ a ]).join("\n");
					}
					return [ r ].join("\n");
				}(t, e);
				return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
			})).join("");
		}, t.i = function(e, r) {
			"string" == typeof e && (e = [ [ null, e, "" ] ]);
			for (var n = 0; n < e.length; n++) {
				var a = [].concat(e[n]);
				r && (a[2] ? a[2] = "".concat(r, " and ").concat(a[2]) : a[2] = r), t.push(a);
			}
		}, t;
	};
}, function(e, t) {
	t.f = Object.getOwnPropertySymbols;
}, function(e, t, r) {
	var n = r(28), a = r(34), o = "[object AsyncFunction]", i = "[object Function]", s = "[object GeneratorFunction]", c = "[object Proxy]";
	e.exports = function isFunction(e) {
		if (!a(e)) return !1;
		var t = n(e);
		return t == i || t == s || t == o || t == c;
	};
}, function(e, t, r) {
	e.exports = r(312);
}, function(e, t, r) {
	var n = r(45);
	e.exports = function _defineProperty(e, t, r) {
		return t in e ? n(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e;
	};
}, function(e, t, r) {
	"use strict";
	var n = r(45), a = r.n(n), o = r(66), i = r.n(o), s = r(37), c = r.n(s), u = r(38), l = r.n(u), p = r(39), f = r.n(p), d = r(29), _ = r.n(d), h = r(5), m = r.n(h), g = r(161), b = r.n(g), v = r(4), y = r.n(v), w = r(67), E = r.n(w), x = r(13), O = r.n(x), S = r(36), P = r.n(S), A = r(34), M = r.n(A), I = r(101), D = r.n(I), C = r(47), T = r.n(C), B = r(10), k = r.n(B), L = r(102), R = r.n(L), U = r(103), j = r.n(U), W = r(0), lowercaseKeys = function(e) {
		for (var t = {}, r = 0, n = P()(e); r < n.length; r++) {
			var a = O()(n[r], 2), o = a[0], i = a[1];
			t[o.toLowerCase()] = i;
		}
		return t;
	}, N = r(104), K = r.n(N), F = r(162), z = r.n(F);
	function ownKeys(e, t) {
		var r = _()(e);
		if (f.a) {
			var n = f()(e);
			t && (n = n.filter((function(t) {
				return l()(e, t).enumerable;
			}))), r.push.apply(r, n);
		}
		return r;
	}
	function _objectSpread(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? ownKeys(Object(r), !0).forEach((function(t) {
				E()(e, t, r[t]);
			})) : c.a ? i()(e, c()(r)) : ownKeys(Object(r)).forEach((function(t) {
				a()(e, t, l()(r, t));
			}));
		}
		return e;
	}
	var q = function isNullOrUndefined(e) {
		return j()(e) || R()(e);
	}, G = {
		method: "GET",
		retry: 0,
		headers: {},
		stream: !1,
		cache: !0,
		dnsCache: !1,
		encoding: null,
		prefixUrl: "",
		timeout: 0,
		searchParams: {},
		body: null,
		data: null,
		binary: !1,
		user: null,
		password: null,
		context: null,
		html: !1,
		noHeader: !1,
		cookie: null,
		withCredentials: !0
	};
	function parseArgument(e, t) {
		var r = _objectSpread({}, t);
		return q(t) && M()(e) && (r = _objectSpread({}, e)), k()(e) && (r.url = e), r;
	}
	var H = function create(e) {
		var t = function request(e) {
			var t = _objectSpread({}, e), r = function gotopt2gmopt(e) {
				var t = {};
				return [ "method", "url", "timeout", "headers", "binary", "user", "password", "context", "withCredentials", "data" ].forEach((function(r) {
					q(e[r]) || (t[r] = e[r]);
				})), e.prefixUrl && (t.url = e.prefixUrl + e.url), e.html && k()(e.encoding) && (t.overrideMimeType = `text/html; charset=${e.encoding}`),
				q(e.searchParams) || (t.url += `?${K.a.stringify(e.searchParams, null, null, (function(t) {
					return z()(t, e.encoding);
				}))}`), t;
			}(t = function normalizeArguments(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G, r = [];
				if (!q(e.headers) && k()(e.headers)) try {
					e.headers = JSON.parse(e.headers);
				} catch (t) {
					console.error(`[Super-preloader] [got] header: ${e.headers} error: ${t}`), delete e.headers;
				}
				if (!q(e.headers) && !T()(e.headers)) {
					e.headers = lowercaseKeys(e.headers);
					var n = e.headers;
					if (n) for (var a = 0, o = P()(n); a < o.length; a++) {
						var i = O()(o[a], 2), s = i[0], c = i[1];
						(R()(c) || j()(c)) && delete n[s];
					}
				}
				if (e.headers = _objectSpread({}, t.headers, {}, e.headers), T()(e.headers) && delete e.headers,
					r.push("headers"), !q(e.prefixUrl)) try {
					e.prefixUrl = e.prefixUrl.toString(), e.prefixUrl.endsWith("/") || (e.prefixUrl += "/");
				} catch (t) {
					delete e.prefixUrl;
				}
				for (var u in e.method = e.method.toUpperCase(), e.timeout && (e.timeout = y()(e.timeout)),
					e.hasOwnProperty("html") ? e.html && (e.binary = !1) : e.html = t.html, r.push("encoding"),
					r.push("html"), e.searchParams ? k()(e.searchParams) && (e.searchParams = K.a.parse(e.querystring)) : e.searchParams = {},
					r.push("searchParams"), e.body && (e.data = e.body), t) u in r || q(e[u]) && (e[u] = t[u]);
				return q(e.cookie) || (D()(e.cookie) && e.cookie && (e.cookie = document.cookie),
				k()(e.cookie) && (e.hasOwnProperty("headers") ? e.headers.cookie = e.cookie : e.headers = {
					cookie: e.cookie
				})), (e.noHeader || T()(e.headers)) && delete e.headers, D()(e.cache) && !e.cache && (e.searchParams.timestamp = (new Date).getTime()),
				T()(e.searchParams) && delete e.searchParams, e;
			}(t, request.defaults));
			W.a.debug("[Super-preloader]", "GM_xmlhttpRequest", r);
			var n = function genCallback(e, r, n) {
				return function(a) {
					var o = {
						data: a.responseText,
						body: a.responseText,
						statusCode: a.status,
						statusMessage: a.statusText,
						method: t.method,
						url: a.finalUrl,
						requestUrl: t.url,
						retryCount: n,
						executorName: r
					};
					return b()(o, a), e(o);
				};
			};
			return new m.a((function(e, a) {
				!function retryPromise(o) {
					(function genPromise() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						return new m.a((function(t, a) {
							r.onload = n(t, "onload", e), [ "onabort", "onerror", "ontimeout" ].forEach((function(t) {
								r[t] = n(a, t, e);
							})), GM.xmlHttpRequest(r);
						}));
					})(o).then((function(t) {
						return e(t);
					})).catch((function(e) {
						o < t.retry ? retryPromise(o + 1) : a(e);
					}));
				}(0);
			}));
		};
		for (var r in t.defaults = {}, G) t.defaults[r] = q(e[r]) ? G[r] : e[r];
		return t.get = function(e, t) {
			var r = parseArgument(e, t);
			return r.method = "GET", this(r);
		}, t.post = function(e, t) {
			var r = parseArgument(e, t);
			return r.method = "POST", this(r);
		}, t.create = create, t;
	}(G);
	t.a = H;
}, function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return emoji;
	}));
	var n = r(4), a = r.n(n), o = r(105), i = r.n(o), s = r(0);
	function emoji(e) {
		if (i.a) {
			var t = a()(e, 16);
			return i()(t);
		}
		return s.a.error("[Super-preloader]", "Shame on your browser!"), "";
	}
}, function(e, t) {
	var r = Math.ceil, n = Math.floor;
	e.exports = function(e) {
		return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e);
	};
}, function(e, t, r) {
	var n = r(72)("keys"), a = r(51);
	e.exports = function(e) {
		return n[e] || (n[e] = a(e));
	};
}, function(e, t, r) {
	var n = r(3), a = r(6), o = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
	(e.exports = function(e, t) {
		return o[e] || (o[e] = void 0 !== t ? t : {});
	})("versions", []).push({
		version: n.version,
		mode: r(41) ? "pure" : "global",
		copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
	});
}, function(e, t) {
	e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(e, t, r) {
	var n = r(25), a = r(6).document, o = n(a) && n(a.createElement);
	e.exports = function(e) {
		return o ? a.createElement(e) : {};
	};
}, function(e, t, r) {
	var n = r(25);
	e.exports = function(e, t) {
		if (!n(e)) return e;
		var r, a;
		if (t && "function" == typeof (r = e.toString) && !n(a = r.call(e))) return a;
		if ("function" == typeof (r = e.valueOf) && !n(a = r.call(e))) return a;
		if (!t && "function" == typeof (r = e.toString) && !n(a = r.call(e))) return a;
		throw TypeError("Can't convert object to primitive value");
	};
}, function(e, t, r) {
	r(182);
	for (var n = r(6), a = r(24), o = r(32), i = r(9)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
		var u = s[c], l = n[u], p = l && l.prototype;
		p && !p[i] && a(p, i, u), o[u] = o.Array;
	}
}, function(e, t, r) {
	"use strict";
	var n = r(187)(!0);
	r(114)(String, "String", (function(e) {
		this._t = String(e), this._i = 0;
	}), (function() {
		var e, t = this._t, r = this._i;
		return r >= t.length ? {
			value: void 0,
			done: !0
		} : (e = n(t, r), this._i += e.length, {
			value: e,
			done: !1
		});
	}));
}, function(e, t, r) {
	var n = r(40), a = r(9)("toStringTag"), o = "Arguments" == n(function() {
		return arguments;
	}());
	e.exports = function(e) {
		var t, r, i;
		return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function(e, t) {
			try {
				return e[t];
			} catch (e) {}
		}(t = Object(e), a)) ? r : o ? n(t) : "Object" == (i = n(t)) && "function" == typeof t.callee ? "Arguments" : i;
	};
}, function(e, t, r) {
	"use strict";
	var n = r(53);
	function PromiseCapability(e) {
		var t, r;
		this.promise = new e((function(e, n) {
			if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
			t = e, r = n;
		})), this.resolve = n(t), this.reject = n(r);
	}
	e.exports.f = function(e) {
		return new PromiseCapability(e);
	};
}, function(e, t, r) {
	var n = r(81), a = r(232), o = r(233);
	function SetCache(e) {
		var t = -1, r = null == e ? 0 : e.length;
		for (this.__data__ = new n; ++t < r; ) this.add(e[t]);
	}
	SetCache.prototype.add = SetCache.prototype.push = a, SetCache.prototype.has = o,
		e.exports = SetCache;
}, function(e, t, r) {
	var n = r(209), a = r(227), o = r(229), i = r(230), s = r(231);
	function MapCache(e) {
		var t = -1, r = null == e ? 0 : e.length;
		for (this.clear(); ++t < r; ) {
			var n = e[t];
			this.set(n[0], n[1]);
		}
	}
	MapCache.prototype.clear = n, MapCache.prototype.delete = a, MapCache.prototype.get = o,
		MapCache.prototype.has = i, MapCache.prototype.set = s, e.exports = MapCache;
}, function(e, t, r) {
	var n = r(27)(r(17), "Map");
	e.exports = n;
}, function(e, t) {
	e.exports = function cacheHas(e, t) {
		return e.has(t);
	};
}, function(e, t) {
	e.exports = function identity(e) {
		return e;
	};
}, function(e, t) {
	var r = 9007199254740991;
	e.exports = function isLength(e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r;
	};
}, function(e, t) {
	e.exports = function setToArray(e) {
		var t = -1, r = Array(e.size);
		return e.forEach((function(e) {
			r[++t] = e;
		})), r;
	};
}, function(e, t, r) {
	var n = r(267), a = r(141), o = r(60);
	e.exports = function keys(e) {
		return o(e) ? n(e) : a(e);
	};
}, function(e, t, r) {
	(function(e) {
		var n = r(17), a = r(269), o = t && !t.nodeType && t, i = o && "object" == typeof e && e && !e.nodeType && e, s = i && i.exports === o ? n.Buffer : void 0, c = (s ? s.isBuffer : void 0) || a;
		e.exports = c;
	}).call(this, r(139)(e));
}, function(e, t, r) {
	var n = r(270), a = r(132), o = r(271), i = o && o.isTypedArray, s = i ? a(i) : n;
	e.exports = s;
}, function(e, t, r) {
	var n = r(8), a = r(61), o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, i = /^\w*$/;
	e.exports = function isKey(e, t) {
		if (n(e)) return !1;
		var r = typeof e;
		return !("number" != r && "symbol" != r && "boolean" != r && null != e && !a(e)) || (i.test(e) || !o.test(e) || null != t && e in Object(t));
	};
}, function(e, t) {
	var r, n, a = e.exports = {};
	function defaultSetTimout() {
		throw new Error("setTimeout has not been defined");
	}
	function defaultClearTimeout() {
		throw new Error("clearTimeout has not been defined");
	}
	function runTimeout(e) {
		if (r === setTimeout) return setTimeout(e, 0);
		if ((r === defaultSetTimout || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
		try {
			return r(e, 0);
		} catch (t) {
			try {
				return r.call(null, e, 0);
			} catch (t) {
				return r.call(this, e, 0);
			}
		}
	}
	!function() {
		try {
			r = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
		} catch (e) {
			r = defaultSetTimout;
		}
		try {
			n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
		} catch (e) {
			n = defaultClearTimeout;
		}
	}();
	var o, i = [], s = !1, c = -1;
	function cleanUpNextTick() {
		s && o && (s = !1, o.length ? i = o.concat(i) : c = -1, i.length && drainQueue());
	}
	function drainQueue() {
		if (!s) {
			var e = runTimeout(cleanUpNextTick);
			s = !0;
			for (var t = i.length; t; ) {
				for (o = i, i = []; ++c < t; ) o && o[c].run();
				c = -1, t = i.length;
			}
			o = null, s = !1, function runClearTimeout(e) {
				if (n === clearTimeout) return clearTimeout(e);
				if ((n === defaultClearTimeout || !n) && clearTimeout) return n = clearTimeout,
					clearTimeout(e);
				try {
					return n(e);
				} catch (t) {
					try {
						return n.call(null, e);
					} catch (t) {
						return n.call(this, e);
					}
				}
			}(e);
		}
	}
	function Item(e, t) {
		this.fun = e, this.array = t;
	}
	function noop() {}
	a.nextTick = function(e) {
		var t = new Array(arguments.length - 1);
		if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
		i.push(new Item(e, t)), 1 !== i.length || s || runTimeout(drainQueue);
	}, Item.prototype.run = function() {
		this.fun.apply(null, this.array);
	}, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "",
		a.versions = {}, a.on = noop, a.addListener = noop, a.once = noop, a.off = noop,
		a.removeListener = noop, a.removeAllListeners = noop, a.emit = noop, a.prependListener = noop,
		a.prependOnceListener = noop, a.listeners = function(e) {
		return [];
	}, a.binding = function(e) {
		throw new Error("process.binding is not supported");
	}, a.cwd = function() {
		return "/";
	}, a.chdir = function(e) {
		throw new Error("process.chdir is not supported");
	}, a.umask = function() {
		return 0;
	};
}, function(e, t, r) {
	var n = r(106), a = r(73).concat("length", "prototype");
	t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
		return n(e, a);
	};
}, function(e, t, r) {
	var n = r(44), a = r(42), o = r(15), i = r(75), s = r(23), c = r(111), u = Object.getOwnPropertyDescriptor;
	t.f = r(11) ? u : function getOwnPropertyDescriptor(e, t) {
		if (e = o(e), t = i(t, !0), c) try {
			return u(e, t);
		} catch (e) {}
		if (s(e, t)) return a(!n.f.call(e, t), e[t]);
	};
}, function(e, t, r) {
	"use strict";
	(function(e) {
		/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
		var n = r(331), a = r(332), o = r(333);
		function kMaxLength() {
			return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
		}
		function createBuffer(e, t) {
			if (kMaxLength() < t) throw new RangeError("Invalid typed array length");
			return Buffer.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Buffer.prototype : (null === e && (e = new Buffer(t)),
				e.length = t), e;
		}
		function Buffer(e, t, r) {
			if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer)) return new Buffer(e, t, r);
			if ("number" == typeof e) {
				if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
				return allocUnsafe(this, e);
			}
			return from(this, e, t, r);
		}
		function from(e, t, r, n) {
			if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
			return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function fromArrayBuffer(e, t, r, n) {
				if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
				if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
				t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
				Buffer.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Buffer.prototype : e = fromArrayLike(e, t);
				return e;
			}(e, t, r, n) : "string" == typeof t ? function fromString(e, t, r) {
				"string" == typeof r && "" !== r || (r = "utf8");
				if (!Buffer.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
				var n = 0 | byteLength(t, r), a = (e = createBuffer(e, n)).write(t, r);
				a !== n && (e = e.slice(0, a));
				return e;
			}(e, t, r) : function fromObject(e, t) {
				if (Buffer.isBuffer(t)) {
					var r = 0 | checked(t.length);
					return 0 === (e = createBuffer(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
				}
				if (t) {
					if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function isnan(e) {
						return e != e;
					}(t.length) ? createBuffer(e, 0) : fromArrayLike(e, t);
					if ("Buffer" === t.type && o(t.data)) return fromArrayLike(e, t.data);
				}
				throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
			}(e, t);
		}
		function assertSize(e) {
			if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
			if (e < 0) throw new RangeError('"size" argument must not be negative');
		}
		function allocUnsafe(e, t) {
			if (assertSize(t), e = createBuffer(e, t < 0 ? 0 : 0 | checked(t)), !Buffer.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) e[r] = 0;
			return e;
		}
		function fromArrayLike(e, t) {
			var r = t.length < 0 ? 0 : 0 | checked(t.length);
			e = createBuffer(e, r);
			for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
			return e;
		}
		function checked(e) {
			if (e >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
			return 0 | e;
		}
		function byteLength(e, t) {
			if (Buffer.isBuffer(e)) return e.length;
			if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
			"string" != typeof e && (e = "" + e);
			var r = e.length;
			if (0 === r) return 0;
			for (var n = !1; ;) switch (t) {
				case "ascii":
				case "latin1":
				case "binary":
					return r;

				case "utf8":
				case "utf-8":
				case void 0:
					return utf8ToBytes(e).length;

				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * r;

				case "hex":
					return r >>> 1;

				case "base64":
					return base64ToBytes(e).length;

				default:
					if (n) return utf8ToBytes(e).length;
					t = ("" + t).toLowerCase(), n = !0;
			}
		}
		function slowToString(e, t, r) {
			var n = !1;
			if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
			if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
			if ((r >>>= 0) <= (t >>>= 0)) return "";
			for (e || (e = "utf8"); ;) switch (e) {
				case "hex":
					return hexSlice(this, t, r);

				case "utf8":
				case "utf-8":
					return utf8Slice(this, t, r);

				case "ascii":
					return asciiSlice(this, t, r);

				case "latin1":
				case "binary":
					return latin1Slice(this, t, r);

				case "base64":
					return base64Slice(this, t, r);

				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return utf16leSlice(this, t, r);

				default:
					if (n) throw new TypeError("Unknown encoding: " + e);
					e = (e + "").toLowerCase(), n = !0;
			}
		}
		function swap(e, t, r) {
			var n = e[t];
			e[t] = e[r], e[r] = n;
		}
		function bidirectionalIndexOf(e, t, r, n, a) {
			if (0 === e.length) return -1;
			if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
				r = +r, isNaN(r) && (r = a ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
				if (a) return -1;
				r = e.length - 1;
			} else if (r < 0) {
				if (!a) return -1;
				r = 0;
			}
			if ("string" == typeof t && (t = Buffer.from(t, n)), Buffer.isBuffer(t)) return 0 === t.length ? -1 : arrayIndexOf(e, t, r, n, a);
			if ("number" == typeof t) return t &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : arrayIndexOf(e, [ t ], r, n, a);
			throw new TypeError("val must be string, number or Buffer");
		}
		function arrayIndexOf(e, t, r, n, a) {
			var o, i = 1, s = e.length, c = t.length;
			if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
				if (e.length < 2 || t.length < 2) return -1;
				i = 2, s /= 2, c /= 2, r /= 2;
			}
			function read(e, t) {
				return 1 === i ? e[t] : e.readUInt16BE(t * i);
			}
			if (a) {
				var u = -1;
				for (o = r; o < s; o++) if (read(e, o) === read(t, -1 === u ? 0 : o - u)) {
					if (-1 === u && (u = o), o - u + 1 === c) return u * i;
				} else -1 !== u && (o -= o - u), u = -1;
			} else for (r + c > s && (r = s - c), o = r; o >= 0; o--) {
				for (var l = !0, p = 0; p < c; p++) if (read(e, o + p) !== read(t, p)) {
					l = !1;
					break;
				}
				if (l) return o;
			}
			return -1;
		}
		function hexWrite(e, t, r, n) {
			r = Number(r) || 0;
			var a = e.length - r;
			n ? (n = Number(n)) > a && (n = a) : n = a;
			var o = t.length;
			if (o % 2 != 0) throw new TypeError("Invalid hex string");
			n > o / 2 && (n = o / 2);
			for (var i = 0; i < n; ++i) {
				var s = parseInt(t.substr(2 * i, 2), 16);
				if (isNaN(s)) return i;
				e[r + i] = s;
			}
			return i;
		}
		function utf8Write(e, t, r, n) {
			return blitBuffer(utf8ToBytes(t, e.length - r), e, r, n);
		}
		function asciiWrite(e, t, r, n) {
			return blitBuffer(function asciiToBytes(e) {
				for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
				return t;
			}(t), e, r, n);
		}
		function latin1Write(e, t, r, n) {
			return asciiWrite(e, t, r, n);
		}
		function base64Write(e, t, r, n) {
			return blitBuffer(base64ToBytes(t), e, r, n);
		}
		function ucs2Write(e, t, r, n) {
			return blitBuffer(function utf16leToBytes(e, t) {
				for (var r, n, a, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) r = e.charCodeAt(i),
					n = r >> 8, a = r % 256, o.push(a), o.push(n);
				return o;
			}(t, e.length - r), e, r, n);
		}
		function base64Slice(e, t, r) {
			return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r));
		}
		function utf8Slice(e, t, r) {
			r = Math.min(e.length, r);
			for (var n = [], a = t; a < r; ) {
				var o, s, c, u, l = e[a], p = null, f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
				if (a + f <= r) switch (f) {
					case 1:
						l < 128 && (p = l);
						break;

					case 2:
						128 == (192 & (o = e[a + 1])) && (u = (31 & l) << 6 | 63 & o) > 127 && (p = u);
						break;

					case 3:
						o = e[a + 1], s = e[a + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & l) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (p = u);
						break;

					case 4:
						o = e[a + 1], s = e[a + 2], c = e[a + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & c) && (u = (15 & l) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & c) > 65535 && u < 1114112 && (p = u);
				}
				null === p ? (p = 65533, f = 1) : p > 65535 && (p -= 65536, n.push(p >>> 10 & 1023 | 55296),
					p = 56320 | 1023 & p), n.push(p), a += f;
			}
			return function decodeCodePointsArray(e) {
				var t = e.length;
				if (t <= i) return String.fromCharCode.apply(String, e);
				var r = "", n = 0;
				for (;n < t; ) r += String.fromCharCode.apply(String, e.slice(n, n += i));
				return r;
			}(n);
		}
		t.Buffer = Buffer, t.SlowBuffer = function SlowBuffer(e) {
			+e != e && (e = 0);
			return Buffer.alloc(+e);
		}, t.INSPECT_MAX_BYTES = 50, Buffer.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function typedArraySupport() {
			try {
				var e = new Uint8Array(1);
				return e.__proto__ = {
					__proto__: Uint8Array.prototype,
					foo: function() {
						return 42;
					}
				}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
			} catch (e) {
				return !1;
			}
		}(), t.kMaxLength = kMaxLength(), Buffer.poolSize = 8192, Buffer._augment = function(e) {
			return e.__proto__ = Buffer.prototype, e;
		}, Buffer.from = function(e, t, r) {
			return from(null, e, t, r);
		}, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype,
			Buffer.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
			value: null,
			configurable: !0
		})), Buffer.alloc = function(e, t, r) {
			return function alloc(e, t, r, n) {
				return assertSize(t), t <= 0 ? createBuffer(e, t) : void 0 !== r ? "string" == typeof n ? createBuffer(e, t).fill(r, n) : createBuffer(e, t).fill(r) : createBuffer(e, t);
			}(null, e, t, r);
		}, Buffer.allocUnsafe = function(e) {
			return allocUnsafe(null, e);
		}, Buffer.allocUnsafeSlow = function(e) {
			return allocUnsafe(null, e);
		}, Buffer.isBuffer = function isBuffer(e) {
			return !(null == e || !e._isBuffer);
		}, Buffer.compare = function compare(e, t) {
			if (!Buffer.isBuffer(e) || !Buffer.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
			if (e === t) return 0;
			for (var r = e.length, n = t.length, a = 0, o = Math.min(r, n); a < o; ++a) if (e[a] !== t[a]) {
				r = e[a], n = t[a];
				break;
			}
			return r < n ? -1 : n < r ? 1 : 0;
		}, Buffer.isEncoding = function isEncoding(e) {
			switch (String(e).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return !0;

				default:
					return !1;
			}
		}, Buffer.concat = function concat(e, t) {
			if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
			if (0 === e.length) return Buffer.alloc(0);
			var r;
			if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
			var n = Buffer.allocUnsafe(t), a = 0;
			for (r = 0; r < e.length; ++r) {
				var i = e[r];
				if (!Buffer.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
				i.copy(n, a), a += i.length;
			}
			return n;
		}, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function swap16() {
			var e = this.length;
			if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (var t = 0; t < e; t += 2) swap(this, t, t + 1);
			return this;
		}, Buffer.prototype.swap32 = function swap32() {
			var e = this.length;
			if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (var t = 0; t < e; t += 4) swap(this, t, t + 3), swap(this, t + 1, t + 2);
			return this;
		}, Buffer.prototype.swap64 = function swap64() {
			var e = this.length;
			if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (var t = 0; t < e; t += 8) swap(this, t, t + 7), swap(this, t + 1, t + 6), swap(this, t + 2, t + 5),
				swap(this, t + 3, t + 4);
			return this;
		}, Buffer.prototype.toString = function toString() {
			var e = 0 | this.length;
			return 0 === e ? "" : 0 === arguments.length ? utf8Slice(this, 0, e) : slowToString.apply(this, arguments);
		}, Buffer.prototype.equals = function equals(e) {
			if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
			return this === e || 0 === Buffer.compare(this, e);
		}, Buffer.prototype.inspect = function inspect() {
			var e = "", r = t.INSPECT_MAX_BYTES;
			return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
			this.length > r && (e += " ... ")), "<Buffer " + e + ">";
		}, Buffer.prototype.compare = function compare(e, t, r, n, a) {
			if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
			if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0),
			void 0 === a && (a = this.length), t < 0 || r > e.length || n < 0 || a > this.length) throw new RangeError("out of range index");
			if (n >= a && t >= r) return 0;
			if (n >= a) return -1;
			if (t >= r) return 1;
			if (this === e) return 0;
			for (var o = (a >>>= 0) - (n >>>= 0), i = (r >>>= 0) - (t >>>= 0), s = Math.min(o, i), c = this.slice(n, a), u = e.slice(t, r), l = 0; l < s; ++l) if (c[l] !== u[l]) {
				o = c[l], i = u[l];
				break;
			}
			return o < i ? -1 : i < o ? 1 : 0;
		}, Buffer.prototype.includes = function includes(e, t, r) {
			return -1 !== this.indexOf(e, t, r);
		}, Buffer.prototype.indexOf = function indexOf(e, t, r) {
			return bidirectionalIndexOf(this, e, t, r, !0);
		}, Buffer.prototype.lastIndexOf = function lastIndexOf(e, t, r) {
			return bidirectionalIndexOf(this, e, t, r, !1);
		}, Buffer.prototype.write = function write(e, t, r, n) {
			if (void 0 === t) n = "utf8", r = this.length, t = 0; else if (void 0 === r && "string" == typeof t) n = t,
				r = this.length, t = 0; else {
				if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
				t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
			}
			var a = this.length - t;
			if ((void 0 === r || r > a) && (r = a), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			n || (n = "utf8");
			for (var o = !1; ;) switch (n) {
				case "hex":
					return hexWrite(this, e, t, r);

				case "utf8":
				case "utf-8":
					return utf8Write(this, e, t, r);

				case "ascii":
					return asciiWrite(this, e, t, r);

				case "latin1":
				case "binary":
					return latin1Write(this, e, t, r);

				case "base64":
					return base64Write(this, e, t, r);

				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return ucs2Write(this, e, t, r);

				default:
					if (o) throw new TypeError("Unknown encoding: " + n);
					n = ("" + n).toLowerCase(), o = !0;
			}
		}, Buffer.prototype.toJSON = function toJSON() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			};
		};
		var i = 4096;
		function asciiSlice(e, t, r) {
			var n = "";
			r = Math.min(e.length, r);
			for (var a = t; a < r; ++a) n += String.fromCharCode(127 & e[a]);
			return n;
		}
		function latin1Slice(e, t, r) {
			var n = "";
			r = Math.min(e.length, r);
			for (var a = t; a < r; ++a) n += String.fromCharCode(e[a]);
			return n;
		}
		function hexSlice(e, t, r) {
			var n = e.length;
			(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
			for (var a = "", o = t; o < r; ++o) a += toHex(e[o]);
			return a;
		}
		function utf16leSlice(e, t, r) {
			for (var n = e.slice(t, r), a = "", o = 0; o < n.length; o += 2) a += String.fromCharCode(n[o] + 256 * n[o + 1]);
			return a;
		}
		function checkOffset(e, t, r) {
			if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
			if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
		}
		function checkInt(e, t, r, n, a, o) {
			if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
			if (t > a || t < o) throw new RangeError('"value" argument is out of bounds');
			if (r + n > e.length) throw new RangeError("Index out of range");
		}
		function objectWriteUInt16(e, t, r, n) {
			t < 0 && (t = 65535 + t + 1);
			for (var a = 0, o = Math.min(e.length - r, 2); a < o; ++a) e[r + a] = (t & 255 << 8 * (n ? a : 1 - a)) >>> 8 * (n ? a : 1 - a);
		}
		function objectWriteUInt32(e, t, r, n) {
			t < 0 && (t = 4294967295 + t + 1);
			for (var a = 0, o = Math.min(e.length - r, 4); a < o; ++a) e[r + a] = t >>> 8 * (n ? a : 3 - a) & 255;
		}
		function checkIEEE754(e, t, r, n, a, o) {
			if (r + n > e.length) throw new RangeError("Index out of range");
			if (r < 0) throw new RangeError("Index out of range");
		}
		function writeFloat(e, t, r, n, o) {
			return o || checkIEEE754(e, 0, r, 4), a.write(e, t, r, n, 23, 4), r + 4;
		}
		function writeDouble(e, t, r, n, o) {
			return o || checkIEEE754(e, 0, r, 8), a.write(e, t, r, n, 52, 8), r + 8;
		}
		Buffer.prototype.slice = function slice(e, t) {
			var r, n = this.length;
			if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
			t < e && (t = e), Buffer.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = Buffer.prototype; else {
				var a = t - e;
				r = new Buffer(a, void 0);
				for (var o = 0; o < a; ++o) r[o] = this[o + e];
			}
			return r;
		}, Buffer.prototype.readUIntLE = function readUIntLE(e, t, r) {
			e |= 0, t |= 0, r || checkOffset(e, t, this.length);
			for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); ) n += this[e + o] * a;
			return n;
		}, Buffer.prototype.readUIntBE = function readUIntBE(e, t, r) {
			e |= 0, t |= 0, r || checkOffset(e, t, this.length);
			for (var n = this[e + --t], a = 1; t > 0 && (a *= 256); ) n += this[e + --t] * a;
			return n;
		}, Buffer.prototype.readUInt8 = function readUInt8(e, t) {
			return t || checkOffset(e, 1, this.length), this[e];
		}, Buffer.prototype.readUInt16LE = function readUInt16LE(e, t) {
			return t || checkOffset(e, 2, this.length), this[e] | this[e + 1] << 8;
		}, Buffer.prototype.readUInt16BE = function readUInt16BE(e, t) {
			return t || checkOffset(e, 2, this.length), this[e] << 8 | this[e + 1];
		}, Buffer.prototype.readUInt32LE = function readUInt32LE(e, t) {
			return t || checkOffset(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
		}, Buffer.prototype.readUInt32BE = function readUInt32BE(e, t) {
			return t || checkOffset(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
		}, Buffer.prototype.readIntLE = function readIntLE(e, t, r) {
			e |= 0, t |= 0, r || checkOffset(e, t, this.length);
			for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); ) n += this[e + o] * a;
			return n >= (a *= 128) && (n -= Math.pow(2, 8 * t)), n;
		}, Buffer.prototype.readIntBE = function readIntBE(e, t, r) {
			e |= 0, t |= 0, r || checkOffset(e, t, this.length);
			for (var n = t, a = 1, o = this[e + --n]; n > 0 && (a *= 256); ) o += this[e + --n] * a;
			return o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o;
		}, Buffer.prototype.readInt8 = function readInt8(e, t) {
			return t || checkOffset(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
		}, Buffer.prototype.readInt16LE = function readInt16LE(e, t) {
			t || checkOffset(e, 2, this.length);
			var r = this[e] | this[e + 1] << 8;
			return 32768 & r ? 4294901760 | r : r;
		}, Buffer.prototype.readInt16BE = function readInt16BE(e, t) {
			t || checkOffset(e, 2, this.length);
			var r = this[e + 1] | this[e] << 8;
			return 32768 & r ? 4294901760 | r : r;
		}, Buffer.prototype.readInt32LE = function readInt32LE(e, t) {
			return t || checkOffset(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
		}, Buffer.prototype.readInt32BE = function readInt32BE(e, t) {
			return t || checkOffset(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
		}, Buffer.prototype.readFloatLE = function readFloatLE(e, t) {
			return t || checkOffset(e, 4, this.length), a.read(this, e, !0, 23, 4);
		}, Buffer.prototype.readFloatBE = function readFloatBE(e, t) {
			return t || checkOffset(e, 4, this.length), a.read(this, e, !1, 23, 4);
		}, Buffer.prototype.readDoubleLE = function readDoubleLE(e, t) {
			return t || checkOffset(e, 8, this.length), a.read(this, e, !0, 52, 8);
		}, Buffer.prototype.readDoubleBE = function readDoubleBE(e, t) {
			return t || checkOffset(e, 8, this.length), a.read(this, e, !1, 52, 8);
		}, Buffer.prototype.writeUIntLE = function writeUIntLE(e, t, r, n) {
			(e = +e, t |= 0, r |= 0, n) || checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
			var a = 1, o = 0;
			for (this[t] = 255 & e; ++o < r && (a *= 256); ) this[t + o] = e / a & 255;
			return t + r;
		}, Buffer.prototype.writeUIntBE = function writeUIntBE(e, t, r, n) {
			(e = +e, t |= 0, r |= 0, n) || checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
			var a = r - 1, o = 1;
			for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); ) this[t + a] = e / o & 255;
			return t + r;
		}, Buffer.prototype.writeUInt8 = function writeUInt8(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 1, 255, 0), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
				this[t] = 255 & e, t + 1;
		}, Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
				this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2;
		}, Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
				this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2;
		}, Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
				this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : objectWriteUInt32(this, e, t, !0),
			t + 4;
		}, Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
				this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1),
			t + 4;
		}, Buffer.prototype.writeIntLE = function writeIntLE(e, t, r, n) {
			if (e = +e, t |= 0, !n) {
				var a = Math.pow(2, 8 * r - 1);
				checkInt(this, e, t, r, a - 1, -a);
			}
			var o = 0, i = 1, s = 0;
			for (this[t] = 255 & e; ++o < r && (i *= 256); ) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
				this[t + o] = (e / i >> 0) - s & 255;
			return t + r;
		}, Buffer.prototype.writeIntBE = function writeIntBE(e, t, r, n) {
			if (e = +e, t |= 0, !n) {
				var a = Math.pow(2, 8 * r - 1);
				checkInt(this, e, t, r, a - 1, -a);
			}
			var o = r - 1, i = 1, s = 0;
			for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
				this[t + o] = (e / i >> 0) - s & 255;
			return t + r;
		}, Buffer.prototype.writeInt8 = function writeInt8(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 1, 127, -128), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
			e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
		}, Buffer.prototype.writeInt16LE = function writeInt16LE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
				this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2;
		}, Buffer.prototype.writeInt16BE = function writeInt16BE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
				this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2;
		}, Buffer.prototype.writeInt32LE = function writeInt32LE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 4, 2147483647, -2147483648), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
				this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : objectWriteUInt32(this, e, t, !0),
			t + 4;
		}, Buffer.prototype.writeInt32BE = function writeInt32BE(e, t, r) {
			return e = +e, t |= 0, r || checkInt(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1),
				Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8,
					this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1), t + 4;
		}, Buffer.prototype.writeFloatLE = function writeFloatLE(e, t, r) {
			return writeFloat(this, e, t, !0, r);
		}, Buffer.prototype.writeFloatBE = function writeFloatBE(e, t, r) {
			return writeFloat(this, e, t, !1, r);
		}, Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, t, r) {
			return writeDouble(this, e, t, !0, r);
		}, Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, t, r) {
			return writeDouble(this, e, t, !1, r);
		}, Buffer.prototype.copy = function copy(e, t, r, n) {
			if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length),
			t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
			if (0 === e.length || 0 === this.length) return 0;
			if (t < 0) throw new RangeError("targetStart out of bounds");
			if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
			if (n < 0) throw new RangeError("sourceEnd out of bounds");
			n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
			var a, o = n - r;
			if (this === e && r < t && t < n) for (a = o - 1; a >= 0; --a) e[a + t] = this[a + r]; else if (o < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (a = 0; a < o; ++a) e[a + t] = this[a + r]; else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
			return o;
		}, Buffer.prototype.fill = function fill(e, t, r, n) {
			if ("string" == typeof e) {
				if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r,
					r = this.length), 1 === e.length) {
					var a = e.charCodeAt(0);
					a < 256 && (e = a);
				}
				if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
				if ("string" == typeof n && !Buffer.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
			} else "number" == typeof e && (e &= 255);
			if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
			if (r <= t) return this;
			var o;
			if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < r; ++o) this[o] = e; else {
				var i = Buffer.isBuffer(e) ? e : utf8ToBytes(new Buffer(e, n).toString()), s = i.length;
				for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
			}
			return this;
		};
		var s = /[^+\/0-9A-Za-z-_]/g;
		function toHex(e) {
			return e < 16 ? "0" + e.toString(16) : e.toString(16);
		}
		function utf8ToBytes(e, t) {
			var r;
			t = t || 1 / 0;
			for (var n = e.length, a = null, o = [], i = 0; i < n; ++i) {
				if ((r = e.charCodeAt(i)) > 55295 && r < 57344) {
					if (!a) {
						if (r > 56319) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue;
						}
						if (i + 1 === n) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue;
						}
						a = r;
						continue;
					}
					if (r < 56320) {
						(t -= 3) > -1 && o.push(239, 191, 189), a = r;
						continue;
					}
					r = 65536 + (a - 55296 << 10 | r - 56320);
				} else a && (t -= 3) > -1 && o.push(239, 191, 189);
				if (a = null, r < 128) {
					if ((t -= 1) < 0) break;
					o.push(r);
				} else if (r < 2048) {
					if ((t -= 2) < 0) break;
					o.push(r >> 6 | 192, 63 & r | 128);
				} else if (r < 65536) {
					if ((t -= 3) < 0) break;
					o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
				} else {
					if (!(r < 1114112)) throw new Error("Invalid code point");
					if ((t -= 4) < 0) break;
					o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
				}
			}
			return o;
		}
		function base64ToBytes(e) {
			return n.toByteArray(function base64clean(e) {
				if ((e = function stringtrim(e) {
					return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
				}(e).replace(s, "")).length < 2) return "";
				for (;e.length % 4 != 0; ) e += "=";
				return e;
			}(e));
		}
		function blitBuffer(e, t, r, n) {
			for (var a = 0; a < n && !(a + r >= t.length || a >= e.length); ++a) t[a + r] = e[a];
			return a;
		}
	}).call(this, r(125));
}, function(e) {
	e.exports = JSON.parse('[["0","\\u0000",127,"€"],["8140","丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",5,"乲乴",9,"乿",6,"亇亊"],["8180","亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",6,"伋伌伒",4,"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",4,"佄佅佇",5,"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"],["8240","侤侫侭侰",4,"侶",8,"俀俁係俆俇俈俉俋俌俍俒",4,"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",11],["8280","個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",10,"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",4,"偖偗偘偙偛偝",7,"偦",5,"偭",8,"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",20,"傤傦傪傫傭",4,"傳",6,"傼"],["8340","傽",17,"僐",5,"僗僘僙僛",10,"僨僩僪僫僯僰僱僲僴僶",4,"僼",9,"儈"],["8380","儉儊儌",5,"儓",13,"儢",28,"兂兇兊兌兎兏児兒兓兗兘兙兛兝",4,"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",4,"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",5],["8440","凘凙凚凜凞凟凢凣凥",5,"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",5,"剋剎剏剒剓剕剗剘"],["8480","剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",9,"剾劀劃",4,"劉",6,"劑劒劔",6,"劜劤劥劦劧劮劯劰労",9,"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",5,"勠勡勢勣勥",10,"勱",7,"勻勼勽匁匂匃匄匇匉匊匋匌匎"],["8540","匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",9,"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"],["8580","厐",4,"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",6,"厷厸厹厺厼厽厾叀參",4,"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",4,"呣呥呧呩",7,"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"],["8640","咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",4,"哫哬哯哰哱哴",5,"哻哾唀唂唃唄唅唈唊",4,"唒唓唕",5,"唜唝唞唟唡唥唦"],["8680","唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",4,"啑啒啓啔啗",4,"啝啞啟啠啢啣啨啩啫啯",5,"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",6,"喨",8,"喲喴営喸喺喼喿",4,"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",4,"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",4,"嗿嘂嘃嘄嘅"],["8740","嘆嘇嘊嘋嘍嘐",7,"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",11,"噏",4,"噕噖噚噛噝",4],["8780","噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",7,"嚇",6,"嚐嚑嚒嚔",14,"嚤",10,"嚰",6,"嚸嚹嚺嚻嚽",12,"囋",8,"囕囖囘囙囜団囥",5,"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",6],["8840","園",9,"圝圞圠圡圢圤圥圦圧圫圱圲圴",4,"圼圽圿坁坃坄坅坆坈坉坋坒",4,"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"],["8880","垁垇垈垉垊垍",4,"垔",6,"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",8,"埄",6,"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",7,"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",4,"堫",4,"報堲堳場堶",7],["8940","堾",5,"塅",6,"塎塏塐塒塓塕塖塗塙",4,"塟",5,"塦",4,"塭",16,"塿墂墄墆墇墈墊墋墌"],["8980","墍",4,"墔",4,"墛墜墝墠",7,"墪",17,"墽墾墿壀壂壃壄壆",10,"壒壓壔壖",13,"壥",5,"壭壯壱売壴壵壷壸壺",7,"夃夅夆夈",4,"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"],["8a40","夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",4,"奡奣奤奦",12,"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"],["8a80","妧妬妭妰妱妳",5,"妺妼妽妿",6,"姇姈姉姌姍姎姏姕姖姙姛姞",4,"姤姦姧姩姪姫姭",11,"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",6,"娳娵娷",4,"娽娾娿婁",4,"婇婈婋",9,"婖婗婘婙婛",5],["8b40","婡婣婤婥婦婨婩婫",8,"婸婹婻婼婽婾媀",17,"媓",6,"媜",13,"媫媬"],["8b80","媭",4,"媴媶媷媹",4,"媿嫀嫃",5,"嫊嫋嫍",4,"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",4,"嫲",22,"嬊",11,"嬘",25,"嬳嬵嬶嬸",7,"孁",6],["8c40","孈",7,"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"],["8c80","寑寔",8,"寠寢寣實寧審",4,"寯寱",6,"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",6,"屰屲",6,"屻屼屽屾岀岃",4,"岉岊岋岎岏岒岓岕岝",4,"岤",4],["8d40","岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",5,"峌",5,"峓",5,"峚",6,"峢峣峧峩峫峬峮峯峱",9,"峼",4],["8d80","崁崄崅崈",5,"崏",4,"崕崗崘崙崚崜崝崟",4,"崥崨崪崫崬崯",4,"崵",7,"崿",7,"嵈嵉嵍",10,"嵙嵚嵜嵞",10,"嵪嵭嵮嵰嵱嵲嵳嵵",12,"嶃",21,"嶚嶛嶜嶞嶟嶠"],["8e40","嶡",21,"嶸",12,"巆",6,"巎",12,"巜巟巠巣巤巪巬巭"],["8e80","巰巵巶巸",4,"巿帀帄帇帉帊帋帍帎帒帓帗帞",7,"帨",4,"帯帰帲",4,"帹帺帾帿幀幁幃幆",5,"幍",6,"幖",4,"幜幝幟幠幣",14,"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",4,"庮",4,"庴庺庻庼庽庿",6],["8f40","廆廇廈廋",5,"廔廕廗廘廙廚廜",11,"廩廫",8,"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"],["8f80","弨弫弬弮弰弲",6,"弻弽弾弿彁",14,"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",5,"復徫徬徯",5,"徶徸徹徺徻徾",4,"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"],["9040","怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",4,"怶",4,"怽怾恀恄",6,"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"],["9080","悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",7,"惇惈惉惌",4,"惒惓惔惖惗惙惛惞惡",4,"惪惱惲惵惷惸惻",4,"愂愃愄愅愇愊愋愌愐",4,"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",18,"慀",6],["9140","慇慉態慍慏慐慒慓慔慖",6,"慞慟慠慡慣慤慥慦慩",6,"慱慲慳慴慶慸",18,"憌憍憏",4,"憕"],["9180","憖",6,"憞",8,"憪憫憭",9,"憸",5,"憿懀懁懃",4,"應懌",4,"懓懕",16,"懧",13,"懶",8,"戀",5,"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",4,"扂扄扅扆扊"],["9240","扏扐払扖扗扙扚扜",6,"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",5,"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"],["9280","拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",5,"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",7,"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",6,"採掤掦掫掯掱掲掵掶掹掻掽掿揀"],["9340","揁揂揃揅揇揈揊揋揌揑揓揔揕揗",6,"揟揢揤",4,"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",4,"損搎搑搒搕",5,"搝搟搢搣搤"],["9380","搥搧搨搩搫搮",5,"搵",4,"搻搼搾摀摂摃摉摋",6,"摓摕摖摗摙",4,"摟",7,"摨摪摫摬摮",9,"摻",6,"撃撆撈",8,"撓撔撗撘撚撛撜撝撟",4,"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",6,"擏擑擓擔擕擖擙據"],["9440","擛擜擝擟擠擡擣擥擧",24,"攁",7,"攊",7,"攓",4,"攙",8],["9480","攢攣攤攦",4,"攬攭攰攱攲攳攷攺攼攽敀",4,"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",14,"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",7,"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",7,"旡旣旤旪旫"],["9540","旲旳旴旵旸旹旻",4,"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",4,"昽昿晀時晄",6,"晍晎晐晑晘"],["9580","晙晛晜晝晞晠晢晣晥晧晩",4,"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",4,"暞",8,"暩",4,"暯",4,"暵暶暷暸暺暻暼暽暿",25,"曚曞",7,"曧曨曪",5,"曱曵曶書曺曻曽朁朂會"],["9640","朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",5,"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",4,"杝杢杣杤杦杧杫杬杮東杴杶"],["9680","杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",7,"柂柅",9,"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",7,"柾栁栂栃栄栆栍栐栒栔栕栘",4,"栞栟栠栢",6,"栫",6,"栴栵栶栺栻栿桇桋桍桏桒桖",5],["9740","桜桝桞桟桪桬",7,"桵桸",8,"梂梄梇",7,"梐梑梒梔梕梖梘",9,"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"],["9780","梹",6,"棁棃",5,"棊棌棎棏棐棑棓棔棖棗棙棛",4,"棡棢棤",9,"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",4,"椌椏椑椓",11,"椡椢椣椥",7,"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",16,"楕楖楘楙楛楜楟"],["9840","楡楢楤楥楧楨楩楪楬業楯楰楲",4,"楺楻楽楾楿榁榃榅榊榋榌榎",5,"榖榗榙榚榝",9,"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"],["9880","榾榿槀槂",7,"構槍槏槑槒槓槕",5,"槜槝槞槡",11,"槮槯槰槱槳",9,"槾樀",9,"樋",11,"標",5,"樠樢",5,"権樫樬樭樮樰樲樳樴樶",6,"樿",4,"橅橆橈",7,"橑",6,"橚"],["9940","橜",4,"橢橣橤橦",10,"橲",6,"橺橻橽橾橿檁檂檃檅",8,"檏檒",4,"檘",7,"檡",5],["9980","檧檨檪檭",114,"欥欦欨",6],["9a40","欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",11,"歚",7,"歨歩歫",13,"歺歽歾歿殀殅殈"],["9a80","殌殎殏殐殑殔殕殗殘殙殜",4,"殢",7,"殫",7,"殶殸",6,"毀毃毄毆",4,"毌毎毐毑毘毚毜",4,"毢",7,"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",6,"氈",4,"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",4,"汑汒汓汖汘"],["9b40","汙汚汢汣汥汦汧汫",4,"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"],["9b80","泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",5,"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",4,"涃涄涆涇涊涋涍涏涐涒涖",4,"涜涢涥涬涭涰涱涳涴涶涷涹",5,"淁淂淃淈淉淊"],["9c40","淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",7,"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"],["9c80","渶渷渹渻",7,"湅",7,"湏湐湑湒湕湗湙湚湜湝湞湠",10,"湬湭湯",14,"満溁溂溄溇溈溊",4,"溑",6,"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",5],["9d40","滰滱滲滳滵滶滷滸滺",7,"漃漄漅漇漈漊",4,"漐漑漒漖",9,"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",6,"漿潀潁潂"],["9d80","潃潄潅潈潉潊潌潎",9,"潙潚潛潝潟潠潡潣潤潥潧",5,"潯潰潱潳潵潶潷潹潻潽",6,"澅澆澇澊澋澏",12,"澝澞澟澠澢",4,"澨",10,"澴澵澷澸澺",5,"濁濃",5,"濊",6,"濓",10,"濟濢濣濤濥"],["9e40","濦",7,"濰",32,"瀒",7,"瀜",6,"瀤",6],["9e80","瀫",9,"瀶瀷瀸瀺",17,"灍灎灐",13,"灟",11,"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",12,"炰炲炴炵炶為炾炿烄烅烆烇烉烋",12,"烚"],["9f40","烜烝烞烠烡烢烣烥烪烮烰",6,"烸烺烻烼烾",10,"焋",4,"焑焒焔焗焛",10,"焧",7,"焲焳焴"],["9f80","焵焷",13,"煆煇煈煉煋煍煏",12,"煝煟",4,"煥煩",4,"煯煰煱煴煵煶煷煹煻煼煾",5,"熅",4,"熋熌熍熎熐熑熒熓熕熖熗熚",4,"熡",6,"熩熪熫熭",5,"熴熶熷熸熺",8,"燄",9,"燏",4],["a040","燖",9,"燡燢燣燤燦燨",5,"燯",9,"燺",11,"爇",19],["a080","爛爜爞",9,"爩爫爭爮爯爲爳爴爺爼爾牀",6,"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",4,"犌犎犐犑犓",11,"犠",11,"犮犱犲犳犵犺",6,"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"],["a1a1","　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",7,"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"],["a2a1","ⅰ",9],["a2b1","⒈",19,"⑴",19,"①",9],["a2e5","㈠",9],["a2f1","Ⅰ",11],["a3a1","！＂＃￥％",88,"￣"],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a6e0","︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"],["a6ee","︻︼︷︸︱"],["a6f4","︳︴"],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a840","ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",35,"▁",6],["a880","█",7,"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"],["a8a1","āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"],["a8bd","ńň"],["a8c0","ɡ"],["a8c5","ㄅ",36],["a940","〡",8,"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"],["a959","℡㈱"],["a95c","‐"],["a960","ー゛゜ヽヾ〆ゝゞ﹉",9,"﹔﹕﹖﹗﹙",8],["a980","﹢",4,"﹨﹩﹪﹫"],["a996","〇"],["a9a4","─",75],["aa40","狜狝狟狢",5,"狪狫狵狶狹狽狾狿猀猂猄",5,"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",8],["aa80","獉獊獋獌獎獏獑獓獔獕獖獘",7,"獡",10,"獮獰獱"],["ab40","獲",11,"獿",4,"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",5,"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",4],["ab80","珋珌珎珒",6,"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",4],["ac40","珸",10,"琄琇琈琋琌琍琎琑",8,"琜",5,"琣琤琧琩琫琭琯琱琲琷",4,"琽琾琿瑀瑂",11],["ac80","瑎",6,"瑖瑘瑝瑠",12,"瑮瑯瑱",4,"瑸瑹瑺"],["ad40","瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",10,"璝璟",7,"璪",15,"璻",12],["ad80","瓈",9,"瓓",8,"瓝瓟瓡瓥瓧",6,"瓰瓱瓲"],["ae40","瓳瓵瓸",6,"甀甁甂甃甅",7,"甎甐甒甔甕甖甗甛甝甞甠",4,"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"],["ae80","畝",7,"畧畨畩畫",6,"畳畵當畷畺",4,"疀疁疂疄疅疇"],["af40","疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",4,"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"],["af80","瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"],["b040","癅",6,"癎",5,"癕癗",4,"癝癟癠癡癢癤",6,"癬癭癮癰",7,"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"],["b080","皜",7,"皥",8,"皯皰皳皵",9,"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"],["b140","盄盇盉盋盌盓盕盙盚盜盝盞盠",4,"盦",7,"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",10,"眛眜眝眞眡眣眤眥眧眪眫"],["b180","眬眮眰",4,"眹眻眽眾眿睂睄睅睆睈",7,"睒",7,"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"],["b240","睝睞睟睠睤睧睩睪睭",11,"睺睻睼瞁瞂瞃瞆",5,"瞏瞐瞓",11,"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",4],["b280","瞼瞾矀",12,"矎",8,"矘矙矚矝",4,"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"],["b340","矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",5,"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"],["b380","硛硜硞",11,"硯",7,"硸硹硺硻硽",6,"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"],["b440","碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",7,"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",9],["b480","磤磥磦磧磩磪磫磭",4,"磳磵磶磸磹磻",5,"礂礃礄礆",6,"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"],["b540","礍",5,"礔",9,"礟",4,"礥",14,"礵",4,"礽礿祂祃祄祅祇祊",8,"祔祕祘祙祡祣"],["b580","祤祦祩祪祫祬祮祰",6,"祹祻",4,"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"],["b640","禓",6,"禛",11,"禨",10,"禴",4,"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",5,"秠秡秢秥秨秪"],["b680","秬秮秱",6,"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",4,"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"],["b740","稝稟稡稢稤",14,"稴稵稶稸稺稾穀",5,"穇",9,"穒",4,"穘",16],["b780","穩",6,"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"],["b840","窣窤窧窩窪窫窮",4,"窴",10,"竀",10,"竌",9,"竗竘竚竛竜竝竡竢竤竧",5,"竮竰竱竲竳"],["b880","竴",4,"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"],["b940","笯笰笲笴笵笶笷笹笻笽笿",5,"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",10,"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",6,"箎箏"],["b980","箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",7,"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"],["ba40","篅篈築篊篋篍篎篏篐篒篔",4,"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",4,"篸篹篺篻篽篿",7,"簈簉簊簍簎簐",5,"簗簘簙"],["ba80","簚",4,"簠",5,"簨簩簫",12,"簹",5,"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"],["bb40","籃",9,"籎",36,"籵",5,"籾",9],["bb80","粈粊",6,"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",4,"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"],["bc40","粿糀糂糃糄糆糉糋糎",6,"糘糚糛糝糞糡",6,"糩",5,"糰",7,"糹糺糼",13,"紋",5],["bc80","紑",14,"紡紣紤紥紦紨紩紪紬紭紮細",6,"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"],["bd40","紷",54,"絯",7],["bd80","絸",32,"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"],["be40","継",12,"綧",6,"綯",42],["be80","線",32,"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"],["bf40","緻",62],["bf80","縺縼",4,"繂",4,"繈",21,"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"],["c040","繞",35,"纃",23,"纜纝纞"],["c080","纮纴纻纼绖绤绬绹缊缐缞缷缹缻",6,"罃罆",9,"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"],["c140","罖罙罛罜罝罞罠罣",4,"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",7,"羋羍羏",4,"羕",4,"羛羜羠羢羣羥羦羨",6,"羱"],["c180","羳",4,"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",4,"翖翗翙",5,"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"],["c240","翤翧翨翪翫翬翭翯翲翴",6,"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",5,"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"],["c280","聙聛",13,"聫",5,"聲",11,"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"],["c340","聾肁肂肅肈肊肍",5,"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",4,"胏",6,"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"],["c380","脌脕脗脙脛脜脝脟",12,"脭脮脰脳脴脵脷脹",4,"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"],["c440","腀",5,"腇腉腍腎腏腒腖腗腘腛",4,"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",4,"膉膋膌膍膎膐膒",5,"膙膚膞",4,"膤膥"],["c480","膧膩膫",7,"膴",5,"膼膽膾膿臄臅臇臈臉臋臍",6,"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"],["c540","臔",14,"臤臥臦臨臩臫臮",4,"臵",5,"臽臿舃與",4,"舎舏舑舓舕",5,"舝舠舤舥舦舧舩舮舲舺舼舽舿"],["c580","艀艁艂艃艅艆艈艊艌艍艎艐",7,"艙艛艜艝艞艠",7,"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"],["c640","艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"],["c680","苺苼",4,"茊茋茍茐茒茓茖茘茙茝",9,"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"],["c740","茾茿荁荂荄荅荈荊",4,"荓荕",4,"荝荢荰",6,"荹荺荾",6,"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",6,"莬莭莮"],["c780","莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"],["c840","菮華菳",4,"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",5,"萙萚萛萞",5,"萩",7,"萲",5,"萹萺萻萾",7,"葇葈葉"],["c880","葊",6,"葒",4,"葘葝葞葟葠葢葤",4,"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"],["c940","葽",4,"蒃蒄蒅蒆蒊蒍蒏",7,"蒘蒚蒛蒝蒞蒟蒠蒢",12,"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"],["c980","蓘",4,"蓞蓡蓢蓤蓧",4,"蓭蓮蓯蓱",10,"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"],["ca40","蔃",8,"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",8,"蔭",9,"蔾",4,"蕄蕅蕆蕇蕋",10],["ca80","蕗蕘蕚蕛蕜蕝蕟",4,"蕥蕦蕧蕩",8,"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"],["cb40","薂薃薆薈",6,"薐",10,"薝",6,"薥薦薧薩薫薬薭薱",5,"薸薺",6,"藂",6,"藊",4,"藑藒"],["cb80","藔藖",5,"藝",6,"藥藦藧藨藪",14,"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"],["cc40","藹藺藼藽藾蘀",4,"蘆",10,"蘒蘓蘔蘕蘗",15,"蘨蘪",13,"蘹蘺蘻蘽蘾蘿虀"],["cc80","虁",11,"虒虓處",4,"虛虜虝號虠虡虣",7,"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"],["cd40","虭虯虰虲",6,"蚃",6,"蚎",4,"蚔蚖",5,"蚞",4,"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",4,"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"],["cd80","蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"],["ce40","蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",6,"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",5,"蝡蝢蝦",7,"蝯蝱蝲蝳蝵"],["ce80","蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",4,"螔螕螖螘",6,"螠",4,"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"],["cf40","螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",4,"蟇蟈蟉蟌",4,"蟔",6,"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",9],["cf80","蟺蟻蟼蟽蟿蠀蠁蠂蠄",5,"蠋",7,"蠔蠗蠘蠙蠚蠜",4,"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"],["d040","蠤",13,"蠳",5,"蠺蠻蠽蠾蠿衁衂衃衆",5,"衎",5,"衕衖衘衚",6,"衦衧衪衭衯衱衳衴衵衶衸衹衺"],["d080","衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",4,"袝",4,"袣袥",5,"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"],["d140","袬袮袯袰袲",4,"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",4,"裠裡裦裧裩",6,"裲裵裶裷裺裻製裿褀褁褃",5],["d180","褉褋",4,"褑褔",4,"褜",4,"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"],["d240","褸",8,"襂襃襅",24,"襠",5,"襧",19,"襼"],["d280","襽襾覀覂覄覅覇",26,"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"],["d340","覢",30,"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",6],["d380","觻",4,"訁",5,"計",21,"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"],["d440","訞",31,"訿",8,"詉",21],["d480","詟",25,"詺",6,"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"],["d540","誁",7,"誋",7,"誔",46],["d580","諃",32,"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"],["d640","諤",34,"謈",27],["d680","謤謥謧",30,"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"],["d740","譆",31,"譧",4,"譭",25],["d780","讇",24,"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"],["d840","谸",8,"豂豃豄豅豈豊豋豍",7,"豖豗豘豙豛",5,"豣",6,"豬",6,"豴豵豶豷豻",6,"貃貄貆貇"],["d880","貈貋貍",6,"貕貖貗貙",20,"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"],["d940","貮",62],["d980","賭",32,"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"],["da40","贎",14,"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",8,"趂趃趆趇趈趉趌",4,"趒趓趕",9,"趠趡"],["da80","趢趤",12,"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"],["db40","跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",6,"踆踇踈踋踍踎踐踑踒踓踕",7,"踠踡踤",4,"踫踭踰踲踳踴踶踷踸踻踼踾"],["db80","踿蹃蹅蹆蹌",4,"蹓",5,"蹚",11,"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"],["dc40","蹳蹵蹷",4,"蹽蹾躀躂躃躄躆躈",6,"躑躒躓躕",6,"躝躟",11,"躭躮躰躱躳",6,"躻",7],["dc80","軃",10,"軏",21,"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"],["dd40","軥",62],["dd80","輤",32,"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"],["de40","轅",32,"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"],["de80","迉",4,"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"],["df40","這逜連逤逥逧",5,"逰",4,"逷逹逺逽逿遀遃遅遆遈",4,"過達違遖遙遚遜",5,"遤遦遧適遪遫遬遯",4,"遶",6,"遾邁"],["df80","還邅邆邇邉邊邌",4,"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"],["e040","郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",19,"鄚鄛鄜"],["e080","鄝鄟鄠鄡鄤",10,"鄰鄲",6,"鄺",8,"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"],["e140","酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",4,"醆醈醊醎醏醓",6,"醜",5,"醤",5,"醫醬醰醱醲醳醶醷醸醹醻"],["e180","醼",10,"釈釋釐釒",9,"針",8,"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"],["e240","釦",62],["e280","鈥",32,"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",5,"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"],["e340","鉆",45,"鉵",16],["e380","銆",7,"銏",24,"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"],["e440","銨",5,"銯",24,"鋉",31],["e480","鋩",32,"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"],["e540","錊",51,"錿",10],["e580","鍊",31,"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"],["e640","鍬",34,"鎐",27],["e680","鎬",29,"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"],["e740","鏎",7,"鏗",54],["e780","鐎",32,"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",6,"缪缫缬缭缯",4,"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"],["e840","鐯",14,"鐿",43,"鑬鑭鑮鑯"],["e880","鑰",20,"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"],["e940","锧锳锽镃镈镋镕镚镠镮镴镵長",7,"門",42],["e980","閫",32,"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"],["ea40","闌",27,"闬闿阇阓阘阛阞阠阣",6,"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"],["ea80","陘陙陚陜陝陞陠陣陥陦陫陭",4,"陳陸",12,"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"],["eb40","隌階隑隒隓隕隖隚際隝",9,"隨",7,"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",9,"雡",6,"雫"],["eb80","雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",4,"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"],["ec40","霡",8,"霫霬霮霯霱霳",4,"霺霻霼霽霿",18,"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",7],["ec80","靲靵靷",4,"靽",7,"鞆",4,"鞌鞎鞏鞐鞓鞕鞖鞗鞙",4,"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"],["ed40","鞞鞟鞡鞢鞤",6,"鞬鞮鞰鞱鞳鞵",46],["ed80","韤韥韨韮",4,"韴韷",23,"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"],["ee40","頏",62],["ee80","顎",32,"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",4,"钼钽钿铄铈",6,"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"],["ef40","顯",5,"颋颎颒颕颙颣風",37,"飏飐飔飖飗飛飜飝飠",4],["ef80","飥飦飩",30,"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",4,"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",8,"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"],["f040","餈",4,"餎餏餑",28,"餯",26],["f080","饊",9,"饖",12,"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",4,"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",6,"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"],["f140","馌馎馚",10,"馦馧馩",47],["f180","駙",32,"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"],["f240","駺",62],["f280","騹",32,"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"],["f340","驚",17,"驲骃骉骍骎骔骕骙骦骩",6,"骲骳骴骵骹骻骽骾骿髃髄髆",4,"髍髎髏髐髒體髕髖髗髙髚髛髜"],["f380","髝髞髠髢髣髤髥髧髨髩髪髬髮髰",8,"髺髼",6,"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"],["f440","鬇鬉",5,"鬐鬑鬒鬔",10,"鬠鬡鬢鬤",10,"鬰鬱鬳",7,"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",5],["f480","魛",32,"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"],["f540","魼",62],["f580","鮻",32,"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"],["f640","鯜",62],["f680","鰛",32,"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",5,"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",5,"鲥",4,"鲫鲭鲮鲰",7,"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"],["f740","鰼",62],["f780","鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",4,"鳈鳉鳑鳒鳚鳛鳠鳡鳌",4,"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"],["f840","鳣",62],["f880","鴢",32],["f940","鵃",62],["f980","鶂",32],["fa40","鶣",62],["fa80","鷢",32],["fb40","鸃",27,"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",9,"麀"],["fb80","麁麃麄麅麆麉麊麌",5,"麔",8,"麞麠",5,"麧麨麩麪"],["fc40","麫",8,"麵麶麷麹麺麼麿",4,"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",8,"黺黽黿",6],["fc80","鼆",4,"鼌鼏鼑鼒鼔鼕鼖鼘鼚",5,"鼡鼣",8,"鼭鼮鼰鼱"],["fd40","鼲",4,"鼸鼺鼼鼿",4,"齅",10,"齒",38],["fd80","齹",5,"龁龂龍",11,"龜龝龞龡",4,"郎凉秊裏隣"],["fe40","兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"]]');
}, function(e, t, r) {
	e.exports = r(181);
}, function(e, t, r) {
	var n = r(248)(r(291));
	e.exports = n;
}, function(e, t, r) {
	var n = r(302);
	e.exports = "string" == typeof n ? n : n.toString();
}, function(e, t, r) {
	"use strict";
	t.a = {
		"sp-prefs": function spPrefs(e) {
			switch (e) {
				case "zh_CN":
					return r(306);

				default:
					return r(307);
			}
		},
		floatWindow: function floatWindow(e) {
			switch (e) {
				case "zh_CN":
					return r(308);

				default:
					return r(309);
			}
		}
	};
}, function(e, t, r) {
	"use strict";
	var n = r(5), a = r.n(n);
	t.a = function elementReady(e, t) {
		var r = "attributes" === t ? {
			attributes: !0
		} : {
			childList: !0
		};
		return new a.a((function(n) {
			new MutationObserver((function(r, a) {
				n({
					element: e,
					type: t,
					mutationList: r,
					observer: a
				});
			})).observe(e, r);
		}));
	};
}, function(e, t, r) {
	var n = r(28), a = r(20), o = "[object Boolean]";
	e.exports = function isBoolean(e) {
		return !0 === e || !1 === e || a(e) && n(e) == o;
	};
}, function(e, t) {
	e.exports = function isNull(e) {
		return null === e;
	};
}, function(e, t) {
	e.exports = function isUndefined(e) {
		return void 0 === e;
	};
}, function(e, t, r) {
	"use strict";
	t.decode = t.parse = r(329), t.encode = t.stringify = r(330);
}, function(e, t, r) {
	e.exports = r(356);
}, function(e, t, r) {
	var n = r(23), a = r(15), o = r(171)(!1), i = r(71)("IE_PROTO");
	e.exports = function(e, t) {
		var r, s = a(e), c = 0, u = [];
		for (r in s) r != i && n(s, r) && u.push(r);
		for (;t.length > c; ) n(s, r = t[c++]) && (~o(u, r) || u.push(r));
		return u;
	};
}, function(e, t, r) {
	var n = r(40);
	e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
		return "String" == n(e) ? e.split("") : Object(e);
	};
}, function(e, t, r) {
	var n = r(70), a = Math.min;
	e.exports = function(e) {
		return e > 0 ? a(n(e), 9007199254740991) : 0;
	};
}, function(e, t, r) {
	var n = r(70), a = Math.max, o = Math.min;
	e.exports = function(e, t) {
		return (e = n(e)) < 0 ? a(e + t, 0) : o(e, t);
	};
}, function(e, t, r) {
	var n = r(7), a = r(3), o = r(26);
	e.exports = function(e, t) {
		var r = (a.Object || {})[e] || Object[e], i = {};
		i[e] = t(r), n(n.S + n.F * o((function() {
			r(1);
		})), "Object", i);
	};
}, function(e, t, r) {
	e.exports = !r(11) && !r(26)((function() {
		return 7 != Object.defineProperty(r(74)("div"), "a", {
			get: function() {
				return 7;
			}
		}).a;
	}));
}, function(e, t, r) {
	var n = r(40);
	e.exports = Array.isArray || function isArray(e) {
		return "Array" == n(e);
	};
}, function(e, t) {
	e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
}, function(e, t, r) {
	"use strict";
	var n = r(41), a = r(7), o = r(115), i = r(24), s = r(32), c = r(185), u = r(54), l = r(186), p = r(9)("iterator"), f = !([].keys && "next" in [].keys()), returnThis = function() {
		return this;
	};
	e.exports = function(e, t, r, d, _, h, m) {
		c(r, t, d);
		var g, b, v, getMethod = function(e) {
			if (!f && e in x) return x[e];
			switch (e) {
				case "keys":
					return function keys() {
						return new r(this, e);
					};

				case "values":
					return function values() {
						return new r(this, e);
					};
			}
			return function entries() {
				return new r(this, e);
			};
		}, y = t + " Iterator", w = "values" == _, E = !1, x = e.prototype, O = x[p] || x["@@iterator"] || _ && x[_], S = O || getMethod(_), P = _ ? w ? getMethod("entries") : S : void 0, A = "Array" == t && x.entries || O;
		if (A && (v = l(A.call(new e))) !== Object.prototype && v.next && (u(v, y, !0),
		n || "function" == typeof v[p] || i(v, p, returnThis)), w && O && "values" !== O.name && (E = !0,
			S = function values() {
				return O.call(this);
			}), n && !m || !f && !E && x[p] || i(x, p, S), s[t] = S, s[y] = returnThis, _) if (g = {
			values: w ? S : getMethod("values"),
			keys: h ? S : getMethod("keys"),
			entries: P
		}, m) for (b in g) b in x || o(x, b, g[b]); else a(a.P + a.F * (f || E), t, g);
		return g;
	};
}, function(e, t, r) {
	e.exports = r(24);
}, function(e, t, r) {
	var n = r(12), a = r(117), o = r(73), i = r(71)("IE_PROTO"), Empty = function() {}, createDict = function() {
		var e, t = r(74)("iframe"), n = o.length;
		for (t.style.display = "none", r(118).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(),
				 e.write("<script>document.F=Object<\/script>"), e.close(), createDict = e.F; n--; ) delete createDict.prototype[o[n]];
		return createDict();
	};
	e.exports = Object.create || function create(e, t) {
		var r;
		return null !== e ? (Empty.prototype = n(e), r = new Empty, Empty.prototype = null,
			r[i] = e) : r = createDict(), void 0 === t ? r : a(r, t);
	};
}, function(e, t, r) {
	var n = r(16), a = r(12), o = r(31);
	e.exports = r(11) ? Object.defineProperties : function defineProperties(e, t) {
		a(e);
		for (var r, i = o(t), s = i.length, c = 0; s > c; ) n.f(e, r = i[c++], t[r]);
		return e;
	};
}, function(e, t, r) {
	var n = r(6).document;
	e.exports = n && n.documentElement;
}, function(e, t, r) {
	var n = r(78), a = r(9)("iterator"), o = r(32);
	e.exports = r(3).getIteratorMethod = function(e) {
		if (null != e) return e[a] || e["@@iterator"] || o[n(e)];
	};
}, function(e, t, r) {
	var n = r(12), a = r(53), o = r(9)("species");
	e.exports = function(e, t) {
		var r, i = n(e).constructor;
		return void 0 === i || null == (r = n(i)[o]) ? t : a(r);
	};
}, function(e, t, r) {
	var n, a, o, i = r(52), s = r(200), c = r(118), u = r(74), l = r(6), p = l.process, f = l.setImmediate, d = l.clearImmediate, _ = l.MessageChannel, h = l.Dispatch, m = 0, g = {}, run = function() {
		var e = +this;
		if (g.hasOwnProperty(e)) {
			var t = g[e];
			delete g[e], t();
		}
	}, listener = function(e) {
		run.call(e.data);
	};
	f && d || (f = function setImmediate(e) {
		for (var t = [], r = 1; arguments.length > r; ) t.push(arguments[r++]);
		return g[++m] = function() {
			s("function" == typeof e ? e : Function(e), t);
		}, n(m), m;
	}, d = function clearImmediate(e) {
		delete g[e];
	}, "process" == r(40)(p) ? n = function(e) {
		p.nextTick(i(run, e, 1));
	} : h && h.now ? n = function(e) {
		h.now(i(run, e, 1));
	} : _ ? (o = (a = new _).port2, a.port1.onmessage = listener, n = i(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function(e) {
		l.postMessage(e + "", "*");
	}, l.addEventListener("message", listener, !1)) : n = "onreadystatechange" in u("script") ? function(e) {
		c.appendChild(u("script")).onreadystatechange = function() {
			c.removeChild(this), run.call(e);
		};
	} : function(e) {
		setTimeout(i(run, e, 1), 0);
	}), e.exports = {
		set: f,
		clear: d
	};
}, function(e, t) {
	e.exports = function(e) {
		try {
			return {
				e: !1,
				v: e()
			};
		} catch (e) {
			return {
				e: !0,
				v: e
			};
		}
	};
}, function(e, t, r) {
	var n = r(12), a = r(25), o = r(79);
	e.exports = function(e, t) {
		if (n(e), a(t) && t.constructor === e) return t;
		var r = o.f(e);
		return (0, r.resolve)(t), r.promise;
	};
}, function(e, t, r) {
	(function(t) {
		var r = "object" == typeof t && t && t.Object === Object && t;
		e.exports = r;
	}).call(this, r(125));
}, function(e, t) {
	var r;
	r = function() {
		return this;
	}();
	try {
		r = r || new Function("return this")();
	} catch (e) {
		"object" == typeof window && (r = window);
	}
	e.exports = r;
}, function(e, t) {
	var r = Function.prototype.toString;
	e.exports = function toSource(e) {
		if (null != e) {
			try {
				return r.call(e);
			} catch (e) {}
			try {
				return e + "";
			} catch (e) {}
		}
		return "";
	};
}, function(e, t) {
	e.exports = function eq(e, t) {
		return e === t || e != e && t != t;
	};
}, function(e, t, r) {
	var n = r(234);
	e.exports = function arrayIncludes(e, t) {
		return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
	};
}, function(e, t) {
	e.exports = function baseFindIndex(e, t, r, n) {
		for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; ) if (t(e[o], o, e)) return o;
		return -1;
	};
}, function(e, t) {
	e.exports = function arrayIncludesWith(e, t, r) {
		for (var n = -1, a = null == e ? 0 : e.length; ++n < a; ) if (r(t, e[n])) return !0;
		return !1;
	};
}, function(e, t) {
	e.exports = function arrayMap(e, t) {
		for (var r = -1, n = null == e ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e);
		return a;
	};
}, function(e, t) {
	e.exports = function baseUnary(e) {
		return function(t) {
			return e(t);
		};
	};
}, function(e, t, r) {
	var n = r(134), a = r(237);
	e.exports = function baseFlatten(e, t, r, o, i) {
		var s = -1, c = e.length;
		for (r || (r = a), i || (i = []); ++s < c; ) {
			var u = e[s];
			t > 0 && r(u) ? t > 1 ? baseFlatten(u, t - 1, r, o, i) : n(i, u) : o || (i[i.length] = u);
		}
		return i;
	};
}, function(e, t) {
	e.exports = function arrayPush(e, t) {
		for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
		return e;
	};
}, function(e, t, r) {
	var n = r(249), a = r(278), o = r(84), i = r(8), s = r(288);
	e.exports = function baseIteratee(e) {
		return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? i(e) ? a(e[0], e[1]) : n(e) : s(e);
	};
}, function(e, t, r) {
	var n = r(56), a = r(251), o = r(252), i = r(253), s = r(254), c = r(255);
	function Stack(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	Stack.prototype.clear = a, Stack.prototype.delete = o, Stack.prototype.get = i,
		Stack.prototype.has = s, Stack.prototype.set = c, e.exports = Stack;
}, function(e, t, r) {
	var n = r(256), a = r(20);
	e.exports = function baseIsEqual(e, t, r, o, i) {
		return e === t || (null == e || null == t || !a(e) && !a(t) ? e != e && t != t : n(e, t, r, o, baseIsEqual, i));
	};
}, function(e, t, r) {
	var n = r(80), a = r(257), o = r(83), i = 1, s = 2;
	e.exports = function equalArrays(e, t, r, c, u, l) {
		var p = r & i, f = e.length, d = t.length;
		if (f != d && !(p && d > f)) return !1;
		var _ = l.get(e);
		if (_ && l.get(t)) return _ == t;
		var h = -1, m = !0, g = r & s ? new n : void 0;
		for (l.set(e, t), l.set(t, e); ++h < f; ) {
			var b = e[h], v = t[h];
			if (c) var y = p ? c(v, b, h, t, e, l) : c(b, v, h, e, t, l);
			if (void 0 !== y) {
				if (y) continue;
				m = !1;
				break;
			}
			if (g) {
				if (!a(t, (function(e, t) {
					if (!o(g, t) && (b === e || u(b, e, r, c, l))) return g.push(t);
				}))) {
					m = !1;
					break;
				}
			} else if (b !== v && !u(b, v, r, c, l)) {
				m = !1;
				break;
			}
		}
		return l.delete(e), l.delete(t), m;
	};
}, function(e, t) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []),
			Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l;
				}
			}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i;
			}
		}), e.webpackPolyfill = 1), e;
	};
}, function(e, t) {
	var r = 9007199254740991, n = /^(?:0|[1-9]\d*)$/;
	e.exports = function isIndex(e, t) {
		var a = typeof e;
		return !!(t = null == t ? r : t) && ("number" == a || "symbol" != a && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	};
}, function(e, t, r) {
	var n = r(142), a = r(272), o = Object.prototype.hasOwnProperty;
	e.exports = function baseKeys(e) {
		if (!n(e)) return a(e);
		var t = [];
		for (var r in Object(e)) o.call(e, r) && "constructor" != r && t.push(r);
		return t;
	};
}, function(e, t) {
	var r = Object.prototype;
	e.exports = function isPrototype(e) {
		var t = e && e.constructor;
		return e === ("function" == typeof t && t.prototype || r);
	};
}, function(e, t, r) {
	var n = r(274), a = r(82), o = r(275), i = r(144), s = r(276), c = r(28), u = r(126), l = u(n), p = u(a), f = u(o), d = u(i), _ = u(s), h = c;
	(n && "[object DataView]" != h(new n(new ArrayBuffer(1))) || a && "[object Map]" != h(new a) || o && "[object Promise]" != h(o.resolve()) || i && "[object Set]" != h(new i) || s && "[object WeakMap]" != h(new s)) && (h = function(e) {
		var t = c(e), r = "[object Object]" == t ? e.constructor : void 0, n = r ? u(r) : "";
		if (n) switch (n) {
			case l:
				return "[object DataView]";

			case p:
				return "[object Map]";

			case f:
				return "[object Promise]";

			case d:
				return "[object Set]";

			case _:
				return "[object WeakMap]";
		}
		return t;
	}), e.exports = h;
}, function(e, t, r) {
	var n = r(27)(r(17), "Set");
	e.exports = n;
}, function(e, t, r) {
	var n = r(34);
	e.exports = function isStrictComparable(e) {
		return e == e && !n(e);
	};
}, function(e, t) {
	e.exports = function matchesStrictComparable(e, t) {
		return function(r) {
			return null != r && (r[e] === t && (void 0 !== t || e in Object(r)));
		};
	};
}, function(e, t, r) {
	var n = r(148), a = r(62);
	e.exports = function baseGet(e, t) {
		for (var r = 0, o = (t = n(t, e)).length; null != e && r < o; ) e = e[a(t[r++])];
		return r && r == o ? e : void 0;
	};
}, function(e, t, r) {
	var n = r(8), a = r(90), o = r(280), i = r(283);
	e.exports = function castPath(e, t) {
		return n(e) ? e : a(e, t) ? [ e ] : o(i(e));
	};
}, function(e, t, r) {
	t.f = r(9);
}, function(e) {
	e.exports = JSON.parse('[["a140","",62],["a180","",32],["a240","",62],["a280","",32],["a2ab","",5],["a2e3","€"],["a2ef",""],["a2fd",""],["a340","",62],["a380","",31,"　"],["a440","",62],["a480","",32],["a4f4","",10],["a540","",62],["a580","",32],["a5f7","",7],["a640","",62],["a680","",32],["a6b9","",7],["a6d9","",6],["a6ec",""],["a6f3",""],["a6f6","",8],["a740","",62],["a780","",32],["a7c2","",14],["a7f2","",12],["a896","",10],["a8bc",""],["a8bf","ǹ"],["a8c1",""],["a8ea","",20],["a958",""],["a95b",""],["a95d",""],["a989","〾⿰",11],["a997","",12],["a9f0","",14],["aaa1","",93],["aba1","",93],["aca1","",93],["ada1","",93],["aea1","",93],["afa1","",93],["d7fa","",4],["f8a1","",93],["f9a1","",93],["faa1","",93],["fba1","",93],["fca1","",93],["fda1","",93],["fe50","⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"],["fe80","䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",6,"䶮",93]]');
}, function(e) {
	e.exports = JSON.parse('[["0","\\u0000",127],["a140","　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"],["a1a1","﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",4,"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"],["a240","＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",7,"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"],["a2a1","╮╰╯═╞╪╡◢◣◥◤╱╲╳０",9,"Ⅰ",9,"〡",8,"十卄卅Ａ",25,"ａ",21],["a340","ｗｘｙｚΑ",16,"Σ",6,"α",16,"σ",6,"ㄅ",10],["a3a1","ㄐ",25,"˙ˉˊˇˋ"],["a3e1","€"],["a440","一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"],["a4a1","丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"],["a540","世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"],["a5a1","央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"],["a640","共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"],["a6a1","式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"],["a740","作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"],["a7a1","均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"],["a840","杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"],["a8a1","芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"],["a940","咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"],["a9a1","屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"],["aa40","昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"],["aaa1","炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"],["ab40","陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"],["aba1","哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"],["ac40","拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"],["aca1","活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"],["ad40","耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"],["ada1","迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"],["ae40","哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"],["aea1","恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"],["af40","浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"],["afa1","砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"],["b040","虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"],["b0a1","陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"],["b140","娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"],["b1a1","情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"],["b240","毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"],["b2a1","瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"],["b340","莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"],["b3a1","部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"],["b440","婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"],["b4a1","插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"],["b540","溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"],["b5a1","窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"],["b640","詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"],["b6a1","間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"],["b740","媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"],["b7a1","楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"],["b840","睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"],["b8a1","腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"],["b940","辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"],["b9a1","飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"],["ba40","愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"],["baa1","滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"],["bb40","罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"],["bba1","說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"],["bc40","劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"],["bca1","慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"],["bd40","瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"],["bda1","翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"],["be40","輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"],["bea1","鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"],["bf40","濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"],["bfa1","縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"],["c040","錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"],["c0a1","嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"],["c140","瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"],["c1a1","薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"],["c240","駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"],["c2a1","癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"],["c340","鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"],["c3a1","獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"],["c440","願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"],["c4a1","纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"],["c540","護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"],["c5a1","禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"],["c640","讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"],["c940","乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"],["c9a1","氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"],["ca40","汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"],["caa1","吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"],["cb40","杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"],["cba1","芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"],["cc40","坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"],["cca1","怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"],["cd40","泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"],["cda1","矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"],["ce40","哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"],["cea1","峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"],["cf40","柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"],["cfa1","洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"],["d040","穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"],["d0a1","苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"],["d140","唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"],["d1a1","恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"],["d240","毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"],["d2a1","牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"],["d340","笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"],["d3a1","荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"],["d440","酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"],["d4a1","唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"],["d540","崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"],["d5a1","捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"],["d640","淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"],["d6a1","痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"],["d740","耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"],["d7a1","蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"],["d840","釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"],["d8a1","堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"],["d940","惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"],["d9a1","晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"],["da40","湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"],["daa1","琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"],["db40","罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"],["dba1","菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"],["dc40","軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"],["dca1","隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"],["dd40","媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"],["dda1","搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"],["de40","毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"],["dea1","煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"],["df40","稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"],["dfa1","腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"],["e040","觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"],["e0a1","遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"],["e140","凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"],["e1a1","寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"],["e240","榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"],["e2a1","漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"],["e340","禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"],["e3a1","耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"],["e440","裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"],["e4a1","銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"],["e540","噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"],["e5a1","憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"],["e640","澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"],["e6a1","獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"],["e740","膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"],["e7a1","蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"],["e840","踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"],["e8a1","銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"],["e940","噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"],["e9a1","憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"],["ea40","澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"],["eaa1","瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"],["eb40","蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"],["eba1","諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"],["ec40","錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"],["eca1","魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"],["ed40","檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"],["eda1","瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"],["ee40","蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"],["eea1","謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"],["ef40","鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"],["efa1","鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"],["f040","璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"],["f0a1","臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"],["f140","蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"],["f1a1","鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"],["f240","徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"],["f2a1","礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"],["f340","譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"],["f3a1","鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"],["f440","嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"],["f4a1","禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"],["f540","鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"],["f5a1","鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"],["f640","蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"],["f6a1","騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"],["f740","糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"],["f7a1","驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"],["f840","讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"],["f8a1","齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"],["f940","纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"],["f9a1","龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"]]');
}, function(e, t, r) {
	e.exports = r(174);
}, function(e, t, r) {
	var n = r(208), a = r(133), o = r(239), i = r(247), s = o((function(e, t) {
		return i(e) ? n(e, a(t, 1, i, !0)) : [];
	}));
	e.exports = s;
}, function(e, t, r) {
	"use strict";
	(function(e) {
		var r = this && this.__spreadArrays || function() {
			for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
			var n = Array(e), a = 0;
			for (t = 0; t < r; t++) for (var o = arguments[t], i = 0, s = o.length; i < s; i++,
				a++) n[a] = o[i];
			return n;
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function n(e, t, r) {
			this.name = e, this.version = t, this.os = r;
		};
		t.BrowserInfo = n;
		var a = function a(t) {
			this.version = t, this.name = "node", this.os = e.platform;
		};
		t.NodeInfo = a;
		var o = function o() {
			this.bot = !0, this.name = "bot", this.version = null, this.os = null;
		};
		t.BotInfo = o;
		var i = 3, s = [ [ "aol", /AOLShield\/([0-9\._]+)/ ], [ "edge", /Edge\/([0-9\._]+)/ ], [ "edge-ios", /EdgiOS\/([0-9\._]+)/ ], [ "yandexbrowser", /YaBrowser\/([0-9\._]+)/ ], [ "vivaldi", /Vivaldi\/([0-9\.]+)/ ], [ "kakaotalk", /KAKAOTALK\s([0-9\.]+)/ ], [ "samsung", /SamsungBrowser\/([0-9\.]+)/ ], [ "silk", /\bSilk\/([0-9._-]+)\b/ ], [ "miui", /MiuiBrowser\/([0-9\.]+)$/ ], [ "beaker", /BeakerBrowser\/([0-9\.]+)/ ], [ "edge-chromium", /Edg\/([0-9\.]+)/ ], [ "chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ "chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ "phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/ ], [ "crios", /CriOS\/([0-9\.]+)(:?\s|$)/ ], [ "firefox", /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ "fxios", /FxiOS\/([0-9\.]+)/ ], [ "opera-mini", /Opera Mini.*Version\/([0-9\.]+)/ ], [ "opera", /Opera\/([0-9\.]+)(?:\s|$)/ ], [ "opera", /OPR\/([0-9\.]+)(:?\s|$)/ ], [ "ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ], [ "ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ "ie", /MSIE\s(7\.0)/ ], [ "bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ "android", /Android\s([0-9\.]+)/ ], [ "ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ "safari", /Version\/([0-9\._]+).*Safari/ ], [ "facebook", /FBAV\/([0-9\.]+)/ ], [ "instagram", /Instagram\s([0-9\.]+)/ ], [ "ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/ ], [ "ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/ ], [ "searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/ ] ], c = [ [ "iOS", /iP(hone|od|ad)/ ], [ "Android OS", /Android/ ], [ "BlackBerry OS", /BlackBerry|BB10/ ], [ "Windows Mobile", /IEMobile/ ], [ "Amazon OS", /Kindle/ ], [ "Windows 3.11", /Win16/ ], [ "Windows 95", /(Windows 95)|(Win95)|(Windows_95)/ ], [ "Windows 98", /(Windows 98)|(Win98)/ ], [ "Windows 2000", /(Windows NT 5.0)|(Windows 2000)/ ], [ "Windows XP", /(Windows NT 5.1)|(Windows XP)/ ], [ "Windows Server 2003", /(Windows NT 5.2)/ ], [ "Windows Vista", /(Windows NT 6.0)/ ], [ "Windows 7", /(Windows NT 6.1)/ ], [ "Windows 8", /(Windows NT 6.2)/ ], [ "Windows 8.1", /(Windows NT 6.3)/ ], [ "Windows 10", /(Windows NT 10.0)/ ], [ "Windows ME", /Windows ME/ ], [ "Open BSD", /OpenBSD/ ], [ "Sun OS", /SunOS/ ], [ "Chrome OS", /CrOS/ ], [ "Linux", /(Linux)|(X11)/ ], [ "Mac OS", /(Mac_PowerPC)|(Macintosh)/ ], [ "QNX", /QNX/ ], [ "BeOS", /BeOS/ ], [ "OS/2", /OS\/2/ ], [ "Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/ ] ];
		function parseUserAgent(e) {
			var t = "" !== e && s.reduce((function(t, r) {
				var n = r[0], a = r[1];
				if (t) return t;
				var o = a.exec(e);
				return !!o && [ n, o ];
			}), !1);
			if (!t) return null;
			var a = t[0], c = t[1];
			if ("searchbot" === a) return new o;
			var u = c[1] && c[1].split(/[._]/).slice(0, 3);
			return u ? u.length < i && (u = r(u, function createVersionParts(e) {
				for (var t = [], r = 0; r < e; r++) t.push("0");
				return t;
			}(i - u.length))) : u = [], new n(a, u.join("."), detectOS(e));
		}
		function detectOS(e) {
			for (var t = 0, r = c.length; t < r; t++) {
				var n = c[t], a = n[0];
				if (n[1].test(e)) return a;
			}
			return null;
		}
		function getNodeVersion() {
			return void 0 !== e && e.version ? new a(e.version.slice(1)) : null;
		}
		t.detect = function detect(e) {
			return e ? parseUserAgent(e) : "undefined" != typeof navigator ? parseUserAgent(navigator.userAgent) : getNodeVersion();
		}, t.parseUserAgent = parseUserAgent, t.detectOS = detectOS, t.getNodeVersion = getNodeVersion;
	}).call(this, r(91));
}, function(e, t, r) {
	var n = r(296);
	e.exports = function uniq(e) {
		return e && e.length ? n(e) : [];
	};
}, function(e, t, r) {
	var n, a;
	!function(o, i) {
		"use strict";
		void 0 === (a = "function" == typeof (n = function() {
			var noop = function() {}, e = "undefined", t = typeof window !== e && /Trident\/|MSIE /.test(window.navigator.userAgent), r = [ "trace", "debug", "info", "warn", "error" ];
			function bindMethod(e, t) {
				var r = e[t];
				if ("function" == typeof r.bind) return r.bind(e);
				try {
					return Function.prototype.bind.call(r, e);
				} catch (t) {
					return function() {
						return Function.prototype.apply.apply(r, [ e, arguments ]);
					};
				}
			}
			function traceForIE() {
				console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [ console, arguments ])),
				console.trace && console.trace();
			}
			function replaceLoggingMethods(e, t) {
				for (var n = 0; n < r.length; n++) {
					var a = r[n];
					this[a] = n < e ? noop : this.methodFactory(a, e, t);
				}
				this.log = this.debug;
			}
			function enableLoggingWhenConsoleArrives(t, r, n) {
				return function() {
					typeof console !== e && (replaceLoggingMethods.call(this, r, n), this[t].apply(this, arguments));
				};
			}
			function defaultMethodFactory(r, n, a) {
				return function realMethod(r) {
					return "debug" === r && (r = "log"), typeof console !== e && ("trace" === r && t ? traceForIE : void 0 !== console[r] ? bindMethod(console, r) : void 0 !== console.log ? bindMethod(console, "log") : noop);
				}(r) || enableLoggingWhenConsoleArrives.apply(this, arguments);
			}
			function Logger(t, n, a) {
				var o, i = this, s = "loglevel";
				function getPersistedLevel() {
					var t;
					if (typeof window !== e) {
						try {
							t = window.localStorage[s];
						} catch (e) {}
						if (typeof t === e) try {
							var r = window.document.cookie, n = r.indexOf(encodeURIComponent(s) + "=");
							-1 !== n && (t = /^([^;]+)/.exec(r.slice(n))[1]);
						} catch (e) {}
						return void 0 === i.levels[t] && (t = void 0), t;
					}
				}
				t && (s += ":" + t), i.name = t, i.levels = {
					TRACE: 0,
					DEBUG: 1,
					INFO: 2,
					WARN: 3,
					ERROR: 4,
					SILENT: 5
				}, i.methodFactory = a || defaultMethodFactory, i.getLevel = function() {
					return o;
				}, i.setLevel = function(n, a) {
					if ("string" == typeof n && void 0 !== i.levels[n.toUpperCase()] && (n = i.levels[n.toUpperCase()]),
						!("number" == typeof n && n >= 0 && n <= i.levels.SILENT)) throw "log.setLevel() called with invalid level: " + n;
					if (o = n, !1 !== a && function persistLevelIfPossible(t) {
						var n = (r[t] || "silent").toUpperCase();
						if (typeof window !== e) {
							try {
								return void (window.localStorage[s] = n);
							} catch (e) {}
							try {
								window.document.cookie = encodeURIComponent(s) + "=" + n + ";";
							} catch (e) {}
						}
					}(n), replaceLoggingMethods.call(i, n, t), typeof console === e && n < i.levels.SILENT) return "No console available for logging";
				}, i.setDefaultLevel = function(e) {
					getPersistedLevel() || i.setLevel(e, !1);
				}, i.enableAll = function(e) {
					i.setLevel(i.levels.TRACE, e);
				}, i.disableAll = function(e) {
					i.setLevel(i.levels.SILENT, e);
				};
				var c = getPersistedLevel();
				null == c && (c = null == n ? "WARN" : n), i.setLevel(c, !1);
			}
			var n = new Logger, a = {};
			n.getLogger = function getLogger(e) {
				if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
				var t = a[e];
				return t || (t = a[e] = new Logger(e, n.getLevel(), n.methodFactory)), t;
			};
			var o = typeof window !== e ? window.log : void 0;
			return n.noConflict = function() {
				return typeof window !== e && window.log === n && (window.log = o), n;
			}, n.getLoggers = function getLoggers() {
				return a;
			}, n;
		}) ? n.call(t, r, t, e) : n) || (e.exports = a);
	}();
}, function(e, t, r) {
	var n = r(299);
	e.exports = "string" == typeof n ? n : n.toString();
}, function(e, t, r) {
	var n = r(300);
	e.exports = "string" == typeof n ? n : n.toString();
}, function(e, t, r) {
	var n = r(301);
	e.exports = "string" == typeof n ? n : n.toString();
}, function(e, t, r) {
	/*!
 * displacejs.js 1.3.2 - Tiny javascript library to create moveable DOM elements.
 * Copyright (c) 2019 Catalin Covic - https://github.com/catc/displace
 * License: MIT
 */
	e.exports = function(e) {
		function t(n) {
			if (r[n]) return r[n].exports;
			var a = r[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports;
		}
		var r = {};
		return t.m = e, t.c = r, t.p = "", t(0);
	}([ function(e, t, r) {
		"use strict";
		var a = function n(e) {
			return e && e.__esModule ? e : {
				default: e
			};
		}(r(1));
		e.exports = a.default;
	}, function(t, r, a) {
		"use strict";
		function s() {
			var e = this, t = this.el, r = this.opts || u, n = {};
			if (t.style.position = "absolute", this.handle = r.handle || t, r.constrain) {
				for (var a = r.relativeTo || t.parentNode, s = t, l = 0, p = 0; s !== a; ) s = s.parentNode,
				(0, o.isRelative)(s) && (l -= s.offsetLeft, p -= s.offsetTop), s === a && (l += s.offsetLeft,
					p += s.offsetTop);
				var f = l + a.offsetWidth - t.offsetWidth, d = p + a.offsetHeight - t.offsetHeight;
				n.xClamp = (0, o.generateClamp)(l, f), n.yClamp = (0, o.generateClamp)(p, d);
			}
			this.opts = r, this.data = n, this.events = {
				mousedown: i.mousedown.bind(this),
				mouseup: i.mouseup.bind(this),
				touchstart: i.touchstart.bind(this),
				touchstop: i.touchstop.bind(this),
				scrollFix: function(t) {
					e.isDragging && t.preventDefault();
				}
			}, this.handleMove = c(this.opts.customMove), this.handle.addEventListener("mousedown", this.events.mousedown, !1),
				this.handle.addEventListener("touchstart", this.events.touchstart, !1), document.addEventListener("touchmove", this.events.scrollFix, {
				passive: !1
			});
		}
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var o = a(2), i = a(3), c = (0, o.generateMoveFn)(), u = {
			constrain: !1,
			relativeTo: null,
			handle: null,
			ignoreFn: null,
			highlightInputs: !1,
			onMouseDown: null,
			onMouseMove: null,
			onMouseUp: null,
			onTouchStart: null,
			onTouchMove: null,
			onTouchStop: null,
			customMove: null
		}, l = function() {
			function e(t, r) {
				if (function n(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
				}(this, e), !t) throw Error("Must include moveable element");
				this.el = t, this.opts = r, s.call(this);
			}
			return e.prototype.reinit = function() {
				this.destroy(), s.call(this);
			}, e.prototype.destroy = function() {
				var e = this.events;
				this.handle.removeEventListener("mousedown", e.mousedown, !1), document.removeEventListener("mousemove", e.mousemove, !1),
					document.removeEventListener("mouseup", e.mouseup, !1), this.handle.removeEventListener("touchstart", e.touchstart, !1),
					document.removeEventListener("touchmove", e.touchmove, !1), document.removeEventListener("touchstop", e.touchstop, !1),
					document.removeEventListener("touchmove", this.events.scrollFix, {
						passive: !1
					});
			}, e;
		}();
		r.default = function(e, t) {
			return new l(e, t);
		};
	}, function(e, t) {
		"use strict";
		function i(e, t, r) {
			e.style.left = t + "px", e.style.top = r + "px";
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.generateClamp = function o(e, t) {
			return function(r) {
				return Math.min(Math.max(r, e), t);
			};
		}, t.isRelative = function n(e) {
			return "relative" === window.getComputedStyle(e).position;
		}, t.generateMoveFn = function s() {
			return window.requestAnimationFrame ? function(e) {
				var t = e || i;
				return function(e, r, n) {
					window.requestAnimationFrame((function() {
						t(e, r, n);
					}));
				};
			} : function(e) {
				return function(t, r, n) {
					(e || i)(t, r, n);
				};
			};
		};
	}, function(e, t) {
		"use strict";
		function n(e, t, r) {
			var n = this.el, a = this.opts, o = this.data;
			"function" == typeof a.onMouseMove && a.onMouseMove(n, r);
			var i = r.clientX - e, s = r.clientY - t;
			return a.constrain && (i = o.xClamp(i), s = o.yClamp(s)), this.handleMove(n, i, s),
				r.preventDefault(), !1;
		}
		function u(e, t, r) {
			var n = this.el, a = this.opts, o = this.data;
			"function" == typeof a.onTouchMove && a.onTouchMove(n, r);
			var i = r.targetTouches[0], s = i.clientX - e, c = i.clientY - t;
			return a.constrain && (s = o.xClamp(s), c = o.yClamp(c)), this.handleMove(n, s, c),
				r.preventDefault(), !1;
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.mousedown = function o(e) {
			var t = this.opts;
			if (t.highlightInputs) {
				var r = e.target.tagName.toLowerCase();
				if ("input" === r || "textarea" === r) return;
			}
			if (!t.ignoreFn || !t.ignoreFn(e)) {
				if (0 === e.button) {
					var a = this.el, o = this.events;
					"function" == typeof t.onMouseDown && t.onMouseDown(a, e);
					var i = e.clientX - a.offsetLeft, s = e.clientY - a.offsetTop;
					o.mousemove = n.bind(this, i, s), document.addEventListener("mousemove", o.mousemove, !1),
						document.addEventListener("mouseup", o.mouseup, !1);
				}
				e.preventDefault();
			}
		}, t.mousemove = n, t.mouseup = function s(e) {
			var t = this.el, r = this.opts, n = this.events;
			"function" == typeof r.onMouseUp && r.onMouseUp(t, e), document.removeEventListener("mouseup", n.mouseup, !1),
				document.removeEventListener("mousemove", n.mousemove, !1);
		}, t.touchstart = function i(e) {
			var t = this.opts;
			if (t.highlightInputs) {
				var r = e.target.tagName.toLowerCase();
				if ("input" === r || "textarea" === r) return;
			}
			if (!t.ignoreFn || !t.ignoreFn(e)) {
				var n = this.el, a = this.events;
				"function" == typeof t.onTouchStart && t.onTouchStart(n, e);
				var o = e.targetTouches[0], i = o.clientX - n.offsetLeft, s = o.clientY - n.offsetTop;
				a.touchmove = u.bind(this, i, s), this.isDragging = !0, document.addEventListener("touchmove", a.touchmove, !1),
					document.addEventListener("touchend", a.touchstop, !1), document.addEventListener("touchcancel", a.touchstop, !1);
			}
		}, t.touchmove = u, t.touchstop = function r(e) {
			this.isDragging = !1;
			var t = this.el, r = this.opts, n = this.events;
			"function" == typeof r.onTouchStop && r.onTouchStop(t, e), document.removeEventListener("touchmove", n.touchmove, !1),
				document.removeEventListener("touchend", n.touchstop, !1), document.removeEventListener("touchcancel", n.touchstop, !1);
		};
	} ]);
}, function(e, t, r) {
	e.exports = r(326);
}, function(e, t, r) {
	"use strict";
	(function(t) {
		/**!
		 * urlencode - lib/urlencode.js
		 *
		 * MIT Licensed
		 *
		 * Authors:
		 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
		 */
		var n = r(334);
		function isUTF8(e) {
			return !e || ("utf8" === (e = e.toLowerCase()) || "utf-8" === e);
		}
		function encode(e, t) {
			if (isUTF8(t)) return encodeURIComponent(e);
			for (var r = n.encode(e, t), a = "", o = "", i = 0; i < r.length; i++) 1 === (o = r[i].toString("16")).length && (o = "0" + o),
				a += "%" + o;
			return a = a.toUpperCase();
		}
		function decode(e, r) {
			if (isUTF8(r)) return decodeURIComponent(e);
			for (var a = [], o = 0; o < e.length; ) "%" === e[o] ? (o++, a.push(parseInt(e.substring(o, o + 2), 16)),
				o += 2) : (a.push(e.charCodeAt(o)), o++);
			var i = new t(a);
			return n.decode(i, r);
		}
		function has(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}
		function encodeComponent(e, t) {
			return e = function isASCII(e) {
				return /^[\x00-\x7F]*$/.test(e);
			}(e = String(e)) ? encodeURIComponent(e) : encode(e, t);
		}
		var stringify = function(e, t, r) {
			"string" != typeof t && (r = t || {}, t = null);
			var n = r.charset || "utf-8";
			return Array.isArray(e) ? function stringifyArray(e, t, r) {
				var n = [];
				if (!t) throw new TypeError("stringify expects an object");
				for (var a = 0; a < e.length; a++) n.push(stringify(e[a], t + "[" + a + "]", r));
				return n.join("&");
			}(e, t, r) : "[object Object]" === {}.toString.call(e) ? function stringifyObject(e, t, r) {
				for (var n, a = [], o = Object.keys(e), i = r.charset, s = 0, c = o.length; s < c; ++s) "" !== (n = o[s]) && (null === e[n] ? a.push(encode(n, i) + "=") : a.push(stringify(e[n], t ? t + "[" + encodeComponent(n, i) + "]" : encodeComponent(n, i), r)));
				return a.join("&");
			}(e, t, r) : "string" == typeof e ? function stringifyString(e, t, r) {
				if (!t) throw new TypeError("stringify expects an object");
				var n = r.charset;
				return t + "=" + encodeComponent(e, n);
			}(e, t, r) : t + "=" + encodeComponent(String(e), n);
		};
		e.exports = encode, e.exports.encode = encode, e.exports.decode = decode, e.exports.parse = function parse(e, t, r, n) {
			"object" == typeof t && (n = t, t = null), t = t || "&", r = r || "=";
			var a = {};
			if ("string" != typeof e || 0 === e.length) return a;
			var o = /\+/g;
			e = e.split(t);
			var i = 1e3, s = null;
			n && ("number" == typeof n.maxKeys && (i = n.maxKeys), "string" == typeof n.charset && (s = n.charset));
			var c = e.length;
			i > 0 && c > i && (c = i);
			for (var u = 0; u < c; ++u) {
				var l, p, f, d, _ = e[u].replace(o, "%20"), h = _.indexOf(r);
				if (h >= 0 ? (l = _.substr(0, h), p = _.substr(h + 1)) : (l = _, p = ""), l && l.indexOf("%") >= 0) try {
					f = decode(l, s);
				} catch (e) {
					f = l;
				} else f = l;
				if (p && p.indexOf("%") >= 0) try {
					d = decode(p, s);
				} catch (e) {
					d = p;
				} else d = p;
				has(a, f) ? Array.isArray(a[f]) ? a[f].push(d) : a[f] = [ a[f], d ] : a[f] = d;
			}
			return a;
		}, e.exports.stringify = stringify;
	}).call(this, r(94).Buffer);
}, function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return a;
	}));
	var n = r(1), a = [ {
		name: "Discuz 论坛 - 搜索",
		url: "^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum",
		preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
		nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
		autopager: {
			pageElement: '//div[@id="threadlist"]',
			replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
		}
	}, {
		name: "Discuz 论坛 - 导读",
		url: /^https?:\/\/(?:bbs|u)\.[^\/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,
		preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
		nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
		autopager: {
			pageElement: "//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",
			replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
		}
	}, {
		name: "Discuz论坛列表",
		url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,
		preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
		nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',
		autopager: {
			pageElement: '//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',
			replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
			lazyImgSrc: "file|pagespeed_lsc_url"
		}
	}, {
		name: "Discuz论坛帖子",
		url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,
		preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
		nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',
		autopager: {
			pageElement: '//div[@id="postlist"] | //form[@method="post"][@name]',
			replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
			lazyImgSrc: "zoomfile",
			stylish: '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
			filter: function filter(e) {
				var t = document.querySelectorAll("#postlistreply");
				if (t.length > 1) {
					var r = t[0];
					r.parentNode.removeChild(r);
				}
			},
			documentFilter: function documentFilter(e) {
				var t = e.querySelectorAll('pre[class^="brush:"]');
				[].forEach.call(t, (function(e) {
					e.classList.add("mbbs_code");
				}));
			}
		}
	}, {
		name: "phpWind论坛列表",
		url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?thread/i,
		preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
		nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
		autopager: {
			pageElement: '//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'
		}
	}, {
		name: "phpWind论坛帖子",
		url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?read/i,
		preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
		nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
		autopager: {
			pageElement: '//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'
		}
	}, {
		name: "phpBB列表",
		url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewforum/i,
		exampleUrl: "http://www.firefox.net.cn/forum/viewforum.php?f=4",
		nextLink: "auto;",
		autopager: {
			pageElement: '(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',
			remain: 1 / 3
		}
	}, {
		name: "phpBB帖子",
		url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewtopic/i,
		exampleUrl: "http://www.firefox.net.cn/forum/viewtopic.php?t=34339",
		nextLink: "auto;",
		autopager: {
			pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])'
		}
	}, {
		name: "phpBB Search",
		url: /^https?:\/\/forum\.[^\/]+\/search\.php/i,
		exampleUrl: "http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2",
		nextLink: "auto;",
		autopager: {
			pageElement: 'id("page-body")/div[starts-with(@class, "search post")]',
			replaceE: 'id("page-body")/ul[@class="linklist"]'
		}
	}, {
		name: "discuz论坛通用搜索",
		url: "^https?://[^/]+/f/(?:discuz|search)",
		nextLink: "auto;",
		pageElement: 'id("result-items")'
	}, {
		name: "View forum - 通用",
		url: "^https?://.+?/viewforum\\.php\\?",
		nextLink: '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
		pageElement: '//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'
	}, {
		name: "wiki 通用",
		url: ".\\?(?:.+&)?search=",
		nextLink: '//a[@class="mw-nextlink"]',
		pageElement: '//ul[@class="mw-search-results"]'
	}, {
		name: "通用 Forum 规则1",
		url: "^https?://.*((showthread\\.php\\?)|(forum|thread))",
		nextLink: '//a[@rel="next"]',
		pageElement: '//div[@id="posts"]|//ol[@id="posts"]/li',
		separatorReal: !1
	}, {
		name: "通用 Forum 规则2 vBulletin threads",
		url: "^https?://[^?#]+?/showthread\\.php\\?",
		nextLink: '//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',
		pageElement: '(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',
		separatorReal: !1
	}, {
		name: "通用 Forum 规则3 vBulletin thread_list",
		url: "^https?://.*((forumdisplay\\.php\\?)|forum)",
		nextLink: "auto;",
		pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"]',
		separatorReal: !1
	}, {
		name: "通用 Forum 规则4",
		url: /^https?:\/\/forums\..*\/threads/i,
		nextLink: !1,
		pageElement: '//ol[@id="messageList"]/li',
		separatorReal: !1
	}, {
		name: "PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread",
		url: "^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$",
		nextLink: "auto;",
		pageElement: '//form[@name="delatc"]',
		exampleUrl: "http://www.yydzh.com/read.php?tid=1584013"
	}, {
		name: "Typecho",
		url: "^https?://",
		nextLink: "//ol[@class='page-navigator']/li[@class='next']/a",
		autopager: {
			pageElement: function pageElement(e, t, r) {
				var a = Object(n.d)("//head/meta[@name='generator']", e, e);
				if (!a || !a.content.includes("Typecho") || !e.documentElement.outerHTML.includes("Typecho")) return null;
				try {
					return Object(n.b)("//article[@class='post'] | //div[@class='blog-post']", e, e);
				} catch (e) {
					return null;
				}
			},
			relatedObj: !0
		}
	}, {
		name: "WordPress",
		url: "^https?://[^/]+(/page/\\d+)?",
		nextLink: function nextLink(e, t, r) {
			var n = r.replace(/^(.*)(#[^\/]*)?$/, "$1");
			if (".html" !== n.slice(n.length - 5, n.length) && ".htm" !== n.slice(n.length - 4, n.length)) {
				var a = /^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(n);
				if (a[2]) {
					var o = Number(/\/page\/(\d+)/.exec(a[2])[1]) + 1;
					return n.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/, "$1" + String(o) + "$2");
				}
				return n.replace(/^(.*?)\/?$/, "$1") + "/page/2";
			}
		},
		autopager: {
			pageElement: function pageElement(e, t, r) {
				for (var a = [ /^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/ ], o = 0; o < a.length; o++) if (a[o].test(r)) return null;
				var i = [ "wp-content", "wp-plugin", "wp-comment" ], s = !1;
				for (o = 0; o < i.length; o++) if (e.documentElement.outerHTML.indexOf(i[o]) > -1) {
					s = !0;
					break;
				}
				if (!s) return null;
				var c = [ "发表评论", "提交评论", "添加留言", "提交留言", "コメントを送信", "SUBMIT COMMENT", "POST COMMENT", "Submit Comment", "Post comment", "Post Comment" ];
				for (o = 0; o < c.length; o++) {
					if (Object(n.d)("//input[@value='" + c[o] + "']", e, e)) return null;
					if (Object(n.d)("//a[text()='" + c[o] + "']", e, e)) return null;
				}
				var u = [ "//button[@id='submit']", "//div[@class='single-post-box']", "//div[@class='single_post']" ];
				for (o = 0; o < u.length; o++) if (Object(n.d)(u[o], e, e)) return null;
				var l = Object(n.a)("//div[contains(@class,'main')]//article[starts-with(@id,'post-')]", e, e, t);
				return l.length > 0 ? l : (l = Object(n.a)("//article[starts-with(@id,'post-')]", e, e, t)).length > 0 ? l : (l = Object(n.a)("//*[contains(@class,'container')]//article|//*[contains(@class,'container')]//div[contains(@class,'article-post')]", e, e, t)).length > 0 ? l : (l = Object(n.a)("//div[@id='main']/div[@class='post-entry']", e, e, t)).length > 0 ? l : l = Object(n.a)("//*[contains(@class,'container')]//div[substring(@class,string-length(@class) -string-length('post')+1)='post']", e, e, t);
			},
			relatedObj: !0
		}
	}, {
		name: "Generic Posts Rule created by swdyh",
		exampleUrl: "http://wedata.net/items/400.json",
		url: "^https?://.+",
		pageElement: "(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')]/following-sibling::*[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",
		nextLink: "(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",
		autopager: {
			stylish: '@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'
		}
	} ];
}, function(module, __webpack_exports__, __webpack_require__) {
	"use strict";
	__webpack_require__.d(__webpack_exports__, "a", (function() {
		return jsSiteRule;
	}));
	var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__), _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165), _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__), utils_domSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1), utils_domTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2), utils_emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69), jsSiteRule = [ {
		name: "Google搜索",
		url: "^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)",
		exampleUrl: "http://www.google.com",
		enable: !0,
		useiframe: !1,
		viewcontent: !1,
		nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',
		preLink: '//a[@id="pnprev"]',
		autopager: {
			enable: !0,
			useiframe: !1,
			iloaded: !1,
			itimeout: 0,
			newIframe: !1,
			pageElement: '//div[@id="res"]|//div[@id="extrares"]',
			remain: 1 / 3,
			relatedObj: [ "css;div#navcnt", "bottom" ],
			replaceE: '//div[@id="navcnt"]',
			ipages: [ !1, 2 ],
			separator: !0,
			separatorReal: !0,
			maxpage: 66,
			manualA: !1,
			lazyImgSrc: "imgsrc",
			documentFilter: function documentFilter(e, t) {
				var r = e.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', e, null, 9, null).singleNodeValue;
				if (r) try {
					new Function("document", "window", "google", r.nodeValue)(e, unsafeWindow, unsafeWindow.google);
				} catch (e) {}
				var n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.b)("//g-scrolling-carousel/div/div/div", e, e);
				if (n.snapshotLength > 0) for (var a = 0; a < n.snapshotLength; a++) {
					n.snapshotItem(a).style.cssText += "display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;";
				}
				var o = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.b)("//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img", e, e);
				if (o.snapshotLength > 0) for (var i = 0; i < o.snapshotLength; i++) {
					var s = o.snapshotItem(i);
					s.setAttribute("src", s.getAttribute("data-src")), s.style.opacity = 1;
				}
				var c = e.getElementById("brs");
				c && c.remove();
			},
			startFilter: function startFilter(e, t) {
				var r = e.createElement("script");
				r.type = "text/javascript", r.textContent = '                  Object.defineProperty(window, "rwt", {                      configurable: false,                      enumerable: true,                      get: function () {                          return function() {};                      },                  });                  ',
					e.documentElement.appendChild(r), e.documentElement.removeChild(r);
				var n = e.getElementById("brs");
				n && (n.id = "ibrs"), console.log("%cGoogle    is %s", "font-weight:bold;color:red", Object(utils_emoji__WEBPACK_IMPORTED_MODULE_4__.a)("1F4A9"));
				var a = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)("//input[@title='Search']", e, e);
				a ? console.log("%cMicrosoft is %s %csearch with Bing %s", "font-weight:bold;color:00bbee", Object(utils_emoji__WEBPACK_IMPORTED_MODULE_4__.a)("1F451"), "font-weight:bold;color:00bbee", encodeURI("https://www.bing.com/search?q=" + a.value)) : console.log("%cMicrosoft is %s", "font-weight:bold;color:00bbee", Object(utils_emoji__WEBPACK_IMPORTED_MODULE_4__.a)("1F451"));
			}
		}
	}, {
		name: "百度搜索",
		url: "^https?://www\\.baidu\\.com/",
		enable: !0,
		nextLink: '//div[@id="page"]/a[contains(text(),"下一页")][@href]',
		preLink: '//div[@id="page"]/a[contains(text(),"上一页")][@href]',
		autopager: {
			pageElement: "css;div#content_left > *",
			HT_insert: [ "css;div#content_left", 2 ],
			replaceE: "css;#page",
			stylish: ".autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}",
			startFilter: function startFilter(e, t) {
				try {
					t.document.cookie = "ISSW=1";
				} catch (e) {}
			}
		}
	}, {
		name: "kongregate",
		url: "^https?://www\\.kongregate\\.com",
		nextLink: "(//li[@class='next_link']/a)[1]",
		autopager: {
			scriptFilter: "renderPosts",
			pageElement: "//table[@class='posts']/tbody",
			filter: function filter(pageElements) {
				var scripts = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.b)(".//script[contains(text(), 'renderPosts')]", pageElements[0], document);
				if (scripts.snapshotLength > 0) for (var i = 0; i < scripts.snapshotLength; i++) {
					var s = scripts.snapshotItem(i);
					try {
						eval(s.innerText);
					} catch (e) {}
				}
			}
		}
	}, {
		name: "kongregate_list",
		url: "^https?://www\\.kongregate\\.com",
		nextLink: "(//li[@class='next_link']/a)[1]",
		pageElement: "//div[@id='featurewide']/table/tbody"
	}, {
		name: "小木虫-帖子",
		url: "^https?://(www\\.)?muchong\\.com/t-.*$",
		nextLink: "auto;",
		pageElement: "//div[@id='maincontent']/table/tbody[@id]",
		autopager: {
			relatedObj: !0,
			sepdivDom: function sepdivDom(e, t) {
				var r = e.createElement("td");
				r.appendChild(t);
				var n = e.createElement("tr");
				r.setAttribute("colspan", 2), n.appendChild(r);
				var a = e.createElement("tbody");
				return a.appendChild(r), a;
			}
		}
	}, {
		name: "smzdm-comment",
		url: /^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,
		exampleUrl: "https://post.smzdm.com/p/559992/",
		nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
		autopager: {
			pageElement: 'id("commentTabBlockNew")/ul[@class="comment_listBox"]',
			excludeElement: '//div[@class="article-card J_trigger_ani"]',
			replaceE: '(//ul[@class="pagination"])[1]',
			startFilter: function startFilter(e) {
				var t = e.querySelector(".pagination");
				t && t.parentNode.removeChild(t);
			}
		}
	}, {
		name: "和讯博客",
		url: /^https?:\/\/\w+\.blog\.hexun\.com\//i,
		exampleUrl: "http://23802543.blog.hexun.com/",
		nextLink: function nextLink(e) {
			var t = e.querySelector('.PageSkip_1 a[title="下一页"]').getAttribute("href");
			return t = t.replace(/(\/p\d+\/).*/, "$1default.html");
		},
		autopager: {
			pageElement: 'id("DefaultContainer1_ArticleList_Panel1")'
		}
	}, {
		name: "m-team artist detail",
		url: "^https?://pt\\.m-team\\.cc/artist\\.php?",
		nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
		autopager: {
			pageElement: '//form[@id="form2"]/table',
			relatedObj: !0,
			documentFilter: "startFilter",
			startFilter: function startFilter(e) {
				var t = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.b)("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr", e, e);
				if (t.snapshotLength > 0) for (var r = 0; r < t.snapshotLength; r++) {
					var n = t.snapshotItem(r).getElementsByTagName("img");
					if (n) {
						var a = (n = n[0]).getAttribute("src"), o = utils_domTools__WEBPACK_IMPORTED_MODULE_3__.a.create("tr", {
							attr: {
								align: "center"
							},
							children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_3__.a.create("td", {
								attr: {
									colspan: 5,
									style: "border-bottom:1px dashed black;"
								},
								children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_3__.a.create("img", {
									attr: {
										src: a,
										style: "display:block; width:100%; height:auto;"
									}
								}) ]
							}) ]
						});
						t.snapshotItem(r).parentNode.insertBefore(o, t.snapshotItem(r));
					}
				}
			}
		}
	}, {
		name: "m-team adults",
		url: "^https?://pt\\.m-team\\.cc/adult\\.php",
		nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
		autopager: {
			pageElement: '//table[@class="torrents"]',
			startFilter: function startFilter(e) {
				var t = e.getElementsByClassName("torrentimg");
				[].forEach.call(t, (function(e) {
					var t = e.getElementsByTagName("img");
					if (t) {
						var r = utils_domTools__WEBPACK_IMPORTED_MODULE_3__.a.create("img", {
							attr: {
								src: t[0].getAttribute("src"),
								style: "display:block; width:100%; height:auto;"
							}
						}), n = utils_domTools__WEBPACK_IMPORTED_MODULE_3__.a.create("td", {
							attr: {
								colspan: 2,
								style: "border-bottom:1px solid black;"
							}
						}), a = utils_domTools__WEBPACK_IMPORTED_MODULE_3__.a.create("tr", {
							attr: {
								align: "center"
							}
						});
						n.appendChild(r), a.appendChild(n), e.parentNode.parentNode.insertBefore(a, e.parentNode);
					}
				}));
			},
			documentFilter: "startFilter"
		}
	}, {
		name: "idope.se",
		url: /^https?:\/\/idope\.se\/torrent-list\/.+/i,
		exampleUrl: "https://idope.se/torrent-list/transformer/?p=3",
		preLink: {
			startAfter: "?p=",
			inc: -1,
			min: 1
		},
		nextLink: {
			startAfter: "?p=",
			mFails: [ /^https?:\/\/idope\.se\/torrent-list\/.+/i, "/?p=1" ],
			inc: 1,
			isLast: function isLast(e, t, r) {
				if (!e.getElementById("next")) return !0;
			}
		},
		autopager: {
			pageElement: '//*[@id="div2child"]',
			useiframe: !0
		}
	}, {
		name: "天涯论坛帖子",
		url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
		exampleUrl: "http://bbs.tianya.cn/post-feeling-2792523-1.shtml",
		nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
		autopager: {
			useiframe: !0,
			pageElement: '//div[@class="atl-main"]',
			lazyImgSrc: "original",
			filter: function filter(e) {
				var t = unsafeWindow.see_only_uname, r = unsafeWindow.setOnlyUser;
				t && r(t);
			}
		}
	}, {
		name: "Firefox中文社区 - 列表",
		url: "^https?://www\\.firefox\\.net\\.cn/thread",
		nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
		autopager: {
			pageElement: 'id("J_posts_list")',
			replaceE: "css;.pages",
			documentFilter: function documentFilter(e) {
				[].forEach.call(e.querySelectorAll("img.J_avatar"), (function(e) {
					e.setAttribute("onerror", 'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";');
				}));
			}
		}
	}, {
		name: "小米手机官方论坛",
		url: "^https?://bbs\\.xiaomi\\.cn/",
		nextLink: "//a[@class='nxt' and (text()='下一页')]",
		autopager: {
			pageElement: "id('postlist') | id('threadlist')",
			replaceE: '//div[@class="pg"][child::a[@class="nxt"]]',
			documentFilter: function documentFilter(e) {
				var t = e.querySelector("div[id^='post_']");
				t && t.parentNode.removeChild(t);
			}
		}
	}, {
		name: "游民星空",
		url: /^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,
		exampleUrl: "https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml",
		nextLink: function nextLink(e, t, r) {
			var n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//div[@class="page_css"]//a[(text()="下一页")]', e, e);
			if (!n) return null;
			var a = /^(https)?:\/\/.*$/.exec(r);
			if (a) {
				var o = /^https?:\/\/(.*)$/.exec(n.getAttribute("href"));
				return a[1] + "://" + o[1];
			}
			return n.getAttribute("href");
		},
		autopager: {
			relatedObj: !0,
			pageElement: '//div[@class="Mid2L_con"]',
			replaceE: '//div[@class="page_css"]'
		}
	}, {
		name: "ali213 - 攻略",
		url: /^http:\/\/gl\.ali213\.net\/html/,
		exampleUrl: "http://gl.ali213.net/html/2011/25399_2.html",
		nextLink: "id('after_this_page')",
		autopager: {
			useiframe: !0,
			pageElement: "//div[@class='glzjshow_con']",
			replaceE: "id('after_this_page')",
			startFilter: function startFilter(e) {
				var t = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//div[@class="glzjshow_plun"]', e, e);
				t && (t.style.display = "none");
			}
		}
	}, {
		name: "多玩 - 攻略",
		url: /^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,
		exampleUrl: "http://tv.duowan.com/1801/380717306538.html",
		nextLink: "id('pageNum')//a[text()='下一页']",
		autopager: {
			useiframe: !0,
			replaceE: "id('pageNum')",
			pageElement: "//div[@class='box-bd'][last()]",
			startFilter: function startFilter(e) {
				var t = e.querySelector("#pageNum");
				t && Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)("//div[@class='box-bd'][last()]", e, e).after(t);
				var r = e.querySelector(".aside-wrap");
				r && (r.style.display = "none");
			},
			documentFilter: function documentFilter(e) {
				var t = e.querySelector("#pageNum");
				t && (t.style.display = "none");
			}
		}
	}, {
		name: "yuyouge.com",
		url: "^https?://www\\.yuyouge\\.com",
		nextLink: "auto;",
		pageElement: "//article/div[@id='h1']|//article/div[@id='txtContent']",
		documentFilter: function documentFilter(e) {
			var t = document.querySelector("#txtContent").getAttribute("style"), r = document.querySelector("#txtContent").getAttribute("class");
			[].forEach.call(e.querySelectorAll("#txtContent"), (function(e) {
				e.setAttribute("style", t), e.setAttribute("class", r);
			}));
		}
	}, {
		name: "电玩巴士 - 图文",
		url: "^https?://pc\\.tgbus\\.com/.*\\d+/$",
		exampleUrl: "http://pc.tgbus.com/tuwen_180/88983/",
		nextLink: "//div[contains(@class, 'art-page')]/a[text()='下一页']",
		autopager: {
			pageElement: "//div[@class='art-body']",
			documentFilter: function documentFilter(e) {
				var t = e.querySelector(".art-pagination");
				t && t.parentNode.removeChild(t), e.querySelector(".art-page").style.display = "none";
			}
		}
	}, {
		name: "抽屉新热榜",
		url: /^https?:\/\/dig\.chouti\.com\//i,
		nextLink: '//a[@class="ct_page_edge" and (text()="下一页")]',
		autopager: {
			pageElement: '//div[@id="content-list"]',
			lazyImgSrc: "original",
			filter: function filter(e) {
				var t = unsafeWindow.chouti, r = unsafeWindow.NS_links_comment_top;
				t.vote(), t.addCollect(), t.shareweibo(), t.playVido(), r.init();
			}
		}
	}, {
		name: "koolshare扩展页面",
		url: "^https?://koolshare\\.cn/home\\.php",
		exampleUrl: "http://koolshare.cn/home.php",
		nextLink: "//a[contains(text(),'下一页')]",
		pageElement: "id('ct')//tbody",
		autopager: {
			documentFilter: function documentFilter(e) {
				var t = e.querySelector(".th");
				t && t.parentNode.removeChild(t);
			}
		}
	}, {
		name: "Jable",
		url: /^https?:\/\/jable\.tv/i,
		nextLink: function nextLink(e, t, r) {
			var n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a", e, e), nextLink = r + "?mode=async&function=get_block&block_id=" + n.getAttribute("data-block-id") + "&" + n.getAttribute("data-parameters").replace(/:/g, "=").replace(/;/g, "&") + "&_=" + _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
			return nextLink;
		},
		autopager: {
			enable: !1,
			useiframe: !0,
			pageElement: "//ul[@class='pagination']/preceding-sibling::div/div"
		},
		exampleUrl: "http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"
	}, {
		name: "Netflav",
		url: "^https?://netflav\\.com",
		nextLink: {
			startAfter: "?page=",
			mFails: [ /^https?:\/\/(?:netflav\.com)\/.+/i, "?page=1" ],
			inc: 1,
			isLast: function isLast(e, t, r) {
				if (Number(Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)("//div[@id='general-pagination']/div/a[@aria-current='true']", e, e).innerText) == Number(Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)("(//div[@id='general-pagination']/div/a[@type='nextItem']/preceding-sibling::a)[last()]", e, e).innerText)) return !0;
			}
		},
		autopager: {
			useiframe: !0,
			iloaded: !0,
			pageElement: "(//div[@id='general-pagination']/preceding-sibling::div)[last()]/div",
			HT_insert: [ "(//div[@id='general-pagination']/preceding-sibling::div)[last()]", 2 ]
		},
		exampleUrl: "https://netflav.com/chinese-sub?page=1"
	}, {
		name: "悠悠美图",
		url: /^https?:\/\/www\.youyourentiyishu\.com/i,
		nextLink: function nextLink(e, t, r) {
			var n = r.match(/\d+-(\d+)\.html/);
			if (n) {
				var a = Number(n[1]) + 1, o = r.replace(n[1] + ".html", a + ".html");
				return o != e.querySelector("a.next").getAttribute("href") ? void 0 : o;
			}
			return r.replace(".html", "-2.html");
		},
		autopager: {
			enable: !0,
			pageElement: '//div[@class="showimg"]/a',
			ipages: [ !0, 30 ]
		},
		exampleUrl: "http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"
	}, {
		name: "laomaoit - 老殁软件分享",
		url: "^https?://www\\.(laomoit|mpyit)\\.com",
		exampleUrl: "https://www.laomoit.com",
		nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
		autopager: {
			pageElement: 'id("post") | id("content")',
			replaceE: "css;#pagenavi",
			documentFilter: function documentFilter(e) {
				var t = e.querySelector(".browse");
				t && t.parentNode.removeChild(t);
				var r = e.querySelector("#map");
				r && r.parentNode.removeChild(r);
			}
		}
	}, {
		name: "CSDN博客",
		url: /^https?:\/\/blog\.csdn\.net/i,
		exampleUrl: "http://blog.csdn.net/wangjieest?viewmode=list",
		nextLink: function nextLink(e, t, r) {
			for (var n = 0; n < e.scripts.length; n++) {
				var a = e.scripts[n].text;
				if (void 0 !== a && a.indexOf("currentPage") > 0) {
					var o = a.match(/currentPage[ ]?=[ ]?(\d+)/);
					if (2 != o.length) continue;
					var i = a.match(/baseUrl[ ]?=[ ]?'([^']+)'/);
					if (2 != i.length) continue;
					return i[1] + "/" + (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(o[1]) + 1);
				}
			}
			return null;
		},
		autopager: {
			pageElement: '//div[@id="article_list"] | // div[@class="article-list"]',
			documentFilter: function documentFilter(e) {
				var t = e.querySelector(".article-list");
				t && (t.style.marginBottom = "0");
			},
			startFilter: function startFilter(e, t) {
				var r = e.querySelector(".article-list");
				r && (r.style.marginBottom = "0");
				var n = document.querySelector("#pageBox");
				n && n.parentNode.parentNode.appendChild(n);
				var a = document.querySelector(".box-box-large");
				a && a.parentNode.removeChild(a);
			}
		}
	}, {
		name: "CSDN话题",
		url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
		exampleUrl: "http://bbs.csdn.net/topics/390244325",
		nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
		autopager: {
			pageElement: 'id("bbs_detail_wrap")',
			documentFilter: function documentFilter(e) {
				var t = e.querySelector(".bbs_title_h");
				t && t.parentNode.removeChild(t);
				var r = e.querySelector(".bbs_title_bar");
				r && r.parentNode.removeChild(r);
				var n = e.querySelector(".bbs_bread_wrap");
				n && n.parentNode.removeChild(n);
				var a = e.querySelectorAll(".mod_fun_wrap");
				if (a) {
					var o = 0;
					2 == a.length && (o = 1), a[o].style.display = "none";
				}
			},
			startFilter: function startFilter(e) {
				var t = e.querySelectorAll(".mod_fun_wrap");
				if (t) {
					var r = 0;
					2 == t.length && (r = 1), t[r].style.display = "none";
				}
				var n = e.querySelector(".post_feed_box");
				n && n.parentNode.removeChild(n);
			},
			sepdivDom: function sepdivDom(e, t) {
				return t.className += " bbs_detail_wrap", t;
			}
		}
	}, {
		name: "bl-novel",
		url: "^https?://bl-novel\\.in/novel",
		nextLink: "//a[@id='pb_next']",
		pageElement: "//div[@id='nr']",
		documentFilter: function documentFilter(e, t) {
			var r, n = e.getElementsByTagName("script"), a = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
			[].forEach.call(n, (function(t) {
				if (t.innerText.indexOf("var chapter") >= 0) {
					var n = a.exec(t.innerText), o = n[1], i = n[2];
					r = n[3].indexOf("true") >= 0 ? secret(o, i, !0) : secret(o, i, !1), e.getElementById("nr1").innerHTML = r;
				}
			}));
		}
	}, {
		name: "第一版主",
		url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
		nextLink: "auto;",
		pageElement: "//div[@id='content']"
	}, {
		name: "第一版主",
		url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
		pageElement: "//div[@id='content']",
		nextLink: function nextLink(e, t, r) {
			var n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.b)("//div[@class='chapterPages']/a", e), a = r.substr(0, r.lastIndexOf("/")) + "/", o = 0;
			for (o = 0; o < n.snapshotLength; o++) if ("curr" === n.snapshotItem(o).className) return o + 1 < n.snapshotLength ? a + n.snapshotItem(o + 1).getAttribute("href") : getDomain(r) + Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)("//span[@class='next']/a").getAttribute("href");
		}
	}, {
		name: "起点文学-排行榜",
		url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
		exampleUrl: "https://www.qidian.com/rank/collect",
		nextLink: function nextLink(e, t, r) {
			var n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//div[@id="page-container"]', e);
			if (null !== n) {
				var a = Number(n.dataset.page) + 1;
				return a > n.dataset.pagemax ? void 0 : -1 != r.indexOf("page=") ? r.replace(/page=\d+/, "page=" + a) : -1 != r.indexOf("?") ? r + "&page=" + a : r + "?page=" + a;
			}
		},
		autopager: {
			pageElement: '//div[@class="rank-body"]'
		}
	}, {
		name: "rushi.net",
		url: "^https?://www.rushi.net/Home/Works",
		nextLink: "css;.gopage .next-btn",
		autopager: {
			pageElement: "css;.work_list_line",
			startFilter: function startFilter(e) {
				var t = document.querySelector(".hot-company-job");
				t && t.parentNode.removeChild(t);
			},
			documentFilter: "startFilter"
		}
	}, {
		name: "优书-书单|评论",
		url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
		nextLink: function nextLink(e, t, r) {
			var n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//ul[contains(@class, "pagination")]', e);
			if (null !== n) {
				var a;
				if (2 == n.childNodes.length) a = n.childNodes[1]; else for (var o = n.childNodes.length - 1; o >= 0; o--) if ("active" == n.children[o].className) {
					if (o == n.childNodes.length - 2) return;
					a = n.childNodes[o + 1];
				}
				var i = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(a.innerHTML);
				if (null !== i && 3 == i.length) {
					var s = i[1] + "=" + i[2];
					return -1 != r.indexOf(i[1] + "=") ? r.replace(new RegExp(i[1] + "=\\d+"), s) : -1 != r.indexOf("?") ? r + "&" + s : r + "?" + s;
				}
			}
		},
		autopager: {
			pageElement: '//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]'
		}
	}, {
		name: "动漫之家漫画网",
		url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
		exampleUrl: "https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1",
		nextLink: function nextLink(e, t, r) {
			var n = Number(Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//*[@id="page_select"]/option[@selected][1]', e).text.match(/(\d+)/)[1]) + 1;
			return n > Number(Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//*[@id="page_select"]/option[last()]', e).text.match(/(\d+)/)[1]) ? void 0 : r.replace(/\.shtml(?:#@page=\d+)?/, ".shtml#@page=" + n);
		},
		autopager: {
			useiframe: !0,
			reload: !0,
			ipages: [ !0, 20 ],
			pageElement: '//div[@id="center_box"]/img'
		}
	}, {
		name: "看漫画",
		url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
		nextLink: function nextLink(e, t, r) {
			var n = Number(Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//*[@id="page"]', e).innerHTML) + 1;
			return n > Number(Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.d)('//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]', e).text) ? void 0 : r.replace(/\.html(?:#p=\d+)?/, ".html#p=" + n);
		},
		autopager: {
			useiframe: !0,
			newIframe: !1,
			reload: !0,
			pageElement: '//div[@class="clearfix"]',
			ipages: [ !0, 20 ]
		},
		exampleUrl: "https://www.manhuagui.com/comic/17332/372862.html"
	}, {
		name: "SF在线漫画",
		url: "^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+",
		exampleUrl: "https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2",
		preLink: {
			startAfter: "#p=",
			inc: -1,
			min: 1
		},
		nextLink: {
			startAfter: "#p=",
			mFails: [ /^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i, "#p=1" ],
			inc: 1,
			isLast: function isLast(e, t, r) {
				var n = Number(e.getElementById("TotalPage").innerText) - 1;
				if (Number(e.getElementById("CurrentPage").innerText) == n) return !0;
			}
		},
		autopager: {
			pageElement: '//img[@id="curPic"]',
			useiframe: !0,
			reload: !0,
			replaceE: 'id("Pages")'
		}
	}, {
		name: "哦漫画",
		url: /^https?:\/\/www\.omanhua\.com\/comic\//i,
		exampleUrl: "http://www.omanhua.com/comic/2957/36463/index.html?p=2",
		nextLink: {
			startAfter: "?p=",
			mFails: [ /^http:\/\/www\.omanhua\.com\/comic\/.+/i, "?p=1" ],
			inc: 1,
			isLast: function isLast(e, t, r) {
				var n = e.getElementById("pageSelect");
				if (n) {
					var a = n.options.length;
					if (n.selectedIndex == a - 1) return !0;
				}
			}
		},
		autopager: {
			useiframe: !0,
			pageElement: '//img[@id="mangaFile"]'
		}
	}, {
		name: "汗汗漫画",
		url: /^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,
		exampleUrl: "http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0",
		nextLink: function nextLink(e, t, r) {
			var n = r.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/), a = Number(n[2]), o = n[4];
			o || (o = "&d=0");
			var i = a + 1, s = document.getElementById("hdPageCount");
			if (s) s = Number(s.value); else {
				if (!(s = document.getElementById("spPageCount"))) return;
				s = Number(s.innerText);
			}
			return i == s + 1 ? void 0 : n[1] + i + n[3] + o;
		},
		autopager: {
			useiframe: !0,
			pageElement: '//div[@id="iBody"]',
			ipages: [ !0, 20 ]
		}
	}, {
		name: "99漫画",
		url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
		exampleUrl: "http://dm.99manga.com/comic/35416/316645/?p=2&s=0",
		nextLink: {
			startAfter: "?p=",
			inc: 1,
			mFails: [ /^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, "?p=1&s=0" ],
			isLast: function isLast(e, t, r) {
				var n = Number(e.getElementById("spPageCount").innerText);
				if (Number(e.getElementById("spPageIndex").innerText) == n) return !0;
			}
		},
		autopager: {
			useiframe: !0,
			pageElement: '//*[@id="iBody"]'
		}
	}, {
		name: "天使漫画网,TSDM漫画组",
		url: /^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,
		exampleUrl: "http://mh.tsdm.net/comic/4697/68059.html",
		useiframe: !0,
		preLink: {
			startAfter: "?p=",
			inc: -1,
			min: 1
		},
		nextLink: {
			startAfter: "?p=",
			mFails: [ /^http:\/\/mh\.tsdm\.net\/comic\/.+\.html/i, "?p=1" ],
			inc: 1,
			isLast: function isLast(e, t, r) {
				var n = e.getElementById("qTcms_select_i");
				if (n) {
					var a = n.options.length;
					if (n.selectedIndex == a - 1) return !0;
				}
			}
		},
		autopager: {
			useiframe: !0,
			remain: .5,
			pageElement: '//img[@id="qTcms_pic"]',
			ipages: [ !0, 20 ]
		}
	}, {
		name: "930mh",
		url: /^https?:\/\/www\.930mh\.com\/manhua\/.+/i,
		exampleUrl: "http://www.930mh.com/manhua/13355/500671.html?p=2",
		preLink: {
			startAfter: "?p=",
			inc: -1,
			min: 1
		},
		nextLink: {
			startAfter: "?p=",
			mFails: [ /^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i, "?p=1" ],
			inc: 1,
			isLast: function isLast(e, t, r) {
				var n = e.getElementById("images").children[1].innerText.match(/\d+/g);
				if (Number(n[0]) >= Number(n[1])) return !0;
			}
		},
		autopager: {
			pageElement: '//div[@id="images"]/img',
			useiframe: !0,
			ipages: [ !0, 20 ]
		}
	}, {
		name: "sis001.com",
		url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9\-]+\.html/i,
		exampleUrl: "https://www.sis001.com/forum/forum-230-1.html",
		nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
		autopager: {
			pageElement: '//div[@class="mainbox"]//table[last()]',
			replaceE: '//div[@class="pages_btns"]',
			startFilter: function startFilter(e, t) {
				var r = e.querySelector("#ad_text");
				r && r.parentNode.removeChild(r);
			}
		}
	}, {
		name: "xkcd",
		url: "^https?://(?:www.)?xkcd.com",
		nextLink: function nextLink(e, t, r) {
			if (r.match(/\d+/)) {
				var n = e.querySelector("a[rel=next]").getAttribute("href");
				return n = "https://www.xkcd.com/" + n;
			}
			return r + "/2/";
		},
		pageElement: 'id("middleContainer")'
	} ];
	function getDomain(e) {
		var t = getAllIndexes(e, "/");
		return t.length > 2 ? e.substr(0, t[2]) : e;
	}
	function getAllIndexes(e, t) {
		for (var r = [], n = -1; -1 != (n = e.indexOf(t, n + 1)); ) r.push(n);
		return r;
	}
}, function(e, t, r) {
	e.exports = r(354);
}, function(e, t, r) {
	var n = r(133);
	e.exports = function flatten(e) {
		return (null == e ? 0 : e.length) ? n(e, 1) : [];
	};
}, function(e, t, r) {
	e.exports = r(168);
}, function(module, __webpack_exports__, __webpack_require__) {
	"use strict";
	__webpack_require__.r(__webpack_exports__);
	var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__), _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13), _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__), _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5), _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5__), lodash_difference__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(153), lodash_difference__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_6__), lodash_isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8), lodash_isArray__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_7__), lodash_find__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97), lodash_find__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_8__), lodash_isString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10), lodash_isString__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_9__), utils_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14), _meta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46), _meta__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(_meta__WEBPACK_IMPORTED_MODULE_11__), utils_domSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1), utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22), compare_versions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21), compare_versions__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(compare_versions__WEBPACK_IMPORTED_MODULE_14__), css_sp_fw_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(157), css_sp_fw_scss__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(css_sp_fw_scss__WEBPACK_IMPORTED_MODULE_15__), css_sp_prefs_setup_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(158), css_sp_prefs_setup_css__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(css_sp_prefs_setup_css__WEBPACK_IMPORTED_MODULE_16__), css_sp_prefs_spinner_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(159), css_sp_prefs_spinner_css__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(css_sp_prefs_spinner_css__WEBPACK_IMPORTED_MODULE_17__), css_sp_separator_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(98), css_sp_separator_css__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(css_sp_separator_css__WEBPACK_IMPORTED_MODULE_18__), displacejs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(160), displacejs__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(displacejs__WEBPACK_IMPORTED_MODULE_19__), utils_domTools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2), template_ejs_template__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99), utils_element_ready__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(100), utils_got__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(68), rules_jsGeneralRule__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(163), rules_jsSiteRule__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(164), utils_json_rule__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(18), utils_logger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(0), utils_notice__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(30);
	!function() {
		utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.setLevel("debug");
		var gotConfig = {
			html: !0,
			encoding: document.characterSet
		};
		utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `Script Manager: ${utils_detect__WEBPACK_IMPORTED_MODULE_10__.b.name}  v${utils_detect__WEBPACK_IMPORTED_MODULE_10__.b.version}`),
			utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "Browser: ", utils_detect__WEBPACK_IMPORTED_MODULE_10__.a),
		"firefox" === utils_detect__WEBPACK_IMPORTED_MODULE_10__.a.name && ("Violentmonkey" === utils_detect__WEBPACK_IMPORTED_MODULE_10__.b.name && compare_versions__WEBPACK_IMPORTED_MODULE_14___default()(utils_detect__WEBPACK_IMPORTED_MODULE_10__.b.version, "2.12.3") <= 0 || "Tampermonkey" === utils_detect__WEBPACK_IMPORTED_MODULE_10__.b.name) && (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.warn("[Super-preloader]", `${utils_detect__WEBPACK_IMPORTED_MODULE_10__.b.name}  v${utils_detect__WEBPACK_IMPORTED_MODULE_10__.b.version} has a flaw on Firefox, which may affect this script`),
			utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.warn("[Super-preloader]", "Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more"),
			gotConfig.cookie = !0);
		var got = utils_got__WEBPACK_IMPORTED_MODULE_23__.a.create(gotConfig), scriptInfo = _meta__WEBPACK_IMPORTED_MODULE_11__.SCRIPT_INFO, upgradeNotification = _meta__WEBPACK_IMPORTED_MODULE_11__.NOTIFICATION, SSRules = [];
		if ("mynovelreader-iframe" !== window.name) if (CheckIframe()) {
			var domLoaded = function domLoaded() {
				var e = window.frameElement ? JSON.parse(window.frameElement.getAttribute("mutationObserver")) : null;
				if (e) {
					var t = e.observers, r = [];
					t && [ "attributes", "addedNodes", "removedNodes" ].forEach((function(n) {
						var a = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(t[n]);
						a.length > 0 && (e.relatedObj ? (r.push(Object(utils_element_ready__WEBPACK_IMPORTED_MODULE_22__.a)(a[a.length - 1], n)),
							a[0].scrollIntoView(), a[a.length - 1].scrollIntoView()) : r.push(Object(utils_element_ready__WEBPACK_IMPORTED_MODULE_22__.a)(a[a.length - 1], n)));
					})), r = r ? _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all(r) : _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(void 0);
					var n = e.timeout && 0;
					setTimeout((function() {
						r.then((function(e) {
							console.log(e), e && e.forEach((function(e) {
								e.element, e.type, e.mutationList;
								e.observer.disconnect();
							})), window.parent.postMessage("superpreloader-iframe:DOMLoaded", "*");
						}));
					}), n);
				} else window.parent.postMessage("superpreloader-iframe:DOMLoaded", "*");
			};
			window.opera ? document.addEventListener("DOMContentLoaded", domLoaded, !1) : domLoaded();
		} else {
			var userLang = navigator.language || navigator.userLanguage, prefsFactory = {
				floatWindow: !0,
				FW_position: 2,
				FW_offset: [ 20, 38 ],
				FW_RAS: !0,
				pauseA: !0,
				Pbutton: [ 2, 0, 0 ],
				mouseA: !0,
				Atimeout: 200,
				stop_ipage: !0,
				Aplus: !0,
				sepP: !0,
				sepT: !0,
				s_method: 3,
				s_ease: 2,
				s_FPS: 60,
				s_duration: 333,
				DisableI: !0,
				arrowKeyPage: !1,
				sepStartN: 2,
				forceTargetWindow: !0,
				debug: !0,
				enableHistory: !1,
				autoGetPreLink: !1,
				excludes: "",
				custom_siteinfo: "[]",
				lazyImgSrc: "zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder",
				ChineseUI: !1,
				dblclick_pause: !1,
				factoryCheck: !0,
				disappearDelay: -1,
				numOfRule: 4308
			}, prefs = prefsFactory, myOldVersion = "1.0.0", SITEINFO_DFactory = {
				enable: !0,
				useiframe: !1,
				viewcontent: !1,
				autopager: {
					enable: !0,
					force_enable: !1,
					manualA: !1,
					useiframe: !1,
					iloaded: !1,
					itimeout: 0,
					newIframe: !1,
					remain: 1,
					maxpage: 99,
					ipages: [ !1, 2 ],
					separator: !0,
					separatorReal: !0,
					reload: !1,
					sandbox: !1
				}
			}, SITEINFO_D = SITEINFO_DFactory, DIExclude = [ [ "猫扑帖子", !0, /^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i ], [ "铁血社区", !0, /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i ], [ "铁血社区-2", !0, /^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i ], [ "百度网盘搜索引擎-百度", !0, /^https?:\/\/www\.baidu\.com\/baidu/i ], [ "百度网盘搜索引擎-Google", !0, /^https?:\/\/74\.125\.128\.147\/custom/i ] ], HashchangeSites = [ {
				url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,
				timer: 2e3,
				mutationSelector: "#main"
			}, {
				url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/,
				timer: 1e3,
				mutationSelector: "#wrapper_wrapper"
			}, {
				url: /^https?:\/\/www\.newsmth\.net/,
				timer: 1e3
			} ], sep_icons = {
				top: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==",
				bottom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==",
				pre: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==",
				next: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC",
				next_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==",
				pre_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC",
				text_span_style: "color:#595959!important;"
			}, FWKG_color = {
				loading: "#8B00E8",
				prefetcher: "#5564AF",
				autopager: "#038B00",
				Apause: "#B7B700",
				Astop: "#A00000",
				dot: "#00FF05"
			}, autoMatchFactory = {
				keyMatch: !0,
				cases: !1,
				digitalCheck: !0,
				pfwordl: {
					previous: {
						enable: !0,
						maxPrefix: 3,
						character: [ " ", "　", "[", "［", "<", "＜", "?", "?", "<<", "『", "「", "【", "(", "←" ]
					},
					next: {
						enable: !0,
						maxPrefix: 2,
						character: [ " ", "　", "[", "［", "『", "「", "【", "(" ]
					}
				},
				sfwordl: {
					previous: {
						enable: !0,
						maxSubfix: 2,
						character: [ " ", "　", "]", "］", "』", "」", "】", ")" ]
					},
					next: {
						enable: !0,
						maxSubfix: 3,
						character: [ " ", "　", "]", "］", ">", "﹥", "?", "?", ">>", "』", "」", "】", ")", "→" ]
					}
				},
				useiframe: SITEINFO_D.useiframe || !1,
				viewcontent: !1,
				FA: {
					enable: !1,
					manualA: !1,
					useiframe: !1,
					iloaded: !1,
					itimeout: 0,
					remain: 1,
					maxpage: 99,
					ipages: [ !1, 2 ],
					separator: !0
				}
			}, autoMatch = autoMatchFactory, prePageKey = [ "上一页", "上一頁", "上1页", "上1頁", "上页", "上頁", "翻上頁", "翻上页", "上一张", "上一張", "上一幅", "上一章", "上一节", "上一節", "上一篇", "前一页", "前一頁", "后退", "後退", "上篇", "previous", "previous Page", "前へ", "前のページ" ], nextPageKey = [ "下一页", "下一頁", "下1页", "下1頁", "下页", "下页 ›", "下頁", "翻页", "翻頁", "翻下頁", "翻下页", "下一张", "下一張", "下一幅", "下一章", "下一节", "下一節", "下一篇", "前进", "下篇", "后页", "往后", "Next", "Next Page", "次へ", "次のページ", "次のページ »", "下一页 →", "下一頁 →", "下1页 →", "下1頁 →", "下页 →", "下頁 →", "翻页 →", "翻頁 →", "翻下頁 →", "翻下页 →", "下一张 →", "下一張 →", "下一幅 →", "下一章 →", "下一节 →", "下一節 →", "下一篇 →", "前进 →", "下篇 →", "后页 →", "往后 →", "Next →", "Next Page →", "次へ →", "次のページ →", "下一页 »", "下一頁 »", "下1页 »", "下1頁 »", "下页 »", "下頁 »", "翻页 »", "翻頁 »", "翻下頁 »", "翻下页 »", "下一张 »", "下一張 »", "下一幅 »", "下一章 »", "下一节 »", "下一節 »", "下一篇 »", "前进 »", "下篇 »", "后页 »", "往后 »", "Next »", "Next Page »", "次へ »", "后一页", "後一頁", "下一页 ›", "下一頁 ›", "下1页 ›", "下1頁 ›", "下頁 ›", "翻页 ›", "翻頁 ›", "翻下頁 ›", "翻下页 ›", "下一张 ›", "下一張 ›", "下一幅 ›", "下一章 ›", "下一节 ›", "下一節 ›", "下一篇 ›", "前进 ›", "下篇 ›", "后页 ›", "往后 ›", "Next ›", "Next >", "Next Page ›", "次へ ›", "次のページ ›", "»", "→", "早期文章→" ], REALPAGE_SITE_PATTERN = [ "search?", "search_", "forum", "thread" ];
			_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all([ GM.getValue("prefs", prefsFactory), GM.getValue("SITEINFO_D", SITEINFO_DFactory), GM.getValue("autoMatch", autoMatchFactory), GM.getValue("version", myOldVersion), utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.loadDB() ]).then((function(values) {
				var _values = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(values, 4);
				prefs = _values[0], SITEINFO_D = _values[1], autoMatch = _values[2], myOldVersion = _values[3],
				-1 === compare_versions__WEBPACK_IMPORTED_MODULE_14___default()(myOldVersion, scriptInfo.rewriteStorage) && (lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(prefs) && (prefs = JSON.parse(prefs)),
				lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(SITEINFO_D) && (SITEINFO_D = JSON.parse(SITEINFO_D)),
				lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(autoMatch) && (autoMatch = JSON.parse(autoMatch))),
				void 0 !== prefs.debug && utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.setLevel(prefs.debug ? "debug" : "info");
				var jsonRule = utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.getRule(), preSPinit = [];
				if (compare_versions__WEBPACK_IMPORTED_MODULE_14___default()(myOldVersion, scriptInfo.version) < 0 && upgradeNotification && (upgradeNotification.show(myOldVersion, scriptInfo.version) || 0 === compare_versions__WEBPACK_IMPORTED_MODULE_14___default()(myOldVersion, "1.0.0"))) {
					var opts = {
						text: "",
						title: upgradeNotification.title,
						image: upgradeNotification.image,
						onload: upgradeNotification.onload
					};
					switch (i8n()) {
						case "zh_CN":
							opts.text = _meta__WEBPACK_IMPORTED_MODULE_11__.SCRIPT_INFO["name-CN"] + " 从 v" + myOldVersion + " 升级到 v" + scriptInfo.version + "。",
								opts.text += upgradeNotification.text.zh_CN;
							break;

						default:
							opts.text = _meta__WEBPACK_IMPORTED_MODULE_11__.SCRIPT_INFO.name + " is upgraded from v" + myOldVersion + " to v" + scriptInfo.version + ". ",
								opts.text += upgradeNotification.text.en_US;
					}
					GM.notification(opts);
				}
				0 !== compare_versions__WEBPACK_IMPORTED_MODULE_14___default()(myOldVersion, scriptInfo.version) && (prefs.factoryCheck = !0,
					preSPinit.push(GM.setValue("version", scriptInfo.version)), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.info("[Super-preloader]", `[UpdateCheck] version is updated ${myOldVersion} => ${scriptInfo.version}`));
				var forceJsonUpdate = !1;
				if (!0 === prefs.factoryCheck || void 0 === prefs.factoryCheck) {
					var hasDifferent = assignDifferentProperty(prefs, prefsFactory);
					hasDifferent && utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.info("[Super-preloader]", "[UpdateCheck] prefs is updated", prefs),
						prefs.factoryCheck = !1, preSPinit.push(GM.setValue("prefs", prefs)), -1 === compare_versions__WEBPACK_IMPORTED_MODULE_14___default()(myOldVersion, scriptInfo.rewriteStorage) && (preSPinit.push(GM.setValue("SITEINFO_D", SITEINFO_D)),
						preSPinit.push(GM.setValue("autoMatch", autoMatch)), forceJsonUpdate = !0, utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.info("[Super-preloader]", "[UpdateCheck] Storage is rewritten"));
				}
				preSPinit.push(utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.updateRule(forceJsonUpdate));
				var blackList = [];
				blackList = blackList.concat(prefs.excludes.split(/[\n\r]+/).map((function(e) {
					return e.trim();
				})));
				var setup = function setup() {
					var e = document, t = function $(t) {
						return e.getElementById("sp-prefs-" + t);
					};
					if (!t("setup")) {
						var r = Object(utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__.a)(css_sp_prefs_setup_css__WEBPACK_IMPORTED_MODULE_16___default.a), n = e.createElement("div");
						n.id = "sp-prefs-setup", n.style.position = "fixed", 2 !== prefs.FW_position ? (n.style.right = "38px",
							n.style.top = "20px") : (n.style.right = `${prefs.FW_offset[1]}px`, n.style.top = `${prefs.FW_offset[0]}px`),
							n.innerHTML = template_ejs_template__WEBPACK_IMPORTED_MODULE_21__.a["sp-prefs"](i8n())({
								prefs: prefs,
								scriptInfo: scriptInfo,
								nextUpdateDate: utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.expire.toDateString()
							}), e.body.appendChild(n);
						var a = function close() {
							r && r.parentNode.removeChild(r);
							var e = t("setup");
							e.parentNode.removeChild(e);
						}, o = function on(e, t, r) {
							e.addEventListener(t, r, !1);
						};
						o(t("ok"), "click", (function() {
							prefs.ChineseUI = !!t("ChineseUI").checked, prefs.custom_siteinfo = t("custom_siteinfo").value,
								prefs.debug = !!t("debug").checked, prefs.debug && utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.setLevel("debug"),
								prefs.enableHistory = !!t("enableHistory").checked, prefs.dblclick_pause = !!t("dblclick_pause").checked,
								prefs.excludes = t("excludes").value, prefs.arrowKeyPage = !!t("arrowKeyPage").checked,
								SITEINFO_D.useiframe = !!t("SITEINFO_D-useiframe").checked, SITEINFO_D.autopager.enable = !!t("SITEINFO_D-a_enable").checked,
								SITEINFO_D.autopager.force_enable = !!t("SITEINFO_D-a_force_enable").checked, autoMatch.useiframe = SITEINFO_D.useiframe,
								_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all([ GM.setValue("prefs", prefs), GM.setValue("SITEINFO_D", SITEINFO_D), GM.setValue("autoMatch", autoMatch) ]).then((function(e) {
									SP.loadSetting(), a(), location.reload();
								}));
						})), o(t("reset"), "click", (function() {
							prefs = prefsFactory, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all([ GM.setValue("prefs", prefsFactory), GM.setValue("SITEINFO_D", SITEINFO_DFactory), GM.setValue("version", "1.0.0") ], utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.updateRule(!0)).then((function() {
								SP.loadSetting(), a(), location.reload();
							}));
						})), o(t("updaterule"), "click", (function() {
							Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.c)("#sp-prefs-setup ul").remove(),
								Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.c)("#sp-prefs-setup div:last-child").remove();
							var e = utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
								attr: {
									class: "sp-prefs-spinner"
								},
								children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
									attr: {
										class: "rect1"
									}
								}), utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
									attr: {
										class: "rect2"
									}
								}), utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
									attr: {
										class: "rect3"
									}
								}), utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
									attr: {
										class: "rect4"
									}
								}) ]
							});
							Object(utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__.a)(css_sp_prefs_spinner_css__WEBPACK_IMPORTED_MODULE_17___default.a),
								t("setup").appendChild(e), Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.c)("#sp-prefs-setup div").innerHTML = "zh_CN" === i8n() ? "规则更新中。。。" : "Updating ...",
								utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.updateRule(!0).then((function() {
									jsonRule = utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.getRule(), SP.loadSetting(),
										a(), location.reload();
								}));
						})), o(t("cancel"), "click", a), t("debug").checked = utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.getLevel() === utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.levels.DEBUG,
							t("ChineseUI").checked = prefs.ChineseUI, t("enableHistory").checked = prefs.enableHistory,
							t("dblclick_pause").checked = prefs.dblclick_pause, t("SITEINFO_D-useiframe").checked = SITEINFO_D.useiframe,
							t("SITEINFO_D-a_enable").checked = SITEINFO_D.autopager.enable, t("arrowKeyPage").checked = prefs.arrowKeyPage,
							t("SITEINFO_D-a_force_enable").checked = SITEINFO_D.autopager.force_enable, t("excludes").value = prefs.excludes,
							t("custom_siteinfo").value = prefs.custom_siteinfo;
					}
				}, SP = {
					spinit: function spinit() {
						if ("MyNovelReader" !== document.body.getAttribute("name")) {
							this.loadSetting(), "zh_CN" === i8n() ? GM.registerMenuCommand("Super_preloaderPlus_one_New 设置", setup) : GM.registerMenuCommand("Super_preloaderPlus_one_New Settings", setup);
							var e = location.href, t = lodash_find__WEBPACK_IMPORTED_MODULE_8___default()(HashchangeSites, (function(t) {
								return toRE(t.url).test(e);
							}));
							if (t) isHashchangeSite = !0, hashchangeTimer = t.timer, utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "当前是页面不刷新的站点", t),
								new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a((function(e, t) {
									setTimeout(e, hashchangeTimer);
								})).then((function(e) {
									init(window, document);
								})); else init(window, document);
							window.screen.height > window.screen.width && Object(utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__.a)("div.sp-separator { min-width:auto !important; }");
						}
					},
					loadSetting: function loadSetting() {
						var e = SITEINFO_D.autopager.enable;
						void 0 !== e && (SITEINFO_D.autopager.enable = e);
						!function loadDblclickPause(e) {
							prefs.dblclick_pause && (prefs.mouseA = !1, prefs.Pbutton = [ 0, 0, 0 ]), e && location.reload();
						}(), function loadCustomSiteInfo() {
							var e;
							try {
								e = new Function("", "return " + prefs.custom_siteinfo)();
							} catch (e) {
								utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "自定义站点规则错误", prefs.custom_siteinfo);
							}
							lodash_isArray__WEBPACK_IMPORTED_MODULE_7___default()(e) && (SSRules = SSRules.concat(e));
						}();
					}
				};
				function init(window, document) {
					var startTime = new Date, nullFn = function nullFn() {}, url = document.location.href.replace(/#.*$/, ""), cplink = url, domain = document.domain, domain_port = url.match(/https?:\/\/([^\/]+)/)[1], remove = [], floatWO = {
						updateColor: nullFn,
						loadedIcon: nullFn,
						CmodeIcon: nullFn
					};
					function floatWindow(e) {
						Object(utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__.a)(css_sp_fw_scss__WEBPACK_IMPORTED_MODULE_15___default.a);
						var t = document.createElement("div");
						function $(e) {
							return document.getElementById(e);
						}
						t.id = "sp-fw-container", t.innerHTML = floatWindowUI(), document.body.appendChild(t);
						var r, n, a = $("sp-fw-rect"), o = $("sp-fw-content"), i = function show() {
							o.style.display = "block";
						}, s = function hide() {
							o.style.display = "none";
						};
						a.addEventListener("mouseover", (function(e) {
							r = setTimeout(i, 100);
						}), !1), a.addEventListener("mouseout", (function(e) {
							clearTimeout(r);
						}), !1), t.addEventListener("mouseover", (function(e) {
							clearTimeout(n);
						}), !1), t.addEventListener("mouseout", (function(e) {
							e.relatedTarget && e.relatedTarget.disabled || (n = setTimeout(s, 288));
						}), !1);
						var c = $("sp-fw-dot");
						c.style.backgroundColor = FWKG_color.dot;
						var u = $("sp-fw-cur-mode");
						u.style.backgroundColor = e.a_enable ? FWKG_color.autopager : FWKG_color.prefetcher;
						var l = $("sp-fw-a_enable"), p = $("sp-fw-autopager-field"), f = $("sp-fw-useiframe"), d = $("sp-fw-viewcontent"), _ = $("sp-fw-a_useiframe"), h = $("sp-fw-a_iloaded"), m = $("sp-fw-a_itimeout"), g = $("sp-fw-a_manualA"), b = $("sp-fw-a_remain"), v = $("sp-fw-a_maxpage"), y = $("sp-fw-a_separator"), w = $("sp-fw-a_ipages_0"), E = $("sp-fw-a_ipages_1"), x = $("sp-fw-a_force"), O = $("sp-fw-a_newIframe");
						O.addEventListener("click", (function() {
							_.checked = O.checked;
						}), !1);
						var S = $("sp-fw-a_starti");
						S.addEventListener("click", (function(t) {
							if (!t.currentTarget.disabled) {
								var r = Number(E.value);
								(isNaN(r) || r <= 0) && (r = e.a_ipages[1], E.value = r), autoPO.startipages(r);
							}
						}), !1);
						var P = $("sp-fw-enable");
						function ll(e, t) {
							"checkbox" == e.type ? e.checked = t : e.value = t;
						}
						$("sp-fw-setup").addEventListener("click", setup, !1), $("sp-fw-savebutton").addEventListener("click", (function(t) {
							var r = {
								Rurl: e.Rurl,
								useiframe: gl(f),
								viewcontent: gl(d),
								enable: gl(P)
							};
							function gl(e) {
								switch (e.type) {
									case "checkbox":
										return e.checked;

									case "number":
										var t = e.hasAttribute("min") ? Number(e.min) : void 0, r = e.hasAttribute("max") ? Number(e.max) : void 0;
										return t >= Number(e.value) ? t : r < Number(e.value) ? r : e.value;

									default:
										return e.value;
								}
							}
							if (void 0 !== e.a_enable) {
								r.a_enable = gl(l), r.a_useiframe = gl(_), r.a_newIframe = gl(O), r.a_iloaded = gl(h),
									r.a_manualA = gl(g), r.a_force = gl(x);
								var n = gl(m);
								r.a_itimeout = isNaN(n) ? e.a_itimeout : n >= 0 ? n : 0;
								var a = gl(b);
								r.a_remain = isNaN(a) ? e.a_remain : Number(a);
								var o = gl(v);
								r.a_maxpage = isNaN(o) ? e.a_maxpage : o >= 1 ? o : 1;
								var i = gl(E);
								r.a_ipages = [ gl(w), isNaN(i) ? e.a_ipages[1] : i >= 1 ? i : 1 ], r.a_separator = gl(y);
							}
							e.savedValue[e.sedValueIndex] = r, saveValue("spfwset", xToString(e.savedValue)),
							(t.shiftKey ? !prefs.FW_RAS : prefs.FW_RAS) && setTimeout((function() {
								location.reload();
							}), 1);
						}), !1), void 0 === e.a_enable ? (l.disabled = !0, p.style.display = "none") : (ll(l, e.a_enable),
							ll(_, e.a_useiframe), ll(O, e.a_newIframe), ll(h, e.a_iloaded), ll(m, e.a_itimeout),
							ll(g, e.a_manualA), ll(x, e.a_force), ll(b, e.a_remain), ll(v, e.a_maxpage), ll(y, e.a_separator),
							ll(w, e.a_ipages[0]), ll(E, e.a_ipages[1])), e.a_enable || (S.disabled = !0), e.hasRule || (x.disabled = !0),
							ll(f, e.useiframe), ll(d, e.viewcontent), ll(P, e.enable);
						var A = {
							loading: "读取中状态",
							prefetcher: "预读状态",
							autopager: "翻页状态",
							Apause: "翻页状态(暂停)",
							Astop: "翻页状态(停止)(翻页完成,或者被异常停止)(无法再开启)",
							dot: "读取完后"
						};
						"zh_CN" !== i8n() && (A.loading = "Loading", A.prefetcher = "Prefetching", A.autopager = "Autopagger (Running)",
							A.Apause = "Autopagger (Pause)", A.Astop = "Autopagger (Stop)", A.dot = "Finish loading"),
							floatWO = {
								updateColor: function updateColor(e) {
									a.style.backgroundColor = FWKG_color[e], a.setAttribute("title", A[e]);
								},
								loadedIcon: function loadedIcon(e) {
									c.style.display = "show" == e ? "block" : "none";
								},
								CmodeIcon: function CmodeIcon(e) {
									u.style.display = "show" == e ? "block" : "none";
								}
							};
						var M = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(prefs.FW_offset[0], 10), I = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(prefs.FW_offset[1], 10), D = prefs.FW_position;
						switch (t.style.position = "fixed", D) {
							case 1:
								t.style.top = M + "px", t.style.left = I + "px";
								break;

							case 2:
								t.style.top = M + "px", t.style.right = I + "px";
								break;

							case 3:
								t.style.bottom = M + "px", t.style.right = I + "px";
								break;

							case 4:
								t.style.bottom = M + "px", t.style.left = I + "px";
						}
					}
					function floatWindowUI() {
						return template_ejs_template__WEBPACK_IMPORTED_MODULE_21__.a.floatWindow(i8n())();
					}
					function sp_transition(e, t) {
						var r = sp_transition.TweenF;
						r || (r = (r = Tween[TweenM[prefs.s_method]])[TweenEase[prefs.s_ease]] || r, sp_transition.TweenF = r);
						var n = 1e3 / prefs.s_FPS, a = 0, o = e, i = t - e, s = Math.ceil(prefs.s_duration / n), c = window.scrollX;
						!function transition() {
							var e = Math.ceil(r(a, o, i, s));
							window.scroll(c, e), a < s && (a++, setTimeout(transition, n));
						}();
					}
					function sepHandler(e) {
						e.stopPropagation();
						var t, r = e.currentTarget;
						function getRelativeDiv(e) {
							var t = r.id;
							return (t = t.replace(/(sp-separator-)(.+)/, (function(t, r, n) {
								return r + String(Number(n) + ("pre" == e ? -1 : 1));
							}))) ? document.getElementById(t) : null;
						}
						function scrollIt(e, t) {
							prefs.sepT ? sp_transition(e, t) : window.scroll(window.scrollX, t);
						}
						switch (e.target.className) {
							case "sp-sp-gotop":
								scrollIt(window.scrollY, 0);
								break;

							case "sp-sp-gopre":
								var n = getRelativeDiv("pre");
								if (!n) return;
								t = window.scrollY;
								var a = n.getBoundingClientRect().top;
								prefs.sepP ? a = t - (r.getBoundingClientRect().top - a) : a += t - 6, scrollIt(t, a);
								break;

							case "sp-sp-gonext":
								var o = getRelativeDiv("next");
								if (!o) return;
								t = window.scrollY;
								var i = o.getBoundingClientRect().top;
								prefs.sepP ? i = t + (-r.getBoundingClientRect().top + i) : i += t - 6, scrollIt(t, i);
								break;

							case "sp-sp-gobottom":
								scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
						}
					}
					var autoPO = {
						startipages: nullFn
					}, hashchangeAdded = !1;
					function autopager(e, t) {
						var r, n, a, o, i, s, c, u, l, p;
						if (t.updateColor("autopager"), e.a_HT_insert) r = getElement(e.a_HT_insert[0]),
							a = e.a_HT_insert[1]; else {
							if ((n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(e.a_pageElement, document, document, null, cplink)).length > 0) {
								var f = n[n.length - 1];
								r = f.nextSibling ? f.nextSibling : f.parentNode.appendChild(document.createTextNode(" "));
							}
							a = -1;
						}
						if (!r) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "验证是否能找到插入位置节点:失败  JS执行终止", e.a_HT_insert ? e.a_HT_insert[0] : ""),
							void t.updateColor("Astop");
						if (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "验证是否能找到插入位置节点:成功", r),
						"en" != window.navigator.language && utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "Language: ", window.navigator.language),
						void 0 === n && (n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(e.a_pageElement)),
							!(n.length > 0)) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "验证是否能找到主要元素:失败", e.a_pageElement),
							void t.updateColor("Astop");
						function XHRNotLoaded(e) {
							utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "XHR is failed to be loaded"),
								utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", e), removeL();
						}
						function removeL(e) {
							utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "移除各种事件监听"),
								t.updateColor("Astop");
							for (var n = remove, o = 0, i = n.length; o < i; o++) n[o]();
							if (e) {
								var s = document.querySelector(".sp-separator");
								if (s) {
									var c = r;
									if (2 == a) {
										var u = r.children.length;
										u > 0 && (c = r.children[u - 1]);
									}
									var l = document.createRange();
									l.setStartBefore(s), l.setEndBefore(c), l.deleteContents(), l.detach(), 2 == a && r.removeChild(c);
								}
								var p = document.getElementById("Super_preloader-style");
								p && p.parentNode.removeChild(p);
							}
						}
						function iframeLoaded(r) {
							var n = r.currentTarget, a = n.contentDocument.body;
							a && a.firstChild && setTimeout((function() {
								removeScripts(s = n.contentDocument, e.a_scriptFilter), c = n.contentWindow || s,
									t.updateColor("autopager"), t.CmodeIcon("hide"), t.loadedIcon("show"), p = !1, scroll();
							}), e.a_itimeout);
						}
						function doRequest() {
							if (p = !0, t.updateColor("loading"), t.CmodeIcon("show"), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "获取下一页", e.a_useiframe ? "(iframe方式)" : "(XHR方式)", nextlink),
								e.a_useiframe) !function iframeRequest(t) {
								if (l = !1, e.a_newIframe || !u) {
									var r = null, n = document.createElement("iframe");
									if (u = n, n.name = "superpreloader-iframe", n.width = "100%", n.height = "0", n.frameBorder = "0",
										n.style.cssText = "                    margin:0!important;                    padding:0!important;                    visibility:hidden!important;                ",
									0 != e.a_sandbox && (n.sandbox = e.a_sandbox), n.src = t, e.a_mutationObserver && (n.setAttribute("mutationObserver", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(e.a_mutationObserver)),
									e.a_mutationObserver.relatedObj && (r = (r = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(e.a_mutationObserver.relatedObj)).length > 0 ? r[0] : null)),
										e.a_iloaded) n.addEventListener("load", iframeLoaded, !1), remove.push((function() {
										n.removeEventListener("load", iframeLoaded, !1);
									})); else {
										var a = function messagehandler(t) {
											l || "superpreloader-iframe:DOMLoaded" != t.data || (l = !0, iframeLoaded.call(n, {
												currentTarget: n
											}), e.a_newIframe && window.removeEventListener("message", messagehandler, !1));
										};
										window.addEventListener("message", a, !1), remove.push((function() {
											window.removeEventListener("message", a, !1);
										}));
									}
									r ? r.parentNode.insertBefore(n, r) : document.body.appendChild(n);
								} else u.src = t, u.contentDocument.location.replace(t), e.a_reload && u.contentWindow.location.reload();
							}(nextlink); else {
								var r = {
									headers: e.a_headers ? e.a_headers : {
										Referer: cplink
									}
								};
								got.get(nextlink, r).then((function(e) {
									e.finalUrl === cplink ? (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "最终地址相同"),
										XHRNotLoaded(e)) : function XHRLoaded(e) {
										var r = e.data;
										if (!(s = c = createDocumentByString(r))) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "文档对象创建失败"),
											void removeL();
										t.updateColor("autopager"), t.CmodeIcon("hide"), t.loadedIcon("show"), p = !1, scroll();
									}(e);
								})).catch((function(e) {
									XHRNotLoaded(e);
								})), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "读取完成");
							}
						}
						utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "验证是否能找到主要元素:成功", n),
						e.a_stylish && Object(utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__.a)(e.a_stylish, "Super_preloader-style"),
						2 != a && (o = r.parentNode), -1 == a || 1 == a ? i = function addIntoDoc(e) {
							return o.insertBefore(e, r);
						} : 2 == a ? i = function addIntoDoc(e) {
							return r.appendChild(e);
						} : 0 == a && (i = function addIntoDoc(e) {
							return o.insertBefore(e, r.nextSibling);
						}), isHashchangeSite && !hashchangeAdded && (window.addEventListener("hashchange", (function onhashChange(r) {
							utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "触发 Hashchang 事件"),
								removeL(!0), setTimeout((function() {
								nextlink = getFullHref(nextlink = getElement(e.nextLink || "auto;")), autopager(e, t);
							}), hashchangeTimer);
						}), !1), hashchangeAdded = !0, utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "成功添加 hashchange 事件"));
						var d, _, h = e.a_ipages[0], m = e.a_ipages[1], g = nullFn, b = nullFn;
						function beforeInsertIntoDoc() {
							p = !0, e.a_manualA && !h ? (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "手动拼接"),
								function manualAdiv() {
									if (!d) {
										Object(utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__.a)(css_sp_separator_css__WEBPACK_IMPORTED_MODULE_18___default.a);
										var e = function spage(e) {
											if (s) {
												var t = Number(e.value);
												(isNaN(t) || t < 1) && (e.value = t = 1), h = !0, m = t + S, insertedIntoDoc();
											}
										}, t = utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
											attr: {
												id: "sp-sp-manualdiv",
												class: "sp-separator"
											},
											children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("span", {
												attr: {
													class: "sp-md-span"
												},
												innerHTML: "zh_CN" === i8n() ? "下" : "Next"
											}), utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("input", {
												attr: {
													type: "number",
													value: 1,
													min: 1,
													title: "zh_CN" === i8n() ? "输入你想要拼接的页数(必须>=1),然后按回车." : "Type number of pageringzing and press enter",
													id: "sp-sp-md-number"
												},
												eventListener: [ {
													type: "keyup",
													listener: function listener(t) {
														13 == t.keyCode && e(t.target);
													}
												} ]
											}), utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("span", {
												attr: {
													class: "sp-md-span"
												},
												innerHTML: "zh_CN" === i8n() ? "页" : "page"
											}), utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("img", {
												attr: {
													id: "sp-sp-md-imgnext",
													src: w.next
												}
											}), utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
												attr: {
													class: "sp-someinfo",
													id: "sp-separator-hover"
												},
												children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("a", {
													attr: {
														href: "https://github.com/machsix/Super-preloader",
														target: "_blank"
													},
													innerHTML: "Powered by Super-preloader"
												}) ]
											}) ]
										});
										d = t, document.body.appendChild(t), t.addEventListener("click", (function(t) {
											"sp-sp-md-number" != t.target.id && (e(document.getElementById("sp-sp-md-number")),
												d.remove());
										}), !1);
									}
									i(d);
								}()) : (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "直接拼接"),
								insertedIntoDoc());
						}
						prefs.Aplus ? (b = doRequest, doRequest()) : (g = doRequest, h && doRequest());
						var v = [ !1 ], y = prefs.sepStartN, w = sep_icons, E = y;
						var x, O, S = 0;
						function insertedIntoDoc() {
							if (s) {
								if (e.a_documentFilter) try {
									e.a_documentFilter(s, nextlink), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "执行 documentFilter 成功");
								} catch (t) {
									utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "执行 documentFilter 错误", t, e.a_documentFilter.toString());
								}
								var n = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.c)("title", s).textContent, a = document.createDocumentFragment(), o = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(e.a_pageElement, !1, s, c, nextlink), u = o.length;
								if (u <= 0) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "获取下一页的主要内容失败", e.a_pageElement),
									void removeL();
								utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "获取下一页的主要内容成功", o);
								var l = cplink;
								cplink = nextlink;
								var f, g, x, O, P = getElement(e.nextLink, !1, s, c);
								for (P ? (P = getFullHref(P), nextlink = P == nextlink ? null : P) : nextlink = null,
										 removeScripts(s, e.a_scriptFilter), f = 0; f < u; f++) "BODY" != (x = (g = o[f]).nodeName) && "HTML" != x && "SCRIPT" != x && a.appendChild(g);
								if (e.filter && "string" == typeof e.filter) {
									var A, M = [];
									try {
										M = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(e.filter, a);
									} catch (e) {}
									for (f = M.length - 1; f >= 0; f--) (A = M[f]).parentNode.removeChild(A);
								}
								if (e.lazyImgSrc && handleLazyImgSrc(e.lazyImgSrc, a), window.opera || !e.a_useiframe || e.a_iloaded || (O = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)("css;img[src]", a)),
									prefs.forceTargetWindow) Array.prototype.slice.call(a.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])')).forEach((function(e) {
									e.setAttribute("target", "_blank"), "atarget(this)" == e.getAttribute("onclick") && e.removeAttribute("onclick");
								}));
								var I = function createSep(t, r, n) {
									var a = document.createElement("div");
									if (e.a_separator) {
										_ || (_ = Object(utils_gm_enhanced__WEBPACK_IMPORTED_MODULE_13__.a)(css_sp_separator_css__WEBPACK_IMPORTED_MODULE_18___default.a)),
											a.className = "sp-separator", a.id = "sp-separator-" + E, a.addEventListener("click", sepHandler, !1);
										var o = "";
										o = "zh_CN" === i8n() ? '<b>第 <span style="' + sep_icons.text_span_style + '">' + E + "</span> 页</b>" + (e.a_separatorReal ? getRalativePageStr(t, r, n) : "") : '<b>Page <span style="' + sep_icons.text_span_style + '">' + E + "</span></b>" + (e.a_separatorReal ? getRalativePageStr(t, r, n) : ""),
											a.appendChild(utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("a", {
												attr: {
													class: "sp-sp-nextlink",
													target: "_blank",
													href: r,
													title: r
												},
												innerHTML: o
											})), a.appendChild(utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("img", {
											attr: {
												src: w.top,
												class: "sp-sp-gotop",
												alt: "zh_CN" === i8n() ? "去到顶部" : "To Top",
												title: "zh_CN" === i8n() ? "去到顶部" : "To Top"
											}
										})), a.appendChild(utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("img", {
											attr: {
												src: E == y ? w.pre_gray : w.pre,
												class: "sp-sp-gopre",
												title: "zh_CN" === i8n() ? "上滚一页" : "Scroll up a page"
											}
										}));
										var i = utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("img", {
											attr: {
												src: w.next_gray,
												class: "sp-sp-gonext",
												title: "zh_CN" === i8n() ? "下滚一页" : "Scroll down a page"
											}
										});
										2 == v.length && v.shift(), v.push(i), a.appendChild(i), a.appendChild(utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("img", {
											attr: {
												src: w.bottom,
												class: "sp-sp-gobottom",
												alt: "zh_CN" === i8n() ? "去到底部" : "To Bottom",
												title: "zh_CN" === i8n() ? "去到底部" : "To Bottom"
											}
										})), a.appendChild(utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("div", {
											attr: {
												class: "sp-someinfo",
												id: "sp-separator-hover"
											},
											children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("a", {
												attr: {
													href: "https://github.com/machsix/Super-preloader",
													target: "_blank"
												},
												innerHTML: "Powered by Super-preloader"
											}) ]
										})), E += 1;
									} else a.style.cssText = "                    height:0!important;                    width:0!important;                    margin:0!important;                    padding:0!important;                    border:none!important;                    clear:both!important;                    display:block!important;                    visibility:hidden!important;                ";
									return a;
								}(l, cplink, nextlink), D = I;
								if (void 0 !== e.a_sepdivDom && "function" == typeof e.a_sepdivDom) D = e.a_sepdivDom(s, I); else if (o[0] && "TR" === o[0].tagName && "TR" === o[o.length - 1].tagName) {
									var C = r.parentNode, T = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)("child::tr[1]/child::*[self::td or self::th]", C);
									0 == T.length && (T = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)("child::*[self::td or self::th]", o[0]));
									var B = [].reduce.call(T, (function(e, t) {
										return e + (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(t.getAttribute("colspan"), 10) || 1);
									}), 0);
									D = utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("tr", {
										children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("td", {
											attr: {
												colspan: B
											},
											children: [ I ]
										}) ]
									});
								} else if (o[0] && "TBODY" === o[0].tagName && "TBODY" === o[o.length - 1].tagName) {
									var k = o[o.length - 1].getElementsByTagName("tr");
									if (k) {
										var L = [].reduce.call(k[k.length - 1].children, (function(e, t) {
											return e + (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(t.getAttribute("colspan"), 10) || 1);
										}), 0);
										D = utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("tbody", {
											children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("tr", {
												children: [ utils_domTools__WEBPACK_IMPORTED_MODULE_20__.a.create("td", {
													attr: {
														colspan: L
													},
													children: [ I ]
												}) ]
											}) ]
										});
									} else utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.warn("[Super-preloader]", "No trs found");
								}
								if (a.insertBefore(D, a.firstChild), i(a), e.filter && "function" == typeof e.filter) try {
									e.filter(o), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "执行 filter(pages) 成功");
								} catch (t) {
									utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "执行 filter(pages) 错误", t, e.filter.toString());
								}
								if (O && setTimeout((function() {
									var e, t, r, n = O;
									for (e = 0, t = n.length; e < t; e++) {
										var a = (r = n[e]).src;
										r.src = a;
									}
								}), 99), e.a_replaceE) {
									var R = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(e.a_replaceE), U = R.length;
									if (U > 0) {
										var j, W, N = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)(e.a_replaceE, !1, s, c), K = N.length;
										if (K == U) for (f = 0; f < K; f++) j = R[f], W = N[f], W = s.importNode(W, !0),
											j.parentNode.replaceChild(W, j);
									}
								}
								S += 1, h && S >= m && (h = !1), t.loadedIcon("hide"), d && (d.style.display = "none"),
								v[0] && (v[0].src = w.next);
								var F = document.createEvent("Event");
								if (F.initEvent("Super_preloaderPageLoaded", !0, !1), document.dispatchEvent(F),
									prefs.enableHistory) try {
									window.history.pushState(null, n, cplink);
								} catch (e) {}
								if (S >= e.a_maxpage) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `到达所设定的最大翻页数 ${e.a_maxpage}`),
									Object(utils_notice__WEBPACK_IMPORTED_MODULE_28__.a)('<b>状态</b>:到达所设定的最大翻页数:<b style="color:red">' + e.a_maxpage + "</b>"),
									void removeL();
								var z = function delayiframe(e) {
									setTimeout(e, 199);
								};
								nextlink ? (s = c = null, h ? e.a_useiframe ? z(doRequest) : doRequest() : (p = !1,
									e.a_useiframe ? z(b) : b())) : (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "没有找到下一页链接", e.nextLink),
									removeL());
							} else utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "No document");
						}
						e.a_relatedObj && (lodash_isArray__WEBPACK_IMPORTED_MODULE_7___default()(e.a_relatedObj) ? (x = e.a_relatedObj[0],
							O = e.a_relatedObj[1]) : (x = e.a_pageElement, O = "bottom"));
						var P, A = !1;
						if (prefs.pauseA) {
							var M, I = [ "target", "shiftKey", "ctrlKey", "altKey" ], D = prefs.mouseA ? "mousedown" : "dblclick", C = I[prefs.Pbutton[0]], T = I[prefs.Pbutton[1]], B = I[prefs.Pbutton[2]], k = function pauseIt() {
								A = !A, prefs.stop_ipage && (h = !1), A ? (t.updateColor("Apause"), "zh_CN" === i8n() ? Object(utils_notice__WEBPACK_IMPORTED_MODULE_28__.a)('<b>状态</b>:自动翻页<span style="color:red!important;"><b> 暂停</b></span>.', prefs.disappearDelay) : Object(utils_notice__WEBPACK_IMPORTED_MODULE_28__.a)('<b>Status</b>:Autopagger<span style="color:red!important;"><b> Pause</b></span>.', prefs.disappearDelay)) : (t.updateColor("autopager"),
									t.CmodeIcon("hide"), "zh_CN" === i8n() ? Object(utils_notice__WEBPACK_IMPORTED_MODULE_28__.a)('<b>状态</b>:自动翻页<span style="color:red!important;"><b> 启用</b></span>.') : Object(utils_notice__WEBPACK_IMPORTED_MODULE_28__.a)('<b>Status</b>:Autopagger<span style="color:red!important;"><b> Enable</b></span>.')),
									scroll();
							}, L = function clearPause() {
								clearTimeout(M), document.removeEventListener("mouseup", clearPause, !1);
							}, R = function pausehandler(t) {
								e.a_manualA && !h || t[C] && t[T] && t[B] && ("mousedown" == t.type ? (document.addEventListener("mouseup", L, !1),
									M = setTimeout(k, prefs.Atimeout)) : k());
							};
							document.addEventListener(D, R, !1), remove.push((function() {
								document.removeEventListener(D, R, !1);
							}));
						}
						function scroll() {
							A || p || !(function getRemain() {
								var t = cplink || void 0, r = window.scrollY, n = window.innerHeight, a = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.e)(x, t), o = a && 1 == a.nodeType ? a.getBoundingClientRect()[O] + r : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = 0;
								return null != e.a_excludeElement && (i = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.e)(e.a_excludeElement, t).offsetHeight),
								(o - r - n - i) / n;
							}() <= e.a_remain || h) || (s ? beforeInsertIntoDoc() : g());
						}
						function timeoutfn() {
							clearTimeout(P), P = setTimeout(scroll, 100);
						}
						window.addEventListener("scroll", timeoutfn, !1), remove.push((function() {
							window.removeEventListener("scroll", timeoutfn, !1);
						})), autoPO = {
							startipages: function startipages(t) {
								t > 0 && (h = !0, m = t + S, Object(utils_notice__WEBPACK_IMPORTED_MODULE_28__.a)("<b>状态</b>:当前已翻页数量:<b>" + S + '</b>,连续翻页到第<b style="color:red!important;">' + m + "</b>页."),
								e.a_manualA && insertedIntoDoc(), scroll());
							}
						};
					}
					function prefetcher(e, t) {
						function cContainer() {
							var e = document.createElement("div"), t = e.cloneNode(!1), r = document.createElement("hr");
							return e.style.cssText = "                margin:3px!important;                padding:5px!important;                border-radius:8px!important;                -moz-border-radius:8px!important;                border-bottom:1px solid #E30005!important;                border-top:1px solid #E30005!important;                background-color:#F5F5F5!important;                float:none!important;            ",
								e.title = "预读的内容", t.style.cssText = "                text-align:left!important;                color:red!important;                font-size:13px!important;                display:block!important;                float:none!important;                position:static!important;            ",
								r.style.cssText = "                display:block!important;                border:1px inset #000!important;            ",
								e.appendChild(t), e.appendChild(r), document.body.appendChild(e), {
								div: e,
								div2: t
							};
						}
						if (t.updateColor("prefetcher"), t.updateColor("loading"), t.CmodeIcon("show"),
							e.useiframe) {
							var r = document.createElement("iframe");
							if (r.name = "superpreloader-iframe", r.src = nextlink, r.width = "100%", r.height = "0",
								r.frameBorder = "0", r.style.cssText = "                margin:0!important;                padding:0!important;            ",
								r.addEventListener("load", (function(r) {
									var n = r.currentTarget.contentDocument.body;
									n && n.firstChild && (t.updateColor("prefetcher"), t.CmodeIcon("hide"), t.loadedIcon("show"),
										r.currentTarget.removeEventListener("load", arguments.callee, !1), e.lazyImgSrc && handleLazyImgSrc(e.lazyImgSrc, n));
								}), !1), e.viewcontent) {
								var n = cContainer();
								n.div2.innerHTML = "iframe全预读: <br />预读网址: <b>" + nextlink + "</b>", r.height = "300px",
									n.div.appendChild(r);
							} else document.body.appendChild(r);
						} else {
							var a = {
								headers: e.a_headers ? e.a_headers : {
									Referer: cplink
								}
							};
							got.get(nextlink, a).then((function(r) {
								var n = createDocumentByString(r.data);
								if (n) {
									e.lazyImgSrc && handleLazyImgSrc(e.lazyImgSrc, n);
									var a, o, i, s = n.images, c = [], u = {};
									for (o = s.length - 1; o >= 0; o--) (i = s[o].getAttribute("src")) && !u[i] && (u[i] = !0,
										(a = document.createElement("img")).src = i, c.push(a));
									if (e.viewcontent) {
										var l = cContainer(), p = l.div;
										for (o = c.length, l.div2.innerHTML = "预读取图片张数: <b>" + o + "</b><br />预读网址: <b>" + nextlink + "</b>",
												 o -= 1; o >= 0; o--) p.appendChild(c[o]);
									}
									t.updateColor("prefetcher"), t.loadedIcon("show"), t.CmodeIcon("hide");
								} else utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "文档对象创建失败!");
							}));
						}
					}
					var blackList_re = new RegExp(blackList.map(wildcardToRegExpStr).join("|"));
					if (blackList_re.test(url)) utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "匹配黑名单，js执行终止"); else {
						if (prefs.DisableI && window.self != window.parent) {
							var isReturn = !lodash_find__WEBPACK_IMPORTED_MODULE_8___default()(DIExclude, (function(e) {
								return e[1] && e[2].test(url);
							}));
							if (isReturn) return void utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `url为:${url}的页面为非顶层窗口,JS执行终止`);
						}
						var nextlink, prelink;
						utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `url为:${url}的页面,JS加载成功`),
							SSRules = SSRules.concat(rules_jsSiteRule__WEBPACK_IMPORTED_MODULE_25__.a, jsonRule, rules_jsGeneralRule__WEBPACK_IMPORTED_MODULE_24__.a),
						prefs.numOfRule && prefs.numOfRule == SSRules.length || (prefs.numOfRule = SSRules.length,
							GM.setValue("prefs", prefs));
						var SSS = {}, findCurSiteInfo = function findCurSiteInfo() {
							var e, t = SITEINFO_D.autopager, r = SSRules.length;
							"zh_CN" === i8n() ? (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `高级规则数目:${r}`),
								utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `规则数 > ${r - jsonRule.length} 来自其他来源, 比如: wedata.net`)) : utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `Number of advanced rules:${r}`);
							var n = function _loop2() {
								var r = SSRules[a];
								if ((e = toRE(r.url)).test(url)) {
									if ("zh_CN" === i8n() ? (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "找到当前站点规则:", r),
										utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `规则ID: ${a + 1}`)) : (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "Find rule for this website:", r),
										utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `Rule ID: ${a + 1}`)),
									r.autopager && r.autopager.startFilter) try {
										r.autopager.startFilter(document, window), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "执行 startFilter 成功");
									} catch (e) {
										utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "执行 startFilter 错误", e);
									}
									if (!(nextlink = getElement(r.nextLink || "auto;"))) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.warn("[Super-preloader]", "无法找到下一页链接,继续查找其他规则,跳过规则:", r),
										"continue";
									if (getFullHref(nextlink) == document.location.href) return nextlink = null, "continue";
									r.preLink && "auto;" != r.preLink ? prelink = getElement(r.preLink) : prefs.autoGetPreLink && getElement("auto;"),
										(SSS = {}).Rurl = String(e), SSS.nextLink = r.nextLink || "auto;", SSS.viewcontent = r.viewcontent,
										SSS.enable = void 0 === r.enable ? SITEINFO_D.enable : r.enable, SSS.useiframe = void 0 === r.useiframe ? SITEINFO_D.useiframe : r.useiframe,
									r.pageElement && (r.autopager instanceof Object || (r.autopager = {}), r.autopager.pageElement = r.pageElement,
									r.useiframe && (r.autopager.useiframe = r.useiframe), r.preLink && (r.autopager.preLink = r.preLink),
									r.insertBefore && (r.autopager.HT_insert = [ r.insertBefore, 1 ]));
									var n = r.autopager;
									if (n) {
										if (SSS.a_pageElement = n.pageElement, !SSS.a_pageElement) return "break";
										SSS.a_manualA = void 0 === n.manualA ? t.manualA : n.manualA, SSS.a_enable = void 0 === n.enable ? t.enable : n.enable,
											void 0 === n.useiframe ? SSS.a_useiframe = r.useiframe : SSS.a_useiframe = n.useiframe,
											SSS.a_mutationObserver = SSS.a_useiframe ? void 0 === n.mutationObserver ? null : n.mutationObserver : null,
											SSS.a_newIframe = void 0 === n.newIframe ? t.newIframe : n.newIframe, SSS.a_iloaded = void 0 === n.iloaded ? t.iloaded : n.iloaded,
											SSS.a_itimeout = void 0 === n.itimeout ? t.itimeout : n.itimeout, SSS.a_remain = void 0 === n.remain ? t.remain : n.remain,
											SSS.a_maxpage = void 0 === n.maxpage ? t.maxpage : n.maxpage, SSS.a_separator = void 0 === n.separator ? t.separator : n.separator,
											SSS.a_sepdivDom = void 0 === n.sepdivDom ? void 0 : n.sepdivDom, SSS.a_separatorReal = void 0 === n.separatorReal ? t.separatorReal : n.separatorReal,
											SSS.a_replaceE = n.replaceE, SSS.a_HT_insert = n.HT_insert, SSS.a_relatedObj = n.relatedObj,
											SSS.a_ipages = void 0 === n.ipages ? t.ipages : n.ipages, SSS.filter = r.filter || n.filter,
											SSS.a_documentFilter = r.documentFilter || n.documentFilter, SSS.a_scriptFilter = void 0 === n.scriptFilter ? "" : n.scriptFilter,
										"string" == typeof SSS.a_documentFilter && "startFilter" === SSS.a_documentFilter && (SSS.a_documentFilter = function(e, t) {
											return r.autopager.startFilter(e);
										}), SSS.a_stylish = r.stylish || n.stylish, SSS.lazyImgSrc = n.lazyImgSrc, SSS.a_headers = void 0 === n.headers ? void 0 : n.headers,
											SSS.a_reload = void 0 === n.reload ? t.reload : n.reload, SSS.a_sandbox = void 0 === n.sandbox ? t.sandbox : n.sandbox,
											SSS.a_excludeElement = n.excludeElement;
									}
									var o = getElement(SSS.a_pageElement);
									return !o || _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(o) && 0 === o.length ? (nextlink = null,
										utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "无法找到内容,跳过规则:", r, "继续查找其他规则"),
										"continue") : (SSS.hasRule = !0, "break");
								}
							};
							e: for (var a = 0; a < r; a++) {
								switch (n()) {
									case "continue":
										continue;

									case "break":
										break e;
								}
							}
							if (!SSS.hasRule) if (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.warn("[Super-preloader]", "未找到合适的高级规则,开始自动匹配."),
								autoMatch.keyMatch) {
								if (nextlink = autoGetLink()) {
									var o = autoMatch.FA;
									SSS.Rurl = window.localStorage ? "am:" + (url.match(/^https?:\/\/[^:]*\//i) || [])[0] : "am:automatch",
										SSS.enable = !0, SSS.nextLink = "auto;", SSS.viewcontent = autoMatch.viewcontent,
										SSS.useiframe = autoMatch.useiframe, SSS.a_force = !0, SSS.a_manualA = o.manualA,
										SSS.a_enable = o.enable || SITEINFO_D.autopager.force_enable, SSS.a_useiframe = o.useiframe,
										SSS.a_iloaded = o.iloaded, SSS.a_itimeout = o.itimeout, SSS.a_remain = o.remain,
										SSS.a_maxpage = o.maxpage, SSS.a_separator = o.separator, SSS.a_ipages = o.ipages;
								}
							} else utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "自动匹配功能被禁用了.");
							SSS.lazyImgSrc || (SSS.lazyImgSrc = prefs.lazyImgSrc), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `搜索高级规则和自动匹配过程总耗时:${new Date - startTime}ms`);
						};
						if (findCurSiteInfo(), nextlink || prelink) {
							utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "上一页链接:", prelink),
								utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "下一页链接:", nextlink),
								nextlink = nextlink ? nextlink.href || nextlink : void 0, prelink = prelink ? prelink.href || prelink : void 0;
							var superPreloader = {
								go: function go() {
									nextlink && (window.location.href = nextlink);
								},
								back: function back() {
									prelink || getElement("auto;"), prelink && (window.location.href = prelink);
								}
							};
							if (prefs.arrowKeyPage && (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "添加键盘左右方向键翻页监听."),
								document.addEventListener("keyup", (function(e) {
									var t = e.target.nodeName;
									if (("BODY" == t || "HTML" == t) && !(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) switch (e.keyCode) {
										case 37:
											superPreloader.back();
											break;

										case 39:
											superPreloader.go();
									}
								}), !1)), utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "添加鼠标手势翻页监听"),
								document.addEventListener("superPreloader.go", (function() {
									superPreloader.go();
								}), !1), document.addEventListener("superPreloader.back", (function() {
								superPreloader.back();
							}), !1), !nextlink) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "下一页链接不存在,JS无法继续."),
								void utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `全部过程耗时:${new Date - startTime}ms`);
							var loadLocalSetting = function loadLocalSetting() {
								utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "加载设置");
								var savedValue = getValue("spfwset");
								if (savedValue) try {
									console.log("执行了的呢");
									savedValue = eval(savedValue);
								} catch (e) {
									saveValue("spfwset", "");
								}
								if (savedValue) {
									var i, ii;
									for (SSS.savedValue = savedValue, i = 0, ii = savedValue.length; i < ii; i++) {
										var savedValue_x = savedValue[i];
										if (savedValue_x.Rurl == SSS.Rurl) {
											for (var ix in savedValue_x) savedValue_x.hasOwnProperty(ix) && (SSS[ix] = savedValue_x[ix]);
											break;
										}
									}
									SSS.sedValueIndex = i;
								} else SSS.savedValue = [], SSS.sedValueIndex = 0;
							}, docChecked;
							if (loadLocalSetting(), SSS.hasRule || (SSS.a_force = !0), SSS.a_force && (SSS.a_pageElement = "//body/*",
								SSS.a_HT_insert = void 0, SSS.a_relatedObj = void 0), prefs.floatWindow) {
								utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "创建悬浮窗"),
									floatWindow(SSS);
								var floatWindowWidth = "zh_CN" === i8n() ? 231 : 366, d = displacejs__WEBPACK_IMPORTED_MODULE_19___default()(document.getElementById("sp-fw-container"), {
									handle: document.getElementById("sp-fw-rect"),
									customMove: function customMove(e, t, r) {
										delete e.style.left, delete e.style.bottom, e.style.right = `${window.innerWidth - t - floatWindowWidth}px`,
											e.style.top = `${r}px`;
									},
									onMouseUp: function onMouseUp(e) {
										prefs.FW_offset[0] = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(e.style.top.replace("px", ""), 10),
											prefs.FW_offset[1] = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(e.style.right.replace("px", ""), 10),
											prefs.FW_position = 2, GM.setValue("prefs", prefs);
									}
								});
								document.getElementById("sp-fw-container").style.position = "fixed";
							}
							if (!SSS.enable) return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.warn("[Super-preloader]", "本规则被关闭,脚本执行停止"),
								void utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `全部过程耗时:${new Date - startTime}ms`);
							utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `全部过程耗时:${new Date - startTime}ms`),
								SSS.a_enable ? (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "初始化,翻页模式."),
									autopager(SSS, floatWO)) : (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "初始化,预读模式."),
									prefetcher(SSS, floatWO));
						} else utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.warn("[Super-preloader]", `未找到相关链接, JS执行停止. 共耗时:${new Date - startTime}ms`);
					}
					function getElement(e, t, r, n) {
						var a, o = cplink;
						if (!e) return a;
						r = r || document, n = n || window, t = t || r;
						var i = typeof e;
						if ("string" == i) a = 0 === e.search(/^css;/i) ? Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.c)(e.slice(4), t) : "auto;" == e.toLowerCase() ? autoGetLink(r, n) : Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.d)(e, t, r); else if ("function" == i) a = e(r, n, o); else if (e instanceof Array) for (var s = 0, c = e.length; s < c && !(a = getElement(e[s], t, r, n)); s++) ; else a = hrefInc(e, r, n, o);
						return a;
					}
					function autoGetLink(e, t) {
						if (autoMatch.keyMatch) {
							parseKWRE.done || (parseKWRE(), parseKWRE.done = !0);
							var r = new Date;
							if (t = t || window, (e = e || document) == document) {
								if (docChecked) return nextlink;
								docChecked = !0;
							}
							var n, a, o = prePageKey, i = nextPageKey, s = nextPageKey.length, c = prePageKey.length, u = getFullHref, l = utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.b, p = Number, f = domain_port, d = e.links, _ = d.length, h = cplink;
							autoGetLink.checked ? a = !0 : (n = nextlink, a = prelink);
							var m, g, b, v, y, w, E, x, O, S, P, A, M, I, D, C, T, B, k, L, R, U, j = autoMatch.digitalCheck, W = /^\s*\D{0,1}(\d+)\D{0,1}\s*$/;
							for (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `全文档链接数量:${_}`),
									 m = 0; m < _ && (!n || !a); m++) if (g = d[m]) {
								if (b = g.textContent) {
									if (j && (v = b.match(W))) {
										if (v = v[1], y = g, w = 0, !n) {
											for (E = g.previousSibling, x = g.previousElementSibling; !E && !x && w < 1; ) (y = y.parentNode) && (E = y.previousSibling,
												x = y.previousElementSibling), w++;
											if (O = w > 0, (E || x) && ((S = E ? E.textContent.match(W) : "") ? P = E : (S = x ? x.textContent.match(W) : "",
												P = x), S && p(S = S[1]) == p(v) - 1)) {
												(3 == (A = P.nodeType) || 1 == A && (O ? 0 === l("./descendant-or-self::a[@href]", P, e).snapshotLength : !P.hasAttribute("href") || u(P.getAttribute("href")) == h)) && (n = finalCheck(g, "next"));
												continue;
											}
										}
										if (!a) {
											for (M = g.nextSibling, I = g.nextElementSibling; !M && !I && w < 1; ) (y = y.parentNode) && (M = g.nextSibling,
												I = g.nextElementSibling), w++;
											O = w > 0, (M || I) && ((D = M ? M.textContent.match(W) : "") ? C = M : (D = I ? I.textContent.match(W) : "",
												C = I), D && p(D = D[1]) == p(v) + 1 && (3 == (A = C.nodeType) || 1 == A && (O ? 0 === l("./descendant-or-self::a[@href]", C, e).snapshotLength : !C.hasAttribute("href") || u(C.getAttribute("href")) == h)) && (a = finalCheck(g, "pre")));
										}
										continue;
									}
								} else b = g.title;
								if (!b) for (B = 0, k = (T = g.getElementsByTagName("img")).length; B < k && (L = T[B],
									!(b = L.alt || L.title)); B++) ;
								if (b) {
									if (!n) {
										for (R = !1, U = 0; U < s; U++) if (i[U].test(b)) {
											n = finalCheck(g, "next"), R = !0;
											break;
										}
										if (R || n) continue;
									}
									if (!a) for (U = 0; U < c; U++) if (o[U].test(b)) {
										a = finalCheck(g, "pre");
										break;
									}
								}
							}
							return utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", `搜索链接数量:${m} 耗时:${new Date - r}ms`),
							autoGetLink.checked || (prelink = a, autoGetLink.checked = !0), n;
						}
						function finalCheck(e, t) {
							var r = e.getAttribute("href");
							return "#" == r ? null : (r = u(r), /^https?:/i.test(r) && r.replace(/#.*$/, "") != h && r.match(/https?:\/\/([^\/]+)/)[1] == f ? (utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "pre" == t ? "上一页" : "下一页匹配到的关键字为:", b),
								e) : void 0);
						}
					}
					function parseKWRE() {
						function modifyPageKey(e, t, r) {
							function strMTE(e) {
								return e.replace(/\\/g, "\\\\").replace(/\+/g, "\\+").replace(/\./g, "\\.").replace(/\?/g, "\\?").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\*/g, "\\*").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\|/g, "\\|").replace(/\//g, "\\/");
							}
							var n, a, o, i = autoMatch.pfwordl, s = autoMatch.sfwordl, c = i[e].enable, u = i[e].maxPrefix, l = i[e].character, p = s[e].enable, f = s[e].maxSubfix, d = s[e].character;
							n = "^\\s*" + (n = u > 0 ? "[" + (c ? strMTE(l.join("")) : ".") + "]{0," + u + "}" : ""),
								a = f > 0 ? "[" + (p ? strMTE(d.join("")) : ".") + "]{0," + f + "}" : "", a += "\\s*$",
								o = prefs.cases ? "" : "i";
							for (var _ = 0; _ < r; _++) t[_] = new RegExp(n + strMTE(t[_]) + a, o);
							return t;
						}
						prePageKey = modifyPageKey("previous", prePageKey, prePageKey.length), nextPageKey = modifyPageKey("next", nextPageKey, nextPageKey.length);
					}
				}
				function getRalativePageStr(e, t, r) {
					var n, a = function getRalativePageNumArray(e, t) {
						if (!e || !t) return [ 0, 0 ];
						for (var r, n, a = e.split(/-|\.|\&|\/|=|#|\?/), o = t.split(/-|\.|\&|\/|=|#|\?/), i = function handleInfo(e) {
							return e ? e.replace(/^p/, "") : e;
						}; 0 !== o.length; ) if ((r = i(o.pop())) != (n = i(a.pop())) && /[0-9]+/.test(r) && ("2" == r || /[0-9]+/.test(n))) return [ _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(n) || 1, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(r) ];
						return [ 0, 0 ];
					}, o = [];
					if (r ? o = a(t, r) : (n = (o = a(e, t))[1] - o[0], o[1] = o[1] + n, o[0] = o[0] + n),
					isNaN(o[0]) || isNaN(o[1])) return "";
					var i, s = !1;
					if (1 === (n = o[1] - o[0]) && o[1] < 1e4 && (s = !0), s || 1 === n || o[1] % n == 0 && o[0] % n == 0 && (s = !0),
						!s) for (var c, u = 0, l = REALPAGE_SITE_PATTERN.length; u < l; u++) if (c = REALPAGE_SITE_PATTERN[u],
					t.toLocaleLowerCase().indexOf(c) >= 0) {
						s = !0;
						break;
					}
					return s ? "zh_CN" === i8n() ? o[1] - o[0] > 1 ? i = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + o[0] + " - " + o[1] + "</span> 项 ]" : o[1] - o[0] == 1 ? i = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + o[0] + "</span> 页 ]" : 0 === (0 === o[0] && o[1]) && (i = ' [ <span style="' + sep_icons.text_span_style + '">实际网页结束</span> ]') : o[1] - o[0] > 1 ? i = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + o[0] + " - " + o[1] + "</span> ]" : o[1] - o[0] == 1 ? i = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + o[0] + "</span> ]" : 0 === (0 === o[0] && o[1]) && (i = ' [ <span style="' + sep_icons.text_span_style + '">Actual elements ends</span> ]') : i = "",
					i || "";
				}
				utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.debug("[Super-preloader]", "Entrypoint"),
					_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all(preSPinit).then((function() {
						jsonRule = utils_json_rule__WEBPACK_IMPORTED_MODULE_26__.a.getRule(), SP.spinit();
					}));
			})).catch((function(e) {
				console.log(e);
			}));
			var isHashchangeSite = !1, hashchangeTimer = 0, Tween = {
				Linear: function Linear(e, t, r, n) {
					return r * e / n + t;
				},
				Quad: {
					easeIn: function easeIn(e, t, r, n) {
						return r * (e /= n) * e + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return -r * (e /= n) * (e - 2) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return (e /= n / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t;
					}
				},
				Cubic: {
					easeIn: function easeIn(e, t, r, n) {
						return r * (e /= n) * e * e + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return r * ((e = e / n - 1) * e * e + 1) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return (e /= n / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t;
					}
				},
				Quart: {
					easeIn: function easeIn(e, t, r, n) {
						return r * (e /= n) * e * e * e + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return -r * ((e = e / n - 1) * e * e * e - 1) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return (e /= n / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t;
					}
				},
				Quint: {
					easeIn: function easeIn(e, t, r, n) {
						return r * (e /= n) * e * e * e * e + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return r * ((e = e / n - 1) * e * e * e * e + 1) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return (e /= n / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t;
					}
				},
				Sine: {
					easeIn: function easeIn(e, t, r, n) {
						return -r * Math.cos(e / n * (Math.PI / 2)) + r + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return r * Math.sin(e / n * (Math.PI / 2)) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return -r / 2 * (Math.cos(Math.PI * e / n) - 1) + t;
					}
				},
				Expo: {
					easeIn: function easeIn(e, t, r, n) {
						return 0 == e ? t : r * Math.pow(2, 10 * (e / n - 1)) + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return e == n ? t + r : r * (1 - Math.pow(2, -10 * e / n)) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return 0 == e ? t : e == n ? t + r : (e /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (2 - Math.pow(2, -10 * --e)) + t;
					}
				},
				Circ: {
					easeIn: function easeIn(e, t, r, n) {
						return -r * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return r * Math.sqrt(1 - (e = e / n - 1) * e) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return (e /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
					}
				},
				Elastic: {
					easeIn: function easeIn(e, t, r, n, a, o) {
						return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
							i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) + t);
						var i;
					},
					easeOut: function easeOut(e, t, r, n, a, o) {
						return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
							i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), a * Math.pow(2, -10 * e) * Math.sin((e * n - i) * (2 * Math.PI) / o) + r + t);
						var i;
					},
					easeInOut: function easeInOut(e, t, r, n, a, o) {
						return 0 == e ? t : 2 == (e /= n / 2) ? t + r : (o || (o = n * (.3 * 1.5)), !a || a < Math.abs(r) ? (a = r,
							i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * -.5 + t : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * .5 + r + t);
						var i;
					}
				},
				Back: {
					easeIn: function easeIn(e, t, r, n, a) {
						return null == a && (a = 1.70158), r * (e /= n) * e * ((a + 1) * e - a) + t;
					},
					easeOut: function easeOut(e, t, r, n, a) {
						return null == a && (a = 1.70158), r * ((e = e / n - 1) * e * ((a + 1) * e + a) + 1) + t;
					},
					easeInOut: function easeInOut(e, t, r, n, a) {
						return null == a && (a = 1.70158), (e /= n / 2) < 1 ? r / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + t : r / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + t;
					}
				},
				Bounce: {
					easeIn: function easeIn(e, t, r, n) {
						return r - Tween.Bounce.easeOut(n - e, 0, r, n) + t;
					},
					easeOut: function easeOut(e, t, r, n) {
						return (e /= n) < 1 / 2.75 ? r * (7.5625 * e * e) + t : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t;
					},
					easeInOut: function easeInOut(e, t, r, n) {
						return e < n / 2 ? .5 * Tween.Bounce.easeIn(2 * e, 0, r, n) + t : .5 * Tween.Bounce.easeOut(2 * e - n, 0, r, n) + .5 * r + t;
					}
				}
			}, TweenM = [ "Linear", "Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Elastic", "Back", "Bounce" ], TweenEase = [ "easeIn", "easeOut", "easeInOut" ];
		}
		function CheckIframe() {
			return "superpreloader-iframe" === window.name;
		}
		function hrefInc(e, t, r, n) {
			var a = n;
			function getHref(t) {
				var r, n = e.mFails;
				if (!n) return t;
				if ("string" == typeof n) r = n; else {
					for (var a = [], o = 0, i = n.length; o < i; o++) {
						var s = n[o];
						if (s) if ("string" != typeof s || 0 === s.indexOf("re;")) {
							var c = "string" == typeof s ? toRE(s.slice(3)) : s, u = t.match(c);
							if (!u) return t;
							a.push(u);
						} else a.push(s);
					}
					r = a.join("");
				}
				return r;
			}
			var o, i = e.startAfter;
			if ("string" == typeof i) {
				if ("#" == i[0] && (a = t.location.href), -1 == (o = a.indexOf(i)) && -1 == (o = (a = getHref(a)).indexOf(i))) return;
			} else {
				var s = a.match(i);
				if (s) i = s[0], o = a.indexOf(i); else {
					if (!(i = ((a = getHref(a)).match(i) || [])[0])) return;
					if (-1 == (o = a.indexOf(i))) return;
				}
			}
			o += i.length;
			var c = void 0 === e.max ? 9999 : e.max, u = void 0 === e.min ? 1 : e.min, l = a.slice(0, o), p = a.slice(o), f = p.replace(/^(\d+)(.*)$/, (function(t, r, n) {
				return (r = Number(r) + e.inc) >= c || r < u ? t : r + n;
			}));
			if (f !== p) {
				var d;
				try {
					d = e.isLast(t, unsafeWindow, a);
				} catch (e) {}
				if (d) return;
				return l + f;
			}
		}
		function handleLazyImgSrc(e, t) {
			e.split("|").forEach((function(e) {
				e = e.trim(), [].forEach.call(t.querySelectorAll("img[" + e + "]"), (function(t) {
					var r = t.getAttribute(e);
					r && r != t.src && (t.setAttribute("src", r), t.removeAttribute(e));
				}));
			}));
		}
		function removeScripts(e, t) {
			var r, n, a = Object(utils_domSelector__WEBPACK_IMPORTED_MODULE_12__.a)("css;script", e);
			t && (r = toRE(t));
			for (var o = a.length - 1; o >= 0; o--) {
				n = a[o];
				var i = !1;
				r ? (n.hasOwnProperty("src") && (r.test(n.src) || (i = !0)), n.text && (r.test(n.text) || (i = !0)),
				i && n.parentNode.removeChild(n)) : n.parentNode.removeChild(n);
			}
		}
		function saveValue(e, t) {
			localStorage.setItem(e, encodeURIComponent(t));
		}
		function getValue(e) {
			var t = localStorage.getItem(e);
			return t ? decodeURIComponent(t) : void 0;
		}
		function createDocumentByString(e) {
			if (e) {
				if ("HTML" != document.documentElement.nodeName) return (new DOMParser).parseFromString(e, "application/xhtml+xml");
				var t;
				try {
					t = (new DOMParser).parseFromString(e, "text/html");
				} catch (e) {}
				if (t) return t;
				if (document.implementation.createHTMLDocument) t = document.implementation.createHTMLDocument("superPreloader"); else try {
					(t = document.cloneNode(!1)).appendChild(t.importNode(document.documentElement, !1)),
						t.documentElement.appendChild(t.createElement("head")), t.documentElement.appendChild(t.createElement("body"));
				} catch (e) {}
				if (t) {
					var r = document.createRange();
					r.selectNodeContents(document.body);
					var n = r.createContextualFragment(e);
					t.body.appendChild(n);
					for (var a, o = {
						TITLE: !0,
						META: !0,
						LINK: !0,
						STYLE: !0,
						BASE: !0
					}, i = t.body, s = i.childNodes, c = s.length - 1; c >= 0; c--) o[(a = s[c]).nodeName] && i.removeChild(a);
					return t;
				}
			} else utils_logger__WEBPACK_IMPORTED_MODULE_27__.a.error("[Super-preloader]", "没有找到要转成DOM的字符串");
		}
		function getFullHref(e) {
			"string" != typeof e && (e = e.getAttribute("href"));
			var t = getFullHref.a;
			return t || (getFullHref.a = t = document.createElement("a")), t.href = e, t.href;
		}
		function xToString(e) {
			var t = String;
			return function toStr(e) {
				switch (typeof e) {
					case "undefined":
					case "boolean":
					case "number":
						return t(e);

					case "string":
						return '"' + e.replace(/(?:\r\n|\n|\r|\t|\\|\")/g, (function(e) {
							var t;
							switch (e) {
								case "\r\n":
									t = "\\r\\n";
									break;

								case "\n":
									t = "\\n";
									break;

								case "\r":
									t = "\\r";
									break;

								case "\t":
									t = "\\t";
									break;

								case "\\":
									t = "\\\\";
									break;

								case '"':
									t = '\\"';
							}
							return t;
						})) + '"';

					case "function":
						var r = t(e);
						return -1 == r.indexOf("native code") ? r : "function(){}";

					case "object":
						if (null === e) return t(e);
						var n, a = "";
						switch (e.constructor.name) {
							case "Object":
								for (n in e) e.hasOwnProperty(n) && (a += toStr(n) + ":" + toStr(e[n]) + ",");
								return "{" + a.replace(/,$/i, "") + "}";

							case "Array":
								for (n in e) e.hasOwnProperty(n) && (a += toStr(e[n]) + ",");
								return "[" + a.replace(/,$/i, "") + "]";

							case "String":
								return toStr(t(e));

							case "RegExp":
							case "Number":
							case "Boolean":
								return t(e);
						}
				}
			}(e);
		}
		function toRE(e) {
			return e instanceof RegExp ? e : e instanceof Array ? new RegExp(e[0], e[1]) : (0 === e.search(/^wildc;/i) && (e = wildcardToRegExpStr(e.slice(6))),
				new RegExp(e));
		}
		function wildcardToRegExpStr(e) {
			return e.source ? e.source : "^" + e.replace(/[()\[\]{}|+.,^$?\\]/g, "\\$&").replace(/\*+/g, (function(e) {
				return "*" === e ? ".*" : "[^/]*";
			})) + "$";
		}
		function assignDifferentProperty(e, t) {
			var r = lodash_difference__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(t)), n = r.length > 0;
			return n && r.forEach((function(r) {
				r in e ? delete e[r] : e[r] = t[r];
			})), n;
		}
		function i8n() {
			return -1 !== userLang.indexOf("zh") || prefs.ChineseUI ? "zh_CN" : "en_US";
		}
	}();
}, function(e, t, r) {
	r(170), e.exports = r(3).Object.keys;
}, function(e, t, r) {
	var n = r(49), a = r(31);
	r(110)("keys", (function() {
		return function keys(e) {
			return a(n(e));
		};
	}));
}, function(e, t, r) {
	var n = r(15), a = r(108), o = r(109);
	e.exports = function(e) {
		return function(t, r, i) {
			var s, c = n(t), u = a(c.length), l = o(i, u);
			if (e && r != r) {
				for (;u > l; ) if ((s = c[l++]) != s) return !0;
			} else for (;u > l; l++) if ((e || l in c) && c[l] === r) return e || l || 0;
			return !e && -1;
		};
	};
}, function(e, t, r) {
	r(173), e.exports = r(3).Array.isArray;
}, function(e, t, r) {
	var n = r(7);
	n(n.S, "Array", {
		isArray: r(112)
	});
}, function(e, t, r) {
	var n = r(3), a = n.JSON || (n.JSON = {
		stringify: JSON.stringify
	});
	e.exports = function stringify(e) {
		return a.stringify.apply(a, arguments);
	};
}, function(e, t, r) {
	r(176), e.exports = r(3).parseInt;
}, function(e, t, r) {
	var n = r(7), a = r(177);
	n(n.G + n.F * (parseInt != a), {
		parseInt: a
	});
}, function(e, t, r) {
	var n = r(6).parseInt, a = r(178).trim, o = r(113), i = /^[-+]?0[xX]/;
	e.exports = 8 !== n(o + "08") || 22 !== n(o + "0x16") ? function parseInt(e, t) {
		var r = a(String(e), 3);
		return n(r, t >>> 0 || (i.test(r) ? 16 : 10));
	} : n;
}, function(e, t, r) {
	var n = r(7), a = r(50), o = r(26), i = r(113), s = "[" + i + "]", c = RegExp("^" + s + s + "*"), u = RegExp(s + s + "*$"), exporter = function(e, t, r) {
		var a = {}, s = o((function() {
			return !!i[e]() || "​" != "​"[e]();
		})), c = a[e] = s ? t(l) : i[e];
		r && (a[r] = c), n(n.P + n.F * s, "String", a);
	}, l = exporter.trim = function(e, t) {
		return e = String(a(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")),
			e;
	};
	e.exports = exporter;
}, function(e, t, r) {
	var n = r(35);
	e.exports = function _arrayWithHoles(e) {
		if (n(e)) return e;
	};
}, function(e, t, r) {
	var n = r(96), a = r(189);
	e.exports = function _iterableToArrayLimit(e, t) {
		if (a(Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) {
			var r = [], o = !0, i = !1, s = void 0;
			try {
				for (var c, u = n(e); !(o = (c = u.next()).done) && (r.push(c.value), !t || r.length !== t); o = !0) ;
			} catch (e) {
				i = !0, s = e;
			} finally {
				try {
					o || null == u.return || u.return();
				} finally {
					if (i) throw s;
				}
			}
			return r;
		}
	};
}, function(e, t, r) {
	r(76), r(77), e.exports = r(188);
}, function(e, t, r) {
	"use strict";
	var n = r(183), a = r(184), o = r(32), i = r(15);
	e.exports = r(114)(Array, "Array", (function(e, t) {
		this._t = i(e), this._i = 0, this._k = t;
	}), (function() {
		var e = this._t, t = this._k, r = this._i++;
		return !e || r >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? r : "values" == t ? e[r] : [ r, e[r] ]);
	}), "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries");
}, function(e, t) {
	e.exports = function() {};
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			value: t,
			done: !!e
		};
	};
}, function(e, t, r) {
	"use strict";
	var n = r(116), a = r(42), o = r(54), i = {};
	r(24)(i, r(9)("iterator"), (function() {
		return this;
	})), e.exports = function(e, t, r) {
		e.prototype = n(i, {
			next: a(1, r)
		}), o(e, t + " Iterator");
	};
}, function(e, t, r) {
	var n = r(23), a = r(49), o = r(71)("IE_PROTO"), i = Object.prototype;
	e.exports = Object.getPrototypeOf || function(e) {
		return e = a(e), n(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null;
	};
}, function(e, t, r) {
	var n = r(70), a = r(50);
	e.exports = function(e) {
		return function(t, r) {
			var o, i, s = String(a(t)), c = n(r), u = s.length;
			return c < 0 || c >= u ? e ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (i = s.charCodeAt(c + 1)) < 56320 || i > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : i - 56320 + (o - 55296 << 10) + 65536;
		};
	};
}, function(e, t, r) {
	var n = r(12), a = r(119);
	e.exports = r(3).getIterator = function(e) {
		var t = a(e);
		if ("function" != typeof t) throw TypeError(e + " is not iterable!");
		return n(t.call(e));
	};
}, function(e, t, r) {
	e.exports = r(190);
}, function(e, t, r) {
	r(76), r(77), e.exports = r(191);
}, function(e, t, r) {
	var n = r(78), a = r(9)("iterator"), o = r(32);
	e.exports = r(3).isIterable = function(e) {
		var t = Object(e);
		return void 0 !== t[a] || "@@iterator" in t || o.hasOwnProperty(n(t));
	};
}, function(e, t) {
	e.exports = function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance");
	};
}, function(e, t, r) {
	r(194), r(77), r(76), r(195), r(206), r(207), e.exports = r(3).Promise;
}, function(e, t) {}, function(e, t, r) {
	"use strict";
	var n, a, o, i, s = r(41), c = r(6), u = r(52), l = r(78), p = r(7), f = r(25), d = r(53), _ = r(196), h = r(197), m = r(120), g = r(121).set, b = r(201)(), v = r(79), y = r(122), w = r(202), E = r(123), x = c.TypeError, O = c.process, S = O && O.versions, P = S && S.v8 || "", A = c.Promise, M = "process" == l(O), empty = function() {}, I = a = v.f, D = !!function() {
		try {
			var e = A.resolve(1), t = (e.constructor = {})[r(9)("species")] = function(e) {
				e(empty, empty);
			};
			return (M || "function" == typeof PromiseRejectionEvent) && e.then(empty) instanceof t && 0 !== P.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
		} catch (e) {}
	}(), isThenable = function(e) {
		var t;
		return !(!f(e) || "function" != typeof (t = e.then)) && t;
	}, notify = function(e, t) {
		if (!e._n) {
			e._n = !0;
			var r = e._c;
			b((function() {
				for (var n = e._v, a = 1 == e._s, o = 0, run = function(t) {
					var r, o, i, s = a ? t.ok : t.fail, c = t.resolve, u = t.reject, l = t.domain;
					try {
						s ? (a || (2 == e._h && onHandleUnhandled(e), e._h = 1), !0 === s ? r = n : (l && l.enter(),
							r = s(n), l && (l.exit(), i = !0)), r === t.promise ? u(x("Promise-chain cycle")) : (o = isThenable(r)) ? o.call(r, c, u) : c(r)) : u(n);
					} catch (e) {
						l && !i && l.exit(), u(e);
					}
				}; r.length > o; ) run(r[o++]);
				e._c = [], e._n = !1, t && !e._h && onUnhandled(e);
			}));
		}
	}, onUnhandled = function(e) {
		g.call(c, (function() {
			var t, r, n, a = e._v, o = isUnhandled(e);
			if (o && (t = y((function() {
				M ? O.emit("unhandledRejection", a, e) : (r = c.onunhandledrejection) ? r({
					promise: e,
					reason: a
				}) : (n = c.console) && n.error && n.error("Unhandled promise rejection", a);
			})), e._h = M || isUnhandled(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v;
		}));
	}, isUnhandled = function(e) {
		return 1 !== e._h && 0 === (e._a || e._c).length;
	}, onHandleUnhandled = function(e) {
		g.call(c, (function() {
			var t;
			M ? O.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
				promise: e,
				reason: e._v
			});
		}));
	}, $reject = function(e) {
		var t = this;
		t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()),
			notify(t, !0));
	}, $resolve = function(e) {
		var t, r = this;
		if (!r._d) {
			r._d = !0, r = r._w || r;
			try {
				if (r === e) throw x("Promise can't be resolved itself");
				(t = isThenable(e)) ? b((function() {
					var n = {
						_w: r,
						_d: !1
					};
					try {
						t.call(e, u($resolve, n, 1), u($reject, n, 1));
					} catch (e) {
						$reject.call(n, e);
					}
				})) : (r._v = e, r._s = 1, notify(r, !1));
			} catch (e) {
				$reject.call({
					_w: r,
					_d: !1
				}, e);
			}
		}
	};
	D || (A = function Promise(e) {
		_(this, A, "Promise", "_h"), d(e), n.call(this);
		try {
			e(u($resolve, this, 1), u($reject, this, 1));
		} catch (e) {
			$reject.call(this, e);
		}
	}, (n = function Promise(e) {
		this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0,
			this._n = !1;
	}).prototype = r(203)(A.prototype, {
		then: function then(e, t) {
			var r = I(m(this, A));
			return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t,
				r.domain = M ? O.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && notify(this, !1),
				r.promise;
		},
		catch: function(e) {
			return this.then(void 0, e);
		}
	}), o = function() {
		var e = new n;
		this.promise = e, this.resolve = u($resolve, e, 1), this.reject = u($reject, e, 1);
	}, v.f = I = function(e) {
		return e === A || e === i ? new o(e) : a(e);
	}), p(p.G + p.W + p.F * !D, {
		Promise: A
	}), r(54)(A, "Promise"), r(204)("Promise"), i = r(3).Promise, p(p.S + p.F * !D, "Promise", {
		reject: function reject(e) {
			var t = I(this);
			return (0, t.reject)(e), t.promise;
		}
	}), p(p.S + p.F * (s || !D), "Promise", {
		resolve: function resolve(e) {
			return E(s && this === i ? A : this, e);
		}
	}), p(p.S + p.F * !(D && r(205)((function(e) {
		A.all(e).catch(empty);
	}))), "Promise", {
		all: function all(e) {
			var t = this, r = I(t), n = r.resolve, a = r.reject, o = y((function() {
				var r = [], o = 0, i = 1;
				h(e, !1, (function(e) {
					var s = o++, c = !1;
					r.push(void 0), i++, t.resolve(e).then((function(e) {
						c || (c = !0, r[s] = e, --i || n(r));
					}), a);
				})), --i || n(r);
			}));
			return o.e && a(o.v), r.promise;
		},
		race: function race(e) {
			var t = this, r = I(t), n = r.reject, a = y((function() {
				h(e, !1, (function(e) {
					t.resolve(e).then(r.resolve, n);
				}));
			}));
			return a.e && n(a.v), r.promise;
		}
	});
}, function(e, t) {
	e.exports = function(e, t, r, n) {
		if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(r + ": incorrect invocation!");
		return e;
	};
}, function(e, t, r) {
	var n = r(52), a = r(198), o = r(199), i = r(12), s = r(108), c = r(119), u = {}, l = {};
	(t = e.exports = function(e, t, r, p, f) {
		var d, _, h, m, g = f ? function() {
			return e;
		} : c(e), b = n(r, p, t ? 2 : 1), v = 0;
		if ("function" != typeof g) throw TypeError(e + " is not iterable!");
		if (o(g)) {
			for (d = s(e.length); d > v; v++) if ((m = t ? b(i(_ = e[v])[0], _[1]) : b(e[v])) === u || m === l) return m;
		} else for (h = g.call(e); !(_ = h.next()).done; ) if ((m = a(h, b, _.value, t)) === u || m === l) return m;
	}).BREAK = u, t.RETURN = l;
}, function(e, t, r) {
	var n = r(12);
	e.exports = function(e, t, r, a) {
		try {
			return a ? t(n(r)[0], r[1]) : t(r);
		} catch (t) {
			var o = e.return;
			throw void 0 !== o && n(o.call(e)), t;
		}
	};
}, function(e, t, r) {
	var n = r(32), a = r(9)("iterator"), o = Array.prototype;
	e.exports = function(e) {
		return void 0 !== e && (n.Array === e || o[a] === e);
	};
}, function(e, t) {
	e.exports = function(e, t, r) {
		var n = void 0 === r;
		switch (t.length) {
			case 0:
				return n ? e() : e.call(r);

			case 1:
				return n ? e(t[0]) : e.call(r, t[0]);

			case 2:
				return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);

			case 3:
				return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);

			case 4:
				return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);
		}
		return e.apply(r, t);
	};
}, function(e, t, r) {
	var n = r(6), a = r(121).set, o = n.MutationObserver || n.WebKitMutationObserver, i = n.process, s = n.Promise, c = "process" == r(40)(i);
	e.exports = function() {
		var e, t, r, flush = function() {
			var n, a;
			for (c && (n = i.domain) && n.exit(); e; ) {
				a = e.fn, e = e.next;
				try {
					a();
				} catch (n) {
					throw e ? r() : t = void 0, n;
				}
			}
			t = void 0, n && n.enter();
		};
		if (c) r = function() {
			i.nextTick(flush);
		}; else if (!o || n.navigator && n.navigator.standalone) if (s && s.resolve) {
			var u = s.resolve(void 0);
			r = function() {
				u.then(flush);
			};
		} else r = function() {
			a.call(n, flush);
		}; else {
			var l = !0, p = document.createTextNode("");
			new o(flush).observe(p, {
				characterData: !0
			}), r = function() {
				p.data = l = !l;
			};
		}
		return function(n) {
			var a = {
				fn: n,
				next: void 0
			};
			t && (t.next = a), e || (e = a, r()), t = a;
		};
	};
}, function(e, t, r) {
	var n = r(6).navigator;
	e.exports = n && n.userAgent || "";
}, function(e, t, r) {
	var n = r(24);
	e.exports = function(e, t, r) {
		for (var a in t) r && e[a] ? e[a] = t[a] : n(e, a, t[a]);
		return e;
	};
}, function(e, t, r) {
	"use strict";
	var n = r(6), a = r(3), o = r(16), i = r(11), s = r(9)("species");
	e.exports = function(e) {
		var t = "function" == typeof a[e] ? a[e] : n[e];
		i && t && !t[s] && o.f(t, s, {
			configurable: !0,
			get: function() {
				return this;
			}
		});
	};
}, function(e, t, r) {
	var n = r(9)("iterator"), a = !1;
	try {
		var o = [ 7 ][n]();
		o.return = function() {
			a = !0;
		}, Array.from(o, (function() {
			throw 2;
		}));
	} catch (e) {}
	e.exports = function(e, t) {
		if (!t && !a) return !1;
		var r = !1;
		try {
			var o = [ 7 ], i = o[n]();
			i.next = function() {
				return {
					done: r = !0
				};
			}, o[n] = function() {
				return i;
			}, e(o);
		} catch (e) {}
		return r;
	};
}, function(e, t, r) {
	"use strict";
	var n = r(7), a = r(3), o = r(6), i = r(120), s = r(123);
	n(n.P + n.R, "Promise", {
		finally: function(e) {
			var t = i(this, a.Promise || o.Promise), r = "function" == typeof e;
			return this.then(r ? function(r) {
				return s(t, e()).then((function() {
					return r;
				}));
			} : e, r ? function(r) {
				return s(t, e()).then((function() {
					throw r;
				}));
			} : e);
		}
	});
}, function(e, t, r) {
	"use strict";
	var n = r(7), a = r(79), o = r(122);
	n(n.S, "Promise", {
		try: function(e) {
			var t = a.f(this), r = o(e);
			return (r.e ? t.reject : t.resolve)(r.v), t.promise;
		}
	});
}, function(e, t, r) {
	var n = r(80), a = r(128), o = r(130), i = r(131), s = r(132), c = r(83), u = 200;
	e.exports = function baseDifference(e, t, r, l) {
		var p = -1, f = a, d = !0, _ = e.length, h = [], m = t.length;
		if (!_) return h;
		r && (t = i(t, s(r))), l ? (f = o, d = !1) : t.length >= u && (f = c, d = !1, t = new n(t));
		e: for (;++p < _; ) {
			var g = e[p], b = null == r ? g : r(g);
			if (g = l || 0 !== g ? g : 0, d && b == b) {
				for (var v = m; v--; ) if (t[v] === b) continue e;
				h.push(g);
			} else f(t, b, l) || h.push(g);
		}
		return h;
	};
}, function(e, t, r) {
	var n = r(210), a = r(56), o = r(82);
	e.exports = function mapCacheClear() {
		this.size = 0, this.__data__ = {
			hash: new n,
			map: new (o || a),
			string: new n
		};
	};
}, function(e, t, r) {
	var n = r(211), a = r(218), o = r(219), i = r(220), s = r(221);
	function Hash(e) {
		var t = -1, r = null == e ? 0 : e.length;
		for (this.clear(); ++t < r; ) {
			var n = e[t];
			this.set(n[0], n[1]);
		}
	}
	Hash.prototype.clear = n, Hash.prototype.delete = a, Hash.prototype.get = o, Hash.prototype.has = i,
		Hash.prototype.set = s, e.exports = Hash;
}, function(e, t, r) {
	var n = r(55);
	e.exports = function hashClear() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	};
}, function(e, t, r) {
	var n = r(65), a = r(215), o = r(34), i = r(126), s = /^\[object .+?Constructor\]$/, c = Function.prototype, u = Object.prototype, l = c.toString, p = u.hasOwnProperty, f = RegExp("^" + l.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	e.exports = function baseIsNative(e) {
		return !(!o(e) || a(e)) && (n(e) ? f : s).test(i(e));
	};
}, function(e, t, r) {
	var n = r(43), a = Object.prototype, o = a.hasOwnProperty, i = a.toString, s = n ? n.toStringTag : void 0;
	e.exports = function getRawTag(e) {
		var t = o.call(e, s), r = e[s];
		try {
			e[s] = void 0;
			var n = !0;
		} catch (e) {}
		var a = i.call(e);
		return n && (t ? e[s] = r : delete e[s]), a;
	};
}, function(e, t) {
	var r = Object.prototype.toString;
	e.exports = function objectToString(e) {
		return r.call(e);
	};
}, function(e, t, r) {
	var n, a = r(216), o = (n = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
	e.exports = function isMasked(e) {
		return !!o && o in e;
	};
}, function(e, t, r) {
	var n = r(17)["__core-js_shared__"];
	e.exports = n;
}, function(e, t) {
	e.exports = function getValue(e, t) {
		return null == e ? void 0 : e[t];
	};
}, function(e, t) {
	e.exports = function hashDelete(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= t ? 1 : 0, t;
	};
}, function(e, t, r) {
	var n = r(55), a = "__lodash_hash_undefined__", o = Object.prototype.hasOwnProperty;
	e.exports = function hashGet(e) {
		var t = this.__data__;
		if (n) {
			var r = t[e];
			return r === a ? void 0 : r;
		}
		return o.call(t, e) ? t[e] : void 0;
	};
}, function(e, t, r) {
	var n = r(55), a = Object.prototype.hasOwnProperty;
	e.exports = function hashHas(e) {
		var t = this.__data__;
		return n ? void 0 !== t[e] : a.call(t, e);
	};
}, function(e, t, r) {
	var n = r(55), a = "__lodash_hash_undefined__";
	e.exports = function hashSet(e, t) {
		var r = this.__data__;
		return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? a : t, this;
	};
}, function(e, t) {
	e.exports = function listCacheClear() {
		this.__data__ = [], this.size = 0;
	};
}, function(e, t, r) {
	var n = r(57), a = Array.prototype.splice;
	e.exports = function listCacheDelete(e) {
		var t = this.__data__, r = n(t, e);
		return !(r < 0) && (r == t.length - 1 ? t.pop() : a.call(t, r, 1), --this.size,
			!0);
	};
}, function(e, t, r) {
	var n = r(57);
	e.exports = function listCacheGet(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	};
}, function(e, t, r) {
	var n = r(57);
	e.exports = function listCacheHas(e) {
		return n(this.__data__, e) > -1;
	};
}, function(e, t, r) {
	var n = r(57);
	e.exports = function listCacheSet(e, t) {
		var r = this.__data__, a = n(r, e);
		return a < 0 ? (++this.size, r.push([ e, t ])) : r[a][1] = t, this;
	};
}, function(e, t, r) {
	var n = r(58);
	e.exports = function mapCacheDelete(e) {
		var t = n(this, e).delete(e);
		return this.size -= t ? 1 : 0, t;
	};
}, function(e, t) {
	e.exports = function isKeyable(e) {
		var t = typeof e;
		return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
	};
}, function(e, t, r) {
	var n = r(58);
	e.exports = function mapCacheGet(e) {
		return n(this, e).get(e);
	};
}, function(e, t, r) {
	var n = r(58);
	e.exports = function mapCacheHas(e) {
		return n(this, e).has(e);
	};
}, function(e, t, r) {
	var n = r(58);
	e.exports = function mapCacheSet(e, t) {
		var r = n(this, e), a = r.size;
		return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
	};
}, function(e, t) {
	var r = "__lodash_hash_undefined__";
	e.exports = function setCacheAdd(e) {
		return this.__data__.set(e, r), this;
	};
}, function(e, t) {
	e.exports = function setCacheHas(e) {
		return this.__data__.has(e);
	};
}, function(e, t, r) {
	var n = r(129), a = r(235), o = r(236);
	e.exports = function baseIndexOf(e, t, r) {
		return t == t ? o(e, t, r) : n(e, a, r);
	};
}, function(e, t) {
	e.exports = function baseIsNaN(e) {
		return e != e;
	};
}, function(e, t) {
	e.exports = function strictIndexOf(e, t, r) {
		for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
		return -1;
	};
}, function(e, t, r) {
	var n = r(43), a = r(59), o = r(8), i = n ? n.isConcatSpreadable : void 0;
	e.exports = function isFlattenable(e) {
		return o(e) || a(e) || !!(i && e && e[i]);
	};
}, function(e, t, r) {
	var n = r(28), a = r(20), o = "[object Arguments]";
	e.exports = function baseIsArguments(e) {
		return a(e) && n(e) == o;
	};
}, function(e, t, r) {
	var n = r(84), a = r(240), o = r(242);
	e.exports = function baseRest(e, t) {
		return o(a(e, t, n), e + "");
	};
}, function(e, t, r) {
	var n = r(241), a = Math.max;
	e.exports = function overRest(e, t, r) {
		return t = a(void 0 === t ? e.length - 1 : t, 0), function() {
			for (var o = arguments, i = -1, s = a(o.length - t, 0), c = Array(s); ++i < s; ) c[i] = o[t + i];
			i = -1;
			for (var u = Array(t + 1); ++i < t; ) u[i] = o[i];
			return u[t] = r(c), n(e, this, u);
		};
	};
}, function(e, t) {
	e.exports = function apply(e, t, r) {
		switch (r.length) {
			case 0:
				return e.call(t);

			case 1:
				return e.call(t, r[0]);

			case 2:
				return e.call(t, r[0], r[1]);

			case 3:
				return e.call(t, r[0], r[1], r[2]);
		}
		return e.apply(t, r);
	};
}, function(e, t, r) {
	var n = r(243), a = r(246)(n);
	e.exports = a;
}, function(e, t, r) {
	var n = r(244), a = r(245), o = r(84), i = a ? function(e, t) {
		return a(e, "toString", {
			configurable: !0,
			enumerable: !1,
			value: n(t),
			writable: !0
		});
	} : o;
	e.exports = i;
}, function(e, t) {
	e.exports = function constant(e) {
		return function() {
			return e;
		};
	};
}, function(e, t, r) {
	var n = r(27), a = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch (e) {}
	}();
	e.exports = a;
}, function(e, t) {
	var r = 800, n = 16, a = Date.now;
	e.exports = function shortOut(e) {
		var t = 0, o = 0;
		return function() {
			var i = a(), s = n - (i - o);
			if (o = i, s > 0) {
				if (++t >= r) return arguments[0];
			} else t = 0;
			return e.apply(void 0, arguments);
		};
	};
}, function(e, t, r) {
	var n = r(60), a = r(20);
	e.exports = function isArrayLikeObject(e) {
		return a(e) && n(e);
	};
}, function(e, t, r) {
	var n = r(135), a = r(60), o = r(87);
	e.exports = function createFind(e) {
		return function(t, r, i) {
			var s = Object(t);
			if (!a(t)) {
				var c = n(r, 3);
				t = o(t), r = function(e) {
					return c(s[e], e, s);
				};
			}
			var u = e(t, r, i);
			return u > -1 ? s[c ? t[u] : u] : void 0;
		};
	};
}, function(e, t, r) {
	var n = r(250), a = r(277), o = r(146);
	e.exports = function baseMatches(e) {
		var t = a(e);
		return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(r) {
			return r === e || n(r, e, t);
		};
	};
}, function(e, t, r) {
	var n = r(136), a = r(137), o = 1, i = 2;
	e.exports = function baseIsMatch(e, t, r, s) {
		var c = r.length, u = c, l = !s;
		if (null == e) return !u;
		for (e = Object(e); c--; ) {
			var p = r[c];
			if (l && p[2] ? p[1] !== e[p[0]] : !(p[0] in e)) return !1;
		}
		for (;++c < u; ) {
			var f = (p = r[c])[0], d = e[f], _ = p[1];
			if (l && p[2]) {
				if (void 0 === d && !(f in e)) return !1;
			} else {
				var h = new n;
				if (s) var m = s(d, _, f, e, t, h);
				if (!(void 0 === m ? a(_, d, o | i, s, h) : m)) return !1;
			}
		}
		return !0;
	};
}, function(e, t, r) {
	var n = r(56);
	e.exports = function stackClear() {
		this.__data__ = new n, this.size = 0;
	};
}, function(e, t) {
	e.exports = function stackDelete(e) {
		var t = this.__data__, r = t.delete(e);
		return this.size = t.size, r;
	};
}, function(e, t) {
	e.exports = function stackGet(e) {
		return this.__data__.get(e);
	};
}, function(e, t) {
	e.exports = function stackHas(e) {
		return this.__data__.has(e);
	};
}, function(e, t, r) {
	var n = r(56), a = r(82), o = r(81), i = 200;
	e.exports = function stackSet(e, t) {
		var r = this.__data__;
		if (r instanceof n) {
			var s = r.__data__;
			if (!a || s.length < i - 1) return s.push([ e, t ]), this.size = ++r.size, this;
			r = this.__data__ = new o(s);
		}
		return r.set(e, t), this.size = r.size, this;
	};
}, function(e, t, r) {
	var n = r(136), a = r(138), o = r(258), i = r(261), s = r(143), c = r(8), u = r(88), l = r(89), p = 1, f = "[object Arguments]", d = "[object Array]", _ = "[object Object]", h = Object.prototype.hasOwnProperty;
	e.exports = function baseIsEqualDeep(e, t, r, m, g, b) {
		var v = c(e), y = c(t), w = v ? d : s(e), E = y ? d : s(t), x = (w = w == f ? _ : w) == _, O = (E = E == f ? _ : E) == _, S = w == E;
		if (S && u(e)) {
			if (!u(t)) return !1;
			v = !0, x = !1;
		}
		if (S && !x) return b || (b = new n), v || l(e) ? a(e, t, r, m, g, b) : o(e, t, w, r, m, g, b);
		if (!(r & p)) {
			var P = x && h.call(e, "__wrapped__"), A = O && h.call(t, "__wrapped__");
			if (P || A) {
				var M = P ? e.value() : e, I = A ? t.value() : t;
				return b || (b = new n), g(M, I, r, m, b);
			}
		}
		return !!S && (b || (b = new n), i(e, t, r, m, g, b));
	};
}, function(e, t) {
	e.exports = function arraySome(e, t) {
		for (var r = -1, n = null == e ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
		return !1;
	};
}, function(e, t, r) {
	var n = r(43), a = r(259), o = r(127), i = r(138), s = r(260), c = r(86), u = 1, l = 2, p = "[object Boolean]", f = "[object Date]", d = "[object Error]", _ = "[object Map]", h = "[object Number]", m = "[object RegExp]", g = "[object Set]", b = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", w = "[object DataView]", E = n ? n.prototype : void 0, x = E ? E.valueOf : void 0;
	e.exports = function equalByTag(e, t, r, n, E, O, S) {
		switch (r) {
			case w:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;

			case y:
				return !(e.byteLength != t.byteLength || !O(new a(e), new a(t)));

			case p:
			case f:
			case h:
				return o(+e, +t);

			case d:
				return e.name == t.name && e.message == t.message;

			case m:
			case b:
				return e == t + "";

			case _:
				var P = s;

			case g:
				var A = n & u;
				if (P || (P = c), e.size != t.size && !A) return !1;
				var M = S.get(e);
				if (M) return M == t;
				n |= l, S.set(e, t);
				var I = i(P(e), P(t), n, E, O, S);
				return S.delete(e), I;

			case v:
				if (x) return x.call(e) == x.call(t);
		}
		return !1;
	};
}, function(e, t, r) {
	var n = r(17).Uint8Array;
	e.exports = n;
}, function(e, t) {
	e.exports = function mapToArray(e) {
		var t = -1, r = Array(e.size);
		return e.forEach((function(e, n) {
			r[++t] = [ n, e ];
		})), r;
	};
}, function(e, t, r) {
	var n = r(262), a = 1, o = Object.prototype.hasOwnProperty;
	e.exports = function equalObjects(e, t, r, i, s, c) {
		var u = r & a, l = n(e), p = l.length;
		if (p != n(t).length && !u) return !1;
		for (var f = p; f--; ) {
			var d = l[f];
			if (!(u ? d in t : o.call(t, d))) return !1;
		}
		var _ = c.get(e);
		if (_ && c.get(t)) return _ == t;
		var h = !0;
		c.set(e, t), c.set(t, e);
		for (var m = u; ++f < p; ) {
			var g = e[d = l[f]], b = t[d];
			if (i) var v = u ? i(b, g, d, t, e, c) : i(g, b, d, e, t, c);
			if (!(void 0 === v ? g === b || s(g, b, r, i, c) : v)) {
				h = !1;
				break;
			}
			m || (m = "constructor" == d);
		}
		if (h && !m) {
			var y = e.constructor, w = t.constructor;
			y != w && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof w && w instanceof w) && (h = !1);
		}
		return c.delete(e), c.delete(t), h;
	};
}, function(e, t, r) {
	var n = r(263), a = r(264), o = r(87);
	e.exports = function getAllKeys(e) {
		return n(e, o, a);
	};
}, function(e, t, r) {
	var n = r(134), a = r(8);
	e.exports = function baseGetAllKeys(e, t, r) {
		var o = t(e);
		return a(e) ? o : n(o, r(e));
	};
}, function(e, t, r) {
	var n = r(265), a = r(266), o = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, s = i ? function(e) {
		return null == e ? [] : (e = Object(e), n(i(e), (function(t) {
			return o.call(e, t);
		})));
	} : a;
	e.exports = s;
}, function(e, t) {
	e.exports = function arrayFilter(e, t) {
		for (var r = -1, n = null == e ? 0 : e.length, a = 0, o = []; ++r < n; ) {
			var i = e[r];
			t(i, r, e) && (o[a++] = i);
		}
		return o;
	};
}, function(e, t) {
	e.exports = function stubArray() {
		return [];
	};
}, function(e, t, r) {
	var n = r(268), a = r(59), o = r(8), i = r(88), s = r(140), c = r(89), u = Object.prototype.hasOwnProperty;
	e.exports = function arrayLikeKeys(e, t) {
		var r = o(e), l = !r && a(e), p = !r && !l && i(e), f = !r && !l && !p && c(e), d = r || l || p || f, _ = d ? n(e.length, String) : [], h = _.length;
		for (var m in e) !t && !u.call(e, m) || d && ("length" == m || p && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, h)) || _.push(m);
		return _;
	};
}, function(e, t) {
	e.exports = function baseTimes(e, t) {
		for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
		return n;
	};
}, function(e, t) {
	e.exports = function stubFalse() {
		return !1;
	};
}, function(e, t, r) {
	var n = r(28), a = r(85), o = r(20), i = {};
	i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0,
		i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1,
		e.exports = function baseIsTypedArray(e) {
			return o(e) && a(e.length) && !!i[n(e)];
		};
}, function(e, t, r) {
	(function(e) {
		var n = r(124), a = t && !t.nodeType && t, o = a && "object" == typeof e && e && !e.nodeType && e, i = o && o.exports === a && n.process, s = function() {
			try {
				var e = o && o.require && o.require("util").types;
				return e || i && i.binding && i.binding("util");
			} catch (e) {}
		}();
		e.exports = s;
	}).call(this, r(139)(e));
}, function(e, t, r) {
	var n = r(273)(Object.keys, Object);
	e.exports = n;
}, function(e, t) {
	e.exports = function overArg(e, t) {
		return function(r) {
			return e(t(r));
		};
	};
}, function(e, t, r) {
	var n = r(27)(r(17), "DataView");
	e.exports = n;
}, function(e, t, r) {
	var n = r(27)(r(17), "Promise");
	e.exports = n;
}, function(e, t, r) {
	var n = r(27)(r(17), "WeakMap");
	e.exports = n;
}, function(e, t, r) {
	var n = r(145), a = r(87);
	e.exports = function getMatchData(e) {
		for (var t = a(e), r = t.length; r--; ) {
			var o = t[r], i = e[o];
			t[r] = [ o, i, n(i) ];
		}
		return t;
	};
}, function(e, t, r) {
	var n = r(137), a = r(279), o = r(285), i = r(90), s = r(145), c = r(146), u = r(62), l = 1, p = 2;
	e.exports = function baseMatchesProperty(e, t) {
		return i(e) && s(t) ? c(u(e), t) : function(r) {
			var i = a(r, e);
			return void 0 === i && i === t ? o(r, e) : n(t, i, l | p);
		};
	};
}, function(e, t, r) {
	var n = r(147);
	e.exports = function get(e, t, r) {
		var a = null == e ? void 0 : n(e, t);
		return void 0 === a ? r : a;
	};
}, function(e, t, r) {
	var n = r(281), a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, o = /\\(\\)?/g, i = n((function(e) {
		var t = [];
		return 46 === e.charCodeAt(0) && t.push(""), e.replace(a, (function(e, r, n, a) {
			t.push(n ? a.replace(o, "$1") : r || e);
		})), t;
	}));
	e.exports = i;
}, function(e, t, r) {
	var n = r(282), a = 500;
	e.exports = function memoizeCapped(e) {
		var t = n(e, (function(e) {
			return r.size === a && r.clear(), e;
		})), r = t.cache;
		return t;
	};
}, function(e, t, r) {
	var n = r(81), a = "Expected a function";
	function memoize(e, t) {
		if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(a);
		var memoized = function() {
			var r = arguments, n = t ? t.apply(this, r) : r[0], a = memoized.cache;
			if (a.has(n)) return a.get(n);
			var o = e.apply(this, r);
			return memoized.cache = a.set(n, o) || a, o;
		};
		return memoized.cache = new (memoize.Cache || n), memoized;
	}
	memoize.Cache = n, e.exports = memoize;
}, function(e, t, r) {
	var n = r(284);
	e.exports = function toString(e) {
		return null == e ? "" : n(e);
	};
}, function(e, t, r) {
	var n = r(43), a = r(131), o = r(8), i = r(61), s = 1 / 0, c = n ? n.prototype : void 0, u = c ? c.toString : void 0;
	e.exports = function baseToString(e) {
		if ("string" == typeof e) return e;
		if (o(e)) return a(e, baseToString) + "";
		if (i(e)) return u ? u.call(e) : "";
		var t = e + "";
		return "0" == t && 1 / e == -s ? "-0" : t;
	};
}, function(e, t, r) {
	var n = r(286), a = r(287);
	e.exports = function hasIn(e, t) {
		return null != e && a(e, t, n);
	};
}, function(e, t) {
	e.exports = function baseHasIn(e, t) {
		return null != e && t in Object(e);
	};
}, function(e, t, r) {
	var n = r(148), a = r(59), o = r(8), i = r(140), s = r(85), c = r(62);
	e.exports = function hasPath(e, t, r) {
		for (var u = -1, l = (t = n(t, e)).length, p = !1; ++u < l; ) {
			var f = c(t[u]);
			if (!(p = null != e && r(e, f))) break;
			e = e[f];
		}
		return p || ++u != l ? p : !!(l = null == e ? 0 : e.length) && s(l) && i(f, l) && (o(e) || a(e));
	};
}, function(e, t, r) {
	var n = r(289), a = r(290), o = r(90), i = r(62);
	e.exports = function property(e) {
		return o(e) ? n(i(e)) : a(e);
	};
}, function(e, t) {
	e.exports = function baseProperty(e) {
		return function(t) {
			return null == t ? void 0 : t[e];
		};
	};
}, function(e, t, r) {
	var n = r(147);
	e.exports = function basePropertyDeep(e) {
		return function(t) {
			return n(t, e);
		};
	};
}, function(e, t, r) {
	var n = r(129), a = r(135), o = r(292), i = Math.max;
	e.exports = function findIndex(e, t, r) {
		var s = null == e ? 0 : e.length;
		if (!s) return -1;
		var c = null == r ? 0 : o(r);
		return c < 0 && (c = i(s + c, 0)), n(e, a(t, 3), c);
	};
}, function(e, t, r) {
	var n = r(293);
	e.exports = function toInteger(e) {
		var t = n(e), r = t % 1;
		return t == t ? r ? t - r : t : 0;
	};
}, function(e, t, r) {
	var n = r(294), a = 1 / 0, o = 17976931348623157e292;
	e.exports = function toFinite(e) {
		return e ? (e = n(e)) === a || e === -a ? (e < 0 ? -1 : 1) * o : e == e ? e : 0 : 0 === e ? e : 0;
	};
}, function(e, t, r) {
	var n = r(34), a = r(61), o = NaN, i = /^\s+|\s+$/g, s = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, u = /^0o[0-7]+$/i, l = parseInt;
	e.exports = function toNumber(e) {
		if ("number" == typeof e) return e;
		if (a(e)) return o;
		if (n(e)) {
			var t = "function" == typeof e.valueOf ? e.valueOf() : e;
			e = n(t) ? t + "" : t;
		}
		if ("string" != typeof e) return 0 === e ? e : +e;
		e = e.replace(i, "");
		var r = c.test(e);
		return r || u.test(e) ? l(e.slice(2), r ? 2 : 8) : s.test(e) ? o : +e;
	};
}, function(e) {
	e.exports = JSON.parse('{"name":"super-preloader","version":"6.11.3","description":"Super-preloader","main":"dist/Super_preloaderPlus_one_New.user.js","author":"Mach6","license":"GPL-3.0","bugs":{"url":"https://github.com/machsix/Super-preloader/issues"},"homepage":"https://github.com/machsix/Super-preloader","directories":{"doc":"docs"},"repository":{"type":"git","url":"git+https://github.com/machsix/Super-preloader.git"},"scripts":{"lint":"eslint \\"dist/*.json\\" \\"src/**/*.js\\" \\"ci/*.js\\"","format":"prettier --write \\"dist/*.json\\" \\"src/**/*.{js,css}\\" \\".ci/*.js\\" \\"docs/**/*.{js,md}\\"","format:check":"prettier --check \\"dist/*.json\\" \\"src/**/*.{js,css}\\" \\"ci/*.js\\" \\"docs/**/*.{js,md}\\"","format:staged":"pretty-quick --verbose --staged --write \\"dist/*.json\\" \\"src/**/*.{js,css}\\" \\"ci/*.js\\" \\"docs/**/*.{js,md}\\"","test":"npm run lint && npm run format:staged","dev":"webpack-dev-server --color --config webpack.dev.js","build":"webpack --no-cache --debug --config webpack.prod.js","build:dev":"webpack --config webpack.dev.js","docs:dev":"vuepress dev docs","docs:build":"vuepress build docs","docs:publish":"npm run docs:build && bash ./ci/gen_ghpage.sh","preversion":"npm run test && npm run docs:build","version":"npm run build  && npm run build:dev && git add dist/*.js && git add dist/*.json","postversion":"git add package.json package-lock.json","publish:patch":"npm --no-git-tag-version version patch","publish":"npm --no-git-tag-version version minor"},"husky":{"hooks":{"pre-commit":"npm run test"}},"keywords":["userscript"],"devDependencies":{"@vuepress/plugin-back-to-top":"1.2.0","@vuepress/plugin-google-analytics":"1.2.0","@vuepress/plugin-pwa":"1.2.0","vuepress":"1.2.0"},"dependencies":{"@babel/cli":"7.7.7","@babel/core":"7.7.7","@babel/plugin-transform-runtime":"7.7.6","@babel/preset-env":"7.7.7","@babel/runtime-corejs2":"7.7.7","babel-loader":"8.0.6","babel-plugin-lodash":"3.3.4","compare-versions":"3.5.1","css-loader":"3.4.0","detect-browser":"4.8.0","displacejs":"1.4.0","ejs-loader":"0.3.5","eslint":"6.8.0","eslint-config-prettier":"6.9.0","eslint-plugin-json":"2.0.1","eslint-plugin-prettier":"3.1.2","husky":"3.1.0","lodash":"4.17.15","lodash-webpack-plugin":"0.11.5","loglevel":"1.6.6","node-sass":"^4.13.0","prettier":"1.19.1","pretty-quick":"2.0.1","sass-loader":"^8.0.0","string-replace-loader":"2.2.0","terser-webpack-plugin":"2.3.1","to-string-loader":"^1.1.6","urlencode":"1.1.0","webpack":"^4.41.5","webpack-cli":"3.3.10","webpack-dev-server":"3.10.1","webpack-merge":"4.2.2","yargs":"15.0.2"}}');
}, function(e, t, r) {
	var n = r(80), a = r(128), o = r(130), i = r(83), s = r(297), c = r(86), u = 200;
	e.exports = function baseUniq(e, t, r) {
		var l = -1, p = a, f = e.length, d = !0, _ = [], h = _;
		if (r) d = !1, p = o; else if (f >= u) {
			var m = t ? null : s(e);
			if (m) return c(m);
			d = !1, p = i, h = new n;
		} else h = t ? [] : _;
		e: for (;++l < f; ) {
			var g = e[l], b = t ? t(g) : g;
			if (g = r || 0 !== g ? g : 0, d && b == b) {
				for (var v = h.length; v--; ) if (h[v] === b) continue e;
				t && h.push(b), _.push(g);
			} else p(h, b, r) || (h !== _ && h.push(b), _.push(g));
		}
		return _;
	};
}, function(e, t, r) {
	var n = r(144), a = r(298), o = r(86), i = n && 1 / o(new n([ , -0 ]))[1] == 1 / 0 ? function(e) {
		return new n(e);
	} : a;
	e.exports = i;
}, function(e, t) {
	e.exports = function noop() {};
}, function(e, t, r) {
	(t = r(63)(!1)).push([ e.i, '#sp-fw-container{z-index:999999 !important;text-align:left !important;line-height:13px !important}#sp-fw-container *{font-size:13px !important;color:black !important;float:none !important}#sp-fw-main-head{position:relative !important;top:0 !important;left:0 !important}#sp-fw-span-info{position:absolute !important;right:1px !important;top:0 !important;font-size:11px !important;line-height:11px !important;background:none !important;font-style:italic !important;color:#5a5a5a !important;text-shadow:white 0px 1px 1px !important}#sp-fw-container input{vertical-align:middle !important;display:inline-block !important;outline:none !important;height:13px !important;padding:0px !important;margin:0 !important;margin-right:3px !important}#sp-fw-container input[type="number"]{width:6ch !important;text-align:left !important;margin:0 3px !important}#sp-fw-container input[type="number"]:hover::-webkit-inner-spin-button{height:60px}#sp-fw-container input[type="checkbox"]{border:1px solid #b4b4b4 !important;padding:1px !important;width:13px !important;height:13px !important;background:none !important;cursor:pointer !important;visibility:visible !important;position:static !important}#sp-fw-container input[type="button"]{border:1px solid #ccc !important;cursor:pointer !important;background:none !important;width:auto !important;height:auto !important}#sp-fw-container li{list-style:none !important;margin:3px 0 !important;border:none !important;float:none !important}#sp-fw-container fieldset{border:2px groove #ccc !important;-moz-border-radius:3px !important;border-radius:3px !important;padding:4px 9px 6px 9px !important;margin:2px !important;display:block !important;width:auto !important;height:auto !important}#sp-fw-container legend{line-height:20px !important;margin-bottom:0px !important}#sp-fw-container fieldset>ul{padding:0 !important;margin:0 !important}#sp-fw-container ul#sp-fw-a_useiframe-extend{padding-left:40px !important}#sp-fw-rect{position:relative !important;top:0 !important;left:0 !important;float:right !important;height:10px !important;width:10px !important;padding:0 !important;margin:0 !important;-moz-border-radius:3px !important;border-radius:3px !important;border:1px solid white !important;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8) !important;-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8) !important;box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8) !important;opacity:0.8 !important}#sp-fw-dot,#sp-fw-cur-mode{position:absolute !important;z-index:9999 !important;width:5px !important;height:5px !important;padding:0 !important;-moz-border-radius:3px !important;border-radius:3px !important;border:1px solid white !important;opacity:1 !important;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9) !important;-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9) !important;box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9) !important}#sp-fw-dot{right:-3px !important;top:-3px !important}#sp-fw-cur-mode{left:-3px !important;top:-3px !important;width:6px !important;height:6px !important}#sp-fw-content{padding:0 !important;margin:5px 5px 0 0 !important;-moz-border-radius:3px !important;border-radius:3px !important;border:1px solid #a0a0a0 !important;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3) !important;-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3) !important;box-shadow:-2px 2px 5px rgba(0,0,0,0.3) !important}#sp-fw-main{padding:5px !important;border:1px solid white !important;-moz-border-radius:3px !important;border-radius:3px !important;background-color:#f2f2f7 !important;background:-moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;background:-webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important}#sp-fw-foot{position:relative !important;left:0 !important;right:0 !important;top:2px !important;min-height:20px !important}#sp-fw-container .sp-fw-spanbutton{padding:2px 3px !important;border:1px solid #ccc !important;-moz-border-radius:3px !important;border-radius:3px !important;cursor:pointer !important;background-color:#f9f9f9 !important;-webkit-box-shadow:inset 0 10px 5px white !important;-moz-box-shadow:inset 0 10px 5px white !important;box-shadow:inset 0 10px 5px white !important;display:inline-block}#sp-fw-container #sp-fw-savebutton{position:relative !important;left:96px !important}\n', "" ]),
		e.exports = t;
}, function(e, t, r) {
	(t = r(63)(!1)).push([ e.i, '#sp-prefs-setup {\n  z-index: 2147483647;\n  padding: 20px 30px;\n  box-sizing: content-box;\n  border-radius: 3px !important;\n  border: 1px solid #a0a0a0 !important;\n  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n  background: -moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;\n  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important;\n  font-family: "Arial", "sans-serif" !important;\n  color: transparent;\n  max-height: 80%;\n  overflow: auto;\n}\n#sp-prefs-setup * {\n  color: black;\n  text-align: left;\n  line-height: normal;\n  font-size: 12px;\n  min-height: 12px;\n}\n#sp-prefs-setup a {\n  color: black;\n  text-decoration: underline;\n}\n#sp-prefs-setup div {\n  text-align: center;\n  font-weight: bold;\n  font-size: 15px;\n}\n#sp-prefs-setup ul {\n  margin: 15px 0 15px 0;\n  padding: 0;\n  list-style: none;\n  background: none;\n  border: 0;\n}\n#sp-prefs-setup input,\n#sp-prefs-setup select {\n  border: 1px solid gray;\n  padding: 2px;\n  background: white;\n  margin: 0px;\n}\n#sp-prefs-setup li {\n  margin: 0;\n  padding: 5px 0;\n  vertical-align: middle;\n  background: none;\n  border: 0;\n  font-size: 12px;\n}\n#sp-prefs-setup button {\n  margin: 0 10px;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #f9f9f9 !important;\n  border: 1px solid #ccc !important;\n  box-shadow: inset 0 10px 5px white !important;\n  border-radius: 3px !important;\n  padding: 3px 3px !important;\n}\n#sp-prefs-setup textarea {\n  width: 98%;\n  height: 60px;\n  margin: 3px 0;\n  font-weight: 50;\n}\n#sp-prefs-setup b {\n  font-weight: bold;\n  font-family: "微软雅黑", sans-serif;\n}\n#sp-prefs-setup button:disabled {\n  color: gray;\n}\n', "" ]),
		e.exports = t;
}, function(e, t, r) {
	(t = r(63)(!1)).push([ e.i, ".sp-prefs-spinner {\n  margin: 40px auto;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  font-size: 10px;\n}\n\n.sp-prefs-spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 25%;\n  display: inline-block;\n\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.sp-prefs-spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sp-prefs-spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n.sp-prefs-spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sp-prefs-spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n  20% { -webkit-transform: scaleY(1.0) }\n}\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }  20% {\n    transform: scaleY(1.0);\n    -webkit-transform: scaleY(1.0);\n  }\n}\n", "" ]),
		e.exports = t;
}, function(e, t, r) {
	(t = r(63)(!1)).push([ e.i, ".sp-separator {\n  line-height: 1.8 !important;\n  opacity: 1 !important;\n  position: relative !important;\n  float: none !important;\n  top: 0 !important;\n  left: 0 !important;\n  min-width: 366px;\n  width: auto;\n  text-align: center !important;\n  font-size: 14px !important;\n  display: block !important;\n  padding: 3px 0 !important;\n  margin: 5px 10px 8px;\n  clear: both !important;\n  border-style: solid !important;\n  border-color: #cccccc !important;\n  border-width: 1px !important;\n  -moz-border-radius: 30px !important;\n  border-radius: 30px !important;\n  background-color: #ffffff !important;\n}\n\n.sp-separator:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n\n#sp-separator-hover {\n  display: none;\n}\n\n.sp-separator:hover #sp-separator-hover {\n  display: block;\n}\n\n.sp-separator .sp-someinfo {\n  position: absolute !important;\n  right: 10px !important;\n  font-size: 12px !important;\n  font-style: italic !important;\n  background: none !important;\n}\n\n.sp-separator img {\n  vertical-align: middle !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  margin: 0 5px !important;\n  border: none !important;\n  display: inline-block !important;\n  float: none !important;\n  width: auto;\n  height: auto;\n}\n\n.sp-separator a {\n  margin: 0 20px 0 -6px !important;\n  display: inline !important;\n  text-shadow: #fff 0 1px 0 !important;\n  background: none !important;\n  color: #595959 !important;\n}\n\n.sp-separator input {\n  padding: 0 !important;\n  line-height: 23px !important;\n}\n\n.sp-separator .sp-md-span {\n  font-weight: bold !important;\n  margin: 0 20px !important;\n}\n\n#sp-sp-md-number {\n  width: 6ch !important;\n  vertical-align: middle !important;\n  display: inline-block !important;\n  text-align: left !important;\n}\n", "" ]),
		e.exports = t;
}, function(e, t, r) {
	r(304), e.exports = r(3).Object.entries;
}, function(e, t, r) {
	var n = r(7), a = r(305)(!0);
	n(n.S, "Object", {
		entries: function entries(e) {
			return a(e);
		}
	});
}, function(e, t, r) {
	var n = r(11), a = r(31), o = r(15), i = r(44).f;
	e.exports = function(e) {
		return function(t) {
			for (var r, s = o(t), c = a(s), u = c.length, l = 0, p = []; u > l; ) r = c[l++],
			n && !i.call(s, r) || p.push(e ? [ r, s[r] ] : s[r]);
			return p;
		};
	};
}, function(module, exports) {
	module.exports = function(obj) {
		obj || (obj = {});
		var __t, __p = "";
		with (obj) __p += "<div>Super_preloaderPlus_one_New设置</div>\n<ul>\n  <li>脚本版本: <b>" + (null == (__t = scriptInfo.version) ? "" : __t) + "</b> 更新时间: <b>" + (null == (__t = scriptInfo.updateTime) ? "" : __t) + '</b>\n    <a id="sp-prefs-homepageURL" target="_blank" href="' + (null == (__t = scriptInfo.homepageURL) ? "" : __t) + '" />脚本主页</a>\n    <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' + (null == (__t = scriptInfo.homepageURL + "/feedback") ? "" : __t) + '">反馈规则</a>\n  </li>\n  <li>维护者: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b> 更新日志:\n    <b>' + (null == (__t = scriptInfo.changelog) ? "" : __t) + "</b></li>\n  <li>规则数目: <b>" + (null == (__t = prefs.numOfRule) ? "" : __t) + "</b> 下次更新时间: <b>" + (null == (__t = nextUpdateDate) ? "" : __t) + '</b>\n    <button id="sp-prefs-updaterule">更新规则</button></li>\n  <li><input type="checkbox" id="sp-prefs-debug" /> 调试模式</li>\n  <li><input title="强制开启中文界面" type="checkbox" id="sp-prefs-ChineseUI" /> 中文界面</li>\n  <li><input type="checkbox" id="sp-prefs-enableHistory" /> 添加下一页到历史记录</li>\n  <li><input type="checkbox" id="sp-prefs-dblclick_pause" /> 鼠标双击暂停翻页（默认为 Ctrl + 长按左键）</li>\n  <li><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> 全局启用iframe方式\n  <li><input title="启用自动翻页，否则仅启用预读" type="checkbox" id="sp-prefs-SITEINFO_D-a_enable" checked /> 启用自动翻页 </li>\n  <li><input type="checkbox" id="sp-prefs-arrowKeyPage" /> 使用 &larr; &rarr; 翻页 </li>\n  <li><input title="强行拼接规则中没有的站点，不建议启用" type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> 启用强制拼接（不建议）</li>\n  <li>自定义排除列表：\n    <div><textarea id="sp-prefs-excludes" placeholder="自定义排除列表，支持通配符。\\n例如：http://*.douban.com/*"></textarea></div>\n  </li>\n  <li>自定义站点规则：\n    <div><textarea id="sp-prefs-custom_siteinfo" placeholder="自定义站点规则"></textarea></div>\n  </li>\n</ul>\n<div><button id="sp-prefs-ok" style="width:100px;">确定</button><button id="sp-prefs-cancel"\n    style="width:100px;">取消</button><button id="sp-prefs-reset" style="width:100px;">重置</button></div>\n';
		return __p;
	};
}, function(module, exports) {
	module.exports = function(obj) {
		obj || (obj = {});
		var __t, __p = "";
		with (obj) __p += "<div>Super_preloaderPlus_one_New Settings</div>\n<ul>\n  <li>Version: <b>" + (null == (__t = scriptInfo.version) ? "" : __t) + "</b> Update time: <b>" + (null == (__t = scriptInfo.updateTime) ? "" : __t) + '</b>\n    <a id="sp-prefs-homepageURL" target="_blank" href="' + (null == (__t = scriptInfo.homepageURL) ? "" : __t) + '" />Homepage</a>\n    <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' + (null == (__t = scriptInfo.homepageURL + "/feedback") ? "" : __t) + '" /> Feedback\n    </a>\n  </li>\n  <li>Maintainer: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b> Changelog:\n    <b>' + (null == (__t = scriptInfo.changelog) ? "" : __t) + "</b></li>\n  <li>Number of Rules: <b>" + (null == (__t = prefs.numOfRule) ? "" : __t) + "</b> Next update: <b>" + (null == (__t = nextUpdateDate) ? "" : __t) + '</b> <button\n      id="sp-prefs-updaterule">Update rules</button></li>\n  <li><input type="checkbox" id="sp-prefs-debug" /> Debug mode</li>\n  <li><input type="checkbox" tile="English/Chinese UI" id="sp-prefs-ChineseUI" /> Chinese UI</li>\n  <li><input type="checkbox" id="sp-prefs-enableHistory" /> Add next page to history</li>\n  <li><input type="checkbox" id="sp-prefs-dblclick_pause" /> Double click to stop preload (Default: Ctrl + Long Left)\n  </li>\n  <li><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> Enable iframe mode globally</li>\n  <li><input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled"\n      id="sp-prefs-SITEINFO_D-a_enable" checked /> Enable autopagger globally</li>\n  <li><input type="checkbox" id="sp-prefs-arrowKeyPage" /> Turn to the next page with ← →</li>\n  <li><input type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> Mandatorily join pages if not covered by the\n    rules</li>\n  <li>Custom excludes:\n    <div><textarea id="sp-prefs-excludes"\n        placeholder="Customized excludes, support regex\\nEx: http://*.douban.com/*"></textarea></div>\n  </li>\n  <li>Custom rules:\n    <div><textarea id="sp-prefs-custom_siteinfo" placeholder="Custom rules"></textarea></div>\n  </li>\n</ul>\n<div><button id="sp-prefs-ok" style="width:100px;">OK</button><button id="sp-prefs-cancel"\n    style="width:100px;">Cancel</button><button id="sp-prefs-reset" style="width:100px;">Reset</button></div>\n';
		return __p;
	};
}, function(module, exports) {
	module.exports = function(obj) {
		obj || (obj = {});
		var __t, __p = "";
		with (obj) __p += '<div id="sp-fw-rect" style="background-color:#000;">\n  <div id="sp-fw-dot" style="display:none;"></div>\n  <div id="sp-fw-cur-mode" style="display:none;"></div>\n</div>\n<div id="sp-fw-content" style="display:none;">\n  <div id="sp-fw-main">\n    <div id="sp-fw-main-head">\n      <input type="checkbox" title="使用翻页模式,否则使用预读模式" id="sp-fw-a_enable" name="sp-fw-a_enable" />使用翻页模式\n      <span id="sp-fw-span-info">Super_preloader</span>\n    </div>\n    <fieldset>\n      <legend title="预读模式的相关设置">预读设置</legend>\n      <ul>\n        <li>\n          <input type="checkbox" title="使用iframe预先载入好下一页到缓存,否则使用xhr请求下一页源码,取出所有的图片进行预读" id="sp-fw-useiframe"\n            name="sp-fw-useiframe" />使用iframe方式\n        </li>\n        <li>\n          <input type="checkbox" title="查看预读的内容,将其显示在页面的底部,看看预读了些什么." id="sp-fw-viewcontent"\n            name="sp-fw-viewcontent" />查看预读的内容\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id="sp-fw-autopager-field" style="display:block;">\n      <legend title="自动翻页模式的相关设置">翻页设置</legend>\n      <ul>\n        <li>\n          <input type="checkbox" title="使用iframe方式进行翻页,否则使用xhr方式翻页,可以解决某些网页xhr方式无法翻页的问题,如果xhr翻页正常的话,就不要勾这项吧."\n            id="sp-fw-a_useiframe" name="sp-fw-a_useiframe" />使用iframe方式</input>\n          <input type="checkbox" title="每个下一页都用新的iframe，可以解决下一页图片或按钮点击的问题" id="sp-fw-a_newIframe"\n            name="sp-fw-a_newIframe">新iframe</input>\n          <ul id="sp-fw-a_useiframe-extend">\n            <li>\n              <input type="checkbox" title="等待iframe完全载入后(发生load事件),将内容取出,否则在DOM完成后,就直接取出来..(勾上后,会比较慢,但是可能会解决一些问题.)"\n                id="sp-fw-a_iloaded" name="sp-fw-a_iloaded" />等待iframe完全载入\n            </li>\n            <li>\n              <input type="number" min="0" title="在可以从iframe取数据的时候,继续等待设定的ms才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)"\n                id="sp-fw-a_itimeout" name="sp-fw-a_itimeout" />ms延时取出\n            </li>\n          </ul>\n        </li>\n        <li>\n          <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA"\n            title="不会自动拼接上来,会出现一个类似翻页导航的的图形,点击翻页(在论坛的帖子内容页面,可以考虑勾选此项,从而不影响你的回帖)" />手动模式\n        </li>\n        <li>\n          剩余<input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain"\n            title="当剩余的页面的高度是浏览器可见窗口高度的几倍开始翻页" />倍页面高度触发\n        </li>\n        <li>\n          最多翻<input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage"\n            title="最多翻页数量,当达到这个翻页数量的时候,自动翻页停止." />页\n        </li>\n        <li>\n          <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator"\n            title="分割页面主要内容的导航条,可以进行页面主要内容之间的快速跳转定位等." />显示翻页导航\n        </li>\n        <li>\n          <input type="checkbox" title="将下一页的body部分内容整个拼接上来.(当需翻页的网站没有高级规则时,该项强制勾选,无法取消.)" id="sp-fw-a_force"\n            name="sp-fw-a_force" />强制拼接\n        </li>\n        <li>\n          <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0" title="在JS加载后,立即连续翻后面设定的页数" />启用\n          立即翻<input type="number" min="1" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="连续翻页的数量" />页\n          <span class="sp-fw-spanbutton" title="现在立即开始连续翻页" id="sp-fw-a_starti">开始</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id="sp-fw-foot">\n      <input type="checkbox" id="sp-fw-enable" title="总开关,启用js,否则禁用." name="sp-fw-enable" />启用\n      <span id="sp-fw-setup" class="sp-fw-spanbutton" title="打开设置窗口">设置</span>\n      <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="保存设置">保存</span>\n    </div>\n  </div>\n</div>\n';
		return __p;
	};
}, function(module, exports) {
	module.exports = function(obj) {
		obj || (obj = {});
		var __t, __p = "";
		with (obj) __p += '<div id="sp-fw-rect" style="background-color:#000;">\n  <div id="sp-fw-dot" style="display:none;"></div>\n  <div id="sp-fw-cur-mode" style="display:none;"></div>\n</div>\n<div id="sp-fw-content" style="display:none;">\n  <div id="sp-fw-main">\n    <div id="sp-fw-main-head">\n      <input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled" id="sp-fw-a_enable"\n        name="sp-fw-a_enable" />Enable autopagger\n      <span id="sp-fw-span-info">Super_preloader</span>\n    </div>\n    <fieldset>\n      <legend title="Preloader helps accelerating loading">Preloader Settings</legend>\n      <ul>\n        <li>\n          <input type="checkbox"\n            title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal."\n            id="sp-fw-useiframe" name="sp-fw-useiframe" />Use iframe\n          <input type="checkbox" title="Check preload contents." id="sp-fw-viewcontent" name="sp-fw-viewcontent" />Show\n          preloaded content\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id="sp-fw-autopager-field" style="display:block;">\n      <legend title="Autopager frees you from clicking next page">Autopager Settings</legend>\n      <ul>\n        <li>\n          <input type="checkbox"\n            title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal"\n            id="sp-fw-a_useiframe" name="sp-fw-a_useiframe" />Use iframe</input>\n          <input type="checkbox" title="Use a new iframe for the next page. It may solve problems with figures"\n            id="sp-fw-a_newIframe" name="sp-fw-a_newIframe">Use new iframe</input>\n          <ul id="sp-fw-a_useiframe-extend">\n            <li>\n              <input type="checkbox" title="Append the content untill iframe is fully loaded" id="sp-fw-a_iloaded"\n                name="sp-fw-a_iloaded" />Wait iframe to be fully loaded\n            </li>\n            <li>\n              <input type="number" min="0"\n                title="Wait for X ms untill the content is appended to the current page. (Default: 0)"\n                id="sp-fw-a_itimeout" name="sp-fw-a_itimeout" /> ms delay\n            </li>\n          </ul>\n        </li>\n        <li>\n          <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA"\n            title="The next page won\\\'t be appended to the current page and you need to click a button" />Manual mode\n        </li>\n        <li>\n          Trick autopager until the height is <input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain" />x\n          page height\n        </li>\n        <li>\n          Turn at most <input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage" /> pages\n        </li>\n        <li>\n          <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator"\n            title="Show the page navigation bar" />Navigation bar\n        </li>\n        <li>\n          <input type="checkbox"\n            title="Append the whole next page to current page (When there is not rule for the website, this is the only method)"\n            id="sp-fw-a_force" name="sp-fw-a_force" />Force to join page\n        </li>\n        <li>\n          <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0"\n            title="Turn X pages instantly once the script is loaded. This is good for some gallery." />Turn <input\n            type="number" min="1" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="number of pages" /> pages\n          instantly\n          <span class="sp-fw-spanbutton" id="sp-fw-a_starti">Start</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id="sp-fw-foot">\n      <input type="checkbox" id="sp-fw-enable" title="Enable for thie website" name="sp-fw-enable" />Enable\n      <span id="sp-fw-setup" class="sp-fw-spanbutton" title="Global Settings">Global Settings</span>\n      <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="Save settings">Save</span>\n    </div>\n  </div>\n</div>\n';
		return __p;
	};
}, function(e, t, r) {
	r(311);
	var n = r(3).Object;
	e.exports = function defineProperty(e, t, r) {
		return n.defineProperty(e, t, r);
	};
}, function(e, t, r) {
	var n = r(7);
	n(n.S + n.F * !r(11), "Object", {
		defineProperty: r(16).f
	});
}, function(e, t, r) {
	r(313);
	var n = r(3).Object;
	e.exports = function defineProperties(e, t) {
		return n.defineProperties(e, t);
	};
}, function(e, t, r) {
	var n = r(7);
	n(n.S + n.F * !r(11), "Object", {
		defineProperties: r(117)
	});
}, function(e, t, r) {
	r(315), e.exports = r(3).Object.getOwnPropertyDescriptors;
}, function(e, t, r) {
	var n = r(7), a = r(316), o = r(15), i = r(93), s = r(317);
	n(n.S, "Object", {
		getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
			for (var t, r, n = o(e), c = i.f, u = a(n), l = {}, p = 0; u.length > p; ) void 0 !== (r = c(n, t = u[p++])) && s(l, t, r);
			return l;
		}
	});
}, function(e, t, r) {
	var n = r(92), a = r(64), o = r(12), i = r(6).Reflect;
	e.exports = i && i.ownKeys || function ownKeys(e) {
		var t = n.f(o(e)), r = a.f;
		return r ? t.concat(r(e)) : t;
	};
}, function(e, t, r) {
	"use strict";
	var n = r(16), a = r(42);
	e.exports = function(e, t, r) {
		t in e ? n.f(e, t, a(0, r)) : e[t] = r;
	};
}, function(e, t, r) {
	r(319);
	var n = r(3).Object;
	e.exports = function getOwnPropertyDescriptor(e, t) {
		return n.getOwnPropertyDescriptor(e, t);
	};
}, function(e, t, r) {
	var n = r(15), a = r(93).f;
	r(110)("getOwnPropertyDescriptor", (function() {
		return function getOwnPropertyDescriptor(e, t) {
			return a(n(e), t);
		};
	}));
}, function(e, t, r) {
	r(321), e.exports = r(3).Object.getOwnPropertySymbols;
}, function(e, t, r) {
	"use strict";
	var n = r(6), a = r(23), o = r(11), i = r(7), s = r(115), c = r(322).KEY, u = r(26), l = r(72), p = r(54), f = r(51), d = r(9), _ = r(149), h = r(323), m = r(324), g = r(112), b = r(12), v = r(25), y = r(49), w = r(15), E = r(75), x = r(42), O = r(116), S = r(325), P = r(93), A = r(64), M = r(16), I = r(31), D = P.f, C = M.f, T = S.f, B = n.Symbol, k = n.JSON, L = k && k.stringify, R = d("_hidden"), U = d("toPrimitive"), j = {}.propertyIsEnumerable, W = l("symbol-registry"), N = l("symbols"), K = l("op-symbols"), F = Object.prototype, z = "function" == typeof B && !!A.f, q = n.QObject, G = !q || !q.prototype || !q.prototype.findChild, H = o && u((function() {
		return 7 != O(C({}, "a", {
			get: function() {
				return C(this, "a", {
					value: 7
				}).a;
			}
		})).a;
	})) ? function(e, t, r) {
		var n = D(F, t);
		n && delete F[t], C(e, t, r), n && e !== F && C(F, t, n);
	} : C, wrap = function(e) {
		var t = N[e] = O(B.prototype);
		return t._k = e, t;
	}, Y = z && "symbol" == typeof B.iterator ? function(e) {
		return "symbol" == typeof e;
	} : function(e) {
		return e instanceof B;
	}, V = function defineProperty(e, t, r) {
		return e === F && V(K, t, r), b(e), t = E(t, !0), b(r), a(N, t) ? (r.enumerable ? (a(e, R) && e[R][t] && (e[R][t] = !1),
			r = O(r, {
				enumerable: x(0, !1)
			})) : (a(e, R) || C(e, R, x(1, {})), e[R][t] = !0), H(e, t, r)) : C(e, t, r);
	}, J = function defineProperties(e, t) {
		b(e);
		for (var r, n = m(t = w(t)), a = 0, o = n.length; o > a; ) V(e, r = n[a++], t[r]);
		return e;
	}, Z = function propertyIsEnumerable(e) {
		var t = j.call(this, e = E(e, !0));
		return !(this === F && a(N, e) && !a(K, e)) && (!(t || !a(this, e) || !a(N, e) || a(this, R) && this[R][e]) || t);
	}, X = function getOwnPropertyDescriptor(e, t) {
		if (e = w(e), t = E(t, !0), e !== F || !a(N, t) || a(K, t)) {
			var r = D(e, t);
			return !r || !a(N, t) || a(e, R) && e[R][t] || (r.enumerable = !0), r;
		}
	}, $ = function getOwnPropertyNames(e) {
		for (var t, r = T(w(e)), n = [], o = 0; r.length > o; ) a(N, t = r[o++]) || t == R || t == c || n.push(t);
		return n;
	}, Q = function getOwnPropertySymbols(e) {
		for (var t, r = e === F, n = T(r ? K : w(e)), o = [], i = 0; n.length > i; ) !a(N, t = n[i++]) || r && !a(F, t) || o.push(N[t]);
		return o;
	};
	z || (s((B = function Symbol() {
		if (this instanceof B) throw TypeError("Symbol is not a constructor!");
		var e = f(arguments.length > 0 ? arguments[0] : void 0), $set = function(t) {
			this === F && $set.call(K, t), a(this, R) && a(this[R], e) && (this[R][e] = !1),
				H(this, e, x(1, t));
		};
		return o && G && H(F, e, {
			configurable: !0,
			set: $set
		}), wrap(e);
	}).prototype, "toString", (function toString() {
		return this._k;
	})), P.f = X, M.f = V, r(92).f = S.f = $, r(44).f = Z, A.f = Q, o && !r(41) && s(F, "propertyIsEnumerable", Z, !0),
		_.f = function(e) {
			return wrap(d(e));
		}), i(i.G + i.W + i.F * !z, {
		Symbol: B
	});
	for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te; ) d(ee[te++]);
	for (var re = I(d.store), ne = 0; re.length > ne; ) h(re[ne++]);
	i(i.S + i.F * !z, "Symbol", {
		for: function(e) {
			return a(W, e += "") ? W[e] : W[e] = B(e);
		},
		keyFor: function keyFor(e) {
			if (!Y(e)) throw TypeError(e + " is not a symbol!");
			for (var t in W) if (W[t] === e) return t;
		},
		useSetter: function() {
			G = !0;
		},
		useSimple: function() {
			G = !1;
		}
	}), i(i.S + i.F * !z, "Object", {
		create: function create(e, t) {
			return void 0 === t ? O(e) : J(O(e), t);
		},
		defineProperty: V,
		defineProperties: J,
		getOwnPropertyDescriptor: X,
		getOwnPropertyNames: $,
		getOwnPropertySymbols: Q
	});
	var ae = u((function() {
		A.f(1);
	}));
	i(i.S + i.F * ae, "Object", {
		getOwnPropertySymbols: function getOwnPropertySymbols(e) {
			return A.f(y(e));
		}
	}), k && i(i.S + i.F * (!z || u((function() {
		var e = B();
		return "[null]" != L([ e ]) || "{}" != L({
			a: e
		}) || "{}" != L(Object(e));
	}))), "JSON", {
		stringify: function stringify(e) {
			for (var t, r, n = [ e ], a = 1; arguments.length > a; ) n.push(arguments[a++]);
			if (r = t = n[1], (v(t) || void 0 !== e) && !Y(e)) return g(t) || (t = function(e, t) {
				if ("function" == typeof r && (t = r.call(this, e, t)), !Y(t)) return t;
			}), n[1] = t, L.apply(k, n);
		}
	}), B.prototype[U] || r(24)(B.prototype, U, B.prototype.valueOf), p(B, "Symbol"),
		p(Math, "Math", !0), p(n.JSON, "JSON", !0);
}, function(e, t, r) {
	var n = r(51)("meta"), a = r(25), o = r(23), i = r(16).f, s = 0, c = Object.isExtensible || function() {
		return !0;
	}, u = !r(26)((function() {
		return c(Object.preventExtensions({}));
	})), setMeta = function(e) {
		i(e, n, {
			value: {
				i: "O" + ++s,
				w: {}
			}
		});
	}, l = e.exports = {
		KEY: n,
		NEED: !1,
		fastKey: function(e, t) {
			if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
			if (!o(e, n)) {
				if (!c(e)) return "F";
				if (!t) return "E";
				setMeta(e);
			}
			return e[n].i;
		},
		getWeak: function(e, t) {
			if (!o(e, n)) {
				if (!c(e)) return !0;
				if (!t) return !1;
				setMeta(e);
			}
			return e[n].w;
		},
		onFreeze: function(e) {
			return u && l.NEED && c(e) && !o(e, n) && setMeta(e), e;
		}
	};
}, function(e, t, r) {
	var n = r(6), a = r(3), o = r(41), i = r(149), s = r(16).f;
	e.exports = function(e) {
		var t = a.Symbol || (a.Symbol = o ? {} : n.Symbol || {});
		"_" == e.charAt(0) || e in t || s(t, e, {
			value: i.f(e)
		});
	};
}, function(e, t, r) {
	var n = r(31), a = r(64), o = r(44);
	e.exports = function(e) {
		var t = n(e), r = a.f;
		if (r) for (var i, s = r(e), c = o.f, u = 0; s.length > u; ) c.call(e, i = s[u++]) && t.push(i);
		return t;
	};
}, function(e, t, r) {
	var n = r(15), a = r(92).f, o = {}.toString, i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	e.exports.f = function getOwnPropertyNames(e) {
		return i && "[object Window]" == o.call(e) ? function(e) {
			try {
				return a(e);
			} catch (e) {
				return i.slice();
			}
		}(e) : a(n(e));
	};
}, function(e, t, r) {
	r(327), e.exports = r(3).Object.assign;
}, function(e, t, r) {
	var n = r(7);
	n(n.S + n.F, "Object", {
		assign: r(328)
	});
}, function(e, t, r) {
	"use strict";
	var n = r(11), a = r(31), o = r(64), i = r(44), s = r(49), c = r(107), u = Object.assign;
	e.exports = !u || r(26)((function() {
		var e = {}, t = {}, r = Symbol(), n = "abcdefghijklmnopqrst";
		return e[r] = 7, n.split("").forEach((function(e) {
			t[e] = e;
		})), 7 != u({}, e)[r] || Object.keys(u({}, t)).join("") != n;
	})) ? function assign(e, t) {
		for (var r = s(e), u = arguments.length, l = 1, p = o.f, f = i.f; u > l; ) for (var d, _ = c(arguments[l++]), h = p ? a(_).concat(p(_)) : a(_), m = h.length, g = 0; m > g; ) d = h[g++],
		n && !f.call(_, d) || (r[d] = _[d]);
		return r;
	} : u;
}, function(e, t, r) {
	"use strict";
	function hasOwnProperty(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	e.exports = function(e, t, r, a) {
		t = t || "&", r = r || "=";
		var o = {};
		if ("string" != typeof e || 0 === e.length) return o;
		var i = /\+/g;
		e = e.split(t);
		var s = 1e3;
		a && "number" == typeof a.maxKeys && (s = a.maxKeys);
		var c = e.length;
		s > 0 && c > s && (c = s);
		for (var u = 0; u < c; ++u) {
			var l, p, f, d, _ = e[u].replace(i, "%20"), h = _.indexOf(r);
			h >= 0 ? (l = _.substr(0, h), p = _.substr(h + 1)) : (l = _, p = ""), f = decodeURIComponent(l),
				d = decodeURIComponent(p), hasOwnProperty(o, f) ? n(o[f]) ? o[f].push(d) : o[f] = [ o[f], d ] : o[f] = d;
		}
		return o;
	};
	var n = Array.isArray || function(e) {
		return "[object Array]" === Object.prototype.toString.call(e);
	};
}, function(e, t, r) {
	"use strict";
	var stringifyPrimitive = function(e) {
		switch (typeof e) {
			case "string":
				return e;

			case "boolean":
				return e ? "true" : "false";

			case "number":
				return isFinite(e) ? e : "";

			default:
				return "";
		}
	};
	e.exports = function(e, t, r, o) {
		return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? map(a(e), (function(a) {
			var o = encodeURIComponent(stringifyPrimitive(a)) + r;
			return n(e[a]) ? map(e[a], (function(e) {
				return o + encodeURIComponent(stringifyPrimitive(e));
			})).join(t) : o + encodeURIComponent(stringifyPrimitive(e[a]));
		})).join(t) : o ? encodeURIComponent(stringifyPrimitive(o)) + r + encodeURIComponent(stringifyPrimitive(e)) : "";
	};
	var n = Array.isArray || function(e) {
		return "[object Array]" === Object.prototype.toString.call(e);
	};
	function map(e, t) {
		if (e.map) return e.map(t);
		for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
		return r;
	}
	var a = Object.keys || function(e) {
		var t = [];
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
		return t;
	};
}, function(e, t, r) {
	"use strict";
	t.byteLength = function byteLength(e) {
		var t = getLens(e), r = t[0], n = t[1];
		return 3 * (r + n) / 4 - n;
	}, t.toByteArray = function toByteArray(e) {
		var t, r, n = getLens(e), i = n[0], s = n[1], c = new o(function _byteLength(e, t, r) {
			return 3 * (t + r) / 4 - r;
		}(0, i, s)), u = 0, l = s > 0 ? i - 4 : i;
		for (r = 0; r < l; r += 4) t = a[e.charCodeAt(r)] << 18 | a[e.charCodeAt(r + 1)] << 12 | a[e.charCodeAt(r + 2)] << 6 | a[e.charCodeAt(r + 3)],
			c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
		2 === s && (t = a[e.charCodeAt(r)] << 2 | a[e.charCodeAt(r + 1)] >> 4, c[u++] = 255 & t);
		1 === s && (t = a[e.charCodeAt(r)] << 10 | a[e.charCodeAt(r + 1)] << 4 | a[e.charCodeAt(r + 2)] >> 2,
			c[u++] = t >> 8 & 255, c[u++] = 255 & t);
		return c;
	}, t.fromByteArray = function fromByteArray(e) {
		for (var t, r = e.length, a = r % 3, o = [], i = 0, s = r - a; i < s; i += 16383) o.push(encodeChunk(e, i, i + 16383 > s ? s : i + 16383));
		1 === a ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === a && (t = (e[r - 2] << 8) + e[r - 1],
			o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
		return o.join("");
	};
	for (var n = [], a = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = i.length; s < c; ++s) n[s] = i[s],
		a[i.charCodeAt(s)] = s;
	function getLens(e) {
		var t = e.length;
		if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
		var r = e.indexOf("=");
		return -1 === r && (r = t), [ r, r === t ? 0 : 4 - r % 4 ];
	}
	function encodeChunk(e, t, r) {
		for (var a, o, i = [], s = t; s < r; s += 3) a = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
			i.push(n[(o = a) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
		return i.join("");
	}
	a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63;
}, function(e, t) {
	t.read = function(e, t, r, n, a) {
		var o, i, s = 8 * a - n - 1, c = (1 << s) - 1, u = c >> 1, l = -7, p = r ? a - 1 : 0, f = r ? -1 : 1, d = e[t + p];
		for (p += f, o = d & (1 << -l) - 1, d >>= -l, l += s; l > 0; o = 256 * o + e[t + p],
			p += f, l -= 8) ;
		for (i = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; i = 256 * i + e[t + p], p += f,
			l -= 8) ;
		if (0 === o) o = 1 - u; else {
			if (o === c) return i ? NaN : 1 / 0 * (d ? -1 : 1);
			i += Math.pow(2, n), o -= u;
		}
		return (d ? -1 : 1) * i * Math.pow(2, o - n);
	}, t.write = function(e, t, r, n, a, o) {
		var i, s, c, u = 8 * o - a - 1, l = (1 << u) - 1, p = l >> 1, f = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : o - 1, _ = n ? 1 : -1, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2),
		t * (c = Math.pow(2, -i)) < 1 && (i--, c *= 2), (t += i + p >= 1 ? f / c : f * Math.pow(2, 1 - p)) * c >= 2 && (i++,
			c /= 2), i + p >= l ? (s = 0, i = l) : i + p >= 1 ? (s = (t * c - 1) * Math.pow(2, a),
			i += p) : (s = t * Math.pow(2, p - 1) * Math.pow(2, a), i = 0)); a >= 8; e[r + d] = 255 & s,
				 d += _, s /= 256, a -= 8) ;
		for (i = i << a | s, u += a; u > 0; e[r + d] = 255 & i, d += _, i /= 256, u -= 8) ;
		e[r + d - _] |= 128 * h;
	};
}, function(e, t) {
	var r = {}.toString;
	e.exports = Array.isArray || function(e) {
		return "[object Array]" == r.call(e);
	};
}, function(e, t, r) {
	"use strict";
	(function(t) {
		var n = r(33).Buffer, a = r(335), o = e.exports;
		o.encodings = null, o.defaultCharUnicode = "�", o.defaultCharSingleByte = "?", o.encode = function encode(e, t, r) {
			e = "" + (e || "");
			var a = o.getEncoder(t, r), i = a.write(e), s = a.end();
			return s && s.length > 0 ? n.concat([ i, s ]) : i;
		}, o.decode = function decode(e, t, r) {
			"string" == typeof e && (o.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"),
				o.skipDecodeWarning = !0), e = n.from("" + (e || ""), "binary"));
			var a = o.getDecoder(t, r), i = a.write(e), s = a.end();
			return s ? i + s : i;
		}, o.encodingExists = function encodingExists(e) {
			try {
				return o.getCodec(e), !0;
			} catch (e) {
				return !1;
			}
		}, o.toEncoding = o.encode, o.fromEncoding = o.decode, o._codecDataCache = {}, o.getCodec = function getCodec(e) {
			o.encodings || (o.encodings = r(336));
			for (var t = o._canonicalizeEncoding(e), n = {}; ;) {
				var a = o._codecDataCache[t];
				if (a) return a;
				var i = o.encodings[t];
				switch (typeof i) {
					case "string":
						t = i;
						break;

					case "object":
						for (var s in i) n[s] = i[s];
						n.encodingName || (n.encodingName = t), t = i.type;
						break;

					case "function":
						return n.encodingName || (n.encodingName = t), a = new i(n, o), o._codecDataCache[n.encodingName] = a,
							a;

					default:
						throw new Error("Encoding not recognized: '" + e + "' (searched as: '" + t + "')");
				}
			}
		}, o._canonicalizeEncoding = function(e) {
			return ("" + e).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
		}, o.getEncoder = function getEncoder(e, t) {
			var r = o.getCodec(e), n = new r.encoder(t, r);
			return r.bomAware && t && t.addBOM && (n = new a.PrependBOM(n, t)), n;
		}, o.getDecoder = function getDecoder(e, t) {
			var r = o.getCodec(e), n = new r.decoder(t, r);
			return !r.bomAware || t && !1 === t.stripBOM || (n = new a.StripBOM(n, t)), n;
		};
		var i = void 0 !== t && t.versions && t.versions.node;
		if (i) {
			var s = i.split(".").map(Number);
			(s[0] > 0 || s[1] >= 10) && r(352)(o), r(353)(o);
		}
	}).call(this, r(91));
}, function(e, t, r) {
	"use strict";
	function PrependBOMWrapper(e, t) {
		this.encoder = e, this.addBOM = !0;
	}
	function StripBOMWrapper(e, t) {
		this.decoder = e, this.pass = !1, this.options = t || {};
	}
	t.PrependBOM = PrependBOMWrapper, PrependBOMWrapper.prototype.write = function(e) {
		return this.addBOM && (e = "\ufeff" + e, this.addBOM = !1), this.encoder.write(e);
	}, PrependBOMWrapper.prototype.end = function() {
		return this.encoder.end();
	}, t.StripBOM = StripBOMWrapper, StripBOMWrapper.prototype.write = function(e) {
		var t = this.decoder.write(e);
		return this.pass || !t ? t : ("\ufeff" === t[0] && (t = t.slice(1), "function" == typeof this.options.stripBOM && this.options.stripBOM()),
			this.pass = !0, t);
	}, StripBOMWrapper.prototype.end = function() {
		return this.decoder.end();
	};
}, function(e, t, r) {
	"use strict";
	for (var n = [ r(337), r(340), r(341), r(342), r(343), r(344), r(345), r(346) ], a = 0; a < n.length; a++) {
		e = n[a];
		for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
	}
}, function(e, t, r) {
	"use strict";
	var n = r(33).Buffer;
	function InternalCodec(e, t) {
		this.enc = e.encodingName, this.bomAware = e.bomAware, "base64" === this.enc ? this.encoder = InternalEncoderBase64 : "cesu8" === this.enc && (this.enc = "utf8",
			this.encoder = InternalEncoderCesu8, "💩" !== n.from("eda0bdedb2a9", "hex").toString() && (this.decoder = InternalDecoderCesu8,
			this.defaultCharUnicode = t.defaultCharUnicode));
	}
	e.exports = {
		utf8: {
			type: "_internal",
			bomAware: !0
		},
		cesu8: {
			type: "_internal",
			bomAware: !0
		},
		unicode11utf8: "utf8",
		ucs2: {
			type: "_internal",
			bomAware: !0
		},
		utf16le: "ucs2",
		binary: {
			type: "_internal"
		},
		base64: {
			type: "_internal"
		},
		hex: {
			type: "_internal"
		},
		_internal: InternalCodec
	}, InternalCodec.prototype.encoder = InternalEncoder, InternalCodec.prototype.decoder = InternalDecoder;
	var a = r(338).StringDecoder;
	function InternalDecoder(e, t) {
		a.call(this, t.enc);
	}
	function InternalEncoder(e, t) {
		this.enc = t.enc;
	}
	function InternalEncoderBase64(e, t) {
		this.prevStr = "";
	}
	function InternalEncoderCesu8(e, t) {}
	function InternalDecoderCesu8(e, t) {
		this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = t.defaultCharUnicode;
	}
	a.prototype.end || (a.prototype.end = function() {}), InternalDecoder.prototype = a.prototype,
		InternalEncoder.prototype.write = function(e) {
			return n.from(e, this.enc);
		}, InternalEncoder.prototype.end = function() {}, InternalEncoderBase64.prototype.write = function(e) {
		var t = (e = this.prevStr + e).length - e.length % 4;
		return this.prevStr = e.slice(t), e = e.slice(0, t), n.from(e, "base64");
	}, InternalEncoderBase64.prototype.end = function() {
		return n.from(this.prevStr, "base64");
	}, InternalEncoderCesu8.prototype.write = function(e) {
		for (var t = n.alloc(3 * e.length), r = 0, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = 192 + (o >>> 6), t[r++] = 128 + (63 & o)) : (t[r++] = 224 + (o >>> 12),
				t[r++] = 128 + (o >>> 6 & 63), t[r++] = 128 + (63 & o));
		}
		return t.slice(0, r);
	}, InternalEncoderCesu8.prototype.end = function() {}, InternalDecoderCesu8.prototype.write = function(e) {
		for (var t = this.acc, r = this.contBytes, n = this.accBytes, a = "", o = 0; o < e.length; o++) {
			var i = e[o];
			128 != (192 & i) ? (r > 0 && (a += this.defaultCharUnicode, r = 0), i < 128 ? a += String.fromCharCode(i) : i < 224 ? (t = 31 & i,
				r = 1, n = 1) : i < 240 ? (t = 15 & i, r = 2, n = 1) : a += this.defaultCharUnicode) : r > 0 ? (t = t << 6 | 63 & i,
				n++, 0 === --r && (a += 2 === n && t < 128 && t > 0 ? this.defaultCharUnicode : 3 === n && t < 2048 ? this.defaultCharUnicode : String.fromCharCode(t))) : a += this.defaultCharUnicode;
		}
		return this.acc = t, this.contBytes = r, this.accBytes = n, a;
	}, InternalDecoderCesu8.prototype.end = function() {
		var e = 0;
		return this.contBytes > 0 && (e += this.defaultCharUnicode), e;
	};
}, function(e, t, r) {
	"use strict";
	var n = r(339).Buffer, a = n.isEncoding || function(e) {
		switch ((e = "" + e) && e.toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
			case "raw":
				return !0;

			default:
				return !1;
		}
	};
	function StringDecoder(e) {
		var t;
		switch (this.encoding = function normalizeEncoding(e) {
			var t = function _normalizeEncoding(e) {
				if (!e) return "utf8";
				for (var t; ;) switch (e) {
					case "utf8":
					case "utf-8":
						return "utf8";

					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return "utf16le";

					case "latin1":
					case "binary":
						return "latin1";

					case "base64":
					case "ascii":
					case "hex":
						return e;

					default:
						if (t) return;
						e = ("" + e).toLowerCase(), t = !0;
				}
			}(e);
			if ("string" != typeof t && (n.isEncoding === a || !a(e))) throw new Error("Unknown encoding: " + e);
			return t || e;
		}(e), this.encoding) {
			case "utf16le":
				this.text = utf16Text, this.end = utf16End, t = 4;
				break;

			case "utf8":
				this.fillLast = utf8FillLast, t = 4;
				break;

			case "base64":
				this.text = base64Text, this.end = base64End, t = 3;
				break;

			default:
				return this.write = simpleWrite, void (this.end = simpleEnd);
		}
		this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t);
	}
	function utf8CheckByte(e) {
		return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
	}
	function utf8FillLast(e) {
		var t = this.lastTotal - this.lastNeed, r = function utf8CheckExtraBytes(e, t, r) {
			if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
			if (e.lastNeed > 1 && t.length > 1) {
				if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
				if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2,
					"�";
			}
		}(this, e);
		return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
			this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
			void (this.lastNeed -= e.length));
	}
	function utf16Text(e, t) {
		if ((e.length - t) % 2 == 0) {
			var r = e.toString("utf16le", t);
			if (r) {
				var n = r.charCodeAt(r.length - 1);
				if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2],
					this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
			}
			return r;
		}
		return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1],
			e.toString("utf16le", t, e.length - 1);
	}
	function utf16End(e) {
		var t = e && e.length ? this.write(e) : "";
		if (this.lastNeed) {
			var r = this.lastTotal - this.lastNeed;
			return t + this.lastChar.toString("utf16le", 0, r);
		}
		return t;
	}
	function base64Text(e, t) {
		var r = (e.length - t) % 3;
		return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3,
			1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
				this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
	}
	function base64End(e) {
		var t = e && e.length ? this.write(e) : "";
		return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
	}
	function simpleWrite(e) {
		return e.toString(this.encoding);
	}
	function simpleEnd(e) {
		return e && e.length ? this.write(e) : "";
	}
	t.StringDecoder = StringDecoder, StringDecoder.prototype.write = function(e) {
		if (0 === e.length) return "";
		var t, r;
		if (this.lastNeed) {
			if (void 0 === (t = this.fillLast(e))) return "";
			r = this.lastNeed, this.lastNeed = 0;
		} else r = 0;
		return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
	}, StringDecoder.prototype.end = function utf8End(e) {
		var t = e && e.length ? this.write(e) : "";
		return this.lastNeed ? t + "�" : t;
	}, StringDecoder.prototype.text = function utf8Text(e, t) {
		var r = function utf8CheckIncomplete(e, t, r) {
			var n = t.length - 1;
			if (n < r) return 0;
			var a = utf8CheckByte(t[n]);
			if (a >= 0) return a > 0 && (e.lastNeed = a - 1), a;
			if (--n < r || -2 === a) return 0;
			if ((a = utf8CheckByte(t[n])) >= 0) return a > 0 && (e.lastNeed = a - 2), a;
			if (--n < r || -2 === a) return 0;
			if ((a = utf8CheckByte(t[n])) >= 0) return a > 0 && (2 === a ? a = 0 : e.lastNeed = a - 3),
				a;
			return 0;
		}(this, e, t);
		if (!this.lastNeed) return e.toString("utf8", t);
		this.lastTotal = r;
		var n = e.length - (r - this.lastNeed);
		return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
	}, StringDecoder.prototype.fillLast = function(e) {
		if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
			this.lastChar.toString(this.encoding, 0, this.lastTotal);
		e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
	};
}, function(e, t, r) {
	var n = r(94), a = n.Buffer;
	function copyProps(e, t) {
		for (var r in e) t[r] = e[r];
	}
	function SafeBuffer(e, t, r) {
		return a(e, t, r);
	}
	a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = n : (copyProps(n, t),
		t.Buffer = SafeBuffer), copyProps(a, SafeBuffer), SafeBuffer.from = function(e, t, r) {
		if ("number" == typeof e) throw new TypeError("Argument must not be a number");
		return a(e, t, r);
	}, SafeBuffer.alloc = function(e, t, r) {
		if ("number" != typeof e) throw new TypeError("Argument must be a number");
		var n = a(e);
		return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
			n;
	}, SafeBuffer.allocUnsafe = function(e) {
		if ("number" != typeof e) throw new TypeError("Argument must be a number");
		return a(e);
	}, SafeBuffer.allocUnsafeSlow = function(e) {
		if ("number" != typeof e) throw new TypeError("Argument must be a number");
		return n.SlowBuffer(e);
	};
}, function(e, t, r) {
	"use strict";
	var n = r(33).Buffer;
	function Utf16BECodec() {}
	function Utf16BEEncoder() {}
	function Utf16BEDecoder() {
		this.overflowByte = -1;
	}
	function Utf16Codec(e, t) {
		this.iconv = t;
	}
	function Utf16Encoder(e, t) {
		void 0 === (e = e || {}).addBOM && (e.addBOM = !0), this.encoder = t.iconv.getEncoder("utf-16le", e);
	}
	function Utf16Decoder(e, t) {
		this.decoder = null, this.initialBytes = [], this.initialBytesLen = 0, this.options = e || {},
			this.iconv = t.iconv;
	}
	function detectEncoding(e, t) {
		var r = t || "utf-16le";
		if (e.length >= 2) if (254 == e[0] && 255 == e[1]) r = "utf-16be"; else if (255 == e[0] && 254 == e[1]) r = "utf-16le"; else {
			for (var n = 0, a = 0, o = Math.min(e.length - e.length % 2, 64), i = 0; i < o; i += 2) 0 === e[i] && 0 !== e[i + 1] && a++,
			0 !== e[i] && 0 === e[i + 1] && n++;
			a > n ? r = "utf-16be" : a < n && (r = "utf-16le");
		}
		return r;
	}
	t.utf16be = Utf16BECodec, Utf16BECodec.prototype.encoder = Utf16BEEncoder, Utf16BECodec.prototype.decoder = Utf16BEDecoder,
		Utf16BECodec.prototype.bomAware = !0, Utf16BEEncoder.prototype.write = function(e) {
		for (var t = n.from(e, "ucs2"), r = 0; r < t.length; r += 2) {
			var a = t[r];
			t[r] = t[r + 1], t[r + 1] = a;
		}
		return t;
	}, Utf16BEEncoder.prototype.end = function() {}, Utf16BEDecoder.prototype.write = function(e) {
		if (0 == e.length) return "";
		var t = n.alloc(e.length + 1), r = 0, a = 0;
		for (-1 !== this.overflowByte && (t[0] = e[0], t[1] = this.overflowByte, r = 1,
			a = 2); r < e.length - 1; r += 2, a += 2) t[a] = e[r + 1], t[a + 1] = e[r];
		return this.overflowByte = r == e.length - 1 ? e[e.length - 1] : -1, t.slice(0, a).toString("ucs2");
	}, Utf16BEDecoder.prototype.end = function() {}, t.utf16 = Utf16Codec, Utf16Codec.prototype.encoder = Utf16Encoder,
		Utf16Codec.prototype.decoder = Utf16Decoder, Utf16Encoder.prototype.write = function(e) {
		return this.encoder.write(e);
	}, Utf16Encoder.prototype.end = function() {
		return this.encoder.end();
	}, Utf16Decoder.prototype.write = function(e) {
		if (!this.decoder) {
			if (this.initialBytes.push(e), this.initialBytesLen += e.length, this.initialBytesLen < 16) return "";
			var t = detectEncoding(e = n.concat(this.initialBytes), this.options.defaultEncoding);
			this.decoder = this.iconv.getDecoder(t, this.options), this.initialBytes.length = this.initialBytesLen = 0;
		}
		return this.decoder.write(e);
	}, Utf16Decoder.prototype.end = function() {
		if (!this.decoder) {
			var e = n.concat(this.initialBytes), t = detectEncoding(e, this.options.defaultEncoding);
			this.decoder = this.iconv.getDecoder(t, this.options);
			var r = this.decoder.write(e), a = this.decoder.end();
			return a ? r + a : r;
		}
		return this.decoder.end();
	};
}, function(e, t, r) {
	"use strict";
	var n = r(33).Buffer;
	function Utf7Codec(e, t) {
		this.iconv = t;
	}
	t.utf7 = Utf7Codec, t.unicode11utf7 = "utf7", Utf7Codec.prototype.encoder = Utf7Encoder,
		Utf7Codec.prototype.decoder = Utf7Decoder, Utf7Codec.prototype.bomAware = !0;
	var a = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
	function Utf7Encoder(e, t) {
		this.iconv = t.iconv;
	}
	function Utf7Decoder(e, t) {
		this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
	}
	Utf7Encoder.prototype.write = function(e) {
		return n.from(e.replace(a, function(e) {
			return "+" + ("+" === e ? "" : this.iconv.encode(e, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
		}.bind(this)));
	}, Utf7Encoder.prototype.end = function() {};
	for (var o = /[A-Za-z0-9\/+]/, i = [], s = 0; s < 256; s++) i[s] = o.test(String.fromCharCode(s));
	var c = "+".charCodeAt(0), u = "-".charCodeAt(0), l = "&".charCodeAt(0);
	function Utf7IMAPCodec(e, t) {
		this.iconv = t;
	}
	function Utf7IMAPEncoder(e, t) {
		this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = n.alloc(6), this.base64AccumIdx = 0;
	}
	function Utf7IMAPDecoder(e, t) {
		this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
	}
	Utf7Decoder.prototype.write = function(e) {
		for (var t = "", r = 0, a = this.inBase64, o = this.base64Accum, s = 0; s < e.length; s++) if (a) {
			if (!i[e[s]]) {
				if (s == r && e[s] == u) t += "+"; else {
					var l = o + e.slice(r, s).toString();
					t += this.iconv.decode(n.from(l, "base64"), "utf16-be");
				}
				e[s] != u && s--, r = s + 1, a = !1, o = "";
			}
		} else e[s] == c && (t += this.iconv.decode(e.slice(r, s), "ascii"), r = s + 1,
			a = !0);
		if (a) {
			var p = (l = o + e.slice(r).toString()).length - l.length % 8;
			o = l.slice(p), l = l.slice(0, p), t += this.iconv.decode(n.from(l, "base64"), "utf16-be");
		} else t += this.iconv.decode(e.slice(r), "ascii");
		return this.inBase64 = a, this.base64Accum = o, t;
	}, Utf7Decoder.prototype.end = function() {
		var e = "";
		return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")),
			this.inBase64 = !1, this.base64Accum = "", e;
	}, t.utf7imap = Utf7IMAPCodec, Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder,
		Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder, Utf7IMAPCodec.prototype.bomAware = !0,
		Utf7IMAPEncoder.prototype.write = function(e) {
			for (var t = this.inBase64, r = this.base64Accum, a = this.base64AccumIdx, o = n.alloc(5 * e.length + 10), i = 0, s = 0; s < e.length; s++) {
				var c = e.charCodeAt(s);
				32 <= c && c <= 126 ? (t && (a > 0 && (i += o.write(r.slice(0, a).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), i),
					a = 0), o[i++] = u, t = !1), t || (o[i++] = c, c === l && (o[i++] = u))) : (t || (o[i++] = l,
					t = !0), t && (r[a++] = c >> 8, r[a++] = 255 & c, a == r.length && (i += o.write(r.toString("base64").replace(/\//g, ","), i),
					a = 0)));
			}
			return this.inBase64 = t, this.base64AccumIdx = a, o.slice(0, i);
		}, Utf7IMAPEncoder.prototype.end = function() {
		var e = n.alloc(10), t = 0;
		return this.inBase64 && (this.base64AccumIdx > 0 && (t += e.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), t),
			this.base64AccumIdx = 0), e[t++] = u, this.inBase64 = !1), e.slice(0, t);
	};
	var p = i.slice();
	p[",".charCodeAt(0)] = !0, Utf7IMAPDecoder.prototype.write = function(e) {
		for (var t = "", r = 0, a = this.inBase64, o = this.base64Accum, i = 0; i < e.length; i++) if (a) {
			if (!p[e[i]]) {
				if (i == r && e[i] == u) t += "&"; else {
					var s = o + e.slice(r, i).toString().replace(/,/g, "/");
					t += this.iconv.decode(n.from(s, "base64"), "utf16-be");
				}
				e[i] != u && i--, r = i + 1, a = !1, o = "";
			}
		} else e[i] == l && (t += this.iconv.decode(e.slice(r, i), "ascii"), r = i + 1,
			a = !0);
		if (a) {
			var c = (s = o + e.slice(r).toString().replace(/,/g, "/")).length - s.length % 8;
			o = s.slice(c), s = s.slice(0, c), t += this.iconv.decode(n.from(s, "base64"), "utf16-be");
		} else t += this.iconv.decode(e.slice(r), "ascii");
		return this.inBase64 = a, this.base64Accum = o, t;
	}, Utf7IMAPDecoder.prototype.end = function() {
		var e = "";
		return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")),
			this.inBase64 = !1, this.base64Accum = "", e;
	};
}, function(e, t, r) {
	"use strict";
	var n = r(33).Buffer;
	function SBCSCodec(e, t) {
		if (!e) throw new Error("SBCS codec is called without the data.");
		if (!e.chars || 128 !== e.chars.length && 256 !== e.chars.length) throw new Error("Encoding '" + e.type + "' has incorrect 'chars' (must be of len 128 or 256)");
		if (128 === e.chars.length) {
			for (var r = "", a = 0; a < 128; a++) r += String.fromCharCode(a);
			e.chars = r + e.chars;
		}
		this.decodeBuf = n.from(e.chars, "ucs2");
		var o = n.alloc(65536, t.defaultCharSingleByte.charCodeAt(0));
		for (a = 0; a < e.chars.length; a++) o[e.chars.charCodeAt(a)] = a;
		this.encodeBuf = o;
	}
	function SBCSEncoder(e, t) {
		this.encodeBuf = t.encodeBuf;
	}
	function SBCSDecoder(e, t) {
		this.decodeBuf = t.decodeBuf;
	}
	t._sbcs = SBCSCodec, SBCSCodec.prototype.encoder = SBCSEncoder, SBCSCodec.prototype.decoder = SBCSDecoder,
		SBCSEncoder.prototype.write = function(e) {
			for (var t = n.alloc(e.length), r = 0; r < e.length; r++) t[r] = this.encodeBuf[e.charCodeAt(r)];
			return t;
		}, SBCSEncoder.prototype.end = function() {}, SBCSDecoder.prototype.write = function(e) {
		for (var t = this.decodeBuf, r = n.alloc(2 * e.length), a = 0, o = 0, i = 0; i < e.length; i++) a = 2 * e[i],
			r[o = 2 * i] = t[a], r[o + 1] = t[a + 1];
		return r.toString("ucs2");
	}, SBCSDecoder.prototype.end = function() {};
}, function(e, t, r) {
	"use strict";
	e.exports = {
		10029: "maccenteuro",
		maccenteuro: {
			type: "_sbcs",
			chars: "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
		},
		808: "cp808",
		ibm808: "cp808",
		cp808: {
			type: "_sbcs",
			chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
		},
		mik: {
			type: "_sbcs",
			chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
		},
		ascii8bit: "ascii",
		usascii: "ascii",
		ansix34: "ascii",
		ansix341968: "ascii",
		ansix341986: "ascii",
		csascii: "ascii",
		cp367: "ascii",
		ibm367: "ascii",
		isoir6: "ascii",
		iso646us: "ascii",
		iso646irv: "ascii",
		us: "ascii",
		latin1: "iso88591",
		latin2: "iso88592",
		latin3: "iso88593",
		latin4: "iso88594",
		latin5: "iso88599",
		latin6: "iso885910",
		latin7: "iso885913",
		latin8: "iso885914",
		latin9: "iso885915",
		latin10: "iso885916",
		csisolatin1: "iso88591",
		csisolatin2: "iso88592",
		csisolatin3: "iso88593",
		csisolatin4: "iso88594",
		csisolatincyrillic: "iso88595",
		csisolatinarabic: "iso88596",
		csisolatingreek: "iso88597",
		csisolatinhebrew: "iso88598",
		csisolatin5: "iso88599",
		csisolatin6: "iso885910",
		l1: "iso88591",
		l2: "iso88592",
		l3: "iso88593",
		l4: "iso88594",
		l5: "iso88599",
		l6: "iso885910",
		l7: "iso885913",
		l8: "iso885914",
		l9: "iso885915",
		l10: "iso885916",
		isoir14: "iso646jp",
		isoir57: "iso646cn",
		isoir100: "iso88591",
		isoir101: "iso88592",
		isoir109: "iso88593",
		isoir110: "iso88594",
		isoir144: "iso88595",
		isoir127: "iso88596",
		isoir126: "iso88597",
		isoir138: "iso88598",
		isoir148: "iso88599",
		isoir157: "iso885910",
		isoir166: "tis620",
		isoir179: "iso885913",
		isoir199: "iso885914",
		isoir203: "iso885915",
		isoir226: "iso885916",
		cp819: "iso88591",
		ibm819: "iso88591",
		cyrillic: "iso88595",
		arabic: "iso88596",
		arabic8: "iso88596",
		ecma114: "iso88596",
		asmo708: "iso88596",
		greek: "iso88597",
		greek8: "iso88597",
		ecma118: "iso88597",
		elot928: "iso88597",
		hebrew: "iso88598",
		hebrew8: "iso88598",
		turkish: "iso88599",
		turkish8: "iso88599",
		thai: "iso885911",
		thai8: "iso885911",
		celtic: "iso885914",
		celtic8: "iso885914",
		isoceltic: "iso885914",
		tis6200: "tis620",
		tis62025291: "tis620",
		tis62025330: "tis620",
		1e4: "macroman",
		10006: "macgreek",
		10007: "maccyrillic",
		10079: "maciceland",
		10081: "macturkish",
		cspc8codepage437: "cp437",
		cspc775baltic: "cp775",
		cspc850multilingual: "cp850",
		cspcp852: "cp852",
		cspc862latinhebrew: "cp862",
		cpgr: "cp869",
		msee: "cp1250",
		mscyrl: "cp1251",
		msansi: "cp1252",
		msgreek: "cp1253",
		msturk: "cp1254",
		mshebr: "cp1255",
		msarab: "cp1256",
		winbaltrim: "cp1257",
		cp20866: "koi8r",
		20866: "koi8r",
		ibm878: "koi8r",
		cskoi8r: "koi8r",
		cp21866: "koi8u",
		21866: "koi8u",
		ibm1168: "koi8u",
		strk10482002: "rk1048",
		tcvn5712: "tcvn",
		tcvn57121: "tcvn",
		gb198880: "iso646cn",
		cn: "iso646cn",
		csiso14jisc6220ro: "iso646jp",
		jisc62201969ro: "iso646jp",
		jp: "iso646jp",
		cshproman8: "hproman8",
		r8: "hproman8",
		roman8: "hproman8",
		xroman8: "hproman8",
		ibm1051: "hproman8",
		mac: "macintosh",
		csmacintosh: "macintosh"
	};
}, function(e, t, r) {
	"use strict";
	e.exports = {
		437: "cp437",
		737: "cp737",
		775: "cp775",
		850: "cp850",
		852: "cp852",
		855: "cp855",
		856: "cp856",
		857: "cp857",
		858: "cp858",
		860: "cp860",
		861: "cp861",
		862: "cp862",
		863: "cp863",
		864: "cp864",
		865: "cp865",
		866: "cp866",
		869: "cp869",
		874: "windows874",
		922: "cp922",
		1046: "cp1046",
		1124: "cp1124",
		1125: "cp1125",
		1129: "cp1129",
		1133: "cp1133",
		1161: "cp1161",
		1162: "cp1162",
		1163: "cp1163",
		1250: "windows1250",
		1251: "windows1251",
		1252: "windows1252",
		1253: "windows1253",
		1254: "windows1254",
		1255: "windows1255",
		1256: "windows1256",
		1257: "windows1257",
		1258: "windows1258",
		28591: "iso88591",
		28592: "iso88592",
		28593: "iso88593",
		28594: "iso88594",
		28595: "iso88595",
		28596: "iso88596",
		28597: "iso88597",
		28598: "iso88598",
		28599: "iso88599",
		28600: "iso885910",
		28601: "iso885911",
		28603: "iso885913",
		28604: "iso885914",
		28605: "iso885915",
		28606: "iso885916",
		windows874: {
			type: "_sbcs",
			chars: "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
		},
		win874: "windows874",
		cp874: "windows874",
		windows1250: {
			type: "_sbcs",
			chars: "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
		},
		win1250: "windows1250",
		cp1250: "windows1250",
		windows1251: {
			type: "_sbcs",
			chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
		},
		win1251: "windows1251",
		cp1251: "windows1251",
		windows1252: {
			type: "_sbcs",
			chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
		},
		win1252: "windows1252",
		cp1252: "windows1252",
		windows1253: {
			type: "_sbcs",
			chars: "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
		},
		win1253: "windows1253",
		cp1253: "windows1253",
		windows1254: {
			type: "_sbcs",
			chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
		},
		win1254: "windows1254",
		cp1254: "windows1254",
		windows1255: {
			type: "_sbcs",
			chars: "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
		},
		win1255: "windows1255",
		cp1255: "windows1255",
		windows1256: {
			type: "_sbcs",
			chars: "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
		},
		win1256: "windows1256",
		cp1256: "windows1256",
		windows1257: {
			type: "_sbcs",
			chars: "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
		},
		win1257: "windows1257",
		cp1257: "windows1257",
		windows1258: {
			type: "_sbcs",
			chars: "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
		},
		win1258: "windows1258",
		cp1258: "windows1258",
		iso88591: {
			type: "_sbcs",
			chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
		},
		cp28591: "iso88591",
		iso88592: {
			type: "_sbcs",
			chars: " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
		},
		cp28592: "iso88592",
		iso88593: {
			type: "_sbcs",
			chars: " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
		},
		cp28593: "iso88593",
		iso88594: {
			type: "_sbcs",
			chars: " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
		},
		cp28594: "iso88594",
		iso88595: {
			type: "_sbcs",
			chars: " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
		},
		cp28595: "iso88595",
		iso88596: {
			type: "_sbcs",
			chars: " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
		},
		cp28596: "iso88596",
		iso88597: {
			type: "_sbcs",
			chars: " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
		},
		cp28597: "iso88597",
		iso88598: {
			type: "_sbcs",
			chars: " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
		},
		cp28598: "iso88598",
		iso88599: {
			type: "_sbcs",
			chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
		},
		cp28599: "iso88599",
		iso885910: {
			type: "_sbcs",
			chars: " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
		},
		cp28600: "iso885910",
		iso885911: {
			type: "_sbcs",
			chars: " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
		},
		cp28601: "iso885911",
		iso885913: {
			type: "_sbcs",
			chars: " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
		},
		cp28603: "iso885913",
		iso885914: {
			type: "_sbcs",
			chars: " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
		},
		cp28604: "iso885914",
		iso885915: {
			type: "_sbcs",
			chars: " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
		},
		cp28605: "iso885915",
		iso885916: {
			type: "_sbcs",
			chars: " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
		},
		cp28606: "iso885916",
		cp437: {
			type: "_sbcs",
			chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
		},
		ibm437: "cp437",
		csibm437: "cp437",
		cp737: {
			type: "_sbcs",
			chars: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
		},
		ibm737: "cp737",
		csibm737: "cp737",
		cp775: {
			type: "_sbcs",
			chars: "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
		},
		ibm775: "cp775",
		csibm775: "cp775",
		cp850: {
			type: "_sbcs",
			chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
		},
		ibm850: "cp850",
		csibm850: "cp850",
		cp852: {
			type: "_sbcs",
			chars: "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
		},
		ibm852: "cp852",
		csibm852: "cp852",
		cp855: {
			type: "_sbcs",
			chars: "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
		},
		ibm855: "cp855",
		csibm855: "cp855",
		cp856: {
			type: "_sbcs",
			chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
		},
		ibm856: "cp856",
		csibm856: "cp856",
		cp857: {
			type: "_sbcs",
			chars: "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
		},
		ibm857: "cp857",
		csibm857: "cp857",
		cp858: {
			type: "_sbcs",
			chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
		},
		ibm858: "cp858",
		csibm858: "cp858",
		cp860: {
			type: "_sbcs",
			chars: "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
		},
		ibm860: "cp860",
		csibm860: "cp860",
		cp861: {
			type: "_sbcs",
			chars: "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
		},
		ibm861: "cp861",
		csibm861: "cp861",
		cp862: {
			type: "_sbcs",
			chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
		},
		ibm862: "cp862",
		csibm862: "cp862",
		cp863: {
			type: "_sbcs",
			chars: "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
		},
		ibm863: "cp863",
		csibm863: "cp863",
		cp864: {
			type: "_sbcs",
			chars: "\0\b\t\n\v\f\r !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
		},
		ibm864: "cp864",
		csibm864: "cp864",
		cp865: {
			type: "_sbcs",
			chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
		},
		ibm865: "cp865",
		csibm865: "cp865",
		cp866: {
			type: "_sbcs",
			chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
		},
		ibm866: "cp866",
		csibm866: "cp866",
		cp869: {
			type: "_sbcs",
			chars: "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
		},
		ibm869: "cp869",
		csibm869: "cp869",
		cp922: {
			type: "_sbcs",
			chars: " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
		},
		ibm922: "cp922",
		csibm922: "cp922",
		cp1046: {
			type: "_sbcs",
			chars: "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
		},
		ibm1046: "cp1046",
		csibm1046: "cp1046",
		cp1124: {
			type: "_sbcs",
			chars: " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
		},
		ibm1124: "cp1124",
		csibm1124: "cp1124",
		cp1125: {
			type: "_sbcs",
			chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
		},
		ibm1125: "cp1125",
		csibm1125: "cp1125",
		cp1129: {
			type: "_sbcs",
			chars: " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
		},
		ibm1129: "cp1129",
		csibm1129: "cp1129",
		cp1133: {
			type: "_sbcs",
			chars: " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
		},
		ibm1133: "cp1133",
		csibm1133: "cp1133",
		cp1161: {
			type: "_sbcs",
			chars: "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
		},
		ibm1161: "cp1161",
		csibm1161: "cp1161",
		cp1162: {
			type: "_sbcs",
			chars: "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
		},
		ibm1162: "cp1162",
		csibm1162: "cp1162",
		cp1163: {
			type: "_sbcs",
			chars: " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
		},
		ibm1163: "cp1163",
		csibm1163: "cp1163",
		maccroatian: {
			type: "_sbcs",
			chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
		},
		maccyrillic: {
			type: "_sbcs",
			chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
		},
		macgreek: {
			type: "_sbcs",
			chars: "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
		},
		maciceland: {
			type: "_sbcs",
			chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
		},
		macroman: {
			type: "_sbcs",
			chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
		},
		macromania: {
			type: "_sbcs",
			chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
		},
		macthai: {
			type: "_sbcs",
			chars: "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\ufeff​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
		},
		macturkish: {
			type: "_sbcs",
			chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
		},
		macukraine: {
			type: "_sbcs",
			chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
		},
		koi8r: {
			type: "_sbcs",
			chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
		},
		koi8u: {
			type: "_sbcs",
			chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
		},
		koi8ru: {
			type: "_sbcs",
			chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
		},
		koi8t: {
			type: "_sbcs",
			chars: "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
		},
		armscii8: {
			type: "_sbcs",
			chars: " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
		},
		rk1048: {
			type: "_sbcs",
			chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
		},
		tcvn: {
			type: "_sbcs",
			chars: "\0ÚỤỪỬỮ\b\t\n\v\f\rỨỰỲỶỸÝỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
		},
		georgianacademy: {
			type: "_sbcs",
			chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
		},
		georgianps: {
			type: "_sbcs",
			chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
		},
		pt154: {
			type: "_sbcs",
			chars: "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
		},
		viscii: {
			type: "_sbcs",
			chars: "\0ẲẴẪ\b\t\n\v\f\rỶỸỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
		},
		iso646cn: {
			type: "_sbcs",
			chars: "\0\b\t\n\v\f\r !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
		},
		iso646jp: {
			type: "_sbcs",
			chars: "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
		},
		hproman8: {
			type: "_sbcs",
			chars: " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
		},
		macintosh: {
			type: "_sbcs",
			chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
		},
		ascii: {
			type: "_sbcs",
			chars: "��������������������������������������������������������������������������������������������������������������������������������"
		},
		tis620: {
			type: "_sbcs",
			chars: "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
		}
	};
}, function(e, t, r) {
	"use strict";
	var n = r(33).Buffer;
	t._dbcs = DBCSCodec;
	for (var a = -1, o = -2, i = -1e3, s = new Array(256), c = 0; c < 256; c++) s[c] = a;
	function DBCSCodec(e, t) {
		if (this.encodingName = e.encodingName, !e) throw new Error("DBCS codec is called without the data.");
		if (!e.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
		var r = e.table();
		this.decodeTables = [], this.decodeTables[0] = s.slice(0), this.decodeTableSeq = [];
		for (var n = 0; n < r.length; n++) this._addDecodeChunk(r[n]);
		this.defaultCharUnicode = t.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
		var c = {};
		if (e.encodeSkipVals) for (n = 0; n < e.encodeSkipVals.length; n++) {
			var u = e.encodeSkipVals[n];
			if ("number" == typeof u) c[u] = !0; else for (var l = u.from; l <= u.to; l++) c[l] = !0;
		}
		if (this._fillEncodeTable(0, 0, c), e.encodeAdd) for (var p in e.encodeAdd) Object.prototype.hasOwnProperty.call(e.encodeAdd, p) && this._setEncodeChar(p.charCodeAt(0), e.encodeAdd[p]);
		if (this.defCharSB = this.encodeTable[0][t.defaultCharSingleByte.charCodeAt(0)],
		this.defCharSB === a && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === a && (this.defCharSB = "?".charCodeAt(0)),
		"function" == typeof e.gb18030) {
			this.gb18030 = e.gb18030();
			var f = this.decodeTables.length, d = this.decodeTables[f] = s.slice(0), _ = this.decodeTables.length, h = this.decodeTables[_] = s.slice(0);
			for (n = 129; n <= 254; n++) {
				var m = i - this.decodeTables[0][n], g = this.decodeTables[m];
				for (l = 48; l <= 57; l++) g[l] = i - f;
			}
			for (n = 129; n <= 254; n++) d[n] = i - _;
			for (n = 48; n <= 57; n++) h[n] = o;
		}
	}
	function DBCSEncoder(e, t) {
		this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t.encodeTable,
			this.encodeTableSeq = t.encodeTableSeq, this.defaultCharSingleByte = t.defCharSB,
			this.gb18030 = t.gb18030;
	}
	function DBCSDecoder(e, t) {
		this.nodeIdx = 0, this.prevBuf = n.alloc(0), this.decodeTables = t.decodeTables,
			this.decodeTableSeq = t.decodeTableSeq, this.defaultCharUnicode = t.defaultCharUnicode,
			this.gb18030 = t.gb18030;
	}
	function findIdx(e, t) {
		if (e[0] > t) return -1;
		for (var r = 0, n = e.length; r < n - 1; ) {
			var a = r + Math.floor((n - r + 1) / 2);
			e[a] <= t ? r = a : n = a;
		}
		return r;
	}
	DBCSCodec.prototype.encoder = DBCSEncoder, DBCSCodec.prototype.decoder = DBCSDecoder,
		DBCSCodec.prototype._getDecodeTrieNode = function(e) {
			for (var t = []; e > 0; e >>= 8) t.push(255 & e);
			0 == t.length && t.push(0);
			for (var r = this.decodeTables[0], n = t.length - 1; n > 0; n--) {
				var o = r[t[n]];
				if (o == a) r[t[n]] = i - this.decodeTables.length, this.decodeTables.push(r = s.slice(0)); else {
					if (!(o <= i)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e.toString(16));
					r = this.decodeTables[i - o];
				}
			}
			return r;
		}, DBCSCodec.prototype._addDecodeChunk = function(e) {
		var t = parseInt(e[0], 16), r = this._getDecodeTrieNode(t);
		t &= 255;
		for (var n = 1; n < e.length; n++) {
			var a = e[n];
			if ("string" == typeof a) for (var o = 0; o < a.length; ) {
				var i = a.charCodeAt(o++);
				if (55296 <= i && i < 56320) {
					var s = a.charCodeAt(o++);
					if (!(56320 <= s && s < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e[0]);
					r[t++] = 65536 + 1024 * (i - 55296) + (s - 56320);
				} else if (4080 < i && i <= 4095) {
					for (var c = 4095 - i + 2, u = [], l = 0; l < c; l++) u.push(a.charCodeAt(o++));
					r[t++] = -10 - this.decodeTableSeq.length, this.decodeTableSeq.push(u);
				} else r[t++] = i;
			} else {
				if ("number" != typeof a) throw new Error("Incorrect type '" + typeof a + "' given in " + this.encodingName + " at chunk " + e[0]);
				var p = r[t - 1] + 1;
				for (o = 0; o < a; o++) r[t++] = p++;
			}
		}
		if (t > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e[0] + ": too long" + t);
	}, DBCSCodec.prototype._getEncodeBucket = function(e) {
		var t = e >> 8;
		return void 0 === this.encodeTable[t] && (this.encodeTable[t] = s.slice(0)), this.encodeTable[t];
	}, DBCSCodec.prototype._setEncodeChar = function(e, t) {
		var r = this._getEncodeBucket(e), n = 255 & e;
		r[n] <= -10 ? this.encodeTableSeq[-10 - r[n]][-1] = t : r[n] == a && (r[n] = t);
	}, DBCSCodec.prototype._setEncodeSequence = function(e, t) {
		var r, n = e[0], o = this._getEncodeBucket(n), i = 255 & n;
		o[i] <= -10 ? r = this.encodeTableSeq[-10 - o[i]] : (r = {}, o[i] !== a && (r[-1] = o[i]),
			o[i] = -10 - this.encodeTableSeq.length, this.encodeTableSeq.push(r));
		for (var s = 1; s < e.length - 1; s++) {
			var c = r[n];
			"object" == typeof c ? r = c : (r = r[n] = {}, void 0 !== c && (r[-1] = c));
		}
		r[n = e[e.length - 1]] = t;
	}, DBCSCodec.prototype._fillEncodeTable = function(e, t, r) {
		for (var n = this.decodeTables[e], a = 0; a < 256; a++) {
			var o = n[a], s = t + a;
			r[s] || (o >= 0 ? this._setEncodeChar(o, s) : o <= i ? this._fillEncodeTable(i - o, s << 8, r) : o <= -10 && this._setEncodeSequence(this.decodeTableSeq[-10 - o], s));
		}
	}, DBCSEncoder.prototype.write = function(e) {
		for (var t = n.alloc(e.length * (this.gb18030 ? 4 : 3)), r = this.leadSurrogate, o = this.seqObj, i = -1, s = 0, c = 0; ;) {
			if (-1 === i) {
				if (s == e.length) break;
				var u = e.charCodeAt(s++);
			} else {
				u = i;
				i = -1;
			}
			if (55296 <= u && u < 57344) if (u < 56320) {
				if (-1 === r) {
					r = u;
					continue;
				}
				r = u, u = a;
			} else -1 !== r ? (u = 65536 + 1024 * (r - 55296) + (u - 56320), r = -1) : u = a; else -1 !== r && (i = u,
				u = a, r = -1);
			var l = a;
			if (void 0 !== o && u != a) {
				var p = o[u];
				if ("object" == typeof p) {
					o = p;
					continue;
				}
				"number" == typeof p ? l = p : null == p && void 0 !== (p = o[-1]) && (l = p, i = u),
					o = void 0;
			} else if (u >= 0) {
				var f = this.encodeTable[u >> 8];
				if (void 0 !== f && (l = f[255 & u]), l <= -10) {
					o = this.encodeTableSeq[-10 - l];
					continue;
				}
				if (l == a && this.gb18030) {
					var d = findIdx(this.gb18030.uChars, u);
					if (-1 != d) {
						l = this.gb18030.gbChars[d] + (u - this.gb18030.uChars[d]);
						t[c++] = 129 + Math.floor(l / 12600), l %= 12600, t[c++] = 48 + Math.floor(l / 1260),
							l %= 1260, t[c++] = 129 + Math.floor(l / 10), l %= 10, t[c++] = 48 + l;
						continue;
					}
				}
			}
			l === a && (l = this.defaultCharSingleByte), l < 256 ? t[c++] = l : l < 65536 ? (t[c++] = l >> 8,
				t[c++] = 255 & l) : (t[c++] = l >> 16, t[c++] = l >> 8 & 255, t[c++] = 255 & l);
		}
		return this.seqObj = o, this.leadSurrogate = r, t.slice(0, c);
	}, DBCSEncoder.prototype.end = function() {
		if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
			var e = n.alloc(10), t = 0;
			if (this.seqObj) {
				var r = this.seqObj[-1];
				void 0 !== r && (r < 256 ? e[t++] = r : (e[t++] = r >> 8, e[t++] = 255 & r)), this.seqObj = void 0;
			}
			return -1 !== this.leadSurrogate && (e[t++] = this.defaultCharSingleByte, this.leadSurrogate = -1),
				e.slice(0, t);
		}
	}, DBCSEncoder.prototype.findIdx = findIdx, DBCSDecoder.prototype.write = function(e) {
		var t = n.alloc(2 * e.length), r = this.nodeIdx, s = this.prevBuf, c = this.prevBuf.length, u = -this.prevBuf.length;
		c > 0 && (s = n.concat([ s, e.slice(0, 10) ]));
		for (var l = 0, p = 0; l < e.length; l++) {
			var f, d = l >= 0 ? e[l] : s[l + c];
			if ((f = this.decodeTables[r][d]) >= 0) ; else if (f === a) l = u, f = this.defaultCharUnicode.charCodeAt(0); else if (f === o) {
				var _ = u >= 0 ? e.slice(u, l + 1) : s.slice(u + c, l + 1 + c), h = 12600 * (_[0] - 129) + 1260 * (_[1] - 48) + 10 * (_[2] - 129) + (_[3] - 48), m = findIdx(this.gb18030.gbChars, h);
				f = this.gb18030.uChars[m] + h - this.gb18030.gbChars[m];
			} else {
				if (f <= i) {
					r = i - f;
					continue;
				}
				if (!(f <= -10)) throw new Error("iconv-lite internal error: invalid decoding table value " + f + " at " + r + "/" + d);
				for (var g = this.decodeTableSeq[-10 - f], b = 0; b < g.length - 1; b++) f = g[b],
					t[p++] = 255 & f, t[p++] = f >> 8;
				f = g[g.length - 1];
			}
			if (f > 65535) {
				f -= 65536;
				var v = 55296 + Math.floor(f / 1024);
				t[p++] = 255 & v, t[p++] = v >> 8, f = 56320 + f % 1024;
			}
			t[p++] = 255 & f, t[p++] = f >> 8, r = 0, u = l + 1;
		}
		return this.nodeIdx = r, this.prevBuf = u >= 0 ? e.slice(u) : s.slice(u + c), t.slice(0, p).toString("ucs2");
	}, DBCSDecoder.prototype.end = function() {
		for (var e = ""; this.prevBuf.length > 0; ) {
			e += this.defaultCharUnicode;
			var t = this.prevBuf.slice(1);
			this.prevBuf = n.alloc(0), this.nodeIdx = 0, t.length > 0 && (e += this.write(t));
		}
		return this.nodeIdx = 0, e;
	};
}, function(e, t, r) {
	"use strict";
	e.exports = {
		shiftjis: {
			type: "_dbcs",
			table: function() {
				return r(347);
			},
			encodeAdd: {
				"¥": 92,
				"‾": 126
			},
			encodeSkipVals: [ {
				from: 60736,
				to: 63808
			} ]
		},
		csshiftjis: "shiftjis",
		mskanji: "shiftjis",
		sjis: "shiftjis",
		windows31j: "shiftjis",
		ms31j: "shiftjis",
		xsjis: "shiftjis",
		windows932: "shiftjis",
		ms932: "shiftjis",
		932: "shiftjis",
		cp932: "shiftjis",
		eucjp: {
			type: "_dbcs",
			table: function() {
				return r(348);
			},
			encodeAdd: {
				"¥": 92,
				"‾": 126
			}
		},
		gb2312: "cp936",
		gb231280: "cp936",
		gb23121980: "cp936",
		csgb2312: "cp936",
		csiso58gb231280: "cp936",
		euccn: "cp936",
		windows936: "cp936",
		ms936: "cp936",
		936: "cp936",
		cp936: {
			type: "_dbcs",
			table: function() {
				return r(95);
			}
		},
		gbk: {
			type: "_dbcs",
			table: function() {
				return r(95).concat(r(150));
			}
		},
		xgbk: "gbk",
		isoir58: "gbk",
		gb18030: {
			type: "_dbcs",
			table: function() {
				return r(95).concat(r(150));
			},
			gb18030: function() {
				return r(349);
			},
			encodeSkipVals: [ 128 ],
			encodeAdd: {
				"€": 41699
			}
		},
		chinese: "gb18030",
		windows949: "cp949",
		ms949: "cp949",
		949: "cp949",
		cp949: {
			type: "_dbcs",
			table: function() {
				return r(350);
			}
		},
		cseuckr: "cp949",
		csksc56011987: "cp949",
		euckr: "cp949",
		isoir149: "cp949",
		korean: "cp949",
		ksc56011987: "cp949",
		ksc56011989: "cp949",
		ksc5601: "cp949",
		windows950: "cp950",
		ms950: "cp950",
		950: "cp950",
		cp950: {
			type: "_dbcs",
			table: function() {
				return r(151);
			}
		},
		big5: "big5hkscs",
		big5hkscs: {
			type: "_dbcs",
			table: function() {
				return r(151).concat(r(351));
			},
			encodeSkipVals: [ 41676 ]
		},
		cnbig5: "big5hkscs",
		csbig5: "big5hkscs",
		xxbig5: "big5hkscs"
	};
}, function(e) {
	e.exports = JSON.parse('[["0","\\u0000",128],["a1","｡",62],["8140","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×"],["8180","÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"],["81b8","∈∋⊆⊇⊂⊃∪∩"],["81c8","∧∨￢⇒⇔∀∃"],["81da","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["81f0","Å‰♯♭♪†‡¶"],["81fc","◯"],["824f","０",9],["8260","Ａ",25],["8281","ａ",25],["829f","ぁ",82],["8340","ァ",62],["8380","ム",22],["839f","Α",16,"Σ",6],["83bf","α",16,"σ",6],["8440","А",5,"ЁЖ",25],["8470","а",5,"ёж",7],["8480","о",17],["849f","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["8740","①",19,"Ⅰ",9],["875f","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["877e","㍻"],["8780","〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["889f","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["8940","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"],["8980","園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["8a40","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"],["8a80","橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["8b40","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"],["8b80","朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["8c40","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"],["8c80","劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["8d40","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"],["8d80","項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["8e40","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"],["8e80","死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["8f40","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"],["8f80","準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["9040","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"],["9080","逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["9140","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"],["9180","操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["9240","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"],["9280","逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["9340","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"],["9380","凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["9440","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"],["9480","楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["9540","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"],["9580","斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["9640","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"],["9680","摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["9740","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"],["9780","沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["9840","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["989f","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["9940","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"],["9980","凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["9a40","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"],["9a80","噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["9b40","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"],["9b80","它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["9c40","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"],["9c80","怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["9d40","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"],["9d80","捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["9e40","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"],["9e80","梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["9f40","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"],["9f80","麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["e040","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"],["e080","烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e140","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"],["e180","痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e240","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"],["e280","窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e340","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"],["e380","縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e440","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"],["e480","艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e540","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"],["e580","蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["e640","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"],["e680","諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["e740","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"],["e780","轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["e840","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"],["e880","閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["e940","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"],["e980","騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["ea40","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"],["ea80","黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"],["ed40","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"],["ed80","塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["ee40","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"],["ee80","蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["eeef","ⅰ",9,"￢￤＇＂"],["f040","",62],["f080","",124],["f140","",62],["f180","",124],["f240","",62],["f280","",124],["f340","",62],["f380","",124],["f440","",62],["f480","",124],["f540","",62],["f580","",124],["f640","",62],["f680","",124],["f740","",62],["f780","",124],["f840","",62],["f880","",124],["f940",""],["fa40","ⅰ",9,"Ⅰ",9,"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"],["fa80","兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"],["fb40","涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"],["fb80","祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"],["fc40","髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"]]');
}, function(e) {
	e.exports = JSON.parse('[["0","\\u0000",127],["8ea1","｡",62],["a1a1","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"],["a2a1","◆□■△▲▽▼※〒→←↑↓〓"],["a2ba","∈∋⊆⊇⊂⊃∪∩"],["a2ca","∧∨￢⇒⇔∀∃"],["a2dc","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["a2f2","Å‰♯♭♪†‡¶"],["a2fe","◯"],["a3b0","０",9],["a3c1","Ａ",25],["a3e1","ａ",25],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a8a1","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["ada1","①",19,"Ⅰ",9],["adc0","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["addf","㍻〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["b0a1","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["b1a1","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"],["b2a1","押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["b3a1","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"],["b4a1","粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["b5a1","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"],["b6a1","供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["b7a1","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"],["b8a1","検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["b9a1","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"],["baa1","此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["bba1","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"],["bca1","次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["bda1","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"],["bea1","勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["bfa1","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"],["c0a1","澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["c1a1","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"],["c2a1","臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["c3a1","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"],["c4a1","帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["c5a1","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"],["c6a1","董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["c7a1","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"],["c8a1","函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["c9a1","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"],["caa1","福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["cba1","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"],["cca1","漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["cda1","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"],["cea1","痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["cfa1","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["d0a1","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["d1a1","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"],["d2a1","辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["d3a1","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"],["d4a1","圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["d5a1","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"],["d6a1","屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["d7a1","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"],["d8a1","悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["d9a1","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"],["daa1","據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["dba1","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"],["dca1","棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["dda1","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"],["dea1","沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["dfa1","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"],["e0a1","燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e1a1","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"],["e2a1","癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e3a1","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"],["e4a1","筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e5a1","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"],["e6a1","罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e7a1","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"],["e8a1","茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e9a1","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"],["eaa1","蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["eba1","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"],["eca1","譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["eda1","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"],["eea1","遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["efa1","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"],["f0a1","陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["f1a1","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"],["f2a1","髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["f3a1","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"],["f4a1","堯槇遙瑤凜熙"],["f9a1","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"],["faa1","忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["fba1","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"],["fca1","釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["fcf1","ⅰ",9,"￢￤＇＂"],["8fa2af","˘ˇ¸˙˝¯˛˚～΄΅"],["8fa2c2","¡¦¿"],["8fa2eb","ºª©®™¤№"],["8fa6e1","ΆΈΉΊΪ"],["8fa6e7","Ό"],["8fa6e9","ΎΫ"],["8fa6ec","Ώ"],["8fa6f1","άέήίϊΐόςύϋΰώ"],["8fa7c2","Ђ",10,"ЎЏ"],["8fa7f2","ђ",10,"ўџ"],["8fa9a1","ÆĐ"],["8fa9a4","Ħ"],["8fa9a6","Ĳ"],["8fa9a8","ŁĿ"],["8fa9ab","ŊØŒ"],["8fa9af","ŦÞ"],["8fa9c1","æđðħıĳĸłŀŉŋøœßŧþ"],["8faaa1","ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"],["8faaba","ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"],["8faba1","áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"],["8fabbd","ġĥíìïîǐ"],["8fabc5","īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"],["8fb0a1","丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"],["8fb1a1","侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"],["8fb2a1","傒傓傔傖傛傜傞",4,"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"],["8fb3a1","凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"],["8fb4a1","匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"],["8fb5a1","咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"],["8fb6a1","嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",5,"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",4,"囱囫园"],["8fb7a1","囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",4,"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"],["8fb8a1","堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"],["8fb9a1","奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"],["8fbaa1","嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",4,"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"],["8fbba1","屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"],["8fbca1","巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",4,"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"],["8fbda1","彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",4,"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"],["8fbea1","悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",4,"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"],["8fbfa1","懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"],["8fc0a1","捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"],["8fc1a1","擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"],["8fc2a1","昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"],["8fc3a1","杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",4,"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"],["8fc4a1","棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"],["8fc5a1","樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"],["8fc6a1","歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"],["8fc7a1","泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"],["8fc8a1","湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"],["8fc9a1","濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",4,"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",4,"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"],["8fcaa1","煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"],["8fcba1","狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"],["8fcca1","珿琀琁琄琇琊琑琚琛琤琦琨",9,"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"],["8fcda1","甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",5,"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"],["8fcea1","瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",6,"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"],["8fcfa1","睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"],["8fd0a1","碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"],["8fd1a1","秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"],["8fd2a1","笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",5],["8fd3a1","籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"],["8fd4a1","綞綦綧綪綳綶綷綹緂",4,"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"],["8fd5a1","罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"],["8fd6a1","胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"],["8fd7a1","艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"],["8fd8a1","荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"],["8fd9a1","蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",4,"蕖蕙蕜",6,"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"],["8fdaa1","藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",4,"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"],["8fdba1","蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",6,"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"],["8fdca1","蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",4,"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"],["8fdda1","襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",4,"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"],["8fdea1","誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",4,"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"],["8fdfa1","貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"],["8fe0a1","踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"],["8fe1a1","轃轇轏轑",4,"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"],["8fe2a1","郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"],["8fe3a1","釂釃釅釓釔釗釙釚釞釤釥釩釪釬",5,"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",4,"鉻鉼鉽鉿銈銉銊銍銎銒銗"],["8fe4a1","銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",4,"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"],["8fe5a1","鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",4,"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"],["8fe6a1","镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"],["8fe7a1","霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"],["8fe8a1","頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",4,"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"],["8fe9a1","馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",4],["8feaa1","鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",4,"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"],["8feba1","鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",4,"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"],["8feca1","鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"],["8feda1","黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",4,"齓齕齖齗齘齚齝齞齨齩齭",4,"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"]]');
}, function(e) {
	e.exports = JSON.parse('{"uChars":[128,165,169,178,184,216,226,235,238,244,248,251,253,258,276,284,300,325,329,334,364,463,465,467,469,471,473,475,477,506,594,610,712,716,730,930,938,962,970,1026,1104,1106,8209,8215,8218,8222,8231,8241,8244,8246,8252,8365,8452,8454,8458,8471,8482,8556,8570,8596,8602,8713,8720,8722,8726,8731,8737,8740,8742,8748,8751,8760,8766,8777,8781,8787,8802,8808,8816,8854,8858,8870,8896,8979,9322,9372,9548,9588,9616,9622,9634,9652,9662,9672,9676,9680,9702,9735,9738,9793,9795,11906,11909,11913,11917,11928,11944,11947,11951,11956,11960,11964,11979,12284,12292,12312,12319,12330,12351,12436,12447,12535,12543,12586,12842,12850,12964,13200,13215,13218,13253,13263,13267,13270,13384,13428,13727,13839,13851,14617,14703,14801,14816,14964,15183,15471,15585,16471,16736,17208,17325,17330,17374,17623,17997,18018,18212,18218,18301,18318,18760,18811,18814,18820,18823,18844,18848,18872,19576,19620,19738,19887,40870,59244,59336,59367,59413,59417,59423,59431,59437,59443,59452,59460,59478,59493,63789,63866,63894,63976,63986,64016,64018,64021,64025,64034,64037,64042,65074,65093,65107,65112,65127,65132,65375,65510,65536],"gbChars":[0,36,38,45,50,81,89,95,96,100,103,104,105,109,126,133,148,172,175,179,208,306,307,308,309,310,311,312,313,341,428,443,544,545,558,741,742,749,750,805,819,820,7922,7924,7925,7927,7934,7943,7944,7945,7950,8062,8148,8149,8152,8164,8174,8236,8240,8262,8264,8374,8380,8381,8384,8388,8390,8392,8393,8394,8396,8401,8406,8416,8419,8424,8437,8439,8445,8482,8485,8496,8521,8603,8936,8946,9046,9050,9063,9066,9076,9092,9100,9108,9111,9113,9131,9162,9164,9218,9219,11329,11331,11334,11336,11346,11361,11363,11366,11370,11372,11375,11389,11682,11686,11687,11692,11694,11714,11716,11723,11725,11730,11736,11982,11989,12102,12336,12348,12350,12384,12393,12395,12397,12510,12553,12851,12962,12973,13738,13823,13919,13933,14080,14298,14585,14698,15583,15847,16318,16434,16438,16481,16729,17102,17122,17315,17320,17402,17418,17859,17909,17911,17915,17916,17936,17939,17961,18664,18703,18814,18962,19043,33469,33470,33471,33484,33485,33490,33497,33501,33505,33513,33520,33536,33550,37845,37921,37948,38029,38038,38064,38065,38066,38069,38075,38076,38078,39108,39109,39113,39114,39115,39116,39265,39394,189000]}');
}, function(e) {
	e.exports = JSON.parse('[["0","\\u0000",127],["8141","갂갃갅갆갋",4,"갘갞갟갡갢갣갥",6,"갮갲갳갴"],["8161","갵갶갷갺갻갽갾갿걁",9,"걌걎",5,"걕"],["8181","걖걗걙걚걛걝",18,"걲걳걵걶걹걻",4,"겂겇겈겍겎겏겑겒겓겕",6,"겞겢",5,"겫겭겮겱",6,"겺겾겿곀곂곃곅곆곇곉곊곋곍",7,"곖곘",7,"곢곣곥곦곩곫곭곮곲곴곷",4,"곾곿괁괂괃괅괇",4,"괎괐괒괓"],["8241","괔괕괖괗괙괚괛괝괞괟괡",7,"괪괫괮",5],["8261","괶괷괹괺괻괽",6,"굆굈굊",5,"굑굒굓굕굖굗"],["8281","굙",7,"굢굤",7,"굮굯굱굲굷굸굹굺굾궀궃",4,"궊궋궍궎궏궑",10,"궞",5,"궥",17,"궸",7,"귂귃귅귆귇귉",6,"귒귔",7,"귝귞귟귡귢귣귥",18],["8341","귺귻귽귾긂",5,"긊긌긎",5,"긕",7],["8361","긝",18,"긲긳긵긶긹긻긼"],["8381","긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",4,"깞깢깣깤깦깧깪깫깭깮깯깱",6,"깺깾",5,"꺆",5,"꺍",46,"꺿껁껂껃껅",6,"껎껒",5,"껚껛껝",8],["8441","껦껧껩껪껬껮",5,"껵껶껷껹껺껻껽",8],["8461","꼆꼉꼊꼋꼌꼎꼏꼑",18],["8481","꼤",7,"꼮꼯꼱꼳꼵",6,"꼾꽀꽄꽅꽆꽇꽊",5,"꽑",10,"꽞",5,"꽦",18,"꽺",5,"꾁꾂꾃꾅꾆꾇꾉",6,"꾒꾓꾔꾖",5,"꾝",26,"꾺꾻꾽꾾"],["8541","꾿꿁",5,"꿊꿌꿏",4,"꿕",6,"꿝",4],["8561","꿢",5,"꿪",5,"꿲꿳꿵꿶꿷꿹",6,"뀂뀃"],["8581","뀅",6,"뀍뀎뀏뀑뀒뀓뀕",6,"뀞",9,"뀩",26,"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",29,"끾끿낁낂낃낅",6,"낎낐낒",5,"낛낝낞낣낤"],["8641","낥낦낧낪낰낲낶낷낹낺낻낽",6,"냆냊",5,"냒"],["8661","냓냕냖냗냙",6,"냡냢냣냤냦",10],["8681","냱",22,"넊넍넎넏넑넔넕넖넗넚넞",4,"넦넧넩넪넫넭",6,"넶넺",5,"녂녃녅녆녇녉",6,"녒녓녖녗녙녚녛녝녞녟녡",22,"녺녻녽녾녿놁놃",4,"놊놌놎놏놐놑놕놖놗놙놚놛놝"],["8741","놞",9,"놩",15],["8761","놹",18,"뇍뇎뇏뇑뇒뇓뇕"],["8781","뇖",5,"뇞뇠",7,"뇪뇫뇭뇮뇯뇱",7,"뇺뇼뇾",5,"눆눇눉눊눍",6,"눖눘눚",5,"눡",18,"눵",6,"눽",26,"뉙뉚뉛뉝뉞뉟뉡",6,"뉪",4],["8841","뉯",4,"뉶",5,"뉽",6,"늆늇늈늊",4],["8861","늏늒늓늕늖늗늛",4,"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"],["8881","늸",15,"닊닋닍닎닏닑닓",4,"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",6,"댒댖",5,"댝",54,"덗덙덚덝덠덡덢덣"],["8941","덦덨덪덬덭덯덲덳덵덶덷덹",6,"뎂뎆",5,"뎍"],["8961","뎎뎏뎑뎒뎓뎕",10,"뎢",5,"뎩뎪뎫뎭"],["8981","뎮",21,"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",18,"돽",18,"됑",6,"됙됚됛됝됞됟됡",6,"됪됬",7,"됵",15],["8a41","둅",10,"둒둓둕둖둗둙",6,"둢둤둦"],["8a61","둧",4,"둭",18,"뒁뒂"],["8a81","뒃",4,"뒉",19,"뒞",5,"뒥뒦뒧뒩뒪뒫뒭",7,"뒶뒸뒺",5,"듁듂듃듅듆듇듉",6,"듑듒듓듔듖",5,"듞듟듡듢듥듧",4,"듮듰듲",5,"듹",26,"딖딗딙딚딝"],["8b41","딞",5,"딦딫",4,"딲딳딵딶딷딹",6,"땂땆"],["8b61","땇땈땉땊땎땏땑땒땓땕",6,"땞땢",8],["8b81","땫",52,"떢떣떥떦떧떩떬떭떮떯떲떶",4,"떾떿뗁뗂뗃뗅",6,"뗎뗒",5,"뗙",18,"뗭",18],["8c41","똀",15,"똒똓똕똖똗똙",4],["8c61","똞",6,"똦",5,"똭",6,"똵",5],["8c81","똻",12,"뙉",26,"뙥뙦뙧뙩",50,"뚞뚟뚡뚢뚣뚥",5,"뚭뚮뚯뚰뚲",16],["8d41","뛃",16,"뛕",8],["8d61","뛞",17,"뛱뛲뛳뛵뛶뛷뛹뛺"],["8d81","뛻",4,"뜂뜃뜄뜆",33,"뜪뜫뜭뜮뜱",6,"뜺뜼",7,"띅띆띇띉띊띋띍",6,"띖",9,"띡띢띣띥띦띧띩",6,"띲띴띶",5,"띾띿랁랂랃랅",6,"랎랓랔랕랚랛랝랞"],["8e41","랟랡",6,"랪랮",5,"랶랷랹",8],["8e61","럂",4,"럈럊",19],["8e81","럞",13,"럮럯럱럲럳럵",6,"럾렂",4,"렊렋렍렎렏렑",6,"렚렜렞",5,"렦렧렩렪렫렭",6,"렶렺",5,"롁롂롃롅",11,"롒롔",7,"롞롟롡롢롣롥",6,"롮롰롲",5,"롹롺롻롽",7],["8f41","뢅",7,"뢎",17],["8f61","뢠",7,"뢩",6,"뢱뢲뢳뢵뢶뢷뢹",4],["8f81","뢾뢿룂룄룆",5,"룍룎룏룑룒룓룕",7,"룞룠룢",5,"룪룫룭룮룯룱",6,"룺룼룾",5,"뤅",18,"뤙",6,"뤡",26,"뤾뤿륁륂륃륅",6,"륍륎륐륒",5],["9041","륚륛륝륞륟륡",6,"륪륬륮",5,"륶륷륹륺륻륽"],["9061","륾",5,"릆릈릋릌릏",15],["9081","릟",12,"릮릯릱릲릳릵",6,"릾맀맂",5,"맊맋맍맓",4,"맚맜맟맠맢맦맧맩맪맫맭",6,"맶맻",4,"먂",5,"먉",11,"먖",33,"먺먻먽먾먿멁멃멄멅멆"],["9141","멇멊멌멏멐멑멒멖멗멙멚멛멝",6,"멦멪",5],["9161","멲멳멵멶멷멹",9,"몆몈몉몊몋몍",5],["9181","몓",20,"몪몭몮몯몱몳",4,"몺몼몾",5,"뫅뫆뫇뫉",14,"뫚",33,"뫽뫾뫿묁묂묃묅",7,"묎묐묒",5,"묙묚묛묝묞묟묡",6],["9241","묨묪묬",7,"묷묹묺묿",4,"뭆뭈뭊뭋뭌뭎뭑뭒"],["9261","뭓뭕뭖뭗뭙",7,"뭢뭤",7,"뭭",4],["9281","뭲",21,"뮉뮊뮋뮍뮎뮏뮑",18,"뮥뮦뮧뮩뮪뮫뮭",6,"뮵뮶뮸",7,"믁믂믃믅믆믇믉",6,"믑믒믔",35,"믺믻믽믾밁"],["9341","밃",4,"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"],["9361","밶밷밹",6,"뱂뱆뱇뱈뱊뱋뱎뱏뱑",8],["9381","뱚뱛뱜뱞",37,"벆벇벉벊벍벏",4,"벖벘벛",4,"벢벣벥벦벩",6,"벲벶",5,"벾벿볁볂볃볅",7,"볎볒볓볔볖볗볙볚볛볝",22,"볷볹볺볻볽"],["9441","볾",5,"봆봈봊",5,"봑봒봓봕",8],["9461","봞",5,"봥",6,"봭",12],["9481","봺",5,"뵁",6,"뵊뵋뵍뵎뵏뵑",6,"뵚",9,"뵥뵦뵧뵩",22,"붂붃붅붆붋",4,"붒붔붖붗붘붛붝",6,"붥",10,"붱",6,"붹",24],["9541","뷒뷓뷖뷗뷙뷚뷛뷝",11,"뷪",5,"뷱"],["9561","뷲뷳뷵뷶뷷뷹",6,"븁븂븄븆",5,"븎븏븑븒븓"],["9581","븕",6,"븞븠",35,"빆빇빉빊빋빍빏",4,"빖빘빜빝빞빟빢빣빥빦빧빩빫",4,"빲빶",4,"빾빿뺁뺂뺃뺅",6,"뺎뺒",5,"뺚",13,"뺩",14],["9641","뺸",23,"뻒뻓"],["9661","뻕뻖뻙",6,"뻡뻢뻦",5,"뻭",8],["9681","뻶",10,"뼂",5,"뼊",13,"뼚뼞",33,"뽂뽃뽅뽆뽇뽉",6,"뽒뽓뽔뽖",44],["9741","뾃",16,"뾕",8],["9761","뾞",17,"뾱",7],["9781","뾹",11,"뿆",5,"뿎뿏뿑뿒뿓뿕",6,"뿝뿞뿠뿢",89,"쀽쀾쀿"],["9841","쁀",16,"쁒",5,"쁙쁚쁛"],["9861","쁝쁞쁟쁡",6,"쁪",15],["9881","쁺",21,"삒삓삕삖삗삙",6,"삢삤삦",5,"삮삱삲삷",4,"삾샂샃샄샆샇샊샋샍샎샏샑",6,"샚샞",5,"샦샧샩샪샫샭",6,"샶샸샺",5,"섁섂섃섅섆섇섉",6,"섑섒섓섔섖",5,"섡섢섥섨섩섪섫섮"],["9941","섲섳섴섵섷섺섻섽섾섿셁",6,"셊셎",5,"셖셗"],["9961","셙셚셛셝",6,"셦셪",5,"셱셲셳셵셶셷셹셺셻"],["9981","셼",8,"솆",5,"솏솑솒솓솕솗",4,"솞솠솢솣솤솦솧솪솫솭솮솯솱",11,"솾",5,"쇅쇆쇇쇉쇊쇋쇍",6,"쇕쇖쇙",6,"쇡쇢쇣쇥쇦쇧쇩",6,"쇲쇴",7,"쇾쇿숁숂숃숅",6,"숎숐숒",5,"숚숛숝숞숡숢숣"],["9a41","숤숥숦숧숪숬숮숰숳숵",16],["9a61","쉆쉇쉉",6,"쉒쉓쉕쉖쉗쉙",6,"쉡쉢쉣쉤쉦"],["9a81","쉧",4,"쉮쉯쉱쉲쉳쉵",6,"쉾슀슂",5,"슊",5,"슑",6,"슙슚슜슞",5,"슦슧슩슪슫슮",5,"슶슸슺",33,"싞싟싡싢싥",5,"싮싰싲싳싴싵싷싺싽싾싿쌁",6,"쌊쌋쌎쌏"],["9b41","쌐쌑쌒쌖쌗쌙쌚쌛쌝",6,"쌦쌧쌪",8],["9b61","쌳",17,"썆",7],["9b81","썎",25,"썪썫썭썮썯썱썳",4,"썺썻썾",5,"쎅쎆쎇쎉쎊쎋쎍",50,"쏁",22,"쏚"],["9c41","쏛쏝쏞쏡쏣",4,"쏪쏫쏬쏮",5,"쏶쏷쏹",5],["9c61","쏿",8,"쐉",6,"쐑",9],["9c81","쐛",8,"쐥",6,"쐭쐮쐯쐱쐲쐳쐵",6,"쐾",9,"쑉",26,"쑦쑧쑩쑪쑫쑭",6,"쑶쑷쑸쑺",5,"쒁",18,"쒕",6,"쒝",12],["9d41","쒪",13,"쒹쒺쒻쒽",8],["9d61","쓆",25],["9d81","쓠",8,"쓪",5,"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",9,"씍씎씏씑씒씓씕",6,"씝",10,"씪씫씭씮씯씱",6,"씺씼씾",5,"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",6,"앲앶",5,"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"],["9e41","얖얙얚얛얝얞얟얡",7,"얪",9,"얶"],["9e61","얷얺얿",4,"엋엍엏엒엓엕엖엗엙",6,"엢엤엦엧"],["9e81","엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",6,"옚옝",6,"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",6,"왒왖",5,"왞왟왡",10,"왭왮왰왲",5,"왺왻왽왾왿욁",6,"욊욌욎",5,"욖욗욙욚욛욝",6,"욦"],["9f41","욨욪",5,"욲욳욵욶욷욻",4,"웂웄웆",5,"웎"],["9f61","웏웑웒웓웕",6,"웞웟웢",5,"웪웫웭웮웯웱웲"],["9f81","웳",4,"웺웻웼웾",5,"윆윇윉윊윋윍",6,"윖윘윚",5,"윢윣윥윦윧윩",6,"윲윴윶윸윹윺윻윾윿읁읂읃읅",4,"읋읎읐읙읚읛읝읞읟읡",6,"읩읪읬",7,"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",4,"잢잧",4,"잮잯잱잲잳잵잶잷"],["a041","잸잹잺잻잾쟂",5,"쟊쟋쟍쟏쟑",6,"쟙쟚쟛쟜"],["a061","쟞",5,"쟥쟦쟧쟩쟪쟫쟭",13],["a081","쟻",4,"젂젃젅젆젇젉젋",4,"젒젔젗",4,"젞젟젡젢젣젥",6,"젮젰젲",5,"젹젺젻젽젾젿졁",6,"졊졋졎",5,"졕",26,"졲졳졵졶졷졹졻",4,"좂좄좈좉좊좎",5,"좕",7,"좞좠좢좣좤"],["a141","좥좦좧좩",18,"좾좿죀죁"],["a161","죂죃죅죆죇죉죊죋죍",6,"죖죘죚",5,"죢죣죥"],["a181","죦",14,"죶",5,"죾죿줁줂줃줇",4,"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",9,"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"],["a241","줐줒",5,"줙",18],["a261","줭",6,"줵",18],["a281","쥈",7,"쥒쥓쥕쥖쥗쥙",6,"쥢쥤",7,"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"],["a341","쥱쥲쥳쥵",6,"쥽",10,"즊즋즍즎즏"],["a361","즑",6,"즚즜즞",16],["a381","즯",16,"짂짃짅짆짉짋",4,"짒짔짗짘짛！",58,"￦］",32,"￣"],["a441","짞짟짡짣짥짦짨짩짪짫짮짲",5,"짺짻짽짾짿쨁쨂쨃쨄"],["a461","쨅쨆쨇쨊쨎",5,"쨕쨖쨗쨙",12],["a481","쨦쨧쨨쨪",28,"ㄱ",93],["a541","쩇",4,"쩎쩏쩑쩒쩓쩕",6,"쩞쩢",5,"쩩쩪"],["a561","쩫",17,"쩾",5,"쪅쪆"],["a581","쪇",16,"쪙",14,"ⅰ",9],["a5b0","Ⅰ",9],["a5c1","Α",16,"Σ",6],["a5e1","α",16,"σ",6],["a641","쪨",19,"쪾쪿쫁쫂쫃쫅"],["a661","쫆",5,"쫎쫐쫒쫔쫕쫖쫗쫚",5,"쫡",6],["a681","쫨쫩쫪쫫쫭",6,"쫵",18,"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",7],["a741","쬋",4,"쬑쬒쬓쬕쬖쬗쬙",6,"쬢",7],["a761","쬪",22,"쭂쭃쭄"],["a781","쭅쭆쭇쭊쭋쭍쭎쭏쭑",6,"쭚쭛쭜쭞",5,"쭥",7,"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",9,"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",9,"㎀",4,"㎺",5,"㎐",4,"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"],["a841","쭭",10,"쭺",14],["a861","쮉",18,"쮝",6],["a881","쮤",19,"쮹",11,"ÆÐªĦ"],["a8a6","Ĳ"],["a8a8","ĿŁØŒºÞŦŊ"],["a8b1","㉠",27,"ⓐ",25,"①",14,"½⅓⅔¼¾⅛⅜⅝⅞"],["a941","쯅",14,"쯕",10],["a961","쯠쯡쯢쯣쯥쯦쯨쯪",18],["a981","쯽",14,"찎찏찑찒찓찕",6,"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",27,"⒜",25,"⑴",14,"¹²³⁴ⁿ₁₂₃₄"],["aa41","찥찦찪찫찭찯찱",6,"찺찿",4,"챆챇챉챊챋챍챎"],["aa61","챏",4,"챖챚",5,"챡챢챣챥챧챩",6,"챱챲"],["aa81","챳챴챶",29,"ぁ",82],["ab41","첔첕첖첗첚첛첝첞첟첡",6,"첪첮",5,"첶첷첹"],["ab61","첺첻첽",6,"쳆쳈쳊",5,"쳑쳒쳓쳕",5],["ab81","쳛",8,"쳥",6,"쳭쳮쳯쳱",12,"ァ",85],["ac41","쳾쳿촀촂",5,"촊촋촍촎촏촑",6,"촚촜촞촟촠"],["ac61","촡촢촣촥촦촧촩촪촫촭",11,"촺",4],["ac81","촿",28,"쵝쵞쵟А",5,"ЁЖ",25],["acd1","а",5,"ёж",25],["ad41","쵡쵢쵣쵥",6,"쵮쵰쵲",5,"쵹",7],["ad61","춁",6,"춉",10,"춖춗춙춚춛춝춞춟"],["ad81","춠춡춢춣춦춨춪",5,"춱",18,"췅"],["ae41","췆",5,"췍췎췏췑",16],["ae61","췢",5,"췩췪췫췭췮췯췱",6,"췺췼췾",4],["ae81","츃츅츆츇츉츊츋츍",6,"츕츖츗츘츚",5,"츢츣츥츦츧츩츪츫"],["af41","츬츭츮츯츲츴츶",19],["af61","칊",13,"칚칛칝칞칢",5,"칪칬"],["af81","칮",5,"칶칷칹칺칻칽",6,"캆캈캊",5,"캒캓캕캖캗캙"],["b041","캚",5,"캢캦",5,"캮",12],["b061","캻",5,"컂",19],["b081","컖",13,"컦컧컩컪컭",6,"컶컺",5,"가각간갇갈갉갊감",7,"같",4,"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"],["b141","켂켃켅켆켇켉",6,"켒켔켖",5,"켝켞켟켡켢켣"],["b161","켥",6,"켮켲",5,"켹",11],["b181","콅",14,"콖콗콙콚콛콝",6,"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"],["b241","콭콮콯콲콳콵콶콷콹",6,"쾁쾂쾃쾄쾆",5,"쾍"],["b261","쾎",18,"쾢",5,"쾩"],["b281","쾪",5,"쾱",18,"쿅",6,"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"],["b341","쿌",19,"쿢쿣쿥쿦쿧쿩"],["b361","쿪",5,"쿲쿴쿶",5,"쿽쿾쿿퀁퀂퀃퀅",5],["b381","퀋",5,"퀒",5,"퀙",19,"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",4,"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"],["b441","퀮",5,"퀶퀷퀹퀺퀻퀽",6,"큆큈큊",5],["b461","큑큒큓큕큖큗큙",6,"큡",10,"큮큯"],["b481","큱큲큳큵",6,"큾큿킀킂",18,"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",4,"닳담답닷",4,"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"],["b541","킕",14,"킦킧킩킪킫킭",5],["b561","킳킶킸킺",5,"탂탃탅탆탇탊",5,"탒탖",4],["b581","탛탞탟탡탢탣탥",6,"탮탲",5,"탹",11,"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"],["b641","턅",7,"턎",17],["b661","턠",15,"턲턳턵턶턷턹턻턼턽턾"],["b681","턿텂텆",5,"텎텏텑텒텓텕",6,"텞텠텢",5,"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"],["b741","텮",13,"텽",6,"톅톆톇톉톊"],["b761","톋",20,"톢톣톥톦톧"],["b781","톩",6,"톲톴톶톷톸톹톻톽톾톿퇁",14,"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"],["b841","퇐",7,"퇙",17],["b861","퇫",8,"퇵퇶퇷퇹",13],["b881","툈툊",5,"툑",24,"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",4,"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"],["b941","툪툫툮툯툱툲툳툵",6,"툾퉀퉂",5,"퉉퉊퉋퉌"],["b961","퉍",14,"퉝",6,"퉥퉦퉧퉨"],["b981","퉩",22,"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",4,"받",4,"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"],["ba41","튍튎튏튒튓튔튖",5,"튝튞튟튡튢튣튥",6,"튭"],["ba61","튮튯튰튲",5,"튺튻튽튾틁틃",4,"틊틌",5],["ba81","틒틓틕틖틗틙틚틛틝",6,"틦",9,"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"],["bb41","틻",4,"팂팄팆",5,"팏팑팒팓팕팗",4,"팞팢팣"],["bb61","팤팦팧팪팫팭팮팯팱",6,"팺팾",5,"퍆퍇퍈퍉"],["bb81","퍊",31,"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"],["bc41","퍪",17,"퍾퍿펁펂펃펅펆펇"],["bc61","펈펉펊펋펎펒",5,"펚펛펝펞펟펡",6,"펪펬펮"],["bc81","펯",4,"펵펶펷펹펺펻펽",6,"폆폇폊",5,"폑",5,"샥샨샬샴샵샷샹섀섄섈섐섕서",4,"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"],["bd41","폗폙",7,"폢폤",7,"폮폯폱폲폳폵폶폷"],["bd61","폸폹폺폻폾퐀퐂",5,"퐉",13],["bd81","퐗",5,"퐞",25,"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"],["be41","퐸",7,"푁푂푃푅",14],["be61","푔",7,"푝푞푟푡푢푣푥",7,"푮푰푱푲"],["be81","푳",4,"푺푻푽푾풁풃",4,"풊풌풎",5,"풕",8,"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",6,"엌엎"],["bf41","풞",10,"풪",14],["bf61","풹",18,"퓍퓎퓏퓑퓒퓓퓕"],["bf81","퓖",5,"퓝퓞퓠",7,"퓩퓪퓫퓭퓮퓯퓱",6,"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",5,"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"],["c041","퓾",5,"픅픆픇픉픊픋픍",6,"픖픘",5],["c061","픞",25],["c081","픸픹픺픻픾픿핁핂핃핅",6,"핎핐핒",5,"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",7,"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"],["c141","핤핦핧핪핬핮",5,"핶핷핹핺핻핽",6,"햆햊햋"],["c161","햌햍햎햏햑",19,"햦햧"],["c181","햨",31,"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"],["c241","헊헋헍헎헏헑헓",4,"헚헜헞",5,"헦헧헩헪헫헭헮"],["c261","헯",4,"헶헸헺",5,"혂혃혅혆혇혉",6,"혒"],["c281","혖",5,"혝혞혟혡혢혣혥",7,"혮",9,"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"],["c341","혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",4],["c361","홢",4,"홨홪",5,"홲홳홵",11],["c381","횁횂횄횆",5,"횎횏횑횒횓횕",7,"횞횠횢",5,"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"],["c441","횫횭횮횯횱",7,"횺횼",7,"훆훇훉훊훋"],["c461","훍훎훏훐훒훓훕훖훘훚",5,"훡훢훣훥훦훧훩",4],["c481","훮훯훱훲훳훴훶",5,"훾훿휁휂휃휅",11,"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"],["c541","휕휖휗휚휛휝휞휟휡",6,"휪휬휮",5,"휶휷휹"],["c561","휺휻휽",6,"흅흆흈흊",5,"흒흓흕흚",4],["c581","흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",6,"흾흿힀힂",5,"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"],["c641","힍힎힏힑",6,"힚힜힞",5],["c6a1","퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"],["c7a1","퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"],["c8a1","혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"],["caa1","伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"],["cba1","匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"],["cca1","瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"],["cda1","棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"],["cea1","科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"],["cfa1","區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"],["d0a1","鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"],["d1a1","朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",5,"那樂",4,"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"],["d2a1","納臘蠟衲囊娘廊",4,"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",5,"駑魯",10,"濃籠聾膿農惱牢磊腦賂雷尿壘",7,"嫩訥杻紐勒",5,"能菱陵尼泥匿溺多茶"],["d3a1","丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"],["d4a1","棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"],["d5a1","蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"],["d6a1","煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"],["d7a1","遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"],["d8a1","立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"],["d9a1","蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"],["daa1","汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"],["dba1","發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"],["dca1","碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"],["dda1","孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"],["dea1","脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"],["dfa1","傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"],["e0a1","胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"],["e1a1","聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"],["e2a1","戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"],["e3a1","嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"],["e4a1","沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"],["e5a1","櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"],["e6a1","旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"],["e7a1","簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"],["e8a1","烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"],["e9a1","窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"],["eaa1","運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"],["eba1","濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"],["eca1","議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"],["eda1","立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"],["eea1","障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"],["efa1","煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"],["f0a1","靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"],["f1a1","踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"],["f2a1","咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"],["f3a1","鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"],["f4a1","責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"],["f5a1","椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"],["f6a1","贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"],["f7a1","鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"],["f8a1","阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"],["f9a1","品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"],["faa1","行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"],["fba1","形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"],["fca1","禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"],["fda1","爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"]]');
}, function(e) {
	e.exports = JSON.parse('[["8740","䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"],["8767","綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"],["87a1","𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"],["8840","㇀",4,"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"],["88a1","ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"],["8940","𪎩𡅅"],["8943","攊"],["8946","丽滝鵎釟"],["894c","𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"],["89a1","琑糼緍楆竉刧"],["89ab","醌碸酞肼"],["89b0","贋胶𠧧"],["89b5","肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"],["89c1","溚舾甙"],["89c5","䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"],["8a40","𧶄唥"],["8a43","𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"],["8a64","𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"],["8a76","䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"],["8aa1","𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"],["8aac","䠋𠆩㿺塳𢶍"],["8ab2","𤗈𠓼𦂗𠽌𠶖啹䂻䎺"],["8abb","䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"],["8ac9","𪘁𠸉𢫏𢳉"],["8ace","𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"],["8adf","𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"],["8af6","𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"],["8b40","𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"],["8b55","𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"],["8ba1","𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"],["8bde","𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"],["8c40","倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"],["8ca1","𣏹椙橃𣱣泿"],["8ca7","爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"],["8cc9","顨杫䉶圽"],["8cce","藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"],["8ce6","峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"],["8d40","𠮟"],["8d42","𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"],["8da1","㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"],["8e40","𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"],["8ea1","繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"],["8f40","蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"],["8fa1","𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"],["9040","趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"],["90a1","𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"],["9140","𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"],["91a1","鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"],["9240","𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"],["92a1","働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"],["9340","媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"],["93a1","摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"],["9440","銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"],["94a1","㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"],["9540","𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"],["95a1","衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"],["9640","桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"],["96a1","𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"],["9740","愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"],["97a1","𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"],["9840","𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"],["98a1","咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"],["9940","䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"],["99a1","䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"],["9a40","鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"],["9aa1","黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"],["9b40","𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"],["9b62","𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"],["9ba1","椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"],["9c40","嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"],["9ca1","㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"],["9d40","𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"],["9da1","辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"],["9e40","𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"],["9ea1","鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"],["9ead","𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"],["9ec5","㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"],["9ef5","噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"],["9f40","籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"],["9f4f","凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"],["9fa1","椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"],["9fae","酙隁酜"],["9fb2","酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"],["9fc1","𤤙盖鮝个𠳔莾衂"],["9fc9","届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"],["9fdb","歒酼龥鮗頮颴骺麨麄煺笔"],["9fe7","毺蠘罸"],["9feb","嘠𪙊蹷齓"],["9ff0","跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"],["a040","𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"],["a055","𡠻𦸅"],["a058","詾𢔛"],["a05b","惽癧髗鵄鍮鮏蟵"],["a063","蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"],["a073","坟慯抦戹拎㩜懢厪𣏵捤栂㗒"],["a0a1","嵗𨯂迚𨸹"],["a0a6","僙𡵆礆匲阸𠼻䁥"],["a0ae","矾"],["a0b0","糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"],["a0d4","覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"],["a0e2","罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"],["a3c0","␀",31,"␡"],["c6a1","①",9,"⑴",9,"ⅰ",9,"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",23],["c740","す",58,"ァアィイ"],["c7a1","ゥ",81,"А",5,"ЁЖ",4],["c840","Л",26,"ёж",25,"⇧↸↹㇏𠃌乚𠂊刂䒑"],["c8a1","龰冈龱𧘇"],["c8cd","￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"],["c8f5","ʃɐɛɔɵœøŋʊɪ"],["f9fe","￭"],["fa40","𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"],["faa1","鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"],["fb40","𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"],["fba1","𡘾娤啓𡚒蔅姉𠵎𦲁������𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"],["fc40","廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"],["fca1","𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"],["fd40","𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"],["fda1","𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"],["fe40","鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"],["fea1","𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"]]');
}, function(e, t) {}, function(e, t) {}, function(e, t, r) {
	r(355), e.exports = r(3).Date.now;
}, function(e, t, r) {
	var n = r(7);
	n(n.S, "Date", {
		now: function() {
			return (new Date).getTime();
		}
	});
}, function(e, t, r) {
	r(357), e.exports = r(3).String.fromCodePoint;
}, function(e, t, r) {
	var n = r(7), a = r(109), o = String.fromCharCode, i = String.fromCodePoint;
	n(n.S + n.F * (!!i && 1 != i.length), "String", {
		fromCodePoint: function fromCodePoint(e) {
			for (var t, r = [], n = arguments.length, i = 0; n > i; ) {
				if (t = +arguments[i++], a(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
				r.push(t < 65536 ? o(t) : o(55296 + ((t -= 65536) >> 10), t % 1024 + 56320));
			}
			return r.join("");
		}
	});
}, function(e, t, r) {
	var n = function(e) {
		"use strict";
		var t, r = Object.prototype, n = r.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
		function wrap(e, t, r, n) {
			var a = t && t.prototype instanceof Generator ? t : Generator, o = Object.create(a.prototype), i = new Context(n || []);
			return o._invoke = function makeInvokeMethod(e, t, r) {
				var n = c;
				return function invoke(a, o) {
					if (n === l) throw new Error("Generator is already running");
					if (n === p) {
						if ("throw" === a) throw o;
						return doneResult();
					}
					for (r.method = a, r.arg = o; ;) {
						var i = r.delegate;
						if (i) {
							var s = maybeInvokeDelegate(i, r);
							if (s) {
								if (s === f) continue;
								return s;
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
							if (n === c) throw n = p, r.arg;
							r.dispatchException(r.arg);
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = l;
						var d = tryCatch(e, t, r);
						if ("normal" === d.type) {
							if (n = r.done ? p : u, d.arg === f) continue;
							return {
								value: d.arg,
								done: r.done
							};
						}
						"throw" === d.type && (n = p, r.method = "throw", r.arg = d.arg);
					}
				};
			}(e, r, i), o;
		}
		function tryCatch(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				};
			} catch (e) {
				return {
					type: "throw",
					arg: e
				};
			}
		}
		e.wrap = wrap;
		var c = "suspendedStart", u = "suspendedYield", l = "executing", p = "completed", f = {};
		function Generator() {}
		function GeneratorFunction() {}
		function GeneratorFunctionPrototype() {}
		var d = {};
		d[o] = function() {
			return this;
		};
		var _ = Object.getPrototypeOf, h = _ && _(_(values([])));
		h && h !== r && n.call(h, o) && (d = h);
		var m = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(d);
		function defineIteratorMethods(e) {
			[ "next", "throw", "return" ].forEach((function(t) {
				e[t] = function(e) {
					return this._invoke(t, e);
				};
			}));
		}
		function AsyncIterator(e) {
			var t;
			this._invoke = function enqueue(r, a) {
				function callInvokeWithMethodAndArg() {
					return new Promise((function(t, o) {
						!function invoke(t, r, a, o) {
							var i = tryCatch(e[t], e, r);
							if ("throw" !== i.type) {
								var s = i.arg, c = s.value;
								return c && "object" == typeof c && n.call(c, "__await") ? Promise.resolve(c.__await).then((function(e) {
									invoke("next", e, a, o);
								}), (function(e) {
									invoke("throw", e, a, o);
								})) : Promise.resolve(c).then((function(e) {
									s.value = e, a(s);
								}), (function(e) {
									return invoke("throw", e, a, o);
								}));
							}
							o(i.arg);
						}(r, a, t, o);
					}));
				}
				return t = t ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
			};
		}
		function maybeInvokeDelegate(e, r) {
			var n = e.iterator[r.method];
			if (n === t) {
				if (r.delegate = null, "throw" === r.method) {
					if (e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r),
					"throw" === r.method)) return f;
					r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
				}
				return f;
			}
			var a = tryCatch(n, e.iterator, r.arg);
			if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null,
				f;
			var o = a.arg;
			return o ? o.done ? (r[e.resultName] = o.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next",
				r.arg = t), r.delegate = null, f) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"),
				r.delegate = null, f);
		}
		function pushTryEntry(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
				this.tryEntries.push(t);
		}
		function resetTryEntry(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t;
		}
		function Context(e) {
			this.tryEntries = [ {
				tryLoc: "root"
			} ], e.forEach(pushTryEntry, this), this.reset(!0);
		}
		function values(e) {
			if (e) {
				var r = e[o];
				if (r) return r.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var a = -1, i = function next() {
						for (;++a < e.length; ) if (n.call(e, a)) return next.value = e[a], next.done = !1,
							next;
						return next.value = t, next.done = !0, next;
					};
					return i.next = i;
				}
			}
			return {
				next: doneResult
			};
		}
		function doneResult() {
			return {
				value: t,
				done: !0
			};
		}
		return GeneratorFunction.prototype = m.constructor = GeneratorFunctionPrototype,
			GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[s] = GeneratorFunction.displayName = "GeneratorFunction",
			e.isGeneratorFunction = function(e) {
				var t = "function" == typeof e && e.constructor;
				return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name));
			}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype,
			s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(m), e;
		}, e.awrap = function(e) {
			return {
				__await: e
			};
		}, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[i] = function() {
			return this;
		}, e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, a) {
			var o = new AsyncIterator(wrap(t, r, n, a));
			return e.isGeneratorFunction(r) ? o : o.next().then((function(e) {
				return e.done ? e.value : o.next();
			}));
		}, defineIteratorMethods(m), m[s] = "Generator", m[o] = function() {
			return this;
		}, m.toString = function() {
			return "[object Generator]";
		}, e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(), function next() {
				for (;t.length; ) {
					var r = t.pop();
					if (r in e) return next.value = r, next.done = !1, next;
				}
				return next.done = !0, next;
			};
		}, e.values = values, Context.prototype = {
			constructor: Context,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null,
					this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval;
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var r = this;
				function handle(n, a) {
					return i.type = "throw", i.arg = e, r.next = n, a && (r.method = "next", r.arg = t),
						!!a;
				}
				for (var a = this.tryEntries.length - 1; a >= 0; --a) {
					var o = this.tryEntries[a], i = o.completion;
					if ("root" === o.tryLoc) return handle("end");
					if (o.tryLoc <= this.prev) {
						var s = n.call(o, "catchLoc"), c = n.call(o, "finallyLoc");
						if (s && c) {
							if (this.prev < o.catchLoc) return handle(o.catchLoc, !0);
							if (this.prev < o.finallyLoc) return handle(o.finallyLoc);
						} else if (s) {
							if (this.prev < o.catchLoc) return handle(o.catchLoc, !0);
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < o.finallyLoc) return handle(o.finallyLoc);
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var r = this.tryEntries.length - 1; r >= 0; --r) {
					var a = this.tryEntries[r];
					if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
						var o = a;
						break;
					}
				}
				o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
				var i = o ? o.completion : {};
				return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc,
					f) : this.complete(i);
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
					this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
					f;
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), resetTryEntry(r),
						f;
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var a = n.arg;
							resetTryEntry(r);
						}
						return a;
					}
				}
				throw new Error("illegal catch attempt");
			},
			delegateYield: function(e, r, n) {
				return this.delegate = {
					iterator: values(e),
					resultName: r,
					nextLoc: n
				}, "next" === this.method && (this.arg = t), f;
			}
		}, e;
	}(e.exports);
	try {
		regeneratorRuntime = n;
	} catch (e) {
		Function("r", "regeneratorRuntime = r")(n);
	}
} ]);
