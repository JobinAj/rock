! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "5cfb22e4-3d88-4cd1-94dd-692567a116e2", o._sentryDebugIdIdentifier = "sentry-dbid-5cfb22e4-3d88-4cd1-94dd-692567a116e2")
    } catch (o) {}
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
    [8314], {
        15933: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => n,
                Lightbox_Download_Button_Label: () => g,
                Lightbox_Download_Button_Tooltip: () => L,
                Lightbox_Open_Button_Label: () => c,
                Lightbox_Reset_Zoom_Button_Label: () => i,
                Lightbox_Reset_Zoom_Button_Tooltip: () => s,
                Lightbox_Zoom_In_Button_Label: () => l,
                Lightbox_Zoom_In_Button_Tooltip: () => d,
                Lightbox_Zoom_Out_Button_Label: () => a,
                Lightbox_Zoom_Out_Button__Tooltip: () => b,
                Lightbox_Zoom_Slider_Label: () => r,
                Lightbox_Zoom_Slider_Tooltip: () => u,
                default: () => h
            });
            var _ = "Lightbox schließen",
                n = "{shortcut} drücken",
                l = "Heranzoomen",
                d = "{shortcut} drücken",
                a = "Herauszoomen",
                b = "{shortcut} drücken",
                i = "Zurücksetzen",
                s = "{shortcut} drücken",
                r = "Zoomstufe",
                u = "{zoom} %",
                g = "Herunterladen",
                L = "Herunterladen",
                c = "Bild vergrößern",
                h = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: n,
                    Lightbox_Zoom_In_Button_Label: l,
                    Lightbox_Zoom_In_Button_Tooltip: d,
                    Lightbox_Zoom_Out_Button_Label: a,
                    Lightbox_Zoom_Out_Button__Tooltip: b,
                    Lightbox_Reset_Zoom_Button_Label: i,
                    Lightbox_Reset_Zoom_Button_Tooltip: s,
                    Lightbox_Zoom_Slider_Label: r,
                    Lightbox_Zoom_Slider_Tooltip: u,
                    Lightbox_Download_Button_Label: g,
                    Lightbox_Download_Button_Tooltip: L,
                    Lightbox_Open_Button_Label: c
                }
        }
    }
]);
//# sourceMappingURL=71d75bace17280e693ede787a7a2758e.js.map