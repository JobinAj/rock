! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "91a08446-c6c3-49c7-906f-2830cdb120a9", e._sentryDebugIdIdentifier = "sentry-dbid-91a08446-c6c3-49c7-906f-2830cdb120a9")
    } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
    release: "cb2dd0d1b6701c87689739b206bdc90a1c3cf8d8",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "cb2dd0d1b6701c87689739b206bdc90a1c3cf8d8"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
    [7977], {
        89269: (e, a, t) => {
            "use strict";
            var n = t(17254);

            function o() {}

            function r() {}
            r.resetWarningCache = o, e.exports = function() {
                function e(e, a, t, o, r, s) {
                    if (s !== n) {
                        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw d.name = "Invariant Violation", d
                    }
                }

                function a() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: a,
                    element: e,
                    elementType: e,
                    instanceOf: a,
                    node: e,
                    objectOf: a,
                    oneOf: a,
                    oneOfType: a,
                    shape: a,
                    exact: a,
                    checkPropTypes: r,
                    resetWarningCache: o
                };
                return t.PropTypes = t, t
            }
        },
        37977: (e, a, t) => {
            e.exports = t(89269)()
        },
        17254: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
    }
]);
//# sourceMappingURL=8d210c76c4118ad9671fa6708996fc58.js.map