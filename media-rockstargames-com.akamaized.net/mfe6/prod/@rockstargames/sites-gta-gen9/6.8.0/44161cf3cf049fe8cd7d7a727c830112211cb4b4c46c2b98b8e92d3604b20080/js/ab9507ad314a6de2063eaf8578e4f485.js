! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "52202a46-5abe-44c3-b72a-a649bcda1332", e._sentryDebugIdIdentifier = "sentry-dbid-52202a46-5abe-44c3-b72a-a649bcda1332")
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
    [4876, 2495], {
        42495: (e, a, s) => {
            s.r(a), s.d(a, {
                default: () => h
            });
            var t = s(26371),
                l = s(8999),
                i = s(21450);
            const r = {
                padding: "rockstargames-sites-gta-gen9f7c6c7f374a964c878d2d276e933ee0b",
                carouselWrapper: "rockstargames-sites-gta-gen9ea6dc08aea9d51a8db44ed608c891705",
                carouselTitle: "rockstargames-sites-gta-gen9eeecd14725803dea4b8848410b644b27"
            };
            var d = s(46632);
            const n = e => {
                    let {
                        to: a,
                        children: s
                    } = e;
                    return a ? (0, d.jsx)("a", {
                        href: a,
                        target: "_blank",
                        children: s
                    }) : s
                },
                c = e => {
                    let {
                        items: a = [],
                        text: s = {},
                        style: c,
                        className: o = "",
                        id: g = null
                    } = e;
                    return a ? .length ? (0, d.jsxs)("div", {
                        id: g,
                        "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
                        children: [(0, d.jsx)(i.A, {
                            style: c,
                            className: [o, r.carouselWrapper].join(" "),
                            children: a.map((e => (0, d.jsxs)("div", {
                                id: e ? .id ? ? null,
                                children: [(0, d.jsx)(l.A, {
                                    image: e ? .image,
                                    badge: e ? .badge ? ? e ? .image ? .badge,
                                    badgeType: "badge3",
                                    role: e ? .role ? ? e ? .image ? .role,
                                    splitter: e ? .splitter ? ? e ? .image ? .splitter,
                                    type: e ? .type,
                                    ariaLabel: e ? .image ? .ariaLabel ? ? e.description,
                                    style: e ? .style,
                                    className: [r.img, e ? .className].join(" ")
                                }), e.title && (0, d.jsx)(n, {
                                    to: e ? .to,
                                    children: (0, d.jsx)("h4", {
                                        className: r.carouselTitle,
                                        children: e.title
                                    })
                                }), e.description && (0, d.jsx)("span", {
                                    className: r.description,
                                    dangerouslySetInnerHTML: {
                                        __html: e.description
                                    }
                                })]
                            }, e ? .key ? ? e ? .title)))
                        }), s ? .title || s ? .description ? (0, d.jsx)("div", {
                            className: r.padding,
                            style: s ? .style ? ? {},
                            children: (0, d.jsx)(t.A, {
                                item: s
                            })
                        }) : ""]
                    }) : null
                };
            var o = s(14522),
                g = s(31879),
                m = s.n(g),
                b = s(74401);
            const f = e => {
                    let {
                        impressionTracking: a,
                        gtm: s = {},
                        children: t
                    } = e;
                    return a ? .shouldTrack ? (0, d.jsx)(o.H, {
                        threshold: a ? .threshold,
                        gtm: s,
                        children: t
                    }) : t
                },
                u = e => {
                    let {
                        to: a,
                        children: s
                    } = e;
                    return a ? (0, d.jsx)("a", {
                        href: a,
                        target: "_blank",
                        rel: "noreferrer",
                        children: s
                    }) : s
                },
                p = e => {
                    let {
                        item: a
                    } = e;
                    return a ? .videoId ? (0, d.jsx)(m(), {
                        context: "site",
                        autoplay: !1,
                        id: a.videoId
                    }) : (0, d.jsx)(l.A, {
                        image: a ? .image,
                        badge: a ? .badge ? ? a ? .image ? .badge,
                        badgeType: "badge3",
                        role: a ? .role ? ? a ? .image ? .role,
                        splitter: a ? .splitter ? ? a ? .image ? .splitter,
                        ariaLabel: a ? .image ? .ariaLabel,
                        style: a ? .style,
                        className: a ? .className
                    })
                },
                y = e => {
                    let {
                        items: a,
                        style: s = {},
                        className: l = "",
                        id: i = null
                    } = e;
                    return (0, d.jsx)("div", {
                        style: s,
                        className: (0, b.classList)("rockstargames-sites-gta-gen9c84f82c9ba8b58c3cfcc3834228a96d7", l),
                        id: i,
                        "data-testid": "standard-group-of-items",
                        children: a.map((e => (0, d.jsx)(f, {
                            impressionTracking: e ? .impressionTracking,
                            gtm: e ? .gtm,
                            children: (0, d.jsx)(u, {
                                to: e ? .to,
                                children: (0, d.jsxs)("div", {
                                    className: (0, b.classList)("rockstargames-sites-gta-gen9ea3df4f9076c3f017962a018b926c3e0", e.className),
                                    style: e ? .style ? ? {},
                                    ...e ? .props,
                                    children : [e ? .image || e ? .videoId ? (0, d.jsx)(p, {
                                        item: e
                                    }) : "", e.title || e.description ? (0, d.jsx)(t.A, {
                                        item: e,
                                        className: "rockstargames-sites-gta-gen9e9ece151c1b5c70da591c9192e29ef50"
                                    }) : ""]
                                })
                            })
                        }, e.key)))
                    })
                },
                h = e => {
                    let {
                        children: a = null,
                        text: s = {},
                        items: t = [],
                        renderTemplate: l = "",
                        style: i = {},
                        id: r = null,
                        ...n
                    } = e;
                    if (!t.length) return null;
                    switch (l) {
                        case "carousel":
                            return (0, d.jsx)(c, {
                                text: s,
                                items: t,
                                style: i,
                                id: r,
                                children: a
                            });
                        case "carousel-panorama":
                            return (0, d.jsx)(c, {
                                text: s,
                                items: t,
                                style: i,
                                className: "panorama",
                                id: r,
                                children: a
                            });
                        default:
                            return (0, d.jsx)(y, {
                                items: t,
                                style: i,
                                id: r,
                                ...n,
                                children: a
                            })
                    }
                }
        }
    }
]);
//# sourceMappingURL=ab9507ad314a6de2063eaf8578e4f485.js.map