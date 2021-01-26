if ($("#applynow").attr("data-type") == "lead") {
    $("[href=#applynow]").text($("#applynow").attr("data-text"));
}
if ($("#applynow").attr("data-type") == "email") {
    $("[href=#applynow]").text($("#applynow").attr("data-text"));
}




var _loc = window.location.pathname,
    _location = '';

if (_loc.indexOf("/en") >= 0) {
    _location = _loc.replace("/en/", "/ar/");
    $(".language-links__link").attr("href", _location);
    $(".__lang-ar").attr("href", _location);
    $(".__lang-en").attr("href", _loc);


}
if (_loc.indexOf("/ar") >= 0) {
    _location = _loc.replace("/ar/", "/en/");
    $(".language-links__link").attr("href", _location);
    $(".__lang-ar").attr("href", _loc);
    $(".__lang-en").attr("href", _location);
}
var _el = document.getElementById("_switchLang");
if (_el) {
    _el.href = _location;
    var _adcbLogo = document.getElementById("_logoHome");
    var _adcbFooterlogo = document.getElementById("_logoFooter");

    if (_loc.indexOf("/en") >= 0) {
        if (_loc.indexOf("islamic/") >= 0) {
            if (_loc.indexOf("/islamic/personal/") >= 0) {
                _adcbLogo.href = "/en/islamic/personal";
                _adcbFooterlogo.href = "/en/islamic/personal";
            } else if (_loc.indexOf("/islamic/business/") >= 0) {
                _adcbLogo.href = "/en/islamic/business";
                _adcbFooterlogo.href = "/en/islamic/business";
            } else {
                _adcbLogo.href = "/en/islamic/personal";
                _adcbFooterlogo.href = "/en/islamic/personal";
            }
        } else if (_loc.indexOf("business/") >= 0) {
            _adcbLogo.href = "/en/business/";
            _adcbFooterlogo.href = "/en/business/";
        } else if (_loc.indexOf("private/") >= 0) {
            _adcbLogo.href = "/en/private/";
            _adcbFooterlogo.href = "/en/private/";
        } else if (_loc.indexOf("about/") >= 0) {
            _adcbLogo.href = "/en/personal/";
            _adcbFooterlogo.href = "/en/personal/";
        } else {
            _adcbLogo.href = "/en/personal/";
            _adcbFooterlogo.href = "/en/personal/";
        }
    }
    if (_loc.indexOf("/ar") >= 0) {
        if (_loc.indexOf("islamic/") >= 0) {

            if (_loc.indexOf("/islamic/personal/") >= 0) {
                _adcbLogo.href = "/ar/islamic/personal";
                _adcbFooterlogo.href = "/ar/islamic/personal";
            } else if (_loc.indexOf("/islamic/business/") >= 0) {
                _adcbLogo.href = "/ar/islamic/business";
                _adcbFooterlogo.href = "/ar/islamic/business";
            } else {
                _adcbLogo.href = "/ar/islamic/";
                _adcbFooterlogo.href = "/ar/islamic/";
            }
        } else if (_loc.indexOf("business/") >= 0) {
            _adcbLogo.href = "/ar/business/";
            _adcbFooterlogo.href = "/ar/business/";
        } else if (_loc.indexOf("private/") >= 0) {
            _adcbLogo.href = "/ar/private/";
            _adcbFooterlogo.href = "/ar/private/";
        } else if (_loc.indexOf("about/") >= 0) {
            _adcbLogo.href = "/ar/personal/";
            _adcbFooterlogo.href = "/ar/personal/";
        } else {
            _adcbLogo.href = "/ar";
            _adcbFooterlogo.href = "/ar";
        }
    }
}

var _productText = $("#txtProductTitle").val();
if (_productText) {
    $("#txtProduct").val(_productText)
}
$(document).ready(function() {
    $("._ref-change").each(function() { var _this = $(this); var _href = _this.attr("href");
        _this.attr("href", _href + "#active-tab"); })
})

