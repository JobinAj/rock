! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = (new Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5fbd373d-c811-4344-a114-effccc3b0ea8", e._sentryDebugIdIdentifier = "sentry-dbid-5fbd373d-c811-4344-a114-effccc3b0ea8")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/intl",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, System.register([], (function(e, r) {
    return {
        execute: function() {
            e((() => {
                var e, t, n, a, o = {
                        539: (e, r, t) => {
                            (0, t(403).w)(1)
                        },
                        403: (e, r, t) => {
                            const n = t(659).y;
                            r.w = function(e) {
                                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                                t.p = n(t.y.meta.url, e)
                            }
                        },
                        160: (e, r, t) => {
                            t(539)
                        },
                        659: (e, r, t) => {
                            r.y = function(e, r) {
                                var t = document.createElement("a");
                                t.href = e;
                                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, a = 0, o = n.length; a !== r && o >= 0;) "/" === n[--o] && a++;
                                if (a !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                                var i = n.slice(0, o + 1);
                                return t.protocol + "//" + t.host + i
                            };
                            Number.isInteger
                        },
                        243: (e, r, t) => {
                            "use strict";
                            var n = {
                                    "./index": () => t.e(785).then((() => () => t(785))),
                                    "./messages": () => t.e(135).then((() => () => t(135)))
                                },
                                a = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                                    throw new Error('Module "' + e + '" does not exist in container.')
                                })), t.R = void 0, r),
                                o = (e, r) => {
                                    if (t.S) {
                                        var n = "default",
                                            a = t.S[n];
                                        if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                                        return t.S[n] = e, t.I(n, r)
                                    }
                                };
                            t.d(r, {
                                get: () => a,
                                init: () => o
                            })
                        }
                    },
                    i = {};

                function s(e) {
                    var r = i[e];
                    if (void 0 !== r) return r.exports;
                    var t = i[e] = {
                        exports: {}
                    };
                    return o[e](t, t.exports, s), t.exports
                }
                return s.m = o, s.c = i, s.y = r, s.n = e => {
                    var r = e && e.__esModule ? () => e.default : () => e;
                    return s.d(r, {
                        a: r
                    }), r
                }, s.d = (e, r) => {
                    for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r[t]
                    })
                }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
                    135: "dd4b16c9b6f3861556d1694624e8b747",
                    143: "7ec2f937b909024909b2eb4c9010828f",
                    667: "48b8b9549f6a77d45c57421f0ea66f26",
                    785: "f5b94ce442173b54371e37d36d40ae9a"
                }[e] + ".js", s.miniCssF = e => {}, s.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/intl:", s.l = (r, n, a, o) => {
                    if (e[r]) e[r].push(n);
                    else {
                        var i, l;
                        if (void 0 !== a)
                            for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                                var u = f[d];
                                if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == t + a) {
                                    i = u;
                                    break
                                }
                            }
                        i || (l = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", t + a), i.src = r), e[r] = [n];
                        var c = (t, n) => {
                                i.onerror = i.onload = null, clearTimeout(p);
                                var a = e[r];
                                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), t) return t(n)
                            },
                            p = setTimeout(c.bind(null, void 0, {
                                type: "timeout",
                                target: i
                            }), 12e4);
                        i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), l && document.head.appendChild(i)
                    }
                }, s.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n = {}, a = {}, s.f.remotes = (e, r) => {
                    s.o(n, e) && n[e].forEach((e => {
                        var t = s.R;
                        t || (t = []);
                        var n = a[e];
                        if (!(t.indexOf(n) >= 0)) {
                            if (t.push(n), n.p) return r.push(n.p);
                            var o = r => {
                                    r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), s.m[e] = () => {
                                        throw r
                                    }, n.p = 0
                                },
                                i = (e, t, a, i, s, l) => {
                                    try {
                                        var f = e(t, a);
                                        if (!f || !f.then) return s(f, i, l);
                                        var d = f.then((e => s(e, i)), o);
                                        if (!l) return d;
                                        r.push(n.p = d)
                                    } catch (e) {
                                        o(e)
                                    }
                                },
                                l = (e, r, a) => i(r.get, n[1], t, 0, f, a),
                                f = r => {
                                    n.p = 1, s.m[e] = e => {
                                        e.exports = r()
                                    }
                                };
                            i(s, n[2], 0, 0, ((e, r, t) => e ? i(s.I, n[0], 0, e, l, t) : o()), 1)
                        }
                    }))
                }, (() => {
                    s.S = {};
                    var e = {},
                        r = {};
                    s.I = (t, n) => {
                        n || (n = []);
                        var a = r[t];
                        if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
                            if (n.push(a), e[t]) return e[t];
                            s.o(s.S, t) || (s.S[t] = {});
                            var o = s.S[t],
                                i = "@rockstargames/intl",
                                l = [];
                            return "default" === t && ((e, r, t, n) => {
                                var a = o[e] = o[e] || {},
                                    l = a[r];
                                (!l || !l.loaded && (1 != !l.eager ? n : i > l.from)) && (a[r] = {
                                    get: () => Promise.all([s.e(667), s.e(143)]).then((() => () => s(143))),
                                    from: i,
                                    eager: !1
                                })
                            })("@rockstargames/locale-tools", "1.0.0"), e[t] = l.length ? Promise.all(l).then((() => e[t] = 1)) : 1
                        }
                    }
                })(), (() => {
                    var e;
                    s.g.importScripts && (e = s.g.location + "");
                    var r = s.g.document;
                    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
                        var t = r.getElementsByTagName("script");
                        if (t.length)
                            for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = t[n--].src
                    }
                    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
                    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
                })(), (() => {
                    var e = e => {
                            var r = e => e.split(".").map((e => +e == e ? +e : e)),
                                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                                n = t[1] ? r(t[1]) : [];
                            return t[2] && (n.length++, n.push.apply(n, r(t[2]))), t[3] && (n.push([]), n.push.apply(n, r(t[3]))), n
                        },
                        r = (t, n) => {
                            if (0 in t) {
                                n = e(n);
                                var a = t[0],
                                    o = a < 0;
                                o && (a = -a - 1);
                                for (var i = 0, s = 1, l = !0;; s++, i++) {
                                    var f, d, u = s < t.length ? (typeof t[s])[0] : "";
                                    if (i >= n.length || "o" == (d = (typeof(f = n[i]))[0])) return !l || ("u" == u ? s > a && !o : "" == u != o);
                                    if ("u" == d) {
                                        if (!l || "u" != u) return !1
                                    } else if (l)
                                        if (u == d)
                                            if (s <= a) {
                                                if (f != t[s]) return !1
                                            } else {
                                                if (o ? f > t[s] : f < t[s]) return !1;
                                                f != t[s] && (l = !1)
                                            }
                                    else if ("s" != u && "n" != u) {
                                        if (o || s <= a) return !1;
                                        l = !1, s--
                                    } else {
                                        if (s <= a || d < u != o) return !1;
                                        l = !1
                                    } else "s" != u && "n" != u && (l = !1, s--)
                                }
                            }
                            var c = [],
                                p = c.pop.bind(c);
                            for (i = 1; i < t.length; i++) {
                                var h = t[i];
                                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
                            }
                            return !!p()
                        },
                        t = (t, n, a) => {
                            var o = t[n];
                            return (n = Object.keys(o).reduce(((t, n) => !r(a, n) || t && !((r, t) => {
                                r = e(r), t = e(t);
                                for (var n = 0;;) {
                                    if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                                    var a = r[n],
                                        o = (typeof a)[0];
                                    if (n >= t.length) return "u" == o;
                                    var i = t[n],
                                        s = (typeof i)[0];
                                    if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                                    if ("o" != o && "u" != o && a != i) return a < i;
                                    n++
                                }
                            })(t, n) ? t : n), 0)) && o[n]
                        },
                        n = (e => function(r, t, n, a) {
                            var o = s.I(r);
                            return o && o.then ? o.then(e.bind(e, r, s.S[r], t, n, a)) : e(r, s.S[r], t, n, a)
                        })(((e, r, n, a, o) => {
                            var i = r && s.o(r, n) && t(r, n, a);
                            return i ? (e => (e.loaded = 1, e.get()))(i) : o()
                        })),
                        a = {},
                        o = {
                            717: () => n("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([s.e(667), s.e(143)]).then((() => () => s(143)))))
                        },
                        i = {
                            135: [717]
                        },
                        l = {};
                    s.f.consumes = (e, r) => {
                        s.o(i, e) && i[e].forEach((e => {
                            if (s.o(a, e)) return r.push(a[e]);
                            if (!l[e]) {
                                var t = r => {
                                    a[e] = 0, s.m[e] = t => {
                                        delete s.c[e], t.exports = r()
                                    }
                                };
                                l[e] = !0;
                                var n = r => {
                                    delete a[e], s.m[e] = t => {
                                        throw delete s.c[e], r
                                    }
                                };
                                try {
                                    var i = o[e]();
                                    i.then ? r.push(a[e] = i.then(t).catch(n)) : t(i)
                                } catch (e) {
                                    n(e)
                                }
                            }
                        }))
                    }
                })(), (() => {
                    var e = {
                        323: 0
                    };
                    s.f.j = (r, t) => {
                        var n = s.o(e, r) ? e[r] : void 0;
                        if (0 !== n)
                            if (n) t.push(n[2]);
                            else {
                                var a = new Promise(((t, a) => n = e[r] = [t, a]));
                                t.push(n[2] = a);
                                var o = s.p + s.u(r),
                                    i = new Error;
                                s.l(o, (t => {
                                    if (s.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                                        var a = t && ("load" === t.type ? "missing" : t.type),
                                            o = t && t.target && t.target.src;
                                        i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                                    }
                                }), "chunk-" + r, r)
                            }
                    };
                    var r = (r, t) => {
                            var n, a, o = t[0],
                                i = t[1],
                                l = t[2],
                                f = 0;
                            if (o.some((r => 0 !== e[r]))) {
                                for (n in i) s.o(i, n) && (s.m[n] = i[n]);
                                l && l(s)
                            }
                            for (r && r(t); f < o.length; f++) a = o[f], s.o(e, a) && e[a] && e[a][0](), e[a] = 0
                        },
                        t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
                    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
                })(), s(160), s(243)
            })())
        }
    }
}));
//# sourceMappingURL=remote-entry.js.map