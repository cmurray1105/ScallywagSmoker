(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a.n(n),s=a(17),o=a.n(s),i=(a(157),a(158),a(85)),l=a(15),d=a(65),j=a(66),u=a(29),b=a(81),h=a(80),O=function(e){return Object(r.jsx)("div",{className:"bannerContainer",children:Object(r.jsx)("img",{className:"logo",src:"https://bbqbucket2020.s3.us-east-2.amazonaws.com/logo.jpg"})})},g=a(19),p=a(279),m=a(278),x=a(137),f=a(280),v=a(299),y=a(130),S=a.n(y),C=a(35),w=a.n(C),N=(a(177),a(100));function I(e){var t=c.a.useState(!1),a=Object(g.a)(t,2),n=a[0],s=a[1],o=c.a.useState("Santa Rita Ranch South"),i=Object(g.a)(o,2),l=i[0],d=i[1],j=c.a.useState(""),u=Object(g.a)(j,2),b=u[0],h=u[1],O=c.a.useState(""),y=Object(g.a)(O,2),C=y[0],I=y[1],T=c.a.useState(new Date),D=Object(g.a)(T,2),k=D[0],R=D[1],P=c.a.useState(""),q=Object(g.a)(P,2),_=q[0],M=q[1],E=c.a.useState(null),A=Object(g.a)(E,2),B=A[0],Q=A[1];console.log("props",e);var z=Object(m.a)((function(e){return{paper:{position:"absolute",width:400,maxHeight:800,backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none"}}})),L=Object(x.a)({overrides:{MuiButton:{text:{background:"linear-gradient(45deg, rgb(204, 146, 146) 30%, rgb(241, 210, 210) 90%)",fontWeight:"bold",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px  grey"}}}}),F=z(),H=function(){s(!1)},J=Object(r.jsxs)("div",{className:F.paper,children:[Object(r.jsx)("h2",{id:"simple-modal-title",children:"Delivery Info"}),Object(r.jsxs)("h3",{children:["Total $",e.priceString]}),Object(r.jsx)("div",{className:"order-summary"}),Object(r.jsx)("div",{className:"order-form",children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w.a.post("/addOrder",{address:C,customerName:b,deliveryDate:k,neighborhood:l,cartItems:e.cartItems,email:_,phone:B}).then((function(t){var a={from_name:"christopher.murray.bbqdev@gmail.com",to_name:_,customerName:b,message_html:function(){var t="",a=[];for(var r in e.cartItems)a.push(r);for(var n=0;n<a.length;n++)n===a.length-1?t+="".concat(a[n]):t+="".concat(a[n],", ");return console.log(t),t}()};for(var r in N.send("service_6gxzrwa","template_fu5eins",a,"user_975JwJzPB6r4yxiDzOfHn"),e.cartItems)w.a.post("./updateQuantity",{quantity:e.cartItems[r].originalQuantity-e.cartItems[r].quantity,productName:r}).then((function(e){})).catch((function(e){console.log(e)}));H(),e.clearOrder()})).catch((function(e){e&&console.log(e)}))},children:[Object(r.jsxs)("label",{children:["Select Your Neighborhood:",Object(r.jsx)("br",{}),Object(r.jsxs)("select",{value:l,onChange:function(e){return d(e.target.value)},children:[Object(r.jsx)("option",{value:"Santa Rita Ranch South",children:"Santa Rita Ranch South"}),Object(r.jsx)("option",{value:"Santa Rita Ranch North",children:"Santa Rita Ranch North"}),Object(r.jsx)("option",{value:"Morningstar",children:"Morningstar"})]})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Name:",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Street Address:",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:C,onChange:function(e){return I(e.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Email Address:",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:_,onChange:function(e){return M(e.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Phone:",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:B,onChange:function(e){return Q(e.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Delivery Date",Object(r.jsx)("br",{}),Object(r.jsx)(S.a,{selected:k,onChange:function(e){return R(e)},minDate:new Date,maxDate:new Date(2021,1,31)})]}),Object(r.jsx)("br",{}),Object(r.jsx)(p.a,{type:"submit",value:"Submit",children:"Submit"})]})})]});return console.log((new Date).toISOString().slice(0,19).replace("T"," ")),Object(r.jsxs)("div",{children:[Object(r.jsx)(f.a,{theme:L,children:Object(r.jsx)(p.a,{className:"checkoutButton",onClick:function(){s(!0)},children:"Checkout"})}),Object(r.jsx)(v.a,{open:n,onClose:H,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:J})]})}N.init("user_975JwJzPB6r4yxiDzOfHn");var T=function(e){var t=function(t){console.log("func console",e.cartItems);var a=t.toString();return a.includes(".")?(1===a.split(".")[1].length&&(a+="0"),a.split(".")[1].length>2&&(a=a.split(".")[0]+"."+a.split(".")[1].slice(0,2))):a+=".00",a},a=t(e.total),n=null;if(e.cartItems){console.log(Object.keys(e.cartItems),"item length");var c=Object.keys(e.cartItems);console.log("products",e.products,"selected Items",typeof c[0]),n=c.map((function(a){return Object(r.jsxs)("div",{children:[e.cartItems[a].quantity," X ",a,": $",t(e.cartItems[a].price*e.cartItems[a].quantity)]})}))}return Object(r.jsxs)("div",{className:"cart-container",children:[n,"Total Due: $",a,Object(r.jsx)(I,{clearOrder:e.clearOrder,priceString:a,total:e.total,products:e.products,cartItems:e.cartItems})]})},D=a(298),k=a(289),R=a(281),P=a(283),q=a(284),_=a(288),M=a(286),E=a(285),A=a(287),B=a(297),Q=a(133),z=a.n(Q),L=a(282),F=function(e){var t=e.loaded,a=e.products,n=e.addToCart,s=e.cartItems,o=c.a.useState(!1),i=Object(g.a)(o,2),l=i[0],d=i[1],j=c.a.useState("0"),u=Object(g.a)(j,2),b=u[0],h=u[1],O=c.a.useState(""),x=Object(g.a)(O,2),f=(x[0],x[1],c.a.useState({})),y=Object(g.a)(f,2),S=y[0],C=y[1],w=(Object(R.a)("(min-width:600px)"),c.a.useState("")),N=Object(g.a)(w,2),I=N[0],T=N[1];console.log("T/F?",!s);var D=0,k=S.quantity,Q=Object(m.a)({root:{width:250,marginTop:25,marginBottom:25,height:400,outline:"none",border:"none",alignItems:"center"},media:{height:250,width:250},formMedia:{width:"100%",height:"auto",borderRadius:"10%"}}),F=Object(m.a)((function(e){return{paper:{position:"absolute",width:400,maxHeight:800,backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none",top:"33%",textAlign:"center",left:"40%",borderRadius:"5%"},form:{display:"inline-block",textAlign:"center",left:"40%",marginLeft:"auto",marginRight:"auto"}}})),H=Q(),J=F(),$=function(){d(!1)};s[S.product_name]&&(D=s[S.product_name].quantity,k=S.quantity-D);var G=Object(r.jsxs)("div",{className:J.paper,children:[Object(r.jsx)("img",{className:H.formMedia,src:S.image_url}),Object(r.jsx)("h2",{id:"simple-modal-title",children:S.product_name}),Object(r.jsx)("h3",{children:S.price}),Object(r.jsxs)("div",{className:"order-form",children:[k<5?Object(r.jsxs)("div",{children:["Only ",k," left"]}):null,Object(r.jsxs)("form",{className:J.form,onSubmit:function(e){console.log("currentQuantity",k,"selectedQuantity",D),e.preventDefault(),console.log("currentProduct",S),D>0&&(k-D<0?alert("Please select another quantity. Only ".concat(k," left!")):(n({productName:S.product_name,quantity:parseInt(b),price:S.price,id:S.id,originalQuantity:S.quantity}),$()))},children:[Object(r.jsxs)("label",{children:["Quantity:",Object(r.jsx)("select",{onChange:function(e){return h(e.target.value)},children:function(){for(var e=[],t=0;t<=k;t++)e.push(Object(r.jsx)("option",{value:t,children:t}));return e}()})]}),Object(r.jsx)(p.a,{type:"submit",children:Object(r.jsx)(z.a,{})})]})]})]}),W=[];return console.log(t),t?(W=a,Object(r.jsx)(B.a,{display:"flex",flexWrap:"nowrap",alignContent:"flex-start",p:1,m:1,children:W.map((function(e){console.log(e);var t=e.price.toString();return console.log(t.length),t.includes(".")?1===t.split(".")[1].length&&(t+="0"):t+=".00",Object(r.jsxs)(L.a,{gridArea:!0,children:[Object(r.jsxs)(P.a,{onMouseOver:function(){T(e.product_name)},onMouseOut:function(){T("")},raised:I===e.product_name,className:H.root,onClick:function(){C(e),d(!0)},centered:!0,children:[Object(r.jsxs)(q.a,{children:[Object(r.jsx)(E.a,{className:H.media,image:e.image_url,title:e.product_name}),Object(r.jsxs)(M.a,{children:[Object(r.jsx)(A.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.product_name}),Object(r.jsxs)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:["$",t]})]})]}),Object(r.jsx)(_.a,{})]}),Object(r.jsx)(v.a,{open:l,onClose:$,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:G})]})}))})):null};var H=function(e){Object(R.a)("(min-width:800px)");var t=c.a.useState(0),a=Object(g.a)(t,2),n=a[0],s=a[1],o=c.a.useState(null),i=Object(g.a)(o,2),l=i[0],d=i[1],j=c.a.useState("none"),u=Object(g.a)(j,2),b=u[0];u[1],console.log("PROPPPP",e);var h=Object(m.a)((function(e){return{paper:{color:"red",backgroundColor:"white"},hovered:{color:"white",backgroundColor:"red"}}}))(),O=e.categories.map((function(e){return console.log(e),Object(r.jsx)(k.a,{onMouseEnter:function(){var t;t=e,console.log("CATEGORY",t),d(t)},onMouseLeave:function(){d("")},className:l===e?h.hovered:h.paper,label:e})}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(D.a,{className:"tab-content",value:n,variant:b,scrollButtons:"auto",onChange:function(t,a){s(a),e.getProducts(e.categories[a])},centered:!0,children:O}),Object(r.jsx)("div",{className:"products-container",children:Object(r.jsx)(F,{addToCart:e.addToCart,products:e.products,loaded:e.loaded,cartItems:e.cartItems})})]})},J=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).getCategories=function(){w.a.get("/categories").then((function(e){console.log("CATEGORIES",e.data);for(var t=[],a=0;a<e.data.length;a++)t.push(e.data[a].name);r.setState({categories:t})}))},r.state={products:[],loaded:!1,total:0,cart:{},categories:[]},r.getProducts=r.getProducts.bind(Object(u.a)(r)),r.addToCart=r.addToCart.bind(Object(u.a)(r)),r.clearOrder=r.clearOrder.bind(Object(u.a)(r)),r.getCategories=r.getCategories.bind(Object(u.a)(r)),r}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getProducts("meats"),this.getCategories()}},{key:"getProducts",value:function(e){var t=this;w.a.get("/products",{params:{product:e}}).then((function(e){t.setState({products:e.data,loaded:!0})})).catch((function(e){console.log(e)}))}},{key:"addToCart",value:function(e){var t=this.state.total,a=this.state.cart;console.log("ITEMMMM",e),a[e.productName]?a[e.productName].quantity+=e.quantity:a[e.productName]={quantity:e.quantity,id:e.id,originalQuantity:e.originalQuantity,price:e.price},console.log("TOTAL TYPE",typeof t),t+=e.price*e.quantity,console.log("parse",parseInt(t)),this.setState({cart:a,total:t})}},{key:"clearOrder",value:function(){this.setState({cart:{},total:0})}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)(O,{})}),Object(r.jsx)("div",{className:"body",children:Object(r.jsx)(H,{addToCart:this.addToCart,getProducts:this.getProducts,products:this.state.products,loaded:this.state.loaded,cartItems:this.state.cart,categories:this.state.categories})}),Object(r.jsx)("div",{className:"bbqList",children:Object(r.jsx)(T,{clearOrder:this.clearOrder,total:this.state.total,products:this.state.products,cartItems:this.state.cart})}),Object(r.jsx)("div",{className:"footer"})]})})}}]),a}(a(134).Component),$=a(293),G=a(295),W=a(291),Y=a(296),U=a(294),X=a(290),K=a(252),V=a(300),Z=a(292),ee=a(136),te=a.n(ee),ae=a(135),re=a.n(ae),ne=Object(m.a)({root:{"& > *":{borderBottom:"unset"}}});var ce=function(e){var t=e.row,a=c.a.useState(!1),n=Object(g.a)(a,2),s=n[0],o=n[1],i=ne();t.products=t.products||[],console.log("ROW!!!!!!!",t);var l=t.deliveryDate.split("-"),d=l[0],j=l[2].slice(0,2),u=l[1],b="".concat(u,"/").concat(j,"/").concat(d);return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)(X.a,{className:i.root,children:[Object(r.jsx)(W.a,{children:Object(r.jsx)(Z.a,{"aria-label":"expand row",size:"small",onClick:function(){return o(!s)},children:s?Object(r.jsx)(re.a,{}):Object(r.jsx)(te.a,{})})}),Object(r.jsx)(W.a,{component:"th",scope:"row",children:t.name}),Object(r.jsx)(W.a,{align:"right",children:t.neighborhood}),Object(r.jsx)(W.a,{align:"right",children:t.address}),Object(r.jsx)(W.a,{align:"right",children:t.email}),Object(r.jsx)(W.a,{align:"right",children:t.phone}),Object(r.jsx)(W.a,{align:"right",children:b}),Object(r.jsx)(W.a,{align:"right",children:t.total}),Object(r.jsx)("button",{children:"order fulfilled"})]}),Object(r.jsx)(X.a,{children:Object(r.jsx)(W.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(r.jsx)(V.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(r.jsxs)(B.a,{margin:1,children:[Object(r.jsx)(A.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Order Summary"}),Object(r.jsxs)($.a,{size:"small","aria-label":"purchases",children:[Object(r.jsx)(U.a,{children:Object(r.jsxs)(X.a,{children:[Object(r.jsx)(W.a,{align:"right",children:"Quantity"}),Object(r.jsx)(W.a,{children:"Product"}),Object(r.jsx)(W.a,{children:"Price"})]})}),Object(r.jsx)(G.a,{children:t.products.map((function(e){return console.log("proRo",e),Object(r.jsxs)(X.a,{children:[Object(r.jsx)(W.a,{align:"right",children:e.quantity}),Object(r.jsx)(W.a,{component:"th",scope:"row",children:e.productName}),Object(r.jsxs)(W.a,{children:["$",e.price]})]},e.productName)}))})]})]})})})})]})},se=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={rows:[],orders:{},loaded:!1},r.createData=r.createData.bind(Object(u.a)(r)),r.fillRows=r.fillRows.bind(Object(u.a)(r)),r.getOrders=r.getOrders.bind(Object(u.a)(r)),r}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getOrders()}},{key:"getOrders",value:function(){var e=this;w.a.get("/getOrders").then((function(t){for(var a in console.log("getOrders",t.data),e.setState({orders:t.data,loaded:!0}),console.log("!!!!",e.state.orders),e.state.orders){for(var r=0,n=0;n<e.state.orders[a].products.length;n++)r+=e.state.orders[a].products[n].price;console.log("TOTAL!!",r)}})).then((function(t){e.fillRows()})).catch((function(e){console.log(e)}))}},{key:"createData",value:function(e,t,a,r,n,c,s,o){return{name:e,neighborhood:t,address:a,email:r,phone:n,deliveryDate:c,total:s,products:o}}},{key:"fillRows",value:function(){var e=[];for(var t in this.state.orders){console.log("PRODUCT",t,"STATE ORDERS",this.state.orders);for(var a=0,r=0;r<this.state.orders[t].products.length;r++)a+=this.state.orders[t].products[r].price*this.state.orders[t].products[r].quantity;var n=a.toString();console.log(n.length),n.includes(".")?(1===n.split(".")[1].length&&(n+="0"),n.split(".")[1].length>2&&(n=n.split(".")[0]+"."+n.split(".")[1].slice(0,2))):n+=".00",console.log("TOTAL BEFORE PUSHING",n),e.push(this.createData(this.state.orders[t].customer,this.state.orders[t].neighborhood,this.state.orders[t].address,this.state.orders[t].email,this.state.orders[t].phone,this.state.orders[t].deliveryDate,"$".concat(n),this.state.orders[t].products))}console.log("America",e),this.setState({rows:e})}},{key:"render",value:function(){return Object(r.jsx)(Y.a,{component:K.a,children:Object(r.jsxs)($.a,{"aria-label":"collapsible table",children:[Object(r.jsx)(U.a,{children:Object(r.jsxs)(X.a,{children:[Object(r.jsx)(W.a,{}),Object(r.jsx)(W.a,{children:" Customer Name"}),Object(r.jsx)(W.a,{align:"right",children:"Neighborhood"}),Object(r.jsx)(W.a,{align:"right",children:"Address"}),Object(r.jsx)(W.a,{align:"right",children:"Email"}),Object(r.jsx)(W.a,{align:"right",children:"Phone"}),Object(r.jsx)(W.a,{align:"right",children:"Delivery Date "}),Object(r.jsx)(W.a,{align:"right",children:"Total"})]})}),Object(r.jsx)(G.a,{children:this.state.rows.map((function(e){return Object(r.jsx)(ce,{row:e},e.name)}))})]})})}}]),a}(c.a.Component);function oe(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/orders",children:"Orders"})})]})}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/orders",children:Object(r.jsx)(se,{})}),Object(r.jsx)(l.a,{path:"/",children:Object(r.jsx)(J,{})})]})]})})}var ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,302)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(oe,{})}),document.getElementById("root")),ie()}},[[245,1,2]]]);
//# sourceMappingURL=main.3f0144b7.chunk.js.map