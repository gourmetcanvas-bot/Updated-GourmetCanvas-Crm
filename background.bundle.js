(() => {
  "use strict";
  var e = {
      85965: (e, t, n) => {
        e.exports = n.p + "pkg/wasm_core_bg.wasm";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return (e[r](a, a.exports, n), a.exports);
  }
  ((n.m = e),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.p = "/"),
    (n.b = self.location + ""));
  const r = "TJHVW2UJ",
    o = "3.0.1.32";
  let a;
  function c(e) {
    const t = a.__externref_table_alloc();
    return (a.__wbindgen_export_2.set(t, e), t);
  }
  function i(e, t) {
    try {
      return e.apply(this, t);
    } catch (e) {
      const t = c(e);
      a.__wbindgen_exn_store(t);
    }
  }
  const s =
    "undefined" != typeof TextDecoder
      ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
      : {
          decode: () => {
            throw Error("TextDecoder not available");
          },
        };
  "undefined" != typeof TextDecoder && s.decode();
  let _ = null;
  function u() {
    return (
      (null !== _ && 0 !== _.byteLength) ||
        (_ = new Uint8Array(a.memory.buffer)),
      _
    );
  }
  function b(e, t) {
    return ((e >>>= 0), s.decode(u().subarray(e, e + t)));
  }
  let f = 0;
  const g =
      "undefined" != typeof TextEncoder
        ? new TextEncoder("utf-8")
        : {
            encode: () => {
              throw Error("TextEncoder not available");
            },
          },
    w =
      "function" == typeof g.encodeInto
        ? function (e, t) {
            return g.encodeInto(e, t);
          }
        : function (e, t) {
            const n = g.encode(e);
            return (t.set(n), { read: e.length, written: n.length });
          };
  function d(e, t, n) {
    if (void 0 === n) {
      const n = g.encode(e),
        r = t(n.length, 1) >>> 0;
      return (
        u()
          .subarray(r, r + n.length)
          .set(n),
        (f = n.length),
        r
      );
    }
    let r = e.length,
      o = t(r, 1) >>> 0;
    const a = u();
    let c = 0;
    for (; c < r; c++) {
      const t = e.charCodeAt(c);
      if (t > 127) break;
      a[o + c] = t;
    }
    if (c !== r) {
      (0 !== c && (e = e.slice(c)),
        (o = n(o, r, (r = c + 3 * e.length), 1) >>> 0));
      const t = u().subarray(o + c, o + r);
      ((c += w(e, t).written), (o = n(o, r, c, 1) >>> 0));
    }
    return ((f = c), o);
  }
  let l = null;
  function h() {
    return (
      (null === l ||
        !0 === l.buffer.detached ||
        (void 0 === l.buffer.detached && l.buffer !== a.memory.buffer)) &&
        (l = new DataView(a.memory.buffer)),
      l
    );
  }
  function m(e) {
    return null == e;
  }
  const p =
    "undefined" == typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => {
          a.__wbindgen_export_6.get(e.dtor)(e.a, e.b);
        });
  function y(e, t, n, r) {
    const o = { a: e, b: t, cnt: 1, dtor: n },
      c = (...e) => {
        o.cnt++;
        const t = o.a;
        o.a = 0;
        try {
          return r(t, o.b, ...e);
        } finally {
          0 === --o.cnt
            ? (a.__wbindgen_export_6.get(o.dtor)(t, o.b), p.unregister(o))
            : (o.a = t);
        }
      };
    return ((c.original = o), p.register(c, o, o), c);
  }
  function E(e) {
    const t = typeof e;
    if ("number" == t || "boolean" == t || null == e) return `${e}`;
    if ("string" == t) return `"${e}"`;
    if ("symbol" == t) {
      const t = e.description;
      return null == t ? "Symbol" : `Symbol(${t})`;
    }
    if ("function" == t) {
      const t = e.name;
      return "string" == typeof t && t.length > 0
        ? `Function(${t})`
        : "Function";
    }
    if (Array.isArray(e)) {
      const t = e.length;
      let n = "[";
      t > 0 && (n += E(e[0]));
      for (let r = 1; r < t; r++) n += ", " + E(e[r]);
      return ((n += "]"), n);
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let r;
    if (!(n && n.length > 1)) return toString.call(e);
    if (((r = n[1]), "Object" == r))
      try {
        return "Object(" + JSON.stringify(e) + ")";
      } catch (e) {
        return "Object";
      }
    return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r;
  }
  function T(e, t) {
    a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb07318bc134c2c3d(
      e,
      t,
    );
  }
  function A(e, t, n) {
    a.closure219_externref_shim(e, t, n);
  }
  const O = ["same-origin", "no-cors", "cors", "navigate"];
  function S() {
    const e = { wbg: {} };
    return (
      (e.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
        return e.buffer;
      }),
      (e.wbg.__wbg_call_672a4d21634d4a24 = function () {
        return i(function (e, t) {
          return e.call(t);
        }, arguments);
      }),
      (e.wbg.__wbg_call_7cccdd69e0791ae2 = function () {
        return i(function (e, t, n) {
          return e.call(t, n);
        }, arguments);
      }),
      (e.wbg.__wbg_call_833bed5770ea2041 = function () {
        return i(function (e, t, n, r) {
          return e.call(t, n, r);
        }, arguments);
      }),
      (e.wbg.__wbg_crypto_574e78ad8b13b65f = function (e) {
        return e.crypto;
      }),
      (e.wbg.__wbg_entries_3265d4158b33e5dc = function (e) {
        return Object.entries(e);
      }),
      (e.wbg.__wbg_error_7534b8e9a36f1ab4 = function (e, t) {
        let n, r;
        try {
          ((n = e), (r = t), console.error(b(e, t)));
        } finally {
          a.__wbindgen_free(n, r, 1);
        }
      }),
      (e.wbg.__wbg_from_2a5d3e218e67aa85 = function (e) {
        return Array.from(e);
      }),
      (e.wbg.__wbg_getFromStorage_b7b2fa9db5e17015 = function (e, t) {
        return getFromStorage(b(e, t));
      }),
      (e.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function () {
        return i(function (e, t) {
          e.getRandomValues(t);
        }, arguments);
      }),
      (e.wbg.__wbg_getTime_46267b1c24877e30 = function (e) {
        return e.getTime();
      }),
      (e.wbg.__wbg_get_67b2ba62fc30de12 = function () {
        return i(function (e, t) {
          return Reflect.get(e, t);
        }, arguments);
      }),
      (e.wbg.__wbg_get_b9b93047fe3cf45b = function (e, t) {
        return e[t >>> 0];
      }),
      (e.wbg.__wbg_has_a5ea9117f258a0ec = function () {
        return i(function (e, t) {
          return Reflect.has(e, t);
        }, arguments);
      }),
      (e.wbg.__wbg_headers_7852a8ea641c1379 = function (e) {
        return e.headers;
      }),
      (e.wbg.__wbg_instanceof_Object_7f2dcef8f78644a4 = function (e) {
        let t;
        try {
          t = e instanceof Object;
        } catch (e) {
          t = !1;
        }
        return t;
      }),
      (e.wbg.__wbg_instanceof_Promise_935168b8f4b49db3 = function (e) {
        let t;
        try {
          t = e instanceof Promise;
        } catch (e) {
          t = !1;
        }
        return t;
      }),
      (e.wbg.__wbg_instanceof_Response_f2cc20d9f7dfd644 = function (e) {
        let t;
        try {
          t = e instanceof Response;
        } catch (e) {
          t = !1;
        }
        return t;
      }),
      (e.wbg.__wbg_json_1671bfa3e3625686 = function () {
        return i(function (e) {
          return e.json();
        }, arguments);
      }),
      (e.wbg.__wbg_length_e2d2a49132c1b256 = function (e) {
        return e.length;
      }),
      (e.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function (e) {
        return e.msCrypto;
      }),
      (e.wbg.__wbg_new0_f788a2397c7ca929 = function () {
        return new Date();
      }),
      (e.wbg.__wbg_new_23a2665fac83c611 = function (e, t) {
        try {
          var n = { a: e, b: t };
          const r = new Promise((e, t) => {
            const r = n.a;
            n.a = 0;
            try {
              return (function (e, t, n, r) {
                a.closure231_externref_shim(e, t, n, r);
              })(r, n.b, e, t);
            } finally {
              n.a = r;
            }
          });
          return r;
        } finally {
          n.a = n.b = 0;
        }
      }),
      (e.wbg.__wbg_new_405e22f390576ce2 = function () {
        return new Object();
      }),
      (e.wbg.__wbg_new_5e0be73521bc8c17 = function () {
        return new Map();
      }),
      (e.wbg.__wbg_new_78feb108b6472713 = function () {
        return new Array();
      }),
      (e.wbg.__wbg_new_8a6f238a6ece86ea = function () {
        return new Error();
      }),
      (e.wbg.__wbg_new_a12002a7f91c75be = function (e) {
        return new Uint8Array(e);
      }),
      (e.wbg.__wbg_newnoargs_105ed471475aaf50 = function (e, t) {
        return new Function(b(e, t));
      }),
      (e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function (
        e,
        t,
        n,
      ) {
        return new Uint8Array(e, t >>> 0, n >>> 0);
      }),
      (e.wbg.__wbg_newwithlength_a381634e90c276d4 = function (e) {
        return new Uint8Array(e >>> 0);
      }),
      (e.wbg.__wbg_newwithlength_c4c419ef0bc8a1f8 = function (e) {
        return new Array(e >>> 0);
      }),
      (e.wbg.__wbg_newwithstrandinit_06c535e0a867c635 = function () {
        return i(function (e, t, n) {
          return new Request(b(e, t), n);
        }, arguments);
      }),
      (e.wbg.__wbg_node_905d3e251edff8a2 = function (e) {
        return e.node;
      }),
      (e.wbg.__wbg_parse_def2e24ef1252aff = function () {
        return i(function (e, t) {
          return JSON.parse(b(e, t));
        }, arguments);
      }),
      (e.wbg.__wbg_process_dc0fbacc7c1c06f7 = function (e) {
        return e.process;
      }),
      (e.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function (e) {
        queueMicrotask(e);
      }),
      (e.wbg.__wbg_queueMicrotask_d3219def82552485 = function (e) {
        return e.queueMicrotask;
      }),
      (e.wbg.__wbg_randomFillSync_ac0988aba3254290 = function () {
        return i(function (e, t) {
          e.randomFillSync(t);
        }, arguments);
      }),
      (e.wbg.__wbg_random_3ad904d98382defe = function () {
        return Math.random();
      }),
      (e.wbg.__wbg_require_60cc747a6bc5215a = function () {
        return i(function () {
          return module.require;
        }, arguments);
      }),
      (e.wbg.__wbg_resolve_4851785c9c5f573d = function (e) {
        return Promise.resolve(e);
      }),
      (e.wbg.__wbg_sendMessageToTab_1f766ad729d516ef = function (e) {
        return sendMessageToTab(e);
      }),
      (e.wbg.__wbg_set_11cd83f45504cedf = function () {
        return i(function (e, t, n, r, o) {
          e.set(b(t, n), b(r, o));
        }, arguments);
      }),
      (e.wbg.__wbg_set_37837023f3d740e8 = function (e, t, n) {
        e[t >>> 0] = n;
      }),
      (e.wbg.__wbg_set_3f1d0b984ed272ed = function (e, t, n) {
        e[t] = n;
      }),
      (e.wbg.__wbg_set_65595bdd868b3009 = function (e, t, n) {
        e.set(t, n >>> 0);
      }),
      (e.wbg.__wbg_set_8fc6bf8a5b1071d1 = function (e, t, n) {
        return e.set(t, n);
      }),
      (e.wbg.__wbg_set_bb8cecf6a62b9f46 = function () {
        return i(function (e, t, n) {
          return Reflect.set(e, t, n);
        }, arguments);
      }),
      (e.wbg.__wbg_setbody_5923b78a95eedf29 = function (e, t) {
        e.body = t;
      }),
      (e.wbg.__wbg_setmethod_3c5280fe5d890842 = function (e, t, n) {
        e.method = b(t, n);
      }),
      (e.wbg.__wbg_setmode_5dc300b865044b65 = function (e, t) {
        e.mode = O[t];
      }),
      (e.wbg.__wbg_stack_0ed75d68575b0f3c = function (e, t) {
        const n = d(t.stack, a.__wbindgen_malloc, a.__wbindgen_realloc),
          r = f;
        (h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0));
      }),
      (e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function () {
        const e = "undefined" == typeof global ? null : global;
        return m(e) ? 0 : c(e);
      }),
      (e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function () {
        const e = "undefined" == typeof globalThis ? null : globalThis;
        return m(e) ? 0 : c(e);
      }),
      (e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function () {
        const e = "undefined" == typeof self ? null : self;
        return m(e) ? 0 : c(e);
      }),
      (e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function () {
        const e = "undefined" == typeof window ? null : window;
        return m(e) ? 0 : c(e);
      }),
      (e.wbg.__wbg_status_f6360336ca686bf0 = function (e) {
        return e.status;
      }),
      (e.wbg.__wbg_stringify_f7ed6987935b4a24 = function () {
        return i(function (e) {
          return JSON.stringify(e);
        }, arguments);
      }),
      (e.wbg.__wbg_subarray_aa9065fa9dc5df96 = function (e, t, n) {
        return e.subarray(t >>> 0, n >>> 0);
      }),
      (e.wbg.__wbg_text_7805bea50de2af49 = function () {
        return i(function (e) {
          return e.text();
        }, arguments);
      }),
      (e.wbg.__wbg_then_44b73946d2fb3e7d = function (e, t) {
        return e.then(t);
      }),
      (e.wbg.__wbg_then_48b406749878a531 = function (e, t, n) {
        return e.then(t, n);
      }),
      (e.wbg.__wbg_versions_c01dfd4722a88165 = function (e) {
        return e.versions;
      }),
      (e.wbg.__wbindgen_bigint_from_i64 = function (e) {
        return e;
      }),
      (e.wbg.__wbindgen_bigint_from_u64 = function (e) {
        return BigInt.asUintN(64, e);
      }),
      (e.wbg.__wbindgen_boolean_get = function (e) {
        return "boolean" == typeof e ? (e ? 1 : 0) : 2;
      }),
      (e.wbg.__wbindgen_cb_drop = function (e) {
        const t = e.original;
        if (1 == t.cnt--) return ((t.a = 0), !0);
        return !1;
      }),
      (e.wbg.__wbindgen_closure_wrapper1000 = function (e, t, n) {
        return y(e, t, 220, A);
      }),
      (e.wbg.__wbindgen_closure_wrapper541 = function (e, t, n) {
        return y(e, t, 170, T);
      }),
      (e.wbg.__wbindgen_debug_string = function (e, t) {
        const n = d(E(t), a.__wbindgen_malloc, a.__wbindgen_realloc),
          r = f;
        (h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0));
      }),
      (e.wbg.__wbindgen_error_new = function (e, t) {
        return new Error(b(e, t));
      }),
      (e.wbg.__wbindgen_init_externref_table = function () {
        const e = a.__wbindgen_export_2,
          t = e.grow(4);
        (e.set(0, void 0),
          e.set(t + 0, void 0),
          e.set(t + 1, null),
          e.set(t + 2, !0),
          e.set(t + 3, !1));
      }),
      (e.wbg.__wbindgen_is_falsy = function (e) {
        return !e;
      }),
      (e.wbg.__wbindgen_is_function = function (e) {
        return "function" == typeof e;
      }),
      (e.wbg.__wbindgen_is_object = function (e) {
        return "object" == typeof e && null !== e;
      }),
      (e.wbg.__wbindgen_is_string = function (e) {
        return "string" == typeof e;
      }),
      (e.wbg.__wbindgen_is_undefined = function (e) {
        return void 0 === e;
      }),
      (e.wbg.__wbindgen_memory = function () {
        return a.memory;
      }),
      (e.wbg.__wbindgen_number_get = function (e, t) {
        const n = "number" == typeof t ? t : void 0;
        (h().setFloat64(e + 8, m(n) ? 0 : n, !0),
          h().setInt32(e + 0, !m(n), !0));
      }),
      (e.wbg.__wbindgen_number_new = function (e) {
        return e;
      }),
      (e.wbg.__wbindgen_rethrow = function (e) {
        throw e;
      }),
      (e.wbg.__wbindgen_string_get = function (e, t) {
        const n = "string" == typeof t ? t : void 0;
        var r = m(n) ? 0 : d(n, a.__wbindgen_malloc, a.__wbindgen_realloc),
          o = f;
        (h().setInt32(e + 4, o, !0), h().setInt32(e + 0, r, !0));
      }),
      (e.wbg.__wbindgen_string_new = function (e, t) {
        return b(e, t);
      }),
      (e.wbg.__wbindgen_throw = function (e, t) {
        throw new Error(b(e, t));
      }),
      e
    );
  }
  function N(e, t) {
    return (
      (a = e.exports),
      (C.__wbindgen_wasm_module = t),
      (l = null),
      (_ = null),
      a.__wbindgen_start(),
      a
    );
  }
  async function C(e) {
    if (void 0 !== a) return a;
    (void 0 !== e &&
      (Object.getPrototypeOf(e) === Object.prototype
        ? ({ module_or_path: e } = e)
        : console.warn(
            "using deprecated parameters for the initialization function; pass a single object instead",
          )),
      void 0 === e && (e = new URL(n(85965), n.b)));
    const t = S();
    ("string" == typeof e ||
      ("function" == typeof Request && e instanceof Request) ||
      ("function" == typeof URL && e instanceof URL)) &&
      (e = fetch(e));
    const { instance: r, module: o } = await (async function (e, t) {
      if ("function" == typeof Response && e instanceof Response) {
        if ("function" == typeof WebAssembly.instantiateStreaming)
          try {
            return await WebAssembly.instantiateStreaming(e, t);
          } catch (t) {
            if ("application/wasm" == e.headers.get("Content-Type")) throw t;
            console.warn(
              "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
              t,
            );
          }
        const n = await e.arrayBuffer();
        return await WebAssembly.instantiate(n, t);
      }
      {
        const n = await WebAssembly.instantiate(e, t);
        return n instanceof WebAssembly.Instance
          ? { instance: n, module: e }
          : n;
      }
    })(await e, t);
    return N(r, o);
  }
  const I = C;
  function R(e, t) {
    return new Promise((n, r) => {
      const o = {};
      ((o[e] = t),
        chrome.storage?.local?.set(o, () => {
          chrome.runtime.lastError ? r(chrome.runtime.lastError.message) : n();
        }));
    });
  }
  function j(e) {
    try {
      return new Promise((t, n) => {
        chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, function (r) {
          const o = r[0];
          o?.id &&
            chrome.tabs.sendMessage(o?.id, e, (e) => {
              chrome.runtime.lastError
                ? n(chrome.runtime.lastError.message)
                : t(e);
            });
        });
      });
    } catch (e) {
      console.log("error: ", e);
    }
  }
  function v(e) {
    chrome.runtime.onMessage.addListener(
      (e, t, n) => (
        "SET_UNINSTALL_URL" == e.subject
          ? (chrome.runtime.setUninstallURL(e.url), n({}))
          : "SEND_RICH_NOTIFICATION" == e.subject
            ? (chrome.notifications.create(
                `${e.notificationId}$@$notification${Date.now()}`,
                {
                  type: "basic",
                  iconUrl: "icon-128.png",
                  title: e.title,
                  message: e.message,
                },
              ),
              n({}))
            : "FIND_GOOGLE_AUTH_TOKEN" == e.subject
              ? chrome.identity.getAuthToken(
                  { interactive: e.interactive },
                  function (t) {
                    e.userinfo
                      ? fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                          headers: { Authorization: `Bearer ${t}` },
                        })
                          .then((e) => e.json())
                          .then((e) => {
                            n({ token: t, userData: e });
                          })
                      : n({ token: t });
                  },
                )
              : "REMOVE_GOOGLE_AUTH_TOKEN" == e.subject
                ? chrome.identity.getAuthToken(
                    { interactive: e.interactive },
                    function (e) {
                      fetch(
                        `https://accounts.google.com/o/oauth2/revoke?token=${e}`,
                        { headers: { Authorization: `Bearer ${e}` } },
                      )
                        .then((e) => e.json())
                        .then((e) => {
                          (chrome.identity.clearAllCachedAuthTokens((e) => {
                            console.log(">> logout all auth tokens");
                          }),
                            n({ token: null }));
                        });
                    },
                  )
                : "FIND_WORKFLOW_PROFILE_B" == e.subject
                  ? L?.(e.data?.requestData).then((e) => {
                      try {
                        n(e);
                      } catch (e) {
                        console.log(e);
                      }
                    })
                  : "EXECUTE_USER_DATA" == e.subject
                    ? (async function () {
                        return new Promise((e) => {
                          chrome.management.get(
                            chrome.runtime.id,
                            function (t) {
                              "development" === t.installType ? e(1) : e(0);
                            },
                          );
                        });
                      })().then((e) => {
                        n(e);
                      })
                    : "GET_LOGIN_PAGE" === e.subject
                      ? chrome.tabs.create(
                          { url: "https://crm.whatsapcrm.in/dashboard.php" },
                          (e) => {
                            !(async function () {
                              const { access_token: e, SELECTED_LANGUAGE: t } =
                                await chrome.storage.local.get("access_token");
                              chrome.tabs.query({}, (n) => {
                                n.forEach((n) => {
                                  n.url?.startsWith("https://crm.whatsapcrm.in/dashboard.php") &&
                                    chrome.tabs.sendMessage(n.id, {
                                      type: "TOKEN_READY",
                                      data: {
                                        access_token: e,
                                        SELECTED_LANGUAGE: t,
                                      },
                                    });
                                });
                              });
                            })();
                          },
                        )
                      : "SAVE_TOKEN" === e.type
                        ? (chrome.storage.local.set({
                            access_token: e.token,
                            is_logged_in: !!e.token,
                            user: e?.user,
                          }),
                          j({
                            subject: "ON_LOGGED_IN",
                            is_logged_in: !!e.token,
                          }))
                        : "GET_TOKEN" === e.type
                          ? chrome.storage.local.get("access_token", (e) => {
                              n({ token: e.access_token });
                            })
                          : "GET_LOGGED_IN_DATA" === e.type
                            ? chrome.storage.local.get("user", (e) => {
                                n({
                                  data: e?.user ? JSON.parse(e?.user) : null,
                                });
                              })
                            : "CHANGE_LANGUAGE" === e.subject
                              ? chrome.tabs.query({}, (t) => {
                                  t.forEach((t) => {
                                    t.url?.startsWith(
                                      "https://admin.wawf.app",
                                    ) &&
                                      chrome.tabs.sendMessage(t.id, {
                                        type: "CHANGE_LANGUAGE",
                                        data: e.data,
                                      });
                                  });
                                })
                              : "SET_THEME" === e.subject
                                ? (R("WR1Y5AR_THEME", e?.data),
                                  chrome.tabs.query({}, (t) => {
                                    t.forEach((t) => {
                                      t.url?.startsWith(
                                        "https://admin.wawf.app",
                                      ) &&
                                        chrome.tabs.sendMessage(t.id, {
                                          type: "SET_THEME",
                                          data: e.data,
                                        });
                                    });
                                  }))
                                : "SET_R_ID" === e.subject
                                  ? chrome.tabs.query({}, (t) => {
                                      t.forEach((t) => {
                                        t.url?.startsWith(
                                          "https://admin.wawf.app",
                                        ) &&
                                          chrome.tabs.sendMessage(t.id, {
                                            type: "SET_R_ID",
                                            data: e.data,
                                          });
                                      });
                                    })
                                  : "initial_license_key" === e.subject
                                    ? chrome.tabs.query({}, (t) => {
                                        t.forEach((t) => {
                                          t.url?.startsWith(
                                            "https://admin.wawf.app",
                                          ) &&
                                            chrome.tabs.sendMessage(t.id, {
                                              type: "initial_license_key",
                                              data: e.data,
                                            });
                                        });
                                      })
                                    : "SEND_ACCESS_TOKEN" === e.subject
                                      ? chrome.tabs.query({}, (t) => {
                                          t.forEach((t) => {
                                            t.url?.startsWith(
                                              "https://admin.wawf.app",
                                            ) &&
                                              chrome.tabs.sendMessage(t.id, {
                                                type: "SEND_ACCESS_TOKEN",
                                                data: e.data,
                                              });
                                          });
                                        })
                                      : "CHECK_FREE_TRIAL" === e.subject
                                        ? chrome.tabs.query({}, (t) => {
                                            t.forEach((t) => {
                                              t.url?.startsWith(
                                                "https://admin.wawf.app",
                                              ) &&
                                                chrome.tabs.sendMessage(t.id, {
                                                  type: "CHECK_FREE_TRIAL",
                                                  data: e.data,
                                                });
                                            });
                                          })
                                        : "ext_version" === e.subject
                                          ? chrome.tabs.query({}, (t) => {
                                              t.forEach((t) => {
                                                t.url?.startsWith(
                                                  "https://admin.wawf.app",
                                                ) &&
                                                  chrome.tabs.sendMessage(
                                                    t.id,
                                                    {
                                                      type: "ext_version",
                                                      data: e.data,
                                                    },
                                                  );
                                              });
                                            })
                                          : "GET_CONTACT_US_DETAIL_B" === e.type
                                            ? j({
                                                subject:
                                                  "ON_GET_CONTACT_US_DETAIL_A",
                                                is_logged_in: !!e.token,
                                              })
                                            : "SEND_CONTACT_US_DETAIL" ===
                                                e.subject
                                              ? chrome.tabs.query({}, (t) => {
                                                  t.forEach((t) => {
                                                    t.url?.startsWith(
                                                      "https://admin.wawf.app",
                                                    ) &&
                                                      chrome.tabs.sendMessage(
                                                        t.id,
                                                        {
                                                          type: "SEND_CONTACT_US_DETAIL",
                                                          data: e.data,
                                                        },
                                                      );
                                                  });
                                                })
                                              : "ON_LICENCE_KEY_UPDATE" ===
                                                  e.subject
                                                ? chrome.tabs.query({}, (t) => {
                                                    t.forEach((t) => {
                                                      t.url?.startsWith(
                                                        "https://admin.wawf.app",
                                                      ) &&
                                                        chrome.tabs.sendMessage(
                                                          t.id,
                                                          {
                                                            type: "ON_LICENCE_KEY_UPDATE",
                                                            data: e.data,
                                                          },
                                                        );
                                                    });
                                                  })
                                                : "KEY_ATTACHED_SUCCESS" ===
                                                    e.subject &&
                                                  chrome.tabs.query({}, (t) => {
                                                    t.forEach((t) => {
                                                      t.url?.startsWith(
                                                        "https://admin.wawf.app",
                                                      ) &&
                                                        chrome.tabs.sendMessage(
                                                          t.id,
                                                          {
                                                            type: "KEY_ATTACHED_SUCCESS",
                                                            data: e.data,
                                                          },
                                                        );
                                                    });
                                                  }),
        !0
      ),
    );
  }
  const L = async (e) => {
    try {
      if (
        (await (async () => {
          try {
            await I();
          } catch (e) {
            console.log("error in init: ", e);
          }
        })(),
        !e || !e.url)
      )
        return (
          console.error("Invalid data format: missing url property", e),
          { state: 400, error: "Invalid data format: missing url property" }
        );
      const t = await (function (e) {
        return a.fetch_api_call(e);
      })(e);
      return t;
    } catch (e) {
      return { state: 404 };
    }
  };
  (R("WR1Y5AR_UNIQUE", r),
    R("WR1Y5A_VERSION", o),
    (n.g.setToStorage = R),
    (n.g.sendMessageToTab = j),
    (n.g.getFromStorage = function (e) {
      return new Promise((t, n) => {
        chrome.storage.local.get(e || null, (r) => {
          chrome.runtime.lastError
            ? n(chrome.runtime.lastError.message)
            : t(e ? r[e] : r);
        });
      });
    }),
    (n.g.listenToMessagesFromContent = v),
    chrome.runtime.onInstalled.addListener(async function (e) {
      // (await k("https://api.waworkflow.com/api/v1/user/workflow"),
        "install" == e.reason &&
          chrome.tabs.create({
            url: "https://crm.whatsapcrm.in/dashboard.php",
            active: !1,
          }),
        "update" === e.reason &&
          chrome.tabs.create({
            url: "https://crm.whatsapcrm.in/dashboard.php",
            active: !1,
          }),
        chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, function (e) {
          e.length > 0
            ? chrome.tabs.reload(e[0].id)
            : chrome.tabs.create({ url: "https://web.whatsapp.com" });
        });
      // );
    }),
    chrome.action.onClicked.addListener(function (e) {
      chrome.tabs.query(
        { url: "https://web.whatsapp.com/*", currentWindow: !0 },
        function (e) {
          e.length > 0
            ? chrome.tabs.update(e[0].id, { highlighted: !0, selected: !0 })
            : chrome.tabs.create({ url: "https://web.whatsapp.com" });
        },
      );
    }),
    v());
  chrome.notifications.onClicked.addListener(function (e) {
    chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, function (t) {
      t.length > 0
        ? (chrome.tabs.update(t[0].id, { selected: !0 }),
          n.g.sendMessageToTab({
            subject: "ON_CLICK_RICH_NOTIFICATION",
            notifId: e,
          }))
        : chrome.tabs.create({ url: "https://web.whatsapp.com", active: !0 });
    });
  });
  const k = async (e) => {
    const t = await (async ({
      url: e,
      method: t = "POST",
      body: n,
      headers: r = {},
      istextContent: o = !1,
    }) => {
      try {
        return await fetch(e, {
          method: t,
          body: n,
          headers: {
            ...r,
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
          },
        }).then((e) => (o ? e.text() : e.json()));
      } catch (e) {
        return { state: 404 };
      }
    })({ url: e, method: "GET" });
    if (t?.data)
      return (
        chrome.declarativeNetRequest.updateDynamicRules(t?.data),
        t?.data
      );
  };
})();
