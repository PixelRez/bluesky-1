(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),c=(n(0),n(160)),l={id:"chat-component",title:"Chat Component",sidebar_label:"Component"},b={id:"external/chat/chat-component",title:"Chat Component",description:"<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>\r",source:"@site/docs\\external\\chat\\chat.md",permalink:"/bluesky/docs/external/chat/chat-component",editUrl:"https://github.com/Alzar/bluesky/edit/documentation/docs/external/chat/chat.md",sidebar_label:"Component",sidebar:"someSidebar",previous:{title:"Markers Component",permalink:"/bluesky/docs/external/markers/markers-component"},next:{title:"Contributing To Blue Sky Framework",permalink:"/bluesky/docs/contributing/info"}},i=[{value:"Required Attributes",id:"required-attributes",children:[{value:"<strong>Server</strong>",id:"server",children:[]},{value:"<strong>Client</strong>",id:"client",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<strong>Server</strong>",id:"server-1",children:[]},{value:"<strong>Client</strong>",id:"client-1",children:[]}]},{value:"Events",id:"events",children:[{value:"<strong>Server</strong>",id:"server-2",children:[]},{value:"<strong>Client</strong>",id:"client-2",children:[]}]},{value:"Suggestion Table",id:"suggestion-table",children:[]},{value:"Job Table",id:"job-table",children:[]},{value:"Example Command Register",id:"example-command-register",children:[]}],o={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{style:{width:"fit-content",margin:"auto",textAlign:"center"}},Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",{colspan:"2"},"Component Available")),Object(c.b)("tr",null,Object(c.b)("td",null,"Server"),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"Client"),Object(c.b)("td",null,"No")))),Object(c.b)("p",null,"Chat component is added ontop of a modified FiveM chat resource, this has been modified to use our permissions system."),Object(c.b)("h2",{id:"required-attributes"},"Required Attributes"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"server"},Object(c.b)("strong",{parentName:"h3"},"Server")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Send: table"))),Object(c.b)("h3",{id:"client"},Object(c.b)("strong",{parentName:"h3"},"Client")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"server-1"},Object(c.b)("strong",{parentName:"h3"},"Server")),Object(c.b)("h4",{id:"registercommand"},Object(c.b)("inlineCode",{parentName:"h4"},"RegisterCommand")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"command: string, callback: function, suggestion: table, arguments: int, job: table"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Registers a standard command for all players to use, so long as they meet any job requirements."))),Object(c.b)("h4",{id:"registeradmincommand"},Object(c.b)("inlineCode",{parentName:"h4"},"RegisterAdminCommand")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"command: string, callback: function, suggestion: table, arguments: int"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Registers a command only admins can use. Admin access is controlled through the ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/bluesky/docs/core/player#entity"}),"Player entity")))),Object(c.b)("h4",{id:"clearall"},Object(c.b)("inlineCode",{parentName:"h4"},"ClearAll")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Clears chat on all clients."))),Object(c.b)("h4",{id:"send-prefix-send"},"Send (",Object(c.b)("em",{parentName:"h4"},"Prefix"),": Send)"),Object(c.b)("h4",{id:"ooc"},Object(c.b)("inlineCode",{parentName:"h4"},"OOC")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"source: int, message: string"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Sends chat message to OOC channel to all clients."))),Object(c.b)("h4",{id:"server-prefix-sendserver"},"Server (",Object(c.b)("em",{parentName:"h4"},"Prefix"),": Send.Server)"),Object(c.b)("h4",{id:"all"},Object(c.b)("inlineCode",{parentName:"h4"},"All")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"message: string"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Sends chat message to Server channel to all clients."))),Object(c.b)("h4",{id:"single"},Object(c.b)("inlineCode",{parentName:"h4"},"Single")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"source: int, message: string"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Sends chat message to Server channel to specified client."))),Object(c.b)("h4",{id:"system-prefix-sendsystem"},"System (",Object(c.b)("em",{parentName:"h4"},"Prefix"),": Send.System)"),Object(c.b)("h4",{id:"all-1"},Object(c.b)("inlineCode",{parentName:"h4"},"All")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"message: string"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Sends chat message to System channel to all clients."))),Object(c.b)("h4",{id:"single-1"},Object(c.b)("inlineCode",{parentName:"h4"},"Single")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"source: int, message: string"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Sends chat message to System channel to specified client."))),Object(c.b)("h4",{id:"help"},Object(c.b)("inlineCode",{parentName:"h4"},"Help")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parameters"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"source: int, message: string"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Return"),": ",Object(c.b)("span",{style:{color:"#cecece"}},Object(c.b)("inlineCode",{parentName:"li"},"None"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": ",Object(c.b)("span",{style:{color:"#cecece"}},"Sends chat message to System Help channel to specified client."))),Object(c.b)("h3",{id:"client-1"},Object(c.b)("strong",{parentName:"h3"},"Client")),Object(c.b)("p",null,"This component has no client methods."),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("hr",null),Object(c.b)("p",null,"As stated, this is a modified default FiveM chat resource so it also includes all of the standard chat events. These will not be documented here, if you want to see docs about this you can find them ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.fivem.net/docs/resources/chat/"}),"here"),"."),Object(c.b)("h3",{id:"server-2"},Object(c.b)("strong",{parentName:"h3"},"Server")),Object(c.b)("h3",{id:"client-2"},Object(c.b)("strong",{parentName:"h3"},"Client")),Object(c.b)("h2",{id:"suggestion-table"},"Suggestion Table"),Object(c.b)("hr",null),Object(c.b)("p",null,"This is the expected table layout that should be passed when registering a command."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-Lua"}),"{\nhelp = 'Quick help line for what the command does',\nparams = {{\n        name = 'Argument Name',\n        help = 'Description of what the argument is'\n    }\n}\n")),Object(c.b)("p",null,"For as many parameters your call defines, you should add an object to the params list describing the required arguments."),Object(c.b)("h2",{id:"job-table"},"Job Table"),Object(c.b)("hr",null),Object(c.b)("h1",{id:"not-yet-implemented"},"NOT YET IMPLEMENTED"),Object(c.b)("h2",{id:"example-command-register"},"Example Command Register"),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-Lua"}),"Chat:RegisterCommand('clear', function(source, args, rawCommand)\n    TriggerClientEvent('chat:clearChat', source)\nend, {\n    help = 'Clear The Chat'\n})\n")))}s.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},m=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(n),O=r,u=m["".concat(l,".").concat(O)]||m[O]||p[O]||c;return n?a.a.createElement(u,b({ref:t},o,{components:n})):a.a.createElement(u,b({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);