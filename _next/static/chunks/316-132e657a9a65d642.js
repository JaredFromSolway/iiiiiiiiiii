(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [316], {
        48640: function(t) {
            "use strict";
            t.exports = function(t) {
                if (t.length >= 255) throw TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), n = 0; n < e.length; n++) e[n] = 255;
                for (var i = 0; i < t.length; i++) {
                    var r = t.charAt(i),
                        s = r.charCodeAt(0);
                    if (255 !== e[s]) throw TypeError(r + " is ambiguous");
                    e[s] = i
                }
                var a = t.length,
                    o = t.charAt(0),
                    c = Math.log(a) / Math.log(256),
                    u = Math.log(256) / Math.log(a);

                function l(t) {
                    if ("string" != typeof t) throw TypeError("Expected String");
                    if (0 === t.length) return new Uint8Array;
                    for (var n = 0, i = 0, r = 0; t[n] === o;) i++, n++;
                    for (var s = (t.length - n) * c + 1 >>> 0, u = new Uint8Array(s); t[n];) {
                        var l = e[t.charCodeAt(n)];
                        if (255 === l) return;
                        for (var h = 0, d = s - 1;
                            (0 !== l || h < r) && -1 !== d; d--, h++) l += a * u[d] >>> 0, u[d] = l % 256 >>> 0, l = l / 256 >>> 0;
                        if (0 !== l) throw Error("Non-zero carry");
                        r = h, n++
                    }
                    for (var f = s - r; f !== s && 0 === u[f];) f++;
                    for (var y = new Uint8Array(i + (s - f)), w = i; f !== s;) y[w++] = u[f++];
                    return y
                }
                return {
                    encode: function(e) {
                        if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === e.length) return "";
                        for (var n = 0, i = 0, r = 0, s = e.length; r !== s && 0 === e[r];) r++, n++;
                        for (var c = (s - r) * u + 1 >>> 0, l = new Uint8Array(c); r !== s;) {
                            for (var h = e[r], d = 0, f = c - 1;
                                (0 !== h || d < i) && -1 !== f; f--, d++) h += 256 * l[f] >>> 0, l[f] = h % a >>> 0, h = h / a >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            i = d, r++
                        }
                        for (var y = c - i; y !== c && 0 === l[y];) y++;
                        for (var w = o.repeat(n); y < c; ++y) w += t.charAt(l[y]);
                        return w
                    },
                    decodeUnsafe: l,
                    decode: function(t) {
                        var e = l(t);
                        if (e) return e;
                        throw Error("Non-base" + a + " character")
                    }
                }
            }
        },
        90716: function(t, e, n) {
            let i = n(48640);
            t.exports = i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        1800: function() {},
        76951: function(t) {
            t.exports = {
                style: {
                    fontFamily: "'__Montserrat_cce811', '__Montserrat_Fallback_cce811'",
                    fontStyle: "normal"
                },
                className: "__className_cce811"
            }
        },
        34211: function(t, e, n) {
            "use strict";
            n.d(e, {
                w: function() {
                    return o
                }
            });
            var i = n(8868),
                r = n(24547),
                s = n(35200),
                a = n(57437),
                o = ({
                    children: t,
                    locale: e = "en-US",
                    navigate: n,
                    ...o
                }) => {
                    let c = t;
                    return n && (c = (0, a.jsx)(r.pG, {
                        navigate: n,
                        children: c
                    })), (0, a.jsx)(i.bd, {
                        locale: e,
                        children: (0, a.jsx)(s.N3, {
                            ...o,
                            children: c
                        })
                    })
                }
        },
        90194: function(t, e, n) {
            "use strict";
            n.d(e, {
                H: function() {
                    return u
                },
                i1: function() {
                    return r
                },
                mI: function() {
                    return o
                },
                su: function() {
                    return c
                }
            });
            var i, r, s = n(28729),
                a = n(28320);
            (i = r || (r = {})).Installed = "Installed", i.NotDetected = "NotDetected", i.Loadable = "Loadable", i.Unsupported = "Unsupported";
            class o extends s {
                get connected() {
                    return !!this.publicKey
                }
                async autoConnect() {
                    await this.connect()
                }
                async prepareTransaction(t, e, n = {}) {
                    let i = this.publicKey;
                    if (!i) throw new a.oS;
                    return t.feePayer = t.feePayer || i, t.recentBlockhash = t.recentBlockhash || (await e.getLatestBlockhash({
                        commitment: n.preflightCommitment,
                        minContextSlot: n.minContextSlot
                    })).blockhash, t
                }
            }

            function c(t) {
                if ("undefined" == typeof window || "undefined" == typeof document) return;
                let e = [];

                function n() {
                    if (t())
                        for (let t of e) t()
                }
                let i = setInterval(n, 1e3);
                e.push(() => clearInterval(i)), "loading" === document.readyState && (document.addEventListener("DOMContentLoaded", n, {
                    once: !0
                }), e.push(() => document.removeEventListener("DOMContentLoaded", n))), "complete" !== document.readyState && (window.addEventListener("load", n, {
                    once: !0
                }), e.push(() => window.removeEventListener("load", n))), n()
            }

            function u() {
                if (!navigator) return !1;
                let t = navigator.userAgent.toLowerCase(),
                    e = t.includes("iphone") || t.includes("ipad"),
                    n = t.includes("safari");
                return e && n
            }
        },
        28320: function(t, e, n) {
            "use strict";
            n.d(e, {
                $w: function() {
                    return o
                },
                IW: function() {
                    return f
                },
                Nx: function() {
                    return h
                },
                OZ: function() {
                    return r
                },
                PY: function() {
                    return y
                },
                UG: function() {
                    return u
                },
                W8: function() {
                    return s
                },
                at: function() {
                    return c
                },
                bD: function() {
                    return p
                },
                cO: function() {
                    return l
                },
                fk: function() {
                    return w
                },
                lj: function() {
                    return i
                },
                oS: function() {
                    return d
                },
                p6: function() {
                    return a
                }
            });
            class i extends Error {
                constructor(t, e) {
                    super(t), this.error = e
                }
            }
            class r extends i {
                constructor() {
                    super(...arguments), this.name = "WalletNotReadyError"
                }
            }
            class s extends i {
                constructor() {
                    super(...arguments), this.name = "WalletLoadError"
                }
            }
            class a extends i {
                constructor() {
                    super(...arguments), this.name = "WalletConfigError"
                }
            }
            class o extends i {
                constructor() {
                    super(...arguments), this.name = "WalletConnectionError"
                }
            }
            class c extends i {
                constructor() {
                    super(...arguments), this.name = "WalletDisconnectedError"
                }
            }
            class u extends i {
                constructor() {
                    super(...arguments), this.name = "WalletDisconnectionError"
                }
            }
            class l extends i {
                constructor() {
                    super(...arguments), this.name = "WalletAccountError"
                }
            }
            class h extends i {
                constructor() {
                    super(...arguments), this.name = "WalletPublicKeyError"
                }
            }
            class d extends i {
                constructor() {
                    super(...arguments), this.name = "WalletNotConnectedError"
                }
            }
            class f extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSendTransactionError"
                }
            }
            class y extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignTransactionError"
                }
            }
            class w extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignMessageError"
                }
            }
            class p extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignInError"
                }
            }
        },
        84207: function(t, e, n) {
            "use strict";
            n.d(e, {
                eC: function() {
                    return o
                },
                qz: function() {
                    return c
                }
            });
            var i = n(90194),
                r = n(28320),
                s = n(56779);
            class a extends i.mI {
                async sendTransaction(t, e, n = {}) {
                    let i = !0;
                    try {
                        if ((0, s.W)(t)) {
                            if (!this.supportedTransactionVersions) throw new r.IW("Sending versioned transactions isn't supported by this wallet");
                            if (!this.supportedTransactionVersions.has(t.version)) throw new r.IW(`Sending transaction version ${t.version} isn't supported by this wallet`);
                            try {
                                let i = (t = await this.signTransaction(t)).serialize();
                                return await e.sendRawTransaction(i, n)
                            } catch (t) {
                                if (t instanceof r.PY) throw i = !1, t;
                                throw new r.IW(t?.message, t)
                            }
                        } else try {
                            let {
                                signers: i,
                                ...r
                            } = n;
                            t = await this.prepareTransaction(t, e, r), i?.length && t.partialSign(...i);
                            let s = (t = await this.signTransaction(t)).serialize();
                            return await e.sendRawTransaction(s, r)
                        } catch (t) {
                            if (t instanceof r.PY) throw i = !1, t;
                            throw new r.IW(t?.message, t)
                        }
                    } catch (t) {
                        throw i && this.emit("error", t), t
                    }
                }
                async signAllTransactions(t) {
                    for (let e of t)
                        if ((0, s.W)(e)) {
                            if (!this.supportedTransactionVersions) throw new r.PY("Signing versioned transactions isn't supported by this wallet");
                            if (!this.supportedTransactionVersions.has(e.version)) throw new r.PY(`Signing transaction version ${e.version} isn't supported by this wallet`)
                        } let e = [];
                    for (let n of t) e.push(await this.signTransaction(n));
                    return e
                }
            }
            class o extends a {}
            class c extends o {}
        },
        56779: function(t, e, n) {
            "use strict";

            function i(t) {
                return "version" in t
            }
            n.d(e, {
                W: function() {
                    return i
                }
            })
        },
        46825: function(t, e, n) {
            "use strict";
            var i, r;
            n.d(e, {
                Q: function() {
                    return i
                }
            }), (r = i || (i = {})).Mainnet = "mainnet-beta", r.Testnet = "testnet", r.Devnet = "devnet"
        },
        97089: function(t, e, n) {
            "use strict";
            n.d(e, {
                s: function() {
                    return y
                }
            });
            var i = n(2265),
                r = n(42315),
                s = n(90194),
                a = n(3446),
                o = n(54887);
            let c = ({
                    id: t,
                    children: e,
                    expanded: n = !1
                }) => {
                    let r = (0, i.useRef)(null),
                        s = (0, i.useRef)(!0),
                        a = () => {
                            let t = r.current;
                            t && requestAnimationFrame(() => {
                                t.style.height = t.scrollHeight + "px"
                            })
                        },
                        o = () => {
                            let t = r.current;
                            t && requestAnimationFrame(() => {
                                t.style.height = t.offsetHeight + "px", t.style.overflow = "hidden", requestAnimationFrame(() => {
                                    t.style.height = "0"
                                })
                            })
                        };
                    return (0, i.useLayoutEffect)(() => {
                        n ? a() : o()
                    }, [n]), (0, i.useLayoutEffect)(() => {
                        let t = r.current;
                        if (t) return s.current && (e(), s.current = !1), t.addEventListener("transitionend", i), () => t.removeEventListener("transitionend", i);

                        function e() {
                            t && (t.style.overflow = n ? "initial" : "hidden", n && (t.style.height = "auto"))
                        }

                        function i(n) {
                            t && n.target === t && "height" === n.propertyName && e()
                        }
                    }, [n]), i.createElement("div", {
                        className: "wallet-adapter-collapse",
                        id: t,
                        ref: r,
                        role: "region",
                        style: {
                            height: 0,
                            transition: s.current ? void 0 : "height 250ms ease-out"
                        }
                    }, e)
                },
                u = t => i.createElement("button", {
                    className: `wallet-adapter-button ${t.className||""}`,
                    disabled: t.disabled,
                    style: t.style,
                    onClick: t.onClick,
                    tabIndex: t.tabIndex || 0,
                    type: "button"
                }, t.startIcon && i.createElement("i", {
                    className: "wallet-adapter-button-start-icon"
                }, t.startIcon), t.children, t.endIcon && i.createElement("i", {
                    className: "wallet-adapter-button-end-icon"
                }, t.endIcon)),
                l = ({
                    wallet: t,
                    ...e
                }) => t && i.createElement("img", {
                    src: t.adapter.icon,
                    alt: `${t.adapter.name} icon`,
                    ...e
                }),
                h = ({
                    handleClick: t,
                    tabIndex: e,
                    wallet: n
                }) => i.createElement("li", null, i.createElement(u, {
                    onClick: t,
                    startIcon: i.createElement(l, {
                        wallet: n
                    }),
                    tabIndex: e
                }, n.adapter.name, n.readyState === s.i1.Installed && i.createElement("span", null, "Detected"))),
                d = () => i.createElement("svg", {
                    width: "97",
                    height: "96",
                    viewBox: "0 0 97 96",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, i.createElement("circle", {
                    cx: "48.5",
                    cy: "48",
                    r: "48",
                    fill: "url(#paint0_linear_880_5115)",
                    fillOpacity: "0.1"
                }), i.createElement("circle", {
                    cx: "48.5",
                    cy: "48",
                    r: "47",
                    stroke: "url(#paint1_linear_880_5115)",
                    strokeOpacity: "0.4",
                    strokeWidth: "2"
                }), i.createElement("g", {
                    clipPath: "url(#clip0_880_5115)"
                }, i.createElement("path", {
                    d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
                    fill: "url(#paint2_linear_880_5115)"
                }), i.createElement("path", {
                    d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
                    fill: "url(#paint3_linear_880_5115)"
                })), i.createElement("defs", null, i.createElement("linearGradient", {
                    id: "paint0_linear_880_5115",
                    x1: "3.41664",
                    y1: "98.0933",
                    x2: "103.05",
                    y2: "8.42498",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("linearGradient", {
                    id: "paint1_linear_880_5115",
                    x1: "3.41664",
                    y1: "98.0933",
                    x2: "103.05",
                    y2: "8.42498",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("linearGradient", {
                    id: "paint2_linear_880_5115",
                    x1: "25.9583",
                    y1: "68.7101",
                    x2: "67.2337",
                    y2: "23.7879",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("linearGradient", {
                    id: "paint3_linear_880_5115",
                    x1: "58.3326",
                    y1: "49.4467",
                    x2: "61.0002",
                    y2: "45.4453",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("clipPath", {
                    id: "clip0_880_5115"
                }, i.createElement("rect", {
                    width: "48",
                    height: "48",
                    fill: "white",
                    transform: "translate(24.5 24)"
                })))),
                f = ({
                    className: t = "",
                    container: e = "body"
                }) => {
                    let n = (0, i.useRef)(null),
                        {
                            wallets: u,
                            select: l
                        } = (0, a.O)(),
                        {
                            setVisible: f
                        } = (0, r.h)(),
                        [y, w] = (0, i.useState)(!1),
                        [p, m] = (0, i.useState)(!1),
                        [M, g] = (0, i.useState)(null),
                        [v, j] = (0, i.useMemo)(() => {
                            let t = [],
                                e = [],
                                n = [];
                            for (let i of u) i.readyState === s.i1.NotDetected ? n.push(i) : i.readyState === s.i1.Loadable ? e.push(i) : i.readyState === s.i1.Installed && t.push(i);
                            let i = [],
                                r = [];
                            return t.length ? (i = t, r = [...e, ...n]) : (e.length && (i = e), r = n), [i, r]
                        }, [u]),
                        L = (0, i.useCallback)(() => {
                            m(!1), setTimeout(() => f(!1), 150)
                        }, [f]),
                        I = (0, i.useCallback)(t => {
                            t.preventDefault(), L()
                        }, [L]),
                        N = (0, i.useCallback)((t, e) => {
                            l(e), I(t)
                        }, [l, I]),
                        E = (0, i.useCallback)(() => w(!y), [y]),
                        S = (0, i.useCallback)(t => {
                            let e = n.current;
                            if (!e) return;
                            let i = e.querySelectorAll("button"),
                                r = i[0],
                                s = i[i.length - 1];
                            t.shiftKey ? document.activeElement === r && (s.focus(), t.preventDefault()) : document.activeElement === s && (r.focus(), t.preventDefault())
                        }, [n]);
                    return (0, i.useLayoutEffect)(() => {
                        let t = t => {
                                "Escape" === t.key ? L() : "Tab" === t.key && S(t)
                            },
                            {
                                overflow: e
                            } = window.getComputedStyle(document.body);
                        return setTimeout(() => m(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", t, !1), () => {
                            document.body.style.overflow = e, window.removeEventListener("keydown", t, !1)
                        }
                    }, [L, S]), (0, i.useLayoutEffect)(() => g(document.querySelector(e)), [e]), M && (0, o.createPortal)(i.createElement("div", {
                        "aria-labelledby": "wallet-adapter-modal-title",
                        "aria-modal": "true",
                        className: `wallet-adapter-modal ${p&&"wallet-adapter-modal-fade-in"} ${t}`,
                        ref: n,
                        role: "dialog"
                    }, i.createElement("div", {
                        className: "wallet-adapter-modal-container"
                    }, i.createElement("div", {
                        className: "wallet-adapter-modal-wrapper"
                    }, i.createElement("button", {
                        onClick: I,
                        className: "wallet-adapter-modal-button-close"
                    }, i.createElement("svg", {
                        width: "14",
                        height: "14"
                    }, i.createElement("path", {
                        d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
                    }))), v.length ? i.createElement(i.Fragment, null, i.createElement("h1", {
                        className: "wallet-adapter-modal-title"
                    }, "Connect a wallet on Solana to continue"), i.createElement("ul", {
                        className: "wallet-adapter-modal-list"
                    }, v.map(t => i.createElement(h, {
                        key: t.adapter.name,
                        handleClick: e => N(e, t.adapter.name),
                        wallet: t
                    })), j.length ? i.createElement(c, {
                        expanded: y,
                        id: "wallet-adapter-modal-collapse"
                    }, j.map(t => i.createElement(h, {
                        key: t.adapter.name,
                        handleClick: e => N(e, t.adapter.name),
                        tabIndex: y ? 0 : -1,
                        wallet: t
                    }))) : null), j.length ? i.createElement("button", {
                        className: "wallet-adapter-modal-list-more",
                        onClick: E,
                        tabIndex: 0
                    }, i.createElement("span", null, y ? "Less " : "More ", "options"), i.createElement("svg", {
                        width: "13",
                        height: "7",
                        viewBox: "0 0 13 7",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `${y?"wallet-adapter-modal-list-more-icon-rotate":""}`
                    }, i.createElement("path", {
                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
                    }))) : null) : i.createElement(i.Fragment, null, i.createElement("h1", {
                        className: "wallet-adapter-modal-title"
                    }, "You'll need a wallet on Solana to continue"), i.createElement("div", {
                        className: "wallet-adapter-modal-middle"
                    }, i.createElement(d, null)), j.length ? i.createElement(i.Fragment, null, i.createElement("button", {
                        className: "wallet-adapter-modal-list-more",
                        onClick: E,
                        tabIndex: 0
                    }, i.createElement("span", null, y ? "Hide " : "Already have a wallet? View ", "options"), i.createElement("svg", {
                        width: "13",
                        height: "7",
                        viewBox: "0 0 13 7",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `${y?"wallet-adapter-modal-list-more-icon-rotate":""}`
                    }, i.createElement("path", {
                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
                    }))), i.createElement(c, {
                        expanded: y,
                        id: "wallet-adapter-modal-collapse"
                    }, i.createElement("ul", {
                        className: "wallet-adapter-modal-list"
                    }, j.map(t => i.createElement(h, {
                        key: t.adapter.name,
                        handleClick: e => N(e, t.adapter.name),
                        tabIndex: y ? 0 : -1,
                        wallet: t
                    }))))) : null))), i.createElement("div", {
                        className: "wallet-adapter-modal-overlay",
                        onMouseDown: I
                    })), M)
                },
                y = ({
                    children: t,
                    ...e
                }) => {
                    let [n, s] = (0, i.useState)(!1);
                    return i.createElement(r.g.Provider, {
                        value: {
                            visible: n,
                            setVisible: s
                        }
                    }, t, n && i.createElement(f, {
                        ...e
                    }))
                }
        },
        19399: function(t, e, n) {
            "use strict";
            n.d(e, {
                U: function() {
                    return a
                }
            });
            var i = n(63438),
                r = n(2265),
                s = n(72086);
            let a = ({
                children: t,
                endpoint: e,
                config: n = {
                    commitment: "confirmed"
                }
            }) => {
                let a = (0, r.useMemo)(() => new i.Connection(e, n), [e, n]);
                return r.createElement(s.h.Provider, {
                    value: {
                        connection: a
                    }
                }, t)
            }
        },
        73438: function(t, e, n) {
            "use strict";
            let i, r, s;
            n.d(e, {
                n: function() {
                    return tR
                }
            });
            var a, o, c, u, l, h, d, f, y, w, p, m, M, g, v, j, L, I, N, E, S, T = n(84207),
                b = n(90194),
                D = n(28320),
                A = n(63438);
            RegExp("^(?<domain>[^\\\\n]+?) wants you to sign in with your Solana account:\\\\n(?<address>[^\\\\n]+)(?:\\\\n|\\$)(?:\\\\n(?<statement>[\\\\S\\\\s]*?)(?:\\\\n|\\$))??(?:\\\\\\\\nURI: (?<uri>[^\\\\\\\\n]+))?(?:\\\\\\\\nVersion: (?<version>[^\\\\\\\\n]+))?(?:\\\\\\\\nChain ID: (?<chainId>[^\\\\\\\\n]+))?(?:\\\\\\\\nNonce: (?<nonce>[^\\\\\\\\n]+))?(?:\\\\\\\\nIssued At: (?<issuedAt>[^\\\\\\\\n]+))?(?:\\\\\\\\nExpiration Time: (?<expirationTime>[^\\\\\\\\n]+))?(?:\\\\\\\\nNot Before: (?<notBefore>[^\\\\\\\\n]+))?(?:\\\\\\\\nRequest ID: (?<requestId>[^\\\\\\\\n]+))?(?:\\\\\\\\nResources:(?<resources>(?:\\\\\\\\n- [^\\\\\\\\n]+)*))?\\n*$");
            let O = {
                ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
                ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
                ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
                ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
                ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
                ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
                ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION"
            };
            class C extends Error {
                constructor(...t) {
                    let [e, n, i] = t;
                    super(n), this.code = e, this.data = i, this.name = "SolanaMobileWalletAdapterError"
                }
            }
            class z extends Error {
                constructor(...t) {
                    let [e, n, i, r] = t;
                    super(i), this.code = n, this.data = r, this.jsonRpcMessageId = e, this.name = "SolanaMobileWalletAdapterProtocolError"
                }
            }

            function x(t, e, n, i) {
                return new(n || (n = Promise))(function(r, s) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function o(t) {
                        try {
                            c(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, o)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            }
            let _ = "solana:cloneAuthorization";

            function R(t, e) {
                return x(this, void 0, void 0, function*() {
                    let n = t.slice(0, 4),
                        r = t.slice(4, 16),
                        s = t.slice(16),
                        a = yield crypto.subtle.decrypt(k(n, r), e, s);
                    return (void 0 === i && (i = new TextDecoder("utf-8")), i).decode(a)
                })
            }

            function k(t, e) {
                return {
                    additionalData: t,
                    iv: e,
                    name: "AES-GCM",
                    tagLength: 128
                }
            }

            function U(t) {
                if (t < 49152 || t > 65535) throw new C(O.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE, `Association port number must be between 49152 and 65535. ${t} given.`, {
                    port: t
                });
                return t
            }

            function P(t) {
                return t.replace(/(^\/+|\/+$)/g, "").split("/")
            }
            let W = {
                    Firefox: 0,
                    Other: 1
                },
                Q = null,
                Y = {
                    retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3],
                    timeoutMs: 3e4
                };

            function G(t) {
                return new DataView(t).getUint32(0, !1)
            }
            var Z = n(90716);

            function F(t, e) {
                var n = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
                return n
            }

            function B(t, e, n, i) {
                return new(n || (n = Promise))(function(r, s) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function o(t) {
                        try {
                            c(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, o)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            }

            function H(t) {
                return window.btoa(String.fromCharCode.call(null, ...t))
            }

            function q(t) {
                return new Uint8Array(window.atob(t).split("").map(t => t.charCodeAt(0)))
            }

            function V(t) {
                return H("version" in t ? t.serialize() : t.serialize({
                    requireAllSignatures: !1,
                    verifySignatures: !1
                }))
            }

            function K(t) {
                let e = t[0] * A.SIGNATURE_LENGTH_IN_BYTES + 1;
                return "legacy" === A.VersionedMessage.deserializeMessageVersion(t.slice(e, t.length)) ? A.Transaction.from(t) : A.VersionedTransaction.deserialize(t)
            }

            function $(t, e, n, i) {
                return new(n || (n = Promise))(function(r, s) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function o(t) {
                        try {
                            c(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, o)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            }

            function J(t) {
                return new Uint8Array(window.atob(t).split("").map(t => t.charCodeAt(0)))
            }
            let X = "Mobile Wallet Adapter";

            function tt(t) {
                return "version" in t
            }
            class te extends T.qz {
                constructor(t) {
                    var e;
                    super(), this.supportedTransactionVersions = new Set(["legacy", 0]), this.name = X, this.url = "https://solanamobile.com/wallets", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg==", this._connecting = !1, this._connectionGeneration = 0, this._readyState = "undefined" != typeof window && window.isSecureContext && "undefined" != typeof document && /android/i.test(navigator.userAgent) ? b.i1.Loadable : b.i1.Unsupported, this._authorizationResultCache = t.authorizationResultCache, this._addressSelector = t.addressSelector, this._appIdentity = t.appIdentity, this._chain = null !== (e = t.chain) && void 0 !== e ? e : t.cluster, this._onWalletNotFound = t.onWalletNotFound, this._readyState !== b.i1.Unsupported && this._authorizationResultCache.get().then(t => {
                        t && this.declareWalletAsInstalled()
                    })
                }
                get publicKey() {
                    if (null == this._publicKey && null != this._selectedAddress) try {
                        this._publicKey = function(t) {
                            let e = J(t);
                            return new A.PublicKey(e)
                        }(this._selectedAddress)
                    } catch (t) {
                        throw new D.Nx(t instanceof Error && (null == t ? void 0 : t.message) || "Unknown error", t)
                    }
                    return this._publicKey ? this._publicKey : null
                }
                get connected() {
                    return !!this._authorizationResult
                }
                get connecting() {
                    return this._connecting
                }
                get readyState() {
                    return this._readyState
                }
                declareWalletAsInstalled() {
                    this._readyState !== b.i1.Installed && this.emit("readyStateChange", this._readyState = b.i1.Installed)
                }
                runWithGuard(t) {
                    return $(this, void 0, void 0, function*() {
                        try {
                            return yield t()
                        } catch (t) {
                            throw this.emit("error", t), t
                        }
                    })
                }
                autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
                    return $(this, void 0, void 0, function*() {
                        return yield this.autoConnect()
                    })
                }
                autoConnect() {
                    return $(this, void 0, void 0, function*() {
                        if (!this.connecting && !this.connected) return yield this.runWithGuard(() => $(this, void 0, void 0, function*() {
                            if (this._readyState !== b.i1.Installed && this._readyState !== b.i1.Loadable) throw new D.OZ;
                            this._connecting = !0;
                            try {
                                let t = yield this._authorizationResultCache.get();
                                t && this.handleAuthorizationResult(t)
                            } catch (t) {
                                throw new D.$w(t instanceof Error && t.message || "Unknown error", t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
                connect() {
                    return $(this, void 0, void 0, function*() {
                        if (!this.connecting && !this.connected) return yield this.runWithGuard(() => $(this, void 0, void 0, function*() {
                            if (this._readyState !== b.i1.Installed && this._readyState !== b.i1.Loadable) throw new D.OZ;
                            this._connecting = !0;
                            try {
                                yield this.performAuthorization()
                            } catch (t) {
                                throw new D.$w(t instanceof Error && t.message || "Unknown error", t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
                performAuthorization(t) {
                    return $(this, void 0, void 0, function*() {
                        try {
                            let e = yield this._authorizationResultCache.get();
                            if (e) return this.handleAuthorizationResult(e), e;
                            return yield this.transact(e => $(this, void 0, void 0, function*() {
                                let n = yield e.authorize({
                                    chain: this._chain,
                                    identity: this._appIdentity,
                                    sign_in_payload: t
                                });
                                return Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)]), n
                            }))
                        } catch (t) {
                            throw new D.$w(t instanceof Error && t.message || "Unknown error", t)
                        }
                    })
                }
                handleAuthorizationResult(t) {
                    var e;
                    return $(this, void 0, void 0, function*() {
                        let n = null == this._authorizationResult || (null === (e = this._authorizationResult) || void 0 === e ? void 0 : e.accounts.length) !== t.accounts.length || this._authorizationResult.accounts.some((e, n) => e.address !== t.accounts[n].address);
                        if (this._authorizationResult = t, this.declareWalletAsInstalled(), n) {
                            let e = yield this._addressSelector.select(t.accounts.map(({
                                address: t
                            }) => t));
                            e !== this._selectedAddress && (this._selectedAddress = e, delete this._publicKey, this.emit("connect", this.publicKey))
                        }
                    })
                }
                performReauthorization(t, e) {
                    return $(this, void 0, void 0, function*() {
                        try {
                            let n = yield t.authorize({
                                auth_token: e,
                                identity: this._appIdentity
                            });
                            Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)])
                        } catch (t) {
                            throw this.disconnect(), new D.at(t instanceof Error && (null == t ? void 0 : t.message) || "Unknown error", t)
                        }
                    })
                }
                disconnect() {
                    return $(this, void 0, void 0, function*() {
                        this._authorizationResultCache.clear(), this._connecting = !1, this._connectionGeneration++, delete this._authorizationResult, delete this._publicKey, delete this._selectedAddress, this.emit("disconnect")
                    })
                }
                transact(t) {
                    var e;
                    return $(this, void 0, void 0, function*() {
                        let n = null === (e = this._authorizationResult) || void 0 === e ? void 0 : e.wallet_uri_base,
                            i = this._connectionGeneration;
                        try {
                            return yield function(t, e) {
                                return B(this, void 0, void 0, function*() {
                                    return yield function(t, e) {
                                        return x(this, void 0, void 0, function*() {
                                            let n;
                                            ! function() {
                                                if ("undefined" == typeof window || !0 !== window.isSecureContext) throw new C(O.ERROR_SECURE_CONTEXT_REQUIRED, "The mobile wallet adapter protocol must be used in a secure context (`https`).")
                                            }();
                                            let i = yield function() {
                                                return x(this, void 0, void 0, function*() {
                                                    return yield crypto.subtle.generateKey({
                                                        name: "ECDSA",
                                                        namedCurve: "P-256"
                                                    }, !1, ["sign"])
                                                })
                                            }(), r = yield function(t, e) {
                                                return x(this, void 0, void 0, function*() {
                                                    let n = U(49152 + Math.floor(16384 * Math.random())),
                                                        i = yield function(t, e, n, i = ["v1"]) {
                                                            return x(this, void 0, void 0, function*() {
                                                                let r = U(e),
                                                                    s = function(t) {
                                                                        let e = "",
                                                                            n = new Uint8Array(t),
                                                                            i = n.byteLength;
                                                                        for (let t = 0; t < i; t++) e += String.fromCharCode(n[t]);
                                                                        return window.btoa(e)
                                                                    }((yield crypto.subtle.exportKey("raw", t))),
                                                                    a = function(t, e) {
                                                                        let n = null;
                                                                        if (e) {
                                                                            try {
                                                                                n = new URL(e)
                                                                            } catch (t) {}
                                                                            if ((null == n ? void 0 : n.protocol) !== "https:") throw new C(O.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
                                                                        }
                                                                        n || (n = new URL("solana-wallet:/"));
                                                                        let i = t.startsWith("/") ? t : [...P(n.pathname), ...P(t)].join("/");
                                                                        return new URL(i, n)
                                                                    }("v1/associate/local", n);
                                                                return a.searchParams.set("association", s.replace(/[/+=]/g, t => ({
                                                                    "/": "_",
                                                                    "+": "-",
                                                                    "=": "."
                                                                })[t])), a.searchParams.set("port", `${r}`), i.forEach(t => {
                                                                    a.searchParams.set("v", t)
                                                                }), a
                                                            })
                                                        }(t, n, e);
                                                    if ("https:" === i.protocol) window.location.assign(i);
                                                    else try {
                                                        switch (-1 !== navigator.userAgent.indexOf("Firefox/") ? W.Firefox : W.Other) {
                                                            case W.Firefox:
                                                                null == Q && ((Q = document.createElement("iframe")).style.display = "none", document.body.appendChild(Q)), Q.contentWindow.location.href = i.toString();
                                                                break;
                                                            case W.Other: {
                                                                let t = new Promise((t, e) => {
                                                                    function n() {
                                                                        clearTimeout(r), window.removeEventListener("blur", i)
                                                                    }

                                                                    function i() {
                                                                        n(), t()
                                                                    }
                                                                    window.addEventListener("blur", i);
                                                                    let r = setTimeout(() => {
                                                                        n(), e()
                                                                    }, 2e3)
                                                                });
                                                                window.location.assign(i), yield t
                                                            }
                                                        }
                                                    } catch (t) {
                                                        throw new C(O.ERROR_WALLET_NOT_FOUND, "Found no installed wallet that supports the mobile wallet protocol.")
                                                    }
                                                    return n
                                                })
                                            }(i.publicKey, null == e ? void 0 : e.baseUri), s = `ws://localhost:${r}/solana-wallet`, a = (() => {
                                                let t = [...Y.retryDelayScheduleMs];
                                                return () => t.length > 1 ? t.shift() : t[0]
                                            })(), o = 1, c = 0, u = {
                                                __type: "disconnected"
                                            };
                                            return new Promise((e, l) => {
                                                let h, d, f;
                                                let y = {},
                                                    w = () => x(this, void 0, void 0, function*() {
                                                        if ("connecting" !== u.__type) {
                                                            console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${u.__type}\`.`);
                                                            return
                                                        }
                                                        let {
                                                            associationKeypair: t
                                                        } = u;
                                                        h.removeEventListener("open", w);
                                                        let e = yield function() {
                                                            return x(this, void 0, void 0, function*() {
                                                                return yield crypto.subtle.generateKey({
                                                                    name: "ECDH",
                                                                    namedCurve: "P-256"
                                                                }, !1, ["deriveKey", "deriveBits"])
                                                            })
                                                        }();
                                                        h.send((yield function(t, e) {
                                                            return x(this, void 0, void 0, function*() {
                                                                let n = yield crypto.subtle.exportKey("raw", t), i = yield crypto.subtle.sign({
                                                                    hash: "SHA-256",
                                                                    name: "ECDSA"
                                                                }, e, n), r = new Uint8Array(n.byteLength + i.byteLength);
                                                                return r.set(new Uint8Array(n), 0), r.set(new Uint8Array(i), n.byteLength), r
                                                            })
                                                        }(e.publicKey, t.privateKey))), u = {
                                                            __type: "hello_req_sent",
                                                            associationPublicKey: t.publicKey,
                                                            ecdhPrivateKey: e.privateKey
                                                        }
                                                    }),
                                                    p = t => {
                                                        t.wasClean ? u = {
                                                            __type: "disconnected"
                                                        } : l(new C(O.ERROR_SESSION_CLOSED, `The wallet session dropped unexpectedly (${t.code}: ${t.reason}).`, {
                                                            closeEvent: t
                                                        })), d()
                                                    },
                                                    m = t => x(this, void 0, void 0, function*() {
                                                        d(), Date.now() - n >= Y.timeoutMs ? l(new C(O.ERROR_SESSION_TIMEOUT, `Failed to connect to the wallet websocket on port ${r}.`)) : (yield new Promise(t => {
                                                            let e = a();
                                                            f = window.setTimeout(t, e)
                                                        }), g())
                                                    }),
                                                    M = n => x(this, void 0, void 0, function*() {
                                                        let i = yield n.data.arrayBuffer();
                                                        switch (u.__type) {
                                                            case "connected":
                                                                try {
                                                                    let t = i.slice(0, 4),
                                                                        e = G(t);
                                                                    if (e !== c + 1) throw Error("Encrypted message has invalid sequence number");
                                                                    c = e;
                                                                    let n = yield function(t, e) {
                                                                        return x(this, void 0, void 0, function*() {
                                                                            let n = JSON.parse((yield R(t, e)));
                                                                            if (Object.hasOwnProperty.call(n, "error")) throw new z(n.id, n.error.code, n.error.message);
                                                                            return n
                                                                        })
                                                                    }(i, u.sharedSecret), r = y[n.id];
                                                                    delete y[n.id], r.resolve(n.result)
                                                                } catch (t) {
                                                                    if (t instanceof z) {
                                                                        let e = y[t.jsonRpcMessageId];
                                                                        delete y[t.jsonRpcMessageId], e.reject(t)
                                                                    } else throw t
                                                                }
                                                                break;
                                                            case "hello_req_sent": {
                                                                var r, s;
                                                                let n = yield function(t, e, n) {
                                                                    return x(this, void 0, void 0, function*() {
                                                                        let [i, r] = yield Promise.all([crypto.subtle.exportKey("raw", e), crypto.subtle.importKey("raw", t.slice(0, 65), {
                                                                            name: "ECDH",
                                                                            namedCurve: "P-256"
                                                                        }, !1, [])]), s = yield crypto.subtle.deriveBits({
                                                                            name: "ECDH",
                                                                            public: r
                                                                        }, n, 256), a = yield crypto.subtle.importKey("raw", s, "HKDF", !1, ["deriveKey"]);
                                                                        return yield crypto.subtle.deriveKey({
                                                                            name: "HKDF",
                                                                            hash: "SHA-256",
                                                                            salt: new Uint8Array(i),
                                                                            info: new Uint8Array
                                                                        }, a, {
                                                                            name: "AES-GCM",
                                                                            length: 128
                                                                        }, !1, ["encrypt", "decrypt"])
                                                                    })
                                                                }(i, u.associationPublicKey, u.ecdhPrivateKey), a = i.slice(65), f = 0 !== a.byteLength ? yield x(this, void 0, void 0, function*() {
                                                                    let t = G(a.slice(0, 4));
                                                                    if (t !== c + 1) throw Error("Encrypted message has invalid sequence number");
                                                                    return c = t,
                                                                        function(t, e) {
                                                                            return x(this, void 0, void 0, function*() {
                                                                                let n = JSON.parse((yield R(t, e))),
                                                                                    i = "legacy";
                                                                                if (Object.hasOwnProperty.call(n, "v")) switch (n.v) {
                                                                                    case 1:
                                                                                    case "1":
                                                                                    case "v1":
                                                                                        i = "v1";
                                                                                        break;
                                                                                    case "legacy":
                                                                                        i = "legacy";
                                                                                        break;
                                                                                    default:
                                                                                        throw new C(O.ERROR_INVALID_PROTOCOL_VERSION, `Unknown/unsupported protocol version: ${n.v}`)
                                                                                }
                                                                                return {
                                                                                    protocol_version: i
                                                                                }
                                                                            })
                                                                        }(a, n)
                                                                }): {
                                                                    protocol_version: "legacy"
                                                                };
                                                                u = {
                                                                    __type: "connected",
                                                                    sharedSecret: n,
                                                                    sessionProperties: f
                                                                };
                                                                let w = (r = f.protocol_version, s = (t, e) => x(this, void 0, void 0, function*() {
                                                                    let i = o++;
                                                                    return h.send((yield function(t, e) {
                                                                        return x(this, void 0, void 0, function*() {
                                                                            let n = JSON.stringify(t);
                                                                            return function(t, e, n) {
                                                                                return x(this, void 0, void 0, function*() {
                                                                                    let i = function(t) {
                                                                                            if (t >= 4294967296) throw Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
                                                                                            let e = new ArrayBuffer(4);
                                                                                            return new DataView(e).setUint32(0, t, !1), new Uint8Array(e)
                                                                                        }(e),
                                                                                        r = new Uint8Array(12);
                                                                                    crypto.getRandomValues(r);
                                                                                    let s = yield crypto.subtle.encrypt(k(i, r), n, new TextEncoder().encode(t)), a = new Uint8Array(i.byteLength + r.byteLength + s.byteLength);
                                                                                    return a.set(new Uint8Array(i), 0), a.set(new Uint8Array(r), i.byteLength), a.set(new Uint8Array(s), i.byteLength + r.byteLength), a
                                                                                })
                                                                            }(n, t.id, e)
                                                                        })
                                                                    }({
                                                                        id: i,
                                                                        jsonrpc: "2.0",
                                                                        method: t,
                                                                        params: null != e ? e : {}
                                                                    }, n))), new Promise((e, n) => {
                                                                        y[i] = {
                                                                            resolve(i) {
                                                                                switch (t) {
                                                                                    case "authorize":
                                                                                    case "reauthorize": {
                                                                                        let {
                                                                                            wallet_uri_base: t
                                                                                        } = i;
                                                                                        if (null != t) try {
                                                                                            ! function(t) {
                                                                                                let e;
                                                                                                try {
                                                                                                    e = new URL(t)
                                                                                                } catch (t) {
                                                                                                    throw new C(O.ERROR_FORBIDDEN_WALLET_BASE_URL, "Invalid base URL supplied by wallet")
                                                                                                }
                                                                                                if ("https:" !== e.protocol) throw new C(O.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
                                                                                            }(t)
                                                                                        } catch (t) {
                                                                                            n(t);
                                                                                            return
                                                                                        }
                                                                                    }
                                                                                }
                                                                                e(i)
                                                                            },
                                                                            reject: n
                                                                        }
                                                                    })
                                                                }), new Proxy({}, {
                                                                    get: (t, e) => (null == t[e] && (t[e] = function(t) {
                                                                        return x(this, void 0, void 0, function*() {
                                                                            let {
                                                                                method: n,
                                                                                params: i
                                                                            } = function(t, e, n) {
                                                                                let i = e,
                                                                                    r = t.toString().replace(/[A-Z]/g, t => `_${t.toLowerCase()}`).toLowerCase();
                                                                                switch (t) {
                                                                                    case "authorize": {
                                                                                        let {
                                                                                            chain: t
                                                                                        } = i;
                                                                                        if ("legacy" === n) {
                                                                                            switch (t) {
                                                                                                case "solana:testnet":
                                                                                                    t = "testnet";
                                                                                                    break;
                                                                                                case "solana:devnet":
                                                                                                    t = "devnet";
                                                                                                    break;
                                                                                                case "solana:mainnet":
                                                                                                    t = "mainnet-beta";
                                                                                                    break;
                                                                                                default:
                                                                                                    t = i.cluster
                                                                                            }
                                                                                            i.cluster = t
                                                                                        } else {
                                                                                            switch (t) {
                                                                                                case "testnet":
                                                                                                case "devnet":
                                                                                                    t = `solana:${t}`;
                                                                                                    break;
                                                                                                case "mainnet-beta":
                                                                                                    t = "solana:mainnet"
                                                                                            }
                                                                                            i.chain = t
                                                                                        }
                                                                                    }
                                                                                    case "reauthorize": {
                                                                                        let {
                                                                                            auth_token: t,
                                                                                            identity: e
                                                                                        } = i;
                                                                                        t && ("legacy" === n ? (r = "reauthorize", i = {
                                                                                            auth_token: t,
                                                                                            identity: e
                                                                                        }) : r = "authorize")
                                                                                    }
                                                                                }
                                                                                return {
                                                                                    method: r,
                                                                                    params: i
                                                                                }
                                                                            }(e, t, r), a = yield s(n, i);
                                                                            return "authorize" === n && i.sign_in_payload && !a.sign_in_result && (a.sign_in_result = yield function(t, e, n) {
                                                                                    var i;
                                                                                    return x(this, void 0, void 0, function*() {
                                                                                        var r, s;
                                                                                        let a = null !== (i = t.domain) && void 0 !== i ? i : window.location.host,
                                                                                            o = e.accounts[0].address,
                                                                                            c = (r = Object.assign(Object.assign({}, t), {
                                                                                                domain: a,
                                                                                                address: o
                                                                                            }), s = function(t) {
                                                                                                let e = `${t.domain} wants you to sign in with your Solana account:
`;
                                                                                                e += `${t.address}`, t.statement && (e += `

${t.statement}`);
                                                                                                let n = [];
                                                                                                if (t.uri && n.push(`URI: ${t.uri}`), t.version && n.push(`Version: ${t.version}`), t.chainId && n.push(`Chain ID: ${t.chainId}`), t.nonce && n.push(`Nonce: ${t.nonce}`), t.issuedAt && n.push(`Issued At: ${t.issuedAt}`), t.expirationTime && n.push(`Expiration Time: ${t.expirationTime}`), t.notBefore && n.push(`Not Before: ${t.notBefore}`), t.requestId && n.push(`Request ID: ${t.requestId}`), t.resources)
                                                                                                    for (let e of (n.push("Resources:"), t.resources)) n.push(`- ${e}`);
                                                                                                return n.length && (e += `

${n.join("\n")}`), e
                                                                                            }(r), window.btoa(s)),
                                                                                            u = yield n("sign_messages", {
                                                                                                addresses: [o],
                                                                                                payloads: [c]
                                                                                            });
                                                                                        return {
                                                                                            address: o,
                                                                                            signed_message: c,
                                                                                            signature: u.signed_payloads[0].slice(c.length)
                                                                                        }
                                                                                    })
                                                                                }(i.sign_in_payload, a, s)),
                                                                                function(t, e, n) {
                                                                                    if ("getCapabilities" === t) switch (n) {
                                                                                        case "legacy": {
                                                                                            let t = ["solana:signTransactions"];
                                                                                            return !0 === e.supports_clone_authorization && t.push(_), Object.assign(Object.assign({}, e), {
                                                                                                features: t
                                                                                            })
                                                                                        }
                                                                                        case "v1":
                                                                                            return Object.assign(Object.assign({}, e), {
                                                                                                supports_sign_and_send_transactions: !0,
                                                                                                supports_clone_authorization: e.features.includes(_)
                                                                                            })
                                                                                    }
                                                                                    return e
                                                                                }(e, a, r)
                                                                        })
                                                                    }), t[e]),
                                                                    defineProperty: () => !1,
                                                                    deleteProperty: () => !1
                                                                }));
                                                                try {
                                                                    e((yield t(w)))
                                                                } catch (t) {
                                                                    l(t)
                                                                } finally {
                                                                    d(), h.close()
                                                                }
                                                            }
                                                        }
                                                    }),
                                                    g = () => {
                                                        d && d(), u = {
                                                            __type: "connecting",
                                                            associationKeypair: i
                                                        }, void 0 === n && (n = Date.now()), (h = new WebSocket(s, ["com.solana.mobilewalletadapter.v1"])).addEventListener("open", w), h.addEventListener("close", p), h.addEventListener("error", m), h.addEventListener("message", M), d = () => {
                                                            window.clearTimeout(f), h.removeEventListener("open", w), h.removeEventListener("close", p), h.removeEventListener("error", m), h.removeEventListener("message", M)
                                                        }
                                                    };
                                                g()
                                            })
                                        })
                                    }(e => t(new Proxy({}, {
                                        get(t, n) {
                                            if (null == t[n]) switch (n) {
                                                case "signAndSendTransactions":
                                                    t[n] = function(t) {
                                                        var {
                                                            minContextSlot: n,
                                                            commitment: i,
                                                            skipPreflight: r,
                                                            maxRetries: s,
                                                            waitForCommitmentToSendNextTransaction: a,
                                                            transactions: o
                                                        } = t, c = F(t, ["minContextSlot", "commitment", "skipPreflight", "maxRetries", "waitForCommitmentToSendNextTransaction", "transactions"]);
                                                        return B(this, void 0, void 0, function*() {
                                                            let t = o.map(V),
                                                                u = {
                                                                    min_context_slot: n,
                                                                    commitment: i,
                                                                    skip_preflight: r,
                                                                    max_retries: s,
                                                                    wait_for_commitment_to_send_next_transaction: a
                                                                },
                                                                {
                                                                    signatures: l
                                                                } = yield e.signAndSendTransactions(Object.assign(Object.assign(Object.assign({}, c), Object.values(u).some(t => null != t) ? {
                                                                    options: u
                                                                } : null), {
                                                                    payloads: t
                                                                }));
                                                            return l.map(q).map(Z.encode)
                                                        })
                                                    };
                                                    break;
                                                case "signMessages":
                                                    t[n] = function(t) {
                                                        var {
                                                            payloads: n
                                                        } = t, i = F(t, ["payloads"]);
                                                        return B(this, void 0, void 0, function*() {
                                                            let t = n.map(H),
                                                                {
                                                                    signed_payloads: r
                                                                } = yield e.signMessages(Object.assign(Object.assign({}, i), {
                                                                    payloads: t
                                                                }));
                                                            return r.map(q)
                                                        })
                                                    };
                                                    break;
                                                case "signTransactions":
                                                    t[n] = function(t) {
                                                        var {
                                                            transactions: n
                                                        } = t, i = F(t, ["transactions"]);
                                                        return B(this, void 0, void 0, function*() {
                                                            let t = n.map(V),
                                                                {
                                                                    signed_payloads: r
                                                                } = yield e.signTransactions(Object.assign(Object.assign({}, i), {
                                                                    payloads: t
                                                                }));
                                                            return r.map(q).map(K)
                                                        })
                                                    };
                                                    break;
                                                default:
                                                    t[n] = e[n]
                                            }
                                            return t[n]
                                        },
                                        defineProperty: () => !1,
                                        deleteProperty: () => !1
                                    })), e)
                                })
                            }(t, n ? {
                                baseUri: n
                            } : void 0)
                        } catch (t) {
                            throw this._connectionGeneration !== i && (yield new Promise(() => {})), t instanceof Error && "SolanaMobileWalletAdapterError" === t.name && "ERROR_WALLET_NOT_FOUND" === t.code && (yield this._onWalletNotFound(this)), t
                        }
                    })
                }
                assertIsAuthorized() {
                    if (!this._authorizationResult || !this._selectedAddress) throw new D.oS;
                    return {
                        authToken: this._authorizationResult.auth_token,
                        selectedAddress: this._selectedAddress
                    }
                }
                performSignTransactions(t) {
                    return $(this, void 0, void 0, function*() {
                        let {
                            authToken: e
                        } = this.assertIsAuthorized();
                        try {
                            return yield this.transact(n => $(this, void 0, void 0, function*() {
                                return yield this.performReauthorization(n, e), yield n.signTransactions({
                                    transactions: t
                                })
                            }))
                        } catch (t) {
                            throw new D.PY(null == t ? void 0 : t.message, t)
                        }
                    })
                }
                sendTransaction(t, e, n) {
                    return $(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => $(this, void 0, void 0, function*() {
                            let {
                                authToken: i
                            } = this.assertIsAuthorized(), r = null == n ? void 0 : n.minContextSlot;
                            try {
                                return yield this.transact(s => $(this, void 0, void 0, function*() {
                                    function a() {
                                        let t, i;
                                        switch (e.commitment) {
                                            case "confirmed":
                                            case "finalized":
                                            case "processed":
                                                t = e.commitment;
                                                break;
                                            default:
                                                t = "finalized"
                                        }
                                        switch (null == n ? void 0 : n.preflightCommitment) {
                                            case "confirmed":
                                            case "finalized":
                                            case "processed":
                                                i = n.preflightCommitment;
                                                break;
                                            case void 0:
                                                i = t;
                                            default:
                                                i = "finalized"
                                        }
                                        let r = "finalized" === i ? 2 : "confirmed" === i ? 1 : 0,
                                            s = "finalized" === t ? 2 : "confirmed" === t ? 1 : 0;
                                        return r < s ? i : t
                                    }
                                    let [o, c, u] = yield Promise.all([s.getCapabilities(), this.performReauthorization(s, i), tt(t) ? null : $(this, void 0, void 0, function*() {
                                        var n;
                                        if (t.feePayer || (t.feePayer = null !== (n = this.publicKey) && void 0 !== n ? n : void 0), null == t.recentBlockhash) {
                                            let {
                                                blockhash: n
                                            } = yield e.getLatestBlockhash({
                                                commitment: a()
                                            });
                                            t.recentBlockhash = n
                                        }
                                    })]);
                                    if (o.supports_sign_and_send_transactions) return (yield s.signAndSendTransactions({
                                        minContextSlot: r,
                                        transactions: [t]
                                    }))[0];
                                    {
                                        let [i] = yield s.signTransactions({
                                            transactions: [t]
                                        });
                                        if (tt(i)) return yield e.sendTransaction(i);
                                        {
                                            let t = i.serialize();
                                            return yield e.sendRawTransaction(t, Object.assign(Object.assign({}, n), {
                                                preflightCommitment: a()
                                            }))
                                        }
                                    }
                                }))
                            } catch (t) {
                                throw new D.IW(null == t ? void 0 : t.message, t)
                            }
                        }))
                    })
                }
                signTransaction(t) {
                    return $(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => $(this, void 0, void 0, function*() {
                            let [e] = yield this.performSignTransactions([t]);
                            return e
                        }))
                    })
                }
                signAllTransactions(t) {
                    return $(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => $(this, void 0, void 0, function*() {
                            return yield this.performSignTransactions(t)
                        }))
                    })
                }
                signMessage(t) {
                    return $(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => $(this, void 0, void 0, function*() {
                            let {
                                authToken: e,
                                selectedAddress: n
                            } = this.assertIsAuthorized();
                            try {
                                return yield this.transact(i => $(this, void 0, void 0, function*() {
                                    yield this.performReauthorization(i, e);
                                    let [r] = yield i.signMessages({
                                        addresses: [n],
                                        payloads: [t]
                                    });
                                    return r.slice(-64)
                                }))
                            } catch (t) {
                                throw new D.fk(null == t ? void 0 : t.message, t)
                            }
                        }))
                    })
                }
                signIn(t) {
                    return $(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => $(this, void 0, void 0, function*() {
                            var e, n;
                            if (this._readyState !== b.i1.Installed && this._readyState !== b.i1.Loadable) throw new D.OZ;
                            this._connecting = !0;
                            try {
                                let i = yield this.performAuthorization(Object.assign(Object.assign({}, t), {
                                    domain: null !== (e = null == t ? void 0 : t.domain) && void 0 !== e ? e : window.location.host
                                }));
                                if (!i.sign_in_result) throw Error("Sign in failed, no sign in result returned by wallet");
                                let r = i.sign_in_result.address;
                                return {
                                    account: Object.assign(Object.assign({}, null !== (n = i.accounts.find(t => t.address == r)) && void 0 !== n ? n : {
                                        address: r
                                    }), {
                                        publicKey: J(r)
                                    }),
                                    signedMessage: J(i.sign_in_result.signed_message),
                                    signature: J(i.sign_in_result.signature)
                                }
                            } catch (t) {
                                throw new D.$w(t instanceof Error && t.message || "Unknown error", t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
            }
            let tn = "SolanaMobileWalletAdapterDefaultAuthorizationCache";

            function ti(t) {
                return $(this, void 0, void 0, function*() {
                    "undefined" != typeof window && window.location.assign(t.url)
                })
            }
            var tr = n(89036),
                ts = n(34796),
                ta = n(5713),
                to = n(86471);
            let tc = function(t) {
                return ta.V in t.features && to.k in t.features && (tr.G in t.features || ts.R in t.features)
            };
            var tu = n(56779),
                tl = n(21008);
            let th = "solana:signIn";
            var td = n(46639);

            function tf(t) {
                switch (t) {
                    case "processed":
                    case "confirmed":
                    case "finalized":
                    case void 0:
                        return t;
                    case "recent":
                        return "processed";
                    case "single":
                    case "singleGossip":
                        return "confirmed";
                    case "max":
                    case "root":
                        return "finalized";
                    default:
                        return
                }
            }
            var ty = n(32007);
            new WeakMap, new WeakMap, new WeakMap, new WeakMap, new WeakMap, new WeakMap;
            var tw = n(68870),
                tp = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                },
                tm = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                };
            class tM extends b.mI {
                constructor({
                    wallet: t
                }) {
                    super(), o.add(this), c.set(this, void 0), u.set(this, void 0), l.set(this, void 0), h.set(this, void 0), d.set(this, void 0), f.set(this, void 0), y.set(this, void 0), w.set(this, "undefined" == typeof window || "undefined" == typeof document ? b.i1.Unsupported : b.i1.Installed), v.set(this, t => {
                        if ("accounts" in t) {
                            let t = tm(this, y, "f").accounts[0];
                            tm(this, c, "f") && !tm(this, h, "f") && t !== tm(this, c, "f") && (t ? tm(this, o, "m", m).call(this, t) : (this.emit("error", new D.at), tm(this, o, "m", M).call(this)))
                        }
                        "features" in t && tm(this, o, "m", g).call(this)
                    }), tp(this, y, t, "f"), tp(this, c, null, "f"), tp(this, u, null, "f"), tp(this, l, !1, "f"), tp(this, h, !1, "f"), tp(this, d, tm(this, y, "f").features[to.k].on("change", tm(this, v, "f")), "f"), tm(this, o, "m", g).call(this)
                }
                get name() {
                    return tm(this, y, "f").name
                }
                get url() {
                    return "https://github.com/solana-labs/wallet-standard"
                }
                get icon() {
                    return tm(this, y, "f").icon
                }
                get readyState() {
                    return tm(this, w, "f")
                }
                get publicKey() {
                    return tm(this, u, "f")
                }
                get connecting() {
                    return tm(this, l, "f")
                }
                get supportedTransactionVersions() {
                    return tm(this, f, "f")
                }
                get wallet() {
                    return tm(this, y, "f")
                }
                get standard() {
                    return !0
                }
                destroy() {
                    tp(this, c, null, "f"), tp(this, u, null, "f"), tp(this, l, !1, "f"), tp(this, h, !1, "f");
                    let t = tm(this, d, "f");
                    t && (tp(this, d, null, "f"), t())
                }
                async autoConnect() {
                    return tm(this, o, "m", p).call(this, {
                        silent: !0
                    })
                }
                async connect() {
                    return tm(this, o, "m", p).call(this)
                }
                async disconnect() {
                    if (ty.R in tm(this, y, "f").features) try {
                        tp(this, h, !0, "f"), await tm(this, y, "f").features[ty.R].disconnect()
                    } catch (t) {
                        this.emit("error", new D.UG(t?.message, t))
                    } finally {
                        tp(this, h, !1, "f")
                    }
                    tm(this, o, "m", M).call(this)
                }
                async sendTransaction(t, e, n = {}) {
                    try {
                        var i;
                        let r;
                        let s = tm(this, c, "f");
                        if (!s) throw new D.oS;
                        if (tr.G in tm(this, y, "f").features) {
                            if (s.features.includes(tr.G)) r = tr.G;
                            else if (ts.R in tm(this, y, "f").features && s.features.includes(ts.R)) r = ts.R;
                            else throw new D.cO
                        } else if (ts.R in tm(this, y, "f").features) {
                            if (!s.features.includes(ts.R)) throw new D.cO;
                            r = ts.R
                        } else throw new D.p6;
                        let a = (i = e.rpcEndpoint).includes("https://api.mainnet-beta.solana.com") ? td.aI : /\bdevnet\b/i.test(i) ? td.BR : /\btestnet\b/i.test(i) ? td.gv : /\blocalhost\b/i.test(i) || /\b127\.0\.0\.1\b/.test(i) ? td.l1 : td.aI;
                        if (!s.chains.includes(a)) throw new D.IW;
                        try {
                            let i;
                            let {
                                signers: o,
                                ...c
                            } = n;
                            if ((0, tu.W)(t) ? (o?.length && t.sign(o), i = t.serialize()) : (t = await this.prepareTransaction(t, e, c), o?.length && t.partialSign(...o), i = new Uint8Array(t.serialize({
                                    requireAllSignatures: !1,
                                    verifySignatures: !1
                                }))), r === tr.G) {
                                let [t] = await tm(this, y, "f").features[tr.G].signAndSendTransaction({
                                    account: s,
                                    chain: a,
                                    transaction: i,
                                    options: {
                                        preflightCommitment: tf(c.preflightCommitment || e.commitment),
                                        skipPreflight: c.skipPreflight,
                                        maxRetries: c.maxRetries,
                                        minContextSlot: c.minContextSlot
                                    }
                                });
                                return tw.encode(t.signature)
                            } {
                                let [t] = await tm(this, y, "f").features[ts.R].signTransaction({
                                    account: s,
                                    chain: a,
                                    transaction: i,
                                    options: {
                                        preflightCommitment: tf(c.preflightCommitment || e.commitment),
                                        minContextSlot: c.minContextSlot
                                    }
                                });
                                return await e.sendRawTransaction(t.signedTransaction, {
                                    ...c,
                                    preflightCommitment: tf(c.preflightCommitment || e.commitment)
                                })
                            }
                        } catch (t) {
                            if (t instanceof D.lj) throw t;
                            throw new D.IW(t?.message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
            }
            c = new WeakMap, u = new WeakMap, l = new WeakMap, h = new WeakMap, d = new WeakMap, f = new WeakMap, y = new WeakMap, w = new WeakMap, v = new WeakMap, o = new WeakSet, p = async function(t) {
                try {
                    if (this.connected || this.connecting) return;
                    if (tm(this, w, "f") !== b.i1.Installed) throw new D.OZ;
                    if (tp(this, l, !0, "f"), !tm(this, y, "f").accounts.length) try {
                        await tm(this, y, "f").features[ta.V].connect(t)
                    } catch (t) {
                        throw new D.$w(t?.message, t)
                    }
                    let e = tm(this, y, "f").accounts[0];
                    if (!e) throw new D.cO;
                    tm(this, o, "m", m).call(this, e)
                } catch (t) {
                    throw this.emit("error", t), t
                } finally {
                    tp(this, l, !1, "f")
                }
            }, m = function(t) {
                let e;
                try {
                    e = new A.PublicKey(t.address)
                } catch (t) {
                    throw new D.Nx(t?.message, t)
                }
                tp(this, c, t, "f"), tp(this, u, e, "f"), tm(this, o, "m", g).call(this), this.emit("connect", e)
            }, M = function() {
                tp(this, c, null, "f"), tp(this, u, null, "f"), tm(this, o, "m", g).call(this), this.emit("disconnect")
            }, g = function() {
                let t = tr.G in tm(this, y, "f").features ? tm(this, y, "f").features[tr.G].supportedTransactionVersions : tm(this, y, "f").features[ts.R].supportedTransactionVersions;
                tp(this, f, ! function(t, e) {
                    if (t === e) return !0;
                    let n = t.length;
                    if (n !== e.length) return !1;
                    for (let i = 0; i < n; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
                }(t, ["legacy"]) ? new Set(t) : null, "f"), ts.R in tm(this, y, "f").features && tm(this, c, "f")?.features.includes(ts.R) ? (this.signTransaction = tm(this, o, "m", j), this.signAllTransactions = tm(this, o, "m", L)) : (delete this.signTransaction, delete this.signAllTransactions), tl.g in tm(this, y, "f").features && tm(this, c, "f")?.features.includes(tl.g) ? this.signMessage = tm(this, o, "m", I) : delete this.signMessage, th in tm(this, y, "f").features ? this.signIn = tm(this, o, "m", N) : delete this.signIn
            }, j = async function(t) {
                try {
                    let e = tm(this, c, "f");
                    if (!e) throw new D.oS;
                    if (!(ts.R in tm(this, y, "f").features)) throw new D.p6;
                    if (!e.features.includes(ts.R)) throw new D.cO;
                    try {
                        let n = (await tm(this, y, "f").features[ts.R].signTransaction({
                            account: e,
                            transaction: (0, tu.W)(t) ? t.serialize() : new Uint8Array(t.serialize({
                                requireAllSignatures: !1,
                                verifySignatures: !1
                            }))
                        }))[0].signedTransaction;
                        return (0, tu.W)(t) ? A.VersionedTransaction.deserialize(n) : A.Transaction.from(n)
                    } catch (t) {
                        if (t instanceof D.lj) throw t;
                        throw new D.PY(t?.message, t)
                    }
                } catch (t) {
                    throw this.emit("error", t), t
                }
            }, L = async function(t) {
                try {
                    let e = tm(this, c, "f");
                    if (!e) throw new D.oS;
                    if (!(ts.R in tm(this, y, "f").features)) throw new D.p6;
                    if (!e.features.includes(ts.R)) throw new D.cO;
                    try {
                        let n = await tm(this, y, "f").features[ts.R].signTransaction(...t.map(t => ({
                            account: e,
                            transaction: (0, tu.W)(t) ? t.serialize() : new Uint8Array(t.serialize({
                                requireAllSignatures: !1,
                                verifySignatures: !1
                            }))
                        })));
                        return t.map((t, e) => {
                            let i = n[e].signedTransaction;
                            return (0, tu.W)(t) ? A.VersionedTransaction.deserialize(i) : A.Transaction.from(i)
                        })
                    } catch (t) {
                        throw new D.PY(t?.message, t)
                    }
                } catch (t) {
                    throw this.emit("error", t), t
                }
            }, I = async function(t) {
                try {
                    let e = tm(this, c, "f");
                    if (!e) throw new D.oS;
                    if (!(tl.g in tm(this, y, "f").features)) throw new D.p6;
                    if (!e.features.includes(tl.g)) throw new D.cO;
                    try {
                        return (await tm(this, y, "f").features[tl.g].signMessage({
                            account: e,
                            message: t
                        }))[0].signature
                    } catch (t) {
                        throw new D.fk(t?.message, t)
                    }
                } catch (t) {
                    throw this.emit("error", t), t
                }
            }, N = async function(t = {}) {
                try {
                    let e;
                    if (!(th in tm(this, y, "f").features)) throw new D.p6;
                    try {
                        [e] = await tm(this, y, "f").features[th].signIn(t)
                    } catch (t) {
                        throw new D.bD(t?.message, t)
                    }
                    if (!e) throw new D.bD;
                    return tm(this, o, "m", m).call(this, e.account), e
                } catch (t) {
                    throw this.emit("error", t), t
                }
            };
            var tg = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                },
                tv = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                };
            let tj = new Set,
                tL = {};

            function tI(...t) {
                return (t = t.filter(t => !tj.has(t))).length ? (t.forEach(t => tj.add(t)), tL.register?.forEach(e => tS(() => e(...t))), function() {
                    t.forEach(t => tj.delete(t)), tL.unregister?.forEach(e => tS(() => e(...t)))
                }) : () => {}
            }

            function tN() {
                return [...tj]
            }

            function tE(t, e) {
                return tL[t]?.push(e) || (tL[t] = [e]),
                    function() {
                        tL[t] = tL[t]?.filter(t => e !== t)
                    }
            }

            function tS(t) {
                try {
                    t()
                } catch (t) {
                    console.error(t)
                }
            }
            class tT extends Event {
                constructor(t) {
                    super("wallet-standard:app-ready", {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !1
                    }), E.set(this, void 0), tg(this, E, t, "f")
                }
                get detail() {
                    return tv(this, E, "f")
                }
                get type() {
                    return "wallet-standard:app-ready"
                }
                preventDefault() {
                    throw Error("preventDefault cannot be called")
                }
                stopImmediatePropagation() {
                    throw Error("stopImmediatePropagation cannot be called")
                }
                stopPropagation() {
                    throw Error("stopPropagation cannot be called")
                }
            }
            E = new WeakMap;
            var tb = n(2265);

            function tD(t) {
                let e = (0, tb.useRef)();
                return e.current || (e.current = {
                    value: t()
                }), e.current.value
            }

            function tA(t) {
                return t.filter(tc).map(t => new tM({
                    wallet: t
                }))
            }(a = S || (S = {}))[a.DESKTOP_WEB = 0] = "DESKTOP_WEB", a[a.MOBILE_WEB = 1] = "MOBILE_WEB";
            var tO = n(72086);
            class tC extends D.lj {
                constructor() {
                    super(...arguments), this.name = "WalletNotSelectedError"
                }
            }
            var tz = n(3446);

            function tx({
                children: t,
                wallets: e,
                adapter: n,
                isUnloadingRef: i,
                onAutoConnectRequest: r,
                onConnectError: s,
                onError: a,
                onSelectWallet: o
            }) {
                let c = (0, tb.useRef)(!1),
                    [u, l] = (0, tb.useState)(!1),
                    h = (0, tb.useRef)(!1),
                    [d, f] = (0, tb.useState)(!1),
                    [y, w] = (0, tb.useState)(() => n?.publicKey ?? null),
                    [p, m] = (0, tb.useState)(() => n?.connected ?? !1),
                    M = (0, tb.useRef)(a);
                (0, tb.useEffect)(() => (M.current = a, () => {
                    M.current = void 0
                }), [a]);
                let g = (0, tb.useRef)((t, e) => (!i.current && (M.current ? M.current(t, e) : (console.error(t, e), t instanceof D.OZ && "undefined" != typeof window && e && window.open(e.url, "_blank"))), t)),
                    [v, j] = (0, tb.useState)(() => e.map(t => ({
                        adapter: t,
                        readyState: t.readyState
                    })).filter(({
                        readyState: t
                    }) => t !== b.i1.Unsupported));
                (0, tb.useEffect)(() => {
                    function t(t) {
                        j(e => {
                            let n = e.findIndex(({
                                adapter: t
                            }) => t === this);
                            if (-1 === n) return e;
                            let {
                                adapter: i
                            } = e[n];
                            return [...e.slice(0, n), {
                                adapter: i,
                                readyState: t
                            }, ...e.slice(n + 1)].filter(({
                                readyState: t
                            }) => t !== b.i1.Unsupported)
                        })
                    }
                    return j(t => e.map((e, n) => {
                        let i = t[n];
                        return i && i.adapter === e && i.readyState === e.readyState ? i : {
                            adapter: e,
                            readyState: e.readyState
                        }
                    }).filter(({
                        readyState: t
                    }) => t !== b.i1.Unsupported)), e.forEach(e => e.on("readyStateChange", t, e)), () => {
                        e.forEach(e => e.off("readyStateChange", t, e))
                    }
                }, [n, e]);
                let L = (0, tb.useMemo)(() => v.find(t => t.adapter === n) ?? null, [n, v]);
                (0, tb.useEffect)(() => {
                    if (!n) return;
                    let t = t => {
                            w(t), c.current = !1, l(!1), m(!0), h.current = !1, f(!1)
                        },
                        e = () => {
                            i.current || (w(null), c.current = !1, l(!1), m(!1), h.current = !1, f(!1))
                        },
                        r = t => {
                            g.current(t, n)
                        };
                    return n.on("connect", t), n.on("disconnect", e), n.on("error", r), () => {
                        n.off("connect", t), n.off("disconnect", e), n.off("error", r), e()
                    }
                }, [n, i]);
                let I = (0, tb.useRef)(!1);
                (0, tb.useEffect)(() => () => {
                    I.current = !1
                }, [n]), (0, tb.useEffect)(() => {
                    I.current || c.current || p || !r || L?.readyState !== b.i1.Installed && L?.readyState !== b.i1.Loadable || (c.current = !0, l(!0), I.current = !0, async function() {
                        try {
                            await r()
                        } catch {
                            s()
                        } finally {
                            l(!1), c.current = !1
                        }
                    }())
                }, [p, r, s, L]);
                let N = (0, tb.useCallback)(async (t, e, i) => {
                        if (!n) throw g.current(new tC);
                        if (!p) throw g.current(new D.oS, n);
                        return await n.sendTransaction(t, e, i)
                    }, [n, p]),
                    E = (0, tb.useMemo)(() => n && "signTransaction" in n ? async t => {
                        if (!p) throw g.current(new D.oS, n);
                        return await n.signTransaction(t)
                    }: void 0, [n, p]),
                    S = (0, tb.useMemo)(() => n && "signAllTransactions" in n ? async t => {
                        if (!p) throw g.current(new D.oS, n);
                        return await n.signAllTransactions(t)
                    }: void 0, [n, p]),
                    T = (0, tb.useMemo)(() => n && "signMessage" in n ? async t => {
                        if (!p) throw g.current(new D.oS, n);
                        return await n.signMessage(t)
                    }: void 0, [n, p]),
                    A = (0, tb.useMemo)(() => n && "signIn" in n ? async t => await n.signIn(t): void 0, [n]),
                    O = (0, tb.useCallback)(async () => {
                        if (c.current || h.current || L?.adapter.connected) return;
                        if (!L) throw g.current(new tC);
                        let {
                            adapter: t,
                            readyState: e
                        } = L;
                        if (!(e === b.i1.Installed || e === b.i1.Loadable)) throw g.current(new D.OZ, t);
                        c.current = !0, l(!0);
                        try {
                            await t.connect()
                        } catch (t) {
                            throw s(), t
                        } finally {
                            l(!1), c.current = !1
                        }
                    }, [s, L]),
                    C = (0, tb.useCallback)(async () => {
                        if (!h.current && n) {
                            h.current = !0, f(!0);
                            try {
                                await n.disconnect()
                            } finally {
                                f(!1), h.current = !1
                            }
                        }
                    }, [n]);
                return tb.createElement(tz.z.Provider, {
                    value: {
                        autoConnect: !!r,
                        wallets: v,
                        wallet: L,
                        publicKey: y,
                        connected: p,
                        connecting: u,
                        disconnecting: d,
                        select: o,
                        connect: O,
                        disconnect: C,
                        sendTransaction: N,
                        signTransaction: E,
                        signAllTransactions: S,
                        signMessage: T,
                        signIn: A
                    }
                }, t)
            }

            function t_(t) {
                return function({
                    adapters: t,
                    userAgentString: e
                }) {
                    return t.some(t => t.name !== X && t.readyState === b.i1.Installed) ? S.DESKTOP_WEB : e && /android/i.test(e) && !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(e) ? S.MOBILE_WEB : S.DESKTOP_WEB
                }({
                    adapters: t,
                    userAgentString: (void 0 === r && (r = globalThis.navigator?.userAgent ?? null), r)
                }) === S.MOBILE_WEB
            }

            function tR({
                children: t,
                wallets: e,
                autoConnect: n,
                localStorageKey: i = "walletName",
                onError: r
            }) {
                let {
                    connection: a
                } = (0, tO.R)(), o = function(t) {
                    let e = tD(() => new Set),
                        {
                            get: n,
                            on: i
                        } = tD(() => (function() {
                            if (s || (s = function() {
                                    if (s || (s = Object.freeze({
                                            register: tI,
                                            get: tN,
                                            on: tE
                                        }), "undefined" == typeof window)) return s;
                                    let t = Object.freeze({
                                        register: tI
                                    });
                                    try {
                                        window.addEventListener("wallet-standard:register-wallet", ({
                                            detail: e
                                        }) => e(t))
                                    } catch (t) {
                                        console.error("wallet-standard:register-wallet event listener could not be added\n", t)
                                    }
                                    try {
                                        window.dispatchEvent(new tT(t))
                                    } catch (t) {
                                        console.error("wallet-standard:app-ready event could not be dispatched\n", t)
                                    }
                                    return s
                                }(), "undefined" == typeof window)) return s;
                            let t = window.navigator.wallets || [];
                            if (!Array.isArray(t)) return console.error("window.navigator.wallets is not an array"), s;
                            let {
                                register: e
                            } = s, n = (...t) => t.forEach(t => tS(() => t({
                                register: e
                            })));
                            try {
                                Object.defineProperty(window.navigator, "wallets", {
                                    value: Object.freeze({
                                        push: n
                                    })
                                })
                            } catch (t) {
                                return console.error("window.navigator.wallets could not be set"), s
                            }
                            return n(...t), s
                        })()),
                        [r, a] = (0, tb.useState)(() => tA(n()));
                    (0, tb.useEffect)(() => {
                        let t = [i("register", (...t) => a(e => [...e, ...tA(t)])), i("unregister", (...t) => a(e => e.filter(e => t.some(t => t === e.wallet))))];
                        return () => t.forEach(t => t())
                    }, [i]);
                    let o = function(t) {
                        let e = (0, tb.useRef)();
                        return (0, tb.useEffect)(() => {
                            e.current = t
                        }), e.current
                    }(r);
                    return (0, tb.useEffect)(() => {
                        if (!o) return;
                        let t = new Set(r);
                        new Set(o.filter(e => !t.has(e))).forEach(t => t.destroy())
                    }, [o, r]), (0, tb.useEffect)(() => () => r.forEach(t => t.destroy()), []), (0, tb.useMemo)(() => [...r, ...t.filter(({
                        name: t
                    }) => !r.some(e => e.name === t) || (e.has(t) || (e.add(t), console.warn(`${t} was registered as a Standard Wallet. The Wallet Adapter for ${t} can be removed from your app.`)), !1))], [r, t, e])
                }(e), c = (0, tb.useMemo)(() => {
                    var t;
                    if (!t_(o)) return null;
                    let e = o.find(t => t.name === X);
                    return e || new te({
                        addressSelector: {
                            select(t) {
                                return $(this, void 0, void 0, function*() {
                                    return t[0]
                                })
                            }
                        },
                        appIdentity: {
                            uri: function() {
                                let t = globalThis.location;
                                if (t) return `${t.protocol}//${t.host}`
                            }()
                        },
                        authorizationResultCache: function() {
                            let t;
                            try {
                                t = window.localStorage
                            } catch (t) {}
                            return {
                                clear() {
                                    return $(this, void 0, void 0, function*() {
                                        if (t) try {
                                            t.removeItem(tn)
                                        } catch (t) {}
                                    })
                                },
                                get() {
                                    return $(this, void 0, void 0, function*() {
                                        if (t) try {
                                            return JSON.parse(t.getItem(tn)) || void 0
                                        } catch (t) {}
                                    })
                                },
                                set(e) {
                                    return $(this, void 0, void 0, function*() {
                                        if (t) try {
                                            t.setItem(tn, JSON.stringify(e))
                                        } catch (t) {}
                                    })
                                }
                            }
                        }(),
                        cluster: (t = a?.rpcEndpoint) ? /devnet/i.test(t) ? "devnet" : /testnet/i.test(t) ? "testnet" : "mainnet-beta" : "mainnet-beta",
                        onWalletNotFound: ti
                    })
                }, [o, a?.rpcEndpoint]), u = (0, tb.useMemo)(() => null == c || -1 !== o.indexOf(c) ? o : [c, ...o], [o, c]), [l, h] = function(t, e) {
                    let n = (0, tb.useState)(() => {
                            try {
                                let e = localStorage.getItem(t);
                                if (e) return JSON.parse(e)
                            } catch (t) {
                                "undefined" != typeof window && console.error(t)
                            }
                            return e
                        }),
                        i = n[0],
                        r = (0, tb.useRef)(!0);
                    return (0, tb.useEffect)(() => {
                        if (r.current) {
                            r.current = !1;
                            return
                        }
                        try {
                            null === i ? localStorage.removeItem(t) : localStorage.setItem(t, JSON.stringify(i))
                        } catch (t) {
                            "undefined" != typeof window && console.error(t)
                        }
                    }, [i, t]), n
                }(i, t_(o) ? X : null), d = (0, tb.useMemo)(() => u.find(t => t.name === l) ?? null, [u, l]), f = (0, tb.useCallback)(t => {
                    l !== t && (d && d.name !== X && d.disconnect(), h(t))
                }, [d, h, l]);
                (0, tb.useEffect)(() => {
                    if (d) return d.on("disconnect", t), () => {
                        d.off("disconnect", t)
                    };

                    function t() {
                        !p.current && (l === X && t_(o) || h(null))
                    }
                }, [d, o, h, l]);
                let y = (0, tb.useRef)(!1),
                    w = (0, tb.useMemo)(() => {
                        if (n && d) return async () => {
                            (!0 === n || await n(d)) && (y.current ? await d.connect() : await d.autoConnect())
                        }
                    }, [n, d]),
                    p = (0, tb.useRef)(!1);
                (0, tb.useEffect)(() => {
                    if (l === X && t_(o)) {
                        p.current = !1;
                        return
                    }

                    function t() {
                        p.current = !0
                    }
                    return window.addEventListener("beforeunload", t), () => {
                        window.removeEventListener("beforeunload", t)
                    }
                }, [o, l]);
                let m = (0, tb.useCallback)(() => {
                        d && d.name !== X && f(null)
                    }, [d, f]),
                    M = (0, tb.useCallback)(t => {
                        y.current = !0, f(t)
                    }, [f]);
                return tb.createElement(tx, {
                    wallets: u,
                    adapter: d,
                    isUnloadingRef: p,
                    onAutoConnectRequest: w,
                    onConnectError: m,
                    onError: r,
                    onSelectWallet: M
                }, t)
            }
        },
        62668: function(t, e, n) {
            "use strict";
            n.d(e, {
                e: function() {
                    return U
                }
            });
            var i, r, s, a, o, c, u, l, h, d, f, y, w, p, m, M = n(84207),
                g = n(90194),
                v = n(28320),
                j = n(56779),
                L = n(63438),
                I = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                },
                N = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                };
            class E extends Event {
                constructor(t) {
                    super("wallet-standard:register-wallet", {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !1
                    }), i.set(this, void 0), I(this, i, t, "f")
                }
                get detail() {
                    return N(this, i, "f")
                }
                get type() {
                    return "wallet-standard:register-wallet"
                }
                preventDefault() {
                    throw Error("preventDefault cannot be called")
                }
                stopImmediatePropagation() {
                    throw Error("stopImmediatePropagation cannot be called")
                }
                stopPropagation() {
                    throw Error("stopPropagation cannot be called")
                }
            }
            i = new WeakMap;
            var S = n(46639),
                T = n(89036),
                b = n(34796),
                D = n(21008),
                A = n(5713),
                O = n(32007),
                C = n(86471),
                z = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                },
                x = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                };
            class _ {
                constructor() {
                    r.add(this), s.set(this, {}), a.set(this, "1.0.0"), o.set(this, "MetaMask"), c.set(this, "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="), u.set(this, null), l.set(this, (t, e) => (z(this, s, "f")[t]?.push(e) || (z(this, s, "f")[t] = [e]), () => z(this, r, "m", d).call(this, t, e))), f.set(this, async () => {
                        if (!z(this, u, "f")) {
                            let t;
                            try {
                                t = (await n.e(941).then(n.bind(n, 5941))).default
                            } catch (t) {
                                throw Error("Unable to load Solflare MetaMask SDK")
                            }
                            x(this, u, new t, "f"), z(this, u, "f").on("standard_change", t => z(this, r, "m", h).call(this, "change", t))
                        }
                        return this.accounts.length || await z(this, u, "f").connect(), {
                            accounts: this.accounts
                        }
                    }), y.set(this, async () => {
                        z(this, u, "f") && await z(this, u, "f").disconnect()
                    }), w.set(this, async (...t) => {
                        if (!z(this, u, "f")) throw new v.oS;
                        return await z(this, u, "f").standardSignAndSendTransaction(...t)
                    }), p.set(this, async (...t) => {
                        if (!z(this, u, "f")) throw new v.oS;
                        return await z(this, u, "f").standardSignTransaction(...t)
                    }), m.set(this, async (...t) => {
                        if (!z(this, u, "f")) throw new v.oS;
                        return await z(this, u, "f").standardSignMessage(...t)
                    })
                }
                get version() {
                    return z(this, a, "f")
                }
                get name() {
                    return z(this, o, "f")
                }
                get icon() {
                    return z(this, c, "f")
                }
                get chains() {
                    return [S.aI, S.BR, S.gv]
                }
                get features() {
                    return {
                        [A.V]: {
                            version: "1.0.0",
                            connect: z(this, f, "f")
                        },
                        [O.R]: {
                            version: "1.0.0",
                            disconnect: z(this, y, "f")
                        },
                        [C.k]: {
                            version: "1.0.0",
                            on: z(this, l, "f")
                        },
                        [T.G]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signAndSendTransaction: z(this, w, "f")
                        },
                        [b.R]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signTransaction: z(this, p, "f")
                        },
                        [D.g]: {
                            version: "1.0.0",
                            signMessage: z(this, m, "f")
                        }
                    }
                }
                get accounts() {
                    return z(this, u, "f") ? z(this, u, "f").standardAccounts : []
                }
            }
            s = new WeakMap, a = new WeakMap, o = new WeakMap, c = new WeakMap, u = new WeakMap, l = new WeakMap, f = new WeakMap, y = new WeakMap, w = new WeakMap, p = new WeakMap, m = new WeakMap, r = new WeakSet, h = function(t, ...e) {
                z(this, s, "f")[t]?.forEach(t => t.apply(null, e))
            }, d = function(t, e) {
                z(this, s, "f")[t] = z(this, s, "f")[t]?.filter(t => e !== t)
            };
            let R = !1;
            async function k() {
                let t = "solflare-detect-metamask";

                function e() {
                    window.postMessage({
                        target: "metamask-contentscript",
                        data: {
                            name: "metamask-provider",
                            data: {
                                id: t,
                                jsonrpc: "2.0",
                                method: "wallet_getSnaps"
                            }
                        }
                    }, window.location.origin)
                }

                function n(i) {
                    let r = i.data;
                    r?.target === "metamask-inpage" && r.data?.name === "metamask-provider" && (r.data.data?.id === t ? (window.removeEventListener("message", n), !r.data.data.error && (R || (function(t) {
                        let e = ({
                            register: e
                        }) => e(t);
                        try {
                            window.dispatchEvent(new E(e))
                        } catch (t) {
                            console.error("wallet-standard:register-wallet event could not be dispatched\n", t)
                        }
                        try {
                            window.addEventListener("wallet-standard:app-ready", ({
                                detail: t
                            }) => e(t))
                        } catch (t) {
                            console.error("wallet-standard:app-ready event listener could not be added\n", t)
                        }
                    }(new _), R = !0))) : e())
                }
                window.addEventListener("message", n), window.setTimeout(() => window.removeEventListener("message", n), 5e3), e()
            }
            class U extends M.eC {
                constructor(t = {}) {
                    super(), this.name = "Solflare", this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+", this.supportedTransactionVersions = new Set(["legacy", 0]), this._readyState = "undefined" == typeof window || "undefined" == typeof document ? g.i1.Unsupported : g.i1.Loadable, this._disconnected = () => {
                        let t = this._wallet;
                        t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new v.at), this.emit("disconnect"))
                    }, this._accountChanged = t => {
                        if (!t) return;
                        let e = this._publicKey;
                        if (e) {
                            try {
                                t = new L.PublicKey(t.toBytes())
                            } catch (t) {
                                this.emit("error", new v.Nx(t?.message, t));
                                return
                            }
                            e.equals(t) || (this._publicKey = t, this.emit("connect", t))
                        }
                    }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = t, this._readyState !== g.i1.Unsupported && ((0, g.su)(() => (!!window.solflare?.isSolflare || !!window.SolflareApp) && (this._readyState = g.i1.Installed, this.emit("readyStateChange", this._readyState), !0)), k())
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get connected() {
                    return !!this._wallet?.connected
                }
                get readyState() {
                    return this._readyState
                }
                async autoConnect() {
                    this.readyState === g.i1.Loadable && (0, g.H)() || await this.connect()
                }
                async connect() {
                    try {
                        let t, e, i;
                        if (this.connected || this.connecting) return;
                        if (this._readyState !== g.i1.Loadable && this._readyState !== g.i1.Installed) throw new v.OZ;
                        if (this.readyState === g.i1.Loadable && (0, g.H)()) {
                            let t = encodeURIComponent(window.location.href),
                                e = encodeURIComponent(window.location.origin);
                            window.location.href = `https://solflare.com/ul/v1/browse/${t}?ref=${e}`;
                            return
                        }
                        try {
                            t = (await n.e(249).then(n.bind(n, 9249))).default
                        } catch (t) {
                            throw new v.W8(t?.message, t)
                        }
                        try {
                            e = new t({
                                network: this._config.network
                            })
                        } catch (t) {
                            throw new v.p6(t?.message, t)
                        }
                        if (this._connecting = !0, !e.connected) try {
                            await e.connect()
                        } catch (t) {
                            throw new v.$w(t?.message, t)
                        }
                        if (!e.publicKey) throw new v.$w;
                        try {
                            i = new L.PublicKey(e.publicKey.toBytes())
                        } catch (t) {
                            throw new v.Nx(t?.message, t)
                        }
                        e.on("disconnect", this._disconnected), e.on("accountChanged", this._accountChanged), this._wallet = e, this._publicKey = i, this.emit("connect", i)
                    } catch (t) {
                        throw this.emit("error", t), t
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let t = this._wallet;
                    if (t) {
                        t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
                        try {
                            await t.disconnect()
                        } catch (t) {
                            this.emit("error", new v.UG(t?.message, t))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(t, e, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new v.oS;
                        try {
                            let {
                                signers: r,
                                ...s
                            } = n;
                            return (0, j.W)(t) ? r?.length && t.sign(r) : (t = await this.prepareTransaction(t, e, s), r?.length && t.partialSign(...r)), s.preflightCommitment = s.preflightCommitment || e.commitment, await i.signAndSendTransaction(t, s)
                        } catch (t) {
                            if (t instanceof v.lj) throw t;
                            throw new v.IW(t?.message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signTransaction(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new v.oS;
                        try {
                            return await e.signTransaction(t) || t
                        } catch (t) {
                            throw new v.PY(t?.message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signAllTransactions(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new v.oS;
                        try {
                            return await e.signAllTransactions(t) || t
                        } catch (t) {
                            throw new v.PY(t?.message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signMessage(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new v.oS;
                        try {
                            return await e.signMessage(t, "utf8")
                        } catch (t) {
                            throw new v.fk(t?.message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
            }
        },
        46639: function(t, e, n) {
            "use strict";
            n.d(e, {
                BR: function() {
                    return r
                },
                aI: function() {
                    return i
                },
                gv: function() {
                    return s
                },
                l1: function() {
                    return a
                }
            });
            let i = "solana:mainnet",
                r = "solana:devnet",
                s = "solana:testnet",
                a = "solana:localnet"
        },
        89036: function(t, e, n) {
            "use strict";
            n.d(e, {
                G: function() {
                    return i
                }
            });
            let i = "solana:signAndSendTransaction"
        },
        21008: function(t, e, n) {
            "use strict";
            n.d(e, {
                g: function() {
                    return i
                }
            });
            let i = "solana:signMessage"
        },
        34796: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return i
                }
            });
            let i = "solana:signTransaction"
        },
        64654: function(t, e, n) {
            "use strict";
            n.d(e, {
                S: function() {
                    return w
                }
            });
            var i = n(40300),
                r = n(17987),
                s = n(11640),
                a = class {
                    #t;
                    destroy() {
                        this.clearGcTimeout()
                    }
                    scheduleGc() {
                        this.clearGcTimeout(), (0, i.PN)(this.gcTime) && (this.#t = setTimeout(() => {
                            this.optionalRemove()
                        }, this.gcTime))
                    }
                    updateGcTime(t) {
                        this.gcTime = Math.max(this.gcTime || 0, t ?? (i.sk ? 1 / 0 : 3e5))
                    }
                    clearGcTimeout() {
                        this.#t && (clearTimeout(this.#t), this.#t = void 0)
                    }
                },
                o = class extends a {
                    constructor(t) {
                        super(), this.#e = !1, this.#n = t.defaultOptions, this.#i(t.options), this.#r = [], this.#s = t.cache, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#a = t.state || function(t) {
                            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                                n = void 0 !== e,
                                i = n ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                            return {
                                data: e,
                                dataUpdateCount: 0,
                                dataUpdatedAt: n ? i ?? Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: n ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options), this.state = this.#a, this.scheduleGc()
                    }
                    #a;
                    #o;
                    #s;
                    #c;
                    #u;
                    #r;
                    #n;
                    #e;
                    get meta() {
                        return this.options.meta
                    }
                    #i(t) {
                        this.options = {
                            ...this.#n,
                            ...t
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    optionalRemove() {
                        this.#r.length || "idle" !== this.state.fetchStatus || this.#s.remove(this)
                    }
                    setData(t, e) {
                        let n = (0, i.oE)(this.state.data, t, this.options);
                        return this.#l({
                            data: n,
                            type: "success",
                            dataUpdatedAt: e?.updatedAt,
                            manual: e?.manual
                        }), n
                    }
                    setState(t, e) {
                        this.#l({
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }
                    cancel(t) {
                        let e = this.#c;
                        return this.#u?.cancel(t), e ? e.then(i.ZT).catch(i.ZT) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState(this.#a)
                    }
                    isActive() {
                        return this.#r.some(t => !1 !== t.options.enabled)
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 && !this.isActive()
                    }
                    isStale() {
                        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.#r.some(t => t.getCurrentResult().isStale)
                    }
                    isStaleByTime(t = 0) {
                        return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, i.Kp)(this.state.dataUpdatedAt, t)
                    }
                    onFocus() {
                        let t = this.#r.find(t => t.shouldFetchOnWindowFocus());
                        t?.refetch({
                            cancelRefetch: !1
                        }), this.#u?.continue()
                    }
                    onOnline() {
                        let t = this.#r.find(t => t.shouldFetchOnReconnect());
                        t?.refetch({
                            cancelRefetch: !1
                        }), this.#u?.continue()
                    }
                    addObserver(t) {
                        this.#r.includes(t) || (this.#r.push(t), this.clearGcTimeout(), this.#s.notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.#r.includes(t) && (this.#r = this.#r.filter(e => e !== t), this.#r.length || (this.#u && (this.#e ? this.#u.cancel({
                            revert: !0
                        }) : this.#u.cancelRetry()), this.scheduleGc()), this.#s.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }
                    getObserversCount() {
                        return this.#r.length
                    }
                    invalidate() {
                        this.state.isInvalidated || this.#l({
                            type: "invalidate"
                        })
                    }
                    fetch(t, e) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (this.state.dataUpdatedAt && e?.cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.#c) return this.#u?.continueRetry(), this.#c
                        }
                        if (t && this.#i(t), !this.options.queryFn) {
                            let t = this.#r.find(t => t.options.queryFn);
                            t && this.#i(t.options)
                        }
                        let n = new AbortController,
                            i = {
                                queryKey: this.queryKey,
                                meta: this.meta
                            },
                            r = t => {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: () => (this.#e = !0, n.signal)
                                })
                            };
                        r(i);
                        let a = {
                            fetchOptions: e,
                            options: this.options,
                            queryKey: this.queryKey,
                            state: this.state,
                            fetchFn: () => this.options.queryFn ? (this.#e = !1, this.options.persister) ? this.options.persister(this.options.queryFn, i, this) : this.options.queryFn(i) : Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))
                        };
                        r(a), this.options.behavior?.onFetch(a, this), this.#o = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#l({
                            type: "fetch",
                            meta: a.fetchOptions?.meta
                        });
                        let o = t => {
                            (0, s.DV)(t) && t.silent || this.#l({
                                type: "error",
                                error: t
                            }), (0, s.DV)(t) || (this.#s.config.onError?.(t, this), this.#s.config.onSettled?.(this.state.data, t, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        };
                        return this.#u = (0, s.Mz)({
                            fn: a.fetchFn,
                            abort: n.abort.bind(n),
                            onSuccess: t => {
                                if (void 0 === t) {
                                    o(Error(`${this.queryHash} data is undefined`));
                                    return
                                }
                                this.setData(t), this.#s.config.onSuccess?.(t, this), this.#s.config.onSettled?.(t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                            },
                            onError: o,
                            onFail: (t, e) => {
                                this.#l({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#l({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#l({
                                    type: "continue"
                                })
                            },
                            retry: a.options.retry,
                            retryDelay: a.options.retryDelay,
                            networkMode: a.options.networkMode
                        }), this.#c = this.#u.promise, this.#c
                    }
                    #l(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return {
                                        ...e, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
                                    };
                                case "pause":
                                    return {
                                        ...e, fetchStatus: "paused"
                                    };
                                case "continue":
                                    return {
                                        ...e, fetchStatus: "fetching"
                                    };
                                case "fetch":
                                    return {
                                        ...e, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: t.meta ?? null, fetchStatus: (0, s.Kw)(this.options.networkMode) ? "fetching" : "paused", ...!e.dataUpdatedAt && {
                                            error: null,
                                            status: "pending"
                                        }
                                    };
                                case "success":
                                    return {
                                        ...e, data: t.data, dataUpdateCount: e.dataUpdateCount + 1, dataUpdatedAt: t.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: !1, status: "success", ...!t.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null
                                        }
                                    };
                                case "error":
                                    let n = t.error;
                                    if ((0, s.DV)(n) && n.revert && this.#o) return {
                                        ...this.#o,
                                        fetchStatus: "idle"
                                    };
                                    return {
                                        ...e, error: n, errorUpdateCount: e.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: e.fetchFailureCount + 1, fetchFailureReason: n, fetchStatus: "idle", status: "error"
                                    };
                                case "invalidate":
                                    return {
                                        ...e, isInvalidated: !0
                                    };
                                case "setState":
                                    return {
                                        ...e, ...t.state
                                    }
                            }
                        })(this.state), r.V.batch(() => {
                            this.#r.forEach(t => {
                                t.onQueryUpdate()
                            }), this.#s.notify({
                                query: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                },
                c = n(42996),
                u = class extends c.l {
                    constructor(t = {}) {
                        super(), this.config = t, this.#h = new Map
                    }
                    #h;
                    build(t, e, n) {
                        let r = e.queryKey,
                            s = e.queryHash ?? (0, i.Rm)(r, e),
                            a = this.get(s);
                        return a || (a = new o({
                            cache: this,
                            queryKey: r,
                            queryHash: s,
                            options: t.defaultQueryOptions(e),
                            state: n,
                            defaultOptions: t.getQueryDefaults(r)
                        }), this.add(a)), a
                    }
                    add(t) {
                        this.#h.has(t.queryHash) || (this.#h.set(t.queryHash, t), this.notify({
                            type: "added",
                            query: t
                        }))
                    }
                    remove(t) {
                        let e = this.#h.get(t.queryHash);
                        e && (t.destroy(), e === t && this.#h.delete(t.queryHash), this.notify({
                            type: "removed",
                            query: t
                        }))
                    }
                    clear() {
                        r.V.batch(() => {
                            this.getAll().forEach(t => {
                                this.remove(t)
                            })
                        })
                    }
                    get(t) {
                        return this.#h.get(t)
                    }
                    getAll() {
                        return [...this.#h.values()]
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return this.getAll().find(t => (0, i._x)(e, t))
                    }
                    findAll(t = {}) {
                        let e = this.getAll();
                        return Object.keys(t).length > 0 ? e.filter(e => (0, i._x)(t, e)) : e
                    }
                    notify(t) {
                        r.V.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    onFocus() {
                        r.V.batch(() => {
                            this.getAll().forEach(t => {
                                t.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        r.V.batch(() => {
                            this.getAll().forEach(t => {
                                t.onOnline()
                            })
                        })
                    }
                },
                l = class extends a {
                    constructor(t) {
                        super(), this.mutationId = t.mutationId, this.#n = t.defaultOptions, this.#d = t.mutationCache, this.#r = [], this.state = t.state || {
                            context: void 0,
                            data: void 0,
                            error: null,
                            failureCount: 0,
                            failureReason: null,
                            isPaused: !1,
                            status: "idle",
                            variables: void 0,
                            submittedAt: 0
                        }, this.setOptions(t.options), this.scheduleGc()
                    }
                    #r;
                    #n;
                    #d;
                    #u;
                    setOptions(t) {
                        this.options = {
                            ...this.#n,
                            ...t
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(t) {
                        this.#r.includes(t) || (this.#r.push(t), this.clearGcTimeout(), this.#d.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.#r = this.#r.filter(e => e !== t), this.scheduleGc(), this.#d.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: t
                        })
                    }
                    optionalRemove() {
                        this.#r.length || ("pending" === this.state.status ? this.scheduleGc() : this.#d.remove(this))
                    }
                    continue () {
                        return this.#u?.continue() ?? this.execute(this.state.variables)
                    }
                    async execute(t) {
                        let e = "pending" === this.state.status;
                        try {
                            if (!e) {
                                this.#l({
                                    type: "pending",
                                    variables: t
                                }), await this.#d.config.onMutate?.(t, this);
                                let e = await this.options.onMutate?.(t);
                                e !== this.state.context && this.#l({
                                    type: "pending",
                                    context: e,
                                    variables: t
                                })
                            }
                            let n = await (this.#u = (0, s.Mz)({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(Error("No mutationFn found")),
                                onFail: (t, e) => {
                                    this.#l({
                                        type: "failed",
                                        failureCount: t,
                                        error: e
                                    })
                                },
                                onPause: () => {
                                    this.#l({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.#l({
                                        type: "continue"
                                    })
                                },
                                retry: this.options.retry ?? 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.#u.promise);
                            return await this.#d.config.onSuccess?.(n, t, this.state.context, this), await this.options.onSuccess?.(n, t, this.state.context), await this.#d.config.onSettled?.(n, null, this.state.variables, this.state.context, this), await this.options.onSettled?.(n, null, t, this.state.context), this.#l({
                                type: "success",
                                data: n
                            }), n
                        } catch (e) {
                            try {
                                throw await this.#d.config.onError?.(e, t, this.state.context, this), await this.options.onError?.(e, t, this.state.context), await this.#d.config.onSettled?.(void 0, e, this.state.variables, this.state.context, this), await this.options.onSettled?.(void 0, e, t, this.state.context), e
                            } finally {
                                this.#l({
                                    type: "error",
                                    error: e
                                })
                            }
                        }
                    }
                    #l(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return {
                                        ...e, failureCount: t.failureCount, failureReason: t.error
                                    };
                                case "pause":
                                    return {
                                        ...e, isPaused: !0
                                    };
                                case "continue":
                                    return {
                                        ...e, isPaused: !1
                                    };
                                case "pending":
                                    return {
                                        ...e, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: !(0, s.Kw)(this.options.networkMode), status: "pending", variables: t.variables, submittedAt: Date.now()
                                    };
                                case "success":
                                    return {
                                        ...e, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                                    };
                                case "error":
                                    return {
                                        ...e, data: void 0, error: t.error, failureCount: e.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
                                    }
                            }
                        })(this.state), r.V.batch(() => {
                            this.#r.forEach(e => {
                                e.onMutationUpdate(t)
                            }), this.#d.notify({
                                mutation: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                },
                h = class extends c.l {
                    constructor(t = {}) {
                        super(), this.config = t, this.#f = [], this.#y = 0
                    }
                    #f;
                    #y;
                    #w;
                    build(t, e, n) {
                        let i = new l({
                            mutationCache: this,
                            mutationId: ++this.#y,
                            options: t.defaultMutationOptions(e),
                            state: n
                        });
                        return this.add(i), i
                    }
                    add(t) {
                        this.#f.push(t), this.notify({
                            type: "added",
                            mutation: t
                        })
                    }
                    remove(t) {
                        this.#f = this.#f.filter(e => e !== t), this.notify({
                            type: "removed",
                            mutation: t
                        })
                    }
                    clear() {
                        r.V.batch(() => {
                            this.#f.forEach(t => {
                                this.remove(t)
                            })
                        })
                    }
                    getAll() {
                        return this.#f
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return this.#f.find(t => (0, i.X7)(e, t))
                    }
                    findAll(t = {}) {
                        return this.#f.filter(e => (0, i.X7)(t, e))
                    }
                    notify(t) {
                        r.V.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    resumePausedMutations() {
                        return this.#w = (this.#w ?? Promise.resolve()).then(() => {
                            let t = this.#f.filter(t => t.state.isPaused);
                            return r.V.batch(() => t.reduce((t, e) => t.then(() => e.continue().catch(i.ZT)), Promise.resolve()))
                        }).then(() => {
                            this.#w = void 0
                        }), this.#w
                    }
                },
                d = n(79198),
                f = n(20436);

            function y(t, {
                pages: e,
                pageParams: n
            }) {
                let i = e.length - 1;
                return t.getNextPageParam(e[i], e, n[i], n)
            }
            var w = class {
                #p;
                #d;
                #n;
                #m;
                #M;
                #g;
                #v;
                #j;
                constructor(t = {}) {
                    this.#p = t.queryCache || new u, this.#d = t.mutationCache || new h, this.#n = t.defaultOptions || {}, this.#m = new Map, this.#M = new Map, this.#g = 0
                }
                mount() {
                    this.#g++, 1 === this.#g && (this.#v = d.j.subscribe(() => {
                        d.j.isFocused() && (this.resumePausedMutations(), this.#p.onFocus())
                    }), this.#j = f.N.subscribe(() => {
                        f.N.isOnline() && (this.resumePausedMutations(), this.#p.onOnline())
                    }))
                }
                unmount() {
                    this.#g--, 0 === this.#g && (this.#v?.(), this.#v = void 0, this.#j?.(), this.#j = void 0)
                }
                isFetching(t) {
                    return this.#p.findAll({
                        ...t,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(t) {
                    return this.#d.findAll({
                        ...t,
                        status: "pending"
                    }).length
                }
                getQueryData(t) {
                    return this.#p.find({
                        queryKey: t
                    })?.state.data
                }
                ensureQueryData(t) {
                    let e = this.getQueryData(t.queryKey);
                    return void 0 !== e ? Promise.resolve(e) : this.fetchQuery(t)
                }
                getQueriesData(t) {
                    return this.getQueryCache().findAll(t).map(({
                        queryKey: t,
                        state: e
                    }) => [t, e.data])
                }
                setQueryData(t, e, n) {
                    let r = this.#p.find({
                            queryKey: t
                        }),
                        s = r?.state.data,
                        a = (0, i.SE)(e, s);
                    if (void 0 === a) return;
                    let o = this.defaultQueryOptions({
                        queryKey: t
                    });
                    return this.#p.build(this, o).setData(a, {
                        ...n,
                        manual: !0
                    })
                }
                setQueriesData(t, e, n) {
                    return r.V.batch(() => this.getQueryCache().findAll(t).map(({
                        queryKey: t
                    }) => [t, this.setQueryData(t, e, n)]))
                }
                getQueryState(t) {
                    return this.#p.find({
                        queryKey: t
                    })?.state
                }
                removeQueries(t) {
                    let e = this.#p;
                    r.V.batch(() => {
                        e.findAll(t).forEach(t => {
                            e.remove(t)
                        })
                    })
                }
                resetQueries(t, e) {
                    let n = this.#p,
                        i = {
                            type: "active",
                            ...t
                        };
                    return r.V.batch(() => (n.findAll(t).forEach(t => {
                        t.reset()
                    }), this.refetchQueries(i, e)))
                }
                cancelQueries(t = {}, e = {}) {
                    let n = {
                        revert: !0,
                        ...e
                    };
                    return Promise.all(r.V.batch(() => this.#p.findAll(t).map(t => t.cancel(n)))).then(i.ZT).catch(i.ZT)
                }
                invalidateQueries(t = {}, e = {}) {
                    return r.V.batch(() => {
                        if (this.#p.findAll(t).forEach(t => {
                                t.invalidate()
                            }), "none" === t.refetchType) return Promise.resolve();
                        let n = {
                            ...t,
                            type: t.refetchType ?? t.type ?? "active"
                        };
                        return this.refetchQueries(n, e)
                    })
                }
                refetchQueries(t = {}, e) {
                    let n = {
                        ...e,
                        cancelRefetch: e?.cancelRefetch ?? !0
                    };
                    return Promise.all(r.V.batch(() => this.#p.findAll(t).filter(t => !t.isDisabled()).map(t => {
                        let e = t.fetch(void 0, n);
                        return n.throwOnError || (e = e.catch(i.ZT)), "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    }))).then(i.ZT)
                }
                fetchQuery(t) {
                    let e = this.defaultQueryOptions(t);
                    void 0 === e.retry && (e.retry = !1);
                    let n = this.#p.build(this, e);
                    return n.isStaleByTime(e.staleTime) ? n.fetch(e) : Promise.resolve(n.state.data)
                }
                prefetchQuery(t) {
                    return this.fetchQuery(t).then(i.ZT).catch(i.ZT)
                }
                fetchInfiniteQuery(t) {
                    var e;
                    return t.behavior = (e = t.pages, {
                        onFetch: (t, n) => {
                            let r = async () => {
                                let n;
                                let r = t.options,
                                    s = t.fetchOptions?.meta?.fetchMore?.direction,
                                    a = t.state.data?.pages || [],
                                    o = t.state.data?.pageParams || [],
                                    c = !1,
                                    u = e => {
                                        Object.defineProperty(e, "signal", {
                                            enumerable: !0,
                                            get: () => (t.signal.aborted ? c = !0 : t.signal.addEventListener("abort", () => {
                                                c = !0
                                            }), t.signal)
                                        })
                                    },
                                    l = t.options.queryFn || (() => Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`))),
                                    h = async (e, n, r) => {
                                        if (c) return Promise.reject();
                                        if (null == n && e.pages.length) return Promise.resolve(e);
                                        let s = {
                                            queryKey: t.queryKey,
                                            pageParam: n,
                                            direction: r ? "backward" : "forward",
                                            meta: t.options.meta
                                        };
                                        u(s);
                                        let a = await l(s),
                                            {
                                                maxPages: o
                                            } = t.options,
                                            h = r ? i.Ht : i.VX;
                                        return {
                                            pages: h(e.pages, a, o),
                                            pageParams: h(e.pageParams, n, o)
                                        }
                                    };
                                if (s && a.length) {
                                    let t = "backward" === s,
                                        e = {
                                            pages: a,
                                            pageParams: o
                                        },
                                        i = (t ? function(t, {
                                            pages: e,
                                            pageParams: n
                                        }) {
                                            return t.getPreviousPageParam?.(e[0], e, n[0], n)
                                        } : y)(r, e);
                                    n = await h(e, i, t)
                                } else {
                                    n = await h({
                                        pages: [],
                                        pageParams: []
                                    }, o[0] ?? r.initialPageParam);
                                    let t = e ?? a.length;
                                    for (let e = 1; e < t; e++) {
                                        let t = y(r, n);
                                        n = await h(n, t)
                                    }
                                }
                                return n
                            };
                            t.options.persister ? t.fetchFn = () => t.options.persister?.(r, {
                                queryKey: t.queryKey,
                                meta: t.options.meta,
                                signal: t.signal
                            }, n) : t.fetchFn = r
                        }
                    }), this.fetchQuery(t)
                }
                prefetchInfiniteQuery(t) {
                    return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)
                }
                resumePausedMutations() {
                    return this.#d.resumePausedMutations()
                }
                getQueryCache() {
                    return this.#p
                }
                getMutationCache() {
                    return this.#d
                }
                getDefaultOptions() {
                    return this.#n
                }
                setDefaultOptions(t) {
                    this.#n = t
                }
                setQueryDefaults(t, e) {
                    this.#m.set((0, i.Ym)(t), {
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    let e = [...this.#m.values()],
                        n = {};
                    return e.forEach(e => {
                        (0, i.to)(t, e.queryKey) && (n = {
                            ...n,
                            ...e.defaultOptions
                        })
                    }), n
                }
                setMutationDefaults(t, e) {
                    this.#M.set((0, i.Ym)(t), {
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    let e = [...this.#M.values()],
                        n = {};
                    return e.forEach(e => {
                        (0, i.to)(t, e.mutationKey) && (n = {
                            ...n,
                            ...e.defaultOptions
                        })
                    }), n
                }
                defaultQueryOptions(t) {
                    if (t?._defaulted) return t;
                    let e = {
                        ...this.#n.queries,
                        ...t?.queryKey && this.getQueryDefaults(t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return e.queryHash || (e.queryHash = (0, i.Rm)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.throwOnError && (e.throwOnError = !!e.suspense), void 0 === e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e
                }
                defaultMutationOptions(t) {
                    return t?._defaulted ? t : {
                        ...this.#n.mutations,
                        ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
                        ...t,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.#p.clear(), this.#d.clear()
                }
            }
        },
        5713: function(t, e, n) {
            "use strict";
            n.d(e, {
                V: function() {
                    return i
                }
            });
            let i = "standard:connect"
        },
        32007: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return i
                }
            });
            let i = "standard:disconnect"
        },
        86471: function(t, e, n) {
            "use strict";
            n.d(e, {
                k: function() {
                    return i
                }
            });
            let i = "standard:events"
        }
    }
]);