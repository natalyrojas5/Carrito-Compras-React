(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/ceviche.f1d8d8cf.jpg"},function(e,a,t){e.exports=t.p+"static/media/huancaina.c3001ed3.jpg"},function(e,a,t){e.exports=t.p+"static/media/causa-de-atun.d8f537f1.jpg"},function(e,a,t){e.exports=t.p+"static/media/Majarisco.277b6782.jpg"},function(e,a,t){e.exports=t.p+"static/media/chaufa.6c36ea57.jpg"},function(e,a,t){e.exports=t.p+"static/media/tallarin.56d2c739.jpg"},function(e,a,t){e.exports=t.p+"static/media/caldo-de-gallina.e4680b79.jpg"},,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(13),r=t.n(o),i=(t(21),t(15)),m=t(14),s=t(3),l=t(4),d=t.n(l),u=(t(22),t(6)),p=t.n(u),f=t(7),g=t.n(f),h=t(8),v=t.n(h),E=t(9),b=t.n(E),N=t(10),w=t.n(N),x=t(11),j=t.n(x),C=t(12),k=t.n(C),y=JSON.parse(localStorage.getItem("foodss"))||"[]";var O=function(){var e=Object(n.useState)(y),a=Object(s.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)([{name:"Ceviche",price:12.5,image:p.a},{name:"Huancaina",price:5.4,image:g.a},{name:"Causa de Atun",price:14.3,image:v.a},{name:"Majarisco",price:40.5,image:b.a},{name:"Chaufa",price:30.5,image:w.a},{name:"Tallarin",price:30.5,image:j.a},{name:"Caldo de Gallina",price:30.5,image:k.a}]),l=Object(s.a)(r,1)[0],u=Object(n.useState)("cart"),f=Object(s.a)(u,2),h=f[0],E=f[1];Object(n.useEffect)((function(){localStorage.setItem("foodss",JSON.stringify(t))}),[t]);var N=function(e){E(e)};return c.a.createElement("div",{className:"container mt-4"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"mx-auto font-weight-bold mb-4"},"Carrito de Compras"),c.a.createElement("p",null,"Hecho con React JSX")),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"d-flex-custom"},c.a.createElement("button",{className:"btn btn-warning",onClick:function(){return N("foodss")}},"Ver comidas agregados"),c.a.createElement("button",{className:"btn btn-danger d-flex align-items-center px-4",onClick:function(){return N("cart")}},c.a.createElement("div",{className:"m-auto"},c.a.createElement("span",{className:"mr-3"},"Ir a carrito"),c.a.createElement("span",{className:"mr-3"},"(",t.length,")"),c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}))))))),c.a.createElement("div",{className:"row"},"cart"===h&&(null===l||void 0===l?void 0:l.map((function(e,a){return c.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-xl-3  text-center my-4",key:a},c.a.createElement("img",{src:e.image,className:"rounded w-100 image-foods",alt:e.name}),c.a.createElement("div",{className:"m-2"},c.a.createElement("h1",{className:"h4"},e.name),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("p",{className:"h5 mr-2"},"S/."),c.a.createElement("p",{className:"h5 font-weight-normal"},e.price))),c.a.createElement("button",{type:"button",className:"btn btn-warning btn-block",onClick:function(){return function(e){d.a.fire({position:"top-end",icon:"success",title:"Comida agregada",showConfirmButton:!1,timer:1500}),o([].concat(Object(m.a)(t),[Object(i.a)({},e)]))}(e)}},"Agregar"))}))),"foodss"===h&&((null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.map((function(e,a){return c.a.createElement("div",{className:"col-12 col-sm-6 col-md-6 col-xl-3  text-center my-4",key:a},c.a.createElement("img",{src:e.image,className:"rounded w-100 image-foods",alt:e.name}),c.a.createElement("div",{className:"m-2"},c.a.createElement("h1",{className:"h4"},e.name),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("p",{className:"h5 mr-2"},"S/."),c.a.createElement("p",{className:"h5 font-weight-normal"},e.price))),c.a.createElement("button",{type:"button",className:"btn btn-warning btn-block",onClick:function(){return a=e,d.a.fire({position:"top-end",icon:"success",title:"Comida eliminada",showConfirmButton:!1,timer:1500}),void o(t.filter((function(e){return e!==a})));var a}},"Remover"))})):c.a.createElement("div",{className:"col-sm-12 text-center "},c.a.createElement("p",{className:"h4"},"No se encontro recetas")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.7db987bb.chunk.js.map