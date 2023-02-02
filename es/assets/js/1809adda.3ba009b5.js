"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Testing del Contrato",hide_title:!0,slug:"/basics/contract-testing"},i=void 0,s={unversionedId:"basics/testing",id:"basics/testing",title:"Testing del Contrato",description:"ink! supports three different stages of testing: unit, integration",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/testing.md",sourceDirName:"basics",slug:"/basics/contract-testing",permalink:"/es/basics/contract-testing",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/testing.md",tags:[],version:"current",frontMatter:{title:"Testing del Contrato",hide_title:!0,slug:"/basics/contract-testing"},sidebar:"reference",previous:{title:"Metadata",permalink:"/es/metadata"},next:{title:"Contract Debugging",permalink:"/es/basics/contract-debugging"}},l={},c=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Off-chain Testing",id:"off-chain-testing",level:2},{value:"\xbfC\xf3mo saber si su test requiere el entorno off-chain?",id:"c\xf3mo-saber-si-su-test-requiere-el-entorno-off-chain",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Example",id:"example",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),(0,r.kt)("div",{class:"translateTodo"},"# Contract Testing",(0,r.kt)("p",null,"ink! supports three different stages of testing: unit, integration\nand end-to-end tests. On this page we'll explain what the purpose\nof each stage is about and how to use it."),(0,r.kt)("img",{src:"/img/testing.png"}),(0,r.kt)("p",null,"Generally you can think of those three types of testing as a pyramid\nwith the top being the most elaborate test. The End-to-End (E2E)\ntests at the top will test the lower layers of the pyramid as part\nof them.")),(0,r.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("p",null,"El testing de los contractos off-chain se hace mediante ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo test")," y los usuarios pueden simplemente utilizar las rutinas est\xe1ndar para\ncrear m\xf3dulos de unit test dentro del projecto de ink!:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn my_test() { ... }\n}\n")),(0,r.kt)("p",null,"Se pueden crear instancias de test de los contratos as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let contract = MyContract::my_constructor(a, b);\n")),(0,r.kt)("p",null,"Los mensajes se pueden llamar simplemente en la instancia devuelta como si ",(0,r.kt)("inlineCode",{parentName:"p"},"MyContract::my_constructor")," devolviese\nuna instancia ",(0,r.kt)("inlineCode",{parentName:"p"},"Self"),"."),(0,r.kt)("p",null,"Vea el ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs"},"ejemplo flipper"),"."),(0,r.kt)("h2",{id:"off-chain-testing"},"Off-chain Testing"),(0,r.kt)("div",{class:"translateTodo"},"For integration tests, the test is annotated with our `#[ink::test]` attribute instead of `#[test]`. Our attribute denotes that the test is then executed in a simulated, mocked blockchain environment. here are functions available to influence how the test environment is configured (e.g. setting a specified balance of an account to simulate how a contract would behave when interacting with it)."),(0,r.kt)("p",null,"Si anotas un test con este atributo se ejecutara en un entorno simulado,\nsimilar a como se ejecutar\xeda on-chain.\nEntonces tienes un control detallado sobre c\xf3mo llamar al contrato;\npor ejemplo puedes influir en el avance del bloque, el valor transferido al mismo,\npor qu\xe9 cuenta se llama, con qu\xe9 almacenamiento se ejecuta, etc."),(0,r.kt)("p",null,"Vea el contrato ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"examples/erc20"))," csobre como utilizarlo o ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_lang/4.0.0-rc/ink_lang/attr.test.html"},"la documentaci\xf3n")," para m\xe1s detalles."),(0,r.kt)("p",null,"En este momento hay algunas limitaciones conocidas para nuestro entorno off-chain y estamos trabajando\nen hacer que el comportamiento sea lo m\xe1s cercano posible a un entorno de una red real."),(0,r.kt)("p",null,"Define un unit test que utilice las capacidades del ink! testing off-chain."),(0,r.kt)("p",null,"Si tu unit test no requiere de la existencia de un entorno off-chain esta bien no\nutilizar esta macro ya que tiene algunos gastos generales con el test."),(0,r.kt)("p",null,"Date cuenta que esta macro no es necesaria para ejecutar los unit tests que requieren\nlas capacidades del ink! testing off-chain pero simplemente mejora la legibilidad del c\xf3digo."),(0,r.kt)("h3",{id:"c\xf3mo-saber-si-su-test-requiere-el-entorno-off-chain"},"\xbfC\xf3mo saber si su test requiere el entorno off-chain?"),(0,r.kt)("p",null,"Normalmente si el test utiliza recursivamente o invoca algunos metodos del contrato que\nllaman a un metodo definido en ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env()")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::env()"),"."),(0,r.kt)("p",null,"Un ejemplo es el siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let caller: AccountId = self.env().caller();\n")),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    // Conventional unit test that works with assertions.\n    #[ink::test]\n    fn test1() {\n        // test code comes here as usual\n    }\n\n    // Unit test convencional que devuelve alg\xfan Result.\n    // El c\xf3digo del test puede utilizar el operador-`?`.\n    #[ink::test]\n    fn test2() -> Result<(), ink::env::Error> {\n        // El c\xf3digo del test que devuelve un tipo Rust Result\n    }\n}\n")),(0,r.kt)("div",{class:"translateTodo"},"## End-to-End (E2E) Tests",(0,r.kt)("p",null,"E2E testing enables developers to write a test that will not only test the contract in an\nisolated manner; instead the contract will be tested ",(0,r.kt)("em",{parentName:"p"},"together")," with all components that\nwill be involved on-chain \u2013 so from end to end. This way of testing resembles closely\nhow the contract will actually behave in production."),(0,r.kt)("p",null,"As part of the test, the contract will be compiled and deployed to a Substrate node that\nis running in the background. ink! offers API functions that enable developers to then\ninteract with the contract via transactions that they create and submit to the blockchain."),(0,r.kt)("p",null,"You as a developer can define assertions on the outcome of their transactions, such as checking\nfor state mutations, transaction failures or incurred gas costs."),(0,r.kt)("p",null,"Your chain configuration will be tested together with the smart contract. And if your\nchain has pallets that are involved with the smart contract execution, those will be\npart of the test execution as well."),(0,r.kt)("p",null,"ink! does not put any requirements on the Substrate node in the background \u2013 for example,\nyou can run a node that contains a snapshot of a live network."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following code example illustrates a basic E2E test for the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs"},"flipper example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink_e2e::test]\nasync fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n    // When the function is entered, the contract was already\n    // built in the background via `cargo contract build`.\n    // The `client` object exposes an interface to interact\n    // with the Substrate node.\n    \n    // given\n    let constructor = FlipperRef::new_default();\n\n    // when\n    let contract_acc_id = client\n        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)\n        .await\n        .expect("instantiate failed")\n        .account_id;\n\n    // then\n    let get = build_message::<FlipperRef>(contract_acc_id.clone())\n        .call(|flipper| flipper.get());\n    let get_res = client\n        .call(&ink_e2e::bob(), get, 0, None)\n        .await\n        .expect("get failed");\n    assert!(matches!(get_res.return_value(), false));\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"You can run the above test by going to the ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper")," folder in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/examples"},"the ink! examples directory"),"."),(0,r.kt)("p",null,"Before you can run the test, you have to start a Substrate\nnode with ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," in the background.\nYou can use e.g. our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},(0,r.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),"\nfor this. Start the node in one shell session/terminal window via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"substrate-contracts-node\n")),(0,r.kt)("p",null,"Then, while keeping the node running, execute the following command\nin another shell session/terminal window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo test --features e2e-tests\n"))))}p.isMDXComponent=!0}}]);