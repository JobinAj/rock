! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "0e9e108e-c39e-4f87-a04b-b305d8392db4", o._sentryDebugIdIdentifier = "sentry-dbid-0e9e108e-c39e-4f87-a04b-b305d8392db4")
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
    [2939], {
        62939: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => l,
                Lightbox_Download_Button_Label: () => r,
                Lightbox_Download_Button_Tooltip: () => L,
                Lightbox_Open_Button_Label: () => f,
                Lightbox_Reset_Zoom_Button_Label: () => d,
                Lightbox_Reset_Zoom_Button_Tooltip: () => s,
                Lightbox_Zoom_In_Button_Label: () => n,
                Lightbox_Zoom_In_Button_Tooltip: () => b,
                Lightbox_Zoom_Out_Button_Label: () => a,
                Lightbox_Zoom_Out_Button__Tooltip: () => i,
                Lightbox_Zoom_Slider_Label: () => u,
                Lightbox_Zoom_Slider_Tooltip: () => g,
                default: () => h
            });
            var _ = "라이트박스 닫기",
                l = "{shortcut} 누르기",
                n = "확대",
                b = "{shortcut} 누르기",
                a = "축소",
                i = "{shortcut} 누르기",
                d = "초기화",
                s = "{shortcut} 누르기",
                u = "줌 레벨",
                g = "{zoom}%",
                r = "다운로드",
                L = "다운로드",
                f = "이미지 확대",
                h = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: l,
                    Lightbox_Zoom_In_Button_Label: n,
                    Lightbox_Zoom_In_Button_Tooltip: b,
                    Lightbox_Zoom_Out_Button_Label: a,
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
//# sourceMappingURL=1cf9d5135c0a92e0e0252fabccd75751.js.map