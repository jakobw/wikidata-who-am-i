(function(e){function t(t){for(var n,i,u=t[0],o=t[1],c=t[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var o=r[u];0!==s[o]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/wikidata-who-am-i/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"387e":function(e,t,r){e.exports=r.p+"img/github.91549547.svg"},"461c":function(e,t,r){"use strict";r("8579")},"46a6":function(e,t,r){"use strict";r("9dfb")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),e._v(" Your secret identity has been generated. Ask the right questions to find out who you are! "),e._m(1),r("Secrets",{attrs:{listOfPossibleSecrets:e.listOfPossibleSecrets}}),r("Question",{on:{evaluate:e.addPropValueQuestion,evaluateSparql:e.addSparqlQuestion}}),e.questions.length>0?r("Guess",{staticClass:"guess",on:{guess:e.addGuessQuestion}}):e._e(),e._l(e.reversedQuestions,(function(t){return r("div",{key:t.id},["normal"===t.type?r("Answer",{attrs:{secret:e.secret,property:t.property,value:t.value}}):e._e(),"sparql"===t.type?r("SparqlAnswer",{attrs:{secret:e.secret,sparql:t.sparql}}):e._e(),"guess"===t.type?r("GuessAnswer",{attrs:{secret:e.secret,guess:t.guess}}):e._e()],1)}))],2)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Wikidata, who am I"),n("img",{attrs:{src:r("9b19"),width:"50px",height:"50px"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://github.com/wmde/wikidata-who-am-i"}},[n("img",{attrs:{src:r("387e"),target:"_blank",width:"11px"}})])}],i=r("5530"),u=r("2909"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"secrets"},e._l(e.images,(function(e,t){return r("img",{key:t,attrs:{src:e,alt:"fdgf"}})})),0)},c=[],l=r("1da1"),p=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("d81d"),r("d4ec")),f=r("bee2"),d=function(){function e(t){Object(p["a"])(this,e),this.endpoint=t}return Object(f["a"])(e,[{key:"query",value:function(e){var t=this.endpoint+"?query="+encodeURIComponent(e),r={Accept:"application/sparql-results+json"};return fetch(t,{headers:r}).then((function(e){return e.json()}))}}]),e}(),h={name:"Secrets",props:["listOfPossibleSecrets"],data:function(){return{images:[]}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.listOfPossibleSecrets.map(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.query("SELECT ?img WHERE { wd:".concat(t," wdt:P18 ?img }"));case 2:return r=e.sent,e.abrupt("return",r.results.bindings[0].img.value);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:e.images=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},v="https://query.wikidata.org/sparql",m=new d(v),y=h,g=(r("46a6"),r("2877")),b=Object(g["a"])(y,o,c,!1,null,"152f2da6",null),w=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"question"},[e.expertMode?r("div",{staticClass:"form"},[r("TextInput",{attrs:{label:"SPARQL",placeholder:"?secret wdt:P123 wd:Q123"},model:{value:e.sparql,callback:function(t){e.sparql=t},expression:"sparql"}}),r("Button",{staticClass:"button",attrs:{variant:"primary",type:"progressive"},nativeOn:{click:function(t){return e.evaluateSparql.apply(null,arguments)}}},[e._v("ASK!")]),r("div",[r("small",[r("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.expertMode=!1}}},[e._v("😭️️")])])])],1):r("div",{staticClass:"form"},[r("EntitySelector",{staticClass:"form-element",attrs:{label:"Property",error:{message:"Warning message",type:"warning"},placeholder:"e.g. instance of",type:"property",value:e.property},on:{input:function(t){e.property=t}}}),r("EntitySelector",{staticClass:"form-element",attrs:{label:"Value",placeholder:"e.g. fictional character",type:"item",value:e.value},on:{input:function(t){e.value=t}}}),r("Button",{staticClass:"form-element button",attrs:{variant:"primary",type:"progressive",disabled:!e.property||!e.value},nativeOn:{click:function(t){return e.evaluate.apply(null,arguments)}}},[e._v(" ? ? ? ")]),r("div",[r("small",[r("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.expertMode=!0}}},[e._v("👽️")])])])],1)])},q=[],S=(r("ac1f"),r("841c"),r("5b80")),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Lookup",{staticClass:"entity-selector",attrs:{label:e.label,placeholder:e.placeholder,"search-input":e.search,value:e.value,"menu-items":e.entities},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"no-results",fn:function(){return[e._v(" No match was found ")]},proxy:!0}])})},x=[],k=(r("99af"),r("b012")),Q=r.n(k),j={name:"EntitySelector",props:["label","type","value","placeholder"],data:function(){return{search:"",entities:[]}},watch:{search:Q()(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=".concat(t,"&language=en&limit=10&origin=*&type=").concat(this.type));case 2:return e.next=4,e.sent.json();case 4:r=e.sent,this.entities=r.search;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),200),value:function(e){null===e&&(this.search="")}},components:{Lookup:S["Lookup"]}},C=j,M=(r("b111"),Object(g["a"])(C,O,x,!1,null,null,null)),P=M.exports,E={name:"Question",components:{EntitySelector:P,TextInput:S["TextInput"],Button:S["Button"]},data:function(){return{property:null,value:null,expertMode:!1,sparql:""}},methods:{evaluate:function(){this.$emit("evaluate",{property:this.property,value:this.value}),this.value=null,this.search=""},evaluateSparql:function(){this.$emit("evaluateSparql",this.sparql),this.sparql=""}}},A=E,$=(r("5d9c"),Object(g["a"])(A,_,q,!1,null,"cac460a2",null)),I=$.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"answer"},[r("Message",{attrs:{type:e.answerMessageType}},[e._v(" "+e._s(e.property.label)+" "+e._s(e.value.label)+" ")])],1)},B=[],G="https://query.wikidata.org/sparql",R=new d(G),L={name:"Answer",components:{Message:S["Message"]},props:["property","value","secret"],data:function(){return{isCorrect:null}},created:function(){var e=this,t="ASK {\n\t\tBIND( wd:".concat(this.secret," AS ?secret )\n\t\t?secret wdt:").concat(this.propertyInQuery," wd:").concat(this.value.id," .\n\t\t}");R.query(t).then((function(t){var r=t.boolean;e.isCorrect=r}))},computed:{answerMessageType:function(){return null===this.isCorrect?"notice":this.isCorrect?"success":"error"},propertyInQuery:function(){return"P31"===this.property.id||"P106"===this.property.id?this.property.id+"/wdt:P279*":this.property.id}}},D=L,K=Object(g["a"])(D,T,B,!1,null,"13c9db06",null),N=K.exports,V=(r("d14d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"guess"},[e.ready?r("div",{staticClass:"enter-guess"},[r("EntitySelector",{attrs:{label:"I am ...",type:"item"},on:{input:function(t){e.guess=t}}}),r("Button",{attrs:{variant:"primary",type:"progressive",disabled:!e.guess},nativeOn:{click:function(t){return e.evaluateGuess.apply(null,arguments)}}},[e._v(" Make a guess! ")])],1):r("Button",{nativeOn:{click:function(t){e.ready=!0}}},[e._v("I'm ready to guess!")])],1)}),W=[],J={name:"Guess",data:function(){return{ready:!1,guess:null}},methods:{evaluateGuess:function(){this.$emit("guess",this.guess)}},components:{EntitySelector:P,Button:S["Button"]}},Y=J,H=(r("461c"),Object(g["a"])(Y,V,W,!1,null,"1c896888",null)),U=H.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"answer"},[r("Message",{attrs:{type:e.answerMessageType}},[r("code",[e._v(e._s(e.sparql))])])],1)},F=[],X="https://query.wikidata.org/sparql",Z=new d(X),ee={name:"SparqlAnswer",components:{Message:S["Message"]},props:["sparql","secret"],data:function(){return{isCorrect:null}},created:function(){var e=this,t="ASK {\n\t\tBIND( wd:".concat(this.secret," AS ?secret )\n\t\t").concat(this.sparql," .\n\t\t}");Z.query(t).then((function(t){var r=t.boolean;e.isCorrect=r}))},computed:{answerMessageType:function(){return null===this.isCorrect?"notice":this.isCorrect?"success":"error"}}},te=ee,re=Object(g["a"])(te,z,F,!1,null,"368f8801",null),ne=re.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"answer"},[e.guess.id===e.secret?r("Message",{attrs:{type:"success"}},[e._v(" Correct! You are "+e._s(e.guess.label)+"!! 🎉️🎉️🎉️ ")]):r("Message",{attrs:{type:"error"}},[e._v(" Nope, you're not "+e._s(e.guess.label)+". Keep guessing! ")])],1)},ae=[],ie={name:"GuessAnswer",components:{Message:S["Message"]},props:["secret","guess"],data:function(){return{isCorrect:null}}},ue=ie,oe=Object(g["a"])(ue,se,ae,!1,null,null,null),ce=oe.exports,le={name:"App",data:function(){return{listOfPossibleSecrets:["Q42","Q1744","Q937","Q7810","Q567","Q79015","Q692","Q7259","Q10943","Q5383","Q3735317"],questions:[]}},components:{GuessAnswer:ce,SparqlAnswer:ne,Secrets:w,Guess:U,Answer:N,Question:I},created:function(){this.secret=this.listOfPossibleSecrets[Math.floor(Math.random()*this.listOfPossibleSecrets.length)]},computed:{reversedQuestions:function(){return Object(u["a"])(this.questions).reverse()}},methods:{addPropValueQuestion:function(e){var t=e.property,r=e.value;this.addQuestion({type:"normal",property:t,value:r})},addSparqlQuestion:function(e){this.addQuestion({type:"sparql",sparql:e})},addGuessQuestion:function(e){this.addQuestion({type:"guess",guess:e})},addQuestion:function(e){this.questions.push(Object(i["a"])({id:Math.random()},e))}}},pe=le,fe=(r("034f"),Object(g["a"])(pe,s,a,!1,null,null,null)),de=fe.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(de)}}).$mount("#app")},"5d9c":function(e,t,r){"use strict";r("fd6f")},6630:function(e,t,r){},8579:function(e,t,r){},"85ec":function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.21220076.svg"},"9dfb":function(e,t,r){},b111:function(e,t,r){"use strict";r("6630")},fd6f:function(e,t,r){}});
//# sourceMappingURL=app.c78583b4.js.map