! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = (new Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "798ae08d-c7a4-4310-8aa0-a0adf9bdbe2a", e._sentryDebugIdIdentifier = "sentry-dbid-798ae08d-c7a4-4310-8aa0-a0adf9bdbe2a")
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
    [327], {
        7327: e => {
            var r = function(e) {
                    return function(e) {
                        return !!e && "object" == typeof e
                    }(e) && ! function(e) {
                        var r = Object.prototype.toString.call(e);
                        return "[object RegExp]" === r || "[object Date]" === r || function(e) {
                            return e.$$typeof === t
                        }(e)
                    }(e)
                },
                t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function n(e, r) {
                return !1 !== r.clone && r.isMergeableObject(e) ? c((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
                var t
            }

            function a(e, r, t) {
                return e.concat(r).map((function(e) {
                    return n(e, t)
                }))
            }

            function o(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(r) {
                        return Object.propertyIsEnumerable.call(e, r)
                    })) : []
                }(e))
            }

            function f(e, r) {
                try {
                    return r in e
                } catch (e) {
                    return !1
                }
            }

            function c(e, t, u) {
                (u = u || {}).arrayMerge = u.arrayMerge || a, u.isMergeableObject = u.isMergeableObject || r, u.cloneUnlessOtherwiseSpecified = n;
                var l = Array.isArray(t);
                return l === Array.isArray(e) ? l ? u.arrayMerge(e, t, u) : function(e, r, t) {
                    var a = {};
                    return t.isMergeableObject(e) && o(e).forEach((function(r) {
                        a[r] = n(e[r], t)
                    })), o(r).forEach((function(o) {
                        (function(e, r) {
                            return f(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
                        })(e, o) || (f(e, o) && t.isMergeableObject(r[o]) ? a[o] = function(e, r) {
                            if (!r.customMerge) return c;
                            var t = r.customMerge(e);
                            return "function" == typeof t ? t : c
                        }(o, t)(e[o], r[o], t) : a[o] = n(r[o], t))
                    })), a
                }(e, t, u) : n(t, u)
            }
            c.all = function(e, r) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, t) {
                    return c(e, t, r)
                }), {})
            };
            var u = c;
            e.exports = u
        }
    }
]);
//# sourceMappingURL=1f086ff60e5a37c400bddb34a4839832.js.map