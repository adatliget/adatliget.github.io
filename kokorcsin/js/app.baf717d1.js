(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2b010d34"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"947b5e16"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/kokorcsin/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("NavBar"),a("v-content",[a("router-view",{attrs:{"active-class":"v-btn"}})],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{color:"primary",dark:"",app:""}},[a("v-toolbar-title",[a("span",{staticClass:"font-weight-bold subheading"},[e._v("Kökörcsin ")]),a("span",{staticClass:"font-weight-thin subheading"},[e._v("Pizzéria")])]),a("v-spacer"),a("v-btn",{attrs:{text:"",icon:"",depressed:"",exact:"",to:{name:"home"}}},[a("v-icon",{staticClass:"pa-2"},[e._v("mdi-file-document-box-outline")])],1),a("v-btn",{attrs:{text:"",icon:"",depressed:"",exact:"",to:{name:"basket"}}},[a("v-badge",{attrs:{content:e.$store.state.basketCounter,value:e.$store.state.basketCounter,color:"red",overlap:""}},[a("v-icon",{staticClass:"pa-2"},[e._v("mdi-cart-outline")])],1)],1)],1)],1)},s=[],c={data:function(){return{}},methods:{resetBasket:function(){this.$store.commit("resetBasket")}}},l=c,u=a("2877"),d=a("6544"),p=a.n(d),m=a("40dc"),v=a("4ca6"),f=a("8336"),b=a("132d"),h=a("2fa4"),k=a("2a7f"),g=Object(u["a"])(l,i,s,!1,null,null,null),_=g.exports;p()(g,{VAppBar:m["a"],VBadge:v["a"],VBtn:f["a"],VIcon:b["a"],VSpacer:h["a"],VToolbarTitle:k["a"]});var y={name:"App",components:{NavBar:_},data:function(){return{}}},w=y,C=a("7496"),x=a("a75b"),j=Object(u["a"])(w,r,o,!1,null,null,null),z=j.exports;p()(j,{VApp:C["a"],VContent:x["a"]});a("d3b7");var S=a("8c4f"),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("v-dialog",{staticClass:"ma-3",attrs:{value:e.dialog,width:"95%"}},[a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-card",{attrs:{"max-width":"500",width:"100%"},on:{click:function(t){e.dialog=!1}}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.picurl}},[a("v-card-title",[e._v(e._s(e.detailedItem.name))])],1),a("v-card-text",{staticClass:"text--white"},[a("div",[e._v(e._s(e.detailedItem.desc))])]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange"}},[a("v-icon",{on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close-circle-outline")])],1)],1)],1)],1)],1)],1),a("v-snackbar",{attrs:{timeout:e.snackTimeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" Kosárban"+e._s(e.$store.state.basketCounter)+" tétel / "+e._s(e.sumPrice)+" Ft "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v(" Bezár ")])],1),a("v-treeview",{attrs:{dense:"","open-on-click":"",items:e.items},scopedSlots:e._u([{key:"label",fn:function(t){var n=t.item;return[a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-row",{attrs:{justify:"start","no-gutters":""}},[a("v-col",{on:{click:function(t){return e.showDetails(n)}}},[n.children?e._e():a("v-icon",{staticClass:"mx-2"},[e._v("mdi-information-outline")]),e._v(e._s(n.name)+" ")],1),a("v-spacer"),n.price?a("v-col",{staticClass:"text-right",attrs:{cols:"3",sm:"2",md:"1"}},[e._v(" "+e._s(n.price)+" Ft")]):e._e(),a("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[n.children?e._e():a("v-icon",{attrs:{color:"green"},on:{click:function(t){return e.addToBasket(n)}}},[e._v("mdi-cart-plus")])],1)],1)],1)]}}])})],1)},B=[],T=(a("13d5"),{name:"home",components:{},data:function(){return{dialog:!1,snackbar:!1,snackTimeout:1e3,detailedItem:{},items:[{id:1,name:"Pizzák ",children:[{id:2,name:"Margarita",price:1250,desc:"Paradicsom, Mozzarella, Bazsalikom",pic:"pizza_margeritha.jpg"},{id:3,name:"Négy évszak",price:1410,desc:"Paradicsom, Mozzarella, Sonka, Gomba, Olivabogyó",pic:"negy-evszak-pizza.jpg"},{id:4,name:"Hawaii",price:1450,desc:"Paradicsom, Mozzarella, Sonka, Ananász",pic:"hawaii-pizza.png"}]},{id:5,name:"Italok ",children:[{id:6,name:"Sörök ",children:[{id:7,name:"Stella",price:460,desc:"Alkoholtartalom: 5%",pic:"Stella_Artois.jpg"},{id:8,name:"Soproni",price:400,desc:"Alkoholtartalom: 4.7%",pic:"soproni.jpg"},{id:9,name:"Borsodi",price:400,desc:"Alkoholtartalom: 4.8%",pic:"borsodi.jpg"}]},{id:10,name:"Üdítők",children:[{id:12,name:"Coca Cola",price:390,desc:"Szénsavas üdítőital, 30 kcal/ 100ml",pic:"coca_05.jpg"},{id:13,name:"Fanta",price:390,desc:"Szénsavas üdítőital, 32 kcal/ 100ml",pic:"fanta.jpg"},{id:14,name:"Ice Tea",price:390,desc:"Szénsavas üdítőital, 26 kcal/ 100ml",pic:"icetea.jpg"}]}]}]}},computed:{picurl:function(){return"img/"+this.detailedItem.pic},sumPrice:function(){return this.$store.state.basket.reduce((function(e,t){return e+t.price}),0)}},methods:{addToBasket:function(e){this.$store.commit("addToBasket",e),this.snackbar=!0},showDetails:function(e){e.children||(this.dialog=!0,this.detailedItem=e)}}}),P=T,O=a("b0af"),A=a("99d9"),E=a("62ad"),I=a("a523"),$=a("169a"),M=a("adda"),N=a("0fd9"),D=a("2db4"),F=a("eb2a"),L=Object(u["a"])(P,V,B,!1,null,null,null),K=L.exports;p()(L,{VBtn:f["a"],VCard:O["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:E["a"],VContainer:I["a"],VDialog:$["a"],VIcon:b["a"],VImg:M["a"],VRow:N["a"],VSnackbar:D["a"],VSpacer:h["a"],VTreeview:F["a"]}),n["a"].use(S["a"]);var q=[{path:"/",name:"home",component:K},{path:"/basket",name:"basket",component:function(){return a.e("about").then(a.bind(null,"c00b"))}}],H=new S["a"]({mode:"history",base:"/kokorcsin/",routes:q}),J=H,G=(a("a434"),a("2f62"));n["a"].use(G["a"]);var R=new G["a"].Store({state:{basketCounter:0,basket:[]},mutations:{resetBasket:function(e){e.basketCounter=0,e.basket=[]},addToBasket:function(e,t){e.basketCounter++,e.basket.push(t)},delFromBasket:function(e,t){e.basket.splice(t.i,1),e.basketCounter--}},actions:{},modules:{}}),U=a("f309");n["a"].use(U["a"]);var Q=new U["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({router:J,store:R,vuetify:Q,render:function(e){return e(z)}}).$mount("#app")}});
//# sourceMappingURL=app.baf717d1.js.map