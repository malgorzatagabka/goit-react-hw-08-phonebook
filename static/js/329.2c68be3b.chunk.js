"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{5329:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(9439),r=a(5984),s=a(7195),c=(a(2791),a(163)),o=a(5206),i=a(4403),l=a(184),m=function(){var e=(0,r.x0)(),t=(0,c.wY)().data,a=(0,c.Tn)(),m=(0,n.Z)(a,1)[0];return(0,l.jsxs)("form",{className:i.Z.form,onSubmit:function(e){e.preventDefault();var a=e.currentTarget,n=a.name.value,s=a.number.value,c=n.toLowerCase(),i=!1,l={id:(0,r.x0)(),name:n,number:s};t.forEach((function(e){e.name.toLowerCase()===c&&(o.Am.info("".concat(e.name," is already in contacts"),{icon:"\ud83d\ude80",theme:"dark"}),i=!0)})),i||(m(l),a.reset())},children:[(0,l.jsx)("label",{htmlFor:e,className:i.Z.formText}),(0,l.jsx)(s.Z,{className:i.Z.formInput,label:"Name",id:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,color:"secondary"}),(0,l.jsx)("label",{htmlFor:e,className:i.Z.formText}),(0,l.jsx)(s.Z,{className:i.Z.formInput,label:"Phone Number",id:e,required:!0,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",color:"secondary"}),(0,l.jsx)("button",{className:i.Z.formBtn,type:"submit",children:"Add contact"})]})},d="Filter_filterInput__1Cysk",u="Filter_filterLabel__+pnW-",p=a(5048),_=a(9580),f=a(7494),h=a.n(f),x=function(){var e=(0,p.I0)(),t=h()((function(t){var a=t.target.value.toLowerCase();e((0,_.T)(a))}),1e3);return(0,l.jsxs)("label",{className:u,children:["Find contact by name",(0,l.jsx)(s.Z,{className:d,type:"name",label:"Search",id:"demo-helper-text-misaligned",color:"secondary",onChange:t})]})},Z={contactsList:"Contacts_contactsList__W3abH",wrapper:"Contacts_wrapper__2usHk",contactsItem:"Contacts_contactsItem__qepw2",contactBtn:"Contacts_contactBtn__tIpPj",contactsName:"Contacts_contactsName__-7HHl",contactImage:"Contacts_contactImage__u5YWT"},j=a(6351),b=a(9875),N=a(7247),C=a(7124),w=function(){var e=(0,c.wY)(),t=e.data,a=e.isLoading,r=(0,c.Nt)(),s=(0,n.Z)(r,1)[0],o=(0,p.v9)(j.B8);if(a)return(0,l.jsx)(b.Z,{});if(!t)return(0,l.jsx)("div",{children:"No contacts"});var i=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return(0,l.jsx)("ul",{className:Z.contactsList,children:i.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,l.jsx)("li",{className:Z.contactsItem,children:(0,l.jsxs)("div",{className:Z.wrapper,children:[(0,l.jsx)("span",{className:Z.contactsName,children:"".concat(n)}),(0,l.jsx)("span",{className:Z.contactsPhone,children:"".concat(r)}),(0,l.jsx)(C.Z,{disabled:a,onClick:function(){return s(t)},edge:"end","aria-label":"delete",children:(0,l.jsx)(N.Z,{})})]})},t)}))})},v=a(1289),y=function(){var e,t=(0,c.wY)(),a=t.data,n=t.isLoading,r=t.isError,s=t.error;return n?e=(0,l.jsx)(b.Z,{}):a?e=(0,l.jsxs)("div",{className:v.Z.container,children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsxs)("div",{className:v.Z.wrapper,children:[(0,l.jsx)(m,{}),(0,l.jsx)(x,{})]}),(0,l.jsx)(w,{})]}):r&&(e=(0,l.jsx)("p",{children:JSON.stringify(s)})),e}},1289:function(e,t){t.Z={container:"App_container__ZdBeZ",wrapper:"App_wrapper__oLZUe",link:"App_link__91nmW"}},4403:function(e,t){t.Z={form:"ContactForm_form__dhl+T",formText:"ContactForm_formText__qGoZy",formInput:"ContactForm_formInput__GszVU",formBtn:"ContactForm_formBtn__qZGY3"}}}]);
//# sourceMappingURL=329.2c68be3b.chunk.js.map