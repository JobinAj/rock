! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "62c7ee4c-002d-4254-ae17-29647cca7f1d", o._sentryDebugIdIdentifier = "sentry-dbid-62c7ee4c-002d-4254-ae17-29647cca7f1d")
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
    [3464], {
        3464: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => a,
                Lightbox_Download_Button_Label: () => u,
                Lightbox_Download_Button_Tooltip: () => L,
                Lightbox_Open_Button_Label: () => c,
                Lightbox_Reset_Zoom_Button_Label: () => d,
                Lightbox_Reset_Zoom_Button_Tooltip: () => s,
                Lightbox_Zoom_In_Button_Label: () => n,
                Lightbox_Zoom_In_Button_Tooltip: () => i,
                Lightbox_Zoom_Out_Button_Label: () => l,
                Lightbox_Zoom_Out_Button__Tooltip: () => b,
                Lightbox_Zoom_Slider_Label: () => r,
                Lightbox_Zoom_Slider_Tooltip: () => g,
                default: () => h
            });
            var _ = "Fechar lightbox",
                a = "Pressionar {shortcut}",
                n = "Aproximar zoom",
                i = "Pressionar {shortcut}",
                l = "Afastar zoom",
                b = "Pressionar {shortcut}",
                d = "Resetar",
                s = "Pressionar {shortcut}",
                r = "Nível de zoom",
                g = "{zoom}%",
                u = "Baixar",
                L = "Baixar",
                c = "Expandir imagem",
                h = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: a,
                    Lightbox_Zoom_In_Button_Label: n,
                    Lightbox_Zoom_In_Button_Tooltip: i,
                    Lightbox_Zoom_Out_Button_Label: l,
                    Lightbox_Zoom_Out_Button__Tooltip: b,
                    Lightbox_Reset_Zoom_Button_Label: d,
                    Lightbox_Reset_Zoom_Button_Tooltip: s,
                    Lightbox_Zoom_Slider_Label: r,
                    Lightbox_Zoom_Slider_Tooltip: g,
                    Lightbox_Download_Button_Label: u,
                    Lightbox_Download_Button_Tooltip: L,
                    Lightbox_Open_Button_Label: c
                }
        }
    }
]);
//# sourceMappingURL=6b5ba8b32ec0109f365cea45af9ea981.js.map