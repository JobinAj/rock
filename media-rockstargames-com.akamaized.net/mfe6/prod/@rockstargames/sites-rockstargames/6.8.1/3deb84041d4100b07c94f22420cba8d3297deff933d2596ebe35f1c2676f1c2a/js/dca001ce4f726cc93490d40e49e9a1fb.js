! function() {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "f531a3b5-9c60-4882-b963-4bbe38150543", o._sentryDebugIdIdentifier = "sentry-dbid-f531a3b5-9c60-4882-b963-4bbe38150543")
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
    [7123], {
        57123: (o, t, e) => {
            e.r(t), e.d(t, {
                Lightbox_Close_Button_Label: () => _,
                Lightbox_Close_Button_Tooltip: () => b,
                Lightbox_Download_Button_Label: () => r,
                Lightbox_Download_Button_Tooltip: () => L,
                Lightbox_Open_Button_Label: () => f,
                Lightbox_Reset_Zoom_Button_Label: () => d,
                Lightbox_Reset_Zoom_Button_Tooltip: () => s,
                Lightbox_Zoom_In_Button_Label: () => l,
                Lightbox_Zoom_In_Button_Tooltip: () => n,
                Lightbox_Zoom_Out_Button_Label: () => a,
                Lightbox_Zoom_Out_Button__Tooltip: () => i,
                Lightbox_Zoom_Slider_Label: () => u,
                Lightbox_Zoom_Slider_Tooltip: () => g,
                default: () => h
            });
            var _ = "关闭弹窗",
                b = "按{shortcut}",
                l = "放大",
                n = "按{shortcut}",
                a = "缩小",
                i = "按{shortcut}",
                d = "重置",
                s = "按{shortcut}",
                u = "缩放比例",
                g = "{zoom}%",
                r = "下载",
                L = "下载",
                f = "展开图片",
                h = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: b,
                    Lightbox_Zoom_In_Button_Label: l,
                    Lightbox_Zoom_In_Button_Tooltip: n,
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
//# sourceMappingURL=dca001ce4f726cc93490d40e49e9a1fb.js.map