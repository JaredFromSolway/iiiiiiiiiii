"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [814], {
        63438: function(e, t, r) {
            let i;
            r.r(t), r.d(t, {
                Account: function() {
                    return N
                },
                AddressLookupTableAccount: function() {
                    return eM
                },
                AddressLookupTableInstruction: function() {
                    return rw
                },
                AddressLookupTableProgram: function() {
                    return rI
                },
                Authorized: function() {
                    return rL
                },
                BLOCKHASH_CACHE_TIMEOUT_MS: function() {
                    return eX
                },
                BPF_LOADER_DEPRECATED_PROGRAM_ID: function() {
                    return z
                },
                BPF_LOADER_PROGRAM_ID: function() {
                    return eC
                },
                BpfLoader: function() {
                    return eL
                },
                COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: function() {
                    return rA
                },
                ComputeBudgetInstruction: function() {
                    return r_
                },
                ComputeBudgetProgram: function() {
                    return rR
                },
                Connection: function() {
                    return rf
                },
                Ed25519Program: function() {
                    return rP
                },
                Enum: function() {
                    return T
                },
                EpochSchedule: function() {
                    return ez
                },
                FeeCalculatorLayout: function() {
                    return ew
                },
                Keypair: function() {
                    return rk
                },
                LAMPORTS_PER_SOL: function() {
                    return r1
                },
                LOOKUP_TABLE_INSTRUCTION_LAYOUTS: function() {
                    return rS
                },
                Loader: function() {
                    return eT
                },
                Lockup: function() {
                    return rO
                },
                MAX_SEED_LENGTH: function() {
                    return L
                },
                Message: function() {
                    return Q
                },
                MessageAccountKeys: function() {
                    return D
                },
                MessageV0: function() {
                    return ee
                },
                NONCE_ACCOUNT_LENGTH: function() {
                    return e_
                },
                NonceAccount: function() {
                    return eA
                },
                PACKET_DATA_SIZE: function() {
                    return U
                },
                PUBLIC_KEY_LENGTH: function() {
                    return O
                },
                PublicKey: function() {
                    return K
                },
                SIGNATURE_LENGTH_IN_BYTES: function() {
                    return G
                },
                SOLANA_SCHEMA: function() {
                    return C
                },
                STAKE_CONFIG_ID: function() {
                    return rC
                },
                STAKE_INSTRUCTION_LAYOUTS: function() {
                    return rK
                },
                SYSTEM_INSTRUCTION_LAYOUTS: function() {
                    return eE
                },
                SYSVAR_CLOCK_PUBKEY: function() {
                    return ec
                },
                SYSVAR_EPOCH_SCHEDULE_PUBKEY: function() {
                    return eu
                },
                SYSVAR_INSTRUCTIONS_PUBKEY: function() {
                    return el
                },
                SYSVAR_RECENT_BLOCKHASHES_PUBKEY: function() {
                    return ed
                },
                SYSVAR_RENT_PUBKEY: function() {
                    return eh
                },
                SYSVAR_REWARDS_PUBKEY: function() {
                    return eg
                },
                SYSVAR_SLOT_HASHES_PUBKEY: function() {
                    return ep
                },
                SYSVAR_SLOT_HISTORY_PUBKEY: function() {
                    return ey
                },
                SYSVAR_STAKE_HISTORY_PUBKEY: function() {
                    return eb
                },
                Secp256k1Program: function() {
                    return rT
                },
                SendTransactionError: function() {
                    return eU
                },
                SolanaJSONRPCError: function() {
                    return eG
                },
                SolanaJSONRPCErrorCode: function() {
                    return eq
                },
                StakeAuthorizationLayout: function() {
                    return rN
                },
                StakeInstruction: function() {
                    return rW
                },
                StakeProgram: function() {
                    return rz
                },
                Struct: function() {
                    return B
                },
                SystemInstruction: function() {
                    return eP
                },
                SystemProgram: function() {
                    return ev
                },
                Transaction: function() {
                    return en
                },
                TransactionExpiredBlockheightExceededError: function() {
                    return j
                },
                TransactionExpiredNonceInvalidError: function() {
                    return M
                },
                TransactionExpiredTimeoutError: function() {
                    return V
                },
                TransactionInstruction: function() {
                    return es
                },
                TransactionMessage: function() {
                    return eo
                },
                TransactionStatus: function() {
                    return er
                },
                VALIDATOR_INFO_KEY: function() {
                    return rM
                },
                VERSION_PREFIX_MASK: function() {
                    return q
                },
                VOTE_PROGRAM_ID: function() {
                    return rF
                },
                ValidatorInfo: function() {
                    return rH
                },
                VersionedMessage: function() {
                    return et
                },
                VersionedTransaction: function() {
                    return ea
                },
                VoteAccount: function() {
                    return rZ
                },
                VoteAuthorizationLayout: function() {
                    return rj
                },
                VoteInit: function() {
                    return rU
                },
                VoteInstruction: function() {
                    return rq
                },
                VoteProgram: function() {
                    return rV
                },
                clusterApiUrl: function() {
                    return rQ
                },
                sendAndConfirmRawTransaction: function() {
                    return r0
                },
                sendAndConfirmTransaction: function() {
                    return em
                }
            });
            var s, n, o = r(67133),
                a = r(4107),
                c = r(56662),
                u = r.n(c),
                l = r(68870),
                d = r.n(l),
                h = r(89802),
                g = r(84453),
                p = r(32452),
                y = r(40265),
                b = r(88111),
                m = r(152),
                f = r.n(m),
                k = r(17449),
                S = r(95400),
                w = r(49658),
                I = r(79604);
            let _ = a.UN.utils.randomPrivateKey,
                A = () => {
                    let e = a.UN.utils.randomPrivateKey(),
                        t = R(e),
                        r = new Uint8Array(64);
                    return r.set(e), r.set(t, 32), {
                        publicKey: t,
                        secretKey: r
                    }
                },
                R = a.UN.getPublicKey;

            function x(e) {
                try {
                    return a.UN.ExtendedPoint.fromHex(e), !0
                } catch {
                    return !1
                }
            }
            let P = (e, t) => a.UN.sign(e, t.slice(0, 32)),
                E = a.UN.verify,
                v = e => o.Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? o.Buffer.from(e.buffer, e.byteOffset, e.byteLength) : o.Buffer.from(e);
            class B {
                constructor(e) {
                    Object.assign(this, e)
                }
                encode() {
                    return o.Buffer.from((0, g.serialize)(C, this))
                }
                static decode(e) {
                    return (0, g.deserialize)(C, this, e)
                }
                static decodeUnchecked(e) {
                    return (0, g.deserializeUnchecked)(C, this, e)
                }
            }
            class T extends B {
                constructor(e) {
                    if (super(e), this.enum = "", 1 !== Object.keys(e).length) throw Error("Enum can only take single value");
                    Object.keys(e).map(e => {
                        this.enum = e
                    })
                }
            }
            let C = new Map,
                L = 32,
                O = 32,
                W = 1;
            i = Symbol.toStringTag;
            class K extends B {
                constructor(e) {
                    if (super({}), this._bn = void 0, void 0 !== e._bn) this._bn = e._bn;
                    else {
                        if ("string" == typeof e) {
                            let t = d().decode(e);
                            if (t.length != O) throw Error("Invalid public key input");
                            this._bn = new(u())(t)
                        } else this._bn = new(u())(e);
                        if (this._bn.byteLength() > O) throw Error("Invalid public key input")
                    }
                }
                static unique() {
                    let e = new K(W);
                    return W += 1, new K(e.toBuffer())
                }
                equals(e) {
                    return this._bn.eq(e._bn)
                }
                toBase58() {
                    return d().encode(this.toBytes())
                }
                toJSON() {
                    return this.toBase58()
                }
                toBytes() {
                    let e = this.toBuffer();
                    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                }
                toBuffer() {
                    let e = this._bn.toArrayLike(o.Buffer);
                    if (e.length === O) return e;
                    let t = o.Buffer.alloc(32);
                    return e.copy(t, 32 - e.length), t
                }
                get[i]() {
                    return `PublicKey(${this.toString()})`
                }
                toString() {
                    return this.toBase58()
                }
                static async createWithSeed(e, t, r) {
                    let i = o.Buffer.concat([e.toBuffer(), o.Buffer.from(t), r.toBuffer()]);
                    return new K((0, h.J)(i))
                }
                static createProgramAddressSync(e, t) {
                    let r = o.Buffer.alloc(0);
                    e.forEach(function(e) {
                        if (e.length > L) throw TypeError("Max seed length exceeded");
                        r = o.Buffer.concat([r, v(e)])
                    }), r = o.Buffer.concat([r, t.toBuffer(), o.Buffer.from("ProgramDerivedAddress")]);
                    let i = (0, h.J)(r);
                    if (x(i)) throw Error("Invalid seeds, address must fall off the curve");
                    return new K(i)
                }
                static async createProgramAddress(e, t) {
                    return this.createProgramAddressSync(e, t)
                }
                static findProgramAddressSync(e, t) {
                    let r, i = 255;
                    for (; 0 != i;) {
                        try {
                            let s = e.concat(o.Buffer.from([i]));
                            r = this.createProgramAddressSync(s, t)
                        } catch (e) {
                            if (e instanceof TypeError) throw e;
                            i--;
                            continue
                        }
                        return [r, i]
                    }
                    throw Error("Unable to find a viable program address nonce")
                }
                static async findProgramAddress(e, t) {
                    return this.findProgramAddressSync(e, t)
                }
                static isOnCurve(e) {
                    return x(new K(e).toBytes())
                }
            }
            K.default = new K("11111111111111111111111111111111"), C.set(K, {
                kind: "struct",
                fields: [
                    ["_bn", "u256"]
                ]
            });
            class N {
                constructor(e) {
                    if (this._publicKey = void 0, this._secretKey = void 0, e) {
                        let t = v(e);
                        if (64 !== e.length) throw Error("bad secret key size");
                        this._publicKey = t.slice(32, 64), this._secretKey = t.slice(0, 32)
                    } else this._secretKey = v(_()), this._publicKey = v(R(this._secretKey))
                }
                get publicKey() {
                    return new K(this._publicKey)
                }
                get secretKey() {
                    return o.Buffer.concat([this._secretKey, this._publicKey], 64)
                }
            }
            let z = new K("BPFLoader1111111111111111111111111111111111"),
                U = 1232,
                q = 127,
                G = 64;
            class j extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e
                }
            }
            Object.defineProperty(j.prototype, "name", {
                value: "TransactionExpiredBlockheightExceededError"
            });
            class V extends Error {
                constructor(e, t) {
                    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e
                }
            }
            Object.defineProperty(V.prototype, "name", {
                value: "TransactionExpiredTimeoutError"
            });
            class M extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e
                }
            }
            Object.defineProperty(M.prototype, "name", {
                value: "TransactionExpiredNonceInvalidError"
            });
            class D {
                constructor(e, t) {
                    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t
                }
                keySegments() {
                    let e = [this.staticAccountKeys];
                    return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e
                }
                get(e) {
                    for (let t of this.keySegments()) {
                        if (e < t.length) return t[e];
                        e -= t.length
                    }
                }
                get length() {
                    return this.keySegments().flat().length
                }
                compileInstructions(e) {
                    if (this.length > 256) throw Error("Account index overflow encountered during compilation");
                    let t = new Map;
                    this.keySegments().flat().forEach((e, r) => {
                        t.set(e.toBase58(), r)
                    });
                    let r = e => {
                        let r = t.get(e.toBase58());
                        if (void 0 === r) throw Error("Encountered an unknown instruction account key during compilation");
                        return r
                    };
                    return e.map(e => ({
                        programIdIndex: r(e.programId),
                        accountKeyIndexes: e.keys.map(e => r(e.pubkey)),
                        data: e.data
                    }))
                }
            }
            let H = (e = "publicKey") => p.blob(32, e),
                F = (e = "signature") => p.blob(64, e),
                $ = (e = "string") => {
                    let t = p.struct([p.u32("length"), p.u32("lengthPadding"), p.blob(p.offset(p.u32(), -8), "chars")], e),
                        r = t.decode.bind(t),
                        i = t.encode.bind(t);
                    return t.decode = (e, t) => r(e, t).chars.toString(), t.encode = (e, t, r) => i({
                        chars: o.Buffer.from(e, "utf8")
                    }, t, r), t.alloc = e => p.u32().span + p.u32().span + o.Buffer.from(e, "utf8").length, t
                };

            function Z(e) {
                let t = 0,
                    r = 0;
                for (;;) {
                    let i = e.shift();
                    if (t |= (127 & i) << 7 * r, r += 1, (128 & i) == 0) break
                }
                return t
            }

            function X(e, t) {
                let r = t;
                for (;;) {
                    let t = 127 & r;
                    if (0 == (r >>= 7)) {
                        e.push(t);
                        break
                    }
                    t |= 128, e.push(t)
                }
            }

            function J(e, t) {
                if (!e) throw Error(t || "Assertion failed")
            }
            class Y {
                constructor(e, t) {
                    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t
                }
                static compile(e, t) {
                    let r = new Map,
                        i = e => {
                            let t = e.toBase58(),
                                i = r.get(t);
                            return void 0 === i && (i = {
                                isSigner: !1,
                                isWritable: !1,
                                isInvoked: !1
                            }, r.set(t, i)), i
                        },
                        s = i(t);
                    for (let t of (s.isSigner = !0, s.isWritable = !0, e))
                        for (let e of (i(t.programId).isInvoked = !0, t.keys)) {
                            let t = i(e.pubkey);
                            t.isSigner ||= e.isSigner, t.isWritable ||= e.isWritable
                        }
                    return new Y(t, r)
                }
                getMessageComponents() {
                    let e = [...this.keyMetaMap.entries()];
                    J(e.length <= 256, "Max static account keys length exceeded");
                    let t = e.filter(([, e]) => e.isSigner && e.isWritable),
                        r = e.filter(([, e]) => e.isSigner && !e.isWritable),
                        i = e.filter(([, e]) => !e.isSigner && e.isWritable),
                        s = e.filter(([, e]) => !e.isSigner && !e.isWritable),
                        n = {
                            numRequiredSignatures: t.length + r.length,
                            numReadonlySignedAccounts: r.length,
                            numReadonlyUnsignedAccounts: s.length
                        };
                    {
                        J(t.length > 0, "Expected at least one writable signer key");
                        let [e] = t[0];
                        J(e === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
                    }
                    return [n, [...t.map(([e]) => new K(e)), ...r.map(([e]) => new K(e)), ...i.map(([e]) => new K(e)), ...s.map(([e]) => new K(e))]]
                }
                extractTableLookup(e) {
                    let [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && e.isWritable), [i, s] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && !e.isWritable);
                    if (0 !== t.length || 0 !== i.length) return [{
                        accountKey: e.key,
                        writableIndexes: t,
                        readonlyIndexes: i
                    }, {
                        writable: r,
                        readonly: s
                    }]
                }
                drainKeysFoundInLookupTable(e, t) {
                    let r = [],
                        i = [];
                    for (let [s, n] of this.keyMetaMap.entries())
                        if (t(n)) {
                            let t = new K(s),
                                n = e.findIndex(e => e.equals(t));
                            n >= 0 && (J(n < 256, "Max lookup table index exceeded"), r.push(n), i.push(t), this.keyMetaMap.delete(s))
                        } return [r, i]
                }
            }
            class Q {
                constructor(e) {
                    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = e.header, this.accountKeys = e.accountKeys.map(e => new K(e)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach(e => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]))
                }
                get version() {
                    return "legacy"
                }
                get staticAccountKeys() {
                    return this.accountKeys
                }
                get compiledInstructions() {
                    return this.instructions.map(e => ({
                        programIdIndex: e.programIdIndex,
                        accountKeyIndexes: e.accounts,
                        data: d().decode(e.data)
                    }))
                }
                get addressTableLookups() {
                    return []
                }
                getAccountKeys() {
                    return new D(this.staticAccountKeys)
                }
                static compile(e) {
                    let [t, r] = Y.compile(e.instructions, e.payerKey).getMessageComponents(), i = new D(r).compileInstructions(e.instructions).map(e => ({
                        programIdIndex: e.programIdIndex,
                        accounts: e.accountKeyIndexes,
                        data: d().encode(e.data)
                    }));
                    return new Q({
                        header: t,
                        accountKeys: r,
                        recentBlockhash: e.recentBlockhash,
                        instructions: i
                    })
                }
                isAccountSigner(e) {
                    return e < this.header.numRequiredSignatures
                }
                isAccountWritable(e) {
                    let t = this.header.numRequiredSignatures;
                    if (!(e >= this.header.numRequiredSignatures)) return e < t - this.header.numReadonlySignedAccounts;
                    {
                        let r = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
                        return e - t < r
                    }
                }
                isProgramId(e) {
                    return this.indexToProgramIds.has(e)
                }
                programIds() {
                    return [...this.indexToProgramIds.values()]
                }
                nonProgramIds() {
                    return this.accountKeys.filter((e, t) => !this.isProgramId(t))
                }
                serialize() {
                    let e = this.accountKeys.length,
                        t = [];
                    X(t, e);
                    let r = this.instructions.map(e => {
                            let {
                                accounts: t,
                                programIdIndex: r
                            } = e, i = Array.from(d().decode(e.data)), s = [];
                            X(s, t.length);
                            let n = [];
                            return X(n, i.length), {
                                programIdIndex: r,
                                keyIndicesCount: o.Buffer.from(s),
                                keyIndices: t,
                                dataLength: o.Buffer.from(n),
                                data: i
                            }
                        }),
                        i = [];
                    X(i, r.length);
                    let s = o.Buffer.alloc(U);
                    o.Buffer.from(i).copy(s);
                    let n = i.length;
                    r.forEach(e => {
                        let t = p.struct([p.u8("programIdIndex"), p.blob(e.keyIndicesCount.length, "keyIndicesCount"), p.seq(p.u8("keyIndex"), e.keyIndices.length, "keyIndices"), p.blob(e.dataLength.length, "dataLength"), p.seq(p.u8("userdatum"), e.data.length, "data")]).encode(e, s, n);
                        n += t
                    }), s = s.slice(0, n);
                    let a = p.struct([p.blob(1, "numRequiredSignatures"), p.blob(1, "numReadonlySignedAccounts"), p.blob(1, "numReadonlyUnsignedAccounts"), p.blob(t.length, "keyCount"), p.seq(H("key"), e, "keys"), H("recentBlockhash")]),
                        c = {
                            numRequiredSignatures: o.Buffer.from([this.header.numRequiredSignatures]),
                            numReadonlySignedAccounts: o.Buffer.from([this.header.numReadonlySignedAccounts]),
                            numReadonlyUnsignedAccounts: o.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                            keyCount: o.Buffer.from(t),
                            keys: this.accountKeys.map(e => v(e.toBytes())),
                            recentBlockhash: d().decode(this.recentBlockhash)
                        },
                        u = o.Buffer.alloc(2048),
                        l = a.encode(c, u);
                    return s.copy(u, l), u.slice(0, l + s.length)
                }
                static from(e) {
                    let t = [...e],
                        r = t.shift();
                    if (r !== (r & q)) throw Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
                    let i = t.shift(),
                        s = t.shift(),
                        n = Z(t),
                        a = [];
                    for (let e = 0; e < n; e++) {
                        let e = t.slice(0, O);
                        t = t.slice(O), a.push(new K(o.Buffer.from(e)))
                    }
                    let c = t.slice(0, O),
                        u = Z(t = t.slice(O)),
                        l = [];
                    for (let e = 0; e < u; e++) {
                        let e = t.shift(),
                            r = Z(t),
                            i = t.slice(0, r),
                            s = Z(t = t.slice(r)),
                            n = t.slice(0, s),
                            a = d().encode(o.Buffer.from(n));
                        t = t.slice(s), l.push({
                            programIdIndex: e,
                            accounts: i,
                            data: a
                        })
                    }
                    return new Q({
                        header: {
                            numRequiredSignatures: r,
                            numReadonlySignedAccounts: i,
                            numReadonlyUnsignedAccounts: s
                        },
                        recentBlockhash: d().encode(o.Buffer.from(c)),
                        accountKeys: a,
                        instructions: l
                    })
                }
            }
            class ee {
                constructor(e) {
                    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups
                }
                get version() {
                    return 0
                }
                get numAccountKeysFromLookups() {
                    let e = 0;
                    for (let t of this.addressTableLookups) e += t.readonlyIndexes.length + t.writableIndexes.length;
                    return e
                }
                getAccountKeys(e) {
                    let t;
                    if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
                        if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                        t = e.accountKeysFromLookups
                    } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
                    else if (this.addressTableLookups.length > 0) throw Error("Failed to get account keys because address table lookups were not resolved");
                    return new D(this.staticAccountKeys, t)
                }
                isAccountSigner(e) {
                    return e < this.header.numRequiredSignatures
                }
                isAccountWritable(e) {
                    let t = this.header.numRequiredSignatures,
                        r = this.staticAccountKeys.length;
                    if (e >= r) return e - r < this.addressTableLookups.reduce((e, t) => e + t.writableIndexes.length, 0);
                    if (!(e >= this.header.numRequiredSignatures)) return e < t - this.header.numReadonlySignedAccounts;
                    {
                        let i = r - t - this.header.numReadonlyUnsignedAccounts;
                        return e - t < i
                    }
                }
                resolveAddressTableLookups(e) {
                    let t = {
                        writable: [],
                        readonly: []
                    };
                    for (let r of this.addressTableLookups) {
                        let i = e.find(e => e.key.equals(r.accountKey));
                        if (!i) throw Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
                        for (let e of r.writableIndexes)
                            if (e < i.state.addresses.length) t.writable.push(i.state.addresses[e]);
                            else throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`);
                        for (let e of r.readonlyIndexes)
                            if (e < i.state.addresses.length) t.readonly.push(i.state.addresses[e]);
                            else throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`)
                    }
                    return t
                }
                static compile(e) {
                    let t = Y.compile(e.instructions, e.payerKey),
                        r = [],
                        i = {
                            writable: [],
                            readonly: []
                        };
                    for (let s of e.addressLookupTableAccounts || []) {
                        let e = t.extractTableLookup(s);
                        if (void 0 !== e) {
                            let [t, {
                                writable: s,
                                readonly: n
                            }] = e;
                            r.push(t), i.writable.push(...s), i.readonly.push(...n)
                        }
                    }
                    let [s, n] = t.getMessageComponents(), o = new D(n, i).compileInstructions(e.instructions);
                    return new ee({
                        header: s,
                        staticAccountKeys: n,
                        recentBlockhash: e.recentBlockhash,
                        compiledInstructions: o,
                        addressTableLookups: r
                    })
                }
                serialize() {
                    let e = [];
                    X(e, this.staticAccountKeys.length);
                    let t = this.serializeInstructions(),
                        r = [];
                    X(r, this.compiledInstructions.length);
                    let i = this.serializeAddressTableLookups(),
                        s = [];
                    X(s, this.addressTableLookups.length);
                    let n = p.struct([p.u8("prefix"), p.struct([p.u8("numRequiredSignatures"), p.u8("numReadonlySignedAccounts"), p.u8("numReadonlyUnsignedAccounts")], "header"), p.blob(e.length, "staticAccountKeysLength"), p.seq(H(), this.staticAccountKeys.length, "staticAccountKeys"), H("recentBlockhash"), p.blob(r.length, "instructionsLength"), p.blob(t.length, "serializedInstructions"), p.blob(s.length, "addressTableLookupsLength"), p.blob(i.length, "serializedAddressTableLookups")]),
                        o = new Uint8Array(U),
                        a = n.encode({
                            prefix: 128,
                            header: this.header,
                            staticAccountKeysLength: new Uint8Array(e),
                            staticAccountKeys: this.staticAccountKeys.map(e => e.toBytes()),
                            recentBlockhash: d().decode(this.recentBlockhash),
                            instructionsLength: new Uint8Array(r),
                            serializedInstructions: t,
                            addressTableLookupsLength: new Uint8Array(s),
                            serializedAddressTableLookups: i
                        }, o);
                    return o.slice(0, a)
                }
                serializeInstructions() {
                    let e = 0,
                        t = new Uint8Array(U);
                    for (let r of this.compiledInstructions) {
                        let i = [];
                        X(i, r.accountKeyIndexes.length);
                        let s = [];
                        X(s, r.data.length);
                        let n = p.struct([p.u8("programIdIndex"), p.blob(i.length, "encodedAccountKeyIndexesLength"), p.seq(p.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"), p.blob(s.length, "encodedDataLength"), p.blob(r.data.length, "data")]);
                        e += n.encode({
                            programIdIndex: r.programIdIndex,
                            encodedAccountKeyIndexesLength: new Uint8Array(i),
                            accountKeyIndexes: r.accountKeyIndexes,
                            encodedDataLength: new Uint8Array(s),
                            data: r.data
                        }, t, e)
                    }
                    return t.slice(0, e)
                }
                serializeAddressTableLookups() {
                    let e = 0,
                        t = new Uint8Array(U);
                    for (let r of this.addressTableLookups) {
                        let i = [];
                        X(i, r.writableIndexes.length);
                        let s = [];
                        X(s, r.readonlyIndexes.length);
                        let n = p.struct([H("accountKey"), p.blob(i.length, "encodedWritableIndexesLength"), p.seq(p.u8(), r.writableIndexes.length, "writableIndexes"), p.blob(s.length, "encodedReadonlyIndexesLength"), p.seq(p.u8(), r.readonlyIndexes.length, "readonlyIndexes")]);
                        e += n.encode({
                            accountKey: r.accountKey.toBytes(),
                            encodedWritableIndexesLength: new Uint8Array(i),
                            writableIndexes: r.writableIndexes,
                            encodedReadonlyIndexesLength: new Uint8Array(s),
                            readonlyIndexes: r.readonlyIndexes
                        }, t, e)
                    }
                    return t.slice(0, e)
                }
                static deserialize(e) {
                    let t = [...e],
                        r = t.shift(),
                        i = r & q;
                    J(r !== i, "Expected versioned message but received legacy message"), J(0 === i, `Expected versioned message with version 0 but found version ${i}`);
                    let s = {
                            numRequiredSignatures: t.shift(),
                            numReadonlySignedAccounts: t.shift(),
                            numReadonlyUnsignedAccounts: t.shift()
                        },
                        n = [],
                        o = Z(t);
                    for (let e = 0; e < o; e++) n.push(new K(t.splice(0, O)));
                    let a = d().encode(t.splice(0, O)),
                        c = Z(t),
                        u = [];
                    for (let e = 0; e < c; e++) {
                        let e = t.shift(),
                            r = Z(t),
                            i = t.splice(0, r),
                            s = Z(t),
                            n = new Uint8Array(t.splice(0, s));
                        u.push({
                            programIdIndex: e,
                            accountKeyIndexes: i,
                            data: n
                        })
                    }
                    let l = Z(t),
                        h = [];
                    for (let e = 0; e < l; e++) {
                        let e = new K(t.splice(0, O)),
                            r = Z(t),
                            i = t.splice(0, r),
                            s = Z(t),
                            n = t.splice(0, s);
                        h.push({
                            accountKey: e,
                            writableIndexes: i,
                            readonlyIndexes: n
                        })
                    }
                    return new ee({
                        header: s,
                        staticAccountKeys: n,
                        recentBlockhash: a,
                        compiledInstructions: u,
                        addressTableLookups: h
                    })
                }
            }
            let et = {
                    deserializeMessageVersion(e) {
                        let t = e[0],
                            r = t & q;
                        return r === t ? "legacy" : r
                    },
                    deserialize: e => {
                        let t = et.deserializeMessageVersion(e);
                        if ("legacy" === t) return Q.from(e);
                        if (0 === t) return ee.deserialize(e);
                        throw Error(`Transaction message version ${t} deserialization is not supported`)
                    }
                },
                er = ((s = {})[s.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", s[s.PROCESSED = 1] = "PROCESSED", s[s.TIMED_OUT = 2] = "TIMED_OUT", s[s.NONCE_INVALID = 3] = "NONCE_INVALID", s),
                ei = o.Buffer.alloc(G).fill(0);
            class es {
                constructor(e) {
                    this.keys = void 0, this.programId = void 0, this.data = o.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data)
                }
                toJSON() {
                    return {
                        keys: this.keys.map(({
                            pubkey: e,
                            isSigner: t,
                            isWritable: r
                        }) => ({
                            pubkey: e.toJSON(),
                            isSigner: t,
                            isWritable: r
                        })),
                        programId: this.programId.toJSON(),
                        data: [...this.data]
                    }
                }
            }
            class en {
                get signature() {
                    return this.signatures.length > 0 ? this.signatures[0].signature : null
                }
                constructor(e) {
                    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !e) return;
                    if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                        let {
                            minContextSlot: t,
                            nonceInfo: r
                        } = e;
                        this.minNonceContextSlot = t, this.nonceInfo = r
                    } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
                        let {
                            blockhash: t,
                            lastValidBlockHeight: r
                        } = e;
                        this.recentBlockhash = t, this.lastValidBlockHeight = r
                    } else {
                        let {
                            recentBlockhash: t,
                            nonceInfo: r
                        } = e;
                        r && (this.nonceInfo = r), this.recentBlockhash = t
                    }
                }
                toJSON() {
                    return {
                        recentBlockhash: this.recentBlockhash || null,
                        feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                        nonceInfo: this.nonceInfo ? {
                            nonce: this.nonceInfo.nonce,
                            nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                        } : null,
                        instructions: this.instructions.map(e => e.toJSON()),
                        signers: this.signatures.map(({
                            publicKey: e
                        }) => e.toJSON())
                    }
                }
                add(...e) {
                    if (0 === e.length) throw Error("No instructions");
                    return e.forEach(e => {
                        "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new es(e))
                    }), this
                }
                compileMessage() {
                    let e, t, r;
                    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
                    if (this.nonceInfo ? (e = this.nonceInfo.nonce, t = this.instructions[0] != this.nonceInfo.nonceInstruction ? [this.nonceInfo.nonceInstruction, ...this.instructions] : this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e) throw Error("Transaction recentBlockhash required");
                    if (t.length < 1 && console.warn("No instructions provided"), this.feePayer) r = this.feePayer;
                    else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
                    else throw Error("Transaction fee payer required");
                    for (let e = 0; e < t.length; e++)
                        if (void 0 === t[e].programId) throw Error(`Transaction instruction index ${e} has undefined program id`);
                    let i = [],
                        s = [];
                    t.forEach(e => {
                        e.keys.forEach(e => {
                            s.push({
                                ...e
                            })
                        });
                        let t = e.programId.toString();
                        i.includes(t) || i.push(t)
                    }), i.forEach(e => {
                        s.push({
                            pubkey: new K(e),
                            isSigner: !1,
                            isWritable: !1
                        })
                    });
                    let n = [];
                    s.forEach(e => {
                        let t = e.pubkey.toString(),
                            r = n.findIndex(e => e.pubkey.toString() === t);
                        r > -1 ? (n[r].isWritable = n[r].isWritable || e.isWritable, n[r].isSigner = n[r].isSigner || e.isSigner) : n.push(e)
                    }), n.sort(function(e, t) {
                        return e.isSigner !== t.isSigner ? e.isSigner ? -1 : 1 : e.isWritable !== t.isWritable ? e.isWritable ? -1 : 1 : e.pubkey.toBase58().localeCompare(t.pubkey.toBase58(), "en", {
                            localeMatcher: "best fit",
                            usage: "sort",
                            sensitivity: "variant",
                            ignorePunctuation: !1,
                            numeric: !1,
                            caseFirst: "lower"
                        })
                    });
                    let o = n.findIndex(e => e.pubkey.equals(r));
                    if (o > -1) {
                        let [e] = n.splice(o, 1);
                        e.isSigner = !0, e.isWritable = !0, n.unshift(e)
                    } else n.unshift({
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !0
                    });
                    for (let e of this.signatures) {
                        let t = n.findIndex(t => t.pubkey.equals(e.publicKey));
                        if (t > -1) n[t].isSigner || (n[t].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                        else throw Error(`unknown signer: ${e.publicKey.toString()}`)
                    }
                    let a = 0,
                        c = 0,
                        u = 0,
                        l = [],
                        h = [];
                    n.forEach(({
                        pubkey: e,
                        isSigner: t,
                        isWritable: r
                    }) => {
                        t ? (l.push(e.toString()), a += 1, r || (c += 1)) : (h.push(e.toString()), r || (u += 1))
                    });
                    let g = l.concat(h),
                        p = t.map(e => {
                            let {
                                data: t,
                                programId: r
                            } = e;
                            return {
                                programIdIndex: g.indexOf(r.toString()),
                                accounts: e.keys.map(e => g.indexOf(e.pubkey.toString())),
                                data: d().encode(t)
                            }
                        });
                    return p.forEach(e => {
                        J(e.programIdIndex >= 0), e.accounts.forEach(e => J(e >= 0))
                    }), new Q({
                        header: {
                            numRequiredSignatures: a,
                            numReadonlySignedAccounts: c,
                            numReadonlyUnsignedAccounts: u
                        },
                        accountKeys: g,
                        recentBlockhash: e,
                        instructions: p
                    })
                }
                _compile() {
                    let e = this.compileMessage(),
                        t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
                    return this.signatures.length === t.length && this.signatures.every((e, r) => t[r].equals(e.publicKey)) || (this.signatures = t.map(e => ({
                        signature: null,
                        publicKey: e
                    }))), e
                }
                serializeMessage() {
                    return this._compile().serialize()
                }
                async getEstimatedFee(e) {
                    return (await e.getFeeForMessage(this.compileMessage())).value
                }
                setSigners(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set;
                    this.signatures = e.filter(e => {
                        let r = e.toString();
                        return !t.has(r) && (t.add(r), !0)
                    }).map(e => ({
                        signature: null,
                        publicKey: e
                    }))
                }
                sign(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set,
                        r = [];
                    for (let i of e) {
                        let e = i.publicKey.toString();
                        t.has(e) || (t.add(e), r.push(i))
                    }
                    this.signatures = r.map(e => ({
                        signature: null,
                        publicKey: e.publicKey
                    }));
                    let i = this._compile();
                    this._partialSign(i, ...r)
                }
                partialSign(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set,
                        r = [];
                    for (let i of e) {
                        let e = i.publicKey.toString();
                        t.has(e) || (t.add(e), r.push(i))
                    }
                    let i = this._compile();
                    this._partialSign(i, ...r)
                }
                _partialSign(e, ...t) {
                    let r = e.serialize();
                    t.forEach(e => {
                        let t = P(r, e.secretKey);
                        this._addSignature(e.publicKey, v(t))
                    })
                }
                addSignature(e, t) {
                    this._compile(), this._addSignature(e, t)
                }
                _addSignature(e, t) {
                    J(64 === t.length);
                    let r = this.signatures.findIndex(t => e.equals(t.publicKey));
                    if (r < 0) throw Error(`unknown signer: ${e.toString()}`);
                    this.signatures[r].signature = o.Buffer.from(t)
                }
                verifySignatures(e = !0) {
                    return !this._getMessageSignednessErrors(this.serializeMessage(), e)
                }
                _getMessageSignednessErrors(e, t) {
                    let r = {};
                    for (let {
                            signature: i,
                            publicKey: s
                        }
                        of this.signatures) null === i ? t && (r.missing ||= []).push(s) : E(i, e, s.toBytes()) || (r.invalid ||= []).push(s);
                    return r.invalid || r.missing ? r : void 0
                }
                serialize(e) {
                    let {
                        requireAllSignatures: t,
                        verifySignatures: r
                    } = Object.assign({
                        requireAllSignatures: !0,
                        verifySignatures: !0
                    }, e), i = this.serializeMessage();
                    if (r) {
                        let e = this._getMessageSignednessErrors(i, t);
                        if (e) {
                            let t = "Signature verification failed.";
                            throw e.invalid && (t += `
Invalid signature for public key${1===e.invalid.length?"":"(s)"} [\`${e.invalid.map(e=>e.toBase58()).join("`, `")}\`].`), e.missing && (t += `
Missing signature for public key${1===e.missing.length?"":"(s)"} [\`${e.missing.map(e=>e.toBase58()).join("`, `")}\`].`), Error(t)
                        }
                    }
                    return this._serialize(i)
                }
                _serialize(e) {
                    let {
                        signatures: t
                    } = this, r = [];
                    X(r, t.length);
                    let i = r.length + 64 * t.length + e.length,
                        s = o.Buffer.alloc(i);
                    return J(t.length < 256), o.Buffer.from(r).copy(s, 0), t.forEach(({
                        signature: e
                    }, t) => {
                        null !== e && (J(64 === e.length, "signature has invalid length"), o.Buffer.from(e).copy(s, r.length + 64 * t))
                    }), e.copy(s, r.length + 64 * t.length), J(s.length <= U, `Transaction too large: ${s.length} > ${U}`), s
                }
                get keys() {
                    return J(1 === this.instructions.length), this.instructions[0].keys.map(e => e.pubkey)
                }
                get programId() {
                    return J(1 === this.instructions.length), this.instructions[0].programId
                }
                get data() {
                    return J(1 === this.instructions.length), this.instructions[0].data
                }
                static from(e) {
                    let t = [...e],
                        r = Z(t),
                        i = [];
                    for (let e = 0; e < r; e++) {
                        let e = t.slice(0, G);
                        t = t.slice(G), i.push(d().encode(o.Buffer.from(e)))
                    }
                    return en.populate(Q.from(t), i)
                }
                static populate(e, t = []) {
                    let r = new en;
                    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((t, i) => {
                        let s = {
                            signature: t == d().encode(ei) ? null : d().decode(t),
                            publicKey: e.accountKeys[i]
                        };
                        r.signatures.push(s)
                    }), e.instructions.forEach(t => {
                        let i = t.accounts.map(t => {
                            let i = e.accountKeys[t];
                            return {
                                pubkey: i,
                                isSigner: r.signatures.some(e => e.publicKey.toString() === i.toString()) || e.isAccountSigner(t),
                                isWritable: e.isAccountWritable(t)
                            }
                        });
                        r.instructions.push(new es({
                            keys: i,
                            programId: e.accountKeys[t.programIdIndex],
                            data: d().decode(t.data)
                        }))
                    }), r._message = e, r._json = r.toJSON(), r
                }
            }
            class eo {
                constructor(e) {
                    this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash
                }
                static decompile(e, t) {
                    let {
                        header: r,
                        compiledInstructions: i,
                        recentBlockhash: s
                    } = e, {
                        numRequiredSignatures: n,
                        numReadonlySignedAccounts: o,
                        numReadonlyUnsignedAccounts: a
                    } = r, c = n - o;
                    J(c > 0, "Message header is invalid");
                    let u = e.staticAccountKeys.length - n - a;
                    J(u >= 0, "Message header is invalid");
                    let l = e.getAccountKeys(t),
                        d = l.get(0);
                    if (void 0 === d) throw Error("Failed to decompile message because no account keys were found");
                    let h = [];
                    for (let e of i) {
                        let t = [];
                        for (let i of e.accountKeyIndexes) {
                            let e;
                            let s = l.get(i);
                            if (void 0 === s) throw Error(`Failed to find key for account key index ${i}`);
                            e = i < n ? i < c : i < l.staticAccountKeys.length ? i - n < u : i - l.staticAccountKeys.length < l.accountKeysFromLookups.writable.length, t.push({
                                pubkey: s,
                                isSigner: i < r.numRequiredSignatures,
                                isWritable: e
                            })
                        }
                        let i = l.get(e.programIdIndex);
                        if (void 0 === i) throw Error(`Failed to find program id for program id index ${e.programIdIndex}`);
                        h.push(new es({
                            programId: i,
                            data: v(e.data),
                            keys: t
                        }))
                    }
                    return new eo({
                        payerKey: d,
                        instructions: h,
                        recentBlockhash: s
                    })
                }
                compileToLegacyMessage() {
                    return Q.compile({
                        payerKey: this.payerKey,
                        recentBlockhash: this.recentBlockhash,
                        instructions: this.instructions
                    })
                }
                compileToV0Message(e) {
                    return ee.compile({
                        payerKey: this.payerKey,
                        recentBlockhash: this.recentBlockhash,
                        instructions: this.instructions,
                        addressLookupTableAccounts: e
                    })
                }
            }
            class ea {
                get version() {
                    return this.message.version
                }
                constructor(e, t) {
                    if (this.signatures = void 0, this.message = void 0, void 0 !== t) J(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = t;
                    else {
                        let t = [];
                        for (let r = 0; r < e.header.numRequiredSignatures; r++) t.push(new Uint8Array(G));
                        this.signatures = t
                    }
                    this.message = e
                }
                serialize() {
                    let e = this.message.serialize(),
                        t = [];
                    X(t, this.signatures.length);
                    let r = p.struct([p.blob(t.length, "encodedSignaturesLength"), p.seq(F(), this.signatures.length, "signatures"), p.blob(e.length, "serializedMessage")]),
                        i = new Uint8Array(2048),
                        s = r.encode({
                            encodedSignaturesLength: new Uint8Array(t),
                            signatures: this.signatures,
                            serializedMessage: e
                        }, i);
                    return i.slice(0, s)
                }
                static deserialize(e) {
                    let t = [...e],
                        r = [],
                        i = Z(t);
                    for (let e = 0; e < i; e++) r.push(new Uint8Array(t.splice(0, G)));
                    return new ea(et.deserialize(new Uint8Array(t)), r)
                }
                sign(e) {
                    let t = this.message.serialize(),
                        r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
                    for (let i of e) {
                        let e = r.findIndex(e => e.equals(i.publicKey));
                        J(e >= 0, `Cannot sign with non signer key ${i.publicKey.toBase58()}`), this.signatures[e] = P(t, i.secretKey)
                    }
                }
                addSignature(e, t) {
                    J(64 === t.byteLength, "Signature must be 64 bytes long");
                    let r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(t => t.equals(e));
                    J(r >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[r] = t
                }
            }
            let ec = new K("SysvarC1ock11111111111111111111111111111111"),
                eu = new K("SysvarEpochSchedu1e111111111111111111111111"),
                el = new K("Sysvar1nstructions1111111111111111111111111"),
                ed = new K("SysvarRecentB1ockHashes11111111111111111111"),
                eh = new K("SysvarRent111111111111111111111111111111111"),
                eg = new K("SysvarRewards111111111111111111111111111111"),
                ep = new K("SysvarS1otHashes111111111111111111111111111"),
                ey = new K("SysvarS1otHistory11111111111111111111111111"),
                eb = new K("SysvarStakeHistory1111111111111111111111111");
            async function em(e, t, r, i) {
                let s;
                let n = i && {
                        skipPreflight: i.skipPreflight,
                        preflightCommitment: i.preflightCommitment || i.commitment,
                        maxRetries: i.maxRetries,
                        minContextSlot: i.minContextSlot
                    },
                    o = await e.sendTransaction(t, r, n);
                if (null != t.recentBlockhash && null != t.lastValidBlockHeight) s = (await e.confirmTransaction({
                    abortSignal: i?.abortSignal,
                    signature: o,
                    blockhash: t.recentBlockhash,
                    lastValidBlockHeight: t.lastValidBlockHeight
                }, i && i.commitment)).value;
                else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
                    let {
                        nonceInstruction: r
                    } = t.nonceInfo, n = r.keys[0].pubkey;
                    s = (await e.confirmTransaction({
                        abortSignal: i?.abortSignal,
                        minContextSlot: t.minNonceContextSlot,
                        nonceAccountPubkey: n,
                        nonceValue: t.nonceInfo.nonce,
                        signature: o
                    }, i && i.commitment)).value
                } else i?.abortSignal != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), s = (await e.confirmTransaction(o, i && i.commitment)).value;
                if (s.err) throw Error(`Transaction ${o} failed (${JSON.stringify(s)})`);
                return o
            }

            function ef(e) {
                return new Promise(t => setTimeout(t, e))
            }

            function ek(e, t) {
                let r = e.layout.span >= 0 ? e.layout.span : function e(t, r) {
                        let i = t => {
                                if (t.span >= 0) return t.span;
                                if ("function" == typeof t.alloc) return t.alloc(r[t.property]);
                                if ("count" in t && "elementLayout" in t) {
                                    let e = r[t.property];
                                    if (Array.isArray(e)) return e.length * i(t.elementLayout)
                                } else if ("fields" in t) return e({
                                    layout: t
                                }, r[t.property]);
                                return 0
                            },
                            s = 0;
                        return t.layout.fields.forEach(e => {
                            s += i(e)
                        }), s
                    }(e, t),
                    i = o.Buffer.alloc(r),
                    s = Object.assign({
                        instruction: e.index
                    }, t);
                return e.layout.encode(s, i), i
            }

            function eS(e, t) {
                let r;
                try {
                    r = e.layout.decode(t)
                } catch (e) {
                    throw Error("invalid instruction; " + e)
                }
                if (r.instruction !== e.index) throw Error(`invalid instruction; instruction index mismatch ${r.instruction} != ${e.index}`);
                return r
            }
            let ew = p.nu64("lamportsPerSignature"),
                eI = p.struct([p.u32("version"), p.u32("state"), H("authorizedPubkey"), H("nonce"), p.struct([ew], "feeCalculator")]),
                e_ = eI.span;
            class eA {
                constructor(e) {
                    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator
                }
                static fromAccountData(e) {
                    let t = eI.decode(v(e), 0);
                    return new eA({
                        authorizedPubkey: new K(t.authorizedPubkey),
                        nonce: new K(t.nonce).toString(),
                        feeCalculator: t.feeCalculator
                    })
                }
            }
            let eR = e => ({
                    decode: e.decode.bind(e),
                    encode: e.encode.bind(e)
                }),
                ex = e => {
                    let t = (0, p.blob)(8, e),
                        {
                            encode: r,
                            decode: i
                        } = eR(t);
                    return t.decode = (e, t) => {
                        let r = i(e, t);
                        return (0, y.toBigIntLE)(o.Buffer.from(r))
                    }, t.encode = (e, t, i) => r((0, y.toBufferLE)(e, 8), t, i), t
                };
            class eP {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = p.u32("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(eE))
                        if (i.index == r) {
                            t = e;
                            break
                        } if (!t) throw Error("Instruction type incorrect; not a SystemInstruction");
                    return t
                }
                static decodeCreateAccount(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        lamports: t,
                        space: r,
                        programId: i
                    } = eS(eE.Create, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        newAccountPubkey: e.keys[1].pubkey,
                        lamports: t,
                        space: r,
                        programId: new K(i)
                    }
                }
                static decodeTransfer(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        lamports: t
                    } = eS(eE.Transfer, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        toPubkey: e.keys[1].pubkey,
                        lamports: t
                    }
                }
                static decodeTransferWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        lamports: t,
                        seed: r,
                        programId: i
                    } = eS(eE.TransferWithSeed, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        basePubkey: e.keys[1].pubkey,
                        toPubkey: e.keys[2].pubkey,
                        lamports: t,
                        seed: r,
                        programId: new K(i)
                    }
                }
                static decodeAllocate(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        space: t
                    } = eS(eE.Allocate, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        space: t
                    }
                }
                static decodeAllocateWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        base: t,
                        seed: r,
                        space: i,
                        programId: s
                    } = eS(eE.AllocateWithSeed, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        basePubkey: new K(t),
                        seed: r,
                        space: i,
                        programId: new K(s)
                    }
                }
                static decodeAssign(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        programId: t
                    } = eS(eE.Assign, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        programId: new K(t)
                    }
                }
                static decodeAssignWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        base: t,
                        seed: r,
                        programId: i
                    } = eS(eE.AssignWithSeed, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        basePubkey: new K(t),
                        seed: r,
                        programId: new K(i)
                    }
                }
                static decodeCreateWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        base: t,
                        seed: r,
                        lamports: i,
                        space: s,
                        programId: n
                    } = eS(eE.CreateWithSeed, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        newAccountPubkey: e.keys[1].pubkey,
                        basePubkey: new K(t),
                        seed: r,
                        lamports: i,
                        space: s,
                        programId: new K(n)
                    }
                }
                static decodeNonceInitialize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        authorized: t
                    } = eS(eE.InitializeNonceAccount, e.data);
                    return {
                        noncePubkey: e.keys[0].pubkey,
                        authorizedPubkey: new K(t)
                    }
                }
                static decodeNonceAdvance(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), eS(eE.AdvanceNonceAccount, e.data), {
                        noncePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey
                    }
                }
                static decodeNonceWithdraw(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
                    let {
                        lamports: t
                    } = eS(eE.WithdrawNonceAccount, e.data);
                    return {
                        noncePubkey: e.keys[0].pubkey,
                        toPubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[4].pubkey,
                        lamports: t
                    }
                }
                static decodeNonceAuthorize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        authorized: t
                    } = eS(eE.AuthorizeNonceAccount, e.data);
                    return {
                        noncePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[1].pubkey,
                        newAuthorizedPubkey: new K(t)
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(ev.programId)) throw Error("invalid instruction; programId is not SystemProgram")
                }
                static checkKeyLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            let eE = Object.freeze({
                Create: {
                    index: 0,
                    layout: p.struct([p.u32("instruction"), p.ns64("lamports"), p.ns64("space"), H("programId")])
                },
                Assign: {
                    index: 1,
                    layout: p.struct([p.u32("instruction"), H("programId")])
                },
                Transfer: {
                    index: 2,
                    layout: p.struct([p.u32("instruction"), ex("lamports")])
                },
                CreateWithSeed: {
                    index: 3,
                    layout: p.struct([p.u32("instruction"), H("base"), $("seed"), p.ns64("lamports"), p.ns64("space"), H("programId")])
                },
                AdvanceNonceAccount: {
                    index: 4,
                    layout: p.struct([p.u32("instruction")])
                },
                WithdrawNonceAccount: {
                    index: 5,
                    layout: p.struct([p.u32("instruction"), p.ns64("lamports")])
                },
                InitializeNonceAccount: {
                    index: 6,
                    layout: p.struct([p.u32("instruction"), H("authorized")])
                },
                AuthorizeNonceAccount: {
                    index: 7,
                    layout: p.struct([p.u32("instruction"), H("authorized")])
                },
                Allocate: {
                    index: 8,
                    layout: p.struct([p.u32("instruction"), p.ns64("space")])
                },
                AllocateWithSeed: {
                    index: 9,
                    layout: p.struct([p.u32("instruction"), H("base"), $("seed"), p.ns64("space"), H("programId")])
                },
                AssignWithSeed: {
                    index: 10,
                    layout: p.struct([p.u32("instruction"), H("base"), $("seed"), H("programId")])
                },
                TransferWithSeed: {
                    index: 11,
                    layout: p.struct([p.u32("instruction"), ex("lamports"), $("seed"), H("programId")])
                },
                UpgradeNonceAccount: {
                    index: 12,
                    layout: p.struct([p.u32("instruction")])
                }
            });
            class ev {
                constructor() {}
                static createAccount(e) {
                    let t = ek(eE.Create, {
                        lamports: e.lamports,
                        space: e.space,
                        programId: v(e.programId.toBuffer())
                    });
                    return new es({
                        keys: [{
                            pubkey: e.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: e.newAccountPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static transfer(e) {
                    let t, r;
                    return "basePubkey" in e ? (t = ek(eE.TransferWithSeed, {
                        lamports: BigInt(e.lamports),
                        seed: e.seed,
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.fromPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: e.toPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }]) : (t = ek(eE.Transfer, {
                        lamports: BigInt(e.lamports)
                    }), r = [{
                        pubkey: e.fromPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: e.toPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }]), new es({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static assign(e) {
                    let t, r;
                    return "basePubkey" in e ? (t = ek(eE.AssignWithSeed, {
                        base: v(e.basePubkey.toBuffer()),
                        seed: e.seed,
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }]) : (t = ek(eE.Assign, {
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }]), new es({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static createAccountWithSeed(e) {
                    let t = ek(eE.CreateWithSeed, {
                            base: v(e.basePubkey.toBuffer()),
                            seed: e.seed,
                            lamports: e.lamports,
                            space: e.space,
                            programId: v(e.programId.toBuffer())
                        }),
                        r = [{
                            pubkey: e.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: e.newAccountPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }];
                    return e.basePubkey != e.fromPubkey && r.push({
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }), new es({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static createNonceAccount(e) {
                    let t = new en;
                    "basePubkey" in e && "seed" in e ? t.add(ev.createAccountWithSeed({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.noncePubkey,
                        basePubkey: e.basePubkey,
                        seed: e.seed,
                        lamports: e.lamports,
                        space: e_,
                        programId: this.programId
                    })) : t.add(ev.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.noncePubkey,
                        lamports: e.lamports,
                        space: e_,
                        programId: this.programId
                    }));
                    let r = {
                        noncePubkey: e.noncePubkey,
                        authorizedPubkey: e.authorizedPubkey
                    };
                    return t.add(this.nonceInitialize(r)), t
                }
                static nonceInitialize(e) {
                    let t = ek(eE.InitializeNonceAccount, {
                        authorized: v(e.authorizedPubkey.toBuffer())
                    });
                    return new es({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ed,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: eh,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static nonceAdvance(e) {
                    let t = ek(eE.AdvanceNonceAccount);
                    return new es({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ed,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static nonceWithdraw(e) {
                    let t = ek(eE.WithdrawNonceAccount, {
                        lamports: e.lamports
                    });
                    return new es({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.toPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ed,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: eh,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static nonceAuthorize(e) {
                    let t = ek(eE.AuthorizeNonceAccount, {
                        authorized: v(e.newAuthorizedPubkey.toBuffer())
                    });
                    return new es({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static allocate(e) {
                    let t, r;
                    return "basePubkey" in e ? (t = ek(eE.AllocateWithSeed, {
                        base: v(e.basePubkey.toBuffer()),
                        seed: e.seed,
                        space: e.space,
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }]) : (t = ek(eE.Allocate, {
                        space: e.space
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }]), new es({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
            }
            ev.programId = new K("11111111111111111111111111111111");
            let eB = U - 300;
            class eT {
                constructor() {}
                static getMinNumSignatures(e) {
                    return 2 * (Math.ceil(e / eT.chunkSize) + 1 + 1)
                }
                static async load(e, t, r, i, s) {
                    {
                        let n = await e.getMinimumBalanceForRentExemption(s.length),
                            o = await e.getAccountInfo(r.publicKey, "confirmed"),
                            a = null;
                        if (null !== o) {
                            if (o.executable) return console.error("Program load failed, account is already executable"), !1;
                            o.data.length !== s.length && (a = a || new en).add(ev.allocate({
                                accountPubkey: r.publicKey,
                                space: s.length
                            })), o.owner.equals(i) || (a = a || new en).add(ev.assign({
                                accountPubkey: r.publicKey,
                                programId: i
                            })), o.lamports < n && (a = a || new en).add(ev.transfer({
                                fromPubkey: t.publicKey,
                                toPubkey: r.publicKey,
                                lamports: n - o.lamports
                            }))
                        } else a = new en().add(ev.createAccount({
                            fromPubkey: t.publicKey,
                            newAccountPubkey: r.publicKey,
                            lamports: n > 0 ? n : 1,
                            space: s.length,
                            programId: i
                        }));
                        null !== a && await em(e, a, [t, r], {
                            commitment: "confirmed"
                        })
                    }
                    let n = p.struct([p.u32("instruction"), p.u32("offset"), p.u32("bytesLength"), p.u32("bytesLengthPadding"), p.seq(p.u8("byte"), p.offset(p.u32(), -8), "bytes")]),
                        a = eT.chunkSize,
                        c = 0,
                        u = s,
                        l = [];
                    for (; u.length > 0;) {
                        let s = u.slice(0, a),
                            d = o.Buffer.alloc(a + 16);
                        n.encode({
                            instruction: 0,
                            offset: c,
                            bytes: s,
                            bytesLength: 0,
                            bytesLengthPadding: 0
                        }, d);
                        let h = new en().add({
                            keys: [{
                                pubkey: r.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }],
                            programId: i,
                            data: d
                        });
                        l.push(em(e, h, [t, r], {
                            commitment: "confirmed"
                        })), e._rpcEndpoint.includes("solana.com") && await ef(250), c += a, u = u.slice(a)
                    }
                    await Promise.all(l);
                    {
                        let s = p.struct([p.u32("instruction")]),
                            n = o.Buffer.alloc(s.span);
                        s.encode({
                            instruction: 1
                        }, n);
                        let a = new en().add({
                                keys: [{
                                    pubkey: r.publicKey,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: eh,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                programId: i,
                                data: n
                            }),
                            c = "processed",
                            u = await e.sendTransaction(a, [t, r], {
                                preflightCommitment: c
                            }),
                            {
                                context: l,
                                value: d
                            } = await e.confirmTransaction({
                                signature: u,
                                lastValidBlockHeight: a.lastValidBlockHeight,
                                blockhash: a.recentBlockhash
                            }, c);
                        if (d.err) throw Error(`Transaction ${u} failed (${JSON.stringify(d)})`);
                        for (;;) {
                            try {
                                if (await e.getSlot({
                                        commitment: c
                                    }) > l.slot) break
                            } catch {}
                            await new Promise(e => setTimeout(e, Math.round(200)))
                        }
                    }
                    return !0
                }
            }
            eT.chunkSize = eB;
            let eC = new K("BPFLoader2111111111111111111111111111111111");
            class eL {
                static getMinNumSignatures(e) {
                    return eT.getMinNumSignatures(e)
                }
                static load(e, t, r, i, s) {
                    return eT.load(e, t, r, s, i)
                }
            }
            var eO = Object.prototype.toString,
                eW = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                },
                eK = (n = function(e) {
                    var t = function e(t, r) {
                        var i, s, n, o, a, c, u;
                        if (!0 === t) return "true";
                        if (!1 === t) return "false";
                        switch (typeof t) {
                            case "object":
                                if (null === t) return null;
                                if (t.toJSON && "function" == typeof t.toJSON) return e(t.toJSON(), r);
                                if ("[object Array]" === (u = eO.call(t))) {
                                    for (i = 0, n = "[", s = t.length - 1; i < s; i++) n += e(t[i], !0) + ",";
                                    return s > -1 && (n += e(t[i], !0)), n + "]"
                                }
                                if ("[object Object]" !== u) return JSON.stringify(t);
                                for (s = (o = eW(t).sort()).length, n = "", i = 0; i < s;) void 0 !== (c = e(t[a = o[i]], !1)) && (n && (n += ","), n += JSON.stringify(a) + ":" + c), i++;
                                return "{" + n + "}";
                            case "function":
                            case "undefined":
                                return r ? null : void 0;
                            case "string":
                                return JSON.stringify(t);
                            default:
                                return isFinite(t) ? t : null
                        }
                    }(e, !1);
                    if (void 0 !== t) return "" + t
                }).__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;

            function eN(e) {
                let t = 0;
                for (; e > 1;) e /= 2, t++;
                return t
            }
            class ez {
                constructor(e, t, r, i, s) {
                    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = i, this.firstNormalSlot = s
                }
                getEpoch(e) {
                    return this.getEpochAndSlotIndex(e)[0]
                }
                getEpochAndSlotIndex(e) {
                    if (e < this.firstNormalSlot) {
                        var t;
                        let r = eN(0 === (t = e + 32 + 1) ? 1 : (t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, (t |= t >> 32) + 1)) - eN(32) - 1,
                            i = this.getSlotsInEpoch(r);
                        return [r, e - (i - 32)]
                    } {
                        let t = e - this.firstNormalSlot,
                            r = Math.floor(t / this.slotsPerEpoch);
                        return [this.firstNormalEpoch + r, t % this.slotsPerEpoch]
                    }
                }
                getFirstSlotInEpoch(e) {
                    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * 32 : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
                }
                getLastSlotInEpoch(e) {
                    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
                }
                getSlotsInEpoch(e) {
                    return e < this.firstNormalEpoch ? Math.pow(2, e + eN(32)) : this.slotsPerEpoch
                }
            }
            class eU extends Error {
                constructor(e, t) {
                    super(e), this.logs = void 0, this.logs = t
                }
            }
            let eq = {
                JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
                JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
                JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
                JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
                JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
                JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
                JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
                JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
                JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
                JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
                JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
                JSON_RPC_SCAN_ERROR: -32012,
                JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
                JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
                JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
                JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
            };
            class eG extends Error {
                constructor({
                    code: e,
                    message: t,
                    data: r
                }, i) {
                    super(null != i ? `${i}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError"
                }
            }
            var ej = globalThis.fetch;
            class eV extends k.Z {
                constructor(e, t, r) {
                    super(e => {
                        let r = (0, S.Z)(e, {
                            autoconnect: !0,
                            max_reconnects: 5,
                            reconnect: !0,
                            reconnect_interval: 1e3,
                            ...t
                        });
                        return "socket" in r ? this.underlyingSocket = r.socket : this.underlyingSocket = r, r
                    }, e, t, r), this.underlyingSocket = void 0
                }
                call(...e) {
                    let t = this.underlyingSocket?.readyState;
                    return 1 === t ? super.call(...e) : Promise.reject(Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
                }
                notify(...e) {
                    let t = this.underlyingSocket?.readyState;
                    return 1 === t ? super.notify(...e) : Promise.reject(Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
                }
            }
            class eM {
                constructor(e) {
                    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state
                }
                isActive() {
                    let e = BigInt("0xffffffffffffffff");
                    return this.state.deactivationSlot === e
                }
                static deserialize(e) {
                    let t = function(e, t) {
                            let r;
                            try {
                                r = e.layout.decode(t)
                            } catch (e) {
                                throw Error("invalid instruction; " + e)
                            }
                            if (r.typeIndex !== e.index) throw Error(`invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`);
                            return r
                        }(eD, e),
                        r = e.length - 56;
                    J(r >= 0, "lookup table is invalid"), J(r % 32 == 0, "lookup table is invalid");
                    let {
                        addresses: i
                    } = p.struct([p.seq(H(), r / 32, "addresses")]).decode(e.slice(56));
                    return {
                        deactivationSlot: t.deactivationSlot,
                        lastExtendedSlot: t.lastExtendedSlot,
                        lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
                        authority: 0 !== t.authority.length ? new K(t.authority[0]) : void 0,
                        addresses: i.map(e => new K(e))
                    }
                }
            }
            let eD = {
                    index: 1,
                    layout: p.struct([p.u32("typeIndex"), ex("deactivationSlot"), p.nu64("lastExtendedSlot"), p.u8("lastExtendedStartIndex"), p.u8(), p.seq(H(), p.offset(p.u8(), -1), "authority")])
                },
                eH = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,
                eF = (0, b.oQ)((0, b.eE)(K), (0, b.Z_)(), e => new K(e)),
                e$ = (0, b.bc)([(0, b.Z_)(), (0, b.i0)("base64")]),
                eZ = (0, b.oQ)((0, b.eE)(o.Buffer), e$, e => o.Buffer.from(e[0], "base64")),
                eX = 3e4;

            function eJ(e) {
                let t, r;
                if ("string" == typeof e) t = e;
                else if (e) {
                    let {
                        commitment: i,
                        ...s
                    } = e;
                    t = i, r = s
                }
                return {
                    commitment: t,
                    config: r
                }
            }

            function eY(e) {
                return (0, b.G0)([(0, b.dt)({
                    jsonrpc: (0, b.i0)("2.0"),
                    id: (0, b.Z_)(),
                    result: e
                }), (0, b.dt)({
                    jsonrpc: (0, b.i0)("2.0"),
                    id: (0, b.Z_)(),
                    error: (0, b.dt)({
                        code: (0, b._4)(),
                        message: (0, b.Z_)(),
                        data: (0, b.jt)((0, b.Yj)())
                    })
                })])
            }
            let eQ = eY((0, b._4)());

            function e0(e) {
                return (0, b.oQ)(eY(e), eQ, t => "error" in t ? t : {
                    ...t,
                    result: (0, b.Ue)(t.result, e)
                })
            }

            function e1(e) {
                return e0((0, b.dt)({
                    context: (0, b.dt)({
                        slot: (0, b.Rx)()
                    }),
                    value: e
                }))
            }

            function e2(e) {
                return (0, b.dt)({
                    context: (0, b.dt)({
                        slot: (0, b.Rx)()
                    }),
                    value: e
                })
            }

            function e3(e, t) {
                return 0 === e ? new ee({
                    header: t.header,
                    staticAccountKeys: t.accountKeys.map(e => new K(e)),
                    recentBlockhash: t.recentBlockhash,
                    compiledInstructions: t.instructions.map(e => ({
                        programIdIndex: e.programIdIndex,
                        accountKeyIndexes: e.accounts,
                        data: d().decode(e.data)
                    })),
                    addressTableLookups: t.addressTableLookups
                }) : new Q(t)
            }
            let e8 = (0, b.dt)({
                    foundation: (0, b.Rx)(),
                    foundationTerm: (0, b.Rx)(),
                    initial: (0, b.Rx)(),
                    taper: (0, b.Rx)(),
                    terminal: (0, b.Rx)()
                }),
                e6 = e0((0, b.IX)((0, b.AG)((0, b.dt)({
                    epoch: (0, b.Rx)(),
                    effectiveSlot: (0, b.Rx)(),
                    amount: (0, b.Rx)(),
                    postBalance: (0, b.Rx)(),
                    commission: (0, b.jt)((0, b.AG)((0, b.Rx)()))
                })))),
                e4 = (0, b.IX)((0, b.dt)({
                    slot: (0, b.Rx)(),
                    prioritizationFee: (0, b.Rx)()
                })),
                e5 = (0, b.dt)({
                    total: (0, b.Rx)(),
                    validator: (0, b.Rx)(),
                    foundation: (0, b.Rx)(),
                    epoch: (0, b.Rx)()
                }),
                e7 = (0, b.dt)({
                    epoch: (0, b.Rx)(),
                    slotIndex: (0, b.Rx)(),
                    slotsInEpoch: (0, b.Rx)(),
                    absoluteSlot: (0, b.Rx)(),
                    blockHeight: (0, b.jt)((0, b.Rx)()),
                    transactionCount: (0, b.jt)((0, b.Rx)())
                }),
                e9 = (0, b.dt)({
                    slotsPerEpoch: (0, b.Rx)(),
                    leaderScheduleSlotOffset: (0, b.Rx)(),
                    warmup: (0, b.O7)(),
                    firstNormalEpoch: (0, b.Rx)(),
                    firstNormalSlot: (0, b.Rx)()
                }),
                te = (0, b.IM)((0, b.Z_)(), (0, b.IX)((0, b.Rx)())),
                tt = (0, b.AG)((0, b.G0)([(0, b.dt)({}), (0, b.Z_)()])),
                tr = (0, b.dt)({
                    err: tt
                }),
                ti = (0, b.i0)("receivedSignature"),
                ts = (0, b.dt)({
                    "solana-core": (0, b.Z_)(),
                    "feature-set": (0, b.jt)((0, b.Rx)())
                }),
                tn = e1((0, b.dt)({
                    err: (0, b.AG)((0, b.G0)([(0, b.dt)({}), (0, b.Z_)()])),
                    logs: (0, b.AG)((0, b.IX)((0, b.Z_)())),
                    accounts: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.AG)((0, b.dt)({
                        executable: (0, b.O7)(),
                        owner: (0, b.Z_)(),
                        lamports: (0, b.Rx)(),
                        data: (0, b.IX)((0, b.Z_)()),
                        rentEpoch: (0, b.jt)((0, b.Rx)())
                    }))))),
                    unitsConsumed: (0, b.jt)((0, b.Rx)()),
                    returnData: (0, b.jt)((0, b.AG)((0, b.dt)({
                        programId: (0, b.Z_)(),
                        data: (0, b.bc)([(0, b.Z_)(), (0, b.i0)("base64")])
                    })))
                })),
                to = e1((0, b.dt)({
                    byIdentity: (0, b.IM)((0, b.Z_)(), (0, b.IX)((0, b.Rx)())),
                    range: (0, b.dt)({
                        firstSlot: (0, b.Rx)(),
                        lastSlot: (0, b.Rx)()
                    })
                })),
                ta = e0(e8),
                tc = e0(e5),
                tu = e0(e4),
                tl = e0(e7),
                td = e0(e9),
                th = e0(te),
                tg = e0((0, b.Rx)()),
                tp = e1((0, b.dt)({
                    total: (0, b.Rx)(),
                    circulating: (0, b.Rx)(),
                    nonCirculating: (0, b.Rx)(),
                    nonCirculatingAccounts: (0, b.IX)(eF)
                })),
                ty = (0, b.dt)({
                    amount: (0, b.Z_)(),
                    uiAmount: (0, b.AG)((0, b.Rx)()),
                    decimals: (0, b.Rx)(),
                    uiAmountString: (0, b.jt)((0, b.Z_)())
                }),
                tb = e1((0, b.IX)((0, b.dt)({
                    address: eF,
                    amount: (0, b.Z_)(),
                    uiAmount: (0, b.AG)((0, b.Rx)()),
                    decimals: (0, b.Rx)(),
                    uiAmountString: (0, b.jt)((0, b.Z_)())
                }))),
                tm = e1((0, b.IX)((0, b.dt)({
                    pubkey: eF,
                    account: (0, b.dt)({
                        executable: (0, b.O7)(),
                        owner: eF,
                        lamports: (0, b.Rx)(),
                        data: eZ,
                        rentEpoch: (0, b.Rx)()
                    })
                }))),
                tf = (0, b.dt)({
                    program: (0, b.Z_)(),
                    parsed: (0, b._4)(),
                    space: (0, b.Rx)()
                }),
                tk = e1((0, b.IX)((0, b.dt)({
                    pubkey: eF,
                    account: (0, b.dt)({
                        executable: (0, b.O7)(),
                        owner: eF,
                        lamports: (0, b.Rx)(),
                        data: tf,
                        rentEpoch: (0, b.Rx)()
                    })
                }))),
                tS = e1((0, b.IX)((0, b.dt)({
                    lamports: (0, b.Rx)(),
                    address: eF
                }))),
                tw = (0, b.dt)({
                    executable: (0, b.O7)(),
                    owner: eF,
                    lamports: (0, b.Rx)(),
                    data: eZ,
                    rentEpoch: (0, b.Rx)()
                }),
                tI = (0, b.dt)({
                    pubkey: eF,
                    account: tw
                }),
                t_ = (0, b.oQ)((0, b.G0)([(0, b.eE)(o.Buffer), tf]), (0, b.G0)([e$, tf]), e => Array.isArray(e) ? (0, b.Ue)(e, eZ) : e),
                tA = (0, b.dt)({
                    executable: (0, b.O7)(),
                    owner: eF,
                    lamports: (0, b.Rx)(),
                    data: t_,
                    rentEpoch: (0, b.Rx)()
                }),
                tR = (0, b.dt)({
                    pubkey: eF,
                    account: tA
                }),
                tx = (0, b.dt)({
                    state: (0, b.G0)([(0, b.i0)("active"), (0, b.i0)("inactive"), (0, b.i0)("activating"), (0, b.i0)("deactivating")]),
                    active: (0, b.Rx)(),
                    inactive: (0, b.Rx)()
                }),
                tP = e0((0, b.IX)((0, b.dt)({
                    signature: (0, b.Z_)(),
                    slot: (0, b.Rx)(),
                    err: tt,
                    memo: (0, b.AG)((0, b.Z_)()),
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)()))
                }))),
                tE = e0((0, b.IX)((0, b.dt)({
                    signature: (0, b.Z_)(),
                    slot: (0, b.Rx)(),
                    err: tt,
                    memo: (0, b.AG)((0, b.Z_)()),
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)()))
                }))),
                tv = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: e2(tw)
                }),
                tB = (0, b.dt)({
                    pubkey: eF,
                    account: tw
                }),
                tT = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: e2(tB)
                }),
                tC = (0, b.dt)({
                    parent: (0, b.Rx)(),
                    slot: (0, b.Rx)(),
                    root: (0, b.Rx)()
                }),
                tL = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: tC
                }),
                tO = (0, b.G0)([(0, b.dt)({
                    type: (0, b.G0)([(0, b.i0)("firstShredReceived"), (0, b.i0)("completed"), (0, b.i0)("optimisticConfirmation"), (0, b.i0)("root")]),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)()
                }), (0, b.dt)({
                    type: (0, b.i0)("createdBank"),
                    parent: (0, b.Rx)(),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)()
                }), (0, b.dt)({
                    type: (0, b.i0)("frozen"),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)(),
                    stats: (0, b.dt)({
                        numTransactionEntries: (0, b.Rx)(),
                        numSuccessfulTransactions: (0, b.Rx)(),
                        numFailedTransactions: (0, b.Rx)(),
                        maxTransactionsPerEntry: (0, b.Rx)()
                    })
                }), (0, b.dt)({
                    type: (0, b.i0)("dead"),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)(),
                    err: (0, b.Z_)()
                })]),
                tW = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: tO
                }),
                tK = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: e2((0, b.G0)([tr, ti]))
                }),
                tN = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: (0, b.Rx)()
                }),
                tz = (0, b.dt)({
                    pubkey: (0, b.Z_)(),
                    gossip: (0, b.AG)((0, b.Z_)()),
                    tpu: (0, b.AG)((0, b.Z_)()),
                    rpc: (0, b.AG)((0, b.Z_)()),
                    version: (0, b.AG)((0, b.Z_)())
                }),
                tU = (0, b.dt)({
                    votePubkey: (0, b.Z_)(),
                    nodePubkey: (0, b.Z_)(),
                    activatedStake: (0, b.Rx)(),
                    epochVoteAccount: (0, b.O7)(),
                    epochCredits: (0, b.IX)((0, b.bc)([(0, b.Rx)(), (0, b.Rx)(), (0, b.Rx)()])),
                    commission: (0, b.Rx)(),
                    lastVote: (0, b.Rx)(),
                    rootSlot: (0, b.AG)((0, b.Rx)())
                }),
                tq = e0((0, b.dt)({
                    current: (0, b.IX)(tU),
                    delinquent: (0, b.IX)(tU)
                })),
                tG = (0, b.G0)([(0, b.i0)("processed"), (0, b.i0)("confirmed"), (0, b.i0)("finalized")]),
                tj = (0, b.dt)({
                    slot: (0, b.Rx)(),
                    confirmations: (0, b.AG)((0, b.Rx)()),
                    err: tt,
                    confirmationStatus: (0, b.jt)(tG)
                }),
                tV = e1((0, b.IX)((0, b.AG)(tj))),
                tM = e0((0, b.Rx)()),
                tD = (0, b.dt)({
                    accountKey: eF,
                    writableIndexes: (0, b.IX)((0, b.Rx)()),
                    readonlyIndexes: (0, b.IX)((0, b.Rx)())
                }),
                tH = (0, b.dt)({
                    signatures: (0, b.IX)((0, b.Z_)()),
                    message: (0, b.dt)({
                        accountKeys: (0, b.IX)((0, b.Z_)()),
                        header: (0, b.dt)({
                            numRequiredSignatures: (0, b.Rx)(),
                            numReadonlySignedAccounts: (0, b.Rx)(),
                            numReadonlyUnsignedAccounts: (0, b.Rx)()
                        }),
                        instructions: (0, b.IX)((0, b.dt)({
                            accounts: (0, b.IX)((0, b.Rx)()),
                            data: (0, b.Z_)(),
                            programIdIndex: (0, b.Rx)()
                        })),
                        recentBlockhash: (0, b.Z_)(),
                        addressTableLookups: (0, b.jt)((0, b.IX)(tD))
                    })
                }),
                tF = (0, b.dt)({
                    pubkey: eF,
                    signer: (0, b.O7)(),
                    writable: (0, b.O7)(),
                    source: (0, b.jt)((0, b.G0)([(0, b.i0)("transaction"), (0, b.i0)("lookupTable")]))
                }),
                t$ = (0, b.dt)({
                    accountKeys: (0, b.IX)(tF),
                    signatures: (0, b.IX)((0, b.Z_)())
                }),
                tZ = (0, b.dt)({
                    parsed: (0, b._4)(),
                    program: (0, b.Z_)(),
                    programId: eF
                }),
                tX = (0, b.dt)({
                    accounts: (0, b.IX)(eF),
                    data: (0, b.Z_)(),
                    programId: eF
                }),
                tJ = (0, b.G0)([tX, tZ]),
                tY = (0, b.G0)([(0, b.dt)({
                    parsed: (0, b._4)(),
                    program: (0, b.Z_)(),
                    programId: (0, b.Z_)()
                }), (0, b.dt)({
                    accounts: (0, b.IX)((0, b.Z_)()),
                    data: (0, b.Z_)(),
                    programId: (0, b.Z_)()
                })]),
                tQ = (0, b.oQ)(tJ, tY, e => "accounts" in e ? (0, b.Ue)(e, tX) : (0, b.Ue)(e, tZ)),
                t0 = (0, b.dt)({
                    signatures: (0, b.IX)((0, b.Z_)()),
                    message: (0, b.dt)({
                        accountKeys: (0, b.IX)(tF),
                        instructions: (0, b.IX)(tQ),
                        recentBlockhash: (0, b.Z_)(),
                        addressTableLookups: (0, b.jt)((0, b.AG)((0, b.IX)(tD)))
                    })
                }),
                t1 = (0, b.dt)({
                    accountIndex: (0, b.Rx)(),
                    mint: (0, b.Z_)(),
                    owner: (0, b.jt)((0, b.Z_)()),
                    uiTokenAmount: ty
                }),
                t2 = (0, b.dt)({
                    writable: (0, b.IX)(eF),
                    readonly: (0, b.IX)(eF)
                }),
                t3 = (0, b.dt)({
                    err: tt,
                    fee: (0, b.Rx)(),
                    innerInstructions: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.dt)({
                        index: (0, b.Rx)(),
                        instructions: (0, b.IX)((0, b.dt)({
                            accounts: (0, b.IX)((0, b.Rx)()),
                            data: (0, b.Z_)(),
                            programIdIndex: (0, b.Rx)()
                        }))
                    })))),
                    preBalances: (0, b.IX)((0, b.Rx)()),
                    postBalances: (0, b.IX)((0, b.Rx)()),
                    logMessages: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.Z_)()))),
                    preTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(t1))),
                    postTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(t1))),
                    loadedAddresses: (0, b.jt)(t2),
                    computeUnitsConsumed: (0, b.jt)((0, b.Rx)())
                }),
                t8 = (0, b.dt)({
                    err: tt,
                    fee: (0, b.Rx)(),
                    innerInstructions: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.dt)({
                        index: (0, b.Rx)(),
                        instructions: (0, b.IX)(tQ)
                    })))),
                    preBalances: (0, b.IX)((0, b.Rx)()),
                    postBalances: (0, b.IX)((0, b.Rx)()),
                    logMessages: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.Z_)()))),
                    preTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(t1))),
                    postTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(t1))),
                    loadedAddresses: (0, b.jt)(t2),
                    computeUnitsConsumed: (0, b.jt)((0, b.Rx)())
                }),
                t6 = (0, b.G0)([(0, b.i0)(0), (0, b.i0)("legacy")]),
                t4 = (0, b.dt)({
                    pubkey: (0, b.Z_)(),
                    lamports: (0, b.Rx)(),
                    postBalance: (0, b.AG)((0, b.Rx)()),
                    rewardType: (0, b.AG)((0, b.Z_)()),
                    commission: (0, b.jt)((0, b.AG)((0, b.Rx)()))
                }),
                t5 = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: tH,
                        meta: (0, b.AG)(t3),
                        version: (0, b.jt)(t6)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(t4)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                t7 = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    rewards: (0, b.jt)((0, b.IX)(t4)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                t9 = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: t$,
                        meta: (0, b.AG)(t3),
                        version: (0, b.jt)(t6)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(t4)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                re = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: t0,
                        meta: (0, b.AG)(t8),
                        version: (0, b.jt)(t6)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(t4)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                rt = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: t$,
                        meta: (0, b.AG)(t8),
                        version: (0, b.jt)(t6)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(t4)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                rr = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    rewards: (0, b.jt)((0, b.IX)(t4)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                ri = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: tH,
                        meta: (0, b.AG)(t3)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(t4)),
                    blockTime: (0, b.AG)((0, b.Rx)())
                }))),
                rs = e0((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    signatures: (0, b.IX)((0, b.Z_)()),
                    blockTime: (0, b.AG)((0, b.Rx)())
                }))),
                rn = e0((0, b.AG)((0, b.dt)({
                    slot: (0, b.Rx)(),
                    meta: (0, b.AG)(t3),
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)())),
                    transaction: tH,
                    version: (0, b.jt)(t6)
                }))),
                ro = e0((0, b.AG)((0, b.dt)({
                    slot: (0, b.Rx)(),
                    transaction: t0,
                    meta: (0, b.AG)(t8),
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)())),
                    version: (0, b.jt)(t6)
                }))),
                ra = e1((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    feeCalculator: (0, b.dt)({
                        lamportsPerSignature: (0, b.Rx)()
                    })
                })),
                rc = e1((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    lastValidBlockHeight: (0, b.Rx)()
                })),
                ru = e1((0, b.O7)()),
                rl = (0, b.dt)({
                    slot: (0, b.Rx)(),
                    numTransactions: (0, b.Rx)(),
                    numSlots: (0, b.Rx)(),
                    samplePeriodSecs: (0, b.Rx)()
                }),
                rd = e0((0, b.IX)(rl)),
                rh = e1((0, b.AG)((0, b.dt)({
                    feeCalculator: (0, b.dt)({
                        lamportsPerSignature: (0, b.Rx)()
                    })
                }))),
                rg = e0((0, b.Z_)()),
                rp = e0((0, b.Z_)()),
                ry = (0, b.dt)({
                    err: tt,
                    logs: (0, b.IX)((0, b.Z_)()),
                    signature: (0, b.Z_)()
                }),
                rb = (0, b.dt)({
                    result: e2(ry),
                    subscription: (0, b.Rx)()
                }),
                rm = {
                    "solana-client": "js/0.0.0-development"
                };
            class rf {
                constructor(e, t) {
                    var r, i;
                    let s, n, o, a, c, u;
                    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
                        latestBlockhash: null,
                        lastFetch: 0,
                        transactionSignatures: [],
                        simulatedSignatures: []
                    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, this.getBlockHeight = (() => {
                        let e = {};
                        return async t => {
                            let {
                                commitment: r,
                                config: i
                            } = eJ(t), s = this._buildArgs([], r, void 0, i), n = eK(s);
                            return e[n] = e[n] ?? (async () => {
                                try {
                                    let e = await this._rpcRequest("getBlockHeight", s),
                                        t = (0, b.Ue)(e, e0((0, b.Rx)()));
                                    if ("error" in t) throw new eG(t.error, "failed to get block height information");
                                    return t.result
                                } finally {
                                    delete e[n]
                                }
                            })(), await e[n]
                        }
                    })(), t && "string" == typeof t ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, s = t.wsEndpoint, n = t.httpHeaders, o = t.fetch, a = t.fetchMiddleware, c = t.disableRetryOnRateLimit, u = t.httpAgent), this._rpcEndpoint = function(e) {
                        if (!1 === /^https?:/.test(e)) throw TypeError("Endpoint URL must start with `http:` or `https:`.");
                        return e
                    }(e), this._rpcWsEndpoint = s || function(e) {
                        let t = e.match(eH);
                        if (null == t) throw TypeError(`Failed to validate endpoint URL \`${e}\``);
                        let [r, i, s, n] = t, o = e.startsWith("https:") ? "wss:" : "ws:", a = null == s ? null : parseInt(s.slice(1), 10), c = null == a ? "" : `:${a+1}`;
                        return `${o}//${i}${c}${n}`
                    }(e), this._rpcClient = function(e, t, r, i, s, n) {
                        let o, a;
                        let c = r || ej;
                        return null != n && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."), i && (a = async (e, t) => {
                            let r = await new Promise((r, s) => {
                                try {
                                    i(e, t, (e, t) => r([e, t]))
                                } catch (e) {
                                    s(e)
                                }
                            });
                            return await c(...r)
                        }), new(f())(async (r, i) => {
                            let n = {
                                method: "POST",
                                body: r,
                                agent: o,
                                headers: Object.assign({
                                    "Content-Type": "application/json"
                                }, t || {}, rm)
                            };
                            try {
                                let t, r = 5,
                                    o = 500;
                                for (; t = a ? await a(e, n) : await c(e, n), 429 === t.status && !0 !== s && (r -= 1, 0 !== r);) console.log(`Server responded with ${t.status} ${t.statusText}.  Retrying after ${o}ms delay...`), await ef(o), o *= 2;
                                let u = await t.text();
                                t.ok ? i(null, u) : i(Error(`${t.status} ${t.statusText}: ${u}`))
                            } catch (e) {
                                e instanceof Error && i(e)
                            }
                        }, {})
                    }(e, n, o, a, c, u), this._rpcRequest = (r = this._rpcClient, (e, t) => new Promise((i, s) => {
                        r.request(e, t, (e, t) => {
                            if (e) {
                                s(e);
                                return
                            }
                            i(t)
                        })
                    })), this._rpcBatchRequest = (i = this._rpcClient, e => new Promise((t, r) => {
                        0 === e.length && t([]);
                        let s = e.map(e => i.request(e.methodName, e.args));
                        i.request(s, (e, i) => {
                            if (e) {
                                r(e);
                                return
                            }
                            t(i)
                        })
                    })), this._rpcWebSocket = new eV(this._rpcWsEndpoint, {
                        autoconnect: !1,
                        max_reconnects: 1 / 0
                    }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
                }
                get commitment() {
                    return this._commitment
                }
                get rpcEndpoint() {
                    return this._rpcEndpoint
                }
                async getBalanceAndContext(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgs([e.toBase58()], r, void 0, i), n = await this._rpcRequest("getBalance", s), o = (0, b.Ue)(n, e1((0, b.Rx)()));
                    if ("error" in o) throw new eG(o.error, `failed to get balance for ${e.toBase58()}`);
                    return o.result
                }
                async getBalance(e, t) {
                    return await this.getBalanceAndContext(e, t).then(e => e.value).catch(t => {
                        throw Error("failed to get balance of account " + e.toBase58() + ": " + t)
                    })
                }
                async getBlockTime(e) {
                    let t = await this._rpcRequest("getBlockTime", [e]),
                        r = (0, b.Ue)(t, e0((0, b.AG)((0, b.Rx)())));
                    if ("error" in r) throw new eG(r.error, `failed to get block time for slot ${e}`);
                    return r.result
                }
                async getMinimumLedgerSlot() {
                    let e = await this._rpcRequest("minimumLedgerSlot", []),
                        t = (0, b.Ue)(e, e0((0, b.Rx)()));
                    if ("error" in t) throw new eG(t.error, "failed to get minimum ledger slot");
                    return t.result
                }
                async getFirstAvailableBlock() {
                    let e = await this._rpcRequest("getFirstAvailableBlock", []),
                        t = (0, b.Ue)(e, tg);
                    if ("error" in t) throw new eG(t.error, "failed to get first available block");
                    return t.result
                }
                async getSupply(e) {
                    let t = {};
                    t = "string" == typeof e ? {
                        commitment: e
                    } : e ? {
                        ...e,
                        commitment: e && e.commitment || this.commitment
                    } : {
                        commitment: this.commitment
                    };
                    let r = await this._rpcRequest("getSupply", [t]),
                        i = (0, b.Ue)(r, tp);
                    if ("error" in i) throw new eG(i.error, "failed to get supply");
                    return i.result
                }
                async getTokenSupply(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        i = await this._rpcRequest("getTokenSupply", r),
                        s = (0, b.Ue)(i, e1(ty));
                    if ("error" in s) throw new eG(s.error, "failed to get token supply");
                    return s.result
                }
                async getTokenAccountBalance(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        i = await this._rpcRequest("getTokenAccountBalance", r),
                        s = (0, b.Ue)(i, e1(ty));
                    if ("error" in s) throw new eG(s.error, "failed to get token account balance");
                    return s.result
                }
                async getTokenAccountsByOwner(e, t, r) {
                    let {
                        commitment: i,
                        config: s
                    } = eJ(r), n = [e.toBase58()];
                    "mint" in t ? n.push({
                        mint: t.mint.toBase58()
                    }) : n.push({
                        programId: t.programId.toBase58()
                    });
                    let o = this._buildArgs(n, i, "base64", s),
                        a = await this._rpcRequest("getTokenAccountsByOwner", o),
                        c = (0, b.Ue)(a, tm);
                    if ("error" in c) throw new eG(c.error, `failed to get token accounts owned by account ${e.toBase58()}`);
                    return c.result
                }
                async getParsedTokenAccountsByOwner(e, t, r) {
                    let i = [e.toBase58()];
                    "mint" in t ? i.push({
                        mint: t.mint.toBase58()
                    }) : i.push({
                        programId: t.programId.toBase58()
                    });
                    let s = this._buildArgs(i, r, "jsonParsed"),
                        n = await this._rpcRequest("getTokenAccountsByOwner", s),
                        o = (0, b.Ue)(n, tk);
                    if ("error" in o) throw new eG(o.error, `failed to get token accounts owned by account ${e.toBase58()}`);
                    return o.result
                }
                async getLargestAccounts(e) {
                    let t = {
                            ...e,
                            commitment: e && e.commitment || this.commitment
                        },
                        r = t.filter || t.commitment ? [t] : [],
                        i = await this._rpcRequest("getLargestAccounts", r),
                        s = (0, b.Ue)(i, tS);
                    if ("error" in s) throw new eG(s.error, "failed to get largest accounts");
                    return s.result
                }
                async getTokenLargestAccounts(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        i = await this._rpcRequest("getTokenLargestAccounts", r),
                        s = (0, b.Ue)(i, tb);
                    if ("error" in s) throw new eG(s.error, "failed to get token largest accounts");
                    return s.result
                }
                async getAccountInfoAndContext(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgs([e.toBase58()], r, "base64", i), n = await this._rpcRequest("getAccountInfo", s), o = (0, b.Ue)(n, e1((0, b.AG)(tw)));
                    if ("error" in o) throw new eG(o.error, `failed to get info about account ${e.toBase58()}`);
                    return o.result
                }
                async getParsedAccountInfo(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgs([e.toBase58()], r, "jsonParsed", i), n = await this._rpcRequest("getAccountInfo", s), o = (0, b.Ue)(n, e1((0, b.AG)(tA)));
                    if ("error" in o) throw new eG(o.error, `failed to get info about account ${e.toBase58()}`);
                    return o.result
                }
                async getAccountInfo(e, t) {
                    try {
                        return (await this.getAccountInfoAndContext(e, t)).value
                    } catch (t) {
                        throw Error("failed to get info about account " + e.toBase58() + ": " + t)
                    }
                }
                async getMultipleParsedAccounts(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = e.map(e => e.toBase58()), n = this._buildArgs([s], r, "jsonParsed", i), o = await this._rpcRequest("getMultipleAccounts", n), a = (0, b.Ue)(o, e1((0, b.IX)((0, b.AG)(tA))));
                    if ("error" in a) throw new eG(a.error, `failed to get info for accounts ${s}`);
                    return a.result
                }
                async getMultipleAccountsInfoAndContext(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = e.map(e => e.toBase58()), n = this._buildArgs([s], r, "base64", i), o = await this._rpcRequest("getMultipleAccounts", n), a = (0, b.Ue)(o, e1((0, b.IX)((0, b.AG)(tw))));
                    if ("error" in a) throw new eG(a.error, `failed to get info for accounts ${s}`);
                    return a.result
                }
                async getMultipleAccountsInfo(e, t) {
                    return (await this.getMultipleAccountsInfoAndContext(e, t)).value
                }
                async getStakeActivation(e, t, r) {
                    let {
                        commitment: i,
                        config: s
                    } = eJ(t), n = this._buildArgs([e.toBase58()], i, void 0, {
                        ...s,
                        epoch: null != r ? r : s?.epoch
                    }), o = await this._rpcRequest("getStakeActivation", n), a = (0, b.Ue)(o, e0(tx));
                    if ("error" in a) throw new eG(a.error, `failed to get Stake Activation ${e.toBase58()}`);
                    return a.result
                }
                async getProgramAccounts(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), {
                        encoding: s,
                        ...n
                    } = i || {}, o = this._buildArgs([e.toBase58()], r, s || "base64", n), a = await this._rpcRequest("getProgramAccounts", o), c = (0, b.IX)(tI), u = !0 === n.withContext ? (0, b.Ue)(a, e1(c)) : (0, b.Ue)(a, e0(c));
                    if ("error" in u) throw new eG(u.error, `failed to get accounts owned by program ${e.toBase58()}`);
                    return u.result
                }
                async getParsedProgramAccounts(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgs([e.toBase58()], r, "jsonParsed", i), n = await this._rpcRequest("getProgramAccounts", s), o = (0, b.Ue)(n, e0((0, b.IX)(tR)));
                    if ("error" in o) throw new eG(o.error, `failed to get accounts owned by program ${e.toBase58()}`);
                    return o.result
                }
                async confirmTransaction(e, t) {
                    let r, i;
                    if ("string" == typeof e) r = e;
                    else {
                        if (e.abortSignal?.aborted) return Promise.reject(e.abortSignal.reason);
                        r = e.signature
                    }
                    try {
                        i = d().decode(r)
                    } catch (e) {
                        throw Error("signature must be base58 encoded: " + r)
                    }
                    return (J(64 === i.length, "signature has invalid length"), "string" == typeof e) ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                        commitment: t || this.commitment,
                        signature: r
                    }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                        commitment: t || this.commitment,
                        strategy: e
                    }) : await this.confirmTransactionUsingDurableNonceStrategy({
                        commitment: t || this.commitment,
                        strategy: e
                    })
                }
                getCancellationPromise(e) {
                    return new Promise((t, r) => {
                        null != e && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
                            r(e.reason)
                        }))
                    })
                }
                getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t
                }) {
                    let r, i;
                    let s = !1;
                    return {
                        abortConfirmation: () => {
                            i && (i(), i = void 0), null != r && (this.removeSignatureListener(r), r = void 0)
                        },
                        confirmationPromise: new Promise((n, o) => {
                            try {
                                r = this.onSignature(t, (e, t) => {
                                    r = void 0, n({
                                        __type: er.PROCESSED,
                                        response: {
                                            context: t,
                                            value: e
                                        }
                                    })
                                }, e);
                                let a = new Promise(e => {
                                    null == r ? e() : i = this._onSubscriptionStateChange(r, t => {
                                        "subscribed" === t && e()
                                    })
                                });
                                (async () => {
                                    if (await a, s) return;
                                    let r = await this.getSignatureStatus(t);
                                    if (s || null == r) return;
                                    let {
                                        context: i,
                                        value: c
                                    } = r;
                                    if (null != c) {
                                        if (c?.err) o(c.err);
                                        else {
                                            switch (e) {
                                                case "confirmed":
                                                case "single":
                                                case "singleGossip":
                                                    if ("processed" === c.confirmationStatus) return;
                                                    break;
                                                case "finalized":
                                                case "max":
                                                case "root":
                                                    if ("processed" === c.confirmationStatus || "confirmed" === c.confirmationStatus) return
                                            }
                                            s = !0, n({
                                                __type: er.PROCESSED,
                                                response: {
                                                    context: i,
                                                    value: c
                                                }
                                            })
                                        }
                                    }
                                })()
                            } catch (e) {
                                o(e)
                            }
                        })
                    }
                }
                async confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: e,
                    strategy: {
                        abortSignal: t,
                        lastValidBlockHeight: r,
                        signature: i
                    }
                }) {
                    let s, n = !1,
                        o = new Promise(t => {
                            let i = async () => {
                                try {
                                    return await this.getBlockHeight(e)
                                } catch (e) {
                                    return -1
                                }
                            };
                            (async () => {
                                let e = await i();
                                if (!n) {
                                    for (; e <= r;)
                                        if (await ef(1e3), n || (e = await i(), n)) return;
                                    t({
                                        __type: er.BLOCKHEIGHT_EXCEEDED
                                    })
                                }
                            })()
                        }),
                        {
                            abortConfirmation: a,
                            confirmationPromise: c
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: i
                        }),
                        u = this.getCancellationPromise(t);
                    try {
                        let e = await Promise.race([u, c, o]);
                        if (e.__type === er.PROCESSED) s = e.response;
                        else throw new j(i)
                    } finally {
                        n = !0, a()
                    }
                    return s
                }
                async confirmTransactionUsingDurableNonceStrategy({
                    commitment: e,
                    strategy: {
                        abortSignal: t,
                        minContextSlot: r,
                        nonceAccountPubkey: i,
                        nonceValue: s,
                        signature: n
                    }
                }) {
                    let o, a = !1,
                        c = new Promise(t => {
                            let n = s,
                                o = null,
                                c = async () => {
                                    try {
                                        let {
                                            context: t,
                                            value: s
                                        } = await this.getNonceAndContext(i, {
                                            commitment: e,
                                            minContextSlot: r
                                        });
                                        return o = t.slot, s?.nonce
                                    } catch (e) {
                                        return n
                                    }
                                };
                            (async () => {
                                if (n = await c(), !a)
                                    for (;;) {
                                        if (s !== n) {
                                            t({
                                                __type: er.NONCE_INVALID,
                                                slotInWhichNonceDidAdvance: o
                                            });
                                            return
                                        }
                                        if (await ef(2e3), a || (n = await c(), a)) return
                                    }
                            })()
                        }),
                        {
                            abortConfirmation: u,
                            confirmationPromise: l
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: n
                        }),
                        d = this.getCancellationPromise(t);
                    try {
                        let t = await Promise.race([d, l, c]);
                        if (t.__type === er.PROCESSED) o = t.response;
                        else {
                            let i;
                            for (;;) {
                                let e = await this.getSignatureStatus(n);
                                if (null == e) break;
                                if (e.context.slot < (t.slotInWhichNonceDidAdvance ?? r)) {
                                    await ef(400);
                                    continue
                                }
                                i = e;
                                break
                            }
                            if (i?.value) {
                                let t = e || "finalized",
                                    {
                                        confirmationStatus: r
                                    } = i.value;
                                switch (t) {
                                    case "processed":
                                    case "recent":
                                        if ("processed" !== r && "confirmed" !== r && "finalized" !== r) throw new M(n);
                                        break;
                                    case "confirmed":
                                    case "single":
                                    case "singleGossip":
                                        if ("confirmed" !== r && "finalized" !== r) throw new M(n);
                                        break;
                                    case "finalized":
                                    case "max":
                                    case "root":
                                        if ("finalized" !== r) throw new M(n)
                                }
                                o = {
                                    context: i.context,
                                    value: {
                                        err: i.value.err
                                    }
                                }
                            } else throw new M(n)
                        }
                    } finally {
                        a = !0, u()
                    }
                    return o
                }
                async confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: e,
                    signature: t
                }) {
                    let r, i;
                    let s = new Promise(t => {
                            let i = this._confirmTransactionInitialTimeout || 6e4;
                            switch (e) {
                                case "processed":
                                case "recent":
                                case "single":
                                case "confirmed":
                                case "singleGossip":
                                    i = this._confirmTransactionInitialTimeout || 3e4
                            }
                            r = setTimeout(() => t({
                                __type: er.TIMED_OUT,
                                timeoutMs: i
                            }), i)
                        }),
                        {
                            abortConfirmation: n,
                            confirmationPromise: o
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: t
                        });
                    try {
                        let e = await Promise.race([o, s]);
                        if (e.__type === er.PROCESSED) i = e.response;
                        else throw new V(t, e.timeoutMs / 1e3)
                    } finally {
                        clearTimeout(r), n()
                    }
                    return i
                }
                async getClusterNodes() {
                    let e = await this._rpcRequest("getClusterNodes", []),
                        t = (0, b.Ue)(e, e0((0, b.IX)(tz)));
                    if ("error" in t) throw new eG(t.error, "failed to get cluster nodes");
                    return t.result
                }
                async getVoteAccounts(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getVoteAccounts", t),
                        i = (0, b.Ue)(r, tq);
                    if ("error" in i) throw new eG(i.error, "failed to get vote accounts");
                    return i.result
                }
                async getSlot(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eJ(e), i = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getSlot", i), n = (0, b.Ue)(s, e0((0, b.Rx)()));
                    if ("error" in n) throw new eG(n.error, "failed to get slot");
                    return n.result
                }
                async getSlotLeader(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eJ(e), i = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getSlotLeader", i), n = (0, b.Ue)(s, e0((0, b.Z_)()));
                    if ("error" in n) throw new eG(n.error, "failed to get slot leader");
                    return n.result
                }
                async getSlotLeaders(e, t) {
                    let r = await this._rpcRequest("getSlotLeaders", [e, t]),
                        i = (0, b.Ue)(r, e0((0, b.IX)(eF)));
                    if ("error" in i) throw new eG(i.error, "failed to get slot leaders");
                    return i.result
                }
                async getSignatureStatus(e, t) {
                    let {
                        context: r,
                        value: i
                    } = await this.getSignatureStatuses([e], t);
                    return J(1 === i.length), {
                        context: r,
                        value: i[0]
                    }
                }
                async getSignatureStatuses(e, t) {
                    let r = [e];
                    t && r.push(t);
                    let i = await this._rpcRequest("getSignatureStatuses", r),
                        s = (0, b.Ue)(i, tV);
                    if ("error" in s) throw new eG(s.error, "failed to get signature status");
                    return s.result
                }
                async getTransactionCount(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eJ(e), i = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getTransactionCount", i), n = (0, b.Ue)(s, e0((0, b.Rx)()));
                    if ("error" in n) throw new eG(n.error, "failed to get transaction count");
                    return n.result
                }
                async getTotalSupply(e) {
                    return (await this.getSupply({
                        commitment: e,
                        excludeNonCirculatingAccountsList: !0
                    })).value.total
                }
                async getInflationGovernor(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getInflationGovernor", t),
                        i = (0, b.Ue)(r, ta);
                    if ("error" in i) throw new eG(i.error, "failed to get inflation");
                    return i.result
                }
                async getInflationReward(e, t, r) {
                    let {
                        commitment: i,
                        config: s
                    } = eJ(r), n = this._buildArgs([e.map(e => e.toBase58())], i, void 0, {
                        ...s,
                        epoch: null != t ? t : s?.epoch
                    }), o = await this._rpcRequest("getInflationReward", n), a = (0, b.Ue)(o, e6);
                    if ("error" in a) throw new eG(a.error, "failed to get inflation reward");
                    return a.result
                }
                async getInflationRate() {
                    let e = await this._rpcRequest("getInflationRate", []),
                        t = (0, b.Ue)(e, tc);
                    if ("error" in t) throw new eG(t.error, "failed to get inflation rate");
                    return t.result
                }
                async getEpochInfo(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eJ(e), i = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getEpochInfo", i), n = (0, b.Ue)(s, tl);
                    if ("error" in n) throw new eG(n.error, "failed to get epoch info");
                    return n.result
                }
                async getEpochSchedule() {
                    let e = await this._rpcRequest("getEpochSchedule", []),
                        t = (0, b.Ue)(e, td);
                    if ("error" in t) throw new eG(t.error, "failed to get epoch schedule");
                    let r = t.result;
                    return new ez(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot)
                }
                async getLeaderSchedule() {
                    let e = await this._rpcRequest("getLeaderSchedule", []),
                        t = (0, b.Ue)(e, th);
                    if ("error" in t) throw new eG(t.error, "failed to get leader schedule");
                    return t.result
                }
                async getMinimumBalanceForRentExemption(e, t) {
                    let r = this._buildArgs([e], t),
                        i = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
                        s = (0, b.Ue)(i, tM);
                    return "error" in s ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : s.result
                }
                async getRecentBlockhashAndContext(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getRecentBlockhash", t),
                        i = (0, b.Ue)(r, ra);
                    if ("error" in i) throw new eG(i.error, "failed to get recent blockhash");
                    return i.result
                }
                async getRecentPerformanceSamples(e) {
                    let t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
                        r = (0, b.Ue)(t, rd);
                    if ("error" in r) throw new eG(r.error, "failed to get recent performance samples");
                    return r.result
                }
                async getFeeCalculatorForBlockhash(e, t) {
                    let r = this._buildArgs([e], t),
                        i = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
                        s = (0, b.Ue)(i, rh);
                    if ("error" in s) throw new eG(s.error, "failed to get fee calculator");
                    let {
                        context: n,
                        value: o
                    } = s.result;
                    return {
                        context: n,
                        value: null !== o ? o.feeCalculator : null
                    }
                }
                async getFeeForMessage(e, t) {
                    let r = v(e.serialize()).toString("base64"),
                        i = this._buildArgs([r], t),
                        s = await this._rpcRequest("getFeeForMessage", i),
                        n = (0, b.Ue)(s, e1((0, b.AG)((0, b.Rx)())));
                    if ("error" in n) throw new eG(n.error, "failed to get fee for message");
                    if (null === n.result) throw Error("invalid blockhash");
                    return n.result
                }
                async getRecentPrioritizationFees(e) {
                    let t = e?.lockedWritableAccounts?.map(e => e.toBase58()),
                        r = t?.length ? [t] : [],
                        i = await this._rpcRequest("getRecentPrioritizationFees", r),
                        s = (0, b.Ue)(i, tu);
                    if ("error" in s) throw new eG(s.error, "failed to get recent prioritization fees");
                    return s.result
                }
                async getRecentBlockhash(e) {
                    try {
                        return (await this.getRecentBlockhashAndContext(e)).value
                    } catch (e) {
                        throw Error("failed to get recent blockhash: " + e)
                    }
                }
                async getLatestBlockhash(e) {
                    try {
                        return (await this.getLatestBlockhashAndContext(e)).value
                    } catch (e) {
                        throw Error("failed to get recent blockhash: " + e)
                    }
                }
                async getLatestBlockhashAndContext(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eJ(e), i = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getLatestBlockhash", i), n = (0, b.Ue)(s, rc);
                    if ("error" in n) throw new eG(n.error, "failed to get latest blockhash");
                    return n.result
                }
                async isBlockhashValid(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgs([e], r, void 0, i), n = await this._rpcRequest("isBlockhashValid", s), o = (0, b.Ue)(n, ru);
                    if ("error" in o) throw new eG(o.error, "failed to determine if the blockhash `" + e + "`is valid");
                    return o.result
                }
                async getVersion() {
                    let e = await this._rpcRequest("getVersion", []),
                        t = (0, b.Ue)(e, e0(ts));
                    if ("error" in t) throw new eG(t.error, "failed to get version");
                    return t.result
                }
                async getGenesisHash() {
                    let e = await this._rpcRequest("getGenesisHash", []),
                        t = (0, b.Ue)(e, e0((0, b.Z_)()));
                    if ("error" in t) throw new eG(t.error, "failed to get genesis hash");
                    return t.result
                }
                async getBlock(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgsAtLeastConfirmed([e], r, void 0, i), n = await this._rpcRequest("getBlock", s);
                    try {
                        switch (i?.transactionDetails) {
                            case "accounts": {
                                let e = (0, b.Ue)(n, t9);
                                if ("error" in e) throw e.error;
                                return e.result
                            }
                            case "none": {
                                let e = (0, b.Ue)(n, t7);
                                if ("error" in e) throw e.error;
                                return e.result
                            }
                            default: {
                                let e = (0, b.Ue)(n, t5);
                                if ("error" in e) throw e.error;
                                let {
                                    result: t
                                } = e;
                                return t ? {
                                    ...t,
                                    transactions: t.transactions.map(({
                                        transaction: e,
                                        meta: t,
                                        version: r
                                    }) => ({
                                        meta: t,
                                        transaction: {
                                            ...e,
                                            message: e3(r, e.message)
                                        },
                                        version: r
                                    }))
                                } : null
                            }
                        }
                    } catch (e) {
                        throw new eG(e, "failed to get confirmed block")
                    }
                }
                async getParsedBlock(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i), n = await this._rpcRequest("getBlock", s);
                    try {
                        switch (i?.transactionDetails) {
                            case "accounts": {
                                let e = (0, b.Ue)(n, rt);
                                if ("error" in e) throw e.error;
                                return e.result
                            }
                            case "none": {
                                let e = (0, b.Ue)(n, rr);
                                if ("error" in e) throw e.error;
                                return e.result
                            }
                            default: {
                                let e = (0, b.Ue)(n, re);
                                if ("error" in e) throw e.error;
                                return e.result
                            }
                        }
                    } catch (e) {
                        throw new eG(e, "failed to get block")
                    }
                }
                async getBlockProduction(e) {
                    let t, r;
                    if ("string" == typeof e) r = e;
                    else if (e) {
                        let {
                            commitment: i,
                            ...s
                        } = e;
                        r = i, t = s
                    }
                    let i = this._buildArgs([], r, "base64", t),
                        s = await this._rpcRequest("getBlockProduction", i),
                        n = (0, b.Ue)(s, to);
                    if ("error" in n) throw new eG(n.error, "failed to get block production information");
                    return n.result
                }
                async getTransaction(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgsAtLeastConfirmed([e], r, void 0, i), n = await this._rpcRequest("getTransaction", s), o = (0, b.Ue)(n, rn);
                    if ("error" in o) throw new eG(o.error, "failed to get transaction");
                    let a = o.result;
                    return a ? {
                        ...a,
                        transaction: {
                            ...a.transaction,
                            message: e3(a.version, a.transaction.message)
                        }
                    } : a
                }
                async getParsedTransaction(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i), n = await this._rpcRequest("getTransaction", s), o = (0, b.Ue)(n, ro);
                    if ("error" in o) throw new eG(o.error, "failed to get transaction");
                    return o.result
                }
                async getParsedTransactions(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = e.map(e => ({
                        methodName: "getTransaction",
                        args: this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i)
                    }));
                    return (await this._rpcBatchRequest(s)).map(e => {
                        let t = (0, b.Ue)(e, ro);
                        if ("error" in t) throw new eG(t.error, "failed to get transactions");
                        return t.result
                    })
                }
                async getTransactions(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eJ(t), s = e.map(e => ({
                        methodName: "getTransaction",
                        args: this._buildArgsAtLeastConfirmed([e], r, void 0, i)
                    }));
                    return (await this._rpcBatchRequest(s)).map(e => {
                        let t = (0, b.Ue)(e, rn);
                        if ("error" in t) throw new eG(t.error, "failed to get transactions");
                        let r = t.result;
                        return r ? {
                            ...r,
                            transaction: {
                                ...r.transaction,
                                message: e3(r.version, r.transaction.message)
                            }
                        } : r
                    })
                }
                async getConfirmedBlock(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t),
                        i = await this._rpcRequest("getConfirmedBlock", r),
                        s = (0, b.Ue)(i, ri);
                    if ("error" in s) throw new eG(s.error, "failed to get confirmed block");
                    let n = s.result;
                    if (!n) throw Error("Confirmed block " + e + " not found");
                    let o = {
                        ...n,
                        transactions: n.transactions.map(({
                            transaction: e,
                            meta: t
                        }) => {
                            let r = new Q(e.message);
                            return {
                                meta: t,
                                transaction: {
                                    ...e,
                                    message: r
                                }
                            }
                        })
                    };
                    return {
                        ...o,
                        transactions: o.transactions.map(({
                            transaction: e,
                            meta: t
                        }) => ({
                            meta: t,
                            transaction: en.populate(e.message, e.signatures)
                        }))
                    }
                }
                async getBlocks(e, t, r) {
                    let i = this._buildArgsAtLeastConfirmed(void 0 !== t ? [e, t] : [e], r),
                        s = await this._rpcRequest("getBlocks", i),
                        n = (0, b.Ue)(s, e0((0, b.IX)((0, b.Rx)())));
                    if ("error" in n) throw new eG(n.error, "failed to get blocks");
                    return n.result
                }
                async getBlockSignatures(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                            transactionDetails: "signatures",
                            rewards: !1
                        }),
                        i = await this._rpcRequest("getBlock", r),
                        s = (0, b.Ue)(i, rs);
                    if ("error" in s) throw new eG(s.error, "failed to get block");
                    let n = s.result;
                    if (!n) throw Error("Block " + e + " not found");
                    return n
                }
                async getConfirmedBlockSignatures(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                            transactionDetails: "signatures",
                            rewards: !1
                        }),
                        i = await this._rpcRequest("getConfirmedBlock", r),
                        s = (0, b.Ue)(i, rs);
                    if ("error" in s) throw new eG(s.error, "failed to get confirmed block");
                    let n = s.result;
                    if (!n) throw Error("Confirmed block " + e + " not found");
                    return n
                }
                async getConfirmedTransaction(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t),
                        i = await this._rpcRequest("getConfirmedTransaction", r),
                        s = (0, b.Ue)(i, rn);
                    if ("error" in s) throw new eG(s.error, "failed to get transaction");
                    let n = s.result;
                    if (!n) return n;
                    let o = new Q(n.transaction.message),
                        a = n.transaction.signatures;
                    return {
                        ...n,
                        transaction: en.populate(o, a)
                    }
                }
                async getParsedConfirmedTransaction(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
                        i = await this._rpcRequest("getConfirmedTransaction", r),
                        s = (0, b.Ue)(i, ro);
                    if ("error" in s) throw new eG(s.error, "failed to get confirmed transaction");
                    return s.result
                }
                async getParsedConfirmedTransactions(e, t) {
                    let r = e.map(e => ({
                        methodName: "getConfirmedTransaction",
                        args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed")
                    }));
                    return (await this._rpcBatchRequest(r)).map(e => {
                        let t = (0, b.Ue)(e, ro);
                        if ("error" in t) throw new eG(t.error, "failed to get confirmed transactions");
                        return t.result
                    })
                }
                async getConfirmedSignaturesForAddress(e, t, r) {
                    let i = {},
                        s = await this.getFirstAvailableBlock();
                    for (; !("until" in i) && !(--t <= 0) && !(t < s);) try {
                        let e = await this.getConfirmedBlockSignatures(t, "finalized");
                        e.signatures.length > 0 && (i.until = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped")) continue;
                        throw e
                    }
                    let n = await this.getSlot("finalized");
                    for (; !("before" in i) && !(++r > n);) try {
                        let e = await this.getConfirmedBlockSignatures(r);
                        e.signatures.length > 0 && (i.before = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped")) continue;
                        throw e
                    }
                    return (await this.getConfirmedSignaturesForAddress2(e, i)).map(e => e.signature)
                }
                async getConfirmedSignaturesForAddress2(e, t, r) {
                    let i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
                        s = await this._rpcRequest("getConfirmedSignaturesForAddress2", i),
                        n = (0, b.Ue)(s, tP);
                    if ("error" in n) throw new eG(n.error, "failed to get confirmed signatures for address");
                    return n.result
                }
                async getSignaturesForAddress(e, t, r) {
                    let i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
                        s = await this._rpcRequest("getSignaturesForAddress", i),
                        n = (0, b.Ue)(s, tE);
                    if ("error" in n) throw new eG(n.error, "failed to get signatures for address");
                    return n.result
                }
                async getAddressLookupTable(e, t) {
                    let {
                        context: r,
                        value: i
                    } = await this.getAccountInfoAndContext(e, t), s = null;
                    return null !== i && (s = new eM({
                        key: e,
                        state: eM.deserialize(i.data)
                    })), {
                        context: r,
                        value: s
                    }
                }
                async getNonceAndContext(e, t) {
                    let {
                        context: r,
                        value: i
                    } = await this.getAccountInfoAndContext(e, t), s = null;
                    return null !== i && (s = eA.fromAccountData(i.data)), {
                        context: r,
                        value: s
                    }
                }
                async getNonce(e, t) {
                    return await this.getNonceAndContext(e, t).then(e => e.value).catch(t => {
                        throw Error("failed to get nonce for account " + e.toBase58() + ": " + t)
                    })
                }
                async requestAirdrop(e, t) {
                    let r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
                        i = (0, b.Ue)(r, rg);
                    if ("error" in i) throw new eG(i.error, `airdrop to ${e.toBase58()} failed`);
                    return i.result
                }
                async _blockhashWithExpiryBlockHeight(e) {
                    if (!e) {
                        for (; this._pollingBlockhash;) await ef(100);
                        let e = Date.now() - this._blockhashInfo.lastFetch;
                        if (null !== this._blockhashInfo.latestBlockhash && !(e >= eX)) return this._blockhashInfo.latestBlockhash
                    }
                    return await this._pollNewBlockhash()
                }
                async _pollNewBlockhash() {
                    this._pollingBlockhash = !0;
                    try {
                        let e = Date.now(),
                            t = this._blockhashInfo.latestBlockhash,
                            r = t ? t.blockhash : null;
                        for (let e = 0; e < 50; e++) {
                            let e = await this.getLatestBlockhash("finalized");
                            if (r !== e.blockhash) return this._blockhashInfo = {
                                latestBlockhash: e,
                                lastFetch: Date.now(),
                                transactionSignatures: [],
                                simulatedSignatures: []
                            }, e;
                            await ef(200)
                        }
                        throw Error(`Unable to obtain a new blockhash after ${Date.now()-e}ms`)
                    } finally {
                        this._pollingBlockhash = !1
                    }
                }
                async getStakeMinimumDelegation(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eJ(e), i = this._buildArgs([], t, "base64", r), s = await this._rpcRequest("getStakeMinimumDelegation", i), n = (0, b.Ue)(s, e1((0, b.Rx)()));
                    if ("error" in n) throw new eG(n.error, "failed to get stake minimum delegation");
                    return n.result
                }
                async simulateTransaction(e, t, r) {
                    let i;
                    if ("message" in e) {
                        let i = e.serialize(),
                            s = o.Buffer.from(i).toString("base64");
                        if (Array.isArray(t) || void 0 !== r) throw Error("Invalid arguments");
                        let n = t || {};
                        n.encoding = "base64", "commitment" in n || (n.commitment = this.commitment);
                        let a = await this._rpcRequest("simulateTransaction", [s, n]),
                            c = (0, b.Ue)(a, tn);
                        if ("error" in c) throw Error("failed to simulate transaction: " + c.error.message);
                        return c.result
                    }
                    if (e instanceof en ? ((i = new en).feePayer = e.feePayer, i.instructions = e.instructions, i.nonceInfo = e.nonceInfo, i.signatures = e.signatures) : (i = en.populate(e))._message = i._json = void 0, void 0 !== t && !Array.isArray(t)) throw Error("Invalid arguments");
                    if (i.nonceInfo && t) i.sign(...t);
                    else {
                        let e = this._disableBlockhashCaching;
                        for (;;) {
                            let r = await this._blockhashWithExpiryBlockHeight(e);
                            if (i.lastValidBlockHeight = r.lastValidBlockHeight, i.recentBlockhash = r.blockhash, !t) break;
                            if (i.sign(...t), !i.signature) throw Error("!signature");
                            let s = i.signature.toString("base64");
                            if (this._blockhashInfo.simulatedSignatures.includes(s) || this._blockhashInfo.transactionSignatures.includes(s)) e = !0;
                            else {
                                this._blockhashInfo.simulatedSignatures.push(s);
                                break
                            }
                        }
                    }
                    let s = i._compile(),
                        n = s.serialize(),
                        a = i._serialize(n).toString("base64"),
                        c = {
                            encoding: "base64",
                            commitment: this.commitment
                        };
                    if (r) {
                        let e = (Array.isArray(r) ? r : s.nonProgramIds()).map(e => e.toBase58());
                        c.accounts = {
                            encoding: "base64",
                            addresses: e
                        }
                    }
                    t && (c.sigVerify = !0);
                    let u = await this._rpcRequest("simulateTransaction", [a, c]),
                        l = (0, b.Ue)(u, tn);
                    if ("error" in l) {
                        let e;
                        if ("data" in l.error && (e = l.error.data.logs) && Array.isArray(e)) {
                            let t = "\n    ",
                                r = t + e.join(t);
                            console.error(l.error.message, r)
                        }
                        throw new eU("failed to simulate transaction: " + l.error.message, e)
                    }
                    return l.result
                }
                async sendTransaction(e, t, r) {
                    if ("version" in e) {
                        if (t && Array.isArray(t)) throw Error("Invalid arguments");
                        let r = e.serialize();
                        return await this.sendRawTransaction(r, t)
                    }
                    if (void 0 === t || !Array.isArray(t)) throw Error("Invalid arguments");
                    if (e.nonceInfo) e.sign(...t);
                    else {
                        let r = this._disableBlockhashCaching;
                        for (;;) {
                            let i = await this._blockhashWithExpiryBlockHeight(r);
                            if (e.lastValidBlockHeight = i.lastValidBlockHeight, e.recentBlockhash = i.blockhash, e.sign(...t), !e.signature) throw Error("!signature");
                            let s = e.signature.toString("base64");
                            if (this._blockhashInfo.transactionSignatures.includes(s)) r = !0;
                            else {
                                this._blockhashInfo.transactionSignatures.push(s);
                                break
                            }
                        }
                    }
                    let i = e.serialize();
                    return await this.sendRawTransaction(i, r)
                }
                async sendRawTransaction(e, t) {
                    let r = v(e).toString("base64");
                    return await this.sendEncodedTransaction(r, t)
                }
                async sendEncodedTransaction(e, t) {
                    let r = {
                            encoding: "base64"
                        },
                        i = t && t.skipPreflight,
                        s = t && t.preflightCommitment || this.commitment;
                    t && null != t.maxRetries && (r.maxRetries = t.maxRetries), t && null != t.minContextSlot && (r.minContextSlot = t.minContextSlot), i && (r.skipPreflight = i), s && (r.preflightCommitment = s);
                    let n = await this._rpcRequest("sendTransaction", [e, r]),
                        o = (0, b.Ue)(n, rp);
                    if ("error" in o) {
                        let e;
                        throw "data" in o.error && (e = o.error.data.logs), new eU("failed to send transaction: " + o.error.message, e)
                    }
                    return o.result
                }
                _wsOnOpen() {
                    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
                        (async () => {
                            try {
                                await this._rpcWebSocket.notify("ping")
                            } catch {}
                        })()
                    }, 5e3), this._updateSubscriptions()
                }
                _wsOnError(e) {
                    this._rpcWebSocketConnected = !1, console.error("ws error:", e.message)
                }
                _wsOnClose(e) {
                    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), 1e3 === e) {
                        this._updateSubscriptions();
                        return
                    }
                    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, t]) => {
                        this._setSubscription(e, {
                            ...t,
                            state: "pending"
                        })
                    })
                }
                _setSubscription(e, t) {
                    let r = this._subscriptionsByHash[e]?.state;
                    if (this._subscriptionsByHash[e] = t, r !== t.state) {
                        let r = this._subscriptionStateChangeCallbacksByHash[e];
                        r && r.forEach(e => {
                            try {
                                e(t.state)
                            } catch {}
                        })
                    }
                }
                _onSubscriptionStateChange(e, t) {
                    let r = this._subscriptionHashByClientSubscriptionId[e];
                    if (null == r) return () => {};
                    let i = this._subscriptionStateChangeCallbacksByHash[r] ||= new Set;
                    return i.add(t), () => {
                        i.delete(t), 0 === i.size && delete this._subscriptionStateChangeCallbacksByHash[r]
                    }
                }
                async _updateSubscriptions() {
                    if (0 === Object.keys(this._subscriptionsByHash).length) {
                        this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
                            this._rpcWebSocketIdleTimeout = null;
                            try {
                                this._rpcWebSocket.close()
                            } catch (e) {
                                e instanceof Error && console.log(`Error when closing socket connection: ${e.message}`)
                            }
                        }, 500));
                        return
                    }
                    if (null !== this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
                        this._rpcWebSocket.connect();
                        return
                    }
                    let e = this._rpcWebSocketGeneration,
                        t = () => e === this._rpcWebSocketGeneration;
                    await Promise.all(Object.keys(this._subscriptionsByHash).map(async e => {
                        let r = this._subscriptionsByHash[e];
                        if (void 0 !== r) switch (r.state) {
                            case "pending":
                            case "unsubscribed":
                                if (0 === r.callbacks.size) {
                                    delete this._subscriptionsByHash[e], "unsubscribed" === r.state && delete this._subscriptionCallbacksByServerSubscriptionId[r.serverSubscriptionId], await this._updateSubscriptions();
                                    return
                                }
                                await (async () => {
                                    let {
                                        args: i,
                                        method: s
                                    } = r;
                                    try {
                                        this._setSubscription(e, {
                                            ...r,
                                            state: "subscribing"
                                        });
                                        let t = await this._rpcWebSocket.call(s, i);
                                        this._setSubscription(e, {
                                            ...r,
                                            serverSubscriptionId: t,
                                            state: "subscribed"
                                        }), this._subscriptionCallbacksByServerSubscriptionId[t] = r.callbacks, await this._updateSubscriptions()
                                    } catch (n) {
                                        if (n instanceof Error && console.error(`${s} error for argument`, i, n.message), !t()) return;
                                        this._setSubscription(e, {
                                            ...r,
                                            state: "pending"
                                        }), await this._updateSubscriptions()
                                    }
                                })();
                                break;
                            case "subscribed":
                                0 === r.callbacks.size && await (async () => {
                                    let {
                                        serverSubscriptionId: i,
                                        unsubscribeMethod: s
                                    } = r;
                                    if (this._subscriptionsAutoDisposedByRpc.has(i)) this._subscriptionsAutoDisposedByRpc.delete(i);
                                    else {
                                        this._setSubscription(e, {
                                            ...r,
                                            state: "unsubscribing"
                                        }), this._setSubscription(e, {
                                            ...r,
                                            state: "unsubscribing"
                                        });
                                        try {
                                            await this._rpcWebSocket.call(s, [i])
                                        } catch (i) {
                                            if (i instanceof Error && console.error(`${s} error:`, i.message), !t()) return;
                                            this._setSubscription(e, {
                                                ...r,
                                                state: "subscribed"
                                            }), await this._updateSubscriptions();
                                            return
                                        }
                                    }
                                    this._setSubscription(e, {
                                        ...r,
                                        state: "unsubscribed"
                                    }), await this._updateSubscriptions()
                                })()
                        }
                    }))
                }
                _handleServerNotification(e, t) {
                    let r = this._subscriptionCallbacksByServerSubscriptionId[e];
                    void 0 !== r && r.forEach(e => {
                        try {
                            e(...t)
                        } catch (e) {
                            console.error(e)
                        }
                    })
                }
                _wsOnAccountNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, tv);
                    this._handleServerNotification(r, [t.value, t.context])
                }
                _makeSubscription(e, t) {
                    let r = this._nextClientSubscriptionId++,
                        i = eK([e.method, t], !0),
                        s = this._subscriptionsByHash[i];
                    return void 0 === s ? this._subscriptionsByHash[i] = {
                        ...e,
                        args: t,
                        callbacks: new Set([e.callback]),
                        state: "pending"
                    } : s.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[r] = i, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
                        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
                        let t = this._subscriptionsByHash[i];
                        J(void 0 !== t, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), t.callbacks.delete(e.callback), await this._updateSubscriptions()
                    }, this._updateSubscriptions(), r
                }
                onAccountChange(e, t, r) {
                    let i = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64");
                    return this._makeSubscription({
                        callback: t,
                        method: "accountSubscribe",
                        unsubscribeMethod: "accountUnsubscribe"
                    }, i)
                }
                async removeAccountChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "account change")
                }
                _wsOnProgramAccountNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, tT);
                    this._handleServerNotification(r, [{
                        accountId: t.value.pubkey,
                        accountInfo: t.value.account
                    }, t.context])
                }
                onProgramAccountChange(e, t, r, i) {
                    let s = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64", i ? {
                        filters: i
                    } : void 0);
                    return this._makeSubscription({
                        callback: t,
                        method: "programSubscribe",
                        unsubscribeMethod: "programUnsubscribe"
                    }, s)
                }
                async removeProgramAccountChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "program account change")
                }
                onLogs(e, t, r) {
                    let i = this._buildArgs(["object" == typeof e ? {
                        mentions: [e.toString()]
                    } : e], r || this._commitment || "finalized");
                    return this._makeSubscription({
                        callback: t,
                        method: "logsSubscribe",
                        unsubscribeMethod: "logsUnsubscribe"
                    }, i)
                }
                async removeOnLogsListener(e) {
                    await this._unsubscribeClientSubscription(e, "logs")
                }
                _wsOnLogsNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, rb);
                    this._handleServerNotification(r, [t.value, t.context])
                }
                _wsOnSlotNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, tL);
                    this._handleServerNotification(r, [t])
                }
                onSlotChange(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "slotSubscribe",
                        unsubscribeMethod: "slotUnsubscribe"
                    }, [])
                }
                async removeSlotChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "slot change")
                }
                _wsOnSlotUpdatesNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, tW);
                    this._handleServerNotification(r, [t])
                }
                onSlotUpdate(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "slotsUpdatesSubscribe",
                        unsubscribeMethod: "slotsUpdatesUnsubscribe"
                    }, [])
                }
                async removeSlotUpdateListener(e) {
                    await this._unsubscribeClientSubscription(e, "slot update")
                }
                async _unsubscribeClientSubscription(e, t) {
                    let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
                    r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
                }
                _buildArgs(e, t, r, i) {
                    let s = t || this._commitment;
                    if (s || r || i) {
                        let t = {};
                        r && (t.encoding = r), s && (t.commitment = s), i && (t = Object.assign(t, i)), e.push(t)
                    }
                    return e
                }
                _buildArgsAtLeastConfirmed(e, t, r, i) {
                    let s = t || this._commitment;
                    if (s && !["confirmed", "finalized"].includes(s)) throw Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
                    return this._buildArgs(e, t, r, i)
                }
                _wsOnSignatureNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, tK);
                    "receivedSignature" !== t.value && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, "receivedSignature" === t.value ? [{
                        type: "received"
                    }, t.context] : [{
                        type: "status",
                        result: t.value
                    }, t.context])
                }
                onSignature(e, t, r) {
                    let i = this._buildArgs([e], r || this._commitment || "finalized"),
                        s = this._makeSubscription({
                            callback: (e, r) => {
                                if ("status" === e.type) {
                                    t(e.result, r);
                                    try {
                                        this.removeSignatureListener(s)
                                    } catch (e) {}
                                }
                            },
                            method: "signatureSubscribe",
                            unsubscribeMethod: "signatureUnsubscribe"
                        }, i);
                    return s
                }
                onSignatureWithOptions(e, t, r) {
                    let {
                        commitment: i,
                        ...s
                    } = {
                        ...r,
                        commitment: r && r.commitment || this._commitment || "finalized"
                    }, n = this._buildArgs([e], i, void 0, s), o = this._makeSubscription({
                        callback: (e, r) => {
                            t(e, r);
                            try {
                                this.removeSignatureListener(o)
                            } catch (e) {}
                        },
                        method: "signatureSubscribe",
                        unsubscribeMethod: "signatureUnsubscribe"
                    }, n);
                    return o
                }
                async removeSignatureListener(e) {
                    await this._unsubscribeClientSubscription(e, "signature result")
                }
                _wsOnRootNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, tN);
                    this._handleServerNotification(r, [t])
                }
                onRootChange(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "rootSubscribe",
                        unsubscribeMethod: "rootUnsubscribe"
                    }, [])
                }
                async removeRootChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "root change")
                }
            }
            class rk {
                constructor(e) {
                    this._keypair = void 0, this._keypair = e ?? A()
                }
                static generate() {
                    return new rk(A())
                }
                static fromSecretKey(e, t) {
                    if (64 !== e.byteLength) throw Error("bad secret key size");
                    let r = e.slice(32, 64);
                    if (!t || !t.skipValidation) {
                        let t = R(e.slice(0, 32));
                        for (let e = 0; e < 32; e++)
                            if (r[e] !== t[e]) throw Error("provided secretKey is invalid")
                    }
                    return new rk({
                        publicKey: r,
                        secretKey: e
                    })
                }
                static fromSeed(e) {
                    let t = R(e),
                        r = new Uint8Array(64);
                    return r.set(e), r.set(t, 32), new rk({
                        publicKey: t,
                        secretKey: r
                    })
                }
                get publicKey() {
                    return new K(this._keypair.publicKey)
                }
                get secretKey() {
                    return new Uint8Array(this._keypair.secretKey)
                }
            }
            let rS = Object.freeze({
                CreateLookupTable: {
                    index: 0,
                    layout: p.struct([p.u32("instruction"), ex("recentSlot"), p.u8("bumpSeed")])
                },
                FreezeLookupTable: {
                    index: 1,
                    layout: p.struct([p.u32("instruction")])
                },
                ExtendLookupTable: {
                    index: 2,
                    layout: p.struct([p.u32("instruction"), ex(), p.seq(H(), p.offset(p.u32(), -8), "addresses")])
                },
                DeactivateLookupTable: {
                    index: 3,
                    layout: p.struct([p.u32("instruction")])
                },
                CloseLookupTable: {
                    index: 4,
                    layout: p.struct([p.u32("instruction")])
                }
            });
            class rw {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = p.u32("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(rS))
                        if (i.index == r) {
                            t = e;
                            break
                        } if (!t) throw Error("Invalid Instruction. Should be a LookupTable Instruction");
                    return t
                }
                static decodeCreateLookupTable(e) {
                    this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
                    let {
                        recentSlot: t
                    } = eS(rS.CreateLookupTable, e.data);
                    return {
                        authority: e.keys[1].pubkey,
                        payer: e.keys[2].pubkey,
                        recentSlot: Number(t)
                    }
                }
                static decodeExtendLookupTable(e) {
                    if (this.checkProgramId(e.programId), e.keys.length < 2) throw Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
                    let {
                        addresses: t
                    } = eS(rS.ExtendLookupTable, e.data);
                    return {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey,
                        payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
                        addresses: t.map(e => new K(e))
                    }
                }
                static decodeCloseLookupTable(e) {
                    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 3), {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey,
                        recipient: e.keys[2].pubkey
                    }
                }
                static decodeFreezeLookupTable(e) {
                    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey
                    }
                }
                static decodeDeactivateLookupTable(e) {
                    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rI.programId)) throw Error("invalid instruction; programId is not AddressLookupTable Program")
                }
                static checkKeysLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            class rI {
                constructor() {}
                static createLookupTable(e) {
                    let [t, r] = K.findProgramAddressSync([e.authority.toBuffer(), (0, y.toBufferLE)(BigInt(e.recentSlot), 8)], this.programId), i = ek(rS.CreateLookupTable, {
                        recentSlot: BigInt(e.recentSlot),
                        bumpSeed: r
                    }), s = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.authority,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: e.payer,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: ev.programId,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return [new es({
                        programId: this.programId,
                        keys: s,
                        data: i
                    }), t]
                }
                static freezeLookupTable(e) {
                    let t = ek(rS.FreezeLookupTable),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }];
                    return new es({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
                static extendLookupTable(e) {
                    let t = ek(rS.ExtendLookupTable, {
                            addresses: e.addresses.map(e => e.toBytes())
                        }),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }];
                    return e.payer && r.push({
                        pubkey: e.payer,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: ev.programId,
                        isSigner: !1,
                        isWritable: !1
                    }), new es({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
                static deactivateLookupTable(e) {
                    let t = ek(rS.DeactivateLookupTable),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }];
                    return new es({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
                static closeLookupTable(e) {
                    let t = ek(rS.CloseLookupTable),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }, {
                            pubkey: e.recipient,
                            isSigner: !1,
                            isWritable: !0
                        }];
                    return new es({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
            }
            rI.programId = new K("AddressLookupTab1e1111111111111111111111111");
            class r_ {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = p.u8("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(rA))
                        if (i.index == r) {
                            t = e;
                            break
                        } if (!t) throw Error("Instruction type incorrect; not a ComputeBudgetInstruction");
                    return t
                }
                static decodeRequestUnits(e) {
                    this.checkProgramId(e.programId);
                    let {
                        units: t,
                        additionalFee: r
                    } = eS(rA.RequestUnits, e.data);
                    return {
                        units: t,
                        additionalFee: r
                    }
                }
                static decodeRequestHeapFrame(e) {
                    this.checkProgramId(e.programId);
                    let {
                        bytes: t
                    } = eS(rA.RequestHeapFrame, e.data);
                    return {
                        bytes: t
                    }
                }
                static decodeSetComputeUnitLimit(e) {
                    this.checkProgramId(e.programId);
                    let {
                        units: t
                    } = eS(rA.SetComputeUnitLimit, e.data);
                    return {
                        units: t
                    }
                }
                static decodeSetComputeUnitPrice(e) {
                    this.checkProgramId(e.programId);
                    let {
                        microLamports: t
                    } = eS(rA.SetComputeUnitPrice, e.data);
                    return {
                        microLamports: t
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rR.programId)) throw Error("invalid instruction; programId is not ComputeBudgetProgram")
                }
            }
            let rA = Object.freeze({
                RequestUnits: {
                    index: 0,
                    layout: p.struct([p.u8("instruction"), p.u32("units"), p.u32("additionalFee")])
                },
                RequestHeapFrame: {
                    index: 1,
                    layout: p.struct([p.u8("instruction"), p.u32("bytes")])
                },
                SetComputeUnitLimit: {
                    index: 2,
                    layout: p.struct([p.u8("instruction"), p.u32("units")])
                },
                SetComputeUnitPrice: {
                    index: 3,
                    layout: p.struct([p.u8("instruction"), ex("microLamports")])
                }
            });
            class rR {
                constructor() {}
                static requestUnits(e) {
                    let t = ek(rA.RequestUnits, e);
                    return new es({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
                static requestHeapFrame(e) {
                    let t = ek(rA.RequestHeapFrame, e);
                    return new es({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
                static setComputeUnitLimit(e) {
                    let t = ek(rA.SetComputeUnitLimit, e);
                    return new es({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
                static setComputeUnitPrice(e) {
                    let t = ek(rA.SetComputeUnitPrice, {
                        microLamports: BigInt(e.microLamports)
                    });
                    return new es({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
            }
            rR.programId = new K("ComputeBudget111111111111111111111111111111");
            let rx = p.struct([p.u8("numSignatures"), p.u8("padding"), p.u16("signatureOffset"), p.u16("signatureInstructionIndex"), p.u16("publicKeyOffset"), p.u16("publicKeyInstructionIndex"), p.u16("messageDataOffset"), p.u16("messageDataSize"), p.u16("messageInstructionIndex")]);
            class rP {
                constructor() {}
                static createInstructionWithPublicKey(e) {
                    let {
                        publicKey: t,
                        message: r,
                        signature: i,
                        instructionIndex: s
                    } = e;
                    J(32 === t.length, `Public Key must be 32 bytes but received ${t.length} bytes`), J(64 === i.length, `Signature must be 64 bytes but received ${i.length} bytes`);
                    let n = rx.span,
                        a = n + t.length,
                        c = a + i.length,
                        u = o.Buffer.alloc(c + r.length),
                        l = null == s ? 65535 : s;
                    return rx.encode({
                        numSignatures: 1,
                        padding: 0,
                        signatureOffset: a,
                        signatureInstructionIndex: l,
                        publicKeyOffset: n,
                        publicKeyInstructionIndex: l,
                        messageDataOffset: c,
                        messageDataSize: r.length,
                        messageInstructionIndex: l
                    }, u), u.fill(t, n), u.fill(i, a), u.fill(r, c), new es({
                        keys: [],
                        programId: rP.programId,
                        data: u
                    })
                }
                static createInstructionWithPrivateKey(e) {
                    let {
                        privateKey: t,
                        message: r,
                        instructionIndex: i
                    } = e;
                    J(64 === t.length, `Private key must be 64 bytes but received ${t.length} bytes`);
                    try {
                        let e = rk.fromSecretKey(t),
                            s = e.publicKey.toBytes(),
                            n = P(r, e.secretKey);
                        return this.createInstructionWithPublicKey({
                            publicKey: s,
                            message: r,
                            signature: n,
                            instructionIndex: i
                        })
                    } catch (e) {
                        throw Error(`Error creating instruction; ${e}`)
                    }
                }
            }
            rP.programId = new K("Ed25519SigVerify111111111111111111111111111");
            let rE = (e, t) => {
                let r = I.kA.sign(e, t);
                return [r.toCompactRawBytes(), r.recovery]
            };
            I.kA.utils.isValidPrivateKey;
            let rv = I.kA.getPublicKey,
                rB = p.struct([p.u8("numSignatures"), p.u16("signatureOffset"), p.u8("signatureInstructionIndex"), p.u16("ethAddressOffset"), p.u8("ethAddressInstructionIndex"), p.u16("messageDataOffset"), p.u16("messageDataSize"), p.u8("messageInstructionIndex"), p.blob(20, "ethAddress"), p.blob(64, "signature"), p.u8("recoveryId")]);
            class rT {
                constructor() {}
                static publicKeyToEthAddress(e) {
                    J(64 === e.length, `Public key must be 64 bytes but received ${e.length} bytes`);
                    try {
                        return o.Buffer.from((0, w.fr)(v(e))).slice(-20)
                    } catch (e) {
                        throw Error(`Error constructing Ethereum address: ${e}`)
                    }
                }
                static createInstructionWithPublicKey(e) {
                    let {
                        publicKey: t,
                        message: r,
                        signature: i,
                        recoveryId: s,
                        instructionIndex: n
                    } = e;
                    return rT.createInstructionWithEthAddress({
                        ethAddress: rT.publicKeyToEthAddress(t),
                        message: r,
                        signature: i,
                        recoveryId: s,
                        instructionIndex: n
                    })
                }
                static createInstructionWithEthAddress(e) {
                    let t;
                    let {
                        ethAddress: r,
                        message: i,
                        signature: s,
                        recoveryId: n,
                        instructionIndex: a = 0
                    } = e;
                    J(20 === (t = "string" == typeof r ? r.startsWith("0x") ? o.Buffer.from(r.substr(2), "hex") : o.Buffer.from(r, "hex") : r).length, `Address must be 20 bytes but received ${t.length} bytes`);
                    let c = 12 + t.length,
                        u = c + s.length + 1,
                        l = o.Buffer.alloc(rB.span + i.length);
                    return rB.encode({
                        numSignatures: 1,
                        signatureOffset: c,
                        signatureInstructionIndex: a,
                        ethAddressOffset: 12,
                        ethAddressInstructionIndex: a,
                        messageDataOffset: u,
                        messageDataSize: i.length,
                        messageInstructionIndex: a,
                        signature: v(s),
                        ethAddress: v(t),
                        recoveryId: n
                    }, l), l.fill(v(i), rB.span), new es({
                        keys: [],
                        programId: rT.programId,
                        data: l
                    })
                }
                static createInstructionWithPrivateKey(e) {
                    let {
                        privateKey: t,
                        message: r,
                        instructionIndex: i
                    } = e;
                    J(32 === t.length, `Private key must be 32 bytes but received ${t.length} bytes`);
                    try {
                        let e = v(t),
                            s = rv(e, !1).slice(1),
                            n = o.Buffer.from((0, w.fr)(v(r))),
                            [a, c] = rE(n, e);
                        return this.createInstructionWithPublicKey({
                            publicKey: s,
                            message: r,
                            signature: a,
                            recoveryId: c,
                            instructionIndex: i
                        })
                    } catch (e) {
                        throw Error(`Error creating instruction; ${e}`)
                    }
                }
            }
            rT.programId = new K("KeccakSecp256k11111111111111111111111111111");
            let rC = new K("StakeConfig11111111111111111111111111111111");
            class rL {
                constructor(e, t) {
                    this.staker = void 0, this.withdrawer = void 0, this.staker = e, this.withdrawer = t
                }
            }
            class rO {
                constructor(e, t, r) {
                    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r
                }
            }
            rO.default = new rO(0, 0, K.default);
            class rW {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = p.u32("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(rK))
                        if (i.index == r) {
                            t = e;
                            break
                        } if (!t) throw Error("Instruction type incorrect; not a StakeInstruction");
                    return t
                }
                static decodeInitialize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        authorized: t,
                        lockup: r
                    } = eS(rK.Initialize, e.data);
                    return {
                        stakePubkey: e.keys[0].pubkey,
                        authorized: new rL(new K(t.staker), new K(t.withdrawer)),
                        lockup: new rO(r.unixTimestamp, r.epoch, new K(r.custodian))
                    }
                }
                static decodeDelegate(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 6), eS(rK.Delegate, e.data), {
                        stakePubkey: e.keys[0].pubkey,
                        votePubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[5].pubkey
                    }
                }
                static decodeAuthorize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        newAuthorized: t,
                        stakeAuthorizationType: r
                    } = eS(rK.Authorize, e.data), i = {
                        stakePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey,
                        newAuthorizedPubkey: new K(t),
                        stakeAuthorizationType: {
                            index: r
                        }
                    };
                    return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey), i
                }
                static decodeAuthorizeWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        newAuthorized: t,
                        stakeAuthorizationType: r,
                        authoritySeed: i,
                        authorityOwner: s
                    } = eS(rK.AuthorizeWithSeed, e.data), n = {
                        stakePubkey: e.keys[0].pubkey,
                        authorityBase: e.keys[1].pubkey,
                        authoritySeed: i,
                        authorityOwner: new K(s),
                        newAuthorizedPubkey: new K(t),
                        stakeAuthorizationType: {
                            index: r
                        }
                    };
                    return e.keys.length > 3 && (n.custodianPubkey = e.keys[3].pubkey), n
                }
                static decodeSplit(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        lamports: t
                    } = eS(rK.Split, e.data);
                    return {
                        stakePubkey: e.keys[0].pubkey,
                        splitStakePubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[2].pubkey,
                        lamports: t
                    }
                }
                static decodeMerge(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), eS(rK.Merge, e.data), {
                        stakePubkey: e.keys[0].pubkey,
                        sourceStakePubKey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[4].pubkey
                    }
                }
                static decodeWithdraw(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
                    let {
                        lamports: t
                    } = eS(rK.Withdraw, e.data), r = {
                        stakePubkey: e.keys[0].pubkey,
                        toPubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[4].pubkey,
                        lamports: t
                    };
                    return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r
                }
                static decodeDeactivate(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), eS(rK.Deactivate, e.data), {
                        stakePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rz.programId)) throw Error("invalid instruction; programId is not StakeProgram")
                }
                static checkKeyLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            let rK = Object.freeze({
                    Initialize: {
                        index: 0,
                        layout: p.struct([p.u32("instruction"), ((e = "authorized") => p.struct([H("staker"), H("withdrawer")], e))(), ((e = "lockup") => p.struct([p.ns64("unixTimestamp"), p.ns64("epoch"), H("custodian")], e))()])
                    },
                    Authorize: {
                        index: 1,
                        layout: p.struct([p.u32("instruction"), H("newAuthorized"), p.u32("stakeAuthorizationType")])
                    },
                    Delegate: {
                        index: 2,
                        layout: p.struct([p.u32("instruction")])
                    },
                    Split: {
                        index: 3,
                        layout: p.struct([p.u32("instruction"), p.ns64("lamports")])
                    },
                    Withdraw: {
                        index: 4,
                        layout: p.struct([p.u32("instruction"), p.ns64("lamports")])
                    },
                    Deactivate: {
                        index: 5,
                        layout: p.struct([p.u32("instruction")])
                    },
                    Merge: {
                        index: 7,
                        layout: p.struct([p.u32("instruction")])
                    },
                    AuthorizeWithSeed: {
                        index: 8,
                        layout: p.struct([p.u32("instruction"), H("newAuthorized"), p.u32("stakeAuthorizationType"), $("authoritySeed"), H("authorityOwner")])
                    }
                }),
                rN = Object.freeze({
                    Staker: {
                        index: 0
                    },
                    Withdrawer: {
                        index: 1
                    }
                });
            class rz {
                constructor() {}
                static initialize(e) {
                    let {
                        stakePubkey: t,
                        authorized: r,
                        lockup: i
                    } = e, s = i || rO.default, n = ek(rK.Initialize, {
                        authorized: {
                            staker: v(r.staker.toBuffer()),
                            withdrawer: v(r.withdrawer.toBuffer())
                        },
                        lockup: {
                            unixTimestamp: s.unixTimestamp,
                            epoch: s.epoch,
                            custodian: v(s.custodian.toBuffer())
                        }
                    });
                    return new es({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: eh,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
                static createAccountWithSeed(e) {
                    let t = new en;
                    t.add(ev.createAccountWithSeed({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.stakePubkey,
                        basePubkey: e.basePubkey,
                        seed: e.seed,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    }));
                    let {
                        stakePubkey: r,
                        authorized: i,
                        lockup: s
                    } = e;
                    return t.add(this.initialize({
                        stakePubkey: r,
                        authorized: i,
                        lockup: s
                    }))
                }
                static createAccount(e) {
                    let t = new en;
                    t.add(ev.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.stakePubkey,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    }));
                    let {
                        stakePubkey: r,
                        authorized: i,
                        lockup: s
                    } = e;
                    return t.add(this.initialize({
                        stakePubkey: r,
                        authorized: i,
                        lockup: s
                    }))
                }
                static delegate(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        votePubkey: i
                    } = e, s = ek(rK.Delegate);
                    return new en().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: ec,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: eb,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: rC,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static authorize(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        newAuthorizedPubkey: i,
                        stakeAuthorizationType: s,
                        custodianPubkey: n
                    } = e, o = ek(rK.Authorize, {
                        newAuthorized: v(i.toBuffer()),
                        stakeAuthorizationType: s.index
                    }), a = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ec,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return n && a.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }), new en().add({
                        keys: a,
                        programId: this.programId,
                        data: o
                    })
                }
                static authorizeWithSeed(e) {
                    let {
                        stakePubkey: t,
                        authorityBase: r,
                        authoritySeed: i,
                        authorityOwner: s,
                        newAuthorizedPubkey: n,
                        stakeAuthorizationType: o,
                        custodianPubkey: a
                    } = e, c = ek(rK.AuthorizeWithSeed, {
                        newAuthorized: v(n.toBuffer()),
                        stakeAuthorizationType: o.index,
                        authoritySeed: i,
                        authorityOwner: v(s.toBuffer())
                    }), u = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: ec,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return a && u.push({
                        pubkey: a,
                        isSigner: !0,
                        isWritable: !1
                    }), new en().add({
                        keys: u,
                        programId: this.programId,
                        data: c
                    })
                }
                static splitInstruction(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: i,
                        lamports: s
                    } = e, n = ek(rK.Split, {
                        lamports: s
                    });
                    return new es({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
                static split(e) {
                    let t = new en;
                    return t.add(ev.createAccount({
                        fromPubkey: e.authorizedPubkey,
                        newAccountPubkey: e.splitStakePubkey,
                        lamports: 0,
                        space: this.space,
                        programId: this.programId
                    })), t.add(this.splitInstruction(e))
                }
                static splitWithSeed(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: i,
                        basePubkey: s,
                        seed: n,
                        lamports: o
                    } = e, a = new en;
                    return a.add(ev.allocate({
                        accountPubkey: i,
                        basePubkey: s,
                        seed: n,
                        space: this.space,
                        programId: this.programId
                    })), a.add(this.splitInstruction({
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: i,
                        lamports: o
                    }))
                }
                static merge(e) {
                    let {
                        stakePubkey: t,
                        sourceStakePubKey: r,
                        authorizedPubkey: i
                    } = e, s = ek(rK.Merge);
                    return new en().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ec,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: eb,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: i,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static withdraw(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        toPubkey: i,
                        lamports: s,
                        custodianPubkey: n
                    } = e, o = ek(rK.Withdraw, {
                        lamports: s
                    }), a = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: ec,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: eb,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return n && a.push({
                        pubkey: n,
                        isSigner: !0,
                        isWritable: !1
                    }), new en().add({
                        keys: a,
                        programId: this.programId,
                        data: o
                    })
                }
                static deactivate(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r
                    } = e, i = ek(rK.Deactivate);
                    return new en().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ec,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: i
                    })
                }
            }
            rz.programId = new K("Stake11111111111111111111111111111111111111"), rz.space = 200;
            class rU {
                constructor(e, t, r, i) {
                    this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = e, this.authorizedVoter = t, this.authorizedWithdrawer = r, this.commission = i
                }
            }
            class rq {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = p.u32("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(rG))
                        if (i.index == r) {
                            t = e;
                            break
                        } if (!t) throw Error("Instruction type incorrect; not a VoteInstruction");
                    return t
                }
                static decodeInitializeAccount(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
                    let {
                        voteInit: t
                    } = eS(rG.InitializeAccount, e.data);
                    return {
                        votePubkey: e.keys[0].pubkey,
                        nodePubkey: e.keys[3].pubkey,
                        voteInit: new rU(new K(t.nodePubkey), new K(t.authorizedVoter), new K(t.authorizedWithdrawer), t.commission)
                    }
                }
                static decodeAuthorize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        newAuthorized: t,
                        voteAuthorizationType: r
                    } = eS(rG.Authorize, e.data);
                    return {
                        votePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey,
                        newAuthorizedPubkey: new K(t),
                        voteAuthorizationType: {
                            index: r
                        }
                    }
                }
                static decodeAuthorizeWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        voteAuthorizeWithSeedArgs: {
                            currentAuthorityDerivedKeyOwnerPubkey: t,
                            currentAuthorityDerivedKeySeed: r,
                            newAuthorized: i,
                            voteAuthorizationType: s
                        }
                    } = eS(rG.AuthorizeWithSeed, e.data);
                    return {
                        currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
                        currentAuthorityDerivedKeyOwnerPubkey: new K(t),
                        currentAuthorityDerivedKeySeed: r,
                        newAuthorizedPubkey: new K(i),
                        voteAuthorizationType: {
                            index: s
                        },
                        votePubkey: e.keys[0].pubkey
                    }
                }
                static decodeWithdraw(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        lamports: t
                    } = eS(rG.Withdraw, e.data);
                    return {
                        votePubkey: e.keys[0].pubkey,
                        authorizedWithdrawerPubkey: e.keys[2].pubkey,
                        lamports: t,
                        toPubkey: e.keys[1].pubkey
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rV.programId)) throw Error("invalid instruction; programId is not VoteProgram")
                }
                static checkKeyLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            let rG = Object.freeze({
                    InitializeAccount: {
                        index: 0,
                        layout: p.struct([p.u32("instruction"), ((e = "voteInit") => p.struct([H("nodePubkey"), H("authorizedVoter"), H("authorizedWithdrawer"), p.u8("commission")], e))()])
                    },
                    Authorize: {
                        index: 1,
                        layout: p.struct([p.u32("instruction"), H("newAuthorized"), p.u32("voteAuthorizationType")])
                    },
                    Withdraw: {
                        index: 3,
                        layout: p.struct([p.u32("instruction"), p.ns64("lamports")])
                    },
                    AuthorizeWithSeed: {
                        index: 10,
                        layout: p.struct([p.u32("instruction"), ((e = "voteAuthorizeWithSeedArgs") => p.struct([p.u32("voteAuthorizationType"), H("currentAuthorityDerivedKeyOwnerPubkey"), $("currentAuthorityDerivedKeySeed"), H("newAuthorized")], e))()])
                    }
                }),
                rj = Object.freeze({
                    Voter: {
                        index: 0
                    },
                    Withdrawer: {
                        index: 1
                    }
                });
            class rV {
                constructor() {}
                static initializeAccount(e) {
                    let {
                        votePubkey: t,
                        nodePubkey: r,
                        voteInit: i
                    } = e, s = ek(rG.InitializeAccount, {
                        voteInit: {
                            nodePubkey: v(i.nodePubkey.toBuffer()),
                            authorizedVoter: v(i.authorizedVoter.toBuffer()),
                            authorizedWithdrawer: v(i.authorizedWithdrawer.toBuffer()),
                            commission: i.commission
                        }
                    });
                    return new es({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: eh,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: ec,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static createAccount(e) {
                    let t = new en;
                    return t.add(ev.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.votePubkey,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    })), t.add(this.initializeAccount({
                        votePubkey: e.votePubkey,
                        nodePubkey: e.voteInit.nodePubkey,
                        voteInit: e.voteInit
                    }))
                }
                static authorize(e) {
                    let {
                        votePubkey: t,
                        authorizedPubkey: r,
                        newAuthorizedPubkey: i,
                        voteAuthorizationType: s
                    } = e, n = ek(rG.Authorize, {
                        newAuthorized: v(i.toBuffer()),
                        voteAuthorizationType: s.index
                    });
                    return new en().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ec,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
                static authorizeWithSeed(e) {
                    let {
                        currentAuthorityDerivedKeyBasePubkey: t,
                        currentAuthorityDerivedKeyOwnerPubkey: r,
                        currentAuthorityDerivedKeySeed: i,
                        newAuthorizedPubkey: s,
                        voteAuthorizationType: n,
                        votePubkey: o
                    } = e, a = ek(rG.AuthorizeWithSeed, {
                        voteAuthorizeWithSeedArgs: {
                            currentAuthorityDerivedKeyOwnerPubkey: v(r.toBuffer()),
                            currentAuthorityDerivedKeySeed: i,
                            newAuthorized: v(s.toBuffer()),
                            voteAuthorizationType: n.index
                        }
                    });
                    return new en().add({
                        keys: [{
                            pubkey: o,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ec,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: t,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: a
                    })
                }
                static withdraw(e) {
                    let {
                        votePubkey: t,
                        authorizedWithdrawerPubkey: r,
                        lamports: i,
                        toPubkey: s
                    } = e, n = ek(rG.Withdraw, {
                        lamports: i
                    });
                    return new en().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: s,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
                static safeWithdraw(e, t, r) {
                    if (e.lamports > t - r) throw Error("Withdraw will leave vote account with insuffcient funds.");
                    return rV.withdraw(e)
                }
            }
            rV.programId = new K("Vote111111111111111111111111111111111111111"), rV.space = 3731;
            let rM = new K("Va1idator1nfo111111111111111111111111111111"),
                rD = (0, b.dt)({
                    name: (0, b.Z_)(),
                    website: (0, b.jt)((0, b.Z_)()),
                    details: (0, b.jt)((0, b.Z_)()),
                    keybaseUsername: (0, b.jt)((0, b.Z_)())
                });
            class rH {
                constructor(e, t) {
                    this.key = void 0, this.info = void 0, this.key = e, this.info = t
                }
                static fromConfigData(e) {
                    let t = [...e];
                    if (2 !== Z(t)) return null;
                    let r = [];
                    for (let e = 0; e < 2; e++) {
                        let e = new K(t.slice(0, O)),
                            i = 1 === (t = t.slice(O)).slice(0, 1)[0];
                        t = t.slice(1), r.push({
                            publicKey: e,
                            isSigner: i
                        })
                    }
                    if (r[0].publicKey.equals(rM) && r[1].isSigner) {
                        let e = JSON.parse($().decode(o.Buffer.from(t)));
                        return (0, b.hu)(e, rD), new rH(r[1].publicKey, e)
                    }
                    return null
                }
            }
            let rF = new K("Vote111111111111111111111111111111111111111"),
                r$ = p.struct([H("nodePubkey"), H("authorizedWithdrawer"), p.u8("commission"), p.nu64(), p.seq(p.struct([p.nu64("slot"), p.u32("confirmationCount")]), p.offset(p.u32(), -8), "votes"), p.u8("rootSlotValid"), p.nu64("rootSlot"), p.nu64(), p.seq(p.struct([p.nu64("epoch"), H("authorizedVoter")]), p.offset(p.u32(), -8), "authorizedVoters"), p.struct([p.seq(p.struct([H("authorizedPubkey"), p.nu64("epochOfLastAuthorizedSwitch"), p.nu64("targetEpoch")]), 32, "buf"), p.nu64("idx"), p.u8("isEmpty")], "priorVoters"), p.nu64(), p.seq(p.struct([p.nu64("epoch"), p.nu64("credits"), p.nu64("prevCredits")]), p.offset(p.u32(), -8), "epochCredits"), p.struct([p.nu64("slot"), p.nu64("timestamp")], "lastTimestamp")]);
            class rZ {
                constructor(e) {
                    this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = e.nodePubkey, this.authorizedWithdrawer = e.authorizedWithdrawer, this.commission = e.commission, this.rootSlot = e.rootSlot, this.votes = e.votes, this.authorizedVoters = e.authorizedVoters, this.priorVoters = e.priorVoters, this.epochCredits = e.epochCredits, this.lastTimestamp = e.lastTimestamp
                }
                static fromAccountData(e) {
                    let t = r$.decode(v(e), 4),
                        r = t.rootSlot;
                    return t.rootSlotValid || (r = null), new rZ({
                        nodePubkey: new K(t.nodePubkey),
                        authorizedWithdrawer: new K(t.authorizedWithdrawer),
                        commission: t.commission,
                        votes: t.votes,
                        rootSlot: r,
                        authorizedVoters: t.authorizedVoters.map(rX),
                        priorVoters: function({
                            buf: e,
                            idx: t,
                            isEmpty: r
                        }) {
                            return r ? [] : [...e.slice(t + 1).map(rJ), ...e.slice(0, t).map(rJ)]
                        }(t.priorVoters),
                        epochCredits: t.epochCredits,
                        lastTimestamp: t.lastTimestamp
                    })
                }
            }

            function rX({
                authorizedVoter: e,
                epoch: t
            }) {
                return {
                    epoch: t,
                    authorizedVoter: new K(e)
                }
            }

            function rJ({
                authorizedPubkey: e,
                epochOfLastAuthorizedSwitch: t,
                targetEpoch: r
            }) {
                return {
                    authorizedPubkey: new K(e),
                    epochOfLastAuthorizedSwitch: t,
                    targetEpoch: r
                }
            }
            let rY = {
                http: {
                    devnet: "http://api.devnet.solana.com",
                    testnet: "http://api.testnet.solana.com",
                    "mainnet-beta": "http://api.mainnet-beta.solana.com/"
                },
                https: {
                    devnet: "https://api.devnet.solana.com",
                    testnet: "https://api.testnet.solana.com",
                    "mainnet-beta": "https://api.mainnet-beta.solana.com/"
                }
            };

            function rQ(e, t) {
                let r = !1 === t ? "http" : "https";
                if (!e) return rY[r].devnet;
                let i = rY[r][e];
                if (!i) throw Error(`Unknown ${r} cluster: ${e}`);
                return i
            }
            async function r0(e, t, r, i) {
                let s, n;
                r && Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight") ? (s = r, n = i) : r && Object.prototype.hasOwnProperty.call(r, "nonceValue") ? (s = r, n = i) : n = r;
                let o = n && {
                        skipPreflight: n.skipPreflight,
                        preflightCommitment: n.preflightCommitment || n.commitment,
                        minContextSlot: n.minContextSlot
                    },
                    a = await e.sendRawTransaction(t, o),
                    c = n && n.commitment,
                    u = s ? e.confirmTransaction(s, c) : e.confirmTransaction(a, c),
                    l = (await u).value;
                if (l.err) throw Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`);
                return a
            }
            let r1 = 1e9
        }
    }
]);