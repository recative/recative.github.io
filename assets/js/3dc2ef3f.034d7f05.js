"use strict";(self.webpackChunk_recative_documents=self.webpackChunk_recative_documents||[]).push([[336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7001},r="TN7001: Audio Management",l={unversionedId:"technotes/tn7001-audio-management/index",id:"technotes/tn7001-audio-management/index",title:"TN7001: Audio Management",description:"Introduction",source:"@site/docs/technotes/tn7001-audio-management/index.mdx",sourceDirName:"technotes/tn7001-audio-management",slug:"/technotes/tn7001-audio-management/",permalink:"/docs/technotes/tn7001-audio-management/",draft:!1,editUrl:"https://github.com/recative/recative-system/tree/master/packages/documents/docs/technotes/tn7001-audio-management/index.mdx",tags:[],version:"current",sidebarPosition:7001,frontMatter:{sidebar_position:7001},sidebar:"technotes",previous:{title:"Introduction",permalink:"/docs/technotes/intro"},next:{title:"TN7002: Time Synchronization",permalink:"/docs/technotes/tn7002-time-synchronization/"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Audio Elements",id:"audio-elements",level:3},{value:"Usage",id:"usage",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tn7001-audio-management"},"TN7001: Audio Management"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Media playback, especially playing media with sound is a hard-core task\nsince different browsers have different media playback strategy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium requires user interact (click or touch) with the page at least once,\nall audios could be played automatically."),(0,o.kt)("li",{parentName:"ul"},"Safari requires user manually trigger the audio playback."),(0,o.kt)("li",{parentName:"ul"},"Firefox have a site-by-site configuration panel for their user."),(0,o.kt)("li",{parentName:"ul"},"Chromium or Safari based WebView, or GeckoView have their own API to decide\nif the browser should allow auto play or not.")),(0,o.kt)("p",null,"To handle these complex problem Recative System created a consistence audio\nexperience across all major browser platforms. This feature is enabled by\n",(0,o.kt)("a",{parentName:"p",href:"https://recative.github.io/api/audio-station"},(0,o.kt)("inlineCode",{parentName:"a"},"@recative/audio-station"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://recative.github.io/api/phonograph"},(0,o.kt)("inlineCode",{parentName:"a"},"@recative/phonograph")),",\nwhich created a global ",(0,o.kt)("inlineCode",{parentName:"p"},"AudioContext"),", and manually manage the media playback\nrelated work instead of using\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement"},"HTMLMediaElement"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"However, this architecture has its own limitation: user still have to interact\nwith the page at once to enable the global audio context, so we can take over\nthe job of audio playback management.")),(0,o.kt)("p",null,"This tech note will give a brief introduction about the architecture design of\nthe audio management system."),(0,o.kt)("h1",{id:"initialization"},"Initialization"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AudioStation")," maintain a singleton of audio context and the audio station\nmanager, user need to call the\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/api/audio-station/function/getGlobalAudioStation"},(0,o.kt)("inlineCode",{parentName:"a"},"getGlobalAudioStation")),"\nmethod to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/recative/recative-system/blob/bbc22e46471e4516333525819a24b111c167b9ed/packages/core-manager/src/episodeCore.ts#L105"},"interact with the manager"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"const audioStation = getGlobalAudioStation();\n")),(0,o.kt)("p",null,"Then, user need to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate")," method in the synchronous call stack\ncallback of any click and touch event, the audio station will work after the\nreturned promise resolved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"audioStation.activate().then(() => {\n  console.log('You can make some noise here now!');\n});\n")),(0,o.kt)("p",null,"You can find\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/recative/recative-system/blob/bbc22e46471e4516333525819a24b111c167b9ed/packages/core-manager/src/episodeCore.ts#L343-L346"},"related source code from here"),"."),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Audio is managed in a three level model, with different kind of audio backend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Audio Host"),": There is an audio host ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/recative/recative-system/blob/df61508153b79018f530f4552b8fbc72df341569/packages/core-manager/src/instance.ts#L110"},"for each asset"),"\ncalled ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/recative/recative-system/blob/df61508153b79018f530f4552b8fbc72df341569/packages/core-manager/src/audio/audioHost.ts#L152"},(0,o.kt)("inlineCode",{parentName:"a"},"AudioHost")),",\nit will handle resource loading, playback, destroy, volume manage and subtitle\nmanagement for different audio files.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/recative/recative-system/blob/df61508153b79018f530f4552b8fbc72df341569/packages/core-manager/src/audio/audioHost.ts#L22"},(0,o.kt)("strong",{parentName:"a"},"LoadableAudioElement")),":\nBuild a general abstract interface for different type of audio backend. This\nlevel of abstraction will hold the loading status of the audio file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"AudioElement"),": Did the actual logic for downloading file, controlling\nthe volume, seeking to different time and all operations about an audio file.\nThere are two different type of audio elements."))),(0,o.kt)("h3",{id:"audio-elements"},"Audio Elements"),(0,o.kt)("p",null,"Recative System has two builds in implementations for different use cases, The\nimplementation of audio elements extensible, which means developers cannot\nwrite their own AudioElement implementations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"BasicAudioElement"),": This is the na\xefve implementation for audio playback,\nthe codec support is aligned with user's browser. Audio files managed by\nthis kind of audio element is playable if and only if all contents are\ndownloaded and decoded. The data will be stored in the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pulse-code_modulation"},"PCM format"),"\nwithout any compression, so be caution that developers should not play audio\nlonger than 60 seconds to prevent the web page is killed by user's ",(0,o.kt)("span",{title:"SAFARI!"},"browser"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PhonographAudioElement"),": Audio files managed by this type of audio\nelement will be spliced into a lot of small fragments, the audio file is\nplayable when enough fragments loaded. There are a buffer holds all the decoded\nfiles, only a small amount of the fragments are stored, played audio buffered\nwill be destroyed instantly, so the memory usage is smaller than the\n",(0,o.kt)("inlineCode",{parentName:"li"},"BasicAudioElement"),", only binary that not decoded, and PCM fragments in the\nbuffer will be stored in the users' memory. Please notice this audio element\nonly supports the MP3 format.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There's interest to support the OGG format but not planned, let us know if you\nneed this feature, or even better, would like to implement this feature.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"For developers that using Recative Studio, open the resource tab of the resource\nmanager, double click the audio resource to open the resource editing modal,\nand tick the ",(0,o.kt)("em",{parentName:"p"},"Enable Phonograph backend")," checkbox, your resource will be played\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"PhonographAudioElement")," to manage the audio file."),(0,o.kt)("p",null,"For developers who are writing resource definitions manually, write a key with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"'@recative/extension-audio-backends/PhonographAudioBackend~~backend'\n")),(0,o.kt)("p",null,"with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"yes"),", inside the ",(0,o.kt)("a",{parentName:"p",href:"/api/definitions/interface/IResourceFile#extensionConfigurations"},(0,o.kt)("inlineCode",{parentName:"a"},"extensionConfiguration")),"\nfield, the core manager will use the phonograph audio backend now."))}u.isMDXComponent=!0}}]);