var _webLang = $("html").attr("lang");
ADCB.mapTranslations.timetable = "Working Hours";
if (_webLang == "ar") {
    ADCB.mapTranslations.address = "العنوان";
    ADCB.mapTranslations.contactnumbers = "أرقام التواصل";
    ADCB.mapTranslations.services = "الخدمات";
    ADCB.mapTranslations.notavailable = " غير متاح";
    ADCB.mapTranslations.getdirection = "حدد موقع الفرع/ جهاز الصراف الآلي على الخريطة ";
    ADCB.mapTranslations.timetable = "ساعات العمل";
}
var _switchStatus = $("header").attr("data-lang");
if (_switchStatus) {
    if (_switchStatus == "Yes") {
        $("#_switchLang").hide();
        $(".language-links__link").hide();
        if (_webLang == "en") {
            $(".__lang-ar").hide();
        } else {
            $(".__lang-en").hide();


        }
    }
}
if (document.getElementById("_breadcrumbs") != null)
    document.getElementById("_breadcrumbsfooter").innerHTML = document.getElementById("_breadcrumbs").innerHTML;


function triggerChat() {
    $(".c-chat__icon").trigger("click");
}

function setCookiesForClassic(flag) {
    var date = new Date();
    name = "isClassicADCB";
    values = flag;
    var expString = new Date("06/09/2019").toUTCString() + ";";

    document.cookie = name + "=" + values + ";" + expString;
    $(".c-gdpr-bar").addClass("-hide");
}

function getCookie(cname) {
    var name = cname + "=";

    var decodedCookie = document.cookie;


    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {

        var c = ca[i];

        while (c.charAt(0) == ' ') {

            c = c.substring(1);

        }

        if (c.indexOf(name) == 0) {

            return c.substring(name.length, c.length);

        }

    }

    return "";

}



var lStrClassicVisit = getCookie("isClassicADCB");





if (["Y", "N"].indexOf(lStrClassicVisit) < 0) {

    $(".c-gdpr-bar").removeClass("-hide");

}
$("#_stayHere").click(function() {
    setCookiesForClassic("Y");
})
$("#_classicSite").click(function() {
    event.preventDefault();
    setCookiesForClassic("NO");
    window.location.href = $(this).attr("href");

})


/* GTM Implementation */

