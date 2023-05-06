"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{4905:function(n,r,e){e(2791);var o=e(6358),t=e(184);r.Z=function(n){var r=n.children;return(0,t.jsx)(o.I,{children:r})}},6358:function(n,r,e){e.d(r,{I:function(){return d},N:function(){return p}});var o,t,a,i,u,l=e(168),c=e(6444),s=e(4140),d=c.ZP.div(o||(o=(0,l.Z)(["\n  max-width: 1240px;\n  padding: 60px 15px 15px;\n  margin: 0 auto;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  position: relative;\n\n  ","\n\n  ","\n"])),(0,s.M)(t||(t=(0,l.Z)(["\n    grid-template-columns: repeat(2, 1fr);\n  "]))),(0,s.a)(a||(a=(0,l.Z)(["\n    grid-template-columns: repeat(1, 1fr);\n    padding: 30px 15px 15px;\n  "])))),p=c.ZP.h1(i||(i=(0,l.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n  display: none;\n\n  ","\n"])),(function(n){return n.theme.mainTextColor}),(0,s.a)(u||(u=(0,l.Z)(["\n    display: block;\n    margin: 0;\n  "]))))},1180:function(n,r,e){e(2791);var o=e(3329),t=e(184),a=function(n){return n.length>25?n.slice(0,25)+"...":n};r.Z=function(n){var r=n.game,e=r.id,i=r.name,u=r.short_screenshots,l=void 0===u?"#":u,c=a(i),s="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1620";return(0,t.jsx)(o.$,{to:"/details/".concat(e),children:(0,t.jsxs)(o.s,{children:[(0,t.jsx)("img",{width:"100%",src:l&&l.length&&l.length>1?l[1].image:s,alt:""}),(0,t.jsx)("h3",{children:c})]})})}},3329:function(n,r,e){e.d(r,{$:function(){return p},s:function(){return d}});var o,t,a,i=e(168),u=e(1087),l=e(6444),c=e(2469),s=e(4140),d=l.ZP.div(o||(o=(0,i.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s;\n  transition: all 0.5s;\n  border-radius: 5px;\n  /* opacity: 0; */\n  /* animation: "," 10ms ease 600ms forwards; */\n\n  & img {\n    object-fit: cover;\n    border-radius: 5px 5px 0 0;\n    height: 200px;\n  }\n\n  & h3 {\n    color: ",";\n    text-align: center;\n    padding: 0 0 20px;\n  }\n\n  &:hover {\n    scale: 1.05;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n\n    ","\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    height: 200px;\n    width: 100%;\n    position: absolute;\n    border-radius: 5px 5px 0 0;\n    z-index: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(45deg, black, transparent);\n  }\n"])),(function(n){return n.theme.cardBackgroundColor}),c.LN,(function(n){return n.theme.mainTextColor}),(0,s.a)(t||(t=(0,i.Z)(["\n      scale: 1;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  "])))),p=(0,l.ZP)(u.OL)(a||(a=(0,i.Z)(["\n  text-decoration: none;\n"])))},3954:function(n,r,e){e.d(r,{n:function(){return a}});var o,t=e(168),a=e(6444).ZP.h1(o||(o=(0,t.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.mainTextColor}))},2846:function(n,r,e){e.d(r,{Z:function(){return C}});var o,t,a,i,u,l=e(9434),c=e(3361),s=e(994),d=e(168),p=e(6444),h=p.ZP.button(o||(o=(0,d.Z)(["\n  font-size: 17px;\n  padding: 15px;\n  width: 50%;\n  text-align: center;\n  border: none;\n  text-transform: uppercase;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor})),x=e(184),f=function(){var n=(0,l.I0)(),r=(0,l.v9)(c.Y.lastPage),e=(0,l.v9)(c.Y.currentPage),o=(0,l.v9)(c.Y.pageName),t=(0,l.v9)(c.Y.totalCloudPages);return(0,x.jsx)(h,{disabled:"cloudLibary"===o?!(e<t):!(e<r),onClick:function(){n((0,s.bh)())},children:"NextPage"})},g=p.ZP.button(t||(t=(0,d.Z)(["\n  width: 50%;\n  font-size: 17px;\n  padding: 15px;\n  border: none;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor})),m=function(){var n=(0,l.I0)(),r=(0,l.v9)(c.Y.currentPage);return(0,x.jsx)(g,{disabled:1===r,onClick:function(){n((0,s.ds)())},children:"Previous page"})},b=e(3954),v=e(4140),Z=p.ZP.div(a||(a=(0,d.Z)(["\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 15px 15px 40px;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n  font-size: 17px;\n  border: none;\n  gap: 10px;\n  color: ",";\n  display: flex;\n\n  & button {\n    border-radius: 5px;\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n\n      ","\n    }\n\n    &:disabled {\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n        ","\n      }\n    }\n  }\n"])),(function(n){return n.theme.headerTextColor}),(function(n){return n.theme.loadMoreHoverColor}),(function(n){return n.theme.mainCardTextColor}),(0,v.a)(i||(i=(0,d.Z)(["\n        background-color: ",";\n        color: ",";\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      "])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor})),(function(n){return n.theme.loadMoreDisabledColor}),(function(n){return n.theme.loadMoreDisabledColor}),(function(n){return n.theme.headerTextColor}),(0,v.a)(u||(u=(0,d.Z)(["\n      background-color: ",";\n  "])),(function(n){return n.theme.loadMoreDisabledColor}))),C=function(){var n=(0,l.v9)(c.Y.gamesList),r=(0,l.v9)(c.Y.cloudLibaryGames),e="cloudLibary"===(0,l.v9)(c.Y.pageName)?r:n;return(0,x.jsx)(x.Fragment,{children:e&&e.length?(0,x.jsxs)(Z,{children:[(0,x.jsx)(m,{}),(0,x.jsx)(f,{})]}):(0,x.jsx)(b.n,{children:"Game list is empty... "})})}},7145:function(n,r,e){e.d(r,{Z:function(){return j}});var o=Number.isNaN||function(n){return"number"===typeof n&&n!==n};function t(n,r){if(n.length!==r.length)return!1;for(var e=0;e<n.length;e++)if(t=n[e],a=r[e],!(t===a||o(t)&&o(a)))return!1;var t,a;return!0}var a,i,u,l,c,s,d=e(9434),p=e(3361),h=e(168),x=e(6444),f=e(4140),g=x.ZP.button(a||(a=(0,h.Z)(["\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  border: none;\n  padding: 10px;\n\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n    transform: translatey(-10px);\n\n    ","\n  }\n\n  &.isActive {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor}),(function(n){return n.theme.loadMoreHoverColor}),(function(n){return n.theme.mainCardTextColor}),(0,f.a)(i||(i=(0,h.Z)(["\n        background-color: ",";\n        color: ",";\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        transform: none;\n      "])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor})),(function(n){return n.theme.headerTextColor}),(function(n){return n.theme.loadMoreBtnColor})),m=x.ZP.div(u||(u=(0,h.Z)([""]))),b=x.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin: 0 auto;\n  max-width: 1240px;\n  padding: 20px;\n\n  ","\n"])),(0,f.a)(c||(c=(0,h.Z)(["\n    gap: 5px; \n  "])))),v=x.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  align-items: end;\n"]))),Z=e(994),C=e(184),j=function(){var n=(0,d.I0)(),r=(0,d.v9)(p.Y.lastPage),e=(0,d.v9)(p.Y.currentPage),o=function(n,r){void 0===r&&(r=t);var e=null;function o(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];if(e&&e.lastThis===this&&r(o,e.lastArgs))return e.lastResult;var a=n.apply(this,o);return e={lastResult:a,lastArgs:o,lastThis:this},a}return o.clear=function(){e=null},o}((function(n,r){var e=[];if(n<=9)for(var o=1;o<=n;o++)e.push(o);else if(r<=4){for(var t=1;t<=7;t++)e.push(t);e.push("..."),e.push(n)}else if(r>=n-4){e.push(1),e.push("...");for(var a=n-6;a<=n;a++)e.push(a)}else{e.push(1),e.push("...");for(var i=r-2;i<=r+2;i++)e.push(i);e.push("..."),e.push(n)}return e})),a=o(r,e);return(0,C.jsx)(b,{children:a.map((function(r,o){return(0,C.jsx)(v,{children:"..."===r?(0,C.jsx)(m,{children:r}):(0,C.jsx)(g,{className:e===r?"isActive":"",onClick:function(){return n((0,Z.YA)(r))},children:r})},o)}))})}},1978:function(n,r,e){e.r(r);var o=e(4905),t=e(6358),a=e(2780),i=e(1180),u=e(2846),l=e(7145),c=e(2791),s=e(9434),d=e(7689),p=e(5719),h=e(994),x=e(3361),f=e(184);r.default=function(){var n=(0,s.I0)(),r=(0,s.v9)(x.Y.gamesIsLoading),e=(0,s.v9)(x.Y.gamesList),g=(0,s.v9)(x.Y.currentPage),m=(0,d.UO)().genre;return(0,c.useEffect)((function(){m&&n((0,h.D4)("by Genres"))}),[]),(0,c.useEffect)((function(){window.scrollTo(0,0),n((0,p.v)({page:g,genre:m}))}),[g,m,n]),(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)(a.Z,{}),(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(t.N,{children:'Games in the genre: "'.concat(m,'"')}),e&&e.map((function(n){return(0,f.jsx)(i.Z,{game:n},n.id)}))]}),(0,f.jsx)(l.Z,{}),(0,f.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=978.8b7beeba.chunk.js.map