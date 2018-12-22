function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length,
            n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return X.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = de[e] = {};
        return Z.each(e.match(he) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n)
                } catch (i) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function l() {
        return !1
    }

    function f() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function d(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; n < r; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, c;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (i in c)
                    for (n = 0, r = c[i].length; n < r; n++) Z.event.add(t, i, c[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = G,
            n = _e[e];
        return n || (n = x(e, t), "none" !== n && n || (Me = (Me || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Me[0].contentDocument, t.write(), t.close(), n = x(e, t), Me.detach()), _e[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || Be(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Ie.test(s) && We.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function k(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Je.length; i--;)
            if (t = Je[i] + n, t in e) return t;
        return r
    }

    function T(e, t, n) {
        var r = Ue.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function C(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += Z.css(e, n + ke[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + ke[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + ke[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + ke[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + ke[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Be(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = w(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            r = s && (Y.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + C(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function N(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Se(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Se(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; s < a; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function A() {
        return setTimeout(function () {
            Ye = void 0
        }), Ye = Z.now()
    }

    function D(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = ke[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function q(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function O(e, t, n) {
        var r, i, o, s, a, u, c, l, f = this,
            p = {},
            h = e.style,
            d = e.nodeType && Se(e),
            g = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Z.css(e, "display"), l = "none" === c ? ve.get(e, "olddisplay") || b(e.nodeName) : c, "inline" === l && "none" === Z.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Ke.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    d = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else c = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === c ? b(e.nodeName) : c) && (h.display = c);
        else {
            g ? "hidden" in g && (d = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !d), d ? Z(e).show() : f.done(function () {
                Z(e).hide()
            }), f.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) s = q(d ? g[r] : 0, r, f), r in g || (g[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function L(e, t, n) {
        var r, i, o = 0,
            s = tt.length,
            a = Z.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = Ye || A(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, s = 0, u = c.tweens.length; s < u; s++) c.tweens[s].run(o);
                return a.notifyWith(e, [c, o, n]), o < 1 && u ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ye || A(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            l = c.props;
        for ($(l, c.opts.specialEasing); o < s; o++)
            if (r = tt[o].call(c, e, l, c.opts)) return r;
        return Z.map(l, q, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(he) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function (e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), u
        }
        var o = {},
            s = e === wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function H(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function M(e, t, n, r) {
        var i, o, s, a, u, c = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = c[u + " " + o] || c["* " + o], !s)
                for (i in c)
                    if (a = i.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[i] : c[i] !== !0 && (o = a[0], l.unshift(a[1]));
                        break
                    } if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function _(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function (t, i) {
            n || Ct.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) _(e + "[" + i + "]", t[i], n, r)
    }

    function W(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var I = [],
        B = I.slice,
        z = I.concat,
        U = I.push,
        X = I.indexOf,
        V = {},
        Q = V.toString,
        J = V.hasOwnProperty,
        Y = {},
        G = e.document,
        K = "2.1.1",
        Z = function (e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function (e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function () {
            return B.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return Z.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: I.sort,
        splice: I.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (c && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(c, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function (e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !J.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Q.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; o < s && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (a)
                for (; o < s && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : U.call(r, e)), r
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a)
                for (; o < s; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e)) return r = B.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(B.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i
        },
        now: Date.now,
        support: Y
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, c, f, h, d, g;
            if ((t ? t.ownerDocument || t : _) !== O && q(t), t = t || O, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (L && !r) {
                if (i = ye.exec(e))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    } if (w.qsa && (!F || !F.test(e))) {
                    if (h = f = M, d = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e), (f = t.getAttribute("id")) ? h = f.replace(be, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = c.length; u--;) c[u] = h + p(c[u]);
                        d = xe.test(e) && l(t.parentNode) || t, g = c.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, d.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, s) {
                var a, u, c = [W, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[M] || (t[M] = {}), (a = u[r]) && a[0] === W && a[1] === o) return c[2] = a[2];
                            if (u[r] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, s)), r(function (r, s, a, u) {
                var c, l, f, p = [],
                    h = [],
                    d = s.length,
                    v = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : m(v, p, e, a, u),
                    x = n ? o || (r ? e : d || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (c = m(x, h), i(c, [], a, u), l = c.length; l--;)(f = c[l]) && (x[h[l]] = !(y[h[l]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = x.length; l--;)(f = x[l]) && c.push(y[l] = f);
                            o(null, x = [], c, u)
                        }
                        for (l = x.length; l--;)(f = x[l]) && (c = o ? te.call(r, f) : p[l]) > -1 && (r[c] = !(s[c] = f))
                    }
                } else x = m(x === s ? x.splice(d, x.length) : x), o ? o(null, s, x, u) : Z.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, u = h(function (e) {
                    return e === t
                }, s, !0), c = h(function (e) {
                    return te.call(t, e) > -1
                }, s, !0), l = [function (e, n, r) {
                    return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
                }]; a < i; a++)
                if (n = k.relative[e[a].type]) l = [h(d(l), n)];
                else {
                    if (n = k.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                        for (r = ++a; r < i && !k.relative[e[r].type]; r++);
                        return v(a > 1 && d(l), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                    }
                    l.push(n)
                } return d(l)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function (r, s, a, u, c) {
                    var l, f, p, h = 0,
                        d = "0",
                        g = r && [],
                        v = [],
                        y = j,
                        x = r || o && k.find.TAG("*", c),
                        b = W += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (c && (j = s !== O && s); d !== w && null != (l = x[d]); d++) {
                        if (o && l) {
                            for (f = 0; p = e[f++];)
                                if (p(l, s, a)) {
                                    u.push(l);
                                    break
                                } c && (W = b)
                        }
                        i && ((l = !p && l) && h--, r && g.push(l))
                    }
                    if (h += d, i && d !== h) {
                        for (f = 0; p = n[f++];) p(g, v, s, a);
                        if (r) {
                            if (h > 0)
                                for (; d--;) g[d] || v[d] || (v[d] = G.call(u));
                            v = m(v)
                        }
                        Z.apply(u, v), c && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                    }
                    return c && (W = b, j = y), g
                };
            return i ? r(s) : s
        }
        var b, w, k, S, T, C, E, N, j, A, D, q, O, $, L, F, P, H, R, M = "sizzle" + -new Date,
            _ = e.document,
            W = 0,
            I = 0,
            B = n(),
            z = n(),
            U = n(),
            X = function (e, t) {
                return e === t && (D = !0), 0
            },
            V = "undefined",
            Q = 1 << 31,
            J = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            K = Y.push,
            Z = Y.push,
            ee = Y.slice,
            te = Y.indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            ce = new RegExp("^" + re + "*," + re + "*"),
            le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            pe = new RegExp(ae),
            he = new RegExp("^" + oe + "$"),
            de = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            ke = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Y = ee.call(_.childNodes), _.childNodes), Y[_.childNodes.length].nodeType
        } catch (Se) {
            Z = {
                apply: Y.length ? function (e, t) {
                    K.apply(e, ee.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, T = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, q = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : _,
                r = n.defaultView;
            return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, $ = n.documentElement, L = !T(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                q()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                q()
            })), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function (e) {
                return $.appendChild(e).id = M, !n.getElementsByName || !n.getElementsByName(M).length
            }), w.getById ? (k.find.ID = function (e, t) {
                if (typeof t.getElementById !== V && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(we, ke);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(we, ke);
                return function (e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = w.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== V) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, k.find.CLASS = w.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== V && L) return t.getElementsByClassName(e)
            }, P = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function (e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = ve.test(H = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), P.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test($.compareDocumentPosition), R = t || ve.test($.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return D = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === _ && R(_, e) ? -1 : t === n || t.ownerDocument === _ && R(_, t) ? 1 : A ? te.call(A, e) - te.call(A, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return D = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    c = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : A ? te.call(A, e) - te.call(A, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) c.unshift(r);
                for (; u[i] === c[i];) i++;
                return i ? s(u[i], c[i]) : u[i] === _ ? -1 : c[i] === _ ? 1 : 0
            }, n) : O
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== O && q(e), n = n.replace(fe, "='$1']"), w.matchesSelector && L && (!P || !P.test(n)) && (!F || !F.test(n))) try {
                var r = H.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, O, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== O && q(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== O && q(e);
            var n = k.attrHandle[t.toLowerCase()],
                r = n && J.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : w.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (D = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(X), D) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return A = null, e
        }, S = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += S(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(we, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, ke).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && B(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var c, l, f, p, h, d, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    d = g = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild], s && y) {
                                for (l = m[M] || (m[M] = {}), c = l[e] || [], h = c[0] === W && c[1], p = c[0] === W && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (p = h = 0) || d.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        l[e] = [W, h, p];
                                        break
                                    }
                            } else if (y && (c = (t[M] || (t[M] = {}))[e]) && c[0] === W) p = c[1];
                            else
                                for (;
                                    (f = ++h && f && f[g] || (p = h = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[M] || (f[M] = {}))[e] = [W, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(ue, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function (e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, ke).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === $
                },
                focus: function (e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !k.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return ge.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) k.pseudos[b] = u(b);
        return f.prototype = k.filters = k.pseudos, k.setFilters = new f, C = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, c, l = z[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = e, u = [], c = k.preFilter; a;) {
                r && !(i = ce.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = le.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in k.filter) !(i = de[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;) o = y(t[n]), o[M] ? r.push(o) : i.push(o);
                o = U(e, x(i, r)), o.selector = e
            }
            return o
        }, N = t.select = function (e, t, n, r) {
            var i, o, s, a, u, c = "function" == typeof e && e,
                f = !r && C(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && L && k.relative[o[1].type]) {
                    if (t = (k.find.ID(s.matches[0].replace(we, ke), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !k.relative[a = s.type]);)
                    if ((u = k.find[a]) && (r = u(s.matches[0].replace(we, ke), xe.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (c || E(e, f))(r, t, !L, n, xe.test(e) && l(t.parentNode) || t), n
        }, w.sortStable = M.split("").sort(X).join("") === M, w.detectDuplicates = !!D, q(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function (e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function (e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        le = Z.fn.init = function (e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), se.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = G.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    le.prototype = Z.fn, ue = Z(G);
    var fe = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                } return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? X.call(Z(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return Z.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var he = /\S+/g,
        de = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? de[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [],
            c = !e.once && [],
            l = function (o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && a < s; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    } r = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function () {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function (t, n) {
                                var r = Z.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, l(t))
                    }
                    return this
                },
                remove: function () {
                    return u && Z.each(arguments, function (e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (n <= s && s--, n <= a && a--)
                    }), this
                },
                has: function (e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], s = 0, this
                },
                disable: function () {
                    return u = c = t = void 0, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return c = void 0, t || f.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return !u || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : l(t)), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return Z.Deferred(function (n) {
                            Z.each(t, function (t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = B.call(arguments),
                s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : Z.Deferred(),
                c = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(G, [Z]), Z.fn.triggerHandler && (Z(G).triggerHandler("ready"), Z(G).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return ge || (ge = Z.Deferred(), "complete" === G.readyState ? setTimeout(Z.ready) : (G.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, Z.ready.promise();
    var me = Z.access = function (e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            c = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                return c.call(Z(e), n)
            })), t))
            for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(he) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        be = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function (e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function (e, t) {
            ye.remove(e, t)
        },
        _data: function (e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                ye.set(this, e)
            }) : me(this, function (t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                s = function () {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Se = function (e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Te = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    Y.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
        Ne = /^(?:mouse|pointer|contextmenu)|click/,
        je = /^(?:focusinfocus|focusoutblur)$/,
        Ae = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, c, l, f, p, h, d, g, m = ve.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return typeof Z !== Ce && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(he) || [""], c = t.length; c--;) a = Ae.exec(t[c]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h && (f = Z.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = Z.event.special[h] || {}, l = Z.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, o), (p = u[h]) || (p = u[h] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, d, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), Z.event.global[h] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, c, l, f, p, h, d, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(he) || [""], c = t.length; c--;)
                    if (a = Ae.exec(t[c]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
                        for (f = Z.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                        s && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || Z.removeEvent(e, h, m.handle), delete u[h])
                    } else
                        for (h in u) Z.event.remove(e, h + t[c], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, s, a, u, c, l, f, p = [r || G],
                h = J.call(t, "type") ? t.type : t,
                d = J.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (d = h.split("."), h = d.shift(), d.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[Z.expando] ? t : new Z.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = d.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || h, je.test(u + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || h, l = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), l && l.apply(s, n), l = c && s[c], l && l.apply && Z.acceptData(s) && (t.result = l.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || c && Z.isFunction(r[h]) && !Z.isWindow(r) && (a = r[c], a && (r[c] = null), Z.event.triggered = h, r[h](), Z.event.triggered = void 0, a && (r[c] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [],
                a = B.call(arguments),
                u = (ve.get(this, "events") || {})[e.type] || [],
                c = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; n < a; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ne.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== f() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && Z.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || Z.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Y.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = l;
            else if (!r) return this;
            return 1 === i && (o = r, r = function (e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = l), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Z.event.trigger(e, t, n, !0)
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        qe = /<([\w:]+)/,
        Oe = /<|&#?\w+;/,
        $e = /<(?:script|style|link)/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^$|\/(?:java|ecma)script/i,
        Pe = /^true\/(.*)/,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a), o = v(e), r = 0, i = o.length; r < i; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), r = 0, i = o.length; r < i; r++) m(o[r], s[r]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, u, c, l = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (Oe.test(i)) {
                for (o = o || l.appendChild(t.createElement("div")), s = (qe.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(De, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (l.textContent = "", p = 0; i = f[p++];)
                if ((!r || Z.inArray(i, r) === -1) && (u = Z.contains(i.ownerDocument, i), o = v(l.appendChild(i), "script"), u && g(o), n))
                    for (c = 0; i = o[c++];) Fe.test(i.type || "") && n.push(i);
            return l
        },
        cleanData: function (e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return me(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        },
        html: function (e) {
            return me(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !Re[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(De, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0,
                c = this.length,
                l = this,
                f = c - 1,
                p = e[0],
                g = Z.isFunction(p);
            if (g || c > 1 && "string" == typeof p && !Y.checkClone && Le.test(p)) return this.each(function (n) {
                var r = l.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), h), o = i.length; u < c; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, Z.map(i, d), u = 0; u < o; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(He, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), U.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me, _e = {},
        We = /^margin/,
        Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        Be = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = G.documentElement,
            o = G.createElement("div"),
            s = G.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Y, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == r && t(), r
            },
            reliableMarginRight: function () {
                var t, n = s.appendChild(G.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }
        }))
    }(), Z.swap = function (e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
        Ue = new RegExp("^(" + we + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + we + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Je = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = S(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Xe.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = S(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function () {
                    return E(e, t, r)
                }) : E(e, t, r)
            },
            set: function (e, n, r) {
                var i = r && Be(e);
                return T(e, n, r ? C(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = k(Y.reliableMarginRight, function (e, t) {
        if (t) return Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"])
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ke[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, We.test(e) || (Z.cssHooks[e + t].set = T)
    }), Z.fn.extend({
        css: function (e, t) {
            return me(this, function (e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (r = Be(e), i = t.length; s < i; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return N(this, !0)
        },
        hide: function () {
            return N(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Se(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = j, j.prototype = {
        constructor: j,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = j.prototype.init, Z.fx.step = {};
    var Ye, Ge, Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [O],
        nt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Ze.exec(t),
                    o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(L, {
            tweener: function (e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Z.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    s = function () {
                        var t = L(this, Z.extend({}, e), o);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        s = ve.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || Z.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ve.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function (e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: D("show"),
            slideUp: D("hide"),
            slideToggle: D("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Z.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function () {
            var e, t = 0,
                n = Z.timers;
            for (Ye = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Ye = void 0
        }, Z.fx.timer = function (e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function () {
            Ge || (Ge = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function () {
            clearInterval(Ge), Ge = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function (e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        function () {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", Y.radioValue = "t" === e.value
        }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(he);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Y.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function (e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                c = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(he) || []; u < c; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                c = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(he) || []; u < c; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(he) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else n !== Ce && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = Z.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (n = r[u], (n.selected || u === i) && (Y.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                if (Z.isArray(t)) return e.checked = Z.inArray(Z(e).val(), t) >= 0
            }
        }, Y.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = Z.now(),
        lt = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + e), t
    };
    var ft, pt, ht = /#.*$/,
        dt = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vt = /^(?:GET|HEAD)$/,
        yt = /^\/\//,
        xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bt = {},
        wt = {},
        kt = "*/".concat("*");
    try {
        pt = location.href
    } catch (St) {
        pt = G.createElement("a"), pt.href = "", pt = pt.href
    }
    ft = xt.exec(pt.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt,
            type: "GET",
            isLocal: mt.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, Z.ajaxSettings), t) : H(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(bt),
        ajaxTransport: F(wt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var u, l, v, y, b, k = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = R(f, w, n)), y = M(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, l = y.data, v = y.error, u = !v)) : (v = k, !e && k || (k = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || k) + "", u ? d.resolveWith(p, [l, k, w]) : d.rejectWith(p, [w, k, v]), w.statusCode(m), m = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? l : v]), g.fireWith(p, [w, k]), c && (h.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, c, l, f = Z.ajaxSetup({}, t),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                d = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (d.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(ht, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(he) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
            c = f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (lt.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dt.test(i) ? i.replace(dt, "$1_=" + ct++) : i + (lt.test(i) ? "&" : "?") + "_=" + ct++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : f.accepts["*"]);
            for (l in f.headers) w.setRequestHeader(l, f.headers[l]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](f[l]);
            if (r = P(wt, f, t, w)) {
                w.readyState = 1, c && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (k) {
                    if (!(x < 2)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Tt = /%20/g,
        Ct = /\[\]$/,
        Et = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) _(n, e[n], t, i);
        return r.join("&").replace(Tt, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && jt.test(this.nodeName) && !Nt.test(e) && (this.checked || !Te.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var At = 0,
        Dt = {},
        qt = {
            0: 200,
            1223: 204
        },
        Ot = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function () {
        for (var e in Dt) Dt[e]()
    }), Y.cors = !!Ot && "withCredentials" in Ot, Y.ajax = Ot = !!Ot, Z.ajaxTransport(function (e) {
        var t;
        if (Y.cors || Ot && !e.crossDomain) return {
            send: function (n, r) {
                var i, o = e.xhr(),
                    s = ++At;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete Dt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(qt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Dt[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function () {
                t && t()
            }
        }
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var $t = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = $t.pop() || Z.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Lt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Lt, "$1" + i) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var r = se.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Ft = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Pt = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, c, l = Z.css(e, "position"),
                f = Z(e),
                p = {};
            "static" === l && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = W(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Pt
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function (i) {
            return me(this, function (t, i, o) {
                var s = W(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = k(Y.pixelPosition, function (e, n) {
            if (n) return n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px" : n
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            Z.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function (t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var Ht = e.jQuery,
        Rt = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Ht), Z
    }, typeof t === Ce && (e.jQuery = e.$ = Z), Z
}),
function (e, t) {
    if ("object" == typeof exports && exports) t(exports);
    else {
        var n = {};
        t(n), "function" == typeof define && define.amd ? define(n) : e.Mustache = n
    }
}(this, function (e) {
    function t(e, t) {
        return h.call(e, t)
    }

    function n(e) {
        return !t(d, e)
    }

    function r(e) {
        return "function" == typeof e
    }

    function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function o(e) {
        return String(e).replace(/[&<>"'\/]/g, function (e) {
            return v[e]
        })
    }

    function s(e) {
        if (!m(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
        return [new RegExp(i(e[0]) + "\\s*"), new RegExp("\\s*" + i(e[1]))]
    }

    function a(t, r) {
        function o() {
            if (E && !N)
                for (; C.length;) delete T[C.pop()];
            else C = [];
            E = !1, N = !1
        }
        r = r || e.tags, t = t || "", "string" == typeof r && (r = r.split(x));
        for (var a, f, p, h, d, g, m = s(r), v = new l(t), S = [], T = [], C = [], E = !1, N = !1; !v.eos();) {
            if (a = v.pos, p = v.scanUntil(m[0]))
                for (var j = 0, A = p.length; j < A; ++j) h = p.charAt(j), n(h) ? C.push(T.length) : N = !0, T.push(["text", h, a, a + 1]), a += 1, "\n" === h && o();
            if (!v.scan(m[0])) break;
            if (E = !0, f = v.scan(k) || "name", v.scan(y), "=" === f ? (p = v.scanUntil(b), v.scan(b), v.scanUntil(m[1])) : "{" === f ? (p = v.scanUntil(new RegExp("\\s*" + i("}" + r[1]))), v.scan(w), v.scanUntil(m[1]), f = "&") : p = v.scanUntil(m[1]), !v.scan(m[1])) throw new Error("Unclosed tag at " + v.pos);
            if (d = [f, p, a, v.pos], T.push(d), "#" === f || "^" === f) S.push(d);
            else if ("/" === f) {
                if (g = S.pop(), !g) throw new Error('Unopened section "' + p + '" at ' + a);
                if (g[1] !== p) throw new Error('Unclosed section "' + g[1] + '" at ' + a)
            } else "name" === f || "{" === f || "&" === f ? N = !0 : "=" === f && (m = s(r = p.split(x)))
        }
        if (g = S.pop()) throw new Error('Unclosed section "' + g[1] + '" at ' + v.pos);
        return c(u(T))
    }

    function u(e) {
        for (var t, n, r = [], i = 0, o = e.length; i < o; ++i) t = e[i], t && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
        return r
    }

    function c(e) {
        for (var t, n, r = [], i = r, o = [], s = 0, a = e.length; s < a; ++s) switch (t = e[s], t[0]) {
            case "#":
            case "^":
                i.push(t), o.push(t), i = t[4] = [];
                break;
            case "/":
                n = o.pop(), n[5] = t[2], i = o.length > 0 ? o[o.length - 1][4] : r;
                break;
            default:
                i.push(t)
        }
        return r
    }

    function l(e) {
        this.string = e, this.tail = e, this.pos = 0
    }

    function f(e, t) {
        this.view = null == e ? {} : e, this.cache = {
            ".": this.view
        }, this.parent = t
    }

    function p() {
        this.cache = {}
    }
    var h = RegExp.prototype.test,
        d = /\S/,
        g = Object.prototype.toString,
        m = Array.isArray || function (e) {
            return "[object Array]" === g.call(e)
        },
        v = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        },
        y = /\s*/,
        x = /\s+/,
        b = /\s*=/,
        w = /\s*\}/,
        k = /#|\^|\/|>|\{|&|=|!/;
    l.prototype.eos = function () {
        return "" === this.tail
    }, l.prototype.scan = function (e) {
        var t = this.tail.match(e);
        if (t && 0 === t.index) {
            var n = t[0];
            return this.tail = this.tail.substring(n.length), this.pos += n.length, n
        }
        return ""
    }, l.prototype.scanUntil = function (e) {
        var t, n = this.tail.search(e);
        switch (n) {
            case -1:
                t = this.tail, this.tail = "";
                break;
            case 0:
                t = "";
                break;
            default:
                t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
        }
        return this.pos += t.length, t
    }, f.prototype.push = function (e) {
        return new f(e, this)
    }, f.prototype.lookup = function (e) {
        var t;
        if (e in this.cache) t = this.cache[e];
        else {
            for (var n = this; n;) {
                if (e.indexOf(".") > 0) {
                    t = n.view;
                    for (var i = e.split("."), o = 0; null != t && o < i.length;) t = t[i[o++]]
                } else t = n.view[e];
                if (null != t) break;
                n = n.parent
            }
            this.cache[e] = t
        }
        return r(t) && (t = t.call(this.view)), t
    }, p.prototype.clearCache = function () {
        this.cache = {}
    }, p.prototype.parse = function (e, t) {
        var n = this.cache,
            r = n[e];
        return null == r && (r = n[e] = a(e, t)), r
    }, p.prototype.render = function (e, t, n) {
        var r = this.parse(e),
            i = t instanceof f ? t : new f(t);
        return this.renderTokens(r, i, n, e)
    }, p.prototype.renderTokens = function (t, n, i, o) {
        function s(e) {
            return l.render(e, n, i)
        }
        for (var a, u, c = "", l = this, f = 0, p = t.length; f < p; ++f) switch (a = t[f], a[0]) {
            case "#":
                if (u = n.lookup(a[1]), !u) continue;
                if (m(u))
                    for (var h = 0, d = u.length; h < d; ++h) c += this.renderTokens(a[4], n.push(u[h]), i, o);
                else if ("object" == typeof u || "string" == typeof u) c += this.renderTokens(a[4], n.push(u), i, o);
                else if (r(u)) {
                    if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                    u = u.call(n.view, o.slice(a[3], a[5]), s), null != u && (c += u)
                } else c += this.renderTokens(a[4], n, i, o);
                break;
            case "^":
                u = n.lookup(a[1]), (!u || m(u) && 0 === u.length) && (c += this.renderTokens(a[4], n, i, o));
                break;
            case ">":
                if (!i) continue;
                u = r(i) ? i(a[1]) : i[a[1]], null != u && (c += this.renderTokens(this.parse(u), n, i, u));
                break;
            case "&":
                u = n.lookup(a[1]), null != u && (c += u);
                break;
            case "name":
                u = n.lookup(a[1]), null != u && (c += e.escape(u));
                break;
            case "text":
                c += a[1]
        }
        return c
    }, e.name = "mustache.js", e.version = "0.8.1", e.tags = ["{{", "}}"];
    var S = new p;
    e.clearCache = function () {
        return S.clearCache()
    }, e.parse = function (e, t) {
        return S.parse(e, t)
    }, e.render = function (e, t, n) {
        return S.render(e, t, n)
    }, e.to_html = function (t, n, i, o) {
        var s = e.render(t, n, i);
        return r(o) ? void o(s) : s
    }, e.escape = o, e.Scanner = l, e.Context = f, e.Writer = p
}),
function () {
    var e = function (t) {
        var n = new e.Index;
        return n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer), t && t.call(n, n), n
    };
    e.version = "0.5.7", e.utils = {}, e.utils.warn = function (e) {
            return function (t) {
                e.console && console.warn && console.warn(t)
            }
        }(this), e.EventEmitter = function () {
            this.events = {}
        }, e.EventEmitter.prototype.addListener = function () {
            var e = Array.prototype.slice.call(arguments),
                t = e.pop(),
                n = e;
            if ("function" != typeof t) throw new TypeError("last argument must be a function");
            n.forEach(function (e) {
                this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t)
            }, this)
        }, e.EventEmitter.prototype.removeListener = function (e, t) {
            if (this.hasHandler(e)) {
                var n = this.events[e].indexOf(t);
                this.events[e].splice(n, 1), this.events[e].length || delete this.events[e]
            }
        }, e.EventEmitter.prototype.emit = function (e) {
            if (this.hasHandler(e)) {
                var t = Array.prototype.slice.call(arguments, 1);
                this.events[e].forEach(function (e) {
                    e.apply(void 0, t)
                })
            }
        }, e.EventEmitter.prototype.hasHandler = function (e) {
            return e in this.events
        }, e.tokenizer = function (e) {
            if (!arguments.length || null == e || void 0 == e) return [];
            if (Array.isArray(e)) return e.map(function (e) {
                return e.toLowerCase()
            });
            for (var t = e.toString().replace(/^\s+/, ""), n = t.length - 1; n >= 0; n--)
                if (/\S/.test(t.charAt(n))) {
                    t = t.substring(0, n + 1);
                    break
                } return t.split(/(?:\s+|\-)/).filter(function (e) {
                return !!e
            }).map(function (e) {
                return e.toLowerCase()
            })
        }, e.Pipeline = function () {
            this._stack = []
        }, e.Pipeline.registeredFunctions = {}, e.Pipeline.registerFunction = function (t, n) {
            n in this.registeredFunctions && e.utils.warn("Overwriting existing registered function: " + n), t.label = n, e.Pipeline.registeredFunctions[t.label] = t
        }, e.Pipeline.warnIfFunctionNotRegistered = function (t) {
            var n = t.label && t.label in this.registeredFunctions;
            n || e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
        }, e.Pipeline.load = function (t) {
            var n = new e.Pipeline;
            return t.forEach(function (t) {
                var r = e.Pipeline.registeredFunctions[t];
                if (!r) throw new Error("Cannot load un-registered function: " + t);
                n.add(r)
            }), n
        }, e.Pipeline.prototype.add = function () {
            var t = Array.prototype.slice.call(arguments);
            t.forEach(function (t) {
                e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t)
            }, this)
        }, e.Pipeline.prototype.after = function (t, n) {
            e.Pipeline.warnIfFunctionNotRegistered(n);
            var r = this._stack.indexOf(t) + 1;
            this._stack.splice(r, 0, n)
        }, e.Pipeline.prototype.before = function (t, n) {
            e.Pipeline.warnIfFunctionNotRegistered(n);
            var r = this._stack.indexOf(t);
            this._stack.splice(r, 0, n)
        }, e.Pipeline.prototype.remove = function (e) {
            var t = this._stack.indexOf(e);
            this._stack.splice(t, 1)
        }, e.Pipeline.prototype.run = function (e) {
            for (var t = [], n = e.length, r = this._stack.length, i = 0; i < n; i++) {
                for (var o = e[i], s = 0; s < r && (o = this._stack[s](o, i, e), void 0 !== o); s++);
                void 0 !== o && t.push(o)
            }
            return t
        }, e.Pipeline.prototype.reset = function () {
            this._stack = []
        }, e.Pipeline.prototype.toJSON = function () {
            return this._stack.map(function (t) {
                return e.Pipeline.warnIfFunctionNotRegistered(t), t.label
            })
        }, e.Vector = function () {
            this._magnitude = null, this.list = void 0, this.length = 0
        }, e.Vector.Node = function (e, t, n) {
            this.idx = e, this.val = t, this.next = n
        }, e.Vector.prototype.insert = function (t, n) {
            var r = this.list;
            if (!r) return this.list = new e.Vector.Node(t, n, r), this.length++;
            for (var i = r, o = r.next; void 0 != o;) {
                if (t < o.idx) return i.next = new e.Vector.Node(t, n, o), this.length++;
                i = o, o = o.next
            }
            return i.next = new e.Vector.Node(t, n, o), this.length++
        }, e.Vector.prototype.magnitude = function () {
            if (this._magniture) return this._magnitude;
            for (var e, t = this.list, n = 0; t;) e = t.val, n += e * e, t = t.next;
            return this._magnitude = Math.sqrt(n)
        }, e.Vector.prototype.dot = function (e) {
            for (var t = this.list, n = e.list, r = 0; t && n;) t.idx < n.idx ? t = t.next : t.idx > n.idx ? n = n.next : (r += t.val * n.val, t = t.next, n = n.next);
            return r
        }, e.Vector.prototype.similarity = function (e) {
            return this.dot(e) / (this.magnitude() * e.magnitude())
        }, e.SortedSet = function () {
            this.length = 0, this.elements = []
        }, e.SortedSet.load = function (e) {
            var t = new this;
            return t.elements = e, t.length = e.length, t
        }, e.SortedSet.prototype.add = function () {
            Array.prototype.slice.call(arguments).forEach(function (e) {
                ~this.indexOf(e) || this.elements.splice(this.locationFor(e), 0, e)
            }, this), this.length = this.elements.length
        }, e.SortedSet.prototype.toArray = function () {
            return this.elements.slice()
        }, e.SortedSet.prototype.map = function (e, t) {
            return this.elements.map(e, t)
        }, e.SortedSet.prototype.forEach = function (e, t) {
            return this.elements.forEach(e, t)
        }, e.SortedSet.prototype.indexOf = function (e, t, n) {
            var t = t || 0,
                n = n || this.elements.length,
                r = n - t,
                i = t + Math.floor(r / 2),
                o = this.elements[i];
            return r <= 1 ? o === e ? i : -1 : o < e ? this.indexOf(e, i, n) : o > e ? this.indexOf(e, t, i) : o === e ? i : void 0
        }, e.SortedSet.prototype.locationFor = function (e, t, n) {
            var t = t || 0,
                n = n || this.elements.length,
                r = n - t,
                i = t + Math.floor(r / 2),
                o = this.elements[i];
            if (r <= 1) {
                if (o > e) return i;
                if (o < e) return i + 1
            }
            return o < e ? this.locationFor(e, i, n) : o > e ? this.locationFor(e, t, i) : void 0
        }, e.SortedSet.prototype.intersect = function (t) {
            for (var n = new e.SortedSet, r = 0, i = 0, o = this.length, s = t.length, a = this.elements, u = t.elements;;) {
                if (r > o - 1 || i > s - 1) break;
                a[r] !== u[i] ? a[r] < u[i] ? r++ : a[r] > u[i] && i++ : (n.add(a[r]), r++, i++)
            }
            return n
        }, e.SortedSet.prototype.clone = function () {
            var t = new e.SortedSet;
            return t.elements = this.toArray(), t.length = t.elements.length, t
        }, e.SortedSet.prototype.union = function (e) {
            var t, n, r;
            return this.length >= e.length ? (t = this, n = e) : (t = e, n = this), r = t.clone(), r.add.apply(r, n.toArray()), r
        }, e.SortedSet.prototype.toJSON = function () {
            return this.toArray()
        }, e.Index = function () {
            this._fields = [], this._ref = "id", this.pipeline = new e.Pipeline, this.documentStore = new e.Store, this.tokenStore = new e.TokenStore, this.corpusTokens = new e.SortedSet, this.eventEmitter = new e.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function () {
                this._idfCache = {}
            }.bind(this))
        }, e.Index.prototype.on = function () {
            var e = Array.prototype.slice.call(arguments);
            return this.eventEmitter.addListener.apply(this.eventEmitter, e)
        }, e.Index.prototype.off = function (e, t) {
            return this.eventEmitter.removeListener(e, t)
        }, e.Index.load = function (t) {
            t.version !== e.version && e.utils.warn("version mismatch: current " + e.version + " importing " + t.version);
            var n = new this;
            return n._fields = t.fields, n._ref = t.ref, n.documentStore = e.Store.load(t.documentStore), n.tokenStore = e.TokenStore.load(t.tokenStore), n.corpusTokens = e.SortedSet.load(t.corpusTokens), n.pipeline = e.Pipeline.load(t.pipeline), n
        }, e.Index.prototype.field = function (e, t) {
            var t = t || {},
                n = {
                    name: e,
                    boost: t.boost || 1
                };
            return this._fields.push(n), this
        }, e.Index.prototype.ref = function (e) {
            return this._ref = e, this
        }, e.Index.prototype.add = function (t, n) {
            var r = {},
                i = new e.SortedSet,
                o = t[this._ref],
                n = void 0 === n || n;
            this._fields.forEach(function (n) {
                var o = this.pipeline.run(e.tokenizer(t[n.name]));
                r[n.name] = o, e.SortedSet.prototype.add.apply(i, o)
            }, this), this.documentStore.set(o, i), e.SortedSet.prototype.add.apply(this.corpusTokens, i.toArray());
            for (var s = 0; s < i.length; s++) {
                var a = i.elements[s],
                    u = this._fields.reduce(function (e, t) {
                        var n = r[t.name].length;
                        if (!n) return e;
                        var i = r[t.name].filter(function (e) {
                            return e === a
                        }).length;
                        return e + i / n * t.boost
                    }, 0);
                this.tokenStore.add(a, {
                    ref: o,
                    tf: u
                })
            }
            n && this.eventEmitter.emit("add", t, this)
        }, e.Index.prototype.remove = function (e, t) {
            var n = e[this._ref],
                t = void 0 === t || t;
            if (this.documentStore.has(n)) {
                var r = this.documentStore.get(n);
                this.documentStore.remove(n), r.forEach(function (e) {
                    this.tokenStore.remove(e, n)
                }, this), t && this.eventEmitter.emit("remove", e, this);
            }
        }, e.Index.prototype.update = function (e, t) {
            var t = void 0 === t || t;
            this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this)
        }, e.Index.prototype.idf = function (e) {
            var t = "@" + e;
            if (Object.prototype.hasOwnProperty.call(this._idfCache, t)) return this._idfCache[t];
            var n = this.tokenStore.count(e),
                r = 1;
            return n > 0 && (r = 1 + Math.log(this.tokenStore.length / n)), this._idfCache[t] = r
        }, e.Index.prototype.search = function (t) {
            var n = this.pipeline.run(e.tokenizer(t)),
                r = new e.Vector,
                i = [],
                o = this._fields.reduce(function (e, t) {
                    return e + t.boost
                }, 0),
                s = n.some(function (e) {
                    return this.tokenStore.has(e)
                }, this);
            if (!s) return [];
            n.forEach(function (t, n, s) {
                var a = 1 / s.length * this._fields.length * o,
                    u = this,
                    c = this.tokenStore.expand(t).reduce(function (n, i) {
                        var o = u.corpusTokens.indexOf(i),
                            s = u.idf(i),
                            c = 1,
                            l = new e.SortedSet;
                        if (i !== t) {
                            var f = Math.max(3, i.length - t.length);
                            c = 1 / Math.log(f)
                        }
                        return o > -1 && r.insert(o, a * s * c), Object.keys(u.tokenStore.get(i)).forEach(function (e) {
                            l.add(e)
                        }), n.union(l)
                    }, new e.SortedSet);
                i.push(c)
            }, this);
            var a = i.reduce(function (e, t) {
                return e.intersect(t)
            });
            return a.map(function (e) {
                return {
                    ref: e,
                    score: r.similarity(this.documentVector(e))
                }
            }, this).sort(function (e, t) {
                return t.score - e.score
            })
        }, e.Index.prototype.documentVector = function (t) {
            for (var n = this.documentStore.get(t), r = n.length, i = new e.Vector, o = 0; o < r; o++) {
                var s = n.elements[o],
                    a = this.tokenStore.get(s)[t].tf,
                    u = this.idf(s);
                i.insert(this.corpusTokens.indexOf(s), a * u)
            }
            return i
        }, e.Index.prototype.toJSON = function () {
            return {
                version: e.version,
                fields: this._fields,
                ref: this._ref,
                documentStore: this.documentStore.toJSON(),
                tokenStore: this.tokenStore.toJSON(),
                corpusTokens: this.corpusTokens.toJSON(),
                pipeline: this.pipeline.toJSON()
            }
        }, e.Index.prototype.use = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            t.unshift(this), e.apply(this, t)
        }, e.Store = function () {
            this.store = {}, this.length = 0
        }, e.Store.load = function (t) {
            var n = new this;
            return n.length = t.length, n.store = Object.keys(t.store).reduce(function (n, r) {
                return n[r] = e.SortedSet.load(t.store[r]), n
            }, {}), n
        }, e.Store.prototype.set = function (e, t) {
            this.has(e) || this.length++, this.store[e] = t
        }, e.Store.prototype.get = function (e) {
            return this.store[e]
        }, e.Store.prototype.has = function (e) {
            return e in this.store
        }, e.Store.prototype.remove = function (e) {
            this.has(e) && (delete this.store[e], this.length--)
        }, e.Store.prototype.toJSON = function () {
            return {
                store: this.store,
                length: this.length
            }
        }, e.stemmer = function () {
            var e = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                t = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                n = "[^aeiou]",
                r = "[aeiouy]",
                i = n + "[^aeiouy]*",
                o = r + "[aeiou]*",
                s = "^(" + i + ")?" + o + i,
                a = "^(" + i + ")?" + o + i + "(" + o + ")?$",
                u = "^(" + i + ")?" + o + i + o + i,
                c = "^(" + i + ")?" + r,
                l = new RegExp(s),
                f = new RegExp(u),
                p = new RegExp(a),
                h = new RegExp(c),
                d = /^(.+?)(ss|i)es$/,
                g = /^(.+?)([^s])s$/,
                m = /^(.+?)eed$/,
                v = /^(.+?)(ed|ing)$/,
                y = /.$/,
                x = /(at|bl|iz)$/,
                b = new RegExp("([^aeiouylsz])\\1$"),
                w = new RegExp("^" + i + r + "[^aeiouwxy]$"),
                k = /^(.+?[^aeiou])y$/,
                S = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
                T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                C = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
                E = /^(.+?)(s|t)(ion)$/,
                N = /^(.+?)e$/,
                j = /ll$/,
                A = new RegExp("^" + i + r + "[^aeiouwxy]$"),
                D = function (n) {
                    var r, i, o, s, a, u, c;
                    if (n.length < 3) return n;
                    if (o = n.substr(0, 1), "y" == o && (n = o.toUpperCase() + n.substr(1)), s = d, a = g, s.test(n) ? n = n.replace(s, "$1$2") : a.test(n) && (n = n.replace(a, "$1$2")), s = m, a = v, s.test(n)) {
                        var D = s.exec(n);
                        s = l, s.test(D[1]) && (s = y, n = n.replace(s, ""))
                    } else if (a.test(n)) {
                        var D = a.exec(n);
                        r = D[1], a = h, a.test(r) && (n = r, a = x, u = b, c = w, a.test(n) ? n += "e" : u.test(n) ? (s = y, n = n.replace(s, "")) : c.test(n) && (n += "e"))
                    }
                    if (s = k, s.test(n)) {
                        var D = s.exec(n);
                        r = D[1], n = r + "i"
                    }
                    if (s = S, s.test(n)) {
                        var D = s.exec(n);
                        r = D[1], i = D[2], s = l, s.test(r) && (n = r + e[i])
                    }
                    if (s = T, s.test(n)) {
                        var D = s.exec(n);
                        r = D[1], i = D[2], s = l, s.test(r) && (n = r + t[i])
                    }
                    if (s = C, a = E, s.test(n)) {
                        var D = s.exec(n);
                        r = D[1], s = f, s.test(r) && (n = r)
                    } else if (a.test(n)) {
                        var D = a.exec(n);
                        r = D[1] + D[2], a = f, a.test(r) && (n = r)
                    }
                    if (s = N, s.test(n)) {
                        var D = s.exec(n);
                        r = D[1], s = f, a = p, u = A, (s.test(r) || a.test(r) && !u.test(r)) && (n = r)
                    }
                    return s = j, a = f, s.test(n) && a.test(n) && (s = y, n = n.replace(s, "")), "y" == o && (n = o.toLowerCase() + n.substr(1)), n
                };
            return D
        }(), e.Pipeline.registerFunction(e.stemmer, "stemmer"), e.stopWordFilter = function (t) {
            if (e.stopWordFilter.stopWords.indexOf(t) === -1) return t
        }, e.stopWordFilter.stopWords = new e.SortedSet, e.stopWordFilter.stopWords.length = 119, e.stopWordFilter.stopWords.elements = ["", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"], e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"), e.trimmer = function (e) {
            return e.replace(/^\W+/, "").replace(/\W+$/, "")
        }, e.Pipeline.registerFunction(e.trimmer, "trimmer"), e.TokenStore = function () {
            this.root = {
                docs: {}
            }, this.length = 0
        }, e.TokenStore.load = function (e) {
            var t = new this;
            return t.root = e.root, t.length = e.length, t
        }, e.TokenStore.prototype.add = function (e, t, n) {
            var n = n || this.root,
                r = e[0],
                i = e.slice(1);
            return r in n || (n[r] = {
                docs: {}
            }), 0 === i.length ? (n[r].docs[t.ref] = t, void(this.length += 1)) : this.add(i, t, n[r])
        }, e.TokenStore.prototype.has = function (e) {
            if (!e) return !1;
            for (var t = this.root, n = 0; n < e.length; n++) {
                if (!t[e[n]]) return !1;
                t = t[e[n]]
            }
            return !0
        }, e.TokenStore.prototype.getNode = function (e) {
            if (!e) return {};
            for (var t = this.root, n = 0; n < e.length; n++) {
                if (!t[e[n]]) return {};
                t = t[e[n]]
            }
            return t
        }, e.TokenStore.prototype.get = function (e, t) {
            return this.getNode(e, t).docs || {}
        }, e.TokenStore.prototype.count = function (e, t) {
            return Object.keys(this.get(e, t)).length
        }, e.TokenStore.prototype.remove = function (e, t) {
            if (e) {
                for (var n = this.root, r = 0; r < e.length; r++) {
                    if (!(e[r] in n)) return;
                    n = n[e[r]]
                }
                delete n.docs[t]
            }
        }, e.TokenStore.prototype.expand = function (e, t) {
            var n = this.getNode(e),
                r = n.docs || {},
                t = t || [];
            return Object.keys(r).length && t.push(e), Object.keys(n).forEach(function (n) {
                "docs" !== n && t.concat(this.expand(e + n, t))
            }, this), t
        }, e.TokenStore.prototype.toJSON = function () {
            return {
                root: this.root,
                length: this.length
            }
        },
        function (e, t) {
            "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.lunr = t()
        }(this, function () {
            return e
        })
}();
var _createClass = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    searchPlugin = function () {
        var e = function (e) {
                var t = void 0;
                return function () {
                    var n = Array.prototype.slice.call(arguments),
                        r = this;
                    clearTimeout(t), t = setTimeout(function () {
                        e.apply(r, n)
                    }, 100)
                }
            },
            t = function () {
                function t(e, n) {
                    var r = this;
                    _classCallCheck(this, t), this.search_elem = e, this.quickSearchResults = $(n.quickSearchResults), this.quickSearchEntries = $(n.quickSearchEntries, this.quickSearchResults), this.searchResults = $(n.searchResults), this.searchEntries = $(n.searchEntries, this.searchResults), this.indexDataUrl = n.indexUrl, this.quickSearchTemplate = this.compileTemplate($(n.quickSearchTemplate)), this.searchTemplate = this.compileTemplate($(n.searchTemplate)), this.searchMoreButton = $(".search-more-button"), this.searchSpinner = $(".search-spinner"), this.searchHeader = $(".search-header"), this.searchWorker = new Worker("/assets/javascripts/search_worker.js"), this.loadIndexData(function (e) {
                        e.type = {
                            index: !0
                        }, r.searchWorker.postMessage(e)
                    }), this.bindQuicksearchKeypress(), this.bindQuicksearchBlur(), this.bindQuicksearchFocus(), this.searchWorker.addEventListener("message", function (e) {
                        e.data.type.indexed ? r.populateSearchFromQuery() : e.data.type.quicksearch ? r.displayQuicksearch(e.data.query, e.data.results) : r.displaySearchResults(e.data.query, e.data.results)
                    }), this.searchMoreButton.on("click", function (e) {
                        r.page ? r.page = r.page + 1 : r.page = 2
                    })
                }
                return _createClass(t, [{
                    key: "compileTemplate",
                    value: function (e) {
                        var t = e.text();
                        return Mustache.parse(t, "[[ ]]"),
                            function (e, n) {
                                return Mustache.render(t, e, n)
                            }
                    }
                }, {
                    key: "loadIndexData",
                    value: function (e) {
                        $.getJSON(this.indexDataUrl, e)
                    }
                }, {
                    key: "bindQuicksearchKeypress",
                    value: function () {
                        var t = this,
                            n = this.search_elem.val();
                        this.search_elem.bind("keyup", e(function () {
                            var e = t.search_elem.val();
                            t.search(e, e !== n || null), n = e
                        }))
                    }
                }, {
                    key: "bindQuicksearchFocus",
                    value: function () {
                        var t = this;
                        this.search_elem.bind("focus", e(function () {
                            t.search_elem.val() && t.quickSearchResults.show()
                        }))
                    }
                }, {
                    key: "bindQuicksearchBlur",
                    value: function () {
                        var t = this;
                        this.search_elem.bind("blur", e(function () {
                            t.quickSearchResults.hide()
                        }))
                    }
                }, {
                    key: "bindQuicksearchMousedown",
                    value: function () {
                        $(".autocomplete-results a").each(function (e, t) {
                            $(t).bind("mousedown", function (e) {
                                e.preventDefault()
                            })
                        })
                    }
                }, {
                    key: "search",
                    value: function (e, t) {
                        this.searchWorker.postMessage({
                            query: e,
                            quicksearch: t,
                            isSearchPage: this.isSearchPage(),
                            type: {
                                search: !0
                            }
                        })
                    }
                }, {
                    key: "displayQuicksearch",
                    value: function (e, t) {
                        if (this.quickSearchEntries.empty(), t.length > 0) {
                            t = t.slice(0, 10), this.quickSearchEntries.append(this.quickSearchTemplate({
                                entries: t
                            })), this.quickSearchResults.show();
                            var n = $(".quicksearch-seemore").attr("href");
                            $(".quicksearch-seemore").attr("href", "" + n + e), this.bindQuicksearchMousedown()
                        }
                    }
                }, {
                    key: "displaySearchResults",
                    value: function (e, t) {
                        this.searchEntries.empty(), $(".search-query").text(e), 0 === t.length ? (this.searchSpinner.addClass("hidden"), this.searchHeader.find(".message").text("No results for"), this.searchHeader.find(".results").text(e)) : (this.entries = t, this.searchSpinner.addClass("hidden"), this.searchMoreButton.removeClass("hidden"), this.searchHeader.find(".message").text("Search results for"), this.searchHeader.find(".results").text(e), this.populateEntries())
                    }
                }, {
                    key: "populateEntries",
                    value: function () {
                        var e = 50 * (this.page || 1),
                            t = this.entries.slice(e - 50, e - 1);
                        this.entries.length < e && this.searchMoreButton.addClass("hidden"), this.searchEntries.append(this.searchTemplate({
                            entries: t
                        }))
                    }
                }, {
                    key: "populateSearchFromQuery",
                    value: function () {
                        if (this.isSearchPage()) {
                            var e = window.location.search.match(/[?&]q=([^&]+)/);
                            if (e) {
                                var t = decodeURIComponent(e[1].replace(/\+/g, " "));
                                this.search_elem.val(t), this.search(t, !1)
                            } else this.search(" ", !1)
                        }
                    }
                }, {
                    key: "isSearchPage",
                    value: function () {
                        return window.location.pathname.match(/\/search(?:\/|$)/)
                    }
                }]), t
            }();
        $.fn.lunrSearch = function (e) {
            var n = $.extend({}, $.fn.lunrSearch.defaults, e);
            return new t(this, n), this
        }
    };
searchPlugin(jQuery);
var anchorForId = function (e) {
        var t = document.createElement("a");
        return t.className = "anchor-link", t.href = "#" + e, t.innerHTML = '<span class="octicon octicon-link"></span>', t
    },
    linkifyAnchors = function (e, t) {
        for (var n = t.getElementsByTagName("h" + e), r = 0; r < n.length; r++) {
            var i = n[r];
            "undefined" != typeof i.id && "" !== i.id && i.appendChild(anchorForId(i.id))
        }
    };
window.onload = function () {
        var e = document.getElementsByClassName("document-content")[0];
        if (e)
            for (var t = 1; t <= 6; t++) linkifyAnchors(t, e)
    },
    function () {
        var e = $("body");
        window.detectPlatform = function () {
            $("body").addClass("platform-switch"), navigator.userAgent.indexOf("Win") !== -1 ? $("body").addClass("platform-windows") : navigator.userAgent.indexOf("Mac") !== -1 ? $("body").addClass("platform-mac") : navigator.userAgent.indexOf("Linux") !== -1 ? $("body").addClass("platform-linux") : $("body").addClass("platform-all")
        };
        var t = "platform-",
            n = ["mac", "windows", "linux"],
            r = function (e) {
                return t + e
            },
            i = $(n).map(function (e, t) {
                return r(t)
            });
        window.updateArticlePlatform = function (t) {
            var n = r(t);
            $(i).each(function (t, r) {
                r === n ? e.addClass(r) : e.removeClass(r);
                var i = $("#platform-nav ." + r);
                r === n ? i.addClass("selected") : i.removeClass("selected")
            })
        }, window.initPlatformNav = function () {
            var e = $("#platform-nav");
            e.addClass("show"), e.find("a").click(function () {
                updateArticlePlatform($(this).data("platform"))
            })
        }, window.setupSwitcher = function () {
            detectPlatform();
            var o = $(".document-content"),
                s = {},
                a = 0;
            if ($(i).each(function (e, t) {
                    o.find("." + t).length > 0 && (s[t] = !0, a++)
                }), a > 0) {
                initPlatformNav(), $(i).each(function (e, t) {
                    s[t] || $("#platform-nav li." + t).addClass("hidden")
                });
                var u = "all";
                e = $("body");
                var c = location.hash.indexOf(t);
                if (c >= 0) {
                    var l = c + t.length;
                    u = location.hash.substring(l)
                } else e.hasClass(r("all")) || $(n).each(function (t, n) {
                    e.hasClass(r(n)) && (u = n)
                });
                updateArticlePlatform(u)
            }
        }, $(function () {
            setupSwitcher()
        })
    }();