(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},30:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(6),r=n.n(c),s=(n(30),n(5)),i=(n(11),n(8)),l=n(3),o=n(9),d=n(15),j=n(24),u="SET_DATA",b={data:[],pageSize:20},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return t.type===u?Object(d.a)(Object(d.a)({},e),{},{data:Object(o.a)(t.data)}):e},f=n(1),O=function(e){return Object(f.jsx)("input",{className:"search",placeholder:"Search by name",type:"text",onChange:function(t){e.onSearch(t.target.value),e.setCurrentPage(0)},value:e.value})},m=function(e){var t=e.allValue.map((function(e){return e.adress.state})),n=Object(o.a)(new Set(t)).sort();return Object(f.jsxs)("select",{className:"searchState",defaultValue:"DEFAULT",onChange:function(t){e.onSearchState(t.target.value),e.setCurrentPage(0)},children:[Object(f.jsx)("option",{value:"DEFAULT",children:"Filter by state"}),n.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)}))]})},g=Object(l.c)(Object(i.b)((function(e){return{data:e.app.data,pageSize:e.app.pageSize}}),{getDataThunk:function(){return function(e){j.get("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json").then((function(e){return e.data})).then((function(t){e({type:u,data:t})}))}}}))((function(e){Object(a.useEffect)((function(){e.getDataThunk()}),[]);var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],i=function(e){return-1!==e.firstName.toLowerCase().indexOf(c.toLowerCase())},l=Object(a.useState)(""),o=Object(s.a)(l,2),d=o[0],j=o[1],u=function(e){var t=e.adress;return d&&"DEFAULT"!==d?t.state===d?1:void 0:-1},b=e.data.filter(i),h=e.data.filter(i).filter(u),g=Object(a.useState)(),p=Object(s.a)(g,2),x=p[0],T=p[1],v=document.getElementsByClassName("sortingDirection");function N(e){var t,n,a,c,r,s,i,l,o=0;for(t=document.getElementById("myTable"),a=!0,l="asc";a;){for(a=!1,n=t.getElementsByTagName("TR"),c=1;c<n.length-1;c++)if(i=!1,r=n[c].getElementsByTagName("TD")[e],s=n[c+1].getElementsByTagName("TD")[e],"asc"===l){if(r.innerHTML.toLowerCase()>s.innerHTML.toLowerCase()){i=!0,v[e].innerHTML="\u25b2";break}}else if("desc"===l&&r.innerHTML.toLowerCase()<s.innerHTML.toLowerCase()){i=!0,v[e].innerHTML="\u25bc";break}i?(n[c].parentNode.insertBefore(n[c+1],n[c]),a=!0,o++):0===o&&"asc"===l&&(l="desc",a=!0)}}function C(e){var t,n,a,c,r,s,i,l,o=0;for(t=document.getElementById("myTable"),a=!0,l="asc";a;){for(a=!1,n=t.getElementsByTagName("TR"),c=1;c<n.length-1;c++)if(i=!1,r=n[c].getElementsByTagName("TD")[0],s=n[c+1].getElementsByTagName("TD")[0],"asc"===l){if(Number(r.innerHTML)>Number(s.innerHTML)){i=!0,0===e?v[0].innerHTML="\u25b2":v[4].innerHTML="\u25b2";break}}else if("desc"===l&&Number(r.innerHTML)<Number(s.innerHTML)){i=!0,0===e?v[0].innerHTML="\u25bc":v[4].innerHTML="\u25bc";break}i?(n[c].parentNode.insertBefore(n[c+1],n[c]),a=!0,o++):0===o&&"asc"===l&&(l="desc",a=!0)}}var L=Object(a.useState)(0),S=Object(s.a)(L,2),y=S[0],D=S[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"searchContainer",children:[Object(f.jsx)(O,{onSearch:r,value:c,setCurrentPage:D}),Object(f.jsx)(m,{allValue:b,onSearchState:j,setCurrentPage:D})]}),Object(f.jsxs)("table",{id:"myTable",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{onClick:function(){return C(0)},children:["id",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return N(1)},children:["First name",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return N(2)},children:["Last name",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return N(3)},children:["Email",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return C(4)},children:["Phone",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return N(5)},children:["State",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]})]})}),Object(f.jsx)("tbody",{children:e.data.filter(i).filter(u).map((function(e){return Object(f.jsxs)("tr",{onClick:function(){return T(e)},children:[Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("td",{children:e.firstName}),Object(f.jsx)("td",{children:e.lastName}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:e.phone}),Object(f.jsx)("td",{children:e.adress.state})]},e.phone)})).slice(y*e.pageSize,(y+1)*e.pageSize)})]}),Object(f.jsx)("button",{className:"pageBtn",onClick:function(){0!==y&&D(y-1)},children:"\u276e"}),Object(f.jsx)("button",{className:"pageBtn",onClick:function(){var t=Math.ceil(h.length/e.pageSize);y+1<t&&D(y+1)},children:"\u276f"}),x?Object(f.jsxs)("div",{className:"profileInfo",children:["Profile info:",Object(f.jsxs)("div",{children:["Select profile: ",x.firstName," ",x.lastName]}),Object(f.jsxs)("div",{children:["Description: ",x.description]}),Object(f.jsxs)("div",{children:["Address: ",x.adress.streetAddress]}),Object(f.jsxs)("div",{children:["City: ",x.adress.city]}),Object(f.jsxs)("div",{children:["State: ",x.adress.state]}),Object(f.jsxs)("div",{children:["Index: ",x.adress.zip]})]}):Object(f.jsx)("div",{})]})})),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},x=n(25),T=Object(l.b)({app:h}),v=Object(l.d)(T,Object(l.a)(x.a));window.store=v;var N=v;r.a.render(Object(f.jsx)(i.a,{store:N,children:Object(f.jsx)(g,{})}),document.getElementById("root")),p()}},[[55,1,2]]]);
//# sourceMappingURL=main.28dc8c1c.chunk.js.map