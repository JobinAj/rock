! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            o = (new Error).stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "865e617a-dd99-45ef-ae2f-26600cd5c2ec", e._sentryDebugIdIdentifier = "sentry-dbid-865e617a-dd99-45ef-ae2f-26600cd5c2ec")
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
}, (self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || []).push([
    [143], {
        143: (e, o, s) => {
            "use strict";
            s.r(o), s.d(o, {
                FormattedMessage: () => t.A,
                IntlProvider: () => l.Kq,
                POSIXLocales: () => c.FN,
                createDevLocaleHook: () => r.A,
                createIntl: () => n.E,
                defineMessages: () => a.YK,
                englishLocale: () => c.Vm,
                getCookieValueByName: () => u.h,
                getLocale: () => d.A,
                localeCookieHandler: () => u.A,
                locales: () => c.Ay,
                splitLocale: () => b.A,
                useIntl: () => i.A,
                withIntl: () => l.QY
            });
            var t = s(47),
                n = s(952),
                a = s(452),
                i = s(708),
                l = s(120),
                r = s(480),
                d = s(134),
                u = s(677),
                c = s(186),
                b = s(136),
                m = s(272),
                f = {};
            for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (f[e] = () => m[e]);
            s.d(o, f)
        },
        120: (e, o, s) => {
            "use strict";
            s.d(o, {
                Kq: () => r,
                QY: () => d
            });
            var t = s(380),
                n = s(71),
                a = s(134),
                i = s(136),
                l = s(632);
            const r = e => {
                let {
                    locales: o,
                    lang: s,
                    children: a
                } = e;
                const [r, d] = (0, t.useMemo)((() => (0, i.A)(s)), [s]), u = (0, t.useMemo)((() => function(e, o) {
                    return e ? .[o] ? ? {}
                }(o, d)), [s, o]);
                return (0, l.jsx)(n.A, {
                    messages: u,
                    locale: r,
                    defaultLocale: "en",
                    children: a
                })
            };

            function d(e, o) {
                return s => {
                    const [{
                        iso: t
                    }] = (0, a.A)();
                    return (0, l.jsx)(r, {
                        locales: o,
                        lang: t,
                        children: (0, l.jsx)(e, { ...s
                        })
                    })
                }
            }
        },
        272: () => {},
        480: (e, o, s) => {
            "use strict";
            s.d(o, {
                A: () => a
            });
            var t = s(134),
                n = s(136);
            const a = e => {
                if (!e.us || 0 === Object.keys(e ? .us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
                return () => {
                    const [{
                        iso: o
                    }] = (0, t.A)(), [s, a] = (0, n.A)(o);
                    return e ? .[a] ? ? e.us
                }
            }
        },
        134: (e, o, s) => {
            "use strict";
            s.d(o, {
                A: () => i
            });
            const t = [{
                id: "prod",
                sites: {
                    www: "www",
                    socialClub: "socialclub",
                    support: "support",
                    store: "store"
                },
                cookieIdentifier: "prod"
            }];
            var n = s(677),
                a = s(186);
            const i = () => {
                const {
                    location: e
                } = window, o = (() => {
                    let e;
                    const {
                        location: o
                    } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = t.findIndex((o => Object.entries(o.sites).findIndex((o => {
                        let [t, n] = o;
                        return n === s && (e = {
                            site: t,
                            subDomain: n
                        }, !0)
                    })) >= 0)), a = t[n >= 0 ? n : 0];
                    return e || (e = {
                        site: "www",
                        subDomain: "local"
                    }), { ...a,
                        currentSite: e
                    }
                })(), s = (e => {
                    const o = a.Ay.map((e => e.subdomaincom)),
                        s = e.pathname.substring(1).split("/"),
                        t = "detect-locals" === s[0] ? 1 : 0;
                    return -1 !== o.indexOf(s[t]) ? s[t] : null
                })(e), i = (e => {
                    const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
                    return o ? .split("=")[1]
                })(e), l = a.Vm;
                let r = l;
                const d = `rockstarweb_lang.${o.cookieIdentifier}`,
                    u = (0, n.h)(d);
                r = "www" === o.currentSite ? .site ? a.Ay.find((e => e.subdomaincom === i)) || a.Ay.find((e => e.subdomaincom === s)) || l : a.Ay.find((e => e.iso === u)) || l;
                const [c, b] = (0, n.A)(d, r.iso);
                return [r, b]
            }
        },
        677: (e, o, s) => {
            "use strict";
            s.d(o, {
                A: () => i,
                h: () => a
            });
            const t = (e, o) => {
                    e && o ? document.cookie = `${e}=${o}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
                },
                n = () => {
                    const e = window.location.hostname.split(".");
                    return e.slice(e.length - 2).join(".")
                },
                a = e => {
                    const o = document.cookie.split("; "),
                        s = `${e}=`,
                        t = o.find((e => e.startsWith(s))),
                        n = t ? .substring(s.length, t.length);
                    return n
                },
                i = function(e, o) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const n = a(e);
                    return n && !s || t(e, o), [n, (i = e, e => {
                        t(i, e)
                    })];
                    var i
                }
        },
        186: (e, o, s) => {
            "use strict";
            s.d(o, {
                Ay: () => i,
                FN: () => a,
                Vm: () => n
            });
            const t = [{
                    label: "Deutsch",
                    subdomain: "de",
                    subdomaincom: "de",
                    support: "de",
                    iso: "de-DE"
                }, {
                    label: "English",
                    subdomain: "en-US",
                    subdomaincom: "en",
                    support: "us",
                    iso: "en-US"
                }, {
                    label: "Español",
                    subdomain: "es",
                    subdomaincom: "es",
                    support: "es",
                    iso: "es-ES"
                }, {
                    label: "Español Latinoamérica",
                    subdomain: "es-mx",
                    subdomaincom: "mx",
                    support: "es-mx",
                    iso: "es-MX"
                }, {
                    label: "Français",
                    subdomain: "fr",
                    subdomaincom: "fr",
                    support: "fr",
                    iso: "fr-FR"
                }, {
                    label: "Italiano",
                    subdomain: "it",
                    subdomaincom: "it",
                    support: "it",
                    iso: "it-IT"
                }, {
                    label: "日本語",
                    subdomain: "ja",
                    subdomaincom: "jp",
                    support: "jp",
                    iso: "ja-JP"
                }, {
                    label: "한국어",
                    subdomain: "ko",
                    subdomaincom: "kr",
                    support: "kr",
                    iso: "ko-KR"
                }, {
                    label: "Polski",
                    subdomain: "pl",
                    subdomaincom: "pl",
                    support: "pl",
                    iso: "pl-PL"
                }, {
                    label: "Português do Brasil",
                    subdomain: "pt",
                    subdomaincom: "br",
                    support: "br",
                    iso: "pt-BR"
                }, {
                    label: "Русский",
                    subdomain: "ru",
                    subdomaincom: "ru",
                    support: "ru",
                    iso: "ru-RU"
                }, {
                    label: "繁體中文",
                    subdomain: "zh",
                    subdomaincom: "tw",
                    support: "tw",
                    iso: "zh-TW"
                }, {
                    label: "简体中文",
                    subdomain: "zh-cn",
                    subdomaincom: "zh",
                    support: "zh",
                    iso: "zh-CN"
                }],
                n = t[1],
                a = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
                i = t
        },
        136: (e, o, s) => {
            "use strict";

            function t(e) {
                let [o, s] = e.split(/[-_]/), t = s ? .toLowerCase();
                return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
            }
            s.d(o, {
                A: () => t
            })
        }
    }
]);
//# sourceMappingURL=7ec2f937b909024909b2eb4c9010828f.js.map