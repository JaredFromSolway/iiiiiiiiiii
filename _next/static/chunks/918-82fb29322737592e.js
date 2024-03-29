(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [918], {
        34822: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.309.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(62898).Z)("Wallet", [
                ["path", {
                    d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
                    key: "195gfw"
                }],
                ["path", {
                    d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
                    key: "195n9w"
                }],
                ["path", {
                    d: "M18 12a2 2 0 0 0 0 4h4v-4Z",
                    key: "vllfpd"
                }]
            ])
        },
        81749: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            let r = n(21024),
                o = n(68533)._(n(2265)),
                a = r._(n(54887)),
                i = r._(n(42251)),
                u = n(38630),
                l = n(76906),
                c = n(60337);
            n(76184);
            let s = n(46993),
                f = r._(n(10536)),
                d = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function p(e, t, n, r, o, a) {
                let i = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== i && (e["data-loaded-src"] = i, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && o(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                o = !1;
                            n.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, t.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                }))
            }

            function m(e) {
                let [t, n] = o.version.split(".", 2), r = parseInt(t, 10), a = parseInt(n, 10);
                return r > 18 || 18 === r && a >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let h = (0, o.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: r,
                    sizes: a,
                    height: i,
                    width: u,
                    decoding: l,
                    className: c,
                    style: s,
                    fetchPriority: f,
                    placeholder: d,
                    loading: h,
                    unoptimized: v,
                    fill: g,
                    onLoadRef: y,
                    onLoadingCompleteRef: b,
                    setBlurComplete: w,
                    setShowAltText: x,
                    onLoad: _,
                    onError: S,
                    ...j
                } = e;
                return o.default.createElement("img", {
                    ...j,
                    ...m(f),
                    loading: h,
                    width: u,
                    height: i,
                    decoding: l,
                    "data-nimg": g ? "fill" : "1",
                    className: c,
                    style: s,
                    sizes: a,
                    srcSet: r,
                    src: n,
                    ref: (0, o.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (S && (e.src = e.src), e.complete && p(e, d, y, b, w, v))
                    }, [n, d, y, b, w, S, v, t]),
                    onLoad: e => {
                        p(e.currentTarget, d, y, b, w, v)
                    },
                    onError: e => {
                        x(!0), "empty" !== d && w(!0), S && S(e)
                    }
                })
            });

            function v(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, r = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...m(n.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(n.src, r), null) : o.default.createElement(i.default, null, o.default.createElement("link", {
                    key: "__nimg-" + n.src + n.srcSet + n.sizes,
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }))
            }
            let g = (0, o.forwardRef)((e, t) => {
                let n = (0, o.useContext)(s.RouterContext),
                    r = (0, o.useContext)(c.ImageConfigContext),
                    a = (0, o.useMemo)(() => {
                        let e = d || r || l.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            n = e.deviceSizes.sort((e, t) => e - t);
                        return {
                            ...e,
                            allSizes: t,
                            deviceSizes: n
                        }
                    }, [r]),
                    {
                        onLoad: i,
                        onLoadingComplete: p
                    } = e,
                    m = (0, o.useRef)(i);
                (0, o.useEffect)(() => {
                    m.current = i
                }, [i]);
                let g = (0, o.useRef)(p);
                (0, o.useEffect)(() => {
                    g.current = p
                }, [p]);
                let [y, b] = (0, o.useState)(!1), [w, x] = (0, o.useState)(!1), {
                    props: _,
                    meta: S
                } = (0, u.getImgProps)(e, {
                    defaultLoader: f.default,
                    imgConf: a,
                    blurComplete: y,
                    showAltText: w
                });
                return o.default.createElement(o.default.Fragment, null, o.default.createElement(h, {
                    ..._,
                    unoptimized: S.unoptimized,
                    placeholder: S.placeholder,
                    fill: S.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: b,
                    setShowAltText: x,
                    ref: t
                }), S.priority ? o.default.createElement(v, {
                    isAppRouter: !n,
                    imgAttributes: _
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2595: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = n(21024)._(n(2265)).default.createContext({})
        },
        43044: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return t || n && r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        38630: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return u
                }
            }), n(76184);
            let r = n(67160),
                o = n(76906);

            function a(e) {
                return void 0 !== e.default
            }

            function i(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function u(e, t) {
                var n;
                let u, l, c, {
                        src: s,
                        sizes: f,
                        unoptimized: d = !1,
                        priority: p = !1,
                        loading: m,
                        className: h,
                        quality: v,
                        width: g,
                        height: y,
                        fill: b = !1,
                        style: w,
                        onLoad: x,
                        onLoadingComplete: _,
                        placeholder: S = "empty",
                        blurDataURL: j,
                        fetchPriority: E,
                        layout: C,
                        objectFit: P,
                        objectPosition: k,
                        lazyBoundary: O,
                        lazyRoot: R,
                        ...M
                    } = e,
                    {
                        imgConf: N,
                        showAltText: I,
                        blurComplete: z,
                        defaultLoader: L
                    } = t,
                    A = N || o.imageConfigDefault;
                if ("allSizes" in A) u = A;
                else {
                    let e = [...A.deviceSizes, ...A.imageSizes].sort((e, t) => e - t),
                        t = A.deviceSizes.sort((e, t) => e - t);
                    u = {
                        ...A,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                let B = M.loader || L;
                delete M.loader, delete M.srcSet;
                let W = "__next_img_default" in B;
                if (W) {
                    if ("custom" === u.loader) throw Error('Image with src "' + s + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = B;
                    B = t => {
                        let {
                            config: n,
                            ...r
                        } = t;
                        return e(r)
                    }
                }
                if (C) {
                    "fill" === C && (b = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    } [C];
                    e && (w = {
                        ...w,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    } [C];
                    t && !f && (f = t)
                }
                let T = "",
                    D = i(g),
                    $ = i(y);
                if ("object" == typeof(n = s) && (a(n) || void 0 !== n.src)) {
                    let e = a(s) ? s.default : s;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (l = e.blurWidth, c = e.blurHeight, j = j || e.blurDataURL, T = e.src, !b) {
                        if (D || $) {
                            if (D && !$) {
                                let t = D / e.width;
                                $ = Math.round(e.height * t)
                            } else if (!D && $) {
                                let t = $ / e.height;
                                D = Math.round(e.width * t)
                            }
                        } else D = e.width, $ = e.height
                    }
                }
                let U = !p && ("lazy" === m || void 0 === m);
                (!(s = "string" == typeof s ? s : T) || s.startsWith("data:") || s.startsWith("blob:")) && (d = !0, U = !1), u.unoptimized && (d = !0), W && s.endsWith(".svg") && !u.dangerouslyAllowSVG && (d = !0), p && (E = "high");
                let V = i(v),
                    F = Object.assign(b ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: P,
                        objectPosition: k
                    } : {}, I ? {} : {
                        color: "transparent"
                    }, w),
                    G = z || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: D,
                        heightInt: $,
                        blurWidth: l,
                        blurHeight: c,
                        blurDataURL: j || "",
                        objectFit: F.objectFit
                    }) + '")' : 'url("' + S + '")',
                    q = G ? {
                        backgroundSize: F.objectFit || "cover",
                        backgroundPosition: F.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: G
                    } : {},
                    H = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: o,
                            quality: a,
                            sizes: i,
                            loader: u
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: c
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: r,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                                kind: "x"
                            }
                        }(t, o, i), s = l.length - 1;
                        return {
                            sizes: i || "w" !== c ? i : "100vw",
                            srcSet: l.map((e, r) => u({
                                config: t,
                                src: n,
                                quality: a,
                                width: e
                            }) + " " + ("w" === c ? e : r + 1) + c).join(", "),
                            src: u({
                                config: t,
                                src: n,
                                quality: a,
                                width: l[s]
                            })
                        }
                    }({
                        config: u,
                        src: s,
                        unoptimized: d,
                        width: D,
                        quality: V,
                        sizes: f,
                        loader: B
                    });
                return {
                    props: {
                        ...M,
                        loading: U ? "lazy" : m,
                        fetchPriority: E,
                        width: D,
                        height: $,
                        decoding: "async",
                        className: h,
                        style: {
                            ...F,
                            ...q
                        },
                        sizes: H.sizes,
                        srcSet: H.srcSet,
                        src: H.src
                    },
                    meta: {
                        unoptimized: d,
                        priority: p,
                        placeholder: S,
                        fill: b
                    }
                }
            }
        },
        42251: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    defaultHead: function() {
                        return c
                    },
                    default: function() {
                        return p
                    }
                });
            let r = n(21024),
                o = n(68533)._(n(2265)),
                a = r._(n(27392)),
                i = n(2595),
                u = n(27484),
                l = n(43044);

            function c(e) {
                void 0 === e && (e = !1);
                let t = [o.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function s(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(76184);
            let f = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(s, []).reverse().concat(c(n).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return o => {
                        let a = !0,
                            i = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            i = !0;
                            let t = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(t) ? a = !1 : e.add(t)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? a = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, t = f.length; e < t; e++) {
                                    let t = f[e];
                                    if (o.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) n.has(t) ? a = !1 : n.add(t);
                                        else {
                                            let e = o.props[t],
                                                n = r[t] || new Set;
                                            ("name" !== t || !i) && n.has(e) ? a = !1 : (n.add(e), r[t] = n)
                                        }
                                    }
                                }
                        }
                        return a
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = {
                            ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, o.default.cloneElement(e, t)
                    }
                    return o.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let p = function(e) {
                let {
                    children: t
                } = e, n = (0, o.useContext)(i.AmpStateContext), r = (0, o.useContext)(u.HeadManagerContext);
                return o.default.createElement(a.default, {
                    reduceComponentsToState: d,
                    headManager: r,
                    inAmpMode: (0, l.isInAmpMode)(n)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        67160: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: a,
                    objectFit: i
                } = e, u = r ? 40 * r : t, l = o ? 40 * o : n, c = u && l ? "viewBox='0 0 " + u + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + a + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        60337: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(21024)._(n(2265)),
                o = n(76906),
                a = r.default.createContext(o.imageConfigDefault)
        },
        76906: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return n
                    },
                    imageConfigDefault: function() {
                        return r
                    }
                });
            let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        67447: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return l
                    },
                    default: function() {
                        return c
                    }
                });
            let r = n(21024),
                o = n(38630),
                a = n(76184),
                i = n(81749),
                u = r._(n(10536)),
                l = e => {
                    (0, a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, o.getImgProps)(e, {
                        defaultLoader: u.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                    return {
                        props: t
                    }
                },
                c = i.Image
        },
        10536: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: o
                } = e;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        46993: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = n(21024)._(n(2265)).default.createContext(null)
        },
        27392: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(2265),
                o = r.useLayoutEffect,
                a = r.useEffect;

            function i(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function i() {
                    if (t && t.mountedInstances) {
                        let o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(o, e))
                    }
                }
                return o(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), o(() => (t && (t._pendingUpdate = i), () => {
                    t && (t._pendingUpdate = i)
                })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        76184: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = e => {}
        },
        16691: function(e, t, n) {
            e.exports = n(67447)
        },
        13519: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return r
                },
                q: function() {
                    return o
                }
            });
            var [r, o] = (0, n(23024).k)({
                name: "NavbarContext",
                strict: !0,
                errorMessage: "useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"
            })
        },
        95895: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return eE
                }
            });
            var r, o, a, i, u, l, c, s, f = n(13519),
                d = {
                    enter: {
                        height: "calc(100vh - var(--navbar-height) - 1px)",
                        transition: {
                            duration: .3,
                            easings: "easeOut"
                        }
                    },
                    exit: {
                        height: 0,
                        transition: {
                            duration: .25,
                            easings: "easeIn"
                        }
                    }
                },
                p = n(77485),
                m = n(25312),
                h = n(59762),
                v = n(48794),
                g = n(2403),
                y = n(99845),
                b = n(24547),
                w = n(2265),
                x = function() {
                    return (x = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function _(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n
            }
            "function" == typeof SuppressedError && SuppressedError;
            var S = "right-scroll-bar-position",
                j = "width-before-scroll-bar";

            function E(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var C = new WeakMap,
                P = (void 0 === r && (r = {}), (void 0 === o && (o = function(e) {
                    return e
                }), a = [], i = !1, u = {
                    read: function() {
                        if (i) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return a.length ? a[a.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = o(e, i);
                        return a.push(t),
                            function() {
                                a = a.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (i = !0; a.length;) {
                            var t = a;
                            a = [], t.forEach(e)
                        }
                        a = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return a
                            }
                        }
                    },
                    assignMedium: function(e) {
                        i = !0;
                        var t = [];
                        if (a.length) {
                            var n = a;
                            a = [], n.forEach(e), t = a
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            o = function() {
                                return Promise.resolve().then(r)
                            };
                        o(), a = {
                            push: function(e) {
                                t.push(e), o()
                            },
                            filter: function(e) {
                                return t = t.filter(e), a
                            }
                        }
                    }
                }).options = x({
                    async: !0,
                    ssr: !1
                }, r), u),
                k = function() {},
                O = w.forwardRef(function(e, t) {
                    var n, r, o, a, i = w.useRef(null),
                        u = w.useState({
                            onScrollCapture: k,
                            onWheelCapture: k,
                            onTouchMoveCapture: k
                        }),
                        l = u[0],
                        c = u[1],
                        s = e.forwardProps,
                        f = e.children,
                        d = e.className,
                        p = e.removeScrollBar,
                        m = e.enabled,
                        h = e.shards,
                        v = e.sideCar,
                        g = e.noIsolation,
                        y = e.inert,
                        b = e.allowPinchZoom,
                        S = e.as,
                        j = e.gapMode,
                        O = _(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        R = (n = [i, t], r = function(e) {
                            return n.forEach(function(t) {
                                return E(t, e)
                            })
                        }, (o = (0, w.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, a = o.facade, w.useLayoutEffect(function() {
                            var e = C.get(a);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = a.current;
                                t.forEach(function(e) {
                                    r.has(e) || E(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || E(e, o)
                                })
                            }
                            C.set(a, n)
                        }, [n]), a),
                        M = x(x({}, O), l);
                    return w.createElement(w.Fragment, null, m && w.createElement(v, {
                        sideCar: P,
                        removeScrollBar: p,
                        shards: h,
                        noIsolation: g,
                        inert: y,
                        setCallbacks: c,
                        allowPinchZoom: !!b,
                        lockRef: i,
                        gapMode: j
                    }), s ? w.cloneElement(w.Children.only(f), x(x({}, M), {
                        ref: R
                    })) : w.createElement(void 0 === S ? "div" : S, x({}, M, {
                        className: d,
                        ref: R
                    }), f))
                });
            O.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, O.classNames = {
                fullWidth: j,
                zeroRight: S
            };
            var R = function(e) {
                var t = e.sideCar,
                    n = _(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return w.createElement(r, x({}, n))
            };
            R.isSideCarExport = !0;
            var M = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = s || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, a;
                                (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                N = function() {
                    var e = M();
                    return function(t, n) {
                        w.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                I = function() {
                    var e = N();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                z = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                L = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                A = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [L(n), L(r), L(o)]
                },
                B = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return z;
                    var t = A(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                W = I(),
                T = function(e, t, n, r) {
                    var o = e.left,
                        a = e.top,
                        i = e.right,
                        u = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(S, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(j, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(S, " .").concat(S, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(j, " .").concat(j, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
                },
                D = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r,
                        a = w.useMemo(function() {
                            return B(o)
                        }, [o]);
                    return w.createElement(W, {
                        styles: T(a, !t, o, n ? "" : "!important")
                    })
                },
                $ = !1;
            if ("undefined" != typeof window) try {
                var U = Object.defineProperty({}, "passive", {
                    get: function() {
                        return $ = !0, !0
                    }
                });
                window.addEventListener("test", U, U), window.removeEventListener("test", U, U)
            } catch (e) {
                $ = !1
            }
            var V = !!$ && {
                    passive: !1
                },
                F = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                G = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), q(e, r)) {
                            var o = H(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                q = function(e, t) {
                    return "v" === e ? F(t, "overflowY") : F(t, "overflowX")
                },
                H = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                Y = function(e, t, n, r, o) {
                    var a, i = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                        u = i * r,
                        l = n.target,
                        c = t.contains(l),
                        s = !1,
                        f = u > 0,
                        d = 0,
                        p = 0;
                    do {
                        var m = H(e, l),
                            h = m[0],
                            v = m[1] - m[2] - i * h;
                        (h || v) && q(e, l) && (d += v, p += h), l = l instanceof ShadowRoot ? l.host : l.parentNode
                    } while (!c && l !== document.body || c && (t.contains(l) || t === l));
                    return f && (o && 1 > Math.abs(d) || !o && u > d) ? s = !0 : !f && (o && 1 > Math.abs(p) || !o && -u > p) && (s = !0), s
                },
                X = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                Z = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                J = function(e) {
                    return e && "current" in e ? e.current : e
                },
                K = 0,
                Q = [],
                ee = (P.useMedium(function(e) {
                    var t = w.useRef([]),
                        n = w.useRef([0, 0]),
                        r = w.useRef(),
                        o = w.useState(K++)[0],
                        a = w.useState(I)[0],
                        i = w.useRef(e);
                    w.useEffect(function() {
                        i.current = e
                    }, [e]), w.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (function(e, t, n) {
                                if (n || 2 == arguments.length)
                                    for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                                return e.concat(r || Array.prototype.slice.call(t))
                            })([e.lockRef.current], (e.shards || []).map(J), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var u = w.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var o, a = X(e),
                                u = n.current,
                                l = "deltaX" in e ? e.deltaX : u[0] - a[0],
                                c = "deltaY" in e ? e.deltaY : u[1] - a[1],
                                s = e.target,
                                f = Math.abs(l) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === f && "range" === s.type) return !1;
                            var d = G(f, s);
                            if (!d) return !0;
                            if (d ? o = f : (o = "v" === f ? "h" : "v", d = G(f, s)), !d) return !1;
                            if (!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return Y(p, t, e, "h" === p ? l : c, !0)
                        }, []),
                        l = w.useCallback(function(e) {
                            if (Q.length && Q[Q.length - 1] === a) {
                                var n = "deltaY" in e ? Z(e) : X(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (i.current.shards || []).map(J).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        c = w.useCallback(function(e, n, r, o) {
                            var a = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o,
                                shadowParent: function(e) {
                                    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                    return t
                                }(r)
                            };
                            t.current.push(a), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== a
                                })
                            }, 1)
                        }, []),
                        s = w.useCallback(function(e) {
                            n.current = X(e), r.current = void 0
                        }, []),
                        f = w.useCallback(function(t) {
                            c(t.type, Z(t), t.target, u(t, e.lockRef.current))
                        }, []),
                        d = w.useCallback(function(t) {
                            c(t.type, X(t), t.target, u(t, e.lockRef.current))
                        }, []);
                    w.useEffect(function() {
                        return Q.push(a), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: d
                            }), document.addEventListener("wheel", l, V), document.addEventListener("touchmove", l, V), document.addEventListener("touchstart", s, V),
                            function() {
                                Q = Q.filter(function(e) {
                                    return e !== a
                                }), document.removeEventListener("wheel", l, V), document.removeEventListener("touchmove", l, V), document.removeEventListener("touchstart", s, V)
                            }
                    }, []);
                    var p = e.removeScrollBar,
                        m = e.inert;
                    return w.createElement(w.Fragment, null, m ? w.createElement(a, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, p ? w.createElement(D, {
                        gapMode: e.gapMode
                    }) : null)
                }), R),
                et = w.forwardRef(function(e, t) {
                    return w.createElement(O, x({}, e, {
                        ref: t,
                        sideCar: ee
                    }))
                });
            et.classNames = O.classNames;
            var en = n(35200),
                er = n(57437),
                eo = (0, p.Gp)((e, t) => {
                    var n, r;
                    let {
                        className: o,
                        children: a,
                        portalContainer: i,
                        motionProps: u,
                        style: l,
                        ...c
                    } = e, s = (0, m.gy)(t), {
                        slots: p,
                        isMenuOpen: x,
                        height: _,
                        disableAnimation: S,
                        classNames: j
                    } = (0, f.q)(), E = (0, h.W)(null == j ? void 0 : j.menu, o), C = (0, w.useCallback)(({
                        children: e
                    }) => (0, er.jsx)(et, {
                        forwardProps: !0,
                        enabled: x,
                        removeScrollBar: !1,
                        children: e
                    }), [x]), P = S ? (0, er.jsx)(C, {
                        children: (0, er.jsx)("ul", {
                            ref: s,
                            className: null == (n = p.menu) ? void 0 : n.call(p, {
                                class: E
                            }),
                            "data-open": (0, v.PB)(x),
                            style: {
                                "--navbar-height": _
                            },
                            ...c,
                            children: a
                        })
                    }) : (0, er.jsx)(g.M, {
                        mode: "wait",
                        children: x ? (0, er.jsx)(C, {
                            children: (0, er.jsx)(y.E.ul, {
                                ref: s,
                                layoutScroll: !0,
                                animate: "enter",
                                className: null == (r = p.menu) ? void 0 : r.call(p, {
                                    class: E
                                }),
                                "data-open": (0, v.PB)(x),
                                exit: "exit",
                                initial: "exit",
                                style: {
                                    "--navbar-height": _,
                                    ...l
                                },
                                variants: d,
                                ...(0, b.dG)(u, c),
                                children: a
                            })
                        }) : null
                    });
                    return (0, er.jsx)(en.aV, {
                        portalContainer: i,
                        children: P
                    })
                });
            eo.displayName = "NextUI.NavbarMenu";
            var ea = n(51656),
                ei = {
                    visible: {
                        y: 0,
                        transition: {
                            ease: ea.Lj.easeOut
                        }
                    },
                    hidden: {
                        y: "-100%",
                        transition: {
                            ease: ea.Lj.easeIn
                        }
                    }
                },
                eu = n(31440),
                el = n(45506),
                ec = (0, eu.tv)({
                    slots: {
                        base: ["flex", "z-40", "w-full", "h-auto", "items-center", "justify-center", "data-[menu-open=true]:border-none"],
                        wrapper: ["z-40", "flex", "px-6", "gap-4", "w-full", "flex-row", "relative", "flex-nowrap", "items-center", "justify-between", "h-[var(--navbar-height)]"],
                        toggle: ["group", "flex", "items-center", "justify-center", "w-6", "h-full", "outline-none", "rounded-small", "tap-highlight-transparent", ...el.Dh],
                        srOnly: ["sr-only"],
                        toggleIcon: ["w-full", "h-full", "pointer-events-none", "flex", "flex-col", "items-center", "justify-center", "text-inherit", "group-data-[pressed=true]:opacity-70", "transition-opacity", "before:content-['']", "before:block", "before:h-px", "before:w-6", "before:bg-current", "before:transition-transform", "before:duration-150", "before:-translate-y-1", "before:rotate-0", "group-data-[open=true]:before:translate-y-px", "group-data-[open=true]:before:rotate-45", "after:content-['']", "after:block", "after:h-px", "after:w-6", "after:bg-current", "after:transition-transform", "after:duration-150", "after:translate-y-1", "after:rotate-0", "group-data-[open=true]:after:translate-y-0", "group-data-[open=true]:after:-rotate-45"],
                        brand: ["flex", "basis-0", "flex-row", "flex-grow", "flex-nowrap", "justify-start", "bg-transparent", "items-center", "no-underline", "text-medium", "whitespace-nowrap", "box-border"],
                        content: ["flex", "gap-4", "h-full", "flex-row", "flex-nowrap", "items-center", "data-[justify=start]:justify-start", "data-[justify=start]:flex-grow", "data-[justify=start]:basis-0", "data-[justify=center]:justify-center", "data-[justify=end]:justify-end", "data-[justify=end]:flex-grow", "data-[justify=end]:basis-0"],
                        item: ["text-medium", "whitespace-nowrap", "box-border", "list-none", "data-[active=true]:font-semibold"],
                        menu: ["z-30", "px-6", "pt-2", "fixed", "flex", "max-w-full", "top-[var(--navbar-height)]", "inset-x-0", "bottom-0", "w-screen", "flex-col", "gap-2", "overflow-y-auto"],
                        menuItem: ["text-large", "data-[active=true]:font-semibold"]
                    },
                    variants: {
                        position: {
                            static: {
                                base: "static"
                            },
                            sticky: {
                                base: "sticky top-0 inset-x-0"
                            }
                        },
                        maxWidth: {
                            sm: {
                                wrapper: "max-w-[640px]"
                            },
                            md: {
                                wrapper: "max-w-[768px]"
                            },
                            lg: {
                                wrapper: "max-w-[1024px]"
                            },
                            xl: {
                                wrapper: "max-w-[1280px]"
                            },
                            "2xl": {
                                wrapper: "max-w-[1536px]"
                            },
                            full: {
                                wrapper: "max-w-full"
                            }
                        },
                        hideOnScroll: {
                            true: {
                                base: ["sticky", "top-0", "inset-x-0"]
                            }
                        },
                        isBordered: {
                            true: {
                                base: ["border-b", "border-divider"]
                            }
                        },
                        isBlurred: {
                            false: {
                                base: "bg-background",
                                menu: "bg-background"
                            },
                            true: {
                                base: ["backdrop-blur-lg", "data-[menu-open=true]:backdrop-blur-xl", "backdrop-saturate-150", "bg-background/70"],
                                menu: ["backdrop-blur-xl", "backdrop-saturate-150", "bg-background/70"]
                            }
                        },
                        disableAnimation: {
                            true: {
                                menu: ["hidden", "h-[calc(100dvh_-_var(--navbar-height)_-_1px)]", "data-[open=true]:flex"]
                            }
                        }
                    },
                    defaultVariants: {
                        maxWidth: "lg",
                        position: "sticky",
                        isBlurred: !0
                    }
                }),
                es = "undefined" != typeof window;

            function ef(e) {
                return es ? e ? {
                    x: e.scrollLeft,
                    y: e.scrollTop
                } : {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: 0,
                    y: 0
                }
            }
            var ed = e => {
                    let {
                        elementRef: t,
                        delay: n = 30,
                        callback: r,
                        isEnabled: o
                    } = e, a = (0, w.useRef)(o ? ef(null == t ? void 0 : t.current) : {
                        x: 0,
                        y: 0
                    }), i = null, u = () => {
                        let e = ef(null == t ? void 0 : t.current);
                        "function" == typeof r && r({
                            prevPos: a.current,
                            currPos: e
                        }), a.current = e, i = null
                    };
                    return (0, w.useEffect)(() => {
                        if (!o) return;
                        let e = () => {
                                n ? null === i && (i = setTimeout(u, n)) : u()
                            },
                            r = (null == t ? void 0 : t.current) || window;
                        return r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
                    }, [null == t ? void 0 : t.current, n, o]), a.current
                },
                ep = n(14114),
                em = Object.create,
                eh = Object.defineProperty,
                ev = Object.getOwnPropertyDescriptor,
                eg = Object.getOwnPropertyNames,
                ey = Object.getPrototypeOf,
                eb = Object.prototype.hasOwnProperty,
                ew = (e, t) => function() {
                    return t || (0, e[eg(e)[0]])((t = {
                        exports: {}
                    }).exports, t), t.exports
                },
                ex = ew({
                    "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(e) {
                        var t = Symbol.for("react.element"),
                            n = Symbol.for("react.portal"),
                            r = Symbol.for("react.fragment"),
                            o = Symbol.for("react.strict_mode"),
                            a = Symbol.for("react.profiler"),
                            i = Symbol.for("react.provider"),
                            u = Symbol.for("react.context"),
                            l = Symbol.for("react.forward_ref"),
                            c = Symbol.for("react.suspense"),
                            s = Symbol.for("react.memo"),
                            f = Symbol.for("react.lazy"),
                            d = Symbol.iterator,
                            p = {
                                isMounted: function() {
                                    return !1
                                },
                                enqueueForceUpdate: function() {},
                                enqueueReplaceState: function() {},
                                enqueueSetState: function() {}
                            },
                            m = Object.assign,
                            h = {};

                        function v(e, t, n) {
                            this.props = e, this.context = t, this.refs = h, this.updater = n || p
                        }

                        function g() {}

                        function y(e, t, n) {
                            this.props = e, this.context = t, this.refs = h, this.updater = n || p
                        }
                        v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                            if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                            this.updater.enqueueSetState(this, e, t, "setState")
                        }, v.prototype.forceUpdate = function(e) {
                            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                        }, g.prototype = v.prototype;
                        var b = y.prototype = new g;
                        b.constructor = y, m(b, v.prototype), b.isPureReactComponent = !0;
                        var w = Array.isArray,
                            x = Object.prototype.hasOwnProperty,
                            _ = {
                                current: null
                            },
                            S = {
                                key: !0,
                                ref: !0,
                                __self: !0,
                                __source: !0
                            };

                        function j(e, n, r) {
                            var o, a = {},
                                i = null,
                                u = null;
                            if (null != n)
                                for (o in void 0 !== n.ref && (u = n.ref), void 0 !== n.key && (i = "" + n.key), n) x.call(n, o) && !S.hasOwnProperty(o) && (a[o] = n[o]);
                            var l = arguments.length - 2;
                            if (1 === l) a.children = r;
                            else if (1 < l) {
                                for (var c = Array(l), s = 0; s < l; s++) c[s] = arguments[s + 2];
                                a.children = c
                            }
                            if (e && e.defaultProps)
                                for (o in l = e.defaultProps) void 0 === a[o] && (a[o] = l[o]);
                            return {
                                $$typeof: t,
                                type: e,
                                key: i,
                                ref: u,
                                props: a,
                                _owner: _.current
                            }
                        }

                        function E(e) {
                            return "object" == typeof e && null !== e && e.$$typeof === t
                        }
                        var C = /\/+/g;

                        function P(e, t) {
                            var n, r;
                            return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
                                "=": "=0",
                                ":": "=2"
                            }, "$" + n.replace(/[=:]/g, function(e) {
                                return r[e]
                            })) : t.toString(36)
                        }

                        function k(e, r, o) {
                            if (null == e) return e;
                            var a = [],
                                i = 0;
                            return ! function e(r, o, a, i, u) {
                                var l, c, s, f = typeof r;
                                ("undefined" === f || "boolean" === f) && (r = null);
                                var p = !1;
                                if (null === r) p = !0;
                                else switch (f) {
                                    case "string":
                                    case "number":
                                        p = !0;
                                        break;
                                    case "object":
                                        switch (r.$$typeof) {
                                            case t:
                                            case n:
                                                p = !0
                                        }
                                }
                                if (p) return u = u(p = r), r = "" === i ? "." + P(p, 0) : i, w(u) ? (a = "", null != r && (a = r.replace(C, "$&/") + "/"), e(u, o, a, "", function(e) {
                                    return e
                                })) : null != u && (E(u) && (l = u, c = a + (!u.key || p && p.key === u.key ? "" : ("" + u.key).replace(C, "$&/") + "/") + r, u = {
                                    $$typeof: t,
                                    type: l.type,
                                    key: c,
                                    ref: l.ref,
                                    props: l.props,
                                    _owner: l._owner
                                }), o.push(u)), 1;
                                if (p = 0, i = "" === i ? "." : i + ":", w(r))
                                    for (var m = 0; m < r.length; m++) {
                                        var h = i + P(f = r[m], m);
                                        p += e(f, o, a, h, u)
                                    } else if ("function" == typeof(h = null === (s = r) || "object" != typeof s ? null : "function" == typeof(s = d && s[d] || s["@@iterator"]) ? s : null))
                                        for (r = h.call(r), m = 0; !(f = r.next()).done;) h = i + P(f = f.value, m++), p += e(f, o, a, h, u);
                                    else if ("object" === f) throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (o = String(r)) ? "object with keys {" + Object.keys(r).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
                                return p
                            }(e, a, "", "", function(e) {
                                return r.call(o, e, i++)
                            }), a
                        }

                        function O(e) {
                            if (-1 === e._status) {
                                var t = e._result;
                                (t = t()).then(function(t) {
                                    (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
                                }, function(t) {
                                    (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
                                }), -1 === e._status && (e._status = 0, e._result = t)
                            }
                            if (1 === e._status) return e._result.default;
                            throw e._result
                        }
                        var R = {
                                current: null
                            },
                            M = {
                                transition: null
                            };
                        e.Children = {
                            map: k,
                            forEach: function(e, t, n) {
                                k(e, function() {
                                    t.apply(this, arguments)
                                }, n)
                            },
                            count: function(e) {
                                var t = 0;
                                return k(e, function() {
                                    t++
                                }), t
                            },
                            toArray: function(e) {
                                return k(e, function(e) {
                                    return e
                                }) || []
                            },
                            only: function(e) {
                                if (!E(e)) throw Error("React.Children.only expected to receive a single React element child.");
                                return e
                            }
                        }, e.Component = v, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = o, e.Suspense = c, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
                            ReactCurrentDispatcher: R,
                            ReactCurrentBatchConfig: M,
                            ReactCurrentOwner: _
                        }, e.cloneElement = function(e, n, r) {
                            if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                            var o = m({}, e.props),
                                a = e.key,
                                i = e.ref,
                                u = e._owner;
                            if (null != n) {
                                if (void 0 !== n.ref && (i = n.ref, u = _.current), void 0 !== n.key && (a = "" + n.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                                for (c in n) x.call(n, c) && !S.hasOwnProperty(c) && (o[c] = void 0 === n[c] && void 0 !== l ? l[c] : n[c])
                            }
                            var c = arguments.length - 2;
                            if (1 === c) o.children = r;
                            else if (1 < c) {
                                l = Array(c);
                                for (var s = 0; s < c; s++) l[s] = arguments[s + 2];
                                o.children = l
                            }
                            return {
                                $$typeof: t,
                                type: e.type,
                                key: a,
                                ref: i,
                                props: o,
                                _owner: u
                            }
                        }, e.createContext = function(e) {
                            return (e = {
                                $$typeof: u,
                                _currentValue: e,
                                _currentValue2: e,
                                _threadCount: 0,
                                Provider: null,
                                Consumer: null,
                                _defaultValue: null,
                                _globalName: null
                            }).Provider = {
                                $$typeof: i,
                                _context: e
                            }, e.Consumer = e
                        }, e.createElement = j, e.createFactory = function(e) {
                            var t = j.bind(null, e);
                            return t.type = e, t
                        }, e.createRef = function() {
                            return {
                                current: null
                            }
                        }, e.forwardRef = function(e) {
                            return {
                                $$typeof: l,
                                render: e
                            }
                        }, e.isValidElement = E, e.lazy = function(e) {
                            return {
                                $$typeof: f,
                                _payload: {
                                    _status: -1,
                                    _result: e
                                },
                                _init: O
                            }
                        }, e.memo = function(e, t) {
                            return {
                                $$typeof: s,
                                type: e,
                                compare: void 0 === t ? null : t
                            }
                        }, e.startTransition = function(e) {
                            var t = M.transition;
                            M.transition = {};
                            try {
                                e()
                            } finally {
                                M.transition = t
                            }
                        }, e.unstable_act = function() {
                            throw Error("act(...) is not supported in production builds of React.")
                        }, e.useCallback = function(e, t) {
                            return R.current.useCallback(e, t)
                        }, e.useContext = function(e) {
                            return R.current.useContext(e)
                        }, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
                            return R.current.useDeferredValue(e)
                        }, e.useEffect = function(e, t) {
                            return R.current.useEffect(e, t)
                        }, e.useId = function() {
                            return R.current.useId()
                        }, e.useImperativeHandle = function(e, t, n) {
                            return R.current.useImperativeHandle(e, t, n)
                        }, e.useInsertionEffect = function(e, t) {
                            return R.current.useInsertionEffect(e, t)
                        }, e.useLayoutEffect = function(e, t) {
                            return R.current.useLayoutEffect(e, t)
                        }, e.useMemo = function(e, t) {
                            return R.current.useMemo(e, t)
                        }, e.useReducer = function(e, t, n) {
                            return R.current.useReducer(e, t, n)
                        }, e.useRef = function(e) {
                            return R.current.useRef(e)
                        }, e.useState = function(e) {
                            return R.current.useState(e)
                        }, e.useSyncExternalStore = function(e, t, n) {
                            return R.current.useSyncExternalStore(e, t, n)
                        }, e.useTransition = function() {
                            return R.current.useTransition()
                        }, e.version = "18.2.0"
                    }
                });
            ew({
                "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(e, t) {}
            });
            var e_ = (c = null != (l = ew({
                    "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(e, t) {
                        t.exports = ex()
                    }
                })()) ? em(ey(l)) : {}, ((e, t, n, r) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let n of eg(t)) eb.call(e, n) || void 0 === n || eh(e, n, {
                            get: () => t[n],
                            enumerable: !(r = ev(t, n)) || r.enumerable
                        });
                    return e
                })(l && l.__esModule ? c : eh(c, "default", {
                    value: l,
                    enumerable: !0
                }), l)),
                eS = (e, t) => {
                    var n;
                    let r = [];
                    return [null == (n = e_.Children.map(e, e => (0, e_.isValidElement)(e) && e.type === t ? (r.push(e), null) : e)) ? void 0 : n.filter(Boolean), r.length >= 0 ? r : void 0]
                },
                ej = (0, p.Gp)((e, t) => {
                    let {
                        children: n,
                        ...r
                    } = e, o = function(e) {
                        var t;
                        let [n, r] = (0, p.oe)(e, ec.variantKeys), {
                            ref: o,
                            as: a,
                            parentRef: i,
                            height: u = "4rem",
                            shouldHideOnScroll: l = !1,
                            disableScrollHandler: c = !1,
                            onScrollPositionChange: s,
                            isMenuOpen: f,
                            isMenuDefaultOpen: d,
                            onMenuOpenChange: g = () => {},
                            motionProps: y,
                            className: x,
                            classNames: _,
                            ...S
                        } = n, j = (0, m.gy)(o), E = (0, w.useRef)(0), C = (0, w.useRef)(0), [P, k] = (0, w.useState)(!1), O = (0, w.useCallback)(e => {
                            g(e || !1)
                        }, [g]), [R, M] = (0, ep.zk)(f, d, O), N = () => {
                            if (j.current) {
                                let e = j.current.offsetWidth;
                                e !== E.current && (E.current = e)
                            }
                        };
                        (0, b.yU)({
                            ref: j,
                            onResize: () => {
                                var e;
                                (null == (e = j.current) ? void 0 : e.offsetWidth) !== E.current && (N(), M(!1))
                            }
                        }), (0, w.useEffect)(() => {
                            var e;
                            N(), C.current = (null == (e = j.current) ? void 0 : e.offsetHeight) || 0
                        }, []);
                        let I = (0, w.useMemo)(() => ec({
                                ...r,
                                hideOnScroll: l
                            }), [...Object.values(r), l]),
                            z = (0, h.W)(null == _ ? void 0 : _.base, x);
                        return ed({
                            elementRef: i,
                            isEnabled: l || !c,
                            callback: ({
                                prevPos: e,
                                currPos: t
                            }) => {
                                null == s || s(t.y), l && k(n => {
                                    let r = t.y > e.y && t.y > C.current;
                                    return r !== n ? r : n
                                })
                            }
                        }), {
                            Component: a || "nav",
                            slots: I,
                            domRef: j,
                            height: u,
                            isHidden: P,
                            disableAnimation: null != (t = e.disableAnimation) && t,
                            shouldHideOnScroll: l,
                            isMenuOpen: R,
                            classNames: _,
                            setIsMenuOpen: M,
                            motionProps: y,
                            getBaseProps: (e = {}) => ({
                                ...(0, b.dG)(S, e),
                                "data-hidden": (0, v.PB)(P),
                                "data-menu-open": (0, v.PB)(R),
                                ref: j,
                                className: I.base({
                                    class: (0, h.W)(z, null == e ? void 0 : e.className)
                                }),
                                style: {
                                    "--navbar-height": u,
                                    ...null == S ? void 0 : S.style,
                                    ...null == e ? void 0 : e.style
                                }
                            }),
                            getWrapperProps: (e = {}) => ({
                                ...e,
                                "data-menu-open": (0, v.PB)(R),
                                className: I.wrapper({
                                    class: (0, h.W)(null == _ ? void 0 : _.wrapper, null == e ? void 0 : e.className)
                                })
                            })
                        }
                    }({
                        ...r,
                        ref: t
                    }), a = o.Component, [i, u] = eS(n, eo), l = (0, er.jsxs)(er.Fragment, {
                        children: [(0, er.jsx)("header", {
                            ...o.getWrapperProps(),
                            children: i
                        }), u]
                    });
                    return (0, er.jsx)(f.V, {
                        value: o,
                        children: o.shouldHideOnScroll ? (0, er.jsx)(y.E.nav, {
                            animate: o.isHidden ? "hidden" : "visible",
                            initial: !1,
                            variants: ei,
                            ...(0, b.dG)(o.getBaseProps(), o.motionProps),
                            children: l
                        }) : (0, er.jsx)(a, {
                            ...o.getBaseProps(),
                            children: l
                        })
                    })
                });
            ej.displayName = "NextUI.Navbar";
            var eE = ej
        },
        15968: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return s
                }
            });
            var r = n(13519),
                o = n(77485),
                a = n(25312),
                i = n(59762),
                u = n(48794),
                l = n(57437),
                c = (0, o.Gp)((e, t) => {
                    var n;
                    let {
                        as: o,
                        className: c,
                        children: s,
                        isActive: f,
                        ...d
                    } = e, p = (0, a.gy)(t), {
                        slots: m,
                        classNames: h
                    } = (0, r.q)(), v = (0, i.W)(null == h ? void 0 : h.item, c);
                    return (0, l.jsx)(o || "li", {
                        ref: p,
                        className: null == (n = m.item) ? void 0 : n.call(m, {
                            class: v
                        }),
                        "data-active": (0, u.PB)(f),
                        ...d,
                        children: s
                    })
                });
            c.displayName = "NextUI.NavbarItem";
            var s = c
        },
        27231: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return c
                }
            });
            var r = n(13519),
                o = n(77485),
                a = n(25312),
                i = n(59762),
                u = n(57437),
                l = (0, o.Gp)((e, t) => {
                    var n;
                    let {
                        as: o,
                        className: l,
                        children: c,
                        justify: s = "start",
                        ...f
                    } = e, d = (0, a.gy)(t), {
                        slots: p,
                        classNames: m
                    } = (0, r.q)(), h = (0, i.W)(null == m ? void 0 : m.content, l);
                    return (0, u.jsx)(o || "ul", {
                        ref: d,
                        className: null == (n = p.content) ? void 0 : n.call(p, {
                            class: h
                        }),
                        "data-justify": s,
                        ...f,
                        children: c
                    })
                });
            l.displayName = "NextUI.NavbarContent";
            var c = l
        },
        91555: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return c
                }
            });
            var r = n(13519),
                o = n(77485),
                a = n(25312),
                i = n(59762),
                u = n(57437),
                l = (0, o.Gp)((e, t) => {
                    var n;
                    let {
                        as: o,
                        className: l,
                        children: c,
                        ...s
                    } = e, f = (0, a.gy)(t), {
                        slots: d,
                        classNames: p
                    } = (0, r.q)(), m = (0, i.W)(null == p ? void 0 : p.brand, l);
                    return (0, u.jsx)(o || "div", {
                        ref: f,
                        className: null == (n = d.brand) ? void 0 : n.call(d, {
                            class: m
                        }),
                        ...s,
                        children: c
                    })
                });
            l.displayName = "NextUI.NavbarBrand";
            var c = l
        },
        2402: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return a
                }
            });
            var r = n(3446),
                o = n(2265);

            function a({
                onSelectWallet: e
            }) {
                let t;
                let {
                    connect: n,
                    connected: a,
                    connecting: i,
                    disconnect: u,
                    disconnecting: l,
                    publicKey: c,
                    select: s,
                    wallet: f,
                    wallets: d
                } = (0, r.O)();
                t = i ? "connecting" : a ? "connected" : l ? "disconnecting" : f ? "has-wallet" : "no-wallet";
                let p = (0, o.useCallback)(() => {
                        n().catch(() => {})
                    }, [n]),
                    m = (0, o.useCallback)(() => {
                        u().catch(() => {})
                    }, [u]);
                return {
                    buttonState: t,
                    onConnect: "has-wallet" === t ? p : void 0,
                    onDisconnect: "disconnecting" !== t && "no-wallet" !== t ? m : void 0,
                    onSelectWallet: (0, o.useCallback)(() => {
                        e({
                            onSelectWallet: s,
                            wallets: d
                        })
                    }, [e, s, d]),
                    publicKey: c ?? void 0,
                    walletIcon: f?.adapter.icon,
                    walletName: f?.adapter.name
                }
            }
        }
    }
]);