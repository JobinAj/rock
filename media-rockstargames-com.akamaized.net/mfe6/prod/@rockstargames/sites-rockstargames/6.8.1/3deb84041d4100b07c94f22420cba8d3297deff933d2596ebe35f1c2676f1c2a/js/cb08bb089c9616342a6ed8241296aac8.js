! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "b1bbbc51-1beb-4263-a3f8-329c9e8106aa", o._sentryDebugIdIdentifier = "sentry-dbid-b1bbbc51-1beb-4263-a3f8-329c9e8106aa")
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
    [6808], {
        86808: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => a,
                Lightbox_Download_Button_Label: () => g,
                Lightbox_Download_Button_Tooltip: () => L,
                Lightbox_Open_Button_Label: () => c,
                Lightbox_Reset_Zoom_Button_Label: () => d,
                Lightbox_Reset_Zoom_Button_Tooltip: () => s,
                Lightbox_Zoom_In_Button_Label: () => l,
                Lightbox_Zoom_In_Button_Tooltip: () => b,
                Lightbox_Zoom_Out_Button_Label: () => n,
                Lightbox_Zoom_Out_Button__Tooltip: () => i,
                Lightbox_Zoom_Slider_Label: () => r,
                Lightbox_Zoom_Slider_Tooltip: () => u,
                default: () => h
            });
            var _ = "Cerrar lightbox",
                a = "Pulsa {shortcut}",
                l = "Acercar zoom",
                b = "Pulsa {shortcut}",
                n = "Alejar zoom",
                i = "Pulsa {shortcut}",
                d = "Reiniciar",
                s = "Pulsa {shortcut}",
                r = "Nivel de zoom",
                u = "{zoom}%",
                g = "Descargar",
                L = "Descargar",
                c = "Expandir imagen",
                h = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: a,
                    Lightbox_Zoom_In_Button_Label: l,
                    Lightbox_Zoom_In_Button_Tooltip: b,
                    Lightbox_Zoom_Out_Button_Label: n,
                    Lightbox_Zoom_Out_Button__Tooltip: i,
                    Lightbox_Reset_Zoom_Button_Label: d,
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
//# sourceMappingURL=cb08bb089c9616342a6ed8241296aac8.js.map