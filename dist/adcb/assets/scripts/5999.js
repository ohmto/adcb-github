(function() { try { var f = document.createElement("script");
        f.type = "text/javascript";
        f.async = !0;
        f.src = "//cdn12.lemnisk.co/smt/smthandler.php?account_id=5999"; var h = document.createElement("script");
        h.type = "text/javascript";
        h.async = !0;
        h.src = "//cdn25.lemnisk.co/ssp/MEA_AbuDhabiCommercialBank_DMP/sw/sw_registration.js"; var g = document.createElement("script");
        g.type = "text/javascript";
        g.async = !0;
        g.src = "//cdn25.lemnisk.co/ssp/banners/images/common/images/bfsi/ads/ads.js"; var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(f, e);
        e.parentNode.insertBefore(h, e);
        e.parentNode.insertBefore(g, e);
        f.onload = function() { try { pixel.parse() } catch (a) {} };
        f.onreadystatechange = function() { if ("complete" == f.readyState || "loaded" == f.readyState) { try { pixel.parse() } catch (a) {} } } } catch (h) {} })();
(function(b) { var a = {};
    a.bpconf = [{ cid: "5999", suffixImpressionId: "BNP", defaultWidth: 1306, defaultHeight: 609, iframeUrl: "", locatorDivId: "bp_5999_DmpSlotId90", isDefault: false, customXhttp: null, abl: "//cdn25.vzeesp.com/ssp/MEA_AbuDhabiCommercialBank_DMP/bp/fallback_B_90.html", dl: "//cdn25.lemnisk.co/ssp/MEA_AbuDhabiCommercialBank_DMP/bp/fallback_90.html", iid: null, divId: "bp_ifrm", iframeId: "bp_iframe", domain: "//mu-ax-n.lemnisk.co/bp", slotId: "90", defaultRenderTimeout: 3000, resizeTimer: null, resizeTimeout: 50 }, { cid: "5999", suffixImpressionId: "BNP", defaultWidth: 1306, defaultHeight: 746, iframeUrl: "", locatorDivId: "bp_5999_DmpSlotId91", isDefault: false, customXhttp: null, abl: "//cdn25.vzeesp.com/ssp/MEA_AbuDhabiCommercialBank_DMP/bp/fallback_B_91.html", dl: "//cdn25.lemnisk.co/ssp/MEA_AbuDhabiCommercialBank_DMP/bp/fallback_91.html", iid: null, divId: "bp_ifrm", iframeId: "bp_iframe", domain: "//mu-ax-n.lemnisk.co/bp", slotId: "91", defaultRenderTimeout: 3000, resizeTimer: null, resizeTimeout: 50 }];
    a.globalConfig = { suffixImpressionId: "BNP", activeBp: [], missingDivs: [], intervalId: null };
    a.getiid = function(d) { var h, c, g, f; var e = function(k, j) { var i = parseInt(new Date().getTime(), 16); while (k.length < j) { k = k + ((Math.floor(Math.random() * i)).toString(16)) }
            k = k.slice(k.length - j); return k };
        h = parseInt(new Date().getTime() / 1000, 10).toString(16);
        c = parseInt(new Date().getTime() / 1000, 16);
        g = (Math.floor(Math.random() * c)).toString(16);
        h = e(h, 8);
        g = e(g, 15);
        f = a.bpconf[d].cid + h + g + a.globalConfig.suffixImpressionId; return f };
    a.attachWindowEventListeners = function() { var d = [{ event: "resize", handler: a.handleOnResizeEvent }, { event: "orientationchange", handler: a.handleOnResizeEvent }]; for (var c = 0; c < d.length; c++) { b.addEventListener(d[c].event, d[c].handler, false) } };
    a.handleOnResizeEvent = function() { a.globalConfig.activeBp.forEach(function(c, f) { var e = a.bpconf[c]; var d, g = document.getElementById(e.iframeId); if (g && g.contentWindow && g.contentWindow.displayItems && g.contentWindow.displayItems.getIframeDimensions) { d = g.contentWindow.displayItems.getIframeDimensions(document.body.clientWidth);
                g.setAttribute("width", d.width);
                g.setAttribute("height", d.height) } else { e.resizeTimer = setTimeout(function() { a.handleOnResizeEvent() }, e.resizeTimeout) } }) };
    a.firstPartyCookie = function(g) { var c, f; if (!g) { return "" }
        c = document.cookie;
        f = c.split(";"); for (var e in f) { if (f.hasOwnProperty(e)) { var d = f[e].match(/\s*(.*)=(.*)/); if (d) { if (d[1] === g && d[2]) { return d[2] } } } } return "" };
    a.constructIframeUrl = function(d) { var c = a.bpconf[d];
        c.isDefault = false;
        c.iframeUrl = c.domain + "?sid=" + c.slotId + "&force_adv_id=VIZVRM" + c.cid + "&rid=" + c.iid + "&sfpc=" + a.firstPartyCookie("_vz") + "&loc=" + encodeURIComponent(b.location) + "&rfr=" + encodeURIComponent(document.referrer) + a.isFirstTime() + a.getUTMparams(); return };
    a.isFirstTime = function() { return a.firstPartyCookie("_vz") ? "" : "&ftu=1" };
    a.getUTMparams = function() { var d = new RegExp("(?:\\?|&)(utm_[^=]+)=(.*?)(?=&|$)", "gi"); var e = {},
            c; while ((c = d.exec(document.URL)) != null) { e[c[1]] = c[2] } if (Object.keys(e).length > 0) { return "&data=" + encodeURIComponent(JSON.stringify(e)) } else { return "" } };
    a.renderIframeContainer = function(d) { var f, e; var c = a.bpconf[d];
        f = document.createElement("div");
        f.setAttribute("id", c.divId);
        f.setAttribute("overflow", "hidden");
        f.setAttribute("lineHeight", 0);
        f.setAttribute("margin", 0);
        f.setAttribute("padding", 0);
        e = document.getElementById(c.locatorDivId); if (e == null) { return null }
        e.appendChild(f); return f };
    a.renderIframe = function(e, d) { var f, g; var c = a.bpconf[d];
        f = document.getElementById(c.iframeId); if (!f) { f = document.createElement("iframe");
            f.setAttribute("id", c.iframeId);
            f.setAttribute("width", c.defaultWidth);
            f.setAttribute("height", c.defaultHeight);
            f.setAttribute("scrolling", "no");
            f.setAttribute("marginwidth", "0");
            f.setAttribute("marginheight", "0");
            f.setAttribute("frameborder", "0");
            f.setAttribute("style", "display:block;");
            g = document.getElementById(c.divId); if (g != null) { g.appendChild(f) } }
        f.contentWindow.document.write(e.responseText);
        f.contentWindow.document.close();
        c.resizeTimer = setTimeout(function() { a.handleOnResizeEvent() }, c.resizeTimeout) };
    a.renderBanner = function(d) { var c = a.bpconf[d];
        c.iid = a.getiid(d);
        c.divId += c.iid;
        c.iframeId += c.iid;
        a.constructIframeUrl(d);
        a.renderIframeContainer(d); var e = c.iframeUrl;
        c.customXhttp = a.ajaxRequest(e, false, d) };
    a.customBanner = function(c) { a.renderIframe(a.bpconf[c].customXhttp, c) };
    a.defaultBanner = function(e) { var d = a.bpconf[e]; if (!document.getElementById(d.iframeId)) { if (!d.isDefault) { d.isDefault = true; var c = a.isAdBlockEnabled(); var f = location.protocol + (a.isAdBlockEnabled() ? d.abl : d.dl);
                d.customXhttp = a.ajaxRequest(f, true, e) } } };
    a.isAdBlockEnabled = function() { return !document.getElementById("tSrngBEkWlDy") };
    a.checkIfBpPresent = function() { a.bpconf.forEach(function(d, c) { var e = document.getElementById(d.locatorDivId); if (e) { a.globalConfig.activeBp.push(c);
                a.renderBanner(c) } else { a.globalConfig.missingDivs.push(c) } });
        b.addEventListener("load", a.handleMissingDivs);
        a.globalConfig.intervalId = setInterval(a.handleMissingDivs, 500);
        a.attachWindowEventListeners();
        setTimeout(function() { clearInterval(a.globalConfig.intervalId) }, 2500) };
    a.handleMissingDivs = function() { var e = []; var c = a.globalConfig.missingDivs;
        c.forEach(function(f, g) { var h = document.getElementById(a.bpconf[f].locatorDivId); if (h) { e.push(g);
                a.globalConfig.activeBp.push(f);
                a.renderBanner(f) } }); if (e.length > 0) { for (var d = e.length - 1; d >= 0; d--) { a.globalConfig.missingDivs.splice(e[d], 1) } } };
    a.onloadCheckBp = function() { a.handleMissingDivs() };
    a.ajaxRequest = function(d, g, c) { var i; if (b.XDomainRequest) { i = new XDomainRequest(); if (i) { i.onerror = function() { a.defaultBanner(c) };
                i.ontimeout = function() { a.defaultBanner(c) };
                i.onload = function() { a.customBanner(c) };
                i.timeout = a.bpconf[c].defaultRenderTimeout;
                i.open("get", d);
                i.send() } else { if (!g) { a.defaultBanner(c) } } } else { i = new XMLHttpRequest(); try { if (!g) { i.withCredentials = true } } catch (h) {}
            i.onreadystatechange = function() { if (i.readyState == 4) { if (i.status == 200 && this.responseText) { clearTimeout(f);
                        a.customBanner(c) } else { if (!g) { a.defaultBanner(c) } } } }; var f = setTimeout(function() { if (!g) { a.defaultBanner(c) } }, a.bpconf[c].defaultRenderTimeout);
            i.open("GET", d, true);
            i.send() } return i };
    a.checkIfBpPresent() })(window);

