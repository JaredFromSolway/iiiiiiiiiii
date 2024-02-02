"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [856], {
        79321: function(t, e, r) {
            r.r(e), r.d(e, {
                ASSOCIATED_TOKEN_PROGRAM_ID: function() {
                    return t$
                },
                AccountLayout: function() {
                    return tQ
                },
                MintLayout: function() {
                    return tX
                },
                NATIVE_MINT: function() {
                    return tH
                },
                TOKEN_PROGRAM_ID: function() {
                    return tD
                },
                Token: function() {
                    return t1
                },
                u64: function() {
                    return tY
                }
            });
            var n, i = r(85698),
                o = r(56662),
                s = r.n(o),
                a = r(63438),
                u = {},
                c = {};
            c.byteLength = function(t) {
                var e = g(t),
                    r = e[0],
                    n = e[1];
                return (r + n) * 3 / 4 - n
            }, c.toByteArray = function(t) {
                var e, r, n = g(t),
                    i = n[0],
                    o = n[1],
                    s = new p((i + o) * 3 / 4 - o),
                    a = 0,
                    u = o > 0 ? i - 4 : i;
                for (r = 0; r < u; r += 4) e = l[t.charCodeAt(r)] << 18 | l[t.charCodeAt(r + 1)] << 12 | l[t.charCodeAt(r + 2)] << 6 | l[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
                return 2 === o && (e = l[t.charCodeAt(r)] << 2 | l[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e), 1 === o && (e = l[t.charCodeAt(r)] << 10 | l[t.charCodeAt(r + 1)] << 4 | l[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e), s
            }, c.fromByteArray = function(t) {
                for (var e, r = t.length, n = r % 3, i = [], o = 0, s = r - n; o < s; o += 16383) i.push(function(t, e, r) {
                    for (var n, i = [], o = e; o < r; o += 3) i.push(f[(n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2])) >> 18 & 63] + f[n >> 12 & 63] + f[n >> 6 & 63] + f[63 & n]);
                    return i.join("")
                }(t, o, o + 16383 > s ? s : o + 16383));
                return 1 === n ? i.push(f[(e = t[r - 1]) >> 2] + f[e << 4 & 63] + "==") : 2 === n && i.push(f[(e = (t[r - 2] << 8) + t[r - 1]) >> 10] + f[e >> 4 & 63] + f[e << 2 & 63] + "="), i.join("")
            };
            for (var f = [], l = [], p = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", y = 0, d = h.length; y < d; ++y) f[y] = h[y], l[h.charCodeAt(y)] = y;

            function g(t) {
                var e = t.length;
                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("="); - 1 === r && (r = e);
                var n = r === e ? 0 : 4 - r % 4;
                return [r, n]
            }
            l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63;
            var b = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            b.read = function(t, e, r, n, i) {
                    var o, s, a = 8 * i - n - 1,
                        u = (1 << a) - 1,
                        c = u >> 1,
                        f = -7,
                        l = r ? i - 1 : 0,
                        p = r ? -1 : 1,
                        h = t[e + l];
                    for (l += p, o = h & (1 << -f) - 1, h >>= -f, f += a; f > 0; o = 256 * o + t[e + l], l += p, f -= 8);
                    for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + t[e + l], l += p, f -= 8);
                    if (0 === o) o = 1 - c;
                    else {
                        if (o === u) return s ? NaN : 1 / 0 * (h ? -1 : 1);
                        s += Math.pow(2, n), o -= c
                    }
                    return (h ? -1 : 1) * s * Math.pow(2, o - n)
                }, b.write = function(t, e, r, n, i, o) {
                    var s, a, u, c = 8 * o - i - 1,
                        f = (1 << c) - 1,
                        l = f >> 1,
                        p = 23 === i ? 5960464477539062e-23 : 0,
                        h = n ? 0 : o - 1,
                        y = n ? 1 : -1,
                        d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + l >= 1 ? e += p / u : e += p * Math.pow(2, 1 - l), e * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + h] = 255 & a, h += y, a /= 256, i -= 8);
                    for (s = s << i | a, c += i; c > 0; t[r + h] = 255 & s, h += y, s /= 256, c -= 8);
                    t[r + h - y] |= 128 * d
                },
                function(t) {
                    let e = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                    function r(t) {
                        if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
                        let e = new Uint8Array(t);
                        return Object.setPrototypeOf(e, n.prototype), e
                    }

                    function n(t, e, r) {
                        if ("number" == typeof t) {
                            if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                            return s(t)
                        }
                        return i(t, e, r)
                    }

                    function i(t, e, i) {
                        if ("string" == typeof t) return function(t, e) {
                            if (("string" != typeof e || "" === e) && (e = "utf8"), !n.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
                            let i = 0 | l(t, e),
                                o = r(i),
                                s = o.write(t, e);
                            return s !== i && (o = o.slice(0, s)), o
                        }(t, e);
                        if (ArrayBuffer.isView(t)) return function(t) {
                            if (W(t, Uint8Array)) {
                                let e = new Uint8Array(t);
                                return u(e.buffer, e.byteOffset, e.byteLength)
                            }
                            return a(t)
                        }(t);
                        if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                        if (W(t, ArrayBuffer) || t && W(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (W(t, SharedArrayBuffer) || t && W(t.buffer, SharedArrayBuffer))) return u(t, e, i);
                        if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                        let o = t.valueOf && t.valueOf();
                        if (null != o && o !== t) return n.from(o, e, i);
                        let s = function(t) {
                            var e;
                            if (n.isBuffer(t)) {
                                let e = 0 | f(t.length),
                                    n = r(e);
                                return 0 === n.length || t.copy(n, 0, 0, e), n
                            }
                            return void 0 !== t.length ? "number" != typeof t.length || (e = t.length) != e ? r(0) : a(t) : "Buffer" === t.type && Array.isArray(t.data) ? a(t.data) : void 0
                        }(t);
                        if (s) return s;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return n.from(t[Symbol.toPrimitive]("string"), e, i);
                        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                    }

                    function o(t) {
                        if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                        if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
                    }

                    function s(t) {
                        return o(t), r(t < 0 ? 0 : 0 | f(t))
                    }

                    function a(t) {
                        let e = t.length < 0 ? 0 : 0 | f(t.length),
                            n = r(e);
                        for (let r = 0; r < e; r += 1) n[r] = 255 & t[r];
                        return n
                    }

                    function u(t, e, r) {
                        let i;
                        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(i = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), n.prototype), i
                    }

                    function f(t) {
                        if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                        return 0 | t
                    }

                    function l(t, e) {
                        if (n.isBuffer(t)) return t.length;
                        if (ArrayBuffer.isView(t) || W(t, ArrayBuffer)) return t.byteLength;
                        if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                        let r = t.length,
                            i = arguments.length > 2 && !0 === arguments[2];
                        if (!i && 0 === r) return 0;
                        let o = !1;
                        for (;;) switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return L(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return R(t).length;
                            default:
                                if (o) return i ? -1 : L(t).length;
                                e = ("" + e).toLowerCase(), o = !0
                        }
                    }

                    function p(t, e, r) {
                        let n = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                        for (t || (t = "utf8");;) switch (t) {
                            case "hex":
                                return function(t, e, r) {
                                    let n = t.length;
                                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                                    let i = "";
                                    for (let n = e; n < r; ++n) i += C[t[n]];
                                    return i
                                }(this, e, r);
                            case "utf8":
                            case "utf-8":
                                return g(this, e, r);
                            case "ascii":
                                return function(t, e, r) {
                                    let n = "";
                                    r = Math.min(t.length, r);
                                    for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                                    return n
                                }(this, e, r);
                            case "latin1":
                            case "binary":
                                return function(t, e, r) {
                                    let n = "";
                                    r = Math.min(t.length, r);
                                    for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                                    return n
                                }(this, e, r);
                            case "base64":
                                var i, o;
                                return i = e, o = r, 0 === i && o === this.length ? c.fromByteArray(this) : c.fromByteArray(this.slice(i, o));
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return function(t, e, r) {
                                    let n = t.slice(e, r),
                                        i = "";
                                    for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                                    return i
                                }(this, e, r);
                            default:
                                if (n) throw TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), n = !0
                        }
                    }

                    function h(t, e, r) {
                        let n = t[e];
                        t[e] = t[r], t[r] = n
                    }

                    function y(t, e, r, i, o) {
                        var s;
                        if (0 === t.length) return -1;
                        if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (s = r = +r) != s && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                            if (o) return -1;
                            r = t.length - 1
                        } else if (r < 0) {
                            if (!o) return -1;
                            r = 0
                        }
                        if ("string" == typeof e && (e = n.from(e, i)), n.isBuffer(e)) return 0 === e.length ? -1 : d(t, e, r, i, o);
                        if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : d(t, [e], r, i, o);
                        throw TypeError("val must be string, number or Buffer")
                    }

                    function d(t, e, r, n, i) {
                        let o, s = 1,
                            a = t.length,
                            u = e.length;
                        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                            if (t.length < 2 || e.length < 2) return -1;
                            s = 2, a /= 2, u /= 2, r /= 2
                        }

                        function c(t, e) {
                            return 1 === s ? t[e] : t.readUInt16BE(e * s)
                        }
                        if (i) {
                            let n = -1;
                            for (o = r; o < a; o++)
                                if (c(t, o) === c(e, -1 === n ? 0 : o - n)) {
                                    if (-1 === n && (n = o), o - n + 1 === u) return n * s
                                } else - 1 !== n && (o -= o - n), n = -1
                        } else
                            for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                                let r = !0;
                                for (let n = 0; n < u; n++)
                                    if (c(t, o + n) !== c(e, n)) {
                                        r = !1;
                                        break
                                    } if (r) return o
                            }
                        return -1
                    }

                    function g(t, e, r) {
                        r = Math.min(t.length, r);
                        let n = [],
                            i = e;
                        for (; i < r;) {
                            let e = t[i],
                                o = null,
                                s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                            if (i + s <= r) {
                                let r, n, a, u;
                                switch (s) {
                                    case 1:
                                        e < 128 && (o = e);
                                        break;
                                    case 2:
                                        (192 & (r = t[i + 1])) == 128 && (u = (31 & e) << 6 | 63 & r) > 127 && (o = u);
                                        break;
                                    case 3:
                                        r = t[i + 1], n = t[i + 2], (192 & r) == 128 && (192 & n) == 128 && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (u < 55296 || u > 57343) && (o = u);
                                        break;
                                    case 4:
                                        r = t[i + 1], n = t[i + 2], a = t[i + 3], (192 & r) == 128 && (192 & n) == 128 && (192 & a) == 128 && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a) > 65535 && u < 1114112 && (o = u)
                                }
                            }
                            null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
                        }
                        return function(t) {
                            let e = t.length;
                            if (e <= 4096) return String.fromCharCode.apply(String, t);
                            let r = "",
                                n = 0;
                            for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
                            return r
                        }(n)
                    }

                    function w(t, e, r) {
                        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                        if (t + e > r) throw RangeError("Trying to access beyond buffer length")
                    }

                    function m(t, e, r, i, o, s) {
                        if (!n.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                        if (e > o || e < s) throw RangeError('"value" argument is out of bounds');
                        if (r + i > t.length) throw RangeError("Index out of range")
                    }

                    function E(t, e, r, n, i) {
                        x(e, n, i, t, r, 7);
                        let o = Number(e & BigInt(4294967295));
                        t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
                        let s = Number(e >> BigInt(32) & BigInt(4294967295));
                        return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
                    }

                    function v(t, e, r, n, i) {
                        x(e, n, i, t, r, 7);
                        let o = Number(e & BigInt(4294967295));
                        t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
                        let s = Number(e >> BigInt(32) & BigInt(4294967295));
                        return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
                    }

                    function I(t, e, r, n, i, o) {
                        if (r + n > t.length || r < 0) throw RangeError("Index out of range")
                    }

                    function B(t, e, r, n, i) {
                        return e = +e, r >>>= 0, i || I(t, e, r, 4), b.write(t, e, r, n, 23, 4), r + 4
                    }

                    function A(t, e, r, n, i) {
                        return e = +e, r >>>= 0, i || I(t, e, r, 8), b.write(t, e, r, n, 52, 8), r + 8
                    }
                    t.Buffer = n, t.SlowBuffer = function(t) {
                        return +t != t && (t = 0), n.alloc(+t)
                    }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 2147483647, n.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            let t = new Uint8Array(1),
                                e = {
                                    foo: function() {
                                        return 42
                                    }
                                };
                            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                        } catch (t) {
                            return !1
                        }
                    }(), n.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(n.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (n.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(n.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (n.isBuffer(this)) return this.byteOffset
                        }
                    }), n.poolSize = 8192, n.from = function(t, e, r) {
                        return i(t, e, r)
                    }, Object.setPrototypeOf(n.prototype, Uint8Array.prototype), Object.setPrototypeOf(n, Uint8Array), n.alloc = function(t, e, n) {
                        return (o(t), t <= 0) ? r(t) : void 0 !== e ? "string" == typeof n ? r(t).fill(e, n) : r(t).fill(e) : r(t)
                    }, n.allocUnsafe = function(t) {
                        return s(t)
                    }, n.allocUnsafeSlow = function(t) {
                        return s(t)
                    }, n.isBuffer = function(t) {
                        return null != t && !0 === t._isBuffer && t !== n.prototype
                    }, n.compare = function(t, e) {
                        if (W(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)), W(e, Uint8Array) && (e = n.from(e, e.offset, e.byteLength)), !n.isBuffer(t) || !n.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (t === e) return 0;
                        let r = t.length,
                            i = e.length;
                        for (let n = 0, o = Math.min(r, i); n < o; ++n)
                            if (t[n] !== e[n]) {
                                r = t[n], i = e[n];
                                break
                            } return r < i ? -1 : i < r ? 1 : 0
                    }, n.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, n.concat = function(t, e) {
                        let r;
                        if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return n.alloc(0);
                        if (void 0 === e)
                            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                        let i = n.allocUnsafe(e),
                            o = 0;
                        for (r = 0; r < t.length; ++r) {
                            let e = t[r];
                            if (W(e, Uint8Array)) o + e.length > i.length ? (n.isBuffer(e) || (e = n.from(e)), e.copy(i, o)) : Uint8Array.prototype.set.call(i, e, o);
                            else if (n.isBuffer(e)) e.copy(i, o);
                            else throw TypeError('"list" argument must be an Array of Buffers');
                            o += e.length
                        }
                        return i
                    }, n.byteLength = l, n.prototype._isBuffer = !0, n.prototype.swap16 = function() {
                        let t = this.length;
                        if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                        for (let e = 0; e < t; e += 2) h(this, e, e + 1);
                        return this
                    }, n.prototype.swap32 = function() {
                        let t = this.length;
                        if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                        for (let e = 0; e < t; e += 4) h(this, e, e + 3), h(this, e + 1, e + 2);
                        return this
                    }, n.prototype.swap64 = function() {
                        let t = this.length;
                        if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                        for (let e = 0; e < t; e += 8) h(this, e, e + 7), h(this, e + 1, e + 6), h(this, e + 2, e + 5), h(this, e + 3, e + 4);
                        return this
                    }, n.prototype.toString = function() {
                        let t = this.length;
                        return 0 === t ? "" : 0 == arguments.length ? g(this, 0, t) : p.apply(this, arguments)
                    }, n.prototype.toLocaleString = n.prototype.toString, n.prototype.equals = function(t) {
                        if (!n.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                        return this === t || 0 === n.compare(this, t)
                    }, n.prototype.inspect = function() {
                        let e = "",
                            r = t.INSPECT_MAX_BYTES;
                        return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
                    }, e && (n.prototype[e] = n.prototype.inspect), n.prototype.compare = function(t, e, r, i, o) {
                        if (W(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)), !n.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                        if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || i < 0 || o > this.length) throw RangeError("out of range index");
                        if (i >= o && e >= r) return 0;
                        if (i >= o) return -1;
                        if (e >= r) return 1;
                        if (e >>>= 0, r >>>= 0, i >>>= 0, o >>>= 0, this === t) return 0;
                        let s = o - i,
                            a = r - e,
                            u = Math.min(s, a),
                            c = this.slice(i, o),
                            f = t.slice(e, r);
                        for (let t = 0; t < u; ++t)
                            if (c[t] !== f[t]) {
                                s = c[t], a = f[t];
                                break
                            } return s < a ? -1 : a < s ? 1 : 0
                    }, n.prototype.includes = function(t, e, r) {
                        return -1 !== this.indexOf(t, e, r)
                    }, n.prototype.indexOf = function(t, e, r) {
                        return y(this, t, e, r, !0)
                    }, n.prototype.lastIndexOf = function(t, e, r) {
                        return y(this, t, e, r, !1)
                    }, n.prototype.write = function(t, e, r, n) {
                        var i, o, s, a, u, c, f, l;
                        if (void 0 === e) n = "utf8", r = this.length, e = 0;
                        else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                        else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                        else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        let p = this.length - e;
                        if ((void 0 === r || r > p) && (r = p), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        let h = !1;
                        for (;;) switch (n) {
                            case "hex":
                                return function(t, e, r, n) {
                                    let i;
                                    r = Number(r) || 0;
                                    let o = t.length - r;
                                    n ? (n = Number(n)) > o && (n = o) : n = o;
                                    let s = e.length;
                                    for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                                        let n = parseInt(e.substr(2 * i, 2), 16);
                                        if (n != n) break;
                                        t[r + i] = n
                                    }
                                    return i
                                }(this, t, e, r);
                            case "utf8":
                            case "utf-8":
                                return i = e, o = r, K(L(t, this.length - i), this, i, o);
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return s = e, a = r, K(function(t) {
                                    let e = [];
                                    for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                                    return e
                                }(t), this, s, a);
                            case "base64":
                                return u = e, c = r, K(R(t), this, u, c);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return f = e, l = r, K(function(t, e) {
                                    let r, n;
                                    let i = [];
                                    for (let o = 0; o < t.length && !((e -= 2) < 0); ++o) n = (r = t.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                                    return i
                                }(t, this.length - f), this, f, l);
                            default:
                                if (h) throw TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), h = !0
                        }
                    }, n.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }, n.prototype.slice = function(t, e) {
                        let r = this.length;
                        t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                        let i = this.subarray(t, e);
                        return Object.setPrototypeOf(i, n.prototype), i
                    }, n.prototype.readUintLE = n.prototype.readUIntLE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                        let n = this[t],
                            i = 1,
                            o = 0;
                        for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                        return n
                    }, n.prototype.readUintBE = n.prototype.readUIntBE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                        let n = this[t + --e],
                            i = 1;
                        for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
                        return n
                    }, n.prototype.readUint8 = n.prototype.readUInt8 = function(t, e) {
                        return t >>>= 0, e || w(t, 1, this.length), this[t]
                    }, n.prototype.readUint16LE = n.prototype.readUInt16LE = function(t, e) {
                        return t >>>= 0, e || w(t, 2, this.length), this[t] | this[t + 1] << 8
                    }, n.prototype.readUint16BE = n.prototype.readUInt16BE = function(t, e) {
                        return t >>>= 0, e || w(t, 2, this.length), this[t] << 8 | this[t + 1]
                    }, n.prototype.readUint32LE = n.prototype.readUInt32LE = function(t, e) {
                        return t >>>= 0, e || w(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                    }, n.prototype.readUint32BE = n.prototype.readUInt32BE = function(t, e) {
                        return t >>>= 0, e || w(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                    }, n.prototype.readBigUInt64LE = M(function(t) {
                        O(t >>>= 0, "offset");
                        let e = this[t],
                            r = this[t + 7];
                        (void 0 === e || void 0 === r) && U(t, this.length - 8);
                        let n = e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
                            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
                        return BigInt(n) + (BigInt(i) << BigInt(32))
                    }), n.prototype.readBigUInt64BE = M(function(t) {
                        O(t >>>= 0, "offset");
                        let e = this[t],
                            r = this[t + 7];
                        (void 0 === e || void 0 === r) && U(t, this.length - 8);
                        let n = 16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
                            i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
                        return (BigInt(n) << BigInt(32)) + BigInt(i)
                    }), n.prototype.readIntLE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                        let n = this[t],
                            i = 1,
                            o = 0;
                        for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                        return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                    }, n.prototype.readIntBE = function(t, e, r) {
                        t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                        let n = e,
                            i = 1,
                            o = this[t + --n];
                        for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                    }, n.prototype.readInt8 = function(t, e) {
                        return (t >>>= 0, e || w(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
                    }, n.prototype.readInt16LE = function(t, e) {
                        t >>>= 0, e || w(t, 2, this.length);
                        let r = this[t] | this[t + 1] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, n.prototype.readInt16BE = function(t, e) {
                        t >>>= 0, e || w(t, 2, this.length);
                        let r = this[t + 1] | this[t] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, n.prototype.readInt32LE = function(t, e) {
                        return t >>>= 0, e || w(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                    }, n.prototype.readInt32BE = function(t, e) {
                        return t >>>= 0, e || w(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                    }, n.prototype.readBigInt64LE = M(function(t) {
                        O(t >>>= 0, "offset");
                        let e = this[t],
                            r = this[t + 7];
                        return (void 0 === e || void 0 === r) && U(t, this.length - 8), (BigInt(this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t])
                    }), n.prototype.readBigInt64BE = M(function(t) {
                        O(t >>>= 0, "offset");
                        let e = this[t],
                            r = this[t + 7];
                        return (void 0 === e || void 0 === r) && U(t, this.length - 8), (BigInt((e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]) << BigInt(32)) + BigInt(16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r)
                    }), n.prototype.readFloatLE = function(t, e) {
                        return t >>>= 0, e || w(t, 4, this.length), b.read(this, t, !0, 23, 4)
                    }, n.prototype.readFloatBE = function(t, e) {
                        return t >>>= 0, e || w(t, 4, this.length), b.read(this, t, !1, 23, 4)
                    }, n.prototype.readDoubleLE = function(t, e) {
                        return t >>>= 0, e || w(t, 8, this.length), b.read(this, t, !0, 52, 8)
                    }, n.prototype.readDoubleBE = function(t, e) {
                        return t >>>= 0, e || w(t, 8, this.length), b.read(this, t, !1, 52, 8)
                    }, n.prototype.writeUintLE = n.prototype.writeUIntLE = function(t, e, r, n) {
                        if (t = +t, e >>>= 0, r >>>= 0, !n) {
                            let n = Math.pow(2, 8 * r) - 1;
                            m(this, t, e, r, n, 0)
                        }
                        let i = 1,
                            o = 0;
                        for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                        return e + r
                    }, n.prototype.writeUintBE = n.prototype.writeUIntBE = function(t, e, r, n) {
                        if (t = +t, e >>>= 0, r >>>= 0, !n) {
                            let n = Math.pow(2, 8 * r) - 1;
                            m(this, t, e, r, n, 0)
                        }
                        let i = r - 1,
                            o = 1;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                        return e + r
                    }, n.prototype.writeUint8 = n.prototype.writeUInt8 = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                    }, n.prototype.writeUint16LE = n.prototype.writeUInt16LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                    }, n.prototype.writeUint16BE = n.prototype.writeUInt16BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                    }, n.prototype.writeUint32LE = n.prototype.writeUInt32LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                    }, n.prototype.writeUint32BE = n.prototype.writeUInt32BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                    }, n.prototype.writeBigUInt64LE = M(function(t, e = 0) {
                        return E(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
                    }), n.prototype.writeBigUInt64BE = M(function(t, e = 0) {
                        return v(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
                    }), n.prototype.writeIntLE = function(t, e, r, n) {
                        if (t = +t, e >>>= 0, !n) {
                            let n = Math.pow(2, 8 * r - 1);
                            m(this, t, e, r, n - 1, -n)
                        }
                        let i = 0,
                            o = 1,
                            s = 0;
                        for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                        return e + r
                    }, n.prototype.writeIntBE = function(t, e, r, n) {
                        if (t = +t, e >>>= 0, !n) {
                            let n = Math.pow(2, 8 * r - 1);
                            m(this, t, e, r, n - 1, -n)
                        }
                        let i = r - 1,
                            o = 1,
                            s = 0;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                        return e + r
                    }, n.prototype.writeInt8 = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                    }, n.prototype.writeInt16LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                    }, n.prototype.writeInt16BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                    }, n.prototype.writeInt32LE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                    }, n.prototype.writeInt32BE = function(t, e, r) {
                        return t = +t, e >>>= 0, r || m(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                    }, n.prototype.writeBigInt64LE = M(function(t, e = 0) {
                        return E(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                    }), n.prototype.writeBigInt64BE = M(function(t, e = 0) {
                        return v(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                    }), n.prototype.writeFloatLE = function(t, e, r) {
                        return B(this, t, e, !0, r)
                    }, n.prototype.writeFloatBE = function(t, e, r) {
                        return B(this, t, e, !1, r)
                    }, n.prototype.writeDoubleLE = function(t, e, r) {
                        return A(this, t, e, !0, r)
                    }, n.prototype.writeDoubleBE = function(t, e, r) {
                        return A(this, t, e, !1, r)
                    }, n.prototype.copy = function(t, e, r, i) {
                        if (!n.isBuffer(t)) throw TypeError("argument should be a Buffer");
                        if (r || (r = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r || 0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                        if (i < 0) throw RangeError("sourceEnd out of bounds");
                        i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
                        let o = i - r;
                        return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, i) : Uint8Array.prototype.set.call(t, this.subarray(r, i), e), o
                    }, n.prototype.fill = function(t, e, r, i) {
                        let o;
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (i = e, e = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                            if ("string" == typeof i && !n.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                            if (1 === t.length) {
                                let e = t.charCodeAt(0);
                                ("utf8" === i && e < 128 || "latin1" === i) && (t = e)
                            }
                        } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                        if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                        if (r <= e) return this;
                        if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                            for (o = e; o < r; ++o) this[o] = t;
                        else {
                            let s = n.isBuffer(t) ? t : n.from(t, i),
                                a = s.length;
                            if (0 === a) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                            for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
                        }
                        return this
                    };
                    let S = {};

                    function k(t, e, r) {
                        S[t] = class extends r {
                            constructor() {
                                super(), Object.defineProperty(this, "message", {
                                    value: e.apply(this, arguments),
                                    writable: !0,
                                    configurable: !0
                                }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                            }
                            get code() {
                                return t
                            }
                            set code(t) {
                                Object.defineProperty(this, "code", {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: t,
                                    writable: !0
                                })
                            }
                            toString() {
                                return `${this.name} [${t}]: ${this.message}`
                            }
                        }
                    }

                    function T(t) {
                        let e = "",
                            r = t.length,
                            n = "-" === t[0] ? 1 : 0;
                        for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
                        return `${t.slice(0,r)}${e}`
                    }

                    function x(t, e, r, n, i, o) {
                        if (t > r || t < e) {
                            let n;
                            let i = "bigint" == typeof e ? "n" : "";
                            throw n = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(o+1)*8}${i}` : `>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}` : `>= ${e}${i} and <= ${r}${i}`, new S.ERR_OUT_OF_RANGE("value", n, t)
                        }
                        O(i, "offset"), (void 0 === n[i] || void 0 === n[i + o]) && U(i, n.length - (o + 1))
                    }

                    function O(t, e) {
                        if ("number" != typeof t) throw new S.ERR_INVALID_ARG_TYPE(e, "number", t)
                    }

                    function U(t, e, r) {
                        if (Math.floor(t) !== t) throw O(t, r), new S.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                        if (e < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS;
                        throw new S.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
                    }
                    k("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
                        return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
                    }, RangeError), k("ERR_INVALID_ARG_TYPE", function(t, e) {
                        return `The "${t}" argument must be of type number. Received type ${typeof e}`
                    }, TypeError), k("ERR_OUT_OF_RANGE", function(t, e, r) {
                        let n = `The value of "${t}" is out of range.`,
                            i = r;
                        return Number.isInteger(r) && Math.abs(r) > 4294967296 ? i = T(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = T(i)), i += "n"), n += ` It must be ${e}. Received ${i}`
                    }, RangeError);
                    let P = /[^+/0-9A-Za-z-_]/g;

                    function L(t, e) {
                        let r;
                        e = e || 1 / 0;
                        let n = t.length,
                            i = null,
                            o = [];
                        for (let s = 0; s < n; ++s) {
                            if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                                if (!i) {
                                    if (r > 56319 || s + 1 === n) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    i = r;
                                    continue
                                }
                                if (r < 56320) {
                                    (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                                    continue
                                }
                                r = (i - 55296 << 10 | r - 56320) + 65536
                            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                            if (i = null, r < 128) {
                                if ((e -= 1) < 0) break;
                                o.push(r)
                            } else if (r < 2048) {
                                if ((e -= 2) < 0) break;
                                o.push(r >> 6 | 192, 63 & r | 128)
                            } else if (r < 65536) {
                                if ((e -= 3) < 0) break;
                                o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                            } else if (r < 1114112) {
                                if ((e -= 4) < 0) break;
                                o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                            } else throw Error("Invalid code point")
                        }
                        return o
                    }

                    function R(t) {
                        return c.toByteArray(function(t) {
                            if ((t = (t = t.split("=")[0]).trim().replace(P, "")).length < 2) return "";
                            for (; t.length % 4 != 0;) t += "=";
                            return t
                        }(t))
                    }

                    function K(t, e, r, n) {
                        let i;
                        for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                        return i
                    }

                    function W(t, e) {
                        return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                    }
                    let C = function() {
                        let t = "0123456789abcdef",
                            e = Array(256);
                        for (let r = 0; r < 16; ++r) {
                            let n = 16 * r;
                            for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
                        }
                        return e
                    }();

                    function M(t) {
                        return "undefined" == typeof BigInt ? _ : t
                    }

                    function _() {
                        throw Error("BigInt not supported")
                    }
                }(u);
            var w = void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                m = "function" == typeof Object.create ? function(t, e) {
                    t.super_ = e, t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                } : function(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                };

            function E(t, e) {
                var r = {
                    seen: [],
                    stylize: I
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), k(e) ? r.showHidden = e : e && function(t, e) {
                    if (!e || !U(e)) return t;
                    for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
                    return t
                }(r, e), x(r.showHidden) && (r.showHidden = !1), x(r.depth) && (r.depth = 2), x(r.colors) && (r.colors = !1), x(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = v), B(r, t, r.depth)
            }

            function v(t, e) {
                var r = E.styles[e];
                return r ? "\x1b[" + E.colors[r][0] + "m" + t + "\x1b[" + E.colors[r][1] + "m" : t
            }

            function I(t, e) {
                return t
            }

            function B(t, e, r) {
                if (t.customInspect && e && R(e.inspect) && e.inspect !== E && !(e.constructor && e.constructor.prototype === e)) {
                    var n, i, o, s, a = e.inspect(r, t);
                    return T(a) || (a = B(t, a, r)), a
                }
                var u = function(t, e) {
                    if (x(e)) return t.stylize("undefined", "undefined");
                    if (T(e)) {
                        var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return t.stylize(r, "string")
                    }
                    return "number" == typeof e ? t.stylize("" + e, "number") : k(e) ? t.stylize("" + e, "boolean") : null === e ? t.stylize("null", "null") : void 0
                }(t, e);
                if (u) return u;
                var c = Object.keys(e),
                    f = (o = {}, c.forEach(function(t, e) {
                        o[t] = !0
                    }), o);
                if (t.showHidden && (c = Object.getOwnPropertyNames(e)), L(e) && (c.indexOf("message") >= 0 || c.indexOf("description") >= 0)) return A(e);
                if (0 === c.length) {
                    if (R(e)) {
                        var l = e.name ? ": " + e.name : "";
                        return t.stylize("[Function" + l + "]", "special")
                    }
                    if (O(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                    if (P(e)) return t.stylize(Date.prototype.toString.call(e), "date");
                    if (L(e)) return A(e)
                }
                var p = "",
                    h = !1,
                    y = ["{", "}"];
                return (Array.isArray(e) && (h = !0, y = ["[", "]"]), R(e) && (p = " [Function" + (e.name ? ": " + e.name : "") + "]"), O(e) && (p = " " + RegExp.prototype.toString.call(e)), P(e) && (p = " " + Date.prototype.toUTCString.call(e)), L(e) && (p = " " + A(e)), 0 !== c.length || h && 0 != e.length) ? r < 0 ? O(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(e), s = h ? function(t, e, r, n, i) {
                    for (var o = [], s = 0, a = e.length; s < a; ++s) C(e, String(s)) ? o.push(S(t, e, r, n, String(s), !0)) : o.push("");
                    return i.forEach(function(i) {
                        i.match(/^\d+$/) || o.push(S(t, e, r, n, i, !0))
                    }), o
                }(t, e, r, f, c) : c.map(function(n) {
                    return S(t, e, r, f, n, h)
                }), t.seen.pop(), n = p, i = y, s.reduce(function(t, e) {
                    return e.indexOf("\n"), t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? i[0] + ("" === n ? "" : n + "\n ") + " " + s.join(",\n  ") + " " + i[1] : i[0] + n + " " + s.join(", ") + " " + i[1]) : y[0] + p + y[1]
            }

            function A(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }

            function S(t, e, r, n, i, o) {
                var s, a, u;
                if ((u = Object.getOwnPropertyDescriptor(e, i) || {
                        value: e[i]
                    }).get ? a = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (a = t.stylize("[Setter]", "special")), C(n, i) || (s = "[" + i + "]"), !a && (0 > t.seen.indexOf(u.value) ? (a = null === r ? B(t, u.value, null) : B(t, u.value, r - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(t) {
                        return "  " + t
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function(t) {
                        return "   " + t
                    }).join("\n")) : a = t.stylize("[Circular]", "special")), x(s)) {
                    if (o && i.match(/^\d+$/)) return a;
                    (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
                }
                return s + ": " + a
            }

            function k(t) {
                return "boolean" == typeof t
            }

            function T(t) {
                return "string" == typeof t
            }

            function x(t) {
                return void 0 === t
            }

            function O(t) {
                return U(t) && "[object RegExp]" === W(t)
            }

            function U(t) {
                return "object" == typeof t && null !== t
            }

            function P(t) {
                return U(t) && "[object Date]" === W(t)
            }

            function L(t) {
                return U(t) && ("[object Error]" === W(t) || t instanceof Error)
            }

            function R(t) {
                return "function" == typeof t
            }

            function K(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
            }

            function W(t) {
                return Object.prototype.toString.call(t)
            }

            function C(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function M(t, e) {
                if (t === e) return 0;
                for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i], n = e[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }
            E.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, E.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            var _ = Object.prototype.hasOwnProperty,
                N = Object.keys || function(t) {
                    var e = [];
                    for (var r in t) _.call(t, r) && e.push(r);
                    return e
                },
                j = Array.prototype.slice;

            function z() {
                return void 0 !== n ? n : n = "foo" === (function() {}).name
            }

            function F(t) {
                return Object.prototype.toString.call(t)
            }

            function D(t) {
                return !u.isBuffer(t) && "function" == typeof w.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && !!(t instanceof DataView || t.buffer && t.buffer instanceof ArrayBuffer))
            }

            function $(t, e) {
                t || J(t, !0, e, "==", H)
            }
            var V = /\s*function\s+([^\(\s]*)\s*/;

            function q(t) {
                if (R(t)) {
                    if (z()) return t.name;
                    var e = t.toString().match(V);
                    return e && e[1]
                }
            }

            function G(t) {
                this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = Y(Z(this.actual), 128) + " " + this.operator + " " + Y(Z(this.expected), 128), this.generatedMessage = !0);
                var e = t.stackStartFunction || J;
                if (Error.captureStackTrace) Error.captureStackTrace(this, e);
                else {
                    var r = Error();
                    if (r.stack) {
                        var n = r.stack,
                            i = q(e),
                            o = n.indexOf("\n" + i);
                        if (o >= 0) {
                            var s = n.indexOf("\n", o + 1);
                            n = n.substring(s + 1)
                        }
                        this.stack = n
                    }
                }
            }

            function Y(t, e) {
                return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
            }

            function Z(t) {
                if (z() || !R(t)) return E(t);
                var e = q(t);
                return "[Function" + (e ? ": " + e : "") + "]"
            }

            function J(t, e, r, n, i) {
                throw new G({
                    message: r,
                    actual: t,
                    expected: e,
                    operator: n,
                    stackStartFunction: i
                })
            }

            function H(t, e) {
                t || J(t, !0, e, "==", H)
            }

            function X(t, e, r, n) {
                if (t === e) return !0;
                if (u.isBuffer(t) && u.isBuffer(e)) return 0 === M(t, e);
                if (P(t) && P(e)) return t.getTime() === e.getTime();
                if (O(t) && O(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
                if ((null === t || "object" != typeof t) && (null === e || "object" != typeof e)) return r ? t === e : t == e;
                if (D(t) && D(e) && F(t) === F(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === M(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
                if (u.isBuffer(t) !== u.isBuffer(e)) return !1;
                var i = (n = n || {
                    actual: [],
                    expected: []
                }).actual.indexOf(t);
                return -1 !== i && i === n.expected.indexOf(e) || (n.actual.push(t), n.expected.push(e), function(t, e, r, n) {
                    if (null == t || null == e) return !1;
                    if (K(t) || K(e)) return t === e;
                    if (r && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
                    var i, o, s = Q(t),
                        a = Q(e);
                    if (s && !a || !s && a) return !1;
                    if (s) return X(t = j.call(t), e = j.call(e), r);
                    var u = N(t),
                        c = N(e);
                    if (u.length !== c.length) return !1;
                    for (u.sort(), c.sort(), o = u.length - 1; o >= 0; o--)
                        if (u[o] !== c[o]) return !1;
                    for (o = u.length - 1; o >= 0; o--)
                        if (!X(t[i = u[o]], e[i], r, n)) return !1;
                    return !0
                }(t, e, r, n))
            }

            function Q(t) {
                return "[object Arguments]" == Object.prototype.toString.call(t)
            }

            function tt(t, e) {
                if (!t || !e) return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);
                try {
                    if (t instanceof e) return !0
                } catch (t) {}
                return !Error.isPrototypeOf(e) && !0 === e.call({}, t)
            }

            function te(t, e, r, n) {
                if ("function" != typeof e) throw TypeError('"block" argument must be a function');
                "string" == typeof r && (n = r, r = null), i = function(t) {
                    var e;
                    try {
                        t()
                    } catch (t) {
                        e = t
                    }
                    return e
                }(e), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), t && !i && J(i, r, "Missing expected exception" + n);
                var i, o = "string" == typeof n,
                    s = !t && L(i),
                    a = !t && i && !r;
                if ((s && o && tt(i, r) || a) && J(i, r, "Got unwanted exception" + n), t && i && r && !tt(i, r) || !t && i) throw i
            }
            $.AssertionError = G, m(G, Error), $.fail = J, $.ok = H, $.equal = function t(e, r, n) {
                e != r && J(e, r, n, "==", t)
            }, $.notEqual = function t(e, r, n) {
                e == r && J(e, r, n, "!=", t)
            }, $.deepEqual = function t(e, r, n) {
                X(e, r, !1) || J(e, r, n, "deepEqual", t)
            }, $.deepStrictEqual = function t(e, r, n) {
                X(e, r, !0) || J(e, r, n, "deepStrictEqual", t)
            }, $.notDeepEqual = function t(e, r, n) {
                X(e, r, !1) && J(e, r, n, "notDeepEqual", t)
            }, $.notDeepStrictEqual = function t(e, r, n) {
                X(e, r, !0) && J(e, r, n, "notDeepStrictEqual", t)
            }, $.strictEqual = function t(e, r, n) {
                e !== r && J(e, r, n, "===", t)
            }, $.notStrictEqual = function t(e, r, n) {
                e === r && J(e, r, n, "!==", t)
            }, $.throws = function(t, e, r) {
                te(!0, t, e, r)
            }, $.doesNotThrow = function(t, e, r) {
                te(!1, t, e, r)
            }, $.ifError = function(t) {
                if (t) throw t
            };
            var tr = {};
            class tn {
                constructor(t, e) {
                    if (!Number.isInteger(t)) throw TypeError("span must be an integer");
                    this.span = t, this.property = e
                }
                makeDestinationObject() {
                    return {}
                }
                decode(t, e) {
                    throw Error("Layout is abstract")
                }
                encode(t, e, r) {
                    throw Error("Layout is abstract")
                }
                getSpan(t, e) {
                    if (0 > this.span) throw RangeError("indeterminate span");
                    return this.span
                }
                replicate(t) {
                    let e = Object.create(this.constructor.prototype);
                    return Object.assign(e, this), e.property = t, e
                }
                fromArray(t) {}
            }

            function ti(t, e) {
                return e.property ? t + "[" + e.property + "]" : t
            }
            tr.Layout = tn, tr.nameWithProperty = ti, tr.bindConstructorLayout = function(t, e) {
                if ("function" != typeof t) throw TypeError("Class must be constructor");
                if (t.hasOwnProperty("layout_")) throw Error("Class is already bound to a layout");
                if (!(e && e instanceof tn)) throw TypeError("layout must be a Layout");
                if (e.hasOwnProperty("boundConstructor_")) throw Error("layout is already bound to a constructor");
                t.layout_ = e, e.boundConstructor_ = t, e.makeDestinationObject = () => new t, Object.defineProperty(t.prototype, "encode", {
                    value: function(t, r) {
                        return e.encode(this, t, r)
                    },
                    writable: !0
                }), Object.defineProperty(t, "decode", {
                    value: function(t, r) {
                        return e.decode(t, r)
                    },
                    writable: !0
                })
            };
            class to extends tn {
                isCount() {
                    throw Error("ExternalLayout is abstract")
                }
            }
            class ts extends to {
                constructor(t, e) {
                    if (void 0 === t && (t = 1), !Number.isInteger(t) || 0 >= t) throw TypeError("elementSpan must be a (positive) integer");
                    super(-1, e), this.elementSpan = t
                }
                isCount() {
                    return !0
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), Math.floor((t.length - e) / this.elementSpan)
                }
                encode(t, e, r) {
                    return 0
                }
            }
            class ta extends to {
                constructor(t, e, r) {
                    if (!(t instanceof tn)) throw TypeError("layout must be a Layout");
                    if (void 0 === e) e = 0;
                    else if (!Number.isInteger(e)) throw TypeError("offset must be integer or undefined");
                    super(t.span, r || t.property), this.layout = t, this.offset = e
                }
                isCount() {
                    return this.layout instanceof tu || this.layout instanceof tc
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), this.layout.decode(t, e + this.offset)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), this.layout.encode(t, e, r + this.offset)
                }
            }
            class tu extends tn {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readUIntLE(e, this.span)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeUIntLE(t, r, this.span), this.span
                }
            }
            class tc extends tn {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readUIntBE(e, this.span)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeUIntBE(t, r, this.span), this.span
                }
            }
            class tf extends tn {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readIntLE(e, this.span)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeIntLE(t, r, this.span), this.span
                }
            }
            class tl extends tn {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readIntBE(e, this.span)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeIntBE(t, r, this.span), this.span
                }
            }

            function tp(t) {
                let e = Math.floor(t / 4294967296);
                return {
                    hi32: e,
                    lo32: t - 4294967296 * e
                }
            }

            function th(t, e) {
                return 4294967296 * t + e
            }
            class ty extends tn {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = t.readUInt32LE(e);
                    return th(t.readUInt32LE(e + 4), r)
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = tp(t);
                    return e.writeUInt32LE(n.lo32, r), e.writeUInt32LE(n.hi32, r + 4), 8
                }
            }
            class td extends tn {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), th(t.readUInt32BE(e), t.readUInt32BE(e + 4))
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = tp(t);
                    return e.writeUInt32BE(n.hi32, r), e.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            class tg extends tn {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = t.readUInt32LE(e);
                    return th(t.readInt32LE(e + 4), r)
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = tp(t);
                    return e.writeUInt32LE(n.lo32, r), e.writeInt32LE(n.hi32, r + 4), 8
                }
            }
            class tb extends tn {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), th(t.readInt32BE(e), t.readUInt32BE(e + 4))
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = tp(t);
                    return e.writeInt32BE(n.hi32, r), e.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            class tw extends tn {
                constructor(t) {
                    super(4, t)
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readFloatLE(e)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeFloatLE(t, r), 4
                }
            }
            class tm extends tn {
                constructor(t) {
                    super(4, t)
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readFloatBE(e)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeFloatBE(t, r), 4
                }
            }
            class tE extends tn {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readDoubleLE(e)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeDoubleLE(t, r), 8
                }
            }
            class tv extends tn {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readDoubleBE(e)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeDoubleBE(t, r), 8
                }
            }
            class tI extends tn {
                constructor(t, e, r) {
                    if (!(t instanceof tn)) throw TypeError("elementLayout must be a Layout");
                    if (!(e instanceof to && e.isCount() || Number.isInteger(e) && 0 <= e)) throw TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                    let n = -1;
                    e instanceof to || !(0 < t.span) || (n = e * t.span), super(n, r), this.elementLayout = t, this.count = e
                }
                getSpan(t, e) {
                    if (0 <= this.span) return this.span;
                    void 0 === e && (e = 0);
                    let r = 0,
                        n = this.count;
                    if (n instanceof to && (n = n.decode(t, e)), 0 < this.elementLayout.span) r = n * this.elementLayout.span;
                    else {
                        let i = 0;
                        for (; i < n;) r += this.elementLayout.getSpan(t, e + r), ++i
                    }
                    return r
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = [],
                        n = 0,
                        i = this.count;
                    for (i instanceof to && (i = i.decode(t, e)); n < i;) r.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), n += 1;
                    return r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = this.elementLayout,
                        i = t.reduce((t, i) => t + n.encode(i, e, r + t), 0);
                    return this.count instanceof to && this.count.encode(t.length, e, r), i
                }
            }
            class tB extends tn {
                constructor(t, e, r) {
                    if (!(Array.isArray(t) && t.reduce((t, e) => t && e instanceof tn, !0))) throw TypeError("fields must be array of Layout instances");
                    for (let n of ("boolean" == typeof e && void 0 === r && (r = e, e = void 0), t))
                        if (0 > n.span && void 0 === n.property) throw Error("fields cannot contain unnamed variable-length layout");
                    let n = -1;
                    try {
                        n = t.reduce((t, e) => t + e.getSpan(), 0)
                    } catch (t) {}
                    super(n, e), this.fields = t, this.decodePrefixes = !!r
                }
                getSpan(t, e) {
                    if (0 <= this.span) return this.span;
                    void 0 === e && (e = 0);
                    let r = 0;
                    try {
                        r = this.fields.reduce((r, n) => {
                            let i = n.getSpan(t, e);
                            return e += i, r + i
                        }, 0)
                    } catch (t) {
                        throw RangeError("indeterminate span")
                    }
                    return r
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = this.makeDestinationObject();
                    for (let n of this.fields)
                        if (void 0 !== n.property && (r[n.property] = n.decode(t, e)), e += n.getSpan(t, e), this.decodePrefixes && t.length === e) break;
                    return r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = r,
                        i = 0,
                        o = 0;
                    for (let n of this.fields) {
                        let s = n.span;
                        if (o = 0 < s ? s : 0, void 0 !== n.property) {
                            let i = t[n.property];
                            void 0 !== i && (o = n.encode(i, e, r), 0 > s && (s = n.getSpan(e, r)))
                        }
                        i = r, r += s
                    }
                    return i + o - n
                }
                fromArray(t) {
                    let e = this.makeDestinationObject();
                    for (let r of this.fields) void 0 !== r.property && 0 < t.length && (e[r.property] = t.shift());
                    return e
                }
                layoutFor(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    for (let e of this.fields)
                        if (e.property === t) return e
                }
                offsetOf(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    let e = 0;
                    for (let r of this.fields) {
                        if (r.property === t) return e;
                        0 > r.span ? e = -1 : 0 <= e && (e += r.span)
                    }
                }
            }
            class tA {
                constructor(t) {
                    this.property = t
                }
                decode() {
                    throw Error("UnionDiscriminator is abstract")
                }
                encode() {
                    throw Error("UnionDiscriminator is abstract")
                }
            }
            class tS extends tA {
                constructor(t, e) {
                    if (!(t instanceof to && t.isCount())) throw TypeError("layout must be an unsigned integer ExternalLayout");
                    super(e || t.property || "variant"), this.layout = t
                }
                decode(t, e) {
                    return this.layout.decode(t, e)
                }
                encode(t, e, r) {
                    return this.layout.encode(t, e, r)
                }
            }
            class tk extends tn {
                constructor(t, e, r) {
                    let n = t instanceof tu || t instanceof tc;
                    if (n) t = new tS(new ta(t));
                    else if (t instanceof to && t.isCount()) t = new tS(t);
                    else if (!(t instanceof tA)) throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                    if (void 0 === e && (e = null), !(null === e || e instanceof tn)) throw TypeError("defaultLayout must be null or a Layout");
                    if (null !== e) {
                        if (0 > e.span) throw Error("defaultLayout must have constant span");
                        void 0 === e.property && (e = e.replicate("content"))
                    }
                    let i = -1;
                    e && 0 <= (i = e.span) && n && (i += t.layout.span), super(i, r), this.discriminator = t, this.usesPrefixDiscriminator = n, this.defaultLayout = e, this.registry = {};
                    let o = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(t) {
                        return o(t)
                    }, this.configGetSourceVariant = function(t) {
                        o = t.bind(this)
                    }
                }
                getSpan(t, e) {
                    if (0 <= this.span) return this.span;
                    void 0 === e && (e = 0);
                    let r = this.getVariant(t, e);
                    if (!r) throw Error("unable to determine span for unrecognized variant");
                    return r.getSpan(t, e)
                }
                defaultGetSourceVariant(t) {
                    if (t.hasOwnProperty(this.discriminator.property)) {
                        if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property)) return;
                        let e = this.registry[t[this.discriminator.property]];
                        if (e && (!e.layout || t.hasOwnProperty(e.property))) return e
                    } else
                        for (let e in this.registry) {
                            let r = this.registry[e];
                            if (t.hasOwnProperty(r.property)) return r
                        }
                    throw Error("unable to infer src variant")
                }
                decode(t, e) {
                    let r;
                    void 0 === e && (e = 0);
                    let n = this.discriminator,
                        i = n.decode(t, e),
                        o = this.registry[i];
                    if (void 0 === o) {
                        let s = 0;
                        o = this.defaultLayout, this.usesPrefixDiscriminator && (s = n.layout.span), (r = this.makeDestinationObject())[n.property] = i, r[o.property] = this.defaultLayout.decode(t, e + s)
                    } else r = o.decode(t, e);
                    return r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = this.getSourceVariant(t);
                    if (void 0 === n) {
                        let n = this.discriminator,
                            i = this.defaultLayout,
                            o = 0;
                        return this.usesPrefixDiscriminator && (o = n.layout.span), n.encode(t[n.property], e, r), o + i.encode(t[i.property], e, r + o)
                    }
                    return n.encode(t, e, r)
                }
                addVariant(t, e, r) {
                    let n = new tT(this, t, e, r);
                    return this.registry[t] = n, n
                }
                getVariant(t, e) {
                    let r = t;
                    return u.Buffer.isBuffer(t) && (void 0 === e && (e = 0), r = this.discriminator.decode(t, e)), this.registry[r]
                }
            }
            class tT extends tn {
                constructor(t, e, r, n) {
                    if (!(t instanceof tk)) throw TypeError("union must be a Union");
                    if (!Number.isInteger(e) || 0 > e) throw TypeError("variant must be a (non-negative) integer");
                    if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                        if (!(r instanceof tn)) throw TypeError("layout must be a Layout");
                        if (null !== t.defaultLayout && 0 <= r.span && r.span > t.defaultLayout.span) throw Error("variant span exceeds span of containing union");
                        if ("string" != typeof n) throw TypeError("variant must have a String property")
                    }
                    let i = t.span;
                    0 > t.span && 0 <= (i = r ? r.span : 0) && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span), super(i, n), this.union = t, this.variant = e, this.layout = r || null
                }
                getSpan(t, e) {
                    if (0 <= this.span) return this.span;
                    void 0 === e && (e = 0);
                    let r = 0;
                    return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span), r + this.layout.getSpan(t, e + r)
                }
                decode(t, e) {
                    let r = this.makeDestinationObject();
                    if (void 0 === e && (e = 0), this !== this.union.getVariant(t, e)) throw Error("variant mismatch");
                    let n = 0;
                    return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(t, e + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = 0;
                    if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !t.hasOwnProperty(this.property)) throw TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, e, r);
                    let i = n;
                    if (this.layout && (this.layout.encode(t[this.property], e, r + n), i += this.layout.getSpan(e, r + n), 0 <= this.union.span && i > this.union.span)) throw Error("encoded variant overruns containing union");
                    return i
                }
                fromArray(t) {
                    if (this.layout) return this.layout.fromArray(t)
                }
            }

            function tx(t) {
                return 0 > t && (t += 4294967296), t
            }
            class tO extends tn {
                constructor(t, e, r) {
                    if (!(t instanceof tu || t instanceof tc)) throw TypeError("word must be a UInt or UIntBE layout");
                    if ("string" == typeof e && void 0 === r && (r = e, e = void 0), 4 < t.span) throw RangeError("word cannot exceed 32 bits");
                    super(t.span, r), this.word = t, this.msb = !!e, this.fields = [];
                    let n = 0;
                    this._packedSetValue = function(t) {
                        return n = tx(t), this
                    }, this._packedGetValue = function() {
                        return n
                    }
                }
                decode(t, e) {
                    let r = this.makeDestinationObject();
                    void 0 === e && (e = 0);
                    let n = this.word.decode(t, e);
                    for (let t of (this._packedSetValue(n), this.fields)) void 0 !== t.property && (r[t.property] = t.decode(n));
                    return r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = this.word.decode(e, r);
                    for (let e of (this._packedSetValue(n), this.fields))
                        if (void 0 !== e.property) {
                            let r = t[e.property];
                            void 0 !== r && e.encode(r)
                        } return this.word.encode(this._packedGetValue(), e, r)
                }
                addField(t, e) {
                    let r = new tU(this, t, e);
                    return this.fields.push(r), r
                }
                addBoolean(t) {
                    let e = new tP(this, t);
                    return this.fields.push(e), e
                }
                fieldFor(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    for (let e of this.fields)
                        if (e.property === t) return e
                }
            }
            class tU {
                constructor(t, e, r) {
                    if (!(t instanceof tO)) throw TypeError("container must be a BitStructure");
                    if (!Number.isInteger(e) || 0 >= e) throw TypeError("bits must be positive integer");
                    let n = 8 * t.span,
                        i = t.fields.reduce((t, e) => t + e.bits, 0);
                    if (e + i > n) throw Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                    this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, 32 === e && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = n - i - e), this.wordMask = tx(this.valueMask << this.start), this.property = r
                }
                decode() {
                    return tx(this.container._packedGetValue() & this.wordMask) >>> this.start
                }
                encode(t) {
                    if (!Number.isInteger(t) || t !== tx(t & this.valueMask)) throw TypeError(ti("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                    let e = this.container._packedGetValue(),
                        r = tx(t << this.start);
                    this.container._packedSetValue(tx(e & ~this.wordMask) | r)
                }
            }
            class tP extends tU {
                constructor(t, e) {
                    super(t, 1, e)
                }
                decode(t, e) {
                    return !!tU.prototype.decode.call(this, t, e)
                }
                encode(t) {
                    return "boolean" == typeof t && (t = +t), tU.prototype.encode.call(this, t)
                }
            }
            class tL extends tn {
                constructor(t, e) {
                    if (!(t instanceof to && t.isCount() || Number.isInteger(t) && 0 <= t)) throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let r = -1;
                    t instanceof to || (r = t), super(r, e), this.length = t
                }
                getSpan(t, e) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), r
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), t.slice(e, e + r)
                }
                encode(t, e, r) {
                    let n = this.length;
                    if (this.length instanceof to && (n = t.length), !(u.Buffer.isBuffer(t) && n === t.length)) throw TypeError(ti("Blob.encode", this) + " requires (length " + n + ") Buffer as src");
                    if (r + n > e.length) throw RangeError("encoding overruns Buffer");
                    return e.write(t.toString("hex"), r, n, "hex"), this.length instanceof to && this.length.encode(n, e, r), n
                }
            }
            class tR extends tn {
                constructor(t) {
                    super(-1, t)
                }
                getSpan(t, e) {
                    if (!u.Buffer.isBuffer(t)) throw TypeError("b must be a Buffer");
                    void 0 === e && (e = 0);
                    let r = e;
                    for (; r < t.length && 0 !== t[r];) r += 1;
                    return 1 + r - e
                }
                decode(t, e, r) {
                    void 0 === e && (e = 0);
                    let n = this.getSpan(t, e);
                    return t.slice(e, e + n - 1).toString("utf-8")
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0), "string" != typeof t && (t = t.toString());
                    let n = new u.Buffer(t, "utf8"),
                        i = n.length;
                    if (r + i > e.length) throw RangeError("encoding overruns Buffer");
                    return n.copy(e, r), e[r + i] = 0, i + 1
                }
            }
            class tK extends tn {
                constructor(t, e) {
                    if ("string" == typeof t && void 0 === e && (e = t, t = void 0), void 0 === t) t = -1;
                    else if (!Number.isInteger(t)) throw TypeError("maxSpan must be an integer");
                    super(-1, e), this.maxSpan = t
                }
                getSpan(t, e) {
                    if (!u.Buffer.isBuffer(t)) throw TypeError("b must be a Buffer");
                    return void 0 === e && (e = 0), t.length - e
                }
                decode(t, e, r) {
                    void 0 === e && (e = 0);
                    let n = this.getSpan(t, e);
                    if (0 <= this.maxSpan && this.maxSpan < n) throw RangeError("text length exceeds maxSpan");
                    return t.slice(e, e + n).toString("utf-8")
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0), "string" != typeof t && (t = t.toString());
                    let n = new u.Buffer(t, "utf8"),
                        i = n.length;
                    if (0 <= this.maxSpan && this.maxSpan < i) throw RangeError("text length exceeds maxSpan");
                    if (r + i > e.length) throw RangeError("encoding overruns Buffer");
                    return n.copy(e, r), i
                }
            }
            class tW extends tn {
                constructor(t, e) {
                    super(0, e), this.value = t
                }
                decode(t, e, r) {
                    return this.value
                }
                encode(t, e, r) {
                    return 0
                }
            }
            tr.ExternalLayout = to, tr.GreedyCount = ts, tr.OffsetLayout = ta, tr.UInt = tu, tr.UIntBE = tc, tr.Int = tf, tr.IntBE = tl, tr.Float = tw, tr.FloatBE = tm, tr.Double = tE, tr.DoubleBE = tv, tr.Sequence = tI, tr.Structure = tB, tr.UnionDiscriminator = tA, tr.UnionLayoutDiscriminator = tS, tr.Union = tk, tr.VariantLayout = tT, tr.BitStructure = tO, tr.BitField = tU, tr.Boolean = tP, tr.Blob = tL, tr.CString = tR, tr.UTF8 = tK, tr.Constant = tW, tr.greedy = (t, e) => new ts(t, e), tr.offset = (t, e, r) => new ta(t, e, r);
            var tC = tr.u8 = t => new tu(1, t);
            tr.u16 = t => new tu(2, t), tr.u24 = t => new tu(3, t);
            var tM = tr.u32 = t => new tu(4, t);
            tr.u40 = t => new tu(5, t), tr.u48 = t => new tu(6, t), tr.nu64 = t => new ty(t), tr.u16be = t => new tc(2, t), tr.u24be = t => new tc(3, t), tr.u32be = t => new tc(4, t), tr.u40be = t => new tc(5, t), tr.u48be = t => new tc(6, t), tr.nu64be = t => new td(t), tr.s8 = t => new tf(1, t), tr.s16 = t => new tf(2, t), tr.s24 = t => new tf(3, t), tr.s32 = t => new tf(4, t), tr.s40 = t => new tf(5, t), tr.s48 = t => new tf(6, t), tr.ns64 = t => new tg(t), tr.s16be = t => new tl(2, t), tr.s24be = t => new tl(3, t), tr.s32be = t => new tl(4, t), tr.s40be = t => new tl(5, t), tr.s48be = t => new tl(6, t), tr.ns64be = t => new tb(t), tr.f32 = t => new tw(t), tr.f32be = t => new tm(t), tr.f64 = t => new tE(t), tr.f64be = t => new tv(t);
            var t_ = tr.struct = (t, e, r) => new tB(t, e, r);
            tr.bits = (t, e, r) => new tO(t, e, r), tr.seq = (t, e, r) => new tI(t, e, r), tr.union = (t, e, r) => new tk(t, e, r), tr.unionLayoutDiscriminator = (t, e) => new tS(t, e);
            var tN = tr.blob = (t, e) => new tL(t, e);
            tr.cstr = t => new tR(t), tr.utf8 = (t, e) => new tK(t, e), tr.const = (t, e) => new tW(t, e);
            let tj = (t = "publicKey") => tN(32, t),
                tz = (t = "uint64") => tN(8, t);

            function tF(t, e, r, ...n) {
                return (0, a.sendAndConfirmTransaction)(e, r, n, {
                    skipPreflight: !1
                })
            }
            let tD = new a.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
                t$ = new a.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
                tV = "Failed to find account",
                tq = "Invalid account owner";

            function tG(t) {
                return u.Buffer.from(t.toBuffer())
            }
            class tY extends s() {
                toBuffer() {
                    let t = super.toArray().reverse(),
                        e = u.Buffer.from(t);
                    if (8 === e.length) return e;
                    $(e.length < 8, "u64 too large");
                    let r = u.Buffer.alloc(8);
                    return e.copy(r), r
                }
                static fromBuffer(t) {
                    return $(8 === t.length, `Invalid buffer length: ${t.length}`), new tY([...t].reverse().map(t => `00${t.toString(16)}`.slice(-2)).join(""), 16)
                }
            }

            function tZ(t) {
                return "publicKey" in t
            }
            let tJ = {
                    MintTokens: 0,
                    FreezeAccount: 1,
                    AccountOwner: 2,
                    CloseAccount: 3
                },
                tH = new a.PublicKey("So11111111111111111111111111111111111111112"),
                tX = t_([tM("mintAuthorityOption"), tj("mintAuthority"), tz("supply"), tC("decimals"), tC("isInitialized"), tM("freezeAuthorityOption"), tj("freezeAuthority")]),
                tQ = t_([tj("mint"), tj("owner"), tz("amount"), tM("delegateOption"), tj("delegate"), tC("state"), tM("isNativeOption"), tz("isNative"), tz("delegatedAmount"), tM("closeAuthorityOption"), tj("closeAuthority")]),
                t0 = t_([tC("m"), tC("n"), tC("is_initialized"), tj("signer1"), tj("signer2"), tj("signer3"), tj("signer4"), tj("signer5"), tj("signer6"), tj("signer7"), tj("signer8"), tj("signer9"), tj("signer10"), tj("signer11")]);
            class t1 {
                constructor(t, e, r, n) {
                    (0, i.Z)(this, "connection", void 0), (0, i.Z)(this, "publicKey", void 0), (0, i.Z)(this, "programId", void 0), (0, i.Z)(this, "associatedProgramId", void 0), (0, i.Z)(this, "payer", void 0), Object.assign(this, {
                        connection: t,
                        publicKey: e,
                        programId: r,
                        payer: n,
                        associatedProgramId: t$
                    })
                }
                static async getMinBalanceRentForExemptMint(t) {
                    return await t.getMinimumBalanceForRentExemption(tX.span)
                }
                static async getMinBalanceRentForExemptAccount(t) {
                    return await t.getMinimumBalanceForRentExemption(tQ.span)
                }
                static async getMinBalanceRentForExemptMultisig(t) {
                    return await t.getMinimumBalanceForRentExemption(t0.span)
                }
                static async createMint(t, e, r, n, i, o) {
                    let s = a.Keypair.generate(),
                        u = new t1(t, s.publicKey, o, e),
                        c = await t1.getMinBalanceRentForExemptMint(t),
                        f = new a.Transaction;
                    return f.add(a.SystemProgram.createAccount({
                        fromPubkey: e.publicKey,
                        newAccountPubkey: s.publicKey,
                        lamports: c,
                        space: tX.span,
                        programId: o
                    })), f.add(t1.createInitMintInstruction(o, s.publicKey, i, r, n)), await tF("createAccount and InitializeMint", t, f, e, s), u
                }
                async createAccount(t) {
                    let e = await t1.getMinBalanceRentForExemptAccount(this.connection),
                        r = a.Keypair.generate(),
                        n = new a.Transaction;
                    n.add(a.SystemProgram.createAccount({
                        fromPubkey: this.payer.publicKey,
                        newAccountPubkey: r.publicKey,
                        lamports: e,
                        space: tQ.span,
                        programId: this.programId
                    }));
                    let i = this.publicKey;
                    return n.add(t1.createInitAccountInstruction(this.programId, i, r.publicKey, t)), await tF("createAccount and InitializeAccount", this.connection, n, this.payer, r), r.publicKey
                }
                async createAssociatedTokenAccount(t) {
                    let e = await t1.getAssociatedTokenAddress(this.associatedProgramId, this.programId, this.publicKey, t);
                    return this.createAssociatedTokenAccountInternal(t, e)
                }
                async createAssociatedTokenAccountInternal(t, e) {
                    return await tF("CreateAssociatedTokenAccount", this.connection, new a.Transaction().add(t1.createAssociatedTokenAccountInstruction(this.associatedProgramId, this.programId, this.publicKey, e, t, this.payer.publicKey)), this.payer), e
                }
                async getOrCreateAssociatedAccountInfo(t) {
                    let e = await t1.getAssociatedTokenAddress(this.associatedProgramId, this.programId, this.publicKey, t);
                    try {
                        return await this.getAccountInfo(e)
                    } catch (r) {
                        if (r.message === tV || r.message === tq) {
                            try {
                                await this.createAssociatedTokenAccountInternal(t, e)
                            } catch (t) {}
                            return await this.getAccountInfo(e)
                        }
                        throw r
                    }
                }
                static async createWrappedNativeAccount(t, e, r, n, i) {
                    let o = await t1.getMinBalanceRentForExemptAccount(t),
                        s = a.Keypair.generate(),
                        u = new a.Transaction;
                    return u.add(a.SystemProgram.createAccount({
                        fromPubkey: n.publicKey,
                        newAccountPubkey: s.publicKey,
                        lamports: o,
                        space: tQ.span,
                        programId: e
                    })), u.add(a.SystemProgram.transfer({
                        fromPubkey: n.publicKey,
                        toPubkey: s.publicKey,
                        lamports: i
                    })), u.add(t1.createInitAccountInstruction(e, tH, s.publicKey, r)), await tF("createAccount, transfer, and initializeAccount", t, u, n, s), s.publicKey
                }
                async createMultisig(t, e) {
                    let r = a.Keypair.generate(),
                        n = await t1.getMinBalanceRentForExemptMultisig(this.connection),
                        i = new a.Transaction;
                    i.add(a.SystemProgram.createAccount({
                        fromPubkey: this.payer.publicKey,
                        newAccountPubkey: r.publicKey,
                        lamports: n,
                        space: t0.span,
                        programId: this.programId
                    }));
                    let o = [{
                        pubkey: r.publicKey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: a.SYSVAR_RENT_PUBKEY,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    e.forEach(t => o.push({
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !1
                    }));
                    let s = t_([tC("instruction"), tC("m")]),
                        c = u.Buffer.alloc(s.span);
                    return s.encode({
                        instruction: 2,
                        m: t
                    }, c), i.add({
                        keys: o,
                        programId: this.programId,
                        data: c
                    }), await tF("createAccount and InitializeMultisig", this.connection, i, this.payer, r), r.publicKey
                }
                async getMintInfo() {
                    let t = await this.connection.getAccountInfo(this.publicKey);
                    if (null === t) throw Error("Failed to find mint account");
                    if (!t.owner.equals(this.programId)) throw Error(`Invalid mint owner: ${JSON.stringify(t.owner)}`);
                    if (t.data.length != tX.span) throw Error("Invalid mint size");
                    let e = u.Buffer.from(t.data),
                        r = tX.decode(e);
                    return 0 === r.mintAuthorityOption ? r.mintAuthority = null : r.mintAuthority = new a.PublicKey(r.mintAuthority), r.supply = tY.fromBuffer(r.supply), r.isInitialized = 0 != r.isInitialized, 0 === r.freezeAuthorityOption ? r.freezeAuthority = null : r.freezeAuthority = new a.PublicKey(r.freezeAuthority), r
                }
                async getAccountInfo(t, e) {
                    let r = await this.connection.getAccountInfo(t, e);
                    if (null === r) throw Error(tV);
                    if (!r.owner.equals(this.programId)) throw Error(tq);
                    if (r.data.length != tQ.span) throw Error("Invalid account size");
                    let n = u.Buffer.from(r.data),
                        i = tQ.decode(n);
                    if (i.address = t, i.mint = new a.PublicKey(i.mint), i.owner = new a.PublicKey(i.owner), i.amount = tY.fromBuffer(i.amount), 0 === i.delegateOption ? (i.delegate = null, i.delegatedAmount = new tY) : (i.delegate = new a.PublicKey(i.delegate), i.delegatedAmount = tY.fromBuffer(i.delegatedAmount)), i.isInitialized = 0 !== i.state, i.isFrozen = 2 === i.state, 1 === i.isNativeOption ? (i.rentExemptReserve = tY.fromBuffer(i.isNative), i.isNative = !0) : (i.rentExemptReserve = null, i.isNative = !1), 0 === i.closeAuthorityOption ? i.closeAuthority = null : i.closeAuthority = new a.PublicKey(i.closeAuthority), !i.mint.equals(this.publicKey)) throw Error(`Invalid account mint: ${JSON.stringify(i.mint)} !== ${JSON.stringify(this.publicKey)}`);
                    return i
                }
                async getMultisigInfo(t) {
                    let e = await this.connection.getAccountInfo(t);
                    if (null === e) throw Error("Failed to find multisig");
                    if (!e.owner.equals(this.programId)) throw Error("Invalid multisig owner");
                    if (e.data.length != t0.span) throw Error("Invalid multisig size");
                    let r = u.Buffer.from(e.data),
                        n = t0.decode(r);
                    return n.signer1 = new a.PublicKey(n.signer1), n.signer2 = new a.PublicKey(n.signer2), n.signer3 = new a.PublicKey(n.signer3), n.signer4 = new a.PublicKey(n.signer4), n.signer5 = new a.PublicKey(n.signer5), n.signer6 = new a.PublicKey(n.signer6), n.signer7 = new a.PublicKey(n.signer7), n.signer8 = new a.PublicKey(n.signer8), n.signer9 = new a.PublicKey(n.signer9), n.signer10 = new a.PublicKey(n.signer10), n.signer11 = new a.PublicKey(n.signer11), n
                }
                async transfer(t, e, r, n, i) {
                    let o, s;
                    return tZ(r) ? (o = r.publicKey, s = [r]) : (o = r, s = n), await tF("Transfer", this.connection, new a.Transaction().add(t1.createTransferInstruction(this.programId, t, e, o, n, i)), this.payer, ...s)
                }
                async approve(t, e, r, n, i) {
                    let o, s;
                    tZ(r) ? (o = r.publicKey, s = [r]) : (o = r, s = n), await tF("Approve", this.connection, new a.Transaction().add(t1.createApproveInstruction(this.programId, t, e, o, n, i)), this.payer, ...s)
                }
                async revoke(t, e, r) {
                    let n, i;
                    tZ(e) ? (n = e.publicKey, i = [e]) : (n = e, i = r), await tF("Revoke", this.connection, new a.Transaction().add(t1.createRevokeInstruction(this.programId, t, n, r)), this.payer, ...i)
                }
                async setAuthority(t, e, r, n, i) {
                    let o, s;
                    tZ(n) ? (o = n.publicKey, s = [n]) : (o = n, s = i), await tF("SetAuthority", this.connection, new a.Transaction().add(t1.createSetAuthorityInstruction(this.programId, t, e, r, o, i)), this.payer, ...s)
                }
                async mintTo(t, e, r, n) {
                    let i, o;
                    tZ(e) ? (i = e.publicKey, o = [e]) : (i = e, o = r), await tF("MintTo", this.connection, new a.Transaction().add(t1.createMintToInstruction(this.programId, this.publicKey, t, i, r, n)), this.payer, ...o)
                }
                async burn(t, e, r, n) {
                    let i, o;
                    tZ(e) ? (i = e.publicKey, o = [e]) : (i = e, o = r), await tF("Burn", this.connection, new a.Transaction().add(t1.createBurnInstruction(this.programId, this.publicKey, t, i, r, n)), this.payer, ...o)
                }
                async closeAccount(t, e, r, n) {
                    let i, o;
                    tZ(r) ? (i = r.publicKey, o = [r]) : (i = r, o = n), await tF("CloseAccount", this.connection, new a.Transaction().add(t1.createCloseAccountInstruction(this.programId, t, e, i, n)), this.payer, ...o)
                }
                async freezeAccount(t, e, r) {
                    let n, i;
                    tZ(e) ? (n = e.publicKey, i = [e]) : (n = e, i = r), await tF("FreezeAccount", this.connection, new a.Transaction().add(t1.createFreezeAccountInstruction(this.programId, t, this.publicKey, n, r)), this.payer, ...i)
                }
                async thawAccount(t, e, r) {
                    let n, i;
                    tZ(e) ? (n = e.publicKey, i = [e]) : (n = e, i = r), await tF("ThawAccount", this.connection, new a.Transaction().add(t1.createThawAccountInstruction(this.programId, t, this.publicKey, n, r)), this.payer, ...i)
                }
                async transferChecked(t, e, r, n, i, o) {
                    let s, u;
                    return tZ(r) ? (s = r.publicKey, u = [r]) : (s = r, u = n), await tF("TransferChecked", this.connection, new a.Transaction().add(t1.createTransferCheckedInstruction(this.programId, t, this.publicKey, e, s, n, i, o)), this.payer, ...u)
                }
                async approveChecked(t, e, r, n, i, o) {
                    let s, u;
                    tZ(r) ? (s = r.publicKey, u = [r]) : (s = r, u = n), await tF("ApproveChecked", this.connection, new a.Transaction().add(t1.createApproveCheckedInstruction(this.programId, t, this.publicKey, e, s, n, i, o)), this.payer, ...u)
                }
                async mintToChecked(t, e, r, n, i) {
                    let o, s;
                    tZ(e) ? (o = e.publicKey, s = [e]) : (o = e, s = r), await tF("MintToChecked", this.connection, new a.Transaction().add(t1.createMintToCheckedInstruction(this.programId, this.publicKey, t, o, r, n, i)), this.payer, ...s)
                }
                async burnChecked(t, e, r, n, i) {
                    let o, s;
                    tZ(e) ? (o = e.publicKey, s = [e]) : (o = e, s = r), await tF("BurnChecked", this.connection, new a.Transaction().add(t1.createBurnCheckedInstruction(this.programId, this.publicKey, t, o, r, n, i)), this.payer, ...s)
                }
                async syncNative(t) {
                    await tF("SyncNative", this.connection, new a.Transaction().add(t1.createSyncNativeInstruction(this.programId, t)), this.payer)
                }
                static createInitMintInstruction(t, e, r, n, i) {
                    let o = [{
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: a.SYSVAR_RENT_PUBKEY,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        s = t_([tC("instruction"), tC("decimals"), tj("mintAuthority"), tC("option"), tj("freezeAuthority")]),
                        c = u.Buffer.alloc(1024);
                    {
                        let t = s.encode({
                            instruction: 0,
                            decimals: r,
                            mintAuthority: tG(n),
                            option: null === i ? 0 : 1,
                            freezeAuthority: tG(i || new a.PublicKey(0))
                        }, c);
                        c = c.slice(0, t)
                    }
                    return new a.TransactionInstruction({
                        keys: o,
                        programId: t,
                        data: c
                    })
                }
                static createInitAccountInstruction(t, e, r, n) {
                    let i = [{
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: a.SYSVAR_RENT_PUBKEY,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        o = t_([tC("instruction")]),
                        s = u.Buffer.alloc(o.span);
                    return o.encode({
                        instruction: 1
                    }, s), new a.TransactionInstruction({
                        keys: i,
                        programId: t,
                        data: s
                    })
                }
                static createTransferInstruction(t, e, r, n, i, o) {
                    let s = t_([tC("instruction"), tz("amount")]),
                        c = u.Buffer.alloc(s.span);
                    s.encode({
                        instruction: 3,
                        amount: new tY(o).toBuffer()
                    }, c);
                    let f = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === i.length ? f.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (f.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => f.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: f,
                        programId: t,
                        data: c
                    })
                }
                static createApproveInstruction(t, e, r, n, i, o) {
                    let s = t_([tC("instruction"), tz("amount")]),
                        c = u.Buffer.alloc(s.span);
                    s.encode({
                        instruction: 4,
                        amount: new tY(o).toBuffer()
                    }, c);
                    let f = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return 0 === i.length ? f.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (f.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => f.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: f,
                        programId: t,
                        data: c
                    })
                }
                static createRevokeInstruction(t, e, r, n) {
                    let i = t_([tC("instruction")]),
                        o = u.Buffer.alloc(i.span);
                    i.encode({
                        instruction: 5
                    }, o);
                    let s = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === n.length ? s.push({
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }) : (s.push({
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !1
                    }), n.forEach(t => s.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: s,
                        programId: t,
                        data: o
                    })
                }
                static createSetAuthorityInstruction(t, e, r, n, i, o) {
                    let s = t_([tC("instruction"), tC("authorityType"), tC("option"), tj("newAuthority")]),
                        c = u.Buffer.alloc(1024);
                    {
                        let t = s.encode({
                            instruction: 6,
                            authorityType: tJ[n],
                            option: null === r ? 0 : 1,
                            newAuthority: tG(r || new a.PublicKey(0))
                        }, c);
                        c = c.slice(0, t)
                    }
                    let f = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === o.length ? f.push({
                        pubkey: i,
                        isSigner: !0,
                        isWritable: !1
                    }) : (f.push({
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !1
                    }), o.forEach(t => f.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: f,
                        programId: t,
                        data: c
                    })
                }
                static createMintToInstruction(t, e, r, n, i, o) {
                    let s = t_([tC("instruction"), tz("amount")]),
                        c = u.Buffer.alloc(s.span);
                    s.encode({
                        instruction: 7,
                        amount: new tY(o).toBuffer()
                    }, c);
                    let f = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === i.length ? f.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (f.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => f.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: f,
                        programId: t,
                        data: c
                    })
                }
                static createBurnInstruction(t, e, r, n, i, o) {
                    let s = t_([tC("instruction"), tz("amount")]),
                        c = u.Buffer.alloc(s.span);
                    s.encode({
                        instruction: 8,
                        amount: new tY(o).toBuffer()
                    }, c);
                    let f = [{
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === i.length ? f.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (f.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => f.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: f,
                        programId: t,
                        data: c
                    })
                }
                static createCloseAccountInstruction(t, e, r, n, i) {
                    let o = t_([tC("instruction")]),
                        s = u.Buffer.alloc(o.span);
                    o.encode({
                        instruction: 9
                    }, s);
                    let c = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === i.length ? c.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (c.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => c.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: c,
                        programId: t,
                        data: s
                    })
                }
                static createFreezeAccountInstruction(t, e, r, n, i) {
                    let o = t_([tC("instruction")]),
                        s = u.Buffer.alloc(o.span);
                    o.encode({
                        instruction: 10
                    }, s);
                    let c = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return 0 === i.length ? c.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (c.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => c.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: c,
                        programId: t,
                        data: s
                    })
                }
                static createThawAccountInstruction(t, e, r, n, i) {
                    let o = t_([tC("instruction")]),
                        s = u.Buffer.alloc(o.span);
                    o.encode({
                        instruction: 11
                    }, s);
                    let c = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return 0 === i.length ? c.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (c.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => c.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: c,
                        programId: t,
                        data: s
                    })
                }
                static createTransferCheckedInstruction(t, e, r, n, i, o, s, c) {
                    let f = t_([tC("instruction"), tz("amount"), tC("decimals")]),
                        l = u.Buffer.alloc(f.span);
                    f.encode({
                        instruction: 12,
                        amount: new tY(s).toBuffer(),
                        decimals: c
                    }, l);
                    let p = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === o.length ? p.push({
                        pubkey: i,
                        isSigner: !0,
                        isWritable: !1
                    }) : (p.push({
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !1
                    }), o.forEach(t => p.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: p,
                        programId: t,
                        data: l
                    })
                }
                static createApproveCheckedInstruction(t, e, r, n, i, o, s, c) {
                    let f = t_([tC("instruction"), tz("amount"), tC("decimals")]),
                        l = u.Buffer.alloc(f.span);
                    f.encode({
                        instruction: 13,
                        amount: new tY(s).toBuffer(),
                        decimals: c
                    }, l);
                    let p = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return 0 === o.length ? p.push({
                        pubkey: i,
                        isSigner: !0,
                        isWritable: !1
                    }) : (p.push({
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !1
                    }), o.forEach(t => p.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: p,
                        programId: t,
                        data: l
                    })
                }
                static createMintToCheckedInstruction(t, e, r, n, i, o, s) {
                    let c = t_([tC("instruction"), tz("amount"), tC("decimals")]),
                        f = u.Buffer.alloc(c.span);
                    c.encode({
                        instruction: 14,
                        amount: new tY(o).toBuffer(),
                        decimals: s
                    }, f);
                    let l = [{
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === i.length ? l.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (l.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => l.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: l,
                        programId: t,
                        data: f
                    })
                }
                static createBurnCheckedInstruction(t, e, r, n, i, o, s) {
                    let c = t_([tC("instruction"), tz("amount"), tC("decimals")]),
                        f = u.Buffer.alloc(c.span);
                    c.encode({
                        instruction: 15,
                        amount: new tY(o).toBuffer(),
                        decimals: s
                    }, f);
                    let l = [{
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }];
                    return 0 === i.length ? l.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }) : (l.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }), i.forEach(t => l.push({
                        pubkey: t.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    }))), new a.TransactionInstruction({
                        keys: l,
                        programId: t,
                        data: f
                    })
                }
                static createSyncNativeInstruction(t, e) {
                    let r = t_([tC("instruction")]),
                        n = u.Buffer.alloc(r.span);
                    return r.encode({
                        instruction: 17
                    }, n), new a.TransactionInstruction({
                        keys: [{
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !0
                        }],
                        programId: t,
                        data: n
                    })
                }
                static async getAssociatedTokenAddress(t, e, r, n, i = !1) {
                    if (!i && !a.PublicKey.isOnCurve(n.toBuffer())) throw Error(`Owner cannot sign: ${n.toString()}`);
                    return (await a.PublicKey.findProgramAddress([n.toBuffer(), e.toBuffer(), r.toBuffer()], t))[0]
                }
                static createAssociatedTokenAccountInstruction(t, e, r, n, i, o) {
                    let s = u.Buffer.alloc(0),
                        c = [{
                            pubkey: o,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: a.SystemProgram.programId,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: a.SYSVAR_RENT_PUBKEY,
                            isSigner: !1,
                            isWritable: !1
                        }];
                    return new a.TransactionInstruction({
                        keys: c,
                        programId: t,
                        data: s
                    })
                }
            }
        }
    }
]);