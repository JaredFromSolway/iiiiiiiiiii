(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [651], {
        7420: function() {},
        46601: function() {},
        22253: function(e, a, s) {
            Promise.resolve().then(s.bind(s, 48720)), Promise.resolve().then(s.bind(s, 98099)), Promise.resolve().then(s.bind(s, 664)), Promise.resolve().then(s.bind(s, 82893))
        },
        48720: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                CreateToken: function() {
                    return q
                }
            });
            var t = s(57437),
                l = s(2265),
                n = s(72086),
                i = s(3446),
                r = s(63438),
                o = s(91926),
                c = s(63742),
                d = s(49554),
                u = s(46854),
                m = s(5804),
                p = s(40551),
                h = s(83112),
                x = s(37782),
                y = s(21507),
                f = s(92173),
                g = s(74727),
                b = s(89461),
                j = s(31541),
                v = s(13116),
                k = s(92537),
                w = s(35691),
                S = s(42315),
                N = s(67133).Buffer;
            let P = e => {
                    let {
                        field: a,
                        form: s,
                        ...l
                    } = e;
                    return (0, t.jsx)(h.Y, {
                        ...a,
                        ...l
                    })
                },
                T = e => {
                    let {
                        field: a,
                        form: s,
                        ...l
                    } = e;
                    return (0, t.jsx)(x.Y, {
                        ...a,
                        ...l
                    })
                },
                q = () => {
                    let {
                        connection: e
                    } = (0, n.R)(), {
                        publicKey: a,
                        connected: s,
                        sendTransaction: h
                    } = (0, i.O)(), {
                        setVisible: x
                    } = (0, S.h)(), [q, C] = (0, l.useState)(null), A = (0, l.useRef)(null), I = (e, a) => {
                        let s = e.target.files[0];
                        C(URL.createObjectURL(s)), a("image", "done")
                    };
                    return (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [(0, t.jsx)("h1", {
                                className: "text-3xl font-bold",
                                children: "KenzTools Solana Token Creator"
                            }), (0, t.jsxs)("p", {
                                className: "text-base",
                                children: ["The perfect tool to create Solana SPL tokens.", (0, t.jsx)("br", {}), "Simple, user friendly, and fast."]
                            })]
                        }), (0, t.jsx)(g.Z, {
                            isShadow: !0,
                            className: "mt-14",
                            children: (0, t.jsx)(y.G, {
                                className: "pt-4 py-5 px-3 lg:py-8 lg:px-6",
                                children: (0, t.jsx)(k.J9, {
                                    enableReinitialize: !0,
                                    initialValues: {
                                        name: "",
                                        symbol: "",
                                        description: "",
                                        supply: "",
                                        decimal: "",
                                        image: ""
                                    },
                                    validationSchema: w.Ry().shape({
                                        name: w.Z_().required("Name is required"),
                                        symbol: w.Z_().required("Symbol is required").max(8, "max 8 characters"),
                                        description: w.Z_().required("Description is required"),
                                        supply: w.Rx().min(1, "Cant be Less Than 1").required("Amount is required"),
                                        decimal: w.Rx().min(0, "Cant be Less Than Zero").max(9, "Cant be More Than 9").required("Decimal is required"),
                                        image: w.Z_().required("Image is Requird")
                                    }),
                                    onSubmit: async (s, t) => {
                                        let {
                                            setSubmitting: l,
                                            setErrors: n
                                        } = t;
                                        try {
                                            if (!a) return Promise.reject("Connect Wallet");
                                            l(!0);
                                            let t = new FormData;
                                            t.append("name", s.name), t.append("description", s.description), t.append("symbol", s.symbol), t.append("image", A.current.files[0]);
                                            let {
                                                data: i,
                                                status: x
                                            } = await f.Z.post("/pinFileToIPFS", t);
                                            if (200 !== x || !i.status) {
                                                n(i.errors || {});
                                                return
                                            }
                                            let y = await (0, o.Mg)(e),
                                                g = r.Keypair.generate(),
                                                b = await (0, o.Am)(g.publicKey, a),
                                                j = new r.PublicKey("AJjjv6nYvzjQsDuYGsB1tMcN2BcRL5eEeXb7QE9kJSZH"),
                                                v = (0, p.createCreateMetadataAccountV3Instruction)({
                                                    metadata: r.PublicKey.findProgramAddressSync([N.from("metadata"), p.PROGRAM_ID.toBuffer(), g.publicKey.toBuffer()], p.PROGRAM_ID)[0],
                                                    mint: g.publicKey,
                                                    mintAuthority: a,
                                                    payer: a,
                                                    updateAuthority: a
                                                }, {
                                                    createMetadataAccountArgsV3: {
                                                        data: {
                                                            name: s.name,
                                                            symbol: s.symbol,
                                                            uri: "https://ipfs.io/ipfs/".concat(i.data),
                                                            creators: null,
                                                            sellerFeeBasisPoints: 0,
                                                            uses: null,
                                                            collection: null
                                                        },
                                                        isMutable: !1,
                                                        collectionDetails: null
                                                    }
                                                }),
                                                k = new r.Transaction().add(r.SystemProgram.createAccount({
                                                    fromPubkey: a,
                                                    newAccountPubkey: g.publicKey,
                                                    space: o.Bl,
                                                    lamports: y,
                                                    programId: c.H_
                                                }), (0, d.I0)(g.publicKey, Number(s.decimal), a, a, c.H_), (0, u.Ek)(a, b, a, g.publicKey), (0, m.G7)(g.publicKey, b, a, BigInt(s.supply) * BigInt(10) ** BigInt(s.decimal)), r.SystemProgram.transfer({
                                                    fromPubkey: a,
                                                    toPubkey: j,
                                                    lamports: 5e8
                                                }), v);
                                            console.log(BigInt(s.supply) * BigInt(10) ** BigInt(s.decimal)), await h(k, e, {
                                                signers: [g]
                                            }), l(!1)
                                        } catch (e) {
                                            l(!1)
                                        }
                                    },
                                    children: e => {
                                        let {
                                            isSubmitting: a,
                                            setFieldValue: l,
                                            errors: n,
                                            touched: i
                                        } = e;
                                        return (0, t.jsx)(k.l0, {
                                            noValidate: !0,
                                            children: (0, t.jsxs)("div", {
                                                className: "gap-4 flex flex-col",
                                                children: [(0, t.jsxs)("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [(0, t.jsx)("div", {
                                                        children: (0, t.jsx)(k.gN, {
                                                            name: "name",
                                                            type: "text",
                                                            label: "Name",
                                                            labelPlacement: "outside",
                                                            placeholder: " ",
                                                            classNames: {
                                                                label: "font-semibold"
                                                            },
                                                            as: P,
                                                            isInvalid: i.name && n.name,
                                                            errorMessage: i.name && n.name
                                                        })
                                                    }), (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(k.gN, {
                                                            type: "text",
                                                            label: "Symbol",
                                                            labelPlacement: "outside",
                                                            placeholder: " ",
                                                            classNames: {
                                                                label: "font-semibold"
                                                            },
                                                            as: P,
                                                            name: "symbol",
                                                            isInvalid: i.supply && n.symbol,
                                                            errorMessage: i.supply && n.symbol
                                                        })
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [(0, t.jsxs)("div", {
                                                        className: "grid gap-4",
                                                        children: [(0, t.jsx)("div", {
                                                            children: (0, t.jsx)(k.gN, {
                                                                type: "number",
                                                                label: "Decimals",
                                                                labelPlacement: "outside",
                                                                placeholder: " ",
                                                                classNames: {
                                                                    label: "font-semibold"
                                                                },
                                                                as: P,
                                                                name: "decimal",
                                                                isInvalid: i.decimal && n.decimal,
                                                                errorMessage: i.decimal && n.decimal,
                                                                min: "0",
                                                                max: "9"
                                                            })
                                                        }), (0, t.jsx)("div", {
                                                            children: (0, t.jsx)(k.gN, {
                                                                type: "number",
                                                                label: "Supply",
                                                                labelPlacement: "outside",
                                                                placeholder: " ",
                                                                classNames: {
                                                                    label: "font-semibold"
                                                                },
                                                                as: P,
                                                                name: "supply",
                                                                isInvalid: i.supply && n.supply,
                                                                errorMessage: i.supply && n.supply,
                                                                min: "1"
                                                            })
                                                        })]
                                                    }), (0, t.jsxs)("div", {
                                                        className: "grow flex flex-col",
                                                        children: [(0, t.jsx)("span", {
                                                            className: "font-semibold relative -top-1",
                                                            children: "Image"
                                                        }), (0, t.jsxs)("div", {
                                                            className: "bg-default-100 grow rounded-medium grid place-content-center cursor-pointer",
                                                            onClick: () => A.current.click(),
                                                            children: [q ? (0, t.jsx)("img", {
                                                                className: "max-w-24 max-h-24",
                                                                src: q,
                                                                alt: "Selected"
                                                            }) : (0, t.jsx)(j.Z, {
                                                                size: 32
                                                            }), (0, t.jsx)("input", {
                                                                type: "file",
                                                                ref: A,
                                                                placeholder: " ",
                                                                className: "hidden",
                                                                accept: "image/*",
                                                                onChange: e => I(e, l)
                                                            })]
                                                        }), (0, t.jsx)(k.Bc, {
                                                            name: "image",
                                                            children: e => (0, t.jsx)("div", {
                                                                className: "text-danger text-lg",
                                                                children: e
                                                            })
                                                        })]
                                                    })]
                                                }), (0, t.jsx)("div", {
                                                    children: (0, t.jsx)(k.gN, {
                                                        label: "Description",
                                                        placeholder: " ",
                                                        labelPlacement: "outside",
                                                        classNames: {
                                                            label: "font-semibold"
                                                        },
                                                        as: T,
                                                        type: "textarea",
                                                        name: "description",
                                                        isInvalid: i.description && n.description,
                                                        errorMessage: i.description && n.description
                                                    })
                                                }), s ? (0, t.jsxs)(b.Z, {
                                                    color: "primary",
                                                    type: "submit",
                                                    isDisabled: a,
                                                    children: ["Create Token ", a && (0, t.jsx)(v.Z, {
                                                        size: 18,
                                                        strokeWidth: 1,
                                                        className: "ml-1 animate-spin"
                                                    })]
                                                }) : (0, t.jsx)(b.Z, {
                                                    onClick: () => x(!0),
                                                    children: "Select Wallet"
                                                })]
                                            })
                                        })
                                    }
                                })
                            })
                        })]
                    })
                }
        },
        98099: function(e, a, s) {
            "use strict";
            s.r(a);
            var t = s(57437),
                l = s(9643),
                n = s(87427);
            let i = [{
                question: "What is the Solana Token Creator?",
                answer: "The KenzTools Solana Token Creator is an advanced Smart Contract empowering users to effortlessly generate customized SPL Tokens (Solana tokens), specifically tailored to their preferences in terms of supply, name, symbol, description, and image on the Solana Chain. Making tokens is super quick and cheap with our easy process."
            }, {
                question: "Is it Safe to Create Solana Tokens here?",
                answer: "Yes, our tools is completely safe. It is a dApp that creates your token, giving you and only you the mint and freeze Authority (the control of a SPL Token). Our dApp is audited and used by hundred of users every month."
            }, {
                question: "How much time will the Solana Token Creator Take?",
                answer: "The time of your Token Creation depends on the TPS Status of Solana. It usually takes just a few seconds so do not worry. If you have any issue please contact us"
            }, {
                question: "How much does it cost?",
                answer: "The token creation currently cost 0.5 Sol, it includes all fees necessaries for the Token Creation in Solana mainnet."
            }, {
                question: "Which wallet can I use?",
                answer: "You can use any Solana Wallet as Phantom, Solflare, Backpack, etc."
            }];
            a.default = () => (0, t.jsxs)("div", {
                children: [(0, t.jsx)("div", {
                    className: "text-3xl font-bold mb-8",
                    children: "Frequently Asked Questions"
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(l.d, {
                        className: "px-0",
                        children: i.map((e, a) => (0, t.jsx)(n.G, {
                            title: e.question,
                            children: e.answer
                        }, a))
                    })
                })]
            })
        },
        664: function(e, a, s) {
            "use strict";
            s.r(a);
            var t = s(57437),
                l = s(94042),
                n = s(21507),
                i = s(62945),
                r = s(19174),
                o = s(64586),
                c = s(2265),
                d = s(72463),
                u = s(72086),
                m = s(3446),
                p = s(63438),
                h = s(99460),
                x = s(74727),
                y = s(89461),
                f = s(42315);
            let g = new p.PublicKey("AJjjv6nYvzjQsDuYGsB1tMcN2BcRL5eEeXb7QE9kJSZH");
            a.default = () => {
                let [e, a] = (0, c.useState)(!1), {
                    connection: s
                } = (0, u.R)(), {
                    publicKey: b,
                    signTransaction: j,
                    connected: v
                } = (0, m.O)(), {
                    setVisible: k
                } = (0, f.h)(), [w, S] = (0, c.useState)(""), [N, P] = (0, c.useState)(null), {
                    data: T
                } = (0, h.Z)(null == b ? void 0 : b.toString()), q = async () => {
                    try {
                        a(!0);
                        let e = (0, d.zl)(new p.PublicKey(N), b, d.aj.FreezeAccount, null),
                            t = new p.Transaction().add(e, p.SystemProgram.transfer({
                                fromPubkey: b,
                                toPubkey: g,
                                lamports: 1e8
                            })),
                            l = await s.getLatestBlockhash();
                        t.recentBlockhash = l.blockhash, t.feePayer = b;
                        let n = await j(t);
                        await s.sendRawTransaction(n.serialize()), a(!1)
                    } catch (e) {
                        a(!1), console.log(e)
                    }
                };
                return (0, t.jsx)("div", {
                    children: (0, t.jsxs)(x.Z, {
                        children: [(0, t.jsx)(l.u, {
                            className: "pt-4 px-3 lg:pt-8 lg:px-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [(0, t.jsx)("span", {
                                    className: "text-lg font-bold",
                                    children: "Are you going to Create a Liquidity Pool?"
                                }), (0, t.jsx)("span", {
                                    className: "text-sm",
                                    children: 'If you want to create a liquidity pool you will need to "Revoke Freeze Authority" of the Token, you can do that here. The cost is 0.1 SOL.'
                                })]
                            })
                        }), (0, t.jsx)(n.G, {
                            className: "pb-4 px-3 lg:pb-8 lg:px-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, t.jsx)(i.d, {
                                    allowsCustomValue: !0,
                                    label: "Select Token",
                                    defaultItems: T,
                                    onSelectionChange: e => {
                                        P(e)
                                    },
                                    onInputChange: e => {
                                        S(e)
                                    },
                                    children: e => (0, t.jsx)(r.R, {
                                        textValue: e.name || "",
                                        startContent: (0, t.jsx)(o.h, {
                                            alt: e.symbol,
                                            className: "w-6 h-6",
                                            src: e.image
                                        }),
                                        children: e.name || ""
                                    }, e.address || e.index)
                                }), v ? (0, t.jsx)(y.Z, {
                                    isDisabled: e,
                                    color: "primary",
                                    onClick: q,
                                    children: "Revoke Freeze Authority"
                                }) : (0, t.jsx)(y.Z, {
                                    onClick: () => k(!0),
                                    children: "Select Wallet"
                                })]
                            })
                        })]
                    })
                })
            }
        },
        82893: function(e, a, s) {
            "use strict";
            s.r(a);
            var t = s(57437),
                l = s(94042),
                n = s(21507),
                i = s(62945),
                r = s(19174),
                o = s(64586),
                c = s(2265),
                d = s(72463),
                u = s(3446),
                m = s(72086),
                p = s(63438),
                h = s(99460),
                x = s(74727),
                y = s(89461),
                f = s(42315);
            let g = new p.PublicKey("AJjjv6nYvzjQsDuYGsB1tMcN2BcRL5eEeXb7QE9kJSZH");
            a.default = () => {
                let {
                    publicKey: e,
                    signTransaction: a,
                    connected: s
                } = (0, u.O)(), {
                    connection: b
                } = (0, m.R)(), [j, v] = (0, c.useState)(!1), {
                    setVisible: k
                } = (0, f.h)(), [w, S] = (0, c.useState)(""), [N, P] = (0, c.useState)(null), {
                    data: T
                } = (0, h.Z)(null == e ? void 0 : e.toString()), q = async () => {
                    try {
                        v(!0);
                        let s = (0, d.zl)(new p.PublicKey(N), e, d.aj.MintTokens, null),
                            t = new p.Transaction().add(s, p.SystemProgram.transfer({
                                fromPubkey: e,
                                toPubkey: g,
                                lamports: 1e8
                            })),
                            l = await b.getLatestBlockhash();
                        t.recentBlockhash = l.blockhash, t.feePayer = e;
                        let n = await a(t);
                        await b.sendRawTransaction(n.serialize()), v(!1)
                    } catch (e) {
                        v(!1), console.log(e)
                    }
                };
                return (0, t.jsx)("div", {
                    children: (0, t.jsxs)(x.Z, {
                        children: [(0, t.jsx)(l.u, {
                            className: "pt-4 px-3 lg:pt-8 lg:px-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [(0, t.jsx)("span", {
                                    className: "text-lg font-bold",
                                    children: "Revoke Mint Authority"
                                }), (0, t.jsx)("span", {
                                    className: "text-sm",
                                    children: "Revoking mint authority ensures that there can be no more tokens minted than the total supply. This provides security and peace of mind to buyers. The cost is 0.1 SOL"
                                })]
                            })
                        }), (0, t.jsx)(n.G, {
                            className: "pb-4 px-3 lg:pb-8 lg:px-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, t.jsx)(i.d, {
                                    allowsCustomValue: !0,
                                    label: "Select Token",
                                    defaultItems: T,
                                    onSelectionChange: e => {
                                        P(e)
                                    },
                                    onInputChange: e => {
                                        S(e)
                                    },
                                    children: e => (0, t.jsx)(r.R, {
                                        textValue: e.name || "",
                                        startContent: (0, t.jsx)(o.h, {
                                            alt: e.symbol,
                                            className: "w-6 h-6",
                                            src: e.image
                                        }),
                                        children: e.name || ""
                                    }, e.address || e.index)
                                }), s ? (0, t.jsx)(y.Z, {
                                    isDisabled: j,
                                    color: "primary",
                                    onClick: q,
                                    children: "Revoke Mint Authority"
                                }) : (0, t.jsx)(y.Z, {
                                    onClick: () => k(!0),
                                    children: "Select Wallet"
                                })]
                            })
                        })]
                    })
                })
            }
        },
        89461: function(e, a, s) {
            "use strict";
            var t = s(57437),
                l = s(55310);
            a.Z = e => {
                let {
                    children: a,
                    ...s
                } = e;
                return (0, t.jsx)(l.A, {
                    className: "frosted-glass-teal",
                    ...s,
                    children: a
                })
            }
        },
        74727: function(e, a, s) {
            "use strict";
            var t = s(57437),
                l = s(77485),
                n = s(31835);
            a.Z = e => {
                let {
                    children: a,
                    className: s,
                    isShadow: i,
                    ...r
                } = e;
                return (0, t.jsx)("div", {
                    style: {
                        borderRadius: "21.2px",
                        padding: "1.2px",
                        backgroundImage: "linear-gradient(var(--gradient-rotate, 246deg), #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)"
                    },
                    className: (0, l.cn)("relative", i && "cyberpunk-bg-light", s),
                    ...r,
                    children: (0, t.jsx)(n.w, {
                        className: "z-10 bg-cyberpunk-card-bg rounded-[21.2px]",
                        children: a
                    })
                })
            }
        },
        99460: function(e, a, s) {
            "use strict";
            var t = s(63449),
                l = s(63438),
                n = s(63742),
                i = s(72086),
                r = s(81364),
                o = s(5125),
                c = s(92173),
                d = s(2265);
            a.Z = function(e) {
                var a, s;
                let {
                    connection: u
                } = (0, i.R)(), m = (0, d.useMemo)(() => new t.I(u), [u]), {
                    data: p,
                    isLoading: h
                } = (0, r.a)({
                    queryKey: ["tokenBalance", e],
                    queryFn: () => {
                        let a = {
                            jsonrpc: "2.0",
                            id: 1,
                            method: "getTokenAccountsByOwner",
                            params: [e, {
                                programId: n.H_
                            }, {
                                encoding: "jsonParsed"
                            }]
                        };
                        return c.Z.post(u.rpcEndpoint, a, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    },
                    enabled: !!e
                }), x = (null == p ? void 0 : null === (s = p.data) || void 0 === s ? void 0 : null === (a = s.result) || void 0 === a ? void 0 : a.value) || [], y = (0, o.h)({
                    queries: x.map(e => {
                        let a = e.account.data.parsed.info.mint;
                        return {
                            queryKey: ["token", a],
                            queryFn: () => m.nfts().findByMint({
                                mintAddress: new l.PublicKey(a)
                            })
                        }
                    }),
                    combine: e => ({
                        data: e.map(e => e.data),
                        pending: e.some(e => e.isPending)
                    })
                });
                return {
                    data: (0, d.useMemo)(() => x.map((e, a) => {
                        var s, t;
                        let l = null == y ? void 0 : null === (s = y.data) || void 0 === s ? void 0 : s[a],
                            {
                                uiAmount: n,
                                decimals: i,
                                amount: r
                            } = e.account.data.parsed.info.tokenAmount,
                            o = e.account.data.parsed.info.mint,
                            c = (null == l ? void 0 : l.name) || "";
                        return {
                            index: a,
                            symbol: (null == l ? void 0 : l.symbol) || "",
                            address: o,
                            balance: n,
                            decimals: i,
                            amount: r,
                            name: c,
                            image: null == l ? void 0 : null === (t = l.json) || void 0 === t ? void 0 : t.image
                        }
                    }), [null == y ? void 0 : y.data, x]),
                    isLoading: h
                }
            }
        }
    },
    function(e) {
        e.O(0, [814, 218, 856, 905, 397, 81, 610, 971, 938, 744], function() {
            return e(e.s = 22253)
        }), _N_E = e.O()
    }
]);