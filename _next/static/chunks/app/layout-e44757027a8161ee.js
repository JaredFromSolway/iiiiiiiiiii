(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        46601: function() {},
        82984: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 797)), Promise.resolve().then(t.t.bind(t, 76951, 23)), Promise.resolve().then(t.t.bind(t, 52445, 23))
        },
        797: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(57437),
                s = t(2265),
                l = t(19399),
                c = t(73438),
                i = t(46825),
                o = t(62668),
                a = t(97089),
                u = t(63438);
            t(1800);
            var h = t(34211),
                d = t(64654),
                f = t(38038),
                v = t(25566);
            let b = new d.S;
            n.default = e => {
                let n, {
                    children: t
                } = e;
                switch (v.env.NEXT_PUBLIC_NETWORK) {
                    case "mainnet":
                    default:
                        n = "https://solana-mainnet.g.alchemy.com/v2/zrHriHQ00VlXKA5LK6Ij2PXCWSt9BHq8";
                        break;
                    case "devnet":
                        n = (0, u.clusterApiUrl)(i.Q.Devnet);
                        break;
                    case "testnet":
                        n = (0, u.clusterApiUrl)(i.Q.Testnet)
                }
                let d = (0, s.useMemo)(() => [new o.e], []),
                    m = (0, s.useCallback)(e => {
                        console.error(e)
                    }, []);
                return (0, r.jsx)(h.w, {
                    children: (0, r.jsx)(l.U, {
                        endpoint: n,
                        children: (0, r.jsx)(c.n, {
                            wallets: d,
                            onError: m,
                            autoConnect: !0,
                            children: (0, r.jsx)(a.s, {
                                children: (0, r.jsx)(f.aH, {
                                    client: b,
                                    children: t
                                })
                            })
                        })
                    })
                })
            }
        },
        52445: function() {}
    },
    function(e) {
        e.O(0, [814, 905, 397, 316, 971, 938, 744], function() {
            return e(e.s = 82984)
        }), _N_E = e.O()
    }
]);
