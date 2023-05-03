"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{4905:function(n,e,r){r(2791);var o=r(6358),t=r(184);e.Z=function(n){var e=n.children;return(0,t.jsx)(o.I,{children:e})}},6358:function(n,e,r){r.d(e,{I:function(){return d},N:function(){return p}});var o,t,a,i,c,l=r(168),u=r(6444),s=r(4140),d=u.ZP.div(o||(o=(0,l.Z)(["\n  max-width: 1240px;\n  padding: 60px 15px 15px;\n  margin: 0 auto;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  position: relative;\n\n  ","\n\n  ","\n"])),(0,s.M)(t||(t=(0,l.Z)(["\n    grid-template-columns: repeat(2, 1fr);\n  "]))),(0,s.a)(a||(a=(0,l.Z)(["\n    grid-template-columns: repeat(1, 1fr);\n    padding: 30px 15px 15px;\n  "])))),p=u.ZP.h1(i||(i=(0,l.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n  display: none;\n\n  ","\n"])),(function(n){return n.theme.mainTextColor}),(0,s.a)(c||(c=(0,l.Z)(["\n    display: block;\n    margin: 0;\n  "]))))},1180:function(n,e,r){r(2791);var o=r(3329),t=r(184),a=function(n){return n.length>25?n.slice(0,25)+"...":n};e.Z=function(n){var e=n.game,r=e.id,i=e.name,c=e.short_screenshots,l=void 0===c?"#":c,u=a(i),s="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1620";return(0,t.jsx)(o.$,{to:"/details/".concat(r),children:(0,t.jsxs)(o.s,{children:[(0,t.jsx)("img",{width:"100%",src:l&&l.length&&l.length>1?l[1].image:s,alt:""}),(0,t.jsx)("h3",{children:u})]})})}},3329:function(n,e,r){r.d(e,{$:function(){return p},s:function(){return d}});var o,t,a,i=r(168),c=r(1087),l=r(6444),u=r(2469),s=r(4140),d=l.ZP.div(o||(o=(0,i.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s;\n  transition: all 0.5s;\n  border-radius: 5px;\n  /* opacity: 0; */\n  /* animation: "," 10ms ease 600ms forwards; */\n\n  & img {\n    object-fit: cover;\n    /* height: 175px; */\n    height: 200px;\n  }\n\n  & h3 {\n    color: ",";\n    text-align: center;\n    padding: 0 0 20px;\n  }\n\n  &:hover {\n    scale: 1.05;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n\n    ","\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    height: 200px;\n    width: 100%;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(45deg, black, transparent);\n  }\n"])),(function(n){return n.theme.cardBackgroundColor}),u.LN,(function(n){return n.theme.mainTextColor}),(0,s.a)(t||(t=(0,i.Z)(["\n      scale: 1;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  "])))),p=(0,l.ZP)(c.OL)(a||(a=(0,i.Z)(["\n  text-decoration: none;\n"])))},3954:function(n,e,r){r.d(e,{n:function(){return a}});var o,t=r(168),a=r(6444).ZP.h1(o||(o=(0,t.Z)(["\n  grid-column: 1 / -1;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.mainTextColor}))},2846:function(n,e,r){r.d(e,{Z:function(){return w}});var o,t,a,i,c,l=r(9434),u=r(3361),s=r(994),d=r(168),p=r(6444),x=p.ZP.button(o||(o=(0,d.Z)(["\n  font-size: 17px;\n  padding: 15px;\n  width: 50%;\n  text-align: center;\n  border: none;\n  text-transform: uppercase;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor})),h=r(184),g=function(){var n=(0,l.I0)(),e=(0,l.v9)(u.Y.lastPage),r=(0,l.v9)(u.Y.page),o=(0,l.v9)(u.Y.currentPage),t=(0,l.v9)(u.Y.totalPages);return(0,h.jsx)(x,{disabled:function(){switch(o){case"cloudLibary":return!(r<t);case"home":case"by Genres":return!1;default:return!(r<e)}}(),onClick:function(){n((0,s.bh)())},children:"NextPage"})},f=p.ZP.button(t||(t=(0,d.Z)(["\n  width: 50%;\n  font-size: 17px;\n  padding: 15px;\n  border: none;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n"])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor})),m=function(){var n=(0,l.I0)(),e=(0,l.v9)(u.Y.page);return(0,h.jsx)(f,{disabled:1===e,onClick:function(){n((0,s.ds)())},children:"Previous page"})},b=r(3954),v=r(4140),Z=p.ZP.div(a||(a=(0,d.Z)(["\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 15px 15px 40px;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n  font-size: 17px;\n  border: none;\n  gap: 10px;\n  color: ",";\n  display: flex;\n\n  & button {\n    border-radius: 5px;\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n\n      ","\n    }\n\n    &:disabled {\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n        ","\n      }\n    }\n  }\n"])),(function(n){return n.theme.headerTextColor}),(function(n){return n.theme.loadMoreHoverColor}),(function(n){return n.theme.mainCardTextColor}),(0,v.a)(i||(i=(0,d.Z)(["\n        background-color: ",";\n        color: ",";\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      "])),(function(n){return n.theme.loadMoreBtnColor}),(function(n){return n.theme.headerTextColor})),(function(n){return n.theme.loadMoreDisabledColor}),(function(n){return n.theme.loadMoreDisabledColor}),(function(n){return n.theme.headerTextColor}),(0,v.a)(c||(c=(0,d.Z)(["\n      background-color: ",";\n  "])),(function(n){return n.theme.loadMoreDisabledColor}))),w=function(){var n=(0,l.v9)(u.Y.gamesList),e=(0,l.v9)(u.Y.cloudGames),r="cloudLibary"===(0,l.v9)(u.Y.currentPage)?e:n;return(0,h.jsx)(h.Fragment,{children:r&&r.length?(0,h.jsxs)(Z,{children:[(0,h.jsx)(m,{}),(0,h.jsx)(g,{})]}):(0,h.jsx)(b.n,{children:"Game list is empty... "})})}},1978:function(n,e,r){r.r(e);var o=r(4905),t=r(6358),a=r(2780),i=r(1180),c=r(2846),l=r(2791),u=r(9434),s=r(7689),d=r(5719),p=r(994),x=r(3361),h=r(184);e.default=function(){var n=(0,u.v9)(x.Y.isLoading),e=(0,u.v9)(x.Y.gamesList),r=(0,u.v9)(x.Y.page),g=(0,s.UO)().genre,f=(0,u.I0)();return(0,l.useEffect)((function(){g&&f((0,p.D4)("by Genres"))}),[]),(0,l.useEffect)((function(){window.scrollTo(0,0),f((0,d.v)({page:r,genre:g}))}),[r,g,f]),(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(a.Z,{}),(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(t.N,{children:'Games in the genre: "'.concat(g,'"')}),e&&e.map((function(n){return(0,h.jsx)(i.Z,{game:n},n.id)}))]}),(0,h.jsx)(c.Z,{})]})}}}]);
//# sourceMappingURL=978.b46ee6d3.chunk.js.map