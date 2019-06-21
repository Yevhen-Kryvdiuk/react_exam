(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(7),c=n.n(u),l=n(2),o=n(9),i=n(10),d=n(19),s=n(18),E=n(20);var p=function(){return r.a.createElement("div",null,"Loading....")},h=function(e){return{type:"CHANGE_ITEM",payload:e}},O=function(e){return{type:"CHANGE_INPUT_VALUE",payload:e}},b=function(){function e(){Object(o.a)(this,e),this.apiBase="http://my-json-server.typicode.com/mate-academy/literary-blog/"}return Object(i.a)(e,[{key:"getAuthors",value:function(){return this._getData("authors")}},{key:"_getData",value:function(e){return fetch("".concat(this.apiBase).concat(e)).then(function(e){return e.json()})}}]),e}();var f=function(e){var t=e.text,n=e.clickAction,a=e.disabled;return r.a.createElement("button",{type:"button",onClick:function(){return n()},disabled:a},t)};var m={changeInputValue:O,changeItem:h,deleteItem:function(){return{type:"DELETE_ITEM"}}},I=Object(l.b)(function(e){return{inputValue:e.inputValue}},m)(function(e){var t=e.inputValue,n=e.changeInputValue,a=e.changeItem,u=e.deleteItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement(f,{text:"Change Author",clickAction:function(){return a(t)}}),r.a.createElement(f,{text:"Delete Author",clickAction:function(){return u()}}))}),j={selectItem:function(e,t){return{type:"SELECT_ITEM",payload:{index:e,value:t}}},changeItem:h,changeInputValue:O},v=Object(l.b)(function(e){return{selectedIndex:e.selectedIndex,inputValue:e.inputValue}},j)(function(e){var t=e.author,n=e.index,a=e.selectedIndex,u=e.selectItem;return n===a?r.a.createElement(I,null):r.a.createElement("div",{className:"author-item",onClick:function(){return u(n,t)}},t)});var y=function(e){var t=e.authors;return r.a.createElement("ul",null,t.map(function(e,t){var n="#".concat(t);return r.a.createElement("li",{key:n},r.a.createElement(v,{author:e,index:t}))}))};var _,x={clearSelection:function(){return{type:"CLEAR_SELECTION"}},moveSelectionUp:function(){return{type:"MOVE_SELECTION_UP"}},moveSelectionDown:function(){return{type:"MOVE_SELECTION_DOWN"}}},g=Object(l.b)(function(e){return{selectedIndex:e.selectedIndex,authors:e.authors}},x)(function(e){var t=e.selectedIndex,n=e.authors,a=e.clearSelection,u=e.moveSelectionUp,c=e.moveSelectionDown,l=null===t||0===t,o=null===t||t===n.length-1,i=null===t;return r.a.createElement("div",null,r.a.createElement(f,{text:"Up",clickAction:function(){return u()},disabled:l}),r.a.createElement(f,{text:"Down",clickAction:function(){return c()},disabled:o}),r.a.createElement(f,{text:"Clear selection",clickAction:function(){return a()},disabled:i}))}),C=new b,T=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.authorRequested,n=e.authorLoaded;t(),C.getAuthors().then(function(e){return n(e)})}},{key:"render",value:function(){var e=this.props,t=e.authors;return e.loading?r.a.createElement(p,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{authors:t}),r.a.createElement(g,null))}}]),t}(a.Component),A={authorRequested:function(){return{type:"FETCH_AUTHOR_REQUEST"}},authorLoaded:function(e){return{type:"FETCH_AUTHOR_SUCCESS",payload:e}}},S=Object(l.b)(function(e){return{authors:e.authors,loading:e.loading}},A)(T),V=n(8),L=n(1),U=n(14),k=n(6),N=n(3),H={authors:[],loading:!1,selectedIndex:null,inputValue:""},D=(_={},Object(L.a)(_,"FETCH_AUTHOR_REQUEST",function(e){return Object(N.a)({},e,{loading:!0})}),Object(L.a)(_,"FETCH_AUTHOR_SUCCESS",function(e,t){return Object(N.a)({},e,{authors:t.payload,loading:!1})}),Object(L.a)(_,"SELECT_ITEM",function(e,t){return Object(N.a)({},e,{selectedIndex:t.payload.index,inputValue:t.payload.value})}),Object(L.a)(_,"CLEAR_SELECTION",function(e){return Object(N.a)({},e,{selectedIndex:null})}),Object(L.a)(_,"CHANGE_ITEM",function(e,t){var n=e.selectedIndex,a=e.authors,r=t.payload,u=Object(k.a)(a);return""===r?u.splice(n,1):u[n]=r,Object(N.a)({},e,{authors:Object(k.a)(u),selectedIndex:null,inputValue:""})}),Object(L.a)(_,"DELETE_ITEM",function(e){var t=e.selectedIndex,n=e.authors,a=Object(k.a)(n);return a.splice(t,1),Object(N.a)({},e,{authors:Object(k.a)(a),selectedIndex:null,inputValue:""})}),Object(L.a)(_,"CHANGE_INPUT_VALUE",function(e,t){return Object(N.a)({},e,{inputValue:t.payload})}),Object(L.a)(_,"MOVE_SELECTION_UP",function(e){var t=e.selectedIndex,n=e.authors;if(0===t)return e;var a=Object(k.a)(n),r=a.splice(t,1),u=Object(U.a)(r,1)[0];return a.splice(t-1,0,u),Object(N.a)({},e,{authors:a,selectedIndex:t-1})}),Object(L.a)(_,"MOVE_SELECTION_DOWN",function(e){var t=e.selectedIndex,n=e.authors;if(t===n.length-1)return e;var a=Object(k.a)(n),r=a.splice(t,1),u=Object(U.a)(r,1)[0];return a.splice(t+1,0,u),Object(N.a)({},e,{authors:a,selectedIndex:t+1})}),_),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=D[t.type];return n?n(e,t):e},w=Object(V.b)(M);c.a.render(r.a.createElement(l.a,{store:w},r.a.createElement(S,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9edee5f0.chunk.js.map