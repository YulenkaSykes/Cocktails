(this.webpackJsonppractice1=this.webpackJsonppractice1||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(15),s=c.n(r),a=(c(22),c(4)),j=c(8),l=c(2),o=(c(23),c(0)),d=function(e){var t=e.drink,c=e.ingredient,i=e.isFull,r=Object(n.useState)(),s=Object(a.a)(r,2),l=s[0],d=s[1];if(t){var b=t.strDrink,h=t.strCategory,u=t.strDrinkThumb,O=t.strInstructions,x=t.idDrink,f=Object.keys(t).filter((function(e){return e.includes("strIngredient")&&t[e]})).map((function(e){return t[e]}));return console.log(f),Object(o.jsxs)("div",{className:"col card ".concat(i&&"full"),children:[Object(o.jsx)("img",{src:u,alt:""}),Object(o.jsxs)("div",{className:"col full-info",children:[Object(o.jsx)("span",{children:h}),Object(o.jsx)("h1",{children:b}),i&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){return d(!l)},children:l?"Hide ingrediends":"Show ingrediends"}),l&&f.map((function(e){return Object(o.jsx)("span",{children:e})})),Object(o.jsx)("h3",{children:"Instructions"}),Object(o.jsx)("p",{children:O})]}),!i&&Object(o.jsx)(j.b,{className:"more",to:"/cocktailDetails/".concat(x),children:"More"})]})]})}var v=c.strDescription,p=c.strType;return Object(o.jsxs)("div",{className:"col card-info",children:[Object(o.jsx)("img",{className:"img",src:"https://www.thecocktaildb.com/images/ingredients/".concat(p.toLowerCase(),".png"),alt:""}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h1",{children:p}),Object(o.jsx)("p",{children:v})]})]})},b=function(){var e=Object(n.useContext)(f).getData,t=Object(n.useState)(""),c=Object(a.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)([]),j=Object(a.a)(s,2),l=j[0],b=j[1];return Object(o.jsxs)("div",{className:"col container",children:[Object(o.jsx)("h1",{children:"Cocktail"}),Object(o.jsxs)("div",{className:"row centered",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:i}),Object(o.jsx)("button",{onClick:function(){r(""),e({name:"s",value:i},b)},children:"Search"})]}),Object(o.jsx)("div",{className:"wrapper row centered",children:(null===l||void 0===l?void 0:l.length)>0&&(null===l||void 0===l?void 0:l.map((function(e){return Object(o.jsx)(d,{drink:e})})))})]})},h=function(){var e=Object(l.f)().id,t=Object(n.useState)(),c=Object(a.a)(t,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e,"&key=1")).then((function(e){return e.json()})).then((function(e){console.log(e),r(e.drinks[0])}))}),[]),Object(o.jsxs)("div",{className:"col centered container",children:[Object(o.jsx)("h1",{children:"Details"}),i&&Object(o.jsx)(d,{drink:i,isFull:!0}),Object(o.jsx)("button",{onClick:function(){return window.history.back},children:"Back"})]})},u=function(e){var t=e.children,c=e.numberToShow,i=Object(n.useState)(0),r=Object(a.a)(i,2),s=r[0],j=r[1],l=Object(n.useState)(!0),d=Object(a.a)(l,2),b=d[0],h=d[1];return console.log(t),Object(o.jsx)("div",{className:"col centered slider",children:Object(o.jsxs)("div",{className:"row centered slider-width",children:[Object(o.jsx)("button",{onClick:function(){j(s-1<0?t.length-1:s-1),h(!b)},children:"<"}),Object(o.jsx)("div",{className:"slide row ".concat(b?"append":"fade"),children:t.slice(s,c+s)}),Object(o.jsx)("button",{onClick:function(){j(s+1>t.length-1?0:s+1),h(!b)},children:">"})]})})},O=function(){var e=Object(n.useContext)(f).getData,t=Object(n.useState)([]),c=Object(a.a)(t,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){e({name:"f",value:"m"},r)}),[]),Object(o.jsxs)("div",{className:"col main",children:[Object(o.jsx)("h1",{children:"Cocktail of the day"}),Object(o.jsx)("div",{className:"row centered wrapp",children:i.length>0&&Object(o.jsx)(u,{numberToShow:5,children:i.length>0&&i.map((function(e){return Object(o.jsx)(d,{drink:e})}))})})]})},x=function(){var e=Object(n.useContext)(f).getData,t=Object(n.useState)(""),c=Object(a.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)([]),j=Object(a.a)(s,2),l=j[0],b=j[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Ingredient"}),Object(o.jsxs)("div",{className:"row centered container",children:[Object(o.jsx)("input",{type:"text",value:i,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){r(""),e({name:"i",value:i},b)},children:"Search"})]}),Object(o.jsx)("div",{className:"row centered",children:(null===l||void 0===l?void 0:l.length)>0&&l.map((function(e){return Object(o.jsx)(d,{ingredient:e})}))})]})},f=Object(n.createContext)();var v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useCallback)((function(e,t){i(!0),fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?".concat(e.name,"=").concat(e.value,"&key=1")).then((function(e){return e.json()})).then((function(e){console.log(e),t(e.drinks||e.ingredients),i(!1)}))}),[]);return Object(o.jsx)(j.a,{children:Object(o.jsxs)(f.Provider,{value:{getData:r},children:[Object(o.jsxs)("div",{className:"App row centered",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)(j.b,{to:"/",children:"Main"}),Object(o.jsx)(j.b,{to:"/cocktailSearch",children:"Search"}),Object(o.jsx)(j.b,{to:"/searchIngridient",children:"Ingridient"})]}),c&&Object(o.jsx)("h1",{children:"Loading"})]}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",exact:!0,children:Object(o.jsx)(O,{})}),Object(o.jsx)(l.a,{path:"/cocktailSearch",children:Object(o.jsx)(b,{})}),Object(o.jsx)(l.a,{path:"/searchIngridient",children:Object(o.jsx)(x,{})}),Object(o.jsx)(l.a,{path:"/cocktailDetails/:id",children:Object(o.jsx)(h,{})})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.3c0e7afd.chunk.js.map