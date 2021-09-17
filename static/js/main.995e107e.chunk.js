(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{22:function(t,e,c){},31:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var a=c(0),r=c.n(a),n=c(15),i=c.n(n),s=(c(31),[{id:0,name:"HTML 5 markup",description:"Clean, accessible && W3C compliant",price:300,image:"html5"},{id:1,name:"Sass / Scss",description:"Clean and nested Scss stylesheets. BEM style.",price:400,image:"sass"},{id:2,name:"Javascript Vanilla",description:"Mmmmhhh, Vanilla... No. seriously.",price:500,image:"jsvanilla"},{id:3,name:"ReactJS",description:"Functional style. It's all about the hooks!",price:600,image:"react"},{id:4,name:"Redux",description:"In the states, they reduced the stores",price:300,image:"redux"},{id:5,name:"React Router",description:"So you know where you're going",price:200,image:"react-router"},{id:6,name:"Clement Benezech",description:"clement.benezech@gmail.com",price:"2500",image:"clem"}]),o=c(8),d=c(26),u=c(25),l=c(4),p={cartProducts:[]};var j=Object(d.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"product/addToCart":return-1!=t.cartProducts.findIndex((function(t){return t.id===e.payload.id}))?Object(l.a)(Object(l.a)({},t),{},{cartProducts:t.cartProducts.map((function(t){return t.id===e.payload.id?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity+e.payload.quantity}):t}))}):Object(l.a)(Object(l.a)({},t),{},{cartProducts:[].concat(Object(u.a)(t.cartProducts),[e.payload])});case"product/removeFromCart":var c=t.cartProducts.filter((function(t){return t.id!==e.payload.id}));return Object(l.a)(Object(l.a)({},t),{},{cartProducts:c});case"product/decrement":if(1===t.cartProducts.find((function(t){return t.id===e.payload.id})).quantity){var a=t.cartProducts.filter((function(t){return t.id!==e.payload.id}));return Object(l.a)(Object(l.a)({},t),{},{cartProducts:a})}return Object(l.a)(Object(l.a)({},t),{},{cartProducts:t.cartProducts.map((function(t){return t.id===e.payload.id?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity-1}):t}))});case"product/increment":return Object(l.a)(Object(l.a)({},t),{},{cartProducts:t.cartProducts.map((function(t){return t.id===e.payload.id?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity+1}):t}))});default:return t}}));console.log("Initial state: ",j.getState());var m=j,b=(c(22),c(17)),h=c.n(b),_=c(1),O=function(t){var e=t.item;Object(o.b)();return Object(_.jsx)(h.a,{bottom:!0,children:Object(_.jsxs)("div",{className:"order-confirmation__product",children:[Object(_.jsx)("img",{src:"./"+e.image+".png",className:"order-confirmation__product__image"}),Object(_.jsx)("div",{className:"order-confirmation__product__name",children:e.name})]})})},f=function(){var t;return t=Object(o.c)((function(t){return t.cartProducts})).map((function(t){return Object(_.jsx)(O,{item:t})})),Object(_.jsxs)("div",{className:"order-confirmation",children:[Object(_.jsxs)("div",{className:"order-confirmation__top-container",children:[Object(_.jsx)("i",{class:"fas fa-ban"}),Object(_.jsx)("div",{className:"order-confirmation__message",children:"Sorry, but the following products have been removed from your Order:"})]}),Object(_.jsx)("div",{className:"order-confirmation__products-container",children:t}),Object(_.jsx)("div",{className:"order-confirmation__text",children:"Because, you know... You cannot buy people. At least not in this country. Nor Can you buy Skills. You have to patiently learn them. It takes time. "}),Object(_.jsx)("div",{className:"order-confirmation__text",children:"I took that time. Now, I got the Skills :)"}),Object(_.jsx)("div",{className:"order-confirmation__text",children:"You could still benefit from it though. Hire me for a week, a month, a year... whatever suits you. And me :)"}),Object(_.jsx)("a",{href:"mailto:clement.benezech@gmail.com",className:"order-confirmation__checkout",children:"Send me an email :)"})]})},x=(c(44),c(45),c(20)),g=c.n(x),v=function(t){var e,c=Object(o.c)((function(t){return t.cartProducts})),a=Object(o.b)();return c.map((function(c){c.id==t.productData.id&&(e="Already "+c.quantity+" in Cart")})),Object(_.jsxs)("div",{className:"product",onClick:function(){t.productData.quantity=1,a({type:"product/addToCart",payload:t.productData})},children:[Object(_.jsx)(g.a,{children:Object(_.jsx)("img",{className:"product__image",src:"./"+t.productData.image+".png"})}),Object(_.jsx)("p",{className:"product__name",children:t.productData.name}),Object(_.jsx)("p",{className:"product__phrase",children:t.productData.description}),Object(_.jsxs)("div",{className:"product__buy-container",children:[Object(_.jsx)("p",{className:"product__price",children:t.productData.price}),Object(_.jsx)("div",{id:t.productData.id,className:"product__buy",children:Object(_.jsx)("i",{class:"fas fa-cart-arrow-down"})},t.productData.id)]}),Object(_.jsx)("div",{className:"product__cart-count",children:e})]})},y=(c(46),function(){var t=s.map((function(t){return Object(_.jsx)(v,{productData:t})}));return Object(_.jsxs)("div",{className:"product-list",children:[Object(_.jsx)("h1",{children:"In need of some skills?"}),t]})}),N=(c(47),function(t){var e=t.item,c=Object(o.b)();return Object(_.jsx)(h.a,{bottom:!0,children:Object(_.jsxs)("div",{className:"shopping-cart__product",children:[Object(_.jsx)("img",{src:"./"+e.image+".png",className:"shopping-cart__product__image"}),Object(_.jsx)("div",{className:"shopping-cart__product__name",children:e.name}),Object(_.jsxs)("div",{className:"shopping-cart__product__quantity-container",children:[Object(_.jsx)("button",{className:"shopping-cart__product__decrement",onClick:function(){c({type:"product/decrement",payload:e})},children:Object(_.jsx)("i",{class:"far fa-minus-square"})}),Object(_.jsx)("div",{className:"shopping-cart__product__quantity",children:e.quantity}),Object(_.jsx)("button",{className:"shopping-cart__product__increment",onClick:function(){c({type:"product/increment",payload:e})},children:Object(_.jsx)("i",{class:"far fa-plus-square"})})]}),Object(_.jsx)("div",{className:"shopping-cart__product__unit-price",children:e.price}),Object(_.jsx)("div",{className:"shopping-cart__product__global-price",children:e.quantity*e.price}),Object(_.jsx)("div",{className:"shopping-cart__product__remove",id:e.id,onClick:function(){c({type:"product/removeFromCart",payload:e})},children:Object(_.jsx)("i",{class:"far fa-trash-alt"})},e.id)]})})}),P=c(13),k=function(){var t=Object(o.c)((function(t){return t.cartProducts})),e=0;t.map((function(t){e+=t.price*t.quantity}));var c;return c=t.map((function(t){return Object(_.jsx)(N,{item:t})})),Object(_.jsxs)("div",{className:"shopping-cart",children:[Object(_.jsxs)("div",{className:"shopping-cart__product-label",children:[Object(_.jsx)("div",{className:"shopping-cart__product__name",children:"Name"}),Object(_.jsx)("div",{className:"shopping-cart__product-label__quantity",children:"Qty"}),Object(_.jsx)("div",{className:"shopping-cart__product__unit-price",children:"Price"}),Object(_.jsx)("div",{className:"shopping-cart__product__global-price",children:"Total"})]}),Object(_.jsx)("div",{className:"shopping-cart__products-container",children:c}),Object(_.jsxs)("div",{className:"shopping-cart__total-container",children:[Object(_.jsx)("div",{className:"shopping-cart__total-label",children:" Total Amount in basket"}),Object(_.jsx)("div",{className:"shopping-cart__total-price",children:e})]}),Object(_.jsx)(P.b,{className:"shopping-cart__checkout",to:"/order-confirmation",children:"order now!"})]})};var q=function(){return Object(_.jsxs)("fragment",{children:[Object(_.jsx)("div",{className:"shop-container",children:Object(_.jsx)(y,{})}),Object(_.jsx)(k,{})]})},C=c(3);var w=function(){return Object(_.jsx)("fragment",{children:Object(_.jsxs)(C.c,{children:[Object(_.jsx)(C.a,{path:"/order-confirmation",children:Object(_.jsx)(f,{})}),Object(_.jsx)(C.a,{path:"/",children:Object(_.jsx)(q,{})})]})})},S=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(e){var c=e.getCLS,a=e.getFID,r=e.getFCP,n=e.getLCP,i=e.getTTFB;c(t),a(t),r(t),n(t),i(t)}))};i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(P.a,{children:Object(_.jsx)(o.a,{store:m,children:Object(_.jsx)(w,{})})})}),document.getElementById("root")),S()}},[[50,1,2]]]);
//# sourceMappingURL=main.995e107e.chunk.js.map