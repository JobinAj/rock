! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f92cdce7-158e-4f3c-9096-3e6d6166905e", e._sentryDebugIdIdentifier = "sentry-dbid-f92cdce7-158e-4f3c-9096-3e6d6166905e")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/graph-client",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
    [108], {
        3108: (e, a, d) => {
            d.r(a), d.d(a, {
                base: () => u,
                cdn: () => l,
                locale: () => t,
                useBase: () => g,
                useCdn: () => r,
                useLocale: () => o
            });
            var n = d(7264);
            const t = (0, n.makeVar)(document.documentElement.lang),
                o = () => (0, n.useReactiveVar)(t),
                s = window ? .env,
                l = (0, n.makeVar)({
                    media: s ? .cdn ? .media,
                    videos: s ? .cdn ? .videos
                }),
                r = () => (0, n.useReactiveVar)(l),
                c = document.currentScript,
                f = c ? .src ? new URL(c.src).origin : "";
            let i = document.getElementsByTagName("base")[0] ? .getAttribute("href") ? ? `${f}/`;
            i.endsWith("/") || (i = `${i}/`);
            const u = (0, n.makeVar)(i),
                g = () => (0, n.useReactiveVar)(u)
        }
    }
]);
//# sourceMappingURL=69bc9269c5335e31f11ab560ff730164.js.map