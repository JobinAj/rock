! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "88bad72b-6fcd-44c8-83a3-65aa379ad4a6", e._sentryDebugIdIdentifier = "sentry-dbid-88bad72b-6fcd-44c8-83a3-65aa379ad4a6")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-videoplayer", "@rockstargames/utils"], (function(e, t) {
    var r = {},
        a = {},
        n = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "__esModule", {
        value: !0
    }), {
        setters: [function(e) {
            Object.keys(e).forEach((function(t) {
                r[t] = e[t]
            }))
        }, function(e) {
            Object.keys(e).forEach((function(t) {
                a[t] = e[t]
            }))
        }, function(e) {
            Object.keys(e).forEach((function(t) {
                n[t] = e[t]
            }))
        }],
        execute: function() {
            e((() => {
                var e, o, i, s, d = {
                        539: (e, t, r) => {
                            (0, r(403).w)(1)
                        },
                        403: (e, t, r) => {
                            const a = r(659).y;
                            t.w = function(e) {
                                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                                r.p = a(r.y.meta.url, e)
                            }
                        },
                        160: (e, t, r) => {
                            r(539)
                        },
                        659: (e, t, r) => {
                            t.y = function(e, t) {
                                var r = document.createElement("a");
                                r.href = e;
                                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                                var i = a.slice(0, o + 1);
                                return r.protocol + "//" + r.host + i
                            };
                            Number.isInteger
                        },
                        527: (e, t, r) => {
                            "use strict";
                            var a = {
                                    "./index": () => Promise.all([r.e(785), r.e(403), r.e(610)]).then((() => () => r(610)))
                                },
                                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                                    throw new Error('Module "' + e + '" does not exist in container.')
                                })), r.R = void 0, t),
                                o = (e, t) => {
                                    if (r.S) {
                                        var a = "default",
                                            n = r.S[a];
                                        if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                                        return r.S[a] = e, r.I(a, t)
                                    }
                                };
                            r.d(t, {
                                get: () => n,
                                init: () => o
                            })
                        },
                        24: e => {
                            "use strict";
                            e.exports = r
                        },
                        136: e => {
                            "use strict";
                            e.exports = a
                        },
                        969: e => {
                            "use strict";
                            e.exports = n
                        }
                    },
                    f = {};

                function l(e) {
                    var t = f[e];
                    if (void 0 !== t) return t.exports;
                    var r = f[e] = {
                        exports: {}
                    };
                    return d[e](r, r.exports, l), r.exports
                }
                return l.m = d, l.c = f, l.y = t, l.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return l.d(t, {
                        a: t
                    }), t
                }, l.d = (e, t) => {
                    for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
                    49: "943260b2153e0f7b297ff50d4175e940",
                    261: "2f2ed9614ce6db83e65330c193ed8fe2",
                    380: "afe9e0975fa0b5f366ca203ae98ff5a0",
                    403: "49c5b61eb2d92ede5f20ba4d10d7760e",
                    610: "5a6cb1699547e7be8ee08743c324193f",
                    776: "ab6c38c32b5998d7e0ab76ae5319e457",
                    785: "a2ae609875bdbdaa6a55d9c8175ceb59"
                }[e] + ".js", l.miniCssF = e => "css/8cd03cf98c65730a953207bf33b7059b.css", l.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/sites-rockstar-tv:", l.l = (t, r, a, n) => {
                    if (e[t]) e[t].push(r);
                    else {
                        var i, s;
                        if (void 0 !== a)
                            for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                                var u = d[f];
                                if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == o + a) {
                                    i = u;
                                    break
                                }
                            }
                        i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + a), i.src = t), e[t] = [r];
                        var c = (r, a) => {
                                i.onerror = i.onload = null, clearTimeout(p);
                                var n = e[t];
                                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
                            },
                            p = setTimeout(c.bind(null, void 0, {
                                type: "timeout",
                                target: i
                            }), 12e4);
                        i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
                    }
                }, l.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i = {
                    610: [300, 407, 756, 879]
                }, s = {
                    300: ["default", "./operations/fragments/video2-fields.graphql", 24],
                    407: ["default", "./index", 24],
                    756: ["default", "./index", 969],
                    879: ["default", "./index", 136]
                }, l.f.remotes = (e, t) => {
                    l.o(i, e) && i[e].forEach((e => {
                        var r = l.R;
                        r || (r = []);
                        var a = s[e];
                        if (!(r.indexOf(a) >= 0)) {
                            if (r.push(a), a.p) return t.push(a.p);
                            var n = t => {
                                    t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                                        throw t
                                    }, a.p = 0
                                },
                                o = (e, r, o, i, s, d) => {
                                    try {
                                        var f = e(r, o);
                                        if (!f || !f.then) return s(f, i, d);
                                        var l = f.then((e => s(e, i)), n);
                                        if (!d) return l;
                                        t.push(a.p = l)
                                    } catch (e) {
                                        n(e)
                                    }
                                },
                                i = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                                d = t => {
                                    a.p = 1, l.m[e] = e => {
                                        e.exports = t()
                                    }
                                };
                            o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, i, r) : n()), 1)
                        }
                    }))
                }, (() => {
                    l.S = {};
                    var e = {},
                        t = {};
                    l.I = (r, a) => {
                        a || (a = []);
                        var n = t[r];
                        if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
                            if (a.push(n), e[r]) return e[r];
                            l.o(l.S, r) || (l.S[r] = {});
                            var o = l.S[r],
                                i = "@rockstargames/sites-rockstar-tv",
                                s = (e, t, r, a) => {
                                    var n = o[e] = o[e] || {},
                                        s = n[t];
                                    (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[t] = {
                                        get: r,
                                        from: i,
                                        eager: !!a
                                    })
                                },
                                d = e => {
                                    var t = e => {
                                        return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                                        var t
                                    };
                                    try {
                                        var n = l(e);
                                        if (!n) return;
                                        var o = e => e && e.init && e.init(l.S[r], a);
                                        if (n.then) return f.push(n.then(o, t));
                                        var i = o(n);
                                        if (i && i.then) return f.push(i.catch(t))
                                    } catch (e) {
                                        t(e)
                                    }
                                },
                                f = [];
                            return "default" === r && (s("react-router-dom", "6.17.0", (() => Promise.all([l.e(261), l.e(49), l.e(403)]).then((() => () => l(49))))), s("react-router-dom", "6.17.0", (() => Promise.all([l.e(261), l.e(776), l.e(403)]).then((() => () => l(776))))), s("react", "18.2.0", (() => l.e(380).then((() => () => l(380))))), d(24), d(136), d(969)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
                        }
                    }
                })(), (() => {
                    var e;
                    l.g.importScripts && (e = l.g.location + "");
                    var t = l.g.document;
                    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                        var r = t.getElementsByTagName("script");
                        if (r.length)
                            for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
                    }
                    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
                    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
                })(), (() => {
                    var e = e => {
                            var t = e => e.split(".").map((e => +e == e ? +e : e)),
                                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                                a = r[1] ? t(r[1]) : [];
                            return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
                        },
                        t = (r, a) => {
                            if (0 in r) {
                                a = e(a);
                                var n = r[0],
                                    o = n < 0;
                                o && (n = -n - 1);
                                for (var i = 0, s = 1, d = !0;; s++, i++) {
                                    var f, l, u = s < r.length ? (typeof r[s])[0] : "";
                                    if (i >= a.length || "o" == (l = (typeof(f = a[i]))[0])) return !d || ("u" == u ? s > n && !o : "" == u != o);
                                    if ("u" == l) {
                                        if (!d || "u" != u) return !1
                                    } else if (d)
                                        if (u == l)
                                            if (s <= n) {
                                                if (f != r[s]) return !1
                                            } else {
                                                if (o ? f > r[s] : f < r[s]) return !1;
                                                f != r[s] && (d = !1)
                                            }
                                    else if ("s" != u && "n" != u) {
                                        if (o || s <= n) return !1;
                                        d = !1, s--
                                    } else {
                                        if (s <= n || l < u != o) return !1;
                                        d = !1
                                    } else "s" != u && "n" != u && (d = !1, s--)
                                }
                            }
                            var c = [],
                                p = c.pop.bind(c);
                            for (i = 1; i < r.length; i++) {
                                var h = r[i];
                                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
                            }
                            return !!p()
                        },
                        r = (r, a, n) => {
                            var o = r[a];
                            return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                                t = e(t), r = e(r);
                                for (var a = 0;;) {
                                    if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                                    var n = t[a],
                                        o = (typeof n)[0];
                                    if (a >= r.length) return "u" == o;
                                    var i = r[a],
                                        s = (typeof i)[0];
                                    if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                                    if ("o" != o && "u" != o && n != i) return n < i;
                                    a++
                                }
                            })(r, a) ? r : a), 0)) && o[a]
                        },
                        a = (e => function(t, r, a, n) {
                            var o = l.I(t);
                            return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
                        })(((e, t, a, n, o) => {
                            var i = t && l.o(t, a) && r(t, a, n);
                            return i ? (e => (e.loaded = 1, e.get()))(i) : o()
                        })),
                        n = {},
                        o = {
                            784: () => a("default", "react", [1, 18, 2, 0], (() => l.e(380).then((() => () => l(380))))),
                            410: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([l.e(261), l.e(776)]).then((() => () => l(776))))),
                            779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([l.e(261), l.e(49)]).then((() => () => l(49)))))
                        },
                        i = {
                            403: [784],
                            610: [410, 779]
                        },
                        s = {};
                    l.f.consumes = (e, t) => {
                        l.o(i, e) && i[e].forEach((e => {
                            if (l.o(n, e)) return t.push(n[e]);
                            if (!s[e]) {
                                var r = t => {
                                    n[e] = 0, l.m[e] = r => {
                                        delete l.c[e], r.exports = t()
                                    }
                                };
                                s[e] = !0;
                                var a = t => {
                                    delete n[e], l.m[e] = r => {
                                        throw delete l.c[e], t
                                    }
                                };
                                try {
                                    var i = o[e]();
                                    i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
                                } catch (e) {
                                    a(e)
                                }
                            }
                        }))
                    }
                })(), (() => {
                    if ("undefined" != typeof document) {
                        var e = {
                            483: 0
                        };
                        l.f.miniCss = (t, r) => {
                            e[t] ? r.push(e[t]) : 0 !== e[t] && {
                                610: 1
                            }[t] && r.push(e[t] = (e => new Promise(((t, r) => {
                                var a = l.miniCssF(e),
                                    n = l.p + a;
                                if (((e, t) => {
                                        for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                                            var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                                            if ("stylesheet" === i.rel && (n === e || n === t)) return i
                                        }
                                        var o = document.getElementsByTagName("style");
                                        for (a = 0; a < o.length; a++) {
                                            var i;
                                            if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                                        }
                                    })(a, n)) return t();
                                ((e, t, r, a, n) => {
                                    var o = document.createElement("link");
                                    o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                                        if (o.onerror = o.onload = null, "load" === r.type) a();
                                        else {
                                            var i = r && ("load" === r.type ? "missing" : r.type),
                                                s = r && r.target && r.target.href || t,
                                                d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                                            d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode && o.parentNode.removeChild(o), n(d)
                                        }
                                    }, o.href = t, document.head.appendChild(o)
                                })(e, n, 0, t, r)
                            })))(t).then((() => {
                                e[t] = 0
                            }), (r => {
                                throw delete e[t], r
                            })))
                        }
                    }
                })(), (() => {
                    var e = {
                        483: 0
                    };
                    l.f.j = (t, r) => {
                        var a = l.o(e, t) ? e[t] : void 0;
                        if (0 !== a)
                            if (a) r.push(a[2]);
                            else if (403 != t) {
                            var n = new Promise(((r, n) => a = e[t] = [r, n]));
                            r.push(a[2] = n);
                            var o = l.p + l.u(t),
                                i = new Error;
                            l.l(o, (r => {
                                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                                    var n = r && ("load" === r.type ? "missing" : r.type),
                                        o = r && r.target && r.target.src;
                                    i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                                }
                            }), "chunk-" + t, t)
                        } else e[t] = 0
                    };
                    var t = (t, r) => {
                            var a, n, o = r[0],
                                i = r[1],
                                s = r[2],
                                d = 0;
                            if (o.some((t => 0 !== e[t]))) {
                                for (a in i) l.o(i, a) && (l.m[a] = i[a]);
                                s && s(l)
                            }
                            for (t && t(r); d < o.length; d++) n = o[d], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
                        },
                        r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })(), l(160), l(527)
            })())
        }
    }
}));
//# sourceMappingURL=remote-entry.js.map