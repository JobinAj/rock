! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "97ff2d09-53ad-4c80-a8ea-c9a12cf67872", e._sentryDebugIdIdentifier = "sentry-dbid-97ff2d09-53ad-4c80-a8ea-c9a12cf67872")
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
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
    [868, 839], {
        6868: (e, n, t) => {
            t.r(n), t.d(n, {
                RemoveScroll: () => X
            });
            var r = t(226),
                o = t(1403),
                a = "right-scroll-bar-position",
                c = "width-before-scroll-bar",
                i = t(6208),
                l = (0, t(3496).f)(),
                d = function() {},
                u = o.forwardRef((function(e, n) {
                    var t = o.useRef(null),
                        a = o.useState({
                            onScrollCapture: d,
                            onWheelCapture: d,
                            onTouchMoveCapture: d
                        }),
                        c = a[0],
                        u = a[1],
                        s = e.forwardProps,
                        f = e.children,
                        h = e.className,
                        v = e.removeScrollBar,
                        p = e.enabled,
                        g = e.shards,
                        m = e.sideCar,
                        w = e.noIsolation,
                        b = e.inert,
                        y = e.allowPinchZoom,
                        C = e.as,
                        E = void 0 === C ? "div" : C,
                        k = e.gapMode,
                        S = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        R = m,
                        M = (0, i.S)([t, n]),
                        _ = (0, r.Cl)((0, r.Cl)({}, S), c);
                    return o.createElement(o.Fragment, null, p && o.createElement(R, {
                        sideCar: l,
                        removeScrollBar: v,
                        shards: g,
                        noIsolation: w,
                        inert: b,
                        setCallbacks: u,
                        allowPinchZoom: !!y,
                        lockRef: t,
                        gapMode: k
                    }), s ? o.cloneElement(o.Children.only(f), (0, r.Cl)((0, r.Cl)({}, _), {
                        ref: M
                    })) : o.createElement(E, (0, r.Cl)({}, _, {
                        className: h,
                        ref: M
                    }), f))
                }));
            u.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, u.classNames = {
                fullWidth: c,
                zeroRight: a
            };
            var s = function(e) {
                var n = e.sideCar,
                    t = (0, r.Tt)(e, ["sideCar"]);
                if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                var a = n.read();
                if (!a) throw new Error("Sidecar medium not found");
                return o.createElement(a, (0, r.Cl)({}, t))
            };
            s.isSideCarExport = !0;
            var f = function() {
                    var e = 0,
                        n = null;
                    return {
                        add: function(r) {
                            var o, a;
                            0 == e && (n = function() {
                                if (!document) return null;
                                var e = document.createElement("style");
                                e.type = "text/css";
                                var n = t.nc;
                                return n && e.setAttribute("nonce", n), e
                            }()) && (a = r, (o = n).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                            }(n)), e++
                        },
                        remove: function() {
                            !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                h = function() {
                    var e, n = (e = f(), function(n, t) {
                        o.useEffect((function() {
                            return e.add(n),
                                function() {
                                    e.remove()
                                }
                        }), [n && t])
                    });
                    return function(e) {
                        var t = e.styles,
                            r = e.dynamic;
                        return n(t, r), null
                    }
                },
                v = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                p = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                g = h(),
                m = function(e, n, t, r) {
                    var o = e.left,
                        i = e.top,
                        l = e.right,
                        d = e.gap;
                    return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(d, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(d, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(d, "px;\n  }\n")
                },
                w = function(e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        r = e.gapMode,
                        a = void 0 === r ? "margin" : r,
                        c = o.useMemo((function() {
                            return function(e) {
                                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return v;
                                var n = function(e) {
                                        var n = window.getComputedStyle(document.body),
                                            t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                                            r = n["padding" === e ? "paddingTop" : "marginTop"],
                                            o = n["padding" === e ? "paddingRight" : "marginRight"];
                                        return [p(t), p(r), p(o)]
                                    }(e),
                                    t = document.documentElement.clientWidth,
                                    r = window.innerWidth;
                                return {
                                    left: n[0],
                                    top: n[1],
                                    right: n[2],
                                    gap: Math.max(0, r - t + n[2] - n[0])
                                }
                            }(a)
                        }), [a]);
                    return o.createElement(g, {
                        styles: m(c, !n, a, t ? "" : "!important")
                    })
                },
                b = !1;
            if ("undefined" != typeof window) try {
                var y = Object.defineProperty({}, "passive", {
                    get: function() {
                        return b = !0, !0
                    }
                });
                window.addEventListener("test", y, y), window.removeEventListener("test", y, y)
            } catch (e) {
                b = !1
            }
            var C = !!b && {
                    passive: !1
                },
                E = function(e, n) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
                        return "TEXTAREA" === e.tagName
                    }(e) && "visible" === t[n])
                },
                k = function(e, n) {
                    var t = n.ownerDocument,
                        r = n;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), S(e, r)) {
                            var o = R(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== t.body);
                    return !1
                },
                S = function(e, n) {
                    return "v" === e ? function(e) {
                        return E(e, "overflowY")
                    }(n) : function(e) {
                        return E(e, "overflowX")
                    }(n)
                },
                R = function(e, n) {
                    return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
                        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
                    }(n);
                    var t
                },
                M = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                _ = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                T = function(e) {
                    return e && "current" in e ? e.current : e
                },
                L = function(e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
                },
                N = 0,
                x = [];

            function I(e) {
                for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
                return n
            }
            const P = (l.useMedium((function(e) {
                var n = o.useRef([]),
                    t = o.useRef([0, 0]),
                    a = o.useRef(),
                    c = o.useState(N++)[0],
                    i = o.useState(h)[0],
                    l = o.useRef(e);
                o.useEffect((function() {
                    l.current = e
                }), [e]), o.useEffect((function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(c));
                        var n = (0, r.fX)([e.lockRef.current], (e.shards || []).map(T), !0).filter(Boolean);
                        return n.forEach((function(e) {
                                return e.classList.add("allow-interactivity-".concat(c))
                            })),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(c)), n.forEach((function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(c))
                                }))
                            }
                    }
                }), [e.inert, e.lockRef.current, e.shards]);
                var d = o.useCallback((function(e, n) {
                        if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
                        var r, o = M(e),
                            c = t.current,
                            i = "deltaX" in e ? e.deltaX : c[0] - o[0],
                            d = "deltaY" in e ? e.deltaY : c[1] - o[1],
                            u = e.target,
                            s = Math.abs(i) > Math.abs(d) ? "h" : "v";
                        if ("touches" in e && "h" === s && "range" === u.type) return !1;
                        var f = k(s, u);
                        if (!f) return !0;
                        if (f ? r = s : (r = "v" === s ? "h" : "v", f = k(s, u)), !f) return !1;
                        if (!a.current && "changedTouches" in e && (i || d) && (a.current = r), !r) return !0;
                        var h = a.current || r;
                        return function(e, n, t, r, o) {
                            var a = function(e, n) {
                                    return "h" === e && "rtl" === n ? -1 : 1
                                }(e, window.getComputedStyle(n).direction),
                                c = a * r,
                                i = t.target,
                                l = n.contains(i),
                                d = !1,
                                u = c > 0,
                                s = 0,
                                f = 0;
                            do {
                                var h = R(e, i),
                                    v = h[0],
                                    p = h[1] - h[2] - a * v;
                                (v || p) && S(e, i) && (s += p, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
                            } while (!l && i !== document.body || l && (n.contains(i) || n === i));
                            return (u && (o && Math.abs(s) < 1 || !o && c > s) || !u && (o && Math.abs(f) < 1 || !o && -c > f)) && (d = !0), d
                        }(h, n, e, "h" === h ? i : d, !0)
                    }), []),
                    u = o.useCallback((function(e) {
                        var t = e;
                        if (x.length && x[x.length - 1] === i) {
                            var r = "deltaY" in t ? _(t) : M(t),
                                o = n.current.filter((function(e) {
                                    return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                                    var n, o
                                }))[0];
                            if (o && o.should) t.cancelable && t.preventDefault();
                            else if (!o) {
                                var a = (l.current.shards || []).map(T).filter(Boolean).filter((function(e) {
                                    return e.contains(t.target)
                                }));
                                (a.length > 0 ? d(t, a[0]) : !l.current.noIsolation) && t.cancelable && t.preventDefault()
                            }
                        }
                    }), []),
                    s = o.useCallback((function(e, t, r, o) {
                        var a = {
                            name: e,
                            delta: t,
                            target: r,
                            should: o,
                            shadowParent: I(r)
                        };
                        n.current.push(a), setTimeout((function() {
                            n.current = n.current.filter((function(e) {
                                return e !== a
                            }))
                        }), 1)
                    }), []),
                    f = o.useCallback((function(e) {
                        t.current = M(e), a.current = void 0
                    }), []),
                    v = o.useCallback((function(n) {
                        s(n.type, _(n), n.target, d(n, e.lockRef.current))
                    }), []),
                    p = o.useCallback((function(n) {
                        s(n.type, M(n), n.target, d(n, e.lockRef.current))
                    }), []);
                o.useEffect((function() {
                    return x.push(i), e.setCallbacks({
                            onScrollCapture: v,
                            onWheelCapture: v,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", u, C), document.addEventListener("touchmove", u, C), document.addEventListener("touchstart", f, C),
                        function() {
                            x = x.filter((function(e) {
                                return e !== i
                            })), document.removeEventListener("wheel", u, C), document.removeEventListener("touchmove", u, C), document.removeEventListener("touchstart", f, C)
                        }
                }), []);
                var g = e.removeScrollBar,
                    m = e.inert;
                return o.createElement(o.Fragment, null, m ? o.createElement(i, {
                    styles: L(c)
                }) : null, g ? o.createElement(w, {
                    gapMode: e.gapMode
                }) : null)
            })), s);
            var B = o.forwardRef((function(e, n) {
                return o.createElement(u, (0, r.Cl)({}, e, {
                    ref: n,
                    sideCar: P
                }))
            }));
            B.classNames = u.classNames;
            const X = B
        }
    }
]);
//# sourceMappingURL=797b95f9c591c412bdf26c1373887186.js.map