(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{300:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("router-link",{attrs:{to:"/api-derive/"}},[e._v("Polkadot JS API")]),e._v(" › "),n("router-link",{attrs:{to:"/api-derive/globals.html"}},[e._v("Globals")]),e._v(" › "),n("router-link",{attrs:{to:"/api-derive/modules/_accounts_indexes_.html"}},[e._v('"accounts/indexes"')])],1),e._v(" "),n("h1",{attrs:{id:"external-module-accounts-indexes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-module-accounts-indexes"}},[e._v("#")]),e._v(' External module: "accounts/indexes"')]),e._v(" "),n("h2",{attrs:{id:"index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),n("h3",{attrs:{id:"type-aliases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-aliases"}},[e._v("#")]),e._v(" Type aliases")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/api-derive/modules/_accounts_indexes_.html#accountindexes"}},[e._v("AccountIndexes")])],1)]),e._v(" "),n("h3",{attrs:{id:"variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/api-derive/modules/_accounts_indexes_.html#const-indexes"}},[e._v("indexes")])],1)]),e._v(" "),n("h2",{attrs:{id:"type-aliases-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-aliases-2"}},[e._v("#")]),e._v(" Type aliases")]),e._v(" "),n("h3",{attrs:{id:"accountindexes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accountindexes"}},[e._v("#")]),e._v(" AccountIndexes")]),e._v(" "),n("p",[e._v("Ƭ "),n("strong",[e._v("AccountIndexes")]),e._v(": "),n("em",[e._v("Record‹string, AccountIndex›")])]),e._v(" "),n("p",[n("em",[e._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/accounts/indexes.ts#L15",target:"_blank",rel:"noopener noreferrer"}},[e._v("accounts/indexes.ts:15"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"variables-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),n("h3",{attrs:{id:"const-indexes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const-indexes"}},[e._v("#")]),e._v(" "),n("code",[e._v("Const")]),e._v(" indexes")]),e._v(" "),n("p",[e._v("• "),n("strong",[e._v("indexes")]),e._v(": "),n("em",[e._v("(Anonymous function)")]),e._v(" =  memo((api: ApiInterfaceRx): () => Observable"),n("AccountIndexes",[e._v(" => {\nreturn (): Observable"),n("AccountIndexes",[e._v(" =>\napi.query.indices.nextEnumSet"),n("AccountIndex",[e._v("().pipe(\n// use the nextEnumSet (which is a counter of the number of sets) to construct\n// a range of values to query [0, 1, 2, ...]. Retrieve the full enum set for the\n// specific index - each query can return up to ENUMSET_SIZE (64) records, each\n// containing an AccountId\nswitchMap((next: AccountIndex): Observable"),n("any",[e._v(" =>\napi.query.indices.enumSet.multi([...Array(next.toNumber() + 1).keys()]) as Observable"),n("any",[e._v("\n),\nmap((all: (AccountId[] | undefined)[]): AccountIndexes =>\n(all || []).reduce((result, list, outerIndex): AccountIndexes => {\n(list || []).forEach((accountId, innerIndex): void => {\n// re-create the index based on position 0 is [0][0] and likewise\n// 64 (0..63 in first) is [1][0] (the first index value in set 2)\nconst index = (outerIndex * enumsetSize) + innerIndex;")])],1)],1)],1)],1)],1),e._v(" "),n("pre",[n("code",[e._v("        result[accountId.toString()] = createType('AccountIndex', index);\n      });\n\n      return result;\n    }, {} as AccountIndexes)),\n  drr()\n);\n")])]),e._v(" "),n("p",[e._v("}, true)")]),e._v(" "),n("p",[n("em",[e._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/accounts/indexes.ts#L34",target:"_blank",rel:"noopener noreferrer"}},[e._v("accounts/indexes.ts:34"),n("OutboundLink")],1)])]),e._v(" "),n("p",[n("strong",[n("code",[e._v("name")])]),e._v(" indexes")]),e._v(" "),n("p",[n("strong",[n("code",[e._v("returns")])]),e._v(" Returns all the indexes on the system.")]),e._v(" "),n("p",[n("strong",[n("code",[e._v("description")])]),e._v(" This is an unwieldly query since it loops through\nall of the enumsets and returns all of the values found. This could be up to 32k depending\non the number of active accounts in the system")]),e._v(" "),n("p",[n("strong",[n("code",[e._v("example")])]),e._v(" "),n("BR")],1),e._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[e._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("derive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("accounts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("indexes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("indexes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'All existing AccountIndexes'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" indexes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);