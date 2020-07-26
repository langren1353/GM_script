(function() {
	var p = 8,
		t = "",
		r = 0,
		q = function(y, x) {
			this.highOrder = y;
			this.lowOrder = x
		},
		s = function(z) {
			var x = [],
				y = (1 << p) - 1,
				B = z.length * p,
				A;
			for (A = 0; A < B; A += p) {
				x[A >> 5] |= (z.charCodeAt(A / p) & y) << (32 - p - (A % 32))
			}
			return x
		},
		d = function(y) {
			var x = [],
				B = y.length,
				A,
				z;
			for (A = 0; A < B; A += 2) {
				z = parseInt(y.substr(A, 2), 16);
				if (!isNaN(z)) {
					x[A >> 3] |= z << (24 - (4 * (A % 8)))
				} else {
					return "INVALID HEX STRING"
				}
			}
			return x
		},
		g = function(y) {
			var x = (r) ? "0123456789ABCDEF": "0123456789abcdef",
				C = "",
				B = y.length * 4,
				A,
				z;
			for (A = 0; A < B; A += 1) {
				z = y[A >> 2] >> ((3 - (A % 4)) * 8);
				C += x.charAt((z >> 4) & 15) + x.charAt(z & 15)
			}
			return C
		},
		k = function(y) {
			var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				D = "",
				B = y.length * 4,
				A, z, C;
			for (A = 0; A < B; A += 3) {
				C = (((y[A >> 2] >> 8 * (3 - A % 4)) & 255) << 16) | (((y[A + 1 >> 2] >> 8 * (3 - (A + 1) % 4)) & 255) << 8) | ((y[A + 2 >> 2] >> 8 * (3 - (A + 2) % 4)) & 255);
				for (z = 0; z < 4; z += 1) {
					if (A * 8 + z * 6 <= y.length * 32) {
						D += x.charAt((C >> 6 * (3 - z)) & 63)
					} else {
						D += t
					}
				}
			}
			return D
		},
		h = function(y, z) {
			if (z <= 32) {
				return new q((y.highOrder >>> z) | (y.lowOrder << (32 - z)), (y.lowOrder >>> z) | (y.highOrder << (32 - z)))
			} else {
				return new q((y.lowOrder >>> z) | (y.highOrder << (32 - z)), (y.highOrder >>> z) | (y.lowOrder << (32 - z)))
			}
		},
		o = function(y, z) {
			if (z <= 32) {
				return new q(y.highOrder >>> z, y.lowOrder >>> z | (y.highOrder << (32 - z)))
			} else {
				return new q(0, y.highOrder << (32 - z))
			}
		},
		i = function(A, C, B) {
			return new q((A.highOrder & C.highOrder) ^ (~A.highOrder & B.highOrder), (A.lowOrder & C.lowOrder) ^ (~A.lowOrder & B.lowOrder))
		},
		c = function(A, C, B) {
			return new q((A.highOrder & C.highOrder) ^ (A.highOrder & B.highOrder) ^ (C.highOrder & B.highOrder), (A.lowOrder & C.lowOrder) ^ (A.lowOrder & B.lowOrder) ^ (C.lowOrder & B.lowOrder))
		},
		m = function(y) {
			var z = h(y, 28),
				B = h(y, 34),
				A = h(y, 39);
			return new q(z.highOrder ^ B.highOrder ^ A.highOrder, z.lowOrder ^ B.lowOrder ^ A.lowOrder)
		},
		j = function(z) {
			var A = h(z, 14),
				y = h(z, 18),
				B = h(z, 41);
			return new q(A.highOrder ^ y.highOrder ^ B.highOrder, A.lowOrder ^ y.lowOrder ^ B.lowOrder)
		},
		v = function(y) {
			var z = h(y, 1),
				A = h(y, 8),
				B = o(y, 7);
			return new q(z.highOrder ^ A.highOrder ^ B.highOrder, z.lowOrder ^ A.lowOrder ^ B.lowOrder)
		},
		u = function(y) {
			var z = h(y, 19),
				B = h(y, 61),
				A = o(y, 6);
			return new q(z.highOrder ^ B.highOrder ^ A.highOrder, z.lowOrder ^ B.lowOrder ^ A.lowOrder)
		},
		e = function(z, E) {
			var A, B, D, C;
			A = (z.lowOrder & 65535) + (E.lowOrder & 65535);
			B = (z.lowOrder >>> 16) + (E.lowOrder >>> 16) + (A >>> 16);
			D = ((B & 65535) << 16) | (A & 65535);
			A = (z.highOrder & 65535) + (E.highOrder & 65535) + (B >>> 16);
			B = (z.highOrder >>> 16) + (E.highOrder >>> 16) + (A >>> 16);
			C = ((B & 65535) << 16) | (A & 65535);
			return new q(C, D)
		},
		b = function(y, x, E, D) {
			var B, z, C, A;
			B = (y.lowOrder & 65535) + (x.lowOrder & 65535) + (E.lowOrder & 65535) + (D.lowOrder & 65535);
			z = (y.lowOrder >>> 16) + (x.lowOrder >>> 16) + (E.lowOrder >>> 16) + (D.lowOrder >>> 16) + (B >>> 16);
			C = ((z & 65535) << 16) | (B & 65535);
			B = (y.highOrder & 65535) + (x.highOrder & 65535) + (E.highOrder & 65535) + (D.highOrder & 65535) + (z >>> 16);
			z = (y.highOrder >>> 16) + (x.highOrder >>> 16) + (E.highOrder >>> 16) + (D.highOrder >>> 16) + (B >>> 16);
			A = ((z & 65535) << 16) | (B & 65535);
			return new q(A, C)
		},
		a = function(E, D, C, B, A) {
			var z, y, x, F;
			z = (E.lowOrder & 65535) + (D.lowOrder & 65535) + (C.lowOrder & 65535) + (B.lowOrder & 65535) + (A.lowOrder & 65535);
			y = (E.lowOrder >>> 16) + (D.lowOrder >>> 16) + (C.lowOrder >>> 16) + (B.lowOrder >>> 16) + (A.lowOrder >>> 16) + (z >>> 16);
			x = ((y & 65535) << 16) | (z & 65535);
			z = (E.highOrder & 65535) + (D.highOrder & 65535) + (C.highOrder & 65535) + (B.highOrder & 65535) + (A.highOrder & 65535) + (y >>> 16);
			y = (E.highOrder >>> 16) + (D.highOrder >>> 16) + (C.highOrder >>> 16) + (B.highOrder >>> 16) + (A.highOrder >>> 16) + (z >>> 16);
			F = ((y & 65535) << 16) | (z & 65535);
			return new q(F, x)
		},
		f = function(G, F, E) {
			var S, R, Q, P, O, N, M, J, D, B, z, L, I, A, y, x = [],
				C;
			if (E === "SHA-384" || E === "SHA-512") {
				L = (((F + 128) >> 10) << 5) + 31;
				y = [new q(1116352408, 3609767458), new q(1899447441, 602891725), new q(3049323471, 3964484399), new q(3921009573, 2173295548), new q(961987163, 4081628472), new q(1508970993, 3053834265), new q(2453635748, 2937671579), new q(2870763221, 3664609560), new q(3624381080, 2734883394), new q(310598401, 1164996542), new q(607225278, 1323610764), new q(1426881987, 3590304994), new q(1925078388, 4068182383), new q(2162078206, 991336113), new q(2614888103, 633803317), new q(3248222580, 3479774868), new q(3835390401, 2666613458), new q(4022224774, 944711139), new q(264347078, 2341262773), new q(604807628, 2007800933), new q(770255983, 1495990901), new q(1249150122, 1856431235), new q(1555081692, 3175218132), new q(1996064986, 2198950837), new q(2554220882, 3999719339), new q(2821834349, 766784016), new q(2952996808, 2566594879), new q(3210313671, 3203337956), new q(3336571891, 1034457026), new q(3584528711, 2466948901), new q(113926993, 3758326383), new q(338241895, 168717936), new q(666307205, 1188179964), new q(773529912, 1546045734), new q(1294757372, 1522805485), new q(1396182291, 2643833823), new q(1695183700, 2343527390), new q(1986661051, 1014477480), new q(2177026350, 1206759142), new q(2456956037, 344077627), new q(2730485921, 1290863460), new q(2820302411, 3158454273), new q(3259730800, 3505952657), new q(3345764771, 106217008), new q(3516065817, 3606008344), new q(3600352804, 1432725776), new q(4094571909, 1467031594), new q(275423344, 851169720), new q(430227734, 3100823752), new q(506948616, 1363258195), new q(659060556, 3750685593), new q(883997877, 3785050280), new q(958139571, 3318307427), new q(1322822218, 3812723403), new q(1537002063, 2003034995), new q(1747873779, 3602036899), new q(1955562222, 1575990012), new q(2024104815, 1125592928), new q(2227730452, 2716904306), new q(2361852424, 442776044), new q(2428436474, 593698344), new q(2756734187, 3733110249), new q(3204031479, 2999351573), new q(3329325298, 3815920427), new q(3391569614, 3928383900), new q(3515267271, 566280711), new q(3940187606, 3454069534), new q(4118630271, 4000239992), new q(116418474, 1914138554), new q(174292421, 2731055270), new q(289380356, 3203993006), new q(460393269, 320620315), new q(685471733, 587496836), new q(852142971, 1086792851), new q(1017036298, 365543100), new q(1126000580, 2618297676), new q(1288033470, 3409855158), new q(1501505948, 4234509866), new q(1607167915, 987167468), new q(1816402316, 1246189591)];
				if (E === "SHA-384") {
					z = [new q(3418070365, 3238371032), new q(1654270250, 914150663), new q(2438529370, 812702999), new q(355462360, 4144912697), new q(1731405415, 4290775857), new q(41048885895, 1750603025), new q(3675008525, 1694076839), new q(1203062813, 3204075428)]
				} else {
					z = [new q(1779033703, 4089235720), new q(3144134277, 2227873595), new q(1013904242, 4271175723), new q(2773480762, 1595750129), new q(1359893119, 2917565137), new q(2600822924, 725511199), new q(528734635, 4215389547), new q(1541459225, 327033209)]
				}
			}
			G[F >> 5] |= 128 << (24 - F % 32);
			G[L] = F;
			C = G.length;
			for (I = 0; I < C; I += 32) {
				S = z[0];
				R = z[1];
				Q = z[2];
				P = z[3];
				O = z[4];
				N = z[5];
				M = z[6];
				J = z[7];
				for (A = 0; A < 80; A += 1) {
					if (A < 16) {
						x[A] = new q(G[A * 2 + I], G[A * 2 + I + 1])
					} else {
						x[A] = b(u(x[A - 2]), x[A - 7], v(x[A - 15]), x[A - 16])
					}
					D = a(J, j(O), i(O, N, M), y[A], x[A]);
					B = e(m(S), c(S, R, Q));
					J = M;
					M = N;
					N = O;
					O = e(P, D);
					P = Q;
					Q = R;
					R = S;
					S = e(D, B)
				}
				z[0] = e(S, z[0]);
				z[1] = e(R, z[1]);
				z[2] = e(Q, z[2]);
				z[3] = e(P, z[3]);
				z[4] = e(O, z[4]);
				z[5] = e(N, z[5]);
				z[6] = e(M, z[6]);
				z[7] = e(J, z[7])
			}
			switch (E) {
				case "SHA-384":
					return [z[0].highOrder, z[0].lowOrder, z[1].highOrder, z[1].lowOrder, z[2].highOrder, z[2].lowOrder, z[3].highOrder, z[3].lowOrder, z[4].highOrder, z[4].lowOrder, z[5].highOrder, z[5].lowOrder];
				case "SHA-512":
					return [z[0].highOrder, z[0].lowOrder, z[1].highOrder, z[1].lowOrder, z[2].highOrder, z[2].lowOrder, z[3].highOrder, z[3].lowOrder, z[4].highOrder, z[4].lowOrder, z[5].highOrder, z[5].lowOrder, z[6].highOrder, z[6].lowOrder, z[7].highOrder, z[7].lowOrder];
				default:
					return []
			}
		},
		n = function(y, x) {
			this.sha384 = null;
			this.sha512 = null;
			this.strBinLen = null;
			this.strToHash = null;
			if ("HEX" === x) {
				if (0 !== (y.length % 2)) {
					return "TEXT MUST BE IN BYTE INCREMENTS"
				}
				this.strBinLen = y.length * 4;
				this.strToHash = d(y)
			} else {
				if (("ASCII" === x) || ("undefined" === typeof(x))) {
					this.strBinLen = y.length * p;
					this.strToHash = s(y)
				} else {
					return "UNKNOWN TEXT INPUT TYPE"
				}
			}
		};
	n.prototype = {
		getHash: function(y, x) {
			var A = null,
				z = this.strToHash.slice();
			switch (x) {
				case "HEX":
					A = g;
					break;
				case "B64":
					A = k;
					break;
				default:
					return "FORMAT NOT RECOGNIZED"
			}
			switch (y) {
				case "SHA-384":
					if (null === this.sha384) {
						this.sha384 = f(z, this.strBinLen, y)
					}
					return A(this.sha384);
				case "SHA-512":
					if (null === this.sha512) {
						this.sha512 = f(z, this.strBinLen, y)
					}
					return A(this.sha512);
				default:
					return "HASH NOT RECOGNIZED"
			}
		},
		getHMAC: function(G, F, E, C) {
			var B, A, z, x, D, I, H = [],
				y = [];
			switch (C) {
				case "HEX":
					B = g;
					break;
				case "B64":
					B = k;
					break;
				default:
					return "FORMAT NOT RECOGNIZED"
			}
			switch (E) {
				case "SHA-384":
					I = 384;
					break;
				case "SHA-512":
					I = 512;
					break;
				default:
					return "HASH NOT RECOGNIZED"
			}
			if ("HEX" === F) {
				if (0 !== (G.length % 2)) {
					return "KEY MUST BE IN BYTE INCREMENTS"
				}
				A = d(G);
				D = G.length * 4
			} else {
				if ("ASCII" === F) {
					A = s(G);
					D = G.length * p
				} else {
					return "UNKNOWN KEY INPUT TYPE"
				}
			}
			if (128 < (D / 8)) {
				A = f(A, D, E);
				A[31] &= 4294967040
			} else {
				if (128 > (D / 8)) {
					A[31] &= 4294967040
				}
			}
			for (z = 0; z <= 31; z += 1) {
				H[z] = A[z] ^ 909522486;
				y[z] = A[z] ^ 1549556828
			}
			x = f(H.concat(this.strToHash), 1024 + this.strBinLen, E);
			x = f(y.concat(x), 1024 + I, E);
			return (B(x))
		}
	};
	window.jsSHA = n
} ()); !
	function(b) {
		function a() {
			var h = document,
				c, f, i = ",maximum-scale=",
				g = /,*maximum\-scale\=\d*\.*\d*/;
			if (!this.addEventListener || !h.querySelector) {
				return
			}
			c = h.querySelector('meta[name="viewport"]');
			f = c.content;
			function e(d) {
				c.content = f + (d.type == "blur" ? (f.match(g, "") ? "": i + 10) : i + 1)
			}
			this.addEventListener("focus", e, true);
			this.addEventListener("blur", e, false)
		}
		b.fn.cancelZoom = function() {
			return this.each(a)
		}
	} (jQuery); !
	function(f) {
		var a = f.Views.Base,
			k, h = f.Data.Settings.tabs;
		k = function(o) {
			this.settings = o.settings;
			a.call(this, o);
			this.settings.on("change", c.bind(this));
			this.settings.on("change:cloudsave", this._updateCloudSaveBookmarklet.bind(this));
			this._renderTab(window.location.hash.replace("#", ""));
			w.addEventListener("hashchange",
				function() {
					this._renderTab(window.location.hash.replace("#", ""))
				}.bind(this))
		};
		f.Views.Settings.Main = k;
		k.prototype = $.extend({},
			a.prototype, {
				template: "settings_main",
				_render: function() {
					a.prototype._render.call(this, {
						tabs: h
					});
					this.$detail = this.$(".js-set-detail");
					this.views.cloudsave = new f.Views.Settings.CloudSave({
						settings: this.settings,
						before: this.$(".js-set-bookmarklet")
					});
					this._cacheElems(".js-set", ["head-tab", "exit", "bookmarklet-expand", "bookmarklet-close", "bookmarklet-detail", "bookmarklet-json", "bookmarklet-url", "bookmarklet-cookie", "bookmarklet-cs-label", "bookmarklet-cs-url", "reset-msg", "reset-expand", "reset-confirm", "reset-cancel", "reset-detail"]);
					this.$headtab.click(e.bind(this));
					this.$bookmarkletexpand.click(d.bind(this));
					this.$bookmarkletclose.click(g.bind(this));
					this.$resetexpand.click(i.bind(this));
					this.$resetconfirm.click(j.bind(this));
					this.$resetcancel.click(b.bind(this));
					this.$exit.click(n.bind(this));
					this._updateBookmarkletData();
					this._updateCloudSaveBookmarklet()
				},
				_renderTab: function(o) {
					if (!o || !h.some(function(p) {
						return p.id === o
					})) {
						o = "general"
					}
					if (this.views.tab) {
						this.$(".js-set-head-tab.is-active").removeClass("is-active");
						this.views.tab.destroy();
						this.$detail.empty();
						delete this.views.tab
					}
					this.$(".js-set-" + o).addClass("is-active");
					this.views.tab = new f.Views.Settings.Tab({
						tabId: o,
						settings: this.settings,
						appendTo: this.$detail
					})
				},
				_updateBookmarkletData: function() {
					this.$bookmarkletjson.text(JSON.stringify(this.settings.toJSON()));
					this.$bookmarkleturl.val(this.settings.toBookmarkletURL());
					this.$bookmarkletcookie.text(document.cookie)
				},
				_updateCloudSaveBookmarklet: function() {
					var o = (this.settings.getCloudSaveKey()) ? "removeClass": "addClass";
					this.$bookmarkletcslabel[o]("is-hidden");
					this.$bookmarkletcsurl[o]("is-hidden");
					this.$bookmarkletcsurl.val(this.settings.toCloudSaveBookmarkletURL())
				}
			});
		var m = function() {
				this.$resetexpand.removeClass("is-hidden");
				this.$resetdetail.addClass("is-hidden")
			},
			e = function(p) {
				p.preventDefault();
				var o = $(p.target).attr("data-tabid");
				w.history.replaceState(w.history.state, "", "settings#" + o);
				this._renderTab(o)
			},
			i = function() {
				this.$resetmsg.text(this.settings.getCloudSaveKey() ? lp("settings", "This will reset your saved settings to default values. Continue?") : lp("settings", "This will erase all settings. Continue?"));
				this.$resetexpand.addClass("is-hidden");
				this.$resetdetail.removeClass("is-hidden")
			},
			j = function() {
				var o = !this.settings.isDefault(this.settings.LANGUAGE_KEY);
				this.settings.clearAll();
				this.settings.saveToCloud(function() {
					o && window.location.reload()
				});
				m.call(this)
			},
			b = function() {
				m.call(this)
			},
			d = function() {
				this.$bookmarkletexpand.addClass("is-hidden");
				this.$bookmarkletdetail.removeClass("is-hidden")
			},
			g = function(o) {
				o.preventDefault();
				this.$bookmarkletexpand.removeClass("is-hidden");
				this.$bookmarkletdetail.addClass("is-hidden")
			},
			c = function(o) {
				this._updateBookmarkletData();
				if (o === "kp") {
					f.pixel.fire("sss", "s", {
						v: this.settings.get("kp")
					})
				}
			},
			n = function(o) {
				o.preventDefault();
				w.history.back()
			}
	} (DDG); !
	function(c) {
		var b = c.Views.Base,
			a;
		c.Views.Settings.Tab = a = function(d) {
			this.tabId = d.tabId;
			this.settings = d.settings;
			this.tab = c.findInArray(c.Data.Settings.tabs, "id", this.tabId);
			b.call(this, d)
		};
		a.prototype = $.extend({},
			b.prototype, {
				template: "settings_tab",
				_render: function() {
					b.prototype._render.call(this, {
						id: this.tabId
					});
					this.fields = [];
					for (var e = 0; e < this.tab.settings.length; e++) {
						var d = this.tab.settings[e];
						if ((d === "kat" || d === "kar") && c.settings.isDefault("kat") && c.settings.isDefault("kar")) {
							continue
						}
						if (d === "break") {
							this.$el.append('<div class="frm__hr"></div>');
							continue
						} else {
							if (d.charAt(0) !== "k") {
								this.$el.append('<div class="frm__section-label">' + lp("settings", d) + "</div>");
								continue
							} else {
								if (d === "kp" && c.page.isSafeDDG) {
									continue
								}
							}
						}
						var g = this.settings.getData(d),
							f = this.settings.getFieldClass(g.type);
						this.fields.push(new c.Views.Settings[f]({
							id: d,
							settings: this.settings,
							data: g,
							appendTo: this.$el,
							source: "t"
						}))
					}
				}
			})
	} (DDG); !
	function(d) {
		var c = d.Views.Base,
			e, b = "setting_",
			a = ".js-set-input";
		d.Views.Settings.FormField = e = function(f) {
			this.settings = f.settings;
			this.id = f.id;
			this.data = f.data;
			this.data.fieldId = b + this.id;
			this.data.breakOnSmallScreens = this.data.type.match(/^dropdown|dropdowncustom$/);
			this.data[this.data.type] = true;
			this.source = f.source;
			c.call(this, f);
			if (this.settings) {
				this._updateState()
			}
		};
		e.prototype = $.extend({},
			c.prototype, {
				template: "settings_field",
				destroy: function() {
					this.settings && this.settings.off("change:" + this.id, this._onSettingChangeFn);
					c.prototype.destroy.call(this)
				},
				getFromDOM: function() {
					return this.$fld.val()
				},
				setToDOM: function(f) {
					this.$fld.val(f)
				},
				_render: function() {
					c.prototype._render.call(this, this.data);
					this.$fld = this.$(a);
					this.$fld.change(this._onFormFieldChange.bind(this));
					if (is_mobile_device) {
						this.$fld.cancelZoom()
					}
					if (this.settings) {
						this._onSettingChangeFn = this._updateState.bind(this);
						this.settings.on("change:" + this.id, this._onSettingChangeFn)
					}
				},
				_updateState: function() {
					this.setToDOM(this.settings.get(this.id))
				},
				_updateSetting: function(g, f) {
					this.settings && this.settings.set(this.id, g, {
							saveToCloud: true,
							forceTheme: true
						},
						f);
					if (this.source) {
						d.pixel.fire("set", this.source, this.id)
					}
					this.emit("change", g)
				},
				_onFormFieldChange: function() {
					var f = this;
					this._updateSetting(this.getFromDOM(),
						function() {
							if (f.id === f.settings.LANGUAGE_KEY) {
								window.location.reload()
							} else {
								if (f.id === d.addToBrowser.BADGE_DISMISS_KEY && f.getFromDOM() == "-1") {
									f.settings.set(d.addToBrowser.BADGE_RECURRING_KEY, "-1")
								} else {
									if (f.id === d.addToBrowser.NEWSLETTER_DISMISS_KEY && f.getFromDOM() == "-1") {
										f.settings.set(d.addToBrowser.NEWSLETTER_RECURRING_KEY, "-1")
									}
								}
							}
						})
				}
			})
	} (DDG); !
	function(c) {
		var b = c.Views.Settings.FormField,
			a;
		c.Views.Settings.BooleanFormField = a = function(d) {
			b.call(this, d)
		};
		a.prototype = $.extend({},
			b.prototype, {
				getFromDOM: function() {
					var d = this.$fld.prop("checked") ? "1": "-1";
					if (this.data.values) {
						d = this.data.values[d]
					}
					return d
				},
				setToDOM: function(g) {
					if (this.data.values) {
						for (var e in this.data.values) {
							var d = this.data.values[e];
							if (g === d) {
								g = e;
								break
							}
						}
					}
					if (isNaN(parseInt(g, 10))) {
						g = 1
					}
					this.$fld.prop("checked", g == "1");
					var f = g == "1" ? "addClass": "removeClass";
					this.$el[f]("is-checked")
				}
			})
	} (DDG); !
	function(g) {
		var b = g.Views.Settings.FormField,
			c, h = ".js-set-color-swatch";
		g.Views.Settings.ColorFormField = c = function(j) {
			this._onResizeFn = a.bind(this);
			b.call(this, j)
		};
		c.prototype = $.extend({},
			b.prototype, {
				destroy: function() {
					this._hideColorPicker();
					b.prototype.destroy.call(this)
				},
				setToDOM: function(m) {
					var j = tinycolor(m),
						k = (j.isValid() && j.toHexString()) || "#fff";
					if (!this.$swatch) {
						this.$swatch = this.$(h)
					}
					this.$swatch.css({
						backgroundColor: k
					});
					this.cp && this.cp.setColor(k);
					this.$fld.val(k)
				},
				_render: function() {
					b.prototype._render.call(this);
					this.$el.on("click", e.bind(this))
				},
				_showColorPicker: function() {
					this.cp = new g.Views.Settings.ColorPicker({
						appendTo: $("body")
					});
					this.cp.on("change", f.bind(this));
					this.cp.on("hide", i.bind(this));
					this.cp.show($.extend({
							color: this.settings.get(this.id)
						},
						d.call(this)));
					g.device.on("resize", this._onResizeFn)
				},
				_hideColorPicker: function() {
					this.settings.saveToCloud();
					this.cp && this.cp.destroy();
					delete this.cp;
					g.device.off("resize", this._onResizeFn)
				}
			});
		var d = function() {
				var j = this.$fld.offset();
				return {
					top: j.top + (this.$fld.outerHeight() / 2) - (this.cp.height / 2),
					left: j.left - this.cp.width - 15
				}
			},
			e = function() {
				if (this.cp) {
					this._hideColorPicker()
				} else {
					this._showColorPicker()
				}
			},
			f = function(j) {
				this.$fld.val(j);
				this._onFormFieldChange()
			},
			i = function() {
				this._hideColorPicker()
			},
			a = function() {
				if (this.cp) {
					this.cp.position(d.call(this))
				}
			}
	} (DDG); !
	function(c) {
		var b = c.Views.Settings.FormField,
			a;
		c.Views.Settings.ThumbnailFormField = a = function(d) {
			b.call(this, d)
		};
		a.prototype = $.extend({},
			b.prototype, {
				getFromDOM: function() {
					return this.$("input:checked").val()
				},
				setToDOM: function(e) {
					this.$("input:checked").prop("checked");
					this.$(".is-checked").removeClass("is-checked");
					var d = this.$("#" + this.data.fieldId + "_" + e);
					d.prop("checked", true);
					d.parent().addClass("is-checked")
				},
				_render: function() {
					b.prototype._render.call(this);
					var d = this;
					this.$("label").click(function(f) {
						f.preventDefault();
						var g = $(this).attr("data-theme-id");
						d._updateSetting(g)
					})
				}
			})
	} (DDG); !
	function(b) {
		var a = b.Views.Settings.FormField,
			c;
		b.Views.Settings.CompositeFormField = c = function(d) {
			a.call(this, d)
		};
		c.prototype = $.extend({},
			a.prototype, {
				template: "settings_composite_field",
				destroy: function() {
					for (var d = 0; d < this.fields.length; d++) {
						this.fields[d].destroy()
					}
					a.prototype.destroy.call(this)
				},
				getFromDOM: function() {
					var e = [];
					for (var d = 0; d < this.fields.length; d++) {
						e.push(this.fields[d].getFromDOM())
					}
					return this.data.compositeKey[e.join(":")]
				},
				setToDOM: function(h) {
					var d;
					for (var g in this.data.compositeKey) {
						var e = this.data.compositeKey[g];
						if (h === e) {
							d = g.split(":");
							break
						}
					}
					if (!d || !d.length) {
						return
					}
					for (var f = 0; f < this.fields.length; f++) {
						this.fields[f].setToDOM(d[f])
					}
				},
				_render: function() {
					this.fields = [];
					for (var e = 0; e < this.data.subsettings.length; e++) {
						var d = this.data.subsettings[e],
							f = d.type === "boolean" ? "BooleanFormField": "FormField",
							g = new b.Views.Settings[f]({
								id: d.id,
								data: d,
								appendTo: this.$parent
							});
						this.fields.push(g);
						g.on("change", this._onFormFieldChange.bind(this))
					}
					this._onSettingChangeFn = this._updateState.bind(this);
					this.settings.on("change:" + this.id, this._onSettingChangeFn);
					this._updateState()
				}
			})
	} (DDG); !
	function(g) {
		var b = g.Views.Settings.FormField,
			e, a = "is-hidden",
			d = ".js-set-dropdown",
			i = ".js-set-custom",
			j = ".js-set-custom-input",
			c = ".js-set-custom-close",
			f = "custom";
		g.Views.Settings.DropDownCustomFormField = e = function(k) {
			b.call(this, k)
		};
		e.prototype = $.extend({},
			b.prototype, {
				getFromDOM: function() {
					return this._showingCustom ? this.$customInput.val() : this.$fld.val()
				},
				setToDOM: function(k) {
					if (!k || h(k, this.data.values)) {
						this.$customInput.val(k);
						this._showCustom()
					} else {
						this.$fld.val(k);
						this._hideCustom()
					}
				},
				_render: function() {
					this.data.customVal = f;
					b.prototype._render.call(this);
					this.$dropdown = this.$(d);
					this.$custom = this.$(i);
					this.$customInput = this.$(j);
					this.$customClose = this.$(c);
					this.$customInput.change(this._onFormFieldChange.bind(this));
					this.$customClose.on("click", this._hideCustom.bind(this))
				},
				_showCustom: function() {
					if (this._showingCustom) {
						return
					}
					this.$custom.removeClass(a);
					this.$dropdown.addClass(a);
					this._showingCustom = true;
					var k = this.getFromDOM();
					if (k) {
						this._updateSetting(k)
					}
				},
				_hideCustom: function() {
					if (!this._showingCustom) {
						return
					}
					this.$custom.addClass(a);
					this.$dropdown.removeClass(a);
					this._showingCustom = false;
					this._updateSetting(this.settings.getDefault(this.id))
				},
				_onFormFieldChange: function() {
					var k = this.getFromDOM();
					if (k === "custom" && !this._showingCustom) {
						return this._showCustom()
					}
					b.prototype._onFormFieldChange.call(this)
				}
			});
		var h = function(m, k) {
			return ! k[m]
		}
	} (DDG); !
	function(c) {
		var a = c.Views.Settings.FormField,
			b;
		c.Views.Settings.ClearFormField = b = function(d) {
			a.call(this, d)
		};
		b.prototype = $.extend({},
			a.prototype, {
				_render: function() {
					a.prototype._render.call(this);
					this.$wrap = this.$(".js-set-input-wrap")
				},
				getFromDOM: function() {
					return ""
				},
				setToDOM: function(d) {
					if (d) {
						this.$wrap.removeClass("is-hidden");
						this.$el.addClass("is-checked");
						this.$fld.prop("checked", true)
					} else {
						this.$wrap.addClass("is-hidden");
						this.$el.removeClass("is-checked");
						this.$fld.prop("checked", false)
					}
				}
			})
	} (DDG); !
	function(j) {
		var c = j.Views.Base,
			n, i = "settings_cloudsave",
			a = ".js-cloudsave";
		n = function(p) {
			this.settings = p.settings;
			c.call(this, p);
			this.settings.on("loaded-initial", d.bind(this));
			this.settings.on("loaded", o.bind(this))
		};
		j.Views.Settings.CloudSave = n;
		n.prototype = $.extend({},
			c.prototype, {
				template: "settings_cloudsave",
				_render: function(p) {
					c.prototype._render.call(this, p);
					this._renderState()
				},
				_renderState: function(p) {
					this.$el.empty();
					this.$el.removeClass("has-error");
					this.$el.removeClass("is-showing-passphrase");
					if (!p && this.settings.getCloudSaveKey()) {
						p = "enabled"
					}
					switch (p) {
						case "faq":
							this.$el.append(j.exec_template(i + "_faq"));
							this.$(a + "-close").click(k.bind(this));
							break;
						case "load":
							this.$el.append(j.exec_template(i + "_load"));
							this.$("form").submit(h.bind(this));
							this.$(a + "-phrase").keyup(e.bind(this));
							this.$(a + "-show-hide-passphrase").click(m.bind(this));
							this.$(a + "-close").click(k.bind(this));
							break;
						case "save":
							this.$el.append(j.exec_template(i + "_save"));
							this.$("form").submit(b.bind(this));
							this.$(a + "-close").click(k.bind(this));
							this.$(a + "-new-suggestion").click(this._suggestPassPhrase.bind(this));
							break;
						case "enabled":
							this.$el.append(j.exec_template(i + "_enabled"));
							this.$(a + "-delete").click(g.bind(this));
							this.$(a + "-disable").click(f.bind(this));
							break;
						default:
							this.$el.append(j.exec_template(i + "_default"));
							this.$(a + "-save-btn").click(this._renderState.bind(this, "save"));
							this.$(a + "-load-btn").click(this._renderState.bind(this, "load"));
							this.$(a + "-faq").click(this._renderState.bind(this, "faq"));
							break
					}
				},
				_renderError: function(p) {
					this.$el.addClass("has-error");
					this.$(a + "-error").text(p)
				},
				_suggestPassPhrase: function() {
					var q = this.$(a + "-phrase"),
						p = this.$(a + "-new-suggestion");
					p.addClass("is-disabled");
					p.text(l("Loading..."));
					this.settings.cloudsave.suggestPassPhrase(function(s, r) {
						if (!s && r) {
							q.val(r)
						}
						p.text(lp("settings", "Suggest different phrase"));
						p.removeClass("is-disabled")
					})
				}
			});
		var m = function() {
				var p = this.$el.hasClass("show-passphrase") ? "removeClass": "addClass";
				this.$el[p]("show-passphrase")
			},
			h = function(r) {
				r.preventDefault();
				var p = this.$(a + "-phrase").val(),
					q = this.$(a + "-load-btn");
				q.addClass("is-disabled");
				this.settings.setCloudSavePassPhrase(p);
				this.settings.loadFromCloud({
					clearAll: true
				})
			},
			b = function(s) {
				s.preventDefault();
				var r = this,
					p = this.$(a + "-phrase").val(),
					q = this.$(a + "-save-btn");
				q.addClass("is-disabled");
				this.settings.cloudsave.validatePassPhrase(p,
					function(t) {
						if (t) {
							q.removeClass("is-disabled");
							return r._renderError(t)
						}
						r.settings.setCloudSavePassPhrase(p);
						r.settings.saveToCloud(function(u) {
							q.removeClass("is-disabled");
							if (u) {
								r.settings.clearCloudSave();
								return r._renderError(lp("cloudsave", "Something went wrong saving to the server, please try again."))
							}
							r._renderState()
						})
					})
			},
			g = function() {
				var p = this;
				this.settings.clearCloudSave({
						deleteFromServer: true
					},
					function(q) {
						if (q) {
							p._renderError(lp("cloudsave", "Something went wrong saving to the server, please try again."))
						} else {
							p._renderState()
						}
					})
			},
			f = function() {
				this.settings.clearCloudSave();
				this._renderState()
			},
			k = function(p) {
				this._renderState()
			},
			e = function(q) {
				var r = $(q.target).val(),
					p = !r ? "hide": "show";
				this.$(a + "-show-hide-passphrase")[p]();
				this.$(a + "-phrase").val(r)
			},
			d = function(p) {
				if (p) {
					this._renderState("load");
					this._renderError(p)
				} else {
					this._renderState()
				}
			},
			o = function(p) {
				this.$(a + "-load-btn").removeClass("is-disabled");
				if (p) {
					this.settings.clearCloudSave();
					this._renderError(lp("cloudsave", "Pass phrase not found"))
				} else {
					if (!this.settings.isDefault(this.settings.LANGUAGE_KEY)) {
						return window.location.reload()
					}
					this._renderState()
				}
			}
	} (DDG); !
	function(t) {
		var m = t.Views.Base,
			b, s = t.eventToCoordinates,
			e = 15,
			j = 120,
			d = "touchstart.cp mousedown.cp",
			f = "touchmove.cp mousemove.cp",
			g = "touchend.cp mouseup.cp";
		b = t.Views.Settings.ColorPicker = function(z) {
			m.call(this, z);
			this.hsv = {};
			this._cacheElems(".js-cp", ["1d", "1d-marker", "2d", "2d-marker"])
		};
		b.prototype = $.extend({},
			m.prototype, {
				template: "settings_colorpicker",
				width: 175,
				height: 150,
				destroy: function() {
					this.hide();
					m.prototype.destroy.call(this)
				},
				show: function(z) {
					if (this._isShowing) {
						this.hide()
					}
					if (z.color) {
						this.setColor(z.color)
					}
					this.position(z);
					this.$el.show();
					this.$1d.bind(d, h.bind(this));
					this.$2d.bind(d, n.bind(this));
					$(document).on("keydown.cp", y.bind(this));
					$(document).on(d, k.bind(this));
					this._isShowing = true
				},
				position: function(z) {
					this.top = z.top;
					this.left = z.left;
					this.$el.css({
						top: this.top,
						left: this.left
					})
				},
				setColor: function(z) {
					z = tinycolor(z);
					if (z.isValid()) {
						var A = z.toHsv();
						this._update1dMarker({
							hsv: A,
							silent: true
						});
						this._update2dMarker({
							hsv: A,
							silent: true
						})
					}
				},
				hide: function() {
					if (!this._isShowing) {
						return
					}
					this.$el.hide();
					$(document).off("keydown.cp");
					$(document).off(d);
					x();
					this._isShowing = false;
					this.emit("hide")
				},
				_update1dMarker: function(z) {
					var A = 0;
					if (z.y) {
						A = u.call(this, z.y)
					} else {
						if (z.hsv) {
							A = z.hsv.h / 360
						} else {
							return
						}
					}
					this.hsv.h = A * 360;
					this.$1dmarker.css({
						top: (A * 100) + "%"
					});
					this.$2d.css({
						backgroundColor: tinycolor({
							h: this.hsv.h,
							s: 1,
							v: 1
						}).toHexString()
					});
					if (!z.silent) {
						this._emitColor()
					}
				},
				_update2dMarker: function(z) {
					var B = 0,
						A = 0;
					if (z.x || z.y) {
						B = u.call(this, z.y);
						A = i.call(this, z.x)
					} else {
						if (z.hsv) {
							A = z.hsv.s;
							B = 1 - z.hsv.v
						} else {
							return
						}
					}
					this.hsv.s = A;
					this.hsv.v = 1 - B;
					this.$2dmarker.css({
						top: (B * 100) + "%",
						left: (A * 100) + "%"
					});
					if (!z.silent) {
						this._emitColor()
					}
				},
				_emitColor: function() {
					var A = tinycolor({
							h: this.hsv.h,
							s: this.hsv.s,
							v: this.hsv.v
						}),
						z = A.toHexString();
					if (this._lastColorHex && this._lastColorHex === z) {
						return
					}
					if (A.isValid()) {
						this._lastColorHex = z;
						this.emit("change", z)
					}
				}
			});
		var q = function(B, A, z) {
				B = Math.max(B, A);
				B = Math.min(B, z);
				return B
			},
			o = function(z) {
				return z / j
			},
			u = function(C) {
				var z = DDG.device.scrollTop() + C,
					A = z - this.top - e,
					B = q(A, 0, j);
				return o(B)
			},
			i = function(B) {
				var z = B - this.left - e,
					A = q(z, 0, j);
				return o(A)
			},
			r = function(A, z) {
				$(document).bind(f, A);
				$(document).bind(g, z)
			},
			x = function() {
				$(document).unbind(f);
				$(document).unbind(g)
			},
			n = function(z) {
				z.stopPropagation();
				this._update2dMarker(s(z));
				r(c.bind(this), p.bind(this))
			},
			c = function(z) {
				z.preventDefault();
				this._update2dMarker(s(z))
			},
			p = function() {
				x()
			},
			h = function(z) {
				z.stopPropagation();
				this._update1dMarker(s(z));
				r(v.bind(this), a.bind(this))
			},
			v = function(z) {
				z.preventDefault();
				this._update1dMarker(s(z))
			},
			a = function() {
				x()
			},
			y = function(z) {
				if (z.keyCode == 13 || z.keyCode == 27) {
					this.hide()
				}
			},
			k = function(z) {
				if (this._isShowing) {
					this.hide()
				}
			}
	} (DDG); !
	function(c) {
		var b = c.Views.Settings.FormField,
			a;
		c.Views.Settings.ThemeFormField = a = function(d) {
			b.call(this, d)
		};
		a.prototype = $.extend({},
			b.prototype, {
				template: "settings_theme",
				getFromDOM: function() {
					return this.$("input:checked").val()
				},
				setToDOM: function(e) {
					this.$("input:checked").prop("checked");
					this.$(".is-checked").removeClass("is-checked");
					var d = this.$("#" + this.data.fieldId + "_" + e);
					d.prop("checked", true);
					d.parent().addClass("is-checked")
				},
				_render: function() {
					this._filterOptions();
					this._configureColors();
					b.prototype._render.call(this);
					var d = this;
					this._cacheElems(".js-set-theme", ["appearance"]);
					this.$("label").click(function(f) {
						f.preventDefault();
						var g = $(this).attr("data-theme-id");
						d._updateSetting(g)
					});
					this.bindEvents([[this.$appearance, "click",
						function() {
							c.pixel.fire("sda")
						}]])
				},
				_filterOptions: function() {
					if (this.source !== "d" || !this.data.dropdownSettings.options) {
						return
					}
					var e = this.data.dropdownSettings.options;
					for (var d in this.data.values) {
						if (e.indexOf(d) === -1) {
							delete this.data.values[d]
						}
					}
				},
				_configureColors: function() {
					for (var e in this.data.values) {
						var d = this.data.values[e];
						d.colors = {
							title: d.settings.k9 || null,
							url: d.settings.kx || null,
							snippet: d.settings.k8 || null,
							background: d.settings.k7 || null
						};
						if (d.id === "-1") {
							d.colors = {
								title: DDG.settings.getDefault("k9"),
								url: DDG.settings.getDefault("kx"),
								snippet: DDG.settings.getDefault("k8"),
								background: DDG.settings.getDefault("k7")
							}
						}
					}
				}
			})
	} (DDG);
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["settings_cloudsave"] = Handlebars.template(function(d, e, b, a, c) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, d.helpers);
	c = c || {};
	return '<div class="cloudsave"></div>'
});
this["DDG"]["templates"]["settings_cloudsave_default"] = Handlebars.template(function(c, i, b, g, f) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, c.helpers);
	f = f || {};
	var e = "",
		a, d, j, h = b.helperMissing;
	e += '<span class="cloudsave__icn  ddgsi">c</span><h4 class="cloudsave__title">';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "Cloud Save", j) : h.call(i, "l", "Cloud Save", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h4><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "settings", "Save your settings anonymously to the cloud", j) : h.call(i, "lp", "settings", "Save your settings anonymously to the cloud", j));
	if (a || a === 0) {
		e += a
	}
	e += '</p><a class="cloudsave__whats-this  js-cloudsave-faq" href="#">';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "What is this?", j) : h.call(i, "l", "What is this?", j));
	if (a || a === 0) {
		e += a
	}
	e += '</a><div class="cloudsave__actions"><span class="btn  js-cloudsave-save-btn">';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "Save Settings", j) : h.call(i, "l", "Save Settings", j));
	if (a || a === 0) {
		e += a
	}
	e += '</span><span class="btn  js-cloudsave-load-btn">';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "Load Settings", j) : h.call(i, "l", "Load Settings", j));
	if (a || a === 0) {
		e += a
	}
	e += "</span></div>";
	return e
});
this["DDG"]["templates"]["settings_cloudsave_enabled"] = Handlebars.template(function(c, i, b, g, f) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, c.helpers);
	f = f || {};
	var e = "",
		a, d, j, h = b.helperMissing;
	e += '<span class="ddgsi  cloudsave__icn">c</span><h4 class="cloudsave__title">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Cloud Save Enabled", j) : h.call(i, "lp", "cloudsave", "Cloud Save Enabled", j));
	if (a || a === 0) {
		e += a
	}
	e += '</h4><div class="cloudsave__actions"><span class="btn  js-cloudsave-disable">';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "Disable", j) : h.call(i, "l", "Disable", j));
	if (a || a === 0) {
		e += a
	}
	e += '</span><span class="btn  js-cloudsave-delete">';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "Delete my data", j) : h.call(i, "l", "Delete my data", j));
	if (a || a === 0) {
		e += a
	}
	e += "</span></div>";
	return e
});
this["DDG"]["templates"]["settings_cloudsave_faq"] = Handlebars.template(function(c, i, b, g, f) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, c.helpers);
	f = f || {};
	var e = "",
		a, d, j, h = b.helperMissing;
	e += '<div class="cloudsave__close  ddgsi  js-cloudsave-close" href="#">X</div><span class="ddgsi  cloudsave__icn">c</span><h4 class="cloudsave__title">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Cloud Save FAQ", j) : h.call(i, "lp", "cloudsave", "Cloud Save FAQ", j));
	if (a || a === 0) {
		e += a
	}
	e += '</h4><div class="cloudsave__faq"><p>';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Cloud Save lets you save your settings more permanently by entering a passphrase. It is entirely optional.", j) : h.call(i, "lp", "cloudsave", "Cloud Save lets you save your settings more permanently by entering a passphrase. It is entirely optional.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "This has a few benefits:", j) : h.call(i, "lp", "cloudsave", "This has a few benefits:", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><ul><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "You can share your settings among computers and browsers.", j) : h.call(i, "lp", "cloudsave", "You can share your settings among computers and browsers.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "You can restore your settings after deleting cookies", j) : h.call(i, "lp", "cloudsave", "You can restore your settings after deleting cookies", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "You can store several sets of settings for different purposes.", j) : h.call(i, "lp", "cloudsave", "You can store several sets of settings for different purposes.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li></ul><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "What information gets saved?", j) : h.call(i, "lp", "cloudsave", "What information gets saved?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Only the settings that you have changed. They are detailed on the %sURL Parameters%s page.", '<a href="/params">', "</a>", j) : h.call(i, "lp", "cloudsave", "Only the settings that you have changed. They are detailed on the %sURL Parameters%s page.", '<a href="/params">', "</a>", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "How does it work?", j) : h.call(i, "lp", "cloudsave", "How does it work?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "In the interest of transparency, this data is not encrypted: you can see exactly what information we store.", j) : h.call(i, "lp", "cloudsave", "In the interest of transparency, this data is not encrypted: you can see exactly what information we store.", j));
	if (a || a === 0) {
		e += a
	}
	e += "<ul><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Passphrases cannot feasibly be reverse engineered from a key", j) : h.call(i, "lp", "cloudsave", "Passphrases cannot feasibly be reverse engineered from a key", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Even if you could do that, there is no point since all the information is there in the open, unencrypted, provided you know the key.", j) : h.call(i, "lp", "cloudsave", "Even if you could do that, there is no point since all the information is there in the open, unencrypted, provided you know the key.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "DuckDuckGo does not ever know your passphrase.", j) : h.call(i, "lp", "cloudsave", "DuckDuckGo does not ever know your passphrase.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li></ul><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "What is the cloud save bookmarklet and how does it differ from the URL parameter bookmarklet?", j) : h.call(i, "lp", "cloudsave", "What is the cloud save bookmarklet and how does it differ from the URL parameter bookmarklet?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "The benefit of this over using the URL parameters bookmarklet is that when you change settings, they will automatically be saved in the cloud.", j) : h.call(i, "lp", "cloudsave", "The benefit of this over using the URL parameters bookmarklet is that when you change settings, they will automatically be saved in the cloud.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "How is it anonymous?", j) : h.call(i, "lp", "cloudsave", "How is it anonymous?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "We do not have usernames and we don't store any personally identifiable information.", j) : h.call(i, "lp", "cloudsave", "We do not have usernames and we don't store any personally identifiable information.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "How does passphrase generation work?", j) : h.call(i, "lp", "cloudsave", "How does passphrase generation work?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "It is easier to remember four or five words than 10 random letters and numbers, and far more secure.", j) : h.call(i, "lp", "cloudsave", "It is easier to remember four or five words than 10 random letters and numbers, and far more secure.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "How do I change my passphrase?", j) : h.call(i, "lp", "cloudsave", "How do I change my passphrase?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "You can do this by saving your settings under a different passphrase, optionally deleting the first set.", j) : h.call(i, "lp", "cloudsave", "You can do this by saving your settings under a different passphrase, optionally deleting the first set.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><ol><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Enable cloud save by entering your existing passphrase.", j) : h.call(i, "lp", "cloudsave", "Enable cloud save by entering your existing passphrase.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Push 'Delete My Data'. This removes the data from the cloud, but it remains in your browser until you click on 'Reset all settings'", j) : h.call(i, "lp", "cloudsave", "Push 'Delete My Data'. This removes the data from the cloud, but it remains in your browser until you click on 'Reset all settings'", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li><li>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Enter a new passphrase and click 'Save Settings' This will save your data under your new passphrase.", j) : h.call(i, "lp", "cloudsave", "Enter a new passphrase and click 'Save Settings' This will save your data under your new passphrase.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</li></ol><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "I forgot my passphrase. Can you recover it?", j) : h.call(i, "lp", "cloudsave", "I forgot my passphrase. Can you recover it?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "We don't associate your IP address or browser fingerprint or any other information with the file.", j) : h.call(i, "lp", "cloudsave", "We don't associate your IP address or browser fingerprint or any other information with the file.", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p><h5>";
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Is deleted data really deleted?", j) : h.call(i, "lp", "cloudsave", "Is deleted data really deleted?", j));
	if (a || a === 0) {
		e += a
	}
	e += "</h5><p>";
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "Yes", j) : h.call(i, "l", "Yes", j));
	if (a || a === 0) {
		e += a
	}
	e += "</p> <h6>";
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "See Also", j) : h.call(i, "l", "See Also", j));
	if (a || a === 0) {
		e += a
	}
	e += '</h6><ul><li><a href="https://duck.co/topic/a-preview-of-the-new-settings-system">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Cloud Save discussion on duck.co", j) : h.call(i, "lp", "cloudsave", "Cloud Save discussion on duck.co", j));
	if (a || a === 0) {
		e += a
	}
	e += '</a></li><li><a href="https://help.duckduckgo.com/settings/save/">';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "DuckDuckGo Support Center", j) : h.call(i, "l", "DuckDuckGo Support Center", j));
	if (a || a === 0) {
		e += a
	}
	e += "</a></li></ul></div>";
	return e
});
this["DDG"]["templates"]["settings_cloudsave_load"] = Handlebars.template(function(c, i, b, g, f) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, c.helpers);
	f = f || {};
	var e = "",
		a, d, j, h = b.helperMissing;
	e += '<div class="cloudsave__close  ddgsi  js-cloudsave-close" href="#">X</div><span class="ddgsi  cloudsave__icn">c</span><h4 class="cloudsave__title">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Load Cloud Settings", j) : h.call(i, "lp", "cloudsave", "Load Cloud Settings", j));
	if (a || a === 0) {
		e += a
	}
	e += '</h4><form class="frm"><label class="frm__label">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Enter your pass phrase to load your settings:", j) : h.call(i, "lp", "cloudsave", "Enter your pass phrase to load your settings:", j));
	if (a || a === 0) {
		e += a
	}
	e += '</label><input class="frm__input  cloudsave__load-password  js-cloudsave-phrase" val="" type="password" /><input class="frm__input  cloudsave__load-text  js-cloudsave-phrase" val="" type="text" /><input type="submit" class="btn  btn--primary  js-cloudsave-load-btn"  value=\'';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "settings", "Load", j) : h.call(i, "lp", "settings", "Load", j));
	if (a || a === 0) {
		e += a
	}
	e += '\' /><div class="cloudsave__show-hide-passphrase  js-cloudsave-show-hide-passphrase"><span class="cloudsave__show-password">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "settings", "Show pass phrase", j) : h.call(i, "lp", "settings", "Show pass phrase", j));
	if (a || a === 0) {
		e += a
	}
	e += '</span><span class="cloudsave__hide-password">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "settings", "Hide pass phrase", j) : h.call(i, "lp", "settings", "Hide pass phrase", j));
	if (a || a === 0) {
		e += a
	}
	e += '</span></div><p class="cloudsave__error  js-cloudsave-error"></p></form>';
	return e
});
this["DDG"]["templates"]["settings_cloudsave_save"] = Handlebars.template(function(c, i, b, g, f) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, c.helpers);
	f = f || {};
	var e = "",
		a, d, j, h = b.helperMissing;
	e += '<div class="cloudsave__close  ddgsi  js-cloudsave-close" href="#">X</div><span class="ddgsi  cloudsave__icn">c</span><h4 class="cloudsave__title">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "settings", "Save Cloud Settings", j) : h.call(i, "lp", "settings", "Save Cloud Settings", j));
	if (a || a === 0) {
		e += a
	}
	e += '</h4><form class="frm"><label class="frm__label">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "cloudsave", "Choose a unique pass phrase for your settings:", j) : h.call(i, "lp", "cloudsave", "Choose a unique pass phrase for your settings:", j));
	if (a || a === 0) {
		e += a
	}
	e += '</label><input class="frm__input  js-cloudsave-phrase"  placeholder="';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "settings", "Enter a pass phrase", j) : h.call(i, "lp", "settings", "Enter a pass phrase", j));
	if (a || a === 0) {
		e += a
	}
	e += '"  val="" /><input class="btn  btn--primary  js-cloudsave-save-btn"  type="submit"  value=\'';
	a = (d = b.l || (i && i.l), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "Save", j) : h.call(i, "l", "Save", j));
	if (a || a === 0) {
		e += a
	}
	e += '\' /><span class="cloudsave__new-suggestion  js-cloudsave-new-suggestion">';
	a = (d = b.lp || (i && i.lp), j = {
		hash: {},
		data: f
	},
		d ? d.call(i, "settings", "Suggest a pass phrase", j) : h.call(i, "lp", "settings", "Suggest a pass phrase", j));
	if (a || a === 0) {
		e += a
	}
	e += '</span><p class="cloudsave__error  js-cloudsave-error"></p></form>';
	return e
});
this["DDG"]["templates"]["settings_colorpicker"] = Handlebars.template(function(d, e, b, a, c) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, d.helpers);
	c = c || {};
	return '<div class="colorpicker"><div class="colorpicker__nub"></div><div class="colorpicker__2d  js-cp-2d"><div class="colorpicker__2d-white"></div><div class="colorpicker__2d-black"></div><div class="colorpicker__2d-marker  js-cp-2d-marker"></div></div><div class="colorpicker__1d  js-cp-1d"><div class="colorpicker__1d-marker  js-cp-1d-marker"></div></div></div>'
});
this["DDG"]["templates"]["settings_field"] = Handlebars.template(function(e, t, r, k, A) {
	this.compilerInfo = [4, ">= 1.0.0"];
	r = this.merge(r, e.helpers);
	A = A || {};
	var s = "",
		g, b = "function",
		a = this.escapeExpression,
		q = r.helperMissing,
		p = this;
	function o(G, F) {
		var B = "",
			D, E, C;
		B += '<div class="frm__select  frm__ctrl--break-xs"><select id="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '" class="frm__select__input js-set-input">';
		D = (E = r.keys || (G && G.keys), C = {
			hash: {},
			inverse: p.noop,
			fn: p.program(2, n, F),
			data: F
		},
			E ? E.call(G, (G && G.values), C) : q.call(G, "keys", (G && G.values), C));
		if (D || D === 0) {
			B += D
		}
		B += "</select></div>";
		return B
	}
	function n(D, C) {
		var B;
		B = r["if"].call(D, ((B = (D && D.value)), B == null || B === false ? B: B.name), {
			hash: {},
			inverse: p.program(5, j, C),
			fn: p.program(3, m, C),
			data: C
		});
		if (B || B === 0) {
			return B
		} else {
			return ""
		}
	}
	function m(G, F) {
		var B = "",
			D, E, C;
		B += '<option value="';
		if (E = r.key) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.key);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '">';
		D = (E = r.lp || (G && G.lp), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "settingsvalue", ((D = (G && G.value)), D == null || D === false ? D: D.name), C) : q.call(G, "lp", "settingsvalue", ((D = (G && G.value)), D == null || D === false ? D: D.name), C));
		if (D || D === 0) {
			B += D
		}
		B += "</option>";
		return B
	}
	function j(G, F) {
		var B = "",
			D, E, C;
		B += '<option value="';
		if (E = r.key) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.key);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '">';
		D = (E = r.lp || (G && G.lp), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "settingsvalue", (G && G.value), C) : q.call(G, "lp", "settingsvalue", (G && G.value), C));
		if (D || D === 0) {
			B += D
		}
		B += "</option>";
		return B
	}
	function i(G, F) {
		var B = "",
			D, E, C;
		B += '<div class="frm__select  frm__ctrl--break-xs js-set-dropdown"><select id="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '" class="frm__select__input js-set-input">';
		D = (E = r.keys || (G && G.keys), C = {
			hash: {},
			inverse: p.noop,
			fn: p.program(5, j, F),
			data: F
		},
			E ? E.call(G, (G && G.values), C) : q.call(G, "keys", (G && G.values), C));
		if (D || D === 0) {
			B += D
		}
		B += '<option value="';
		if (E = r.customVal) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.customVal);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '">';
		D = (E = r.lp || (G && G.lp), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "settingsvalue", "Custom", C) : q.call(G, "lp", "settingsvalue", "Custom", C));
		if (D || D === 0) {
			B += D
		}
		B += '</option></select></div><div class="frm__input--clearable  frm__ctrl--break-xs  js-set-custom  is-hidden"><input id="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '_custom" class="frm__input  js-set-custom-input" placeholder=\'';
		D = (E = r.lp || (G && G.lp), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "settingsvalue", "Custom %s", (G && G.name), C) : q.call(G, "lp", "settingsvalue", "Custom %s", (G && G.name), C));
		if (D || D === 0) {
			B += D
		}
		B += '\' type="text" /><span class="frm__input__clear  ddgsi  js-set-custom-close">X</span></div>';
		return B
	}
	function d(F, E) {
		var C, D, B;
		C = (D = r.include || (F && F.include), B = {
			hash: {
				id: ((F && F.fieldId)),
				className: ("js-set-input")
			},
			data: E
		},
			D ? D.call(F, "onoffswitch", B) : q.call(F, "include", "onoffswitch", B));
		if (C || C === 0) {
			return C
		} else {
			return ""
		}
	}
	function z(G, F) {
		var B = "",
			D, E, C;
		B += '<div class="frm__switch frm-input js-set-input-wrap"><input id="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '" class="frm__switch__inp  js-set-input" type="checkbox" /><label class="frm__switch__label  btn" for="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '"><span class="frm__switch-on">';
		D = (E = r.l || (G && G.l), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "Clear", C) : q.call(G, "l", "Clear", C));
		if (D || D === 0) {
			B += D
		}
		B += "</span></label></div>";
		return B
	}
	function y(F, E) {
		var B = "",
			C, D;
		B += '<div class="frm__color"  data-setting="';
		if (D = r.id) {
			C = D.call(F, {
				hash: {},
				data: E
			})
		} else {
			D = (F && F.id);
			C = typeof D === b ? D.call(F, {
				hash: {},
				data: E
			}) : D
		}
		B += a(C) + '"><span class="frm__color__swatch  js-set-color-swatch"></span><input id="';
		if (D = r.fieldId) {
			C = D.call(F, {
				hash: {},
				data: E
			})
		} else {
			D = (F && F.fieldId);
			C = typeof D === b ? D.call(F, {
				hash: {},
				data: E
			}) : D
		}
		B += a(C) + '" class="frm__input  js-set-input" /></div>';
		return B
	}
	function x(G, F) {
		var B = "",
			D, E, C;
		B += '<p class="frm__label">';
		D = (E = r.lp || (G && G.lp), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "settings", (G && G.name), C) : q.call(G, "lp", "settings", (G && G.name), C));
		if (D || D === 0) {
			B += D
		}
		B += "</p>";
		return B
	}
	function v(G, F) {
		var B = "",
			D, E, C;
		B += '<p class="frm__desc  ';
		D = r["if"].call(G, (G && G.breakOnSmallScreens), {
			hash: {},
			inverse: p.noop,
			fn: p.program(18, u, F),
			data: F
		});
		if (D || D === 0) {
			B += D
		}
		B += '">';
		D = (E = r.lp || (G && G.lp), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "settings", (G && G.desc), (G && G.desc2), (G && G.desc3), C) : q.call(G, "lp", "settings", (G && G.desc), (G && G.desc2), (G && G.desc3), C));
		if (D || D === 0) {
			B += D
		}
		B += "</p>";
		return B
	}
	function u(C, B) {
		return "frm__desc--break-xs"
	}
	function h(G, F) {
		var B = "",
			D, E, C;
		B += '<div class="set-thumbnails">';
		D = (E = r.keys || (G && G.keys), C = {
			hash: {},
			inverse: p.noop,
			fn: p.program(21, f, F),
			data: F
		},
			E ? E.call(G, (G && G.values), C) : q.call(G, "keys", (G && G.values), C));
		if (D || D === 0) {
			B += D
		}
		B += "</div>";
		return B
	}
	function f(D, C) {
		var B;
		B = r.unless.call(D, ((B = (D && D.value)), B == null || B === false ? B: B.suppress), {
			hash: {},
			inverse: p.noop,
			fn: p.program(22, c, C),
			data: C
		});
		if (B || B === 0) {
			return B
		} else {
			return ""
		}
	}
	function c(G, F) {
		var B = "",
			D, E, C;
		B += '<label class="set-thumbnail" for="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + "_" + a(((D = ((D = (G && G.value)), D == null || D === false ? D: D.id)), typeof D === b ? D.apply(G) : D)) + '" data-theme-id="' + a(((D = ((D = (G && G.value)), D == null || D === false ? D: D.id)), typeof D === b ? D.apply(G) : D)) + '"><input id="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + "_" + a(((D = ((D = (G && G.value)), D == null || D === false ? D: D.id)), typeof D === b ? D.apply(G) : D)) + '" class="set-thumbnail__inp  js-set-input" type="radio" name="';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + '" value="' + a(((D = ((D = (G && G.value)), D == null || D === false ? D: D.id)), typeof D === b ? D.apply(G) : D)) + '" /><img class="set-thumbnail__img" src="/assets/settings/';
		if (E = r.fieldId) {
			D = E.call(G, {
				hash: {},
				data: F
			})
		} else {
			E = (G && G.fieldId);
			D = typeof E === b ? E.call(G, {
				hash: {},
				data: F
			}) : E
		}
		B += a(D) + "_" + a(((D = ((D = (G && G.value)), D == null || D === false ? D: D.id)), typeof D === b ? D.apply(G) : D)) + '.100.jpg" /><span class="set-thumbnail__check  ddgsi  ddgsi-check"></span><span class="set-thumbnail__label">';
		D = (E = r.lp || (G && G.lp), C = {
			hash: {},
			data: F
		},
			E ? E.call(G, "theme", ((D = (G && G.value)), D == null || D === false ? D: D.name), C) : q.call(G, "lp", "theme", ((D = (G && G.value)), D == null || D === false ? D: D.name), C));
		if (D || D === 0) {
			B += D
		}
		B += "</span></label>";
		return B
	}
	s += '<div class="frm__field  fix">';
	g = r["if"].call(t, (t && t.dropdown), {
		hash: {},
		inverse: p.noop,
		fn: p.program(1, o, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	g = r["if"].call(t, (t && t.dropdowncustom), {
		hash: {},
		inverse: p.noop,
		fn: p.program(7, i, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	g = r["if"].call(t, (t && t["boolean"]), {
		hash: {},
		inverse: p.noop,
		fn: p.program(9, d, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	g = r["if"].call(t, (t && t.clear), {
		hash: {},
		inverse: p.noop,
		fn: p.program(11, z, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	g = r["if"].call(t, (t && t.color), {
		hash: {},
		inverse: p.noop,
		fn: p.program(13, y, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	g = r.unless.call(t, (t && t.hideTitle), {
		hash: {},
		inverse: p.noop,
		fn: p.program(15, x, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	g = r["if"].call(t, (t && t.desc), {
		hash: {},
		inverse: p.noop,
		fn: p.program(17, v, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	g = r["if"].call(t, (t && t.thumbnail), {
		hash: {},
		inverse: p.noop,
		fn: p.program(20, h, A),
		data: A
	});
	if (g || g === 0) {
		s += g
	}
	s += "</div>";
	return s
});
this["DDG"]["templates"]["settings_main"] = Handlebars.template(function(d, m, c, j, i) {
	this.compilerInfo = [4, ">= 1.0.0"];
	c = this.merge(c, d.helpers);
	i = i || {};
	var g = "",
		a, e, o, f = "function",
		h = this.escapeExpression,
		k = c.helperMissing,
		n = this;
	function b(u, t) {
		var p = "",
			r, s, q;
		p += '<a class="btn  js-set-head-tab  js-set-';
		if (s = c.id) {
			r = s.call(u, {
				hash: {},
				data: t
			})
		} else {
			s = (u && u.id);
			r = typeof s === f ? s.call(u, {
				hash: {},
				data: t
			}) : s
		}
		p += h(r) + '" href="#';
		if (s = c.id) {
			r = s.call(u, {
				hash: {},
				data: t
			})
		} else {
			s = (u && u.id);
			r = typeof s === f ? s.call(u, {
				hash: {},
				data: t
			}) : s
		}
		p += h(r) + '" data-tabid="';
		if (s = c.id) {
			r = s.call(u, {
				hash: {},
				data: t
			})
		} else {
			s = (u && u.id);
			r = typeof s === f ? s.call(u, {
				hash: {},
				data: t
			}) : s
		}
		p += h(r) + '">';
		r = (s = c.l || (u && u.l), q = {
			hash: {},
			data: t
		},
			s ? s.call(u, (u && u.name), q) : k.call(u, "l", (u && u.name), q));
		if (r || r === 0) {
			p += r
		}
		p += "</a>";
		return p
	}
	g += '<div class="set-main"><div class="set-head"><h4 class="set-head__title">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "feedback form", "Settings", o) : k.call(m, "lp", "feedback form", "Settings", o));
	if (a || a === 0) {
		g += a
	}
	g += '</h4><div class="set-head__menu  btn-grp">';
	a = c.each.call(m, (m && m.tabs), {
		hash: {},
		inverse: n.noop,
		fn: n.program(1, b, i),
		data: i
	});
	if (a || a === 0) {
		g += a
	}
	g += '</div><div class="clearfix"></div></div><div class="set-detail  js-set-detail"></div><div class="set-main-footer"><a class="btn  btn--primary  js-set-exit" href="/">';
	a = (e = c.l || (m && m.l), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "Save and Exit", o) : k.call(m, "l", "Save and Exit", o));
	if (a || a === 0) {
		g += a
	}
	g += '</a></div></div><div class="set-side"><div class="set-bookmarklet  js-set-bookmarklet"><span class="set-bookmarklet__title  js-set-bookmarklet-expand">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "setting", "Show Bookmarklet and Settings Data", o) : k.call(m, "lp", "setting", "Show Bookmarklet and Settings Data", o));
	if (a || a === 0) {
		g += a
	}
	g += '</span><div class="set-bookmarklet__detail  is-hidden  js-set-bookmarklet-detail"><div class="set-bookmarklet__close  ddgsi  js-set-bookmarklet-close" href="#">X</div><p class="set-bookmarklet__label">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "settings", "Bookmarklet URL:", o) : k.call(m, "lp", "settings", "Bookmarklet URL:", o));
	if (a || a === 0) {
		g += a
	}
	g += '</p><input class="set-bookmarklet__input  js-set-bookmarklet-url" value="" /><p class="set-bookmarklet__label  is-hidden  js-set-bookmarklet-cs-label">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "settings", "Cloud Save Bookmarklet URL:", o) : k.call(m, "lp", "settings", "Cloud Save Bookmarklet URL:", o));
	if (a || a === 0) {
		g += a
	}
	g += '</p><input class="set-bookmarklet__input  is-hidden  js-set-bookmarklet-cs-url" value="" /><p class="set-bookmarklet__label">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "settings", "Settings in JSON:", o) : k.call(m, "lp", "settings", "Settings in JSON:", o));
	if (a || a === 0) {
		g += a
	}
	g += '</p><div class="set-bookmarklet__data  js-set-bookmarklet-json"></div><p class="set-bookmarklet__label">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "settings", "Cookie Data:", o) : k.call(m, "lp", "settings", "Cookie Data:", o));
	if (a || a === 0) {
		g += a
	}
	g += '</p><div class="set-bookmarklet__data  js-set-bookmarklet-cookie"></div><p class="set-bookmarklet__info">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "settings", "See the %sURL Parameter Reference Page%s for more details", '<a href="/params">', "</a>", o) : k.call(m, "lp", "settings", "See the %sURL Parameter Reference Page%s for more details", '<a href="/params">', "</a>", o));
	if (a || a === 0) {
		g += a
	}
	g += '</p><p class="set-bookmarklet__info">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "settings", "By default settings are stored in non-personal browser cookies (in your browser). You can use Anonymous Cloud Save to store your settings in a more permanent way (on a remote server in the cloud). No personally identifiable information will be stored in the cloud, and your pass phrase will never leave your browser.", o) : k.call(m, "lp", "settings", "By default settings are stored in non-personal browser cookies (in your browser). You can use Anonymous Cloud Save to store your settings in a more permanent way (on a remote server in the cloud). No personally identifiable information will be stored in the cloud, and your pass phrase will never leave your browser.", o));
	if (a || a === 0) {
		g += a
	}
	g += '</p></div></div><div class="set-reset"><span class="set-reset__title  js-set-reset-expand">';
	a = (e = c.lp || (m && m.lp), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "cloudsave", "Reset All Settings", o) : k.call(m, "lp", "cloudsave", "Reset All Settings", o));
	if (a || a === 0) {
		g += a
	}
	g += '</span><div class="set-reset__detail  is-hidden  js-set-reset-detail"><p class="set-reset__msg  js-set-reset-msg"></p><span class="btn  js-set-reset-confirm">';
	a = (e = c.l || (m && m.l), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "Yes", o) : k.call(m, "l", "Yes", o));
	if (a || a === 0) {
		g += a
	}
	g += '</span><span class="btn  js-set-reset-cancel">';
	a = (e = c.l || (m && m.l), o = {
		hash: {},
		data: i
	},
		e ? e.call(m, "No", o) : k.call(m, "l", "No", o));
	if (a || a === 0) {
		g += a
	}
	g += '</span></div></div></div><div class="clearfix"></div>';
	return g
});
this["DDG"]["templates"]["settings_tab"] = Handlebars.template(function(c, j, b, i, h) {
	this.compilerInfo = [4, ">= 1.0.0"];
	b = this.merge(b, c.helpers);
	h = h || {};
	var f = "",
		a, d, e = "function",
		g = this.escapeExpression;
	f += '<form class="frm  frm--settings  frm--settings--';
	if (d = b.id) {
		a = d.call(j, {
			hash: {},
			data: h
		})
	} else {
		d = (j && j.id);
		a = typeof d === e ? d.call(j, {
			hash: {},
			data: h
		}) : d
	}
	f += g(a) + '"></form>';
	return f
});
this["DDG"]["templates"]["settings_theme"] = Handlebars.template(function(e, n, d, k, j) {
	this.compilerInfo = [4, ">= 1.0.0"];
	d = this.merge(d, e.helpers);
	j = j || {};
	var h = "",
		a, f, p, g = "function",
		i = this.escapeExpression,
		m = d.helperMissing,
		o = this;
	function c(s, r) {
		var q;
		q = d.unless.call(s, ((q = (s && s.value)), q == null || q === false ? q: q.suppress), {
			hash: {},
			inverse: o.noop,
			fn: o.program(2, b, r),
			data: r
		});
		if (q || q === 0) {
			return q
		} else {
			return ""
		}
	}
	function b(v, u) {
		var q = "",
			s, t, r;
		q += '<div class="set-themes__wrapper" data-theme-id="' + i(((s = ((s = (v && v.value)), s == null || s === false ? s: s.id)), typeof s === g ? s.apply(v) : s)) + '"><label class="set-theme" for="';
		if (t = d.fieldId) {
			s = t.call(v, {
				hash: {},
				data: u
			})
		} else {
			t = (v && v.fieldId);
			s = typeof t === g ? t.call(v, {
				hash: {},
				data: u
			}) : t
		}
		q += i(s) + "_" + i(((s = ((s = (v && v.value)), s == null || s === false ? s: s.id)), typeof s === g ? s.apply(v) : s)) + '" data-theme-id="' + i(((s = ((s = (v && v.value)), s == null || s === false ? s: s.id)), typeof s === g ? s.apply(v) : s)) + '" style="background-color: #' + i(((s = ((s = ((s = (v && v.value)), s == null || s === false ? s: s.colors)), s == null || s === false ? s: s.background)), typeof s === g ? s.apply(v) : s)) + '"><input id="';
		if (t = d.fieldId) {
			s = t.call(v, {
				hash: {},
				data: u
			})
		} else {
			t = (v && v.fieldId);
			s = typeof t === g ? t.call(v, {
				hash: {},
				data: u
			}) : t
		}
		q += i(s) + "_" + i(((s = ((s = (v && v.value)), s == null || s === false ? s: s.id)), typeof s === g ? s.apply(v) : s)) + '" class="set-theme__inp js-set-input" type="radio" name="';
		if (t = d.fieldId) {
			s = t.call(v, {
				hash: {},
				data: u
			})
		} else {
			t = (v && v.fieldId);
			s = typeof t === g ? t.call(v, {
				hash: {},
				data: u
			}) : t
		}
		q += i(s) + '" value="' + i(((s = ((s = (v && v.value)), s == null || s === false ? s: s.id)), typeof s === g ? s.apply(v) : s)) + '" /><span class="set-theme__color-1" style="background-color: #' + i(((s = ((s = ((s = (v && v.value)), s == null || s === false ? s: s.colors)), s == null || s === false ? s: s.title)), typeof s === g ? s.apply(v) : s)) + '"></span><span class="set-theme__color-2" style="background-color: #' + i(((s = ((s = ((s = (v && v.value)), s == null || s === false ? s: s.colors)), s == null || s === false ? s: s.url)), typeof s === g ? s.apply(v) : s)) + '"></span><span class="set-theme__color-3" style="background-color: #' + i(((s = ((s = ((s = (v && v.value)), s == null || s === false ? s: s.colors)), s == null || s === false ? s: s.snippet)), typeof s === g ? s.apply(v) : s)) + '"></span><span class="set-theme__check  ddgsi  ddgsi-check"></span></label><label class="set-theme__label" data-theme-id="' + i(((s = ((s = (v && v.value)), s == null || s === false ? s: s.id)), typeof s === g ? s.apply(v) : s)) + '" for="';
		if (t = d.fieldId) {
			s = t.call(v, {
				hash: {},
				data: u
			})
		} else {
			t = (v && v.fieldId);
			s = typeof t === g ? t.call(v, {
				hash: {},
				data: u
			}) : t
		}
		q += i(s) + "_" + i(((s = ((s = (v && v.value)), s == null || s === false ? s: s.id)), typeof s === g ? s.apply(v) : s)) + '">';
		s = (t = d.lp || (v && v.lp), r = {
			hash: {},
			data: u
		},
			t ? t.call(v, "theme", ((s = (v && v.value)), s == null || s === false ? s: s.name), r) : m.call(v, "lp", "theme", ((s = (v && v.value)), s == null || s === false ? s: s.name), r));
		if (s || s === 0) {
			q += s
		}
		q += "</label></div>";
		return q
	}
	h += '<div class="frm__field  fix"><div class="set-themes">';
	a = (f = d.keys || (n && n.keys), p = {
		hash: {},
		inverse: o.noop,
		fn: o.program(1, c, j),
		data: j
	},
		f ? f.call(n, (n && n.values), p) : m.call(n, "keys", (n && n.values), p));
	if (a || a === 0) {
		h += a
	}
	h += "</div></div>";
	return h
});