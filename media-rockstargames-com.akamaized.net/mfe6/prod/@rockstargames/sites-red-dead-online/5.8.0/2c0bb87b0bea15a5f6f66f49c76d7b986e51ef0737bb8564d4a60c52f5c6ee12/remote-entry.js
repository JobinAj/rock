! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b7a9c270-10fc-48a6-a896-15cf071e251d", e._sentryDebugIdIdentifier = "sentry-dbid-b7a9c270-10fc-48a6-a896-15cf071e251d")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
    var r = {},
        a = {},
        o = {},
        n = {},
        s = {},
        i = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(o, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "__esModule", {
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
        }, function(e) {
            Object.keys(e).forEach((function(t) {
                s[t] = e[t]
            }))
        }, function(e) {
            Object.keys(e).forEach((function(t) {
                i[t] = e[t]
            }))
        }],
        execute: function() {
            e((() => {
                var e, d, f, l, c = {
                        6539: (e, t, r) => {
                            (0, r(13403).w)(1)
                        },
                        13403: (e, t, r) => {
                            const a = r(75659).y;
                            t.w = function(e) {
                                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                                r.p = a(r.y.meta.url, e)
                            }
                        },
                        32160: (e, t, r) => {
                            r(6539)
                        },
                        75659: (e, t, r) => {
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
                        41140: (e, t, r) => {
                            "use strict";
                            var a = {
                                    "./index": () => Promise.all([r.e(435), r.e(403), r.e(828), r.e(516), r.e(26)]).then((() => () => r(11026)))
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
                        61024: e => {
                            "use strict";
                            e.exports = r
                        },
                        66819: e => {
                            "use strict";
                            e.exports = a
                        },
                        60404: e => {
                            "use strict";
                            e.exports = o
                        },
                        25136: e => {
                            "use strict";
                            e.exports = n
                        },
                        99466: e => {
                            "use strict";
                            e.exports = s
                        },
                        92969: e => {
                            "use strict";
                            e.exports = i
                        }
                    },
                    u = {};

                function p(e) {
                    var t = u[e];
                    if (void 0 !== t) return t.exports;
                    var r = u[e] = {
                        exports: {}
                    };
                    return c[e].call(r.exports, r, r.exports, p), r.exports
                }
                return p.m = c, p.c = u, p.y = t, p.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return p.d(t, {
                        a: t
                    }), t
                }, p.d = (e, t) => {
                    for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, r) => (p.f[r](e, t), t)), [])), p.u = e => "js/" + {
                    8: "feb5c627c924b8438d67f4d9cc69a734",
                    26: "bf555d6cd54711e606d347ac1c628219",
                    28: "2be7ee7a17554bd1048983f28d735db2",
                    66: "9e2f032104c1b7c9c9afbd0ec40fd7aa",
                    105: "b5d9b613c8ae48a379f221c6e73c8b6d",
                    143: "7d07f553753fb0273adab47f632f1582",
                    173: "7cf1369a526f31e13681a5a9c84652c1",
                    180: "b009cd6fe0b486b34413f8b7202baee2",
                    261: "3dd00009c471fecefc3050669eb4293e",
                    380: "23b70cb68f72ee8787d911864a0c6d1b",
                    403: "372493411d1617771216b2bad646e784",
                    435: "1afc7add08c85b69aee34e28a905fe73",
                    451: "9bb1b1f352e6fb06bdcb7a740b7024ac",
                    471: "bf6366cad56453671eda7fa64b0da69d",
                    516: "2c9bb6fa5536a9b968d050e7af4ddcf0",
                    524: "d23c046a6fb0b60012d3d145843135bc",
                    730: "72acc66f289803151dbfa4d86f9a4356",
                    828: "be90a4a05bb4c8b86d050756b69ffe66",
                    852: "621b3fc26a4753790cd531b2aadb0b2b",
                    977: "80b41c22630c6f5ce0dcff7d53c12882"
                }[e] + ".js", p.miniCssF = e => "css/" + {
                    26: "a65d62bbf2b362e627c364a7a624aa29",
                    471: "883088bdc563779838a6137df3754da7",
                    852: "883088bdc563779838a6137df3754da7"
                }[e] + ".css", p.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, d = "@rockstargames/sites-red-dead-online:", p.l = (t, r, a, o) => {
                    if (e[t]) e[t].push(r);
                    else {
                        var n, s;
                        if (void 0 !== a)
                            for (var i = document.getElementsByTagName("script"), f = 0; f < i.length; f++) {
                                var l = i[f];
                                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == d + a) {
                                    n = l;
                                    break
                                }
                            }
                        n || (s = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, p.nc && n.setAttribute("nonce", p.nc), n.setAttribute("data-webpack", d + a), n.src = t), e[t] = [r];
                        var c = (r, a) => {
                                n.onerror = n.onload = null, clearTimeout(u);
                                var o = e[t];
                                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
                            },
                            u = setTimeout(c.bind(null, void 0, {
                                type: "timeout",
                                target: n
                            }), 12e4);
                        n.onerror = c.bind(null, n.onerror), n.onload = c.bind(null, n.onload), s && document.head.appendChild(n)
                    }
                }, p.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, f = {
                    26: [24550, 28089, 28300, 31879, 74401, 78417, 78722, 90588],
                    828: [40207, 42756, 58407]
                }, l = {
                    24550: ["default", "./operations/queries", 61024],
                    28089: ["default", "./helpers/uploads", 99466],
                    28300: ["default", "./operations/fragments/video2-fields.graphql", 61024],
                    31879: ["default", "./index", 25136],
                    40207: ["default", "./index", 60404],
                    42756: ["default", "./index", 92969],
                    58407: ["default", "./index", 61024],
                    74401: ["default", "./index", 99466],
                    78417: ["default", "./operations/fragments/paging.graphql", 61024],
                    78722: ["default", "./NewswireArticle", 66819],
                    90588: ["default", "./operations/fragments/newswire-post.graphql", 61024]
                }, p.f.remotes = (e, t) => {
                    p.o(f, e) && f[e].forEach((e => {
                        var r = p.R;
                        r || (r = []);
                        var a = l[e];
                        if (!(r.indexOf(a) >= 0)) {
                            if (r.push(a), a.p) return t.push(a.p);
                            var o = t => {
                                    t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                                        throw t
                                    }, a.p = 0
                                },
                                n = (e, r, n, s, i, d) => {
                                    try {
                                        var f = e(r, n);
                                        if (!f || !f.then) return i(f, s, d);
                                        var l = f.then((e => i(e, s)), o);
                                        if (!d) return l;
                                        t.push(a.p = l)
                                    } catch (e) {
                                        o(e)
                                    }
                                },
                                s = (e, t, o) => n(t.get, a[1], r, 0, i, o),
                                i = t => {
                                    a.p = 1, p.m[e] = e => {
                                        e.exports = t()
                                    }
                                };
                            n(p, a[2], 0, 0, ((e, t, r) => e ? n(p.I, a[0], 0, e, s, r) : o()), 1)
                        }
                    }))
                }, (() => {
                    p.S = {};
                    var e = {},
                        t = {};
                    p.I = (r, a) => {
                        a || (a = []);
                        var o = t[r];
                        if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
                            if (a.push(o), e[r]) return e[r];
                            p.o(p.S, r) || (p.S[r] = {});
                            var n = p.S[r],
                                s = "@rockstargames/sites-red-dead-online",
                                i = (e, t, r, a) => {
                                    var o = n[e] = n[e] || {},
                                        i = o[t];
                                    (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (o[t] = {
                                        get: r,
                                        from: s,
                                        eager: !!a
                                    })
                                },
                                d = e => {
                                    var t = e => {
                                        return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                                        var t
                                    };
                                    try {
                                        var o = p(e);
                                        if (!o) return;
                                        var n = e => e && e.init && e.init(p.S[r], a);
                                        if (o.then) return f.push(o.then(n, t));
                                        var s = n(o);
                                        if (s && s.then) return f.push(s.catch(t))
                                    } catch (e) {
                                        t(e)
                                    }
                                },
                                f = [];
                            return "default" === r && (i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(66), p.e(403), p.e(143)]).then((() => () => p(24143))))), i("@rockstargames/modules-core-feedback", "1.0.48", (() => Promise.all([p.e(403), p.e(828), p.e(730), p.e(852)]).then((() => () => p(8852))))), i("hammerjs", "2.0.8", (() => p.e(28).then((() => () => p(59028))))), i("prop-types", "15.8.1", (() => p.e(977).then((() => () => p(37977))))), i("react-focus-lock", "2.9.6", (() => Promise.all([p.e(173), p.e(403), p.e(516)]).then((() => () => p(42173))))), i("react-router-dom", "6.17.0", (() => Promise.all([p.e(261), p.e(180), p.e(403)]).then((() => () => p(22180))))), i("react-router-dom", "6.17.0", (() => Promise.all([p.e(261), p.e(105), p.e(8), p.e(403)]).then((() => () => p(76008))))), i("react-router-dom", "6.17.0", (() => Promise.all([p.e(261), p.e(105), p.e(451), p.e(403)]).then((() => () => p(4451))))), i("react", "18.2.0", (() => p.e(380).then((() => () => p(23380))))), d(61024), d(60404), d(92969), d(66819), d(25136), d(99466)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
                        }
                    }
                })(), (() => {
                    var e;
                    p.g.importScripts && (e = p.g.location + "");
                    var t = p.g.document;
                    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                        var r = t.getElementsByTagName("script");
                        if (r.length)
                            for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
                    }
                    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
                    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
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
                                for (var s = 0, i = 1, d = !0;; i++, s++) {
                                    var f, l, c = i < r.length ? (typeof r[i])[0] : "";
                                    if (s >= a.length || "o" == (l = (typeof(f = a[s]))[0])) return !d || ("u" == c ? i > o && !n : "" == c != n);
                                    if ("u" == l) {
                                        if (!d || "u" != c) return !1
                                    } else if (d)
                                        if (c == l)
                                            if (i <= o) {
                                                if (f != r[i]) return !1
                                            } else {
                                                if (n ? f > r[i] : f < r[i]) return !1;
                                                f != r[i] && (d = !1)
                                            }
                                    else if ("s" != c && "n" != c) {
                                        if (n || i <= o) return !1;
                                        d = !1, i--
                                    } else {
                                        if (i <= o || l < c != n) return !1;
                                        d = !1
                                    } else "s" != c && "n" != c && (d = !1, i--)
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
                            var n = p.I(t);
                            return n && n.then ? n.then(e.bind(e, t, p.S[t], r, a, o)) : e(t, p.S[t], r, a, o)
                        })(((e, t, a, o, n) => {
                            var s = t && p.o(t, a) && r(t, a, o);
                            return s ? (e => (e.loaded = 1, e.get()))(s) : n()
                        })),
                        o = {},
                        n = {
                            71403: () => a("default", "react", [1, 18, 2, 0], (() => p.e(380).then((() => () => p(23380))))),
                            96717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(66), p.e(524)]).then((() => () => p(24143))))),
                            39516: () => a("default", "prop-types", [1, 15, 8, 1], (() => p.e(977).then((() => () => p(37977))))),
                            42205: () => a("default", "@rockstargames/modules-core-feedback", [1, "workspace:*"], (() => Promise.all([p.e(730), p.e(471)]).then((() => () => p(8852))))),
                            56864: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => p.e(173).then((() => () => p(42173))))),
                            57172: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(261), p.e(105), p.e(451)]).then((() => () => p(4451))))),
                            60720: () => a("default", "hammerjs", [1, 2, 0, 8], (() => p.e(28).then((() => () => p(59028))))),
                            89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(261), p.e(105), p.e(8)]).then((() => () => p(76008))))),
                            15730: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(261), p.e(180)]).then((() => () => p(22180)))))
                        },
                        s = {
                            26: [42205, 56864, 57172, 60720, 89779],
                            403: [71403],
                            516: [39516],
                            730: [15730],
                            828: [96717]
                        },
                        i = {};
                    p.f.consumes = (e, t) => {
                        p.o(s, e) && s[e].forEach((e => {
                            if (p.o(o, e)) return t.push(o[e]);
                            if (!i[e]) {
                                var r = t => {
                                    o[e] = 0, p.m[e] = r => {
                                        delete p.c[e], r.exports = t()
                                    }
                                };
                                i[e] = !0;
                                var a = t => {
                                    delete o[e], p.m[e] = r => {
                                        throw delete p.c[e], t
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
                            129: 0
                        };
                        p.f.miniCss = (t, r) => {
                            e[t] ? r.push(e[t]) : 0 !== e[t] && {
                                26: 1,
                                471: 1,
                                852: 1
                            }[t] && r.push(e[t] = (e => new Promise(((t, r) => {
                                var a = p.miniCssF(e),
                                    o = p.p + a;
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
                                                d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                                            d.code = "CSS_CHUNK_LOAD_FAILED", d.type = s, d.request = i, n.parentNode && n.parentNode.removeChild(n), o(d)
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
                        129: 0
                    };
                    p.f.j = (t, r) => {
                        var a = p.o(e, t) ? e[t] : void 0;
                        if (0 !== a)
                            if (a) r.push(a[2]);
                            else if (/^(403|516|730|828)$/.test(t)) e[t] = 0;
                        else {
                            var o = new Promise(((r, o) => a = e[t] = [r, o]));
                            r.push(a[2] = o);
                            var n = p.p + p.u(t),
                                s = new Error;
                            p.l(n, (r => {
                                if (p.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                                d = 0;
                            if (n.some((t => 0 !== e[t]))) {
                                for (a in s) p.o(s, a) && (p.m[a] = s[a]);
                                i && i(p)
                            }
                            for (t && t(r); d < n.length; d++) o = n[d], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
                        },
                        r = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })(), p(32160), p(41140)
            })())
        }
    }
}));
//# sourceMappingURL=remote-entry.js.map