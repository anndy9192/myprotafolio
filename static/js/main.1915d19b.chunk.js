(window.webpackJsonpmyportafolio=window.webpackJsonpmyportafolio||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(51),a(52),a(3)),i=a(16),m=a(43),s=a.n(m),u=a(10),b=a(11),E=a(13),h=a(12),d=a(14),p=function(e){function t(){return Object(u.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(o.Grid,{className:"landing-grid"},r.a.createElement(o.Cell,{col:12},r.a.createElement("img",{src:"https://media.licdn.com/dms/image/C5603AQEktt24v_qycg/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=V2pN_PsDfWXyRR0xVxI-Y54zdf32hqJl3KxuklP0epU",alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null," Front end developer "),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML/CSS | JavaScript | React | NodeJS | Firebase"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/andreamagallanes",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/anndy9192",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fa fa-github-square","aria-hidden":"true"})))))))}}]),t}(n.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),t}(n.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact Page"))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={activeTab:0},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?r.a.createElement(o.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(o.CardTitle,{style:{color:"#fff",height:"176px",background:"url() center / cover"}})):1===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null," Red Social")):2===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null," Movie Challange")):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-tabs"},r.a.createElement(o.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(o.Tab,null,"DataLovers"),r.a.createElement(o.Tab,null,"Red Social"),r.a.createElement(o.Tab,null,"Movie Challange")),r.a.createElement("section",{className:"projects-grid"},r.a.createElement(o.Grid,{className:"prjects- grid"},r.a.createElement(o.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories())))))}}]),t}(n.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Resume Page"))}}]),t}(n.Component),O=s()({basename:"/portfolio"}),y=function(){return r.a.createElement(i.b,{history:O},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:p}),r.a.createElement(i.a,{exact:!0,path:"/aboutme",component:v}),r.a.createElement(i.a,{exact:!0,path:"/contact",component:f}),r.a.createElement(i.a,{exact:!0,path:"/projects",component:g}),r.a.createElement(i.a,{exact:!0,path:"/resume",component:j})))},C=a(7);var k=function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(o.Layout,null,r.a.createElement(o.Header,{className:"header-color",title:"Title",scroll:!0},r.a.createElement(o.Navigation,null,r.a.createElement(C.b,{to:"/"},"Home"),r.a.createElement(C.b,{to:"/resume"},"Resume"),r.a.createElement(C.b,{to:"/aboutme"},"About Me"),r.a.createElement(C.b,{to:"/projects"},"Projects"),r.a.createElement(C.b,{to:"/contact"},"Contact"))),r.a.createElement(o.Drawer,{title:"Title"},r.a.createElement(o.Navigation,null,r.a.createElement(C.b,{to:"/resume"},"Resume"),r.a.createElement(C.b,{to:"/aboutme"},"About Me"),r.a.createElement(C.b,{to:"/projects"},"Projects"),r.a.createElement(C.b,{to:"/contact"},"Contact"))),r.a.createElement(o.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107),a(108);l.a.render(r.a.createElement(C.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,a){e.exports=a(109)},51:function(e,t,a){},52:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.1915d19b.chunk.js.map