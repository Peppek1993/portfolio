(function(t){function e(e){for(var s,l,o=e[0],r=e[1],c=e[2],p=0,m=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var r=i[o];0!==n[r]&&(s=!1)}s&&(a.splice(e--,1),t=l(l.s=i[0]))}return t}var s={},n={app:0},a=[];function l(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=s,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(i,s,function(e){return t[e]}.bind(null,s));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"3aa6":function(t,e,i){t.exports=i.p+"img/aboutme.f195e9c6.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-screen overflow-hidden duration-500",class:[{"light lightMobile":"Light"==t.items.mode},{"dark darkMobile text-white textShadow":"Dark"==t.items.mode}],attrs:{id:"main"}},[i("app-programs"),i("app-taskbar"),i("app-window"),i("app-start-menu")],1)},a=[],l=i("5530"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fixed bottom-0 w-full h-8 bg-gray-900 customGrid opacity-80 z-50 textShadow text-white"},[i("div",{staticClass:"col-start-1 col-end-2",on:{click:function(e){t.items.startMenuOpened=!t.items.startMenuOpened}}},[i("i",{staticClass:"fab fa-windows fa-lg p-2 hover:text-blue-400 hover:bg-gray-700 duration-500"})]),i("div",{staticClass:"col-start-2 col-end-3 flex select-none font-extralight"},t._l(t.items.openedApps,(function(e,s){return i("div",{key:s,staticClass:"taskApp duration-200 h-full md:w-40  flex mr-1",class:[{"activeApp ":e.name==t.items.activeApp},e.name],on:{click:function(i){t.makeActive(e),t.getClickPosition(i),t.unMinimize(e,s)}}},[i("i",{staticClass:"fas fa px-2 md:px-4 pt-2 text-blue-500",class:e.icon}),i("p",{staticClass:"px-1 py-1 hidden md:inline-block"},[t._v(t._s(e.name))])])})),0),i("div",{staticClass:"col-start-3 col-end-4 py-1  font-extralight"},[t._v(" 28.12 17:32 ")])])},r=[],c=(i("b0c0"),i("2f62")),u=i("cffa"),p={computed:Object(l["a"])({},Object(c["b"])(["items"])),methods:{makeActive:function(t){this.items.activeApp=this.activeApp=t.name,t.minimized=!1},getClickPosition:function(t){this.items.mostRecentClick={x:t.clientX,y:t.clientY}},unMinimize:function(t,e){setTimeout((function(){t.minimized=!1}),200);var i=this.items.apps[e].ref;u["a"].to(i,.2,{scale:1,translateX:e,translateY:e})}}},m=p,d=(i("b377"),i("2877")),f=Object(d["a"])(m,o,r,!1,null,null,null),h=f.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-4 select-none absolute text-center"},[t._l(t.apps,(function(e,s){return i("div",{key:s,ref:"appIcon",refInFor:!0,staticClass:"pb-24 textShadow"},[i("vue-draggable-resizable",{attrs:{"class-name-active":"app-active-class",resizable:!1,w:80,h:80}},[i("div",{staticClass:"appClass h-20 w-20",on:{click:function(i){t.openApp(e),t.getClickPosition(i,s),t.resizeAndPlace()}}},[i("i",{staticClass:"fas fa-3x h-12 w-20",class:[e.icon,e.iconColor]}),i("p",{staticClass:"text-white font-light text-sm textShadow"},[t._v(" "+t._s(e.name)+" ")])])])],1)})),i("div",{ref:"light",staticClass:"w-20 h-20",on:{click:t.switchMode}},[i("i",{staticClass:"fas fa-lightbulb fa-3x",class:[{"text-yellow-200":"Dark"==t.items.mode},{"text-indigo-900":"Light"==t.items.mode}]}),i("p",{staticClass:"text-white font-light text-sm textShadow"},[t._v(" "+t._s(t.items.mode)+" Mode ")])])],2)},v=[],b=(i("4de4"),i("a5cf")),x={computed:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["items"])),{},{apps:function(){return this.items.apps.filter((function(t){return"app"==t.tag}))}}),mounted:function(){var t=this.$refs,e=t.appIcon,i=t.light,s=new b["c"];s.to(i,0,{opacity:0,scale:.5}).from(e,.6,{delay:.2,translateY:-200,translateX:-100,opacity:0,stagger:.2,ease:"back"}).to(i,.2,{opacity:1,scale:1}).to(i,.1,{scale:.8}).to(i,.1,{scale:1})},methods:{openApp:function(t){var e=this.items.openedApps;0==e.filter((function(e){return e.name==t.name})).length&&e.push(t),this.items.activeApp=t.name},resizeAndPlace:function(){var t=this.items.openedApps,e=document.getElementById("main").clientHeight,i=document.getElementById("main").clientWidth;if(i<767)for(var s=0;s<t.length;s++)t[s].minW=i-40;for(var n=0;n<t.length;n++)t[n].posX=i/2-t[n].minW/2,t[n].posY=e/2-t[n].minH/2},switchMode:function(){"Light"==this.items.mode?this.items.mode="Dark":"Dark"==this.items.mode&&(this.items.mode="Light")},getClickPosition:function(t,e){this.items.mostRecentClick={x:t.clientX,y:t.clientY},this.items.apps[e].x=t.clientX,this.items.apps[e].y=t.clientY}}},y=x,C=Object(d["a"])(y,g,v,!1,null,null,null),w=C.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition-group",{attrs:{css:!1},on:{enter:t.enter,leave:t.leave}},t._l(t.items.openedApps,(function(e,s){return i("div",{key:s+"a",ref:"window",refInFor:!0,staticClass:"relative",class:[{"z-50 ":e.name==t.items.activeApp},e.name],attrs:{id:s},on:{mousedown:function(i){return t.makeActive(e.name)}}},[0==e.minimized?i("vue-draggable-resizable",{staticClass:"window rounded-xl",class:{"windowLight ":"Light"==t.items.mode},attrs:{resizable:!1,y:e.posY,x:e.posX,w:e.minW,h:e.minH,"drag-handle":".header"}},[i("div",{staticClass:"header flex rounded-t-xl select-none textShadow",class:{"headerLight ":"Light"==t.items.mode}},[i("ul",{staticClass:"flex py-2 pl-2"},[i("a",{staticClass:"button close-btn",on:{click:function(i){return t.exitApp(e)}}}),i("a",{staticClass:"button min-btn",on:{click:function(i){return t.minimize(e,s)}}}),i("a",{staticClass:"button max-btn"})]),i("h1",{staticClass:"w-full text-center text-white font-extralight"},[t._v(" "+t._s(e.name)+" ")])]),i("div",{staticClass:"w-full h-full pb-7"},[i(e.component,{tag:"component"})],1)]):t._e()],1)})),0)],1)},_=[],j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full rounded-b-xl font-light text-lg overflow-y-auto sm:overflow-hidden overflow-x-hidden p-4"},[s("img",{staticClass:"w-32 sm:w-48 rounded-md shadow float-left mr-2",attrs:{src:i("3aa6")}}),s("h1",{staticClass:"text-3xl text-indigo-200"},[t._v("Hey!")]),s("p",{staticClass:"text-base"},[t._v(" My name is Adam and I live in Cracow, Poland. I'm a self-taught web developer, focusing mostly on the front end. I've graduated from Kielce University of Technology with Engineering degree in Surveying and Cartography. I've spent majority of my life working with computers in some form so I figured I might as well give this whole \"programming\" thing a go. Turns out I quite like it so I stuck with it until now - started about 1.5 year ago. My main approach when building a website is to think outside the box. I never liked doing the same thing everyone else is doing. ")])])}],A={},P=A,O=Object(d["a"])(P,j,I,!1,null,null,null),z=O.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full px-6 overflow-y-auto font-extralight text-center pb-6"},[s("section",[s("h1",{staticClass:"skillsHeadline"},[t._v(" Skills ")]),s("p",{staticClass:"pb-4"},[t._v(" I'm not a type of person to list 25 libraries/technologies/languages that I barely spent a few hours on and mark myself as proficient in them. I'm going to use this page to inform you on what areas of WebDev I feel confident in and can move around freely. ")]),s("hr")]),s("section",[s("h1",{staticClass:"skillsHeadline"},[t._v(" Basics ")]),s("div",{staticClass:"flex items-center justify-center pb-2"},[s("div",{staticClass:"skillsIcon"},[s("img",{attrs:{src:"https://s.svgbox.net/files.svg?ic=html&fill=000",width:"48",height:"48"}}),s("h2",[t._v("HTML")])]),s("div",{staticClass:"skillsIcon"},[s("img",{attrs:{src:"https://s.svgbox.net/files.svg?ic=css&fill=000",width:"48",height:"48"}}),s("h2",[t._v("CSS")])]),s("div",{staticClass:"skillsIcon"},[s("img",{attrs:{src:"https://s.svgbox.net/files.svg?ic=js&fill=000",width:"48",height:"48"}}),s("h2",[t._v("Javascript")])])]),s("p",{staticClass:"pb-4"},[t._v(" The Triforce of Web Dev - HTML, CSS & Javascript. I can say that I'm fairly confident in these and have spent countless hours learning the ins & outs of each. ")]),s("hr")]),s("section",[s("h1",{staticClass:"skillsHeadline"},[t._v("Vue")]),s("div",{staticClass:"items-center flex flex-col pb-4"},[s("img",{attrs:{src:"https://s.svgbox.net/files.svg?ic=vue&fill=000",width:"48",height:"48"}}),s("p",[t._v(" My framework of choice is Vue and I feel the strongest in it. I've tried all the \"Big 3\" frameworks and fell in love with Vue immediately. I'm proficient in Vuex and Vue-Router and I've used and learned a handful of useful vue-specific libraries. ")])]),s("hr")]),s("section",[s("h1",{staticClass:"skillsHeadline"},[t._v("Tailwind")]),s("div",{staticClass:"items-center flex flex-col pb-4"},[s("img",{attrs:{src:"https://s.svgbox.net/files.svg?ic=tailwind&fill=000",width:"48",height:"48"}}),s("p",[t._v(' To write clean and efficient CSS I mostly use Tailwind. I\'ve started using it while developing my first "serious" project (Lightning Bet) and stuck with it. It feels very intuitive and gives me the ability to style my website fairly quickly. ')])]),s("hr")]),s("section",[s("h1",{staticClass:"skillsHeadline"},[t._v("Other")]),s("div",{staticClass:"flex items-center justify-center pb-4"},[s("div",{staticClass:"skillsIcon"},[s("img",{attrs:{src:"https://s.svgbox.net/files.svg?ic=git&fill=000",width:"48",height:"48"}}),s("h2",[t._v("GIT")])]),s("div",{staticClass:"skillsIcon"},[s("img",{attrs:{src:i("946b"),width:"48",height:"48"}}),s("h2",[t._v("GSAP")])]),s("div",{staticClass:"skillsIcon"},[s("img",{attrs:{src:i("80a4"),width:"48",height:"48"}}),s("h2",[t._v("RWD")])]),s("div",{staticClass:"skillsIcon"},[s("img",{attrs:{src:i("ffd4"),width:"48",height:"48"}}),s("h2",[t._v("REST API")])])]),s("p",[t._v(" I'm familiar with GIT version control system and REST API. I've also started using GSAP to implement animations and transitions to my projects and I always make sure that all of my websites are mobile friendly and are fully responsive across multiple devices. ")])])])}],W={},H=W,M=Object(d["a"])(H,E,S,!1,null,null,null),T=M.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-full rounded-b-xl font-light text-lg flex justify-around items-center"},t._l(t.projects,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"rounded-md p-2 flex flex-col items-center duration-500",class:[{"hover:bg-gray-800":"Dark"==t.items.mode},{"hover:bg-indigo-100":"Light"==t.items.mode}],on:{click:function(i){t.openApp(e),t.getClickPosition(i),t.resizeAndPlace()}}},[i("i",{staticClass:"fas fa-3x px-4 pt-2",class:[{"text-green-200":"Dark"==t.items.mode},{"text-green-800":"Light"==t.items.mode},e.icon]}),i("p",{staticClass:"font-light text-sm pt-2"},[t._v(" "+t._s(e.name)+" ")])])])})),0)},Y=[],L={computed:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["items"])),{},{projects:function(){return this.items.apps.filter((function(t){return"project"==t.tag}))}}),methods:{openApp:function(t){var e=this.items.openedApps;0==e.filter((function(e){return e.name==t.name})).length&&e.push(t),this.items.activeApp=t.name},resizeAndPlace:function(){var t=this.items.openedApps,e=document.getElementById("main").clientHeight,i=document.getElementById("main").clientWidth;if(i<767)for(var s=0;s<t.length;s++)t[s].minW=i-40;for(var n=0;n<t.length;n++)t[n].posX=i/2-t[n].minW/2,t[n].posY=e/2-t[n].minH/2},getClickPosition:function(t){this.items.mostRecentClick={x:t.clientX,y:t.clientY}}}},$=L,X=Object(d["a"])($,B,Y,!1,null,null,null),D=X.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"text-gray-700 body-font p-4"},[i("div",[i("div",{staticClass:"flex flex-col w-full rounded-lg"},[i("div",[i("input",{staticClass:"w-full px-4 py-2 mb-4 mr-4 bg-gray-100 rounded-lg",attrs:{type:"email",name:"email",placeholder:"email"}})]),i("div",[i("input",{staticClass:"w-full px-4 py-2 mb-4 mr-4 bg-gray-100 rounded-lg",attrs:{type:"name",name:"name",placeholder:"name"}})]),i("div",{staticClass:" "},[i("textarea",{staticClass:"w-full px-4 h-40 py-2 mb-4 mr-4 bg-gray-100 rounded-lg",attrs:{type:"message",name:"message",placeholder:"message"}})]),i("button",{staticClass:"px-8 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-xl"},[t._v(" Button ")])])])])}],V={},J=V,q=Object(d["a"])(J,R,G,!1,null,null,null),F=q.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full px-6 overflow-y-auto font-extralight text-center"},[s("h1",{staticClass:"skillsHeadline"},[t._v(" Lightning Bet ")]),s("img",{attrs:{src:i("ed7f")}}),s("p",{staticClass:"pt-2"},[t._v(" Lightning Bet is a prototype for an esport/sport betting website. You can place bets on different matches in various disciplines including Counter Strike: Global Offensive, League of Legends, DOTA 2, but also American Football, Basketball etc. In addition, you can add your own matches and the betting odds are calculated based on the percentage chance you might think a team has to win the game. ")]),s("h1",{staticClass:"skillsHeadline"},[t._v(" Technologies used ")]),s("div",{staticClass:"flex items-center justify-center"},[s("img",{staticClass:"w-12",attrs:{src:i("6b1c")}}),s("img",{staticClass:"w-12",attrs:{src:i("9c0d")}})]),s("h1",{staticClass:"skillsHeadline"},[t._v(" Demo & Github ")]),s("div",{staticClass:"flex items-center justify-center pb-10"},[s("a",{attrs:{href:"https://peppek1993.github.io/LightningBet/",target:"_blank"}},[s("i",{staticClass:"fas fa-desktop fa-3x px-4"})]),s("a",{attrs:{href:"https://github.com/Peppek1993/LightningBet",target:"_blank"}},[s("i",{staticClass:"fab fa-github fa-3x px-4"})])])])}],N={},Q=N,Z=Object(d["a"])(Q,K,U,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full px-6 overflow-y-auto font-extralight text-center"},[s("h1",{staticClass:"skillsHeadline"},[t._v(" Portfolio ")]),s("img",{staticClass:"rounded-lg",attrs:{src:i("93a3")}}),s("p",{staticClass:"pt-2"},[t._v(" Well, this is awkward.. But since you're already here - this is my portfolio! It was built entirely from scratch to make it look like a mix between Windows and MacOS. I've mostly used Vue and TailwindCSS with some other minor libraries. The inspiration for the design itself was partly borrowed from other websites, but the code and the approach on how to build it is entirely mine. I hope you like it and please don't hesitate to give me any feedback and/or point out any bugs you might've encountered. Cheers! ")]),s("h1",{staticClass:"skillsHeadline"},[t._v(" Technologies used ")]),s("div",{staticClass:"flex items-center justify-center"},[s("img",{staticClass:"w-12",attrs:{src:i("6b1c")}}),s("img",{staticClass:"w-12",attrs:{src:i("9c0d")}}),s("img",{staticClass:"w-12",attrs:{src:i("946b")}})]),s("h1",{staticClass:"skillsHeadline"},[t._v(" Demo & Github ")]),s("div",{staticClass:"flex items-center justify-center pb-10"},[s("a",{attrs:{href:"https://peppek1993.github.io/portfolio/",target:"_blank"}},[s("i",{staticClass:"fas fa-desktop fa-3x px-4"})]),s("a",{attrs:{href:"https://github.com/Peppek1993/portfolio",target:"_blank"}},[s("i",{staticClass:"fab fa-github fa-3x px-4"})])])])}],st={},nt=st,at=Object(d["a"])(nt,et,it,!1,null,null,null),lt=at.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full px-6 overflow-y-auto font-extralight text-center"},[s("h1",{staticClass:"skillsHeadline"},[t._v(" Wine Pairing ")]),s("img",{staticClass:"rounded-md",attrs:{src:i("7649")}}),s("p",{staticClass:"pt-2"},[t._v(" Wine Pairing is a quick and fun project made as a REST API practice. It can help you choose the best wine for your dinner, pick a dish that suits your asortment of wines best, give you the specific wine recommendation with prices and user rating and tell you more about the type of wine you have. ")]),s("h1",{staticClass:"skillsHeadline"},[t._v(" Technologies used ")]),s("div",{staticClass:"flex items-center justify-center"},[s("img",{staticClass:"w-12",attrs:{src:i("6b1c")}}),s("img",{staticClass:"w-12",attrs:{src:i("9c0d")}}),s("img",{staticClass:"w-12",attrs:{src:i("946b")}})]),s("h1",{staticClass:"skillsHeadline"},[t._v(" Demo & Github ")]),s("div",{staticClass:"flex items-center justify-center pb-10"},[s("a",{attrs:{href:"https://peppek1993.github.io/WinePairing/",target:"_blank"}},[s("i",{staticClass:"fas fa-desktop fa-3x px-4"})]),s("a",{attrs:{href:"https://github.com/Peppek1993/WinePairing",target:"_blank"}},[s("i",{staticClass:"fab fa-github fa-3x px-4"})])])])}],ct={},ut=ct,pt=Object(d["a"])(ut,ot,rt,!1,null,null,null),mt=pt.exports,dt={components:{About:z,Skills:T,Projects:D,LightningBet:tt,Portfolio:lt,WinePairing:mt,Contact:F},computed:Object(l["a"])({},Object(c["b"])(["items"])),methods:{makeActive:function(t){this.items.activeApp=this.activeApp=t},exitApp:function(t){this.items.openedApps=this.items.openedApps.filter((function(e){return e!==t}))},minimize:function(t,e){var i=document.getElementById("main").clientHeight,s=document.getElementById("main").clientWidth;setTimeout((function(){t.minimized=!0}),200);var n=this.$refs.window[e];u["a"].to(n,.2,{scale:0,translateX:-s/2+100+160*e,translateY:i-20}),this.items.apps[e].ref=n},enter:function(t,e){var i=document.getElementById("main").clientWidth;this.items.apps[t.id].x=this.items.mostRecentClick.x,this.items.apps[t.id].y=this.items.mostRecentClick.y,u["a"].from(t,.3,{scale:0,translateX:-i/2+this.items.apps[t.id].x,translateY:this.items.apps[t.id].y,onComplete:e})},leave:function(t,e){var i=document.getElementById("main").clientWidth;u["a"].to(t,.2,{scale:0,translateX:-i/2+this.items.apps[t.id].x,translateY:this.items.apps[t.id].y,onComplete:e})}}},ft=dt,ht=(i("f5a2"),Object(d["a"])(ft,k,_,!1,null,null,null)),gt=ht.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{on:{enter:t.taskbarEnter}},[t.items.startMenuOpened?i("div",{ref:"startMenu",staticClass:"fixed bottom-8 w-64 h-96 flex opacity-90 shadow-lg select-none z-50 text-center text-white font-extralight"},[i("nav",{staticClass:"bg-gray-900 w-full pl-12 pt-2"},t._l(t.items.apps,(function(e,s){return i("ul",{key:s},[i("li",{staticClass:"my-1 flex items-center justify-start hover:bg-gray-600 duration-150 textShadow ",on:{click:function(i){t.openApp(e),t.getClickPosition(i),t.resizeAndPlace()}}},[i("i",{staticClass:"fas fa-lg w-12 py-4 bg-blue-200 rounded-lg",class:[e.icon,e.iconColor]}),i("p",{staticClass:"px-2"},[t._v(t._s(e.name))])])])})),0),i("div",{staticClass:"bg-gray-900 h-96 w-12 fixed flex flex-col justify-between sideMenu"},[i("div",{staticClass:"text-3xl p-2"},[t._v("☰")]),i("div",{staticClass:"flex flex-col"},[i("a",{staticClass:"px-2 hover:text-green-300 duration-200",attrs:{href:"https://github.com/Peppek1993",target:"_blank"}},[i("i",{staticClass:"fab fa-github fa-lg py-4"})]),i("div",{staticClass:"px-2 cursor-pointer hover:text-green-300 duration-200",on:{click:t.reload}},[i("i",{staticClass:"fas fa-power-off fa-lg py-4"})])])])]):t._e()])},bt=[],xt={computed:Object(l["a"])({},Object(c["b"])(["items"])),methods:{openApp:function(t){var e=this.items.openedApps;this.items.startMenuOpened=!1,0==e.filter((function(e){return e.name==t.name})).length&&e.push(t),this.items.activeApp=t.name},resizeAndPlace:function(){var t=this.items.openedApps,e=document.getElementById("main").clientHeight,i=document.getElementById("main").clientWidth;if(i<767)for(var s=0;s<t.length;s++)t[s].minW=i-40;for(var n=0;n<t.length;n++)t[n].posX=i/2-t[n].minW/2,t[n].posY=e/2-t[n].minH/2},reload:function(){location.reload()},getClickPosition:function(t){this.items.mostRecentClick={x:t.clientX,y:t.clientY}},taskbarEnter:function(){var t=this.$refs.startMenu;u["a"].from(t,.5,{opacity:0,translateY:300,ease:"power3"})}}},yt=xt,Ct=Object(d["a"])(yt,vt,bt,!1,null,null,null),wt=Ct.exports,kt={components:{appTaskbar:h,appPrograms:w,appWindow:gt,appStartMenu:wt},computed:Object(l["a"])({},Object(c["b"])(["items"]))},_t=kt,jt=(i("034f"),Object(d["a"])(_t,n,a,!1,null,null,null)),It=jt.exports,At=i("8c4f");s["a"].use(At["a"]);var Pt=[],Ot=new At["a"]({mode:"history",base:"/",routes:Pt}),zt=Ot;s["a"].use(c["a"]);var Et=new c["a"].Store({state:{apps:[{name:"Projects",tag:"app",icon:"fa-folder",iconColor:"text-green-200",component:"Projects",posX:null,posY:null,minW:400,minH:200,minimized:!1,maximized:!1,x:null,y:null,ref:null},{name:"About me",tag:"app",icon:"fa-address-card",iconColor:"text-pink-200",component:"About",posX:null,posY:null,minW:700,minH:395,minimized:!1,maximized:!1,x:null,y:null,ref:null},{name:"Skills",tag:"app",icon:"fa-gamepad",iconColor:"text-purple-200",component:"Skills",posX:null,posY:null,minW:800,minH:500,minimized:!1,maximized:!1,x:null,y:null,ref:null},{name:"Contact me",tag:"app",icon:"fa-envelope-open-text",iconColor:"text-indigo-200",component:"Contact",posX:null,posY:null,minW:300,minH:400,minimized:!1,maximized:!1,x:null,y:null,ref:null},{name:"Lightning Bet",tag:"project",icon:"fa-volume-up",iconColor:"text-green-200",component:"LightningBet",posX:null,posY:null,minW:600,minH:400,minimized:!1,maximized:!1,x:null,y:null,ref:null},{name:"Wine Pairing",tag:"project",icon:"fa-volume-up",iconColor:"text-pink-200",component:"WinePairing",posX:null,posY:null,minW:600,minH:400,minimized:!1,maximized:!1,x:null,y:null,ref:null},{name:"Portfolio",tag:"project",icon:"fa-volume-up",iconColor:"text-red-200",component:"Portfolio",posX:null,posY:null,minW:600,minH:400,minimized:!1,maximized:!1,x:null,y:null,ref:null}],openedApps:[],activeApp:"",startMenuOpened:!1,mode:"Dark",mostRecentClick:null,currentRef:null},mutations:{},actions:{},modules:{},getters:{items:function(t){return t}}}),St=(i("def6"),i("fb19")),Wt=i.n(St);i("278f"),i("b972");s["a"].config.productionTip=!1,s["a"].component("vue-draggable-resizable",Wt.a),new s["a"]({router:zt,store:Et,render:function(t){return t(It)}}).$mount("#app")},"6b1c":function(t,e,i){t.exports=i.p+"img/vue.e59e0336.png"},7649:function(t,e,i){t.exports=i.p+"img/winePairing.da3f282e.png"},"80a4":function(t,e,i){t.exports=i.p+"img/rwd.2b46c4a9.png"},"85ec":function(t,e,i){},"93a3":function(t,e,i){t.exports=i.p+"img/portfolio.bfec66e0.png"},"946b":function(t,e,i){t.exports=i.p+"img/gsap.311d59a6.svg"},"9c0d":function(t,e,i){t.exports=i.p+"img/tailwind.17ce3258.svg"},b377:function(t,e,i){"use strict";i("e22a")},def6:function(t,e,i){},e22a:function(t,e,i){},ed7f:function(t,e,i){t.exports=i.p+"img/header.f3e1b767.png"},f033:function(t,e,i){},f5a2:function(t,e,i){"use strict";i("f033")},ffd4:function(t,e,i){t.exports=i.p+"img/rest.a203039d.png"}});
//# sourceMappingURL=app.8edc09c3.js.map