var AyahPublisherOptions = {
    "publisher_key": "d5EB8YvEPr36u1V4RtyWlCjYU1BzTZ2F6RNCNg76",
    "AYAH_VERSION": "2.0",
    "log_url": "//logger.areyouahuman.com/log?",
    "iframe_url": "//n-cdn.areyouahuman.com/kitten",
    "ga_iframe_url": "//n-distil.areyouahuman.com/kitten",
    "events_url": "//n-cdn-origin.areyouahuman.com/events",
    "proxy_events_url": "//n-distil.areyouahuman.com/events",
    "send_url": "//n-cdn.areyouahuman.com/observe?",
    "google_analytics_url": "//n-distil.areyouahuman.com/ga",
    "google_analytics": {
        "poll_interval_ms": 200,
        "max_polls": 100,
        "collect_uri": "https://www.google-analytics.com/collect",
        "ttl_cookie_details": {
            "base_name": "ayah_ga_sync_",
            "domain": ".areyouahuman.com",
            "maxAge": 600000
        }
    },
    "script_param_regexp_str": "(areyouahuman|distiltag).com/.*[?&](GA_TID|GA_CDI|AYAH_[LFP][0-4])=",
    "force_proxy": false,
    "cookiesync": true,
    "no_synchronous_event_calls": false,
    "enable_debug": false,
    "enable_debug_verbose": false,
    "defense_mode": false,
    "defense_cookies": {
        "uuid": {
            "name": "D_DUID",
            "max_age": 31536000000
        },
        "token": {
            "name": "D_TOKEN",
            "max_age": 604800000
        }
    },
    "throttling_rate": 0
};
(function() {
    function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    }
    return e
})()({
    1: [function(require, module, exports) {
        (function(global) {
            ! function(t) {
                "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).pako = t()
            }(function() {
                return function t(e, a, n) {
                    function r(s, h) {
                        if (!a[s]) {
                            if (!e[s]) {
                                var l = "function" == typeof require && require;
                                if (!h && l) return l(s, !0);
                                if (i) return i(s, !0);
                                var o = new Error("Cannot find module '" + s + "'");
                                throw o.code = "MODULE_NOT_FOUND", o
                            }
                            var _ = a[s] = {
                                exports: {}
                            };
                            e[s][0].call(_.exports, function(t) {
                                var a = e[s][1][t];
                                return r(a || t)
                            }, _, _.exports, t, e, a, n)
                        }
                        return a[s].exports
                    }
                    for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
                    return r
                }({
                    1: [function(t, e, a) {
                        "use strict";

                        function n(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                        a.assign = function(t) {
                            for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                                var a = e.shift();
                                if (a) {
                                    if ("object" != typeof a) throw new TypeError(a + "must be non-object");
                                    for (var r in a) n(a, r) && (t[r] = a[r])
                                }
                            }
                            return t
                        }, a.shrinkBuf = function(t, e) {
                            return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
                        };
                        var i = {
                                arraySet: function(t, e, a, n, r) {
                                    if (e.subarray && t.subarray) t.set(e.subarray(a, a + n), r);
                                    else
                                        for (var i = 0; n > i; i++) t[r + i] = e[a + i]
                                },
                                flattenChunks: function(t) {
                                    var e, a, n, r, i, s;
                                    for (n = 0, e = 0, a = t.length; a > e; e++) n += t[e].length;
                                    for (s = new Uint8Array(n), r = 0, e = 0, a = t.length; a > e; e++) i = t[e], s.set(i, r), r += i.length;
                                    return s
                                }
                            },
                            s = {
                                arraySet: function(t, e, a, n, r) {
                                    for (var i = 0; n > i; i++) t[r + i] = e[a + i]
                                },
                                flattenChunks: function(t) {
                                    return [].concat.apply([], t)
                                }
                            };
                        a.setTyped = function(t) {
                            t ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, i)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, s))
                        }, a.setTyped(r)
                    }, {}],
                    2: [function(t, e, a) {
                        "use strict";

                        function n(t, e) {
                            if (65537 > e && (t.subarray && s || !t.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(t, e));
                            for (var a = "", n = 0; e > n; n++) a += String.fromCharCode(t[n]);
                            return a
                        }
                        var r = t("./common"),
                            i = !0,
                            s = !0;
                        try {
                            String.fromCharCode.apply(null, [0])
                        } catch (t) {
                            i = !1
                        }
                        try {
                            String.fromCharCode.apply(null, new Uint8Array(1))
                        } catch (t) {
                            s = !1
                        }
                        for (var h = new r.Buf8(256), l = 0; 256 > l; l++) h[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
                        h[254] = h[254] = 1, a.string2buf = function(t) {
                            var e, a, n, i, s, h = t.length,
                                l = 0;
                            for (i = 0; h > i; i++) 55296 == (64512 & (a = t.charCodeAt(i))) && h > i + 1 && 56320 == (64512 & (n = t.charCodeAt(i + 1))) && (a = 65536 + (a - 55296 << 10) + (n - 56320), i++), l += 128 > a ? 1 : 2048 > a ? 2 : 65536 > a ? 3 : 4;
                            for (e = new r.Buf8(l), s = 0, i = 0; l > s; i++) 55296 == (64512 & (a = t.charCodeAt(i))) && h > i + 1 && 56320 == (64512 & (n = t.charCodeAt(i + 1))) && (a = 65536 + (a - 55296 << 10) + (n - 56320), i++), 128 > a ? e[s++] = a : 2048 > a ? (e[s++] = 192 | a >>> 6, e[s++] = 128 | 63 & a) : 65536 > a ? (e[s++] = 224 | a >>> 12, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a) : (e[s++] = 240 | a >>> 18, e[s++] = 128 | a >>> 12 & 63, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a);
                            return e
                        }, a.buf2binstring = function(t) {
                            return n(t, t.length)
                        }, a.binstring2buf = function(t) {
                            for (var e = new r.Buf8(t.length), a = 0, n = e.length; n > a; a++) e[a] = t.charCodeAt(a);
                            return e
                        }, a.buf2string = function(t, e) {
                            var a, r, i, s, l = e || t.length,
                                o = new Array(2 * l);
                            for (r = 0, a = 0; l > a;)
                                if ((i = t[a++]) < 128) o[r++] = i;
                                else if ((s = h[i]) > 4) o[r++] = 65533, a += s - 1;
                            else {
                                for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && l > a;) i = i << 6 | 63 & t[a++], s--;
                                s > 1 ? o[r++] = 65533 : 65536 > i ? o[r++] = i : (i -= 65536, o[r++] = 55296 | i >> 10 & 1023, o[r++] = 56320 | 1023 & i)
                            }
                            return n(o, r)
                        }, a.utf8border = function(t, e) {
                            var a;
                            for ((e = e || t.length) > t.length && (e = t.length), a = e - 1; a >= 0 && 128 == (192 & t[a]);) a--;
                            return 0 > a ? e : 0 === a ? e : a + h[t[a]] > e ? a : e
                        }
                    }, {
                        "./common": 1
                    }],
                    3: [function(t, e, a) {
                        "use strict";
                        e.exports = function(t, e, a, n) {
                            for (var r = 65535 & t | 0, i = t >>> 16 & 65535 | 0, s = 0; 0 !== a;) {
                                a -= s = a > 2e3 ? 2e3 : a;
                                do i = i + (r = r + e[n++] | 0) | 0; while (--s);
                                r %= 65521, i %= 65521
                            }
                            return r | i << 16 | 0
                        }
                    }, {}],
                    4: [function(t, e, a) {
                        "use strict";
                        var n = function() {
                            for (var t, e = [], a = 0; 256 > a; a++) {
                                t = a;
                                for (var n = 0; 8 > n; n++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                                e[a] = t
                            }
                            return e
                        }();
                        e.exports = function(t, e, a, r) {
                            var i = n,
                                s = r + a;
                            t ^= -1;
                            for (var h = r; s > h; h++) t = t >>> 8 ^ i[255 & (t ^ e[h])];
                            return -1 ^ t
                        }
                    }, {}],
                    5: [function(t, e, a) {
                        "use strict";

                        function n(t, e) {
                            return t.msg = S[e], e
                        }

                        function r(t) {
                            return (t << 1) - (t > 4 ? 9 : 0)
                        }

                        function i(t) {
                            for (var e = t.length; --e >= 0;) t[e] = 0
                        }

                        function s(t) {
                            var e = t.state,
                                a = e.pending;
                            a > t.avail_out && (a = t.avail_out), 0 !== a && (x.arraySet(t.output, e.pending_buf, e.pending_out, a, t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0))
                        }

                        function h(t, e) {
                            B._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, s(t.strm)
                        }

                        function l(t, e) {
                            t.pending_buf[t.pending++] = e
                        }

                        function o(t, e) {
                            t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
                        }

                        function _(t, e, a, n) {
                            var r = t.avail_in;
                            return r > n && (r = n), 0 === r ? 0 : (t.avail_in -= r, x.arraySet(e, t.input, t.next_in, r, a), 1 === t.state.wrap ? t.adler = A(t.adler, e, r, a) : 2 === t.state.wrap && (t.adler = C(t.adler, e, r, a)), t.next_in += r, t.total_in += r, r)
                        }

                        function d(t, e) {
                            var a, n, r = t.max_chain_length,
                                i = t.strstart,
                                s = t.prev_length,
                                h = t.nice_match,
                                l = t.strstart > t.w_size - nt ? t.strstart - (t.w_size - nt) : 0,
                                o = t.window,
                                _ = t.w_mask,
                                d = t.prev,
                                u = t.strstart + at,
                                f = o[i + s - 1],
                                c = o[i + s];
                            t.prev_length >= t.good_match && (r >>= 2), h > t.lookahead && (h = t.lookahead);
                            do
                                if (a = e, o[a + s] === c && o[a + s - 1] === f && o[a] === o[i] && o[++a] === o[i + 1]) {
                                    i += 2, a++;
                                    do; while (o[++i] === o[++a] && o[++i] === o[++a] && o[++i] === o[++a] && o[++i] === o[++a] && o[++i] === o[++a] && o[++i] === o[++a] && o[++i] === o[++a] && o[++i] === o[++a] && u > i);
                                    if (n = at - (u - i), i = u - at, n > s) {
                                        if (t.match_start = e, s = n, n >= h) break;
                                        f = o[i + s - 1], c = o[i + s]
                                    }
                                }
                            while ((e = d[e & _]) > l && 0 != --r);
                            return s <= t.lookahead ? s : t.lookahead
                        }

                        function u(t) {
                            var e, a, n, r, i, s = t.w_size;
                            do {
                                if (r = t.window_size - t.lookahead - t.strstart, t.strstart >= s + (s - nt)) {
                                    x.arraySet(t.window, t.window, s, s, 0), t.match_start -= s, t.strstart -= s, t.block_start -= s, e = a = t.hash_size;
                                    do n = t.head[--e], t.head[e] = n >= s ? n - s : 0; while (--a);
                                    e = a = s;
                                    do n = t.prev[--e], t.prev[e] = n >= s ? n - s : 0; while (--a);
                                    r += s
                                }
                                if (0 === t.strm.avail_in) break;
                                if (a = _(t.strm, t.window, t.strstart + t.lookahead, r), t.lookahead += a, t.lookahead + t.insert >= et)
                                    for (i = t.strstart - t.insert, t.ins_h = t.window[i], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[i + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[i + et - 1]) & t.hash_mask, t.prev[i & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = i, i++, t.insert--, !(t.lookahead + t.insert < et)););
                            } while (t.lookahead < nt && 0 !== t.strm.avail_in)
                        }

                        function f(t, e) {
                            for (var a, n;;) {
                                if (t.lookahead < nt) {
                                    if (u(t), t.lookahead < nt && e === j) return ut;
                                    if (0 === t.lookahead) break
                                }
                                if (a = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== a && t.strstart - a <= t.w_size - nt && (t.match_length = d(t, a)), t.match_length >= et)
                                    if (n = B._tr_tally(t, t.strstart - t.match_start, t.match_length - et), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= et) {
                                        t.match_length--;
                                        do t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart; while (0 != --t.match_length);
                                        t.strstart++
                                    } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                                else n = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                                if (n && (h(t, !1), 0 === t.strm.avail_out)) return ut
                            }
                            return t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === D ? (h(t, !0), 0 === t.strm.avail_out ? ct : pt) : t.last_lit && (h(t, !1), 0 === t.strm.avail_out) ? ut : ft
                        }

                        function c(t, e) {
                            for (var a, n, r;;) {
                                if (t.lookahead < nt) {
                                    if (u(t), t.lookahead < nt && e === j) return ut;
                                    if (0 === t.lookahead) break
                                }
                                if (a = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = et - 1, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - nt && (t.match_length = d(t, a), t.match_length <= 5 && (t.strategy === H || t.match_length === et && t.strstart - t.match_start > 4096) && (t.match_length = et - 1)), t.prev_length >= et && t.match_length <= t.prev_length) {
                                    r = t.strstart + t.lookahead - et, n = B._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - et), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                                    do ++t.strstart <= r && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart); while (0 != --t.prev_length);
                                    if (t.match_available = 0, t.match_length = et - 1, t.strstart++, n && (h(t, !1), 0 === t.strm.avail_out)) return ut
                                } else if (t.match_available) {
                                    if ((n = B._tr_tally(t, 0, t.window[t.strstart - 1])) && h(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return ut
                                } else t.match_available = 1, t.strstart++, t.lookahead--
                            }
                            return t.match_available && (n = B._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === D ? (h(t, !0), 0 === t.strm.avail_out ? ct : pt) : t.last_lit && (h(t, !1), 0 === t.strm.avail_out) ? ut : ft
                        }

                        function p(t, e) {
                            for (var a, n, r, i, s = t.window;;) {
                                if (t.lookahead <= at) {
                                    if (u(t), t.lookahead <= at && e === j) return ut;
                                    if (0 === t.lookahead) break
                                }
                                if (t.match_length = 0, t.lookahead >= et && t.strstart > 0 && (r = t.strstart - 1, (n = s[r]) === s[++r] && n === s[++r] && n === s[++r])) {
                                    i = t.strstart + at;
                                    do; while (n === s[++r] && n === s[++r] && n === s[++r] && n === s[++r] && n === s[++r] && n === s[++r] && n === s[++r] && n === s[++r] && i > r);
                                    t.match_length = at - (i - r), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                                }
                                if (t.match_length >= et ? (a = B._tr_tally(t, 1, t.match_length - et), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (h(t, !1), 0 === t.strm.avail_out)) return ut
                            }
                            return t.insert = 0, e === D ? (h(t, !0), 0 === t.strm.avail_out ? ct : pt) : t.last_lit && (h(t, !1), 0 === t.strm.avail_out) ? ut : ft
                        }

                        function g(t, e) {
                            for (var a;;) {
                                if (0 === t.lookahead && (u(t), 0 === t.lookahead)) {
                                    if (e === j) return ut;
                                    break
                                }
                                if (t.match_length = 0, a = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (h(t, !1), 0 === t.strm.avail_out)) return ut
                            }
                            return t.insert = 0, e === D ? (h(t, !0), 0 === t.strm.avail_out ? ct : pt) : t.last_lit && (h(t, !1), 0 === t.strm.avail_out) ? ut : ft
                        }

                        function m(t, e, a, n, r) {
                            this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = n, this.func = r
                        }

                        function b(t) {
                            t.window_size = 2 * t.w_size, i(t.head), t.max_lazy_match = z[t.level].max_lazy, t.good_match = z[t.level].good_length, t.nice_match = z[t.level].nice_length, t.max_chain_length = z[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = et - 1, t.match_available = 0, t.ins_h = 0
                        }

                        function w() {
                            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = J, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new x.Buf16(2 * $), this.dyn_dtree = new x.Buf16(2 * (2 * Y + 1)), this.bl_tree = new x.Buf16(2 * (2 * Z + 1)), i(this.dyn_ltree), i(this.dyn_dtree), i(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new x.Buf16(tt + 1), this.heap = new x.Buf16(2 * X + 1), i(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new x.Buf16(2 * X + 1), i(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                        }

                        function v(t) {
                            var e;
                            return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = G, e = t.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? it : _t, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = j, B._tr_init(e), O) : n(t, T)
                        }

                        function y(t) {
                            var e = v(t);
                            return e === O && b(t.state), e
                        }

                        function k(t, e, a, r, i, s) {
                            if (!t) return T;
                            var h = 1;
                            if (e === R && (e = 6), 0 > r ? (h = 0, r = -r) : r > 15 && (h = 2, r -= 16), 1 > i || i > Q || a !== J || 8 > r || r > 15 || 0 > e || e > 9 || 0 > s || s > M) return n(t, T);
                            8 === r && (r = 9);
                            var l = new w;
                            return t.state = l, l.strm = t, l.wrap = h, l.gzhead = null, l.w_bits = r, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = i + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + et - 1) / et), l.window = new x.Buf8(2 * l.w_size), l.head = new x.Buf16(l.hash_size), l.prev = new x.Buf16(l.w_size), l.lit_bufsize = 1 << i + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new x.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = e, l.strategy = s, l.method = a, y(t)
                        }
                        var z, x = t("../utils/common"),
                            B = t("./trees"),
                            A = t("./adler32"),
                            C = t("./crc32"),
                            S = t("./messages"),
                            j = 0,
                            E = 1,
                            U = 3,
                            D = 4,
                            I = 5,
                            O = 0,
                            q = 1,
                            T = -2,
                            L = -3,
                            N = -5,
                            R = -1,
                            H = 1,
                            F = 2,
                            K = 3,
                            M = 4,
                            P = 0,
                            G = 2,
                            J = 8,
                            Q = 9,
                            V = 15,
                            W = 8,
                            X = 286,
                            Y = 30,
                            Z = 19,
                            $ = 2 * X + 1,
                            tt = 15,
                            et = 3,
                            at = 258,
                            nt = at + et + 1,
                            rt = 32,
                            it = 42,
                            st = 69,
                            ht = 73,
                            lt = 91,
                            ot = 103,
                            _t = 113,
                            dt = 666,
                            ut = 1,
                            ft = 2,
                            ct = 3,
                            pt = 4,
                            gt = 3;
                        z = [new m(0, 0, 0, 0, function(t, e) {
                            var a = 65535;
                            for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);;) {
                                if (t.lookahead <= 1) {
                                    if (u(t), 0 === t.lookahead && e === j) return ut;
                                    if (0 === t.lookahead) break
                                }
                                t.strstart += t.lookahead, t.lookahead = 0;
                                var n = t.block_start + a;
                                if ((0 === t.strstart || t.strstart >= n) && (t.lookahead = t.strstart - n, t.strstart = n, h(t, !1), 0 === t.strm.avail_out)) return ut;
                                if (t.strstart - t.block_start >= t.w_size - nt && (h(t, !1), 0 === t.strm.avail_out)) return ut
                            }
                            return t.insert = 0, e === D ? (h(t, !0), 0 === t.strm.avail_out ? ct : pt) : (t.strstart > t.block_start && (h(t, !1), t.strm.avail_out), ut)
                        }), new m(4, 4, 8, 4, f), new m(4, 5, 16, 8, f), new m(4, 6, 32, 32, f), new m(4, 4, 16, 16, c), new m(8, 16, 32, 32, c), new m(8, 16, 128, 128, c), new m(8, 32, 128, 256, c), new m(32, 128, 258, 1024, c), new m(32, 258, 258, 4096, c)], a.deflateInit = function(t, e) {
                            return k(t, e, J, V, W, P)
                        }, a.deflateInit2 = k, a.deflateReset = y, a.deflateResetKeep = v, a.deflateSetHeader = function(t, e) {
                            return t && t.state ? 2 !== t.state.wrap ? T : (t.state.gzhead = e, O) : T
                        }, a.deflate = function(t, e) {
                            var a, h, _, d;
                            if (!t || !t.state || e > I || 0 > e) return t ? n(t, T) : T;
                            if (h = t.state, !t.output || !t.input && 0 !== t.avail_in || h.status === dt && e !== D) return n(t, 0 === t.avail_out ? N : T);
                            if (h.strm = t, a = h.last_flush, h.last_flush = e, h.status === it)
                                if (2 === h.wrap) t.adler = 0, l(h, 31), l(h, 139), l(h, 8), h.gzhead ? (l(h, (h.gzhead.text ? 1 : 0) + (h.gzhead.hcrc ? 2 : 0) + (h.gzhead.extra ? 4 : 0) + (h.gzhead.name ? 8 : 0) + (h.gzhead.comment ? 16 : 0)), l(h, 255 & h.gzhead.time), l(h, h.gzhead.time >> 8 & 255), l(h, h.gzhead.time >> 16 & 255), l(h, h.gzhead.time >> 24 & 255), l(h, 9 === h.level ? 2 : h.strategy >= F || h.level < 2 ? 4 : 0), l(h, 255 & h.gzhead.os), h.gzhead.extra && h.gzhead.extra.length && (l(h, 255 & h.gzhead.extra.length), l(h, h.gzhead.extra.length >> 8 & 255)), h.gzhead.hcrc && (t.adler = C(t.adler, h.pending_buf, h.pending, 0)), h.gzindex = 0, h.status = st) : (l(h, 0), l(h, 0), l(h, 0), l(h, 0), l(h, 0), l(h, 9 === h.level ? 2 : h.strategy >= F || h.level < 2 ? 4 : 0), l(h, gt), h.status = _t);
                                else {
                                    var u = J + (h.w_bits - 8 << 4) << 8;
                                    u |= (h.strategy >= F || h.level < 2 ? 0 : h.level < 6 ? 1 : 6 === h.level ? 2 : 3) << 6, 0 !== h.strstart && (u |= rt), u += 31 - u % 31, h.status = _t, o(h, u), 0 !== h.strstart && (o(h, t.adler >>> 16), o(h, 65535 & t.adler)), t.adler = 1
                                }
                            if (h.status === st)
                                if (h.gzhead.extra) {
                                    for (_ = h.pending; h.gzindex < (65535 & h.gzhead.extra.length) && (h.pending !== h.pending_buf_size || (h.gzhead.hcrc && h.pending > _ && (t.adler = C(t.adler, h.pending_buf, h.pending - _, _)), s(t), _ = h.pending, h.pending !== h.pending_buf_size));) l(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
                                    h.gzhead.hcrc && h.pending > _ && (t.adler = C(t.adler, h.pending_buf, h.pending - _, _)), h.gzindex === h.gzhead.extra.length && (h.gzindex = 0, h.status = ht)
                                } else h.status = ht;
                            if (h.status === ht)
                                if (h.gzhead.name) {
                                    _ = h.pending;
                                    do {
                                        if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > _ && (t.adler = C(t.adler, h.pending_buf, h.pending - _, _)), s(t), _ = h.pending, h.pending === h.pending_buf_size)) {
                                            d = 1;
                                            break
                                        }
                                        d = h.gzindex < h.gzhead.name.length ? 255 & h.gzhead.name.charCodeAt(h.gzindex++) : 0, l(h, d)
                                    } while (0 !== d);
                                    h.gzhead.hcrc && h.pending > _ && (t.adler = C(t.adler, h.pending_buf, h.pending - _, _)), 0 === d && (h.gzindex = 0, h.status = lt)
                                } else h.status = lt;
                            if (h.status === lt)
                                if (h.gzhead.comment) {
                                    _ = h.pending;
                                    do {
                                        if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > _ && (t.adler = C(t.adler, h.pending_buf, h.pending - _, _)), s(t), _ = h.pending, h.pending === h.pending_buf_size)) {
                                            d = 1;
                                            break
                                        }
                                        d = h.gzindex < h.gzhead.comment.length ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++) : 0, l(h, d)
                                    } while (0 !== d);
                                    h.gzhead.hcrc && h.pending > _ && (t.adler = C(t.adler, h.pending_buf, h.pending - _, _)), 0 === d && (h.status = ot)
                                } else h.status = ot;
                            if (h.status === ot && (h.gzhead.hcrc ? (h.pending + 2 > h.pending_buf_size && s(t), h.pending + 2 <= h.pending_buf_size && (l(h, 255 & t.adler), l(h, t.adler >> 8 & 255), t.adler = 0, h.status = _t)) : h.status = _t), 0 !== h.pending) {
                                if (s(t), 0 === t.avail_out) return h.last_flush = -1, O
                            } else if (0 === t.avail_in && r(e) <= r(a) && e !== D) return n(t, N);
                            if (h.status === dt && 0 !== t.avail_in) return n(t, N);
                            if (0 !== t.avail_in || 0 !== h.lookahead || e !== j && h.status !== dt) {
                                var f = h.strategy === F ? g(h, e) : h.strategy === K ? p(h, e) : z[h.level].func(h, e);
                                if (f !== ct && f !== pt || (h.status = dt), f === ut || f === ct) return 0 === t.avail_out && (h.last_flush = -1), O;
                                if (f === ft && (e === E ? B._tr_align(h) : e !== I && (B._tr_stored_block(h, 0, 0, !1), e === U && (i(h.head), 0 === h.lookahead && (h.strstart = 0, h.block_start = 0, h.insert = 0))), s(t), 0 === t.avail_out)) return h.last_flush = -1, O
                            }
                            return e !== D ? O : h.wrap <= 0 ? q : (2 === h.wrap ? (l(h, 255 & t.adler), l(h, t.adler >> 8 & 255), l(h, t.adler >> 16 & 255), l(h, t.adler >> 24 & 255), l(h, 255 & t.total_in), l(h, t.total_in >> 8 & 255), l(h, t.total_in >> 16 & 255), l(h, t.total_in >> 24 & 255)) : (o(h, t.adler >>> 16), o(h, 65535 & t.adler)), s(t), h.wrap > 0 && (h.wrap = -h.wrap), 0 !== h.pending ? O : q)
                        }, a.deflateEnd = function(t) {
                            var e;
                            return t && t.state ? (e = t.state.status) !== it && e !== st && e !== ht && e !== lt && e !== ot && e !== _t && e !== dt ? n(t, T) : (t.state = null, e === _t ? n(t, L) : O) : T
                        }, a.deflateSetDictionary = function(t, e) {
                            var a, n, r, s, h, l, o, _, d = e.length;
                            if (!t || !t.state) return T;
                            if (a = t.state, 2 === (s = a.wrap) || 1 === s && a.status !== it || a.lookahead) return T;
                            for (1 === s && (t.adler = A(t.adler, e, d, 0)), a.wrap = 0, d >= a.w_size && (0 === s && (i(a.head), a.strstart = 0, a.block_start = 0, a.insert = 0), _ = new x.Buf8(a.w_size), x.arraySet(_, e, d - a.w_size, a.w_size, 0), e = _, d = a.w_size), h = t.avail_in, l = t.next_in, o = t.input, t.avail_in = d, t.next_in = 0, t.input = e, u(a); a.lookahead >= et;) {
                                n = a.strstart, r = a.lookahead - (et - 1);
                                do a.ins_h = (a.ins_h << a.hash_shift ^ a.window[n + et - 1]) & a.hash_mask, a.prev[n & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = n, n++; while (--r);
                                a.strstart = n, a.lookahead = et - 1, u(a)
                            }
                            return a.strstart += a.lookahead, a.block_start = a.strstart, a.insert = a.lookahead, a.lookahead = 0, a.match_length = a.prev_length = et - 1, a.match_available = 0, t.next_in = l, t.input = o, t.avail_in = h, a.wrap = s, O
                        }, a.deflateInfo = "pako deflate (from Nodeca project)"
                    }, {
                        "../utils/common": 1,
                        "./adler32": 3,
                        "./crc32": 4,
                        "./messages": 6,
                        "./trees": 7
                    }],
                    6: [function(t, e, a) {
                        "use strict";
                        e.exports = {
                            2: "need dictionary",
                            1: "stream end",
                            0: "",
                            "-1": "file error",
                            "-2": "stream error",
                            "-3": "data error",
                            "-4": "insufficient memory",
                            "-5": "buffer error",
                            "-6": "incompatible version"
                        }
                    }, {}],
                    7: [function(t, e, a) {
                        "use strict";

                        function n(t) {
                            for (var e = t.length; --e >= 0;) t[e] = 0
                        }

                        function r(t, e, a, n, r) {
                            this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = n, this.max_length = r, this.has_stree = t && t.length
                        }

                        function i(t, e) {
                            this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
                        }

                        function s(t) {
                            return 256 > t ? et[t] : et[256 + (t >>> 7)]
                        }

                        function h(t, e) {
                            t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
                        }

                        function l(t, e, a) {
                            t.bi_valid > M - a ? (t.bi_buf |= e << t.bi_valid & 65535, h(t, t.bi_buf), t.bi_buf = e >> M - t.bi_valid, t.bi_valid += a - M) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a)
                        }

                        function o(t, e, a) {
                            l(t, a[2 * e], a[2 * e + 1])
                        }

                        function _(t, e) {
                            var a = 0;
                            do a |= 1 & t, t >>>= 1, a <<= 1; while (--e > 0);
                            return a >>> 1
                        }

                        function d(t) {
                            16 === t.bi_valid ? (h(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                        }

                        function u(t, e) {
                            var a, n, r, i, s, h, l = e.dyn_tree,
                                o = e.max_code,
                                _ = e.stat_desc.static_tree,
                                d = e.stat_desc.has_stree,
                                u = e.stat_desc.extra_bits,
                                f = e.stat_desc.extra_base,
                                c = e.stat_desc.max_length,
                                p = 0;
                            for (i = 0; K >= i; i++) t.bl_count[i] = 0;
                            for (l[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; F > a; a++)(i = l[2 * l[2 * (n = t.heap[a]) + 1] + 1] + 1) > c && (i = c, p++), l[2 * n + 1] = i, n > o || (t.bl_count[i]++, s = 0, n >= f && (s = u[n - f]), h = l[2 * n], t.opt_len += h * (i + s), d && (t.static_len += h * (_[2 * n + 1] + s)));
                            if (0 !== p) {
                                do {
                                    for (i = c - 1; 0 === t.bl_count[i];) i--;
                                    t.bl_count[i]--, t.bl_count[i + 1] += 2, t.bl_count[c]--, p -= 2
                                } while (p > 0);
                                for (i = c; 0 !== i; i--)
                                    for (n = t.bl_count[i]; 0 !== n;)(r = t.heap[--a]) > o || (l[2 * r + 1] !== i && (t.opt_len += (i - l[2 * r + 1]) * l[2 * r], l[2 * r + 1] = i), n--)
                            }
                        }

                        function f(t, e, a) {
                            var n, r, i = new Array(K + 1),
                                s = 0;
                            for (n = 1; K >= n; n++) i[n] = s = s + a[n - 1] << 1;
                            for (r = 0; e >= r; r++) {
                                var h = t[2 * r + 1];
                                0 !== h && (t[2 * r] = _(i[h]++, h))
                            }
                        }

                        function c() {
                            var t, e, a, n, i, s = new Array(K + 1);
                            for (a = 0, n = 0; T - 1 > n; n++)
                                for (nt[n] = a, t = 0; t < 1 << W[n]; t++) at[a++] = n;
                            for (at[a - 1] = n, i = 0, n = 0; 16 > n; n++)
                                for (rt[n] = i, t = 0; t < 1 << X[n]; t++) et[i++] = n;
                            for (i >>= 7; R > n; n++)
                                for (rt[n] = i << 7, t = 0; t < 1 << X[n] - 7; t++) et[256 + i++] = n;
                            for (e = 0; K >= e; e++) s[e] = 0;
                            for (t = 0; 143 >= t;) $[2 * t + 1] = 8, t++, s[8]++;
                            for (; 255 >= t;) $[2 * t + 1] = 9, t++, s[9]++;
                            for (; 279 >= t;) $[2 * t + 1] = 7, t++, s[7]++;
                            for (; 287 >= t;) $[2 * t + 1] = 8, t++, s[8]++;
                            for (f($, N + 1, s), t = 0; R > t; t++) tt[2 * t + 1] = 5, tt[2 * t] = _(t, 5);
                            it = new r($, W, L + 1, N, K), st = new r(tt, X, 0, R, K), ht = new r(new Array(0), Y, 0, H, P)
                        }

                        function p(t) {
                            var e;
                            for (e = 0; N > e; e++) t.dyn_ltree[2 * e] = 0;
                            for (e = 0; R > e; e++) t.dyn_dtree[2 * e] = 0;
                            for (e = 0; H > e; e++) t.bl_tree[2 * e] = 0;
                            t.dyn_ltree[2 * G] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
                        }

                        function g(t) {
                            t.bi_valid > 8 ? h(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
                        }

                        function m(t, e, a, n) {
                            g(t), n && (h(t, a), h(t, ~a)), S.arraySet(t.pending_buf, t.window, e, a, t.pending), t.pending += a
                        }

                        function b(t, e, a, n) {
                            var r = 2 * e,
                                i = 2 * a;
                            return t[r] < t[i] || t[r] === t[i] && n[e] <= n[a]
                        }

                        function w(t, e, a) {
                            for (var n = t.heap[a], r = a << 1; r <= t.heap_len && (r < t.heap_len && b(e, t.heap[r + 1], t.heap[r], t.depth) && r++, !b(e, n, t.heap[r], t.depth));) t.heap[a] = t.heap[r], a = r, r <<= 1;
                            t.heap[a] = n
                        }

                        function v(t, e, a) {
                            var n, r, i, h, _ = 0;
                            if (0 !== t.last_lit)
                                do n = t.pending_buf[t.d_buf + 2 * _] << 8 | t.pending_buf[t.d_buf + 2 * _ + 1], r = t.pending_buf[t.l_buf + _], _++, 0 === n ? o(t, r, e) : (o(t, (i = at[r]) + L + 1, e), 0 !== (h = W[i]) && l(t, r -= nt[i], h), o(t, i = s(--n), a), 0 !== (h = X[i]) && l(t, n -= rt[i], h)); while (_ < t.last_lit);
                            o(t, G, e)
                        }

                        function y(t, e) {
                            var a, n, r, i = e.dyn_tree,
                                s = e.stat_desc.static_tree,
                                h = e.stat_desc.has_stree,
                                l = e.stat_desc.elems,
                                o = -1;
                            for (t.heap_len = 0, t.heap_max = F, a = 0; l > a; a++) 0 !== i[2 * a] ? (t.heap[++t.heap_len] = o = a, t.depth[a] = 0) : i[2 * a + 1] = 0;
                            for (; t.heap_len < 2;) i[2 * (r = t.heap[++t.heap_len] = 2 > o ? ++o : 0)] = 1, t.depth[r] = 0, t.opt_len--, h && (t.static_len -= s[2 * r + 1]);
                            for (e.max_code = o, a = t.heap_len >> 1; a >= 1; a--) w(t, i, a);
                            r = l;
                            do a = t.heap[1], t.heap[1] = t.heap[t.heap_len--], w(t, i, 1), n = t.heap[1], t.heap[--t.heap_max] = a, t.heap[--t.heap_max] = n, i[2 * r] = i[2 * a] + i[2 * n], t.depth[r] = (t.depth[a] >= t.depth[n] ? t.depth[a] : t.depth[n]) + 1, i[2 * a + 1] = i[2 * n + 1] = r, t.heap[1] = r++, w(t, i, 1); while (t.heap_len >= 2);
                            t.heap[--t.heap_max] = t.heap[1], u(t, e), f(i, o, t.bl_count)
                        }

                        function k(t, e, a) {
                            var n, r, i = -1,
                                s = e[1],
                                h = 0,
                                l = 7,
                                o = 4;
                            for (0 === s && (l = 138, o = 3), e[2 * (a + 1) + 1] = 65535, n = 0; a >= n; n++) r = s, s = e[2 * (n + 1) + 1], ++h < l && r === s || (o > h ? t.bl_tree[2 * r] += h : 0 !== r ? (r !== i && t.bl_tree[2 * r]++, t.bl_tree[2 * J]++) : 10 >= h ? t.bl_tree[2 * Q]++ : t.bl_tree[2 * V]++, h = 0, i = r, 0 === s ? (l = 138, o = 3) : r === s ? (l = 6, o = 3) : (l = 7, o = 4))
                        }

                        function z(t, e, a) {
                            var n, r, i = -1,
                                s = e[1],
                                h = 0,
                                _ = 7,
                                d = 4;
                            for (0 === s && (_ = 138, d = 3), n = 0; a >= n; n++)
                                if (r = s, s = e[2 * (n + 1) + 1], !(++h < _ && r === s)) {
                                    if (d > h) {
                                        do o(t, r, t.bl_tree); while (0 != --h)
                                    } else 0 !== r ? (r !== i && (o(t, r, t.bl_tree), h--), o(t, J, t.bl_tree), l(t, h - 3, 2)) : 10 >= h ? (o(t, Q, t.bl_tree), l(t, h - 3, 3)) : (o(t, V, t.bl_tree), l(t, h - 11, 7));
                                    h = 0, i = r, 0 === s ? (_ = 138, d = 3) : r === s ? (_ = 6, d = 3) : (_ = 7, d = 4)
                                }
                        }

                        function x(t) {
                            var e;
                            for (k(t, t.dyn_ltree, t.l_desc.max_code), k(t, t.dyn_dtree, t.d_desc.max_code), y(t, t.bl_desc), e = H - 1; e >= 3 && 0 === t.bl_tree[2 * Z[e] + 1]; e--);
                            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                        }

                        function B(t, e, a, n) {
                            var r;
                            for (l(t, e - 257, 5), l(t, a - 1, 5), l(t, n - 4, 4), r = 0; n > r; r++) l(t, t.bl_tree[2 * Z[r] + 1], 3);
                            z(t, t.dyn_ltree, e - 1), z(t, t.dyn_dtree, a - 1)
                        }

                        function A(t) {
                            var e, a = 4093624447;
                            for (e = 0; 31 >= e; e++, a >>>= 1)
                                if (1 & a && 0 !== t.dyn_ltree[2 * e]) return E;
                            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return U;
                            for (e = 32; L > e; e++)
                                if (0 !== t.dyn_ltree[2 * e]) return U;
                            return E
                        }

                        function C(t, e, a, n) {
                            l(t, (I << 1) + (n ? 1 : 0), 3), m(t, e, a, !0)
                        }
                        var S = t("../utils/common"),
                            j = 4,
                            E = 0,
                            U = 1,
                            D = 2,
                            I = 0,
                            O = 1,
                            q = 2,
                            T = 29,
                            L = 256,
                            N = L + 1 + T,
                            R = 30,
                            H = 19,
                            F = 2 * N + 1,
                            K = 15,
                            M = 16,
                            P = 7,
                            G = 256,
                            J = 16,
                            Q = 17,
                            V = 18,
                            W = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                            X = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                            Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                            Z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                            $ = new Array(2 * (N + 2));
                        n($);
                        var tt = new Array(2 * R);
                        n(tt);
                        var et = new Array(512);
                        n(et);
                        var at = new Array(256);
                        n(at);
                        var nt = new Array(T);
                        n(nt);
                        var rt = new Array(R);
                        n(rt);
                        var it, st, ht, lt = !1;
                        a._tr_init = function(t) {
                            lt || (c(), lt = !0), t.l_desc = new i(t.dyn_ltree, it), t.d_desc = new i(t.dyn_dtree, st), t.bl_desc = new i(t.bl_tree, ht), t.bi_buf = 0, t.bi_valid = 0, p(t)
                        }, a._tr_stored_block = C, a._tr_flush_block = function(t, e, a, n) {
                            var r, i, s = 0;
                            t.level > 0 ? (t.strm.data_type === D && (t.strm.data_type = A(t)), y(t, t.l_desc), y(t, t.d_desc), s = x(t), r = t.opt_len + 3 + 7 >>> 3, (i = t.static_len + 3 + 7 >>> 3) <= r && (r = i)) : r = i = a + 5, r >= a + 4 && -1 !== e ? C(t, e, a, n) : t.strategy === j || i === r ? (l(t, (O << 1) + (n ? 1 : 0), 3), v(t, $, tt)) : (l(t, (q << 1) + (n ? 1 : 0), 3), B(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1), v(t, t.dyn_ltree, t.dyn_dtree)), p(t), n && g(t)
                        }, a._tr_tally = function(t, e, a) {
                            return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & a, t.last_lit++, 0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (at[a] + L + 1)]++, t.dyn_dtree[2 * s(e)]++), t.last_lit === t.lit_bufsize - 1
                        }, a._tr_align = function(t) {
                            l(t, O << 1, 3), o(t, G, $), d(t)
                        }
                    }, {
                        "../utils/common": 1
                    }],
                    8: [function(t, e, a) {
                        "use strict";
                        e.exports = function() {
                            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                        }
                    }, {}],
                    "/lib/deflate.js": [function(t, e, a) {
                        "use strict";

                        function n(t) {
                            if (!(this instanceof n)) return new n(t);
                            this.options = s.assign({
                                level: u,
                                method: c,
                                chunkSize: 16384,
                                windowBits: 15,
                                memLevel: 8,
                                strategy: f,
                                to: ""
                            }, t || {});
                            var e = this.options;
                            e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o, this.strm.avail_out = 0;
                            var a = i.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                            if (a !== d) throw new Error(l[a]);
                            if (e.header && i.deflateSetHeader(this.strm, e.header), e.dictionary) {
                                var r;
                                if (r = "string" == typeof e.dictionary ? h.string2buf(e.dictionary) : "[object ArrayBuffer]" === _.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (a = i.deflateSetDictionary(this.strm, r)) !== d) throw new Error(l[a]);
                                this._dict_set = !0
                            }
                        }

                        function r(t, e) {
                            var a = new n(e);
                            if (a.push(t, !0), a.err) throw a.msg || l[a.err];
                            return a.result
                        }
                        var i = t("./zlib/deflate"),
                            s = t("./utils/common"),
                            h = t("./utils/strings"),
                            l = t("./zlib/messages"),
                            o = t("./zlib/zstream"),
                            _ = Object.prototype.toString,
                            d = 0,
                            u = -1,
                            f = 0,
                            c = 8;
                        n.prototype.push = function(t, e) {
                            var a, n, r = this.strm,
                                l = this.options.chunkSize;
                            if (this.ended) return !1;
                            n = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? r.input = h.string2buf(t) : "[object ArrayBuffer]" === _.call(t) ? r.input = new Uint8Array(t) : r.input = t, r.next_in = 0, r.avail_in = r.input.length;
                            do {
                                if (0 === r.avail_out && (r.output = new s.Buf8(l), r.next_out = 0, r.avail_out = l), 1 !== (a = i.deflate(r, n)) && a !== d) return this.onEnd(a), this.ended = !0, !1;
                                0 !== r.avail_out && (0 !== r.avail_in || 4 !== n && 2 !== n) || ("string" === this.options.to ? this.onData(h.buf2binstring(s.shrinkBuf(r.output, r.next_out))) : this.onData(s.shrinkBuf(r.output, r.next_out)))
                            } while ((r.avail_in > 0 || 0 === r.avail_out) && 1 !== a);
                            return 4 === n ? (a = i.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === d) : 2 !== n || (this.onEnd(d), r.avail_out = 0, !0)
                        }, n.prototype.onData = function(t) {
                            this.chunks.push(t)
                        }, n.prototype.onEnd = function(t) {
                            t === d && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
                        }, a.Deflate = n, a.deflate = r, a.deflateRaw = function(t, e) {
                            return e = e || {}, e.raw = !0, r(t, e)
                        }, a.gzip = function(t, e) {
                            return e = e || {}, e.gzip = !0, r(t, e)
                        }
                    }, {
                        "./utils/common": 1,
                        "./utils/strings": 2,
                        "./zlib/deflate": 5,
                        "./zlib/messages": 6,
                        "./zlib/zstream": 8
                    }]
                }, {}, [])("/lib/deflate.js")
            });
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    2: [function(require, module, exports) {
        function E() {}
        E.prototype = {
            on: function(t, n, e) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: n,
                    ctx: e
                }), this
            },
            once: function(t, n, e) {
                function i() {
                    f.off(t, i), n.apply(e, arguments)
                }
                var f = this;
                return i._ = n, this.on(t, i, e)
            },
            emit: function(t) {
                var n = [].slice.call(arguments, 1),
                    e = ((this.e || (this.e = {}))[t] || []).slice(),
                    i = 0,
                    f = e.length;
                for (i; f > i; i++) e[i].fn.apply(e[i].ctx, n);
                return this
            },
            off: function(t, n) {
                var e = this.e || (this.e = {}),
                    i = e[t],
                    f = [];
                if (i && n)
                    for (var o = 0, r = i.length; r > o; o++) i[o].fn !== n && i[o].fn._ !== n && f.push(i[o]);
                return f.length ? e[t] = f : delete e[t], this
            }
        }, module.exports = E;

    }, {}],
    3: [function(require, module, exports) {
        ! function(i, s) {
            "use strict";
            var e = "0.7.17",
                o = "",
                r = "?",
                n = "function",
                a = "undefined",
                d = "object",
                t = "string",
                l = "major",
                w = "model",
                u = "name",
                c = "type",
                m = "vendor",
                b = "version",
                p = "architecture",
                g = "console",
                f = "mobile",
                h = "tablet",
                v = "smarttv",
                x = "wearable",
                k = "embedded",
                y = {
                    extend: function(i, s) {
                        var e = {};
                        for (var o in i) s[o] && s[o].length % 2 === 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o];
                        return e
                    },
                    has: function(i, s) {
                        return "string" == typeof i ? -1 !== s.toLowerCase().indexOf(i.toLowerCase()) : !1
                    },
                    lowerize: function(i) {
                        return i.toLowerCase()
                    },
                    major: function(i) {
                        return typeof i === t ? i.replace(/[^\d\.]/g, "").split(".")[0] : s
                    },
                    trim: function(i) {
                        return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                T = {
                    rgx: function(i, e) {
                        for (var o, r, a, t, l, w, u = 0; u < e.length && !l;) {
                            var c = e[u],
                                m = e[u + 1];
                            for (o = r = 0; o < c.length && !l;)
                                if (l = c[o++].exec(i))
                                    for (a = 0; a < m.length; a++) w = l[++r], t = m[a], typeof t === d && t.length > 0 ? 2 == t.length ? typeof t[1] == n ? this[t[0]] = t[1].call(this, w) : this[t[0]] = t[1] : 3 == t.length ? typeof t[1] !== n || t[1].exec && t[1].test ? this[t[0]] = w ? w.replace(t[1], t[2]) : s : this[t[0]] = w ? t[1].call(this, w, t[2]) : s : 4 == t.length && (this[t[0]] = w ? t[3].call(this, w.replace(t[1], t[2])) : s) : this[t] = w ? w : s;
                            u += 2
                        }
                    },
                    str: function(i, e) {
                        for (var o in e)
                            if (typeof e[o] === d && e[o].length > 0) {
                                for (var n = 0; n < e[o].length; n++)
                                    if (y.has(e[o][n], i)) return o === r ? s : o
                            } else if (y.has(e[o], i)) return o === r ? s : o;
                        return i
                    }
                },
                S = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2000: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                A = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [u, b],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [u, "Opera Mini"], b
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [u, "Opera"], b
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],
                        [u, b],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [u, "IE"], b
                        ],
                        [/(edge)\/((\d+)?[\w\.]+)/i],
                        [u, b],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [u, "Yandex"], b
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [u, "Puffin"], b
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [u, "UCBrowser"], b
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [u, /_/g, " "], b
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [u, "WeChat"], b
                        ],
                        [/(QQ)\/([\d\.]+)/i],
                        [u, b],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [u, b],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [b, [u, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [b, [u, "Facebook"]],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [b, [u, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [u, /(.+)/, "$1 WebView"], b
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [u, /(.+(?:g|us))(.+)/, "$1 $2"], b
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [b, [u, "Android Browser"]],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [u, b],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [u, "Dolphin"], b
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [u, "Chrome"], b
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [u, "Opera Coast"], b
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [b, [u, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [b, [u, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [b, u],
                        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [u, "GSA"], b
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [u, [b, T.str, S.browser.oldsafari.version]],
                        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                        [u, b],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [u, "Netscape"], b
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [u, b]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [p, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [p, y.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [p, "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [p, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [p, /ower/, "", y.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [p, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            [p, y.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                        [w, m, [c, h]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [w, [m, "Apple"],
                            [c, h]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [w, "Apple TV"],
                            [m, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [m, w, [c, h]],
                        [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                        [w, [m, "Amazon"],
                            [c, h]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                        [
                            [w, T.str, S.device.amazon.model],
                            [m, "Amazon"],
                            [c, f]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [w, m, [c, f]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [w, [m, "Apple"],
                            [c, f]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [m, w, [c, f]],
                        [/\(bb10;\s(\w+)/i],
                        [w, [m, "BlackBerry"],
                            [c, f]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                        [w, [m, "Asus"],
                            [c, h]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [m, "Sony"],
                            [w, "Xperia Tablet"],
                            [c, h]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                        [w, [m, "Sony"],
                            [c, f]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [m, w, [c, g]],
                        [/android.+;\s(shield)\sbuild/i],
                        [w, [m, "Nvidia"],
                            [c, g]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [w, [m, "Sony"],
                            [c, g]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [m, T.str, S.device.sprint.vendor],
                            [w, T.str, S.device.sprint.model],
                            [c, f]
                        ],
                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                        [m, w, [c, h]],
                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                        [m, [w, /_/g, " "],
                            [c, f]
                        ],
                        [/(nexus\s9)/i],
                        [w, [m, "HTC"],
                            [c, h]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                        [w, [m, "Huawei"],
                            [c, f]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [m, w, [c, f]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [w, [m, "Microsoft"],
                            [c, g]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [w, /\./g, " "],
                            [m, "Microsoft"],
                            [c, f]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [w, [m, "Motorola"],
                            [c, f]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [w, [m, "Motorola"],
                            [c, h]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [m, y.trim],
                            [w, y.trim],
                            [c, v]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [w, /^/, "SmartTV"],
                            [m, "Samsung"],
                            [c, v]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [w, [m, "Sharp"],
                            [c, v]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [m, "Samsung"], w, [c, h]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [m, [c, v], w],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                        [
                            [m, "Samsung"], w, [c, f]
                        ],
                        [/sie-(\w+)*/i],
                        [w, [m, "Siemens"],
                            [c, f]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                        [
                            [m, "Nokia"], w, [c, f]
                        ],
                        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                        [w, [m, "Acer"],
                            [c, h]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [w, [m, "LG"],
                            [c, h]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [m, "LG"], w, [c, h]
                        ],
                        [/(lg) netcast\.tv/i],
                        [m, w, [c, v]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [w, [m, "LG"],
                            [c, f]
                        ],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [w, [m, "Lenovo"],
                            [c, h]
                        ],
                        [/linux;.+((jolla));/i],
                        [m, w, [c, f]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [m, w, [c, x]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [m, w, [c, f]],
                        [/crkey/i],
                        [
                            [w, "Chromecast"],
                            [m, "Google"]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [w, [m, "Google"],
                            [c, x]
                        ],
                        [/android.+;\s(pixel c)\s/i],
                        [w, [m, "Google"],
                            [c, h]
                        ],
                        [/android.+;\s(pixel xl|pixel)\s/i],
                        [w, [m, "Google"],
                            [c, f]
                        ],
                        [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],
                        [
                            [w, /_/g, " "],
                            [m, "Xiaomi"],
                            [c, f]
                        ],
                        [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],
                        [
                            [w, /_/g, " "],
                            [m, "Xiaomi"],
                            [c, h]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [w, [m, "Meizu"],
                            [c, h]
                        ],
                        [/android.+a000(1)\s+build/i],
                        [w, [m, "OnePlus"],
                            [c, f]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [w, [m, "RCA"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],
                        [w, [m, "Dell"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [w, [m, "Verizon"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                        [
                            [m, "Barnes & Noble"], w, [c, h]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [w, [m, "NuVision"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],
                        [
                            [m, "ZTE"], w, [c, h]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [w, [m, "Swiss"],
                            [c, f]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [w, [m, "Swiss"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [w, [m, "Zeki"],
                            [c, h]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],
                        [
                            [m, "Dragon Touch"], w, [c, h]
                        ],
                        [/android.+[;\/]\s*(NS-?.+)\s+build/i],
                        [w, [m, "Insignia"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],
                        [w, [m, "NextBook"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [m, "Voice"], w, [c, f]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],
                        [
                            [m, "LvTel"], w, [c, f]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [w, [m, "Envizen"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],
                        [m, w, [c, h]],
                        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                        [w, [m, "MachSpeed"],
                            [c, h]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [m, w, [c, h]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [w, [m, "Rotor"],
                            [c, h]
                        ],
                        [/android.+(KS(.+))\s+build/i],
                        [w, [m, "Amazon"],
                            [c, h]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],
                        [m, w, [c, h]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [c, y.lowerize], m, w
                        ],
                        [/(android.+)[;\/].+build/i],
                        [w, [m, "Generic"]]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [b, [u, "EdgeHTML"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [u, b],
                        [/rv\:([\w\.]+).*(gecko)/i],
                        [b, u]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [u, b],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [u, [b, T.str, S.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [u, "Windows"],
                            [b, T.str, S.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [u, "BlackBerry"], b
                        ],
                        [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                        [u, b],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                        [
                            [u, "Symbian"], b
                        ],
                        [/\((series40);/i],
                        [u],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [u, "Firefox OS"], b
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                        [u, b],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [u, "Chromium OS"], b
                        ],
                        [/(sunos)\s?([\w\.]+\d)*/i],
                        [
                            [u, "Solaris"], b
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                        [u, b],
                        [/(haiku)\s(\w+)/i],
                        [u, b],
                        [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [b, /_/g, "."],
                            [u, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [u, "Mac OS"],
                            [b, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                        [u, b]
                    ]
                },
                E = function(e, r) {
                    if ("object" == typeof e && (r = e, e = s), !(this instanceof E)) return new E(e, r).getResult();
                    var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : o),
                        a = r ? y.extend(A, r) : A;
                    return this.getBrowser = function() {
                        var i = {
                            name: s,
                            version: s
                        };
                        return T.rgx.call(i, n, a.browser), i.major = y.major(i.version), i
                    }, this.getCPU = function() {
                        var i = {
                            architecture: s
                        };
                        return T.rgx.call(i, n, a.cpu), i
                    }, this.getDevice = function() {
                        var i = {
                            vendor: s,
                            model: s,
                            type: s
                        };
                        return T.rgx.call(i, n, a.device), i
                    }, this.getEngine = function() {
                        var i = {
                            name: s,
                            version: s
                        };
                        return T.rgx.call(i, n, a.engine), i
                    }, this.getOS = function() {
                        var i = {
                            name: s,
                            version: s
                        };
                        return T.rgx.call(i, n, a.os), i
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return n
                    }, this.setUA = function(i) {
                        return n = i, this
                    }, this
                };
            E.VERSION = e, E.BROWSER = {
                NAME: u,
                MAJOR: l,
                VERSION: b
            }, E.CPU = {
                ARCHITECTURE: p
            }, E.DEVICE = {
                MODEL: w,
                VENDOR: m,
                TYPE: c,
                CONSOLE: g,
                MOBILE: f,
                SMARTTV: v,
                TABLET: h,
                WEARABLE: x,
                EMBEDDED: k
            }, E.ENGINE = {
                NAME: u,
                VERSION: b
            }, E.OS = {
                NAME: u,
                VERSION: b
            }, typeof exports !== a ? (typeof module !== a && module.exports && (exports = module.exports = E), exports.UAParser = E) : typeof define === n && define.amd ? define(function() {
                return E
            }) : i && (i.UAParser = E);
            var N = i && (i.jQuery || i.Zepto);
            if (typeof N !== a) {
                var z = new E;
                N.ua = z.getResult(), N.ua.get = function() {
                    return z.getUA()
                }, N.ua.set = function(i) {
                    z.setUA(i);
                    var s = z.getResult();
                    for (var e in s) N.ua[e] = s[e]
                }
            }
        }("object" == typeof window ? window : this);

    }, {}],
    4: [function(require, module, exports) {
        (function(global) {
            (function() {
                function t(r, o) {
                    function c(t) {
                        if (c[t] !== b) return c[t];
                        var e;
                        if ("bug-string-char-index" == t) e = "a" != "a" [0];
                        else if ("json" == t) e = c("json-stringify") && c("json-parse");
                        else {
                            var r, n = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == t) {
                                var i = o.stringify,
                                    s = "function" == typeof i && C;
                                if (s) {
                                    (r = function() {
                                        return 1
                                    }).toJSON = r;
                                    try {
                                        s = "0" === i(0) && "0" === i(new l) && '""' == i(new a) && i(v) === b && i(b) === b && i() === b && "1" === i(r) && "[1]" == i([r]) && "[null]" == i([b]) && "null" == i(null) && "[null,null,null]" == i([b, v, null]) && i({
                                            a: [r, !0, !1, null, "\x00\b\n\f\r	"]
                                        }) == n && "1" === i(null, r) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new f(-1))
                                    } catch (u) {
                                        s = !1
                                    }
                                }
                                e = s
                            }
                            if ("json-parse" == t) {
                                var h = o.parse;
                                if ("function" == typeof h) try {
                                    if (0 === h("0") && !h(!1)) {
                                        r = h(n);
                                        var p = 5 == r.a.length && 1 === r.a[0];
                                        if (p) {
                                            try {
                                                p = !h('"	"')
                                            } catch (u) {}
                                            if (p) try {
                                                p = 1 !== h("01")
                                            } catch (u) {}
                                            if (p) try {
                                                p = 1 !== h("1.")
                                            } catch (u) {}
                                        }
                                    }
                                } catch (u) {
                                    p = !1
                                }
                                e = p
                            }
                        }
                        return c[t] = !!e
                    }
                    r || (r = n.Object()), o || (o = n.Object());
                    var l = r.Number || n.Number,
                        a = r.String || n.String,
                        i = r.Object || n.Object,
                        f = r.Date || n.Date,
                        s = r.SyntaxError || n.SyntaxError,
                        u = r.TypeError || n.TypeError,
                        h = r.Math || n.Math,
                        p = r.JSON || n.JSON;
                    "object" == typeof p && p && (o.stringify = p.stringify, o.parse = p.parse);
                    var g, y, b, d = i.prototype,
                        v = d.toString,
                        C = new f(-0xc782b5b800cec);
                    try {
                        C = -109252 == C.getUTCFullYear() && 0 === C.getUTCMonth() && 1 === C.getUTCDate() && 10 == C.getUTCHours() && 37 == C.getUTCMinutes() && 6 == C.getUTCSeconds() && 708 == C.getUTCMilliseconds()
                    } catch (j) {}
                    if (!c("json")) {
                        var S = "[object Function]",
                            O = "[object Date]",
                            w = "[object Number]",
                            T = "[object String]",
                            A = "[object Array]",
                            _ = "[object Boolean]",
                            N = c("bug-string-char-index");
                        if (!C) var U = h.floor,
                            J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            x = function(t, e) {
                                return J[e] + 365 * (t - 1970) + U((t - 1969 + (e = +(e > 1))) / 4) - U((t - 1901 + e) / 100) + U((t - 1601 + e) / 400)
                            };
                        if ((g = d.hasOwnProperty) || (g = function(t) {
                                var e, r = {};
                                return (r.__proto__ = null, r.__proto__ = {
                                    toString: 1
                                }, r).toString != v ? g = function(t) {
                                    var e = this.__proto__,
                                        r = t in (this.__proto__ = null, this);
                                    return this.__proto__ = e, r
                                } : (e = r.constructor, g = function(t) {
                                    var r = (this.constructor || e).prototype;
                                    return t in this && !(t in r && this[t] === r[t])
                                }), r = null, g.call(this, t)
                            }), y = function(t, r) {
                                var n, o, c, l = 0;
                                (n = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, o = new n;
                                for (c in o) g.call(o, c) && l++;
                                return n = o = null, l ? y = 2 == l ? function(t, e) {
                                    var r, n = {},
                                        o = v.call(t) == S;
                                    for (r in t) o && "prototype" == r || g.call(n, r) || !(n[r] = 1) || !g.call(t, r) || e(r)
                                } : function(t, e) {
                                    var r, n, o = v.call(t) == S;
                                    for (r in t) o && "prototype" == r || !g.call(t, r) || (n = "constructor" === r) || e(r);
                                    (n || g.call(t, r = "constructor")) && e(r)
                                } : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function(t, r) {
                                    var n, c, l = v.call(t) == S,
                                        a = !l && "function" != typeof t.constructor && e[typeof t.hasOwnProperty] && t.hasOwnProperty || g;
                                    for (n in t) l && "prototype" == n || !a.call(t, n) || r(n);
                                    for (c = o.length; n = o[--c]; a.call(t, n) && r(n));
                                }), y(t, r)
                            }, !c("json-stringify")) {
                            var m = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                },
                                M = "000000",
                                k = function(t, e) {
                                    return (M + (e || 0)).slice(-t)
                                },
                                D = "\\u00",
                                E = function(t) {
                                    for (var e = '"', r = 0, n = t.length, o = !N || n > 10, c = o && (N ? t.split("") : t); n > r; r++) {
                                        var l = t.charCodeAt(r);
                                        switch (l) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                e += m[l];
                                                break;
                                            default:
                                                if (32 > l) {
                                                    e += D + k(2, l.toString(16));
                                                    break
                                                }
                                                e += o ? c[r] : t.charAt(r)
                                        }
                                    }
                                    return e + '"'
                                },
                                P = function(t, e, r, n, o, c, l) {
                                    var a, i, f, s, h, p, d, C, j, S, N, J, m, M, D, Z;
                                    try {
                                        a = e[t]
                                    } catch (F) {}
                                    if ("object" == typeof a && a)
                                        if (i = v.call(a), i != O || g.call(a, "toJSON")) "function" == typeof a.toJSON && (i != w && i != T && i != A || g.call(a, "toJSON")) && (a = a.toJSON(t));
                                        else if (a > -1 / 0 && 1 / 0 > a) {
                                        if (x) {
                                            for (h = U(a / 864e5), f = U(h / 365.2425) + 1970 - 1; x(f + 1, 0) <= h; f++);
                                            for (s = U((h - x(f, 0)) / 30.42); x(f, s + 1) <= h; s++);
                                            h = 1 + h - x(f, s), p = (a % 864e5 + 864e5) % 864e5, d = U(p / 36e5) % 24, C = U(p / 6e4) % 60, j = U(p / 1e3) % 60, S = p % 1e3
                                        } else f = a.getUTCFullYear(), s = a.getUTCMonth(), h = a.getUTCDate(), d = a.getUTCHours(), C = a.getUTCMinutes(), j = a.getUTCSeconds(), S = a.getUTCMilliseconds();
                                        a = (0 >= f || f >= 1e4 ? (0 > f ? "-" : "+") + k(6, 0 > f ? -f : f) : k(4, f)) + "-" + k(2, s + 1) + "-" + k(2, h) + "T" + k(2, d) + ":" + k(2, C) + ":" + k(2, j) + "." + k(3, S) + "Z"
                                    } else a = null;
                                    if (r && (a = r.call(e, t, a)), null === a) return "null";
                                    if (i = v.call(a), i == _) return "" + a;
                                    if (i == w) return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";
                                    if (i == T) return E("" + a);
                                    if ("object" == typeof a) {
                                        for (M = l.length; M--;)
                                            if (l[M] === a) throw u();
                                        if (l.push(a), N = [], D = c, c += o, i == A) {
                                            for (m = 0, M = a.length; M > m; m++) J = P(m, a, r, n, o, c, l), N.push(J === b ? "null" : J);
                                            Z = N.length ? o ? "[\n" + c + N.join(",\n" + c) + "\n" + D + "]" : "[" + N.join(",") + "]" : "[]"
                                        } else y(n || a, function(t) {
                                            var e = P(t, a, r, n, o, c, l);
                                            e !== b && N.push(E(t) + ":" + (o ? " " : "") + e)
                                        }), Z = N.length ? o ? "{\n" + c + N.join(",\n" + c) + "\n" + D + "}" : "{" + N.join(",") + "}" : "{}";
                                        return l.pop(), Z
                                    }
                                };
                            o.stringify = function(t, r, n) {
                                var o, c, l, a;
                                if (e[typeof r] && r)
                                    if ((a = v.call(r)) == S) c = r;
                                    else if (a == A) {
                                    l = {};
                                    for (var i, f = 0, s = r.length; s > f; i = r[f++], a = v.call(i), (a == T || a == w) && (l[i] = 1));
                                }
                                if (n)
                                    if ((a = v.call(n)) == w) {
                                        if ((n -= n % 1) > 0)
                                            for (o = "", n > 10 && (n = 10); o.length < n; o += " ");
                                    } else a == T && (o = n.length <= 10 ? n : n.slice(0, 10));
                                return P("", (i = {}, i[""] = t, i), c, l, o, "", [])
                            }
                        }
                        if (!c("json-parse")) {
                            var Z, F, $ = a.fromCharCode,
                                H = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "	",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                },
                                I = function() {
                                    throw Z = F = null, s()
                                },
                                Y = function() {
                                    for (var t, e, r, n, o, c = F, l = c.length; l > Z;) switch (o = c.charCodeAt(Z)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            Z++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return t = N ? c.charAt(Z) : c[Z], Z++, t;
                                        case 34:
                                            for (t = "@", Z++; l > Z;)
                                                if (o = c.charCodeAt(Z), 32 > o) I();
                                                else if (92 == o) switch (o = c.charCodeAt(++Z)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    t += H[o], Z++;
                                                    break;
                                                case 117:
                                                    for (e = ++Z, r = Z + 4; r > Z; Z++) o = c.charCodeAt(Z), o >= 48 && 57 >= o || o >= 97 && 102 >= o || o >= 65 && 70 >= o || I();
                                                    t += $("0x" + c.slice(e, Z));
                                                    break;
                                                default:
                                                    I()
                                            } else {
                                                if (34 == o) break;
                                                for (o = c.charCodeAt(Z), e = Z; o >= 32 && 92 != o && 34 != o;) o = c.charCodeAt(++Z);
                                                t += c.slice(e, Z)
                                            }
                                            if (34 == c.charCodeAt(Z)) return Z++, t;
                                            I();
                                        default:
                                            if (e = Z, 45 == o && (n = !0, o = c.charCodeAt(++Z)), o >= 48 && 57 >= o) {
                                                for (48 == o && (o = c.charCodeAt(Z + 1), o >= 48 && 57 >= o) && I(), n = !1; l > Z && (o = c.charCodeAt(Z), o >= 48 && 57 >= o); Z++);
                                                if (46 == c.charCodeAt(Z)) {
                                                    for (r = ++Z; l > r && (o = c.charCodeAt(r), o >= 48 && 57 >= o); r++);
                                                    r == Z && I(), Z = r
                                                }
                                                if (o = c.charCodeAt(Z), 101 == o || 69 == o) {
                                                    for (o = c.charCodeAt(++Z), 43 != o && 45 != o || Z++, r = Z; l > r && (o = c.charCodeAt(r), o >= 48 && 57 >= o); r++);
                                                    r == Z && I(), Z = r
                                                }
                                                return +c.slice(e, Z)
                                            }
                                            if (n && I(), "true" == c.slice(Z, Z + 4)) return Z += 4, !0;
                                            if ("false" == c.slice(Z, Z + 5)) return Z += 5, !1;
                                            if ("null" == c.slice(Z, Z + 4)) return Z += 4, null;
                                            I()
                                    }
                                    return "$"
                                },
                                B = function(t) {
                                    var e, r;
                                    if ("$" == t && I(), "string" == typeof t) {
                                        if ("@" == (N ? t.charAt(0) : t[0])) return t.slice(1);
                                        if ("[" == t) {
                                            for (e = []; t = Y(), "]" != t; r || (r = !0)) r && ("," == t ? (t = Y(), "]" == t && I()) : I()), "," == t && I(), e.push(B(t));
                                            return e
                                        }
                                        if ("{" == t) {
                                            for (e = {}; t = Y(), "}" != t; r || (r = !0)) r && ("," == t ? (t = Y(), "}" == t && I()) : I()), "," != t && "string" == typeof t && "@" == (N ? t.charAt(0) : t[0]) && ":" == Y() || I(), e[t.slice(1)] = B(Y());
                                            return e
                                        }
                                        I()
                                    }
                                    return t
                                },
                                L = function(t, e, r) {
                                    var n = q(t, e, r);
                                    n === b ? delete t[e] : t[e] = n
                                },
                                q = function(t, e, r) {
                                    var n, o = t[e];
                                    if ("object" == typeof o && o)
                                        if (v.call(o) == A)
                                            for (n = o.length; n--;) L(o, n, r);
                                        else y(o, function(t) {
                                            L(o, t, r)
                                        });
                                    return r.call(t, e, o)
                                };
                            o.parse = function(t, e) {
                                var r, n;
                                return Z = 0, F = "" + t, r = B(Y()), "$" != Y() && I(), Z = F = null, e && v.call(e) == S ? q((n = {}, n[""] = r, n), "", e) : r
                            }
                        }
                    }
                    return o.runInContext = t, o
                }
                var e = {
                        "function": !0,
                        object: !0
                    },
                    r = e[typeof exports] && exports && !exports.nodeType && exports,
                    n = e[typeof window] && window || this,
                    o = r && e[typeof module] && module && !module.nodeType && "object" == typeof global && global;
                if (!o || o.global !== o && o.window !== o && o.self !== o || (n = o), r) t(n, r);
                else {
                    var c = n.JSON,
                        l = n.JSON3,
                        a = !1,
                        i = t(n, n.JSON3 = {
                            noConflict: function() {
                                return a || (a = !0, n.JSON = c, n.JSON3 = l, c = l = null), i
                            }
                        });
                    n.JSON = {
                        parse: i.parse,
                        stringify: i.stringify
                    }
                }
            }).call(this);

        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    5: [function(require, module, exports) {
        module.exports = function(e, t, n) {
            function r(e, t) {
                return typeof e === t
            }

            function i() {
                var e, t, n, i, o, a, s;
                for (var d in y)
                    if (y.hasOwnProperty(d)) {
                        if (e = [], t = y[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                        for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) a = e[o], s = a.split("."), 1 === s.length ? b[s[0]] = i : (!b[s[0]] || b[s[0]] instanceof Boolean || (b[s[0]] = new Boolean(b[s[0]])), b[s[0]][s[1]] = i), S.push((i ? "" : "no-") + s.join("-"))
                    }
            }

            function o() {
                return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
            }

            function a(e, t) {
                return !!~("" + e).indexOf(t)
            }

            function s(e, t) {
                return e - 1 === t || e === t || e + 1 === t
            }

            function d(e) {
                return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                    return t + n.toUpperCase()
                }).replace(/^-/, "")
            }

            function l() {
                var e = t.body;
                return e || (e = o(k ? "svg" : "body"), e.fake = !0), e
            }

            function c(e, n, r, i) {
                var a, s, d, c, u = "modernizr",
                    p = o("div"),
                    f = l();
                if (parseInt(r, 10))
                    for (; r--;) d = o("div"), d.id = i ? i[r] : u + (r + 1), p.appendChild(d);
                return a = o("style"), a.type = "text/css", a.id = "s" + u, (f.fake ? f : p).appendChild(a), f.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), p.id = u, f.fake && (f.style.background = "", f.style.overflow = "hidden", c = C.style.overflow, C.style.overflow = "hidden", C.appendChild(f)), s = n(p, e), f.fake ? (f.parentNode.removeChild(f), C.style.overflow = c, C.offsetHeight) : p.parentNode.removeChild(p), !!s
            }

            function u(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }

            function p(e, t, n) {
                var i;
                for (var o in e)
                    if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? u(i, n || t) : i);
                return !1
            }

            function f(e) {
                return e.replace(/([A-Z])/g, function(e, t) {
                    return "-" + t.toLowerCase()
                }).replace(/^ms-/, "-ms-")
            }

            function m(t, r) {
                var i = t.length;
                if ("CSS" in e && "supports" in e.CSS) {
                    for (; i--;)
                        if (e.CSS.supports(f(t[i]), r)) return !0;
                    return !1
                }
                if ("CSSSupportsRule" in e) {
                    for (var o = []; i--;) o.push("(" + f(t[i]) + ":" + r + ")");
                    return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                        return "absolute" == getComputedStyle(e, null).position
                    })
                }
                return n
            }

            function h(e, t, i, s) {
                function l() {
                    u && (delete D.style, delete D.modElem)
                }
                if (s = r(s, "undefined") ? !1 : s, !r(i, "undefined")) {
                    var c = m(e, i);
                    if (!r(c, "undefined")) return c
                }
                for (var u, p, f, h, g, v = ["modernizr", "tspan", "samp"]; !D.style && v.length;) u = !0, D.modElem = o(v.shift()), D.style = D.modElem.style;
                for (f = e.length, p = 0; f > p; p++)
                    if (h = e[p], g = D.style[h], a(h, "-") && (h = d(h)), D.style[h] !== n) {
                        if (s || r(i, "undefined")) return l(), "pfx" == t ? h : !0;
                        try {
                            D.style[h] = i
                        } catch (y) {}
                        if (D.style[h] != g) return l(), "pfx" == t ? h : !0
                    }
                return l(), !1
            }

            function g(e, t, n, i, o) {
                var a = e.charAt(0).toUpperCase() + e.slice(1),
                    s = (e + " " + B.join(a + " ") + a).split(" ");
                return r(t, "string") || r(t, "undefined") ? h(s, t, i, o) : (s = (e + " " + I.join(a + " ") + a).split(" "), p(s, t, n))
            }

            function v(e, t, r) {
                return g(e, n, n, t, r)
            }
            var y = [],
                T = {
                    _version: "3.3.1",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout(function() {
                            t(n[e])
                        }, 0)
                    },
                    addTest: function(e, t, n) {
                        y.push({
                            name: e,
                            fn: t,
                            options: n
                        })
                    },
                    addAsyncTest: function(e) {
                        y.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                b = function() {};
            b.prototype = T, b = new b, b.addTest("applicationcache", "applicationCache" in e), b.addTest("blobconstructor", function() {
                try {
                    return !!new Blob
                } catch (e) {
                    return !1
                }
            }, {
                aliases: ["blob-constructor"]
            }), b.addTest("cookies", function() {
                try {
                    t.cookie = "cookietest=1";
                    var e = -1 != t.cookie.indexOf("cookietest=");
                    return t.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
                } catch (n) {
                    return !1
                }
            }), b.addTest("cors", "XMLHttpRequest" in e && "withCredentials" in new XMLHttpRequest), b.addTest("customprotocolhandler", function() {
                if (!navigator.registerProtocolHandler) return !1;
                try {
                    navigator.registerProtocolHandler("thisShouldFail")
                } catch (e) {
                    return e instanceof TypeError
                }
                return !1
            }), b.addTest("dataview", "undefined" != typeof DataView && "getFloat64" in DataView.prototype), b.addTest("geolocation", "geolocation" in navigator), b.addTest("history", function() {
                var t = navigator.userAgent;
                return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
            }), b.addTest("ie8compat", !e.addEventListener && !!t.documentMode && 7 === t.documentMode), b.addTest("json", "JSON" in e && "parse" in JSON && "stringify" in JSON), b.addTest("notification", function() {
                if (!e.Notification || !e.Notification.requestPermission) return !1;
                if ("granted" === e.Notification.permission) return !0;
                try {
                    new e.Notification("")
                } catch (t) {
                    if ("TypeError" === t.name) return !1
                }
                return !0
            }), b.addTest("postmessage", "postMessage" in e), b.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
            var x = !1;
            try {
                x = "WebSocket" in e && 2 === e.WebSocket.CLOSING
            } catch (w) {}
            b.addTest("websockets", x), b.addTest("webaudio", function() {
                var t = "webkitAudioContext" in e,
                    n = "AudioContext" in e;
                return b._config.usePrefixes ? t || n : n
            }), b.addTest("microdata", "getItems" in t), b.addTest("strictmode", function() {
                "use strict";
                return !this
            }()), b.addTest("filereader", !!(e.File && e.FileList && e.FileReader)), b.addTest("lowbandwidth", function() {
                var e = navigator.connection || {
                    type: 0
                };
                return 3 == e.type || 4 == e.type || /^[23]g$/.test(e.type)
            }), b.addTest("eventsource", "EventSource" in e), b.addTest("xhr2", "XMLHttpRequest" in e && "withCredentials" in new XMLHttpRequest), b.addTest("localstorage", function() {
                var e = "modernizr";
                try {
                    return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                } catch (t) {
                    return !1
                }
            }), b.addTest("sessionstorage", function() {
                var e = "modernizr";
                try {
                    return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
                } catch (t) {
                    return !1
                }
            }), b.addTest("websqldatabase", "openDatabase" in e), b.addTest("svgfilters", function() {
                var t = !1;
                try {
                    t = "SVGFEColorMatrixElement" in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
                } catch (n) {}
                return t
            }), b.addTest("websocketsbinary", function() {
                var t, n = "https:" == location.protocol ? "wss" : "ws";
                if ("WebSocket" in e) {
                    if (t = "binaryType" in WebSocket.prototype) return t;
                    try {
                        return !!new WebSocket(n + "://.").binaryType
                    } catch (r) {}
                }
                return !1
            }), b.addTest("framed", e.location != top.location), b.addTest("sharedworkers", "SharedWorker" in e), b.addTest("webworkers", "Worker" in e);
            var S = [],
                C = t.documentElement;
            b.addTest("contextmenu", "contextMenu" in C && "HTMLMenuItemElement" in e), b.addTest("classlist", "classList" in C);
            var k = "svg" === C.nodeName.toLowerCase();
            b.addTest("audio", function() {
                var e = o("audio"),
                    t = !1;
                try {
                    (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (n) {}
                return t
            }), b.addTest("canvas", function() {
                var e = o("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            }), b.addTest("canvastext", function() {
                return b.canvas === !1 ? !1 : "function" == typeof o("canvas").getContext("2d").fillText
            }), b.addTest("contenteditable", function() {
                if ("contentEditable" in C) {
                    var e = o("div");
                    return e.contentEditable = !0, "true" === e.contentEditable
                }
            }), b.addTest("emoji", function() {
                if (!b.canvastext) return !1;
                var t = e.devicePixelRatio || 1,
                    n = 12 * t,
                    r = o("canvas"),
                    i = r.getContext("2d");
                return i.fillStyle = "#f00", i.textBaseline = "top", i.font = "32px Arial", i.fillText("🐨", 0, 0), 0 !== i.getImageData(n, n, 1, 1).data[0]
            }), b.addTest("olreversed", "reversed" in o("ol")), b.addTest("userdata", !!o("div").addBehavior), b.addTest("video", function() {
                var e = o("video"),
                    t = !1;
                try {
                    (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
                } catch (n) {}
                return t
            }), b.addTest("webgl", function() {
                var t = o("canvas"),
                    n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
                return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
            }), b.addTest("adownload", !e.externalHost && "download" in o("a")), b.addTest("bgpositionshorthand", function() {
                var e = o("a"),
                    t = e.style,
                    n = "right 10px bottom 10px";
                return t.cssText = "background-position: " + n + ";", t.backgroundPosition === n
            }), b.addTest("multiplebgs", function() {
                var e = o("a").style;
                return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
            }), b.addTest("regions", function() {
                if (k) return !1;
                var e = b.prefixed("flowFrom"),
                    t = b.prefixed("flowInto"),
                    r = !1;
                if (!e || !t) return r;
                var i = o("iframe"),
                    a = o("div"),
                    s = o("div"),
                    d = o("div"),
                    l = "modernizr_flow_for_regions_check";
                s.innerText = "M", a.style.cssText = "top: 150px; left: 150px; padding: 0px;", d.style.cssText = "width: 50px; height: 50px; padding: 42px;", d.style[e] = l, a.appendChild(s), a.appendChild(d), C.appendChild(a);
                var c, u, p = s.getBoundingClientRect();
                return s.style[t] = l, c = s.getBoundingClientRect(), u = parseInt(c.left - p.left, 10), C.removeChild(a), 42 == u ? r = !0 : (C.appendChild(i), p = i.getBoundingClientRect(), i.style[t] = l, c = i.getBoundingClientRect(), p.height > 0 && p.height !== c.height && 0 === c.height && (r = !0)), s = d = a = i = n, r
            }), b.addTest("cssremunit", function() {
                var e = o("a").style;
                try {
                    e.fontSize = "3rem"
                } catch (t) {}
                return /rem/.test(e.fontSize)
            }), b.addTest("rgba", function() {
                var e = o("a").style;
                return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
            }), b.addTest("dataset", function() {
                var e = o("div");
                return e.setAttribute("data-a-b", "c"), !(!e.dataset || "c" !== e.dataset.aB)
            }), b.addTest("outputelem", "value" in o("output")), b.addTest("ruby", function() {
                function n(n, r) {
                    var i;
                    return e.getComputedStyle ? i = t.defaultView.getComputedStyle(n, null).getPropertyValue(r) : n.currentStyle && (i = n.currentStyle[r]), i
                }

                function r() {
                    C.removeChild(i), i = null, a = null, s = null
                }
                var i = o("ruby"),
                    a = o("rt"),
                    s = o("rp"),
                    d = "display",
                    l = "fontSize";
                return i.appendChild(s), i.appendChild(a), C.appendChild(i), "none" == n(s, d) || "ruby" == n(i, d) && "ruby-text" == n(a, d) || "6pt" == n(s, l) && "6pt" == n(a, l) ? (r(), !0) : (r(), !1)
            }), b.addTest("time", "valueAsDate" in o("time")), b.addTest("fileinput", function() {
                if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
                var e = o("input");
                return e.type = "file", !e.disabled
            }), b.addTest("formattribute", function() {
                var e, n = o("form"),
                    r = o("input"),
                    i = o("div"),
                    a = "formtest" + (new Date).getTime(),
                    s = !1;
                n.id = a;
                try {
                    r.setAttribute("form", a)
                } catch (d) {
                    t.createAttribute && (e = t.createAttribute("form"), e.nodeValue = a, r.setAttributeNode(e))
                }
                return i.appendChild(n), i.appendChild(r), C.appendChild(i), s = n.elements && 1 === n.elements.length && r.form == n, i.parentNode.removeChild(i), s
            }), b.addTest("sandbox", "sandbox" in o("iframe")), b.addTest("seamless", "seamless" in o("iframe")), b.addTest("srcdoc", "srcdoc" in o("iframe")), b.addTest("scriptasync", "async" in o("script")), b.addTest("scriptdefer", "defer" in o("script")), b.addTest("stylescoped", "scoped" in o("style")), b.addTest("inlinesvg", function() {
                var e = o("div");
                return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
            });
            var E = function() {
                function e(e, t) {
                    var i;
                    return e ? (t && "string" != typeof t || (t = o(t || "div")), e = "on" + e, i = e in t, !i && r && (t.setAttribute || (t = o("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1
                }
                var r = !("onblur" in t.documentElement);
                return e
            }();
            T.hasEvent = E, b.addTest("hashchange", function() {
                return E("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
            });
            var z = o("input"),
                P = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
                M = {};
            b.input = function(t) {
                for (var n = 0, r = t.length; r > n; n++) M[t[n]] = !!(t[n] in z);
                return M.list && (M.list = !(!o("datalist") || !e.HTMLDataListElement)), M
            }(P), b.addTest("datalistelem", b.input.list);
            var A = "search tel url email datetime date month week time datetime-local number range color".split(" "),
                R = {};
            b.inputtypes = function(e) {
                for (var r, i, o, a = e.length, s = "1)", d = 0; a > d; d++) z.setAttribute("type", r = e[d]), o = "text" !== z.type && "style" in z, o && (z.value = s, z.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && z.style.WebkitAppearance !== n ? (C.appendChild(z), i = t.defaultView, o = i.getComputedStyle && "textfield" !== i.getComputedStyle(z, null).WebkitAppearance && 0 !== z.offsetHeight, C.removeChild(z)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? z.checkValidity && z.checkValidity() === !1 : z.value != s)), R[e[d]] = !!o;
                return R
            }(A);
            var W = T._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            T._prefixes = W, b.addTest("csscalc", function() {
                var e = "width:",
                    t = "calc(10px);",
                    n = o("a");
                return n.style.cssText = e + W.join(t + e), !!n.style.length
            }), b.addTest("cubicbezierrange", function() {
                var e = o("a");
                return e.style.cssText = W.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "), !!e.style.length
            }), b.addTest("cssgradients", function() {
                for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", i = 0, a = W.length - 1; a > i; i++) e = 0 === i ? "to " : "", r += t + W[i] + "linear-gradient(" + e + "left top, #9f9, white);";
                b._config.usePrefixes && (r += t + "-webkit-" + n);
                var s = o("a"),
                    d = s.style;
                return d.cssText = r, ("" + d.backgroundImage).indexOf("gradient") > -1
            }), b.addTest("opacity", function() {
                var e = o("a").style;
                return e.cssText = W.join("opacity:.55;"), /^0.55$/.test(e.opacity)
            }), b.addTest("csspositionsticky", function() {
                var e = "position:",
                    t = "sticky",
                    n = o("a"),
                    r = n.style;
                return r.cssText = e + W.join(t + ";" + e).slice(0, -e.length), -1 !== r.position.indexOf(t)
            });
            var _ = "CSS" in e && "supports" in e.CSS,
                L = "supportsCSS" in e;
            b.addTest("supports", _ || L), b.addTest("hsla", function() {
                var e = o("a").style;
                return e.cssText = "background-color:hsla(120,40%,100%,.5)", a(e.backgroundColor, "rgba") || a(e.backgroundColor, "hsla")
            });
            var N = {}.toString;
            b.addTest("svgclippaths", function() {
                return !!t.createElementNS && /SVGClipPath/.test(N.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
            }), b.addTest("smil", function() {
                return !!t.createElementNS && /SVGAnimate/.test(N.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
            });
            var O = "Moz O ms Webkit",
                I = T._config.usePrefixes ? O.toLowerCase().split(" ") : [];
            T._domPrefixes = I, b.addTest("pointerevents", function() {
                var e = !1,
                    t = I.length;
                for (e = b.hasEvent("pointerdown"); t-- && !e;) E(I[t] + "pointerdown") && (e = !0);
                return e
            });
            var B = T._config.usePrefixes ? O.split(" ") : [];
            T._cssomPrefixes = B;
            var H = function(t) {
                var r, i = W.length,
                    o = e.CSSRule;
                if ("undefined" == typeof o) return n;
                if (!t) return !1;
                if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
                for (var a = 0; i > a; a++) {
                    var s = W[a],
                        d = s.toUpperCase() + "_" + r;
                    if (d in o) return "@-" + s.toLowerCase() + "-" + t
                }
                return !1
            };
            T.atRule = H;
            var q = T.testStyles = c;
            b.addTest("mathml", function() {
                var e;
                return q("#modernizr{position:absolute;display:inline-block}", function(t) {
                    t.innerHTML += "<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>", e = t.offsetHeight > t.offsetWidth
                }), e
            }), b.addTest("unicode", function() {
                var e, t = o("span"),
                    n = o("span");
                return q("#modernizr{font-family:Arial,sans;font-size:300em;}", function(r) {
                    t.innerHTML = k ? "妇" : "&#5987;", n.innerHTML = k ? "☆" : "&#9734;", r.appendChild(t), r.appendChild(n), e = "offsetWidth" in t && t.offsetWidth !== n.offsetWidth
                }), e
            });
            var F = function() {
                var e = navigator.userAgent,
                    t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
                    n = e.match(/w(eb)?osbrowser/gi),
                    r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
                    i = 533 > t && e.match(/android/gi);
                return n || i || r
            }();
            F ? b.addTest("fontface", !1) : q('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
                var r = t.getElementById("smodernizr"),
                    i = r.sheet || r.styleSheet,
                    o = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "",
                    a = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
                b.addTest("fontface", a)
            }), q('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
                b.addTest("generatedcontent", e.offsetHeight >= 7)
            }), q("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) {
                b.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth)
            }, 2), q("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + W.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:0px}", function(e) {
                b.addTest("cssscrollbar", 40 == e.scrollWidth)
            }), q("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(t) {
                var n = t.firstChild;
                n.innerHTML = "This is a text written in Arial", b.addTest("subpixelfont", e.getComputedStyle ? "44px" !== e.getComputedStyle(n, null).getPropertyValue("width") : !1)
            }, 1, ["subpixel"]), q("#modernizr { height: 50vh; }", function(t) {
                var n = parseInt(e.innerHeight / 2, 10),
                    r = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).height, 10);
                b.addTest("cssvhunit", r == n)
            }), q("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(t) {
                var n = t.childNodes[2],
                    r = t.childNodes[1],
                    i = t.childNodes[0],
                    o = parseInt((r.offsetWidth - r.clientWidth) / 2, 10),
                    a = i.clientWidth / 100,
                    d = i.clientHeight / 100,
                    l = parseInt(50 * Math.max(a, d), 10),
                    c = parseInt((e.getComputedStyle ? getComputedStyle(n, null) : n.currentStyle).width, 10);
                b.addTest("cssvmaxunit", s(l, c) || s(l, c - o))
            }, 3), q("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(t) {
                var n = t.childNodes[2],
                    r = t.childNodes[1],
                    i = t.childNodes[0],
                    o = parseInt((r.offsetWidth - r.clientWidth) / 2, 10),
                    a = i.clientWidth / 100,
                    d = i.clientHeight / 100,
                    l = parseInt(50 * Math.min(a, d), 10),
                    c = parseInt((e.getComputedStyle ? getComputedStyle(n, null) : n.currentStyle).width, 10);
                b.addTest("cssvminunit", s(l, c) || s(l, c - o))
            }, 3), q("#modernizr { width: 50vw; }", function(t) {
                var n = parseInt(e.innerWidth / 2, 10),
                    r = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
                b.addTest("cssvwunit", r == n)
            }), b.addTest("details", function() {
                var e, t = o("details");
                return "open" in t ? (q("#modernizr details{display:block}", function(n) {
                    n.appendChild(t), t.innerHTML = "<summary>a</summary>b", e = t.offsetHeight, t.open = !0, e = e != t.offsetHeight
                }), e) : !1
            }), b.addTest("formvalidation", function() {
                var t = o("form");
                if (!("checkValidity" in t && "addEventListener" in t)) return !1;
                if ("reportValidity" in t) return !0;
                var n, r = !1;
                return b.formvalidationapi = !0, t.addEventListener("submit", function(t) {
                    e.opera && !e.operamini || t.preventDefault(), t.stopPropagation()
                }, !1), t.innerHTML = '<input name="modTest" required="required" /><button></button>', q("#modernizr form{position:absolute;top:-99999em}", function(e) {
                    e.appendChild(t), n = t.getElementsByTagName("input")[0], n.addEventListener("invalid", function(e) {
                        r = !0, e.preventDefault(), e.stopPropagation()
                    }, !1), b.formvalidationmessage = !!n.validationMessage, t.getElementsByTagName("button")[0].click()
                }), r
            });
            var V = function() {
                var t = e.matchMedia || e.msMatchMedia;
                return t ? function(e) {
                    var n = t(e);
                    return n && n.matches || !1
                } : function(t) {
                    var n = !1;
                    return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                    }), n
                }
            }();
            T.mq = V, b.addTest("mediaqueries", V("only all"));
            var $ = {
                elem: o("modernizr")
            };
            b._q.push(function() {
                delete $.elem
            });
            var D = {
                style: $.elem.style
            };
            b._q.unshift(function() {
                delete D.style
            });
            var j = T.testProp = function(e, t, r) {
                return h([e], n, t, r)
            };
            b.addTest("textshadow", j("textShadow", "1px 1px")), T.testAllProps = g;
            var G = T.prefixed = function(e, t, n) {
                return 0 === e.indexOf("@") ? H(e) : (-1 != e.indexOf("-") && (e = d(e)), t ? g(e, t, n) : g(e, "pfx"))
            };
            b.addTest("forcetouch", function() {
                return E(G("mouseforcewillbegin", e, !1), e) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1
            }), b.addTest("fullscreen", !(!G("exitFullscreen", t, !1) && !G("cancelFullScreen", t, !1))), b.addTest("gamepads", !!G("getGamepads", navigator));
            var U;
            try {
                U = G("indexedDB", e)
            } catch (w) {}
            b.addTest("indexeddb", !!U), U && b.addTest("indexeddb.deletedatabase", "deleteDatabase" in U), b.addTest("performance", !!G("performance", e)), b.addTest("pointerlock", !!G("exitPointerLock", t)), b.addTest("quotamanagement", function() {
                    var e = G("temporaryStorage", navigator),
                        t = G("persistentStorage", navigator);
                    return !(!e || !t)
                }), b.addTest("vibrate", !!G("vibrate", navigator)), b.addTest("webintents", !!G("startActivity", navigator)), b.addTest("lowbattery", function() {
                    var e = .2,
                        t = G("battery", navigator);
                    return !!(t && !t.charging && t.level <= e)
                }), b.addTest("filesystem", !!G("requestFileSystem", e)), b.addTest("getusermedia", !!G("getUserMedia", navigator)), T.testAllProps = v, b.addTest("cssanimations", v("animationName", "a", !0)), b.addTest("bgpositionxy", function() {
                    return v("backgroundPositionX", "3px", !0) && v("backgroundPositionY", "5px", !0)
                }), b.addTest("backgroundsize", v("backgroundSize", "100%", !0)), b.addTest("bgsizecover", v("backgroundSize", "cover")), b.addTest("borderimage", v("borderImage", "url() 1", !0)), b.addTest("borderradius", v("borderRadius", "0px", !0)), b.addTest("boxshadow", v("boxShadow", "1px 1px", !0)), b.addTest("boxsizing", v("boxSizing", "border-box", !0) && (t.documentMode === n || t.documentMode > 7)),
                function() {
                    b.addTest("csscolumns", function() {
                        var e = !1,
                            t = v("columnCount");
                        try {
                            (e = !!t) && (e = new Boolean(e))
                        } catch (n) {}
                        return e
                    });
                    for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = v("column" + n[r]), "breakbefore" !== e && "breakafter" !== e && "breakinside" != e || (t = t || v(n[r])), b.addTest("csscolumns." + e, t)
                }(), b.addTest("cssfilters", function() {
                    if (b.supports) return v("filter", "blur(2px)");
                    var e = o("a");
                    return e.style.cssText = W.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9)
                }), b.addTest("flexbox", v("flexBasis", "1px", !0)), b.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)), b.addTest("cssmask", v("maskRepeat", "repeat-x", !0)), b.addTest("overflowscrolling", v("overflowScrolling", "touch", !0)), b.addTest("cssreflections", v("boxReflect", "above", !0)), b.addTest("cssresize", v("resize", "both", !0)), b.addTest("csstransforms3d", function() {
                    var e = !!v("perspective", "1px", !0),
                        t = b._config.usePrefixes;
                    if (e && (!t || "webkitPerspective" in C.style)) {
                        var n, r = "#modernizr{width:0;height:0}";
                        b.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", q(r + n, function(t) {
                            e = 7 === t.offsetWidth && 18 === t.offsetHeight
                        })
                    }
                    return e
                }), b.addTest("csstransitions", v("transition", "all", !0)), b.addTest("userselect", v("userSelect", "none", !0)), i(), delete T.addTest, delete T.addAsyncTest;
            for (var X = 0; X < b._q.length; X++) b._q[X]();
            return b
        };

    }, {}],
    6: [function(require, module, exports) {
        var ayah_debug_enabled = !1,
            ayah_debug_verbose_enabled = !1,
            ayah_debug = function(e) {
                if (window.console || (console = {
                        log: function() {}
                    }), ayah_debug_enabled) {
                    var a = new Date;
                    console.log(a.getTime() + " " + e);
                    var b = document.getElementById("ayah_debug_console");
                    b && (b.innerHTML += "\n<br>" + e)
                }
            },
            ayah_debug_verbose = function(e) {};
        module.exports = function(e) {
            return "undefined" != typeof e.enable_debug && (ayah_debug_enabled = e.enable_debug), "undefined" != typeof e.enable_debug_verbose && (ayah_debug_verbose_enabled = e.enable_debug_verbose), {
                ayah_debug: ayah_debug,
                ayah_debug_verbose: ayah_debug_verbose
            }
        };
    }, {}],
    7: [function(require, module, exports) {
        "use strict";
        var ayah_debug, addChecksum, pako = require("pako/dist/pako_deflate.min"),
            JSON = require("./3rdparty/json3"),
            xhr_status = [],
            xhr_type = "unknown",
            min_deflate_size = 10240,
            xhr_obj = {
                Xhr: function() {
                    try {
                        return xhr_type = "new XMLHttpRequest()", new XMLHttpRequest
                    } catch (e) {}
                    try {
                        return xhr_type = "new ActiveXObject(Msxml3.XMLHTTP)", new ActiveXObject("Msxml3.XMLHTTP")
                    } catch (e) {}
                    try {
                        return xhr_type = "new ActiveXObject(Msxml2.XMLHTTP.6.0)", new ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (e) {}
                    try {
                        return xhr_type = "new ActiveXObject(Msxml2.XMLHTTP.3.0)", new ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (e) {}
                    try {
                        return xhr_type = "new ActiveXObject(Msxml2.XMLHTTP)", new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {}
                    try {
                        return xhr_type = "new ActiveXObject(Microsoft.XMLHTTP)", new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                    return xhr_type = "null", null
                },
                getXhrObject: function() {
                    if (window.XDomainRequest) {
                        xhr_obj.updateStatus("Using new XDomainRequest()");
                        var e = new XDomainRequest;
                        e.onload = function() {}
                    } else {
                        var e = xhr_obj.Xhr();
                        xhr_obj.updateStatus("Using " + xhr_type)
                    }
                    return e
                },
                sendGetRequest: function(e) {
                    var t = xhr_obj.getXhrObject();
                    t.open("get", e), t.send()
                },
                sendPostRequest: function(e) {
                    addChecksum(e.payload), e.payload = JSON.stringify(e.payload), void 0 === e.async && (e.async = !0), void 0 === e.deflate && (e.deflate = !1, e.payload.length > min_deflate_size && (e.deflate = !0));
                    try {
                        xhr_obj.__sendPostRequest(e)
                    } catch (t) {
                        xhr_obj.__retry(e, t.message)
                    }
                },
                __retry: function(e, t) {
                    e.deflate && (xhr_obj.updateStatus("sendPostRequest: failed sending a deflated payload: " + t), e.deflate = !1, xhr_obj.__sendPostRequest(e))
                },
                __sendPostRequest: function(e) {
                    var t = xhr_obj.getXhrObject();
                    t.onreadystatechange = function() {
                        4 == t.readyState && 200 !== t.status && xhr_obj.__retry(e, "POST call failed: status=" + t.status)
                    }, xhr_obj.setEventHandlers(t, e.handlers), xhr_obj.updateStatus("__sendPostRequest: Calling xhr.open(), async=" + e.async), t.open("post", e.url, e.async), xhr_obj.setHeaders(t, e.headers), t.withCredentials = !0;
                    var r = e.payload;
                    if (e.deflate && xhr_obj.setRequestHeader(t, "Content-encoding", "deflate")) {
                        r.length;
                        xhr_obj.updateStatus("__sendPostRequest: Calling pako.deflate()"), r = pako.deflate(r)
                    }
                    xhr_obj.updateStatus("__sendPostRequest: Calling xhr.send()"), t.send(r), xhr_obj.updateStatus("__sendPostRequest: Called xhr.send()")
                },
                setEventHandlers: function(e, t) {
                    var r = function() {};
                    e.onprogress = t && t.onprogress ? t.onprogress : r, e.ontimeout = t && t.ontimeout ? t.ontimeout : r, e.onerror = t && t.onerror ? t.onerror : r, e.onload = t && t.onload ? t.onload : r, xhr_obj.savePostXhrObject(e)
                },
                savePostXhrObject: function(e) {
                    xhr_obj.postXhrObject = e
                },
                getPostXhrObject: function() {
                    return xhr_obj.postXhrObject
                },
                getPostResponse: function() {
                    var e = xhr_obj.getPostXhrObject();
                    return e ? e.response : void 0
                },
                setHeaders: function(e, t) {
                    "object" == typeof t && t.forEach(function(t) {
                        xhr_obj.setRequestHeader(e, t.name, t.value)
                    })
                },
                setRequestHeader: function(e, t, r) {
                    try {
                        return e.setRequestHeader(t, r), !0
                    } catch (n) {
                        xhr_obj.updateStatus("setRequestHeader: Call to xhr.setRequestHeader() failed: " + n.message)
                    }
                },
                updateStatus: function(e) {
                    xhr_status.push(e)
                },
                getStatus: function() {
                    return xhr_status
                }
            };
        module.exports = function(e) {
            return ayah_debug = e.getDebugFunction(), addChecksum = e.getAddChecksum(), xhr_obj
        };

    }, {
        "./3rdparty/json3": 4,
        "pako/dist/pako_deflate.min": 1
    }],
    8: [function(require, module, exports) {
        var factory, ayah_debug, streamStats = function() {
            var t = factory.getStreamStats().getStats();
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var r = t[a];
                    r.count
                }
        };
        module.exports = function(t) {
            return factory = t, ayah_debug = factory.getDebugFunction(), streamStats
        };

    }, {}],
    9: [function(require, module, exports) {
        "use strict";
        ! function(e, t, n) {
            function r() {
                if ("undefined" == typeof e) throw new Error("window is undefined");
                if ("undefined" == typeof e.document) throw new Error("window.document is undefined");
                if ("undefined" != typeof e.AYAH_STARTED && "started" == e.AYAH_STARTED) return !1;
                e.AYAH_STARTED = "started";
                var t = n.throttling_rate;
                if (t > 0) {
                    var r = 100 * Math.random();
                    if (t >= r) return !1
                }
                return !0
            }

            function a() {
                var t = i();
                t && N.sendData(e, n, t, B)
            }

            function i() {
                return N.getParams(x)
            }

            function o(e, n) {
                try {
                    var r = n.force_proxy || i() ? n.ga_iframe_url : n.iframe_url,
                        a = t.createElement("iframe");
                    a.id = "AYAH_iframe" + (new Date).getTime(), a.src = e + r + "?" + s(), a.width = 0, a.height = 0, a.scrolling = "no", a.frameBorder = 0, a.style.cssText = "border:none;overflow:hidden;display:none;", t.body.appendChild(a)
                } catch (o) {
                    C({
                        message: "litter_failure",
                        error: o.message,
                        stack: o.stack
                    })
                }
            }

            function s() {
                var e = {
                    ak: B,
                    pk: n.publisher_key,
                    AYAH_VERSION: n.AYAH_VERSION,
                    cookiesync: n.cookiesync
                };
                Y.add(e);
                var t = U(e);
                return t
            }

            function c(e) {
                y("Received call to ayahCleanup()"), y("Calling sendTelemetryEvent()"), d(e), y("Exiting ayahCleanup()")
            }

            function u() {
                var e = I.getSerializer().getAllObservations();
                e.type = "telemetry", e.ak = B, e.pk = n.publisher_key, e.AYAH_VERSION = n.AYAH_VERSION;
                var t = I.getStreamStats().getAggregateStats();
                return e.ec = t.count, e.ea = t.average.toFixed(3), V.addDeviceData(e), V.addUserAgentData(e), y("getCollectedData: Calling script_parameters.add()"), Y.add(e), e
            }

            function l() {
                var e = v();
                e.defense_mode = h();
                var t = !0,
                    r = {
                        onload: function() {
                            w = !0, f(q.getPostResponse())
                        }
                    };
                y("sendInitEvent: Calling sendEvent()");
                var a = n.force_proxy ? n.proxy_events_url : n.events_url;
                _(G, a, e, t, r)
            }

            function d(e) {
                if (w && "undefined" == typeof b) {
                    y("sendTelemetryEvent: Calling getCollectedData()");
                    var t = u();
                    t.defense_mode = h(), t.before_unload_event_fired = e;
                    var r = 0 == e,
                        a = {
                            onload: function() {
                                f(q.getPostResponse())
                            }
                        };
                    y("sendTelemetryEvent: Calling sendEvent()"), _(G, n.events_url, t, r, a), b = !0
                }
            }

            function f(e) {
                if (h()) try {
                    var t = R.parse(e);
                    t && t.uuid && (A("uuid", t.uuid), A("token", t.defense_token), g("receivedDistilBotDefenseToken", t))
                } catch (n) {}
            }

            function g(t, n) {
                var r = new CustomEvent(t, {
                    detail: n
                });
                e.dispatchEvent(r)
            }

            function v() {
                var e = {
                    type: "init",
                    set_id: !0,
                    ak: B,
                    pk: n.publisher_key,
                    AYAH_VERSION: n.AYAH_VERSION
                };
                return V.addDeviceData(e), V.addUserAgentData(e), y("getInitData: Calling script_parameters.add()"), Y.add(e), e
            }

            function _(e, t, r, a, i) {
                if (a || !n.no_synchronous_event_calls) {
                    var o = e + t + "?cb=" + H() + "&ak=" + B;
                    h() && (r.uuid = m("uuid")), r.request_id = x.request_id, q.sendPostRequest({
                        url: o,
                        payload: r,
                        handlers: i,
                        async: a
                    })
                }
            }

            function y(e) {
                P.push(e)
            }

            function p(e) {
                return P
            }

            function h() {
                return !!n.defense_mode
            }

            function m(e) {
                var t = k(e);
                return t ? E(t.name) : void 0
            }

            function A(e, t) {
                var n = k(e);
                n && D(n.name, t, n.max_age)
            }

            function k(e) {
                return n.defense_cookies ? n.defense_cookies[e] : void 0
            }

            function D(e, n, r) {
                var a = new Date((new Date).getTime() + r).toUTCString();
                t.cookie = e + "=" + n + "; expires=" + a + "; path=/"
            }

            function E(e) {
                for (var n = t.cookie.split(";"), r = e + "=", a = 0; a < n.length; a++) {
                    for (var i = n[a];
                        " " == i.charAt(0);) i = i.substring(1, i.length);
                    if (0 == i.indexOf(r)) return i.substring(r.length, i.length)
                }
                return null
            }

            function C(t) {
                var r = "";
                try {
                    r = e.location.href
                } catch (a) {}
                var i = "[not available]",
                    o = {
                        href: r || i,
                        attempt_key: B,
                        publisher_key: n.publisher_key,
                        AYAH_VERSION: n.AYAH_VERSION
                    };
                try {
                    V.addUserAgentData(o)
                } catch (s) {
                    error.ua_data = i
                }
                for (var c in t) t.hasOwnProperty(c) && (o[c] = t[c]);
                var u = n.log_url + "error=" + R.stringify(o);
                q.sendGetRequest(u)
            }

            function S() {
                try {
                    if (y("Calling canRun()"), !r()) return;
                    y("Calling checkGoogleAnalytics()"), a(), y("Calling createLitter()"), o(G, n), y("Calling sendInitEvent()"), l(), y("Calling collector.collect()");
                    try {
                        O.collect(c)
                    } catch (e) {
                        C({
                            message: "collector_failure",
                            error: e.message,
                            stack: e.stack
                        })
                    }
                    y("Waiting for call to ayahCleanup()")
                } catch (e) {
                    var t = "[not available]";
                    C({
                        cat_status: p(),
                        xhr_status: q.getStatus(),
                        message: e.message || t,
                        stack: e.stack || t
                    })
                }
            }
            require("./collectData/polyfills");
            var b, w, R = require("./3rdparty/json3"),
                T = require("./collectData/config"),
                I = require("./collectData/Factory")(T, n, e, t),
                O = I.getCollector(),
                H = require("./getCacheBusterValue"),
                Y = I.getScriptParameterFunctions(),
                x = Y.get(),
                q = I.getXhr(),
                V = I.getLegacyCatFunctions(),
                N = I.getGoogleAnalyticsFunctions(),
                P = (I.getDebugFunction(), I.getStreamStatsDebugFunction(), []),
                F = function(t) {
                    var n = 20,
                        r = 1.5,
                        a = function() {
                            e.document && e.document.body ? t() : (setTimeout(a, n), n *= r)
                        };
                    a()
                },
                U = function(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                },
                B = I.getUUID().make(),
                G = "https:";
            F(S)
        }(window, document, AyahPublisherOptions);
    }, {
        "./3rdparty/json3": 4,
        "./collectData/Factory": 15,
        "./collectData/config": 33,
        "./collectData/polyfills": 34,
        "./getCacheBusterValue": 35
    }],
    10: [function(require, module, exports) {
        var ayah_debug, window, Automation = function() {
            function n(n) {
                return Number(Boolean(n))
            }
            var t = {
                    get: function() {
                        var n = [];
                        try {
                            n = [o(), r(), u(), i(), e(), a(), w()]
                        } catch (t) {}
                        return n
                    }
                },
                o = function() {
                    var n;
                    try {
                        null[0]()
                    } catch (t) {
                        n = t
                    }
                    return Number(d(n.stack, "phantomjs://") > -1 || window._phahjkntom || window.__phantomas || window.callPhantom || 0 == navigator.onLine && "" == navigator.plugins)
                },
                r = function() {
                    return n(window.Buffer)
                },
                u = function() {
                    return n(window.emit)
                },
                i = function() {
                    return n(window.spawn)
                },
                e = function() {
                    return n(window.webdriver)
                },
                a = function() {
                    return n(window.domAutomation || window.domAutomationController)
                },
                w = function() {
                    return Number(0 === window.outerWidth && 0 === window.outerHeight)
                },
                d = function(n, t) {
                    if (!n || !t) return -1;
                    for (var o = 0; o < n.length; o++) {
                        var r = n.substring(o, o + t.length);
                        if (r === t) return o
                    }
                    return -1
                };
            return t
        };
        module.exports = function(n, t) {
            return window = n, ayah_debug = t.getDebugFunction(), Automation()
        };

    }, {}],
    11: [function(require, module, exports) {
        var ayah_debug, AyahConfig = function() {
            var t, r = function(e) {
                    return t ? t : (t = this, void(this._config = this._extrapolateDefaults(e)))
                },
                n = r.prototype;
            n.getPayloadVersion = function() {
                try {
                    return this._config.version
                } catch (t) {}
            }, n.getActiveStreams = function() {
                var t = [];
                try {
                    for (var e = 0; e < this._config.active_stream_groups.length; e++) {
                        var r = this._config.active_stream_groups[e];
                        t = t.concat(this._config.stream_groups[r])
                    }
                } catch (n) {}
                return t
            }, n.getStreamsWithLimits = function() {
                var t = this._config.streams;
                return this.getActiveStreams().filter(function(e) {
                    try {
                        var r = t[e];
                        return Boolean(r.min_tuples || r.max_tuples)
                    } catch (n) {
                        return !1
                    }
                })
            }, n.getMinTuples = function(t) {
                try {
                    return this._config.streams[t].min_tuples
                } catch (e) {}
            }, n.getMaxTuples = function(t) {
                try {
                    return this._config.streams[t].max_tuples
                } catch (e) {}
            }, n.getInterval = function(t) {
                try {
                    return 1e3 / this._config.streams[t].frequency
                } catch (e) {}
            }, n.getPollingInterval = function(t) {
                try {
                    var e = this._config.streams[t];
                    return 1e3 / e.polling_frequency || e.frequency
                } catch (r) {}
            }, n.getAllowRepetition = function(t) {
                try {
                    return 1 == this._config.streams[t].allow_repetition
                } catch (e) {}
            }, n.getEvents = function(t) {
                try {
                    return this._config.streams[t].events
                } catch (e) {}
            }, n.getEventTarget = function(t) {
                try {
                    return this._config.streams[t].event_target
                } catch (e) {}
            }, n.getTupleFormat = function(t) {
                try {
                    return this._config.streams[t].tuple
                } catch (e) {}
            }, n.shouldSampleAll = function(t, e) {
                try {
                    return this._config.streams[t].sample_all.indexOf(e) >= 0
                } catch (r) {}
            }, n.shouldGetInitialValue = function(t) {
                try {
                    return this._config.streams[t].get_initial_value || !1
                } catch (e) {}
            }, n.getPollingStreams = function() {
                var t = this._config.streams;
                return this.getActiveStreams().filter(function(e) {
                    try {
                        return t[e].polling
                    } catch (r) {
                        return !1
                    }
                })
            }, n._extrapolateDefaults = function(t) {
                var e, r = "defaults",
                    n = {},
                    a = {};
                r in t && (a = t[r]);
                for (e in t) t.hasOwnProperty(e) && e != r && ("object" != typeof t[e] || t[e] instanceof Array ? n[e] = t[e] : n[e] = i(a, this._extrapolateDefaults(t[e])));
                return n
            };
            var i = function(t, r) {
                var n = r instanceof Array,
                    a = n && [] || {};
                if (n) {
                    t = t || [], a = a.concat(t);
                    for (var o in r) r.hasOwnProperty(o) && (e = r[o], "undefined" == typeof a[o] ? a[o] = e : "object" == typeof e ? a[o] = i(t[o], e) : -1 === t.indexOf(e) && a.push(e))
                } else {
                    if (t && "object" == typeof t)
                        for (var c in t) t.hasOwnProperty(c) && (a[c] = t[c]);
                    for (var c in r) r.hasOwnProperty(c) && ("object" == typeof r[c] && r[c] && t[c] ? a[c] = i(t[c], r[c]) : a[c] = r[c])
                }
                return a
            };
            return r
        }();
        module.exports = function(t, e) {
            return ayah_debug = e.getDebugFunction(), new AyahConfig(t)
        };

    }, {}],
    12: [function(require, module, exports) {
        var factory, options, config, running, callback, ayah_debug, window, stop_collection_timer, stream, start_timestamp, collectData = function(t) {
                if (!running) {
                    start_timestamp = (new Date).getTime(), running = !0, callback = t, window.onbeforeunload = stopCollection(!0);
                    var e = factory.getCollectionLimit();
                    e.on("reached", stopCollection(!1)), factory.getEventFeed().start(), stream = factory.getStream(), stream.ingest(factory.getModernizrFeatures().getAll(), "modernizr"), stream.ingest(factory.getAutomation().get(), "automation"), stream.ingest(factory.getPerformance().get(), "performance"), factory.getPollingFeed().start()
                }
            },
            stopCollection = function(t) {
                return function() {
                    if (running) {
                        var e = (new Date).getTimezoneOffset() / 60;
                        stream.ingest([start_timestamp, e], "data_collection_timer"), clearTimeout(stop_collection_timer), factory.getPollingFeed().stop(), factory.getStream().stop(), factory.getEventManager().cleanUp(), running = !1, "function" == typeof callback && callback(t)
                    }
                }
            },
            Collector = {
                collect: collectData,
                stop: stopCollection(!1)
            };
        module.exports = function(t, e, o) {
            return factory = o, config = factory.getAyahConfig(), ayah_debug = factory.getDebugFunction(), options = e, window = t, Collector
        };

    }, {}],
    13: [function(require, module, exports) {
        var EventFeed = function() {
            var t, e = function(e) {
                    return t ? t : (t = this, this._factory = e, this._stream = e.getStream(), this._events = e.getEventManager(), void(this._config = e.getAyahConfig()))
                },
                n = e.prototype;
            return n.start = function() {
                this._subscribeToEvents()
            }, n._subscribeToEvents = function() {
                for (var t = this._config.getActiveStreams(), e = 0; e < t.length; e++) {
                    var n = t[e];
                    this._subscribeToEventsForObject(n)
                }
            }, n._subscribeToEventsForObject = function(t) {
                var e = this._config.getEvents(t),
                    n = this._factory.getBOM(this._config.getEventTarget(t)),
                    s = this._stream,
                    i = function(e) {
                        s.ingest(e, t)
                    };
                this._events.addMultiple(n, e, i)
            }, e
        }();
        module.exports = function(t) {
            return new EventFeed(t)
        };

    }, {}],
    14: [function(require, module, exports) {
        var ayah_debug, ayah_debug_verbose, EventManager = function() {
            var e, t = function() {
                    return e ? e : (e = this, this._event_listeners = {}, void this.detectPassiveSupport())
                },
                n = t.prototype;
            return n.detectPassiveSupport = function() {
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            this._supports_passive = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {}
            }, n.addMultiple = function(e, t, n) {
                if (t instanceof Array)
                    for (var a = 0; a < t.length; a++) this.add(e, t[a], n)
            }, n.add = function(e, t, n) {
                e || (e = document);
                var a = this._event_listeners;
                try {
                    if (t in a || (a[t] = []), e.attachEvent) {
                        var r = function(e) {
                            return "undefined" != typeof e ? void n(e) : void n(window.event)
                        };
                        return e.attachEvent("on" + t, r), void a[t].push({
                            target: e,
                            callback: r
                        })
                    }
                    e.addEventListener(t, n, this._supports_passive ? {
                        passive: !0
                    } : !1), a[t].push({
                        target: e,
                        callback: n
                    })
                } catch (i) {}
            }, n.remove = function(e, t, n) {
                e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n, !1)
            }, n.cleanUp = function() {
                var e = this._event_listeners;
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        for (var n = e[t], a = 0; a < n.length; a++) {
                            var r = n[a];
                            this.remove(r.target, t, r.callback)
                        }
                        delete e[t]
                    }
            }, t
        }();
        module.exports = function(e) {
            return ayah_debug = e.getDebugFunction(), ayah_debug_verbose = e.getVerboseDebugFunction(), new EventManager
        };

    }, {}],
    15: [function(require, module, exports) {
        var Factory = function() {
            var e, t, r, n = function(t, r, n, i) {
                    if (e) return e;
                    this._options = r, e = this;
                    var u = require("./AyahConfig");
                    this._config = u(t, e), this._factory = this, this._window = n, this._document = i
                },
                i = n.prototype;
            return i.getAyahConfig = function() {
                return this._config
            }, i.getOptions = function() {
                return this._options
            }, i.getDebugFunction = function() {
                return require("../AyahDebug")(this.getOptions()).ayah_debug
            }, i.getVerboseDebugFunction = function() {
                return require("../AyahDebug")(this.getOptions()).ayah_debug_verbose
            }, i.getStreamStatsDebugFunction = function() {
                return require("../ayah_debug_stats")(e)
            }, i.getXhr = function() {
                return require("../Xhr")(e)
            }, i.getLegacyCatFunctions = function() {
                return require("./LegacyCatFunctions")(this._window, this._document, e)
            }, i.getScriptParameterFunctions = function() {
                return require("./ScriptParameterFunctions")(this._document, this._options, e)
            }, i.getGoogleAnalyticsFunctions = function() {
                return require("./GoogleAnalyticsFunctions")(e)
            }, i.getUUID = function() {
                var e = require("./UUID");
                return new e
            }, i.getEventManager = function() {
                var t = require("./EventManager");
                return t(e)
            }, i.getTimer = function() {
                if (!t) {
                    var r = require("./Timer");
                    t = r(e)
                }
                return t
            }, i.getStream = function() {
                var t = require("./Stream");
                return t(e)
            }, i.getBOM = function(e) {
                var t = {
                    window: window,
                    document: window.document,
                    body: window.document.body,
                    screen: window.screen
                };
                if (e in t) return t[e];
                this.getVerboseDebugFunction()
            }, i.getEventFeed = function() {
                var t = require("./EventFeed");
                return t(e)
            }, i.getPollingFeed = function() {
                var t = require("./PollingFeed");
                return t(e)
            }, i.makeMorsel = function(t, r) {
                var n = require("./Morsel");
                return n(e, t, r)
            }, i.getTupleGetters = function() {
                var t = require("./TupleGetters");
                return t(e, this.getAyahConfig())
            }, i.getSerializer = function() {
                var t = require("./FullSerializer");
                return t(e)
            }, i.getStreamStats = function() {
                var t = require("./StreamStats");
                return t(e)
            }, i.getModernizr = function() {
                var e = require("../3rdparty/modernizr-3.3.1-custom");
                return e(this._window, this._document, void 0)
            }, i.getModernizrFeatures = function() {
                var t = require("./ModernizrFeatures");
                return t(e)
            }, i.getAutomation = function() {
                var t = require("./Automation");
                return t(this._window, e)
            }, i.getCollector = function() {
                return require("./Collector")(this._window, this._options, e)
            }, i.getPerformance = function() {
                var t = require("./Performance")(e);
                return t()
            }, i.getAddChecksum = function() {
                var t = require("./addChecksum")(e);
                return t()
            }, i.getTupleCounter = function(e) {
                var t = require("./TupleCounter");
                return new t(e)
            }, i.getCollectionLimit = function() {
                return r || (r = require("./collection_limit")(e)), r
            }, n
        }();
        module.exports = function(e, t, r, n) {
            return new Factory(e, t, r, n)
        };

    }, {
        "../3rdparty/modernizr-3.3.1-custom": 5,
        "../AyahDebug": 6,
        "../Xhr": 7,
        "../ayah_debug_stats": 8,
        "./Automation": 10,
        "./AyahConfig": 11,
        "./Collector": 12,
        "./EventFeed": 13,
        "./EventManager": 14,
        "./FullSerializer": 16,
        "./GoogleAnalyticsFunctions": 17,
        "./LegacyCatFunctions": 18,
        "./ModernizrFeatures": 19,
        "./Morsel": 20,
        "./Performance": 21,
        "./PollingFeed": 22,
        "./ScriptParameterFunctions": 23,
        "./Stream": 24,
        "./StreamStats": 25,
        "./Timer": 26,
        "./TupleCounter": 27,
        "./TupleGetters": 28,
        "./UUID": 29,
        "./addChecksum": 31,
        "./collection_limit": 32
    }],
    16: [function(require, module, exports) {
        var FullSerializer = function() {
            var t, r = function(r) {
                    return t ? t : (t = this, this._stream = r.getStream(), this._factory = r, this._config = r.getAyahConfig(), this._last_tuple = null, void(this._next_index = 0))
                },
                e = r.prototype;
            return e.getAllObservations = function() {
                var t = this._stream.getData(),
                    r = {};
                for (var e in t) t.hasOwnProperty(e) && (r[e] = this._extractTuplesFromMorsels(t[e]));
                return r.version = this._config.getPayloadVersion(), r
            }, e._getCombinedStreams = function(t, r) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    r.hasOwnProperty(i) && (e = e.concat(r[i]))
                }
                return e.sort(function(t, r) {
                    return t.millis - r.millis
                })
            }, e._extractTuplesFromMorsels = function(t) {
                for (var r = [], e = null, n = 0; n < t.length; n++) {
                    var i = t[n];
                    this._addTuples(r, i, e), e = i
                }
                return r
            }, e._addTuples = function(t, r, e) {
                var n = 0;
                e && (n = e.millis);
                for (var i = 0; i < r.data.length; i++) {
                    var a = [r.millis - n],
                        o = a.concat(r.data[i]);
                    t.push(o)
                }
            }, r
        }();
        module.exports = function(t) {
            return new FullSerializer(t)
        };

    }, {}],
    17: [function(require, module, exports) {
        function getGoogleAnalyticsParams(e) {
            var t;
            return e.GA_TID && e.GA_CDI && (t = {
                tid: e.GA_TID,
                cdi: e.GA_CDI
            }), t
        }

        function sendGoogleAnalyticsData(e, t, a, n) {
            function o() {
                var i = getGoogleAnalyticsObject(e);
                if (i) {
                    var r = getGoogleAnalyticsTracker(i, a);
                    if (r) return a.cid = r.get("clientId"), void xhr.sendPostRequest({
                        url: t.google_analytics_url + "/" + t.publisher_key + "?ak=" + n + "&cb=" + getCacheBusterValue(),
                        payload: a,
                        headers: [{
                            name: "Content-type",
                            value: "application/json"
                        }, {
                            name: "X-Distil-Ajax",
                            value: !0
                        }],
                        deflate: !1,
                        async: !0
                    })
                }++l < t.google_analytics.max_polls && setTimeout(o, t.google_analytics.poll_interval_ms)
            }
            var l = 1;
            o()
        }

        function getGoogleAnalyticsObject(e) {
            var t = e[e.GoogleAnalyticsObject || "ga"];
            return "function" == typeof t ? t : void 0
        }

        function getGoogleAnalyticsTracker(e, t) {
            var a;
            return e(function() {
                var n = e.getAll();
                n.forEach(function(e) {
                    return e.get("trackingId") == t.tid ? void(a = e) : void 0
                })
            }), a
        }
        var ayah_debug, getCacheBusterValue = require("../getCacheBusterValue"),
            ga_functions = {
                getParams: getGoogleAnalyticsParams,
                sendData: sendGoogleAnalyticsData
            };
        module.exports = function(e) {
            return ayah_debug = e.getDebugFunction(), xhr = e.getXhr(), ga_functions
        };

    }, {
        "../getCacheBusterValue": 35
    }],
    18: [function(require, module, exports) {
        var ayah_debug, ayah_debug_verbose, window, document, addDeviceData = function(e) {
                "undefined" == typeof e && (e = {});
                var t = get_container_dimension();
                return e.device_screen_width = t.x, e.device_screen_height = t.y, e.iframe = inIframe(), e.iframe_depth = getFrameDepth(self), e.history_depth = getHistoryDepth(), getPublisherDomain() && (e.pd = getPublisherDomain()), e
            },
            getPublisherDomain = function() {
                try {
                    return window.location.hostname
                } catch (e) {
                    return !1
                }
            },
            getHistoryDepth = function() {
                try {
                    return window.history.length
                } catch (e) {
                    return -1
                }
            },
            getFrameDepth = function(e) {
                try {
                    return e === window.top ? 0 : e.parent === window.top ? 1 : 1 + getFrameDepth(e.parent)
                } catch (t) {
                    return -1
                }
            },
            get_container_dimension = function() {
                function e(e, t) {
                    try {
                        if ("undefined" != typeof e && "undefined" != typeof e[t]) return e[t]
                    } catch (n) {}
                }
                var t = {
                    x: 0,
                    y: 0
                };
                try {
                    var n = window,
                        r = document,
                        i = r.documentElement,
                        a = r.getElementsByTagName("body")[0],
                        o = e(n, "innerWidth") || e(i, "clientWidth") || e(a, "clientWidth") || 0,
                        u = e(n, "innerHeight") || e(i, "clientHeight") || e(a, "clientHeight") || 0;
                    t = {
                        x: parseInt(o, 10),
                        y: parseInt(u, 10)
                    }
                } catch (d) {}
                return t
            },
            inIframe = function() {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            },
            pruneEmptyStrings = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) switch (typeof e[t]) {
                        case "string":
                            e[t].length || delete e[t];
                            break;
                        case "object":
                            pruneEmptyStrings(e[t])
                    }
            },
            addUserAgentData = function(e) {
                void 0 == typeof e && (e = {});
                var t = require("ua-parser-js"),
                    n = new t.UAParser,
                    r = n.getResult();
                return pruneEmptyStrings(r), e.ua_browser_name = r.browser.name, e.ua_browser_version = r.browser.version, e.ua_browser_major = r.browser.major, e.ua_engine_name = r.engine.name, e.ua_engine_version = r.engine.version, e.ua_os_name = r.os.name, e.ua_os_version = r.os.version, e.ua_device_model = r.device.model, e.ua_device_type = r.device.type, e.ua_device_vendor = r.device.vendor, e.ua_cpu_architecture = r.cpu.architecture, e
            };
        module.exports = function(e, t, n) {
            return window = e, document = t, ayah_debug = n.getDebugFunction(), ayah_debug_verbose = n.getVerboseDebugFunction(), {
                addDeviceData: addDeviceData,
                addUserAgentData: addUserAgentData
            }
        };

    }, {
        "ua-parser-js": 3
    }],
    19: [function(require, module, exports) {
        var Modernizr, ayah_debug_verbose, ModernizrFeatures = {
            getAll: function() {
                if ("object" != typeof Modernizr) return [];
                var e = {
                    formvalidationapi: 0,
                    formvalidationmessage: 0
                };
                return this._unrollProperties(Modernizr, e), e
            },
            _unrollProperties: function(e, r, o) {
                "undefined" == typeof o && (o = "");
                for (var n in e)
                    if (e.hasOwnProperty(n) && "_" !== n.substr(0, 1)) {
                        var t = e[n];
                        "object" != typeof t || t === !1 || t === !0 ? ("string" == typeof e[n], r[o + n] = this._numericValue(t)) : this._unrollProperties(t, r, o + n + ".")
                    }
            },
            _numericValue: function(e) {
                return "probably" === e ? 2 : e === !0 || "maybe" === e ? 1 : e === !1 || "" === e ? 0 : e
            }
        };
        module.exports = function(e) {
            return ayah_debug_verbose = e.getVerboseDebugFunction(), Modernizr = e.getModernizr(), ModernizrFeatures
        };

    }, {}],
    20: [function(require, module, exports) {
        var Morsel = function() {
            var t = function(t, e, i, r) {
                    this._timer = t.getTimer(), this._config = t.getAyahConfig(), this._factory = t, this.data = e, this.type = i, "number" == typeof r ? this.millis = r : this.millis = this._getObjectTimestamp(e), this.sample_num = Math.floor(this.millis / this._config.getInterval(i))
                },
                e = t.prototype;
            return e.mustSample = function() {
                try {
                    return this._config.shouldSampleAll(this.type, this.data.type)
                } catch (t) {}
                return !1
            }, e.makeTuples = function() {
                var t = this._factory.getTupleGetters().get(this);
                return t ? (this.data = t, !0) : !1
            }, e._getObjectTimestamp = function(t) {
                var e = this._timer.currentTime();
                return this._timer.getTimeElapsed(e)
            }, t
        }();
        module.exports = function(t, e, i, r) {
            return new Morsel(t, e, i, r)
        };

    }, {}],
    21: [function(require, module, exports) {
        var ayah_debug, Performance = function() {
            var r = function(e, n) {
                return 1e-8 > e ? n : n > e ? r(n - Math.floor(n / e) * e, e) : e == n ? e : r(n, e)
            };
            return {
                get: function() {
                    var e = 0;
                    try {
                        for (var n = performance.now() / 1e3, o = performance.now() / 1e3 - n, a = 0; 10 > a; a++) o = r(o, performance.now() / 1e3 - n);
                        o > 0 && (e = Math.round(1 / o))
                    } catch (t) {}
                    return e
                }
            }
        };
        module.exports = function(r) {
            return ayah_debug = r.getDebugFunction(), Performance
        };

    }, {}],
    22: [function(require, module, exports) {
        "use strict";
        var config, stream, ayah_debug, running = !1,
            start = function() {
                if (!running) {
                    ingestInitialValues();
                    var n = config.getPollingStreams();
                    running = !0, n.forEach(setupInterval)
                }
            },
            stop = function() {
                running = !1
            },
            setupInterval = function(n) {
                var t = config.getPollingInterval(n),
                    e = makeHandler(n, t);
                e()
            },
            makeHandler = function(n, t) {
                var e = function() {
                    running && (stream.ingest(null, n), setTimeout(e, t))
                };
                return e
            },
            ingestInitialValues = function() {
                for (var n = config.getActiveStreams(), t = 0; t < n.length; t++) {
                    var e = n[t];
                    config.shouldGetInitialValue(e) && stream.ingest(null, e)
                }
            },
            interval_feed = {
                start: start,
                stop: stop
            };
        module.exports = function(n) {
            return config = n.getAyahConfig(), stream = n.getStream(), ayah_debug = n.getDebugFunction(), interval_feed
        };

    }, {}],
    23: [function(require, module, exports) {
        "use strict";

        function getDistiltagScriptObject() {
            if ("object" == typeof document.currentScript && null != document.currentScript && "string" == typeof document.currentScript.src) return document.currentScript;
            var t = "distiltag_script_" + options.publisher_key,
                r = document.getElementById(t);
            if (r) return r;
            for (var e = new RegExp(options.script_param_regexp_str), a = document.getElementsByTagName("script"), i = a.length - 1; i >= 0; i--)
                if (e.test(a[i].src)) return a[i]
        }

        function getParamsFromDataAttribute(t) {
            if (t) {
                var r = t.getAttribute("data-distiltag-params");
                return parseRawScriptParameters(r, ",")
            }
        }

        function getParamsFromQueryString(t) {
            if (t) {
                var r = t.src;
                if (-1 != r.indexOf("?")) {
                    var e = r.substring(r.indexOf("?") + 1);
                    return parseRawScriptParameters(e, "&")
                }
            }
        }

        function getParamsFromMetaTag() {
            for (var t = document.getElementsByTagName("meta"), r = 0; r < t.length; r++)
                if ("distiltag-params" == t[r].getAttribute("name")) {
                    var e = t[r].getAttribute("content");
                    return parseRawScriptParameters(e, ",")
                }
        }

        function parseRawScriptParameters(t, r) {
            if (t) {
                for (var e, a = {}, i = decodeURIComponent, s = t.split(r), n = s.length - 1; n >= 0; n--) e = s[n].split("="), a[i(e[0])] = i(e[1]);
                return a
            }
        }
        var ayah_debug, script_params, document, options, getScriptParameters = function() {
                if (script_params) return script_params;
                var t = getDistiltagScriptObject();
                return (script_params = getParamsFromDataAttribute(t)) ? script_params : (script_params = getParamsFromQueryString(t)) ? script_params : (script_params = getParamsFromMetaTag()) ? script_params : script_params = {}
            },
            addScriptParameters = function(t) {
                var r = getScriptParameters();
                for (var e in r) 0 == e.indexOf("AYAH_") && (t[e] = r[e]);
                return t
            };
        module.exports = function(t, r, e) {
            return document = t, options = r, ayah_debug = e.getDebugFunction(), {
                get: getScriptParameters,
                add: addScriptParameters
            }
        };

    }, {}],
    24: [function(require, module, exports) {
        var ayah_debug, Stream = function() {
            var t, e = require("tiny-emitter"),
                a = function(e) {
                    return t ? t : (t = this, this._stopped = !1, this._factory = e, this._timer = e.getTimer(), this._config = e.getAyahConfig(), this._stats = e.getStreamStats(), this._data = {}, void this.init())
                };
            a.prototype = new e, a.constructor = a;
            var i = a.prototype;
            return i.ingest = function(t, e) {
                if (!this._stopped) {
                    var a = this._stats.start();
                    try {
                        var i = this._factory.makeMorsel(t, e);
                        this._prepareMorsel(i) && (this._data[i.type].push(i), this.emit("ingest", e))
                    } catch (r) {}
                    this._stats.updateStats(e, a)
                }
            }, i.stop = function() {
                this._stopped = !0
            }, i.getData = function() {
                return this._data
            }, i.init = function() {
                for (var t = this._config.getActiveStreams(), e = 0; e < t.length; e++) {
                    var a = t[e];
                    this._data[a] = []
                }
            }, i._prepareMorsel = function(t) {
                var e = this._getLastSample(t.type);
                return this._canAcceptMorsel(t, e) && t.makeTuples() ? this._checkDuplicateTuples(t, e) : !1
            }, i._canAcceptMorsel = function(t, e) {
                return void 0 == e ? !0 : t.mustSample() ? !0 : t.sample_num > e.sample_num
            }, i._checkDuplicateTuples = function(t, e) {
                return void 0 == e ? !0 : this._config.getAllowRepetition(t.type) ? !0 : t.data.length !== e.data.length ? !0 : this._compareAllTuples(t, e)
            }, i._compareAllTuples = function(t, e) {
                for (var a = t.data.length, i = 0; a > i; i++)
                    if (this._compareTuple(t.data[i], e.data[i])) return !0;
                return !1
            }, i._compareTuple = function(t, e) {
                for (var a = t.length, i = 0; a > i; i++)
                    if (t[i] !== e[i]) return !0;
                return !1
            }, i._getLastSample = function(t) {
                if (this._data[t]) {
                    var e = this._data[t];
                    return e[e.length - 1]
                }
            }, a
        }();
        module.exports = function(t) {
            return ayah_debug = t.getDebugFunction(), new Stream(t)
        };

    }, {
        "tiny-emitter": 2
    }],
    25: [function(require, module, exports) {
        var ayah_debug, StreamStats = function() {
            var t, e = function(e) {
                    return t ? t : (t = this, this._stats = {}, this._timer = e.getTimer(), this._config = e.getAyahConfig(), void this.init())
                },
                i = e.prototype;
            return i.init = function() {
                for (var t = this._config.getActiveStreams(), e = 0, i = t.length; i > e; e++) {
                    var r = t[e];
                    this._stats[r] = {
                        count: 0,
                        time: 0,
                        avg: 0
                    }
                }
            }, i.start = function() {
                return this._timer.getPerfTime()
            }, i.updateStats = function(t, e) {
                var i = this._timer.getPerfTime() - e,
                    r = this._stats;
                if (t in r) {
                    var a = r[t];
                    a.time += i, a.count++
                }
            }, i.getStats = function() {
                return this.getAverages(), this._stats
            }, i.getAggregateStats = function() {
                var t = this._stats,
                    e = 0,
                    i = 0;
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var a = t[r];
                        e += a.count, i += a.time
                    }
                var n = 0;
                return e && (n = i / e), {
                    count: e,
                    time: i,
                    average: n
                }
            }, i.getAverages = function() {
                var t = this._stats,
                    e = [];
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var r = t[i];
                        r.count && (r.avg = parseFloat((r.time / r.count).toFixed(3))), e.push(r.avg)
                    }
                return e
            }, e
        }();
        module.exports = function(t) {
            return ayah_debug = t.getDebugFunction(), new StreamStats(t)
        };

    }, {}],
    26: [function(require, module, exports) {
        var Timer = function() {
            var t, e = function(e) {
                    return t ? t : (t = this, this._config = e.getAyahConfig(), void(this._start_time = this.currentTime()))
                },
                r = e.prototype;
            return r.currentTime = function() {
                return (new Date).getTime()
            }, r.getPerfTime = function() {
                try {
                    return window.performance.now()
                } catch (t) {
                    return this.currentTime()
                }
            }, r.getTimeElapsed = function(t) {
                return t - this._start_time
            }, r.getStartTime = function() {
                return this._start_time
            }, r.getTimeElapsedNow = function() {
                return this.getTimeElapsed(this.currentTime())
            }, e
        }();
        module.exports = function(t) {
            return new Timer(t)
        };

    }, {}],
    27: [function(require, module, exports) {
        var TupleCounter = function(t) {
                this._whitelist = t || [], this._streams = {}
            },
            proto = TupleCounter.prototype;
        proto.countTuple = function(t) {
            return !t || this._whitelist.length && -1 === this._whitelist.indexOf(t) ? !1 : (this._streams[t] = (this._streams[t] || 0) + 1, !0)
        }, proto.getCounts = function() {
            return this._streams
        }, module.exports = TupleCounter;

    }, {}],
    28: [function(require, module, exports) {
        var ayah_debug, ayah_debug_verbose, Util = require("./Util"),
            JSON = require("../3rdparty/json3"),
            TupleGetters = function() {
                var t, e = {
                        VOWEL: 0,
                        CONSONANT: 1,
                        NUMERIC: 2,
                        OTHER: 3,
                        CONTROL: 4
                    },
                    n = function(e) {
                        return this._config = e, t ? t : void(t = this)
                    },
                    r = n.prototype;
                r.get = function(t) {
                    return this.getTupleWith(t, this._config.getTupleFormat(t.type)) || this.getTupleWith(t, t.type)
                }, r.getTupleWith = function(t, e) {
                    if ("function" == typeof this[e]) try {
                        return this[e](t)
                    } catch (n) {}
                }, r.mousemove = function(t) {
                    var e = [d(t.data.clientX), d(t.data.clientY)].map(a);
                    return [e]
                }, r.mousebuttons = function(t) {
                    var e = [t.data.buttons].map(a);
                    return [e]
                };
                var o = {
                    next: 0,
                    map: {},
                    makeUnique: function(t) {
                        var e = this.map[t];
                        return void 0 !== e ? e : (e = this.next++, this.map[t] = e, e)
                    },
                    startMotion: function(t) {
                        delete this.map[t]
                    }
                };
                r.fulltouch = function(t) {
                    for (var e = [], n = 0; n < t.data.changedTouches.length; n++) {
                        var r = t.data.changedTouches[n],
                            i = f(t.data),
                            u = r.identifier;
                        1 == i && o.startMotion(u), e.push([o.makeUnique(u), s(r.clientX), s(r.clientY), l(r.radiusX), l(r.radiusY), l(r.rotationAngle), l(r.force), i].map(a))
                    }
                    return e
                }, r.motion = function(t) {
                    var e = [c(t.data.accelerationIncludingGravity.x), c(t.data.accelerationIncludingGravity.y), c(t.data.accelerationIncludingGravity.z)].map(a);
                    return [e]
                }, r.orientation = function(t) {
                    var e = [h(t.data.alpha), h(t.data.beta), h(t.data.gamma)].map(a);
                    return [e]
                }, r.scroll = function(t) {
                    var e = m([window, "scrollX"], [document, "documentElement.scrollLeft"]),
                        n = m([window, "scrollY"], [document, "documentElement.scrollTop"]),
                        r = [e, n].map(a);
                    return [r]
                }, r.key = function(t) {
                    var e = t.data.keyCode,
                        n = i(e),
                        r = [n];
                    try {} catch (o) {}
                    return [r]
                };
                var i = function(t) {
                    var n = String.fromCharCode(t);
                    return t >= 65 && 90 >= t || t >= 97 && 122 >= t ? "aeiouy".indexOf(n.toLowerCase()) >= 0 ? e.VOWEL : e.CONSONANT : t >= 48 && 57 >= t ? e.NUMERIC : [8, 9, 13, 27, 127].indexOf(t) >= 0 || t >= 37 && 40 >= t || t >= 33 && 36 >= t || t >= 112 && 123 >= t ? e.CONTROL : e.OTHER
                };
                r.sortedProperties = function(t, e) {
                    for (var n = Util.sortedObjectKeys(t.data), r = [], o = 0; o < n.length; o++) {
                        var i = n[o];
                        r.push(t.data[i])
                    }
                    return "function" == typeof e && (r = e(r)), [r]
                }, r.sortedPropertiesHash = function(t) {
                    return this.sortedProperties(t, function(t) {
                        return t.join("")
                    })
                }, r.singleTupleAsIs = function(t) {
                    return [t.data]
                }, r.viewport_size = function() {
                    var t = [m([window, "innerWidth"], [document, "documentElement.clientWidth"], [document, "body.clientWidth"]), m([window, "innerHeight"], [document, "documentElement.clientHeight"], [document, "body.clientHeight"])].map(a);
                    return [t]
                }, r.window_size = function() {
                    var t = [m([window, "outerWidth"], [document, "documentElement.clientWidth"]), m([window, "outerHeight"], [document, "documentElement.clientHeight"])].map(u);
                    return [t]
                }, r.window_position = function() {
                    var t = [window.screenX, window.screenY].map(u);
                    return [t]
                }, r.screen_geometry = function() {
                    var t = window.screen,
                        e = [t.width, t.height, t.availWidth, t.availHeight].map(u);
                    return [e]
                }, r.body_size = function() {
                    var t = document.body,
                        e = [m([t, "scrollWidth"], [t, "offsetWidth"], [t, "clientWidth"], [document, "documentElement.scrollWidth"], [document, "documentElement.offsetWidth"], [document, "documentElement.clientWidth"]), m([t, "scrollHeight"], [t, "offsetHeight"], [t, "clientHeight"], [document, "documentElement.scrollHeight"], [document, "documentElement.offsetHeight"], [document, "documentElement.clientHeight"])].map(a);
                    return [e]
                };
                var u = function(t) {
                        return void 0 === t ? null : t
                    },
                    a = function(t) {
                        return "number" == typeof t ? t || 0 : 0
                    },
                    c = function(t) {
                        return Math.round(10 * t) / 10
                    },
                    d = function(t) {
                        return Math.round(t)
                    },
                    l = function(t) {
                        return Math.round(100 * t) / 100
                    },
                    s = function(t) {
                        return Math.round(10 * t) / 10
                    },
                    h = function(t) {
                        return Math.round(100 * t) / 100
                    },
                    f = function(t) {
                        switch (t.type) {
                            case "touchend":
                                return 0;
                            case "touchstart":
                                return 1;
                            case "touchcancel":
                                return 3;
                            default:
                                return 2
                        }
                    },
                    m = function() {
                        var t, e = Array.prototype.slice.call(arguments),
                            n = e.shift();
                        try {
                            if (!(n instanceof Array)) return n;
                            var r = n[0],
                                o = n[1],
                                i = o.split("."),
                                u = i.shift();
                            if (t = r[u], i.length) return n = [t, i.join(".")], e.unshift(n), m.apply(void 0, e)
                        } catch (a) {}
                        return "undefined" != typeof t ? t : e.length ? m.apply(void 0, e) : void 0
                    };
                return n
            }();
        module.exports = function(t, e) {
            return ayah_debug = t.getDebugFunction(), ayah_debug_verbose = t.getVerboseDebugFunction(), new TupleGetters(e)
        };

    }, {
        "../3rdparty/json3": 4,
        "./Util": 30
    }],
    29: [function(require, module, exports) {
        function UUID() {}
        UUID.prototype.UUID_LENGTH = 33, UUID.prototype.UUID_NUMBER_BASE = 16, UUID.prototype.make = function() {
            for (var t = "", o = this.getRandomNumbers(), n = 0; n < o.length; n++) {
                var e = o[n];
                e %= this.UUID_NUMBER_BASE, t += e.toString(this.UUID_NUMBER_BASE)
            }
            return t
        }, UUID.prototype.getRandomNumbers = function() {
            var t, o = this.getCryptoApi();
            return o ? (t = new Uint8Array(this.UUID_LENGTH), o.getRandomValues(t)) : (t = new Array(this.UUID_LENGTH), this.getRandomValuesLegacy(t)), t
        }, UUID.prototype.getRandomValuesLegacy = function(t) {
            var o, n, e, r = (new Date).getTime();
            try {
                e = window.location.hostname + window.location.path + window.location.search + window.location.hash
            } catch (U) {}
            for (var a = 0; a < t.length; a++) n = Math.floor(Math.random() * this.UUID_NUMBER_BASE), o = r, e && (o += e.charCodeAt(a % e.length)), t[a] = n + o, r = Math.floor(r / this.UUID_NUMBER_BASE)
        }, UUID.prototype.getCryptoApi = function() {
            return window.crypto && window.crypto.getRandomValues ? window.crypto : window.msCrypto && window.msCrypto.getRandomValues ? window.msCrypto : null
        }, module.exports = UUID;

    }, {}],
    30: [function(require, module, exports) {
        module.exports = {
            sortedObjectKeys: function(r) {
                var e = [];
                for (var o in r) r.hasOwnProperty(o) && e.push(o);
                return e.sort(), e
            }
        };
    }, {}],
    31: [function(require, module, exports) {
        var ayah_debug, ayah_debug_verbose, Util = require("./Util"),
            JSON = require("../3rdparty/json3"),
            addChecksum = function() {
                function r(r) {
                    r = String(r);
                    for (var e = arguments.length < 2 ? 79764919 : arguments[1] >>> 0, t = arguments.length < 3 ? 4294967295 : arguments[2] >>> 0, n = arguments.length < 4 ? 4294967295 : arguments[3] >>> 0, a = new Array(256), o = function(r, e) {
                            for (var t = 0; --e >= 0;) t <<= 1, t |= 1 & r, r >>>= 1;
                            return t
                        }, u = -1; ++u < 256;) {
                        for (var g = o(u, 32), i = -1; ++i < 8;) g = (g << 1 ^ (g >>> 31 & 1) * e) >>> 0;
                        a[u] = o(g, 32)
                    }
                    for (var c = t, h = r.length, v = -1; ++v < h;) {
                        var d = r.charCodeAt(v);
                        if (d > 255) throw new RangeError;
                        var f = 255 & c ^ d;
                        c = (c >>> 8 ^ a[f]) >>> 0
                    }
                    return (c ^ n) >>> 0
                }
                var e = "c";
                return function(t) {
                    var n = -1;
                    try {
                        for (var a = Util.sortedObjectKeys(t), o = "", u = 0; u < a.length; u++) {
                            var g = a[u];
                            g != e && (o += JSON.stringify(t[g]))
                        }
                        n = r(o)
                    } catch (i) {}
                    t[e] = n
                }
            };
        module.exports = function(r) {
            return ayah_debug = r.getDebugFunction(), ayah_debug_verbose = r.getVerboseDebugFunction(), addChecksum
        };

    }, {
        "../3rdparty/json3": 4,
        "./Util": 30
    }],
    32: [function(require, module, exports) {
        var Emitter = require("tiny-emitter"),
            emitter = new Emitter,
            config, ayah_debug, stream, stop_collection_timer, max_collection_time_seconds = 300,
            max_check_frequency = 10,
            check_interval = 1e3 / max_check_frequency,
            last_check = 0,
            followup_check_timeout, counter, checkCounts = function() {
                if (hasReachedMax("mousemove") || hasReachedMax("touch") || numStreamsAtMax() >= 2 || numStreamsAtMin() >= 4) {
                    try {} catch (e) {}
                    stopCollection()
                }
            },
            hasReachedMax = function(e) {
                return checkTupleCount(e, config.getMaxTuples(e))
            },
            hasReachedMin = function(e) {
                return checkTupleCount(e, config.getMinTuples(e))
            },
            checkTupleCount = function(e, t) {
                var n = counter.getCounts();
                return n[e] && void 0 != t ? n[e] >= t : !1
            },
            numStreamsAtMax = function() {
                return numStreamsAtLimit(hasReachedMax)
            },
            numStreamsAtMin = function() {
                return numStreamsAtLimit(hasReachedMin)
            },
            numStreamsAtLimit = function(e) {
                var t = counter.getCounts(),
                    n = 0;
                for (var o in t) t.hasOwnProperty(o) && e(o) && n++;
                return n
            },
            stopCollection = function() {
                clearTimeout(stop_collection_timer), stream.off("ingest", onIngest), emitter.emit("reached")
            },
            throttledCheckCounts = function() {
                return (new Date).getTime() - last_check < check_interval ? (clearTimeout(followup_check_timeout), void(followup_check_timeout = setTimeout(throttledCheckCounts, check_interval))) : (last_check = (new Date).getTime(), void checkCounts())
            },
            onIngest = function(e) {
                counter.countTuple(e), throttledCheckCounts()
            };
        module.exports = function(e) {
            config = e.getAyahConfig(), ayah_debug = e.getDebugFunction(), stream = e.getStream(), stream.on("ingest", onIngest);
            var t = config.getStreamsWithLimits();
            if (!t.length) throw new Error("No stream limits specified!");
            return counter = e.getTupleCounter(t), stop_collection_timer = setTimeout(stopCollection, 1e3 * max_collection_time_seconds), {
                onIngest: onIngest,
                on: function(e, t) {
                    emitter.on(e, t)
                }
            }
        };

    }, {
        "tiny-emitter": 2
    }],
    33: [function(require, module, exports) {
        var config = {
            version: 2,
            streams: {
                defaults: {
                    allow_repetition: !1,
                    frequency: 50
                },
                touch: {
                    events: ["touchmove", "touchstart", "touchend", "touchcancel"],
                    sample_all: ["touchstart", "touchend", "touchcancel"],
                    tuple: "fulltouch",
                    min_tuples: 20,
                    max_tuples: 80
                },
                motion: {
                    events: ["devicemotion"],
                    event_target: "window",
                    min_tuples: 20,
                    max_tuples: 60
                },
                orientation: {
                    events: ["deviceorientation"],
                    event_target: "window",
                    min_tuples: 20,
                    max_tuples: 60
                },
                scroll: {
                    events: ["scroll"],
                    event_target: "window",
                    min_tuples: 15,
                    max_tuples: 60
                },
                mousebuttons: {
                    events: ["mousedown", "mouseup"]
                },
                mousemove: {
                    events: ["mousemove"],
                    min_tuples: 20,
                    max_tuples: 80
                },
                keydown: {
                    events: ["keydown"],
                    tuple: ["key"],
                    allow_repetition: !0
                },
                keyup: {
                    events: ["keyup"],
                    tuple: ["key"],
                    allow_repetition: !0
                },
                modernizr: {
                    tuple: "sortedPropertiesHash"
                },
                data_collection_timer: {
                    tuple: "singleTupleAsIs"
                },
                automation: {
                    tuple: "singleTupleAsIs"
                },
                performance: {
                    tuple: "singleTupleAsIs"
                },
                window_size: {
                    events: ["resize"],
                    event_target: "window",
                    polling: !0,
                    polling_frequency: 5,
                    get_initial_value: !0
                },
                window_position: {
                    polling_frequency: 5,
                    polling: !0,
                    get_initial_value: !0
                },
                body_size: {
                    polling_frequency: 5,
                    polling: !0,
                    get_initial_value: !0
                },
                screen_geometry: {
                    polling_frequency: 1,
                    polling: !0,
                    get_initial_value: !0
                },
                viewport_size: {
                    events: ["resize"],
                    polling_frequency: 5,
                    polling: !0,
                    event_target: "window",
                    get_initial_value: !0
                }
            },
            stream_groups: {
                events: ["data_collection_timer", "touch", "scroll", "mousebuttons", "mousemove", "keyup", "keydown", "modernizr", "automation", "performance", "viewport_size", "window_size", "screen_geometry", "window_position", "body_size"]
            },
            active_stream_groups: ["events"]
        };
        module.exports = config;

    }, {}],
    34: [function(require, module, exports) {
        "use strict";

        function CustomEvent(t, r) {
            r = r || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(t, r.bubbles, r.cancelable, r.detail), o
        }
        "function" != typeof window.CustomEvent && (CustomEvent.prototype = window.Event.prototype, window.CustomEvent = CustomEvent), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
            var r = this.length >>> 0,
                o = Number(arguments[1]) || 0;
            for (o = 0 > o ? Math.ceil(o) : Math.floor(o), 0 > o && (o += r); r > o; o++)
                if (o in this && this[o] === t) return o;
            return -1
        }), Array.prototype.filter || (Array.prototype.filter = function(t) {
            if (void 0 === this || null === this) throw new TypeError;
            var r = Object(this),
                o = r.length >>> 0;
            if ("function" != typeof t) throw new TypeError;
            for (var e = [], n = arguments.length >= 2 ? arguments[1] : void 0, i = 0; o > i; i++)
                if (i in r) {
                    var a = r[i];
                    t.call(n, a, i, r) && e.push(a)
                }
            return e
        }), Array.prototype.map || (Array.prototype.map = function(t) {
            for (var r = [], o = 0, e = this.length; e > o; o++) r.push(t(this[o]));
            return r
        }), Array.prototype.forEach || (Array.prototype.forEach = function(t, r) {
            var o, e;
            if (null == this) throw new TypeError("this is null or not defined");
            var n = Object(this),
                i = n.length >>> 0;
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (arguments.length > 1 && (o = r), e = 0; i > e;) {
                var a;
                e in n && (a = n[e], t.call(o, a, e, n)), e++
            }
        });

    }, {}],
    35: [function(require, module, exports) {
        var getCacheBusterValue = function() {
            var e = Date.now(),
                a = Math.round(1e7 * Math.random());
            return e + ":" + a
        };
        module.exports = getCacheBusterValue;
    }, {}]
}, {}, [9]);