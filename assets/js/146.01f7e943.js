(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{342:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("router-link",{attrs:{to:"/api/"}},[t._v("Polkadot JS API")]),t._v(" › "),r("router-link",{attrs:{to:"/api/globals.html"}},[t._v("Globals")]),t._v(" › "),r("router-link",{attrs:{to:"/api/modules/_types_.html"}},[t._v('"types"')]),t._v(" › "),r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html"}},[t._v("ApiOptions")])],1),t._v(" "),r("h1",{attrs:{id:"interface-apioptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interface-apioptions","aria-hidden":"true"}},[t._v("#")]),t._v(" Interface: ApiOptions")]),t._v(" "),r("h2",{attrs:{id:"hierarchy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("ApiOptions")])])]),t._v(" "),r("h2",{attrs:{id:"index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[t._v("#")]),t._v(" Index")]),t._v(" "),r("h3",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-derives"}},[t._v("derives")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-metadata"}},[t._v("metadata")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-provider"}},[t._v("provider")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-signer"}},[t._v("signer")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-source"}},[t._v("source")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-types"}},[t._v("types")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-typeschain"}},[t._v("typesChain")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-typesspec"}},[t._v("typesSpec")])],1)]),t._v(" "),r("h2",{attrs:{id:"properties-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("h3",{attrs:{id:"optional-derives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-derives","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" derives")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("derives")]),t._v("? : "),r("em",[t._v("DeriveCustom")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L177",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:177"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Add custom derives to be injected")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"optional-metadata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-metadata","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" metadata")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("metadata")]),t._v("? : "),r("em",[t._v("Record‹string, string›")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L182",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:182"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string\nif genesis hash and runtime spec version matches, then use metadata, else fetch it from chain")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"optional-provider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-provider","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" provider")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("provider")]),t._v("? : "),r("em",[t._v("ProviderInterface")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L187",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:187"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Transport Provider from rpc-provider. If not specified, it will default to\nconnecting to a WsProvider connecting localhost with the default port, i.e. "),r("code",[t._v("ws://127.0.0.1:9944")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"optional-signer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-signer","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" signer")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("signer")]),t._v("? : "),r("em",[r("router-link",{attrs:{to:"/api/interfaces/_types_.signer.html"}},[t._v("Signer")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L191",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:191"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" An external signer which will be used to sign extrinsic when account passed in is not KeyringPair")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"optional-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-source","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" source")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("source")]),t._v("? : "),r("em",[t._v("ApiBase‹any›")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L195",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:195"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" The source object to use for runtime information (only used when cloning)")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"optional-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-types","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" types")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("types")]),t._v("? : "),r("em",[t._v("RegistryTypes")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L200",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:200"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Additional types used by runtime modules. This is nessusary if the runtime modules\nuses types not available in the base Substrate runtime.")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"optional-typeschain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-typeschain","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" typesChain")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("typesChain")]),t._v("? : "),r("em",[t._v("Record‹string, RegistryTypes›")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L204",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:204"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. "),r("code",[t._v("{ 'Kusama CC1': { ... } }")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"optional-typesspec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-typesspec","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Optional")]),t._v(" typesSpec")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("typesSpec")]),t._v("? : "),r("em",[t._v("Record‹string, RegistryTypes›")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/9086592252/packages/api/src/types.ts#L208",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.ts:208"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. "),r("code",[t._v("{ 'edgeware': { ... } }")])])])}),[],!1,null,null,null);e.default=s.exports}}]);