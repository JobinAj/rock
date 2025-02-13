/*! For license information please see 93b082e311e2cc90a6aafcfcf111f20e.js.LICENSE.txt */ ! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "970e4fd1-2c54-428b-ad87-3ff616210503", e._sentryDebugIdIdentifier = "sentry-dbid-970e4fd1-2c54-428b-ad87-3ff616210503")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/tina",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
    [235], {
        6516: (e, t, r) => {
            var n = r(1403),
                a = Symbol.for("react.element"),
                l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
                o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                d = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function s(e, t, r) {
                var n, s = {},
                    u = null,
                    f = null;
                for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) l.call(t, n) && !d.hasOwnProperty(n) && (s[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
                return {
                    $$typeof: a,
                    type: e,
                    key: u,
                    ref: f,
                    props: s,
                    _owner: o.current
                }
            }
            t.jsx = s, t.jsxs = s
        },
        6632: (e, t, r) => {
            e.exports = r(6516)
        },
        881: (e, t, r) => {
            r.d(t, {
                i: () => s,
                o: () => d
            });
            var n = r(1403),
                a = r(6632);
            const l = (0, n.createContext)(),
                {
                    Provider: o
                } = l,
                d = e => {
                    let {
                        children: t,
                        payload: r
                    } = e;
                    return (0, a.jsx)(o, {
                        value: r,
                        children: t
                    })
                },
                s = () => (0, n.useContext)(l)
        },
        8235: (e, t, r) => {
            r.r(t), r.d(t, {
                parse: () => f,
                previewSrc: () => i,
                uploadDir: () => c,
                useGenerateCdnSource: () => u,
                useGetCdnSource: () => s,
                useImageParser: () => d
            });
            var n = r(1403),
                a = r(2756),
                l = r(881);
            const o = e => {
                    if (!e) return null;
                    const {
                        hostname: t,
                        pathname: r
                    } = new URL(e, (0, a.getCdnPrefix)(!0));
                    return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
                },
                d = e => {
                    let {
                        alt: t = null,
                        mobile: r = null,
                        desktop: d = null,
                        ariaLabel: s = null,
                        sources: u = null,
                        prod: f = null
                    } = e;
                    const i = (0, a.useLocale)(),
                        {
                            meta: c = {}
                        } = (0, l.i)() ? ? {},
                        [p, _] = (0, n.useState)(f ? ? c ? .cdn ? ? c ? .prod ? ? !0);
                    (0, n.useEffect)((() => {
                        _(f ? ? c ? .cdn ? ? c ? .prod ? ? !0)
                    }), [f, c]);
                    const b = (0, n.useCallback)((e => {
                        const t = null !== u,
                            r = e ? .previewSrc ? ? e ? ? null;
                        if (null === r || "string" != typeof r) return null;
                        if (r.startsWith("http")) return o(r);
                        const n = `${t?(0,a.getCdnPrefix)(p):""}${r}`;
                        return o(n)
                    }), [p, u]);
                    return {
                        alt: t,
                        ariaLabel: s,
                        src: {
                            mobile: b(u ? .[i] ? .mobile ? ? u ? .en_us ? .mobile ? ? r),
                            desktop: b(u ? .[i] ? .desktop ? ? u ? .en_us ? .desktop ? ? d)
                        }
                    }
                },
                s = e => {
                    const {
                        meta: t = {}
                    } = (0, l.i)() ? ? {}, [r, d] = (0, n.useState)(t ? .cdn ? ? t ? .prod ? ? !1);
                    return (0, n.useEffect)((() => {
                        d(t ? .cdn ? ? t ? .prod ? ? !1)
                    }), [t]), null === e ? null : e ? .startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(r)}${e}`)
                },
                u = () => {
                    const {
                        meta: e = {}
                    } = (0, l.i)() ? ? {}, t = (0, n.useMemo)((() => e ? .cdn ? ? e ? .prod ? ? !1), [e]);
                    return (0, n.useCallback)((function(e) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const n = r ? .prod ? ? t;
                        return e ? e ? .startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(n)}${e}`) : null
                    }), [t])
                },
                f = e => e.full_src,
                i = e => {
                    const t = e ? .previewSrc ? ? e ? .preview_src ? ? e;
                    return t ? .startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
                },
                c = e => e.meta.uploads_directory
        }
    }
]);
//# sourceMappingURL=93b082e311e2cc90a6aafcfcf111f20e.js.map