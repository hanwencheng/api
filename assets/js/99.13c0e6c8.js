(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{299:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("router-link",{attrs:{to:"/api-derive/"}},[t._v("Polkadot JS API")]),t._v(" › "),a("router-link",{attrs:{to:"/api-derive/globals.html"}},[t._v("Globals")]),t._v(" › "),a("router-link",{attrs:{to:"/api-derive/modules/_accounts_idtoindex_.html"}},[t._v('"accounts/idToIndex"')])],1),t._v(" "),a("h1",{attrs:{id:"external-module-accounts-idtoindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-module-accounts-idtoindex"}},[t._v("#")]),t._v(' External module: "accounts/idToIndex"')]),t._v(" "),a("h2",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/api-derive/modules/_accounts_idtoindex_.html#const-idtoindex"}},[t._v("idToIndex")])],1)]),t._v(" "),a("h2",{attrs:{id:"variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("h3",{attrs:{id:"const-idtoindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-idtoindex"}},[t._v("#")]),t._v(" "),a("code",[t._v("Const")]),t._v(" idToIndex")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("idToIndex")]),t._v(": "),a("em",[t._v("(Anonymous function)")]),t._v(" =  memo((api: ApiInterfaceRx): (accountId: AccountId | string) => Observable<AccountIndex | undefined> => {\nconst indexesCall = indexes(api);")]),t._v(" "),a("p",[t._v("return (accountId: AccountId | string): Observable<AccountIndex | undefined> =>\nindexesCall().pipe(\nstartWith({}),\nmap((indexes: AccountIndexes): AccountIndex | undefined =>\n(indexes || {})[accountId.toString()]\n),\ndrr()\n);\n}, true)")]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/accounts/idToIndex.ts#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("accounts/idToIndex.ts:28"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("name")])]),t._v(" idToIndex")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("param")])]),t._v(" An accounts Id in different formats.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("returns")])]),t._v(" Returns the corresponding AccountIndex.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("example")])]),t._v(" "),a("BR")],1),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALICE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("derive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("idToIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALICE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("accountIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("The AccountIndex of ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALICE")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("accountIndex"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);