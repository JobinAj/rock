! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "194d31e0-c010-4a88-a9a6-55961b962acd", e._sentryDebugIdIdentifier = "sentry-dbid-194d31e0-c010-4a88-a9a6-55961b962acd")
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
    [6677], {
        26677: (e, a, n) => {
            function d() {
                return d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var n = arguments[a];
                        for (var d in n) Object.prototype.hasOwnProperty.call(n, d) && (e[d] = n[d])
                    }
                    return e
                }, d.apply(this, arguments)
            }
            n.d(a, {
                A: () => d
            })
        }
    }
]);
//# sourceMappingURL=72727b2e06c60ec09240a98ced5531b7.js.map