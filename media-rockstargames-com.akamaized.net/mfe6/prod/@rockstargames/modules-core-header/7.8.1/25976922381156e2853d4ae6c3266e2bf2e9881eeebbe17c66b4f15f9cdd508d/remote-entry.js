! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c1a1d4a2-4344-4d9d-a38a-bd4bd09d2fbb", e._sentryDebugIdIdentifier = "sentry-dbid-c1a1d4a2-4344-4d9d-a38a-bd4bd09d2fbb")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "f587115b2ae813baab297fbd791b7e140098fa2b",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "f587115b2ae813baab297fbd791b7e140098fa2b"
}, System.register([], (function(e, t) {
    return {
        execute: function() {
            e((() => {
                var e, r, a, o, n, d, f = {
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
                                var d = a.slice(0, n + 1);
                                return r.protocol + "//" + r.host + d
                            };
                            Number.isInteger
                        },
                        2609: (e, t, r) => {
                            "use strict";
                            var a = {
                                    "./bootstrap": () => Promise.all([r.e(689), r.e(949), r.e(403), r.e(396), r.e(235), r.e(493), r.e(63)]).then((() => () => r(1063))),
                                    "./core": () => Promise.all([r.e(689), r.e(949), r.e(403), r.e(396), r.e(235), r.e(344)]).then((() => () => r(4344))),
                                    "./index": () => Promise.all([r.e(689), r.e(949), r.e(403), r.e(396), r.e(235)]).then((() => () => r(7905))),
                                    "./GlobalNavigationWrapper": () => Promise.all([r.e(403), r.e(396), r.e(592)]).then((() => () => r(9965)))
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
                        }
                    },
                    i = {};

                function l(e) {
                    var t = i[e];
                    if (void 0 !== t) return t.exports;
                    var r = i[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return f[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
                }
                return l.m = f, l.c = i, l.y = t, l.amdO = {}, l.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return l.d(t, {
                        a: t
                    }), t
                }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(t, a) {
                    if (1 & a && (t = this(t)), 8 & a) return t;
                    if ("object" == typeof t && t) {
                        if (4 & a && t.__esModule) return t;
                        if (16 & a && "function" == typeof t.then) return t
                    }
                    var o = Object.create(null);
                    l.r(o);
                    var n = {};
                    e = e || [null, r({}), r([]), r(r)];
                    for (var d = 2 & a && t;
                        "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => n[e] = () => t[e]));
                    return n.default = () => t, l.d(o, n), o
                }, l.d = (e, t) => {
                    for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
                    4: "e72207df602fcbc6c1f960e45d70e846",
                    63: "586b091b3d9bb98e29deab7c8636142d",
                    66: "fe51a56ea47d859c53fdc2df188c161a",
                    124: "adb5c968838e02e4a3b151a31cd2f6a3",
                    143: "ae18c834e09dc61f038c02294e7ff8f3",
                    149: "8bbc00af8bf368d60382b7191094eb05",
                    189: "7245a1db94dcbc004b06b5a8a77ac860",
                    235: "45cf1deb11894afff16f30b5a33a4b85",
                    344: "51a6a3151d2165070ddd9762828b992b",
                    380: "5d0745ea2f2ae19cd0ae400dae3a0b8d",
                    396: "6281b6a00fa70494e2be593d668e9c3e",
                    398: "d8e89d579780792c2be680595dd11f69",
                    403: "312be5725d20393940e5ec42c154bc62",
                    429: "bfb53a027676874ab0719f875287c36e",
                    493: "a207c78af1164e83038c21316c883ce7",
                    524: "39862aa6bacd189f760565299c477f69",
                    533: "a52da458772bb752726cc4d935a85332",
                    570: "694421faa87870d1d79e5ab3207689cc",
                    592: "4b7a5da280614744a9a89bd74a770e79",
                    613: "6e5b19c2f8ae1748d3f54770d25d7dfd",
                    689: "c6aaa119f9fd0cfa0fb0e7affe9d7a00",
                    749: "64531265dc8ac4d010d92224f50855ef",
                    949: "4cf9c1fa59a652ef2020fe2cd3d06891",
                    984: "750628b707b3b61df2cd9b1caaaeea2e",
                    994: "f9527275ea450bf27fbc2f09d1cfabb1"
                }[e] + ".js", l.miniCssF = e => "css/2d9bae9261e12d96331790adb279d106.css", l.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/modules-core-header:", l.l = (e, t, r, n) => {
                    if (a[e]) a[e].push(t);
                    else {
                        var d, f;
                        if (void 0 !== r)
                            for (var i = document.getElementsByTagName("script"), s = 0; s < i.length; s++) {
                                var c = i[s];
                                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                                    d = c;
                                    break
                                }
                            }
                        d || (f = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, l.nc && d.setAttribute("nonce", l.nc), d.setAttribute("data-webpack", o + r), d.src = e), a[e] = [t];
                        var u = (t, r) => {
                                d.onerror = d.onload = null, clearTimeout(p);
                                var o = a[e];
                                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), t) return t(r)
                            },
                            p = setTimeout(u.bind(null, void 0, {
                                type: "timeout",
                                target: d
                            }), 12e4);
                        d.onerror = u.bind(null, d.onerror), d.onload = u.bind(null, d.onload), f && document.head.appendChild(d)
                    }
                }, l.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {}, d = {}, l.f.remotes = (e, t) => {
                    l.o(n, e) && n[e].forEach((e => {
                        var r = l.R;
                        r || (r = []);
                        var a = d[e];
                        if (!(r.indexOf(a) >= 0)) {
                            if (r.push(a), a.p) return t.push(a.p);
                            var o = t => {
                                    t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                                        throw t
                                    }, a.p = 0
                                },
                                n = (e, r, n, d, f, i) => {
                                    try {
                                        var l = e(r, n);
                                        if (!l || !l.then) return f(l, d, i);
                                        var s = l.then((e => f(e, d)), o);
                                        if (!i) return s;
                                        t.push(a.p = s)
                                    } catch (e) {
                                        o(e)
                                    }
                                },
                                f = (e, t, o) => n(t.get, a[1], r, 0, i, o),
                                i = t => {
                                    a.p = 1, l.m[e] = e => {
                                        e.exports = t()
                                    }
                                };
                            n(l, a[2], 0, 0, ((e, t, r) => e ? n(l.I, a[0], 0, e, f, r) : o()), 1)
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
                                d = "@rockstargames/modules-core-header",
                                f = (e, t, r, a) => {
                                    var o = n[e] = n[e] || {},
                                        f = o[t];
                                    (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                                        get: r,
                                        from: d,
                                        eager: !!a
                                    })
                                },
                                i = [];
                            return "default" === r && (f("@popperjs/core", "2.11.8", (() => l.e(124).then((() => () => l(2124))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([l.e(66), l.e(403), l.e(143)]).then((() => () => l(4143))))), f("framer-motion", "7.10.3", (() => Promise.all([l.e(689), l.e(749), l.e(403)]).then((() => () => l(5749))))), f("gsap", "0.0.0", (() => l.e(149).then((() => () => l(3149))))), f("lodash", "4.17.21", (() => l.e(429).then((() => () => l(9429))))), f("react-dom", "18.2.0", (() => Promise.all([l.e(533), l.e(403)]).then((() => () => l(7533))))), f("react-popper", "2.3.0", (() => Promise.all([l.e(403), l.e(493), l.e(4), l.e(570)]).then((() => () => l(6570))))), f("react-remove-scroll", "2.5.7", (() => Promise.all([l.e(403), l.e(613)]).then((() => () => l(8613))))), f("react-router-dom", "6.17.0", (() => Promise.all([l.e(398), l.e(403)]).then((() => () => l(3398))))), f("react", "18.2.0", (() => l.e(380).then((() => () => l(3380))))), f("spatial-navigation-polyfill", "1.3.1", (() => l.e(984).then((() => () => l(8984)))))), e[r] = i.length ? Promise.all(i).then((() => e[r] = 1)) : 1
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
                                for (var d = 0, f = 1, i = !0;; f++, d++) {
                                    var l, s, c = f < r.length ? (typeof r[f])[0] : "";
                                    if (d >= a.length || "o" == (s = (typeof(l = a[d]))[0])) return !i || ("u" == c ? f > o && !n : "" == c != n);
                                    if ("u" == s) {
                                        if (!i || "u" != c) return !1
                                    } else if (i)
                                        if (c == s)
                                            if (f <= o) {
                                                if (l != r[f]) return !1
                                            } else {
                                                if (n ? l > r[f] : l < r[f]) return !1;
                                                l != r[f] && (i = !1)
                                            }
                                    else if ("s" != c && "n" != c) {
                                        if (n || f <= o) return !1;
                                        i = !1, f--
                                    } else {
                                        if (f <= o || s < c != n) return !1;
                                        i = !1
                                    } else "s" != c && "n" != c && (i = !1, f--)
                                }
                            }
                            var u = [],
                                p = u.pop.bind(u);
                            for (d = 1; d < r.length; d++) {
                                var h = r[d];
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
                                    var d = r[a],
                                        f = (typeof d)[0];
                                    if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
                                    if ("o" != n && "u" != n && o != d) return o < d;
                                    a++
                                }
                            })(r, a) ? r : a), 0)) && n[a]
                        },
                        a = (e => function(t, r, a, o) {
                            var n = l.I(t);
                            return n && n.then ? n.then(e.bind(e, t, l.S[t], r, a, o)) : e(t, l.S[t], r, a, o)
                        })(((e, t, a, o, n) => {
                            var d = t && l.o(t, a) && r(t, a, o);
                            return d ? (e => (e.loaded = 1, e.get()))(d) : n()
                        })),
                        o = {},
                        n = {
                            1403: () => a("default", "react", [1, 18, 2, 0], (() => l.e(380).then((() => () => l(3380))))),
                            6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([l.e(66), l.e(524)]).then((() => () => l(4143))))),
                            3181: () => a("default", "framer-motion", [1, 7, 5, 1], (() => l.e(749).then((() => () => l(5749))))),
                            4252: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(429).then((() => () => l(9429))))),
                            6040: () => a("default", "gsap", [1, "workspace:*"], (() => l.e(149).then((() => () => l(3149))))),
                            6649: () => a("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => l.e(984).then((() => () => l(8984))))),
                            7460: () => a("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(994).then((() => () => l(8613))))),
                            8588: () => a("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([l.e(493), l.e(4), l.e(189)]).then((() => () => l(6570))))),
                            9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(398).then((() => () => l(3398))))),
                            9493: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(533).then((() => () => l(7533))))),
                            5004: () => a("default", "@popperjs/core", [1, 2, 11, 8], (() => l.e(124).then((() => () => l(2124)))))
                        },
                        d = {
                            4: [5004],
                            235: [3181, 4252, 6040, 6649, 7460, 8588, 9779],
                            396: [6717],
                            403: [1403],
                            493: [9493]
                        },
                        f = {};
                    l.f.consumes = (e, t) => {
                        l.o(d, e) && d[e].forEach((e => {
                            if (l.o(o, e)) return t.push(o[e]);
                            if (!f[e]) {
                                var r = t => {
                                    o[e] = 0, l.m[e] = r => {
                                        delete l.c[e], r.exports = t()
                                    }
                                };
                                f[e] = !0;
                                var a = t => {
                                    delete o[e], l.m[e] = r => {
                                        throw delete l.c[e], t
                                    }
                                };
                                try {
                                    var d = n[e]();
                                    d.then ? t.push(o[e] = d.then(r).catch(a)) : r(d)
                                } catch (e) {
                                    a(e)
                                }
                            }
                        }))
                    }
                })(), (() => {
                    if ("undefined" != typeof document) {
                        var e = {
                            295: 0
                        };
                        l.f.miniCss = (t, r) => {
                            e[t] ? r.push(e[t]) : 0 !== e[t] && {
                                235: 1
                            }[t] && r.push(e[t] = (e => new Promise(((t, r) => {
                                var a = l.miniCssF(e),
                                    o = l.p + a;
                                if (((e, t) => {
                                        for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                                            var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                                            if ("stylesheet" === d.rel && (o === e || o === t)) return d
                                        }
                                        var n = document.getElementsByTagName("style");
                                        for (a = 0; a < n.length; a++) {
                                            var d;
                                            if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                                        }
                                    })(a, o)) return t();
                                ((e, t, r, a, o) => {
                                    var n = document.createElement("link");
                                    n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                                        if (n.onerror = n.onload = null, "load" === r.type) a();
                                        else {
                                            var d = r && ("load" === r.type ? "missing" : r.type),
                                                f = r && r.target && r.target.href || t,
                                                i = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                                            i.code = "CSS_CHUNK_LOAD_FAILED", i.type = d, i.request = f, n.parentNode && n.parentNode.removeChild(n), o(i)
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
                        295: 0
                    };
                    l.f.j = (t, r) => {
                        var a = l.o(e, t) ? e[t] : void 0;
                        if (0 !== a)
                            if (a) r.push(a[2]);
                            else if (/^4(|03|93)$/.test(t)) e[t] = 0;
                        else {
                            var o = new Promise(((r, o) => a = e[t] = [r, o]));
                            r.push(a[2] = o);
                            var n = l.p + l.u(t),
                                d = new Error;
                            l.l(n, (r => {
                                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                                    var o = r && ("load" === r.type ? "missing" : r.type),
                                        n = r && r.target && r.target.src;
                                    d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                                }
                            }), "chunk-" + t, t)
                        }
                    };
                    var t = (t, r) => {
                            var a, o, n = r[0],
                                d = r[1],
                                f = r[2],
                                i = 0;
                            if (n.some((t => 0 !== e[t]))) {
                                for (a in d) l.o(d, a) && (l.m[a] = d[a]);
                                f && f(l)
                            }
                            for (t && t(r); i < n.length; i++) o = n[i], l.o(e, o) && e[o] && e[o][0](), e[o] = 0
                        },
                        r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })(), l.nc = void 0, l(2160), l(2609)
            })())
        }
    }
}));
//# sourceMappingURL=remote-entry.js.map