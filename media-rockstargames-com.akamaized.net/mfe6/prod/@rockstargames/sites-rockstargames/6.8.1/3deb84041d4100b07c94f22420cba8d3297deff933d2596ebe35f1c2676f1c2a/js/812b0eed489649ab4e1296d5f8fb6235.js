! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "4155f6e0-7bc6-4659-bff3-1ae3ba07fc8e", o._sentryDebugIdIdentifier = "sentry-dbid-4155f6e0-7bc6-4659-bff3-1ae3ba07fc8e")
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
    [881], {
        50881: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => a,
                Lightbox_Download_Button_Label: () => u,
                Lightbox_Download_Button_Tooltip: () => f,
                Lightbox_Open_Button_Label: () => L,
                Lightbox_Reset_Zoom_Button_Label: () => s,
                Lightbox_Reset_Zoom_Button_Tooltip: () => d,
                Lightbox_Zoom_In_Button_Label: () => l,
                Lightbox_Zoom_In_Button_Tooltip: () => n,
                Lightbox_Zoom_Out_Button_Label: () => b,
                Lightbox_Zoom_Out_Button__Tooltip: () => i,
                Lightbox_Zoom_Slider_Label: () => r,
                Lightbox_Zoom_Slider_Tooltip: () => g,
                default: () => c
            });
            var _ = "Cerrar",
                a = "Presiona {shortcut}",
                l = "Acercar",
                n = "Presiona {shortcut}",
                b = "Alejar",
                i = "Presiona {shortcut}",
                s = "Restablecer",
                d = "Presiona {shortcut}",
                r = "Nivel del zoom",
                g = "{zoom}%",
                u = "Descargar",
                f = "Descargar",
                L = "Ampliar imagen",
                c = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: a,
                    Lightbox_Zoom_In_Button_Label: l,
                    Lightbox_Zoom_In_Button_Tooltip: n,
                    Lightbox_Zoom_Out_Button_Label: b,
                    Lightbox_Zoom_Out_Button__Tooltip: i,
                    Lightbox_Reset_Zoom_Button_Label: s,
                    Lightbox_Reset_Zoom_Button_Tooltip: d,
                    Lightbox_Zoom_Slider_Label: r,
                    Lightbox_Zoom_Slider_Tooltip: g,
                    Lightbox_Download_Button_Label: u,
                    Lightbox_Download_Button_Tooltip: f,
                    Lightbox_Open_Button_Label: L
                }
        }
    }
]);
//# sourceMappingURL=812b0eed489649ab4e1296d5f8fb6235.js.map