! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e2a56571-0a8d-42ff-855d-b9dd4929ca5c", e._sentryDebugIdIdentifier = "sentry-dbid-e2a56571-0a8d-42ff-855d-b9dd4929ca5c")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6",
    packageName: "@rockstargames/utils",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ef47abb2a0fa42fea0a9985c3dc0a7579dd736f6"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
    [961], {
        9961: (e, a, t) => {
            t.r(a), t.d(a, {
                sha1: () => n,
                sha256: () => o,
                sha384: () => s,
                sha512: () => l
            });
            const d = e => async function(a) {
                    let {
                        outputFormat: t = "hex"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "string" == typeof a && (a = (new globalThis.TextEncoder).encode(a));
                    const d = await globalThis.crypto.subtle.digest(e, a);
                    return "hex" === t ? (e => {
                        const a = new DataView(e);
                        let t = "";
                        for (let e = 0; e < a.byteLength; e += 4) t += a.getUint32(e).toString(16).padStart(8, "0");
                        return t
                    })(d) : d
                },
                n = d("SHA-1"),
                o = d("SHA-256"),
                s = d("SHA-384"),
                l = d("SHA-512")
        }
    }
]);
//# sourceMappingURL=c1a61faa60fa849f0db98d1d1a04774e.js.map