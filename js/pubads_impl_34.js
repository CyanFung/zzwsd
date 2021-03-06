(function() {
    var p, q = this, aa = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
                    return "object";
return b
}, ba = function(a) {
    return void 0 !== a
}, ca = function(a) {
    return "array" == aa(a)
}, da = function(a) {
    var b = aa(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, s = function(a) {
    return "string" == typeof a
}, u = function(a) {
    return "function" == aa(a)
}, ea = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, fa = "closure_uid_" + (1E9 * Math.random()>>>0), ga = 0, ha = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, ia = function(a,
b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}, v = function(a, b, c) {
    v = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
    return v.apply(null, arguments)
}, ja = Date.now || function() {
    return + new Date
}, x = function(a, b) {
    var c = a.split("."), d = q;
    c[0]in d ||!d.execScript ||
    d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
}, y = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.R = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.qa = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
var ka = document, z = window;
var la = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, la);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
y(la, Error);
la.prototype.name = "CustomError";
var ma;
var na = function(a) {
    return /^[\s\xa0]*$/.test(null == a ? "" : String(a))
}, oa = function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, wa = function(a) {
    if (!pa.test(a))
        return a;
    -1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(va, "&#39;"));
    return a
}, qa = /&/g, ra = /</g, sa = />/g, ta = /"/g, va = /'/g, pa = /[&<>"']/, za = function(a) {
    return -1 != a.indexOf("&") ? "document"in
    q ? xa(a) : ya(a) : a
}, xa = function(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, c;
    c = document.createElement("div");
    return a.replace(Aa, function(a, e) {
        var f = b[a];
        if (f)
            return f;
        if ("#" == e.charAt(0)) {
            var g = Number("0" + e.substr(1));
            isNaN(g) || (f = String.fromCharCode(g))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}, ya = function(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" ==
            c.charAt(0)) {
                var d = Number("0" + c.substr(1));
                if (!isNaN(d))
                    return String.fromCharCode(d)
                }
            return a
        }
    })
}, Aa = /&([^;\s<&]+);?/g, Ba = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, Ca = {
    "'": "\\'"
}, Da = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
var Ea = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
};
function B(a) {
    return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
}
function Fa() {
    var a = Ga, b = document, c = b.createElement("script");
    c.type = "text/javascript";
    c.src = a;
    var d = b.getElementsByTagName("head")[0];
    if (d)
        try {
            window.setTimeout(function() {
                d.appendChild(c)
            }, 0)
    } catch (e) {}
}
function Ha(a, b) {
    Ia(a, "load", b)
}
var Ia = function(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
}, Ka = function() {
    var a = Ja();
    "google_onload_fired"in a || (a.google_onload_fired=!1, Ha(a, function() {
        a.google_onload_fired=!0
    }))
};
function La() {
    return "msie"in Ma ? Ma.msie : Ma.msie =- 1 != navigator.userAgent.toLowerCase().indexOf("msie")
}
var Ma = {};
function Na() {
    if (navigator.plugins && navigator.mimeTypes.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && a.description)
            return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
    } else {
        if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
            for (var a = 3, b = 1; b;)
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a + 1)), a++
            } catch (c) {
                b = null
            }
            return a.toString()
        }
        if (La()&&!window.opera) {
            b = null;
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (d) {
                a = 0;
                try {
                    b =
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = 6, b.ra = "always"
                } catch (e) {
                    if (6 == a)
                        return a.toString()
                    }
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (f) {}
            }
            if (b)
                return a = b.GetVariable("$version").split(" ")[1], a.replace(/,/g, ".")
        }
    }
    return "0"
}
var Oa = function(a, b) {
    if (!(1E-4 > Math.random())) {
        var c = Math.random();
        if (c < b) {
            try {
                var d = new Uint16Array(1);
                window.crypto.getRandomValues(d);
                c = d[0] / 65536
            } catch (e) {
                c = Math.random()
            }
            return a[Math.floor(c * a.length)]
        }
    }
    return null
}, Pa = function(a) {
    var b = a.length;
    if (0 == b)
        return 0;
    for (var c = 305419896, d = 0; d < b; d++)
        c^=(c<<5) + (c>>2) + a.charCodeAt(d) & 4294967295;
    return 0 < c ? c : 4294967296 + c
}, Qa = function(a) {
    try {
        return !!a.location.href || "" === a.location.href
    } catch (b) {
        return !1
    }
};
var C = Array.prototype, Ra = C.indexOf ? function(a, b, c) {
    return C.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (s(a))
        return s(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}, Sa = C.forEach ? function(a, b, c) {
    C.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Ta = C.filter ? function(a, b, c) {
    return C.filter.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = [], f = 0, g = s(a) ?
    a.split("") : a, h = 0; h < d; h++)
        if (h in g) {
            var k = g[h];
            b.call(c, k, h, a) && (e[f++] = k)
        }
    return e
}, Ua = C.map ? function(a, b, c) {
    return C.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = s(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, Va = C.some ? function(a, b, c) {
    return C.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
}, Wa = function(a, b, c) {
    for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in
        e && b.call(c, e[f], f, a))
            return f;
    return -1
}, Xa = function(a, b) {
    var c = Wa(a, b, void 0);
    0 <= c && C.splice.call(a, c, 1)
}, Ya = function(a) {
    return C.concat.apply(C, arguments)
}, Za = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}, $a = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e;
        if (ca(d) || (e = da(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))
            a.push.apply(a, d);
        else if (e)
            for (var f = a.length, g = d.length, h = 0; h < g; h++)
                a[f + h] = d[h];
        else 
            a.push(d)
    }
}, ab =
function(a, b, c) {
    return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
}, bb = function(a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
        var e = a[d++], f = ea(e) ? "o" + (e[fa] || (e[fa]=++ga)): (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(b, f) || (b[f]=!0, a[c++] = e)
    }
    a.length = c
};
var cb = function(a) {
    var b = arguments, c = b.length;
    return function() {
        for (var a = 0; a < c; a++)
            if (!b[a].apply(this, arguments))
                return !1;
        return !0
    }
}, db = function() {
    return function() {
        return !na.apply(this, arguments)
    }
};
var D = function(a, b) {
    this.x = ba(a) ? a : 0;
    this.y = ba(b) ? b : 0
};
D.prototype.r = function() {
    return new D(this.x, this.y)
};
D.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
D.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
D.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
var E = function(a, b) {
    this.width = a;
    this.height = b
};
p = E.prototype;
p.r = function() {
    return new E(this.width, this.height)
};
p.isEmpty = function() {
    return !(this.width * this.height)
};
p.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
p.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
p.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var eb = function(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}, fb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}, gb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}, hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), ib = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < hb.length; f++)
            c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var jb, kb, lb, mb, nb = function() {
    return q.navigator ? q.navigator.userAgent : null
};
mb = lb = kb = jb=!1;
var ob;
if (ob = nb()) {
    var pb = q.navigator;
    jb = 0 == ob.lastIndexOf("Opera", 0);
    kb=!jb && (-1 != ob.indexOf("MSIE")||-1 != ob.indexOf("Trident"));
    lb=!jb&&-1 != ob.indexOf("WebKit");
    mb=!jb&&!lb&&!kb && "Gecko" == pb.product
}
var qb = jb, F = kb, rb = mb, G = lb, sb = function() {
    var a = q.document;
    return a ? a.documentMode : void 0
}, tb;
t: {
    var ub = "", vb;
    if (qb && q.opera)
        var wb = q.opera.version, ub = "function" == typeof wb ? wb(): wb;
    else if (rb ? vb = /rv\:([^\);]+)(\)|;)/ : F ? vb = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : G && (vb = /WebKit\/(\S+)/), vb)
        var xb = vb.exec(nb()), ub = xb ? xb[1]: "";
    if (F) {
        var yb = sb();
        if (yb > parseFloat(ub)) {
            tb = String(yb);
            break t
        }
    }
    tb = ub
}
var zb = tb, Ab = {}, H = function(a) {
    var b;
    if (!(b = Ab[a])) {
        b = 0;
        for (var c = oa(String(zb)).split("."), d = oa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", h = d[f] || "", k = RegExp("(\\d*)(\\D*)", "g"), l = RegExp("(\\d*)(\\D*)", "g");
            do {
                var m = k.exec(g) || ["", "", ""], n = l.exec(h) || ["", "", ""];
                if (0 == m[0].length && 0 == n[0].length)
                    break;
                b = Da(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || Da(0 == m[2].length, 0 == n[2].length) || Da(m[2], n[2])
            }
            while (0 == b)
            }
        b = Ab[a] = 0 <= b
    }
    return b
},
Bb = q.document, Cb = Bb && F ? sb() || ("CSS1Compat" == Bb.compatMode ? parseInt(zb, 10) : 5) : void 0;
var Db=!F || F && 9 <= Cb, Eb=!rb&&!F || F && F && 9 <= Cb || rb && H("1.9.1");
F && H("9");
var Fb = function(a, b) {
    var c;
    c = a.className;
    c = s(c) && c.match(/\S+/g) || [];
    for (var d = ab(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++)
        0 <= Ra(f, d[g]) || f.push(d[g]);
    a.className = c.join(" ");
    return c.length == e
};
var Ib = function(a) {
    return a ? new Gb(Hb(a)) : ma || (ma = new Gb)
}, Jb = function(a) {
    var b = document;
    return s(a) ? b.getElementById(a) : a
}, Lb = function(a, b) {
    eb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Kb ? a.setAttribute(Kb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, Kb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
}, Mb = function(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new E(a.clientWidth, a.clientHeight)
}, Nb = function(a) {
    return G || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}, Ob = function(a) {
    return a.parentWindow || a.defaultView
}, Qb = function(a, b, c) {
    function d(c) {
        c && b.appendChild(s(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !da(f) || ea(f) && 0 < f.nodeType ? d(f) :
        Sa(Pb(f) ? Za(f) : f, d)
    }
}, Rb = function(a) {
    return Eb && void 0 != a.children ? a.children : Ta(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
}, Hb = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, Pb = function(a) {
    if (a && "number" == typeof a.length) {
        if (ea(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (u(a))
            return "function" == typeof a.item
    }
    return !1
}, Gb = function(a) {
    this.a = a || q.document || document
};
Gb.prototype.b = function(a, b, c) {
    var d = this.a, e = arguments, f = e[0], g = e[1];
    if (!Db && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', wa(g.name), '"');
        if (g.type) {
            f.push(' type="', wa(g.type), '"');
            var h = {};
            ib(h, g);
            delete h.type;
            g = h
        }
        f.push(">");
        f = f.join("")
    }
    f = d.createElement(f);
    g && (s(g) ? f.className = g : ca(g) ? Fb.apply(null, [f].concat(g)) : Lb(f, g));
    2 < e.length && Qb(d, f, e);
    return f
};
var Sb = function(a) {
    var b = a.a;
    a = Nb(b);
    b = Ob(b);
    return F && H("10") && b.pageYOffset != a.scrollTop ? new D(a.scrollLeft, a.scrollTop) : new D(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
};
Gb.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
Gb.prototype.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
var Tb = function(a, b, c, d, e) {
    this.slot = a;
    this.isEmpty = b;
    this.size = c;
    this.creativeId = d;
    this.lineItemId = e
};
var Ub = function(a, b) {
    this.a = a;
    this.o = b;
    this.b = this.a.getName();
    this.h = this.a.getSlotId().getInstance();
    var c = this.b.split("/");
    this.k = 3 <= c.length ? c[2] : "";
    this.i = "";
    this.j = 0;
    this.d=!1
};
Ub.prototype.n = 0;
Ub.prototype.f=!1;
var Vb = function(a) {
    a.n = 0;
    a.f=!1;
    a.c = null;
    a.g = null;
    a.m = null;
    a.l = null
};
Ub.prototype.getInstance = function() {
    return this.h
};
var I = function(a) {
    return a.b + "_" + a.h
}, J = function(a) {
    return a.a.getSlotId().getDomId()
}, K = function(a) {
    return "google_ads_iframe_" + I(a)
};
Ub.prototype.toString = function() {
    var a = this.a.getSlotId().toString();
    return "[gam.gut.AdSlot: pubid=" + this.k + ", name=" + this.b + ", instance=" + this.h + ", iframeLoaded=" + this.f + ", tries=" + this.n + ", GUT slot id=" + a + "]"
};
var Wb = function(a, b) {
    a.c || (a.c = (new Date).getTime());
    a.a.fetchStarted(b || "")
}, Xb = function(a) {
    a.m || (a.m = (new Date).getTime());
    a.a.renderStarted()
}, Yb = function(a) {
    var b = window, c = null;
    b.top == b && (c = Mb(window), c = a.a.getSizes(c.width, c.height));
    null == c && (c = a.a.getSizes());
    a = [];
    for (b = 0; b < c.length; ++b)
        a.push([c[b].getWidth(), c[b].getHeight()]);
    return a
}, Zb = function(a) {
    a = Yb(a);
    for (var b = [], c = 0; c < a.length; ++c)
        b.push(a[c].join("x"));
    return b.join("|")
}, $b = function(a) {
    var b = [], c = a.a.getTargetingMap(), d;
    for (d in c) {
        for (var e =
        c[d], f = [], g = 0; g < e.length; ++g)
            f.push(encodeURIComponent(e[g]));
        b.push(encodeURIComponent(d) + "=" + f.join(","))
    }
    if (u(a.a.getCategoryExclusions) && (a = a.a.getCategoryExclusions(), 0 < a.length&&!("excl_cat"in c))
        ) {
        c = [];
        for (g = 0; g < a.length; ++g)
            c.push(encodeURIComponent(a[g]));
        b.push(encodeURIComponent("excl_cat") + "=" + c.join(","))
    }
    return b.join("&")
}, ac = function(a, b) {
    var c = null, d=!0, e = null, f = null;
    ea(b) && (d = b._empty_, d || (c = [b._width_, b._height_], !1 == b._is_afc_ && b._creative_ids_ && b._adgroup2_ids_ && (e = b._creative_ids_[0],
    f = b._adgroup2_ids_[0])));
    return new Tb(a.a, d, c, e, f)
}, bc = function(a) {
    return new Tb(a.a, !0, null, null, null)
};
var cc = {
    google_ad_channel: "channel",
    google_ad_host: "host",
    google_ad_host_channel: "h_ch",
    google_ad_host_tier_id: "ht_id",
    google_ad_section: "region",
    google_ad_type: "ad_type",
    google_adtest: "adtest",
    google_allow_expandable_ads: "ea",
    google_alternate_ad_url: "alternate_ad_url",
    google_alternate_color: "alt_color",
    google_bid: "bid",
    google_city: "gcs",
    google_color_bg: "color_bg",
    google_color_border: "color_border",
    google_color_line: "color_line",
    google_color_link: "color_link",
    google_color_text: "color_text",
    google_color_url: "color_url",
    google_contents: "contents",
    google_country: "gl",
    google_cpm: "cpm",
    google_cust_age: "cust_age",
    google_cust_ch: "cust_ch",
    google_cust_gender: "cust_gender",
    google_cust_id: "cust_id",
    google_cust_interests: "cust_interests",
    google_cust_job: "cust_job",
    google_cust_l: "cust_l",
    google_cust_lh: "cust_lh",
    google_cust_u_url: "cust_u_url",
    google_disable_video_autoplay: "disable_video_autoplay",
    google_ed: "ed",
    google_encoding: "oe",
    google_feedback: "feedback_link",
    google_flash_version: "flash",
    google_font_face: "f",
    google_font_size: "fs",
    google_hints: "hints",
    google_kw: "kw",
    google_kw_type: "kw_type",
    google_language: "hl",
    google_page_url: "url",
    google_region: "gr",
    google_reuse_colors: "reuse_colors",
    google_safe: "adsafe",
    google_sc_id: "sc_id",
    google_tag_info: "gut",
    google_targeting: "targeting",
    google_ui_features: "ui",
    google_ui_version: "uiv",
    google_video_doc_id: "video_doc_id",
    google_video_product_type: "video_product_type"
}, dc = {
    google_ad_block: "ad_block",
    google_ad_client: "client",
    google_ad_format: "format",
    google_ad_output: "output",
    google_ad_callback: "callback",
    google_ad_height: "h",
    google_ad_override: "google_ad_override",
    google_ad_slot: "slotname",
    google_ad_unit_key: "adk",
    google_ad_unit_key_2: "adk2",
    google_ad_width: "w",
    google_captcha_token: "captok",
    google_ctr_threshold: "ctr_t",
    google_cust_criteria: "cust_params",
    google_image_size: "image_size",
    google_last_modified_time: "lmt",
    google_loeid: "loeid",
    google_max_num_ads: "num_ads",
    google_max_radlink_len: "max_radlink_len",
    google_mtl: "mtl",
    google_num_content_recommendations: "ncr",
    google_num_radlinks: "num_radlinks",
    google_num_radlinks_per_unit: "num_radlinks_per_unit",
    google_only_ads_with_video: "only_ads_with_video",
    google_rl_dest_url: "rl_dest_url",
    google_rl_filtering: "rl_filtering",
    google_rl_mode: "rl_mode",
    google_rt: "rt",
    google_sui: "sui",
    google_skip: "skip",
    google_tag_for_child_directed_treatment: "tfcd",
    google_tdsma: "tdsma",
    google_tfs: "tfs",
    google_tl: "tl"
}, ec = {
    google_lact: "lact",
    google_only_pyv_ads: "pyv",
    google_only_userchoice_ads: "uc",
    google_scs: "scs",
    google_with_pyv_ads: "withpyv",
    google_previous_watch: "p_w",
    google_previous_searches: "p_s",
    google_video_url_to_fetch: "durl",
    google_yt_pt: "yt_pt",
    google_yt_up: "yt_up"
};
var fc = {}, hc = function(a) {
    if (0.01 > Math.random()) {
        a = "/pagead/gen_204?id=jserror" + gc(a);
        a = "http" + ("https:" == z.location.protocol ? "s" : "") + "://pagead2.googlesyndication.com" + a;
        a = a.substring(0, 2E3);
        z.google_image_requests || (z.google_image_requests = []);
        var b = z.document.createElement("img");
        b.src = a;
        z.google_image_requests.push(b)
    }
}, ic = function(a) {
    var b = a || {};
    Ea(fc, function(a, d) {
        b[d] = z[a]
    })
}, jc = function(a, b) {
    return function(c) {
        var d=!0;
        try {
            b(c)
        } catch (e) {
            try {
                var f, g = e.toString();
                e.name&&-1 == g.indexOf(e.name) &&
                (g += ": " + e.name);
                e.message&&-1 == g.indexOf(e.message) && (g += ": " + e.message);
                if (e.stack) {
                    var h = e.stack;
                    c = g;
                    try {
                        -1 == h.indexOf(c) && (h = c + "\n" + h);
                        for (var k; h != k;)
                            k = h, h = h.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                        g = h.replace(/\n */g, "\n")
                    } catch (l) {
                        g = c
                    }
                }
                f = g;
                g = "";
                e.fileName && (g = e.fileName);
                h =- 1;
                e.lineNumber && (h = e.lineNumber);
                var m;
                t:
                {
                    try {
                        m = "";
                        break t
                    } catch (n) {}
                    m = ""
                }
                var t = {
                    context: a,
                    msg: f.substring(0, 512),
                    eid: m && m.substring(0, 40),
                    file: g,
                    line: h.toString(),
                    url: ka.URL.substring(0, 512),
                    ref: ka.referrer.substring(0,
                    512)
                };
                ic(t);
                hc(t);
                d=!0
            } catch (r) {
                hc({
                    context: "protectAndRun",
                    msg: r.toString() + "\n" + (r.stack || "")
                })
            }
            if (!d)
                throw e;
        }
    }
}, gc = function(a) {
    var b = "";
    Ea(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + B(a)
    });
    return b
};
var kc = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
p = kc.prototype;
p.r = function() {
    return new kc(this.top, this.right, this.bottom, this.left)
};
p.contains = function(a) {
    return this && a ? a instanceof kc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
p.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
p.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
p.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var lc = function(a, b) {
    var c = b || z;
    a && c.top != c && (c = c.top);
    try {
        return c.document&&!c.document.body ? new E(-1, -1) : Mb(c || window)
    } catch (d) {
        return new E(-12245933, -12245933)
    }
}, mc = function(a, b) {
    La()&&!window.opera ? Ia(a, "readystatechange", jc("osd::util::rschange", function() {
        "complete" == a.readyState && b(null)
    })) : Ia(a, "load", jc("osd::util::load", b))
}, nc = function() {
    var a = 0;
    !ba(z.postMessage) && (a|=1);
    return a
};
var oc=!!window.google_async_iframe_id, pc = oc && window.parent || window, Ja = function() {
    if (oc&&!Qa(pc)) {
        for (var a = "." + ka.domain; 2 < a.split(".").length&&!Qa(pc);)
            ka.domain = a = a.substr(a.indexOf(".") + 1), pc = window.parent;
        Qa(pc) || (pc = window)
    }
    return pc
};
var qc = function(a) {
    this.b = [];
    this.a = {};
    for (var b = 0, c = arguments.length; b < c; ++b)
        this.a[arguments[b]] = ""
}, rc = function(a, b, c) {
    "" != b && (c ? a.a.hasOwnProperty(c) && (a.a[c] = b) : a.b.push(b))
};
qc.prototype.c = function(a) {
    return this.a.hasOwnProperty(a) ? this.a[a] : ""
};
qc.prototype.geil = qc.prototype.c;
var sc = null;
var tc = function(a) {
    this.S = a;
    M(this, 3, null);
    M(this, 4, 0);
    M(this, 5, 0);
    M(this, 6, 0);
    M(this, 7, (new Date).getTime());
    M(this, 8, {});
    M(this, 9, {});
    M(this, 10, {});
    M(this, 11, []);
    M(this, 12, 0);
    M(this, 14, {})
}, uc = {
    google_persistent_state: !0,
    google_persistent_state_async: !0
}, vc = {}, wc = function(a) {
    a = a && uc[a] ? a : oc ? "google_persistent_state_async" : "google_persistent_state";
    if (vc[a])
        return vc[a];
    if ("google_persistent_state_async" == a)
        var b = Ja(), c = {};
    else 
        c = b = Ja();
    var d = b[a];
    return "object" == typeof d && "object" == typeof d.S ? vc[a] =
    d : b[a] = vc[a] = new tc(c)
}, xc = function(a) {
    switch (a) {
    case 3:
        return "google_exp_persistent";
    case 4:
        return "google_num_sdo_slots";
    case 5:
        return "google_num_0ad_slots";
    case 6:
        return "google_num_ad_slots";
    case 7:
        return "google_correlator";
    case 8:
        return "google_prev_ad_formats_by_region";
    case 9:
        return "google_prev_ad_slotnames_by_region";
    case 10:
        return "google_num_slots_by_channel";
    case 11:
        return "google_viewed_host_channels";
    case 12:
        return "google_num_slot_to_show";
    case 14:
        return "gaGlobal"
    }
}, yc = function(a) {
    var b = xc(14);
    return a.S[b]
}, M = function(a, b, c) {
    a = a.S;
    b = xc(b);
    void 0 === a[b] && (a[b] = c)
};
var zc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Ac = G, Bc = function(a) {
    if (Ac) {
        Ac=!1;
        var b = q.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = Bc(c)) && decodeURIComponent(c)) && c != b.hostname)
                throw Ac=!0, Error();
        }
    }
    return a.match(zc)[3] || null
};
var Cc = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
p = Cc.prototype;
p.r = function() {
    return new Cc(this.left, this.top, this.width, this.height)
};
p.contains = function(a) {
    return a instanceof Cc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
p.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
p.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
p.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Dc = function(a, b) {
    var c = Hb(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}, Ec = function(a, b) {
    return Dc(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, Fc = function(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, Gc = function(a) {
    if (F&&!(F && 8 <= Cb))
        return a.offsetParent;
    var b = Hb(a), c = Ec(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Ec(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)
            )return a;
    return null
}, Hc = function(a) {
    var b, c = Hb(a), d = Ec(a, "position"), e = rb && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) &&
    (0 > b.screenX || 0 > b.screenY), f = new D(0, 0), g;
    b = c ? Hb(c) : document;
    (g=!F) || (g = F && 9 <= Cb) || (g = "CSS1Compat" == Ib(b).a.compatMode);
    g = g ? b.documentElement : b.body;
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = Fc(a), a = Sb(Ib(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        e = a;
        do {
            f.x += e.offsetLeft;
            f.y += e.offsetTop;
            e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
            if (G && "fixed" == Ec(e, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            e = e.offsetParent
        }
        while (e && e != a);
        if (qb || G && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (e = a; (e = Gc(e)) && e != c.body && e != g;)
            f.x -= e.scrollLeft, qb && "TR" == e.tagName || (f.y -= e.scrollTop)
    }
    return f
}, Ic = function(a) {
    "number" == typeof a && (a = Math.round(a) + "px");
    return a
}, Jc = function(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = G&&!b&&!c;
    return ba(b)&&!d ||!a.getBoundingClientRect ? new E(b, c) : (a = Fc(a), new E(a.right - a.left, a.bottom - a.top))
}, Kc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var N = function(a, b) {
    this.c = a;
    this.b = b ? b.b : [];
    this.h = b ? b.h : !1;
    this.i = b ? b.i : "";
    this.g = b ? b.g : 0;
    this.f = b ? b.f : "";
    this.a = b ? b.a : [];
    this.d = null;
    this.j=!1
}, Ga = "", Lc = 0, Mc = 0, Nc = function(a, b) {
    var c = a.b, d = a.c.google_ad_request_done;
    d && (d = d.orig_callback || d, a.c.google_ad_request_done = function(a) {
        if (a && 0 < a.length) {
            var f = 1 < a.length ? a[1].url: null, g = a[0].log_info || null, h = a[0].activeview_url || null, k = a[0].activeview_js_enabled || null, l = a[0].activeview_js_immediate_enabled || null;
            c.push([b, za(a[0].url), f, g, null, h, k, l])
        }
        d(a)
    },
    a.c.google_ad_request_done.orig_callback = d)
}, Oc = function(a, b, c, d) {
    var e = a.b;
    if (0 < e.length)
        for (var f = b.document.getElementsByTagName("a"), g = 0; g < f.length; g++)
            for (var h = 0; h < e.length; h++)
                if (0 <= f[g].href.indexOf(e[h][1])) {
                    var k = f[g].parentNode;
                    if (e[h][2])
                        for (var l = k, m = 0; 4 > m; m++) {
                            if (0 <= l.innerHTML.indexOf(e[h][2])) {
                                k = l;
                                break
                            }
                            l = l.parentNode
                        }
                        c(k, e[h][0], d || 0, !0, e[h][3], void 0, e[h][5], "true" == e[h][6], "true" == e[h][7]);
                        e.splice(h, 1);
                        break
                }
    if (e = 0 < e.length) {
        if (!sc) {
            f = e = window;
            for (g = 0; e != e.parent;)
                if (e = e.parent,
                g++, Qa(e)
                    )f = e;
            else 
                break;
            sc = f
        }
        e = b != sc
    }
    if (e)
        try {
            Oc(a, b.parent, c, d)
    } catch (n) {}
};
p = N.prototype;
p.getNewBlocks = function(a, b) {
    b && Oc(this, this.c, a, 1);
    for (var c = this.a.length, d = 0; d < c; d++) {
        var e = this.a[d];
        !e.d && e.a && (a(e.a, e.c, e.g, e.b, "", e.f, "", !1, !1), e.d=!0)
    }
    b && (this.d = a)
};
p.getRegisteredAdblockUrls = function() {
    for (var a = [], b = this.a.length, c = 0; c < b; c++)
        a.push(this.a[c].c);
    return a
};
p.setupOse = function(a) {
    if (this.getOseId())
        return this.getOseId();
    var b = window.google_enable_ose, c;
    !0 === b ? c = 2 : !1 !== b && ((c = Oa([2], Lc)) || (c = Oa([3], Mc)));
    if (!c)
        return 0;
    this.g = c;
    this.f = String(a || 0);
    return this.getOseId()
};
p.getEid = function() {
    return ""
};
p.getOseExpId = function() {
    return this.i
};
p.getOseId = function() {
    return window ? this.g : 0
};
p.getCorrelator = function() {
    return this.f
};
p.numBlocks = function() {
    return this.b.length + this.a.length
};
p.registerAdBlock = function(a, b, c, d, e, f) {
    var g = null;
    e && f && (g = new E(e, f));
    if (this.d && d)
        this.d(d, a, b, !0, "", g, "");
    else {
        if ("js" == c)
            Nc(this, a);
        else {
            var h = new Pc(a, b, d, g);
            this.a.push(h);
            d && mc(d, function() {
                h.b=!0
            })
        }
        this.h || (Ka(), Fa(), this.h=!0)
    }
};
p.setUpForcePeriscope = function() {
    window.google_enable_ose_periscope && (this.j=!0)
};
p.shouldForcePeriscope = function() {
    return this.j
};
var Qc = function() {
    var a = Ja(), b = a.__google_ad_urls;
    if (!b)
        return a.__google_ad_urls = new N(a);
    try {
        if (b.getOseId())
            return b
    } catch (c) {}
    return a.__google_ad_urls = new N(a, b)
}, Pc = function(a, b, c, d) {
    this.c = a;
    this.g = b;
    this.a = c;
    this.d = this.b=!1;
    this.f = d || null
};
x("Goog_AdSense_getAdAdapterInstance", Qc);
x("Goog_AdSense_OsdAdapter", N);
x("Goog_AdSense_OsdAdapter.prototype.numBlocks", N.prototype.numBlocks);
x("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", N.prototype.getNewBlocks);
x("Goog_AdSense_OsdAdapter.prototype.getEid", N.prototype.getEid);
x("Goog_AdSense_OsdAdapter.prototype.getOseExpId", N.prototype.getOseExpId);
x("Goog_AdSense_OsdAdapter.prototype.getOseId", N.prototype.getOseId);
x("Goog_AdSense_OsdAdapter.prototype.getCorrelator", N.prototype.getCorrelator);
x("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", N.prototype.getRegisteredAdblockUrls);
x("Goog_AdSense_OsdAdapter.prototype.setupOse", N.prototype.setupOse);
x("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", N.prototype.registerAdBlock);
x("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", N.prototype.setUpForcePeriscope);
x("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", N.prototype.shouldForcePeriscope);
var O = q.googletag._vars_, Rc = O[7], Sc = O[8], Ga = [O[6] ? "https": "http", "://", O[1], "/pagead/osd.js"].join(""), Lc = Rc, Mc = Sc;
var Tc = function(a) {
    var b = a;
    "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
    return b
}, Uc = /\+/g, Vc = function(a) {
    var b = O[6];
    return a || b ? "https://" + O[3] : "http://" + O[2]
}, Wc = function() {
    var a = navigator.userAgent, b = a.indexOf("MSIE ");
    return -1 == b ? 0 : parseFloat(a.substring(b + 5, a.indexOf(";", b)))
}, Xc = function(a, b) {
    var c = 0, d = [];
    a && (d.push(a.b), d.push(Zb(a)), d.push(J(a)));
    if (b) {
        var e;
        e = [];
        for (var f = 0, g = b; g && 25 > f; g = g.parentNode,
        ++f)
            e.push(9 != g.nodeType && g.id || "");
        (e = e.join()) && d.push(e)
    }
    0 < d.length && (c = Pa(d.join(":")));
    return c.toString()
}, Yc = {
    va: "visible",
    sa: "hidden",
    ua: "prerender",
    ta: "other"
}, Zc = function(a) {
    a = a || document;
    a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
    var b;
    t: {
        for (b in Yc)
            if (Yc[b] == a) {
                b=!0;
                break t
            }
        b=!1
    }
    return b ? a : "other"
};
var $c = function(a) {
    this.a = {};
    this.b = a
}, ad = function(a, b, c, d) {
    b && (c || (c = ""), "google_gl" == b ? b = "google_country" : "google_region" == b && (b = "google_section"), b in a.b && ("undefined" == typeof d || d ||!a.a[b]) && (a.a[b] = c))
}, bd = function(a, b) {
    for (var c in b.a) {
        var d = b.a[c];
        u(d) || a.a[c] || (a.a[c] = d)
    }
};
$c.prototype.q = function() {
    var a = [], b;
    for (b in this.a)
        if (!u(this.a[b])) {
            var c = cc[b] || dc[b] || ec[b] || null, d = this.a[b];
            c && d && a.push(c + "=" + B(d))
        }
    return a.join("&")
};
var cd = function(a, b, c, d) {
    var e = [], f = [];
    b = b.a;
    for (var g in d)
        if (!u(g)) {
            var h = d[g];
            if (h) {
                var k = "";
                null != b[g] && (k = B(b[g]));
                for (var l = [], m =- 1, n =- 1, t = 0; t < a.length; ++t) {
                    var r = I(a[t]);
                    ++m;
                    null == c[r] ? l.push("") : (r = c[r].a, null != r[g] ? (l.push(B(B(r[g]))), n = m) : l.push(""))
                }
                if (0 <= n) {
                    m = [];
                    m.push(B(k));
                    for (t = 0; t <= n; ++t)
                        m.push(l[t]);
                        f.push(h + "," + m.join(","))
                    } else 
                        k && e.push(h + "=" + k)
                    }
        }
    a = [];
    a.push(e);
    a.push(f);
    e = [];
    a[0] && 0 < a[0].length && e.push(a[0].join("&"));
    a[1] && 0 < a[1].length && e.push("sps=" + a[1].join("|"));
    return e.join("&")
},
dd = function() {
    var a = window, b;
    t: {
        b = a.navigator;
        var c = document, d = b.userAgent, e = b.platform;
        if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e)&&!/^Opera/.test(d)) {
            var f = (/WebKit\/(\d+)/.exec(d) || [0, 0])[1], g = (/rv\:(\d+\.\d+)/.exec(d) || [0, 0])[1];
            if (/Win/.test(e) && /MSIE.*Trident/.test(d) && 8 < c.documentMode ||!f && "Gecko" == b.product && 1.7 < g&&!/rv\:1\.8([^.]|\.0)/.test(d) || 524 < f) {
                b=!0;
                break t
            }
        }
        b=!1
    }
    c = a.document;
    a.top == a ? a=!1 : (d = c.documentElement, f = e = 1, a.innerHeight ? (e = a.innerWidth, f = a.innerHeight) : d && d.clientHeight ?
    (e = d.clientWidth, f = d.clientHeight) : c.body && (e = c.body.clientWidth, f = c.body.clientHeight), a = 600 < f || 1E3 < e?!1 : !0);
    c = {};
    if (!b || a)
        c.ea = "0";
    return c
};
var ed = function(a) {
    this.c = (this.b = a && a.GA_jstiming) && this.b.load
};
ed.prototype.a = function(a, b) {
    this.c.tick(a, b)
};
ed.prototype.d = function(a) {
    var b = {};
    b.e = a;
    this.b.report(this.c, b)
};
var gd = function() {};
y(gd, ed);
gd.prototype.a = function() {};
gd.prototype.d = function() {};
var hd = function(a, b, c, d) {
    4 >= c && (b = b + "_" + c, d ? a.a(b, d + "_" + c) : a.a(b))
};
var id = function() {
    this.a = {};
    var a = ka.URL;
    null == P(this, "target_platform") && (this.a.target_platform = "DESKTOP");
    for (var b = this.a, a = a.split("?"), a = a[a.length-1].split("&"), c = 0; c < a.length; c++) {
        var d = a[c].split("=");
        if (d[0]) {
            var e = d[0].toLowerCase();
            if ("google_domain_reset_url" != e)
                try {
                    var f = b, g;
                    if (1 < d.length) {
                        var h = d[1];
                        g = window.a ? decodeURIComponent(h.replace(Uc, " ")) : unescape(h)
                    } else 
                        g = "";
                        f[e] = g
                } catch (k) {}
        }
    }
}, P = function(a, b) {
    return null == b ? null : a.a[b]
};
var jd = function(a) {
    this.a = {};
    this.j = {};
    this.b = [];
    this.c = {};
    this.i = [];
    this.p = a;
    this.g = new $c(a);
    this.h = {};
    this.k = {};
    this.f = {};
    this.d = {};
    this.o = this.m = "";
    this.l = null;
    this.n =- 1
}, kd = function(a, b, c) {
    b = new Ub(b, c ||!1);
    if (!b.b)
        return null;
    c = I(b);
    var d = a.a[c];
    if (d)
        return d;
    a.a[c] = b;
    a.j[b.b] || (a.j[b.b] = []);
    return a.j[b.b][b.getInstance()] = b
}, md = function(a) {
    return Ta(ld(a), function(a) {
        return !a.c
    })
}, nd = function(a, b) {
    -1 == Wa(a.b, function(a) {
        return I(b) == I(a)
    }) && a.b.push(b)
}, od = function(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d =
        b[c], e = I(d);
        e in a.a && (Vb(d), Xa(a.b, function(a) {
            return I(a) == e
        }))
    }
}, pd = function(a) {
    a = Ta(ld(a), function(a) {
        return !!a.c&&!(a.c && a.g)
    });
    return Ua(a, function(a) {
        return [a.b, a.getInstance()]
    })
}, Q = function(a, b) {
    a.l || (a.l = (new Date).getTime());
    a.a.renderEnded(b)
}, qd = function(a) {
    var b = 0, c;
    for (c in a.a)
        u(a.a[c]) || b++;
    return b
};
jd.prototype.toString = function() {
    var a = "[AdData:", b = [], c;
    for (c in this.a) {
        var d = this.a[c];
        u(d) || b.push(d.toString())
    }
    for (var e in this.c)
        u(this.c[e]) || b.push("[" + e + "," + this.c[e] + "]");
    a += b.join();
    return a + "]"
};
var rd = function(a, b) {
    if (b) {
        var c = b.getName(), d = b.getSlotId().getInstance();
        return a.a[c + "_" + d] || null
    }
    return null
}, ld = function(a) {
    var b = [], c;
    for (c in a.a) {
        var d = a.a[c];
        u(d) || b.push(d)
    }
    return b
}, sd = function(a) {
    a = Ua(ld(a), function(a) {
        return a.k
    });
    bb(a);
    return a
}, td = function(a, b) {
    var c = a.f[I(b)], d;
    if (c)
        if (c)
            try {
                var e = window.top, f = new D(0, 0), g, h = Hb(c);
                g = h ? Ob(h) : window;
                do {
                    var k;
                    if (g == e)
                        k = Hc(c);
                    else {
                        var l = c, h = void 0;
                        if (l.getBoundingClientRect)
                            var m = Fc(l), h = new D(m.left, m.top);
                        else 
                            var n = Sb(Ib(l)), t = Hc(l),
                            h = new D(t.x - n.x, t.y - n.y);
                            var r;
                            if (rb&&!H(12)) {
                                var w;
                                var L = void 0;
                                F ? L = "-ms-transform" : G ? L = "-webkit-transform" : qb ? L = "-o-transform" : rb && (L = "-moz-transform");
                                var A = void 0;
                                L && (A = Ec(l, L));
                                A || (A = Ec(l, "transform"));
                                if (A) {
                                    var ua = A.match(Kc);
                                    w = ua ? new D(parseFloat(ua[1]), parseFloat(ua[2])) : new D(0, 0)
                                } else 
                                    w = new D(0, 0);
                                    r = new D(h.x + w.x, h.y + w.y)
                                } else 
                                    r = h;
                                    k = r
                        }
                        h = k;
                        f.x += h.x;
                        f.y += h.y
                    }
                    while (g && g != e && (c = g.frameElement) && (g = g.parent));
                    d = f
            } catch (fd) {
        d = new D(-12245933, -12245933)
    } else 
        d = null;
    else 
        d = null;
    return d
};
var ud = function() {
    this.i = "";
    this.n = "json_html";
    this.c = "fif";
    this.j=!1;
    this.h = "";
    this.a = [];
    this.p = this.o=!1;
    this.f = this.g = NaN;
    this.l = this.m = "";
    this.k=!1;
    this.b = NaN;
    this.d = 0
};
var xd = function(a) {
    this.d = document;
    this.a = a || 0;
    this.c = vd(this, "__gads=");
    this.f = this.g=!1;
    wd(this)
}, yd = function(a, b) {
    if (b._cookies_.length && (a.b = b._cookies_[0], null != a.b && (a.c = a.b._value_, null != a.b && a.c))
        ) {
        var c = new Date;
        c.setTime(1E3 * a.b._expires_);
        a.d.cookie = "__gads=" + a.c + "; expires=" + c.toGMTString() + "; path=" + a.b._path_ + "; domain=." + a.b._domain_
    }
}, wd = function(a) {
    if (!a.c&&!a.f && 1 != a.a) {
        a.d.cookie = "GoogleAdServingTest=Good";
        var b = "Good" == vd(a, "GoogleAdServingTest=");
        if (b) {
            var c = new Date;
            c.setTime((new Date).valueOf() +
            -1);
            a.d.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
        }
        a.g = b;
        a.f=!0
    }
}, vd = function(a, b) {
    var c = a.d.cookie, d = c.indexOf(b), e = "";
    -1 != d && (d += b.length, e = c.indexOf(";", d), -1 == e && (e = c.length), e = c.substring(d, e));
    return e
}, zd = null, Ad = function(a) {
    null == zd && (zd = new xd(a));
    return zd
};
var Bd = new qc, Cd = [], Ed = function(a, b, c) {
    c = c || [];
    a = new Dd(a);
    if (cb.apply(a, c)()) {
        var d = fb(a.a);
        c = a.b;
        var e = a.c;
        (e ? c.a.hasOwnProperty(e) && "" == c.a[e] : 1) && (b = Oa(d, b * d.length)) && rc(c, b, e)
    }
    Cd.push(a);
    return a
}, Dd = function(a) {
    this.a = a;
    this.b = Bd;
    this.c = "exp" + (this[fa] || (this[fa]=++ga));
    this.b.a[this.c] = ""
}, Fd = function(a) {
    for (var b = 0; b < Cd.length; ++b) {
        var c = Cd[b], d = c.a, e = {}, f = void 0;
        for (f in d)
            e[d[f]] = f;
        d = e[a];
        if (null != d) {
            d in c.a && rc(c.b, c.a[d], c.c);
            return 
        }
    }
    0 <= Ra(Bd.b, a) || rc(Bd, a)
}, Gd = O[18], Hd;
Hd = 0 <= Ra(["prerender"], Zc(void 0));
var Id = Ed({
    control: "108809009",
    experiment: "108809010"
}, Gd, [function(a) {
    return function() {
        return a
    }
}(Hd)]);
Ed({
    control: "108809013",
    experiment: "108809014"
}, O[19]);
var Jd = navigator;
function Kd(a) {
    var b = 1, c = 0, d;
    if (void 0 != a && "" != a)
        for (b = 0, d = a.length-1; 0 <= d; d--)
            c = a.charCodeAt(d), b = (b<<6 & 268435455) + c + (c<<14), c = b & 266338304, b = 0 != c ? b^c>>21 : b;
    return b
}
function Ld(a, b) {
    if (!a || "none" == a)
        return 1;
    a = String(a);
    "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
    return Kd(a.toLowerCase())
}
var Md = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, Nd = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
var Od = function() {};
F && H("9");
!G || H("528");
rb && H("1.9b") || F && H("8") || qb && H("9.5") || G && H("528");
rb&&!H("8") || F && H("9");
var Rd = function(a) {
    var b = [];
    Pd(new Qd, a, b);
    return b.join("")
}, Qd = function() {}, Pd = function(a, b, c) {
    switch (typeof b) {
    case "string":
        Sd(b, c);
        break;
    case "number":
        c.push(isFinite(b)&&!isNaN(b) ? b : "null");
        break;
    case "boolean":
        c.push(b);
        break;
    case "undefined":
        c.push("null");
        break;
    case "object":
        if (null == b) {
            c.push("null");
            break
        }
        if (ca(b)) {
            var d = b.length;
            c.push("[");
            for (var e = "", f = 0; f < d; f++)
                c.push(e), Pd(a, b[f], c), e = ",";
            c.push("]");
            break
        }
        c.push("{");
        d = "";
        for (e in b)
            Object.prototype.hasOwnProperty.call(b, e) && (f =
            b[e], "function" != typeof f && (c.push(d), Sd(e, c), c.push(":"), Pd(a, f, c), d = ","));
        c.push("}");
        break;
    case "function":
        break;
    default:
        throw Error("Unknown type: " + typeof b);
    }
}, Td = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, Ud = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g, Sd = function(a, b) {
    b.push('"', a.replace(Ud, function(a) {
        if (a in Td)
            return Td[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b &&
        (e += "0");
        return Td[a] = e + b.toString(16)
    }), '"')
};
var Xd = function(a) {
    u(q.setImmediate) ? q.setImmediate(a) : (Vd || (Vd = Wd()), Vd(a))
}, Vd, Wd = function() {
    var a = q.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = v(function(a) {
            if (a.origin ==
            d || a.data == c)
                this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            c = c.next;
            var a = c.ia;
            c.ia = null;
            a()
        };
        return function(a) {
            d.next = {
                ia: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function(a) {
        var b = document.createElement("script");
        b.onreadystatechange = function() {
            b.onreadystatechange =
            null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } : function(a) {
        q.setTimeout(a, 0)
    }
};
var Yd = function(a) {
    Xd(function() {
        throw a;
    })
}, ce = function(a, b) {
    Zd || (Xd($d), Zd=!0);
    ae.push(new be(a, b))
}, Zd=!1, ae = [], $d = function() {
    for (; ae.length;) {
        var a = ae;
        ae = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                c.oa.call(c.scope)
            } catch (d) {
                Yd(d)
            }
        }
    }
    Zd=!1
}, be = function(a, b) {
    this.oa = a;
    this.scope = b
};
var de = function(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable=!0
}, ee = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var ge = function(a, b) {
    this.b = 0;
    this.g = void 0;
    this.a = this.c = null;
    this.d = this.f=!1;
    try {
        var c = this;
        a.call(b, function(a) {
            fe(c, 2, a)
        }, function(a) {
            fe(c, 3, a)
        })
    } catch (d) {
        fe(this, 3, d)
    }
};
ge.prototype.then = function(a, b, c) {
    return he(this, u(a) ? a : null, u(b) ? b : null, c)
};
de(ge);
var ke = function(a) {
    0 == a.b && ce(function() {
        var a = new ie(void 0);
        je(this, a)
    }, a)
}, je = function(a, b) {
    if (0 == a.b)
        if (a.c) {
            var c = a.c;
            if (c.a) {
                for (var d = 0, e =- 1, f = 0, g; g = c.a[f]; f++)
                    if (g = g.C)
                        if (d++, g == a && (e = f)
                            , 0 <= e && 1 < d)break;
                            0 <= e && (0 == c.b && 1 == d ? je(c, b) : (d = c.a.splice(e, 1)[0], le(c), d.O(b)))
                        }
        } else 
            fe(a, 3, b)
    }, ne = function(a, b) {
    a.a && a.a.length || 2 != a.b && 3 != a.b || me(a);
    a.a || (a.a = []);
    a.a.push(b)
}, he = function(a, b, c, d) {
    var e = {
        C: null,
        ba: null,
        O: null
    };
    e.C = new ge(function(a, g) {
        e.ba = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (l) {
                g(l)
            }
        } :
        a;
        e.O = c ? function(b) {
            try {
                var e = c.call(d, b);
                !ba(e) && b instanceof ie ? g(b) : a(e)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.C.c = a;
    ne(a, e);
    return e.C
};
ge.prototype.h = function(a) {
    this.b = 0;
    fe(this, 2, a)
};
ge.prototype.i = function(a) {
    this.b = 0;
    fe(this, 3, a)
};
var fe = function(a, b, c) {
    if (0 == a.b) {
        if (a == c)
            b = 3, c = new TypeError("Promise cannot resolve to itself");
        else {
            if (ee(c)) {
                a.b = 1;
                c.then(a.h, a.i, a);
                return 
            }
            if (ea(c))
                try {
                    var d = c.then;
                    if (u(d)) {
                        oe(a, c, d);
                        return 
                    }
            } catch (e) {
                b = 3, c = e
            }
        }
        a.g = c;
        a.b = b;
        me(a);
        3 != b || c instanceof ie || pe(a, c)
    }
}, oe = function(a, b, c) {
    a.b = 1;
    var d=!1, e = function(b) {
        d || (d=!0, a.h(b))
    }, f = function(b) {
        d || (d=!0, a.i(b))
    };
    try {
        c.call(b, e, f)
    } catch (g) {
        f(g)
    }
}, me = function(a) {
    a.f || (a.f=!0, ce(a.j, a))
};
ge.prototype.j = function() {
    for (; this.a && this.a.length;) {
        var a = this.a;
        this.a = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b], d = this.g;
            2 == this.b ? c.ba(d) : (le(this), c.O(d))
        }
    }
    this.f=!1
};
var le = function(a) {
    for (; a && a.d; a = a.c)
        a.d=!1
}, pe = function(a, b) {
    a.d=!0;
    ce(function() {
        a.d && qe.call(null, b)
    })
}, qe = Yd, ie = function(a) {
    la.call(this, a)
};
y(ie, la);
ie.prototype.name = "cancel"; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var re = function(a, b) {
    this.c = [];
    this.k = b || null;
    this.a = this.g=!1;
    this.b = void 0;
    this.j = this.f=!1;
    this.d = 0;
    this.h = null;
    this.l = 0
};
re.prototype.i = function(a, b) {
    this.f=!1;
    this.g=!0;
    this.b = b;
    this.a=!a;
    se(this)
};
var te = function(a, b, c) {
    a.c.push([b, c, void 0]);
    a.g && se(a)
};
re.prototype.then = function(a, b, c) {
    var d, e, f = new ge(function(a, b) {
        d = a;
        e = b
    });
    te(this, d, function(a) {
        e(a)
    });
    return f.then(a, b, c)
};
de(re);
var ue = function(a) {
    return Va(a.c, function(a) {
        return u(a[1])
    })
}, se = function(a) {
    if (a.d && a.g && ue(a)) {
        var b = a.d, c = ve[b];
        c && (q.clearTimeout(c.A), delete ve[b]);
        a.d = 0
    }
    a.h && (a.h.l--, delete a.h);
    for (var b = a.b, d = c=!1; a.c.length&&!a.f;) {
        var e = a.c.shift(), f = e[0], g = e[1], e = e[2];
        if (f = a.a ? g : f)
            try {
                var h = f.call(e || a.k, b);
                ba(h) && (a.a = a.a && (h == b || h instanceof Error), a.b = b = h);
                ee(b) && (d=!0, a.f=!0)
            } catch (k) {
            b = k, a.a=!0, ue(a) || (c=!0)
        }
    }
    a.b = b;
    d && (h = v(a.i, a, !0), d = v(a.i, a, !1), b instanceof re ? (te(b, h, d), b.j=!0) : b.then(h, d));
    c &&
    (b = new we(b), ve[b.A] = b, a.d = b.A)
}, we = function(a) {
    this.A = q.setTimeout(v(this.b, this), 0);
    this.a = a
};
we.prototype.b = function() {
    delete ve[this.A];
    throw this.a;
};
var ve = {};
var xe = function(a) {
    a || Ib()
};
y(xe, Od);
var ye = function(a, b) {
    xe.call(this, b);
    this.d = a;
    this.a = []
}, ze;
y(ye, xe);
ye.prototype.b = 0;
ye.prototype.c=!1;
ye.prototype.send = function(a, b) {
    var c = a + ":" + b;
    if (!F || 3800 >= b.length)
        this.a.push("|" + c);
    else 
        for (var d = b.length, e = Math.ceil(d / 3800), f = 0, g = 1; f < d;)
            this.a.push("," + g + "/" + e + "|" + c.substr(f, 3800)), g++, f += 3800;
    !this.c && this.a.length && (c = this.a.shift(), ++this.b, this.f.send(this.b + c), this.c=!0)
};
var Ae = [], Be = v(function() {
    var a, b=!1;
    try {
        for (var c = 0; a = Ae[c]; c++)
            b = b || a.b()
    } catch (d) {
        if (a.a.d.a(), !Ae.length)
            return 
    }
    a = ja();
    b && (ze = a);
    window.setTimeout(Be, 1E3 > a - ze ? 10 : 100)
}, ye);
G && document.createElement("iframe");
rb || G || F && H(11);
var Ce = function(a) {
    this.b = a
};
var De = function(a, b, c, d, e, f) {
    this.c = a.r();
    this.b = b.r();
    this.d = c;
    this.a = d.r();
    this.f = e;
    this.g = f
};
var Ee = function(a, b, c) {
    this.c = a;
    this.a = b;
    this.b = c
};
var Ge = function(a, b, c, d) {
    this.b = Fe++;
    this.a = a;
    this.c = window.location.protocol + "//" + window.location.host;
    a.style.width = Ic(d.width);
    a.style.height = Ic(d.height);
    var e = window.screenX || window.screenLeft || 0, f = window.screenY || window.screenTop || 0, e = new kc(f, (window.outerWidth || document.documentElement.clientWidth || 0) - e, (window.outerHeight || document.documentElement.clientHeight || 0) - f, e), f = Hc(a), g;
    if ("none" != Ec(a, "display"))
        g = Jc(a);
    else {
        g = a.style;
        var h = g.display, k = g.visibility, l = g.position;
        g.visibility = "hidden";
        g.position = "absolute";
        g.display = "inline";
        var m = Jc(a);
        g.display = h;
        g.position = l;
        g.visibility = k;
        g = m
    }
    f = new Cc(f.x, f.y, g.width, g.height);
    g = new kc(f.top, f.left + f.width, f.top + f.height, f.left);
    for (var h = String(Ec(a, "zIndex")), k = new kc(0, Infinity, Infinity, 0), l = Ib(a), n = l.a.body, t = l.a.documentElement, m = Nb(l.a); a = Gc(a);)
        if (!(F && 0 == a.clientWidth || G && 0 == a.clientHeight && a == n || a == n || a == t || "visible" == Ec(a, "overflow"))) {
            var r = Hc(a), w;
            w = a;
            if (rb&&!H("1.9")) {
                var L = parseFloat(Dc(w, "borderLeftWidth"));
                if ("rtl" == Ec(w, "direction"))
                    var A =
                    w.offsetWidth - w.clientWidth - L - parseFloat(Dc(w, "borderRightWidth")), L = L + A;
                    w = new D(L, parseFloat(Dc(w, "borderTopWidth")))
                } else 
                    w = new D(w.clientLeft, w.clientTop);
                    r.x += w.x;
                    r.y += w.y;
                    k.top = Math.max(k.top, r.y);
                    k.right = Math.min(k.right, r.x + a.clientWidth);
                    k.bottom = Math.min(k.bottom, r.y + a.clientHeight);
                    k.left = Math.max(k.left, r.x)
        }
    a = m.scrollLeft;
    m = m.scrollTop;
    k.left = Math.max(k.left, a);
    k.top = Math.max(k.top, m);
    l = Mb(Ob(l.a) || window);
    k.right = Math.min(k.right, a + l.width);
    k.bottom = Math.min(k.bottom, m + l.height);
    a = 0 <=
    k.top && 0 <= k.left && k.bottom > k.top && k.right > k.left ? k : null;
    k = null;
    if (null != a)
        t: {
        n = new Cc(a.left, a.top, a.right - a.left, a.bottom - a.top);
        k = Math.max(n.left, f.left);
        l = Math.min(n.left + n.width, f.left + f.width);
        if (k <= l && (m = Math.max(n.top, f.top), n = Math.min(n.top + n.height, f.top + f.height), m <= n)
            ) {
                k = new Cc(k, m, l - k, n - m);
                break t
            }
            k = null
        }
    m = (m = null != k && (0 != k.width || k.left + k.width != a.left && k.left != a.right)) && (0 != k.height || k.top + k.height != a.top && k.top != a.bottom);
    l = null;
    l = m ? new kc(Math.max(g.top - a.top, 0), Math.max(a.right -
    g.right, 0), Math.max(a.bottom - g.bottom, 0), Math.max(g.left - a.left, 0)) : new kc(0, 0, 0, 0);
    m = a = 0;
    k&&!(new E(k.width, k.height)).isEmpty() && (a = k.width / f.width, m = k.height / f.height);
    this.d = new De(e, g, h, l, a, m);
    e = Ib(this.a);
    c = "1-0-0;" + c.length + ";" + c;
    h = new Ee(this.b, this.c, this.d);
    f = h.c;
    g = h.a;
    h = h.b;
    h = Rd({
        windowCoords_t: h.c.top,
        windowCoords_r: h.c.right,
        windowCoords_b: h.c.bottom,
        windowCoords_l: h.c.left,
        frameCoords_t: h.b.top,
        frameCoords_r: h.b.right,
        frameCoords_b: h.b.bottom,
        frameCoords_l: h.b.left,
        styleZIndex: h.d,
        allowedExpansion_t: h.a.top,
        allowedExpansion_r: h.a.right,
        allowedExpansion_b: h.a.bottom,
        allowedExpansion_l: h.a.left,
        xInView: h.f,
        yInView: h.g
    });
    f = Rd({
        uid: f,
        hostPeerName: g,
        initialGeometry: h
    });
    g = "//tpc.googlesyndication.com/safeframe/1-0-0/html/container.html";
    h = Ob(e.a);
    for (a = 0; h != h.parent;)
        a++, h = h.parent;
    (h = a) && (g += "?n=" + h);
    b = {
        id: b,
        name: c + f,
        src: g,
        scrolling: "no",
        marginWidth: "0",
        marginHeight: "0",
        width: String(d.width),
        height: String(d.height)
    };
    d = {
        frameborder: 0,
        style: "border:0;vertical-align:bottom;",
        allowTransparency: "true",
        src: F &&
        !H(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"": "about:blank"
    };
    b && ib(d, b);
    b = e.b("iframe", d);
    this.a.appendChild(b)
};
y(Ge, Ce);
var Fe = 1;
var R = function(a, b, c, d, e) {
    this.b = b;
    this.h = c;
    this.c = d;
    this.f = a;
    this.a = e;
    this.d = "";
    this.m = cc;
    this.g = [];
    this.l = []
};
R.prototype.q = function(a) {
    if (!ca(a))
        return "";
    if ("sra" == this.f)
        0 == a.length && (a = ld(this.b));
    else {
        if (0 == a.length)
            return "";
        1 < a.length && (a = [a[0]])
    }
    this.j();
    this.k(a);
    a = this.d;
    if (2048 < a.length) {
        var b = a.lastIndexOf("&", 2040);
        -1 != b ? a = a.substring(0, b) : (a = a.substring(0, 2040), a = a.replace(/%\w?$/, ""));
        a += "&trunc=1"
    }
    return a
};
R.prototype.k = function(a) {
    try {
        var b, c = "", d = 0;
        "prerender" == Zc(document) ? (c = "108809008", d = O[17]) : (c = "108809007", d = O[16]);
        b = Oa([c], d);
        S(this, "eid", (b ? Ya(this.a.a, b) : this.a.a).join())
    } catch (e) {}
    this.c && 0 !== this.c.a && S(this, "co", this.c.a);
    b = this.b.n;
    -1 !== b && S(this, "tfcd", b);
    Boolean(window.postMessage) && S(this, "sfv", "1-0-0");
    if ("sra" == this.f) {
        b = a.length;
        for (c = 0; c < b; c++) {
            var d = a[c].b, f = "";
            if ("" != d) {
                for (var f = d = d.split("/"), g = 0; g < f.length; g++)
                    if ("" != f[g]) {
                        for (var h=!1, k = 0; k < this.g.length; k++)
                            if (f[g] == this.g[k]) {
                                h =
                                !0;
                                break
                            }
                            h || this.g.push(f[g])
                    }
                f = "";
                for (g = 0; g < d.length; g++) {
                    if (0 < g)
                        f += "/";
                    else if ("" == d[0])
                        continue;
                    for (h = 0; h < this.g.length; h++)
                        if (d[g] == this.g[h]) {
                            f += h;
                            break
                        }
                }
            }
            this.l.push(f)
        }
        S(this, "iu_parts", this.g.join());
        S(this, "enc_prev_ius", this.l.join());
        b = [];
        for (c = 0; c < a.length; ++c)
            b.push(Zb(a[c]));
        S(this, "prev_iu_szs", b.join());
        if (a.length) {
            b = "";
            for (c = 0; c < a.length; ++c)
                b += a[c].a.getOutOfPage() ? "1" : "0";
            b = parseInt(b, 2)
        } else 
            b = 0;
        b && S(this, "ists", b);
        He(this);
        c = null;
        b = [];
        for (c = 0; c < a.length; ++c)
            b.push($b(a[c]));
        c = b.join("|");
        c.length == b.length-1 && (c = null);
        S(this, "prev_scp", c)
    } else 
        b = a[0].a.gtfcd(), -1 !== b && S(this, "tfcd", b), b = a[0], S(this, "iu", b.b), S(this, "sz", Zb(b)), b.a.getClickUrl() && S(this, "click", b.a.getClickUrl()), b.a.getOutOfPage() && S(this, "ists", "1"), b in this.b.d && S(this, "logonly", "1"), He(this), b = a[0], c = $b(b), S(this, "scp", c), b = b.a.getAudExtId(), 0 < b && S(this, "audextid", b);
    b = 0;
    this.a.j && (b|=1);
    a[0].o && (b|=2);
    0 < b && S(this, "eri", b);
    "experiment"in Id.a && Id.a.experiment == Id.b.c(Id.c) && "prerender" == Zc() && S(this,
    "d_imp", 1);
    b = window;
    var c = document, d = this.b, f = [], l;
    for (l in d.c)
        u(d.c[l]) || f.push(B(l) + "=" + B(d.c[l]));
    0 < d.i.length&&!("excl_cat"in d.c) && f.push(B("excl_cat") + "=" + B(d.i.join(",")));
    S(this, "cust_params", f.join("&"));
    this.c && 1 != this.c.a && (S(this, "cookie", this.c.c), this.c.g && S(this, "cookie_enabled", "1"));
    (l = this.b.m) && S(this, "uule", l);
    this.c && 1 != this.c.a && (l = (this.b.g.a.google_page_url || (b.top == b ? c.URL : c.referrer)) != c.URL ? c.domain : "") && S(this, "cdm", l);
    null != P(this.h, "google_preview") && S(this, "gct", P(this.h,
    "google_preview"));
    this.i(new Date, a);
    l = {};
    l.u_tz =- (new Date).getTimezoneOffset();
    var m;
    b = window;
    try {
        m = b.history.length
    } catch (n) {
        m = 0
    }
    l.u_his = m;
    l.u_java = navigator.javaEnabled();
    window.screen && (l.u_h = window.screen.height, l.u_w = window.screen.width, l.u_ah = window.screen.availHeight, l.u_aw = window.screen.availWidth, l.u_cd = window.screen.colorDepth);
    navigator.plugins && (l.u_nplug = navigator.plugins.length);
    navigator.mimeTypes && (l.u_nmime = navigator.mimeTypes.length);
    for (var t in l)
        m = l[t], u(m) || T(this, t, m);
    q.devicePixelRatio &&
    T(this, "u_sd", Number(q.devicePixelRatio.toFixed(3)));
    var r;
    try {
        r = Na()
    } catch (w) {
        r = "0"
    }
    T(this, "flash", r);
    t = this.b.g.a.google_page_url || (window.top == window ? document.URL : document.referrer);
    null != P(this.h, "google_preview") && (r = t.indexOf("google_preview=", t.lastIndexOf("?")), m = t.indexOf("&", r), -1 == m && (m = t.length-1, r -= 1), t = t.substring(0, r) + t.substring(m + 1, t.length));
    S(this, "url", t);
    S(this, "ref", document.referrer);
    if ("sra" == this.f) {
        t = a.length;
        r = [];
        for (m = 0; m < t; m++)
            l = Xc(a[m]), a[m].i = l, r.push(l);
        S(this, "adks",
        r.join(","))
    }
    a = q.googletag;
    null != a && null != a.getVersion && S(this, "vrg", a.getVersion());
    S(this, "vrp", "34")
};
var He = function(a) {
    a.c && 1 == a.c.a || S(a, "ppid", a.b.o)
};
R.prototype.i = function(a, b) {
    S(this, "lmt", (Date.parse(document.lastModified) / 1E3).toString());
    T(this, "dt", a.getTime());
    if (document.body) {
        var c = document.body.scrollHeight, d = document.body.clientHeight;
        d && c && S(this, "cc", Math.round(100 * d / c).toString())
    }
    c = P(this.h, "deb");
    null != c && S(this, "deb", c);
    c = P(this.h, "haonly");
    null != c && S(this, "haonly", c);
    c = dd();
    Ea(c, v(function(a, b) {
        S(this, b, a)
    }, this));
    if (c = lc(!0))
        S(this, "biw", c.width), S(this, "bih", c.height);
    this.a.d && S(this, "oid", this.a.d);
    if ("sra" != this.f) {
        if (c =
        td(this.b, b[0]))
            S(this, "adx", Math.round(c.x)), S(this, "ady", Math.round(c.y));
        c = b[0].i || Xc(b[0], this.b.k[I(b[0])]);
        S(this, "adk", c)
    }
    c = nc();
    0 < c && S(this, "osd", c);
    c = this.b.g;
    d = "";
    "sra" == this.f ? d = cd(b, c, this.b.h, this.m) : (d = this.b.h[I(b[0])], null == d ? d = c : bd(d, c), d = d.q());
    d && (this.d += "&" + d)
};
R.prototype.j = function() {
    this.d = Vc(Boolean(this.b.m)) + "/gampad/ads?";
    T(this, "gdfp_req", 1);
    S(this, "correlator", this.a.i);
    T(this, "output", this.a.n);
    T(this, "callback", this.a.h);
    T(this, "impl", this.a.c);
    this.a.o && S(this, "per_only", 1);
    "sra" == this.f ? S(this, "json_a", 1) : this.a.p && S(this, "fif_to", 1)
};
var S = function(a, b, c) {
    null != c && T(a, b, B("" + c))
}, T = function(a, b, c) {
    null != c && "" != c && (a.d = "?" != a.d.charAt(a.d.length-1) ? a.d + ("&" + b + "=" + c) : a.d + (b + "=" + c))
};
var Ie = function(a, b, c, d, e) {
    R.call(this, a, b, c, d, e)
};
y(Ie, R);
Ie.prototype.i = function(a, b) {
    0 < navigator.userAgent.indexOf("MSIE ") && ad(this.b.g, "google_encoding", document.charset, !1);
    R.prototype.i.call(this, a, b);
    S(this, "ifi", b[0].j);
    var c;
    var d = window;
    d == d.top ? c = 0 : (c = [], c.push(d.document.URL), d.name && c.push(d.name), d = lc(!1, d), c.push(d.width.toString()), c.push(d.height.toString()), c = Pa(c.join("")));
    0 != c && S(this, "ifk", c.toString())
};
Ie.prototype.k = function(a) {
    var b = a[0], c = window;
    c.google_unique_id?++c.google_unique_id : c.google_unique_id = 1;
    b.j = c.google_unique_id;
    this.a.k && (T(this, "hxva", 1), S(this, "cmsid", this.a.l), S(this, "vid", this.a.m));
    isNaN(this.a.f) || T(this, "pod", this.a.f);
    isNaN(this.a.g) || T(this, "ppos", this.a.g);
    isNaN(this.a.b) || T(this, "scor", this.a.b);
    R.prototype.k.call(this, a);
    a = window;
    var b = a.document.domain, d = a.document.cookie, e = a.history.length, f = a.screen, g = a.document.referrer, h = Math.round((new Date).getTime() / 1E3),
    c = window.google_analytics_domain_name, b = "undefined" == typeof c ? Ld("auto", b): Ld(c, b), k =- 1 < d.indexOf("__utma=" + b + "."), l =- 1 < d.indexOf("__utmb=" + b), c = wc("google_persistent_state"), c = yc(c) || (c.S[xc(14)] = {}), m=!1;
    if (k)
        g = d.split("__utma=" + b + ".")[1].split(";")[0].split("."), l ? c.u = g[3] + "" : c.u || (c.u = h + ""), c.v = g[0] + "." + g[1], c.Z=!0;
    else {
        c.u || (c.u = h + "");
        if (!c.v) {
            m=!0;
            l = Math.round(2147483647 * Math.random());
            k = [Jd.appName, Jd.version, Jd.language ? Jd.language: Jd.browserLanguage, Jd.platform, Jd.userAgent, Jd.javaEnabled() ?
            1: 0].join("");
            f ? k += f.width + "x" + f.height + f.colorDepth : window.b && (f = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), k += f.screen.width + "x" + f.screen.height);
            k = k + d + (g || "");
            for (g = k.length; 0 < e;)
                k += e--^g++;
            c.v = (l^Kd(k) & 2147483647) + "." + h
        }
        c.Z=!1
    }
    if (!c.la) {
        var n;
        t:
        {
            h = 999;
            if (g = window.google_analytics_domain_name)
                g = 0 == g.indexOf(".") ? g.substr(1) : g, h = ("" + g).split(".").length;
            g = 999;
            d = d.split(";");
            for (f = 0; f < d.length; f++)
                if (e = Md.exec(d[f]) || Nd.exec(d[f])) {
                    if (e[1] == h) {
                        n = e[2];
                        break t
                    }
                    e[1] < g && (g = e[1], n = e[2])
                }
        }
        m &&
        n&&-1 != n.search(/^\d+\.\d+$/) ? c.v = n : n != c.v && (c.la = n)
    }
    c.pa = b;
    c.$ || (c.$ = Math.round(2147483647 * Math.random()));
    n = wc();
    n = yc(n);
    T(this, "ga_vid", n.v);
    T(this, "ga_sid", n.u);
    T(this, "ga_hid", n.$);
    T(this, "ga_fc", n.Z);
    S(this, "ga_wpids", a.google_analytics_uacct)
};
var Je = null, Ke = function(a, b) {
    var c = Jb(a);
    c && (c.style.display = b ? "" : "none")
}, Le = function(a) {
    document.write('<script type="text/javascript" src="' + a + '">\x3c/script>')
}, Me = function(a, b, c, d, e, f) {
    f = (f || document).createElement("iframe");
    f.id = b;
    f.name = b;
    null != d && null != e && (f.width = String(d), f.height = String(e));
    f.vspace = "0";
    f.hspace = "0";
    f.allowTransparency = "true";
    f.scrolling = "no";
    f.marginWidth = "0";
    f.marginHeight = "0";
    f.frameBorder = "0";
    f.style.border = "0";
    f.style.verticalAlign = "bottom";
    c && (f.style.visibility =
    "hidden", f.style.display = "none");
    f.src = "javascript:\"<html><body style='background:transparent'></body></html>\"";
    a.appendChild(f);
    return f
}, Re = function(a, b, c) {
    c && (b = Ne(b));
    if (0 != Wc()) {
        var d;
        try {
            d=!!a.contentWindow.document
        } catch (e) {
            d=!1
        }
        if (d) {
            var f = b, g = Oe();
            try {
                var h = window.frames[a.name];
                if (6 < parseInt(Wc(), 10) || 0 > f.indexOf("http://" + O[1] + "/pagead/inject_object_div.js")) {
                    var k;
                    i:
                    {
                        a = f;
                        b = document;
                        var l = Wc(), m;
                        if (!(m = 0 == l)) {
                            var n;
                            if (!(n = isNaN(l))) {
                                var t;
                                if (!(t = 7 > l)) {
                                    var r;
                                    if (!(r = 9 < l)) {
                                        var w;
                                        if (!(w =
                                        b.documentMode && 10 <= b.documentMode)) {
                                            var L = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                                            w = 6 <= (L ? parseFloat(L[1]) : 0)
                                        }
                                        r = w
                                    }
                                    t = r
                                }
                                n = t
                            }
                            m = n
                        }
                        if (!m)
                            for (l = 0; l < a.length; ++l)
                                if (127 < a.charCodeAt(l)) {
                                    k=!0;
                                    break i
                                }
                        k=!1
                    }
                    if (k) {
                        var A = unescape(encodeURIComponent(f)), ua = Math.floor(A.length / 2);
                        a = [];
                        for (k = 0; k < ua; ++k)
                            a[k] = String.fromCharCode(256 * A.charCodeAt(2 * k + 1) + A.charCodeAt(2 * k));
                        1 == A.length%2 && (a[ua] = A.charAt(A.length-1));
                        f = a.join("")
                    }
                    h.contents = f;
                    h.location.replace("javascript:window.contents")
                } else 
                    h.contents =
                    f, h.location.replace("javascript:document.write(window.contents);document.close();")
            } catch (fd) {
                Pe("Could not write third party content into IE iframe: " + fd.message)
            } finally {
                Qe(g)
            }
        } else {
            A = b;
            h = Oe();
            try {
                f = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random())^ja()).toString(36)), window[f] = A, A = 'var adContent = window.parent["' + f + '"];window.parent["' + f + '"] = null;document.write(adContent);', A = 6 == Wc() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" +
                document.domain + '";' + A + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + A + "document.close();", a.src = 'javascript:\'<script type="text/javascript">' + A + "\x3c/script>'"
            } catch (yf) {
                window[f] = null, Pe("Could not write third party content into  IE iframe with modified document.domain: " + yf.message)
            } finally {
                Qe(h)
            }
        }
    } else {
        h = b;
        try {
            g = a.contentWindow ? a.contentWindow.document : a.contentDocument, -1 != navigator.userAgent.indexOf("Firefox") && g.open("text/html", "replace"), g.write(h),
            g.close()
        } catch (zf) {
            Pe("Could not write content into iframe using  the DOM standards method:" + zf.message)
        }
    }
}, Ne = function(a) {
    if (!Boolean(a))
        return a;
    var b = a.toLowerCase();
    return -1 < b.indexOf("<!doctype")||-1 < b.indexOf("<html") ? a : "<html>\n<head>\n<script>var inDapIF=true;\x3c/script>\n</head><body>" + a + "</body></html>\n"
}, Pe = function(a) {
    Je || (Je = null);
    Je.b(a)
}, Oe = function() {
    var a = [], b = document.getElementsByTagName("base");
    if (b)
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c], f = e.getAttribute("target");
            f && (a.push({
                ma: e,
                na: f
            }), e.removeAttribute("target"))
        }
    return a
}, Qe = function(a) {
    if (a)
        for (var b = 0, c = a.length; b < c; ++b) {
            var d = a[b];
            d.ma.setAttribute("target", d.na)
        }
};
var Se = function(a, b, c, d) {
    var e = P(c, "api_experiment");
    na(e) || Sa(Ua(e.split(","), oa), Fd);
    this.a = b;
    this.d = c;
    this.c = {};
    this.K = d;
    this.h = Math.floor(4503599627370496 * Math.random());
    this.b = a;
    this.X = this.g=!1;
    "MOBILE" == P(c, "target_platform") && (this.X=!0);
    this.g = this.a && null !== this.a.l ? Boolean(this.a.l) : this.X
};
p = Se.prototype;
p.w = function() {
    return "lean"
};
p.ka = function() {
    return null
};
p.T = function() {
    return !1
};
p.ja = function() {};
p.N = function() {
    return Ya(Bd.b, Ta(fb(Bd.a), db()))
};
p.s = function(a) {
    var b = new ud;
    b.i = this.h + "";
    b.n = "json_html";
    b.c = this.M(this.b);
    b.j = a;
    b.h = this.Y();
    b.a = this.N();
    return b
};
p.q = function(a, b) {
    return Te(this, this.b ? "sra" : "single", this.s(b)).q(a)
};
var Ue = function(a, b) {
    Sa(b, function(a) {
        var b = this.s(!1);
        b.c = this.M(!1);
        b = Te(this, "single", b).q([a]);
        Wb(a, b)
    }, a)
}, Ve = function(a, b, c, d, e, f, g) {
    a = a.createElement(b);
    a.style.width = d + "px";
    e && (a.style.height = e + "px");
    a.style.display = f;
    a.style.position = "relative";
    g && (a.style.margin = g);
    a.style.border = 0;
    c && a.appendChild(c);
    return a
};
Se.prototype.o = function(a, b, c, d) {
    c in this.a.d || (d && this.T([c]), a = c.a.getCollapseEmptyDiv(), null == a && (a = "true" === P(this.d, "google_collapse_empty_div")), a && Ke(J(c), !1))
};
Se.prototype.k = function(a, b, c) {
    this.c || (this.c = {});
    var d = [];
    if (this.b)
        if (ca(a)) {
            d = c || ld(this.a);
            b = [];
            for (var e = 0; e < d.length; ++e) {
                c = d[e];
                var f = a[e][c.b];
                f && (We(this, c, f), b.push(c))
            }
            d = b
        } else 
            for (e in d = [], a) {
                if (b = a[e], !u(b) && (c = Xe(this, e))
                    )We(this, c, b), d.push(c)
            } else 
                e = gb(a), 1 < e.length || 0 == e.length ? a = null : (e = e[0], a = a[e], (b = b ? this.a.a[b] : Xe(this, e)) ? (We(this, b, a), a = b) : a = null), a && d.push(a);
    return d
};
var We = function(a, b, c) {
    a.c[I(b)] = c;
    b.g || (b.g = (new Date).getTime());
    b.a.fetchEnded();
    null != c._cookies_ && yd(a.K, c);
    c._persistent_for_stream_ && (a.a.d[b] = null)
}, Xe = function(a, b) {
    if (!a.b)
        for (var c = a.a.b, d = c.length-1; 0 <= d; --d)
            if (c[d].b == b) {
                var e = c[d];
                if (!a.c[I(e)])
                    return e
            }
    d = [];
    if (e = a.a.j[b])
        for (c = 0; c < e.length; ++c)
            e[c] && d.push(c);
    if (c = d.length ? d : null)
        for (d = 0; d < c.length; ++d)
            if ((e = a.a.a[b + "_" + c[d]])&&!a.c[I(e)])
                return e;
    return null
};
var Ye = function(a, b) {
    var c = Vc();
    if (!b || 0 > b || 1 < b)
        b = 0;
    this.d = Math.random() < b;
    this.b = a;
    this.a = c + "/pagead/gen_204?id=" + B(a);
    this.c = []
}, Ze = function(a, b, c) {
    b && b.match(/^\w+$/) && c && (a.a += "&" + b + "=" + B(c))
}, $e = function(a, b) {
    var c = sd(b);
    0 < c.length && Ze(a, "pub_id", c[0]);
    Ze(a, "nslots", qd(b).toString());
    Ze(a, "pub_url", document.URL);
    Ze(a, "pub_ref", document.referrer)
}, af = function(a) {
    if (a.d && a.b && a.a) {
        var b = new Image;
        b.src = a.a;
        a.c.push(b)
    }
};
var bf = function(a, b, c, d, e) {
    R.call(this, a, b, c, d, e)
};
y(bf, R);
bf.prototype.j = function() {
    R.prototype.j.call(this);
    T(this, "m_ast", "js");
    T(this, "markup", "html");
    T(this, "js", "afmc")
};
var U = function(a, b, c, d, e) {
    Se.call(this, a, b, c, d);
    this.csi = e;
    this.m = this.i = null;
    this.ha = this.B = this.l = this.j=!1;
    this.V = this.W = "";
    this.p = NaN;
    this.P = 0
};
y(U, Se);
U.prototype.w = function() {
    return "unknown"
};
U.prototype.s = function(a) {
    a = U.R.s.call(this, a);
    a.k = this.ha;
    a.l = this.V;
    a.m = this.W;
    a.d = this.P;
    return a
};
U.prototype.N = function() {
    var a = Se.prototype.N.call(this), b = Qc().getOseExpId();
    b && a.push(b);
    return a
};
U.prototype.n = function() {
    this.csi.a("onload");
    this.csi.d(this.w());
    var a = pd(this.a);
    if (0 < a.length) {
        for (var b = {}, c = [], d = 0; d < a.length; ++d)
            b[a[d][0]]=!0;
        for (var e in b)
            u(e) || c.push(e);
        this.i = new Ye("gpt_missing_cb", O[10]);
        Ze(this.i, "pending", c.join());
        Ze(this.i, "correlator", this.h.toString());
        Ze(this.i, "impl", this.w());
        $e(this.i, this.a);
        af(this.i)
    }
};
var Te = function(a, b, c) {
    switch (P(a.d, "target_platform")) {
    case "MOBILE":
        return new bf(b, a.a, a.d, a.K, c);
    default:
        return new Ie(b, a.a, a.d, a.K, c)
    }
}, cf = function(a) {
    if (a.b&&!a.l) {
        var b = qd(a.a), c = a.a.b.length;
        b != c && (a.m = new Ye("gpt_sra_mismatch", O[11]), Ze(a.m, "correlator", a.h.toString()), Ze(a.m, "fslots", c.toString()), $e(a.m, a.a), af(a.m))
    }
};
U.prototype.o = function(a, b, c, d) {
    a.google_js_backfill ? b.write('<script src="' + O[5] + '">\x3c/script>') : U.R.o.call(this, a, b, c, d)
};
U.prototype.k = function(a, b, c) {
    hd(this.csi, "ga_srt", this.a.b.length, "_ga_start");
    return Se.prototype.k.call(this, a, b, c)
};
var df = function(a, b, c) {
    a.P && b && (a = a.a.a[c], c = "", a && (c = a.a.getContentUrl()), Qc().registerAdBlock(c, 3, "json_html", b))
};
var V = function(a, b, c, d, e) {
    U.call(this, a, b, c, d, e);
    this.f = [];
    this.Q = [];
    this.H = null;
    this.t = [];
    this.aa = {};
    this.L=!1;
    this.G = this.F = NaN;
    this.I=!1;
    this.J = NaN;
    this.D=!1
};
y(V, U);
V.prototype.w = function() {
    return this.b ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
};
V.prototype.Y = function() {
    return this.b ? "window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync" : "callbackProxy"
};
V.prototype.M = function(a) {
    return a ? "fifs" : "fif"
};
V.prototype.s = function(a) {
    a = V.R.s.call(this, a);
    !this.b && this.L && (a.p=!0);
    a.o = this.D;
    a.f = this.F;
    a.g = this.G;
    a.b = this.p;
    return a
};
var ff = function(a, b, c) {
    nd(a.a, b);
    c = a.q([b], c);
    a.L=!1;
    c = Tc(c);
    Wb(b, c);
    var d = "";
    if (!(b in a.a.d)) {
        var d = d + '<script type="text/javascript">function callbackProxy(adContents) { ', e;
        e = I(b);
        e = String(e);
        if (e.quote)
            e = e.quote();
        else {
            for (var f = ['"'], g = 0; g < e.length; g++) {
                var h = e.charAt(g), k = h.charCodeAt(0), l = f, m = g + 1, n;
                if (!(n = Ba[h])) {
                    if (!(31 < k && 127 > k))
                        if (h in Ca)
                            h = Ca[h];
                        else if (h in Ba)
                            h = Ca[h] = Ba[h];
                        else {
                            k = h;
                            n = h.charCodeAt(0);
                            if (31 < n && 127 > n)
                                k = h;
                            else {
                                if (256 > n) {
                                    if (k = "\\x", 16 > n || 256 < n)
                                        k += "0"
                                } else 
                                    k = "\\u", 4096 > n &&
                                    (k += "0");
                                    k += n.toString(16).toUpperCase()
                                }
                                h = Ca[h] = k
                        }
                    n = h
                }
                l[m] = n
            }
            f.push('"');
            e = f.join("")
        }
        d = d + ("window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + e + ");}") + "\x3c/script>"
    }
    c = d += '<script src = "' + c + '">\x3c/script>';
    hd(a.csi, "_ga_start", a.a.b.length);
    ef(b, c);
    a.aa[I(b)] = setTimeout(v(a.ca, a, !0), O[13])
}, ef = function(a, b) {
    var c = document, d = K(a) + "__hidden__", e = c.getElementById(d);
    if (!e) {
        e = J(a);
        e = c.getElementById(e);
        if (null == e)
            return;
        e = Me(e, d, !0, 0, 0, c)
    }
    Re(e, b, !1)
}, gf = function(a) {
    return K(a) +
    "__container__"
}, hf = function(a, b) {
    var c = a.getElementById(gf(b));
    return Boolean(c) && Va(Rb(c), function(a) {
        return a.id != K(b)
    })
};
V.prototype.ja = function(a, b, c, d, e, f) {
    ba(b) ? this.p = b : this.h = Math.floor(Math.floor(4503599627370496 * Math.random()));
    this.D=!1;
    this.H = null;
    this.G = this.F = NaN;
    this.I=!1;
    c && (this.F = c);
    d && (this.G = d);
    e && (this.D=!0);
    f && (this.I = f);
    for (b = 0; b < a.length; b++)
        this.c[I(a[b])] = null;
    od(this.a, a);
    this.b && (this.H = a, b = this.t, 0 <= Ra(b, a) || b.push(a));
    this.J = a.length;
    for (b = 0; b < a.length; ++b)
        if (c = a[b], d = document, !(c in this.a.d)
            ) {
        e = J(c);
        var g = d.getElementById(e);
        if (g) {
            f = gf(c);
            for (var h = K(c) + "__hidden__", g = g.childNodes, k=!1,
            l = 0; l < g.length; ++l)
                if (1 == g[l].nodeType) {
                    var m = g[l];
                    if (m.id != f && m.id != h) {
                        k=!0;
                        break
                    }
                }
            if (k = k || hf(d, c))
                if (jf(c), c = Jb(e)
                    )c.innerHTML = ""
        }
    }
    kf(this, a, 0, !0)
};
V.prototype.T = function(a) {
    for (var b = 0; b < a.length; ++b) {
        jf(a[b]);
        var c = J(a[b]);
        if (c = Jb(c))
            c.innerHTML = "";
        lf(this, a[b])
    }
    return !0
};
var mf = function(a, b) {
    var c = document, d = Yb(b);
    if (0 != d.length) {
        var e = d[0];
        if (1 < d.length) {
            t:
            if (d = J(b), (d = (c || document).getElementById(d)
                ) && d.style.height && d.style.width)for (var d = [d.style.width, d.style.height], f = 0; f < d.length; ++f)
                if (2 < d[f].length && "px" == d[f].substring(d[f].length-2))
                    d[f] = parseInt(d[f], 10);
                else {
                    d = null;
                    break t
                } else 
                    d = null;
            e = d || e
        }
        d = K(b);
        f = c.getElementById(d);
        if (!f) {
            f = J(b);
            f = c.getElementById(f);
            if (null == f)
                return;
            var g = c.createElement("div");
            g.id = gf(b);
            g.name = g.id;
            g.style.border = "0pt none";
            a.g && (g.style.margin = "auto", g.style.textAlign = "center");
            f.appendChild(g);
            f = Me(g, d, !1, e[0], e[1], c)
        }
        a.a.f[I(b)] = f
    }
}, nf = function(a, b) {
    if (b.length > a.length)
        return !1;
    var c = {};
    Sa(a, function(a) {
        c[a.b]=!0
    });
    return !Va(b, function(a) {
        a = gb(a);
        return 1 == a.length&&!(a[0]in c)
    })
}, of = function(a, b) {
    if (!ca(b))
        return null;
    for (var c = 0; c < a.t.length; ++c) {
        var d = a.t[c];
        if (nf(d, b))
            return C.splice.call(a.t, c, 1), d
    }
    return null
}, qf = function(a, b, c) {
    var d = of(a, b) || a.H;
    b = a.k(b, c, d);
    Sa(b, function(a) {
        pf(this, a)
    }, a)
};
V.prototype.ca = function(a) {
    a && (this.L=!0);
    0 < this.f.length && (this.f.shift(), this.Q.shift(), 0 < this.f.length && ff(this, this.f[0], this.Q[0]))
};
var rf = function(a, b) {
    nd(a.a, b);
    mf(a, b);
    null != a.c[I(b)] && pf(a, b)
}, kf = function(a, b, c, d) {
    if (a.b) {
        if (!a.j && (!a.l || d)) {
            for (var e = 0; e < b.length; e++)
                nd(a.a, b[e]), mf(a, b[e]);
            d = a.q(b, d);
            d = Tc(d);
            Ue(a, b);
            d = '<script src = "' + d + '">\x3c/script>';
            hd(a.csi, "_ga_start", a.a.b.length);
            ef(b[c], d)
        }
    } else if (!a.j && (!a.l || d)) {
        for (c = 0; c < b.length; c++)
            mf(a, b[c]);
            $a(a.f, b);
            c = b.length;
            for (var e = [], f = 0; f < c; f++)
                e[f] = d;
                $a(a.Q, e);
                a.f.length == b.length && ff(a, b[0], d)
    }
};
V.prototype.fa = function(a) {
    if (!this.b) {
        var b = document.getElementById(J(a));
        b && (this.a.k[I(a)] = b)
    }
};
V.prototype.ga = function() {};
V.prototype.da = function() {};
V.prototype.U = function(a) {
    lf(this, a);
    var b = null, c =- 1;
    if (this.b) {
        rf(this, a);
        if (1 == this.a.b.length)
            b = ld(this.a);
        else 
            return;
        c = a.c ? 0 : Wa(b, function(b) {
            return I(a) == I(b)
        })
    } else 
        b = [a], c = 0;
    kf(this, b, c, !1)
};
var lf = function(a, b) {
    var c = b.a.getDivStartsCollapsed();
    null == c && (c = "true" === P(a.d, "google_divs_start_collapsed"));
    c && Ke(J(b), !1)
}, pf = function(a, b) {
    try {
        t:
        {
            var c = window, d = document, e = a.c[I(b)];
            Xb(b);
            if (null == e || e._empty_)
                a.o(c, d, b, a.I), Q(b, bc(b));
            else if (a.B)
                Q(b, bc(b));
            else {
                var f = e._html_;
                if (!s(f)) {
                    jf(b);
                    break t
                }
                Ke(J(b), !0);
                ba(window.Goog_Osd_UnloadAdBlock) && Goog_Osd_UnloadAdBlock(document.getElementById(K(b)), !1);
                if (b.d) {
                    var g = document.getElementById(gf(b));
                    g.parentNode.removeChild(g);
                    b.d=!1;
                    mf(a, b)
                }
                if (e._use_safe_frame_) {
                    var h =
                    e._width_, k = e._height_, l = d.getElementById(gf(b));
                    if (null != l) {
                        for (var m; m = l.firstChild;)
                            l.removeChild(m);
                            c = f;
                            c = Ne(c);
                            new Ge(l, K(b), c, new E(h, k));
                            b.d=!0;
                            df(a, d.getElementById(K(b)), I(b))
                        }
                } else {
                    var n = e._width_, t = d.getElementById(K(b));
                    null != t && (t.height = String(e._height_), t.width = String(n), Re(t, f, !0), df(a, t, I(b)))
                }
                Q(b, ac(b, e))
            }
            var r = K(b) + "__hidden__";
            if (0 == Wc())
                Je || (Je = null), Je.a("iFrame not removed as non-IE browser, id: " + r);
            else {
                var w = d.getElementById(r);
                w ? "hidden" != w.style.visibility || "none" != w.style.display ?
                Pe("iFrame found to remove but it isn't hidden, id: " + r) : (w.parentNode.removeChild(w), Je || (Je = null), Je.a("Hidden iFrame removed, id: " + r)) : Pe("iFrame not found to remove, id: " + r)
            }
        }
    } catch (L) {}
}, jf = function(a) {
    var b = document.getElementById(gf(a));
    b && (ba(window.Goog_Osd_UnloadAdBlock) && Goog_Osd_UnloadAdBlock(document.getElementById(K(a)), !1), b.parentNode.removeChild(b));
    a.d=!1
};
V.prototype.n = function() {
    U.prototype.n.call(this);
    cf(this)
};
V.prototype.ka = function() {
    return isNaN(this.J) || this.b ? 0 == md(this.a).length : md(this.a).length == qd(this.a) - this.J
};
var W = function(a, b, c, d, e) {
    U.call(this, a, b, c, d, e);
    this.f=!1
};
y(W, U);
W.prototype.w = function() {
    return this.b ? "gut_sync_sra" : "gut_sync"
};
W.prototype.Y = function() {
    return this.f ? (this.f=!1, "googletag.impl.pubads.setPassbackAdContents") : "googletag.impl.pubads.setAdContentsBySlotForSync"
};
W.prototype.M = function(a) {
    return a ? "ss" : "s"
};
var tf = function(a, b, c) {
    b = a.k(b);
    if (a.b)
        c = a.a.b, 1 == c.length && sf(a, c[0], void 0);
    else 
        for (var d = 0; d < b.length; ++d)
            sf(a, b[d], c)
};
W.prototype.fa = function(a) {
    if (!this.b) {
        var b;
        b = null;
        var c = ka.getElementsByTagName("script");
        c && c.length && (b = c[c.length-1]);
        (b = b && b.parentElement) && (this.a.k[I(a)] = b)
    }
};
W.prototype.ga = function(a) {
    var b = "google_temp_div_" + I(a);
    document.write("<div id=" + b + "></div>");
    (b = Jb(b)) && (this.a.f[I(a)] = b)
};
W.prototype.da = function(a) {
    var b = this.a;
    a = I(a);
    var c = b.f[a];
    c && (c && c.parentNode && c.parentNode.removeChild(c), delete b.f[a])
};
W.prototype.U = function(a) {
    nd(this.a, a);
    var b = this.a.b.length;
    hd(this.csi, "_ga_start", b);
    this.b ? 1 == b ? this.j || (a = this.q(ld(this.a), !1), a = Tc(a), Le(a), Ue(this, ld(this.a))) : sf(this, a, void 0) : this.j || (b = this.q([a], !1), b = Tc(b), Wb(a, b), Le(b))
};
var sf = function(a, b, c) {
    var d = window, e = document, f = a.c[I(b)];
    Xb(b);
    if (null == f || f._empty_)
        a.o(d, e, b, !1), Q(b, bc(b));
    else if (a.B)
        Q(b, bc(b));
    else if (f._use_safe_frame_) {
        var g = f._html_;
        if (g) {
            c = f._width_;
            d = f._height_;
            uf(b, e);
            var h = K(b) + "__container__", k = '<div id="' + wa(h) + '"></div>';
            e.write(k);
            h = e.getElementById(h);
            null != h && (a.g && (h.style.margin = "auto"), g = Ne(g), new Ge(h, K(b), g, new E(c, d)), df(a, e.getElementById(K(b)), I(b)));
            Q(b, ac(b, f))
        } else 
            Q(b, bc(b))
    } else if (f._snippet_&&!f._is_afc_)
        uf(b, e), f = a.c[I(b)], null !=
    f && (c = vf(a, b, e, f), Q(b, ac(b, f)), (f = e.getElementById(c)) && df(a, f, I(b)));
    else if (d = nb(), null != d&&-1 != d.indexOf("MSIE ")&&-1 == d.indexOf("IEMobile")
        ) {
        e = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + I(b) + "'," + c + ");";
        c = "about:blank";
        if (d = P(a.d, "google_domain_reset_url"))
            if (g = (g = Bc(d)) && decodeURIComponent(g), null === g || 0 <= g.indexOf(document.domain)
                )c = d;
        k = c;
        c = f._width_;
        f = f._height_;
        d = a.g;
        uf(b, document);
        g = K(b);
        h = [];
        k = Tc(k);
        h.push('<iframe id="', g, '" name="', g, '" width="', c, '" height="', f, '" vspace="0" hspace="0" allowtransparency="true" ',
        "scrolling=", a.t ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=', '"border:0px;left:0;position:absolute;top:0;"', ' src="', k, '"');
        null != e && h.push(' onload="', e, '"');
        h.push("></iframe>");
        e = [];
        k = J(b) + "_ad_container";
        e.push("<div id=", k);
        d && e.push(' style="text-align:center" ');
        e.push(">");
        e.push('<ins style="position:relative;width:' + c + "px;height:" + f + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + c + "px;height:" + f + 'px;border:none;display:block;">' +
        h.join("") + "</ins>") + "</ins>");
        e.push("</div>");
        document.write(e.join(""));
        (f = document.getElementById(g)) && df(a, f, I(b))
    } else 
        uf(b, document), f = vf(a, b, document), e.write('<script>googletag.impl.pubads.createDomIframe("' + f + '" ,"' + I(b) + '",' + a.g + "," + c + ");\x3c/script>")
}, vf = function(a, b, c, d) {
    b = J(b) + "_ad_container";
    var e = "<div id=" + b;
    a.g && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
    d && (e += d._html_);
    c.write(e + "\n</div>\n");
    return b
}, uf = function(a, b) {
    var c = b.getElementById(J(a));
    c && c.parentNode &&
    "" === c.innerHTML && c.parentNode.removeChild(c)
};
W.prototype.n = function() {
    U.prototype.n.call(this);
    cf(this)
};
var wf = function() {
    this.c = this.d = this.a = this.b = null
}, X = function(a) {
    null == a.b && (a.b = new jd(cc));
    return a.b
}, Z = function(a) {
    if (null != a.a)
        return a.a;
    switch (P(Y(a), "google_ad_impl")) {
    case "gut_sync_sra":
        a.a = new W(!0, X(a), Y(a), Ad(void 0), xf(a));
        break;
    case "gut_friendly_iframe":
        a.a = new V(!1, X(a), Y(a), Ad(void 0), xf(a));
        break;
    case "gut_friendly_iframe_sra":
        a.a = new V(!0, X(a), Y(a), Ad(void 0), xf(a));
        break;
    default:
        a.a = new W(!1, X(a), Y(a), Ad(void 0), xf(a))
    }
    var b = a.a;
    b.j = null != P(b.d, "google_nofetch") || Boolean(window.google_noFetch) ||
    b.j;
    b.l = null != P(b.d, "google_disable_initial_load") || Boolean(window.google_DisableInitialLoad) || b.l;
    b.B = null != P(b.d, "google_norender") || b.B;
    var c = v(b.n, b), d = window;
    d.attachEvent ? d.attachEvent("onload", c) : d.addEventListener && d.addEventListener("load", c, !1);
    b.P = Qc().setupOse(b.h);
    return a.a
}, Y = function(a) {
    null == a.d && (a.d = new id);
    return a.d
}, xf = function(a) {
    if (null == a.c) {
        var b = O[12];
        a.c = z && Math.random() < b && z.GA_jstiming && z.GA_jstiming.load && "http:" == z.location.protocol ? new ed(z) : new gd
    }
    return a.c
}, Af =
null, $ = function() {
    Af || (Af = new wf);
    return Af
}, Bf = null, Cf = function() {
    Bf || (Bf = new wf);
    return Bf
};
x("googletag.impl.pubads.addSlot", function(a) {
    if (!a)
        return null;
    var b = a.getName();
    return b && b.length ? kd(X($()), a) : null
});
x("googletag.impl.pubads.fillSlot", function(a) {
    var b = $(), c = Z(b);
    (a = rd(X(b), a)) && (null == c.c[I(a)] || c.b) && (c.fa(a), c.ga(a), c.U(a), c.da(a))
});
x("googletag.impl.pubads.setCookieOptions", function(a) {
    $();
    var b = Ad(a);
    b.a = a;
    wd(b)
});
x("googletag.impl.pubads.setTagForChildDirectedTreatment", function(a) {
    X($()).n = a
});
x("googletag.impl.pubads.passback", function(a) {
    if (a) {
        var b = a.getName();
        b && b.length && (b = Cf(), a = kd(X(b), a, !0), b = Z(b), b.f=!0, b.U(a))
    }
});
x("googletag.impl.pubads.disableFetch", function() {
    window.google_noFetch=!0
});
x("googletag.impl.pubads.disableInitialLoad", function() {
    window.google_DisableInitialLoad=!0
});
x("googletag.impl.pubads.addAttribute", function(a, b) {
    var c = X($()), d = b;
    if (!na(a)) {
        na(d) && (d = "");
        var e = c.c[a];
        c.c[a] = e ? e + "," + d : d
    }
});
x("googletag.impl.pubads.clearAttribute", function(a) {
    var b = X($());
    na(a) || b.c[a] && delete b.c[a]
});
x("googletag.impl.pubads.addPageCategoryExclusion", function(a) {
    var b = X($());
    na(a) || (b = b.i, 0 <= Ra(b, a) || b.push(a))
});
x("googletag.impl.pubads.clearPageCategoryExclusions", function() {
    X($()).i = []
});
x("googletag.impl.pubads.addAdSensePageAttribute", function(a, b) {
    var c = X($());
    ad(c.g, a, b)
});
x("googletag.impl.pubads.addAdSenseSlotAttribute", function(a, b, c) {
    var d = X($());
    a && (a = rd(d, a)) && (a = I(a), null == d.h[a] && (d.h[a] = new $c(d.p)), ad(d.h[a], b, c))
});
x("googletag.impl.pubads.enableSingleRequest", function() {
    var a = Y($());
    null == P(a, "google_ad_impl") && (a.a.google_ad_impl = "gut_sync_sra")
});
x("googletag.impl.pubads.collapseEmptyDivs", function(a) {
    var b = Y($());
    b.a.google_collapse_empty_div = "true";
    a && (b.a.google_divs_start_collapsed = "true")
});
x("googletag.impl.pubads.enableAsyncRendering", function() {
    var a = Y($());
    null == P(a, "google_ad_impl") && (a.a.google_ad_impl = "gut_friendly_iframe")
});
x("googletag.impl.pubads.enableAsyncSingleRequest", function() {
    var a = Y($());
    null == P(a, "google_ad_impl") && (a.a.google_ad_impl = "gut_friendly_iframe_sra")
});
x("googletag.impl.pubads.setVideoContentInformation", function(a, b) {
    var c = Z($());
    c.ha=!0;
    c.W = a;
    c.V = b;
    c.p = Math.floor(4503599627370496 * Math.random())
});
x("googletag.impl.pubads.getVideoContentInformation", function() {
    var a = Z($()), b = {};
    b.vid = a.W;
    b.cmsid = a.V;
    return b
});
x("googletag.impl.pubads.getVideoStreamCorrelator", function() {
    return Z($()).p
});
x("googletag.impl.pubads.refresh", function(a, b, c, d, e, f) {
    var g = $(), h = Z(g), g = X(g), k = null, k = a ? Df(a): ld(g);
    0 == k.length || h.ja(k, b, c, d, e, f)
});
x("googletag.impl.pubads.getCorrelator", function() {
    return Z($()).h + ""
});
x("googletag.impl.pubads.setMobilePlatform", function() {
    Y($()).a.target_platform = "MOBILE"
});
x("googletag.impl.pubads.setApiExperiment", function(a) {
    Fd(a)
});
x("googletag.impl.pubads.isAdRequestFinished", function() {
    return Z($()).ka()
});
x("googletag.impl.pubads.isSlotAPersistentRoadblock", function(a) {
    if (!a)
        return !1;
    var b = X($());
    return !!(new Ub(a, !1)in b.d)
});
x("googletag.impl.pubads.clearNoRefreshState", function() {
    X($()).d = {}
});
x("googletag.impl.pubads.clearSlotContents", function(a) {
    var b = $(), c = Z(b), b = X(b), d = null, d = a ? Df(a): ld(b);
    return c.T(d)
});
x("googletag.impl.pubads.setLocation", function(a) {
    X($()).m = a
});
x("googletag.impl.pubads.setPublisherProvidedId", function(a) {
    X($()).o = a
});
x("googletag.impl.pubads.getVersion", function() {
    return "34"
});
x("googletag.impl.pubads.setCenterAds", function(a) {
    X($()).l = a
});
var Df = function(a) {
    for (var b = [], c = X($()), d = 0; d < a.length; ++d) {
        var e = rd(c, a[d]);
        e && b.push(e)
    }
    return b
};
x("googletag.impl.pubads.createDomIframe", function(a, b, c, d) {
    var e;
    e = d ? Cf() : $();
    d = Z(e);
    if (e = X(e).a[b]) {
        var f = document, g = d.c[I(e)], h = g._width_, k = g._height_, l = g._html_, m = f.createElement("iframe"), n = K(e);
        m.id = n;
        m.name = n;
        m.width = h;
        m.height = k;
        m.vspace = 0;
        m.hspace = 0;
        m.allowTransparency = "true";
        m.scrolling = "no";
        m.marginWidth = 0;
        m.marginHeight = 0;
        m.frameBorder = 0;
        m.style.border = 0;
        m.style.position = "absolute";
        m.style.top = 0;
        m.style.left = 0;
        n = Ve(f, "ins", m, h, k, "block");
        k = Ve(f, "ins", n, h, k, "inline-table");
        k.style.verticalAlign =
        "bottom";
        a = f.getElementById(a);
        c ? (c = Ve(f, "div", k, h, null, "block", "auto"), a.appendChild(c)) : a.appendChild(k);
        m.contentWindow.document.write(l);
        m.contentWindow.document.write("<script>document.close();\x3c/script>");
        Q(e, ac(e, g));
        (c = document.getElementById(K(e))) && df(d, c, b)
    }
});
x("googletag.impl.pubads.setAdContentsBySlot", function(a) {
    Z($()).k(a)
});
x("googletag.impl.pubads.setAdContentsBySlotForSync", function(a) {
    tf(Z($()), a)
});
x("googletag.impl.pubads.setPassbackAdContents", function(a) {
    tf(Z(Cf()), a, !0)
});
x("googletag.impl.pubads.setAdContentsBySlotForAsync", function(a, b) {
    var c = Z($());
    if (c.b)
        qf(c, a, b);
    else {
        for (var d = c.k(a, b), e = c.f[0], f=!1, g = 0; g < d.length; ++g)
            pf(c, d[g]), d[g] === e && (f=!0);
        f && (clearTimeout(c.aa[I(e)]), c.ca())
    }
});
x("googletag.impl.pubads.syncAdSlotLoaded", function(a, b, c) {
    c = Z(c ? Cf() : $());
    if (b && (b = c.a.a[b])&&!b.f) {
        b.f=!0;
        c = c.c[I(b)];
        var d = a.parentNode, e = c && c._html_;
        e ? (!c._expandable_ || c._is_afc_ && c._is_3pas_ ? Re(a, e, !0) : d.innerHTML = e, Q(b, ac(b, c))) : (d.removeChild(a), Q(b, bc(b)))
    }
});
x("googletag.impl.pubads.setCookieInfo", function(a) {
    var b;
    $();
    b = Ad(void 0);
    yd(b, a)
});
var Ef = $();
Y(Ef);
xf(Ef).a("jl");
window.google_noFetch=!1;
window.google_DisableInitialLoad=!1;
try {
    var Ff = q.googletag.pubads;
    if (u(Ff))
        Ff().onGoogleAdsJsLoad()
} catch (Gf) {};
})();

