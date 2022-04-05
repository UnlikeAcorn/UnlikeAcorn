(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39a5c07d"],{"3e3b":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap items-center justify-between"},[r("div",{staticClass:"flex flex-wrap items-center text-white feature-font text-2xl text-gray-200"},[t.icon?r("app-icon",{staticClass:"mr-3",attrs:{icon:t.icon}}):t._e(),r("h3",[t._v(t._s(t.title))])],1),t._t("default")],2)},s=[],n={props:{title:String,icon:String}},i=n,c=r("2877"),o=Object(c["a"])(i,a,s,!1,null,null,null);e["a"]=o.exports},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var a=r("ade3");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"77be":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return!1===t.pageFinishedLoading?r("div",{staticClass:"mt-20 container mx-auto p-2 col-span-6 w-full bg-dark-400 flex items-center justify-center h-28"},[r("h1",{staticClass:"text-white feature-font md:text-lg"},[t._v("Loading...")])]):r("div",{staticClass:"container mx-auto p-2 grid grid-cols-6 mt-20 gap-10"},[r("div",{staticClass:"col-span-6 lg:col-span-2"},[r("div",{staticClass:"flex flex-wrap gap-5"},[r("img",{staticClass:"w-28 rounded",attrs:{src:t.userInfo.avatar}}),r("div",[r("h1",{staticClass:"feature-font text-white text-3xl"},[t._v(t._s(t.userInfo.username))]),r("app-button",{staticClass:"mt-3",attrs:{icon:"sign-out-alt",text:""},nativeOn:{click:function(e){return t.logout.apply(null,arguments)}}},[t._v("Logout")])],1)]),r("app-header",{staticClass:"mt-16",attrs:{title:"Link your account",icon:"fab discord"}}),t.userInfo.discordId?r("p",{staticClass:"text-gray-300 mt-2"},[t._v("Your Discord account is linked. Click below to unlink.")]):t._e(),t.userInfo.discordId?r("app-button",{staticClass:"mt-6",attrs:{to:"/link-accounts",icon:"fab discord"}},[t._v("Unlink your Discord account")]):r("app-button",{staticClass:"mt-6",attrs:{to:"/link-accounts",icon:"fab discord"}},[t._v("Link your Discord account")])],1),r("div",{staticClass:"col-span-6 lg:col-span-4 flex flex-col gap-2"},[r("app-header",{attrs:{title:"Purchase History",icon:"gem"}},[r("app-button",{attrs:{icon:"gem",text:"",href:t.storeHref,redirect:""}},[t._v("Store")])],1),r("table",{staticClass:"vital-table mt-10 mb-10"},[t._m(0),r("tbody",[t._l(t.payments,(function(e){return r("tr",{key:e.paymentId},[r("td",[t._v(t._s(e.packageName))]),r("td",{staticClass:"text-center"},[t._v(t._s(new Date(e.startDate).toLocaleDateString()))]),r("td",{staticClass:"text-center"},[t._v(t._s(e.duration)+" days")]),r("td",{staticClass:"text-center"},[t._v(t._s(e.revoked?"Yes":"No"))])])})),t.payments.length?t._e():r("tr",[r("td",{attrs:{colspan:"10000"}},[t._v("No purchases to show.")])])],2)])],1),r("div",{staticClass:"flex flex-col gap-2 col-span-6 mb-16 mt-16"},[r("div",{staticClass:"flex flex-col gap-2"},[r("app-header",{staticClass:"mb-5",attrs:{title:"Community Discord Servers",icon:"fab discord"}}),r("div",{staticClass:"container grid grid-cols-2 gap-2"},t._l(t.discordServers,(function(t){return r("discord",{key:t,attrs:{"invite-code":t}})})),1)],1)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Package Name")]),r("th",[t._v("Purchase Date")]),r("th",[t._v("Duration")]),r("th",[t._v("Revoked")])])])}],n=r("1da1"),i=r("5530"),c=(r("96cf"),r("2f62")),o=r("3e3b"),l=r("5cac"),u=r("d4ec"),d=r("bee2"),p=r("bc3a"),f=r.n(p),v=r("780a"),m=f.a.create({withCredentials:!0,baseURL:"https://api.rustclans.gg/",crossDomain:!0});m.interceptors.response.use((function(t){return t}),(function(t){return t}));var g=new v["a"](m),b=function(){function t(){Object(u["a"])(this,t)}return Object(d["a"])(t,[{key:"getPayments",value:function(){return g.get("Payments/@self?server=vital")}}]),t}(),h=new b,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loaded?r("div",{staticClass:"flex flex-wrap bg-dark-600 p-3 rounded gap-5 items-center justify-between"},[r("div",{staticClass:"flex flex-wrap gap-5"},[r("img",{staticClass:"w-16 rounded-full",attrs:{src:"https://cdn.discordapp.com/icons/"+this.serverId+"/"+this.serverIcon+".jpg"}}),r("div",[r("h2",{staticClass:"text-gray-200 font-bold"},[t._v(t._s(t.serverName))]),r("div",{staticClass:"flex flex-wrap gap-2 mt-1"},[r("div",{staticClass:"flex flex-wrap items-center"},[r("div",{staticClass:"bg-green-400 w-2 h-2 rounded-full"}),r("p",{staticClass:"text-gray-400 ml-2"},[t._v(t._s(t.playersOnline)+" Online")])]),r("div",{staticClass:"flex flex-wrap items-center"},[r("div",{staticClass:"bg-gray-400 w-2 h-2 rounded-full"}),r("p",{staticClass:"text-gray-400 ml-2"},[t._v(t._s(t.playersTotal)+" Members")])])])])]),r("app-button",{attrs:{icon:"fab discord",text:"",href:"https://discord.gg/"+t.inviteCode,redirect:""}},[t._v("Join")])],1):t._e()},_=[],w=(r("d3b7"),r("b0c0"),{props:{inviteCode:String},data:function(){return{playersOnline:0,playersTotal:0,serverId:0,serverName:"",serverIcon:"",error:!1,loaded:!1}},methods:{fetchInfo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://discordapp.com/api/v6/invite/"+t.inviteCode+"?with_counts=true",{method:"GET",credentials:"include"}).then((function(t){return t.json()}));case 3:r=e.sent,t.playersOnline=r.approximate_presence_count,t.playersTotal=r.approximate_member_count,t.serverId=r.guild.id,t.serverName=r.guild.name,t.serverIcon=r.guild.icon,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.error=!0;case 14:t.loaded=!0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchInfo();case 2:case"end":return e.stop()}}),e)})))()}}),y=w,C=r("2877"),O=Object(C["a"])(y,x,_,!1,null,null,null),j=O.exports,k={components:{AppHeader:o["a"],Discord:j},data:function(){return{discordServers:["6eyHUqEd4r","c6FHpEcfGc","nrut25VhYs","r5wtTE2BQr","esDhc7bG7n","gv338faVyE","XjxETmfAXD","SXDDAncBNv"],payments:[],storeHref:"https://store.vitalrust.com",loading:!1,pageFinishedLoading:!1}},computed:Object(c["c"])("user",["userInfo"]),methods:Object(i["a"])(Object(i["a"])({onLinkDiscord:function(){this.loading=!0,this.linkDiscord()}},Object(c["b"])("user",{linkDiscord:l["b"],unlinkDiscord:l["d"],logoutAction:l["c"]})),{},{logout:function(){this.logoutAction(),this.$router.push("/")}}),mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.getPayments();case 2:r=e.sent,r&&r.data&&(r.data.data.sort((function(t,e){return e.startDate-t.startDate})),t.payments=r.data.data?r.data.data:[]),t.pageFinishedLoading=!0;case 5:case"end":return e.stop()}}),e)})))()}},D=k,I=Object(C["a"])(D,a,s,!1,null,null,null);e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-39a5c07d.dc86da78.js.map