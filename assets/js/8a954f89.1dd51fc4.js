"use strict";(self.webpackChunk_recative_documents=self.webpackChunk_recative_documents||[]).push([[868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:8001},i="TN8001: Act Player: Episode Level Media Playback",p={unversionedId:"technotes/tn8001-act-player/index",id:"technotes/tn8001-act-player/index",title:"TN8001: Act Player: Episode Level Media Playback",description:"Introduction",source:"@site/docs/technotes/tn8001-act-player/index.mdx",sourceDirName:"technotes/tn8001-act-player",slug:"/technotes/tn8001-act-player/",permalink:"/docs/technotes/tn8001-act-player/",draft:!1,editUrl:"https://github.com/recative/recative-system/tree/master/packages/documents/docs/technotes/tn8001-act-player/index.mdx",tags:[],version:"current",sidebarPosition:8001,frontMatter:{sidebar_position:8001},sidebar:"technotes",previous:{title:"TN7001: Audio Management",permalink:"/docs/technotes/tn7001-audio-management/"},next:{title:"TN9001: Project Model",permalink:"/docs/technotes/tn9001-project-model/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Essential parts of a player",id:"essential-parts-of-a-player",level:2},{value:"Interface component",id:"interface-component",level:2},{value:"Different type of interface components",id:"different-type-of-interface-components",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tn8001-act-player-episode-level-media-playback"},"TN8001: Act Player: Episode Level Media Playback"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Act player implemented a React binding of Episode Core, it implemented all user\ninterfaces of the player, and built a bridge from your asset to the episode\ncore."),(0,o.kt)("p",null,"Act player provides a build-in interface implementation, which provides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Loading Indicator:")," Core manager will show this component if the metadata or content\nis not loaded, or the buffer of the video have drained.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Subtitle:")," This will show subtitle of your video content or audio clip\ninside the act point program.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dialog Component:")," That show additional information on the right side of\nyour content, it looks like the information card of YouTube, but can display\nmore type of information, like texture, and audio.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Controller:")," Pause and play, setting content language, volume, navigating\nto different assets and time, and more fundamental elements for a player.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Stage:")," The stage contains all assets to be played, it will create and destroy\nReact Elements for different contents, and connect these contents with\n",(0,o.kt)("em",{parentName:"p"},"Core Manager"),"."))),(0,o.kt)("h2",{id:"essential-parts-of-a-player"},"Essential parts of a player"),(0,o.kt)("p",null,"The components we introduced above are default implementation for the player,\ndevelopers can pass their own\n",(0,o.kt)("a",{parentName:"p",href:"/api/act-player/interface/IUnmanagedActPointProps#interfaceComponents"},"interface component"),"\ninto the player and customize the visual experience and functionality of the\nplayer. All interface components are React components, they are stored in an\narray, they will be rendered in the player container."),(0,o.kt)("h2",{id:"interface-component"},"Interface component"),(0,o.kt)("p",null,"We must make the component met specific\n",(0,o.kt)("a",{parentName:"p",href:"/api/act-player#InterfaceExtensionComponent"},"typing signature")," to make sure\n",(0,o.kt)("em",{parentName:"p"},"Core Manager")," and ",(0,o.kt)("em",{parentName:"p"},"Act Player")," can communicate with the component\nimplementation, basically, we will pass two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"core"),":")," A instance of the ",(0,o.kt)("em",{parentName:"p"},"Episode Core"),", we can use this parameter to\ncontrol most behavior of the player.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"loadingComponent"),":")," A component that indicate something is still loading,\nyou can show this component if something is stilling being cooked."))),(0,o.kt)("p",null,"After the component is created, we can start to interact with the ",(0,o.kt)("em",{parentName:"p"},"Episode Core"),"."),(0,o.kt)("h3",{id:"different-type-of-interface-components"},"Different type of interface components"),(0,o.kt)("p",null,"There're different type of interface components, you can choose one based on\nyour technical requirement."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Na\xefve components:")," If we don't need let the ",(0,o.kt)("em",{parentName:"p"},"Episode Core")," to control\nthe lifecycle of the component, this component is a na\xefve component, we don't\nneed to do anything special.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Managed components:")," Managed components hooked up with the life cycle\nmanagement process of the ",(0,o.kt)("em",{parentName:"p"},"Episode Core"),",\n",(0,o.kt)("a",{parentName:"p",href:"/api/core-manager/interface/ComponentFunctions"},"component functions"),". Here are\nthree use cases:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A play button layer:")," if the media playback was paused, ask core\ncall the ",(0,o.kt)("inlineCode",{parentName:"p"},"pause")," function we provided via ",(0,o.kt)("inlineCode",{parentName:"p"},"componentFunctions"),'. When the\nfunction was called, we show the large "play" button.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A transition animation layer:")," show an animation while switching between\nassets above the player, which can hide the underlying resource loading\nprocess. we use ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldBlockContentSwitch")," life cycle to notify the\n",(0,o.kt)("em",{parentName:"p"},"Episode Core")," that all lifecycles should be processed manually, then we\ncall ",(0,o.kt)("inlineCode",{parentName:"p"},"unblockAssetSetup"),' while the "ease-in" animation was played, then call\n',(0,o.kt)("inlineCode",{parentName:"p"},"unblockAssetPlay"),' when the "ease-out" animation was played. For more\ndetails, see "Switching between contents" section below.')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Critical components:")," Critical components must be registered before or the\nplayer will not process any incoming requests. There is currently only one\ncritical component called ",(0,o.kt)("inlineCode",{parentName:"p"},"stage"),". Critical component could be na\xefve or\nmanaged."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Stage will show all assets available in an episode. The stage component should\nimplement methods that create, destroy, show, hide content in its\n",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentFunctions"),", for more detail, checkout the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/recative/recative-system/blob/master/packages/act-player/src/components/Stage/Stage.tsx"},"source code"),"."),(0,o.kt)("p",{parentName:"admonition"},"Assets inside the stage components are implemented by ",(0,o.kt)("em",{parentName:"p"},"asset instance components"),"\nlike ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/recative/recative-system/blob/master/packages/act-player/src/components/Stage/ActPoint.tsx"},"videos"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/recative/recative-system/blob/master/packages/act-player/src/components/Stage/ActPoint.tsx"},"act points"),".\nThe API for both is quite like that of ",(0,o.kt)("em",{parentName:"p"},"interface components"),", but\nwe do not support third-party interface components implementations.")))}m.isMDXComponent=!0}}]);