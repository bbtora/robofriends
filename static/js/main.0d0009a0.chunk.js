(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(23)},15:function(e,n,t){},19:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(3),i=t.n(a),c=(t(15),t(1)),s=t.n(c),l=t(4),u=t(5),h=t(6),d=t(8),f=t(7),m=t(9),g=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},v=function(e){var n=e.robots;return o.a.createElement("div",null,n.map(function(e,t){return o.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},p=function(e){e.searchField;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},w=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},b=(t(19),function(e){function n(){var e;return Object(u.a)(this,n),(e=Object(d.a)(this,Object(f.a)(n).call(this))).onSearchChange=function(n){e.setState({searchField:n.target.value})},e.state={robots:[],searchField:""},e}return Object(m.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var n,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,this.setState({robots:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchField,r=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return n.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(p,{searchChange:this.onSearchChange}),o.a.createElement(w,null,o.a.createElement(v,{robots:r}))):o.a.createElement("h1",null,"Loading")}}]),n}(r.Component)),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(21);i.a.render(o.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");E?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}},[[10,2,1]]]);
//# sourceMappingURL=main.0d0009a0.chunk.js.map