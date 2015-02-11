/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2013, John Dyer (http://j.hn)
 * License: MIT
 *
 */
// Namespace
function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(e) {
    mejs.YouTubeApi.flashReady(e)
}

function FastClick(e) {
    "use strict";
    var t, n = this;
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.lastTouchIdentifier = 0;
    this.touchBoundary = 10;
    this.layer = e;
    if (!e || !e.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(n, arguments)
    };
    this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(n, arguments)
    };
    this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(n, arguments)
    };
    this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(n, arguments)
    };
    this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(n, arguments)
    };
    if (FastClick.notNeeded(e)) return;
    if (this.deviceIsAndroid) {
        e.addEventListener("mouseover", this.onMouse, !0);
        e.addEventListener("mousedown", this.onMouse, !0);
        e.addEventListener("mouseup", this.onMouse, !0)
    }
    e.addEventListener("click", this.onClick, !0);
    e.addEventListener("touchstart", this.onTouchStart, !1);
    e.addEventListener("touchend", this.onTouchEnd, !1);
    e.addEventListener("touchcancel", this.onTouchCancel, !1);
    if (!Event.prototype.stopImmediatePropagation) {
        e.removeEventListener = function(t, n, r) {
            var i = Node.prototype.removeEventListener;
            t === "click" ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
        };
        e.addEventListener = function(t, n, r) {
            var i = Node.prototype.addEventListener;
            t === "click" ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
                e.propagationStopped || n(e)
            }), r) : i.call(e, t, n, r)
        }
    }
    if (typeof e.onclick == "function") {
        t = e.onclick;
        e.addEventListener("click", function(e) {
            t(e)
        }, !1);
        e.onclick = null
    }
}

function isMobile() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
}
var mejs = mejs || {};
mejs.version = "2.12.1";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo", "video/x-vimeo"]
    }]
};
mejs.Utility = {
    encodeUrl: function(e) {
        return encodeURIComponent(e)
    },
    escapeHTML: function(e) {
        return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(e) {
        var t = document.createElement("div");
        t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>';
        return t.firstChild.href
    },
    getScriptPath: function(e) {
        var t = 0,
            n, r = "",
            i = "",
            s, o, u, a, f, l = document.getElementsByTagName("script"),
            c = l.length,
            h = e.length;
        for (; t < c; t++) {
            u = l[t].src;
            s = u.lastIndexOf("/");
            if (s > -1) {
                f = u.substring(s + 1);
                a = u.substring(0, s + 1)
            } else {
                f = u;
                a = ""
            }
            for (n = 0; n < h; n++) {
                i = e[n];
                o = f.indexOf(i);
                if (o > -1) {
                    r = a;
                    break
                }
            }
            if (r !== "") break
        }
        return r
    },
    secondsToTimeCode: function(e, t, n, r) {
        typeof n == "undefined" ? n = !1 : typeof r == "undefined" && (r = 25);
        var i = Math.floor(e / 3600) % 24,
            s = Math.floor(e / 60) % 60,
            o = Math.floor(e % 60),
            u = Math.floor((e % 1 * r).toFixed(3)),
            a = (t || i > 0 ? (i < 10 ? "0" + i : i) + ":" : "") + (s < 10 ? "0" + s : s) + ":" + (o < 10 ? "0" + o : o) + (n ? ":" + (u < 10 ? "0" + u : u) : "");
        return a
    },
    timeCodeToSeconds: function(e, t, n, r) {
        typeof n == "undefined" ? n = !1 : typeof r == "undefined" && (r = 25);
        var i = e.split(":"),
            s = parseInt(i[0], 10),
            o = parseInt(i[1], 10),
            u = parseInt(i[2], 10),
            a = 0,
            f = 0;
        n && (a = parseInt(i[3]) / r);
        f = s * 3600 + o * 60 + u + a;
        return f
    },
    convertSMPTEtoSeconds: function(e) {
        if (typeof e != "string") return !1;
        e = e.replace(",", ".");
        var t = 0,
            n = e.indexOf(".") != -1 ? e.split(".")[1].length : 0,
            r = 1;
        e = e.split(":").reverse();
        for (var i = 0; i < e.length; i++) {
            r = 1;
            i > 0 && (r = Math.pow(60, i));
            t += Number(e[i]) * r
        }
        return Number(t.toFixed(n))
    },
    removeSwf: function(e) {
        var t = document.getElementById(e);
        if (t && /object|embed/i.test(t.nodeName))
            if (mejs.MediaFeatures.isIE) {
                t.style.display = "none";
                (function() {
                    t.readyState == 4 ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
                })()
            } else t.parentNode.removeChild(t)
    },
    removeObjectInIE: function(e) {
        var t = document.getElementById(e);
        if (t) {
            for (var n in t) typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function(e, t) {
        var n = this.plugins[e];
        t[1] = t[1] || 0;
        t[2] = t[2] || 0;
        return n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2] ? !0 : !1
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(e, t, n, r, i) {
        this.plugins[e] = this.detectPlugin(t, n, r, i)
    },
    detectPlugin: function(e, t, n, r) {
        var i = [0, 0, 0],
            s, o, u;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[e] == "object") {
            s = this.nav.plugins[e].description;
            if (s && (typeof this.nav.mimeTypes == "undefined" || !this.nav.mimeTypes[t] || !!this.nav.mimeTypes[t].enabledPlugin)) {
                i = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (o = 0; o < i.length; o++) i[o] = parseInt(i[o].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            u = new ActiveXObject(n);
            u && (i = r(u))
        } catch (a) {}
        return i
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
    var t = [],
        n = e.GetVariable("$version");
    if (n) {
        n = n.split(" ")[1].split(",");
        t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]
    }
    return t
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
    var t = [0, 0, 0, 0],
        n = function(e, t, n, r) {
            while (e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3])) t[n] += r;
            t[n] -= r
        };
    n(e, t, 0, 1);
    n(e, t, 1, 1);
    n(e, t, 2, 1e4);
    n(e, t, 2, 1e3);
    n(e, t, 2, 100);
    n(e, t, 2, 10);
    n(e, t, 2, 1);
    n(e, t, 3, 1);
    return t
});
mejs.MediaFeatures = {
    init: function() {
        var e = this,
            t = document,
            n = mejs.PluginDetector.nav,
            r = mejs.PluginDetector.ua.toLowerCase(),
            i, s, o = ["source", "track", "audio", "video"];
        e.isiPad = r.match(/ipad/i) !== null;
        e.isiPhone = r.match(/iphone/i) !== null;
        e.isiOS = e.isiPhone || e.isiPad;
        e.isAndroid = r.match(/android/i) !== null;
        e.isBustedAndroid = r.match(/android 2\.[12]/) !== null;
        e.isBustedNativeHTTPS = location.protocol === "https:" && (r.match(/android [12]\./) !== null || r.match(/macintosh.* version.* safari/) !== null);
        e.isIE = n.appName.toLowerCase().indexOf("microsoft") != -1;
        e.isChrome = r.match(/chrome/gi) !== null;
        e.isFirefox = r.match(/firefox/gi) !== null;
        e.isWebkit = r.match(/webkit/gi) !== null;
        e.isGecko = r.match(/gecko/gi) !== null && !e.isWebkit;
        e.isOpera = r.match(/opera/gi) !== null;
        e.hasTouch = "ontouchstart" in window && window.ontouchstart != null;
        e.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (i = 0; i < o.length; i++) s = document.createElement(o[i]);
        e.supportsMediaTag = typeof s.canPlayType != "undefined" || e.isBustedAndroid;
        try {
            s.canPlayType("video/mp4")
        } catch (u) {
            e.supportsMediaTag = !1
        }
        e.hasSemiNativeFullScreen = typeof s.webkitEnterFullscreen != "undefined";
        e.hasWebkitNativeFullScreen = typeof s.webkitRequestFullScreen != "undefined";
        e.hasMozNativeFullScreen = typeof s.mozRequestFullScreen != "undefined";
        e.hasTrueNativeFullScreen = e.hasWebkitNativeFullScreen || e.hasMozNativeFullScreen;
        e.nativeFullScreenEnabled = e.hasTrueNativeFullScreen;
        e.hasMozNativeFullScreen && (e.nativeFullScreenEnabled = s.mozFullScreenEnabled);
        this.isChrome && (e.hasSemiNativeFullScreen = !1);
        if (e.hasTrueNativeFullScreen) {
            e.fullScreenEventName = e.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            e.isFullScreen = function() {
                if (s.mozRequestFullScreen) return t.mozFullScreen;
                if (s.webkitRequestFullScreen) return t.webkitIsFullScreen
            };
            e.requestFullScreen = function(t) {
                e.hasWebkitNativeFullScreen ? t.webkitRequestFullScreen() : e.hasMozNativeFullScreen && t.mozRequestFullScreen()
            };
            e.cancelFullScreen = function() {
                e.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : e.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
        }
        if (e.hasSemiNativeFullScreen && r.match(/mac os x 10_5/i)) {
            e.hasNativeFullScreen = !1;
            e.hasSemiNativeFullScreen = !1
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function(e) {
        this.currentTime = e
    },
    setMuted: function(e) {
        this.muted = e
    },
    setVolume: function(e) {
        this.volume = e
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(e) {
        var t = this.getElementsByTagName("source");
        while (t.length > 0) this.removeChild(t[0]);
        if (typeof e == "string") this.src = e;
        else {
            var n, r;
            for (n = 0; n < e.length; n++) {
                r = e[n];
                if (this.canPlayType(r.type)) {
                    this.src = r.src;
                    break
                }
            }
        }
    },
    setVideoSize: function(e, t) {
        this.width = e;
        this.height = t
    }
};
mejs.PluginMediaElement = function(e, t, n) {
    this.id = e;
    this.pluginType = t;
    this.src = n;
    this.events = {};
    this.attributes = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = !1
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused = !1
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = !0
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = !0
        }
    },
    canPlayType: function(e) {
        var t, n, r, i = mejs.plugins[this.pluginType];
        for (t = 0; t < i.length; t++) {
            r = i[t];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, r.version))
                for (n = 0; n < r.types.length; n++)
                    if (e == r.types[n]) return "probably"
        }
        return ""
    },
    positionFullscreenButton: function(e, t, n) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n)
    },
    hideFullscreenButton: function() {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(e) {
        if (typeof e == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e));
            this.src = mejs.Utility.absolutizeUrl(e)
        } else {
            var t, n;
            for (t = 0; t < e.length; t++) {
                n = e[t];
                if (this.canPlayType(n.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src));
                    this.src = mejs.Utility.absolutizeUrl(e);
                    break
                }
            }
        }
    },
    setCurrentTime: function(e) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e);
            this.currentTime = e
        }
    },
    setVolume: function(e) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(e * 100) : this.pluginApi.setVolume(e);
            this.volume = e
        }
    },
    setMuted: function(e) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                e ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = e;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(e);
            this.muted = e
        }
    },
    setVideoSize: function(e, t) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = e + "px";
            this.pluginElement.style.height = t + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
    },
    setFullscreen: function(e) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
    },
    enterFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function(e, t, n) {
        this.events[e] = this.events[e] || [];
        this.events[e].push(t)
    },
    removeEventListener: function(e, t) {
        if (!e) {
            this.events = {};
            return !0
        }
        var n = this.events[e];
        if (!n) return !0;
        if (!t) {
            this.events[e] = [];
            return !0
        }
        for (i = 0; i < n.length; i++)
            if (n[i] === t) {
                this.events[e].splice(i, 1);
                return !0
            }
        return !1
    },
    dispatchEvent: function(e) {
        var t, n, r = this.events[e];
        if (r) {
            n = Array.prototype.slice.call(arguments, 1);
            for (t = 0; t < r.length; t++) r[t].apply(null, n)
        }
    },
    hasAttribute: function(e) {
        return e in this.attributes
    },
    removeAttribute: function(e) {
        delete this.attributes[e]
    },
    getAttribute: function(e) {
        return this.hasAttribute(e) ? this.attributes[e] : ""
    },
    setAttribute: function(e, t) {
        this.attributes[e] = t
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(e, t, n) {
        this.pluginMediaElements[e] = t;
        this.htmlMediaElements[e] = n
    },
    unregisterPluginElement: function(e) {
        delete this.pluginMediaElements[e];
        delete this.htmlMediaElements[e]
    },
    initPlugin: function(e) {
        var t = this.pluginMediaElements[e],
            n = this.htmlMediaElements[e];
        if (t) {
            switch (t.pluginType) {
                case "flash":
                    t.pluginElement = t.pluginApi = document.getElementById(e);
                    break;
                case "silverlight":
                    t.pluginElement = document.getElementById(t.id);
                    t.pluginApi = t.pluginElement.Content.MediaElementJS
            }
            t.pluginApi != null && t.success && t.success(t, n)
        }
    },
    fireEvent: function(e, t, n) {
        var r, i, s, o = this.pluginMediaElements[e];
        if (!o) return;
        r = {
            type: t,
            target: o
        };
        for (i in n) {
            o[i] = n[i];
            r[i] = n[i]
        }
        s = n.bufferedTime || 0;
        r.target.buffered = r.buffered = {
            start: function(e) {
                return 0
            },
            end: function(e) {
                return s
            },
            length: 1
        };
        o.dispatchEvent(r.type, r)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: TEMPLATE_URL + "/js/vendor/mediaelement/",
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
};
mejs.MediaElement = function(e, t) {
    return mejs.HtmlMediaElementShim.create(e, t)
};
mejs.HtmlMediaElementShim = {
    create: function(e, t) {
        var n = mejs.MediaElementDefaults,
            r = typeof e == "string" ? document.getElementById(e) : e,
            i = r.tagName.toLowerCase(),
            s = i === "audio" || i === "video",
            o = s ? r.getAttribute("src") : r.getAttribute("href"),
            u = r.getAttribute("poster"),
            a = r.getAttribute("autoplay"),
            f = r.getAttribute("preload"),
            l = r.getAttribute("controls"),
            c, h;
        for (h in t) n[h] = t[h];
        o = typeof o == "undefined" || o === null || o == "" ? null : o;
        u = typeof u == "undefined" || u === null ? "" : u;
        f = typeof f == "undefined" || f === null || f === "false" ? "none" : f;
        a = typeof a != "undefined" && a !== null && a !== "false";
        l = typeof l != "undefined" && l !== null && l !== "false";
        c = this.determinePlayback(r, n, mejs.MediaFeatures.supportsMediaTag, s, o);
        c.url = c.url !== null ? mejs.Utility.absolutizeUrl(c.url) : "";
        if (c.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                r.src = c.url;
                r.addEventListener("click", function() {
                    r.play()
                }, !1)
            }
            return this.updateNative(c, n, a, f)
        }
        if (c.method !== "") return this.createPlugin(c, n, u, a, f, l);
        this.createErrorMessage(c, n, u);
        return this
    },
    determinePlayback: function(e, t, n, r, i) {
        var s = [],
            o, u, a, f, l, c, h = {
                method: "",
                url: "",
                htmlMediaElement: e,
                isVideo: e.tagName.toLowerCase() != "audio"
            },
            p, d, v, m, g;
        if (typeof t.type != "undefined" && t.type !== "")
            if (typeof t.type == "string") s.push({
                type: t.type,
                url: i
            });
            else
                for (o = 0; o < t.type.length; o++) s.push({
                    type: t.type[o],
                    url: i
                });
        else if (i !== null) {
            c = this.formatType(i, e.getAttribute("type"));
            s.push({
                type: c,
                url: i
            })
        } else
            for (o = 0; o < e.childNodes.length; o++) {
                l = e.childNodes[o];
                if (l.nodeType == 1 && l.tagName.toLowerCase() == "source") {
                    i = l.getAttribute("src");
                    c = this.formatType(i, l.getAttribute("type"));
                    g = l.getAttribute("media");
                    (!g || !window.matchMedia || window.matchMedia && window.matchMedia(g).matches) && s.push({
                        type: c,
                        url: i
                    })
                }
            }!r && s.length > 0 && s[0].url !== null && this.getTypeFromFile(s[0].url).indexOf("audio") > -1 && (h.isVideo = !1);
        mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
            return e.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        });
        if (n && (t.mode === "auto" || t.mode === "auto_plugin" || t.mode === "native") && (!mejs.MediaFeatures.isBustedNativeHTTPS || t.httpsBasicAuthSite !== !0)) {
            if (!r) {
                m = document.createElement(h.isVideo ? "video" : "audio");
                e.parentNode.insertBefore(m, e);
                e.style.display = "none";
                h.htmlMediaElement = e = m
            }
            for (o = 0; o < s.length; o++)
                if (e.canPlayType(s[o].type).replace(/no/, "") !== "" || e.canPlayType(s[o].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    h.method = "native";
                    h.url = s[o].url;
                    break
                }
            if (h.method === "native") {
                h.url !== null && (e.src = h.url);
                if (t.mode !== "auto_plugin") return h
            }
        }
        if (t.mode === "auto" || t.mode === "auto_plugin" || t.mode === "shim")
            for (o = 0; o < s.length; o++) {
                c = s[o].type;
                for (u = 0; u < t.plugins.length; u++) {
                    p = t.plugins[u];
                    d = mejs.plugins[p];
                    for (a = 0; a < d.length; a++) {
                        v = d[a];
                        if (v.version == null || mejs.PluginDetector.hasPluginVersion(p, v.version))
                            for (f = 0; f < v.types.length; f++)
                                if (c == v.types[f]) {
                                    h.method = p;
                                    h.url = s[o].url;
                                    return h
                                }
                    }
                }
            }
        if (t.mode === "auto_plugin" && h.method === "native") return h;
        h.method === "" && s.length > 0 && (h.url = s[0].url);
        return h
    },
    formatType: function(e, t) {
        var n;
        return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
    },
    getTypeFromFile: function(e) {
        e = e.split("?")[0];
        var t = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video" : "audio") + "/" + this.getTypeFromExtension(t)
    },
    getTypeFromExtension: function(e) {
        switch (e) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return e
        }
    },
    createErrorMessage: function(e, t, n) {
        var r = e.htmlMediaElement,
            i = document.createElement("div");
        i.className = "me-cannotplay";
        try {
            i.style.width = r.width + "px";
            i.style.height = r.height + "px"
        } catch (s) {}
        t.customError ? i.innerHTML = t.customError : i.innerHTML = n !== "" ? '<a href="' + e.url + '"><img src="' + n + '" width="100%" height="100%" /></a>' : '<a href="' + e.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        r.parentNode.insertBefore(i, r);
        r.style.display = "none";
        t.error(r)
    },
    createPlugin: function(e, t, n, r, i, s) {
        var o = e.htmlMediaElement,
            u = 1,
            a = 1,
            f = "me_" + e.method + "_" + mejs.meIndex++,
            l = new mejs.PluginMediaElement(f, e.method, e.url),
            c = document.createElement("div"),
            h, p, d;
        l.tagName = o.tagName;
        for (var v = 0; v < o.attributes.length; v++) {
            var m = o.attributes[v];
            m.specified == 1 && l.setAttribute(m.name, m.value)
        }
        p = o.parentNode;
        while (p !== null && p.tagName.toLowerCase() != "body") {
            if (p.parentNode.tagName.toLowerCase() == "p") {
                p.parentNode.parentNode.insertBefore(p, p.parentNode);
                break
            }
            p = p.parentNode
        }
        if (e.isVideo) {
            u = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : o.getAttribute("width") !== null ? o.getAttribute("width") : t.defaultVideoWidth;
            a = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : o.getAttribute("height") !== null ? o.getAttribute("height") : t.defaultVideoHeight;
            u = mejs.Utility.encodeUrl(u);
            a = mejs.Utility.encodeUrl(a)
        } else if (t.enablePluginDebug) {
            u = 320;
            a = 240
        }
        l.success = t.success;
        mejs.MediaPluginBridge.registerPluginElement(f, l, o);
        c.className = "me-plugin";
        c.id = f + "_container";
        e.isVideo ? o.parentNode.insertBefore(c, o) : document.body.insertBefore(c, document.body.childNodes[0]);
        d = ["id=" + f, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (r ? "true" : "false"), "preload=" + i, "width=" + u, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + a, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam];
        e.url !== null && (e.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(e.url)) : d.push("file=" + e.url));
        t.enablePluginDebug && d.push("debug=true");
        t.enablePluginSmoothing && d.push("smoothing=true");
        t.enablePseudoStreaming && d.push("pseudostreaming=true");
        s && d.push("controls=true");
        t.pluginVars && (d = d.concat(t.pluginVars));
        switch (e.method) {
            case "silverlight":
                c.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + f + '" name="' + f + '" width="' + u + '" height="' + a + '" class="mejs-shim">' + '<param name="initParams" value="' + d.join(",") + '" />' + '<param name="windowless" value="true" />' + '<param name="background" value="black" />' + '<param name="minRuntimeVersion" value="3.0.0.0" />' + '<param name="autoUpgrade" value="true" />' + '<param name="source" value="' + t.pluginPath + t.silverlightName + '" />' + "</object>";
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    h = document.createElement("div");
                    c.appendChild(h);
                    h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + f + '" width="' + u + '" height="' + a + '" class="mejs-shim">' + '<param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" />' + '<param name="flashvars" value="' + d.join("&amp;") + '" />' + '<param name="quality" value="high" />' + '<param name="bgcolor" value="#000000" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + "</object>"
                } else c.innerHTML = '<embed id="' + f + '" name="' + f + '" ' + 'play="true" ' + 'loop="false" ' + 'quality="high" ' + 'bgcolor="#000000" ' + 'wmode="transparent" ' + 'allowScriptAccess="always" ' + 'allowFullScreen="true" ' + 'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' + 'src="' + t.pluginPath + t.flashName + '" ' + 'flashvars="' + d.join("&") + '" ' + 'width="' + u + '" ' + 'height="' + a + '" ' + 'class="mejs-shim"></embed>';
                break;
            case "youtube":
                var g = e.url.substr(e.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: c,
                    containerId: c.id,
                    pluginMediaElement: l,
                    pluginId: f,
                    videoId: g,
                    height: a,
                    width: u
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                l.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1);
                c.innerHTML = '<iframe src="http://player.vimeo.com/video/' + l.vimeoid + '?portrait=0&byline=0&title=0" width="' + u + '" height="' + a + '" frameborder="0" class="mejs-shim"></iframe>'
        }
        o.style.display = "none";
        o.removeAttribute("autoplay");
        return l
    },
    updateNative: function(e, t, n, r) {
        var i = e.htmlMediaElement,
            s;
        for (s in mejs.HtmlMediaElement) i[s] = mejs.HtmlMediaElement[s];
        t.success(i, i);
        return i
    }
};
mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var e = document.createElement("script");
            e.src = "//www.youtube.com/player_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
            this.isIframeStarted = !0
        }
    },
    iframeQueue: [],
    enqueueIframe: function(e) {
        if (this.isLoaded) this.createIframe(e);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(e)
        }
    },
    createIframe: function(e) {
        var t = e.pluginMediaElement,
            n = new YT.Player(e.containerId, {
                height: e.height,
                width: e.width,
                videoId: e.videoId,
                playerVars: {
                    controls: 2,
                    hd: 1
                },
                events: {
                    onReady: function() {
                        e.pluginMediaElement.pluginApi = n;
                        mejs.MediaPluginBridge.initPlugin(e.pluginId);
                        setInterval(function() {
                            mejs.YouTubeApi.createEvent(n, t, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(e) {
                        mejs.YouTubeApi.handleStateChange(e.data, n, t)
                    }
                }
            })
    },
    createEvent: function(e, t, n) {
        var r = {
            type: n,
            target: t
        };
        if (e && e.getDuration) {
            t.currentTime = r.currentTime = e.getCurrentTime();
            t.duration = r.duration = e.getDuration();
            r.paused = t.paused;
            r.ended = t.ended;
            r.muted = e.isMuted();
            r.volume = e.getVolume() / 100;
            r.bytesTotal = e.getVideoBytesTotal();
            r.bufferedBytes = e.getVideoBytesLoaded();
            var i = r.bufferedBytes / r.bytesTotal * r.duration;
            r.target.buffered = r.buffered = {
                start: function(e) {
                    return 0
                },
                end: function(e) {
                    return i
                },
                length: 1
            }
        }
        t.dispatchEvent(r.type, r)
    },
    iFrameReady: function() {
        this.isLoaded = !0;
        this.isIframeLoaded = !0;
        while (this.iframeQueue.length > 0) {
            var e = this.iframeQueue.pop();
            this.createIframe(e)
        }
    },
    flashPlayers: {},
    createFlash: function(e) {
        this.flashPlayers[e.pluginId] = e;
        var t, n = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            t = document.createElement("div");
            e.container.appendChild(t);
            t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim">' + '<param name="movie" value="' + n + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + "</object>"
        } else e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" ' + 'width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim">' + '<param name="allowScriptAccess" value="always">' + '<param name="wmode" value="transparent">' + "</object>"
    },
    flashReady: function(e) {
        var t = this.flashPlayers[e],
            n = document.getElementById(e),
            r = t.pluginMediaElement;
        r.pluginApi = r.pluginElement = n;
        mejs.MediaPluginBridge.initPlugin(e);
        n.cueVideoById(t.videoId);
        var i = t.containerId + "_callback";
        window[i] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, n, r)
        };
        n.addEventListener("onStateChange", i);
        setInterval(function() {
            mejs.YouTubeApi.createEvent(n, r, "timeupdate")
        }, 250)
    },
    handleStateChange: function(e, t, n) {
        switch (e) {
            case -1:
                n.paused = !0;
                n.ended = !0;
                mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
                break;
            case 0:
                n.paused = !1;
                n.ended = !0;
                mejs.YouTubeApi.createEvent(t, n, "ended");
                break;
            case 1:
                n.paused = !1;
                n.ended = !1;
                mejs.YouTubeApi.createEvent(t, n, "play");
                mejs.YouTubeApi.createEvent(t, n, "playing");
                break;
            case 2:
                n.paused = !0;
                n.ended = !1;
                mejs.YouTubeApi.createEvent(t, n, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(t, n, "progress");
                break;
            case 5:
        }
    }
};
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function(e, t, n) {
    "use strict";
    var r = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    r.locale.getLanguage = function() {
        return r.locale.language || navigator.language
    };
    typeof mejsL10n != "undefined" && (r.locale.language = mejsL10n.language);
    r.locale.INIT_LANGUAGE = r.locale.getLanguage();
    r.methods.checkPlain = function(e) {
        var t, n, r = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        e = String(e);
        for (t in r)
            if (r.hasOwnProperty(t)) {
                n = new RegExp(t, "g");
                e = e.replace(n, r[t])
            }
        return e
    };
    r.methods.formatString = function(e, t) {
        for (var n in t) {
            switch (n.charAt(0)) {
                case "@":
                    t[n] = r.methods.checkPlain(t[n]);
                    break;
                case "!":
                    break;
                case "%":
                default:
                    t[n] = '<em class="placeholder">' + r.methods.checkPlain(t[n]) + "</em>"
            }
            e = e.replace(n, t[n])
        }
        return e
    };
    r.methods.t = function(e, t, n) {
        r.locale.strings && r.locale.strings[n.context] && r.locale.strings[n.context][e] && (e = r.locale.strings[n.context][e]);
        t && (e = r.methods.formatString(e, t));
        return e
    };
    r.t = function(e, t, n) {
        if (typeof e == "string" && e.length > 0) {
            var i = r.locale.getLanguage();
            n = n || {
                context: i
            };
            return r.methods.t(e, t, n)
        }
        throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        }
    };
    t.i18n = r
})(document, mejs);
(function(e, t) {
    "use strict";
    typeof mejsL10n != "undefined" && (e[mejsL10n.language] = mejsL10n.strings)
})(mejs.i18n.locale.strings);
(function(e, t) {
    "use strict";
    e.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schließen"
    }
})(mejs.i18n.locale.strings);
(function(e, t) {
    "use strict";
    e.zh = {
        Fullscreen: "全螢幕",
        "Go Fullscreen": "全屏模式",
        "Turn off Fullscreen": "退出全屏模式",
        Close: "關閉"
    }
})(mejs.i18n.locale.strings);
typeof jQuery != "undefined" ? mejs.$ = jQuery : typeof ender != "undefined" && (mejs.$ = ender);
(function(e) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: !1,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(e) {
            return e.duration * .05
        },
        defaultSeekForwardInterval: function(e) {
            return e.duration * .05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: !1,
        autoRewind: !0,
        enableAutosize: !0,
        alwaysShowHours: !1,
        showTimecodeFrameCount: !1,
        framesPerSecond: 25,
        autosizeProgress: !0,
        alwaysShowControls: !1,
        hideVideoControlsOnLoad: !1,
        clickToPlayPause: !0,
        iPadUseNativeControls: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: !0,
        enableKeyboard: !0,
        pauseOtherPlayers: !0,
        keyActions: [{
            keys: [32, 179],
            action: function(e, t) {
                t.paused || t.ended ? t.play() : t.pause()
            }
        }, {
            keys: [38],
            action: function(e, t) {
                var n = Math.min(t.volume + .1, 1);
                t.setVolume(n)
            }
        }, {
            keys: [40],
            action: function(e, t) {
                var n = Math.max(t.volume - .1, 0);
                t.setVolume(n)
            }
        }, {
            keys: [37, 227],
            action: function(e, t) {
                if (!isNaN(t.duration) && t.duration > 0) {
                    if (e.isVideo) {
                        e.showControls();
                        e.startControlsTimer()
                    }
                    var n = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                    t.setCurrentTime(n)
                }
            }
        }, {
            keys: [39, 228],
            action: function(e, t) {
                if (!isNaN(t.duration) && t.duration > 0) {
                    if (e.isVideo) {
                        e.showControls();
                        e.startControlsTimer()
                    }
                    var n = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                    t.setCurrentTime(n)
                }
            }
        }, {
            keys: [70],
            action: function(e, t) {
                typeof e.enterFullScreen != "undefined" && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function(t, n) {
        if (this instanceof mejs.MediaElementPlayer) {
            var r = this;
            r.$media = r.$node = e(t);
            r.node = r.media = r.$media[0];
            if (typeof r.node.player != "undefined") return r.node.player;
            r.node.player = r;
            typeof n == "undefined" && (n = r.$node.data("mejsoptions"));
            r.options = e.extend({}, mejs.MepDefaults, n);
            r.id = "mep_" + mejs.mepIndex++;
            mejs.players[r.id] = r;
            r.init();
            return r
        }
        return new mejs.MediaElementPlayer(t, n)
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: !1,
        controlsAreVisible: !0,
        init: function() {
            var t = this,
                n = mejs.MediaFeatures,
                r = e.extend(!0, {}, t.options, {
                    success: function(e, n) {
                        t.meReady(e, n)
                    },
                    error: function(e) {
                        t.handleError(e)
                    }
                }),
                i = t.media.tagName.toLowerCase();
            t.isDynamic = i !== "audio" && i !== "video";
            t.isDynamic ? t.isVideo = t.options.isVideo : t.isVideo = i !== "audio" && t.options.isVideo;
            if (n.isiPad && t.options.iPadUseNativeControls || n.isiPhone && t.options.iPhoneUseNativeControls) {
                t.$media.attr("controls", "controls");
                if (n.isiPad && t.media.getAttribute("autoplay") !== null) {
                    t.media.load();
                    t.media.play()
                }
            } else if (!n.isAndroid || !t.options.AndroidUseNativeControls) {
                t.$media.removeAttr("controls");
                t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '">' + '<div class="mejs-inner">' + '<div class="mejs-mediaelement"></div>' + '<div class="mejs-layers"></div>' + '<div class="mejs-controls"></div>' + '<div class="mejs-clear"></div>' + "</div>" + "</div>").addClass(t.$media[0].className).insertBefore(t.$media);
                t.container.addClass((n.isAndroid ? "mejs-android " : "") + (n.isiOS ? "mejs-ios " : "") + (n.isiPad ? "mejs-ipad " : "") + (n.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio "));
                if (n.isiOS) {
                    var s = t.$media.clone();
                    t.container.find(".mejs-mediaelement").append(s);
                    t.$media.remove();
                    t.$node = t.$media = s;
                    t.node = t.media = s[0]
                } else t.container.find(".mejs-mediaelement").append(t.$media);
                t.controls = t.container.find(".mejs-controls");
                t.layers = t.container.find(".mejs-layers");
                var o = t.isVideo ? "video" : "audio",
                    u = o.substring(0, 1).toUpperCase() + o.substring(1);
                t.options[o + "Width"] > 0 || t.options[o + "Width"].toString().indexOf("%") > -1 ? t.width = t.options[o + "Width"] : t.media.style
                    .width !== "" && t.media.style.width !== null ? t.width = t.media.style.width : t.media.getAttribute("width") !== null ? t.width = t.$media.attr("width") : t.width = t.options["default" + u + "Width"];
                t.options[o + "Height"] > 0 || t.options[o + "Height"].toString().indexOf("%") > -1 ? t.height = t.options[o + "Height"] : t.media.style.height !== "" && t.media.style.height !== null ? t.height = t.media.style.height : t.$media[0].getAttribute("height") !== null ? t.height = t.$media.attr("height") : t.height = t.options["default" + u + "Height"];
                t.setPlayerSize(t.width, t.height);
                r.pluginWidth = t.width;
                r.pluginHeight = t.height
            }
            mejs.MediaElement(t.$media[0], r);
            typeof t.container != "undefined" && t.controlsAreVisible && t.container.trigger("controlsshown")
        },
        showControls: function(e) {
            var t = this;
            e = typeof e == "undefined" || e;
            if (t.controlsAreVisible) return;
            if (e) {
                t.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                    t.controlsAreVisible = !0;
                    t.container.trigger("controlsshown")
                });
                t.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                    t.controlsAreVisible = !0
                })
            } else {
                t.controls.css("visibility", "visible").css("display", "block");
                t.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                t.controlsAreVisible = !0;
                t.container.trigger("controlsshown")
            }
            t.setControlsSize()
        },
        hideControls: function(t) {
            var n = this;
            t = typeof t == "undefined" || t;
            if (!n.controlsAreVisible || n.options.alwaysShowControls) return;
            if (t) {
                n.controls.stop(!0, !0).fadeOut(200, function() {
                    e(this).css("visibility", "hidden").css("display", "block");
                    n.controlsAreVisible = !1;
                    n.container.trigger("controlshidden")
                });
                n.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                    e(this).css("visibility", "hidden").css("display", "block")
                })
            } else {
                n.controls.css("visibility", "hidden").css("display", "block");
                n.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                n.controlsAreVisible = !1;
                n.container.trigger("controlshidden")
            }
        },
        controlsTimer: null,
        startControlsTimer: function(e) {
            var t = this;
            e = typeof e != "undefined" ? e : 1500;
            t.killControlsTimer("start");
            t.controlsTimer = setTimeout(function() {
                t.hideControls();
                t.killControlsTimer("hide")
            }, e)
        },
        killControlsTimer: function(e) {
            var t = this;
            if (t.controlsTimer !== null) {
                clearTimeout(t.controlsTimer);
                delete t.controlsTimer;
                t.controlsTimer = null
            }
        },
        controlsEnabled: !0,
        disableControls: function() {
            var e = this;
            e.killControlsTimer();
            e.hideControls(!1);
            this.controlsEnabled = !1
        },
        enableControls: function() {
            var e = this;
            e.showControls(!1);
            e.controlsEnabled = !0
        },
        meReady: function(e, t) {
            var n = this,
                r = mejs.MediaFeatures,
                i = t.getAttribute("autoplay"),
                s = typeof i != "undefined" && i !== null && i !== "false",
                o, u;
            if (n.created) return;
            n.created = !0;
            n.media = e;
            n.domNode = t;
            if ((!r.isAndroid || !n.options.AndroidUseNativeControls) && (!r.isiPad || !n.options.iPadUseNativeControls) && (!r.isiPhone || !n.options.iPhoneUseNativeControls)) {
                n.buildposter(n, n.controls, n.layers, n.media);
                n.buildkeyboard(n, n.controls, n.layers, n.media);
                n.buildoverlays(n, n.controls, n.layers, n.media);
                n.findTracks();
                for (o in n.options.features) {
                    u = n.options.features[o];
                    if (n["build" + u]) try {
                        n["build" + u](n, n.controls, n.layers, n.media)
                    } catch (a) {}
                }
                n.container.trigger("controlsready");
                n.setPlayerSize(n.width, n.height);
                n.setControlsSize();
                if (n.isVideo) {
                    if (mejs.MediaFeatures.hasTouch) n.$media.bind("touchstart", function() {
                        n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1)
                    });
                    else {
                        mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback = function() {
                            n.options.clickToPlayPause && (n.media.paused ? n.media.play() : n.media.pause())
                        };
                        n.media.addEventListener("click", n.clickToPlayPauseCallback, !1);
                        n.container.bind("mouseenter mouseover", function() {
                            if (n.controlsEnabled && !n.options.alwaysShowControls) {
                                n.killControlsTimer("enter");
                                n.showControls();
                                n.startControlsTimer(2500)
                            }
                        }).bind("mousemove", function() {
                            if (n.controlsEnabled) {
                                n.controlsAreVisible || n.showControls();
                                n.options.alwaysShowControls || n.startControlsTimer(2500)
                            }
                        }).bind("mouseleave", function() {
                            n.controlsEnabled && !n.media.paused && !n.options.alwaysShowControls && n.startControlsTimer(1e3)
                        })
                    }
                    n.options.hideVideoControlsOnLoad && n.hideControls(!1);
                    s && !n.options.alwaysShowControls && n.hideControls();
                    n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function(e) {
                        if (n.options.videoHeight <= 0 && n.domNode.getAttribute("height") === null && !isNaN(e.target.videoHeight)) {
                            n.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
                            n.setControlsSize();
                            n.media.setVideoSize(e.target.videoWidth, e.target.videoHeight)
                        }
                    }, !1)
                }
                e.addEventListener("play", function() {
                    var e;
                    for (e in mejs.players) {
                        var t = mejs.players[e];
                        t.id != n.id && n.options.pauseOtherPlayers && !t.paused && !t.ended && t.pause();
                        t.hasFocus = !1
                    }
                    n.hasFocus = !0
                }, !1);
                n.media.addEventListener("ended", function(e) {
                    if (n.options.autoRewind) try {
                        n.media.setCurrentTime(0)
                    } catch (t) {}
                    n.media.pause();
                    n.setProgressRail && n.setProgressRail();
                    n.setCurrentRail && n.setCurrentRail();
                    n.options.loop ? n.media.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls()
                }, !1);
                n.media.addEventListener("loadedmetadata", function(e) {
                    n.updateDuration && n.updateDuration();
                    n.updateCurrent && n.updateCurrent();
                    if (!n.isFullScreen) {
                        n.setPlayerSize(n.width, n.height);
                        n.setControlsSize()
                    }
                }, !1);
                setTimeout(function() {
                    n.setPlayerSize(n.width, n.height);
                    n.setControlsSize()
                }, 50);
                n.globalBind("resize", function() {
                    n.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || n.setPlayerSize(n.width, n.height);
                    n.setControlsSize()
                });
                n.media.pluginType == "youtube" && n.container.find(".mejs-overlay-play").hide()
            }
            if (s && e.pluginType == "native") {
                e.load();
                e.play()
            }
            n.options.success && (typeof n.options.success == "string" ? window[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
        },
        handleError: function(e) {
            var t = this;
            t.controls.hide();
            t.options.error && t.options.error(e)
        },
        setPlayerSize: function(t, n) {
            var r = this;
            typeof t != "undefined" && (r.width = t);
            typeof n != "undefined" && (r.height = n);
            if (r.height.toString().indexOf("%") > 0 || r.$node.css("max-width") === "100%" || parseInt(r.$node.css("max-width").replace(/px/, ""), 10) / r.$node.offsetParent().width() === 1 || r.$node[0].currentStyle && r.$node[0].currentStyle.maxWidth === "100%") {
                var i = r.isVideo ? r.media.videoWidth && r.media.videoWidth > 0 ? r.media.videoWidth : r.options.defaultVideoWidth : r.options.defaultAudioWidth,
                    s = r.isVideo ? r.media.videoHeight && r.media.videoHeight > 0 ? r.media.videoHeight : r.options.defaultVideoHeight : r.options.defaultAudioHeight,
                    o = r.container.parent().closest(":visible").width(),
                    u = r.isVideo || !r.options.autosizeProgress ? parseInt(o * s / i, 10) : s;
                if (r.container.parent()[0].tagName.toLowerCase() === "body") {
                    o = e(window).width();
                    u = e(window).height()
                }
                if (u != 0 && o != 0) {
                    r.container.width(o).height(u);
                    r.$media.add(r.container.find(".mejs-shim")).width("100%").height("100%");
                    r.isVideo && r.media.setVideoSize && r.media.setVideoSize(o, u);
                    r.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                r.container.width(r.width).height(r.height);
                r.layers.children(".mejs-layer").width(r.width).height(r.height)
            }
            var a = r.layers.find(".mejs-overlay-play"),
                f = a.find(".mejs-overlay-button");
            a.height(r.container.height() - r.controls.height());
            f.css("margin-top", "-" + (f.height() / 2 - r.controls.height() / 2).toString() + "px")
        },
        setControlsSize: function() {
            var t = this,
                n = 0,
                r = 0,
                i = t.controls.find(".mejs-time-rail"),
                s = t.controls.find(".mejs-time-total"),
                o = t.controls.find(".mejs-time-current"),
                u = t.controls.find(".mejs-time-loaded"),
                a = i.siblings();
            t.options && !t.options.autosizeProgress && (r = parseInt(i.css("width")));
            if (r === 0 || !r) {
                a.each(function() {
                    var t = e(this);
                    t.css("position") != "absolute" && t.is(":visible") && (n += e(this).outerWidth(!0))
                });
                r = t.controls.width() - n - (i.outerWidth(!0) - i.width())
            }
            i.width(r);
            s.width(r - (s.outerWidth(!0) - s.width()));
            t.setProgressRail && t.setProgressRail();
            t.setCurrentRail && t.setCurrentRail()
        },
        buildposter: function(t, n, r, i) {
            var s = this,
                o = e('<div class="mejs-poster mejs-layer"></div>').appendTo(r),
                u = t.$media.attr("poster");
            t.options.poster !== "" && (u = t.options.poster);
            u !== "" && u != null ? s.setPoster(u) : o.hide();
            i.addEventListener("play", function() {
                o.hide()
            }, !1);
            t.options.showPosterWhenEnded && t.options.autoRewind && i.addEventListener("ended", function() {
                o.show()
            }, !1)
        },
        setPoster: function(t) {
            var n = this,
                r = n.container.find(".mejs-poster"),
                i = r.find("img");
            i.length == 0 && (i = e('<img width="100%" height="100%" />').appendTo(r));
            i.attr("src", t);
            r.css({
                "background-image": "url(" + t + ")"
            })
        },
        buildoverlays: function(t, n, r, i) {
            var s = this;
            if (!t.isVideo) return;
            var o = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(r),
                u = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(r),
                a = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(r).click(function() {
                    s.options.clickToPlayPause && (i.paused ? i.play() : i.pause())
                });
            i.addEventListener("play", function() {
                a.hide();
                o.hide();
                n.find(".mejs-time-buffering").hide();
                u.hide()
            }, !1);
            i.addEventListener("playing", function() {
                a.hide();
                o.hide();
                n.find(".mejs-time-buffering").hide();
                u.hide()
            }, !1);
            i.addEventListener("seeking", function() {
                o.show();
                n.find(".mejs-time-buffering").show()
            }, !1);
            i.addEventListener("seeked", function() {
                o.hide();
                n.find(".mejs-time-buffering").hide()
            }, !1);
            i.addEventListener("pause", function() {
                mejs.MediaFeatures.isiPhone || a.show()
            }, !1);
            i.addEventListener("waiting", function() {
                o.show();
                n.find(".mejs-time-buffering").show()
            }, !1);
            i.addEventListener("loadeddata", function() {
                o.show();
                n.find(".mejs-time-buffering").show()
            }, !1);
            i.addEventListener("canplay", function() {
                o.hide();
                n.find(".mejs-time-buffering").hide()
            }, !1);
            i.addEventListener("error", function() {
                o.hide();
                n.find(".mejs-time-buffering").hide();
                u.show();
                u.find("mejs-overlay-error").html("Error loading this resource")
            }, !1)
        },
        buildkeyboard: function(t, n, r, i) {
            var s = this;
            s.globalBind("keydown", function(e) {
                if (t.hasFocus && t.options.enableKeyboard)
                    for (var n = 0, r = t.options.keyActions.length; n < r; n++) {
                        var s = t.options.keyActions[n];
                        for (var o = 0, u = s.keys.length; o < u; o++)
                            if (e.keyCode == s.keys[o]) {
                                e.preventDefault();
                                s.action(t, i, e.keyCode);
                                return !1
                            }
                    }
                return !0
            });
            s.globalBind("click", function(n) {
                e(n.target).closest(".mejs-container").length == 0 && (t.hasFocus = !1)
            })
        },
        findTracks: function() {
            var t = this,
                n = t.$media.find("track");
            t.tracks = [];
            n.each(function(n, r) {
                r = e(r);
                t.tracks.push({
                    srclang: r.attr("srclang") ? r.attr("srclang").toLowerCase() : "",
                    src: r.attr("src"),
                    kind: r.attr("kind"),
                    label: r.attr("label") || "",
                    entries: [],
                    isLoaded: !1
                })
            })
        },
        changeSkin: function(e) {
            this.container[0].className = "mejs-container " + e;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        },
        play: function() {
            this.media.play()
        },
        pause: function() {
            try {
                this.media.pause()
            } catch (e) {}
        },
        load: function() {
            this.media.load()
        },
        setMuted: function(e) {
            this.media.setMuted(e)
        },
        setCurrentTime: function(e) {
            this.media.setCurrentTime(e)
        },
        getCurrentTime: function() {
            return this.media.currentTime
        },
        setVolume: function(e) {
            this.media.setVolume(e)
        },
        getVolume: function() {
            return this.media.volume
        },
        setSrc: function(e) {
            this.media.setSrc(e)
        },
        remove: function() {
            var e = this,
                t, n;
            for (t in e.options.features) {
                n = e.options.features[t];
                if (e["clean" + n]) try {
                    e["clean" + n](e)
                } catch (r) {}
            }
            if (!e.isDynamic) {
                e.$media.prop("controls", !0);
                e.$node.clone().show().insertBefore(e.container);
                e.$node.remove()
            } else e.$node.insertBefore(e.container);
            e.media.pluginType !== "native" && e.media.remove();
            delete mejs.players[e.id];
            e.container.remove();
            e.globalUnbind();
            delete e.node.player
        }
    };
    (function() {
        function n(n, r) {
            var i = {
                d: [],
                w: []
            };
            e.each((n || "").split(" "), function(e, n) {
                var s = n + "." + r;
                if (s.indexOf(".") === 0) {
                    i.d.push(s);
                    i.w.push(s)
                } else i[t.test(n) ? "w" : "d"].push(s)
            });
            i.d = i.d.join(" ");
            i.w = i.w.join(" ");
            return i
        }
        var t = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function(t, r, i) {
            var s = this;
            t = n(t, s.id);
            t.d && e(document).bind(t.d, r, i);
            t.w && e(window).bind(t.w, r, i)
        };
        mejs.MediaElementPlayer.prototype.globalUnbind = function(t, r) {
            var i = this;
            t = n(t, i.id);
            t.d && e(document).unbind(t.d, r);
            t.w && e(window).unbind(t.w, r)
        }
    })();
    typeof jQuery != "undefined" && (jQuery.fn.mediaelementplayer = function(e) {
        e === !1 ? this.each(function() {
            var e = jQuery(this).data("mediaelementplayer");
            e && e.remove();
            jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function() {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, e))
        });
        return this
    });
    e(document).ready(function() {
        e(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        playpauseText: mejs.i18n.t("Play/Pause")
    });
    e.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(t, n, r, i) {
            var s = this,
                o = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + s.id + '" title="' + s.options.playpauseText + '" aria-label="' + s.options.playpauseText + '"></button>' + "</div>").appendTo(n).click(function(e) {
                    e.preventDefault();
                    i.paused ? i.play() : i.pause();
                    return !1
                });
            i.addEventListener("play", function() {
                o.removeClass("mejs-play").addClass("mejs-pause")
            }, !1);
            i.addEventListener("playing", function() {
                o.removeClass("mejs-play").addClass("mejs-pause")
            }, !1);
            i.addEventListener("pause", function() {
                o.removeClass("mejs-pause").addClass("mejs-play")
            }, !1);
            i.addEventListener("paused", function() {
                o.removeClass("mejs-pause").addClass("mejs-play")
            }, !1)
        }
    })
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    e.extend(MediaElementPlayer.prototype, {
        buildstop: function(t, n, r, i) {
            var s = this,
                o = e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + s.id + '" title="' + s.options.stopText + '" aria-label="' + s.options.stopText + '"></button>' + "</div>").appendTo(n).click(function() {
                    i.paused || i.pause();
                    if (i.currentTime > 0) {
                        i.setCurrentTime(0);
                        i.pause();
                        n.find(".mejs-time-current").width("0px");
                        n.find(".mejs-time-handle").css("left", "0px");
                        n.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                        n.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                        r.find(".mejs-poster").show()
                    }
                })
        }
    })
})(mejs.$);
(function(e) {
    e.extend(MediaElementPlayer.prototype, {
        buildprogress: function(t, n, r, i) {
            e('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(n);
            n.find(".mejs-time-buffering").hide();
            var s = this,
                o = n.find(".mejs-time-total"),
                u = n.find(".mejs-time-loaded"),
                a = n.find(".mejs-time-current"),
                f = n.find(".mejs-time-handle"),
                l = n.find(".mejs-time-float"),
                c = n.find(".mejs-time-float-current"),
                h = function(e) {
                    var t = e.pageX,
                        n = o.offset(),
                        r = o.outerWidth(!0),
                        s = 0,
                        u = 0,
                        a = 0;
                    if (i.duration) {
                        t < n.left ? t = n.left : t > r + n.left && (t = r + n.left);
                        a = t - n.left;
                        s = a / r;
                        u = s <= .02 ? 0 : s * i.duration;
                        p && u !== i.currentTime && i.setCurrentTime(u);
                        if (!mejs.MediaFeatures.hasTouch) {
                            l.css("left", a);
                            c.html(mejs.Utility.secondsToTimeCode(u));
                            l.show()
                        }
                    }
                },
                p = !1,
                d = !1;
            o.bind("mousedown", function(e) {
                if (e.which === 1) {
                    p = !0;
                    h(e);
                    s.globalBind("mousemove.dur", function(e) {
                        h(e)
                    });
                    s.globalBind("mouseup.dur", function(e) {
                        p = !1;
                        l.hide();
                        s.globalUnbind(".dur")
                    });
                    return !1
                }
            }).bind("mouseenter", function(e) {
                d = !0;
                s.globalBind("mousemove.dur", function(e) {
                    h(e)
                });
                mejs.MediaFeatures.hasTouch || l.show()
            }).bind("mouseleave", function(e) {
                d = !1;
                if (!p) {
                    s.globalUnbind(".dur");
                    l.hide()
                }
            });
            i.addEventListener("progress", function(e) {
                t.setProgressRail(e);
                t.setCurrentRail(e)
            }, !1);
            i.addEventListener("timeupdate", function(e) {
                t.setProgressRail(e);
                t.setCurrentRail(e)
            }, !1);
            s.loaded = u;
            s.total = o;
            s.current = a;
            s.handle = f
        },
        setProgressRail: function(e) {
            var t = this,
                n = e != undefined ? e.target : t.media,
                r = null;
            n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? r = n.buffered.end(0) / n.duration : n && n.bytesTotal != undefined && n.bytesTotal > 0 && n.bufferedBytes != undefined ? r = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && e.total != 0 && (r = e.loaded / e.total);
            if (r !== null) {
                r = Math.min(1, Math.max(0, r));
                t.loaded && t.total && t.loaded.width(t.total.width() * r)
            }
        },
        setCurrentRail: function() {
            var e = this;
            if (e.media.currentTime != undefined && e.media.duration && e.total && e.handle) {
                var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
                    n = t - Math.round(e.handle.outerWidth(!0) / 2);
                e.current.width(t);
                e.handle.css("left", n)
            }
        }
    })
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    });
    e.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(t, n, r, i) {
            var s = this;
            e('<div class="mejs-time"><span class="mejs-currenttime">' + (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span>" + "</div>").appendTo(n);
            s.currenttime = s.controls.find(".mejs-currenttime");
            i.addEventListener("timeupdate", function() {
                t.updateCurrent()
            }, !1)
        },
        buildduration: function(t, n, r, i) {
            var s = this;
            if (n.children().last().find(".mejs-currenttime").length > 0) e(s.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (s.options.duration > 0 ? mejs.Utility.secondsToTimeCode(s.options.duration, s.options.alwaysShowHours || s.media.duration > 3600, s.options.showTimecodeFrameCount, s.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(n.find(".mejs-time"));
            else {
                n.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (s.options.duration > 0 ? mejs.Utility.secondsToTimeCode(s.options.duration, s.options.alwaysShowHours || s.media.duration > 3600, s.options.showTimecodeFrameCount, s.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>" + "</div>").appendTo(n)
            }
            s.durationD = s.controls.find(".mejs-duration");
            i.addEventListener("timeupdate", function() {
                t.updateDuration()
            }, !1)
        },
        updateCurrent: function() {
            var e = this;
            e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(e.media.currentTime, e.options.alwaysShowHours || e.media.duration > 3600, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
        },
        updateDuration: function() {
            var e = this;
            e.container.toggleClass("mejs-long-video", e.media.duration > 3600);
            e.durationD && (e.options.duration > 0 || e.media.duration) && e.durationD.html(mejs.Utility.secondsToTimeCode(e.options.duration > 0 ? e.options.duration : e.media.duration, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: !0,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    e.extend(MediaElementPlayer.prototype, {
        buildvolume: function(t, n, r, i) {
            if (mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices) return;
            var s = this,
                o = s.isVideo ? s.options.videoVolume : s.options.audioVolume,
                u = o == "horizontal" ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + s.id + '" title="' + s.options.muteText + '" aria-label="' + s.options.muteText + '"></button>' + "</div>" + '<div class="mejs-horizontal-volume-slider">' + '<div class="mejs-horizontal-volume-total"></div>' + '<div class="mejs-horizontal-volume-current"></div>' + '<div class="mejs-horizontal-volume-handle"></div>' + "</div>").appendTo(n) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + s.id + '" title="' + s.options.muteText + '" aria-label="' + s.options.muteText + '"></button>' + '<div class="mejs-volume-slider">' + '<div class="mejs-volume-total"></div>' + '<div class="mejs-volume-current"></div>' + '<div class="mejs-volume-handle"></div>' + "</div>" + "</div>").appendTo(n),
                a = s.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                f = s.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                l = s.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                c = s.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                h = function(e, t) {
                    if (!a.is(":visible") && typeof t == "undefined") {
                        a.show();
                        h(e, !0);
                        a.hide();
                        return
                    }
                    e = Math.max(0, e);
                    e = Math.min(e, 1);
                    e == 0 ? u.removeClass("mejs-mute").addClass("mejs-unmute") : u.removeClass("mejs-unmute").addClass("mejs-mute");
                    if (o == "vertical") {
                        var n = f.height(),
                            r = f.position(),
                            i = n - n * e;
                        c.css("top", Math.round(r.top + i - c.height() / 2));
                        l.height(n - i);
                        l.css("top", r.top + i)
                    } else {
                        var s = f.width(),
                            r = f.position(),
                            p = s * e;
                        c.css("left", Math.round(r.left + p - c.width() / 2));
                        l.width(Math.round(p))
                    }
                },
                p = function(e) {
                    var t = null,
                        n = f.offset();
                    if (o == "vertical") {
                        var r = f.height(),
                            s = parseInt(f.css("top").replace(/px/, ""), 10),
                            u = e.pageY - n.top;
                        t = (r - u) / r;
                        if (n.top == 0 || n.left == 0) return
                    } else {
                        var a = f.width(),
                            l = e.pageX - n.left;
                        t = l / a
                    }
                    t = Math.max(0, t);
                    t = Math.min(t, 1);
                    h(t);
                    t == 0 ? i.setMuted(!0) : i.setMuted(!1);
                    i.setVolume(t)
                },
                d = !1,
                v = !1;
            u.hover(function() {
                a.show();
                v = !0
            }, function() {
                v = !1;
                !d && o == "vertical" && a.hide()
            });
            a.bind("mouseover", function() {
                v = !0
            }).bind("mousedown", function(e) {
                p(e);
                s.globalBind("mousemove.vol", function(e) {
                    p(e)
                });
                s.globalBind("mouseup.vol", function() {
                    d = !1;
                    s.globalUnbind(".vol");
                    !v && o == "vertical" && a.hide()
                });
                d = !0;
                return !1
            });
            u.find("button").click(function() {
                i.setMuted(!i.muted)
            });
            i.addEventListener("volumechange", function(e) {
                if (!d)
                    if (i.muted) {
                        h(0);
                        u.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        h(i.volume);
                        u.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
            }, !1);
            if (s.container.is(":visible")) {
                h(t.options.startVolume);
                t.options.startVolume === 0 && i.setMuted(!0);
                i.pluginType === "native" && i.setVolume(t.options.startVolume)
            }
        }
    })
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        usePluginFullScreen: !0,
        newWindowCallback: function() {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    e.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        isInIframe: !1,
        buildfullscreen: function(t, n, r, i) {
            if (!t.isVideo) return;
            t.isInIframe = window.location != window.parent.location;
            if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                var s = function(e) {
                    if (t.isFullScreen)
                        if (mejs.MediaFeatures.isFullScreen()) {
                            t.isNativeFullScreen = !0;
                            t.setControlsSize()
                        } else {
                            t.isNativeFullScreen = !1;
                            t.exitFullScreen()
                        }
                };
                mejs.MediaFeatures.hasMozNativeFullScreen ? t.globalBind(mejs.MediaFeatures.fullScreenEventName, s) : t.container.bind(mejs.MediaFeatures.fullScreenEventName, s)
            }
            var o = this,
                u = 0,
                a = 0,
                f = t.container,
                l = e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + o.id + '" title="' + o.options.fullscreenText + '" aria-label="' + o.options.fullscreenText + '"></button>' + "</div>").appendTo(n);
            if (o.media.pluginType === "native" || !o.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) l.click(function() {
                var e = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen;
                e ? t.exitFullScreen() : t.enterFullScreen()
            });
            else {
                var c = null,
                    h = function() {
                        var e = document.createElement("x"),
                            t = document.documentElement,
                            n = window.getComputedStyle,
                            r;
                        if ("pointerEvents" in e.style) {
                            e.style.pointerEvents = "auto";
                            e.style.pointerEvents = "x";
                            t.appendChild(e);
                            r = n && n(e, "").pointerEvents === "auto";
                            t.removeChild(e);
                            return !!r
                        }
                        return !1
                    }();
                if (h && !mejs.MediaFeatures.isOpera) {
                    var p = !1,
                        d = function() {
                            if (p) {
                                for (var e in v) v[e].hide();
                                l.css("pointer-events", "");
                                o.controls.css("pointer-events", "");
                                o.media.removeEventListener("click", o.clickToPlayPauseCallback);
                                p = !1
                            }
                        },
                        v = {},
                        m = ["top", "left", "right", "bottom"],
                        g, y, b = function() {
                            var e = l.offset().left - o.container.offset().left,
                                t = l.offset().top - o.container.offset().top,
                                n = l.outerWidth(!0),
                                r = l.outerHeight(!0),
                                i = o.container.width(),
                                s = o.container.height();
                            for (g in v) v[g].css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                            v.top.width(i).height(t);
                            v.left.width(e).height(r).css({
                                top: t
                            });
                            v.right.width(i - e - n).height(r).css({
                                top: t,
                                left: e + n
                            });
                            v.bottom.width(i).height(s - r - t).css({
                                top: t + r
                            })
                        };
                    o.globalBind("resize", function() {
                        b()
                    });
                    for (g = 0, y = m.length; g < y; g++) v[m[g]] = e('<div class="mejs-fullscreen-hover" />').appendTo(o.container).mouseover(d).hide();
                    l.on("mouseover", function() {
                        if (!o.isFullScreen) {
                            var e = l.offset(),
                                n = t.container.offset();
                            i.positionFullscreenButton(e.left - n.left, e.top - n.top, !1);
                            l.css("pointer-events", "none");
                            o.controls.css("pointer-events", "none");
                            o.media.addEventListener("click", o.clickToPlayPauseCallback);
                            for (g in v) v[g].show();
                            b();
                            p = !0
                        }
                    });
                    i.addEventListener("fullscreenchange", function(e) {
                        o.isFullScreen = !o.isFullScreen;
                        o.isFullScreen ? o.media.removeEventListener("click", o.clickToPlayPauseCallback) : o.media.addEventListener("click", o.clickToPlayPauseCallback);
                        d()
                    });
                    o.globalBind("mousemove", function(e) {
                        if (p) {
                            var t = l.offset();
                            if (e.pageY < t.top || e.pageY > t.top + l.outerHeight(!0) || e.pageX < t.left || e.pageX > t.left + l.outerWidth(!0)) {
                                l.css("pointer-events", "");
                                o.controls.css("pointer-events", "");
                                p = !1
                            }
                        }
                    })
                } else l.on("mouseover", function() {
                    if (c !== null) {
                        clearTimeout(c);
                        delete c
                    }
                    var e = l.offset(),
                        n = t.container.offset();
                    i.positionFullscreenButton(e.left - n.left, e.top - n.top, !0)
                }).on("mouseout", function() {
                    if (c !== null) {
                        clearTimeout(c);
                        delete c
                    }
                    c = setTimeout(function() {
                        i.hideFullscreenButton()
                    }, 1500)
                })
            }
            t.fullscreenBtn = l;
            o.globalBind("keydown", function(e) {
                (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || o.isFullScreen) && e.keyCode == 27 && t.exitFullScreen()
            })
        },
        cleanfullscreen: function(e) {
            e.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function() {
            var t = this;
            if (t.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || t.options.usePluginFullScreen)) return;
            e(document.documentElement).addClass("mejs-fullscreen");
            normalHeight = t.container.height();
            normalWidth = t.container.width();
            if (t.media.pluginType === "native")
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    mejs.MediaFeatures.requestFullScreen(t.container[0]);
                    t.isInIframe && setTimeout(function r() {
                        t.isNativeFullScreen && (e(window).width() !== screen.width ? t.exitFullScreen() : setTimeout(r, 500))
                    }, 500)
                } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                t.media.webkitEnterFullscreen();
                return
            }
            if (t.isInIframe) {
                var n = t.options.newWindowCallback(this);
                if (n !== "") {
                    if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        t.pause();
                        window.open(n, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        return
                    }
                    setTimeout(function() {
                        if (!t.isNativeFullScreen) {
                            t.pause();
                            window.open(n, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                        }
                    }, 250)
                }
            }
            t.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
            t.containerSizeTimeout = setTimeout(function() {
                t.container.css({
                    width: "100%",
                    height: "100%"
                });
                t.setControlsSize()
            }, 500);
            if (t.media.pluginType === "native") t.$media.width("100%").height("100%");
            else {
                t.container.find(".mejs-shim").width("100%").height("100%");
                t.media.setVideoSize(e(window).width(), e(window).height())
            }
            t.layers.children("div").width("100%").height("100%");
            t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
            t.setControlsSize();
            t.isFullScreen = !0
        },
        exitFullScreen: function() {
            var t = this;
            clearTimeout(t.containerSizeTimeout);
            if (t.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) {
                t.media.setFullscreen(!1);
                return
            }
            mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen();
            e(document.documentElement).removeClass("mejs-fullscreen");
            t.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
            if (t.media.pluginType === "native") t.$media.width(normalWidth).height(normalHeight);
            else {
                t.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                t.media.setVideoSize(normalWidth, normalHeight)
            }
            t.layers.children("div").width(normalWidth).height(normalHeight);
            t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
            t.setControlsSize();
            t.isFullScreen = !1
        }
    })
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: !0,
        toggleCaptionsButtonWhenOnlyOne: !1,
        slidesSelector: ""
    });
    e.extend(MediaElementPlayer.prototype, {
        hasChapters: !1,
        buildtracks: function(t, n, r, i) {
            if (t.tracks.length == 0) return;
            var s = this,
                o, u = "";
            if (s.domNode.textTracks)
                for (var o = s.domNode.textTracks.length - 1; o >= 0; o--) s.domNode.textTracks[o].mode = "hidden";
            t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(r).hide();
            t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(r).hide();
            t.captionsText = t.captions.find(".mejs-captions-text");
            t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + s.id + '" title="' + s.options.tracksText + '" aria-label="' + s.options.tracksText + '"></button>' + '<div class="mejs-captions-selector">' + "<ul>" + "<li>" + '<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" />' + '<label for="' + t.id + '_captions_none">' + mejs.i18n.t("None") + "</label>" + "</li>" + "</ul>" + "</div>" + "</div>").appendTo(n);
            var a = 0;
            for (o = 0; o < t.tracks.length; o++) t.tracks[o].kind == "subtitles" && a++;
            s.options.toggleCaptionsButtonWhenOnlyOne && a == 1 ? t.captionsButton.on("click", function() {
                if (t.selectedTrack == null) var e = t.tracks[0].srclang;
                else var e = "none";
                t.setTrack(e)
            }) : t.captionsButton.hover(function() {
                e(this).find(".mejs-captions-selector").css("visibility", "visible")
            }, function() {
                e(this).find(".mejs-captions-selector").css("visibility", "hidden")
            }).on("click", "input[type=radio]", function() {
                lang = this.value;
                t.setTrack(lang)
            });
            t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function() {
                t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
            }).bind("controlshidden", function() {
                i.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
            });
            t.trackToLoad = -1;
            t.selectedTrack = null;
            t.isLoadingTrack = !1;
            for (o = 0; o < t.tracks.length; o++) t.tracks[o].kind == "subtitles" && t.addTrackButton(t.tracks[o].srclang, t.tracks[o].label);
            t.loadNextTrack();
            i.addEventListener("timeupdate", function(e) {
                t.displayCaptions()
            }, !1);
            if (t.options.slidesSelector != "") {
                t.slidesContainer = e(t.options.slidesSelector);
                i.addEventListener("timeupdate", function(e) {
                    t.displaySlides()
                }, !1)
            }
            i.addEventListener("loadedmetadata", function(e) {
                t.displayChapters()
            }, !1);
            t.container.hover(function() {
                if (t.hasChapters) {
                    t.chapters.css("visibility", "visible");
                    t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight())
                }
            }, function() {
                t.hasChapters && !i.paused && t.chapters.fadeOut(200, function() {
                    e(this).css("visibility", "hidden");
                    e(this).css("display", "block")
                })
            });
            t.node.getAttribute("autoplay") !== null && t.chapters.css("visibility", "hidden")
        },
        setTrack: function(e) {
            var t = this,
                n;
            if (e == "none") {
                t.selectedTrack = null;
                t.captionsButton.removeClass("mejs-captions-enabled")
            } else
                for (n = 0; n < t.tracks.length; n++)
                    if (t.tracks[n].srclang == e) {
                        t.selectedTrack == null && t.captionsButton.addClass("mejs-captions-enabled");
                        t.selectedTrack = t.tracks[n];
                        t.captions.attr("lang", t.selectedTrack.srclang);
                        t.displayCaptions();
                        break
                    }
        },
        loadNextTrack: function() {
            var e = this;
            e.trackToLoad++;
            if (e.trackToLoad < e.tracks.length) {
                e.isLoadingTrack = !0;
                e.loadTrack(e.trackToLoad)
            } else {
                e.isLoadingTrack = !1;
                e.checkForTracks()
            }
        },
        loadTrack: function(t) {
            var n = this,
                r = n.tracks[t],
                i = function() {
                    r.isLoaded = !0;
                    n.enableTrackButton(r.srclang, r.label);
                    n.loadNextTrack()
                };
            e.ajax({
                url: r.src,
                dataType: "text",
                success: function(e) {
                    typeof e == "string" && /<tt\s+xml/ig.exec(e) ? r.entries = mejs.TrackFormatParser.dfxp.parse(e) : r.entries = mejs.TrackFormatParser.webvvt.parse(e);
                    i();
                    r.kind == "chapters" && n.media.addEventListener("play", function(e) {
                        n.media.duration > 0 && n.displayChapters(r)
                    }, !1);
                    r.kind == "slides" && n.setupSlides(r)
                },
                error: function() {
                    n.loadNextTrack()
                }
            })
        },
        enableTrackButton: function(t, n) {
            var r = this;
            n === "" && (n = mejs.language.codes[t] || t);
            r.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(n);
            r.options.startLanguage == t && e("#" + r.id + "_captions_" + t).click();
            r.adjustLanguageBox()
        },
        addTrackButton: function(t, n) {
            var r = this;
            n === "" && (n = mejs.language.codes[t] || t);
            r.captionsButton.find("ul").append(e('<li><input type="radio" name="' + r.id + '_captions" id="' + r.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" />' + '<label for="' + r.id + "_captions_" + t + '">' + n + " (loading)" + "</label>" + "</li>"));
            r.adjustLanguageBox();
            r.container.find(".mejs-captions-translations option[value=" + t + "]").remove()
        },
        adjustLanguageBox: function() {
            var e = this;
            e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
        },
        checkForTracks: function() {
            var e = this,
                t = !1;
            if (e.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < e.tracks.length; i++)
                    if (e.tracks[i].kind == "subtitles") {
                        t = !0;
                        break
                    }
                if (!t) {
                    e.captionsButton.hide();
                    e.setControlsSize()
                }
            }
        },
        displayCaptions: function() {
            if (typeof this.tracks == "undefined") return;
            var e = this,
                t, n = e.selectedTrack;
            if (n != null && n.isLoaded) {
                for (t = 0; t < n.entries.times.length; t++)
                    if (e.media.currentTime >= n.entries.times[t].start && e.media.currentTime <= n.entries.times[t].stop) {
                        e.captionsText.html(n.entries.text[t]);
                        e.captions.show().height(0);
                        return
                    }
                e.captions.hide()
            } else e.captions.hide()
        },
        setupSlides: function(e) {
            var t = this;
            t.slides = e;
            t.slides.entries.imgs = [t.slides.entries.text.length];
            t.showSlide(0)
        },
        showSlide: function(t) {
            if (typeof this.tracks == "undefined" || typeof this.slidesContainer == "undefined") return;
            var n = this,
                r = n.slides.entries.text[t],
                i = n.slides.entries.imgs[t];
            typeof i == "undefined" || typeof i.fadeIn == "undefined" ? n.slides.entries.imgs[t] = i = e('<img src="' + r + '">').on("load", function() {
                i.appendTo(n.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
            }) : !i.is(":visible") && !i.is(":animated") && i.fadeIn().siblings(":visible").fadeOut()
        },
        displaySlides: function() {
            if (typeof this.slides == "undefined") return;
            var e = this,
                t = e.slides,
                n;
            for (n = 0; n < t.entries.times.length; n++)
                if (e.media.currentTime >= t.entries.times[n].start && e.media.currentTime <= t.entries.times[n].stop) {
                    e.showSlide(n);
                    return
                }
        },
        displayChapters: function() {
            var e = this,
                t;
            for (t = 0; t < e.tracks.length; t++)
                if (e.tracks[t].kind == "chapters" && e.tracks[t].isLoaded) {
                    e.drawChapters(e.tracks[t]);
                    e.hasChapters = !0;
                    break
                }
        },
        drawChapters: function(t) {
            var n = this,
                r, i, s = 0,
                o = 0;
            n.chapters.empty();
            for (r = 0; r < t.entries.times.length; r++) {
                i = t.entries.times[r].stop - t.entries.times[r].start;
                s = Math.floor(i / n.media.duration * 100);
                if (s + o > 100 || r == t.entries.times.length - 1 && s + o < 100) s = 100 - o;
                n.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[r].start + '" style="left: ' + o.toString() + "%;width: " + s.toString() + '%;">' + '<div class="mejs-chapter-block' + (r == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '">' + '<span class="ch-title">' + t.entries.text[r] + "</span>" + '<span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[r].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[r].stop) + "</span>" + "</div>" + "</div>"));
                o += s
            }
            n.chapters.find("div.mejs-chapter").click(function() {
                n.media.setCurrentTime(parseFloat(e(this).attr("rel")));
                n.media.paused && n.media.play()
            });
            n.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function(t) {
                var n = 0,
                    r = mejs.TrackFormatParser.split2(t, /\r?\n/),
                    i = {
                        text: [],
                        times: []
                    },
                    s, o;
                for (; n < r.length; n++)
                    if (this.pattern_identifier.exec(r[n])) {
                        n++;
                        s = this.pattern_timecode.exec(r[n]);
                        if (s && n < r.length) {
                            n++;
                            o = r[n];
                            n++;
                            while (r[n] !== "" && n < r.length) {
                                o = o + "\n" + r[n];
                                n++
                            }
                            o = e.trim(o).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                            i.text.push(o);
                            i.times.push({
                                start: mejs.Utility.convertSMPTEtoSeconds(s[1]) == 0 ? .2 : mejs.Utility.convertSMPTEtoSeconds(s[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(s[3]),
                                settings: s[5]
                            })
                        }
                    }
                return i
            }
        },
        dfxp: {
            parse: function(t) {
                t = e(t).filter("tt");
                var n = 0,
                    r = t.children("div").eq(0),
                    i = r.find("p"),
                    s = t.find("#" + r.attr("style")),
                    o, u, a, f, l = {
                        text: [],
                        times: []
                    };
                if (s.length) {
                    var c = s.removeAttr("id").get(0).attributes;
                    if (c.length) {
                        o = {};
                        for (n = 0; n < c.length; n++) o[c[n].name.split(":")[1]] = c[n].value
                    }
                }
                for (n = 0; n < i.length; n++) {
                    var h, p = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    i.eq(n).attr("begin") && (p.start = mejs.Utility.convertSMPTEtoSeconds(i.eq(n).attr("begin")));
                    !p.start && i.eq(n - 1).attr("end") && (p.start = mejs.Utility.convertSMPTEtoSeconds(i.eq(n - 1).attr("end")));
                    i.eq(n).attr("end") && (p.stop = mejs.Utility.convertSMPTEtoSeconds(i.eq(n).attr("end")));
                    !p.stop && i.eq(n + 1).attr("begin") && (p.stop = mejs.Utility.convertSMPTEtoSeconds(i.eq(n + 1).attr("begin")));
                    if (o) {
                        h = "";
                        for (var d in o) h += d + ":" + o[d] + ";"
                    }
                    h && (p.style = h);
                    p.start == 0 && (p.start = .2);
                    l.times.push(p);
                    f = e.trim(i.eq(n).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                    l.text.push(f);
                    l.times.start == 0 && (l.times.start = 2)
                }
                return l
            }
        },
        split2: function(e, t) {
            return e.split(t)
        }
    };
    "x\n\ny".split(/\n/gi).length != 3 && (mejs.TrackFormatParser.split2 = function(e, t) {
        var n = [],
            r = "",
            i;
        for (i = 0; i < e.length; i++) {
            r += e.substring(i, i + 1);
            if (t.test(r)) {
                n.push(r.replace(t, ""));
                r = ""
            }
        }
        n.push(r);
        return n
    })
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function(e) {
                return typeof e.enterFullScreen == "undefined" ? null : e.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function(e) {
                e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
            }
        }, {
            render: function(e) {
                return e.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function(e) {
                e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
            }
        }, {
            isSeparator: !0
        }, {
            render: function(e) {
                return mejs.i18n.t("Download Video")
            },
            click: function(e) {
                window.location.href = e.media.currentSrc
            }
        }]
    });
    e.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(t, n, r, i) {
            t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide();
            t.container.bind("contextmenu", function(e) {
                if (t.isContextMenuEnabled) {
                    e.preventDefault();
                    t.renderContextMenu(e.clientX - 1, e.clientY - 1);
                    return !1
                }
            });
            t.container.bind("click", function() {
                t.contextMenu.hide()
            });
            t.contextMenu.bind("mouseleave", function() {
                t.startContextMenuTimer()
            })
        },
        cleancontextmenu: function(e) {
            e.contextMenu.remove()
        },
        isContextMenuEnabled: !0,
        enableContextMenu: function() {
            this.isContextMenuEnabled = !0
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = !1
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var e = this;
            e.killContextMenuTimer();
            e.contextMenuTimer = setTimeout(function() {
                e.hideContextMenu();
                e.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function() {
            var e = this.contextMenuTimer;
            if (e != null) {
                clearTimeout(e);
                delete e;
                e = null
            }
        },
        hideContextMenu: function() {
            this.contextMenu.hide()
        },
        renderContextMenu: function(t, n) {
            var r = this,
                i = "",
                s = r.options.contextMenuItems;
            for (var o = 0, u = s.length; o < u; o++)
                if (s[o].isSeparator) i += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var a = s[o].render(r);
                    a != null && (i += '<div class="mejs-contextmenu-item" data-itemindex="' + o + '" id="element-' + Math.random() * 1e6 + '">' + a + "</div>")
                }
            r.contextMenu.empty().append(e(i)).css({
                top: n,
                left: t
            }).show();
            r.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var t = e(this),
                    n = parseInt(t.data("itemindex"), 10),
                    i = r.options.contextMenuItems[n];
                typeof i.show != "undefined" && i.show(t, r);
                t.click(function() {
                    typeof i.click != "undefined" && i.click(r);
                    r.contextMenu.hide()
                })
            });
            setTimeout(function() {
                r.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function(e) {
    e.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    });
    e.extend(MediaElementPlayer.prototype, {
        buildpostroll: function(t, n, r, i) {
            var s = this,
                o = s.container.find('link[rel="postroll"]').attr("href");
            if (typeof o != "undefined") {
                t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + s.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(r).hide();
                s.media.addEventListener("ended", function(n) {
                    e.ajax({
                        dataType: "html",
                        url: o,
                        success: function(e, t) {
                            r.find(".mejs-postroll-layer-content").html(e)
                        }
                    });
                    t.postroll.show()
                }, !1)
            }
        }
    })
})(mejs.$);
(window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
                var r = [].slice,
                    i = function(e, t, r) {
                        n.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = i.prototype.render
                    },
                    s = 1e-10,
                    o = n._internals.isSelector,
                    u = n._internals.isArray,
                    a = i.prototype = n.to({}, .1, {}),
                    f = [];
                i.version = "1.11.1", a.constructor = i, a.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf, i.getTweensOf = n.getTweensOf, i.ticker = n.ticker, a.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
                }, a.updateTo = function(e, t) {
                    var r, i = this.ratio;
                    t && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (r in e) this.vars[r] = e[r];
                    if (this._initted)
                        if (t) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var o, u = 1 / (1 - i), a = this._firstPT; a;) o = a.s + a.c, a.c *= u, a.s = o - a.c, a = a._next
                    }
                    return this
                }, a.render = function(e, t, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, i, o, u, a, l, c, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        v = this._totalTime,
                        m = this._cycle,
                        g = this._duration;
                    if (e >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, i = "onComplete"), 0 === g && (h = this._rawPrevTime, (0 === e || 0 > h || h === s) && h !== e && (n = !0, h > s && (i = "onReverseComplete")), this._rawPrevTime = h = !t || e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === g && this._rawPrevTime > s) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === g && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = h = !t || e ? e : s)) : this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (u = g + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (a = this._time / g, l = this._easeType, c = this._easePower, (1 === l || 3 === l && a >= .5) && (a = 1 - a), 3 === l && (a *= 2), 1 === c ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), this.ratio = 1 === l ? 1 - a : 2 === l ? a : .5 > this._time / g ? a / 2 : 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / g)), d === this._time && !n && m === this._cycle) return v !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !r ? this.ratio = this._ease.getRatio(this._time / g) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== d && e >= 0 && (this._active = !0), 0 === v && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), this._cycle !== m && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f)), i && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || f), 0 === g && this._rawPrevTime === s && h !== s && (this._rawPrevTime = 0)))
                }, i.to = function(e, t, n) {
                    return new i(e, t, n)
                }, i.from = function(e, t, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new i(e, t, n)
                }, i.fromTo = function(e, t, n, r) {
                    return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new i(e, t, r)
                }, i.staggerTo = i.allTo = function(e, t, s, a, l, c, h) {
                    a = a || 0;
                    var p, d, v, m, g = s.delay || 0,
                        y = [],
                        b = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), l.apply(h || this, c || f)
                        };
                    for (u(e) || ("string" == typeof e && (e = n.selector(e) || e), o(e) && (e = r.call(e, 0))), p = e.length, v = 0; p > v; v++) {
                        d = {};
                        for (m in s) d[m] = s[m];
                        d.delay = g, v === p - 1 && l && (d.onComplete = b), y[v] = new i(e[v], t, d), g += a
                    }
                    return y
                }, i.staggerFrom = i.allFrom = function(e, t, n, r, s, o, u) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, i.staggerTo(e, t, n, r, s, o, u)
                }, i.staggerFromTo = i.allFromTo = function(e, t, n, r, s, o, u, a) {
                    return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, i.staggerTo(e, t, r, s, o, u, a)
                }, i.delayedCall = function(e, t, n, r, s) {
                    return new i(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: n,
                        onCompleteScope: r,
                        onReverseComplete: t,
                        onReverseCompleteParams: n,
                        onReverseCompleteScope: r,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, i.set = function(e, t) {
                    return new i(e, 0, t)
                }, i.isTweening = function(e) {
                    return n.getTweensOf(e, !0).length > 0
                };
                var l = function(e, t) {
                        for (var r = [], i = 0, s = e._first; s;) s instanceof n ? r[i++] = s : (t && (r[i++] = s), r = r.concat(l(s, t)), i = r.length), s = s._next;
                        return r
                    },
                    c = i.getAllTweens = function(t) {
                        return l(e._rootTimeline, t).concat(l(e._rootFramesTimeline, t))
                    };
                i.killAll = function(e, n, r, i) {
                    null == n && (n = !0), null == r && (r = !0);
                    var s, o, u, a = c(0 != i),
                        f = a.length,
                        l = n && r && i;
                    for (u = 0; f > u; u++) o = a[u], (l || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && (e ? o.totalTime(o.totalDuration()) : o._enabled(!1, !1))
                }, i.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var s, a, f, l, c, h = n._tweenLookup;
                        if ("string" == typeof e && (e = n.selector(e) || e), o(e) && (e = r(e, 0)), u(e))
                            for (l = e.length; --l > -1;) i.killChildTweensOf(e[l], t);
                        else {
                            s = [];
                            for (f in h)
                                for (a = h[f].target.parentNode; a;) a === e && (s = s.concat(h[f].tweens)), a = a.parentNode;
                            for (c = s.length, l = 0; c > l; l++) t && s[l].totalTime(s[l].totalDuration()), s[l]._enabled(!1, !1)
                        }
                    }
                };
                var h = function(e, n, r, i) {
                    n = n !== !1, r = r !== !1, i = i !== !1;
                    for (var s, o, u = c(i), a = n && r && i, f = u.length; --f > -1;) o = u[f], (a || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && o.paused(e)
                };
                return i.pauseAll = function(e, t, n) {
                    h(!0, e, t, n)
                }, i.resumeAll = function(e, t, n) {
                    h(!1, e, t, n)
                }, i.globalTimeScale = function(t) {
                    var r = e._rootTimeline,
                        i = n.ticker.time;
                    return arguments.length ? (t = t || s, r._startTime = i - (i - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, i = n.ticker.frame, r._startTime = i - (i - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
                }, a.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, a.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, a.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, a.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, a.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, a.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, a.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, a.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, i
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
                var r = function(e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var n, r, i = this.vars;
                        for (r in i) n = i[r], o(n) && -1 !== n.join("").indexOf("{self}") && (i[r] = this._swapSelfInParams(n));
                        o(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
                    },
                    i = 1e-10,
                    s = n._internals.isSelector,
                    o = n._internals.isArray,
                    u = [],
                    a = function(e) {
                        var t, n = {};
                        for (t in e) n[t] = e[t];
                        return n
                    },
                    f = function(e, t, n, r) {
                        e._timeline.pause(e._startTime), t && t.apply(r || e._timeline, n || u)
                    },
                    l = u.slice,
                    c = r.prototype = new t;
                return r.version = "1.11.0", c.constructor = r, c.kill()._gc = !1, c.to = function(e, t, r, i) {
                    return t ? this.add(new n(e, t, r), i) : this.set(e, r, i)
                }, c.from = function(e, t, r, i) {
                    return this.add(n.from(e, t, r), i)
                }, c.fromTo = function(e, t, r, i, s) {
                    return t ? this.add(n.fromTo(e, t, r, i), s) : this.set(e, i, s)
                }, c.staggerTo = function(e, t, i, o, u, f, c, p) {
                    var d, v = new r({
                        onComplete: f,
                        onCompleteParams: c,
                        onCompleteScope: p
                    });
                    for ("string" == typeof e && (e = n.selector(e) || e), s(e) && (e = l.call(e, 0)), o = o || 0, d = 0; e.length > d; d++) i.startAt && (i.startAt = a(i.startAt)), v.to(e[d], t, a(i), d * o);
                    return this.add(v, u)
                }, c.staggerFrom = function(e, t, n, r, i, s, o, u) {
                    return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(e, t, n, r, i, s, o, u)
                }, c.staggerFromTo = function(e, t, n, r, i, s, o, u, a) {
                    return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, r, i, s, o, u, a)
                }, c.call = function(e, t, r, i) {
                    return this.add(n.delayedCall(0, e, t, r), i)
                }, c.set = function(e, t, r) {
                    return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new n(e, 0, t), r)
                }, r.exportRoot = function(e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var i, s, o = new r(e),
                        u = o._timeline;
                    for (null == t && (t = !0), u._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = u._time, i = u._first; i;) s = i._next, t && i instanceof n && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = s;
                    return u.add(o, 0), o
                }, c.add = function(i, s, u, a) {
                    var f, l, c, h, p, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof e)) {
                        if (i instanceof Array || i && i.push && o(i)) {
                            for (u = u || "normal", a = a || 0, f = s, l = i.length, c = 0; l > c; c++) o(h = i[c]) && (h = new r({
                                tweens: h
                            })), this.add(h, f), "string" != typeof h && "function" != typeof h && ("sequence" === u ? f = h._startTime + h.totalDuration() / h._timeScale : "start" === u && (h._startTime -= h.delay())), f += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof i) return this.addLabel(i, s);
                        if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                        i = n.delayedCall(0, i)
                    }
                    if (t.prototype.add.call(this, i, s), this._gc && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > i._startTime; p._gc && p._timeline;) p._timeline.smoothChildTiming && d ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
                    return this
                }, c.remove = function(t) {
                    if (t instanceof e) return this._remove(t, !1);
                    if (t instanceof Array || t && t.push && o(t)) {
                        for (var n = t.length; --n > -1;) this.remove(t[n]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, c._remove = function(e, n) {
                    t.prototype._remove.call(this, e, n);
                    var r = this._last;
                    return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                }, c.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, c.insert = c.insertMultiple = function(e, t, n, r) {
                    return this.add(e, t || 0, n, r)
                }, c.appendMultiple = function(e, t, n, r) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
                }, c.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, c.addPause = function(e, t, n, r) {
                    return this.call(f, ["{self}", t, n, r], this, e)
                }, c.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, c.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, c._parseTimeOrLabel = function(t, n, r, i) {
                    var s;
                    if (i instanceof e && i.timeline === this) this.remove(i);
                    else if (i && (i instanceof Array || i.push && o(i)))
                        for (s = i.length; --s > -1;) i[s] instanceof e && i[s].timeline === this && this.remove(i[s]);
                    if ("string" == typeof n) return this._parseTimeOrLabel(n, r && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, r);
                    if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (s = t.indexOf("="), -1 === s) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                        n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
                    }
                    return Number(t) + n
                }, c.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, c.stop = function() {
                    return this.paused(!0)
                }, c.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, c.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, c.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var r, s, o, a, f, l = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        h = this._startTime,
                        p = this._timeScale,
                        d = this._paused;
                    if (e >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === i) && this._rawPrevTime !== e && this._first && (f = !0, this._rawPrevTime > i && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : i, e = l + 1e-6) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && (this._rawPrevTime > i || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (f = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e ? e : i, e = 0, this._initted || (f = !0))) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== c && this._first || n || f) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && e > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c)
                            for (r = this._first; r && (o = r._next, !this._paused || d);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                        else
                            for (r = this._last; r && (o = r._prev, !this._paused || d);)(r._active || c >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                        this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), a && (this._gc || (h === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || u)))
                    }
                }, c._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, c.getChildren = function(e, t, r, i) {
                    i = i || -9999999999;
                    for (var s = [], o = this._first, u = 0; o;) i > o._startTime || (o instanceof n ? t !== !1 && (s[u++] = o) : (r !== !1 && (s[u++] = o), e !== !1 && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
                    return s
                }, c.getTweensOf = function(e, t) {
                    for (var r = n.getTweensOf(e), i = r.length, s = [], o = 0; --i > -1;)(r[i].timeline === this || t && this._contains(r[i])) && (s[o++] = r[i]);
                    return s
                }, c._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, c.shiftChildren = function(e, t, n) {
                    n = n || 0;
                    for (var r, i = this._first, s = this._labels; i;) i._startTime >= n && (i._startTime += e), i = i._next;
                    if (t)
                        for (r in s) s[r] >= n && (s[r] += e);
                    return this._uncache(!0)
                }, c._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;) n[r]._kill(e, t) && (i = !0);
                    return i
                }, c.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        n = t.length;
                    for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, c.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return this
                }, c._enabled = function(e, n) {
                    if (e === this._gc)
                        for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
                    return t.prototype._enabled.call(this, e, n)
                }, c.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, c.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, n, r = 0, i = this._last, s = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > s && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : s = i._startTime, 0 > i._startTime && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), s = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = t;
                            this._duration = this._totalDuration = r, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
                }, c.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, c.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, r
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, n) {
                var r = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    i = 1e-10,
                    s = [],
                    o = new n(null, null, 1, 0),
                    u = r.prototype = new e;
                return u.constructor = r, u.kill()._gc = !1, r.version = "1.11.0", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, u.addCallback = function(e, n, r, i) {
                    return this.add(t.delayedCall(0, e, r, i), n)
                }, u.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t); --r > -1;) n[r]._startTime === i && n[r]._enabled(!1, !1);
                    return this
                }, u.tweenTo = function(e, n) {
                    n = n || {};
                    var r, i, u = {
                        ease: o,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in n) u[r] = n[r];
                    return u.time = this._parseTimeOrLabel(e), i = new t(this, Math.abs(Number(u.time) - this._time) / this._timeScale || .001, u), u.onStart = function() {
                        i.target.paused(!0), i.vars.time !== i.target.time() && i.duration(Math.abs(i.vars.time - i.target.time()) / i.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || i, n.onStartParams || s)
                    }, i
                }, u.tweenFromTo = function(e, t, n) {
                    n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        onCompleteScope: this
                    }, n.immediateRender = n.immediateRender !== !1;
                    var r = this.tweenTo(t, n);
                    return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
                }, u.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var r, o, u, a, f, l, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._duration,
                        p = this._time,
                        d = this._totalTime,
                        v = this._startTime,
                        m = this._timeScale,
                        g = this._rawPrevTime,
                        y = this._paused,
                        b = this._cycle;
                    if (e >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", 0 === this._duration && (0 === e || 0 > g || g === i) && g !== e && this._first && (f = !0, g > i && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : i, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = h, e = h + 1e-6)) : 1e-7 > e ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === h && (g > i || 0 > e && g >= 0) && !this._locked) && (a = "onReverseComplete", o = this._reversed), 0 > e ? (this._active = !1, 0 === h && g >= 0 && this._first && (f = !0), this._rawPrevTime = e) : (this._rawPrevTime = h || !t || e ? e : i, e = 0, this._initted || (f = !0))) : (0 === h && 0 > g && (f = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (l = h + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = h - this._time), this._time > h ? (this._time = h, e = h + 1e-6) : 0 > this._time ? this._time = e = 0 : e = this._time))), this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & b),
                            E = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            S = this._totalTime,
                            x = this._cycle,
                            T = this._rawPrevTime,
                            N = this._time;
                        if (this._totalTime = b * h, b > this._cycle ? w = !w : this._totalTime += h, this._time = p, this._rawPrevTime = 0 === h ? g - 1e-5 : g, this._cycle = b, this._locked = !0, p = w ? 0 : h, this.render(p, t, 0 === h), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), E && (p = w ? h + 1e-6 : -0.000001, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                        this._time = N, this._totalTime = S, this._cycle = x, this._rawPrevTime = T
                    }
                    if (!(this._time !== p && this._first || n || f)) return d !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && e > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= p)
                        for (r = this._first; r && (u = r._next, !this._paused || y);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = u;
                    else
                        for (r = this._last; r && (u = r._prev, !this._paused || y);)(r._active || p >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = u;
                    this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), a && (this._locked || this._gc || (v === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || s)))
                }, u.getActive = function(e, t, n) {
                    null == e && (e = !0), null == t && (t = !0), null == n && (n = !1);
                    var r, i, s = [],
                        o = this.getChildren(e, t, n),
                        u = 0,
                        a = o.length;
                    for (r = 0; a > r; r++) i = o[r], i.isActive() && (s[u++] = i);
                    return s
                }, u.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, n = this.getLabelsArray(),
                        r = n.length;
                    for (t = 0; r > t; t++)
                        if (n[t].time > e) return n[t].name;
                    return null
                }, u.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), n = t.length; --n > -1;)
                        if (e > t[n].time) return t[n].name;
                    return null
                }, u.getLabelsArray = function() {
                    var e, t = [],
                        n = 0;
                    for (e in this._labels) t[n++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, u.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, u.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, u.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(e) {
                    return arguments.length ?
                        (this._yoyo = e, this) : this._yoyo
                }, u.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, r
            }, !0),
            function() {
                var e = 180 / Math.PI,
                    t = [],
                    n = [],
                    r = [],
                    i = {},
                    s = function(e, t, n, r) {
                        this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    u = function(e, t, n, r) {
                        var i = {
                                a: e
                            },
                            s = {},
                            o = {},
                            u = {
                                c: r
                            },
                            a = (e + t) / 2,
                            f = (t + n) / 2,
                            l = (n + r) / 2,
                            c = (a + f) / 2,
                            h = (f + l) / 2,
                            p = (h - c) / 8;
                        return i.b = a + (e - a) / 4, s.b = c + p, i.c = s.a = (i.b + s.b) / 2, s.c = o.a = (c + h) / 2, o.b = h - p, u.b = l + (r - l) / 4, o.c = u.a = (o.b + u.b) / 2, [i, s, o, u]
                    },
                    a = function(e, i, s, o, a) {
                        var f, l, c, h, p, d, v, m, g, y, b, w, E, S = e.length - 1,
                            x = 0,
                            T = e[0].a;
                        for (f = 0; S > f; f++) p = e[x], l = p.a, c = p.d, h = e[x + 1].d, a ? (b = t[f], w = n[f], E = .25 * (w + b) * i / (o ? .5 : r[f] || .5), d = c - (c - l) * (o ? .5 * i : 0 !== b ? E / b : 0), v = c + (h - c) * (o ? .5 * i : 0 !== w ? E / w : 0), m = c - (d + ((v - d) * (3 * b / (b + w) + .5) / 4 || 0))) : (d = c - .5 * (c - l) * i, v = c + .5 * (h - c) * i, m = c - (d + v) / 2), d += m, v += m, p.c = g = d, p.b = 0 !== f ? T : T = p.a + .6 * (p.c - p.a), p.da = c - l, p.ca = g - l, p.ba = T - l, s ? (y = u(l, T, g, c), e.splice(x, 1, y[0], y[1], y[2], y[3]), x += 4) : x++, T = v;
                        p = e[x], p.b = T, p.c = T + .4 * (p.d - T), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = T - p.a, s && (y = u(p.a, T, p.c, p.d), e.splice(x, 1, y[0], y[1], y[2], y[3]))
                    },
                    f = function(e, r, i, o) {
                        var u, a, f, l, c, h, p = [];
                        if (o)
                            for (e = [o].concat(e), a = e.length; --a > -1;) "string" == typeof(h = e[a][r]) && "=" === h.charAt(1) && (e[a][r] = o[r] + Number(h.charAt(0) + h.substr(2)));
                        if (u = e.length - 2, 0 > u) return p[0] = new s(e[0][r], 0, 0, e[-1 > u ? 0 : 1][r]), p;
                        for (a = 0; u > a; a++) f = e[a][r], l = e[a + 1][r], p[a] = new s(f, 0, 0, l), i && (c = e[a + 2][r], t[a] = (t[a] || 0) + (l - f) * (l - f), n[a] = (n[a] || 0) + (c - l) * (c - l));
                        return p[a] = new s(e[a][r], 0, 0, e[a + 1][r]), p
                    },
                    l = function(e, s, u, l, c, h) {
                        var p, d, v, m, g, y, b, w, E = {},
                            S = [],
                            x = h || e[0];
                        c = "string" == typeof c ? "," + c + "," : o, null == s && (s = 1);
                        for (d in e[0]) S.push(d);
                        if (e.length > 1) {
                            for (w = e[e.length - 1], b = !0, p = S.length; --p > -1;)
                                if (d = S[p], Math.abs(x[d] - w[d]) > .05) {
                                    b = !1;
                                    break
                                }
                            b && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
                        }
                        for (t.length = n.length = r.length = 0, p = S.length; --p > -1;) d = S[p], i[d] = -1 !== c.indexOf("," + d + ","), E[d] = f(e, d, i[d], h);
                        for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), n[p] = Math.sqrt(n[p]);
                        if (!l) {
                            for (p = S.length; --p > -1;)
                                if (i[d])
                                    for (v = E[S[p]], y = v.length - 1, m = 0; y > m; m++) g = v[m + 1].da / n[m] + v[m].da / t[m], r[m] = (r[m] || 0) + g * g;
                            for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                        }
                        for (p = S.length, m = u ? 4 : 1; --p > -1;) d = S[p], v = E[d], a(v, s, u, l, i[d]), b && (v.splice(0, m), v.splice(v.length - m, m));
                        return E
                    },
                    c = function(e, t, n) {
                        t = t || "soft";
                        var r, i, o, u, a, f, l, c, h, p, d, v = {},
                            m = "cubic" === t ? 3 : 2,
                            g = "soft" === t,
                            y = [];
                        if (g && n && (e = [n].concat(e)), null == e || m + 1 > e.length) throw "invalid Bezier data";
                        for (h in e[0]) y.push(h);
                        for (f = y.length; --f > -1;) {
                            for (h = y[f], v[h] = a = [], p = 0, c = e.length, l = 0; c > l; l++) r = null == n ? e[l][h] : "string" == typeof(d = e[l][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && l > 1 && c - 1 > l && (a[p++] = (r + a[p - 2]) / 2), a[p++] = r;
                            for (c = p - m + 1, p = 0, l = 0; c > l; l += m) r = a[l], i = a[l + 1], o = a[l + 2], u = 2 === m ? 0 : a[l + 3], a[p++] = d = 3 === m ? new s(r, i, o, u) : new s(r, (2 * i + r) / 3, (2 * i + o) / 3, o);
                            a.length = p
                        }
                        return v
                    },
                    h = function(e, t, n) {
                        for (var r, i, s, o, u, a, f, l, c, h, p, d = 1 / n, v = e.length; --v > -1;)
                            for (h = e[v], s = h.a, o = h.d - s, u = h.c - s, a = h.b - s, r = i = 0, l = 1; n >= l; l++) f = d * l, c = 1 - f, r = i - (i = (f * f * o + 3 * c * (f * u + c * a)) * f), p = v * n + l - 1, t[p] = (t[p] || 0) + r * r
                    },
                    p = function(e, t) {
                        t = t >> 0 || 6;
                        var n, r, i, s, o = [],
                            u = [],
                            a = 0,
                            f = 0,
                            l = t - 1,
                            c = [],
                            p = [];
                        for (n in e) h(e[n], o, t);
                        for (i = o.length, r = 0; i > r; r++) a += Math.sqrt(o[r]), s = r % t, p[s] = a, s === l && (f += a, s = r / t >> 0, c[s] = p, u[s] = f, a = 0, p = []);
                        return {
                            length: f,
                            lengths: u,
                            segments: c
                        }
                    },
                    d = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(e, t, n) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var r, i, s, o, u, a = t.values || [],
                                f = {},
                                h = a[0],
                                d = t.autoRotate || n.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
                            ] : null;
                            for (r in h) this._props.push(r);
                            for (s = this._props.length; --s > -1;) r = this._props[s], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof e[r], f[r] = i ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), u || f[r] !== a[0][r] && (u = f);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? l(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, u) : c(a, t.type, f), this._segCount = this._beziers[r].length, this._timeRes) {
                                var v = p(this._beziers, this._timeRes);
                                this._length = v.length, this._lengths = v.lengths, this._segments = v.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;)
                                    for (o = 0; 3 > o; o++) r = d[s][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                            return !0
                        },
                        set: function(t) {
                            var n, r, i, s, o, u, a, f, l, c, h = this._segCount,
                                p = this._func,
                                d = this._target;
                            if (this._timeRes) {
                                if (l = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && h - 1 > i) {
                                    for (f = h - 1; f > i && t >= (this._l2 = l[++i]););
                                    this._l1 = l[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                                } else if (this._l1 > t && i > 0) {
                                    for (; i > 0 && (this._l1 = l[--i]) >= t;);
                                    0 === i && this._l1 > t ? this._l1 = 0 : i++, this._l2 = l[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (n = i, t -= this._l1, i = this._si, t > this._s2 && c.length - 1 > i) {
                                    for (f = c.length - 1; f > i && t >= (this._s2 = c[++i]););
                                    this._s1 = c[i - 1], this._si = i
                                } else if (this._s1 > t && i > 0) {
                                    for (; i > 0 && (this._s1 = c[--i]) >= t;);
                                    0 === i && this._s1 > t ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                                }
                                u = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else n = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, u = (t - n * (1 / h)) * h;
                            for (r = 1 - u, i = this._props.length; --i > -1;) s = this._props[i], o = this._beziers[s][n], a = (u * u * o.da + 3 * r * (u * o.ca + r * o.ba)) * u + o.a, this._round[s] && (a = a + (a > 0 ? .5 : -0.5) >> 0), p[s] ? d[s](a) : d[s] = a;
                            if (this._autoRotate) {
                                var v, m, g, y, b, w, E, S = this._autoRotate;
                                for (i = S.length; --i > -1;) s = S[i][2], w = S[i][3] || 0, E = S[i][4] === !0 ? 1 : e, o = this._beziers[S[i][0]], v = this._beziers[S[i][1]], o && v && (o = o[n], v = v[n], m = o.a + (o.b - o.a) * u, y = o.b + (o.c - o.b) * u, m += (y - m) * u, y += (o.c + (o.d - o.c) * u - y) * u, g = v.a + (v.b - v.a) * u, b = v.b + (v.c - v.b) * u, g += (b - g) * u, b += (v.c + (v.d - v.c) * u - b) * u, a = Math.atan2(b - g, y - m) * E + w, p[s] ? d[s](a) : d[s] = a)
                            }
                        }
                    }),
                    v = d.prototype;
                d.bezierThrough = l, d.cubicToQuadratic = u, d._autoCSS = !0, d.quadraticToCubic = function(e, t, n) {
                    return new s(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
                }, d._cssRegister = function() {
                    var e = window._gsDefine.globals.CSSPlugin;
                    if (e) {
                        var t = e._internals,
                            n = t._parseToProxy,
                            r = t._setPluginRatio,
                            i = t.CSSPropTween;
                        t._registerComplexSpecialProp("bezier", {
                            parser: function(e, t, s, o, u, a) {
                                t instanceof Array && (t = {
                                    values: t
                                }), a = new d;
                                var f, l, c, h = t.values,
                                    p = h.length - 1,
                                    v = [],
                                    m = {};
                                if (0 > p) return u;
                                for (f = 0; p >= f; f++) c = n(e, h[f], o, u, a, p !== f), v[f] = c.end;
                                for (l in t) m[l] = t[l];
                                return m.values = v, u = new i(e, "bezier", 0, 0, c.pt, 2), u.data = c, u.plugin = a, u.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (f = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", f, !1]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", f, !1]
                                ] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), a._onInitTween(c.proxy, m, o._tween), u
                            }
                        })
                    }
                }, v._roundProps = function(e, t) {
                    for (var n = this._overwriteProps, r = n.length; --r > -1;)(e[n[r]] || e.bezier || e.bezierThrough) && (this._round[n[r]] = t)
                }, v._kill = function(e) {
                    var t, n, r = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], n = r.length; --n > -1;) r[n] === t && r.splice(n, 1);
                    return this._super._kill.call(this, e)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var n, r, i, s, o = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    u = {},
                    a = o.prototype = new e("css");
                a.constructor = o, o.version = "1.11.0", o.API = 2, o.defaultTransformPerspective = 0, a = "px", o.suffixMap = {
                    top: a,
                    right: a,
                    bottom: a,
                    left: a,
                    width: a,
                    height: a,
                    fontSize: a,
                    padding: a,
                    margin: a,
                    perspective: a
                };
                var f, l, c, h, p, d, v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /[^\d\-\.]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/,
                    E = /opacity:([^;]*)/,
                    S = /alpha\(opacity *=.+?\)/i,
                    x = /^(rgb|hsl)/,
                    T = /([A-Z])/g,
                    N = /-([a-z])/gi,
                    C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function(e, t) {
                        return t.toUpperCase()
                    },
                    L = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    _ = Math.PI / 180,
                    D = 180 / Math.PI,
                    P = {},
                    H = document,
                    B = H.createElement("div"),
                    j = H.createElement("img"),
                    F = o._internals = {
                        _specialProps: u
                    },
                    I = navigator.userAgent,
                    q = function() {
                        var e, t = I.indexOf("Android"),
                            n = H.createElement("div");
                        return c = -1 !== I.indexOf("Safari") && -1 === I.indexOf("Chrome") && (-1 === t || Number(I.substr(t + 8, 1)) > 3), p = c && 6 > Number(I.substr(I.indexOf("Version/") + 8, 1)), h = -1 !== I.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I), d = parseFloat(RegExp.$1), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = n.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
                    }(),
                    R = function(e) {
                        return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    U = function(e) {
                        window.console && console.log(e)
                    },
                    z = "",
                    W = "",
                    X = function(e, t) {
                        t = t || B;
                        var n, r, i = t.style;
                        if (void 0 !== i[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
                        return r >= 0 ? (W = 3 === r ? "ms" : n[r], z = "-" + W.toLowerCase() + "-", W + e) : null
                    },
                    V = H.defaultView ? H.defaultView.getComputedStyle : function() {},
                    $ = o.getStyle = function(e, t, n, r, i) {
                        var s;
                        return q || "opacity" !== t ? (!r && e.style[t] ? s = e.style[t] : (n = n || V(e, null)) ? (e = n.getPropertyValue(t.replace(T, "-$1").toLowerCase()), s = e || n.length ? e : n[t]) : e.currentStyle && (s = e.currentStyle[t]), null == i || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : i) : R(e)
                    },
                    J = function(e, t, n, r, i) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var s, o = L.test(t),
                            u = e,
                            a = B.style,
                            f = 0 > n;
                        return f && (n = -n), "%" === r && -1 !== t.indexOf("border") ? s = n / 100 * (o ? e.clientWidth : e.clientHeight) : (a.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", "%" !== r && u.appendChild ? a[o ? "borderLeftWidth" : "borderTopWidth"] = n + r : (u = e.parentNode || H.body, a[o ? "width" : "height"] = n + r), u.appendChild(B), s = parseFloat(B[o ? "offsetWidth" : "offsetHeight"]), u.removeChild(B), 0 !== s || i || (s = J(e, t, n, r, !0))), f ? -s : s
                    },
                    K = function(e, t, n) {
                        if ("absolute" !== $(e, "position", n)) return 0;
                        var r = "left" === t ? "Left" : "Top",
                            i = $(e, "margin" + r, n);
                        return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(b, "")) || 0)
                    },
                    Q = function(e, t) {
                        var n, r, i = {};
                        if (t = t || V(e, null))
                            if (n = t.length)
                                for (; --n > -1;) i[t[n].replace(N, k)] = t.getPropertyValue(t[n]);
                            else
                                for (n in t) i[n] = t[n];
                        else if (t = e.currentStyle || e.style)
                            for (n in t) "string" == typeof n && void 0 !== i[n] && (i[n.replace(N, k)] = t[n]);
                        return q || (i.opacity = R(e)), r = xt(e, t, !1), i.rotation = r.rotation, i.skewX = r.skewX, i.scaleX = r.scaleX, i.scaleY = r.scaleY, i.x = r.x, i.y = r.y, St && (i.z = r.z, i.rotationX = r.rotationX, i.rotationY = r.rotationY, i.scaleZ = r.scaleZ), i.filters && delete i.filters, i
                    },
                    G = function(e, t, n, r, i) {
                        var s, o, u, a = {},
                            f = e.style;
                        for (o in n) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (s = n[o]) || i && i[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (a[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[o] || "" === t[o].replace(y, "") ? s : 0 : K(e, o), void 0 !== f[o] && (u = new ct(f, o, f[o], u)));
                        if (r)
                            for (o in r) "className" !== o && (a[o] = r[o]);
                        return {
                            difs: a,
                            firstMPT: u
                        }
                    },
                    Y = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    et = function(e, t, n) {
                        var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            i = Y[t],
                            s = i.length;
                        for (n = n || V(e, null); --s > -1;) r -= parseFloat($(e, "padding" + i[s], n, !0)) || 0, r -= parseFloat($(e, "border" + i[s] + "Width", n, !0)) || 0;
                        return r
                    },
                    tt = function(e, t) {
                        (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                        var n = e.split(" "),
                            r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                            i = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                        return null == i ? i = "0" : "center" === i && (i = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== i.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === i.charAt(1), t.ox = parseFloat(r.replace(y, "")), t.oy = parseFloat(i.replace(y, ""))), r + " " + i + (n.length > 2 ? " " + n[2] : "")
                    },
                    nt = function(e, t) {
                        return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                    },
                    rt = function(e, t) {
                        return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
                    },
                    it = function(e, t, n, r) {
                        var i, s, o, u, a = 1e-6;
                        return null == e ? u = t : "number" == typeof e ? u = e : (i = 360, s = e.split("_"), o = Number(s[0].replace(y, "")) * (-1 === e.indexOf("rad") ? 1 : D) - ("=" === e.charAt(1) ? 0 : t), s.length && (r && (r[n] = t + o), -1 !== e.indexOf("short") && (o %= i, o !== o % (i / 2) && (o = 0 > o ? o + i : o - i)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * i) % i - (0 | o / i) * i : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * i) % i - (0 | o / i) * i)), u = t + o), a > u && u > -a && (u = 0), u
                    },
                    st = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ot = function(e, t, n) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
                    },
                    ut = function(e) {
                        var t, n, r, i, s, o;
                        return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), st[e] ? st[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + t + t + n + n + r + r), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(v), i = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, o = Number(e[2]) / 100, n = .5 >= o ? o * (s + 1) : o + s - o * s, t = 2 * o - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = ot(i + 1 / 3, t, n), e[1] = ot(i, t, n), e[2] = ot(i - 1 / 3, t, n), e) : (e = e.match(v) || st.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : st.black
                    },
                    at = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (a in st) at += "|" + a + "\\b";
                at = RegExp(at + ")", "gi");
                var ft = function(e, t, n, r) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var i, s = t ? (e.match(at) || [""])[0] : "",
                            o = e.split(s).join("").match(g) || [],
                            u = e.substr(0, e.indexOf(o[0])),
                            a = ")" === e.charAt(e.length - 1) ? ")" : "",
                            f = -1 !== e.indexOf(" ") ? " " : ",",
                            l = o.length,
                            c = l > 0 ? o[0].replace(v, "") : "";
                        return l ? i = t ? function(e) {
                            var t, h, p, d;
                            if ("number" == typeof e) e += c;
                            else if (r && M.test(e)) {
                                for (d = e.replace(M, "|").split("|"), p = 0; d.length > p; p++) d[p] = i(d[p]);
                                return d.join(",")
                            }
                            if (t = (e.match(at) || [s])[0], h = e.split(t).join("").match(g) || [], p = h.length, l > p--)
                                for (; l > ++p;) h[p] = n ? h[0 | (p - 1) / 2] : o[p];
                            return u + h.join(f) + f + t + a + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, s, h;
                            if ("number" == typeof e) e += c;
                            else if (r && M.test(e)) {
                                for (s = e.replace(M, "|").split("|"), h = 0; s.length > h; h++) s[h] = i(s[h]);
                                return s.join(",")
                            }
                            if (t = e.match(g) || [], h = t.length, l > h--)
                                for (; l > ++h;) t[h] = n ? t[0 | (h - 1) / 2] : o[h];
                            return u + t.join(f) + a
                        } : function(e) {
                            return e
                        }
                    },
                    lt = function(e) {
                        return e = e.split(","),
                            function(t, n, r, i, s, o, u) {
                                var a, f = (n + "").split(" ");
                                for (u = {}, a = 0; 4 > a; a++) u[e[a]] = f[a] = f[a] || f[(a - 1) / 2 >> 0];
                                return i.parse(t, u, s, o)
                            }
                    },
                    ct = (F._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, n, r, i, s = this.data, o = s.proxy, u = s.firstMPT, a = 1e-6; u;) t = o[u.v], u.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : a > t && t > -a && (t = 0), u.t[u.p] = t, u = u._next;
                        if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === e)
                            for (u = s.firstMPT; u;) {
                                if (n = u.t, n.type) {
                                    if (1 === n.type) {
                                        for (i = n.xs0 + n.s + n.xs1, r = 1; n.l > r; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                        n.e = i
                                    }
                                } else n.e = n.s + n.xs0;
                                u = u._next
                            }
                    }, function(e, t, n, r, i) {
                        this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
                    }),
                    ht = (F._parseToProxy = function(e, t, n, r, i, s) {
                        var o, u, a, f, l, c = r,
                            h = {},
                            p = {},
                            d = n._transform,
                            v = P;
                        for (n._transform = null, P = t, r = l = n.parse(e, t, r, i), P = v, s && (n._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                            if (1 >= r.type && (u = r.p, p[u] = r.s + r.c, h[u] = r.s, s || (f = new ct(r, "s", u, f, r.r), r.c = 0), 1 === r.type))
                                for (o = r.l; --o > 0;) a = "xn" + o, u = r.p + "_" + a, p[u] = r.data[a], h[u] = r[a], s || (f = new ct(r, a, u, f, r.rxp[a]));
                            r = r._next
                        }
                        return {
                            proxy: h,
                            end: p,
                            firstMPT: f,
                            pt: l
                        }
                    }, F.CSSPropTween = function(e, t, r, i, o, u, a, f, l, c, h) {
                        this.t = e, this.p = t, this.s = r, this.c = i, this.n = a || t, e instanceof ht || s.push(this.n), this.r = f, this.type = u || 0, l && (this.pr = l, n = !0), this.b = void 0 === c ? r : c, this.e = void 0 === h ? r + i : h, o && (this._next = o, o._prev = this)
                    }),
                    pt = o.parseComplex = function(e, t, n, r, i, s, o, u, a, l) {
                        n = n || s || "", o = new ht(e, t, 0, 0, o, l ? 2 : 1, null, !1, u, n, r), r += "";
                        var c, h, p, d, g, y, b, w, E, S, T, N, C = n.split(", ").join(",").split(" "),
                            k = r.split(", ").join(",").split(" "),
                            L = C.length,
                            A = f !== !1;
                        for ((-1 !== r.indexOf(",") || -1 !== n.indexOf(",")) && (C = C.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), L = C.length), L !== k.length && (C = (s || "").split(" "), L = C.length), o.plugin = a, o.setRatio = l, c = 0; L > c; c++)
                            if (d = C[c], g = k[c], w = parseFloat(d), w || 0 === w) o.appendXtra("", w, nt(g, w), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0);
                            else if (i && ("#" === d.charAt(0) || st[d] || x.test(d))) N = "," === g.charAt(g.length - 1) ? ")," : ")", d = ut(d), g = ut(g), E = d.length + g.length > 6, E && !q && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[c]).join("transparent")) : (q || (E = !1), o.appendXtra(E ? "rgba(" : "rgb(", d[0], g[0] - d[0], ",", !0, !0).appendXtra("", d[1], g[1] - d[1], ",", !0).appendXtra("", d[2], g[2] - d[2], E ? "," : N, !0), E && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > g.length ? 1 : g[3]) - d, N, !1)));
                        else if (y = d.match(v)) {
                            if (b = g.match(m), !b || b.length !== y.length) return o;
                            for (p = 0, h = 0; y.length > h; h++) T = y[h], S = d.indexOf(T, p), o.appendXtra(d.substr(p, S - p), Number(T), nt(b[h], T), "", A && "px" === d.substr(S + T.length, 2), 0 === h), p = S + T.length;
                            o["xs" + o.l] += d.substr(p)
                        } else o["xs" + o.l] += o.l ? " " + d : d;
                        if (-1 !== r.indexOf("=") && o.data) {
                            for (N = o.xs0 + o.data.s, c = 1; o.l > c; c++) N += o["xs" + c] + o.data["xn" + c];
                            o.e = N + o["xs" + c]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    dt = 9;
                for (a = ht.prototype, a.l = a.pr = 0; --dt > 0;) a["xn" + dt] = 0, a["xs" + dt] = "";
                a.xs0 = "", a._next = a._prev = a.xfirst = a.data = a.plugin = a.setRatio = a.rxp = null, a.appendXtra = function(e, t, n, r, i, s) {
                    var o = this,
                        u = o.l;
                    return o["xs" + u] += s && u ? " " + e : e || "", n || 0 === u || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", u > 0 ? (o.data["xn" + u] = t + n, o.rxp["xn" + u] = i, o["xn" + u] = t, o.plugin || (o.xfirst = new ht(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: t + n
                    }, o.rxp = {}, o.s = t, o.c = n, o.r = i, o)) : (o["xs" + u] += t + (r || ""), o)
                };
                var vt = function(e, t) {
                        t = t || {}, this.p = t.prefix ? X(e) || e : e, u[e] = u[this.p] = this, this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    mt = F._registerComplexSpecialProp = function(e, t, n) {
                        "object" != typeof t && (t = {
                            parser: n
                        });
                        var r, i, s = e.split(","),
                            o = t.defaultValue;
                        for (n = n || [o], r = 0; s.length > r; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = n[r] || o, i = new vt(s[r], t)
                    },
                    gt = function(e) {
                        if (!u[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            mt(e, {
                                parser: function(e, n, r, i, s, o, a) {
                                    var f = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                                    return f ? (f._cssRegister(), u[r].parse(e, n, r, i, s, o, a)) : (U("Error: " + t + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                a = vt.prototype, a.parseComplex = function(e, t, n, r, i, s) {
                    var o, u, a, f, l, c, h = this.keyword;
                    if (this.multi && (M.test(n) || M.test(t) ? (u = t.replace(M, "|").split("|"), a = n.replace(M, "|").split("|")) : h && (u = [t], a = [n])), a) {
                        for (f = a.length > u.length ? a.length : u.length, o = 0; f > o; o++) t = u[o] = u[o] || this.dflt, n = a[o] = a[o] || this.dflt, h && (l = t.indexOf(h), c = n.indexOf(h), l !== c && (n = -1 === c ? a : u, n[o] += " " + h));
                        t = u.join(", "), n = a.join(", ")
                    }
                    return pt(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
                }, a.parse = function(e, t, n, r, s, o) {
                    return this.parseComplex(e.style, this.format($(e, this.p, i, !1, this.dflt)), this.format(t), s, o)
                }, o.registerSpecialProp = function(e, t, n) {
                    mt(e, {
                        parser: function(e, r, i, s, o, u) {
                            var a = new ht(e, i, 0, 0, o, 2, i, !1, n);
                            return a.plugin = u, a.setRatio = t(e, r, s._tween, i), a
                        },
                        priority: n
                    })
                };
                var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    bt = X("transform"),
                    wt = z + "transform",
                    Et = X("transformOrigin"),
                    St = null !== X("perspective"),
                    xt = function(e, t, n, r) {
                        if (e._gsTransform && n && !r) return e._gsTransform;
                        var i, s, u, a, f, l, c, h, p, d, v, m, g, y = n ? e._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            b = 0 > y.scaleX,
                            w = 2e-5,
                            E = 1e5,
                            S = 179.99,
                            x = S * _,
                            T = St ? parseFloat($(e, Et, t, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                        for (bt ? i = $(e, wt, t, !0) : e.currentStyle && (i = e.currentStyle.filter.match(A), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), s = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = s.length; --u > -1;) a = Number(s[u]), s[u] = (f = a - (a |= 0)) ? (0 | f * E + (0 > f ? -0.5 : .5)) / E + a : a;
                        if (16 === s.length) {
                            var N = s[8],
                                C = s[9],
                                k = s[10],
                                L = s[12],
                                O = s[13],
                                M = s[14];
                            if (y.zOrigin && (M = -y.zOrigin, L = N * M - s[12], O = C * M - s[13], M = k * M + y.zOrigin - s[14]), !n || r || null == y.rotationX) {
                                var P, H, B, j, F, I, q, R = s[0],
                                    U = s[1],
                                    z = s[2],
                                    W = s[3],
                                    X = s[4],
                                    V = s[5],
                                    J = s[6],
                                    K = s[7],
                                    Q = s[11],
                                    G = Math.atan2(J, k),
                                    Y = -x > G || G > x;
                                y.rotationX = G * D, G && (j = Math.cos(-G), F = Math.sin(-G), P = X * j + N * F, H = V * j + C * F, B = J * j + k * F, N = X * -F + N * j, C = V * -F + C * j, k = J * -F + k * j, Q = K * -F + Q * j, X = P, V = H, J = B), G = Math.atan2(N, R), y.rotationY = G * D, G && (I = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), P = R * j - N * F, H = U * j - C * F, B = z * j - k * F, C = U * F + C * j, k = z * F + k * j, Q = W * F + Q * j, R = P, U = H, z = B), G = Math.atan2(U, V), y.rotation = G * D, G && (q = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), R = R * j + X * F, H = U * j + V * F, V = U * -F + V * j, J = z * -F + J * j, U = H), q && Y ? y.rotation = y.rotationX = 0 : q && I ? y.rotation = y.rotationY = 0 : I && Y && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(R * R + U * U) * E + .5) / E, y.scaleY = (0 | Math.sqrt(V * V + C * C) * E + .5) / E, y.scaleZ = (0 | Math.sqrt(J * J + k * k) * E + .5) / E, y.skewX = 0, y.perspective = Q ? 1 / (0 > Q ? -Q : Q) : 0, y.x = L, y.y = O, y.z = M
                            }
                        } else if (!(St && !r && s.length && y.x === s[4] && y.y === s[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === $(e, "display", t))) {
                            var Z = s.length >= 6,
                                et = Z ? s[0] : 1,
                                tt = s[1] || 0,
                                nt = s[2] || 0,
                                rt = Z ? s[3] : 1;
                            y.x = s[4] || 0, y.y = s[5] || 0, l = Math.sqrt(et * et + tt * tt), c = Math.sqrt(rt * rt + nt * nt), h = et || tt ? Math.atan2(tt, et) * D : y.rotation || 0, p = nt || rt ? Math.atan2(nt, rt) * D + h : y.skewX || 0, d = l - Math.abs(y.scaleX || 0), v = c - Math.abs(y.scaleY || 0), Math.abs(p) > 90 && 270 > Math.abs(p) && (b ? (l *= -1, p += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), m = (h - y.rotation) % 180, g = (p - y.skewX) % 180, (void 0 === y.skewX || d > w || -w > d || v > w || -w > v || m > -S && S > m && !1 | m * E || g > -S && S > g && !1 | g * E) && (y.scaleX = l, y.scaleY = c, y.rotation = h, y.skewX = p), St && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(o.defaultTransformPerspective) || 0, y.scaleZ = 1)
                        }
                        y.zOrigin = T;
                        for (u in y) w > y[u] && y[u] > -w && (y[u] = 0);
                        return n && (e._gsTransform = y), y
                    },
                    Tt = function(e) {
                        var t, n, r = this.data,
                            i = -r.rotation * _,
                            s = i + r.skewX * _,
                            o = 1e5,
                            u = (0 | Math.cos(i) * r.scaleX * o) / o,
                            a = (0 | Math.sin(i) * r.scaleX * o) / o,
                            f = (0 | Math.sin(s) * -r.scaleY * o) / o,
                            l = (0 | Math.cos(s) * r.scaleY * o) / o,
                            c = this.t.style,
                            h = this.t.currentStyle;
                        if (h) {
                            n = a, a = -f, f = -n, t = h.filter, c.filter = "";
                            var p, v, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                y = "absolute" !== h.position,
                                E = "progid:DXImageTransform.Microsoft.Matrix(M11=" + u + ", M12=" + a + ", M21=" + f + ", M22=" + l,
                                S = r.x,
                                x = r.y;
                            if (null != r.ox && (p = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, v = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, S += p - (p * u + v * a), x += v - (p * f + v * l)), y ? (p = m / 2, v = g / 2, E += ", Dx=" + (p - (p * u + v * a) + S) + ", Dy=" + (v - (p * f + v * l) + x) + ")") : E += ", sizingMethod='auto expand')", c.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(O, E) : E + " " + t, (0 === e || 1 === e) && 1 === u && 0 === a && 0 === f && 1 === l && (y && -1 === E.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                                var T, N, C, k = 8 > d ? 1 : -1;
                                for (p = r.ieOffsetX || 0, v = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > u ? -u : u) * m + (0 > a ? -a : a) * g)) / 2 + S), r.ieOffsetY = Math.round((g - ((0 > l ? -l : l) * g + (0 > f ? -f : f) * m)) / 2 + x), dt = 0; 4 > dt; dt++) N = Z[dt], T = h[N], n = -1 !== T.indexOf("px") ? parseFloat(T) : J(this.t, N, parseFloat(T), T.replace(b, "")) || 0, C = n !== r[N] ? 2 > dt ? -r.ieOffsetX : -r.ieOffsetY : 2 > dt ? p - r.ieOffsetX : v - r.ieOffsetY, c[N] = (r[N] = Math.round(n - C * (0 === dt || 2 === dt ? 1 : k))) + "px"
                            }
                        }
                    },
                    Nt = function() {
                        var e, t, n, r, i, s, o, u, a, f, l, c, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k = this.data,
                            L = this.t.style,
                            A = k.rotation * _,
                            O = k.scaleX,
                            M = k.scaleY,
                            D = k.scaleZ,
                            P = k.perspective;
                        if (h && (T = L.top ? "top" : L.bottom ? "bottom" : parseFloat($(this.t, "top", null, !1)) ? "bottom" : "top", w = $(this.t, T, null, !1), N = parseFloat(w) || 0, C = w.substr((N + "").length) || "px", k._ffFix = !k._ffFix, L[T] = (k._ffFix ? N + .05 : N - .05) + C), A || k.skewX) y = Math.cos(A), b = Math.sin(A), e = y, i = b, k.skewX && (A -= k.skewX * _, y = Math.cos(A), b = Math.sin(A)), t = -b, s = y;
                        else {
                            if (!(k.rotationY || k.rotationX || 1 !== D || P)) return L[bt] = "translate3d(" + k.x + "px," + k.y + "px," + k.z + "px)" + (1 !== O || 1 !== M ? " scale(" + O + "," + M + ")" : ""), void 0;
                            e = s = 1, t = i = 0
                        }
                        l = 1, n = r = o = u = a = f = c = p = d = 0, v = P ? -1 / P : 0, m = k.zOrigin, g = 1e5, A = k.rotationY * _, A && (y = Math.cos(A), b = Math.sin(A), a = l * -b, p = v * -b, n = e * b, o = i * b, l *= y, v *= y, e *= y, i *= y), A = k.rotationX * _, A && (y = Math.cos(A), b = Math.sin(A), w = t * y + n * b, E = s * y + o * b, S = f * y + l * b, x = d * y + v * b, n = t * -b + n * y, o = s * -b + o * y, l = f * -b + l * y, v = d * -b + v * y, t = w, s = E, f = S, d = x), 1 !== D && (n *= D, o *= D, l *= D, v *= D), 1 !== M && (t *= M, s *= M, f *= M, d *= M), 1 !== O && (e *= O, i *= O, a *= O, p *= O), m && (c -= m, r = n * c, u = o * c, c = l * c + m), r = (w = (r += k.x) - (r |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + r : r, u = (w = (u += k.y) - (u |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + u : u, c = (w = (c += k.z) - (c |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + c : c, L[bt] = "matrix3d(" + [(0 | e * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | p * g) / g, (0 | t * g) / g, (0 | s * g) / g, (0 | f * g) / g, (0 | d * g) / g, (0 | n * g) / g, (0 | o * g) / g, (0 | l * g) / g, (0 | v * g) / g, r, u, c, P ? 1 + -c / P : 1].join(",") + ")"
                    },
                    Ct = function() {
                        var e, t, n, r, i, s, o, u, a, f = this.data,
                            l = this.t,
                            c = l.style;
                        h && (e = c.top ? "top" : c.bottom ? "bottom" : parseFloat($(l, "top", null, !1)) ? "bottom" : "top", t = $(l, e, null, !1), n = parseFloat(t) || 0, r = t.substr((n + "").length) || "px", f._ffFix = !f._ffFix, c[e] = (f._ffFix ? n + .05 : n - .05) + r), f.rotation || f.skewX ? (i = f.rotation * _, s = i - f.skewX * _, o = 1e5, u = f.scaleX * o, a = f.scaleY * o, c[bt] = "matrix(" + (0 | Math.cos(i) * u) / o + "," + (0 | Math.sin(i) * u) / o + "," + (0 | Math.sin(s) * -a) / o + "," + (0 | Math.cos(s) * a) / o + "," + f.x + "," + f.y + ")") : c[bt] = "matrix(" + f.scaleX + ",0,0," + f.scaleY + "," + f.x + "," + f.y + ")"
                    };
                mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function(e, t, n, r, s, o, u) {
                        if (r._transform) return s;
                        var a, f, l, c, h, p, d, v = r._transform = xt(e, i, !0, u.parseTransform),
                            m = e.style,
                            g = 1e-6,
                            y = yt.length,
                            b = u,
                            w = {};
                        if ("string" == typeof b.transform && bt) l = m.cssText, m[bt] = b.transform, m.display = "block", a = xt(e, null, !1), m.cssText = l;
                        else if ("object" == typeof b) {
                            if (a = {
                                    scaleX: rt(null != b.scaleX ? b.scaleX : b.scale, v.scaleX),
                                    scaleY: rt(null != b.scaleY ? b.scaleY : b.scale, v.scaleY),
                                    scaleZ: rt(null != b.scaleZ ? b.scaleZ : b.scale, v.scaleZ),
                                    x: rt(b.x, v.x),
                                    y: rt(b.y, v.y),
                                    z: rt(b.z, v.z),
                                    perspective: rt(b.transformPerspective, v.perspective)
                                }, d = b.directionalRotation, null != d)
                                if ("object" == typeof d)
                                    for (l in d) b[l] = d[l];
                                else b.rotation = d;
                            a.rotation = it("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : v.rotation, v.rotation, "rotation", w), St && (a.rotationX = it("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : v.rotationX || 0, v.rotationX, "rotationX", w), a.rotationY = it("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : v.rotationY || 0, v.rotationY, "rotationY", w)), a.skewX = null == b.skewX ? v.skewX : it(b.skewX, v.skewX), a.skewY = null == b.skewY ? v.skewY : it(b.skewY, v.skewY), (f = a.skewY - v.skewY) && (a.skewX += f, a.rotation += f)
                        }
                        for (null != b.force3D && (v.force3D = b.force3D, p = !0), h = v.force3D || v.z || v.rotationX || v.rotationY || a.z || a.rotationX || a.rotationY || a.perspective, h || null == b.scale || (a.scaleZ = 1); --y > -1;) n = yt[y], c = a[n] - v[n], (c > g || -g > c || null != P[n]) && (p = !0, s = new ht(v, n, v[n], c, s), n in w && (s.e = w[n]), s.xs0 = 0, s.plugin = o, r._overwriteProps.push(s.n));
                        return c = b.transformOrigin, (c || St && h && v.zOrigin) && (bt ? (p = !0, n = Et, c = (c || $(e, n, i, !1, "50% 50%")) + "", s = new ht(m, n, 0, 0, s, -1, "transformOrigin"), s.b = m[n], s.plugin = o, St ? (l = v.zOrigin, c = c.split(" "), v.zOrigin = (c.length > 2 && (0 === l || "0px" !== c[2]) ? parseFloat(c[2]) : l) || 0, s.xs0 = s.e = m[n] = c[0] + " " + (c[1] || "50%") + " 0px", s = new ht(v, "zOrigin", 0, 0, s, -1, s.n), s.b = l, s.xs0 = s.e = v.zOrigin) : s.xs0 = s.e = m[n] = c) : tt(c + "", v)), p && (r._transformType = h || 3 === this._transformType ? 3 : 2), s
                    },
                    prefix: !0
                }), mt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), mt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, n, s, o) {
                        t = this.format(t);
                        var u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            T = e.style;
                        for (v = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), u = t.split(" "), a = 0; x.length > a; a++) this.p.indexOf("border") && (x[a] = X(x[a])), c = l = $(e, x[a], i, !1, "0px"), -1 !== c.indexOf(" ") && (l = c.split(" "), c = l[0], l = l[1]), h = f = u[a], p = parseFloat(c), y = c.substr((p + "").length), b = "=" === h.charAt(1), b ? (d = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), d *= parseFloat(h), g = h.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(h), g = h.substr((d + "").length)), "" === g && (g = r[n] || y), g !== y && (w = J(e, "borderLeft", p, y), E = J(e, "borderTop", p, y), "%" === g ? (c = 100 * (w / v) + "%", l = 100 * (E / m) + "%") : "em" === g ? (S = J(e, "borderLeft", 1, "em"), c = w / S + "em", l = E / S + "em") : (c = w + "px", l = E + "px"), b && (h = parseFloat(c) + d + g, f = parseFloat(l) + d + g)), o = pt(T, x[a], c + " " + l, h + " " + f, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: ft("0px 0px 0px 0px", !1, !0)
                }), mt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, n, r, s, o) {
                        var u, a, f, l, c, h, p = "background-position",
                            v = i || V(e, null),
                            m = this.format((v ? d ? v.getPropertyValue(p + "-x") + " " + v.getPropertyValue(p + "-y") : v.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(t);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (h = $(e, "backgroundImage").replace(C, ""), h && "none" !== h)) {
                            for (u = m.split(" "), a = g.split(" "), j.setAttribute("src", h), f = 2; --f > -1;) m = u[f], l = -1 !== m.indexOf("%"), l !== (-1 !== a[f].indexOf("%")) && (c = 0 === f ? e.offsetWidth - j.width : e.offsetHeight - j.height, u[f] = l ? parseFloat(m) / 100 * c + "px" : 100 * (parseFloat(m) / c) + "%");
                            m = u.join(" ")
                        }
                        return this.parseComplex(e.style, m, g, s, o)
                    },
                    formatter: tt
                }), mt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: tt
                }), mt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), mt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), mt("transformStyle", {
                    prefix: !0
                }), mt("backfaceVisibility", {
                    prefix: !0
                }), mt("userSelect", {
                    prefix: !0
                }), mt("margin", {
                    parser: lt("marginTop,marginRight,marginBottom,marginLeft")
                }), mt("padding", {
                    parser: lt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), mt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, n, r, s, o) {
                        var u, a, f;
                        return 9 > d ? (a = e.currentStyle, f = 8 > d ? " " : ",", u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")", t = this.format(t).split(",").join(f)) : (u = this.format($(e, this.p, i, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, u, t, s, o)
                    }
                }), mt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), mt("autoRound,strictUnits", {
                    parser: function(e, t, n, r, i) {
                        return i
                    }
                }), mt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, n, r, s, o) {
                        return this.parseComplex(e.style, this.format($(e, "borderTopWidth", i, !1, "0px") + " " + $(e, "borderTopStyle", i, !1, "solid") + " " + $(e, "borderTopColor", i, !1, "#000")), this.format(t), s, o)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(at) || ["#000"])[0]
                    }
                }), mt("float,cssFloat,styleFloat", {
                    parser: function(e, t, n, r, i) {
                        var s = e.style,
                            o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new ht(s, o, 0, 0, i, -1, n, !1, 0, s[o], t)
                    }
                });
                var kt = function(e) {
                    var t, n = this.t,
                        r = n.filter || $(this.data, "filter"),
                        i = 0 | this.s + this.c * e;
                    100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), t = !$(this.data, "filter")) : (n.filter = r.replace(S, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("opacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(w, "opacity=" + i))
                };
                mt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, n, r, s, o) {
                        var u = parseFloat($(e, "opacity", i, !1, "1")),
                            a = e.style,
                            f = "autoAlpha" === n;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + u), f && 1 === u && "hidden" === $(e, "visibility", i) && 0 !== t && (u = 0), q ? s = new ht(a, "opacity", u, t - u, s) : (s = new ht(a, "opacity", 100 * u, 100 * (t - u), s), s.xn1 = f ? 1 : 0, a.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = o, s.setRatio = kt), f && (s = new ht(a, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== u ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(n)), s
                    }
                });
                var Lt = function(e, t) {
                        t && (e.removeProperty ? e.removeProperty(t.replace(T, "-$1").toLowerCase()) : e.removeAttribute(t))
                    },
                    At = function(e) {
                        if (
                            this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.className = 0 === e ? this.b : this.e;
                            for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Lt(n, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                mt("className", {
                    parser: function(e, t, r, s, o, u, a) {
                        var f, l, c, h, p, d = e.className,
                            v = e.style.cssText;
                        if (o = s._classNamePT = new ht(e, r, 0, 0, o, 2), o.setRatio = At, o.pr = -11, n = !0, o.b = d, l = Q(e, i), c = e._gsClassPT) {
                            for (h = {}, p = c.data; p;) h[p.p] = 1, p = p._next;
                            c.setRatio(1)
                        }
                        return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : d.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), s._tween._duration && (e.className = o.e, f = G(e, l, Q(e), a, h), e.className = d, o.data = f.firstMPT, e.style.cssText = v, o = o.xfirst = s.parse(e, f.difs, o, u)), o
                    }
                });
                var Ot = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, n, r, i, s = this.t.style,
                            o = u.transform.parse;
                        if ("all" === this.e) s.cssText = "", i = !0;
                        else
                            for (t = this.e.split(","), r = t.length; --r > -1;) n = t[r], u[n] && (u[n].parse === o ? i = !0 : n = "transformOrigin" === n ? Et : u[n].p), Lt(s, n);
                        i && (Lt(s, bt), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (mt("clearProps", {
                        parser: function(e, t, r, i, s) {
                            return s = new ht(e, r, 0, 0, s, 2), s.setRatio = Ot, s.e = t, s.pr = -10, s.data = i._tween, n = !0, s
                        }
                    }), a = "bezier,throwProps,physicsProps,physics2D".split(","), dt = a.length; dt--;) gt(a[dt]);
                a = o.prototype, a._firstPT = null, a._onInitTween = function(e, t, u) {
                    if (!e.nodeType) return !1;
                    this._target = e, this._tween = u, this._vars = t, f = t.autoRound, n = !1, r = t.suffixMap || o.suffixMap, i = V(e, ""), s = this._overwriteProps;
                    var a, h, d, v, m, g, y, b, w, S = e.style;
                    if (l && "" === S.zIndex && (a = $(e, "zIndex", i), ("auto" === a || "" === a) && (S.zIndex = 0)), "string" == typeof t && (v = S.cssText, a = Q(e, i), S.cssText = v + ";" + t, a = G(e, a, Q(e)).difs, !q && E.test(t) && (a.opacity = parseFloat(RegExp.$1)), t = a, S.cssText = v), this._firstPT = h = this.parse(e, t, null), this._transformType) {
                        for (w = 3 === this._transformType, bt ? c && (l = !0, "" === S.zIndex && (y = $(e, "zIndex", i), ("auto" === y || "" === y) && (S.zIndex = 0)), p && (S.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : S.zoom = 1, d = h; d && d._next;) d = d._next;
                        b = new ht(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, d), b.setRatio = w && St ? Nt : bt ? Ct : Tt, b.data = this._transform || xt(e, i, !0), s.pop()
                    }
                    if (n) {
                        for (; h;) {
                            for (g = h._next, d = v; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : m) ? h._prev._next = h: v = h, (h._next = d) ? d._prev = h : m = h, h = g
                        }
                        this._firstPT = v
                    }
                    return !0
                }, a.parse = function(e, t, n, s) {
                    var o, a, l, c, h, p, d, v, m, g, y = e.style;
                    for (o in t) p = t[o], a = u[o], a ? n = a.parse(e, p, o, this, n, s, t) : (h = $(e, o, i) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && x.test(p) ? (m || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = pt(y, o, h, p, !0, "transparent", n, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (l = parseFloat(h), d = l || 0 === l ? h.substr((l + "").length) : "", ("" === h || "auto" === h) && ("width" === o || "height" === o ? (l = et(e, o, i), d = "px") : "left" === o || "top" === o ? (l = K(e, o, i), d = "px") : (l = "opacity" !== o ? 0 : 1, d = "")), g = m && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), v = p.replace(b, "")) : (c = parseFloat(p), v = m ? p.substr((c + "").length) || "" : ""), "" === v && (v = r[o] || d), p = c || 0 === c ? (g ? c + l : c) + v : t[o], d !== v && "" !== v && (c || 0 === c) && (l || 0 === l) && (l = J(e, o, l, d), "%" === v ? (l /= J(e, o, 100, "%") / 100, l > 100 && (l = 100), t.strictUnits !== !0 && (h = l + "%")) : "em" === v ? l /= J(e, o, 1, "em") : (c = J(e, o, c, v), v = "px"), g && (c || 0 === c) && (p = c + l + v)), g && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== y[o] && (p || "NaN" != p + "" && null != p) ? (n = new ht(y, o, c || l || 0, 0, n, -1, o, !1, 0, h, p), n.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : h) : U("invalid " + o + " tween value: " + t[o]) : (n = new ht(y, o, l, c - l, n, 0, o, f !== !1 && ("px" === v || "zIndex" === o), 0, h, p), n.xs0 = v)) : n = pt(y, o, h, p, !0, null, n, 0, s)), s && n && !n.plugin && (n.plugin = s);
                    return n
                }, a.setRatio = function(e) {
                    var t, n, r, i = this._firstPT,
                        s = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001)
                            for (; i;) {
                                if (t = i.c * e + i.s, i.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : s > t && t > -s && (t = 0), i.type)
                                    if (1 === i.type)
                                        if (r = i.l, 2 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                                        else if (3 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                                else if (4 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                                else if (5 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                                else {
                                    for (n = i.xs0 + t + i.xs1, r = 1; i.l > r; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                    i.t[i.p] = n
                                } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                                else i.t[i.p] = t + i.xs0;
                                i = i._next
                            } else
                                for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
                        else
                            for (; i;) 2 !== i.type ? i.t[i.p] = i.e : i.setRatio(e), i = i._next
                }, a._enableTransforms = function(e) {
                    this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || xt(this._target, i, !0)
                }, a._linkCSSP = function(e, t, n, r) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
                }, a._kill = function(t) {
                    var n, r, i, s = t;
                    if (t.autoAlpha || t.alpha) {
                        s = {};
                        for (r in t) s[r] = t[r];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return t.className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
                };
                var Mt = function(e, t, n) {
                    var r, i, s, o;
                    if (e.slice)
                        for (i = e.length; --i > -1;) Mt(e[i], t, n);
                    else
                        for (r = e.childNodes, i = r.length; --i > -1;) s = r[i], o = s.type, s.style && (t.push(Q(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Mt(s, t, n)
                };
                return o.cascadeTo = function(e, n, r) {
                    var i, s, o, u = t.to(e, n, r),
                        a = [u],
                        f = [],
                        l = [],
                        c = [],
                        h = t._internals.reservedProps;
                    for (e = u._targets || u.target, Mt(e, f, c), u.render(n, !0), Mt(e, l), u.render(0, !0), u._enabled(!0), i = c.length; --i > -1;)
                        if (s = G(c[i], f[i], l[i]), s.firstMPT) {
                            s = s.difs;
                            for (o in r) h[o] && (s[o] = r[o]);
                            a.push(t.to(c[i], n, s))
                        }
                    return a
                }, e.activate([o]), o
            }, !0),
            function() {
                var e = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(e, t, n) {
                            return this._tween = n, !0
                        }
                    }),
                    t = e.prototype;
                t._onInitAllProps = function() {
                    for (var e, t, n, r = this._tween, i = r.vars.roundProps instanceof Array ? r.vars.roundProps : r.vars.roundProps.split(","), s = i.length, o = {}, u = r._propLookup.roundProps; --s > -1;) o[i[s]] = 1;
                    for (s = i.length; --s > -1;)
                        for (e = i[s], t = r._firstPT; t;) n = t._next, t.pg ? t.t._roundProps(o, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), n && (n._prev = t._prev), t._prev ? t._prev._next = n : r._firstPT === t && (r._firstPT = n), t._next = t._prev = null, r._propLookup[e] = u), t = n;
                    return !1
                }, t._add = function(e, t, n, r) {
                    this._addTween(e, t, n, n + r, t, !0), this._overwriteProps.push(t)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(e, t) {
                    var n;
                    if ("function" != typeof e.setAttribute) return !1;
                    this._target = e, this._proxy = {};
                    for (n in t) this._addTween(this._proxy, n, parseFloat(e.getAttribute(n)), t[n], n) && this._overwriteProps.push(n);
                    return !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    for (var t, n = this._overwriteProps, r = n.length; --r > -1;) t = n[r], this._target.setAttribute(t, this._proxy[t] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(e, t) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var n, r, i, s, o, u, a = t.useRadians === !0 ? 2 * Math.PI : 360,
                        f = 1e-6;
                    for (n in t) "useRadians" !== n && (u = (t[n] + "").split("_"), r = u[0], i = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? i + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, o = s - i, u.length && (r = u.join("_"), -1 !== r.indexOf("short") && (o %= a, o !== o % (a / 2) && (o = 0 > o ? o + a : o - a)), -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * a) % a - (0 | o / a) * a : -1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * a) % a - (0 | o / a) * a)), (o > f || -f > o) && (this._addTween(e, n, i, i + o, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, n, r, i = window.GreenSockGlobals || window,
                    s = i.com.greensock,
                    o = 2 * Math.PI,
                    u = Math.PI / 2,
                    a = s._class,
                    f = function(t, n) {
                        var r = a("easing." + t, function() {}, !0),
                            i = r.prototype = new e;
                        return i.constructor = r, i.getRatio = n, r
                    },
                    l = e.register || function() {},
                    c = function(e, t, n, r) {
                        var i = a("easing." + e, {
                            easeOut: new t,
                            easeIn: new n,
                            easeInOut: new r
                        }, !0);
                        return l(i, e), i
                    },
                    h = function(e, t, n) {
                        this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
                    },
                    p = function(t, n) {
                        var r = a("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            i = r.prototype = new e;
                        return i.constructor = r, i.getRatio = n, i.config = function(e) {
                            return new r(e)
                        }, r
                    },
                    d = c("Back", p("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function(e) {
                        return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    v = a("easing.SlowMo", function(e, t, n) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
                    }, !0),
                    m = v.prototype = new e;
                return m.constructor = v, m.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, v.ease = new v(.7, .7), m.config = v.config = function(e, t, n) {
                    return new v(e, t, n)
                }, t = a("easing.SteppedEase", function(e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, m.config = t.config = function(e) {
                    return new t(e)
                }, n = a("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var n, r, i, s, o, u, a = t.taper || "none", f = [], l = 0, c = 0 | (t.points || 20), p = c, d = t.randomize !== !1, v = t.clamp === !0, m = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) n = d ? Math.random() : 1 / c * p, r = m ? m.getRatio(n) : n, "none" === a ? i = g : "out" === a ? (s = 1 - n, i = s * s * g) : "in" === a ? i = n * n * g : .5 > n ? (s = 2 * n, i = .5 * s * s * g) : (s = 2 * (1 - n), i = .5 * s * s * g), d ? r += Math.random() * i - .5 * i : p % 2 ? r += .5 * i : r -= .5 * i, v && (r > 1 ? r = 1 : 0 > r && (r = 0)), f[l++] = {
                        x: n,
                        y: r
                    };
                    for (f.sort(function(e, t) {
                            return e.x - t.x
                        }), u = new h(1, 1, null), p = c; --p > -1;) o = f[p], u = new h(o.x, o.y, u);
                    this._prev = new h(0, 0, 0 !== u.t ? u : u.next)
                }, !0), m = n.prototype = new e, m.constructor = n, m.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && t.t >= e;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, m.config = function(e) {
                    return new n(e)
                }, n.ease = new n, c("Bounce", f("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), f("BounceIn", function(e) {
                    return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), f("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), c("Circ", f("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), f("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), f("CircInOut", function(e) {
                    return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), r = function(t, n, r) {
                    var i = a("easing." + t, function(e, t) {
                            this._p1 = e || 1, this._p2 = t || r, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        s = i.prototype = new e;
                    return s.constructor = i, s.getRatio = n, s.config = function(e, t) {
                        return new i(e, t)
                    }, i
                }, c("Elastic", r("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * o / this._p2) + 1
                }, .3), r("ElasticIn", function(e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2))
                }, .3), r("ElasticInOut", function(e) {
                    return 1 > (e *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) + 1
                }, .45)), c("Expo", f("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), f("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), f("ExpoInOut", function(e) {
                    return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), c("Sine", f("SineOut", function(e) {
                    return Math.sin(e * u)
                }), f("SineIn", function(e) {
                    return -Math.cos(e * u) + 1
                }), f("SineInOut", function(e) {
                    return -0.5 * (Math.cos(Math.PI * e) - 1)
                })), a("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), l(i.SlowMo, "SlowMo", "ease,"), l(n, "RoughEase", "ease,"), l(t, "SteppedEase", "ease,"), d
            }, !0)
    }),
    function(e) {
        "use strict";
        var t = e.GreenSockGlobals || e;
        if (!t.TweenLite) {
            var n, r, i, s, o, u = function(e) {
                    var n, r = e.split("."),
                        i = t;
                    for (n = 0; r.length > n; n++) i[r[n]] = i = i[r[n]] || {};
                    return i
                },
                a = u("com.greensock"),
                f = 1e-10,
                l = [].slice,
                c = function() {},
                h = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(n) {
                        return n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t
                    }
                }(),
                p = {},
                d = function(n, r, i, s) {
                    this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = i;
                    var o = [];
                    this.check = function(a) {
                        for (var f, l, c, h, v = r.length, m = v; --v > -1;)(f = p[r[v]] || new d(r[v], [])).gsClass ? (o[v] = f.gsClass, m--) : a && f.sc.push(this);
                        if (0 === m && i)
                            for (l = ("com.greensock." + n).split("."), c = l.pop(), h = u(l.join("."))[c] = this.gsClass = i.apply(i, o), s && (t[c] = h, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").join("/"), [], function() {
                                    return h
                                }) : "undefined" != typeof module && module.exports && (module.exports = h)), v = 0; this.sc.length > v; v++) this.sc[v].check()
                    }, this.check(!0)
                },
                v = e._gsDefine = function(e, t, n, r) {
                    return new d(e, t, n, r)
                },
                m = a._class = function(e, t, n) {
                    return t = t || function() {}, v(e, [], function() {
                        return t
                    }, n), t
                };
            v.globals = t;
            var g = [0, 0, 1, 1],
                y = [],
                b = m("easing.Ease", function(e, t, n, r) {
                    this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? g.concat(t) : g
                }, !0),
                w = b.map = {},
                E = b.register = function(e, t, n, r) {
                    for (var i, s, o, u, f = t.split(","), l = f.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                        for (s = f[l], i = r ? m("easing." + s, null, !0) : a.easing[s] || {}, o = c.length; --o > -1;) u = c[o], w[s + "." + u] = w[u + s] = i[u] = e.getRatio ? e : e[u] || new e
                };
            for (i = b.prototype, i._calcEnd = !1, i.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        n = this._power,
                        r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) i = n[r] + ",Power" + r, E(new b(null, null, 1, r), i, "easeOut", !0), E(new b(null, null, 2, r), i, "easeIn" + (0 === r ? ",easeNone" : "")), E(new b(null, null, 3, r), i, "easeInOut");
            w.linear = a.easing.Linear.easeIn, w.swing = a.easing.Quad.easeInOut;
            var S = m("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            i = S.prototype, i.addEventListener = function(e, t, n, r, i) {
                i = i || 0;
                var u, a, f = this._listeners[e],
                    l = 0;
                for (null == f && (this._listeners[e] = f = []), a = f.length; --a > -1;) u = f[a], u.c === t && u.s === n ? f.splice(a, 1) : 0 === l && i > u.pr && (l = a + 1);
                f.splice(l, 0, {
                    c: t,
                    s: n,
                    up: r,
                    pr: i
                }), this !== s || o || s.wake()
            }, i.removeEventListener = function(e, t) {
                var n, r = this._listeners[e];
                if (r)
                    for (n = r.length; --n > -1;)
                        if (r[n].c === t) return r.splice(n, 1), void 0
            }, i.dispatchEvent = function(e) {
                var t, n, r, i = this._listeners[e];
                if (i)
                    for (t = i.length, n = this._eventTarget; --t > -1;) r = i[t], r.up ? r.c.call(r.s || n, {
                        type: e,
                        target: n
                    }) : r.c.call(r.s || n)
            };
            var x = e.requestAnimationFrame,
                T = e.cancelAnimationFrame,
                N = Date.now || function() {
                    return (new Date).getTime()
                },
                C = N();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !x;) x = e[n[r] + "RequestAnimationFrame"], T = e[n[r] + "CancelAnimationFrame"] || e[n[r] + "CancelRequestAnimationFrame"];
            m("Ticker", function(e, t) {
                var n, r, i, u, a, f = this,
                    l = N(),
                    h = t !== !1 && x,
                    p = function(e) {
                        C = N(), f.time = (C - l) / 1e3;
                        var t, s = f.time - a;
                        (!n || s > 0 || e === !0) && (f.frame++, a += s + (s >= u ? .004 : u - s), t = !0), e !== !0 && (i = r(p)), t && f.dispatchEvent("tick")
                    };
                S.call(f), f.time = f.frame = 0, f.tick = function() {
                    p(!0)
                }, f.sleep = function() {
                    null != i && (h && T ? T(i) : clearTimeout(i), r = c, i = null, f === s && (o = !1))
                }, f.wake = function() {
                    null !== i && f.sleep(), r = 0 === n ? c : h && x ? x : function(e) {
                        return setTimeout(e, 0 | 1e3 * (a - f.time) + 1)
                    }, f === s && (o = !0), p(2)
                }, f.fps = function(e) {
                    return arguments.length ? (n = e, u = 1 / (n || 60), a = this.time + u, f.wake(), void 0) : n
                }, f.useRAF = function(e) {
                    return arguments.length ? (f.sleep(), h = e, f.fps(n), void 0) : h
                }, f.fps(e), setTimeout(function() {
                    h && (!i || 5 > f.frame) && f.useRAF(!1)
                }, 1500)
            }), i = a.Ticker.prototype = new a.events.EventDispatcher, i.constructor = a.Ticker;
            var k = m("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, q) {
                    o || s.wake();
                    var n = this.vars.useFrames ? I : q;
                    n.add(this, n._time), this.vars.paused && this.paused(!0)
                }
            });
            s = k.ticker = new a.Ticker, i = k.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
            var L = function() {
                N() - C > 2e3 && s.wake(), setTimeout(L, 2e3)
            };
            L(), i.play = function(e, t) {
                return arguments.length && this.seek(e, t), this.reversed(!1).paused(!1)
            }, i.pause = function(e, t) {
                return arguments.length && this.seek(e, t), this.paused(!0)
            }, i.resume = function(e, t) {
                return arguments.length && this.seek(e, t), this.paused(!1)
            }, i.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, i.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, i.reverse = function(e, t) {
                return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, i.render = function() {}, i.invalidate = function() {
                return this
            }, i.isActive = function() {
                var e, t = this._timeline,
                    n = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
            }, i._enabled = function(e, t) {
                return o || s.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, i._kill = function() {
                return this._enabled(!1, !1)
            }, i.kill = function(e, t) {
                return this._kill(e, t), this
            }, i._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, i._swapSelfInParams = function(e) {
                for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
                return n
            }, i.eventCallback = function(e, t, n, r) {
                if ("on" === (e || "").substr(0, 2)) {
                    var i = this.vars;
                    if (1 === arguments.length) return i[e];
                    null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = h(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, i.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, i.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, i.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, i.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, i.totalTime = function(e, t, n) {
                if (o || s.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var r = this._totalDuration,
                            i = this._timeline;
                        if (e > r && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                            for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && this.render(e, t, !1)
                }
                return this
            }, i.progress = i.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, i.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, i.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || f, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        n = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = n - (n - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, i.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0)), this) : this._reversed
            }, i.paused = function(e) {
                if (!arguments.length) return this._paused;
                if (e != this._paused && this._timeline) {
                    o || e || s.wake();
                    var t = this._timeline,
                        n = t.rawTime(),
                        r = n - this._pauseTime;
                    !e && t.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = e ? n : null, this._paused = e, this._active = this.isActive(), !e && 0 !== r && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !e && this._enabled(!0, !1), this
            };
            var A = m("core.SimpleTimeline", function(e) {
                k.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            i = A.prototype = new k, i.constructor = A, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function(e, t) {
                var n, r;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (r = e._startTime; n && n._startTime > r;) n = n._prev;
                return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._timeline && this._uncache(!0), this
            }, i._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
            }, i.render = function(e, t, n) {
                var r, i = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; i;) r = i._next, (i._active || e >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r
            }, i.rawTime = function() {
                return o || s.wake(), this._totalTime
            };
            var O = m("TweenLite", function(t, n, r) {
                    if (k.call(this, n, r), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : O.selector(t) || t;
                    var i, s, o, u = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        a = this.vars.overwrite;
                    if (this._overwrite = a = null == a ? F[O.defaultOverwrite] : "number" == typeof a ? a >> 0 : F[a], (u || t instanceof Array || t.push && h(t)) && "number" != typeof t[0])
                        for (this._targets = o = l.call(t, 0), this._propLookup = [], this._siblings = [], i = 0; o.length > i; i++) s = o[i], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(l.call(s, 0))) : (this._siblings[i] = R(s, this, !1), 1 === a && this._siblings[i].length > 1 && U(s, this, null, 1, this._siblings[i])) : (s = o[i--] = O.selector(s), "string" == typeof s && o.splice(i + 1, 1)) : o.splice(i--, 1);
                    else this._propLookup = {}, this._siblings = R(t, this, !1), 1 === a && this._siblings.length > 1 && U(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                }, !0),
                M = function(t) {
                    return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                _ = function(e, t) {
                    var n, r = {};
                    for (n in e) j[n] || n in t && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!P[n] || P[n] && P[n]._autoCSS) || (r[n] = e[n], delete e[n]);
                    e.css = r
                };
            i = O.prototype = new k, i.constructor = O, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, O.version = "1.11.1", O.defaultEase = i._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = s, O.autoSleep = !0, O.selector = e.$ || e.jQuery || function(t) {
                return e.$ ? (O.selector = e.$, e.$(t)) : e.document ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
            };
            var D = O._internals = {
                    isArray: h,
                    isSelector: M
                },
                P = O._plugins = {},
                H = O._tweenLookup = {},
                B = 0,
                j = D.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                F = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                I = k._rootFramesTimeline = new A,
                q = k._rootTimeline = new A;
            q._startTime = s.time, I._startTime = s.frame, q._active = I._active = !0, k._updateRoot = function() {
                if (q.render((s.time - q._startTime) * q._timeScale, !1, !1), I.render((s.frame - I._startTime) * I._timeScale, !1, !1), !(s.frame % 120)) {
                    var e, t, n;
                    for (n in H) {
                        for (t = H[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete H[n]
                    }
                    if (n = q._first, (!n || n._paused) && O.autoSleep && !I._first && 1 === s._listeners.tick.length) {
                        for (; n && n._paused;) n = n._next;
                        n || s.sleep()
                    }
                }
            }, s.addEventListener("tick", k._updateRoot);
            var R = function(e, t, n) {
                    var r, i, s = e._gsTweenID;
                    if (H[s || (e._gsTweenID = s = "t" + B++)] || (H[s] = {
                            target: e,
                            tweens: []
                        }), t && (r = H[s].tweens, r[i = r.length] = t, n))
                        for (; --i > -1;) r[i] === t && r.splice(i, 1);
                    return H[s].tweens
                },
                U = function(e, t, n, r, i) {
                    var s, o, u, a;
                    if (1 === r || r >= 4) {
                        for (a = i.length, s = 0; a > s; s++)
                            if ((u = i[s]) !== t) u._gc || u._enabled(!1, !1) && (o = !0);
                            else if (5 === r) break;
                        return o
                    }
                    var l, c = t._startTime + f,
                        h = [],
                        p = 0,
                        d = 0 === t._duration;
                    for (s = i.length; --s > -1;)(u = i[s]) === t || u._gc || u._paused || (u._timeline !== t._timeline ? (l = l || z(t, 0, d), 0 === z(u, l, d) && (h[p++] = u)) : c >= u._startTime && u._startTime + u.totalDuration() / u._timeScale + f > c && ((d || !u._initted) && 2e-10 >= c - u._startTime || (h[p++] = u)));
                    for (s = p; --s > -1;) u = h[s], 2 === r && u._kill(n, e) && (o = !0), (2 !== r || !u._firstPT && u._initted) && u._enabled(!1, !1) && (o = !0);
                    return o
                },
                z = function(e, t, n) {
                    for (var r = e._timeline, i = r._timeScale, s = e._startTime; r._timeline;) {
                        if (s += r._startTime, i *= r._timeScale, r._paused) return -100;
                        r = r._timeline
                    }
                    return s /= i, s > t ? s - t : n && s === t || !e._initted && 2 * f > s - t ? f : (s += e.totalDuration() / e._timeScale / i) > t + f ? 0 : s - t - f
                };
            i._init = function() {
                var e, t, n, r, i = this.vars,
                    s = this._overwrittenProps,
                    o = this._duration,
                    u = i.immediateRender,
                    a = i.ease;
                if (i.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), i.startAt.overwrite = 0, i.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, i.startAt), u)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (i.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else {
                        n = {};
                        for (r in i) j[r] && "autoCSS" !== r || (n[r] = i[r]);
                        if (n.overwrite = 0, n.data = "isFromStart", this._startAt = O.to(this.target, 0, n), i.immediateRender) {
                            if (0 === this._time) return
                        } else this._startAt.render(-1, !0)
                    }
                if (this._ease = a ? a instanceof b ? i.easeParams instanceof Array ? a.config.apply(a, i.easeParams) : a : "function" == typeof a ? new b(a, i.easeParams) : w[a] || O.defaultEase : O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (t && O._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), i.runBackwards)
                    for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                this._onUpdate = i.onUpdate, this._initted = !0
            }, i._initProps = function(t, n, r, i) {
                var s, o, u, a, f, l;
                if (null == t) return !1;
                this.vars.css || t.style && t !== e && t.nodeType && P.css && this.vars.autoCSS !== !1 && _(this.vars, t);
                for (s in this.vars) {
                    if (l = this.vars[s], j[s]) l && (l instanceof Array || l.push && h(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[s] = l = this._swapSelfInParams(l, this));
                    else if (P[s] && (a = new P[s])._onInitTween(t, this.vars[s], this)) {
                        for (this._firstPT = f = {
                                _next: this._firstPT,
                                t: a,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: a._priority
                            }, o = a._overwriteProps.length; --o > -1;) n[a._overwriteProps[o]] = this._firstPT;
                        (a._priority || a._onInitAllProps) && (u = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = n[s] = f = {
                        _next: this._firstPT,
                        t: t,
                        p: s,
                        f: "function" == typeof t[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, f.s = f.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), f.c = "string" == typeof l && "=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0;
                    f && f._next && (f._next._prev = f)
                }
                return i && this._kill(i, t) ? this._initProps(t, n, r, i) : this._overwrite > 1 && this._firstPT && r.length > 1 && U(t, this, n, this._overwrite, r) ? (this._kill(n, t), this._initProps(t, n, r, i)) : u
            }, i.render = function(e, t, n) {
                var r, i, s, o, u = this._time,
                    a = this._duration;
                if (e >= a) this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete"), 0 === a && (o = this._rawPrevTime, (0 === e || 0 > o || o === f) && o !== e && (n = !0, o > f && (i = "onReverseComplete")), this._rawPrevTime = o = !t || e ? e : f);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== u || 0 === a && this._rawPrevTime > f) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === a && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = o = !t || e ? e : f)) : this._initted || (n = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var l = e / a,
                        c = this._easeType,
                        h = this._easePower;
                    (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === h ? l *= l : 2 === h ? l *= l * l : 3 === h ? l *= l * l * l : 4 === h && (l *= l * l * l * l), this.ratio = 1 === c ? 1 - l : 2 === c ? l : .5 > e / a ? l / 2 : 1 - l / 2
                } else this.ratio = this._ease.getRatio(e / a);
                if (this._time !== u || n) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !r ? this.ratio = this._ease.getRatio(this._time / a) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== u && e >= 0 && (this._active = !0), 0 === u && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === a) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || n && 0 === this._time && 0 === u || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), i && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || y), 0 === a && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0)))
                }
            }, i._kill = function(e, t) {
                if ("all" === e && (e = null), null != e || null != t && t !== this.target) {
                    t = "string" != typeof t ? t || this._targets || this.target : O.selector(t) || t;
                    var n, r, i, s, o, u, a, f;
                    if ((h(t) || M(t)) && "number" != typeof t[0])
                        for (n = t.length; --n > -1;) this._kill(e, t[n]) && (u = !0);
                    else {
                        if (this._targets) {
                            for (n = this._targets.length; --n > -1;)
                                if (t === this._targets[n]) {
                                    o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                    break
                                }
                        } else {
                            if (t !== this.target) return !1;
                            o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                        }
                        if (o) {
                            a = e || o, f = e !== r && "all" !== r && e !== o && ("object" != typeof e || !e._tempKill);
                            for (i in a)(s = o[i]) && (s.pg && s.t._kill(a) && (u = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete o[i]), f && (r[i] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return u
                }
                return this._enabled(!1, !1)
            }, i.invalidate = function() {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, i._enabled = function(e, t) {
                if (o || s.wake(), e && this._gc) {
                    var n, r = this._targets;
                    if (r)
                        for (n = r.length; --n > -1;) this._siblings[n] = R(r[n], this, !0);
                    else this._siblings = R(this.target, this, !0)
                }
                return k.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, O.to = function(e, t, n) {
                return new O(e, t, n)
            }, O.from = function(e, t, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(e, t, n)
            }, O.fromTo = function(e, t, n, r) {
                return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new O(e, t, r)
            }, O.delayedCall = function(e, t, n, r, i) {
                return new O(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: n,
                    onCompleteScope: r,
                    onReverseComplete: t,
                    onReverseCompleteParams: n,
                    onReverseCompleteScope: r,
                    immediateRender: !1,
                    useFrames: i,
                    overwrite: 0
                })
            }, O.set = function(e, t) {
                return new O(e, 0, t)
            }, O.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : O.selector(e) || e;
                var n, r, i, s;
                if ((h(e) || M(e)) && "number" != typeof e[0]) {
                    for (n = e.length, r = []; --n > -1;) r = r.concat(O.getTweensOf(e[n], t));
                    for (n = r.length; --n > -1;)
                        for (s = r[n], i = n; --i > -1;) s === r[i] && r.splice(n, 1)
                } else
                    for (r = R(e).concat(), n = r.length; --n > -1;)(r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1);
                return r
            }, O.killTweensOf = O.killDelayedCallsTo = function(e, t, n) {
                "object" == typeof t && (n = t, t = !1);
                for (var r = O.getTweensOf(e, t), i = r.length; --i > -1;) r[i]._kill(n, e)
            };
            var W = m("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = W.prototype
            }, !0);
            if (i = W.prototype, W.version = "1.10.1", W.API = 2, i._firstPT = null, i._addTween = function(e, t, n, r, i, s) {
                    var o, u;
                    return null != r && (o = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = u = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: n,
                        c: o,
                        f: "function" == typeof e[t],
                        n: i || t,
                        r: s
                    }, u._next && (u._next._prev = u), u) : void 0
                }, i.setRatio = function(e) {
                    for (var t, n = this._firstPT, r = 1e-6; n;) t = n.c * e + n.s, n.r ? t = 0 | t + (t > 0 ? .5 : -0.5) : r > t && t > -r && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
                }, i._kill = function(e) {
                    var t, n = this._overwriteProps,
                        r = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                    for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                    return !1
                }, i._roundProps = function(e, t) {
                    for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
                }, O._onPluginEvent = function(e, t) {
                    var n, r, i, s, o, u = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; u;) {
                            for (o = u._next, r = i; r && r.pr > u.pr;) r = r._next;
                            (u._prev = r ? r._prev : s) ? u._prev._next = u: i = u, (u._next = r) ? r._prev = u : s = u, u = o
                        }
                        u = t._firstPT = i
                    }
                    for (; u;) u.pg && "function" == typeof u.t[e] && u.t[e]() && (n = !0), u = u._next;
                    return n
                }, W.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === W.API && (P[(new e[t])._propName] = e[t]);
                    return !0
                }, v.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, n = e.propName,
                        r = e.priority || 0,
                        i = e.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = m("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                            W.call(this, n, r), this._overwriteProps = i || []
                        }, e.global === !0),
                        u = o.prototype = new W(n);
                    u.constructor = o, o.API = e.API;
                    for (t in s) "function" == typeof e[t] && (u[s[t]] = e[t]);
                    return o.version = e.version, W.activate([o]), o
                }, n = e._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (i in p) p[i].func || e.console.log("GSAP encountered missing dependency: com.greensock." + i)
            }
            o = !1
        }
    }(window);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var e = document.documentElement,
        t = window,
        n = function(n, r) {
            var i = "x" === r ? "Width" : "Height",
                s = "scroll" + i,
                o = "client" + i,
                u = document.body;
            return n === t || n === e || n === u ? Math.max(e[s], u[s]) - (t["inner" + i] || Math.max(e[o], u[o])) : n[s] - n["offset" + i]
        },
        r = window._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            init: function(e, r, i) {
                return this._wdw = e === t, this._target = e, this._tween = i, "object" != typeof r && (r = {
                    y: r
                }), this._autoKill = r.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != r.x ? this._addTween(this, "x", this.x, "max" === r.x ? n(e, "x") : r.x, "scrollTo_x", !0) : this.skipX = !0, null != r.y ? this._addTween(this, "y", this.y, "max" === r.y ? n(e, "y") : r.y, "scrollTo_y", !0) : this.skipY = !0, !0
            },
            set: function(e) {
                this._super.setRatio.call(this, e);
                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    i = r - this.yPrev,
                    s = n - this.xPrev;
                this._autoKill && (!this.skipX && (s > 7 || -7 > s) && (this.skipX = !0), !this.skipY && (i > 7 || -7 > i) && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill()), this._wdw ? t.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        i = r.prototype;
    r.max = n, i.getX = function() {
        return this._wdw ? null != t.pageXOffset ? t.pageXOffset : null != e.scrollLeft ? e.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, i.getY = function() {
        return this._wdw ? null != t.pageYOffset ? t.pageYOffset : null != e.scrollTop ? e.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, i._kill = function(e) {
        return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
    }
}), window._gsDefine && window._gsQueue.pop()();
(function(e, t, n, r) {
    var i = n("html"),
        s = n(e),
        o = n(t),
        u = n.fancybox = function() {
            u.open.apply(this, arguments)
        },
        a = navigator.userAgent.match(/msie/i),
        f = null,
        l = t.createTouch !== r,
        c = function(e) {
            return e && e.hasOwnProperty && e instanceof n
        },
        h = function(e) {
            return e && "string" === n.type(e)
        },
        p = function(e) {
            return h(e) && 0 < e.indexOf("%")
        },
        d = function(e, t) {
            var n = parseInt(e, 10) || 0;
            t && p(e) && (n *= u.getViewport()[t] / 100);
            return Math.ceil(n)
        },
        v = function(e, t) {
            return d(e, t) + "px"
        };
    n.extend(u, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !l,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            if (e && (n.isPlainObject(t) || (t = {}), !1 !== u.close(!0))) return n.isArray(e) || (e = c(e) ? n(e).get() : [e]), n.each(e, function(i, s) {
                var o = {},
                    a, f, l, p, d;
                "object" === n.type(s) && (s.nodeType && (s = n(s)), c(s) ? (o = {
                    href: s.data("fancybox-href") || s.attr("href"),
                    title: s.data("fancybox-title") || s.attr("title"),
                    isDom: !0,
                    element: s
                }, n.metadata && n.extend(!0, o, s.metadata())) : o = s);
                a = t.href || o.href || (h(s) ? s : null);
                f = t.title !== r ? t.title : o.title || "";
                p = (l = t.content || o.content) ? "html" : t.type || o.type;
                !p && o.isDom && (p = s.data("fancybox-type"), p || (p = (p = s.prop("class").match(/fancybox\.(\w+)/)) ? p[1] : null));
                h(a) && (p || (u.isImage(a) ? p = "image" : u.isSWF(a) ? p = "swf" : "#" === a.charAt(0) ? p = "inline" : h(s) && (p = "html", l = s)), "ajax" === p && (d = a.split(/\s+/, 2), a = d.shift(), d = d.shift()));
                l || ("inline" === p ? a ? l = n(h(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : o.isDom && (l = s) : "html" === p ? l = a : !p && !a && o.isDom && (p = "inline", l = s));
                n.extend(o, {
                    href: a,
                    type: p,
                    content: l,
                    title: f,
                    selector: d
                });
                e[i] = o
            }), u.opts = n.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? n.extend({}, u.defaults.keys, t.keys) : !1), u.group = e, u._start(u.opts.index)
        },
        cancel: function() {
            var e = u.coming;
            e && !1 !== u.trigger("onCancel") && (u.hideLoading(), u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(e))
        },
        close: function(e) {
            u.cancel();
            !1 !== u.trigger("beforeClose") && (u.unbindEvents(), u.isActive && (!u.isOpen || !0 === e ? (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut()) : (u.isOpen = u.isOpened = !1, u.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]())))
        },
        play: function(e) {
            var t = function() {
                    clearTimeout(u.player.timer)
                },
                n = function() {
                    t();
                    u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
                },
                r = function() {
                    t();
                    o.unbind(".player");
                    u.player.isActive = !1;
                    u.trigger("onPlayEnd")
                };
            !0 === e || !u.player.isActive && !1 !== e ? u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0, o.bind({
                "onCancel.player beforeClose.player": r,
                "onUpdate.player": n,
                "beforeLoad.player": t
            }), n(), u.trigger("onPlayStart")) : r()
        },
        next: function(e) {
            var t = u.current;
            t && (h(e) || (e = t.direction.next), u.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = u.current;
            t && (h(e) || (e = t.direction.prev), u.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, n) {
            var i = u.current;
            i && (e = d(e), u.direction = t || i.direction[e >= i.index ? "next" : "prev"], u.router = n || "jumpto", i.loop && (0 > e && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (u.cancel(), u._start(e)))
        },
        reposition: function(e, t) {
            var r = u.current,
                i = r ? r.wrap : null,
                s;
            i && (s = u._getPosition(t), e && "scroll" === e.type ? (delete s.position, i.stop(!0, !0).animate(s, 200)) : (i.css(s), r.pos = n.extend({}, r.dim, s)))
        },
        update: function(e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(f), f = null);
            u.isOpen && !f && (f = setTimeout(function() {
                var r = u.current;
                r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && u._setDimension(), "scroll" === t && r.canShrink || u.reposition(e), u.trigger("onUpdate"), f = null)
            }, n && !l ? 0 : 300))
        },
        toggle: function(e) {
            u.isOpen && (u.current.fitToView = "boolean" === n.type(e) ? e : !u.current.fitToView, l && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
        },
        hideLoading: function() {
            o.unbind(".loading");
            n("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            u.hideLoading();
            e = n('<div id="fancybox-loading"><div></div></div>').click(u.cancel).appendTo("body");
            o.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), u.cancel())
            });
            u.defaults.fixed || (t = u.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var t = u.current && u.current.locked || !1,
                n = {
                    x: s.scrollLeft(),
                    y: s.scrollTop()
                };
            t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = l && e.innerWidth ? e.innerWidth : s.width(), n.h = l && e.innerHeight ? e.innerHeight : s.height());
            return n
        },
        unbindEvents: function() {
            u.wrap && c(u.wrap) && u.wrap.unbind(".fb");
            o.unbind(".fb");
            s.unbind(".fb")
        },
        bindEvents: function() {
            var e = u.current,
                t;
            e && (s.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), u.update), (t = e.keys) && o.bind("keydown.fb", function(i) {
                var s = i.which || i.keyCode,
                    o = i.target || i.srcElement;
                if (27 === s && u.coming) return !1;
                !i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && (!o || !o.type && !n(o).is("[contenteditable]")) && n.each(t, function(t, o) {
                    if (1 < e.group.length && o[s] !== r) return u[t](o[s]), i.preventDefault(), !1;
                    if (-1 < n.inArray(s, o)) return u[t](), i.preventDefault(), !1
                })
            }), n.fn.mousewheel && e.mouseWheel && u.wrap.bind("mousewheel.fb", function(t, r, i, s) {
                for (var o = n(t.target || null), a = !1; o.length && !a && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap");) a = o[0] && (!o[0].style.overflow || "hidden" !== o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight), o = n(o).parent();
                if (0 !== r && !a && 1 < u.group.length && !e.canShrink) {
                    0 < s || 0 < i ? u.prev(0 < s ? "down" : "left") : (0 > s || 0 > i) && u.next(0 > s ? "up" : "right");
                    t.preventDefault()
                }
            }))
        },
        trigger: function(e, t) {
            var r, i = t || u.coming || u.current;
            if (i) {
                n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1)));
                if (!1 === r) return !1;
                i.helpers && n.each(i.helpers, function(t, r) {
                    r && u.helpers[t] && n.isFunction(u.helpers[t][e]) && u.helpers[t][e](n.extend(!0, {}, u.helpers[t].defaults, r), i)
                });
                o.trigger(e)
            }
        },
        isImage: function(e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t = {},
                r, i;
            e = d(e);
            r = u.group[e] || null;
            if (!r) return !1;
            t = n.extend(!0, {}, u.opts, r);
            r = t.margin;
            i = t.padding;
            "number" === n.type(r) && (t.margin = [r, r, r, r]);
            "number" === n.type(i) && (t.padding = [i, i, i, i]);
            t.modal && n.extend(!0, t, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            t.autoSize && (t.autoWidth = t.autoHeight = !0);
            "auto" === t.width && (t.autoWidth = !0);
            "auto" === t.height && (t.autoHeight = !0);
            t.group = u.group;
            t.index = e;
            u.coming = t;
            if (!1 === u.trigger("beforeLoad")) u.coming = null;
            else {
                i = t.type;
                r = t.href;
                if (!i) return u.coming = null, u.current && u.router && "jumpto" !== u.router ? (u.current.index = e, u[u.router](u.direction)) : !1;
                u.isActive = !0;
                if ("image" === i || "swf" === i) t.autoHeight = t.autoWidth = !1, t.scrolling = "visible";
                "image" === i && (t.aspectRatio = !0);
                "iframe" === i && l && (t.scrolling = "scroll");
                t.wrap = n(t.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body");
                n.extend(t, {
                    skin: n(".fancybox-skin", t.wrap),
                    outer: n(".fancybox-outer", t.wrap),
                    inner: n(".fancybox-inner", t.wrap)
                });
                n.each(["Top", "Right", "Bottom", "Left"], function(e, n) {
                    t.skin.css("padding" + n, v(t.padding[e]))
                });
                u.trigger("onReady");
                if ("inline" === i || "html" === i) {
                    if (!t.content || !t.content.length) return u._error("content")
                } else if (!r) return u._error("href");
                "image" === i ? u._loadImage() : "ajax" === i ? u._loadAjax() : "iframe" === i ? u._loadIframe() : u._afterLoad()
            }
        },
        _error: function(e) {
            n.extend(u.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: u.coming.tpl.error
            });
            u._afterLoad()
        },
        _loadImage: function() {
            var e = u.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null;
                u.coming.width = this.width / u.opts.pixelRatio;
                u.coming.height = this.height / u.opts.pixelRatio;
                u._afterLoad()
            };
            e.onerror = function() {
                this.onload = this.onerror = null;
                u._error("image")
            };
            e.src = u.coming.href;
            !0 !== e.complete && u.showLoading()
        },
        _loadAjax: function() {
            var e = u.coming;
            u.showLoading();
            u.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    u.coming && "abort" !== t ? u._error("ajax", e) : u.hideLoading()
                },
                success: function(t, n) {
                    "success" === n && (e.content = t, u._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = u.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function() {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            });
            e.iframe.preload && (u.showLoading(), t.one("load", function() {
                n(this).data("ready", 1);
                l || n(this).bind("load.fb", u.update);
                n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                u._afterLoad()
            }));
            e.content = t.appendTo(e.inner);
            e.iframe.preload || u._afterLoad()
        },
        _preloadImages: function() {
            var e = u.group,
                t = u.current,
                n = e.length,
                r = t.preload ? Math.min(t.preload, n - 1) : 0,
                i, s;
            for (s = 1; s <= r; s += 1) i = e[(t.index + s) % n], "image" === i.type && i.href && ((new Image).src = i.href)
        },
        _afterLoad: function() {
            var e = u.coming,
                t = u.current,
                r, i, s, o, a;
            u.hideLoading();
            if (e && !1 !== u.isActive)
                if (!1 === u.trigger("afterLoad", e, t)) e.wrap.stop(!0).trigger("onReset").remove(), u.coming = null;
                else {
                    t && (u.trigger("beforeChange", t), t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    u.unbindEvents();
                    r = e.content;
                    i = e.type;
                    s = e.scrolling;
                    n.extend(u, {
                        wrap: e.wrap,
                        skin: e.skin,
                        outer: e.outer,
                        inner: e.inner,
                        current: e,
                        previous: t
                    });
                    o = e.href;
                    switch (i) {
                        case "inline":
                        case "ajax":
                        case "html":
                            e.selector ? r = n("<div>").html(r).find(e.selector) : c(r) && (r.data("fancybox-placeholder") || r.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(r).hide()), r = r.show().detach(), e.wrap.bind("onReset", function() {
                                n(this).find(r).length && r.hide().replaceAll(r.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            r = e.tpl.image.replace("{href}", o);
                            break;
                        case "swf":
                            r = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', a = "", n.each(e.swf, function(e, t) {
                                r += '<param name="' + e + '" value="' + t + '"></param>';
                                a += " " + e + '="' + t + '"'
                            }), r += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                    }(!c(r) || !r.parent().is(e.inner)) && e.inner.append(r);
                    u.trigger("beforeShow");
                    e.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s);
                    u._setDimension();
                    u.reposition();
                    u.isOpen = !1;
                    u.coming = null;
                    u.bindEvents();
                    u.isOpened ? t.prevMethod && u.transitions[t.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove();
                    u.transitions[u.isOpened ? e.nextMethod : e.openMethod]();
                    u._preloadImages()
                }
        },
        _setDimension: function() {
            var e = u.getViewport(),
                t = 0,
                r = !1,
                i = !1,
                r = u.wrap,
                s = u.skin,
                o = u.inner,
                a = u.current,
                i = a.width,
                f = a.height,
                l = a.minWidth,
                c = a.minHeight,
                h = a.maxWidth,
                m = a.maxHeight,
                g = a.scrolling,
                y = a.scrollOutside ? a.scrollbarWidth : 0,
                S = a.margin,
                x = d(S[1] + S[3]),
                T = d(S[0] + S[2]),
                N, C, k, L, A, O, M, _, D;
            r.add(s).add(o).width("auto").height("auto").removeClass("fancybox-tmp");
            S = d(s.outerWidth(!0) - s.width());
            N = d(s.outerHeight(!0) - s.height());
            C = x + S;
            k = T + N;
            L = p(i) ? (e.w - C) * d(i) / 100 : i;
            A = p(f) ? (e.h - k) * d(f) / 100 : f;
            if ("iframe" === a.type) {
                if (D = a.content, a.autoHeight && 1 === D.data("ready")) try {
                    D[0].contentWindow.document.location && (o.width(L).height(9999), O = D.contents().find("body"), y && O.css("overflow-x", "hidden"), A = O.outerHeight(!0))
                } catch (P) {}
            } else if (a.autoWidth || a.autoHeight) o.addClass("fancybox-tmp"), a.autoWidth || o.width(L), a.autoHeight || o.height(A), a.autoWidth && (L = o.width()), a.autoHeight && (A = o.height()), o.removeClass("fancybox-tmp");
            i = d(L);
            f = d(A);
            _ = L / A;
            l = d(p(l) ? d(l, "w") - C : l);
            h = d(p(h) ? d(h, "w") - C : h);
            c = d(p(c) ? d(c, "h") - k : c);
            m = d(p(m) ? d(m, "h") - k : m);
            O = h;
            M = m;
            a.fitToView && (h = Math.min(e.w - C, h), m = Math.min(e.h - k, m));
            C = e.w - x;
            T = e.h - T;
            a.aspectRatio ? (i > h && (i = h, f = d(i / _)), f > m && (f = m, i = d(f * _)), i < l && (i = l, f = d(i / _)), f < c && (f = c, i = d(f * _))) : (i = Math.max(l, Math.min(i, h)), a.autoHeight && "iframe" !== a.type && (o.width(i), f = o.height()), f = Math.max(c, Math.min(f, m)));
            if (a.fitToView)
                if (o.width(i).height(f), r.width(i + S), e = r.width(), x = r.height(), a.aspectRatio)
                    for (;
                        (e > C || x > T) && i > l && f > c && !(19 < t++);) f = Math.max(c, Math.min(m, f - 10)), i = d(f * _), i < l && (i = l, f = d(i / _)), i > h && (i = h, f = d(i / _)), o.width(i).height(f), r.width(i + S), e = r.width(), x = r.height();
                else i = Math.max(l, Math.min(i, i - (e - C))), f = Math.max(c, Math.min(f, f - (x - T)));
            y && "auto" === g && f < A && i + S + y < C && (i += y);
            o.width(i).height(f);
            r.width(i + S);
            e = r.width();
            x = r.height();
            r = (e > C || x > T) && i > l && f > c;
            i = a.aspectRatio ? i < O && f < M && i < L && f < A : (i < O || f < M) && (i < L || f < A);
            n.extend(a, {
                dim: {
                    width: v(e),
                    height: v(x)
                },
                origWidth: L,
                origHeight: A,
                canShrink: r,
                canExpand: i,
                wPadding: S,
                hPadding: N,
                wrapSpace: x - s.outerHeight(!0),
                skinSpace: s.height() - f
            });
            !D && a.autoHeight && f > c && f < m && !i && o.height("auto")
        },
        _getPosition: function(e) {
            var t = u.current,
                n = u.getViewport(),
                r = t.margin,
                i = u.wrap.width() + r[1] + r[3],
                s = u.wrap.height() + r[0] + r[2],
                r = {
                    position: "absolute",
                    top: r[0],
                    left: r[3]
                };
            t.autoCenter && t.fixed && !e && s <= n.h && i <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x);
            r.top = v(Math.max(r.top, r.top + (n.h - s) * t.topRatio));
            r.left = v(Math.max(r.left, r.left + (n.w - i) * t.leftRatio));
            return r
        },
        _afterZoomIn: function() {
            var e = u.current;
            e && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (e.closeClick || e.nextClick && 1 < u.group.length) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), u[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(e) {
                e.preventDefault();
                u.close()
            }), e.arrows && 1 < u.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (e.loop || e.index < u.group.length - 1) && n(e.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), !e.loop && e.index === e.group.length - 1 ? u.play(!1) : u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play()))
        },
        _afterZoomOut: function(e) {
            e = e || u.current;
            n(".fancybox-wrap").trigger("onReset").remove();
            n.extend(u, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            u.trigger("afterClose", e)
        }
    });
    u.transitions = {
        getOrigPosition: function() {
            var e = u.current,
                t = e.element,
                n = e.orig,
                r = {},
                i = 50,
                s = 50,
                o = e.hPadding,
                a = e.wPadding,
                f = u.getViewport();
            !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t));
            c(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), s = n.outerHeight())) : (r.top = f.y + (f.h - s) * e.topRatio, r.left = f.x + (f.w - i) * e.leftRatio);
            if ("fixed" === u.wrap.css("position") || e.locked) r.top -= f.y, r.left -= f.x;
            return r = {
                top: v(r.top - o * e.topRatio),
                left: v(r.left - a * e.leftRatio),
                width: v(i + a),
                height: v(s + o)
            }
        },
        step: function(e, t) {
            var n, r, i = t.prop;
            r = u.current;
            var s = r.wrapSpace,
                o = r.skinSpace;
            if ("width" === i || "height" === i) n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), u.isClosing && (n = 1 - n), r = "width" === i ? r.wPadding : r.hPadding, r = e - r, u.skin[i](d("width" === i ? r : r - s * n)), u.inner[i](d("width" === i ? r : r - s * n - o * n))
        },
        zoomIn: function() {
            var e = u.current,
                t = e.pos,
                r = e.openEffect,
                i = "elastic" === r,
                s = n.extend({
                    opacity: 1
                }, t);
            delete s.position;
            i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1);
            u.wrap.css(t).animate(s, {
                duration: "none" === r ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: i ? this.step : null,
                complete: u._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = u.current,
                t = e.closeEffect,
                n = "elastic" === t,
                r = {
                    opacity: .1
                };
            n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1));
            u.wrap.animate(r, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: u._afterZoomOut
            })
        },
        changeIn: function() {
            var e = u.current,
                t = e.nextEffect,
                n = e.pos,
                r = {
                    opacity: 1
                },
                i = u.direction,
                s;
            n.opacity = .1;
            "elastic" === t && (s = "down" === i || "up" === i ? "top" : "left", "down" === i || "right" === i ? (n[s] = v(d(n[s]) - 200), r[s] = "+=200px") : (n[s] = v(d(n[s]) + 200), r[s] = "-=200px"));
            "none" === t ? u._afterZoomIn() : u.wrap.css(n).animate(r, {
                duration: e.nextSpeed,
                easing: e.nextEasing,
                complete: u._afterZoomIn
            })
        },
        changeOut: function() {
            var e = u.previous,
                t = e.prevEffect,
                r = {
                    opacity: .1
                },
                i = u.direction;
            "elastic" === t && (r["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=200px");
            e.wrap.animate(r, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    };
    u.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !l,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function(e) {
            e = n.extend({}, this.defaults, e);
            this.overlay && this.close();
            this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(u.coming ? u.coming.parent : e.parent);
            this.fixed = !1;
            e.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = n.extend({}, this.defaults, e);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e);
            this.fixed || (s.bind("resize.overlay", n.proxy(this.update, this)), this.update());
            e.closeClick && this.overlay.bind("click.overlay", function(e) {
                if (n(e.target).hasClass("fancybox-overlay")) return u.isActive ? u.close() : t.close(), !1
            });
            this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            s.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t));
            n(".fancybox-overlay").remove().hide();
            n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var e = "100%",
                n;
            this.overlay.width(e).height("100%");
            a ? (n = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > n && (e = o.width())) : o.width() > s.width() && (e = o.width());
            this.overlay.width(e).height(o.height())
        },
        onReady: function(e, t) {
            var r = this.overlay;
            n(".fancybox-overlay").stop(!0, !0);
            r || this.create(e);
            e.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > s.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1);
            !0 === e.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            var r, i;
            t.locked && (!1 !== this.margin && (n("*").filter(function() {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = s.scrollTop(), i = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(r).scrollLeft(i));
            this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !u.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    };
    u.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t = u.current,
                r = t.title,
                i = e.type;
            n.isFunction(r) && (r = r.call(t.element, t));
            if (h(r) && "" !== n.trim(r)) {
                t = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>");
                switch (i) {
                    case "inside":
                        i = u.skin;
                        break;
                    case "outside":
                        i = u.wrap;
                        break;
                    case "over":
                        i = u.inner;
                        break;
                    default:
                        i = u.skin, t.appendTo("body"), a && t.width(t.width()), t.wrapInner('<span class="child"></span>'), u.current.margin[2] += Math.abs(d(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](i)
            }
        }
    };
    n.fn.fancybox = function(e) {
        var t, r = n(this),
            i = this.selector || "",
            s = function(s) {
                var o = n(this).blur(),
                    a = t,
                    f, l;
                !s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && !o.is(".fancybox-wrap") && (f = e.groupAttr || "data-fancybox-group", l = o.attr(f), l || (f = "rel", l = o.get(0)[f]), l && "" !== l && "nofollow" !== l && (o = i.length ? n(i) : r, o = o.filter("[" + f + '="' + l + '"]'), a = o.index(this)), e.index = a, !1 !== u.open(o, e) && s.preventDefault())
            };
        e = e || {};
        t = e.index || 0;
        !i || !1 === e.live ? r.unbind("click.fb-start").bind("click.fb-start", s) : o.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    o.ready(function() {
        var t, s;
        n.scrollbarWidth === r && (n.scrollbarWidth = function() {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                t = t.innerWidth() - t.height(99).innerWidth();
            e.remove();
            return t
        });
        if (n.support.fixedPosition === r) {
            t = n.support;
            s = n('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var o = 20 === s[0].offsetTop || 15 === s[0].offsetTop;
            s.remove();
            t.fixedPosition = o
        }
        n.extend(u.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        });
        t = n(e).width();
        i.addClass("fancybox-lock-test");
        s = n(e).width();
        i.removeClass("fancybox-lock-test");
        n("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
(function() {
    var e, t = function() {},
        n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"],
        r = n.length,
        i = window.console = window.console || {};
    while (r--) {
        e = n[r];
        i[e] || (i[e] = t)
    }
})();
MediaElementPlayer.prototype.buildfs = function(e, t, n, r) {
    var i = $('<div class="mejs-button mejs-fs-button ' + (e.options.fs ? "mejs-fs-on" : "mejs-fs-off") + '">' + '<button type="button" aria-controls="mep_0" title="Fullscreen"></button>' + "</div>").appendTo(t).click(function() {
        e.options.fs ? window.location.href = "" : window.location.href = $(this).parents(".video-player").find(".poster").attr("href")
    })
};
MediaElementPlayer.prototype.buildshare = function(e, t, n, r) {
    var i = $('<div class="mejs-button mejs-share-button ' + (e.options.share ? "mejs-share-on" : "mejs-share-off") + '">' + '<button type="button" aria-controls="mep_0" title="Share"></button>' + '<div class="share-foldout"><a>Youtube</a></div>' + "</div>").appendTo(t).click(function(e) {
        e.preventDefault();
        if ($(this).parents("article").find("a.share-helper").length > 0) {
            console.log("article share helper");
            $(this).parents("article").find("a.share-helper").trigger("click")
        } else {
            console.log("global share helper");
            $(".share-helper").trigger("click")
        }
    })
};
(function(e) {
    e.fn.youtubePlayerWithPoster = function(t) {
        var n = {
                defaultYoutubePlayer: !1,
                customFullscreen: !0
            },
            r = e.extend({}, n, t);
        return this.each(function() {
            var t = e(this),
                n = t.find("a"),
                i = e(this).find(".vp");
            n.on("click", function(s) {
                s.preventDefault();
                var o = i.data("youtubeid");
                r.defaultYoutubePlayer ? i.find("#ytplayer").length > 0 ? i.show().css({
                    "z-index": 2
                }) : e('<iframe id="ytplayer" type="text/html" width="100%%" height="100%" src="//www.youtube.com/embed/' + o + '?autoplay=1&hd=1" frameborder="0"/>').appendTo(i) : i.find("#video-player").length > 0 ? i.show().css({
                    "z-index": 2
                }) : e('<video width="100%%" height="100%%" id="video-player" preload="none"><source type="video/youtube" src="http://www.youtube.com/watch?v=' + o + '" /></video>').appendTo(i);
                i.show().css({
                    "z-index": 2
                });
                if (!r.defaultYoutubePlayer) {
                    var u = ["playpause", "volume", "progress", "share"];
                    r.customFullscreen ? u.push("fs") : u.push("fullscreen");
                    var a = new MediaElementPlayer(t.find("video"), {
                        features: u,
                        success: function(t, r) {
                            t.addEventListener("canplay", function() {
                                t.play();
                                if (e("html").hasClass("lt-ie9")) {
                                    a.setPlayerSize(n.width(), n.height());
                                    t.setVideoSize(n.width(), n.height());
                                    a.setControlsSize()
                                }
                            }, !1);
                            n.css({
                                "z-index": 1,
                                visibility: "hidden"
                            })
                        }
                    });
                    Modernizr.touch && n.css({
                        "z-index": 1,
                        visibility: "hidden"
                    })
                } else n.css({
                    "z-index": 1,
                    visibility: "hidden"
                })
            })
        })
    }
})(jQuery);
(function(e) {
    e.fn.tabs = function(t) {
        var n = {},
            r = e.extend({}, n, t);
        return this.each(function() {
            function i(t) {
                t.preventDefault();
                if (e(this).hasClass("active")) return !0;
                n.find("a").removeClass("active");
                e(this).addClass("active");
                var i = e(this).parent("li").index(),
                    s = r.filter(".active"),
                    o = s.outerHeight(!0);
                TweenMax.to(s, .2, {
                    opacity: 0,
                    onComplete: function() {
                        s.removeClass("active");
                        r.eq(i).css({
                            opacity: 0
                        }).addClass("active");
                        var e = r.eq(i).outerHeight(!0);
                        r.eq(i).css({
                            height: o
                        });
                        TweenMax.to(r.eq(i), .2, {
                            delay: .2,
                            opacity: 1,
                            height: e,
                            onComplete: function() {
                                r.eq(i).css({
                                    height: ""
                                })
                            }
                        })
                    }
                })
            }
            var t = e(this),
                n = t.find("ul").first(),
                r = t.find(".tab");
            r.css({
                paddingTop: 1,
                paddingBottom: 1
            });
            n.find("li").each(function() {
                e(this).find("a").css({
                    width: e(this).width() + 10,
                    overflow: "hidden",
                    "text-align": "center"
                })
            });
            n.on("click", "a", i)
        })
    }
})(jQuery);
(function(e) {
    e.fn.selectBox = function(t) {
        var n = {},
            r = e.extend({}, n, t);
        return this.each(function() {
            function o(n) {
                n.preventDefault();
                t.addClass("open");
                var r = i.height();
                i.css({
                    height: 0,
                    overflow: "hidden"
                });
                TweenMax.to(i, .5, {
                    height: r,
                    ease: Quad.easeOut,
                    onComplete: function() {
                        i.css({
                            height: "",
                            overflow: ""
                        });
                        e(window).on("click", u)
                    }
                })
            }

            function u(s) {
                typeof r.callback != "undefined" && s.preventDefault();
                e(window).off("click", u);
                i.css({
                    overflow: "hidden"
                });
                n.find("a").css({
                    "border-radius": 0
                });
                TweenMax.to(i, .5, {
                    height: 0,
                    ease: Quad.easeOut,
                    onComplete: function() {
                        t.removeClass("open");
                        i.css({
                            height: "",
                            overflow: ""
                        });
                        TweenMax.to(n.find("a"), .3, {
                            "border-radius": 20,
                            ease: Quad.easeOut,
                            onComplete: function() {
                                n.find("a").css({
                                    "border-radius": ""
                                })
                            }
                        })
                    }
                })
            }

            function a(i) {
                i.preventDefault();
                var s = e(this).data();
                n.find("span").text(e(this).text());
                t.data(s);
                r.callback(e(this).attr("href"), s)
            }
            var t = e(this),
                n = e(this).find(".selected-item"),
                i = e(this).find("ul"),
                s = i.find("li > a");
            n.on("click", o);
            typeof r.callback != "undefined" && s.on("click", a)
        })
    }
})(jQuery);
(function(e) {
    e.fn.filterBox = function(t) {
        var n = {},
            r = e.extend({}, n, t);
        return this.each(function() {
            function i(e) {
                e.preventDefault();
                t.hasClass("active") ? o() : s()
            }

            function s() {
                var i = n.outerHeight();
                t.css({
                    height: n.outerHeight(),
                    overflow: "hidden"
                }).addClass("active");
                var s = r.outerHeight(!0);
                TweenMax.to(t, .5, {
                    height: i + s,
                    ease: Quad.easeOut,
                    onComplete: function() {
                        t.css({
                            height: "",
                            overflow: ""
                        });
                        e(window).trigger("scroll")
                    }
                })
            }

            function o() {
                var i = n.outerHeight(),
                    s = r.outerHeight(!0);
                t.css({
                    height: i + s,
                    overflow: "hidden"
                });
                TweenMax.to(t, .5, {
                    height: i,
                    ease: Quad.easeOut,
                    onComplete: function() {
                        t.css({
                            height: "",
                            overflow: ""
                        }).removeClass("active");
                        e(window).trigger("scroll")
                    }
                })
            }

            function u(t) {
                t.preventDefault();
                var n = e(this);
                n.hasClass("active") ? f(n) : a(n)
            }

            function a(e) {
                e.addClass("active")
            }

            function f(e) {
                e.removeClass("active")
            }
            var t = e(this),
                n = e(this).find("h3"),
                r = e(this).find("ul");
            t.on("click", "h3 a", i);
            t.on("click", "li a", u)
        })
    }
})(jQuery);
(function(e, t) {
    var n = e.jQuery || e.Cowboy || (e.Cowboy = {}),
        r;
    n.throttle = r = function(e, r, i, s) {
        function a() {
            function p() {
                u = +(new Date);
                i.apply(n, l)
            }

            function v() {
                o = t
            }
            var n = this,
                a = +(new Date) - u,
                l = arguments;
            s && !o && p();
            o && clearTimeout(o);
            s === t && a > e ? p() : r !== !0 && (o = setTimeout(s ? v : p, s === t ? e - a : e))
        }
        var o, u = 0;
        if (typeof r != "boolean") {
            s = i;
            i = r;
            r = t
        }
        n.guid && (a.guid = i.guid = i.guid || n.guid++);
        return a
    };
    n.debounce = function(e, n, i) {
        return i === t ? r(e, n, !1) : r(e, i, n !== !1)
    }
})(this);
(function(e, t) {
    "use strict";

    function n() {
        if (!r.READY) {
            r.event.determineEventTypes();
            for (var e in r.gestures) r.gestures.hasOwnProperty(e) && r.detection.register(r.gestures[e]);
            r.event.onTouch(r.DOCUMENT, r.EVENT_MOVE, r.detection.detect), r.event.onTouch(r.DOCUMENT, r.EVENT_END, r.detection.detect), r.READY = !0
        }
    }
    var r = function(e, t) {
        return new r.Instance(e, t || {})
    };
    r.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, r.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, r.HAS_TOUCHEVENTS = "ontouchstart" in e, r.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, r.NO_MOUSEEVENTS = r.HAS_TOUCHEVENTS && navigator.userAgent.match(r.MOBILE_REGEX), r.EVENT_TYPES = {}, r.DIRECTION_DOWN = "down", r.DIRECTION_LEFT = "left", r.DIRECTION_UP = "up", r.DIRECTION_RIGHT = "right", r.POINTER_MOUSE = "mouse", r.POINTER_TOUCH = "touch", r.POINTER_PEN = "pen", r.EVENT_START = "start", r.EVENT_MOVE = "move", r.EVENT_END = "end", r.DOCUMENT = document, r.plugins = {}, r.READY = !1, r.Instance = function(e, t) {
        var i = this;
        return n(), this.element = e, this.enabled = !0, this.options = r.utils.extend(r.utils.extend({}, r.defaults), t || {}), this.options.stop_browser_behavior && r.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), r.event.onTouch(e, r.EVENT_START, function(e) {
            i.enabled && r.detection.startDetect(i, e)
        }), this
    }, r.Instance.prototype = {
        on: function(e, t) {
            for (var n = e.split(" "), r = 0; n.length > r; r++) this.element.addEventListener(n[r], t, !1);
            return this
        },
        off: function(e, t) {
            for (var n = e.split(" "), r = 0; n.length > r; r++) this.element.removeEventListener(n[r], t, !1);
            return this
        },
        trigger: function(e, t) {
            var n = r.DOCUMENT.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = t;
            var i = this.element;
            return r.utils.hasParent(t.target, i) && (i = t.target), i.dispatchEvent(n), this
        },
        enable: function(e) {
            return this.enabled = e, this
        }
    };
    var i = null,
        s = !1,
        o = !1;
    r.event = {
        bindDom: function(e, t, n) {
            for (var r = t.split(" "), i = 0; r.length > i; i++) e.addEventListener(r[i], n, !1)
        },
        onTouch: function(e, t, n) {
            var u = this;
            this.bindDom(e, r.EVENT_TYPES[t], function(f) {
                var l = f.type.toLowerCase();
                if (!l.match(/mouse/) || !o) {
                    l.match(/touch/) || l.match(/pointerdown/) || l.match(/mouse/) && 1 === f.which ? s = !0 : l.match(/mouse/) && 1 !== f.which && (s = !1), l.match(/touch|pointer/) && (o = !0);
                    var c = 0;
                    s && (r.HAS_POINTEREVENTS && t != r.EVENT_END ? c = r.PointerEvent.updatePointer(t, f) : l.match(/touch/) ? c = f.touches.length : o || (c = l.match(/up/) ? 0 : 1), c > 0 && t == r.EVENT_END ? t = r.EVENT_MOVE : c || (t = r.EVENT_END), c || null === i ? i = f : f = i, n.call(r.detection, u.collectEventData(e, t, f)), r.HAS_POINTEREVENTS && t == r.EVENT_END && (c = r.PointerEvent.updatePointer(t, f))), c || (i = null, s = !1, o = !1, r.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function() {
            var e;
            e = r.HAS_POINTEREVENTS ? r.PointerEvent.getEvents() : r.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], r.EVENT_TYPES[r.EVENT_START] = e[0], r.EVENT_TYPES[r.EVENT_MOVE] = e[1], r.EVENT_TYPES[r.EVENT_END] = e[2]
        },
        getTouchList: function(e) {
            return r.HAS_POINTEREVENTS ? r.PointerEvent.getTouchList() : e.touches ? e.touches : [{
                identifier: 1,
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target
            }]
        },
        collectEventData: function(e, t, n) {
            var i = this.getTouchList(n, t),
                s = r.POINTER_TOUCH;
            return (n.type.match(/mouse/) || r.PointerEvent.matchType(r.POINTER_MOUSE, n)) && (s = r.POINTER_MOUSE), {
                center: r.utils.getCenter(i),
                timeStamp: (new Date).getTime(),
                target: n.target,
                touches: i,
                eventType: t,
                pointerType: s,
                srcEvent: n,
                preventDefault: function() {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function() {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function() {
                    return r.detection.stopDetect()
                }
            }
        }
    }, r.PointerEvent = {
        pointers: {},
        getTouchList: function() {
            var e = this,
                t = [];
            return Object.keys(e.pointers).sort().forEach(function(n) {
                t.push(e.pointers[n])
            }), t
        },
        updatePointer: function(e, t) {
            return e == r.EVENT_END ? this.pointers = {} : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
        },
        matchType: function(e, t) {
            if (!t.pointerType) return !1;
            var n = {};
            return n[r.POINTER_MOUSE] = t.pointerType == t.MSPOINTER_TYPE_MOUSE || t.pointerType == r.POINTER_MOUSE, n[r.POINTER_TOUCH] = t.pointerType == t.MSPOINTER_TYPE_TOUCH || t.pointerType == r.POINTER_TOUCH, n[r.POINTER_PEN] = t.pointerType == t.MSPOINTER_TYPE_PEN || t.pointerType == r.POINTER_PEN, n[e]
        },
        getEvents: function() {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        },
        reset: function() {
            this.pointers = {}
        }
    }, r.utils = {
        extend: function(e, n, r) {
            for (var i in n) e[i] !== t && r || (e[i] = n[i]);
            return e
        },
        hasParent: function(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        },
        getCenter: function(e) {
            for (var t = [], n = [], r = 0, i = e.length; i > r; r++) t.push(e[r].pageX), n.push(e[r].pageY);
            return {
                pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
            }
        },
        getVelocity: function(e, t, n) {
            return {
                x: Math.abs(t / e) || 0,
                y: Math.abs(n / e) || 0
            }
        },
        getAngle: function(e, t) {
            var n = t.pageY - e.pageY,
                r = t.pageX - e.pageX;
            return 180 * Math.atan2(n, r) / Math.PI
        },
        getDirection: function(e, t) {
            var n = Math.abs(e.pageX - t.pageX),
                i = Math.abs(e.pageY - t.pageY);
            return n >= i ? e.pageX - t.pageX > 0 ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT : e.pageY - t.pageY > 0 ? r.DIRECTION_UP : r.DIRECTION_DOWN
        },
        getDistance: function(e, t) {
            var n = t.pageX - e.pageX,
                r = t.pageY - e.pageY;
            return Math.sqrt(n * n + r * r)
        },
        getScale: function(e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
        },
        getRotation: function(e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
        },
        isVertical: function(e) {
            return e == r.DIRECTION_UP || e == r.DIRECTION_DOWN
        },
        stopDefaultBrowserBehavior: function(e, t) {
            var n, r = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (t && e.style) {
                for (var i = 0; r.length > i; i++)
                    for (var s in t) t.hasOwnProperty(s) && (n = s, r[i] && (n = r[i] + n.substring(0, 1).toUpperCase() + n.substring(1)), e.style[n] = t[s]);
                "none" == t.userSelect && (e.onselectstart = function() {
                    return !1
                })
            }
        }
    }, r.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function(e, t) {
            this.current || (this.stopped = !1, this.current = {
                inst: e,
                startEvent: r.utils.extend({}, t),
                lastEvent: !1,
                name: ""
            }, this.detect(t))
        },
        detect: function(e) {
            if (this.current && !this.stopped) {
                e = this.extendEventData(e);
                for (var t = this.current.inst.options, n = 0, i = this.gestures.length; i > n; n++) {
                    var s = this.gestures[n];
                    if (!this.stopped && t[s.name] !== !1 && s.handler.call(s, e, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = e), e.eventType == r.EVENT_END && !e.touches.length - 1 && this.stopDetect(), e
            }
        },
        stopDetect: function() {
            this.previous = r.utils.extend({}, this.current), this.current = null, this.stopped = !0
        },
        extendEventData: function(e) {
            var t = this.current.startEvent;
            if (t && (e.touches.length != t.touches.length || e.touches === t.touches)) {
                t.touches = [];
                for (var n = 0, i = e.touches.length; i > n; n++) t.touches.push(r.utils.extend({}, e.touches[n]))
            }
            var s = e.timeStamp - t.timeStamp,
                o = e.center.pageX - t.center.pageX,
                u = e.center.pageY - t.center.pageY,
                a = r.utils.getVelocity(s, o, u);
            return r.utils.extend(e, {
                deltaTime: s,
                deltaX: o,
                deltaY: u,
                velocityX: a.x,
                velocityY: a.y,
                distance: r.utils.getDistance(t.center, e.center),
                angle: r.utils.getAngle(t.center, e.center),
                direction: r.utils.getDirection(t.center, e.center),
                scale: r.utils.getScale(t.touches, e.touches),
                rotation: r.utils.getRotation(t.touches, e.touches),
                startEvent: t
            }), e
        },
        register: function(e) {
            var n = e.defaults || {};
            return n[e.name] === t && (n[e.name] = !0), r.utils.extend(r.defaults, n, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
                return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
            }), this.gestures
        }
    }, r.gestures = r.gestures || {}, r.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function(e, t) {
            switch (e.eventType) {
                case r.EVENT_START:
                    clearTimeout(this.timer), r.detection.current.name = this.name, this.timer = setTimeout(function() {
                        "hold" == r.detection.current.name && t.trigger("hold", e)
                    }, t.options.hold_timeout);
                    break;
                case r.EVENT_MOVE:
                    e.distance > t.options.hold_threshold && clearTimeout(this.timer);
                    break;
                case r.EVENT_END:
                    clearTimeout(this.timer)
            }
        }
    }, r.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function(e, t) {
            if (e.eventType == r.EVENT_END) {
                var n = r.detection.previous,
                    i = !1;
                if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance) return;
                n && "tap" == n.name && e.timeStamp - n.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), i = !0), (!i || t.options.tap_always) && (r.detection.current.name = "tap", t.trigger(r.detection.current.name, e))
            }
        }
    }, r.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: .7
        },
        handler: function(e, t) {
            if (e.eventType == r.EVENT_END) {
                if (t.options.swipe_max_touches > 0 && e.touches.length > t.options.swipe_max_touches) return;
                (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
            }
        }
    }, r.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function(e, n) {
            if (r.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", e), this.triggered = !1, t;
            if (!(n.options.drag_max_touches > 0 && e.touches.length > n.options.drag_max_touches)) switch (e.eventType) {
                case r.EVENT_START:
                    this.triggered = !1;
                    break;
                case r.EVENT_MOVE:
                    if (e.distance < n.options.drag_min_distance && r.detection.current.name != this.name) return;
                    r.detection.current.name = this.name, (r.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
                    var i = r.detection.current.lastEvent.direction;
                    e.drag_locked_to_axis && i !== e.direction && (e.direction = r.utils.isVertical(i) ? 0 > e.deltaY ? r.DIRECTION_UP : r.DIRECTION_DOWN : 0 > e.deltaX ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT), this.triggered || (n.trigger(this.name + "start", e), this.triggered = !0), n.trigger(this.name, e), n.trigger(this.name + e.direction, e), (n.options.drag_block_vertical && r.utils.isVertical(e.direction) || n.options.drag_block_horizontal && !r.utils.isVertical(e.direction)) && e.preventDefault();
                    break;
                case r.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", e), this.triggered = !1
            }
        }
    }, r.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function(e, n) {
            if (r.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", e), this.triggered = !1, t;
            if (!(2 > e.touches.length)) switch (n.options.transform_always_block && e.preventDefault(), e.eventType) {
                case r.EVENT_START:
                    this.triggered = !1;
                    break;
                case r.EVENT_MOVE:
                    var i = Math.abs(1 - e.scale),
                        s = Math.abs(e.rotation);
                    if (n.options.transform_min_scale > i && n.options.transform_min_rotation > s) return;
                    r.detection.current.name = this.name, this.triggered || (n.trigger(this.name + "start", e), this.triggered = !0), n.trigger(this.name, e), s > n.options.transform_min_rotation && n.trigger("rotate", e), i > n.options.transform_min_scale && (n.trigger("pinch", e), n.trigger("pinch" + (1 > e.scale ? "in" : "out"), e));
                    break;
                case r.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", e), this.triggered = !1
            }
        }
    }, r.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function(e, n) {
            return n.options.prevent_mouseevents && e.pointerType == r.POINTER_MOUSE ? (e.stopDetect(), t) : (n.options.prevent_default && e.preventDefault(), e.eventType == r.EVENT_START && n.trigger(this.name, e), t)
        }
    }, r.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function(e, t) {
            e.eventType == r.EVENT_END && t.trigger(this.name, e)
        }
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = r : (e.Hammer = r, "function" == typeof e.define && e.define.amd && e.define("hammer", [], function() {
        return r
    }))
})(this),
function(e, t) {
    "use strict";
    e !== t && (Hammer.event.bindDom = function(n, r, i) {
        e(n).on(r, function(e) {
            var n = e.originalEvent || e;
            n.pageX === t && (n.pageX = e.pageX, n.pageY = e.pageY), n.target || (n.target = e.target), n.which === t && (n.which = n.button), n.preventDefault || (n.preventDefault = e.preventDefault), n.stopPropagation || (n.stopPropagation = e.stopPropagation), i.call(this, n)
        })
    }, Hammer.Instance.prototype.on = function(t, n) {
        return e(this.element).on(t, n)
    }, Hammer.Instance.prototype.off = function(t, n) {
        return e(this.element).off(t, n)
    }, Hammer.Instance.prototype.trigger = function(t, n) {
        var r = e(this.element);
        return r.has(n.target).length && (r = e(n.target)), r.trigger({
            type: t,
            gesture: n
        })
    }, e.fn.hammer = function(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("hammer");
            r ? r && t && Hammer.utils.extend(r.options, t) : n.data("hammer", new Hammer(this, t || {}))
        })
    })
}(window.jQuery || window.Zepto);
(function(e) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
(function(e, t, n) {
    e.fn.jScrollPane = function(r) {
        function i(r, i) {
            function K(t) {
                var i, o, a, w, E, x, T = !1,
                    C = !1;
                s = t;
                if (u === n) {
                    E = r.scrollTop();
                    x = r.scrollLeft();
                    r.css({
                        overflow: "hidden",
                        padding: 0
                    });
                    f = r.innerWidth() + R;
                    l = r.innerHeight();
                    r.width(f);
                    u = e('<div class="jspPane" />').css("padding", q).append(r.children());
                    h = e('<div class="jspContainer" />').css({
                        width: f + "px",
                        height: l + "px"
                    }).append(u).appendTo(r)
                } else {
                    r.css("width", "");
                    T = s.stickToBottom && yt();
                    C = s.stickToRight && bt();
                    w = r.innerWidth() + R != f || r.outerHeight() != l;
                    if (w) {
                        f = r.innerWidth() + R;
                        l = r.innerHeight();
                        h.css({
                            width: f + "px",
                            height: l + "px"
                        })
                    }
                    if (!w && U == p && u.outerHeight() == d) {
                        r.width(f);
                        return
                    }
                    U = p;
                    u.css("width", "");
                    r.width(f);
                    h.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                u.css("overflow", "auto");
                t.contentWidth ? p = t.contentWidth : p = u[0].scrollWidth;
                d = u[0].scrollHeight;
                u.css("overflow", "");
                v = p / f;
                m = d / l;
                g = m > 1;
                y = v > 1;
                if (!y && !g) {
                    r.removeClass("jspScrollable");
                    u.css({
                        top: 0,
                        width: h.width() - R
                    });
                    Et();
                    Tt();
                    Ct();
                    st()
                } else {
                    r.addClass("jspScrollable");
                    i = s.maintainPosition && (S || N);
                    if (i) {
                        o = mt();
                        a = gt()
                    }
                    Q();
                    Y();
                    et();
                    if (i) {
                        dt(C ? p - f : o, !1);
                        pt(T ? d - l : a, !1)
                    }
                    xt();
                    wt();
                    At();
                    s.enableKeyboardNavigation && Nt();
                    s.clickOnTrack && it();
                    kt();
                    s.hijackInternalLinks && Lt()
                }
                s.autoReinitialise && !I ? I = setInterval(function() {
                    K(s)
                }, s.autoReinitialiseDelay) : !s.autoReinitialise && I && clearInterval(I);
                E && r.scrollTop(0) && pt(E, !1);
                x && r.scrollLeft(0) && dt(x, !1);
                r.trigger("jsp-initialised", [y || g])
            }

            function Q() {
                if (g) {
                    h.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />')));
                    C = h.find(">.jspVerticalBar");
                    k = C.find(">.jspTrack");
                    w = k.find(">.jspDrag");
                    if (s.showArrows) {
                        M = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", nt(0, -1)).bind("click.jsp", St);
                        _ = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", nt(0, 1)).bind("click.jsp", St);
                        if (s.arrowScrollOnHover) {
                            M.bind("mouseover.jsp", nt(0, -1, M));
                            _.bind("mouseover.jsp", nt(0, 1, _))
                        }
                        tt(k, s.verticalArrowPositions, M, _)
                    }
                    A = l;
                    h.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        A -= e(this).outerHeight()
                    });
                    w.hover(function() {
                        w.addClass("jspHover")
                    }, function() {
                        w.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", St);
                        w.addClass("jspActive");
                        var n = t.pageY - w.position().top;
                        e("html").bind("mousemove.jsp", function(e) {
                            ut(e.pageY - n, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", ot);
                        return !1
                    });
                    G()
                }
            }

            function G() {
                k.height(A + "px");
                S = 0;
                L = s.verticalGutter + k.outerWidth();
                u.width(f - L - R);
                try {
                    C.position().left === 0 && u.css("margin-left", L + "px")
                } catch (e) {}
            }

            function Y() {
                if (y) {
                    h.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />')));
                    D = h.find(">.jspHorizontalBar");
                    P = D.find(">.jspTrack");
                    x = P.find(">.jspDrag");
                    if (s.showArrows) {
                        j = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", nt(-1, 0)).bind("click.jsp", St);
                        F = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", nt(1, 0)).bind("click.jsp", St);
                        if (s.arrowScrollOnHover) {
                            j.bind("mouseover.jsp", nt(-1, 0, j));
                            F.bind("mouseover.jsp", nt(1, 0, F))
                        }
                        tt(P, s.horizontalArrowPositions, j, F)
                    }
                    x.hover(function() {
                        x.addClass("jspHover")
                    }, function() {
                        x.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", St);
                        x.addClass("jspActive");
                        var n = t.pageX - x.position().left;
                        e("html").bind("mousemove.jsp", function(e) {
                            ft(e.pageX - n, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", ot);
                        return !1
                    });
                    H = h.innerWidth();
                    Z()
                }
            }

            function Z() {
                h.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    H -= e(this).outerWidth()
                });
                P.width(H + "px");
                N = 0
            }

            function et() {
                if (y && g) {
                    var t = P.outerHeight(),
                        n = k.outerWidth();
                    A -= t;
                    e(D).find(">.jspCap:visible,>.jspArrow").each(function() {
                        H += e(this).outerWidth()
                    });
                    H -= n;
                    l -= n;
                    f -= t;
                    P.parent().append(e('<div class="jspCorner" />').css("width", t + "px"));
                    G();
                    Z()
                }
                y && u.width(h.outerWidth() - R + "px");
                d = u.outerHeight();
                m = d / l;
                if (y) {
                    B = Math.ceil(1 / v * H);
                    B > s.horizontalDragMaxWidth ? B = s.horizontalDragMaxWidth : B < s.horizontalDragMinWidth && (B = s.horizontalDragMinWidth);
                    x.width(B + "px");
                    T = H - B;
                    lt(N)
                }
                if (g) {
                    O = Math.ceil(1 / m * A);
                    O > s.verticalDragMaxHeight ? O = s.verticalDragMaxHeight : O < s.verticalDragMinHeight && (O = s.verticalDragMinHeight);
                    w.height(O + "px");
                    E = A - O;
                    at(S)
                }
            }

            function tt(e, t, n, r) {
                var i = "before",
                    s = "after",
                    o;
                t == "os" && (t = /Mac/.test(navigator.platform) ? "after" : "split");
                if (t == i) s = t;
                else if (t == s) {
                    i = t;
                    o = n;
                    n = r;
                    r = o
                }
                e[i](n)[s](r)
            }

            function nt(e, t, n) {
                return function() {
                    rt(e, t, this, n);
                    this.blur();
                    return !1
                }
            }

            function rt(t, n, r, i) {
                r = e(r).addClass("jspActive");
                var u, a, f = !0,
                    l = function() {
                        t !== 0 && o.scrollByX(t * s.arrowButtonSpeed);
                        n !== 0 && o.scrollByY(n * s.arrowButtonSpeed);
                        a = setTimeout(l, f ? s.initialDelay : s.arrowRepeatFreq);
                        f = !1
                    };
                l();
                u = i ? "mouseout.jsp" : "mouseup.jsp";
                i = i || e("html");
                i.bind(u, function() {
                    r.removeClass("jspActive");
                    a && clearTimeout(a);
                    a = null;
                    i.unbind(u)
                })
            }

            function it() {
                st();
                g && k.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                        var r = e(this),
                            i = r.offset(),
                            u = t.pageY - i.top - S,
                            a, f = !0,
                            h = function() {
                                var e = r.offset(),
                                    n = t.pageY - e.top - O / 2,
                                    i = l * s.scrollPagePercent,
                                    c = E * i / (d - l);
                                if (u < 0) S - c > n ? o.scrollByY(-i) : ut(n);
                                else {
                                    if (!(u > 0)) {
                                        p();
                                        return
                                    }
                                    S + c < n ? o.scrollByY(i) : ut(n)
                                }
                                a = setTimeout(h, f ? s.initialDelay : s.trackClickRepeatFreq);
                                f = !1
                            },
                            p = function() {
                                a && clearTimeout(a);
                                a = null;
                                e(document).unbind("mouseup.jsp", p)
                            };
                        h();
                        e(document).bind("mouseup.jsp", p);
                        return !1
                    }
                });
                y && P.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                        var r = e(this),
                            i = r.offset(),
                            u = t.pageX - i.left - N,
                            a, l = !0,
                            h = function() {
                                var e = r.offset(),
                                    n = t.pageX - e.left - B / 2,
                                    i = f * s.scrollPagePercent,
                                    c = T * i / (p - f);
                                if (u < 0) N - c > n ? o.scrollByX(-i) : ft(n);
                                else {
                                    if (!(u > 0)) {
                                        d();
                                        return
                                    }
                                    N + c < n ? o.scrollByX(i) : ft(n)
                                }
                                a = setTimeout(h, l ? s.initialDelay : s.trackClickRepeatFreq);
                                l = !1
                            },
                            d = function() {
                                a && clearTimeout(a);
                                a = null;
                                e(document).unbind("mouseup.jsp", d)
                            };
                        h();
                        e(document).bind("mouseup.jsp", d);
                        return !1
                    }
                })
            }

            function st() {
                P && P.unbind("mousedown.jsp");
                k && k.unbind("mousedown.jsp")
            }

            function ot() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                w && w.removeClass("jspActive");
                x && x.removeClass("jspActive")
            }

            function ut(e, t) {
                if (!g) return;
                e < 0 ? e = 0 : e > E && (e = E);
                t === n && (t = s.animateScroll);
                if (t) o.animate(w, "top", e, at);
                else {
                    w.css("top", e);
                    at(e)
                }
            }

            function at(e) {
                e === n && (e = w.position().top);
                h.scrollTop(0);
                S = e;
                var t = S === 0,
                    i = S == E,
                    s = e / E,
                    o = -s * (d - l);
                if (z != t || X != i) {
                    z = t;
                    X = i;
                    r.trigger("jsp-arrow-change", [z, X, W, V])
                }
                ct(t, i);
                u.css("top", o);
                r.trigger("jsp-scroll-y", [-o, t, i]).trigger("scroll")
            }

            function ft(e, t) {
                if (!y) return;
                e < 0 ? e = 0 : e > T && (e = T);
                t === n && (t = s.animateScroll);
                if (t) o.animate(x, "left", e, lt);
                else {
                    x.css("left", e);
                    lt(e)
                }
            }

            function lt(e) {
                e === n && (e = x.position().left);
                h.scrollTop(0);
                N = e;
                var t = N === 0,
                    i = N == T,
                    s = e / T,
                    o = -s * (p - f);
                if (W != t || V != i) {
                    W = t;
                    V = i;
                    r.trigger("jsp-arrow-change", [z, X, W, V])
                }
                ht(t, i);
                u.css("left", o);
                r.trigger("jsp-scroll-x", [-o, t, i]).trigger("scroll")
            }

            function ct(e, t) {
                if (s.showArrows) {
                    M[e ? "addClass" : "removeClass"]("jspDisabled");
                    _[t ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function ht(e, t) {
                if (s.showArrows) {
                    j[e ? "addClass" : "removeClass"]("jspDisabled");
                    F[t ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function pt(e, t) {
                var n = e / (d - l);
                ut(n * E, t)
            }

            function dt(e, t) {
                var n = e / (p - f);
                ft(n * T, t)
            }

            function vt(t, n, r) {
                var i, o, u, a = 0,
                    c = 0,
                    p, d, v, m, g, y;
                try {
                    i = e(t)
                } catch (w) {
                    return
                }
                o = i.outerHeight();
                u = i.outerWidth();
                h.scrollTop(0);
                h.scrollLeft(0);
                while (!i.is(".jspPane")) {
                    a += i.position().top;
                    c += i.position().left;
                    i = i.offsetParent();
                    if (/^body|html$/i.test(i[0].nodeName)) return
                }
                p = gt();
                v = p + l;
                a < p || n ? g = a - s.verticalGutter : a + o > v && (g = a - l + o + s.verticalGutter);
                g && pt(g, r);
                d = mt();
                m = d + f;
                c < d || n ? y = c - s.horizontalGutter : c + u > m && (y = c - f + u + s.horizontalGutter);
                y && dt(y, r)
            }

            function mt() {
                return -u.position().left
            }

            function gt() {
                return -u.position().top
            }

            function yt() {
                var e = d - l;
                return e > 20 && e - gt() < 10
            }

            function bt() {
                var e = p - f;
                return e > 20 && e - mt() < 10
            }

            function wt() {
                h.unbind(J).bind(J, function(e, t, n, r) {
                    var i = N,
                        u = S;
                    o.scrollBy(n * s.mouseWheelSpeed, -r * s.mouseWheelSpeed, !1);
                    return i == N && u == S
                })
            }

            function Et() {
                h.unbind(J)
            }

            function St() {
                return !1
            }

            function xt() {
                u.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
                    vt(e.target, !1)
                })
            }

            function Tt() {
                u.find(":input,a").unbind("focus.jsp")
            }

            function Nt() {
                function a() {
                    var e = N,
                        r = S;
                    switch (t) {
                        case 40:
                            o.scrollByY(s.keyboardSpeed, !1);
                            break;
                        case 38:
                            o.scrollByY(-s.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            o.scrollByY(l * s.scrollPagePercent, !1);
                            break;
                        case 33:
                            o.scrollByY(-l * s.scrollPagePercent, !1);
                            break;
                        case 39:
                            o.scrollByX(s.keyboardSpeed, !1);
                            break;
                        case 37:
                            o.scrollByX(-s.keyboardSpeed, !1)
                    }
                    n = e != N || r != S;
                    return n
                }
                var t, n, i = [];
                y && i.push(D[0]);
                g && i.push(C[0]);
                u.focus(function() {
                    r.focus()
                });
                r.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(r) {
                    if (r.target !== this && (!i.length || !e(r.target).closest(i).length)) return;
                    var s = N,
                        o = S;
                    switch (r.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            t = r.keyCode;
                            a();
                            break;
                        case 35:
                            pt(d - l);
                            t = null;
                            break;
                        case 36:
                            pt(0);
                            t = null
                    }
                    n = r.keyCode == t && s != N || o != S;
                    return !n
                }).bind("keypress.jsp", function(e) {
                    e.keyCode == t && a();
                    return !n
                });
                if (s.hideFocus) {
                    r.css("outline", "none");
                    "hideFocus" in h[0] && r.attr("hideFocus", !0)
                } else {
                    r.css("outline", "");
                    "hideFocus" in h[0] && r.attr("hideFocus", !1)
                }
            }

            function Ct() {
                r.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function kt() {
                if (location.hash && location.hash.length > 1) {
                    var t, n, r = escape(location.hash.substr(1));
                    try {
                        t = e("#" + r + ', a[name="' + r + '"]')
                    } catch (i) {
                        return
                    }
                    if (t.length && u.find(r))
                        if (h.scrollTop() === 0) n = setInterval(function() {
                            if (h.scrollTop() > 0) {
                                vt(t, !0);
                                e(document).scrollTop(h.position().top);
                                clearInterval(n)
                            }
                        }, 50);
                        else {
                            vt(t, !0);
                            e(document).scrollTop(h.position().top)
                        }
                }
            }

            function Lt() {
                if (e(document.body).data("jspHijack")) return;
                e(document.body).data("jspHijack", !0);
                e(document.body).delegate("a[href*=#]", "click", function(n) {
                    var r = this.href.substr(0, this.href.indexOf("#")),
                        i = location.href,
                        s, o, u, f, l, c;
                    location.href.indexOf("#") !== -1 && (i = location.href.substr(0, location.href.indexOf("#")));
                    if (r !== i) return;
                    s = escape(this.href.substr(this.href.indexOf("#") + 1));
                    o;
                    try {
                        o = e("#" + s + ', a[name="' + s + '"]')
                    } catch (h) {
                        return
                    }
                    if (!o.length) return;
                    u = o.closest(".jspScrollable");
                    f = u.data("jsp");
                    f.scrollToElement(o, !0);
                    if (u[0].scrollIntoView) {
                        l = e(t).scrollTop();
                        c = o.offset().top;
                        (c < l || c > l + e(t).height()) && u[0].scrollIntoView()
                    }
                    n.preventDefault()
                })
            }

            function At() {
                var e, t, n, r, i, s = !1;
                h.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(o) {
                    var u = o.originalEvent.touches[0];
                    e = mt();
                    t = gt();
                    n = u.pageX;
                    r = u.pageY;
                    i = !1;
                    s = !0
                }).bind("touchmove.jsp", function(u) {
                    if (!s) return;
                    var a = u.originalEvent.touches[0],
                        f = N,
                        l = S;
                    o.scrollTo(e + n - a.pageX, t + r - a.pageY);
                    i = i || Math.abs(n - a.pageX) > 5 || Math.abs(r - a.pageY) > 5;
                    return f == N && l == S
                }).bind("touchend.jsp", function(e) {
                    s = !1
                }).bind("click.jsp-touchclick", function(e) {
                    if (i) {
                        i = !1;
                        return !1
                    }
                })
            }

            function Ot() {
                var e = gt(),
                    t = mt();
                r.removeClass("jspScrollable").unbind(".jsp");
                r.replaceWith($.append(u.children()));
                $.scrollTop(e);
                $.scrollLeft(t);
                I && clearInterval(I)
            }
            var s, o = this,
                u, f, l, h, p, d, v, m, g, y, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z = !0,
                W = !0,
                X = !1,
                V = !1,
                $ = r.clone(!1, !1).empty(),
                J = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            q = r.css("paddingTop") + " " + r.css("paddingRight") + " " + r.css("paddingBottom") + " " + r.css("paddingLeft");
            R = (parseInt(r.css("paddingLeft"), 10) || 0) + (parseInt(r.css("paddingRight"), 10) || 0);
            e.extend(o, {
                reinitialise: function(t) {
                    t = e.extend({}, s, t);
                    K(t)
                },
                scrollToElement: function(e, t, n) {
                    vt(e, t, n)
                },
                scrollTo: function(e, t, n) {
                    dt(e, n);
                    pt(t, n)
                },
                scrollToX: function(e, t) {
                    dt(e, t)
                },
                scrollToY: function(e, t) {
                    pt(e, t)
                },
                scrollToPercentX: function(e, t) {
                    dt(e * (p - f), t)
                },
                scrollToPercentY: function(e, t) {
                    pt(e * (d - l), t)
                },
                scrollBy: function(e, t, n) {
                    o.scrollByX(e, n);
                    o.scrollByY(t, n)
                },
                scrollByX: function(e, t) {
                    var n = mt() + Math[e < 0 ? "floor" : "ceil"](e),
                        r = n / (p - f);
                    ft(r * T, t)
                },
                scrollByY: function(e, t) {
                    var n = gt() + Math[e < 0 ? "floor" : "ceil"](e),
                        r = n / (d - l);
                    ut(r * E, t)
                },
                positionDragX: function(e, t) {
                    ft(e, t)
                },
                positionDragY: function(e, t) {
                    ut(e, t)
                },
                animate: function(e, t, n, r) {
                    var i = {};
                    i[t] = n;
                    e.animate(i, {
                        duration: s.animateDuration,
                        easing: s.animateEase,
                        queue: !1,
                        step: r
                    })
                },
                getContentPositionX: function() {
                    return mt()
                },
                getContentPositionY: function() {
                    return gt()
                },
                getContentWidth: function() {
                    return p
                },
                getContentHeight: function() {
                    return d
                },
                getPercentScrolledX: function() {
                    return mt() / (p - f)
                },
                getPercentScrolledY: function() {
                    return gt() / (d - l)
                },
                getIsScrollableH: function() {
                    return y
                },
                getIsScrollableV: function() {
                    return g
                },
                getContentPane: function() {
                    return u
                },
                scrollToBottom: function(e) {
                    ut(E, e)
                },
                hijackInternalLinks: e.noop,
                destroy: function() {
                    Ot()
                }
            });
            K(i)
        }
        r = e.extend({}, e.fn.jScrollPane.defaults, r);
        e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            r[this] = r[this] || r.speed
        });
        return this.each(function() {
            var t = e(this),
                n = t.data("jsp");
            if (n) n.reinitialise(r);
            else {
                e("script", t).filter('[type="text/javascript"],:not([type])').remove();
                n = new i(t, r);
                t.data("jsp", n)
            }
        })
    };
    e.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: n,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
})(jQuery, this);
(function(e) {
    "use strict";

    function t() {}

    function n(e, t) {
        if (i) return t.indexOf(e);
        for (var n = t.length; n--;)
            if (t[n] === e) return n;
        return -1
    }
    var r = t.prototype,
        i = Array.prototype.indexOf ? !0 : !1;
    r._getEvents = function() {
        return this._events || (this._events = {})
    }, r.getListeners = function(e) {
        var t, n, r = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else t = r[e] || (r[e] = []);
        return t
    }, r.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, r.addListener = function(e, t) {
        var r, i = this.getListenersAsObject(e);
        for (r in i) i.hasOwnProperty(r) && -1 === n(t, i[r]) && i[r].push(t);
        return this
    }, r.on = r.addListener, r.defineEvent = function(e) {
        return this.getListeners(e), this
    }, r.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, r.removeListener = function(e, t) {
        var r, i, s = this.getListenersAsObject(e);
        for (i in s) s.hasOwnProperty(i) && (r = n(t, s[i]), -1 !== r && s[i].splice(r, 1));
        return this
    }, r.off = r.removeListener, r.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, r.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, r.manipulateListeners = function(e, t, n) {
        var r, i, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (r = n.length; r--;) s.call(this, t, n[r]);
        else
            for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
        return this
    }, r.removeEvent = function(e) {
        var t, n = typeof e,
            r = this._getEvents();
        if ("string" === n) delete r[e];
        else if ("object" === n)
            for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else delete this._events;
        return this
    }, r.emitEvent = function(e, t) {
        var n, r, i, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (n = s[r].length; n--;) i = t ? s[r][n].apply(null, t) : s[r][n](), i === !0 && this.removeListener(e, s[r][n]);
        return this
    }, r.trigger = r.emitEvent, r.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, "function" == typeof define && define.amd ? define(function() {
        return t
    }) : e.EventEmitter = t
})(this),
function(e) {
    "use strict";
    var t = document.documentElement,
        n = function() {};
    t.addEventListener ? n = function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : t.attachEvent && (n = function(t, n, r) {
        t[n + r] = r.handleEvent ? function() {
            var t = e.event;
            t.target = t.target || t.srcElement, r.handleEvent.call(r, t)
        } : function() {
            var n = e.event;
            n.target = n.target || n.srcElement, r.call(t, n)
        }, t.attachEvent("on" + n, t[n + r])
    });
    var r = function() {};
    t.removeEventListener ? r = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    } : t.detachEvent && (r = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (r) {
            e[t + n] = void 0
        }
    });
    var i = {
        bind: n,
        unbind: r
    };
    "function" == typeof define && define.amd ? define(i) : e.eventie = i
}(this),
function(e) {
    "use strict";

    function t(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function n(e) {
        return "[object Array]" === a.call(e)
    }

    function r(e) {
        var t = [];
        if (n(e)) t =
            e;
        else if ("number" == typeof e.length)
            for (var r = 0, i = e.length; i > r; r++) t.push(e[r]);
        else t.push(e);
        return t
    }

    function i(e, n) {
        function i(e, n, o) {
            if (!(this instanceof i)) return new i(e, n);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = r(e), this.options = t({}, this.options), "function" == typeof n ? o = n : t(this.options, n), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred);
            var u = this;
            setTimeout(function() {
                u.check()
            })
        }

        function a(e) {
            this.img = e
        }
        i.prototype = new e, i.prototype.options = {}, i.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                for (var r = n.querySelectorAll("img"), i = 0, s = r.length; s > i; i++) {
                    var o = r[i];
                    this.addImage(o)
                }
            }
        }, i.prototype.addImage = function(e) {
            var t = new a(e);
            this.images.push(t)
        }, i.prototype.check = function() {
            function e(e, i) {
                return t.options.debug && u && o.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
            }
            var t = this,
                n = 0,
                r = this.images.length;
            if (this.hasAnyBroken = !1, !r) return this.complete(), void 0;
            for (var i = 0; r > i; i++) {
                var s = this.images[i];
                s.on("confirm", e), s.check()
            }
        }, i.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e), this.jqDeferred && this.jqDeferred.notify(this, e)
        }, i.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, s && (s.fn.imagesLoaded = function(e, t) {
            var n = new i(this, e, t);
            return n.jqDeferred.promise(s(this))
        });
        var f = {};
        return a.prototype = new e, a.prototype.check = function() {
            var e = f[this.img.src];
            if (e) return this.useCached(e), void 0;
            if (f[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this.proxyImage = new Image;
            n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
        }, a.prototype.useCached = function(e) {
            if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
            else {
                var t = this;
                e.on("confirm", function(e) {
                    return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                })
            }
        }, a.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, a.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, a.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindProxyEvents()
        }, a.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindProxyEvents()
        }, a.prototype.unbindProxyEvents = function() {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
        }, i
    }
    var s = e.jQuery,
        o = e.console,
        u = o !== void 0,
        a = Object.prototype.toString;
    "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], i) : e.imagesLoaded = i(e.EventEmitter, e.eventie)
}(window);
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : typeof exports == "object" ? module.exports = e : e(jQuery)
})(function(e) {
    function o(t) {
        var n = t || window.event,
            s = [].slice.call(arguments, 1),
            o = 0,
            u = 0,
            a = 0,
            f = 0,
            l = 0,
            c;
        t = e.event.fix(n);
        t.type = "mousewheel";
        n.wheelDelta && (o = n.wheelDelta);
        n.detail && (o = n.detail * -1);
        if (n.deltaY) {
            a = n.deltaY * -1;
            o = a
        }
        if (n.deltaX) {
            u = n.deltaX;
            o = u * -1
        }
        n.wheelDeltaY !== undefined && (a = n.wheelDeltaY);
        n.wheelDeltaX !== undefined && (u = n.wheelDeltaX * -1);
        f = Math.abs(o);
        if (!r || f < r) r = f;
        l = Math.max(Math.abs(a), Math.abs(u));
        if (!i || l < i) i = l;
        c = o > 0 ? "floor" : "ceil";
        o = Math[c](o / r);
        u = Math[c](u / i);
        a = Math[c](a / i);
        s.unshift(t, o, u, a);
        return (e.event.dispatch || e.event.handle).apply(this, s)
    }
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        r, i;
    if (e.event.fixHooks)
        for (var s = t.length; s;) e.event.fixHooks[t[--s]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = n.length; e;) this.addEventListener(n[--e], o, !1);
            else this.onmousewheel = o
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = n.length; e;) this.removeEventListener(n[--e], o, !1);
            else this.onmousewheel = null
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});
(function(e) {
    "use strict";

    function t(e) {
        if (e) {
            if ("string" == typeof r[e]) return e;
            e = e.charAt(0).toUpperCase() + e.slice(1);
            for (var t, s = 0, o = n.length; o > s; s++)
                if (t = n[s] + e, "string" == typeof r[t]) return t
        }
    }
    var n = "Webkit Moz ms Ms O".split(" "),
        r = document.documentElement.style;
    "function" == typeof define && define.amd ? define(function() {
        return t
    }) : e.getStyleProperty = t
})(window),
function(e) {
    "use strict";

    function t(e) {
        var t = parseFloat(e),
            n = -1 === e.indexOf("%") && !isNaN(t);
        return n && t
    }

    function n() {
        for (var e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, t = 0, n = o.length; n > t; t++) {
            var r = o[t];
            e[r] = 0
        }
        return e
    }

    function r(e) {
        function r(e) {
            if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var r = s(e);
                if ("none" === r.display) return n();
                var f = {};
                f.width = e.offsetWidth, f.height = e.offsetHeight;
                for (var l = f.isBorderBox = !!u && !!r[u] && "border-box" === r[u], c = 0, h = o.length; h > c; c++) {
                    var p = o[c],
                        d = r[p],
                        v = parseFloat(d);
                    f[p] = isNaN(v) ? 0 : v
                }
                var m = f.paddingLeft + f.paddingRight,
                    g = f.paddingTop + f.paddingBottom,
                    y = f.marginLeft + f.marginRight,
                    b = f.marginTop + f.marginBottom,
                    w = f.borderLeftWidth + f.borderRightWidth,
                    E = f.borderTopWidth + f.borderBottomWidth,
                    S = l && i,
                    x = t(r.width);
                x !== !1 && (f.width = x + (S ? 0 : m + w));
                var T = t(r.height);
                return T !== !1 && (f.height = T + (S ? 0 : g + E)), f.innerWidth = f.width - (m + w), f.innerHeight = f.height - (g + E), f.outerWidth = f.width + y, f.outerHeight = f.height + b, f
            }
        }
        var i, u = e("boxSizing");
        return function() {
            if (u) {
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[u] = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var r = s(e);
                i = 200 === t(r.width), n.removeChild(e)
            }
        }(), r
    }
    var i = document.defaultView,
        s = i && i.getComputedStyle ? function(e) {
            return i.getComputedStyle(e, null)
        } : function(e) {
            return e.currentStyle
        },
        o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], r) : e.getSize = r(e.getStyleProperty)
}(window),
function(e) {
    "use strict";
    var t = document.documentElement,
        n = function() {};
    t.addEventListener ? n = function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : t.attachEvent && (n = function(t, n, r) {
        t[n + r] = r.handleEvent ? function() {
            var t = e.event;
            t.target = t.target || t.srcElement, r.handleEvent.call(r, t)
        } : function() {
            var n = e.event;
            n.target = n.target || n.srcElement, r.call(t, n)
        }, t.attachEvent("on" + n, t[n + r])
    });
    var r = function() {};
    t.removeEventListener ? r = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    } : t.detachEvent && (r = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (r) {
            e[t + n] = void 0
        }
    });
    var i = {
        bind: n,
        unbind: r
    };
    "function" == typeof define && define.amd ? define(i) : e.eventie = i
}(this),
function(e) {
    "use strict";

    function t(e) {
        "function" == typeof e && (t.isReady ? e() : s.push(e))
    }

    function n(e) {
        var n = "readystatechange" === e.type && "complete" !== i.readyState;
        if (!t.isReady && !n) {
            t.isReady = !0;
            for (var r = 0, u = s.length; u > r; r++) {
                var a = s[r];
                a()
            }
        }
    }

    function r(r) {
        return r.bind(i, "DOMContentLoaded", n), r.bind(i, "readystatechange", n), r.bind(e, "load", n), t
    }
    var i = e.document,
        s = [];
    t.isReady = !1, "function" == typeof define && define.amd ? define(["eventie/eventie"], r) : e.docReady = r(e.eventie)
}(this),
function() {
    "use strict";

    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }
    var n = e.prototype;
    n.getListeners = function(e) {
        var t, n, r = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else t = r[e] || (r[e] = []);
        return t
    }, n.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, n.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, n.addListener = function(e, n) {
        var r, i = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (r in i) i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, n.on = n.addListener, n.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, n.once = n.addOnceListener, n.defineEvent = function(e) {
        return this.getListeners(e), this
    }, n.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, n.removeListener = function(e, n) {
        var r, i, s = this.getListenersAsObject(e);
        for (i in s) s.hasOwnProperty(i) && (r = t(s[i], n), -1 !== r && s[i].splice(r, 1));
        return this
    }, n.off = n.removeListener, n.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, n.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, n.manipulateListeners = function(e, t, n) {
        var r, i, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (r = n.length; r--;) s.call(this, t, n[r]);
        else
            for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
        return this
    }, n.removeEvent = function(e) {
        var t, n = typeof e,
            r = this._getEvents();
        if ("string" === n) delete r[e];
        else if ("object" === n)
            for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else delete this._events;
        return this
    }, n.emitEvent = function(e, t) {
        var n, r, i, s, o = this.getListenersAsObject(e);
        for (i in o)
            if (o.hasOwnProperty(i))
                for (r = o[i].length; r--;) n = o[i][r], s = n.listener.apply(this, t || []), (s === this._getOnceReturnValue() || n.once === !0) && this.removeListener(e, o[i][r].listener);
        return this
    }, n.trigger = n.emitEvent, n.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, n.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this),
    function(e) {
        "use strict";

        function t() {}

        function n(e) {
            function n(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
                })
            }

            function i(t, n) {
                e.fn[t] = function(i) {
                    if ("string" == typeof i) {
                        for (var o = r.call(arguments, 1), u = 0, a = this.length; a > u; u++) {
                            var f = this[u],
                                l = e.data(f, t);
                            if (l)
                                if (e.isFunction(l[i]) && "_" !== i.charAt(0)) {
                                    var c = l[i].apply(l, o);
                                    if (void 0 !== c) return c
                                } else s("no such method '" + i + "' for " + t + " instance");
                            else s("cannot call methods on " + t + " prior to initialization; " + "attempted to call '" + i + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var r = e.data(this, t);
                        r ? (r.option(i), r._init()) : (r = new n(this, i), e.data(this, t, r))
                    })
                }
            }
            if (e) {
                var s = "undefined" == typeof console ? t : function(e) {
                    console.error(e)
                };
                e.bridget = function(e, t) {
                    n(t), i(e, t)
                }
            }
        }
        var r = Array.prototype.slice;
        "function" == typeof define && define.amd ? define(["jquery"], n) : n(e.jQuery)
    }(window),
    function(e, t) {
        "use strict";

        function n(e, t) {
            return e[u](t)
        }

        function r(e) {
            if (!e.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(e)
            }
        }

        function i(e, t) {
            r(e);
            for (var n = e.parentNode.querySelectorAll(t), i = 0, s = n.length; s > i; i++)
                if (n[i] === e) return !0;
            return !1
        }

        function s(e, t) {
            return r(e), n(e, t)
        }
        var o, u = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, r = e.length; r > n; n++) {
                var i = e[n],
                    s = i + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        if (u) {
            var a = document.createElement("div"),
                f = n(a, "div");
            o = f ? n : s
        } else o = i;
        "function" == typeof define && define.amd ? define(function() {
            return o
        }) : window.matchesSelector = o
    }(this, Element.prototype),
    function(e) {
        "use strict";

        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e, n, r) {
            function s(e, t) {
                e && (this.element = e, this.layout = t, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var u = r("transition"),
                a = r("transform"),
                f = u && a,
                l = !!r("perspective"),
                c = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[u],
                h = ["transform", "transition", "transitionDuration", "transitionProperty"],
                p = function() {
                    for (var e = {}, t = 0, n = h.length; n > t; t++) {
                        var i = h[t],
                            s = r(i);
                        s && s !== i && (e[i] = s)
                    }
                    return e
                }();
            t(s.prototype, e.prototype), s.prototype._create = function() {
                this.css({
                    position: "absolute"
                })
            }, s.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, s.prototype.getSize = function() {
                this.size = n(this.element)
            }, s.prototype.css = function(e) {
                var t = this.element.style;
                for (var n in e) {
                    var r = p[n] || n;
                    t[r] = e[n]
                }
            }, s.prototype.getPosition = function() {
                var e = i(this.element),
                    t = this.layout.options,
                    n = t.isOriginLeft,
                    r = t.isOriginTop,
                    s = parseInt(e[n ? "left" : "right"], 10),
                    u = parseInt(e[r ? "top" : "bottom"], 10);
                s = isNaN(s) ? 0 : s, u = isNaN(u) ? 0 : u;
                var a = this.layout.size;
                s -= n ? a.paddingLeft : a.paddingRight, u -= r ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = u
            }, s.prototype.layoutPosition = function() {
                var e = this.layout.size,
                    t = this.layout.options,
                    n = {};
                t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + "px", n.right = "") : (n.right = this.position.x + e.paddingRight + "px", n.left = ""), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + e.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
            };
            var d = l ? function(e, t) {
                return "translate3d(" + e + "px, " + t + "px, 0)"
            } : function(e, t) {
                return "translate(" + e + "px, " + t + "px)"
            };
            s.prototype._transitionTo = function(e, t) {
                this.getPosition();
                var n = this.position.x,
                    r = this.position.y,
                    i = parseInt(e, 10),
                    s = parseInt(t, 10),
                    o = i === this.position.x && s === this.position.y;
                if (this.setPosition(e, t), o && !this.isTransitioning) return this.layoutPosition(), void 0;
                var u = e - n,
                    a = t - r,
                    f = {},
                    l = this.layout.options;
                u = l.isOriginLeft ? u : -u, a = l.isOriginTop ? a : -a, f.transform = d(u, a), this.transition({
                    to: f,
                    onTransitionEnd: this.layoutPosition,
                    isCleaning: !0
                })
            }, s.prototype.goTo = function(e, t) {
                this.setPosition(e, t), this.layoutPosition()
            }, s.prototype.moveTo = f ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(e, t) {
                this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
            }, s.prototype._nonTransition = function(e) {
                this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd && e.onTransitionEnd.call(this)
            }, s.prototype._transition = function(e) {
                var t = this.layout.options.transitionDuration;
                if (!parseFloat(t)) return this._nonTransition(e), void 0;
                var n = e.to,
                    r = [];
                for (var i in n) r.push(i);
                var s = {};
                if (s.transitionProperty = r.join(","), s.transitionDuration = t, this.element.addEventListener(c, this, !1), (e.isCleaning || e.onTransitionEnd) && this.on("transitionEnd", function(t) {
                        return e.isCleaning && t._removeStyles(n), e.onTransitionEnd && e.onTransitionEnd.call(t), !0
                    }), e.from) {
                    this.css(e.from);
                    var o = this.element.offsetHeight;
                    o = null
                }
                this.css(s), this.css(n), this.isTransitioning = !0
            }, s.prototype.transition = s.prototype[u ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(e) {
                this.ontransitionend(e)
            }, s.prototype.onotransitionend = function(e) {
                this.ontransitionend(e)
            }, s.prototype.ontransitionend = function(e) {
                e.target === this.element && (this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1, this.emitEvent("transitionEnd", [this]))
            }, s.prototype._removeStyles = function(e) {
                var t = {};
                for (var n in e) t[n] = "";
                this.css(t)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return s.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, s.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, s.prototype.remove = u ? function() {
                var e = this;
                this.on("transitionEnd", function() {
                    return e.removeElem(), !0
                }), this.hide()
            } : s.prototype.removeElem, s.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0
                })
            }, s.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: function() {
                        this.css({
                            display: "none"
                        })
                    }
                })
            }, s.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, s
        }
        var r = document.defaultView,
            i = r && r.getComputedStyle ? function(e) {
                return r.getComputedStyle(e, null)
            } : function(e) {
                return e.currentStyle
            };
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (e.Outlayer = {}, e.Outlayer.Item = n(e.EventEmitter, e.getSize, e.getStyleProperty))
    }(window),
    function(e) {
        "use strict";

        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            return "[object Array]" === l.call(e)
        }

        function r(e) {
            var t = [];
            if (n(e)) t = e;
            else if ("number" == typeof e.length)
                for (var r = 0, i = e.length; i > r; r++) t.push(e[r]);
            else t.push(e);
            return t
        }

        function i(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, n) {
                return t + "-" + n
            }).toLowerCase()
        }

        function s(n, s, l, v, m, g) {
            function y(e, n) {
                if ("string" == typeof e && (e = o.querySelector(e)), !e || !c(e)) return u && u.error("Bad " + this.settings.namespace + " element: " + e), void 0;
                this.element = e, this.options = t({}, this.options), t(this.options, n);
                var r = ++w;
                this.element.outlayerGUID = r, E[r] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function b(e, n) {
                e.prototype[n] = t({}, y.prototype[n])
            }
            var w = 0,
                E = {};
            return y.prototype.settings = {
                namespace: "outlayer",
                item: g
            }, y.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, t(y.prototype, l.prototype), y.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, y.prototype.reloadItems = function() {
                this.items = this._getItems(this.element.children)
            }, y.prototype._getItems = function(e) {
                for (var t = this._filterFindItemElements(e), n = this.settings.item, r = [], i = 0, s = t.length; s > i; i++) {
                    var o = t[i],
                        u = new n(o, this, this.options.itemOptions);
                    r.push(u)
                }
                return r
            }, y.prototype._filterFindItemElements = function(e) {
                e = r(e);
                var t = this.options.itemSelector;
                if (!t) return e;
                for (var n = [], i = 0, s = e.length; s > i; i++) {
                    var o = e[i];
                    m(o, t) && n.push(o);
                    for (var u = o.querySelectorAll(t), a = 0, f = u.length; f > a; a++) n.push(u[a])
                }
                return n
            }, y.prototype.getItemElements = function() {
                for (var e = [], t = 0, n = this.items.length; n > t; t++) e.push(this.items[t].element);
                return e
            }, y.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0
            }, y.prototype._init = y.prototype.layout, y.prototype._resetLayout = function() {
                this.getSize()
            }, y.prototype.getSize = function() {
                this.size = v(this.element)
            }, y.prototype._getMeasurement = function(e, t) {
                var n, r = this.options[e];
                r ? ("string" == typeof r ? n = this.element.querySelector(r) : c(r) && (n = r), this[e] = n ? v(n)[t] : r) : this[e] = 0
            }, y.prototype.layoutItems = function(e, t) {
                e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
            }, y.prototype._getItemsForLayout = function(e) {
                for (var t = [], n = 0, r = e.length; r > n; n++) {
                    var i = e[n];
                    i.isIgnored || t.push(i)
                }
                return t
            }, y.prototype._layoutItems = function(e, t) {
                if (!e || !e.length) return this.emitEvent("layoutComplete", [this, e]), void 0;
                this._itemsOn(e, "layout", function() {
                    this.emitEvent("layoutComplete", [this, e])
                });
                for (var n = [], r = 0, i = e.length; i > r; r++) {
                    var s = e[r],
                        o = this._getItemLayoutPosition(s);
                    o.item = s, o.isInstant = t, n.push(o)
                }
                this._processLayoutQueue(n)
            }, y.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, y.prototype._processLayoutQueue = function(e) {
                for (var t = 0, n = e.length; n > t; t++) {
                    var r = e[t];
                    this._positionItem(r.item, r.x, r.y, r.isInstant)
                }
            }, y.prototype._positionItem = function(e, t, n, r) {
                r ? e.goTo(t, n) : e.moveTo(t, n)
            }, y.prototype._postLayout = function() {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }, y.prototype._getContainerSize = f, y.prototype._setContainerMeasure = function(e, t) {
                if (void 0 !== e) {
                    var n = this.size;
                    n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
                }
            }, y.prototype._itemsOn = function(e, t, n) {
                function r() {
                    return i++, i === s && n.call(o), !0
                }
                for (var i = 0, s = e.length, o = this, u = 0, a = e.length; a > u; u++) {
                    var f = e[u];
                    f.on(t, r)
                }
            }, y.prototype.ignore = function(e) {
                var t = this.getItem(e);
                t && (t.isIgnored = !0)
            }, y.prototype.unignore = function(e) {
                var t = this.getItem(e);
                t && delete t.isIgnored
            }, y.prototype.stamp = function(e) {
                if (e = this._find(e)) {
                    this.stamps = this.stamps.concat(e);
                    for (var t = 0, n = e.length; n > t; t++) {
                        var r = e[t];
                        this.ignore(r)
                    }
                }
            }, y.prototype.unstamp = function(e) {
                if (e = this._find(e))
                    for (var t = 0, n = e.length; n > t; t++) {
                        var r = e[t],
                            i = h(this.stamps, r); - 1 !== i && this.stamps.splice(i, 1), this.unignore(r)
                    }
            }, y.prototype._find = function(e) {
                return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = r(e)) : void 0
            }, y.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var e = 0, t = this.stamps.length; t > e; e++) {
                        var n = this.stamps[e];
                        this._manageStamp(n)
                    }
                }
            }, y.prototype._getBoundingRect = function() {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
                }
            }, y.prototype._manageStamp = f, y.prototype._getElementOffset = function(e) {
                var t = e.getBoundingClientRect(),
                    n = this._boundingRect,
                    r = v(e),
                    i = {
                        left: t.left - n.left - r.marginLeft,
                        top: t.top - n.top - r.marginTop,
                        right: n.right - t.right - r.marginRight,
                        bottom: n.bottom - t.bottom - r.marginBottom
                    };
                return i
            }, y.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, y.prototype.bindResize = function() {
                this.isResizeBound || (n.bind(e, "resize", this), this.isResizeBound = !0)
            }, y.prototype.unbindResize = function() {
                n.unbind(e, "resize", this), this.isResizeBound = !1
            }, y.prototype.onresize = function() {
                function e() {
                    t.resize()
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var t = this;
                this.resizeTimeout = setTimeout(e, 100)
            }, y.prototype.resize = function() {
                var e = v(this.element),
                    t = this.size && e;
                t && e.innerWidth === this.size.innerWidth || (this.layout(), delete this.resizeTimeout)
            }, y.prototype.addItems = function(e) {
                var t = this._getItems(e);
                if (t.length) return this.items = this.items.concat(t), t
            }, y.prototype.appended = function(e) {
                var t = this.addItems(e);
                t.length && (this.layoutItems(t, !0), this.reveal(t))
            }, y.prototype.prepended = function(e) {
                var t = this._getItems(e);
                if (t.length) {
                    var n = this.items.slice(0);
                    this.items = t.concat(n), this._resetLayout(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
                }
            }, y.prototype.reveal = function(e) {
                if (e && e.length)
                    for (var t = 0, n = e.length; n > t; t++) {
                        var r = e[t];
                        r.reveal()
                    }
            }, y.prototype.hide = function(e) {
                if (e && e.length)
                    for (var t = 0, n = e.length; n > t; t++) {
                        var r = e[t];
                        r.hide()
                    }
            }, y.prototype.getItem = function(e) {
                for (var t = 0, n = this.items.length; n > t; t++) {
                    var r = this.items[t];
                    if (r.element === e) return r
                }
            }, y.prototype.getItems = function(e) {
                if (e && e.length) {
                    for (var t = [], n = 0, r = e.length; r > n; n++) {
                        var i = e[n],
                            s = this.getItem(i);
                        s && t.push(s)
                    }
                    return t
                }
            }, y.prototype.remove = function(e) {
                e = r(e);
                var t = this.getItems(e);
                this._itemsOn(t, "remove", function() {
                    this.emitEvent("removeComplete", [this, t])
                });
                for (var n = 0, i = t.length; i > n; n++) {
                    var s = t[n];
                    s.remove();
                    var o = h(this.items, s);
                    this.items.splice(o, 1)
                }
            }, y.prototype.destroy = function() {
                var e = this.element.style;
                e.height = "", e.position = "", e.width = "";
                for (var t = 0, n = this.items.length; n > t; t++) {
                    var r = this.items[t];
                    r.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID
            }, y.data = function(e) {
                var t = e && e.outlayerGUID;
                return t && E[t]
            }, y.create = function(e, n) {
                function r() {
                    y.apply(this, arguments)
                }
                return t(r.prototype, y.prototype), b(r, "options"), b(r, "settings"), t(r.prototype.options, n), r.prototype.settings.namespace = e, r.data = y.data, r.Item = function() {
                    g.apply(this, arguments)
                }, r.Item.prototype = new g, r.prototype.settings.item = r.Item, s(function() {
                    for (var t = i(e), n = o.querySelectorAll(".js-" + t), s = "data-" + t + "-options", f = 0, l = n.length; l > f; f++) {
                        var c, h = n[f],
                            p = h.getAttribute(s);
                        try {
                            c = p && JSON.parse(p)
                        } catch (d) {
                            u && u.error("Error parsing " + s + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + d);
                            continue
                        }
                        var v = new r(h, c);
                        a && a.data(h, e, v)
                    }
                }), a && a.bridget && a.bridget(e, r), r
            }, y.Item = g, y
        }
        var o = e.document,
            u = e.console,
            a = e.jQuery,
            f = function() {},
            l = Object.prototype.toString,
            c = "object" == typeof HTMLElement ? function(e) {
                return e instanceof HTMLElement
            } : function(e) {
                return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            h = Array.prototype.indexOf ? function(e, t) {
                return e.indexOf(t)
            } : function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define(["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : e.Outlayer = s(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
    }(window),
    function(e) {
        "use strict";

        function t(e, t) {
            var r = e.create("masonry");
            return r.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var e = this.cols;
                for (this.colYs = []; e--;) this.colYs.push(0);
                this.maxY = 0
            }, r.prototype.measureColumns = function() {
                var e = this._getSizingContainer(),
                    n = this.items[0],
                    r = n && n.element;
                this.columnWidth || (this.columnWidth = r ? t(r).outerWidth : this.size.innerWidth), this.columnWidth += this.gutter, this._containerWidth = t(e).innerWidth, this.cols = Math.floor((this._containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, r.prototype._getSizingContainer = function() {
                return this.options.isFitWidth ? this.element.parentNode : this.element
            }, r.prototype._getItemLayoutPosition = function(e) {
                e.getSize();
                var t = Math.ceil(e.size.outerWidth / this.columnWidth);
                t = Math.min(t, this.cols);
                for (var r = this._getColGroup(t), s = Math.min.apply(Math, r), o = n(r, s), u = {
                        x: this.columnWidth * o,
                        y: s
                    }, a = s + e.size.outerHeight, f = this.cols + 1 - r.length, l = 0; f > l; l++) this.colYs[o + l] = a;
                return u
            }, r.prototype._getColGroup = function(e) {
                if (1 === e) return this.colYs;
                for (var t = [], n = this.cols + 1 - e, r = 0; n > r; r++) {
                    var i = this.colYs.slice(r, r + e);
                    t[r] = Math.max.apply(Math, i)
                }
                return t
            }, r.prototype._manageStamp = function(e) {
                var n = t(e),
                    r = this._getElementOffset(e),
                    i = this.options.isOriginLeft ? r.left : r.right,
                    s = i + n.outerWidth,
                    o = Math.floor(i / this.columnWidth);
                o = Math.max(0, o);
                var u = Math.floor(s / this.columnWidth);
                u = Math.min(this.cols - 1, u);
                for (var a = (this.options.isOriginTop ? r.top : r.bottom) + n.outerHeight, f = o; u >= f; f++) this.colYs[f] = Math.max(a, this.colYs[f])
            }, r.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var e = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
            }, r.prototype._getContainerFitWidth = function() {
                for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
                return (this.cols - e) * this.columnWidth - this.gutter
            }, r.prototype.resize = function() {
                var e = this._getSizingContainer(),
                    n = t(e),
                    r = this.size && n;
                r && n.innerWidth === this._containerWidth || (this.layout(), delete this.resizeTimeout)
            }, r
        }
        var n = Array.prototype.indexOf ? function(e, t) {
            return e.indexOf(t)
        } : function(e, t) {
            for (var n = 0, r = e.length; r > n; n++) {
                var i = e[n];
                if (i === t) return n
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : e.Masonry = t(e.Outlayer, e.getSize)
    }(window);
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled) return !0;
            break;
        case "input":
            if (this.deviceIsIOS && e.type === "file" || e.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(e.className)
};
FastClick.prototype.needsFocus = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case "textarea":
        case "select":
            return !0;
        case "input":
            switch (e.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
    }
};
FastClick.prototype.sendClick = function(e, t) {
    "use strict";
    var n, r;
    document.activeElement && document.activeElement !== e && document.activeElement.blur();
    r = t.changedTouches[0];
    n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null);
    n.forwardedTouchEvent = !0;
    e.dispatchEvent(n)
};
FastClick.prototype.focus = function(e) {
    "use strict";
    var t;
    if (this.deviceIsIOS && e.setSelectionRange) {
        t = e.value.length;
        e.setSelectionRange(t, t)
    } else e.focus()
};
FastClick.prototype.updateScrollParent = function(e) {
    "use strict";
    var t, n;
    t = e.fastClickScrollParent;
    if (!t || !t.contains(e)) {
        n = e;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                t = n;
                e.fastClickScrollParent = n;
                break
            }
            n = n.parentElement
        } while (n)
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
};
FastClick.prototype.getTargetElementFromEventTarget = function(e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
};
FastClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, n, r;
    if (e.targetTouches.length > 1) return !0;
    t = this.getTargetElementFromEventTarget(e.target);
    n = e.targetTouches[0];
    if (this.deviceIsIOS) {
        r = window.getSelection();
        if (r.rangeCount && !r.isCollapsed) return !0;
        if (!this.deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier) {
                e.preventDefault();
                return !1
            }
            this.lastTouchIdentifier = n.identifier;
            this.updateScrollParent(t)
        }
    }
    this.trackingClick = !0;
    this.trackingClickStart = e.timeStamp;
    this.targetElement = t;
    this.touchStartX = n.pageX;
    this.touchStartY = n.pageY;
    e.timeStamp - this.lastClickTime < 200 && e.preventDefault();
    return !0
};
FastClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t = e.changedTouches[0],
        n = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
};
FastClick.prototype.findControl = function(e) {
    "use strict";
    return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(e) {
    "use strict";
    var t, n, r, i, s, o = this.targetElement;
    if (this.touchHasMoved(e)) {
        this.trackingClick = !1;
        this.targetElement = null
    }
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < 200) {
        this.cancelNextClick = !0;
        return !0
    }
    this.lastClickTime = e.timeStamp;
    n = this.trackingClickStart;
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    if (this.deviceIsIOSWithBadTarget) {
        s = e.changedTouches[0];
        o = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || o;
        o.fastClickScrollParent = this.targetElement.fastClickScrollParent
    }
    r = o.tagName.toLowerCase();
    if (r === "label") {
        t = this.findControl(o);
        if (t) {
            this.focus(o);
            if (this.deviceIsAndroid) return !1;
            o = t
        }
    } else if (this.needsFocus(o)) {
        if (e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && r === "input") {
            this.targetElement = null;
            return !1
        }
        this.focus(o);
        if (!this.deviceIsIOS4 || r !== "select") {
            this.targetElement = null;
            e.preventDefault()
        }
        return !1
    }
    if (this.deviceIsIOS && !this.deviceIsIOS4) {
        i = o.fastClickScrollParent;
        if (i && i.fastClickLastScrollTop !== i.scrollTop) return !0
    }
    if (!this.needsClick(o)) {
        e.preventDefault();
        this.sendClick(o, e)
    }
    return !1
};
FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1;
    this.targetElement = null
};
FastClick.prototype.onMouse = function(e) {
    "use strict";
    if (!this.targetElement) return !0;
    if (e.forwardedTouchEvent) return !0;
    if (!e.cancelable) return !0;
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
        e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0;
        e.stopPropagation();
        e.preventDefault();
        return !1
    }
    return !0
};
FastClick.prototype.onClick = function(e) {
    "use strict";
    var t;
    if (this.trackingClick) {
        this.targetElement = null;
        this.trackingClick = !1;
        return !0
    }
    if (e.target.type === "submit" && e.detail === 0) return !0;
    t = this.onMouse(e);
    t || (this.targetElement = null);
    return t
};
FastClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    if (this.deviceIsAndroid) {
        e.removeEventListener("mouseover", this.onMouse, !0);
        e.removeEventListener("mousedown", this.onMouse, !0);
        e.removeEventListener("mouseup", this.onMouse, !0)
    }
    e.removeEventListener("click", this.onClick, !0);
    e.removeEventListener("touchstart", this.onTouchStart, !1);
    e.removeEventListener("touchend", this.onTouchEnd, !1);
    e.removeEventListener("touchcancel", this.onTouchCancel, !1)
};
FastClick.notNeeded = function(e) {
    "use strict";
    var t;
    if (typeof window.ontouchstart == "undefined") return !0;
    if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
        if (!FastClick.prototype.deviceIsAndroid) return !0;
        t = document.querySelector("meta[name=viewport]");
        if (t && t.content.indexOf("user-scalable=no") !== -1) return !0
    }
    return e.style.msTouchAction === "none" ? !0 : !1
};
FastClick.attach = function(e) {
    "use strict";
    return new FastClick(e)
};
if (typeof define != "undefined" && define.amd) define(function() {
    "use strict";
    return FastClick
});
else if (typeof module != "undefined" && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick
} else window.FastClick = FastClick;
(function(e, t, n) {
    "$:nomunge";
    e.scrollbarWidth = function() {
        var r, i;
        if (n === t) {
            r = e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body");
            i = r.children();
            n = i.innerWidth() - i.height(99).innerWidth();
            r.remove()
        }
        return n
    }
})(jQuery);
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function n(e) {
        return i.raw ? e : decodeURIComponent(e.replace(t, " "))
    }

    function r(e) {
        e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        e = n(e);
        try {
            return i.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    var t = /\+/g,
        i = e.cookie = function(t, s, o) {
            if (s !== undefined) {
                o = e.extend({}, i.defaults, o);
                if (typeof o.expires == "number") {
                    var u = o.expires,
                        a = o.expires = new Date;
                    a.setDate(a.getDate() + u)
                }
                s = i.json ? JSON.stringify(s) : String(s);
                return document.cookie = [i.raw ? t : encodeURIComponent(t), "=", i.raw ? s : encodeURIComponent(s), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
            }
            var f = document.cookie.split("; "),
                l = t ? undefined : {};
            for (var c = 0, h = f.length; c < h; c++) {
                var p = f[c].split("="),
                    d = n(p.shift()),
                    v = p.join("=");
                if (t && t === d) {
                    l = r(v);
                    break
                }
                t || (l[d] = r(v))
            }
            return l
        };
    i.defaults = {};
    e.removeCookie = function(t, n) {
        if (e.cookie(t) !== undefined) {
            e.cookie(t, "", e.extend({}, n, {
                expires: -1
            }));
            return !0
        }
        return !1
    }
});
(function(e, t, n) {
    function l(e) {
        var t = {},
            r = /^jQuery\d+$/;
        n.each(e.attributes, function(e, n) {
            n.specified && !r.test(n.name) && (t[n.name] = n.value)
        });
        return t
    }

    function c(e, r) {
        var i = this,
            s = n(i);
        if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
            if (s.data("placeholder-password")) {
                s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                if (e === !0) return s[0].value = r;
                s.focus()
            } else {
                i.value = "";
                s.removeClass("placeholder");
                i == t.activeElement && i.select()
            }
    }

    function h() {
        var e, t = this,
            r = n(t),
            i = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({
                            type: "text"
                        })
                    } catch (s) {
                        e = n("<input>").attr(n.extend(l(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": r,
                        "placeholder-id": i
                    }).bind("focus.placeholder", c);
                    r.data({
                        "placeholder-textinput": e,
                        "placeholder-id": i
                    }).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", i).show()
            }
            r.addClass("placeholder");
            r[0].value = r.attr("placeholder")
        } else r.removeClass("placeholder")
    }
    var r = "placeholder" in t.createElement("input"),
        i = "placeholder" in t.createElement("textarea"),
        s = n.fn,
        o = n.valHooks,
        u = n.propHooks,
        a, f;
    if (r && i) {
        f = s.placeholder = function() {
            return this
        };
        f.input = f.textarea = !0
    } else {
        f = s.placeholder = function() {
            var e = this;
            e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": c,
                "blur.placeholder": h
            }).data("placeholder-enabled", !0).trigger("blur.placeholder");
            return e
        };
        f.input = r;
        f.textarea = i;
        a = {
            get: function(e) {
                var t = n(e),
                    r = t.data("placeholder-password");
                return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, r) {
                var i = n(e),
                    s = i.data("placeholder-password");
                if (s) return s[0].value = r;
                if (!i.data("placeholder-enabled")) return e.value = r;
                if (r == "") {
                    e.value = r;
                    e != t.activeElement && h.call(e)
                } else i.hasClass("placeholder") ? c.call(e, !0, r) || (e.value = r) : e.value = r;
                return i
            }
        };
        if (!r) {
            o.input = a;
            u.value = a
        }
        if (!i) {
            o.textarea = a;
            u.value = a
        }
        n(function() {
            n(t).delegate("form", "submit.placeholder", function() {
                var e = n(".placeholder", this).each(c);
                setTimeout(function() {
                    e.each(h)
                }, 10)
            })
        });
        n(e).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        })
    }
})(this, document, jQuery);
if (!jQuery.support.cors && jQuery.ajaxTransport && window.XDomainRequest) {
    var httpRegEx = /^https?:\/\//i,
        getOrPostRegEx = /^get|post$/i,
        sameSchemeRegEx = new RegExp("^" + location.protocol, "i"),
        htmlRegEx = /text\/html/i,
        jsonRegEx = /\/json/i,
        xmlRegEx = /\/xml/i;
    jQuery.ajaxTransport("text html xml json", function(e, t, n) {
        if (e.crossDomain && e.async && getOrPostRegEx.test(e.type) && httpRegEx.test(e.url) && sameSchemeRegEx.test(e.url)) {
            var r = null,
                i = (t.dataType || "").toLowerCase();
            return {
                send: function(n, s) {
                    r = new XDomainRequest;
                    /^\d+$/.test(t.timeout) && (r.timeout = t.timeout);
                    r.ontimeout = function() {
                        s(500, "timeout")
                    };
                    r.onload = function() {
                        var e = "Content-Length: " + r.responseText.length + "\r\nContent-Type: " + r.contentType,
                            t = {
                                code: 200,
                                message: "success"
                            },
                            n = {
                                text: r.responseText
                            };
                        try {
                            if (i === "html" || htmlRegEx.test(r.contentType)) n.html = r.responseText;
                            else if (i === "json" || i !== "text" && jsonRegEx.test(r.contentType)) try {
                                n.json = jQuery.parseJSON(r.responseText)
                            } catch (o) {
                                t.code = 500;
                                t.message = "parseerror"
                            } else if (i === "xml" || i !== "text" && xmlRegEx.test(r.contentType)) {
                                var u = new ActiveXObject("Microsoft.XMLDOM");
                                u.async = !1;
                                try {
                                    u.loadXML(r.responseText)
                                } catch (o) {
                                    u = undefined
                                }
                                if (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) {
                                    t.code = 500;
                                    t.message = "parseerror";
                                    throw "Invalid XML: " + r.responseText
                                }
                                n.xml = u
                            }
                        } catch (a) {
                            throw a
                        } finally {
                            s(t.code, t.message, n, e)
                        }
                    };
                    r.onprogress = function() {};
                    r.onerror = function() {
                        s(500, "error", {
                            text: r.responseText
                        })
                    };
                    var o = "";
                    t.data && (o = jQuery.type(t.data) === "string" ? t.data : jQuery.param(t.data));
                    r.open(e.type, e.url);
                    r.send(o)
                },
                abort: function() {
                    r && r.abort()
                }
            }
        }
    })
}(function(e) {
    window.MBP = window.MBP || {};
    MBP.viewportmeta = e.querySelector && e.querySelector('meta[name="viewport"]');
    MBP.ua = navigator.userAgent;
    MBP.scaleFix = function() {
        if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
            MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            e.addEventListener("gesturestart", MBP.gestureStart, !1)
        }
    };
    MBP.gestureStart = function() {
        MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
    };
    MBP.BODY_SCROLL_TOP = !1;
    MBP.getScrollTop = function() {
        var t = window,
            n = e;
        return t.pageYOffset || n.compatMode === "CSS1Compat" && n.documentElement.scrollTop || n.body.scrollTop || 0
    };
    MBP.hideUrlBar = function() {
        var e = window;
        !location.hash && MBP.BODY_SCROLL_TOP !== !1 && e.scrollTo(0, MBP.BODY_SCROLL_TOP === 1 ? 0 : 1)
    };
    MBP.hideUrlBarOnLoad = function() {
        var e = window,
            t = e.document,
            n;
        if (!location.hash && e.addEventListener) {
            window.scrollTo(0, 1);
            MBP.BODY_SCROLL_TOP = 1;
            n = setInterval(function() {
                if (t.body) {
                    clearInterval(n);
                    MBP.BODY_SCROLL_TOP = MBP.getScrollTop();
                    MBP.hideUrlBar()
                }
            }, 15);
            e.addEventListener("load", function() {
                setTimeout(function() {
                    MBP.getScrollTop() < 20 && MBP.hideUrlBar()
                }, 0)
            })
        }
    }
})(document);
var PTT = PTT || {};
PTT.Resolutions = {
    EXTRA_LARGE: 1120,
    TABLET: 1030,
    LARGE: 1016,
    MEDIUM: 960,
    SMALL: 1,
    maxWidth: function(e) {
        return PTT.Globals.windowWidth < e
    },
    minWidth: function(e) {
        return PTT.Globals.windowWidth >= e
    }
};
PTT.Globals = {
    windowWidth: 0,
    windowHeight: 0,
    scrollTop: 0,
    $window: null,
    $body: null
};
PTT.Analytics = {
    init: function() {
        $(".track-event").on("click", function() {
            var e = $(this).data("eventdata"),
                t = e.split("/");
            PTT.Analytics.trackEvent(t[0], t[1], t[2])
        })
    },
    trackEvent: function(e, t, n) {
        _gaq && _gaq.push(["_trackEvent", e, t, n])
    }
};
PTT.NavigationManager = {
    init: function() {
        $('<div class="animation-overlay"></div>').appendTo($("#container"));
        $(".transition.from-bottom").on("click", PTT.NavigationManager.fromBottom);
        $(".transition.from-top").on("click", PTT.NavigationManager.fromTop);
        $(".transition.from-center").on("click", PTT.NavigationManager.fromCenter);
        $(".transition.from-outside").on("click", PTT.NavigationManager.fromOutside)
    },
    fromBottom: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(".animation-overlay").css({
            opacity: 0,
            top: "100%"
        }).show();
        TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            left: 0,
            top: 0,
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        });
        TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            ease: Quad.easeOut
        })
    },
    fromTop: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        PTT.MainNavigation.close();
        $(".animation-overlay").css({
            top: "-100%"
        }).show();
        TweenMax.to($(".animation-overlay"), 1, {
            left: 0,
            top: 0,
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        })
    },
    fromCenter: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(".animation-overlay").css({
            opacity: 0,
            top: "50%",
            left: "50%",
            width: 1,
            height: 1
        }).show();
        TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        });
        TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            ease: Quad.easeOut
        })
    },
    fromOutside: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(".animation-overlay").css({
            opacity: 0,
            background: "transparent",
            border: "1px solid #fff"
        }).show();
        TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            "border-top": PTT.Globals.windowHeight * .5,
            "border-bottom": PTT.Globals.windowHeight * .5,
            "border-left": PTT.Globals.windowWidth * .5,
            "border-right": PTT.Globals.windowWidth * .5,
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        });
        TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            ease: Quad.easeOut
        })
    }
};
PTT.SlideManager = {
    activated: !0,
    currentSlide: 0,
    animating: !1,
    initiatedByWheel: !1,
    initiatedByClick: !1,
    snapping: !1,
    mouseDown: !1,
    scrolledWithMouseDown: !1,
    $slides: null,
    slideCount: 0,
    $currentSlide: null,
    $newSlide: null,
    $footerActive: !1,
    firstSlide: !0,
    scrollTarget: window,
    smallScreen: !1,
    slideshowTimeout: null,
    init: function() {
        if ($(".slides").length == 0) return !1;
        PTT.SlideManager.$slides = $(".slides").find(".slide");
        PTT.SlideManager.slideCount = PTT.SlideManager.$slides.length;
        $(".slides").find("footer.bottom").append($(".main-content > footer.bottom").html());
        PTT.SlideManager.addListeners();
        !PTT.SlideManager.smallScreen && !Modernizr.touch;
        PTT.SlideManager.$slides.each(function() {
            $(this).find(".slide-background").each(function() {
                var e = $(this);
                typeof e.data("bgmobile") != "undefined" && (PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.touch ? e.css({
                    "background-image": "url(" + e.data("bgmobile") + ")"
                }) : e.css({
                    "background-image": "url(" + e.data("bg") + ")"
                }))
            });
            $(this).find("img").each(function() {
                var e = $(this);
                typeof e.data("imgsrcmobile") != "undefined" && (PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.touch ? e.attr("src", e.data("imgsrcmobile")) : e.attr("src", e.data("imgsrc")))
            })
        })
    },
    addListeners: function() {
        $(".slide-navigator li a").each(function() {
            var e = $(this).find("h3");
            $(this).data({
                titlewidth: e.outerWidth()
            });
            e.css({
                opacity: 0
            }).hide()
        });
        $(".slide-navigator li a").on("click", function(e) {
            e.preventDefault();
            if (PTT.SlideManager.smallScreen) return !1;
            var t = $(this).parent("li").index();
            console.log(t);
            PTT.SlideManager.animateTo(t, "click")
        });
        $(".slide-navigator li a").on("mouseover", function(e) {
            if (Modernizr.touch) return !0;
            var t = $(this).find("h3");
            t.css({
                display: "inline-block"
            });
            TweenMax.to(t, 1, {
                opacity: 1,
                ease: Quint.easeOut
            })
        });
        $(".slide-navigator li a").on("mouseleave", function(e) {
            if (Modernizr.touch) return !0;
            var t = $(this).find("h3");
            TweenMax.to(t, .5, {
                opacity: 0,
                ease: Quint.easeOut,
                onComplete: function() {
                    t.hide()
                }
            })
        });
        $(".slide-arrow-nav").on("click", function(e) {
            e.preventDefault();
            if (PTT.SlideManager.smallScreen) return !1;
            var t = PTT.SlideManager.currentSlide;
            PTT.SlideManager.$footerActive || ($(this).is(".down") ? PTT.SlideManager.scrollDown("click") : PTT.SlideManager.scrollUp("click"))
        });
        $(".scroll-down.button").on("click", function(e) {
            e.preventDefault();
            PTT.SlideManager.scrollDown("click")
        });
        $(window).on("keyup", function(e) {
            PTT.Footer.newsletterFormActive || (e.which == 38 ? PTT.SlideManager.scrollUp("click") : e.which == 40 && PTT.SlideManager.scrollDown("click"))
        });
        if (($("body").hasClass("frontpage") || $("body").hasClass("lookbook")) && PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
            var e = $(".touch .slides").hammer(),
                t = $(".touch .slides .featured-products").hammer();
            t.on("dragup dragdown", function(e) {
                e.gesture.stopPropagation();
                e.stopPropagation()
            });
            e.on("dragup", function(e) {
                e.gesture.preventDefault();
                PTT.SlideManager.scrollDown("click")
            });
            e.on("dragdown", function(e) {
                e.gesture.preventDefault();
                PTT.SlideManager.scrollUp("click")
            })
        }

        Modernizr.touch || $("body").mousewheel(function(e, t, n, r) {
            if ($(document).scrollTop() < $(window).height()) {  
                /**slider scroll allow, window scroll not allow**/
                if ( $(document).scrollTop() > 76 ) {
                    return !0;
                }
                if ( r < 0 && jQuery(".slides .slide").index(jQuery(".slides .slide.active")[0]) == jQuery(".slides .slide").length-1 ) {
                    return !0;
                }
                if (PTT.SlideManager.smallScreen) return !0;
                if (PTT.SlideManager.animating) return !1;
                if (PTT.FeaturedProducts.isScrolling) return !1;
                e.preventDefault();
                $("html").hasClass("lt-ie9") && (r = t);
                var i = PTT.SlideManager.currentSlide;
                r < 0 ? PTT.SlideManager.scrollDown("mousewheel") : PTT.SlideManager.scrollUp("mousewheel");
                return !1
            }

        });
        
        PTT.Globals.$window.on("resize", PTT.SlideManager.resize);
        PTT.SlideManager.resize();
        if (!PTT.SlideManager.smallScreen && !$("body").hasClass("lookbook")) {
            PTT.SlideManager.transitionIn();
            PTT.SlideManager.startSlideshow()
        }
    },
    transitionIn: function() {
        TweenMax.from($(".slide-navigator"), 1, {
            delay: 1,
            left: -100,
            ease: Quad.easeInOut
        });
        TweenMax.delayedCall(2, function() {
            PTT.SlideManager.showFeaturedProducts(PTT.SlideManager.$slides.filter(".active"))
        });
        TweenMax.delayedCall(3, function() {
            PTT.SlideManager.hideFeaturedProducts()
        })
    },
    startSlideshow: function() {
        PTT.SlideManager.slideshowTimeout = setInterval(function() {
            PTT.SlideManager.currentSlide == PTT.SlideManager.slideCount - 2 ? PTT.SlideManager.animateTo(0, "slideshow") : PTT.SlideManager.scrollDown("slideshow")
        }, 1e4)
    },
    stopSlideshow: function() {
        if (PTT.SlideManager.slideshowTimeout !== null) {
            clearInterval(PTT.SlideManager.slideshowTimeout);
            PTT.SlideManager.slideshowTimeout = null
        }
    },
    scrollUp: function(e) {
        var t = PTT.SlideManager.currentSlide;
        if (PTT.SlideManager.currentSlide == 0) {
            PTT.SlideManager.animating = !1;
            return !1
        }
        PTT.SlideManager.$footerActive || (t = PTT.SlideManager.currentSlide - 1);
        PTT.SlideManager.animateTo(t, e)
    },
    scrollDown: function(e) {
        var t = PTT.SlideManager.currentSlide;
        if (PTT.SlideManager.currentSlide == PTT.SlideManager.slideCount - 1) {
            PTT.SlideManager.animating = !1;
            return !1
        }
        PTT.SlideManager.$footerActive || (t = PTT.SlideManager.currentSlide + 1);
        PTT.SlideManager.animateTo(t, e)
    },
    slideMouseAnimation: function(e) {
        if (Modernizr.touch && PTT.SlideManager.smallScreen) return;
        var t = $(this),
            n = t.height() / 2,
            r = t.width() / 2,
            i = e.clientX - t.offset().left,
            s = e.clientY - t.offset().top,
            o = (r - i) / t.width(),
            u = (n - s) / t.height(),
            a = o * (t.width() / 18),
            f = u * (t.height() / 18);
        TweenMax.to(t.find(".slide-background"), 6, {
            x: a,
            y: f,
            z: 0,
            overwrite: 1
        })
    },
    animateTo: function(e, t) {
        if (PTT.SlideManager.animating) return !1;
        t == "mousewheel" && (PTT.SlideManager.initiatedByWheel = !0);
        t == "click" && (PTT.SlideManager.initiatedByClick = !0);
        t == "snapping" && (PTT.SlideManager.snapping = !0);
        t != "slideshow" && PTT.SlideManager.stopSlideshow();
        if (PTT.SlideManager.currentSlide == e && !PTT.SlideManager.snapping && !PTT.SlideManager.$footerActive) return !1;
        var n = e * (PTT.SlideManager.scrollTarget == window ? PTT.Globals.windowHeight : $(".slide").first().height());
        n > $(".slides").height() - PTT.Globals.windowHeight && (n = "max");
        TweenMax.killAll(!1, !1, !0);
        var r = e - PTT.SlideManager.currentSlide;
        PTT.SlideManager.animating = !0;
        PTT.SlideManager.slideOutTransition(r);
        var i = PTT.SlideManager.$slides.eq(e),
            s = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
        if (!PTT.SlideManager.smallScreen) {
            if (e != PTT.SlideManager.currentSlide) {
                s.addClass("transition-out");
                PTT.SlideManager.removeMouseAnimation(s);
                i.addClass("transition-in")
            }
            if (!i.is("footer")) {
                var o = 0;
                if (PTT.SlideManager.$footerActive) {
                    TweenMax.to(s, .9, {
                        delay: .05,
                        top: 0,
                        ease: Quad.easeOut
                    });
                    TweenMax.to($("footer.bottom"), .9, {
                        delay: .05,
                        bottom: -$("footer.bottom").outerHeight(),
                        ease: Quad.easeOut,
                        onComplete: function() {
                            PTT.SlideManager.$footerActive = !1;
                            if (e == PTT.SlideManager.currentSlide) {
                                TweenMax.killAll(!1, !1, !0);
                                PTT.SlideManager.slideTransitionComplete(i)
                            }
                        }
                    });
                    o = 0
                }
                TweenMax.delayedCall(o, function() {
                    PTT.SlideManager.resizeSlide(i);
                    $(".slide-navigator li a").trigger("mouseleave");
                    $(".slide-navigator li a.active").trigger("mouseover");
                    if (r > 0) {
                        i.find(".slide-background").css({
                            top: "10%",
                            bottom: "auto"
                        });
                        i.find(".text-overlay").css({
                            top: "70%"
                        })
                    } else if (r < 0) {
                        i.find(".slide-background").css({
                            bottom: "10%",
                            top: "auto"
                        });
                        i.find(".text-overlay").css({
                            top: "30%"
                        })
                    }
                    if (r > 0) {
                        i.addClass("down");
                        s.addClass("down");
                        TweenMax.to(i.find(".slide-background"), .9, {
                            delay: .05,
                            top: "-5%",
                            ease: Quad.easeOut
                        });
                        TweenMax.to(i.find(".text-overlay"), .9, {
                            delay: .05,
                            top: "50%",
                            ease: Quad.easeOut
                        });
                        PTT.SlideManager.slideInTransition(i);
                        TweenMax.to(s, .9, {
                            delay: .05,
                            height: "0",
                            ease: Quad.easeOut,
                            onComplete: PTT.SlideManager.slideTransitionComplete,
                            onCompleteParams: [i]
                        })
                    } else if (r < 0) {
                        i.css({
                            top: 0,
                            bottom: "auto",
                            height: 0
                        });
                        i.addClass("up");
                        s.addClass("up");
                        TweenMax.to(i.find(".text-overlay"), .9, {
                            delay: .05,
                            top: "50%",
                            ease: Quad.easeOut
                        });
                        TweenMax.to(i.find(".slide-background"), .9, {
                            delay: .05,
                            bottom: "-5%",
                            ease: Quad.easeOut
                        });
                        PTT.SlideManager.slideInTransition(i);
                        TweenMax.to(i, .9, {
                            delay: .05,
                            height: "100%",
                            ease: Quad.easeOut,
                            onComplete: PTT.SlideManager.slideTransitionComplete,
                            onCompleteParams: [i]
                        })
                    }
                })
            } else if (!PTT.SlideManager.$footerActive) {
                PTT.Footer.resize();
                TweenMax.to(s, .9, {
                    delay: .05,
                    top: -i.outerHeight(),
                    ease: Quad.easeOut
                });
                i.addClass("down").css({
                    bottom: -i.height()
                });
                TweenMax.to(i, .9, {
                    delay: .05,
                    bottom: 0,
                    ease: Quad.easeOut,
                    onComplete: PTT.SlideManager.slideTransitionComplete,
                    onCompleteParams: [i]
                })
            }
            PTT.SlideManager.updateNavigator(e)
        }
    },
    removeMouseAnimation: function(e) {
        e.hasClass("multiple") ? e.find(".block").each(function() {
            $(this).off("mousemove")
        }) : e.off("mousemove")
    },
    slideInTransition: function(e, t) {
        if (PTT.SlideManager.smallScreen) return
    },
    slideOutTransition: function(e) {
        slide_caption_effect();

        if (PTT.SlideManager.smallScreen) return;
        var t = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
        PTT.SlideManager.hideFeaturedProducts(t)
    },
    slideTransitionComplete: function(e) {
        if (!e.is("footer")) {
            PTT.SlideManager.currentSlide = e.index(".slide");
            PTT.SlideManager.$slides.removeClass("active")
        } else PTT.SlideManager.$footerActive = !0;
        PTT.SlideManager.$slides.removeClass("transition-in transition-out up down");
        e.addClass("active");
        PTT.SlideManager.initiatedByWheel ? TweenMax.delayedCall(.5, PTT.SlideManager.readyForNewAnimation) : PTT.SlideManager.readyForNewAnimation();
        PTT.SlideManager.pulsateFeaturedProducts();
        $(".slide-navigator li a").trigger("mouseleave");
        PTT.SlideManager.snapping = !1;
        PTT.SlideManager.initiatedByWheel = !1;
        PTT.SlideManager.initiatedByClick = !1
    },
    readyForNewAnimation: function() {
        PTT.SlideManager.animating = !1
    },
    snap: function() {
        if (PTT.SlideManager.smallScreen) return !1;
        var e = PTT.Globals.$window.scrollTop() + PTT.Globals.windowHeight / 2;
        for (var t = 0; t < PTT.SlideManager.slideCount; t++) {
            var n = PTT.SlideManager.$slides.eq(t);
            if (e > n.position().top && e < n.position().top + n.height()) {
                PTT.SlideManager.animateTo(n.index(".slide"), "snapping");
                break
            }
        }
    },
    resize: function() {
        if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
            PTT.SlideManager.smallScreen = !1;
            PTT.SlideManager.scrollTarget = window;
            $(".slides").css({
                width: PTT.Globals.windowWidth,
                height: PTT.Globals.windowHeight
            });
            $(".slides").find(".slide-background").css({
                transform: "",
                "-webkit-transform": ""
            });
            PTT.SlideManager.$slides.not("footer").each(function() {
                PTT.SlideManager.resizeSlide($(this))
            });
            PTT.SlideManager.stopSlideshow()
        } else {
            PTT.SlideManager.smallScreen = !0;
            PTT.SlideManager.scrollTarget = $(".main-content");
            $(".slides").css({
                width: "",
                heigth: ""
            });
            PTT.SlideManager.$slides.not("footer").each(function() {
                var e = $(this);
                e.css({
                    width: "",
                    height: ""
                });
                e.find(".slide-inner").css({
                    width: "",
                    height: ""
                });
                var t = e.find(".text-overlay");
                t.length > 0 && t.css({
                    "margin-top": "",
                    "margin-left": "",
                    opacity: "",
                    top: ""
                })
            })
        }
    },
    resizeSlide: function(e) {
        e.css({
            width: PTT.Globals.windowWidth,
            height: PTT.Globals.windowHeight
        });
        e.find(".slide-inner").css({
            width: PTT.Globals.windowWidth,
            height: PTT.Globals.windowHeight
        });
        var t = e.find(".text-overlay");
        if (t.length > 0) {
            var n = t.height(),
                r = t.width();
            t.css({
                "margin-top": Math.ceil(n / 2 * -1 + $("header.top").height() / 2)
            }).data({
                animationstartpercentage: Math.ceil(n / 2 / PTT.Globals.windowHeight * 100)
            });
            t.hasClass("horizontal-centered") && t.css({
                "margin-left": Math.ceil(r / 2 * -1)
            })
        }
    },
    updateNavigator: function(e) {
        $(".slide-navigator li a").removeClass("active");
        $(".slide-navigator li").eq(e).find("a").addClass("active")
    },
    showFeaturedProducts: function(e) {
        if (typeof e == "undefined") var e = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
        var t = e.find(".featured-products");
        t.hasClass("active") ? PTT.FeaturedProducts.hide(t) : PTT.FeaturedProducts.show(null, t)
    },
    hideFeaturedProducts: function(e) {
        if (typeof e == "undefined") var e = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
        var t = e.find(".featured-products");
        PTT.FeaturedProducts.hide(t)
    },
    pulsateFeaturedProducts: function(e) {
        if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
            if (typeof e == "undefined") var e = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
            var t = e.find(".featured-products");
            PTT.FeaturedProducts.pulsate(t)
        }
    }
};
PTT.Lookbook = {
    init: function() {
        PTT.Lookbook.addListeners()
    },
    addListeners: function() {
        $(".button.get-inspired").on("click", function(e) {
            e.preventDefault();
            PTT.SlideManager.showFeaturedProducts($(this).parents(".slide"))
        })
    }
};
PTT.FeaturedProducts = {
    isScrolling: !1,
    init: function() {
        $(".featured-products").find(".handle").on("click", PTT.FeaturedProducts.show);
        if (!Modernizr.touch) {
            $(".featured-products").on("mousemove", PTT.FeaturedProducts.move);
            $(".featured-products").on("mousemove", $.debounce(500, PTT.FeaturedProducts.endScrolling))
        }
        var e = $(".featured-products").first().data("targetwidth"),
            t = $(".featured-products").first().data("targetsmallwidth"),
            n = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? e : t;
        if (n < 1) {
            PTT.FeaturedProducts.closedPosition = PTT.Globals.windowWidth * n;
            $(".featured-products").css({
                width: PTT.Globals.windowWidth * n
            })
        } else {
            PTT.FeaturedProducts.closedPosition = n;
            $(".featured-products").css({
                width: n
            })
        }
        $(".featured-products").css({
            right: -PTT.FeaturedProducts.closedPosition
        });
        PTT.Globals.$window.on("resize", PTT.FeaturedProducts.resize);
        $(".featured-products img").imagesLoaded(function() {
            PTT.FeaturedProducts.resize()
        })
    },
    show: function(e, t) {
        var n;
        if (e !== null) {
            e.preventDefault();
            t = $(this).parent(".featured-products")
        }
        if (!t.hasClass("active")) {
            var r = -1;
            if ($("body").hasClass("lookbook")) {
                t.find(".articles article").each(function() {
                    var e = $(this).find(".button");
                    typeof $(this).data("originalheight") == "undefined" && $(this).data("originalheight", $(this).height());
                    r = Math.max(r, $(this).data("originalheight") + e.outerHeight(!0))
                });
                t.find(".articles article").height(r)
            }
            t.addClass("active");
            TweenMax.to(t, .8, {
                right: 0,
                ease: Quad.easeInOut
            })
        } else PTT.FeaturedProducts.hide(t)
    },
    pulsate: function(e) {
        if (!e.hasClass("active")) {
            TweenMax.delayedCall(.2, function() {
                TweenMax.to(e, .5, {
                    right: -PTT.FeaturedProducts.closedPosition + 70,
                    ease: Linear.easeNone
                })
            });
            TweenMax.delayedCall(.7, function() {
                TweenMax.to(e, .5, {
                    right: -PTT.FeaturedProducts.closedPosition,
                    ease: Quad.easeInOut
                })
            })
        }
    },
    hide: function(e) {
        e.removeClass("active");
        TweenMax.to(e.find(".products-holder"), .2, {
            scrollTop: 0,
            overwrite: 1
        });
        TweenMax.to(e, .8, {
            right: -PTT.FeaturedProducts.closedPosition,
            ease: Quad.easeInOut
        })
    },
    move: function(e) {
        if (!$(this).hasClass("active")) return;
        PTT.SlideManager.stopSlideshow();
        PTT.FeaturedProducts.isScrolling = !0;
        var t = $(this).find(".products"),
            n = $(this).find(".products-holder"),
            r = t.height(),
            i = n.height(),
            s = e.pageY - $(this).offset().top - parseInt($(this).css("padding-top"), 10),
            o = 0;
        $(".slides").length == 0 && (o = PTT.Globals.$window.scrollTop());
        r > i && TweenMax.to(n, .2, {
            scrollTop: (r - i) * (s / (i - o)),
            overwrite: 1
        })
    },
    endScrolling: function() {
        PTT.FeaturedProducts.isScrolling = !1
    },
    resize: function() {
        var e = $(".featured-products").first().data("targetwidth"),
            t = $(".featured-products").first().data("targetsmallwidth"),
            n = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? e : t;
        if (n < 1) {
            PTT.FeaturedProducts.closedPosition = PTT.Globals.windowWidth * n;
            $(".featured-products").css({
                width: PTT.Globals.windowWidth * n
            })
        } else {
            PTT.FeaturedProducts.closedPosition = n;
            $(".featured-products").css({
                width: n
            })
        }
        $(".featured-products").each(function() {
            $(this).hasClass("active") || $(".featured-products").css({
                right: -PTT.FeaturedProducts.closedPosition
            })
        })
    }
};
PTT.MainNavigation = {
    $header: null,
    $navIndicator: null,
    currentCategoryOpen: "",
    opened: !1,
    init: function() {
        PTT.MainNavigation.$header = $("header.top");
        PTT.MainNavigation.$navIndicator = PTT.MainNavigation.$header.find(".nav-indicator-hover");
        PTT.MainNavigation.$activeIndicator = PTT.MainNavigation.$header.find(".nav-indicator-active");
        $(".main-content").append($('<div class="nav-overlay"></div>'));
        $(".nav-overlay").on("click", function(e) {
            PTT.MainNavigation.close()
        });
        PTT.MainNavigation.addListeners();
        var e = PTT.MainNavigation.$header.find(".account-bag"),
            t = PTT.MainNavigation.$header.find(".topbar");
        if (PTT.MainNavigation.$header.length == 0) return;
        if (e.data("bag") != "") {
            var n = e.data("bag");
            $.get(n + "?action=bag&ajax=1", function(t) {
                e.html(t);
                PTT.MainNavigation.$header.find(".bag-items").jScrollPane()
            });
            $.get(n + "?action=login&ajax=1", function(e) {
                t.html(e);
                PTT.MainNavigation.prepareMobileMenu();
                PTT.MainNavigation.returnToActive();
                PTT.MainNavigation.activeIndicatorMoveTo()
            })
        } else PTT.MainNavigation.prepareMobileMenu()
    },
    prepareMobileMenu: function() {
        var e = PTT.MainNavigation.$header;
        e.find(".level-2").each(function() {
            var e = $(this);
            e.find("> li.page").each(function() {
                var t = $(this).clone().addClass("small-only");
                t.hasClass("home") ? t.prependTo(e.find(".level-3")) : t.appendTo(e.find(".level-3"))
            });
            var t = e.find("> li:not(.page)");
            t.length <= 1 ? e.parent(".category").addClass("small-hide-level-2") : t.width(Math.floor(100 / t.length) + "%")
        });
        e.find(".level-1 > li.page, .level-1 > .topbar > li.page").clone().addClass("small-only").appendTo(e.find(".level-3"));
        var t = $("<li></li>");
        t.append(e.find(".search-field").clone());
        t.addClass("small-only").prependTo(e.find(".level-3"))
    },
    addListeners: function() {
        var e = PTT.MainNavigation.$header.find(".account-bag"),
            t = PTT.MainNavigation.$header.find(".login-dropdown"),
            n = PTT.MainNavigation.$header.find(".loggedin-dropdown");
        PTT.MainNavigation.$header.on("click", ".level-1 .category > a", function(e) {
            e.preventDefault();
            $(this).hasClass("open") ? PTT.MainNavigation.close() : PTT.MainNavigation.open($(this))
        });
        PTT.MainNavigation.$header.on("click", ".menu-close-button", function(e) {
            e.preventDefault();
            PTT.MainNavigation.close()
        });
        PTT.MainNavigation.$header.on("click", "#nav-bag", function(r) {
            PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && r.preventDefault();
            PTT.MainNavigation.showDropdown(e);
            PTT.MainNavigation.hideDropdown(n);
            PTT.MainNavigation.hideDropdown(t)
        });
        PTT.MainNavigation.$header.on("click", "#nav-login:not(.direct,.logged-in)", function(r) {
            r.preventDefault();
            PTT.MainNavigation.showDropdown(t);
            PTT.MainNavigation.hideDropdown(n);
            PTT.MainNavigation.hideDropdown(e)
        });
        PTT.MainNavigation.$header.on("click", "#nav-login.logged-in", function(r) {
            r.preventDefault();
            PTT.MainNavigation.showDropdown(n);
            PTT.MainNavigation.hideDropdown(t);
            PTT.MainNavigation.hideDropdown(e)
        });
        $(".main-content").on("click", function() {
            PTT.MainNavigation.hideDropdown(t);
            PTT.MainNavigation.hideDropdown(n);
            PTT.MainNavigation.hideDropdown(e)
        });
        PTT.MainNavigation.$header.on("click", "#nav-search", function(e) {
            e.preventDefault();
            var t = PTT.MainNavigation.$header.find("> .search-field"),
                n = t.find("input[type=text]");
            t.addClass("active");
            var r = $(this).position().left + $(this).outerWidth() - 200 - parseInt($(this).css("padding-right"), 10);
            t.css({
                left: r
            });
            $("html").hasClass("lt-ie9") || TweenMax.from(n, .2, {
                delay: .5,
                "background-position": "130% 6px",
                onComplete: function() {
                    n.css({
                        width: "",
                        opacity: "",
                        "background-position": ""
                    });
                    n.focus()
                }
            });
            TweenMax.from(n, .5, {
                width: 0,
                opacity: 0,
                ease: Quad.easeOut
            })
        });
        PTT.MainNavigation.$header.find("a").each(function() {
            $(this).attr("href") != "" && $(this).attr("href") != "#" && $(this).parents(".icons").length == 0 && $(this).addClass("transition from-top")
        });
        PTT.MainNavigation.$header.find("> .search-field").find("input[type=text]").on("blur", function() {
            var e = PTT.MainNavigation.$header.find("> .search-field"),
                t = e.find("input[type=text]");
            if ($(this).val() == "") {
                $("html").hasClass("lt-ie9") || TweenMax.to(t, .2, {
                    "background-position": "130% 6px"
                });
                TweenMax.to(t, .5, {
                    delay: .2,
                    width: 0,
                    opacity: 0,
                    ease: Quad.easeOut,
                    onComplete: function() {
                        e.removeClass("active");
                        t.css({
                            width: "",
                            opacity: ""
                        });
                        $("html").hasClass("lt-ie9") || t.css({
                            "background-position": ""
                        })
                    }
                })
            }
        }).on("keyup", function() {
            $(this).val() != "" ? $(this).addClass("filled") : $(this).removeClass("filled")
        });
        var r = PTT.MainNavigation.$header.find(".login-dropdown");
        r.find("#login-username").on("keyup", function() {
            if ($(this).val() != "") {
                $("#login-login-button").removeClass("light");
                $("#login-new-customer-button").addClass("light")
            } else {
                $("#login-login-button").addClass("light");
                $("#login-new-customer-button").removeClass("light")
            }
        });
        PTT.MainNavigation.$header.find(".level-1").on("mousemove", "> li > a", PTT.MainNavigation.hoverIndicatorMoveTo);
        PTT.MainNavigation.$header.find(".level-1").on("mousemove", ".icons li > a", PTT.MainNavigation.hoverIndicatorMoveTo);
        PTT.MainNavigation.$header.find(".level-1").on("mouseleave", PTT.MainNavigation.returnToActive);
        PTT.MainNavigation.$header.find(".level-2").on("mouseenter", PTT.MainNavigation.returnToActive);
        PTT.MainNavigation.$header.find(".level-2").on("click", "> li:not(.page) > a", PTT.MainNavigation.switchLevel3);
        PTT.MainNavigation.$header.find(".level-3").on("click", "> li:not(.shoplink,.page) > a", PTT.MainNavigation.toLevel4);
        PTT.MainNavigation.$header.find(".level-4").on("click", ".back", PTT.MainNavigation.toLevel3);
        PTT.MainNavigation.returnToActive();
        PTT.MainNavigation.activeIndicatorMoveTo();
        PTT.Globals.$window.on("resize", $.debounce(100, PTT.MainNavigation.resize))
    },
    showDropdown: function(e) {
        if (e.hasClass("animating")) return !0;
        if (e.hasClass("active")) {
            PTT.MainNavigation.hideDropdown(e);
            return !0
        }(e.is(".login-dropdown") || e.is(".loggedin-dropdown")) && e.find(".padded").length == 0 && e.wrapInner($('<div class="padded"></div>'));
        e.addClass("active animating");
        var t = 0;
        if (e.find(".custom-scroll").length > 0) {
            t = e.find(".custom-scroll").height();
            e.is(".account-bag") && $(".bag-items").find("li").length > 1 && (t = 300);
            e.find(".custom-scroll").height(t).data("jsp").reinitialise()
        }
        var n = e.outerHeight(!0);
        e.css({
            height: 0,
            overflow: "hidden"
        });
        TweenMax.to(e, .5, {
            height: n,
            ease: Quad.easeOut,
            onComplete: function() {
                e.css({
                    height: "",
                    overflow: ""
                }).removeClass("animating")
            }
        })
    },
    hideDropdown: function(e) {
        if (!e.hasClass("active") || e.hasClass("animating")) return !0;
        e.css({
            overflow: "hidden"
        }).addClass("animating");
        TweenMax.to(e, .5, {
            height: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                e.css({
                    height: "",
                    overflow: ""
                });
                e.removeClass("active animating")
            }
        })
    },
    hoverIndicatorMoveTo: function(e, t) {
        if (e) {
            t = $(this);
            TweenMax.killDelayedCallsTo(PTT.MainNavigation.activeIndicatorMoveTo);
            TweenMax.killDelayedCallsTo(PTT.MainNavigation.hoverIndicatorMoveTo)
        }
        t !== null && t.length > 0 && TweenMax.to(PTT.MainNavigation.$navIndicator, .4, {
            left: Math.ceil(t.offset().left),
            width: Math.ceil(t.outerWidth() + 2),
            backgroundColor: t.css("border-top-color")
        })
    },
    activeIndicatorMoveTo: function(e) {
        if (e == null || e.length == 0) {
            e = PTT.MainNavigation.$header.find(".level-1").find("> li > a.active");
            e.length > 1 && (e = PTT.MainNavigation.$header.find(".level-1").find("> li.page > a.active").first())
        }
        e.length > 0 && TweenMax.to(PTT.MainNavigation.$activeIndicator, .4, {
            delay: .5,
            left: Math.ceil(e.position().left),
            width: Math.ceil(e.outerWidth() + 2),
            backgroundColor: e.css("border-top-color")
        })
    },
    returnToActive: function() {
        var e = PTT.MainNavigation.$header.find(".level-1").find("> li > a.open");
        if (e.length == 0) {
            e = PTT.MainNavigation.$header.find(".level-1").find("> li > a.active");
            e.length > 1 && (e = PTT.MainNavigation.$header.find(".level-1").find("> li.page > a.active").first())
        }
        TweenMax.killDelayedCallsTo(PTT.MainNavigation.hoverIndicatorMoveTo);
        TweenMax.delayedCall(.5, PTT.MainNavigation.hoverIndicatorMoveTo, [null, e])
    },
    open: function(e) {
        PTT.MainNavigation.opened && PTT.MainNavigation.close();
        PTT.MainNavigation.opened = !0;
        if (e.hasClass("animation")) return !0;
        e.addClass("open animation");
        var t = e.parent().find(".level-2"),
            n = e.parent().find(".level-2 > li > a.active").next(".level-3");
        n.length == 0 && (n = e.parent().find(".level-3").first());
        var r = e.parent().find(".level-4");
        t.addClass("active");
        n.addClass("pre-active");
        TweenMax.killTweensOf($(".nav-overlay"));
        $(".nav-overlay").is(":visible") || $(".nav-overlay").css({
            opacity: 0
        }).show();
        TweenMax.to($(".nav-overlay"), 1, {
            delay: .2,
            opacity: 1,
            ease: Quad.easeOut
        });
        n.find(".collection-teaser").length > 0 ? parseInt(n.css("padding-left"), 10) != n.find(".collection-teaser").position().left ? t.find(".menu-close-button").css({
            left: n.find(".collection-teaser").position().left + n.find(".collection-teaser").width() - 40,
            paddingLeft: 0,
            paddingRight: 0
        }) : t.find(".menu-close-button").css({
            position: "relative",
            left: "",
            paddingLeft: "",
            paddingRight: ""
        }) : t.find(".menu-close-button").css({
            position: "relative",
            left: "",
            paddingLeft: "",
            paddingRight: ""
        });
        var i = Math.max(n.outerHeight(!0), r.outerHeight(!0));
        n.css({
            height: i
        });
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? e.parent().hasClass("small-hide-level-2") || (i += t.height()) : i += t.height();
        t.wrap($('<div class="animation-holder" style="position: absolute; overflow: hidden; width: 100%; top: ' + e.outerHeight(!0) + 'px; left: 0; height: 65px;"></div>'));
        var s = e.parent().find(".animation-holder");
        t.css({
            top: -t.outerHeight(!0)
        });
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && e.parent().hasClass("small-hide-level-2") && t.css({
            visibility: "hidden"
        });
        TweenMax.to(t, .5, {
            top: 0,
            ease: Quad.easeOut
        });
        TweenMax.to(s, .7, {
            delay: .3,
            onStart: function() {
                n.addClass("active").removeClass("pre-active")
            },
            height: i,
            ease: Quad.easeOut,
            onComplete: function() {
                t.css({
                    top: "",
                    visibility: ""
                });
                t.unwrap();
                e.removeClass("animation");
                if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
                    $(".small-close").show();
                    $(".nav-bag").hide()
                }
            }
        });
        TweenMax.to($(".main-content"), .7, {
            delay: .3,
            top: i,
            ease: Quad.easeOut
        });
        TweenMax.to($(".slide-navigator"), .7, {
            delay: .3,
            marginTop: i - 85,
            ease: Quad.easeOut
        })
    },
    close: function() {
        PTT.MainNavigation.opened = !1;
        var e = PTT.MainNavigation.$header,
            t = e.find(".level-1 a.open");
        if (t.hasClass("animation")) return !0;
        t.addClass("animation");
        var n = t.parent().find(".level-2"),
            r = t.parent().find(".level-3"),
            i = t.parent().find(".level-4"),
            s = n.outerHeight(!0) + r.outerHeight(!0);
        n.wrap($('<div class="animation-holder" style="position: absolute; overflow: hidden; width: 100%; top: ' + t.outerHeight(!0) + "px; left: 0; height: " + s + 'px;"></div>'));
        var o = t.parent().find(".animation-holder");
        n.css({
            top: 0
        });
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && t.parent().hasClass("small-hide-level-2") && n.css({
            visibility: "hidden"
        });
        var u = null;
        n.find("> li > a.active").length > 0 && (u = n.find("> li > a.active"));
        u != null && TweenMax.to(u, .3, {
            "background-position": "50% 150%"
        });
        TweenMax.to(o, .7, {
            height: n.outerHeight(!0),
            ease: Quad.easeOut
        });
        TweenMax.to(n, .5, {
            onStart: function() {
                r.removeClass("active")
            },
            delay: .5,
            top: -63,
            ease: Quad.easeOut,
            onComplete: function() {
                n.css({
                    top: "",
                    visibility: ""
                });
                n.unwrap();
                n.removeClass("active");
                t.removeClass("animation");
                if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
                    $(".small-close").hide();
                    $(".nav-bag").show()
                }
            }
        });
        TweenMax.to($(".nav-overlay"), 1, {
            delay: .2,
            opacity: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                $(".nav-overlay").hide()
            }
        });
        TweenMax.to($(".main-content"), .7, {
            top: 0,
            ease: Quad.easeOut
        });
        TweenMax.to($(".slide-navigator"), .7, {
            marginTop: -85,
            ease: Quad.easeOut
        });
        t.removeClass("open")
    },
    switchLevel3: function(e) {
        e.preventDefault();
        $(this).parents(".level-2").find(".level-3").hide();
        $(this).next(".level-3").show().addClass("active");
        $(this).parents(".level-2").find(">li > a").removeClass("active");
        $(this).addClass("active")
    },
    toLevel3: function(e) {
        e.preventDefault();
        var t = $(this).parents(".level-3");
        t.css({
            left: 0
        })
    },
    toLevel4: function(e) {
        e.preventDefault();
        if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
            $(this).parents(".level-3").find(".level-4").hide();
            $(this).next(".level-4").show();
            var t = $(this).parents(".level-3");
            t.css({
                left: "-100%"
            })
        }
    },
    resize: function() {
        PTT.MainNavigation.activeIndicatorMoveTo();
        PTT.MainNavigation.returnToActive();
        PTT.MainNavigation.close()
    }
};
PTT.VideoPlayer = {
    isNative: !1,
    mediaElement: null,
    mediaElementPlayer: null,
    init: function() {
        if ($("body.tv.video").length == 0) return;
        var e = new MediaElementPlayer("video", {
            features: ["playpause", "volume", "progress", "share", "fs"],
            fs: !0,
            success: function(t, n) {
                PTT.VideoPlayer.mediaElement = t;
                PTT.VideoPlayer.mediaElementPlayer = e;
                PTT.VideoPlayer.isNative = typeof e != "undefined" && e.media.pluginType == "native";
                t.addEventListener("canplay", function() {
                    t.play();
                    PTT.VideoPlayer.resize()
                }, !1)
            }
        });
        PTT.VideoPlayer.addListeners();
        PTT.VideoPlayer.resize();
        TweenMax.delayedCall(2, function() {
            PTT.FeaturedProducts.show(null, $(".featured-products"))
        });
        TweenMax.delayedCall(3, function() {
            PTT.FeaturedProducts.hide($(".featured-products"))
        })
    },
    addListeners: function() {
        PTT.Globals.$window.on("resize", $.debounce(250, PTT.VideoPlayer.resize))
    },
    resize: function() {
        var e = PTT.Globals.windowHeight - $("header.top").outerHeight(),
            t = PTT.Globals.windowWidth;
        $(".video-holder").css({
            width: t,
            height: e
        });
        if (typeof PTT.VideoPlayer.mediaElementPlayer != "undefined" && PTT.VideoPlayer.mediaElementPlayer !== null) {
            PTT.VideoPlayer.mediaElementPlayer.setPlayerSize(t, e);
            PTT.VideoPlayer.mediaElementPlayer.setControlsSize();
            PTT.VideoPlayer.isNative || PTT.VideoPlayer.mediaElement.setVideoSize(t, e)
        }
    }
};
PTT.TeamOverview = {
    $header: null,
    currentChapter: null,
    $currentChapter: null,
    init: function() {
        if ($(".team.overview").length == 0) return;
        $(".team.overview .articles img").imagesLoaded(function() {
            $(".team.overview .articles").masonry({
                transitionDuration: 0,
                itemSelector: "article",
                isOriginLeft: !1,
                isResizeBound: !1
            });
            PTT.TeamOverview.scroll()
        });
        PTT.TeamOverview.$header = $("header.sections");
        PTT.TeamOverview.$header.data({
            defaultbackground: PTT.TeamOverview.$header.css("background-color")
        });
        PTT.TeamOverview.addListeners()
    },
    addListeners: function() {
        PTT.TeamOverview.$header.find(".filters a").on("click", function(e) {
            e.preventDefault();
            if ($(this).hasClass("active")) return;
            var t = $(this).attr("class").replace(" track-event", "");
            PTT.TeamOverview.scrollTo(t)
        });
        $(".select-box").selectBox({
            callback: function(e, t) {
                PTT.TeamOverview.scrollTo(t.type)
            }
        });
        $(window).on("resize", PTT.TeamOverview.resize);
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? $(window).on("scroll", $.throttle(100, PTT.TeamOverview.scroll)) : $(".main-content").on("scroll", PTT.TeamOverview.scroll)
    },
    scrollTo: function(e) {
        var t = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window : $(".main-content"),
            n = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window.scrollTop() : $(".main-content").scrollTop(),
            r = null;
        $("section").each(function() {
            $(this).data("type") == e && (r = $(this))
        });
        var i = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? r.position().top : r.offset().top + n;
        TweenMax.to(t, 1, {
            scrollTo: i - 10,
            autoKill: !1,
            ease: Quad.easeOut
        })
    },
    resize: function() {
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? $(".team.overview .articles ").masonry("destroy") : $(".team.overview .articles ").masonry()
    },
    scroll: function() {
        var e = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window.scrollTop() : $(".main-content").scrollTop(),
            t = PTT.TeamOverview.$header.position().top + PTT.TeamOverview.$header.outerHeight(!0),
            n = $("section"),
            r = PTT.Globals.windowHeight * .5,
            i = PTT.Globals.windowWidth * .5;
        PTT.TeamOverview.$header.css({
            "padding-top": Math.max(Math.min(55 - e, 55), 23),
            "padding-bottom": Math.max(Math.min(80 - e, 80), 10)
        });
        var s = !1;
        e > 70 && n.each(function() {
            var n = $(this),
                r = n.position().top - e,
                i = n.position().top + n.outerHeight(!0) - e;
            if (r <= t && i > t) {
                s = !0;
                if (PTT.TeamOverview.currentChapter != n.data("type")) {
                    PTT.TeamOverview.$header.find(".filters a").removeClass("active");
                    PTT.TeamOverview.$header.find(".filters a." + n.data("type")).addClass("active");
                    PTT.TeamOverview.currentChapter = n.data("type");
                    PTT.TeamOverview.$currentChapter = n
                }
            }
        });
        if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch) {
            $("article").each(function(t) {
                var n = $(this),
                    s = n.find(">a");
                n.offset().left >= i - 10 ? TweenMax.to(s, .3, {
                    left: Math.max(0, n.offset().top - (r + e)),
                    onUpdate: function() {
                        s.css({
                            top: Math.max(0, Math.abs(parseInt(s.css("left"), 10))) * .5
                        })
                    },
                    overwrite: 1,
                    ease: Quad.easeOut
                }) : TweenMax.to(s, .3, {
                    left: Math.min(0, (n.offset().top - (r + e)) * -1),
                    onUpdate: function() {
                        s.css({
                            top: Math.max(0, Math.abs(parseInt(s.css("left"), 10))) * .5
                        })
                    },
                    overwrite: 1,
                    ease: Quad.easeOut
                })
            });
            if (!s) {
                PTT.TeamOverview.$currentChapter = null;
                PTT.TeamOverview.currentChapter = null
            }
        } else $("article").find(">a").css({
            top: "",
            left: ""
        })
    }
};
PTT.TeamRider = {
    $photos: null,
    photoCount: 0,
    init: function() {
        if ($("body.team.rider").length == 0) return;
        PTT.TeamRider.$photos = $(".photos .photo");
        PTT.TeamRider.photoCount = PTT.TeamRider.$photos.length;
        PTT.TeamRider.addListeners();
        PTT.TeamRider.transitionIn()
    },
    addListeners: function() {
        PTT.Globals.$window.on("resize", PTT.TeamRider.resize);
        var e = 0;
        PTT.TeamRider.$photos.each(function() {
            var t = $(this),
                n = $(this).find("img");
            $(this).imagesLoaded(function() {
                t.addClass("loaded");
                t.data({
                    owidth: n.width(),
                    oheight: n.height()
                });
                n.css({
                    width: "100%",
                    height: "100%"
                });
                e++;
                e == PTT.TeamRider.photoCount && PTT.TeamRider.start()
            })
        });
        $(".photo-arrows").on("click", "a", function(e) {
            e.preventDefault();
            var t = $(this);
            t.attr("id") == "photo-prev" ? PTT.TeamRider.previous() : PTT.TeamRider.next()
        });
        PTT.Globals.$window.on("scroll", PTT.TeamRider.scroll)
    },
    start: function() {
        PTT.TeamRider.resize();
        PTT.TeamRider.next()
    },
    next: function() {
        var e = PTT.TeamRider.$photos.filter(".active").next();
        e.length == 0 && (e = PTT.TeamRider.$photos.first());
        PTT.TeamRider.animate(e)
    },
    previous: function() {
        var e = PTT.TeamRider.$photos.filter(".active").prev();
        e.length == 0 && (e = PTT.TeamRider.$photos.last());
        PTT.TeamRider.animate(e)
    },
    animate: function(e) {
        PTT.TeamRider.$photos.filter(".active").removeClass("active");
        e.addClass("active");
        PTT.TeamRider.repositionControls();
        PTT.TeamRider.updateCounter()
    },
    transitionIn: function() {
        $(".rider-name").append($('<div class="transition-overlay" />'));
        var e = $(".rider-name").find(".transition-overlay");
        e.css({
            height: $(".rider-name").parent().height(),
            bottom: -($(".rider-name").parent().height() - $(".rider-name").height())
        });
        TweenMax.to($(".rider-name").find(".transition-overlay"), .6, {
            delay: .4,
            height: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                $(".rider-name").find(".transition-overlay").remove()
            }
        });
        TweenMax.allFrom([$(".rider-info dl"), $(".rider-info .socials")], .5, {
            delay: 1,
            opacity: 0,
            ease: Quad.easeOut
        })
    },
    resize: function() {
        var e = Math.ceil(PTT.Globals.windowHeight * .8),
            t = Math.ceil(PTT.Globals.windowWidth * .75);
        $(".photos").height(e);
        PTT.TeamRider.$photos.filter(".loaded").each(function() {
            var n = $(this),
                r = n.data("owidth"),
                i = n.data("oheight"),
                s = t / r,
                o = e * .85 / i,
                u = Math.min(s, o),
                a = r * u,
                f = i * u;
            n.css({
                width: Math.round(a),
                height: Math.round(f),
                marginLeft: -Math.round(a * .5),
                marginTop: -Math.round(f * .5),
                top: "50%",
                left: "50%"
            })
        });
        PTT.TeamRider.repositionControls()
    },
    scroll: function() {
        var e = PTT.Globals.$window.scrollTop(),
            t = PTT.Globals.windowHeight * .5,
            n = PTT.Globals.windowWidth * .5;
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch ? $(".favourites article").each(function(r) {
            var i = $(this),
                s = i.find(">div");
            i.offset().left >= n ? TweenMax.to(s, .3, {
                left: Math.max(0, i.offset().top - (t + e) + (i.offset().left - n) * .35),
                onUpdate: function() {
                    s.css({
                        top: Math.max(0, Math.abs(parseInt(s.css("left"), 10))) * .5
                    })
                },
                overwrite: 1,
                ease: Quad.easeOut
            }) : TweenMax.to(s, .3, {
                left: Math.min(0, (i.offset().top - (t + e) - i.offset().left * .35) * -1),
                onUpdate: function() {
                    s.css({
                        top: Math.max(0, Math.abs(parseInt(s.css("left"), 10))) * .5
                    })
                },
                overwrite: 1,
                ease: Quad.easeOut
            })
        }) : $(".favourites article > div").css({
            top: "",
            left: ""
        })
    },
    updateCounter: function() {
        $(".photo-counter").find(".counter-count").text(PTT.TeamRider.$photos.filter(".active").index() + 1);
        $(".photo-counter").find(".counter-total").text(PTT.TeamRider.photoCount)
    },
    repositionControls: function() {
        var e = PTT.TeamRider.$photos.filter(".active");
        if (e.length > 0) {
            var t = e.width(),
                n = e.height();
            $(".photo-counter").css({
                bottom: ($(".photos").height() - n) * .5 - 30
            });
            TweenMax.to($(".photo-arrows").find("#photo-prev"), .5, {
                left: e.position().left - t * .5,
                overwrite: 1,
                ease: Quint.easeOut
            });
            TweenMax.to($(".photo-arrows").find("#photo-next"), .5, {
                right: e.position().left - t * .5,
                overwrite: 1,
                ease: Quint.easeOut
            })
        }
    }
};
PTT.About = {
    init: function() {
        if ($(".about").length == 0) return;
        PTT.About.addListeners();
        PTT.About.scroll();
        TweenMax.delayedCall(1, function() {
            TweenMax.to(window, 2, {
                scrollTo: 550
            })
        })
    },
    addListeners: function() {
        $(window).on("scroll", PTT.About.scroll);
        $(window).on("resize", PTT.About.resize)
    },
    scroll: function() {
        if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch) {
            var e = PTT.Globals.$window.scrollTop(),
                t = PTT.Globals.windowHeight * .5;
            $(".column").each(function(t) {
                var n = $(this),
                    r = n.find("img");
                n.css({
                    "margin-top": $(".columns").offset().top - (PTT.Globals.windowHeight * .35 + e * n.data("speed"))
                });
                r.css({
                    top: parseInt(n.css("margin-top"), 10) * r.data("speed")
                })
            });
            var n = $(".our-mission"),
                r = $(".we-are");
            TweenMax.to(r, .4, {
                marginTop: Math.min(320, Math.max(0, e)),
                ease: Quad.easeOut
            });
            TweenMax.to(n, .4, {
                marginTop: 160 + Math.min(160, Math.max(0, e - 160)),
                ease: Quad.easeOut
            })
        }
    },
    resize: function() {
        if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
            $(".column").css({
                "margin-top": ""
            });
            $(".column img").css({
                "margin-top": ""
            });
            $(".about-brand img").css({
                top: ""
            })
        } else PTT.About.scroll()
    }
};
PTT.TvOverview = {
    $header: null,
    articleCount: 0,
    $articles: null,
    init: function() {
        if ($(".tv.overview").length == 0) return;
        PTT.TvOverview.$header = $("header.sections");
        PTT.TvOverview.$articles = $("article");
        PTT.TvOverview.articleCount = PTT.TvOverview.$articles.length;
        var e = {};
        $("body").hasClass("facebook-protest-tv") && (e.defaultYoutubePlayer = !0);
        $(".video-player").youtubePlayerWithPoster(e);
        PTT.TvOverview.addListeners()
    },
    addListeners: function() {
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? $(window).on("scroll", PTT.TvOverview.scroll) : $(".main-content").on("scroll", PTT.TvOverview.scroll);
        $(window).on("resize", PTT.TvOverview.resize);
        PTT.TvOverview.scroll();
        $("header .filters").find("a").on("click", function(e) {
            e.preventDefault();
            if ($(this).hasClass("active")) return;
            $("header .filters").find("a").removeClass("active");
            $(this).addClass("active");
            PTT.TvOverview.filter($(this).data("tvtype"))
        });
        $(".select-box").selectBox({
            callback: function(e, t) {
                PTT.TvOverview.filter(t.tvtype)
            }
        })
    },
    filter: function(e) {
        TweenMax.to($("article"), .5, {
            opacity: 0,
            onComplete: function() {
                $("article").hide();
                if (e == "" || e == "all") {
                    $("article").show();
                    TweenMax.to($("article"), .5, {
                        opacity: 1
                    })
                } else $("article").each(function(t) {
                    var n = $(this);
                    if (n.data("tvtype") == e) {
                        n.show();
                        TweenMax.to(n, .5, {
                            opacity: 1
                        })
                    } else TweenMax.to(n, .5, {
                        opacity: 0,
                        onComplete: function() {
                            n.hide()
                        }
                    })
                })
            }
        });
        var t = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? window : $(".main-content");
        TweenMax.to(t, 1, {
            scrollTo: 1,
            ease: Quad.easeOut
        });
        TweenMax.delayedCall(.5, PTT.TvOverview.scroll)
    },
    scroll: function() {
        var e = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window.scrollTop() : $(".main-content").scrollTop(),
            t = PTT.Globals.windowHeight * .5,
            n = PTT.Globals.windowWidth * .5;
        PTT.TvOverview.$header.css({
            "padding-top": Math.max(Math.min(55 - e, 55), 23),
            "padding-bottom": Math.max(Math.min(80 - e, 80), 10)
        });
        for (var r = 0; r < PTT.TvOverview.articleCount; r++) {
            var i = $(PTT.TvOverview.$articles[r]);
            if (i.offset().top - (e - 100) < 0) continue;
            if (i.offset().top - (e + 100) > PTT.Globals.windowHeight) break;
            var s = i.find("img");
            if (i.find("img").data("loadsrc") != "") {
                s.attr("src", s.data("loadsrc"));
                s.data("loadsrc", "")
            }
            if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch) {
                var o = i.find(".video-player"),
                    u = i.find(".info");
                if (i.hasClass("odd")) {
                    var a = i.offset().top - (t + e),
                        f = (i.offset().top - (t + e)) * -1;
                    TweenMax.to(o, .3, {
                        left: Math.max(0, a),
                        top: Math.max(0, a * .5),
                        overwrite: 1,
                        ease: Quad.easeOut
                    });
                    TweenMax.to(u, .3, {
                        left: Math.min(0, f),
                        top: Math.max(0, a * .5),
                        overwrite: 1,
                        ease: Quad.easeOut
                    })
                } else {
                    var a = (i.offset().top - (t + e)) * -1,
                        f = i.offset().top - (t + e);
                    TweenMax.to(o, .3, {
                        left: Math.min(0, a),
                        top: Math.max(0, f * .5),
                        overwrite: 1,
                        ease: Quad.easeOut
                    });
                    TweenMax.to(u, .3, {
                        left: Math.max(0, f),
                        top: Math.max(0, f * .5),
                        overwrite: 1,
                        ease: Quad.easeOut
                    })
                }
            }
        }
    },
    resize: function() {
        if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
            $(".video-player").css({
                left: "",
                top: ""
            });
            $(".info").css({
                opacity: ""
            });
            $(".info > p").css({
                "margin-top": ""
            })
        } else PTT.TvOverview.scroll()
    }
};
PTT.Contact = {
    map: null,
    init: function() {
        if (!$("body").hasClass("contact")) return;
        PTT.Contact.initMap();
        PTT.Contact.addListeners()
    },
    addListeners: function() {
        $(".contact-form").on("submit", function(e) {
            e.preventDefault();
            var t = $(this).find("input[name=contact_name]").val(),
                n = $(this).find("input[name=contact_company]").val(),
                r = $(this).find("input[name=contact_email]").val(),
                i = $(this).find("input[name=contact_phone]").val(),
                s = $(this).find("textarea[name=contact_message]").val();
            if (t != "" && r != "" && i != "" && s != "") {
                $(".error-validate").hide();
                $.post($(this).attr("action"), {
                    contact_name: t,
                    contact_company: n,
                    contact_email: r,
                    contact_phone: i,
                    contact_message: s
                }, function(e) {
                    $(".form-fields").hide();
                    $(".error-success").fadeIn("fast")
                })
            } else {
                $(".error-validate").fadeIn("fast");
                $(".error-success").fadeOut("fast")
            }
        })
    },
    initMap: function() {
        var e = {
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: !1
        };
        PTT.Contact.map = new google.maps.Map(document.getElementById("address-map"), e);
        PTT.Contact.addMarkers()
    },
    addMarkers: function() {
        var e = new google.maps.LatLng(52.1886449, 4.5011289);
        PTT.Contact.map.setCenter(e);
        var t = new google.maps.Marker({
            position: e,
            map: PTT.Contact.map,
            icon: {
                url: TEMPLATE_URL + "/img/storefinder-icon.png",
                size: new google.maps.Size(28, 33),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(14, 33),
                scaledSize: new google.maps.Size(28, 33)
            }
        })
    }
};
PTT.StoreLocator = {
    map: null,
    markers: [],
    $form: null,
    currentLocation: {
        lat: 0,
        lng: 0
    },
    geolocation: !1,
    init: function() {
        if (!$("body").hasClass("storefinder")) return;
        PTT.StoreLocator.$form = $("#storelocator-find");
        PTT.StoreLocator.initMap();
        PTT.StoreLocator.addListeners();
        $("#search-query").val() != "" ? PTT.StoreLocator.addMarkers() : $(".map").addClass("no-results");
        navigator.geolocation && navigator.geolocation.getCurrentPosition(function(e) {
            PTT.StoreLocator.currentLocation = {
                lat: e.coords.latitude,
                lng: e.coords.longitude
            };
            PTT.StoreLocator.geolocation = !0;
            $("#search-query").val() == "" && PTT.StoreLocator.map.panTo(new google.maps.LatLng(PTT.StoreLocator.currentLocation.lat, PTT.StoreLocator.currentLocation.lng))
        })
    },
    addListeners: function() {
        $(".addresses").on("click", "li", PTT.StoreLocator.navigateToMarker);
        PTT.StoreLocator.$form.on("submit", PTT.StoreLocator.searchQuery)
    },
    initMap: function() {
        var e = {
            center: new google.maps.LatLng(52.1886449, 4.5011289),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: !1
        };
        PTT.StoreLocator.map = new google.maps.Map(document.getElementById("address-map"), e)
    },
    searchQuery: function(e) {
        e.preventDefault();
        var t = PTT.StoreLocator.$form.attr("action");
        PTT.StoreLocator.clearMarkers();
        $("#storelocator-loader").show();
        $.post(t, {
            query: $("#search-query").val(),
            ajax: "ajax"
        }, function(e) {
            var t = $(".addresses ul", "<html><body>" + e + "</body></html>");
            $(".addresses ul").html($(".addresses ul", "<html><body>" + e + "</body></html>").html());
            if ($(".map").hasClass("no-results")) {
                $(".map").css({
                    width: "70%"
                }).removeClass("no-results");
                TweenMax.to($(".map"), .5, {
                    width: "30%",
                    ease: Quad.easeOut,
                    onComplete: function() {
                        $(".map").css({
                            width: ""
                        });
                        google.maps.event.trigger(PTT.StoreLocator.map, "resize");
                        t.data("matches") == 1 && PTT.StoreLocator.addMarkers()
                    }
                })
            } else t.data("matches") == 1 && PTT.StoreLocator.addMarkers();
            $("#storelocator-loader").hide()
        })
    },
    addMarkers: function() {
        var e = new google.maps.LatLngBounds;
        PTT.StoreLocator.markers = [];
        $(".addresses li").each(function() {
            var t = $(this).data("ll");
            t = t.split(", ");
            var n = $(this).find(".google-maps-link"),
                r = n.attr("href");
            PTT.StoreLocator.geolocation ? n.attr("href", r + PTT.StoreLocator.currentLocation.lat + "," + PTT.StoreLocator.currentLocation.lng) : n.attr("href", r + $("#search-query").val());
            var i = new google.maps.LatLng(t[0], t[1]),
                s = new google.maps.Marker({
                    position: i,
                    map: PTT.StoreLocator.map,
                    icon: {
                        url: TEMPLATE_URL + "/img/storefinder-icon.png",
                        size: new google.maps.Size(28, 33),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 33),
                        scaledSize: new google.maps.Size(28, 33)
                    }
                }),
                o = $(this);
            google.maps.event.addListener(s, "click", function() {
                o.trigger("click");
                TweenMax.to(window, .5, {
                    scrollTo: o.offset().top - 100
                })
            });
            PTT.StoreLocator.markers.push(s);
            e.extend(i)
        });
        PTT.StoreLocator.map.fitBounds(e)
    },
    clearMarkers: function() {
        for (var e = 0; e < PTT.StoreLocator.markers.length; e++) PTT.StoreLocator.markers[e].setMap(null)
    },
    navigateToMarker: function(e) {
        var t = $(this).data("ll");
        t = t.split(", ");
        $(".addresses li").removeClass("active");
        $(this).addClass("active");
        PTT.StoreLocator.map.panTo(new google.maps.LatLng(t[0], t[1]));
        PTT.StoreLocator.map.setZoom(15)
    }
};
PTT.Footer = {
    newsletterFormActive: !1,
    init: function() {
        PTT.Footer.$footer = $("footer.bottom");
        PTT.Footer.$lists = PTT.Footer.$footer.find(".list");
        PTT.Footer.addListeners();
        PTT.Footer.resize()
    },
    addListeners: function() {
        PTT.Globals.$window.on("resize", PTT.Footer.resize);
        PTT.Footer.$footer.find("a").each(function() {
            $(this).attr("href") != "" && $(this).attr("href") != "#" && typeof $(this).attr("target") == "undefined" && $(this).addClass("transition from-top")
        });
        PTT.Footer.$footer.find(".newsletter form input[type=text]").on("focus", function() {
            PTT.Footer.newsletterFormActive = !0;
            PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.mq("(orientation: landscape)") && $("html").hasClass("touch") && PTT.Footer.$footer.filter(".slide").css({
                position: "static"
            })
        });
        PTT.Footer.$footer.find(".newsletter form input[type=text]").on("blur", function() {
            PTT.Footer.newsletterFormActive = !1;
            PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.mq("(orientation: landscape)") && $("html").hasClass("touch") && PTT.Footer.$footer.filter(".slide").css({
                position: "absolute"
            })
        });
        PTT.Footer.$footer.find(".newsletter form").on("submit", function(e) {
            e.preventDefault();
            var t = $(this).find("input[type=text]").val();
            if (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)) {
                PTT.Footer.$footer.find(".newsletter").find(".error").hide();
                PTT.Footer.$footer.find(".newsletter").find(".success").show();
                PTT.Footer.$footer.find(".newsletter form").hide();
                $.post($(this).attr("action"), {
                    f: $(this).serialize()
                })
            } else {
                PTT.Footer.$footer.find(".newsletter").find(".error").show();
                PTT.Footer.$footer.find(".newsletter").find(".success").hide()
            }
        })
    },
    resize: function() {
        var e = -1;
        PTT.Footer.$lists.each(function() {
            if ($(this).css("display") == "block" || $(this).css("display") == "inline-block") {
                $(this).css({
                    height: ""
                });
                e = Math.max($(this).outerHeight(), e)
            }
        });
        PTT.Footer.$lists.height(e)
    }
};
PTT.Collabs = {
    init: function() {
        if (!$("body").hasClass("collabs")) return;
        PTT.Collabs.transitionIn();
        $(".video-player").youtubePlayerWithPoster({
            customFullscreen: !1
        })
    },
    transitionIn: function() {
        var e = .4;
        $(".collabs .photo").append($('<div class="transition-overlay" />'));
        TweenMax.to($(".collabs .photo").find(".transition-overlay"), .6, {
            delay: e,
            height: 0,
            ease: Quad.easeOut
        })
    },
    resize: function() {}
};
PTT.MainContainer = {
    resize: function() {
        PTT.Globals.windowHeight = window.innerHeight ? window.innerHeight : PTT.Globals.$window.height();
        PTT.Globals.windowWidth = window.innerWidth ? window.innerWidth : PTT.Globals.$window.width();
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && PTT.Globals.$body.addClass("resizing");
        if (!PTT.Globals.$body.hasClass("overlay"))
            if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
                PTT.Globals.$body.addClass("small-screen");
                var e = $("header.top").is(":visible") ? 55 : 0;
                PTT.Globals.$mainContent.css({
                    height: PTT.Globals.windowHeight - e,
                    width: PTT.Globals.windowWidth,
                    webkitOverflowScrolling: "touch",
                    overflow: "hidden"
                });
                setTimeout(function() {
                    PTT.Globals.$mainContent.css({
                        "overflow-x": "hidden",
                        "overflow-y": "auto",
                        webkitOverflowScrolling: "touch"
                    })
                }, 50)
            } else {
                PTT.Globals.$body.removeClass("small-screen");
                PTT.Globals.$mainContent.css({
                    height: "",
                    width: ""
                });
                $(".fixed").length > 0 && $(".fixed-height-wrapper").css({
                    minHeight: PTT.Globals.windowHeight - $("header.top").outerHeight()
                })
            }
    }
};
$(function() {
    function e() {
        $("body").removeClass("resizing")
    }
    FastClick.attach(document.body);
    $("body").removeClass("men women kids").addClass($.cookie("ptt_gender"));
    $("header.top ul li.category > a").removeClass("active");
    $("header.top ul li.category." + $.cookie("ptt_gender") + " > a").addClass("active");
    PTT.Globals.$window = $(window);
    PTT.Globals.$body = $("body");
    PTT.Globals.$window.on("resize", $.debounce(400, e));
    PTT.Globals.$window.on("resize", PTT.MainContainer.resize);
    PTT.Globals.$mainContent = $(".main-content");
    PTT.Globals.$footer = $("footer.bottom");
    PTT.Globals.windowHeight = window.innerHeight ? window.innerHeight : PTT.Globals.$window.height();
    PTT.Globals.windowWidth = window.innerWidth ? window.innerWidth : PTT.Globals.$window.width();
    PTT.MainContainer.resize();
    e();
    PTT.MainNavigation.init();
    PTT.SlideManager.init();
    PTT.Lookbook.init();
    PTT.VideoPlayer.init();
    PTT.FeaturedProducts.init();
    PTT.TeamRider.init();
    PTT.TvOverview.init();
    PTT.Contact.init();
    PTT.StoreLocator.init();
    PTT.TeamOverview.init();
    PTT.About.init();
    PTT.Footer.init();
    PTT.Collabs.init();
    PTT.NavigationManager.init();
    $(".custom-scroll").jScrollPane();
    if ($("html").hasClass("lt-ie9")) {
        $("input[type=radio]").on("change", function(e) {
            var t = $(this);
            $('input[name="' + t.attr("name") + '"]').each(function() {
                $(this).is(":checked") ? $(this).next("label").addClass("checked") : $(this).next("label").removeClass("checked")
            })
        });
        $("input[type=checkbox]").on("change", function(e) {
            var t = $(this);
            t.is(":checked") ? t.next("label").addClass("checked") : t.next("label").removeClass("checked")
        });
        $("input[type=radio]").each(function(e) {
            var t = $(this);
            $('input[name="' + t.attr("name") + '"]').each(function() {
                $(this).is(":checked") ? $(this).next("label").addClass("checked") : $(this).next("label").removeClass("checked")
            })
        });
        $("input[type=checkbox]").each(function(e) {
            var t = $(this);
            t.is(":checked") ? t.next("label").addClass("checked") : t.next("label").removeClass("checked")
        })
    }
    $(".gender-selection").on("mouseover", "a", function() {
        var e = $("#" + $(this).data("background"));
        TweenMax.to(e, 1, {
            opacity: 1
        })
    });
    $(".gender-selection").on("mouseleave", "a", function() {
        var e = $("#" + $(this).data("background"));
        TweenMax.to(e, 1, {
            opacity: 0
        })
    });
    $(".select-box").selectBox();
    TweenMax.to($(".main-content"), 1, {
        delay: .2,
        opacity: 1,
        ease: Quad.easeOut
    });
    var t = $(".gender-selection").find("#intro-protest").width() + 1;
    TweenMax.to($(".gender-selection").find("#intro-protest"), .5, {
        delay: 1,
        marginLeft: 0,
        marginTop: 0,
        top: 0,
        left: 0,
        ease: Quint.easeOut
    });
    TweenMax.to($(".gender-selection").find("#intro-women"), .6, {
        delay: 1.1,
        marginLeft: 0,
        marginTop: 0,
        top: 0,
        left: t,
        ease: Quint.easeOut
    });
    TweenMax.to($(".gender-selection").find("#intro-kids"), .6, {
        delay: 1.1,
        marginLeft: 0,
        marginTop: 0,
        top: t,
        left: 0,
        ease: Quint.easeOut
    });
    TweenMax.to($(".gender-selection").find("#intro-men"), .6, {
        delay: 1.1,
        marginLeft: 0,
        marginTop: 0,
        top: t,
        left: t,
        ease: Quint.easeOut
    });
    if ($("body").hasClass("contact") || $("body").hasClass("storefinder") || $("body").hasClass("list-with-article") || $("body").hasClass("two-column-photo")) {
        $(window).on("scroll", function() {
            if (!PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
                $(".fixed").css({
                    position: "",
                    height: "",
                    top: "",
                    bottom: ""
                }).scrollTop(0);
                return
            }
            var e = PTT.Globals.$window.scrollTop(),
                t = e + PTT.Globals.windowHeight,
                n = $("footer.bottom");
            TweenMax.to($(".fixed"), .35, {
                scrollTop: e,
                overwrite: 2
            });
            var r = n.position().top + parseInt(n.css("margin-top"), 10);
            t > r ? $(".fixed").css({
                position: "",
                height: "",
                top: "auto",
                bottom: Math.min(t - r, n.outerHeight())
            }) : $(".fixed").css({
                position: "",
                height: "",
                top: "",
                bottom: ""
            })
        });
        $(window).on("resize", function() {
            $(window).trigger("scroll")
        })
    }
    $("body").hasClass("contact") && $(".form-small").html($("div.form").html());
    if ($("body").hasClass("list-with-article") && PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
        $(".list > li").removeClass("active");
        $(".list").on("click", "> li > article > h2 a", function(e) {
            e.preventDefault();
            var t = $(this),
                n = t.parents("li");
            if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL))
                if (!n.hasClass("active")) {
                    $(".list > li").removeClass("active");
                    n.addClass("active");
                    $(".main-content").scrollTop(n.offset().top + $(".main-content").scrollTop() - 50)
                } else $(".list > li").removeClass("active");
            else {
                $(".list > li").removeClass("active");
                n.addClass("active");
                TweenMax.to(window, .5, {
                    scrollTo: 0,
                    ease: Quad.easeOut
                })
            }
            $("article.text").find("h3").html(t.parent("h2").find("a").html());
            $("article.text").find("div").html(t.parents("article").find("div").html())
        })
    }
    $(window).bind("pageshow", function(e) {
        e.originalEvent.persisted && window.location.reload()
    });
    $("input, textarea").placeholder();
    PTT.Analytics.init()
});
var PTT = PTT || {};
PTT.Collection = {
    $footer: null,
    init: function() {
        if (!$("body").hasClass("collection")) return;
        PTT.Collection.$footer = $("footer.bottom");
        PTT.Collection.addListeners();
        PTT.Collection.resize()
    },
    addListeners: function() {
        PTT.Globals.$window.on("scroll", PTT.Collection.scroll);
        PTT.Globals.$window.on("resize", PTT.Collection.scroll)
    },
    resize: function() {
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? $(".collection-items").css("min-height", "") : $(".collection-items").css("min-height", PTT.Globals.windowHeight - $("header.top").outerHeight())
    },
    scroll: function() {
        if (!PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
            $("aside:not(.small-category-sidebar)").css({
                top: "",
                bottom: ""
            }).scrollTop(0);
            return
        }
        var e = PTT.Globals.$window.scrollTop(),
            t = e + PTT.Globals.windowHeight;
        TweenMax.to($("aside:not(.small-category-sidebar)"), .35, {
            scrollTop: e,
            overwrite: 2
        });
        var n = PTT.Collection.$footer.position().top + parseInt(PTT.Collection.$footer.css("margin-top"), 10);
        if (t > n) {
            $("aside:not(.small-category-sidebar)").addClass("footer-in-view");
            $("aside:not(.small-category-sidebar)").css({
                top: "",
                bottom: t - n - $("header.top").outerHeight()
            })
        } else {
            $("aside:not(.small-category-sidebar)").removeClass("footer-in-view");
            $("aside:not(.small-category-sidebar)").css({
                top: "",
                bottom: ""
            })
        }
    }
};
PTT.CollectionOverview = {
    init: function() {
        if ($("body.collection.overview").length == 0) return;
        PTT.CollectionOverview.prepareMobile();
        PTT.CollectionOverview.addListeners();
        PTT.CollectionOverview.scroll();
        PTT.CollectionOverview.transitionIn()
    },
    prepareMobile: function() {
        $("aside").find(".small-sidebar").clone().appendTo($(".small-category-sidebar"))
    },
    addListeners: function() {
        function e(e) {
            e.preventDefault();
            var n = $(this),
                r = n.parent("li"),
                i = r.find("ul");
            if (n.hasClass("active")) return !0;
            t();
            n.addClass("active");
            r.addClass("active");
            i.css({
                "margin-top": -i.outerHeight(!0)
            });
            TweenMax.to(i, .5, {
                marginTop: 0,
                ease: Quad.easeOut
            })
        }

        function t() {
            $(".category-accordion").find("> li.active").each(function() {
                var e = $(this).find("a"),
                    t = $(this),
                    n = t.find("ul");
                e.removeClass("active");
                TweenMax.to(n, .5, {
                    marginTop: -n.outerHeight(!0),
                    ease: Quad.easeOut,
                    onComplete: function() {
                        n.css({
                            "margin-top": ""
                        });
                        t.removeClass("active")
                    }
                })
            })
        }
        $(".filter").filterBox();
        $(".category-accordion").on("click", "> li > a", e);
        $(".opener").on("click", function(e) {
            e.preventDefault();
            if (!$(this).hasClass("open")) {
                $(this).addClass("open");
                TweenMax.to($(".collection-overview-holder"), .5, {
                    left: "-90%",
                    ease: Quad.easeOut
                });
                $(".small-category-sidebar").css({
                    display: "block"
                })
            } else {
                $(this).removeClass("open");
                TweenMax.to($(".collection-overview-holder"), .5, {
                    left: "0",
                    ease: Quad.easeOut,
                    onComplete: function() {
                        $(".small-category-sidebar").css({
                            display: ""
                        });
                        $(".collection-overview-holder").css({
                            left: ""
                        })
                    }
                })
            }
        });
        PTT.Globals.$window.on("scroll", PTT.CollectionOverview.scroll);
        PTT.Globals.$window.on("resize", PTT.CollectionOverview.scroll)
    },
    transitionIn: function() {
        var e = .4,
            t = $(".category-accordion").find("> li > a.active");
        t.parent("li").removeClass("active");
        t.removeClass("active");
        $(".collection-overview-holder aside").append($('<div class="transition-overlay" />'));
        TweenMax.to($(".collection-overview-holder aside").find(".transition-overlay"), .6, {
            delay: e,
            height: 0,
            ease: Quad.easeOut
        });
        TweenMax.delayedCall(.8, function() {
            t.trigger("click")
        });
        var e = .8;
        $(".collection-items article").each(function(t) {
            var n = $(this);
            TweenMax.from(n, .6, {
                delay: e + t % 6 * .1,
                marginTop: "30%",
                ease: Quad.easeOut
            });
            TweenMax.from(n, .4, {
                delay: e + t % 6 * .1,
                opacity: 0,
                ease: Quad.easeOut
            });
            TweenMax.from(n.find("footer"), .3, {
                delay: e + t % 6 * .15,
                marginLeft: "-100%",
                ease: Quad.easeOut
            })
        })
    },
    scroll: function() {
        if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) return !0
    }
};
PTT.CollectionItemViewer = {
    overviewPhotosLoaded: !1,
    currentActive: 0,
    viewerHeight: 0,
    deepZoomViewer: null,
    startTime: 0,
    init: function() {
        PTT.CollectionItemViewer.$photoHolder = PTT.CollectionItem.$page.find($(".photo-slider"));
        PTT.CollectionItemViewer.$zoom = PTT.CollectionItem.$page.find("#collection-item-zoom");
        PTT.CollectionItemViewer
            .$zoomControls = PTT.CollectionItem.$page.find("#collection-item-zoom-controls");
        PTT.CollectionItemViewer.$counter = PTT.CollectionItem.$page.find(".photo-counter");
        var e = PTT.CollectionItemViewer.$photoHolder.data("itemid");
        PTT.CollectionItemViewer.loadRelatedItems(e);
        Seadragon.Config.imagePath = "http://weareprotest.poort80.net/themes/base/gfx/seadragon_ui_images/";
        Seadragon.Config.transformOverlays = !0;
        PTT.CollectionItemViewer.deepZoomViewer = new Seadragon.Viewer("collection-item-zoom");
        PTT.CollectionItemViewer.deepZoomViewer.addEventListener("open", function(e) {
            var t = new Seadragon.TouchController(PTT.CollectionItemViewer.deepZoomViewer);
            PTT.CollectionItemViewer.deepZoomViewer.viewport.zoomTo(.6)
        });
        $(PTT.CollectionItemViewer.deepZoomViewer.getNavControl()).remove();
        PTT.CollectionItemViewer.startTime = (new Date).getTime()
    },
    loadRelatedItems: function(e) {
        var t = "http://weareprotest.poort80.net/bbsearch",
            n = "{'SearchString' : '" + e + "', 'InitialImage' : '" + e + "'}";
        t = t + "?callback=PTT.CollectionItemViewer.addCollectionPhotos&searchData=" + n;
        Poort80.executeJsonpRequest(t)
    },
    loadDeepZoomSpecs: function(e) {
        var t = e + "&fmt=jsonp&callback=PTT.CollectionItemViewer.loadDeepZoom";
        Poort80.executeJsonpRequest(t)
    },
    loadDeepZoom: function(e, t) {
        PTT.CollectionItemViewer.openZoom();
        PTT.CollectionItemViewer.deepZoomViewer.openDzi(t)
    },
    addCollectionPhotos: function(e) {
        for (var t = 0; t < e.Collection.length; t++) {
            var n = e.Collection[t].Thumbnail,
                r = n.substr(0, n.indexOf("$")) + "$ProductDetail$",
                i = $('<div class="photo"><a href="#"><img src="' + r + '" /></a></div>');
            i.data("deepzoomurl", e.Collection[t].ImageResourceFile);
            PTT.CollectionItemViewer.$photoHolder.append(i)
        }
        PTT.CollectionItemViewer.$overviewPhotos = PTT.CollectionItemViewer.$photoHolder.find(".photo");
        PTT.CollectionItemViewer.totalOverviewPhotos = PTT.CollectionItemViewer.$photoHolder.find(".photo").length;
        PTT.CollectionItemViewer.addListeners();
        PTT.CollectionItemViewer.loadOverviewPhotos()
    },
    addListeners: function() {
        PTT.Globals.$window.on("resize", PTT.CollectionItemViewer.resize);
        if (Modernizr.touch) {
            var e = $(".photo-slider").hammer(),
                t = 0;
            e.on("dragstart", function(e) {
                e.stopPropagation();
                t = parseInt(PTT.CollectionItemViewer.$photoHolder.css("left"), 10);
                PTT.CollectionItemViewer.dragging = !0
            });
            e.on("dragleft dragright", function(e) {
                e.stopPropagation();
                var n = (PTT.CollectionItemViewer.$photoHolder.outerWidth(!0) - $(".product-photos").width()) * -1 - $(".product-photos").width() * .15,
                    r = $(".product-photos").width() * .15;
                PTT.CollectionItemViewer.$photoHolder.css({
                    left: Math.min(r, Math.max(t + e.gesture.deltaX, n))
                });
                PTT.CollectionItemViewer.scrollTransition()
            });
            e.on("dragend", function(e) {
                e.stopPropagation();
                var t = Math.abs(parseInt(PTT.CollectionItemViewer.$photoHolder.css("left"), 10)) / $(".photo").width();
                e.gesture.direction == "left" ? t % 1 > .35 && (t = Math.ceil(t)) : e.gesture.direction == "right" && t % 1 < .65 && (t = Math.floor(t));
                PTT.CollectionItemViewer.switchTo(Math.round(t));
                PTT.CollectionItemViewer.dragging = !1
            });
            var n = PTT.CollectionItemViewer.$overviewPhotos.find("a").hammer();
            n.on("tap", function() {
                $(this).parent().hasClass("active") ? PTT.CollectionItemViewer.loadDeepZoomSpecs($(this).parent().data("deepzoomurl")) : PTT.CollectionItemViewer.switchTo($(this).parent().index())
            })
        } else PTT.CollectionItemViewer.$overviewPhotos.on("click", "a", function(e) {
            e.preventDefault();
            $(this).parent().hasClass("active") ? PTT.CollectionItemViewer.loadDeepZoomSpecs($(this).parent().data("deepzoomurl")) : PTT.CollectionItemViewer.switchTo($(this).parent().index())
        });
        PTT.CollectionItemViewer.$overviewPhotos.on("mouseover", "a", function() {
            $(this).parent(".photo").hasClass("active") || TweenMax.to($(this).find("img"), 2, {
                opacity: 1,
                ease: Quint.easeOut
            })
        });
        PTT.CollectionItemViewer.$overviewPhotos.on("mouseout", "a", function() {
            $(this).parent(".photo").hasClass("active") || TweenMax.to($(this).find("img"), 2, {
                opacity: $(this).find("img").data("currentopacity"),
                ease: Quint.easeOut
            })
        });
        PTT.CollectionItemViewer.$zoomControls.find("#zoom-in").on("click", function(e) {
            e.preventDefault();
            PTT.CollectionItemViewer.deepZoomViewer.viewport.zoomBy(1.3)
        });
        PTT.CollectionItemViewer.$zoomControls.find("#zoom-out").on("click", function(e) {
            e.preventDefault();
            PTT.CollectionItemViewer.deepZoomViewer.viewport.zoomBy(.7)
        });
        PTT.CollectionItemViewer.$zoomControls.find("#zoom-close").on("click", function(e) {
            e.preventDefault();
            PTT.CollectionItemViewer.deepZoomViewer.close();
            PTT.CollectionItemViewer.closeZoom()
        })
    },
    loadOverviewPhotos: function() {
        var e = 0;
        PTT.CollectionItemViewer.$photoHolder.css({
            opacity: 0
        });
        PTT.CollectionItemViewer.$overviewPhotos.find("img").each(function() {
            var t = $(this);
            t.imagesLoaded(function() {
                t.data({
                    owidth: t.width(),
                    oheight: t.height()
                });
                e++;
                if (e == PTT.CollectionItemViewer.totalOverviewPhotos) {
                    PTT.CollectionItemViewer.overviewPhotosLoaded = !0;
                    var n = (new Date).getTime(),
                        r = n - PTT.CollectionItemViewer.startTime;
                    if (r < 500) setTimeout(function() {
                        PTT.CollectionItemViewer.enableOverviewPhotos();
                        PTT.CollectionItemViewer.resize()
                    }, 500 - r);
                    else {
                        PTT.CollectionItemViewer.enableOverviewPhotos();
                        PTT.CollectionItemViewer.resize()
                    }
                }
            })
        })
    },
    enableOverviewPhotos: function() {
        PTT.CollectionItemViewer.resize();
        PTT.CollectionItemViewer.$photoHolder.css({
            width: Math.round(52 * PTT.CollectionItemViewer.totalOverviewPhotos) + "%"
        }).addClass("active");
        PTT.CollectionItemViewer.$overviewPhotos.css({
            width: Math.round(100 / PTT.CollectionItemViewer.totalOverviewPhotos) + "%"
        });
        PTT.CollectionItemViewer.switchTo(0);
        TweenMax.to(PTT.CollectionItemViewer.$photoHolder, .75, {
            opacity: 1,
            ease: Quad.easeOut
        })
    },
    switchTo: function(e) {
        TweenMax.to(PTT.CollectionItemViewer.$photoHolder, .5, {
            left: e * -52 + "%",
            overwrite: 1,
            onUpdate: function() {
                PTT.CollectionItemViewer.scrollTransition()
            },
            onComplete: function() {
                PTT.CollectionItemViewer.$overviewPhotos.removeClass("active").eq(e).addClass("active")
            }
        });
        PTT.CollectionItemViewer.currentActive = e;
        PTT.CollectionItemViewer.updateCounter()
    },
    scrollTransition: function() {
        var e = PTT.CollectionItemViewer.$photoHolder.width() / (PTT.CollectionItemViewer.totalOverviewPhotos - 1);
        PTT.CollectionItemViewer.$overviewPhotos.each(function() {
            var t = $(this),
                n = Math.abs(Math.abs(PTT.CollectionItemViewer.$photoHolder.position().left) - t.position().left),
                r = (e - n) / e;
            TweenMax.killTweensOf(t.find("img"));
            t.find("img").css({
                opacity: r
            }).data({
                currentopacity: r
            })
        })
    },
    updateCounter: function() {
        PTT.CollectionItemViewer.$counter.find(".counter-count").text(PTT.CollectionItemViewer.currentActive + 1);
        PTT.CollectionItemViewer.$counter.find(".counter-total").text(PTT.CollectionItemViewer.totalOverviewPhotos)
    },
    openZoom: function() {
        PTT.CollectionItemViewer.$zoom.show().addClass("active");
        PTT.CollectionItemViewer.$zoomControls.show()
    },
    performZoom: function(e) {
        if (!$(this).hasClass("active")) return;
        var t = $(this).find("img"),
            n = $(this),
            r = $("header.top").outerHeight(),
            i = t.height() + r,
            s = n.outerHeight() - r;
        i > s && TweenMax.to(n, .3, {
            scrollTop: (i - s) * ((e.clientY - r) / s),
            overwrite: 1
        })
    },
    closeZoom: function() {
        PTT.CollectionItemViewer.$zoom.hide().removeClass("active");
        PTT.CollectionItemViewer.$zoomControls.hide()
    },
    resize: function() {
        var e = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? 625 : 300;
        PTT.CollectionItemViewer.viewerHeight = Math.round(Math.min(e, Math.max(300, PTT.Globals.windowHeight - PTT.CollectionItem.$page.find("header.top").height() - 90)));
        TweenMax.to(PTT.CollectionItemViewer.$photoHolder, .5, {
            height: PTT.CollectionItemViewer.viewerHeight,
            ease: Quad.easeOut
        });
        if (PTT.CollectionItemViewer.overviewPhotosLoaded) {
            var t = parseInt(PTT.CollectionItemViewer.$overviewPhotos.css("padding-top"), 10) + parseInt(PTT.CollectionItemViewer.$overviewPhotos.css("padding-bottom"), 10);
            PTT.CollectionItemViewer.$overviewPhotos.each(function() {
                var e = $(this).find("img"),
                    n = (PTT.CollectionItemViewer.viewerHeight - t) / e.data("oheight");
                e.css({
                    marginLeft: Math.round(n * e.data("owidth")) * -0.5,
                    width: Math.round(n * e.data("owidth")),
                    height: PTT.CollectionItemViewer.viewerHeight - t
                })
            })
        }
    }
};
PTT.CollectionItem = {
    $sizeTable: null,
    init: function() {
        if ($("body.collection.item").length == 0) return;
        PTT.CollectionItem.$page = $(".collection.item");
        PTT.CollectionItem.$sizeTable = $(".sizetable");
        PTT.CollectionItem.prepareMobile();
        PTT.CollectionItem.addListeners();
        PTT.CollectionItemViewer.init();
        PTT.CollectionItem.resize();
        PTT.CollectionItem.transitionIn()
    },
    prepareMobile: function() {
        PTT.CollectionItem.$page.find(".product-photos").after(PTT.CollectionItem.$page.find("aside").clone())
    },
    addListeners: function() {
        PTT.CollectionItem.$page.find(".tabs").tabs();
        $(".size-table-button").on("click", PTT.CollectionItem.openSizeTable);
        PTT.Globals.$window.on("resize", PTT.CollectionItem.resize);
        $(".sizes:not(.noselect) ul li a").click(function(e) {
            e.preventDefault();
            if ($(this).attr("class") != "disabled") {
                $(".sizes ul li a").removeClass("active");
                $(this).addClass("active");
                $("#select_ProductRefID").val($(this).attr("productdata-val"));
                $("#ID_ProductRefID").val($(this).attr("productdata-ref"))
            }
        });
        $(".sizes:not(.noselect) ul li a").click(function(e) {
            e.preventDefault()
        })
    },
    openSizeTable: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        if (t != "#") {
            PTT.CollectionItem.$sizeTable.html("");
            $.ajax({
                url: t + "?ajax=1",
                cache: !1,
                type: "GET",
                crossDomain: !0,
                dataType: "html",
                success: function(e) {
                    PTT.CollectionItem.$sizeTable.html($("<div/>").html(e).contents().find(".size-holder").parent().html());
                    PTT.CollectionItem.$sizeTable.find(".close-button a").on("click", PTT.CollectionItem.closeSizeTable);
                    $(".select-box").selectBox({
                        callback: PTT.CollectionItem.switchSizeTable
                    })
                }
            });
            PTT.CollectionItem.$sizeTable.css({
                height: $(".main-content").height()
            }).show();
            $(".main-content").scrollTop(0)
        }
    },
    switchSizeTable: function(e, t) {
        var n = $("#select-cat").data(),
            r = $("#select-subcat").data();
        if (typeof n.section != "undefined" && typeof r.section != "undefined") {
            var i = $(".sizetable-section#" + n.section + "-" + r.section);
            if (i.length > 0 && !i.hasClass("active")) {
                var s = PTT.CollectionItem.$sizeTable.find(".sizetable-section.active");
                TweenMax.to(s, .25, {
                    opacity: 0,
                    onComplete: function() {
                        s.removeClass("active");
                        i.css({
                            opacity: 0
                        }).addClass("active");
                        TweenMax.to(i, .25, {
                            delay: .25,
                            opacity: 1
                        })
                    }
                })
            }
        }
    },
    closeSizeTable: function(e) {
        e && e.preventDefault();
        PTT.CollectionItem.$sizeTable.hide()
    },
    resize: function() {
        PTT.CollectionItem.closeSizeTable(null)
    },
    transitionIn: function() {
        var e = .4;
        $("aside").append($('<div class="transition-overlay" />'));
        TweenMax.to($("aside").find(".transition-overlay"), .6, {
            delay: e,
            height: 0,
            ease: Quad.easeOut
        });
        $(".sharing").css({
            opacity: 0
        });
        TweenMax.to($(".sharing"), .5, {
            delay: 1.2,
            opacity: 1
        })
    }
};
PTT.Account = {
    init: function() {
        if (!$("body").hasClass("account")) return;
        PTT.Account.addListeners();
        PTT.Account.resize()
    },
    addListeners: function() {
        if ($("body.account").hasClass("settings")) {
            var e = 0;
            $(".settings .button-holder .button.light").each(function() {
                e = Math.max($(this).width(), e)
            });
            $(".settings .button-holder .button.light").width(e + 10)
        }
        $('input[type="radio"], input[type="checkbox"]').each(function() {
            $(this).addClass("needsclick");
            $(this).next("label").addClass("needsclick");
            $(this).next("label").find("span").addClass("needsclick");
            $(this).next("label").find(">div").addClass("needsclick")
        });
        if ($("body.account").hasClass("bag")) {
            $(".remove-button").on("click", function(e) {
                e.preventDefault();
                $(this).hide();
                var t = $(this).parents(".remove");
                t.find(".remove-confirm").show();
                t.find(".add-to-bag").hide()
            });
            $(".remove-cancel").on("click", function(e) {
                e.preventDefault();
                var t = $(this).parents(".remove");
                t.find(".remove-button").show();
                t.find(".add-to-bag").show();
                $(this).parents(".remove-confirm").hide()
            });
            $("#discountcode").on("change", function() {
                $(this).is(":checked") ? $(".discount-code").show() : $(".discount-code").hide()
            });
            $(".discount-code").on("click", ".discount-code-button", function(e) {
                e.preventDefault();
                $("#discount").addClass("discount-check");
                $(".discount-code").find(".discount-code-button").hide();
                $(".discount-code").find(".discount-code-button-close").show();
                $(".discount-calculation-line").show()
            });
            $(".discount-code").on("click", ".discount-code-button-close", function(e) {
                e.preventDefault();
                $("#discount").removeClass("discount-check").val("");
                $(".discount-code").find(".discount-code-button").show();
                $(".discount-code").find(".discount-code-button-close").hide();
                $(".discount-calculation-line").hide()
            })
        }
        $("input[name=paymethod]").on("change", function() {
            $("#afterpay").is(":checked") ? $(".afterpay-form").show() : $(".afterpay-form").hide()
        });
        $("body.account").hasClass("checkout-address") && $(".new-address > h2 a").on("click", function(e) {
            e.preventDefault();
            $(".new-address").find("fieldset").toggleClass("active")
        });
        $("body").hasClass("checkout") && $("#open-terms").fancybox();
        PTT.Globals.$window.on("resize", PTT.Account.resize)
    },
    resize: function() {
        $("body.account").hasClass("bag") && $(".bag-items .product .product-description").css("width", $(".bag-items .product .product-description").parent().width() - 80);
        if ($("body.account").hasClass("checkout")) {
            var e = $(".checkout .addresses .content-holder");
            if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
                if (typeof e.data("equalheight") == "undefined") {
                    var t = 0;
                    e.each(function() {
                        t = Math.max($(this).height(), t)
                    });
                    e.data("equalheight", t + 60)
                }
                e.css({
                    height: e.data("equalheight")
                })
            } else e.css({
                height: ""
            })
        }
    }
};
$(function() {
    PTT.Collection.init();
    PTT.CollectionOverview.init();
    PTT.CollectionItem.init();
    PTT.Account.init();
    $(".collection-items, .product-bar").find("article").on("mouseover", function() {
        var e = $(this).find("img");
        $(this).css({
            overflow: "visible"
        });
        TweenMax.to(e, .5, {
            marginTop: -10,
            ease: Quad.easeOut
        })
    }).on("mouseleave", function() {
        var e = $(this).find("img");
        TweenMax.to(e, .5, {
            marginTop: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                $(this).css({
                    overflow: "hidden"
                })
            }
        })
    })
});