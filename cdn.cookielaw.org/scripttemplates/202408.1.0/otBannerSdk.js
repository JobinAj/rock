/** 
 * onetrust-banner-sdk
 * v202408.1.0
 * by OneTrust LLC
 * Copyright 2024 
 */
! function() {
    "use strict";
    var x = function(e, t) {
        return (x = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(e, t) {
                e.__proto__ = t
            } : function(e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }))(e, t)
    };

    function D(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function o() {
            this.constructor = e
        }
        x(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }
    var H, R = function() {
        return (R = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function u(e, s, a, l) {
        return new(a = a || Promise)(function(o, t) {
            function n(e) {
                try {
                    i(l.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(e) {
                try {
                    i(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function i(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof a ? t : new a(function(e) {
                    e(t)
                })).then(n, r)
            }
            i((l = l.apply(e, s || [])).next())
        })
    }

    function F(n, r) {
        var i, s, a, l = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            },
            c = {
                next: e(0),
                throw: e(1),
                return: e(2)
            };
        return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function e(o) {
            return function(e) {
                var t = [o, e];
                if (i) throw new TypeError("Generator is already executing.");
                for (; l = c && t[c = 0] ? 0 : l;) try {
                    if (i = 1, s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, t[1])).done) return a;
                    switch (s = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            return l.label++, {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            l.label++, s = t[1], t = [0];
                            continue;
                        case 7:
                            t = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) l.label = t[1];
                            else if (6 === t[0] && l.label < a[1]) l.label = a[1], a = t;
                            else {
                                if (!(a && l.label < a[2])) {
                                    a[2] && l.ops.pop(), l.trys.pop();
                                    continue
                                }
                                l.label = a[2], l.ops.push(t)
                            }
                    }
                    t = r.call(n, l)
                } catch (e) {
                    t = [6, e], s = 0
                } finally {
                    i = a = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function M() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        for (var n = Array(e), r = 0, t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++, r++) n[r] = i[s];
        return n
    }(e = H = H || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var q = setTimeout;

    function U(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function j() {}

    function z(e) {
        if (!(this instanceof z)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], Q(e, this)
    }

    function K(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 === o._state ? o._deferreds.push(n) : (o._handled = !0, z._immediateFn(function() {
            var e, t = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null === t)(1 === o._state ? W : Y)(n.promise, o._value);
            else {
                try {
                    e = t(o._value)
                } catch (e) {
                    return void Y(n.promise, e)
                }
                W(n.promise, e)
            }
        }))
    }

    function W(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof z) return t._state = 3, t._value = e, void J(t);
                if ("function" == typeof o) return void Q((n = o, r = e, function() {
                    n.apply(r, arguments)
                }), t)
            }
            t._state = 1, t._value = e, J(t)
        } catch (e) {
            Y(t, e)
        }
        var n, r
    }

    function Y(e, t) {
        e._state = 2, e._value = t, J(e)
    }

    function J(e) {
        2 === e._state && 0 === e._deferreds.length && z._immediateFn(function() {
            e._handled || z._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) K(e, e._deferreds[t]);
        e._deferreds = null
    }

    function X(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function Q(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0, W(t, e))
            }, function(e) {
                o || (o = !0, Y(t, e))
            })
        } catch (e) {
            o || (o = !0, Y(t, e))
        }
    }

    function Z() {}
    z.prototype.catch = function(e) {
        return this.then(null, e)
    }, z.prototype.then = function(e, t) {
        var o = new this.constructor(j);
        return K(this, new X(e, t, o)), o
    }, z.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }, z.all = function(t) {
        return new z(function(r, i) {
            if (!U(t)) return i(new TypeError("Promise.all accepts an array"));
            var s = Array.prototype.slice.call(t);
            if (0 === s.length) return r([]);
            var a = s.length;
            for (var e = 0; e < s.length; e++) ! function t(o, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if ("function" == typeof n) return void n.call(e, function(e) {
                            t(o, e)
                        }, i)
                    }
                    s[o] = e, 0 == --a && r(s)
                } catch (e) {
                    i(e)
                }
            }(e, s[e])
        })
    }, z.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === z ? t : new z(function(e) {
            e(t)
        })
    }, z.reject = function(o) {
        return new z(function(e, t) {
            t(o)
        })
    }, z.race = function(r) {
        return new z(function(e, t) {
            if (!U(r)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++) z.resolve(r[o]).then(e, t)
        })
    }, z._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        q(e, 0)
    }, z._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }, Z.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
    }, Z.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this),
                    r = parseInt(n.length, 10) || 0;
                if (0 !== r) {
                    var i, s, a = t[1] || 0;
                    for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r;) {
                        if (e === (s = n[i]) || e != e && s != s) return !0;
                        i++
                    }
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t
                } while (null !== (t = t.parentElement || t.parentNode) && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return !((t = "number" != typeof t ? 0 : t) + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }, Z.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), n = arguments[2], n = void 0 === n ? o : n >> 0, i = n < 0 ? Math.max(o + n, 0) : Math.min(n, o); r < i;) t[r] = e, r++;
                return t
            }
        })
    }, Z.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, Z.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]'),
            t = document.createElement("meta");
        t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
    }, Z.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = z)
    };
    var $, ee, te, oe, ne, re, ie, se, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe, me, Se, ve, ke, Te, Pe, be, Ae, Ie, Le, _e, Ee, Oe, Ve, Be, we, Ge, Ne = new Z,
        p = ((e = $ = $ || {})[e.Unknown = 0] = "Unknown", e[e.BannerCloseButton = 1] = "BannerCloseButton", e[e.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", e[e.AcceptAll = 3] = "AcceptAll", e[e.RejectAll = 4] = "RejectAll", e[e.BannerSaveSettings = 5] = "BannerSaveSettings", e[e.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (e = ee = ee || {})[e.Banner = 1] = "Banner", e[e.PC = 2] = "PC", e[e.API = 3] = "API", (e = te = te || {}).AcceptAll = "AcceptAll", e.RejectAll = "RejectAll", e.UpdateConsent = "UpdateConsent", (e = oe = oe || {})[e.Purpose = 1] = "Purpose", e[e.SpecialFeature = 2] = "SpecialFeature", (e = ne = ne || {}).Legal = "legal", e.UserFriendly = "user_friendly", (e = re = re || {}).Top = "top", e.Bottom = "bottom", (e = ie = ie || {})[e.Banner = 0] = "Banner", e[e.PrefCenterHome = 1] = "PrefCenterHome", e[e.VendorList = 2] = "VendorList", e[e.CookieList = 3] = "CookieList", e[e.IabIllustrations = 4] = "IabIllustrations", (e = se = se || {})[e.RightArrow = 39] = "RightArrow", e[e.LeftArrow = 37] = "LeftArrow", e[e.UpArrow = 38] = "UpArrow", e[e.DownArrow = 40] = "DownArrow", (e = ae = ae || {}).AfterTitle = "AfterTitle", e.AfterDescription = "AfterDescription", e.AfterDPD = "AfterDPD", (e = le = le || {}).PlusMinus = "Plusminus", e.Caret = "Caret", e.NoAccordion = "NoAccordion", (e = ce = ce || {}).Consent = "Consent", e.LI = "LI", e.AddtlConsent = "AddtlConsent", (e = de = de || {}).Iab1Pub = "eupubconsent", e.Iab2Pub = "eupubconsent-v2", e.Iab1Eu = "euconsent", e.Iab2Eu = "euconsent-v2", (e = ue = ue || {})[e.Disabled = 0] = "Disabled", e[e.Consent = 1] = "Consent", e[e.LegInt = 2] = "LegInt", (e = pe = pe || {})[e["Banner - Allow All"] = 1] = "Banner - Allow All", e[e["Banner - Reject All"] = 2] = "Banner - Reject All", e[e["Banner - Close"] = 3] = "Banner - Close", e[e["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", e[e["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", e[e["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", e[e["GPC value changed"] = 7] = "GPC value changed", (e = he = he || {}).Active = "1", e.InActive = "0", (e = ge = ge || {}).Host = "Host", e.GenVendor = "GenVen", (e = Ce = Ce || {})[e.Host = 1] = "Host", e[e.GenVen = 2] = "GenVen", e[e.HostAndGenVen = 3] = "HostAndGenVen", (e = ye = ye || {})[e.minDays = 1] = "minDays", e[e.maxDays = 30] = "maxDays", e[e.maxYear = 31536e3] = "maxYear", e[e.maxSecToDays = 86400] = "maxSecToDays", (e = fe = fe || {})[e.RTL = 0] = "RTL", e[e.LTR = 1] = "LTR", (e = me = me || {})[e.GoogleVendor = 1] = "GoogleVendor", e[e.GeneralVendor = 2] = "GeneralVendor", (e = Lt = Lt || {})[e.Days = 1] = "Days", e[e.Weeks = 7] = "Weeks", e[e.Months = 30] = "Months", e[e.Years = 365] = "Years", (e = Se = Se || {}).Checkbox = "Checkbox", e.Toggle = "Toggle", (e = ve = ve || {}).SlideIn = "Slide_In", e.FadeIn = "Fade_In", e.RemoveAnimation = "Remove_Animation", (e = ke = ke || {}).Link = "Link", e.Icon = "Icon", (e = Te = Te || {}).consent = "consent", e.set = "set", (e = Pe = Pe || {}).update = "update", e.default = "default", e.ads_data_redaction = "ads_data_redaction", (e = be = be || {}).analytics_storage = "analytics_storage", e.ad_storage = "ad_storage", e.functionality_storage = "functionality_storage", e.personalization_storage = "personalization_storage", e.security_storage = "security_storage", e.ad_user_data = "ad_user_data", e.ad_personalization = "ad_personalization", e.region = "region", e.wait_for_update = "wait_for_update", (e = Ae = Ae || {}).granted = "granted", e.denied = "denied", 0, (e = Ie = Ie || {}).OBJECT_TO_LI = "ObjectToLI", e.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (e = Le = Le || {}).cookies = "cookies", e.vendors = "vendors", (e = _e = _e || {}).GDPR = "GDPR", e.CCPA = "CCPA", e.IAB2 = "IAB2", e.IAB2V2 = "IAB2V2", e.GENERIC = "GENERIC", e.LGPD = "LGPD", e.GENERIC_PROMPT = "GENERIC_PROMPT", e.CPRA = "CPRA", e.CDPA = "CDPA", e.USNATIONAL = "USNATIONAL", e.CUSTOM = "CUSTOM", e.COLORADO = "COLORADO", e.CONNECTICUT = "CTDPA", e.UCPA = "UCPA", (e = Ee = Ee || {}).Name = "OTGPPConsent", e[e.ChunkSize = 4e3] = "ChunkSize", e.ChunkCountParam = "GPPCookiesCount", (e = Oe = Oe || {}).MspaCoveredTransaction = "IsMSPAEnabled", e.MspaOptOutOptionMode = "Opt-Out", e.MspaServiceProviderMode = "Service Provider", 0, (e = Ve = Ve || {}).GpcSegmentType = "GpcSegmentType", e.Gpc = "Gpc", (e = Be = Be || {}).SensitiveDataProcessing = "SensitiveDataProcessing", e.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents", (e = we = we || {}).CPRA = "uscav1", e.CCPA = "uscav1", e.CDPA = "usvav1", e.USNATIONAL = "usnatv1", e.COLORADO = "uscov1", e.CTDPA = "usctv1", e.UCPA = "usutv1", e.IAB2V2 = "tcfeuv2", (e = Ge = Ge || {})[e.CPRA = 8] = "CPRA", e[e.CCPA = 8] = "CCPA", e[e.CDPA = 9] = "CDPA", e[e.USNATIONAL = 7] = "USNATIONAL", e[e.COLORADO = 10] = "COLORADO", e[e.UCPA = 11] = "UCPA", e[e.CTDPA = 12] = "CTDPA", e[e.IAB2V2 = 2] = "IAB2V2", 0, 0, 0, 0, 0, {
            AWAITING_RE_CONSENT: "AwaitingReconsent",
            CONSENT_ID: "consentId",
            GEO_LOCATION: "geolocation",
            INTERACTION_COUNT: "interactionCount",
            IS_IAB_GLOBAL: "isIABGlobal",
            NOT_LANDING_PAGE: "NotLandingPage",
            GEO: "geo",
            GPC_ENABLED: "isGpcEnabled",
            GPC_Browser_Flag: "browserGpcFlag",
            IS_ANONYMOUS_CONSENT: "isAnonUser",
            IDENTIFIER_TYPE: "identifierType",
            PREV_USER_CONSENT: "iType",
            INTERACTION_TYPE: "intType",
            GROUPS: "groups",
            HEALTH_SIGNATURE_AUTHORIZATION: "healthAuth"
        }),
        h = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview",
            GPP_CONSENT: Ee.Name
        },
        xe = "CONFIRMED",
        De = "OPT_OUT",
        He = "NO_CHOICE",
        Re = "NOTGIVEN",
        Fe = "NO_OPT_OUT",
        m = {
            ALWAYS_INACTIVE: "always inactive",
            ALWAYS_ACTIVE: "always active",
            ACTIVE: "active",
            INACTIVE_LANDING_PAGE: "inactive landingpage",
            INACTIVE: "inactive",
            IMPLIED_CONSENT: "implied consent",
            GPC: "gpc",
            DNT: "dnt"
        },
        Me = {
            LOCAL: "LOCAL",
            TEST: "TEST",
            LOCAL_TEST: "LOCAL_TEST",
            PRODUCTION: "PRODUCTION"
        },
        qe = "data-document-language",
        Ue = "data-language",
        je = "otCookieSettingsButton.json",
        ze = "otCookieSettingsButtonRtl.json",
        Ke = "otCenterRounded",
        We = "otFlat",
        Ye = "otFloatingRoundedCorner",
        Je = "otFloatingFlat",
        Xe = "otFloatingRoundedIcon",
        Qe = "otFloatingRounded",
        Ze = "otChoicesBanner",
        $e = "otNoBanner",
        et = "otPcCenter",
        tt = "otPcList",
        ot = "otPcPanel",
        nt = "otPcPopup",
        rt = "otPcTab",
        it = "hidebanner",
        st = ((e = {})[Lt.Days] = "PCenterVendorListLifespanDay", e[Lt.Weeks] = "LfSpnWk", e[Lt.Months] = "PCenterVendorListLifespanMonth", e[Lt.Years] = "LfSpnYr", e),
        at = "DNAC",
        lt = "Category",
        ct = "Host",
        dt = "General Vendor",
        ut = "VendorService",
        pt = "aria-label",
        ht = "aria-hidden",
        gt = "BRANCH",
        Ct = "COOKIE",
        yt = "IAB2V2_SPL_PURPOSE",
        ft = "IAB2V2_FEATURE",
        mt = "IAB2V2_SPL_FEATURE",
        St = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_FEATURE", "IAB2V2_STACK"],
        vt = ["COOKIE", "BRANCH", "IAB2_STACK", "IAB2V2_STACK"],
        kt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_FEATURE"],
        Tt = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_PURPOSE"],
        Pt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
        bt = {
            IAB2V2: "pur",
            IFE2V2: "ft",
            ISP2V2: "spl_pur",
            ISF2V2: "spl_ft"
        },
        At = {
            pur: "purposes",
            ft: "features",
            spl_pur: "specialPurposes",
            spl_ft: "specialFeatures"
        },
        S = new function() {};

    function d(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            return e ? (";" !== (e = e.trim()).charAt(e.length - 1) && (e += ";"), e.trim()) : null
        }
        var i = n(e.getAttribute("style")),
            s = n(t),
            t = "",
            t = o && i ? function() {
                for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                        return 0 !== e.length
                    }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                    var r = e[n].substring(0, e[n].indexOf(":") + 1).trim();
                    t.indexOf(r) < 0 && (t += r, o += e[n] + ";")
                }
                return o
            }() : s;
        e.setAttribute("style", t)
    }

    function It() {}
    It.prototype.convertKeyValueLowerCase = function(e) {
        for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
        return e
    }, It.prototype.arrToStr = function(e) {
        return e.toString()
    }, It.prototype.strToArr = function(e) {
        return e ? e.split(",") : []
    }, It.prototype.strToMap = function(e) {
        if (!e) return new Map;
        for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
            var r = n[o].split(":");
            t.set(r[0], "1" === r[1])
        }
        return t
    }, It.prototype.empty = function(e) {
        var t = document.getElementById(e);
        if (t)
            for (; t.hasChildNodes();) t.removeChild(t.lastChild)
    }, It.prototype.show = function(e) {
        e = document.getElementById(e);
        e && d(e, "display: block;", !0)
    }, It.prototype.remove = function(e) {
        e = document.getElementById(e);
        e && e.parentNode && e.parentNode.removeChild(e)
    }, It.prototype.appendTo = function(e, t) {
        var o, e = document.getElementById(e);
        e && ((o = document.createElement("div")).innerHTML = t, e.appendChild(o))
    }, It.prototype.contains = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
        return !1
    }, It.prototype.indexOf = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o] === t) return o;
        return -1
    }, It.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }, It.prototype.generateUUID = function() {
        var o = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, It.prototype.getActiveIdArray = function(e) {
        return e.filter(function(e) {
            return "true" === e.split(":")[1]
        }).map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }, It.prototype.distinctArray = function(e) {
        var t = new Array;
        return e.forEach(function(e) {
            t.indexOf(e) < 0 && t.push(e)
        }), t
    }, It.prototype.findIndex = function(e, t) {
        for (var o = -1, n = 0; n < e.length; n++)
            if (void 0 !== e[n] && t(e[n], n)) {
                o = n;
                break
            }
        return o
    }, It.prototype.getURL = function(e) {
        var t = document.createElement("a");
        return t.href = e, t
    }, It.prototype.removeURLPrefixes = function(e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }, It.prototype.removeChild = function(e) {
        if (e)
            if (e instanceof NodeList || e instanceof Array)
                for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]);
            else e.parentElement.removeChild(e)
    }, It.prototype.getRelativeURL = function(e, t, o) {
        return void 0 === o && (o = !1), t ? (t = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", ""), o ? t : t + ".js") : e
    }, It.prototype.setCheckedAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
    }, It.prototype.setDisabledAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
    }, It.prototype.setHtmlAttributes = function(e, t) {
        for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
    }, It.prototype.calculateCookieLifespan = function(e) {
        return e < 0 ? A.LifespanTypeText : (e = Math.floor(e / ye.maxSecToDays)) < ye.minDays ? "< 1 " + A.PCenterVendorListLifespanDay : e < ye.maxDays ? e + " " + A.PCenterVendorListLifespanDays : 1 === (e = Math.floor(e / ye.maxDays)) ? e + " " + A.PCenterVendorListLifespanMonth : e + " " + A.PCenterVendorListLifespanMonths
    }, It.prototype.insertElement = function(e, t, o) {
        e && t && e.insertAdjacentElement(o, t)
    }, It.prototype.customQuerySelector = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    }, It.prototype.customQuerySelectorAll = function(t) {
        return function(e) {
            return t.querySelectorAll(e)
        }
    };
    var g, v = new It,
        Lt = (_t.prototype.removeAlertBox = function() {
            null !== this.getCookie(h.ALERT_BOX_CLOSED) && this.setCookie(h.ALERT_BOX_CLOSED, "", 0, !0)
        }, _t.prototype.removeIab1 = function() {
            null !== this.getCookie(de.Iab1Pub) && this.setCookie(de.Iab1Pub, "", 0, !0)
        }, _t.prototype.removeIab2 = function() {
            null !== this.getCookie(de.Iab2Pub) && this.setCookie(de.Iab2Pub, "", 0, !0)
        }, _t.prototype.removeAddtlStr = function() {
            null !== this.getCookie(h.ADDITIONAL_CONSENT_STRING) && this.setCookie(h.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }, _t.prototype.removeVariant = function() {
            null !== this.getCookie(h.SELECTED_VARIANT) && this.setCookie(h.SELECTED_VARIANT, "", 0, !0)
        }, _t.prototype.removeOptanon = function() {
            null !== this.getCookie(h.OPTANON_CONSENT) && this.setCookie(h.OPTANON_CONSENT, "", 0, !0)
        }, _t.prototype.removePreview = function() {
            null !== this.getCookie(h.OT_PREVIEW) && this.setCookie(h.OT_PREVIEW, "", 0, !0)
        }, _t.prototype.removeAllCookies = function() {
            this.removeIab1(), this.removeIab2(), this.removePreview(), this.removeOptanon(), this.removeVariant(), this.removeAlertBox(), this.removeAddtlStr(), this.removeAmpStorage()
        }, _t.prototype.writeCookieParam = function(e, t, o, n) {
            var r, i, s, a = {},
                l = this.getCookie(e);
            if (l)
                for (i = l.split("&"), r = 0; r < i.length; r += 1) s = i[r].split("="), a[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            a[t] = o;
            l = S.moduleInitializer.TenantFeatures;
            l && l.CookieV2CookieDateTimeInISO ? a.datestamp = (new Date).toISOString() : a.datestamp = (new Date).toString(), a.version = I.otSDKVersion, o = this.param(a), this.setCookie(e, o, A.ReconsentFrequencyDays)
        }, _t.prototype.readCookieParam = function(e, t, o) {
            var n, r, i, s, e = this.getCookie(e);
            if (e) {
                for (r = {}, i = e.split("&"), n = 0; n < i.length; n += 1) s = i[n].split("="), r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                return t && r[t] ? r[t] : t && !r[t] ? "" : r
            }
            return ""
        }, _t.prototype.getCookie = function(e) {
            if (S && S.moduleInitializer && S.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t) return t.value
            }
            if (I.isAMP && (I.ampData = JSON.parse(localStorage.getItem(I.dataDomainId)) || {}, I.ampData)) return I.ampData[e] || null;
            for (var o, n = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i += 1) {
                for (o = r[i];
                    " " === o.charAt(0);) o = o.substring(1, o.length);
                if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
            }
            return null
        }, _t.prototype.setAmpStorage = function() {
            window.localStorage.setItem(I.dataDomainId, JSON.stringify(I.ampData))
        }, _t.prototype.removeAmpStorage = function() {
            window.localStorage.removeItem(I.dataDomainId)
        }, _t.prototype.handleAmp = function(e, t) {
            "" !== t ? I.ampData[e] = t : delete I.ampData[e], 0 === Object.keys(I.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }, _t.prototype.setCookie = function(e, t, o, n, r) {
            var i, s, a, l, c;
            void 0 === n && (n = !1), void 0 === r && (r = new Date), I.isAMP ? this.handleAmp(e, t) : (i = void 0, i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "", o = "", (s = (n = S.moduleInitializer) && n.Domain ? n.Domain.split("/") : []).length <= 1 ? s[1] = "" : o = s.slice(1).join("/"), a = "Samesite=Lax", n.CookieSameSiteNoneEnabled && (a = "Samesite=None; Secure"), l = n.ScriptType === Me.TEST || n.ScriptType === Me.LOCAL_TEST, I.isPreview || !l && !n.MobileSDK ? (c = t + i + "; path=/" + o + "; domain=." + s[0] + "; " + a, document.cookie = e + "=" + c) : (c = t + i + "; path=/; " + a, n.MobileSDK ? this.setCookieDataObj({
                name: e,
                value: t,
                expires: i,
                date: r,
                domainAndPath: s
            }) : document.cookie = e + "=" + c))
        }, _t.prototype.setCookieDataObj = function(t) {
            var e;
            t && (I.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? I.otCookieData = window.OneTrust.otCookieData : I.otCookieData = []), -1 < (e = v.findIndex(I.otCookieData, function(e) {
                return e.name === t.name
            })) ? I.otCookieData[e] = t : I.otCookieData.push(t))
        }, _t.prototype.getCookieDataObj = function(t) {
            I.otCookieData && 0 !== I.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? I.otCookieData = window.OneTrust.otCookieData : I.otCookieData = []);
            var e = v.findIndex(I.otCookieData, function(e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = I.otCookieData[e];
                if (o.date) return new Date(o.date) < new Date ? (I.otCookieData.splice(e, 1), null) : o
            }
            return null
        }, _t.prototype.param = function(e) {
            var t, o = "";
            for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }, _t);

    function _t() {}
    var k, T, Et = {
            P_Content: "#ot-pc-content",
            P_Logo: ".ot-pc-logo",
            P_Title: "#ot-pc-title",
            P_Policy_Txt: "#ot-pc-desc",
            P_Vendor_Title_Elm: "#ot-lst-title",
            P_Vendor_Title: "#ot-lst-title h3",
            P_Manage_Cookies_Txt: "#ot-category-title",
            P_Label_Txt: ".ot-label-txt",
            P_Category_Header: ".ot-cat-header",
            P_Category_Grp: ".ot-cat-grp",
            P_Category_Item: ".ot-cat-item",
            P_Vendor_List: "#ot-pc-lst",
            P_Vendor_Content: "#ot-lst-cnt",
            P_Vendor_Container: "#ot-ven-lst",
            P_Ven_Bx: "ot-ven-box",
            P_Ven_Name: ".ot-ven-name",
            P_Ven_Link: ".ot-ven-link",
            P_Ven_Leg_Claim: ".ot-ven-legclaim-link",
            P_Ven_Ctgl: "ot-ven-ctgl",
            P_Ven_Ltgl: "ot-ven-litgl",
            P_Ven_Ltgl_Only: "ot-ven-litgl-only",
            P_Ven_Opts: ".ot-ven-opts",
            P_Triangle: "#ot-anchor",
            P_Fltr_Modal: "#ot-fltr-modal",
            P_Fltr_Options: ".ot-fltr-opts",
            P_Fltr_Option: ".ot-fltr-opt",
            P_Select_Cntr: "#ot-sel-blk",
            P_Host_Cntr: "#ot-host-lst",
            P_Host_Hdr: ".ot-host-hdr",
            P_Host_Desc: ".ot-host-desc",
            P_Li_Hdr: ".ot-pli-hdr",
            P_Li_Title: ".ot-li-title",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Host_Title: ".ot-host-name",
            P_Leg_Select_All: ".ot-sel-all-hdr",
            P_Leg_Header: ".ot-li-hdr",
            P_Acc_Header: ".ot-acc-hdr",
            P_Cnsnt_Header: ".ot-consent-hdr",
            P_Tgl_Cntr: ".ot-tgl-cntr",
            P_CBx_Cntr: ".ot-chkbox",
            P_Sel_All_Host_El: "ot-selall-hostcntr",
            P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
            P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
            P_c_Name: "ot-c-name",
            P_c_Host: "ot-c-host",
            P_c_Duration: "ot-c-duration",
            P_c_Type: "ot-c-type",
            P_c_Category: "ot-c-category",
            P_c_Desc: "ot-c-description",
            P_Host_View_Cookies: ".ot-host-expand",
            P_Host_Opt: ".ot-host-opt",
            P_Host_Info: ".ot-host-info",
            P_Arrw_Cntr: ".ot-arw-cntr",
            P_Acc_Txt: ".ot-acc-txt",
            P_Vendor_CheckBx: "ot-ven-chkbox",
            P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
            P_Host_UI: "ot-hosts-ui",
            P_Host_Cnt: "ot-host-cnt",
            P_Host_Bx: "ot-host-box",
            P_Ven_Dets: ".ot-ven-dets",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Close_Btn: ".ot-close-icon",
            P_Ven_Lst_Cntr: ".ot-vlst-cntr",
            P_Host_Lst_cntr: ".ot-hlst-cntr",
            P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
            P_Subgrp_Desc: ".ot-subgrp-desc",
            P_Subgp_ul: ".ot-subgrps",
            P_Subgrp_li: ".ot-subgrp",
            P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
            P_Grp_Container: ".ot-grps-cntr",
            P_Privacy_Txt: "#ot-pvcy-txt",
            P_Privacy_Hdr: "#ot-pvcy-hdr",
            P_Active_Menu: "ot-active-menu",
            P_Desc_Container: ".ot-desc-cntr",
            P_Tab_Grp_Hdr: "ot-grp-hdr1",
            P_Search_Cntr: "#ot-search-cntr",
            P_Clr_Fltr_Txt: "#clear-filters-handler",
            P_Acc_Grp_Desc: ".ot-acc-grpdesc",
            P_Acc_Container: ".ot-acc-grpcntr",
            P_Line_Through: "line-through",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        Ot = {
            P_Grp_Container: ".groups-container",
            P_Content: "#ot-content",
            P_Category_Header: ".category-header",
            P_Desc_Container: ".description-container",
            P_Label_Txt: ".label-text",
            P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
            P_Leg_Int_Hdr: ".leg-int-header",
            P_Not_Always_Active: "p:not(.ot-always-active)",
            P_Category_Grp: ".category-group",
            P_Category_Item: ".category-item",
            P_Sub_Grp_Cntr: ".cookie-subgroups-container",
            P_Acc_Container: ".ot-accordion-pc-container",
            P_Close_Btn: ".pc-close-button",
            P_Logo: ".pc-logo",
            P_Title: "#pc-title",
            P_Privacy_Txt: "#privacy-text",
            P_Privacy_Hdr: "#pc-privacy-header",
            P_Policy_Txt: "#pc-policy-text",
            P_Manage_Cookies_Txt: "#manage-cookies-text",
            P_Vendor_Title: "#vendors-list-title",
            P_Vendor_Title_Elm: "#vendors-list-title",
            P_Vendor_List: "#vendors-list",
            P_Vendor_Content: "#vendor-list-content",
            P_Vendor_Container: "#vendors-list-container",
            P_Ven_Bx: "vendor-box",
            P_Ven_Name: ".vendor-title",
            P_Ven_Link: ".vendor-privacy-notice",
            P_Ven_Leg_Claim: ".vendor-legclaim-link",
            P_Ven_Ctgl: "ot-vendor-consent-tgl",
            P_Ven_Ltgl: "ot-leg-int-tgl",
            P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
            P_Ven_Opts: ".vendor-options",
            P_Triangle: "#ot-triangle",
            P_Fltr_Modal: "#ot-filter-modal",
            P_Fltr_Options: ".ot-group-options",
            P_Fltr_Option: ".ot-group-option",
            P_Select_Cntr: "#select-all-container",
            P_Host_Cntr: "#hosts-list-container",
            P_Host_Hdr: ".host-info",
            P_Host_Desc: ".host-description",
            P_Host_Opt: ".host-option-group",
            P_Host_Info: ".vendor-host",
            P_Ven_Dets: ".vendor-purpose-groups",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Arrw_Cntr: ".ot-arrow-container",
            P_Li_Hdr: ".leg-int-header",
            P_Li_Title: ".leg-int-title",
            P_Acc_Txt: ".accordion-text",
            P_Tgl_Cntr: ".ot-toggle-group",
            P_CBx_Cntr: ".ot-chkbox-container",
            P_Host_Title: ".host-title",
            P_Leg_Select_All: ".leg-int-sel-all-hdr",
            P_Leg_Header: ".leg-int-hdr",
            P_Cnsnt_Header: ".consent-hdr",
            P_Acc_Header: ".accordion-header",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Sel_All_Host_El: "select-all-hosts-input-container",
            P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
            P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
            P_c_Name: "cookie-name-container",
            P_c_Host: "cookie-host-container",
            P_c_Duration: "cookie-duration-container",
            P_c_Type: "cookie-type-container",
            P_c_Category: "cookie-category-container",
            P_c_Desc: "cookie-description-container",
            P_Host_View_Cookies: ".host-view-cookies",
            P_Vendor_CheckBx: "vendor-chkbox",
            P_Vendor_LegCheckBx: "vendor-leg-chkbox",
            P_Host_UI: "hosts-list",
            P_Host_Cnt: "host-list-content",
            P_Host_Bx: "host-box",
            P_Ven_Lst_Cntr: ".category-vendors-list-container",
            P_Host_Lst_cntr: ".category-host-list-container",
            P_Subgrp_Desc: ".cookie-subgroups-description-legal",
            P_Subgp_ul: ".cookie-subgroups",
            P_Subgrp_li: ".cookie-subgroup",
            P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
            P_Active_Menu: "active-group",
            P_Tab_Grp_Hdr: "group-toggle",
            P_Search_Cntr: "#search-container",
            P_Clr_Fltr_Txt: "#clear-filters-handler p",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        Vt = {
            GroupTypes: {
                Cookie: "COOKIE",
                Bundle: "BRANCH",
                Ft: "IAB2_FEATURE",
                Pur: "IAB2_PURPOSE",
                Spl_Ft: "IAB2_SPL_FEATURE",
                Spl_Pur: "IAB2_SPL_PURPOSE",
                Stack: "IAB2_STACK"
            },
            IdPatterns: {
                Pur: "IABV2_",
                Ft: "IFEV2_",
                Spl_Pur: "ISPV2_",
                Spl_Ft: "ISFV2_"
            }
        },
        Bt = {
            GroupTypes: {
                Cookie: "COOKIE",
                Bundle: "BRANCH",
                Ft: "IAB2V2_FEATURE",
                Pur: "IAB2V2_PURPOSE",
                Spl_Ft: "IAB2V2_SPL_FEATURE",
                Spl_Pur: "IAB2V2_SPL_PURPOSE",
                Stack: "IAB2V2_STACK"
            },
            IdPatterns: {
                Pur: "IAB2V2_",
                Ft: "IFE2V2_",
                Spl_Pur: "ISP2V2_",
                Spl_Ft: "ISF2V2_"
            }
        };
    i.insertAfter = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }, i.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }, i.inArray = function(e, t) {
        return t.indexOf(e)
    }, i.ajax = function(e) {
        var t = null,
            o = new XMLHttpRequest,
            n = e.type,
            r = e.url,
            i = (e.dataType, e.contentType),
            s = e.data,
            a = e.success,
            l = e.token,
            t = e.error,
            e = e.sync;
        o.open(n, r, !e), o.setRequestHeader("Content-Type", i), l && o.setRequestHeader("Authorization", l), o.withCredentials = !1, o.onload = function() {
            var e;
            200 <= this.status && this.status < 400 ? (e = JSON.parse(this.responseText), a(e)) : t({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, o.onerror = function(e) {
            t(e)
        }, "post" === n.toLowerCase() || "put" === n.toLowerCase() ? o.send(s) : o.send()
    }, i.prevNextHelper = function(o, e, n) {
        var r = [];

        function i(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
        }
        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
            i(o, e, n)
        }) : i(o, e, n), r
    }, i.browser = function() {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }, i.isNodeList = function(e) {
        e = Object.prototype.toString.call(e);
        return "[object NodeList]" === e || "[object Array]" === e
    }, i.prototype.fadeOut = function(e) {
        var t = this;
        if (void 0 === e && (e = 60), 1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) d(this.el[o], "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ", !0);
        var n = setInterval(function() {
            if (1 <= t.el.length)
                for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (d(t.el[e], "display: none;", !0), clearInterval(n), "optanon-popup-bg" === t.el[e].id) && t.el[e].removeAttribute("style")
        }, e);
        return this
    }, i.prototype.hide = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) d(this.el[e], "display: none;", !0), this.el[e].setAttribute(ht, !0);
        else i.isNodeList(this.el) || (d(this.el, "display: none;", !0), this.el.setAttribute(ht, !0));
        return this
    }, i.prototype.show = function(e) {
        if (void 0 === e && (e = "block"), 1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) d(this.el[t], "display: " + e + ";", !0), this.el[t].removeAttribute(ht);
        else i.isNodeList(this.el) || (d(this.el, "display: " + e + ";", !0), this.el.removeAttribute(ht));
        return this
    }, i.prototype.remove = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
        else this.el.parentNode.removeChild(this.el);
        return this
    }, i.prototype.css = function(e) {
        if (e)
            if (1 <= this.el.length) {
                if (!e.includes(":")) return this.el[0].style[e];
                for (var t = 0; t < this.el.length; t++) d(this.el[t], e)
            } else {
                if (!e.includes(":")) return this.el.style[e];
                d(this.el, e)
            }
        return this
    }, i.prototype.removeClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        return this
    }, i.prototype.addClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
        else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }, i.prototype.on = function(r, i, s) {
        var e = this;
        if ("string" != typeof i)
            if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                    case "load":
                        window.onload = i;
                        break;
                    case "resize":
                        window.onresize = i;
                        break;
                    case "scroll":
                        window.onscroll = i
                } else if (this.el && 1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(r, i);
                else this.el && this.el instanceof Element && this.el.addEventListener(r, i);
        else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
            case "load":
                window.onload = s;
                break;
            case "resize":
                window.onresize = s;
                break;
            case "scroll":
                window.onscroll = s
        } else {
            var a = function(o) {
                var n = o.target;
                e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                    Nt["" + r + i] && delete Nt["" + r + i], e.addEventListener(r, s), e === n && s && s.call(e, o)
                }), e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
            };
            if (this.el && 1 <= this.el.length)
                for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
            else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted) && this.el instanceof Element && (Nt["" + r + i] || (Nt["" + r + i] = !0, this.el.addEventListener(r, a)))
        }
        return this
    }, i.prototype.off = function(e, t) {
        if (1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t);
        else this.el.removeEventListener(e, t);
        return this
    }, i.prototype.one = function(t, o) {
        var n = this;
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
            });
        else {
            var r = function(e) {
                e.stopPropagation(), o(), n.off(t, r)
            };
            this.el.addEventListener(t, r)
        }
        return this
    }, i.prototype.trigger = function(e) {
        e = new CustomEvent(e, {
            customEvent: "yes"
        });
        return this.el.dispatchEvent(e), this
    }, i.prototype.focus = function() {
        return (1 <= this.el.length ? this.el[0] : this.el).focus(), this
    }, i.prototype.attr = function(e, t) {
        return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el && this.el.getAttribute(e)
    }, i.prototype.html = function(e) {
        if (null == e) return (1 <= this.el.length ? this.el[0] : this.el).innerHTML;
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
        else this.el.innerHTML = e;
        return this
    }, i.prototype.append = function(e) {
        if ("string" != typeof e || e.includes("<") || e.includes(">"))
            if (Array.isArray(e)) {
                var o = this;
                Array.prototype.forEach.call(e, function(e, t) {
                    document.querySelector(o.selector).appendChild(new i(e, "ce").el)
                })
            } else {
                if ("string" == typeof e || Array.isArray(e)) return this.appendHtmlElement(e);
                if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(e);
                else if (1 <= e.length)
                    for (var t = 0; t < e.length; t++) this.selector.appendChild(e[t]);
                else this.selector.appendChild(e)
            }
        else this.el.insertAdjacentText("beforeend", e);
        return this
    }, i.prototype.text = function(o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o) return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function(e, t) {
                    e.textContent = o
                })
            } else {
                if (!o) return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }, i.prototype.data = function(o, n) {
        if (!(this.el.length < 1)) {
            if (!(1 <= this.el.length)) return r(this.el, n);
            Array.prototype.forEach.call(this.el, function(e, t) {
                r(e, n)
            })
        }
        return this;

        function r(e, t) {
            if (!t) return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }
    }, i.prototype.height = function(e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++) 0 < s[l] && (a += s[l]);
        return e ? (t = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px", o = "number" == typeof e ? e : parseInt(e.toString().split(t)[0]), (t && "px" === t || "%" === t || "em" === t || "rem" === t) && (0 < o ? d(this.el, "height: " + (a + o + t) + ";", !0) : "auto" === e && d(this.el, "height: " + e + ";", !0)), this) : this.selector === document ? i : this.el.clientHeight - a
    }, i.prototype.each = function(e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
    }, i.prototype.is = function(e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }, i.prototype.filter = function(e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
    }, i.prototype.animate = function(e, t) {
        var o, n, r, i, s = this;
        this.el = document.querySelector(this.selector);
        for (o in e) n = o, i = r = void 0, r = parseInt(e[n]), i = e[n].split(parseInt(e[n]))[1] ? e[n].split(parseInt(e[n]))[1] : "px", r = s.createKeyFrameAnimation(n, s.el, r, i), (i = document.head.querySelector("#onetrust-style")) ? i.innerHTML += r : ((i = document.createElement("style")).id = "onetrust-legacy-style", i.type = "text/css", i.innerHTML = r, document.head.appendChild(i)), s.addWebKitAnimation(n, t);
        return this
    }, i.prototype.scrollTop = function() {
        return this.el.scrollTop
    }, i.prototype.appendHtmlElement = function(o) {
        var n, r, e;
        return "string" == typeof this.selector ? document.querySelector(this.selector).appendChild(new i(o, "ce").el) : this.useEl ? (n = document.createDocumentFragment(), (r = !(!o.includes("<th") && !o.includes("<td"))) && (e = o.split(" ")[0].split("<")[1], n.appendChild(document.createElement(e)), n.firstChild.innerHTML = o), Array.prototype.forEach.call(this.el, function(e, t) {
            r ? e.appendChild(n.firstChild) : e.appendChild(new i(o, "ce").el)
        })) : this.selector.appendChild(new i(o, "ce").el), this
    }, i.prototype.createKeyFrameAnimation = function(e, t, o, n) {
        return "\n        @keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-webkit-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-moz-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        "
    }, i.prototype.addWebKitAnimation = function(e, t) {
        (i.browser().type = i.browser().version <= 8) ? d(this.el, "top" === e ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + t + "ms ease-out forwards;"): d(this.el, "\n                animation-name: " + ("top" === e ? "slide-up-custom" : "slide-down-custom") + ";\n                animation-duration: " + t + "ms;\n                animation-fill-mode: forwards;\n                animation-timing-function: ease-out;\n            ", !0)
    };
    var wt = i;

    function i(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case "ce":
                var o = i.browser().type.toLowerCase(),
                    n = i.browser().version;
                n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o ? ((n = document.implementation.createHTMLDocument()).body.innerHTML = e, this.el = n.body.children[0]) : (o = document.createRange().createContextualFragment(e), this.el = o.firstChild), this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function P(e, t) {
        return new wt(e, t = void 0 === t ? "" : t)
    }
    var Gt, Nt = {},
        e = (xt.prototype.getDataLanguageCulture = function() {
            var e = y.getStubAttr(Ue);
            return e ? this.checkAndTansformLangCodeWithUnderdscore(e.toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
        }, xt.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
            return e.replace(/\_/, "-")
        }, xt.prototype.detectDocumentOrBrowserLanguage = function() {
            var e = "";
            if (b.langSwitcherPldr) {
                var t = v.convertKeyValueLowerCase(b.langSwitcherPldr),
                    o = this.getUserLanguage().toLowerCase();
                if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                    if (2 === o.length)
                        for (var n = 0; n < Object.keys(t).length; n += 1) {
                            var r = Object.keys(t)[n];
                            if (r.substr(0, 2) === o) {
                                e = t[r];
                                break
                            }
                        } else 2 < o.length && (e = t[o.substr(0, 2)]);
                e = e || t.default
            }
            return e
        }, xt.prototype.getUserLanguage = function() {
            return b.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }, xt.prototype.isValidLanguage = function(e, t) {
            var o = v.convertKeyValueLowerCase(b.langSwitcherPldr);
            return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
        }, xt.prototype.getLangJsonUrl = function(e) {
            void 0 === e && (e = null);
            var t, o = b.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(), !this.isValidLanguage(o, e)) return null
            } else e = this.getDataLanguageCulture();
            return I.lang = e, I.consentLanguage = e.substr(0, 2), t = b.canUseConditionalLogic ? b.bannerDataParentURL + "/" + o.Id + "/" + b.Condition.Id + "/" + e : b.bannerDataParentURL + "/" + o.Id + "/" + e, t = b.multiVariantTestingEnabled ? b.bannerDataParentURL + "/" + o.Id + "/variants/" + b.selectedVariant.Id + "/" + e : t
        }, xt.prototype.populateLangSwitcherPlhdr = function() {
            var e, t, o, n = b.getRegionRule();
            n && (e = n.Variants, b.multiVariantTestingEnabled && e ? (o = void 0, (t = g.getCookie(h.SELECTED_VARIANT)) && (o = e[v.findIndex(e, function(e) {
                return e.Id === t
            })]), t && o || (o = e[Math.floor(Math.random() * e.length)]), b.langSwitcherPldr = o.LanguageSwitcherPlaceholder, b.selectedVariant = o) : b.canUseConditionalLogic ? b.langSwitcherPldr = b.Condition.LanguageSwitcherPlaceholder : b.langSwitcherPldr = n.LanguageSwitcherPlaceholder)
        }, xt);

    function xt() {}
    Rt.prototype.getLangJson = function(e) {
        var t;
        return void 0 === e && (e = null), b.previewMode ? (t = JSON.parse(window.sessionStorage.getItem("otPreviewData")), Promise.resolve(t.langJson)) : (t = Gt.getLangJsonUrl(e)) ? Dt.otFetch(t + ".json") : Promise.resolve(null)
    }, Rt.prototype.getPersistentCookieSvg = function(e) {
        e = e || A.cookiePersistentLogo;
        return e ? Dt.otFetch(e, !0) : Promise.resolve(null)
    }, Rt.prototype.fetchGvlObj = function() {
        var e = S.moduleInitializer.IabV2Data.globalVendorListUrl;
        return "IAB2V2" === b.getRegionRuleType() && (e = S.moduleInitializer.Iab2V2Data.globalVendorListUrl), this.otFetch(e)
    }, Rt.prototype.fetchGoogleVendors = function() {
        var e = y.updateCorrectIABUrl(S.moduleInitializer.GoogleData.googleVendorListUrl);
        return y.checkMobileOfflineRequest(y.getBannerVersionUrl()) ? y.otFetchOfflineFile(v.getRelativeURL(e, !0)) : (b.mobileOnlineURL.push(e), this.otFetch(e))
    }, Rt.prototype.getStorageDisclosure = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                return [2, this.otFetch(t, !1, !0)]
            })
        })
    }, Rt.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            y.jsonp(y.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, Rt.prototype.loadGPP = function() {
        return new Promise(function(e) {
            y.jsonp(y.getBannerVersionUrl() + "/otGPP.js", e, e)
        })
    }, Rt.prototype.getCSBtnContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = A.useRTL ? fe.RTL : fe.LTR, I.csBtnAsset[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/" + (A.useRTL ? ze : je), n = I.csBtnAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, I.csBtnAsset[t]]
                }
            })
        })
    }, Rt.prototype.getPcContent = function(i) {
        return void 0 === i && (i = !1), u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = A.useRTL ? fe.RTL : fe.LTR, I.pcAsset[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl(), A.PCTemplateUpgrade && (o += "/v2"), o = o + "/" + b.pcName + (A.useRTL ? "Rtl" : "") + ".json", n = I.pcAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, I.pcAsset[t]]
                }
            })
        })
    }, Rt.prototype.getBannerContent = function(s, a) {
        return void 0 === s && (s = !1), void 0 === a && (a = null), u(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (t = A.useRTL ? fe.RTL : fe.LTR, o = a || Gt.getDataLanguageCulture(), I.bAsset[t] && !s) return [3, 2];
                        if (i = b.getRegionRule(), n = void 0, S.fp.CookieV2SSR) {
                            if (b.previewMode) return r = JSON.parse(window.sessionStorage.getItem("otPreviewData")), [2, Promise.resolve(r.bLayout)];
                            n = b.bannerDataParentURL + "/" + i.Id, b.canUseConditionalLogic && (n += "/" + b.Condition.Id), n += "/bLayout-" + o + ".json"
                        } else n = y.getBannerSDKAssestsUrl() + ("/" + b.bannerName + (A.useRTL ? "Rtl" : "")) + ".json";
                        return r = I.bAsset, i = t, [4, this.otFetch(n)];
                    case 1:
                        r[i] = e.sent(), e.label = 2;
                    case 2:
                        return [2, I.bAsset[t]]
                }
            })
        })
    }, Rt.prototype.getCommonStyles = function(i) {
        return void 0 === i && (i = !1), u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = A.useRTL ? fe.RTL : fe.LTR, I.cStyles[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otCommonStyles" + (A.useRTL ? "Rtl" : "") + ".css", n = I.cStyles, r = t, [4, this.otFetch(o, !0)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, I.cStyles[t]]
                }
            })
        })
    }, Rt.prototype.getSyncNtfyContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = A.useRTL ? fe.RTL : fe.LTR, I.syncNtfyContent[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otSyncNotification" + (A.useRTL ? "Rtl" : "") + ".json", n = I.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, I.syncNtfyContent[t]]
                }
            })
        })
    }, Rt.prototype.getConsentProfile = function(e, t) {
        var o = this,
            n = {
                Identifier: e,
                TenantId: I.tenantId,
                Authorization: t
            };
        return new Promise(function(e) {
            o.getJSON(I.consentApi, n, e, e)
        })
    }, Rt.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, Rt.prototype.otFetch = function(r, i, s) {
        return void 0 === i && (i = !1), void 0 === s && (s = !1), u(this, void 0, void 0, function() {
            var t, o, n = this;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return y.checkMobileOfflineRequest(r) ? [4, y.otFetchOfflineFile(r)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 9, , 10]), b.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                            n.getJSON(r, null, e, e, i)
                        })];
                    case 3:
                        return [4, fetch(r)];
                    case 4:
                        return (t = e.sent(), s && t.headers.get("Access-Control-Allow-Credentials")) ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [4, t.json()];
                    case 7:
                        return [2, e.sent()];
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                    case 10:
                        return [2]
                }
            })
        })
    }, Rt.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null), void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0), i.withCredentials = !1, t)
            for (var s in t) i.setRequestHeader(s, t[s]);
        i.onload = function() {
            var e;
            200 <= this.status && this.status < 400 && this.responseText ? (e = void 0, e = r ? this.responseText : JSON.parse(this.responseText), o(e)) : n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, i.onerror = function(e) {
            n(e)
        }, i.send()
    };
    var Dt, Ht = Rt;

    function Rt() {}
    Mt.prototype.addLogoUrls = function() {
        y.checkMobileOfflineRequest(y.getBannerVersionUrl()) || (b.mobileOnlineURL.push(y.updateCorrectUrl(A.optanonLogo)), b.mobileOnlineURL.push(y.updateCorrectUrl(A.oneTrustFtrLogo)))
    }, Mt.prototype.getCookieLabel = function(e, t, o) {
        var n;
        return void 0 === o && (o = !0), e ? (n = e.Name, t ? '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span>\n                </a>\n            " : n) : ""
    }, Mt.prototype.getBannerSDKAssestsUrl = function() {
        return this.getBannerVersionUrl() + "/assets"
    }, Mt.prototype.getBannerVersionUrl = function() {
        var e = b.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + S.moduleInitializer.Version
    }, Mt.prototype.checkMobileOfflineRequest = function(e) {
        return S.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
    }, Mt.prototype.updateCorrectIABUrl = function(e) {
        var t, o = S.moduleInitializer.ScriptType;
        return o !== Me.LOCAL && o !== Me.LOCAL_TEST || (o = v.getURL(e), (t = (t = b.bannerScriptElement) && t.getAttribute("src") ? v.getURL(t.getAttribute("src")) : null) && o && t.hostname !== o.hostname && (e = (e = (t = "" + b.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, t.hostname))), e
    }, Mt.prototype.updateCorrectUrl = function(e, t) {
        if ((void 0 === t && (t = !1), b.previewMode) && new RegExp("^data:image/").test(e)) return e;
        var o = v.getURL(e),
            n = b.bannerScriptElement,
            n = n && n.getAttribute("src") ? v.getURL(n.getAttribute("src")) : null;
        if (n && o && n.hostname !== o.hostname) {
            var r = S.moduleInitializer.ScriptType;
            if (r === Me.LOCAL || r === Me.LOCAL_TEST) {
                if (t) return e;
                e = (n = b.bannerDataParentURL + "/" + b.getRegionRule().Id) + (null == (r = null == (r = e) ? void 0 : r.replace(null == (t = S.moduleInitializer) ? void 0 : t.CDNLocation, "")) ? void 0 : r.replace(/(^\/?)/, "/"))
            } else e = null == (t = e) ? void 0 : t.replace(o.hostname, n.hostname)
        }
        return e
    }, Mt.prototype.isBundleOrStackActive = function(n, r) {
        void 0 === r && (r = null);
        for (var i = I.oneTrustIABConsent, s = !0, a = (r = r || I.groupsConsent, 0);

            function() {
                var e, t, o = n.SubGroups[a];
                o.Status !== m.ALWAYS_ACTIVE && (o.Type === Ct ? (-1 < (t = v.findIndex(r, function(e) {
                    return e.split(":")[0] === o.CustomGroupId
                })) && "0" === r[t].split(":")[1] || !r.length) && (s = !1) : (e = o.Type === T.GroupTypes.Spl_Ft ? i.specialFeatures : i.purpose, (-1 < (t = v.findIndex(e, function(e) {
                    return e.split(":")[0] === o.IabGrpId
                })) && "false" === e[t].split(":")[1] || !e.length) && (s = !1))), a++
            }(), s && a < n.SubGroups.length;);
        return s
    }, Mt.prototype.otFetchOfflineFile = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return n = n.replace(".json", ".js"), t = n.split("/"), t = t[t.length - 1], o = t.split(".js")[0], [4, new Promise(function(e) {
                            function t() {
                                e(window[o])
                            }
                            y.jsonp(n, t, t)
                        })];
                    case 1:
                        return [2, e.sent()]
                }
            })
        })
    }, Mt.prototype.jsonp = function(e, t, o) {
        y.checkMobileOfflineRequest(e) || b.mobileOnlineURL.push(e);
        var n = document.createElement("script"),
            r = document.getElementsByTagName("head")[0];

        function i() {
            t()
        }
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || i()
        }, n.onload = i, n.onerror = function() {
            o()
        }, n.type = "text/javascript", n.async = !0, n.src = e, I.crossOrigin && n.setAttribute("crossorigin", I.crossOrigin), r.appendChild(n)
    }, Mt.prototype.isCookiePolicyPage = function(e) {
        for (var t = !1, o = v.removeURLPrefixes(window.location.href), n = P("<div></div>", "ce").el, r = (P(n).html(e), n.querySelectorAll("a")), i = 0; i < r.length; i++)
            if (v.removeURLPrefixes(r[i].href) === o) {
                t = !0;
                break
            }
        return t
    }, Mt.prototype.isBannerVisible = function() {
        var e = !1,
            t = document.getElementById("onetrust-banner-sdk");
        return e = t && t.getAttribute("style") ? -1 === t.getAttribute("style").replace(/\s/g, "").indexOf("display:none") : e
    }, Mt.prototype.hideBanner = function() {
        var e = this;
        I.bnrAnimationInProg ? setTimeout(function() {
            return e.hideBanner()
        }, 100) : P("#onetrust-banner-sdk").fadeOut(400)
    }, Mt.prototype.resetFocusToBody = function() {
        document.activeElement && document.activeElement.blur()
    }, Mt.prototype.getDuration = function(e) {
        var t, o = e.Length,
            e = e.DurationType;
        return o && 0 !== parseInt(o) ? (o = parseInt(o), e ? (t = 1 < (o = this.round_to_precision(o / e, .5)) ? st[e] + "s" : st[e], A.LifespanDurationText && 1 === e && (t = "LifespanDurationText"), o + " " + A[t]) : this.getDurationText(o)) : A.LfSpanSecs
    }, Mt.prototype.isDateCurrent = function(e) {
        var e = e.split("/"),
            t = parseInt(e[1]),
            o = parseInt(e[0]),
            e = parseInt(e[2]),
            n = new Date,
            r = n.getDate(),
            i = n.getFullYear(),
            n = n.getMonth() + 1;
        return i < e || e === i && n < o || e === i && o === n && r <= t
    }, Mt.prototype.insertFooterLogo = function(e) {
        var t = P(e).el;
        if (t.length && A.oneTrustFtrLogo) {
            var o = y.updateCorrectUrl(A.oneTrustFtrLogo);
            y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = v.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img"),
                    i = "Powered by OneTrust " + A.NewWinTxt;
                P(t[n]).attr("href", A.pCFooterLogoUrl), r.setAttribute("src", o), r.setAttribute("title", i), P(t[n]).attr("aria-label", i)
            }
        }
    }, Mt.prototype.getUTCFormattedDate = function(e) {
        e = new Date(e);
        return e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + e.getUTCDate().toString().toString().padStart(2, "0") + " " + e.getUTCHours() + ":" + e.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + e.getUTCSeconds().toString().toString().padStart(2, "0")
    }, Mt.prototype.getDurationText = function(e) {
        return 365 <= e ? (e = this.round_to_precision(e /= 365, .5)) + " " + (1 < e ? A.LfSpnYrs : A.LfSpnYr) : A.LifespanDurationText ? e + " " + A.LifespanDurationText : e + " " + (1 < e ? A.PCenterVendorListLifespanDays : A.PCenterVendorListLifespanDay)
    }, Mt.prototype.round_to_precision = function(e, t) {
        e = +e + (void 0 === t ? .5 : t / 2);
        return e - e % (void 0 === t ? 1 : +t)
    }, Mt.prototype.isOptOutEnabled = function() {
        return A.PCTemplateUpgrade ? I.genVenOptOutEnabled : A.allowHostOptOut
    }, Mt.prototype.findUserType = function(e) {
        I.isKeyboardUser = !(!e || 0 !== e.detail)
    }, Mt.prototype.getCSSPropsFromString = function(e) {
        var t, o;
        return e ? (t = e.length, o = {}, (e = e.endsWith(";") ? e.substring(0, t - 1) : e).trim().split(";").forEach(function(e) {
            e = e.trim().toString().split(":"), e = JSON.parse('{ "' + e[0].trim() + '" : "' + e[1].trim() + '" }');
            o = Object.assign(o, e)
        }), o) : {}
    }, Mt.prototype.setCloseIcon = function(e) {
        var t = y.updateCorrectUrl(A.OTCloseBtnLogo),
            e = P(e);
        e.length && d(e.el, 'background-image: url("' + t + '")', !0)
    }, Mt.prototype.createOptOutSignalElement = function(e, t) {
        var e = e(t ? "#ot-pc-content" : "#onetrust-policy"),
            o = document.createElement("div"),
            n = (o.classList.add("ot-optout-signal"), document.createElement("div")),
            r = (n.classList.add("ot-optout-icon"), document.createElement("span"));
        return r.innerText = t ? A.PCOptOutSignalText : A.BOptOutSignalText, o.append(n), o.append(r), null != (t = e) && t.prepend(o), this.applyGuardLogo(), o
    }, Mt.prototype.applyGuardLogo = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = A.cookiePersistentLogo).includes("ot_guard_logo.svg") || (o = A.OTCloseBtnLogo, n = o.indexOf("static/"), t = o.replace(o.slice(n + 7), "ot_guard_logo.svg")), (o = S.moduleInitializer.ScriptType) !== Me.LOCAL && o !== Me.LOCAL_TEST || (t = y.updateCorrectUrl(t)), [4, Dt.getPersistentCookieSvg(t)];
                    case 1:
                        return n = e.sent(), P(".ot-optout-icon").html(n), [2]
                }
            })
        })
    }, Mt.prototype.updateTCString = function() {
        var e = C.iabStringSDK().tcString().encode(I.tcModel);
        I.cmpApi.update(e, !1)
    }, Mt.prototype.replaceTextFromString = function(e, t, o) {
        return t.split(e).join(o)
    }, Mt.prototype.getStubQueryParam = function(e) {
        var t = b.stubUrl || window.otStubData && window.otStubData.stubUrl;
        return !t || (t = t.split("?")).length < 2 ? null : new URLSearchParams(t[1]).get(e)
    }, Mt.prototype.getStubAttr = function(e) {
        var t = b.bannerScriptElement,
            t = t && t.getAttribute(e);
        return t || y.getStubQueryParam(e)
    };
    var y, Ft = Mt;

    function Mt() {}
    t.prototype.getPurposeOneGrpId = function() {
        return T.IdPatterns.Pur + "1"
    }, t.prototype.setRegionRule = function(e) {
        this.rule = e
    }, t.prototype.getRegionRule = function() {
        return this.rule
    }, t.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }, t.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition : this.rule).UseGoogleVendors
    }, t.prototype.initVariables = function() {
        this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }, t.prototype.init = function(e) {
        this.getGPCSignal(), this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), A.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), this.populateGPCBrowserSignal(), A.GoogleConsent.GCEnable && this.initGCM()
    }, t.prototype.getGPCSignal = function() {
        navigator.globalPrivacyControl ? this.gpcEnabled = !0 : this.gpcEnabled = !1
    }, t.prototype.isValidConsentNoticeGroup = function(e, t) {
        var o, n, r, i, s;
        return !!e.ShowInPopup && (o = this.isGroupHasCookies(e), i = r = n = !1, null != (s = e) && s.Parent || (e.SubGroups.length && (n = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
        }), r = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
        }), !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function(e) {
            return -1 === St.indexOf(e.Type)
        }))), s = e.SubGroups.some(function(e) {
            return -1 < St.indexOf(e.Type)
        }), (-1 < St.indexOf(e.Type) || s) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0)), this.isValidGroup(o, e, n, r, i))
    }, t.prototype.isValidGroup = function(e, t, o, n, r) {
        var i = I.showVendorService && t.VendorServices && t.VendorServices.length;
        return e || -1 < St.indexOf(t.Type) || o || n || r || i
    }, t.prototype.isGroupHasCookies = function(e) {
        return e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length
    }, t.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf(T.IdPatterns.Spl_Pur) ? e = e.replace(T.IdPatterns.Spl_Pur, "") : -1 < e.indexOf(T.IdPatterns.Pur) ? e = e.replace(T.IdPatterns.Pur, "") : -1 < e.indexOf(T.IdPatterns.Ft) ? e = e.replace(T.IdPatterns.Ft, "") : -1 < e.indexOf(T.IdPatterns.Spl_Ft) && (e = e.replace(T.IdPatterns.Spl_Ft, "")), e
    }, t.prototype.isIabGrpAndNonConsentable = function(e) {
        var t = T.GroupTypes;
        return !this.isIab2orv2Template && -1 < St.indexOf(e.Type) || this.isIab2orv2Template && (e.Type === t.Pur || e.Type === t.Stack) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === t.Spl_Ft && !e.HasConsentOptOut
    }, t.prototype.setTcfPurposeParentMapForGrp = function(e) {
        var t = T.GroupTypes;
        if (this.isTcfV2Template && e.Parent) switch (e.Type) {
            case t.Pur:
                this.tcfParentMap.pur.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Spl_Pur:
                this.tcfParentMap.spl_pur.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Ft:
                this.tcfParentMap.ft.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Spl_Ft:
                this.tcfParentMap.spl_ft.set(parseInt(e.IabGrpId), e.Parent)
        }
    }, t.prototype.populateGroups = function(e, r) {
        var i = this,
            s = {},
            a = [],
            l = T.GroupTypes,
            t = (e.forEach(function(e) {
                var t = e.CustomGroupId;
                if (i.setHealthSignatureDataIntoGroup(r, e), void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !i.isIabGrpAndNonConsentable(e)) {
                    if (t !== b.getPurposeOneGrpId() || e.ShowInPopup || (i.purposeOneTreatment = !0), i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? a.push(e) : s[t] = e, i.isIab2orv2Template && -1 < St.indexOf(e.Type)) {
                        var o = i.extractGroupIdForIabGroup(t),
                            n = (i.iabGrpIdMap[t] = o, e.IabGrpId = o, {
                                description: e.GroupDescription,
                                descriptionLegal: e.DescriptionLegal,
                                id: Number(o),
                                name: e.GroupName
                            });
                        switch (e.Type) {
                            case l.Pur:
                                i.iabGroups.purposes[o] = n;
                                break;
                            case l.Spl_Pur:
                                i.iabGroups.specialPurposes[o] = n;
                                break;
                            case l.Ft:
                                i.iabGroups.features[o] = n;
                                break;
                            case l.Spl_Ft:
                                i.iabGroups.specialFeatures[o] = n
                        }
                    }
                    i.setTcfPurposeParentMapForGrp(e)
                }
            }), a.forEach(function(e) {
                s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < St.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
            }), []);
        return Object.keys(s).forEach(function(e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }), t.push(s[e]))
        }), this.initGrpVar(t), t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }, t.prototype.setHealthSignatureDataIntoGroup = function(e, t) {
        this.requireSignatureEnabled && e.RequireSignatureCID === t.CustomGroupId && (t.needsHealthSignature = !0, "1" === g.readCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION)) && (t.healthSignatureId = g.readCookieParam(h.OPTANON_CONSENT, p.CONSENT_ID))
    }, t.prototype.isGrpConsentable = function(e) {
        var t = T.GroupTypes;
        return e.Type === t.Cookie || e.Type === t.Pur || e.Type === t.Spl_Ft
    }, t.prototype.initGrpVar = function(e) {
        var o = this,
            n = !0,
            r = !0;
        e.forEach(function(e) {
            M([e], e.SubGroups).forEach(function(e) {
                var t;
                o.isGrpConsentable(e) && (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < vt.indexOf(e.Type) && o.consentableGrps.push(e), -1 < kt.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === vt.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = m.INACTIVE), (t = o.DNTEnabled && e.IsDntEnabled ? m.DNT : e.Status.toLowerCase()) !== m.ACTIVE && t !== m.INACTIVE_LANDING_PAGE && t !== m.DNT || (n = !1), t !== m.INACTIVE_LANDING_PAGE && t !== m.ALWAYS_ACTIVE && (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }), this.isOptInMode = n, this.isSoftOptInMode = r
    }, t.prototype.domainDataMapper = function(e) {
        this.requireSignatureEnabled = (null == (t = S.fp) ? void 0 : t.CookieV2SubmitPurpose) && e.IsRequireSignatureEnabled && e.PCTemplateUpgrade;
        var t = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            AlwaysInactiveText: e.AlwaysInactiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BShowOptOutSignal: e.BShowOptOutSignal,
            BOptOutSignalText: e.BOptOutSignalText,
            BRegionAriaLabel: e.BRegionAriaLabel,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime,
                GCAdUserData: e.GCAdUserData,
                GCAdPersonalization: e.GCAdPersonalization
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: null != (t = e.OverriddenVendors) ? t : {},
            OverridenGoogleVendors: null != (t = e.OverridenGoogleVendors) ? t : {},
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle || Se.Checkbox,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl,
            PCShowOptOutSignal: e.PCShowOptOutSignal,
            PCOptOutSignalText: e.PCOptOutSignalText,
            PCRegionAriaLabel: e.PCRegionAriaLabel,
            PCHostNotFound: e.PCHostNotFound,
            PCVendorNotFound: e.PCVendorNotFound,
            PCTechNotFound: e.PCTechNotFound,
            UseNonStandardStacks: e.UseNonStandardStacks,
            RequireSignatureCID: e.RequireSignatureCID,
            IsRequireSignatureEnabled: e.IsRequireSignatureEnabled,
            PCRequireSignatureHelpText: e.PCRequireSignatureHelpText,
            PCRequireSignatureFieldLabel: e.PCRequireSignatureFieldLabel,
            PCRequireSignatureHeaderText: e.PCRequireSignatureHeaderText,
            PCRequireSignatureHeaderDesc: e.PCRequireSignatureHeaderDesc,
            PCRequireSignatureRejectBtnText: e.PCRequireSignatureRejectBtnText,
            PCRequireSignatureConfirmBtnText: e.PCRequireSignatureConfirmBtnText
        };
        this.setPCDomainData(t, e), this.setAdditionalTechnologies(t, e), this.setVendorServiceConfigData(t, e), this.setDomainCommonDataDefaults(t, e), this.setDomainPCDataDefaults(t, e), this.setGppData(t, e), e.PCTemplateUpgrade && (e.Center || e.Panel) && (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== le.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), S.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), A = R(R({}, A), t)
    }, t.prototype.setGppData = function(e, t) {
        e.GPPPurposes = R({}, t.GPPPurposes), e.IsGPPDataProcessingApplicable = t.IsGPPDataProcessingApplicable, e.IsGPPEnabled = t.IsGPPEnabled, e.IsGPPKnownChildApplicable = t.IsGPPKnownChildApplicable, e.IsMSPAEnabled = t.IsMSPAEnabled, e.MSPAOptionMode = t.MSPAOptionMode, e.UseGPPUSNational = t.UseGPPUSNational
    }, t.prototype.setPCDomainData = function(e, t) {
        e.PCAccordionStyle = le.Caret, e.PCActiveText = t.PCActiveText, e.PCCloseButtonType = t.PCCloseButtonType, e.PCContinueText = t.PCContinueText, e.PCCookiePolicyLinkScreenReader = t.PCCookiePolicyLinkScreenReader, e.PCCookiePolicyText = t.PCCookiePolicyText, e.PCenterAllowAllConsentText = t.PCenterAllowAllConsentText, e.PCenterApplyFiltersText = t.PCenterApplyFiltersText, e.PCenterBackText = t.PCenterBackText, e.PCenterCancelFiltersText = t.PCenterCancelFiltersText, e.PCenterClearFiltersText = t.PCenterClearFiltersText, e.PCenterCookiesListText = t.PCenterCookiesListText, e.PCenterEnableAccordion = t.PCenterEnableAccordion, e.PCenterFilterText = t.PCenterFilterText, e.PCenterGeneralVendorsText = t.PCenterGeneralVendorsText, e.PCenterRejectAllButtonText = t.PCenterRejectAllButtonText, e.PCenterSelectAllVendorsText = t.PCenterSelectAllVendorsText, e.PCenterShowRejectAllButton = t.PCenterShowRejectAllButton, e.PCenterUserIdDescriptionText = t.PCenterUserIdDescriptionText, e.PCenterUserIdNotYetConsentedText = t.PCenterUserIdNotYetConsentedText, e.PCenterUserIdTimestampTitleText = t.PCenterUserIdTimestampTitleText, e.PCenterUserIdTitleText = t.PCenterUserIdTitleText, e.PCenterVendorListDescText = t.PCenterVendorListDescText, e.PCenterVendorListDisclosure = t.PCenterVendorListDisclosure, e.PCenterVendorListLifespan = t.PCenterVendorListLifespan, e.PCenterVendorListLifespanDay = t.PCenterVendorListLifespanDay, e.PCenterVendorListLifespanDays = t.PCenterVendorListLifespanDays, e.PCenterVendorListLifespanMonth = t.PCenterVendorListLifespanMonth, e.PCenterVendorListLifespanMonths = t.PCenterVendorListLifespanMonths, e.PCenterVendorListNonCookieUsage = t.PCenterVendorListNonCookieUsage, e.PCenterVendorListStorageDomain = t.PCenterVendorListStorageDomain, e.PCVLSDomainsUsed = t.PCVLSDomainsUsed, e.PCVLSUse = t.PCVLSUse, e.PCenterVendorListStorageIdentifier = t.PCenterVendorListStorageIdentifier, e.PCenterVendorListStoragePurposes = t.PCenterVendorListStoragePurposes, e.PCenterVendorListStorageType = t.PCenterVendorListStorageType, e.PCenterVendorsListText = t.PCenterVendorsListText, e.PCenterViewPrivacyPolicyText = t.PCenterViewPrivacyPolicyText, e.PCGoogleVendorsText = t.PCGoogleVendorsText, e.PCGrpDescLinkPosition = t.PCGrpDescLinkPosition, e.PCGrpDescType = t.PCGrpDescType, e.PCGVenPolicyTxt = t.PCGeneralVendorsPolicyText, e.PCIABVendorsText = t.PCIABVendorsText, e.PCIABVendorLegIntClaimText = t.PCIABVendorLegIntClaimText, e.PCVListDataDeclarationText = t.PCVListDataDeclarationText, e.PCVListDataRetentionText = t.PCVListDataRetentionText, e.PCVListStdRetentionText = t.PCVListStdRetentionText, e.IABDataCategories = t.IABDataCategories, e.PCInactiveText = t.PCInactiveText, e.PCIllusText = t.PCIllusText, e.PCLogoAria = t.PCLogoScreenReader, e.PCOpensCookiesDetailsAlert = t.PCOpensCookiesDetailsAlert, e.PCenterVendorListScreenReader = t.PCenterVendorListScreenReader, e.PCOpensVendorDetailsAlert = t.PCOpensVendorDetailsAlert, e.PCenterDynamicRenderingEnable = t.PCenterDynamicRenderingEnable, e.PCTemplateUpgrade = t.PCTemplateUpgrade, e.PCVendorFullLegalText = t.PCVendorFullLegalText, e.PCViewCookiesText = t.PCViewCookiesText, e.PCLayout = {
            Center: t.Center,
            List: t.List,
            Panel: t.Panel,
            Popup: t.Popup,
            Tab: t.Tab
        }, e.PCenterVendorListLinkText = t.PCenterVendorListLinkText, e.PCenterVendorListLinkAriaLabel = t.PCenterVendorListLinkAriaLabel, e.PreferenceCenterPosition = t.PreferenceCenterPosition, e.PCVendorsCountText = t.PCVendorsCountText, e.PCVendorsCountFeatureText = t.PCVendorsCountFeatureText, e.PCVendorsCountSpcFeatureText = t.PCVendorsCountSpcFeatureText, e.PCVendorsCountSpcPurposeText = t.PCVendorsCountSpcPurposeText
    }, t.prototype.setVendorServiceConfigData = function(e, t) {
        e.VendorServiceConfig = {
            PCVSOptOut: t.PCVSOptOut,
            PCVSEnable: t.PCVSEnable,
            PCVSExpandCategory: t.PCVSExpandCategory,
            PCVSExpandGroup: t.PCVSExpandGroup,
            PCVSCategoryView: t.PCVSCategoryView,
            PCVSNameText: t.PCVSNameText,
            PCVSAllowAllText: t.PCVSAllowAllText,
            PCVSListTitle: t.PCVSListTitle,
            PCVSParentCompanyText: t.PCVSParentCompanyText,
            PCVSAddressText: t.PCVSAddressText,
            PCVSDefaultCategoryText: t.PCVSDefaultCategoryText,
            PCVSDefaultDescriptionText: t.PCVSDefaultDescriptionText,
            PCVSDPOEmailText: t.PCVSDPOEmailText,
            PCVSDPOLinkText: t.PCVSDPOLinkText,
            PCVSPrivacyPolicyLinkText: t.PCVSPrivacyPolicyLinkText,
            PCVSCookiePolicyLinkText: t.PCVSCookiePolicyLinkText,
            PCVSOptOutLinkText: t.PCVSOptOutLinkText,
            PCVSLegalBasisText: t.PCVSLegalBasisText
        }
    }, t.prototype.setAdditionalTechnologies = function(e, t) {
        e.AdditionalTechnologiesConfig = {
            PCShowTrackingTech: t.PCShowTrackingTech,
            PCCookiesLabel: t.PCCookiesLabel,
            PCTechDetailsText: t.PCTechDetailsText,
            PCTrackingTechTitle: t.PCTrackingTechTitle,
            PCLocalStorageLabel: t.PCLocalStorageLabel,
            PCSessionStorageLabel: t.PCSessionStorageLabel,
            PCTechDetailsAriaLabel: t.PCTechDetailsAriaLabel,
            PCLocalStorageDurationText: t.PCLocalStorageDurationText,
            PCSessionStorageDurationText: t.PCSessionStorageDurationText
        }
    }, t.prototype.setDomainCommonDataDefaults = function(e, t) {
        e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "", e.BannerDPDDescription = t.BannerDPDDescription || [], e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "", e.BannerDPDTitle = t.BannerDPDTitle || "", e.CategoriesText = t.CategoriesText || "Categories", e.CookiesText = t.CookiesText || "Cookies", e.CookiesDescText = t.CookiesDescText || "Description", e.LifespanText = t.LifespanText || "Lifespan", e.LifespanTypeText = t.LifespanTypeText || "Session", e.PCenterConsentText = t.PCenterConsentText || "Consent"
    }, t.prototype.setDomainPCDataDefaults = function(e, t) {
        e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter", e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search", e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search", e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied", e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared", e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest", e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest", e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter", e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search", e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search", e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies", e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels, e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
    }, t.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo,
            OTCloseBtnLogo: e.OTCloseBtnLogo,
            OTExternalLinkLogo: e.OTExternalLinkLogo
        };
        this.cookieListMapper(t, e), A = R(R({}, A), t), this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }, t.prototype.cookieListMapper = function(e, t) {
        e.TTLGroupByTech = t.TTLGroupByTech, e.TTLShowTechDesc = t.TTLShowTechDesc
    }, t.prototype.setPublicDomainData = function(n) {
        this.pubDomainData = {
            AboutCookiesText: n.AboutCookiesText,
            AboutLink: n.AboutLink,
            AboutText: n.AboutText,
            ActiveText: n.ActiveText,
            AddLinksToCookiepedia: n.AddLinksToCookiepedia,
            AlertAllowCookiesText: n.AlertAllowCookiesText,
            AlertCloseText: n.AlertCloseText,
            AlertLayout: n.AlertLayout,
            AlertMoreInfoText: n.AlertMoreInfoText,
            AlertNoticeText: n.AlertNoticeText,
            AllowAllText: n.PreferenceCenterConfirmText,
            AlwaysActiveText: n.AlwaysActiveText,
            AlwaysInactiveText: n.AlwaysInactiveText,
            BAnimation: n.BAnimation,
            BannerCloseButtonText: n.BannerCloseButtonText,
            BannerDPDDescription: n.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: n.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: n.BannerDPDTitle || "",
            BannerFeatureDescription: n.BannerFeatureDescription,
            BannerFeatureTitle: n.BannerFeatureTitle,
            BannerIABPartnersLink: n.BannerIABPartnersLink,
            BannerInformationDescription: n.BannerInformationDescription,
            BannerInformationTitle: n.BannerInformationTitle,
            BannerPosition: n.BannerPosition,
            BannerPurposeDescription: n.BannerPurposeDescription,
            BannerPurposeTitle: n.BannerPurposeTitle,
            BannerRejectAllButtonText: n.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: n.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: n.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: n.BannerShowRejectAllButton,
            BannerTitle: n.BannerTitle,
            BCategoryContainerColor: n.BCategoryContainerColor,
            BCategoryStyle: n.BCategoryStyle,
            BCategoryStyleColor: n.BCategoryStyleColor,
            BCloseButtonType: n.BCloseButtonType,
            BContinueText: n.BContinueText,
            BInitialFocus: n.BInitialFocus,
            BInitialFocusLinkAndButton: n.BInitialFocusLinkAndButton,
            BLineBreakColor: n.BLineBreakColor,
            BRejectConsentType: n.BRejectConsentType,
            BSaveBtnColor: n.BSaveBtnColor,
            BSaveBtnTxt: n.BSaveBtnText,
            BShowSaveBtn: n.BShowSaveBtn,
            CategoriesText: n.CategoriesText,
            cctId: n.cctId,
            ChoicesBanner: n.ChoicesBanner,
            CloseShouldAcceptAllCookies: n.CloseShouldAcceptAllCookies,
            CloseText: n.CloseText,
            ConfirmText: n.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: n.ConsentModel
            },
            CookieListDescription: n.CookieListDescription,
            CookieListTitle: n.CookieListTitle,
            CookieSettingButtonText: n.CookieSettingButtonText,
            CookiesText: n.CookiesText,
            CookiesDescText: n.CookiesDescText,
            CookiesUsedText: n.CookiesUsedText,
            CustomJs: n.CustomJs,
            Domain: S.moduleInitializer.Domain,
            FooterDescriptionText: n.FooterDescriptionText,
            ForceConsent: n.ForceConsent,
            GeneralVendors: n.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: n.GCAdStorage,
                GCAnalyticsStorage: n.GCAnalyticsStorage,
                GCEnable: n.GCEnable,
                GCFunctionalityStorage: n.GCFunctionalityStorage,
                GCPersonalizationStorage: n.GCPersonalizationStorage,
                GCRedactEnable: n.GCRedactEnable,
                GCSecurityStorage: n.GCSecurityStorage,
                GCWaitTime: n.GCWaitTime,
                GCAdUserData: n.GCAdUserData,
                GCAdPersonalization: n.GCAdPersonalization
            },
            Groups: null,
            HideToolbarCookieList: n.HideToolbarCookieList,
            IabType: n.IabType,
            InactiveText: n.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: n.IsConsentLoggingEnabled,
            IsIABEnabled: n.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: n.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: n.IsLifespanEnabled,
            Language: n.Language,
            LastReconsentDate: n.LastReconsentDate,
            LifespanDurationText: n.LifespanDurationText,
            LifespanText: n.LifespanText,
            LifespanTypeText: n.LifespanTypeText,
            MainInfoText: n.MainInfoText,
            MainText: n.MainText,
            ManagePreferenceText: n.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: n.NextPageAcceptAllCookies,
            NextPageCloseBanner: n.NextPageCloseBanner,
            NoBanner: n.NoBanner,
            OnClickAcceptAllCookies: n.OnClickAcceptAllCookies,
            OnClickCloseBanner: n.OnClickCloseBanner,
            OverridenGoogleVendors: n.OverridenGoogleVendors,
            PCAccordionStyle: le.Caret,
            PCCloseButtonType: n.PCCloseButtonType,
            PCContinueText: n.PCContinueText,
            PCenterAllowAllConsentText: n.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: n.PCenterApplyFiltersText,
            PCenterBackText: n.PCenterBackText,
            PCenterCancelFiltersText: n.PCenterCancelFiltersText,
            PCenterClearFiltersText: n.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: n.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: n.PCenterCookiesListText,
            PCenterEnableAccordion: n.PCenterEnableAccordion,
            PCenterExpandToViewText: n.PCenterExpandToViewText,
            PCenterFilterAppliedAria: n.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: n.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: n.PCenterFilterText,
            PCenterRejectAllButtonText: n.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: n.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: n.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: n.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: n.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: n.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: n.PCenterUserIdTitleText,
            PCenterVendorListDescText: n.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: n.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: n.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: n.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: n.PCFirstPartyCookieListText,
            PCGoogleVendorsText: n.PCGoogleVendorsText,
            PCGrpDescLinkPosition: n.PCGrpDescLinkPosition,
            PCGrpDescType: n.PCGrpDescType,
            PCIABVendorsText: n.PCIABVendorsText,
            PCIABVendorLegIntClaimText: n.PCIABVendorLegIntClaimText,
            PCVListDataDeclarationText: n.PCVListDataDeclarationText,
            PCVListDataRetentionText: n.PCVListDataRetentionText,
            PCVListStdRetentionText: n.PCVListStdRetentionText,
            IABDataCategories: n.IABDataCategories,
            PCLogoAria: n.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: n.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: n.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: n.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: n.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: n.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: n.PCTemplateUpgrade,
            PCVendorFullLegalText: n.PCVendorFullLegalText,
            PCViewCookiesText: n.PCViewCookiesText,
            PCLayout: {
                Center: n.Center,
                List: n.List,
                Panel: n.Panel,
                Popup: n.Popup,
                Tab: n.Tab
            },
            PCenterVendorListLinkText: n.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: n.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: n.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: n.PCenterImprintLinkText,
            PCenterImprintLinkUrl: n.PCenterImprintLinkUrl,
            PreferenceCenterPosition: n.PreferenceCenterPosition,
            ScrollAcceptAllCookies: n.ScrollAcceptAllCookies,
            ScrollCloseBanner: n.ScrollCloseBanner,
            ShowAlertNotice: n.ShowAlertNotice,
            showBannerCloseButton: n.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: n.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: n.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(n.PCTemplateUpgrade),
            VendorConsentModel: n.VendorConsentModel,
            VendorLevelOptOut: n.IsIabEnabled,
            VendorListText: n.VendorListText,
            CookiesV2NewCookiePolicy: !1
        }, n.PCTemplateUpgrade && (n.Center || n.Panel) && n.PCAccordionStyle !== le.NoAccordion && (this.pubDomainData.PCAccordionStyle = n.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = n.PCAccordionStyle !== le.NoAccordion;
        var r = [];
        n.Groups.forEach(function(e) {
            var t, o;
            !n.IsIabEnabled && e.IsIabPurpose || (e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies)), o = null == (o = e.Hosts) ? void 0 : o.reduce(function(e, t) {
                return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
            }, []), (t = e.Cookies).push.apply(t, o), r.push(e))
        }), this.pubDomainData.Groups = r
    }, t.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e, this.setDomainElementAttributes()
    }, t.prototype.setGCMcallback = function() {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function(e) {
            e && "consent.changed" === e.event && (b.gcmUpdateCallback = e.listener)
        })
    }, t.prototype.setDomainElementAttributes = function() {
        var e;
        this.bannerScriptElement && ((e = y.getStubAttr(qe)) && this.setUseDocumentLanguage("true" === e), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html")) && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html"))
    }, t.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }, t.prototype.setPcName = function() {
        var e = A.PCLayout;
        e.Center ? this.pcName = et : e.Panel ? this.pcName = ot : e.Popup ? this.pcName = nt : e.List ? this.pcName = tt : e.Tab && (this.pcName = rt)
    }, t.prototype.setBannerName = function() {
        A.Flat ? this.bannerName = We : A.FloatingRoundedCorner ? this.bannerName = Ye : A.FloatingFlat ? this.bannerName = Je : A.FloatingRounded ? this.bannerName = Qe : A.FloatingRoundedIcon ? this.bannerName = Xe : A.CenterRounded ? this.bannerName = Ke : A.ChoicesBanner ? this.bannerName = Ze : A.NoBanner && (this.bannerName = $e)
    }, t.prototype.populateGPCSignal = function() {
        var e = g.readCookieParam(h.OPTANON_CONSENT, p.GPC_ENABLED),
            t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled, g.writeCookieParam(h.OPTANON_CONSENT, p.GPC_ENABLED, t)
    }, t.prototype.populateGPCBrowserSignal = function() {
        var e = g.readCookieParam(h.OPTANON_CONSENT, p.GPC_Browser_Flag),
            t = this.gpcEnabled ? "1" : "0";
        this.gpcBrowserValueChanged = e !== t, g.writeCookieParam(h.OPTANON_CONSENT, p.GPC_Browser_Flag, t)
    }, t.prototype.initGCM = function() {
        var o = [],
            e = (Object.keys(this.rule.States).forEach(function(t) {
                b.rule.States[t].forEach(function(e) {
                    o.push((t + "-" + e).toUpperCase())
                })
            }), b.rule.Countries.map(function(e) {
                return e.toUpperCase()
            }));
        b.gcmCountries = e.concat(o)
    };
    var qt = t;

    function t() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.gpcValueChanged = !1, this.gpcBrowserValueChanged = !1, this.conditionalLogicEnabled = !1, this.allConditionsFailed = !1, this.canUseConditionalLogic = !1, this.gtmUpdatedinStub = !1, this.gcmDevIdSet = !1, this.tcf2ActiveVendors = {
            all: 0,
            pur: new Map,
            ft: new Map,
            spl_pur: new Map,
            spl_ft: new Map,
            stack: new Map
        }, this.tcfParentMap = {
            pur: new Map,
            ft: new Map,
            spl_pur: new Map,
            spl_ft: new Map
        }
    }
    var b, A = {};

    function Ut() {
        this.otSDKVersion = "202408.1.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.isGacSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.initialGroupsConsent = [], this.hostsConsent = [], this.initialHostConsent = [], this.genVendorsConsent = {}, this.vsConsent = new Map, this.initialGenVendorsConsent = {}, this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.addtlConsentVersion = "1~", this.initialAddtlVendorsList = {}, this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        }, this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
            country: "",
            state: ""
        }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showVendorService = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.gpcConsentTxn = !1, this.vsIsActiveAndOptOut = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.isKeyboardUser = !1, this.customerStyles = new Map, this.showTrackingTech = !1, this.currentTrackingTech = {}
    }
    Ut.prototype.getVendorsInDomain = function() {
        var e, t;
        return I._vendorsInDomain || (e = new Map, t = null != (t = A.Groups) ? t : [], I.setVendorServicesMap(t, e), I._vendorsInDomain = e), I._vendorsInDomain
    }, Ut.prototype.setVendorServicesMap = function(e, t) {
        for (var o, n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i.SubGroups && 0 < i.SubGroups.length && I.setVendorServicesMap(i.SubGroups, t);
            for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                var l = a[s],
                    c = Object.assign({}, i);
                delete c.VendorServices, l.groupRef = c, t.set(l.CustomVendorServiceId, l)
            }
        }
    }, Ut.prototype.clearVendorsInDomain = function() {
        I._vendorsInDomain = null
    }, Ut.prototype.checkVendorConsent = function(e) {
        return I.vendorsSetting[e] && I.vendorsSetting[e].consent
    };
    var I = new Ut;

    function o() {}
    o.prototype.initializeBannerVariables = function(e) {
        var t = e.DomainData;
        b.iabType = t.IabType, t = t.PCTemplateUpgrade, k = t ? Et : Ot, t = b.iabType, T = "IAB2" === t ? Vt : Bt, b.init(e), I.showGeneralVendors = A.GeneralVendorsEnabled && A.PCTemplateUpgrade, I.showVendorService = S.fp.CookieV2VendorServiceScript && A.VendorServiceConfig.PCVSEnable && !b.isIab2orv2Template && A.PCTemplateUpgrade, I.vsIsActiveAndOptOut = I.showVendorService && A.VendorServiceConfig.PCVSOptOut, I.showTrackingTech = S.fp.CookieV2TrackingTechPrefCenter && A.AdditionalTechnologiesConfig.PCShowTrackingTech, I.genVenOptOutEnabled = I.showGeneralVendors && A.GenVenOptOut, y.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
    }, o.prototype.initializeVendorInOverriddenVendors = function(e, t) {
        A.OverriddenVendors[e] = {
            disabledCP: [],
            disabledLIP: [],
            active: t,
            legInt: !1,
            consent: !1
        }
    }, o.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
        var r = A.GlobalRestrictions,
            i = A.OverriddenVendors;
        switch (A.Publisher.restrictions[o] || (A.Publisher.restrictions[o] = {}), i[t] || this.initializeVendorInOverriddenVendors(t, !0), i[t].disabledCP || (i[t].disabledCP = []), i[t].disabledLIP || (i[t].disabledLIP = []), r[o]) {
            case ue.Disabled:
                (n ? i[t].disabledCP : i[t].disabledLIP).push(o), A.Publisher.restrictions[o][t] = ue.Disabled;
                break;
            case ue.Consent:
                n ? (i[t].consent = !0, A.Publisher.restrictions[o][t] = ue.Consent) : (i[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                break;
            case ue.LegInt:
                n ? (i[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0, A.Publisher.restrictions[o][t] = ue.LegInt);
                break;
            case void 0:
                n ? i[t].consent = !0 : i[t].legInt = !0
        }
    }, o.prototype.checkFlexiblePurpose = function(e, t, o, n) {
        e.flexiblePurposes.includes(o) ? (n ? A.OverriddenVendors[t].legInt = !0 : A.OverriddenVendors[t].consent = !0, A.Publisher.restrictions[o][t] = n ? ue.LegInt : ue.Consent) : A.Publisher.restrictions[o][t] = ue.Disabled
    }, o.prototype.getActivePurposesForVendor = function(e, t) {
        var o = A.OverriddenVendors[t] && A.OverriddenVendors[t].disabledCP,
            n = A.OverriddenVendors[t] && A.OverriddenVendors[t].disabledLIP,
            o = o ? this.removeElementsFromArray(e.purposes, A.OverriddenVendors[t].disabledCP) || [] : e.purposes || [],
            n = n ? this.removeElementsFromArray(e.legIntPurposes, A.OverriddenVendors[t].disabledLIP) || [] : e.legIntPurposes || [],
            t = M(o, n, e.flexiblePurposes || []);
        return new Set(t)
    }, o.prototype.canInferGCMSettingsFromTCString = function() {
        return b.isTcfV2Template && A.GoogleConsent.GCEnable
    }, o.prototype.shouldOverrideTCData = function() {
        var e = this.canInferGCMSettingsFromTCString();
        return A.UseGoogleVendors || e
    }, o.prototype.setActiveVendorCount = function(o, e) {
        var n, r, i, s = this,
            a = [];
        "IAB2V2" === b.getRegionRuleType() && (n = new Set, r = b.tcf2ActiveVendors, (i = this.getActivePurposesForVendor(o, e)).forEach(function(e) {
            var t = r.pur.get(e) || 0;
            r.pur.set(e, t + 1), b.tcfParentMap.pur.get(e) && n.add(b.tcfParentMap.pur.get(e))
        }), o.specialPurposes && o.specialPurposes.forEach(function(e) {
            var t = r.spl_pur.get(e) || 0;
            r.spl_pur.set(e, t + 1), b.tcfParentMap.spl_pur.get(e) && (n.add(b.tcfParentMap.spl_pur.get(e)), t = b.tcfParentMap.spl_pur.get(e), s.updateParentCountByType(t, r, o, a, i))
        }), o.features && o.features.forEach(function(e) {
            var t = r.ft.get(e) || 0;
            r.ft.set(e, t + 1), b.tcfParentMap.ft.get(e) && (n.add(b.tcfParentMap.ft.get(e)), t = b.tcfParentMap.ft.get(e), s.updateParentCountByType(t, r, o, a, i))
        }), o.specialFeatures && o.specialFeatures.forEach(function(e) {
            var t = r.spl_ft.get(e) || 0;
            r.spl_ft.set(e, t + 1), b.tcfParentMap.spl_ft.get(e) && (n.add(b.tcfParentMap.spl_ft.get(e)), t = b.tcfParentMap.spl_ft.get(e), s.updateParentCountByType(t, r, o, a, i))
        }), n.forEach(function(e) {
            var t = r.stack.get(e) || 0;
            r.stack.set(e, t + 1)
        }))
    }, o.prototype.updateParentCountByType = function(e, t, o, n, r) {
        var i, s, a, l;
        e && !n.includes(e) && (i = !1, a = e.split("_"), s = ["IAB2V2", "IFE2V2", "ISP2V2", "ISF2V2"].includes(a[0]), 1 < a.length) && s && (s = this.readProp(bt, a[0]), a = parseInt(a[1]), l = void 0, (s === bt.IAB2V2 && !r.has(a) || s !== bt.IAB2V2 && (l = o[this.readProp(At, s)]) && !l.includes(a)) && (i = !0), s) && i && ((r = t[s].get(a)) ? t[s].set(a, r + 1) : (t[s].set(a, 1), n.push(e)))
    }, o.prototype.readProp = function(e, t) {
        var o, n = "";
        for (o in e)
            if (t === o) {
                n = e[o];
                break
            }
        return n
    }, o.prototype.isVendorInvalid = function(e, t) {
        var o = !1,
            n = !e.purposes.length && !e.flexiblePurposes.length,
            r = (A.OverriddenVendors[t] && !A.OverriddenVendors[t].consent && (n = !0), !0);
        return b.legIntSettings.PAllowLI && e.legIntPurposes.length && (!A.OverriddenVendors[t] || A.OverriddenVendors[t].legInt) && (r = !1), o = !n || !r || e.specialPurposes.length || e.features.length || e.specialFeatures.length ? o : !0
    }, o.prototype.removeInActiveVendorsForTcf = function(r) {
        var i = this,
            s = I.iabData.vendorListVersion,
            e = A.Publisher,
            a = A.GlobalRestrictionEnabled;
        0 !== Object.keys(e).length && e && Object.keys(e.restrictions).length;
        Object.keys(r.vendors).forEach(function(t) {
            var o = r.vendors[t],
                e = !1,
                n = i.getVendorGVLVersion(o),
                n = (s < n && (A.NewVendorsInactiveEnabled ? (i.initializeVendorInOverriddenVendors(t, !1), e = !0) : a && (o.purposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                }), o.legIntPurposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                }))), A.OverriddenVendors[t] && !A.OverriddenVendors[t].active && (e = !0), -1 < A.Vendors.indexOf(Number(t)) && (e = !0), i.isVendorInvalid(o, t));
            (e = e || n) && delete r.vendors[t], e || i.setActiveVendorCount(o, t)
        })
    }, o.prototype.getVendorGVLVersion = function(e) {
        return b.isTcfV2Template ? e.iab2V2GVLVersion : e.iab2GVLVersion
    }, o.prototype.removeElementsFromArray = function(e, t) {
        return e.filter(function(e) {
            return !t.includes(e)
        })
    }, o.prototype.setPublisherRestrictions = function() {
        var i, t, s, a, e = A.Publisher;
        e && e.restrictions && (i = this.iabStringSDK(), t = e.restrictions, s = I.iabData, a = I.oneTrustIABConsent.vendorList.vendors, Object.keys(t).forEach(function(o) {
            var n, r = t[o],
                e = b.iabGroups.purposes[o];
            e && (n = {
                description: e.description,
                purposeId: e.id,
                purposeName: e.name
            }), Object.keys(r).forEach(function(e) {
                var t;
                I.vendorsSetting[e] && (t = I.vendorsSetting[e].arrIndex, 1 === r[e] && -1 === a[e].purposes.indexOf(Number(o)) ? s.vendors[t].purposes.push(n) : 2 === r[e] && -1 === a[e].legIntPurposes.indexOf(Number(o)) && s.vendors[t].legIntPurposes.push(n), t = i.purposeRestriction(Number(o), r[e]), I.tcModel.publisherRestrictions.add(Number(e), t))
            })
        }))
    }, o.prototype.populateVendorListTCF = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = this.iabStringSDK(), o = I.iabData, n = y.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), y.checkMobileOfflineRequest(y.getBannerVersionUrl())) ? [3, 1] : (b.mobileOnlineURL.push(n), i = t.gvl(I.consentLanguage, n, I.gvlObj), [3, 3]);
                    case 1:
                        return a = (s = t).gvl, l = [I.consentLanguage, null], [4, y.otFetchOfflineFile(v.getRelativeURL(n, !0))];
                    case 2:
                        i = a.apply(s, l.concat([e.sent()])), e.label = 3;
                    case 3:
                        return this.removeInActiveVendorsForTcf(i), b.tcf2ActiveVendors.all = Object.keys(i.vendors).length, I.oneTrustIABConsent.vendorList = i, this.assignIABDataWithGlobalVendorList(i), c = I, [4, t.tcModel(i)];
                    case 4:
                        c.tcModel = e.sent(), r && this.setPublisherRestrictions(), I.tcModel.cmpId = parseInt(o.cmpId), b.isTcfV2Template && (I.tcModel.useNonStandardTexts = A.UseNonStandardStacks), I.tcModel.cmpVersion = parseInt(o.cmpVersion);
                        try {
                            I.tcModel.consentLanguage = I.consentLanguage
                        } catch (e) {
                            I.tcModel.consentLanguage = "EN"
                        }
                        return I.tcModel.consentScreen = parseInt(o.consentScreen), I.tcModel.isServiceSpecific = r, I.tcModel.purposeOneTreatment = b.purposeOneTreatment, A.PublisherCC ? I.tcModel.publisherCountryCode = A.PublisherCC : I.userLocation.country && (I.tcModel.publisherCountryCode = I.userLocation.country), I.cmpApi = t.cmpApi(I.tcModel.cmpId, I.tcModel.cmpVersion, r, this.shouldOverrideTCData() ? {
                            getTCData: this.overrideTCData,
                            getInAppTCData: this.overrideTCData
                        } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                }
            })
        })
    }, o.prototype.resetTCModel = function() {
        var e, t, o = this.iabStringSDK(),
            n = I.tcModel.clone();
        n.unsetAll(), b.legIntSettings.PAllowLI && (e = b.consentableIabGrps.filter(function(e) {
            return e.HasLegIntOptOut && e.Type === T.GroupTypes.Pur
        }).map(function(e) {
            return parseInt(b.iabGrpIdMap[e.CustomGroupId])
        }), t = Object.keys(I.vendorsSetting).filter(function(e) {
            return I.vendorsSetting[e].legInt
        }).map(function(e) {
            return parseInt(e)
        }), n.purposeLegitimateInterests.set(e), n.vendorLegitimateInterests.set(t), n.isServiceSpecific) && n.publisherLegitimateInterests.set(e), I.cmpApi.update(o.tcString().encode(n), !0)
    }, o.prototype.overrideTCData = function(e, t, o) {
        var n = C.canInferGCMSettingsFromTCString();
        t && t.tcString && (A.UseGoogleVendors && (t.addtlConsent = "" + I.addtlConsentVersion + (I.isAddtlConsent ? I.addtlVendors.vendorConsent.join(".") : "")), n) && (t.enableAdvertiserConsentMode = !0), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
    }, o.prototype.setIabData = function() {
        I.iabData = b.isTcfV2Template ? S.moduleInitializer.Iab2V2Data : S.moduleInitializer.IabV2Data, I.iabData.consentLanguage = I.consentLanguage
    }, o.prototype.assignIABDataWithGlobalVendorList = function(o) {
        var r = this,
            i = A.OverriddenVendors,
            s = (I.iabData.vendorListVersion = o.vendorListVersion, I.iabData.vendors = [], A.IABDataCategories);
        Object.keys(o.vendors).forEach(function(n) {
            I.vendorsSetting[n] = {
                consent: !0,
                legInt: !0,
                arrIndex: 0,
                specialPurposesOnly: !1
            };
            var e = {},
                t = o.vendors[n];
            e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, r.setIAB2VendorData(t, e), e.cookieMaxAge = v.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null, b.legIntSettings.PAllowLI && !r.shouldHaveVendorLIUnset(i, t, n) || (I.vendorsSetting[n].legInt = !1), b.legIntSettings.PAllowLI && r.vendorHasNoLIAndPurConsent(i, t, n) && t.specialPurposes.length && (I.vendorsSetting[n].specialPurposesOnly = !0, I.anyVendorHasOnlySplPur = !0), (!i[n] || i[n].consent) && (i[n] || t.purposes.length || t.flexiblePurposes.length) && (t.purposes.length || t.flexiblePurposes.length) || (I.vendorsSetting[n].consent = !1), e.features = t.features.reduce(function(e, t) {
                t = b.iabGroups.features[t];
                return t && e.push({
                    description: t.description,
                    featureId: t.id,
                    featureName: t.name
                }), e
            }, []), e.specialFeatures = o.vendors[n].specialFeatures.reduce(function(e, t) {
                t = b.iabGroups.specialFeatures[t];
                return t && e.push({
                    description: t.description,
                    featureId: t.id,
                    featureName: t.name
                }), e
            }, []), r.mapDataDeclarationForVendor(o.vendors[n], e, s), r.mapDataRetentionForVendor(o.vendors[n], e), e.purposes = o.vendors[n].purposes.reduce(function(e, t) {
                var o = b.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledCP && -1 !== i[n].disabledCP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.legIntPurposes = o.vendors[n].legIntPurposes.reduce(function(e, t) {
                var o = b.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledLIP && -1 !== i[n].disabledLIP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.specialPurposes = t.specialPurposes.reduce(function(e, t) {
                t = b.iabGroups.specialPurposes[t];
                return t && e.push({
                    description: t.description,
                    purposeId: t.id,
                    purposeName: t.name
                }), e
            }, []), I.iabData.vendors.push(e), I.vendorsSetting[n].arrIndex = I.iabData.vendors.length - 1
        })
    }, o.prototype.vendorHasNoLIAndPurConsent = function(e, t, o) {
        return e[o] && !e[o].legInt && !e[o].consent || !e[o] && !t.legIntPurposes.length && !t.purposes.length
    }, o.prototype.shouldHaveVendorLIUnset = function(e, t, o) {
        var n = !1,
            r = !1,
            i = t.specialPurposes.length;
        return (e[o] && !e[o].legInt || !e[o] && !t.legIntPurposes.length) && (n = !0), (e[o] && !e[o].consent || !e[o] && !t.purposes.length) && (r = !0), !(!n || r === Boolean(i) && (r || i))
    }, o.prototype.mapDataDeclarationForVendor = function(e, t, n) {
        var o;
        b.isTcfV2Template && null != (o = e.dataDeclaration) && o.length && (t.dataDeclaration = e.dataDeclaration.reduce(function(e, t) {
            var o = n.find(function(e) {
                return e.Id === t
            });
            return o && e.push({
                Description: o.Description,
                Id: o.Id,
                Name: o.Name
            }), e
        }, []))
    }, o.prototype.mapDataRetentionForVendor = function(o, n) {
        var e;
        n.dataRetention = {}, b.isTcfV2Template && o.dataRetention && (null !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && void 0 !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && (n.dataRetention = {
            stdRetention: o.dataRetention.stdRetention
        }), Object.keys(null == (e = o.dataRetention) ? void 0 : e.purposes).length && (n.dataRetention.purposes = JSON.parse(JSON.stringify(o.dataRetention.purposes)), Object.keys(o.dataRetention.purposes).forEach(function(e) {
            var t = b.iabGroups.purposes[e];
            t && (n.dataRetention.purposes[e] = {
                name: t.name,
                id: t.id,
                retention: o.dataRetention.purposes[e]
            })
        })), Object.keys(null == (e = o.dataRetention) ? void 0 : e.specialPurposes).length) && (n.dataRetention.specialPurposes = JSON.parse(JSON.stringify(o.dataRetention.specialPurposes)), Object.keys(o.dataRetention.specialPurposes).forEach(function(e) {
            var t = b.iabGroups.specialPurposes[e];
            t && (n.dataRetention.specialPurposes[e] = {
                name: t.name,
                id: t.id,
                retention: o.dataRetention.specialPurposes[e]
            })
        }))
    }, o.prototype.setIAB2VendorData = function(e, t) {
        var o, n, r;
        b.isTcfV2Template && (n = I.lang, r = (r = e.urls.find(function(e) {
            return e.langId === n
        })) || e.urls[0], t.vendorPrivacyUrl = (null == (o = r) ? void 0 : o.privacy) || "", t.legIntClaim = (null == (o = r) ? void 0 : o.legIntClaim) || "", null != (r = e.dataDeclaration) && r.length && (t.dataDeclaration = e.dataDeclaration), e.DataRetention) && (t.DataRetention = e.DataRetention)
    }, o.prototype.populateIABCookies = function() {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (!this.isIABCrossConsentEnabled()) return [3, 5];
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(h.EU_CONSENT, "", 0, !0)];
                    case 2:
                        return e.sent(), [3, 4];
                    case 3:
                        return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                    case 4:
                        return [3, 6];
                    case 5:
                        C.needReconsent() || this.setIABCookieData(), e.label = 6;
                    case 6:
                        return [2]
                }
            })
        })
    }, o.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
        var r = A.iabThirdPartyConsentUrl;
        try {
            if (r && document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
            throw new ReferenceError
        } catch (e) {
            throw e
        }
    }, o.prototype.setIABCookieData = function() {
        I.oneTrustIABConsent.IABCookieValue = g.getCookie(h.EU_PUB_CONSENT)
    }, o.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (d(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                    o.onload = function() {
                        b.thirdPartyiFrameResolve(), b.thirdPartyiFrameLoaded = !0, e()
                    }, o.onerror = function() {
                        throw b.thirdPartyiFrameResolve(), b.thirdPartyiFrameLoaded = !0, e(), new URIError
                    }
                })])
            })
        })
    }, o.prototype.setIABVendor = function(n, r, i) {
        var t, s = this;
        void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === i && (i = !1), I.iabData.vendors.forEach(function(e) {
            var t, o, e = e.vendorId;
            b.legIntSettings.PAllowLI ? (o = void 0, r ? o = n : (t = I.vendorsSetting[e], i && t.legInt && !t.specialPurposesOnly ? s.updateVendorPurposeOrLI(!0, e, !1) : (o = !!I.vendorsSetting[e].consent && n, s.updateVendorPurposeOrLI(!0, e, I.vendorsSetting[e].legInt))), s.updateVendorPurposeOrLI(!1, e, o)) : (I.oneTrustIABConsent.legIntVendors = [], s.updateVendorPurposeOrLI(!1, e, n))
        }), A.UseGoogleVendors && (t = I.addtlVendors, Object.keys(I.addtlVendorsList).forEach(function(e) {
            n ? (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString())) : r && (t.vendorSelected["" + e.toString()] = !1, e = t.vendorConsent.indexOf("" + e.toString()), t.vendorConsent.splice(e, 1))
        }))
    }, o.prototype.updateVendorPurposeOrLI = function(e, t, o) {
        void 0 === o && (o = !1), (e = void 0 === e ? !1 : e) ? -1 < (e = I.oneTrustIABConsent.legIntVendors.findIndex(function(e) {
            return e.includes(t.toString() + ":true") || e.includes(t.toString() + ":false")
        })) ? I.oneTrustIABConsent.legIntVendors[e] = t.toString() + ":" + o : I.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + o) : -1 < (e = I.oneTrustIABConsent.vendors.findIndex(function(e) {
            return e.includes(t.toString() + ":true") || e.includes(t.toString() + ":false")
        })) ? I.oneTrustIABConsent.vendors[e] = t.toString() + ":" + o : I.oneTrustIABConsent.vendors.push(t.toString() + ":" + o)
    }, o.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
        var e = this.getIABCrossConsentflagData();
        A.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(A.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
    }, o.prototype.isIABCrossConsentEnabled = function() {
        return "true" === this.getIABCrossConsentflagData()
    }, o.prototype.getIABCrossConsentflagData = function() {
        return g.readCookieParam(h.OPTANON_CONSENT, p.IS_IAB_GLOBAL)
    }, o.prototype.setGeolocationInCookies = function() {
        var e, t = g.readCookieParam(h.OPTANON_CONSENT, p.GEO_LOCATION);
        I.userLocation && !t && this.isAlertBoxClosedAndValid() ? (e = I.userLocation.country + ";" + I.userLocation.state, this.setUpdateGeolocationCookiesData(e)) : this.reconsentRequired() && t && this.setUpdateGeolocationCookiesData("")
    }, o.prototype.iabStringSDK = function() {
        var e = S.moduleInitializer.otIABModuleData;
        if (A.IsIabEnabled && e) return {
            gvl: e.tcfSdkRef.gvl,
            tcModel: e.tcfSdkRef.tcModel,
            tcString: e.tcfSdkRef.tcString,
            cmpApi: e.tcfSdkRef.cmpApi,
            purposeRestriction: e.tcfSdkRef.purposeRestriction
        }
    }, o.prototype.setUpdateGeolocationCookiesData = function(e) {
        g.writeCookieParam(h.OPTANON_CONSENT, p.GEO_LOCATION, e)
    }, o.prototype.calculateDaysFromDateToToday = function(e) {
        var e = new Date(e),
            t = new Date,
            t = (e.setUTCHours(0, 0, 0, 0), t.setUTCHours(0, 0, 0, 0), Math.abs(t.getTime() - e.getTime()));
        return Math.ceil(t / 864e5)
    }, o.prototype.reconsentRequired = function() {
        return (S.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
    }, o.prototype.awaitingReconsent = function() {
        return "true" === g.readCookieParam(h.OPTANON_CONSENT, p.AWAITING_RE_CONSENT)
    }, o.prototype.needReconsent = function() {
        var e = this.alertBoxCloseDate(),
            t = A.LastReconsentDate;
        return !!(e && t && new Date(t) > new Date(e)) || (I.isAMP && e ? this.calculateDaysFromDateToToday(e) >= A.ReconsentFrequencyDays : void 0)
    }, o.prototype.updateCrossConsentCookie = function(e) {
        g.writeCookieParam(h.OPTANON_CONSENT, p.IS_IAB_GLOBAL, e)
    }, o.prototype.alertBoxCloseDate = function() {
        return g.getCookie(h.ALERT_BOX_CLOSED)
    }, o.prototype.isAlertBoxClosedAndValid = function() {
        return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
    }, o.prototype.generateLegIntButtonElements = function(e, t, o) {
        return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + (o = void 0 === o ? !1 : o) + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + A.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? b.legIntSettings.PObjectLegIntText : b.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + A.pcButtonColor + "; " + (e ? "display:none;" : "") + '"\n                    >\n                        ' + b.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
    }, o.prototype.syncAlertBoxCookie = function(e) {
        var t = A.ReconsentFrequencyDays;
        g.setCookie(h.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
    }, o.prototype.syncCookieExpiry = function() {
        var e, t, o;
        I.syncRequired && (e = A.ReconsentFrequencyDays, t = g.getCookie(h.ALERT_BOX_CLOSED), o = g.getCookie(h.OPTANON_CONSENT), g.setCookie(h.OPTANON_CONSENT, o, e, !1, new Date(t)), C.needReconsent() && g.removeAlertBox(), (o = g.getCookie(h.EU_PUB_CONSENT)) && (C.isIABCrossConsentEnabled() ? g.removeIab2() : g.setCookie(h.EU_PUB_CONSENT, o, e, !1, new Date(t))), o = g.getCookie(h.ADDITIONAL_CONSENT_STRING)) && g.setCookie(h.ADDITIONAL_CONSENT_STRING, o, e, !1, new Date(t))
    }, o.prototype.syncOtPreviewCookie = function() {
        var e = g.getCookie(h.OT_PREVIEW);
        e && g.setCookie(h.OT_PREVIEW, e, 1, !1)
    }, o.prototype.dispatchConsentEvent = function() {
        window.dispatchEvent(new CustomEvent("OTConsentApplied", {
            OTConsentApplied: "yes"
        }))
    };
    var L, C = new o,
        jt = function() {};
    Xt.prototype.isAlwaysActiveGroup = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(), (t = e.Parent && t !== m.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === m.ALWAYS_ACTIVE)
    }, Xt.prototype.getGrpStatus = function(e) {
        return e && e.Status ? b.DNTEnabled && e.IsDntEnabled ? m.DNT : e.Status : ""
    }, Xt.prototype.getParentGroup = function(t) {
        var e;
        return t && 0 < (e = A.Groups.filter(function(e) {
            return e.OptanonGroupId === t
        })).length ? e[0] : null
    }, Xt.prototype.checkIfGroupHasConsent = function(t) {
        var e = I.groupsConsent,
            o = v.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, Xt.prototype.checkIsActiveByDefault = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(), (t = e.Parent && t !== m.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === m.ALWAYS_ACTIVE) || t === m.INACTIVE_LANDING_PAGE || t === m.ACTIVE || t === m.DNT && !b.DNTEnabled
    }, Xt.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = A.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = M(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t) break
        }
        return t
    }, Xt.prototype.isSoftOptInGrp = function(e) {
        return !!e && (e = e && !e.Parent ? e : f.getParentGroup(e.Parent), "inactive landingpage" === f.getGrpStatus(e).toLowerCase())
    }, Xt.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === f.getGrpStatus(e).toLowerCase()
    }, Xt.prototype.getParentByGrp = function(e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }, Xt.prototype.getVSById = function(e) {
        return I.getVendorsInDomain().get(e)
    }, Xt.prototype.getGrpByVendorId = function(e) {
        var t = null;
        return t = I.getVendorsInDomain().has(e) ? I.getVendorsInDomain().get(e).groupRef : t
    };
    var f, zt, Kt, Wt, Yt, Jt = Xt;

    function Xt() {}(s = zt = zt || {}).SaleOptOut = "SaleOptOutCID", s.SharingOptOut = "SharingOptOutCID", s.PersonalDataConsents = "PersonalDataCID", (s = Kt = Kt || {}).SharingOptOutNotice = "SharingOptOutCID", s.SaleOptOutNotice = "SaleOptOutCID", s.SensitiveDataLimitUseNotice = "SensitivePICID || SensitiveSICID || GeolocationCID || RREPInfoCID || CommunicationCID || GeneticCID|| BiometricCID || HealthCID || SexualOrientationCID", (s = Wt = Wt || {}).KnownChildSensitiveDataConsents1 = "KnownChildSellPICID", s.KnownChildSensitiveDataConsents2 = "KnownChildSharePICID", (s = Yt = Yt || {}).SensitiveDataProcessing1 = "SensitivePICID", s.SensitiveDataProcessing2 = "SensitiveSICID", s.SensitiveDataProcessing3 = "GeolocationCID", s.SensitiveDataProcessing4 = "RREPInfoCID", s.SensitiveDataProcessing5 = "CommunicationCID", s.SensitiveDataProcessing6 = "GeneticCID", s.SensitiveDataProcessing7 = "BiometricCID", s.SensitiveDataProcessing8 = "HealthCID", s.SensitiveDataProcessing9 = "SexualOrientationCID";
    $t.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", S.moduleInitializer.CookieV2CSPEnabled && I.nonce && e.setAttribute("nonce", I.nonce)), G.commonStyles && (t += G.commonStyles), G.bannerGroup && (t += G.bannerGroup.css, S.fp.CookieV2SSR || (t += this.addCustomBannerCSS()), A.bannerCustomCSS) && (t += A.bannerCustomCSS), G.preferenceCenterGroup && (t = (t += G.preferenceCenterGroup.css) + this.addCustomPreferenceCenterCSS()), G.cookieListGroup && !S.fp.CookieV2TrackingTechnologies && (t = (t += G.cookieListGroup.css) + this.addCustomCookieListCSS()), A.cookiePersistentLogo && !A.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + y.updateCorrectUrl(A.cookiePersistentLogo) + "')}"), this.processedCSS = t, b.ignoreInjectingHtmlCss || (e.textContent = t, P(document.head).append(e))
    }, $t.prototype.setButonColor = function() {
        var e, t = A.pcButtonColor,
            o = A.pcButtonTextColor,
            n = A.pcLegIntButtonColor,
            r = A.pcLegIntButtonTextColor,
            i = "";
        return (t || o) && (e = b.pcName === tt ? "#onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Category_Item + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + k.P_Li_Hdr + "{\n                    border-color: " + t + ";\n                }" : "", i = "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (o ? "color: " + o + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + k.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + e + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (n ? "background-color: " + n + ";" : "") + "\n                " + (r ? "color: " + r + "; border-color: " + r + ";" : "") + "\n            }"), i
    }, $t.prototype.setFocusBorderColor = function() {
        var e = "",
            t = A.PCFocusBorderColor;
        return t && (e += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + t + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + t + ";\n            }"), e
    }, $t.prototype.setCloseIconColor = function() {
        var e = "";
        return A.PCCloseButtonType === ke.Link && (e += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + A.PCContinueColor + "}"), e
    }, $t.prototype.setTabLayoutStyles = function() {
        var e = "",
            t = A.pcMenuColor,
            o = A.pcMenuHighLightColor;
        return b.pcName === rt && (t && (e += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + t + "\n                }"), o) && (e += "#onetrust-consent-sdk #onetrust-pc-sdk ." + k.P_Active_Menu + " {\n                    background-color: " + o + "\n                }"), e
    }, $t.prototype.setFocusIfTemplateUpgrade = function() {
        var e = "",
            t = A.PCFocusBorderColor;
        return !A.PCTemplateUpgrade && t && (e += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }"), e
    }, $t.prototype.setExtLnkUrl = function() {
        var e = "",
            t = y.updateCorrectUrl(A.OTExternalLinkLogo);
        return t && (e += "#onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk,  #onetrust-pc-sdk .ot-ven-hdr .ot-ext-lnk{\n                    background-image: url('" + t + "');\n                }\n            "), e
    }, $t.prototype.setCustomCss = function() {
        var e = "";
        return A.pcCustomCSS && (e += A.pcCustomCSS), e
    };
    var Qt, Zt = $t;

    function $t() {
        this.processedCSS = "", this.addCustomBannerCSS = function() {
            var e = A.backgroundColor,
                t = A.buttonColor,
                o = A.textColor,
                n = A.buttonTextColor,
                r = A.bannerMPButtonColor,
                i = A.bannerMPButtonTextColor,
                s = A.bannerAccordionBackgroundColor,
                a = A.BSaveBtnColor,
                l = A.BCategoryContainerColor,
                c = A.BLineBreakColor,
                d = A.BCategoryStyleColor,
                u = A.bannerLinksTextColor,
                p = A.BFocusBorderColor,
                o = "\n        " + (b.bannerName === Je ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header,\n                    #onetrust-banner-sdk .ot-optout-signal\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            return (t || n) && (o += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"), p && (o += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"), (i || r) && (o += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !A.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), b.bannerName === Ze && (r = i = t = u = s = void 0, d && (i = "background-color: " + d + ";", r = "border-color: " + d + ";"), p && (o += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"), o += "#onetrust-banner-sdk .ot-bnr-save-handler {" + (s = a ? "color: " + n + ";border-color: " + n + ";background-color: " + a + ";" : s) + "}#onetrust-banner-sdk .ot-cat-lst {" + (u = l ? "background-color: " + l + ";" : u) + "}#onetrust-banner-sdk .ot-cat-bdr {" + (t = c ? "border-color: " + c + ";" : t) + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + i + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + r + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"), A.BCloseButtonType === ke.Link && (o += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + A.BContinueColor + "}"), o
        }, this.addCustomPreferenceCenterCSS = function() {
            var e = A.pcBackgroundColor,
                t = A.pcTextColor,
                o = A.pcLinksTextColor,
                n = A.PCenterEnableAccordion,
                r = A.pcAccordionBackgroundColor,
                e = "\n            " + (e ? (b.pcName === tt ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + k.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + k.P_Search_Cntr + ",\n                " + (n && b.pcName === tt ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + k.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Title + ":after\n                " + (S.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (t ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Vendor_Container + " " + k.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Host_Cntr + " " + k.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Vendor_List + " " + k.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Vendor_List + " " + k.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Vendor_List + " " + k.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Vendor_List + " " + k.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal\n                {\n                    color: " + t + ";\n                }" : "") + "\n            " + (o ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-pgph-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Ven_Leg_Claim + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Host_Cntr + " " + k.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Host_Cntr + " " + k.P_Acc_Header + " " + k.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Host_Cntr + " " + k.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Content + " " + k.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (n && r ? "#onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Acc_Container + k.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Acc_Txt + " " + k.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + r + ";\n            }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Host_Cntr + " " + k.P_Host_Info + ",\n                    " + (S.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + k.P_Acc_Txt + " " + k.P_Ven_Opts) + "\n                            {\n                                background-color: " + r + ";\n                            }" : "") + "\n        ";
            return (e += Qt.setButonColor()) + Qt.setFocusBorderColor() + Qt.setCloseIconColor() + Qt.setTabLayoutStyles() + Qt.setTabLayoutStyles() + Qt.setFocusIfTemplateUpgrade() + Qt.setExtLnkUrl() + Qt.setCustomCss()
        }, this.addCustomCookieListCSS = function() {
            var e = A.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                e = "\n                " + (A.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + A.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (A.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + A.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (A.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + A.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (A.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + A.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && A.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + A.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return A.cookieListCustomCss && (e += A.cookieListCustomCss), e
        }
    }
    oo.prototype.getAllowAllButton = function() {
        return P("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, oo.prototype.getSelectedVendors = function() {
        return P("#onetrust-pc-sdk " + k.P_Tgl_Cntr + " .ot-checkbox input:checked")
    };
    var eo, to = oo;

    function oo() {}
    io.prototype.isIabCookieValid = function() {
        var e = null;
        return null !== (e = b.isIab2orv2Template ? g.getCookie("eupubconsent-v2") : e)
    }, io.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (g.removeAlertBox(), g.removeIab1())
    }, io.prototype.initializeIABModule = function() {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return A.IsIabEnabled ? (S.moduleInitializer.otIABModuleData = window.otIabModule, C.setIabData(), [4, C.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), C.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), C.populateIABCookies(), A.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        g.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, io.prototype.removeInActiveAddtlVendors = function() {
        var e, t = A.OverridenGoogleVendors;
        for (e in I.addtlVendorsList) t && t[e] && !t[e].active && delete I.addtlVendorsList[e]
    }, io.prototype.getIABConsentData = function() {
        var e = I.oneTrustIABConsent,
            t = C.iabStringSDK().tcString(),
            o = (I.tcModel.unsetAllPurposeConsents(), I.tcModel.unsetAllVendorConsents(), I.tcModel.unsetAllVendorLegitimateInterests(), I.tcModel.unsetAllSpecialFeatureOptins(), I.tcModel.unsetAllPurposeLegitimateInterests(), I.tcModel.publisherConsents.empty(), I.tcModel.publisherLegitimateInterests.empty(), I.tcModel.purposeConsents.set(v.getActiveIdArray(e.purpose)), I.tcModel.publisherConsents.set(v.getActiveIdArray(e.purpose)), b.legIntSettings.PAllowLI ? v.getActiveIdArray(e.legimateInterest) : []),
            o = (I.tcModel.purposeLegitimateInterests.set(o), I.tcModel.publisherLegitimateInterests.set(o), I.tcModel.vendorConsents.set(v.getActiveIdArray(v.distinctArray(e.vendors))), b.legIntSettings.PAllowLI && this.shouldSetVendorLegitimateInterest(e) && (e.legIntVendors = []), I.tcModel.vendorLegitimateInterests.set(v.getActiveIdArray(v.distinctArray(e.legIntVendors))), I.tcModel.specialFeatureOptins.set(v.getActiveIdArray(e.specialFeatures)), new Date),
            e = new Date(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), 0, 0, 0),
            o = (I.tcModel.lastUpdated = e, I.tcModel.created = e, t.encode(I.tcModel));
        return I.cmpApi.update(o, !1), o
    }, io.prototype.shouldSetVendorLegitimateInterest = function(e) {
        return !I.anyVendorHasOnlySplPur && !v.getActiveIdArray(e.legimateInterest)
    }, io.prototype.decodeTCString = function(e) {
        return C.iabStringSDK().tcString().decode(e)
    }, io.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, io.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }), e.apply(this, t)
    }, io.prototype.populateVendorAndPurposeFromCookieData = function() {
        var n = I.oneTrustIABConsent,
            e = no.decodeTCString(n.IABCookieValue),
            t = T.GroupTypes,
            r = {},
            i = {},
            s = (b.iabGrps.forEach(function(e) {
                e.Type === t.Pur ? r[b.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === t.Spl_Ft && (i[b.iabGrpIdMap[e.CustomGroupId]] = e)
            }), []);
        this.syncVendorConsent(e), s = [], e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            I.vendorsSetting[t] && I.vendorsSetting[t].legInt || !e || (s.push(t), o = !1), n.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(s), s = [], e.purposeConsents.forEach(function(e, o) {
            var t = e,
                e = (!(r[o] && r[o].HasConsentOptOut) && e && (s.push(o), t = !1), v.findIndex(n.purpose, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? n.purpose.push(o + ":" + t) : n.purpose[e] = o + ":" + t
        }), e.purposeConsents.unset(s), e.publisherConsents.unset(s), s = [], e.specialFeatureOptins.forEach(function(e, o) {
            var t = e,
                e = (!(i[o] && i[o].HasConsentOptOut) && e && (s.push(o), t = !1), v.findIndex(n.specialFeatures, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? n.specialFeatures.push(o + ":" + t) : n.specialFeatures[e] = o + ":" + t
        }), e.specialFeatureOptins.unset(s), this.syncPurAndPubLegInt(e, r), this.syncBundleAndStack(), e.gvl = I.tcModel.gvl, e.isServiceSpecific = !C.isIABCrossConsentEnabled(), I.tcModel = e, C.isAlertBoxClosedAndValid() ? I.cmpApi.update(n.IABCookieValue, !1) : C.resetTCModel()
    }, io.prototype.syncVendorConsent = function(e) {
        var n = [],
            r = [];
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            I.vendorsSetting[t] && I.vendorsSetting[t].consent || !e || (n.push(t), o = !1), r.push(t + ":" + o)
        }), I.oneTrustIABConsent.vendors = r, e.vendorConsents.unset(n)
    }, io.prototype.syncPurAndPubLegInt = function(e, n) {
        var r = [],
            i = I.oneTrustIABConsent;
        e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e,
                e = (!(n[o] && n[o].HasLegIntOptOut && b.legIntSettings.PAllowLI) && e && (r.push(o), t = !1), v.findIndex(i.legimateInterest, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? i.legimateInterest.push(o + ":" + t) : i.legimateInterest[e] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(r), e.publisherLegitimateInterests.unset(r)
    }, io.prototype.syncBundleAndStack = function() {
        var e = g.readCookieParam(h.OPTANON_CONSENT, "groups"),
            n = (I.groupsConsent = v.strToArr(e), T.GroupTypes);
        A.Groups.forEach(function(t) {
            var e, o;
            t.Type !== n.Bundle && t.Type !== n.Stack || (o = y.isBundleOrStackActive(t), e = v.findIndex(I.groupsConsent, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            }), o = t.CustomGroupId + ":" + Number(o), -1 < e ? I.groupsConsent[e] = o : I.groupsConsent.push(o))
        }), g.writeCookieParam(h.OPTANON_CONSENT, "groups", I.groupsConsent.join(","))
    }, io.prototype.populateGoogleConsent = function() {
        var e;
        A.UseGoogleVendors && (e = g.getCookie(h.ADDITIONAL_CONSENT_STRING)) && (I.isAddtlConsent = !0, I.addtlVendors.vendorConsent = e.replace(I.addtlConsentVersion, "").split("."))
    }, io.prototype.isInitIABCookieData = function(e) {
        return "init" === e || C.needReconsent()
    }, io.prototype.updateFromGlobalConsent = function(e) {
        var t = I.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], no.populateVendorAndPurposeFromCookieData(), g.setCookie(h.EU_PUB_CONSENT, "", -1)
    };
    var no, ro = io;

    function io() {}
    ao.prototype.loadBanner = function() {
        S.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? P(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            P(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? P(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            P(window).trigger("otloadbanner")
        }), b.pubDomainData.IsBannerLoaded = !0
    }, ao.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        _.consentChangedEventMap[t] || (_.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, ao.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        var r = !1;
        S.moduleInitializer.GATrackToggle && ("AS" === S.moduleInitializer.GATrackAssignedCategory || "" === S.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + S.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0), !b.ignoreGoogleAnlyticsCall && r && (void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n), r = window[b.otDataLayer.name], !b.otDataLayer.ignore) && void 0 !== r && r && r.constructor === Array && ("function" == typeof window.gtag ? window.gtag("event", "trackOptanonEvent", {
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        }) : r.push({
            event: "trackOptanonEvent",
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        }))
    }, ao.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString(),
            e = (e ? g.setCookie(h.ALERT_BOX_CLOSED, t, A.ReconsentFrequencyDays) : g.setCookie(h.ALERT_BOX_CLOSED, t, 0), P(".onetrust-pc-dark-filter").el[0]);
        e && "none" !== getComputedStyle(e).getPropertyValue("display") && P(".onetrust-pc-dark-filter").fadeOut(400)
    }, ao.prototype.updateConsentFromCookie = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                return t ? (no.isInitIABCookieData(t) || no.updateFromGlobalConsent(t), "init" === t && (g.removeIab1(), C.isAlertBoxClosedAndValid() && C.resetTCModel(), g.removeAlertBox())) : (C.resetTCModel(), C.updateCrossConsentCookie(!1), C.setIABCookieData()), _.assetPromise.then(function() {
                    _.loadBanner()
                }), [2]
            })
        })
    };
    var _, so = ao;

    function ao() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        })
    }
    var lo, co = "groups",
        uo = "hosts",
        po = "genVendors",
        ho = "vs",
        go = (Co.prototype.writeHstParam = function(e, t) {
            g.writeCookieParam(e, "hosts", v.arrToStr((t = void 0 === t ? null : t) || I.hostsConsent))
        }, Co.prototype.writeGenVenCookieParam = function(e) {
            var t = A.GeneralVendors,
                o = I.genVendorsConsent,
                n = "";
            t.forEach(function(e) {
                n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
            }), g.writeCookieParam(e, "genVendors", n)
        }, Co.prototype.writeVSConsentCookieParam = function(e) {
            var o = "";
            I.vsConsent.forEach(function(e, t) {
                return o += t + ":" + (e ? "1" : "0") + ","
            }), o = o.slice(0, -1), g.writeCookieParam(e, ho, o)
        }, Co.prototype.updateGroupsInCookie = function(e, t) {
            g.writeCookieParam(e, "groups", v.arrToStr((t = void 0 === t ? null : t) || I.groupsConsent))
        }, Co.prototype.writeGrpParam = function(e, t) {
            this.updateGroupsInCookie(e, t = void 0 === t ? null : t), A.IsIabEnabled && C.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
        }, Co.prototype.insertOrUpdateIabCookies = function() {
            var e, t = I.oneTrustIABConsent;
            t.purpose && t.vendors && (I.isAddtlConsent = A.UseGoogleVendors, t.IABCookieValue = no.getIABConsentData(), e = A.ReconsentFrequencyDays, C.isIABCrossConsentEnabled() ? C.setIAB3rdPartyCookie(h.EU_CONSENT, t.IABCookieValue, e, !1) : (g.setCookie(h.EU_PUB_CONSENT, t.IABCookieValue, e), A.UseGoogleVendors && g.setCookie(h.ADDITIONAL_CONSENT_STRING, "" + I.addtlConsentVersion + I.addtlVendors.vendorConsent.join("."), e)))
        }, Co);

    function Co() {}
    mo.prototype.initGenVendorConsent = function() {
        var e, t, n = this;
        A.GenVenOptOut ? (e = b.consentableGrps, (t = g.readCookieParam(h.OPTANON_CONSENT, "genVendors")) ? (I.genVendorsConsent = {}, t.split(",").forEach(function(e) {
            e && "1" === (e = e.split(":"))[1] && (I.genVendorsConsent[e[0]] = !0)
        })) : (I.genVendorsConsent = {}, e.forEach(function(e) {
            var o = I.syncRequired ? f.checkIfGroupHasConsent(e) : f.checkIsActiveByDefault(e);
            e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                I.genVendorsConsent[e] = t || o
            })
        }))) : (I.genVendorsConsent = {}, lo.writeGenVenCookieParam(h.OPTANON_CONSENT))
    }, mo.prototype.populateGenVendorLists = function() {
        b.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (f.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                I.alwaysActiveGenVendors.push(e)
            }) : f.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                I.optInGenVendors.push(e)
            }) : f.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                I.optInGenVendors.includes(e) || I.softOptInGenVendors.push(e)
            }))
        })
    }, mo.prototype.updateGenVendorStatus = function(e, t) {
        I.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, mo.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return I.alwaysActiveGenVendors.includes(e)
    };
    var yo, fo = mo;

    function mo() {}
    ko.prototype.isLandingPage = function() {
        var e = g.readCookieParam(h.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }, ko.prototype.setLandingPathParam = function(e) {
        g.writeCookieParam(h.OPTANON_CONSENT, "landingPath", e)
    };
    var So, vo = ko;

    function ko() {}
    bo.prototype.synchroniseCookieGroupData = function(e) {
        var t = g.readCookieParam(h.OPTANON_CONSENT, "groups"),
            r = v.strToArr(t),
            i = v.strToArr(t.replace(/:0|:1/g, "")),
            t = C.needReconsent(),
            s = !1,
            a = !1,
            l = T.GroupTypes;
        e.forEach(function(e) {
            var t, o, n = e.CustomGroupId;
            e.Type !== l.Bundle && e.Type !== l.Stack && (-1 === v.indexOf(i, n) ? (s = !0, t = f.checkIsActiveByDefault(e), a = !0, r.push(n + (t ? ":1" : ":0"))) : (e.Status !== m.INACTIVE_LANDING_PAGE || So.isLandingPage() || 0 <= (o = r.indexOf(n + ":0")) && (a = !0, r[o] = n + ":1"), b.gpcEnabled && e.IsGpcEnabled && b.gpcValueChanged && -1 < (o = r.indexOf(n + ":1")) && (a = !0, I.gpcConsentTxn = !0, r[o] = n + ":0")))
        }), a = this.updateConsentForBundleGrps(e, r, i, a, t), (a = this.removeRedundantGrpsFromCookie(r, t, a)) && (I.fireOnetrustGrp = !0, lo.updateGroupsInCookie(h.OPTANON_CONSENT, r), I.syncRequired) && s && g.removeAlertBox()
    }, bo.prototype.removeRedundantGrpsFromCookie = function(e, o, t) {
        for (var n = e.length, r = t; n--;) ! function() {
            var t = e[n].replace(/:0|:1/g, "");
            A.Groups.some(function(e) {
                return (!o || e.Type !== T.GroupTypes.Stack) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                    return e.CustomGroupId === t
                }))
            }) || (r = !0, e.splice(n, 1))
        }();
        return r
    }, bo.prototype.updateConsentForBundleGrps = function(e, n, r, t, i) {
        var s = t,
            a = T.GroupTypes;
        return e.forEach(function(e) {
            var t = e.Type === a.Bundle || e.Type === a.Stack,
                o = e.CustomGroupId;
            t && (-1 === v.indexOf(r, o) ? (t = y.isBundleOrStackActive(e, n), s = !0, n.push(o + (t ? ":1" : ":0"))) : (i && "false" === C.getIABCrossConsentflagData() || b.gpcEnabled && b.gpcValueChanged || I.syncRequired) && (t = y.isBundleOrStackActive(e, n), -1 < (e = n.indexOf(o + ":" + (t ? "0" : "1")))) && (s = !0, n[e] = o + (t ? ":1" : ":0")))
        }), s
    }, bo.prototype.groupHasConsent = function(t) {
        var e = v.strToArr(g.readCookieParam(h.OPTANON_CONSENT, "groups")),
            o = v.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, bo.prototype.synchroniseCookieHostData = function() {
        for (var n = this, e = g.readCookieParam(h.OPTANON_CONSENT, "hosts"), r = v.strToArr(e), i = v.strToArr(e.replace(/:0|:1/g, "")), s = !1, o = (A.Groups.forEach(function(e) {
                M(e.SubGroups, [e]).forEach(function(o) {
                    o.Hosts.length && o.Hosts.forEach(function(e) {
                        var t; - 1 === v.indexOf(i, e.HostId) && (s = !0, t = I.syncRequired ? n.groupHasConsent(o) : f.checkIsActiveByDefault(o), r.push(e.HostId + (t ? ":1" : ":0")))
                    })
                })
            }), r.length); o--;) ! function() {
            var t = r[o].replace(/:0|:1/g, "");
            A.Groups.some(function(e) {
                return M(e.SubGroups, [e]).some(function(e) {
                    return e.Hosts.some(function(e) {
                        return e.HostId === t
                    })
                })
            }) || (s = !0, r.splice(o, 1))
        }();
        s && (I.fireOnetrustGrp = !0, lo.writeHstParam(h.OPTANON_CONSENT, r))
    }, bo.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }, bo.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            yo.updateGenVendorStatus(e, t)
        })
    }, bo.prototype.updateHostStatus = function(t, e) {
        var o = v.findIndex(I.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        }); - 1 < o && (e = e || this.isHostPartOfAlwaysActiveGroup(t.HostId), I.hostsConsent[o] = t.HostId + ":" + (e ? "1" : "0"))
    }, bo.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return I.oneTrustAlwaysActiveHosts.includes(e)
    };
    var To, Po = bo;

    function bo() {}
    var Ao, Io = "OneTrust Cookie Consent",
        Lo = "Banner Auto Close",
        _o = "Banner Close Button",
        Eo = "Banner - Continue without Accepting",
        Oo = "Banner - Confirm",
        Vo = "Preferences Close Button",
        Bo = "Preference Center Opened From Banner",
        wo = "Preference Center Opened From Button",
        Go = "Preference Center Opened From Function",
        No = "Preferences Save Settings",
        xo = "Vendors List Opened From Function",
        Do = "Floating Cookie Settings Open Button",
        Ho = "Floating Cookie Settings Close Button",
        Ro = "Preferences Toggle On",
        Fo = "Preferences Toggle Off",
        Mo = "General Vendor Toggle On",
        qo = "General Vendor Toggle Off",
        Uo = "Host Toggle On",
        jo = "Host Toggle Off",
        zo = "Preferences Legitimate Interest Objection",
        Ko = "Preferences Legitimate Interest Remove Objection",
        Wo = "IAB Vendor Toggle ON",
        Yo = "IAB Vendor Toggle Off",
        Jo = "IAB Vendor Legitimate Interest Objection",
        Xo = "IAB Vendor Legitimate Interest Remove Objection",
        Qo = "Vendor Service Toggle On",
        Zo = "Vendor Service Toggle Off",
        $o = (en.prototype.setBannerFocus = function() {
            var e = Array.prototype.slice.call(P("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
                t = Array.prototype.slice.call(P('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
                o = Array.prototype.slice.call(P("#onetrust-banner-sdk .ot-bnr-save-handler").el),
                n = Array.prototype.slice.call(P("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
                r = Array.prototype.concat.call(Array.prototype.slice.call(P("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(P("#onetrust-banner-sdk .ot-cat-lst button").el), e),
                r = Array.prototype.concat.call(t, r),
                i = Array.prototype.slice.call(P("#onetrust-banner-sdk .onetrust-close-btn-handler").el),
                e = (b.bannerName === Je && (r = Array.prototype.concat.call(e, t)), Array.prototype.slice.call(P("#onetrust-banner-sdk #onetrust-accept-btn-handler").el)),
                t = Array.prototype.slice.call(P("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
                o = Array.prototype.concat.call(o, e, t, n),
                n = ((b.bannerName !== We || A.IsIabEnabled) && b.bannerName !== Ke && b.bannerName !== Qe || (o = Array.prototype.concat.call(n, t, e)), Array.prototype.slice.call(P("#onetrust-banner-sdk .ot-gv-list-handler").el));
            b.bannerName === Ze ? (r = Array.prototype.concat.call(n, r), o = Array.prototype.slice.call(P("#onetrust-banner-sdk #onetrust-button-group button").el)) : r = Array.prototype.concat.call(r, n), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(P("#onetrust-banner-sdk #onetrust-cookie-btn").el), r, Array.prototype.slice.call(P("#onetrust-banner-sdk .banner-option-input").el), o, Array.prototype.slice.call(P("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i), this.banner = P("#onetrust-banner-sdk").el[0], (A.BInitialFocus || A.BInitialFocusLinkAndButton || A.ForceConsent) && (A.BInitialFocus ? this.banner : this.bannerEl[0]).focus()
        }, en.prototype.handleBannerFocus = function(e, t) {
            var o = e.target,
                n = Ao.bannerEl,
                r = n.indexOf(o),
                i = n.length - 1,
                s = null;
            if (this.handleBannerFocusBodyReset(t, r, i)) y.resetFocusToBody();
            else if (this.banner === o) s = this.handleInitialBannerFocus(t, n, i, s);
            else
                for (; !s;) {
                    var a = void 0;
                    0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
                }
            s && (e.preventDefault(), s.focus())
        }, en.prototype.handleBannerFocusBodyReset = function(e, t, o) {
            return !(A.ForceConsent || !A.BInitialFocus && !A.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
        }, en.prototype.handleInitialBannerFocus = function(e, t, o, n) {
            return e && A.ForceConsent ? n = t[o] : e || (n = t[0]), n
        }, en.prototype.setPCFocus = function(e) {
            if (e && !(e.length <= 0)) {
                for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
                this.setFirstAndLast(e);
                var o = A.ShowPreferenceCenterCloseButton,
                    n = o ? this.getElementForFocus(e, A.PCLayout.Popup ? 2 : 1, !0) : null,
                    r = {
                        preventScroll: !0
                    };
                this.firstItem ? (o ? n : this.firstItem).focus(r) : e[0].focus(), this.firstItem && P(this.firstItem).on("keydown", Ao.firstItemHandler), this.lastItem && P(this.lastItem).on("keydown", Ao.lastItemHandler)
            }
        }, en.prototype.setFirstAndLast = function(e) {
            this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
        }, en.prototype.setLastItem = function() {
            var e = this.getPCElements(),
                e = this.getElementForFocus(e, e.length - 1, !1);
            e !== this.lastItem && (P(this.lastItem).off("keydown", Ao.lastItemHandler), this.lastItem = e, P(e).on("keydown", Ao.lastItemHandler))
        }, en.prototype.getPCElements = function() {
            var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + k.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
            return I.pcLayer === ie.CookieList ? e += " ,#onetrust-pc-sdk " + k.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(P(e).el)
        }, en.prototype.getActiveTab = function() {
            return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
        }, en.prototype.getElementForFocus = function(e, t, o) {
            for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
            return n
        }, en.prototype.handleFocusTabLayoutExceptClosePC = function(e) {
            var t = "close-pc-btn-handler" === e.target.id && (13 === e.keyCode || 32 === e.keyCode || "Enter" === e.code || "Space" === e.code);
            A.PCLayout.Tab && I.pcLayer === ie.PrefCenterHome && !t && (t = Ao.getActiveTab()) && (e.preventDefault(), t.focus())
        }, en.prototype.firstItemHandler = function(e) {
            var t = document.getElementById("onetrust-banner-sdk");
            9 === e.keyCode && e.shiftKey && Ao.firstItem !== t ? (e.preventDefault(), Ao.lastItem.focus()) : A.ShowPreferenceCenterCloseButton ? this.handleFocusTabLayoutExceptClosePC(e) : !A.PCLayout.Tab || I.pcLayer !== ie.PrefCenterHome || 37 !== e.keyCode && 39 !== e.keyCode || (t = Ao.getActiveTab()) && P(t).on("keydown", Ao.firstItemHandler)
        }, en.prototype.lastItemHandler = function(e) {
            9 !== e.keyCode || e.shiftKey || (e.preventDefault(), e = I.pcLayer === ie.VendorList || I.pcLayer === ie.CookieList, (A.PCLayout.Tab && I.isPCVisible && !A.ShowPreferenceCenterCloseButton && !e ? Ao.getActiveTab() : Ao.firstItem).focus())
        }, en);

    function en() {
        this.bannerEl = []
    }
    on.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + k.P_Category_Grp + " " + k.P_Category_Item + ":not(.ot-vnd-item)")
    }, on.prototype.toggleGrpElements = function(e, t, o, n) {
        void 0 === n && (n = !1);
        for (var r = (e = b.pcName === rt && A.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && s || (v.setCheckedAttribute(null, r[i], o), r[i] && A.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText))
        }
        b.legIntSettings.PAllowLI && b.legIntSettings.PShowLegIntBtn && t.Type === T.GroupTypes.Pur && t.HasLegIntOptOut && !n && E.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, on.prototype.toogleAllSubGrpElements = function(e, t) {
        var o;
        e.ShowSubgroup ? (o = e.CustomGroupId, o = this.getGroupElementByOptanonGroupId(o.toString()), E.toogleSubGroupElement(o, t, e.IsLegIntToggle)) : this.updateHiddenSubGroupData(e, t)
    }, on.prototype.isSubGrpLegIntEnabled = function(e, t) {
        return b.legIntSettings.PAllowLI && b.legIntSettings.PShowLegIntBtn && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && t.ShowSubgroupToggle
    }, on.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1);
        for (var r = (e = b.pcName === rt && A.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll("li" + k.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = f.getGroupById(r[i].getAttribute("data-optanongroupid")),
                a = s.OptanonGroupId,
                l = f.getParentGroup(s.Parent),
                l = (this.isSubGrpLegIntEnabled(s, l) && o && E.updateLegIntBtnElement(r[i], t), o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']"),
                a = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + l);
            v.setCheckedAttribute(null, a, t), a && A.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? A.PCActiveText : A.PCInactiveText), n || (s.IsLegIntToggle = o, E.toggleGrpStatus(s, t), s.IsLegIntToggle = !1, To.toggleGroupHosts(s, t), I.genVenOptOutEnabled && To.toggleGroupGenVendors(s, t))
        }
    }, on.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === T.GroupTypes.Pur ? t ? Ko : zo : t ? Ro : Fo;
        _.triggerGoogleAnalyticsEvent(Io, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, on.prototype.setInputID = function(e, t, o, n, r) {
        P(e).attr("id", t), P(e).attr("name", t), P(e).data("optanonGroupId", o), v.setCheckedAttribute(null, e, n), P(e).attr("aria-labelledby", r)
    }, on.prototype.updateEnabledGroupData = function(e) {
        var t, o; - 1 < kt.indexOf(e.Type) ? this.updateIabGroupData(e, !0) : (t = E.getGroupVariable(), -1 !== (o = v.indexOf(t, e.CustomGroupId + ":0")) && (t[o] = e.CustomGroupId + ":1"))
    }, on.prototype.updateDisabledGroupData = function(e) {
        var t, o; - 1 < kt.indexOf(e.Type) ? this.updateIabGroupData(e, !1) : e.Status !== m.ALWAYS_ACTIVE && (t = E.getGroupVariable(), -1 !== (o = v.indexOf(t, e.CustomGroupId + ":1"))) && (t[o] = e.CustomGroupId + ":0")
    }, on.prototype.updateIabGroupData = function(e, t) {
        var o;
        e.Type === T.GroupTypes.Spl_Ft ? this.updateIabSpecialFeatureData(e.IabGrpId, t) : (o = e.IsLegIntToggle ? I.vendors.selectedLegInt : I.vendors.selectedPurpose, this.updateIabPurposeData(e.IabGrpId, t, o))
    }, on.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return E.isGroupActive(e)
        })
    }, on.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return E.IsGroupInActive(e)
        })
    }, on.prototype.toggleGroupHtmlElement = function(e, t, o) {
        b.legIntSettings.PAllowLI && b.legIntSettings.PShowLegIntBtn && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && (e = document.querySelector("[data-el-id=" + t + "]")) && this.updateLegIntBtnElement(e, o);
        e = P("#ot-group-id-" + t).el[0];
        v.setCheckedAttribute(null, e, o), e && A.PCShowConsentLabels && (e.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText)
    }, on.prototype.updateLegIntBtnElement = function(e, t) {
        var o = b.legIntSettings,
            n = e.querySelector(".ot-obj-leg-btn-handler"),
            e = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn"), n.focus()) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, d(e, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }, on.prototype.isGroupActive = function(e) {
        e = -1 < kt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== wt.inArray(e.CustomGroupId + ":1", E.getGroupVariable());
        return e
    }, on.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, on.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o = null != e && void 0 !== e,
            n = g.readCookieParam(h.OPTANON_CONSENT, "groups"),
            r = I.groupsConsent.join(","),
            i = g.readCookieParam(h.OPTANON_CONSENT, "hosts"),
            s = I.hostsConsent.join(",");
        if (t) return !0;
        n === r && i === s || G.ensureHtmlGroupDataInitialised();
        var a = [];
        if (I.showGeneralVendors)
            for (var l = 0, c = Object.entries(I.genVendorsConsent); l < c.length; l++) {
                var d = c[l],
                    u = d[0],
                    d = d[1];
                a.push(u + ":" + (d ? "1" : "0"))
            }
        I.showVendorService && I.vsConsent.forEach(function(e, t) {
            a.push(t + ":" + (e ? "1" : "0"))
        });
        t = I.groupsConsent.concat(I.hostsConsent).concat(a), n = v.contains(t, e + ":1"), r = this.doesHostExist(e), i = this.doesGroupExist(e), s = !1, I.showGeneralVendors ? s = this.doesGenVendorExist(e) : I.showVendorService && (s = this.doesVendorServiceExist(e)), t = !(!r && !s) || n && G.canSoftOptInInsertForGroup(e);
        return !(!o || !(n && t || !i && !r && !s))
    }, on.prototype.setAllowAllButton = function() {
        var t = 0,
            e = A.Groups.some(function(e) {
                if (-1 === Tt.indexOf(e.Type)) return E.IsGroupInActive(e) && t++, e.SubGroups.some(function(e) {
                    return E.IsGroupInActive(e)
                }) && t++, 1 <= t
            }),
            o = eo.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), Ao.lastItem && Ao.setLastItem(), e
    }, on.prototype.isAnyGroupOptedOut = function() {
        for (var e = !1, t = 0, o = A.Groups; t < o.length; t++) {
            var n = o[t];
            if (!0 === E.IsGroupInActive(n)) {
                e = !0;
                break
            }
        }
        return e
    }, on.prototype.getGroupVariable = function() {
        return I.groupsConsent
    }, on.prototype.IsGroupInActive = function(e) {
        e = -1 < kt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < Tt.indexOf(e.Type)) && -1 === wt.inArray(e.CustomGroupId + ":1", E.getGroupVariable());
        return e
    }, on.prototype.updateIabPurposeData = function(t, e, o) {
        var n = v.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[-1 === n ? Number(t) : n] = t + ":" + e
    }, on.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = -1 === (o = v.findIndex(I.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        })) ? Number(t) : o;
        I.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, on.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + k.P_Category_Grp + " " + k.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, on.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            E.toggleGrpStatus(e, t), To.toggleGroupHosts(e, t), I.genVenOptOutEnabled && To.toggleGroupGenVendors(e, t)
        })
    }, on.prototype.isIabPurposeActive = function(e) {
        var t = e.Type === T.GroupTypes.Spl_Ft ? I.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? I.vendors.selectedLegInt : I.vendors.selectedPurpose;
        return wt.inArray(e.IabGrpId + ":true", t)
    }, on.prototype.doesGroupExist = function(e) {
        return !!f.getGroupById(e)
    }, on.prototype.doesHostExist = function(e) {
        var t = I.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, on.prototype.doesGenVendorExist = function(t) {
        return !!A.GeneralVendors && !!A.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }, on.prototype.doesVendorServiceExist = function(e) {
        return I.getVendorsInDomain().has(e)
    };
    var E, tn = on;

    function on() {}
    var nn, rn, sn = "#onetrust-banner-sdk",
        an = ".banner_logo",
        ln = "#onetrust-pc-sdk",
        cn = (dn.prototype.BannerPushDownHandler = function() {
            this.checkIsBrowserIE11OrBelow() || (rn.pushPageDown(sn), P(window).on("resize", function() {
                "none" !== P(sn).css("display") && rn.pushPageDown(sn)
            }))
        }, dn.prototype.checkIsBrowserIE11OrBelow = function() {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, dn.prototype.addOTCssPropertiesToBody = function(e, t) {
            var o = rn.getCssData(e, t);
            I.customerStyles.set(e, o), rn.setStylesOnBody(t)
        }, dn.prototype.removeAddedOTCssStyles = function(e) {
            void 0 === e && (e = nn.Banner);
            var t = I.customerStyles.get(e);
            t ? (rn.setStylesOnBody(t.customerBodyCSS), rn.setStylesOnHtml(t.customerHtmlCSS), I.customerStyles.delete(e)) : 0 < I.customerStyles.size && I.customerStyles.forEach(function(e, t) {
                return rn.removeAddedOTCssStyles(t)
            })
        }, dn.prototype.getCssData = function(e, t) {
            var o, n, r = P("body").el[0],
                i = P("html").el[0],
                s = {},
                a = {},
                e = I.customerStyles.get(e),
                a = e ? (o = e.scriptBodyCSS, n = e.customerBodyCSS, e = e.customerHtmlCSS, r.style.top !== o.top && (n.top = r.style.top), r.style.position !== o.position && (n.position = r.style.position), r.style.overflow !== o.overflow && (n.overflow = r.style.overflow), i.style.overflow !== o.overflow && (e.overflow = i.style.overflow), s = n, e) : (s = {
                    top: r.style.top,
                    position: r.style.position,
                    overflow: r.style.overflow
                }, {
                    overflow: i.style.overflow
                });
            return {
                scriptBodyCSS: t,
                customerBodyCSS: s,
                customerHtmlCSS: a
            }
        }, dn.prototype.setStylesOnBody = function(e) {
            var t = P("body").el[0];
            rn.setStylesOnHtmlElement(t, e)
        }, dn.prototype.setStylesOnHtml = function(e) {
            var t = P("html").el[0];
            rn.setStylesOnHtmlElement(t, {
                overflow: e.overflow
            })
        }, dn.prototype.setStylesOnHtmlElement = function(e, t) {
            for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = r[n],
                    s = i[0],
                    i = i[1];
                i ? o += s + ": " + i + ";" : e.style.removeProperty(s)
            }
            o && d(e, o, !0)
        }, dn.prototype.pushPageDown = function(e) {
            var t = P(e).height() + "px",
                e = (P(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "), I.isPCVisible ? nn.PC : nn.Banner),
                t = {
                    position: "relative",
                    top: t
                };
            I.isPCVisible && (t.overflow = "hidden"), rn.addOTCssPropertiesToBody(e, t)
        }, dn);

    function dn() {}(s = nn = nn || {}).Banner = "Banner", s.PC = "PC";
    hn.prototype.showConsentNotice = function() {
        var e, t, o;
        !A.NoBanner || A.ForceConsent ? P(".onetrust-pc-dark-filter").removeClass("ot-hide") : P(".onetrust-pc-dark-filter").addClass("ot-hide"), P("" + un.ONETRUST_PC_SDK).removeClass("ot-hide"), S.isV2Template && this.closePCText(!0), b.pcName === ot && (P("" + un.ONETRUST_PC_SDK).el[0].classList.contains("ot-animated") || P("" + un.ONETRUST_PC_SDK).addClass("ot-animated"), e = A.PreferenceCenterPosition, t = (o = A.useRTL) ? "right" : "left", o = o ? "left" : "right", P("" + un.ONETRUST_PC_SDK).el[0].classList.contains("ot-slide-out-" + ("right" === e ? o : t)) && P("" + un.ONETRUST_PC_SDK).removeClass("ot-slide-out-" + ("right" === e ? o : t)), P("" + un.ONETRUST_PC_SDK).addClass("ot-slide-in-" + ("right" === e ? o : t))), E.setAllowAllButton(), Ao.setPCFocus(Ao.getPCElements()), A.NoBanner && A.ScrollCloseBanner || this.pcHasScroll(), this.handleBodyStylesForBannerPushdown()
    }, hn.prototype.hideConsentNoticeV2 = function() {
        var e, t, o;
        0 === P(this.ONETRUST_PC_SDK).length ? this.setFocusOnPage() : (S.isV2Template && this.closePCText(), A.ForceConsent && !y.isCookiePolicyPage(A.AlertNoticeText) && !C.isAlertBoxClosedAndValid() && A.ShowAlertNotice ? P("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : P("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(A.PCLayout.Panel ? 500 : 400), A.PCLayout.Panel && (e = A.PreferenceCenterPosition, t = (o = A.useRTL) ? "right" : "left", o = o ? "left" : "right", P("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? o : t)), P("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? o : t))), P("" + this.ONETRUST_PC_SDK).fadeOut(A.PCLayout.Panel ? 500 : 400), I.isPCVisible = !1, I.pcLayer = ie.Banner, this.setFocus())
    }, hn.prototype.setFocus = function() {
        var e;
        I.pcSource || C.isAlertBoxClosedAndValid() ? I.pcSource ? (I.pcSource.focus(), I.pcSource = null) : A.BInitialFocus ? y.resetFocusToBody() : this.setFocusOnPage() : (e = P("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0]) && e.focus()
    }, hn.prototype.handleBodyStylesForBannerPushdown = function() {
        b.pcName === rt && b.pagePushedDown && "top" === A.BannerPosition && rn.addOTCssPropertiesToBody(nn.PC, {})
    }, hn.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        I.isKeyboardUser && e.length && e[0].focus()
    }, hn.prototype.closePCText = function(e) {
        void 0 === e && (e = !1);
        var t = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
            o = A.AboutCookiesText;
        t && (t.innerText = e ? "" : o + (" " + A.pcDialogClose))
    }, hn.prototype.pcHasScroll = function() {
        this.bodyStyleChanged = !0;
        var e = P("body");
        e && e.length && rn.addOTCssPropertiesToBody(nn.PC, {
            overflow: "hidden"
        })
    }, hn.prototype.checkIfPcSdkContainerExist = function() {
        return !P("" + un.ONETRUST_PC_SDK).length
    };
    var un, pn = hn;

    function hn() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter", this.bodyStyleChanged = !1
    }
    yn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        I.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", ""),
                o = f.getGrpStatus(f.getGroupById(t)).toLowerCase() === m.ALWAYS_ACTIVE;
            v.endsWith(e, ":1") && (G.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), I.hostsConsent.forEach(function(e) {
            v.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), I.showGeneralVendors && A.GenVenOptOut && A.GeneralVendors.forEach(function(e) {
            !I.genVendorsConsent[e.VendorCustomId] || I.softOptInGenVendors.includes(e.VendorCustomId) && So.isLandingPage() || n.push(e.VendorCustomId)
        });
        I.vsIsActiveAndOptOut && I.getVendorsInDomain().forEach(function(e) {
            I.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t, o = "," + v.arrToStr(n) + ",";
        A.GoogleConsent.GCEnable && !b.otDataLayer.ignore && (t = this.includeAllActiveIABData(), this.updateGCMTags(M(n, t))), window.OnetrustActiveGroups = o, window.OptanonActiveGroups = o, b.gcmUpdateCallback && b.gcmUpdateCallback(), b.otDataLayer.ignore || void 0 === this._window[b.otDataLayer.name] || this._window[b.otDataLayer.name].constructor !== Array ? !b.otDataLayer.ignore && b.otDataLayer.name && (this._window[b.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: o
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: o
        }]) : (this._window[b.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: o
        }), this._window[b.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: o
        })), this.dispatchEvents(e, n, o)
    }, yn.prototype.includeAllActiveIABData = function() {
        try {
            for (var n = [], e = 0, t = ["purpose", "features", "specialFeatures", "specialPurposes"]; e < t.length; e++) ! function(o) {
                var t, e = I.oneTrustIABConsent[o];
                "purpose" === o || "specialFeatures" === o ? e.forEach(function(e) {
                    var t = "purpose" === o ? "IAB2V2" : "ISF2V2",
                        e = e.split(":");
                    "true" === e[1] && n.push(t + "_" + e[0])
                }) : (t = [], e.forEach(function(e) {
                    e.value && t.push(e.groupId.toString())
                }), n = M(n, t))
            }(t[e]);
            return n
        } catch (e) {
            return []
        }
    }, yn.prototype.dispatchEvents = function(e, t, o) {
        !e && b.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust", {
            detail: t
        }));
        var n, r, i = g.readCookieParam(h.OPTANON_CONSENT, "groups"),
            s = I.fireOnetrustGrp || !i || e || !b.gtmUpdatedinStub;
        s && (I.fireOnetrustGrp = !1, !b.otDataLayer.ignore && this._window[b.otDataLayer.name] && this._window[b.otDataLayer.name].constructor === Array && this._window[b.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }), r = new CustomEvent("OneTrustGroupsUpdated", {
            detail: t
        })), setTimeout(function() {
            n && s && window.dispatchEvent(n), r && window.dispatchEvent(r)
        })
    }, yn.prototype.categoryNotMapped = function(e) {
        return e !== at && "" !== e
    }, yn.prototype.updateGCMTags = function(o) {
        var n, r = this,
            i = {},
            e = (this.canUpdateGCMCategories() && (e = [
                [A.GoogleConsent.GCAdStorage, be.ad_storage],
                [A.GoogleConsent.GCAnalyticsStorage, be.analytics_storage],
                [A.GoogleConsent.GCFunctionalityStorage, be.functionality_storage],
                [A.GoogleConsent.GCPersonalizationStorage, be.personalization_storage],
                [A.GoogleConsent.GCSecurityStorage, be.security_storage]
            ], S.fp.CookieV2GCMDMA && (e.push([A.GoogleConsent.GCAdUserData, be.ad_user_data]), e.push([A.GoogleConsent.GCAdPersonalization, be.ad_personalization])), e.forEach(function(e) {
                var t;
                r.categoryNotMapped(e[0]) && (t = o.includes(e[0]) ? Ae.granted : Ae.denied, i[e[1]] = t)
            })), g.getCookie(h.ALERT_BOX_CLOSED)),
            t = b.getRegionRule().Global;
        "function" != typeof window.gtag && (n = this._window, window.gtag = function(e, t, o) {
            b.otDataLayer.ignore || (n[b.otDataLayer.name] ? n[b.otDataLayer.name].push(arguments) : n[b.otDataLayer.name] = [arguments])
        }), "function" == typeof window.gtag && (b.gcmDevIdSet || (window.gtag(Te.set, "developer_id.dYWJhMj", !0), b.gcmDevIdSet = !0), e) && (t || (i[be.region] = b.gcmCountries), 0 !== Object.keys(i).length) && window.gtag(Te.consent, Pe.update, i)
    }, yn.prototype.canUpdateGCMCategories = function() {
        return A.GoogleConsent.GCAdStorage !== at || A.GoogleConsent.GCAnalyticsStorage !== at || A.GoogleConsent.GCFunctionalityStorage !== at || A.GoogleConsent.GCPersonalizationStorage !== at || A.GoogleConsent.GCSecurityStorage !== at || A.GoogleConsent.GCAdUserData !== at || A.GoogleConsent.GCAdPersonalization !== at
    }, yn.prototype.checkAndWarnGCMConfig = function() {
        var e = 0,
            t = 0,
            o = 0,
            n = 0;
        if (A.GoogleConsent.GCEnable && !b.otDataLayer.ignore) {
            for (var r = this._window[b.otDataLayer.name], i = 0, s = Object.keys(r); i < s.length; i++) {
                var a = s[i];
                n++, this.isObjectTypeArgs(r[a]) && ("consent" === r[a][0] && "default" === r[a][1] ? t = n : "consent" === r[a][0] && "update" === r[a][1] ? o = n : 0 === e && "config" === r[a][0] && this.isGoogleTag(r[a][1]) && (e = n))
            }
            this.addGCMConfigStatus(e, t, o)
        }
    }, yn.prototype.addGCMConfigStatus = function(e, t, o) {
        0 !== e && (e < t ? console.warn("Google Consent mode default value is set after the Google tags were loaded.") : 0 === t ? console.warn("Google Consent mode default or consent value has not been set but the Google tags were loaded.") : (t < e || o < e) && console.info("Google Consent mode is properly configured."))
    }, yn.prototype.isGoogleTag = function(e) {
        return e && (-1 < e.indexOf("GT-") || -1 < e.indexOf("G-") || -1 < e.indexOf("AW-"))
    }, yn.prototype.isObjectTypeArgs = function(e) {
        return "[object Arguments]" === Object.prototype.toString.call(e)
    };
    var gn, Cn = yn;

    function yn() {
        this._window = window
    }
    Sn.prototype.updateFilterSelection = function(e) {
        o = (e = void 0 === e ? !1 : e) ? (t = I.filterByCategories, "data-optanongroupid") : (t = I.filterByIABCategories, "data-purposeid");
        for (var t, o, n = P("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o),
                i = -1 < t.indexOf(i);
            v.setCheckedAttribute(null, n[r], i)
        }
    }, Sn.prototype.cancelHostFilter = function() {
        for (var e = P("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid"),
                o = 0 <= I.filterByCategories.indexOf(o);
            v.setCheckedAttribute(null, e[t], o)
        }
    }, Sn.prototype.updateHostFilterList = function() {
        for (var e = P("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-optanongroupid");
            e[t].checked && I.filterByCategories.indexOf(n) < 0 ? I.filterByCategories.push(n) : !e[t].checked && -1 < I.filterByCategories.indexOf(n) && (o = I.filterByCategories, I.filterByCategories.splice(o.indexOf(n), 1))
        }
        return I.filterByCategories
    }, Sn.prototype.InitializeHostList = function() {
        var e = k.P_Vendor_List + " " + k.P_Host_Cntr + " li";
        I.hosts.hostTemplate = P(e).el[0].cloneNode(!0), I.hosts.hostCookieTemplate = P(k.P_Vendor_List + " " + k.P_Host_Cntr + " " + k.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, Sn.prototype.getCookiesForGroup = function(t) {
        var o = [],
            n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(R(R({}, e), {
                groupName: t.GroupName
            }))
        }), t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(R(R({}, e), {
                isActive: "always active" === f.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: ge.Host
            }))
        }), {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }, Sn.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, Sn.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode,
            o = document.createElement(e.tagName),
            n = (o.innerHTML = e.innerHTML, e.attributes);
        if (0 < n.length)
            for (var r = 0; r < n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, Sn.prototype.reactivateTag = function(e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"),
            r = 0 <= e.className.indexOf("optanon-category"),
            i = (n && r ? o = this.getGroupElements(e.className, I.showVendorService) : n ? I.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (I.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1)), !0);
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!E.canInsertForGroup(o[s].trim())) {
                    i = !1;
                    break
                }
            i && this.unBlockTag(t, e)
        }
    }, Sn.prototype.unBlockTag = function(e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }, Sn.prototype.getGroupElements = function(e, t) {
        return (t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i) : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i))[1].split("-")
    }, Sn.prototype.substitutePlainTextScriptTags = function() {
        var t = this,
            e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]')),
            e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || [])))),
            o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || []))));
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    };
    var fn, mn = Sn;

    function Sn() {}
    var vn, kn = "Banner",
        Tn = "Preference Center",
        Pn = "API",
        bn = "Close",
        An = "Allow All",
        In = "Reject All",
        Ln = "Confirm",
        _n = "Confirm",
        En = "Continue without Accepting",
        On = (Vn.prototype.init = function() {
            this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
        }, Vn.prototype.getContent = function() {
            return u(this, void 0, void 0, function() {
                return F(this, function(e) {
                    return [2, Dt.getSyncNtfyContent().then(function(e) {
                        I.syncNtfyGrp = {
                            name: e.name,
                            html: atob(e.html),
                            css: e.css
                        }
                    })]
                })
            })
        }, Vn.prototype.insertHtml = function() {
            this.removeHtml();

            function e(e) {
                return t.querySelector(e)
            }
            var t = document.createDocumentFragment(),
                o = document.createElement("div"),
                o = (P(o).html(I.syncNtfyGrp.html), o.querySelector(this.El)),
                n = (A.BannerRelativeFontSizesToggle && P(o).addClass("otRelFont"), A.useRTL && P(o).attr("dir", "rtl"), P(t).append(o), A.NtfyConfig),
                n = (this.initHtml("Sync", n.Sync, e, t.querySelector(this.El)), n.ShowCS ? P(e(".ot-pc-handler")).html(n.CSTxt) : (P(o).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr"))), document.createElement("div"));
            P(n).append(t), P("#onetrust-consent-sdk").append(n.firstChild)
        }, Vn.prototype.initHandler = function() {
            P(this.El + " .ot-sync-close-handler").on("click", function() {
                return vn.close()
            })
        }, Vn.prototype.showNty = function() {
            var e = P(this.El);
            e.css("bottom: -300px;"), e.animate({
                bottom: "1em;"
            }, 1e3), setTimeout(function() {
                e.css("bottom: 1rem;")
            }, 1e3), e.focus()
        }, Vn.prototype.changeState = function() {
            setTimeout(function() {
                vn.refreshState()
            }, 1500)
        }, Vn.prototype.refreshState = function() {
            function e(e) {
                return t.querySelector(e)
            }
            var t = P(this.El).el[0],
                o = (t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync"), A.NtfyConfig);
            this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && P(e(".ot-pc-handler")).addClass("ot-pc-link"), P(".ot-sync-btncntr").show("inline-block"), this.alignContent(), P(window).on("resize", function() {
                return vn.resizeEvent
            })), setTimeout(function() {
                vn.close()
            }, 1e3 * A.NtfyConfig.NtfyDuration)
        }, Vn.prototype.insertCss = function() {
            var e = document.getElementById("onetrust-style");
            e.innerHTML += I.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
        }, Vn.prototype.addCustomStyles = function() {
            var e = A.NtfyConfig,
                t = e.Sync,
                o = e.Complete,
                n = e.CSButton,
                r = e.CSLink;
            return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
        }, Vn.prototype.initHtml = function(e, t, o, n) {
            var r = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
            t.ShowIcon ? (P(o("Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check")).show(), P(o(r)).hide(), P(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (P(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? P(o("#ot-sync-title")).html(t.Title) : P(o("#ot-sync-title")).hide(), t.Desc ? P(o(".ot-sync-desc")).html(t.Desc) : P(o(".ot-sync-desc")).hide(), t.ShowClose ? (P(o(".ot-sync-close-handler")).show("inline-block"), P(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (P(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
        }, Vn.prototype.close = function() {
            this.hideSyncNtfy(), y.resetFocusToBody()
        }, Vn.prototype.hideSyncNtfy = function() {
            A.NtfyConfig.ShowCS && window.removeEventListener("resize", vn.resizeEvent), P("#ot-sync-ntfy").fadeOut(400)
        }, Vn.prototype.removeHtml = function() {
            var e = P(this.El).el;
            e && v.removeChild(e)
        }, Vn.prototype.alignContent = function() {
            P(".ot-sync-btncntr").el[0].clientHeight > P(".ot-sync-titlecntr").el[0].clientHeight && (P(".ot-sync-titlecntr").addClass("ot-pos-abs"), P(".ot-sync-btncntr").addClass("ot-pos-rel"))
        }, Vn.prototype.resizeEvent = function() {
            window.innerWidth <= 896 && vn.alignContent()
        }, Vn);

    function Vn() {
        this.El = "#ot-sync-ntfy"
    }
    Gn.prototype.toggleVendorConsent = function(e, t) {
        void 0 === t && (t = null), (e = (e = void 0 === e ? [] : e).length ? e : I.oneTrustIABConsent.vendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = P(k.P_Vendor_Container + " ." + k.P_Ven_Ctgl + ' [vendorid="' + t + '"]').el[0];
            t && v.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = P("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        n && (o = v.getActiveIdArray(v.distinctArray(e)), (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(Et.P_Line_Through) : n.parentElement.classList.add(Et.P_Line_Through), v.setCheckedAttribute("", n, t))
    }, Gn.prototype.toggleVendorLi = function(e, t) {
        void 0 === t && (t = null), (e = (e = void 0 === e ? [] : e).length ? e : I.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = P(k.P_Vendor_Container + " ." + k.P_Ven_Ltgl + ' [leg-vendorid="' + t + '"]').el[0];
            t && v.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = P("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        n && (o = v.getActiveIdArray(v.distinctArray(e)), (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(Et.P_Line_Through) : n.parentElement.classList.add(Et.P_Line_Through), v.setCheckedAttribute("", n, t))
    }, Gn.prototype.updateVendorLegBtns = function(e) {
        (e = (e = void 0 === e ? [] : e).length ? e : I.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = P(k.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + t + '"]').el[0];
            t && E.updateLegIntBtnElement(t, "true" === e)
        })
    };
    var Bn, wn = Gn;

    function Gn() {}

    function Nn() {
        return (!b.isIab2orv2Template && A.PCTemplateUpgrade && A.PCCategoryStyle === Se.Toggle ? L.toggleEl : L.chkboxEl).cloneNode(!0)
    }
    Dn.prototype.setHtmlTemplate = function(e) {
        O.setInternalData(), O.rootHtml = e, O.cloneHtmlElements()
    }, Dn.prototype.getVendorListEle = function(e) {
        var t = document.createDocumentFragment(),
            o = document.createElement("div"),
            n = (o.classList.add("ot-vs-list"), A.VendorServiceConfig.PCVSExpandGroup);
        return e.forEach(function(e, t) {
            e = O.createVendor(e.groupRef, e, n, "ot-vs-lst-id-" + t);
            o.appendChild(e)
        }), t.appendChild(o), t
    }, Dn.prototype.insertVendorServiceHtml = function(e, t) {
        var o;
        O.checkIfIsInvalid(e, t) || (o = document.createDocumentFragment(), O.setVendorContainer(o, e), O.setVendorList(o, e), e.SubGroups && 0 < e.SubGroups.length ? (o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt"), e = t.children[1], b.pcName === rt && (e = t.children[2]), t.insertBefore(o, e)) : t.appendChild(o))
    }, Dn.prototype.toggleVendorService = function(e, t, o, n) {
        e = f.getGroupById(e), t = f.getVSById(t);
        n = n || O.getVendorInputElement(t.CustomVendorServiceId), O.setVendorServiceState(n, t, o), o ? O.changeGroupState(e, o, O.isToggle) : O.checkGroupChildrenState(e) || O.changeGroupState(e, !1, O.isToggle)
    }, Dn.prototype.setVendorStateByGroup = function(e, t) {
        e = e.VendorServices;
        if (I.showVendorService && e)
            for (var o = 0, n = e; o < n.length; o++) {
                var r = n[o],
                    i = O.getVendorInputElement(r.CustomVendorServiceId);
                O.setVendorServiceState(i, r, t)
            }
    }, Dn.prototype.resetVendorUIState = function(e) {
        e.forEach(function(e, t) {
            t = O.getVendorInputElement(t);
            O.changeVendorServiceUIState(t, e)
        })
    }, Dn.prototype.setVendorServiceState = function(e, t, o) {
        O.changeVendorServiceState(t, o), O.changeVendorServiceUIState(e, o);
        e = o ? Qo : Zo;
        _.triggerGoogleAnalyticsEvent(Io, e, t.ServiceName + ": " + t.CustomVendorServiceId)
    }, Dn.prototype.removeVSUITemplate = function(e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }, Dn.prototype.consentAll = function(o) {
        I.getVendorsInDomain().forEach(function(e) {
            var t = o;
            o || (t = f.isAlwaysActiveGroup(e.groupRef)), O.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }, Dn.prototype.cloneHtmlElements = function() {
        var e, t, o, n, r = O.rootHtml.querySelector(this.MAIN_CONT_ELE);
        r && (e = r.querySelector(".ot-vnd-serv-hdr-cntr"), n = (o = (t = r.querySelector(".ot-vnd-lst-cont")).querySelector(".ot-vnd-item")).querySelector(".ot-vnd-info"), O.vendorLabelContainerClone = e.cloneNode(!0), r.removeChild(e), O.vendorInfoClone = n.cloneNode(!0), o.querySelector(".ot-vnd-info-cntr").removeChild(n), O.vendorItemClone = o.cloneNode(!0), t.removeChild(o), O.vendorListContainerClone = t.cloneNode(!0), r.removeChild(t), O.vendorServMainContainerClone = r.cloneNode(!0), O.rootHtml.removeChild(r))
    }, Dn.prototype.setInternalData = function() {
        O.isToggle = A.PCCategoryStyle === Se.Toggle;
        var e = A.VendorServiceConfig;
        O.stringTranslation = new Map, O.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"), O.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"), O.stringTranslation.set("Address", e.PCVSAddressText || "Address"), O.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"), O.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"), O.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"), O.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"), O.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"), O.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"), O.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"), O.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }, Dn.prototype.setVendorContainer = function(e, t) {
        var o = O.vendorServMainContainerClone.cloneNode(!0),
            t = (o.setAttribute("data-group-id", t.CustomGroupId), O.vendorLabelContainerClone.cloneNode(!0));
        t.querySelector(".ot-vnd-serv-hdr").innerHTML = A.VendorServiceConfig.PCVSListTitle, o.appendChild(t), e.appendChild(o)
    }, Dn.prototype.setVendorList = function(e, t) {
        for (var o = 0, n = O.getVSFromGroupAndSubgroups(t), r = n.length, e = e.querySelector(this.MAIN_CONT_ELE), i = O.vendorListContainerClone.cloneNode(), s = A.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var a = O.createVendor(t, n[o], s);
            i.appendChild(a)
        }
        e.appendChild(i)
    }, Dn.prototype.getVSFromGroupAndSubgroups = function(e, t) {
        var o, n = null != (o = e.VendorServices) ? o : [];
        if (t = void 0 === t ? !1 : t)
            for (var r = 0, i = null != (o = e.SubGroups) ? o : []; r < i.length; r++) {
                var s = null != (s = i[r].VendorServices) ? s : [];
                n.push.apply(n, s)
            }
        return n
    }, Dn.prototype.createVendor = function(e, t, o, n) {
        var r = O.vendorItemClone.cloneNode(!0),
            i = (r.setAttribute("data-vnd-id", t.CustomVendorServiceId), A.PCAccordionStyle === le.NoAccordion ? (r.classList.remove("ot-accordion-layout"), (i = r.querySelector("button")) && r.removeChild(i)) : O.setExpandVendorList(r, o), O.setVendorHeader(e, t, r, n), r.querySelector(".ot-vnd-info-cntr"));
        return O.setVendorInfo(i, t), r
    }, Dn.prototype.setExpandVendorList = function(e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }, Dn.prototype.setVendorHeader = function(e, t, o, n) {
        var r = A.PCShowAlwaysActiveToggle,
            i = "always active" === f.getGrpStatus(e).toLowerCase(),
            o = o.querySelector(".ot-acc-hdr"),
            s = (i && o.classList.add("ot-always-active-group"), null),
            e = (i && A.PCCategoryStyle === Se.Toggle || (s = O.setHeaderInputStyle(e, t, i, n)), O.setHeaderText(t, o)),
            n = (o.appendChild(e), O.getPositionForElement(A.PCAccordionStyle, O.isToggle)),
            t = n.positionIcon,
            e = n.positionInput;
        s && o.insertAdjacentElement(e, s), i && r && (n = O.getAlwaysActiveElement(), o.insertAdjacentElement("beforeend", n)), A.PCAccordionStyle !== le.NoAccordion && (e = O.setHeaderAccordionIcon(), o.insertAdjacentElement(t, e))
    }, Dn.prototype.getPositionForElement = function(e, t) {
        var o = "beforeend",
            n = "beforeend";
        return {
            positionIcon: o = t && e === le.PlusMinus ? "afterbegin" : o,
            positionInput: n = t ? n : "afterbegin"
        }
    }, Dn.prototype.setHeaderAccordionIcon = function() {
        var e = (A.PCAccordionStyle === le.Caret ? L.arrowEl : L.plusMinusEl).cloneNode(!0);
        return e
    }, Dn.prototype.setHeaderText = function(e, t) {
        var o = t.querySelector(".ot-cat-header"),
            n = o.cloneNode();
        return t.removeChild(o), n.innerText = e.ServiceName, n
    }, Dn.prototype.setHeaderInputStyle = function(e, t, o, n) {
        var r, i, s, a;
        return A.VendorServiceConfig.PCVSOptOut ? (e = f.checkIsActiveByDefault(e), r = !1, r = (i = I.vsConsent).has(t.CustomVendorServiceId) ? i.get(t.CustomVendorServiceId) : e, (i = Nn()).querySelector("input").classList.add("category-switch-handler"), e = i.querySelector("input"), a = t.CustomVendorServiceId, n = null != n ? n : "ot-vendor-id-" + a, s = "ot-vendor-header-id-" + a, P(e).attr("id", n), P(e).attr("name", n), P(e).attr("aria-labelledby", s), P(e).data("ot-vs-id", a), P(e).data("optanongroupid", t.groupRef.CustomGroupId), e.disabled = o, v.setCheckedAttribute(null, e, r), a = O.isToggle ? n : s, P(i.querySelector("label")).attr("for", a), P(i.querySelector(".ot-label-txt")).html(t.ServiceName), i) : null
    }, Dn.prototype.getAlwaysActiveElement = function() {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"), e.innerText = A.AlwaysActiveText, e
    }, Dn.prototype.setVendorInfo = function(e, t) {
        var o, n, r, i, s, a, l = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t) O.skipVendorInfoKey(o, t) || (n = t[o], (r = O.vendorInfoClone.cloneNode(!0)).dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId, i = r.querySelector(".ot-vnd-lbl"), s = r.querySelector(".ot-vnd-cnt"), i.innerHTML = O.getLocalizedString(o), l.includes(o) ? (s.remove(), a = document.createElement("a"), P(a).attr("href", n), P(a).attr("target", "_blank"), P(a).attr("rel", "noopener"), P(a).attr("aria-label", n + " " + A.NewWinTxt), a.classList.add("ot-vnd-cnt"), a.innerText = n, i.insertAdjacentElement("afterend", a)) : s.innerHTML = n, e.appendChild(r))
    }, Dn.prototype.skipVendorInfoKey = function(e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }, Dn.prototype.getLocalizedString = function(e) {
        return O.stringTranslation.has(e) ? O.stringTranslation.get(e) : "DEFAULT"
    }, Dn.prototype.checkGroupChildrenState = function(e) {
        for (var t, o = 0, n = null != (t = e.SubGroups) ? t : []; o < n.length; o++) {
            var r = n[o];
            if (O.checkGroupChildrenState(r)) return !0
        }
        for (var i = 0, s = null != (t = e.VendorServices) ? t : []; i < s.length; i++) {
            var a = s[i];
            if (I.vsConsent.get(a.CustomVendorServiceId)) return !0
        }
        return !1
    }, Dn.prototype.changeVendorServiceState = function(e, t) {
        I.vsConsent.set(e.CustomVendorServiceId, t)
    }, Dn.prototype.changeVendorServiceUIState = function(e, t) {
        e && v.setCheckedAttribute(null, e, t)
    }, Dn.prototype.changeGroupState = function(e, t, o) {
        var n = f.getParentByGrp(e);
        E.toggleGrpStatus(e, t), O.updateGroupUIState(e.CustomGroupId, t, o, null !== n), n && (e = O.checkGroupChildrenState(n), O.changeGroupState(n, e, o))
    }, Dn.prototype.updateGroupUIState = function(e, t, o, n) {
        void 0 === n && (n = !1);
        n = document.querySelector((n ? "#ot-sub-group-id-" : "#ot-group-id-") + e);
        n && v.setCheckedAttribute(null, n, t)
    }, Dn.prototype.getVendorInputElement = function(e) {
        return document.getElementById("ot-vendor-id-" + e)
    }, Dn.prototype.checkIfIsInvalid = function(e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    };
    var O, xn = Dn;

    function Dn() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }

    function Hn(e, t) {
        var o, n, r = "otGenericBackdrop",
            i = "#" + r,
            s = "ot-generic-modal-layer";

        function a(e) {
            e ? (P(i).removeClass("ot-hide"), P(i).el[0].removeAttribute("style")) : (P(i).fadeOut(400), P(i).addClass("ot-hide"))
        }
        return (o = document.createElement("div")).classList.add(s), (n = document.createElement("div")).setAttribute("id", r), n.classList.add("onetrust-pc-dark-filter"), o.appendChild(n), (r = document.createElement("div")).classList.add("ot-general-modal"), r.setAttribute("id", null != e ? e : "genericModal"), o.appendChild(r), n = "#onetrust-consent-sdk .ot-general-modal { background-color: " + A.pcBackgroundColor + ";}", (e = document.getElementById("onetrust-style")).textContent = e.textContent + n, {
            dialogLayerHtml: o,
            modalHtml: r,
            closeModalHandler: function() {
                a(!1);
                var e = t.querySelector("." + s);
                t.removeChild(e)
            },
            openModalHandler: function() {
                a(!0)
            }
        }
    }
    Fn.getInstance = function() {
        return Fn.instance = Fn.instance ? Fn.instance : new Fn
    }, Fn.prototype.getHealthSignatureUIIfNeeded = function(e) {
        if ((void 0 === e && (e = !1), b.requireSignatureEnabled) && (this.healthSignatureGroup = A.Groups.find(function(e) {
                return e.needsHealthSignature
            }), this.healthSignatureGroup))
            if (b.healthSignatureGroup || e)
                if (b.healthSignatureData) this.setSignHealthDataIntoCookieGroup(b.healthSignatureData);
                else {
                    var t = E.isGroupActive(this.healthSignatureGroup),
                        o = "1" === g.readCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION);
                    if (!(e && t && o)) return this.showHealthSignatureModal(function() {}), this.healthSignatureElement
                }
        else(t = E.isGroupActive(this.healthSignatureGroup)) && ur.setDataSubjectIdV2(b.healthSignatureData), g.writeCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, t ? "1" : "");
        return null
    }, Fn.prototype.checkIfHealthSignatureNeeded = function(e) {
        var t, o, n = this;
        return void 0 === e && (e = !1), !b.requireSignatureEnabled || I.bannerCloseSource === $.RejectAll || I.bannerCloseSource === $.BannerCloseButton || I.bannerCloseSource === $.ContinueWithoutAcceptingButton ? Promise.resolve() : (this.healthSignatureGroup = A.Groups.find(function(e) {
            return e.needsHealthSignature
        }), this.healthSignatureGroup ? (e = e || this.getGroupToggleHtmlValue()) ? b.healthSignatureData ? (this.setSignHealthDataIntoCookieGroup(b.healthSignatureData), Promise.resolve()) : (t = E.isGroupActive(this.healthSignatureGroup), o = "1" === g.readCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION), e && t && o ? Promise.resolve() : new Promise(function(e) {
            n.showHealthSignatureModal(e)
        })) : ((t = E.isGroupActive(this.healthSignatureGroup)) && ur.setDataSubjectIdV2(b.healthSignatureData), g.writeCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, t ? "1" : ""), Promise.resolve()) : (e = "🛑 INVALID Cookie category: " + A.RequireSignatureCID, Promise.reject(e)))
    }, Fn.prototype.getHealthSignatureComponent = function(e, t) {
        this.isModal = !1, this.langJson = A, this.parentElement = e, this.healthSignatureGroup = t;
        e = {
            errorMessage: this.langJson.PCRequireSignatureHelpText,
            inputLabelText: this.langJson.PCRequireSignatureFieldLabel
        }, t = '<form class="ot-signature-health-form" id="form">\n        <div class="ot-input-field-cont">\n            <label for="otHealthSignatureData" class="ot-signature-label">' + e.inputLabelText + '</label>\n            <input type="text" id="otHealthSignatureData" name="otHealthSignatureData" required aria-required="true" class="ot-signature-input"\n                aria-label="' + e.inputLabelText + '" autofocus aria-invalid="true" aria-describedby="otHealthSignatureErrorMesg"/>\n            <span id="otHealthSignatureErrorMesg" class="ot-health-signature-error">\n                ' + e.errorMessage + "\n            </span>\n        </div>\n    </form>", e = document.createElement("div");
        e.innerHTML = t, e.classList.add("ot-signature-health-group"), this.setConsentIdInput(e), this.healthSignatureElement = e, this.parentElement.appendChild(e), this.addEventHandlers()
    }, Fn.prototype.resetHealthSignatureData = function(e) {
        void 0 === e && (e = !1), b.requireSignatureEnabled && (b.healthSignatureData = "", b.healthSignatureGroup = null, e) && g.writeCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, "")
    }, Fn.prototype.setConsentIdInPC = function() {
        this.setConsentIdInput(null)
    }, Fn.prototype.setConsentIdInput = function(e) {
        var t;
        this.healthSignatureGroup && (g.readCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION) ? (t = (e || document).querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR)) && (e = "", E.isGroupActive(this.healthSignatureGroup) && (e = g.readCookieParam(h.OPTANON_CONSENT, p.CONSENT_ID)), t.value = e) : (t = document.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR)) && (t.value = ""))
    }, Fn.prototype.showHealthSignatureModal = function(t) {
        var o = this;
        un.hideConsentNoticeV2(), this.langJson = A, this.parentElement = document.querySelector(this.PARENT_SELECTOR), this.setMyHealthDataModal(function(e) {
            o.setSignHealthDataIntoCookieGroup(e), t()
        }, function() {
            E.toggleGrpStatus(o.healthSignatureGroup, !1), E.toggleGroupHtmlElement(o.healthSignatureGroup, o.healthSignatureGroup.CustomGroupId, !1), t()
        })
    }, Fn.prototype.setMyHealthDataModal = function(e, t) {
        this.isModal = !0, this.rejectCallback = t, this.confirmCallback = e, this.configOptions = {
            mainTitle: this.healthSignatureGroup.GroupName,
            description: this.healthSignatureGroup.GroupDescription,
            subtitle: this.langJson.PCRequireSignatureHeaderText,
            ariaLabel: this.langJson.PCRequireSignatureHeaderDesc,
            errorMessage: this.langJson.PCRequireSignatureHelpText,
            subDescription: this.langJson.PCRequireSignatureHeaderDesc,
            inputLabelText: this.langJson.PCRequireSignatureFieldLabel,
            rejectButtonText: this.langJson.PCRequireSignatureRejectBtnText,
            acceptButtonText: this.langJson.PCRequireSignatureConfirmBtnText
        };
        t = document.createDocumentFragment(), e = this.createModal(t);
        this.healthSignatureElement = this.createHealtSignatureForm(e), this.parentElement.appendChild(t), this.setFocusOnInput(), this.addEventHandlers(), this.genericModal.openModalHandler()
    }, Fn.prototype.setSignHealthDataIntoCookieGroup = function(e) {
        e ? (ur.setDataSubjectIdV2(e), b.healthSignatureData = e, E.toggleGrpStatus(this.healthSignatureGroup, !0)) : (b.healthSignatureData = "", E.toggleGrpStatus(this.healthSignatureGroup, !1)), g.writeCookieParam(h.OPTANON_CONSENT, p.HEALTH_SIGNATURE_AUTHORIZATION, e ? "1" : "")
    }, Fn.prototype.createModal = function(e) {
        return this.genericModal = Hn(this.MODAL_ID, this.parentElement), e.appendChild(this.genericModal.dialogLayerHtml), this.genericModal.modalHtml
    }, Fn.prototype.createHealtSignatureForm = function(e) {
        var t = '<div\n        class="ot-signature-health"\n        role="dialog"\n        aria-label="' + (t = this.configOptions).ariaLabel + '"\n        aria-describedby="otSignatureGroupDesc">\n        <section class="ot-signature-cont">\n            <h4 id="otSignatureSubtitle" class="ot-signature-subtitle">' + t.subtitle + '</h4>\n            <p class="ot-signature-paragraph">' + t.subDescription + '</p>\n        </section>\n        <section class="ot-signature-cont">\n            <h5 id="otSignatureGroupTitle" class="ot-signature-group-title">' + t.mainTitle + '</h5>\n            <p id="otSignatureGroupDesc" class="ot-signature-paragraph">' + t.description + '</p>\n        </section>\n        <form class="ot-signature-health-form" id="form">\n            <label for="otHealthSignatureData" class="ot-signature-label">' + t.inputLabelText + '</label>\n            <input type="text" id="otHealthSignatureData" name="otHealthSignatureData" required aria-required="true" class="ot-signature-input"\n                aria-label="' + t.inputLabelText + '" autofocus aria-invalid="true" aria-describedby="otHealthSignatureErrorMesg"/>\n            <span id="otHealthSignatureErrorMesg" class="ot-health-signature-error" aria-live="assertive">\n                ' + t.errorMessage + '\n            </span>\n        </form>\n        <div class="ot-signature-buttons-cont">\n            <button class="ot-signature-button reject">' + t.rejectButtonText + '</button>\n            <button class="ot-signature-button accept">' + t.acceptButtonText + "</button>\n        </div>\n    </div>";
        return e.innerHTML = t, this.setConsentIdInput(e), this.addStyles(), e.querySelector(".ot-signature-health")
    }, Fn.prototype.addEventHandlers = function() {
        this.isModal ? (this.parentElement.querySelector(this.REJECT_SELECTOR).addEventListener("click", this.rejectListener.bind(this)), this.parentElement.querySelector(this.CONFIRM_SELECTOR).addEventListener("click", this.confirmListener.bind(this))) : this.parentElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).addEventListener("keyup", this.healthSignatureInputChanged.bind(this))
    }, Fn.prototype.removeModal = function() {
        this.removeEventHandlers(), this.genericModal.closeModalHandler()
    }, Fn.prototype.removeEventHandlers = function() {
        this.isModal ? (this.parentElement.querySelector(this.REJECT_SELECTOR).removeEventListener("click", this.rejectListener), this.parentElement.querySelector(this.CONFIRM_SELECTOR).removeEventListener("click", this.confirmListener)) : this.parentElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).removeEventListener("keyup", this.healthSignatureInputChanged)
    }, Fn.prototype.rejectListener = function() {
        this.removeModal(), this.rejectCallback && this.rejectCallback()
    }, Fn.prototype.confirmListener = function() {
        var e = this.healthSignatureElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).value;
        e && (this.removeModal(), this.confirmCallback(e))
    }, Fn.prototype.healthSignatureInputChanged = function(e) {
        b.healthSignatureData = e.target.value
    }, Fn.prototype.setFocusOnInput = function() {
        this.healthSignatureElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).focus()
    }, Fn.prototype.addStyles = function() {
        var e = "",
            t = (e = (e = (e += this.setParagraphStyles()) + this.setAcceptButtonsStyles()) + this.setRejectButtonsStyles(), document.getElementById("onetrust-style"));
        t.textContent = t.textContent + e
    }, Fn.prototype.setRejectButtonsStyles = function() {
        return "#onetrust-consent-sdk .ot-signature-health " + this.REJECT_SELECTOR + " { \n            color: " + A.bannerMPButtonTextColor + ";\n            border-color: " + A.bannerMPButtonTextColor + ";\n            background-color: " + A.bannerMPButtonColor + ";\n        }"
    }, Fn.prototype.setAcceptButtonsStyles = function() {
        return "#onetrust-consent-sdk .ot-signature-health " + this.CONFIRM_SELECTOR + " {\n            color: " + A.buttonTextColor + ";\n            border-color: " + A.buttonColor + ";\n            background-color: " + A.buttonColor + ";\n        }"
    }, Fn.prototype.setParagraphStyles = function() {
        return this.HEALTH_SIGNATURE_PARAGRAPH_SELECTOR + " { \n            color: " + A.textColor + ";\n        }"
    }, Fn.prototype.getGroupToggleHtmlValue = function() {
        var e = this.healthSignatureGroup.CustomGroupId,
            e = document.querySelector("input#ot-group-id-" + e + ", input#ot-bnr-hdr-id-" + e + ", input#ot-bnr-grp-id-" + e);
        return !!e && !0 === e.checked
    };
    var Rn = Fn;

    function Fn() {
        this.MODAL_ID = "healthSignatureDataModal", this.PARENT_SELECTOR = "#onetrust-consent-sdk", this.REJECT_SELECTOR = ".ot-signature-button.reject", this.CONFIRM_SELECTOR = ".ot-signature-button.accept", this.HEALTH_SIGNATURE_INPUT_SELECTOR = "#otHealthSignatureData", this.HEALTH_SIGNATURE_PARAGRAPH_SELECTOR = "p.ot-signature-paragraph"
    }
    qn.prototype.updateDataSubjectTimestamp = function() {
        var e = C.alertBoxCloseDate(),
            e = e && y.getUTCFormattedDate(e);
        P(".ot-userid-timestamp").html(A.PCenterUserIdTimestampTitleText + ": " + e)
    }, qn.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, qn.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1), S.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, qn.prototype.bannerActionsHandler = function(t, n, e) {
        var r = this,
            i = (void 0 === e && (e = !1), So.setLandingPathParam(p.NOT_LANDING_PAGE), I.groupsConsent = [], I.hostsConsent = [], I.genVendorsConsent = {}, {});
        A.Groups.forEach(function(e) {
            if (e.IsAboutGroup) return !1;
            M(e.SubGroups, [e]).forEach(function(e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e), e.Hosts.length && y.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    var t;
                    i[e.HostId] ? To.updateHostStatus(e, o) : (i[e.HostId] = !0, t = To.isHostPartOfAlwaysActiveGroup(e.HostId), I.hostsConsent.push(e.HostId + ":" + (t || o ? "1" : "0")))
                }), I.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    yo.updateGenVendorStatus(e, o)
                })
            })
        }), A.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)), rn.removeAddedOTCssStyles(), un.hideConsentNoticeV2(), lo.writeGrpParam(h.OPTANON_CONSENT), lo.writeHstParam(h.OPTANON_CONSENT), I.genVenOptOutEnabled && lo.writeGenVenCookieParam(h.OPTANON_CONSENT), I.vsIsActiveAndOptOut && lo.writeVSConsentCookieParam(h.OPTANON_CONSENT), fn.substitutePlainTextScriptTags(), gn.updateGtmMacros(), this.executeOptanonWrapper()
    }, qn.prototype.getGroupStatus = function(e, t, o) {
        return e ? o.Status.toLowerCase() !== m.ALWAYS_INACTIVE : !!t && f.isAlwaysActiveGroup(o)
    }, qn.prototype.setGroupConsent = function(e, t) {
        var o; - 1 < vt.indexOf(t.Type) && (o = "", o = b.requireSignatureEnabled && t.needsHealthSignature ? b.healthSignatureData ? "1" : "0" : e && t.HasConsentOptOut ? "1" : "0", I.groupsConsent.push(t.CustomGroupId + ":" + o))
    }, qn.prototype.nextPageCloseBanner = function() {
        So.isLandingPage() || C.isAlertBoxClosedAndValid() || this.closeBanner(A.NextPageAcceptAllCookies)
    }, qn.prototype.rmScrollAndClickBodyEvents = function() {
        A.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), A.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, qn.prototype.onClickCloseBanner = function(e) {
        C.isAlertBoxClosedAndValid() || (_.triggerGoogleAnalyticsEvent(Io, Lo), this.closeBanner(A.OnClickAcceptAllCookies), e.stopPropagation()), V.rmScrollAndClickBodyEvents()
    }, qn.prototype.scrollCloseBanner = function() {
        var e = P(document).height() - P(window).height(),
            e = (0 === e && (e = P(window).height()), 100 * P(window).scrollTop() / e);
        25 < (e = e <= 0 ? 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight) : e) && !C.isAlertBoxClosedAndValid() && (!I.isPCVisible || A.NoBanner) ? (_.triggerGoogleAnalyticsEvent(Io, Lo), V.closeBanner(A.ScrollAcceptAllCookies), V.rmScrollAndClickBodyEvents()) : C.isAlertBoxClosedAndValid() && V.rmScrollAndClickBodyEvents()
    }, qn.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = f.getGroupById(o[n].getAttribute("data-optanongroupid"));
            b.requireSignatureEnabled && r.needsHealthSignature ? this.groupsClass.toggleGrpElements(o[n], r, !!b.healthSignatureData) : (this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0))
        }
        I.showVendorService && O.consentAll(!0), this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), A.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, qn.prototype.rejectAll = function(e, t) {
        for (var o, n, r = (t = void 0 === t ? !1 : t) ? pe[5] : pe[2], i = this.groupsClass.getAllGroupElements(), s = null != (o = null == (o = S) ? void 0 : o.fp) && o.CookieV2RejectAll ? (n = this.initializeObjectToLIRejectAll(t), this.initializeAllowLIRejectAll(t)) : !(n = !0), a = 0; a < i.length; a++) {
            var l = f.getGroupById(i[a].getAttribute("data-optanongroupid"));
            "always active" !== f.getGrpStatus(l).toLowerCase() && (E.toggleGrpElements(i[a], l, !1, s), this.groupsClass.toogleSubGroupElement(i[a], !1, !1, !0), !A.IsIabEnabled || A.IsIabEnabled && n) && this.groupsClass.toogleSubGroupElement(i[a], !1, !0, !0)
        }
        I.showVendorService && O.consentAll(!1), this.bannerActionsHandler(!1, !0, s), r !== I.consentInteractionType && this.consentTransactions(e, !1, t), A.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1, s), s || this.updateVendorLegBtns(!1))
    }, qn.prototype.initializeObjectToLIRejectAll = function(e) {
        return !e && A.BannerShowRejectAllButton && A.BRejectConsentType === Ie.OBJECT_TO_LI || e && A.PCenterShowRejectAllButton && A.BRejectConsentType === Ie.OBJECT_TO_LI
    }, qn.prototype.initializeAllowLIRejectAll = function(e) {
        return A.IsIabEnabled && (!e && A.BannerShowRejectAllButton && A.BRejectConsentType === Ie.LI_ACTIVE_IF_LEGAL_BASIS || e && A.PCenterShowRejectAllButton && A.BRejectConsentType === Ie.LI_ACTIVE_IF_LEGAL_BASIS)
    }, qn.prototype.executeCustomScript = function() {
        A.CustomJs && new Function(A.CustomJs)()
    }, qn.prototype.updateConsentData = function(e) {
        So.setLandingPathParam(p.NOT_LANDING_PAGE), A.IsIabEnabled && !e && this.iab.saveVendorStatus(), lo.writeGrpParam(h.OPTANON_CONSENT), lo.writeHstParam(h.OPTANON_CONSENT), I.showGeneralVendors && A.GenVenOptOut && lo.writeGenVenCookieParam(h.OPTANON_CONSENT), I.vsIsActiveAndOptOut && lo.writeVSConsentCookieParam(h.OPTANON_CONSENT), fn.substitutePlainTextScriptTags(), gn.updateGtmMacros()
    }, qn.prototype.close = function(e, t) {
        var o;
        void 0 === t && (t = ee.Banner), un.hideConsentNoticeV2(), this.updateConsentData(e), A.IsConsentLoggingEnabled ? (e = t === ee.PC ? Ln : t === ee.Banner ? bn : b.apiSource, o = t === ee.PC ? Tn : t === ee.Banner ? kn : Pn, I.bannerCloseSource === $.ContinueWithoutAcceptingButton && (e = En), I.bannerCloseSource === $.BannerSaveSettings && (e = _n), oi.createConsentTxn(!1, o + " - " + e, t === ee.PC)) : C.dispatchConsentEvent(), this.executeOptanonWrapper()
    }, qn.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = I.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e]; - 1 === I.srcExecGrps.indexOf(o) && I.srcExecGrps.push(o)
                }
                I.srcExecGrpsTemp = [];
                for (var n = 0, r = I.htmlExecGrpsTemp; n < r.length; n++) {
                    o = r[n]; - 1 === I.htmlExecGrps.indexOf(o) && I.htmlExecGrps.push(o)
                }
                I.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, qn.prototype.updateVendorLegBtns = function(e) {
        if (b.legIntSettings.PAllowLI && b.legIntSettings.PShowLegIntBtn)
            for (var t = P(k.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, qn.prototype.showFltgCkStgButton = function() {
        var e = P("#ot-sdk-btn-floating"),
            e = (e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), A.cookiePersistentLogo.includes("ot_guard_logo.svg") && P(V.fltgFrontBtnSvg).attr(ht, ""), P(V.fltgBackBtnSvg).attr(ht, "true"), document.querySelector(V.fltgBtnBackBtn)),
            t = document.querySelector(V.fltgBtnFrontBtn);
        t && (t.setAttribute(ht, "false"), t.style.display = "block"), e && (e.setAttribute(ht, "true"), e.style.display = "none")
    }, qn.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1), oi && !e && A.IsConsentLoggingEnabled ? oi.createConsentTxn(!1, (o ? Tn : kn) + " - " + (t ? An : In), o) : C.dispatchConsentEvent()
    }, qn.prototype.hideVendorsList = function() {
        un.checkIfPcSdkContainerExist() || (A.PCTemplateUpgrade ? P("#onetrust-pc-sdk " + k.P_Content).removeClass("ot-hide") : P("#onetrust-pc-sdk .ot-main-content").show(), P("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), P("#onetrust-pc-sdk " + k.P_Vendor_List).addClass("ot-hide"))
    }, qn.prototype.resetConsent = function() {
        var e = this;
        I.groupsConsent = JSON.parse(JSON.stringify(I.initialGroupsConsent)), I.hostsConsent = JSON.parse(JSON.stringify(I.initialHostConsent)), I.showGeneralVendors && (I.genVendorsConsent = JSON.parse(JSON.stringify(I.initialGenVendorsConsent))), I.vsIsActiveAndOptOut && (I.vsConsent = new Map(I.initialVendorsServiceConsent)), A.IsIabEnabled && (I.oneTrustIABConsent = JSON.parse(JSON.stringify(I.initialOneTrustIABConsent)), I.vendors = JSON.parse(JSON.stringify(I.initialVendors)), I.vendors.vendorTemplate = I.initialVendors.vendorTemplate), A.UseGoogleVendors && (I.addtlVendors = JSON.parse(JSON.stringify(I.initialAddtlVendors)), I.addtlVendorsList = JSON.parse(JSON.stringify(I.initialAddtlVendorsList))), setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }, qn.prototype.setLblTxtForTgl = function(e, t) {
        e = e.querySelector(".ot-label-status");
        A.PCShowConsentLabels && e && (e.innerHTML = t ? A.PCActiveText : A.PCInactiveText)
    }, qn.prototype.resetConsentUI = function() {
        var p = this;
        E.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid"),
                o = f.getGroupById(t),
                t = V.isGroupActive(o, t),
                n = T.GroupTypes;
            if (b.pcName === rt && A.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid"))), p.setLblTxtForTgl(e, t), o.Type === gt || o.Type === n.Stack)
                for (var n = y.isBundleOrStackActive(o, I.initialGroupsConsent), r = e.querySelector('input[class*="category-switch-handler"]'), i = (v.setCheckedAttribute(null, r, n), e.querySelectorAll("li" + k.P_Subgrp_li)), s = 0; s < i.length; s++) {
                    var a = f.getGroupById(i[s].getAttribute("data-optanongroupid")),
                        l = a.OptanonGroupId,
                        l = V.isGroupActive(a, l),
                        c = i[s].querySelector('input[class*="cookie-subgroup-handler"]'),
                        d = i[s].querySelector(".ot-label-status"),
                        u = e.querySelector(".ot-label-status");
                    A.PCShowConsentLabels && d && (u.innerHTML = l ? A.PCActiveText : A.PCInactiveText), v.setCheckedAttribute(null, c, l), V.resetLegIntButton(a, i[s])
                } else {
                    r = e.querySelector('input[class*="category-switch-handler"]');
                    v.setCheckedAttribute(null, r, t), V.resetLegIntButton(o, e)
                }
        }), A.IsIabEnabled && Bn.toggleVendorConsent(), this.resetGenVenUI(), this.resetGoogleVenUI(), I.vsIsActiveAndOptOut && O.resetVendorUIState(I.vsConsent)
    }, qn.prototype.resetGenVenUI = function() {
        var e = P("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (I.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t],
                    r = n.getAttribute("gn-vid"),
                    i = Boolean(I.genVendorsConsent[r]);
                v.setCheckedAttribute("", n, i), yo.updateGenVendorStatus(r, i)
            }
            N.genVenSelectAllTglEvent()
        }
    }, qn.prototype.resetGoogleVenUI = function() {
        var e = P("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (A.UseGoogleVendors && e && e.length)
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t],
                    r = n.getAttribute("addtl-vid");
                I.addtlVendorsList[r] && (r = Boolean(I.addtlVendors.vendorSelected[r]), v.setCheckedAttribute("", n, r))
            }
    }, qn.prototype.isGroupActive = function(e, t) {
        var o;
        return e.IabGrpId ? (o = void 0, o = e.Type === T.GroupTypes.Spl_Ft ? I.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? I.initialVendors.selectedLegInt : I.initialVendors.selectedPurpose, -1 !== wt.inArray(e.IabGrpId + ":true", o)) : -1 !== wt.inArray(t + ":1", I.initialGroupsConsent)
    }, qn.prototype.resetLegIntButton = function(e, t) {
        var o;
        b.legIntSettings.PAllowLI && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && b.legIntSettings.PShowLegIntBtn && (o = !0, -1 < I.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1), E.updateLegIntBtnElement(t, o))
    }, qn.prototype.handleTogglesOnSingularConsentUpdate = function(e, t) {
        if (this.closeOptanonAlertBox(), e === lt)
            for (var s = this, o = 0, n = t; o < n.length; o++) {
                var r = n[o];
                ! function(e, t) {
                    for (var o = f.getGroupById(e), n = s.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
                        var i = f.getGroupById(n[r].getAttribute("data-optanongroupid"));
                        if (i.OptanonGroupId === o.OptanonGroupId && !i.Parent) {
                            w.toggleV2Category(null, i, t, i.CustomGroupId);
                            break
                        }
                        i = i.SubGroups.find(function(e) {
                            return e.OptanonGroupId === o.OptanonGroupId
                        });
                        i && w.toggleSubCategory(null, i.CustomGroupId, t, i.CustomGroupId)
                    }
                }(c = r.id, d = r.isEnabled)
            } else if (e === ut)
                for (var i = 0, a = t; i < a.length; i++) {
                    var l = a[i],
                        c = l.id,
                        d = l.isEnabled,
                        l = f.getGrpByVendorId(c);
                    l && O.toggleVendorService(l.CustomGroupId, c, d)
                }
        this.close(!1, ee.API)
    };
    var V, Mn = qn;

    function qn() {
        var n = this;
        this.iab = N, this.groupsClass = E, this.fltgBackBtnSvg = ".ot-floating-button__back svg", this.fltgFrontBtnSvg = ".ot-floating-button__front svg", this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.closeOptanonAlertBox = function() {
            var e;
            y.hideBanner(), P(document).off("keydown", w.closePCWhenEscPressed), A.NtfyConfig.ShowNtfy && vn.hideSyncNtfy(), _.setAlertBoxClosed(!0), A.PCTemplateUpgrade && A.PCenterUserIdTitleText && A.IsConsentLoggingEnabled && n.updateDataSubjectTimestamp(), C.isAlertBoxClosedAndValid() && (e = P(".onetrust-pc-dark-filter").el[0]) && "none" !== getComputedStyle(e).getPropertyValue("display") && P(".onetrust-pc-dark-filter").fadeOut(400), G.csBtnGroup && n.showFltgCkStgButton()
        }, this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || V.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function(o) {
            return void 0 === o && (o = !1), u(n, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (V.closeOptanonAlertBox(), S.moduleInitializer.MobileSDK) ? (window.OneTrust.Close(), [3, 5]) : [3, 1];
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Rn.getInstance().checkIfHealthSignatureNeeded()];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return t = e.sent(), console.error(t), [3, 4];
                        case 4:
                            t = I.bannerCloseSource === $.ConfirmChoiceButton ? ee.PC : ee.Banner, V.close(o, t), e.label = 5;
                        case 5:
                            return [2, !1]
                    }
                })
            })
        }, this.allowAllEventHandler = function(o) {
            return void 0 === o && (o = !1), u(n, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            P(document).off("keydown", w.shiftBannerFocus), t = o ? "Preferences Allow All" : "Banner Accept Cookies", _.triggerGoogleAnalyticsEvent(Io, t), o && b.requireSignatureEnabled && (un.hideConsentNoticeV2(), this.closeOptanonAlertBox()), e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Rn.getInstance().checkIfHealthSignatureNeeded(!0)];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return t = e.sent(), console.error(t), [3, 4];
                        case 4:
                            return this.allowAllEvent(!1, o), this.hideVendorsList(), [2]
                    }
                })
            })
        }, this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), n.closeOptanonAlertBox(), V.allowAll(e, t)
        }, this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1), P(document).off("keydown", w.shiftBannerFocus), _.triggerGoogleAnalyticsEvent(Io, e ? "Preferences Reject All" : "Banner Reject All"), Rn.getInstance().resetHealthSignatureData(!0), S.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (n.rejectAllEvent(!1, e), n.hideVendorsList())
        }, this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), n.closeOptanonAlertBox(), !C.isIABCrossConsentEnabled() || b.thirdPartyiFrameLoaded ? n.rejectAll(e, t) : b.thirdPartyiFramePromise.then(function() {
                n.rejectAll(e, t)
            })
        }
    }
    zn.prototype.setFilterList = function(o) {
        var n = this,
            r = P("#onetrust-pc-sdk " + k.P_Fltr_Modal + " " + k.P_Fltr_Option).el[0].cloneNode(!0);
        P("#onetrust-pc-sdk " + k.P_Fltr_Modal + " " + k.P_Fltr_Options).html(""), (S.isV2Template || A.PCLayout.Popup) && P("#onetrust-pc-sdk #filter-cancel-handler").html(A.PCenterCancelFiltersText || "Cancel"), !S.isV2Template && A.PCLayout.Popup || (P("#onetrust-pc-sdk " + k.P_Clr_Fltr_Txt).html(A.PCenterClearFiltersText), P("#filter-btn-handler").el[0].setAttribute("aria-label", A.PCenterFilterText)), P("#onetrust-pc-sdk #filter-apply-handler").html(A.PCenterApplyFiltersText), o ? b.consentableGrps.forEach(function(e) {
            var t = I.cookieListType === Ce.GenVen || I.cookieListType === Ce.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length;
            t && n.filterGroupOptionSetter(r, e, o)
        }) : b.iabGrps.forEach(function(e) {
            n.filterGroupOptionSetter(r, e, o)
        })
    }, zn.prototype.setFilterListByGroup = function(e, t) {
        var o, n = this;
        !e || e.length <= 0 ? P("#onetrust-pc-sdk " + k.P_Fltr_Modal + " " + k.P_Fltr_Options).html("") : (o = P("#onetrust-pc-sdk " + k.P_Fltr_Modal + " " + k.P_Fltr_Option).el[0].cloneNode(!0), P("#onetrust-pc-sdk " + k.P_Fltr_Modal + " " + k.P_Fltr_Options).html(""), (S.isV2Template || A.PCLayout.Popup) && P("#onetrust-pc-sdk #filter-cancel-handler").html(A.PCenterCancelFiltersText || "Cancel"), !S.isV2Template && A.PCLayout.Popup || (P("#onetrust-pc-sdk " + k.P_Clr_Fltr_Txt).html(A.PCenterClearFiltersText), P("#filter-btn-handler").el[0].setAttribute("aria-label", A.PCenterFilterText)), P("#onetrust-pc-sdk #filter-apply-handler").html(A.PCenterApplyFiltersText), e.forEach(function(e) {
            n.filterGroupOptionSetter(o, e, t)
        }))
    }, zn.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId,
            r = n + "-filter",
            e = e.cloneNode(!0);
        P(k.P_Fltr_Modal + " " + k.P_Fltr_Options).append(e), P(e.querySelector("input")).attr("id", r), P(e.querySelector("label")).attr("for", r), (S.isV2Template ? P(e.querySelector(k.P_Label_Txt)) : P(e.querySelector("label span"))).html(t.GroupName), P(e.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    };
    var Un, jn = zn;

    function zn() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    Yn.prototype.showParagraph = function(e) {
        var t = R({}, e),
            o = t.listTitle,
            n = t.htmlFragment,
            t = t.paragrphContainerSelector;
        Kn.options = e, Kn.hideOtherHtmlElements(e), Kn.setParagraphTitle(o), Kn.addItemListToRootElement(n, t)
    }, Yn.prototype.hideParagraphUI = function() {
        var e = R({}, Kn.options),
            t = e.showFooter;
        e.showSearchBox || (null != (e = Kn.checkboxesContainerEle) && e.classList.remove("ot-hide"), null != (e = Kn.searchInputContainerEle) && e.classList.remove("ot-hide"), null != (e = Kn.listHotsVendorsContainerEle) && e.classList.remove("ot-hide")), t || null != (e = Kn.footerButtonContainerEle) && e.classList.remove("ot-hide"), Kn.rootEle.removeChild(Kn.paragraphContainerEle)
    }, Yn.prototype.addItemListToRootElement = function(e, t) {
        var o = document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_List);
        Kn.rootEle = o.querySelector(this.MAIN_CONT_ELE), Kn.rootEle.appendChild(e), Kn.paragraphContainerEle = Kn.rootEle.querySelector(t)
    }, Yn.prototype.setParagraphTitle = function(e) {
        document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Title).innerHTML = e
    }, Yn.prototype.hideOtherHtmlElements = function(e) {
        var e = R({}, e),
            t = e.showFooter,
            e = e.showSearchBox,
            o = document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_List),
            o = (!e && o && (Kn.checkboxesContainerEle = o.querySelector(this.SEL_BLK_ELE), Kn.searchInputContainerEle = o.querySelector(this.LST_SUBHDR_ELE), Kn.listHotsVendorsContainerEle = o.querySelector(this.SDK_ROW_ELE), null != (e = Kn.checkboxesContainerEle) && e.classList.add("ot-hide"), null != (o = Kn.searchInputContainerEle) && o.classList.add("ot-hide"), null != (e = Kn.listHotsVendorsContainerEle)) && e.classList.add("ot-hide"), document.querySelector("#onetrust-pc-sdk .ot-pc-footer .ot-btn-container"));
        !t && o && (Kn.footerButtonContainerEle = o, null != (e = Kn.footerButtonContainerEle)) && e.classList.add("ot-hide")
    };
    var Kn, Wn = Yn;

    function Yn() {
        this.SDK_ROW_ELE = ".ot-sdk-row", this.SEL_BLK_ELE = "#ot-sel-blk", this.MAIN_CONT_ELE = "#ot-lst-cnt", this.LST_SUBHDR_ELE = ".ot-lst-subhdr"
    }
    Qn.prototype.showIllustrations = function(e, t) {
        e = Jn.insertParagraphContainer(e, t), t = {
            showFooter: !1,
            showSearchBox: !1,
            listTitle: A.PCIllusText,
            htmlFragment: e,
            paragrphContainerSelector: "." + this.PARAGRAPH_CONTAINER_ELE
        };
        Kn.showParagraph(t)
    }, Qn.prototype.hideUI = function() {
        Kn.hideParagraphUI()
    }, Qn.prototype.addIllustrationsLink = function(e, t, o, n) {
        void 0 === n && (n = !1);
        var r = t.IabIllustrations && 0 < t.IabIllustrations.length;
        o && r && A.PCGrpDescType === ne.UserFriendly && (o = A.PCVendorFullLegalText + "&nbsp;", (r = document.createElement("button")).classList.add("ot-link-btn"), r.classList.add("ot-pgph-link"), r.setAttribute("aria-label", A.PCVendorFullLegalText), r.setAttribute("data-parent-id", t.CustomGroupId), n ? (r.classList.add("ot-pgph-link-subgroup"), e.appendChild(r)) : (o = "&nbsp;|&nbsp" + o, e.insertAdjacentElement("afterend", r)), r.innerHTML = o)
    }, Qn.prototype.insertParagraphContainer = function(e, t) {
        var o = document.createDocumentFragment(),
            n = document.createElement("div"),
            e = (n.classList.add(this.PARAGRAPH_CONTAINER_ELE), Jn.insertPurposeTitle(e)),
            r = (n.appendChild(e), document.createElement("div"));
        return r.classList.add("ot-paragraph-lst"), t.forEach(function(e, t) {
            e = Jn.insertDescriptionElement(e, t);
            r.appendChild(e)
        }), n.appendChild(r), o.appendChild(n), o
    }, Qn.prototype.insertPurposeTitle = function(e) {
        var t = document.createElement("h4"),
            e = (t.classList.add("ot-pgph-title"), document.createTextNode(e));
        return t.appendChild(e), t
    }, Qn.prototype.insertDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        return o.setAttribute("id", "ot-pgph-desc-id-" + t), o.classList.add("ot-pgph-desc"), o.innerText = e, o
    };
    var Jn, Xn = Qn;

    function Qn() {
        this.PARAGRAPH_CONTAINER_ELE = "ot-pgph-contr"
    }
    n.prototype.insertPcHtml = function() {
        B.jsonAddAboutCookies(A);
        var t = document.createDocumentFragment(),
            e = (G.preferenceCenterGroup && (o = document.createElement("div"), P(o).html(G.preferenceCenterGroup.html), o = o.querySelector("#onetrust-pc-sdk"), B.addClassesPerConfig(o), P(t).append(o), B.manageCloseButtons(o, o = function(e) {
                return t.querySelectorAll(e)
            }, n = function(e) {
                return t.querySelector(e)
            }), A.Language && A.Language.Culture && P(n("#onetrust-pc-sdk")).attr("lang", A.Language.Culture), B.addLogos(n, o), P(n(k.P_Title)).html(A.MainText), A.PCCloseButtonType === ke.Link && A.PCTemplateUpgrade && b.pcName === rt && P(n(k.P_Title)).addClass("ot-pc-title-shrink"), A.PCTemplateUpgrade && P(n(ln + ' > div[role="dialog"]')).css("height: 100%;"), P(n(ln + ' > div[role="dialog"]')).attr(this._ariaLabel, A.MainText), A.PCRegionAriaLabel && (P(n("#onetrust-pc-sdk")).attr(this._ariaLabel, A.PCRegionAriaLabel), P(n("#onetrust-pc-sdk")).attr("role", "region")), b.pcName === rt && (P(n(k.P_Privacy_Txt)).html(A.AboutCookiesText), P(n(k.P_Privacy_Hdr)).html(A.AboutCookiesText)), e = '<span class="ot-tcf2-vendor-count ot-text-bold tcf2-vcount">' + b.tcf2ActiveVendors.all.toString() + "</span>", e = y.replaceTextFromString("[VENDOR_NUMBER]", A.MainInfoText, e), P(n(k.P_Policy_Txt)).html(e), B.configureLinkFields(n), B.configureSubjectDataFields(n), B.configureButtons(n, o), B.setManagePreferenceText(n), B.initializePreferenceCenterGroups(n, t), B.removeListsWhenAppropriate(n), A.PCTemplateUpgrade) && B.setOptOutSignalNotification(n), document.createElement("iframe")),
            o = (e.setAttribute("class", "ot-text-resize"), e.setAttribute("sandbox", "allow-same-origin"), e.setAttribute("title", "onetrust-text-resize"), d(e, "position: absolute; top: -50000px; width: 100em;"), e.setAttribute(this._ariaHidden, "true"), P(t.querySelector("#onetrust-pc-sdk")).append(e), document.getElementById("onetrust-consent-sdk")),
            n = (P(o).append(t), b.ignoreInjectingHtmlCss || P(document.body).append(o), (A.showCookieList || I.showGeneralVendors) && fn.InitializeHostList(), k.P_Vendor_List + " " + k.P_Host_Cntr + " li"),
            e = P(n).el[0];
        e && v.removeChild(e)
    }, n.prototype.addClassesPerConfig = function(e) {
        /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || P(e).addClass("ot-sdk-not-webkit"), A.useRTL && P(e).attr("dir", "rtl"), b.legIntSettings.PAllowLI && b.isIab2orv2Template && (P(e).addClass("ot-leg-opt-out"), b.legIntSettings.PShowLegIntBtn) && P(e).addClass("ot-leg-btn"), A.BannerRelativeFontSizesToggle && P(e).addClass("otRelFont"), A.PCShowConsentLabels && P(e).addClass("ot-tgl-with-label"), (A.UseGoogleVendors || I.showGeneralVendors) && P(e).addClass("ot-addtl-vendors"), "right" === A.PreferenceCenterPosition && P(e).addClass(A.useRTL ? "right-rtl" : "right")
    }, n.prototype.manageCloseButtons = function(e, t, o) {
        var n = P(t(k.P_Close_Btn)).el;
        if (A.ShowPreferenceCenterCloseButton) {
            A.CloseText || (A.CloseText = "Close Preference Center");
            for (var r = 0, i = n; r < i.length; r++) {
                var s = i[r];
                A.PCCloseButtonType === ke.Link && A.PCTemplateUpgrade ? (P(s).html(A.PCContinueText), P(e).addClass("ot-close-btn-link"), P(s).el.removeAttribute(this._ariaLabel)) : (P(s).el.setAttribute(this._ariaLabel, A.CloseText), y.setCloseIcon(o("#onetrust-pc-sdk .ot-close-icon")))
            }
        } else
            for (var a = 0; a < n.length; a++) P(n[a].parentElement).el.removeChild(n[a])
    }, n.prototype.addLogos = function(e, t) {
        var o, n, e = e(k.P_Logo);
        e && A.optanonLogo && (o = y.updateCorrectUrl(A.optanonLogo), y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = v.getRelativeURL(o, !0, !0)), (n = document.createElement("img")).setAttribute("alt", A.PCLogoAria), n.setAttribute("src", o), e.append(n), A.PCLogoAria) && P(e).attr(this._ariaLabel, A.PCLogoAria), y.insertFooterLogo(t(".ot-pc-footer-logo a"))
    }, n.prototype.configureLinkFields = function(e) {
        var t;
        A.AboutText && P(e(k.P_Policy_Txt)).html(P(e(k.P_Policy_Txt)).html() + '\n            <br/><a href="' + A.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + A.PCCookiePolicyLinkScreenReader + '">' + A.AboutText + "</a>"), A.PCenterImprintLinkText && (A.AboutText || e(k.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>"), (t = document.createElement("a")).classList.add("ot-link-btn", "ot-imprint-handler"), t.textContent = A.PCenterImprintLinkText, t.setAttribute(this._ariaLabel, A.PCenterImprintLinkScreenReader), t.setAttribute("href", A.PCenterImprintLinkUrl), t.setAttribute("rel", "noopener"), t.setAttribute("target", "_blank"), e(k.P_Policy_Txt).appendChild(t)), A.PCenterVendorListLinkText && (t = !A.IsIabEnabled && I.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler", e(k.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + t + '" aria-label="' + A.PCenterVendorListLinkAriaLabel + '">\n            ' + A.PCenterVendorListLinkText + "\n            </button>"))
    }, n.prototype.configureSubjectDataFields = function(e) {
        var t;
        A.PCTemplateUpgrade && A.PCenterUserIdTitleText && A.IsConsentLoggingEnabled && (t = g.readCookieParam(h.OPTANON_CONSENT, p.CONSENT_ID), e(k.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + A.PCenterUserIdTitleText + ": </span> " + t + "</div>"), A.PCenterUserIdDescriptionText && e(k.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + A.PCenterUserIdDescriptionText + "</div>"), A.PCenterUserIdTimestampTitleText) && (t = (t = g.getCookie(h.ALERT_BOX_CLOSED)) && y.getUTCFormattedDate(t) || A.PCenterUserIdNotYetConsentedText, e(k.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + A.PCenterUserIdTimestampTitleText + ": </span> " + t + "</div>"))
    }, n.prototype.setManagePreferenceText = function(e) {
        var e = e(k.P_Manage_Cookies_Txt),
            t = P(e);
        e && (t.html(A.ManagePreferenceText), A.ManagePreferenceText || t.attr(this._ariaHidden, !0))
    }, n.prototype.configureButtons = function(e, t) {
        A.ConfirmText.trim() ? P(e("#accept-recommended-btn-handler")).html(A.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
        for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++) P(o[n]).html(A.AllowAllText);
        var r = t(".ot-pc-refuse-all-handler");
        if (A.PCenterShowRejectAllButton && A.PCenterRejectAllButtonText.trim())
            for (n = 0; n < r.length; n++) P(r[n]).html(A.PCenterRejectAllButtonText);
        else v.removeChild(r)
    }, n.prototype.removeListsWhenAppropriate = function(e) {
        var t;
        A.IsIabEnabled || (t = e(k.P_Vendor_Container)) && t.parentElement.removeChild(t), A.showCookieList || I.showGeneralVendors || (t = e(k.P_Host_Cntr)) && t.parentElement.removeChild(t)
    }, n.prototype.setParentGroupName = function(e, t, o, n) {
        var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        P(r).html(t), P(r).attr("id", o), b.pcName === rt && (e.querySelector(k.P_Category_Header).innerHTML = t, e.querySelector("" + k.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }, n.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0,
            r = (-1 < I.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1), C.generateLegIntButtonElements(r, t.OptanonGroupId)),
            t = (o ? n.insertAdjacentHTML("afterend", r) : e.insertAdjacentHTML("beforeend", r), e.querySelector(".ot-remove-objection-handler"));
        t && d(t, t.getAttribute("data-style"))
    }, n.prototype.setParentGroupDescription = function(e, t, o, n, r) {
        var i = E.safeFormattedGroupDescription(t),
            s = e.querySelector("p:not(.ot-always-active)"),
            a = e.querySelector(k.P_Acc_Grp_Desc),
            s = s || a;
        return -1 < Pt.indexOf(t.Type) && o.PCGrpDescType === ne.Legal ? i = t.DescriptionLegal : s.classList.add("ot-category-desc"), b.legIntSettings.PAllowLI && !b.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? s.parentElement.classList.add("ot-leg-border-color") : v.removeChild(e.querySelector(k.P_Li_Hdr))), b.pcName !== rt && s.setAttribute("id", n), P(s).html(i), t.Type === T.GroupTypes.Stack && v.removeChild(s), s
    }, n.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        L.toggleEl = P(e(".ot-tgl")).el.cloneNode(!0), L.arrowEl = P(e('#onetrust-pc-sdk [role="dialog"] > ' + k.P_Arrw_Cntr)).el.cloneNode(!0), L.subGrpEl = P(e(k.P_Sub_Grp_Cntr)).el.cloneNode(!0), L.vListEl = P(e(k.P_Ven_Lst_Cntr)).el.cloneNode(!0), L.cListEl = P(e(k.P_Host_Lst_cntr)).el.cloneNode(!0), L.chkboxEl = P(e(k.P_CBx_Cntr)).el.cloneNode(!0), L.accordionEl = P(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(b.pcName) && (L.plusMinusEl = P(e(".ot-plus-minus")).el.cloneNode(!0)), v.removeChild(e(".ot-tgl")), v.removeChild(e('#onetrust-pc-sdk [role="dialog"] > ' + k.P_Arrw_Cntr)), v.removeChild(e(k.P_Sub_Grp_Cntr)), v.removeChild(e(k.P_Ven_Lst_Cntr)), v.removeChild(e(k.P_Host_Lst_cntr)), v.removeChild(e(k.P_CBx_Cntr)), v.removeChild(e(".ot-acc-cntr")), t.test(b.pcName) && v.removeChild(e(".ot-plus-minus"))
    }, n.prototype.insertSelectAllEls = function(e) {
        var e = e(k.P_Select_Cntr + " .ot-sel-all-chkbox"),
            t = I.showVendorService ? Nn() : L.chkboxEl.cloneNode(!0),
            t = (t.id = k.P_Sel_All_Host_El, t.querySelector("input").id = "select-all-hosts-groups-handler", t.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), P(e).append(t), I.showVendorService ? Nn() : L.chkboxEl.cloneNode(!0)),
            t = (t.id = k.P_Sel_All_Vendor_Consent_El, t.querySelector("input").id = "select-all-vendor-groups-handler", t.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), P(e).append(t), I.showVendorService ? Nn() : L.chkboxEl.cloneNode(!0));
        t.id = k.P_Sel_All_Vendor_Leg_El, t.querySelector("input").id = "select-all-vendor-leg-handler", t.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), P(e).append(t)
    }, n.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o, n = b.pcName,
            r = (S.isV2Template && (B.cloneOtHtmlEls(e), (r = L.chkboxEl.cloneNode(!0)).querySelector("input").classList.add("category-filter-handler"), P(e(k.P_Fltr_Modal + " " + k.P_Fltr_Option)).append(r), B.insertSelectAllEls(e)), P(e("#onetrust-pc-sdk " + k.P_Category_Grp))),
            i = (n === et || n === ot || n === tt ? A.PCenterEnableAccordion ? v.removeChild(r.el.querySelector(k.P_Category_Item + ":not(.ot-accordion-layout)")) : v.removeChild(r.el.querySelector(k.P_Category_Item + ".ot-accordion-layout")) : n === rt && (A.PCenterEnableAccordion = !1), e("#onetrust-pc-sdk " + k.P_Category_Item)),
            s = S.isV2Template ? L.subGrpEl.cloneNode(!0) : P(e(k.P_Sub_Grp_Cntr)),
            a = S.isV2Template ? null : P(e(k.P_Acc_Container + " " + k.P_Sub_Grp_Cntr));
        A.PCTemplateUpgrade && /otPcTab/.test(n) && (o = e(".ot-abt-tab").cloneNode(!0), v.removeChild(e(".ot-abt-tab"))), r.el.removeChild(i), B.setVendorListClass(e, i), B.setPCHeader(e, i), B.createHtmlForEachGroup({
            fm: e,
            fragment: t,
            categoryGroupTemplate: i,
            cookiePreferencesContainer: r,
            popupSubGrpContainer: a,
            subGrpContainer: s
        }), B.setPcTabLayout(e, t, o)
    }, n.prototype.getActiveVendorCount = function(e) {
        var t = parseInt(e.IabGrpId),
            o = 0;
        return e.Type === T.GroupTypes.Pur ? o = b.tcf2ActiveVendors.pur.get(t) : e.Type === T.GroupTypes.Ft ? o = b.tcf2ActiveVendors.ft.get(t) : e.Type === T.GroupTypes.Spl_Pur ? o = b.tcf2ActiveVendors.spl_pur.get(t) : e.Type === T.GroupTypes.Spl_Ft && (o = b.tcf2ActiveVendors.spl_ft.get(t)), o || 0
    }, n.prototype.getActiveVendorCountForStack = function(e) {
        return b.tcf2ActiveVendors.stack.get(e) || 0
    }, n.prototype.getVendorCountEl = function(e, t) {
        var o = "[VENDOR_NUMBER]",
            n = "";
        switch (t) {
            case ft:
                n = A.PCVendorsCountFeatureText;
                break;
            case mt:
                n = A.PCVendorsCountSpcFeatureText;
                break;
            case yt:
                n = A.PCVendorsCountSpcPurposeText;
                break;
            default:
                n = A.PCVendorsCountText
        }
        return n && -1 < n.indexOf(o) ? '<span class="ot-pur-vdr-count"> ' + n.replace(o, e.toString()) + " </span>" : ""
    }, n.prototype.createHtmlForEachGroup = function(e) {
        var t = e.fm,
            o = e.fragment,
            n = e.categoryGroupTemplate,
            r = e.cookiePreferencesContainer,
            i = e.popupSubGrpContainer,
            s = e.subGrpContainer,
            e = A.Groups.filter(function(e) {
                return e.Order
            }),
            a = 0 === r.el.children.length;
        A.PCTemplateUpgrade && (I.showVendorService ? O.setHtmlTemplate(t('#onetrust-pc-sdk div[role="dialog"]')) : O.removeVSUITemplate(t('#onetrust-pc-sdk div[role="dialog"]')));
        for (var l = 0, c = e; l < c.length; l++) {
            var d = c[l],
                u = d.GroupName,
                p = d.CustomGroupId,
                u = B.appendVendorCountElement(d, u),
                h = n.cloneNode(!0),
                h = P(h).el,
                g = "ot-group-id-" + p,
                C = "ot-header-id-" + p,
                y = "ot-desc-id-" + p,
                f = "",
                p = (d.Status === m.ALWAYS_ACTIVE && (f = " ot-status-id-" + p), h.setAttribute("data-optanongroupid", p), h.querySelector("input,button")),
                p = (p && (p.setAttribute("aria-controls", y), p.setAttribute("aria-labelledby", C + f)), B.setParentGroupName(h, u, C, y), B.setPopupData(d, h), B.setParentGroupDescription(h, d, A, y, g)),
                f = (S.isV2Template ? B.setToggle(h, p, d, g, C) : B.setToggleProps(h, p, d, g, C), !!t("#onetrust-pc-sdk " + k.P_Category_Grp).querySelector(k.P_Category_Item)),
                u = (u = r.el.querySelectorAll(k.P_Category_Item + ":not(.ot-vnd-item)"))[u.length - 1],
                y = (a ? r.append(h) : f ? wt.insertAfter(h, u) : wt.insertAfter(h, r.el.querySelector(k.P_Li_Hdr) || r.el.querySelector("h3")), B.setSubGroupData(d, h, i, s), A.PCGrpDescLinkPosition === re.Top),
                g = (d.Type === T.GroupTypes.Stack && y && (p = h.querySelector(k.P_Sub_Grp_Cntr)), y ? p : null);
            B.setVendorListBtn(h, t, o, d, g, A), B.setHostListBtn(h, t, o, d), B.setVendorServiceData(d, h), B.appendHealthSignatureFormToGroup(d, h), I.dataGroupState.push(d)
        }
    }, n.prototype.appendHealthSignatureFormToGroup = function(e, t) {
        var o;
        b.requireSignatureEnabled && e.needsHealthSignature && (o = k.P_Acc_Container, A.PCLayout.Tab && (o = "#ot-desc-id-" + e.CustomGroupId), t = t.querySelector(o), Rn.getInstance().getHealthSignatureComponent(t, e))
    }, n.prototype.appendVendorCountElement = function(e, t) {
        var o, n, r = -1 < e.SubGroups.findIndex(function(e) {
            return e.IsIabPurpose
        });
        return b.isTcfV2Template && (e.IsIabPurpose || r) && (n = void 0, n = e.Type !== T.GroupTypes.Stack && e.Type !== T.GroupTypes.Bundle && e.Type !== T.GroupTypes.Cookie ? this.getActiveVendorCount(e) : (o = "", o = !e.IsIabPurpose && r ? e.CustomGroupId : e.IabGrpId, this.getActiveVendorCountForStack(o)), t += this.getVendorCountEl(n, e.Type)), t
    }, n.prototype.setPopupData = function(e, t) {
        b.pcName === nt && (e.ShowVendorList && b.isIab2orv2Template ? (v.removeChild(t.querySelector("p:not(.ot-always-active)")), v.removeChild(t.querySelector(k.P_Acc_Txt + ":not(" + k.P_Acc_Container + ")")), e.SubGroups.length || S.isV2Template || v.removeChild(t.querySelector(k.P_Sub_Grp_Cntr))) : v.removeChild(t.querySelector(k.P_Acc_Container)))
    }, n.prototype.setVendorServiceData = function(e, t) {
        var o, n = b.pcName;
        I.showVendorService && A.VendorServiceConfig.PCVSCategoryView && (o = k.P_Acc_Txt, n === rt && (o = k.P_Desc_Container), n = t.querySelector(o), A.PCAccordionStyle === le.NoAccordion && (n = t), O.insertVendorServiceHtml(e, n))
    }, n.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
    }, n.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
        var s, a, l = b.pcName;
        n.ShowVendorList ? (s = a = void 0, S.isV2Template ? a = (s = L.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : s = (a = e.querySelector(".category-vendors-list-handler")).parentElement, a.innerHTML = i.VendorListText + "&#x200E;", a.setAttribute(this._ariaLabel, A.PCOpensVendorDetailsAlert), a.setAttribute("data-parent-id", n.CustomGroupId), B.setIABLegalLink(a, n, i), S.isV2Template && (a = e, l === rt ? a = e.querySelector("" + k.P_Desc_Container) : i.PCenterEnableAccordion && (a = e.querySelector(k.P_Acc_Txt)), a.insertAdjacentElement("beforeend", s)), r && r.insertAdjacentElement("beforebegin", s)) : S.isV2Template || (l !== ot && l !== et || i.PCenterEnableAccordion ? (l === nt || l === ot || l === et && i.PCenterEnableAccordion) && (n = t("#vendor-list-container"), a = e.querySelector(k.P_Acc_Txt), n && o.querySelector("" + k.P_Content).removeChild(n), S.isV2Template || P(a).el.removeChild(a.querySelector(k.P_Ven_Lst_Cntr))) : v.removeChild(e.querySelector(k.P_Ven_Lst_Cntr)), l !== rt && l !== tt) || (r = e.querySelector(k.P_Ven_Lst_Cntr)) && r.parentElement.removeChild(r)
    }, n.prototype.setIABLegalLink = function(e, t, o) {
        b.isTcfV2Template ? Jn.addIllustrationsLink(e, t, t.ShowVendorList) : o.PCGrpDescType === ne.UserFriendly && (e.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), e.insertAdjacentHTML("afterend", "<a href='" + A.IabLegalTextUrl + "?lang=" + I.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + o.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span></a>"))
    }, n.prototype.setHostListBtn = function(e, t, o, n) {
        var r, i = b.pcName,
            s = !1,
            a = (A.showCookieList && (s = -1 < v.findIndex(M(n.SubGroups, [n]), function(e) {
                return -1 === St.indexOf(e.Type) && e.FirstPartyCookies.length
            })), I.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length);
        !I.showVendorService && (A.showCookieList || I.showGeneralVendors) && (n.ShowHostList || s || a) ? (s = void 0, S.isV2Template ? (s = (a = L.cListEl.cloneNode(!0)).querySelector(".category-host-list-handler"), r = e, i === rt ? r = e.querySelector("" + k.P_Desc_Container) : A.PCenterEnableAccordion && (r = e.querySelector(k.P_Acc_Txt)), r.insertAdjacentElement("beforeend", a)) : s = e.querySelector(".category-host-list-handler"), B.setcListHandler(s, n)) : B.setHostListVendorList(t, o, e)
    }, n.prototype.setcListHandler = function(e, t) {
        var o, n;
        e && (o = (n = B.setcListHeaderTitleAndScreenReader())[0], n = n[1], e.innerHTML = o + "&#x200E;", e.setAttribute(this._ariaLabel, n), e.setAttribute("data-parent-id", t.CustomGroupId))
    }, n.prototype.setcListHeaderTitleAndScreenReader = function() {
        var e, t = I.showTrackingTech ? (e = A.AdditionalTechnologiesConfig.PCTechDetailsText, A.AdditionalTechnologiesConfig.PCTechDetailsAriaLabel) : I.showGeneralVendors ? (e = A.GroupGenVenListLabel, A.PCenterVendorListScreenReader) : (e = A.ThirdPartyCookieListText, A.PCOpensCookiesDetailsAlert);
        return [e, t]
    }, n.prototype.setHostListVendorList = function(e, t, o) {
        var n;
        b.pcName === nt ? (e = e("#vendor-list-container"), n = o.querySelector(k.P_Acc_Txt), e && t.querySelector("" + k.P_Content).removeChild(e), n.querySelector(k.P_Host_Lst_cntr) && P(n).el.removeChild(n.querySelector(k.P_Host_Lst_cntr))) : (t = o.querySelector(k.P_Host_Lst_cntr)) && t.parentElement.removeChild(t)
    }, n.prototype.setSubGroupData = function(e, t, o, n) {
        var r;
        0 < e.SubGroups.length && e.ShowSubgroup && (r = b.pcName === nt && e.ShowVendorList && b.isIab2orv2Template && !A.PCTemplateUpgrade, B.setSubGrps(e, r ? o : n, t, A))
    }, n.prototype.setSubGrps = function(t, o, n, r) {
        var e;
        b.pcName === nt && t.ShowVendorList && b.isIab2orv2Template && !A.PCTemplateUpgrade && (e = n.querySelector(k.P_Sub_Grp_Cntr)).parentElement.removeChild(e), t.SubGroups.forEach(function(e) {
            B.setSubGroups({
                group: t,
                subgroup: e,
                grpEl: n,
                subGrpEl: o,
                json: r
            })
        })
    }, n.prototype.setSubGroups = function(e) {
        var t, o = e.group,
            n = e.subgroup,
            r = e.grpEl,
            i = e.subGrpEl,
            e = e.json,
            s = b.pcName,
            a = B.getRemoveConsentToggle(n),
            i = (S.isV2Template ? i : i.el).cloneNode(!0),
            l = i.querySelector(k.P_Subgp_ul),
            c = i.querySelector(k.P_Subgrp_li).cloneNode(!0),
            d = n.CustomGroupId,
            u = "ot-sub-group-id-" + d,
            p = f.getGrpStatus(n).toLowerCase(),
            h = c.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
            g = c.querySelector(k.P_Tgl_Cntr),
            d = (c.setAttribute("data-optanongroupid", d), S.isV2Template ? ((t = B.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", d), t.querySelector("input").classList.add("cookie-subgroup-handler"), t = t.cloneNode(!0), g.insertAdjacentElement("beforeend", t)) : (t = c.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", d), P(i.querySelector(k.P_Subgp_ul)).html(""), B.addSubgroupName(n, h), B.setDataIfVendorServiceEnabled(h, c, t), t.querySelector("input").setAttribute("id", u), t.querySelector("input").setAttribute(this._ariaLabel, n.GroupName), t.querySelector("label").setAttribute("for", u), B.setSubGroupDescription({
                json: e,
                group: o,
                subgroup: n,
                subGroupClone: c
            }), b.isTcfV2Template && Jn.addIllustrationsLink(c, n, o.ShowVendorList, !0), M(kt, vt));
        o.ShowSubgroupToggle && -1 < d.indexOf(n.Type) ? B.setSubGroupToggle({
            id: u,
            subGroupClone: c,
            group: o,
            subgroup: n,
            toggleGroup: g
        }) : p === m.ALWAYS_ACTIVE && (o.ShowSubgroupToggle || -1 === Tt.indexOf(n.Type)) || (a = !0), B.setSubGroupsProperties({
            removeConsentToggle: a,
            subGroupToggle: t,
            subGroupClone: c,
            status: p,
            subgroup: n,
            grpEl: r,
            pcName: s,
            json: e,
            subGrpElClone: i,
            ulParentContainerEle: l
        })
    }, n.prototype.getRemoveConsentToggle = function(e) {
        var t = !1;
        return t = b.isIab2orv2Template && e.Type === T.GroupTypes.Pur && !e.HasConsentOptOut ? !0 : t
    }, n.prototype.addSubgroupName = function(e, t) {
        var o, n = e.GroupName;
        b.isTcfV2Template && e.IsIabPurpose && (o = this.getActiveVendorCount(e), n += this.getVendorCountEl(o, e.Type)), P(t).html(n)
    }, n.prototype.setDataIfVendorServiceEnabled = function(e, t, o) {
        var n;
        I.showVendorService && ((n = document.createElement("div")).classList.add("ot-acc-hdr"), e.classList.add("ot-cat-header"), n.appendChild(e), e = "afterbegin", A.PCCategoryStyle === Se.Toggle && (e = "beforeend"), n.insertAdjacentElement(e, o), t.removeChild(t.querySelector(k.P_Subgrp_Tgl_Cntr)), t.insertAdjacentElement("afterbegin", n))
    }, n.prototype.setSubGroupDescription = function(e) {
        var t, o = e.json,
            n = e.group,
            r = e.subgroup,
            e = e.subGroupClone,
            i = b.pcName,
            s = o.PCGrpDescType === ne.Legal,
            i = i === nt && n.ShowVendorList && b.isIab2orv2Template,
            a = P(e.querySelector(k.P_Subgrp_Desc));
        i ? (t = r.DescriptionLegal && s ? r.DescriptionLegal : r.GroupDescription, a.html(t)) : (t = E.safeFormattedGroupDescription(r), i = !1, -1 < Pt.indexOf(r.Type) && s && (i = !0, t = r.DescriptionLegal), o.PCenterEnableAccordion && i || (a = P(e.querySelector("p"))), n.ShowSubGroupDescription ? a.html(t) : a.html(""))
    }, n.prototype.setSubGroupToggle = function(e) {
        var t = e.id,
            o = e.subGroupClone,
            n = e.group,
            r = e.subgroup,
            e = e.toggleGroup,
            i = E.isGroupActive(r),
            n = (B.setSubGroupActive({
                group: n,
                subgroup: r,
                subGroupClone: o
            }, i), e.querySelector(".ot-label-status"));
        A.PCShowConsentLabels ? n.innerHTML = i ? A.PCActiveText : A.PCInactiveText : v.removeChild(n), b.legIntSettings.PAllowLI && r.Type === T.GroupTypes.Pur && r.HasLegIntOptOut && (b.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(o, r) : (i = e.cloneNode(!0), e.insertAdjacentElement("afterend", i), n = i.querySelector(".ot-label-status"), (o = i.querySelector("input")).setAttribute("id", t + "-leg-out"), i.querySelector("label").setAttribute("for", t + "-leg-out"), r.IsLegIntToggle = !0, e = E.isGroupActive(r), A.PCShowConsentLabels ? n.innerHTML = e ? A.PCActiveText : A.PCInactiveText : v.removeChild(n), v.setCheckedAttribute(null, o, e), r.IsLegIntToggle = !1))
    }, n.prototype.setSubGroupActive = function(e, t) {
        var o;
        t && (t = e.group, o = e.subgroup, e = e.subGroupClone, t = f.getGrpStatus(t).toLowerCase(), e.querySelector("input").setAttribute("checked", ""), t === m.ALWAYS_ACTIVE) && -1 === Pt.indexOf(o.Type) && (e.querySelector("input").disabled = !0, e.querySelector("input").setAttribute("disabled", "true"))
    }, n.prototype.setSubGroupsProperties = function(e) {
        var t = e.removeConsentToggle,
            o = e.subGroupToggle,
            n = e.subGroupClone,
            r = e.status,
            i = e.subgroup,
            s = e.grpEl,
            a = e.pcName,
            l = e.json,
            c = e.subGrpElClone,
            e = e.ulParentContainerEle;
        t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(this._ariaHidden, "true")), r !== m.ALWAYS_ACTIVE && r !== m.ALWAYS_INACTIVE || t || (o && o.parentElement.removeChild(o), (t = n.querySelector(k.P_Tgl_Cntr)) && t.classList.add("ot-always-active-subgroup"), B.setAlwaysActive(n, !0, r === m.ALWAYS_INACTIVE)), "COOKIE" === i.Type && -1 !== i.Parent.indexOf("STACK") && d(c, "display: none;"), P(e).append(n), S.isV2Template ? (o = s, "otPcTab" === a ? o = s.querySelector("" + k.P_Desc_Container) : l.PCenterEnableAccordion && (o = s.querySelector(k.P_Acc_Txt)), o.insertAdjacentElement("beforeend", c)) : (t = s.querySelector(k.P_Category_Item + " " + k.P_Ven_Lst_Cntr)) && t.insertAdjacentElement("beforebegin", c), I.showVendorService && A.VendorServiceConfig.PCVSCategoryView && O.insertVendorServiceHtml(i, e)
    }, n.prototype.getInputEleForCategory = function(e) {
        return I.showVendorService && A.PCCategoryStyle === Se.Checkbox && e.classList.add("ot-checkbox-consent"), B.getInputEle()
    }, n.prototype.getInputEle = function() {
        return !b.isIab2orv2Template && A.PCTemplateUpgrade ? Nn() : L.toggleEl.cloneNode(!0)
    }, n.prototype.setToggle = function(e, t, o, n, r) {
        var i = B.getInputEleForCategory(e),
            s = (i.querySelector("input").classList.add("category-switch-handler"), i.querySelector("input")),
            a = e.querySelector(k.P_Category_Header),
            l = E.isGroupActive(o),
            c = [m.ALWAYS_ACTIVE, m.ALWAYS_INACTIVE].includes(f.getGrpStatus(o).toLowerCase()),
            d = o.OptanonGroupId.toString(),
            u = T.GroupTypes,
            p = !0;
        !b.isIab2orv2Template || o.Type !== u.Pur && o.Type !== u.Stack || o.HasConsentOptOut || (p = !1), P(i.querySelector("label")).attr("for", n), P(i.querySelector(".ot-label-txt")).html(o.GroupName);
        b.legIntSettings.PAllowLI && o.Type === u.Pur && o.HasLegIntOptOut && (b.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(e, o, !0, t) : (u = i.cloneNode(!0), o.IsLegIntToggle = !0, t = E.isGroupActive(o), h = u.querySelector(".ot-label-status"), A.PCShowConsentLabels ? h.innerHTML = t ? A.PCActiveText : A.PCInactiveText : v.removeChild(h), o.IsLegIntToggle = !1, E.setInputID(u.querySelector("input"), n + "-leg-out", d, t, r), P(u.querySelector("label")).attr("for", n + "-leg-out"), a.insertAdjacentElement("afterend", u)));
        var h = i.querySelector(".ot-label-status"),
            d = (A.PCShowConsentLabels ? h.innerHTML = l ? A.PCActiveText : A.PCInactiveText : v.removeChild(h), A.PCCategoryStyle === Se.Toggle);
        this.hideToggleContainer(c, p, d, i), p && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r), B.setNoAccordionHeader(e, c)
    }, n.prototype.setNoAccordionHeader = function(e, t) {
        var o, n, r, i;
        !b.isIab2orv2Template && A.PCTemplateUpgrade && (o = A.PCCategoryStyle === Se.Checkbox, A.PCAccordionStyle === le.NoAccordion) && o && ((o = document.createElement("div")).classList.add("ot-acc-hdr"), n = e.querySelector(".ot-chkbox"), r = e.querySelector(".ot-always-active"), i = e.querySelector(k.P_Category_Header), n && o.appendChild(n), o.appendChild(i), t && o.appendChild(r), e.insertBefore(o, e.firstChild))
    }, n.prototype.hideToggleContainer = function(e, t, o, n) {
        !e && t || !o || (n.classList.add("ot-hide-tgl"), n.querySelector("input").setAttribute(this._ariaHidden, "true"))
    }, n.prototype.setAlwaysActiveOrToggleInput = function(e, t, o, n, r, i) {
        var s = "always active" === f.getGrpStatus(e).toLowerCase(),
            a = "always inactive" === f.getGrpStatus(e).toLowerCase(),
            l = A.PCCategoryStyle === Se.Toggle,
            c = e.OptanonGroupId.toString(),
            e = E.isGroupActive(e),
            d = t.querySelector(k.P_Category_Header);
        !b.isIab2orv2Template && A.PCTemplateUpgrade ? ((s || a) && A.PCShowAlwaysActiveToggle && (B.setAlwaysActive(t, !1, a), o.querySelector("input").setAttribute("disabled", "true")), s && l || B.insertAccordionInputHeader(d, o), E.setInputID(n, r, c, e, i), B.insertAccordionPointer(t, d)) : (B.insertAccordionPointer(t, d), s || a ? A.PCShowAlwaysActiveToggle && B.setAlwaysActive(t, !1, a) : (B.insertAccordionInputHeader(d, o), E.setInputID(n, r, c, e, i)))
    }, n.prototype.setOptOutSignalVisibility = function(e) {
        var t = b.gpcEnabled && b.gpcForAGrpEnabled,
            o = C.isAlertBoxClosedAndValid() && E.isAnyGroupOptedOut();
        A.PCShowOptOutSignal && (t || o || b.previewMode) ? e.classList.remove("ot-hide") : e.classList.add("ot-hide")
    }, n.prototype.setOptOutSignalNotification = function(e) {
        e = y.createOptOutSignalElement(e, !0);
        B.setOptOutSignalVisibility(e)
    }, n.prototype.insertAccordionInputHeader = function(e, t) {
        var o = B.getPositionForInputEle();
        e.insertAdjacentElement(o, t)
    }, n.prototype.getPositionForInputEle = function() {
        var e = "beforebegin";
        return e = !b.isIab2orv2Template && A.PCTemplateUpgrade && A.PCCategoryStyle !== Se.Toggle ? e : "afterend"
    }, n.prototype.insertAccordionPointer = function(e, t) {
        var o, n;
        e.classList.add("ot-vs-config"), A.PCenterEnableAccordion && (!b.isIab2orv2Template && A.PCTemplateUpgrade ? (e = e.querySelector(k.P_Acc_Header), o = n = void 0, n = (A.PCAccordionStyle === le.Caret ? (o = "beforeend", L.arrowEl) : (o = A.PCCategoryStyle === Se.Checkbox ? "beforeend" : "afterbegin", L.plusMinusEl)).cloneNode(!0), e.insertAdjacentElement(o, n)) : A.PCAccordionStyle === le.Caret ? t.insertAdjacentElement("afterend", L.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", L.plusMinusEl.cloneNode(!0)))
    }, n.prototype.setToggleProps = function(e, t, o, n, r) {
        var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
            s = e.querySelectorAll("label"),
            a = E.isGroupActive(o),
            l = o.CustomGroupId,
            c = e.querySelector(".label-text");
        c && P(c).html(o.GroupName);
        for (var d, u, p, h, g = 0; g < i.length; g++) s[g] && P(s[g]).attr("for", n), 2 <= i.length && 0 === g ? P(i[g]).attr("id", n + "-toggle") : (d = this.canShowConsentToggle(o), this.canShowLegIntToggle(o) && (b.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(e, o, !0, t) : (h = (u = e.querySelector(k.P_Tgl_Cntr + ":not(" + k.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle")).cloneNode(!0), u.insertAdjacentElement("afterend", h), u = h.querySelector("input"), o.IsLegIntToggle = !0, p = E.isGroupActive(o), o.IsLegIntToggle = !1, E.setInputID(u, n + "-leg-out", l, p, r), P(h.querySelector("label")).attr("for", n + "-leg-out"), v.removeChild(h.querySelector(k.P_Arrw_Cntr)))), u = f.getGrpStatus(o).toLowerCase() === m.ALWAYS_ACTIVE, p = f.getGrpStatus(o).toLowerCase() === m.ALWAYS_INACTIVE, !u && d || (h = i[g].closest(".ot-toggle")) && (h.classList.add("ot-hide-tgl"), h.querySelector("input").setAttribute(this._ariaHidden, !0)), d && (u && B.setAlwaysActive(e, !1, p), E.setInputID(i[g], n, l, a, r)))
    }, n.prototype.canShowConsentToggle = function(e) {
        var t = !0,
            o = T.GroupTypes;
        return t = !b.isIab2orv2Template || e.Type !== o.Pur && e.Type !== o.Stack || e.HasConsentOptOut ? t : !1
    }, n.prototype.canShowLegIntToggle = function(e) {
        var t = T.GroupTypes;
        return b.legIntSettings.PAllowLI && e.Type === t.Pur && e.HasLegIntOptOut
    }, n.prototype.setAlwaysActive = function(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = !1);
        var n, r = b.pcName;
        r === nt || r === rt || t ? (r = e.querySelector(k.P_Tgl_Cntr)) && r.insertAdjacentElement("afterbegin", P("<div class='ot-always-active'>" + (o ? A.AlwaysInactiveText : A.AlwaysActiveText) + "</div>", "ce").el) : (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(k.P_Category_Header)).id) ? void 0 : n.split("-")[3]), !S.isV2Template && A.PCenterEnableAccordion && (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(k.P_Arrw_Cntr)).id) ? void 0 : n.split("-")[3])), P(t).el.insertAdjacentElement("afterend", P('<div id="' + r + "\" class='ot-always-active'>" + (o ? A.AlwaysInactiveText : A.AlwaysActiveText) + "</div>", "ce").el)), A.PCenterEnableAccordion ? (n = e.querySelector(k.P_Acc_Header)) && n.classList.add("ot-always-active-group") : ((t = e.querySelector("" + k.P_Desc_Container)) && t.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group"))
    }, n.prototype.setPcTabLayout = function(e, t, o) {
        var n = e(".ot-tab-desc");
        "otPcTab" === b.pcName && (o && e("#onetrust-pc-sdk " + k.P_Category_Grp).insertAdjacentElement("afterbegin", o), n && 640 < window.innerWidth && P(n).append(t.querySelectorAll("#onetrust-pc-sdk " + k.P_Desc_Container)), A.IsIabEnabled ? e(k.P_Desc_Container + " .category-vendors-list-handler").innerHTML = A.VendorListText + "&#x200E;" : (o = e(k.P_Desc_Container + " .category-vendors-list-handler")) && o.parentElement.removeChild(o))
    }, n.prototype.setVendorListClass = function(e, t) {
        S.isV2Template ? A.PCAccordionStyle === le.Caret && (P(e("#onetrust-pc-sdk " + k.P_Vendor_List)).addClass("ot-enbl-chr"), A.PCenterEnableAccordion) && P(e("#onetrust-pc-sdk " + k.P_Content)).addClass("ot-enbl-chr") : P(t.querySelector(k.P_Sub_Grp_Cntr)).remove()
    }, n.prototype.setPCHeader = function(e, t) {
        var o = b.pcName,
            n = e(k.P_Li_Hdr) || t.querySelector(k.P_Li_Hdr);
        b.legIntSettings.PAllowLI && b.grpContainLegalOptOut && b.isIab2orv2Template && !b.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = A.ConsentText, n.querySelector("span:last-child").innerText = A.LegitInterestText, S.isV2Template && (n.querySelector("span:first-child").innerText = A.PCenterConsentText, n.querySelector("span:last-child").innerText = A.PCenterLegIntColumnHeader), A.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (v.removeChild(e("#onetrust-pc-sdk " + k.P_Li_Hdr)), v.removeChild(t.querySelector(k.P_Li_Hdr)))
    };
    var B, Zn = n;

    function n() {
        this._ariaHidden = "aria-hidden", this._ariaLabel = "aria-label"
    }
    tr.prototype.showBanner = function() {
        var e = b.bannerName,
            t = P(this.El);
        I.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== Ye && e !== We && e !== Qe ? t.css("display: block;") : A.BAnimation === ve.SlideIn ? this.slideInAnimation(t, e) : A.BAnimation === ve.FadeIn && t.addClass("ot-fade-in")
    }, tr.prototype.insertAlertHtml = function() {
        A.IsGPPEnabled && $r.setCmpDisplayStatus("visible");

        function e(e) {
            return t.querySelector(e)
        }
        var t = document.createDocumentFragment(),
            o = document.createElement("div"),
            o = (P(o).html(G.bannerGroup.html), o.querySelector("#onetrust-banner-sdk"));
        this.setAriaModalForBanner(o), S.fp.CookieV2SSR ? (P(t).append(o), this.setBannerLinkAttributes(e), this._rejectBtn = e("#onetrust-reject-all-handler"), this._acceptBtn = e("#onetrust-accept-btn-handler")) : this.insertHtmlForNonSSRFlow(o, t, e, function(e) {
            return t.querySelectorAll(e)
        }), this.ssrAndNonSSRCommonHtml(t)
    }, tr.prototype.insertHtmlForNonSSRFlow = function(e, t, o, n) {
        var r, i, s = b.bannerName;
        G.bannerGroup && (A.BannerRelativeFontSizesToggle && P(e).addClass("otRelFont"), (A.BInitialFocus || A.BInitialFocusLinkAndButton) && (e.setAttribute("tabindex", "0"), e.setAttribute("role", "main")), A.useRTL && P(e).attr("dir", "rtl"), b.isIab2orv2Template && A.BannerDPDDescription.length && P(e).addClass("ot-iab-2"), (r = A.BannerPosition) && ("bottom-left" === r ? P(e).addClass("ot-bottom-left") : "bottom-right" === r ? P(e).addClass("ot-bottom-right") : P(e).addClass(r)), P(t).append(e), this.setBannerData(o), r = this.setIAB2HtmlData(o), this.setAcceptAndRejectBtnHtml(o), t = this.htmlForBannerButtons(e, o, n), n = A.showBannerCloseButton, i = A.BCloseButtonType === ke.Link, this.setWidthForFlatBanner(o, r, t), n && s === Je && b.isIab2orv2Template && !i && ((t = o(".banner-close-btn-container")).parentElement.removeChild(t), P(e).el.insertAdjacentElement("beforeEnd", t), P(o("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")), this.setBannerOptions(o, r), this.setBannerLogo(e, o))
    }, tr.prototype.setBannerOptions = function(e, t) {
        var o = this,
            n = b.bannerName,
            r = this.isCmpEnabled(),
            i = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }],
            s = P(e(this._bannerOptionsSelector)).el;
        r ? (n === Xe ? this.setFloatingRoundedIconBannerCmpOptions(e, i) : (this.setCmpBannerOptions(e, i), n === Ze && t.el.insertAdjacentElement("beforeend", s)), P(window).on("resize", function() {
            window.innerWidth <= 896 && o.setBannerOptionContent()
        })) : (b.bannerName === Je && (s = P(e(".banner-options-card")).el), v.removeChild(s))
    }, tr.prototype.setWidthForFlatBanner = function(e, t, o) {
        var n = b.bannerName,
            r = A.showBannerCloseButton,
            i = this.hasNoActionButtons();
        n === We && (b.isIab2orv2Template && (t.removeClass("ot-sdk-eight"), A.showBannerAcceptButton && o.insertAdjacentElement("afterbegin", this._acceptBtn), A.showBannerCookieSettings) && o.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler")), r && !i && b.isIab2orv2Template ? t.addClass("ot-sdk-nine") : r && i ? t.addClass("ot-sdk-eleven") : !r && i ? t.addClass("ot-sdk-twelve") : r || i || !b.isIab2orv2Template || (t.addClass("ot-sdk-ten"), P(e(this._btnGrpParentSelector)).addClass("ot-sdk-two"), P(e(this._btnGrpParentSelector)).removeClass("ot-sdk-three")))
    }, tr.prototype.hasNoActionButtons = function() {
        return !A.showBannerAcceptButton && !A.showBannerCookieSettings && !A.BannerShowRejectAllButton
    }, tr.prototype.htmlForBannerButtons = function(e, t, o) {
        var n = b.bannerName,
            r = (this.hasNoActionButtons() && t(this._btnGrpParentSelector).parentElement.removeChild(t(this._btnGrpParentSelector)), A.showBannerCloseButton),
            i = P(o(".banner-close-button")).el,
            s = t("#onetrust-button-group"),
            a = A.BCloseButtonType === ke.Link;
        if (r)
            for (l = 0; l < i.length; l++) a ? (P(i[l]).html(A.BContinueText), P(e).addClass("ot-close-btn-link"), P(i[l]).addClass("ot-close-link"), P(i[l]).removeClass("onetrust-close-btn-ui"), P(i[l]).removeClass("ot-close-icon"), n !== Je && n !== Xe || (s.insertAdjacentElement("afterbegin", t(".onetrust-close-btn-handler").parentElement), P(i[l]).attr("tabindex", "1"))) : (y.setCloseIcon(t("#onetrust-banner-sdk .ot-close-icon")), P(i[l]).el.setAttribute(pt, A.BannerCloseButtonText || "Close Cookie Banner"));
        else {
            for (var l = 0; l < i.length; l++) P(i[l].parentElement).el.removeChild(i[l]);
            n !== We && n !== Xe || v.removeChild(t("#onetrust-close-btn-container-mobile"))
        }
        return s
    }, tr.prototype.setAcceptAndRejectBtnHtml = function(e) {
        var t = b.bannerName,
            e = (A.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), P(this._acceptBtn).html(A.AlertAllowCookiesText), t !== Qe || A.showBannerCookieSettings || A.BannerShowRejectAllButton || P(this._acceptBtn.parentElement).addClass("accept-btn-only")) : v.removeChild(e("#onetrust-accept-btn-handler")), A.BannerShowRejectAllButton && A.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), P(this._rejectBtn).html(A.BannerRejectAllButtonText), e(this._btnGrpParentSelector).classList.add("has-reject-all-button")) : (v.removeChild(e("#onetrust-reject-all-handler")), v.removeChild(e("#onetrust-reject-btn-container"))), P(e("#onetrust-pc-btn-handler")));
        A.showBannerCookieSettings ? (e.html(A.AlertMoreInfoText), A.BannerSettingsButtonDisplayLink && e.addClass("cookie-setting-link"), t !== Qe || A.showBannerAcceptButton || e.addClass("cookie-settings-btn-only")) : v.removeChild(e.el)
    }, tr.prototype.setIAB2HtmlData = function(e) {
        var t = b.bannerName,
            o = (b.isIab2orv2Template && A.BannerDPDDescription.length && t !== Ze ? (P(e(".ot-dpd-container .ot-dpd-title")).html(A.BannerDPDTitle), P(e(".ot-dpd-container .ot-dpd-desc")).html(A.BannerDPDDescription.join(",&nbsp;"))) : v.removeChild(e(".ot-dpd-container")), P(e(this._otGrpContainerSelector))),
            t = (b.isIab2orv2Template && A.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e), b.isIab2orv2Template && A.BannerDPDDescription.length ? t !== Ze ? P(e(".ot-dpd-container .ot-dpd-desc")) : o : P(e($n.POLICY_TEXT_SELECTOR)));
        return A.IsIabEnabled && A.BannerIABPartnersLink && t.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n        ' + A.BannerIABPartnersLink + "\n        </button>"), o
    }, tr.prototype.setBannerData = function(e) {
        var t;
        A.BannerTitle ? (P(e("#onetrust-policy-title")).html(A.BannerTitle), P(e('[role="dialog"]')).attr(pt, A.BannerTitle)) : (v.removeChild(e("#onetrust-policy-title")), P(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), P(e('[role="dialog"]')).attr(pt, A.AriaPrivacy)), !A.IsIabEnabled && I.showGeneralVendors && A.BannerNonIABVendorListText && ((t = document.createElement("div")).setAttribute("id", "ot-gv-link-ctnr"), P(t).html('<button class="ot-link-btn ot-gv-list-handler">' + A.BannerNonIABVendorListText + "</button>"), P(e("#onetrust-policy")).el.appendChild(t)), P(e($n.POLICY_TEXT_SELECTOR)).html(A.AlertNoticeText), this.setBannerLinkAttributes(e)
    }, tr.prototype.setBannerLinkAttributes = function(e) {
        var t;
        P(e(this.cookiePolicyLinkSelector)).length && (t = P(e($n.POLICY_TEXT_SELECTOR + " .ot-cookie-policy-link")), e = P(e($n.POLICY_TEXT_SELECTOR + " .ot-imprint-link")), A.BShowPolicyLink && t && (t.attr(pt, A.BCookiePolicyLinkScreenReader), t.attr("rel", "noopener"), t.attr("target", "_blank")), A.BShowImprintLink) && e && (e.attr(pt, A.BImprintLinkScreenReader), e.attr("rel", "noopener"), e.attr("target", "_blank"))
    }, tr.prototype.isCmpEnabled = function() {
        return A.BannerPurposeTitle || A.BannerPurposeDescription || A.BannerFeatureTitle || A.BannerFeatureDescription || A.BannerInformationTitle || A.BannerInformationDescription
    }, tr.prototype.ssrAndNonSSRCommonHtml = function(t) {
        function e(e) {
            return t.querySelector(e)
        }
        var o, n = this,
            r = this.isCmpEnabled(),
            i = (this.setOptOutSignalNotification(e), "[VENDOR_NUMBER]"),
            s = P(e($n.POLICY_TEXT_SELECTOR)).html(),
            i = (b.isIab2orv2Template && -1 < s.indexOf(i) && (o = '<span class="ot-tcf2-vendor-count ot-text-bold">' + b.tcf2ActiveVendors.all.toString() + "</span>", s = y.replaceTextFromString(i, s, o), P(e($n.POLICY_TEXT_SELECTOR)).html(s)), A.BRegionAriaLabel && (P(e("#onetrust-banner-sdk")).attr("role", "region"), P(e("#onetrust-banner-sdk")).attr(pt, A.BRegionAriaLabel)), b.bannerName === Ze && S.moduleInitializer.IsSuppressPC && (I.dataGroupState = A.Groups.filter(function(e) {
                return e.Order
            })), b.bannerName === Ze && (this._fourBtns = A.BannerShowRejectAllButton && A.showBannerAcceptButton && A.showBannerCookieSettings && A.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), A.BShowSaveBtn ? P(this._saveBtn).html(A.BSaveBtnTxt) : (v.removeChild(this._saveBtn), this._saveBtn = null), y.insertFooterLogo(t.querySelectorAll(".ot-bnr-footer-logo a")), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
                n.setBannerBtn()
            }), this._fourBtns && P(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e)), document.createElement("div"));
        P(i).append(t), b.ignoreInjectingHtmlCss || (P("#onetrust-consent-sdk").append(i.firstChild), r && this.setBannerOptionContent()), this.setBnrBtnGrpAlignment()
    }, tr.prototype.setAriaModalForBanner = function(e) {
        A.ForceConsent && e.querySelector('[role="dialog"]').setAttribute("aria-modal", "true")
    }, tr.prototype.setBnrBtnGrpAlignment = function() {
        var e = P(this._otGrpContainerSelector).el,
            t = P(this._btnGrpParentSelector).el,
            e = ((e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? P("#onetrust-banner-sdk").removeClass("vertical-align-content") : P("#onetrust-banner-sdk").addClass("vertical-align-content"), document.querySelector("#onetrust-button-group-parent button:first-of-type")),
            t = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        t && e && 1 < Math.abs(t.offsetTop - e.offsetTop) && P("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, tr.prototype.slideInAnimation = function(e, t) {
        t === We ? "bottom" === A.BannerPosition ? (e.css("bottom: -99px;"), e.animate({
            bottom: "0px"
        }, 1e3), I.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 0px;"), I.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"), b.pagePushedDown && !rn.checkIsBrowserIE11OrBelow() ? rn.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3), I.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("top: 0px; bottom: auto;"), I.bnrAnimationInProg = !1
        }, 1e3))) : t !== Ye && t !== Qe || (e.css("bottom: -300px;"), e.animate({
            bottom: "1em"
        }, 2e3), I.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 1rem;"), I.bnrAnimationInProg = !1
        }, 2e3))
    }, tr.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (v.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), v.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), v.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), v.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (v.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), v.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), v.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), v.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, tr.prototype.setCmpBannerOptions = function(n, e) {
        var r = P(n("#banner-options .banner-option")).el.cloneNode(!0),
            i = (P(n(this._bannerOptionsSelector)).html(""), 1);
        e.forEach(function(e) {
            var t = r.cloneNode(!0),
                o = A[e.titleKey],
                e = A[e.descriptionKey];
            (o || e) && (t.querySelector(".banner-option-header :first-child").innerHTML = o, o = t.querySelector(".banner-option-details"), e ? (o.setAttribute("id", "option-details-" + i++), o.innerHTML = e) : o.parentElement.removeChild(o), P(n("#banner-options")).el.appendChild(t))
        })
    }, tr.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var i = this,
            s = P(r("#banner-options button")).el.cloneNode(!0),
            n = P(r(".banner-option-details")).el.cloneNode(!0);
        P(r(this._bannerOptionsSelector)).html(""), e.forEach(function(e) {
            var t = s.cloneNode(!0),
                o = A[e.titleKey],
                n = A[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, P(r(i._bannerOptionsSelector)).el.appendChild(t))
        }), e.forEach(function(e) {
            var t, o = A[e.descriptionKey];
            o && ((t = n.cloneNode(!0)).innerHTML = o, t.classList.add(e.identifier), P(r(i._bannerOptionsSelector)).el.appendChild(t))
        })
    }, tr.prototype.setBannerOptionContent = function() {
        var t = this;
        b.bannerName !== We && b.bannerName !== Xe || setTimeout(function() {
            var e;
            (window.innerWidth < 769 ? (e = P(t._bannerOptionsSelector).el[0], P(t._otGrpContainerSelector)) : (e = P(t._bannerOptionsSelector).el[0], b.bannerName === Xe ? P(".banner-content") : P("#onetrust-banner-sdk .ot-sdk-container"))).el[0].appendChild(e)
        })
    }, tr.prototype.setAdditionalDesc = function(e) {
        var t = A.BannerAdditionalDescPlacement,
            o = document.createElement("span"),
            n = (o.classList.add("ot-b-addl-desc"), o.innerHTML = A.BannerAdditionalDescription, e($n.POLICY_TEXT_SELECTOR));
        t === ae.AfterTitle ? n.insertAdjacentElement("beforeBegin", o) : t === ae.AfterDescription ? n.insertAdjacentElement("afterEnd", o) : t === ae.AfterDPD && (n = e(".ot-dpd-container .ot-dpd-desc"), (n = A.ChoicesBanner ? e(this._otGrpContainerSelector) : n).insertAdjacentElement("beforeEnd", o))
    }, tr.prototype.insertGrps = function(e) {
        var d = e(".ot-cat-item").cloneNode(!0),
            u = (v.removeChild(e(".ot-cat-item")), A.BCategoryStyle === Se.Checkbox ? v.removeChild(d.querySelector(".ot-tgl")) : (v.removeChild(d.querySelector(".ot-chkbox")), P(d).addClass("ot-cat-bdr")), e(".ot-cat-lst ul"));
        A.Groups.forEach(function(e) {
            var t = d.cloneNode(!0),
                o = t.querySelector(".ot-tgl,.ot-chkbox"),
                n = e.GroupName,
                r = e.CustomGroupId,
                i = "ot-bnr-grp-id-" + r,
                s = "ot-bnr-hdr-id-" + r,
                a = -1 !== Tt.indexOf(e.Type),
                l = f.getGrpStatus(e).toLowerCase() === m.ALWAYS_ACTIVE || a,
                c = f.getGrpStatus(e).toLowerCase() === m.ALWAYS_INACTIVE || a,
                a = E.isGroupActive(e) || a,
                e = (P(o.querySelector("label")).attr("for", i), P(o.querySelector(".ot-label-txt")).html(e.GroupName), o.querySelector("input")),
                l = ((l || c) && (A.BCategoryStyle === Se.Toggle ? (v.removeChild(o), t.insertAdjacentElement("beforeend", P("<div class='ot-always-active'>" + (c ? A.AlwaysInactiveText : A.AlwaysActiveText) + "</div>", "ce").el)) : P(e).attr("disabled", !0)), e.classList.add("category-switch-handler"), E.setInputID(e, i, r, a, s), t.querySelector("h4"));
            P(l).html(n), P(l).attr("id", s), P(u).append(t)
        })
    }, tr.prototype.setBannerLogo = function(e, t) {
        var o, n;
        S.fp.CookieV2BannerLogo && A.BnrLogo && (o = t(an), n = "afterend", b.bannerName === Xe && (o = t("#onetrust-cookie-btn"), n = "beforeend"), t = y.updateCorrectUrl(A.BnrLogo), P(e).addClass("ot-bnr-w-logo"), P(o).el.innerHTML = "", o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + t + "'\n            title='" + A.BnrLogoAria + "'\n            alt='" + A.BnrLogoAria + "'/>"))
    }, tr.prototype.setOptOutSignalNotification = function(e) {
        var t = b.gpcEnabled && b.gpcForAGrpEnabled;
        A.BShowOptOutSignal && (t || b.previewMode) && y.createOptOutSignalElement(e, !1)
    };
    var $n, er = tr;

    function tr() {
        this.POLICY_TEXT_SELECTOR = "#onetrust-policy-text", this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1, this._bannerOptionsSelector = "#banner-options", this._btnGrpParentSelector = "#onetrust-button-group-parent", this._otGrpContainerSelector = "#onetrust-group-container", this.cookiePolicyLinkSelector = "#onetrust-policy-text a"
    }
    nr.prototype.setHeaderConfig = function() {
        c.setHeader(), c.setSearchInput(), c.setHeaderUIConsent();
        var e = c.getGroupsForFilter();
        Un.setFilterListByGroup(e, !1)
    }, nr.prototype.filterVendorByString = function(e) {
        c.searchQuery = e, c.filterVendorByGroupOrQuery()
    }, nr.prototype.filterVendorByGroup = function(e) {
        c.filterGroups = e, c.filterVendorByGroupOrQuery()
    }, nr.prototype.showVSList = function() {
        c.removeListeners(), c.showEmptyResults(!1, ""), c.clearUIElementsInMain(), c.addVSList(I.getVendorsInDomain())
    }, nr.prototype.showEmptyResults = function(e, t) {
        e ? this.setNoResultsContent(t) : (P("#onetrust-pc-sdk " + k.P_Vendor_Content).removeClass("no-results"), (e = P("#onetrust-pc-sdk #no-results")).length && e.remove())
    }, nr.prototype.setNoResultsContent = function(e) {
        var t, o, n, r, i = P("#onetrust-pc-sdk #no-results").el[0];
        if (!i) return t = document.createElement("div"), o = document.createElement("p"), n = document.createTextNode(" " + A.PCVendorNotFound + "."), r = document.createElement("span"), t.id = "no-results", r.id = "user-text", r.innerText = e, o.appendChild(r), o.appendChild(n), t.appendChild(o), P("#onetrust-pc-sdk " + k.P_Vendor_Content).addClass("no-results"), P("#vendor-search-handler").el[0].setAttribute("aria-describedby", t.id), P("#onetrust-pc-sdk " + k.P_Vendor_Content).append(t);
        i.querySelector("span").innerText = e
    }, nr.prototype.getGroupsFilter = function() {
        for (var e = [], t = 0, o = P("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t],
                r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }, nr.prototype.cancelFilter = function() {
        for (var e = 0, t = P("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e],
                n = o.getAttribute("data-optanongroupid"),
                n = 0 <= I.filterByCategories.indexOf(n);
            v.setCheckedAttribute(null, o, n)
        }
        var r = c.getGroupsFilter();
        c.filterVendorByGroup(r)
    }, nr.prototype.clearFilter = function() {
        c.searchQuery = "", c.filterGroups = []
    }, nr.prototype.toggleVendors = function(r) {
        I.getVendorsInDomain().forEach(function(e, t) {
            var o, n;
            f.isAlwaysActiveGroup(e.groupRef) || (o = document.getElementById("ot-vendor-id-" + t), n = document.getElementById("ot-vs-lst-id-" + t), O.toggleVendorService(e.groupRef.CustomGroupId, t, r, o), O.toggleVendorService(e.groupRef.CustomGroupId, t, r, n))
        })
    }, nr.prototype.hideVendorList = function() {
        c.removeListeners(), c.clearUIElementsInMain()
    }, nr.prototype.addListeners = function() {
        P("#onetrust-pc-sdk " + k.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", c.toggleVendorHandler), P("#onetrust-pc-sdk").on("click", ".ot-vs-list", w.onCategoryItemToggle.bind(this))
    }, nr.prototype.removeListeners = function() {
        var e;
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
            return e.removeEventListener("click", w.toggleGroupORVendorHandler)
        }), null != (e = document.querySelector("#onetrust-pc-sdk .ot-vs-list")) && e.removeEventListener("click", w.onCategoryItemToggle)
    }, nr.prototype.toggleVendorHandler = function(e) {
        w.toggleVendorFromListHandler(e), c.checkAllowAllCheckedValue()
    }, nr.prototype.filterVendorByGroupOrQuery = function() {
        var o = new Map;
        I.getVendorsInDomain().forEach(function(e, t) {
            c.checkVendorConditions(e) && o.set(t, e)
        }), c.showEmptyResults(o.size <= 0, c.searchQuery), c.removeListeners(), c.clearUIElementsInMain(), c.addVSList(o)
    }, nr.prototype.checkVendorConditions = function(e) {
        return !("" !== c.searchQuery && e.ServiceName.toLowerCase().indexOf(c.searchQuery.toLowerCase()) < 0 || 0 < c.filterGroups.length && c.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }, nr.prototype.addVSList = function(e) {
        var t = P("#onetrust-pc-sdk " + k.P_Vendor_Content + " .ot-sdk-column"),
            e = O.getVendorListEle(e);
        t.append(e), c.addListeners()
    }, nr.prototype.getGroupsForFilter = function() {
        var t = new Map;
        return I.getVendorsInDomain().forEach(function(e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }), Array.from(t.values())
    }, nr.prototype.clearUIElementsInMain = function() {
        P("#onetrust-pc-sdk " + k.P_Vendor_Content + " ul" + k.P_Host_Cntr).html(""), P("#onetrust-pc-sdk " + k.P_Vendor_Content + " ul" + k.P_Host_Cntr).hide(), P("#onetrust-pc-sdk " + k.P_Vendor_Content + " ul" + k.P_Vendor_Container).html(""), P("#onetrust-pc-sdk " + k.P_Vendor_Content + " ul" + k.P_Vendor_Container).hide();
        var e = P("#onetrust-pc-sdk " + k.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }, nr.prototype.setHeader = function() {
        var e = A.VendorServiceConfig.PCVSListTitle,
            t = document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Title);
        t && (t.innerText = e)
    }, nr.prototype.setSearchInput = function() {
        var e = A.PCenterCookieListSearch,
            t = A.PCenterCookieSearchAriaLabel,
            o = P("#onetrust-pc-sdk " + k.P_Vendor_Search_Input);
        o.el[0].placeholder = e, o.attr("aria-label", t)
    }, nr.prototype.setHeaderUIConsent = function() {
        var e, t, o;
        P("#onetrust-pc-sdk " + k.P_Select_Cntr).addClass("ot-vnd-list-cnt"), P("#onetrust-pc-sdk " + k.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"), A.PCCategoryStyle === Se.Toggle && (P("#onetrust-pc-sdk " + k.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"), A.PCAccordionStyle === le.Caret) && P("#onetrust-pc-sdk " + k.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf"), P("#onetrust-pc-sdk " + k.P_Leg_Select_All).hide(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Host_El).hide(), P("#onetrust-pc-sdk " + k.P_Host_Cntr).hide(), P(k.P_Vendor_List + " #select-all-text-container").hide(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Leg_El).hide(), P("#onetrust-pc-sdk " + k.P_Vendor_Container).show(), P("#onetrust-pc-sdk " + k.P_Select_Cntr).show(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Consent_El).show("inline-block"), P("#onetrust-pc-sdk " + k.P_Vendor_List).removeClass(k.P_Host_UI), P("#onetrust-pc-sdk " + k.P_Vendor_Content).removeClass(k.P_Host_Cnt), document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr") || ((e = document.createElement("h4")).className = "sel-all-hdr", e.textContent = (null == (t = A.VendorServiceConfig) ? void 0 : t.PCVSAllowAllText) || "PCVSAllowAllText", t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"), o = A.PCCategoryStyle === Se.Checkbox ? "beforeend" : "afterbegin", t.insertAdjacentElement(o, e)), c.checkAllowAllCheckedValue()
    }, nr.prototype.checkAllowAllCheckedValue = function() {
        var t = !0,
            e = (I.vsConsent.forEach(function(e) {
                e || (t = !1)
            }), document.getElementById("#select-all-vendor-groups-handler"));
        v.setCheckedAttribute(null, e, t)
    };
    var c, or = nr;

    function nr() {
        this.searchQuery = "", this.filterGroups = []
    }
    r.prototype.initCookieSettingHandlers = function() {
        P(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }, r.prototype.initFlgtCkStgBtnEventHandlers = function() {
        P(".ot-floating-button__open").on("click", function(e) {
            setTimeout(function() {
                w.floatingCookieSettingOpenBtnClicked(e)
            }, 0)
        }), P(".ot-floating-button__close").on("click", function(e) {
            setTimeout(function() {
                w.floatingCookieSettingCloseBtnClicked(e)
            }, 0)
        })
    }, r.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        P(w.fltgBtnSltr).addClass("ot-pc-open"), A.cookiePersistentLogo.includes("ot_guard_logo.svg") && P(w.fltgBtnFSltr).attr(ht, "true"), P(w.fltgBtnBSltr).attr(ht, ""), P(w.fltgBtnFrontBtn).el[0].setAttribute(ht, !0), P(w.fltgBtnFrontBtn).el[0].style.display = "none", P(w.fltgBtnBackBtn).el[0].setAttribute(pt, A.AriaClosePreferences), P(w.fltgBtnBackBtn).el[0].setAttribute(ht, !1), P(w.fltgBtnBackBtn).el[0].style.display = "block", _.triggerGoogleAnalyticsEvent(Io, Do), w.showCookieSettingsHandler(e)
    }, r.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        P(w.fltgBtnFrontBtn).el[0].setAttribute(pt, A.AriaOpenPreferences), P(w.fltgBtnFrontBtn).el[0].setAttribute(ht, !1), P(w.fltgBtnFrontBtn).el[0].style.display = "block", P(w.fltgBtnBackBtn).el[0].setAttribute(ht, !0), P(w.fltgBtnBackBtn).el[0].style.display = "none", e && (_.triggerGoogleAnalyticsEvent(Io, Ho), w.hideCookieSettingsHandler(e))
    }, r.prototype.initialiseLegIntBtnHandlers = function() {
        P(document).on("click", ".ot-obj-leg-btn-handler", w.onLegIntButtonClick), P(document).on("click", ".ot-remove-objection-handler", w.onLegIntButtonClick)
    }, r.prototype.initialiseAddtlVenHandler = function() {
        P("#onetrust-pc-sdk #ot-addtl-venlst").on("click", w.selectVendorsGroupHandler), P("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", w.selAllAdtlVenHandler)
    }, r.prototype.initializeGenVenHandlers = function() {
        P("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", w.genVendorToggled), P("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", w.genVendorDetails), P("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", w.selectAllGenVenHandler)
    }, r.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this;
        b.pcName === rt && w.categoryMenuSwitchHandler(), P("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", function(e) {
            setTimeout(function() {
                w.bannerCloseButtonHandler(e)
            }, 0)
        }), P("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", function() {
            setTimeout(function() {
                V.allowAllEventHandler(!0)
            }, 0)
        }), P("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", function() {
            setTimeout(function() {
                V.rejectAllEventHandler(!0)
            }, 0)
        }), P("#onetrust-pc-sdk #close-pc-btn-handler").on("click", function(e) {
            setTimeout(function() {
                w.hideCookieSettingsHandler(e)
            }, 0)
        }), P(document).on("keydown", w.closePCWhenEscPressed), P("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", w.hideCookieSettingsHandler), P("#onetrust-pc-sdk .category-switch-handler").on("click", w.toggleGroupORVendorHandler), P("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", w.toggleSubCategory), P("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
            b.pcName !== rt || e.keyCode !== se.UpArrow && e.keyCode !== se.DownArrow || (e.preventDefault(), A.PCTemplateUpgrade ? w.changeSelectedTabV2(e) : w.changeSelectedTab(e))
        }), P("" + w.PC_SELECTOR).on("click", k.P_Category_Item + " > input:first-child," + k.P_Category_Item + " > button:first-child", w.onCategoryItemToggle.bind(this)), (A.showCookieList || I.showGeneralVendors) && (P("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
            setTimeout(function() {
                I.showGeneralVendors && A.showCookieList ? I.cookieListType = Ce.HostAndGenVen : I.showGeneralVendors ? I.cookieListType = Ce.GenVen : I.cookieListType = Ce.Host, w.pcLinkSource = e.target, w.loadCookieList(e.target)
            }, 0)
        }), y.isOptOutEnabled() ? (P("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", w.selectAllHostsGroupsHandler), P("#onetrust-pc-sdk " + k.P_Host_Cntr).on("click", w.selectHostsGroupHandler)) : P("#onetrust-pc-sdk " + k.P_Host_Cntr).on("click", w.toggleAccordionStatus)), w.addListenerWhenIabEnabled(), w.addEventListenerWhenIsHostOrVendorsAreEnabled(), w.adddListenerWhenNoBanner(), P("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return u(e, void 0, void 0, function() {
                return F(this, function(e) {
                    return I.cookieListType = Ce.GenVen, w.loadCookieList(t.target), [2]
                })
            })
        }), w.addListenerWhenVendorServices()
    }, r.prototype.addEventListenerWhenIsHostOrVendorsAreEnabled = function() {
        var e;
        (A.IsIabEnabled || A.showCookieList || I.showGeneralVendors || I.showVendorService) && (P(document).on("click", ".back-btn-handler", w.backBtnHandler), w.addListenerSearchKeyEvent(), P("#onetrust-pc-sdk #filter-btn-handler").on("click", w.toggleVendorFiltersHandler), P("#onetrust-pc-sdk #filter-apply-handler").on("click", function() {
            setTimeout(function() {
                w.applyFilterHandler()
            }, 0)
        }), P("#onetrust-pc-sdk " + k.P_Fltr_Modal).on("click", w.tglFltrOptionHandler), !S.isV2Template && b.pcName !== nt || P("#onetrust-pc-sdk #filter-cancel-handler").on("click", w.cancelFilterHandler), !S.isV2Template && b.pcName === nt || P("#onetrust-pc-sdk #clear-filters-handler").on("click", w.clearFiltersHandler), S.isV2Template ? P("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), P("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
        }) : P("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), P("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
        }), e = P("#onetrust-pc-sdk .category-filter-handler").el, P(e[0]).on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), P("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
        }))
    }, r.prototype.addListenerSearchKeyEvent = function() {
        P(w.VENDOR_SEARCH_SELECTOR).on("keyup", function(e) {
            e = e.target.value.trim();
            w.currentSearchInput !== e && (I.showVendorService ? c.filterVendorByString(e) : w.isCookieList ? (N.searchHostList(e), I.showTrackingTech && w.addEventAdditionalTechnologies()) : (N.loadVendorList(e, []), A.UseGoogleVendors && N.searchVendors(N.googleSearchSelectors, I.addtlVendorsList, me.GoogleVendor, e), I.showGeneralVendors && A.GeneralVendors.length && N.searchVendors(N.genVendorSearchSelectors, A.GeneralVendors, me.GeneralVendor, e)), N.playSearchStatus(w.isCookieList), w.currentSearchInput = e)
        })
    }, r.prototype.addListenerWhenIabEnabled = function() {
        A.IsIabEnabled && (P("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
            setTimeout(function() {
                w.pcLinkSource = e.target, w.showVendorsList(e.target)
            }, 0)
        }), P("#onetrust-pc-sdk .ot-pgph-link").on("click", function(e) {
            w.pcLinkSource = e.target, w.showIllustrations(e.target)
        }), P("#onetrust-pc-sdk " + k.P_Vendor_Container).on("click", w.selectVendorsGroupHandler), A.UseGoogleVendors || w.bindSelAllHandlers(), w.initialiseLegIntBtnHandlers())
    }, r.prototype.adddListenerWhenNoBanner = function() {
        A.NoBanner && (A.OnClickCloseBanner && document.body.addEventListener("click", V.bodyClickEvent), A.ScrollCloseBanner) && window.addEventListener("scroll", V.scrollCloseBanner)
    }, r.prototype.addListenerWhenVendorServices = function() {
        I.showVendorService && (w.bindSelAllHandlers(), P("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
            setTimeout(function() {
                w.showVendorsList(null, !0)
            }, 0)
        }))
    }, r.prototype.bindSelAllHandlers = function() {
        P("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", w.selectAllVendorsLegIntHandler), P("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", w.SelectAllVendorConsentHandler)
    }, r.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event), Rn.getInstance().resetHealthSignatureData(), _.triggerGoogleAnalyticsEvent(Io, Vo), rn.removeAddedOTCssStyles(nn.PC), un.hideConsentNoticeV2(), P(document).off("keydown", w.closePCWhenEscPressed), w.getResizeElement().removeEventListener("resize", w.setCenterLayoutFooterHeight), window.removeEventListener("resize", w.setCenterLayoutFooterHeight), !S.isV2Template && b.pcName !== nt || w.closeFilter(!1), b.pcName === tt && P("#onetrust-pc-sdk " + k.P_Content).removeClass("ot-hide"), V.hideVendorsList(), G.csBtnGroup && (P(w.fltgBtnSltr).removeClass("ot-pc-open"), w.floatingCookieSettingCloseBtnClicked(null)), w.confirmPC(e), V.resetConsent(), !1
    }, r.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked,
            e = P("#onetrust-pc-sdk #" + k.P_Sel_All_Host_El).el[0],
            o = e.classList.contains("line-through"),
            n = P("#onetrust-pc-sdk .host-checkbox-handler").el;
        v.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var r = 0; r < n.length; r++) n[r].getAttribute("disabled") || v.setCheckedAttribute(null, n[r], t);
        I.optanonHostList.forEach(function(e) {
            To.updateHostStatus(e, t)
        }), n.forEach(function(e) {
            yo.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }), o && e.classList.remove("line-through")
    }, r.prototype.selectHostsGroupHandler = function(e) {
        w.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"),
            o = e.target.getAttribute("ckType"),
            n = e.target.checked;
        null !== t && (o === ge.GenVendor ? (o = A.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name, _.triggerGoogleAnalyticsEvent(Io, n ? Mo : qo, o + ": VEN_" + t), yo.updateGenVendorStatus(t, n)) : (o = v.findIndex(I.optanonHostList, function(e) {
            return e.HostId === t
        }), o = I.optanonHostList[o], w.toggleHostStatus(o, n)), v.setCheckedAttribute(null, e.target, n))
    }, r.prototype.onCategoryItemToggle = function(e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (b.pcName === tt && this.setPcListContainerHeight(), w.toggleAccordionStatus(e))
    }, r.prototype.toggleAccordionStatus = function(e) {
        var t, e = e.target;
        e && e.getAttribute("aria-expanded") && (t = "true" === e.getAttribute("aria-expanded") ? "false" : "true", e.setAttribute("aria-expanded", t))
    }, r.prototype.toggleHostStatus = function(e, t) {
        _.triggerGoogleAnalyticsEvent(Io, t ? Uo : jo, e.HostName + ": H_" + e.HostId), To.updateHostStatus(e, t)
    }, r.prototype.toggleBannerOptions = function(e) {
        P(".banner-option-input").each(function(e) {
            P(e).el.setAttribute("aria-expanded", !1)
        }), w.toggleAccordionStatus(e)
    }, r.prototype.bannerCloseButtonHandler = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                return P(document).off("keydown", w.shiftBannerFocus), n && n.target && n.target.className && (-1 < (t = n.target.className).indexOf("save-preference-btn-handler") ? (I.bannerCloseSource = $.ConfirmChoiceButton, _.triggerGoogleAnalyticsEvent(Io, No)) : -1 < t.indexOf("banner-close-button") ? (I.bannerCloseSource = $.BannerCloseButton, o = _o, -1 < t.indexOf("ot-close-link") && (o = Eo, I.bannerCloseSource = $.ContinueWithoutAcceptingButton), _.triggerGoogleAnalyticsEvent(Io, o)) : -1 < t.indexOf("ot-bnr-save-handler") && (I.bannerCloseSource = $.BannerSaveSettings, _.triggerGoogleAnalyticsEvent(Io, Oo))), rn.removeAddedOTCssStyles(), V.hideVendorsList(), [2, V.bannerCloseButtonHandler()]
            })
        })
    }, r.prototype.onLegIntButtonClick = function(e) {
        var t, o, n;
        e && (n = "true" === (e = e.currentTarget).parentElement.getAttribute("is-vendor"), t = e.parentElement.getAttribute("data-group-id"), o = !e.classList.contains("ot-leg-int-enabled"), n ? w.onVendorToggle(t, ce.LI) : (n = f.getGroupById(t)).Parent ? w.updateSubGroupToggles(n, o, !0) : w.updateGroupToggles(n, o, !0), E.updateLegIntBtnElement(e.parentElement, o))
    }, r.prototype.updateGroupToggles = function(t, o, e) {
        To.toggleGroupHosts(t, o), I.genVenOptOutEnabled && To.toggleGroupGenVendors(t, o), t.IsLegIntToggle = e, w.toggleGroupStatus(t, o), t.SubGroups && t.SubGroups.length && (b.bannerName === Ze && S.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle, E.toggleGrpStatus(e, o), e.IsLegIntToggle = !1, To.toggleGroupHosts(e, o), I.genVenOptOutEnabled && To.toggleGroupGenVendors(e, o), O.setVendorStateByGroup(e, o)
        }) : E.toogleAllSubGrpElements(t, o), t.SubGroups.forEach(function(e) {
            return O.setVendorStateByGroup(e, o)
        })), O.setVendorStateByGroup(t, o), this.allowAllVisible(E.setAllowAllButton()), t.IsLegIntToggle = !1
    }, r.prototype.toggleGroupStatus = function(e, t) {
        var o;
        b.requireSignatureEnabled && e.needsHealthSignature ? (o = !1, t ? (b.healthSignatureData && (o = !0), b.healthSignatureGroup = e) : b.healthSignatureGroup = null, E.toggleGrpStatus(e, o)) : E.toggleGrpStatus(e, t)
    }, r.prototype.updateSubGroupToggles = function(e, t, o) {
        To.toggleGroupHosts(e, t), I.genVenOptOutEnabled && To.toggleGroupGenVendors(e, t);
        var n = f.getGroupById(e.Parent),
            o = (e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle, E.isGroupActive(n));
        t ? (E.toggleGrpStatus(e, !0), E.isAllSubgroupsEnabled(n) && !o && (E.toggleGrpStatus(n, !0), To.toggleGroupHosts(n, t), I.genVenOptOutEnabled && To.toggleGroupGenVendors(n, t), E.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (E.toggleGrpStatus(e, !1), E.isAllSubgroupsDisabled(n) && o ? (E.toggleGrpStatus(n, !1), To.toggleGroupHosts(n, t), I.genVenOptOutEnabled && To.toggleGroupGenVendors(n, t), E.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (E.toggleGrpStatus(n, !1), To.toggleGroupHosts(n, !1), I.genVenOptOutEnabled && To.toggleGroupGenVendors(n, t), E.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(E.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, r.prototype.hideCategoryContainer = function(e) {
        this.isCookieList = e = void 0 === e ? !1 : e, w.addHideClassContainer(), I.showVendorService ? c.setHeaderConfig() : (e ? w.setCookieListTemplate() : w.setVendorListTemplate(), Un.setFilterList(e))
    }, r.prototype.setCookieListTemplate = function() {
        var e = S.isV2Template;
        P(k.P_Vendor_List + " #select-all-text-container").show("inline-block"), P("#onetrust-pc-sdk " + k.P_Host_Cntr).show(), y.isOptOutEnabled() ? P("#onetrust-pc-sdk #" + k.P_Sel_All_Host_El).show("inline-block") : P("#onetrust-pc-sdk #" + k.P_Sel_All_Host_El).hide(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Leg_El).hide(), P("#onetrust-pc-sdk " + k.P_Leg_Header).hide(), e || P("#onetrust-pc-sdk " + k.P_Leg_Select_All).hide(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Consent_El).hide(), P("#onetrust-pc-sdk  " + k.P_Vendor_Container).hide(), (A.UseGoogleVendors || I.showGeneralVendors) && P("#onetrust-pc-sdk .ot-acc-cntr").hide(), P("#onetrust-pc-sdk " + k.P_Vendor_List).addClass(k.P_Host_UI), P("#onetrust-pc-sdk " + k.P_Vendor_Content).addClass(k.P_Host_Cnt)
    }, r.prototype.setVendorListTemplate = function() {
        P("#onetrust-pc-sdk " + k.P_Vendor_Container).show(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Consent_El).show("inline-block"), A.UseGoogleVendors && P("#onetrust-pc-sdk .ot-acc-cntr").show(), b.legIntSettings.PAllowLI && b.isIab2orv2Template ? (P("#onetrust-pc-sdk " + k.P_Select_Cntr).show(S.isV2Template ? void 0 : "inline-block"), P("#onetrust-pc-sdk " + k.P_Leg_Select_All).show("inline-block"), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Leg_El).show("inline-block"), P(k.P_Vendor_List + " #select-all-text-container").hide(), b.legIntSettings.PShowLegIntBtn ? (P("#onetrust-pc-sdk " + k.P_Leg_Header).hide(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Leg_El).hide()) : P("#onetrust-pc-sdk " + k.P_Leg_Header).show()) : (P("#onetrust-pc-sdk " + k.P_Select_Cntr).show(), P(k.P_Vendor_List + " #select-all-text-container").show("inline-block"), P("#onetrust-pc-sdk " + k.P_Leg_Select_All).hide(), P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Leg_El).hide()), P("#onetrust-pc-sdk #" + k.P_Sel_All_Host_El).hide(), P("#onetrust-pc-sdk " + k.P_Host_Cntr).hide(), P("#onetrust-pc-sdk " + k.P_Vendor_List).removeClass(k.P_Host_UI), P("#onetrust-pc-sdk " + k.P_Vendor_Content).removeClass(k.P_Host_Cnt)
    }, r.prototype.showAllVendors = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, w.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), w.showVendorsList(null, !0), I.isPCVisible ? [3, 3] : [4, w.showCookieSettingsHandler(t)];
                    case 2:
                        e.sent(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, r.prototype.fetchAndSetupPC = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return S.moduleInitializer.IsSuppressPC && 0 === P("" + w.PC_SELECTOR).length ? [4, Dt.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), G.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, S.isV2Template = A.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (t = document.getElementById("onetrust-style")).innerHTML += G.preferenceCenterGroup.css, t.innerHTML += Qt.addCustomPreferenceCenterCSS(), B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), A.IsIabEnabled && N.InitializeVendorList(), e.label = 2;
                    case 2:
                        return 0 !== P("" + w.PC_SELECTOR).length && A.PCTemplateUpgrade && (t = document.querySelector("#onetrust-pc-sdk .ot-optout-signal"), B.setOptOutSignalVisibility(t)), [2]
                }
            })
        })
    }, r.prototype.setVendorContent = function() {
        P("" + w.FILTER_COUNT_SELECTOR).text(I.filterByIABCategories.length.toString()), N.loadVendorList("", I.filterByIABCategories), A.UseGoogleVendors && (I.vendorDomInit ? N.resetAddtlVendors() : (N.initGoogleVendors(), P("" + w.PC_SELECTOR).on("click", ".ot-acc-cntr > button", w.toggleAccordionStatus.bind(this)))), I.vendorDomInit || (I.vendorDomInit = !0, w.initialiseLegIntBtnHandlers(), A.UseGoogleVendors && (w.initialiseAddtlVenHandler(), w.bindSelAllHandlers())), I.showGeneralVendors && !I.genVendorDomInit && (I.genVendorDomInit = !0, N.initGenVendors(), w.initializeGenVenHandlers(), A.UseGoogleVendors || (w.bindSelAllHandlers(), P("" + w.PC_SELECTOR).on("click", ".ot-acc-cntr > button", w.toggleAccordionStatus.bind(this))))
    }, r.prototype.addEventAdditionalTechnologies = function() {
        var e = document.querySelectorAll("#onetrust-pc-sdk .ot-acc-cntr.ot-add-tech > button");
        0 < e.length && (P(e).off("click", w.toggleAccordionStatus), P(e).on("click", w.toggleAccordionStatus))
    }, r.prototype.showVendorsList = function(e, t) {
        return void 0 === t && (t = !1), I.cookieListType = null, w.hideCategoryContainer(!1), rn.addOTCssPropertiesToBody(nn.PC, {}), I.showVendorService ? c.showVSList() : (t || (t = e.getAttribute("data-parent-id")) && (t = f.getGroupById(t)) && (t = M(t.SubGroups, [t]).reduce(function(e, t) {
            return -1 < St.indexOf(t.Type) && e.push(t.CustomGroupId), e
        }, []), I.filterByIABCategories = M(I.filterByIABCategories, t)), w.setVendorContent(), fn.updateFilterSelection(!1)), I.pcLayer = ie.VendorList, e && Ao.setPCFocus(Ao.getPCElements()), this.setSearchInputFocus(), !1
    }, r.prototype.showIllustrations = function(e) {
        e = e.getAttribute("data-parent-id"), e = f.getGroupById(e);
        I.cookieListType = null, I.pcLayer = ie.IabIllustrations, w.addHideClassContainer(), Jn.showIllustrations(e.GroupName, e.IabIllustrations), Ao.setPCFocus(Ao.getPCElements())
    }, r.prototype.addHideClassContainer = function() {
        var e = b.pcName;
        A.PCTemplateUpgrade ? P("#onetrust-pc-sdk " + k.P_Content).addClass("ot-hide") : P("#onetrust-pc-sdk .ot-main-content").hide(), P("#onetrust-pc-sdk " + k.P_Vendor_List).removeClass("ot-hide"), e !== nt && e !== tt && P("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), e === tt && d(P("" + w.PC_SELECTOR).el[0], 'height: "";', !0)
    }, r.prototype.loadCookieList = function(e) {
        I.filterByCategories = [], w.hideCategoryContainer(!0);
        var t, e = e && e.getAttribute("data-parent-id");
        return e && (t = f.getGroupById(e), I.filterByCategories.push(e), t.SubGroups.length) && t.SubGroups.forEach(function(e) {
            -1 === St.indexOf(e.Type) && (e = e.CustomGroupId, I.filterByCategories.indexOf(e) < 0) && I.filterByCategories.push(e)
        }), N.loadHostList("", I.filterByCategories), I.showTrackingTech && w.addEventAdditionalTechnologies(), P("" + w.FILTER_COUNT_SELECTOR).text(I.filterByCategories.length.toString()), fn.updateFilterSelection(!0), I.pcLayer = ie.CookieList, Ao.setPCFocus(Ao.getPCElements()), this.setSearchInputFocus(), !1
    }, r.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = P(k.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            r = e.target.checked,
            i = {};
        I.vendors.selectedLegIntVendors.map(function(e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            v.setCheckedAttribute(null, n[s], r), A.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? A.PCActiveText : A.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid"),
                l = i[a];
            void 0 === l && (l = a), I.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"), v.setCheckedAttribute(null, e.target, r)
    }, r.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = P("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = P("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++) v.setCheckedAttribute(null, n[i], r), A.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? A.PCActiveText : A.PCInactiveText);
        r ? A.UseGoogleVendors && Object.keys(I.addtlVendorsList).forEach(function(e) {
            I.addtlVendors.vendorSelected[e] = !0
        }) : I.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, r.prototype.selectAllGenVenHandler = function(e) {
        e = e.target.checked;
        w.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", e)
    }, r.prototype.selectAllHandler = function(e, t, o) {
        for (var n = P(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = P(e.vendorBoxes).el, s = 0; s < i.length; s++) "genven" === t && !o && I.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (v.setDisabledAttribute(null, i[s], !0), v.setCheckedAttribute(null, i[s], !0)) : v.setCheckedAttribute(null, i[s], o), A.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText);
        o ? "googleven" === t && A.UseGoogleVendors ? Object.keys(I.addtlVendorsList).forEach(function(e) {
            I.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && I.showGeneralVendors && A.GeneralVendors.forEach(function(e) {
            I.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? I.addtlVendors.vendorSelected = {} : (I.genVendorsConsent = {}, I.alwaysActiveGenVendors.forEach(function(e) {
            I.genVendorsConsent[e] = !0
        })), r && n.classList.remove("line-through")
    }, r.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = e.target.checked;
        if (I.showVendorService) c.toggleVendors(t);
        else {
            var o = P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Consent_El).el[0],
                n = o.classList.contains("line-through"),
                r = P(k.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
                i = {};
            I.vendors.selectedVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                v.setCheckedAttribute(null, r[s], t), A.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? A.PCActiveText : A.PCInactiveText);
                var a = r[s].getAttribute("vendorid"),
                    l = i[a];
                void 0 === l && (l = a), I.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        v.setCheckedAttribute(null, e.target, t)
    }, r.prototype.onVendorToggle = function(o, e) {
        var t = I.vendors,
            n = I.addtlVendors,
            r = e === ce.LI ? t.selectedLegIntVendors : e === ce.AddtlConsent ? [] : t.selectedVendors,
            i = !1,
            s = Number(o);
        r.some(function(e, t) {
            e = e.split(":");
            if (e[0] === o) return s = t, i = "true" === e[1], !0
        }), e === ce.LI ? (_.triggerGoogleAnalyticsEvent(Io, i ? Jo : Xo, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": " + T.IdPatterns.Pur + o), t.selectedLegIntVendors[s] = o + ":" + !i, b.legIntSettings.PShowLegIntBtn || N.vendorLegIntToggleEvent()) : e === ce.AddtlConsent ? (n.vendorSelected[o] ? delete n.vendorSelected[o] : n.vendorSelected[o] = !0, N.venAdtlSelAllTglEvent()) : (_.triggerGoogleAnalyticsEvent(Io, i ? Yo : Wo, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": " + T.IdPatterns.Pur + o), t.selectedVendors[s] = o + ":" + !i, N.vendorsListEvent())
    }, r.prototype.onVendorDisclosure = function(o) {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = I.discVendors)[o].isFetched ? [3, 2] : (t[o].isFetched = !0, [4, Dt.getStorageDisclosure(t[o].disclosureUrl)]);
                    case 1:
                        t = e.sent(), N.updateVendorDisclosure(o, t), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, r.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && v.setCheckedAttribute(null, e.target, e.target.checked)
    }, r.prototype.selectVendorsGroupHandler = function(e) {
        w.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
            o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"),
            r = e.target.getAttribute("disc-vid");
        t ? w.onVendorToggle(t, ce.LI) : o ? w.onVendorToggle(o, ce.Consent) : n && w.onVendorToggle(n, ce.AddtlConsent), r && w.onVendorDisclosure(r), (t || o || n) && (v.setCheckedAttribute(null, e.target, e.target.checked), A.PCShowConsentLabels) && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? A.PCActiveText : A.PCInactiveText)
    }, r.prototype.toggleVendorFiltersHandler = function() {
        var e, t = !1,
            o = P("#onetrust-pc-sdk " + k.P_Fltr_Modal).el[0];
        switch (b.pcName) {
            case ot:
            case et:
            case tt:
            case rt:
                (t = "block" === o.style.display) ? w.closeFilter(): (e = P("#onetrust-pc-sdk " + k.P_Triangle).el[0], P(e).attr("style", "display: block;"), P(o).attr("style", "display: block;"), e = Array.prototype.slice.call(o.querySelectorAll("[href], input, button")), Ao.setPCFocus(e));
                break;
            case nt:
                896 < window.innerWidth || 896 < window.screen.height ? d(o, "width: 400px;", !0) : d(o, "height: 100%; width: 100%;"), o.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        S.isV2Template && !t && (P("#onetrust-pc-sdk").addClass("ot-shw-fltr"), P("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, r.prototype.clearFiltersHandler = function() {
        w.setAriaLabelforButtonInFilter(A.PCenterFilterClearedAria);
        for (var e = P("#onetrust-pc-sdk " + k.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) v.setCheckedAttribute(null, e[t], !1);
        w.isCookieList ? I.filterByCategories = [] : I.filterByIABCategories = []
    }, r.prototype.cancelFilterHandler = function() {
        I.showVendorService ? c.cancelFilter() : w.isCookieList ? fn.cancelHostFilter() : N.cancelVendorFilter(), w.closeFilter(), P("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, r.prototype.applyFilterHandler = function() {
        var e;
        w.setAriaLabelforButtonInFilter(A.PCenterFilterAppliedAria), I.showVendorService ? (e = c.getGroupsFilter(), c.filterVendorByGroup(e)) : w.isCookieList ? (e = fn.updateHostFilterList(), N.loadHostList("", e), I.showTrackingTech && w.addEventAdditionalTechnologies()) : (e = N.updateVendorFilterList(), N.loadVendorList("", e)), P("" + w.FILTER_COUNT_SELECTOR).text(String(e.length)), w.closeFilter(), P("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, r.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = I.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
        if (!t) {
            (t = document.createElement("span")).classList.add("ot-scrn-rdr"), t.setAttribute("aria-atomic", "true");
            var o = void 0;
            if (I.isPCVisible ? o = document.getElementById(w.pcSDKSelector) : document.getElementById(w.bannerSelector) && (o = document.getElementById(w.bannerSelector)), !o) return;
            o.appendChild(t)
        }
        t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-relevant", "additions"), t.setAttribute("aria-live", "assertive"), t.setAttribute(pt, e), w.timeCallback && clearTimeout(w.timeCallback), w.timeCallback = setTimeout(function() {
            w.timeCallback = null, t.setAttribute(pt, "")
        }, 900)
    }, r.prototype.setPcListContainerHeight = function() {
        P("#onetrust-pc-sdk " + k.P_Content).el[0].classList.contains("ot-hide") ? d(P("" + w.PC_SELECTOR).el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !P("#onetrust-pc-sdk " + k.P_Content).el[0].scrollHeight || P("#onetrust-pc-sdk " + k.P_Content).el[0].scrollHeight >= e ? d(P("" + w.PC_SELECTOR).el[0], "height: " + e + "px;", !0) : d(P("" + w.PC_SELECTOR).el[0], "height: auto;", !0)
        })
    }, r.prototype.changeSelectedTab = function(e) {
        var t, o = P("#onetrust-pc-sdk .category-menu-switch-handler"),
            n = 0,
            r = P(o.el[0]);
        o.each(function(e, t) {
            P(e).el.classList.contains(k.P_Active_Menu) && (n = t, P(e).el.classList.remove(k.P_Active_Menu), r = P(e))
        }), e.keyCode === se.DownArrow ? t = n + 1 >= o.el.length ? P(o.el[0]) : P(o.el[n + 1]) : e.keyCode === se.UpArrow && (t = P(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
    }, r.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement,
            e = (e.keyCode === se.DownArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === se.UpArrow && (t = o.previousElementSibling || o.parentElement.lastChild), t.querySelector(".category-menu-switch-handler"));
        e.focus(), this.groupTabClick(e)
    }, r.prototype.categoryMenuSwitchHandler = function() {
        for (var o = this, e = P("#onetrust-pc-sdk .category-menu-switch-handler").el, n = this, t = 0; t < e.length; t++) ! function(t) {
            e[t].addEventListener("click", n.groupTabClick), e[t].addEventListener("keydown", function(e) {
                if (1 <= t && e.shiftKey && 9 === e.keyCode && !A.ShowPreferenceCenterCloseButton && A.PCLayout.Tab && (e.preventDefault(), Ao.lastItem.focus()), 32 === e.keyCode || "space" === e.code) return o.groupTabClick(e.currentTarget), e.preventDefault(), !1
            })
        }(t)
    }, r.prototype.groupTabClick = function(e) {
        var t = P("#onetrust-pc-sdk " + k.P_Grp_Container).el[0],
            o = t.querySelector("." + k.P_Active_Menu),
            e = e.currentTarget || e,
            n = e.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(k.P_Active_Menu), t.querySelector(k.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + n).classList.remove("ot-hide"), e.setAttribute("tabindex", 0), e.setAttribute("aria-selected", !0), e.classList.add(k.P_Active_Menu)
    }, r.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + k.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + k.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(k.P_Active_Menu)
    }, r.prototype.closeFilter = function(e) {
        var t, o;
        void 0 === e && (e = !0), un.checkIfPcSdkContainerExist() || (t = P("#onetrust-pc-sdk " + k.P_Fltr_Modal).el[0], o = P("#onetrust-pc-sdk " + k.P_Triangle).el[0], b.pcName === nt ? 896 < window.innerWidth || 896 < window.screen.height ? d(t, "width: 0;", !0) : d(t, "height: 0;") : d(t, "display: none;"), o && P(o).attr("style", "display: none;"), S.isV2Template && P("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && Ao.setFirstAndLast(Ao.getPCElements()))
    }, r.prototype.setBackButtonFocus = function() {
        P("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, r.prototype.setSearchInputFocus = function() {
        P(w.VENDOR_SEARCH_SELECTOR).el[0].focus()
    }, r.prototype.setCenterLayoutFooterHeight = function() {
        var e = w.pc;
        if (w.setMainContentHeight(), b.pcName === rt && e) {
            var t = e.querySelectorAll("" + k.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + k.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
            else e.querySelector(".category-menu-switch-handler + " + k.P_Desc_Container) && 640 < window.innerWidth && P(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, r.prototype.setMainContentHeight = function() {
        var e = this.pc,
            t = e.querySelector(".ot-pc-footer"),
            o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"),
            r = n[n.length - 1],
            i = A.PCLayout,
            r = (e.classList.remove("ot-ftr-stacked"), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"), A.PCTemplateUpgrade || i.Center || (n = e.clientHeight - t.clientHeight - o.clientHeight - 3, A.PCTemplateUpgrade && !i.Tab && A.PCenterVendorListDescText && (n = n - ((r = P("#vdr-lst-dsc").el).length && r[0].clientHeight) - 10), d(e.querySelector("" + k.P_Vendor_List), "height: " + n + "px;", !0)), e.querySelector("" + k.P_Content));
        A.PCTemplateUpgrade && i.Center ? (n = 600 < window.innerWidth && 475 < window.innerHeight, !this.pcBodyHeight && n && (this.pcBodyHeight = r.scrollHeight), n ? (i = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20) > .8 * window.innerHeight || 0 === this.pcBodyHeight ? d(e, "height: " + .8 * window.innerHeight + "px;", !0) : d(e, "height: " + i + "px;", !0) : d(e, "height: 100%;", !0)) : d(e.querySelector("" + k.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }, r.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && A.PCLayout.Tab && A.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(), this.allowVisible = e)
    }, r.prototype.restorePc = function() {
        I.pcLayer === ie.CookieList ? (w.hideCategoryContainer(!0), N.loadHostList("", I.filterByCategories), I.showTrackingTech && w.addEventAdditionalTechnologies(), P("" + w.FILTER_COUNT_SELECTOR).text(I.filterByCategories.length.toString())) : I.pcLayer === ie.VendorList && (w.hideCategoryContainer(!1), w.setVendorContent()), I.isPCVisible = !1, w.toggleInfoDisplay(), I.pcLayer !== ie.VendorList && I.pcLayer !== ie.CookieList || (fn.updateFilterSelection(I.pcLayer === ie.CookieList), w.setBackButtonFocus(), Ao.setPCFocus(Ao.getPCElements()))
    }, r.prototype.toggleInfoDisplay = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return G.csBtnGroup && (P(w.fltgBtnSltr).addClass("ot-pc-open"), w.otGuardLogoPromise.then(function() {
                            A.cookiePersistentLogo.includes("ot_guard_logo.svg") && P(w.fltgBtnFSltr).attr(ht, "true")
                        }), P(w.fltgBtnBSltr).attr(ht, ""), P(w.fltgBtnBackBtn).el[0].style.display = "block"), [4, w.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), b.pcName === tt && this.setPcListContainerHeight(), void 0 !== I.pcLayer && I.pcLayer !== ie.Banner || (I.pcLayer = ie.PrefCenterHome), t = P("" + w.PC_SELECTOR).el[0], P(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), I.isPCVisible || (un.showConsentNotice(), I.isPCVisible = !0, A.PCTemplateUpgrade && (this.pc = t, t = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = t && 0 < t.clientHeight, this.setCenterLayoutFooterHeight(), w.getResizeElement().addEventListener("resize", w.setCenterLayoutFooterHeight), window.addEventListener("resize", w.setCenterLayoutFooterHeight)), P(document).on("keydown", w.closePCWhenEscPressed)), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                            OneTrustPCLoaded: "yes"
                        })), w.captureInitialConsent(), b.requireSignatureEnabled && Rn.getInstance().setConsentIdInPC(), [2]
                }
            })
        })
    }, r.prototype.close = function(t) {
        return u(this, void 0, void 0, function() {
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return A.BCloseButtonType === ke.Link ? I.bannerCloseSource = $.ContinueWithoutAcceptingButton : I.bannerCloseSource = $.BannerCloseButton, [4, V.bannerCloseButtonHandler(t)];
                    case 1:
                        return e.sent(), w.getResizeElement().removeEventListener("resize", w.setCenterLayoutFooterHeight), window.removeEventListener("resize", w.setCenterLayoutFooterHeight), [2]
                }
            })
        })
    }, r.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, r.prototype.initializeAlartHtmlAndHandler = function() {
        I.skipAddingHTML = 0 < P("#onetrust-banner-sdk").length, I.skipAddingHTML || $n.insertAlertHtml(), this.initialiseAlertHandlers()
    }, r.prototype.initialiseAlertHandlers = function() {
        var e = this,
            t = ($n.showBanner(), A.ForceConsent && !y.isCookiePolicyPage(A.AlertNoticeText) && P(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), A.OnClickCloseBanner && document.body.addEventListener("click", V.bodyClickEvent), A.ScrollCloseBanner && (window.addEventListener("scroll", V.scrollCloseBanner), P(document).on("click", ".onetrust-close-btn-handler", V.rmScrollAndClickBodyEvents), P(document).on("click", "#onetrust-accept-btn-handler", V.rmScrollAndClickBodyEvents), P(document).on("click", "#accept-recommended-btn-handler", V.rmScrollAndClickBodyEvents)), this.addEventListnerForVendorsList(), A.FloatingRoundedIcon && P("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
                I.pcSource = e.currentTarget, w.showCookieSettingsHandler(e)
            }), P("#onetrust-banner-sdk .onetrust-close-btn-handler").on("click", function(e) {
                setTimeout(function() {
                    Rn.getInstance().resetHealthSignatureData(), w.bannerCloseButtonHandler(e)
                }, 0)
            }), P("#onetrust-banner-sdk .ot-bnr-save-handler").on("click", w.bannerCloseButtonHandler), P("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", function(e) {
                setTimeout(function() {
                    w.showCookieSettingsHandler(e)
                }, 0)
            }), P("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", function() {
                setTimeout(function() {
                    V.allowAllEventHandler(!1)
                }, 0)
            }), P("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", function() {
                setTimeout(function() {
                    V.rejectAllEventHandler(!1)
                }, 0)
            }), P("#onetrust-banner-sdk .banner-option-input").on("click", b.bannerName === Xe ? w.toggleBannerOptions : w.toggleAccordionStatus), P("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
                return u(e, void 0, void 0, function() {
                    return F(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return I.cookieListType = Ce.GenVen, [4, w.fetchAndSetupPC()];
                            case 1:
                                return e.sent(), w.loadCookieList(t.target), w.showCookieSettingsHandler(t), [2]
                        }
                    })
                })
            }), P("#onetrust-banner-sdk .category-switch-handler").on("click", w.toggleBannerCategory), document.getElementById("onetrust-banner-sdk"));
        A.ForceConsent && t && "none" !== window.getComputedStyle(t).display && P(document).on("keydown", w.shiftBannerFocus), P("#onetrust-banner-sdk").on("keydown", function(e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || y.findUserType(e)
        })
    }, r.prototype.addEventListnerForVendorsList = function() {
        (A.IsIabEnabled || A.UseGoogleVendors || I.showGeneralVendors) && !I.showVendorService && P(document).on("click", ".onetrust-vendors-list-handler", function(e) {
            setTimeout(function() {
                w.showAllVendors(e)
            }, 0)
        })
    }, r.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }, r.prototype.insertCookieSettingText = function(e) {
        void 0 === e && (e = !1);
        for (var t = A.CookieSettingButtonText, o = P(".ot-sdk-show-settings").el, n = P(".optanon-toggle-display").el, r = 0; r < o.length; r++) P(o[r]).text(t), P(n[r]).text(t);
        e ? (null != (e = document.querySelector(".ot-sdk-show-settings")) && e.addEventListener("click", this.cookiesSettingsBoundListener), null != (e = document.querySelector(".optanon-toggle-display")) && e.addEventListener("click", this.cookiesSettingsBoundListener)) : w.initCookieSettingHandlers()
    }, r.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid"),
            o = (yo.updateGenVendorStatus(t, e.target.checked), A.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            }).Name);
        _.triggerGoogleAnalyticsEvent(Io, e.target.checked ? Mo : qo, o + ": VEN_" + t), N.genVenSelectAllTglEvent()
    }, r.prototype.genVendorDetails = function(e) {
        w.toggleAccordionStatus(e)
    }, r.prototype.confirmPC = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = C.isAlertBoxClosedAndValid(), A.NoBanner && A.ShowPreferenceCenterCloseButton && !t) ? [4, V.bannerCloseButtonHandler()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return o = y.isBannerVisible(), !S.moduleInitializer.MobileSDK || !t && o || w.closePreferenceCenter(n), [2]
                }
            })
        })
    }, r.prototype.captureInitialConsent = function() {
        I.initialGroupsConsent = JSON.parse(JSON.stringify(I.groupsConsent)), I.initialHostConsent = JSON.parse(JSON.stringify(I.hostsConsent)), I.showGeneralVendors && (I.initialGenVendorsConsent = JSON.parse(JSON.stringify(I.genVendorsConsent))), A.IsIabEnabled && (I.initialOneTrustIABConsent = JSON.parse(JSON.stringify(I.oneTrustIABConsent)), I.initialVendors = JSON.parse(JSON.stringify(I.vendors)), I.initialVendors.vendorTemplate = I.vendors.vendorTemplate), A.UseGoogleVendors && (I.initialAddtlVendorsList = JSON.parse(JSON.stringify(I.addtlVendorsList)), I.initialAddtlVendors = JSON.parse(JSON.stringify(I.addtlVendors))), I.vsIsActiveAndOptOut && (I.initialVendorsServiceConsent = new Map(I.vsConsent))
    };
    var w, rr = r;

    function r() {
        var t = this;
        this.allowVisible = !1, this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnSltr = "#ot-sdk-btn-floating", this.PC_SELECTOR = "#onetrust-pc-sdk", this.FILTER_COUNT_SELECTOR = "#onetrust-pc-sdk #filter-count", this.VENDOR_SEARCH_SELECTOR = "#onetrust-pc-sdk #vendor-search-handler", this.isCookieList = !1, this.pc = null, this.currentSearchInput = "", this.pcLinkSource = null, this.pcSDKSelector = "onetrust-pc-sdk", this.bannerSelector = "onetrust-banner-sdk", this.otGuardLogoResolve = null, this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }), this.closePCWhenEscPressed = function(e) {
            var t = document.getElementById(w.pcSDKSelector),
                o = "none" !== window.getComputedStyle(t).display;
            27 === e.keyCode && t && o && ("block" === (t = P("#onetrust-pc-sdk " + k.P_Fltr_Modal).el[0]).style.display || "0px" < t.style.width ? (w.closeFilter(), P("#onetrust-pc-sdk #filter-btn-handler").focus()) : A.NoBanner && !A.ShowPreferenceCenterCloseButton || w.hideCookieSettingsHandler(), w.confirmPC()), (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && y.findUserType(e)
        }, this.showCookieSettingsHandler = function(n) {
            return u(t, void 0, void 0, function() {
                var t, o;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (o = document.getElementById(w.pcSDKSelector), o && "none" !== window.getComputedStyle(o).getPropertyValue("display")) ? [2] : (P(document).on("keydown", w.closePCWhenEscPressed), n && n.stopPropagation(), n && n.target && (o = n.target.className, t = "onetrust-pc-btn-handler" === n.target.id, o = "ot-sdk-show-settings" === o, (t || o) && (o = t ? Bo : wo, _.triggerGoogleAnalyticsEvent(Io, o)), I.pcSource = n.target), [4, w.toggleInfoDisplay()]);
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
            return I.pcLayer === ie.IabIllustrations ? Jn.hideUI() : (I.showVendorService && c.hideVendorList(), I.showTrackingTech && (w.currentSearchInput = "")), V.hideVendorsList(), b.pcName === tt && (P("#onetrust-pc-sdk " + k.P_Content).removeClass("ot-hide"), P("" + w.PC_SELECTOR).el[0].removeAttribute("style"), t.setPcListContainerHeight()), P("" + w.FILTER_COUNT_SELECTOR).text("0"), P(w.VENDOR_SEARCH_SELECTOR).length && (P(w.VENDOR_SEARCH_SELECTOR).el[0].value = ""), I.currentGlobalFilteredList = [], I.filterByCategories = [], I.filterByIABCategories = [], I.vendors.searchParam = "", w.closeFilter(), I.pcLayer = ie.PrefCenterHome, t.pcLinkSource ? (t.pcLinkSource.focus(), t.pcLinkSource = null) : Ao.setPCFocus(Ao.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleGroupORVendorHandler = function(e) {
            var t = e.currentTarget;
            t.dataset.otVsId ? w.toggleVendorServiceHandler.bind(this)(e) : t.dataset.optanongroupid && w.toggleV2Category.bind(this)()
        }, this.toggleVendorFromListHandler = function(e) {
            var e = e.currentTarget,
                t = e.checked,
                o = e.dataset.otVsId,
                e = e.dataset.optanongroupid,
                n = document.getElementById("ot-vendor-id-" + o);
            O.toggleVendorService(e, o, t, n)
        }, this.toggleVendorServiceHandler = function(e) {
            var e = e.currentTarget,
                t = e.checked,
                o = e.dataset.otVsId,
                n = e.dataset.optanongroupid,
                n = (O.toggleVendorService(n, o, t, e), f.getVSById(o));
            w.setAriaLabelforButtonInFilter(n.ServiceName)
        }, this.toggleV2Category = function(e, t, o, n) {
            t || (r = this.getAttribute("data-optanongroupid"), i = "function" == typeof this.getAttribute, a = v.findIndex(I.dataGroupState, function(e) {
                return i && e.CustomGroupId === r
            }), t = I.dataGroupState[a]), void 0 === o && (o = P(this).is(":checked")), A.ChoicesBanner && v.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n ? document.querySelector("#ot-group-id-" + n) && (v.setCheckedAttribute("#ot-group-id-" + n, null, o), s = document.querySelector("#ot-group-id-" + n)) : (v.setCheckedAttribute(null, s = this, o), s.parentElement.querySelector(".ot-switch-nob")), A.PCShowConsentLabels && (s.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText);
            var r, i, s, a = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            w.setAriaLabelforButtonInFilter(t.GroupName), w.updateGroupToggles(t, o, a)
        }, this.toggleBannerCategory = function() {
            var t = this,
                e = v.findIndex(I.dataGroupState, function(e) {
                    return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                }),
                e = I.dataGroupState[e],
                o = P(t).is(":checked");
            w.toggleV2Category(null, e, o, e.CustomGroupId)
        }, this.shiftBannerFocus = function(e) {
            var t = document.getElementById(w.pcSDKSelector),
                o = !1;
            t && (o = "none" !== window.getComputedStyle(t).display), "Tab" !== e.code || o || Ao.handleBannerFocus(e, e.shiftKey)
        }, this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, t = f.getGroupById(t),
                n = (void 0 === o && (o = P(this).is(":checked")), n ? (v.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : v.setCheckedAttribute(null, r = this, o), f.getParentGroup(t.Parent).ShowSubgroup),
                n = (A.PCShowConsentLabels && n && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText), this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out"));
            w.setAriaLabelforButtonInFilter(t.GroupName), w.updateSubGroupToggles(t, o, n), O.setVendorStateByGroup(t, o)
        }
    }
    ar.prototype.initialiseLandingPath = function() {
        var e = C.needReconsent();
        So.isLandingPage() ? So.setLandingPathParam(location.href) : e && !C.awaitingReconsent() ? (So.setLandingPathParam(location.href), g.writeCookieParam(h.OPTANON_CONSENT, p.AWAITING_RE_CONSENT, !0)) : (e || g.writeCookieParam(h.OPTANON_CONSENT, p.AWAITING_RE_CONSENT, !1), So.setLandingPathParam(p.NOT_LANDING_PAGE), b.isSoftOptInMode && !S.moduleInitializer.MobileSDK && _.setAlertBoxClosed(!0), A.NextPageCloseBanner && A.ShowAlertNotice && V.nextPageCloseBanner())
    };
    var ir, sr = ar;

    function ar() {}
    dr.prototype.insertCookiePolicyHtml = function() {
        if (P(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t, o, n = document.createDocumentFragment(),
                r = (G.cookieListGroup && (t = A.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2", o = document.createElement("div"), P(o).html(G.cookieListGroup.html), o.removeChild(o.querySelector(t)), e = o.querySelector(".ot-sdk-cookie-policy"), A.useRTL) && P(e).attr("dir", "rtl"), e.querySelector("#cookie-policy-title").innerHTML = A.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = A.CookieListDescription || "", e.querySelector("section")),
                i = e.querySelector("section tbody tr"),
                s = null,
                a = null;
            A.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"), a = e.querySelector("section.subgroup tbody tr"), P(e).el.removeChild(e.querySelector("section.subgroup"))), P(e).el.removeChild(e.querySelector("section")), !P(this.COOKIE_POLICY_SELECTOR).length && P(this.OPTANON_POLICY_SELECTOR).length ? P(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (P(this.COOKIE_POLICY_SELECTOR).html(""), P(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = A.Groups; l < c.length; l++) {
                var d = c[l],
                    u = {
                        json: A,
                        group: d,
                        sectionTemplate: r,
                        tableRowTemplate: i,
                        cookieList: e,
                        fragment: n
                    };
                if (A.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(u);
                else if (this.insertGroupHTML(u), d.ShowSubgroup)
                    for (var p = 0, h = d.SubGroups; p < h.length; p++) {
                        var g = h[p],
                            g = {
                                json: A,
                                group: g,
                                sectionTemplate: s,
                                tableRowTemplate: a,
                                cookieList: e,
                                fragment: n
                            };
                        this.insertGroupHTML(g)
                    }
            }
        }
    }, dr.prototype.insertGroupHTMLV2 = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o, n = this,
            r = e.json,
            i = e.group,
            s = e.sectionTemplate,
            a = e.tableRowTemplate,
            l = e.cookieList,
            e = e.fragment,
            c = s.cloneNode(!0),
            s = i.SubGroups,
            d = (P(t("tbody")).html(""), i.Hosts.slice()),
            u = i.FirstPartyCookies.slice(),
            p = d.length || u.length ? i.GroupName : "",
            s = (i.ShowSubgroup && s.length ? (o = c.querySelector("section.ot-sdk-subgroup ul li"), s.forEach(function(e) {
                var t = o.cloneNode(!0);
                d = d.concat(e.Hosts), u = u.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (p += "," + e.GroupName), P(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), P(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(n.groupsClass.safeFormattedGroupDescription(e)), P(o.parentElement).append(t)
            }), c.querySelector("section.ot-sdk-subgroup ul").removeChild(o)) : c.removeChild(c.querySelector("section.ot-sdk-subgroup")), A.TTLGroupByTech && (this.setCookieListHeaderOrder(c), this.setCookieListBodyOrder(a)), r.IsLifespanEnabled ? P(t("th.ot-life-span")).el.innerHTML = r.LifespanText : P(t("thead tr")).el.removeChild(P(t("th.ot-life-span")).el), P(t("th.ot-cookies")).el.innerHTML = r.CookiesText, P(t("th.ot-host")).el.innerHTML = r.CategoriesText, P(t("th.ot-cookies-type")).el.innerHTML = r.CookiesUsedText, P(t("th.ot-host-description")).el.innerHTML = r.CookiesDescText, this.transformFirstPartyCookies(u, d, i)),
            h = !1;
        (h = A.TTLGroupByTech ? A.TTLShowTechDesc : s.some(function(e) {
            return e.Description
        })) || P(t("thead tr")).el.removeChild(P(t("th.ot-host-description")).el), P(t(".ot-sdk-cookie-policy-group")).html(i.GroupName), P(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(i)), A.TTLGroupByTech ? this.insertCookieLineByLine({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }) : this.insertHostHtmlV2({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }), 0 === s.length ? c.removeChild(c.querySelector("table")) : P(t("caption")).el.innerHTML = p, P(l).append(c), P(e).append(l), P(this.COOKIE_POLICY_SELECTOR).append(e)
    }, dr.prototype.insertHostHtmlV2 = function(e) {
        for (var l, c = e.json, t = e.hosts, d = e.tableRowTemplate, u = e.showHostDescription, p = e.st, h = this, o = 0, n = t; o < n.length; o++) ! function(e) {
            for (var t = d.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (h.clearCookieRowElement(o), []), r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                var a = s[i],
                    a = ((l = a).IsSession ? n.push(c.LifespanTypeText) : n.push(y.getDuration(l)), l.Name);
                e.Type && (a = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + l.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + l.Name + " " + A.NewWinTxt + '">\n                        ' + l.Name + "\n                    </a>"), r.push(a)
            }
            h.setDataLabelAttribute(o, c), h.createCookieRowHtmlElement({
                host: e,
                subGroupCookie: l,
                trt: o,
                json: c,
                lifespanText: n.join(", "),
                hostType: r.join(", ")
            }), h.removeLifeSpanOrHostDescription(c, u, t, o), P(p("tbody")).append(t)
        }(n[o])
    }, dr.prototype.insertGroupHTML = function(e) {
        function t(e) {
            return l.querySelector(e)
        }
        var o, n = e.json,
            r = e.group,
            i = e.sectionTemplate,
            s = e.tableRowTemplate,
            a = e.cookieList,
            e = e.fragment,
            l = i.cloneNode(!0),
            i = (P(t("caption")).el.innerHTML = r.GroupName, P(t("tbody")).html(""), P(t("thead tr")), n.IsLifespanEnabled ? P(t("th.life-span")).el.innerHTML = n.LifespanText : P(t("thead tr")).el.removeChild(P(t("th.life-span")).el), P(t("th.cookies")).el.innerHTML = n.CookiesText, P(t("th.host")).el.innerHTML = n.CategoriesText, !1);
        if (r.Hosts.some(function(e) {
                return e.description
            }) ? i = !0 : P(t("thead tr")).el.removeChild(P(t("th.host-description")).el), P(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), P(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), 0 < r.FirstPartyCookies.length) {
            P(t(".cookies-used-header")).html(n.CookiesUsedText), P(t(".cookies-list")).html("");
            for (var c = 0; c < r.FirstPartyCookies.length; c++) o = r.FirstPartyCookies[c], P(t(".cookies-list")).append("<li> " + y.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else l.removeChild(t(".cookies-used-header")), l.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: i,
            st: t
        }), P(a).append(l), P(e).append(a), P(this.COOKIE_POLICY_SELECTOR).append(e)
    }, dr.prototype.insertHostHtmlV1 = function(e) {
        for (var l = e.json, t = e.hosts, c = e.tableRowTemplate, d = e.showHostDescription, u = e.st, o = 0, n = t; o < n.length; o++) ! function(e) {
            for (var t = c.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (P(o(".cookies-td ul")).html(""), P(o(".life-span-td ul")).html(""), P(o(".host-td")).html(""), P(o(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> "), 0), r = 0, i = e.Cookies; r < i.length; r++) {
                var s = i[r],
                    a = "",
                    a = s.IsSession ? l.LifespanTypeText : 0 === s.Length ? "<1 " + l.LifespanDurationText || l.PCenterVendorListLifespanDays : s.Length + " " + l.LifespanDurationText || l.PCenterVendorListLifespanDays,
                    a = l.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                P(o(".cookies-td ul")).append("<li> " + s.Name + " " + a + " </li>"), l.IsLifespanEnabled && (a = s.Length ? s.Length + " days" : "N/A", P(o(".life-span-td ul")).append("<li>" + a + "</li>")), 0 === n && (P(o(".host-td")).append('<span class="ot-mobile-border"></span>'), P(o(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + A.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")), n++
            }
            d || t.removeChild(o("td.host-description-td")), P(u("tbody")).append(t)
        }(n[o]);
        0 === t.length && P(u("table")).el.removeChild(P(u("thead")).el)
    }, dr.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this,
            r = t.slice(),
            t = (e.forEach(function(e) {
                n.populateHostGroup(e, r, A.firstPartyTxt)
            }), o.GeneralVendorsIds),
            e = (this.populateGenVendor(t, o, r), o.SubGroups || []);
        return e.length && e.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }), r
    }, dr.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = A.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                var t;
                e.category === o.GroupName && (t = e.isThirdParty ? "" : A.firstPartyTxt, r.populateHostGroup(e, n, t))
            })
        })
    }, dr.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o) return e.Cookies.push(t), !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }, dr.prototype.insertCookieLineByLine = function(e) {
        for (var t = e.json, o = e.hosts, n = e.tableRowTemplate, r = e.showHostDescription, i = e.st, s = 0, a = o; s < a.length; s++)
            for (var l = a[s], c = 0, d = l.Cookies; c < d.length; c++) {
                var u = d[c],
                    p = u.IsSession ? t.LifespanTypeText : y.getDuration(u),
                    h = u.Name,
                    g = (l.Type && (h = '<a href="https://cookiepedia.co.uk/cookies/' + h + '" \n                        rel="noopener" target="_blank" aria-label="' + h + " " + A.NewWinTxt + '">' + h + "\n                    </a>"), n.cloneNode(!0)),
                    C = this.queryToHtmlElement(g);
                this.clearCookieRowElement(C), this.createCookieRowHtmlElement({
                    host: l,
                    subGroupCookie: u,
                    trt: C,
                    json: t,
                    lifespanText: p,
                    hostType: h
                }), this.removeLifeSpanOrHostDescription(t, r, g, C), P(i("tbody")).append(g)
            }
    }, dr.prototype.removeLifeSpanOrHostDescription = function(e, t, o, n) {
        e.IsLifespanEnabled || o.removeChild(n("td.ot-life-span-td")), t || o.removeChild(n("td.ot-host-description-td"))
    }, dr.prototype.createCookieRowHtmlElement = function(e) {
        var t = e.host,
            o = e.subGroupCookie,
            n = e.trt,
            r = e.json,
            i = e.lifespanText,
            e = e.hostType,
            s = ".ot-host-td",
            r = (this.setDataLabelAttribute(n, r), P(n(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + o.description + "</p> "), P(n(s)).append('<span class="ot-mobile-border"></span>'), t.DisplayName || t.HostName);
        P(n(s)).append(t.Type ? r : '<a href="https://cookiepedia.co.uk/host/' + o.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + r + " " + A.NewWinTxt + '">\n                        ' + r + "\n                        </a>"), n(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", e), n(".ot-life-span-td .ot-life-span-td-content").innerText = i, n(".ot-cookies-type .ot-cookies-type-td-content").innerText = t.Type ? A.firstPartyTxt : A.thirdPartyTxt
    }, dr.prototype.setDataLabelAttribute = function(e, t) {
        var o = "data-label";
        e(".ot-host-td").setAttribute(o, t.CategoriesText), e(".ot-cookies-td").setAttribute(o, t.CookiesText), e(".ot-cookies-type").setAttribute(o, t.CookiesUsedText), e(".ot-life-span-td").setAttribute(o, t.LifespanText), e(".ot-host-description-td").setAttribute(o, t.CookiesDescText)
    }, dr.prototype.clearCookieRowElement = function(e) {
        P(e(".ot-cookies-td span")).text(""), P(e(".ot-life-span-td span")).text(""), P(e(".ot-cookies-type span")).text(""), P(e(".ot-cookies-td .ot-cookies-td-content")).html(""), P(e(".ot-host-td")).html("")
    }, dr.prototype.setCookieListHeaderOrder = function(e) {
        var e = e.querySelector("section table thead tr"),
            t = e.querySelector("th.ot-host"),
            o = e.querySelector("th.ot-cookies"),
            n = e.querySelector("th.ot-life-span"),
            r = e.querySelector("th.ot-cookies-type"),
            i = e.querySelector("th.ot-host-description");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, dr.prototype.setCookieListBodyOrder = function(e) {
        var t = e.querySelector("td.ot-host-td"),
            o = e.querySelector("td.ot-cookies-td"),
            n = e.querySelector("td.ot-life-span-td"),
            r = e.querySelector("td.ot-cookies-type"),
            i = e.querySelector("td.ot-host-description-td");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, dr.prototype.queryToHtmlElement = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    };
    var lr, cr = dr;

    function dr() {
        this.groupsClass = E, this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy", this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy", this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    hr.prototype.IsAlertBoxClosedAndValid = function() {
        return C.isAlertBoxClosedAndValid()
    }, hr.prototype.LoadBanner = function() {
        _.loadBanner()
    }, hr.prototype.Init = function(e) {
        void 0 === e && (e = !1), Ne.insertViewPortTag(), G.ensureHtmlGroupDataInitialised(), gn.updateGtmMacros(!1), ir.initialiseLandingPath(), e || Qt.initialiseCssReferences()
    }, hr.prototype.FetchAndDownloadPC = function() {
        w.fetchAndSetupPC()
    }, hr.prototype.ToggleInfoDisplay = function() {
        _.triggerGoogleAnalyticsEvent(Io, Go), w.toggleInfoDisplay()
    }, hr.prototype.Close = function(e) {
        w.close(e)
    }, hr.prototype.AllowAll = function(e) {
        V.allowAllEvent(e)
    }, hr.prototype.RejectAll = function(e) {
        V.rejectAllEvent(e)
    }, hr.prototype.sendReceipt = function() {
        var e = g.readCookieParam(h.OPTANON_CONSENT, p.INTERACTION_TYPE);
        oi.createConsentTxn(!1, e, !1, !0, !0)
    }, hr.prototype.setDataSubjectIdV2 = function(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = ""), e && e.trim() && (e = e.replace(/ /g, ""), g.writeCookieParam(h.OPTANON_CONSENT, p.CONSENT_ID, e, !0), I.dsParams.isAnonymous = t), null != (e = o) && e.trim() && g.writeCookieParam(h.OPTANON_CONSENT, p.IDENTIFIER_TYPE, o.trim())
    }, hr.prototype.getDataSubjectId = function() {
        return g.readCookieParam(h.OPTANON_CONSENT, p.CONSENT_ID, !0)
    }, hr.prototype.getDSDefaultIdentifier = function() {
        var e;
        return null == (e = A.ConsentIntegration) ? void 0 : e.DefaultIdentifier
    }, hr.prototype.synchroniseCookieWithPayload = function(n) {
        var e = g.readCookieParam(h.OPTANON_CONSENT, "groups"),
            e = v.strToArr(e),
            r = [];
        e.forEach(function(e) {
            var e = e.split(":"),
                t = f.getGroupById(e[0]),
                o = v.findIndex(n, function(e) {
                    return e.Id === t.PurposeId
                }),
                o = n[o];
            o ? o.TransactionType === xe ? (r.push(e[0] + ":1"), t.Parent ? w.toggleSubCategory(null, t.CustomGroupId, !0, t.CustomGroupId) : w.toggleV2Category(null, t, !0, t.CustomGroupId)) : (r.push(e[0] + ":0"), t.Parent ? w.toggleSubCategory(null, t.CustomGroupId, !1, t.CustomGroupId) : w.toggleV2Category(null, t, !1, t.CustomGroupId)) : r.push(e[0] + ":" + e[1])
        }), lo.writeGrpParam(h.OPTANON_CONSENT, r)
    }, hr.prototype.getGeolocationData = function() {
        return I.userLocation
    }, hr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        _.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, hr.prototype.ReconsentGroups = function() {
        var n = !1,
            e = g.readCookieParam(h.OPTANON_CONSENT, "groups"),
            r = v.strToArr(e),
            i = v.strToArr(e.replace(/:0|:1/g, "")),
            s = !1,
            t = g.readCookieParam(h.OPTANON_CONSENT, "hosts"),
            a = v.strToArr(t),
            l = v.strToArr(t.replace(/:0|:1/g, "")),
            c = ["inactive", "inactive landingpage", "do not track"];
        e && (A.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId,
                    o = v.indexOf(i, t); - 1 !== o && (e = f.getGrpStatus(e).toLowerCase(), -1 < c.indexOf(e)) && (n = !0, r[o] = t + ("inactive landingpage" === e ? ":1" : ":0"))
            })
        }), n) && lo.writeGrpParam(h.OPTANON_CONSENT, r), t && (A.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t, o = v.indexOf(l, e.HostId); - 1 !== o && (t = f.getGrpStatus(n).toLowerCase(), -1 < c.indexOf(t)) && (s = !0, a[o] = e.HostId + ("inactive landingpage" === t ? ":1" : ":0"))
                })
            })
        }), s) && lo.writeHstParam(h.OPTANON_CONSENT, a)
    }, hr.prototype.SetAlertBoxClosed = function(e) {
        _.setAlertBoxClosed(e)
    }, hr.prototype.GetDomainData = function() {
        return b.pubDomainData
    }, hr.prototype.setGeoLocation = function(e, t) {
        I.userLocation = {
            country: e,
            state: t = void 0 === t ? "" : t
        }
    }, hr.prototype.changeLang = function(t) {
        var o;
        t !== I.lang && (o = S.moduleInitializer, Dt.getLangJson(t).then(function(e) {
            e ? (b.init(e), G.fetchAssets(t).then(function() {
                var e = document.getElementById("onetrust-style"),
                    e = (e && (e.textContent = ""), Qt.initialiseCssReferences(), o.IsSuppressPC && !I.isPCVisible || (v.removeChild(P("#onetrust-pc-sdk").el), I.vendorDomInit = !1, I.genVendorDomInit = !1, B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), A.IsIabEnabled && (C.assignIABDataWithGlobalVendorList(I.gvlObj), N.InitializeVendorList()), I.isPCVisible && w.restorePc()), !0);
                C.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || I.skipAddingHTML) || A.NoBanner || (v.removeChild(P("#onetrust-banner-sdk").el), w.initializeAlartHtmlAndHandler(), e = !1), ur.initCookiePolicyAndSettings(), v.removeChild(P("#ot-sdk-btn-floating").el), di.insertCSBtn(e), ur.processedHtml = null, ur.updateTCStringOnLangChange(t)
            })) : console.error("Language:" + t + " doesn't exist for the geo rule")
        }))
    }, hr.prototype.updateTCStringOnLangChange = function(e) {
        b.isIab2orv2Template && (I.consentLanguage = e, I.tcModel.consentLanguage = I.consentLanguage, I.tcModel.useNonStandardTexts = A.UseNonStandardStacks, C.isAlertBoxClosedAndValid() || y.updateTCString())
    }, hr.prototype.initCookiePolicyAndSettings = function(e) {
        var t;
        (e = void 0 === e ? !1 : e) && (null != (t = document.querySelector(".ot-sdk-show-settings")) && t.removeEventListener("click", w.cookiesSettingsBoundListener), null != (t = document.querySelector(".optanon-toggle-display"))) && t.removeEventListener("click", w.cookiesSettingsBoundListener), S.fp.CookieV2TrackingTechnologies ? di.insertTrackingTechnologies() : lr.insertCookiePolicyHtml(), w.insertCookieSettingText(e)
    }, hr.prototype.showVendorsList = function() {
        I.pcLayer !== ie.VendorList && (w.showAllVendors(), _.triggerGoogleAnalyticsEvent(Io, xo))
    }, hr.prototype.getTestLogData = function() {
        var e = A.Groups,
            t = b.pubDomainData,
            o = S.moduleInitializer.Version,
            o = (console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain || A.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("Script Version Published: " + o), console.info("The consent model is: " + t.ConsentModel.Name), null !== C.alertBoxCloseDate()),
            n = (console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑")), gn.checkAndWarnGCMConfig(), []),
            r = (e.forEach(function(e) {
                var t = "",
                    t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : E.isGroupActive(e) ? "Active" : "Inactive";
                n.push({
                    CustomGroupId: e.CustomGroupId,
                    GroupName: e.GroupName,
                    Status: t
                })
            }), console.groupCollapsed("Current Category Status"), console.table(n), console.groupEnd(), []),
            o = (t.GeneralVendors.forEach(function(e) {
                r.push({
                    CustomGroupId: e.VendorCustomId,
                    Name: e.Name,
                    Status: ur.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
                })
            }), console.groupCollapsed("General Vendor Ids"), console.table(r), console.groupEnd(), b.getRegionRule()),
            t = I.userLocation,
            i = S.moduleInitializer.GeoRuleGroupName,
            t = (b.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"), I.userLocation.country && console.info("The Geolocation is " + t.country.toUpperCase()), console.info("The Geolocation rule is " + o.Name), console.info("The GeolocationRuleGroup is " + i), b.canUseConditionalLogic ? (console.info("The Condition name is " + b.Condition.Name), console.info("The TemplateName is " + b.Condition.TemplateName)) : console.info("The TemplateName is " + o.TemplateName), console.groupEnd(), e.filter(function(e) {
                return E.isGroupActive(e) && "COOKIE" === e.Type
            }));
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), t.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            e = ur.getAllFormatCookiesForAGroup(e);
            console.table(e, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, hr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf("," + e + ",")
    }, hr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), (null == (e = e.Hosts) ? void 0 : e.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), t
    }, hr.prototype.updateSingularConsent = function(l, c) {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, w.fetchAndSetupPC()];
                    case 1:
                        for (e.sent(), b.apiSource = te.UpdateConsent, t = c.split(","), o = [], n = 0, r = t; n < r.length; n++) s = r[n], s = s.split(":"), i = s[0], s = s[1], a = Boolean(Number(s)), l === lt ? "always active" === f.getGrpStatus(f.getGroupById(i)) || (ur.updateConsentArray(I.groupsConsent, i, s), o.push({
                            id: i,
                            isEnabled: a
                        })) : l === ct ? ur.updateConsentArray(I.hostsConsent, i, s) : l === dt ? I.genVendorsConsent[i] = a : l === ut && o.push({
                            id: i,
                            isEnabled: a
                        });
                        return V.handleTogglesOnSingularConsentUpdate(l, o), [2]
                }
            })
        })
    }, hr.prototype.vendorServiceEnabled = function() {
        return I.showVendorService
    }, hr.prototype.updateGCM = function(e) {
        e || console.error("No callback passed to the UpdateGCM"), b.gcmUpdateCallback = e
    }, hr.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        }); - 1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    };
    var ur, pr = hr;

    function hr() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
            return di.initBanner()
        }, this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (B.insertPcHtml(), $n.insertAlertHtml()), ur.processedHtml || (ur.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), ur.processedHtml
        }, this.getCSS = function() {
            return Qt.processedCSS
        }, this.setConsentProfile = function(e) {
            var t, o;
            e.customPayload && null != (t = o = e.customPayload) && t.Interaction && g.writeCookieParam(h.OPTANON_CONSENT, p.INTERACTION_COUNT, o.Interaction), ur.setDataSubjectIdV2(e.identifier, e.isAnonymous, e.identifierType), ur.synchroniseCookieWithPayload(e.purposes), V.executeOptanonWrapper()
        }, this.InsertScript = function(e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n,
                l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (E.canInsertForGroup(r, l) && !v.contains(I.srcExecGrps, r)) {
                I.srcExecGrpsTemp.push(r), a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && v.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1, c.onload = c.onreadystatechange = function() {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, o())
                }), c.type = "text/javascript", c.src = e, i && (c.async = i), t) {
                    case "head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case "body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), a) && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && v.show(t)
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                        var h = p[u];
                        v.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        v.remove(h)
                    }
            }
        }, this.InsertHtml = function(e, t, o, n, r) {
            var i = null != n && void 0 !== n,
                s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (E.canInsertForGroup(r, s) && !v.contains(I.htmlExecGrps, r)) {
                if (I.htmlExecGrpsTemp.push(r), i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && v.empty(t), v.appendTo(t, e), i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && v.show(t), i && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        v.show(c)
                    }
                if (i && void 0 !== n.deleteElements)
                    for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                        c = u[d];
                        v.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !E.canInsertForGroup(t)
        }
    }
    gr.prototype.getFieldsValues = function(e, t, o, n, r) {
        void 0 === r && (r = !1);
        e = this.getSectionFieldsMapping(e), t = this.getSectionFieldsMapping(t, !0), o = this.getDynamicFields(o, n), n = this.getMSPASectionFieldValue(), r = r ? this.getGpcSectionFieldValue() : {};
        return R(R(R(R(R({}, e), t), o), n), r)
    }, gr.prototype.getGpcSectionFieldValue = function() {
        var e = {};
        return e[Ve.GpcSegmentType] = 1, e[Ve.Gpc] = b.gpcEnabled, e
    }, gr.prototype.getMSPASectionFieldValue = function() {
        var e = {};
        return A.IsMSPAEnabled ? (e.MspaCoveredTransaction = 1, A.MSPAOptionMode === Oe.MspaServiceProviderMode ? (e.MspaServiceProviderMode = 1, e.MspaOptOutOptionMode = 2) : A.MSPAOptionMode === Oe.MspaOptOutOptionMode ? (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 1) : (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 2)) : (e.MspaCoveredTransaction = 2, e.MspaServiceProviderMode = 0, e.MspaOptOutOptionMode = 0), e
    }, gr.prototype.getDynamicArrayFieldsValue = function(e, t) {
        for (var o = {}, n = [], r = this.getSectionFieldsMapping(t), i = 1; i <= Object.keys(r).length; i++) n.push(r[e + i]);
        return o[e] = n, o
    }, gr.prototype.getDynamicFields = function(e, t) {
        var o, n = {};
        return A.IsGPPKnownChildApplicable && e && (o = this.getDynamicArrayFieldsValue(Be.KnownChildSensitiveDataConsents, e), n = R(R({}, n), o)), A.IsGPPDataProcessingApplicable && t && (o = this.getDynamicArrayFieldsValue(Be.SensitiveDataProcessing, t), n = R(R({}, n), o)), n
    }, gr.prototype.getSectionFieldsMapping = function(e, o) {
        var n = this,
            r = (void 0 === o && (o = !1), {});
        return Object.entries(e).forEach(function(e) {
            var t = e[0],
                e = e[1],
                e = n.evaluateValueOperators(e);
            r[t] = n.calculateFieldValue(e, o)
        }), r
    }, gr.prototype.evaluateValueOperators = function(e) {
        var t, o, n = "",
            r = [];
        return e && (t = e.split(" && "), o = e.split(" || "), r = (1 < t.length ? (n = "&&", t) : 1 < o.length ? (n = "||", o) : (n = "", [e])).map(function(e) {
            return A.GPPPurposes[e] || ""
        })), {
            values: r,
            operator: n
        }
    }, gr.prototype.calculateFieldValue = function(e, t) {
        var o;
        if (e.values.length) switch (e.operator) {
            case "&&":
                o = this.calculateAndFieldValue(e.values, t);
                break;
            case "||":
                o = this.calculateOrFieldValue(e.values, t);
                break;
            default:
                o = this.calculateSingleFieldValue(e.values[0], t)
        } else o = 0;
        return o
    }, gr.prototype.calculateOrFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.some(function(e) {
            return o.fieldValueCondition(e, t)
        }), this.calculateFieldValueFromBit(e, t))
    }, gr.prototype.calculateAndFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.every(function(e) {
            return o.fieldValueCondition(e, t)
        }), this.calculateFieldValueFromBit(e, t))
    }, gr.prototype.calculateSingleFieldValue = function(e, t) {
        return e && this.isValidGroup(e) ? (e = this.fieldValueCondition(e, t), this.calculateFieldValueFromBit(e, t)) : 0
    }, gr.prototype.isValidGroup = function(e) {
        e = e ? f.getGroupById(e) : null;
        return !!e && b.isValidConsentNoticeGroup(e, A.IsIabEnabled)
    }, gr.prototype.calculateFieldValueFromBit = function(e, t) {
        t = t ? e ? 1 : 0 : e ? 2 : 1;
        return t
    }, gr.prototype.isNotApplicable = function(e) {
        var t = this;
        return !e.some(function(e) {
            return Boolean(e) && t.isValidGroup(e)
        })
    }, gr.prototype.fieldValueCondition = function(e, t) {
        return t ? Boolean(e) : ur.isCategoryActive(e)
    };
    var s = gr;

    function gr() {}
    D(vr, Cr = s), vr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(zt, Kt, Wt, Yt, !0)
    };
    var Cr, yr, fr, mr, Sr = vr;

    function vr() {
        return null !== Cr && Cr.apply(this, arguments) || this
    }(l = yr = yr || {}).SaleOptOut = "SaleOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = fr = fr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = mr = mr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(br, kr = s), br.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(yr, fr, null, mr, !1)
    };
    var kr, Tr, Pr = br;

    function br() {
        return null !== kr && kr.apply(this, arguments) || this
    }(l = Tr = Tr || {}).Version = "version", l.CmpId = "cmpId", l.CmpVersion = "cmpVersion", l.ConsentScreen = "consentScreen", l.ConsentLanguage = "consentLanguage", l.VendorListVersion = "vendorListVersion", l.PolicyVersion = "policyVersion", l.IsServiceSpecific = "isServiceSpecific", l.UseNonStandardStacks = "useNonStandardTexts", l.PurposeOneTreatment = "purposeOneTreatment", l.PublisherCountryCode = "publisherCountryCode", l.NumCustomPurposes = "numCustomPurposes", l.VendorsAllowedSegmentType = "VendorsAllowedSegmentType", l.VendorsDisclosedSegmentType = "VendorsDisclosedSegmentType", l.PublisherPurposesSegmentType = "PublisherPurposesSegmentType";
    Or.prototype.getSectionFieldsValues = function() {
        for (var e = {}, t = 0, o = Object.keys(Tr); t < o.length; t++) {
            var n = o[t],
                r = Tr[n];
            I.tcModel && I.tcModel[r] && (e[n] = I.tcModel[r])
        }
        e.ConsentLanguage = null == (i = e.ConsentLanguage) ? void 0 : i.toString().toUpperCase();
        var i = this.setPurposesData();
        return R(R({}, e), i)
    }, Or.prototype.setPurposesData = function() {
        var e = {},
            t = I.oneTrustIABConsent,
            o = this.getConsentValuesFromPurpose(t.purpose),
            o = (e.PurposeConsents = o, e.PublisherConsents = o, b.legIntSettings.PAllowLI ? this.getConsentValuesFromPurpose(t.legimateInterest) : []);
        return e.PurposeLegitimateInterests = o, e.PublisherLegitimateInterests = o, e.VendorConsents = this.syncVendorConsent(I.tcModel.vendorConsents), b.legIntSettings.PAllowLI && !o.length && (t.legIntVendors = []), e.VendorLegitimateInterests = this.getConsentValuesFromPurpose(v.distinctArray(t.legIntVendors), !0, !0), e.SpecialFeatureOptins = this.getConsentValuesFromPurpose(t.specialFeatures), e
    }, Or.prototype.syncVendorConsent = function(e) {
        var e = e.clone(),
            o = [];
        return e.forEach(function(e, t) {
            I.vendorsSetting[t] && I.vendorsSetting[t].consent || !e || o.push(t)
        }), e.unset(o), Array.from(e.values())
    }, Or.prototype.getConsentValuesFromPurpose = function(e, t, o) {
        var n = (t = void 0 === t ? !1 : t) ? 0 : 1;
        return (o = void 0 === o ? !1 : o) && (e = e.filter(function(e) {
            return "true" === e.split(":")[1]
        })), t ? e.map(function(e) {
            return parseInt(e.split(":")[n])
        }) : e.map(function(e) {
            return "true" === e.split(":")[n]
        })
    };
    var Ar, Ir, Lr, _r, Er = Or;

    function Or() {}(l = Ar = Ar || {}).SaleOptOut = "SaleOptOutCID", l.SharingOptOut = "SharingOptOutCID", l.PersonalDataConsents = "PersonalDataCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = Ir = Ir || {}).SharingNotice = "SharingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.SharingOptOutNotice = "SharingOptOutCID", l.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID", l.SensitiveDataLimitUseNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Lr = Lr || {}).KnownChildSensitiveDataConsents1 = "PDCAboveAgeCID", l.KnownChildSensitiveDataConsents2 = "PDCBelowAgeCID", (l = _r = _r || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID", l.SensitiveDataProcessing9 = "SensitivePICID", l.SensitiveDataProcessing10 = "SensitiveSICID", l.SensitiveDataProcessing11 = "UnionMembershipCID", l.SensitiveDataProcessing12 = "CommunicationCID";
    D(xr, Vr = s), xr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Ar, Ir, Lr, _r, !0)
    };
    var Vr, Br, wr, Gr, Nr = xr;

    function xr() {
        return null !== Vr && Vr.apply(this, arguments) || this
    }(l = Br = Br || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", (l = wr = wr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Gr = Gr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID";
    D(Ur, Dr = s), Ur.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Br, wr, null, Gr, !0)
    };
    var Dr, Hr, Rr, Fr, Mr, qr = Ur;

    function Ur() {
        return null !== Dr && Dr.apply(this, arguments) || this
    }(l = Hr = Hr || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = Rr = Rr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Fr = Fr || {}).KnownChildSensitiveDataConsents1 = "KnownChildProcessCID", l.KnownChildSensitiveDataConsents2 = "KnownChildSellPICID", l.KnownChildSensitiveDataConsents3 = "KnownChildSharePICID", (l = Mr = Mr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(Jr, jr = s), Jr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Hr, Rr, Fr, Mr, !0)
    };
    var jr, zr, Kr, Wr, Yr = Jr;

    function Jr() {
        return null !== jr && jr.apply(this, arguments) || this
    }(l = zr = zr || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", (l = Kr = Kr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", l.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || SexualOrientationCID || ImmigrationCID || HealthCID || GeneticCID || BiometricCID || GeolocationCID", (l = Wr = Wr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "SexualOrientationCID", l.SensitiveDataProcessing4 = "ImmigrationCID", l.SensitiveDataProcessing5 = "HealthCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(Zr, Xr = s), Zr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(zr, Kr, null, Wr, !1)
    };
    var Xr, Qr = Zr;

    function Zr() {
        return null !== Xr && Xr.apply(this, arguments) || this
    }
    ti.prototype.initGppConsent = function() {
        this.initTemplateAndSectionInstance(), this.cmpApi.setApplicableSections(this.getApplicableSections(this.gppTemplateApplied));
        var o, n, e = this.readGppCookies(),
            t = this.getCurrentSectionName(this.gppTemplateApplied),
            r = !1;
        e && (C.needReconsent() ? this.deleteAllGppCookies() : (this.cmpApi.setGppString(e), r = !0)), this.cmpApi.setSupportedAPIs((o = [], n = {}, Object.keys(Ge).forEach(function(e) {
            var t = {},
                e = (t[e] = Ge[e], Object.assign(t, n));
            n = e
        }), Object.keys(we).map(function(e) {
            return {
                name: e,
                value: we[e]
            }
        }).forEach(function(e) {
            e = n[e.name] + ":" + e.value;
            o.push(e)
        }), o.filter(function(e, t) {
            return o.indexOf(e) === t
        }))), this.cmpApi.setCmpStatus(null == (e = this.gppSDKRef) ? void 0 : e.cmpStatus.LOADED), this.cmpApi.setSignalStatus(null == (e = this.gppSDKRef) ? void 0 : e.signalStatus.READY), (t && !this.cmpApi.hasSection(t) || b.gpcBrowserValueChanged || I.grpsSynced && 0 < I.grpsSynced.length) && this.setOrUpdateGppSectionString(t, r), window.OneTrust.OnConsentChanged(this.updateGppConsentString)
    }, ti.prototype.initTemplateAndSectionInstance = function() {
        var e = S.fp;
        e && e.CookieIABGPPV2 ? this.gppTemplateApplied = this.getTemplateTypeByLocation() : this.gppTemplateApplied = this.getGppTemplateApplied(), this.gppSection = this.getSectionInstance(this.gppTemplateApplied)
    }, ti.prototype.setCmpDisplayStatus = function(e) {
        var t;
        "visible" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.VISIBLE) : "hidden" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.HIDDEN) : "disabled" === e && this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.DISABLED)
    }, ti.prototype.setGppCookies = function(e, t) {
        t ? this.updateGppCookies(e) : (t = this.getCookiesChunk(e), e = Object.keys(t).length, this.writeGppCookies(e, t))
    }, ti.prototype.readGppCookies = function() {
        var e = Number(g.readCookieParam(h.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        if (e <= 1) return 0 === e ? "" : g.getCookie(h.GPP_CONSENT);
        for (var t = "", o = 1; o <= e; o++) var n = g.getCookie("" + Ee.Name + o),
            t = t.concat(n);
        return t
    }, ti.prototype.deleteGppCookies = function(e, t) {
        if (0 < e && (1 === e && (g.setCookie("" + Ee.Name, "", 0, !0), e++), e <= t))
            for (var o = e; o <= t; o++) g.setCookie("" + Ee.Name + o, "", 0, !0)
    }, ti.prototype.getSectionInstance = function(e) {
        var t;
        switch (e) {
            case _e.CPRA:
            case _e.CCPA:
                t = new Sr;
                break;
            case _e.CDPA:
                t = new Pr;
                break;
            case _e.USNATIONAL:
                t = new Nr;
                break;
            case _e.COLORADO:
                t = new qr;
                break;
            case _e.CONNECTICUT:
                t = new Yr;
                break;
            case _e.UCPA:
                t = new Qr;
                break;
            case _e.IAB2V2:
                t = new Er
        }
        return t
    }, ti.prototype.getTemplateTypeByLocation = function() {
        if (b.getRegionRuleType() === _e.IAB2V2) return _e.IAB2V2;
        if (A.UseGPPUSNational) return _e.USNATIONAL;
        var e, t = ur.getGeolocationData();
        if ("us" === t.country.toLocaleLowerCase()) switch (t.state.toLocaleLowerCase()) {
            case "ca":
                e = _e.CPRA;
                break;
            case "va":
                e = _e.CDPA;
                break;
            case "co":
                e = _e.COLORADO;
                break;
            case "ct":
                e = _e.CONNECTICUT;
                break;
            case "ut":
                e = _e.UCPA;
                break;
            default:
                e = _e.USNATIONAL
        }
        return e
    }, ti.prototype.hasGPPSection = function() {
        return !!this.gppSection
    }, ti.prototype.getGppTemplateApplied = function() {
        return A.UseGPPUSNational ? _e.USNATIONAL : b.getRegionRuleType()
    }, ti.prototype.initGppSDK = function() {
        var e, t = Number.parseInt((null == (t = S.moduleInitializer.GppData) ? void 0 : t.cmpId) || "28");
        return null == (e = this.gppSDKRef) ? void 0 : e.gppCmpApi(t, 1.1)
    }, ti.prototype.setOrUpdateGppSectionString = function(o, e) {
        var n = this,
            t = this.gppSection.getSectionFieldsValues();
        Object.entries(t).forEach(function(e) {
            var t = e[0],
                e = e[1];
            n.cmpApi.setFieldValue(o, t, e)
        }), this.cmpApi.fireSectionChange(o), this.setGppCookies(this.cmpApi.getGppString(), e)
    }, ti.prototype.getCurrentSectionName = function(o) {
        var e, t = "",
            n = Object.entries(we).find(function(e) {
                var t = e[0];
                e[1];
                return t === o
            });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }, ti.prototype.getCurrentSectionId = function(o) {
        var e, t = 0,
            n = Object.entries(Ge).find(function(e) {
                var t = e[0];
                e[1];
                return t === o
            });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }, ti.prototype.updateGppCookies = function(e) {
        var e = this.getCookiesChunk(e),
            t = Object.keys(e).length,
            o = Number(g.readCookieParam(h.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        this.writeGppCookies(t, e), t < o && this.deleteGppCookies(t + 1, o)
    }, ti.prototype.deleteAllGppCookies = function() {
        var e = Number(g.readCookieParam(h.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        this.deleteGppCookies(1, e)
    }, ti.prototype.getCookiesChunk = function(e) {
        for (var t = {}, o = !1, n = e, r = 1; n.length;) {
            var i, s = void 0;
            n.length > Ee.ChunkSize ? s = Ee.ChunkSize : (s = n.length, o = 1 === r), o ? (t[Ee.Name] = n, n = "") : (i = n.slice(0, s), n = n.slice(s, n.length), t["" + Ee.Name + r] = i), r++
        }
        return t
    }, ti.prototype.writeGppCookies = function(e, t) {
        g.writeCookieParam(h.OPTANON_CONSENT, Ee.ChunkCountParam, e);
        for (var o = 0, n = Object.entries(t); o < n.length; o++) {
            var r = n[o],
                i = r[0],
                r = r[1];
            g.setCookie(i, r, A.ReconsentFrequencyDays)
        }
    }, ti.prototype.getSupportedAPIs = function() {
        return Object.values(we).filter(function(e, t, o) {
            return o.indexOf(e) === t
        })
    }, ti.prototype.getApplicableSections = function(e) {
        return [this.getCurrentSectionId(e)]
    };
    var $r, ei = ti;

    function ti() {
        var e, t = this;
        this.gppSDKRef = null == (e = window.otIabModule) ? void 0 : e.gppSdkRef, this.cmpApi = this.initGppSDK(), this.updateGppConsentString = function() {
            t.cmpApi.getCmpDisplayStatus() === (null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.VISIBLE) && t.cmpApi.setCmpDisplayStatus(null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.HIDDEN);
            var e = t.getCurrentSectionName(t.gppTemplateApplied);
            t.setOrUpdateGppSectionString(e, !0)
        }
    }
    ri.prototype.ensureConsentId = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = !1,
            r = !0,
            i = g.readCookieParam(h.OPTANON_CONSENT, p.CONSENT_ID, !0),
            s = I.dsParams,
            a = (s && s.hasOwnProperty("isAnonymous") && (r = s.isAnonymous), s = g.readCookieParam(h.OPTANON_CONSENT, p.IDENTIFIER_TYPE, !1), this.updateConsentIntAttributes(r, s)),
            r = a.isAnonymous,
            s = a.idTypeUpdated,
            a = e || !t || o ? 0 : (n = !0, 1);
        return i ? (e = parseInt(g.readCookieParam(h.OPTANON_CONSENT, p.INTERACTION_COUNT), 10), isNaN(e) || (t && !o && ++e, a = e, n = !1)) : (i = v.generateUUID(), g.writeCookieParam(h.OPTANON_CONSENT, p.CONSENT_ID, i)), g.writeCookieParam(h.OPTANON_CONSENT, p.INTERACTION_COUNT, a), g.writeCookieParam(h.OPTANON_CONSENT, p.IS_ANONYMOUS_CONSENT, r ? "1" : "0"), {
            id: i,
            count: a,
            addDfltInt: n,
            identifierType: s,
            isAnonymous: r
        }
    }, ri.prototype.isAuthUsr = function(e) {
        I.consentPreferences ? g.writeCookieParam(h.OPTANON_CONSENT, "iType", "") : g.writeCookieParam(h.OPTANON_CONSENT, "iType", "" + pe[e])
    }, ri.prototype.isBannerClosedByIconOrLink = function() {
        var e = I.bannerCloseSource;
        return e === $.BannerCloseButton || e === $.ContinueWithoutAcceptingButton
    }, ri.prototype.addCrossDeviceAttributes = function(e) {
        I.isV2Stub && (e.syncGroup = I.syncGrpId, A.UseGoogleVendors) && (e.gacString = g.getCookie(h.ADDITIONAL_CONSENT_STRING))
    }, ri.prototype.addAdvAnalyticsAttributes = function(e, t) {
        var o = f.getGroupById(A.AdvancedAnalyticsCategory);
        o && this.canSendAdvancedAnalytics(e.purposes, o) && (o = window.navigator.userAgent, e.dsDataElements = {
            InteractionType: t,
            Country: I && I.userLocation && /^[a-zA-Z]{2}$/.test(I.userLocation.country) ? I.userLocation.country.toLowerCase() : "",
            UserAgent: o,
            ConsentModel: A.ConsentModel.Name
        })
    }, ri.prototype.canSendConsentReceipt = function(e, t, o) {
        return e || b.apiSource === te.UpdateConsent || I.consentInteractionType !== t || o
    }, ri.prototype.addGppStringAttribute = function(e) {
        A.IsGPPEnabled && $r.hasGPPSection() && $r.updateGppConsentString();
        var t = g.getCookie(h.GPP_CONSENT);
        t && (e.gppString = t)
    }, ri.prototype.addConsentStringToPayload = function(e) {
        var t = g.getCookie(h.EU_PUB_CONSENT),
            o = b.getRegionRuleType();
        (b.isIab2orv2Template || "IABC" === o) && t ? e.consentString = {
            type: "IABC" === o ? "tcfcanada" : "IAB2" !== o && "IAB2V2" !== o ? "" : "tcfeu",
            content: t
        } : A.IsGPPEnabled && e.hasOwnProperty("gppString") && e.gppString && (e.consentString = {
            type: "gpp",
            content: e.gppString
        }, delete e.gppString)
    }, ri.prototype.createConsentTxn = function(e, t, o, n, r) {
        void 0 === t && (t = ""), void 0 === o && (o = !1);
        var i = this.ensureConsentId(e, n = void 0 === n ? !0 : n, r = void 0 === r ? !1 : r),
            s = A.ConsentIntegration,
            a = window.navigator.userAgent,
            a = /OneTrustBot/.test(a);
        s.ConsentApi && s.RequestInformation && i.id && !a && (a = S.moduleInitializer, oi.noOptOutToogle = a.TenantFeatures.CookieV2NoOptOut, oi.isCloseByIconOrLink = this.isBannerClosedByIconOrLink(), i = {
            requestInformation: s.RequestInformation,
            identifier: i.id,
            identifierType: i.identifierType,
            customPayload: {
                Interaction: i.count,
                AddDefaultInteraction: i.addDfltInt
            },
            isAnonymous: i.isAnonymous,
            test: a.ScriptType === Me.TEST || a.ScriptType === Me.LOCAL_TEST,
            purposes: this.getConsetPurposes(e),
            dsDataElements: {}
        }, this.handleReceiptsWhenSendReceiptIsEnabled(i, r, t), this.addCrossDeviceAttributes(i), this.addAdvAnalyticsAttributes(i, t), this.addGppStringAttribute(i), this.addConsentStringToPayload(i), !a.MobileSDK && n && i.purposes.length && (a = JSON.stringify(i), n = this.getAuthToken(), this.sendBeaconSupported(e, n) ? (navigator.sendBeacon(s.ConsentApi, a), C.dispatchConsentEvent()) : this.canSendConsentReceipt(o, t, r) && (I.isV2Stub && t && this.isAuthUsr(t), wt.ajax({
            url: s.ConsentApi,
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(i),
            sync: e,
            success: function() {
                C.dispatchConsentEvent()
            },
            error: function() {
                C.dispatchConsentEvent()
            },
            token: n
        }))), b.pubDomainData.ConsentIntegrationData = {
            consentApi: s.ConsentApi,
            consentPayload: i
        }), I.consentInteractionType = t, this.storeInteractionType(t)
    }, ri.prototype.storeInteractionType = function(e) {
        var t;
        null != (t = e) && t.length && (isNaN(e) && (e = pe[e]), g.writeCookieParam(h.OPTANON_CONSENT, p.INTERACTION_TYPE, e))
    }, ri.prototype.getAuthToken = function() {
        var e = null;
        return e = A.ConsentIntegration.EnableJWTAuthForKnownUsers && I.dsParams.id && I.dsParams.token ? I.dsParams.token : e
    }, ri.prototype.sendBeaconSupported = function(e, t) {
        return e && navigator.sendBeacon && !t
    }, ri.prototype.handleReceiptsWhenSendReceiptIsEnabled = function(e, t, o) {
        !I.isV2Stub && t && ((t = g.getCookie(h.ALERT_BOX_CLOSED)) && (e.interactionDate = t), o && (e.InteractionType = o), e.enableDataElementDateValidation = !0)
    }, ri.prototype.updateConsentIntAttributes = function(e, t) {
        var o, n = "";
        return !1 !== (null == (o = A.ConsentIntegration) ? void 0 : o.IdentifiedReceiptsAllowed) && I.isV2Stub || (e = !0, n = null == (o = A.ConsentIntegration) ? void 0 : o.DefaultAnonymousIdentifier), (I.isV2Stub || null != (o = A.ConsentIntegration) && o.IdentifiedReceiptsAllowed && !I.isV2Stub) && (e = (o = this.setAnonymityBasedOnKnownUserOrNot(e, t)).isAnonymous, n = o.idTypeUpdated), {
            isAnonymous: e,
            idTypeUpdated: n
        }
    }, ri.prototype.setAnonymityBasedOnKnownUserOrNot = function(e, t) {
        var o, n = "",
            n = null != (o = I.dsParams) && o.id ? (e = !1, null != (o = t) && o.trim().length ? t : null == (o = A.ConsentIntegration) ? void 0 : o.DefaultIdentifier) : (e = !0, null == (t = A.ConsentIntegration) ? void 0 : t.DefaultAnonymousIdentifier);
        return {
            isAnonymous: e,
            idTypeUpdated: n
        }
    }, ri.prototype.getGrpDetails = function(e, o) {
        var n = [];
        return e.forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = "true" === e[1] ? "1" : "0",
                t = oi.getOptanonIdForIabGroup(t, o);
            n.push(t + ":" + e)
        }), n
    }, ri.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === oe.Purpose ? o = T.IdPatterns.Pur + e : t === oe.SpecialFeature && (o = T.IdPatterns.Spl_Ft + e), o
    }, ri.prototype.getConsetPurposes = function(o) {
        var n = this,
            r = [],
            e = [],
            t = I.oneTrustIABConsent,
            i = t && t.purpose ? this.getGrpDetails(t.purpose, oe.Purpose) : [],
            s = t && t.specialFeatures ? this.getGrpDetails(t.specialFeatures, oe.SpecialFeature) : [],
            e = M(t.specialPurposes, t.features);
        return M(I.groupsConsent, i, s).forEach(function(e) {
            var e = e.split(":"),
                t = f.getGroupById(e[0]);
            t && t.PurposeId && (e = n.getTransactionType(t, e, o), r.push({
                Id: t.PurposeId,
                TransactionType: e.txnType
            }), n.setVSConsentByGroup(t, e).forEach(function(e) {
                return r.push(e)
            }))
        }), e.forEach(function(e) {
            e.purposeId && r.push({
                Id: e.purposeId,
                TransactionType: He
            })
        }), I.bannerCloseSource = $.Unknown, r
    }, ri.prototype.setVSConsentByGroup = function(e, o) {
        var n = [];
        return I.showVendorService && e.VendorServices && e.VendorServices.forEach(function(e) {
            var t;
            t = o.useOwn ? I.vsConsent.get(e.CustomVendorServiceId) ? xe : De : o.txnType, n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }), n
    }, ri.prototype.getTransactionType = function(e, t, o) {
        var n = {
            txnType: He,
            useOwn: !1
        };
        return e.Status === m.ALWAYS_ACTIVE ? n.txnType = He : e.Status.toLowerCase() === m.ALWAYS_INACTIVE || e.Status === m.INACTIVE && oi.isCloseByIconOrLink || o ? n.txnType = Re : e.Status === m.ACTIVE && oi.isCloseByIconOrLink ? n.txnType = oi.noOptOutToogle ? Fe : xe : (n.useOwn = !0, n.txnType = this.getTxnType(t[1])), n
    }, ri.prototype.getTxnType = function(e) {
        return "0" === e ? De : xe
    }, ri.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [xe, He];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, ri.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || e.Type === T.GroupTypes.Stack ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    };
    var oi, ni = ri;

    function ri() {}
    var G, ii = function() {
            this.assets = function() {
                return {
                    name: "otCookiePolicy",
                    html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                    css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                    cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                }
            }
        },
        si = "opt-out",
        ai = (li.prototype.initializeFeaturesAndSpecialPurposes = function() {
            var t = this;
            I.oneTrustIABConsent.features = [], I.oneTrustIABConsent.specialPurposes = [], A.Groups.forEach(function(e) {
                t.checkAndPopulateFeatAndSplPur(e)
            })
        }, li.prototype.checkAndPopulateFeatAndSplPur = function(e) {
            var t, o = this,
                n = T.GroupTypes;
            e.Type !== n.Ft && e.Type !== n.Spl_Pur || ((t = {}).groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, (e.Type === n.Ft ? I.oneTrustIABConsent.features : I.oneTrustIABConsent.specialPurposes).push(t)), e.SubGroups && e.SubGroups.forEach(function(e) {
                o.checkAndPopulateFeatAndSplPur(e)
            })
        }, li.prototype.initGrpsAndHosts = function() {
            this.initializeGroupData(b.consentableGrps), A.showCookieList && y.isOptOutEnabled() ? this.initializeHostData(b.consentableGrps) : (I.hostsConsent = [], lo.writeHstParam(h.OPTANON_CONSENT))
        }, li.prototype.ensureHtmlGroupDataInitialised = function() {
            var e, t, o, n;
            this.initGrpsAndHosts(), I.showGeneralVendors && (yo.populateGenVendorLists(), yo.initGenVendorConsent()), A.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), I.vsIsActiveAndOptOut && this.initializeVendorsService(), C.setOrUpdate3rdPartyIABConsentFlag(), C.setGeolocationInCookies(), A.IsConsentLoggingEnabled && (e = window.OneTrust.dataSubjectParams || {}, t = g.readCookieParam(h.OPTANON_CONSENT, "iType"), o = "", n = !1, I.isV2Stub && e.id && e.token && (t || b.forceCreateTrxLocalConsentIsGreater) && (n = !0, o = pe[t]), oi.createConsentTxn(!1, o, !1, n))
        }, li.prototype.initializeVendorsService = function() {
            var o = C.isAlertBoxClosedAndValid(),
                e = g.readCookieParam(h.OPTANON_CONSENT, ho),
                n = v.strToMap(e);
            I.getVendorsInDomain().forEach(function(e, t) {
                n.has(t) || (e = !o && f.checkIsActiveByDefault(e.groupRef), n.set(t, e))
            }), I.vsConsent = n
        }, li.prototype.initializeGroupData = function(e) {
            var t;
            g.readCookieParam(h.OPTANON_CONSENT, co) ? (To.synchroniseCookieGroupData(e), t = g.readCookieParam(h.OPTANON_CONSENT, co), I.groupsConsent = v.strToArr(t), I.gpcConsentTxn && (A.IsConsentLoggingEnabled && oi.createConsentTxn(!1, "GPC value changed", !1, !0), I.gpcConsentTxn = !1, _.setAlertBoxClosed(!0))) : (I.groupsConsent = [], e.forEach(function(e) {
                var t = !1,
                    t = f.checkIsActiveByDefault(e) && e.HasConsentOptOut;
                e.Status === m.INACTIVE_LANDING_PAGE && So.isLandingPage() && (t = !1), I.groupsConsent.push(e.CustomGroupId + ":" + (t ? "1" : "0"))
            }), A.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }, li.prototype.initializeHostData = function(e) {
            var t, r;
            g.readCookieParam(h.OPTANON_CONSENT, "hosts") ? (To.synchroniseCookieHostData(), t = g.readCookieParam(h.OPTANON_CONSENT, "hosts"), I.hostsConsent = v.strToArr(t), e.forEach(function(e) {
                f.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    I.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            })) : (I.hostsConsent = [], r = {}, e.forEach(function(e) {
                var o = f.isAlwaysActiveGroup(e),
                    n = I.syncRequired ? To.groupHasConsent(e) : f.checkIsActiveByDefault(e);
                e.Hosts.length && e.Hosts.forEach(function(e) {
                    var t;
                    r[e.HostId] ? To.updateHostStatus(e, n) : (r[e.HostId] = !0, o && I.oneTrustAlwaysActiveHosts.push(e.HostId), t = To.isHostPartOfAlwaysActiveGroup(e.HostId), I.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0")))
                })
            }))
        }, li.prototype.consentDefaulCall = function() {
            var e = parseInt(g.readCookieParam(h.OPTANON_CONSENT, p.INTERACTION_COUNT), 10);
            !isNaN(e) && 0 !== e || (_.triggerGoogleAnalyticsEvent(Io, "Click", "No interaction"), A.IsConsentLoggingEnabled && oi.createConsentTxn(!0), window.removeEventListener("beforeunload", G.consentDefaulCall))
        }, li.prototype.fetchAssets = function(s) {
            return void 0 === s && (s = null), u(this, void 0, void 0, function() {
                var t, o, n, r, i;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = S.moduleInitializer, i = C.isAlertBoxClosedAndValid(), o = !!s, i = G.isFetchBanner(t.IsSuppressBanner, i), n = G.cookieSettingBtnPresent(), n = b.isIab2orv2Template ? A.PCShowPersistentCookiesHoverButton && (!A.PCenterDynamicRenderingEnable || A.PCenterDynamicRenderingEnable && !n) : A.PCShowPersistentCookiesHoverButton, r = "true" === I.urlParams.get(it), I.hideBanner = r, [4, Promise.all([!i || A.NoBanner || r ? Promise.resolve(null) : Dt.getBannerContent(o, s), !t.IsSuppressPC || I.isPCVisible ? Dt.getPcContent() : Promise.resolve(null), n ? Dt.getCSBtnContent() : Promise.resolve(null), Dt.getCommonStyles()])];
                        case 1:
                            return i = e.sent(), r = i[0], o = i[1], t = i[2], n = i[3], G.fetchContent(r, o, t, n), G.setCookieListGroupData(), [2]
                    }
                })
            })
        }, li.prototype.fetchContent = function(e, t, o, n) {
            var r;
            e && (r = e.html, S.fp.CookieV2SSR || (r = atob(e.html)), this.bannerGroup = {
                name: e.name,
                html: r,
                css: e.css
            }), t && (this.preferenceCenterGroup = {
                name: t.name,
                html: atob(t.html),
                css: t.css
            }, S.isV2Template = A.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)), o && (this.csBtnGroup = {
                name: "CookieSettingsButton",
                html: atob(o.html),
                css: o.css
            }), n && (this.commonStyles = n)
        }, li.prototype.cookieSettingBtnPresent = function() {
            return P("#ot-sdk-btn").length || P(".ot-sdk-show-settings").length || P(".optanon-show-settings").length
        }, li.prototype.isFetchBanner = function(e, t) {
            return !e || A.ShowAlertNotice && !t && e && !P("#onetrust-banner-sdk").length
        }, li.prototype.setCookieListGroupData = function() {
            var e;
            S.fp.CookieV2TrackingTechnologies || (e = (new ii).assets(), G.cookieListGroup = {
                name: e.name,
                html: e.html,
                css: A.useRTL ? e.cssRTL : e.css
            })
        }, li.prototype.initializeIabPurposeConsentOnReload = function() {
            var t = this;
            b.consentableIabGrps.forEach(function(e) {
                t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
            })
        }, li.prototype.initializeIABData = function(o, n, r) {
            var i = this,
                e = (void 0 === o && (o = !1), void 0 === n && (n = !1), void 0 === r && (r = !1), I.oneTrustIABConsent),
                t = (e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [], I.addtlVendors),
                s = A.VendorConsentModel === si;
            t.vendorConsent = [], !e.IABCookieValue || o || n || C.reconsentRequired() ? (b.consentableIabGrps.forEach(function(e) {
                var t;
                n && !r ? i.setIABConsent(e, f.isAlwaysActiveGroup(e)) : r ? e.HasConsentOptOut && i.setIABConsent(e, !1) : (t = o && e.HasConsentOptOut, i.setIABConsent(e, t), e.Type === T.GroupTypes.Pur && (e.IsLegIntToggle = !0, i.setIABConsent(e, e.HasLegIntOptOut)))
            }), A.IsIabEnabled && r && (I.oneTrustIABConsent.legimateInterest = I.vendors.selectedLegInt.slice()), t = o || !n && s, r && this.iab.saveVendorStatus(r), C.setIABVendor(t, r, n), !C.reconsentRequired() || o || n || C.resetTCModel()) : (this.initializeIabPurposeConsentOnReload(), no.populateGoogleConsent(), no.populateVendorAndPurposeFromCookieData())
        }, li.prototype.canSoftOptInInsertForGroup = function(e) {
            var e = f.getGroupById(e);
            if (e) return e = e && !e.Parent ? e : f.getParentGroup(e.Parent), "inactive landingpage" !== f.getGrpStatus(e).toLowerCase() || !So.isLandingPage()
        }, li.prototype.setIABConsent = function(e, t) {
            e.Type === T.GroupTypes.Spl_Ft ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }, li.prototype.setIabPurposeConsent = function(o, n) {
            var r = !1;
            I.oneTrustIABConsent.purpose = I.oneTrustIABConsent.purpose.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || I.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }, li.prototype.setIabLegIntConsent = function(o, n) {
            var r = !1;
            I.oneTrustIABConsent.legimateInterest = I.oneTrustIABConsent.legimateInterest.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || I.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }, li.prototype.setIabSpeciFeatureConsent = function(o, n) {
            var r = !1;
            I.oneTrustIABConsent.specialFeatures = I.oneTrustIABConsent.specialFeatures.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || I.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }, li);

    function li() {
        this.iab = N
    }
    a.prototype.getSearchQuery = function(e) {
        var t = this,
            e = e.trim().split(/\s+/g);
        return new RegExp(e.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, a.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, a.prototype.setGlobalFilteredList = function(e) {
        return I.currentGlobalFilteredList = e
    }, a.prototype.vendorHasPurpose = function(e, t) {
        var o = !1,
            n = parseInt(b.iabGrpIdMap[t]);
        return -1 < t.indexOf(T.IdPatterns.Ft) ? (e.features || []).forEach(function(e) {
            e.featureId === n && (o = !0)
        }) : -1 < t.indexOf(T.IdPatterns.Spl_Ft) ? e.specialFeatures.forEach(function(e) {
            e.featureId === n && (o = !0)
        }) : -1 < t.indexOf(T.IdPatterns.Spl_Pur) ? (e.specialPurposes || []).forEach(function(e) {
            e.purposeId === n && (o = !0)
        }) : (e.purposes.forEach(function(e) {
            e.purposeId === n && (o = !0)
        }), e.legIntPurposes.forEach(function(e) {
            e.purposeId === n && (o = !0)
        })), o
    }, a.prototype.filterList = function(t, e, o) {
        var n, r, i = o && o.length;
        return "" !== t || i ? (i && (i = P("#onetrust-pc-sdk " + k.P_Fltr_Options + " input").el.length, r = !(n = []), i !== o.length ? e.forEach(function(t) {
            r = !0, t.vendorName && o.forEach(function(e) {
                N.vendorHasPurpose(t, e) && n.push(t)
            })
        }) : n = e, r && (n = n.filter(function(e, t, o) {
            return o.indexOf(e) === t
        })), this.setGlobalFilteredList(n)), "" === t ? I.currentGlobalFilteredList : I.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })) : this.setGlobalFilteredList(e)
    }, a.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = I.vendors,
            o = (I.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, I.filterByIABCategories = [], fn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = I.filterByIABCategories, this.filterList(o.searchParam, o.list, t));
        P("#onetrust-pc-sdk " + k.P_Vendor_Content).el[0].scrollTop = 0, I.addtlVendorsList && 0 < Object.keys(I.addtlVendorsList).length && (this.hasGoogleVendors = !0), this.initVendorsData(e, o)
    }, a.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r, i, s = this.getSearchQuery(n),
                a = 0;
            for (r in t) r && (i = o === me.GoogleVendor ? r : t[r].VendorCustomId, i = P("" + e.vendorAccBtn + i).el[0].parentElement, s.lastIndex = 0, s.test(t[r][e.name]) ? (d(i, this._displayNull, !0), a++) : d(i, "display: none;", !0));
            0 === a ? (P(e.accId).hide(), o === me.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === me.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, P(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var l = P(" " + e.venListId + ' li[style^="display: none"]').el, c = 0; c < l.length; c++) d(l[c], this._displayNull, !0);
        n = P("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? v.setCheckedAttribute("", n, !0) : v.setCheckedAttribute("", n, !1), document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? n.parentElement.classList.add("line-through") : n.parentElement.classList.remove("line-through")
    }, a.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(I.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, a.prototype.initGenVendors = function() {
        this.populateGeneralVendors(), A.GenVenOptOut && A.GeneralVendors && A.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, a.prototype.resetAddtlVendors = function() {
        N.searchVendors(N.googleSearchSelectors, I.addtlVendorsList, me.GoogleVendor), this.showConsentHeader()
    }, a.prototype.venAdtlSelAllTglEvent = function() {
        N.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, a.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: k.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        N.selectAllEventHandler(e)
    }, a.prototype.selectAllEventHandler = function(e) {
        for (var t = P(e.vendorsList).el, o = P(e.selAllCntr).el[0], n = P(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++) s !== t.length - 1 || t[s].checked || (n.checked = !1);
        v.setCheckedAttribute("", n, n.checked)
    }, a.prototype.vendorLegIntToggleEvent = function() {
        for (var e = P(k.P_Vendor_Container + ' li:not([style^="display: none"]) .' + k.P_Ven_Ltgl + " input").el, t = P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Leg_El).el[0], o = P("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        v.setCheckedAttribute("", o, o.checked)
    }, a.prototype.vendorsListEvent = function() {
        for (var e = P(k.P_Vendor_Container + ' li:not([style^="display: none"]) .' + k.P_Ven_Ctgl + " input").el, t = P("#onetrust-pc-sdk #" + k.P_Sel_All_Vendor_Consent_El).el[0], o = P("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        v.setCheckedAttribute("", o, o.checked)
    }, a.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = P("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (P("#onetrust-pc-sdk " + k.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, a.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(k.P_Host_Cntr + " > li") : document.querySelectorAll(k.P_Vendor_Container + ' li:not([style$="none;"]),' + k.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length,
            n = P('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, a.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o, n, r, i = P("#onetrust-pc-sdk #no-results").el[0];
        if (!i) return t = N.getNoResultsFound(t), o = document.createElement("div"), n = document.createElement("p"), t = document.createTextNode(t), r = document.createElement("span"), o.id = "no-results", r.id = "user-text", r.innerText = e, n.appendChild(r), n.appendChild(t), o.appendChild(n), P("#onetrust-pc-sdk " + k.P_Vendor_Content).addClass("no-results"), P("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id), P("#onetrust-pc-sdk " + k.P_Vendor_Content).append(o);
        i.querySelector("span").innerText = e
    }, a.prototype.searchHostList = function(e) {
        var t = {},
            o = [];
        I.showTrackingTech ? (t = I.currentTrackingTech, o = (t = e ? N.getFilteredAdditionaTechtData(e, t) : t).Cookies) : (o = I.currentGlobalFilteredList, e && (o = this.searchList(e, o))), this.initHostData({
            searchString: e,
            cookiesList: o,
            addTechData: t
        })
    }, a.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, a.prototype.setListSearchValues = function(e) {
        var t = A.PCenterVendorSearchAriaLabel,
            o = A.PCenterVendorListSearch,
            n = A.PCenterVendorsListText,
            e = (e === Le.cookies && (t = A.PCenterCookieSearchAriaLabel, o = A.PCenterCookieListSearch, n = A.PCenterCookiesListText), I.cookieListType !== Ce.HostAndGenVen && I.cookieListType !== Ce.Host || !I.showTrackingTech || (n = A.AdditionalTechnologiesConfig.PCTrackingTechTitle), document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Title).innerText = n, P("#onetrust-pc-sdk " + k.P_Vendor_Search_Input));
        e.el[0].placeholder = o, e.attr("aria-label", t)
    }, a.prototype.initHostData = function(e) {
        var t = e.searchString,
            o = e.cookiesList,
            e = e.addTechData,
            n = (I.optanonHostList = o, !1),
            r = (this.setBackBtnTxt(), P(k.P_Vendor_List + " #select-all-text-container p").html(A.PCenterAllowAllConsentText), N.getHostParentContainer()),
            i = o && 0 === o.length,
            s = (I.showTrackingTech && (i = 0 === e.LocalStorages.length && 0 === e.SessionStorages.length && (0 === e.Cookies.length || 0 === e.Cookies[0].Cookies.length)), I.cookieListType === Ce.Host);
        this.showEmptyResults(i, t, s), this.setHostListSearchValues(), P("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterCookieListFilterAria);
        P("#filter-btn-handler title").html(A.PCenterCookieListFilterAria), S.isV2Template && P("#ot-sel-blk span:first-child").html(A.PCenterAllowAllConsentText || A.ConsentText);
        for (var a = document.createDocumentFragment(), l = 0; l < o.length; l++) {
            var c = I.hosts.hostTemplate.cloneNode(!0),
                d = o[l].DisplayName || o[l].HostName;
            this.createHostAccordions(d, c, l), n = this.createHostCheckboxes(d, o, l, c, n), this.populateHostDataIntoDOMElements(c, o, d, l, a)
        }
        N.setCookiesInsideHostContainer(r, a, e);
        i = 1 === o.length && o[0].HostName === A.PCFirstPartyCookieListText;
        if (y.isOptOutEnabled() && !i) {
            v.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !n);
            for (var u = P("#onetrust-pc-sdk " + k.P_Host_Cntr + " .ot-host-tgl input").el, p = 0; p < u.length; p++) u[p].addEventListener("click", this.hostsListEvent);
            P("#onetrust-pc-sdk " + k.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        } else P("#onetrust-pc-sdk " + k.P_Select_Cntr).addClass("ot-hide")
    }, a.prototype.setCookiesInsideHostContainer = function(e, t, o) {
        var n, r;
        I.showTrackingTech && o ? 0 < (o = N.getAdditionalTechnologiesHtml(o)).children.length && ((n = o.querySelector("." + this.TECH_COOKIES_SELECTOR + " .ot-acc-txt")) && ((r = e.querySelector("ul" + k.P_Host_Cntr)).appendChild(t), n.appendChild(r)), e.appendChild(o)) : e.appendChild(t)
    }, a.prototype.getHostParentContainer = function() {
        var e = null;
        return I.showTrackingTech ? (e = document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Content + " .ot-sdk-column"), N.removeTrackingTechAccorions()) : (e = document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Content + " ul" + k.P_Host_Cntr)).innerHTML = "", e
    }, a.prototype.removeTrackingTechAccorions = function() {
        var e = document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Content + " .ot-sdk-column"),
            t = e.querySelector("." + this.TECH_COOKIES_SELECTOR + " ul" + k.P_Host_Cntr);
        if (t ? (t.innerHTML = "", e.appendChild(t)) : (t = e.querySelector("ul" + k.P_Host_Cntr)).innerHTML = "", e)
            for (var o = e.querySelectorAll(".ot-add-tech"), n = o.length - 1; 0 <= n; n--) {
                var r = o.item(n);
                e.removeChild(r)
            }
    }, a.prototype.setHostListSearchValues = function() {
        var e = b.pcName;
        A.GeneralVendorsEnabled && (S.isV2Template || e !== rt) && this.setListSearchValues(Le.vendors), A.GeneralVendorsEnabled || !S.isV2Template && e === rt || this.setListSearchValues(Le.cookies)
    }, a.prototype.createHostAccordions = function(e, t, o) {
        var n = t.querySelector("." + k.P_Host_Bx),
            e = (n && v.setHtmlAttributes(n, {
                id: "host-" + o,
                name: "host-" + o,
                "aria-label": e + " " + A.PCViewCookiesText,
                "aria-controls": "ot-host-acc-txt-" + o
            }), t.querySelector(k.P_Acc_Txt));
        e && v.setHtmlAttributes(e, {
            id: "ot-host-acc-txt-" + o,
            role: "region",
            "aria-labelledby": n.id
        })
    }, a.prototype.createHostCheckboxes = function(e, t, o, n, r) {
        var i = y.isOptOutEnabled(),
            s = S.isV2Template,
            a = b.pcName;
        return !i || t[o].isFirstParty ? (i = n.querySelector(".ot-host-tgl")) && i.parentElement.removeChild(i) : (i = void 0, s ? ((i = L.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), i.querySelector("input").classList.add("host-checkbox-handler"), a === rt ? n.querySelector(k.P_Host_Hdr).insertAdjacentElement("beforebegin", i) : n.querySelector(k.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)) : i = n.querySelector(".ot-host-tgl"), v.setHtmlAttributes(i.querySelector("input"), {
            id: "ot-host-chkbox-" + o,
            "aria-label": e,
            hostId: t[o].HostId,
            ckType: t[o].Type
        }), i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (t[o].Type === ge.GenVendor ? I.genVendorsConsent[t[o].HostId] : -1 !== I.hostsConsent.indexOf(t[o].HostId + ":1")) ? (v.setCheckedAttribute(null, i.querySelector("input"), !0), t[o].isActive ? v.setDisabledAttribute(null, i.querySelector("input"), !0) : r = r || !0) : (r = !0, v.setCheckedAttribute(null, i.querySelector("input"), !1)), i.querySelector(k.P_Label_Txt).innerText = e), r
    }, a.prototype.populateHostDataIntoDOMElements = function(t, o, e, n, r) {
        var i, s = this,
            a = S.isV2Template,
            l = b.pcName,
            l = (A.PCAccordionStyle === le.PlusMinus ? t.querySelector(k.P_Acc_Header).insertAdjacentElement("afterbegin", L.plusMinusEl.cloneNode(!0)) : a && (i = L.arrowEl.cloneNode(!0), l === rt ? t.querySelector(k.P_Host_View_Cookies).insertAdjacentElement("afterend", i) : t.querySelector(k.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)), A.AddLinksToCookiepedia && !o[n].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + o[n].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span>\n                            </a>\n                        "), t.querySelector(k.P_Host_Title).innerHTML = e, t.querySelector(k.P_Host_Desc).innerHTML = o[n].Description, o[n].PrivacyPolicy && A.pcShowCookieHost && t.querySelector(k.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + o[n].PrivacyPolicy + '" rel="noopener" target="_blank">' + (a ? A.PCGVenPolicyTxt : A.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span></a>"), t.querySelector(k.P_Host_View_Cookies));
        return !I.showGeneralVendors || o[n].Cookies && o[n].Cookies.length ? A.PCViewCookiesText && (l.innerHTML = A.PCViewCookiesText) : (v.removeChild(l), P(t).addClass("ot-hide-acc")), o[n].Description && A.pcShowCookieHost || (i = t.querySelector(k.P_Host_Desc)).parentElement.removeChild(i), P(t.querySelector(k.P_Host_Opt)).html(""), null != (a = o[n].Cookies) && a.forEach(function(e) {
            e = s.getCookieElement(e, o[n]);
            P(t.querySelector(k.P_Host_Opt)).append(e)
        }), r.append(t), e
    }, a.prototype.hostsListEvent = function() {
        for (var e = P("#onetrust-pc-sdk " + k.P_Host_Cntr + " .ot-host-tgl input").el, t = P("#onetrust-pc-sdk #" + k.P_Sel_All_Host_El).el[0], o = P("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = P("#onetrust-pc-sdk " + k.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        v.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + A.PCenterSelectAllVendorsText)
    }, a.prototype.loadHostList = function(e, t) {
        var o = {},
            n = [],
            n = I.showTrackingTech ? (o = N.getAdditionalTechnologiesDataFromGroup(t), (I.currentTrackingTech = o).Cookies) : N.getCombinedCookieList(t);
        I.currentGlobalFilteredList = n, this.initHostData({
            searchString: e,
            cookiesList: n,
            addTechData: o
        })
    }, a.prototype.getCombinedCookieList = function(e) {
        var t, o = [],
            n = [];
        return I.cookieListType !== Ce.GenVen && (n = (t = N.getFirstsAndThirdCookisFromGroups(e)).firstPartyCookiesList, o = t.thirdPartyCookiesList, n.length) && o.unshift({
            HostName: A.PCFirstPartyCookieListText,
            DisplayName: A.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: n,
            Description: ""
        }), I.showGeneralVendors ? (t = this.getFilteredGenVendorsList(e), M(o, this.mapGenVendorListToHostFormat(t))) : o
    }, a.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: ge.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < I.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, a.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: ge.GenVendor
        }
    }, a.prototype.getFilteredGenVendorsList = function(t) {
        var e, o = [],
            n = [];
        return t.length ? (A.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(e) {
                -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                    o.push(e)
                })
            })
        }), e = A.GeneralVendors, o.length ? e.filter(function(e) {
            if (-1 < o.indexOf(e.VendorCustomId)) return e
        }) : n) : A.GeneralVendors
    }, a.prototype.initVendorsData = function(e, t) {
        var o = this,
            n = t,
            t = I.vendors.list;
        if (this.setBackBtnTxt(), P(k.P_Vendor_List + " #select-all-text-container p").html(A.PCenterAllowAllConsentText), N.setConsentLegIntAndHeaderText(), P("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterVendorListFilterAria), P("#onetrust-pc-sdk #filter-btn-handler title").html(A.PCenterVendorListFilterAria), this.hasIabVendors = 0 < n.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), N.hideOrShowVendorList(n), P("#onetrust-pc-sdk " + k.P_Vendor_Container + " ." + k.P_Ven_Bx).length !== t.length && this.attachVendorsToDOM(), n.length !== t.length) t.forEach(function(e) {
            var t = P(k.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement; - 1 === n.indexOf(e) ? d(t, "display: none;", !0) : d(t, o._displayNull, !0)
        });
        else
            for (var r = P(k.P_Vendor_Container + ' li[style^="display: none"]').el, i = 0; i < r.length; i++) d(r[i], this._displayNull, !0);
        !S.isV2Template && b.pcName === rt || this.setListSearchValues(Le.vendors);
        e = document.querySelector("#vdr-lst-dsc");
        !e && A.PCenterVendorListDescText && ((e = document.createElement("p")).id = "vdr-lst-dsc", P(e).html(A.PCenterVendorListDescText), b.pcName !== rt && b.pcName !== tt ? (t = document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Title_Elm)) && t.insertAdjacentElement("afterend", e) : (t = document.querySelector(k.P_Vendor_Content + " .ot-sdk-row")) && t.insertAdjacentElement("beforebegin", e)), P("#onetrust-pc-sdk " + k.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), b.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, a.prototype.setConsentLegIntAndHeaderText = function() {
        S.isV2Template && (P("#ot-sel-blk span:first-child").html(A.PCenterAllowAllConsentText || A.ConsentText), P("#ot-sel-blk span:last-child").html(A.LegitInterestText), P("#onetrust-pc-sdk " + k.P_Cnsnt_Header).html(A.PCenterAllowAllConsentText), b.legIntSettings.PAllowLI && !b.legIntSettings.PShowLegIntBtn && P("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(A.PCenterLegitInterestText), b.legIntSettings.PAllowLI && !b.legIntSettings.PShowLegIntBtn || d(P("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0))
    }, a.prototype.hideOrShowVendorList = function(e) {
        0 === e.length ? P("#ot-lst-cnt .ot-acc-cntr").hide() : P("#ot-lst-cnt .ot-acc-cntr").show(), I.showTrackingTech && N.removeTrackingTechAccorions()
    }, a.prototype.updateVendorsDOMToggleStatus = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = P(k.P_Vendor_Container + " " + k.P_Tgl_Cntr).el, n = 0; n < o.length; n++) {
            var r = o[n].querySelector("." + k.P_Ven_Ctgl + " input"),
                i = o[n].querySelector("." + k.P_Ven_Ltgl + " input");
            t ? r && v.setCheckedAttribute("", r, !1) : (r && v.setCheckedAttribute("", r, e), i && v.setCheckedAttribute("", i, e))
        }
        var s = P("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0],
            s = (s && (s.parentElement.classList.remove("line-through"), v.setCheckedAttribute("", s, !!t || e)), P("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0]);
        s && (s.parentElement.classList.remove("line-through"), v.setCheckedAttribute("", s, !t && e)), A.UseGoogleVendors && (t ? this.updateGoogleCheckbox(!1) : this.updateGoogleCheckbox(e)), I.showGeneralVendors && A.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, a.prototype.updateGenVenCheckbox = function(e) {
        for (var t = P(k.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) v.setCheckedAttribute("", t[o], e);
        var n = P("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), v.setCheckedAttribute("", n, e))
    }, a.prototype.updateGoogleCheckbox = function(e) {
        for (var t = P("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) v.setCheckedAttribute("", t[o], e);
        var n = P("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), v.setCheckedAttribute("", n, e))
    }, a.prototype.updateVendorDisclosure = function(e, t) {
        var r, i, e = P(k.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        t && t.disclosures && (r = e.querySelector(k.P_Ven_Dets), (e = (i = e.querySelector(k.P_Ven_Disc).cloneNode(!0)).cloneNode(!0)).innerHTML = "<p><b>" + A.PCenterVendorListDisclosure + ": </b></p>", r.insertAdjacentElement("beforeend", e), t.disclosures.forEach(function(e) {
            var t, o = i.cloneNode(!0),
                n = "<p>" + A.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
            e.type && (n += "<p>" + A.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds && (t = v.calculateCookieLifespan(e.maxAgeSeconds), n += "<p>" + A.PCenterVendorListLifespan + " </p> <p>" + t + " </p>"), e.domain && (n += "<p>" + A.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (n += "<p>" + A.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">', e.purposes.forEach(function(e) {
                e = null == (e = b.iabGroups.purposes[e]) ? void 0 : e.name;
                e && (n += ' <p class="disc-pur">' + e + " </p>")
            }), n += "</div>"), o.innerHTML = n, r.insertAdjacentElement("beforeend", o)
        }), this.updateDomainsUsageInDisclosures(t, i, r))
    }, a.prototype.updateDomainsUsageInDisclosures = function(e, n, r) {
        var t;
        e.domains && e.domains.length && ((t = n.cloneNode(!0)).innerHTML = "<p><b>" + A.PCVLSDomainsUsed + ": </b></p>", r.insertAdjacentElement("beforeend", t), e.domains.forEach(function(e) {
            var t, o = n.cloneNode(!0);
            e.domain && (t = "<p>" + A.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.use && (t += "<p>" + A.PCVLSUse + " </p> <p>" + e.use + " </p>"), o.innerHTML = t, r.insertAdjacentElement("beforeend", o)
        }))
    }, a.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "", e.parentNode.insertBefore(o, e)
    }, a.prototype.setVdrConsentTglOrChbox = function(e, t, o, n, r, i) {
        var s, a, l = I.vendorsSetting[e],
            t = t.cloneNode(!0);
        l.consent && (t.classList.add(k.P_Ven_Ctgl), l = -1 !== wt.inArray(e + ":true", I.vendors.selectedVendors), s = t.querySelector("input"), S.isV2Template && (s.classList.add("vendor-checkbox-handler"), a = t.querySelector(this.LABEL_STATUS), A.PCShowConsentLabels ? a.innerHTML = l ? A.PCActiveText : A.PCInactiveText : v.removeChild(a)), v.setCheckedAttribute("", s, l), v.setHtmlAttributes(s, {
            id: k.P_Vendor_CheckBx + "-" + i,
            vendorid: e,
            "aria-label": o
        }), t.querySelector("label").setAttribute("for", k.P_Vendor_CheckBx + "-" + i), t.querySelector(k.P_Label_Txt).textContent = o, b.pcName === rt ? A.PCTemplateUpgrade ? n.insertAdjacentElement("beforeend", t) : P(n).append(t) : n.insertBefore(t, r))
    }, a.prototype.setVndrLegIntTglTxt = function(e, t) {
        e = e.querySelector(this.LABEL_STATUS);
        A.PCShowConsentLabels ? e.innerHTML = t ? A.PCActiveText : A.PCInactiveText : v.removeChild(e)
    }, a.prototype.setVdrLegIntTglOrChbx = function(t, e, o, n, r, i, s) {
        var a, l = I.vendorsSetting[t],
            o = o.cloneNode(!0),
            c = null == (c = I.vendors.list.find(function(e) {
                return e.vendorId === t
            }).legIntPurposes) ? void 0 : c.length;
        l.legInt && !l.specialPurposesOnly && c && (c = -1 !== wt.inArray(t + ":true", I.vendors.selectedLegIntVendors), b.legIntSettings.PShowLegIntBtn ? (a = C.generateLegIntButtonElements(c, t, !0), e.querySelector(k.P_Acc_Txt).insertAdjacentHTML("beforeend", a), (a = e.querySelector(".ot-remove-objection-handler")) && d(a, a.getAttribute("data-style"))) : (a = o.querySelector("input"), S.isV2Template && (a.classList.add("vendor-checkbox-handler"), this.setVndrLegIntTglTxt(o, c)), o.classList.add(k.P_Ven_Ltgl), a.classList.remove("vendor-checkbox-handler"), a.classList.add("vendor-leg-checkbox-handler"), v.setCheckedAttribute("", a, c), v.setHtmlAttributes(a, {
            id: k.P_Vendor_LegCheckBx + "-" + r,
            "leg-vendorid": t,
            "aria-label": n
        }), o.querySelector("label").setAttribute("for", k.P_Vendor_LegCheckBx + "-" + r), o.querySelector(k.P_Label_Txt).textContent = n, e.querySelector("." + k.P_Ven_Ctgl) && (i = e.querySelector("." + k.P_Ven_Ctgl)), b.pcName !== rt || s.children.length ? s.insertBefore(o, i) : P(s).append(o), l.consent || b.pcName !== rt || o.classList.add(k.P_Ven_Ltgl_Only)))
    }, a.prototype.setVndrSplPurSection = function(e, t) {
        var o = this,
            n = e.querySelector(".spl-purpose"),
            e = e.querySelector(".spl-purpose-grp"),
            r = e.cloneNode(!0);
        e.parentElement.removeChild(e), b.isIab2orv2Template && t.specialPurposes.forEach(function(e) {
            P(r.querySelector(o.CONSENT_CATEGORY)).text(e.purposeName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.specialPurposes.length ? n.parentElement.removeChild(n) : P(n.querySelector("p")).text(A.SpecialPurposesText)
    }, a.prototype.setVndrFtSection = function(e, t) {
        var o = this,
            n = e.querySelector(".vendor-feature"),
            e = e.querySelector(".vendor-feature-group"),
            r = e.cloneNode(!0);
        e.parentElement.removeChild(e), P(n.querySelector("p")).text(A.FeaturesText), t.features.forEach(function(e) {
            P(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.features.length && n.parentElement.removeChild(n)
    }, a.prototype.setVndrSplFtSection = function(e, t) {
        var o = this,
            n = e.querySelector(".vendor-spl-feature"),
            e = e.querySelector(".vendor-spl-feature-grp"),
            r = e.cloneNode(!0);
        n.parentElement.removeChild(e), b.isIab2orv2Template && t.specialFeatures.forEach(function(e) {
            P(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.specialFeatures.length ? n.parentElement.removeChild(n) : P(n.querySelector("p")).text(A.SpecialFeaturesText)
    }, a.prototype.setVndrAccTxt = function(e, t) {
        t = t.querySelector(k.P_Acc_Txt);
        t && v.setHtmlAttributes(t, {
            id: "IAB-ACC-TXT" + e,
            "aria-labelledby": "IAB-ACC-TXT" + e,
            role: "region"
        })
    }, a.prototype.setVndrDisclosure = function(e, t, o) {
        t.deviceStorageDisclosureUrl && (v.setHtmlAttributes(o, {
            "disc-vid": e
        }), I.discVendors[e] = {
            isFetched: !1,
            disclosureUrl: t.deviceStorageDisclosureUrl
        })
    }, a.prototype.setVndrListSelectAllChkBoxs = function() {
        var e = P("#onetrust-pc-sdk " + k.P_Sel_All_Vendor_Consent_Handler).el[0],
            e = (e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterSelectAllVendorsText + " " + A.LegitInterestText), P("#onetrust-pc-sdk " + k.P_Sel_All_Vendor_Leg_Handler).el[0]);
        e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterSelectAllVendorsText + " " + A.ConsentText)
    }, a.prototype.setVndrConsentPurposes = function(e, t, o) {
        var n = this,
            r = e.querySelector(".vendor-consent-group"),
            i = e.querySelector(".vendor-option-purpose"),
            s = r.cloneNode(!0),
            a = e.querySelector(".legitimate-interest"),
            l = !1;
        return r.parentElement.removeChild(r), t.consent && (P(i.querySelector("p")).text(A.ConsentPurposesText), o.purposes.forEach(function(e) {
            P(s.querySelector(n.CONSENT_CATEGORY)).text(e.purposeName);
            e = s.querySelector(".consent-status");
            e && s.removeChild(e), a.insertAdjacentHTML("beforebegin", s.outerHTML), l = !0
        })), t.consent || i.parentElement.removeChild(i), l
    }, a.prototype.getVndrTglCntr = function(e) {
        return S.isV2Template ? L.chkboxEl.cloneNode(!0) : e.querySelector(".ot-checkbox")
    }, a.prototype.attachVendorsToDOM = function() {
        for (var u, p, h = this, g = I.vendors.list, C = I.vendors.vendorTemplate.cloneNode(!0), y = (I.discVendors = {}, S.isV2Template && (u = C.querySelector(".ot-ven-pur").cloneNode(!0), p = C.querySelector(k.P_Ven_Disc).cloneNode(!0), P(C.querySelector(".ot-ven-dets")).html("")), document.createDocumentFragment()), f = this, e = 0; e < g.length; e++) ! function(e) {
            var t, o, n = C.cloneNode(!0),
                r = g[e].vendorId,
                i = g[e].vendorName,
                s = n.querySelector("." + k.P_Ven_Bx),
                a = I.vendorsSetting[r],
                l = (v.setHtmlAttributes(s, {
                    id: "IAB" + r,
                    name: "IAB" + r,
                    "aria-controls": "IAB-ACC-TXT" + r,
                    "aria-label": i
                }), s.nextElementSibling.setAttribute("for", "IAB" + r), n.querySelector(k.P_Ven_Name).innerText = i, f.updateIABLinksDOM(g[e], n), f.getVndrTglCntr(n)),
                c = n.querySelector(k.P_Tgl_Cntr),
                d = (S.isV2Template || l.parentElement.removeChild(l), n.querySelector(k.P_Arrw_Cntr));
            f.setVdrConsentTglOrChbox(r, l, i, c, d, e), f.setVdrLegIntTglOrChbx(r, n, l, i, e, d, c), S.isV2Template && (c.insertAdjacentElement("beforeend", L.arrowEl.cloneNode(!0)), A.PCAccordionStyle !== le.Caret) && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", L.plusMinusEl.cloneNode(!0)), f.setVndrAccTxt(r, n), f.setVndrDisclosure(r, g[e], s), S.isV2Template ? f.populateVendorDetailsHtml(n, u, g[e], p) : (t = n.querySelector(".legitimate-interest"), l = n.querySelector(".legitimate-interest-group"), o = l.cloneNode(!0), p = n.querySelector(k.P_Ven_Disc), i = n.querySelector(k.P_Ven_Dets), d = p.cloneNode(!0), p.parentElement.removeChild(p), f.attachVendorDisclosure(d, g[e]), i.insertAdjacentElement("afterbegin", d), f.setVndrConsentPurposes(n, a, g[e]), c = o.querySelector(".vendor-opt-out-handler"), b.isIab2orv2Template && c.parentElement.removeChild(c), l.parentElement.removeChild(l), a.legInt && (P(t.querySelector("p")).text(A.LegitimateInterestPurposesText), b.legIntSettings.PAllowLI) && b.isIab2orv2Template && g[e].legIntPurposes.forEach(function(e) {
                P(o.querySelector(h.CONSENT_CATEGORY)).text(e.purposeName), t.insertAdjacentHTML("afterend", o.outerHTML)
            }), a.legInt || t.parentElement.removeChild(t), f.setVndrSplPurSection(n, g[e]), f.setVndrFtSection(n, g[e]), f.setVndrSplFtSection(n, g[e]), (r = s.parentElement.querySelector(".vendor-purposes p")).parentElement.removeChild(r)), y.appendChild(n), f.setVndrListSelectAllChkBoxs()
        }(e);
        document.querySelector("#onetrust-pc-sdk " + k.P_Vendor_Container).append(y)
    }, a.prototype.updateIABLinksDOM = function(e, t) {
        var o = e.vendorName,
            n = t.querySelector(k.P_Ven_Link),
            t = t.querySelector(k.P_Ven_Leg_Claim),
            r = b.isTcfV2Template ? e.vendorPrivacyUrl : e.policyUrl;
        v.setHtmlAttributes(n, {
            href: r,
            rel: "noopener",
            target: "_blank"
        }), n.innerHTML = A.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + A.NewWinTxt + "</span>", n.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), b.isTcfV2Template && e.legIntClaim && 0 < A.PCIABVendorLegIntClaimText.trim().length ? (v.setHtmlAttributes(t, {
            href: e.legIntClaim,
            rel: "noopener",
            target: "_blank"
        }), t.innerHTML = A.PCIABVendorLegIntClaimText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + A.NewWinTxt + "</span>", t.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>")) : t.remove()
    }, a.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r, i, s, a, l, c, d, u, e = e.querySelector(".ot-ven-dets"),
            p = I.vendorsSetting[o.vendorId],
            n = n.cloneNode(!0);
        this.attachVendorDisclosure(n, o), e.insertAdjacentElement("beforeEnd", n), b.isTcfV2Template && null != (n = o.dataDeclaration) && n.length && (n = t.cloneNode(!0), r = "<h5>" + A.PCVListDataDeclarationText + "</h5>", r += "<ul>", o.dataDeclaration.forEach(function(e) {
            r += "<li><p>" + e.Name + "</p></li>"
        }), r += "</ul>", n.innerHTML = r, e.insertAdjacentElement("beforeEnd", n)), b.isTcfV2Template && null !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && void 0 !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && (n = t.cloneNode(!0), c = 1 === o.dataRetention.stdRetention ? A.PCenterVendorListLifespanDay : A.PCenterVendorListLifespanDays, s = "<h5>" + A.PCVListDataRetentionText + "</h5>", s += "<li><p>" + A.PCVListStdRetentionText + " (" + o.dataRetention.stdRetention + " " + c + ")</p></li>", n.innerHTML = s, e.insertAdjacentElement("beforeEnd", n)), p.consent && (c = t.cloneNode(!0), i = "<h5>" + A.ConsentPurposesText + "</h5>", i += "<ul>", o.purposes.forEach(function(e) {
            var t;
            i += "<li><p>" + e.purposeName, b.isTcfV2Template && null != (t = o.dataRetention) && t.purposes && o.dataRetention.purposes[e.purposeId] && (e = 1 === (t = o.dataRetention.purposes[e.purposeId].retention) ? A.PCenterVendorListLifespanDay : A.PCenterVendorListLifespanDays, i += " (" + t + " " + e + ")"), i += "</p></li>"
        }), i += "</ul>", c.innerHTML = i, e.insertAdjacentElement("beforeEnd", c)), p.legInt && o.legIntPurposes.length && (s = t.cloneNode(!0), a = "<h5>" + A.LegitimateInterestPurposesText + "</h5>", a += "<ul>", o.legIntPurposes.forEach(function(e) {
            a += "<li><p>" + e.purposeName + "</p></li>"
        }), a += "</ul>", s.innerHTML = a, e.insertAdjacentElement("beforeEnd", s)), b.isIab2orv2Template && o.specialPurposes.length && (n = t.cloneNode(!0), l = "<h5>" + A.SpecialPurposesText + "</h5>", l += "<ul>", o.specialPurposes.forEach(function(e) {
            var t;
            l += "<li><p>" + e.purposeName, b.isTcfV2Template && null != (t = o.dataRetention) && t.specialPurposes && o.dataRetention.specialPurposes[e.purposeId] && (e = 1 === (t = o.dataRetention.specialPurposes[e.purposeId].retention) ? A.PCenterVendorListLifespanDay : A.PCenterVendorListLifespanDays, l += " (" + t + " " + e + ")"), l += "</p></li>"
        }), l += "</ul>", n.innerHTML = l, e.insertAdjacentElement("beforeEnd", n)), o.features.length && (c = t.cloneNode(!0), d = "<h5>" + A.FeaturesText + "</h5>", d += "<ul>", o.features.forEach(function(e) {
            d += "<li><p>" + e.featureName + "</p></li>"
        }), d += "</ul>", c.innerHTML = d, e.insertAdjacentElement("beforeEnd", c)), b.isIab2orv2Template && o.specialFeatures.length && (p = t.cloneNode(!0), u = "<h5>" + A.SpecialFeaturesText + "</h5>", u += "<ul>", o.specialFeatures.forEach(function(e) {
            u += "<li><p>" + e.featureName + "</p></li>"
        }), u += "</ul>", p.innerHTML = u, e.insertAdjacentElement("beforeEnd", p))
    }, a.prototype.InitializeVendorList = function() {
        var e;
        I.vendors.list = I.iabData ? I.iabData.vendors : null, I.vendors.vendorTemplate = P(k.P_Vendor_Container + " li").el[0].cloneNode(!0), P("#onetrust-pc-sdk " + k.P_Vendor_Container).html(""), S.isV2Template || b.pcName !== rt || (e = I.vendors.vendorTemplate.querySelectorAll(k.P_Acc_Header), (e = b.legIntSettings.PAllowLI && b.isIab2orv2Template ? e[0] : e[1]).parentElement.removeChild(e))
    }, a.prototype.cancelVendorFilter = function() {
        for (var e = P("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid"),
                o = 0 <= I.filterByIABCategories.indexOf(o);
            v.setCheckedAttribute(null, e[t], o)
        }
    }, a.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h5>" + A.PCenterVendorListLifespan + " :</h5><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + A.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, a.prototype.updateVendorFilterList = function() {
        for (var e = P("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-purposeid");
            e[t].checked && I.filterByIABCategories.indexOf(n) < 0 ? I.filterByIABCategories.push(n) : !e[t].checked && -1 < I.filterByIABCategories.indexOf(n) && (o = I.filterByIABCategories, I.filterByIABCategories.splice(o.indexOf(n), 1))
        }
        return I.filterByIABCategories
    }, a.prototype.saveVendorStatus = function(e) {
        var t = I.vendors,
            o = I.oneTrustIABConsent,
            e = ((e = void 0 === e ? !1 : e) || (o.purpose = t.selectedPurpose.slice(), o.specialFeatures = t.selectedSpecialFeatures.slice()), o.legimateInterest = t.selectedLegInt.slice(), o.vendors = t.selectedVendors.slice(), o.legIntVendors = t.selectedLegIntVendors.slice(), I.addtlVendors);
        e.vendorConsent = Object.keys(e.vendorSelected)
    }, a.prototype.updateIabVariableReference = function() {
        var e = I.oneTrustIABConsent,
            t = I.vendors,
            o = (t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice(), I.addtlVendors);
        o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }, a.prototype.allowAllhandler = function() {
        G.initializeIABData(!0, !1)
    }, a.prototype.rejectAllHandler = function(e) {
        G.initializeIABData(!1, !0, e = void 0 === e ? !1 : e)
    }, a.prototype.populateAddtlVendors = function(e) {
        var t, o, n, r, i, s, a, l = (A.PCAccordionStyle === le.Caret ? L.arrowEl : L.plusMinusEl).cloneNode(!0),
            c = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            d = c.cloneNode(!0),
            c = (v.removeChild(d.querySelector("#ot-selall-hostcntr")), v.removeChild(c.querySelector("#ot-selall-vencntr")), v.removeChild(c.querySelector("#ot-selall-licntr")), L.accordionEl.cloneNode(!0)),
            c = (c.classList.add("ot-iab-acc"), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)), c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCIABVendorsText + "</div>"), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", d), c.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", P("#ot-ven-lst").el[0]), P("#ot-lst-cnt .ot-sdk-column").append(c), c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCIABVendorsText), this.iabAccInit = !0, d.cloneNode(!0)),
            u = (v.removeChild(c.querySelector("#ot-selall-licntr")), c.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", c.querySelector("input").id = "ot-selall-adtlven-handler", c.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler"), L.accordionEl.cloneNode(!0)),
            p = (u.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)), u.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCGoogleVendorsText + "</div>"), u.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", c), u.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), u.classList.add("ot-adtlv-acc"), u.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCGoogleVendorsText), I.vendors.vendorTemplate.cloneNode(!0));
        for (t in p.querySelector("button").classList.remove("ot-ven-box"), p.querySelector("button").classList.add("ot-addtl-venbox"), v.removeChild(p.querySelector(".ot-acc-txt")), e) e[t] && (o = p.cloneNode(!0), n = e[t].name, o.querySelector(k.P_Ven_Name).innerText = n, r = o.querySelector("button"), v.setHtmlAttributes(r, {
            id: "Adtl-IAB" + t
        }), v.setHtmlAttributes(o.querySelector(k.P_Ven_Link), {
            href: e[t].policyUrl,
            rel: "noopener",
            target: "_blank"
        }), o.querySelector(k.P_Ven_Link).innerHTML = A.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + A.NewWinTxt + "</span>", (r = L.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"), r.classList.add("ot-ven-adtlctgl"), i = Boolean(I.addtlVendors.vendorSelected[t]), (s = r.querySelector("input")).classList.add("ot-addtlven-chkbox-handler"), a = r.querySelector(this.LABEL_STATUS), A.PCShowConsentLabels ? a.innerHTML = i ? A.PCActiveText : A.PCInactiveText : v.removeChild(a), v.setCheckedAttribute("", s, i), v.setHtmlAttributes(s, {
            id: "ot-addtlven-chkbox-" + t,
            "addtl-vid": t,
            "aria-label": n
        }), r.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + t), r.querySelector(k.P_Label_Txt).textContent = n, a = o.querySelector(k.P_Tgl_Cntr), P(a).append(r), a.insertAdjacentElement("beforeend", L.arrowEl.cloneNode(!0)), A.PCAccordionStyle !== le.Caret && o.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", L.plusMinusEl.cloneNode(!0)), this.checkIfLegLinkRemove(o), P(u.querySelector("#ot-addtl-venlst")).append(o));
        P("#ot-lst-cnt .ot-sdk-column").append(u), P("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            v.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, a.prototype.populateGeneralVendors = function() {
        var e, t, o, c, d, u, p = this,
            n = A.GeneralVendors,
            r = document.querySelector(".ot-gv-acc"),
            h = !!r;
        n.length ? (this.hasGenVendors = !0, r && P(r).show(), e = (A.PCAccordionStyle === le.Caret ? L.arrowEl : L.plusMinusEl).cloneNode(!0), this.iabAccInit || this.addIabAccordion(), (t = document.createElement("div")).setAttribute("class", "ot-sel-all-chkbox"), o = L.chkboxEl.cloneNode(!0), o.id = "ot-selall-gnvencntr", o.querySelector("input").id = "ot-selall-gnven-handler", o.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), P(t).append(o), c = L.accordionEl.cloneNode(!0), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCenterGeneralVendorsText + "</div>"), A.GenVenOptOut && c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t), c.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), c.classList.add("ot-gv-acc"), c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterGeneralVendorsText), d = I.vendors.vendorTemplate.cloneNode(!0), d.querySelector("button").classList.remove("ot-ven-box"), d.querySelector("button").classList.add("ot-gv-venbox"), P(d.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), h && P("" + k.P_Gven_List).html(""), u = !0, n.forEach(function(e) {
            var t, o, n = p.mapGenVendorToHostFormat(e),
                r = d.cloneNode(!0),
                i = e.VendorCustomId,
                s = e.Name,
                a = r.querySelector(k.P_Ven_Link),
                l = (r.querySelector(k.P_Ven_Name).innerText = s, r.querySelector("button"));
            v.setHtmlAttributes(l, {
                id: "Gn-" + i
            }), e.PrivacyPolicyUrl ? (v.setHtmlAttributes(a, {
                href: e.PrivacyPolicyUrl,
                rel: "noopener",
                target: "_blank"
            }), a.innerHTML = A.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + s + " " + A.NewWinTxt + "</span>") : a.classList.add("ot-hide"), p.addDescriptionElement(a, e.Description), A.GenVenOptOut && ((l = L.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"), l.classList.add("ot-ven-gvctgl"), a = Boolean(I.genVendorsConsent[i]), (t = l.querySelector("input")).classList.add("ot-gnven-chkbox-handler"), o = l.querySelector(p.LABEL_STATUS), A.PCShowConsentLabels ? o.innerHTML = a ? A.PCActiveText : A.PCInactiveText : v.removeChild(o), v.setCheckedAttribute("", t, a), v.setHtmlAttributes(t, {
                id: "ot-gnven-chkbox-" + i,
                "gn-vid": i,
                "aria-label": s
            }), yo.isGenVenPartOfAlwaysActiveGroup(i) ? v.setDisabledAttribute(null, t, !0) : u = !1, l.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + i), l.querySelector(k.P_Label_Txt).textContent = s, o = r.querySelector(k.P_Tgl_Cntr), P(o).append(l), o.insertAdjacentElement("beforeend", L.arrowEl.cloneNode(!0))), A.PCAccordionStyle !== le.Caret && r.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", L.plusMinusEl.cloneNode(!0)), e.Cookies.length || P(r).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                e = p.getCookieElement(e, n);
                P(r.querySelector(".ot-host-opt")).append(e)
            }), p.checkIfLegLinkRemove(r), P(h ? "" + k.P_Gven_List : c.querySelector("" + k.P_Gven_List)).append(r)
        }), h || P("#ot-lst-cnt .ot-sdk-column").append(c), P("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            v.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), u && v.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)) : (this.hasGenVendors = !1, r && P(r).hide())
    }, a.prototype.addIabAccordion = function() {
        var e = (A.PCAccordionStyle === le.Caret ? L.arrowEl : L.plusMinusEl).cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            o = t.cloneNode(!0),
            t = (v.removeChild(o.querySelector("#ot-selall-hostcntr")), v.removeChild(t.querySelector("#ot-selall-vencntr")), v.removeChild(t.querySelector("#ot-selall-licntr")), L.accordionEl.cloneNode(!0));
        t.classList.add("ot-iab-acc"), t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), t.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCIABVendorsText + "</div>"), t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), t.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", P("#ot-ven-lst").el[0]), P("#ot-lst-cnt .ot-sdk-column").append(t), t.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCIABVendorsText), this.iabAccInit = !0
    }, a.prototype.showConsentHeader = function() {
        var e = b.legIntSettings;
        P("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || P("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, a.prototype.setBackBtnTxt = function() {
        (S.isV2Template ? (P(k.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, A.PCenterBackText), P(k.P_Vendor_List + " .back-btn-handler title")) : P(k.P_Vendor_List + " .back-btn-handler .pc-back-button-text")).html(A.PCenterBackText)
    }, a.prototype.getCookieElement = function(e, t) {
        var o = I.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0),
            r = (n.classList.remove("cookie-name-container"), P(o).html(""), e.Name),
            i = (A.AddLinksToCookiepedia && t.isFirstParty && (r = y.getCookieLabel(e, A.AddLinksToCookiepedia)), n.cloneNode(!0));
        return i.classList.add(k.P_c_Name), i.querySelector("div:nth-child(1)").innerHTML = A.pcCListName, i.querySelector("div:nth-child(2)").innerHTML = r, P(o).append(i), A.pcShowCookieHost && ((r = n.cloneNode(!0)).classList.add(k.P_c_Host), r.querySelector("div:nth-child(1)").innerHTML = A.pcCListHost, r.querySelector("div:nth-child(2)").innerHTML = e.Host, P(o).append(r)), A.pcShowCookieDuration && ((i = n.cloneNode(!0)).classList.add(k.P_c_Duration), i.querySelector("div:nth-child(1)").innerHTML = A.pcCListDuration, i.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? A.LifespanTypeText : y.getDuration(e), P(o).append(i)), A.pcShowCookieType && (r = t.Type === ge.GenVendor ? !e.isThirdParty : t.isFirstParty, (i = n.cloneNode(!0)).classList.add(k.P_c_Type), i.querySelector("div:nth-child(1)").innerHTML = A.pcCListType, i.querySelector("div:nth-child(2)").innerHTML = r ? A.firstPartyTxt : A.thirdPartyTxt, P(o).append(i)), A.pcShowCookieCategory && (r = void 0, r = t.Type === ge.GenVendor ? e.category : (t.isFirstParty ? e : t).groupName) && ((i = n.cloneNode(!0)).classList.add(k.P_c_Category), i.querySelector("div:nth-child(1)").innerHTML = A.pcCListCategory, i.querySelector("div:nth-child(2)").innerHTML = r, P(o).append(i)), A.pcShowCookieDescription && e.description && ((t = n.cloneNode(!0)).classList.add(k.P_c_Desc), t.querySelector("div:nth-child(1)").innerHTML = A.pcCListDescription, t.querySelector("div:nth-child(2)").innerHTML = e.description, P(o).append(t)), o
    }, a.prototype.getNoResultsFound = function(e) {
        e = I.showTrackingTech ? A.PCTechNotFound : e ? A.PCHostNotFound : A.PCVendorNotFound;
        return " " + e + "."
    }, a.prototype.getAdditionalTechnologiesHtml = function(e) {
        var t = document.createDocumentFragment(),
            o = A.AdditionalTechnologiesConfig,
            n = 0 < e.Cookies.length;
        return (n = n && e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME ? 0 < e.Cookies[0].Cookies.length : n) && ((n = N.getMainAccordionContainer(o.PCCookiesLabel, o.PCCookiesLabel, !1)).classList.add(this.TECH_COOKIES_SELECTOR), t.appendChild(n)), 0 < e.LocalStorages.length && ((n = N.getMainAccordionContainer(o.PCLocalStorageLabel, o.PCLocalStorageLabel)).classList.add("tech-local"), N.setSessionLocalStorageTemplate(n, e.LocalStorages, A.AdditionalTechnologiesConfig.PCLocalStorageDurationText), t.appendChild(n)), 0 < e.SessionStorages.length && ((n = N.getMainAccordionContainer(o.PCSessionStorageLabel, o.PCSessionStorageDurationText)).classList.add("tech-session"), N.setSessionLocalStorageTemplate(n, e.SessionStorages, A.AdditionalTechnologiesConfig.PCSessionStorageDurationText), t.appendChild(n)), t
    }, a.prototype.getMainAccordionContainer = function(e, t, o) {
        void 0 === o && (o = !0);
        var n = N.getAccordionStyleElement(),
            r = L.accordionEl.cloneNode(!0);
        return r.classList.add("ot-add-tech"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + e + "</div>"), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, t), o && r.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeend", '<ul id="ot-host-lst" style="display: block;"></ul>'), r.cloneNode(!0)
    }, a.prototype.setSessionLocalStorageTemplate = function(e, t, o) {
        var n = I.hosts.hostTemplate.cloneNode(!0),
            r = (v.removeChild(n.querySelector(".ot-a scc-txt")), e.querySelector(".ot-acc-txt " + k.P_Host_Cntr));
        r.removeAttribute("style"), r.classList.add("ot-host-opt");
        for (var i = 0, s = t; i < s.length; i++) {
            var a = s[i],
                a = N.getSessionLocalStorageElement(a, o);
            r.append(a)
        }
    }, a.prototype.getSessionLocalStorageElement = function(e, t) {
        var o = I.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0),
            r = (P(o).html(""), N.createKeyValueDivEle(n, k.P_c_Name, A.pcCListName, e.Name)),
            r = (P(o).append(r), N.createKeyValueDivEle(n, k.P_c_Host, A.pcCListHost, e.Host)),
            r = (P(o).append(r), N.createKeyValueDivEle(n, k.P_c_Duration, A.pcCListDuration, t)),
            t = (P(o).append(r), N.createKeyValueDivEle(n, k.P_c_Desc, A.pcCListDescription, e.description));
        return P(o).append(t), o
    }, a.prototype.createKeyValueDivEle = function(e, t, o, n) {
        e = e.cloneNode(!0);
        return e.classList.add(t), e.querySelector("div:nth-child(1)").innerHTML = o, e.querySelector("div:nth-child(2)").innerHTML = n, e
    }, a.prototype.getAdditionalTechnologiesDataFromGroup = function(e) {
        for (var t, o = [], n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            }, r = 0, i = N.getGroupsFromFilter(e); r < i.length; r++) {
            var s = i[r],
                a = fn.getCookiesForGroup(s),
                o = M(o, null != (t = a.firstPartyCookiesList) ? t : []);
            n.Cookies = M(n.Cookies, a.thirdPartyCookiesList), n.LocalStorages = M(n.LocalStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.LocalStorages) ? a : []), n.SessionStorages = M(n.SessionStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.SessionStorages) ? a : [])
        }
        return o.length && n.Cookies.unshift({
            HostName: A.PCFirstPartyCookieListText,
            DisplayName: A.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: o,
            Description: ""
        }), n
    }, a.prototype.getFirstsAndThirdCookisFromGroups = function(e) {
        var t = [],
            o = [];
        return N.getGroupsFromFilter(e).forEach(function(e) {
            e = fn.getCookiesForGroup(e);
            t = M(t, e.firstPartyCookiesList), o = M(o, e.thirdPartyCookiesList)
        }), {
            firstPartyCookiesList: t,
            thirdPartyCookiesList: o
        }
    }, a.prototype.getGroupsFromFilter = function(t) {
        var o = [];
        return A.Groups.forEach(function(e) {
            M(e.SubGroups, [e]).forEach(function(e) {
                (!t || !t.length || -1 !== t.indexOf(e.CustomGroupId)) && o.push(e)
            })
        }), o
    }, a.prototype.getAccordionStyleElement = function() {
        return (A.PCAccordionStyle === le.Caret ? L.arrowEl : L.plusMinusEl).cloneNode(!0)
    }, a.prototype.getFilteredAdditionaTechtData = function(e, t) {
        var o, n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            },
            r = this.getSearchQuery(e),
            e = JSON.parse(JSON.stringify(t));
        return e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && ((o = e.Cookies.shift()).Cookies = null == (t = o.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        })), n.Cookies = null == (t = e.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.DisplayName || e.HostName)
        }), o && 0 < o.Cookies.length && n.Cookies.unshift(o), n.LocalStorages = null == (t = e.LocalStorages) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        }), n.SessionStorages = null == (o = e.SessionStorages) ? void 0 : o.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        }), n
    }, a.prototype.checkIfLegLinkRemove = function(e) {
        b.isTcfV2Template && e.querySelector(k.P_Ven_Leg_Claim).remove()
    };
    var N, ci = a;

    function a() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.ARIA_LABEL_ATTRIBUTE = "aria-label", this.TECH_COOKIES_SELECTOR = "tech-cookies", this.FIRST_PARTY_COOKIES_GROUP_NAME = "first-party-cookies-group", this.LABEL_STATUS = ".ot-label-status", this.CONSENT_CATEGORY = ".consent-category", this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    pi.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(), S.moduleInitializer.CookieSPAEnabled ? P(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : P(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, pi.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += G.csBtnGroup.css;
        var t = document.createElement("div"),
            t = (P(t).html(G.csBtnGroup.html), t.querySelector("#ot-sdk-btn-floating"));
        e && t && P(t).removeClass("ot-hide"), P("#onetrust-consent-sdk").append(t), A.cookiePersistentLogo && (A.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : P(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }, pi.prototype.applyPersistentSvgOnDOM = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Dt.getPersistentCookieSvg()];
                    case 1:
                        return t = e.sent(), P(this.FLOATING_COOKIE_FRONT_BTN).html(t), w.otGuardLogoResolve(!0), [2]
                }
            })
        })
    }, pi.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !So.isLandingPage() && "true" === g.readCookieParam(h.OPTANON_CONSENT, p.AWAITING_RE_CONSENT) && this.checkForRefreshCloseImplied()
    }, pi.prototype.isImpliedConsent = function() {
        return A.ConsentModel && "implied consent" === A.ConsentModel.Name.toLowerCase()
    }, pi.prototype.checkForRefreshCloseImplied = function() {
        V.closeOptanonAlertBox(), V.close(!0)
    }, pi.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && d(e, "display: none;")
    }, pi.prototype.shouldShowBanner = function(e) {
        return A.ShowAlertNotice && !e && !A.NoBanner && !I.hideBanner
    }, pi.prototype.shouldShowPc = function(e) {
        return A.ShowAlertNotice && !e && A.NoBanner
    }, pi.prototype.windowLoadBanner = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (this.core.substitutePlainTextScriptTags(), t = S.moduleInitializer, P("#onetrust-consent-sdk").length ? o = document.getElementById("onetrust-consent-sdk") : (o = document.createElement("div"), P(o).attr("id", "onetrust-consent-sdk"), P(o).attr("data-nosnippet", "true"), P(document.body).append(o)), P(".onetrust-pc-dark-filter").length || (n = document.createElement("div"), P(n).attr("class", "onetrust-pc-dark-filter"), P(n).attr("class", "ot-hide"), P(n).attr("class", "ot-fade-in"), o.firstChild ? o.insertBefore(n, o.firstChild) : P(o).append(n)), A.IsIabEnabled && this.iab.updateIabVariableReference(), n = C.isAlertBoxClosedAndValid(), r = this.shouldShowBanner(n), i = this.shouldShowPc(n), I.ntfyRequired ? (this.hideCustomHtml(), vn.init(), vn.changeState()) : (r ? w.initializeAlartHtmlAndHandler() : (A.IsGPPEnabled && $r.setCmpDisplayStatus("disabled"), this.hideCustomHtml()), w.addEventListnerForVendorsList()), t.IsSuppressPC || (B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), A.IsIabEnabled && this.iab.InitializeVendorList()), this.prepopulateCookieOrVendorPageTitle(), this.initializeHbbTvScript(), this.insertCSBtn(!r), i) ? [4, w.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return w.insertCookieSettingText(), this.initializeFloatingButtonOnBannerLoad(i), di.insertTrackigTechOrCookiePolicy(), V.executeOptanonWrapper(), this.initializeCookieParamsOnBannerLoad(r), [2]
                }
            })
        })
    }, pi.prototype.prepopulateCookieOrVendorPageTitle = function() {
        S.isV2Template && (A.GeneralVendorsEnabled ? this.iab.setListSearchValues(Le.vendors) : this.iab.setListSearchValues(Le.cookies))
    }, pi.prototype.initializeFloatingButtonOnBannerLoad = function(e) {
        var t = P(this.FLOATING_COOKIE_BTN),
            o = P(this.FLOATING_COOKIE_FRONT_BTN),
            n = P(this.FLOATING_COOKIE_BACK_BTN);
        t.length && (t.attr("data-title", A.CookieSettingButtonText), o.el[0].setAttribute(pt, A.AriaOpenPreferences), n.el[0].setAttribute(pt, A.AriaClosePreferences), e ? (o.el[0].setAttribute(ht, !0), o.el[0].style.display = "none") : (n.el[0].setAttribute(ht, !0), n.el[0].style.display = "none"))
    }, pi.prototype.initializeCookieParamsOnBannerLoad = function(e) {
        g.readCookieParam(h.OPTANON_CONSENT, co) || lo.writeGrpParam(h.OPTANON_CONSENT), g.readCookieParam(h.OPTANON_CONSENT, uo) || lo.writeHstParam(h.OPTANON_CONSENT), I.showGeneralVendors && !g.readCookieParam(h.OPTANON_CONSENT, po) && lo.writeGenVenCookieParam(h.OPTANON_CONSENT), I.vsIsActiveAndOptOut && !g.readCookieParam(h.OPTANON_CONSENT, ho) && lo.writeVSConsentCookieParam(h.OPTANON_CONSENT), e && Ao.setBannerFocus()
    }, pi.prototype.initializeHbbTvScript = function() {
        var e;
        S.moduleInitializer.RemoteActionsEnabled && ((e = document.getElementById("hbbtv")) && e.remove(), (e = document.createElement("script")).id = "hbbtv", e.src = I.storageBaseURL + "/scripttemplates/" + S.moduleInitializer.Version + "/hbbtv.js", e.type = "text/javascript", P(document.body).append(e))
    }, pi.prototype.insertCSBtn = function(e) {
        G.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), w.initFlgtCkStgBtnEventHandlers())
    }, pi.prototype.insertTrackingTechnologies = function() {
        var e;
        P("#ot-sdk-cookie-policy, #optanon-cookie-policy").length && (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml ? window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, A, P) : ((e = document.createElement("script")).id = "cookie-policy-script", e.onload = function() {
            return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, A, P)
        }, e.type = "text/javascript", e.src = I.storageBaseURL + "/scripttemplates/" + S.moduleInitializer.Version + "/trackingTechnologies.js", document.head.appendChild(e)))
    }, pi.prototype.insertTrackigTechOrCookiePolicy = function() {
        S.fp.CookieV2TrackingTechnologies ? di.insertTrackingTechnologies() : lr.insertCookiePolicyHtml()
    };
    var di, ui = pi;

    function pi() {
        this.iab = N, this.core = fn, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open", this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }
    D(yi, hi = pr), yi.prototype.Close = function(e) {
        V.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
    }, yi.prototype.RejectAll = function(e) {
        V.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
    }, yi.prototype.AllowAll = function(e) {
        V.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
    }, yi.prototype.ToggleInfoDisplay = function() {
        w.toggleInfoDisplay()
    };
    var hi, gi, Ci = yi;

    function yi() {
        var e = null !== hi && hi.apply(this, arguments) || this;
        return e.mobileOnlineURL = b.mobileOnlineURL, e
    }
    Si.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1), e ? (I.dsParams.id = e.trim(), ur.setDataSubjectIdV2(e)) : e = I.dsParams.id, o && (I.dsParams.isAnonymous = o), t = t || I.dsParams.token, e && t && Dt.getConsentProfile(e, t).then(function(e) {
            return fi.consentProfileCallback(e)
        })
    }, Si.prototype.checkCarryOverAnonConsentForIAB = function() {
        var e, t, o, n;
        null != (e = b.consentableIabGrps) && e.length && (e = I.consentPreferences, t = b.carryOverAnonymousConsent, n = b.checkLocalConsentForIabPurposes, t && n ? (o = (n = this.checkLatestConsentDate()).islocalConsentLatest, n = n.consentedDate, o ? b.forceCreateTrxLocalConsentIsGreater = !0 : (g.writeCookieParam(h.OPTANON_CONSENT, p.PREV_USER_CONSENT, ""), (o = e.syncGroups[I.syncGrpId]) && (o.tcStringV2 && (I.isIabSynced = !0, I.syncRequired = !0, g.setCookie(h.EU_PUB_CONSENT, o.tcStringV2, A.ReconsentFrequencyDays, !1, n)), o.gacString) && (I.isGacSynced = !0, I.syncRequired = !0, g.setCookie(h.ADDITIONAL_CONSENT_STRING, o.gacString, A.ReconsentFrequencyDays, !1, n)))) : t || (o = !e || e.preferences.length <= 0, n = "1" === g.readCookieParam(h.OPTANON_CONSENT, p.IS_ANONYMOUS_CONSENT), o && n && (b.forceCreateTrxLocalConsentIsGreater = !0)))
    }, Si.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = g.getCookie(h.ALERT_BOX_CLOSED),
            n = !1,
            r = !0,
            i = !1,
            s = v.strToArr(g.readCookieParam(h.OPTANON_CONSENT, "groups")),
            a = "1" === g.readCookieParam(h.OPTANON_CONSENT, p.IS_ANONYMOUS_CONSENT) && !b.carryOverAnonymousConsent;
        if (e && e.preferences.length)
            for (var l = 0, c = e.preferences; l < c.length; l++) var d = c[l],
                d = this.syncGroupWithPreferences(d, s, o, i, t, a),
                n = n || d.syncRequired,
                i = i || d.syncOnlyDate,
                o = d.alertBoxCookieVal;
        else r = !1;
        return {
            alertBoxCookieVal: o,
            groupsConsent: s,
            profileFound: r,
            syncRequired: n,
            syncOnlyDate: i = i && !n
        }
    }, Si.prototype.syncGroupWithPreferences = function(e, t, o, n, r, i) {
        var s = e.status === H[H.NO_CONSENT],
            a = b.domainGrps[e.id],
            l = o,
            c = !1;
        if (a)
            if (-1 < I.grpsSynced.indexOf(a) && (I.syncedValidGrp = !0), s && t.length) {
                for (var d = -1, u = 0; u < t.length; u++)
                    if (t[u].split(":")[0] === a) {
                        d = u;
                        break
                    } - 1 < d && (t.splice(d, 1), I.grpsSynced.push(a))
            } else !s && (!o || i || new Date(e.lastInteractionDate) > new Date(l)) && (s = this.getConsentValue(e.status), n = !0, o = e.lastInteractionDate, c = this.updateCookieCatConsent(r, a, s, t, c));
        return {
            syncRequired: c,
            syncOnlyDate: n,
            alertBoxCookieVal: o
        }
    }, Si.prototype.updateCookieCatConsent = function(e, t, o, n, r) {
        if (!e && this.isCookieGroup(t)) {
            for (var i = t + ":" + o, s = -1, a = 0; a < n.length; a++) {
                var l = n[a].split(":");
                if (l[0] === t) {
                    l[1] !== o && (n[a] = i, r = !0), s = a;
                    break
                }
            } - 1 === s && (n.push(i), r = !0)
        }
        return r
    }, Si.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
            case H[H.ACTIVE]:
            case H[H.ALWAYS_ACTIVE]:
                t = he.Active;
                break;
            case H[H.EXPIRED]:
            case H[H.OPT_OUT]:
            case H[H.PENDING]:
            case H[H.WITHDRAWN]:
                t = he.InActive
        }
        return t
    }, Si.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2|IAB2V2|IFE2V2|ISP2V2|ISF2V2/.test(e)
    }, Si.prototype.hideBannerAndPc = function() {
        var e = y.isBannerVisible();
        e && y.hideBanner(), (e || I.isPCVisible) && (rn.removeAddedOTCssStyles(), un.hideConsentNoticeV2())
    }, Si.prototype.setOptanonConsentCookie = function(e, t) {
        var o;
        e.syncRequired && (g.writeCookieParam(h.OPTANON_CONSENT, "groups", e.groupsConsent.toString()), o = g.getCookie(h.OPTANON_CONSENT), g.setCookie(h.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal)), g.writeCookieParam(h.OPTANON_CONSENT, p.PREV_USER_CONSENT, ""), g.writeCookieParam(h.OPTANON_CONSENT, p.IS_ANONYMOUS_CONSENT, "0"))
    }, Si.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[I.syncGrpId] && o.syncGroups[I.syncGrpId].tcStringV2 ? g.getCookie(h.EU_PUB_CONSENT) !== o.syncGroups[I.syncGrpId].tcStringV2 && (e.syncRequired = !0, g.setCookie(h.EU_PUB_CONSENT, o.syncGroups[I.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, Si.prototype.setAddtlVendorsCookie = function(e, t) {
        A.UseGoogleVendors && !g.getCookie(h.ADDITIONAL_CONSENT_STRING) && g.setCookie(h.ADDITIONAL_CONSENT_STRING, I.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal))
    }, Si.prototype.createTrans = function() {
        var e = g.readCookieParam(h.OPTANON_CONSENT, "iType");
        oi.createConsentTxn(!1, pe[e], !1, !0)
    }, Si.prototype.updateGrpsDom = function(s) {
        for (var e = 0, t = E.getAllGroupElements(); e < t.length; e++) ! function(e) {
            var t, o = e.getAttribute("data-optanongroupid"),
                n = f.getGroupById(o),
                r = !0,
                i = v.findIndex(I.groupsConsent, function(e) {
                    return e.split(":")[0] === o
                });
            (-1 < i && I.groupsConsent[i].split(":")[1] === he.InActive || A.IsIabEnabled && s && "COOKIE" !== n.Type && -1 < (t = s.preferences.findIndex(function(e) {
                return e.id === n.PurposeId.toLowerCase()
            })) && -1 === ["ACTIVE", "ALWAYS_ACTIVE"].findIndex(function(e) {
                return e === s.preferences[t].status
            })) && (r = !1), E.toggleGrpElements(e, n, r), E.toogleSubGroupElement(e, r, !1, !0), E.toogleSubGroupElement(e, r, !0, !0)
        }(t[e])
    }, Si.prototype.updateVendorsDom = function() {
        A.IsIabEnabled && (N.updateIabVariableReference(), Bn.toggleVendorConsent(), b.legIntSettings.PAllowLI) && (b.legIntSettings.PShowLegIntBtn ? Bn.updateVendorLegBtns() : Bn.toggleVendorLi())
    }, Si.prototype.consentProfileCallback = function(r) {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return F(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = this.syncPreferences(r), o = A.ReconsentFrequencyDays, n = C.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), A.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (C.syncAlertBoxCookie(t.alertBoxCookieVal), C.syncCookieExpiry()), t.syncRequired && t.profileFound) ? (g.writeCookieParam(h.OPTANON_CONSENT, p.PREV_USER_CONSENT, ""), g.writeCookieParam(h.OPTANON_CONSENT, p.IS_ANONYMOUS_CONSENT, "0"), I.syncRequired = t.syncRequired, C.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), V.closeOptanonAlertBox(), G.initGrpsAndHosts(), !n && A.NtfyConfig.ShowNtfy && C.isAlertBoxClosedAndValid() ? [4, vn.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), vn.init(), vn.changeState(), e.label = 2;
                    case 2:
                        return A.IsIabEnabled && (C.setIABCookieData(), G.initializeIabPurposeConsentOnReload(), no.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(r), this.updateVendorsDom(), So.setLandingPathParam(p.NOT_LANDING_PAGE), fn.substitutePlainTextScriptTags(), gn.updateGtmMacros(!0), V.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, Si.prototype.checkLatestConsentDate = function() {
        var e = g.getCookie(h.ALERT_BOX_CLOSED),
            e = new Date(e),
            t = b.serverLatestDateForCookies,
            o = this.getLastesConsentDateFromIabConsent();
        return o && e < o ? (g.setCookie(h.ALERT_BOX_CLOSED, o = o < t ? t : o, A.ReconsentFrequencyDays, !1, o), {
            islocalConsentLatest: !1,
            consentedDate: o
        }) : e < t ? (g.setCookie(h.ALERT_BOX_CLOSED, t, A.ReconsentFrequencyDays, !1, t), {
            islocalConsentLatest: !1,
            consentedDate: t
        }) : {
            islocalConsentLatest: !0,
            consentedDate: e
        }
    }, Si.prototype.getLastesConsentDateFromIabConsent = function() {
        for (var e = I.consentPreferences, t = b.consentableIabGrps.reduce(function(e, t) {
                return e[t.PurposeId] = t, e
            }, {}), o = null, n = 0, r = e.preferences; n < r.length; n++) {
            var i = r[n];
            t[i.id.toUpperCase()] && (i = new Date(i.lastInteractionDate), !o || o < i) && (o = i)
        }
        return o
    };
    var fi, mi = Si;

    function Si() {}
    Ti.prototype.removeCookies = function() {
        g.removePreview(), g.removeOptanon(), g.removeAlertBox(), g.removeIab2(), g.removeAddtlStr(), g.removeVariant(), I.isPreview && vi.setPreviewCookie(), I.urlParams.get("otreset") && I.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + I.urlParams.toString() + window.location.hash;
        vi.replaceHistory(e)
    }, Ti.prototype.setPreviewCookie = function() {
        var e = new Date,
            t = (e.setTime(e.getTime() + 864e5), I.geoFromUrl ? "&geo=" + I.geoFromUrl : ""),
            e = "expiry=" + e.toISOString() + t;
        g.setCookie(h.OT_PREVIEW, e, 1, !1)
    }, Ti.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return vi.onMessage(e)
        })
    }, Ti.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e), location.reload()
    }, Ti.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === vi.CLEAR_COOKIES && (vi.removeCookies(), e.source) && e.source.postMessage && e.source.postMessage(vi.CLEARED_COOKIES, e.origin)
    };
    var vi, ki, l = Ti;

    function Ti() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    Ne.initPolyfill(), g = new Lt, y = new Ft, b = new qt, Gt = new e, vi = new l, (s = window.otStubData) && (S.moduleInitializer = s.domainData, S.fp = S.moduleInitializer.TenantFeatures, I.isAMP = s.isAmp, I.dataDomainId = s.domainId, I.isPreview = s.isPreview, I.urlParams = s.urlParams, I.isV2Stub = s.isV2Stub || !1, b.gtmUpdatedinStub = s.gtmUpdated, s.isReset ? vi.removeCookies() : s.isPreview && vi.setPreviewCookie(), b.setBannerScriptElement(s.stubElement), b.setRegionRule(s.regionRule), S.fp.CookieV2TargetedTemplates && (b.conditionalLogicEnabled = !(null == (ki = b.getRegionRule().Conditions) || !ki.length), b.conditionalLogicEnabled) && (function() {
            for (var e = b.getRegionRule(), t = 0; t < e.Conditions.length; t++) try {
                if (function(e) {
                        if (e) return e = window.atob(e), Function('"use strict"; return ' + e)()
                    }(e.Conditions[t].Expression)) return b.Condition = e.Conditions[t]
            } catch (e) {
                console.warn(e);
                continue
            }
            b.allConditionsFailed = !0
        }(), b.canUseConditionalLogic = !b.allConditionsFailed), I.userLocation = s.userLocation, I.crossOrigin = s.crossOrigin, b.bannerDataParentURL = s.bannerBaseDataURL, b.mobileOnlineURL = M(b.mobileOnlineURL, s.mobileOnlineURL), ki = b.getRegionRule(), b.multiVariantTestingEnabled = S.moduleInitializer.MultiVariantTestingEnabled && 0 < ki.Variants.length && y.isDateCurrent(ki.TestEndTime), b.otDataLayer = s.otDataLayer, I.grpsSynced = s.grpsSynced || [], I.isIabSynced = s.isIabSynced, I.isGacSynced = s.isGacSynced, I.syncRequired = s.isIabSynced || s.isGacSynced || s.grpsSynced && 0 < s.grpsSynced.length, I.consentPreferences = s.preferences, I.syncGrpId = s.syncGrpId, I.consentApi = s.consentApi, I.tenantId = s.tenantId, I.geoFromUrl = s.geoFromUrl, I.nonce = s.nonce, I.setAttributePolyfillIsActive = s.setAttributePolyfillIsActive, I.storageBaseURL = s.storageBaseURL, I.identifierType = s.identifierType, b.previewMode = s.previewMode, b.prevUserWasAnon = s.prevUserWasAnon, b.userHasProfile = s.userHasProfile, b.serverLatestDateForCookies = s.serverLatestDateForCookies, b.carryOverAnonymousConsent = s.domainData.AuthenticatedConsent, b.checkLocalConsentForIabPurposes = s.checkLocalConsentForIabPurposes, b.forceCreateTrxLocalConsentIsGreater = s.forceCreateTrxLocalConsentIsGreater, b.stubUrl = s.stubUrl, Gt.populateLangSwitcherPlhdr(), window.otStubData = {
            userLocation: I.userLocation
        }, window.OneTrustStub = null),
        function() {
            u(this, void 0, void 0, function() {
                var i, s, a, l;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (f = new Jt, E = new tn, eo = new to, N = new ci, fn = new mn, V = new Mn, w = new rr, B = new Zn, $n = new er, di = new ui, S.fp.CookieV2TrackingTechnologies || (lr = new cr), Qt = new Zt, yo = new fo, G = new ai, gn = new Cn, ir = new sr, _ = new so, L = new jt, fi = new mi, Bn = new wn, Dt = new Ht, Ao = new $o, un = new pn, O = new xn, Kn = new Wn, Jn = new Xn, c = new or, S.moduleInitializer.MobileSDK ? gi = new Ci : ur = new pr, no = new ro, n = g.getCookie(h.ALERT_BOX_CLOSED), r = g.getCookie(h.OPTANON_CONSENT), n && !r && g.removeAlertBox(), b.setGCMcallback(), l = b.getRegionRule(), l = (b.canUseConditionalLogic ? b.Condition : l).UseGoogleVendors, b.isIab2orv2Template = "IAB2" === b.getRegionRuleType() || "IAB2V2" === b.getRegionRuleType(), b.isTcfV2Template = "IAB2V2" === b.getRegionRuleType(), b.isIab2orv2Template) ? [4, Promise.all([Dt.getLangJson(), Dt.fetchGvlObj(), l ? Dt.fetchGoogleVendors() : Promise.resolve(null), Dt.loadCMP()])] : [3, 2];
                        case 1:
                            return l = e.sent(), i = l[0], s = l[1], a = l[2], I.gvlObj = s, I.addtlVendorsList = a ? a.vendors : null, [3, 4];
                        case 2:
                            return [4, Dt.getLangJson()];
                        case 3:
                            i = e.sent(), e.label = 4;
                        case 4:
                            return i.DomainData.IsGPPEnabled ? [4, Dt.loadGPP()] : [3, 6];
                        case 5:
                            e.sent(), $r = new ei, e.label = 6;
                        case 6:
                            var t, o;
                            return function(d) {
                                u(this, void 0, void 0, function() {
                                    var l, c;
                                    return F(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                    var t, o = S.moduleInitializer.MobileSDK;
                                                    t = o ? gi : ur;
                                                    var n = {
                                                        AllowAll: t.AllowAll,
                                                        BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                        Close: t.Close,
                                                        getCSS: t.getCSS,
                                                        GetDomainData: t.GetDomainData,
                                                        getGeolocationData: t.getGeolocationData,
                                                        getHTML: t.getHTML,
                                                        Init: t.Init,
                                                        InitializeBanner: t.InitializeBanner,
                                                        initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                        InsertHtml: t.InsertHtml,
                                                        InsertScript: t.InsertScript,
                                                        IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                        IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                        LoadBanner: t.LoadBanner,
                                                        OnConsentChanged: _.OnConsentChanged,
                                                        ReconsentGroups: t.ReconsentGroups,
                                                        RejectAll: t.RejectAll,
                                                        SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                        setGeoLocation: t.setGeoLocation,
                                                        ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                        TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                        useGeoLocationService: t.useGeoLocationService,
                                                        FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                        changeLanguage: t.changeLang,
                                                        testLog: t.getTestLogData,
                                                        UpdateConsent: t.updateSingularConsent,
                                                        IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                        UpdateGCM: t.updateGCM
                                                    };
                                                    e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, n.getDSDefaultIdentifier = t.getDSDefaultIdentifier, I.isV2Stub ? n.syncConsentProfile = fi.syncConsentProfile : n.SendReceipt = t.sendReceipt);
                                                    o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = I.otCookieData);
                                                    e.IsIabEnabled && (n.updateConsentFromCookies = _.updateConsentFromCookie, n.getPingRequest = no.getPingRequestForTcf, n.getVendorConsentsRequestV2 = no.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                    return n
                                                }(d.DomainData)), C.initializeBannerVariables(d), fi.checkCarryOverAnonConsentForIAB(), lo = new go, To = new Po, oi = new ni, rn = new cn, So = new vo, Un = new jn, vn = new On;
                                                var t, o, n, r = window.OTExternalConsent,
                                                    i = (r && r.consentedDate && (r.groups || r.tcString || r.addtlString) && (t = [], (i = r.groups.split(",")).forEach(function(e) {
                                                        e = e.split(":");
                                                        t.push({
                                                            lastInteractionDate: r.consentedDate,
                                                            status: "1" === e[1] ? H[H.ACTIVE] : H[H.OPT_OUT],
                                                            id: e[0]
                                                        }), I.grpsSynced.push(e[0])
                                                    }), I.consentPreferences = {
                                                        preferences: t,
                                                        syncGroups: null
                                                    }, I.syncRequired = !0, lo.updateGroupsInCookie(h.OPTANON_CONSENT, i), g.setCookie(h.ALERT_BOX_CLOSED, r.consentedDate, 365), r.tcString && (I.isIabSynced = !0, g.setCookie(h.EU_PUB_CONSENT, r.tcString, 365)), r.addtlString) && (I.isGacSynced = !0, g.setCookie(h.ADDITIONAL_CONSENT_STRING, "" + r.addtlString, 365)), I.isPreview && (C.syncOtPreviewCookie(), vi.bindStopPreviewEvent()), l = fi.syncPreferences(I.consentPreferences, !0), (I.syncRequired || l.syncRequired) && C.syncAlertBoxCookie(l.alertBoxCookieVal), C.syncCookieExpiry(), d),
                                                    s = window.OneTrust.dataSubjectParams || {},
                                                    a = ((I.dsParams = s).id && (o = s.identifierType || (null == (o = i.CommonData.ConsentIntegration) ? void 0 : o.DefaultIdentifier), ur.setDataSubjectIdV2(s.id, s.isAnonymous, o)), i),
                                                    s = null == (o = s.identifierType) ? void 0 : o.trim();
                                                return I.isV2Stub && (o = void 0, n = null == (n = I.identifierType) ? void 0 : n.trim(), o = n || s || (null == (n = a.CommonData.ConsentIntegration) ? void 0 : n.DefaultIdentifier), g.writeCookieParam(h.OPTANON_CONSENT, p.IDENTIFIER_TYPE, o)), b.multiVariantTestingEnabled && b.selectedVariant && g.setCookie(h.SELECTED_VARIANT, b.selectedVariant.Id, A.ReconsentFrequencyDays), [4, no.initializeIABModule()];
                                            case 1:
                                                return e.sent(), window.OneTrust.Init(!0), d.DomainData.IsGPPEnabled && $r.initGppConsent(), [4, G.fetchAssets()];
                                            case 2:
                                                return (e.sent(), di.initBanner(), _.assetResolve(!0), Qt.initialiseCssReferences(), c = C.isIABCrossConsentEnabled(), (I.syncedValidGrp || I.isIabSynced || I.isGacSynced) && !c && A.NtfyConfig.ShowNtfy && C.isAlertBoxClosedAndValid()) ? (I.ntfyRequired = !0, [4, vn.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return c || window.OneTrust.LoadBanner(), [2]
                                        }
                                    })
                                })
                            }(i), S.moduleInitializer.WebFormIntegrationEnabled && S.moduleInitializer.WebFormSrcUrl && (n = window.otStubData, r = document.createElement("script"), t = S.moduleInitializer.WebFormSrcUrl, r.type = "text/javascript", r.src = t, o = S.moduleInitializer.TenantGuid, S.moduleInitializer.ScriptType === Me.TEST && (o += "-test"), r.setAttribute("dataId", o), r.setAttribute("worker", S.moduleInitializer.WebFormWorkerUrl), n.charset && r.setAttribute("charset", n.charset), n.crossOrigin && r.setAttribute("crossorigin", n.crossOrigin), document.querySelector('script[src="' + t + '"]') || document.getElementsByTagName("head")[0].appendChild(r)), [2]
                    }
                    var n, r
                })
            })
        }()
}();