function getUserAgent() { var a = navigator.userAgent; if (/ipad/i.test(a)) { return "MOBILE" } else { if (/android|Tablet/ig.test(a) && !(/mobile/i.test(a))) { return "MOBILE" } else { if ((/mqqbrowser|tencenttraveler|baidubrowser|criOS|ucbrowser|mobile|CrMo/ig.test(a)) || (/opera|opr/ig.test(a) && /mobi|mini/ig.test(a))) { return "MOBILE" } } } return "DESKTOP" }
if (!Function.prototype.bind) { Function.prototype.bind = function(a) { if (typeof this !== "function") { throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable") } var e = Array.prototype.slice.call(arguments, 1),
            d = this,
            b = function() {},
            c = function() { return d.apply(this instanceof b && a ? this : a, e.concat(Array.prototype.slice.call(arguments))) };
        b.prototype = this.prototype;
        c.prototype = new b(); return c } }
var nbConf = null;
var nbConf = { url: (location.protocol == "https:" ? "https:" : "http:") + "//cdn25.lemnisk.co/ssp/nb/MEA_AbuDhabiCommercialBank_DMP/adcb-notbot.html", advId: 5999, trigger: "hover", Mtrigger: "click", parentId: "vzNotifyDropdown_desktop", toggleId: "vzNotifications_desktop", container: "notificationContainer_desktop", MparentId: "vzNotifyDropdown_mobile", MtoggleId: "vzNotifications_mobile", Mcontainer: "notificationContainer_mobile", domain: "adcb.com/" };

function NB() { this.parentElm = document.getElementById(nbConf.parentId);
    this.containerElm = document.getElementById(nbConf.container);
    this.toggleElm = document.getElementById(nbConf.toggleId);
    this.MparentElm = document.getElementById(nbConf.MparentId);
    this.McontainerElm = document.getElementById(nbConf.Mcontainer);
    this.MtoggleElm = document.getElementById(nbConf.MtoggleId);
    this.trigger = nbConf.trigger;
    this.Mtrigger = nbConf.Mtrigger;
    this.advId = nbConf.advId;
    this.domain = nbConf.domain;
    this.intervalId = null;
    this.nbFound = false }
NB.prototype.ajax = function(c, a) { var d = this,
        b; if (window.XDomainRequest) { b = new XDomainRequest(); if (!b) { return false }
        b.onload = function() { return a(b, true) };
        b.open("get", c);
        b.send() } else { b = new XMLHttpRequest(); if (!b) { return false }
        b.onreadystatechange = function() { return a(b) };
        b.open("GET", c);
        b.send() } };
NB.prototype.getCookie = function(b) { var c = new RegExp("(?:^" + b + "|;\\s*" + b + ")=(.*?)(?:;|$)", "g"); var a = c.exec(document.cookie); return (a === null) ? null : a[1] };
NB.prototype.renderResponse = function(a, b) { if (b) { this.renderHTML(a) } else { if (a.readyState === XMLHttpRequest.DONE) { if (a.status === 200) { this.renderHTML(a) } else { console.log("There was a problem with the request.") } } } };
NB.prototype.renderHTML = function(c) { var b = document.getElementById("vzAjax");
    b.innerHTML = c.responseText; var a = b.getElementsByTagName("script"); if (a.length) { this.DOMEval(a, 0) } };
NB.prototype.connect = function() { this.ajax(nbConf.url, this.renderResponse.bind(this)) };
NB.prototype.DOMEval = function(d, b) { var c = this; var a = document.createElement("script"); if (d[b].src) { a.src = d[b].src } else { a.innerHTML = d[b].innerHTML }
    d[b].appendChild(a); if (d[b].src) { a.onload = this.loading_complete.bind(this, d, b, a);
        a.onerror = this.loading_complete.bind(this, d, b, a) } else { this.loading_complete(d, b, a) } };
NB.prototype.checkIfNbPresent = function() { document.addEventListener("load", this.checkIfDivPresent.bind(this));
    this.intervalId = setInterval(this.checkIfDivPresent.bind(this), 100);
    setTimeout(function() { clearInterval(this.intervalId) }.bind(this), 10000) };
NB.prototype.checkIfDivPresent = function() { if (this.nbFound == false) { var a = document.getElementById("vzAjax"); if (null != a) { this.nbFound = true;
            clearInterval(this.intervalId);
            this.connect() } } };
NB.prototype.loading_complete = function(c, b, a) { c[b].removeChild(a); if (c[b + 1]) { this.DOMEval(c, b + 1) } };
var $notify = new NB();
$notify.checkIfNbPresent();