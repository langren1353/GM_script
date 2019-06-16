function(a, b) {
	function c() {
		if (!t.isReady) {
			try {
				w.documentElement.doScroll("left")
			} catch (a) {
				return void setTimeout(c, 1)
			}
			t.ready()
		}
	}

	function d(a, b) {
		b.src ? t.ajax({
			url: b.src,
			async: !1,
			dataType: "script"
		}) : t.globalEval(b.text || b.textContent || b.innerHTML || ""), b.parentNode && b.parentNode.removeChild(b)
	}

	function e(a, c, d, f, g, h) {
		var i = a.length;
		if ("object" == typeof c) {
			for (var j in c) e(a, j, c[j], f, g, d);
			return a
		}
		if (d !== b) {
			f = !h && f && t.isFunction(d);
			for (var k = 0; i > k; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
			return a
		}
		return i ? g(a[0], c) : b
	}

	function f() {
		return (new Date).getTime()
	}

	function g() {
		return !1
	}

	function h() {
		return !0
	}

	function i(a, b, c) {
		return c[0].type = a, t.event.handle.apply(b, c)
	}

	function j(a) {
		var b, c, d, e, f, g, h, i, j = [],
			k = [],
			l = arguments,
			m = t.data(this, "events");
		if (a.liveFired !== this && m && m.live && (!a.button || "click" !== a.type)) {
			a.liveFired = this;
			var n = m.live.slice(0);
			for (g = 0; g < n.length; g++) e = n[g], e.origType.replace(V, "") === a.type ? k.push(e.selector) : n.splice(g--, 1);
			for (d = t(a.target).closest(k, a.currentTarget), h = 0, i = d.length; i > h; h++)
				for (g = 0; g < n.length; g++) e = n[g], d[h].selector === e.selector && (f = d[h].elem, c = null, ("mouseenter" === e.preType || "mouseleave" === e.preType) && (c = t(a.relatedTarget).closest(e.selector)[0]), c && c === f || j.push({
					elem: f,
					handleObj: e
				}));
			for (h = 0, i = j.length; i > h; h++)
				if (d = j[h], a.currentTarget = d.elem, a.data = d.handleObj.data, a.handleObj = d.handleObj, d.handleObj.origHandler.apply(d.elem, l) === !1) {
					b = !1;
					break
				}
			return b
		}
	}

	function k(a, b) {
		return "live." + (a && "*" !== a ? a + "." : "") + b.replace(/\./g, "`").replace(/ /g, "&")
	}

	function l(a) {
		return !a || !a.parentNode || 11 === a.parentNode.nodeType
	}

	function m(a, b) {
		var c = 0;
		b.each(function() {
			if (this.nodeName === (a[c] && a[c].nodeName)) {
				var b = t.data(a[c++]),
					d = t.data(this, b),
					e = b && b.events;
				if (e) {
					delete d.handle, d.events = {};
					for (var f in e)
						for (var g in e[f]) t.event.add(this, f, e[f][g], e[f][g].data)
				}
			}
		})
	}

	function n(a, b, c) {
		var d, e, f, g = b && b[0] ? b[0].ownerDocument || b[0] : w;
		return 1 === a.length && "string" == typeof a[0] && a[0].length < 512 && g === w && !oa.test(a[0]) && (t.support.checkClone || !pa.test(a[0])) && (e = !0, f = t.fragments[a[0]], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), t.clean(a, g, d, c)), e && (t.fragments[a[0]] = f ? d : 1), {
			fragment: d,
			cacheable: e
		}
	}

	function o(a, b) {
		var c = {};
		return t.each(Ua.concat.apply([], Ua.slice(0, b)), function() {
			c[this] = a
		}), c
	}

	function p(a) {
		return "scrollTo" in a && a.document ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	var q, r, s, t = function(a, b) {
			return new t.fn.init(a, b)
		},
		u = a.jQuery,
		v = a.$,
		w = a.document,
		x = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
		y = /^.[^:#\[\.,]*$/,
		z = /\S/,
		A = /^(\s| )+|(\s| )+$/g,
		B = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		C = navigator.userAgent,
		D = !1,
		E = [],
		F = Object.prototype.toString,
		G = Object.prototype.hasOwnProperty,
		H = Array.prototype.push,
		I = Array.prototype.slice,
		J = Array.prototype.indexOf;
	t.fn = t.prototype = {
		init: function(a, c) {
			var d, e, f, g;
			if (!a) return this;
			if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
			if ("body" === a && !c) return this.context = w, this[0] = w.body, this.selector = "body", this.length = 1, this;
			if ("string" == typeof a) {
				if (d = x.exec(a), !d || !d[1] && c) return !c && /^\w+$/.test(a) ? (this.selector = a, this.context = w, a = w.getElementsByTagName(a), t.merge(this, a)) : !c || c.jquery ? (c || q).find(a) : t(c).find(a);
				if (d[1]) return g = c ? c.ownerDocument || c : w, f = B.exec(a), f ? t.isPlainObject(c) ? (a = [w.createElement(f[1])], t.fn.attr.call(a, c, !0)) : a = [g.createElement(f[1])] : (f = n([d[1]], [g]), a = (f.cacheable ? f.fragment.cloneNode(!0) : f.fragment).childNodes), t.merge(this, a);
				if (e = w.getElementById(d[2])) {
					if (e.id !== d[2]) return q.find(a);
					this.length = 1, this[0] = e
				}
				return this.context = w, this.selector = a, this
			}
			return t.isFunction(a) ? q.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), t.makeArray(a, this))
		},
		selector: "",
		jquery: "1.4.2",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return I.call(this, 0)
		},
		get: function(a) {
			return null == a ? this.toArray() : 0 > a ? this.slice(a)[0] : this[a]
		},
		pushStack: function(a, b, c) {
			var d = t();
			return t.isArray(a) ? H.apply(d, a) : t.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
		},
		each: function(a, b) {
			return t.each(this, a, b)
		},
		ready: function(a) {
			return t.bindReady(), t.isReady ? a.call(w, t) : E && E.push(a), this
		},
		eq: function(a) {
			return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(I.apply(this, arguments), "slice", I.call(arguments).join(","))
		},
		map: function(a) {
			return this.pushStack(t.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		end: function() {
			return this.prevObject || t(null)
		},
		push: H,
		sort: [].sort,
		splice: [].splice
	}, t.fn.init.prototype = t.fn, t.extend = t.fn.extend = function() {
		var a, c, d, e, f = arguments[0] || {},
			g = 1,
			h = arguments.length,
			i = !1;
		for ("boolean" == typeof f && (i = f, f = arguments[1] || {}, g = 2), "object" == typeof f || t.isFunction(f) || (f = {}), h === g && (f = this, --g); h > g; g++)
			if (null != (a = arguments[g]))
				for (c in a)
					if (d = f[c], e = a[c], f !== e)
						if (i && e && (t.isPlainObject(e) || t.isArray(e))) {
							var j = d && (t.isPlainObject(d) || t.isArray(d)) ? d : t.isArray(e) ? [] : {};
							f[c] = t.extend(i, j, e)
						} else e !== b && (f[c] = e);
		return f
	}, t.extend({
		noConflict: function(b) {
			return a.$ = v, b && (a.jQuery = u), t
		},
		isReady: !1,
		ready: function() {
			if (!t.isReady) {
				if (!w.body) return setTimeout(t.ready, 13);
				if (t.isReady = !0, E) {
					for (var a, b = 0; a = E[b++];) a.call(w, t);
					E = null
				}
				t.fn.triggerHandler && t(w).triggerHandler("ready")
			}
		},
		bindReady: function() {
			if (!D) {
				if (D = !0, "complete" === w.readyState) return t.ready();
				if (w.addEventListener) w.addEventListener("DOMContentLoaded", s, !1), a.addEventListener("load", t.ready, !1);
				else if (w.attachEvent) {
					w.attachEvent("onreadystatechange", s), a.attachEvent("onload", t.ready);
					var b = !1;
					try {
						b = null == a.frameElement
					} catch (d) {}
					w.documentElement.doScroll && b && c()
				}
			}
		},
		isFunction: function(a) {
			return "[object Function]" === F.call(a)
		},
		isArray: function(a) {
			return "[object Array]" === F.call(a)
		},
		isPlainObject: function(a) {
			if (!a || "[object Object]" !== F.call(a) || a.nodeType || a.setInterval) return !1;
			if (a.constructor && !G.call(a, "constructor") && !G.call(a.constructor.prototype, "isPrototypeOf")) return !1;
			var c;
			for (c in a);
			return c === b || G.call(a, c)
		},
		isEmptyObject: function(a) {
			for (var b in a) return !1;
			return !0
		},
		error: function(a) {
			throw a
		},
		parseJSON: function(b) {
			return "string" == typeof b && b ? (b = t.trim(b), /^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? a.JSON && a.JSON.parse ? a.JSON.parse(b) : new Function("return " + b)() : void t.error("Invalid JSON: " + b)) : null
		},
		noop: function() {},
		globalEval: function(a) {
			if (a && z.test(a)) {
				var b = w.head || w.getElementsByTagName("head")[0] || w.documentElement,
					c = w.createElement("script");
				t.support.scriptEval ? c.appendChild(w.createTextNode(a)) : c.text = a, b.insertBefore(c, b.firstChild), b.removeChild(c)
			}
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
		},
		each: function(a, c, d) {
			var e, f = 0,
				g = a.length,
				h = g === b || t.isFunction(a);
			if (d)
				if (h) {
					for (e in a)
						if (c.apply(a[e], d) === !1) break
				} else
					for (; g > f && c.apply(a[f++], d) !== !1;);
			else if (h) {
				for (e in a)
					if (c.call(a[e], e, a[e]) === !1) break
			} else
				for (var i = a[0]; g > f && c.call(i, f, i) !== !1; i = a[++f]);
			return a
		},
		trim: function(a) {
			return (a || "").replace(A, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (null == a.length || "string" == typeof a || t.isFunction(a) || "function" != typeof a && a.setInterval ? H.call(c, a) : t.merge(c, a)), c
		},
		inArray: function(a, b) {
			if (b.indexOf) return b.indexOf(a);
			for (var c = 0, d = b.length; d > c; c++)
				if (b[c] === a) return c;
			return -1
		},
		merge: function(a, c) {
			var d = a.length,
				e = 0;
			if ("number" == typeof c.length)
				for (var f = c.length; f > e; e++) a[d++] = c[e];
			else
				for (; c[e] !== b;) a[d++] = c[e++];
			return a.length = d, a
		},
		grep: function(a, b, c) {
			for (var d = [], e = 0, f = a.length; f > e; e++)!c != !b(a[e], e) && d.push(a[e]);
			return d
		},
		map: function(a, b, c) {
			for (var d, e = [], f = 0, g = a.length; g > f; f++) d = b(a[f], f, c), null != d && (e[e.length] = d);
			return e.concat.apply([], e)
		},
		guid: 1,
		proxy: function(a, c, d) {
			return 2 === arguments.length && ("string" == typeof c ? (d = a, a = d[c], c = b) : c && !t.isFunction(c) && (d = c, c = b)), !c && a && (c = function() {
				return a.apply(d || this, arguments)
			}), a && (c.guid = a.guid = a.guid || c.guid || t.guid++), c
		},
		uaMatch: function(a) {
			a = a.toLowerCase();
			var b = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		},
		browser: {}
	}), r = t.uaMatch(C), r.browser && (t.browser[r.browser] = !0, t.browser.version = r.version), t.browser.webkit && (t.browser.safari = !0), J && (t.inArray = function(a, b) {
		return J.call(b, a)
	}), q = t(w), w.addEventListener ? s = function() {
		w.removeEventListener("DOMContentLoaded", s, !1), t.ready()
	} : w.attachEvent && (s = function() {
		"complete" === w.readyState && (w.detachEvent("onreadystatechange", s), t.ready())
	}),
		function() {
			t.support = {};
			var b = w.documentElement,
				c = w.createElement("script"),
				d = w.createElement("div"),
				e = "script" + f();
			d.style.display = "none", d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
			var g = d.getElementsByTagName("*"),
				h = d.getElementsByTagName("a")[0];
			if (g && g.length && h) {
				t.support = {
					leadingWhitespace: 3 === d.firstChild.nodeType,
					tbody: !d.getElementsByTagName("tbody").length,
					htmlSerialize: !!d.getElementsByTagName("link").length,
					style: /red/.test(h.getAttribute("style")),
					hrefNormalized: "/a" === h.getAttribute("href"),
					opacity: /^0.55$/.test(h.style.opacity),
					cssFloat: !!h.style.cssFloat,
					checkOn: "on" === d.getElementsByTagName("input")[0].value,
					optSelected: w.createElement("select").appendChild(w.createElement("option")).selected,
					parentNode: null === d.removeChild(d.appendChild(w.createElement("div"))).parentNode,
					deleteExpando: !0,
					checkClone: !1,
					scriptEval: !1,
					noCloneEvent: !0,
					boxModel: null
				}, c.type = "text/javascript";
				try {
					c.appendChild(w.createTextNode("window." + e + "=1;"))
				} catch (i) {}
				b.insertBefore(c, b.firstChild), a[e] && (t.support.scriptEval = !0, delete a[e]);
				try {
					delete c.test
				} catch (i) {
					t.support.deleteExpando = !1
				}
				b.removeChild(c), d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function l() {
					t.support.noCloneEvent = !1, d.detachEvent("onclick", l)
				}), d.cloneNode(!0).fireEvent("onclick")), d = w.createElement("div"), d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
				var j = w.createDocumentFragment();
				j.appendChild(d.firstChild), t.support.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, t(function() {
					var a = w.createElement("div");
					a.style.width = a.style.paddingLeft = "1px", w.body.appendChild(a), t.boxModel = t.support.boxModel = 2 === a.offsetWidth, w.body.removeChild(a).style.display = "none", a = null
				});
				var k = function(a) {
					var b = w.createElement("div");
					a = "on" + a;
					var c = a in b;
					return c || (b.setAttribute(a, "return;"), c = "function" == typeof b[a]), b = null, c
				};
				t.support.submitBubbles = k("submit"), t.support.changeBubbles = k("change"), b = c = d = g = h = null
			}
		}(), t.props = {
		"for": "htmlFor",
		"class": "className",
		readonly: "readOnly",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		rowspan: "rowSpan",
		colspan: "colSpan",
		tabindex: "tabIndex",
		usemap: "useMap",
		frameborder: "frameBorder"
	};
	var K = "jQuery" + f(),
		L = 0,
		M = {};
	t.extend({
		cache: {},
		expando: K,
		noData: {
			embed: !0,
			object: !0,
			applet: !0
		},
		data: function(c, d, e) {
			if (!c.nodeName || !t.noData[c.nodeName.toLowerCase()]) {
				c = c == a ? M : c;
				var f, g = c[K],
					h = t.cache;
				return g || "string" != typeof d || e !== b ? (g || (g = ++L), "object" == typeof d ? (c[K] = g, f = h[g] = t.extend(!0, {}, d)) : h[g] || (c[K] = g, h[g] = {}), f = h[g], e !== b && (f[d] = e), "string" == typeof d ? f[d] : f) : null
			}
		},
		removeData: function(b, c) {
			if (!b.nodeName || !t.noData[b.nodeName.toLowerCase()]) {
				b = b == a ? M : b;
				var d = b[K],
					e = t.cache,
					f = e[d];
				c ? f && (delete f[c], t.isEmptyObject(f) && t.removeData(b)) : (t.support.deleteExpando ? delete b[t.expando] : b.removeAttribute && b.removeAttribute(t.expando), delete e[d])
			}
		}
	}), t.fn.extend({
		data: function(a, c) {
			if ("undefined" == typeof a && this.length) return t.data(this[0]);
			if ("object" == typeof a) return this.each(function() {
				t.data(this, a)
			});
			var d = a.split(".");
			if (d[1] = d[1] ? "." + d[1] : "", c === b) {
				var e = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
				return e === b && this.length && (e = t.data(this[0], a)), e === b && d[1] ? this.data(d[0]) : e
			}
			return this.trigger("setData" + d[1] + "!", [d[0], c]).each(function() {
				t.data(this, a, c)
			})
		},
		removeData: function(a) {
			return this.each(function() {
				t.removeData(this, a)
			})
		}
	}), t.extend({
		queue: function(a, b, c) {
			if (a) {
				b = (b || "fx") + "queue";
				var d = t.data(a, b);
				return c ? (!d || t.isArray(c) ? d = t.data(a, b, t.makeArray(c)) : d.push(c), d) : d || []
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = t.queue(a, b),
				d = c.shift();
			"inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), d.call(a, function() {
				t.dequeue(a, b)
			}))
		}
	}), t.fn.extend({
		queue: function(a, c) {
			return "string" != typeof a && (c = a, a = "fx"), c === b ? t.queue(this[0], a) : this.each(function(b, d) {
				var e = t.queue(this, a, c);
				"fx" === a && "inprogress" !== e[0] && t.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				t.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = t.fx ? t.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function() {
				var c = this;
				setTimeout(function() {
					t.dequeue(c, b)
				}, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		}
	});
	var N = /[\n\t]/g,
		O = /\s+/,
		P = /\r/g,
		Q = /href|src|style/,
		R = /(button|input)/i,
		S = /(button|input|object|select|textarea)/i,
		T = /^(a|area)$/i,
		U = /radio|checkbox/;
	t.fn.extend({
		attr: function(a, b) {
			return e(this, a, b, !0, t.attr)
		},
		removeAttr: function(a, b) {
			return this.each(function() {
				t.attr(this, a, ""), 1 === this.nodeType && this.removeAttribute(a)
			})
		},
		addClass: function(a) {
			if (t.isFunction(a)) return this.each(function(b) {
				var c = t(this);
				c.addClass(a.call(this, b, c.attr("class")))
			});
			if (a && "string" == typeof a)
				for (var b = (a || "").split(O), c = 0, d = this.length; d > c; c++) {
					var e = this[c];
					if (1 === e.nodeType)
						if (e.className) {
							for (var f = " " + e.className + " ", g = e.className, h = 0, i = b.length; i > h; h++) f.indexOf(" " + b[h] + " ") < 0 && (g += " " + b[h]);
							e.className = t.trim(g)
						} else e.className = a
				}
			return this
		},
		removeClass: function(a) {
			if (t.isFunction(a)) return this.each(function(b) {
				var c = t(this);
				c.removeClass(a.call(this, b, c.attr("class")))
			});
			if (a && "string" == typeof a || a === b)
				for (var c = (a || "").split(O), d = 0, e = this.length; e > d; d++) {
					var f = this[d];
					if (1 === f.nodeType && f.className)
						if (a) {
							for (var g = (" " + f.className + " ").replace(N, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
							f.className = t.trim(g)
						} else f.className = ""
				}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = "boolean" == typeof b;
			return t.isFunction(a) ? this.each(function(c) {
				var d = t(this);
				d.toggleClass(a.call(this, c, d.attr("class"), b), b)
			}) : this.each(function() {
				if ("string" === c)
					for (var e, f = 0, g = t(this), h = b, i = a.split(O); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
				else("undefined" === c || "boolean" === c) && (this.className && t.data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : t.data(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if ((" " + this[c].className + " ").replace(N, " ").indexOf(b) > -1) return !0;
			return !1
		},
		val: function(a) {
			if (a === b) {
				var c = this[0];
				if (c) {
					if (t.nodeName(c, "option")) return (c.attributes.value || {}).specified ? c.value : c.text;
					if (t.nodeName(c, "select")) {
						var d = c.selectedIndex,
							e = [],
							f = c.options,
							g = "select-one" === c.type;
						if (0 > d) return null;
						for (var h = g ? d : 0, i = g ? d + 1 : f.length; i > h; h++) {
							var j = f[h];
							if (j.selected) {
								if (a = t(j).val(), g) return a;
								e.push(a)
							}
						}
						return e
					}
					return U.test(c.type) && !t.support.checkOn ? null === c.getAttribute("value") ? "on" : c.value : (c.value || "").replace(P, "")
				}
				return b
			}
			var k = t.isFunction(a);
			return this.each(function(b) {
				var c = t(this),
					d = a;
				if (1 === this.nodeType)
					if (k && (d = a.call(this, b, c.val())), "number" == typeof d && (d += ""), t.isArray(d) && U.test(this.type)) this.checked = t.inArray(c.val(), d) >= 0;
					else if (t.nodeName(this, "select")) {
						var e = t.makeArray(d);
						t("option", this).each(function() {
							this.selected = t.inArray(t(this).val(), e) >= 0
						}), e.length || (this.selectedIndex = -1)
					} else this.value = d
			})
		}
	}), t.extend({
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, c, d, e) {
			if (!a || 3 === a.nodeType || 8 === a.nodeType) return b;
			if (e && c in t.attrFn) return t(a)[c](d);
			var f = 1 !== a.nodeType || !t.isXMLDoc(a),
				g = d !== b;
			if (c = f && t.props[c] || c, 1 === a.nodeType) {
				var h = Q.test(c);
				if ("selected" === c && !t.support.optSelected) {
					var i = a.parentNode;
					i && (i.selectedIndex, i.parentNode && i.parentNode.selectedIndex)
				}
				if (c in a && f && !h) {
					if (g && ("type" === c && R.test(a.nodeName) && a.parentNode && t.error("type property can't be changed"), a[c] = d), t.nodeName(a, "form") && a.getAttributeNode(c)) return a.getAttributeNode(c).nodeValue;
					if ("tabIndex" === c) {
						var j = a.getAttributeNode("tabIndex");
						return j && j.specified ? j.value : S.test(a.nodeName) || T.test(a.nodeName) && a.href ? 0 : b
					}
					return a[c]
				}
				if (!t.support.style && f && "style" === c) return g && (a.style.cssText = "" + d), a.style.cssText;
				g && a.setAttribute(c, "" + d);
				var k = !t.support.hrefNormalized && f && h ? a.getAttribute(c, 2) : a.getAttribute(c);
				return null === k ? b : k
			}
			return t.style(a, c, d)
		}
	});
	var V = /\.(.*)$/,
		W = function(a) {
			return a.replace(/[^\w\s\.\|`]/g, function(a) {
				return "\\" + a
			})
		};
	t.event = {
		add: function(c, d, e, f) {
			if (3 !== c.nodeType && 8 !== c.nodeType) {
				c.setInterval && c !== a && !c.frameElement && (c = a);
				var g, h;
				e.handler && (g = e, e = g.handler), e.guid || (e.guid = t.guid++);
				var i = t.data(c);
				if (i) {
					var j, k = i.events = i.events || {},
						j = i.handle;
					j || (i.handle = j = function() {
						return "undefined" == typeof t || t.event.triggered ? b : t.event.handle.apply(j.elem, arguments)
					}), j.elem = c, d = d.split(" ");
					for (var l, m, n = 0; l = d[n++];) {
						h = g ? t.extend({}, g) : {
							handler: e,
							data: f
						}, l.indexOf(".") > -1 ? (m = l.split("."), l = m.shift(), h.namespace = m.slice(0).sort().join(".")) : (m = [], h.namespace = ""), h.type = l, h.guid = e.guid;
						var o = k[l],
							p = t.event.special[l] || {};
						o || (o = k[l] = [], p.setup && p.setup.call(c, f, m, j) !== !1 || (c.addEventListener ? c.addEventListener(l, j, !1) : c.attachEvent && c.attachEvent("on" + l, j))), p.add && (p.add.call(c, h), h.handler.guid || (h.handler.guid = e.guid)), o.push(h), t.event.global[l] = !0
					}
					c = null
				}
			}
		},
		global: {},
		remove: function(a, b, c, d) {
			if (3 !== a.nodeType && 8 !== a.nodeType) {
				var e, f, g, h, i, j, k, l, m, n = 0,
					o = t.data(a),
					p = o && o.events;
				if (o && p)
					if (b && b.type && (c = b.handler, b = b.type), !b || "string" == typeof b && "." === b.charAt(0)) {
						b = b || "";
						for (f in p) t.event.remove(a, f + b)
					} else {
						for (b = b.split(" "); f = b[n++];)
							if (m = f, l = null, g = f.indexOf(".") < 0, h = [], g || (h = f.split("."), f = h.shift(), i = new RegExp("(^|\\.)" + t.map(h.slice(0).sort(), W).join("\\.(?:.*\\.)?") + "(\\.|$)")), k = p[f])
								if (c) {
									j = t.event.special[f] || {};
									for (var q = d || 0; q < k.length && (l = k[q], c.guid !== l.guid || ((g || i.test(l.namespace)) && (null == d && k.splice(q--, 1), j.remove && j.remove.call(a, l)), null == d)); q++);
									(0 === k.length || null != d && 1 === k.length) && (j.teardown && j.teardown.call(a, h) !== !1 || X(a, f, o.handle), e = null, delete p[f])
								} else
									for (var q = 0; q < k.length; q++) l = k[q], (g || i.test(l.namespace)) && (t.event.remove(a, m, l.handler, q), k.splice(q--, 1));
						if (t.isEmptyObject(p)) {
							var r = o.handle;
							r && (r.elem = null), delete o.events, delete o.handle, t.isEmptyObject(o) && t.removeData(a)
						}
					}
			}
		},
		trigger: function(a, c, d) {
			var e = a.type || a,
				f = arguments[3];
			if (!f) {
				if (a = "object" == typeof a ? a[K] ? a : t.extend(t.Event(e), a) : t.Event(e), e.indexOf("!") >= 0 && (a.type = e = e.slice(0, -1), a.exclusive = !0), d || (a.stopPropagation(), t.event.global[e] && t.each(t.cache, function() {
					this.events && this.events[e] && t.event.trigger(a, c, this.handle.elem)
				})), !d || 3 === d.nodeType || 8 === d.nodeType) return b;
				a.result = b, a.target = d, c = t.makeArray(c), c.unshift(a)
			}
			a.currentTarget = d;
			var g = t.data(d, "handle");
			g && g.apply(d, c);
			var h = d.parentNode || d.ownerDocument;
			try {
				d && d.nodeName && t.noData[d.nodeName.toLowerCase()] || d["on" + e] && d["on" + e].apply(d, c) === !1 && (a.result = !1)
			} catch (i) {}
			if (!a.isPropagationStopped() && h) t.event.trigger(a, c, h, !0);
			else if (!a.isDefaultPrevented()) {
				var j, k = a.target,
					l = t.nodeName(k, "a") && "click" === e,
					m = t.event.special[e] || {};
				if (!(m._default && m._default.call(d, a) !== !1 || l || k && k.nodeName && t.noData[k.nodeName.toLowerCase()])) {
					try {
						k[e] && (j = k["on" + e], j && (k["on" + e] = null), t.event.triggered = !0, k[e]())
					} catch (i) {}
					j && (k["on" + e] = j), t.event.triggered = !1
				}
			}
		},
		handle: function(c) {
			var d, e, f, g, h;
			c = arguments[0] = t.event.fix(c || a.event), c.currentTarget = this, d = c.type.indexOf(".") < 0 && !c.exclusive, d || (f = c.type.split("."), c.type = f.shift(), g = new RegExp("(^|\\.)" + f.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)"));
			var h = t.data(this, "events"),
				e = h[c.type];
			if (h && e) {
				e = e.slice(0);
				for (var i = 0, j = e.length; j > i; i++) {
					var k = e[i];
					if (d || g.test(k.namespace)) {
						c.handler = k.handler, c.data = k.data, c.handleObj = k;
						var l = k.handler.apply(this, arguments);
						if (l !== b && (c.result = l, l === !1 && (c.preventDefault(), c.stopPropagation())), c.isImmediatePropagationStopped()) break
					}
				}
			}
			return c.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix: function(a) {
			if (a[K]) return a;
			var c = a;
			a = t.Event(c);
			for (var d, e = this.props.length; e;) d = this.props[--e], a[d] = c[d];
			if (a.target || (a.target = a.srcElement || w), 3 === a.target.nodeType && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement), null == a.pageX && null != a.clientX) {
				var f = w.documentElement,
					g = w.body;
				a.pageX = a.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = a.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
			}
			return !a.which && (a.charCode || 0 === a.charCode ? a.charCode : a.keyCode) && (a.which = a.charCode || a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), a.which || a.button === b || (a.which = 1 & a.button ? 1 : 2 & a.button ? 3 : 4 & a.button ? 2 : 0), a
		},
		guid: 1e8,
		proxy: t.proxy,
		special: {
			ready: {
				setup: t.bindReady,
				teardown: t.noop
			},
			live: {
				add: function(a) {
					t.event.add(this, a.origType, t.extend({}, a, {
						handler: j
					}))
				},
				remove: function(a) {
					var b = !0,
						c = a.origType.replace(V, "");
					t.each(t.data(this, "events").live || [], function() {
						return c === this.origType.replace(V, "") ? (b = !1, !1) : void 0
					}), b && t.event.remove(this, a.origType, j)
				}
			},
			beforeunload: {
				setup: function(a, b, c) {
					return this.setInterval && (this.onbeforeunload = c), !1
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		}
	};
	var X = w.removeEventListener ? function(a, b, c) {
		a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		a.detachEvent("on" + b, c)
	};
	t.Event = function(a) {
		return this.preventDefault ? (a && a.type ? (this.originalEvent = a, this.type = a.type) : this.type = a, this.timeStamp = f(), void(this[K] = !0)) : new t.Event(a)
	}, t.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = h;
			var a = this.originalEvent;
			a && (a.preventDefault && a.preventDefault(), a.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = h;
			var a = this.originalEvent;
			a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = h, this.stopPropagation()
		},
		isDefaultPrevented: g,
		isPropagationStopped: g,
		isImmediatePropagationStopped: g
	};
	var Y = function(a) {
			var b = a.relatedTarget;
			try {
				for (; b && b !== this;) b = b.parentNode;
				b !== this && (a.type = a.data, t.event.handle.apply(this, arguments))
			} catch (c) {}
		},
		Z = function(a) {
			a.type = a.data, t.event.handle.apply(this, arguments)
		};
	if (t.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		t.event.special[a] = {
			setup: function(c) {
				t.event.add(this, b, c && c.selector ? Z : Y, a)
			},
			teardown: function(a) {
				t.event.remove(this, b, a && a.selector ? Z : Y)
			}
		}
	}), t.support.submitBubbles || (t.event.special.submit = {
		setup: function(a, b) {
			return "form" === this.nodeName.toLowerCase() ? !1 : (t.event.add(this, "click.specialSubmit", function(a) {
				var b = a.target,
					c = b.type;
				return "submit" !== c && "image" !== c || !t(b).closest("form").length ? void 0 : i("submit", this, arguments)
			}), void t.event.add(this, "keypress.specialSubmit", function(a) {
				var b = a.target,
					c = b.type;
				return "text" !== c && "password" !== c || !t(b).closest("form").length || 13 !== a.keyCode ? void 0 : i("submit", this, arguments)
			}))
		},
		teardown: function(a) {
			t.event.remove(this, ".specialSubmit")
		}
	}), !t.support.changeBubbles) {
		var $, _ = /textarea|input|select/i,
			aa = function(a) {
				var b = a.type,
					c = a.value;
				return "radio" === b || "checkbox" === b ? c = a.checked : "select-multiple" === b ? c = a.selectedIndex > -1 ? t.map(a.options, function(a) {
					return a.selected
				}).join("-") : "" : "select" === a.nodeName.toLowerCase() && (c = a.selectedIndex), c
			},
			ba = function(a) {
				var c, d, e = a.target;
				if (_.test(e.nodeName) && !e.readOnly && (c = t.data(e, "_change_data"), d = aa(e), ("focusout" !== a.type || "radio" !== e.type) && t.data(e, "_change_data", d), c !== b && d !== c)) return null != c || d ? (a.type = "change", t.event.trigger(a, arguments[1], e)) : void 0
			};
		t.event.special.change = {
			filters: {
				focusout: ba,
				click: function(a) {
					var b = a.target,
						c = b.type;
					return "radio" === c || "checkbox" === c || "select" === b.nodeName.toLowerCase() ? ba.call(this, a) : void 0
				},
				keydown: function(a) {
					var b = a.target,
						c = b.type;
					return 13 === a.keyCode && "textarea" !== b.nodeName.toLowerCase() || 32 === a.keyCode && ("checkbox" === c || "radio" === c) || "select-multiple" === c ? ba.call(this, a) : void 0
				},
				beforeactivate: function(a) {
					var b = a.target;
					t.data(b, "_change_data", aa(b))
				}
			},
			setup: function(a, b) {
				if ("file" === this.type) return !1;
				for (var c in $) t.event.add(this, c + ".specialChange", $[c]);
				return _.test(this.nodeName)
			},
			teardown: function(a) {
				return t.event.remove(this, ".specialChange"), _.test(this.nodeName)
			}
		}, $ = t.event.special.change.filters
	}
	w.addEventListener && t.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		function c(a) {
			return a = t.event.fix(a), a.type = b, t.event.handle.call(this, a)
		}
		t.event.special[b] = {
			setup: function() {
				this.addEventListener(a, c, !0)
			},
			teardown: function() {
				this.removeEventListener(a, c, !0)
			}
		}
	}), t.each(["bind", "one"], function(a, c) {
		t.fn[c] = function(a, d, e) {
			if ("object" == typeof a) {
				for (var f in a) this[c](f, d, a[f], e);
				return this
			}
			t.isFunction(d) && (e = d, d = b);
			var g = "one" === c ? t.proxy(e, function(a) {
				return t(this).unbind(a, g), e.apply(this, arguments)
			}) : e;
			if ("unload" === a && "one" !== c) this.one(a, d, e);
			else
				for (var h = 0, i = this.length; i > h; h++) t.event.add(this[h], a, g, d);
			return this
		}
	}), t.fn.extend({
		unbind: function(a, b) {
			if ("object" != typeof a || a.preventDefault)
				for (var c = 0, d = this.length; d > c; c++) t.event.remove(this[c], a, b);
			else
				for (var e in a) this.unbind(e, a[e]);
			return this
		},
		delegate: function(a, b, c, d) {
			return this.live(b, c, d, a)
		},
		undelegate: function(a, b, c) {
			return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a)
		},
		trigger: function(a, b) {
			return this.each(function() {
				t.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) {
				var c = t.Event(a);
				return c.preventDefault(), c.stopPropagation(), t.event.trigger(c, b, this[0]), c.result
			}
		},
		toggle: function(a) {
			for (var b = arguments, c = 1; c < b.length;) t.proxy(a, b[c++]);
			return this.click(t.proxy(a, function(d) {
				var e = (t.data(this, "lastToggle" + a.guid) || 0) % c;
				return t.data(this, "lastToggle" + a.guid, e + 1), d.preventDefault(), b[e].apply(this, arguments) || !1
			}))
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var ca = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	t.each(["live", "die"], function(a, c) {
		t.fn[c] = function(a, d, e, f) {
			var g, h, i, j, l = 0,
				m = f || this.selector,
				n = f ? this : t(this.context);
			for (t.isFunction(d) && (e = d, d = b), a = (a || "").split(" "); null != (g = a[l++]);) h = V.exec(g), i = "", h && (i = h[0], g = g.replace(V, "")), "hover" !== g ? (j = g, "focus" === g || "blur" === g ? (a.push(ca[g] + i), g += i) : g = (ca[g] || g) + i, "live" === c ? n.each(function() {
				t.event.add(this, k(g, m), {
					data: d,
					selector: m,
					handler: e,
					origType: g,
					origHandler: e,
					preType: j
				})
			}) : n.unbind(k(g, m), e)) : a.push("mouseenter" + i, "mouseleave" + i);
			return this
		}
	}), t.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
		t.fn[b] = function(a) {
			return a ? this.bind(b, a) : this.trigger(b)
		}, t.attrFn && (t.attrFn[b] = !0)
	}), a.attachEvent && !a.addEventListener && a.attachEvent("onunload", function() {
		for (var a in t.cache)
			if (t.cache[a].handle) try {
				t.event.remove(t.cache[a].handle.elem)
			} catch (b) {}
	}),
		function() {
			function a(b) {
				for (var c, d = "", e = 0; b[e]; e++) c = b[e], 3 === c.nodeType || 4 === c.nodeType ? d += c.nodeValue : 8 !== c.nodeType && (d += a(c.childNodes));
				return d
			}

			function c(a, b, c, d, e, f) {
				for (var g = 0, h = d.length; h > g; g++) {
					var i = d[g];
					if (i) {
						i = i[a];
						for (var j = !1; i;) {
							if (i.sizcache === c) {
								j = d[i.sizset];
								break
							}
							if (1 !== i.nodeType || f || (i.sizcache = c, i.sizset = g), i.nodeName.toLowerCase() === b) {
								j = i;
								break
							}
							i = i[a]
						}
						d[g] = j
					}
				}
			}

			function d(a, b, c, d, e, f) {
				for (var g = 0, h = d.length; h > g; g++) {
					var i = d[g];
					if (i) {
						i = i[a];
						for (var k = !1; i;) {
							if (i.sizcache === c) {
								k = d[i.sizset];
								break
							}
							if (1 === i.nodeType)
								if (f || (i.sizcache = c, i.sizset = g), "string" != typeof b) {
									if (i === b) {
										k = !0;
										break
									}
								} else if (j.filter(b, [i]).length > 0) {
									k = i;
									break
								}
							i = i[a]
						}
						d[g] = k
					}
				}
			}
			var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
				f = 0,
				g = Object.prototype.toString,
				h = !1,
				i = !0;
			[0, 0].sort(function() {
				return i = !1, 0
			});
			var j = function(a, b, c, d) {
				c = c || [];
				var f = b = b || w;
				if (1 !== b.nodeType && 9 !== b.nodeType) return [];
				if (!a || "string" != typeof a) return c;
				for (var h, i, m, o, p = [], t = !0, u = r(b), v = a; null !== (e.exec(""), h = e.exec(v));)
					if (v = h[3], p.push(h[1]), h[2]) {
						o = h[3];
						break
					}
				if (p.length > 1 && l.exec(a))
					if (2 === p.length && k.relative[p[0]]) i = s(p[0] + p[1], b);
					else
						for (i = k.relative[p[0]] ? [b] : j(p.shift(), b); p.length;) a = p.shift(), k.relative[a] && (a += p.shift()), i = s(a, i);
				else {
					if (!d && p.length > 1 && 9 === b.nodeType && !u && k.match.ID.test(p[0]) && !k.match.ID.test(p[p.length - 1])) {
						var x = j.find(p.shift(), b, u);
						b = x.expr ? j.filter(x.expr, x.set)[0] : x.set[0]
					}
					if (b) {
						var x = d ? {
							expr: p.pop(),
							set: n(d)
						} : j.find(p.pop(), 1 !== p.length || "~" !== p[0] && "+" !== p[0] || !b.parentNode ? b : b.parentNode, u);
						for (i = x.expr ? j.filter(x.expr, x.set) : x.set, p.length > 0 ? m = n(i) : t = !1; p.length;) {
							var y = p.pop(),
								z = y;
							k.relative[y] ? z = p.pop() : y = "", null == z && (z = b), k.relative[y](m, z, u)
						}
					} else m = p = []
				} if (m || (m = i), m || j.error(y || a), "[object Array]" === g.call(m))
					if (t)
						if (b && 1 === b.nodeType)
							for (var A = 0; null != m[A]; A++) m[A] && (m[A] === !0 || 1 === m[A].nodeType && q(b, m[A])) && c.push(i[A]);
						else
							for (var A = 0; null != m[A]; A++) m[A] && 1 === m[A].nodeType && c.push(i[A]);
					else c.push.apply(c, m);
				else n(m, c);
				return o && (j(o, f, c, d), j.uniqueSort(c)), c
			};
			j.uniqueSort = function(a) {
				if (p && (h = i, a.sort(p), h))
					for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
				return a
			}, j.matches = function(a, b) {
				return j(a, null, null, b)
			}, j.find = function(a, b, c) {
				var d, e;
				if (!a) return [];
				for (var f = 0, g = k.order.length; g > f; f++) {
					var e, h = k.order[f];
					if (e = k.leftMatch[h].exec(a)) {
						var i = e[1];
						if (e.splice(1, 1), "\\" !== i.substr(i.length - 1) && (e[1] = (e[1] || "").replace(/\\/g, ""), d = k.find[h](e, b, c), null != d)) {
							a = a.replace(k.match[h], "");
							break
						}
					}
				}
				return d || (d = b.getElementsByTagName("*")), {
					set: d,
					expr: a
				}
			}, j.filter = function(a, c, d, e) {
				for (var f, g, h = a, i = [], l = c, m = c && c[0] && r(c[0]); a && c.length;) {
					for (var n in k.filter)
						if (null != (f = k.leftMatch[n].exec(a)) && f[2]) {
							var o, p, q = k.filter[n],
								s = f[1];
							if (g = !1, f.splice(1, 1), "\\" === s.substr(s.length - 1)) continue;
							if (l === i && (i = []), k.preFilter[n])
								if (f = k.preFilter[n](f, l, d, i, e, m)) {
									if (f === !0) continue
								} else g = o = !0;
							if (f)
								for (var t = 0; null != (p = l[t]); t++)
									if (p) {
										o = q(p, f, t, l);
										var u = e ^ !!o;
										d && null != o ? u ? g = !0 : l[t] = !1 : u && (i.push(p), g = !0)
									}
							if (o !== b) {
								if (d || (l = i), a = a.replace(k.match[n], ""), !g) return [];
								break
							}
						}
					if (a === h) {
						if (null != g) break;
						j.error(a)
					}
					h = a
				}
				return l
			}, j.error = function(a) {
				throw "Syntax error, unrecognized expression: " + a
			};
			var k = j.selectors = {
					order: ["ID", "NAME", "TAG"],
					match: {
						ID: /#((?:[\wÀ-￿-]|\\.)+)/,
						CLASS: /\.((?:[\wÀ-￿-]|\\.)+)/,
						NAME: /\[name=['"]*((?:[\wÀ-￿-]|\\.)+)['"]*\]/,
						ATTR: /\[\s*((?:[\wÀ-￿-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
						TAG: /^((?:[\wÀ-￿\*-]|\\.)+)/,
						CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
						POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
						PSEUDO: /:((?:[\wÀ-￿-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
					},
					leftMatch: {},
					attrMap: {
						"class": "className",
						"for": "htmlFor"
					},
					attrHandle: {
						href: function(a) {
							return a.getAttribute("href")
						}
					},
					relative: {
						"+": function(a, b) {
							var c = "string" == typeof b,
								d = c && !/\W/.test(b),
								e = c && !d;
							d && (b = b.toLowerCase());
							for (var f, g = 0, h = a.length; h > g; g++)
								if (f = a[g]) {
									for (;
										(f = f.previousSibling) && 1 !== f.nodeType;);
									a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
								}
							e && j.filter(b, a, !0)
						},
						">": function(a, b) {
							var c = "string" == typeof b;
							if (c && !/\W/.test(b)) {
								b = b.toLowerCase();
								for (var d = 0, e = a.length; e > d; d++) {
									var f = a[d];
									if (f) {
										var g = f.parentNode;
										a[d] = g.nodeName.toLowerCase() === b ? g : !1
									}
								}
							} else {
								for (var d = 0, e = a.length; e > d; d++) {
									var f = a[d];
									f && (a[d] = c ? f.parentNode : f.parentNode === b)
								}
								c && j.filter(b, a, !0)
							}
						},
						"": function(a, b, e) {
							var g = f++,
								h = d;
							if ("string" == typeof b && !/\W/.test(b)) {
								var i = b = b.toLowerCase();
								h = c
							}
							h("parentNode", b, g, a, i, e)
						},
						"~": function(a, b, e) {
							var g = f++,
								h = d;
							if ("string" == typeof b && !/\W/.test(b)) {
								var i = b = b.toLowerCase();
								h = c
							}
							h("previousSibling", b, g, a, i, e)
						}
					},
					find: {
						ID: function(a, b, c) {
							if ("undefined" != typeof b.getElementById && !c) {
								var d = b.getElementById(a[1]);
								return d ? [d] : []
							}
						},
						NAME: function(a, b) {
							if ("undefined" != typeof b.getElementsByName) {
								for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
								return 0 === c.length ? null : c
							}
						},
						TAG: function(a, b) {
							return b.getElementsByTagName(a[1])
						}
					},
					preFilter: {
						CLASS: function(a, b, c, d, e, f) {
							if (a = " " + a[1].replace(/\\/g, "") + " ", f) return a;
							for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
							return !1
						},
						ID: function(a) {
							return a[1].replace(/\\/g, "")
						},
						TAG: function(a, b) {
							return a[1].toLowerCase()
						},
						CHILD: function(a) {
							if ("nth" === a[1]) {
								var b = /(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
								a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
							}
							return a[0] = f++, a
						},
						ATTR: function(a, b, c, d, e, f) {
							var g = a[1].replace(/\\/g, "");
							return !f && k.attrMap[g] && (a[1] = k.attrMap[g]), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
						},
						PSEUDO: function(a, b, c, d, f) {
							if ("not" === a[1]) {
								if (!((e.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
									var g = j.filter(a[3], b, c, !0 ^ f);
									return c || d.push.apply(d, g), !1
								}
								a[3] = j(a[3], null, null, b)
							} else if (k.match.POS.test(a[0]) || k.match.CHILD.test(a[0])) return !0;
							return a
						},
						POS: function(a) {
							return a.unshift(!0), a
						}
					},
					filters: {
						enabled: function(a) {
							return a.disabled === !1 && "hidden" !== a.type
						},
						disabled: function(a) {
							return a.disabled === !0
						},
						checked: function(a) {
							return a.checked === !0
						},
						selected: function(a) {
							return a.parentNode.selectedIndex, a.selected === !0
						},
						parent: function(a) {
							return !!a.firstChild
						},
						empty: function(a) {
							return !a.firstChild
						},
						has: function(a, b, c) {
							return !!j(c[3], a).length
						},
						header: function(a) {
							return /h\d/i.test(a.nodeName)
						},
						text: function(a) {
							return "text" === a.type
						},
						radio: function(a) {
							return "radio" === a.type
						},
						checkbox: function(a) {
							return "checkbox" === a.type
						},
						file: function(a) {
							return "file" === a.type
						},
						password: function(a) {
							return "password" === a.type
						},
						submit: function(a) {
							return "submit" === a.type
						},
						image: function(a) {
							return "image" === a.type
						},
						reset: function(a) {
							return "reset" === a.type
						},
						button: function(a) {
							return "button" === a.type || "button" === a.nodeName.toLowerCase()
						},
						input: function(a) {
							return /input|select|textarea|button/i.test(a.nodeName)
						}
					},
					setFilters: {
						first: function(a, b) {
							return 0 === b
						},
						last: function(a, b, c, d) {
							return b === d.length - 1
						},
						even: function(a, b) {
							return b % 2 === 0
						},
						odd: function(a, b) {
							return b % 2 === 1
						},
						lt: function(a, b, c) {
							return b < c[3] - 0
						},
						gt: function(a, b, c) {
							return b > c[3] - 0
						},
						nth: function(a, b, c) {
							return c[3] - 0 === b
						},
						eq: function(a, b, c) {
							return c[3] - 0 === b
						}
					},
					filter: {
						PSEUDO: function(b, c, d, e) {
							var f = c[1],
								g = k.filters[f];
							if (g) return g(b, d, c, e);
							if ("contains" === f) return (b.textContent || b.innerText || a([b]) || "").indexOf(c[3]) >= 0;
							if ("not" === f) {
								for (var h = c[3], d = 0, i = h.length; i > d; d++)
									if (h[d] === b) return !1;
								return !0
							}
							j.error("Syntax error, unrecognized expression: " + f)
						},
						CHILD: function(a, b) {
							var c = b[1],
								d = a;
							switch (c) {
								case "only":
								case "first":
									for (; d = d.previousSibling;)
										if (1 === d.nodeType) return !1;
									if ("first" === c) return !0;
									d = a;
								case "last":
									for (; d = d.nextSibling;)
										if (1 === d.nodeType) return !1;
									return !0;
								case "nth":
									var e = b[2],
										f = b[3];
									if (1 === e && 0 === f) return !0;
									var g = b[0],
										h = a.parentNode;
									if (h && (h.sizcache !== g || !a.nodeIndex)) {
										var i = 0;
										for (d = h.firstChild; d; d = d.nextSibling) 1 === d.nodeType && (d.nodeIndex = ++i);
										h.sizcache = g
									}
									var j = a.nodeIndex - f;
									return 0 === e ? 0 === j : j % e === 0 && j / e >= 0
							}
						},
						ID: function(a, b) {
							return 1 === a.nodeType && a.getAttribute("id") === b
						},
						TAG: function(a, b) {
							return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
						},
						CLASS: function(a, b) {
							return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
						},
						ATTR: function(a, b) {
							var c = b[1],
								d = k.attrHandle[c] ? k.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
								e = d + "",
								f = b[2],
								g = b[4];
							return null == d ? "!=" === f : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
						},
						POS: function(a, b, c, d) {
							var e = b[2],
								f = k.setFilters[e];
							return f ? f(a, c, b, d) : void 0
						}
					}
				},
				l = k.match.POS;
			for (var m in k.match) k.match[m] = new RegExp(k.match[m].source + /(?![^\[]*\])(?![^\(]*\))/.source), k.leftMatch[m] = new RegExp(/(^(?:.|\r|\n)*?)/.source + k.match[m].source.replace(/\\(\d+)/g, function(a, b) {
				return "\\" + (b - 0 + 1)
			}));
			var n = function(a, b) {
				return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
			};
			try {
				Array.prototype.slice.call(w.documentElement.childNodes, 0)[0].nodeType
			} catch (o) {
				n = function(a, b) {
					var c = b || [];
					if ("[object Array]" === g.call(a)) Array.prototype.push.apply(c, a);
					else if ("number" == typeof a.length)
						for (var d = 0, e = a.length; e > d; d++) c.push(a[d]);
					else
						for (var d = 0; a[d]; d++) c.push(a[d]);
					return c
				}
			}
			var p;
			w.documentElement.compareDocumentPosition ? p = function(a, b) {
				if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a == b && (h = !0), a.compareDocumentPosition ? -1 : 1;
				var c = 4 & a.compareDocumentPosition(b) ? -1 : a === b ? 0 : 1;
				return 0 === c && (h = !0), c
			} : "sourceIndex" in w.documentElement ? p = function(a, b) {
				if (!a.sourceIndex || !b.sourceIndex) return a == b && (h = !0), a.sourceIndex ? -1 : 1;
				var c = a.sourceIndex - b.sourceIndex;
				return 0 === c && (h = !0), c
			} : w.createRange && (p = function(a, b) {
				if (!a.ownerDocument || !b.ownerDocument) return a == b && (h = !0), a.ownerDocument ? -1 : 1;
				var c = a.ownerDocument.createRange(),
					d = b.ownerDocument.createRange();
				c.setStart(a, 0), c.setEnd(a, 0), d.setStart(b, 0), d.setEnd(b, 0);
				var e = c.compareBoundaryPoints(Range.START_TO_END, d);
				return 0 === e && (h = !0), e
			}),
				function() {
					var a = w.createElement("div"),
						c = "script" + (new Date).getTime();
					a.innerHTML = "<a name='" + c + "'/>";
					var d = w.documentElement;
					d.insertBefore(a, d.firstChild), w.getElementById(c) && (k.find.ID = function(a, c, d) {
						if ("undefined" != typeof c.getElementById && !d) {
							var e = c.getElementById(a[1]);
							return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
						}
					}, k.filter.ID = function(a, b) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
						return 1 === a.nodeType && c && c.nodeValue === b
					}), d.removeChild(a), d = a = null
				}(),
				function() {
					var a = w.createElement("div");
					a.appendChild(w.createComment("")), a.getElementsByTagName("*").length > 0 && (k.find.TAG = function(a, b) {
						var c = b.getElementsByTagName(a[1]);
						if ("*" === a[1]) {
							for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
							c = d
						}
						return c
					}), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (k.attrHandle.href = function(a) {
						return a.getAttribute("href", 2)
					}), a = null
				}(), w.querySelectorAll && ! function() {
				var a = j,
					b = w.createElement("div");
				if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
					j = function(b, c, d, e) {
						if (c = c || w, !e && 9 === c.nodeType && !r(c)) try {
							return n(c.querySelectorAll(b), d)
						} catch (f) {}
						return a(b, c, d, e)
					};
					for (var c in a) j[c] = a[c];
					b = null
				}
			}(),
				function() {
					var a = w.createElement("div");
					a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (k.order.splice(1, 0, "CLASS"), k.find.CLASS = function(a, b, c) {
						return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
					}, a = null))
				}();
			var q = w.compareDocumentPosition ? function(a, b) {
					return !!(16 & a.compareDocumentPosition(b))
				} : function(a, b) {
					return a !== b && (a.contains ? a.contains(b) : !0)
				},
				r = function(a) {
					var b = (a ? a.ownerDocument || a : 0).documentElement;
					return b ? "HTML" !== b.nodeName : !1
				},
				s = function(a, b) {
					for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = k.match.PSEUDO.exec(a);) e += c[0], a = a.replace(k.match.PSEUDO, "");
					a = k.relative[a] ? a + "*" : a;
					for (var g = 0, h = f.length; h > g; g++) j(a, f[g], d);
					return j.filter(e, d)
				};
			t.find = j, t.expr = j.selectors, t.expr[":"] = t.expr.filters, t.unique = j.uniqueSort, t.text = a, t.isXMLDoc = r, t.contains = q
		}();
	var da = /Until$/,
		ea = /^(?:parents|prevUntil|prevAll)/,
		fa = /,/,
		I = Array.prototype.slice,
		ga = function(a, b, c) {
			if (t.isFunction(b)) return t.grep(a, function(a, d) {
				return !!b.call(a, d, a) === c
			});
			if (b.nodeType) return t.grep(a, function(a, d) {
				return a === b === c
			});
			if ("string" == typeof b) {
				var d = t.grep(a, function(a) {
					return 1 === a.nodeType
				});
				if (y.test(b)) return t.filter(b, d, !c);
				b = t.filter(b, d)
			}
			return t.grep(a, function(a, d) {
				return t.inArray(a, b) >= 0 === c
			})
		};
	t.fn.extend({
		find: function(a) {
			for (var b = this.pushStack("", "find", a), c = 0, d = 0, e = this.length; e > d; d++)
				if (c = b.length, t.find(a, this[d], b), d > 0)
					for (var f = c; f < b.length; f++)
						for (var g = 0; c > g; g++)
							if (b[g] === b[f]) {
								b.splice(f--, 1);
								break
							}
			return b
		},
		has: function(a) {
			var b = t(a);
			return this.filter(function() {
				for (var a = 0, c = b.length; c > a; a++)
					if (t.contains(this, b[a])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(ga(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(ga(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && t.filter(a, this).length > 0
		},
		closest: function(a, b) {
			if (t.isArray(a)) {
				var c, d, e = [],
					f = this[0],
					g = {};
				if (f && a.length) {
					for (var h = 0, i = a.length; i > h; h++) d = a[h], g[d] || (g[d] = t.expr.match.POS.test(d) ? t(d, b || this.context) : d);
					for (; f && f.ownerDocument && f !== b;) {
						for (d in g) c = g[d], (c.jquery ? c.index(f) > -1 : t(f).is(c)) && (e.push({
							selector: d,
							elem: f
						}), delete g[d]);
						f = f.parentNode
					}
				}
				return e
			}
			var j = t.expr.match.POS.test(a) ? t(a, b || this.context) : null;
			return this.map(function(c, d) {
				for (; d && d.ownerDocument && d !== b;) {
					if (j ? j.index(d) > -1 : t(d).is(a)) return d;
					d = d.parentNode
				}
				return null
			})
		},
		index: function(a) {
			return a && "string" != typeof a ? t.inArray(a.jquery ? a[0] : a, this) : t.inArray(this[0], a ? t(a) : this.parent().children())
		},
		add: function(a, b) {
			var c = "string" == typeof a ? t(a, b || this.context) : t.makeArray(a),
				d = t.merge(this.get(), c);
			return this.pushStack(l(c[0]) || l(d[0]) ? d : t.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), t.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return t.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return t.dir(a, "parentNode", c)
		},
		next: function(a) {
			return t.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return t.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return t.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return t.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return t.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return t.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return t.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return t.sibling(a.firstChild)
		},
		contents: function(a) {
			return t.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : t.makeArray(a.childNodes)
		}
	}, function(a, b) {
		t.fn[a] = function(c, d) {
			var e = t.map(this, b, c);
			return da.test(a) || (d = c), d && "string" == typeof d && (e = t.filter(d, e)), e = this.length > 1 ? t.unique(e) : e, (this.length > 1 || fa.test(d)) && ea.test(a) && (e = e.reverse()), this.pushStack(e, a, I.call(arguments).join(","))
		}
	}), t.extend({
		filter: function(a, b, c) {
			return c && (a = ":not(" + a + ")"), t.find.matches(a, b)
		},
		dir: function(a, c, d) {
			for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !t(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
			return e
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
			return a
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	});
	var ha = / jQuery\d+="(?:\d+|null)"/g,
		ia = /^\s+/,
		ja = /(<([\w:]+)[^>]*?)\/>/g,
		ka = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
		la = /<([\w:]+)/,
		ma = /<tbody/i,
		na = /<|&#?\w+;/,
		oa = /<script|<object|<embed|<option|<style/i,
		pa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		qa = function(a, b, c) {
			return ka.test(c) ? a : b + "></" + c + ">"
		},
		ra = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		};
	ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td, t.support.htmlSerialize || (ra._default = [1, "div<div>", "</div>"]), t.fn.extend({
		text: function(a) {
			return t.isFunction(a) ? this.each(function(b) {
				var c = t(this);
				c.text(a.call(this, b, c.text()))
			}) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || w).createTextNode(a)) : t.text(this)
		},
		wrapAll: function(a) {
			if (t.isFunction(a)) return this.each(function(b) {
				t(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = t(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return t.isFunction(a) ? this.each(function(b) {
				t(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = t(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			return this.each(function() {
				t(this).wrapAll(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				t.nodeName(this, "body") || t(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(a) {
				1 === this.nodeType && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(a) {
				1 === this.nodeType && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if (arguments.length) {
				var a = t(arguments[0]);
				return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				return a.push.apply(a, t(arguments[0]).toArray()), a
			}
		},
		remove: function(a, b) {
			for (var c, d = 0; null != (c = this[d]); d++)(!a || t.filter(a, [c]).length) && (b || 1 !== c.nodeType || (t.cleanData(c.getElementsByTagName("*")), t.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++)
				for (1 === a.nodeType && t.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
			return this
		},
		clone: function(a) {
			var b = this.map(function() {
				if (t.support.noCloneEvent || t.isXMLDoc(this)) return this.cloneNode(!0);
				var a = this.outerHTML,
					b = this.ownerDocument;
				if (!a) {
					var c = b.createElement("div");
					c.appendChild(this.cloneNode(!0)), a = c.innerHTML
				}
				return t.clean([a.replace(ha, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(ia, "")], b)[0]
			});
			return a === !0 && (m(this, b), m(this.find("*"), b.find("*"))), b
		},
		html: function(a) {
			if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(ha, "") : null;
			if ("string" != typeof a || oa.test(a) || !t.support.leadingWhitespace && ia.test(a) || ra[(la.exec(a) || ["", ""])[1].toLowerCase()]) t.isFunction(a) ? this.each(function(b) {
				var c = t(this),
					d = c.html();
				c.empty().append(function() {
					return a.call(this, b, d)
				})
			}) : this.empty().append(a);
			else {
				a = a.replace(ja, qa);
				try {
					for (var c = 0, d = this.length; d > c; c++) 1 === this[c].nodeType && (t.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
				} catch (e) {
					this.empty().append(a)
				}
			}
			return this
		},
		replaceWith: function(a) {
			return this[0] && this[0].parentNode ? t.isFunction(a) ? this.each(function(b) {
				var c = t(this),
					d = c.html();
				c.replaceWith(a.call(this, b, d))
			}) : ("string" != typeof a && (a = t(a).detach()), this.each(function() {
				var b = this.nextSibling,
					c = this.parentNode;
				t(this).remove(), b ? t(b).before(a) : t(c).append(a)
			})) : this.pushStack(t(t.isFunction(a) ? a() : a), "replaceWith", a)
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, c, e) {
			function f(a, b) {
				return t.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
			}
			var g, h, i, j, k = a[0],
				l = [];
			if (!t.support.checkClone && 3 === arguments.length && "string" == typeof k && pa.test(k)) return this.each(function() {
				t(this).domManip(a, c, e, !0)
			});
			if (t.isFunction(k)) return this.each(function(d) {
				var f = t(this);
				a[0] = k.call(this, d, c ? f.html() : b), f.domManip(a, c, e)
			});
			if (this[0]) {
				if (j = k && k.parentNode, g = t.support.parentNode && j && 11 === j.nodeType && j.childNodes.length === this.length ? {
					fragment: j
				} : n(a, this, l), i = g.fragment, h = 1 === i.childNodes.length ? i = i.firstChild : i.firstChild) {
					c = c && t.nodeName(h, "tr");
					for (var m = 0, o = this.length; o > m; m++) e.call(c ? f(this[m], h) : this[m], m > 0 || g.cacheable || this.length > 1 ? i.cloneNode(!0) : i)
				}
				l.length && t.each(l, d)
			}
			return this
		}
	}), t.fragments = {}, t.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		t.fn[a] = function(c) {
			var d = [],
				e = t(c),
				f = 1 === this.length && this[0].parentNode;
			if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
			for (var g = 0, h = e.length; h > g; g++) {
				var i = (g > 0 ? this.clone(!0) : this).get();
				t.fn[b].apply(t(e[g]), i), d = d.concat(i)
			}
			return this.pushStack(d, a, e.selector)
		}
	}), t.extend({
		clean: function(a, b, c, d) {
			b = b || w, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || w);
			for (var e, f = [], g = 0; null != (e = a[g]); g++)
				if ("number" == typeof e && (e += ""), e) {
					if ("string" != typeof e || na.test(e)) {
						if ("string" == typeof e) {
							e = e.replace(ja, qa);
							var h = (la.exec(e) || ["", ""])[1].toLowerCase(),
								i = ra[h] || ra._default,
								j = i[0],
								k = b.createElement("div");
							for (k.innerHTML = i[1] + e + i[2]; j--;) k = k.lastChild;
							if (!t.support.tbody)
								for (var l = ma.test(e), m = "table" !== h || l ? "<table>" !== i[1] || l ? [] : k.childNodes : k.firstChild && k.firstChild.childNodes, n = m.length - 1; n >= 0; --n) t.nodeName(m[n], "tbody") && !m[n].childNodes.length && m[n].parentNode.removeChild(m[n]);
							!t.support.leadingWhitespace && ia.test(e) && k.insertBefore(b.createTextNode(ia.exec(e)[0]), k.firstChild), e = k.childNodes
						}
					} else e = b.createTextNode(e);
					e.nodeType ? f.push(e) : f = t.merge(f, e)
				}
			if (c)
				for (var g = 0; f[g]; g++)!d || !t.nodeName(f[g], "script") || f[g].type && "text/javascript" !== f[g].type.toLowerCase() ? (1 === f[g].nodeType && f.splice.apply(f, [g + 1, 0].concat(t.makeArray(f[g].getElementsByTagName("script")))), c.appendChild(f[g])) : d.push(f[g].parentNode ? f[g].parentNode.removeChild(f[g]) : f[g]);
			return f
		},
		cleanData: function(a) {
			for (var b, c, d, e = t.cache, f = t.event.special, g = t.support.deleteExpando, h = 0; null != (d = a[h]); h++)
				if (c = d[t.expando]) {
					if (b = e[c], b.events)
						for (var i in b.events) f[i] ? t.event.remove(d, i) : X(d, i, b.handle);
					g ? delete d[t.expando] : d.removeAttribute && d.removeAttribute(t.expando), delete e[c]
				}
		}
	});
	var sa = /z-?index|font-?weight|opacity|zoom|line-?height/i,
		ta = /alpha\([^)]*\)/,
		ua = /opacity=([^)]*)/,
		va = /float/i,
		wa = /-([a-z])/gi,
		xa = /([A-Z])/g,
		ya = /^-?\d+(?:px)?$/i,
		za = /^-?\d/,
		Aa = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ba = ["Left", "Right"],
		Ca = ["Top", "Bottom"],
		Da = w.defaultView && w.defaultView.getComputedStyle,
		Ea = t.support.cssFloat ? "cssFloat" : "styleFloat",
		Fa = function(a, b) {
			return b.toUpperCase()
		};
	t.fn.css = function(a, c) {
		return e(this, a, c, !0, function(a, c, d) {
			return d === b ? t.curCSS(a, c) : ("number" != typeof d || sa.test(c) || (d += "px"), void t.style(a, c, d))
		})
	}, t.extend({
		style: function(a, c, d) {
			if (!a || 3 === a.nodeType || 8 === a.nodeType) return b;
			("width" === c || "height" === c) && parseFloat(d) < 0 && (d = b);
			var e = a.style || a,
				f = d !== b;
			if (!t.support.opacity && "opacity" === c) {
				if (f) {
					e.zoom = 1;
					var g = parseInt(d, 10) + "" == "NaN" ? "" : "alpha(opacity=" + 100 * d + ")",
						h = e.filter || t.curCSS(a, "filter") || "";
					e.filter = ta.test(h) ? h.replace(ta, g) : g
				}
				return e.filter && e.filter.indexOf("opacity=") >= 0 ? parseFloat(ua.exec(e.filter)[1]) / 100 + "" : ""
			}
			return va.test(c) && (c = Ea), c = c.replace(wa, Fa), f && (e[c] = d), e[c]
		},
		css: function(a, b, c, d) {
			function e() {
				f = "width" === b ? a.offsetWidth : a.offsetHeight, "border" !== d && t.each(h, function() {
					d || (f -= parseFloat(t.curCSS(a, "padding" + this, !0)) || 0), "margin" === d ? f += parseFloat(t.curCSS(a, "margin" + this, !0)) || 0 : f -= parseFloat(t.curCSS(a, "border" + this + "Width", !0)) || 0
				})
			}
			if ("width" === b || "height" === b) {
				var f, g = Aa,
					h = "width" === b ? Ba : Ca;
				return 0 !== a.offsetWidth ? e() : t.swap(a, g, e), Math.max(0, Math.round(f))
			}
			return t.curCSS(a, b, c)
		},
		curCSS: function(a, b, c) {
			var d, e = a.style;
			if (!t.support.opacity && "opacity" === b && a.currentStyle) return d = ua.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "", "" === d ? "1" : d;
			if (va.test(b) && (b = Ea), !c && e && e[b]) d = e[b];
			else if (Da) {
				va.test(b) && (b = "float"), b = b.replace(xa, "-$1").toLowerCase();
				var f = a.ownerDocument.defaultView;
				if (!f) return null;
				var g = f.getComputedStyle(a, null);
				g && (d = g.getPropertyValue(b)), "opacity" === b && "" === d && (d = "1")
			} else if (a.currentStyle) {
				var h = b.replace(wa, Fa);
				if (d = a.currentStyle[b] || a.currentStyle[h], !ya.test(d) && za.test(d)) {
					var i = e.left,
						j = a.runtimeStyle.left;
					a.runtimeStyle.left = a.currentStyle.left, e.left = "fontSize" === h ? "1em" : d || 0, d = e.pixelLeft + "px", e.left = i, a.runtimeStyle.left = j
				}
			}
			return d
		},
		swap: function(a, b, c) {
			var d = {};
			for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
			c.call(a);
			for (var e in b) a.style[e] = d[e]
		}
	}), t.expr && t.expr.filters && (t.expr.filters.hidden = function(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight,
			d = "tr" === a.nodeName.toLowerCase();
		return 0 !== b || 0 !== c || d ? b > 0 && c > 0 && !d ? !1 : "none" === t.curCSS(a, "display") : !0
	}, t.expr.filters.visible = function(a) {
		return !t.expr.filters.hidden(a)
	});
	var Ga = f(),
		Ha = /<script(.|\s)*?\/script>/gi,
		Ia = /select|textarea/i,
		Ja = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
		Ka = /=\?(&|$)/,
		La = /\?/,
		Ma = /(\?|&)_=.*?(&|$)/,
		Na = /^(\w+:)?\/\/([^\/?#]+)/,
		Oa = /%20/g,
		Pa = t.fn.load;
	t.fn.extend({
		load: function(a, b, c) {
			if ("string" != typeof a) return Pa.call(this, a);
			if (!this.length) return this;
			var d = a.indexOf(" ");
			if (d >= 0) {
				var e = a.slice(d, a.length);
				a = a.slice(0, d)
			}
			var f = "GET";
			b && (t.isFunction(b) ? (c = b, b = null) : "object" == typeof b && (b = t.param(b, t.ajaxSettings.traditional), f = "POST"));
			var g = this;
			return t.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b,
				complete: function(a, b) {
					("success" === b || "notmodified" === b) && g.html(e ? t("<div />").append(a.responseText.replace(Ha, "")).find(e) : a.responseText), c && g.each(c, [a.responseText, b, a])
				}
			}), this
		},
		serialize: function() {
			return t.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? t.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Ia.test(this.nodeName) || Ja.test(this.type))
			}).map(function(a, b) {
				var c = t(this).val();
				return null == c ? null : t.isArray(c) ? t.map(c, function(a, c) {
					return {
						name: b.name,
						value: a
					}
				}) : {
					name: b.name,
					value: c
				}
			}).get()
		}
	}), t.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		t.fn[b] = function(a) {
			return this.bind(b, a)
		}
	}), t.extend({
		get: function(a, b, c, d) {
			return t.isFunction(b) && (d = d || c, c = b, b = null), t.ajax({
				type: "GET",
				url: a,
				data: b,
				success: c,
				dataType: d
			})
		},
		getScript: function(a, b) {
			return t.get(a, null, b, "script")
		},
		getJSON: function(a, b, c) {
			return t.get(a, b, c, "json")
		},
		post: function(a, b, c, d) {
			return t.isFunction(b) && (d = d || c, c = b, b = {}), t.ajax({
				type: "POST",
				url: a,
				data: b,
				success: c,
				dataType: d
			})
		},
		ajaxSetup: function(a) {
			t.extend(t.ajaxSettings, a)
		},
		ajaxSettings: {
			url: location.href,
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			xhr: !a.XMLHttpRequest || "file:" === a.location.protocol && a.ActiveXObject ? function() {
				try {
					return new a.ActiveXObject("Microsoft.XMLHTTP")
				} catch (b) {}
			} : function() {
				return new a.XMLHttpRequest
			},
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				script: "text/javascript, application/javascript",
				json: "application/json, text/javascript",
				text: "text/plain",
				_default: "*/*"
			}
		},
		lastModified: {},
		etag: {},
		ajax: function(c) {
			function d() {
				k.success && k.success.call(l, j, i, x), k.global && g("ajaxSuccess", [x, k])
			}

			function e() {
				k.complete && k.complete.call(l, x, i), k.global && g("ajaxComplete", [x, k]), k.global && !--t.active && t.event.trigger("ajaxStop")
			}

			function g(a, b) {
				(k.context ? t(k.context) : t.event).trigger(a, b)
			}
			var h, i, j, k = t.extend(!0, {}, t.ajaxSettings, c),
				l = c && c.context || k,
				m = k.type.toUpperCase();
			if (k.data && k.processData && "string" != typeof k.data && (k.data = t.param(k.data, k.traditional)), "jsonp" === k.dataType && ("GET" === m ? Ka.test(k.url) || (k.url += (La.test(k.url) ? "&" : "?") + (k.jsonp || "callback") + "=?") : k.data && Ka.test(k.data) || (k.data = (k.data ? k.data + "&" : "") + (k.jsonp || "callback") + "=?"), k.dataType = "json"), "json" === k.dataType && (k.data && Ka.test(k.data) || Ka.test(k.url)) && (h = k.jsonpCallback || "jsonp" + Ga++, k.data && (k.data = (k.data + "").replace(Ka, "=" + h + "$1")), k.url = k.url.replace(Ka, "=" + h + "$1"), k.dataType = "script", a[h] = a[h] || function(c) {
				j = c, d(), e(), a[h] = b;
				try {
					delete a[h]
				} catch (f) {}
				r && r.removeChild(s)
			}), "script" === k.dataType && null === k.cache && (k.cache = !1), k.cache === !1 && "GET" === m) {
				var n = f(),
					o = k.url.replace(Ma, "$1_=" + n + "$2");
				k.url = o + (o === k.url ? (La.test(k.url) ? "&" : "?") + "_=" + n : "")
			}
			k.data && "GET" === m && (k.url += (La.test(k.url) ? "&" : "?") + k.data), k.global && !t.active++ && t.event.trigger("ajaxStart");
			var p = Na.exec(k.url),
				q = p && (p[1] && p[1] !== location.protocol || p[2] !== location.host);
			if ("script" === k.dataType && "GET" === m && q) {
				var r = w.head || w.getElementsByTagName("head")[0] || w.documentElement,
					s = w.createElement("script");
				if (s.src = k.url, k.scriptCharset && (s.charset = k.scriptCharset), !h) {
					var u = !1;
					s.onload = s.onreadystatechange = function() {
						u || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (u = !0, d(), e(), s.onload = s.onreadystatechange = null, r && s.parentNode && r.removeChild(s))
					}
				}
				return r.insertBefore(s, r.firstChild), b
			}
			var v = !1,
				x = k.xhr();
			if (x) {
				k.username ? x.open(m, k.url, k.async, k.username, k.password) : x.open(m, k.url, k.async);
				try {
					(k.data || c && c.contentType) && x.setRequestHeader("Content-Type", k.contentType), k.ifModified && (t.lastModified[k.url] && x.setRequestHeader("If-Modified-Since", t.lastModified[k.url]), t.etag[k.url] && x.setRequestHeader("If-None-Match", t.etag[k.url])), q || x.setRequestHeader("X-Requested-With", "XMLHttpRequest"), x.setRequestHeader("Accept", k.dataType && k.accepts[k.dataType] ? k.accepts[k.dataType] + ", */*" : k.accepts._default)
				} catch (y) {}
				if (k.beforeSend && k.beforeSend.call(l, x, k) === !1) return k.global && !--t.active && t.event.trigger("ajaxStop"), x.abort(), !1;
				k.global && g("ajaxSend", [x, k]);
				var z = x.onreadystatechange = function(a) {
					if (x && 0 !== x.readyState && "abort" !== a) {
						if (!v && x && (4 === x.readyState || "timeout" === a)) {
							v = !0, x.onreadystatechange = t.noop, i = "timeout" === a ? "timeout" : t.httpSuccess(x) ? k.ifModified && t.httpNotModified(x, k.url) ? "notmodified" : "success" : "error";
							var b;
							if ("success" === i) try {
								j = t.httpData(x, k.dataType, k)
							} catch (c) {
								i = "parsererror", b = c
							}
							"success" === i || "notmodified" === i ? h || d() : t.handleError(k, x, i, b), e(), "timeout" === a && x.abort(), k.async && (x = null)
						}
					} else v || e(), v = !0, x && (x.onreadystatechange = t.noop)
				};
				try {
					var A = x.abort;
					x.abort = function() {
						x && A.call(x), z("abort")
					}
				} catch (y) {}
				k.async && k.timeout > 0 && setTimeout(function() {
					x && !v && z("timeout")
				}, k.timeout);
				try {
					x.send("POST" === m || "PUT" === m || "DELETE" === m ? k.data : null)
				} catch (y) {
					t.handleError(k, x, null, y), e()
				}
				return k.async || z(), x
			}
		},
		handleError: function(a, b, c, d) {
			a.error && a.error.call(a.context || a, b, c, d), a.global && (a.context ? t(a.context) : t.event).trigger("ajaxError", [b, a, d])
		},
		active: 0,
		httpSuccess: function(a) {
			try {
				return !a.status && "file:" === location.protocol || a.status >= 200 && a.status < 300 || 304 === a.status || 1223 === a.status || 0 === a.status
			} catch (b) {}
			return !1
		},
		httpNotModified: function(a, b) {
			var c = a.getResponseHeader("Last-Modified"),
				d = a.getResponseHeader("Etag");
			return c && (t.lastModified[b] = c), d && (t.etag[b] = d), 304 === a.status || 0 === a.status
		},
		httpData: function(a, b, c) {
			var d = a.getResponseHeader("content-type") || "",
				e = "xml" === b || !b && d.indexOf("xml") >= 0,
				f = e ? a.responseXML : a.responseText;
			return e && "parsererror" === f.documentElement.nodeName && t.error("parsererror"), c && c.dataFilter && (f = c.dataFilter(f, b)), "string" == typeof f && ("json" === b || !b && d.indexOf("json") >= 0 ? f = t.parseJSON(f) : ("script" === b || !b && d.indexOf("javascript") >= 0) && t.globalEval(f)), f
		},
		param: function(a, c) {
			function d(a, b) {
				t.isArray(b) ? t.each(b, function(b, f) {
					c || /\[\]$/.test(a) ? e(a, f) : d(a + "[" + ("object" == typeof f || t.isArray(f) ? b : "") + "]", f)
				}) : c || null == b || "object" != typeof b ? e(a, b) : t.each(b, function(b, c) {
					d(a + "[" + b + "]", c)
				})
			}

			function e(a, b) {
				b = t.isFunction(b) ? b() : b, f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			}
			var f = [];
			if (c === b && (c = t.ajaxSettings.traditional), t.isArray(a) || a.jquery) t.each(a, function() {
				e(this.name, this.value)
			});
			else
				for (var g in a) d(g, a[g]);
			return f.join("&").replace(Oa, "+")
		}
	});
	var Qa, Ra = {},
		Sa = /toggle|show|hide/,
		Ta = /^([+-]=)?([\d+-.]+)(.*)$/,
		Ua = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		];
	t.fn.extend({
		show: function(a, b) {
			if (a || 0 === a) return this.animate(o("show", 3), a, b);
			for (var c = 0, d = this.length; d > c; c++) {
				var e = t.data(this[c], "olddisplay");
				if (this[c].style.display = e || "", "none" === t.css(this[c], "display")) {
					var f, g = this[c].nodeName;
					if (Ra[g]) f = Ra[g];
					else {
						var h = t("<" + g + " />").appendTo("body");
						f = h.css("display"), "none" === f && (f = "block"), h.remove(), Ra[g] = f
					}
					t.data(this[c], "olddisplay", f)
				}
			}
			for (var i = 0, j = this.length; j > i; i++) this[i].style.display = t.data(this[i], "olddisplay") || "";
			return this
		},
		hide: function(a, b) {
			if (a || 0 === a) return this.animate(o("hide", 3), a, b);
			for (var c = 0, d = this.length; d > c; c++) {
				var e = t.data(this[c], "olddisplay");
				e || "none" === e || t.data(this[c], "olddisplay", t.css(this[c], "display"))
			}
			for (var f = 0, g = this.length; g > f; f++) this[f].style.display = "none";
			return this
		},
		_toggle: t.fn.toggle,
		toggle: function(a, b) {
			var c = "boolean" == typeof a;
			return t.isFunction(a) && t.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || c ? this.each(function() {
				var b = c ? a : t(this).is(":hidden");
				t(this)[b ? "show" : "hide"]()
			}) : this.animate(o("toggle", 3), a, b), this
		},
		fadeTo: function(a, b, c) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c)
		},
		animate: function(a, b, c, d) {
			var e = t.speed(b, c, d);
			return t.isEmptyObject(a) ? this.each(e.complete) : this[e.queue === !1 ? "each" : "queue"](function() {
				var b, c = t.extend({}, e),
					d = 1 === this.nodeType && t(this).is(":hidden"),
					f = this;
				for (b in a) {
					var g = b.replace(wa, Fa);
					if (b !== g && (a[g] = a[b], delete a[b], b = g), "hide" === a[b] && d || "show" === a[b] && !d) return c.complete.call(this);
					"height" !== b && "width" !== b || !this.style || (c.display = t.css(this, "display"), c.overflow = this.style.overflow), t.isArray(a[b]) && ((c.specialEasing = c.specialEasing || {})[b] = a[b][1], a[b] = a[b][0])
				}
				return null != c.overflow && (this.style.overflow = "hidden"), c.curAnim = t.extend({}, a), t.each(a, function(b, e) {
					var g = new t.fx(f, c, b);
					if (Sa.test(e)) g["toggle" === e ? d ? "show" : "hide" : e](a);
					else {
						var h = Ta.exec(e),
							i = g.cur(!0) || 0;
						if (h) {
							var j = parseFloat(h[2]),
								k = h[3] || "px";
							"px" !== k && (f.style[b] = (j || 1) + k, i = (j || 1) / g.cur(!0) * i, f.style[b] = i + k), h[1] && (j = ("-=" === h[1] ? -1 : 1) * j + i), g.custom(i, j, k)
						} else g.custom(i, e, "")
					}
				}), !0
			})
		},
		stop: function(a, b) {
			var c = t.timers;
			return a && this.queue([]), this.each(function() {
				for (var a = c.length - 1; a >= 0; a--) c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
			}), b || this.dequeue(), this
		}
	}), t.each({
		slideDown: o("show", 1),
		slideUp: o("hide", 1),
		slideToggle: o("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		}
	}, function(a, b) {
		t.fn[a] = function(a, c) {
			return this.animate(b, a, c)
		}
	}), t.extend({
		speed: function(a, b, c) {
			var d = a && "object" == typeof a ? a : {
				complete: c || !c && b || t.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !t.isFunction(b) && b
			};
			return d.duration = t.fx.off ? 0 : "number" == typeof d.duration ? d.duration : t.fx.speeds[d.duration] || t.fx.speeds._default, d.old = d.complete, d.complete = function() {
				d.queue !== !1 && t(this).dequeue(), t.isFunction(d.old) && d.old.call(this)
			}, d
		},
		easing: {
			linear: function(a, b, c, d) {
				return c + d * a
			},
			swing: function(a, b, c, d) {
				return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b, this.elem = a, this.prop = c, b.orig || (b.orig = {})
		}
	}), t.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (t.fx.step[this.prop] || t.fx.step._default)(this), "height" !== this.prop && "width" !== this.prop || !this.elem.style || (this.elem.style.display = "block")
		},
		cur: function(a) {
			if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
			var b = parseFloat(t.css(this.elem, this.prop, a));
			return b && b > -1e4 ? b : parseFloat(t.curCSS(this.elem, this.prop)) || 0
		},
		custom: function(a, b, c) {
			function d(a) {
				return e.step(a)
			}
			this.startTime = f(), this.start = a, this.end = b, this.unit = c || this.unit || "px", this.now = this.start, this.pos = this.state = 0;
			var e = this;
			d.elem = this.elem, d() && t.timers.push(d) && !Qa && (Qa = setInterval(t.fx.tick, 13))
		},
		show: function() {
			this.options.orig[this.prop] = t.style(this.elem, this.prop), this.options.show = !0, this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), t(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = t.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b = f(),
				c = !0;
			if (a || b >= this.options.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
				for (var d in this.options.curAnim) this.options.curAnim[d] !== !0 && (c = !1);
				if (c) {
					if (null != this.options.display) {
						this.elem.style.overflow = this.options.overflow;
						var e = t.data(this.elem, "olddisplay");
						this.elem.style.display = e ? e : this.options.display, "none" === t.css(this.elem, "display") && (this.elem.style.display = "block")
					}
					if (this.options.hide && t(this.elem).hide(), this.options.hide || this.options.show)
						for (var g in this.options.curAnim) t.style(this.elem, g, this.options.orig[g]);
					this.options.complete.call(this.elem)
				}
				return !1
			}
			var h = b - this.startTime;
			this.state = h / this.options.duration;
			var i = this.options.specialEasing && this.options.specialEasing[this.prop],
				j = this.options.easing || (t.easing.swing ? "swing" : "linear");
			return this.pos = t.easing[i || j](this.state, h, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
		}
	}, t.extend(t.fx, {
		tick: function() {
			for (var a = t.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
			a.length || t.fx.stop()
		},
		stop: function() {
			clearInterval(Qa), Qa = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				t.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
			}
		}
	}), t.expr && t.expr.filters && (t.expr.filters.animated = function(a) {
		return t.grep(t.timers, function(b) {
			return a === b.elem
		}).length
	}), "getBoundingClientRect" in w.documentElement ? t.fn.offset = function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
			t.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return t.offset.bodyOffset(b);
		var c = b.getBoundingClientRect(),
			d = b.ownerDocument,
			e = d.body,
			f = d.documentElement,
			g = f.clientTop || e.clientTop || 0,
			h = f.clientLeft || e.clientLeft || 0,
			i = c.top + (self.pageYOffset || t.support.boxModel && f.scrollTop || e.scrollTop) - g,
			j = c.left + (self.pageXOffset || t.support.boxModel && f.scrollLeft || e.scrollLeft) - h;
		return {
			top: i,
			left: j
		}
	} : t.fn.offset = function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
			t.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return t.offset.bodyOffset(b);
		t.offset.initialize();
		for (var c, d = b.offsetParent, e = b, f = b.ownerDocument, g = f.documentElement, h = f.body, i = f.defaultView, j = i ? i.getComputedStyle(b, null) : b.currentStyle, k = b.offsetTop, l = b.offsetLeft;
		     (b = b.parentNode) && b !== h && b !== g && (!t.offset.supportsFixedPosition || "fixed" !== j.position);) c = i ? i.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, !t.offset.doesNotAddBorder || t.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName) || (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), t.offset.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), j = c;
		return ("relative" === j.position || "static" === j.position) && (k += h.offsetTop, l += h.offsetLeft), t.offset.supportsFixedPosition && "fixed" === j.position && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)), {
			top: k,
			left: l
		}
	}, t.offset = {
		initialize: function() {
			var a, b, c, d, e = w.body,
				f = w.createElement("div"),
				g = parseFloat(t.curCSS(e, "marginTop", !0)) || 0,
				h = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			t.extend(f.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			}), f.innerHTML = h, e.insertBefore(f, e.firstChild), a = f.firstChild, b = a.firstChild, d = a.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== b.offsetTop, this.doesAddBorderForTableAndCells = 5 === d.offsetTop, b.style.position = "fixed", b.style.top = "20px", this.supportsFixedPosition = 20 === b.offsetTop || 15 === b.offsetTop, b.style.position = b.style.top = "", a.style.overflow = "hidden", a.style.position = "relative", this.subtractsBorderForOverflowNotVisible = -5 === b.offsetTop, this.doesNotIncludeMarginInBodyOffset = e.offsetTop !== g, e.removeChild(f), e = f = a = b = c = d = null, t.offset.initialize = t.noop
		},
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			return t.offset.initialize(), t.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(t.curCSS(a, "marginTop", !0)) || 0, c += parseFloat(t.curCSS(a, "marginLeft", !0)) || 0), {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			/static/.test(t.curCSS(a, "position")) && (a.style.position = "relative");
			var d = t(a),
				e = d.offset(),
				f = parseInt(t.curCSS(a, "top", !0), 10) || 0,
				g = parseInt(t.curCSS(a, "left", !0), 10) || 0;
			t.isFunction(b) && (b = b.call(a, c, e));
			var h = {
				top: b.top - e.top + f,
				left: b.left - e.left + g
			};
			"using" in b ? b.using.call(a, h) : d.css(h)
		}
	}, t.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				c = this.offset(),
				d = /^body|html$/i.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			return c.top -= parseFloat(t.curCSS(a, "marginTop", !0)) || 0, c.left -= parseFloat(t.curCSS(a, "marginLeft", !0)) || 0, d.top += parseFloat(t.curCSS(b[0], "borderTopWidth", !0)) || 0, d.left += parseFloat(t.curCSS(b[0], "borderLeftWidth", !0)) || 0, {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || w.body; a && !/^body|html$/i.test(a.nodeName) && "static" === t.css(a, "position");) a = a.offsetParent;
				return a
			})
		}
	}), t.each(["Left", "Top"], function(a, c) {
		var d = "scroll" + c;
		t.fn[d] = function(c) {
			var e, f = this[0];
			return f ? c !== b ? this.each(function() {
				e = p(this), e ? e.scrollTo(a ? t(e).scrollLeft() : c, a ? c : t(e).scrollTop()) : this[d] = c
			}) : (e = p(f), e ? "pageXOffset" in e ? e[a ? "pageYOffset" : "pageXOffset"] : t.support.boxModel && e.document.documentElement[d] || e.document.body[d] : f[d]) : null
		}
	}), t.each(["Height", "Width"], function(a, c) {
		var d = c.toLowerCase();
		t.fn["inner" + c] = function() {
			return this[0] ? t.css(this[0], d, !1, "padding") : null
		}, t.fn["outer" + c] = function(a) {
			return this[0] ? t.css(this[0], d, !1, a ? "margin" : "border") : null
		}, t.fn[d] = function(a) {
			var e = this[0];
			return e ? t.isFunction(a) ? this.each(function(b) {
				var c = t(this);
				c[d](a.call(this, b, c[d]()))
			}) : "scrollTo" in e && e.document ? "CSS1Compat" === e.document.compatMode && e.document.documentElement["client" + c] || e.document.body["client" + c] : 9 === e.nodeType ? Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]) : a === b ? t.css(e, d) : this.css(d, "string" == typeof a ? a : a + "px") : null == a ? null : this
		}
	}), a.youdao = a.youdao || {}, a.youdao.jQuery = t
}(window),