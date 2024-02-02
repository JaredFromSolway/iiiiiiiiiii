(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71], {
        28048: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 23501))
        },
        23501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AppBar: function() {
                    return x
                }
            });
            var l = n(57437),
                s = n(95895),
                a = n(91555),
                i = n(27231),
                r = n(15968),
                c = n(2265),
                o = n(89461),
                d = {
                    src: "/_next/static/media/logo1ac47.png",
                    height: 531,
                    width: 2049,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX+/v7///7+/v7+//8+LDsjS1Y/GS39///rIV0cAAAACHRSTlM9M1FFpIrAQYPvEeUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BlYWRmYGRgYGBhY2RiYmdiBgABagAqUjhkJwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 2
                },
                u = n(16691),
                A = n.n(u),
                h = n(55310),
                m = n(2402),
                w = n(42315),
                p = n(34822);

            function g(e) {
                let {
                    children: t,
                    labels: n,
                    ...s
                } = e, {
                    setVisible: a
                } = (0, w.h)(), {
                    buttonState: i,
                    onConnect: r,
                    onDisconnect: o,
                    publicKey: d,
                    walletIcon: u,
                    walletName: A
                } = (0, m.i)({
                    onSelectWallet() {
                        a(!0)
                    }
                }), [g, f] = (0, c.useState)(!1), [x, j] = (0, c.useState)(!1), v = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    let e = e => {
                        let t = v.current;
                        !t || t.contains(e.target) || j(!1)
                    };
                    return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
                        document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
                    }
                }, []);
                let C = (0, c.useMemo)(() => {
                    if (t) return t;
                    if (d) {
                        let e = d.toBase58();
                        return (0, l.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0, l.jsx)(p.Z, {
                                strokeWidth: .75,
                                size: 20
                            }), e.slice(0, 4) + ".." + e.slice(-4)]
                        })
                    }
                    return "connecting" === i || "has-wallet" === i ? n[i] : n["no-wallet"]
                }, [i, t, n, d]);
                return (0, l.jsxs)("div", {
                    className: "wallet-adapter-dropdown",
                    children: [(0, l.jsx)(h.A, {
                        className: "frosted-glass-teal",
                        ...s,
                        "aria-expanded": x,
                        style: {
                            pointerEvents: x ? "none" : "auto",
                            ...s.style
                        },
                        onClick: () => {
                            switch (i) {
                                case "no-wallet":
                                    a(!0);
                                    break;
                                case "has-wallet":
                                    r && r();
                                    break;
                                case "connected":
                                    j(!0)
                            }
                        },
                        children: C
                    }), (0, l.jsxs)("ul", {
                        "aria-label": "dropdown-list",
                        className: "wallet-adapter-dropdown-list ".concat(x && "wallet-adapter-dropdown-list-active"),
                        ref: v,
                        role: "menu",
                        children: [d ? (0, l.jsx)("li", {
                            className: "wallet-adapter-dropdown-list-item",
                            onClick: async () => {
                                await navigator.clipboard.writeText(d.toBase58()), f(!0), setTimeout(() => f(!1), 400)
                            },
                            role: "menuitem",
                            children: g ? n.copied : n["copy-address"]
                        }) : null, (0, l.jsx)("li", {
                            className: "wallet-adapter-dropdown-list-item",
                            onClick: () => {
                                a(!0), j(!1)
                            },
                            role: "menuitem",
                            children: n["change-wallet"]
                        }), o ? (0, l.jsx)("li", {
                            className: "wallet-adapter-dropdown-list-item",
                            onClick: () => {
                                o(), j(!1)
                            },
                            role: "menuitem",
                            children: n.disconnect
                        }) : null]
                    })]
                })
            }
            let f = {
                    "change-wallet": "Change wallet",
                    connecting: "Connecting ...",
                    "copy-address": "Copy address",
                    copied: "Copied",
                    disconnect: "Disconnect",
                    "has-wallet": "Connect",
                    "no-wallet": "Select Wallet"
                },
                x = e => {
                    let [t, n] = (0, c.useState)(!1);
                    return (0, c.useEffect)(() => {
                        n(!0)
                    }, []), (0, l.jsxs)(s.R, {
                        maxWidth: "full",
                        className: "bg-[#131a35]",
                        children: [(0, l.jsx)(a.H, {
                            children: (0, l.jsx)(A(), {
                                src: d,
                                alt: "Logo",
                                className: "h-10 w-auto"
                            })
                        }), (0, l.jsx)(i.U, {
                            justify: "end",
                            children: (0, l.jsx)(r.k, {
                                children: t ? (0, l.jsx)(g, {
                                    labels: f
                                }) : (0, l.jsx)(o.Z, {
                                    children: "Connect"
                                })
                            })
                        })]
                    })
                }
        },
        89461: function(e, t, n) {
            "use strict";
            var l = n(57437),
                s = n(55310);
            t.Z = e => {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, l.jsx)(s.A, {
                    className: "frosted-glass-teal",
                    ...n,
                    children: t
                })
            }
        }
    },
    function(e) {
        e.O(0, [905, 81, 918, 971, 938, 744], function() {
            return e(e.s = 28048)
        }), _N_E = e.O()
    }
]);