(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[836],{3836:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var a=n(9439),r=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},s=n(5262),o=(n(2791),n(163)),c=n(4403),l=n(184),i=function(){var t=r(),e=(0,o.wY)().data,n=(0,o.Tn)(),i=(0,a.Z)(n,1)[0];return(0,l.jsxs)("form",{className:c.Z.form,onSubmit:function(t){t.preventDefault();var n=t.currentTarget,a=n.name.value,s=n.number.value,o=a.toLowerCase(),c=!1,l={id:r(),name:a,number:s};e.forEach((function(t){t.name.toLowerCase()===o&&(alert("".concat(t.name," is already in contacts")),c=!0)})),c||(i(l),n.reset())},children:[(0,l.jsx)("label",{htmlFor:t,className:c.Z.formText}),(0,l.jsx)(s.Z,{className:c.Z.formInput,label:"Name",id:"demo-helper-text-misaligned",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("label",{htmlFor:t,className:c.Z.formText}),(0,l.jsx)(s.Z,{className:c.Z.formInput,label:"Phone Number",id:"demo-helper-text-misaligned",required:!0,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,l.jsx)("button",{className:c.Z.formBtn,type:"submit",children:"Add contact"})]})},m="Filter_filterInput__1Cysk",u="Filter_filterLabel__+pnW-",d=n(5048),p=n(9580),f=n(7494),_=n.n(f),h=function(){var t=(0,d.I0)(),e=_()((function(e){var n=e.target.value.toLowerCase();t((0,p.T)(n))}),1e3);return(0,l.jsxs)("label",{className:u,children:["Find contact by name",(0,l.jsx)(s.Z,{className:m,type:"name",label:"Search",id:"demo-helper-text-misaligned",onChange:e})]})},x={contactsList:"Contacts_contactsList__W3abH",wrapper:"Contacts_wrapper__2usHk",contactsItem:"Contacts_contactsItem__qepw2",contactBtn:"Contacts_contactBtn__tIpPj",contactsName:"Contacts_contactsName__-7HHl",contactImage:"Contacts_contactImage__u5YWT"},b=n(6351),j=n(9875),v=function(){var t=(0,o.wY)(),e=t.data,n=t.isLoading,r=(0,o.Nt)(),s=(0,a.Z)(r,1)[0],c=(0,d.v9)(b.B8);if(n)return(0,l.jsx)(j.Z,{});if(!e)return(0,l.jsx)("div",{children:"No contacts"});var i=e.filter((function(t){return t.name.toLowerCase().includes(c.toLowerCase())}));return(0,l.jsx)("ul",{className:x.contactsList,children:i.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,l.jsx)("li",{className:x.contactsItem,children:(0,l.jsxs)("div",{className:x.wrapper,children:[(0,l.jsx)("span",{className:x.contactsName,children:"".concat(n)}),(0,l.jsx)("span",{className:x.contactsPhone,children:"".concat(a)}),(0,l.jsx)("button",{type:"button",className:x.contactBtn,onClick:function(){return s(e)},children:"Delete"})]})},e)}))})},N=n(1289),Z=function(){var t,e=(0,o.wY)(),n=e.data,a=e.isLoading,r=e.isError,s=e.error;return a?t=(0,l.jsx)(j.Z,{}):n?t=(0,l.jsxs)("div",{className:N.Z.container,children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsxs)("div",{className:N.Z.wrapper,children:[(0,l.jsx)(i,{}),(0,l.jsx)(h,{})]}),(0,l.jsx)(v,{})]}):r&&(t=(0,l.jsx)("p",{children:JSON.stringify(s)})),t}},7494:function(t){function e(t,e,n){var a,r,s,o,c;function l(){var i=Date.now()-o;i<e&&i>=0?a=setTimeout(l,e-i):(a=null,n||(c=t.apply(s,r),s=r=null))}null==e&&(e=100);var i=function(){s=this,r=arguments,o=Date.now();var i=n&&!a;return a||(a=setTimeout(l,e)),i&&(c=t.apply(s,r),s=r=null),c};return i.clear=function(){a&&(clearTimeout(a),a=null)},i.flush=function(){a&&(c=t.apply(s,r),s=r=null,clearTimeout(a),a=null)},i}e.debounce=e,t.exports=e},1289:function(t,e){"use strict";e.Z={container:"App_container__ZdBeZ",wrapper:"App_wrapper__oLZUe"}},4403:function(t,e){"use strict";e.Z={form:"ContactForm_form__dhl+T",formText:"ContactForm_formText__qGoZy",formInput:"ContactForm_formInput__GszVU",formBtn:"ContactForm_formBtn__qZGY3"}}}]);
//# sourceMappingURL=836.15b1789a.chunk.js.map