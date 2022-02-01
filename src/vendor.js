function ht(e, n) {
    const t = Object.create(null)
      , i = e.split(",");
    for (let r = 0; r < i.length; r++)
        t[i[r]] = !0;
    return n ? r=>!!t[r.toLowerCase()] : r=>!!t[r]
}
const ws = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , vs = ht(ws);
function gi(e) {
    return !!e || e === ""
}
function gt(e) {
    if (A(e)) {
        const n = {};
        for (let t = 0; t < e.length; t++) {
            const i = e[t]
              , r = te(i) ? Os(i) : gt(i);
            if (r)
                for (const s in r)
                    n[s] = r[s]
        }
        return n
    } else {
        if (te(e))
            return e;
        if (G(e))
            return e
    }
}
const zs = /;(?![^(]*\))/g
  , js = /:(.+)/;
function Os(e) {
    const n = {};
    return e.split(zs).forEach(t=>{
        if (t) {
            const i = t.split(js);
            i.length > 1 && (n[i[0].trim()] = i[1].trim())
        }
    }
    ),
    n
}
function dt(e) {
    let n = "";
    if (te(e))
        n = e;
    else if (A(e))
        for (let t = 0; t < e.length; t++) {
            const i = dt(e[t]);
            i && (n += i + " ")
        }
    else if (G(e))
        for (const t in e)
            e[t] && (n += t + " ");
    return n.trim()
}
const Gu = e=>e == null ? "" : A(e) || G(e) && (e.toString === bi || !M(e.toString)) ? JSON.stringify(e, di, 2) : String(e)
  , di = (e,n)=>n && n.__v_isRef ? di(e, n.value) : un(n) ? {
    [`Map(${n.size})`]: [...n.entries()].reduce((t,[i,r])=>(t[`${i} =>`] = r,
    t), {})
} : pi(n) ? {
    [`Set(${n.size})`]: [...n.values()]
} : G(n) && !A(n) && !xi(n) ? String(n) : n
  , H = {}
  , ln = []
  , be = ()=>{}
  , Es = ()=>!1
  , Ts = /^on[^a-z]/
  , Mn = e=>Ts.test(e)
  , pt = e=>e.startsWith("onUpdate:")
  , oe = Object.assign
  , mt = (e,n)=>{
    const t = e.indexOf(n);
    t > -1 && e.splice(t, 1)
}
  , Ps = Object.prototype.hasOwnProperty
  , L = (e,n)=>Ps.call(e, n)
  , A = Array.isArray
  , un = e=>Fn(e) === "[object Map]"
  , pi = e=>Fn(e) === "[object Set]"
  , M = e=>typeof e == "function"
  , te = e=>typeof e == "string"
  , bt = e=>typeof e == "symbol"
  , G = e=>e !== null && typeof e == "object"
  , mi = e=>G(e) && M(e.then) && M(e.catch)
  , bi = Object.prototype.toString
  , Fn = e=>bi.call(e)
  , Cs = e=>Fn(e).slice(8, -1)
  , xi = e=>Fn(e) === "[object Object]"
  , xt = e=>te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , $n = ht(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Ln = e=>{
    const n = Object.create(null);
    return t=>n[t] || (n[t] = e(t))
}
  , Is = /-(\w)/g
  , cn = Ln(e=>e.replace(Is, (n,t)=>t ? t.toUpperCase() : ""))
  , Ss = /\B([A-Z])/g
  , He = Ln(e=>e.replace(Ss, "-$1").toLowerCase())
  , yi = Ln(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , yt = Ln(e=>e ? `on${yi(e)}` : "")
  , vn = (e,n)=>!Object.is(e, n)
  , kn = (e,n)=>{
    for (let t = 0; t < e.length; t++)
        e[t](n)
}
  , Rn = (e,n,t)=>{
    Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value: t
    })
}
  , _t = e=>{
    const n = parseFloat(e);
    return isNaN(n) ? e : n
}
;
let _i;
const qs = ()=>_i || (_i = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
let we;
const Dn = [];
class As {
    constructor(n=!1) {
        this.active = !0,
        this.effects = [],
        this.cleanups = [],
        !n && we && (this.parent = we,
        this.index = (we.scopes || (we.scopes = [])).push(this) - 1)
    }
    run(n) {
        if (this.active)
            try {
                return this.on(),
                n()
            } finally {
                this.off()
            }
    }
    on() {
        this.active && (Dn.push(this),
        we = this)
    }
    off() {
        this.active && (Dn.pop(),
        we = Dn[Dn.length - 1])
    }
    stop(n) {
        if (this.active) {
            if (this.effects.forEach(t=>t.stop()),
            this.cleanups.forEach(t=>t()),
            this.scopes && this.scopes.forEach(t=>t.stop(!0)),
            this.parent && !n) {
                const t = this.parent.scopes.pop();
                t && t !== this && (this.parent.scopes[this.index] = t,
                t.index = this.index)
            }
            this.active = !1
        }
    }
}
function Ns(e, n) {
    n = n || we,
    n && n.active && n.effects.push(e)
}
function Ms() {
    return we
}
function Fs(e) {
    we && we.cleanups.push(e)
}
const wt = e=>{
    const n = new Set(e);
    return n.w = 0,
    n.n = 0,
    n
}
  , wi = e=>(e.w & Me) > 0
  , vi = e=>(e.n & Me) > 0
  , $s = ({deps: e})=>{
    if (e.length)
        for (let n = 0; n < e.length; n++)
            e[n].w |= Me
}
  , Ls = e=>{
    const {deps: n} = e;
    if (n.length) {
        let t = 0;
        for (let i = 0; i < n.length; i++) {
            const r = n[i];
            wi(r) && !vi(r) ? r.delete(e) : n[t++] = r,
            r.w &= ~Me,
            r.n &= ~Me
        }
        n.length = t
    }
}
  , vt = new WeakMap;
let zn = 0
  , Me = 1;
const zt = 30
  , fn = [];
let Be;
const Ue = Symbol("")
  , jt = Symbol("");
class Ot {
    constructor(n, t=null, i) {
        this.fn = n,
        this.scheduler = t,
        this.active = !0,
        this.deps = [],
        Ns(this, i)
    }
    run() {
        if (!this.active)
            return this.fn();
        if (!fn.length || !fn.includes(this))
            try {
                return fn.push(Be = this),
                ks(),
                Me = 1 << ++zn,
                zn <= zt ? $s(this) : zi(this),
                this.fn()
            } finally {
                zn <= zt && Ls(this),
                Me = 1 << --zn,
                Ke(),
                fn.pop();
                const n = fn.length;
                Be = n > 0 ? fn[n - 1] : void 0
            }
    }
    stop() {
        this.active && (zi(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function zi(e) {
    const {deps: n} = e;
    if (n.length) {
        for (let t = 0; t < n.length; t++)
            n[t].delete(e);
        n.length = 0
    }
}
let an = !0;
const Et = [];
function hn() {
    Et.push(an),
    an = !1
}
function ks() {
    Et.push(an),
    an = !0
}
function Ke() {
    const e = Et.pop();
    an = e === void 0 ? !0 : e
}
function fe(e, n, t) {
    if (!ji())
        return;
    let i = vt.get(e);
    i || vt.set(e, i = new Map);
    let r = i.get(t);
    r || i.set(t, r = wt()),
    Oi(r)
}
function ji() {
    return an && Be !== void 0
}
function Oi(e, n) {
    let t = !1;
    zn <= zt ? vi(e) || (e.n |= Me,
    t = !wi(e)) : t = !e.has(Be),
    t && (e.add(Be),
    Be.deps.push(e))
}
function Pe(e, n, t, i, r, s) {
    const u = vt.get(e);
    if (!u)
        return;
    let l = [];
    if (n === "clear")
        l = [...u.values()];
    else if (t === "length" && A(e))
        u.forEach((o,f)=>{
            (f === "length" || f >= i) && l.push(o)
        }
        );
    else
        switch (t !== void 0 && l.push(u.get(t)),
        n) {
        case "add":
            A(e) ? xt(t) && l.push(u.get("length")) : (l.push(u.get(Ue)),
            un(e) && l.push(u.get(jt)));
            break;
        case "delete":
            A(e) || (l.push(u.get(Ue)),
            un(e) && l.push(u.get(jt)));
            break;
        case "set":
            un(e) && l.push(u.get(Ue));
            break
        }
    if (l.length === 1)
        l[0] && Tt(l[0]);
    else {
        const o = [];
        for (const f of l)
            f && o.push(...f);
        Tt(wt(o))
    }
}
function Tt(e, n) {
    for (const t of A(e) ? e : [...e])
        (t !== Be || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
}
const Rs = ht("__proto__,__v_isRef,__isVue")
  , Ei = new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(bt))
  , Ds = Pt()
  , Hs = Pt(!1, !0)
  , Bs = Pt(!0)
  , Ti = Us();
function Us() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(n=>{
        e[n] = function(...t) {
            const i = R(this);
            for (let s = 0, u = this.length; s < u; s++)
                fe(i, "get", s + "");
            const r = i[n](...t);
            return r === -1 || r === !1 ? i[n](...t.map(R)) : r
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(n=>{
        e[n] = function(...t) {
            hn();
            const i = R(this)[n].apply(this, t);
            return Ke(),
            i
        }
    }
    ),
    e
}
function Pt(e=!1, n=!1) {
    return function(i, r, s) {
        if (r === "__v_isReactive")
            return !e;
        if (r === "__v_isReadonly")
            return e;
        if (r === "__v_isShallow")
            return n;
        if (r === "__v_raw" && s === (e ? n ? oo : Fi : n ? Mi : Ni).get(i))
            return i;
        const u = A(i);
        if (!e && u && L(Ti, r))
            return Reflect.get(Ti, r, s);
        const l = Reflect.get(i, r, s);
        return (bt(r) ? Ei.has(r) : Rs(r)) || (e || fe(i, "get", r),
        n) ? l : ee(l) ? !u || !xt(r) ? l.value : l : G(l) ? e ? $i(l) : St(l) : l
    }
}
const Ks = Pi()
  , Ws = Pi(!0);
function Pi(e=!1) {
    return function(t, i, r, s) {
        let u = t[i];
        if (jn(u) && ee(u) && !ee(r))
            return !1;
        if (!e && !jn(r) && (Li(r) || (r = R(r),
        u = R(u)),
        !A(t) && ee(u) && !ee(r)))
            return u.value = r,
            !0;
        const l = A(t) && xt(i) ? Number(i) < t.length : L(t, i)
          , o = Reflect.set(t, i, r, s);
        return t === R(s) && (l ? vn(r, u) && Pe(t, "set", i, r) : Pe(t, "add", i, r)),
        o
    }
}
function Ys(e, n) {
    const t = L(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && t && Pe(e, "delete", n, void 0),
    i
}
function Xs(e, n) {
    const t = Reflect.has(e, n);
    return (!bt(n) || !Ei.has(n)) && fe(e, "has", n),
    t
}
function Js(e) {
    return fe(e, "iterate", A(e) ? "length" : Ue),
    Reflect.ownKeys(e)
}
const Ci = {
    get: Ds,
    set: Ks,
    deleteProperty: Ys,
    has: Xs,
    ownKeys: Js
}
  , Vs = {
    get: Bs,
    set(e, n) {
        return !0
    },
    deleteProperty(e, n) {
        return !0
    }
}
  , Zs = oe({}, Ci, {
    get: Hs,
    set: Ws
})
  , Ct = e=>e
  , Hn = e=>Reflect.getPrototypeOf(e);
function Bn(e, n, t=!1, i=!1) {
    e = e.__v_raw;
    const r = R(e)
      , s = R(n);
    n !== s && !t && fe(r, "get", n),
    !t && fe(r, "get", s);
    const {has: u} = Hn(r)
      , l = i ? Ct : t ? At : On;
    if (u.call(r, n))
        return l(e.get(n));
    if (u.call(r, s))
        return l(e.get(s));
    e !== r && e.get(n)
}
function Un(e, n=!1) {
    const t = this.__v_raw
      , i = R(t)
      , r = R(e);
    return e !== r && !n && fe(i, "has", e),
    !n && fe(i, "has", r),
    e === r ? t.has(e) : t.has(e) || t.has(r)
}
function Kn(e, n=!1) {
    return e = e.__v_raw,
    !n && fe(R(e), "iterate", Ue),
    Reflect.get(e, "size", e)
}
function Ii(e) {
    e = R(e);
    const n = R(this);
    return Hn(n).has.call(n, e) || (n.add(e),
    Pe(n, "add", e, e)),
    this
}
function Si(e, n) {
    n = R(n);
    const t = R(this)
      , {has: i, get: r} = Hn(t);
    let s = i.call(t, e);
    s || (e = R(e),
    s = i.call(t, e));
    const u = r.call(t, e);
    return t.set(e, n),
    s ? vn(n, u) && Pe(t, "set", e, n) : Pe(t, "add", e, n),
    this
}
function qi(e) {
    const n = R(this)
      , {has: t, get: i} = Hn(n);
    let r = t.call(n, e);
    r || (e = R(e),
    r = t.call(n, e)),
    i && i.call(n, e);
    const s = n.delete(e);
    return r && Pe(n, "delete", e, void 0),
    s
}
function Ai() {
    const e = R(this)
      , n = e.size !== 0
      , t = e.clear();
    return n && Pe(e, "clear", void 0, void 0),
    t
}
function Wn(e, n) {
    return function(i, r) {
        const s = this
          , u = s.__v_raw
          , l = R(u)
          , o = n ? Ct : e ? At : On;
        return !e && fe(l, "iterate", Ue),
        u.forEach((f,g)=>i.call(r, o(f), o(g), s))
    }
}
function Yn(e, n, t) {
    return function(...i) {
        const r = this.__v_raw
          , s = R(r)
          , u = un(s)
          , l = e === "entries" || e === Symbol.iterator && u
          , o = e === "keys" && u
          , f = r[e](...i)
          , g = t ? Ct : n ? At : On;
        return !n && fe(s, "iterate", o ? jt : Ue),
        {
            next() {
                const {value: h, done: d} = f.next();
                return d ? {
                    value: h,
                    done: d
                } : {
                    value: l ? [g(h[0]), g(h[1])] : g(h),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Fe(e) {
    return function(...n) {
        return e === "delete" ? !1 : this
    }
}
function Qs() {
    const e = {
        get(s) {
            return Bn(this, s)
        },
        get size() {
            return Kn(this)
        },
        has: Un,
        add: Ii,
        set: Si,
        delete: qi,
        clear: Ai,
        forEach: Wn(!1, !1)
    }
      , n = {
        get(s) {
            return Bn(this, s, !1, !0)
        },
        get size() {
            return Kn(this)
        },
        has: Un,
        add: Ii,
        set: Si,
        delete: qi,
        clear: Ai,
        forEach: Wn(!1, !0)
    }
      , t = {
        get(s) {
            return Bn(this, s, !0)
        },
        get size() {
            return Kn(this, !0)
        },
        has(s) {
            return Un.call(this, s, !0)
        },
        add: Fe("add"),
        set: Fe("set"),
        delete: Fe("delete"),
        clear: Fe("clear"),
        forEach: Wn(!0, !1)
    }
      , i = {
        get(s) {
            return Bn(this, s, !0, !0)
        },
        get size() {
            return Kn(this, !0)
        },
        has(s) {
            return Un.call(this, s, !0)
        },
        add: Fe("add"),
        set: Fe("set"),
        delete: Fe("delete"),
        clear: Fe("clear"),
        forEach: Wn(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s=>{
        e[s] = Yn(s, !1, !1),
        t[s] = Yn(s, !0, !1),
        n[s] = Yn(s, !1, !0),
        i[s] = Yn(s, !0, !0)
    }
    ),
    [e, t, n, i]
}
const [Gs,eo,no,to] = Qs();
function It(e, n) {
    const t = n ? e ? to : no : e ? eo : Gs;
    return (i,r,s)=>r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(L(t, r) && r in i ? t : i, r, s)
}
const io = {
    get: It(!1, !1)
}
  , ro = {
    get: It(!1, !0)
}
  , so = {
    get: It(!0, !1)
}
  , Ni = new WeakMap
  , Mi = new WeakMap
  , Fi = new WeakMap
  , oo = new WeakMap;
function lo(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function uo(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : lo(Cs(e))
}
function St(e) {
    return jn(e) ? e : qt(e, !1, Ci, io, Ni)
}
function co(e) {
    return qt(e, !1, Zs, ro, Mi)
}
function $i(e) {
    return qt(e, !0, Vs, so, Fi)
}
function qt(e, n, t, i, r) {
    if (!G(e) || e.__v_raw && !(n && e.__v_isReactive))
        return e;
    const s = r.get(e);
    if (s)
        return s;
    const u = uo(e);
    if (u === 0)
        return e;
    const l = new Proxy(e,u === 2 ? i : t);
    return r.set(e, l),
    l
}
function gn(e) {
    return jn(e) ? gn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function jn(e) {
    return !!(e && e.__v_isReadonly)
}
function Li(e) {
    return !!(e && e.__v_isShallow)
}
function ki(e) {
    return gn(e) || jn(e)
}
function R(e) {
    const n = e && e.__v_raw;
    return n ? R(n) : e
}
function Ri(e) {
    return Rn(e, "__v_skip", !0),
    e
}
const On = e=>G(e) ? St(e) : e
  , At = e=>G(e) ? $i(e) : e;
function Di(e) {
    ji() && (e = R(e),
    e.dep || (e.dep = wt()),
    Oi(e.dep))
}
function Hi(e, n) {
    e = R(e),
    e.dep && Tt(e.dep)
}
function ee(e) {
    return Boolean(e && e.__v_isRef === !0)
}
function ge(e) {
    return Bi(e, !1)
}
function fo(e) {
    return Bi(e, !0)
}
function Bi(e, n) {
    return ee(e) ? e : new ao(e,n)
}
class ao {
    constructor(n, t) {
        this.__v_isShallow = t,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = t ? n : R(n),
        this._value = t ? n : On(n)
    }
    get value() {
        return Di(this),
        this._value
    }
    set value(n) {
        n = this.__v_isShallow ? n : R(n),
        vn(n, this._rawValue) && (this._rawValue = n,
        this._value = this.__v_isShallow ? n : On(n),
        Hi(this))
    }
}
function ve(e) {
    return ee(e) ? e.value : e
}
const ho = {
    get: (e,n,t)=>ve(Reflect.get(e, n, t)),
    set: (e,n,t,i)=>{
        const r = e[n];
        return ee(r) && !ee(t) ? (r.value = t,
        !0) : Reflect.set(e, n, t, i)
    }
};
function Ui(e) {
    return gn(e) ? e : new Proxy(e,ho)
}
class go {
    constructor(n, t, i, r) {
        this._setter = t,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._dirty = !0,
        this.effect = new Ot(n,()=>{
            this._dirty || (this._dirty = !0,
            Hi(this))
        }
        ),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !r,
        this.__v_isReadonly = i
    }
    get value() {
        const n = R(this);
        return Di(n),
        (n._dirty || !n._cacheable) && (n._dirty = !1,
        n._value = n.effect.run()),
        n._value
    }
    set value(n) {
        this._setter(n)
    }
}
function po(e, n, t=!1) {
    let i, r;
    const s = M(e);
    return s ? (i = e,
    r = be) : (i = e.get,
    r = e.set),
    new go(i,r,s || !r,t)
}
Promise.resolve();
function $e(e, n, t, i) {
    let r;
    try {
        r = i ? e(...i) : e()
    } catch (s) {
        Xn(s, n, t)
    }
    return r
}
function xe(e, n, t, i) {
    if (M(e)) {
        const s = $e(e, n, t, i);
        return s && mi(s) && s.catch(u=>{
            Xn(u, n, t)
        }
        ),
        s
    }
    const r = [];
    for (let s = 0; s < e.length; s++)
        r.push(xe(e[s], n, t, i));
    return r
}
function Xn(e, n, t, i=!0) {
    const r = n ? n.vnode : null;
    if (n) {
        let s = n.parent;
        const u = n.proxy
          , l = t;
        for (; s; ) {
            const f = s.ec;
            if (f) {
                for (let g = 0; g < f.length; g++)
                    if (f[g](e, u, l) === !1)
                        return
            }
            s = s.parent
        }
        const o = n.appContext.config.errorHandler;
        if (o) {
            $e(o, null, 10, [e, u, l]);
            return
        }
    }
    mo(e, t, r, i)
}
function mo(e, n, t, i=!0) {
    console.error(e)
}
let Jn = !1
  , Nt = !1;
const ae = [];
let Ce = 0;
const En = [];
let Tn = null
  , dn = 0;
const Pn = [];
let Le = null
  , pn = 0;
const Ki = Promise.resolve();
let Mt = null
  , Ft = null;
function Wi(e) {
    const n = Mt || Ki;
    return e ? n.then(this ? e.bind(this) : e) : n
}
function bo(e) {
    let n = Ce + 1
      , t = ae.length;
    for (; n < t; ) {
        const i = n + t >>> 1;
        Cn(ae[i]) < e ? n = i + 1 : t = i
    }
    return n
}
function Yi(e) {
    (!ae.length || !ae.includes(e, Jn && e.allowRecurse ? Ce + 1 : Ce)) && e !== Ft && (e.id == null ? ae.push(e) : ae.splice(bo(e.id), 0, e),
    Xi())
}
function Xi() {
    !Jn && !Nt && (Nt = !0,
    Mt = Ki.then(Zi))
}
function xo(e) {
    const n = ae.indexOf(e);
    n > Ce && ae.splice(n, 1)
}
function Ji(e, n, t, i) {
    A(e) ? t.push(...e) : (!n || !n.includes(e, e.allowRecurse ? i + 1 : i)) && t.push(e),
    Xi()
}
function yo(e) {
    Ji(e, Tn, En, dn)
}
function _o(e) {
    Ji(e, Le, Pn, pn)
}
function $t(e, n=null) {
    if (En.length) {
        for (Ft = n,
        Tn = [...new Set(En)],
        En.length = 0,
        dn = 0; dn < Tn.length; dn++)
            Tn[dn]();
        Tn = null,
        dn = 0,
        Ft = null,
        $t(e, n)
    }
}
function Vi(e) {
    if (Pn.length) {
        const n = [...new Set(Pn)];
        if (Pn.length = 0,
        Le) {
            Le.push(...n);
            return
        }
        for (Le = n,
        Le.sort((t,i)=>Cn(t) - Cn(i)),
        pn = 0; pn < Le.length; pn++)
            Le[pn]();
        Le = null,
        pn = 0
    }
}
const Cn = e=>e.id == null ? 1 / 0 : e.id;
function Zi(e) {
    Nt = !1,
    Jn = !0,
    $t(e),
    ae.sort((t,i)=>Cn(t) - Cn(i));
    const n = be;
    try {
        for (Ce = 0; Ce < ae.length; Ce++) {
            const t = ae[Ce];
            t && t.active !== !1 && $e(t, null, 14)
        }
    } finally {
        Ce = 0,
        ae.length = 0,
        Vi(),
        Jn = !1,
        Mt = null,
        (ae.length || En.length || Pn.length) && Zi(e)
    }
}
function wo(e, n, ...t) {
    const i = e.vnode.props || H;
    let r = t;
    const s = n.startsWith("update:")
      , u = s && n.slice(7);
    if (u && u in i) {
        const g = `${u === "modelValue" ? "model" : u}Modifiers`
          , {number: h, trim: d} = i[g] || H;
        d ? r = t.map(m=>m.trim()) : h && (r = t.map(_t))
    }
    let l, o = i[l = yt(n)] || i[l = yt(cn(n))];
    !o && s && (o = i[l = yt(He(n))]),
    o && xe(o, e, 6, r);
    const f = i[l + "Once"];
    if (f) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        xe(f, e, 6, r)
    }
}
function Qi(e, n, t=!1) {
    const i = n.emitsCache
      , r = i.get(e);
    if (r !== void 0)
        return r;
    const s = e.emits;
    let u = {}
      , l = !1;
    if (!M(e)) {
        const o = f=>{
            const g = Qi(f, n, !0);
            g && (l = !0,
            oe(u, g))
        }
        ;
        !t && n.mixins.length && n.mixins.forEach(o),
        e.extends && o(e.extends),
        e.mixins && e.mixins.forEach(o)
    }
    return !s && !l ? (i.set(e, null),
    null) : (A(s) ? s.forEach(o=>u[o] = null) : oe(u, s),
    i.set(e, u),
    u)
}
function Lt(e, n) {
    return !e || !Mn(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""),
    L(e, n[0].toLowerCase() + n.slice(1)) || L(e, He(n)) || L(e, n))
}
let de = null
  , Vn = null;
function Zn(e) {
    const n = de;
    return de = e,
    Vn = e && e.type.__scopeId || null,
    n
}
function ec(e) {
    Vn = e
}
function nc() {
    Vn = null
}
function vo(e, n=de, t) {
    if (!n || e._n)
        return e;
    const i = (...r)=>{
        i._d && vr(-1);
        const s = Zn(n)
          , u = e(...r);
        return Zn(s),
        i._d && vr(1),
        u
    }
    ;
    return i._n = !0,
    i._c = !0,
    i._d = !0,
    i
}
function kt(e) {
    const {type: n, vnode: t, proxy: i, withProxy: r, props: s, propsOptions: [u], slots: l, attrs: o, emit: f, render: g, renderCache: h, data: d, setupState: m, ctx: z, inheritAttrs: S} = e;
    let E, I;
    const F = Zn(e);
    try {
        if (t.shapeFlag & 4) {
            const C = r || i;
            E = je(g.call(C, C, h, s, m, d, z)),
            I = o
        } else {
            const C = n;
            E = je(C.length > 1 ? C(s, {
                attrs: o,
                slots: l,
                emit: f
            }) : C(s, null)),
            I = n.props ? o : zo(o)
        }
    } catch (C) {
        In.length = 0,
        Xn(C, e, 1),
        E = ze(ke)
    }
    let k = E;
    if (I && S !== !1) {
        const C = Object.keys(I)
          , {shapeFlag: N} = k;
        C.length && N & (1 | 6) && (u && C.some(pt) && (I = jo(I, u)),
        k = qn(k, I))
    }
    return t.dirs && (k.dirs = k.dirs ? k.dirs.concat(t.dirs) : t.dirs),
    t.transition && (k.transition = t.transition),
    E = k,
    Zn(F),
    E
}
const zo = e=>{
    let n;
    for (const t in e)
        (t === "class" || t === "style" || Mn(t)) && ((n || (n = {}))[t] = e[t]);
    return n
}
  , jo = (e,n)=>{
    const t = {};
    for (const i in e)
        (!pt(i) || !(i.slice(9)in n)) && (t[i] = e[i]);
    return t
}
;
function Oo(e, n, t) {
    const {props: i, children: r, component: s} = e
      , {props: u, children: l, patchFlag: o} = n
      , f = s.emitsOptions;
    if (n.dirs || n.transition)
        return !0;
    if (t && o >= 0) {
        if (o & 1024)
            return !0;
        if (o & 16)
            return i ? Gi(i, u, f) : !!u;
        if (o & 8) {
            const g = n.dynamicProps;
            for (let h = 0; h < g.length; h++) {
                const d = g[h];
                if (u[d] !== i[d] && !Lt(f, d))
                    return !0
            }
        }
    } else
        return (r || l) && (!l || !l.$stable) ? !0 : i === u ? !1 : i ? u ? Gi(i, u, f) : !0 : !!u;
    return !1
}
function Gi(e, n, t) {
    const i = Object.keys(n);
    if (i.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < i.length; r++) {
        const s = i[r];
        if (n[s] !== e[s] && !Lt(t, s))
            return !0
    }
    return !1
}
function Eo({vnode: e, parent: n}, t) {
    for (; n && n.subTree === e; )
        (e = n.vnode).el = t,
        n = n.parent
}
const To = e=>e.__isSuspense;
function Po(e, n) {
    n && n.pendingBranch ? A(e) ? n.effects.push(...e) : n.effects.push(e) : _o(e)
}
function Co(e, n) {
    if (ie) {
        let t = ie.provides;
        const i = ie.parent && ie.parent.provides;
        i === t && (t = ie.provides = Object.create(i)),
        t[e] = n
    }
}
function Rt(e, n, t=!1) {
    const i = ie || de;
    if (i) {
        const r = i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return t && M(n) ? n.call(i.proxy) : n
    }
}
function tc(e, n) {
    return Dt(e, null, n)
}
const er = {};
function Ie(e, n, t) {
    return Dt(e, n, t)
}
function Dt(e, n, {immediate: t, deep: i, flush: r, onTrack: s, onTrigger: u}=H) {
    const l = ie;
    let o, f = !1, g = !1;
    if (ee(e) ? (o = ()=>e.value,
    f = Li(e)) : gn(e) ? (o = ()=>e,
    i = !0) : A(e) ? (g = !0,
    f = e.some(gn),
    o = ()=>e.map(I=>{
        if (ee(I))
            return I.value;
        if (gn(I))
            return We(I);
        if (M(I))
            return $e(I, l, 2)
    }
    )) : M(e) ? n ? o = ()=>$e(e, l, 2) : o = ()=>{
        if (!(l && l.isUnmounted))
            return h && h(),
            xe(e, l, 3, [d])
    }
    : o = be,
    n && i) {
        const I = o;
        o = ()=>We(I())
    }
    let h, d = I=>{
        h = E.onStop = ()=>{
            $e(I, l, 4)
        }
    }
    ;
    if (An)
        return d = be,
        n ? t && xe(n, l, 3, [o(), g ? [] : void 0, d]) : o(),
        be;
    let m = g ? [] : er;
    const z = ()=>{
        if (!!E.active)
            if (n) {
                const I = E.run();
                (i || f || (g ? I.some((F,k)=>vn(F, m[k])) : vn(I, m))) && (h && h(),
                xe(n, l, 3, [I, m === er ? void 0 : m, d]),
                m = I)
            } else
                E.run()
    }
    ;
    z.allowRecurse = !!n;
    let S;
    r === "sync" ? S = z : r === "post" ? S = ()=>ue(z, l && l.suspense) : S = ()=>{
        !l || l.isMounted ? yo(z) : z()
    }
    ;
    const E = new Ot(o,S);
    return n ? t ? z() : m = E.run() : r === "post" ? ue(E.run.bind(E), l && l.suspense) : E.run(),
    ()=>{
        E.stop(),
        l && l.scope && mt(l.scope.effects, E)
    }
}
function Io(e, n, t) {
    const i = this.proxy
      , r = te(e) ? e.includes(".") ? nr(i, e) : ()=>i[e] : e.bind(i, i);
    let s;
    M(n) ? s = n : (s = n.handler,
    t = n);
    const u = ie;
    mn(this);
    const l = Dt(r, s.bind(i), t);
    return u ? mn(u) : Ze(),
    l
}
function nr(e, n) {
    const t = n.split(".");
    return ()=>{
        let i = e;
        for (let r = 0; r < t.length && i; r++)
            i = i[t[r]];
        return i
    }
}
function We(e, n) {
    if (!G(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    ee(e))
        We(e.value, n);
    else if (A(e))
        for (let t = 0; t < e.length; t++)
            We(e[t], n);
    else if (pi(e) || un(e))
        e.forEach(t=>{
            We(t, n)
        }
        );
    else if (xi(e))
        for (const t in e)
            We(e[t], n);
    return e
}
function ic(e) {
    return M(e) ? {
        setup: e,
        name: e.name
    } : e
}
const Ht = e=>!!e.type.__asyncLoader
  , tr = e=>e.type.__isKeepAlive;
function So(e, n) {
    ir(e, "a", n)
}
function qo(e, n) {
    ir(e, "da", n)
}
function ir(e, n, t=ie) {
    const i = e.__wdc || (e.__wdc = ()=>{
        let r = t;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (Qn(n, i, t),
    t) {
        let r = t.parent;
        for (; r && r.parent; )
            tr(r.parent.vnode) && Ao(i, n, t, r),
            r = r.parent
    }
}
function Ao(e, n, t, i) {
    const r = Qn(n, e, i, !0);
    sr(()=>{
        mt(i[n], r)
    }
    , t)
}
function Qn(e, n, t=ie, i=!1) {
    if (t) {
        const r = t[e] || (t[e] = [])
          , s = n.__weh || (n.__weh = (...u)=>{
            if (t.isUnmounted)
                return;
            hn(),
            mn(t);
            const l = xe(n, t, e, u);
            return Ze(),
            Ke(),
            l
        }
        );
        return i ? r.unshift(s) : r.push(s),
        s
    }
}
const Se = e=>(n,t=ie)=>(!An || e === "sp") && Qn(e, n, t)
  , No = Se("bm")
  , rr = Se("m")
  , Mo = Se("bu")
  , Fo = Se("u")
  , $o = Se("bum")
  , sr = Se("um")
  , Lo = Se("sp")
  , ko = Se("rtg")
  , Ro = Se("rtc");
function Do(e, n=ie) {
    Qn("ec", e, n)
}
let Bt = !0;
function Ho(e) {
    const n = ur(e)
      , t = e.proxy
      , i = e.ctx;
    Bt = !1,
    n.beforeCreate && or(n.beforeCreate, e, "bc");
    const {data: r, computed: s, methods: u, watch: l, provide: o, inject: f, created: g, beforeMount: h, mounted: d, beforeUpdate: m, updated: z, activated: S, deactivated: E, beforeDestroy: I, beforeUnmount: F, destroyed: k, unmounted: C, render: N, renderTracked: Q, renderTriggered: Y, errorCaptured: K, serverPrefetch: J, expose: ne, inheritAttrs: Z, components: re, directives: se, filters: pe} = n;
    if (f && Bo(f, i, null, e.appContext.config.unwrapInjectedRef),
    u)
        for (const X in u) {
            const B = u[X];
            M(B) && (i[X] = B.bind(t))
        }
    if (r) {
        const X = r.call(t, t);
        G(X) && (e.data = St(X))
    }
    if (Bt = !0,
    s)
        for (const X in s) {
            const B = s[X]
              , Ee = M(B) ? B.bind(t, t) : M(B.get) ? B.get.bind(t, t) : be
              , ct = !M(B) && M(B.set) ? B.set.bind(t) : be
              , _n = rt({
                get: Ee,
                set: ct
            });
            Object.defineProperty(i, X, {
                enumerable: !0,
                configurable: !0,
                get: ()=>_n.value,
                set: rn=>_n.value = rn
            })
        }
    if (l)
        for (const X in l)
            lr(l[X], i, t, X);
    if (o) {
        const X = M(o) ? o.call(t) : o;
        Reflect.ownKeys(X).forEach(B=>{
            Co(B, X[B])
        }
        )
    }
    g && or(g, e, "c");
    function V(X, B) {
        A(B) ? B.forEach(Ee=>X(Ee.bind(t))) : B && X(B.bind(t))
    }
    if (V(No, h),
    V(rr, d),
    V(Mo, m),
    V(Fo, z),
    V(So, S),
    V(qo, E),
    V(Do, K),
    V(Ro, Q),
    V(ko, Y),
    V($o, F),
    V(sr, C),
    V(Lo, J),
    A(ne))
        if (ne.length) {
            const X = e.exposed || (e.exposed = {});
            ne.forEach(B=>{
                Object.defineProperty(X, B, {
                    get: ()=>t[B],
                    set: Ee=>t[B] = Ee
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    N && e.render === be && (e.render = N),
    Z != null && (e.inheritAttrs = Z),
    re && (e.components = re),
    se && (e.directives = se)
}
function Bo(e, n, t=be, i=!1) {
    A(e) && (e = Ut(e));
    for (const r in e) {
        const s = e[r];
        let u;
        G(s) ? "default"in s ? u = Rt(s.from || r, s.default, !0) : u = Rt(s.from || r) : u = Rt(s),
        ee(u) && i ? Object.defineProperty(n, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>u.value,
            set: l=>u.value = l
        }) : n[r] = u
    }
}
function or(e, n, t) {
    xe(A(e) ? e.map(i=>i.bind(n.proxy)) : e.bind(n.proxy), n, t)
}
function lr(e, n, t, i) {
    const r = i.includes(".") ? nr(t, i) : ()=>t[i];
    if (te(e)) {
        const s = n[e];
        M(s) && Ie(r, s)
    } else if (M(e))
        Ie(r, e.bind(t));
    else if (G(e))
        if (A(e))
            e.forEach(s=>lr(s, n, t, i));
        else {
            const s = M(e.handler) ? e.handler.bind(t) : n[e.handler];
            M(s) && Ie(r, s, e)
        }
}
function ur(e) {
    const n = e.type
      , {mixins: t, extends: i} = n
      , {mixins: r, optionsCache: s, config: {optionMergeStrategies: u}} = e.appContext
      , l = s.get(n);
    let o;
    return l ? o = l : !r.length && !t && !i ? o = n : (o = {},
    r.length && r.forEach(f=>Gn(o, f, u, !0)),
    Gn(o, n, u)),
    s.set(n, o),
    o
}
function Gn(e, n, t, i=!1) {
    const {mixins: r, extends: s} = n;
    s && Gn(e, s, t, !0),
    r && r.forEach(u=>Gn(e, u, t, !0));
    for (const u in n)
        if (!(i && u === "expose")) {
            const l = Uo[u] || t && t[u];
            e[u] = l ? l(e[u], n[u]) : n[u]
        }
    return e
}
const Uo = {
    data: cr,
    props: Ye,
    emits: Ye,
    methods: Ye,
    computed: Ye,
    beforeCreate: le,
    created: le,
    beforeMount: le,
    mounted: le,
    beforeUpdate: le,
    updated: le,
    beforeDestroy: le,
    beforeUnmount: le,
    destroyed: le,
    unmounted: le,
    activated: le,
    deactivated: le,
    errorCaptured: le,
    serverPrefetch: le,
    components: Ye,
    directives: Ye,
    watch: Wo,
    provide: cr,
    inject: Ko
};
function cr(e, n) {
    return n ? e ? function() {
        return oe(M(e) ? e.call(this, this) : e, M(n) ? n.call(this, this) : n)
    }
    : n : e
}
function Ko(e, n) {
    return Ye(Ut(e), Ut(n))
}
function Ut(e) {
    if (A(e)) {
        const n = {};
        for (let t = 0; t < e.length; t++)
            n[e[t]] = e[t];
        return n
    }
    return e
}
function le(e, n) {
    return e ? [...new Set([].concat(e, n))] : n
}
function Ye(e, n) {
    return e ? oe(oe(Object.create(null), e), n) : n
}
function Wo(e, n) {
    if (!e)
        return n;
    if (!n)
        return e;
    const t = oe(Object.create(null), e);
    for (const i in n)
        t[i] = le(e[i], n[i]);
    return t
}
function Yo(e, n, t, i=!1) {
    const r = {}
      , s = {};
    Rn(s, nt, 1),
    e.propsDefaults = Object.create(null),
    fr(e, n, r, s);
    for (const u in e.propsOptions[0])
        u in r || (r[u] = void 0);
    t ? e.props = i ? r : co(r) : e.type.props ? e.props = r : e.props = s,
    e.attrs = s
}
function Xo(e, n, t, i) {
    const {props: r, attrs: s, vnode: {patchFlag: u}} = e
      , l = R(r)
      , [o] = e.propsOptions;
    let f = !1;
    if ((i || u > 0) && !(u & 16)) {
        if (u & 8) {
            const g = e.vnode.dynamicProps;
            for (let h = 0; h < g.length; h++) {
                let d = g[h];
                const m = n[d];
                if (o)
                    if (L(s, d))
                        m !== s[d] && (s[d] = m,
                        f = !0);
                    else {
                        const z = cn(d);
                        r[z] = Kt(o, l, z, m, e, !1)
                    }
                else
                    m !== s[d] && (s[d] = m,
                    f = !0)
            }
        }
    } else {
        fr(e, n, r, s) && (f = !0);
        let g;
        for (const h in l)
            (!n || !L(n, h) && ((g = He(h)) === h || !L(n, g))) && (o ? t && (t[h] !== void 0 || t[g] !== void 0) && (r[h] = Kt(o, l, h, void 0, e, !0)) : delete r[h]);
        if (s !== l)
            for (const h in s)
                (!n || !L(n, h) && !0) && (delete s[h],
                f = !0)
    }
    f && Pe(e, "set", "$attrs")
}
function fr(e, n, t, i) {
    const [r,s] = e.propsOptions;
    let u = !1, l;
    if (n)
        for (let o in n) {
            if ($n(o))
                continue;
            const f = n[o];
            let g;
            r && L(r, g = cn(o)) ? !s || !s.includes(g) ? t[g] = f : (l || (l = {}))[g] = f : Lt(e.emitsOptions, o) || (!(o in i) || f !== i[o]) && (i[o] = f,
            u = !0)
        }
    if (s) {
        const o = R(t)
          , f = l || H;
        for (let g = 0; g < s.length; g++) {
            const h = s[g];
            t[h] = Kt(r, o, h, f[h], e, !L(f, h))
        }
    }
    return u
}
function Kt(e, n, t, i, r, s) {
    const u = e[t];
    if (u != null) {
        const l = L(u, "default");
        if (l && i === void 0) {
            const o = u.default;
            if (u.type !== Function && M(o)) {
                const {propsDefaults: f} = r;
                t in f ? i = f[t] : (mn(r),
                i = f[t] = o.call(null, n),
                Ze())
            } else
                i = o
        }
        u[0] && (s && !l ? i = !1 : u[1] && (i === "" || i === He(t)) && (i = !0))
    }
    return i
}
function ar(e, n, t=!1) {
    const i = n.propsCache
      , r = i.get(e);
    if (r)
        return r;
    const s = e.props
      , u = {}
      , l = [];
    let o = !1;
    if (!M(e)) {
        const g = h=>{
            o = !0;
            const [d,m] = ar(h, n, !0);
            oe(u, d),
            m && l.push(...m)
        }
        ;
        !t && n.mixins.length && n.mixins.forEach(g),
        e.extends && g(e.extends),
        e.mixins && e.mixins.forEach(g)
    }
    if (!s && !o)
        return i.set(e, ln),
        ln;
    if (A(s))
        for (let g = 0; g < s.length; g++) {
            const h = cn(s[g]);
            hr(h) && (u[h] = H)
        }
    else if (s)
        for (const g in s) {
            const h = cn(g);
            if (hr(h)) {
                const d = s[g]
                  , m = u[h] = A(d) || M(d) ? {
                    type: d
                } : d;
                if (m) {
                    const z = pr(Boolean, m.type)
                      , S = pr(String, m.type);
                    m[0] = z > -1,
                    m[1] = S < 0 || z < S,
                    (z > -1 || L(m, "default")) && l.push(h)
                }
            }
        }
    const f = [u, l];
    return i.set(e, f),
    f
}
function hr(e) {
    return e[0] !== "$"
}
function gr(e) {
    const n = e && e.toString().match(/^\s*function (\w+)/);
    return n ? n[1] : e === null ? "null" : ""
}
function dr(e, n) {
    return gr(e) === gr(n)
}
function pr(e, n) {
    return A(n) ? n.findIndex(t=>dr(t, e)) : M(n) && dr(n, e) ? 0 : -1
}
const mr = e=>e[0] === "_" || e === "$stable"
  , Wt = e=>A(e) ? e.map(je) : [je(e)]
  , Jo = (e,n,t)=>{
    const i = vo((...r)=>Wt(n(...r)), t);
    return i._c = !1,
    i
}
  , br = (e,n,t)=>{
    const i = e._ctx;
    for (const r in e) {
        if (mr(r))
            continue;
        const s = e[r];
        if (M(s))
            n[r] = Jo(r, s, i);
        else if (s != null) {
            const u = Wt(s);
            n[r] = ()=>u
        }
    }
}
  , xr = (e,n)=>{
    const t = Wt(n);
    e.slots.default = ()=>t
}
  , Vo = (e,n)=>{
    if (e.vnode.shapeFlag & 32) {
        const t = n._;
        t ? (e.slots = R(n),
        Rn(n, "_", t)) : br(n, e.slots = {})
    } else
        e.slots = {},
        n && xr(e, n);
    Rn(e.slots, nt, 1)
}
  , Zo = (e,n,t)=>{
    const {vnode: i, slots: r} = e;
    let s = !0
      , u = H;
    if (i.shapeFlag & 32) {
        const l = n._;
        l ? t && l === 1 ? s = !1 : (oe(r, n),
        !t && l === 1 && delete r._) : (s = !n.$stable,
        br(n, r)),
        u = n
    } else
        n && (xr(e, n),
        u = {
            default: 1
        });
    if (s)
        for (const l in r)
            !mr(l) && !(l in u) && delete r[l]
}
;
function rc(e, n) {
    const t = de;
    if (t === null)
        return e;
    const i = t.proxy
      , r = e.dirs || (e.dirs = []);
    for (let s = 0; s < n.length; s++) {
        let[u,l,o,f=H] = n[s];
        M(u) && (u = {
            mounted: u,
            updated: u
        }),
        u.deep && We(l),
        r.push({
            dir: u,
            instance: i,
            value: l,
            oldValue: void 0,
            arg: o,
            modifiers: f
        })
    }
    return e
}
function Xe(e, n, t, i) {
    const r = e.dirs
      , s = n && n.dirs;
    for (let u = 0; u < r.length; u++) {
        const l = r[u];
        s && (l.oldValue = s[u].value);
        let o = l.dir[i];
        o && (hn(),
        xe(o, t, 8, [e.el, l, e, n]),
        Ke())
    }
}
function yr() {
    return {
        app: null,
        config: {
            isNativeTag: Es,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Qo = 0;
function Go(e, n) {
    return function(i, r=null) {
        r != null && !G(r) && (r = null);
        const s = yr()
          , u = new Set;
        let l = !1;
        const o = s.app = {
            _uid: Qo++,
            _component: i,
            _props: r,
            _container: null,
            _context: s,
            _instance: null,
            version: _l,
            get config() {
                return s.config
            },
            set config(f) {},
            use(f, ...g) {
                return u.has(f) || (f && M(f.install) ? (u.add(f),
                f.install(o, ...g)) : M(f) && (u.add(f),
                f(o, ...g))),
                o
            },
            mixin(f) {
                return s.mixins.includes(f) || s.mixins.push(f),
                o
            },
            component(f, g) {
                return g ? (s.components[f] = g,
                o) : s.components[f]
            },
            directive(f, g) {
                return g ? (s.directives[f] = g,
                o) : s.directives[f]
            },
            mount(f, g, h) {
                if (!l) {
                    const d = ze(i, r);
                    return d.appContext = s,
                    g && n ? n(d, f) : e(d, f, h),
                    l = !0,
                    o._container = f,
                    f.__vue_app__ = o,
                    Qt(d.component) || d.component.proxy
                }
            },
            unmount() {
                l && (e(null, o._container),
                delete o._container.__vue_app__)
            },
            provide(f, g) {
                return s.provides[f] = g,
                o
            }
        };
        return o
    }
}
function Yt(e, n, t, i, r=!1) {
    if (A(e)) {
        e.forEach((d,m)=>Yt(d, n && (A(n) ? n[m] : n), t, i, r));
        return
    }
    if (Ht(i) && !r)
        return;
    const s = i.shapeFlag & 4 ? Qt(i.component) || i.component.proxy : i.el
      , u = r ? null : s
      , {i: l, r: o} = e
      , f = n && n.r
      , g = l.refs === H ? l.refs = {} : l.refs
      , h = l.setupState;
    if (f != null && f !== o && (te(f) ? (g[f] = null,
    L(h, f) && (h[f] = null)) : ee(f) && (f.value = null)),
    M(o))
        $e(o, l, 12, [u, g]);
    else {
        const d = te(o)
          , m = ee(o);
        if (d || m) {
            const z = ()=>{
                if (e.f) {
                    const S = d ? g[o] : o.value;
                    r ? A(S) && mt(S, s) : A(S) ? S.includes(s) || S.push(s) : d ? g[o] = [s] : (o.value = [s],
                    e.k && (g[e.k] = o.value))
                } else
                    d ? (g[o] = u,
                    L(h, o) && (h[o] = u)) : ee(o) && (o.value = u,
                    e.k && (g[e.k] = u))
            }
            ;
            u ? (z.id = -1,
            ue(z, t)) : z()
        }
    }
}
const ue = Po;
function el(e) {
    return nl(e)
}
function nl(e, n) {
    const t = qs();
    t.__VUE__ = !0;
    const {insert: i, remove: r, patchProp: s, createElement: u, createText: l, createComment: o, setText: f, setElementText: g, parentNode: h, nextSibling: d, setScopeId: m=be, cloneNode: z, insertStaticContent: S} = e
      , E = (c,a,p,x=null,b=null,w=null,j=!1,_=null,v=!!a.dynamicChildren)=>{
        if (c === a)
            return;
        c && !Sn(c, a) && (x = Nn(c),
        Ne(c, b, w, !0),
        c = null),
        a.patchFlag === -2 && (v = !1,
        a.dynamicChildren = null);
        const {type: y, ref: T, shapeFlag: O} = a;
        switch (y) {
        case Xt:
            I(c, a, p, x);
            break;
        case ke:
            F(c, a, p, x);
            break;
        case Jt:
            c == null && k(a, p, x, j);
            break;
        case ye:
            se(c, a, p, x, b, w, j, _, v);
            break;
        default:
            O & 1 ? Q(c, a, p, x, b, w, j, _, v) : O & 6 ? pe(c, a, p, x, b, w, j, _, v) : (O & 64 || O & 128) && y.process(c, a, p, x, b, w, j, _, v, sn)
        }
        T != null && b && Yt(T, c && c.ref, w, a || c, !a)
    }
      , I = (c,a,p,x)=>{
        if (c == null)
            i(a.el = l(a.children), p, x);
        else {
            const b = a.el = c.el;
            a.children !== c.children && f(b, a.children)
        }
    }
      , F = (c,a,p,x)=>{
        c == null ? i(a.el = o(a.children || ""), p, x) : a.el = c.el
    }
      , k = (c,a,p,x)=>{
        [c.el,c.anchor] = S(c.children, a, p, x, c.el, c.anchor)
    }
      , C = ({el: c, anchor: a},p,x)=>{
        let b;
        for (; c && c !== a; )
            b = d(c),
            i(c, p, x),
            c = b;
        i(a, p, x)
    }
      , N = ({el: c, anchor: a})=>{
        let p;
        for (; c && c !== a; )
            p = d(c),
            r(c),
            c = p;
        r(a)
    }
      , Q = (c,a,p,x,b,w,j,_,v)=>{
        j = j || a.type === "svg",
        c == null ? Y(a, p, x, b, w, j, _, v) : ne(c, a, b, w, j, _, v)
    }
      , Y = (c,a,p,x,b,w,j,_)=>{
        let v, y;
        const {type: T, props: O, shapeFlag: P, transition: q, patchFlag: $, dirs: W} = c;
        if (c.el && z !== void 0 && $ === -1)
            v = c.el = z(c.el);
        else {
            if (v = c.el = u(c.type, w, O && O.is, O),
            P & 8 ? g(v, c.children) : P & 16 && J(c.children, v, null, x, b, w && T !== "foreignObject", j, _),
            W && Xe(c, null, x, "created"),
            O) {
                for (const U in O)
                    U !== "value" && !$n(U) && s(v, U, null, O[U], w, c.children, x, b, Te);
                "value"in O && s(v, "value", null, O.value),
                (y = O.onVnodeBeforeMount) && Oe(y, x, c)
            }
            K(v, c, c.scopeId, j, x)
        }
        W && Xe(c, null, x, "beforeMount");
        const D = (!b || b && !b.pendingBranch) && q && !q.persisted;
        D && q.beforeEnter(v),
        i(v, a, p),
        ((y = O && O.onVnodeMounted) || D || W) && ue(()=>{
            y && Oe(y, x, c),
            D && q.enter(v),
            W && Xe(c, null, x, "mounted")
        }
        , b)
    }
      , K = (c,a,p,x,b)=>{
        if (p && m(c, p),
        x)
            for (let w = 0; w < x.length; w++)
                m(c, x[w]);
        if (b) {
            let w = b.subTree;
            if (a === w) {
                const j = b.vnode;
                K(c, j, j.scopeId, j.slotScopeIds, b.parent)
            }
        }
    }
      , J = (c,a,p,x,b,w,j,_,v=0)=>{
        for (let y = v; y < c.length; y++) {
            const T = c[y] = _ ? Re(c[y]) : je(c[y]);
            E(null, T, a, p, x, b, w, j, _)
        }
    }
      , ne = (c,a,p,x,b,w,j)=>{
        const _ = a.el = c.el;
        let {patchFlag: v, dynamicChildren: y, dirs: T} = a;
        v |= c.patchFlag & 16;
        const O = c.props || H
          , P = a.props || H;
        let q;
        p && Je(p, !1),
        (q = P.onVnodeBeforeUpdate) && Oe(q, p, a, c),
        T && Xe(a, c, p, "beforeUpdate"),
        p && Je(p, !0);
        const $ = b && a.type !== "foreignObject";
        if (y ? Z(c.dynamicChildren, y, _, p, x, $, w) : j || Ee(c, a, _, null, p, x, $, w, !1),
        v > 0) {
            if (v & 16)
                re(_, a, O, P, p, x, b);
            else if (v & 2 && O.class !== P.class && s(_, "class", null, P.class, b),
            v & 4 && s(_, "style", O.style, P.style, b),
            v & 8) {
                const W = a.dynamicProps;
                for (let D = 0; D < W.length; D++) {
                    const U = W[D]
                      , me = O[U]
                      , on = P[U];
                    (on !== me || U === "value") && s(_, U, me, on, b, c.children, p, x, Te)
                }
            }
            v & 1 && c.children !== a.children && g(_, a.children)
        } else
            !j && y == null && re(_, a, O, P, p, x, b);
        ((q = P.onVnodeUpdated) || T) && ue(()=>{
            q && Oe(q, p, a, c),
            T && Xe(a, c, p, "updated")
        }
        , x)
    }
      , Z = (c,a,p,x,b,w,j)=>{
        for (let _ = 0; _ < a.length; _++) {
            const v = c[_]
              , y = a[_]
              , T = v.el && (v.type === ye || !Sn(v, y) || v.shapeFlag & (6 | 64)) ? h(v.el) : p;
            E(v, y, T, null, x, b, w, j, !0)
        }
    }
      , re = (c,a,p,x,b,w,j)=>{
        if (p !== x) {
            for (const _ in x) {
                if ($n(_))
                    continue;
                const v = x[_]
                  , y = p[_];
                v !== y && _ !== "value" && s(c, _, y, v, j, a.children, b, w, Te)
            }
            if (p !== H)
                for (const _ in p)
                    !$n(_) && !(_ in x) && s(c, _, p[_], null, j, a.children, b, w, Te);
            "value"in x && s(c, "value", p.value, x.value)
        }
    }
      , se = (c,a,p,x,b,w,j,_,v)=>{
        const y = a.el = c ? c.el : l("")
          , T = a.anchor = c ? c.anchor : l("");
        let {patchFlag: O, dynamicChildren: P, slotScopeIds: q} = a;
        q && (_ = _ ? _.concat(q) : q),
        c == null ? (i(y, p, x),
        i(T, p, x),
        J(a.children, p, T, b, w, j, _, v)) : O > 0 && O & 64 && P && c.dynamicChildren ? (Z(c.dynamicChildren, P, p, b, w, j, _),
        (a.key != null || b && a === b.subTree) && _r(c, a, !0)) : Ee(c, a, p, T, b, w, j, _, v)
    }
      , pe = (c,a,p,x,b,w,j,_,v)=>{
        a.slotScopeIds = _,
        c == null ? a.shapeFlag & 512 ? b.ctx.activate(a, p, x, j, v) : Ae(a, p, x, b, w, j, v) : V(c, a, v)
    }
      , Ae = (c,a,p,x,b,w,j)=>{
        const _ = c.component = gl(c, x, b);
        if (tr(c) && (_.ctx.renderer = sn),
        pl(_),
        _.asyncDep) {
            if (b && b.registerDep(_, X),
            !c.el) {
                const v = _.subTree = ze(ke);
                F(null, v, a, p)
            }
            return
        }
        X(_, c, a, p, b, w, j)
    }
      , V = (c,a,p)=>{
        const x = a.component = c.component;
        if (Oo(c, a, p))
            if (x.asyncDep && !x.asyncResolved) {
                B(x, a, p);
                return
            } else
                x.next = a,
                xo(x.update),
                x.update();
        else
            a.component = c.component,
            a.el = c.el,
            x.vnode = a
    }
      , X = (c,a,p,x,b,w,j)=>{
        const _ = ()=>{
            if (c.isMounted) {
                let {next: T, bu: O, u: P, parent: q, vnode: $} = c, W = T, D;
                Je(c, !1),
                T ? (T.el = $.el,
                B(c, T, j)) : T = $,
                O && kn(O),
                (D = T.props && T.props.onVnodeBeforeUpdate) && Oe(D, q, T, $),
                Je(c, !0);
                const U = kt(c)
                  , me = c.subTree;
                c.subTree = U,
                E(me, U, h(me.el), Nn(me), c, b, w),
                T.el = U.el,
                W === null && Eo(c, U.el),
                P && ue(P, b),
                (D = T.props && T.props.onVnodeUpdated) && ue(()=>Oe(D, q, T, $), b)
            } else {
                let T;
                const {el: O, props: P} = a
                  , {bm: q, m: $, parent: W} = c
                  , D = Ht(a);
                if (Je(c, !1),
                q && kn(q),
                !D && (T = P && P.onVnodeBeforeMount) && Oe(T, W, a),
                Je(c, !0),
                O && at) {
                    const U = ()=>{
                        c.subTree = kt(c),
                        at(O, c.subTree, c, b, null)
                    }
                    ;
                    D ? a.type.__asyncLoader().then(()=>!c.isUnmounted && U()) : U()
                } else {
                    const U = c.subTree = kt(c);
                    E(null, U, p, x, c, b, w),
                    a.el = U.el
                }
                if ($ && ue($, b),
                !D && (T = P && P.onVnodeMounted)) {
                    const U = a;
                    ue(()=>Oe(T, W, U), b)
                }
                a.shapeFlag & 256 && c.a && ue(c.a, b),
                c.isMounted = !0,
                a = p = x = null
            }
        }
          , v = c.effect = new Ot(_,()=>Yi(c.update),c.scope)
          , y = c.update = v.run.bind(v);
        y.id = c.uid,
        Je(c, !0),
        y()
    }
      , B = (c,a,p)=>{
        a.component = c;
        const x = c.vnode.props;
        c.vnode = a,
        c.next = null,
        Xo(c, a.props, x, p),
        Zo(c, a.children, p),
        hn(),
        $t(void 0, c.update),
        Ke()
    }
      , Ee = (c,a,p,x,b,w,j,_,v=!1)=>{
        const y = c && c.children
          , T = c ? c.shapeFlag : 0
          , O = a.children
          , {patchFlag: P, shapeFlag: q} = a;
        if (P > 0) {
            if (P & 128) {
                _n(y, O, p, x, b, w, j, _, v);
                return
            } else if (P & 256) {
                ct(y, O, p, x, b, w, j, _, v);
                return
            }
        }
        q & 8 ? (T & 16 && Te(y, b, w),
        O !== y && g(p, O)) : T & 16 ? q & 16 ? _n(y, O, p, x, b, w, j, _, v) : Te(y, b, w, !0) : (T & 8 && g(p, ""),
        q & 16 && J(O, p, x, b, w, j, _, v))
    }
      , ct = (c,a,p,x,b,w,j,_,v)=>{
        c = c || ln,
        a = a || ln;
        const y = c.length
          , T = a.length
          , O = Math.min(y, T);
        let P;
        for (P = 0; P < O; P++) {
            const q = a[P] = v ? Re(a[P]) : je(a[P]);
            E(c[P], q, p, null, b, w, j, _, v)
        }
        y > T ? Te(c, b, w, !0, !1, O) : J(a, p, x, b, w, j, _, v, O)
    }
      , _n = (c,a,p,x,b,w,j,_,v)=>{
        let y = 0;
        const T = a.length;
        let O = c.length - 1
          , P = T - 1;
        for (; y <= O && y <= P; ) {
            const q = c[y]
              , $ = a[y] = v ? Re(a[y]) : je(a[y]);
            if (Sn(q, $))
                E(q, $, p, null, b, w, j, _, v);
            else
                break;
            y++
        }
        for (; y <= O && y <= P; ) {
            const q = c[O]
              , $ = a[P] = v ? Re(a[P]) : je(a[P]);
            if (Sn(q, $))
                E(q, $, p, null, b, w, j, _, v);
            else
                break;
            O--,
            P--
        }
        if (y > O) {
            if (y <= P) {
                const q = P + 1
                  , $ = q < T ? a[q].el : x;
                for (; y <= P; )
                    E(null, a[y] = v ? Re(a[y]) : je(a[y]), p, $, b, w, j, _, v),
                    y++
            }
        } else if (y > P)
            for (; y <= O; )
                Ne(c[y], b, w, !0),
                y++;
        else {
            const q = y
              , $ = y
              , W = new Map;
            for (y = $; y <= P; y++) {
                const ce = a[y] = v ? Re(a[y]) : je(a[y]);
                ce.key != null && W.set(ce.key, y)
            }
            let D, U = 0;
            const me = P - $ + 1;
            let on = !1
              , fi = 0;
            const wn = new Array(me);
            for (y = 0; y < me; y++)
                wn[y] = 0;
            for (y = q; y <= O; y++) {
                const ce = c[y];
                if (U >= me) {
                    Ne(ce, b, w, !0);
                    continue
                }
                let _e;
                if (ce.key != null)
                    _e = W.get(ce.key);
                else
                    for (D = $; D <= P; D++)
                        if (wn[D - $] === 0 && Sn(ce, a[D])) {
                            _e = D;
                            break
                        }
                _e === void 0 ? Ne(ce, b, w, !0) : (wn[_e - $] = y + 1,
                _e >= fi ? fi = _e : on = !0,
                E(ce, a[_e], p, null, b, w, j, _, v),
                U++)
            }
            const ai = on ? tl(wn) : ln;
            for (D = ai.length - 1,
            y = me - 1; y >= 0; y--) {
                const ce = $ + y
                  , _e = a[ce]
                  , hi = ce + 1 < T ? a[ce + 1].el : x;
                wn[y] === 0 ? E(null, _e, p, hi, b, w, j, _, v) : on && (D < 0 || y !== ai[D] ? rn(_e, p, hi, 2) : D--)
            }
        }
    }
      , rn = (c,a,p,x,b=null)=>{
        const {el: w, type: j, transition: _, children: v, shapeFlag: y} = c;
        if (y & 6) {
            rn(c.component.subTree, a, p, x);
            return
        }
        if (y & 128) {
            c.suspense.move(a, p, x);
            return
        }
        if (y & 64) {
            j.move(c, a, p, sn);
            return
        }
        if (j === ye) {
            i(w, a, p);
            for (let O = 0; O < v.length; O++)
                rn(v[O], a, p, x);
            i(c.anchor, a, p);
            return
        }
        if (j === Jt) {
            C(c, a, p);
            return
        }
        if (x !== 2 && y & 1 && _)
            if (x === 0)
                _.beforeEnter(w),
                i(w, a, p),
                ue(()=>_.enter(w), b);
            else {
                const {leave: O, delayLeave: P, afterLeave: q} = _
                  , $ = ()=>i(w, a, p)
                  , W = ()=>{
                    O(w, ()=>{
                        $(),
                        q && q()
                    }
                    )
                }
                ;
                P ? P(w, $, W) : W()
            }
        else
            i(w, a, p)
    }
      , Ne = (c,a,p,x=!1,b=!1)=>{
        const {type: w, props: j, ref: _, children: v, dynamicChildren: y, shapeFlag: T, patchFlag: O, dirs: P} = c;
        if (_ != null && Yt(_, null, p, c, !0),
        T & 256) {
            a.ctx.deactivate(c);
            return
        }
        const q = T & 1 && P
          , $ = !Ht(c);
        let W;
        if ($ && (W = j && j.onVnodeBeforeUnmount) && Oe(W, a, c),
        T & 6)
            _s(c.component, p, x);
        else {
            if (T & 128) {
                c.suspense.unmount(p, x);
                return
            }
            q && Xe(c, null, a, "beforeUnmount"),
            T & 64 ? c.type.remove(c, a, p, b, sn, x) : y && (w !== ye || O > 0 && O & 64) ? Te(y, a, p, !1, !0) : (w === ye && O & (128 | 256) || !b && T & 16) && Te(v, a, p),
            x && ui(c)
        }
        ($ && (W = j && j.onVnodeUnmounted) || q) && ue(()=>{
            W && Oe(W, a, c),
            q && Xe(c, null, a, "unmounted")
        }
        , p)
    }
      , ui = c=>{
        const {type: a, el: p, anchor: x, transition: b} = c;
        if (a === ye) {
            ys(p, x);
            return
        }
        if (a === Jt) {
            N(c);
            return
        }
        const w = ()=>{
            r(p),
            b && !b.persisted && b.afterLeave && b.afterLeave()
        }
        ;
        if (c.shapeFlag & 1 && b && !b.persisted) {
            const {leave: j, delayLeave: _} = b
              , v = ()=>j(p, w);
            _ ? _(c.el, w, v) : v()
        } else
            w()
    }
      , ys = (c,a)=>{
        let p;
        for (; c !== a; )
            p = d(c),
            r(c),
            c = p;
        r(a)
    }
      , _s = (c,a,p)=>{
        const {bum: x, scope: b, update: w, subTree: j, um: _} = c;
        x && kn(x),
        b.stop(),
        w && (w.active = !1,
        Ne(j, c, a, p)),
        _ && ue(_, a),
        ue(()=>{
            c.isUnmounted = !0
        }
        , a),
        a && a.pendingBranch && !a.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === a.pendingId && (a.deps--,
        a.deps === 0 && a.resolve())
    }
      , Te = (c,a,p,x=!1,b=!1,w=0)=>{
        for (let j = w; j < c.length; j++)
            Ne(c[j], a, p, x, b)
    }
      , Nn = c=>c.shapeFlag & 6 ? Nn(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : d(c.anchor || c.el)
      , ci = (c,a,p)=>{
        c == null ? a._vnode && Ne(a._vnode, null, null, !0) : E(a._vnode || null, c, a, null, null, null, p),
        Vi(),
        a._vnode = c
    }
      , sn = {
        p: E,
        um: Ne,
        m: rn,
        r: ui,
        mt: Ae,
        mc: J,
        pc: Ee,
        pbc: Z,
        n: Nn,
        o: e
    };
    let ft, at;
    return n && ([ft,at] = n(sn)),
    {
        render: ci,
        hydrate: ft,
        createApp: Go(ci, ft)
    }
}
function Je({effect: e, update: n}, t) {
    e.allowRecurse = n.allowRecurse = t
}
function _r(e, n, t=!1) {
    const i = e.children
      , r = n.children;
    if (A(i) && A(r))
        for (let s = 0; s < i.length; s++) {
            const u = i[s];
            let l = r[s];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Re(r[s]),
            l.el = u.el),
            t || _r(u, l))
        }
}
function tl(e) {
    const n = e.slice()
      , t = [0];
    let i, r, s, u, l;
    const o = e.length;
    for (i = 0; i < o; i++) {
        const f = e[i];
        if (f !== 0) {
            if (r = t[t.length - 1],
            e[r] < f) {
                n[i] = r,
                t.push(i);
                continue
            }
            for (s = 0,
            u = t.length - 1; s < u; )
                l = s + u >> 1,
                e[t[l]] < f ? s = l + 1 : u = l;
            f < e[t[s]] && (s > 0 && (n[i] = t[s - 1]),
            t[s] = i)
        }
    }
    for (s = t.length,
    u = t[s - 1]; s-- > 0; )
        t[s] = u,
        u = n[u];
    return t
}
const il = e=>e.__isTeleport
  , rl = Symbol()
  , ye = Symbol(void 0)
  , Xt = Symbol(void 0)
  , ke = Symbol(void 0)
  , Jt = Symbol(void 0)
  , In = [];
let Ve = null;
function wr(e=!1) {
    In.push(Ve = e ? null : [])
}
function sl() {
    In.pop(),
    Ve = In[In.length - 1] || null
}
let et = 1;
function vr(e) {
    et += e
}
function zr(e) {
    return e.dynamicChildren = et > 0 ? Ve || ln : null,
    sl(),
    et > 0 && Ve && Ve.push(e),
    e
}
function sc(e, n, t, i, r, s) {
    return zr(Tr(e, n, t, i, r, s, !0))
}
function jr(e, n, t, i, r) {
    return zr(ze(e, n, t, i, r, !0))
}
function Or(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function Sn(e, n) {
    return e.type === n.type && e.key === n.key
}
const nt = "__vInternal"
  , Er = ({key: e})=>e != null ? e : null
  , tt = ({ref: e, ref_key: n, ref_for: t})=>e != null ? te(e) || ee(e) || M(e) ? {
    i: de,
    r: e,
    k: n,
    f: !!t
} : e : null;
function Tr(e, n=null, t=null, i=0, r=null, s=e === ye ? 0 : 1, u=!1, l=!1) {
    const o = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: n,
        key: n && Er(n),
        ref: n && tt(n),
        scopeId: Vn,
        slotScopeIds: null,
        children: t,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: i,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null
    };
    return l ? (Vt(o, t),
    s & 128 && e.normalize(o)) : t && (o.shapeFlag |= te(t) ? 8 : 16),
    et > 0 && !u && Ve && (o.patchFlag > 0 || s & 6) && o.patchFlag !== 32 && Ve.push(o),
    o
}
const ze = ol;
function ol(e, n=null, t=null, i=0, r=null, s=!1) {
    if ((!e || e === rl) && (e = ke),
    Or(e)) {
        const l = qn(e, n, !0);
        return t && Vt(l, t),
        l
    }
    if (yl(e) && (e = e.__vccOpts),
    n) {
        n = ll(n);
        let {class: l, style: o} = n;
        l && !te(l) && (n.class = dt(l)),
        G(o) && (ki(o) && !A(o) && (o = oe({}, o)),
        n.style = gt(o))
    }
    const u = te(e) ? 1 : To(e) ? 128 : il(e) ? 64 : G(e) ? 4 : M(e) ? 2 : 0;
    return Tr(e, n, t, i, r, u, s, !0)
}
function ll(e) {
    return e ? ki(e) || nt in e ? oe({}, e) : e : null
}
function qn(e, n, t=!1) {
    const {props: i, ref: r, patchFlag: s, children: u} = e
      , l = n ? cl(i || {}, n) : i;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && Er(l),
        ref: n && n.ref ? t && r ? A(r) ? r.concat(tt(n)) : [r, tt(n)] : tt(n) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: u,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: n && e.type !== ye ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && qn(e.ssContent),
        ssFallback: e.ssFallback && qn(e.ssFallback),
        el: e.el,
        anchor: e.anchor
    }
}
function ul(e=" ", n=0) {
    return ze(Xt, null, e, n)
}
function oc(e="", n=!1) {
    return n ? (wr(),
    jr(ke, null, e)) : ze(ke, null, e)
}
function je(e) {
    return e == null || typeof e == "boolean" ? ze(ke) : A(e) ? ze(ye, null, e.slice()) : typeof e == "object" ? Re(e) : ze(Xt, null, String(e))
}
function Re(e) {
    return e.el === null || e.memo ? e : qn(e)
}
function Vt(e, n) {
    let t = 0;
    const {shapeFlag: i} = e;
    if (n == null)
        n = null;
    else if (A(n))
        t = 16;
    else if (typeof n == "object")
        if (i & (1 | 64)) {
            const r = n.default;
            r && (r._c && (r._d = !1),
            Vt(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            t = 32;
            const r = n._;
            !r && !(nt in n) ? n._ctx = de : r === 3 && de && (de.slots._ === 1 ? n._ = 1 : (n._ = 2,
            e.patchFlag |= 1024))
        }
    else
        M(n) ? (n = {
            default: n,
            _ctx: de
        },
        t = 32) : (n = String(n),
        i & 64 ? (t = 16,
        n = [ul(n)]) : t = 8);
    e.children = n,
    e.shapeFlag |= t
}
function cl(...e) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
        const i = e[t];
        for (const r in i)
            if (r === "class")
                n.class !== i.class && (n.class = dt([n.class, i.class]));
            else if (r === "style")
                n.style = gt([n.style, i.style]);
            else if (Mn(r)) {
                const s = n[r]
                  , u = i[r];
                u && s !== u && !(A(s) && s.includes(u)) && (n[r] = s ? [].concat(s, u) : u)
            } else
                r !== "" && (n[r] = i[r])
    }
    return n
}
function Oe(e, n, t, i=null) {
    xe(e, n, 7, [t, i])
}
function lc(e, n, t, i) {
    let r;
    const s = t && t[i];
    if (A(e) || te(e)) {
        r = new Array(e.length);
        for (let u = 0, l = e.length; u < l; u++)
            r[u] = n(e[u], u, void 0, s && s[u])
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let u = 0; u < e; u++)
            r[u] = n(u + 1, u, void 0, s && s[u])
    } else if (G(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (u,l)=>n(u, l, void 0, s && s[l]));
        else {
            const u = Object.keys(e);
            r = new Array(u.length);
            for (let l = 0, o = u.length; l < o; l++) {
                const f = u[l];
                r[l] = n(e[f], f, l, s && s[l])
            }
        }
    else
        r = [];
    return t && (t[i] = r),
    r
}
function uc(e, n, t={}, i, r) {
    if (de.isCE)
        return ze("slot", n === "default" ? null : {
            name: n
        }, i && i());
    let s = e[n];
    s && s._c && (s._d = !1),
    wr();
    const u = s && Pr(s(t))
      , l = jr(ye, {
        key: t.key || `_${n}`
    }, u || (i ? i() : []), u && e._ === 1 ? 64 : -2);
    return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    l
}
function Pr(e) {
    return e.some(n=>Or(n) ? !(n.type === ke || n.type === ye && !Pr(n.children)) : !0) ? e : null
}
const Zt = e=>e ? Cr(e) ? Qt(e) || e.proxy : Zt(e.parent) : null
  , it = oe(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>Zt(e.parent),
    $root: e=>Zt(e.root),
    $emit: e=>e.emit,
    $options: e=>ur(e),
    $forceUpdate: e=>()=>Yi(e.update),
    $nextTick: e=>Wi.bind(e.proxy),
    $watch: e=>Io.bind(e)
})
  , fl = {
    get({_: e}, n) {
        const {ctx: t, setupState: i, data: r, props: s, accessCache: u, type: l, appContext: o} = e;
        let f;
        if (n[0] !== "$") {
            const m = u[n];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return i[n];
                case 2:
                    return r[n];
                case 4:
                    return t[n];
                case 3:
                    return s[n]
                }
            else {
                if (i !== H && L(i, n))
                    return u[n] = 1,
                    i[n];
                if (r !== H && L(r, n))
                    return u[n] = 2,
                    r[n];
                if ((f = e.propsOptions[0]) && L(f, n))
                    return u[n] = 3,
                    s[n];
                if (t !== H && L(t, n))
                    return u[n] = 4,
                    t[n];
                Bt && (u[n] = 0)
            }
        }
        const g = it[n];
        let h, d;
        if (g)
            return n === "$attrs" && fe(e, "get", n),
            g(e);
        if ((h = l.__cssModules) && (h = h[n]))
            return h;
        if (t !== H && L(t, n))
            return u[n] = 4,
            t[n];
        if (d = o.config.globalProperties,
        L(d, n))
            return d[n]
    },
    set({_: e}, n, t) {
        const {data: i, setupState: r, ctx: s} = e;
        if (r !== H && L(r, n))
            r[n] = t;
        else if (i !== H && L(i, n))
            i[n] = t;
        else if (L(e.props, n))
            return !1;
        return n[0] === "$" && n.slice(1)in e ? !1 : (s[n] = t,
        !0)
    },
    has({_: {data: e, setupState: n, accessCache: t, ctx: i, appContext: r, propsOptions: s}}, u) {
        let l;
        return !!t[u] || e !== H && L(e, u) || n !== H && L(n, u) || (l = s[0]) && L(l, u) || L(i, u) || L(it, u) || L(r.config.globalProperties, u)
    }
}
  , al = yr();
let hl = 0;
function gl(e, n, t) {
    const i = e.type
      , r = (n ? n.appContext : e.appContext) || al
      , s = {
        uid: hl++,
        vnode: e,
        type: i,
        parent: n,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new As(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: n ? n.provides : Object.create(r.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: ar(i, r),
        emitsOptions: Qi(i, r),
        emit: null,
        emitted: null,
        propsDefaults: H,
        inheritAttrs: i.inheritAttrs,
        ctx: H,
        data: H,
        props: H,
        attrs: H,
        slots: H,
        refs: H,
        setupState: H,
        setupContext: null,
        suspense: t,
        suspenseId: t ? t.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return s.ctx = {
        _: s
    },
    s.root = n ? n.root : s,
    s.emit = wo.bind(null, s),
    e.ce && e.ce(s),
    s
}
let ie = null;
const dl = ()=>ie || de
  , mn = e=>{
    ie = e,
    e.scope.on()
}
  , Ze = ()=>{
    ie && ie.scope.off(),
    ie = null
}
;
function Cr(e) {
    return e.vnode.shapeFlag & 4
}
let An = !1;
function pl(e, n=!1) {
    An = n;
    const {props: t, children: i} = e.vnode
      , r = Cr(e);
    Yo(e, t, r, n),
    Vo(e, i);
    const s = r ? ml(e, n) : void 0;
    return An = !1,
    s
}
function ml(e, n) {
    const t = e.type;
    e.accessCache = Object.create(null),
    e.proxy = Ri(new Proxy(e.ctx,fl));
    const {setup: i} = t;
    if (i) {
        const r = e.setupContext = i.length > 1 ? xl(e) : null;
        mn(e),
        hn();
        const s = $e(i, e, 0, [e.props, r]);
        if (Ke(),
        Ze(),
        mi(s)) {
            if (s.then(Ze, Ze),
            n)
                return s.then(u=>{
                    Ir(e, u, n)
                }
                ).catch(u=>{
                    Xn(u, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Ir(e, s, n)
    } else
        qr(e, n)
}
function Ir(e, n, t) {
    M(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : G(n) && (e.setupState = Ui(n)),
    qr(e, t)
}
let Sr;
function qr(e, n, t) {
    const i = e.type;
    if (!e.render) {
        if (!n && Sr && !i.render) {
            const r = i.template;
            if (r) {
                const {isCustomElement: s, compilerOptions: u} = e.appContext.config
                  , {delimiters: l, compilerOptions: o} = i
                  , f = oe(oe({
                    isCustomElement: s,
                    delimiters: l
                }, u), o);
                i.render = Sr(r, f)
            }
        }
        e.render = i.render || be
    }
    mn(e),
    hn(),
    Ho(e),
    Ke(),
    Ze()
}
function bl(e) {
    return new Proxy(e.attrs,{
        get(n, t) {
            return fe(e, "get", "$attrs"),
            n[t]
        }
    })
}
function xl(e) {
    const n = i=>{
        e.exposed = i || {}
    }
    ;
    let t;
    return {
        get attrs() {
            return t || (t = bl(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: n
    }
}
function Qt(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Ui(Ri(e.exposed)),{
            get(n, t) {
                if (t in n)
                    return n[t];
                if (t in it)
                    return it[t](e)
            }
        }))
}
function yl(e) {
    return M(e) && "__vccOpts"in e
}
const rt = (e,n)=>po(e, n, An)
  , _l = "3.2.29"
  , wl = "http://www.w3.org/2000/svg"
  , Qe = typeof document != "undefined" ? document : null
  , Ar = Qe && Qe.createElement("template")
  , vl = {
    insert: (e,n,t)=>{
        n.insertBefore(e, t || null)
    }
    ,
    remove: e=>{
        const n = e.parentNode;
        n && n.removeChild(e)
    }
    ,
    createElement: (e,n,t,i)=>{
        const r = n ? Qe.createElementNS(wl, e) : Qe.createElement(e, t ? {
            is: t
        } : void 0);
        return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple),
        r
    }
    ,
    createText: e=>Qe.createTextNode(e),
    createComment: e=>Qe.createComment(e),
    setText: (e,n)=>{
        e.nodeValue = n
    }
    ,
    setElementText: (e,n)=>{
        e.textContent = n
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>Qe.querySelector(e),
    setScopeId(e, n) {
        e.setAttribute(n, "")
    },
    cloneNode(e) {
        const n = e.cloneNode(!0);
        return "_value"in e && (n._value = e._value),
        n
    },
    insertStaticContent(e, n, t, i, r, s) {
        const u = t ? t.previousSibling : n.lastChild;
        if (r && (r === s || r.nextSibling))
            for (; n.insertBefore(r.cloneNode(!0), t),
            !(r === s || !(r = r.nextSibling)); )
                ;
        else {
            Ar.innerHTML = i ? `<svg>${e}</svg>` : e;
            const l = Ar.content;
            if (i) {
                const o = l.firstChild;
                for (; o.firstChild; )
                    l.appendChild(o.firstChild);
                l.removeChild(o)
            }
            n.insertBefore(l, t)
        }
        return [u ? u.nextSibling : n.firstChild, t ? t.previousSibling : n.lastChild]
    }
};
function zl(e, n, t) {
    const i = e._vtc;
    i && (n = (n ? [n, ...i] : [...i]).join(" ")),
    n == null ? e.removeAttribute("class") : t ? e.setAttribute("class", n) : e.className = n
}
function jl(e, n, t) {
    const i = e.style
      , r = te(t);
    if (t && !r) {
        for (const s in t)
            Gt(i, s, t[s]);
        if (n && !te(n))
            for (const s in n)
                t[s] == null && Gt(i, s, "")
    } else {
        const s = i.display;
        r ? n !== t && (i.cssText = t) : n && e.removeAttribute("style"),
        "_vod"in e && (i.display = s)
    }
}
const Nr = /\s*!important$/;
function Gt(e, n, t) {
    if (A(t))
        t.forEach(i=>Gt(e, n, i));
    else if (n.startsWith("--"))
        e.setProperty(n, t);
    else {
        const i = Ol(e, n);
        Nr.test(t) ? e.setProperty(He(i), t.replace(Nr, ""), "important") : e[i] = t
    }
}
const Mr = ["Webkit", "Moz", "ms"]
  , ei = {};
function Ol(e, n) {
    const t = ei[n];
    if (t)
        return t;
    let i = cn(n);
    if (i !== "filter" && i in e)
        return ei[n] = i;
    i = yi(i);
    for (let r = 0; r < Mr.length; r++) {
        const s = Mr[r] + i;
        if (s in e)
            return ei[n] = s
    }
    return n
}
const Fr = "http://www.w3.org/1999/xlink";
function El(e, n, t, i, r) {
    if (i && n.startsWith("xlink:"))
        t == null ? e.removeAttributeNS(Fr, n.slice(6, n.length)) : e.setAttributeNS(Fr, n, t);
    else {
        const s = vs(n);
        t == null || s && !gi(t) ? e.removeAttribute(n) : e.setAttribute(n, s ? "" : t)
    }
}
function Tl(e, n, t, i, r, s, u) {
    if (n === "innerHTML" || n === "textContent") {
        i && u(i, r, s),
        e[n] = t == null ? "" : t;
        return
    }
    if (n === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = t;
        const l = t == null ? "" : t;
        (e.value !== l || e.tagName === "OPTION") && (e.value = l),
        t == null && e.removeAttribute(n);
        return
    }
    if (t === "" || t == null) {
        const l = typeof e[n];
        if (l === "boolean") {
            e[n] = gi(t);
            return
        } else if (t == null && l === "string") {
            e[n] = "",
            e.removeAttribute(n);
            return
        } else if (l === "number") {
            try {
                e[n] = 0
            } catch {}
            e.removeAttribute(n);
            return
        }
    }
    try {
        e[n] = t
    } catch {}
}
let st = Date.now
  , $r = !1;
if (typeof window != "undefined") {
    st() > document.createEvent("Event").timeStamp && (st = ()=>performance.now());
    const e = navigator.userAgent.match(/firefox\/(\d+)/i);
    $r = !!(e && Number(e[1]) <= 53)
}
let ni = 0;
const Pl = Promise.resolve()
  , Cl = ()=>{
    ni = 0
}
  , Il = ()=>ni || (Pl.then(Cl),
ni = st());
function bn(e, n, t, i) {
    e.addEventListener(n, t, i)
}
function Sl(e, n, t, i) {
    e.removeEventListener(n, t, i)
}
function ql(e, n, t, i, r=null) {
    const s = e._vei || (e._vei = {})
      , u = s[n];
    if (i && u)
        u.value = i;
    else {
        const [l,o] = Al(n);
        if (i) {
            const f = s[n] = Nl(i, r);
            bn(e, l, f, o)
        } else
            u && (Sl(e, l, u, o),
            s[n] = void 0)
    }
}
const Lr = /(?:Once|Passive|Capture)$/;
function Al(e) {
    let n;
    if (Lr.test(e)) {
        n = {};
        let t;
        for (; t = e.match(Lr); )
            e = e.slice(0, e.length - t[0].length),
            n[t[0].toLowerCase()] = !0
    }
    return [He(e.slice(2)), n]
}
function Nl(e, n) {
    const t = i=>{
        const r = i.timeStamp || st();
        ($r || r >= t.attached - 1) && xe(Ml(i, t.value), n, 5, [i])
    }
    ;
    return t.value = e,
    t.attached = Il(),
    t
}
function Ml(e, n) {
    if (A(n)) {
        const t = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            t.call(e),
            e._stopped = !0
        }
        ,
        n.map(i=>r=>!r._stopped && i && i(r))
    } else
        return n
}
const kr = /^on[a-z]/
  , Fl = (e,n,t,i,r=!1,s,u,l,o)=>{
    n === "class" ? zl(e, i, r) : n === "style" ? jl(e, t, i) : Mn(n) ? pt(n) || ql(e, n, t, i, u) : (n[0] === "." ? (n = n.slice(1),
    !0) : n[0] === "^" ? (n = n.slice(1),
    !1) : $l(e, n, i, r)) ? Tl(e, n, i, s, u, l, o) : (n === "true-value" ? e._trueValue = i : n === "false-value" && (e._falseValue = i),
    El(e, n, i, r))
}
;
function $l(e, n, t, i) {
    return i ? !!(n === "innerHTML" || n === "textContent" || n in e && kr.test(n) && M(t)) : n === "spellcheck" || n === "draggable" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA" || kr.test(n) && te(t) ? !1 : n in e
}
const Rr = e=>{
    const n = e.props["onUpdate:modelValue"];
    return A(n) ? t=>kn(n, t) : n
}
;
function Ll(e) {
    e.target.composing = !0
}
function Dr(e) {
    const n = e.target;
    n.composing && (n.composing = !1,
    kl(n, "input"))
}
function kl(e, n) {
    const t = document.createEvent("HTMLEvents");
    t.initEvent(n, !0, !0),
    e.dispatchEvent(t)
}
const cc = {
    created(e, {modifiers: {lazy: n, trim: t, number: i}}, r) {
        e._assign = Rr(r);
        const s = i || r.props && r.props.type === "number";
        bn(e, n ? "change" : "input", u=>{
            if (u.target.composing)
                return;
            let l = e.value;
            t ? l = l.trim() : s && (l = _t(l)),
            e._assign(l)
        }
        ),
        t && bn(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        n || (bn(e, "compositionstart", Ll),
        bn(e, "compositionend", Dr),
        bn(e, "change", Dr))
    },
    mounted(e, {value: n}) {
        e.value = n == null ? "" : n
    },
    beforeUpdate(e, {value: n, modifiers: {lazy: t, trim: i, number: r}}, s) {
        if (e._assign = Rr(s),
        e.composing || document.activeElement === e && (t || i && e.value.trim() === n || (r || e.type === "number") && _t(e.value) === n))
            return;
        const u = n == null ? "" : n;
        e.value !== u && (e.value = u)
    }
}
  , Rl = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , fc = (e,n)=>t=>{
    if (!("key"in t))
        return;
    const i = He(t.key);
    if (n.some(r=>r === i || Rl[r] === i))
        return e(t)
}
  , Dl = oe({
    patchProp: Fl
}, vl);
let Hr;
function Hl() {
    return Hr || (Hr = el(Dl))
}
const ac = (...e)=>{
    const n = Hl().createApp(...e)
      , {mount: t} = n;
    return n.mount = i=>{
        const r = Bl(i);
        if (!r)
            return;
        const s = n._component;
        !M(s) && !s.render && !s.template && (s.template = r.innerHTML),
        r.innerHTML = "";
        const u = t(r, !1, r instanceof SVGElement);
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        u
    }
    ,
    n
}
;
function Bl(e) {
    return te(e) ? document.querySelector(e) : e
}
function xn(e) {
    return Ms() ? (Fs(e),
    !0) : !1
}
const yn = typeof window != "undefined"
  , Br = e=>typeof e == "string"
  , ti = ()=>{}
;
function Ur(e, n) {
    function t(...i) {
        e(()=>n.apply(this, i), {
            fn: n,
            thisArg: this,
            args: i
        })
    }
    return t
}
const Ul = e=>e();
function Kl(e, n={}) {
    let t, i;
    return s=>{
        const u = ve(e)
          , l = ve(n.maxWait);
        if (t && clearTimeout(t),
        u <= 0 || l !== void 0 && l <= 0)
            return i && (clearTimeout(i),
            i = null),
            s();
        l && !i && (i = setTimeout(()=>{
            t && clearTimeout(t),
            i = null,
            s()
        }
        , l)),
        t = setTimeout(()=>{
            i && clearTimeout(i),
            i = null,
            s()
        }
        , u)
    }
}
function Wl(e, n=200, t={}) {
    return Ur(Kl(n, t), e)
}
function hc(e, n=200, t={}) {
    if (n <= 0)
        return e;
    const i = ge(e.value)
      , r = Wl(()=>{
        i.value = e.value
    }
    , n, t);
    return Ie(e, ()=>r()),
    i
}
var Kr = Object.getOwnPropertySymbols
  , Yl = Object.prototype.hasOwnProperty
  , Xl = Object.prototype.propertyIsEnumerable
  , Jl = (e,n)=>{
    var t = {};
    for (var i in e)
        Yl.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
    if (e != null && Kr)
        for (var i of Kr(e))
            n.indexOf(i) < 0 && Xl.call(e, i) && (t[i] = e[i]);
    return t
}
;
function Vl(e, n, t={}) {
    const i = t
      , {eventFilter: r=Ul} = i
      , s = Jl(i, ["eventFilter"]);
    return Ie(e, Ur(r, n), s)
}
function Wr(e, n=!0) {
    dl() ? rr(e) : n ? e() : Wi(e)
}
function Zl(e, n=1e3, t={}) {
    const {immediate: i=!0, immediateCallback: r=!1} = t;
    let s = null;
    const u = ge(!1);
    function l() {
        s && (clearInterval(s),
        s = null)
    }
    function o() {
        u.value = !1,
        l()
    }
    function f() {
        n <= 0 || (u.value = !0,
        r && e(),
        l(),
        s = setInterval(e, n))
    }
    return i && yn && f(),
    xn(o),
    {
        isActive: u,
        pause: o,
        resume: f
    }
}
function Ql(e, n, t={}) {
    const {immediate: i=!0} = t
      , r = ge(!1);
    let s = null;
    function u() {
        s && (clearTimeout(s),
        s = null)
    }
    function l() {
        r.value = !1,
        u()
    }
    function o(...f) {
        u(),
        r.value = !0,
        s = setTimeout(()=>{
            r.value = !1,
            s = null,
            e(...f)
        }
        , ve(n))
    }
    return i && (r.value = !0,
    yn && o()),
    xn(l),
    {
        isPending: r,
        start: o,
        stop: l
    }
}
function gc(e=!1) {
    if (ee(e))
        return n=>{
            e.value = typeof n == "boolean" ? n : !e.value
        }
        ;
    {
        const n = ge(e);
        return [n, i=>{
            n.value = typeof i == "boolean" ? i : !n.value
        }
        ]
    }
}
function Gl(e) {
    var n;
    const t = ve(e);
    return (n = t == null ? void 0 : t.$el) != null ? n : t
}
const De = yn ? window : void 0
  , eu = yn ? window.document : void 0
  , Yr = yn ? window.navigator : void 0;
function Xr(...e) {
    let n, t, i, r;
    if (Br(e[0]) ? ([t,i,r] = e,
    n = De) : [n,t,i,r] = e,
    !n)
        return ti;
    let s = ti;
    const u = Ie(()=>ve(n), o=>{
        s(),
        !!o && (o.addEventListener(t, i, r),
        s = ()=>{
            o.removeEventListener(t, i, r),
            s = ti
        }
        )
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , l = ()=>{
        u(),
        s()
    }
    ;
    return xn(l),
    l
}
function nu(e, n={}) {
    const {window: t=De} = n;
    let i;
    const r = ge(!1)
      , s = ()=>{
        !t || (i || (i = t.matchMedia(e)),
        r.value = i.matches)
    }
    ;
    return Wr(()=>{
        s(),
        !!i && ("addEventListener"in i ? i.addEventListener("change", s) : i.addListener(s),
        xn(()=>{
            "removeEventListener"in s ? i.removeEventListener("change", s) : i.removeListener(s)
        }
        ))
    }
    ),
    r
}
function dc(e={}) {
    const {navigator: n=Yr, read: t=!1, source: i, copiedDuring: r=1500} = e
      , s = ["copy", "cut"]
      , u = Boolean(n && "clipboard"in n)
      , l = ge("")
      , o = ge(!1)
      , f = Ql(()=>o.value = !1, r);
    function g() {
        n.clipboard.readText().then(d=>{
            l.value = d
        }
        )
    }
    if (u && t)
        for (const d of s)
            Xr(d, g);
    async function h(d=ve(i)) {
        u && d != null && (await n.clipboard.writeText(d),
        l.value = d,
        o.value = !0,
        f.start())
    }
    return {
        isSupported: u,
        text: l,
        copied: o,
        copy: h
    }
}
const ii = typeof globalThis == "undefined" ? void 0 : globalThis
  , ri = "__vueuse_ssr_handlers__";
ii[ri] = ii[ri] || {};
const tu = ii[ri];
function Jr(e, n) {
    return tu[e] || n
}
function iu(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" || Array.isArray(e) ? "object" : Number.isNaN(e) ? "any" : "number"
}
const ru = {
    boolean: {
        read: e=>e === "true",
        write: e=>String(e)
    },
    object: {
        read: e=>JSON.parse(e),
        write: e=>JSON.stringify(e)
    },
    number: {
        read: e=>Number.parseFloat(e),
        write: e=>String(e)
    },
    any: {
        read: e=>e,
        write: e=>String(e)
    },
    string: {
        read: e=>e,
        write: e=>String(e)
    },
    map: {
        read: e=>new Map(JSON.parse(e)),
        write: e=>JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e=>new Set(JSON.parse(e)),
        write: e=>JSON.stringify(Array.from(e.entries()))
    }
};
function su(e, n, t, i={}) {
    var r;
    const {flush: s="pre", deep: u=!0, listenToStorageChanges: l=!0, writeDefaults: o=!0, shallow: f, window: g=De, eventFilter: h, onError: d=F=>{
        console.error(F)
    }
    } = i
      , m = ve(n)
      , z = iu(m)
      , S = (f ? fo : ge)(n)
      , E = (r = i.serializer) != null ? r : ru[z];
    if (!t)
        try {
            t = Jr("getDefaultStorage", ()=>{
                var F;
                return (F = De) == null ? void 0 : F.localStorage
            }
            )()
        } catch (F) {
            d(F)
        }
    function I(F) {
        if (!(!t || F && F.key !== e))
            try {
                const k = F ? F.newValue : t.getItem(e);
                k == null ? (S.value = m,
                o && m !== null && t.setItem(e, E.write(m))) : typeof k != "string" ? S.value = k : S.value = E.read(k)
            } catch (k) {
                d(k)
            }
    }
    return I(),
    g && l && Xr(g, "storage", F=>setTimeout(()=>I(F), 0)),
    t && Vl(S, ()=>{
        try {
            S.value == null ? t.removeItem(e) : t.setItem(e, E.write(S.value))
        } catch (F) {
            d(F)
        }
    }
    , {
        flush: s,
        deep: u,
        eventFilter: h
    }),
    S
}
function Vr(e) {
    return nu("(prefers-color-scheme: dark)", e)
}
var ou = Object.defineProperty
  , Zr = Object.getOwnPropertySymbols
  , lu = Object.prototype.hasOwnProperty
  , uu = Object.prototype.propertyIsEnumerable
  , Qr = (e,n,t)=>n in e ? ou(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : e[n] = t
  , cu = (e,n)=>{
    for (var t in n || (n = {}))
        lu.call(n, t) && Qr(e, t, n[t]);
    if (Zr)
        for (var t of Zr(n))
            uu.call(n, t) && Qr(e, t, n[t]);
    return e
}
;
function fu(e={}) {
    const {selector: n="html", attribute: t="class", window: i=De, storage: r, storageKey: s="vueuse-color-scheme", listenToStorageChanges: u=!0, storageRef: l} = e
      , o = cu({
        auto: "",
        light: "light",
        dark: "dark"
    }, e.modes || {})
      , f = Vr({
        window: i
    })
      , g = rt(()=>f.value ? "dark" : "light")
      , h = l || (s == null ? ge("auto") : su(s, "auto", r, {
        window: i,
        listenToStorageChanges: u
    }))
      , d = rt({
        get() {
            return h.value === "auto" ? g.value : h.value
        },
        set(E) {
            h.value = E
        }
    })
      , m = Jr("updateHTMLAttrs", (E,I,F)=>{
        const k = i == null ? void 0 : i.document.querySelector(E);
        if (!!k)
            if (I === "class") {
                const C = F.split(/\s/g);
                Object.values(o).flatMap(N=>(N || "").split(/\s/g)).filter(Boolean).forEach(N=>{
                    C.includes(N) ? k.classList.add(N) : k.classList.remove(N)
                }
                )
            } else
                k.setAttribute(I, F)
    }
    );
    function z(E) {
        var I;
        m(n, t, (I = o[E]) != null ? I : E)
    }
    function S(E) {
        e.onChanged ? e.onChanged(E, z) : z(E)
    }
    return Ie(d, S, {
        flush: "post",
        immediate: !0
    }),
    Wr(()=>S(d.value)),
    d
}
var au = Object.defineProperty
  , hu = Object.defineProperties
  , gu = Object.getOwnPropertyDescriptors
  , Gr = Object.getOwnPropertySymbols
  , du = Object.prototype.hasOwnProperty
  , pu = Object.prototype.propertyIsEnumerable
  , es = (e,n,t)=>n in e ? au(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : e[n] = t
  , mu = (e,n)=>{
    for (var t in n || (n = {}))
        du.call(n, t) && es(e, t, n[t]);
    if (Gr)
        for (var t of Gr(n))
            pu.call(n, t) && es(e, t, n[t]);
    return e
}
  , bu = (e,n)=>hu(e, gu(n));
function pc(e={}) {
    const {valueDark: n="dark", valueLight: t="", window: i=De} = e
      , r = fu(bu(mu({}, e), {
        onChanged: (l,o)=>{
            var f;
            e.onChanged ? (f = e.onChanged) == null || f.call(e, l === "dark") : o(l)
        }
        ,
        modes: {
            dark: n,
            light: t
        }
    }))
      , s = Vr({
        window: i
    });
    return rt({
        get() {
            return r.value === "dark"
        },
        set(l) {
            l === s.value ? r.value = "auto" : r.value = l ? "dark" : "light"
        }
    })
}
function xu(e, n={}) {
    const {immediate: t=!0, window: i=De} = n
      , r = ge(!1);
    function s() {
        !r.value || !i || (e(),
        i.requestAnimationFrame(s))
    }
    function u() {
        !r.value && i && (r.value = !0,
        s())
    }
    function l() {
        r.value = !1
    }
    return t && u(),
    xn(l),
    {
        isActive: r,
        pause: l,
        resume: u
    }
}
var ns = Object.getOwnPropertySymbols
  , yu = Object.prototype.hasOwnProperty
  , _u = Object.prototype.propertyIsEnumerable
  , wu = (e,n)=>{
    var t = {};
    for (var i in e)
        yu.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
    if (e != null && ns)
        for (var i of ns(e))
            n.indexOf(i) < 0 && _u.call(e, i) && (t[i] = e[i]);
    return t
}
;
function vu(e, n, t={}) {
    const i = t
      , {window: r=De} = i
      , s = wu(i, ["window"]);
    let u;
    const l = r && "IntersectionObserver"in r
      , o = ()=>{
        u && (u.disconnect(),
        u = void 0)
    }
      , f = Ie(()=>Gl(e), h=>{
        o(),
        l && r && h && (u = new r.MutationObserver(n),
        u.observe(h, s))
    }
    , {
        immediate: !0
    })
      , g = ()=>{
        o(),
        f()
    }
    ;
    return xn(g),
    {
        isSupported: l,
        stop: g
    }
}
var zu = Object.defineProperty
  , ts = Object.getOwnPropertySymbols
  , ju = Object.prototype.hasOwnProperty
  , Ou = Object.prototype.propertyIsEnumerable
  , is = (e,n,t)=>n in e ? zu(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : e[n] = t
  , Eu = (e,n)=>{
    for (var t in n || (n = {}))
        ju.call(n, t) && is(e, t, n[t]);
    if (ts)
        for (var t of ts(n))
            Ou.call(n, t) && is(e, t, n[t]);
    return e
}
;
function mc(e={}) {
    const {controls: n=!1, interval: t="requestAnimationFrame"} = e
      , i = ge(new Date)
      , r = ()=>i.value = new Date
      , s = t === "requestAnimationFrame" ? xu(r, {
        immediate: !0
    }) : Zl(r, t, {
        immediate: !0
    });
    return n ? Eu({
        now: i
    }, s) : i
}
var rs, ss;
yn && (window == null ? void 0 : window.navigator) && ((rs = window == null ? void 0 : window.navigator) == null ? void 0 : rs.platform) && /iP(ad|hone|od)/.test((ss = window == null ? void 0 : window.navigator) == null ? void 0 : ss.platform);
var Tu = Object.defineProperty
  , os = Object.getOwnPropertySymbols
  , Pu = Object.prototype.hasOwnProperty
  , Cu = Object.prototype.propertyIsEnumerable
  , ls = (e,n,t)=>n in e ? Tu(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : e[n] = t
  , us = (e,n)=>{
    for (var t in n || (n = {}))
        Pu.call(n, t) && ls(e, t, n[t]);
    if (os)
        for (var t of os(n))
            Cu.call(n, t) && ls(e, t, n[t]);
    return e
}
;
function bc(e={}, n={}) {
    const {navigator: t=Yr} = n
      , i = t
      , r = i && "canShare"in i;
    return {
        isSupported: r,
        share: async(u={})=>{
            if (r) {
                const l = us(us({}, ve(e)), ve(u));
                let o = !0;
                if (l.files && i.canShare && (o = i.canShare({
                    files: l.files
                })),
                o)
                    return i.share(l)
            }
        }
    }
}
var Iu = Object.defineProperty
  , cs = Object.getOwnPropertySymbols
  , Su = Object.prototype.hasOwnProperty
  , qu = Object.prototype.propertyIsEnumerable
  , fs = (e,n,t)=>n in e ? Iu(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : e[n] = t
  , Au = (e,n)=>{
    for (var t in n || (n = {}))
        Su.call(n, t) && fs(e, t, n[t]);
    if (cs)
        for (var t of cs(n))
            qu.call(n, t) && fs(e, t, n[t]);
    return e
}
;
const Nu = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 0,
    width: 0
};
Au({
    text: ""
}, Nu);
function xc(e=null, n={}) {
    var t, i;
    const {document: r=eu, observe: s=!1, titleTemplate: u="%s"} = n
      , l = ge((t = e != null ? e : r == null ? void 0 : r.title) != null ? t : null);
    return Ie(l, (o,f)=>{
        Br(o) && o !== f && r && (r.title = u.replace("%s", o))
    }
    , {
        immediate: !0
    }),
    s && r && vu((i = r.head) == null ? void 0 : i.querySelector("title"), ()=>{
        r && r.title !== l.value && (l.value = u.replace("%s", r.title))
    }
    , {
        childList: !0
    }),
    l
}
var Ge = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}
  , as = {
    exports: {}
};
(function(e) {
    (function(n, t, i) {
        function r(o) {
            var f = this
              , g = l();
            f.next = function() {
                var h = 2091639 * f.s0 + f.c * 23283064365386963e-26;
                return f.s0 = f.s1,
                f.s1 = f.s2,
                f.s2 = h - (f.c = h | 0)
            }
            ,
            f.c = 1,
            f.s0 = g(" "),
            f.s1 = g(" "),
            f.s2 = g(" "),
            f.s0 -= g(o),
            f.s0 < 0 && (f.s0 += 1),
            f.s1 -= g(o),
            f.s1 < 0 && (f.s1 += 1),
            f.s2 -= g(o),
            f.s2 < 0 && (f.s2 += 1),
            g = null
        }
        function s(o, f) {
            return f.c = o.c,
            f.s0 = o.s0,
            f.s1 = o.s1,
            f.s2 = o.s2,
            f
        }
        function u(o, f) {
            var g = new r(o)
              , h = f && f.state
              , d = g.next;
            return d.int32 = function() {
                return g.next() * 4294967296 | 0
            }
            ,
            d.double = function() {
                return d() + (d() * 2097152 | 0) * 11102230246251565e-32
            }
            ,
            d.quick = d,
            h && (typeof h == "object" && s(h, g),
            d.state = function() {
                return s(g, {})
            }
            ),
            d
        }
        function l() {
            var o = 4022871197
              , f = function(g) {
                g = String(g);
                for (var h = 0; h < g.length; h++) {
                    o += g.charCodeAt(h);
                    var d = .02519603282416938 * o;
                    o = d >>> 0,
                    d -= o,
                    d *= o,
                    o = d >>> 0,
                    d -= o,
                    o += d * 4294967296
                }
                return (o >>> 0) * 23283064365386963e-26
            };
            return f
        }
        t && t.exports ? t.exports = u : i && i.amd ? i(function() {
            return u
        }) : this.alea = u
    }
    )(Ge, e, !1)
}
)(as);
var hs = {
    exports: {}
};
(function(e) {
    (function(n, t, i) {
        function r(l) {
            var o = this
              , f = "";
            o.x = 0,
            o.y = 0,
            o.z = 0,
            o.w = 0,
            o.next = function() {
                var h = o.x ^ o.x << 11;
                return o.x = o.y,
                o.y = o.z,
                o.z = o.w,
                o.w ^= o.w >>> 19 ^ h ^ h >>> 8
            }
            ,
            l === (l | 0) ? o.x = l : f += l;
            for (var g = 0; g < f.length + 64; g++)
                o.x ^= f.charCodeAt(g) | 0,
                o.next()
        }
        function s(l, o) {
            return o.x = l.x,
            o.y = l.y,
            o.z = l.z,
            o.w = l.w,
            o
        }
        function u(l, o) {
            var f = new r(l)
              , g = o && o.state
              , h = function() {
                return (f.next() >>> 0) / 4294967296
            };
            return h.double = function() {
                do
                    var d = f.next() >>> 11
                      , m = (f.next() >>> 0) / 4294967296
                      , z = (d + m) / (1 << 21);
                while (z === 0);
                return z
            }
            ,
            h.int32 = f.next,
            h.quick = h,
            g && (typeof g == "object" && s(g, f),
            h.state = function() {
                return s(f, {})
            }
            ),
            h
        }
        t && t.exports ? t.exports = u : i && i.amd ? i(function() {
            return u
        }) : this.xor128 = u
    }
    )(Ge, e, !1)
}
)(hs);
var gs = {
    exports: {}
};
(function(e) {
    (function(n, t, i) {
        function r(l) {
            var o = this
              , f = "";
            o.next = function() {
                var h = o.x ^ o.x >>> 2;
                return o.x = o.y,
                o.y = o.z,
                o.z = o.w,
                o.w = o.v,
                (o.d = o.d + 362437 | 0) + (o.v = o.v ^ o.v << 4 ^ (h ^ h << 1)) | 0
            }
            ,
            o.x = 0,
            o.y = 0,
            o.z = 0,
            o.w = 0,
            o.v = 0,
            l === (l | 0) ? o.x = l : f += l;
            for (var g = 0; g < f.length + 64; g++)
                o.x ^= f.charCodeAt(g) | 0,
                g == f.length && (o.d = o.x << 10 ^ o.x >>> 4),
                o.next()
        }
        function s(l, o) {
            return o.x = l.x,
            o.y = l.y,
            o.z = l.z,
            o.w = l.w,
            o.v = l.v,
            o.d = l.d,
            o
        }
        function u(l, o) {
            var f = new r(l)
              , g = o && o.state
              , h = function() {
                return (f.next() >>> 0) / 4294967296
            };
            return h.double = function() {
                do
                    var d = f.next() >>> 11
                      , m = (f.next() >>> 0) / 4294967296
                      , z = (d + m) / (1 << 21);
                while (z === 0);
                return z
            }
            ,
            h.int32 = f.next,
            h.quick = h,
            g && (typeof g == "object" && s(g, f),
            h.state = function() {
                return s(f, {})
            }
            ),
            h
        }
        t && t.exports ? t.exports = u : i && i.amd ? i(function() {
            return u
        }) : this.xorwow = u
    }
    )(Ge, e, !1)
}
)(gs);
var ds = {
    exports: {}
};
(function(e) {
    (function(n, t, i) {
        function r(l) {
            var o = this;
            o.next = function() {
                var g = o.x, h = o.i, d, m;
                return d = g[h],
                d ^= d >>> 7,
                m = d ^ d << 24,
                d = g[h + 1 & 7],
                m ^= d ^ d >>> 10,
                d = g[h + 3 & 7],
                m ^= d ^ d >>> 3,
                d = g[h + 4 & 7],
                m ^= d ^ d << 7,
                d = g[h + 7 & 7],
                d = d ^ d << 13,
                m ^= d ^ d << 9,
                g[h] = m,
                o.i = h + 1 & 7,
                m
            }
            ;
            function f(g, h) {
                var d, m = [];
                if (h === (h | 0))
                    m[0] = h;
                else
                    for (h = "" + h,
                    d = 0; d < h.length; ++d)
                        m[d & 7] = m[d & 7] << 15 ^ h.charCodeAt(d) + m[d + 1 & 7] << 13;
                for (; m.length < 8; )
                    m.push(0);
                for (d = 0; d < 8 && m[d] === 0; ++d)
                    ;
                for (d == 8 && (m[7] = -1),
                g.x = m,
                g.i = 0,
                d = 256; d > 0; --d)
                    g.next()
            }
            f(o, l)
        }
        function s(l, o) {
            return o.x = l.x.slice(),
            o.i = l.i,
            o
        }
        function u(l, o) {
            l == null && (l = +new Date);
            var f = new r(l)
              , g = o && o.state
              , h = function() {
                return (f.next() >>> 0) / 4294967296
            };
            return h.double = function() {
                do
                    var d = f.next() >>> 11
                      , m = (f.next() >>> 0) / 4294967296
                      , z = (d + m) / (1 << 21);
                while (z === 0);
                return z
            }
            ,
            h.int32 = f.next,
            h.quick = h,
            g && (g.x && s(g, f),
            h.state = function() {
                return s(f, {})
            }
            ),
            h
        }
        t && t.exports ? t.exports = u : i && i.amd ? i(function() {
            return u
        }) : this.xorshift7 = u
    }
    )(Ge, e, !1)
}
)(ds);
var ps = {
    exports: {}
};
(function(e) {
    (function(n, t, i) {
        function r(l) {
            var o = this;
            o.next = function() {
                var g = o.w, h = o.X, d = o.i, m, z;
                return o.w = g = g + 1640531527 | 0,
                z = h[d + 34 & 127],
                m = h[d = d + 1 & 127],
                z ^= z << 13,
                m ^= m << 17,
                z ^= z >>> 15,
                m ^= m >>> 12,
                z = h[d] = z ^ m,
                o.i = d,
                z + (g ^ g >>> 16) | 0
            }
            ;
            function f(g, h) {
                var d, m, z, S, E, I = [], F = 128;
                for (h === (h | 0) ? (m = h,
                h = null) : (h = h + "\0",
                m = 0,
                F = Math.max(F, h.length)),
                z = 0,
                S = -32; S < F; ++S)
                    h && (m ^= h.charCodeAt((S + 32) % h.length)),
                    S === 0 && (E = m),
                    m ^= m << 10,
                    m ^= m >>> 15,
                    m ^= m << 4,
                    m ^= m >>> 13,
                    S >= 0 && (E = E + 1640531527 | 0,
                    d = I[S & 127] ^= m + E,
                    z = d == 0 ? z + 1 : 0);
                for (z >= 128 && (I[(h && h.length || 0) & 127] = -1),
                z = 127,
                S = 4 * 128; S > 0; --S)
                    m = I[z + 34 & 127],
                    d = I[z = z + 1 & 127],
                    m ^= m << 13,
                    d ^= d << 17,
                    m ^= m >>> 15,
                    d ^= d >>> 12,
                    I[z] = m ^ d;
                g.w = E,
                g.X = I,
                g.i = z
            }
            f(o, l)
        }
        function s(l, o) {
            return o.i = l.i,
            o.w = l.w,
            o.X = l.X.slice(),
            o
        }
        function u(l, o) {
            l == null && (l = +new Date);
            var f = new r(l)
              , g = o && o.state
              , h = function() {
                return (f.next() >>> 0) / 4294967296
            };
            return h.double = function() {
                do
                    var d = f.next() >>> 11
                      , m = (f.next() >>> 0) / 4294967296
                      , z = (d + m) / (1 << 21);
                while (z === 0);
                return z
            }
            ,
            h.int32 = f.next,
            h.quick = h,
            g && (g.X && s(g, f),
            h.state = function() {
                return s(f, {})
            }
            ),
            h
        }
        t && t.exports ? t.exports = u : i && i.amd ? i(function() {
            return u
        }) : this.xor4096 = u
    }
    )(Ge, e, !1)
}
)(ps);
var ms = {
    exports: {}
};
(function(e) {
    (function(n, t, i) {
        function r(l) {
            var o = this
              , f = "";
            o.next = function() {
                var h = o.b
                  , d = o.c
                  , m = o.d
                  , z = o.a;
                return h = h << 25 ^ h >>> 7 ^ d,
                d = d - m | 0,
                m = m << 24 ^ m >>> 8 ^ z,
                z = z - h | 0,
                o.b = h = h << 20 ^ h >>> 12 ^ d,
                o.c = d = d - m | 0,
                o.d = m << 16 ^ d >>> 16 ^ z,
                o.a = z - h | 0
            }
            ,
            o.a = 0,
            o.b = 0,
            o.c = 2654435769 | 0,
            o.d = 1367130551,
            l === Math.floor(l) ? (o.a = l / 4294967296 | 0,
            o.b = l | 0) : f += l;
            for (var g = 0; g < f.length + 20; g++)
                o.b ^= f.charCodeAt(g) | 0,
                o.next()
        }
        function s(l, o) {
            return o.a = l.a,
            o.b = l.b,
            o.c = l.c,
            o.d = l.d,
            o
        }
        function u(l, o) {
            var f = new r(l)
              , g = o && o.state
              , h = function() {
                return (f.next() >>> 0) / 4294967296
            };
            return h.double = function() {
                do
                    var d = f.next() >>> 11
                      , m = (f.next() >>> 0) / 4294967296
                      , z = (d + m) / (1 << 21);
                while (z === 0);
                return z
            }
            ,
            h.int32 = f.next,
            h.quick = h,
            g && (typeof g == "object" && s(g, f),
            h.state = function() {
                return s(f, {})
            }
            ),
            h
        }
        t && t.exports ? t.exports = u : i && i.amd ? i(function() {
            return u
        }) : this.tychei = u
    }
    )(Ge, e, !1)
}
)(ms);
var bs = {
    exports: {}
};
(function(e) {
    (function(n, t, i) {
        var r = 256, s = 6, u = 52, l = "random", o = i.pow(r, s), f = i.pow(2, u), g = f * 2, h = r - 1, d;
        function m(C, N, Q) {
            var Y = [];
            N = N == !0 ? {
                entropy: !0
            } : N || {};
            var K = I(E(N.entropy ? [C, k(t)] : C == null ? F() : C, 3), Y)
              , J = new z(Y)
              , ne = function() {
                for (var Z = J.g(s), re = o, se = 0; Z < f; )
                    Z = (Z + se) * r,
                    re *= r,
                    se = J.g(1);
                for (; Z >= g; )
                    Z /= 2,
                    re /= 2,
                    se >>>= 1;
                return (Z + se) / re
            };
            return ne.int32 = function() {
                return J.g(4) | 0
            }
            ,
            ne.quick = function() {
                return J.g(4) / 4294967296
            }
            ,
            ne.double = ne,
            I(k(J.S), t),
            (N.pass || Q || function(Z, re, se, pe) {
                return pe && (pe.S && S(pe, J),
                Z.state = function() {
                    return S(J, {})
                }
                ),
                se ? (i[l] = Z,
                re) : Z
            }
            )(ne, K, "global"in N ? N.global : this == i, N.state)
        }
        function z(C) {
            var N, Q = C.length, Y = this, K = 0, J = Y.i = Y.j = 0, ne = Y.S = [];
            for (Q || (C = [Q++]); K < r; )
                ne[K] = K++;
            for (K = 0; K < r; K++)
                ne[K] = ne[J = h & J + C[K % Q] + (N = ne[K])],
                ne[J] = N;
            (Y.g = function(Z) {
                for (var re, se = 0, pe = Y.i, Ae = Y.j, V = Y.S; Z--; )
                    re = V[pe = h & pe + 1],
                    se = se * r + V[h & (V[pe] = V[Ae = h & Ae + re]) + (V[Ae] = re)];
                return Y.i = pe,
                Y.j = Ae,
                se
            }
            )(r)
        }
        function S(C, N) {
            return N.i = C.i,
            N.j = C.j,
            N.S = C.S.slice(),
            N
        }
        function E(C, N) {
            var Q = [], Y = typeof C, K;
            if (N && Y == "object")
                for (K in C)
                    try {
                        Q.push(E(C[K], N - 1))
                    } catch {}
            return Q.length ? Q : Y == "string" ? C : C + "\0"
        }
        function I(C, N) {
            for (var Q = C + "", Y, K = 0; K < Q.length; )
                N[h & K] = h & (Y ^= N[h & K] * 19) + Q.charCodeAt(K++);
            return k(N)
        }
        function F() {
            try {
                var C;
                return d && (C = d.randomBytes) ? C = C(r) : (C = new Uint8Array(r),
                (n.crypto || n.msCrypto).getRandomValues(C)),
                k(C)
            } catch {
                var N = n.navigator
                  , Q = N && N.plugins;
                return [+new Date, n, Q, n.screen, k(t)]
            }
        }
        function k(C) {
            return String.fromCharCode.apply(0, C)
        }
        if (I(i.random(), t),
        e.exports) {
            e.exports = m;
            try {
                d = require("crypto")
            } catch {}
        } else
            i["seed" + l] = m
    }
    )(typeof self != "undefined" ? self : Ge, [], Math)
}
)(bs);
var Mu = as.exports
  , Fu = hs.exports
  , $u = gs.exports
  , Lu = ds.exports
  , ku = ps.exports
  , Ru = ms.exports
  , en = bs.exports;
en.alea = Mu;
en.xor128 = Fu;
en.xorwow = $u;
en.xorshift7 = Lu;
en.xor4096 = ku;
en.tychei = Ru;
var yc = en
  , qe = {
    exports: {}
}
  , Du = {
    a: "",
    \u0101: "\u5416\u9515\u9312",
    \u00E1: "\u55C4",
    \u01CE: "",
    \u00E0: "",
    \u0101i: "\u54CE\u54C0\u57C3\u5A2D\u6EBE\u55F3\u92B0\u953F\u566F\u8AF0\u9384",
    \u00E1i: "\u5540\u5A3E\u6371\u7691\u51D2\u9691\u5D66\u6EB0\u560A\u6571\u6573\u769A\u78D1\u764C",
    \u01CEi: "\u6BD0\u6639\u5A3E\u6B38\u7D60\u55F3\u77EE\u853C\u8EB7\u566F\u6FED\u85F9\u8B6A\u972D\u9744",
    \u00E0i: "\u827E\u4F0C\u6B2C\u7231\u7839\u784B\u5828\u7125\u9698\u55CC\u55F3\u5867\u5AD2\u611B\u788D\u53C6\u66A7\u7477\u50FE\u566F\u58D2\u5B21\u61D3\u8586\u9D31\u61DD\u66D6\u74A6\u8CF9\u9932\u76A7\u77B9\u99A4\u7919\u8B7A\u9440\u9C6B\u9749",
    \u0101n: "\u5B89\u4F92\u5CD6\u6849\u6C28\u5063\u5EB5\u83F4\u8C19\u557D\u5A95\u843B\u844A\u75F7\u8164\u88FA\u9E4C\u84ED\u8A9D\u978D\u978C\u76E6\u8AF3\u99A3\u9B9F\u76EB\u9D6A\u97FD\u9D95",
    \u00E1n: "\u73B5\u557D\u96F8\u5111",
    \u01CEn: "\u57B5\u4FFA\u5535\u57EF\u94F5\u63DE\u667B\u7F6F\u92A8",
    \u00E0n: "\u5388\u5C75\u5C7D\u72B4\u5CB8\u54B9\u6309\u6D1D\u834C\u6848\u80FA\u8C7B\u5813\u968C\u667B\u6697\u8C8B\u5111\u930C\u95C7\u9EEF",
    \u0101ng: "\u80AE\u9AAF",
    \u00E1ng: "\u536C\u5C87\u6602\u663B",
    \u01CEng: "",
    \u00E0ng: "\u678A\u76CE\u91A0",
    \u0101o: "\u6CD1\u67EA\u7711\u688E\u8EEA\u719D\u720A",
    \u00E1o: "\u6556\u53AB\u969E\u55F7\u55F8\u5D85\u5ED2\u6160\u6EF6\u7353\u851C\u9068\u9A9C\u646E\u7352\u7488\u78DD\u58BD\u7FF1\u8071\u87AF\u7FF6\u8B37\u8B38\u7FFA\u9CCC\u93D5\u93D6\u9C32\u9DD4\u9F07",
    \u01CEo: "\u8279\u629D\u82BA\u8884\u7711\u90E9\u957A\u5AAA\u5ABC\u8956",
    \u00E0o: "\u5C99\u6277\u629D\u5773\u5787\u5CB0\u67EA\u50B2\u5961\u8EEA\u5967\u5AEF\u5D85\u6160\u6F9A\u96A9\u58BA\u5DB4\u61CA\u64D9\u6FB3\u93CA\u9A41",
    ba: "\u7F77",
    b\u0101: "\u4E37\u516B\u4EC8\u5DF4\u53ED\u6733\u7390\u593F\u5C9C\u6277\u82AD\u5CC7\u67ED\u75A4\u54F1\u54F5\u634C\u7B06\u7C91\u7F93\u8686\u91DF\u8C5D\u9C83\u9B5E",
    b\u00E1: "\u53D0\u72AE\u629C\u59AD\u62D4\u8307\u70A6\u7679\u80C8\u83DD\u8A59\u8DCB\u8EF7\u98B0\u9B43\u9F25",
    b\u01CE: "\u94AF\u9200\u9776",
    b\u00E0: "\u575D\u5F1D\u7238\u7685\u57BB\u8DC1\u9C83\u9B5E\u9C85\u9C8C\u7F77\u9B81\u9B8A\u8987\u77F2\u9738\u58E9\u705E\u6B1B",
    b\u0101i: "\u6300\u63B0\u64D8",
    b\u00E1i: "\u767D",
    b\u01CEi: "\u767E\u4F70\u6822\u74F8\u636D\u7AE1\u7CA8\u7D54\u6446\u64FA\u896C",
    b\u00E0i: "\u5457\u5E8D\u62DD\u8D25\u62DC\u5504\u6557\u7308\u7A17\u7CBA\u85AD\u8D01\u97DB",
    b\u0101n: "\u6273\u653D\u670C\u80A6\u73ED\u822C\u9881\u6591\u642C\u6592\u9812\u642B\u7622\u9CFB\u878C\u8929\u764D\u8FAC",
    b\u01CEn: "\u962A\u5742\u5C85\u6604\u677F\u7248\u74EA\u94A3\u7C84\u8228\u9211\u8742\u9B6C\u95C6",
    b\u00E0n: "\u529E\u534A\u4F34\u626E\u5762\u59C5\u6011\u7ECA\u67C8\u79DA\u6E74\u7D46\u8DD8\u9261\u977D\u8FA6\u74E3",
    b\u0101ng: "\u90A6\u57B9\u5E2E\u6360\u6886\u6D5C\u90AB\u5E47\u5E5A\u7E0D\u5E6B\u97A4",
    b\u01CEng: "\u7ED1\u7D81\u7253\u8180\u9AC8",
    b\u00E0ng: "\u73A4\u6337\u8684\u508D\u68D2\u68D3\u7865\u8C24\u585D\u6412\u7A16\u84A1\u86D6\u872F\u9551\u7E0D\u8255\u8B17\u938A",
    b\u0101o: "\u52F9\u5305\u4F68\u5B62\u82DE\u67B9\u80DE\u525D\u7B23\u7172\u9F85\u88E6\u8554\u8912\u8943\u95C1\u9F59",
    b\u00E1o: "\u7A87\u96F9",
    b\u01CEo: "\u5B9D\u6009\u9971\u4FDD\u9E28\u5BB2\u73E4\u5822\u5AAC\u8446\u5BDA\u98F9\u98FD\u8913\u99C2\u9CF5\u7DE5\u9D07\u8CF2\u85F5\u5BF3\u5BF6\u974C",
    b\u00E0o: "\u52FD\u72B3\u62A5\u6009\u62B1\u8C79\u8DB5\u94C7\u83E2\u86AB\u888C\u5831\u924B\u9C8D\u9AB2\u9AF1\u8663\u9B91\u5124\u66D3\u5697\u66DD\u7206\u72A6\u5FC1\u9464",
    bei: "\u5457\u5504",
    b\u0113i: "\u9642\u5351\u676F\u67F8\u76C3\u5EB3\u686E\u60B2\u63F9\u68D3\u6911\u7891\u9E4E\u7B84\u8AC0\u979E\u85E3\u9D6F",
    b\u011Bi: "\u9273",
    b\u00E8i: "\u8D1D\u5B5B\u72C8\u8C9D\u90B6\u5907\u6601\u676E\u726C\u82DD\u90E5\u94A1\u4FFB\u500D\u6096\u72FD\u505D\u5079\u6896\u73FC\u9101\u5099\u50C3\u60EB\u68D1\u68D3\u7119\u7432\u8EF0\u8F88\u6102\u789A\u7999\u84D3\u86FD\u7295\u8919\u8A96\u9781\u9AB3\u8F29\u92C7\u618A\u7CD2\u97B4\u943E",
    b\u0113n: "\u6CCD\u8D32\u681F\u55AF\u7287\u8CC1\u951B\u6F30\u931B\u87E6",
    b\u011Bn: "\u5932\u672C\u82EF\u5959\u755A\u7FC9\u694D",
    b\u00E8n: "\u574B\u574C\u6CCD\u7083\u5034\u6379\u6873\u6E00\u7B28\u9029\u64AA",
    b\u0113ng: "\u4F3B\u794A\u595F\u5D29\u7D63\u958D\u55D9\u5D6D\u75ED\u5623\u7DB3\u7E43",
    b\u00E9ng: "\u752E\u752D",
    b\u011Bng: "\u57C4\u57F2\u83F6\u7423\u742B\u7DB3\u7E43\u979B",
    b\u00E8ng: "\u6CF5\u8FF8\u580B\u902C\u63FC\u8DF0\u5874\u7DB3\u750F\u955A\u7E43\u8E66\u93F0",
    b\u012B: "\u7680\u5C44\u506A\u6BF4\u903C\u6945\u698C\u8C4D\u8795\u9D56\u9CBE\u939E\u9C0F",
    b\u00ED: "\u8378\u9F3B\u5B36",
    b\u01D0: "\u5315\u6BD4\u5936\u673C\u4F4A\u5421\u59A3\u6C98\u7595\u7EB0\u5F7C\u6BDE\u80B6\u67C0\u79D5\u4FFE\u5A1D\u7B14\u7C83\u7D15\u822D\u555A\u5D25\u7B46\u9119\u805B\u8C8F",
    b\u00EC: "\u5E01\u5FC5\u6BD5\u95EC\u95ED\u4F56\u5752\u5E87\u8298\u8BD0\u90B2\u5487\u59BC\u602D\u6036\u7541\u7540\u80B6\u82FE\u54D4\u67F2\u6BD6\u73CC\u7550\u75AA\u7955\u80C7\u835C\u8D32\u965B\u6BD9\u72F4\u7562\u7B13\u7C8A\u8890\u94CB\u5A62\u655D\u65C7\u6890\u7D34\u7FCD\u8406\u841E\u9587\u9588\u9589\u581B\u5F3C\u5F3B\u610A\u610E\u6E62\u7695\u7986\u7B5A\u8A56\u8CB1\u8CC1\u8D51\u55F6\u5F43\u6ED7\u6EED\u714F\u75FA\u75F9\u7764\u7765\u8177\u84D6\u84FD\u870C\u88E8\u8DF8\u924D\u959F\u98F6\u5E63\u5F0A\u719A\u7359\u78A7\u7A2B\u7B85\u7B86\u7DBC\u853D\u912A\u999D\u5E64\u6F77\u7358\u7F7C\u8945\u99DC\u9AF2\u58C1\u5B16\u5EE6\u7BE6\u7BF3\u7E2A\u859C\u89F1\u907F\u9B85\u6583\u6FDE\u8E55\u979E\u9AC0\u5970\u74A7\u9128\u939E\u93CE\u9946\u7E74\u8963\u895E\u97B8\u97E0\u9B53\u8E83\u8E84\u9A46\u9D9D\u6707\u8D14\u9434\u9DDD\u9DE9\u9F0A",
    bi\u0101n: "\u8FBA\u8FB9\u709E\u782D\u7B3E\u7335\u7F16\u8439\u7178\u7251\u7502\u7BAF\u7CC4\u7DE8\u81F1\u8759\u9795\u7371\u9089\u937D\u9CCA\u908A\u97AD\u9BFE\u9BFF\u7C53\u7C69",
    bi\u01CEn: "\u8D2C\u75BA\u7A86\u533E\u8CB6\u60FC\u63D9\u78A5\u7A28\u890A\u7CC4\u9D18\u85CA\u89B5\u9DA3",
    bi\u00E0n: "\u535E\u5F01\u5FED\u6283\u6C73\u6C74\u82C4\u91C6\u53D8\u5CC5\u73A3\u5909\u662A\u898D\u5FA7\u7F0F\u904D\u959E\u8FA1\u7DF6\u8251\u8ADA\u8FA7\u8FA8\u8FA9\u8FAB\u8FAE\u8FAF\u8B8A",
    bi\u0101o: "\u706C\u6753\u6807\u98D1\u9A89\u9ADF\u5F6A\u6DF2\u730B\u813F\u98A9\u50C4\u5882\u5E56\u647D\u6EEE\u8508\u98AE\u9AA0\u6A19\u719B\u8194\u8198\u9E83\u762D\u78E6\u9556\u98DA\u98D9\u5126\u6AA6\u7BFB\u98B7\u700C\u85E8\u8B24\u7202\u81D5\u8D06\u93E2\u7A6E\u9573\u98C8\u98C6\u98CA\u98C7\u9463\u9A6B",
    bi\u00E1o: "\u5AD1",
    bi\u01CEo: "\u8868\u5A4A\u88F1\u8AD8\u893E\u9336\u6AA6",
    bi\u00E0o: "\u4FF5\u647D\u9CD4",
    bi\u0113: "\u67ED\u618B\u87DE\u765F\u9CD6\u9C49\u9F08\u864C\u9F9E",
    bi\u00E9: "\u5225\u67F2\u8382\u86C2\u5FB6\u8952\u87DE\u8E69",
    bi\u011B: "\u765F",
    bi\u00E8: "\u5225\u5F46",
    b\u012Bn: "\u6C43\u90A0\u73A2\u780F\u5BBE\u5F6C\u68B9\u50A7\u658C\u6915\u6EE8\u7F24\u69DF\u7478\u8C69\u8CD3\u8CD4\u9554\u5110\u6FD2\u983B\u6FF1\u6FF5\u8668\u8C73\u6AB3\u74B8\u7015\u9726\u7E7D\u944C\u986E",
    b\u01D0n: "",
    b\u00ECn: "\u6448\u6BA1\u8191\u9AE9\u5110\u64EF\u9B02\u6BAF\u81CF\u9ACC\u9B13\u9AD5\u9B22",
    b\u012Bng: "\u51AB\u4ECC\u4ED2\u6C37\u51B0\u5175\u5E77\u681F\u63A4\u68B9\u86C3\u7D63\u69DF\u92F2\u6AB3",
    b\u01D0ng: "\u4E19\u90B4\u9643\u6032\u62A6\u79C9\u82EA\u661E\u663A\u67C4\u70B3\u997C\u772A\u504B\u5C5B\u5BCE\u68C5\u7415\u7980\u7A1F\u9235\u927C\u9786\u9905\u9920\u979E\u97B8",
    b\u00ECng: "\u4E26\u4F75\u5E77\u678B\u57AA\u5EB0\u5002\u6824\u75C5\u7A89\u7ADD\u504B\u50A1\u5BCE\u6452\u8A81\u9BA9\u9750",
    bo: "\u5575\u8514\u5643",
    b\u014D: "\u7676\u62E8\u6CE2\u7677\u73BB\u525D\u54F1\u76CB\u7835\u8DB5\u94B5\u997D\u7D34\u7F3D\u83E0\u88B0\u6E8A\u7886\u9262\u50E0\u5D93\u64A5\u64AD\u9911\u78FB\u7921\u8E73\u76AA\u9A4B\u9C4D",
    b\u00F3: "\u4EE2\u5F74\u8091\u9A73\u5E1B\u72DB\u74DD\u82E9\u4FBC\u67ED\u80C9\u90E3\u4EB3\u632C\u6D61\u74DF\u79E1\u88AF\u94B9\u94C2\u6872\u6DFF\u8116\u8236\u8421\u88B9\u535A\u6B95\u6E24\u8467\u9E41\u613D\u640F\u733C\u9251\u9238\u998E\u9C8C\u50F0\u6991\u717F\u7254\u7B94\u818A\u824A\u8A96\u999B\u99C1\u8E23\u92CD\u9548\u58C6\u999E\u99EE\u9B8A\u7A5B\u894F\u8B08\u5697\u61EA\u7C19\u939B\u993A\u9D53\u7CEA\u9AC6\u9AC9\u6B02\u896E\u7934\u946E",
    b\u01D2: "\u7677\u86BE\u8DDB",
    b\u00F2: "\u5B79\u64D7\u64D8\u6A97\u6A98\u8B52\u8617",
    b\u016B: "\u5CEC\u5EAF\u900B\u94B8\u6661\u923D\u8AA7\u9914\u933B\u9BC6\u9D4F",
    b\u00FA: "\u9CEA\u8F50\u91AD",
    b\u01D4: "\u535F\u8865\u54FA\u6355\u636C\u88DC\u9E14",
    b\u00F9: "\u5E03\u4F48\u5425\u6B65\u5498\u6016\u62AA\u6B69\u6B68\u67E8\u949A\u52CF\u57D4\u57D7\u6091\u6357\u8379\u90E8\u57E0\u5A44\u74FF\u9208\u5ECD\u8500\u7B81\u8E04\u90F6\u7BF0\u9922",
    c\u0101: "\u5693\u64E6\u6503",
    c\u01CE: "\u7924\u7938",
    c\u00E0: "\u906A\u56C3",
    c\u0101i: "\u5072\u731C",
    c\u00E1i: "\u624D\u6250\u6750\u8D22\u8CA1\u88C1\u7E94",
    c\u01CEi: "\u6BDD\u5038\u554B\u57F0\u5A47\u5BC0\u5F69\u63A1\u68CC\u776C\u8DF4\u7DB5\u8E29",
    c\u00E0i: "\u57F0\u5BC0\u83DC\u8521\u7E29",
    c\u0101n: "\u53C3\u53C4\u98E1\u9A96\u53C5\u55B0\u6E4C\u50AA\u5B20\u9910\u7218\u9A42\u56CB",
    c\u00E1n: "\u6B8B\u8695\u60ED\u6B98\u615A\u6472\u8745\u6159\u883A\u8836",
    c\u01CEn: "\u60E8\u6701\u6158\u61AF\u7A47\u7BF8\u9EEA\u9EF2",
    c\u00E0n: "\u707F\u5B71\u50AA\u7CB2\u5607\u647B\u510F\u6FAF\u8592\u71E6\u74A8\u8B32\u93D2",
    c\u0101ng: "\u4ED3\u4EFA\u4F27\u6CA7\u82CD\u73B1\u9E27\u5009\u8231\u5096\u51D4\u5D62\u6EC4\u734A\u84BC\u7472\u6FF8\u7BEC\u8259\u87A5\u9DAC",
    c\u00E1ng: "\u5328\u81E7\u6B0C\u9476",
    c\u00E0ng: "\u8CF6",
    c\u0101o: "\u64A1\u64CD\u7CD9",
    c\u00E1o: "\u66FA\u66F9\u50AE\u5608\u5D86\u6152\u6F15\u84F8\u69FD\u893F\u825A\u87AC\u93EA",
    c\u01CEo: "\u5C6E\u8278\u8349\u613A\u6145\u61C6\u9A32",
    c\u00E0o: "\u808F\u9135\u8959\u9F1C",
    c\u00E8: "\u5928\u518A\u518C\u5395\u607B\u62FA\u6D4B\u835D\u6547\u755F\u5074\u53A0\u7B27\u7CA3\u8417\u5EC1\u60FB\u6E2C\u7B56\u8434\u7B5E\u7B74\u84DB\u7BA3\u61A1\u7C0E",
    c\u0113n: "\u53C3\u53C4\u53C5\u5D7E\u7A47\u7BF8",
    c\u00E9n: "\u5C91\u6C75\u57C1\u6D94\u7B12",
    c\u0113ng: "\u564C",
    c\u00E9ng: "\u5C42\u66FD\u5C64\u5D92\u6A67\u7AF2\u9A53",
    c\u00E8ng: "\u8E6D",
    c\u012B: "\u5470\u5472\u73BC\u75B5\u8D80\u5068\u8DD0\u7E12\u9AB4\u9ACA\u8800\u9F79",
    c\u00ED: "\u8BCD\u73C1\u5179\u5790\u67CC\u7960\u8328\u74F7\u7CA2\u8A5E\u8F9D\u6148\u7506\u8F9E\u78C1\u96CC\u9E5A\u7CCD\u8FA4\u98FA\u9908\u5B28\u6FE8\u858B\u9D1C\u7920\u8FAD\u9DC0\u9DBF",
    c\u01D0: "\u6B64\u4F4C\u6CDA\u73BC\u7689\u5559\u8DD0\u9B86",
    c\u00EC: "\u673F\u6B21\u4F7D\u523E\u5E9B\u8326\u6828\u83BF\u7D58\u86D3\u8D50\u8786\u8CDC",
    c\u014Dng: "\u5306\u56EA\u56F1\u82C1\u5FE9\u679E\u8310\u6031\u60A4\u68C7\u7127\u8471\u6964\u6F17\u8061\u84EF\u8525\u9AA2\u66B0\u6A05\u6A2C\u6F68\u719C\u747D\u7481\u8066\u806A\u779B\u7BF5\u8070\u87CC\u936F\u7E71\u93D3\u93E6\u9A18\u9A44",
    c\u00F3ng: "\u4E1B\u5F94\u5F93\u5A43\u5B6E\u5F96\u5F9E\u60B0\u6DD9\u742E\u7882\u6152\u6F0E\u6F40\u6F48\u8AB4\u8CE8\u8CE9\u6A37\u931D\u85C2\u53E2\u7047\u6B09\u721C",
    c\u01D2ng: "",
    c\u00F2ng: "\u6121\u6181\u8B25",
    c\u014Du: "",
    c\u00F3u: "",
    c\u01D2u: "",
    c\u00F2u: "\u51D1\u6E4A\u50B6\u6971\u8160\u8F8F\u8F33",
    c\u016B: "\u601A\u7C97\u89D5\u9E81\u9E84\u6A7B\u9E86\u9EA4",
    c\u00FA: "\u5F82\u6B82",
    c\u01D4: "\u76BB",
    c\u00F9: "\u4FC3\u731D\u8128\u5AA8\u7604\u851F\u8A8E\u8D97\u5648\u61B1\u8E27\u918B\u762F\u8E3F\u7C07\u7E2C\u8DA8\u9F00\u8E59\u8E75\u8E74\u9863",
    cu\u0101n: "\u6C46\u64BA\u92D1\u9569\u8E7F\u651B\u8EA5\u9479",
    cu\u00E1n: "\u6FFD\u6AD5\u5DD1\u6522\u7052\u6B11\u7A73",
    cu\u00E0n: "\u7A9C\u6BA9\u71B6\u7ABD\u7BE1\u7ABE\u7C12\u7AC4\u7228",
    cu\u012B: "\u96B9\u5D14\u813A\u50AC\u51D7\u5D5F\u7F1E\u5894\u615B\u6467\u69B1\u6F3C\u69EF\u78EA\u7E17\u93D9",
    cu\u01D0: "\u6F3C\u71A3\u7480\u8DA1\u76A0",
    cu\u00EC: "\u4F1C\u5FF0\u75A9\u5005\u7C8B\u7D23\u7FC6\u8103\u8106\u5550\u555B\u5D12\u60B4\u6DEC\u8403\u690A\u6BF3\u7120\u7417\u7601\u7CB9\u7DB7\u7FE0\u81B5\u81AC\u6FE2\u7AC1\u894A\u9847\u81CE",
    c\u016Bn: "\u90A8\u6751\u76B4\u8E06\u6F8A\u7AF4\u81A5",
    c\u00FAn: "\u5B58\u4F9F\u62F5\u58FF\u6F8A",
    c\u01D4n: "\u520C\u5FD6",
    c\u00F9n: "\u5BF8\u540B\u7C7F",
    cu\u014D: "\u6413\u7473\u9073\u78CB\u8E49\u919D\u9388",
    cu\u00F3: "\u8658\u5D6F\u5D73\u75E4\u7749\u77EC\u84AB\u7625\u8516\u9E7E\u9142\u9E7A\u9147",
    cu\u01D2: "\u811E",
    cu\u00F2: "\u5249\u5252\u539D\u590E\u632B\u83A1\u839D\u5EB4\u63AA\u902A\u9509\u84CC\u9519\u7E12\u8ACE\u92BC\u932F",
    ch\u0101: "\u6260\u6271\u8286\u81FF\u633F\u505B\u55CF\u63D2\u63F7\u9987\u929F\u9538\u8256\u7580\u5693\u9364\u9388\u9937",
    ch\u00E1: "\u79C5\u82F4\u579E\u67FB\u832C\u8336\u6348\u688C\u5D56\u643D\u7339\u976B\u6942\u69CE\u8A67\u5BDF\u6456\u6AAB",
    ch\u01CE: "\u7D01\u8E45\u9572\u9454",
    ch\u00E0: "\u4EDB\u597C\u6C4A\u5C94\u4F98\u8869\u8BE7\u524E\u59F9\u7D01\u8A6B",
    ch\u0101i: "\u8286\u809E\u9497\u91F5",
    ch\u00E1i: "\u72B2\u4FAA\u67F4\u8C7A\u7961\u558D\u5115",
    ch\u01CEi: "\u831D",
    ch\u00E0i: "\u867F\u8883\u8A0D\u7625\u8806\u56C6",
    ch\u0101n: "\u8FBF\u89C7\u68B4\u6400\u8998\u88E7\u647B\u7DC2\u92D3\u5E68\u895C\u6519",
    ch\u00E1n: "\u82C2\u5A75\u8C17\u55AE\u5B71\u68CE\u6E79\u7985\u998B\u7158\u7F20\u50DD\u5D83\u5D84\u7351\u8749\u8A97\u92CB\u5103\u5B0B\u5EDB\u6F79\u6F7A\u7DFE\u6FB6\u78DB\u79AA\u6BDA\u87B9\u87D0\u913D\u700D\u7E5F\u87EC\u5133\u5296\u7E75\u87FE\u9141\u56B5\u58E5\u5DC9\u703A\u6B03\u7E8F\u7E92\u8E94\u9575\u826C\u8B92\u9471\u995E",
    ch\u01CEn: "\u4EA7\u522C\u65F5\u4E33\u65BA\u6D50\u5257\u8C04\u5574\u7522\u7523\u94F2\u9610\u8487\u5277\u5D7C\u644C\u6EFB\u563D\u5E5D\u8546\u8AC2\u95B3\u9AA3\u71C0\u7C05\u5181\u7E5F\u91A6\u8B42\u93DF\u95E1\u56C5\u705B\u8B87",
    ch\u00E0n: "\u5FCF\u522C\u5257\u785F\u6472\u5E5D\u5E68\u71C0\u61F4\u5133\u61FA\u7FBC\u97C2\u986B",
    ch\u0101ng: "\u4F25\u660C\u5000\u5A3C\u6DD0\u7316\u83D6\u960A\u6919\u7429\u88EE\u9520\u9329\u95B6\u9CB3\u95DB\u9BE7\u9F1A",
    ch\u00E1ng: "\u4EE9\u4EE7\u514F\u80A0\u82CC\u9578\u9577\u5C1D\u507F\u5E38\u5F9C\u74FA\u8407\u5834\u751E\u8178\u5617\u5872\u5AE6\u747A\u8193\u511F\u5690\u9CBF\u9C68",
    ch\u01CEng: "\u6636\u60DD\u5834\u655E\u50D8\u53B0\u5872\u5EE0\u6C05\u92F9",
    ch\u00E0ng: "\u6005\u739A\u7545\u9B2F\u5531\u60B5\u713B\u7452\u66A2\u757C\u8AAF\u97D4",
    ch\u0101o: "\u6284\u5F28\u600A\u6B29\u949E\u8A2C\u712F\u8D85\u9214\u52E6\u6477\u7DBD\u528B\u6A14\u7ABC",
    ch\u00E1o: "\u724A\u6641\u5DE3\u5DE2\u911B\u9F0C\u6F05\u6A14\u6F6E\u7AB2\u7F7A\u9F02\u8F48\u8B3F",
    ch\u01CEo: "\u7092\u7727\u7C86\u7123\u717C\u69F1\u9EA8\u5DD0",
    ch\u00E0o: "\u4EE6\u4EEF\u8016\u89D8",
    ch\u0113: "\u4F21\u8ECA\u4FE5\u7817\u5513\u8397\u7868\u86FC",
    ch\u00E9: "",
    ch\u011B: "\u626F\u5056\u64A6\u5972",
    ch\u00E8: "\u5C6E\u5F7B\u546B\u577C\u8FE0\u70E2\u70F2\u710E\u8045\u63A3\u63CA\u7869\u9819\u5FB9\u6470\u64A4\u6F88\u52F6\u77AE\u7221",
    chen: "\u4F27\u5096",
    ch\u0113n: "\u809C\u62BB\u90F4\u6375\u68FD\u741B\u55D4\u7D9D\u7628\u778B\u8AC3\u8CDD\u8B13",
    ch\u00E9n: "\u5C18\u81E3\u5FF1\u6C89\u8FB0\u9648\u8FE7\u831E\u5BB8\u6815\u8380\u8390\u9673\u6550\u6668\u686D\u68A3\u8A26\u8C0C\u8ED9\u6116\u8DC8\u9202\u7141\u852F\u5875\u6576\u6A04\u760E\u9703\u87B4\u8AF6\u85BC\u9E8E\u66DF\u9DD0",
    ch\u011Bn: "\u8DBB\u7876\u789C\u588B\u5926\u78E3\u8E38\u9356\u8D02\u91A6",
    ch\u00E8n: "\u886C\u722F\u75A2\u9F80\u5041\u8D82\u8D81\u6987\u7A31\u9F53\u9F54\u512D\u56AB\u7A6A\u8C36\u6AEC\u896F\u8B96",
    ch\u0113ng: "\u673E\u9637\u6CDF\u67FD\u722F\u51C8\u68E6\u6D7E\u7424\u5041\u6DE8\u7880\u86CF\u667F\u725A\u6436\u8D6A\u50DC\u6186\u645A\u7A31\u9757\u6490\u6491\u7DFD\u6A56\u6A55\u77A0\u8D6C\u9833\u6A89\u7AC0\u7F49\u9397\u77C3\u7A6A\u87F6\u93FF\u9423\u9953\u943A",
    ch\u00E9ng: "\u6C36\u4E1E\u6210\u673E\u5448\u627F\u67A8\u8BDA\u90D5\u4E57\u57CE\u57E9\u5A0D\u5BAC\u5CF8\u6D06\u837F\u57D5\u6330\u665F\u6D67\u73F9\u6381\u73F5\u7A9A\u812D\u94D6\u5818\u60E9\u63E8\u68D6\u6909\u7A0B\u7B6C\u7D7E\u88CE\u584D\u5856\u6E97\u8AA0\u757B\u9172\u92EE\u6195\u649C\u6F82\u6A59\u6A99\u9BCE\u7013\u61F2\u9A2C",
    ch\u011Bng: "\u4FB1\u5F8E\u609C\u901E\u9A8B\u5EB1\u7748\u88CE\u9A01",
    ch\u00E8ng: "\u79E4\u725A\u7A31\u7AC0\u7A6A",
    chi: "\u9EB6",
    ch\u012B: "\u5403\u599B\u54E7\u5F68\u80F5\u86A9\u9E31\u74FB\u7735\u7B1E\u7C9A\u55AB\u8A35\u55E4\u5AB8\u645B\u75F4\u7D7A\u6A06\u5644\u6BA6\u779D\u8ABA\u566D\u87AD\u9D1F\u9D44\u7661\u9B51\u9F5D\u6521\u5F72\u9ED0",
    ch\u00ED: "\u5F1B\u6C60\u9A70\u8FDF\u577B\u6CB6\u72CB\u830C\u8FE1\u6301\u67E2\u7AFE\u834E\u4FFF\u6B6D\u801B\u83ED\u86B3\u8D7F\u7B42\u8CBE\u9045\u8DE2\u905F\u99B3\u7B88\u7B8E\u5880\u5FB2\u6F26\u8E1F\u9072\u7BEA\u8B18\u9349\u908C\u9D97\u9D99",
    ch\u01D0: "\u53FA\u4F2C\u6261\u544E\u8094\u4F88\u5376\u9F7F\u5791\u5953\u62F8\u80E3\u6065\u803B\u8687\u88B3\u8C49\u6B3C\u6B6F\u88B2\u88ED\u8A83\u9279\u892B\u9F52",
    ch\u00EC: "\u5F73\u53F1\u65A5\u4F41\u6758\u707B\u8D64\u996C\u4F99\u62B6\u52C5\u605C\u67C5\u70BD\u52D1\u6347\u7719\u7FC4\u7FC5\u6555\u70FE\u557B\u6E41\u98ED\u50BA\u75F8\u815F\u8A83\u9253\u96F4\u618F\u7608\u7FE4\u906B\u9290\u6157\u6178\u761B\u7FE8\u71BE\u61D8\u8DA9\u9D92\u9DD8",
    ch\u014Dng: "\u5145\u5FE1\u6C96\u833A\u6D7A\u73EB\u7FC0\u8202\u5603\u644F\u5FB8\u6183\u61A7\u885D\u7F7F\u825F\u8E56",
    ch\u00F3ng: "\u866B\u5D08\u5D07\u75CB\u9680\u6F34\u8908\u7DDF\u8769\u87F2\u721E",
    ch\u01D2ng: "\u5BA0\u57EB\u5BF5",
    ch\u00F2ng: "\u94F3\u63F0\u9283",
    chou: "\u9B98",
    ch\u014Du: "\u62BD\u7270\u5A64\u63AB\u7D2C\u640A\u8DFE\u7633\u7BD8\u9194\u72A8\u72AB",
    ch\u00F3u: "\u601E\u4FE6\u8BEA\u5E31\u6826\u60C6\u68BC\u7564\u7D2C\u7EF8\u83D7\u6906\u7574\u7D52\u6101\u7697\u7A20\u7B79\u88EF\u8A76\u9167\u916C\u7DA2\u8E0C\u5114\u96D4\u568B\u5B26\u5E6C\u61E4\u76E9\u85B5\u6AAE\u71FD\u96E0\u7587\u7C4C\u8E8A\u91BB\u8B90\u8B8E\u96E6",
    ch\u01D2u: "\u4E12\u4E11\u541C\u677D\u677B\u5062\u7785\u919C\u77C1\u9B57",
    ch\u00F2u: "\u81F0\u905A\u6BA0",
    chu: "\u6A7B",
    ch\u016B: "\u51FA\u5C80\u521D\u698B\u6462\u6474\u6A17\u8C99\u6AD6\u9F63",
    ch\u00FA: "\u520D\u9664\u82BB\u801D\u53A8\u6EC1\u84A2\u8C60\u9504\u5AB0\u8021\u84AD\u870D\u8D8E\u924F\u96CF\u7293\u5EDA\u7BE8\u92E4\u6A71\u5E6E\u6AC9\u85F8\u87F5\u8E87\u96DB\u6AE5\u8E70\u9DB5\u8E95",
    ch\u01D4: "\u51E6\u6775\u7840\u6918\u8655\u50A8\u696E\u7987\u695A\u891A\u6FCB\u5132\u6A9A\u74B4\u790E\u9F6D\u9F7C",
    ch\u00F9: "\u4E8D\u51E6\u7ACC\u6035\u6CCF\u7ECC\u8C56\u6B2A\u70AA\u7AD0\u4FF6\u654A\u57F1\u73FF\u7D40\u83C6\u5097\u9110\u6149\u6410\u6EC0\u89E6\u95A6\u510A\u563C\u8AD4\u61B7\u65B6\u6B5C\u81C5\u9EDC\u89F8\u77D7",
    chu\u0101: "\u6B3B",
    chu\u01CE: "",
    chu\u00E0: "",
    chu\u0101i: "\u640B",
    chu\u00E1i: "\u8197",
    chu\u01CEi: "",
    chu\u00E0i: "\u555C\u6B3C\u81AA\u8E39",
    chu\u0101n: "\u5DDB\u5DDD\u6C1A\u7A7F\u732D\u744F",
    chu\u00E1n: "\u8221\u8229\u5276\u8239\u570C\u9044\u50B3\u692F\u693D\u6B42\u66B7\u7BC5\u819E\u8F32",
    chu\u01CEn: "\u821B\u8348\u5598\u583E\u6B42\u50E2\u8E33",
    chu\u00E0n: "\u6C4C\u4E32\u7394\u948F\u91E7\u732D\u8CD7\u9DA8",
    chu\u0101ng: "\u5205\u75AE\u7A93\u5275\u7A97\u724E\u6450\u7255\u7621\u7ABB",
    chu\u00E1ng: "\u5E8A\u7240\u55A0\u5647\u6723\u6A66",
    chu\u01CEng: "\u95EF\u50B8\u78E2\u95D6",
    chu\u00E0ng: "\u6006\u5231\u524F\u5259\u5275\u6134",
    chu\u012B: "\u5439\u708A\u9FA1",
    chu\u00ED: "\u5782\u5015\u57C0\u6858\u9672\u6376\u83D9\u570C\u6425\u68F0\u8144\u69CC\u787E\u9524\u7BA0\u9318\u939A\u9840",
    chu\u01D0: "",
    chu\u00EC: "\u60D9",
    ch\u016Bn: "\u829A\u65FE\u6776\u6625\u8405\u5A8B\u6699\u693F\u69C6\u7443\u7BBA\u877D\u6A41\u8F34\u6AC4\u9C06\u9D9E",
    ch\u00FAn: "\u7EAF\u80AB\u9659\u5507\u6D71\u7D14\u83BC\u8123\u6E7B\u7289\u6EE3\u8493\u9E51\u6F18\u84F4\u819E\u9187\u9195\u931E\u9BD9\u9D89",
    ch\u01D4n: "\u6710\u5046\u8436\u60F7\u7776\u8CF0\u8822",
    chu\u014D: "\u9034\u8DA0\u8E14\u6233\u7E5B",
    chu\u00F2: "\u8FB6\u5437\u8FB5\u62FA\u54FE\u5A16\u5A15\u555C\u5A65\u5A7C\u60D9\u6DB0\u6DD6\u8F8D\u916B\u7DBD\u8E00\u7BB9\u8F1F\u92DC\u9F8A\u64C9\u78ED\u991F\u7E5B\u6B60\u93C3\u56BD\u9F6A\u9461\u5B4E",
    da: "\u7E68",
    d\u0101: "\u5491\u54D2\u8037\u7B1A\u55D2\u642D\u8921\u5660\u58B6\u6498\u939D\u9389",
    d\u00E1: "\u8FBE\u8FCF\u8FD6\u8FDA\u547E\u59B2\u601B\u6C93\u57AF\u709F\u7F8D\u8345\u8359\u7557\u5273\u5312\u60EE\u7563\u7B2A\u9039\u6E9A\u8A5A\u9054\u8DF6\u977C\u619A\u8598\u9791\u71F5\u87FD\u943D\u97C3\u9F96\u9F98",
    d\u01CE: "",
    d\u00E0: "\u4EA3\u6C4F\u7714",
    d\u0101i: "\u5446\u5454\u7343\u61DB",
    d\u01CEi: "\u6B79\u902E\u50A3",
    d\u00E0i: "\u4EE3\u8BD2\u8F6A\u4FA2\u5788\u5CB1\u5E12\u7519\u7ED0\u8FE8\u5E26\u6020\u67CB\u6B86\u73B3\u8D37\u5E2F\u8CA3\u8ED1\u57ED\u5E36\u7D3F\u86AE\u888B\u8EDA\u902E\u91F1\u68E3\u8A52\u8CB8\u8EE9\u7447\u8DE2\u5ED7\u7B89\u53C7\u66C3\u7DFF\u8773\u99D8\u9B98\u9D0F\u6234\u825C\u9EDB\u7C24\u8E5B\u703B\u9734\u8976\u9EF1\u9746",
    d\u0101n: "\u4E39\u5989\u5358\u7708\u7803\u803C\u803D\u90F8\u8043\u8EAD\u9156\u55AE\u5A85\u6116\u6B9A\u7605\u5330\u7BAA\u891D\u9132\u9815\u510B\u52EF\u64D4\u6BAB\u7514\u7649\u894C\u7C1E\u8078",
    d\u01CEn: "\u4F14\u5210\u628C\u73AC\u74ED\u80C6\u8874\u75B8\u7D1E\u8D55\u4EB6\u99BE\u64A2\u64A3\u8CE7\u71C0\u9ED5\u81BD\u76BD\u9EF5",
    d\u00E0n: "\u65E6\u4F46\u5E0E\u547E\u6C8A\u6CF9\u72DA\u8BDE\u550C\u67E6\u758D\u8A11\u5557\u5556\u60D4\u60EE\u6DE1\u840F\u86CB\u557F\u5F3E\u6C2E\u8145\u8711\u89DB\u4EB6\u7605\u7A9E\u84DE\u8A95\u50E4\u5649\u99BE\u9AE7\u510B\u563E\u5F48\u619A\u9188\u61BA\u64D4\u6FB9\u79AB\u9924\u99F3\u9D20\u7649\u81BB\u765A\u56AA\u7E75\u8D09\u972E\u994F\u9EEE",
    d\u0101ng: "\u73F0\u88C6\u7B5C\u7576\u5105\u5679\u6FA2\u74AB\u8960\u7C39\u8261\u87F7\u943A\u95E3",
    d\u01CEng: "\u515A\u8C20\u7576\u64CB\u8B61\u9EE8\u6529\u7059\u6B13\u8B9C",
    d\u00E0ng: "\u6C39\u51FC\u5735\u5B95\u7800\u57B1\u8361\u6863\u5052\u83EA\u5A78\u5D35\u6113\u74FD\u903F\u5D63\u7576\u96FC\u6F52\u78AD\u5105\u778A\u8569\u8DA4\u58CB\u64CB\u6A94\u7497\u76EA\u7911\u7C1C\u862F\u95E3",
    d\u0101o: "\u5200\u5202\u5FC9\u6737\u6C18\u8220\u91D6\u9C7D\u88EF\u9B5B\u87A9",
    d\u00E1o: "\u636F",
    d\u01CEo: "\u5BFC\u5C9B\u9666\u5CF6\u6363\u7977\u7982\u6417\u969D\u5604\u5D8B\u5D8C\u69DD\u5C0E\u96AF\u58D4\u5DB9\u64E3\u8E48\u6AAE\u79B1",
    d\u00E0o: "\u8FBA\u5230\u5E31\u60BC\u68BC\u7118\u76D7\u83FF\u6921\u76DC\u7D69\u9053\u7A32\u7B8C\u7FE2\u5675\u7A3B\u8254\u885C\u6AA4\u885F\u5E6C\u71FE\u7FFF\u8EC7\u74D9\u7E9B",
    de: "\u65F3",
    d\u0113: "\u561A",
    d\u00E9: "\u6074\u6DC2\u86AE\u60B3\u60EA\u68CF\u951D\u5FB3\u5FB7\u9340",
    d\u0113i: "\u561A",
    d\u011Bi: "",
    d\u00E8n: "\u6265\u627D",
    d\u0113ng: "\u706F\u767B\u8C4B\u50DC\u5654\u5B01\u71C8\u7492\u7AF3\u7C26\u8260\u8E6C",
    d\u011Bng: "\u7B49\u6225",
    d\u00E8ng: "\u9093\u51F3\u9127\u96A5\u58B1\u5D9D\u6195\u77AA\u78F4\u956B\u6AC8\u7013\u89B4\u9419",
    d\u012B: "\u6C10\u4EFE\u4F4E\u5943\u5CBB\u5F7D\u79EA\u889B\u5572\u57DE\u7F9D\u9684\u5824\u6E27\u8D86\u6EF4\u78AE\u6A00\u78FE\u97AE\u93D1",
    d\u00ED: "\u625A\u5EF8\u65F3\u72C4\u8091\u7C74\u82D6\u8FEA\u5519\u654C\u6D5F\u6DA4\u837B\u5547\u6891\u7B1B\u89CC\u976E\u6ECC\u84E7\u99B0\u9AE2\u5600\u5AE1\u7FDF\u850B\u8510\u9814\u6575\u7BF4\u955D\u5681\u85E1\u8C74\u8E62\u93D1\u7CF4\u89BF\u9E10",
    d\u01D0: "\u6C10\u538E\u5758\u8BCB\u90B8\u963A\u5467\u577B\u5F24\u62B5\u62DE\u6791\u67E2\u7274\u7825\u638B\u83E7\u89DD\u8A46\u8EE7\u6974\u805C\u9AB6\u9BF3",
    d\u00EC: "\u5754\u65F3\u6755\u7393\u601F\u67A4\u82D0\u4FE4\u54CB\u57C5\u5E1D\u57CA\u5A23\u9013\u9012\u5059\u688A\u710D\u73F6\u7731\u7976\u7B2C\u83C2\u8C1B\u91F1\u5A82\u63E5\u68E3\u6E27\u7747\u7F14\u8482\u9046\u50C0\u6974\u7998\u8163\u905E\u926A\u5886\u5891\u58AC\u5D7D\u6455\u7590\u78B2\u8515\u8743\u9070\u6178\u750B\u7DE0\u876D\u5DB3\u8AE6\u8ADF\u8E36\u87AE",
    di\u01CE: "\u55F2",
    di\u0101n: "\u4F54\u6541\u6382\u508E\u53A7\u5D6E\u6EC7\u69C7\u69D9\u7628\u7AB4\u98A0\u8E4E\u5DC5\u985A\u985B\u766B\u5DD3\u6527\u5DD4\u7672\u9F7B",
    di\u00E1n: "",
    di\u01CEn: "\u5178\u594C\u70B9\u5A70\u655F\u6923\u8DD5\u7898\u84A7\u8547\u8E2E\u9EDE\u56B8",
    di\u00E0n: "\u7535\u963D\u576B\u5E97\u57AB\u6242\u73B7\u75C1\u94BF\u5A5D\u60E6\u6DC0\u5960\u7414\u6BBF\u75F6\u8714\u923F\u96FB\u588A\u58C2\u6A42\u6A5D\u6FB1\u975B\u78F9\u765C\u7C1F\u9A54",
    di\u0101o: "\u5201\u53FC\u6C48\u521F\u866D\u51CB\u595D\u5F34\u5F6B\u86C1\u6906\u7431\u8C82\u7889\u9CED\u7797\u932D\u96D5\u9B89\u9CB7\u7C13\u9F26\u9BDB\u9D70",
    di\u01CEo: "\u625A\u5C4C\u9CE5",
    di\u00E0o: "\u5F14\u4F04\u540A\u9493\u76C4\u7A8E\u8A0B\u6389\u91E3\u94DE\u94EB\u7D69\u921F\u7AE8\u84E7\u8A82\u929A\u92B1\u96FF\u9B61\u8ABF\u7639\u7AB5\u92FD\u85CB\u9443",
    di\u0113: "\u7239\u8DCC\u893A",
    di\u00E9: "\u4F5A\u6022\u6CC6\u82F5\u8FED\u54A5\u57A4\u5CCC\u604E\u6315\u6633\u67E3\u7ED6\u80C5\u74DE\u7723\u800A\u5551\u621C\u7730\u8C0D\u558B\u581E\u5D3C\u5E49\u60F5\u63F2\u7573\u7D70\u800B\u81F7\u8A44\u8D83\u8DD5\u8EFC\u957B\u53E0\u696A\u6B9C\u7243\u7252\u8DEE\u5D7D\u789F\u8728\u890B\u69E2\u8253\u8776\u7582\u8ADC\u8E40\u9D29\u87B2\u9CBD\u97A2\u66E1\u7589\u9C08\u758A\u6C0E",
    di\u011B: "",
    di\u00E8: "\u54CB",
    d\u012Bng: "\u4EC3\u53EE\u5975\u5E04\u738E\u753C\u753A\u7594\u76EF\u8035\u8670\u914A\u91D8\u976A",
    d\u01D0ng: "\u5975\u827C\u9876\u914A\u9802\u9F0E\u5D7F\u9F11\u6FCE\u85A1\u9424",
    d\u00ECng: "\u8BA2\u5FCA\u9964\u77F4\u5B9A\u8A02\u91D8\u98E3\u5576\u639F\u8423\u94E4\u6917\u815A\u7887\u952D\u78A0\u8062\u874A\u92CC\u9320\u78F8\u9841",
    di\u016B: "\u4E1F\u4E22\u94E5\u98A9\u92A9",
    d\u014Dng: "\u4E1C\u51AC\u549A\u5CBD\u6771\u82F3\u6638\u6C21\u5032\u9E2B\u57EC\u5A3B\u5D2C\u5D20\u6DB7\u7B17\u83C4\u5F9A\u6C2D\u8740\u9B97\u9F15\u9BDF\u9D87\u9DAB",
    d\u01D2ng: "\u63F0\u8463\u58A5\u5B1E\u61C2\u7BBD\u856B\u8ACC",
    d\u00F2ng: "\u52A8\u51BB\u4F97\u578C\u59DB\u5CD2\u606B\u630F\u680B\u6D1E\u72EA\u80E8\u8FF5\u51CD\u6219\u70D4\u80F4\u52D5\u5A3B\u5D20\u7850\u68DF\u6E69\u7D67\u8156\u50CD\u52ED\u71D1\u99E7\u9718",
    d\u014Du: "\u543A\u6793\u4FB8\u5517\u515C\u5160\u8538\u6A77\u7797\u7BFC",
    d\u00F3u: "\u551E",
    d\u01D2u: "\u4E67\u9627\u6296\u94AD\u9661\u86AA\u9204",
    d\u00F2u: "\u540B\u8C46\u90D6\u6D62\u72F5\u8373\u9017\u997E\u9B25\u68AA\u6BED\u6E0E\u8130\u9158\u75D8\u9597\u7AA6\u9B26\u92C0\u9916\u65A3\u7006\u95D8\u7AC7\u9B2A\u9B2C\u9B2D",
    d\u016B: "\u53BE\u5262\u9607\u561F\u7763\u918F\u95CD",
    d\u00FA: "\u72EC\u6D9C\u6E0E\u691F\u724D\u728A\u88FB\u8AAD\u7368\u9316\u51DF\u5335\u5B3B\u7006\u6ADD\u6BB0\u7258\u72A2\u74C4\u76BE\u9A33\u9EE9\u8B80\u8C44\u8D15\u97E3\u9AD1\u945F\u97C7\u97E5\u9EF7\u8B9F",
    d\u01D4: "\u7AFA\u7B03\u5835\u668F\u743D\u8D4C\u7779\u89A9\u8CED\u7BE4",
    d\u00F9: "\u828F\u5992\u675C\u59AC\u59E4\u8370\u79FA\u6675\u6E21\u976F\u9540\u8799\u6581\u6BAC\u934D\u8827\u8839",
    du\u0101n: "\u8011\u5073\u526C\u5A8F\u7AEF\u890D\u9374",
    du\u01CEn: "\u77ED",
    du\u00E0n: "\u6BB5\u65AD\u5845\u7F0E\u846E\u6934\u7145\u7456\u8176\u78AB\u953B\u7DDE\u6BC8\u7C16\u935B\u65B7\u8E96\u7C6A",
    du\u012B: "\u5796\u5806\u5860\u75FD\u78D3\u9566\u9D2D\u9413\u941C",
    du\u01D0: "\u554D\u9827",
    du\u00EC: "\u961F\u5BF9\u514A\u514C\u5BFE\u6778\u794B\u603C\u966E\u6553\u655A\u968A\u7893\u7D90\u5C0D\u619E\u619D\u6FE7\u6FFB\u85B1\u61DF\u7022\u7029\u8B48\u8B75\u8F5B",
    d\u016Bn: "\u5428\u60C7\u8733\u58AA\u58AB\u58A9\u64B4\u7364\u5678\u6489\u6A54\u729C\u7905\u8E7E\u8E72\u9A50",
    d\u01D4n: "\u76F9\u8DB8\u8E89",
    d\u00F9n: "\u4F05\u5749\u5E89\u5FF3\u6C8C\u7096\u76FE\u7818\u9007\u949D\u987F\u9041\u920D\u696F\u9813\u78B7\u906F\u619E\u6F61\u71C9\u8E32",
    duo: "",
    du\u014D: "\u591B\u591A\u5484\u54C6\u7553\u525F\u6387\u6560\u656A\u6BF2\u88F0\u8DE2\u5689",
    du\u00F3: "\u4EDB\u593A\u6CB0\u94CE\u526B\u6553\u655A\u55A5\u75E5\u922C\u596A\u51D9\u8E31\u9438",
    du\u01D2: "\u6735\u6736\u54DA\u579C\u6306\u57F5\u5D1C\u7F0D\u88B3\u692F\u787E\u8D93\u8EB1\u8EB2\u7D9E\u4EB8\u8EC3\u9B0C\u56B2\u5972",
    du\u00F2: "\u6755\u675D\u5234\u5241\u67A4\u6CB2\u964A\u964F\u9973\u579C\u5C2E\u6306\u6305\u67C1\u67C2\u67EE\u6857\u8235\u968B\u5AA0\u60F0\u9693\u8DE2\u8DE5\u8DFA\u98FF\u99B1\u58AE\u619C\u99C4\u58AF\u96B3\u9D7D",
    \u0113: "\u59B8\u59BF\u5A3F\u5A40\u5C59\u75FE",
    \u00E9: "\u8BB9\u542A\u56EE\u8FD7\u4FC4\u5CC9\u54E6\u5A25\u5CE9\u5CE8\u6D90\u83AA\u73F4\u8A1B\u7692\u774B\u920B\u9507\u9E45\u78C0\u8A90\u92E8\u981F\u989D\u9B64\u984D\u9D5E\u9D5D\u8B4C",
    \u011B: "\u6799\u5A3F\u7828\u60E1\u980B\u5641\u9A00\u9D48",
    \u00E8: "\u5384\u6239\u6B7A\u5C8B\u9628\u5443\u627C\u82CA\u9638\u545D\u6799\u7810\u8F6D\u54A2\u54B9\u57A9\u59F6\u6D1D\u7808\u530E\u654B\u8685\u997F\u5054\u537E\u580A\u5A3E\u60AA\u7846\u8C14\u8EDB\u9102\u960F\u582E\u5828\u5D3F\u60E1\u6115\u6E42\u843C\u8C5F\u8EF6\u904C\u904F\u922A\u5EC5\u6415\u6424\u6439\u7427\u75F7\u816D\u50EB\u8741\u9537\u9E57\u855A\u907B\u981E\u989A\u9913\u5669\u64DC\u89A8\u8AE4\u95BC\u9929\u9354\u9CC4\u6B5E\u984E\u7918\u6AEE\u9C10\u9D9A\u9C2A\u8B8D\u9F43\u9469\u9F76\u9C77",
    \u0113i: "\u8BF6\u6B38\u8A92",
    \u00E9i: "\u8BF6\u6B38\u8A92",
    \u011Bi: "\u8BF6\u6B38\u8A92",
    \u00E8i: "\u8BF6\u6B38\u8A92",
    \u0113n: "\u5940\u6069\u84BD\u717E",
    \u011Bn: "\u5CCE",
    \u00E8n: "\u6441",
    \u0113ng: "\u97A5",
    \u00E9r: "\u513F\u800C\u5150\u6752\u4F95\u5152\u9651\u5CCF\u6D0F\u800F\u834B\u682D\u80F9\u5532\u6895\u88BB\u9E38\u7CAB\u804F\u8F00\u9C95\u96AD\u9AF5\u9B9E\u9D2F\u8F5C",
    \u011Br: "\u5C12\u5C13\u5C14\u8033\u8FE9\u6D31\u9975\u682E\u6BE6\u73E5\u94D2\u8848\u723E\u927A\u990C\u99EC\u85BE\u9087\u8DB0",
    \u00E8r: "\u4E8C\u5F0D\u5F10\u4F74\u5235\u54A1\u8D30\u8CAE\u8CB3\u8A80\u6A32\u9AF6",
    f\u0101: "\u51B9\u6CB7\u767A\u767C\u5F42\u9197\u91B1",
    f\u00E1: "\u4E4F\u4F10\u59C2\u577A\u57A1\u6D4C\u75BA\u7F5A\u8337\u9600\u6830\u7B29\u50A0\u7B4F\u7782\u7F70\u95A5\u58A2\u7F78\u6A43\u85C5",
    f\u01CE: "\u4F71\u6CD5\u5CDC\u781D\u9345\u704B",
    f\u00E0: "\u73D0\u743A\u9AEA\u855F\u9AEE",
    f\u0101n: "\u5E06\u5FDB\u72BF\u62DA\u7568\u52EB\u5643\u5B0F\u5E61\u61A3\u65D9\u65DB\u7E59\u7FFB\u85E9\u8F53\u98BF\u7C53\u98DC\u9C55",
    f\u00E1n: "\u51E2\u51E3\u51E1\u5325\u674B\u67C9\u77FE\u7C75\u9492\u8224\u70E6\u8227\u7B32\u91E9\u68E5\u7169\u7DD0\u58A6\u6A0A\u8543\u71D4\u74A0\u81B0\u85A0\u894E\u7FB3\u8E6F\u703F\u792C\u8629\u9407\u9422\u881C\u9DED",
    f\u01CEn: "\u53CD\u6255\u4EEE\u8FD4\u6A4E",
    f\u00E0n: "\u6C3E\u72AF\u597F\u6C4E\u6CDB\u996D\u8303\u8D29\u7548\u8A09\u8ED3\u5A4F\u6873\u68B5\u76D5\u7B35\u8CA9\u8EEC\u98F0\u98EF\u6EFC\u5B0E\u7BC4\u8F3D\u702A",
    f\u0101ng: "\u531A\u65B9\u90A1\u6C78\u82B3\u678B\u7265\u794A\u94AB\u6DD3\u8684\u580F\u8DBD\u9201\u933A\u9D0B",
    f\u00E1ng: "\u9632\u59A8\u623F\u80AA\u57C5\u9C82\u9B74",
    f\u01CEng: "\u4EFF\u8BBF\u5F77\u7EBA\u6609\u6618\u74EC\u7706\u5023\u65CA\u772A\u7D21\u822B\u8A2A\u9AE3\u9DAD",
    f\u00E0ng: "\u653E\u8DBD",
    f\u0113i: "\u98DE\u5983\u975E\u98DB\u5561\u5A53\u5A54\u6E04\u7EEF\u6249\u6590\u6683\u7306\u975F\u88F6\u7DCB\u871A\u970F\u9CB1\u9925\u99A1\u9A11\u9A1B\u9BE1\u98DD",
    f\u00E9i: "\u80A5\u75BF\u6DDD\u8153\u75F1\u8730",
    f\u011Bi: "\u670F\u80D0\u532A\u8BFD\u595C\u60B1\u6590\u68D0\u69A7\u7FE1\u855C\u8AB9\u7BDA",
    f\u00E8i: "\u5420\u72BB\u82BE\u5E9F\u676E\u67F9\u6CB8\u72D2\u80BA\u80CF\u6632\u80C7\u8D39\u4FF7\u5255\u539E\u75BF\u7829\u966B\u5C5D\u7B30\u8409\u5EC3\u8CBB\u75F1\u9544\u5EE2\u66CA\u6A43\u6A68\u7648\u9F23\u6FF7\u87E6\u6AE0\u9428\u9745",
    f\u0113n: "\u5429\u5E09\u7EB7\u82AC\u6610\u6C1B\u73A2\u780F\u7AD5\u886F\u7D1B\u7FC2\u68A4\u68FB\u8A1C\u8EAE\u915A\u9216\u96F0\u999A\u6706\u9934\u9959",
    f\u00E9n: "\u5746\u575F\u59A2\u5C8E\u6C7E\u670C\u678C\u7083\u7F92\u86A0\u86A1\u68FC\u711A\u84B6\u96AB\u58B3\u5E69\u6FC6\u7356\u8561\u9B75\u9CFB\u6A68\u71CC\u71D3\u8C6E\u9F22\u7FB5\u9F16\u8C76\u8F52\u943C\u99A9\u9EC2",
    f\u011Bn: "\u7C89\u9EFA",
    f\u00E8n: "\u574B\u5F05\u594B\u5FFF\u79CE\u507E\u6124\u7CAA\u50E8\u61A4\u7356\u7793\u596E\u6A68\u81B9\u7CDE\u9CBC\u7035\u9C5D",
    f\u0113ng: "\u4E30\u4EF9\u51E8\u51EC\u5906\u59A6\u6CA3\u6CA8\u51EE\u67AB\u7090\u5C01\u75AF\u76FD\u781C\u98A8\u57C4\u5CF0\u5CEF\u8391\u5051\u687B\u70FD\u7412\u583C\u5D36\u6E22\u7326\u8451\u950B\u6953\u728E\u8702\u71A2\u760B\u78B8\u50FC\u7BC8\u9137\u92D2\u6A92\u8C50\u93BD\u93E0\u9146\u5BF7\u7043\u8634\u973B\u882D\u974A\u98CC\u9EB7",
    f\u00E9ng: "\u5906\u6D72\u9022\u5838\u6E84\u99AE\u6453\u6F28\u7D98\u8242\u7E2B",
    f\u011Bng: "\u8BBD\u98A8\u8982\u552A\u8AF7",
    f\u00E8ng: "\u51E4\u5949\u4FF8\u687B\u6E57\u7128\u7148\u8D57\u9CEF\u9CF3\u9D0C\u7E2B\u8CF5",
    f\u00F3: "\u4ECF\u4EF8\u5772\u68BB",
    f\u014Du: "",
    f\u00F3u: "\u7D11",
    f\u01D2u: "\u7F36\u599A\u70B0\u7F39\u7F3B\u6B95\u96EC\u9D00",
    f\u016B: "\u4F15\u909E\u544B\u598B\u6299\u59C7\u678E\u739E\u80A4\u6024\u67CE\u7806\u80D5\u8342\u886D\u5A10\u5C03\u634A\u8374\u65C9\u7408\u7D28\u8DBA\u915C\u9EB8\u7A03\u8DD7\u9207\u7B5F\u7D92\u911C\u5B75\u7CB0\u84F2\u6577\u819A\u9CFA\u9EA9\u7CD0\u9EAC\u9EB1\u61EF\u74B7",
    f\u00FA: "\u4E40\u5DFF\u5F17\u6255\u4F0F\u51EB\u7536\u521C\u5B5A\u6276\u82A3\u8299\u82BE\u5488\u59C7\u5B93\u5CAA\u5E17\u602B\u678E\u6CED\u7EC2\u7ECB\u82FB\u8300\u4FD8\u5798\u67B9\u67EB\u67ED\u6C1F\u6D11\u70A5\u73B8\u7549\u7550\u7953\u7F58\u80D5\u832F\u90DB\u97E8\u9CEC\u54F9\u57BA\u683F\u6D6E\u7557\u7829\u83A9\u86A8\u889A\u5310\u6874\u6DAA\u70F0\u7408\u7B26\u7B30\u7D31\u7D3C\u7FC7\u8274\u83D4\u8659\u88B1\u5E45\u68F4\u7D65\u7F66\u844D\u798F\u7D8D\u8240\u8709\u8F90\u9258\u925C\u98AB\u9CE7\u6991\u7A2A\u7B81\u7B99\u7CB0\u8914\u8C67\u97CD\u98B0\u5E5E\u6F93\u8760\u9AF4\u9D14\u8AE8\u8E3E\u8F3B\u9B84\u7641\u8946\u9BB2\u9EFB\u8965\u9D69\u7E80\u9D9D",
    f\u01D4: "\u961D\u5452\u629A\u752B\u4E76\u5E9C\u5F23\u62CA\u65A7\u4FCC\u4FDB\u67CE\u90D9\u4FEF\u86A5\u91E1\u91DC\u636C\u812F\u8F85\u6928\u7124\u76D9\u8151\u6ECF\u8705\u8150\u8F14\u5638\u64AB\u982B\u9B34\u7C20\u9EFC",
    f\u00F9: "\u8BA3\u4ED8\u5987\u8D1F\u9644\u5490\u577F\u5F7F\u7ACE\u961C\u9A78\u590D\u5CCA\u67CE\u6D11\u7954\u8A03\u8CA0\u8D74\u86A5\u889D\u5069\u51A8\u5A4F\u5A66\u636C\u7D28\u86B9\u5085\u5A8D\u5BCC\u5FA9\u79FF\u842F\u86D7\u8984\u8A42\u8D4B\u6931\u7F1A\u8179\u9C8B\u6991\u79A3\u8907\u8914\u8D59\u7DEE\u8567\u875C\u876E\u8CE6\u99D9\u5B14\u7E1B\u8F39\u9B92\u8CFB\u9351\u9362\u9CC6\u8986\u99A5\u9C12",
    g\u0101: "\u65EE\u4F3D\u593E\u560E\u5620",
    g\u00E1: "\u9486\u8ECB\u5C1C\u91D3\u560E\u5620\u5676\u9337",
    g\u01CE: "\u5C15\u738D\u6712\u560E\u5620",
    g\u00E0: "\u5C2C\u9B40",
    g\u0101i: "\u4F85\u8BE5\u90C2\u9654\u5793\u59DF\u5CD0\u8344\u6650\u8D45\u7561\u7974\u7D6F\u9691\u8A72\u8C65\u8CC5\u8CCC",
    g\u01CEi: "\u5FCB\u6539\u7D60",
    g\u00E0i: "\u4E10\u4E62\u5304\u5303\u675A\u9499\u6461\u6E89\u8462\u9223\u6224\u6982\u69E9\u84CB\u6F11\u69EA\u74C2",
    g\u0101n: "\u7518\u5FD3\u8FC0\u653C\u7395\u809D\u5481\u5769\u6CD4\u77F8\u82F7\u67D1\u73B5\u7AFF\u75B3\u9150\u7C93\u51F2\u5C32\u5C34\u7B78\u6F27\u9CF1\u5C36\u5C37\u9B50",
    g\u01CEn: "\u4EE0\u8289\u76AF\u79C6\u8866\u8D76\u6562\u687F\u7A08\u611F\u6F89\u8D95\u6A44\u64C0\u6FB8\u7BE2\u7C33\u9CE1\u9C64",
    g\u00E0n: "\u4F44\u65F0\u6C75\u76F0\u7EC0\u501D\u51CE\u6DE6\u7D3A\u8A4C\u9AAD\u5E79\u69A6\u6A8A\u7C33\u8D11\u8D63\u8D1B\u7068",
    g\u0101ng: "\u5188\u51AE\u521A\u7EB2\u809B\u5CA1\u7268\u7598\u77FC\u7F38\u525B\u7F61\u5808\u5D17\u6386\u91ED\u68E1\u7285\u583D\u6443\u7899\u7DB1\u7F41\u92FC\u93A0",
    g\u01CEng: "\u5C97\u72BA\u5D17",
    g\u00E0ng: "\u7135\u7139\u7B7B\u69D3\u92FC\u6205\u6206\u6207",
    g\u0101o: "\u768B\u7F94\u7F99\u9AD8\u7690\u9AD9\u81EF\u776A\u69D4\u777E\u69F9\u734B\u6A70\u7BD9\u7CD5\u993B\u6ADC\u97DF\u9DCE\u9F1B\u9DF1",
    g\u01CEo: "\u5930\u6772\u83D2\u7A01\u641E\u7F1F\u69C0\u69C1\u7A3E\u7A3F\u9550\u7E1E\u85C1\u6ABA\u85F3\u93AC",
    g\u00E0o: "\u543F\u544A\u52C2\u8BF0\u90DC\u5CFC\u796E\u7970\u9506\u7B76\u799E\u8AA5\u92EF",
    g\u0113: "\u6208\u4EE1\u572A\u6262\u72B5\u7EA5\u6213\u8090\u726B\u54AF\u7D07\u9979\u54E5\u88BC\u9E3D\u5272\u5F41\u6ED2\u6228\u6B4C\u9D1A\u64F1\u8B0C\u9D3F\u93B6",
    g\u00E9: "\u5444\u4F6E\u4F6B\u530C\u630C\u9601\u9769\u654B\u683C\u9B32\u6105\u7332\u81F5\u86D2\u88D3\u9694\u988C\u55DD\u5865\u6EC6\u89E1\u643F\u69C5\u8188\u95A3\u95A4\u7366\u9549\u9788\u97D0\u9ABC\u81C8\u8AFD\u8F35\u64F1\u9BA5\u9BAF\u6ACA\u9391\u9398\u97DA\u8F55\u97B7\u9A14",
    g\u011B: "\u500B\u54FF\u7B34\u8238\u5605\u55F0\u84CB\u9C84",
    g\u00E8: "\u4E87\u5424\u8316\u867C\u500B\u784C\u94EC\u7B87\u927B",
    g\u011Bi: "\u7D66",
    g\u0113n: "\u6839\u8DDF",
    g\u00E9n: "\u54CF",
    g\u011Bn: "",
    g\u00E8n: "\u4E99\u4E98\u826E\u831B\u63EF\u6404",
    g\u0113ng: "\u522F\u5E9A\u754A\u6D6D\u8015\u83EE\u6929\u713F\u7D59\u7D5A\u8D53\u9E52\u7DEA\u7E06\u7FAE\u8CE1\u7FB9\u9D8A",
    g\u011Bng: "\u90E0\u54FD\u57C2\u5CFA\u632D\u7EE0\u803F\u8384\u6897\u7D86\u9CA0\u9ABE\u9BC1",
    g\u00E8ng: "\u5829\u7DEA\u7E06",
    g\u014Dng: "\u5DE5\u5F13\u516C\u53B7\u529F\u653B\u675B\u4F8A\u7CFF\u7CFC\u80B1\u5BAB\u7D05\u5BAE\u606D\u8EAC\u9F9A\u5311\u5868\u5E4A\u6129\u89E5\u8EB3\u6150\u5314\u78BD\u7BE2\u9AF8\u89F5\u9F8F\u9F94",
    g\u01D2ng: "\u5EFE\u5DE9\u6C5E\u62F1\u551D\u62F2\u6831\u73D9\u55CA\u8F01\u6F92\u92BE\u978F",
    g\u00F2ng: "\u8D21\u7FBE\u551D\u8CA2\u55CA\u6129\u6150\u7195",
    g\u014Du: "\u4F5D\u6C9F\u82B6\u94A9\u75C0\u88A7\u7F11\u920E\u6E9D\u9264\u7DF1\u8920\u7BDD\u7C3C\u97B2\u97DD",
    g\u01D2u: "\u82B6\u5CA3\u72D7\u82DF\u67B8\u73BD\u8009\u8007\u7B31\u8008\u86BC\u8C7F",
    g\u00F2u: "\u5474\u5778\u6784\u8BDF\u8D2D\u57A2\u59E4\u5193\u5542\u5920\u591F\u508B\u8A3D\u5ABE\u5F40\u6406\u8A6C\u9058\u96CA\u69CB\u7179\u89CF\u6480\u7CD3\u89AF\u8CFC",
    g\u016B: "\u675A\u5471\u5495\u59D1\u5B64\u6CBD\u6CD2\u82FD\u5DED\u5DEC\u67E7\u8F71\u5503\u5502\u7F5B\u9E2A\u7B1F\u83C7\u83F0\u86C4\u84C7\u89DA\u8EF1\u8EF2\u8F9C\u9164\u7A12\u9232\u78C6\u7B8D\u7B9B\u5AF4\u7BD0\u6A6D\u9B95\u9D23",
    g\u00FA: "",
    g\u01D4: "\u5903\u53E4\u6262\u6287\u6C69\u8BC2\u8C37\u80A1\u726F\u7F5F\u7F96\u9027\u94B4\u50A6\u5552\u6DC8\u8135\u86CA\u55D7\u5C33\u6132\u8A41\u9989\u6BC2\u8CC8\u9237\u9F14\u9F13\u560F\u6996\u76B7\u9E58\u7A40\u7E0E\u7CD3\u85A3\u6FF2\u76BC\u81CC\u8F42\u9936\u6ACE\u7014\u76EC\u77BD\u9DBB\u8831",
    g\u00F9: "\u56FA\u6018\u6545\u51C5\u987E\u580C\u5D13\u5D2E\u688F\u727F\u68DD\u797B\u96C7\u69BE\u75FC\u9522\u50F1\u932E\u9CB4\u9BDD\u9867",
    gu\u0101: "\u74DC\u522E\u5471\u80CD\u681D\u6870\u94E6\u9E39\u6B44\u7171\u98AA\u8D8F\u5280\u7DFA\u929B\u8AE3\u8E3B\u92BD\u98B3\u9D30\u9A27",
    gu\u00E1: "",
    gu\u01CE: "\u518E\u53E7\u5459\u5471\u54BC\u5250\u526E\u5BE1",
    gu\u00E0: "\u5366\u576C\u8BD6\u6302\u5569\u639B\u7F63\u88BF\u7D53\u7F6B\u8902\u8A7F",
    gu\u0101i: "\u4E56",
    gu\u00E1i: "\u53CF",
    gu\u01CEi: "\u62D0\u67B4\u67FA\u7F6B\u7B89",
    gu\u00E0i: "\u592C\u602A\u6060",
    gu\u0101n: "\u5173\u7EB6\u5B98\u77DC\u898C\u500C\u77DD\u839E\u6DAB\u68FA\u8484\u7AA4\u959E\u7DB8\u95A2\u761D\u764F\u89B3\u95D7\u9CCF\u95DC\u9C25\u89C0\u9C5E",
    gu\u01CEn: "\u839E\u9986\u742F\u75EF\u7B66\u65A1\u7BA1\u8F28\u74AD\u8218\u9327\u9928\u9CE4",
    gu\u00E0n: "\u535D\u6BCC\u4E31\u8D2F\u6CF4\u898C\u60BA\u60EF\u63BC\u6DC9\u8CAB\u60B9\u797C\u6163\u645C\u6F45\u9066\u6A0C\u76E5\u7F46\u96DA\u89B3\u8E80\u93C6\u704C\u721F\u74D8\u77D4\u7936\u9E73\u7F50\u89C0\u9475\u6B1F\u9C79\u9E1B",
    gu\u0101ng: "\u5149\u706E\u709A\u709B\u7097\u54A3\u5799\u59EF\u6304\u6D38\u832A\u6844\u70E1\u73D6\u80F1\u7844\u50D9\u8F04\u6F62\u92A7\u9EC6",
    gu\u01CEng: "\u5E83\u72B7\u5EE3\u7377\u81E9",
    gu\u00E0ng: "\u4FC7\u6844\u901B\u81E6\u6497",
    gu\u012B: "\u5F52\u572D\u59AB\u89C4\u90BD\u7688\u8325\u95FA\u5E30\u73EA\u80FF\u4E80\u7845\u7A90\u88BF\u898F\u5AAF\u5EC6\u691D\u7470\u90CC\u5AE2\u646B\u95A8\u9C91\u5B00\u5DB2\u69E3\u69FB\u69FC\u9CFA\u749D\u77A1\u9F9C\u9BAD\u5DC2\u6B78\u96DF\u9B36\u9A29\u6AF0\u6AF7\u74CC\u862C\u9B39",
    gu\u01D0: "\u5B84\u6C3F\u6739\u8F68\u5E8B\u4F79\u5326\u8BE1\u9652\u579D\u59FD\u6051\u6531\u7678\u8ECC\u9B3C\u5EAA\u796A\u8ED3\u532D\u6677\u6E40\u86EB\u89E4\u8A6D\u53AC\u7C0B\u87E1",
    gu\u00EC: "\u6530\u523F\u523D\u660B\u7085\u6531\u8D35\u6842\u6867\u532E\u772D\u784A\u8DB9\u6922\u7324\u7B40\u8CB4\u6E8E\u84D5\u8DEA\u5331\u7786\u528A\u528C\u5DA1\u648C\u69F6\u879D\u6A3B\u6A9C\u77B6\u79AC\u7C02\u6AC3\u7650\u8958\u9400\u9CDC\u97BC\u944E\u9C56\u9C65",
    g\u01D4n: "\u4E28\u886E\u60C3\u784D\u7EF2\u889E\u8F8A\u6EDA\u84D8\u88F7\u6EFE\u7DC4\u8509\u78D9\u7DF7\u8F25\u9CA7\u9B8C\u9BC0",
    g\u00F9n: "\u7754\u8B34",
    guo: "",
    gu\u014D: "\u5459\u54BC\u54B6\u57DA\u90ED\u556F\u581D\u5D1E\u6E26\u7313\u6947\u8052\u921B\u9505\u588E\u7611\u5613\u5F49\u6FC4\u8748\u934B\u5F4D\u87C8\u61D6\u77CC",
    gu\u00F3: "\u56D7\u56EF\u56F6\u56FB\u56FD\u5700\u654B\u5590\u570B\u5E3C\u63B4\u8158\u6451\u5E57\u6156\u6F0D\u805D\u852E\u8195\u8662\u7C02\u9998",
    gu\u01D2: "\u679C\u60C8\u6DC9\u83D3\u9983\u6901\u8901\u69E8\u7CBF\u7DB6\u873E\u88F9\u8F20\u991C\u6ACE",
    gu\u00F2: "\u904E\u8142\u9439",
    h\u0101: "\u867E\u7D26\u94EA\u927F\u8766",
    h\u00E1: "",
    h\u01CE: "\u5964",
    h\u00E0: "",
    h\u0101i: "\u548D\u55E8",
    h\u00E1i: "\u90C2\u5B69\u9AB8\u9084\u56A1",
    h\u01CEi: "\u6D77\u80F2\u70F8\u5870\u917C\u91A2",
    h\u00E0i: "\u4EA5\u598E\u62F8\u9A87\u5BB3\u6C26\u7332\u7D6F\u55D0\u9900\u99ED\u99F4\u995A",
    han: "\u516F\u7233",
    h\u0101n: "\u72B4\u4F44\u9878\u54FB\u86B6\u9163\u9807\u5AE8\u8C3D\u61A8\u99A0\u9B7D\u6B5B\u9F3E",
    h\u00E1n: "\u9097\u542B\u6C75\u90AF\u51FD\u80A3\u51FE\u8677\u5505\u5705\u5A22\u6D5B\u7B12\u5D21\u6657\u6892\u6DB5\u7113\u7400\u5BD2\u5D45\u97E9\u6937\u751D\u7B68\u99AF\u872C\u6F8F\u92E1\u97D3",
    h\u01CEn: "\u4E06\u7F55\u6D6B\u558A\u8C43\u95DE",
    h\u00E0n: "\u4EE0\u5388\u6C49\u5C7D\u5FD3\u625E\u95EC\u653C\u65F0\u65F1\u80A3\u5505\u57BE\u608D\u634D\u6D86\u7302\u839F\u6658\u710A\u83E1\u91EC\u9588\u7694\u7745\u50BC\u86FF\u9894\u99AF\u6496\u6F22\u850A\u872D\u9CF1\u66B5\u71AF\u8F1A\u92B2\u92CE\u61BE\u64BC\u7FF0\u8792\u9837\u9844\u99FB\u8B40\u96D7\u701A\u9DBE",
    h\u0101ng: "",
    h\u00E1ng: "\u909F\u5994\u82C0\u8FD2\u65BB\u676D\u57B3\u7ED7\u6841\u7B10\u822A\u86A2\u9883\u88C4\u8CA5\u7B55\u7D4E\u980F\u9B67",
    h\u00E0ng: "\u5FFC\u6C86\u7B10",
    h\u0101o: "\u8320\u84BF\u5686\u8585\u85A7",
    h\u00E1o: "\u4E5A\u6BDC\u547A\u7AD3\u768B\u869D\u6BEB\u6903\u55E5\u7346\u865F\u8C89\u5651\u7354\u8C6A\u5637\u734B\u8AD5\u512B\u568E\u58D5\u6FE0\u7C47\u8814\u8B79",
    h\u01CEo: "\u90DD",
    h\u00E0o: "\u660A\u4FB4\u6626\u79CF\u54E0\u604F\u608E\u6D69\u8017\u6667\u6DCF\u5090\u7693\u9117\u6EC8\u6EDC\u8055\u865F\u66A0\u66A4\u66AD\u6F94\u769C\u769E\u9550\u66CD\u76A1\u8583\u76A5\u85C3\u93AC\u98A2\u704F\u9865\u9C1D\u705D",
    h\u0113: "\u8BC3\u62B2\u6B31\u8A36\u55EC\u881A",
    h\u00E9: "\u79BE\u7EA5\u5459\u52BE\u548A\u54BC\u59C0\u6CB3\u90C3\u5CC6\u66F7\u67C7\u72E2\u76C7\u7C7A\u7D07\u9602\u9978\u6546\u76C9\u76CD\u8377\u91DB\u555D\u6DB8\u6E2E\u76D2\u83CF\u8402\u9F81\u559B\u60D2\u7CAD\u8A38\u988C\u6941\u6BFC\u6F95\u84CB\u8A65\u8C88\u8C89\u924C\u9616\u9C84\u6705\u7186\u95A1\u95A4\u9904\u9E56\u9EA7\u5648\u981C\u7BD5\u7FEE\u879B\u9B7A\u7909\u95D4\u97A8\u9F55\u8988\u9DA1\u76AC\u9449\u9FA2",
    h\u011B: "",
    h\u00E8: "\u548A\u62B2\u578E\u8D3A\u54EC\u8894\u96BA\u5BC9\u7103\u60D2\u7332\u8CC0\u55C3\u7142\u788B\u7187\u8910\u8D6B\u9E64\u7FEF\u5687\u58D1\u764B\u8B1E\u71FA\u7200\u9DAE\u9DB4\u974D\u974E\u9E16\u974F",
    h\u0113i: "\u9ED2\u9ED1\u55E8\u6F76",
    h\u00E9n: "\u62EB\u75D5\u978E",
    h\u011Bn: "\u4F77\u54CF\u5F88\u72E0\u8A6A\u5677",
    h\u00E8n: "\u6068\u5677",
    h\u0113ng: "\u4EA8\u54FC\u6099\u6DA5\u811D",
    h\u00E9ng: "\u59EE\u6046\u6052\u6841\u70C6\u73E9\u80FB\u9E3B\u6497\u6A6B\u8861\u9D34\u9D46\u8605\u9445",
    h\u00E8ng: "\u6099\u5548\u6A6B",
    hng: "\u54FC",
    h\u014Dng: "\u53FF\u543D\u544D\u7074\u8F70\u8A07\u70D8\u8EE3\u63C8\u6E39\u7122\u7861\u8C3E\u85A8\u8F37\u569D\u9367\u5DC6\u8F5F",
    h\u00F3ng: "\u53B7\u4EDC\u5F18\u53FF\u5985\u5C78\u5430\u5B8F\u6C6F\u7392\u74E8\u7EAE\u95F3\u5B96\u6CD3\u739C\u82F0\u57AC\u5A02\u6C97\u6D2A\u7AD1\u7D05\u7FBE\u836D\u8679\u6D64\u6D72\u7D18\u7FC3\u803E\u7854\u7D2D\u8C39\u9E3F\u6E31\u6E84\u7AE4\u7CA0\u8453\u8452\u921C\u958E\u7D8B\u7FDD\u8C3C\u6F42\u9277\u9783\u9B5F\u7BCA\u92D0\u5F4B\u9710\u9EC9\u971F\u9D3B\u9ECC",
    h\u01D2ng: "\u551D\u664E\u55CA\u6129\u6150",
    h\u00F2ng: "\u8BA7\u8A0C\u95A7\u6494\u6F92\u92BE\u857B\u95C2\u9B28\u95C0",
    h\u014Du: "\u9F41",
    h\u00F3u: "\u77E6\u9107\u5589\u5E3F\u7334\u8454\u760A\u777A\u9297\u7BCC\u7CC7\u7FED\u9ABA\u7FF5\u936D\u9931\u9BF8",
    h\u01D2u: "\u543C\u543D\u72BC\u5474",
    h\u00F2u: "\u540E\u90C8\u539A\u5795\u5F8C\u6D09\u77E6\u8329\u9005\u5019\u5820\u8C5E\u9C8E\u9C98\u9B9C\u9C5F",
    h\u016B: "\u4E4E\u4E6F\u5322\u864D\u82B4\u547C\u5780\u5FFD\u6612\u66F6\u6CD8\u82F8\u6057\u70C0\u8294\u8F77\u532B\u553F\u60DA\u6DF4\u8656\u8EE4\u96FD\u5611\u5BE3\u6EF9\u96D0\u5E60\u622F\u6B51\u6231\u81B4\u6232\u8B3C",
    h\u00FA: "\u56EB\u6287\u5F27\u72D0\u74F3\u80E1\u58F6\u96BA\u58F7\u659B\u7100\u5596\u58FA\u5AA9\u6430\u6E56\u7322\u7D57\u846B\u9E44\u695C\u7173\u745A\u74E1\u561D\u851B\u9E55\u9E58\u69F2\u7BB6\u7E0E\u8774\u885A\u9B71\u7E20\u879C\u9190\u9836\u89F3\u9378\u992C\u7910\u9D60\u702B\u9B0D\u9C17\u9D98\u9DA6\u9DBB\u9DAE",
    h\u01D4: "\u4E55\u6C7B\u864E\u6D52\u4FFF\u6DF2\u8400\u7425\u865D\u6EF8\u933F\u9BF1",
    h\u00F9: "\u4E92\u5F16\u6236\u6238\u6237\u51B1\u8290\u5E0D\u62A4\u6C8D\u6CAA\u5CB5\u6019\u623D\u6608\u66F6\u6791\u59F1\u6018\u795C\u7B0F\u7C90\u5A5F\u6248\u74E0\u695B\u55C3\u55C0\u7D94\u9120\u96FD\u5AED\u5AEE\u6462\u6EEC\u8530\u69F4\u71A9\u9CF8\u6FE9\u7C04\u8C70\u9359\u569B\u9E71\u89F7\u8B77\u9CE0\u9800\u9C6F\u9E0C",
    hu\u0101: "\u542A\u82B2\u82B1\u7809\u57D6\u5A72\u83EF\u691B\u7874\u848A\u5629\u7CC0\u8AAE\u9335\u8624",
    hu\u00E1: "\u545A\u59E1\u9A85\u83EF\u91EA\u91EB\u94E7\u6ED1\u733E\u5629\u6433\u64B6\u5283\u78C6\u8550\u8796\u92D8\u8B41\u93F5\u9A4A\u9DE8",
    hu\u00E0: "\u593B\u6779\u67A0\u753B\u8BDD\u5D0B\u6866\u83EF\u5A73\u756B\u5B05\u7575\u89DF\u8A71\u5283\u6466\u6A3A\u5AFF\u69EC\u6F85\u8AD9\u8AE3\u9ECA\u7E63\u8219\u8B6E",
    hu\u00E1i: "\u6000\u4F6A\u5F8A\u6DEE\u69D0\u8922\u8E1D\u61D0\u8931\u61F7\u7024\u6AF0\u8032\u8639",
    hu\u00E0i: "\u54B6\u58CA\u58DE\u863E",
    hu\u0101n: "\u6B22\u72BF\u72DF\u8C86\u6B53\u9D05\u61C1\u9D4D\u9144\u56BE\u5B49\u61FD\u737E\u6B61\u8B99\u8C9B\u9A69",
    hu\u00E1n: "\u73AF\u90C7\u5CD8\u6D39\u72DF\u8341\u57B8\u6853\u8408\u8411\u581A\u5BCF\u7D59\u96C8\u7342\u7D84\u7FA6\u849D\u8C86\u953E\u778F\u571C\u5B1B\u5BF0\u6FB4\u7F33\u9084\u961B\u74B0\u8C72\u9370\u96DA\u956E\u9E6E\u7CEB\u7E6F\u9436\u95E4\u9B1F\u74DB",
    hu\u01CEn: "\u7746\u7F13\u7DE9",
    hu\u00E0n: "\u5E7B\u5942\u8092\u5950\u5BA6\u5524\u6362\u6D63\u6DA3\u70C9\u60A3\u6899\u7115\u902D\u559A\u559B\u5D48\u610C\u63DB\u6E19\u75EA\u7165\u744D\u7D84\u8C62\u6F36\u7613\u69F5\u9CA9\u64D0\u6FA3\u85E7\u9BC7\u650C\u56BE\u8F58\u9BF6\u9C00",
    hu\u0101ng: "\u5DDF\u8093\u8352\u8841\u5BBA\u671A\u5843\u614C",
    hu\u00E1ng: "\u7687\u505F\u51F0\u968D\u9EC4\u55A4\u582D\u5A93\u5D32\u5FA8\u60F6\u63D8\u6E5F\u845F\u9051\u9EC3\u697B\u714C\u745D\u58B4\u6F62\u735A\u953D\u71BF\u749C\u7BC1\u824E\u8757\u7640\u78FA\u7A54\u8AFB\u7C27\u87E5\u9360\u992D\u9CC7\u8DAA\u97F9\u9404\u9A1C\u9C09\u9C51\u9DEC",
    hu\u01CEng: "\u6C7B\u6033\u604D\u70BE\u5BBA\u6644\u595B\u8C0E\u5E4C\u8A64\u7180\u71BF\u7E28\u8B0A\u5164\u6ACE\u720C",
    hu\u00E0ng: "\u6130\u6EC9\u69A5\u66C2\u769D\u93A4\u76A9",
    hui: "",
    hu\u012B: "\u7070\u7073\u8BD9\u54B4\u6062\u62FB\u6325\u6D03\u867A\u8886\u6656\u70E3\u73F2\u8C57\u5A4E\u5A88\u63EE\u7FDA\u8F89\u9693\u6689\u6932\u694E\u7147\u743F\u7762\u7988\u8A7C\u58AE\u5E51\u7773\u8918\u5645\u5655\u649D\u7FEC\u8F1D\u9EBE\u5FBD\u96B3\u7008\u8633\u5B48\u9C34",
    hu\u00ED: "\u56D8\u56DE\u56EC\u4F6A\u5EFB\u5EFD\u605B\u6D04\u8334\u8FF4\u70E0\u8698\u9025\u75D0\u7F0B\u86D5\u86D4\u8716\u85F1\u9BB0\u7E62",
    hu\u01D0: "\u867A\u6094\u70E0\u6BC0\u6BC1\u879D\u6BC7\u6A93\u71EC\u8B6D",
    hu\u00EC: "\u5349\u5C77\u5C76\u6C47\u8BB3\u6CCB\u54D5\u6D4D\u7ED8\u8294\u835F\u8BF2\u605A\u6075\u6867\u70E9\u8D3F\u5F57\u6666\u79FD\u5599\u5EC6\u60E0\u6E4F\u7D75\u7F0B\u7FD9\u9613\u532F\u5F5A\u5F59\u6703\u6ED9\u8A6F\u8CC4\u9892\u50E1\u5612\u7623\u8527\u8AA8\u928A\u571A\u5BED\u6167\u6193\u66B3\u69E5\u6F53\u6F70\u8559\u5666\u5B12\u5FBB\u6A5E\u6BA8\u6FAE\u6FCA\u7369\u74A4\u8588\u8589\u8AF1\u982E\u6A85\u6A9C\u71F4\u74AF\u7BF2\u85F1\u992F\u5696\u61F3\u77BA\u7A62\u7E62\u87EA\u6AD8\u7E6A\u7FFD\u8B53\u5136\u93F8\u95E0\u942C\u9767\u8B7F\u986A",
    h\u016Bn: "\u660F\u662C\u8364\u5A5A\u60DB\u6DBD\u7104\u960D\u68D4\u6B99\u6E63\u8477\u7767\u776F\u8512\u95BD\u8F4B",
    h\u00FAn: "\u5FF6\u6D51\u73F2\u9984\u6E3E\u6E77\u743F\u9B42\u991B\u9F32",
    h\u01D4n: "",
    h\u00F9n: "\u8BE8\u4FD2\u7703\u5031\u5702\u5A6B\u638D\u711D\u6EB7\u5C21\u6141\u7774\u89E8\u8AE2",
    hu\u014D: "\u5419\u79F4\u8020\u5290\u6509\u9A1E",
    hu\u00F3: "\u4F78\u59E1\u6D3B\u79EE\u79F3\u8D8F",
    hu\u01D2: "\u706C\u706B\u4F19\u90A9\u94AC\u9225\u6F37\u7177\u5925",
    hu\u00F2: "\u6C8E\u6216\u8D27\u549F\u4FF0\u6347\u7713\u83B7\u9584\u5268\u5590\u639D\u7978\u8CA8\u60D1\u65E4\u6E71\u798D\u6F37\u7AA2\u84A6\u952A\u5684\u596F\u64ED\u6FCA\u6FE9\u7372\u7BE7\u9343\u970D\u6AB4\u8B0B\u96D8\u77C6\u790A\u7A6B\u956C\u56AF\u5F5F\u7016\u802F\u8267\u85FF\u8816\u56BF\u66E4\u81DB\u7668\u77D0\u944A\u97C4\u9743\u5F60",
    j\u012B: "\u4E0C\u8BA5\u51FB\u5209\u53FD\u9965\u4E69\u520F\u573E\u673A\u7391\u808C\u82A8\u77F6\u9E21\u6785\u82D9\u54AD\u525E\u5527\u59EC\u5C50\u79EF\u7B04\u98E2\u57FA\u5EB4\u559E\u5D46\u5D47\u5E7E\u6532\u6567\u671E\u7284\u7B53\u7F09\u8D4D\u55D8\u7578\u7A18\u8DFB\u9CEE\u50DF\u6BC4\u7B95\u7DA8\u7DC1\u9288\u5630\u6483\u69E3\u6A2D\u757F\u7DDD\u89ED\u8AC5\u8CEB\u8E11\u8EB8\u9F51\u58BC\u64BD\u6A5F\u6FC0\u74A3\u79A8\u7A4D\u9324\u96AE\u61E0\u64CA\u78EF\u7C0A\u7F81\u8CF7\u6AC5\u802D\u96DE\u8B4F\u97F2\u9D8F\u8B64\u9416\u9951\u766A\u8E8B\u97BF\u9B55\u9DBA\u9DC4\u7F87\u8640\u9447\u8989\u9459\u9F4F\u7F88\u9E04\u898A",
    j\u00ED: "\u4E41\u4EBD\u4EBC\u53CA\u5C10\u4F0B\u5409\u5C8C\u5F76\u5FE3\u6C72\u7EA7\u5373\u6781\u7680\u4E9F\u4F76\u8BD8\u90C6\u537D\u53DD\u59DE\u6025\u768D\u7B08\u7D1A\u5832\u63E4\u75BE\u89D9\u506E\u5359\u5536\u6956\u6DC1\u710F\u8C3B\u6222\u68D8\u6975\u6B9B\u6E52\u96C6\u5849\u5AC9\u6131\u696B\u84BA\u874D\u8D8C\u8F91\u69C9\u8024\u818C\u92A1\u5DAF\u6F57\u6FC8\u7620\u7BBF\u8540\u857A\u8AD4\u8D9E\u8E16\u978A\u9E61\u6A9D\u878F\u8F2F\u78FC\u7C0E\u85C9\u894B\u8E50\u9353\u8265\u7C4D\u8F5A\u93F6\u9735\u9F4E\u8EA4\u96E7",
    j\u01D0: "\u5DF1\u4E2E\u5980\u5C70\u72B1\u6CF2\u866E\u6324\u810A\u638E\u6E08\u9C7E\u5E7E\u621F\u7D66\u5D74\u9E82\u9B62\u64A0\u61BF\u6A76\u64E0\u6FDF\u7A56\u87E3",
    j\u00EC: "\u5F50\u5F51\u65E1\u8BA1\u8BB0\u4F0E\u5756\u5993\u5FCC\u6280\u6C65\u82B0\u9645\u5242\u5B63\u54DC\u578D\u65E2\u6D0E\u7D00\u830D\u8324\u8360\u8A08\u8FF9\u5264\u755F\u7D12\u7EE7\u89CA\u8A18\u5048\u5BC4\u5BC2\u5E3A\u5F9B\u60B8\u65E3\u689E\u6E08\u7EE9\u5848\u60CE\u81EE\u846A\u8507\u517E\u52E3\u75F5\u7D99\u84DF\u88DA\u8DE1\u969B\u9B3E\u9B5D\u6456\u66A8\u6F03\u6F08\u799D\u7A29\u7A4A\u8A8B\u8DFD\u9701\u9B65\u9C9A\u66A9\u7789\u7A37\u8AC5\u9CAB\u5180\u5291\u66C1\u79A8\u7A44\u858A\u8940\u9AFB\u568C\u61E0\u6A95\u6FDF\u7A56\u7E3E\u7E4B\u7F7D\u85BA\u89AC\u9B86\u6AB5\u6AC5\u6AED\u74BE\u8E5F\u9BFD\u9D4B\u9F4C\u5EED\u61FB\u7660\u7A67\u7E6B\u860E\u9AA5\u9BDA\u7031\u7E7C\u862E\u9C40\u863B\u973D\u9C36\u9C3F\u9DD1\u9C6D\u9A65",
    jia: "",
    ji\u0101: "\u52A0\u4E6B\u4F3D\u593E\u5B8A\u62B8\u4F73\u62C1\u6CC7\u5F8D\u67B7\u6BE0\u6D43\u73C8\u54FF\u57C9\u633E\u6D79\u75C2\u689C\u7B33\u801E\u8888\u50A2\u7333\u846D\u8DCF\u6935\u728C\u8175\u926B\u5609\u64D6\u9553\u7CD8\u8C6D\u8C91\u9D10\u93B5\u9E9A",
    ji\u00E1: "\u573F\u593E\u5FE6\u6274\u90CF\u62EE\u835A\u90DF\u550A\u605D\u83A2\u621B\u8125\u88B7\u94D7\u621E\u7330\u86F1\u88CC\u9889\u988A\u86FA\u92CF\u982C\u9830\u9D36\u9D4A",
    ji\u01CE: "\u7532\u5CAC\u53DA\u73BE\u80DB\u659A\u94BE\u5A7D\u5FA6\u659D\u6935\u8CC8\u9240\u698E\u69DA\u7615\u6A9F",
    ji\u00E0: "\u9A7E\u67B6\u5AC1\u5E4F\u8CC8\u69A2\u50F9\u7A3C\u99D5",
    ji\u0101n: "\u620B\u5978\u5C16\u5E75\u575A\u6B7C\u51BF\u6214\u73AA\u80A9\u8270\u59E7\u59E6\u517C\u5805\u5E34\u60E4\u730F\u7B3A\u83C5\u83FA\u8C5C\u5094\u63C3\u6E54\u724B\u728D\u7F04\u844C\u9592\u9593\u96C3\u976C\u641B\u6937\u693E\u714E\u744A\u7777\u788A\u7F23\u84B9\u8C63\u6F38\u76E3\u7B8B\u852A\u6A2B\u719E\u7A34\u7DD8\u8551\u8573\u92D1\u9CA3\u9CFD\u9E63\u71B8\u7BEF\u7E11\u92FB\u8271\u97AC\u9930\u99A2\u9E89\u7010\u6FFA\u97AF\u9CD2\u9D51\u6BB1\u791B\u7C48\u9D73\u6515\u7038\u9C14\u6AFC\u6BB2\u8B7C\u9C1C\u9DBC\u7937\u7C5B\u97C0\u9C39\u56CF\u8643\u946F\u97C9",
    ji\u01CEn: "\u56DD\u62E3\u67A7\u4FED\u67EC\u8327\u5039\u6338\u6361\u7B15\u51CF\u526A\u5E34\u63F5\u6898\u68C0\u6E55\u8DBC\u583F\u63C0\u63C3\u691C\u6E1B\u7751\u7877\u88E5\u8A43\u950F\u5F3F\u6695\u7450\u7B67\u7B80\u7D78\u8C2B\u5F45\u6229\u622C\u78B1\u5109\u7FE6\u92C4\u64BF\u6A4F\u7BEF\u6AA2\u85C6\u8947\u8949\u8B07\u8E47\u77BC\u7906\u7C21\u7E6D\u8B2D\u93AB\u9B0B\u9C0E\u9E78\u703D\u8812\u9417\u9427\u9E7B\u7C5B\u8B7E\u897A\u9E7C",
    ji\u00E0n: "\u4EF6\u898B\u4F9F\u5EFA\u996F\u5251\u6D0A\u726E\u8350\u8D31\u4FF4\u5065\u5263\u682B\u6DA7\u73D4\u8230\u5271\u5FA4\u63F5\u88B8\u8C0F\u91F0\u91FC\u5BCB\u65D4\u6701\u6957\u6BFD\u8171\u81F6\u8DC8\u8DF5\u9592\u9593\u8CCE\u9274\u952E\u50E3\u50ED\u6997\u69DB\u6F38\u76E3\u528E\u528D\u58B9\u6F97\u7BAD\u7CCB\u8AD3\u8CE4\u8D9D\u8E10\u8E3A\u5292\u5294\u85A6\u8AEB\u92FB\u9375\u991E\u77B7\u77AF\u78F5\u7900\u87B9\u9373\u97AC\u64F6\u6ABB\u6FFA\u7E5D\u7033\u89B5\u89B8\u8B5B\u93E9\u807B\u8266\u8F5E\u9431\u9452\u9451\u946C\u9473",
    ji\u0101ng: "\u6C5F\u59DC\u8333\u7555\u8C47\u5C07\u8441\u757A\u646A\u7FDE\u50F5\u6F3F\u8780\u58C3\u7F30\u8591\u6A7F\u6BAD\u87BF\u9CC9\u7585\u7913\u7E6E\u97C1\u9C42",
    ji\u01CEng: "\u8BB2\u5956\u6868\u508B\u5842\u848B\u5968\u596C\u8523\u69F3\u734E\u8029\u8199\u8B1B\u985C",
    ji\u00E0ng: "\u531E\u5320\u5905\u5F1C\u6D1A\u7EDB\u5C07\u5F36\u5F37\u7D73\u757A\u9171\u52E5\u6EF0\u5D79\u647E\u6F3F\u5F4A\u729F\u7CE1\u91A4\u7CE8\u91AC\u6AE4\u8B3D",
    ji\u0101o: "\u827D\u4EA4\u90CA\u59E3\u5A07\u5CE7\u6D47\u832E\u832D\u9A84\u80F6\u654E\u55AC\u6912\u7126\u86DF\u8DE4\u50EC\u5610\u8660\u9C9B\u5B0C\u5D95\u5DA3\u618D\u61A2\u6F86\u81A0\u8549\u71CB\u81B2\u7901\u7A5A\u9BAB\u9D41\u9E6A\u7C25\u87ED\u8F47\u940E\u9A55\u9DE6\u9DEE",
    ji\u00E1o: "\u77EF",
    ji\u01CEo: "\u81EB\u4F7C\u6054\u6322\u72E1\u7EDE\u997A\u6341\u6648\u70C4\u7B05\u768E\u811A\u91E5\u94F0\u6405\u6E6B\u7B4A\u7D5E\u52E6\u656B\u6E6C\u714D\u8173\u8CCB\u50E5\u644E\u6477\u669E\u8E0B\u9278\u9903\u510C\u528B\u5FBA\u649F\u64B9\u6A14\u5FBC\u61BF\u657D\u657F\u71DE\u66D2\u74AC\u77EF\u76A6\u87DC\u7E73\u8B51\u5B42\u7E90\u652A\u705A\u9C4E\u9FA3",
    ji\u00E0o: "\u53EB\u544C\u5CE4\u630D\u8A06\u608E\u73D3\u7A8C\u7B05\u8F7F\u8F83\u654E\u658D\u8990\u7A96\u7B4A\u899A\u6ED8\u8F03\u5602\u5604\u5626\u65A0\u6F16\u9175\u564D\u5DA0\u6F50\u566D\u5B13\u5FBC\u7365\u7644\u85E0\u8DAD\u8F4E\u91AE\u7042\u89BA\u8B65\u76AD\u91C2",
    jie: "\u50F9",
    ji\u0113: "\u9636\u7596\u54DC\u7686\u8893\u63A5\u63B2\u75CE\u79F8\u83E8\u968E\u5588\u55BC\u55DF\u5826\u5A98\u5AC5\u6904\u6E5D\u7D50\u813B\u8857\u88D3\u696C\u716F\u744E\u7A2D\u9782\u64D1\u8754\u568C\u7664\u8B2F\u9D9B",
    ji\u00E9: "\u5369\u536A\u5B51\u5C10\u8BA6\u6262\u5227\u5226\u52AB\u5C8A\u6605\u6762\u523C\u52BC\u6770\u758C\u8871\u8BD8\u62EE\u6D01\u72E4\u8FFC\u5022\u6840\u6854\u685D\u6D2F\u7D12\u83AD\u8A10\u5048\u507C\u5551\u5A55\u5D28\u6377\u63B6\u88B7\u88BA\u5091\u5AAB\u5D51\u7D50\u7D5C\u86E3\u9889\u5D65\u6429\u6976\u6ED0\u776B\u7BC0\u8710\u8A70\u8D8C\u8DF2\u9263\u622A\u69A4\u78A3\u7AED\u84F5\u9C92\u5DB1\u6F54\u7FAF\u8AB1\u8E15\u957C\u978A\u9821\u5E6F\u64F3\u5DBB\u64EE\u790D\u937B\u9B9A\u5DC0\u881E\u8818\u883D",
    ji\u011B: "\u59D0\u6BD1\u5A8E\u89E7\u98F7\u6A9E",
    ji\u00E8: "\u4E2F\u4ECB\u5424\u598E\u5C95\u5E8E\u6212\u5C46\u5C4A\u65BA\u73A0\u754D\u754C\u75A5\u780E\u8878\u8BEB\u501F\u6088\u7D12\u86A7\u5536\u5FA3\u583A\u6950\u743E\u86F6\u89E7\u9AB1\u7297\u8024\u8AA1\u892F\u9B6A\u5DB0\u85C9\u9385\u9DA1",
    j\u012Bn: "\u5DFE\u4ECA\u4ED0\u65A4\u9485\u7AFB\u91D2\u91D1\u6D25\u77DC\u781B\u8355\u887F\u89D4\u57D0\u73D2\u77DD\u7D1F\u60CD\u740E\u83F3\u583B\u743B\u7B4B\u91FF\u74A1\u9E76\u9EC5\u895F",
    j\u01D0n: "\u4FAD\u537A\u5DF9\u7D27\u5807\u5A5C\u83EB\u50C5\u53AA\u8C28\u9526\u5AE4\u5ED1\u616C\u6F0C\u7DCA\u84F3\u9991\u69FF\u747E\u5118\u9326\u8B39\u9949",
    j\u00ECn: "\u4F12\u52A4\u5997\u8FD1\u8FDB\u6783\u52C1\u6D55\u8369\u6649\u664B\u6D78\u70EC\u7B12\u7D1F\u8D46\u552B\u7972\u9032\u7161\u81F8\u50C5\u5BD6\u6422\u6E8D\u7F19\u9773\u5890\u5AE4\u616C\u6997\u7468\u76E1\u99B8\u50F8\u51DA\u6B4F\u6BA3\u89D0\u5664\u5B10\u6FC5\u7E09\u8CEE\u568D\u58D7\u5B27\u6FDC\u85CE\u71FC\u74B6\u89B2\u8D10\u9F7D",
    j\u012Bng: "\u5755\u5759\u5DE0\u4EAC\u6CFE\u7ECF\u830E\u4EB0\u79D4\u834A\u8346\u6D87\u7C87\u5A5B\u60CA\u65CD\u65CC\u7304\u7D4C\u83C1\u6676\u7A09\u8148\u844F\u775B\u7CB3\u7D93\u5162\u7B90\u7CBE\u7DA1\u8059\u92DE\u6A78\u9CB8\u9BE8\u9D81\u9D84\u9E96\u9F31\u9A5A\u9EA0",
    j\u01D0ng: "\u4E95\u4E3C\u9631\u522D\u5753\u5B91\u6C6B\u6C6C\u80BC\u5244\u7A7D\u6B8C\u5106\u981A\u5E5C\u61AC\u64CF\u6F8B\u7484\u61BC\u66BB\u749F\u74A5\u9838\u87FC\u8B66",
    j\u00ECng: "\u52A4\u598C\u5F2A\u5F84\u8FF3\u4FD3\u52C1\u5A59\u6D44\u80EB\u501E\u51C8\u5F33\u5F91\u75C9\u7ADE\u8396\u9015\u5A67\u6871\u68B7\u6B91\u6DE8\u7ADF\u7AEB\u811B\u656C\u75D9\u7AE7\u9753\u50B9\u9756\u5883\u734D\u8AA9\u8E01\u9759\u975A\u61BC\u66D4\u955C\u975C\u701E\u9D5B\u93E1\u7AF6\u7AF8",
    ji\u014Dng: "\u5182\u518B\u5770\u6243\u57DB\u6244\u6D7B\u7D45\u9284\u99C9\u99EB\u860F\u8614",
    ji\u01D2ng: "\u518F\u56E7\u6CC2\u7085\u8FE5\u4FB0\u70AF\u9008\u6D7B\u70F1\u7D45\u715A\u7A98\u988E\u7D97\u81E6\u50D2\u715B\u71B2\u6F83\u8927\u71DB\u9848\u81E9",
    ji\u00F2ng: "",
    ji\u016B: "\u4E29\u52FC\u7EA0\u673B\u725E\u7A76\u7CFA\u9E20\u7CFE\u8D73\u9604\u841B\u557E\u63C2\u63EA\u5279\u63EB\u9CE9\u644E\u7A35\u6A1B\u9B0F\u9B2E",
    ji\u00FA: "",
    ji\u01D4: "\u4E5D\u4E46\u4E45\u4E63\u6C3F\u597A\u6C63\u6766\u7078\u7396\u7CFA\u820F\u97ED\u7D24\u9152\u9579\u97EE",
    ji\u00F9: "\u531B\u65E7\u81FC\u548E\u759A\u67E9\u67FE\u5003\u6344\u6855\u5313\u53A9\u6551\u5C31\u5EC4\u5ED0\u8205\u50E6\u5ECF\u6166\u6BA7\u820A\u9E6B\u5336\u9BE6\u9E94\u6B0D\u9F68\u9DF2",
    j\u016B: "\u51E5\u4F21\u6285\u8ECA\u530A\u5C45\u5CA8\u6CC3\u72D9\u82F4\u9A79\u4FE5\u6BE9\u75BD\u7717\u7820\u7F5D\u9671\u5A35\u5A6E\u5D0C\u63AC\u68AE\u6DBA\u63DF\u6910\u6BF1\u741A\u8152\u8D84\u8DD4\u8DD9\u9514\u88FE\u96CE\u824D\u871B\u8ACA\u8E18\u8EB9\u92E6\u99D2\u64DA\u92F8\u9B88\u9D21\u6A8B\u97A0\u97AB\u9D8B",
    j\u00FA: "\u5C40\u6CE6\u4FB7\u72CA\u6336\u6854\u5579\u5A45\u6DD7\u7117\u83CA\u90F9\u6908\u6E68\u7291\u8F02\u50EA\u7CB7\u84FB\u8DFC\u95B0\u8D9C\u92E6\u6A58\u99F6\u7E58\u9D59\u8E6B\u9D74\u5DC8\u861C\u9DAA\u9F30\u9F33\u9A67",
    j\u01D4: "\u5480\u5CA8\u5F06\u4E3E\u67B8\u77E9\u8392\u6319\u6907\u7B65\u6989\u6998\u849F\u9F83\u8065\u8209\u8E3D\u64E7\u6AF8\u9F5F\u6B05\u8977",
    j\u00F9: "\u5DE8\u4E6C\u5DEA\u8BB5\u59D6\u5CA0\u6007\u62D2\u6D30\u82E3\u90AD\u5177\u6010\u601A\u62E0\u661B\u6B6B\u70AC\u73C7\u79EC\u949C\u4FF1\u5028\u5036\u5267\u70E5\u7C94\u801F\u86B7\u8893\u57E7\u57FE\u60E7\u8A4E\u8DDD\u7123\u728B\u8DD9\u9245\u98D3\u84A9\u8661\u8C66\u952F\u5BE0\u6133\u7AAD\u805A\u99CF\u5287\u52EE\u5C66\u8E1E\u9B94\u58C9\u61C5\u64DA\u6FBD\u7AB6\u87B6\u907D\u92F8\u5C68\u98B6\u77BF\u8C97\u7C34\u8E86\u91B5\u5FC2\u61FC\u943B",
    ju\u0101n: "\u59E2\u52CC\u5A1F\u6350\u6D93\u6718\u688B\u7106\u74F9\u8127\u570F\u88D0\u9E43\u52EC\u92D1\u92D7\u954C\u9799\u93B8\u942B\u8832",
    ju\u01CEn: "\u545F\u5DFB\u5E23\u57CD\u6372\u83E4\u9529\u81C7\u9308\u95C2",
    ju\u00E0n: "\u5946\u52B5\u594D\u5DFB\u5E23\u5F2E\u5026\u52CC\u6081\u684A\u72F7\u7EE2\u96BD\u5A58\u60D3\u6DC3\u74F9\u7737\u9104\u570F\u68EC\u6926\u774A\u7D6D\u7F65\u8143\u96CB\u7760\u7D79\u98EC\u617B\u8528\u5DB2\u92D7\u990B\u7367\u7E33\u5DC2\u7F82\u8B82",
    ju\u0113: "\u5658\u6485\u64A7\u5C69\u5C6B",
    ju\u00E9: "\u4E85\u5B52\u5B53\u51B3\u5214\u6C12\u8BC0\u5437\u599C\u5F21\u6289\u6C7A\u82B5\u53D5\u6CEC\u73A8\u73A6\u6317\u73CF\u75A6\u7804\u7EDD\u8673\u57C6\u6354\u6B2E\u8697\u88A6\u5D2B\u5D1B\u6398\u658D\u6877\u8990\u89D6\u8A23\u8D7D\u8DB9\u5095\u53A5\u7133\u77DE\u7D55\u7D76\u899A\u8D89\u920C\u5282\u7474\u8C32\u99C3\u564A\u5DA1\u5DA5\u61B0\u6485\u71A6\u7234\u7357\u761A\u855D\u8568\u89EE\u9D02\u9D03\u5671\u58C6\u61A0\u6A5C\u6A5B\u71CB\u749A\u7235\u81C4\u9562\u6AED\u7E58\u87E8\u87E9\u7211\u8B4E\u8E77\u8E76\u9AC9\u5337\u77CD\u89BA\u940D\u941D\u9CDC\u704D\u721D\u89FC\u7A71\u5F4F\u6204\u652B\u7383\u9DE2\u77E1\u8C9C\u8EA9\u9481",
    ju\u011B: "\u8E76",
    ju\u00E8: "\u8AB3",
    j\u016Bn: "\u519B\u541B\u5747\u6C6E\u59F0\u8880\u8ECD\u94A7\u8399\u8690\u687E\u76B2\u921E\u7885\u7B60\u76B8\u76B9\u89A0\u9281\u929E\u9CAA\u9835\u9E87\u9F9C\u9355\u9BB6\u9E8F\u9E95",
    j\u01D4n: "",
    j\u00F9n: "\u5441\u4FCA\u90E1\u9656\u57C8\u5CFB\u6343\u6D5A\u96BD\u9982\u9A8F\u6659\u710C\u73FA\u68DE\u756F\u7AE3\u8470\u96CB\u5101\u7B98\u7B9F\u8720\u8CD0\u5BEF\u61CF\u9915\u71C7\u6FEC\u99FF\u9D58\u9D54\u9D55\u6508\u651F",
    k\u0101: "\u5580",
    k\u01CE: "\u4F67\u5494\u54AF\u57B0\u80E9\u88C3\u9272",
    k\u0101i: "\u5F00\u5952\u63E9\u950E\u958B\u9426",
    k\u01CEi: "\u51EF\u5240\u57B2\u607A\u95FF\u8C48\u94E0\u51F1\u5274\u5605\u6168\u8488\u584F\u5D66\u6137\u8F06\u669F\u9534\u9347\u93A7\u95D3\u98BD",
    k\u00E0i: "\u5FFE\u708C\u6B2F\u6B2C\u70D7\u52D3\u6112\u613E\u6FED\u938E",
    k\u0101n: "\u520A\u681E\u52D8\u9F9B\u582A\u5D41\u6221\u9F95",
    k\u01CEn: "\u51F5\u519A\u574E\u627B\u4F83\u780D\u83B0\u5058\u57F3\u60C2\u6B3F\u6B41\u69DB\u8F21\u6ABB\u9851\u7AF7\u8F57",
    k\u00E0n: "\u884E\u5D01\u5888\u961A\u77B0\u78E1\u95DE\u7AF7\u9B2B\u77D9",
    k\u0101ng: "\u5FFC\u95F6\u780A\u7C87\u5EB7\u958C\u5ADD\u5D7B\u6177\u6F2E\u69FA\u7A45\u7CE0\u8EBF\u93EE\u9C47",
    k\u00E1ng: "",
    k\u01CEng: "",
    k\u00E0ng: "\u4EA2\u4F09\u531F\u909F\u56E5\u6297\u72BA\u95F6\u7095\u94AA\u9227\u958C",
    k\u0101o: "\u5C3B\u5D6A\u9ADB",
    k\u01CEo: "\u4E02\u6537\u8003\u62F7\u6D18\u6832\u70E4\u85A7",
    k\u00E0o: "\u6D18\u94D0\u7292\u92AC\u9C93\u9760\u9BB3\u9BCC",
    k\u0113: "\u533C\u67EF\u7241\u7271\u73C2\u79D1\u8F72\u75B4\u7822\u8DB7\u94B6\u86B5\u94EA\u5D59\u68F5\u75FE\u842A\u8EFB\u988F\u55D1\u6415\u7290\u7A1E\u7AA0\u9233\u69BC\u8596\u927F\u9897\u6A16\u778C\u78D5\u874C\u9826\u7ABC\u9198\u9846\u9AC1\u791A",
    k\u00E9: "\u6BBB\u63E2\u6BBC\u7FD7",
    k\u011B: "\u5CA2\u70A3\u6E07\u5D51\u6564\u6E34\u8EFB\u959C\u78C6\u5DB1",
    k\u00E8: "\u514B\u523B\u524B\u52C0\u52CA\u5BA2\u5CC7\u606A\u5A14\u5C05\u6088\u8894\u8BFE\u5801\u6C2A\u9A92\u6118\u785E\u7F02\u8849\u55D1\u6119\u6B41\u6E98\u951E\u78A6\u7DD9\u8250\u8AB2\u6FED\u9301\u790A\u9A0D",
    k\u0113i: "\u524B\u5C05",
    k\u0113n: "",
    k\u011Bn: "\u808E\u80AF\u80BB\u57A6\u6073\u5543\u9F82\u8C64\u8C87\u9F88\u58BE\u9339\u61C7",
    k\u00E8n: "\u73E2\u63AF\u784D\u88C9\u8903",
    k\u0113ng: "\u52A5\u962C\u5748\u5751\u5994\u6333\u7841\u6BB8\u727C\u63C1\u785C\u94FF\u787B\u647C\u8A99\u92B5\u935E\u93D7",
    k\u011Bng: "\u787B",
    k\u014Dng: "\u5025\u57EA\u5D06\u60BE\u6DB3\u690C\u787F\u7B9C\u8EBB\u9313\u9D7C",
    k\u01D2ng: "\u5B54\u5025\u6050\u60BE",
    k\u00F2ng: "\u77FC\u63A7\u7FAB\u979A",
    k\u014Du: "\u62A0\u82A4\u770D\u7717\u527E\u5F44\u6473\u7798",
    k\u01D2u: "\u53E3\u52B6\u7AD8",
    k\u00F2u: "\u53E9\u6263\u4F5D\u6010\u6542\u51A6\u5BBC\u5BC7\u91E6\u7A9B\u7B58\u6EF1\u8532\u853B\u7789\u7C06\u9DC7",
    k\u016B: "\u625D\u5233\u77FB\u90C0\u670F\u67AF\u80D0\u54ED\u684D\u79D9\u7A8B\u5800\u5710\u8DCD\u7A9F\u9AB7\u9BAC",
    k\u00FA: "",
    k\u01D4: "\u72DC\u82E6\u695B",
    k\u00F9: "\u5E93\u4FC8\u7ED4\u5EAB\u6341\u79D9\u7105\u88B4\u55BE\u785E\u7D5D\u88E4\u7614\u9177\u5EE4\u8932\u56B3",
    ku\u0101: "\u54B5\u59F1\u6057\u6647\u7D53\u823F\u8A87",
    ku\u01CE: "\u4F89\u57AE\u6947\u9299",
    ku\u00E0: "\u80EF\u8DB6\u8A87\u8DE8\u9ABB",
    ku\u01CEi: "\u84AF\u64D3",
    ku\u00E0i: "\u5DDC\u51F7\u5726\u5757\u5FEB\u4FA9\u90D0\u54D9\u6D4D\u72EF\u810D\u6B33\u584A\u8489\u6703\u7B77\u99C3\u9C99\u5108\u58A4\u9136\u5672\u5EE5\u6FAE\u736A\u74AF\u81BE\u65DD\u7CE9\u9C60",
    ku\u0101n: "\u5BBD\u5BDB\u5BEC\u81D7\u9ACB\u9467\u9AD6",
    ku\u01CEn: "\u68A1\u6B35\u6B3E\u6B40\u7ABD\u7ABE",
    ku\u00E0n: "",
    ku\u0101ng: "\u5321\u8FCB\u52BB\u8BD3\u90BC\u5329\u54D0\u6047\u6D2D\u7844\u7B50\u7B7A\u8A86\u8EED",
    ku\u00E1ng: "\u5FF9\u6282\u72C5\u72C2\u8BF3\u8ED6\u8EE0\u8A91\u9D5F",
    ku\u01CEng: "\u593C\u5123\u61ED",
    ku\u00E0ng: "\u535D\u4E31\u909D\u5739\u7EA9\u51B5\u65F7\u5CB2\u6CC1\u77FF\u663F\u8D36\u6846\u7716\u783F\u7736\u7D4B\u7D56\u8CBA\u8EE6\u9271\u92DB\u913A\u58D9\u9ECB\u61EC\u66E0\u720C\u77CC\u7926\u7A6C\u7E8A\u945B",
    ku\u012B: "\u4E8F\u5232\u5CBF\u609D\u76D4\u7AA5\u8067\u7ABA\u8667\u985D\u95DA\u5DCB",
    ku\u00ED: "\u594E\u6646\u9035\u9108\u9697\u9997\u55B9\u63C6\u8475\u9A99\u6223\u668C\u694F\u6951\u9B41\u777D\u8770\u982F\u6AC6\u85C8\u9368\u9377\u9A24\u5914\u8637\u5DD9\u8641\u72AA\u8EA8",
    ku\u01D0: "\u5C2F\u7143\u8DEC\u980D\u78C8\u8E5E",
    ku\u00EC: "\u5C2F\u80FF\u532E\u559F\u5ABF\u6127\u6126\u8489\u9988\u5331\u7786\u5633\u5B07\u6192\u6F70\u7BD1\u806D\u8069\u8562\u6BA8\u81AD\u8B09\u77B6\u993D\u7C23\u8075\u7C44\u994B",
    k\u016Bn: "\u5764\u6606\u5803\u5812\u5A6B\u5D11\u5D10\u665C\u7311\u83CE\u88C8\u711C\u7428\u9AE0\u88E9\u8C87\u951F\u9AE1\u9E4D\u6F49\u872B\u890C\u9AE8\u71B4\u747B\u918C\u9315\u9CB2\u9A09\u9BE4\u9D7E\u9DA4",
    k\u01D4n: "\u6083\u6346\u9603\u58F8\u68B1\u7975\u7871\u7A07\u88CD\u58FC\u7A1B\u7D91\u95AB\u95B8",
    k\u00F9n: "\u56F0\u6D83\u774F",
    ku\u00F2: "\u6269\u62E1\u6304\u9002\u79EE\u79F3\u94E6\u7B48\u843F\u8440\u86DE\u9614\u5ED3\u6F37\u929B\u564B\u92BD\u9822\u9AFA\u64F4\u6FF6\u95CA\u979F\u97D5\u9729\u97B9\u9B20",
    la: "\u97A1",
    l\u0101: "\u5783\u67C6\u782C\u83C8\u641A\u78D6\u908B",
    l\u00E1: "\u65EF\u524C\u782C\u63E6\u78D6\u56B9",
    l\u01CE: "\u5587\u85DE",
    l\u00E0: "\u524C\u7FCB\u63E6\u6E82\u63E7\u694B\u760C\u8721\u874B\u8FA2\u8FA3\u8772\u81C8\u64F8\u650B\u7209\u81D8\u9B0E\u6AF4\u74CE\u9574\u9BFB\u881F\u945E",
    l\u00E1i: "\u6765\u4F86\u4FEB\u5008\u5D03\u5F95\u6D9E\u83B1\u90F2\u5A61\u5D0D\u5EB2\u5FA0\u68BE\u6DF6\u730D\u840A\u9028\u68F6\u741C\u7B59\u94FC\u7B82\u9338\u9A0B\u9BE0\u9D86\u9EB3",
    l\u01CEi: "\u8970",
    l\u00E0i: "\u75A0\u5A15\u5F95\u553B\u5A61\u5FA0\u8D49\u7750\u775E\u8D56\u8ABA\u8CDA\u6FD1\u8CF4\u983C\u7658\u9842\u765E\u9D63\u650B\u7028\u702C\u7C41\u85FE\u6AF4\u7669\u7C5F",
    l\u00E1n: "\u5170\u5C9A\u62E6\u680F\u5549\u5A6A\u60CF\u5D50\u847B\u9611\u6695\u84DD\u8C30\u53B1\u6F9C\u8934\u5116\u6593\u7BEE\u61E2\u71E3\u71F7\u85CD\u8955\u9567\u95CC\u74BC\u5E71\u8964\u8B4B\u6514\u703E\u7046\u7C43\u7E7F\u862B\u862D\u6595\u6B04\u8974\u56D2\u7061\u7C63\u6B17\u8B95\u8E9D\u897D\u946D\u97CA",
    l\u01CEn: "\u89C8\u6D68\u63FD\u7F06\u6984\u6F24\u7F71\u9182\u58C8\u61D2\u89A7\u64E5\u5B3E\u61F6\u5B44\u89BD\u5B4F\u652C\u7060\u6B16\u7226\u9872\u7E9C",
    l\u00E0n: "\u5754\u70C2\u6EE5\u71D7\u5682\u58CF\u6FEB\u7201\u721B\u74D3\u7224\u7226\u7CF7\u9484",
    l\u0101ng: "\u5577",
    l\u00E1ng: "\u52C6\u90DE\u54F4\u6B34\u72FC\u5ACF\u5ECA\u658F\u6879\u7405\u84C8\u6994\u746F\u7860\u7A02\u9512\u7B64\u8246\u870B\u90D2\u6A03\u8782\u8EB4\u92C3\u93AF\u99FA",
    l\u01CEng: "\u5D00\u6717\u6716\u70FA\u5871\u84E2\u8A8F\u6724",
    l\u00E0ng: "\u57CC\u6D6A\u83A8\u9606\u7B64\u8497\u8A8F\u95AC",
    l\u0101o: "\u635E\u7CA9\u6488",
    l\u00E1o: "\u52B4\u52B3\u7262\u7A82\u54F0\u5D02\u6D76\u52DE\u75E8\u94F9\u50D7\u562E\u5D97\u61A6\u61A5\u6725\u7646\u78F1\u7C29\u87E7\u91AA\u9412\u985F\u9ADD",
    l\u01CEo: "\u8002\u8001\u4F6C\u54BE\u6045\u72EB\u8356\u6833\u73EF\u7853\u94D1\u86EF\u92A0\u9BB1\u8F51",
    l\u00E0o: "\u6D9D\u7D61\u55E0\u8022\u916A\u5AEA\u562E\u61A6\u6A02\u6F87\u8EBC\u6A6F\u802E\u8EC2",
    le: "\u9979",
    l\u0113: "\u561E",
    l\u00E8: "\u4EC2\u961E\u53FB\u5FC7\u6250\u6C3B\u827B\u725E\u738F\u6CD0\u7AFB\u7833\u697D\u97F7\u990E\u6A02\u7C15\u9CD3\u9C33\u9C73",
    lei: "\u561E",
    l\u0113i: "",
    l\u00E9i: "\u7D6B\u96F7\u5AD8\u7F27\u8502\u6A0F\u757E\u78E5\u6A91\u7E32\u6502\u790C\u956D\u6AD1\u74C3\u7FB8\u7927\u7E8D\u7F4D\u8632\u9433\u8F60\u513D\u9458\u9741\u8646\u9C69\u6B19\u7E9D\u9F3A",
    l\u011Bi: "\u53BD\u8012\u8BD4\u5792\u6D21\u5841\u7D6B\u50AB\u8A84\u7623\u6A0F\u78CA\u854C\u78E5\u857E\u5121\u58D8\u7657\u790C\u85DF\u6AD1\u6AD0\u77CB\u7928\u7927\u7045\u881D\u863D\u8B84\u58E8\u9478\u9E13",
    l\u00E8i: "\u6CEA\u6D21\u7C7B\u6D99\u6DDA\u7971\u7D6B\u9179\u9287\u981B\u982A\u9311\u6502\u98A3\u985E\u7927\u7E87\u8631\u79B7",
    l\u0113ng: "\u7A1C",
    l\u00E9ng: "\u5525\u5D1A\u5844\u695E\u7890\u7A1C\u8590",
    l\u011Bng: "\u51B7",
    l\u00E8ng: "\u5030\u580E\u6123\u7756\u8E1C",
    li: "",
    l\u012B: "",
    l\u00ED: "\u5215\u675D\u5398\u67C2\u5253\u72F8\u79BB\u8372\u9A8A\u60A1\u68A8\u68B8\u7281\u740D\u83DE\u55B1\u68C3\u7282\u9E42\u527A\u6F13\u775D\u7B63\u7F21\u8243\u84E0\u5AE0\u5B77\u6A06\u7483\u76E0\u7AF0\u8C8D\u729B\u7CCE\u853E\u8935\u92EB\u9CA1\u9ECE\u7BF1\u7E2D\u7F79\u9305\u87CD\u8B27\u91A8\u569F\u85DC\u908C\u91D0\u96E2\u9BCF\u6584\u74C8\u87F8\u93EB\u9BEC\u9D79\u9E97\u9EE7\u56C4\u7055\u863A\u882B\u5B4B\u5EF2\u5299\u9457\u7A72\u7C6C\u7E9A\u9A6A\u9C7A\u9E1D",
    l\u01D0: "\u793C\u674E\u91CC\u4FDA\u5CDB\u5CE2\u5A0C\u5CF2\u609D\u6D6C\u9026\u7406\u88E1\u9502\u7CB4\u88CF\u8C4A\u92F0\u9CA4\u6FA7\u79AE\u9BC9\u91B4\u8821\u9CE2\u9090\u9C67\u6B1A\u7E9A\u9C71",
    l\u00EC: "\u529B\u5386\u5389\u5C74\u6250\u7ACB\u540F\u625A\u6738\u5229\u52B1\u53D3\u5456\u575C\u675D\u6CA5\u82C8\u4F8B\u53D5\u5CA6\u623E\u67A5\u6CB4\u6CB5\u75A0\u82D9\u8FE3\u4FD0\u4FEA\u6803\u680E\u75AC\u7805\u8318\u8354\u8D72\u8F79\u90E6\u550E\u5A33\u60A7\u681B\u6817\u6D70\u6D96\u7301\u73D5\u782C\u783A\u783E\u79DD\u8389\u8385\u9B32\u5533\u5A6F\u60B7\u7B20\u7C92\u7C9D\u8137\u86B8\u86CE\u5088\u51D3\u53A4\u68D9\u75E2\u86E0\u8A48\u8DDE\u96F3\u53AF\u585B\u6144\u642E\u6EA7\u7759\u849E\u849A\u870A\u925D\u9CE8\u53B2\u66A6\u6B74\u746E\u7D9F\u8727\u9290\u8777\u9549\u52F5\u66C6\u6B77\u7BE5\u96B7\u9D17\u5DC1\u6AAA\u6FFF\u7658\u78FF\u96B8\u9B01\u512E\u64FD\u66DE\u6AD4\u7204\u72A1\u79B2\u8807\u9398\u56A6\u58E2\u650A\u6ADF\u701D\u74C5\u792A\u85F6\u9E97\u6AEA\u720F\u74D1\u76AA\u76ED\u792B\u7CF2\u8823\u5137\u7667\u7930\u7E85\u9148\u9DC5\u9E9C\u56C7\u5B4B\u6526\u89FB\u8E92\u8F62\u6B10\u8B88\u8F63\u652D\u74E5\u9742\u974B",
    li\u01CE: "\u4FE9\u5006",
    li\u00E1n: "\u5941\u8FDE\u5E18\u601C\u6D9F\u83B2\u9023\u68BF\u8054\u88E2\u4EB7\u55F9\u5EC9\u6169\u6E93\u6F23\u84EE\u5332\u5969\u69CF\u69E4\u7191\u899D\u5286\u5333\u5652\u5AFE\u6190\u78CF\u8068\u806B\u8933\u9CA2\u6FC2\u6FD3\u7E3A\u7FF4\u806E\u8595\u878A\u6AE3\u71EB\u806F\u81C1\u8B30\u8E65\u6AB6\u938C\u9570\u702E\u7C3E\u880A\u9B11\u942E\u9C31\u7C62\u7C68",
    li\u01CEn: "\u83B6\u655B\u68BF\u740F\u8138\u88E3\u6169\u6459\u6E93\u69E4\u7489\u8539\u5B1A\u859F\u6582\u6AE3\u6B5B\u81C9\u913B\u895D\u7FB7\u861E\u861D\u91B6",
    li\u00E0n: "\u7EC3\u70BC\u604B\u6B93\u50C6\u581C\u5AA1\u6E45\u8430\u94FE\u6459\u695D\u7149\u7453\u6F4B\u7A34\u7DF4\u6FB0\u932C\u6BAE\u934A\u93C8\u7032\u9C0A\u6200\u7E9E",
    li\u0101ng: "",
    li\u00E1ng: "\u826F\u4FCD\u83A8\u6881\u6DBC\u690B\u8F8C\u7CB1\u7CAE\u589A\u8E09\u6A11\u8F2C\u99FA\u7CE7",
    li\u01CEng: "\u4E21\u4E24\u5169\u4FE9\u5006\u5521\u5562\u639A\u813C\u88F2\u7DC9\u873D\u9B49\u9B4E",
    li\u00E0ng: "\u4EAE\u501E\u54F4\u60A2\u8C05\u6DBC\u8F86\u55A8\u667E\u6E78\u9753\u8F0C\u8E09\u8AD2\u8F1B\u9344",
    li\u0101o: "\u8E7D",
    li\u00E1o: "\u8FBD\u7597\u7A8C\u804A\u5C1E\u50DA\u5BE5\u5D7A\u6180\u644E\u6F3B\u818B\u5639\u5AFD\u5BEE\u5D9A\u5D9B\u61AD\u6579\u6A1B\u7360\u7F2D\u907C\u66B8\u6A51\u7499\u81AB\u7642\u7AC2\u9E69\u5C6A\u5EEB\u7C1D\u7E5A\u85D4\u87DF\u87E7\u8C42\u8CFF\u8E58\u720E\u7212\u98C2\u9ACE\u98C9\u9DEF",
    li\u01CEo: "\u948C\u91D5\u911D\u7F2A\u84FC\u61AD\u7E46\u66E2\u720E\u957D\u7212",
    li\u00E0o: "\u5C25\u5C26\u948C\u7093\u6599\u91D5\u5ED6\u6482\u7AB7\u9563\u9410",
    lie: "",
    li\u0113: "",
    li\u00E9: "",
    li\u011B: "\u5FDA\u6BDF\u6318",
    li\u00E8: "\u5217\u52A3\u52A6\u51BD\u52BD\u59F4\u6312\u6D0C\u8322\u8FFE\u54F7\u57D3\u57D2\u6835\u6D56\u70C8\u70EE\u6369\u730E\u731F\u811F\u68D9\u86DA\u716D\u8057\u8D94\u7D9F\u5DE4\u7366\u98B2\u71E4\u5120\u5DC1\u9BA4\u9D37\u64F8\u7204\u7375\u7209\u72A3\u8E90\u9B1B\u9B23\u9C72",
    l\u012Bn: "\u62CE",
    l\u00EDn: "\u53B8\u90BB\u963E\u6797\u4E34\u51A7\u5549\u5D0A\u60CF\u667D\u7433\u7CA6\u7884\u7B96\u7CBC\u7D9D\u9130\u96A3\u5D99\u6F7E\u735C\u9074\u65B4\u66BD\u71D0\u7498\u8F9A\u9716\u7584\u77B5\u78F7\u81E8\u7E57\u7FF7\u9E90\u8F54\u58E3\u7036\u93FB\u9CDE\u9A4E\u9C57\u9E9F",
    l\u01D0n: "\u83FB\u4E83\u50EF\u7B96\u51DC\u51DB\u649B\u5EE9\u5EEA\u61CD\u61D4\u6F9F\u6A81\u6AA9\u765D\u765B",
    l\u00ECn: "\u541D\u6061\u608B\u8D41\u711B\u4E83\u75F3\u8CC3\u853A\u735C\u6A49\u7510\u81A6\u95B5\u7584\u85FA\u8E78\u8E8F\u8E99\u8EAA\u8F65",
    l\u00EDng: "\u4F36\u5222\u7075\u5464\u56F9\u577D\u590C\u59C8\u5CBA\u5F7E\u6CE0\u72D1\u82D3\u6624\u670E\u67C3\u73B2\u74F4\u3007\u51CC\u768A\u7831\u79E2\u7ADB\u7F90\u888A\u94C3\u9675\u9E30\u5A48\u5D1A\u6395\u68C2\u6DE9\u740C\u7B2D\u7D37\u7EEB\u7F9A\u7FCE\u8046\u8232\u83F1\u86C9\u8851\u797E\u8A45\u8DC9\u8EE8\u7A1C\u84E4\u88EC\u9234\u959D\u96F6\u9F84\u7DBE\u8506\u8F18\u970A\u99D6\u6FAA\u8576\u9302\u9717\u9B7F\u9CAE\u9D12\u9E77\u71EF\u971D\u971B\u9F62\u9143\u9BEA\u5B41\u9F61\u6AFA\u91BD\u9748\u6B1E\u7227\u9EA2\u9F97",
    l\u01D0ng: "\u5CBA\u888A\u9886\u9818\u5DBA",
    l\u00ECng: "\u53E6\u70A9\u8626",
    li\u016B: "\u7198\u6F91\u8E53",
    li\u00FA: "\u5218\u7544\u65BF\u6D4F\u6D41\u7559\u65C8\u7409\u7571\u786B\u88D7\u5AB9\u5D67\u65D2\u84A5\u84C5\u9A9D\u644E\u69B4\u6F3B\u7460\u98D7\u5289\u746C\u7624\u78C2\u954F\u99E0\u9E60\u6A4A\u74A2\u7581\u9560\u7645\u87C9\u99F5\u56A0\u61F0\u700F\u85F0\u938F\u93A6\u9E8D\u93D0\u98C0\u9402\u9A2E\u98C5\u9C21\u9DB9\u9A51",
    li\u01D4: "\u67F3\u6801\u685E\u73CB\u687A\u7EFA\u950D\u7DB9\u71AE\u7F76\u92F6\u6A6E\u5B3C\u61F0\u7F80\u85F0",
    li\u00F9: "\u7A8C\u7FCF\u586F\u5EC7\u905B\u6F91\u78C2\u78DF\u9E68\u93A6\u9724\u993E\u96E1\u98C2\u9B38\u9DDA",
    lo: "\u54AF",
    l\u00F3ng: "\u9F99\u5C78\u5C28\u5499\u6CF7\u830F\u663D\u680A\u73D1\u80E7\u772C\u783B\u7ADC\u804B\u9686\u6E70\u6EDD\u5D90\u69DE\u6F0B\u7643\u7ABF\u7BED\u9F8D\u5131\u8622\u93E7\u9733\u56A8\u5DC3\u5DC4\u7027\u66E8\u6727\u6AF3\u7216\u74CF\u8971\u77D3\u7932\u7931\u882C\u882A\u9F93\u9F92\u7C60\u807E\u8C45\u8E98\u9747\u9468\u9A61\u9E17",
    l\u01D2ng: "\u9647\u5785\u5784\u62E2\u7BE2\u7BED\u9F8D\u96B4\u5131\u5FBF\u58DF\u58E0\u650F\u7AC9\u9F93\u7C60\u8E98",
    l\u00F2ng: "\u54E2\u6887\u7866\u5131\u5FBF\u8D1A",
    lou: "\u55BD\u560D\u779C",
    l\u014Du: "\u645F",
    l\u00F3u: "\u5245\u5A04\u507B\u5A41\u55BD\u6E87\u848C\u50C2\u697C\u560D\u5BE0\u5ED4\u617A\u6F0A\u851E\u9071\u6A13\u71A1\u8027\u877C\u779C\u802C\u825B\u87BB\u8B31\u8C97\u8EC1\u9AC5\u97BB\u9ACF\u9DDC",
    l\u01D2u: "\u5D5D\u587F\u5D81\u645F\u750A\u7BD3\u7C0D",
    l\u00F2u: "\u964B\u5C5A\u6F0F\u7618\u9542\u763B\u763A\u93E4",
    l\u016B: "\u565C\u64B8\u8B22\u5695\u64FC",
    l\u00FA: "\u5362\u5E90\u82A6\u5786\u67A6\u6CF8\u7089\u680C\u80EA\u8F73\u822E\u9E2C\u7388\u823B\u9885\u9229\u9C88\u99BF\u9B72\u76E7\u56A7\u58DA\u5EEC\u650E\u7018\u7379\u74B7\u8606\u66E5\u6AE8\u7210\u74D0\u81DA\u77D1\u7C5A\u7E91\u7F4F\u826B\u8826\u8F64\u946A\u9871\u9AD7\u9C78\u9E15\u9EF8",
    l\u01D4: "\u5364\u864F\u63B3\u9E75\u7875\u9C81\u865C\u5877\u6EF7\u84FE\u6A10\u6F9B\u9B6F\u64C4\u6A79\u6C07\u78E0\u7A5E\u9565\u7002\u6AD3\u6C0C\u8263\u93C0\u826A\u942A\u9465",
    l\u00F9: "\u5725\u752A\u9646\u4F93\u5774\u5F54\u5F55\u5CCD\u52CE\u8D42\u8F82\u9678\u5A3D\u6DD5\u6DE5\u6E0C\u7849\u83C9\u902F\u9E7F\u6902\u742D\u797F\u7984\u50C7\u5279\u52E0\u76DD\u7769\u7A11\u8CC2\u8DEF\u8F05\u5876\u5ED8\u645D\u6F09\u7B93\u7CB6\u7DD1\u84FC\u850D\u622E\u6A1A\u719D\u8194\u8DA2\u8E1B\u8F98\u9181\u6F5E\u7A4B\u8557\u9304\u9334\u9332\u7490\u7C0F\u87B0\u9D3C\u7C36\u8E57\u8F46\u9A04\u9E6D\u7C2C\u7C35\u93D5\u9BE5\u9D66\u9D71\u9E93\u93F4\u9A3C\u7C59\u89FB\u8642\u9DFA",
    lu\u00E1n: "\u5A08\u5B6A\u5CE6\u631B\u683E\u9E3E\u8114\u6EE6\u92AE\u9D49\u571D\u5971\u5B4C\u5B7F\u5DD2\u6523\u66EB\u6B12\u7053\u7F89\u81E1\u81E0\u571E\u7064\u864A\u947E\u7674\u7675\u9E1E",
    lu\u01CEn: "\u5375\u89B6",
    lu\u00E0n: "\u4E71\u91E0\u4E7F\u4E82\u858D\u7053",
    l\u016Bn: "\u6384",
    l\u00FAn: "\u4ED1\u4F26\u56F5\u6CA6\u7EB6\u82B2\u4F96\u8F6E\u502B\u966F\u5707\u5A68\u5D18\u5D19\u6384\u6DEA\u83D5\u68C6\u8140\u7896\u7DB8\u8023\u8726\u8AD6\u8E1A\u8F2A\u78EE\u9300\u9BE9",
    l\u01D4n: "\u57E8\u60C0\u7896\u7A10\u8023",
    l\u00F9n: "\u60C0\u6EA3\u7896\u8AD6",
    luo: "\u56C9\u56D6",
    lu\u014D: "\u634B\u9831\u56C9\u56D6",
    lu\u00F3: "\u5BFD\u7F57\u7321\u8136\u841D\u903B\u6924\u8161\u9523\u7BA9\u9AA1\u9559\u87BA\u650E\u7F85\u89B6\u93CD\u5138\u89BC\u9A3E\u56C9\u651E\u7380\u863F\u908F\u6B0F\u9A58\u9E01\u7C6E\u947C\u9960\u56D6",
    lu\u01D2: "\u5246\u502E\u7822\u6370\u84CF\u88F8\u8EB6\u7630\u8803\u81DD\u66EA\u652D\u7673",
    lu\u00F2: "\u6CFA\u54AF\u5CC8\u6D1B\u8366\u9A86\u6D1C\u73DE\u6370\u6E03\u784C\u7866\u7B3F\u7D61\u86D2\u8DDE\u8A7B\u645E\u6F2F\u7296\u96D2\u99F1\u78F1\u9BA5\u9D45\u64FD\u6FFC\u650A\u76AA\u8E92\u7E99",
    l\u01D8: "\u9A74\u95FE\u6988\u95AD\u6C00\u81A2\u779C\u6ADA\u85D8\u9A62",
    l\u01DA: "\u5415\u5442\u4FA3\u90D8\u4FB6\u6314\u635B\u634B\u65C5\u68A0\u7112\u7963\u507B\u7A06\u94DD\u5C61\u7D7D\u7F15\u50C2\u5C62\u617A\u8182\u891B\u92C1\u5C65\u8190\u8938\u5122\u7E37\u7A6D\u9DDC",
    l\u01DC: "\u578F\u5F8B\u54F7\u8651\u5D42\u6C2F\u844E\u6EE4\u7DA0\u7DD1\u616E\u7BBB\u819F\u52F4\u7E42\u6FFE\u6AD6\u7208\u535B\u9462",
    l\u00FC\u00E8: "\u5BFD\u63A0\u7567\u7565\u950A\u7A24\u5719\u92E2\u92DD",
    ma: "\u55CE\u561B\u9EBD",
    m\u0101: "\u4E87\u5988\u5B56\u5E85\u5ABD\u5AF2\u69AA\u879E",
    m\u00E1: "\u83FB\u9EBB\u55CE\u75F2\u75F3\u561B\u5AF2\u8534\u7298\u87C7",
    m\u01CE: "\u9A6C\u72B8\u6769\u739B\u7801\u99AC\u55CE\u6EA4\u7341\u9064\u746A\u78BC\u879E\u93B7\u9C22\u9DCC",
    m\u00E0: "\u6769\u7943\u9581\u9A82\u508C\u7770\u561C\u69AA\u79A1\u7F75\u879E\u99E1\u9B15",
    m\u00E1i: "\u85B6\u973E",
    m\u01CEi: "\u4E70\u836C\u8CB7\u562A\u8552\u9DF6",
    m\u00E0i: "\u52A2\u8FC8\u4F45\u58F2\u9EA6\u5356\u551B\u8108\u9EA5\u8847\u52F1\u8CE3\u9081\u9721\u9722",
    m\u0101n: "\u989F\u9862",
    m\u00E1n: "\u59CF\u6097\u86EE\u7D7B\u8C29\u6172\u6471\u9992\u6A20\u779E\u9794\u8B3E\u9945\u9CD7\u9B18\u9B17\u9C3B\u77D5\u883B",
    m\u01CEn: "\u5A28\u5C58\u6E80\u6EE1\u6EFF\u87A8\u8954\u87CE\u93CB\u77D5",
    m\u00E0n: "\u66FC\u50C8\u9124\u5881\u5ADA\u5E54\u6162\u6471\u6F2B\u734C\u7F26\u8504\u69FE\u6FAB\u71B3\u6FB7\u9558\u7E35\u93DD\u8630",
    m\u0101ng: "\u7264",
    m\u00E1ng: "\u9099\u5402\u5FD9\u6C52\u8292\u5C28\u6757\u6767\u76F2\u76F3\u5396\u607E\u7B00\u832B\u54E4\u5A0F\u5EAC\u6D5D\u72F5\u671A\u727B\u786D\u91EF\u94D3\u75DD\u86D6\u92E9\u99F9\u8609",
    m\u01CEng: "\u83BD\u83BE\u7865\u833B\u58FE\u6F2D\u87D2\u880E",
    m\u00E0ng: "",
    m\u0101o: "\u8C93",
    m\u00E1o: "\u6BDB\u77DB\u82BC\u6786\u7266\u8305\u8306\u65C4\u7F5E\u6E35\u8EDE\u9155\u5825\u5D4D\u6959\u951A\u7DE2\u927E\u9AE6\u6C02\u729B\u8765\u8C93\u9AF3\u9328\u87CA\u9D9C",
    m\u01CEo: "\u5187\u536F\u5918\u4E6E\u5CC1\u623C\u6CD6\u6634\u94C6\u7B37\u84E9\u925A",
    m\u00E0o: "\u5183\u7683\u82BC\u5190\u8302\u67D5\u770A\u79CF\u8D38\u65C4\u8004\u88A4\u8992\u5AA2\u5E3D\u843A\u8CBF\u911A\u6117\u6693\u6BF7\u7441\u7780\u8C8C\u912E\u8750\u61CB",
    me: "\u5E85\u9EBD\u9EBC\u569C",
    m\u0113: "\u5692",
    m\u00E8: "\u6FF9\u56B0",
    m\u00E9i: "\u5746\u6C92\u679A\u73AB\u82FA\u6802\u7709\u8104\u8393\u6885\u73FB\u8122\u90FF\u5833\u5A92\u5D4B\u6E44\u6E48\u7338\u7742\u847F\u6963\u6973\u7164\u7442\u7996\u815C\u587A\u69D1\u9176\u9545\u9E5B\u92C2\u9709\u7A48\u5FBE\u9387\u6517\u9DA5\u9EF4",
    m\u011Bi: "\u6BCE\u6BCF\u51C2\u7F8E\u6334\u6D7C\u7F99\u5A84\u5D44\u6E3C\u5ABA\u9541\u5B0D\u71D8\u8EBE\u9382\u9EE3",
    m\u00E8i: "\u59B9\u62BA\u6CAC\u65C0\u6627\u7959\u8882\u771B\u5A9A\u5BD0\u6B99\u75D7\u8DCA\u9B3D\u715D\u7778\u97CE\u9B45\u7BC3\u875E\u569C\u6AD7",
    m\u0113n: "\u60B6\u691A",
    m\u00E9n: "\u95E8\u4EEC\u626A\u6C76\u600B\u73A7\u9494\u9580\u5011\u9585\u636B\u83DB\u748A\u779E\u7A48\u9346\u4EB9\u6596\u864B",
    m\u00E8n: "\u6097\u60DB\u7116\u60B6\u66AA\u71DC\u9794\u61D1\u61E3",
    m\u0113ng: "\u63B9\u64DD\u77C7",
    m\u00E9ng: "\u5C28\u753F\u867B\u5EAC\u8394\u840C\u6E95\u76DF\u96FA\u750D\u9133\u511A\u6A57\u77A2\u8544\u8771\u9138\u92C2\u9AF3\u5E6A\u61DC\u61DE\u6FDB\u7374\u66DA\u6726\u6AAC\u6C0B\u791E\u9BCD\u9E72\u8268\u77D2\u9740\u973F\u995B\u986D\u9E0F",
    m\u011Bng: "\u9EFE\u51A1\u52D0\u731B\u9EFD\u9530\u824B\u8722\u77A2\u61DC\u61DE\u87D2\u9333\u61F5\u8813\u9BED\u77D2\u9F06",
    m\u00E8ng: "\u5B5F\u68A6\u5922\u5923\u61DC\u9725\u7666",
    m\u012B: "\u54AA\u7787",
    m\u00ED: "\u519E\u7962\u8FF7\u88AE\u7315\u8C1C\u84BE\u8A78\u6475\u7787\u8B0E\u919A\u5F4C\u64DF\u77B4\u7E3B\u85CC\u9E8A\u9E8B\u9EBF\u6AB7\u79B0\u9761\u7030\u737C\u862A\u9E9B\u957E\u6202\u6520\u74D5\u863C\u7222\u91BE\u91BF\u9E0D\u91C4",
    m\u01D0: "\u7C73\u8288\u4F8E\u6CB5\u7F8B\u5F2D\u6D23\u6549\u7C8E\u8112\u6E33\u845E\u851D\u92A4\u5F4C\u6FD4\u5B4A\u6520\u7056",
    m\u00EC: "\u5196\u7CF8\u6C68\u6C95\u5B93\u603D\u6788\u89C5\u5CDA\u7955\u5BBB\u5BC6\u6DE7\u8994\u8993\u5E42\u8C27\u5853\u5E4E\u899B\u5627\u6993\u6EF5\u6F1E\u7190\u8524\u871C\u9F0F\u51AA\u6A12\u5E66\u6FD7\u8B10\u6AC1\u7C1A\u7F83",
    mi\u00E1n: "\u5B80\u8287\u6763\u7720\u5A42\u7EF5\u5A94\u68C9\u7DBF\u7DDC\u81F1\u8752\u5B35\u6AB0\u6ACB\u77C8\u77CA\u77CF",
    mi\u01CEn: "\u4E0F\u6C45\u514D\u6C94\u9EFE\u52C9\u7704\u5A29\u83AC\u506D\u5195\u52D4\u6E11\u5595\u5A94\u6110\u6E4E\u774C\u7F05\u8442\u9EFD\u7D7B\u817C\u6FA0\u7DEC\u9766\u9BB8",
    mi\u00E0n: "\u9763\u9762\u7251\u7CC6\u9EAB\u9EAA\u9EBA\u9EB5",
    mi\u0101o: "\u55B5",
    mi\u00E1o: "\u82D7\u5A8C\u63CF\u7784\u9E4B\u5AF9\u7DE2\u9D93",
    mi\u01CEo: "\u53B8\u4EEF\u52B0\u676A\u7707\u79D2\u6DFC\u6E3A\u7F08\u7BCE\u7DF2\u85D0\u9088",
    mi\u00E0o: "\u5999\u5E99\u7385\u7AD7\u5EBF\u7F2A\u5EDF\u7E46",
    mi\u0113: "\u4E5C\u5400\u54A9\u54F6\u5B6D",
    mi\u00E9: "",
    mi\u00E8: "\u706D\u70D5\u771C\u8995\u6423\u6EC5\u8511\u858E\u9D13\u5E6D\u61F1\u700E\u7BFE\u6AD7\u7C1A\u7923\u881B\u884A\u9456\u9C74",
    m\u00EDn: "\u6C11\u5FDF\u578A\u59C4\u5CB7\u5FDE\u600B\u65FB\u65FC\u739F\u82E0\u73C9\u76FF\u7807\u7F60\u5D0F\u636A\u6E02\u7418\u741D\u7F17\u668B\u7449\u75FB\u7888\u9231\u7DCD\u7DE1\u8CEF\u9309\u9D16\u9372",
    m\u01D0n: "\u76BF\u51BA\u5221\u5FDF\u95F5\u5461\u5FDE\u62BF\u6CEF\u9EFE\u52C4\u6543\u95FD\u60AF\u654F\u7B22\u7B3D\u60FD\u6E4F\u6E63\u9594\u9EFD\u610D\u656F\u668B\u50F6\u95A9\u615C\u61AB\u6F63\u7C22\u9CD8\u8820\u9C35",
    m\u00EDng: "\u540D\u660E\u9E23\u6D3A\u7700\u8317\u51A5\u6719\u7733\u94ED\u910D\u5AC7\u6E9F\u733D\u84C2\u8A7A\u669D\u69A0\u9298\u9CF4\u7791\u879F\u89AD",
    m\u01D0ng: "\u4F72\u59F3\u51D5\u5AC7\u614F\u9169",
    m\u00ECng: "\u547D\u63B5",
    mi\u01D4: "",
    mi\u00F9: "\u8C2C\u7F2A\u7E46\u8B2C",
    m\u014D: "\u6478\u56A4",
    m\u00F3: "\u5E85\u5C1B\u8C1F\u5AEB\u998D\u6479\u819C\u9AB3\u9EBD\u9EBC\u9B79\u6A45\u7CE2\u5B24\u5B37\u8B28\u8B29\u64F5\u9943\u8611\u9ACD\u9B54\u5298\u6202\u6520\u995D",
    m\u01D2: "\u61E1",
    m\u00F2: "\u672B\u573D\u6C92\u59BA\u5E13\u6B81\u6B7F\u6B7E\u6CAB\u8309\u964C\u5E1E\u6629\u67BA\u72E2\u768C\u771C\u773F\u781E\u79E3\u8388\u773D\u7D48\u88B9\u7D54\u86E8\u8C83\u55FC\u587B\u5BDE\u6F20\u734F\u84E6\u8C88\u8C8A\u8C89\u9286\u977A\u58A8\u5AFC\u763C\u7790\u7799\u9546\u9B69\u9ED9\u7E38\u9ED8\u700E\u8C98\u569C\u85E6\u87D4\u93CC\u7205\u9A40\u7933\u7E86\u8031",
    m\u014Du: "\u54DE",
    m\u00F3u: "\u725F\u4F94\u52BA\u5463\u6048\u6544\u6859\u7738\u8C0B\u5825\u86D1\u7F2A\u8E0E\u8B00\u7E46\u936A\u9D3E\u9EB0\u97AA",
    m\u01D2u: "\u53B6\u67D0",
    m\u00F2u: "",
    m\u00FA: "\u6BEA\u6C01",
    m\u01D4: "\u6BCD\u4EA9\u7261\u5776\u59C6\u62C7\u7542\u5CD4\u7273\u7546\u7552\u80DF\u5A12\u755D\u755E\u782A\u756E\u9267\u8E07",
    m\u00F9: "\u6728\u4EEB\u76EE\u51E9\u6737\u725F\u6C90\u72C7\u5776\u7091\u7267\u82DC\u6BE3\u83AF\u869E\u94BC\u52DF\u96EE\u5893\u5E59\u5E55\u6154\u6958\u7766\u926C\u6155\u66AF\u66AE\u7F2A\u6A22\u8252\u9702\u7A46\u7E38\u7E46\u97AA",
    n: "",
    \u0144: "\u5514\u55EF",
    \u0148: "\u55EF",
    na: "",
    n\u0101: "",
    n\u00E1: "\u79C5\u62CF\u62FF\u6310\u55F1\u8498\u643B\u8ABD\u954E\u93BF",
    n\u01CE: "\u4E78\u96EB",
    n\u00E0: "\u5436\u59A0\u6290\u7EB3\u80AD\u90CD\u8872\u94A0\u7D0D\u88A6\u637A\u7B1A\u7B1D\u8C7D\u8EDC\u8C80\u9209\u84B3\u9779\u9B76",
    n\u00E1i: "\u8149\u6431\u6468\u5B7B",
    n\u01CEi: "\u4E43\u5976\u827F\u6C16\u7593\u59B3\u5EFC\u8FFA\u5037\u91E2\u5B2D",
    n\u00E0i: "\u4F74\u5948\u67F0\u800F\u8010\u8418\u6E3F\u9F10\u8926\u879A\u933C",
    n\u0101n: "\u56DD\u56E1",
    n\u00E1n: "\u7537\u62A9\u678F\u4FBD\u67DF\u5A1A\u7558\u83AE\u5583\u9056\u6694\u6960\u8AF5\u96E3",
    n\u01CEn: "\u8D67\u63C7\u6E73\u8433\u7175\u8169\u5AE8\u877B\u6201",
    n\u00E0n: "\u59A0\u5A7B\u8AF5\u96E3",
    n\u0101ng: "\u513E\u56D4",
    n\u00E1ng: "\u4E6A\u6DB3\u6411\u61B9\u56A2\u8830\u995F\u9995\u6B1C\u9962",
    n\u01CEng: "\u6411\u64C3\u703C\u66E9\u652E\u7062\u9995",
    n\u00E0ng: "\u513E\u9F49",
    n\u0101o: "\u5B6C",
    n\u00E1o: "\u5476\u6013\u6320\u5CF1\u6861\u7847\u94D9\u7331\u86F2\u8A49\u7899\u644E\u6493\u5DA9\u61B9\u6A48\u7376\u87EF\u5912\u8B4A\u9403\u5DCE\u737F",
    n\u01CEo: "\u57B4\u607C\u60A9\u8111\u5318\u8133\u5816\u60F1\u5AD0\u7459\u8166\u78AF\u61B9\u7376",
    n\u00E0o: "\u95F9\u5A65\u6DD6\u9599\u9B27\u81D1",
    ne: "",
    n\u00E9: "",
    n\u00E8: "\u7592\u8BB7\u5436\u6290\u7732\u8A25",
    n\u00E9i: "",
    n\u011Bi: "\u5A1E\u6D7D\u9981\u812E\u8147\u9912\u9BBE\u9BD8",
    n\u00E8i: "\u5167\u6C1D\u6C1E\u9317",
    n\u00E8n: "\u6041\u5A86\u5AE9\u5AF0",
    n\u00E9ng: "",
    n\u011Bng: "\u879A",
    n\u00E8ng: "",
    \u0144g: "\u5514\u55EF",
    \u0148g: "\u55EF",
    n\u012B: "\u59AE",
    n\u00ED: "\u5C3C\u576D\u6029\u62B3\u7C7E\u502A\u5C54\u79DC\u90F3\u94CC\u57FF\u5A57\u6DE3\u730A\u86AD\u68FF\u86EA\u8DDC\u922E\u8063\u873A\u999C\u89EC\u8C8E\u8F17\u9713\u9CB5\u9BE2\u9E91\u9F6F\u81E1",
    n\u01D0: "\u4F31\u4F32\u4F60\u62DF\u59B3\u62B3\u72D4\u82E8\u67C5\u5A57\u639C\u65CE\u6672\u68FF\u5B74\u511E\u5117\u96AC\u61DD\u64EC\u6FD4\u85BF\u6AB7\u807B",
    n\u00EC: "\u5C70\u6C3C\u4F32\u6290\u6635\u80D2\u9006\u533F\u7724\u79DC\u5804\u60C4\u5ADF\u6135\u7768\u817B\u66B1\u7E0C\u8ABD\u81A9\u5B3A",
    ni\u0101n: "\u62C8\u852B",
    ni\u00E1n: "\u5E74\u79CA\u54D6\u59E9\u79E5\u7C98\u6E93\u9C87\u9B8E\u9CB6\u9D47\u9ECF\u9BF0",
    ni\u01CEn: "\u6D8A\u6DF0\u713E\u8F87\u6990\u8F97\u649A\u64B5\u78BE\u8F26\u7C10\u8E4D\u6506\u8E68\u8E8E",
    ni\u00E0n: "\u5344\u5EFF\u5FF5\u59E9\u5538\u57DD\u60A5\u60D7\u824C",
    ni\u00E1ng: "\u5A18\u5B22\u5B43\u91C0",
    ni\u01CEng: "",
    ni\u00E0ng: "\u917F\u91B8\u91C0",
    ni\u01CEo: "\u9E1F\u8311\u8885\u9CE5\u5ACB\u88CA\u8526\u6A22\u5B1D\u892D\u5B32",
    ni\u00E0o: "\u8132",
    ni\u0113: "\u634F\u63D1",
    ni\u00E9: "\u82F6",
    ni\u011B: "",
    ni\u00E8: "\u4E5C\u5E07\u573C\u5CCA\u67BF\u9667\u6D85\u75C6\u8042\u81EC\u556E\u639C\u83CD\u9689\u655C\u6E7C\u55EB\u5D72\u8E02\u565B\u6470\u69F7\u8E17\u8E19\u92B8\u954A\u954D\u5DAD\u7BDE\u81F2\u92F7\u931C\u989E\u8E51\u5699\u8076\u93B3\u95D1\u5B7C\u5B7D\u6AF1\u7C4B\u8616\u56C1\u651D\u9F67\u5DD5\u7CF1\u7CF5\u8825\u9448\u56D0\u56D3\u8B98\u8EA1\u9477\u9873\u9480",
    n\u00EDn: "\u56DC\u6041\u810C\u60A8",
    n\u01D0n: "\u62F0",
    n\u00EDng: "\u549B\u72DE\u82E7\u67E0\u804D\u5BCD\u5BD5\u752F\u5BD7\u5BDC\u5BE7\u511C\u51DD\u6A63\u5680\u5B23\u64F0\u7370\u85B4\u6AB8\u8079\u944F\u9B21\u9E0B",
    n\u01D0ng: "\u64F0\u77C3",
    n\u00ECng: "\u4F5E\u4FAB\u6CDE\u503F\u5BCD\u5BD5\u752F\u5BD7\u5BDC\u5BE7\u6F9D\u64F0\u6FD8",
    ni\u016B: "\u599E\u5B67",
    ni\u00FA: "\u725C\u725B\u6C7C\u6013",
    ni\u01D4: "\u5FF8\u626D\u6C91\u72C3\u7EBD\u677B\u7084\u94AE\u7D10\u83A5\u9215\u9775",
    ni\u00F9: "\u629D",
    n\u00F3ng: "\u519C\u4FAC\u54DD\u6D53\u8113\u79FE\u8FB2\u5102\u8FB3\u5665\u6FC3\u857D\u6A82\u71F6\u79AF\u81BF\u7651\u7A60\u895B\u8B68\u91B2\u6B01\u9B1E",
    n\u01D2ng: "\u7E77",
    n\u00F2ng: "\u630A\u6335\u7651\u9F48",
    n\u00F3u: "\u7FBA",
    n\u01D2u: "",
    n\u00F2u: "\u6419\u69C8\u8028\u7373\u6ABD\u9392\u941E",
    n\u00FA: "\u5974\u4F2E\u5B65\u5E11\u9A7D\u7B2F\u99D1",
    n\u01D4: "\u4F2E\u52AA\u5F29\u782E\u80EC",
    n\u00F9: "\u6012\u5089\u6419",
    nu\u00E1n: "\u597B\u6E1C",
    nu\u01CEn: "\u6E1C\u6E6A\u6696\u7156\u7157\u992A",
    nu\u00E0n: "",
    nu\u00F3: "\u632A\u689B\u50A9\u6A60\u96E3\u513A",
    nu\u01D2: "\u88B3\u88B2",
    nu\u00F2: "\u800E\u8BFA\u558F\u63BF\u6BED\u903D\u611E\u6419\u6426\u9518\u643B\u6992\u7A2C\u8AFE\u8E43\u7CD1\u9369\u61E7\u61E6\u7CE5\u7A64\u7CEF",
    n\u01D8: "",
    n\u01DA: "\u9495\u7C79\u91F9",
    n\u01DC: "\u6C91\u8842\u6067\u6712\u8844\u804F",
    n\u00FC\u00E8: "\u8650\u5A69\u7878\u7627",
    o: "\u7B7D",
    \u014D: "\u5594\u5662",
    \u00F3: "\u54E6",
    \u01D2: "\u5684",
    \u00F2: "\u54E6",
    ou: "",
    \u014Du: "\u8BB4\u543D\u6CA4\u6B27\u6BB4\u74EF\u9E25\u5340\u5614\u5878\u6F1A\u6B50\u6BC6\u71B0\u750C\u8192\u9D0E\u6AD9\u85F2\u8B33\u93C2\u9DD7",
    \u00F3u: "",
    \u01D2u: "\u5418\u79BA\u5076\u8162\u5614\u71B0\u8026\u8545\u85D5",
    \u00F2u: "\u6004\u6CA4\u5614\u616A\u6F1A",
    p\u0101: "\u6C43\u5991\u82E9\u7685\u8DB4\u8225\u556A\u8469",
    p\u00E1: "\u6777\u722C\u94AF\u63B1\u7436\u7B62\u6F56",
    p\u01CE: "",
    p\u00E0: "\u6C43\u5E0A\u5E15\u6015\u8899",
    p\u0101i: "\u62CD",
    p\u00E1i: "\u4FF3\u5F98\u7305\u68D1\u724C\u7B84\u8F2B\u7C32\u7C30\u72A4",
    p\u01CEi: "\u5EF9",
    p\u00E0i: "\u6CA0\u54CC\u6D3E\u6E12\u6E43\u848E\u9383",
    p\u0101n: "\u7705\u7568\u8420\u6F58\u6500\u7C53",
    p\u00E1n: "\u4E2C\u723F\u80A8\u67C8\u6D00\u80D6\u772B\u6E74\u76D8\u8DD8\u5ABB\u5E4B\u84B0\u642B\u69C3\u76E4\u78D0\u7E0F\u81B0\u78FB\u8E52\u700A\u87E0\u8E63\u939C\u97B6",
    p\u01CEn: "\u5762\u76FB",
    p\u00E0n: "\u51B8\u5224\u6C9C\u62DA\u6CEE\u708D\u80A8\u53DB\u7249\u76FC\u80D6\u7554\u8041\u88A2\u8A4A\u6EBF\u9816\u92EC\u95C6\u9D65\u897B\u947B",
    p\u0101ng: "\u4E53\u6C78\u6C97\u80EE\u96F1\u6EC2\u8196\u9736",
    p\u00E1ng: "\u5390\u5906\u5C28\u5F77\u5E9E\u9004\u5EAC\u8DBD\u823D\u5ACE\u5FAC\u8180\u7BE3\u8783\u9CD1\u9F8E\u9F90\u9C1F",
    p\u01CEng: "\u55D9\u802A\u89AB",
    p\u00E0ng: "\u7090\u80A8\u80D6\u772B",
    p\u0101o: "\u629B\u62CB\u812C\u8422\u85E8\u7A6E",
    p\u00E1o: "\u5486\u5789\u5E96\u72CD\u70B0\u722E\u74DF\u888D\u94C7\u530F\u70F0\u888C\u8DC1\u8EF3\u924B\u9784\u891C\u9E83\u9E85",
    p\u01CEo: "",
    p\u00E0o: "\u5945\u75B1\u76B0\u7832\u888C\u9764\u9EAD\u5697\u791F\u792E",
    p\u0113i: "\u599A\u5478\u600C\u62B7\u80A7\u67F8\u80DA\u8843\u9185",
    p\u00E9i: "\u962B\u966A\u57F9\u5A44\u6BF0\u8D54\u952B\u88F5\u88F4\u8CE0\u9307",
    p\u011Bi: "\u4FD6\u7423",
    p\u00E8i: "\u4F02\u5983\u6C9B\u72BB\u4F69\u5E14\u59F5\u65BE\u67ED\u65C6\u6D7F\u73EE\u914D\u6DE0\u68D1\u5A90\u84DC\u8F94\u99B7\u5D8F\u9708\u6508\u8F61",
    p\u0113n: "\u5674\u6FC6\u6B55",
    p\u00E9n: "\u74EB\u76C6\u6E53\u8450",
    p\u011Bn: "\u5460\u7FF8",
    p\u00E8n: "\u55AF\u5674",
    p\u0113ng: "\u4EA8\u5309\u6026\u62A8\u6CD9\u6072\u80D3\u7830\u6888\u70F9\u7851\u7D63\u8EEF\u527B\u959B\u6F30\u562D\u99CD\u78DE",
    p\u00E9ng: "\u8283\u670B\u6337\u7AFC\u5017\u6340\u8391\u580B\u5F38\u6DDC\u88B6\u68DA\u6916\u50B0\u585C\u5873\u6412\u6F28\u75ED\u787C\u7A1D\u84EC\u9E4F\u6A25\u71A2\u6189\u6F8E\u8F23\u7BE3\u7BF7\u81A8\u930B\u97F8\u9AFC\u87DA\u87DB\u9B05\u7E84\u8615\u97FC\u9D6C\u9A2F\u9B14\u945D",
    p\u011Bng: "\u6367\u6DCE\u768F\u6453",
    p\u00E8ng: "\u63BD\u692A\u78B0\u959B\u69F0\u8E2B\u78DE",
    pi: "\u698C",
    p\u012B: "\u4E15\u4F13\u4F3E\u599A\u6279\u7EB0\u90B3\u576F\u5CAF\u6036\u62AB\u62B7\u6788\u708B\u72C9\u72D3\u7812\u6082\u79DB\u79E0\u7D15\u94CD\u9674\u65C7\u7FCD\u801A\u8C7E\u91FD\u921A\u925F\u9294\u78C7\u99D3\u9AEC\u567C\u9303\u930D\u9B7E\u61B5\u7915\u7914\u939E\u9739",
    p\u00ED: "\u76AE\u4EF3\u9630\u7EB0\u8298\u9642\u6787\u80B6\u6BD8\u6BD7\u75B2\u7B13\u7D15\u868D\u90EB\u94CD\u5564\u57E4\u5D25\u7308\u86BE\u86BD\u8C7C\u7137\u7435\u7986\u813E\u8157\u88E8\u9239\u9C8F\u7F74\u818D\u8731\u7F77\u96A6\u9B6E\u58C0\u8795\u9B8D\u7BFA\u87B7\u8C94\u979E\u9D67\u7F86\u6707\u9F19\u882F",
    p\u01D0: "\u5339\u5E80\u758B\u4EF3\u572E\u5421\u82C9\u6082\u8134\u75DE\u92A2\u5D8F\u8AC0\u9D04\u64D7\u567D\u7656\u56AD",
    p\u00EC: "\u5C41\u57E4\u6DE0\u63CA\u5AD3\u5AB2\u7765\u6F4E\u7A2B\u50FB\u6FBC\u568A\u6FDE\u7513\u7588\u8B6C\u95E2\u9DFF\u9E0A",
    pi\u0101n: "\u56E8\u504F\u5AA5\u6944\u728F\u7BC7\u7FE9\u9342\u9DA3",
    pi\u00E1n: "\u9A88\u80FC\u7F0F\u8141\u6969\u8CC6\u8DF0\u7478\u7DF6\u9ABF\u8E41\u99E2\u74B8\u9A08",
    pi\u01CEn: "\u8991\u8C1D\u8CB5\u8ADE",
    pi\u00E0n: "\u7335\u9A97\u9B78\u7371\u9A17\u9A19",
    pi\u0101o: "\u527D\u52E1\u560C\u5AD6\u5F6F\u6153\u7F25\u98D8\u65DA\u7E39\u7FF2\u87B5\u72A5\u98C3\u98C4\u9B52",
    pi\u00E1o: "\u5AD6\u74E2\u85B8\u95DD",
    pi\u01CEo: "\u83A9\u6B8D\u7F25\u779F\u7BFB\u7E39\u91A5\u76AB\u9860",
    pi\u00E0o: "\u50C4\u5F6F\u5FB1\u9AA0\u9A43\u9C3E",
    pi\u0113: "\u6C15\u8995\u6F4E\u6486\u66BC\u77A5",
    pi\u011B: "\u4E3F\u82E4\u9405",
    pi\u00E8: "\u5AF3",
    p\u012Bn: "\u62DA\u59D8\u62FC\u780F\u7917\u7A66\u99AA\u9A5E",
    p\u00EDn: "\u73AD\u8D2B\u5A26\u8CA7\u7415\u5AD4\u5B2A\u85B2\u56AC\u77C9\u860B\u8819\u98A6\u9870",
    p\u01D0n: "\u54C1\u6980",
    p\u00ECn: "\u725D\u6C56\u8058",
    p\u012Bng: "\u4E52\u7539\u4FDC\u5A09\u6D84\u782F\u8060\u8275\u9829",
    p\u00EDng: "\u5E73\u8BC4\u51ED\u546F\u576A\u5CBC\u6CD9\u90F1\u5E21\u5EB0\u67B0\u6D34\u73B6\u80D3\u8353\u74F6\u5E32\u6DDC\u7851\u840D\u86B2\u5840\u5E48\u7129\u7501\u7F3E\u84F1\u86E2\u8A55\u99AE\u8EFF\u9C86\u51F4\u7AEE\u927C\u617F\u7BB3\u8F27\u6191\u9B83\u6A98\u7C08\u860B",
    p\u01D0ng: "\u5C5B",
    p\u00ECng: "",
    p\u014D: "\u948B\u9642\u5761\u5CA5\u6CFA\u6CFC\u91D9\u7FCD\u9887\u6E8C\u9166\u9817\u6F51\u9197\u6FFC\u91B1\u93FA",
    p\u00F3: "\u5A46\u5619\u642B\u8522\u9131\u76A4\u6AC7\u56A9",
    p\u01D2: "\u53F5\u5C00\u94B7\u7B38\u9255\u7BA5\u99CA\u9AF2",
    p\u00F2: "\u5EF9\u5CB6\u6540\u6622\u6D26\u73C0\u54F1\u70DE\u7836\u7834\u7C95\u5964\u6E50\u733C\u84AA\u9B44",
    p\u014Du: "\u6299\u5256\u5A1D\u634A",
    p\u00F3u: "\u6294\u6299\u57BA\u634A\u638A\u88D2\u7B81",
    p\u01D2u: "\u5485\u54E3\u5A44\u638A\u68D3\u7283",
    p\u016B: "\u6535\u6534\u6251\u62AA\u7087\u67E8\u9660\u75E1\u79FF\u5657\u64B2\u6F7D\u92EA\u9BC6",
    p\u00FA: "\u5724\u530D\u6357\u8386\u83E9\u83D0\u8461\u84B2\u84B1\u50D5\u7B81\u917A\u58A3\u735B\u749E\u6FEE\u77A8\u7A59\u9564\u8D0C\u7E80\u93F7",
    p\u01D4: "\u5703\u57D4\u6D66\u70F3\u666E\u5711\u6EA5\u669C\u8C31\u8AE9\u64C8\u6A38\u6C06\u6A8F\u9568\u8B5C\u8E7C\u9420",
    p\u00F9: "\u75E1\u8217\u8216\u92EA\u66DD",
    qi: "\u5550",
    q\u012B: "\u4E03\u8FC9\u6C8F\u6053\u67D2\u501B\u51C4\u6864\u90EA\u5A38\u60BD\u621A\u637F\u687C\u6DD2\u840B\u55B0\u6532\u6567\u68F2\u6B39\u6B3A\u7D2A\u7F09\u50B6\u8904\u50DB\u5601\u5884\u617D\u69BF\u6F06\u7DC0\u617C\u7DDD\u8AC6\u8E26\u8787\u970B\u8E4A\u9B4C\u93DA\u9D88",
    q\u00ED: "\u4E0C\u4E93\u4F0E\u7941\u573B\u5C93\u5C90\u5FEF\u82AA\u4E9D\u6589\u6B67\u7541\u7947\u7948\u80B5\u4FDF\u75A7\u8360\u5258\u658A\u65C2\u7AD2\u8006\u8110\u8694\u8691\u869A\u966D\u9880\u57FC\u5D0E\u5E3A\u6391\u6DC7\u7309\u7566\u8401\u8415\u8DC2\u8EDD\u91EE\u9A90\u9A91\u5D5C\u68CA\u68CB\u7426\u742A\u797A\u86F4\u9691\u612D\u7881\u7895\u7A18\u8900\u951C\u980E\u9B3F\u65D7\u7CB8\u7DA5\u7DA8\u7DA6\u871D\u871E\u9F4A\u7482\u79A5\u8572\u89ED\u87A7\u9321\u9CAF\u61E0\u6FDD\u85BA\u85C4\u913F\u6AB1\u6AC0\u7C2F\u7C31\u81CD\u9A0E\u9A0F\u9CCD\u8604\u9BD5\u9D78\u9D80\u9E92\u7C4F\u8269\u8810\u9B10\u9A39\u9C2D\u7382\u9EA1",
    q\u01D0: "\u4E5E\u9094\u4F01\u5C7A\u8291\u542F\u5447\u675E\u7398\u76C0\u5518\u8C48\u8D77\u5554\u5553\u555F\u5A4D\u68A9\u7EEE\u88B3\u8DC2\u6675\u68E8\u7DAE\u7DBA\u8AEC\u95D9",
    q\u00EC: "\u6C14\u8BAB\u5FD4\u6271\u6C17\u6C54\u8FC4\u545A\u5F03\u6C7D\u77F5\u829E\u4E9F\u546E\u6CE3\u7081\u76F5\u54A0\u6D13\u7AD0\u6814\u6B2B\u6C23\u8A16\u552D\u710F\u5921\u6112\u68C4\u6E46\u6E47\u847A\u6ECA\u789B\u6456\u66A3\u7508\u78B6\u5650\u6187\u69ED\u8D9E\u5668\u61A9\u78DC\u78E7\u78E9\u85D2\u7918\u7F4A\u87FF\u9411",
    qi\u0101: "\u62B2\u6390\u88B7\u63E2\u845C\u64D6",
    qi\u00E1: "",
    qi\u01CE: "\u62E4\u5CE0\u8DD2\u9160\u9790",
    qi\u00E0: "\u5736\u51BE\u533C\u54AD\u5E22\u6070\u6D3D\u80E2\u6B8E\u7848\u6118\u78CD\u9AC2",
    qi\u0101n: "\u5343\u4EDF\u9621\u5731\u5732\u5977\u6266\u6C58\u828A\u8FC1\u4F65\u5C8D\u6744\u6C67\u833E\u6B26\u7ACF\u81E4\u948E\u62EA\u7275\u7C81\u60AD\u6333\u8688\u8C38\u5A5C\u5B6F\u727D\u91FA\u6394\u8C26\u9206\u50C9\u6106\u7B7E\u925B\u9A9E\u9E50\u6173\u6434\u647C\u6481\u53B1\u78CF\u8AD0\u9077\u9CFD\u8930\u8B19\u9845\u6AB6\u6510\u6511\u6ACF\u7C3D\u93F2\u9D6E\u5B45\u6513\u9A2B\u7C56\u9B1C\u9B1D\u7C64\u97C6",
    qi\u00E1n: "\u4EF1\u5C92\u5FF4\u6272\u62D1\u73AA\u4E79\u524D\u70B6\u8368\u94A4\u6B6C\u8654\u8699\u94B1\u94B3\u5042\u63AE\u63F5\u8EE1\u4E81\u5A8A\u6701\u728D\u8465\u9210\u7154\u9257\u5898\u69A9\u7B9D\u92AD\u648D\u6F5B\u6F5C\u7FAC\u8541\u6A6C\u9322\u9ED4\u9386\u9EDA\u9A1D\u6FF3\u9A1A\u704A\u9C2C",
    qi\u01CEn: "\u51F5\u80B7\u550A\u6DFA\u5D70\u9063\u69CF\u8181\u8738\u8C34\u7F31\u7E7E\u8B74\u9453",
    qi\u00E0n: "\u6B20\u520B\u4F23\u82A1\u4FD4\u831C\u5029\u6093\u5811\u6385\u5094\u68C8\u6920\u6B3F\u55DB\u614A\u7698\u84A8\u5879\u6B49\u7DAA\u8533\u5119\u69E7\u7BCF\u8F24\u7BDF\u58CD\u5B31\u7E34",
    qi\u0101ng: "\u7F8C\u6215\u6217\u65A8\u67AA\u73B1\u77FC\u7F97\u7310\u554C\u8DC4\u55F4\u690C\u6EAC\u7347\u8154\u55C6\u6436\u8723\u9516\u5D88\u6227\u6464\u69CD\u7244\u7472\u7FAB\u9535\u7BEC\u8B12\u8E4C\u8E61\u9397\u93D8\u93F9\u9DAC",
    qi\u00E1ng: "\u5F37\u5899\u5AF1\u8537\u6A2F\u6F12\u8503\u58BB\u5B19\u5EE7\u5F4A\u8594\u6AA3\u7246\u8262\u8620",
    qi\u01CEng: "\u5F37\u7F9F\u6436\u7FA5\u588F\u5F4A\u7E48\u8941\u956A\u7E66\u93F9",
    qi\u00E0ng: "\u6217\u709D\u5534\u8DC4\u55C6\u6227\u646A\u7197\u7FBB",
    qi\u0101o: "\u5E29\u7857\u90FB\u55BF\u5D6A\u714D\u8DF7\u9125\u9121\u5281\u52EA\u5E53\u6572\u6BC3\u8E0D\u9539\u589D\u78BB\u78DD\u981D\u9AB9\u58BD\u5E67\u6A47\u71C6\u7F32\u6A7E\u78FD\u936C\u936B\u7909\u7E51\u7E70\u8DAC\u8E7A\u8E7B\u93D2\u9430",
    qi\u00E1o: "\u4E54\u4FA8\u5CE4\u834D\u835E\u6865\u785A\u83EC\u55AC\u7744\u50D1\u646E\u69D7\u8C2F\u563A\u58A7\u5AF6\u5DA0\u6194\u6F50\u854E\u9792\u6A35\u6A4B\u71CB\u729E\u7644\u77A7\u7904\u7FF9\u6AF5\u85EE\u8B59\u8DAB\u9408\u97BD\u9866",
    qi\u01CEo: "\u4E02\u5DE7\u91E5\u6100\u9ADC",
    qi\u00E0o: "\u8BEE\u9657\u5CED\u7A8D\u5062\u6BBB\u6BBC\u8A9A\u9ADA\u50FA\u563A\u64AC\u7BBE\u566D\u64BD\u9798\u97D2\u7909\u7AC5\u7FF9\u97A9\u8E88",
    qi\u0113: "\u82C6",
    qi\u00E9: "\u767F\u4F3D\u8304\u807A",
    qi\u011B: "",
    qi\u00E8: "\u5392\u59BE\u602F\u758C\u90C4\u5327\u7A83\u608F\u6308\u6814\u6D2F\u5E39\u60EC\u6DC1\u7B21\u611C\u6904\u7330\u86EA\u8D84\u8DD9\u55DB\u614A\u6705\u7A27\u7BA7\u9532\u7BCB\u8E25\u7A55\u9365\u9BDC\u7ACA\u7C61",
    q\u012Bn: "\u5153\u4FB5\u94A6\u887E\u9A8E\u83F3\u5A87\u5D5A\u6B3D\u5D70\u7D85\u8A9B\u5D94\u89AA\u9849\u99F8\u9BBC\u5BF4",
    q\u00EDn: "\u5E88\u5FF4\u6272\u82A9\u82B9\u80A3\u77DC\u57D0\u73E1\u77DD\u79E6\u8039\u83E6\u8699\u6366\u83F3\u7434\u7439\u79BD\u8983\u9219\u922B\u96C2\u52E4\u55EA\u5AC0\u6EB1\u9772\u5ED1\u616C\u5659\u5D9C\u64D2\u65B3\u9CF9\u61C4\u6A8E\u6FBF\u763D\u8793\u61C3\u8804\u9D6D",
    q\u01D0n: "\u5745\u6611\u7B09\u68AB\u8D7E\u5BD1\u9513\u5BDD\u5BD6\u5BE2\u92DF\u87BC",
    q\u00ECn: "\u5422\u5423\u628B\u6C81\u551A\u83E3\u63FF\u6407\u64B3\u5BF4\u7019\u85FD",
    q\u012Bng: "\u9751\u9752\u6C22\u8F7B\u503E\u537F\u90EC\u570A\u57E5\u5BC8\u6C2B\u6DF8\u6E05\u8EFD\u50BE\u7DAA\u873B\u8F15\u9306\u9CAD\u9BD6\u944B",
    q\u00EDng: "\u591D\u7520\u5260\u52CD\u5568\u60C5\u6B91\u7858\u6674\u68FE\u6C30\u845D\u6692\u64CF\u6A08\u64CE\u6AA0\u9EE5",
    q\u01D0ng: "\u82D8\u9877\u8BF7\u5EBC\u9803\u5ECE\u6F00\u8ACB\u6ABE\u8B26",
    q\u00ECng: "\u5E86\u51CA\u6385\u6BB8\u6E39\u7883\u7B90\u7DAE\u9758\u6176\u78EC\u89AA\u512C\u6FEA\u7F44\u6AE6",
    qi\u014Dng: "",
    qi\u00F3ng: "\u536D\u909B\u5B86\u7A77\u7A79\u8315\u684F\u60F8\u7401\u7B47\u7B3B\u8D79\u712A\u712D\u743C\u823C\u86EC\u86E9\u7162\u718D\u7758\u8DEB\u928E\u778F\u7AAE\u511D\u5B1B\u618C\u6A69\u749A\u85D1\u74CA\u7AC6\u85ED\u74D7",
    qi\u00F2ng: "",
    qi\u016B: "\u4E18\u4E20\u90B1\u5775\u6058\u79CC\u79CB\u6077\u86AF\u5A9D\u6E6B\u8429\u6978\u6E6C\u5878\u84F2\u9E59\u7BCD\u7DE7\u8775\u7A50\u8DA5\u9F9C\u6A5A\u9CC5\u87D7\u97A6\u97A7\u8612\u9C0C\u9C0D\u9D96\u8824\u9F9D",
    qi\u00FA: "\u53B9\u53F4\u56DA\u624F\u72B0\u738C\u827D\u8281\u6739\u6C53\u808D\u6C42\u866C\u6CC5\u726B\u866F\u4FC5\u89D3\u8A05\u8A04\u914B\u5512\u6D57\u7D0C\u838D\u900E\u9011\u91DA\u6882\u6B8F\u6BEC\u7403\u8D47\u91FB\u9804\u5D37\u5DEF\u6E1E\u6E6D\u76B3\u76DA\u9052\u716A\u7D7F\u86F7\u88D8\u5DF0\u89E9\u8CD5\u7486\u8764\u92B6\u9194\u9B82\u9F3D\u9BC4\u9C3D",
    qi\u01D4: "\u641D\u7CD7",
    qi\u00F9: "",
    q\u016B: "\u4F39\u4F49\u5324\u5C96\u8BCE\u9639\u9A71\u547F\u5765\u5C48\u5CB4\u62BE\u6D40\u795B\u80E0\u88AA\u5340\u710C\u7D36\u86C6\u8EAF\u7140\u7B41\u7CAC\u86D0\u8A58\u8D8D\u5D87\u6188\u99C6\u657A\u89D1\u8AB3\u99C8\u9EB9\u9AF7\u9B7C\u8DA8\u9EAF\u89B0\u89B7\u8EC0\u9D8C\u9EB4\u9EE2\u89BB\u9A45\u9C38\u9C4B",
    q\u00FA: "\u4F62\u52AC\u65AA\u6710\u80CA\u83C3\u8850\u9E32\u6DED\u7D47\u7FD1\u86BC\u844B\u8EE5\u8556\u7496\u78F2\u87B6\u9D1D\u74A9\u7FF5\u87DD\u77BF\u9F29\u8627\u5FC2\u7048\u6235\u6B0B\u6C0D\u7220\u7C67\u81DE\u766F\u6B14\u8837\u8862\u8EA3\u883C\u947A\u9E1C",
    q\u01D4: "\u82E3\u53D6\u7AD8\u5A36\u7D36\u8A53\u7AEC\u877A\u9F8B\u9F72",
    q\u00F9: "\u53BB\u53BA\u521E\u6B2A\u801D\u9612\u89D1\u95B4\u9EAE\u95C3\u9F01\u89B0\u89B7\u89BB",
    qu\u0101n: "\u594D\u5F2E\u609B\u570F\u68EC\u6926\u7B9E\u9409",
    qu\u00E1n: "\u5168\u6743\u4F7A\u72CB\u8BE0\u59FE\u5CD1\u606E\u6CC9\u6D24\u8343\u62F3\u7277\u8F81\u5573\u57E2\u5A58\u60D3\u6372\u75CA\u7842\u94E8\u6926\u6E76\u7288\u7B4C\u7D5F\u8472\u643C\u697E\u7454\u89E0\u8A6E\u8DE7\u8F07\u8737\u9293\u69EB\u6A29\u8E21\u7E13\u919B\u99E9\u95CE\u9CC8\u9B08\u9A21\u5B49\u5DCF\u9C01\u6B0A\u9F64\u77D4\u8838\u98A7\u9874\u7065",
    qu\u01CEn: "\u72AD\u72AC\u72AE\u754E\u70C7\u7EFB\u7DA3\u8647",
    qu\u00E0n: "\u529D\u7276\u52E7\u97CF\u52F8\u7065",
    qu\u0113: "\u7094\u7F3A\u7F3C\u8697\u849B\u9619\u95D5",
    qu\u00E9: "\u7638",
    qu\u00E8: "\u6C4B\u5374\u537B\u57C6\u5D05\u60AB\u7437\u5095\u6560\u656A\u68E4\u785E\u786E\u9615\u5859\u6409\u76B5\u788F\u9619\u9E4A\u6128\u69B7\u58A7\u6164\u78BB\u78BA\u8D9E\u71E9\u95CB\u7910\u95D5\u9D72\u792D",
    q\u016Bn: "\u590B\u56F7\u9021\u7B98\u6B4F",
    q\u00FAn: "\u5BAD\u5CEE\u5E2C\u88D9\u7FA3\u7FA4\u88E0\u9E87",
    q\u01D4n: "",
    r\u00E1n: "\u5465\u80B0\u887B\u8887\u86A6\u88A1\u86BA\u7136\u9AE5\u562B\u9AEF\u71C3\u7E4E",
    r\u01CEn: "\u5184\u5189\u59CC\u82D2\u67D3\u73C3\u5AA3\u8485\u71AF\u6A6A",
    r\u00E0n: "",
    r\u0101ng: "",
    r\u00E1ng: "\u7A63\u5134\u52F7\u703C\u737D\u8618\u79B3\u74E4\u7A70\u8E9F\u9B24",
    r\u01CEng: "\u58CC\u58E4\u6518\u7219\u7E95",
    r\u00E0ng: "\u8BA9\u61F9\u8B72\u8B93",
    r\u00E1o: "\u5A06\u835B\u9976\u6861\u5B08\u8558\u6A48\u8953\u9952",
    r\u01CEo: "\u6270\u5A06\u96A2\u5B08\u64FE",
    r\u00E0o: "\u7ED5\u9076\u7A58\u7E5E",
    r\u00E9: "\u637C",
    r\u011B: "\u558F\u60F9",
    r\u00E8: "\u70ED\u6E03\u71B1",
    r\u00E9n: "\u4EBB\u4EBA\u4EC1\u58EC\u5FC8\u6732\u5FCE\u79C2\u82A2\u9B5C\u928B\u9D40",
    r\u011Bn: "\u5FCD\u834F\u6820\u6823\u8375\u79F9\u83CD\u68EF\u7A14\u7D9B\u8EB5\u928B",
    r\u00E8n: "\u5203\u5204\u8BA4\u4EDE\u4EED\u8BB1\u5C7B\u5C83\u6268\u7EAB\u598A\u6752\u7263\u7EB4\u8095\u8F6B\u97E7\u996A\u794D\u59D9\u7D09\u887D\u7D1D\u8A12\u8ED4\u6895\u88B5\u91F0\u91FC\u7D4D\u814D\u9213\u9771\u976D\u97CC\u98EA\u8A8D\u9901",
    r\u0113ng: "\u6254",
    r\u00E9ng: "\u4ECD\u8FB8\u793D\u82BF\u967E",
    r\u00EC: "\u65E5\u9A72\u56F8\u6C1C\u8875\u91F0\u91FC\u9224\u99B9",
    r\u00F3ng: "\u620E\u809C\u6804\u72E8\u7ED2\u8319\u8338\u8363\u5BB9\u5CF5\u6BE7\u70FF\u509B\u5AB6\u5D58\u6411\u7D68\u7FA2\u5AC6\u5D64\u6408\u69B5\u6EB6\u84C9\u6995\u69AE\u7194\u7462\u7A41\u69E6\u7E19\u877E\u8923\u9555\u878E\u878D\u99E5\u5B2B\u5DB8\u7203\u9394\u701C\u66E7\u8811",
    r\u01D2ng: "\u5197\u5B82\u5748\u5087\u8EF5\u7E19\u6C04",
    r\u00F2ng: "\u7A43\u7E19",
    r\u00F3u: "\u53B9\u79B8\u67D4\u7C88\u811C\u5A83\u63C9\u6E18\u8447\u697A\u7163\u7448\u816C\u7CC5\u875A\u8E42\u8F2E\u9352\u97A3\u74C7\u9A25\u9C07\u9D94",
    r\u01D2u: "\u97D6",
    r\u00F2u: "\u8089\u5B8D\u697A\u8B73",
    r\u016B: "\u5DBF",
    r\u00FA: "\u909A\u5982\u543A\u4F9E\u5E24\u8339\u6310\u6847\u88BD\u94F7\u6E2A\u7B4E\u8498\u92A3\u8560\u8761\u5112\u9D11\u5685\u5B2C\u5B7A\u6FE1\u7373\u85B7\u9D3D\u66D8\u6ABD\u8966\u7E7B\u8815\u98A5\u91B9\u986C\u9C6C",
    r\u01D4: "\u6C5D\u8097\u4E73\u8FB1\u910F\u64E9",
    r\u00F9: "\u5165\u6256\u6741\u6D33\u55D5\u5AB7\u6EBD\u7F1B\u84D0\u9CF0\u8925\u7E1F",
    ru\u00E1n: "\u5827\u648B\u58D6",
    ru\u01CEn: "\u962E\u670A\u8F6F\u800E\u5044\u8EDF\u5A86\u744C\u815D\u789D\u7DDB\u8F2D\u6ABD\u74C0\u791D",
    ru\u00E0n: "\u7DDB",
    ru\u00ED: "\u82FC\u6875\u7524\u7DCC\u8564",
    ru\u01D0: "\u60E2\u854B\u854A\u6A64\u7E60\u58E1\u8603\u8602",
    ru\u00EC: "\u514A\u514C\u6290\u6C6D\u82AE\u6798\u7B0D\u868B\u9510\u745E\u8739\u777F\u92B3\u92ED\u53E1\u93F8",
    r\u00FAn: "\u77A4",
    r\u01D4n: "",
    r\u00F9n: "\u95F0\u6DA6\u958F\u95A0\u6F64\u6A4D\u81B6",
    ru\u00F3: "\u633C\u637C",
    ru\u00F2: "\u53D2\u504C\u5F31\u9100\u5A7C\u6E03\u712B\u6949\u5D76\u84BB\u7BAC\u7BDB\u7207\u9C19\u9C2F\u9DB8",
    sa: "",
    s\u0101: "\u4EE8",
    s\u01CE: "\u8A2F\u9778\u6F75\u9788\u6503\u7051\u8EA0\u7E9A",
    s\u00E0: "\u5345\u6CE7\u9491\u98D2\u810E\u8428\u9212\u644B\u96A1\u99BA\u856F\u98AF\u85A9\u6AD2\u93FE",
    s\u0101i: "\u6BE2\u6122\u63CC\u6BF8\u816E\u5625\u567B\u9CC3\u984B\u9C13",
    s\u01CEi: "\u55EE",
    s\u00E0i: "\u8D5B\u50FF\u8CFD\u7C3A",
    san: "\u58ED",
    s\u0101n: "\u4E09\u5F0E\u53C1\u53C3\u53C4\u53C5\u6BF6\u6BF5\u5381\u6BFF\u7299\u9B16",
    s\u01CEn: "\u4ED0\u4F1E\u5098\u7CC1\u9993\u7CDD\u7CE4\u7CE3\u7E56\u93D2\u93FE\u994A",
    s\u00E0n: "\u4FD5\u5E34\u9590\u6F75",
    s\u0101ng: "\u6852\u6851\u55AA\u69E1",
    s\u01CEng: "\u55D3\u6421\u78C9\u892C\u98A1\u939F\u9859",
    s\u00E0ng: "\u55AA",
    s\u0101o: "\u63BB\u6145\u6414\u6E9E\u7F2B\u61C6\u7F32\u87A6\u7E45\u9CCB\u98BE\u9A12\u7E70\u9A37\u9C20\u9C62",
    s\u01CEo: "\u57FD\u6383\u5AC2",
    s\u00E0o: "\u57FD\u6383\u7619\u61C6\u6C09\u77C2\u9ADE",
    s\u0113: "\u95AA",
    s\u00E8: "\u8272\u62FA\u6D13\u681C\u6DA9\u556C\u6E0B\u7CA3\u94EF\u96ED\u6B6E\u7417\u55C7\u745F\u6475\u6B70\u92AB\u69ED\u6F81\u5EE7\u61CE\u64CC\u6FC7\u6FCF\u7637\u7A51\u8594\u6F80\u74B1\u7012\u7A61\u938D\u7E6C\u7A6F\u8F56\u93FC\u95DF\u8B45\u98CB",
    s\u0113n: "\u68EE\u692E\u69EE\u8942",
    s\u011Bn: "",
    s\u0113ng: "\u50E7\u9B19",
    s\u00E8ng: "",
    s\u012B: "\u53B6\u7E9F\u4E1D\u53F8\u7CF9\u7CF8\u79C1\u549D\u6CC0\u4FEC\u6056\u8652\u9E36\u5072\u5082\u5AA4\u6122\u65AF\u7D72\u7F0C\u86F3\u6952\u7997\u9270\u98D4\u51D8\u53AE\u79A0\u7F73\u8724\u92AF\u9536\u5636\u565D\u5EDD\u6495\u6F8C\u78C3\u7DE6\u856C\u92D6\u71CD\u8784\u9376\u87D6\u87F4\u98B8\u9A26\u9BE3\u9401\u9DE5\u9F36",
    s\u00ED: "",
    s\u01D0: "\u6B7B\u6122",
    s\u00EC: "\u5DF3\u4E96\u56DB\u5BFA\u6C5C\u4F40\u5155\u59D2\u6CE4\u7940\u4FA1\u5B60\u676B\u6CD7\u9972\u9A77\u4FDF\u5A30\u67B1\u67F6\u6D20\u726D\u6D0D\u6D98\u8082\u98E4\u68A9\u7B25\u801B\u801C\u91F2\u7AE2\u8997\u55E3\u8086\u8C84\u9236\u923B\u98F4\u98FC\u69B9\u9289\u79A9\u99DF\u857C\u5129\u9A03\u7003",
    s\u014Dng: "\u5FEA\u6780\u677E\u67A9\u5A00\u67D7\u502F\u51C7\u5D27\u5EBA\u68A5\u6DDE\u83D8\u6121\u63D4\u68C7\u5D69\u7879\u61BD\u6FCD\u6AA7\u9B06",
    s\u00F3ng: "",
    s\u01D2ng: "\u6002\u609A\u6352\u8038\u7AE6\u50B1\u612F\u6964\u5D77\u6457\u6F0E\u616B\u8073\u99F7",
    s\u00F2ng: "\u5405\u8BBC\u5B8B\u8BF5\u9001\u9882\u8A1F\u980C\u8AA6\u93B9\u9938",
    s\u014Du: "\u51C1\u6352\u635C\u910B\u55D6\u5EC0\u5ECB\u641C\u6EB2\u7340\u8490\u84C3\u998A\u6449\u98D5\u6457\u953C\u64A8\u8258\u878B\u9199\u93AA\u993F\u98BC\u98BE\u93C9\u9A2A",
    s\u01D2u: "\u53DC\u53DF\u5081\u68F7\u84C3\u55FE\u778D\u64DE\u85AE\u64FB\u85EA\u6AE2\u7C54",
    s\u00F2u: "\u6B36\u55FD\u64DE\u7636\u64FB",
    s\u016B: "\u7526\u9165\u7A21\u7A23\u7AA3\u7A4C\u9BC2\u8607\u8613\u6AEF\u56CC",
    s\u00FA: "\u5731\u4FD7",
    s\u01D4: "",
    s\u00F9: "\u738A\u5919\u8BC9\u6CDD\u8083\u6D2C\u6D91\u73DF\u7D20\u83A4\u901F\u57E3\u6880\u6B90\u7C9B\u9A95\u5083\u68F4\u7C9F\u8A34\u8C21\u55C9\u5851\u5850\u5ACA\u612B\u6EAF\u6EB8\u8085\u9061\u9E54\u50F3\u612C\u6475\u69A1\u8186\u850C\u89EB\u8D9A\u906C\u619F\u6A15\u6A0E\u6F65\u78BF\u92C9\u9917\u6F5A\u7E24\u6A5A\u749B\u7C0C\u7E2E\u85D7\u8B16\u8E5C\u9A4C\u9C50\u9DEB",
    su\u0101n: "\u72FB\u75E0\u9178",
    su\u01CEn: "\u5334\u7BF9",
    su\u00E0n: "\u7958\u7B07\u7B6D\u849C\u7B97",
    su\u012B: "\u590A\u8295\u867D\u5020\u54F8\u5A1E\u6D7D\u837E\u837D\u772D\u6BF8\u6ED6\u7762\u7F1E\u55FA\u71A3\u6FC9\u7E17\u9796\u96D6",
    su\u00ED: "\u7EE5\u968B\u968F\u9040\u7D8F\u96A8\u74CD\u9AC4",
    su\u01D0: "\u81B8\u7021\u9AD3",
    su\u00EC: "\u4E97\u5C81\u7815\u795F\u8C07\u57E3\u5D57\u9042\u6B72\u6B73\u716B\u775F\u788E\u96A7\u5B18\u6FBB\u7A42\u8AB6\u8CE5\u6A96\u71E7\u74B2\u79AD\u7A57\u7A5F\u7E40\u895A\u9083\u65DE\u7E50\u7E78\u8B62\u9406\u93F8\u9429\u97E2",
    s\u016Bn: "\u72F2\u836A\u5B6B\u55B0\u98E7\u98F1\u640E\u733B\u84C0\u69C2\u8575\u859E",
    s\u01D4n: "\u627B\u635F\u7B0B\u96BC\u7B4D\u640D\u69AB\u7BB0\u7C28\u93A8\u9DBD",
    s\u00F9n: "\u644C",
    su\u014D: "\u5506\u5A11\u6331\u838F\u838E\u509E\u6332\u686B\u68AD\u7743\u55CD\u55E6\u7FA7\u84D1\u644D\u8D96\u7C11\u7C14\u7E2E\u9BBB",
    su\u00F3: "",
    su\u01D2: "\u6240\u4E7A\u5522\u7D22\u7411\u7410\u5AC5\u60E2\u9501\u55E9\u669B\u6E91\u7355\u7463\u8928\u7485\u7E12\u938D\u9396\u93BB\u93C1",
    su\u00F2: "\u9024\u6EB9\u8736",
    sh\u0101: "\u6740\u6749\u7EB1\u4E77\u524E\u7802\u5526\u6331\u6BBA\u7300\u7C86\u7D17\u838E\u6332\u686C\u6BEE\u94E9\u75E7\u7870\u644B\u8531\u88DF\u699D\u6A27\u9B66\u9CA8\u95B7\u9AFF\u93A9\u9BCA\u9BCB\u7E7A",
    sh\u00E1: "\u5565",
    sh\u01CE: "\u50BB\u510D",
    sh\u00E0: "\u503D\u553C\u5551\u5E39\u83E8\u8410\u55A2\u55C4\u5EC8\u6B43\u7FDC\u6B70\u7B91\u7FE3\u6FC8\u95AF\u970E",
    sh\u0101i: "\u7B5B\u7BE9\u8AF0\u7C01\u7C1B\u7C6D",
    sh\u01CEi: "\u644B",
    sh\u00E0i: "\u6652\u6526\u66EC",
    sh\u0101n: "\u5C71\u5F61\u9096\u5738\u5220\u522A\u6749\u829F\u59CD\u59D7\u886B\u9490\u57CF\u633B\u67F5\u70B6\u72E6\u73CA\u8222\u75C1\u8120\u8ED5\u7B18\u91E4\u958A\u5093\u8DDA\u527C\u6427\u7154\u5607\u5E53\u717D\u6F78\u6F98\u7A47\u6A86\u7E3F\u81BB\u9BC5\u7FB4\u7FB6",
    sh\u00E1n: "",
    sh\u01CEn: "\u95EA\u9655\u70B6\u965D\u9583\u9584\u6671\u7154\u7752\u647B\u718C\u89A2",
    sh\u00E0n: "\u8BAA\u6C55\u59CD\u59D7\u759D\u9490\u5261\u8A15\u8D78\u639E\u91E4\u5584\u55AE\u692B\u7985\u928F\u9A9F\u50D0\u912F\u5103\u58A1\u58A0\u64A3\u6F6C\u7F2E\u5B17\u5DA6\u64C5\u657E\u6A3F\u6B5A\u79AA\u81B3\u78F0\u8B06\u8D61\u7E55\u87EE\u87FA\u8B71\u8D0D\u9425\u994D\u9A38\u9CDD\u9CE3\u7057\u9C53\u9C54",
    shang: "",
    sh\u0101ng: "\u4F24\u6B87\u5546\u6113\u6E6F\u89DE\u50B7\u7993\u5892\u616F\u6EF3\u6F21\u850F\u6BA4\u71B5\u87AA\u89F4\u8B2A\u9B3A",
    sh\u01CEng: "\u57A7\u6244\u664C\u57EB\u8D4F\u6A09\u8CDE\u92FF\u93DB\u8D18\u945C",
    sh\u00E0ng: "\u4E04\u5C19\u5C1A\u6066\u7EF1\u7DD4\u979D",
    sh\u0101o: "\u5A0B\u5F30\u70E7\u83A6\u713C\u8437\u65D3\u7B72\u8244\u8F0E\u8571\u71D2\u9798\u9AFE\u9BB9",
    sh\u00E1o: "\u52FA\u828D\u6753\u82D5\u67D6\u73BF\u97F6",
    sh\u01CEo: "",
    sh\u00E0o: "\u4F4B\u52AD\u5372\u90B5\u7ECD\u67D6\u54E8\u5A0B\u8891\u7D39\u7744\u7DA4\u6F72",
    sh\u0113: "\u5953\u5962\u731E\u8D4A\u756D\u756C\u7572\u8F0B\u8CD2\u8CD6\u6AA8",
    sh\u00E9: "\u820C\u4F58\u8675\u9607\u63F2\u86E5\u95CD\u78FC",
    sh\u011B: "\u820D\u6368",
    sh\u00E8: "\u538D\u8BBE\u793E\u6CCF\u820E\u820D\u5399\u6315\u6D89\u6DBB\u6E09\u8A2D\u8D66\u5F3D\u6151\u6442\u6EE0\u6174\u850E\u6B59\u8802\u97D8\u9A07\u61FE\u651D\u7044\u9E9D\u6B07",
    sh\u00E9i: "\u8AB0",
    sh\u0113n: "\u7533\u5C7E\u625F\u4F38\u8EAB\u4F81\u519E\u547B\u59BD\u7C76\u7EC5\u7F59\u8BDC\u59FA\u67DB\u6C20\u73C5\u7A7C\u7C78\u5A20\u5CF7\u7521\u7712\u7837\u8398\u53C3\u53C4\u5814\u6552\u6DF1\u7D33\u515F\u53C5\u68FD\u8460\u88D1\u8A37\u5AC0\u6437\u7F67\u84E1\u8A75\u5E53\u7527\u7CC1\u8518\u7CC2\u71CA\u8593\u99EA\u9CB9\u66D1\u7CDD\u7CE3\u9BD3\u9D62\u9BF5\u9C3A",
    sh\u00E9n: "\u795E\u698A\u926E\u9C30",
    sh\u011Bn: "\u90A5\u5432\u5F1E\u628C\u5BA1\u77E4\u54C2\u77E7\u5BB7\u8C02\u8C09\u5A76\u6DF0\u6E16\u8A20\u68EF\u5BE9\u8AD7\u9823\u9B6B\u66CB\u77AB\u5B38\u700B\u89BE\u8B85",
    sh\u00E8n: "\u80BE\u4FBA\u661A\u80C2\u6D81\u7718\u6E17\u7973\u8124\u8C0C\u814E\u845A\u613C\u614E\u6939\u7606\u8704\u8703\u6EF2\u92E0\u762E\u9EEE",
    sh\u0113ng: "\u5347\u751F\u9629\u544F\u58F0\u6598\u6607\u67A1\u6CE9\u72CC\u82FC\u6B85\u7272\u73C4\u7AD4\u965E\u66FB\u9679\u6BB8\u7B19\u6E66\u713A\u7525\u924E\u8072\u935F\u9F2A\u9D7F",
    sh\u00E9ng: "\u6E11\u7EF3\u61B4\u6FA0\u7E04\u7E49\u7E69\u8B5D",
    sh\u011Bng: "\u771A\u5057\u6E3B",
    sh\u00E8ng: "\u5723\u4E57\u5A0D\u80DC\u6660\u665F\u5270\u5269\u52DD\u6909\u8CB9\u5D4A\u741E\u8056\u58AD\u69BA\u8542\u6A73\u8CF8",
    shi: "\u8FBB\u7C42",
    sh\u012B: "\u5C38\u5931\u5E08\u5394\u545E\u8671\u8BD7\u90BF\u9E24\u5C4D\u65BD\u6D49\u72EE\u5E2B\u7D41\u91F6\u6E64\u6E7F\u8479\u6EAE\u6EBC\u7345\u8492\u84CD\u8A69\u9247\u5618\u7461\u917E\u9CF2\u5653\u7BB7\u8768\u9CFE\u8937\u9CBA\u6FD5\u9366\u9BF4\u9C24\u9DB3\u8979\u91C3",
    sh\u00ED: "\u5341\u9963\u4E6D\u65F6\u7ACD\u5B9F\u5B9E\u65F9\u98E0\u59FC\u5CD5\u70BB\u794F\u8680\u57D8\u5BB2\u6642\u83B3\u5BD4\u6E5C\u9048\u5852\u5D75\u6EA1\u8494\u9250\u5BE6\u69AF\u78A9\u8755\u9CA5\u9B96\u9F2B\u8B58\u9F2D\u9C23",
    sh\u01D0: "\u53F2\u77E2\u4E68\u8C55\u4F7F\u59CB\u9A76\u5158\u5BA9\u5C4E\u72F6\u75D1\u7B36\u6981\u9242\u99DB",
    sh\u00EC: "\u58EB\u793B\u4E17\u4E16\u4ED5\u5E02\u793A\u534B\u5F0F\u5FD5\u4E8A\u5FEF\u623A\u4E8B\u4F8D\u52BF\u5469\u67F9\u89C6\u8BD5\u9970\u519F\u54B6\u5BA4\u5CD9\u6040\u6043\u62ED\u6630\u662F\u67BE\u67FF\u72E7\u7702\u8D33\u9002\u683B\u70D2\u770E\u7721\u8006\u8210\u83B3\u8F7C\u901D\u94C8\u556B\u57F6\u7564\u79F2\u8996\u91C8\u5D3C\u5D3B\u5F11\u5FA5\u60FF\u63D3\u8C25\u8CB0\u91CA\u52E2\u55DC\u5F12\u6974\u7176\u7757\u7B6E\u8494\u89E2\u8A66\u8EFE\u9230\u9243\u98FE\u8213\u8A93\u9069\u927D\u99B6\u596D\u92B4\u991D\u9919\u566C\u5B15\u6FA8\u6FA4\u8AE1\u8ADF\u907E\u6AA1\u87AB\u8B1A\u7C2D\u896B\u91B3\u91CB\u9C18",
    sh\u014Du: "\u53CE\u6536\u654A",
    sh\u00F3u: "\u719F",
    sh\u01D2u: "\u624C\u624B\u5B88\u57A8\u9996\u824F",
    sh\u00F2u: "\u5BFF\u53D7\u72E9\u517D\u552E\u6388\u6DAD\u7EF6\u75E9\u8184\u58FD\u5900\u7626\u7DAC\u563C\u7363\u7378\u93C9",
    sh\u016B: "\u4E66\u6BB3\u758B\u5FEC\u6292\u7EBE\u53D4\u6778\u67A2\u964E\u59DD\u5010\u500F\u6348\u66F8\u6B8A\u7D13\u5A4C\u6086\u6393\u68B3\u6DD1\u7102\u83FD\u8ED7\u9103\u7421\u758E\u758F\u8212\u6445\u6BF9\u6BFA\u7D80\u8F93\u7479\u8DFE\u8E08\u6A1E\u7DF0\u852C\u8F38\u6A7E\u9B9B\u5135\u6504\u702D\u9D68",
    sh\u00FA: "\u672E\u5C17\u79EB\u5B70\u8D4E\u84A3\u587E\u719F\u74B9\u8D16",
    sh\u01D4: "\u9F21\u668F\u6691\u7A0C\u9ECD\u7F72\u8700\u9F20\u6578\u6F7B\u85A5\u85AF\u66D9\u7659\u85F7\u8961\u7CEC\u8969\u5C6C\u7C54\u8834\u9C6A\u9C70",
    sh\u00F9: "\u672E\u620D\u675F\u6CAD\u8FF0\u4FB8\u4FDE\u516A\u54B0\u6038\u6037\u6811\u7AD6\u8357\u6055\u6352\u5EBB\u5EB6\u7D49\u8481\u8853\u9683\u5C0C\u88CB\u7AEA\u8167\u9265\u5885\u6F31\u6F44\u6578\u6F8D\u8C4E\u6A39\u6FD6\u9330\u9714\u93E3\u9D90\u866A",
    shu\u0101: "\u5530",
    shu\u01CE: "\u800D",
    shu\u00E0: "\u8A9C",
    shu\u0101i: "\u7F1E\u6454\u7E17",
    shu\u01CEi: "\u7529",
    shu\u00E0i: "\u5E05\u5E25\u87C0\u535B",
    shu\u0101n: "\u95E9\u62F4\u9582\u6813\u7D5F",
    shu\u00E0n: "\u6DAE\u8168\u69EB",
    shu\u0101ng: "\u53CC\u6CF7\u971C\u96D9\u5B40\u7027\u9AA6\u5B47\u9A3B\u6B06\u7935\u9DDE\u9E74\u826D\u9A66\u9E18",
    shu\u01CEng: "\u723D\u587D\u6161\u6F3A\u7E14\u93EF",
    shu\u00E0ng: "\u7040",
    shu\u00ED: "\u8C01\u813D\u8AB0",
    shu\u01D0: "\u6C35\u6C34\u6C3A\u9596",
    shu\u00EC: "\u5E28\u6329\u635D\u6D97\u6D9A\u5A37\u7971\u7A05\u7A0E\u88DE\u7761\u8AAA\u8AAC",
    sh\u01D4n: "\u542E\u696F",
    sh\u00F9n: "\u987A\u7734\u821C\u9806\u8563\u6A53\u779A\u77A4\u77AC\u9B0A",
    shu\u014D: "\u8AAA\u8AAC",
    shu\u00F2: "\u5981\u6D2C\u70C1\u6714\u94C4\u6B36\u77DF\u6420\u84B4\u928F\u612C\u69CA\u7361\u78A9\u6578\u7BBE\u9399\u720D\u9460",
    ta: "\u4FA4",
    t\u0101: "\u4ED6\u5B83\u7260\u7942\u8DBF\u94CA\u584C\u6999\u6EBB\u9248\u891F\u95E7",
    t\u00E1: "",
    t\u01CE: "\u5854\u6E9A\u5896\u736D\u9B99\u9CCE\u737A\u9C28",
    t\u00E0: "\u6C93\u631E\u72E7\u95FC\u7C8F\u5D09\u6DBE\u509D\u55D2\u6428\u905D\u9062\u9618\u69BB\u6BFE\u6F2F\u79A2\u64BB\u6FBE\u8ABB\u8E0F\u9788\u5683\u6A7D\u9314\u6FCC\u8E4B\u979C\u9389\u9391\u95D2\u97B3\u8E79\u8E82\u56BA\u95DF\u95E5\u8B76\u8EA2",
    t\u0101i: "\u56FC\u5B61\u73C6\u80CE",
    t\u00E1i: "\u65F2\u90B0\u576E\u62AC\u9A80\u67B1\u70B1\u70B2\u83ED\u8DC6\u9C90\u7B88\u81FA\u98B1\u99D8\u5113\u9B90\u5B2F\u64E1\u85B9\u6AAF\u6584\u7C49",
    t\u01CEi: "\u5964",
    t\u00E0i: "\u592A\u51AD\u5933\u5FD5\u6C4F\u5FF2\u6C70\u6C71\u6001\u80BD\u949B\u6CF0\u8226\u915E\u9226\u6E99\u614B\u71E4",
    t\u0101n: "\u574D\u8D2A\u6039\u5574\u75D1\u8211\u8CAA\u644A\u6EE9\u563D\u6F6C\u762B\u64F9\u6524\u7058\u7671",
    t\u00E1n: "\u575B\u6619\u5013\u8C08\u90EF\u57EE\u5A52\u60D4\u5F3E\u8983\u6983\u75F0\u952C\u8C2D\u563E\u58B0\u58B5\u5F48\u619B\u6F6D\u8AC7\u9188\u58C7\u66C7\u6A5D\u6FB9\u71C2\u931F\u6A80\u9843\u7F48\u85EB\u58DC\u7E75\u8B5A\u8C9A\u91B0\u8B60\u7F4E",
    t\u01CEn: "\u5FD0\u5766\u8892\u94BD\u83FC\u6BEF\u50CB\u926D\u55FF\u7DC2\u5103\u61B3\u61BB\u66BA\u9193\u74AE\u8962",
    t\u00E0n: "\u53F9\u70AD\u5013\u57EE\u63A2\u509D\u6E60\u50CB\u5606\u78B3\u8215\u6B4E",
    t\u0101ng: "\u94F4\u6E6F\u5621\u528F\u7FB0\u876A\u859A\u9557\u8E5A\u93DC\u95DB\u97BA\u9F1E",
    t\u00E1ng: "\u5763\u5510\u5802\u508F\u557A\u6113\u68E0\u910C\u5858\u5D63\u642A\u6E8F\u84CE\u969A\u69B6\u6F1F\u717B\u746D\u799F\u8185\u6A18\u78C4\u7CC3\u819B\u6A56\u7BD6\u7CD6\u8797\u8E3C\u7CDB\u87B3\u8D6F\u91A3\u9395\u9939\u93DC\u95DB\u9944\u9DB6",
    t\u01CEng: "\u4F16\u5E11\u5052\u50A5\u8025\u8EBA\u954B\u93B2\u513B\u6203\u7059\u66ED\u7223\u77D8\u9482",
    t\u00E0ng: "\u70EB\u94F4\u6465\u71D9\u940B",
    t\u0101o: "\u5932\u5935\u5F22\u62AD\u6D9B\u7EE6\u638F\u6DAD\u7D5B\u8A5C\u5ACD\u5E4D\u6146\u642F\u6ED4\u69C4\u746B\u97EC\u98F8\u7E1A\u7E27\u6FE4\u8B1F\u8F41\u97B1\u97DC\u9955",
    t\u00E1o: "\u530B\u8FEF\u54B7\u6D2E\u9003\u6843\u9676\u5555\u68BC\u6DD8\u7EF9\u8404\u7979\u88EA\u7DAF\u872A\u9780\u9184\u9789\u92FE\u99E3\u6AAE\u9940\u9A0A\u9F17",
    t\u01CEo: "\u8BA8\u8A0E",
    t\u00E0o: "\u5957",
    t\u00E8: "\u5FD1\u5FD2\u7279\u8126\u7286\u94FD\u615D\u92F1\u87D8",
    t\u0113ng: "\u71A5\u81AF\u9F1F",
    t\u00E9ng: "\u75BC\u75CB\u5E50\u817E\u8A8A\u6F1B\u6ED5\u9086\u7E22\u87A3\u99E6\u8B04\u512F\u85E4\u9A30\u7C50\u9C27\u7C58\u8645\u9A63",
    t\u00E8ng: "\u972F",
    t\u012B: "\u5254\u68AF\u9511\u8E22\u92BB\u64FF\u9DC9\u9DC8\u9AD4",
    t\u00ED: "\u82D0\u5397\u8351\u684B\u7EE8\u504D\u73F6\u557C\u5A82\u5A9E\u5D39\u60FF\u6E27\u7A0A\u7F07\u7F64\u9046\u9E48\u55C1\u7445\u7994\u7D88\u777C\u78AE\u8906\u5FB2\u6F3D\u78C3\u7DF9\u855B\u9898\u8DA7\u8E44\u918D\u8B15\u8E4F\u9357\u9CC0\u984C\u9BB7\u9D5C\u9A20\u9BF7\u9D97\u9D99\u79B5\u9DE4",
    t\u01D0: "\u632E\u5FA5\u8EB0\u9AB5\u918D\u8EC6\u9AD4",
    t\u00EC: "\u623B\u5943\u5C49\u5243\u6711\u4FF6\u501C\u608C\u632E\u6D95\u7723\u7EE8\u9016\u5551\u5C5C\u6090\u60D5\u63A6\u7B39\u9037\u5C5F\u60D6\u63E5\u66FF\u68E3\u7D88\u88FC\u8905\u6B52\u6BA2\u9AF0\u8599\u568F\u9B00\u5694\u74CB\u9B04\u7C4A\u8DAF",
    ti\u0101n: "\u5929\u5172\u5451\u5A56\u6DFB\u915F\u9754\u9EC7\u975D",
    ti\u00E1n: "\u7530\u5C47\u6CBA\u606C\u7551\u754B\u76F7\u80CB\u94BF\u751B\u751C\u83FE\u6E49\u5861\u6437\u9617\u7471\u78B5\u7DC2\u78CC\u7AB4\u9D2B\u74B3\u95D0\u9DC6\u9DCF",
    ti\u01CEn: "\u5975\u5FDD\u6B84\u500E\u681D\u553A\u60BF\u6DDF\u7D3E\u94E6\u666A\u7420\u8146\u89CD\u75F6\u7753\u8214\u929B\u9902\u89A5\u8CDF\u92BD\u932A",
    ti\u00E0n: "\u63AD\u83FE\u7420\u7471\u821A",
    ti\u0101o: "\u65EB\u4F7B\u5EA3\u604C\u689D\u7967\u804E",
    ti\u00E1o: "\u8280\u6737\u5CA7\u5CB9\u82D5\u8FE2\u7952\u689D\u7B24\u8414\u94EB\u84DA\u84E8\u84E7\u9F86\u6A24\u8729\u929A\u8ABF\u92DA\u9797\u9AEB\u9CA6\u9BC8\u93A5\u9F60\u9C37",
    ti\u01CEo: "\u5BA8\u6640\u6713\u8101\u7A95\u8A82\u65A2\u7AB1\u5B25",
    ti\u00E0o: "\u5541\u773A\u7C9C\u7D69\u899C\u8D92\u7CF6",
    ti\u0113: "\u6017\u8D34\u841C\u8051\u8CBC\u8DD5",
    ti\u00E9: "",
    ti\u011B: "\u94C1\u86C8\u9244\u50E3\u9295\u9421\u9435\u9A56",
    ti\u00E8: "\u546B\u98FB\u992E",
    t\u012Bng: "\u5385\u5E81\u6C40\u542C\u5E8D\u8013\u539B\u70C3\u686F\u70F4\u6E1F\u7D8E\u9793\u8074\u807C\u5EF0\u807D\u5EF3",
    t\u00EDng: "\u9092\u5EF7\u4EAD\u5EAD\u839B\u505C\u5A77\u5D49\u6E1F\u7B73\u8476\u8713\u695F\u69B3\u95AE\u9706\u8064\u874F\u8AEA\u9F2E",
    t\u01D0ng: "\u5722\u753C\u753A\u4FB9\u4FB1\u5A17\u633A\u6D8F\u6883\u70F6\u73FD\u8121\u94E4\u8247\u988B\u8A94\u92CC\u95AE\u9832",
    t\u00ECng: "\u5FCA\u6883\u6FCE",
    t\u014Dng: "\u56F2\u70B5\u901A\u75CC\u7D67\u55F5\u84EA\u6A0B",
    t\u00F3ng: "\u4EDD\u4F5F\u5F64\u4F97\u5CC2\u5E9D\u54C3\u578C\u5CD2\u5CDD\u72EA\u833C\u664D\u6850\u6D75\u70D4\u783C\u8692\u5045\u75CC\u772E\u79F1\u94DC\u7867\u7AE5\u7CA1\u7D67\u8A77\u8D68\u916E\u9256\u50EE\u52ED\u9275\u9285\u9907\u9C96\u6F7C\u735E\u66C8\u6723\u6A66\u6C03\u71D1\u729D\u81A7\u77B3\u7A5C\u9BA6",
    t\u01D2ng: "\u4F97\u7EDF\u6345\u6876\u7B52\u7D71\u7B69\u7D82",
    t\u00F2ng: "\u6078\u75DB\u8855\u615F\u6185",
    tou: "",
    t\u014Du: "\u5078\u5077\u5A7E\u5AAE\u7DF0\u92C0\u936E",
    t\u00F3u: "\u4EA0\u6295\u9AB0\u982D",
    t\u01D2u: "\u59B5\u7D0F\u6568\u98F3\u65A2\u9EC8\u8623",
    t\u00F2u: "\u900F\u57F1",
    tu: "\u6C62",
    t\u016B: "\u51F8\u5B8A\u79BF\u79C3\u6022\u7A81\u6D8B\u6378\u5817\u6E65\u75DC\u8456\u5D80\u92F5\u9D5A\u9F35",
    t\u00FA: "\u56F3\u56FE\u51C3\u5CF9\u5EA9\u5F92\u6087\u6348\u6D82\u837C\u83B5\u9014\u555A\u5C60\u688C\u83DF\u63EC\u7A0C\u8D83\u5857\u5D5E\u760F\u7B61\u816F\u84A4\u922F\u5717\u5716\u5EDC\u6455\u6F73\u7479\u8DFF\u9174\u58BF\u999F\u6AA1\u934E\u99FC\u9D4C\u9D9F\u9DCB\u9DF5",
    t\u01D4: "\u571F\u5721\u948D\u550B\u91F7",
    t\u00F9: "\u514E\u8FCC\u5154\u550B\u83B5\u580D\u83DF\u92C0\u9D75",
    tu\u0101n: "\u6E4D\u732F\u5715\u7153\u8C92",
    tu\u00E1n: "\u56E3\u56E2\u629F\u5278\u5718\u587C\u6171\u6476\u6F19\u69EB\u7BFF\u6AB2\u93C4\u7CF0\u9DD2\u9DFB",
    tu\u01CEn: "\u757D\u58A5\u7583",
    tu\u00E0n: "\u5F56\u6E6A\u732F\u8916\u8C92",
    tu\u012B: "\u5FD2\u63A8\u84F7\u85EC\u8B89",
    tu\u00ED: "\u5F1A\u9893\u50D3\u96A4\u58A4\u5C35\u6A54\u983A\u9839\u983D\u9B4B\u7A68\u8608\u8E6A",
    tu\u01D0: "\u4FC0\u8049\u817F\u50D3\u8E46\u9ABD",
    tu\u00EC: "\u4FBB\u9000\u5A27\u717A\u86FB\u8715\u8781\u99FE",
    t\u016Bn: "\u541E\u5451\u65FD\u6D92\u554D\u671C\u711E\u564B\u619E\u66BE",
    t\u00FAn: "\u5749\u5E89\u5FF3\u829A\u9968\u86CC\u8C58\u8C5A\u8ED8\u98E9\u9C80\u9B68\u9715\u9ED7\u81C0\u81CB",
    t\u01D4n: "\u6C3D",
    t\u00F9n: "",
    tu\u014D: "\u4E47\u4EDB\u8BAC\u6258\u6261\u6C51\u9966\u6754\u4F82\u5483\u549C\u62D5\u62D6\u6CB0\u6329\u635D\u838C\u8889\u88A5\u8A17\u5574\u6DB6\u812B\u8131\u98E5\u99B2\u9B60\u9BB5",
    tu\u00F3: "\u9624\u9A6E\u4F57\u9640\u9641\u5768\u5CAE\u6CB1\u6CB2\u72CF\u9A7C\u4FBB\u67C1\u7824\u7823\u8889\u94CA\u9E35\u7D3D\u5836\u5AA0\u8A51\u8DCE\u9161\u78A2\u9248\u99B1\u69D6\u99C4\u92D6\u99DE\u99DD\u6A50\u9B80\u9D15\u9F27\u9A28\u9F0D\u9A52\u9A5D\u9F09",
    tu\u01D2: "\u5F75\u59A5\u5EB9\u692D\u6955\u5AF7\u64B1\u6A62\u9D4E\u9C16",
    tu\u00F2: "\u675D\u67DD\u6BE4\u553E\u6DB6\u841A\u8DC5\u6BFB\u5D9E\u7BA8\u8600\u7C5C",
    wa: "\u54C7",
    w\u0101: "\u5C72\u7A75\u5459\u52B8\u54BC\u54C7\u5F8D\u6316\u6D3C\u5A32\u7556\u7A8A\u5532\u5558\u5AA7\u7A90\u55D7\u74FE\u86D9\u6432\u6E9B\u6F25\u7AAA\u9F03\u6528\u97C8",
    w\u00E1: "\u5A03",
    w\u01CE: "\u4F64\u90B7\u5493\u7819\u74F8\u6432",
    w\u00E0: "\u5E13\u889C\u5A60\u8049\u55E2\u6432\u817D\u8183\u97CE\u896A\u97E4",
    wai: "",
    w\u0101i: "\u5459\u54BC\u6B6A\u558E\u7AF5\u7024",
    w\u01CEi: "\u5D34",
    w\u00E0i: "\u5916\u9861",
    w\u0101n: "\u6BCC\u5917\u5F2F\u525C\u57E6\u5A60\u5E35\u6365\u5846\u6E7E\u7755\u873F\u6F6B\u8C4C\u92FA\u5F4E\u58EA\u7063",
    w\u00E1n: "\u4E38\u5213\u6C4D\u7EA8\u8284\u5B8C\u5C8F\u5FE8\u628F\u676C\u73A9\u7B02\u7D08\u6356\u8696\u987D\u70F7\u7413\u8CA6\u9811\u7FEB",
    w\u01CEn: "\u5918\u5917\u5007\u550D\u633D\u76CC\u839E\u83AC\u57E6\u5A49\u60CB\u6365\u665A\u6665\u689A\u6DB4\u7EFE\u8118\u83C0\u8416\u60CC\u6669\u667C\u6900\u742C\u7696\u7579\u7897\u7BA2\u7DA9\u7DB0\u8F13\u8E20\u92D4\u92FA",
    w\u00E0n: "\u534D\u5350\u59A7\u6764\u6365\u8115\u6394\u8155\u842C\u7D7B\u7D84\u8F10\u69FE\u6FAB\u92C4\u77A3\u858D\u933D\u87C3\u8D03\u93AB\u8D0E",
    w\u0101ng: "\u5C23\u5C2B\u5C2A\u6C6A\u5C29\u7007",
    w\u00E1ng: "\u4EBE\u5166\u4EFC\u83A3\u869F\u671A",
    w\u01CEng: "\u7F53\u7F52\u7F51\u5F7A\u5FF9\u6282\u5F83\u5F80\u6789\u7F56\u7F54\u8FEC\u60D8\u83F5\u6680\u68E2\u86E7\u8F8B\u7DB2\u8744\u8AB7\u8F1E\u7007\u9B4D",
    w\u00E0ng: "\u5984\u5FD8\u8FCB\u65FA\u76F3\u5F8D\u671B\u6680\u6722",
    w\u0113i: "\u5383\u5371\u5A01\u502D\u70D3\u504E\u9036\u9687\u9688\u55B4\u5A99\u5D34\u5D54\u6104\u63CB\u63FB\u8468\u8473\u5FAE\u6933\u6972\u6EA6\u7168\u8A74\u8732\u7E05\u875B\u89A3\u5DB6\u8587\u71F0\u9CC2\u7650\u7653\u5DCD\u9C03\u9C04\u973A",
    w\u00E9i: "\u56D7\u97E6\u5729\u56F2\u56F4\u5E0F\u6CA9\u8FDD\u95F1\u96B9\u5CD7\u5CDE\u6D08\u70BA\u97CB\u6845\u6DA0\u552F\u5E37\u60DF\u7859\u7EF4\u55A1\u570D\u5A81\u5D6C\u5E43\u6E4B\u6E88\u7232\u741F\u9055\u6F4D\u7DAD\u84F6\u912C\u649D\u6F59\u6F7F\u9180\u6FF0\u934F\u95C8\u9BA0\u58DD\u77C0\u89B9\u72A9\u6B08",
    w\u011Bi: "\u4F1F\u4F2A\u7EAC\u829B\u82C7\u709C\u73AE\u6D27\u5A13\u5C57\u6364\u6D58\u8371\u8BFF\u5049\u507D\u5529\u5D23\u637C\u68B6\u75CF\u784A\u840E\u9697\u9AA9\u5A81\u5D54\u5EC6\u5FAB\u6107\u6E28\u7325\u8466\u848D\u9AAB\u9AAA\u6690\u6932\u7152\u744B\u75FF\u8172\u8249\u97EA\u50DE\u5D89\u64B1\u78A8\u78C8\u9C94\u5BEA\u7DEF\u853F\u8AC9\u8E13\u97D1\u9820\u85B3\u5130\u6FFB\u9361\u9BAA\u7022\u97D9\u98B9\u97E1\u4EB9\u74D7\u6596",
    w\u00E8i: "\u536B\u672A\u4F4D\u5473\u82FF\u70BA\u754F\u80C3\u53DE\u8ECE\u731A\u7859\u83CB\u8C13\u5582\u55A1\u5AA6\u6E2D\u7232\u732C\u715F\u589B\u7786\u78A8\u851A\u873C\u6170\u71AD\u729A\u78D1\u7DED\u875F\u885B\u61C0\u7F7B\u885E\u8B02\u9927\u9B87\u87B1\u893D\u9935\u9B4F\u85EF\u8F4A\u93CF\u9728\u9CDA\u8636\u9956\u74D7\u8B86\u8E97\u8B8F\u8E9B",
    w\u0113n: "\u6637\u586D\u6E29\u7F0A\u6985\u6B9F\u6EAB\u7465\u8F92\u97EB\u69B2\u761F\u7DFC\u7E15\u8C71\u8F3C\u8F40\u93BE\u9942\u9CC1\u97B0\u9C1B\u9C2E",
    w\u00E9n: "\u6587\u5F63\u82A0\u7086\u739F\u95FB\u7D0B\u8689\u868A\u73F3\u960C\u96EF\u7612\u805E\u99BC\u99C7\u9B70\u9CFC\u9D0D\u87A1\u95BA\u95BF\u87C1\u95C5\u9F24\u7E67\u95E6",
    w\u011Bn: "\u4F06\u520E\u543B\u5445\u5FDF\u6286\u5461\u5FDE\u6B7E\u80B3\u7D0A\u687D\u8117\u7A33\u7A4F\u7A69",
    w\u00E8n: "\u95EE\u598F\u6C76\u7D0B\u83AC\u554F\u6E02\u63FE\u6435\u7D7B\u9850\u74BA",
    w\u0113ng: "\u7FC1\u55E1\u6EC3\u9E5F\u806C\u8789\u9393\u9DB2",
    w\u011Bng: "\u52DC\u5963\u5855\u5D61\u6EC3\u84CA\u66A1\u7788\u651A",
    w\u00E8ng: "\u74EE\u8579\u7515\u7F4B\u9F46",
    w\u014D: "\u631D\u502D\u83B4\u5529\u6DB9\u6E26\u7327\u8435\u5594\u7A9D\u7AA9\u8717\u64BE\u6FC4\u7DFA\u8778\u8E12\u85B6",
    w\u01D2: "\u5459\u6211\u54BC\u5A51\u5A50\u6370",
    w\u00F2: "\u4EF4\u6C83\u809F\u5367\u6782\u81E5\u5053\u637E\u6DB4\u5A89\u5E44\u63E1\u6E25\u7125\u786A\u6943\u815B\u65A1\u7783\u6FE3\u74C1\u81D2\u9F8C\u99A7\u9F8F\u9F77",
    w\u016B: "\u4E4C\u572C\u5F19\u625C\u625D\u6C5A\u6C59\u6C61\u90AC\u545C\u5DEB\u6745\u6747\u65BC\u5C4B\u6D3F\u8BEC\u94A8\u70CF\u526D\u7A8F\u91EB\u60E1\u9114\u55DA\u8A88\u50EB\u6B4D\u8AA3\u7BBC\u92D8\u8790\u9D2E\u93A2\u9C1E",
    w\u00FA: "\u65E0\u6BCB\u5433\u5434\u543E\u5449\u829C\u90DA\u5514\u5A2A\u5CFF\u6D16\u6D6F\u8323\u8381\u68A7\u73F8\u7966\u7121\u94FB\u9E40\u8708\u58B2\u856A\u92D9\u92D8\u6A46\u7491\u87F1\u9BC3\u9D50\u8B55\u9F2F\u9DE1",
    w\u01D4: "\u4E44\u4E94\u5348\u4EF5\u4F0D\u59A9\u5E91\u5FE4\u6003\u8FD5\u65FF\u6B66\u739D\u4FAE\u5035\u5A12\u6342\u901C\u965A\u554E\u5A2C\u727E\u5825\u73F7\u6440\u7894\u9E49\u7193\u7466\u821E\u5AF5\u5EE1\u61AE\u6F55\u511B\u7512\u81B4\u77B4\u9D61\u8E8C",
    w\u00F9: "\u5140\u52FF\u52A1\u620A\u9622\u5C7C\u6264\u575E\u5C89\u674C\u6C95\u82B4\u5FE2\u65FF\u7269\u77F9\u4FC9\u537C\u6544\u67EE\u8BEF\u52D9\u5514\u5A2A\u609F\u609E\u60AE\u7C85\u8DB6\u6664\u7110\u5A7A\u5D4D\u60E1\u6E1E\u75E6\u9696\u9770\u9A9B\u5862\u5966\u5D68\u6EA9\u96FA\u96FE\u50EB\u5BE4\u7183\u8AA4\u9E5C\u92C8\u7AB9\u971A\u9F3F\u9727\u9F40\u8601\u9A16\u9DA9",
    x\u012B: "\u5915\u516E\u909C\u5438\u5FDA\u6271\u6C50\u897F\u5E0C\u6278\u5365\u6614\u6790\u77FD\u7A78\u80B8\u80B9\u4FD9\u54A5\u54AD\u5F86\u6038\u6053\u8BF6\u90D7\u997B\u550F\u595A\u5A2D\u5C56\u606F\u6095\u6C25\u6D60\u727A\u72F6\u8383\u553D\u6089\u60DC\u665E\u6878\u6B37\u6DC5\u6E13\u70EF\u7101\u7108\u740B\u7852\u7F9B\u83E5\u8D65\u91F8\u5092\u60C1\u6670\u6673\u711F\u712C\u7280\u774E\u7A00\u7C9E\u7FD6\u7FD5\u823E\u910E\u5380\u5D60\u5FAF\u6EAA\u7155\u7699\u788F\u84A0\u88FC\u9521\u50D6\u69BD\u7184\u7188\u7199\u7361\u7DC6\u8725\u89A1\u8A92\u8C68\u95AA\u990F\u563B\u564F\u5B06\u5B09\u5DB2\u6198\u6F5D\u761C\u78CE\u819D\u51DE\u66BF\u6A28\u6A40\u6B59\u71BB\u71BA\u71B9\u7AB8\u7FB2\u8785\u8787\u932B\u71E8\u72A0\u77A6\u7902\u87CB\u8C40\u8C3F\u8C6F\u8C95\u8E4A\u5DC2\u7CE6\u7E65\u91D0\u96DF\u9BD1\u9D57\u89F9\u8B46\u91AF\u93ED\u940A\u96B5\u56B1\u5DC7\u66E6\u7214\u72A7\u9145\u994E\u89FD\u9F37\u8835\u9E02\u89FF\u9474",
    x\u00ED: "\u4E60\u90CB\u5E2D\u7FD2\u88AD\u89CB\u96ED\u55BA\u5AB3\u693A\u84B5\u84C6\u5D8D\u6F1D\u8D98\u69E2\u8582\u96B0\u6A84\u8B35\u93B4\u972B\u9CDB\u98C1\u9A31\u9A3D\u9C3C\u8972\u9A68",
    x\u01D0: "\u676B\u67B2\u73BA\u5F99\u559C\u8448\u8478\u9222\u9269\u9268\u5C63\u6F07\u84F0\u9291\u6198\u6199\u66BF\u6A72\u6B56\u79A7\u8AF0\u58D0\u7E30\u8B11\u9CC3\u87E2\u8E5D\u91D0\u74BD\u9C13\u74D5\u9C5A\u56CD\u77D6\u7E9A\u8EA7",
    x\u00EC: "\u5338\u534C\u6262\u5C43\u5FFE\u9969\u546C\u5FE5\u602C\u7EC6\u90C4\u9491\u4FC2\u6044\u6B2A\u76FB\u90E4\u5C53\u6B2F\u7EE4\u7D30\u91F3\u960B\u5092\u6461\u691E\u8203\u8204\u8D87\u9699\u613E\u6140\u6ECA\u798A\u7D8C\u84B5\u8D69\u969F\u588D\u7182\u7294\u7A27\u622F\u6F5F\u6F99\u856E\u89A4\u6231\u7E18\u9ED6\u6232\u78F6\u8669\u993C\u9B29\u7E6B\u95DF\u973C\u5C6D\u884B",
    xi\u0101: "\u5477\u8672\u75A8\u867E\u8C3A\u5084\u9595\u7146\u98AC\u7615\u778E\u8766\u9C15",
    xi\u00E1: "\u5323\u4FA0\u72CE\u4FE0\u5CE1\u67D9\u70A0\u72ED\u965C\u57C9\u5CFD\u70DA\u72F9\u73E8\u796B\u637E\u7856\u7B1A\u7FC8\u823A\u967F\u5FA6\u7864\u9050\u656E\u6687\u7455\u7B6A\u821D\u7615\u78AC\u8F96\u78CD\u8578\u7E16\u879B\u8D6E\u9B7B\u8F44\u935C\u971E\u938B\u9EE0\u9A22\u9DB7",
    xi\u01CE: "\u9595\u959C",
    xi\u00E0: "\u4E05\u4E0B\u4E64\u5737\u8290\u759C\u590F\u68BA\u5EC8\u7771\u8AD5\u5687\u61D7\u7F45\u5913\u93BC\u93EC",
    xi\u0101n: "\u4EDA\u4ED9\u5C73\u5148\u597E\u4F61\u5FFA\u6C19\u6774\u6B26\u7946\u79C8\u82EE\u59FA\u67AE\u7C7C\u73D7\u83B6\u6380\u94E6\u641F\u7D85\u8DF9\u9170\u9528\u50CA\u50F2\u5615\u647B\u929B\u66B9\u92BD\u97EF\u5B10\u61B8\u859F\u9341\u7E4A\u893C\u97F1\u9BAE\u8E6E\u99A6\u5B45\u5EEF\u6515\u91B6\u7E8E\u9DB1\u8973\u8E9A\u7E96\u9C7B",
    xi\u00E1n: "\u4F2D\u549E\u95F2\u5481\u59B6\u5F26\u81E4\u8D24\u54B8\u550C\u6326\u6D8E\u73B9\u76F7\u80D8\u5A34\u5A39\u5A71\u7D43\u8237\u86BF\u8854\u5563\u6E7A\u75EB\u86DD\u9591\u9592\u9E47\u55DB\u5ACC\u6E93\u8858\u7509\u929C\u5AFB\u5AFA\u61AA\u648F\u6F96\u7A34\u7FAC\u8AB8\u8CE2\u8AF4\u8F31\u918E\u7647\u764E\u77AF\u85D6\u7925\u9E79\u9E99\u8D12\u9466\u9DF4\u9DFC\u9DF3",
    xi\u01CEn: "\u5F61\u51BC\u72DD\u663E\u9669\u5D04\u6BE8\u70CD\u7303\u86AC\u967A\u8D7B\u7B45\u5C1F\u5C20\u641F\u7992\u8706\u8DE3\u9291\u7BB2\u96AA\u5DAE\u736B\u736E\u85D3\u934C\u9BAE\u71F9\u9855\u5E70\u6507\u6AF6\u861A\u8B63\u7381\u97C5\u986F\u7066",
    xi\u00E0n: "\u549E\u5C98\u82CB\u898B\u73B0\u7EBF\u81FD\u9650\u59ED\u5BAA\u770C\u9665\u54EF\u57B7\u5A0A\u5CF4\u6D80\u83A7\u8ED0\u9677\u57F3\u665B\u73FE\u784D\u9985\u774D\u7D64\u7D96\u7F10\u7FA1\u586A\u641A\u6E93\u732E\u7CAF\u7FA8\u817A\u50E9\u50F4\u69CF\u7DAB\u8AA2\u61AA\u648A\u7DDA\u92E7\u61B2\u6A4C\u6A7A\u7E23\u930E\u9921\u58CF\u61E2\u8C4F\u9EB2\u7017\u81D4\u737B\u7CEE\u93FE\u9730\u9F38",
    xi\u0101ng: "\u4E61\u8297\u9999\u90F7\u53A2\u554D\u9109\u910A\u5EC2\u6E58\u7F03\u842B\u8459\u9115\u697F\u7A25\u858C\u7BB1\u7DD7\u81B7\u8944\u5134\u52F7\u5FC0\u9AA7\u9E98\u6B00\u74D6\u9576\u9C5C\u7E95\u9472\u9A64",
    xi\u00E1ng: "\u5905\u74E8\u4F6D\u5EA0\u7F8F\u6819\u7965\u7D74\u7FD4\u8A73\u8DED",
    xi\u01CEng: "\u4EAB\u4EAF\u54CD\u8683\u9977\u6651\u98E8\u60F3\u9284\u9909\u9C9E\u8801\u9B9D\u9BD7\u97FF\u9957\u995F\u9C76",
    xi\u00E0ng: "\u5411\u59E0\u9879\u73E6\u8C61\u7F3F\u8856\u9805\u50CF\u52E8\u5D91\u6F52\u9297\u95A7\u66CF\u6A61\u8950\u95C2\u56AE\u87D3\u940C\u9C4C",
    xi\u0101o: "\u7072\u7071\u547A\u67AD\u4FBE\u54D3\u67B5\u9A81\u5BAF\u5BB5\u5EA8\u6D88\u70CB\u7EE1\u83A6\u8653\u900D\u9E2E\u5A4B\u689F\u7107\u7307\u8427\u75DA\u75DF\u7744\u7863\u785D\u7A99\u7FDB\u9500\u55C3\u63F1\u7D83\u86F8\u5610\u6B4A\u6F47\u7187\u7BAB\u8E03\u5635\u61A2\u64A8\u735F\u7362\u7BBE\u92B7\u9704\u9AB9\u5F47\u81AE\u856D\u98B5\u9B48\u9D1E\u7A58\u7C18\u85C3\u87C2\u87CF\u9D35\u56A3\u701F\u7C2B\u87F0\u9AC7\u6AF9\u56BB\u56C2\u9AD0\u9DCD\u8828\u9A4D\u6BCA\u8648",
    xi\u00E1o: "\u59E3\u6D28\u90E9\u5D24\u6DC6\u8A24\u6BBD\u8AB5",
    xi\u01CEo: "\u5C0F\u6653\u6681\u7B71\u7B7F\u769B\u66C9\u7BE0\u8B0F\u76A2",
    xi\u00E0o: "\u5B5D\u52B9\u54B2\u6054\u4FF2\u54EE\u6548\u6D8D\u7B11\u5578\u509A\u6569\u6BBD\u55C3\u8A68\u560B\u5628\u8A9F\u562F\u8582\u6B57\u71BD\u6585\u6586",
    xi\u0113: "\u5A0E\u63F3\u7332\u6954\u6B47\u6ECA\u7366\u874E\u880D",
    xi\u00E9: "\u52A6\u534F\u65EA\u5354\u80C1\u57A5\u594A\u5CEB\u604A\u62F9\u633E\u8107\u8105\u810B\u887A\u5055\u659C\u688B\u8C10\u7D5C\u7FD3\u9889\u55CB\u6136\u6140\u641A\u643A\u744E\u7D8A\u7181\u818E\u9C91\u52F0\u64B7\u64D5\u7DF3\u7E00\u7F2C\u8762\u978B\u8AE7\u71F2\u9BAD\u56A1\u64F7\u97B5\u5136\u896D\u5B48\u651C\u8B97\u9FA4",
    xi\u011B: "\u5199\u51A9\u5BEB\u85DB",
    xi\u00E8: "\u4F33\u707A\u6CFB\u7944\u7EC1\u7F37\u5378\u67BB\u6D29\u70A8\u70A7\u5368\u5C51\u6827\u505E\u5070\u5FA2\u68B0\u70F2\u710E\u79BC\u7D32\u4EB5\u5A9F\u5C5F\u6E2B\u7D4F\u7D6C\u8C22\u50C1\u586E\u89DF\u89E7\u698D\u699D\u69AD\u8909\u977E\u5667\u5BEB\u5C67\u66AC\u6A27\u78BF\u7DE4\u5DB0\u5EE8\u61C8\u6FA5\u736C\u7CCF\u85A4\u85A2\u9082\u97F0\u71EE\u893B\u8B1D\u5911\u7009\u97A2\u97D8\u7023\u7215\u7E72\u87F9\u880F\u9F58\u9F5B\u7E88\u9F65\u9F42\u8EA0\u8E9E",
    x\u012Bn: "\u5FC4\u5FC3\u90A4\u59A1\u5FFB\u8F9B\u6615\u677A\u6B23\u76FA\u4FFD\u8398\u60DE\u8A22\u920A\u950C\u65B0\u6B46\u5EDE\u92C5\u567A\u5677\u5B1C\u85AA\u99A8\u946B\u99AB",
    x\u00EDn: "\u6794\u8951\u9561\u7925\u9414",
    x\u01D0n: "\u4F08",
    x\u00ECn: "\u9620\u4F29\u56DF\u5B5E\u7098\u8ED0\u812A\u8845\u8A2B\u6116\u712E\u99B8\u9856\u820B\u91C1",
    x\u012Bng: "\u72CC\u661F\u57B6\u9A8D\u60FA\u7329\u714B\u7446\u8165\u89EA\u7BB5\u7BC2\u8208\u8B03\u9B8F\u66D0\u89F2\u9A02\u76A8\u9BF9",
    x\u00EDng: "\u5211\u90A2\u9967\u5DE0\u5F62\u9649\u4F80\u90C9\u54D8\u578B\u6D10\u8365\u9498\u9658\u5A19\u784E\u94CF\u9203\u86F5\u6ECE\u9276\u9292\u92DE\u9933",
    x\u01D0ng: "\u7772\u9192\u64E4",
    x\u00ECng: "\u674F\u59D3\u5E78\u6027\u8347\u5016\u8395\u5A5E\u60BB\u6DAC\u8455\u7772\u7DC8\u92DE\u5B39\u81D6",
    xi\u014Dng: "\u51F6\u5302\u5144\u5147\u5308\u828E\u8BBB\u5FF7\u6C79\u54C5\u605F\u6D36\u80F7\u80F8\u8A29\u8A7E\u8CEF",
    xi\u00F3ng: "\u96C4\u718A\u718B",
    xi\u01D2ng: "\u713D\u7138",
    xi\u00F2ng: "\u8BC7\u8A57\u5910\u657B",
    xi\u016B: "\u4FE2\u4FEE\u54BB\u5EA5\u70CC\u70CB\u7F9E\u8129\u8119\u9E3A\u81F9\u8C85\u9990\u6A07\u929D\u9AE4\u9AF9\u9380\u9BB4\u9D42\u93C5\u9948\u9C43\u98CD",
    xi\u00FA: "\u82EC",
    xi\u01D4: "\u673D\u6EEB\u6F43\u7CD4",
    xi\u00F9: "\u79C0\u5CAB\u5CC0\u73DB\u7EE3\u8896\u7407\u9508\u55C5\u6EB4\u7D89\u7493\u890F\u890E\u92B9\u8791\u568A\u7E4D\u93C5\u7E61\u93E5\u93FD\u9F45",
    x\u016B: "\u5729\u620C\u65F4\u59C1\u759E\u76F1\u6B28\u7809\u80E5\u987B\u7717\u8A0F\u987C\u5066\u8657\u865A\u88C7\u8A31\u8C1E\u5AAD\u63DF\u6B3B\u6E4F\u6E51\u865B\u9808\u6948\u7D87\u980A\u5618\u589F\u7A30\u84F2\u9700\u9B46\u5653\u5B03\u6B54\u7DF0\u7E03\u8566\u8751\u6B58\u85C7\u8ADD\u71F8\u8B43\u9B56\u9A49\u9450\u9B1A",
    x\u00FA: "\u4FC6\u5194\u5F90\u7991\u84A3",
    x\u01D4: "\u5474\u59C1\u8BE9\u6D52\u6829\u73DD\u55A3\u6E51\u86E1\u668A\u8A61\u6EF8\u7A30\u9126\u7CC8\u8AFF\u9191\u76E8",
    x\u00F9: "\u65ED\u4F35\u5E8F\u65F4\u6C7F\u82A7\u4F90\u5379\u59B6\u6034\u6C80\u53D9\u6053\u6064\u662B\u6710\u6D2B\u57BF\u6647\u6B30\u6B88\u70C5\u73EC\u52D7\u52D6\u5590\u60D0\u639D\u654D\u6558\u6DE2\u70FC\u7EEA\u7EED\u86BC\u9157\u58FB\u5A7F\u6702\u6E86\u77DE\u7D6E\u8053\u8A39\u6149\u6EC0\u7166\u7D9A\u84C4\u8CC9\u69D2\u6F35\u6F4A\u76E2\u7781\u7DD2\u805F\u84FF\u928A\u563C\u735D\u7A38\u7DD6\u85C7\u85DA\u7E8C\u9C6E",
    xu\u0101n: "\u5405\u8F69\u660D\u54BA\u5BA3\u5F32\u6645\u8ED2\u688B\u8C16\u55A7\u5847\u5A97\u6103\u610B\u63CE\u8432\u8431\u6684\u714A\u7444\u84D2\u777B\u5107\u79A4\u7BAE\u7FE7\u8756\u92D7\u5B1B\u61C1\u857F\u8AE0\u8AFC\u9799\u99E8\u9379\u99FD\u77CE\u7FFE\u85FC\u8610\u8809\u8B5E\u9C1A\u8B82",
    xu\u00E1n: "\u7384\u4F2D\u59B6\u73B9\u75C3\u60AC\u7401\u8701\u5AD9\u6F29\u66B6\u7487\u7E23\u6A88\u74BF\u61F8",
    xu\u01CEn: "\u54BA\u9009\u70DC\u559B\u6685\u9078\u7663\u766C",
    xu\u00E0n: "\u6030\u6CEB\u6621\u70AB\u7EDA\u7729\u88A8\u94C9\u7404\u7734\u8852\u6E32\u7D62\u6965\u6966\u9249\u5910\u657B\u78B9\u8519\u955F\u98B4\u7E3C\u7E4F\u93C7\u8D19",
    xu\u0113: "\u75B6\u8486\u9774\u859B\u8FA5\u8FAA\u97BE",
    xu\u00E9: "\u7A74\u6588\u4E74\u5B66\u5CC3\u8313\u6CF6\u8895\u9E34\u6569\u8E05\u5671\u58C6\u5B78\u5DA8\u6FA9\u71E2\u89F7\u9DFD",
    xu\u011B: "\u5F50\u96EA\u6A30\u81A4\u825D\u8F4C\u9CD5\u9C48",
    xu\u00E8: "\u5437\u5779\u5CA4\u6034\u6CEC\u72D8\u75A6\u6856\u8C11\u6EC8\u8D90\u8B14\u77B2\u7025",
    x\u016Bn: "\u5743\u52CB\u57D9\u7104\u52DB\u5864\u7147\u7AA8\u52F2\u52F3\u85AB\u5691\u58CE\u736F\u85B0\u66DB\u71FB\u81D0\u77C4\u860D\u58E6\u720B\u7E81\u91BA",
    x\u00FAn: "\u5EF5\u5BFB\u5DE1\u65EC\u674A\u7543\u8BE2\u90C7\u54B0\u59F0\u5CCB\u6042\u6D35\u6D54\u7D03\u8340\u8368\u6812\u686A\u6BE5\u73E3\u5071\u7734\u5C0B\u5FAA\u63D7\u8A62\u9129\u9C9F\u565A\u6F6F\u8541\u6533\u6A33\u71C5\u71D6\u7495\u99E8\u87EB\u87F3\u7213\u9C58\u9C4F\u7065",
    x\u00F9n: "\u5342\u8BAD\u8BAF\u4F28\u6C5B\u8FC5\u9A6F\u4F9A\u5DFA\u5F87\u72E5\u8FFF\u900A\u5B6B\u6B89\u6BE5\u6D5A\u8A0A\u8A13\u8A19\u595E\u5DFD\u6BBE\u7A04\u905C\u99B4\u613B\u5640\u6F60\u8548\u6FEC\u720B\u9868\u9DBD\u9442",
    ya: "",
    y\u0101: "\u4E2B\u5727\u5416\u4E9E\u5E98\u62BC\u6792\u57AD\u9E26\u6860\u9E2D\u555E\u5B72\u94D4\u690F\u9D09\u930F\u9D28\u58D3\u9D76\u941A",
    y\u00E1: "\u7259\u4F22\u5391\u5C88\u82BD\u5393\u62C1\u740A\u7B0C\u869C\u5810\u5D15\u5D16\u6DAF\u731A\u91FE\u775A\u8859\u6F04\u9F56",
    y\u01CE: "\u758B\u538A\u5E8C\u631C\u75A8\u5516\u555E\u6397\u75D6\u96C5\u7602\u8565",
    y\u00E0: "\u529C\u5720\u8F67\u4E9A\u51B4\u897E\u8980\u8BB6\u4E9C\u72BD\u8FD3\u4E9E\u73A1\u8ECB\u59F6\u5A05\u631C\u7811\u4FF9\u6C29\u57E1\u5A6D\u6397\u8A1D\u94D4\u63E0\u6C2C\u7330\u8050\u5714\u693B\u7A0F\u78A3\u7AAB\u6F5D\u78CD\u58D3\u74DB\u9F7E",
    y\u0101n: "\u6079\u5266\u70DF\u73DA\u80ED\u5D26\u6DCA\u6DF9\u7111\u7109\u83F8\u9609\u6B97\u6E30\u6E6E\u50BF\u6B45\u7159\u787D\u9122\u5AE3\u6F39\u5D96\u6A2E\u9183\u6A6A\u95B9\u95BC\u5B2E\u61E8\u7BF6\u61D5\u81D9\u9EEB\u9EF0",
    y\u00E1n: "\u8BA0\u5383\u5EF6\u95EB\u4E25\u598D\u82AB\u8A01\u8A00\u5CA9\u6616\u6CBF\u708F\u708E\u90D4\u550C\u57CF\u59F8\u5A2B\u72FF\u839A\u5A2E\u68B4\u76D0\u5571\u7402\u784F\u8A2E\u9586\u960E\u55A6\u5D53\u5D52\u7B75\u7D96\u8712\u5869\u63C5\u694C\u8A7D\u789E\u8505\u7FAC\u989C\u53B3\u8664\u95BB\u6A90\u984F\u9854\u56B4\u58DB\u5DCC\u7C37\u6AE9\u58E7\u5DD6\u5DD7\u6B15\u7939\u9E7D\u9EA3",
    y\u01CEn: "\u5935\u6281\u6C87\u4E75\u5156\u4FE8\u5157\u533D\u5F07\u884D\u5261\u5043\u53A3\u639E\u63A9\u773C\u8412\u90FE\u9153\u9681\u5D43\u611D\u624A\u63DC\u667B\u68EA\u6E30\u6E37\u7430\u9043\u9692\u693C\u787D\u7F68\u88FA\u6F14\u8917\u622D\u7AB4\u8758\u9B47\u565E\u5B10\u8EBD\u7E2F\u6ABF\u9EE1\u53B4\u7517\u9C0B\u9DA0\u9EE4\u513C\u9EEC\u9EED\u9F91\u5B4D\u9869\u9F34\u5DD8\u5DDA\u66EE\u9B58\u9F39\u7939\u9F74\u9EF6",
    y\u00E0n: "\u538C\u599F\u89C3\u726A\u533D\u59F2\u5F65\u5F66\u6D1D\u781A\u5501\u5BB4\u664F\u70FB\u8273\u898E\u9A8C\u5050\u639E\u7114\u730F\u784F\u8C1A\u9681\u55AD\u5830\u6565\u68EA\u6B97\u7131\u7130\u7312\u786F\u96C1\u50BF\u693B\u6E8E\u6EDF\u8C63\u9CEB\u53AD\u5895\u66A5\u7196\u917D\u9CF1\u5B0A\u8C33\u990D\u9D08\u71C4\u8AFA\u8D5D\u9B33\u5688\u5B2E\u66D5\u9D33\u9140\u9A10\u9A13\u56A5\u5B3F\u8276\u8D0B\u8EC5\u66E3\u7213\u91B6\u9A34\u9F5E\u9DC3\u7054\u8D17\u56D0\u89FE\u8B8C\u91BC\u995C\u9A57\u9DF0\u8277\u704E\u91C5\u9A60\u7067\u8B9E\u8C53\u8C54\u7069",
    y\u0101ng: "\u592E\u59CE\u62B0\u6CF1\u67CD\u6B83\u80E6\u770F\u79E7\u9E2F\u9260\u96F5\u9785\u9348\u9D26",
    y\u00E1ng: "\u626C\u9626\u9633\u65F8\u6768\u7080\u739A\u98CF\u4F6F\u52B7\u6C1C\u75A1\u9496\u579F\u5F89\u661C\u6D0B\u7F8F\u70CA\u73DC\u773B\u967D\u5A78\u5D35\u5D38\u6113\u63DA\u86D8\u656D\u6698\u694A\u716C\u7452\u7993\u760D\u8AF9\u8F30\u935A\u9D39\u98BA\u9C11\u9737\u9E09",
    y\u01CEng: "\u536C\u4F52\u5489\u5771\u5C9F\u517B\u67CD\u70B4\u6C27\u770F\u75D2\u7D3B\u509F\u52DC\u6967\u8EEE\u6143\u6C31\u8746\u98EC\u990A\u99DA\u61E9\u6501\u7001\u7662\u7922",
    y\u00E0ng: "\u600F\u67CD\u6059\u6837\u70CA\u7F95\u6967\u8A47\u716C\u69D8\u6F3E\u9785\u6A23\u7001",
    y\u0101o: "\u5E7A\u592D\u5406\u5996\u6796\u6B80\u7945\u7D04\u8A1E\u5593\u847D\u6946\u8170\u9D01\u64BD\u9080\u9D22",
    y\u00E1o: "\u723B\u5C27\u530B\u5C2D\u80B4\u579A\u59DA\u5CE3\u604C\u8F7A\u5004\u70D1\u73E7\u7690\u7A95\u7A91\u94EB\u9683\u509C\u582F\u63FA\u6BBD\u8C23\u8EFA\u55C2\u5AB1\u5FAD\u612E\u6416\u6447\u6EE7\u733A\u9059\u9065\u50E5\u647F\u669A\u69A3\u7464\u7476\u929A\u98D6\u9906\u5DA2\u5DA4\u5FBA\u78D8\u7AAF\u7AB0\u991A\u7E47\u8B21\u8B20\u9390\u9CD0\u98BB\u8628\u908E\u9864\u9C29\u9C59",
    y\u01CEo: "\u4EF8\u5B8E\u5C86\u62AD\u6773\u6796\u72D5\u82ED\u54AC\u67FC\u7711\u7A85\u7A88\u8200\u5060\u5A79\u5D3E\u6E94\u84D4\u699A\u95C4\u9A15\u9F69\u9DD5",
    y\u00E0o: "\u602E\u7A7E\u836F\u70C4\u888E\u7A94\u7B44\u846F\u8A4F\u612E\u718E\u7627\u899E\u977F\u6A02\u735F\u7BB9\u9E5E\u85AC\u9F3C\u66DC\u71FF\u825E\u85E5\u77C5\u8000\u7E85\u9DC2\u8B91",
    ye: "\u4EAA",
    y\u0113: "\u5414\u8036\u503B\u6930\u668D\u6B4B\u7AAB\u564E\u6F71\u64E8\u882E",
    y\u00E9: "\u7237\u8036\u5CEB\u6353\u63F6\u94D8\u723A\u7458\u91FE\u92E3\u9381",
    y\u011B: "\u4E5F\u51B6\u57DC\u91CE\u5622\u6F1C\u58C4",
    y\u00E8: "\u4E1A\u66F3\u9875\u66F5\u90BA\u591C\u62B4\u4EB1\u62FD\u67BC\u6D02\u9801\u6359\u6654\u67BD\u70E8\u6DB2\u7106\u8C12\u5828\u63F2\u6B97\u814B\u8449\u58B7\u696A\u696D\u7160\u75F7\u998C\u50F7\u66C5\u71C1\u748D\u64D6\u64DB\u66C4\u76A3\u77B1\u7DE4\u9134\u9765\u5DAA\u5DAB\u6FB2\u8B01\u9923\u64EB\u66D7\u77B8\u9371\u64EA\u7217\u790F\u9391\u9941\u9D7A\u9437\u9768\u9A5C\u74DB\u9E08",
    yi: "\u5F2C",
    y\u012B: "\u4E00\u4E4A\u5F0C\u8FB7\u8864\u4F0A\u8863\u533B\u541A\u58F1\u4F9D\u794E\u54BF\u6D22\u6098\u6E0F\u7317\u7569\u90FC\u94F1\u58F9\u63D6\u86DC\u7995\u5ADB\u6F2A\u7A26\u92A5\u5B04\u648E\u566B\u5901\u747F\u9E65\u7E44\u6AB9\u6BC9\u91AB\u9EDF\u8B69\u9DD6\u9EF3",
    y\u00ED: "\u4E41\u4EEA\u531C\u572F\u5937\u5F75\u8FC6\u519D\u5B90\u675D\u6C82\u8BD2\u4F87\u5B9C\u6021\u6CB6\u72CF\u72CB\u8FE4\u8FF1\u9974\u54A6\u59E8\u5CD3\u605E\u62F8\u67C2\u6D1F\u73C6\u74F5\u8351\u8D3B\u8FFB\u5BA7\u5DF8\u6245\u6818\u684B\u7719\u80F0\u8898\u8CA4\u75CD\u79FB\u8413\u91F6\u692C\u7FA0\u86E6\u8A52\u8CBD\u9057\u5A90\u6686\u6938\u7155\u8A83\u8DE0\u9809\u9890\u98F4\u5100\u71AA\u7BB7\u907A\u5DAC\u5F5B\u5F5C\u8794\u9825\u9824\u5BF2\u5DB7\u7C03\u984A\u9BA7\u9D3A\u5F5E\u5F5D\u8B3B\u93D4\u7C4E\u89FA\u8B89",
    y\u01D0: "\u4E5A\u4E5B\u4E59\u5DF2\u4EE5\u6261\u8FC6\u9487\u4F41\u653A\u77E3\u82E1\u53D5\u82E2\u8FE4\u8FF1\u5EA1\u8223\u8681\u91D4\u501A\u6246\u7B16\u9018\u914F\u506F\u7317\u5D3A\u6532\u6567\u65D1\u9218\u926F\u9CE6\u88FF\u65D6\u8F22\u5B1F\u657C\u8798\u6AA5\u7912\u8264\u87FB\u9857\u8F59\u9F6E",
    y\u00EC: "\u4E42\u4E49\u4EBF\u5F0B\u5208\u5FC6\u827A\u4EE1\u5307\u808A\u827E\u8BAE\u9623\u4EA6\u4F07\u5C79\u5F02\u5FD4\u8285\u4F3F\u4F5A\u52AE\u5453\u5744\u5F79\u6291\u6759\u8034\u82C5\u8BD1\u9091\u4F7E\u546D\u5479\u59B7\u5CC4\u6008\u603F\u6613\u678D\u6B25\u6CC6\u7088\u79C7\u7ECE\u886A\u8BE3\u9A7F\u4FCB\u5955\u5E1F\u5E20\u5F08\u6633\u67BB\u6D42\u73B4\u75AB\u7FBF\u8F76\u5508\u57BC\u6092\u6339\u683A\u6827\u6B2D\u6D65\u6D73\u76CA\u8898\u88A3\u8C0A\u8CA4\u52DA\u57F6\u57F8\u6098\u60A5\u639C\u6BB9\u7570\u7F9B\u7FCA\u7FCC\u841F\u8A33\u8A32\u8C59\u8C5B\u9038\u91F4\u96BF\u5E46\u6561\u6679\u68ED\u6B94\u6E59\u7132\u712C\u86E1\u8A4D\u8DC7\u8EFC\u9113\u9220\u9AAE\u4E84\u517F\u55CC\u610F\u6EA2\u7348\u75EC\u776A\u7AE9\u7F22\u7FA9\u8084\u88D4\u88DB\u8A63\u52E9\u5AD5\u5ED9\u698F\u6F69\u7617\u8189\u84FA\u8734\u99C5\u5104\u69F8\u6BC5\u71A0\u71A4\u71BC\u761E\u7BD2\u8ABC\u9552\u9E5D\u9E62\u9ED3\u5117\u5293\u571B\u58BF\u5B11\u5DA7\u61B6\u61CC\u66C0\u6BAA\u6FBA\u71DA\u7631\u7796\u7A53\u7E0A\u8257\u858F\u87A0\u8939\u5BF1\u61DD\u6581\u66CE\u6A8D\u6B5D\u71E1\u71F1\u7FF3\u7FFC\u81C6\u8C96\u9BA8\u7654\u85DD\u85D9\u8D00\u93B0\u9571\u7E76\u7E79\u8C77\u972C\u9BE3\u9D83\u9D82\u9D8D\u7037\u8619\u8B70\u8B6F\u91B3\u91B7\u9950\u56C8\u943F\u9DC1\u9DCA\u61FF\u897C\u9A5B\u9DE7\u8649\u9E03\u9DFE\u8B9B\u9F78",
    y\u012Bn: "\u56D9\u56E0\u9625\u9634\u4F8C\u5794\u59FB\u6D07\u8335\u836B\u97F3\u9A83\u6836\u6B2D\u6C24\u9670\u51D0\u79F5\u88C0\u94DF\u967B\u9682\u5591\u5819\u5A63\u6114\u6E6E\u7B43\u7D6A\u6B45\u6EB5\u798B\u8491\u852D\u6147\u7616\u92A6\u78E4\u7DF8\u9787\u8AF2\u9712\u99F0\u567E\u6FE6\u95C9\u9720\u9F57\u97FE",
    y\u00EDn: "\u5198\u4E51\u4F12\u541F\u573B\u72BE\u82C2\u65A6\u70CE\u57A0\u6CFF\u5701\u5CFE\u72FA\u73E2\u8376\u8A14\u8A1A\u552B\u5A6C\u5BC5\u5D1F\u5D2F\u6DEB\u8A21\u94F6\u921D\u9F82\u6EDB\u7892\u911E\u5924\u8529\u9280\u9F88\u5656\u6BA5\u748C\u8ABE\u569A\u6AAD\u87EB\u972A\u9F66\u9DE3",
    y\u01D0n: "\u5EF4\u5C39\u5F15\u5432\u996E\u7C8C\u8693\u784D\u8D7A\u6DFE\u920F\u98F2\u96A0\u9777\u98EE\u6704\u8F11\u78E4\u8D9B\u6A83\u763E\u96B1\u5DBE\u6FE5\u7E2F\u87BE\u6ABC\u861F\u6AFD\u766E\u8B94",
    y\u00ECn: "\u5EF4\u5370\u831A\u6D15\u80E4\u836B\u57BD\u6880\u5837\u6E5A\u730C\u98F2\u5ED5\u96A0\u98EE\u7AA8\u9173\u616D\u764A\u6197\u6196\u96B1\u9BA3\u61DA",
    y\u012Bng: "\u5FDC\u65F2\u82F1\u67CD\u8365\u5040\u685C\u73F1\u83BA\u5568\u5A74\u5A96\u6125\u6E36\u7EEC\u6720\u6967\u713D\u7138\u7150\u745B\u5AC8\u78A4\u9533\u5624\u6484\u7507\u7DD3\u7F28\u7F42\u8767\u8CCF\u6A31\u748E\u565F\u7F43\u892E\u9719\u9D2C\u9E66\u5B30\u61C9\u81BA\u97FA\u7516\u9E70\u9D91\u9DA7\u56B6\u5B46\u5B7E\u6516\u7034\u7F4C\u8621\u8B4D\u6AFB\u74D4\u792F\u8B7B\u9DAF\u944D\u7E93\u8833\u9DEA\u8EC8\u9DF9\u9E0E\u9E1A",
    y\u00EDng: "\u5903\u76C1\u8FCE\u8314\u76C8\u8367\u6D67\u803A\u83B9\u55B6\u686F\u8424\u8426\u8425\u86CD\u6E81\u6E8B\u843E\u50CC\u584B\u5D64\u6979\u6EE2\u84E5\u6ECE\u6F46\u7192\u8747\u7469\u799C\u877F\u5B34\u71DF\u7E08\u87A2\u6FD9\u6FDA\u6FF4\u85C0\u89AE\u8B0D\u8D62\u7005\u7203\u8805\u93A3\u5DC6\u650D\u701B\u7020\u702F\u6AFF\u8D0F\u7050\u7C5D\u705C\u7C6F",
    y\u01D0ng: "\u77E8\u90E2\u6D67\u68AC\u988D\u9895\u9896\u646C\u5F71\u6F41\u763F\u7A4E\u9834\u89AE\u5DCA\u5EEE\u7034\u941B\u766D",
    y\u00ECng: "\u5FDC\u6620\u770F\u668E\u786C\u5AB5\u81A1\u9795\u61C9\u7034\u9C66",
    yo: "\u55B2",
    y\u014D: "\u5537\u55B2",
    y\u014Dng: "\u62E5\u75C8\u9095\u5EB8\u50AD\u55C8\u9118\u96CD\u5889\u5ADE\u6175\u6EFD\u69E6\u7245\u7257\u92BF\u5670\u58C5\u64C1\u6FAD\u90FA\u955B\u81C3\u7655\u96DD\u93DE\u9CD9\u5EF1\u7049\u9954\u9C45\u9DDB\u7670",
    y\u00F3ng: "\u5581\u63D8\u9899\u9852\u9C2B",
    y\u01D2ng: "\u6C38\u752C\u548F\u603A\u6CF3\u4FD1\u52C8\u52C7\u6810\u57C7\u6080\u67E1\u607F\u60E5\u6111\u6E67\u7867\u8A60\u584E\u5D71\u5F6E\u6139\u86F9\u6142\u8E0A\u9CAC\u5670\u6FAD\u8E34\u9BD2",
    y\u00F2ng: "\u7528\u82DA\u783D\u848F\u919F",
    y\u014Du: "\u4F18\u598B\u5FE7\u6538\u5466\u602E\u6CD1\u5E7D\u5CF3\u6D5F\u900C\u60A0\u7FAA\u9E80\u6EFA\u6182\u512A\u913E\u5698\u61EE\u7000\u7376\u6ACC\u7E8B\u8030\u737F",
    y\u00F3u: "\u5C22\u5198\u5C24\u7531\u7534\u6C7C\u6C8B\u72B9\u90AE\u601E\u6CB9\u80AC\u6023\u65BF\u67DA\u75A3\u5EAE\u79DE\u839C\u83A4\u83B8\u90F5\u94C0\u5064\u86B0\u8A27\u9030\u63C2\u6E38\u7336\u904A\u9C7F\u6962\u7337\u923E\u9C89\u8F0F\u99C0\u8555\u8763\u9B77\u8F36\u9B8B\u7E47\u6AFE",
    y\u01D2u: "\u53CB\u4E23\u5363\u82C3\u9149\u7F91\u682F\u83A0\u6884\u8048\u94D5\u6E75\u6962\u7989\u870F\u92AA\u69F1\u7256\u7257\u9EDD\u61EE",
    y\u00F2u: "\u53C8\u53F3\u5E7C\u4F51\u4F66\u4F91\u5B67\u6CD1\u72D6\u54CA\u56FF\u59F7\u5BA5\u5CDF\u67DA\u7270\u7950\u8BF1\u8FF6\u5500\u688E\u75CF\u86B4\u4EB4\u8C81\u91C9\u916D\u8A98\u9F2C\u6AFE",
    y\u016B: "\u8FBC\u625C\u625D\u7EA1\u8FC3\u8FC2\u7A7B\u9653\u7D06\u5539\u6DE4\u76D3\u7600\u7B8A",
    y\u00FA: "\u4E02\u4E90\u4E8E\u9098\u4F03\u4F59\u59A4\u6275\u6745\u6B24\u7397\u7399\u65BC\u76C2\u81FE\u8867\u9C7C\u4E7B\u4FDE\u516A\u6353\u79BA\u7AFD\u8201\u8330\u8676\u5A1B\u5A2F\u5A2A\u5A31\u6859\u72F3\u8C00\u9151\u9980\u6E14\u8438\u91EA\u9683\u9685\u96E9\u9B5A\u5823\u582C\u5A7E\u5A80\u5AAE\u5D33\u5D4E\u5D5B\u63C4\u6970\u6E1D\u6E61\u756C\u8174\u842E\u903E\u9AAC\u611A\u6961\u6986\u6B48\u724F\u745C\u8245\u865E\u89CE\u6F01\u776E\u7AAC\u8206\u8915\u6B76\u7FAD\u854D\u8753\u8ADB\u96D3\u9918\u9B63\u5B29\u61D9\u6F9E\u89A6\u8E30\u6B5F\u74B5\u87B8\u8F3F\u935D\u8B23\u9AC3\u9BBD\u65DF\u7C45\u9A1F\u9BF2\u861B\u8F5D\u9C05\u9DE0\u9E06\u9F75",
    y\u01D4: "\u4F1B\u5B87\u5C7F\u7FBD\u7A7B\u4FC1\u4FE3\u6327\u79B9\u5704\u7964\u504A\u532C\u5709\u5EBE\u6554\u9105\u659E\u842D\u50B4\u5BD9\u6940\u7440\u7610\u8207\u8A9E\u7AB3\u9828\u9F89\u5673\u5DBC\u61D9\u8C90\u6594\u7A65\u9E8C\u9F6C",
    y\u00F9: "\u8080\u7389\u9A6D\u572B\u807F\u828C\u828B\u543E\u59AA\u5FEC\u6C69\u7079\u996B\u6B25\u80B2\u90C1\u4FDE\u6631\u72F1\u79BA\u79D7\u831F\u4FFC\u53DE\u5CEA\u5F67\u682F\u6D74\u7821\u94B0\u9884\u57DF\u5809\u6086\u60D0\u6365\u6B32\u6DE2\u6DEF\u75CF\u7C96\u7FD1\u88AC\u8C15\u9033\u9608\u5585\u55A9\u55BB\u5A80\u5BD3\u5EBD\u5FA1\u68DB\u68DC\u68EB\u7134\u7419\u741F\u77DE\u7862\u7872\u88D5\u9047\u98EB\u99AD\u9E46\u5967\u6108\u6EEA\u715C\u7A22\u7F6D\u8248\u84AE\u84E3\u8A89\u923A\u9810\u50EA\u5AD7\u5D8E\u622B\u6BD3\u6F9A\u7344\u7609\u7DCE\u871F\u872E\u8A9E\u8F0D\u9289\u96A9\u617E\u6F4F\u71A8\u7A36\u84F9\u8581\u8C6B\u9079\u92CA\u9CFF\u6FA6\u71CF\u71E0\u8577\u85C7\u8AED\u9325\u95BE\u9D27\u9D2A\u9D25\u5125\u7907\u79A6\u9B4A\u9E6C\u7652\u7916\u791C\u7BFD\u91A7\u9D52\u6AF2\u9947\u860C\u8B7D\u942D\u9731\u96E4\u6B0E\u9A48\u9B3B\u7C5E\u9C4A\u9DF8\u9E12\u6B1D\u8EC9\u9B30\u9B31\u706A\u7C72\u7229",
    yu\u0101n: "\u5917\u56E6\u8099\u9E22\u5248\u51A4\u5F32\u6081\u7722\u9E33\u5BC3\u6DB4\u6E06\u6E01\u6E0A\u6E15\u60CC\u6DF5\u847E\u68E9\u84AC\u870E\u88F7\u9E53\u7BA2\u9CF6\u8735\u99CC\u92FA\u9D1B\u5B3D\u9D77\u7041\u9F18\u9F1D",
    yu\u00E1n: "\u5143\u5186\u8D20\u90A7\u56ED\u59A7\u6C85\u82AB\u676C\u8312\u57A3\u7230\u8C9F\u539F\u54E1\u5706\u7B0E\u8696\u8881\u53A1\u915B\u5086\u559B\u570E\u5A9B\u63F4\u6E72\u7328\u7F18\u9228\u9F0B\u5712\u5713\u586C\u5AB4\u5AC4\u6965\u6E92\u6E90\u733F\u849D\u699E\u69AC\u8F95\u7DE3\u7E01\u875D\u876F\u8924\u9B6D\u571C\u6A7C\u7FB1\u8597\u8788\u9EFF\u8B1C\u8F45\u93B1\u6ADE\u908D\u9A35\u9DA2\u9DB0\u53B5",
    yu\u01CEn: "\u76F6\u903A\u9060\u85B3\u92FA",
    yu\u00E0n: "\u5917\u59B4\u82D1\u6028\u9662\u57B8\u884F\u5086\u5A9B\u63BE\u7457\u7990\u613F\u88EB\u8911\u566E\u9858",
    yu\u0113: "\u66F0\u66F1\u625A\u7D04\u5558\u7BB9\u77F1",
    yu\u011B: "\u54D5\u5666",
    yu\u00E8: "\u6708\u6209\u514A\u5216\u514C\u599C\u5C84\u6288\u793F\u5CB3\u6782\u6CE7\u73A5\u6071\u680E\u54FE\u6085\u60A6\u868F\u868E\u8ECF\u94BA\u9605\u6373\u8DC0\u8DC3\u7CA4\u8D8A\u9205\u697D\u7CB5\u925E\u8AAA\u8AAC\u6A02\u95B2\u95B1\u5B33\u6A3E\u7BD7\u9AFA\u5DBD\u81D2\u9FA0\u64FD\u77C6\u6ADF\u7C46\u7039\u8625\u9EE6\u721A\u79B4\u8DAF\u8E8D\u7C65\u9470\u9E11\u7C70\u9E19",
    y\u016Bn: "\u6D92\u7F0A\u8480\u6688\u6C32\u7174\u8495\u6C33\u7185\u717E\u596B\u7DFC\u8779\u7E15\u8D5F\u99A7\u8D07",
    y\u00FAn: "\u4E91\u52FB\u5300\u4F1D\u56E9\u5998\u62A3\u6C84\u7EAD\u82B8\u6600\u7547\u7703\u79D0\u8C9F\u90E7\u54E1\u6DA2\u7D1C\u8018\u803A\u9116\u96F2\u612A\u6EB3\u7B60\u7B7C\u84B7\u7189\u6F90\u8553\u92C6\u6A52\u7BD4\u7E1C",
    y\u01D4n: "\u5141\u962D\u593D\u628E\u72C1\u73A7\u9668\u837A\u6B92\u5597\u9217\u9695\u7174\u6B9E\u7185\u99BB\u78D2\u8CF1\u9723\u9F6B\u9F73",
    y\u00F9n: "\u5B55\u8D20\u8FD0\u679F\u90D3\u607D\u8C9F\u54E1\u83C0\u9106\u915D\u508A\u60F2\u6120\u7F0A\u904B\u614D\u6688\u6985\u7147\u816A\u97EB\u97F5\u891E\u71A8\u7DF7\u7DFC\u8570\u8574\u7E15\u8580\u9196\u919E\u992B\u85F4\u97B0\u97D7\u97DE\u860A\u97FB",
    z\u0101: "\u5E00\u531D\u6C9E\u8FCA\u5482\u62F6\u685A\u7D25\u7D2E\u9254\u5648\u9B73\u81DC\u81E2",
    z\u00E1: "\u6742\u6CAF\u7838\u507A\u5592\u97F4\u96D1\u894D\u96DC\u56C3\u56CB\u56D0\u96E5",
    z\u01CE: "\u548B\u507A\u5592",
    z\u0101i: "\u707D\u707E\u753E\u54C9\u683D\u70D6\u7560\u83D1\u6E3D\u6EA8\u7775\u8CF3",
    z\u01CEi: "\u5BB0\u5D3D",
    z\u00E0i: "\u518D\u5728\u6257\u6282\u6D05\u50A4\u8F09\u9168\u510E\u7E21",
    z\u0101n: "\u5142\u648D\u7CCC\u6A75\u7BF8\u7C2A\u7C2E\u9D64\u9415\u941F",
    z\u00E1n: "\u507A\u5592",
    z\u01CEn: "\u62F6\u661D\u685A\u5BC1\u63DD\u5646\u648D\u5127\u6505\u5139\u6522\u8DB1\u8DB2",
    z\u00E0n: "\u6682\u66AB\u8CDB\u8D5E\u933E\u913C\u6FFD\u8E54\u9142\u74C9\u8D0A\u93E9\u93E8\u74D2\u9147\u56CB\u7052\u8B83\u74DA\u79B6\u7A73\u8978\u8B9A\u9961",
    z\u0101ng: "\u5328\u7242\u7F98\u8D43\u8CCD\u81E7\u8CD8\u8D13\u9AD2\u8D1C",
    z\u01CEng: "\u9A75\u99D4",
    z\u00E0ng: "\u5958\u5F09\u810F\u585F\u846C\u81E7\u8535\u92BA\u81D3\u81DF",
    z\u0101o: "\u50AE\u906D\u7CDF\u8E67\u91A9",
    z\u00E1o: "\u51FF\u947F",
    z\u01CEo: "\u65E9\u67A3\u6806\u86A4\u68D7\u7485\u6FA1\u74AA\u85BB\u85FB",
    z\u00E0o: "\u7076\u7681\u7682\u5523\u5515\u9020\u688D\u55BF\u6165\u7170\u8241\u566A\u7C09\u71E5\u7AC3\u7AC8\u8B5F\u8DAE\u8E81",
    z\u00E9: "\u5219\u629E\u6CA2\u548B\u6CCE\u8D23\u8FEE\u5247\u5536\u5567\u5E3B\u7B2E\u8234\u8CAC\u6EAD\u6EDC\u776A\u77E0\u98F5\u5616\u5AE7\u5E58\u7BA6\u8536\u6A0D\u6B75\u8ACE\u8D5C\u64C7\u6FA4\u769F\u7794\u7C00\u802B\u790B\u8957\u8B2E\u8CFE\u880C\u7042\u9F5A\u9F70\u9E05",
    z\u00E8: "\u4EC4\u5E82\u6C44\u6603\u6617\u6351\u5074\u5D31\u7A04",
    z\u00E9i: "\u8D3C\u621D\u8CCA\u9C97\u8808\u9C02\u9C61",
    z\u0113n: "\u648D",
    z\u011Bn: "\u600E",
    z\u00E8n: "\u8C2E\u8B56",
    z\u0113ng: "\u66FD\u5897\u912B\u589E\u618E\u7F2F\u6A67\u7494\u7E21\u77F0\u78F3\u7AF2\u7F7E\u7E52\u8B44\u9C5B",
    z\u011Bng: "",
    z\u00E8ng: "\u9503\u7D9C\u7F2F\u92E5\u71B7\u7511\u8D60\u7E52\u9B35\u8D08\u56CE",
    zi: "\u55ED",
    z\u012B: "\u5B56\u5B5C\u753E\u830A\u5179\u5472\u54A8\u59D5\u59FF\u8332\u6825\u7386\u7560\u7D0E\u8D40\u8D44\u5D30\u6DC4\u79F6\u7F01\u83D1\u8C18\u8D7C\u55DE\u5B73\u5D6B\u6914\u6E7D\u6ECB\u7CA2\u8458\u8F8E\u9111\u5B76\u798C\u89DC\u8A3E\u8CB2\u8CC7\u8D91\u9531\u7A35\u7DD5\u7DC7\u922D\u9543\u9F87\u8F1C\u9F12\u6FAC\u858B\u8AEE\u8DA6\u8F3A\u9319\u9AED\u9CBB\u937F\u93A1\u74BE\u983E\u983F\u9BD4\u9D85\u9F4D\u7E83\u9C26\u9F5C",
    z\u00ED: "\u84FB",
    z\u01D0: "\u5B50\u5407\u8293\u59C9\u59CA\u674D\u6C9D\u77F7\u79C4\u80CF\u5470\u79ED\u7C7D\u8014\u8308\u8678\u7B2B\u6893\u91E8\u5559\u7D2B\u6ED3\u8A3F\u699F\u6A74",
    z\u00EC: "\u5B57\u81EA\u8293\u79C4\u6D13\u8321\u8362\u5033\u525A\u6063\u7278\u6E0D\u7726\u7725\u83D1\u80D4\u80FE\u6F2C",
    z\u014Dng: "\u5B97\u679E\u5027\u9A94\u582B\u5D4F\u5D55\u60FE\u68D5\u7323\u8159\u847C\u6721\u6936\u6F48\u7A2F\u7D9C\u7DC3\u6A05\u71A7\u7DF5\u7FEA\u876C\u8E28\u8E2A\u78EB\u7E4C\u9350\u8C75\u8E64\u9A0C\u9B03\u9A23\u9B09\u9B37\u9BEE\u9BFC\u9441",
    z\u01D2ng: "\u603B\u500A\u506C\u6374\u60E3\u63D4\u6403\u7127\u50AF\u84D7\u5D78\u6460\u6F40\u7A2F\u7DCF\u719C\u7DEB\u7E02\u71EA\u7E31\u7E3D",
    z\u00F2ng: "\u662E\u75AD\u5F9E\u7314\u7882\u7CBD\u6F68\u7CC9\u7DF5\u7632\u7E26\u7E31\u7E4C\u7CED",
    z\u014Du: "\u90B9\u9A7A\u8BF9\u90F0\u966C\u63AB\u83C6\u68F8\u68F7\u9112\u7B83\u7DC5\u8ACF\u9139\u9CB0\u9BEB\u9EC0\u9A36\u9F71\u9F7A",
    z\u01D2u: "\u8D71\u8D70\u640A\u9BD0",
    z\u00F2u: "\u594F\u63CD\u5AB0\u6971",
    z\u016B: "\u601A\u67E4\u79DF\u83F9\u8445\u84A9",
    z\u00FA: "\u5346\u8DB3\u5005\u54EB\u5D12\u5D2A\u65CF\u690A\u7A21\u7BA4\u8E24\u955E\u9390\u93C3",
    z\u01D4: "\u8BC5\u963B\u7EC4\u4FCE\u67E4\u723C\u73C7\u7956\u5528\u7D44\u8A5B\u977B\u93BA",
    z\u00F9: "",
    zu\u0101n: "\u9246\u5297\u8E9C\u945A\u8EA6\u947D",
    zu\u01CEn: "\u7E64\u7F35\u7E82\u7E89\u7C6B\u7E98",
    zu\u00E0n: "\u63DD\u7BF9\u8CFA\u6525",
    zu\u012B: "\u539C\u6718\u55FA\u6A36\u87D5\u7E97",
    zu\u00ED: "",
    zu\u01D0: "\u5480\u89DC\u5D8A\u5634\u567F\u6FE2\u74BB",
    zu\u00EC: "\u51A3\u682C\u7D4A\u9154\u666C\u6700\u797D\u775F\u7A21\u7F6A\u8FA0\u69DC\u917B\u855E\u9189\u5DB5\u6A87\u92F7\u930A\u6A8C\u6B08",
    z\u016Bn: "\u5C0A\u5642\u58AB\u5D9F\u9075\u6A3D\u7E5C\u7F47\u9D8E\u940F\u9CDF\u9C52\u9DF7",
    z\u01D4n: "\u50D4\u6499\u7E5C\u8B50",
    z\u00F9n: "\u62F5\u6358\u682B\u88B8\u928C\u7033",
    zuo: "\u5497",
    zu\u014D: "\u562C\u7A5D",
    zu\u00F3: "\u82F2\u6628\u67EE\u79E8\u838B\u637D\u7B2E\u7A13\u7B70\u923C",
    zu\u01D2: "\u5DE6\u4F50\u7E53",
    zu\u00F2: "\u4F5C\u5750\u963C\u5C9D\u5C9E\u600D\u4FB3\u67DE\u795A\u80D9\u5511\u5EA7\u888F\u505A\u8444\u8443\u9162\u84D9\u98F5\u8ACE\u7CF3",
    zh\u0101: "\u5412\u548B\u62AF\u6313\u67E4\u67FB\u54F3\u7D25\u5067\u7D2E\u63F8\u6E23\u6942\u98F5\u5284\u6463\u6F73\u76B6\u6A1D\u89F0\u76BB\u8B47\u9F44\u9F47",
    zh\u00E1: "\u672D\u7534\u8ECB\u95F8\u5273\u86BB\u94E1\u558B\u7160\u7250\u9598\u5284\u7B9A\u9705\u802B\u9358\u8B57",
    zh\u01CE: "\u538F\u62C3\u82F2\u7728\u781F\u9C8A\u9C9D\u8ACE\u9B93\u9BBA",
    zh\u00E0: "\u4E4D\u5412\u7079\u8BC8\u600D\u54A4\u5953\u67DE\u5BB1\u75C4\u86B1\u55A5\u6EA0\u8A50\u643E\u9C8A\u69A8\u9B93\u91A1",
    zh\u0101i: "\u4E9D\u54DC\u5908\u7C82\u635A\u658B\u5074\u658E\u6458\u69B8\u9F4A\u568C\u64FF\u9F4B",
    zh\u00E1i: "\u5387\u5B85\u7FDF\u64C7\u6AA1",
    zh\u01CEi: "\u538F\u62A7\u7A84\u9259",
    zh\u00E0i: "\u8D23\u503A\u7826\u8CAC\u50B5\u5BE8\u7635",
    zh\u0101n: "\u5CBE\u6017\u67AC\u6CBE\u6BE1\u65C3\u6834\u7C98\u86C5\u98E6\u60C9\u8A40\u8D88\u8A79\u959A\u8C35\u9CFD\u5661\u5DA6\u859D\u9085\u9711\u6C08\u6C0A\u77BB\u89B1\u9E6F\u65DC\u8B6B\u9958\u9CE3\u9A59\u9B59\u9C63\u9E07",
    zh\u00E1n: "\u8B9D",
    zh\u01CEn: "\u65A9\u98D0\u5C55\u76CF\u65AC\u7416\u640C\u76DE\u5D83\u5D84\u6990\u8F97\u98AD\u5AF8\u9186\u6A4F\u8F3E\u76BD\u9EF5",
    zh\u00E0n: "\u4F54\u6218\u6808\u685F\u7AD9\u5061\u7EFD\u83DA\u5D41\u68E7\u6E5B\u6226\u788A\u50DD\u7DBB\u5D98\u6230\u8665\u8666\u89B1\u8F4F\u8B67\u6B03\u8638\u9A4F",
    zh\u0101ng: "\u5F21\u5F20\u5F35\u7AE0\u50BD\u9123\u5ADC\u5F70\u615E\u6F33\u7350\u7CBB\u8501\u9067\u66B2\u6A1F\u748B\u9926\u87D1\u93F1\u9A3F\u9C46\u9E9E",
    zh\u01CEng: "\u4EC9\u4EE7\u514F\u9577\u638C\u6F32\u5E65\u7903\u979D",
    zh\u00E0ng: "\u4E08\u4ED7\u6259\u5E10\u6756\u80C0\u8D26\u7C80\u5E33\u6DB1\u8139\u75EE\u969C\u5887\u5D82\u5E5B\u6F32\u8CEC\u762C\u7634\u7795",
    zh\u0101o: "\u4F4B\u948A\u59B1\u5DF6\u62DB\u662D\u70A4\u91D7\u5541\u91FD\u924A\u9CED\u99CB\u9363\u76BD",
    zh\u00E1o: "",
    zh\u01CEo: "\u722B\u627E\u6CBC\u83EC\u7475",
    zh\u00E0o: "\u5146\u8BCF\u679B\u5797\u70A4\u72E3\u8D75\u7B0A\u8081\u5545\u65D0\u68F9\u7F40\u8A54\u7167\u7F69\u7B8C\u8088\u8087\u8D99\u66CC\u6FEF\u71F3\u9BA1\u6AC2\u77BE\u7F84",
    zhe: "\u55FB",
    zh\u0113: "\u55FB\u5AEC\u906E\u87AB",
    zh\u00E9: "\u4E47\u5387\u6278\u6754\u6B7D\u77FA\u7813\u7C77\u8674\u54F2\u57D1\u7C8D\u88A9\u5560\u608A\u6662\u6663\u8F84\u5586\u68CF\u8051\u86F0\u8A5F\u6429\u8707\u8C2A\u99B2\u647A\u8F12\u6179\u78D4\u8F19\u92B8\u8F99\u87C4\u569E\u8B2B\u8B3A\u9BBF\u8F4D\u8B81\u8B8B",
    zh\u011B: "\u8005\u4E7D\u556B\u9517\u8D6D\u8E37\u8936\u937A\u8975",
    zh\u00E8: "\u67D8\u6D59\u9019\u6DDB\u55FB\u8517\u6A1C\u9E67\u87C5\u9DD3",
    zh\u00E8i: "",
    zh\u0113n: "\u8D1E\u9488\u4FA6\u4FB2\u5E27\u67AE\u6D48\u73CE\u73CD\u80D7\u8C9E\u5E2A\u6862\u771E\u771F\u7827\u796F\u91DD\u5075\u9159\u5BCA\u5E40\u63D5\u6E5E\u8474\u9049\u5AC3\u6438\u659F\u6939\u6968\u6EB1\u7349\u7504\u798E\u8496\u84C1\u9241\u699B\u69D9\u6B9D\u7467\u78AA\u799B\u6F67\u7BB4\u6A3C\u6FB5\u81FB\u85BD\u9331\u8F43\u937C\u7C48\u9C75",
    zh\u00E9n: "",
    zh\u011Bn: "\u8BCA\u62AE\u6795\u59EB\u5F2B\u6623\u8F78\u5C52\u755B\u75B9\u7715\u8897\u7D3E\u8044\u8419\u7AE7\u88D6\u8999\u8A3A\u8EEB\u5AC3\u7F1C\u69D9\u7A39\u99D7\u7E1D\u7E25\u8FB4\u9B12\u9EF0",
    zh\u00E8n: "\u5733\u9635\u7EBC\u753D\u4FB2\u630B\u9663\u9E29\u632F\u6715\u681A\u7D16\u686D\u7739\u8D48\u5866\u63D5\u7D7C\u6990\u7471\u8AAB\u8CD1\u92F4\u9547\u9707\u9D06\u93AE\u93AD",
    zh\u0113ng: "\u51E7\u4E89\u4F42\u59C3\u5F81\u6014\u722D\u7CFD\u57E9\u5CE5\u70A1\u72F0\u70DD\u7710\u8100\u94B2\u57E5\u5D1D\u5D22\u6399\u7319\u7741\u8047\u94EE\u5A9C\u63C1\u7B5D\u5FB0\u775C\u84B8\u8E2D\u9266\u5FB4\u7B8F\u7DAA\u931A\u5FB5\u7BDC\u9B07\u7665\u93F3",
    zh\u011Bng: "\u6C36\u628D\u7CFD\u62EF\u639F\u6678\u6138\u649C\u6574",
    zh\u00E8ng: "\u6C36\u8BC1\u8BE4\u90D1\u653F\u5F8E\u94B2\u6399\u5E41\u8A3C\u5863\u8ACD\u9755\u912D\u6195\u9D0A\u8B49",
    zh\u012B: "\u4E4B\u652F\u536E\u6C41\u829D\u5DF5\u6C65\u546E\u6CDC\u80A2\u6800\u7957\u79D3\u80D1\u80DD\u887C\u5001\u683A\u75B7\u796C\u8102\u96BB\u6894\u83ED\u6925\u81F8\u6418\u7A19\u7D95\u69B0\u8718\u99B6\u6184\u9CF7\u9D32\u7E54\u9F05\u8635",
    zh\u00ED: "\u6267\u4F84\u59B7\u76F4\u79C7\u59EA\u90E6\u5024\u503C\u8040\u91DE\u57F4\u57F7\u6DD4\u804C\u6220\u690D\u7286\u7983\u7D77\u81F7\u8DD6\u74E1\u6455\u646D\u99BD\u5B02\u6179\u6F10\u6F6A\u8E2F\u6A34\u81B1\u7E36\u8077\u87D9\u8E60\u8EC4\u8E91",
    zh\u01D0: "\u5902\u6B62\u51EA\u52A7\u65E8\u962F\u5741\u5740\u5E0B\u627A\u6C66\u6C9A\u7EB8\u82B7\u5767\u62A7\u676B\u7947\u7949\u830B\u54AB\u6049\u6307\u67B3\u6D14\u780B\u79D6\u8879\u8F75\u6DFD\u75BB\u7D19\u8694\u8A28\u8DBE\u8EF9\u9EF9\u7994\u7B6B\u7D7A\u916F\u588C\u5FB4\u5FB5\u69EF\u85E2\u8967",
    zh\u00EC: "\u81F3\u8296\u5741\u5FD7\u5FEE\u627B\u8C78\u5236\u5394\u5781\u5E19\u5E1C\u65A6\u6CBB\u7099\u8D28\u8FE3\u90C5\u4FE7\u5CD9\u5EA2\u5EA4\u6303\u67E3\u6809\u6D37\u7951\u965F\u5A21\u5F8F\u631A\u6357\u664A\u684E\u6B6D\u72FE\u79E9\u81F4\u889F\u8D3D\u8F7E\u4E7F\u506B\u526C\u5F9D\u63B7\u68BD\u6956\u7318\u7564\u75D3\u75D4\u7730\u79F2\u79F7\u7A92\u7D29\u7FD0\u88A0\u89D7\u8CAD\u94DA\u9E37\u5082\u5D3B\u5F58\u667A\u6EDE\u75E3\u86ED\u9A98\u5BD8\u5ECC\u6431\u6ECD\u7A1A\u7B6B\u7F6E\u8DF1\u8F0A\u9527\u96C9\u5886\u6EEF\u6F4C\u7590\u7608\u805C\u88FD\u899F\u8A8C\u928D\u5E5F\u6184\u6468\u646F\u6F6A\u71AB\u7A3A\u81A3\u89EF\u8CEA\u8E2C\u92B4\u92D5\u64F3\u65D8\u7004\u748F\u7DFB\u96B2\u99E4\u9D19\u5128\u5295\u61E5\u64F2\u64FF\u6ADB\u7A49\u87B2\u61EB\u7E54\u8D04\u6ACD\u74C6\u89F6\u9A2D\u9BEF\u7929\u8C51\u9DA8\u9A3A\u9A47\u8E93\u9DD9\u9455\u8C52",
    zh\u014Dng: "\u5902\u4F00\u6C77\u5223\u5990\u5F78\u5FEA\u5FE0\u6CC8\u7082\u7EC8\u67CA\u76C5\u8873\u949F\u822F\u8877\u7D42\u9221\u5E52\u8520\u8719\u953A\u92BF\u87A4\u9D24\u87BD\u937E\u6594\u9F28\u8E71\u9418\u7C66",
    zh\u01D2ng: "\u80BF\u51A2\u55A0\u5C30\u585A\u6B71\u7144\u816B\u7607\u7A2E\u5FB8\u8E35\u7A5C",
    zh\u00F2ng: "\u4EF2\u4F17\u5995\u72C6\u794C\u833D\u8876\u869B\u5045\u773E\u5839\u5A91\u7B57\u8846\u7A2E\u7DDF\u8AE5",
    zh\u014Du: "\u5DDE\u821F\u8BCC\u4F9C\u5468\u6D32\u70BF\u8BEA\u70D0\u73D8\u8F80\u90EE\u5541\u5A64\u5F9F\u63AB\u6DCD\u77EA\u9031\u9E3C\u558C\u8D52\u8F08\u7FE2\u9282\u8CD9\u8F16\u970C\u99F2\u568B\u76E9\u8B05\u9D43\u9A06\u8B78",
    zh\u00F3u: "\u59AF\u8EF8\u78A1",
    zh\u01D2u: "\u8098\u5E1A\u759B\u80D5\u83F7\u666D\u776D\u7B92\u9BDE",
    zh\u00F2u: "\u7EA3\u4F37\u546A\u5492\u5B99\u7EC9\u5191\u54AE\u663C\u7D02\u80C4\u836E\u76B1\u914E\u665D\u7C99\u6906\u8464\u8A4B\u8EF8\u7503\u50FD\u76BA\u99CE\u5663\u7E10\u7E47\u85B5\u9AA4\u7C40\u7C55\u7C52\u9A5F",
    zh\u016B: "\u4F8F\u8BDB\u90BE\u6D19\u8331\u682A\u73E0\u8BF8\u732A\u7843\u79FC\u88BE\u94E2\u7D51\u86DB\u8A85\u8DE6\u69E0\u6F74\u854F\u876B\u9296\u6A65\u8AF8\u8C6C\u99EF\u9BA2\u9D38\u7026\u85F8\u9F04\u6AE7\u6AEB\u9BFA\u8829",
    zh\u00FA: "\u672E\u7AF9\u7AFA\u70A2\u7B01\u833F\u70DB\u7A8B\u9010\u7B1C\u8233\u902B\u7603\u84EB\u6571\u78E9\u7BC9\u7BF4\u6580\u71ED\u880B\u8E85\u9C41\u529A\u5B4E\u705F\u65B8\u66EF\u6B18\u7225\u883E\u9483",
    zh\u01D4: "\u4E36\u4E3B\u52AF\u5B94\u62C4\u782B\u7F5C\u967C\u5E3E\u6E1A\u7151\u716E\u8A5D\u891A\u5631\u6FD0\u71DD\u9E88\u77A9\u5C6C\u56D1\u9E00\u77DA",
    zh\u00F9: "\u4F2B\u4F47\u4F4F\u7EBB\u82A7\u82CE\u577E\u62C0\u677C\u6CE8\u82E7\u8D2E\u8FEC\u9A7B\u4E7C\u58F4\u67F1\u67F7\u6BB6\u70B7\u795D\u75B0\u771D\u782B\u7969\u7ADA\u8387\u7D35\u7D38\u7F9C\u86C0\u5C0C\u5D40\u8A3B\u8CAF\u8DD3\u8EF4\u94F8\u7B6F\u9252\u98F3\u99B5\u55FB\u58B8\u7BB8\u7FE5\u6A26\u6F8D\u92F3\u99D0\u7BC9\u7BEB\u9E86\u7C17\u6AE1\u9444",
    zhu\u0101: "\u6293\u631D\u64BE\u6A9B\u81BC\u7C3B\u9AFD",
    zhu\u01CE: "\u722B",
    zhu\u0101i: "\u62FD",
    zhu\u01CEi: "\u8DE9",
    zhu\u00E0i: "\u62FD\u7749",
    zhu\u0101n: "\u4E13\u53C0\u5C02\u606E\u7816\u8011\u5C08\u5278\u911F\u587C\u5AE5\u6F19\u747C\u750E\u78D7\u819E\u989B\u78DA\u8AEF\u7BFF\u87E4\u9853\u9C44",
    zhu\u01CEn: "\u5B68\u8EE2\u819E\u7AF1\u8F49",
    zhu\u00E0n: "\u7077\u556D\u8EE2\u581F\u8483\u50B3\u7451\u815E\u50CE\u50DD\u8D5A\u64B0\u7BC6\u9994\u7BF9\u7E33\u8948\u8CFA\u7C28\u8D03\u8B54\u994C\u56C0\u7C51",
    zhu\u0101ng: "\u5986\u5E84\u599D\u5E92\u8358\u5A24\u6869\u838A\u6889\u6E77\u7CA7\u88C5\u88DD\u6A01\u7CDA",
    zhu\u01CEng: "\u5958",
    zhu\u00E0ng: "\u58EE\u58EF\u72B6\u72C0\u58F5\u710B\u50EE\u6F34\u649E\u6205\u6206\u6207",
    zhu\u012B: "\u96B9\u9A93\u9525\u9310\u9A05\u9D7B",
    zhu\u01D0: "\u6C9D",
    zhu\u00EC: "\u5760\u7B0D\u595E\u5A37\u7F00\u968A\u60F4\u7500\u7F12\u814F\u7577\u787E\u8187\u589C\u7DB4\u8D58\u7E0B\u8AC8\u918A\u9323\u7908\u8D05\u9446",
    zh\u016Bn: "\u572B\u5B92\u5FF3\u8FCD\u80AB\u7A80\u8C06\u554D\u8AC4\u8860",
    zh\u01D4n: "\u51C6\u57FB\u51D6\u6E96\u7A15\u7DA7",
    zh\u00F9n: "\u65FD\u8A30\u7A15\u7DA7",
    zhu\u014D: "\u62D9\u70AA\u502C\u6349\u684C\u68B2\u68C1\u6DBF\u6DD6\u68F3\u68F9\u712F\u7AA7\u69D5\u7A5B\u942F\u7A71",
    zhu\u00F3: "\u5734\u5F74\u6C4B\u72B3\u707C\u5353\u53D5\u59B0\u8301\u65AB\u6D4A\u4E35\u5262\u6354\u6D5E\u70F5\u8BFC\u914C\u5544\u5545\u5A3A\u8049\u65B1\u65AE\u666B\u6913\u7438\u787A\u7AA1\u7F6C\u84D4\u588C\u64AF\u64C6\u65B2\u799A\u5285\u8AC1\u8AD1\u8DA0\u92DC\u5663\u6FC1\u71CB\u7BE7\u64E2\u6580\u65B5\u6FEF\u85CB\u6AE1\u8B36\u956F\u7E73\u9D6B\u7042\u8817\u9432\u7C57\u9DDF\u883F\u7C71",
    zhu\u00F2: "",
    "ch\u01CEng,\u0101n,h\xE0n": "\u5382",
    "d\u012Bng,zh\u0113ng": "\u4E01",
    "b\u01D4,bo": "\u535C",
    "j\u01D0,j\u012B": "\u51E0",
    "le,li\u01CEo": "\u4E86",
    "g\u0101n,g\xE0n": "\u5E72",
    "d\xE0,d\xE0i,t\xE0i": "\u5927",
    "y\u01D4,y\xF9,y\xFA": "\u4E0E",
    "sh\xE0ng,sh\u01CEng": "\u4E0A",
    "w\xE0n,m\xF2": "\u4E07",
    "g\xE8,g\u011B": "\u4E2A\u5404",
    "me,m\xF3,ma,y\u0101o": "\u4E48",
    "gu\u01CEng,\u0101n": "\u5E7F",
    "w\xE1ng,w\xFA": "\u4EA1",
    "n\u01DA,r\u01D4": "\u5973",
    "ch\u0101,ch\xE1,ch\u01CE": "\u53C9",
    "w\xE1ng,w\xE0ng": "\u738B",
    "f\u016B,f\xFA": "\u592B",
    "zh\u0101,z\u0101,zh\xE1": "\u624E",
    "b\xF9,f\u01D2u": "\u4E0D",
    "q\u016B,\u014Du": "\u533A",
    "ch\u0113,j\u016B": "\u8F66",
    "qi\xE8,qi\u0113": "\u5207",
    "w\u01CE,w\xE0": "\u74E6",
    "t\xFAn,zh\u016Bn": "\u5C6F",
    "sh\u01CEo,sh\xE0o": "\u5C11",
    "zh\u014Dng,zh\xF2ng": "\u4E2D",
    "n\xE8i,n\xE0": "\u5185",
    "ji\xE0n,xi\xE0n": "\u89C1",
    "ch\xE1ng,zh\u01CEng": "\u957F",
    "sh\xE9n,sh\xED": "\u4EC0",
    "pi\xE0n,pi\u0101n": "\u7247",
    "p\xFA,p\u016B": "\u4EC6",
    "hu\xE0,hu\u0101": "\u5316",
    "ch\xF3u,qi\xFA": "\u4EC7",
    "zhu\u01CE,zh\u01CEo": "\u722A",
    "j\u01D0n,j\xECn": "\u4EC5",
    "f\xF9,f\u01D4": "\u7236",
    "c\xF3ng,z\xF2ng": "\u4ECE",
    "f\u0113n,f\xE8n": "\u5206",
    "sh\xEC,zh\u012B": "\u6C0F",
    "f\u0113ng,f\u011Bng": "\u98CE",
    "g\u014Du,g\xF2u": "\u52FE",
    "li\xF9,l\xF9": "\u516D",
    "d\u01D2u,d\xF2u": "\u6597",
    "w\xE8i,w\xE9i": "\u4E3A",
    "ch\u01D0,ch\u011B": "\u5C3A",
    "y\u01D4,y\xFA": "\u4E88",
    "d\u01CE,d\xE1": "\u6253",
    "zh\xE8ng,zh\u0113ng": "\u6B63\u75C7\u6323",
    "b\u0101,p\xE1": "\u6252",
    "ji\xE9,ji\u0113": "\u8282\u7ED3",
    "sh\xF9,sh\xFA,zh\xFA": "\u672F",
    "k\u011B,k\xE8": "\u53EF",
    "sh\xED,d\xE0n": "\u77F3",
    "k\u01CE,qi\u01CE": "\u5361",
    "b\u011Bi,b\xE8i": "\u5317",
    "zh\xE0n,zh\u0101n": "\u5360",
    "qi\u011B,j\u016B": "\u4E14",
    "y\xE8,xi\xE9": "\u53F6",
    "h\xE0o,h\xE1o": "\u53F7",
    "zh\u012B,zh\u01D0": "\u53EA",
    "d\u0101o,t\u0101o": "\u53E8",
    "z\u01CEi,z\u01D0,z\u012B": "\u4ED4",
    "l\xECng,l\xEDng,l\u01D0ng": "\u4EE4",
    "l\xE8,yu\xE8": "\u4E50",
    "j\xF9,g\u014Du": "\u53E5",
    "ch\xF9,ch\u01D4": "\u5904",
    "t\xF3u,tou": "\u5934",
    "n\xEDng,n\xECng,zh\xF9": "\u5B81",
    "zh\xE0o,sh\xE0o": "\u53EC",
    "f\u0101,f\xE0": "\u53D1",
    "t\xE1i,t\u0101i": "\u53F0\u82D4",
    "k\xE1ng,g\u0101ng": "\u625B",
    "d\xEC,de": "\u5730",
    "s\u01CEo,s\xE0o": "\u626B",
    "ch\u01CEng,ch\xE1ng": "\u573A",
    "p\u01D4,p\xF2,p\u014D,pi\xE1o": "\u6734",
    "gu\xF2,guo,gu\u014D": "\u8FC7",
    "y\u0101,y\xE0": "\u538B",
    "y\u01D2u,y\xF2u": "\u6709",
    "ku\u0101,ku\xE0": "\u5938",
    "xi\xE9,y\xE1,y\xE9,y\xFA,x\xFA": "\u90AA",
    "ji\xE1,ji\u0101,g\u0101,xi\xE1": "\u5939",
    "hu\xE0,hu\xE1": "\u5212",
    "d\u0101ng,d\xE0ng": "\u5F53",
    "t\xF9,t\u01D4": "\u5410",
    "xi\xE0,h\xE8": "\u5413",
    "t\xF3ng,t\xF2ng": "\u540C",
    "q\u016B,q\u01D4": "\u66F2",
    "ma,m\xE1,m\u01CE": "\u5417",
    "q\u01D0,k\u01CEi": "\u5C82",
    "zh\u016B,sh\xFA": "\u6731",
    "chu\xE1n,zhu\xE0n": "\u4F20",
    "xi\u016B,x\u01D4": "\u4F11",
    "r\xE8n,r\xE9n": "\u4EFB",
    "hu\xE1,hu\xE0,hu\u0101": "\u534E",
    "ji\xE0,ji\xE8,jie": "\u4EF7",
    "f\xE8n,b\u012Bn": "\u4EFD",
    "y\u01CEng,\xE1ng": "\u4EF0",
    "xi\u011B,xu\xE8": "\u8840",
    "s\xEC,sh\xEC": "\u4F3C",
    "h\xE1ng,x\xEDng": "\u884C",
    "hu\xEC,ku\xE0i": "\u4F1A",
    "h\xE9,g\u011B": "\u5408",
    "chu\xE0ng,chu\u0101ng": "\u521B",
    "ch\u014Dng,ch\xF2ng": "\u51B2",
    "q\xED,j\xEC,z\u012B,zh\u0101i": "\u9F50",
    "y\xE1ng,xi\xE1ng": "\u7F8A",
    "b\xECng,b\u012Bng": "\u5E76",
    "h\xE0n,h\xE1n": "\u6C57",
    "t\u0101ng,sh\u0101ng": "\u6C64",
    "x\u012Bng,x\xECng": "\u5174",
    "x\u01D4,h\u01D4": "\u8BB8",
    "l\xF9n,l\xFAn": "\u8BBA",
    "n\xE0,n\u01CE,n\xE8i,n\u0101": "\u90A3",
    "j\xECn,j\u01D0n": "\u5C3D",
    "s\u016Bn,x\xF9n": "\u5B59",
    "x\xEC,h\u016B": "\u620F",
    "h\u01CEo,h\xE0o": "\u597D",
    "t\u0101,ji\u011B": "\u5979",
    "gu\u0101n,gu\xE0n": "\u89C2\u51A0",
    "h\xF3ng,g\u014Dng": "\u7EA2",
    "xi\u0101n,qi\xE0n": "\u7EA4",
    "j\xEC,j\u01D0": "\u7EAA\u6D4E",
    "yu\u0113,y\u0101o": "\u7EA6",
    "n\xF2ng,l\xF2ng": "\u5F04",
    "yu\u01CEn,yu\xE0n": "\u8FDC",
    "hu\xE0i,p\u0113i,p\u012B,p\xE9i": "\u574F",
    "zh\xE9,sh\xE9,zh\u0113": "\u6298",
    "qi\u01CEng,qi\u0101ng,ch\u0113ng": "\u62A2",
    "k\xE9,qi\xE0o": "\u58F3",
    "f\u0101ng,f\xE1ng": "\u574A",
    "b\u01CE,b\xE0": "\u628A",
    "g\u0101n,g\u01CEn": "\u6746",
    "s\u016B,s\xF9": "\u82CF",
    "g\xE0ng,g\u0101ng": "\u6760",
    "g\xE8ng,g\u0113ng": "\u66F4",
    "l\xEC,l\xED": "\u4E3D",
    "h\xE1i,hu\xE1n": "\u8FD8",
    "f\u01D2u,p\u01D0": "\u5426",
    "xi\xE0n,xu\xE1n": "\u53BF",
    "zh\xF9,ch\xFA": "\u52A9",
    "ya,y\u0101": "\u5440",
    "ch\u01CEo,ch\u0101o": "\u5435",
    "yu\xE1n,y\xFAn,y\xF9n": "\u5458",
    "ba,b\u0101": "\u5427",
    "bi\xE9,bi\xE8": "\u522B",
    "d\u012Bng,d\xECng": "\u9489",
    "g\u016B,g\xF9": "\u4F30",
    "h\xE9,h\u0113,h\xE8": "\u4F55",
    "t\u01D0,t\u012B,b\xE8n": "\u4F53",
    "b\xF3,b\u01CEi,b\xE0": "\u4F2F",
    "y\xF2ng,y\u014Dng": "\u4F63",
    "f\xF3,f\xFA,b\xEC,b\xF3": "\u4F5B",
    "d\xF9,d\u01D4": "\u809A",
    "gu\u012B,j\u016Bn,qi\u016B": "\u9F9F",
    "ji\u01CEo,ju\xE9": "\u89D2",
    "ti\xE1o,ti\u0101o": "\u6761",
    "x\xEC,j\xEC": "\u7CFB",
    "y\xECng,y\u012Bng": "\u5E94",
    "zh\xE8,zh\xE8i": "\u8FD9",
    "ji\u0101n,ji\xE0n": "\u95F4\u76D1",
    "m\u0113n,m\xE8n": "\u95F7",
    "d\xEC,t\xEC,tu\xED": "\u5F1F",
    "sh\u0101,sh\xE0": "\u6C99",
    "sh\xE0,sh\u0101": "\u715E",
    "m\xE9i,m\xF2": "\u6CA1",
    "sh\u011Bn,ch\xE9n": "\u6C88",
    "sh\xED,zh\xEC": "\u8BC6",
    "ni\xE0o,su\u012B": "\u5C3F",
    "w\u011Bi,y\u01D0": "\u5C3E",
    "\u0113,\u0101": "\u963F",
    "j\xECn,j\xECng": "\u52B2",
    "z\xF2ng,z\u01D2ng": "\u7EB5",
    "w\xE9n,w\xE8n": "\u7EB9",
    "m\u01D2,m\xF2,m\u0101": "\u62B9",
    "d\u0101n,d\xE0n,d\u01CEn": "\u62C5",
    "ch\u0101i,c\u0101": "\u62C6",
    "j\u016B,g\u014Du": "\u62D8",
    "l\u0101,l\xE1": "\u62C9",
    "b\xE0n,p\xE0n": "\u62CC",
    "z\xE9,zh\xE1i": "\u62E9",
    "q\xED,j\u012B": "\u5176\u5947",
    "ru\xF2,r\u011B": "\u82E5",
    "p\xEDng,p\u0113ng": "\u82F9",
    "zh\u012B,q\xED": "\u679D",
    "gu\xEC,j\u01D4": "\u67DC",
    "s\xE0ng,s\u0101ng": "\u4E27",
    "c\xEC,c\u012B": "\u523A",
    "y\u01D4,y\xF9": "\u96E8\u8BED",
    "b\u0113n,b\xE8n": "\u5954",
    "q\u012B,q\xEC": "\u59BB",
    "zhu\u01CEn,zhu\xE0n,zhu\u01CEi": "\u8F6C",
    "xi\u0113,su\xF2": "\u4E9B",
    "ne,n\xED": "\u5462",
    "ti\u011B,ti\u0113,ti\xE8,": "\u5E16",
    "l\u01D0ng,l\xEDng": "\u5CAD",
    "zh\u012B,zh\xEC": "\u77E5\u7EC7",
    "h\xE9,h\xE8,hu\xF3,hu\xF2,h\xFA": "\u548C",
    "g\xF2ng,g\u014Dng": "\u4F9B\u5171",
    "w\u011Bi,w\u0113i": "\u59D4",
    "c\xE8,z\xE8,zh\u0101i": "\u4FA7",
    "p\xF2,p\u01CEi": "\u8FEB",
    "de,d\xEC,d\xED": "\u7684",
    "c\u01CEi,c\xE0i": "\u91C7",
    "f\xFA,f\xF9": "\u670D",
    "d\u01D0,de": "\u5E95",
    "j\xECng,ch\u0113ng": "\u51C0",
    "ju\xE0n,ju\u01CEn": "\u5377",
    "qu\xE0n,xu\xE0n": "\u5238",
    "d\u0101n,sh\xE0n,ch\xE1n": "\u5355",
    "qi\u01CEn,ji\u0101n": "\u6D45",
    "xi\xE8,y\xEC": "\u6CC4",
    "p\u014D,b\xF3": "\u6CCA",
    "p\xE0o,p\u0101o": "\u6CE1",
    "n\xED,n\xEC": "\u6CE5",
    "z\xE9,sh\xEC": "\u6CFD",
    "k\u014Dng,k\xF2ng,k\u01D2ng": "\u7A7A",
    "l\xE1ng,l\xE0ng": "\u90CE",
    "xi\xE1ng,y\xE1ng": "\u8BE6",
    "l\xEC,d\xE0i": "\u96B6",
    "shu\u0101,shu\xE0": "\u5237",
    "ji\xE0ng,xi\xE1ng": "\u964D",
    "c\u0101n,sh\u0113n,c\u0113n,s\u0101n": "\u53C2",
    "d\xFA,d\xE0i": "\u6BD2",
    "ku\xE0,k\u016B": "\u630E",
    "d\u01CEng,d\xE0ng": "\u6321",
    "ku\xF2,gu\u0101": "\u62EC",
    "sh\xED,sh\xE8": "\u62FE",
    "ti\u0101o,ti\u01CEo": "\u6311",
    "sh\xE8n,sh\xE9n": "\u751A",
    "xi\xE0ng,h\xE0ng": "\u5DF7",
    "n\xE1n,n\u0101": "\u5357",
    "xi\u0101ng,xi\xE0ng": "\u76F8",
    "ch\xE1,zh\u0101": "\u67E5",
    "b\u01CEi,b\xF3,b\xF2": "\u67CF",
    "y\xE0o,y\u0101o": "\u8981",
    "y\xE1n,y\xE0n": "\u7814",
    "q\xEC,qi\xE8": "\u780C",
    "b\xE8i,b\u0113i": "\u80CC",
    "sh\u011Bng,x\u01D0ng": "\u7701",
    "xi\u0101o,xu\u0113": "\u524A",
    "h\u01D2ng,h\u014Dng,h\xF2ng": "\u54C4",
    "m\xE0o,m\xF2": "\u5192",
    "y\u01CE,y\u0101": "\u54D1",
    "s\u012B,s\u0101i": "\u601D",
    "m\u01CE,m\u0101,m\xE0": "\u8682",
    "hu\xE1,hu\u0101": "\u54D7",
    "y\xE8,y\xE0n,y\u0101n": "\u54BD",
    "z\xE1n,z\u01CE": "\u54B1",
    "h\u0101,h\u01CE,h\xE0": "\u54C8",
    "n\u01CE,n\u011Bi,na,n\xE9": "\u54EA",
    "h\u0101i,k\xE9": "\u54B3",
    "g\u01D4,g\u016B": "\u9AA8",
    "g\u0101ng,g\xE0ng": "\u94A2",
    "y\xE0o,yu\xE8": "\u94A5",
    "k\xE0n,k\u0101n": "\u770B",
    "zh\xF2ng,zh\u01D2ng,ch\xF3ng": "\u79CD",
    "bi\xE0n,pi\xE1n": "\u4FBF",
    "zh\xF2ng,ch\xF3ng": "\u91CD",
    "x\xECn,sh\u0113n": "\u4FE1",
    "zhu\u012B,du\u012B": "\u8FFD",
    "d\xE0i,d\u0101i": "\u5F85",
    "sh\xED,s\xEC,y\xEC": "\u98DF",
    "m\xE0i,m\xF2": "\u8109",
    "ji\u0101ng,ji\xE0ng": "\u5C06\u6D46",
    "d\xF9,du\xF3": "\u5EA6",
    "q\u012Bn,q\xECng": "\u4EB2",
    "ch\xE0,ch\u0101,ch\u0101i,c\u012B": "\u5DEE",
    "zh\xE0,zh\xE1": "\u70B8",
    "p\xE0o,p\xE1o,b\u0101o": "\u70AE",
    "s\u01CE,x\u01D0": "\u6D12",
    "x\u01D0,xi\u01CEn": "\u6D17",
    "ju\xE9,ji\xE0o": "\u89C9",
    "bi\u01CEn,pi\u0101n": "\u6241",
    "shu\u014D,shu\xEC,yu\xE8": "\u8BF4",
    "l\u01CEo,m\u01D4": "\u59E5",
    "g\u011Bi,j\u01D0": "\u7ED9",
    "lu\xF2,l\xE0o": "\u7EDC",
    "z\u01CEi,z\xE0i": "\u8F7D",
    "m\xE1i,m\xE1n": "\u57CB",
    "sh\u0101o,sh\xE0o": "\u634E\u7A0D",
    "d\u016B,d\u014Du": "\u90FD",
    "\xE1i,\u0101i": "\u6328",
    "m\xF2,m\xF9": "\u83AB",
    "\xE8,w\xF9,\u011B,w\u016B": "\u6076",
    "xi\xE0o,ji\xE0o": "\u6821",
    "h\xE9,h\xFA": "\u6838",
    "y\u016Bn,y\xF9n": "\u6655",
    "hu\xE0ng,hu\u01CEng": "\u6643",
    "\xE0i,\u0101i": "\u5509",
    "\u0101,\xE1,\u01CE,\xE0,a": "\u554A",
    "b\xE0,ba,p\xED": "\u7F62",
    "zu\xE0n,zu\u0101n": "\u94BB",
    "qi\u0101n,y\xE1n": "\u94C5",
    "ch\xE9ng,sh\xE8ng": "\u4E58",
    "m\xEC,b\xEC": "\u79D8\u6CCC",
    "ch\u0113ng,ch\xE8n,ch\xE8ng": "\u79F0",
    "d\xE0o,d\u01CEo": "\u5012",
    "t\u01CEng,ch\xE1ng": "\u5018",
    "ch\xE0ng,ch\u0101ng": "\u5021",
    "ch\xF2u,xi\xF9": "\u81ED",
    "sh\xE8,y\xE8,y\xEC": "\u5C04",
    "g\u0113,g\xE9": "\u80F3\u6401",
    "shu\u0101i,cu\u012B": "\u8870",
    "li\xE1ng,li\xE0ng": "\u51C9\u91CF",
    "ch\xF9,x\xF9": "\u755C",
    "p\xE1ng,b\xE0ng": "\u65C1\u78C5",
    "zh\u01CEng,zh\xE0ng": "\u6DA8",
    "y\u01D2ng,ch\u014Dng": "\u6D8C",
    "qi\u0101o,qi\u01CEo": "\u6084",
    "ji\u0101,jia,jie": "\u8FE6\u5BB6",
    "d\xFA,d\xF2u": "\u8BFB",
    "sh\xE0n,sh\u0101n": "\u6247",
    "sh\u0101n,sh\xE0n": "\u82EB",
    "b\xE8i,p\u012B": "\u88AB",
    "ti\xE1o,di\xE0o,zh\u014Du": "\u8C03",
    "b\u014D,b\u0101o": "\u5265",
    "n\xE9ng,n\xE0i": "\u80FD",
    "n\xE1n,n\xE0n,nu\xF3": "\u96BE",
    "p\xE1i,p\u01CEi": "\u6392",
    "ji\xE0o,ji\u0101o": "\u6559",
    "j\xF9,j\u016B": "\u636E",
    "zh\xF9,zhu\xF3,zhe": "\u8457",
    "j\u016Bn,j\xF9n": "\u83CC",
    "l\xE8,l\u0113i": "\u52D2",
    "sh\u0101o,s\xE0o": "\u68A2",
    "f\xF9,p\xEC": "\u526F",
    "pi\xE0o,pi\u0101o": "\u7968",
    "sh\xE8ng,ch\xE9ng": "\u76DB",
    "qu\xE8,qi\u0101o,qi\u01CEo": "\u96C0",
    "ch\xED,shi": "\u5319",
    "m\u012B,m\xED": "\u772F",
    "la,l\u0101": "\u5566",
    "sh\xE9,y\xED": "\u86C7",
    "l\xE8i,l\xE9i,l\u011Bi": "\u7D2F",
    "zh\u01CEn,ch\xE1n": "\u5D2D",
    "qu\u0101n,ju\xE0n,ju\u0101n": "\u5708",
    "l\xF3ng,l\u01D2ng": "\u7B3C",
    "d\xE9,d\u011Bi,de": "\u5F97",
    "ji\u01CE,ji\xE0": "\u5047",
    "m\u0101o,m\xE1o": "\u732B",
    "xu\xE1n,xu\xE0n": "\u65CB",
    "zhe,zhu\xF3,zh\xE1o,zh\u0101o": "\u7740",
    "l\u01DC,shu\xE0i": "\u7387",
    "g\xE0i,g\u011B,h\xE9": "\u76D6",
    "l\xEDn,l\xECn": "\u6DCB",
    "q\xFA,j\xF9": "\u6E20",
    "ji\xE0n,ji\u0101n": "\u6E10\u6E85",
    "h\xF9n,h\xFAn": "\u6DF7",
    "s\xF9,xi\u01D4,xi\xF9": "\u5BBF",
    "t\xE1n,d\xE0n": "\u5F39",
    "y\u01D0n,y\xECn": "\u9690",
    "j\u01D0ng,g\u011Bng": "\u9888",
    "l\u01DC,l\xF9": "\u7EFF",
    "q\u016B,c\xF9": "\u8D8B",
    "t\xED,d\u012B,d\u01D0": "\u63D0",
    "ji\u0113,q\xEC": "\u63ED",
    "l\u01D2u,l\u014Du": "\u6402",
    "q\u012B,j\u012B": "\u671F",
    "s\xE0n,s\u01CEn": "\u6563",
    "g\u011B,g\xE9": "\u845B",
    "zh\u0101o,ch\xE1o": "\u671D",
    "lu\xF2,l\xE0,l\xE0o": "\u843D",
    "y\u01D0,y\u012B": "\u6905",
    "g\xF9n,h\xF9n": "\u68CD",
    "zh\xED,shi": "\u6B96",
    "xi\xE0,sh\xE0": "\u53A6",
    "li\xE8,li\u011B": "\u88C2",
    "j\u01D0ng,y\u01D0ng": "\u666F",
    "p\u0113n,p\xE8n": "\u55B7",
    "p\u01CEo,p\xE1o": "\u8DD1",
    "h\u0113,h\xE8,y\xE8": "\u559D",
    "p\xF9,p\u016B": "\u94FA",
    "zh\xF9,zh\xFA": "\u7B51",
    "d\xE1,d\u0101": "\u7B54",
    "b\u01CEo,b\u01D4,p\xF9": "\u5821",
    "\xE0o,y\xF9": "\u5965",
    "f\u0101n,p\u0101n": "\u756A",
    "l\xE0,x\u012B": "\u814A",
    "g\u01CEng,ji\u01CEng": "\u6E2F",
    "c\xE9ng,z\u0113ng": "\u66FE",
    "y\xFA,t\u014Du": "\u6109",
    "qi\xE1ng,qi\u01CEng,ji\xE0ng": "\u5F3A",
    "sh\u01D4,zh\u01D4": "\u5C5E",
    "zh\u014Du,y\xF9": "\u7CA5",
    "sh\xE8,ni\xE8": "\u6444",
    "ti\xE1n,zh\xE8n": "\u586B",
    "m\xE9ng,m\u0113ng,m\u011Bng": "\u8499",
    "j\xECn,j\u012Bn": "\u7981",
    "l\xF9,li\xF9": "\u788C",
    "ti\xE0o,t\xE1o": "\u8DF3",
    "\xE9,y\u01D0": "\u86FE",
    "ji\u011B,ji\xE8,xi\xE8": "\u89E3",
    "sh\xF9,sh\u01D4,shu\xF2": "\u6570",
    "li\u016B,li\xF9": "\u6E9C",
    "s\u0101i,s\xE0i,s\xE8": "\u585E",
    "p\xEC,b\xEC": "\u8F9F",
    "f\xE8ng,f\xE9ng": "\u7F1D",
    "pi\u011B,pi\u0113": "\u6487",
    "m\xF3,m\xFA": "\u6A21",
    "b\u01CEng,b\xE0ng": "\u699C",
    "shang,ch\xE1ng": "\u88F3",
    "xi\u0101n,xi\u01CEn": "\u9C9C",
    "y\xED,n\u01D0": "\u7591",
    "g\u0101o,g\xE0o": "\u818F",
    "pi\u0101o,pi\xE0o,pi\u01CEo": "\u6F02",
    "su\u014D,s\xF9": "\u7F29",
    "q\xF9,c\xF9": "\u8DA3",
    "s\u0101,s\u01CE": "\u6492",
    "t\xE0ng,t\u0101ng": "\u8D9F",
    "h\xE9ng,h\xE8ng": "\u6A2A",
    "m\xE1n,m\xE9n": "\u7792",
    "b\xE0o,p\xF9": "\u66B4",
    "m\xF3,m\u0101": "\u6469",
    "h\xFA,h\u016B,h\xF9": "\u7CCA",
    "p\u012B,p\u01D0": "\u5288",
    "y\xE0n,y\u0101n": "\u71D5",
    "b\xE1o,b\xF3,b\xF2": "\u8584",
    "m\xF3,m\xF2": "\u78E8",
    "ji\u01CEo,zhu\xF3": "\u7F34",
    "c\xE1ng,z\xE0ng": "\u85CF",
    "f\xE1n,p\xF3": "\u7E41",
    "b\xEC,bei": "\u81C2",
    "ch\xE0n,zh\xE0n": "\u98A4",
    "ji\u0101ng,qi\xE1ng": "\u7586",
    "ji\xE1o,ju\xE9,ji\xE0o": "\u56BC",
    "r\u01CEng,r\u0101ng": "\u56B7",
    "l\xF9,l\xF2u": "\u9732",
    "n\xE1ng,n\u0101ng": "\u56CA",
    "h\u0101ng,b\xE8n": "\u592F",
    "\u0101o,w\u0101": "\u51F9",
    "f\xE9ng,p\xEDng": "\u51AF",
    "x\u016B,y\xF9": "\u5401",
    "l\xE8i,l\u0113": "\u808B",
    "l\u016Bn,l\xFAn": "\u62A1",
    "ji\xE8,g\xE0i": "\u82A5",
    "x\u012Bn,x\xECn": "\u82AF",
    "ch\u0101,ch\xE0": "\u6748",
    "xi\u0101o,xi\xE0o": "\u8096",
    "zh\u012B,z\u012B": "\u5431",
    "\u01D2u,\u014Du,\xF2u": "\u5455",
    "n\xE0,n\xE8": "\u5450",
    "qi\xE0ng,qi\u0101ng": "\u545B",
    "t\xFAn,d\xF9n": "\u56E4",
    "k\u0113ng,h\xE1ng": "\u542D",
    "di\xE0n,ti\xE1n": "\u4F43",
    "s\xEC,c\xEC": "\u4F3A",
    "di\xE0n,ti\xE1n,sh\xE8ng": "\u7538",
    "p\xE1o,b\xE0o": "\u5228",
    "du\xEC,ru\xEC,yu\xE8": "\u5151",
    "k\u0113,k\u011B": "\u5777",
    "tu\xF2,t\xE0,zh\xED": "\u62D3",
    "f\xFA,b\xEC": "\u62C2",
    "n\u01D0ng,n\xEDng,n\xECng": "\u62E7",
    "\xE0o,\u01CEo,ni\xF9": "\u62D7",
    "k\u0113,h\u0113": "\u82DB",
    "y\u0101n,y\u01CEn": "\u5944",
    "h\u0113,a,k\u0113": "\u5475",
    "g\u0101,k\u0101": "\u5496",
    "ji\u01CEo,y\xE1o": "\u4FA5",
    "ch\xE0,sh\u0101": "\u5239",
    "n\xFC\xE8,y\xE0o": "\u759F",
    "m\xE1ng,m\xE9ng": "\u6C13",
    "g\u0113,y\xEC": "\u7599",
    "j\u01D4,j\xF9": "\u6CAE",
    "z\xFA,c\xF9": "\u5352",
    "w\u01CEn,yu\u0101n": "\u5B9B",
    "m\xED,m\u01D0": "\u5F25",
    "q\xEC,qi\xE8,xi\xE8": "\u5951",
    "xi\xE9,ji\u0101": "\u631F",
    "du\xF2,du\u01D2": "\u579B",
    "zh\xE0,sh\u0101n,shi,c\xE8": "\u6805",
    "b\xF3,b\xE8i": "\u52C3",
    "zh\xF3u,zh\xF2u": "\u8F74",
    "li\u0113,li\u011B,li\xE9,lie": "\u54A7",
    "yo,y\u014D": "\u54DF",
    "qi\xE0o,xi\xE0o": "\u4FCF",
    "h\xF3u,h\xF2u": "\u4FAF",
    "p\xEDng,b\u01D0ng": "\u5C4F",
    "n\xE0,nu\xF3": "\u5A1C",
    "p\xE1,b\xE0": "\u8019",
    "q\u012B,x\u012B": "\u6816",
    "ji\u01CE,g\u01D4": "\u8D3E",
    "l\xE1o,l\xE0o": "\u5520",
    "b\xE0ng,b\xE8ng": "\u868C",
    "g\u014Dng,zh\u014Dng": "\u86A3",
    "li,l\u01D0,l\u012B": "\u54E9",
    "ju\xE8,ju\xE9": "\u5014",
    "y\u012Bn,y\u0101n,y\u01D0n": "\u6BB7",
    "w\u014D,gu\u014D": "\u6DA1",
    "l\xE0o,lu\xF2": "\u70D9",
    "ni\u01CEn,ni\u0113": "\u637B",
    "y\xE8,y\u0113": "\u6396",
    "ch\u0101n,xi\u0101n,c\xE0n,sh\u01CEn": "\u63BA",
    "d\u01CEn,sh\xE0n": "\u63B8",
    "f\u0113i,f\u011Bi": "\u83F2",
    "qi\xE1n,g\u0101n": "\u4E7E",
    "shu\xF2,sh\xED": "\u7855",
    "lu\u014D,lu\xF3,luo": "\u5570",
    "h\u01D4,xi\xE0": "\u552C",
    "d\u0101ng,ch\u0113ng": "\u94DB",
    "xi\u01CEn,x\u01D0": "\u94E3",
    "ji\u01CEo,ji\xE1o": "\u77EB",
    "ku\u01D0,gu\u012B": "\u5080",
    "j\xEC,zh\xE0i": "\u796D",
    "t\u01CEng,ch\u01CEng": "\u6DCC",
    "ch\xFAn,zh\u016Bn": "\u6DF3",
    "w\xE8i,y\xF9": "\u5C09",
    "du\xF2,hu\u012B": "\u5815",
    "chu\xF2,ch\u0101o": "\u7EF0",
    "b\u0113ng,b\u011Bng,b\xE8ng": "\u7EF7",
    "z\u014Dng,z\xE8ng": "\u7EFC",
    "zhu\xF3,zu\xF3": "\u7422",
    "chu\u01CEi,chu\xE0i,chu\u0101i,tu\xE1n,zhu\u012B": "\u63E3",
    "p\xE9ng,b\u0101ng": "\u5F6D",
    "zhu\u012B,chu\xED": "\u690E",
    "l\xE9ng,l\u0113ng,l\xEDng": "\u68F1",
    "qi\xE0o,qi\xE1o": "\u7FD8",
    "zh\u0101,ch\u0101": "\u55B3",
    "h\xE1,g\xE9": "\u86E4",
    "qi\xE0n,k\xE0n": "\u5D4C",
    "y\u0101n,\u0101": "\u814C",
    "d\u016Bn,du\xEC": "\u6566",
    "ku\xEC,hu\xEC": "\u6E83",
    "s\u0101o,s\u01CEo": "\u9A9A",
    "k\u01CEi,ji\u0113": "\u6977",
    "p\xEDn,b\u012Bn": "\u9891",
    "li\xFA,li\xF9": "\u998F",
    "n\xEC,ni\xE0o": "\u6EBA",
    "ji\u01CEo,ch\u0101o": "\u527F",
    "\xE1o,\u0101o": "\u71AC",
    "m\xE0n,w\xE0n": "\u8513",
    "ch\xE1,ch\u0101": "\u78B4",
    "x\u016Bn,x\xF9n": "\u718F",
    "da,d\xE1": "\u7629",
    "tu\xEC,t\xF9n": "\u892A",
    "li\xE1o,li\u0101o": "\u64A9",
    "cu\u014D,zu\u01D2": "\u64AE",
    "ch\xE1o,zh\u0101o": "\u5632",
    "h\u0113i,m\xF2": "\u563F",
    "zhu\xE0ng,chu\xE1ng": "\u5E62",
    "j\u012B,q\u01D0": "\u7A3D",
    "bi\u011B,bi\u0113": "\u762A",
    "li\xE1o,l\xE0o,l\u01CEo": "\u6F66",
    "ch\xE9ng,d\xE8ng": "\u6F84",
    "l\xE8i,l\xE9i": "\u64C2",
    "m\xF2,m\xE1": "\u87C6",
    "li\xE1o,li\u01CEo": "\u71CE",
    "li\xE0o,li\u01CEo": "\u77AD",
    "s\xE0o,s\u0101o": "\u81CA",
    "m\xED,m\xE9i": "\u7CDC",
    "hu\xF2,hu\u014D,hu\xE1": "\u8C41",
    "p\xF9,b\xE0o": "\u7011",
    "z\u01CEn,cu\xE1n": "\u6512",
    "b\xF2,b\u01D2": "\u7C38",
    "b\xF3,b\xF9": "\u7C3F"
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xs = Object.getOwnPropertySymbols
  , Hu = Object.prototype.hasOwnProperty
  , Bu = Object.prototype.propertyIsEnumerable;
function Uu(e) {
    if (e == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}
function Ku() {
    try {
        if (!Object.assign)
            return !1;
        var e = new String("abc");
        if (e[5] = "de",
        Object.getOwnPropertyNames(e)[0] === "5")
            return !1;
        for (var n = {}, t = 0; t < 10; t++)
            n["_" + String.fromCharCode(t)] = t;
        var i = Object.getOwnPropertyNames(n).map(function(s) {
            return n[s]
        });
        if (i.join("") !== "0123456789")
            return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(s) {
            r[s] = s
        }),
        Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var Wu = Ku() ? Object.assign : function(e, n) {
    for (var t, i = Uu(e), r, s = 1; s < arguments.length; s++) {
        t = Object(arguments[s]);
        for (var u in t)
            Hu.call(t, u) && (i[u] = t[u]);
        if (xs) {
            r = xs(t);
            for (var l = 0; l < r.length; l++)
                Bu.call(t, r[l]) && (i[r[l]] = t[r[l]])
        }
    }
    return i
}
  , Yu = {
    \u0101: "a1",
    \u00E1: "a2",
    \u01CE: "a3",
    \u00E0: "a4",
    \u0113: "e1",
    \u00E9: "e2",
    \u011B: "e3",
    \u00E8: "e4",
    \u014D: "o1",
    \u00F3: "o2",
    \u01D2: "o3",
    \u00F2: "o4",
    \u012B: "i1",
    \u00ED: "i2",
    \u01D0: "i3",
    \u00EC: "i4",
    \u016B: "u1",
    \u00FA: "u2",
    \u01D4: "u3",
    \u00F9: "u4",
    \u00FC: "v0",
    \u01D8: "v2",
    \u01DA: "v3",
    \u01DC: "v4",
    \u0144: "n2",
    \u0148: "n3",
    "\uE7C7": "m2"
};
const Xu = Wu
  , he = {
    NORMAL: 0,
    TONE: 1,
    TONE2: 2,
    TO3NE: 5,
    INITIALS: 3,
    FIRST_LETTER: 4
}
  , ot = {
    style: he.TONE,
    segment: !1,
    heteronym: !1
}
  , si = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(",")
  , nn = Yu
  , oi = new RegExp("([" + Object.keys(nn).join("") + "])","g")
  , li = /([aeoiuvnm])([0-4])$/;
function Ju(e) {
    for (let n = 0, t = si.length; n < t; n++)
        if (e.indexOf(si[n]) === 0)
            return si[n];
    return ""
}
class lt {
    constructor(n) {
        this._dict = n
    }
    convert(n, t) {
        if (typeof n != "string")
            return [];
        t = Xu({}, ot, t);
        let i = []
          , r = "";
        for (let s = 0, u, l, o = n.length; s < o; s++)
            l = n[s],
            u = l.charCodeAt(0),
            this._dict[u] ? (r.length > 0 && (i.push([r]),
            r = ""),
            i.push(this.single_pinyin(l, t))) : r += l;
        return r.length > 0 && (i.push([r]),
        r = ""),
        i
    }
    single_pinyin(n, t) {
        if (typeof n != "string")
            return [];
        if (n.length !== 1)
            return this.single_pinyin(n.charAt(0), t);
        let i = n.charCodeAt(0);
        if (!this._dict[i])
            return [n];
        let r = this._dict[i].split(",");
        if (!t.heteronym)
            return [lt.toFixed(r[0], t.style)];
        let s = {}
          , u = [];
        for (let l = 0, o, f = r.length; l < f; l++)
            o = lt.toFixed(r[l], t.style),
            !s.hasOwnProperty(o) && (s[o] = o,
            u.push(o));
        return u
    }
    static toFixed(n, t) {
        let i = "", r, s;
        switch (t) {
        case he.INITIALS:
            return Ju(n);
        case he.FIRST_LETTER:
            return r = n.charAt(0),
            nn.hasOwnProperty(r) && (r = nn[r].charAt(0)),
            r;
        case he.NORMAL:
            return n.replace(oi, function(u, l) {
                return nn[l].replace(li, "$1")
            });
        case he.TO3NE:
            return n.replace(oi, function(u, l) {
                return nn[l]
            });
        case he.TONE2:
            return s = n.replace(oi, function(u, l) {
                return i = nn[l].replace(li, "$2"),
                nn[l].replace(li, "$1")
            }),
            s + i;
        case he.TONE:
        default:
            return n
        }
    }
    compare(n, t) {
        const i = this.convert(n, ot)
          , r = this.convert(t, ot);
        return String(i).localeCompare(String(r))
    }
    static get STYLE_NORMAL() {
        return he.NORMAL
    }
    static get STYLE_TONE() {
        return he.TONE
    }
    static get STYLE_TONE2() {
        return he.TONE2
    }
    static get STYLE_TO3NE() {
        return he.TO3NE
    }
    static get STYLE_INITIALS() {
        return he.INITIALS
    }
    static get STYLE_FIRST_LETTER() {
        return he.FIRST_LETTER
    }
    static get DEFAULT_OPTIONS() {
        return ot
    }
}
var Vu = lt;
function Zu(e) {
    let n, t = {};
    for (let i in e) {
        n = e[i];
        for (let r = 0, s, u = n.length; r < u; r++)
            s = n.charCodeAt(r),
            t.hasOwnProperty(s) ? t[s] += "," + i : t[s] = i
    }
    return t
}
const Qu = Zu(Du)
  , tn = Vu
  , ut = new tn(Qu);
qe.exports = ut.convert.bind(ut);
qe.exports.compare = ut.compare.bind(ut);
qe.exports.STYLE_NORMAL = tn.STYLE_NORMAL;
qe.exports.STYLE_TONE = tn.STYLE_TONE;
qe.exports.STYLE_TONE2 = tn.STYLE_TONE2;
qe.exports.STYLE_TO3NE = tn.STYLE_TO3NE;
qe.exports.STYLE_INITIALS = tn.STYLE_INITIALS;
qe.exports.STYLE_FIRST_LETTER = tn.STYLE_FIRST_LETTER;
var _c = qe.exports;
export {rc as A, cc as B, fc as C, ec as D, nc as E, ye as F, gc as G, ee as H, xc as I, Ie as J, ac as K, Ge as L, _c as P, oc as a, mc as b, sc as c, ic as d, pc as e, hc as f, rt as g, ve as h, Tr as i, ze as j, jr as k, gt as l, lc as m, dt as n, wr as o, ul as p, Wi as q, ge as r, yc as s, Gu as t, su as u, uc as v, tc as w, bc as x, dc as y, vo as z};
