(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{168:function(e,t,r){},169:function(e,t,r){},257:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),o=r.n(a),c=r(16),i=r.n(c),s=(r(168),r(169),r(85)),l=r(15),d=r(67),u=r(68),j=r(23),b=r(81),h=r(80),p=function(e){return Object(n.jsx)("div",{className:"bannerContainer",children:Object(n.jsx)("img",{className:"logo",src:"https://bbqbucket2020.s3.us-east-2.amazonaws.com/logo.jpg"})})},g=r(10),m=r(290),O=r(289),x=r(309),f=r(129),v=r.n(f),y=r(42),S=r.n(y),w=(r(187),r(100));function C(e){var t=o.a.useState(!1),r=Object(g.a)(t,2),a=r[0],c=r[1],i=o.a.useState("Santa Rita Ranch South"),s=Object(g.a)(i,2),l=s[0],d=s[1],u=o.a.useState(""),j=Object(g.a)(u,2),b=j[0],h=j[1],p=o.a.useState(""),f=Object(g.a)(p,2),y=f[0],C=f[1],N=o.a.useState(new Date),T=Object(g.a)(N,2),I=T[0],k=T[1],R=o.a.useState(""),P=Object(g.a)(R,2),D=P[0],q=P[1],A=o.a.useState(null),E=Object(g.a)(A,2),Q=E[0],M=E[1],_=o.a.useState("red"),B=Object(g.a)(_,2),z=B[0],L=B[1],F=o.a.useState("white"),H=Object(g.a)(F,2),J=H[0],Z=H[1],G=o.a.useState("none"),$=Object(g.a)(G,2),U=$[0],W=$[1];console.log("props",e);var Y=Object(O.a)((function(e){return{paper:{position:"absolute",width:400,maxHeight:800,backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none",top:"50%",left:"50%",transform:"translate(-50%, -50%)",borderRadius:"5%"},button:{background:z,color:J,cursor:"pointer",fontWeight:"bold",outline:"none",borderRadius:2,border:U,height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px  grey",display:"block",marginLeft:"auto",marginRight:"auto",bottom:0}}}))(),K=function(){c(!1)},X=Object(n.jsxs)("div",{className:Y.paper,children:[Object(n.jsx)("h2",{id:"simple-modal-title",children:"Delivery Info"}),Object(n.jsxs)("h3",{children:["Total $",e.priceString]}),Object(n.jsx)("div",{className:"order-summary"}),Object(n.jsx)("div",{className:"order-form",children:Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("SUBMIT BEING HANDLED AND STUFF"),S.a.post("/addOrder",{address:y,customerName:b,deliveryDate:I,neighborhood:l,cartItems:e.cartItems,email:D,phone:Q}).then((function(t){var r={from_name:"christopher.murray.bbqdev@gmail.com",to_name:D,customerName:b,message_html:function(){var t="",r=[];for(var n in e.cartItems)r.push(n);for(var a=0;a<r.length;a++)a===r.length-1?t+="".concat(r[a]):t+="".concat(r[a],", ");return console.log(t),t}()};for(var n in w.send("service_6gxzrwa","template_fu5eins",r,"user_975JwJzPB6r4yxiDzOfHn"),e.cartItems)S.a.post("./updateQuantity",{quantity:e.cartItems[n].originalQuantity-e.cartItems[n].quantity,productName:n}).then((function(e){})).catch((function(e){console.log(e)}));K(),e.clearOrder()})).catch((function(e){e&&console.log(e)}))},children:[Object(n.jsxs)("label",{children:["Select Your Neighborhood:",Object(n.jsx)("br",{}),Object(n.jsxs)("select",{value:l,onChange:function(e){return d(e.target.value)},children:[Object(n.jsx)("option",{value:"Santa Rita Ranch South",children:"Santa Rita Ranch South"}),Object(n.jsx)("option",{value:"Santa Rita Ranch North",children:"Santa Rita Ranch North"}),Object(n.jsx)("option",{value:"Morningstar",children:"Morningstar"})]})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["Name:",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["Street Address:",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:y,onChange:function(e){return C(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["Email Address:",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:D,onChange:function(e){return q(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["Phone:",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:Q,onChange:function(e){return M(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["Delivery Date",Object(n.jsx)("br",{}),Object(n.jsx)(v.a,{selected:I,onChange:function(e){return k(e)},minDate:new Date,maxDate:new Date(2021,1,31)})]}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{type:"submit",value:"Submit",children:"Submit"})]})})]});return console.log((new Date).toISOString().slice(0,19).replace("T"," ")),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:Y.button,onClick:function(){c(!0)},onMouseEnter:function(){L("white"),Z("red"),W("0")},onMouseLeave:function(){L("red"),Z("white"),W("none")},children:"PROCEED TO CHECKOUT"}),Object(n.jsx)(x.a,{open:a,onClose:K,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:X})]})}w.init("user_975JwJzPB6r4yxiDzOfHn");var N=function(e){e.convertPriceToString(e.total);if(e.cartItems){console.log(Object.keys(e.cartItems),"item length");var t=Object.keys(e.cartItems);console.log("products",e.products,"selected Items",typeof t[0]),t.map((function(t){return Object(n.jsxs)("div",{children:[e.cartItems[t].quantity," X ",t,": $",e.convertPriceToString(e.cartItems[t].price*e.cartItems[t].quantity)]})}))}return Object(n.jsx)("div",{className:"cart-container"})},T=r(308),I=r(298),k=r(291),R=r(292),P=r(293),D=r(297),q=r(295),A=r(294),E=r(296),Q=r(307),M=r(132),_=r.n(M),B=function(e){var t=e.loaded,r=e.products,a=e.addToCart,c=e.cartItems,i=e.convertPriceToString,s=o.a.useState(!1),l=Object(g.a)(s,2),d=l[0],u=l[1],j=o.a.useState("0"),b=Object(g.a)(j,2),h=b[0],p=b[1],f=o.a.useState(""),v=Object(g.a)(f,2),y=(v[0],v[1],o.a.useState({})),S=Object(g.a)(y,2),w=S[0],C=S[1],N=(Object(k.a)("(min-width:600px)"),o.a.useState("")),T=Object(g.a)(N,2),I=T[0],M=T[1];console.log("T/F?",!c);var B=0,z=w.quantity,L=Object(O.a)({root:{width:250,marginTop:25,marginBottom:25,height:400,outline:"none",border:"none",float:"left"},media:{height:250,width:250},formMedia:{width:"100%",height:"auto",borderRadius:"10%"},productBox:{display:"flex",flexFlow:"row wrap",padding:"8px",margin:"8px"},cardContainer:{display:"block",boxSizing:"border-box",marginLeft:"auto",marginRight:"auto",paddingLeft:"16px",paddingRight:"16px"}}),F=Object(O.a)((function(e){return{paper:{position:"absolute",width:400,maxHeight:800,backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none",top:"50%",left:"50%",transform:"translate(-50%, -50%)",margin:"0 auto",display:"table",textAlign:"center",borderRadius:"5%"},form:{display:"inline-block",textAlign:"center",left:"40%",marginLeft:"auto",marginRight:"auto"}}})),H=L(),J=F(),Z=function(){u(!1)};c[w.product_name]&&(B=c[w.product_name].quantity,z=w.quantity-B);var G=Object(n.jsxs)("div",{className:J.paper,children:[console.log("ASJIFJIJDSF",w.price),Object(n.jsx)("img",{className:H.formMedia,src:w.image_url}),Object(n.jsx)("h2",{id:"simple-modal-title",children:w.product_name}),console.log("CCCCCCCCCCCCCCCCC",w.price),Object(n.jsxs)("h3",{children:["$",w.price]}),Object(n.jsxs)("div",{className:"order-form",children:[z<5?Object(n.jsxs)("div",{children:["Only ",z," left"]}):null,Object(n.jsxs)("form",{className:J.form,onSubmit:function(e){console.log("currentQuantity",z,"selectedQuantity",B),e.preventDefault(),console.log("currentProduct",w),"0"===h?alert("Please select a quantity greater than zero"):(a({productName:w.product_name,quantity:parseInt(h),price:w.price,id:w.id,originalQuantity:w.quantity,productInfo:w}),Z())},children:[Object(n.jsxs)("label",{children:["Quantity:",Object(n.jsx)("select",{onChange:function(e){return p(e.target.value)},children:function(){for(var e=[],t=0;t<=z;t++)e.push(Object(n.jsx)("option",{value:t,children:t}));return e}()})]}),Object(n.jsx)(m.a,{type:"submit",children:Object(n.jsx)(_.a,{})})]})]})]}),$=[];return console.log(t),t?($=r,Object(n.jsx)(Q.a,{className:H.productBox,display:"flex",p:1,m:1,children:$.map((function(e){console.log("ZZZZZZZZZ",e),console.log("PROD PRICE",e.price);var t=i(e.price);return console.log("PS",t),Object(n.jsxs)("div",{className:H.cardContainer,children:[Object(n.jsxs)(R.a,{onMouseOver:function(){M(e.product_name)},onMouseOut:function(){M("")},raised:I===e.product_name,className:H.root,onClick:function(){var t=e;t.price=i(e.price),C(t),u(!0)},children:[Object(n.jsxs)(P.a,{children:[Object(n.jsx)(A.a,{className:H.media,image:e.image_url,title:e.product_name}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(E.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.product_name}),Object(n.jsxs)(E.a,{variant:"body2",color:"textSecondary",component:"p",children:["$",t]})]})]}),Object(n.jsx)(D.a,{})]}),Object(n.jsx)(x.a,{open:d,onClose:Z,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:G})]})}))})):null};var z=function(e){Object(k.a)("(min-width:800px)");var t=o.a.useState(0),r=Object(g.a)(t,2),a=r[0],c=r[1],i=o.a.useState(null),s=Object(g.a)(i,2),l=s[0],d=s[1],u=Object(O.a)((function(e){return{paper:{justifyContent:"center",color:"red",backgroundColor:"white"},hovered:{color:"white",backgroundColor:"red"},scroller:{flexGrow:"0"}}}))(),j=e.categories.map((function(e){return console.log(e),Object(n.jsx)(I.a,{onMouseEnter:function(){var t;t=e,console.log("CATEGORY",t),d(t)},onMouseLeave:function(){d("")},className:l===e?u.hovered:u.paper,label:e})}));return Object(n.jsxs)("div",{children:[Object(n.jsx)(T.a,{classes:{root:u.paper,scroller:u.scroller},value:a,variant:"scrollable",scrollButtons:"auto",onChange:function(t,r){c(r),e.getProducts(e.categories[r])},centered:!0,children:j}),Object(n.jsx)(B,{convertPriceToString:e.convertPriceToString,addToCart:e.addToCart,products:e.products,loaded:e.loaded,cartItems:e.cartItems})]})},L=r(133),F=r(134),H=r(299),J=r(135);function Z(){var e=Object(F.a)(["&&{\n\n  z-index: 2;\n  &[x-placement*=\"bottom\"] .arrow{\n\n    width: 0;\n    height: 0;\n    border-left: 1em solid transparent;\n    border-right: 1em solid transparent;\n    border-bottom: 1em solid white;\n    margin-top: -0.9em;\n\n    &:before {\n      border-width: '0 1em 1em 1em';\n      border-color: 'transparent transparent white transparent';\n    }\n  }\n\n  &[x-placement*=\"top\"] .arrow{\n\n    width: 0;\n    height: 0;\n    border-left: 1em solid transparent;\n    border-right: 1em solid transparent;\n    border-bottom: 1em solid white;\n    margin-top: -0.9em;\n\n    &:before {\n      border-width: '0 1em 1em 1em';\n      border-color: 'transparent transparent white transparent';\n    }\n  }\n\n  &[x-placement*=\"right\"] .arrow{\n\n    left: 0;\n    width: 0;\n    height: 0;\n    border-top: 1em solid transparent;\n    border-bottom: 1em solid transparent;\n    border-right: 1em solid white;\n    margin-left: -0.9em;\n\n    &:before {\n      border-width: 1em 1em 1em 0;\n      border-color: transparent white transparent transparent;\n    }\n  }\n\n  &[x-placement*=\"left\"] .arrow{\n\n    right: 0;\n    width: 0;\n    height: 0;\n    border-top: 1em solid transparent;\n    border-bottom: 1em solid transparent;\n    border-left: 1em solid white;\n    margin-right: -0.9em;\n\n    &:before {\n      border-width: 1em 0 1em 1em;\n      border-color: transparent transparent transparent white;\n    }\n  }\n\n  .arrow {\n    position: absolute;\n    font-size: 7px;\n    width: 3em;\n    height: 3em;\n\n    &:before {\n      content: '\"\"',\n      margin: auto;\n      display: 'grid';\n      width: 0;\n      height: 0;\n      border-style: solid;\n    }\n  }\n\n  .popper-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    color: black;\n    height: 90px;\n    width: 160px;\n  }\n\n}"]);return Z=function(){return e},e}var G=Object(J.a)(H.a)(Z()),$=Object(O.a)({root:{height:"64px",width:"400px"},media:{flexDirection:"row",justifyContent:"space-between",height:"64px",borderRadius:"15%"},wrapper:{display:"inline-flex",alignItems:"flex-start"},text:{flexDirection:"row",verticalAlign:"middle"}}),U=function(e){var t,r=$();console.log("CART ITEM ITEM",e.item);for(var a=0;a<e.products.length;a++)e.products[a].id===e.item.id&&(t=e.products[a]);return console.log("CP",t),Object(n.jsxs)("div",{className:"cart-item-entry",children:[Object(n.jsx)("div",{className:r.root,children:Object(n.jsxs)("div",{className:r.wrapper,children:[Object(n.jsx)("img",{className:r.media,src:e.item.productInfo.image_url}),Object(n.jsx)("div",{className:r.text,children:Object(n.jsxs)("h4",{className:r.text,children:[e.item.quantity," x ",e.item.productInfo.product_name," $",e.item.quantity*e.item.productInfo.price]})})]})}),Object(n.jsx)("hr",{})]})},W=r(140),Y=r(141);var K=function(e){var t=o.a.useState(!1),r=Object(g.a)(t,2),a=r[0],c=r[1],i=o.a.useState(null),s=Object(g.a)(i,2),l=s[0],d=s[1],u=o.a.useState(null),j=Object(g.a)(u,2),b=j[0],h=j[1],p=o.a.useState([]),m=Object(g.a)(p,2),x=(m[0],m[1],Object(O.a)((function(e){return{paper:{border:"none",boxShadow:e.shadows[5],padding:e.spacing(1),backgroundColor:e.palette.background.paper,zIndex:3,height:"400px",width:"400px",borderRadius:"6px",margin:"auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"4fr 1fr",gridTemplateAreas:" 'side list side'  'side checkout side"},buttonContainer:{textAlign:"center",marginLeft:"65%"},button:{height:"38px",width:"38px",background:"white",border:"none",color:"red",cursor:"pointer",textAlign:"center",display:"inline-block",outline:"none"},cartContainer:{gridArea:"list"},checkoutArea:{gridArea:"checkout"}}}))()),f=o.a.useRef();console.log("nodey node:",f);var v=[];for(var y in e.cartItems)v.push(e.cartItems[y]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:x.buttonContainer,children:Object(n.jsxs)("button",{className:x.button,onClick:function(e){d(l?null:e.currentTarget),console.log("ANCHORS AWAY!",l),c(!a)},children:[Object(n.jsx)(W.a,{icon:Y.a,size:"2x"}),Object(n.jsx)("span",{children:e.quantity})]})}),Object(n.jsxs)(G,{ref:f,placement:"top",open:a,anchorEl:l,modifiers:{flip:{enabled:!0},arrow:{enabled:!0,element:b},preventOverflow:{enabled:"true",boundariesElement:"scrollParent"}},children:[Object(n.jsx)("span",{className:"arrow",ref:h}),Object(n.jsxs)("div",{className:x.paper,children:[Object(n.jsx)("div",{className:"cartContainer",children:v.map((function(t){return Object(n.jsx)(U,{products:e.products,item:t})}))}),Object(n.jsx)("div",{className:"checkoutArea",children:e.quantity>0?Object(n.jsx)(C,{clearOrder:e.clearOrder,total:e.total,products:e.products,cartItems:e.cartItems}):null})]})]})]})},X=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).cartQuantityCalc=function(){var e=0;for(var t in n.state.cart)console.log("IQ",t),e+=n.state.cart[t].quantity;n.setState({quantity:e})},n.convertPriceToString=function(e){var t=e.toString();return console.log("First String",t),t.includes(".")?1===t.split(".")[1].length&&(console.log("NEW STRING",t),t+="0",console.log("STRING AGAIN",t)):t+=".00",t},n.getCategories=function(){S.a.get("/categories").then((function(e){console.log("CATEGORIES",e.data);for(var t=[],r=0;r<e.data.length;r++)t.push(e.data[r].name);n.setState({categories:t})}))},n.state={products:[],loaded:!1,total:0,cart:{},categories:[],quantity:0},n.getProducts=n.getProducts.bind(Object(j.a)(n)),n.addToCart=n.addToCart.bind(Object(j.a)(n)),n.clearOrder=n.clearOrder.bind(Object(j.a)(n)),n.getCategories=n.getCategories.bind(Object(j.a)(n)),n.convertPriceToString=n.convertPriceToString.bind(Object(j.a)(n)),n.cartQuantityCalc=n.cartQuantityCalc.bind(Object(j.a)(n)),n.increaseQuantity=n.increaseQuantity.bind(Object(j.a)(n)),n.decreaseQuantity=n.increaseQuantity.bind(Object(j.a)(n)),n}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.getProducts("meats"),this.getCategories(),this.cartQuantityCalc()}},{key:"getProducts",value:function(e){var t=this;S.a.get("/products",{params:{product:e}}).then((function(e){t.setState({products:e.data,loaded:!0})})).catch((function(e){console.log(e)}))}},{key:"increaseQuantity",value:function(e){var t=this.state.cart,r=this.state.cart[e].quantity;r++,t[e].quantity=r,this.setState({cart:t})}},{key:"decreaseQuantity",value:function(e){var t=this.state.cart,r=this.state.cart[e].quantity;--r>=0&&(t[e].quantity=r,this.setState({cart:t}))}},{key:"addToCart",value:function(e){var t=this.state.total,r=this.state.cart;console.log("ITEMMMM",e),r[e.productName]?r[e.productName].quantity+=e.quantity:r[e.productName]={quantity:e.quantity,id:e.id,originalQuantity:e.originalQuantity,price:e.price,image:e.image_url,productInfo:e.productInfo},this.cartQuantityCalc(),console.log("TOTAL TYPE",typeof t),t+=e.price*e.quantity,console.log("parse",parseInt(t)),this.setState({cart:r,total:t})}},{key:"clearOrder",value:function(){this.setState({cart:{},total:0})}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"fixed-header",children:Object(n.jsx)(K,{clearOrder:this.clearOrder,total:this.state.total,products:this.state.products,cartItems:this.state.cart,convertPriceToString:this.convertPriceToString,quantity:this.state.quantity})}),Object(n.jsx)("div",{className:"header",children:Object(n.jsx)(p,{})}),Object(n.jsx)("div",{className:"body",children:Object(n.jsx)(z,{addToCart:this.addToCart,getProducts:this.getProducts,loaded:this.state.loaded,products:this.state.products,cartItems:this.state.cart,categories:this.state.categories,convertPriceToString:this.convertPriceToString})}),Object(n.jsx)("div",{className:"bbqList",children:Object(n.jsx)(N,{clearOrder:this.clearOrder,total:this.state.total,products:this.state.products,cartItems:this.state.cart,convertPriceToString:this.convertPriceToString})}),Object(n.jsx)("div",{className:"footer"})]})})}}]),r}(L.Component),V=r(303),ee=r(305),te=r(301),re=r(306),ne=r(304),ae=r(300),oe=r(265),ce=r(310),ie=r(302),se=r(143),le=r.n(se),de=r(142),ue=r.n(de),je=Object(O.a)({root:{"& > *":{borderBottom:"unset"}}});var be=function(e){var t=e.row,r=o.a.useState(!1),a=Object(g.a)(r,2),c=a[0],i=a[1],s=je();t.products=t.products||[],console.log("ROW!!!!!!!",t);var l=t.deliveryDate.split("-"),d=l[0],u=l[2].slice(0,2),j=l[1],b="".concat(j,"/").concat(u,"/").concat(d);return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsxs)(ae.a,{className:s.root,children:[Object(n.jsx)(te.a,{children:Object(n.jsx)(ie.a,{"aria-label":"expand row",size:"small",onClick:function(){return i(!c)},children:c?Object(n.jsx)(ue.a,{}):Object(n.jsx)(le.a,{})})}),Object(n.jsx)(te.a,{component:"th",scope:"row",children:t.name}),Object(n.jsx)(te.a,{align:"right",children:t.neighborhood}),Object(n.jsx)(te.a,{align:"right",children:t.address}),Object(n.jsx)(te.a,{align:"right",children:t.email}),Object(n.jsx)(te.a,{align:"right",children:t.phone}),Object(n.jsx)(te.a,{align:"right",children:b}),Object(n.jsx)(te.a,{align:"right",children:t.total}),Object(n.jsx)("button",{children:"order fulfilled"})]}),Object(n.jsx)(ae.a,{children:Object(n.jsx)(te.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(n.jsx)(ce.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(n.jsxs)(Q.a,{margin:1,children:[Object(n.jsx)(E.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Order Summary"}),Object(n.jsxs)(V.a,{size:"small","aria-label":"purchases",children:[Object(n.jsx)(ne.a,{children:Object(n.jsxs)(ae.a,{children:[Object(n.jsx)(te.a,{align:"right",children:"Quantity"}),Object(n.jsx)(te.a,{children:"Product"}),Object(n.jsx)(te.a,{children:"Price"})]})}),Object(n.jsx)(ee.a,{children:t.products.map((function(e){return console.log("proRo",e),Object(n.jsxs)(ae.a,{children:[Object(n.jsx)(te.a,{align:"right",children:e.quantity}),Object(n.jsx)(te.a,{component:"th",scope:"row",children:e.productName}),Object(n.jsxs)(te.a,{children:["$",e.price]})]},e.productName)}))})]})]})})})})]})},he=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).state={rows:[],orders:{},loaded:!1},n.createData=n.createData.bind(Object(j.a)(n)),n.fillRows=n.fillRows.bind(Object(j.a)(n)),n.getOrders=n.getOrders.bind(Object(j.a)(n)),n}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.getOrders()}},{key:"getOrders",value:function(){var e=this;S.a.get("/getOrders").then((function(t){for(var r in console.log("getOrders",t.data),e.setState({orders:t.data,loaded:!0}),console.log("!!!!",e.state.orders),e.state.orders){for(var n=0,a=0;a<e.state.orders[r].products.length;a++)n+=e.state.orders[r].products[a].price;console.log("TOTAL!!",n)}})).then((function(t){e.fillRows()})).catch((function(e){console.log(e)}))}},{key:"createData",value:function(e,t,r,n,a,o,c,i){return{name:e,neighborhood:t,address:r,email:n,phone:a,deliveryDate:o,total:c,products:i}}},{key:"fillRows",value:function(){var e=[];for(var t in this.state.orders){console.log("PRODUCT",t,"STATE ORDERS",this.state.orders);for(var r=0,n=0;n<this.state.orders[t].products.length;n++)r+=this.state.orders[t].products[n].price*this.state.orders[t].products[n].quantity;var a=r.toString();console.log(a.length),a.includes(".")?(1===a.split(".")[1].length&&(a+="0"),a.split(".")[1].length>2&&(a=a.split(".")[0]+"."+a.split(".")[1].slice(0,2))):a+=".00",console.log("TOTAL BEFORE PUSHING",a),e.push(this.createData(this.state.orders[t].customer,this.state.orders[t].neighborhood,this.state.orders[t].address,this.state.orders[t].email,this.state.orders[t].phone,this.state.orders[t].deliveryDate,"$".concat(a),this.state.orders[t].products))}console.log("America",e),this.setState({rows:e})}},{key:"render",value:function(){return Object(n.jsx)(re.a,{component:oe.a,children:Object(n.jsxs)(V.a,{"aria-label":"collapsible table",children:[Object(n.jsx)(ne.a,{children:Object(n.jsxs)(ae.a,{children:[Object(n.jsx)(te.a,{}),Object(n.jsx)(te.a,{children:" Customer Name"}),Object(n.jsx)(te.a,{align:"right",children:"Neighborhood"}),Object(n.jsx)(te.a,{align:"right",children:"Address"}),Object(n.jsx)(te.a,{align:"right",children:"Email"}),Object(n.jsx)(te.a,{align:"right",children:"Phone"}),Object(n.jsx)(te.a,{align:"right",children:"Delivery Date "}),Object(n.jsx)(te.a,{align:"right",children:"Total"})]})}),Object(n.jsx)(ee.a,{children:this.state.rows.map((function(e){return Object(n.jsx)(be,{row:e},e.name)}))})]})})}}]),r}(o.a.Component);function pe(){return Object(n.jsxs)(s.a,{children:[Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/orders",children:Object(n.jsx)(he,{})}),Object(n.jsx)(l.a,{path:"/",children:Object(n.jsx)(X,{})})]}),Object(n.jsx)("div",{children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/orders",children:"Orders"})})]})})})]})}var ge=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,312)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(pe,{})}),document.getElementById("root")),ge()}},[[257,1,2]]]);
//# sourceMappingURL=main.4e038e82.chunk.js.map