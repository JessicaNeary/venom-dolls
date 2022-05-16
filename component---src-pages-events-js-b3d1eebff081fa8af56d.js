"use strict";(self.webpackChunkvenom_dolls=self.webpackChunkvenom_dolls||[]).push([[651],{7813:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var a=r(7294),n=r(5873),c=r(4942),o=r(5987),l=r(9931),s=r.n(l),i=r(9385),d=r(2665),m=r(8881),u=r(5893),p=["bsPrefix","className","variant","as"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var b=a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.variant,l=e.as,d=void 0===l?"img":l,m=(0,o.Z)(e,p),b=(0,i.vE)(r,"card-img");return(0,u.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:s()(n?"".concat(b,"-").concat(n):b,a)},m))}));b.displayName="CardImg";var v=b,y=a.createContext(null);y.displayName="CardHeaderContext";var O=y,g=["bsPrefix","className","as"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,l=void 0===c?"div":c,d=(0,o.Z)(e,g),m=(0,i.vE)(r,"card-header"),p=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(O.Provider,{value:p,children:(0,u.jsx)(l,E(E({ref:t},d),{},{className:s()(n,m)}))})}));j.displayName="CardHeader";var h=j,P=["bsPrefix","className","bg","text","border","body","children","as"];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=(0,m.Z)("h5"),Z=(0,m.Z)("h6"),S=(0,d.Z)("card-body"),D=(0,d.Z)("card-title",{Component:k}),C=(0,d.Z)("card-subtitle",{Component:Z}),T=(0,d.Z)("card-link",{Component:"a"}),_=(0,d.Z)("card-text",{Component:"p"}),I=(0,d.Z)("card-footer"),L=(0,d.Z)("card-img-overlay"),B=a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.bg,c=e.text,l=e.border,d=e.body,m=e.children,p=e.as,f=void 0===p?"div":p,b=(0,o.Z)(e,P),v=(0,i.vE)(r,"card");return(0,u.jsx)(f,x(x({ref:t},b),{},{className:s()(a,v,n&&"bg-".concat(n),c&&"text-".concat(c),l&&"border-".concat(l)),children:d?(0,u.jsx)(S,{children:m}):m}))}));B.displayName="Card",B.defaultProps={body:!1};var H=Object.assign(B,{Img:v,Title:D,Subtitle:C,Body:S,Link:T,Text:_,Header:h,Footer:I,ImgOverlay:L}),R=function(e,t){var r=new Date(e),a={weekday:"long",year:"numeric",month:"long",day:"numeric"};if(t){var n=new Date(t);return r.toLocaleDateString("en-NZ",a)+" at "+r.toLocaleTimeString("en-NZ")+" - "+n.toLocaleTimeString("en-NZ")}return r.toLocaleDateString("en-NZ",a)+" at "+r.toLocaleTimeString("en-NZ")},M=function(e){var t=e.street+","+e.city+","+e.country+","+e.postcode;return encodeURIComponent(t)},U=r(9324),V=r(8546),q=r(2952),A=function(){return a.createElement("div",{class:"loader"},a.createElement("div",{class:"loader-inner"},a.createElement("div",{class:"loader-line-wrap"},a.createElement("div",{class:"loader-line"})),a.createElement("div",{class:"loader-line-wrap"},a.createElement("div",{class:"loader-line"})),a.createElement("div",{class:"loader-line-wrap"},a.createElement("div",{class:"loader-line"})),a.createElement("div",{class:"loader-line-wrap"},a.createElement("div",{class:"loader-line"})),a.createElement("div",{class:"loader-line-wrap"},a.createElement("div",{class:"loader-line"}))))};var F=function(e){var t=e.event,r=e.isPast,n=void 0!==r&&r;return a.createElement(H,{className:"mb-4 p-0 text-dark col-10 col-md-7",key:t.id},a.createElement(H.Img,{variant:"top",src:t.cover.source,alt:t.name}),a.createElement(H.Body,null,a.createElement(H.Title,{className:"fw-bold"},t.name),a.createElement(H.Subtitle,{className:"text-secondary fw-bold"},R(t.start_time)),a.createElement(H.Subtitle,{className:"pt-4 text-primary"},t.place.location?a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/search/?api=1&query="+M(t.place.location)},t.place.name,", ",t.place.location.city):t.place.name),a.createElement("div",{className:"text-center mt-4"},a.createElement("a",{target:"_black",rel:"noreferrer",className:"my-2 btn btn-lg "+(n?"btn-outline-secondary disabled":"btn-danger"),href:t.ticket_uri?t.ticket_uri:"https://www.facebook.com/events/"+t.id},"Buy Tickets"))))},G=function(e){var t=e.location,r=(0,n.I0)(),c=(0,n.v9)((function(e){return e.eventsLoading})),o=(0,n.v9)((function(e){return e.events}));return(0,a.useEffect)((function(){r((0,U.vw)())}),[]),a.createElement(V.Z,{path:t.pathname},a.createElement(q.Z,{title:"Events"}),a.createElement("div",{className:"bg-black pt-4 text-light d-flex flex-column justify-content-center align-items-center w-100"},a.createElement("h2",{className:"pt-4 pb-2 my-4 fw-bold text-danger"},"UPCOMING EVENTS"),o.current[0]?a.createElement("div",{className:"row justify-content-center"},o.current.map((function(e){return a.createElement(F,{event:e})}))):c?a.createElement(A,null):a.createElement("div",{className:"mb-4 pb-4 w-75 text-center"},"We currently don't have any events available to see online, but there are always plenty in the works, so follow our"," ",a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/thevenomdolls/"},"facebook page")," ","to keep updated!"),a.createElement("h2",{className:"pt-4 pb-2 my-4 fw-bold text-danger"},"PAST EVENTS"),o.past[0]?a.createElement("div",{className:"row justify-content-center pb-4"},o.past.map((function(e){return a.createElement(F,{event:e,isPast:!0})}))):c?a.createElement(A,null):a.createElement("div",{className:"mb-4"},"No past events found.")))}}}]);
//# sourceMappingURL=component---src-pages-events-js-b3d1eebff081fa8af56d.js.map