(function() {
    var e, h = this, aa = function(a) {
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
}, k = function(a) {
    return "array" == aa(a)
}, ba = function(a) {
    var b = aa(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, l = function(a) {
    return "string" == typeof a
}, ca = function(a) {
    return "boolean" == typeof a
}, m = function(a) {
    return "number" == typeof a
}, da = function(a) {
    return "function" == aa(a)
}, ea = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, fa = function(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments,
        2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}, ga = function(a, b, c) {
    ga = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
    return ga.apply(null, arguments)
}, ha = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.qb = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.pb = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments,
        2))
    }
};
var p = function(a) {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0 : a
}, ia = function(a) {
    a = parseInt(a, 10);
    return isNaN(a) ? 1500 : a
}, ja = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, ka = function(a, b) {
    if (!a)
        return b;
    var c = a.match(ja);
    return c ? c[0] : b
};
var la = p("0.02"), ma = p("1"), na = p("0.0");
var oa = p("0.005"), pa = p("0.01"), qa = p("0.001"), ra = ia("1500"), sa = p("0.01"), ta = p("1.0"), ua = p("0.1"), va = p("0.0"), wa = ia("1500"), xa = ia("1500");
var ya = /^true$/.test("false")?!0 : !1;
var za = function(a) {
    return /^[\s\xa0]*$/.test(a)
}, Aa = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
var q = function() {
    return h.googletag || (h.googletag = {})
}, r = function(a, b, c) {
    var d = q();
    a in d&&!c || (d[a] = b)
}, Ba = function(a, b) {
    a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
};
var s = {};
s[1] = ka("", "pagead2.googlesyndication.com");
s[2] = ka("", "pubads.g.doubleclick.net");
s[3] = ka("", "securepubads.g.doubleclick.net");
s[4] = ka("", "partner.googleadservices.com");
s[5] = "http://pagead2.googlesyndication.com/pagead/show_ads.js";
s[6] = ya;
s[7] = la;
s[8] = ma;
s[10] = pa;
s[11] = qa;
s[12] = oa;
s[13] = ra;
s[16] = sa;
s[17] = ta;
s[18] = ua;
s[19] = va;
s[20] = na;
s[21] = wa;
s[22] = xa;
r("_vars_", s);
var t = function(a, b) {
    this.d = a;
    this.a = b || []
};
t.prototype.c = function() {
    return this.d
};
t.prototype.b = function() {
    return this.a
};
t.prototype.getMessageId = t.prototype.c;
t.prototype.getMessageArgs = t.prototype.b;
var u = function(a, b, c, d, g) {
    this.a = new Date;
    this.Z = d || null;
    this.Y = c || null;
    this.F = a;
    this.c = b;
    this.b = g || null
};
e = u.prototype;
e.Ya = function() {
    return this.Z
};
e.Va = function() {
    return this.Y
};
e.Ra = function() {
    return this.F
};
e.cb = function() {
    return this.a
};
e.Sa = function() {
    return this.c
};
e.Ua = function() {
    return this.b
};
var Ca = ["Debug", "Info", "Warning", "Error", "Fatal"];
u.prototype.toString = function() {
    var a = this.a.toTimeString() + ": " + Ca[this.F] + ": " + this.c;
    this.b && (a += " Duration: " + (this.a.getTime() - this.b.a.getTime()) + "ms.");
    return a
};
u.prototype.getTimestamp = u.prototype.cb;
u.prototype.getService = u.prototype.Va;
u.prototype.getSlot = u.prototype.Ya;
u.prototype.getLevel = u.prototype.Ra;
u.prototype.getMessage = u.prototype.Sa;
u.prototype.getReference = u.prototype.Ua;
var v = function() {
    this.a = []
};
v.prototype.b = function() {
    return this.a
};
v.prototype.d = function(a) {
    return Da(this, function(b) {
        return b.Y === a
    })
};
v.prototype.f = function(a) {
    return Da(this, function(b) {
        return b.Z === a
    })
};
v.prototype.c = function(a) {
    return Da(this, function(b) {
        return b.F >= a
    })
};
var Da = function(a, b) {
    for (var c = [], d = 0; d < a.a.length; ++d)
        b(a.a[d]) && c.push(a.a[d]);
    return c
};
v.prototype.log = function(a, b, c, d, g) {
    a = new u(a, b, c, d, g);
    this.a.push(a);
    return a
};
var w = function(a, b, c, d, g) {
    return a.log(1, b, c, d, g)
}, x = function(a, b, c, d) {
    a.log(2, b, c, d, void 0)
}, y = function(a, b, c, d) {
    a.log(3, b, c, d, void 0)
}, z = function() {
    var a = q();
    return a.debug_log || (a.debug_log = new v)
};
r("getEventLog", z);
v.prototype.getAllEvents = v.prototype.b;
v.prototype.getEventsByService = v.prototype.d;
v.prototype.getEventsBySlot = v.prototype.f;
v.prototype.getEventsByLevel = v.prototype.c;
var A = function(a) {
    return function() {
        return new t(a, [])
    }
}, B = function(a) {
    return function(b) {
        return new t(a, [b])
    }
}, D = function(a) {
    return function(b, c) {
        return new t(a, [b, c])
    }
}, E = function(a) {
    return function(b, c, d) {
        return new t(a, [b, c, d])
    }
}, Ea = A(1), Fa = B(2), Ga = B(3), Ha = B(4), Ia = B(5), Ja = B(6), Ka = A(8), La = E(9), Ma = E(10), Na = E(11), Oa = D(12), Pa = B(13), Qa = B(14), Ra = A(15), Sa = A(16), Ta = E(17), Ua = E(18), Va = A(19), Wa = B(20), Xa = B(21), Ya = D(22), Za = D(23), $a = B(26), ab = B(27), bb = B(28), cb = E(29), db = B(30), eb = D(31), fb = B(32), gb = B(33), hb = A(34),
ib = B(35), jb = E(36), kb = E(37), lb = A(38), mb = B(39), nb = D(40), ob = A(42), pb = D(43), qb = A(44), rb = A(45), sb = B(46), tb = B(47), ub = B(48), vb = A(49), wb = A(50), xb = B(51), yb = A(52), zb = D(53), Ab = D(54), Bb = B(55), Cb = B(56), Db = D(57), Eb = E(58), Fb = B(59), Gb = B(60), Hb = D(61), Ib = D(62), Jb = B(63), Kb = D(64), Lb = B(65), Mb = A(66), Nb = A(67), Ob = A(68), Pb = A(69), Qb = A(70), Rb = A(71), Sb = A(72), Tb = B(73), Ub = B(74), G = B(75), Vb = E(77), Wb = B(78), Xb = A(79), Yb = B(80), Zb = D(82), $b = D(83), ac = D(84), bc = B(85), cc = A(86), dc = A(87), ec = E(88), fc = E(89), gc = B(90), hc = A(91), ic = B(92), jc = B(93);
var kc = function() {
    this.b = this.a = 0
};
kc.prototype.push = function(a) {
    for (var b = z(), c = 0; c < arguments.length; ++c)
        try {
            da(arguments[c]) && (arguments[c](), this.a++)
    } catch (d) {
        this.b++, y(b, db(String(d.message)))
    }
    w(b, eb(String(this.a), String(this.b)));
    return this.a
};
kc.prototype.push = kc.prototype.push;
(function() {
    function a(a) {
        this.t = {};
        this.tick = function(a, b, c) {
            this.t[a] = [void 0 != c ? c: (new Date).getTime(), b];
            if (void 0 == c)
                try {
                    window.console.timeStamp("CSI/" + a)
            } catch (d) {}
        };
        this.tick("start", null, a)
    }
    var b;
    window.performance && (b = window.performance.timing);
    var c = b ? new a(b.responseStart): new a;
    window.GPT_jstiming = {
        Timer: a,
        load: c
    };
    if (b) {
        var d = b.navigationStart, g = b.responseStart;
        0 < d && g >= d && (window.GPT_jstiming.srt = g - d)
    }
    if (b) {
        var f = window.GPT_jstiming.load;
        0 < d && g >= d && (f.tick("_wtsrt", void 0, d), f.tick("wtsrt_",
        "_wtsrt", g), f.tick("tbsd_", "wtsrt_"))
    }
    try {
        b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT), f && 0 < d && (f.tick("_tbnd", void 0, window.chrome.csi().startE), f.tick("tbnd_", "_tbnd", d))), null == b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT, f && 0 < d && (f.tick("_tbnd", void 0, window.external.startE), f.tick("tbnd_", "_tbnd", d))), b && (window.GPT_jstiming.pt = b)
    } catch (n) {}
})();
if (window.GPT_jstiming) {
    window.GPT_jstiming.fa = {};
    window.GPT_jstiming.ia = 1;
    var lc = function(a, b, c) {
        var d = a.t[b], g = a.t.start;
        if (d && (g || c))
            return d = a.t[b][0], void 0 != c ? g = c : g = g[0], d - g
    }, mc = function(a, b, c) {
        var d = "";
        window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt, delete window.GPT_jstiming.srt);
        window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt, delete window.GPT_jstiming.pt);
        try {
            window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ?
            d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
        } catch (g) {}
        var f = window.chrome;
        if (f && (f = f.loadTimes)) {
            f().wasFetchedViaSpdy && (d += "&p=s");
            if (f().wasNpnNegotiated) {
                var d = d + "&npn=1", n = f().npnNegotiatedProtocol;
                n && (d += "&npnv=" + (encodeURIComponent || escape)(n))
            }
            f().wasAlternateProtocolAvailable && (d += "&apa=1")
        }
        var C = a.t, M = C.start, f = [], n = [], F;
        for (F in C)
            if ("start" != F && 0 != F.indexOf("_")) {
                var N = C[F][1];
                N ? C[N] && n.push(F + "." + lc(a, F, C[N][0])) : M && f.push(F +
                "." + lc(a, F))
            }
        delete C.start;
        if (b)
            for (var Q in b)
                d += "&" + Q + "=" + b[Q];
        (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, n.length ? "&it=" + n.join(","): "", d, "&rt=", f.join(",")].join("")
    }, nc = function(a, b, c) {
        a = mc(a, b, c);
        if (!a)
            return "";
        b = new Image;
        var d = window.GPT_jstiming.ia++;
        window.GPT_jstiming.fa[d] = b;
        b.onload = b.onerror = function() {
            window.GPT_jstiming && delete window.GPT_jstiming.fa[d]
        };
        b.src = a;
        b = null;
        return a
    };
    window.GPT_jstiming.report = function(a, b, c) {
        if ("prerender" == document.webkitVisibilityState) {
            var d=!1, g = function() {
                if (!d) {
                    b ? b.prerender = "1" : b = {
                        prerender: "1"
                    };
                    var f;
                    "prerender" == document.webkitVisibilityState ? f=!1 : (nc(a, b, c), f=!0);
                    f && (d=!0, document.removeEventListener("webkitvisibilitychange", g, !1))
                }
            };
            document.addEventListener("webkitvisibilitychange", g, !1);
            return ""
        }
        return nc(a, b, c)
    }
};
var H = Array.prototype, oc = H.indexOf ? function(a, b, c) {
    return H.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (l(a))
        return l(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}, pc = H.forEach ? function(a, b, c) {
    H.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, g = l(a) ? a.split("") : a, f = 0; f < d; f++)
        f in g && b.call(c, g[f], f, a)
}, qc = H.map ? function(a, b, c) {
    return H.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, g = Array(d), f = l(a) ? a.split("") :
    a, n = 0; n < d; n++)
        n in f && (g[n] = b.call(c, f[n], n, a));
    return g
}, rc = H.every ? function(a, b, c) {
    return H.every.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, g = l(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in g&&!b.call(c, g[f], f, a))
            return !1;
    return !0
}, sc = function(a, b) {
    var c;
    t: {
        c = a.length;
        for (var d = l(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in d && b.call(void 0, d[g], g, a)) {
                c = g;
                break t
            }
        c =- 1
    }
    return 0 > c ? null : l(a) ? a.charAt(c) : a[c]
}, tc = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}, vc =
function(a, b) {
    a.sort(b || uc)
}, xc = function(a) {
    for (var b = wc, c = 0; c < a.length; c++)
        a[c] = {
            index: c,
            value: a[c]
        };
    var d = b || uc;
    vc(a, function(a, b) {
        return d(a.value, b.value) || a.index - b.index
    });
    for (c = 0; c < a.length; c++)
        a[c] = a[c].value
}, uc = function(a, b) {
    return a > b ? 1 : a < b?-1 : 0
};
var I = function(a, b) {
    this.b = a;
    this.a = b
};
I.prototype.ceil = function() {
    this.b = Math.ceil(this.b);
    this.a = Math.ceil(this.a);
    return this
};
I.prototype.floor = function() {
    this.b = Math.floor(this.b);
    this.a = Math.floor(this.a);
    return this
};
I.prototype.round = function() {
    this.b = Math.round(this.b);
    this.a = Math.round(this.a);
    return this
};
var J, yc, zc, Ac, Bc = function() {
    return h.navigator ? h.navigator.userAgent : null
};
Ac = zc = yc = J=!1;
var Cc;
if (Cc = Bc()) {
    var Dc = h.navigator;
    J = 0 == Cc.lastIndexOf("Opera", 0);
    yc=!J && (-1 != Cc.indexOf("MSIE")||-1 != Cc.indexOf("Trident"));
    zc=!J&&-1 != Cc.indexOf("WebKit");
    Ac=!J&&!zc&&!yc && "Gecko" == Dc.product
}
var Ec = J, K = yc, Fc = Ac, Gc = zc, Hc = function() {
    var a = h.document;
    return a ? a.documentMode : void 0
}, Ic;
t: {
    var Jc = "", Kc;
    if (Ec && h.opera)
        var Lc = h.opera.version, Jc = "function" == typeof Lc ? Lc(): Lc;
    else if (Fc ? Kc = /rv\:([^\);]+)(\)|;)/ : K ? Kc = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Gc && (Kc = /WebKit\/(\S+)/), Kc)
        var Mc = Kc.exec(Bc()), Jc = Mc ? Mc[1]: "";
    if (K) {
        var Nc = Hc();
        if (Nc > parseFloat(Jc)) {
            Ic = String(Nc);
            break t
        }
    }
    Ic = Jc
}
var Oc = Ic, Pc = {}, Qc = function(a) {
    if (!Pc[a]) {
        for (var b = 0, c = String(Oc).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(c.length, d.length), f = 0; 0 == b && f < g; f++) {
            var n = c[f] || "", C = d[f] || "", M = RegExp("(\\d*)(\\D*)", "g"), F = RegExp("(\\d*)(\\D*)", "g");
            do {
                var N = M.exec(n) || ["", "", ""], Q = F.exec(C) || ["", "", ""];
                if (0 == N[0].length && 0 == Q[0].length)
                    break;
                b = Aa(0 == N[1].length ? 0 : parseInt(N[1], 10), 0 == Q[1].length ? 0 : parseInt(Q[1], 10)) || Aa(0 == N[2].length, 0 ==
                Q[2].length) || Aa(N[2], Q[2])
            }
            while (0 == b)
            }
        Pc[a] = 0 <= b
    }
}, Rc = h.document, Sc = Rc && K ? Hc() || ("CSS1Compat" == Rc.compatMode ? parseInt(Oc, 10) : 5) : void 0;
if (Fc || K) {
    var Tc;
    if (Tc = K)
        Tc = K && 9 <= Sc;
    Tc || Fc && Qc("1.9.1")
}
K && Qc("9");
var Uc = function(a) {
    return m(a) && isFinite(a) && 0 == a%1 && 0 <= a
}, Vc = function(a) {
    return a.replace(/[^a-zA-Z0-9]/g, function(a) {
        return "&#" + a.charCodeAt() + ";"
    })
}, Wc = function() {
    var a = null, b = window, c = null;
    try {
        for (; null != b && b !== a;) {
            c = b.location.protocol;
            if ("https:" === c)
                break;
            else if ("http:" === c || "file:" === c)
                return "http:";
            a = b;
            b = b.parent
        }
    } catch (d) {}
    return "https:"
};
var Xc = function(a) {
    return k(a) && 2 == a.length && Uc(a[0]) && Uc(a[1])
}, Yc = function(a) {
    return k(a) && 1 < a.length && m(a[0]) && m(a[1])
};
var L = function(a, b) {
    this.d = a;
    this.c = b
};
L.prototype.b = function() {
    return this.d
};
L.prototype.a = function() {
    return this.c
};
var Zc = function(a) {
    var b = [];
    if (k(a))
        if (Yc(a))
            b.push(new L(a[0], a[1]));
        else 
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                Yc(d) && b.push(new L(d[0], d[1]))
            }
    return b
};
L.prototype.getWidth = L.prototype.b;
L.prototype.getHeight = L.prototype.a;
var O = function(a, b, c) {
    this.d = a;
    this.c = m(b) ? b : 0;
    this.b = this.d + "_" + this.c;
    this.a = c || "gpt_unit_" + this.b
};
e = O.prototype;
e.ga = function() {
    return this.b
};
e.sa = function() {
    return this.d
};
e.Qa = function() {
    return this.c
};
e.toString = O.prototype.ga;
e.Pa = function() {
    return this.a
};
O.prototype.getId = O.prototype.ga;
O.prototype.getName = O.prototype.sa;
O.prototype.getDomId = O.prototype.Pa;
O.prototype.getInstance = O.prototype.Qa;
var $c = {
    rb: "slotRenderEnded"
}, ad = function(a) {
    this.slot = a;
    this.isEmpty=!1;
    this.lineItemId = this.creativeId = this.size = null
};
var bd = function(a, b) {
    this.a = a;
    this.b = b
};
var cd = function(a) {
    this.a = a
}, dd = function(a, b) {
    var c = sc(a.a, function(a) {
        a = a.a;
        return a.b <= b.b && a.a <= b.a
    });
    return null == c ? null : c.b
}, ed = function(a) {
    if (!k(a) || 2 != a.length)
        throw Error("Each mapping entry has to be an array of size 2");
    var b;
    b = a[0];
    if (!Xc(b))
        throw Error("Size has to be an array of two non-negative integers");
    b = new I(b[0], b[1]);
    if (k(a[1]) && 0 == a[1].length)
        a = [];
    else if (a = Zc(a[1]), 0 == a.length)
        throw Error("At least one slot size must be present");
    return new bd(b, a)
};
var P = function(a, b, c, d) {
    this.b = a;
    this.w = Zc(c);
    this.r = null;
    this.g = new O(a, b, d);
    this.c = [];
    this.d = {};
    this.i = null;
    this.a = z();
    w(this.a, Fa(this.g.toString()), null, this);
    this.f = this.q = null;
    this.s = this.p = "";
    this.l=!0;
    this.k = {};
    this.j = [];
    this.u=!1;
    this.v = this.o = null;
    this.n = 0;
    this.m =- 1
};
e = P.prototype;
e.wa = function(a, b) {
    var c = this.b;
    (a = a || "") && l(a) && b ? (this.d[a] = b, this.q || this.f ? x(this.a, Ma(a, String(b), c), null, this) : w(this.a, La(a, String(b), c), null, this)) : x(this.a, Na(String(a), String(b), c), null, this);
    return this
};
e.I = function(a) {
    return a in this.d ? this.d[a] : null
};
e.$ = function() {
    var a = [], b;
    for (b in this.d)
        da(this.d[b]) || a.push(b);
    return a
};
e.G = function(a) {
    for (var b = 0; b < this.c.length; ++b)
        if (a == this.c[b])
            return x(this.a, Oa(a.h(), this.g.toString()), a, this), this;
    this.c.push(a);
    a.H(this);
    return this
};
e.va = function() {
    return this.b
};
e.Za = function() {
    return this.g
};
e.Wa = function() {
    return this.c
};
e.Xa = function(a, b) {
    return m(a) && m(b) && this.r ? dd(this.r, new I(a, b)) : this.w
};
e.Ba = function(a) {
    try {
        if (!k(a))
            throw Error("Size mapping has to be an array");
        var b = qc(a, ed);
        this.r = new cd(b)
    } catch (c) {
        x(this.a, Pa(c.message), null, this)
    }
    return this
};
e.A = function() {
    return !!document.getElementById(this.g.a)
};
e.K = function(a) {
    this.s = a;
    return this
};
e.Ka = function() {
    return this.s
};
e.xa = function(a) {
    if (l(a)&&!za(null == a ? "" : String(a))) {
        var b = this.j;
        0 <= oc(b, a) || b.push(a);
        w(this.a, Qa(a), null, this)
    } else 
        x(this.a, Ra(), null, this);
    return this
};
e.ta = function() {
    w(this.a, Sa(), null, this);
    this.j = [];
    return this
};
e.Ja = function() {
    return tc(this.j)
};
e.da = function(a, b) {
    var c = [];
    k(b) ? c = b : b && c.push(b.toString());
    a && l(a) ? (w(this.a, Ta(a, c.join(), this.b), null, this), this.k[a] = c) : x(this.a, Ua(String(a), c.join(), this.b), null, this);
    return this
};
e.ua = function() {
    w(this.a, Va(), null, this);
    this.k = {};
    return this
};
e.bb = function() {
    var a = this.k, b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
};
e.Ta = function() {
    return this.u
};
e.Ia = function() {
    return this.n
};
e.setTagForChildDirectedTreatment = function(a) {
    if (0 === a || 1 === a)
        this.m = a
};
e.fb = function() {
    return this.m
};
e.lb = function(a, b) {
    this.v = (this.o = a) && Boolean(b);
    b&&!a && x(this.a, Wa(this.g.toString()), null, this);
    return this
};
e.La = function() {
    return this.o
};
e.Oa = function() {
    return this.v
};
var fd = function(a) {
    if (!a.A())
        return y(a.a, Xa(a.g.toString()), null, a), !1;
    var b = h.document, c = a.g.a, b = b && b.getElementById(c);
    if (!b)
        return y(a.a, Ya(c, a.g.toString()), null, a), !1;
    c = a.i;
    return l(c) && 0 < c.length ? (a.ca(), b.innerHTML = c, a.ba(new ad(a)), !0) : !1
};
e = P.prototype;
e.Ga = function(a) {
    this.q = w(this.a, Ga(this.b), null, this);
    this.p = a
};
e.Ma = function() {
    return this.p
};
e.Fa = function() {
    w(this.a, Ha(this.b), null, this, this.q)
};
e.ca = function() {
    this.f = w(this.a, Ia(this.b), null, this)
};
e.ba = function(a) {
    w(this.a, Ja(this.b), null, this, this.f);
    pc(this.c, function(b) {
        gd(b, a)
    })
};
P.prototype.set = P.prototype.wa;
P.prototype.get = P.prototype.I;
P.prototype.getName = P.prototype.va;
P.prototype.getSlotId = P.prototype.Za;
P.prototype.getSizes = P.prototype.Xa;
P.prototype.defineSizeMapping = P.prototype.Ba;
P.prototype.addService = P.prototype.G;
P.prototype.getOutOfPage = P.prototype.Ta;
P.prototype.getServices = P.prototype.Wa;
P.prototype.getAttributeKeys = P.prototype.$;
P.prototype.fetchStarted = P.prototype.Ga;
P.prototype.fetchEnded = P.prototype.Fa;
P.prototype.renderStarted = P.prototype.ca;
P.prototype.renderEnded = P.prototype.ba;
P.prototype.hasWrapperDiv = P.prototype.A;
P.prototype.getContentUrl = P.prototype.Ma;
P.prototype.setClickUrl = P.prototype.K;
P.prototype.getClickUrl = P.prototype.Ka;
P.prototype.clearTargeting = P.prototype.ua;
P.prototype.getTargetingMap = P.prototype.bb;
P.prototype.setTargeting = P.prototype.da;
P.prototype.setCategoryExclusion = P.prototype.xa;
P.prototype.clearCategoryExclusions = P.prototype.ta;
P.prototype.getCategoryExclusions = P.prototype.Ja;
P.prototype.getCollapseEmptyDiv = P.prototype.La;
P.prototype.setCollapseEmptyDiv = P.prototype.lb;
P.prototype.getDivStartsCollapsed = P.prototype.Oa;
P.prototype.getAudExtId = P.prototype.Ia;
P.prototype.gtfcd = P.prototype.fb;
var hd = function() {
    this.a = {};
    this.b = {};
    this.c = z()
}, id = function(a, b, c, d) {
    if (!l(b) || 0 >= b.length ||!c)
        return null;
    b in a.a || (a.a[b] = []);
    c = new P(b, a.a[b].length, c, d);
    d = c.g.a;
    if (a.b[d])
        return y(a.c, bb(d)), null;
    a.a[b].push(c);
    return a.b[c.g.a] = c
};
hd.prototype.d = function(a, b) {
    var c = b || 0, d = l(a) && this.a[a] || [];
    return 0 <= c && c < d.length && (d = d[c], d.g.c == c) ? d : null
};
var jd = function() {
    var a = q();
    return a.slot_manager_instance || (a.slot_manager_instance = new hd)
}, kd = function(a, b, c) {
    var d = jd();
    return d && id(d, a, b, c)
};
r("defineOutOfPageSlot", function(a, b) {
    var c = jd();
    return c ? (c = id(c, a, [1, 1], b)) ? (c.u=!0, c) : null : null
});
r("defineSlot", kd);
r("defineUnit", kd);
hd.prototype.find = hd.prototype.d;
hd.getInstance = jd;
var ld = function(a) {
    var b = z();
    if (l(a)) {
        var c;
        c = jd();
        if (c = c.b[a] ? c.b[a] : null)
            if (c.l&&!c.A())
                x(c.a, Za(c.b, c.g.a), null, c);
            else 
                for (a = 0; a < c.c.length; ++a)
                    c.c[a].b && c.c[a].s(c);
        else 
            y(b, ab(String(a)))
    } else 
        y(b, $a(String(a)))
};
r("display", ld, !0);
var md = null, nd = Fc || Gc || Ec || "function" == typeof h.atob;
var R = function(a, b, c) {
    if (!l(a) || 0 >= a.length ||!Boolean(b) ||!c)
        y(z(), cb(String(a), String(b), String(c)));
    else {
        var d = od++;
        this.a = new P(a, d, b);
        this.a.G(c);
        this.b = c
    }
}, od = 1;
e = R.prototype;
e.ka = function(a) {
    this.a.K(a);
    return this
};
e.la = function(a, b) {
    this.a.da(a, b);
    return this
};
e.ja = function(a) {
    Uc(a) && (this.a.n = a);
    return this
};
e.setTagForChildDirectedTreatment = function(a) {
    this.a.setTagForChildDirectedTreatment(a);
    return this
};
e.display = function() {
    pd(this.b, this.a)
};
R.prototype.setClickUrl = R.prototype.ka;
R.prototype.setTargeting = R.prototype.la;
R.prototype.setAudExtId = R.prototype.ja;
R.prototype.setTagForChildDirectedTreatment = R.prototype.setTagForChildDirectedTreatment;
R.prototype.display = R.prototype.display;
var S = function() {
    this.d = [];
    this.L = {};
    this.b=!1;
    this.q = {};
    this.r = {};
    this.log = z();
    w(this.log, ib(this.h()), this)
};
e = S.prototype;
e.h = function() {
    return "unknown"
};
e.getVersion = function() {
    return "unversioned"
};
e.ra = function(a, b) {
    l(a) && 0 < a.length ? (this.q[a] = b, w(this.log, jb(a, String(b), this.h()), this, null)) : x(this.log, kb(String(a), String(b), this.h()), this, null);
    return this
};
e.J = function(a) {
    return this.q[a]
};
e.aa = function() {
    var a = [], b;
    for (b in this.q)
        "function" != typeof this.q[b] && a.push(b);
    return a
};
e.ab = function() {
    return this.d
};
e.$a = function() {
    return this.L
};
e.enable = function() {
    if (this.b)
        w(this.log, lb(), this);
    else {
        this.b=!0;
        try {
            this.M()
        } catch (a) {
            y(this.log, mb(String(a)), this)
        }
    }
};
e.display = function(a, b, c, d) {
    this.enable();
    a = c ? kd(a, b, c) : kd(a, b);
    a.G(this);
    d && a.K(d);
    ld(a.g.a)
};
e.H = function(a) {
    this.d.push(a);
    this.L[a.g.b] = a;
    w(this.log, nb(this.h(), a.b), this, a)
};
e.qa = function(a, b) {
    if (!da(b))
        return x(this.log, hc(), this), this;
    var c;
    t: {
        for (c in $c)
            if ($c[c] == a) {
                c=!0;
                break t
            }
        c=!1
    }
    if (!c)
        return x(this.log, jc(a), this), this;
    k(this.r[a]) || (this.r[a] = []);
    this.r[a].push(b);
    return this
};
var gd = function(a, b) {
    var c = a.r.slotRenderEnded;
    k(c) && pc(c, function(a) {
        try {
            a(b)
        } catch (c) {
            a = c && l(c.name) ? c.name : null;
            var f = c && l(c.message) ? c.message: null, n = "";
            a && f ? n = a + ": " + f : a ? n = a : f && (n = f);
            x(this.log, ic(n), this)
        }
    }, a)
};
S.prototype.getName = S.prototype.h;
S.prototype.getSlots = S.prototype.ab;
S.prototype.getSlotIdMap = S.prototype.$a;
S.prototype.enable = S.prototype.enable;
S.prototype.set = S.prototype.ra;
S.prototype.get = S.prototype.J;
S.prototype.getAttributeKeys = S.prototype.aa;
S.prototype.display = S.prototype.display;
S.prototype.addEventListener = S.prototype.qa;
var T = function(a, b) {
    this.name = a;
    this.b = b ? b : new h.GPT_jstiming.Timer;
    this.b.name = a;
    this.a = []
};
T.prototype.tick = function(a, b) {
    this.b.tick(a, b)
};
T.prototype.ea = function(a) {
    a && this.a.push(a)
};
T.prototype.report = function() {
    var a = "https:" == h.location.protocol ? "https://www.google.com/csi": "http://csi.gstatic.com/csi", b = {};
    this.a.length && (b.e = this.a.join());
    return h.GPT_jstiming.report(this.b, b, a)
};
T.prototype.c = function(a) {
    Ba(window, function() {
        setTimeout(a, 10)
    })
};
var U = function(a) {
    this.name = a
};
ha(U, T);
U.prototype.tick = function() {};
U.prototype.ea = function() {};
U.prototype.report = function() {
    return null
};
U.prototype.c = function() {};
var qd = function() {
    var a = h.GPT_jstiming.load, b, c = 0.01;
    void 0 == c && (c = 0.01);
    h.GPT_jstiming && h.GPT_jstiming.load && ("http:" == h.location.protocol || "https:" == h.location.protocol) && Math.random() < c ? b = new T("global", a) : b = new U("global");
    return b
};
(function() {
    if (!q()._gpt_timer_ && h.GPT_jstiming) {
        var a = qd();
        a.c(function() {
            a.tick("load");
            a.report()
        });
        r("_gpt_timer_", a)
    }
    return q()._gpt_timer_
})();
var rd = function() {
    this.a = {};
    this.b=!1;
    this.c = z();
    this.f = w(this.c, Ka());
    Ba(window, ga(rd.prototype.d, this))
}, sd = function(a, b) {
    var c = null;
    b in a.a && (c = a.a[b]);
    return c
};
rd.prototype.d = function() {
    this.b=!0;
    w(this.c, Ea(), null, null, this.f)
};
var V = function() {
    var a = q();
    return a.service_manager_instance || (a.service_manager_instance = new rd)
};
r("enableServices", function() {
    var a = V(), b;
    for (b in a.a) {
        var c = a.a[b];
        if (!da(c)) {
            c.enable();
            var c = b, d = q()._gpt_timer_;
            d && d.ea(c)
        }
    }
});
var W = function() {
    S.call(this);
    this.k=!1;
    this.a = null;
    this.P = 0;
    this.o =- 1;
    this.i = {};
    this.w = [];
    this.O = this.u = "";
    this.T=!1;
    this.R=!0;
    this.j = this.Q=!1;
    this.c=!0;
    this.p = this.l = this.S=!1;
    this.f = [];
    this.m = [];
    this.n = [];
    this.B=!1;
    this.C = {};
    this.v=!1;
    this.U = this.V = "";
    this.N = []
};
ha(W, S);
var td = {
    adsense_ad_format: "google_ad_format",
    adsense_ad_types: "google_ad_type",
    adsense_allow_expandable_ads: "google_allow_expandable_ads",
    adsense_background_color: "google_color_bg",
    adsense_bid: "google_bid",
    adsense_border_color: "google_color_border",
    adsense_channel_ids: "google_ad_channel",
    adsense_content_section: "google_ad_section",
    adsense_cpm: "google_cpm",
    adsense_ed: "google_ed",
    adsense_encoding: "google_encoding",
    adsense_family_safe: "google_safe",
    adsense_feedback: "google_feedback",
    adsense_flash_version: "google_flash_version",
    adsense_font_face: "google_font_face",
    adsense_font_size: "google_font_size",
    adsense_hints: "google_hints",
    adsense_host: "google_ad_host",
    adsense_host_channel: "google_ad_host_channel",
    adsense_host_tier_id: "google_ad_host_tier_id",
    adsense_keyword_type: "google_kw_type",
    adsense_keywords: "google_kw",
    adsense_line_color: "google_line_color",
    adsense_link_color: "google_color_link",
    adsense_relevant_content: "google_contents",
    adsense_reuse_colors: "google_reuse_colors",
    adsense_targeting: "google_targeting",
    adsense_targeting_types: "google_targeting",
    adsense_test_mode: "google_adtest",
    adsense_text_color: "google_color_text",
    adsense_ui_features: "google_ui_features",
    adsense_ui_version: "google_ui_version",
    adsense_url_color: "google_color_url",
    alternate_ad_iframe_color: "google_alternate_color",
    alternate_ad_url: "google_alternate_ad_url",
    demographic_age: "google_cust_age",
    demographic_ch: "google_cust_ch",
    demographic_gender: "google_cust_gender",
    demographic_interests: "google_cust_interests",
    demographic_job: "google_cust_job",
    demographic_l: "google_cust_l",
    demographic_lh: "google_cust_lh",
    demographic_u_url: "google_cust_u_url",
    demographic_unique_id: "google_cust_id",
    document_language: "google_language",
    geography_override_city: "google_city",
    geography_override_country: "google_country",
    geography_override_region: "google_region",
    page_url: "google_page_url"
};
W.prototype.M = function() {
    if (this.c) {
        if (!this.k) {
            var a = document, b = a.createElement("script");
            V();
            b.async=!0;
            b.type = "text/javascript";
            b.src = ud();
            (a = a.getElementsByTagName("head")[0] || a.getElementsByTagName("body")[0]) ? (w(this.log, sb("GPT PubAds"), this), a.appendChild(b), this.k=!0) : y(this.log, tb("GPT PubAds"), this)
        }
    } else 
        vd(this)
};
W.prototype.h = function() {
    return "publisher_ads"
};
var ud = function() {
    return Wc() + "//partner.googleadservices.com/gpt/pubads_impl_34.js"
}, vd = function(a) {
    var b = V();
    a.k || b.b || (b = document, a.k=!0, b.write('<script type="text/javascript" src="' + Vc(ud()) + '">\x3c/script>'))
};
W.prototype.fillSlot = function(a) {
    w(this.log, wb());
    this.a.fillSlot(a);
    this.C[a.b]=!0;
    if (this.a)
        if (this.B)(a = this.d[0]) && a.b in this.C && (this.refresh(), this.B=!1);
    else 
        for (a = 0; a < this.n.length; a++) {
            var b = this.n[a];
            b[0].b in this.C && (this.refresh(b), H.splice.call(this.n, a, 1), a--)
        } else 
            y(this.log, vb(), this)
};
W.prototype.ya = function() {
    V();
    var a = q().impl;
    if (a && a.pubads) {
        this.a = a.pubads;
        w(this.log, ub("GPT"), this);
        this.a.setCookieOptions(this.P);
        this.a.setTagForChildDirectedTreatment(this.o);
        this.R || this.a.disableFetch();
        this.l && this.a.collapseEmptyDivs(this.p);
        if (this.j) {
            this.c ? this.a.enableAsyncSingleRequest() : this.a.enableSingleRequest();
            wd(this);
            for (var a = this.d, b = 0; b < a.length; ++b)
                xd(this, a[b])
            } else 
                this.c && this.a.enableAsyncRendering();
        this.Q && this.a.disableInitialLoad();
        yd(this);
        if (0 < this.f.length)
            for (b =
            0; b < this.f.length; ++b)
                this.s(this.f[b]);
        if (0 < this.m.length)
            for (b = 0; b < this.m.length; ++b)
                pd(this, this.m[b])
    } else 
        y(this.log, xb(ud()), this)
};
W.prototype.H = function(a) {
    this.c || (a.l=!1);
    S.prototype.H.call(this, a)
};
W.prototype.s = function(a) {
    if (V().b&&!this.c)
        y(this.log, yb(), this);
    else if (this.a)
        wd(this), xd(this, a) && this.fillSlot(a);
    else if (this.c || this.k && 0 == this.f.length) {
        for (var b=!1, c = 0; c < this.f.length; ++c)
            a === this.f[c] && (b=!0);
            b || (w(this.log, zb(a.b, "GPT"), this, a), this.f.push(a))
    } else 
        y(this.log, Bb(a.b), this, a)
};
var xd = function(a, b) {
    if (a.a && null == a.a.addSlot(b))
        return y(a.log, Cb(b.b), a, b), !1;
    for (var c = b.$(), d = 0; d < c.length; ++d)
        c[d]in td ? a.a.addAdSenseSlotAttribute(b, td[c[d]], b.I(c[d])) : x(a.log, Eb(String(c[d]), String(b.I(c[d])), b.b), a, b);
    return !0
}, wd = function(a) {
    if (!a.T) {
        a.T=!0;
        for (var b = a.aa(), c = 0; c < b.length; ++c)
            b[c]in td ? a.a.addAdSensePageAttribute(td[b[c]], a.J(b[c])) : x(a.log, Db(String(b[c]), String(a.J(b[c]))), a);
        a.a.addAdSensePageAttribute("google_tag_info", "v2");
        for (var d in a.i)
            if (b = a.i[d], k(b)
                )for (c =
        0; c < b.length; ++c)
            a.a.addAttribute(d, b[c]);
        pc(a.w, function(a) {
            this.a.addPageCategoryExclusion(a)
        }, a);
        a.a.setPublisherProvidedId(a.O);
        a.u && a.a.setLocation(a.u);
        a.a.setCenterAds(a.S);
        pc(a.N, function(a) {
            this.a.setApiExperiment(a)
        }, a)
    }
};
e = W.prototype;
e.setCookieOptions = function(a) {
    if (!Uc(a))
        return x(this.log, Fb(String(a)), this), this;
    this.P = a;
    this.a && this.a.setCookieOptions(a);
    return this
};
e.setTagForChildDirectedTreatment = function(a) {
    if (0 !== a && 1 !== a)
        return x(this.log, gc(String(a)), this), this;
    this.o = a;
    this.a && this.a.setTagForChildDirectedTreatment(a);
    return this
};
e.za = function() {
    this.o =- 1;
    this.a && this.a.setTagForChildDirectedTreatment(-1);
    return this
};
e.pa = function(a, b) {
    var c = null;
    l(b) ? c = [b] : k(b) ? c = b : ba(b) && (c = tc(b));
    var d = c ? c.join(): String(b);
    if (!l(a) || za(null == a ? "" : String(a)) ||!c)
        return x(this.log, fc(String(a), d, this.h()), this), this;
    this.i[a] = c;
    w(this.log, ec(a, d, this.h()), this);
    if (this.a)
        for (this.a.clearAttribute(a), d = 0; d < c.length; ++d)
            this.a.addAttribute(a, c[d]);
    return this
};
e.na = function(a) {
    if (!l(a) || za(null == a ? "" : String(a)))
        return x(this.log, $b(String(a), this.h()), this), this;
    if (!this.i[a])
        return x(this.log, ac(a, this.h()), this), this;
    delete this.i[a];
    w(this.log, Zb(a, this.h()), this);
    this.a && this.a.clearAttribute(a);
    return this
};
e.oa = function(a) {
    if (!l(a) || za(null == a ? "" : String(a)))
        return x(this.log, cc(), this), this;
    var b = this.w;
    0 <= oc(b, a) || b.push(a);
    w(this.log, bc(a), this);
    this.a && this.a.addPageCategoryExclusion(a);
    return this
};
e.ma = function() {
    this.w = [];
    w(this.log, dc(), this);
    this.a && this.a.clearPageCategoryExclusions();
    return this
};
e.gb = function() {
    this.a ? x(this.log, Hb("noFetch", "pubads"), this) : this.R=!1
};
e.disableInitialLoad = function() {
    this.a ? x(this.log, Hb("disableInitialLoad", "pubads"), this) : this.Q=!0
};
e.enableSingleRequest = function() {
    this.b&&!this.j ? x(this.log, Gb("enableSingleRequest"), this) : (w(this.log, Jb("single request"), this), this.j=!0);
    return this.j
};
e.enableAsyncRendering = function() {
    this.b&&!this.c ? x(this.log, Gb("enableAsyncRendering"), this) : (w(this.log, Jb("asynchronous rendering"), this), this.c=!0);
    return this.c
};
e.Da = function() {
    if (this.b && this.c)
        x(this.log, Gb("enableSyncRendering"), this);
    else {
        w(this.log, Jb("synchronous rendering"), this);
        this.c=!1;
        for (var a = this.d, b = 0; b < a.length; ++b)
            a[b].l=!1
    }
    return !this.c
};
e.jb = function(a) {
    w(this.log, Kb("centering", String(a)), this);
    this.S = a
};
e.setPublisherProvidedId = function(a) {
    this.b ? x(this.log, Ib("setPublisherProvidedId", a), this) : (w(this.log, Kb("PPID", a), this), this.O = a);
    return this
};
e.Aa = function(a, b) {
    return new R(a, b, this)
};
var pd = function(a, b) {
    vd(a);
    a.a ? a.a.passback(b) : (w(a.log, Ab(b.b, "GPT"), a, b), a.m.push(b))
};
e = W.prototype;
e.refresh = function(a) {
    if (a&&!k(a))
        x(this.log, Tb("Slots to refresh"), this);
    else {
        var b = null;
        if (a && (b = zd(this, a), !b.length)) {
            y(this.log, Lb("Refresh"), this);
            return 
        }
        this.a ? (w(this.log, Qb(), this), this.a.refresh(b)) : this.j ? (w(this.log, Pb(), this), b ? (a = this.n, 0 <= oc(a, b) || a.push(b)) : this.B=!0) : x(this.log, Mb(), this)
    }
};
e.X = function(a, b, c, d, g, f) {
    if (a&&!k(a))
        x(this.log, Tb("Slot list"), this);
    else if (b&&!m(b))
        x(this.log, G("Correlator"), this);
    else if (c&&!m(c))
        x(this.log, G("Pod number"), this);
    else if (d&&!m(d))
        x(this.log, G("Pod position"), this);
    else if (g&&!ca(g))
        x(this.log, Ub("Persistent roadblocks only"), this);
    else if (f&&!ca(f))
        x(this.log, Ub("Clear unfilled slots"), this);
    else if (this.a) {
        var n = null;
        if (a && (n = zd(this, a), !n.length)) {
            y(this.log, Lb("refresh"), this);
            return 
        }
        w(this.log, Qb(), this);
        this.a.refresh(n, b, c, d, g, f)
    } else 
        x(this.log,
        Mb(), this)
};
e.Ea = function() {
    this.v=!0;
    yd(this)
};
e.nb = function(a, b) {
    this.v=!0;
    this.V = a;
    this.U = b;
    yd(this)
};
e.eb = function() {
    return this.a ? this.a.getVideoContentInformation() : null
};
var yd = function(a) {
    a.v && a.a && a.a.setVideoContentInformation(a.V, a.U)
};
e = W.prototype;
e.getCorrelator = function() {
    return 0 == this.d.length ? "not_available" : this.a ? this.a.getCorrelator() : "not_loaded"
};
e.getVideoStreamCorrelator = function() {
    if (!this.a)
        return 0;
    var a = this.a.getVideoStreamCorrelator();
    return isNaN(a) ? 0 : a
};
e.isAdRequestFinished = function() {
    return this.a ? this.a.isAdRequestFinished() : !1
};
e.isSlotAPersistentRoadblock = function(a) {
    return this.a ? this.a.isSlotAPersistentRoadblock(a) : !1
};
e.collapseEmptyDivs = function(a) {
    this.l ? x(this.log, Xb(), this) : this.b ? x(this.log, Gb("collapseEmptyDivs"), this) : (this.p = Boolean(a), w(this.log, Wb(String(this.p)), this), this.l=!0);
    return this.l
};
e.D = function(a) {
    if (!this.a)
        return x(this.log, Ob(), this), !1;
    var b = null;
    if (a && (b = zd(this, a), 0 == b.length))
        return y(this.log, Lb("Clear"), this), !1;
    w(this.log, Rb(), this);
    return this.a.clearSlotContents(b)
};
e.clearNoRefreshState = function() {
    this.a ? (w(this.log, Sb(), this), this.a.clearNoRefreshState()) : x(this.log, Nb(), this)
};
e.setLocation = function(a, b, c) {
    var d = "role:1 producer:12";
    if (void 0 !== b) {
        if (!m(a))
            return x(this.log, G("Latitude")), this;
        if (!m(b))
            return x(this.log, G("Longitude")), this;
        d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
        if (void 0 !== c) {
            if (isNaN(c))
                return x(this.log, G("Radius")), this;
            d += " radius:" + Math.round(c)
        }
    } else 
        50 < a.length && (b = a.substring(0, 50), x(this.log, Vb(String(a), "50", b)), a = b), d += ' loc:"' + a + '"';
    if (nd)
        d = h.btoa(d);
    else {
        a = d;
        d = [];
        for (c = b = 0; c < a.length; c++) {
            for (var g =
            a.charCodeAt(c); 255 < g;)
                d[b++] = g & 255, g>>=8;
            d[b++] = g
        }
        if (!ba(d))
            throw Error("encodeByteArray takes an array as a parameter");
        if (!md)
            for (md = {}, a = 0; 65 > a; a++)
                md[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
        a = md;
        b = [];
        for (c = 0; c < d.length; c += 3) {
            var f = d[c], n = (g = c + 1 < d.length) ? d[c + 1]: 0, C = c + 2 < d.length, M = C ? d[c + 2]: 0, F = f>>2, f = (f & 3)<<4 | n>>4, n = (n & 15)<<2 | M>>6, M = M & 63;
            C || (M = 64, g || (n = 64));
            b.push(a[F], a[f], a[n], a[M])
        }
        d = b.join("")
    }
    this.u = "a " + d;
    return this
};
e.getVersion = function() {
    return this.a ? this.a.getVersion() : void 0
};
e.Ha = function(a) {
    this.b ? x(this.log, Ib("forceExperiment", a), this) : this.N.push(a)
};
var X = function() {
    var a = V(), b = sd(a, "publisher_ads");
    b || (b = new W, a.a[b.h()] = b);
    return b
}, zd = function(a, b) {
    for (var c = [], d = 0; d < b.length; ++d) {
        var g = b[d];
        g instanceof P ? c.push(g) : x(a.log, Yb(String(d)), a)
    }
    return c
};
r("pubads", X);
W.prototype.clear = W.prototype.D;
W.prototype.clearNoRefreshState = W.prototype.clearNoRefreshState;
W.prototype.collapseEmptyDivs = W.prototype.collapseEmptyDivs;
W.prototype.definePassback = W.prototype.Aa;
W.prototype.disableInitialLoad = W.prototype.disableInitialLoad;
W.prototype.enableAsyncRendering = W.prototype.enableAsyncRendering;
W.prototype.enableSingleRequest = W.prototype.enableSingleRequest;
W.prototype.enableSyncRendering = W.prototype.Da;
W.prototype.enableVideoAds = W.prototype.Ea;
W.prototype.forceExperiment = W.prototype.Ha;
W.prototype.getCorrelator = W.prototype.getCorrelator;
W.prototype.getVideoContent = W.prototype.eb;
W.prototype.getVideoStreamCorrelator = W.prototype.getVideoStreamCorrelator;
W.prototype.isAdRequestFinished = W.prototype.isAdRequestFinished;
W.prototype.isSlotAPersistentRoadblock = W.prototype.isSlotAPersistentRoadblock;
W.prototype.noFetch = W.prototype.gb;
W.prototype.onGoogleAdsJsLoad = W.prototype.ya;
W.prototype.refresh = W.prototype.refresh;
W.prototype.setLocation = W.prototype.setLocation;
W.prototype.setTargeting = W.prototype.pa;
W.prototype.clearTargeting = W.prototype.na;
W.prototype.setCategoryExclusion = W.prototype.oa;
W.prototype.clearCategoryExclusions = W.prototype.ma;
W.prototype.setVideoContent = W.prototype.nb;
W.prototype.getVersion = W.prototype.getVersion;
W.prototype.videoRefresh = W.prototype.X;
W.prototype.setCentering = W.prototype.jb;
W.prototype.setPublisherProvidedId = W.prototype.setPublisherProvidedId;
W.prototype.setCookieOptions = W.prototype.setCookieOptions;
W.prototype.setTagForChildDirectedTreatment = W.prototype.setTagForChildDirectedTreatment;
W.prototype.clearTagForChildDirectedTreatment = W.prototype.za;
var Y = function() {
    S.call(this);
    this.n=!0;
    this.f = this.k=!1;
    this.j = 0;
    this.m = this.l = void 0;
    this.o = this.i=!1;
    this.c = {};
    this.a=!1
};
ha(Y, S);
e = Y.prototype;
e.M = function() {
    if (this.n) {
        if (!this.o) {
            var a = document, b = document.createElement("script");
            b.async=!0;
            b.type = "text/javascript";
            b.src = Ad();
            try {
                var c = a.getElementsByTagName("script")[0];
                w(this.log, sb("GPT CompanionAds"), this);
                this.o=!0;
                c.parentNode && c.parentNode.insertBefore(b, c)
            } catch (d) {
                y(this.log, tb("GPT CompanionAds"), this)
            }
        }
    } else 
        this.i || (h.document.write('<script type="text/javascript" src="' + Vc(Ad()) + '">\x3c/script>'), this.i=!0)
};
e.Ca = function() {
    this.n=!1
};
e.mb = function(a) {
    ca(a) && (this.k = a)
};
e.kb = function(a) {
    ca(a) && (this.f = a)
};
e.hb = function(a) {
    if (this.k)
        Bd(this, Cd(this, a));
    else if (this.f) {
        a = Cd(this, a);
        var b = X();
        b.b ? b.D(a) : y(this.log, pb("PubAds", "clear"))
    }
};
e.W = function() {
    var a = X();
    if (!a.b)
        return !1;
    var a = a.d, b = this.d;
    if (a.length != b.length)
        return !1;
    for (var c = 0; c < b.length; ++c) {
        for (var d=!1, g = 0; g < a.length; ++g)
            if (b[c] === a[g]) {
                d=!0;
                break
            }
        if (!d)
            return !1
    }
    return !0
};
e.ib = function() {
    this.k && Bd(this, null)
};
e.ha = function(a, b, c, d, g, f, n) {
    this.a=!1;
    this.j = 0;
    this.m = this.l = void 0;
    this.j = a;
    void 0 !== g && (this.l = g);
    void 0 !== f && (this.m = f);
    void 0 !== n && (this.a = n)
};
e.ob = function(a, b, c, d) {
    this.ha(a, 0, 0, 0, b, c, d)
};
e.Na = function() {
    return X().getCorrelator()
};
e.getVideoStreamCorrelator = function() {
    return X().getVideoStreamCorrelator()
};
var Bd = function(a, b) {
    var c = X();
    if (c.b) {
        if (a.a) {
            if (!a.W()) {
                x(a.log, ob());
                return 
            }
            c.clearNoRefreshState();
            c.D()
        }
        c.X(b, a.j, a.l, a.m, a.a, a.f)
    } else 
        y(a.log, pb("PubAds", "refresh"))
};
Y.prototype.isSlotAPersistentRoadblock = function(a) {
    var b = X();
    if (b.b)
        return b.isSlotAPersistentRoadblock(a);
    y(this.log, qb());
    return !1
};
var Cd = function(a, b) {
    for (var c = a.L, d = [], g = 0; g < b.length; ++g) {
        var f = b[g];
        f in c ? d.push(c[f]) : x(a.log, rb(), a)
    }
    return d
};
Y.prototype.h = function() {
    return "companion_ads"
};
var Ad = function() {
    return Wc() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
};
Y.prototype.p = function() {
    w(this.log, ub("GPT CompanionAds"), this);
    this.i=!0
};
var Dd = function(a, b) {
    var c = b && b.g.b;
    return c && c in a.c && b.A() && a.b&&!a.isSlotAPersistentRoadblock(b) ? (b.i = a.c[c], fd(b)) : !1
};
Y.prototype.s = function(a) {
    Dd(this, a)
};
Y.prototype.fillSlot = function(a, b) {
    return a && l(b) && 0 < b.length ? (this.c[a.g.toString()] = b, Dd(this, a)) : !1
};
r("companionAds", function() {
    var a = V(), b = sd(a, "companion_ads");
    b || (b = new Y, a.a[b.h()] = b);
    return b
});
Y.prototype.fillSlot = Y.prototype.fillSlot;
Y.prototype.enableSyncLoading = Y.prototype.Ca;
Y.prototype.isSlotAPersistentRoadblock = Y.prototype.isSlotAPersistentRoadblock;
Y.prototype.isRoadblockingSupported = Y.prototype.W;
Y.prototype.onImplementationLoaded = Y.prototype.p;
Y.prototype.notifyUnfilledSlots = Y.prototype.hb;
Y.prototype.refreshAllSlots = Y.prototype.ib;
Y.prototype.setRefreshUnfilledSlots = Y.prototype.mb;
Y.prototype.setClearUnfilledSlots = Y.prototype.kb;
Y.prototype.setVideoSessionInfo = Y.prototype.ha;
Y.prototype.setVideoSession = Y.prototype.ob;
Y.prototype.getDisplayAdsCorrelator = Y.prototype.Na;
Y.prototype.getVideoStreamCorrelator = Y.prototype.getVideoStreamCorrelator;
var Z = function() {
    S.call(this);
    this.a = {}
};
ha(Z, S);
Z.prototype.h = function() {
    return "content"
};
var Ed = function(a, b) {
    var c = b && b.g.b;
    c in a.a && a.b && b.A()&&!b.f && (b.i = a.a[c], fd(b))
};
Z.prototype.M = function() {
    for (var a = this.d, b = 0; b < a.length; ++b)
        Ed(this, a[b])
};
Z.prototype.s = function(a) {
    Ed(this, a)
};
Z.prototype.c = function(a, b) {
    a && l(b) && 0 < b.length && (this.a[a.g.b] = b, Ed(this, a))
};
r("content", function() {
    var a = V(), b = sd(a, "content");
    b || (b = new Z, a.a[b.h()] = b);
    return b
});
Z.prototype.setContent = Z.prototype.c;
var Fd = /#|$/, Gd = function(a, b) {
    var c = a.search(Fd), d;
    t: {
        d = 0;
        for (var g = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
            var f = a.charCodeAt(d-1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(d + g), !f || 61 == f || 38 == f || 35 == f)
                    break t;
            d += g + 1
        }
        d =- 1
    }
    if (0 > d)
        return null;
    g = a.indexOf("&", d);
    if (0 > g || g > c)
        g = c;
    d += b.length + 1;
    return decodeURIComponent(a.substr(d, g - d).replace(/\+/g, " "))
};
var Hd = function() {
    var a = window, b = document;
    if (q()._pubconsole_disable_)
        return !1;
    var c;
    c = document.cookie.split("google_pubconsole=");
    if (c = 2 == c.length ? c[1].split(";")[0] : "")
        if (c = c.split("|"), 0 < c.length && ("1" == c[0] || "0" == c[0])
            )return !0;
    V();
    c=!1;
    try {
        c = a.top.document.URL === b.URL
    } catch (d) {}
    a = c ? b.URL : b.referrer;
    return null !== Gd(a, "google_debug") || null !== Gd(a, "google_console") || null !== Gd(a, "google_force_console") || null !== Gd(a, "googfc")
}, Id = function() {
    if (Hd()) {
        var a = document, b = a.createElement("script");
        b.type =
        "text/javascript";
        b.src = Wc() + "//publisherconsole.appspot.com/js/loader.js";
        b.async=!0;
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(b, a)
    }
};
"complete" === document.readyState ? Id() : Ba(window, Id);
r("disablePublisherConsole", function() {
    q()._pubconsole_disable_=!0
});
var $ = function() {
    this.c = [];
    this.b=!1;
    this.a = z()
};
$.prototype.d = function(a, b) {
    if (!Xc(a))
        return this.b=!0, x(this.a, gb(String(a))), this;
    var c;
    if (c=!Xc(b))
        c=!(k(b) && rc(b, Xc));
    if (c)
        return this.b=!0, x(this.a, fb(String(b))), this;
    this.c.push([a, b]);
    return this
};
$.prototype.f = function() {
    if (this.b)
        return x(this.a, hb()), null;
    xc(this.c);
    return this.c
};
var wc = function(a, b) {
    var c;
    t: {
        c = b[0];
        for (var d = a[0], g = uc, f = Math.min(c.length, d.length), n = 0; n < f; n++) {
            var C = g(c[n], d[n]);
            if (0 != C) {
                c = C;
                break t
            }
        }
        c = uc(c.length, d.length)
    }
    return c
};
r("sizeMapping", function() {
    return new $
});
$.prototype.addSize = $.prototype.d;
$.prototype.build = $.prototype.f;
r("getVersion", function() {
    return "34"
});
var Jd = q().cmd;
if (!Jd || k(Jd)) {
    var Kd = q().cmd = new kc;
    Jd && 0 < Jd.length && Kd.push.apply(Kd, Jd)
}(function() {
    var a = document.getElementsByTagName("script");
    0 < a.length && (a = a[a.length-1], a.src && 0 <= a.src.indexOf("/tag/js/gpt.js") && a.innerHTML&&!a.googletag_executed && (a.googletag_executed=!0, eval(a.innerHTML)))
})();
})()
