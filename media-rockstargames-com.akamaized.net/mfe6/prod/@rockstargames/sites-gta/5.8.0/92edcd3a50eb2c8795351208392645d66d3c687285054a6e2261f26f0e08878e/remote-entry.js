! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8fa0ee95-6c9c-4c8e-b7c1-c1d29acd9eca", e._sentryDebugIdIdentifier = "sentry-dbid-8fa0ee95-6c9c-4c8e-b7c1-c1d29acd9eca")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/sites-gta",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/sites-rockstargames", "@rockstargames/utils"], (function(e, t) {
    var r = {},
        a = {},
        o = {},
        n = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(o, "__esModule", {
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
                o[t] = e[t]
            }))
        }, function(e) {
            Object.keys(e).forEach((function(t) {
                n[t] = e[t]
            }))
        }],
        execute: function() {
            e((() => {
                var e, s, i, c, d = {
                        6539: (e, t, r) => {
                            (0, r(3403).w)(1)
                        },
                        3403: (e, t, r) => {
                            const a = r(5659).y;
                            t.w = function(e) {
                                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                                r.p = a(r.y.meta.url, e)
                            }
                        },
                        2160: (e, t, r) => {
                            r(6539)
                        },
                        5659: (e, t, r) => {
                            t.y = function(e, t) {
                                var r = document.createElement("a");
                                r.href = e;
                                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                                var s = a.slice(0, n + 1);
                                return r.protocol + "//" + r.host + s
                            };
                            Number.isInteger
                        },
                        3588: (e, t, r) => {
                            "use strict";
                            var a = {
                                    "./destination": () => Promise.all([r.e(403), r.e(521), r.e(325)]).then((() => () => r(6817))),
                                    "./index": () => Promise.all([r.e(434), r.e(403), r.e(521), r.e(932)]).then((() => () => r(796)))
                                },
                                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                                    throw new Error('Module "' + e + '" does not exist in container.')
                                })), r.R = void 0, t),
                                n = (e, t) => {
                                    if (r.S) {
                                        var a = "default",
                                            o = r.S[a];
                                        if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                                        return r.S[a] = e, r.I(a, t)
                                    }
                                };
                            r.d(t, {
                                get: () => o,
                                init: () => n
                            })
                        },
                        1024: e => {
                            "use strict";
                            e.exports = r
                        },
                        404: e => {
                            "use strict";
                            e.exports = a
                        },
                        3325: e => {
                            "use strict";
                            e.exports = o
                        },
                        2969: e => {
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
                    2: "355dfc66dea5ea5ae7198bcd5c126fda",
                    8: "9f4ce8ae7a885bf31f7a6a99458dc199",
                    66: "2f5a6e61d77b2f6d8fa894d5a2e6fc8b",
                    105: "51c92647e9ed38ad3f099d2ef5a6147c",
                    109: "6cd03af47d7b04588a73f1a38a90b365",
                    143: "98cdc72a805a4dcbb4f0938438170704",
                    149: "e48bdbe265334c36218e3933eb5593f8",
                    155: "322a249f3cdea1102da6057032cf86e3",
                    261: "937a8985ecf3daa427463a3694b38818",
                    325: "839f8ccd77aeeffc2536e7497f45dbf0",
                    380: "890a69dc2ca5e022a4a5bc46fc8e2822",
                    403: "1210e88c990140a4820cfba96a0a6416",
                    410: "10d0f3a78b425357258367f6da813e28",
                    434: "d725ab63f4a754198bc3347c0f181beb",
                    451: "fadd132d20b72ca3fda113df9362043e",
                    516: "439a0d6cd11fe1678ee6dc76823669d3",
                    521: "32289f1400ea2903e4ce1c0d2f4dbb89",
                    524: "6e42f68ee3cd608e1d3c9497a762d244",
                    621: "2b4a4fe18afc659eff928a2a0822b233",
                    776: "547714aba181895ada3e6b6b5e184f22",
                    839: "2dfbc38be52435f0da299ef377a7b568",
                    868: "797b95f9c591c412bdf26c1373887186",
                    932: "a382fe5fca8da5d72ac6f755028e305b",
                    977: "f6e45c36f9e86a3de072ef6a3dcb7d64"
                }[e] + ".js", l.miniCssF = e => "css/" + {
                    325: "4c4f0b4084a55177d4bce68f456b660c",
                    932: "240650773bec1d06ccf941b8ea55dcc7"
                }[e] + ".css", l.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-gta:", l.l = (t, r, a, o) => {
                    if (e[t]) e[t].push(r);
                    else {
                        var n, i;
                        if (void 0 !== a)
                            for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                                var f = c[d];
                                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == s + a) {
                                    n = f;
                                    break
                                }
                            }
                        n || (i = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, l.nc && n.setAttribute("nonce", l.nc), n.setAttribute("data-webpack", s + a), n.src = t), e[t] = [r];
                        var u = (r, a) => {
                                n.onerror = n.onload = null, clearTimeout(p);
                                var o = e[t];
                                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
                            },
                            p = setTimeout(u.bind(null, void 0, {
                                type: "timeout",
                                target: n
                            }), 12e4);
                        n.onerror = u.bind(null, n.onerror), n.onload = u.bind(null, n.onload), i && document.head.appendChild(n)
                    }
                }, l.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i = {
                    325: [6524],
                    521: [207, 2756, 8407]
                }, c = {
                    207: ["default", "./index", 404],
                    2756: ["default", "./index", 2969],
                    6524: ["default", "./components", 3325],
                    8407: ["default", "./index", 1024]
                }, l.f.remotes = (e, t) => {
                    l.o(i, e) && i[e].forEach((e => {
                        var r = l.R;
                        r || (r = []);
                        var a = c[e];
                        if (!(r.indexOf(a) >= 0)) {
                            if (r.push(a), a.p) return t.push(a.p);
                            var o = t => {
                                    t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                                        throw t
                                    }, a.p = 0
                                },
                                n = (e, r, n, s, i, c) => {
                                    try {
                                        var d = e(r, n);
                                        if (!d || !d.then) return i(d, s, c);
                                        var f = d.then((e => i(e, s)), o);
                                        if (!c) return f;
                                        t.push(a.p = f)
                                    } catch (e) {
                                        o(e)
                                    }
                                },
                                s = (e, t, o) => n(t.get, a[1], r, 0, i, o),
                                i = t => {
                                    a.p = 1, l.m[e] = e => {
                                        e.exports = t()
                                    }
                                };
                            n(l, a[2], 0, 0, ((e, t, r) => e ? n(l.I, a[0], 0, e, s, r) : o()), 1)
                        }
                    }))
                }, (() => {
                    l.S = {};
                    var e = {},
                        t = {};
                    l.I = (r, a) => {
                        a || (a = []);
                        var o = t[r];
                        if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
                            if (a.push(o), e[r]) return e[r];
                            l.o(l.S, r) || (l.S[r] = {});
                            var n = l.S[r],
                                s = "@rockstargames/sites-gta",
                                i = (e, t, r, a) => {
                                    var o = n[e] = n[e] || {},
                                        i = o[t];
                                    (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (o[t] = {
                                        get: r,
                                        from: s,
                                        eager: !!a
                                    })
                                },
                                c = e => {
                                    var t = e => {
                                        return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                                        var t
                                    };
                                    try {
                                        var o = l(e);
                                        if (!o) return;
                                        var n = e => e && e.init && e.init(l.S[r], a);
                                        if (o.then) return d.push(o.then(n, t));
                                        var s = n(o);
                                        if (s && s.then) return d.push(s.catch(t))
                                    } catch (e) {
                                        t(e)
                                    }
                                },
                                d = [];
                            return "default" === r && (i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([l.e(66), l.e(403), l.e(143)]).then((() => () => l(4143))))), i("@rockstargames/router", "1.0.0", (() => Promise.all([l.e(403), l.e(410), l.e(621)]).then((() => () => l(3002))))), i("gsap", "0.0.0", (() => l.e(149).then((() => () => l(3149))))), i("prop-types", "15.8.1", (() => l.e(977).then((() => () => l(7977))))), i("react-focus-lock", "2.9.6", (() => Promise.all([l.e(155), l.e(109), l.e(403), l.e(516)]).then((() => () => l(109))))), i("react-remove-scroll", "2.5.7", (() => Promise.all([l.e(155), l.e(403), l.e(868)]).then((() => () => l(6868))))), i("react-router-dom", "6.17.0", (() => Promise.all([l.e(261), l.e(105), l.e(8), l.e(403)]).then((() => () => l(6008))))), i("react-router-dom", "6.17.0", (() => Promise.all([l.e(261), l.e(105), l.e(451), l.e(403)]).then((() => () => l(4451))))), i("react-router-dom", "6.17.0", (() => Promise.all([l.e(261), l.e(776), l.e(403)]).then((() => () => l(2776))))), i("react", "18.2.0", (() => l.e(380).then((() => () => l(3380))))), c(1024), c(404), c(2969), c(3325)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
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
                                var o = r[0],
                                    n = o < 0;
                                n && (o = -o - 1);
                                for (var s = 0, i = 1, c = !0;; i++, s++) {
                                    var d, f, l = i < r.length ? (typeof r[i])[0] : "";
                                    if (s >= a.length || "o" == (f = (typeof(d = a[s]))[0])) return !c || ("u" == l ? i > o && !n : "" == l != n);
                                    if ("u" == f) {
                                        if (!c || "u" != l) return !1
                                    } else if (c)
                                        if (l == f)
                                            if (i <= o) {
                                                if (d != r[i]) return !1
                                            } else {
                                                if (n ? d > r[i] : d < r[i]) return !1;
                                                d != r[i] && (c = !1)
                                            }
                                    else if ("s" != l && "n" != l) {
                                        if (n || i <= o) return !1;
                                        c = !1, i--
                                    } else {
                                        if (i <= o || f < l != n) return !1;
                                        c = !1
                                    } else "s" != l && "n" != l && (c = !1, i--)
                                }
                            }
                            var u = [],
                                p = u.pop.bind(u);
                            for (s = 1; s < r.length; s++) {
                                var h = r[s];
                                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
                            }
                            return !!p()
                        },
                        r = (r, a, o) => {
                            var n = r[a];
                            return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                                t = e(t), r = e(r);
                                for (var a = 0;;) {
                                    if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                                    var o = t[a],
                                        n = (typeof o)[0];
                                    if (a >= r.length) return "u" == n;
                                    var s = r[a],
                                        i = (typeof s)[0];
                                    if (n != i) return "o" == n && "n" == i || "s" == i || "u" == n;
                                    if ("o" != n && "u" != n && o != s) return o < s;
                                    a++
                                }
                            })(r, a) ? r : a), 0)) && n[a]
                        },
                        a = (e => function(t, r, a, o) {
                            var n = l.I(t);
                            return n && n.then ? n.then(e.bind(e, t, l.S[t], r, a, o)) : e(t, l.S[t], r, a, o)
                        })(((e, t, a, o, n) => {
                            var s = t && l.o(t, a) && r(t, a, o);
                            return s ? (e => (e.loaded = 1, e.get()))(s) : n()
                        })),
                        o = {},
                        n = {
                            1403: () => a("default", "react", [1, 18, 2, 0], (() => l.e(380).then((() => () => l(3380))))),
                            6040: () => a("default", "gsap", [1, "workspace:*"], (() => l.e(149).then((() => () => l(3149))))),
                            6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([l.e(66), l.e(524)]).then((() => () => l(4143))))),
                            6864: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([l.e(155), l.e(109), l.e(516)]).then((() => () => l(109))))),
                            7172: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([l.e(261), l.e(105), l.e(451)]).then((() => () => l(4451))))),
                            7460: () => a("default", "react-remove-scroll", [1, 2, 5, 7], (() => Promise.all([l.e(155), l.e(839)]).then((() => () => l(6868))))),
                            9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([l.e(261), l.e(105), l.e(8)]).then((() => () => l(6008))))),
                            5301: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([l.e(410), l.e(2)]).then((() => () => l(3002))))),
                            4410: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([l.e(261), l.e(776)]).then((() => () => l(2776))))),
                            9516: () => a("default", "prop-types", [1, 15, 8, 1], (() => l.e(977).then((() => () => l(7977)))))
                        },
                        s = {
                            325: [9779],
                            403: [1403],
                            410: [4410],
                            516: [9516],
                            521: [6040, 6717, 6864, 7172, 7460],
                            932: [5301]
                        },
                        i = {};
                    l.f.consumes = (e, t) => {
                        l.o(s, e) && s[e].forEach((e => {
                            if (l.o(o, e)) return t.push(o[e]);
                            if (!i[e]) {
                                var r = t => {
                                    o[e] = 0, l.m[e] = r => {
                                        delete l.c[e], r.exports = t()
                                    }
                                };
                                i[e] = !0;
                                var a = t => {
                                    delete o[e], l.m[e] = r => {
                                        throw delete l.c[e], t
                                    }
                                };
                                try {
                                    var s = n[e]();
                                    s.then ? t.push(o[e] = s.then(r).catch(a)) : r(s)
                                } catch (e) {
                                    a(e)
                                }
                            }
                        }))
                    }
                })(), (() => {
                    if ("undefined" != typeof document) {
                        var e = {
                            47: 0
                        };
                        l.f.miniCss = (t, r) => {
                            e[t] ? r.push(e[t]) : 0 !== e[t] && {
                                325: 1,
                                932: 1
                            }[t] && r.push(e[t] = (e => new Promise(((t, r) => {
                                var a = l.miniCssF(e),
                                    o = l.p + a;
                                if (((e, t) => {
                                        for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                                            var o = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                                            if ("stylesheet" === s.rel && (o === e || o === t)) return s
                                        }
                                        var n = document.getElementsByTagName("style");
                                        for (a = 0; a < n.length; a++) {
                                            var s;
                                            if ((o = (s = n[a]).getAttribute("data-href")) === e || o === t) return s
                                        }
                                    })(a, o)) return t();
                                ((e, t, r, a, o) => {
                                    var n = document.createElement("link");
                                    n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                                        if (n.onerror = n.onload = null, "load" === r.type) a();
                                        else {
                                            var s = r && ("load" === r.type ? "missing" : r.type),
                                                i = r && r.target && r.target.href || t,
                                                c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                                            c.code = "CSS_CHUNK_LOAD_FAILED", c.type = s, c.request = i, n.parentNode && n.parentNode.removeChild(n), o(c)
                                        }
                                    }, n.href = t, document.head.appendChild(n)
                                })(e, o, 0, t, r)
                            })))(t).then((() => {
                                e[t] = 0
                            }), (r => {
                                throw delete e[t], r
                            })))
                        }
                    }
                })(), (() => {
                    var e = {
                        47: 0
                    };
                    l.f.j = (t, r) => {
                        var a = l.o(e, t) ? e[t] : void 0;
                        if (0 !== a)
                            if (a) r.push(a[2]);
                            else if (/^(403|410|516)$/.test(t)) e[t] = 0;
                        else {
                            var o = new Promise(((r, o) => a = e[t] = [r, o]));
                            r.push(a[2] = o);
                            var n = l.p + l.u(t),
                                s = new Error;
                            l.l(n, (r => {
                                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                                    var o = r && ("load" === r.type ? "missing" : r.type),
                                        n = r && r.target && r.target.src;
                                    s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", s.name = "ChunkLoadError", s.type = o, s.request = n, a[1](s)
                                }
                            }), "chunk-" + t, t)
                        }
                    };
                    var t = (t, r) => {
                            var a, o, n = r[0],
                                s = r[1],
                                i = r[2],
                                c = 0;
                            if (n.some((t => 0 !== e[t]))) {
                                for (a in s) l.o(s, a) && (l.m[a] = s[a]);
                                i && i(l)
                            }
                            for (t && t(r); c < n.length; c++) o = n[c], l.o(e, o) && e[o] && e[o][0](), e[o] = 0
                        },
                        r = self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })(), l.nc = void 0, l(2160), l(3588)
            })())
        }
    }
}));
//# sourceMappingURL=remote-entry.js.map