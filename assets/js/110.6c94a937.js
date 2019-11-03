(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{310:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("router-link",{attrs:{to:"/api-derive/"}},[t._v("Polkadot JS API")]),t._v(" › "),e("router-link",{attrs:{to:"/api-derive/globals.html"}},[t._v("Globals")]),t._v(" › "),e("router-link",{attrs:{to:"/api-derive/modules/_chain_getheader_.html"}},[t._v('"chain/getHeader"')])],1),t._v(" "),e("h1",{attrs:{id:"external-module-chain-getheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-module-chain-getheader"}},[t._v("#")]),t._v(' External module: "chain/getHeader"')]),t._v(" "),e("h2",{attrs:{id:"index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),e("h3",{attrs:{id:"variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/api-derive/modules/_chain_getheader_.html#const-getheader"}},[t._v("getHeader")])],1)]),t._v(" "),e("h2",{attrs:{id:"variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),e("h3",{attrs:{id:"const-getheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#const-getheader"}},[t._v("#")]),t._v(" "),e("code",[t._v("Const")]),t._v(" getHeader")]),t._v(" "),e("p",[t._v("• "),e("strong",[t._v("getHeader")]),t._v(": "),e("em",[t._v("(Anonymous function)")]),t._v(" =  memo((api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<HeaderExtended | undefined> => {\nreturn (hash: Uint8Array | string): Observable<HeaderExtended | undefined> =>\ncombineLatest([\napi.rpc.chain.getHeader(hash),\napi.query.session.validators.at(hash) as Observable<Vec"),e("AccountId",[t._v(">\n]).pipe(\nmap(([header, validators]): HeaderExtended =>\nnew HeaderExtended(header, validators)\n),\ncatchError((): Observable"),e("undefined",[t._v(" =>\n// where rpc.chain.getHeader throws, we will land here - it can happen that\n// we supplied an invalid hash. (Due to defaults, storeage will have an\n// empty value, so only the RPC is affected). So return undefined\nof()\n),\ndrr()\n);\n}, true)")])],1)],1),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/chain/getHeader.ts#L30",target:"_blank",rel:"noopener noreferrer"}},[t._v("chain/getHeader.ts:30"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[e("code",[t._v("name")])]),t._v(" bestNumberFinalized")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("param")])]),t._v(" A block hash as U8 array or string.")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("returns")])]),t._v(" An array containing the block header and the block author")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("description")])]),t._v(" Get a specific block header and extend it with the author")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("example")])]),t._v(" "),e("BR")],1),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" author"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("derive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x123...456'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("block #")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(" was authored by ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("author"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=s.exports}}]);