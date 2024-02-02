(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [397], {
        32452: function(t, e, r) {
            "use strict";
            /**
             * Support for translating between Uint8Array instances and JavaScript
             * native types.
             *
             * {@link module:Layout~Layout|Layout} is the basis of a class
             * hierarchy that associates property names with sequences of encoded
             * bytes.
             *
             * Layouts are supported for these scalar (numeric) types:
             * * {@link module:Layout~UInt|Unsigned integers in little-endian
             *   format} with {@link module:Layout.u8|8-bit}, {@link
             *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
             *   {@link module:Layout.u32|32-bit}, {@link
             *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
             *   representation ranges;
             * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
             *   format} with {@link module:Layout.u16be|16-bit}, {@link
             *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
             *   {@link module:Layout.u40be|40-bit}, and {@link
             *   module:Layout.u48be|48-bit} representation ranges;
             * * {@link module:Layout~Int|Signed integers in little-endian
             *   format} with {@link module:Layout.s8|8-bit}, {@link
             *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
             *   {@link module:Layout.s32|32-bit}, {@link
             *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
             *   representation ranges;
             * * {@link module:Layout~IntBE|Signed integers in big-endian format}
             *   with {@link module:Layout.s16be|16-bit}, {@link
             *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
             *   {@link module:Layout.s40be|40-bit}, and {@link
             *   module:Layout.s48be|48-bit} representation ranges;
             * * 64-bit integral values that decode to an exact (if magnitude is
             *   less than 2^53) or nearby integral Number in {@link
             *   module:Layout.nu64|unsigned little-endian}, {@link
             *   module:Layout.nu64be|unsigned big-endian}, {@link
             *   module:Layout.ns64|signed little-endian}, and {@link
             *   module:Layout.ns64be|unsigned big-endian} encodings;
             * * 32-bit floating point values with {@link
             *   module:Layout.f32|little-endian} and {@link
             *   module:Layout.f32be|big-endian} representations;
             * * 64-bit floating point values with {@link
             *   module:Layout.f64|little-endian} and {@link
             *   module:Layout.f64be|big-endian} representations;
             * * {@link module:Layout.const|Constants} that take no space in the
             *   encoded expression.
             *
             * and for these aggregate types:
             * * {@link module:Layout.seq|Sequence}s of instances of a {@link
             *   module:Layout~Layout|Layout}, with JavaScript representation as
             *   an Array and constant or data-dependent {@link
             *   module:Layout~Sequence#count|length};
             * * {@link module:Layout.struct|Structure}s that aggregate a
             *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
             *   instances, with JavaScript representation as an Object;
             * * {@link module:Layout.union|Union}s that support multiple {@link
             *   module:Layout~VariantLayout|variant layouts} over a fixed
             *   (padded) or variable (not padded) span of bytes, using an
             *   unsigned integer at the start of the data or a separate {@link
             *   module:Layout.unionLayoutDiscriminator|layout element} to
             *   determine which layout to use when interpreting the buffer
             *   contents;
             * * {@link module:Layout.bits|BitStructure}s that contain a sequence
             *   of individual {@link
             *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
             *   16, 24, or 32-bit unsigned integer starting at the least- or
             *   most-significant bit;
             * * {@link module:Layout.cstr|C strings} of varying length;
             * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
             *   module:Layout~Blob#length|length} raw data.
             *
             * All {@link module:Layout~Layout|Layout} instances are immutable
             * after construction, to prevent internal state from becoming
             * inconsistent.
             *
             * @local Layout
             * @local ExternalLayout
             * @local GreedyCount
             * @local OffsetLayout
             * @local UInt
             * @local UIntBE
             * @local Int
             * @local IntBE
             * @local NearUInt64
             * @local NearUInt64BE
             * @local NearInt64
             * @local NearInt64BE
             * @local Float
             * @local FloatBE
             * @local Double
             * @local DoubleBE
             * @local Sequence
             * @local Structure
             * @local UnionDiscriminator
             * @local UnionLayoutDiscriminator
             * @local Union
             * @local VariantLayout
             * @local BitStructure
             * @local BitField
             * @local Boolean
             * @local Blob
             * @local CString
             * @local Constant
             * @local bindConstructorLayout
             * @module Layout
             * @license MIT
             * @author Peter A. Bigot
             * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
             */
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.s16 = e.s8 = e.nu64be = e.u48be = e.u40be = e.u32be = e.u24be = e.u16be = e.nu64 = e.u48 = e.u40 = e.u32 = e.u24 = e.u16 = e.u8 = e.offset = e.greedy = e.Constant = e.UTF8 = e.CString = e.Blob = e.Boolean = e.BitField = e.BitStructure = e.VariantLayout = e.Union = e.UnionLayoutDiscriminator = e.UnionDiscriminator = e.Structure = e.Sequence = e.DoubleBE = e.Double = e.FloatBE = e.Float = e.NearInt64BE = e.NearInt64 = e.NearUInt64BE = e.NearUInt64 = e.IntBE = e.Int = e.UIntBE = e.UInt = e.OffsetLayout = e.GreedyCount = e.ExternalLayout = e.bindConstructorLayout = e.nameWithProperty = e.Layout = e.uint8ArrayToBuffer = e.checkUint8Array = void 0, e.constant = e.utf8 = e.cstr = e.blob = e.unionLayoutDiscriminator = e.union = e.seq = e.bits = e.struct = e.f64be = e.f64 = e.f32be = e.f32 = e.ns64be = e.s48be = e.s40be = e.s32be = e.s24be = e.s16be = e.ns64 = e.s48 = e.s40 = e.s32 = e.s24 = void 0;
            let n = r(67133);

            function i(t) {
                if (!(t instanceof Uint8Array)) throw TypeError("b must be a Uint8Array")
            }

            function o(t) {
                return i(t), n.Buffer.from(t.buffer, t.byteOffset, t.length)
            }
            e.checkUint8Array = i, e.uint8ArrayToBuffer = o;
            class s {
                constructor(t, e) {
                    if (!Number.isInteger(t)) throw TypeError("span must be an integer");
                    this.span = t, this.property = e
                }
                makeDestinationObject() {
                    return {}
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

            function u(t, e) {
                return e.property ? t + "[" + e.property + "]" : t
            }
            e.Layout = s, e.nameWithProperty = u, e.bindConstructorLayout = function(t, e) {
                if ("function" != typeof t) throw TypeError("Class must be constructor");
                if (Object.prototype.hasOwnProperty.call(t, "layout_")) throw Error("Class is already bound to a layout");
                if (!(e && e instanceof s)) throw TypeError("layout must be a Layout");
                if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_")) throw Error("layout is already bound to a constructor");
                t.layout_ = e, e.boundConstructor_ = t, e.makeDestinationObject = () => new t, Object.defineProperty(t.prototype, "encode", {
                    value(t, r) {
                        return e.encode(this, t, r)
                    },
                    writable: !0
                }), Object.defineProperty(t, "decode", {
                    value: (t, r) => e.decode(t, r),
                    writable: !0
                })
            };
            class a extends s {
                isCount() {
                    throw Error("ExternalLayout is abstract")
                }
            }
            e.ExternalLayout = a;
            class f extends a {
                constructor(t = 1, e) {
                    if (!Number.isInteger(t) || 0 >= t) throw TypeError("elementSpan must be a (positive) integer");
                    super(-1, e), this.elementSpan = t
                }
                isCount() {
                    return !0
                }
                decode(t, e = 0) {
                    return i(t), Math.floor((t.length - e) / this.elementSpan)
                }
                encode(t, e, r) {
                    return 0
                }
            }
            e.GreedyCount = f;
            class h extends a {
                constructor(t, e = 0, r) {
                    if (!(t instanceof s)) throw TypeError("layout must be a Layout");
                    if (!Number.isInteger(e)) throw TypeError("offset must be integer or undefined");
                    super(t.span, r || t.property), this.layout = t, this.offset = e
                }
                isCount() {
                    return this.layout instanceof l || this.layout instanceof c
                }
                decode(t, e = 0) {
                    return this.layout.decode(t, e + this.offset)
                }
                encode(t, e, r = 0) {
                    return this.layout.encode(t, e, r + this.offset)
                }
            }
            e.OffsetLayout = h;
            class l extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e = 0) {
                    return o(t).readUIntLE(e, this.span)
                }
                encode(t, e, r = 0) {
                    return o(e).writeUIntLE(t, r, this.span), this.span
                }
            }
            e.UInt = l;
            class c extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e = 0) {
                    return o(t).readUIntBE(e, this.span)
                }
                encode(t, e, r = 0) {
                    return o(e).writeUIntBE(t, r, this.span), this.span
                }
            }
            e.UIntBE = c;
            class d extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e = 0) {
                    return o(t).readIntLE(e, this.span)
                }
                encode(t, e, r = 0) {
                    return o(e).writeIntLE(t, r, this.span), this.span
                }
            }
            e.Int = d;
            class p extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e = 0) {
                    return o(t).readIntBE(e, this.span)
                }
                encode(t, e, r = 0) {
                    return o(e).writeIntBE(t, r, this.span), this.span
                }
            }

            function y(t) {
                let e = Math.floor(t / 4294967296);
                return {
                    hi32: e,
                    lo32: t - 4294967296 * e
                }
            }

            function m(t, e) {
                return 4294967296 * t + e
            }
            e.IntBE = p;
            class g extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    let r = o(t),
                        n = r.readUInt32LE(e);
                    return m(r.readUInt32LE(e + 4), n)
                }
                encode(t, e, r = 0) {
                    let n = y(t),
                        i = o(e);
                    return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8
                }
            }
            e.NearUInt64 = g;
            class w extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    let r = o(t);
                    return m(r.readUInt32BE(e), r.readUInt32BE(e + 4))
                }
                encode(t, e, r = 0) {
                    let n = y(t),
                        i = o(e);
                    return i.writeUInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            e.NearUInt64BE = w;
            class v extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    let r = o(t),
                        n = r.readUInt32LE(e);
                    return m(r.readInt32LE(e + 4), n)
                }
                encode(t, e, r = 0) {
                    let n = y(t),
                        i = o(e);
                    return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8
                }
            }
            e.NearInt64 = v;
            class b extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    let r = o(t);
                    return m(r.readInt32BE(e), r.readUInt32BE(e + 4))
                }
                encode(t, e, r = 0) {
                    let n = y(t),
                        i = o(e);
                    return i.writeInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            e.NearInt64BE = b;
            class E extends s {
                constructor(t) {
                    super(4, t)
                }
                decode(t, e = 0) {
                    return o(t).readFloatLE(e)
                }
                encode(t, e, r = 0) {
                    return o(e).writeFloatLE(t, r), 4
                }
            }
            e.Float = E;
            class x extends s {
                constructor(t) {
                    super(4, t)
                }
                decode(t, e = 0) {
                    return o(t).readFloatBE(e)
                }
                encode(t, e, r = 0) {
                    return o(e).writeFloatBE(t, r), 4
                }
            }
            e.FloatBE = x;
            class M extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    return o(t).readDoubleLE(e)
                }
                encode(t, e, r = 0) {
                    return o(e).writeDoubleLE(t, r), 8
                }
            }
            e.Double = M;
            class B extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    return o(t).readDoubleBE(e)
                }
                encode(t, e, r = 0) {
                    return o(e).writeDoubleBE(t, r), 8
                }
            }
            e.DoubleBE = B;
            class _ extends s {
                constructor(t, e, r) {
                    if (!(t instanceof s)) throw TypeError("elementLayout must be a Layout");
                    if (!(e instanceof a && e.isCount() || Number.isInteger(e) && 0 <= e)) throw TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                    let n = -1;
                    e instanceof a || !(0 < t.span) || (n = e * t.span), super(n, r), this.elementLayout = t, this.count = e
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0,
                        n = this.count;
                    if (n instanceof a && (n = n.decode(t, e)), 0 < this.elementLayout.span) r = n * this.elementLayout.span;
                    else {
                        let i = 0;
                        for (; i < n;) r += this.elementLayout.getSpan(t, e + r), ++i
                    }
                    return r
                }
                decode(t, e = 0) {
                    let r = [],
                        n = 0,
                        i = this.count;
                    for (i instanceof a && (i = i.decode(t, e)); n < i;) r.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), n += 1;
                    return r
                }
                encode(t, e, r = 0) {
                    let n = this.elementLayout,
                        i = t.reduce((t, i) => t + n.encode(i, e, r + t), 0);
                    return this.count instanceof a && this.count.encode(t.length, e, r), i
                }
            }
            e.Sequence = _;
            class A extends s {
                constructor(t, e, r) {
                    if (!(Array.isArray(t) && t.reduce((t, e) => t && e instanceof s, !0))) throw TypeError("fields must be array of Layout instances");
                    for (let n of ("boolean" == typeof e && void 0 === r && (r = e, e = void 0), t))
                        if (0 > n.span && void 0 === n.property) throw Error("fields cannot contain unnamed variable-length layout");
                    let n = -1;
                    try {
                        n = t.reduce((t, e) => t + e.getSpan(), 0)
                    } catch (t) {}
                    super(n, e), this.fields = t, this.decodePrefixes = !!r
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
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
                decode(t, e = 0) {
                    i(t);
                    let r = this.makeDestinationObject();
                    for (let n of this.fields)
                        if (void 0 !== n.property && (r[n.property] = n.decode(t, e)), e += n.getSpan(t, e), this.decodePrefixes && t.length === e) break;
                    return r
                }
                encode(t, e, r = 0) {
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
            e.Structure = A;
            class I {
                constructor(t) {
                    this.property = t
                }
                decode(t, e) {
                    throw Error("UnionDiscriminator is abstract")
                }
                encode(t, e, r) {
                    throw Error("UnionDiscriminator is abstract")
                }
            }
            e.UnionDiscriminator = I;
            class S extends I {
                constructor(t, e) {
                    if (!(t instanceof a && t.isCount())) throw TypeError("layout must be an unsigned integer ExternalLayout");
                    super(e || t.property || "variant"), this.layout = t
                }
                decode(t, e) {
                    return this.layout.decode(t, e)
                }
                encode(t, e, r) {
                    return this.layout.encode(t, e, r)
                }
            }
            e.UnionLayoutDiscriminator = S;
            class O extends s {
                constructor(t, e, r) {
                    let n;
                    if (t instanceof l || t instanceof c) n = new S(new h(t));
                    else if (t instanceof a && t.isCount()) n = new S(t);
                    else if (t instanceof I) n = t;
                    else throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                    if (void 0 === e && (e = null), !(null === e || e instanceof s)) throw TypeError("defaultLayout must be null or a Layout");
                    if (null !== e) {
                        if (0 > e.span) throw Error("defaultLayout must have constant span");
                        void 0 === e.property && (e = e.replicate("content"))
                    }
                    let i = -1;
                    e && 0 <= (i = e.span) && (t instanceof l || t instanceof c) && (i += n.layout.span), super(i, r), this.discriminator = n, this.usesPrefixDiscriminator = t instanceof l || t instanceof c, this.defaultLayout = e, this.registry = {};
                    let o = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(t) {
                        return o(t)
                    }, this.configGetSourceVariant = function(t) {
                        o = t.bind(this)
                    }
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = this.getVariant(t, e);
                    if (!r) throw Error("unable to determine span for unrecognized variant");
                    return r.getSpan(t, e)
                }
                defaultGetSourceVariant(t) {
                    if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
                        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property)) return;
                        let e = this.registry[t[this.discriminator.property]];
                        if (e && (!e.layout || e.property && Object.prototype.hasOwnProperty.call(t, e.property))) return e
                    } else
                        for (let e in this.registry) {
                            let r = this.registry[e];
                            if (r.property && Object.prototype.hasOwnProperty.call(t, r.property)) return r
                        }
                    throw Error("unable to infer src variant")
                }
                decode(t, e = 0) {
                    let r;
                    let n = this.discriminator,
                        i = n.decode(t, e),
                        o = this.registry[i];
                    if (void 0 === o) {
                        let o = this.defaultLayout,
                            s = 0;
                        this.usesPrefixDiscriminator && (s = n.layout.span), (r = this.makeDestinationObject())[n.property] = i, r[o.property] = o.decode(t, e + s)
                    } else r = o.decode(t, e);
                    return r
                }
                encode(t, e, r = 0) {
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
                    let n = new L(this, t, e, r);
                    return this.registry[t] = n, n
                }
                getVariant(t, e = 0) {
                    let r;
                    return r = t instanceof Uint8Array ? this.discriminator.decode(t, e) : t, this.registry[r]
                }
            }
            e.Union = O;
            class L extends s {
                constructor(t, e, r, n) {
                    if (!(t instanceof O)) throw TypeError("union must be a Union");
                    if (!Number.isInteger(e) || 0 > e) throw TypeError("variant must be a (non-negative) integer");
                    if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                        if (!(r instanceof s)) throw TypeError("layout must be a Layout");
                        if (null !== t.defaultLayout && 0 <= r.span && r.span > t.defaultLayout.span) throw Error("variant span exceeds span of containing union");
                        if ("string" != typeof n) throw TypeError("variant must have a String property")
                    }
                    let i = t.span;
                    0 > t.span && 0 <= (i = r ? r.span : 0) && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span), super(i, n), this.union = t, this.variant = e, this.layout = r || null
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0;
                    this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
                    let n = 0;
                    return this.layout && (n = this.layout.getSpan(t, e + r)), r + n
                }
                decode(t, e = 0) {
                    let r = this.makeDestinationObject();
                    if (this !== this.union.getVariant(t, e)) throw Error("variant mismatch");
                    let n = 0;
                    return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(t, e + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
                }
                encode(t, e, r = 0) {
                    let n = 0;
                    if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(t, this.property)) throw TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, e, r);
                    let i = n;
                    if (this.layout && (this.layout.encode(t[this.property], e, r + n), i += this.layout.getSpan(e, r + n), 0 <= this.union.span && i > this.union.span)) throw Error("encoded variant overruns containing union");
                    return i
                }
                fromArray(t) {
                    if (this.layout) return this.layout.fromArray(t)
                }
            }

            function U(t) {
                return 0 > t && (t += 4294967296), t
            }
            e.VariantLayout = L;
            class k extends s {
                constructor(t, e, r) {
                    if (!(t instanceof l || t instanceof c)) throw TypeError("word must be a UInt or UIntBE layout");
                    if ("string" == typeof e && void 0 === r && (r = e, e = !1), 4 < t.span) throw RangeError("word cannot exceed 32 bits");
                    super(t.span, r), this.word = t, this.msb = !!e, this.fields = [];
                    let n = 0;
                    this._packedSetValue = function(t) {
                        return n = U(t), this
                    }, this._packedGetValue = function() {
                        return n
                    }
                }
                decode(t, e = 0) {
                    let r = this.makeDestinationObject(),
                        n = this.word.decode(t, e);
                    for (let e of (this._packedSetValue(n), this.fields)) void 0 !== e.property && (r[e.property] = e.decode(t));
                    return r
                }
                encode(t, e, r = 0) {
                    let n = this.word.decode(e, r);
                    for (let e of (this._packedSetValue(n), this.fields))
                        if (void 0 !== e.property) {
                            let r = t[e.property];
                            void 0 !== r && e.encode(r)
                        } return this.word.encode(this._packedGetValue(), e, r)
                }
                addField(t, e) {
                    let r = new R(this, t, e);
                    return this.fields.push(r), r
                }
                addBoolean(t) {
                    let e = new T(this, t);
                    return this.fields.push(e), e
                }
                fieldFor(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    for (let e of this.fields)
                        if (e.property === t) return e
                }
            }
            e.BitStructure = k;
            class R {
                constructor(t, e, r) {
                    if (!(t instanceof k)) throw TypeError("container must be a BitStructure");
                    if (!Number.isInteger(e) || 0 >= e) throw TypeError("bits must be positive integer");
                    let n = 8 * t.span,
                        i = t.fields.reduce((t, e) => t + e.bits, 0);
                    if (e + i > n) throw Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                    this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, 32 === e && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = n - i - e), this.wordMask = U(this.valueMask << this.start), this.property = r
                }
                decode(t, e) {
                    return U(this.container._packedGetValue() & this.wordMask) >>> this.start
                }
                encode(t) {
                    if ("number" != typeof t || !Number.isInteger(t) || t !== U(t & this.valueMask)) throw TypeError(u("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                    let e = this.container._packedGetValue(),
                        r = U(t << this.start);
                    this.container._packedSetValue(U(e & ~this.wordMask) | r)
                }
            }
            e.BitField = R;
            class T extends R {
                constructor(t, e) {
                    super(t, 1, e)
                }
                decode(t, e) {
                    return !!super.decode(t, e)
                }
                encode(t) {
                    "boolean" == typeof t && (t = +t), super.encode(t)
                }
            }
            e.Boolean = T;
            class P extends s {
                constructor(t, e) {
                    if (!(t instanceof a && t.isCount() || Number.isInteger(t) && 0 <= t)) throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let r = -1;
                    t instanceof a || (r = t), super(r, e), this.length = t
                }
                getSpan(t, e) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), r
                }
                decode(t, e = 0) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), o(t).slice(e, e + r)
                }
                encode(t, e, r) {
                    let n = this.length;
                    if (this.length instanceof a && (n = t.length), !(t instanceof Uint8Array && n === t.length)) throw TypeError(u("Blob.encode", this) + " requires (length " + n + ") Uint8Array as src");
                    if (r + n > e.length) throw RangeError("encoding overruns Uint8Array");
                    let i = o(t);
                    return o(e).write(i.toString("hex"), r, n, "hex"), this.length instanceof a && this.length.encode(n, e, r), n
                }
            }
            e.Blob = P;
            class N extends s {
                constructor(t) {
                    super(-1, t)
                }
                getSpan(t, e = 0) {
                    i(t);
                    let r = e;
                    for (; r < t.length && 0 !== t[r];) r += 1;
                    return 1 + r - e
                }
                decode(t, e = 0) {
                    let r = this.getSpan(t, e);
                    return o(t).slice(e, e + r - 1).toString("utf-8")
                }
                encode(t, e, r = 0) {
                    "string" != typeof t && (t = String(t));
                    let i = n.Buffer.from(t, "utf8"),
                        s = i.length;
                    if (r + s > e.length) throw RangeError("encoding overruns Buffer");
                    let u = o(e);
                    return i.copy(u, r), u[r + s] = 0, s + 1
                }
            }
            e.CString = N;
            class j extends s {
                constructor(t, e) {
                    if ("string" == typeof t && void 0 === e && (e = t, t = void 0), void 0 === t) t = -1;
                    else if (!Number.isInteger(t)) throw TypeError("maxSpan must be an integer");
                    super(-1, e), this.maxSpan = t
                }
                getSpan(t, e = 0) {
                    return i(t), t.length - e
                }
                decode(t, e = 0) {
                    let r = this.getSpan(t, e);
                    if (0 <= this.maxSpan && this.maxSpan < r) throw RangeError("text length exceeds maxSpan");
                    return o(t).slice(e, e + r).toString("utf-8")
                }
                encode(t, e, r = 0) {
                    "string" != typeof t && (t = String(t));
                    let i = n.Buffer.from(t, "utf8"),
                        s = i.length;
                    if (0 <= this.maxSpan && this.maxSpan < s) throw RangeError("text length exceeds maxSpan");
                    if (r + s > e.length) throw RangeError("encoding overruns Buffer");
                    return i.copy(o(e), r), s
                }
            }
            e.UTF8 = j;
            class C extends s {
                constructor(t, e) {
                    super(0, e), this.value = t
                }
                decode(t, e) {
                    return this.value
                }
                encode(t, e, r) {
                    return 0
                }
            }
            e.Constant = C, e.greedy = (t, e) => new f(t, e), e.offset = (t, e, r) => new h(t, e, r), e.u8 = t => new l(1, t), e.u16 = t => new l(2, t), e.u24 = t => new l(3, t), e.u32 = t => new l(4, t), e.u40 = t => new l(5, t), e.u48 = t => new l(6, t), e.nu64 = t => new g(t), e.u16be = t => new c(2, t), e.u24be = t => new c(3, t), e.u32be = t => new c(4, t), e.u40be = t => new c(5, t), e.u48be = t => new c(6, t), e.nu64be = t => new w(t), e.s8 = t => new d(1, t), e.s16 = t => new d(2, t), e.s24 = t => new d(3, t), e.s32 = t => new d(4, t), e.s40 = t => new d(5, t), e.s48 = t => new d(6, t), e.ns64 = t => new v(t), e.s16be = t => new p(2, t), e.s24be = t => new p(3, t), e.s32be = t => new p(4, t), e.s40be = t => new p(5, t), e.s48be = t => new p(6, t), e.ns64be = t => new b(t), e.f32 = t => new E(t), e.f32be = t => new x(t), e.f64 = t => new M(t), e.f64be = t => new B(t), e.struct = (t, e, r) => new A(t, e, r), e.bits = (t, e, r) => new k(t, e, r), e.seq = (t, e, r) => new _(t, e, r), e.union = (t, e, r) => new O(t, e, r), e.unionLayoutDiscriminator = (t, e) => new S(t, e), e.blob = (t, e) => new P(t, e), e.cstr = t => new N(t), e.utf8 = (t, e) => new j(t, e), e.constant = (t, e) => new C(t, e)
        },
        81542: function(t, e, r) {
            "use strict";
            var n = r(92336).Buffer;
            t.exports = function(t) {
                if (t.length >= 255) throw TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
                for (var i = 0; i < t.length; i++) {
                    var o = t.charAt(i),
                        s = o.charCodeAt(0);
                    if (255 !== e[s]) throw TypeError(o + " is ambiguous");
                    e[s] = i
                }
                var u = t.length,
                    a = t.charAt(0),
                    f = Math.log(u) / Math.log(256),
                    h = Math.log(256) / Math.log(u);

                function l(t) {
                    if ("string" != typeof t) throw TypeError("Expected String");
                    if (0 === t.length) return n.alloc(0);
                    for (var r = 0, i = 0, o = 0; t[r] === a;) i++, r++;
                    for (var s = (t.length - r) * f + 1 >>> 0, h = new Uint8Array(s); t[r];) {
                        var l = e[t.charCodeAt(r)];
                        if (255 === l) return;
                        for (var c = 0, d = s - 1;
                            (0 !== l || c < o) && -1 !== d; d--, c++) l += u * h[d] >>> 0, h[d] = l % 256 >>> 0, l = l / 256 >>> 0;
                        if (0 !== l) throw Error("Non-zero carry");
                        o = c, r++
                    }
                    for (var p = s - o; p !== s && 0 === h[p];) p++;
                    var y = n.allocUnsafe(i + (s - p));
                    y.fill(0, 0, i);
                    for (var m = i; p !== s;) y[m++] = h[p++];
                    return y
                }
                return {
                    encode: function(e) {
                        if ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)), !n.isBuffer(e)) throw TypeError("Expected Buffer");
                        if (0 === e.length) return "";
                        for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o];) o++, r++;
                        for (var f = (s - o) * h + 1 >>> 0, l = new Uint8Array(f); o !== s;) {
                            for (var c = e[o], d = 0, p = f - 1;
                                (0 !== c || d < i) && -1 !== p; p--, d++) c += 256 * l[p] >>> 0, l[p] = c % u >>> 0, c = c / u >>> 0;
                            if (0 !== c) throw Error("Non-zero carry");
                            i = d, o++
                        }
                        for (var y = f - i; y !== f && 0 === l[y];) y++;
                        for (var m = a.repeat(r); y < f; ++y) m += t.charAt(l[y]);
                        return m
                    },
                    decodeUnsafe: l,
                    decode: function(t) {
                        var e = l(t);
                        if (e) return e;
                        throw Error("Non-base" + u + " character")
                    }
                }
            }
        },
        34699: function(t, e) {
            "use strict";
            e.byteLength = function(t) {
                var e = a(t),
                    r = e[0],
                    n = e[1];
                return (r + n) * 3 / 4 - n
            }, e.toByteArray = function(t) {
                var e, r, o = a(t),
                    s = o[0],
                    u = o[1],
                    f = new i((s + u) * 3 / 4 - u),
                    h = 0,
                    l = u > 0 ? s - 4 : s;
                for (r = 0; r < l; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], f[h++] = e >> 16 & 255, f[h++] = e >> 8 & 255, f[h++] = 255 & e;
                return 2 === u && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, f[h++] = 255 & e), 1 === u && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, f[h++] = e >> 8 & 255, f[h++] = 255 & e), f
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, i = n % 3, o = [], s = 0, u = n - i; s < u; s += 16383) o.push(function(t, e, n) {
                    for (var i, o = [], s = e; s < n; s += 3) o.push(r[(i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                    return o.join("")
                }(t, s, s + 16383 > u ? u : s + 16383));
                return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
            };
            for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = o.length; s < u; ++s) r[s] = o[s], n[o.charCodeAt(s)] = s;

            function a(t) {
                var e = t.length;
                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("="); - 1 === r && (r = e);
                var n = r === e ? 0 : 4 - r % 4;
                return [r, n]
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        40265: function(t, e, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.toBigIntLE = function(t) {
                {
                    let e = n.from(t);
                    e.reverse();
                    let r = e.toString("hex");
                    return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`)
                }
            }, e.toBigIntBE = function(t) {
                {
                    let e = t.toString("hex");
                    return 0 === e.length ? BigInt(0) : BigInt(`0x${e}`)
                }
            }, e.toBufferLE = function(t, e) {
                {
                    let r = t.toString(16),
                        i = n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex");
                    return i.reverse(), i
                }
            }, e.toBufferBE = function(t, e) {
                {
                    let r = t.toString(16);
                    return n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex")
                }
            }
        },
        56662: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(46601).Buffer
                } catch (t) {}

                function s(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
                }

                function u(t, e, r) {
                    var n = s(t, r);
                    return r - 1 >= e && (n |= s(t, r - 1) << 4), n
                }

                function a(t, e, r, i) {
                    for (var o = 0, s = 0, u = Math.min(t.length, r), a = e; a < u; a++) {
                        var f = t.charCodeAt(a) - 48;
                        o *= i, s = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f, n(f >= 0 && s < i, "Invalid character"), o += s
                    }
                    return o
                }

                function f(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, o.prototype._init = function(t, e, r) {
                        if ("number" == typeof t) return this._initNumber(t, e, r);
                        if ("object" == typeof t) return this._initArray(t, e, r);
                        "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                        var i = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, o.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, o.prototype._initArray = function(t, e, r) {
                        if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
                        var u = 0;
                        if ("be" === r)
                            for (s = t.length - 1, i = 0; s >= 0; s -= 3) o = t[s] | t[s - 1] << 8 | t[s - 2] << 16, this.words[i] |= o << u & 67108863, this.words[i + 1] = o >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, i++);
                        else if ("le" === r)
                            for (s = 0, i = 0; s < t.length; s += 3) o = t[s] | t[s + 1] << 8 | t[s + 2] << 16, this.words[i] |= o << u & 67108863, this.words[i + 1] = o >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, i++);
                        return this._strip()
                    }, o.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
                        var o = 0,
                            s = 0;
                        if ("be" === r)
                            for (i = t.length - 1; i >= e; i -= 2) n = u(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = u(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        this._strip()
                    }, o.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                        n--, i = i / e | 0;
                        for (var o = t.length - r, s = o % n, u = Math.min(o, o - s) + r, f = 0, h = r; h < u; h += n) f = a(t, h, h + n, e), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                        if (0 !== s) {
                            var l = 1;
                            for (f = a(t, h, t.length, e), h = 0; h < s; h++) l *= e;
                            this.imuln(l), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                        }
                        this._strip()
                    }, o.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype._move = function(t) {
                        f(t, this)
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
                } catch (t) {
                    o.prototype.inspect = h
                } else o.prototype.inspect = h;

                function h() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var l, c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function y(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = i * o,
                        u = 67108863 & s,
                        a = s / 67108864 | 0;
                    r.words[0] = u;
                    for (var f = 1; f < n; f++) {
                        for (var h = a >>> 26, l = 67108863 & a, c = Math.min(f, e.length - 1), d = Math.max(0, f - t.length + 1); d <= c; d++) {
                            var p = f - d | 0;
                            h += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) / 67108864 | 0, l = 67108863 & s
                        }
                        r.words[f] = 0 | l, a = 0 | h
                    }
                    return 0 !== a ? r.words[f] = 0 | a : r.length--, r._strip()
                }
                o.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
                            var u = this.words[s],
                                a = ((u << i | o) & 16777215).toString(16);
                            o = u >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, s--), r = 0 !== o || s !== this.length - 1 ? c[6 - a.length] + a + r : a + r
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var f = d[t],
                            h = p[t];
                        r = "";
                        var l = this.clone();
                        for (l.negative = 0; !l.isZero();) {
                            var y = l.modrn(h).toString(t);
                            r = (l = l.idivn(h)).isZero() ? y + r : c[f - y.length] + y + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, l && (o.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(l, t, e)
                }), o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, r) {
                    this._strip();
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                    var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s
                }, o.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = n; r < t.length;) t[r++] = 0
                }, o.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = n; r >= 0;) t[r--] = 0
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return (8191 & e) == 0 && (r += 13, e >>>= 13), (127 & e) == 0 && (r += 7, e >>>= 7), (15 & e) == 0 && (r += 4, e >>>= 4), (3 & e) == 0 && (r += 2, e >>>= 2), (1 & e) == 0 && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function(t) {
                    return n((this.negative | t.negative) == 0), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function(t) {
                    return n((this.negative | t.negative) == 0), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var e, r, n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function(t) {
                    return n((this.negative | t.negative) == 0), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    n("number" == typeof t && t >= 0);
                    var r = t / 26 | 0,
                        i = t % 26;
                    return this._expand(r + 1), e ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this._strip()
                }, o.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var e, r, n, i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, r, n = this.iadd(t);
                        return t.negative = 1, n._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (e = this, r = t) : (e = t, r = this);
                    for (var o = 0, s = 0; s < r.length; s++) o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
                    for (; 0 !== o && s < e.length; s++) o = (n = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
                    if (0 === o && s < e.length && e !== this)
                        for (; s < e.length; s++) this.words[s] = e.words[s];
                    return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var m = function(t, e, r) {
                    var n, i, o, s = t.words,
                        u = e.words,
                        a = r.words,
                        f = 0,
                        h = 0 | s[0],
                        l = 8191 & h,
                        c = h >>> 13,
                        d = 0 | s[1],
                        p = 8191 & d,
                        y = d >>> 13,
                        m = 0 | s[2],
                        g = 8191 & m,
                        w = m >>> 13,
                        v = 0 | s[3],
                        b = 8191 & v,
                        E = v >>> 13,
                        x = 0 | s[4],
                        M = 8191 & x,
                        B = x >>> 13,
                        _ = 0 | s[5],
                        A = 8191 & _,
                        I = _ >>> 13,
                        S = 0 | s[6],
                        O = 8191 & S,
                        L = S >>> 13,
                        U = 0 | s[7],
                        k = 8191 & U,
                        R = U >>> 13,
                        T = 0 | s[8],
                        P = 8191 & T,
                        N = T >>> 13,
                        j = 0 | s[9],
                        C = 8191 & j,
                        q = j >>> 13,
                        F = 0 | u[0],
                        Z = 8191 & F,
                        D = F >>> 13,
                        z = 0 | u[1],
                        $ = 8191 & z,
                        H = z >>> 13,
                        V = 0 | u[2],
                        G = 8191 & V,
                        K = V >>> 13,
                        Y = 0 | u[3],
                        Q = 8191 & Y,
                        W = Y >>> 13,
                        J = 0 | u[4],
                        X = 8191 & J,
                        tt = J >>> 13,
                        te = 0 | u[5],
                        tr = 8191 & te,
                        tn = te >>> 13,
                        ti = 0 | u[6],
                        to = 8191 & ti,
                        ts = ti >>> 13,
                        tu = 0 | u[7],
                        ta = 8191 & tu,
                        tf = tu >>> 13,
                        th = 0 | u[8],
                        tl = 8191 & th,
                        tc = th >>> 13,
                        td = 0 | u[9],
                        tp = 8191 & td,
                        ty = td >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var tm = (f + (n = Math.imul(l, Z)) | 0) + ((8191 & (i = (i = Math.imul(l, D)) + Math.imul(c, Z) | 0)) << 13) | 0;
                    f = ((o = Math.imul(c, D)) + (i >>> 13) | 0) + (tm >>> 26) | 0, tm &= 67108863, n = Math.imul(p, Z), i = (i = Math.imul(p, D)) + Math.imul(y, Z) | 0, o = Math.imul(y, D);
                    var tg = (f + (n = n + Math.imul(l, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, H) | 0) + Math.imul(c, $) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, H) | 0) + (i >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, n = Math.imul(g, Z), i = (i = Math.imul(g, D)) + Math.imul(w, Z) | 0, o = Math.imul(w, D), n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, H) | 0;
                    var tw = (f + (n = n + Math.imul(l, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, K) | 0) + Math.imul(c, G) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, K) | 0) + (i >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, n = Math.imul(b, Z), i = (i = Math.imul(b, D)) + Math.imul(E, Z) | 0, o = Math.imul(E, D), n = n + Math.imul(g, $) | 0, i = (i = i + Math.imul(g, H) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, H) | 0, n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, K) | 0;
                    var tv = (f + (n = n + Math.imul(l, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, W) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, W) | 0) + (i >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, n = Math.imul(M, Z), i = (i = Math.imul(M, D)) + Math.imul(B, Z) | 0, o = Math.imul(B, D), n = n + Math.imul(b, $) | 0, i = (i = i + Math.imul(b, H) | 0) + Math.imul(E, $) | 0, o = o + Math.imul(E, H) | 0, n = n + Math.imul(g, G) | 0, i = (i = i + Math.imul(g, K) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, K) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, W) | 0;
                    var tb = (f + (n = n + Math.imul(l, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tt) | 0) + Math.imul(c, X) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, tt) | 0) + (i >>> 13) | 0) + (tb >>> 26) | 0, tb &= 67108863, n = Math.imul(A, Z), i = (i = Math.imul(A, D)) + Math.imul(I, Z) | 0, o = Math.imul(I, D), n = n + Math.imul(M, $) | 0, i = (i = i + Math.imul(M, H) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, H) | 0, n = n + Math.imul(b, G) | 0, i = (i = i + Math.imul(b, K) | 0) + Math.imul(E, G) | 0, o = o + Math.imul(E, K) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, W) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, W) | 0, n = n + Math.imul(p, X) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(y, X) | 0, o = o + Math.imul(y, tt) | 0;
                    var tE = (f + (n = n + Math.imul(l, tr) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tn) | 0) + Math.imul(c, tr) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, tn) | 0) + (i >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, n = Math.imul(O, Z), i = (i = Math.imul(O, D)) + Math.imul(L, Z) | 0, o = Math.imul(L, D), n = n + Math.imul(A, $) | 0, i = (i = i + Math.imul(A, H) | 0) + Math.imul(I, $) | 0, o = o + Math.imul(I, H) | 0, n = n + Math.imul(M, G) | 0, i = (i = i + Math.imul(M, K) | 0) + Math.imul(B, G) | 0, o = o + Math.imul(B, K) | 0, n = n + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, W) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, W) | 0, n = n + Math.imul(g, X) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(w, X) | 0, o = o + Math.imul(w, tt) | 0, n = n + Math.imul(p, tr) | 0, i = (i = i + Math.imul(p, tn) | 0) + Math.imul(y, tr) | 0, o = o + Math.imul(y, tn) | 0;
                    var tx = (f + (n = n + Math.imul(l, to) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ts) | 0) + Math.imul(c, to) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, ts) | 0) + (i >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, n = Math.imul(k, Z), i = (i = Math.imul(k, D)) + Math.imul(R, Z) | 0, o = Math.imul(R, D), n = n + Math.imul(O, $) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, H) | 0, n = n + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, K) | 0) + Math.imul(I, G) | 0, o = o + Math.imul(I, K) | 0, n = n + Math.imul(M, Q) | 0, i = (i = i + Math.imul(M, W) | 0) + Math.imul(B, Q) | 0, o = o + Math.imul(B, W) | 0, n = n + Math.imul(b, X) | 0, i = (i = i + Math.imul(b, tt) | 0) + Math.imul(E, X) | 0, o = o + Math.imul(E, tt) | 0, n = n + Math.imul(g, tr) | 0, i = (i = i + Math.imul(g, tn) | 0) + Math.imul(w, tr) | 0, o = o + Math.imul(w, tn) | 0, n = n + Math.imul(p, to) | 0, i = (i = i + Math.imul(p, ts) | 0) + Math.imul(y, to) | 0, o = o + Math.imul(y, ts) | 0;
                    var tM = (f + (n = n + Math.imul(l, ta) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tf) | 0) + Math.imul(c, ta) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, tf) | 0) + (i >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, n = Math.imul(P, Z), i = (i = Math.imul(P, D)) + Math.imul(N, Z) | 0, o = Math.imul(N, D), n = n + Math.imul(k, $) | 0, i = (i = i + Math.imul(k, H) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, H) | 0, n = n + Math.imul(O, G) | 0, i = (i = i + Math.imul(O, K) | 0) + Math.imul(L, G) | 0, o = o + Math.imul(L, K) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, W) | 0, n = n + Math.imul(M, X) | 0, i = (i = i + Math.imul(M, tt) | 0) + Math.imul(B, X) | 0, o = o + Math.imul(B, tt) | 0, n = n + Math.imul(b, tr) | 0, i = (i = i + Math.imul(b, tn) | 0) + Math.imul(E, tr) | 0, o = o + Math.imul(E, tn) | 0, n = n + Math.imul(g, to) | 0, i = (i = i + Math.imul(g, ts) | 0) + Math.imul(w, to) | 0, o = o + Math.imul(w, ts) | 0, n = n + Math.imul(p, ta) | 0, i = (i = i + Math.imul(p, tf) | 0) + Math.imul(y, ta) | 0, o = o + Math.imul(y, tf) | 0;
                    var tB = (f + (n = n + Math.imul(l, tl) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tc) | 0) + Math.imul(c, tl) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, tc) | 0) + (i >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, n = Math.imul(C, Z), i = (i = Math.imul(C, D)) + Math.imul(q, Z) | 0, o = Math.imul(q, D), n = n + Math.imul(P, $) | 0, i = (i = i + Math.imul(P, H) | 0) + Math.imul(N, $) | 0, o = o + Math.imul(N, H) | 0, n = n + Math.imul(k, G) | 0, i = (i = i + Math.imul(k, K) | 0) + Math.imul(R, G) | 0, o = o + Math.imul(R, K) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, W) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, W) | 0, n = n + Math.imul(A, X) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(I, X) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(M, tr) | 0, i = (i = i + Math.imul(M, tn) | 0) + Math.imul(B, tr) | 0, o = o + Math.imul(B, tn) | 0, n = n + Math.imul(b, to) | 0, i = (i = i + Math.imul(b, ts) | 0) + Math.imul(E, to) | 0, o = o + Math.imul(E, ts) | 0, n = n + Math.imul(g, ta) | 0, i = (i = i + Math.imul(g, tf) | 0) + Math.imul(w, ta) | 0, o = o + Math.imul(w, tf) | 0, n = n + Math.imul(p, tl) | 0, i = (i = i + Math.imul(p, tc) | 0) + Math.imul(y, tl) | 0, o = o + Math.imul(y, tc) | 0;
                    var t_ = (f + (n = n + Math.imul(l, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ty) | 0) + Math.imul(c, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(c, ty) | 0) + (i >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, n = Math.imul(C, $), i = (i = Math.imul(C, H)) + Math.imul(q, $) | 0, o = Math.imul(q, H), n = n + Math.imul(P, G) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(N, G) | 0, o = o + Math.imul(N, K) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, W) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, W) | 0, n = n + Math.imul(O, X) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(L, X) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(A, tr) | 0, i = (i = i + Math.imul(A, tn) | 0) + Math.imul(I, tr) | 0, o = o + Math.imul(I, tn) | 0, n = n + Math.imul(M, to) | 0, i = (i = i + Math.imul(M, ts) | 0) + Math.imul(B, to) | 0, o = o + Math.imul(B, ts) | 0, n = n + Math.imul(b, ta) | 0, i = (i = i + Math.imul(b, tf) | 0) + Math.imul(E, ta) | 0, o = o + Math.imul(E, tf) | 0, n = n + Math.imul(g, tl) | 0, i = (i = i + Math.imul(g, tc) | 0) + Math.imul(w, tl) | 0, o = o + Math.imul(w, tc) | 0;
                    var tA = (f + (n = n + Math.imul(p, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, ty) | 0) + Math.imul(y, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(y, ty) | 0) + (i >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, n = Math.imul(C, G), i = (i = Math.imul(C, K)) + Math.imul(q, G) | 0, o = Math.imul(q, K), n = n + Math.imul(P, Q) | 0, i = (i = i + Math.imul(P, W) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, W) | 0, n = n + Math.imul(k, X) | 0, i = (i = i + Math.imul(k, tt) | 0) + Math.imul(R, X) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(O, tr) | 0, i = (i = i + Math.imul(O, tn) | 0) + Math.imul(L, tr) | 0, o = o + Math.imul(L, tn) | 0, n = n + Math.imul(A, to) | 0, i = (i = i + Math.imul(A, ts) | 0) + Math.imul(I, to) | 0, o = o + Math.imul(I, ts) | 0, n = n + Math.imul(M, ta) | 0, i = (i = i + Math.imul(M, tf) | 0) + Math.imul(B, ta) | 0, o = o + Math.imul(B, tf) | 0, n = n + Math.imul(b, tl) | 0, i = (i = i + Math.imul(b, tc) | 0) + Math.imul(E, tl) | 0, o = o + Math.imul(E, tc) | 0;
                    var tI = (f + (n = n + Math.imul(g, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, ty) | 0) + Math.imul(w, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(w, ty) | 0) + (i >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, n = Math.imul(C, Q), i = (i = Math.imul(C, W)) + Math.imul(q, Q) | 0, o = Math.imul(q, W), n = n + Math.imul(P, X) | 0, i = (i = i + Math.imul(P, tt) | 0) + Math.imul(N, X) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(k, tr) | 0, i = (i = i + Math.imul(k, tn) | 0) + Math.imul(R, tr) | 0, o = o + Math.imul(R, tn) | 0, n = n + Math.imul(O, to) | 0, i = (i = i + Math.imul(O, ts) | 0) + Math.imul(L, to) | 0, o = o + Math.imul(L, ts) | 0, n = n + Math.imul(A, ta) | 0, i = (i = i + Math.imul(A, tf) | 0) + Math.imul(I, ta) | 0, o = o + Math.imul(I, tf) | 0, n = n + Math.imul(M, tl) | 0, i = (i = i + Math.imul(M, tc) | 0) + Math.imul(B, tl) | 0, o = o + Math.imul(B, tc) | 0;
                    var tS = (f + (n = n + Math.imul(b, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, ty) | 0) + Math.imul(E, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(E, ty) | 0) + (i >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, n = Math.imul(C, X), i = (i = Math.imul(C, tt)) + Math.imul(q, X) | 0, o = Math.imul(q, tt), n = n + Math.imul(P, tr) | 0, i = (i = i + Math.imul(P, tn) | 0) + Math.imul(N, tr) | 0, o = o + Math.imul(N, tn) | 0, n = n + Math.imul(k, to) | 0, i = (i = i + Math.imul(k, ts) | 0) + Math.imul(R, to) | 0, o = o + Math.imul(R, ts) | 0, n = n + Math.imul(O, ta) | 0, i = (i = i + Math.imul(O, tf) | 0) + Math.imul(L, ta) | 0, o = o + Math.imul(L, tf) | 0, n = n + Math.imul(A, tl) | 0, i = (i = i + Math.imul(A, tc) | 0) + Math.imul(I, tl) | 0, o = o + Math.imul(I, tc) | 0;
                    var tO = (f + (n = n + Math.imul(M, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, ty) | 0) + Math.imul(B, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(B, ty) | 0) + (i >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, n = Math.imul(C, tr), i = (i = Math.imul(C, tn)) + Math.imul(q, tr) | 0, o = Math.imul(q, tn), n = n + Math.imul(P, to) | 0, i = (i = i + Math.imul(P, ts) | 0) + Math.imul(N, to) | 0, o = o + Math.imul(N, ts) | 0, n = n + Math.imul(k, ta) | 0, i = (i = i + Math.imul(k, tf) | 0) + Math.imul(R, ta) | 0, o = o + Math.imul(R, tf) | 0, n = n + Math.imul(O, tl) | 0, i = (i = i + Math.imul(O, tc) | 0) + Math.imul(L, tl) | 0, o = o + Math.imul(L, tc) | 0;
                    var tL = (f + (n = n + Math.imul(A, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, ty) | 0) + Math.imul(I, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(I, ty) | 0) + (i >>> 13) | 0) + (tL >>> 26) | 0, tL &= 67108863, n = Math.imul(C, to), i = (i = Math.imul(C, ts)) + Math.imul(q, to) | 0, o = Math.imul(q, ts), n = n + Math.imul(P, ta) | 0, i = (i = i + Math.imul(P, tf) | 0) + Math.imul(N, ta) | 0, o = o + Math.imul(N, tf) | 0, n = n + Math.imul(k, tl) | 0, i = (i = i + Math.imul(k, tc) | 0) + Math.imul(R, tl) | 0, o = o + Math.imul(R, tc) | 0;
                    var tU = (f + (n = n + Math.imul(O, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, ty) | 0) + Math.imul(L, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(L, ty) | 0) + (i >>> 13) | 0) + (tU >>> 26) | 0, tU &= 67108863, n = Math.imul(C, ta), i = (i = Math.imul(C, tf)) + Math.imul(q, ta) | 0, o = Math.imul(q, tf), n = n + Math.imul(P, tl) | 0, i = (i = i + Math.imul(P, tc) | 0) + Math.imul(N, tl) | 0, o = o + Math.imul(N, tc) | 0;
                    var tk = (f + (n = n + Math.imul(k, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, ty) | 0) + Math.imul(R, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(R, ty) | 0) + (i >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, n = Math.imul(C, tl), i = (i = Math.imul(C, tc)) + Math.imul(q, tl) | 0, o = Math.imul(q, tc);
                    var tR = (f + (n = n + Math.imul(P, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, ty) | 0) + Math.imul(N, tp) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(N, ty) | 0) + (i >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863;
                    var tT = (f + (n = Math.imul(C, tp)) | 0) + ((8191 & (i = (i = Math.imul(C, ty)) + Math.imul(q, tp) | 0)) << 13) | 0;
                    return f = ((o = Math.imul(q, ty)) + (i >>> 13) | 0) + (tT >>> 26) | 0, tT &= 67108863, a[0] = tm, a[1] = tg, a[2] = tw, a[3] = tv, a[4] = tb, a[5] = tE, a[6] = tx, a[7] = tM, a[8] = tB, a[9] = t_, a[10] = tA, a[11] = tI, a[12] = tS, a[13] = tO, a[14] = tL, a[15] = tU, a[16] = tk, a[17] = tR, a[18] = tT, 0 !== f && (a[19] = f, r.length++), r
                };

                function g(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                        var s = i;
                        i = 0;
                        for (var u = 67108863 & n, a = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= a; f++) {
                            var h = o - f,
                                l = (0 | t.words[h]) * (0 | e.words[f]),
                                c = 67108863 & l;
                            s = s + (l / 67108864 | 0) | 0, u = 67108863 & (c = c + u | 0), i += (s = s + (c >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[o] = u, n = s, s = i
                    }
                    return 0 !== n ? r.words[o] = n : r.length--, r._strip()
                }

                function w(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (m = y), o.prototype.mulTo = function(t, e) {
                    var r, n = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? m(this, t, e) : n < 63 ? y(this, t, e) : g(this, t, e)
                }, w.prototype.makeRBT = function(t) {
                    for (var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, w.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, w.prototype.permute = function(t, e, r, n, i, o) {
                    for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                }, w.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var s = 1; s < i; s <<= 1)
                        for (var u = s << 1, a = Math.cos(2 * Math.PI / u), f = Math.sin(2 * Math.PI / u), h = 0; h < i; h += u)
                            for (var l = a, c = f, d = 0; d < s; d++) {
                                var p = r[h + d],
                                    y = n[h + d],
                                    m = r[h + d + s],
                                    g = n[h + d + s],
                                    w = l * m - c * g;
                                g = l * g + c * m, m = w, r[h + d] = p + m, n[h + d] = y + g, r[h + d + s] = p - m, n[h + d + s] = y - g, d !== u && (w = a * l - f * c, c = a * c + f * l, l = w)
                            }
                }, w.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, w.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, w.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, w.prototype.convert13b = function(t, e, r, i) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < i; ++s) r[s] = 0;
                    n(0 === o), n((-8192 & o) == 0)
                }, w.prototype.stub = function(t) {
                    for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, w.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        s = Array(n),
                        u = Array(n),
                        a = Array(n),
                        f = Array(n),
                        h = Array(n),
                        l = Array(n),
                        c = r.words;
                    c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, f, n), this.transform(s, o, u, a, n, i), this.transform(f, o, h, l, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = u[d] * h[d] - a[d] * l[d];
                        a[d] = u[d] * l[d] + a[d] * h[d], u[d] = p
                    }
                    return this.conjugate(u, a, n), this.transform(u, a, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), g(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), n("number" == typeof t), n(t < 67108864);
                    for (var r = 0, i = 0; i < this.length; i++) {
                        var o = (0 | this.words[i]) * t,
                            s = (67108863 & o) + (67108863 & r);
                        r >>= 26, r += (o / 67108864 | 0) + (s >>> 26), this.words[i] = 67108863 & s
                    }
                    return 0 !== r && (this.words[i] = r, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = t.words[n] >>> i & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e, r = t % 26,
                        i = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var u = this.words[e] & o,
                                a = (0 | this.words[e]) - u << r;
                            this.words[e] = a | s, s = u >>> 26 - r
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this._strip()
                }, o.prototype.ishln = function(t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    n("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var i, o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        u = 67108863 ^ 67108863 >>> o << o;
                    if (i -= s, i = Math.max(0, i), r) {
                        for (var a = 0; a < s; a++) r.words[a] = this.words[a];
                        r.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, a = 0; a < this.length; a++) this.words[a] = this.words[a + s];
                    else this.words[0] = 0, this.length = 1;
                    var f = 0;
                    for (a = this.length - 1; a >= 0 && (0 !== f || a >= i); a--) {
                        var h = 0 | this.words[a];
                        this.words[a] = f << 26 - o | h >>> o, f = h & u
                    }
                    return r && 0 !== f && (r.words[r.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << e)
                }, o.prototype.imaskn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return (n("number" == typeof t), n(t < 67108864), t < 0) ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var i, o, s = t.length + r;
                    this._expand(s);
                    var u = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + u;
                        var a = (0 | t.words[i]) * e;
                        o -= 67108863 & a, u = (o >> 26) - (a / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) u = (o = (0 | this.words[i + r]) + u) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === u) return this._strip();
                    for (n(-1 === u), u = 0, i = 0; i < this.length; i++) u = (o = -(0 | this.words[i]) + u) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r, n = this.length - t.length,
                        i = this.clone(),
                        s = t,
                        u = 0 | s.words[s.length - 1];
                    0 != (n = 26 - this._countBits(u)) && (s = s.ushln(n), i.iushln(n), u = 0 | s.words[s.length - 1]);
                    var a = i.length - s.length;
                    if ("mod" !== e) {
                        (r = new o(null)).length = a + 1, r.words = Array(r.length);
                        for (var f = 0; f < r.length; f++) r.words[f] = 0
                    }
                    var h = i.clone()._ishlnsubmul(s, 1, a);
                    0 === h.negative && (i = h, r && (r.words[a] = 1));
                    for (var l = a - 1; l >= 0; l--) {
                        var c = (0 | i.words[s.length + l]) * 67108864 + (0 | i.words[s.length + l - 1]);
                        for (c = Math.min(c / u | 0, 67108863), i._ishlnsubmul(s, c, l); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(s, 1, l), i.isZero() || (i.negative ^= 1);
                        r && (r.words[l] = c)
                    }
                    return r && r._strip(), i._strip(), "div" !== e && 0 !== n && i.iushrn(n), {
                        div: r || null,
                        mod: i
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    var i, s, u;
                    return (n(!t.isZero()), this.isZero()) ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, e), "mod" !== e && (i = u.div.neg()), "div" !== e && (s = u.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), e), "mod" !== e && (i = u.div.neg()), {
                        div: i,
                        mod: u.mod
                    }) : (this.negative & t.negative) != 0 ? (u = this.neg().divmod(t.neg(), e), "div" !== e && (s = u.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                        div: u.div,
                        mod: s
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), n(t <= 67108863);
                    for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % t;
                    return e ? -i : i
                }, o.prototype.modn = function(t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), n(t <= 67108863);
                    for (var r = 0, i = this.length - 1; i >= 0; i--) {
                        var o = (0 | this.words[i]) + 67108864 * r;
                        this.words[i] = o / t | 0, r = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), s = new o(0), u = new o(0), a = new o(1), f = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++f;
                    for (var h = r.clone(), l = e.clone(); !e.isZero();) {
                        for (var c = 0, d = 1;
                            (e.words[0] & d) == 0 && c < 26; ++c, d <<= 1);
                        if (c > 0)
                            for (e.iushrn(c); c-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(l)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, y = 1;
                            (r.words[0] & y) == 0 && p < 26; ++p, y <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(u.isOdd() || a.isOdd()) && (u.iadd(h), a.isub(l)), u.iushrn(1), a.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(u), s.isub(a)) : (r.isub(e), u.isub(i), a.isub(s))
                    }
                    return {
                        a: u,
                        b: a,
                        gcd: r.iushln(f)
                    }
                }, o.prototype._invmp = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e, r = this,
                        i = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (var s = new o(1), u = new o(0), a = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var f = 0, h = 1;
                            (r.words[0] & h) == 0 && f < 26; ++f, h <<= 1);
                        if (f > 0)
                            for (r.iushrn(f); f-- > 0;) s.isOdd() && s.iadd(a), s.iushrn(1);
                        for (var l = 0, c = 1;
                            (i.words[0] & c) == 0 && l < 26; ++l, c <<= 1);
                        if (l > 0)
                            for (i.iushrn(l); l-- > 0;) u.isOdd() && u.iadd(a), u.iushrn(1);
                        r.cmp(i) >= 0 ? (r.isub(i), s.isub(u)) : (i.isub(r), u.isub(s))
                    }
                    return 0 > (e = 0 === r.cmpn(1) ? s : u).cmpn(0) && e.iadd(t), e
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, o.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    n("number" == typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                        var u = 0 | this.words[s];
                        u += o, o = u >>> 26, u &= 67108863, this.words[s] = u
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, o.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new _(t)
                }, o.prototype.toRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var v = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function b(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function E() {
                    b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function x() {
                    b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function M() {
                    b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function B() {
                    b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function _(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function A(t) {
                    _.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                b.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, b.prototype.ireduce = function(t) {
                    var e, r = t;
                    do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, b.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, b.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(E, b), E.prototype.split = function(t, e) {
                    for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];
                    if (e.length = r, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var i = t.words[9];
                    for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
                        var o = 0 | t.words[n];
                        t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, t.words[n - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, E.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(x, b), i(M, b), i(B, b), B.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = (0 | t.words[r]) * 19 + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    var e;
                    if (v[t]) return v[t];
                    if ("k256" === t) e = new E;
                    else if ("p224" === t) e = new x;
                    else if ("p192" === t) e = new M;
                    else if ("p25519" === t) e = new B;
                    else throw Error("Unknown prime " + t);
                    return v[t] = e, e
                }, _.prototype._verify1 = function(t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, _.prototype._verify2 = function(t, e) {
                    n((t.negative | e.negative) == 0, "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, _.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t)
                }, _.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, _.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, _.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, _.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, _.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, _.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, _.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, _.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, _.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, _.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, _.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    n(!i.isZero());
                    var u = new o(1).toRed(this),
                        a = u.redNeg(),
                        f = this.m.subn(1).iushrn(1),
                        h = this.m.bitLength();
                    for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(a);) h.redIAdd(a);
                    for (var l = this.pow(h, i), c = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(u);) {
                        for (var y = d, m = 0; 0 !== y.cmp(u); m++) y = y.redSqr();
                        n(m < p);
                        var g = this.pow(l, new o(1).iushln(p - m - 1));
                        c = c.redMul(g), l = g.redSqr(), d = d.redMul(l), p = m
                    }
                    return c
                }, _.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, _.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        s = 0,
                        u = 0,
                        a = e.bitLength() % 26;
                    for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                        for (var f = e.words[n], h = a - 1; h >= 0; h--) {
                            var l = f >> h & 1;
                            if (i !== r[0] && (i = this.sqr(i)), 0 === l && 0 === s) {
                                u = 0;
                                continue
                            }
                            s <<= 1, s |= l, (4 == ++u || 0 === n && 0 === h) && (i = this.mul(i, r[s]), u = 0, s = 0)
                        }
                        a = 26
                    }
                    return i
                }, _.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, _.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new A(t)
                }, i(A, _), A.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, A.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, A.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, A.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : 0 > i.cmpn(0) && (s = i.iadd(this.m)), s._forceRed(this)
                }, A.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        84453: function(t, e, r) {
            "use strict";
            var n = r(67133).Buffer,
                i = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                s = this && this.__decorate || function(t, e, r, n) {
                    var i, o = arguments.length,
                        s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n);
                    else
                        for (var u = t.length - 1; u >= 0; u--)(i = t[u]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
                    return o > 3 && s && Object.defineProperty(e, r, s), s
                },
                u = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && i(e, t, r);
                    return o(e, t), e
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.deserializeUnchecked = e.deserialize = e.serialize = e.BinaryReader = e.BinaryWriter = e.BorshError = e.baseDecode = e.baseEncode = void 0;
            let f = a(r(56662)),
                h = a(r(68870)),
                l = u(r(80899)),
                c = new("function" != typeof TextDecoder ? l.TextDecoder : TextDecoder)("utf-8", {
                    fatal: !0
                });
            e.baseEncode = function(t) {
                return "string" == typeof t && (t = n.from(t, "utf8")), h.default.encode(n.from(t))
            }, e.baseDecode = function(t) {
                return n.from(h.default.decode(t))
            };
            class d extends Error {
                constructor(t) {
                    super(t), this.fieldPath = [], this.originalMessage = t
                }
                addToFieldPath(t) {
                    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
                }
            }
            e.BorshError = d;
            class p {
                constructor() {
                    this.buf = n.alloc(1024), this.length = 0
                }
                maybeResize() {
                    this.buf.length < 16 + this.length && (this.buf = n.concat([this.buf, n.alloc(1024)]))
                }
                writeU8(t) {
                    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1
                }
                writeU16(t) {
                    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2
                }
                writeU32(t) {
                    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4
                }
                writeU64(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new f.default(t).toArray("le", 8)))
                }
                writeU128(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new f.default(t).toArray("le", 16)))
                }
                writeU256(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new f.default(t).toArray("le", 32)))
                }
                writeU512(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new f.default(t).toArray("le", 64)))
                }
                writeBuffer(t) {
                    this.buf = n.concat([n.from(this.buf.subarray(0, this.length)), t, n.alloc(1024)]), this.length += t.length
                }
                writeString(t) {
                    this.maybeResize();
                    let e = n.from(t, "utf8");
                    this.writeU32(e.length), this.writeBuffer(e)
                }
                writeFixedArray(t) {
                    this.writeBuffer(n.from(t))
                }
                writeArray(t, e) {
                    for (let r of (this.maybeResize(), this.writeU32(t.length), t)) this.maybeResize(), e(r)
                }
                toArray() {
                    return this.buf.subarray(0, this.length)
                }
            }

            function y(t, e, r) {
                let n = r.value;
                r.value = function(...t) {
                    try {
                        return n.apply(this, t)
                    } catch (t) {
                        if (t instanceof RangeError && ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(t.code) >= 0) throw new d("Reached the end of buffer when deserializing");
                        throw t
                    }
                }
            }
            e.BinaryWriter = p;
            class m {
                constructor(t) {
                    this.buf = t, this.offset = 0
                }
                readU8() {
                    let t = this.buf.readUInt8(this.offset);
                    return this.offset += 1, t
                }
                readU16() {
                    let t = this.buf.readUInt16LE(this.offset);
                    return this.offset += 2, t
                }
                readU32() {
                    let t = this.buf.readUInt32LE(this.offset);
                    return this.offset += 4, t
                }
                readU64() {
                    let t = this.readBuffer(8);
                    return new f.default(t, "le")
                }
                readU128() {
                    let t = this.readBuffer(16);
                    return new f.default(t, "le")
                }
                readU256() {
                    let t = this.readBuffer(32);
                    return new f.default(t, "le")
                }
                readU512() {
                    let t = this.readBuffer(64);
                    return new f.default(t, "le")
                }
                readBuffer(t) {
                    if (this.offset + t > this.buf.length) throw new d(`Expected buffer length ${t} isn't within bounds`);
                    let e = this.buf.slice(this.offset, this.offset + t);
                    return this.offset += t, e
                }
                readString() {
                    let t = this.readU32(),
                        e = this.readBuffer(t);
                    try {
                        return c.decode(e)
                    } catch (t) {
                        throw new d(`Error decoding UTF-8 string: ${t}`)
                    }
                }
                readFixedArray(t) {
                    return new Uint8Array(this.readBuffer(t))
                }
                readArray(t) {
                    let e = this.readU32(),
                        r = [];
                    for (let n = 0; n < e; ++n) r.push(t());
                    return r
                }
            }

            function g(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function w(t, e, r, n, i) {
                try {
                    if ("string" == typeof n) i[`write${g(n)}`](r);
                    else if (n instanceof Array) {
                        if ("number" == typeof n[0]) {
                            if (r.length !== n[0]) throw new d(`Expecting byte array of length ${n[0]}, but got ${r.length} bytes`);
                            i.writeFixedArray(r)
                        } else if (2 === n.length && "number" == typeof n[1]) {
                            if (r.length !== n[1]) throw new d(`Expecting byte array of length ${n[1]}, but got ${r.length} bytes`);
                            for (let e = 0; e < n[1]; e++) w(t, null, r[e], n[0], i)
                        } else i.writeArray(r, r => {
                            w(t, e, r, n[0], i)
                        })
                    } else if (void 0 !== n.kind) switch (n.kind) {
                        case "option":
                            null == r ? i.writeU8(0) : (i.writeU8(1), w(t, e, r, n.type, i));
                            break;
                        case "map":
                            i.writeU32(r.size), r.forEach((r, o) => {
                                w(t, e, o, n.key, i), w(t, e, r, n.value, i)
                            });
                            break;
                        default:
                            throw new d(`FieldType ${n} unrecognized`)
                    } else v(t, r, i)
                } catch (t) {
                    throw t instanceof d && t.addToFieldPath(e), t
                }
            }

            function v(t, e, r) {
                if ("function" == typeof e.borshSerialize) {
                    e.borshSerialize(r);
                    return
                }
                let n = t.get(e.constructor);
                if (!n) throw new d(`Class ${e.constructor.name} is missing in schema`);
                if ("struct" === n.kind) n.fields.map(([n, i]) => {
                    w(t, n, e[n], i, r)
                });
                else if ("enum" === n.kind) {
                    let i = e[n.field];
                    for (let o = 0; o < n.values.length; ++o) {
                        let [s, u] = n.values[o];
                        if (s === i) {
                            r.writeU8(o), w(t, s, e[s], u, r);
                            break
                        }
                    }
                } else throw new d(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
            }

            function b(t, e, r, n) {
                try {
                    if ("string" == typeof r) return n[`read${g(r)}`]();
                    if (r instanceof Array) {
                        if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
                        if ("number" != typeof r[1]) return n.readArray(() => b(t, e, r[0], n));
                        {
                            let e = [];
                            for (let i = 0; i < r[1]; i++) e.push(b(t, null, r[0], n));
                            return e
                        }
                    }
                    if ("option" === r.kind) {
                        if (n.readU8()) return b(t, e, r.type, n);
                        return
                    }
                    if ("map" === r.kind) {
                        let i = new Map,
                            o = n.readU32();
                        for (let s = 0; s < o; s++) {
                            let o = b(t, e, r.key, n),
                                s = b(t, e, r.value, n);
                            i.set(o, s)
                        }
                        return i
                    }
                    return E(t, r, n)
                } catch (t) {
                    throw t instanceof d && t.addToFieldPath(e), t
                }
            }

            function E(t, e, r) {
                if ("function" == typeof e.borshDeserialize) return e.borshDeserialize(r);
                let n = t.get(e);
                if (!n) throw new d(`Class ${e.name} is missing in schema`);
                if ("struct" === n.kind) {
                    let n = {};
                    for (let [i, o] of t.get(e).fields) n[i] = b(t, i, o, r);
                    return new e(n)
                }
                if ("enum" === n.kind) {
                    let i = r.readU8();
                    if (i >= n.values.length) throw new d(`Enum index: ${i} is out of range`);
                    let [o, s] = n.values[i], u = b(t, o, s, r);
                    return new e({
                        [o]: u
                    })
                }
                throw new d(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
            }
            s([y], m.prototype, "readU8", null), s([y], m.prototype, "readU16", null), s([y], m.prototype, "readU32", null), s([y], m.prototype, "readU64", null), s([y], m.prototype, "readU128", null), s([y], m.prototype, "readU256", null), s([y], m.prototype, "readU512", null), s([y], m.prototype, "readString", null), s([y], m.prototype, "readFixedArray", null), s([y], m.prototype, "readArray", null), e.BinaryReader = m, e.serialize = function(t, e, r = p) {
                let n = new r;
                return v(t, e, n), n.toArray()
            }, e.deserialize = function(t, e, r, n = m) {
                let i = new n(r),
                    o = E(t, e, i);
                if (i.offset < r.length) throw new d(`Unexpected ${r.length-i.offset} bytes after deserialized data`);
                return o
            }, e.deserializeUnchecked = function(t, e, r, n = m) {
                return E(t, e, new n(r))
            }
        },
        68870: function(t, e, r) {
            var n = r(81542);
            t.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        67133: function(t, e, r) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            let n = r(34699),
                i = r(19087),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function s(t) {
                if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
                let e = new Uint8Array(t);
                return Object.setPrototypeOf(e, u.prototype), e
            }

            function u(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return a(t, e, r)
            }

            function a(t, e, r) {
                if ("string" == typeof t) return function(t, e) {
                    if (("string" != typeof e || "" === e) && (e = "utf8"), !u.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
                    let r = 0 | p(t, e),
                        n = s(r),
                        i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function(t) {
                    if (j(t, Uint8Array)) {
                        let e = new Uint8Array(t);
                        return c(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return l(t)
                }(t);
                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (j(t, ArrayBuffer) || t && j(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (j(t, SharedArrayBuffer) || t && j(t.buffer, SharedArrayBuffer))) return c(t, e, r);
                if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                let n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return u.from(n, e, r);
                let i = function(t) {
                    var e;
                    if (u.isBuffer(t)) {
                        let e = 0 | d(t.length),
                            r = s(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || (e = t.length) != e ? s(0) : l(t) : "Buffer" === t.type && Array.isArray(t.data) ? l(t.data) : void 0
                }(t);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function f(t) {
                if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function h(t) {
                return f(t), s(t < 0 ? 0 : 0 | d(t))
            }

            function l(t) {
                let e = t.length < 0 ? 0 : 0 | d(t.length),
                    r = s(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function c(t, e, r) {
                let n;
                if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), u.prototype), n
            }

            function d(t) {
                if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | t
            }

            function p(t, e) {
                if (u.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || j(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                let r = t.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return T(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return P(t).length;
                    default:
                        if (i) return n ? -1 : T(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function y(t, e, r) {
                let i = !1;
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
                        return v(this, e, r);
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
                        var o, s;
                        return o = e, s = r, 0 === o && s === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(o, s));
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
                        if (i) throw TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), i = !0
                }
            }

            function m(t, e, r) {
                let n = t[e];
                t[e] = t[r], t[r] = n
            }

            function g(t, e, r, n, i) {
                var o;
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (o = r = +r) != o && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, r, n, i);
                if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : w(t, [e], r, n, i);
                throw TypeError("val must be string, number or Buffer")
            }

            function w(t, e, r, n, i) {
                let o, s = 1,
                    u = t.length,
                    a = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, u /= 2, a /= 2, r /= 2
                }

                function f(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                    let n = -1;
                    for (o = r; o < u; o++)
                        if (f(t, o) === f(e, -1 === n ? 0 : o - n)) {
                            if (-1 === n && (n = o), o - n + 1 === a) return n * s
                        } else - 1 !== n && (o -= o - n), n = -1
                } else
                    for (r + a > u && (r = u - a), o = r; o >= 0; o--) {
                        let r = !0;
                        for (let n = 0; n < a; n++)
                            if (f(t, o + n) !== f(e, n)) {
                                r = !1;
                                break
                            } if (r) return o
                    }
                return -1
            }

            function v(t, e, r) {
                r = Math.min(t.length, r);
                let n = [],
                    i = e;
                for (; i < r;) {
                    let e = t[i],
                        o = null,
                        s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (i + s <= r) {
                        let r, n, u, a;
                        switch (s) {
                            case 1:
                                e < 128 && (o = e);
                                break;
                            case 2:
                                (192 & (r = t[i + 1])) == 128 && (a = (31 & e) << 6 | 63 & r) > 127 && (o = a);
                                break;
                            case 3:
                                r = t[i + 1], n = t[i + 2], (192 & r) == 128 && (192 & n) == 128 && (a = (15 & e) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (a < 55296 || a > 57343) && (o = a);
                                break;
                            case 4:
                                r = t[i + 1], n = t[i + 2], u = t[i + 3], (192 & r) == 128 && (192 & n) == 128 && (192 & u) == 128 && (a = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & u) > 65535 && a < 1114112 && (o = a)
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

            function b(t, e, r) {
                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                if (t + e > r) throw RangeError("Trying to access beyond buffer length")
            }

            function E(t, e, r, n, i, o) {
                if (!u.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw RangeError("Index out of range")
            }

            function x(t, e, r, n, i) {
                L(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function M(t, e, r, n, i) {
                L(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function B(t, e, r, n, i, o) {
                if (r + n > t.length || r < 0) throw RangeError("Index out of range")
            }

            function _(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || B(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, e, r, n, 23, 4), r + 4
            }

            function A(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || B(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, e, r, n, 52, 8), r + 8
            }
            e.Buffer = u, e.SlowBuffer = function(t) {
                return +t != t && (t = 0), u.alloc(+t)
            }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 2147483647, u.TYPED_ARRAY_SUPPORT = function() {
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
            }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function(t, e, r) {
                return a(t, e, r)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, e, r) {
                return (f(t), t <= 0) ? s(t) : void 0 !== e ? "string" == typeof r ? s(t).fill(e, r) : s(t).fill(e) : s(t)
            }, u.allocUnsafe = function(t) {
                return h(t)
            }, u.allocUnsafeSlow = function(t) {
                return h(t)
            }, u.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
            }, u.compare = function(t, e) {
                if (j(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), j(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                    n = e.length;
                for (let i = 0, o = Math.min(r, n); i < o; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i], n = e[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function(t) {
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
            }, u.concat = function(t, e) {
                let r;
                if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                if (void 0 === e)
                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                let n = u.allocUnsafe(e),
                    i = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (j(e, Uint8Array)) i + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i);
                    else if (u.isBuffer(e)) e.copy(n, i);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    i += e.length
                }
                return n
            }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                let t = this.length;
                if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) m(this, e, e + 1);
                return this
            }, u.prototype.swap32 = function() {
                let t = this.length;
                if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                return this
            }, u.prototype.swap64 = function() {
                let t = this.length;
                if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                return this
            }, u.prototype.toString = function() {
                let t = this.length;
                return 0 === t ? "" : 0 == arguments.length ? v(this, 0, t) : y.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
                if (!u.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t)
            }, u.prototype.inspect = function() {
                let t = "",
                    r = e.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, i) {
                if (j(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
                let o = i - n,
                    s = r - e,
                    a = Math.min(o, s),
                    f = this.slice(n, i),
                    h = t.slice(e, r);
                for (let t = 0; t < a; ++t)
                    if (f[t] !== h[t]) {
                        o = f[t], s = h[t];
                        break
                    } return o < s ? -1 : s < o ? 1 : 0
            }, u.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, u.prototype.indexOf = function(t, e, r) {
                return g(this, t, e, r, !0)
            }, u.prototype.lastIndexOf = function(t, e, r) {
                return g(this, t, e, r, !1)
            }, u.prototype.write = function(t, e, r, n) {
                var i, o, s, u, a, f, h, l;
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                let c = this.length - e;
                if ((void 0 === r || r > c) && (r = c), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let d = !1;
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
                        return i = e, o = r, N(T(t, this.length - i), this, i, o);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return s = e, u = r, N(function(t) {
                            let e = [];
                            for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e
                        }(t), this, s, u);
                    case "base64":
                        return a = e, f = r, N(P(t), this, a, f);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return h = e, l = r, N(function(t, e) {
                            let r, n;
                            let i = [];
                            for (let o = 0; o < t.length && !((e -= 2) < 0); ++o) n = (r = t.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                            return i
                        }(t, this.length - h), this, h, l);
                    default:
                        if (d) throw TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), d = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, u.prototype.slice = function(t, e) {
                let r = this.length;
                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                let n = this.subarray(t, e);
                return Object.setPrototypeOf(n, u.prototype), n
            }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                let n = this[t],
                    i = 1,
                    o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                let n = this[t + --e],
                    i = 1;
                for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || b(t, 1, this.length), this[t]
            }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || b(t, 2, this.length), this[t] | this[t + 1] << 8
            }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || b(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || b(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || b(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, u.prototype.readBigUInt64LE = q(function(t) {
                U(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && k(t, this.length - 8);
                let n = e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
                    i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
                return BigInt(n) + (BigInt(i) << BigInt(32))
            }), u.prototype.readBigUInt64BE = q(function(t) {
                U(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && k(t, this.length - 8);
                let n = 16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(i)
            }), u.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                let n = this[t],
                    i = 1,
                    o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
            }, u.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                let n = e,
                    i = 1,
                    o = this[t + --n];
                for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
            }, u.prototype.readInt8 = function(t, e) {
                return (t >>>= 0, e || b(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
            }, u.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || b(t, 2, this.length);
                let r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || b(t, 2, this.length);
                let r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || b(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, u.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || b(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, u.prototype.readBigInt64LE = q(function(t) {
                U(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                return (void 0 === e || void 0 === r) && k(t, this.length - 8), (BigInt(this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t])
            }), u.prototype.readBigInt64BE = q(function(t) {
                U(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                return (void 0 === e || void 0 === r) && k(t, this.length - 8), (BigInt((e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]) << BigInt(32)) + BigInt(16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r)
            }), u.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || b(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, u.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || b(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || b(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || b(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r) - 1;
                    E(this, t, e, r, n, 0)
                }
                let i = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r) - 1;
                    E(this, t, e, r, n, 0)
                }
                let i = r - 1,
                    o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigUInt64LE = q(function(t, e = 0) {
                return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), u.prototype.writeBigUInt64BE = q(function(t, e = 0) {
                return M(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), u.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r - 1);
                    E(this, t, e, r, n - 1, -n)
                }
                let i = 0,
                    o = 1,
                    s = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, u.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r - 1);
                    E(this, t, e, r, n - 1, -n)
                }
                let i = r - 1,
                    o = 1,
                    s = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, u.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, u.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, u.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || E(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigInt64LE = q(function(t, e = 0) {
                return x(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), u.prototype.writeBigInt64BE = q(function(t, e = 0) {
                return M(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), u.prototype.writeFloatLE = function(t, e, r) {
                return _(this, t, e, !0, r)
            }, u.prototype.writeFloatBE = function(t, e, r) {
                return _(this, t, e, !1, r)
            }, u.prototype.writeDoubleLE = function(t, e, r) {
                return A(this, t, e, !0, r)
            }, u.prototype.writeDoubleBE = function(t, e, r) {
                return A(this, t, e, !1, r)
            }, u.prototype.copy = function(t, e, r, n) {
                if (!u.isBuffer(t)) throw TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                if (n < 0) throw RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                let i = n - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
            }, u.prototype.fill = function(t, e, r, n) {
                let i;
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !u.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        let e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                if (r <= e) return this;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                    for (i = e; i < r; ++i) this[i] = t;
                else {
                    let o = u.isBuffer(t) ? t : u.from(t, n),
                        s = o.length;
                    if (0 === s) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = o[i % s]
                }
                return this
            };
            let I = {};

            function S(t, e, r) {
                I[t] = class extends r {
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

            function O(t) {
                let e = "",
                    r = t.length,
                    n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
                return `${t.slice(0,r)}${e}`
            }

            function L(t, e, r, n, i, o) {
                if (t > r || t < e) {
                    let n;
                    let i = "bigint" == typeof e ? "n" : "";
                    throw n = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(o+1)*8}${i}` : `>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}` : `>= ${e}${i} and <= ${r}${i}`, new I.ERR_OUT_OF_RANGE("value", n, t)
                }
                U(i, "offset"), (void 0 === n[i] || void 0 === n[i + o]) && k(i, n.length - (o + 1))
            }

            function U(t, e) {
                if ("number" != typeof t) throw new I.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function k(t, e, r) {
                if (Math.floor(t) !== t) throw U(t, r), new I.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new I.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new I.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
            }
            S("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), S("ERR_INVALID_ARG_TYPE", function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }, TypeError), S("ERR_OUT_OF_RANGE", function(t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                    i = r;
                return Number.isInteger(r) && Math.abs(r) > 4294967296 ? i = O(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = O(i)), i += "n"), n += ` It must be ${e}. Received ${i}`
            }, RangeError);
            let R = /[^+/0-9A-Za-z-_]/g;

            function T(t, e) {
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

            function P(t) {
                return n.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(R, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function N(t, e, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function j(t, e) {
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

            function q(t) {
                return "undefined" == typeof BigInt ? F : t
            }

            function F() {
                throw Error("BigInt not supported")
            }
        },
        28729: function(t) {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                r = "~";

            function n() {}

            function i(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function o(t, e, n, o, s) {
                if ("function" != typeof n) throw TypeError("The listener must be a function");
                var u = new i(n, o || t, s),
                    a = r ? r + e : e;
                return t._events[a] ? t._events[a].fn ? t._events[a] = [t._events[a], u] : t._events[a].push(u) : (t._events[a] = u, t._eventsCount++), t
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new n : delete t._events[e]
            }

            function u() {
                this._events = new n, this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1)), u.prototype.eventNames = function() {
                var t, n, i = [];
                if (0 === this._eventsCount) return i;
                for (n in t = this._events) e.call(t, n) && i.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
            }, u.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var i = 0, o = n.length, s = Array(o); i < o; i++) s[i] = n[i].fn;
                return s
            }, u.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                return n ? n.fn ? 1 : n.length : 0
            }, u.prototype.emit = function(t, e, n, i, o, s) {
                var u = r ? r + t : t;
                if (!this._events[u]) return !1;
                var a, f, h = this._events[u],
                    l = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), l) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, e), !0;
                        case 3:
                            return h.fn.call(h.context, e, n), !0;
                        case 4:
                            return h.fn.call(h.context, e, n, i), !0;
                        case 5:
                            return h.fn.call(h.context, e, n, i, o), !0;
                        case 6:
                            return h.fn.call(h.context, e, n, i, o, s), !0
                    }
                    for (f = 1, a = Array(l - 1); f < l; f++) a[f - 1] = arguments[f];
                    h.fn.apply(h.context, a)
                } else {
                    var c, d = h.length;
                    for (f = 0; f < d; f++) switch (h[f].once && this.removeListener(t, h[f].fn, void 0, !0), l) {
                        case 1:
                            h[f].fn.call(h[f].context);
                            break;
                        case 2:
                            h[f].fn.call(h[f].context, e);
                            break;
                        case 3:
                            h[f].fn.call(h[f].context, e, n);
                            break;
                        case 4:
                            h[f].fn.call(h[f].context, e, n, i);
                            break;
                        default:
                            if (!a)
                                for (c = 1, a = Array(l - 1); c < l; c++) a[c - 1] = arguments[c];
                            h[f].fn.apply(h[f].context, a)
                    }
                }
                return !0
            }, u.prototype.on = function(t, e, r) {
                return o(this, t, e, r, !1)
            }, u.prototype.once = function(t, e, r) {
                return o(this, t, e, r, !0)
            }, u.prototype.removeListener = function(t, e, n, i) {
                var o = r ? r + t : t;
                if (!this._events[o]) return this;
                if (!e) return s(this, o), this;
                var u = this._events[o];
                if (u.fn) u.fn !== e || i && !u.once || n && u.context !== n || s(this, o);
                else {
                    for (var a = 0, f = [], h = u.length; a < h; a++)(u[a].fn !== e || i && !u[a].once || n && u[a].context !== n) && f.push(u[a]);
                    f.length ? this._events[o] = 1 === f.length ? f[0] : f : s(this, o)
                }
                return this
            }, u.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new n, this._eventsCount = 0), this
            }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, t.exports = u
        },
        19087: function(t, e) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            e.read = function(t, e, r, n, i) {
                var o, s, u = 8 * i - n - 1,
                    a = (1 << u) - 1,
                    f = a >> 1,
                    h = -7,
                    l = r ? i - 1 : 0,
                    c = r ? -1 : 1,
                    d = t[e + l];
                for (l += c, o = d & (1 << -h) - 1, d >>= -h, h += u; h > 0; o = 256 * o + t[e + l], l += c, h -= 8);
                for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = 256 * s + t[e + l], l += c, h -= 8);
                if (0 === o) o = 1 - f;
                else {
                    if (o === a) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                    s += Math.pow(2, n), o -= f
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - n)
            }, e.write = function(t, e, r, n, i, o) {
                var s, u, a, f = 8 * o - i - 1,
                    h = (1 << f) - 1,
                    l = h >> 1,
                    c = 23 === i ? 5960464477539062e-23 : 0,
                    d = n ? 0 : o - 1,
                    p = n ? 1 : -1,
                    y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), s + l >= 1 ? e += c / a : e += c * Math.pow(2, 1 - l), e * a >= 2 && (s++, a /= 2), s + l >= h ? (u = 0, s = h) : s + l >= 1 ? (u = (e * a - 1) * Math.pow(2, i), s += l) : (u = e * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + d] = 255 & u, d += p, u /= 256, i -= 8);
                for (s = s << i | u, f += i; f > 0; t[r + d] = 255 & s, d += p, s /= 256, f -= 8);
                t[r + d - p] |= 128 * y
            }
        },
        152: function(t, e, r) {
            "use strict";
            let n = r(19512).v4,
                i = r(89559),
                o = function(t, e) {
                    if (!(this instanceof o)) return new o(t, e);
                    e || (e = {}), this.options = {
                        reviver: void 0 !== e.reviver ? e.reviver : null,
                        replacer: void 0 !== e.replacer ? e.replacer : null,
                        generator: void 0 !== e.generator ? e.generator : function() {
                            return n()
                        },
                        version: void 0 !== e.version ? e.version : 2,
                        notificationIdNull: "boolean" == typeof e.notificationIdNull && e.notificationIdNull
                    }, this.callServer = t
                };
            t.exports = o, o.prototype.request = function(t, e, r, n) {
                let o;
                let s = this,
                    u = null,
                    a = Array.isArray(t) && "function" == typeof e;
                if (1 === this.options.version && a) throw TypeError("JSON-RPC 1.0 does not support batching");
                let f = !a && t && "object" == typeof t && "function" == typeof e;
                if (a || f) n = e, u = t;
                else {
                    "function" == typeof r && (n = r, r = void 0);
                    let o = "function" == typeof n;
                    try {
                        u = i(t, e, r, {
                            generator: this.options.generator,
                            version: this.options.version,
                            notificationIdNull: this.options.notificationIdNull
                        })
                    } catch (t) {
                        if (o) return n(t);
                        throw t
                    }
                    if (!o) return u
                }
                try {
                    o = JSON.stringify(u, this.options.replacer)
                } catch (t) {
                    return n(t)
                }
                return this.callServer(o, function(t, e) {
                    s._parseResponse(t, e, n)
                }), u
            }, o.prototype._parseResponse = function(t, e, r) {
                let n;
                if (t) {
                    r(t);
                    return
                }
                if (!e) return r();
                try {
                    n = JSON.parse(e, this.options.reviver)
                } catch (t) {
                    return r(t)
                }
                if (3 === r.length) {
                    if (!Array.isArray(n)) return r(null, n.error, n.result);
                    {
                        let t = function(t) {
                            return void 0 !== t.error
                        };
                        return r(null, n.filter(t), n.filter(function(e) {
                            return !t(e)
                        }))
                    }
                }
                r(null, n)
            }
        },
        89559: function(t, e, r) {
            "use strict";
            let n = r(19512).v4;
            t.exports = function(t, e, r, i) {
                if ("string" != typeof t) throw TypeError(t + " must be a string");
                let o = "number" == typeof(i = i || {}).version ? i.version : 2;
                if (1 !== o && 2 !== o) throw TypeError(o + " must be 1 or 2");
                let s = {
                    method: t
                };
                if (2 === o && (s.jsonrpc = "2.0"), e) {
                    if ("object" != typeof e && !Array.isArray(e)) throw TypeError(e + " must be an object, array or omitted");
                    s.params = e
                }
                if (void 0 === r) {
                    let t = "function" == typeof i.generator ? i.generator : function() {
                        return n()
                    };
                    s.id = t(s, i)
                } else 2 === o && null === r ? i.notificationIdNull && (s.id = null) : s.id = r;
                return s
            }
        },
        25566: function(t) {
            var e, r, n, i = t.exports = {};

            function o() {
                throw Error("setTimeout has not been defined")
            }

            function s() {
                throw Error("clearTimeout has not been defined")
            }

            function u(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                try {
                    return e(t, 0)
                } catch (r) {
                    try {
                        return e.call(null, t, 0)
                    } catch (r) {
                        return e.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    e = "function" == typeof setTimeout ? setTimeout : o
                } catch (t) {
                    e = o
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    r = s
                }
            }();
            var a = [],
                f = !1,
                h = -1;

            function l() {
                f && n && (f = !1, n.length ? a = n.concat(a) : h = -1, a.length && c())
            }

            function c() {
                if (!f) {
                    var t = u(l);
                    f = !0;
                    for (var e = a.length; e;) {
                        for (n = a, a = []; ++h < e;) n && n[h].run();
                        h = -1, e = a.length
                    }
                    n = null, f = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function d(t, e) {
                this.fun = t, this.array = e
            }

            function p() {}
            i.nextTick = function(t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                a.push(new d(t, e)), 1 !== a.length || f || u(c)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        17449: function(t, e, r) {
            "use strict";
            var n = r(67133).Buffer,
                i = r(26314);
            e.Z = void 0;
            var o = i(r(74001)),
                s = i(r(64662)),
                u = i(r(61565)),
                a = i(r(86358)),
                f = i(r(1127)),
                h = i(r(35684)),
                l = i(r(60746)),
                c = i(r(83654)),
                d = r(28729),
                p = r(19496),
                y = function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                    return r
                },
                m = function(t) {
                    (0, h.default)(w, t);
                    var e, r, i, d, m, g = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = (0, c.default)(w);
                        if (e) {
                            var n = (0, c.default)(this).constructor;
                            t = Reflect.construct(r, arguments, n)
                        } else t = r.apply(this, arguments);
                        return (0, l.default)(this, t)
                    });

                    function w(t) {
                        var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ws://localhost:8080",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 ? arguments[3] : void 0,
                            o = arguments.length > 4 ? arguments[4] : void 0;
                        (0, a.default)(this, w);
                        var s = n.autoconnect,
                            u = n.reconnect,
                            f = n.reconnect_interval,
                            h = n.max_reconnects,
                            l = y(n, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
                        return (e = g.call(this)).webSocketFactory = t, e.queue = {}, e.rpc_id = 0, e.address = r, e.autoconnect = void 0 === s || s, e.ready = !1, e.reconnect = void 0 === u || u, e.reconnect_timer_id = void 0, e.reconnect_interval = void 0 === f ? 1e3 : f, e.max_reconnects = void 0 === h ? 5 : h, e.rest_options = l, e.current_reconnects = 0, e.generate_request_id = i || function() {
                            return ++e.rpc_id
                        }, o ? e.dataPack = o : e.dataPack = new p.DefaultDataPack, e.autoconnect && e._connect(e.address, Object.assign({
                            autoconnect: e.autoconnect,
                            reconnect: e.reconnect,
                            reconnect_interval: e.reconnect_interval,
                            max_reconnects: e.max_reconnects
                        }, e.rest_options)), e
                    }
                    return (0, f.default)(w, [{
                        key: "connect",
                        value: function() {
                            this.socket || this._connect(this.address, Object.assign({
                                autoconnect: this.autoconnect,
                                reconnect: this.reconnect,
                                reconnect_interval: this.reconnect_interval,
                                max_reconnects: this.max_reconnects
                            }, this.rest_options))
                        }
                    }, {
                        key: "call",
                        value: function(t, e, r, n) {
                            var i = this;
                            return n || "object" !== (0, u.default)(r) || (n = r, r = null), new Promise(function(o, s) {
                                if (!i.ready) return s(Error("socket not ready"));
                                var u = i.generate_request_id(t, e);
                                i.socket.send(i.dataPack.encode({
                                    jsonrpc: "2.0",
                                    method: t,
                                    params: e || void 0,
                                    id: u
                                }), n, function(t) {
                                    if (t) return s(t);
                                    i.queue[u] = {
                                        promise: [o, s]
                                    }, r && (i.queue[u].timeout = setTimeout(function() {
                                        delete i.queue[u], s(Error("reply timeout"))
                                    }, r))
                                })
                            })
                        }
                    }, {
                        key: "login",
                        value: (r = (0, s.default)(o.default.mark(function t(e) {
                            var r;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.call("rpc.login", e);
                                    case 2:
                                        if (r = t.sent) {
                                            t.next = 5;
                                            break
                                        }
                                        throw Error("authentication failed");
                                    case 5:
                                        return t.abrupt("return", r);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        })), function(t) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "listMethods",
                        value: (i = (0, s.default)(o.default.mark(function t() {
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.call("__listMethods");
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        })), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "notify",
                        value: function(t, e) {
                            var r = this;
                            return new Promise(function(n, i) {
                                if (!r.ready) return i(Error("socket not ready"));
                                r.socket.send(r.dataPack.encode({
                                    jsonrpc: "2.0",
                                    method: t,
                                    params: e
                                }), function(t) {
                                    if (t) return i(t);
                                    n()
                                })
                            })
                        }
                    }, {
                        key: "subscribe",
                        value: (d = (0, s.default)(o.default.mark(function t(e) {
                            var r;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return "string" == typeof e && (e = [e]), t.next = 3, this.call("rpc.on", e);
                                    case 3:
                                        if (r = t.sent, !("string" == typeof e && "ok" !== r[e])) {
                                            t.next = 6;
                                            break
                                        }
                                        throw Error("Failed subscribing to an event '" + e + "' with: " + r[e]);
                                    case 6:
                                        return t.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        })), function(t) {
                            return d.apply(this, arguments)
                        })
                    }, {
                        key: "unsubscribe",
                        value: (m = (0, s.default)(o.default.mark(function t(e) {
                            var r;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return "string" == typeof e && (e = [e]), t.next = 3, this.call("rpc.off", e);
                                    case 3:
                                        if (r = t.sent, !("string" == typeof e && "ok" !== r[e])) {
                                            t.next = 6;
                                            break
                                        }
                                        throw Error("Failed unsubscribing from an event with: " + r);
                                    case 6:
                                        return t.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        })), function(t) {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "close",
                        value: function(t, e) {
                            this.socket.close(t || 1e3, e)
                        }
                    }, {
                        key: "_connect",
                        value: function(t, e) {
                            var r = this;
                            clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(t, e), this.socket.addEventListener("open", function() {
                                r.ready = !0, r.emit("open"), r.current_reconnects = 0
                            }), this.socket.addEventListener("message", function(t) {
                                var e = t.data;
                                e instanceof ArrayBuffer && (e = n.from(e).toString());
                                try {
                                    e = r.dataPack.decode(e)
                                } catch (t) {
                                    return
                                }
                                if (e.notification && r.listeners(e.notification).length) {
                                    if (!Object.keys(e.params).length) return r.emit(e.notification);
                                    var i = [e.notification];
                                    if (e.params.constructor === Object) i.push(e.params);
                                    else
                                        for (var o = 0; o < e.params.length; o++) i.push(e.params[o]);
                                    return Promise.resolve().then(function() {
                                        r.emit.apply(r, i)
                                    })
                                }
                                if (!r.queue[e.id]) return e.method ? Promise.resolve().then(function() {
                                    r.emit(e.method, null == e ? void 0 : e.params)
                                }) : void 0;
                                "error" in e == "result" in e && r.queue[e.id].promise[1](Error('Server response malformed. Response must include either "result" or "error", but not both.')), r.queue[e.id].timeout && clearTimeout(r.queue[e.id].timeout), e.error ? r.queue[e.id].promise[1](e.error) : r.queue[e.id].promise[0](e.result), delete r.queue[e.id]
                            }), this.socket.addEventListener("error", function(t) {
                                return r.emit("error", t)
                            }), this.socket.addEventListener("close", function(n) {
                                var i = n.code,
                                    o = n.reason;
                                r.ready && setTimeout(function() {
                                    return r.emit("close", i, o)
                                }, 0), r.ready = !1, r.socket = void 0, 1e3 !== i && (r.current_reconnects++, r.reconnect && (r.max_reconnects > r.current_reconnects || 0 === r.max_reconnects) && (r.reconnect_timer_id = setTimeout(function() {
                                    return r._connect(t, e)
                                }, r.reconnect_interval)))
                            })
                        }
                    }]), w
                }(d.EventEmitter);
            e.Z = m
        },
        95400: function(t, e, r) {
            "use strict";
            var n = r(26314);
            e.Z = function(t, e) {
                return new f(t, e)
            };
            var i = n(r(86358)),
                o = n(r(1127)),
                s = n(r(35684)),
                u = n(r(60746)),
                a = n(r(83654)),
                f = function(t) {
                    (0, s.default)(n, t);
                    var e, r = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = (0, a.default)(n);
                        if (e) {
                            var i = (0, a.default)(this).constructor;
                            t = Reflect.construct(r, arguments, i)
                        } else t = r.apply(this, arguments);
                        return (0, u.default)(this, t)
                    });

                    function n(t, e, o) {
                        var s;
                        return (0, i.default)(this, n), (s = r.call(this)).socket = new window.WebSocket(t, o), s.socket.onopen = function() {
                            return s.emit("open")
                        }, s.socket.onmessage = function(t) {
                            return s.emit("message", t.data)
                        }, s.socket.onerror = function(t) {
                            return s.emit("error", t)
                        }, s.socket.onclose = function(t) {
                            s.emit("close", t.code, t.reason)
                        }, s
                    }
                    return (0, o.default)(n, [{
                        key: "send",
                        value: function(t, e, r) {
                            var n = r || e;
                            try {
                                this.socket.send(t), n()
                            } catch (t) {
                                n(t)
                            }
                        }
                    }, {
                        key: "close",
                        value: function(t, e) {
                            this.socket.close(t, e)
                        }
                    }, {
                        key: "addEventListener",
                        value: function(t, e, r) {
                            this.socket.addEventListener(t, e, r)
                        }
                    }]), n
                }(r(28729).EventEmitter)
        },
        19496: function(t, e, r) {
            "use strict";
            var n = r(26314);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DefaultDataPack = void 0, e.createError = function(t, e) {
                var r = {
                    code: t,
                    message: s.get(t) || "Internal Server Error"
                };
                return e && (r.data = e), r
            };
            var i = n(r(86358)),
                o = n(r(1127)),
                s = new Map([
                    [-32e3, "Event not provided"],
                    [-32600, "Invalid Request"],
                    [-32601, "Method not found"],
                    [-32602, "Invalid params"],
                    [-32603, "Internal error"],
                    [-32604, "Params not found"],
                    [-32605, "Method forbidden"],
                    [-32606, "Event forbidden"],
                    [-32700, "Parse error"]
                ]),
                u = function() {
                    function t() {
                        (0, i.default)(this, t)
                    }
                    return (0, o.default)(t, [{
                        key: "encode",
                        value: function(t) {
                            return JSON.stringify(t)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return JSON.parse(t)
                        }
                    }]), t
                }();
            e.DefaultDataPack = u
        },
        92336: function(t, e, r) {
            /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
            var n = r(67133),
                i = n.Buffer;

            function o(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function s(t, e, r) {
                return i(t, e, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(t, e, r) {
                if ("number" == typeof t) throw TypeError("Argument must not be a number");
                return i(t, e, r)
            }, s.alloc = function(t, e, r) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                var n = i(t);
                return void 0 !== e ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
            }, s.allocUnsafe = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return i(t)
            }, s.allocUnsafeSlow = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return n.SlowBuffer(t)
            }
        },
        80899: function(t, e) {
            "use strict";

            function r(t, e, r) {
                return e <= t && t <= r
            }

            function n(t) {
                if (void 0 === t) return {};
                if (t === Object(t)) return t;
                throw TypeError("Could not convert argument to dictionary")
            }

            function i(t) {
                this.tokens = [].slice.call(t)
            }

            function o(t, e) {
                if (t) throw TypeError("Decoder error");
                return e || 65533
            }
            i.prototype = {
                endOfStream: function() {
                    return !this.tokens.length
                },
                read: function() {
                    return this.tokens.length ? this.tokens.shift() : -1
                },
                prepend: function(t) {
                    if (Array.isArray(t))
                        for (; t.length;) this.tokens.unshift(t.pop());
                    else this.tokens.unshift(t)
                },
                push: function(t) {
                    if (Array.isArray(t))
                        for (; t.length;) this.tokens.push(t.shift());
                    else this.tokens.push(t)
                }
            };
            var s = "utf-8";

            function u(t, e) {
                if (!(this instanceof u)) return new u(t, e);
                if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s) throw Error("Encoding not supported. Only utf-8 is supported");
                e = n(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!e.fatal, this._ignoreBOM = !!e.ignoreBOM, Object.defineProperty(this, "encoding", {
                    value: "utf-8"
                }), Object.defineProperty(this, "fatal", {
                    value: this._fatal
                }), Object.defineProperty(this, "ignoreBOM", {
                    value: this._ignoreBOM
                })
            }

            function a(t, e) {
                if (!(this instanceof a)) return new a(t, e);
                if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s) throw Error("Encoding not supported. Only utf-8 is supported");
                e = n(e), this._streaming = !1, this._encoder = null, this._options = {
                    fatal: !!e.fatal
                }, Object.defineProperty(this, "encoding", {
                    value: "utf-8"
                })
            }

            function f(t) {
                var e = t.fatal,
                    n = 0,
                    i = 0,
                    s = 0,
                    u = 128,
                    a = 191;
                this.handler = function(t, f) {
                    if (-1 === f && 0 !== s) return s = 0, o(e);
                    if (-1 === f) return -1;
                    if (0 === s) {
                        if (r(f, 0, 127)) return f;
                        if (r(f, 194, 223)) s = 1, n = f - 192;
                        else if (r(f, 224, 239)) 224 === f && (u = 160), 237 === f && (a = 159), s = 2, n = f - 224;
                        else {
                            if (!r(f, 240, 244)) return o(e);
                            240 === f && (u = 144), 244 === f && (a = 143), s = 3, n = f - 240
                        }
                        return n <<= 6 * s, null
                    }
                    if (!r(f, u, a)) return n = s = i = 0, u = 128, a = 191, t.prepend(f), o(e);
                    if (u = 128, a = 191, i += 1, n += f - 128 << 6 * (s - i), i !== s) return null;
                    var h = n;
                    return n = s = i = 0, h
                }
            }

            function h(t) {
                t.fatal, this.handler = function(t, e) {
                    if (-1 === e) return -1;
                    if (r(e, 0, 127)) return e;
                    r(e, 128, 2047) ? (n = 1, i = 192) : r(e, 2048, 65535) ? (n = 2, i = 224) : r(e, 65536, 1114111) && (n = 3, i = 240);
                    for (var n, i, o = [(e >> 6 * n) + i]; n > 0;) {
                        var s = e >> 6 * (n - 1);
                        o.push(128 | 63 & s), n -= 1
                    }
                    return o
                }
            }
            u.prototype = {
                decode: function(t, e) {
                    r = "object" == typeof t && t instanceof ArrayBuffer ? new Uint8Array(t) : "object" == typeof t && "buffer" in t && t.buffer instanceof ArrayBuffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(0), e = n(e), this._streaming || (this._decoder = new f({
                        fatal: this._fatal
                    }), this._BOMseen = !1), this._streaming = !!e.stream;
                    for (var r, o, s = new i(r), u = []; !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read()));) null !== o && (Array.isArray(o) ? u.push.apply(u, o) : u.push(o));
                    if (!this._streaming) {
                        do {
                            if (-1 === (o = this._decoder.handler(s, s.read()))) break;
                            if (null === o) continue;
                            Array.isArray(o) ? u.push.apply(u, o) : u.push(o)
                        } while (!s.endOfStream());
                        this._decoder = null
                    }
                    return !u.length || -1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === u[0] ? (this._BOMseen = !0, u.shift()) : this._BOMseen = !0),
                        function(t) {
                            for (var e = "", r = 0; r < t.length; ++r) {
                                var n = t[r];
                                n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode((n >> 10) + 55296, (1023 & n) + 56320))
                            }
                            return e
                        }(u)
                }
            }, a.prototype = {
                encode: function(t, e) {
                    t = t ? String(t) : "", e = n(e), this._streaming || (this._encoder = new h(this._options)), this._streaming = !!e.stream;
                    for (var r, o = [], s = new i(function(t) {
                            for (var e = String(t), r = e.length, n = 0, i = []; n < r;) {
                                var o = e.charCodeAt(n);
                                if (o < 55296 || o > 57343) i.push(o);
                                else if (56320 <= o && o <= 57343) i.push(65533);
                                else if (55296 <= o && o <= 56319) {
                                    if (n === r - 1) i.push(65533);
                                    else {
                                        var s = t.charCodeAt(n + 1);
                                        if (56320 <= s && s <= 57343) {
                                            var u = 1023 & o,
                                                a = 1023 & s;
                                            i.push(65536 + (u << 10) + a), n += 1
                                        } else i.push(65533)
                                    }
                                }
                                n += 1
                            }
                            return i
                        }(t)); !s.endOfStream() && -1 !== (r = this._encoder.handler(s, s.read()));) Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
                    if (!this._streaming) {
                        for (; - 1 !== (r = this._encoder.handler(s, s.read()));) Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
                        this._encoder = null
                    }
                    return new Uint8Array(o)
                }
            }, e.TextEncoder = a, e.TextDecoder = u
        },
        19512: function(t, e, r) {
            "use strict";
            r.d(e, {
                v4: function() {
                    return f
                }
            });
            for (var n, i = new Uint8Array(16), o = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, s = [], u = 0; u < 256; ++u) s.push((u + 256).toString(16).substr(1));
            var a = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = (s[t[e + 0]] + s[t[e + 1]] + s[t[e + 2]] + s[t[e + 3]] + "-" + s[t[e + 4]] + s[t[e + 5]] + "-" + s[t[e + 6]] + s[t[e + 7]] + "-" + s[t[e + 8]] + s[t[e + 9]] + "-" + s[t[e + 10]] + s[t[e + 11]] + s[t[e + 12]] + s[t[e + 13]] + s[t[e + 14]] + s[t[e + 15]]).toLowerCase();
                    if (!("string" == typeof r && o.test(r))) throw TypeError("Stringified UUID is invalid");
                    return r
                },
                f = function(t, e, r) {
                    var o = (t = t || {}).random || (t.rng || function() {
                        if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                        return n(i)
                    })();
                    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) {
                        r = r || 0;
                        for (var s = 0; s < 16; ++s) e[r + s] = o[s];
                        return e
                    }
                    return a(o)
                }
        },
        95248: function(t) {
            t.exports = function(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        64662: function(t) {
            function e(t, e, r, n, i, o, s) {
                try {
                    var u = t[o](s),
                        a = u.value
                } catch (t) {
                    r(t);
                    return
                }
                u.done ? e(a) : Promise.resolve(a).then(n, i)
            }
            t.exports = function(t) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise(function(i, o) {
                        var s = t.apply(r, n);

                        function u(t) {
                            e(s, i, o, u, a, "next", t)
                        }

                        function a(t) {
                            e(s, i, o, u, a, "throw", t)
                        }
                        u(void 0)
                    })
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        86358: function(t) {
            t.exports = function(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        1127: function(t, e, r) {
            var n = r(19040);

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, n(i.key), i)
                }
            }
            t.exports = function(t, e, r) {
                return e && i(t.prototype, e), r && i(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        83654: function(t) {
            function e(r) {
                return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        35684: function(t, e, r) {
            var n = r(60795);
            t.exports = function(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && n(t, e)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        26314: function(t) {
            t.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        60746: function(t, e, r) {
            var n = r(61565).default,
                i = r(95248);
            t.exports = function(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                return i(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        14436: function(t, e, r) {
            var n = r(61565).default;

            function i() {
                "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                t.exports = i = function() {
                    return r
                }, t.exports.__esModule = !0, t.exports.default = t.exports;
                var e, r = {},
                    o = Object.prototype,
                    s = o.hasOwnProperty,
                    u = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    f = a.iterator || "@@iterator",
                    h = a.asyncIterator || "@@asyncIterator",
                    l = a.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function d(t, r, n, i) {
                    var o, s, a = Object.create((r && r.prototype instanceof v ? r : v).prototype);
                    return u(a, "_invoke", {
                        value: (o = new L(i || []), s = y, function(r, i) {
                            if (s === m) throw Error("Generator is already running");
                            if (s === g) {
                                if ("throw" === r) throw i;
                                return {
                                    value: e,
                                    done: !0
                                }
                            }
                            for (o.method = r, o.arg = i;;) {
                                var u = o.delegate;
                                if (u) {
                                    var a = function t(r, n) {
                                        var i = n.method,
                                            o = r.iterator[i];
                                        if (o === e) return n.delegate = null, "throw" === i && r.iterator.return && (n.method = "return", n.arg = e, t(r, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = TypeError("The iterator does not provide a '" + i + "' method")), w;
                                        var s = p(o, r.iterator, n.arg);
                                        if ("throw" === s.type) return n.method = "throw", n.arg = s.arg, n.delegate = null, w;
                                        var u = s.arg;
                                        return u ? u.done ? (n[r.resultName] = u.value, n.next = r.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, w) : u : (n.method = "throw", n.arg = TypeError("iterator result is not an object"), n.delegate = null, w)
                                    }(u, o);
                                    if (a) {
                                        if (a === w) continue;
                                        return a
                                    }
                                }
                                if ("next" === o.method) o.sent = o._sent = o.arg;
                                else if ("throw" === o.method) {
                                    if (s === y) throw s = g, o.arg;
                                    o.dispatchException(o.arg)
                                } else "return" === o.method && o.abrupt("return", o.arg);
                                s = m;
                                var f = p(t, n, o);
                                if ("normal" === f.type) {
                                    if (s = o.done ? g : "suspendedYield", f.arg === w) continue;
                                    return {
                                        value: f.arg,
                                        done: o.done
                                    }
                                }
                                "throw" === f.type && (s = g, o.method = "throw", o.arg = f.arg)
                            }
                        })
                    }), a
                }

                function p(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                r.wrap = d;
                var y = "suspendedStart",
                    m = "executing",
                    g = "completed",
                    w = {};

                function v() {}

                function b() {}

                function E() {}
                var x = {};
                c(x, f, function() {
                    return this
                });
                var M = Object.getPrototypeOf,
                    B = M && M(M(U([])));
                B && B !== o && s.call(B, f) && (x = B);
                var _ = E.prototype = v.prototype = Object.create(x);

                function A(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        c(t, e, function(t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function I(t, e) {
                    var r;
                    u(this, "_invoke", {
                        value: function(i, o) {
                            function u() {
                                return new e(function(r, u) {
                                    ! function r(i, o, u, a) {
                                        var f = p(t[i], t, o);
                                        if ("throw" !== f.type) {
                                            var h = f.arg,
                                                l = h.value;
                                            return l && "object" == n(l) && s.call(l, "__await") ? e.resolve(l.__await).then(function(t) {
                                                r("next", t, u, a)
                                            }, function(t) {
                                                r("throw", t, u, a)
                                            }) : e.resolve(l).then(function(t) {
                                                h.value = t, u(h)
                                            }, function(t) {
                                                return r("throw", t, u, a)
                                            })
                                        }
                                        a(f.arg)
                                    }(i, o, r, u)
                                })
                            }
                            return r = r ? r.then(u, u) : u()
                        }
                    })
                }

                function S(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(S, this), this.reset(!0)
                }

                function U(t) {
                    if (t || "" === t) {
                        var r = t[f];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var i = -1,
                                o = function r() {
                                    for (; ++i < t.length;)
                                        if (s.call(t, i)) return r.value = t[i], r.done = !1, r;
                                    return r.value = e, r.done = !0, r
                                };
                            return o.next = o
                        }
                    }
                    throw TypeError(n(t) + " is not iterable")
                }
                return b.prototype = E, u(_, "constructor", {
                    value: E,
                    configurable: !0
                }), u(E, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = c(E, l, "GeneratorFunction"), r.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, r.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E, c(t, l, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, r.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(I.prototype), c(I.prototype, h, function() {
                    return this
                }), r.AsyncIterator = I, r.async = function(t, e, n, i, o) {
                    void 0 === o && (o = Promise);
                    var s = new I(d(t, e, n, i), o);
                    return r.isGeneratorFunction(e) ? s : s.next().then(function(t) {
                        return t.done ? t.value : s.next()
                    })
                }, A(_), c(_, l, "Generator"), c(_, f, function() {
                    return this
                }), c(_, "toString", function() {
                    return "[object Generator]"
                }), r.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, r.values = U, L.prototype = {
                    constructor: L,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && s.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(n, i) {
                            return u.type = "throw", u.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                u = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var a = s.call(o, "catchLoc"),
                                    f = s.call(o, "finallyLoc");
                                if (a && f) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!f) throw Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var i = n;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, w) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), w
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), w
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    O(r)
                                }
                                return i
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, n) {
                        return this.delegate = {
                            iterator: U(t),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = e), w
                    }
                }, r
            }
            t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        60795: function(t) {
            function e(r, n) {
                return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r, n)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        89944: function(t, e, r) {
            var n = r(61565).default;
            t.exports = function(t, e) {
                if ("object" != n(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var i = r.call(t, e || "default");
                    if ("object" != n(i)) return i;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        19040: function(t, e, r) {
            var n = r(61565).default,
                i = r(89944);
            t.exports = function(t) {
                var e = i(t, "string");
                return "symbol" == n(e) ? e : String(e)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        61565: function(t) {
            function e(r) {
                return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        74001: function(t, e, r) {
            var n = r(14436)();
            t.exports = n;
            try {
                regeneratorRuntime = n
            } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
            }
        },
        63606: function(t, e, r) {
            "use strict";
            r.d(e, {
                K: function() {
                    return a
                },
                M: function() {
                    return u
                }
            });
            var n = r(52948),
                i = r(57843); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let o = BigInt(0),
                s = BigInt(1);

            function u(t, e) {
                let r = (t, e) => {
                        let r = e.negate();
                        return t ? r : e
                    },
                    n = t => ({
                        windows: Math.ceil(e / t) + 1,
                        windowSize: 2 ** (t - 1)
                    });
                return {
                    constTimeNegate: r,
                    unsafeLadder(e, r) {
                        let n = t.ZERO,
                            i = e;
                        for (; r > o;) r & s && (n = n.add(i)), i = i.double(), r >>= s;
                        return n
                    },
                    precomputeWindow(t, e) {
                        let {
                            windows: r,
                            windowSize: i
                        } = n(e), o = [], s = t, u = s;
                        for (let t = 0; t < r; t++) {
                            u = s, o.push(u);
                            for (let t = 1; t < i; t++) u = u.add(s), o.push(u);
                            s = u.double()
                        }
                        return o
                    },
                    wNAF(e, i, o) {
                        let {
                            windows: u,
                            windowSize: a
                        } = n(e), f = t.ZERO, h = t.BASE, l = BigInt(2 ** e - 1), c = 2 ** e, d = BigInt(e);
                        for (let t = 0; t < u; t++) {
                            let e = t * a,
                                n = Number(o & l);
                            o >>= d, n > a && (n -= c, o += s);
                            let u = e + Math.abs(n) - 1,
                                p = t % 2 != 0,
                                y = n < 0;
                            0 === n ? h = h.add(r(p, i[e])) : f = f.add(r(y, i[u]))
                        }
                        return {
                            p: f,
                            f: h
                        }
                    },
                    wNAFCached(t, e, r, n) {
                        let i = t._WINDOW_SIZE || 1,
                            o = e.get(t);
                        return o || (o = this.precomputeWindow(t, i), 1 !== i && e.set(t, n(o))), this.wNAF(i, o, r)
                    }
                }
            }

            function a(t) {
                return (0, n.OP)(t.Fp), (0, i.FF)(t, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({
                    ...(0, n.kK)(t.n, t.nBitLength),
                    ...t,
                    p: t.Fp.ORDER
                })
            }
        },
        52948: function(t, e, r) {
            "use strict";
            r.d(e, {
                DV: function() {
                    return v
                },
                OP: function() {
                    return m
                },
                PS: function() {
                    return E
                },
                Tu: function() {
                    return p
                },
                U_: function() {
                    return d
                },
                Us: function() {
                    return x
                },
                gN: function() {
                    return w
                },
                kK: function() {
                    return g
                },
                oA: function() {
                    return c
                },
                wQ: function() {
                    return l
                }
            });
            var n = r(57843); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let i = BigInt(0),
                o = BigInt(1),
                s = BigInt(2),
                u = BigInt(3),
                a = BigInt(4),
                f = BigInt(5),
                h = BigInt(8);

            function l(t, e) {
                let r = t % e;
                return r >= i ? r : e + r
            }

            function c(t, e, r) {
                let n = t;
                for (; e-- > i;) n *= n, n %= r;
                return n
            }

            function d(t, e) {
                if (t === i || e <= i) throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = l(t, e),
                    n = e,
                    s = i,
                    u = o,
                    a = o,
                    f = i;
                for (; r !== i;) {
                    let t = n / r,
                        e = n % r,
                        i = s - a * t,
                        o = u - f * t;
                    n = r, r = e, s = a, u = f, a = i, f = o
                }
                if (n !== o) throw Error("invert: does not exist");
                return l(s, e)
            }
            BigInt(9), BigInt(16);
            let p = (t, e) => (l(t, e) & o) === o,
                y = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function m(t) {
                let e = y.reduce((t, e) => (t[e] = "function", t), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                });
                return (0, n.FF)(t, e)
            }

            function g(t, e) {
                let r = void 0 !== e ? e : t.toString(2).length;
                return {
                    nBitLength: r,
                    nByteLength: Math.ceil(r / 8)
                }
            }

            function w(t, e, r = !1, c = {}) {
                if (t <= i) throw Error(`Expected Field ORDER > 0, got ${t}`);
                let {
                    nBitLength: p,
                    nByteLength: y
                } = g(t, e);
                if (y > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                let m = function(t) {
                        if (t % a === u) {
                            let e = (t + o) / a;
                            return function(t, r) {
                                let n = t.pow(r, e);
                                if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                return n
                            }
                        }
                        if (t % h === f) {
                            let e = (t - f) / h;
                            return function(t, r) {
                                let n = t.mul(r, s),
                                    i = t.pow(n, e),
                                    o = t.mul(r, i),
                                    u = t.mul(t.mul(o, s), i),
                                    a = t.mul(o, t.sub(u, t.ONE));
                                if (!t.eql(t.sqr(a), r)) throw Error("Cannot find square root");
                                return a
                            }
                        }
                        return function(t) {
                            let e, r, n;
                            let u = (t - o) / s;
                            for (e = t - o, r = 0; e % s === i; e /= s, r++);
                            for (n = s; n < t && function(t, e, r) {
                                    if (r <= i || e < i) throw Error("Expected power/modulo > 0");
                                    if (r === o) return i;
                                    let n = o;
                                    for (; e > i;) e & o && (n = n * t % r), t = t * t % r, e >>= o;
                                    return n
                                }(n, u, t) !== t - o; n++);
                            if (1 === r) {
                                let e = (t + o) / a;
                                return function(t, r) {
                                    let n = t.pow(r, e);
                                    if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                    return n
                                }
                            }
                            let f = (e + o) / s;
                            return function(t, i) {
                                if (t.pow(i, u) === t.neg(t.ONE)) throw Error("Cannot find square root");
                                let s = r,
                                    a = t.pow(t.mul(t.ONE, n), e),
                                    h = t.pow(i, f),
                                    l = t.pow(i, e);
                                for (; !t.eql(l, t.ONE);) {
                                    if (t.eql(l, t.ZERO)) return t.ZERO;
                                    let e = 1;
                                    for (let r = t.sqr(l); e < s && !t.eql(r, t.ONE); e++) r = t.sqr(r);
                                    let r = t.pow(a, o << BigInt(s - e - 1));
                                    a = t.sqr(r), h = t.mul(h, r), l = t.mul(l, a), s = e
                                }
                                return h
                            }
                        }(t)
                    }(t),
                    w = Object.freeze({
                        ORDER: t,
                        BITS: p,
                        BYTES: y,
                        MASK: (0, n.dQ)(p),
                        ZERO: i,
                        ONE: o,
                        create: e => l(e, t),
                        isValid: e => {
                            if ("bigint" != typeof e) throw Error(`Invalid field element: expected bigint, got ${typeof e}`);
                            return i <= e && e < t
                        },
                        is0: t => t === i,
                        isOdd: t => (t & o) === o,
                        neg: e => l(-e, t),
                        eql: (t, e) => t === e,
                        sqr: e => l(e * e, t),
                        add: (e, r) => l(e + r, t),
                        sub: (e, r) => l(e - r, t),
                        mul: (e, r) => l(e * r, t),
                        pow: (t, e) => (function(t, e, r) {
                            if (r < i) throw Error("Expected power > 0");
                            if (r === i) return t.ONE;
                            if (r === o) return e;
                            let n = t.ONE,
                                s = e;
                            for (; r > i;) r & o && (n = t.mul(n, s)), s = t.sqr(s), r >>= o;
                            return n
                        })(w, t, e),
                        div: (e, r) => l(e * d(r, t), t),
                        sqrN: t => t * t,
                        addN: (t, e) => t + e,
                        subN: (t, e) => t - e,
                        mulN: (t, e) => t * e,
                        inv: e => d(e, t),
                        sqrt: c.sqrt || (t => m(w, t)),
                        invertBatch: t => (function(t, e) {
                            let r = Array(e.length),
                                n = e.reduce((e, n, i) => t.is0(n) ? e : (r[i] = e, t.mul(e, n)), t.ONE),
                                i = t.inv(n);
                            return e.reduceRight((e, n, i) => t.is0(n) ? e : (r[i] = t.mul(e, r[i]), t.mul(e, n)), i), r
                        })(w, t),
                        cmov: (t, e, r) => r ? e : t,
                        toBytes: t => r ? (0, n.S5)(t, y) : (0, n.tL)(t, y),
                        fromBytes: t => {
                            if (t.length !== y) throw Error(`Fp.fromBytes: expected ${y}, got ${t.length}`);
                            return r ? (0, n.ty)(t) : (0, n.bytesToNumberBE)(t)
                        }
                    });
                return Object.freeze(w)
            }

            function v(t, e) {
                if (!t.isOdd) throw Error("Field doesn't have isOdd");
                let r = t.sqrt(e);
                return t.isOdd(r) ? t.neg(r) : r
            }

            function b(t) {
                if ("bigint" != typeof t) throw Error("field order must be bigint");
                return Math.ceil(t.toString(2).length / 8)
            }

            function E(t) {
                let e = b(t);
                return e + Math.ceil(e / 2)
            }

            function x(t, e, r = !1) {
                let i = t.length,
                    s = b(e),
                    u = E(e);
                if (i < 16 || i < u || i > 1024) throw Error(`expected ${u}-1024 bytes of input, got ${i}`);
                let a = l(r ? (0, n.bytesToNumberBE)(t) : (0, n.ty)(t), e - o) + o;
                return r ? (0, n.S5)(a, s) : (0, n.tL)(a, s)
            }
        },
        57843: function(t, e, r) {
            "use strict";
            r.d(e, {
                FF: function() {
                    return M
                },
                S5: function() {
                    return y
                },
                _t: function() {
                    return o
                },
                bytesToNumberBE: function() {
                    return c
                },
                ci: function() {
                    return u
                },
                dQ: function() {
                    return w
                },
                eV: function() {
                    return g
                },
                hexToBytes: function() {
                    return l
                },
                n$: function() {
                    return E
                },
                ql: function() {
                    return m
                },
                tL: function() {
                    return p
                },
                ty: function() {
                    return d
                }
            }), BigInt(0);
            let n = BigInt(1),
                i = BigInt(2);

            function o(t) {
                return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name
            }
            let s = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function u(t) {
                if (!o(t)) throw Error("Uint8Array expected");
                let e = "";
                for (let r = 0; r < t.length; r++) e += s[t[r]];
                return e
            }

            function a(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                return BigInt("" === t ? "0" : `0x${t}`)
            }
            let f = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function h(t) {
                return t >= f._0 && t <= f._9 ? t - f._0 : t >= f._A && t <= f._F ? t - (f._A - 10) : t >= f._a && t <= f._f ? t - (f._a - 10) : void 0
            }

            function l(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                let e = t.length,
                    r = e / 2;
                if (e % 2) throw Error("padded hex string expected, got unpadded hex of length " + e);
                let n = new Uint8Array(r);
                for (let e = 0, i = 0; e < r; e++, i += 2) {
                    let r = h(t.charCodeAt(i)),
                        o = h(t.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (t[i] + t[i + 1]) + '" at index ' + i);
                    n[e] = 16 * r + o
                }
                return n
            }

            function c(t) {
                return a(u(t))
            }

            function d(t) {
                if (!o(t)) throw Error("Uint8Array expected");
                return a(u(Uint8Array.from(t).reverse()))
            }

            function p(t, e) {
                return l(t.toString(16).padStart(2 * e, "0"))
            }

            function y(t, e) {
                return p(t, e).reverse()
            }

            function m(t, e, r) {
                let n;
                if ("string" == typeof e) try {
                        n = l(e)
                    } catch (r) {
                        throw Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)
                    } else if (o(e)) n = Uint8Array.from(e);
                    else throw Error(`${t} must be hex string or Uint8Array`);
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(`${t} expected ${r} bytes, got ${i}`);
                return n
            }

            function g(...t) {
                let e = 0;
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    if (!o(n)) throw Error("Uint8Array expected");
                    e += n.length
                }
                let r = new Uint8Array(e),
                    n = 0;
                for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    r.set(i, n), n += i.length
                }
                return r
            }
            let w = t => (i << BigInt(t - 1)) - n,
                v = t => new Uint8Array(t),
                b = t => Uint8Array.from(t);

            function E(t, e, r) {
                if ("number" != typeof t || t < 2) throw Error("hashLen must be a number");
                if ("number" != typeof e || e < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof r) throw Error("hmacFn must be a function");
                let n = v(t),
                    i = v(t),
                    o = 0,
                    s = () => {
                        n.fill(1), i.fill(0), o = 0
                    },
                    u = (...t) => r(i, n, ...t),
                    a = (t = v()) => {
                        i = u(b([0]), t), n = u(), 0 !== t.length && (i = u(b([1]), t), n = u())
                    },
                    f = () => {
                        if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let t = 0,
                            r = [];
                        for (; t < e;) {
                            let e = (n = u()).slice();
                            r.push(e), t += n.length
                        }
                        return g(...r)
                    };
                return (t, e) => {
                    let r;
                    for (s(), a(t); !(r = e(f()));) a();
                    return s(), r
                }
            }
            let x = {
                bigint: t => "bigint" == typeof t,
                function: t => "function" == typeof t,
                boolean: t => "boolean" == typeof t,
                string: t => "string" == typeof t,
                stringOrUint8Array: t => "string" == typeof t || o(t),
                isSafeInteger: t => Number.isSafeInteger(t),
                array: t => Array.isArray(t),
                field: (t, e) => e.Fp.isValid(t),
                hash: t => "function" == typeof t && Number.isSafeInteger(t.outputLen)
            };

            function M(t, e, r = {}) {
                let n = (e, r, n) => {
                    let i = x[r];
                    if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
                    let o = t[e];
                    if ((!n || void 0 !== o) && !i(o, t)) throw Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`)
                };
                for (let [t, r] of Object.entries(e)) n(t, r, !1);
                for (let [t, e] of Object.entries(r)) n(t, e, !0);
                return t
            }
        },
        4107: function(t, e, r) {
            "use strict";
            r.d(e, {
                UN: function() {
                    return R
                }
            });
            var n = r(4727),
                i = r(10606),
                o = r(32305);
            let [s, u] = i.ZP.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))), a = new Uint32Array(80), f = new Uint32Array(80);
            class h extends n.N {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    let {
                        Ah: t,
                        Al: e,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: o,
                        Dh: s,
                        Dl: u,
                        Eh: a,
                        El: f,
                        Fh: h,
                        Fl: l,
                        Gh: c,
                        Gl: d,
                        Hh: p,
                        Hl: y
                    } = this;
                    return [t, e, r, n, i, o, s, u, a, f, h, l, c, d, p, y]
                }
                set(t, e, r, n, i, o, s, u, a, f, h, l, c, d, p, y) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | o, this.Dh = 0 | s, this.Dl = 0 | u, this.Eh = 0 | a, this.El = 0 | f, this.Fh = 0 | h, this.Fl = 0 | l, this.Gh = 0 | c, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | y
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) a[r] = t.getUint32(e), f[r] = t.getUint32(e += 4);
                    for (let t = 16; t < 80; t++) {
                        let e = 0 | a[t - 15],
                            r = 0 | f[t - 15],
                            n = i.ZP.rotrSH(e, r, 1) ^ i.ZP.rotrSH(e, r, 8) ^ i.ZP.shrSH(e, r, 7),
                            o = i.ZP.rotrSL(e, r, 1) ^ i.ZP.rotrSL(e, r, 8) ^ i.ZP.shrSL(e, r, 7),
                            s = 0 | a[t - 2],
                            u = 0 | f[t - 2],
                            h = i.ZP.rotrSH(s, u, 19) ^ i.ZP.rotrBH(s, u, 61) ^ i.ZP.shrSH(s, u, 6),
                            l = i.ZP.rotrSL(s, u, 19) ^ i.ZP.rotrBL(s, u, 61) ^ i.ZP.shrSL(s, u, 6),
                            c = i.ZP.add4L(o, l, f[t - 7], f[t - 16]),
                            d = i.ZP.add4H(c, n, h, a[t - 7], a[t - 16]);
                        a[t] = 0 | d, f[t] = 0 | c
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: o,
                        Bl: h,
                        Ch: l,
                        Cl: c,
                        Dh: d,
                        Dl: p,
                        Eh: y,
                        El: m,
                        Fh: g,
                        Fl: w,
                        Gh: v,
                        Gl: b,
                        Hh: E,
                        Hl: x
                    } = this;
                    for (let t = 0; t < 80; t++) {
                        let e = i.ZP.rotrSH(y, m, 14) ^ i.ZP.rotrSH(y, m, 18) ^ i.ZP.rotrBH(y, m, 41),
                            M = i.ZP.rotrSL(y, m, 14) ^ i.ZP.rotrSL(y, m, 18) ^ i.ZP.rotrBL(y, m, 41),
                            B = y & g ^ ~y & v,
                            _ = m & w ^ ~m & b,
                            A = i.ZP.add5L(x, M, _, u[t], f[t]),
                            I = i.ZP.add5H(A, E, e, B, s[t], a[t]),
                            S = 0 | A,
                            O = i.ZP.rotrSH(r, n, 28) ^ i.ZP.rotrBH(r, n, 34) ^ i.ZP.rotrBH(r, n, 39),
                            L = i.ZP.rotrSL(r, n, 28) ^ i.ZP.rotrBL(r, n, 34) ^ i.ZP.rotrBL(r, n, 39),
                            U = r & o ^ r & l ^ o & l,
                            k = n & h ^ n & c ^ h & c;
                        E = 0 | v, x = 0 | b, v = 0 | g, b = 0 | w, g = 0 | y, w = 0 | m, ({
                            h: y,
                            l: m
                        } = i.ZP.add(0 | d, 0 | p, 0 | I, 0 | S)), d = 0 | l, p = 0 | c, l = 0 | o, c = 0 | h, o = 0 | r, h = 0 | n;
                        let R = i.ZP.add3L(S, L, k);
                        r = i.ZP.add3H(R, I, O, U), n = 0 | R
                    }({
                        h: r,
                        l: n
                    } = i.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: o,
                        l: h
                    } = i.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | h)), ({
                        h: l,
                        l: c
                    } = i.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | l, 0 | c)), ({
                        h: d,
                        l: p
                    } = i.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)), ({
                        h: y,
                        l: m
                    } = i.ZP.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | m)), ({
                        h: g,
                        l: w
                    } = i.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | g, 0 | w)), ({
                        h: v,
                        l: b
                    } = i.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | b)), ({
                        h: E,
                        l: x
                    } = i.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | x)), this.set(r, n, o, h, l, c, d, p, y, m, g, w, v, b, E, x)
                }
                roundClean() {
                    a.fill(0), f.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            let l = (0, o.hE)(() => new h);
            var c = r(52948),
                d = r(57843),
                p = r(63606); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let y = BigInt(0),
                m = BigInt(1),
                g = BigInt(2),
                w = BigInt(8),
                v = {
                    zip215: !0
                },
                b = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
                E = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),
                x = BigInt(0),
                M = BigInt(1),
                B = BigInt(2),
                _ = BigInt(5),
                A = BigInt(10),
                I = BigInt(20),
                S = BigInt(40),
                O = BigInt(80);

            function L(t, e) {
                let r = (0, c.wQ)(e * e * e, b),
                    n = function(t) {
                        let e = t * t % b * t % b,
                            r = (0, c.oA)(e, B, b) * e % b,
                            n = (0, c.oA)(r, M, b) * t % b,
                            i = (0, c.oA)(n, _, b) * n % b,
                            o = (0, c.oA)(i, A, b) * i % b,
                            s = (0, c.oA)(o, I, b) * o % b,
                            u = (0, c.oA)(s, S, b) * s % b,
                            a = (0, c.oA)(u, O, b) * u % b,
                            f = (0, c.oA)(a, O, b) * u % b,
                            h = (0, c.oA)(f, A, b) * i % b;
                        return {
                            pow_p_5_8: (0, c.oA)(h, B, b) * t % b,
                            b2: e
                        }
                    }(t * (0, c.wQ)(r * r * e, b)).pow_p_5_8,
                    i = (0, c.wQ)(t * r * n, b),
                    o = (0, c.wQ)(e * i * i, b),
                    s = i,
                    u = (0, c.wQ)(i * E, b),
                    a = o === t,
                    f = o === (0, c.wQ)(-t, b),
                    h = o === (0, c.wQ)(-t * E, b);
                return a && (i = s), (f || h) && (i = u), (0, c.Tu)(i, b) && (i = (0, c.wQ)(-i, b)), {
                    isValid: a || f,
                    value: i
                }
            }
            let U = (0, c.gN)(b, void 0, !0),
                k = {
                    a: BigInt(-1),
                    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
                    Fp: U,
                    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
                    h: BigInt(8),
                    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
                    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
                    hash: l,
                    randomBytes: o.O6,
                    adjustScalarBytes: function(t) {
                        return t[0] &= 248, t[31] &= 127, t[31] |= 64, t
                    },
                    uvRatio: L
                },
                R = function(t) {
                    let e = function(t) {
                            let e = (0, p.K)(t);
                            return d.FF(t, {
                                hash: "function",
                                a: "bigint",
                                d: "bigint",
                                randomBytes: "function"
                            }, {
                                adjustScalarBytes: "function",
                                domain: "function",
                                uvRatio: "function",
                                mapToCurve: "function"
                            }), Object.freeze({
                                ...e
                            })
                        }(t),
                        {
                            Fp: r,
                            n: n,
                            prehash: i,
                            hash: o,
                            randomBytes: s,
                            nByteLength: u,
                            h: a
                        } = e,
                        f = g << BigInt(8 * u) - m,
                        h = r.create,
                        l = e.uvRatio || ((t, e) => {
                            try {
                                return {
                                    isValid: !0,
                                    value: r.sqrt(t * r.inv(e))
                                }
                            } catch (t) {
                                return {
                                    isValid: !1,
                                    value: y
                                }
                            }
                        }),
                        b = e.adjustScalarBytes || (t => t),
                        E = e.domain || ((t, e, r) => {
                            if (e.length || r) throw Error("Contexts/pre-hash are not supported");
                            return t
                        }),
                        x = t => "bigint" == typeof t && y < t,
                        M = (t, e) => x(t) && x(e) && t < e,
                        B = t => t === y || M(t, f);

                    function _(t, e) {
                        if (M(t, e)) return t;
                        throw Error(`Expected valid scalar < ${e}, got ${typeof t} ${t}`)
                    }

                    function A(t) {
                        return t === y ? t : _(t, n)
                    }
                    let I = new Map;

                    function S(t) {
                        if (!(t instanceof O)) throw Error("ExtendedPoint expected")
                    }
                    class O {
                        constructor(t, e, r, n) {
                            if (this.ex = t, this.ey = e, this.ez = r, this.et = n, !B(t)) throw Error("x required");
                            if (!B(e)) throw Error("y required");
                            if (!B(r)) throw Error("z required");
                            if (!B(n)) throw Error("t required")
                        }
                        get x() {
                            return this.toAffine().x
                        }
                        get y() {
                            return this.toAffine().y
                        }
                        static fromAffine(t) {
                            if (t instanceof O) throw Error("extended point not allowed");
                            let {
                                x: e,
                                y: r
                            } = t || {};
                            if (!B(e) || !B(r)) throw Error("invalid affine point");
                            return new O(e, r, m, h(e * r))
                        }
                        static normalizeZ(t) {
                            let e = r.invertBatch(t.map(t => t.ez));
                            return t.map((t, r) => t.toAffine(e[r])).map(O.fromAffine)
                        }
                        _setWindowSize(t) {
                            this._WINDOW_SIZE = t, I.delete(this)
                        }
                        assertValidity() {
                            let {
                                a: t,
                                d: r
                            } = e;
                            if (this.is0()) throw Error("bad point: ZERO");
                            let {
                                ex: n,
                                ey: i,
                                ez: o,
                                et: s
                            } = this, u = h(n * n), a = h(i * i), f = h(o * o), l = h(f * f), c = h(u * t);
                            if (h(f * h(c + a)) !== h(l + h(r * h(u * a)))) throw Error("bad point: equation left != right (1)");
                            if (h(n * i) !== h(o * s)) throw Error("bad point: equation left != right (2)")
                        }
                        equals(t) {
                            S(t);
                            let {
                                ex: e,
                                ey: r,
                                ez: n
                            } = this, {
                                ex: i,
                                ey: o,
                                ez: s
                            } = t, u = h(e * s), a = h(i * n), f = h(r * s), l = h(o * n);
                            return u === a && f === l
                        }
                        is0() {
                            return this.equals(O.ZERO)
                        }
                        negate() {
                            return new O(h(-this.ex), this.ey, this.ez, h(-this.et))
                        }
                        double() {
                            let {
                                a: t
                            } = e, {
                                ex: r,
                                ey: n,
                                ez: i
                            } = this, o = h(r * r), s = h(n * n), u = h(g * h(i * i)), a = h(t * o), f = r + n, l = h(h(f * f) - o - s), c = a + s, d = c - u, p = a - s, y = h(l * d), m = h(c * p), w = h(l * p);
                            return new O(y, m, h(d * c), w)
                        }
                        add(t) {
                            S(t);
                            let {
                                a: r,
                                d: n
                            } = e, {
                                ex: i,
                                ey: o,
                                ez: s,
                                et: u
                            } = this, {
                                ex: a,
                                ey: f,
                                ez: l,
                                et: c
                            } = t;
                            if (r === BigInt(-1)) {
                                let t = h((o - i) * (f + a)),
                                    e = h((o + i) * (f - a)),
                                    r = h(e - t);
                                if (r === y) return this.double();
                                let n = h(s * g * c),
                                    d = h(u * g * l),
                                    p = d + n,
                                    m = e + t,
                                    w = d - n,
                                    v = h(p * r),
                                    b = h(m * w),
                                    E = h(p * w);
                                return new O(v, b, h(r * m), E)
                            }
                            let d = h(i * a),
                                p = h(o * f),
                                m = h(u * n * c),
                                w = h(s * l),
                                v = h((i + o) * (a + f) - d - p),
                                b = w - m,
                                E = w + m,
                                x = h(p - r * d),
                                M = h(v * b),
                                B = h(E * x),
                                _ = h(v * x);
                            return new O(M, B, h(b * E), _)
                        }
                        subtract(t) {
                            return this.add(t.negate())
                        }
                        wNAF(t) {
                            return k.wNAFCached(this, I, t, O.normalizeZ)
                        }
                        multiply(t) {
                            let {
                                p: e,
                                f: r
                            } = this.wNAF(_(t, n));
                            return O.normalizeZ([e, r])[0]
                        }
                        multiplyUnsafe(t) {
                            let e = A(t);
                            return e === y ? U : this.equals(U) || e === m ? this : this.equals(L) ? this.wNAF(e).p : k.unsafeLadder(this, e)
                        }
                        isSmallOrder() {
                            return this.multiplyUnsafe(a).is0()
                        }
                        isTorsionFree() {
                            return k.unsafeLadder(this, n).is0()
                        }
                        toAffine(t) {
                            let {
                                ex: e,
                                ey: n,
                                ez: i
                            } = this, o = this.is0();
                            null == t && (t = o ? w : r.inv(i));
                            let s = h(e * t),
                                u = h(n * t),
                                a = h(i * t);
                            if (o) return {
                                x: y,
                                y: m
                            };
                            if (a !== m) throw Error("invZ was invalid");
                            return {
                                x: s,
                                y: u
                            }
                        }
                        clearCofactor() {
                            let {
                                h: t
                            } = e;
                            return t === m ? this : this.multiplyUnsafe(t)
                        }
                        static fromHex(t, n = !1) {
                            let {
                                d: i,
                                a: o
                            } = e, s = r.BYTES, u = (t = (0, d.ql)("pointHex", t, s)).slice(), a = t[s - 1];
                            u[s - 1] = -129 & a;
                            let c = d.ty(u);
                            c === y || (n ? _(c, f) : _(c, r.ORDER));
                            let p = h(c * c),
                                {
                                    isValid: g,
                                    value: w
                                } = l(h(p - m), h(i * p - o));
                            if (!g) throw Error("Point.fromHex: invalid y coordinate");
                            let v = (w & m) === m,
                                b = (128 & a) != 0;
                            if (!n && w === y && b) throw Error("Point.fromHex: x=0 and x_0=1");
                            return b !== v && (w = h(-w)), O.fromAffine({
                                x: w,
                                y: c
                            })
                        }
                        static fromPrivateKey(t) {
                            return T(t).point
                        }
                        toRawBytes() {
                            let {
                                x: t,
                                y: e
                            } = this.toAffine(), n = d.S5(e, r.BYTES);
                            return n[n.length - 1] |= t & m ? 128 : 0, n
                        }
                        toHex() {
                            return d.ci(this.toRawBytes())
                        }
                    }
                    O.BASE = new O(e.Gx, e.Gy, m, h(e.Gx * e.Gy)), O.ZERO = new O(y, m, m, y);
                    let {
                        BASE: L,
                        ZERO: U
                    } = O, k = (0, p.M)(O, 8 * u);

                    function R(t) {
                        var e;
                        return e = d.ty(t), (0, c.wQ)(e, n)
                    }

                    function T(t) {
                        t = (0, d.ql)("private key", t, u);
                        let e = (0, d.ql)("hashed private key", o(t), 2 * u),
                            r = b(e.slice(0, u)),
                            n = e.slice(u, 2 * u),
                            i = R(r),
                            s = L.multiply(i),
                            a = s.toRawBytes();
                        return {
                            head: r,
                            prefix: n,
                            scalar: i,
                            point: s,
                            pointBytes: a
                        }
                    }

                    function P(t = new Uint8Array, ...e) {
                        return R(o(E(d.eV(...e), (0, d.ql)("context", t), !!i)))
                    }
                    return L._setWindowSize(8), {
                        CURVE: e,
                        getPublicKey: function(t) {
                            return T(t).pointBytes
                        },
                        sign: function(t, e, o = {}) {
                            var s;
                            t = (0, d.ql)("message", t), i && (t = i(t));
                            let {
                                prefix: a,
                                scalar: f,
                                pointBytes: h
                            } = T(e), l = P(o.context, a, t), p = L.multiply(l).toRawBytes(), y = (s = l + P(o.context, p, h, t) * f, (0, c.wQ)(s, n));
                            A(y);
                            let m = d.eV(p, d.S5(y, r.BYTES));
                            return (0, d.ql)("result", m, 2 * u)
                        },
                        verify: function(t, e, n, o = v) {
                            let s, u, a;
                            let {
                                context: f,
                                zip215: h
                            } = o, l = r.BYTES;
                            t = (0, d.ql)("signature", t, 2 * l), e = (0, d.ql)("message", e), i && (e = i(e));
                            let c = d.ty(t.slice(l, 2 * l));
                            try {
                                s = O.fromHex(n, h), u = O.fromHex(t.slice(0, l), h), a = L.multiplyUnsafe(c)
                            } catch (t) {
                                return !1
                            }
                            if (!h && s.isSmallOrder()) return !1;
                            let p = P(f, u.toRawBytes(), s.toRawBytes(), e);
                            return u.add(s.multiplyUnsafe(p)).subtract(a).clearCofactor().equals(O.ZERO)
                        },
                        ExtendedPoint: O,
                        utils: {
                            getExtendedPublicKey: T,
                            randomPrivateKey: () => s(r.BYTES),
                            precompute: (t = 8, e = O.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), e)
                        }
                    }
                }(k);
            ({
                ...k
            });
            let T = (U.ORDER + BigInt(3)) / BigInt(8);

            function P(t) {
                if (!(t instanceof $)) throw Error("RistrettoPoint expected")
            }
            U.pow(B, T), U.sqrt(U.neg(U.ONE)), U.ORDER, BigInt(5), BigInt(8), BigInt(486662), (0, c.DV)(U, U.neg(BigInt(486664)));
            let N = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"),
                j = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"),
                C = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"),
                q = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"),
                F = t => L(M, t),
                Z = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                D = t => R.CURVE.Fp.create(bytesToNumberLE(t) & Z);

            function z(t) {
                let {
                    d: e
                } = R.CURVE, r = R.CURVE.Fp.ORDER, n = R.CURVE.Fp.create, i = n(null * t * t), o = n((i + M) * C), s = BigInt(-1), u = n((s - e * i) * n(i + e)), {
                    isValid: a,
                    value: f
                } = L(o, u), h = n(f * t);
                isNegativeLE(h, r) || (h = n(-h)), a || (f = h), a || (s = i);
                let l = n(s * (i - M) * q - u),
                    c = f * f,
                    d = n((f + f) * u),
                    p = n(l * N),
                    y = n(M - c),
                    m = n(M + c);
                return new R.ExtendedPoint(n(d * m), n(y * p), n(p * m), n(d * y))
            }
            class $ {
                constructor(t) {
                    this.ep = t
                }
                static fromAffine(t) {
                    return new $(R.ExtendedPoint.fromAffine(t))
                }
                static hashToCurve(t) {
                    let e = z(D((t = ensureBytes("ristrettoHash", t, 64)).slice(0, 32))),
                        r = z(D(t.slice(32, 64)));
                    return new $(e.add(r))
                }
                static fromHex(t) {
                    t = ensureBytes("ristrettoHex", t, 32);
                    let {
                        a: e,
                        d: r
                    } = R.CURVE, n = R.CURVE.Fp.ORDER, i = R.CURVE.Fp.create, o = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", s = D(t);
                    if (!equalBytes(numberToBytesLE(s, 32), t) || isNegativeLE(s, n)) throw Error(o);
                    let u = i(s * s),
                        a = i(M + e * u),
                        f = i(M - e * u),
                        h = i(a * a),
                        l = i(f * f),
                        c = i(e * r * h - l),
                        {
                            isValid: d,
                            value: p
                        } = F(i(c * l)),
                        y = i(p * f),
                        m = i(p * y * c),
                        g = i((s + s) * y);
                    isNegativeLE(g, n) && (g = i(-g));
                    let w = i(a * m),
                        v = i(g * w);
                    if (!d || isNegativeLE(v, n) || w === x) throw Error(o);
                    return new $(new R.ExtendedPoint(g, w, M, v))
                }
                toRawBytes() {
                    let t, {
                            ex: e,
                            ey: r,
                            ez: n,
                            et: i
                        } = this.ep,
                        o = R.CURVE.Fp.ORDER,
                        s = R.CURVE.Fp.create,
                        u = s(s(n + r) * s(n - r)),
                        a = s(e * r),
                        f = s(a * a),
                        {
                            value: h
                        } = F(s(u * f)),
                        l = s(h * u),
                        c = s(h * a),
                        d = s(l * c * i);
                    if (isNegativeLE(i * d, o)) {
                        let n = s(null * r),
                            i = s(null * e);
                        e = n, r = i, t = s(l * j)
                    } else t = c;
                    isNegativeLE(e * d, o) && (r = s(-r));
                    let p = s((n - r) * t);
                    return isNegativeLE(p, o) && (p = s(-p)), numberToBytesLE(p, 32)
                }
                toHex() {
                    return bytesToHex(this.toRawBytes())
                }
                toString() {
                    return this.toHex()
                }
                equals(t) {
                    P(t);
                    let {
                        ex: e,
                        ey: r
                    } = this.ep, {
                        ex: n,
                        ey: i
                    } = t.ep, o = R.CURVE.Fp.create, s = o(e * i) === o(r * n), u = o(r * i) === o(e * n);
                    return s || u
                }
                add(t) {
                    return P(t), new $(this.ep.add(t.ep))
                }
                subtract(t) {
                    return P(t), new $(this.ep.subtract(t.ep))
                }
                multiply(t) {
                    return new $(this.ep.multiply(t))
                }
                multiplyUnsafe(t) {
                    return new $(this.ep.multiplyUnsafe(t))
                }
                double() {
                    return new $(this.ep.double())
                }
                negate() {
                    return new $(this.ep.negate())
                }
            }
        },
        79604: function(t, e, r) {
            "use strict";
            r.d(e, {
                kA: function() {
                    return M
                }
            });
            var n = r(89802),
                i = r(52948),
                o = r(15493),
                s = r(32305);
            class u extends s.kb {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, (0, o.vp)(t);
                    let r = (0, s.O0)(e);
                    if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let n = this.blockLen,
                        i = new Uint8Array(n);
                    i.set(r.length > n ? t.create().update(r).digest() : r);
                    for (let t = 0; t < i.length; t++) i[t] ^= 54;
                    this.iHash.update(i), this.oHash = t.create();
                    for (let t = 0; t < i.length; t++) i[t] ^= 106;
                    this.oHash.update(i), i.fill(0)
                }
                update(t) {
                    return (0, o.Gg)(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    (0, o.Gg)(this), (0, o.aI)(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    let t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: e,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: o,
                        outputLen: s
                    } = this;
                    return t.finished = n, t.destroyed = i, t.blockLen = o, t.outputLen = s, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let a = (t, e, r) => new u(t, e).update(r).digest();
            a.create = (t, e) => new u(t, e);
            var f = r(57843),
                h = r(63606);
            let {
                bytesToNumberBE: l,
                hexToBytes: c
            } = f, d = {
                Err: class extends Error {
                    constructor(t = "") {
                        super(t)
                    }
                },
                _parseInt(t) {
                    let {
                        Err: e
                    } = d;
                    if (t.length < 2 || 2 !== t[0]) throw new e("Invalid signature integer tag");
                    let r = t[1],
                        n = t.subarray(2, r + 2);
                    if (!r || n.length !== r) throw new e("Invalid signature integer: wrong length");
                    if (128 & n[0]) throw new e("Invalid signature integer: negative");
                    if (0 === n[0] && !(128 & n[1])) throw new e("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: l(n),
                        l: t.subarray(r + 2)
                    }
                },
                toSig(t) {
                    let {
                        Err: e
                    } = d, r = "string" == typeof t ? c(t) : t;
                    if (!f._t(r)) throw Error("ui8a expected");
                    let n = r.length;
                    if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
                    if (r[1] !== n - 2) throw new e("Invalid signature: incorrect length");
                    let {
                        d: i,
                        l: o
                    } = d._parseInt(r.subarray(2)), {
                        d: s,
                        l: u
                    } = d._parseInt(o);
                    if (u.length) throw new e("Invalid signature: left bytes after parsing");
                    return {
                        r: i,
                        s
                    }
                },
                hexFromSig(t) {
                    let e = t => 8 & Number.parseInt(t[0], 16) ? "00" + t : t,
                        r = t => {
                            let e = t.toString(16);
                            return 1 & e.length ? `0${e}` : e
                        },
                        n = e(r(t.s)),
                        i = e(r(t.r)),
                        o = n.length / 2,
                        s = i.length / 2,
                        u = r(o),
                        a = r(s);
                    return `30${r(s+o+4)}02${a}${i}02${u}${n}`
                }
            }, p = BigInt(0), y = BigInt(1), m = (BigInt(2), BigInt(3));
            BigInt(4); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let g = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                w = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                v = BigInt(1),
                b = BigInt(2),
                E = (t, e) => (t + e / b) / e,
                x = (0, i.gN)(g, void 0, void 0, {
                    sqrt: function(t) {
                        let e = BigInt(3),
                            r = BigInt(6),
                            n = BigInt(11),
                            o = BigInt(22),
                            s = BigInt(23),
                            u = BigInt(44),
                            a = BigInt(88),
                            f = t * t * t % g,
                            h = f * f * t % g,
                            l = (0, i.oA)(h, e, g) * h % g,
                            c = (0, i.oA)(l, e, g) * h % g,
                            d = (0, i.oA)(c, b, g) * f % g,
                            p = (0, i.oA)(d, n, g) * d % g,
                            y = (0, i.oA)(p, o, g) * p % g,
                            m = (0, i.oA)(y, u, g) * y % g,
                            w = (0, i.oA)(m, a, g) * m % g,
                            v = (0, i.oA)(w, u, g) * y % g,
                            E = (0, i.oA)(v, e, g) * h % g,
                            M = (0, i.oA)(E, s, g) * p % g,
                            B = (0, i.oA)(M, r, g) * f % g,
                            _ = (0, i.oA)(B, b, g);
                        if (!x.eql(x.sqr(_), t)) throw Error("Cannot find square root");
                        return _
                    }
                }),
                M = function(t, e) {
                    let r = e => (function(t) {
                        let e = function(t) {
                                let e = (0, h.K)(t);
                                return f.FF(e, {
                                    hash: "hash",
                                    hmac: "function",
                                    randomBytes: "function"
                                }, {
                                    bits2int: "function",
                                    bits2int_modN: "function",
                                    lowS: "boolean"
                                }), Object.freeze({
                                    lowS: !0,
                                    ...e
                                })
                            }(t),
                            {
                                Fp: r,
                                n: n
                            } = e,
                            o = r.BYTES + 1,
                            s = 2 * r.BYTES + 1;

                        function u(t) {
                            return i.wQ(t, n)
                        }

                        function a(t) {
                            return i.U_(t, n)
                        }
                        let {
                            ProjectivePoint: l,
                            normPrivateKeyToScalar: c,
                            weierstrassEquation: g,
                            isWithinCurveOrder: w
                        } = function(t) {
                            let e = /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function(t) {
                                    let e = (0, h.K)(t);
                                    f.FF(e, {
                                        a: "field",
                                        b: "field"
                                    }, {
                                        allowedPrivateKeyLengths: "array",
                                        wrapPrivateKey: "boolean",
                                        isTorsionFree: "function",
                                        clearCofactor: "function",
                                        allowInfinityPoint: "boolean",
                                        fromBytes: "function",
                                        toBytes: "function"
                                    });
                                    let {
                                        endo: r,
                                        Fp: n,
                                        a: i
                                    } = e;
                                    if (r) {
                                        if (!n.eql(i, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                                        if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                                    }
                                    return Object.freeze({
                                        ...e
                                    })
                                }(t),
                                {
                                    Fp: r
                                } = e,
                                n = e.toBytes || ((t, e, n) => {
                                    let i = e.toAffine();
                                    return f.eV(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
                                }),
                                o = e.fromBytes || (t => {
                                    let e = t.subarray(1);
                                    return {
                                        x: r.fromBytes(e.subarray(0, r.BYTES)),
                                        y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES))
                                    }
                                });

                            function s(t) {
                                let {
                                    a: n,
                                    b: i
                                } = e, o = r.sqr(t), s = r.mul(o, t);
                                return r.add(r.add(s, r.mul(t, n)), i)
                            }
                            if (!r.eql(r.sqr(e.Gy), s(e.Gx))) throw Error("bad generator point: equation left != right");

                            function u(t) {
                                return "bigint" == typeof t && p < t && t < e.n
                            }

                            function a(t) {
                                if (!u(t)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
                            }

                            function l(t) {
                                let r;
                                let {
                                    allowedPrivateKeyLengths: n,
                                    nByteLength: o,
                                    wrapPrivateKey: s,
                                    n: u
                                } = e;
                                if (n && "bigint" != typeof t) {
                                    if (f._t(t) && (t = f.ci(t)), "string" != typeof t || !n.includes(t.length)) throw Error("Invalid key");
                                    t = t.padStart(2 * o, "0")
                                }
                                try {
                                    r = "bigint" == typeof t ? t : f.bytesToNumberBE((0, f.ql)("private key", t, o))
                                } catch (e) {
                                    throw Error(`private key must be ${o} bytes, hex or bigint, not ${typeof t}`)
                                }
                                return s && (r = i.wQ(r, u)), a(r), r
                            }
                            let c = new Map;

                            function d(t) {
                                if (!(t instanceof g)) throw Error("ProjectivePoint expected")
                            }
                            class g {
                                constructor(t, e, n) {
                                    if (this.px = t, this.py = e, this.pz = n, null == t || !r.isValid(t)) throw Error("x required");
                                    if (null == e || !r.isValid(e)) throw Error("y required");
                                    if (null == n || !r.isValid(n)) throw Error("z required")
                                }
                                static fromAffine(t) {
                                    let {
                                        x: e,
                                        y: n
                                    } = t || {};
                                    if (!t || !r.isValid(e) || !r.isValid(n)) throw Error("invalid affine point");
                                    if (t instanceof g) throw Error("projective point not allowed");
                                    let i = t => r.eql(t, r.ZERO);
                                    return i(e) && i(n) ? g.ZERO : new g(e, n, r.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                static normalizeZ(t) {
                                    let e = r.invertBatch(t.map(t => t.pz));
                                    return t.map((t, r) => t.toAffine(e[r])).map(g.fromAffine)
                                }
                                static fromHex(t) {
                                    let e = g.fromAffine(o((0, f.ql)("pointHex", t)));
                                    return e.assertValidity(), e
                                }
                                static fromPrivateKey(t) {
                                    return g.BASE.multiply(l(t))
                                }
                                _setWindowSize(t) {
                                    this._WINDOW_SIZE = t, c.delete(this)
                                }
                                assertValidity() {
                                    if (this.is0()) {
                                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: t,
                                        y: n
                                    } = this.toAffine();
                                    if (!r.isValid(t) || !r.isValid(n)) throw Error("bad point: x or y not FE");
                                    let i = r.sqr(n),
                                        o = s(t);
                                    if (!r.eql(i, o)) throw Error("bad point: equation left != right");
                                    if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
                                }
                                hasEvenY() {
                                    let {
                                        y: t
                                    } = this.toAffine();
                                    if (r.isOdd) return !r.isOdd(t);
                                    throw Error("Field doesn't support isOdd")
                                }
                                equals(t) {
                                    d(t);
                                    let {
                                        px: e,
                                        py: n,
                                        pz: i
                                    } = this, {
                                        px: o,
                                        py: s,
                                        pz: u
                                    } = t, a = r.eql(r.mul(e, u), r.mul(o, i)), f = r.eql(r.mul(n, u), r.mul(s, i));
                                    return a && f
                                }
                                negate() {
                                    return new g(this.px, r.neg(this.py), this.pz)
                                }
                                double() {
                                    let {
                                        a: t,
                                        b: n
                                    } = e, i = r.mul(n, m), {
                                        px: o,
                                        py: s,
                                        pz: u
                                    } = this, a = r.ZERO, f = r.ZERO, h = r.ZERO, l = r.mul(o, o), c = r.mul(s, s), d = r.mul(u, u), p = r.mul(o, s);
                                    return p = r.add(p, p), h = r.mul(o, u), h = r.add(h, h), a = r.mul(t, h), f = r.mul(i, d), f = r.add(a, f), a = r.sub(c, f), f = r.add(c, f), f = r.mul(a, f), a = r.mul(p, a), h = r.mul(i, h), d = r.mul(t, d), p = r.sub(l, d), p = r.mul(t, p), p = r.add(p, h), h = r.add(l, l), l = r.add(h, l), l = r.add(l, d), l = r.mul(l, p), f = r.add(f, l), d = r.mul(s, u), d = r.add(d, d), l = r.mul(d, p), a = r.sub(a, l), h = r.mul(d, c), h = r.add(h, h), new g(a, f, h = r.add(h, h))
                                }
                                add(t) {
                                    d(t);
                                    let {
                                        px: n,
                                        py: i,
                                        pz: o
                                    } = this, {
                                        px: s,
                                        py: u,
                                        pz: a
                                    } = t, f = r.ZERO, h = r.ZERO, l = r.ZERO, c = e.a, p = r.mul(e.b, m), y = r.mul(n, s), w = r.mul(i, u), v = r.mul(o, a), b = r.add(n, i), E = r.add(s, u);
                                    b = r.mul(b, E), E = r.add(y, w), b = r.sub(b, E), E = r.add(n, o);
                                    let x = r.add(s, a);
                                    return E = r.mul(E, x), x = r.add(y, v), E = r.sub(E, x), x = r.add(i, o), f = r.add(u, a), x = r.mul(x, f), f = r.add(w, v), x = r.sub(x, f), l = r.mul(c, E), f = r.mul(p, v), l = r.add(f, l), f = r.sub(w, l), l = r.add(w, l), h = r.mul(f, l), w = r.add(y, y), w = r.add(w, y), v = r.mul(c, v), E = r.mul(p, E), w = r.add(w, v), v = r.sub(y, v), v = r.mul(c, v), E = r.add(E, v), y = r.mul(w, E), h = r.add(h, y), y = r.mul(x, E), f = r.mul(b, f), f = r.sub(f, y), y = r.mul(b, w), l = r.mul(x, l), new g(f, h, l = r.add(l, y))
                                }
                                subtract(t) {
                                    return this.add(t.negate())
                                }
                                is0() {
                                    return this.equals(g.ZERO)
                                }
                                wNAF(t) {
                                    return v.wNAFCached(this, c, t, t => {
                                        let e = r.invertBatch(t.map(t => t.pz));
                                        return t.map((t, r) => t.toAffine(e[r])).map(g.fromAffine)
                                    })
                                }
                                multiplyUnsafe(t) {
                                    let n = g.ZERO;
                                    if (t === p) return n;
                                    if (a(t), t === y) return this;
                                    let {
                                        endo: i
                                    } = e;
                                    if (!i) return v.unsafeLadder(this, t);
                                    let {
                                        k1neg: o,
                                        k1: s,
                                        k2neg: u,
                                        k2: f
                                    } = i.splitScalar(t), h = n, l = n, c = this;
                                    for (; s > p || f > p;) s & y && (h = h.add(c)), f & y && (l = l.add(c)), c = c.double(), s >>= y, f >>= y;
                                    return o && (h = h.negate()), u && (l = l.negate()), l = new g(r.mul(l.px, i.beta), l.py, l.pz), h.add(l)
                                }
                                multiply(t) {
                                    let n, i;
                                    a(t);
                                    let {
                                        endo: o
                                    } = e;
                                    if (o) {
                                        let {
                                            k1neg: e,
                                            k1: s,
                                            k2neg: u,
                                            k2: a
                                        } = o.splitScalar(t), {
                                            p: f,
                                            f: h
                                        } = this.wNAF(s), {
                                            p: l,
                                            f: c
                                        } = this.wNAF(a);
                                        f = v.constTimeNegate(e, f), l = v.constTimeNegate(u, l), l = new g(r.mul(l.px, o.beta), l.py, l.pz), n = f.add(l), i = h.add(c)
                                    } else {
                                        let {
                                            p: e,
                                            f: r
                                        } = this.wNAF(t);
                                        n = e, i = r
                                    }
                                    return g.normalizeZ([n, i])[0]
                                }
                                multiplyAndAddUnsafe(t, e, r) {
                                    let n = g.BASE,
                                        i = (t, e) => e !== p && e !== y && t.equals(n) ? t.multiply(e) : t.multiplyUnsafe(e),
                                        o = i(this, e).add(i(t, r));
                                    return o.is0() ? void 0 : o
                                }
                                toAffine(t) {
                                    let {
                                        px: e,
                                        py: n,
                                        pz: i
                                    } = this, o = this.is0();
                                    null == t && (t = o ? r.ONE : r.inv(i));
                                    let s = r.mul(e, t),
                                        u = r.mul(n, t),
                                        a = r.mul(i, t);
                                    if (o) return {
                                        x: r.ZERO,
                                        y: r.ZERO
                                    };
                                    if (!r.eql(a, r.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: s,
                                        y: u
                                    }
                                }
                                isTorsionFree() {
                                    let {
                                        h: t,
                                        isTorsionFree: r
                                    } = e;
                                    if (t === y) return !0;
                                    if (r) return r(g, this);
                                    throw Error("isTorsionFree() has not been declared for the elliptic curve")
                                }
                                clearCofactor() {
                                    let {
                                        h: t,
                                        clearCofactor: r
                                    } = e;
                                    return t === y ? this : r ? r(g, this) : this.multiplyUnsafe(e.h)
                                }
                                toRawBytes(t = !0) {
                                    return this.assertValidity(), n(g, this, t)
                                }
                                toHex(t = !0) {
                                    return f.ci(this.toRawBytes(t))
                                }
                            }
                            g.BASE = new g(e.Gx, e.Gy, r.ONE), g.ZERO = new g(r.ZERO, r.ONE, r.ZERO);
                            let w = e.nBitLength,
                                v = (0, h.M)(g, e.endo ? Math.ceil(w / 2) : w);
                            return {
                                CURVE: e,
                                ProjectivePoint: g,
                                normPrivateKeyToScalar: l,
                                weierstrassEquation: s,
                                isWithinCurveOrder: u
                            }
                        }({
                            ...e,
                            toBytes(t, e, n) {
                                let i = e.toAffine(),
                                    o = r.toBytes(i.x),
                                    s = f.eV;
                                return n ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o) : s(Uint8Array.from([4]), o, r.toBytes(i.y))
                            },
                            fromBytes(t) {
                                let e = t.length,
                                    n = t[0],
                                    i = t.subarray(1);
                                if (e === o && (2 === n || 3 === n)) {
                                    let t = f.bytesToNumberBE(i);
                                    if (!(p < t && t < r.ORDER)) throw Error("Point is not on curve");
                                    let e = g(t),
                                        o = r.sqrt(e);
                                    return (1 & n) == 1 != ((o & y) === y) && (o = r.neg(o)), {
                                        x: t,
                                        y: o
                                    }
                                }
                                if (e === s && 4 === n) return {
                                    x: r.fromBytes(i.subarray(0, r.BYTES)),
                                    y: r.fromBytes(i.subarray(r.BYTES, 2 * r.BYTES))
                                };
                                throw Error(`Point of length ${e} was invalid. Expected ${o} compressed bytes or ${s} uncompressed bytes`)
                            }
                        }), v = t => f.ci(f.tL(t, e.nByteLength)), b = (t, e, r) => f.bytesToNumberBE(t.slice(e, r));
                        class E {
                            constructor(t, e, r) {
                                this.r = t, this.s = e, this.recovery = r, this.assertValidity()
                            }
                            static fromCompact(t) {
                                let r = e.nByteLength;
                                return new E(b(t = (0, f.ql)("compactSignature", t, 2 * r), 0, r), b(t, r, 2 * r))
                            }
                            static fromDER(t) {
                                let {
                                    r: e,
                                    s: r
                                } = d.toSig((0, f.ql)("DER", t));
                                return new E(e, r)
                            }
                            assertValidity() {
                                if (!w(this.r)) throw Error("r must be 0 < r < CURVE.n");
                                if (!w(this.s)) throw Error("s must be 0 < s < CURVE.n")
                            }
                            addRecoveryBit(t) {
                                return new E(this.r, this.s, t)
                            }
                            recoverPublicKey(t) {
                                let {
                                    r: n,
                                    s: i,
                                    recovery: o
                                } = this, s = B((0, f.ql)("msgHash", t));
                                if (null == o || ![0, 1, 2, 3].includes(o)) throw Error("recovery id invalid");
                                let h = 2 === o || 3 === o ? n + e.n : n;
                                if (h >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                                let c = (1 & o) == 0 ? "02" : "03",
                                    d = l.fromHex(c + v(h)),
                                    p = a(h),
                                    y = u(-s * p),
                                    m = u(i * p),
                                    g = l.BASE.multiplyAndAddUnsafe(d, y, m);
                                if (!g) throw Error("point at infinify");
                                return g.assertValidity(), g
                            }
                            hasHighS() {
                                return this.s > n >> y
                            }
                            normalizeS() {
                                return this.hasHighS() ? new E(this.r, u(-this.s), this.recovery) : this
                            }
                            toDERRawBytes() {
                                return f.hexToBytes(this.toDERHex())
                            }
                            toDERHex() {
                                return d.hexFromSig({
                                    r: this.r,
                                    s: this.s
                                })
                            }
                            toCompactRawBytes() {
                                return f.hexToBytes(this.toCompactHex())
                            }
                            toCompactHex() {
                                return v(this.r) + v(this.s)
                            }
                        }

                        function x(t) {
                            let e = f._t(t),
                                r = "string" == typeof t,
                                n = (e || r) && t.length;
                            return e ? n === o || n === s : r ? n === 2 * o || n === 2 * s : t instanceof l
                        }
                        let M = e.bits2int || function(t) {
                                let r = f.bytesToNumberBE(t),
                                    n = 8 * t.length - e.nBitLength;
                                return n > 0 ? r >> BigInt(n) : r
                            },
                            B = e.bits2int_modN || function(t) {
                                return u(M(t))
                            },
                            _ = f.dQ(e.nBitLength);

                        function A(t) {
                            if ("bigint" != typeof t) throw Error("bigint expected");
                            if (!(p <= t && t < _)) throw Error(`bigint expected < 2^${e.nBitLength}`);
                            return f.tL(t, e.nByteLength)
                        }
                        let I = {
                                lowS: e.lowS,
                                prehash: !1
                            },
                            S = {
                                lowS: e.lowS,
                                prehash: !1
                            };
                        return l.BASE._setWindowSize(8), {
                            CURVE: e,
                            getPublicKey: function(t, e = !0) {
                                return l.fromPrivateKey(t).toRawBytes(e)
                            },
                            getSharedSecret: function(t, e, r = !0) {
                                if (x(t)) throw Error("first arg must be private key");
                                if (!x(e)) throw Error("second arg must be public key");
                                return l.fromHex(e).multiply(c(t)).toRawBytes(r)
                            },
                            sign: function(t, i, o = I) {
                                let {
                                    seed: s,
                                    k2sig: h
                                } = function(t, i, o = I) {
                                    if (["recovered", "canonical"].some(t => t in o)) throw Error("sign() legacy options not supported");
                                    let {
                                        hash: s,
                                        randomBytes: h
                                    } = e, {
                                        lowS: d,
                                        prehash: m,
                                        extraEntropy: g
                                    } = o;
                                    null == d && (d = !0), t = (0, f.ql)("msgHash", t), m && (t = (0, f.ql)("prehashed msgHash", s(t)));
                                    let v = B(t),
                                        b = c(i),
                                        x = [A(b), A(v)];
                                    if (null != g) {
                                        let t = !0 === g ? h(r.BYTES) : g;
                                        x.push((0, f.ql)("extraEntropy", t))
                                    }
                                    return {
                                        seed: f.eV(...x),
                                        k2sig: function(t) {
                                            let e = M(t);
                                            if (!w(e)) return;
                                            let r = a(e),
                                                i = l.BASE.multiply(e).toAffine(),
                                                o = u(i.x);
                                            if (o === p) return;
                                            let s = u(r * u(v + o * b));
                                            if (s === p) return;
                                            let f = (i.x === o ? 0 : 2) | Number(i.y & y),
                                                h = s;
                                            if (d && s > n >> y) h = s > n >> y ? u(-s) : s, f ^= 1;
                                            return new E(o, h, f)
                                        }
                                    }
                                }(t, i, o);
                                return f.n$(e.hash.outputLen, e.nByteLength, e.hmac)(s, h)
                            },
                            verify: function(t, r, n, i = S) {
                                let o, s;
                                if (r = (0, f.ql)("msgHash", r), n = (0, f.ql)("publicKey", n), "strict" in i) throw Error("options.strict was renamed to lowS");
                                let {
                                    lowS: h,
                                    prehash: c
                                } = i;
                                try {
                                    if ("string" == typeof t || f._t(t)) try {
                                        s = E.fromDER(t)
                                    } catch (e) {
                                        if (!(e instanceof d.Err)) throw e;
                                        s = E.fromCompact(t)
                                    } else if ("object" == typeof t && "bigint" == typeof t.r && "bigint" == typeof t.s) {
                                        let {
                                            r: e,
                                            s: r
                                        } = t;
                                        s = new E(e, r)
                                    } else throw Error("PARSE");
                                    o = l.fromHex(n)
                                } catch (t) {
                                    if ("PARSE" === t.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                                    return !1
                                }
                                if (h && s.hasHighS()) return !1;
                                c && (r = e.hash(r));
                                let {
                                    r: p,
                                    s: y
                                } = s, m = B(r), g = a(y), w = u(m * g), v = u(p * g), b = l.BASE.multiplyAndAddUnsafe(o, w, v)?.toAffine();
                                return !!b && u(b.x) === p
                            },
                            ProjectivePoint: l,
                            Signature: E,
                            utils: {
                                isValidPrivateKey(t) {
                                    try {
                                        return c(t), !0
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                normPrivateKeyToScalar: c,
                                randomPrivateKey: () => {
                                    let t = i.PS(e.n);
                                    return i.Us(e.randomBytes(t), e.n)
                                },
                                precompute: (t = 8, e = l.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), e)
                            }
                        }
                    })({
                        ...t,
                        hash: e,
                        hmac: (t, ...r) => a(e, t, (0, s.eV)(...r)),
                        randomBytes: s.O6
                    });
                    return Object.freeze({
                        ...r(e),
                        create: r
                    })
                }({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: x,
                    n: w,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: t => {
                            let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                r = -v * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                o = BigInt("0x100000000000000000000000000000000"),
                                s = E(e * t, w),
                                u = E(-r * t, w),
                                a = (0, i.wQ)(t - s * e - u * n, w),
                                f = (0, i.wQ)(-s * r - u * e, w),
                                h = a > o,
                                l = f > o;
                            if (h && (a = w - a), l && (f = w - f), a > o || f > o) throw Error("splitScalar: Endomorphism failed, k=" + t);
                            return {
                                k1neg: h,
                                k1: a,
                                k2neg: l,
                                k2: f
                            }
                        }
                    }
                }, n.J);
            BigInt(0), M.ProjectivePoint
        },
        15493: function(t, e, r) {
            "use strict";

            function n(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw Error(`Wrong positive integer: ${t}`)
            }

            function i(t, ...e) {
                if (!(t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name)) throw Error("Expected Uint8Array");
                if (e.length > 0 && !e.includes(t.length)) throw Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
            }

            function o(t) {
                if ("function" != typeof t || "function" != typeof t.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                n(t.outputLen), n(t.blockLen)
            }

            function s(t, e = !0) {
                if (t.destroyed) throw Error("Hash instance has been destroyed");
                if (e && t.finished) throw Error("Hash#digest() has already been called")
            }

            function u(t, e) {
                i(t);
                let r = e.outputLen;
                if (t.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            r.d(e, {
                Gg: function() {
                    return s
                },
                J8: function() {
                    return u
                },
                Rx: function() {
                    return n
                },
                aI: function() {
                    return i
                },
                vp: function() {
                    return o
                }
            })
        },
        4727: function(t, e, r) {
            "use strict";
            r.d(e, {
                N: function() {
                    return o
                }
            });
            var n = r(15493),
                i = r(32305);
            class o extends i.kb {
                constructor(t, e, r, n) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, i.GL)(this.buffer)
                }
                update(t) {
                    (0, n.Gg)(this);
                    let {
                        view: e,
                        buffer: r,
                        blockLen: o
                    } = this, s = (t = (0, i.O0)(t)).length;
                    for (let n = 0; n < s;) {
                        let u = Math.min(o - this.pos, s - n);
                        if (u === o) {
                            let e = (0, i.GL)(t);
                            for (; o <= s - n; n += o) this.process(e, n);
                            continue
                        }
                        r.set(t.subarray(n, n + u), this.pos), this.pos += u, n += u, this.pos === o && (this.process(e, 0), this.pos = 0)
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    (0, n.Gg)(this), (0, n.J8)(t, this), this.finished = !0;
                    let {
                        buffer: e,
                        view: r,
                        blockLen: o,
                        isLE: s
                    } = this, {
                        pos: u
                    } = this;
                    e[u++] = 128, this.buffer.subarray(u).fill(0), this.padOffset > o - u && (this.process(r, 0), u = 0);
                    for (let t = u; t < o; t++) e[t] = 0;
                    ! function(t, e, r, n) {
                        if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, n);
                        let i = BigInt(32),
                            o = BigInt(4294967295),
                            s = Number(r >> i & o),
                            u = Number(r & o),
                            a = n ? 4 : 0,
                            f = n ? 0 : 4;
                        t.setUint32(e + a, s, n), t.setUint32(e + f, u, n)
                    }(r, o - 8, BigInt(8 * this.length), s), this.process(r, 0);
                    let a = (0, i.GL)(t),
                        f = this.outputLen;
                    if (f % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let h = f / 4,
                        l = this.get();
                    if (h > l.length) throw Error("_sha2: outputLen bigger than state");
                    for (let t = 0; t < h; t++) a.setUint32(4 * t, l[t], s)
                }
                digest() {
                    let {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    let r = t.slice(0, e);
                    return this.destroy(), r
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    let {
                        blockLen: e,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: s
                    } = this;
                    return t.length = n, t.pos = s, t.finished = i, t.destroyed = o, n % e && t.buffer.set(r), t
                }
            }
        },
        10606: function(t, e, r) {
            "use strict";
            r.d(e, {
                EP: function() {
                    return u
                },
                SD: function() {
                    return f
                },
                Vl: function() {
                    return s
                },
                gm: function() {
                    return a
                },
                mk: function() {
                    return h
                }
            });
            let n = BigInt(4294967296 - 1),
                i = BigInt(32);

            function o(t, e = !1) {
                return e ? {
                    h: Number(t & n),
                    l: Number(t >> i & n)
                } : {
                    h: 0 | Number(t >> i & n),
                    l: 0 | Number(t & n)
                }
            }

            function s(t, e = !1) {
                let r = new Uint32Array(t.length),
                    n = new Uint32Array(t.length);
                for (let i = 0; i < t.length; i++) {
                    let {
                        h: s,
                        l: u
                    } = o(t[i], e);
                    [r[i], n[i]] = [s, u]
                }
                return [r, n]
            }
            let u = (t, e, r) => t << r | e >>> 32 - r,
                a = (t, e, r) => e << r | t >>> 32 - r,
                f = (t, e, r) => e << r - 32 | t >>> 64 - r,
                h = (t, e, r) => t << r - 32 | e >>> 64 - r;
            e.ZP = {
                fromBig: o,
                split: s,
                toBig: (t, e) => BigInt(t >>> 0) << i | BigInt(e >>> 0),
                shrSH: (t, e, r) => t >>> r,
                shrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrSH: (t, e, r) => t >>> r | e << 32 - r,
                rotrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrBH: (t, e, r) => t << 64 - r | e >>> r - 32,
                rotrBL: (t, e, r) => t >>> r - 32 | e << 64 - r,
                rotr32H: (t, e) => e,
                rotr32L: (t, e) => t,
                rotlSH: u,
                rotlSL: a,
                rotlBH: f,
                rotlBL: h,
                add: function(t, e, r, n) {
                    let i = (e >>> 0) + (n >>> 0);
                    return {
                        h: t + r + (i / 4294967296 | 0) | 0,
                        l: 0 | i
                    }
                },
                add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
                add3H: (t, e, r, n) => e + r + n + (t / 4294967296 | 0) | 0,
                add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
                add4H: (t, e, r, n, i) => e + r + n + i + (t / 4294967296 | 0) | 0,
                add5H: (t, e, r, n, i, o) => e + r + n + i + o + (t / 4294967296 | 0) | 0,
                add5L: (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
            }
        },
        89802: function(t, e, r) {
            "use strict";
            r.d(e, {
                J: function() {
                    return l
                }
            });
            var n = r(4727),
                i = r(32305);
            let o = (t, e, r) => t & e ^ ~t & r,
                s = (t, e, r) => t & e ^ t & r ^ e & r,
                u = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                a = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                f = new Uint32Array(64);
            class h extends n.N {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | a[0], this.B = 0 | a[1], this.C = 0 | a[2], this.D = 0 | a[3], this.E = 0 | a[4], this.F = 0 | a[5], this.G = 0 | a[6], this.H = 0 | a[7]
                }
                get() {
                    let {
                        A: t,
                        B: e,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: s,
                        H: u
                    } = this;
                    return [t, e, r, n, i, o, s, u]
                }
                set(t, e, r, n, i, o, s, u) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | u
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) f[r] = t.getUint32(e, !1);
                    for (let t = 16; t < 64; t++) {
                        let e = f[t - 15],
                            r = f[t - 2],
                            n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ e >>> 3,
                            o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ r >>> 10;
                        f[t] = o + f[t - 7] + n + f[t - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: a,
                        D: h,
                        E: l,
                        F: c,
                        G: d,
                        H: p
                    } = this;
                    for (let t = 0; t < 64; t++) {
                        let e = p + ((0, i.np)(l, 6) ^ (0, i.np)(l, 11) ^ (0, i.np)(l, 25)) + o(l, c, d) + u[t] + f[t] | 0,
                            y = ((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) + s(r, n, a) | 0;
                        p = d, d = c, c = l, l = h + e | 0, h = a, a = n, n = r, r = e + y | 0
                    }
                    r = r + this.A | 0, n = n + this.B | 0, a = a + this.C | 0, h = h + this.D | 0, l = l + this.E | 0, c = c + this.F | 0, d = d + this.G | 0, p = p + this.H | 0, this.set(r, n, a, h, l, c, d, p)
                }
                roundClean() {
                    f.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let l = (0, i.hE)(() => new h)
        },
        49658: function(t, e, r) {
            "use strict";
            r.d(e, {
                fr: function() {
                    return b
                }
            });
            var n = r(15493),
                i = r(10606),
                o = r(32305);
            let [s, u, a] = [
                [],
                [],
                []
            ], f = BigInt(0), h = BigInt(1), l = BigInt(2), c = BigInt(7), d = BigInt(256), p = BigInt(113);
            for (let t = 0, e = h, r = 1, n = 0; t < 24; t++) {
                [r, n] = [n, (2 * r + 3 * n) % 5], s.push(2 * (5 * n + r)), u.push((t + 1) * (t + 2) / 2 % 64);
                let i = f;
                for (let t = 0; t < 7; t++)(e = (e << h ^ (e >> c) * p) % d) & l && (i ^= h << (h << BigInt(t)) - h);
                a.push(i)
            }
            let [y, m] = (0, i.Vl)(a, !0), g = (t, e, r) => r > 32 ? (0, i.SD)(t, e, r) : (0, i.EP)(t, e, r), w = (t, e, r) => r > 32 ? (0, i.mk)(t, e, r) : (0, i.gm)(t, e, r);
            class v extends o.kb {
                constructor(t, e, r, i = !1, s = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, n.Rx)(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, o.Jq)(this.state)
                }
                keccak() {
                    ! function(t, e = 24) {
                        let r = new Uint32Array(10);
                        for (let n = 24 - e; n < 24; n++) {
                            for (let e = 0; e < 10; e++) r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                            for (let e = 0; e < 10; e += 2) {
                                let n = (e + 8) % 10,
                                    i = (e + 2) % 10,
                                    o = r[i],
                                    s = r[i + 1],
                                    u = g(o, s, 1) ^ r[n],
                                    a = w(o, s, 1) ^ r[n + 1];
                                for (let r = 0; r < 50; r += 10) t[e + r] ^= u, t[e + r + 1] ^= a
                            }
                            let e = t[2],
                                i = t[3];
                            for (let r = 0; r < 24; r++) {
                                let n = u[r],
                                    o = g(e, i, n),
                                    a = w(e, i, n),
                                    f = s[r];
                                e = t[f], i = t[f + 1], t[f] = o, t[f + 1] = a
                            }
                            for (let e = 0; e < 50; e += 10) {
                                for (let n = 0; n < 10; n++) r[n] = t[e + n];
                                for (let n = 0; n < 10; n++) t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                            }
                            t[0] ^= y[n], t[1] ^= m[n]
                        }
                        r.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    (0, n.Gg)(this);
                    let {
                        blockLen: e,
                        state: r
                    } = this, i = (t = (0, o.O0)(t)).length;
                    for (let n = 0; n < i;) {
                        let o = Math.min(e - this.pos, i - n);
                        for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
                        this.pos === e && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: t,
                        suffix: e,
                        pos: r,
                        blockLen: n
                    } = this;
                    t[r] ^= e, (128 & e) != 0 && r === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    (0, n.Gg)(this, !1), (0, n.aI)(t), this.finish();
                    let e = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let n = 0, i = t.length; n < i;) {
                        this.posOut >= r && this.keccak();
                        let o = Math.min(r - this.posOut, i - n);
                        t.set(e.subarray(this.posOut, this.posOut + o), n), this.posOut += o, n += o
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return (0, n.Rx)(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if ((0, n.J8)(t, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(t), this.destroy(), t
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(t) {
                    let {
                        blockLen: e,
                        suffix: r,
                        outputLen: n,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return t || (t = new v(e, r, n, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = n, t.enableXOF = o, t.destroyed = this.destroyed, t
                }
            }
            let b = (0, o.hE)(() => new v(136, 1, 32))
        },
        32305: function(t, e, r) {
            "use strict";
            r.d(e, {
                kb: function() {
                    return l
                },
                eV: function() {
                    return h
                },
                GL: function() {
                    return s
                },
                O6: function() {
                    return d
                },
                np: function() {
                    return u
                },
                O0: function() {
                    return f
                },
                Jq: function() {
                    return i
                },
                iY: function() {
                    return a
                },
                hE: function() {
                    return c
                }
            });
            let n = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
                i = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));

            function o(t) {
                return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name
            }
            let s = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
                u = (t, e) => t << 32 - e | t >>> e;
            if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");

            function a(t) {
                if ("string" != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
                return new Uint8Array(new TextEncoder().encode(t))
            }

            function f(t) {
                if ("string" == typeof t && (t = a(t)), !o(t)) throw Error(`expected Uint8Array, got ${typeof t}`);
                return t
            }

            function h(...t) {
                let e = 0;
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    if (!o(n)) throw Error("Uint8Array expected");
                    e += n.length
                }
                let r = new Uint8Array(e);
                for (let e = 0, n = 0; e < t.length; e++) {
                    let i = t[e];
                    r.set(i, n), n += i.length
                }
                return r
            }
            class l {
                clone() {
                    return this._cloneInto()
                }
            }

            function c(t) {
                let e = e => t().update(f(e)).digest(),
                    r = t();
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e
            }

            function d(t = 32) {
                if (n && "function" == typeof n.getRandomValues) return n.getRandomValues(new Uint8Array(t));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        72086: function(t, e, r) {
            "use strict";
            r.d(e, {
                R: function() {
                    return o
                },
                h: function() {
                    return i
                }
            });
            var n = r(2265);
            let i = (0, n.createContext)({});

            function o() {
                return (0, n.useContext)(i)
            }
        },
        79198: function(t, e, r) {
            "use strict";
            r.d(e, {
                j: function() {
                    return o
                }
            });
            var n = r(42996),
                i = r(40300),
                o = new class extends n.l {
                    #t;
                    #e;
                    #r;
                    constructor() {
                        super(), this.#r = t => {
                            if (!i.sk && window.addEventListener) {
                                let e = () => t();
                                return window.addEventListener("visibilitychange", e, !1), () => {
                                    window.removeEventListener("visibilitychange", e)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#r)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e?.(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#r = t, this.#e?.(), this.#e = t(t => {
                            "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                        })
                    }
                    setFocused(t) {
                        this.#t !== t && (this.#t = t, this.onFocus())
                    }
                    onFocus() {
                        this.listeners.forEach(t => {
                            t()
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.#t ? this.#t : globalThis.document?.visibilityState !== "hidden"
                    }
                }
        },
        17987: function(t, e, r) {
            "use strict";
            r.d(e, {
                V: function() {
                    return n
                }
            });
            var n = function() {
                let t = [],
                    e = 0,
                    r = t => {
                        t()
                    },
                    n = t => {
                        t()
                    },
                    i = t => setTimeout(t, 0),
                    o = n => {
                        e ? t.push(n) : i(() => {
                            r(n)
                        })
                    },
                    s = () => {
                        let e = t;
                        t = [], e.length && i(() => {
                            n(() => {
                                e.forEach(t => {
                                    r(t)
                                })
                            })
                        })
                    };
                return {
                    batch: t => {
                        let r;
                        e++;
                        try {
                            r = t()
                        } finally {
                            --e || s()
                        }
                        return r
                    },
                    batchCalls: t => (...e) => {
                        o(() => {
                            t(...e)
                        })
                    },
                    schedule: o,
                    setNotifyFunction: t => {
                        r = t
                    },
                    setBatchNotifyFunction: t => {
                        n = t
                    },
                    setScheduler: t => {
                        i = t
                    }
                }
            }()
        },
        20436: function(t, e, r) {
            "use strict";
            r.d(e, {
                N: function() {
                    return o
                }
            });
            var n = r(42996),
                i = r(40300),
                o = new class extends n.l {
                    #n = !0;
                    #e;
                    #r;
                    constructor() {
                        super(), this.#r = t => {
                            if (!i.sk && window.addEventListener) {
                                let e = () => t(!0),
                                    r = () => t(!1);
                                return window.addEventListener("online", e, !1), window.addEventListener("offline", r, !1), () => {
                                    window.removeEventListener("online", e), window.removeEventListener("offline", r)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#r)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e?.(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#r = t, this.#e?.(), this.#e = t(this.setOnline.bind(this))
                    }
                    setOnline(t) {
                        this.#n !== t && (this.#n = t, this.listeners.forEach(e => {
                            e(t)
                        }))
                    }
                    isOnline() {
                        return this.#n
                    }
                }
        },
        11640: function(t, e, r) {
            "use strict";
            r.d(e, {
                DV: function() {
                    return f
                },
                Kw: function() {
                    return u
                },
                Mz: function() {
                    return h
                }
            });
            var n = r(79198),
                i = r(20436),
                o = r(40300);

            function s(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function u(t) {
                return (t ?? "online") !== "online" || i.N.isOnline()
            }
            var a = class {
                constructor(t) {
                    this.revert = t?.revert, this.silent = t?.silent
                }
            };

            function f(t) {
                return t instanceof a
            }

            function h(t) {
                let e, r, f, h = !1,
                    l = 0,
                    c = !1,
                    d = new Promise((t, e) => {
                        r = t, f = e
                    }),
                    p = () => !n.j.isFocused() || "always" !== t.networkMode && !i.N.isOnline(),
                    y = n => {
                        c || (c = !0, t.onSuccess?.(n), e?.(), r(n))
                    },
                    m = r => {
                        c || (c = !0, t.onError?.(r), e?.(), f(r))
                    },
                    g = () => new Promise(r => {
                        e = t => {
                            let e = c || !p();
                            return e && r(t), e
                        }, t.onPause?.()
                    }).then(() => {
                        e = void 0, c || t.onContinue?.()
                    }),
                    w = () => {
                        let e;
                        if (!c) {
                            try {
                                e = t.fn()
                            } catch (t) {
                                e = Promise.reject(t)
                            }
                            Promise.resolve(e).then(y).catch(e => {
                                if (c) return;
                                let r = t.retry ?? (o.sk ? 0 : 3),
                                    n = t.retryDelay ?? s,
                                    i = "function" == typeof n ? n(l, e) : n,
                                    u = !0 === r || "number" == typeof r && l < r || "function" == typeof r && r(l, e);
                                if (h || !u) {
                                    m(e);
                                    return
                                }
                                l++, t.onFail?.(l, e), (0, o._v)(i).then(() => {
                                    if (p()) return g()
                                }).then(() => {
                                    h ? m(e) : w()
                                })
                            })
                        }
                    };
                return u(t.networkMode) ? w() : g().then(w), {
                    promise: d,
                    cancel: e => {
                        c || (m(new a(e)), t.abort?.())
                    },
                    continue: () => e?.() ? d : Promise.resolve(),
                    cancelRetry: () => {
                        h = !0
                    },
                    continueRetry: () => {
                        h = !1
                    }
                }
            }
        },
        42996: function(t, e, r) {
            "use strict";
            r.d(e, {
                l: function() {
                    return n
                }
            });
            var n = class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        40300: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ht: function() {
                    return E
                },
                Kp: function() {
                    return u
                },
                PN: function() {
                    return s
                },
                Q$: function() {
                    return d
                },
                Rm: function() {
                    return h
                },
                SE: function() {
                    return o
                },
                VS: function() {
                    return p
                },
                VX: function() {
                    return b
                },
                X7: function() {
                    return f
                },
                Ym: function() {
                    return l
                },
                ZT: function() {
                    return i
                },
                _v: function() {
                    return w
                },
                _x: function() {
                    return a
                },
                oE: function() {
                    return v
                },
                sk: function() {
                    return n
                },
                to: function() {
                    return c
                }
            });
            var n = "undefined" == typeof window || "Deno" in window;

            function i() {}

            function o(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function s(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function u(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function a(t, e) {
                let {
                    type: r = "all",
                    exact: n,
                    fetchStatus: i,
                    predicate: o,
                    queryKey: s,
                    stale: u
                } = t;
                if (s) {
                    if (n) {
                        if (e.queryHash !== h(s, e.options)) return !1
                    } else if (!c(e.queryKey, s)) return !1
                }
                if ("all" !== r) {
                    let t = e.isActive();
                    if ("active" === r && !t || "inactive" === r && t) return !1
                }
                return ("boolean" != typeof u || e.isStale() === u) && (void 0 === i || i === e.state.fetchStatus) && (!o || !!o(e))
            }

            function f(t, e) {
                let {
                    exact: r,
                    status: n,
                    predicate: i,
                    mutationKey: o
                } = t;
                if (o) {
                    if (!e.options.mutationKey) return !1;
                    if (r) {
                        if (l(e.options.mutationKey) !== l(o)) return !1
                    } else if (!c(e.options.mutationKey, o)) return !1
                }
                return (!n || e.state.status === n) && (!i || !!i(e))
            }

            function h(t, e) {
                return (e?.queryKeyHashFn || l)(t)
            }

            function l(t) {
                return JSON.stringify(t, (t, e) => m(e) ? Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}) : e)
            }

            function c(t, e) {
                return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && !Object.keys(e).some(r => !c(t[r], e[r]))
            }

            function d(t, e) {
                if (t === e) return t;
                let r = y(t) && y(e);
                if (r || m(t) && m(e)) {
                    let n = r ? t.length : Object.keys(t).length,
                        i = r ? e : Object.keys(e),
                        o = i.length,
                        s = r ? [] : {},
                        u = 0;
                    for (let n = 0; n < o; n++) {
                        let o = r ? n : i[n];
                        s[o] = d(t[o], e[o]), s[o] === t[o] && u++
                    }
                    return n === o && u === n ? t : s
                }
                return e
            }

            function p(t, e) {
                if (t && !e || e && !t) return !1;
                for (let r in t)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function y(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function m(t) {
                if (!g(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let r = e.prototype;
                return !!(g(r) && r.hasOwnProperty("isPrototypeOf"))
            }

            function g(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function w(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function v(t, e, r) {
                return "function" == typeof r.structuralSharing ? r.structuralSharing(t, e) : !1 !== r.structuralSharing ? d(t, e) : e
            }

            function b(t, e, r = 0) {
                let n = [...t, e];
                return r && n.length > r ? n.slice(1) : n
            }

            function E(t, e, r = 0) {
                let n = [e, ...t];
                return r && n.length > r ? n.slice(0, -1) : n
            }
        },
        38038: function(t, e, r) {
            "use strict";
            r.d(e, {
                NL: function() {
                    return o
                },
                aH: function() {
                    return s
                }
            });
            var n = r(2265),
                i = n.createContext(void 0),
                o = t => {
                    let e = n.useContext(i);
                    if (t) return t;
                    if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                s = ({
                    client: t,
                    children: e
                }) => (n.useEffect(() => (t.mount(), () => {
                    t.unmount()
                }), [t]), n.createElement(i.Provider, {
                    value: t
                }, e))
        },
        88111: function(t, e, r) {
            "use strict";
            r.d(e, {
                AG: function() {
                    return w
                },
                G0: function() {
                    return _
                },
                IM: function() {
                    return E
                },
                IX: function() {
                    return p
                },
                O7: function() {
                    return y
                },
                Rx: function() {
                    return v
                },
                Ue: function() {
                    return h
                },
                Yj: function() {
                    return d
                },
                Z_: function() {
                    return x
                },
                _4: function() {
                    return A
                },
                bc: function() {
                    return M
                },
                dt: function() {
                    return B
                },
                eE: function() {
                    return m
                },
                hu: function() {
                    return f
                },
                i0: function() {
                    return g
                },
                jt: function() {
                    return b
                },
                oQ: function() {
                    return I
                }
            });
            class n extends TypeError {
                constructor(t, e) {
                    let r;
                    let {
                        message: n,
                        ...i
                    } = t, {
                        path: o
                    } = t;
                    super(0 === o.length ? n : "At path: " + o.join(".") + " -- " + n), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
                        var n;
                        return null != (n = r) ? n : r = [t, ...e()]
                    }
                }
            }

            function i(t) {
                return "object" == typeof t && null != t
            }

            function o(t) {
                return "string" == typeof t ? JSON.stringify(t) : "" + t
            }

            function* s(t, e, r, n) {
                var s;
                for (let u of (i(s = t) && "function" == typeof s[Symbol.iterator] || (t = [t]), t)) {
                    let t = function(t, e, r, n) {
                        if (!0 === t) return;
                        !1 === t ? t = {} : "string" == typeof t && (t = {
                            message: t
                        });
                        let {
                            path: i,
                            branch: s
                        } = e, {
                            type: u
                        } = r, {
                            refinement: a,
                            message: f = "Expected a value of type `" + u + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + o(n) + "`"
                        } = t;
                        return {
                            value: n,
                            type: u,
                            refinement: a,
                            key: i[i.length - 1],
                            path: i,
                            branch: s,
                            ...t,
                            message: f
                        }
                    }(u, e, r, n);
                    t && (yield t)
                }
            }

            function* u(t, e, r = {}) {
                let {
                    path: n = [],
                    branch: o = [t],
                    coerce: s = !1,
                    mask: a = !1
                } = r, f = {
                    path: n,
                    branch: o
                };
                if (s && (t = e.coercer(t, f), a && "type" !== e.type && i(e.schema) && i(t) && !Array.isArray(t)))
                    for (let r in t) void 0 === e.schema[r] && delete t[r];
                let h = !0;
                for (let r of e.validator(t, f)) h = !1, yield [r, void 0];
                for (let [r, l, c] of e.entries(t, f))
                    for (let e of u(l, c, {
                            path: void 0 === r ? n : [...n, r],
                            branch: void 0 === r ? o : [...o, l],
                            coerce: s,
                            mask: a
                        })) e[0] ? (h = !1, yield [e[0], void 0]) : s && (l = e[1], void 0 === r ? t = l : t instanceof Map ? t.set(r, l) : t instanceof Set ? t.add(l) : i(t) && (t[r] = l));
                if (h)
                    for (let r of e.refiner(t, f)) h = !1, yield [r, void 0];
                h && (yield [void 0, t])
            }
            class a {
                constructor(t) {
                    let {
                        type: e,
                        schema: r,
                        validator: n,
                        refiner: i,
                        coercer: o = t => t,
                        entries: u = function*() {}
                    } = t;
                    this.type = e, this.schema = r, this.entries = u, this.coercer = o, n ? this.validator = (t, e) => s(n(t, e), e, this, t) : this.validator = () => [], i ? this.refiner = (t, e) => s(i(t, e), e, this, t) : this.refiner = () => []
                }
                assert(t) {
                    return f(t, this)
                }
                create(t) {
                    return h(t, this)
                }
                is(t) {
                    return !l(t, this)[0]
                }
                mask(t) {
                    return function(t, e) {
                        let r = l(t, e, {
                            coerce: !0,
                            mask: !0
                        });
                        if (!r[0]) return r[1];
                        throw r[0]
                    }(t, this)
                }
                validate(t, e = {}) {
                    return l(t, this, e)
                }
            }

            function f(t, e) {
                let r = l(t, e);
                if (r[0]) throw r[0]
            }

            function h(t, e) {
                let r = l(t, e, {
                    coerce: !0
                });
                if (!r[0]) return r[1];
                throw r[0]
            }

            function l(t, e, r = {}) {
                let i = u(t, e, r),
                    o = function(t) {
                        let {
                            done: e,
                            value: r
                        } = t.next();
                        return e ? void 0 : r
                    }(i);
                return o[0] ? [new n(o[0], function*() {
                    for (let t of i) t[0] && (yield t[0])
                }), void 0] : [void 0, o[1]]
            }

            function c(t, e) {
                return new a({
                    type: t,
                    schema: null,
                    validator: e
                })
            }

            function d() {
                return c("any", () => !0)
            }

            function p(t) {
                return new a({
                    type: "array",
                    schema: t,
                    * entries(e) {
                        if (t && Array.isArray(e))
                            for (let [r, n] of e.entries()) yield [r, n, t]
                    },
                    coercer: t => Array.isArray(t) ? t.slice() : t,
                    validator: t => Array.isArray(t) || "Expected an array value, but received: " + o(t)
                })
            }

            function y() {
                return c("boolean", t => "boolean" == typeof t)
            }

            function m(t) {
                return c("instance", e => e instanceof t || "Expected a `" + t.name + "` instance, but received: " + o(e))
            }

            function g(t) {
                let e = o(t),
                    r = typeof t;
                return new a({
                    type: "literal",
                    schema: "string" === r || "number" === r || "boolean" === r ? t : null,
                    validator: r => r === t || "Expected the literal `" + e + "`, but received: " + o(r)
                })
            }

            function w(t) {
                return new a({
                    ...t,
                    validator: (e, r) => null === e || t.validator(e, r),
                    refiner: (e, r) => null === e || t.refiner(e, r)
                })
            }

            function v() {
                return c("number", t => "number" == typeof t && !isNaN(t) || "Expected a number, but received: " + o(t))
            }

            function b(t) {
                return new a({
                    ...t,
                    validator: (e, r) => void 0 === e || t.validator(e, r),
                    refiner: (e, r) => void 0 === e || t.refiner(e, r)
                })
            }

            function E(t, e) {
                return new a({
                    type: "record",
                    schema: null,
                    * entries(r) {
                        if (i(r))
                            for (let n in r) {
                                let i = r[n];
                                yield [n, n, t], yield [n, i, e]
                            }
                    },
                    validator: t => i(t) || "Expected an object, but received: " + o(t)
                })
            }

            function x() {
                return c("string", t => "string" == typeof t || "Expected a string, but received: " + o(t))
            }

            function M(t) {
                let e = c("never", () => !1);
                return new a({
                    type: "tuple",
                    schema: null,
                    * entries(r) {
                        if (Array.isArray(r)) {
                            let n = Math.max(t.length, r.length);
                            for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e]
                        }
                    },
                    validator: t => Array.isArray(t) || "Expected an array, but received: " + o(t)
                })
            }

            function B(t) {
                let e = Object.keys(t);
                return new a({
                    type: "type",
                    schema: t,
                    * entries(r) {
                        if (i(r))
                            for (let n of e) yield [n, r[n], t[n]]
                    },
                    validator: t => i(t) || "Expected an object, but received: " + o(t)
                })
            }

            function _(t) {
                let e = t.map(t => t.type).join(" | ");
                return new a({
                    type: "union",
                    schema: null,
                    validator(r, n) {
                        let i = [];
                        for (let e of t) {
                            let [...t] = u(r, e, n), [o] = t;
                            if (!o[0]) return [];
                            for (let [e] of t) e && i.push(e)
                        }
                        return ["Expected the value to satisfy a union of `" + e + "`, but received: " + o(r), ...i]
                    }
                })
            }

            function A() {
                return c("unknown", () => !0)
            }

            function I(t, e, r) {
                return new a({
                    ...t,
                    coercer: (n, i) => l(n, e)[0] ? t.coercer(n, i) : t.coercer(r(n, i), i)
                })
            }
        }
    }
]);