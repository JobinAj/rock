! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "25b71080-76ca-4bb3-bd00-2ba12fe82d74", o._sentryDebugIdIdentifier = "sentry-dbid-25b71080-76ca-4bb3-bd00-2ba12fe82d74")
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
    [9853], {
        99853: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => b,
                Lightbox_Download_Button_Label: () => r,
                Lightbox_Download_Button_Tooltip: () => L,
                Lightbox_Open_Button_Label: () => f,
                Lightbox_Reset_Zoom_Button_Label: () => d,
                Lightbox_Reset_Zoom_Button_Tooltip: () => s,
                Lightbox_Zoom_In_Button_Label: () => l,
                Lightbox_Zoom_In_Button_Tooltip: () => a,
                Lightbox_Zoom_Out_Button_Label: () => n,
                Lightbox_Zoom_Out_Button__Tooltip: () => i,
                Lightbox_Zoom_Slider_Label: () => u,
                Lightbox_Zoom_Slider_Tooltip: () => g,
                default: () => h
            });
            var _ = "ライトボックスを閉じる",
                b = "{shortcut}を押す",
                l = "ズームイン",
                a = "{shortcut}を押す",
                n = "ズームアウト",
                i = "{shortcut}を押す",
                d = "リセット",
                s = "{shortcut}を押す",
                u = "ズームの度合",
                g = "{zoom}%",
                r = "ダウンロード",
                L = "ダウンロード",
                f = "拡大する",
                h = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: b,
                    Lightbox_Zoom_In_Button_Label: l,
                    Lightbox_Zoom_In_Button_Tooltip: a,
                    Lightbox_Zoom_Out_Button_Label: n,
                    Lightbox_Zoom_Out_Button__Tooltip: i,
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
//# sourceMappingURL=e50fc0eb7c354c3ee51f99f17a7bdf94.js.map