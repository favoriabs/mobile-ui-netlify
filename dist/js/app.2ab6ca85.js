(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/mobile-ui/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("editor")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gradient-to-tr from-blue-400 to-white h-screen flex flex-col items-center justify-center space-y-5",attrs:{id:"parentDiv"}},[n("div",{staticClass:"w-1/2 bg-white h-10 rounded-lg"},[n("div",{staticClass:"px-5 py-2 flex space-x-5"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.orientation,expression:"orientation"}],attrs:{name:"",id:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.orientation=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"landscape"}},[t._v("Landscape")]),n("option",{attrs:{value:"potrait"}},[t._v("Potrait")])]),n("select",{attrs:{name:"",id:""},on:{change:function(e){return t.triggerOption(e)}}},[n("option",{attrs:{value:""}},[t._v("Select Option")]),n("option",{attrs:{value:"save"}},[t._v("Save")]),n("option",{attrs:{value:"view"}},[t._v("View")]),n("option",{attrs:{value:"sdk"}},[t._v("SDK")]),n("option",{attrs:{value:"android"}},[t._v("Android")])]),n("button",{staticClass:"border px-5",on:{click:t.addTextField}},[t._v("TEXT")]),n("button",{staticClass:"border px-5"},[t._v("LIST")])])]),n("container-component",{attrs:{orientation:t.orientation,saveSettings:t.saveSettings}})],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border-2 border-blue-400 h-3/4 bg-white rounded-lg p-10",class:t.orientationClass,attrs:{id:"container"},on:{drop:function(e){return t.onDrop(e,1)},dragover:function(e){return t.dragOver(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textContent,expression:"textContent"}],staticClass:"cursor-move h-20 p-5 border border-blue-400 m-5",attrs:{type:"text",id:"draggableText",draggable:"",placeholder:"Enter Text Here"},domProps:{value:t.textContent},on:{dragstart:function(e){return t.startDrag(e)},input:function(e){e.target.composing||(t.textContent=e.target.value)}}})])},c=[],u=n("2591"),f={apiKey:"AIzaSyCOJ7Br9TVBok_puL_ELR0hjjjG_pg1fS0",authDomain:"mobile-ui-923bf.firebaseapp.com",projectId:"mobile-ui-923bf",storageBucket:"mobile-ui-923bf.appspot.com",messagingSenderId:"155003809611",appId:"1:155003809611:web:e34a8679394a6b714302ce",measurementId:"G-ZXDK0FME7W"},p=u["a"].initializeApp(f),d=p.firestore(),g={name:"ContainerComponent",props:{orientation:{type:String,default:"landscape"},saveSettings:{type:Boolean,default:!1}},data:function(){return{containerWidth:"w-1/2",textContent:""}},watch:{saveSettings:function(){console.log(this.saveSettings),this.saveSettings&&d.collection("textProps").add({textContent:this.$store.getters.getTextBoxContent,textOffsetY:this.$store.getters.getTextBoxOffsetY,textOffsetX:this.$store.getters.getTextBoxOffsetX,date:new Date}).then((function(){console.log("Document successfully written!")})).catch((function(t){console.error("Error writing document: ",t)}))}},computed:{orientationClass:function(){return"landscape"==this.orientation?"w-1/2":"w-1/4"}},methods:{startDrag:function(t){console.log(t.target),t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text",t.target.id)},onDrop:function(t){console.log(t),console.log(t.offsetX),console.log(t.offsetY);var e=t.dataTransfer.getData("text");t.target.appendChild(document.getElementById(e));var n=document.getElementById("draggableText");n.style.top=t.offsetY+"px",n.style.left=t.offsetX+"px";var o={content:this.textContent,offsetY:t.offsetY+"px",offsetX:t.offsetX+"px"};console.log(o),this.$store.commit("storeTextBoxProperties",o),console.log(this.$store.getters.getTextBoxContent)},dragOver:function(t){t.preventDefault()}}},v=g,x=(n("cab9"),n("2877")),m=Object(x["a"])(v,l,c,!1,null,"2b14b0f8",null),b=m.exports,h={name:"EditorPage",components:{ContainerComponent:b},data:function(){return{orientation:"landscape",saveSettings:!1}},methods:{addTextField:function(){},triggerOption:function(t){"save"==t.target.value&&(this.saveSettings=!0)}}},y=h,O=Object(x["a"])(y,i,s,!1,null,null,null),w=O.exports,C={name:"App",components:{Editor:w}},_=C,T=Object(x["a"])(_,r,a,!1,null,null,null),B=T.exports,S=(n("a766"),n("2f62"));o["a"].use(S["a"]);var j=new S["a"].Store({state:{textBoxContent:"",textBoxOffsetX:"",textBoxOffsetY:""},mutations:{storeTextBoxProperties:function(t,e){console.log(e),t.textBoxContent=e.content,t.textBoxOffsetX=e.offsetX,t.textBoxOffsetY=e.offsetY}},getters:{getTextBoxContent:function(t){return t.textBoxContent},getTextBoxOffsetX:function(t){return t.textBoxOffsetX},getTextBoxOffsetY:function(t){return t.textBoxOffsetY}}}),D=j;o["a"].config.productionTip=!1,new o["a"]({store:D,render:function(t){return t(B)}}).$mount("#app")},"9d55":function(t,e,n){},a766:function(t,e,n){},cab9:function(t,e,n){"use strict";n("9d55")}});
//# sourceMappingURL=app.2ab6ca85.js.map