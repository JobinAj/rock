! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "d7064313-c11a-4067-ad33-d79172ff3766", o._sentryDebugIdIdentifier = "sentry-dbid-d7064313-c11a-4067-ad33-d79172ff3766")
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
    [2808], {
        12808: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => i,
                Lightbox_Download_Button_Label: () => r,
                Lightbox_Download_Button_Tooltip: () => L,
                Lightbox_Open_Button_Label: () => f,
                Lightbox_Reset_Zoom_Button_Label: () => d,
                Lightbox_Reset_Zoom_Button_Tooltip: () => s,
                Lightbox_Zoom_In_Button_Label: () => a,
                Lightbox_Zoom_In_Button_Tooltip: () => n,
                Lightbox_Zoom_Out_Button_Label: () => l,
                Lightbox_Zoom_Out_Button__Tooltip: () => b,
                Lightbox_Zoom_Slider_Label: () => u,
                Lightbox_Zoom_Slider_Tooltip: () => g,
                default: () => c
            });
            var _ = "Zamknij podgląd",
                i = "Naciśnij {shortcut}",
                a = "Powiększ",
                n = "Naciśnij {shortcut}",
                l = "Pomniejsz",
                b = "Naciśnij {shortcut}",
                d = "Zresetuj",
                s = "Naciśnij {shortcut}",
                u = "Poziom powiększenia",
                g = "{zoom}%",
                r = "Pobierz",
                L = "Pobierz",
                f = "Powiększ obraz",
                c = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: i,
                    Lightbox_Zoom_In_Button_Label: a,
                    Lightbox_Zoom_In_Button_Tooltip: n,
                    Lightbox_Zoom_Out_Button_Label: l,
                    Lightbox_Zoom_Out_Button__Tooltip: b,
                    Lightbox_Reset_Zoom_Button_Label: d,
                    Lightbox_Reset_Zoom_Button_Tooltip: s,
                    Lightbox_Zoom_Slider_Label: u,
                    Lightbox_Zoom_Slider_Tooltip: g,
                    Lightbox_Download_Button_Label: r,
                    Lightbox_Download_Button_Tooltip: L,
                    Lightbox_Open_Button_Label: f
                }
        }
    }
]);
//# sourceMappingURL=3fc2793da4681864e92c80d47d67a68d.js.map