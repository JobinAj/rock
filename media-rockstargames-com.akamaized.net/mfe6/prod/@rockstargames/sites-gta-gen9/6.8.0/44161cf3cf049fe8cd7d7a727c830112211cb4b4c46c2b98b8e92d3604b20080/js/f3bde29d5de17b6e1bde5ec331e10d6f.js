! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "662c7060-b1cd-4bc9-b0b8-58e27b0a1e50", e._sentryDebugIdIdentifier = "sentry-dbid-662c7060-b1cd-4bc9-b0b8-58e27b0a1e50")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
    [3025], {
        67366: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                i = p(n(71403)),
                a = p(n(37977)),
                u = p(n(52696)),
                s = p(n(51901)),
                l = p(n(66785)),
                c = p(n(28512)),
                f = p(n(54518)),
                d = n(75923);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e, t) {
                return e.scrollWidth - 1 <= t
            }

            function y(e, t) {
                return e.scrollHeight - 1 <= t
            }
            var g = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        fontSize: null,
                        ready: !1
                    }, n.handleWindowResize = function() {
                        n.process()
                    }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), n.handleWindowResize = (0, c.default)(n.handleWindowResize, e.throttle), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), o(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.state.ready && ((0, u.default)(this.props, e) || this.process())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, f.default)()
                    }
                }, {
                    key: "process",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.min,
                            r = t.max,
                            o = t.mode,
                            i = t.forceSingleModeWidth,
                            a = t.onReady,
                            u = this._parent,
                            c = this._child,
                            p = (0, d.innerWidth)(u),
                            g = (0, d.innerHeight)(u);
                        if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
                        else if (p <= 0 || isNaN(p)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
                        else {
                            var m = (0, f.default)();
                            this.pid = m;
                            var b = function() {
                                    return m !== e.pid
                                },
                                v = "multi" === o ? function() {
                                    return y(c, g)
                                } : function() {
                                    return h(c, p)
                                },
                                w = "multi" === o ? function() {
                                    return h(c, p)
                                } : function() {
                                    return y(c, g)
                                },
                                _ = void 0,
                                O = n,
                                T = r;
                            this.setState({
                                ready: !1
                            }), (0, s.default)([function(t) {
                                return (0, l.default)((function() {
                                    return O <= T
                                }), (function(t) {
                                    if (b()) return t(!0);
                                    _ = parseInt((O + T) / 2, 10), e.setState({
                                        fontSize: _
                                    }, (function() {
                                        return b() ? t(!0) : (v() ? O = _ + 1 : T = _ - 1, t())
                                    }))
                                }), t)
                            }, function(t) {
                                return "single" === o && i || w() ? t() : (O = n, T = _, (0, l.default)((function() {
                                    return O < T
                                }), (function(t) {
                                    if (b()) return t(!0);
                                    _ = parseInt((O + T) / 2, 10), e.setState({
                                        fontSize: _
                                    }, (function() {
                                        return m !== e.pid ? t(!0) : (w() ? O = _ + 1 : T = _ - 1, t())
                                    }))
                                }), t))
                            }, function(t) {
                                if (_ = Math.min(O, T), _ = Math.max(_, n), _ = Math.min(_, r), _ = Math.max(_, 0), b()) return t(!0);
                                e.setState({
                                    fontSize: _
                                }, t)
                            }], (function(t) {
                                t || b() || e.setState({
                                    ready: !0
                                }, (function() {
                                    return a(_)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            o = t.text,
                            a = t.style,
                            u = (t.min, t.max, t.mode),
                            s = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                                var n = {};
                                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                                return n
                            }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
                            l = this.state,
                            c = l.fontSize,
                            f = l.ready,
                            d = r({}, a, {
                                fontSize: c
                            }),
                            p = {
                                display: f ? "block" : "inline-block"
                            };
                        return "single" === u && (p.whiteSpace = "nowrap"), i.default.createElement("div", r({
                            ref: function(t) {
                                return e._parent = t
                            },
                            style: d
                        }, s), i.default.createElement("div", {
                            ref: function(t) {
                                return e._child = t
                            },
                            style: p
                        }, o && "function" == typeof n ? f ? n(o) : o : n))
                    }
                }]), t
            }(i.default.Component);
            g.propTypes = {
                children: a.default.node,
                text: a.default.string,
                min: a.default.number,
                max: a.default.number,
                mode: a.default.oneOf(["single", "multi"]),
                forceSingleModeWidth: a.default.bool,
                throttle: a.default.number,
                onReady: a.default.func
            }, g.defaultProps = {
                min: 1,
                max: 100,
                mode: "multi",
                forceSingleModeWidth: !0,
                throttle: 50,
                autoResize: !0,
                onReady: function() {}
            }, t.default = g
        },
        64544: (e, t, n) => {
            "use strict";
            t.zb = void 0;
            var r, o = (r = n(67366)) && r.__esModule ? r : {
                default: r
            };
            t.zb = o.default, o.default
        },
        75923: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.innerHeight = function(e) {
                var t = window.getComputedStyle(e, null);
                return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
            }, t.innerWidth = function(e) {
                var t = window.getComputedStyle(e, null);
                return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
            }
        },
        51901: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = [],
                    r = 0,
                    i = !0;

                function a(e) {
                    function r() {
                        t && t(e, n)
                    }
                    i ? o.default.nextTick(r) : r()
                }
                e.length > 0 ? e[0]((function t(o, i) {
                    n.push(i), ++r >= e.length || o ? a(o) : e[r](t)
                })) : a(null), i = !1
            };
            var r, o = (r = n(90098)) && r.__esModule ? r : {
                default: r
            }
        },
        52696: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if (e === t) return !0;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (var o = Object.prototype.hasOwnProperty, i = 0; i < n.length; i++)
                    if (!o.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
                return !0
            }
        },
        28512: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = void 0,
                    r = void 0,
                    o = void 0,
                    i = void 0,
                    a = 0;

                function u() {
                    i = 0, a = +new Date, o = e.apply(n, r), n = null, r = null
                }
                return function() {
                    n = this, r = arguments;
                    var e = new Date - a;
                    return i || (e >= t ? u() : i = setTimeout(u, t - e)), o
                }
            }
        },
        54518: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return n++
            };
            var n = 0
        },
        66785: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
                e() ? t((function n(o) {
                    for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) a[u - 1] = arguments[u];
                    o ? r(o) : e.apply(this, a) ? t(n) : r(null)
                })) : r(null)
            };
            var n = function() {}
        },
        90098: e => {
            var t, n, r = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    n = i
                }
            }();
            var u, s = [],
                l = !1,
                c = -1;

            function f() {
                l && u && (l = !1, u.length ? s = u.concat(s) : c = -1, s.length && d())
            }

            function d() {
                if (!l) {
                    var e = a(f);
                    l = !0;
                    for (var t = s.length; t;) {
                        for (u = s, s = []; ++c < t;) u && u[c].run();
                        c = -1, t = s.length
                    }
                    u = null, l = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                return n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function p(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                s.push(new p(e, t)), 1 !== s.length || l || a(d)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
                return []
            }, r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, r.cwd = function() {
                return "/"
            }, r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, r.umask = function() {
                return 0
            }
        },
        11650: (e, t, n) => {
            "use strict";
            var r = n(17254);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, i, a) {
                    if (a !== r) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        37977: (e, t, n) => {
            e.exports = n(11650)()
        },
        17254: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        41136: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            const r = {
                randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
            };
            let o;
            const i = new Uint8Array(16);

            function a() {
                if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !o)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return o(i)
            }
            const u = [];
            for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).slice(1));
            const s = function(e, t, n) {
                if (r.randomUUID && !t && !e) return r.randomUUID();
                const o = (e = e || {}).random || (e.rng || a)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                    return t
                }
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]
                }(o)
            }
        }
    }
]);
//# sourceMappingURL=f3bde29d5de17b6e1bde5ec331e10d6f.js.map