/* Top Navigation- Menu */
$(".o-menu-button").click(function() {
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Top Navigation',
        'eventLabel': 'Menu',
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* Top Navigation- Go To Islamic Banking */
$(".o-menu-button__text a").click(function() {
    var result = "";
    if ($(this).hasClass("-switch-personal"))
        result = "Go to ADCB";
    else
        result = "Go to Islamic Banking";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Top Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/*  GTM- Top Navigation Logo */
$("#_logoHome").click(function() {
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Top Navigation',
        'eventLabel': 'Logo',
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* GTM- Top Navigation Icons */
$(".c-quick-links a").click(function() {
    var result = "";
    if ($(this).hasClass("lang-switch")) {
        result = "Language Switch";
    } else if ($(this).hasClass("icon-search")) {
        result = "Website Search";
    } else if ($(this).hasClass("icon-location")) {
        result = "Branch & ATM Locator";
    }

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Top Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/* Main Navigation- Go To Islamic Banking */
$(".o-switch-button__text").click(function() {
    var result = "";
    if ($(this).hasClass("-rounded-personal"))
        result = "Go to ADCB";
    else
        result = "Go to Islamic Banking";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Main Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});



/* Personal,Business,Private*/
$(".c-main-nav__content .nav-lvl__item a").click(function() {
    var result = "";
    var link = $(this).attr("href").split("/");

    if ($(this).attr("href").indexOf("/islamic/") < 0)
        result = titlecase_all_words(link[2]);
    else
        result = titlecase_all_words(link[3]);

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Main Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* Cards,Loans */
$(".c-main-nav__content .nav-lvl01__link").click(function() {
    var link = $(this).attr("href").split("/");
    link[3] = (link[3].split(".aspx")[0]).replace(/-/g, ' ');
    var result = titlecase_all_words(link[2] + " : " + link[3]);

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Main Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* Ex- Debit cards */
$(".c-main-nav__content .nav-lvl02__item a").click(function() {
    var link = $(this).attr("href").split("/");
    var result = "";
    if (link.indexOf("islamic") < 0) {
        if (link[3].indexOf(".aspx") >= 0) {
            link[3] = (link[3].split(".aspx")[0]).replace(/-/g, " ");
            result = link[2] + " : " + link[3];
        } else {
            link[3] = link[3].replace(/-/g, " ");
            if (link[4].indexOf("default") >= 0) {
                result = link[2] + " : " + link[3];
            } else {
                if (link[link.length - 1] == "") {
                    link[link.length - 2] = (link[link.length - 2].split(".aspx")[0]).replace(/-/g, " ");
                    result = link[2] + " : " + link[3] + " : " + link[link.length - 2];
                } else {
                    link[link.length - 1] = (link[link.length - 1].split(".aspx")[0]).replace(/-/g, " ");
                    result = link[2] + " : " + link[3] + " : " + link[link.length - 1];
                }
            }
        }
    } else {
        if (link[4].indexOf(".aspx") >= 0) {
            link[4] = (link[4].split(".aspx")[0]).replace(/-/g, " ");
            result = link[3] + " : " + link[4];
        } else {
            link[4] = (link[4].split(".aspx")[0]).replace(/-/g, " ");
            if (link[5].indexOf("default") >= 0) {
                result = link[3] + " : " + link[4];
            } else {
                if (link[link.length - 1] == "") {
                    link[link.length - 2] = (link[link.length - 2].split(".aspx")[0]).replace(/-/g, " ");
                    result = link[3] + " : " + link[4] + " : " + link[link.length - 2];
                } else {
                    link[link.length - 1] = (link[link.length - 1].split(".aspx")[0]).replace(/-/g, " ");
                    result = link[3] + " : " + link[4] + " : " + link[link.length - 1];
                }
            }
        }
    }
    result = titlecase_all_words(result);

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Main Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* GTM - Footer Navigation */
$("footer .nav-lvl02__link").click(function() {
    var link = $(this).attr("href");
    var result = "";
    debugger;
    if (link == "#")
        result = "Branches & ATMs";
    else if (link.indexOf("adcbsecurities") >= 0)
        result = "ADCB Securities";
    else if (link.indexOf("www.adcb.com/") > 0 || link.indexOf("/en/") >= 0 || link.indexOf("/ar/") >= 0) {
        link = $(this).attr("href").split("/");
        result = link[link.length - 1].replace(".aspx", " ");
        result = result || link[link.length - 2];
        if (result.indexOf("default") >= 0) {
            result = link[link.length - 2];
        }
    } else {
        link = $(this).attr("href").split("/");
        var result = $(this).attr("href").split(".")[1];
    }

    result = titlecase_all_words(result.replace(/-/g, " "));
    alert(result);
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Footer Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

$(".site-footer__menu-list a").click(function() {
    var link = $(this).attr("href");
    var result = "";

    if (link.indexOf("usapatriot") >= 0)
        result = "USA Patriot";
    else if (link.indexOf("www.adcb.com/") > 0 || link.indexOf("/en/") >= 0 || link.indexOf("/ar/") >= 0) {
        link = $(this).attr("href").split("/");
        result = link[link.length - 1].replace(".aspx", " ");
        result = result || link[link.length - 2];
        if (result.indexOf("default") >= 0) {
            result = link[link.length - 2];
        }
    } else {
        link = $(this).attr("href").split("/");
        var result = $(this).attr("href").split(".")[1];
    }

    result = titlecase_all_words(result.replace(/-/g, " "));

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Footer Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

$(".c-footer-brand__social a").click(function() {
    var result = titlecase_all_words($(this).attr("data-gtm"));

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Footer Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/*  GTM- Footer Logo */
$("#_logoFooter").click(function() {
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Footer Navigation',
        'eventLabel': 'Logo',
        'eventValue': 0,
        'nonInteraction': 0
    });
});



/*Gtm for Breadcrumbs*/
$(".c-breadcrumbs__item a").click(function() {
    var link = $(this).attr("href").split("/");
    var result = "";
    if (link[link.length - 1] == "default.aspx" || link[link.length - 1] == "index.aspx") {
        result = link[link.length - 2];
        if (result == "personal" || result == "islamic" || result == "private")
            result = result + " Banking";
    } else
        result = link[link.length - 1].replace(".aspx", "");

    result = titlecase_all_words(result.replace(/-/g, ' '));

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Breadcrumb Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/*Gtm for Side Navigation*/
$(".c-section-nav__item a").click(function() {
    var sectionName = "";
    var linkText = "";
    var link = $(this).attr("href").split("/");
    var result = "";

    if (link[link.length - 1].indexOf("pdf") >= 0) {
        sectionName = "services";
        linkText = link[link.length - 1].replace(".pdf", "");
        linkText = linkText.replace("_", " ");
    } else {
        if (link[link.length - 1] == "default.aspx" || link[link.length - 1] == "index.aspx") {
            linkText = link[link.length - 2];
            sectionName = link[link.length - 3];
        } else {
            linkText = link[link.length - 1].replace(".aspx", "");
            sectionName = link[link.length - 2];
        }
    }

    sectionName = titlecase_all_words(sectionName.replace(/-/g, ' '));
    linkText = titlecase_all_words(linkText.replace(/-/g, ' '));
    result = sectionName + ' : ' + linkText;

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Navigations',
        'eventAction': 'Side Navigation',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/*GTM - App Downloads */
$(".c-tcit-download").click(function() {
    var result = $(this).attr("id").replace(/-/g, " ");

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'App Downloads',
        'eventAction': 'App Icon Click',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/*GTM - Home Page - Banner - Arrow */
$(document).on('click', '.hero-premium__carousel .owl-nav .owl-prev,.hero-premium__carousel .owl-nav .owl-next', function() {
    var result = "Next";
    if ($(this).hasClass('owl-prev'))
        result = "Previous";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Website Home Modules',
        'eventAction': 'Banners',
        'eventLabel': 'Arrow Scroll : ' + result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/*GTM - Home Page - Banner - Barscroll*/
$(document).on('click', '.hero-premium__carousel .owl-dot', function() {
    var result = $(this).index() + 1;

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Website Home Modules',
        'eventAction': 'Banners',
        'eventLabel': 'Bar Scroll : ' + result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/*GTM - Home Page & PCP - Tab */
$(".o-tabs__tab-nav-item a").click(function() {
    var result = "";
    var category = "Category Home Modules";
    var link = $(this).attr("href").split("/");
    if (link[0].indexOf("#") >= 0) //ADCB for you
    {
        result = "ADCB For You : " + $(this).attr("data-gtm");
    } else if ($(this).attr("data-gtm")) //Homepage tab
    {
        result = $(this).attr("data-gtm");
        category = "Website Home Modules";
    } else //PCP tab
    {
        debugger;
        link = ($(this).attr("href").replace(".aspx#active-tab", "")).split("/");
        if ($(this).parent().index() == 0)
            result = link[link.length - 2] + " : All";
        else
        if ((link[link.length - 2] == link[link.length - 1]) || link[link.length - 1].indexOf("default") >= 0)
            result = link[link.length - 3] + " : " + link[link.length - 2];
        else
            result = link[link.length - 2] + " : " + link[link.length - 1];

        result = titlecase_all_words(result.replace(/-/g, ' '));

    }

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': category,
        'eventAction': 'Products at Glance Widget',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/*GTM - Home Page & PCP - Tab Link Text */
$(".o-tabs__tab-content-item .o-tabs__tab-content-summary a").click(function() {
    var result = $(".o-tabs__tab-nav").find(".is-active").attr("data-gtm");
    if ($(this).attr("data-gtm")) //Homepage Personal
    {
        result = result + " : " + $(this).attr("data-gtm");
    } else {
        var link = $(this).attr("href").split("/");
        var result2 = titlecase_all_words(link[link.length - 2].replace(/-/g, ' '));;
        if (result == result2)
            result = result + " : " + "Overview";
        else
            result = result + " : " + result2;
    }

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Website Home Modules',
        'eventAction': 'Products at Glance Widget',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    })
});

/* GTM - Trending  Now Modules - link*/
$(".c-promotion-carousel-item__info a").click(function() {
    var result = $(this).attr("data-gtm-link") + " : " + $(this).attr("data-gtm-title");
    var category = "Category Home Modules";

    if ($(".site-header").attr("data-theme") == "premium")
        category = "Website Home Modules";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': category,
        'eventAction': 'Trending Now Widget',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/* GTM-   Ternding  Now Modules - Arrow*/
$(document).on('click', '.c-promotion-carousel__wrap .owl-prev,.c-promotion-carousel__wrap .owl-next', function() {
    var category = "Category Home Modules";
    var result = "Next";

    if ($(".site-header").attr("data-theme") == "premium")
        category = "Website Home Modules";

    if ($(this).hasClass('owl-prev'))
        result = "Previous";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': category,
        'eventAction': 'Trending Now Widget',
        'eventLabel': 'Arrow : ' + result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* GTM-   Ternding  Now Modules - Bubble*/
$(document).on('click', '.c-promotion-carousel__wrap .owl-dot', function() {
    var category = "Category Home Modules";
    var result = $(this).index() + 1;

    if ($(".site-header").attr("data-theme") == "premium")
        category = "Website Home Modules";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': category,
        'eventAction': 'Trending Now Widget',
        'eventLabel': 'Bubble : ' + result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/* GTM-  Promise List Modules*/
$(".c-promise__item a").click(function() {
    var result = $(this).attr("data-gtm");

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Website Home Modules',
        'eventAction': 'Your Trust Our Commitment Widget',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/* GTM-   News*/
$(".c-news-carousel-item__info a").click(function() {
    var result = $(this).attr("data-gtm-link") + " : " + $(this).attr("data-gtm-title");

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Website Home Modules',
        'eventAction': 'News Widget',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* GTM-   News - Arrow*/
$(document).on('click', '.c-news-carousel__wrap .owl-prev,.c-news-carousel__wrap .owl-next', function() {
    var category = "Category Home Modules";
    var result = "Next";

    if ($(".site-header").attr("data-theme") == "premium")
        category = "Website Home Modules";

    if ($(this).hasClass('owl-prev'))
        result = "Previous";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': category,
        'eventAction': 'News Widget',
        'eventLabel': 'Arrow : ' + result,
        'eventValue': 0,
        'nonInteraction': 0
    });

});

/* GTM-   News - Bubble*/
$(document).on('click', '.c-news-carousel__wrap .owl-dot', function() {
    var category = "Category Home Modules";
    var result = $(this).index() + 1;

    if ($(".site-header").attr("data-theme") == "premium")
        category = "Website Home Modules";

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': category,
        'eventAction': 'News Widget',
        'eventLabel': 'Bubble : ' + result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});






/* GTM - At your service*/
$(".c-ways-to-bank__tab-list-link").click(function() {
    var result = $(this).attr("data-gtm");

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Website Home Modules',
        'eventAction': 'At your service Widget',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});

$(".c-ways-to-bank__tab-content-summary a").click(function() {
    var result = $(".c-ways-to-bank__tab-list-item").find(".is-active").attr("data-gtm") + " : " + $(this).attr("data-gtm");

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Website Home Modules',
        'eventAction': 'At your service Widget',
        'eventLabel': result,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/* GTM- PCP -  Banner*/
$(".o-btn-white").click(function() {
    var link = $(this).attr("href").split("/");
    var result = "";
    if (link[link.length - 1].indexOf("default.aspx") >= 0) {
        result = link[link.length - 3] + " : " + link[link.length - 2];
    } else {
        result = link[link.length - 2] + " : " + link[link.length - 1];
        result = result.replace(".aspx", "");
    }
    result = titlecase_all_words(result.replace(/-/g, ' '));

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Category Home Modules',
        'eventAction': 'Banner Widget',
        'eventLabel': result + " : View more",
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/* GTM- PDP - Request Callback*/
$(".hero-pdp__cta").click(function() {
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Product Detail Page Modules',
        'eventAction': 'Request a Call Back',
        'eventLabel': 'Request a Call Back',
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* GTM- PDP - Other ways to apply*/
$(".c-apply-card__thumb  ").click(function() {
    var result = ($(this).attr("href")).toString();
    var actionName = "";
    var LabelName = "";

    if (result.indexOf("tel") >= 0) {
        actionName = "Contact centre";
        LabelName = result.replace("tel:", "");
    } else if (result.indexOf("sms") >= 0) {
        actionName = "Apply through SMS";
        LabelName = result.replace("sms:", "");
    } else if (result.indexOf("atmbranches") >= 0) {
        actionName = "Visit Us";
        LabelName = "our branches";
    }

    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Product Detail Page Modules',
        'eventAction': actionName,
        'eventLabel': LabelName,
        'eventValue': 0,
        'nonInteraction': 0
    });
});


/*GTM - Thank you */
$(".c-thank-you__wrap a").click(function() {
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Leads Thank You Page',
        'eventAction': 'Visit Home Page',
        'eventLabel': 'Visit Home Page',
        'eventValue': 0,
        'nonInteraction': 0
    });
});

/* Online Chat */
$(".c-chat__link").click(function() {
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Chat',
        'eventAction': 'Initiate',
        'eventLabel': 'Chat Icon Click',
        'eventValue': 0,
        'nonInteraction': 0
    });
})



/*Common function to capitalize first letter of each word*/
function titlecase_all_words(argument) {
    if (argument == "")
        return "";
    else {
        return argument.replace(/\w+/g, function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
    }
}



/* c.Product Impession*/
$.fn.isOnScreen = function() {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};



function Productimpressions() {
    var r = [];
    $(".c-discover-card__thumb>img").each(function() {
        if ($(this).attr("data-gtm-vis") == "false") {
            if ($(this).isOnScreen()) {
                r.push({
                    'name': $(this).attr("data-gtm-title"), //Product Name
                    'id': $(this).attr("data-gtm-id"), //Product ID
                    'price': '0.00', //This value will always be ‘0.00’
                    'brand': titlecase_all_words(window.brand), //Product Type
                    'category': titlecase_all_words(window.category), //Category Drill Down
                    'variant': $(this).attr("data-gtm-variant"), //Produact Variant
                    'position': $(this).attr("data-index") //Position on the page
                });
                $(this).attr("data-gtm-vis", "true");
            }
        }


    });

    if (r.length > 0) {
        dataLayer.push({
            'event': 'eventTracker',
            'eventCategory': 'Ecommerce',
            'eventAction': 'Product Impressions',
            'eventLabel': 'Page Category Name',
            'nonInteraction': 1,
            'ecommerce': {
                'currencyCode': 'AED',
                'impressions': r
            },
            'eventCallback': function() {
                dataLayer.push({ 'ecommerce': undefined })
            }
        });
    }

    /* a.Promotion Impression */
    if ($(".hero-section .hero-section__img-wrapper").attr("data-gtm-vis") == undefined) {
        if ($(".hero-section .hero-section__img-wrapper").isOnScreen()) {

            var _r = titlecase_all_words(window.pageName);
            dataLayer.push({
                'event': 'eventTracker',
                'eventCategory': 'Ecommerce',
                'eventAction': 'Internal Promotion Impressions',
                'eventLabel': 'Banner: ' + _r,
                'nonInteraction': 1,
                'ecommerce': {
                    'promoView': {
                        'promotions': [{
                            'id': 'PROMO-000001', //Promotion ID
                            'name': _r, //Promotion Name
                            'creative': 'Banner', //Hero, Home, Navigation etc.
                            'position': '1' //Banner position
                        }]
                    }
                },
                'eventCallback': function() {
                    dataLayer.push({ 'ecommerce': undefined })
                }
            });

            $(".hero-section .hero-section__img-wrapper").attr("data-gtm-vis", true);
        }
    }

}




if ($(".c-discover-card-list__wrap").length > 0) {
    Productimpressions();

    document.addEventListener("scroll", function() { Productimpressions() });
}


/* d. Measuring Product Clicks */
$(".c-discover-card-list__item").click(function() {
    dataLayer.push({
        'event': 'eventTracker',
        'eventCategory': 'Ecommerce',
        'eventAction': 'Product Click',
        'eventLabel': 'Page Category Name : ' + $(this).attr("data-gtm-title"),
        'nonInteraction': 0,
        'ecommerce': {
            'currencyCode': 'AED',
            'click': {
                'products': [{
                    'name': $(this).attr("data-gtm-title"), //Product Name
                    'id': 'CD102', //Product ID
                    'price': '0.00', //This value will always be ‘0.00’
                    'brand': 'Mastercard', //Product Type
                    'category': 'Cards > Credit Cards', //Category Drill Down
                    'variant': 'Gold/Platinum', //Product Variant
                    'position': $(this).attr("data-index") //Position on the page
                }]
            }
        },
        'eventCallback': function() {
            dataLayer.push({ 'ecommerce': undefined })
        }
    });

})