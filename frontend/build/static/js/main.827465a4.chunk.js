(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),i=(n(29),n(22)),r=n(2),u=n(3),l=n(8),p=n(0);var d=function(e){return Object(p.jsxs)("header",{className:"header page__header",children:[Object(p.jsx)("a",{className:"logo",href:"#",target:"_self"}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{exact:!0,path:"/sign-in",children:Object(p.jsx)(l.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(p.jsx)(u.b,{exact:!0,path:"/sign-up",children:Object(p.jsx)(l.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsx)(u.b,{exact:!0,path:"/",children:Object(p.jsxs)("div",{className:"header__user-info",children:[Object(p.jsx)("p",{className:"header__email",children:e.email}),Object(p.jsx)(l.b,{to:"/sign-in",className:"header__link",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})})]})]})},j=c.a.createContext();var h=function(e){var t=c.a.useContext(j),n=e.card.owner._id===t._id,a="elements__button-trash ".concat(n?"elements__button-trash":"elements__button-trash_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),o="elements__button ".concat(s?"elements__button_active":"");return Object(p.jsxs)("li",{className:"elements__list-item",children:[Object(p.jsx)("img",{className:"elements__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(p.jsxs)("div",{className:"elements__block",children:[Object(p.jsx)("h2",{className:"elements__title",children:e.card.name}),Object(p.jsxs)("div",{className:"elements__like-group",children:[Object(p.jsx)("button",{className:o,type:"submit",onClick:function(){e.onCardLike(e.card)}}),Object(p.jsx)("div",{className:"elements__like-count",children:e.card.likes.length})]})]})]})};var m=function(){return Object(p.jsx)("div",{className:"loader",children:"Loading..."})};var b=function(e){var t=c.a.useContext(j);return Object(p.jsxs)("div",{className:"page__container",children:[e.isLoading&&Object(p.jsx)(m,{}),Object(p.jsxs)("section",{className:"profile page__profile ".concat(e.isLoading&&"page__profile_hidden"),children:[Object(p.jsxs)("div",{className:"profile__container",children:[Object(p.jsxs)("div",{className:"profile__avatar-block",children:[Object(p.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(p.jsx)("button",{className:"profile__avatar-button",onClick:e.onEditAvatar})]}),Object(p.jsxs)("div",{className:"profile__info-block",children:[Object(p.jsxs)("div",{className:"profile__edit-block",children:[Object(p.jsx)("h1",{className:"profile__title",children:t.name}),Object(p.jsx)("button",{type:"button",id:"show-popup",className:"profile__edit-button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__subtitle",children:t.about})]})]}),Object(p.jsx)("button",{className:"profile__button",type:"submit",id:"show-card-popup",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"elements page__elements",children:Object(p.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(p.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var f=function(){return Object(p.jsx)("footer",{className:"footer page__footer",children:Object(p.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})},_=n.p+"static/media/CloseIcon.ba3d267d.svg";var O=function(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content",children:[Object(p.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose,children:Object(p.jsx)("img",{src:_,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430"})}),Object(p.jsxs)("form",{className:"popup__field-form popup__field-form-".concat(e.name),onSubmit:e.onSubmit,children:[Object(p.jsx)("h2",{className:"popup__heading",children:e.title}),e.children,Object(p.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonText})]})]})})};var x=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),u=i[0],l=i[1];return c.a.useEffect((function(){s(""),l("")}),[e.isOpen]),Object(p.jsxs)(O,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:a,link:u})},isDataLoading:e.isDataLoading,children:[Object(p.jsx)("input",{className:"popup__field-input popup__field-input-description",name:"name",type:"text",autoComplete:"off",id:"field-input-description",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,value:a||"",onChange:function(e){s(e.target.value)}}),Object(p.jsx)("span",{className:"popup__input-error",id:"field-input-description-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(p.jsx)("input",{className:"popup__field-input popup__field-input-link",type:"url",name:"link",autoComplete:"off",id:"field-input-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:u||"",onChange:function(e){l(e.target.value)}}),Object(p.jsx)("span",{className:"popup__input-error",id:"field-input-link-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443."})]})};var g=function(e){var t=c.a.useContext(j),n=c.a.useState(""),a=Object(r.a)(n,2),s=a[0],o=a[1],i=c.a.useState(""),u=Object(r.a)(i,2),l=u[0],d=u[1];return c.a.useEffect((function(){o(t.name),d(t.about)}),[t,e.isOpen]),Object(p.jsxs)(O,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:l})},children:[Object(p.jsx)("input",{className:"popup__field-input popup__field-input-name",id:"field-input-name",name:"name",value:s||"",type:"text",placeholder:"\u0418\u043c\u044f",autoComplete:"off",minLength:"2",maxLength:"40",required:!0,onChange:function(e){o(e.target.value)}}),Object(p.jsx)("span",{className:"popup__input-error",id:"field-input-name-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(p.jsx)("input",{className:"popup__field-input popup__field-input-about",type:"text",id:"field-input-about",name:"about",value:l||"",placeholder:"\u041e \u0441\u0435\u0431\u0435",autoComplete:"off",minLength:"2",maxLength:"200",required:!0,onChange:function(e){d(e.target.value)}}),Object(p.jsx)("span",{className:"popup__input-error",id:"field-input-about-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})};var v=function(e){var t=c.a.useRef("");return Object(p.jsxs)(O,{name:"update",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),e.onClose(),t.current.value=""},children:[Object(p.jsx)("input",{ref:t,className:"popup__field-input popup__field-input-link",type:"url",name:"avatar",autoComplete:"off",id:"field-input-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(p.jsx)("span",{className:"popup__input-error",id:"field-input-avatar-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443."})]})};var k=function(e){return Object(p.jsx)("div",{className:"popup popup_type_image ".concat(e.card.link?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content popup__content_content_image",children:[Object(p.jsx)("button",{type:"button",className:"popup__close",children:Object(p.jsx)("img",{src:_,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430",onClick:e.onClose})}),Object(p.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(p.jsx)("p",{className:"popup__caption",children:e.card.name})]})})};var C=function(e){return Object(p.jsx)(O,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",buttonText:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCardConfirm(e.cardId)}})},N=n(20),y=n(21),S=new(function(){function e(t){var n=t.address,a=t.token;Object(N.a)(this,e),this._address=n,this._token=a}return Object(y.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setUserData",value:function(e){var t=e.name,n=e.about,a=e.avatar;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n,avatar:a})}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.deleteLike(e)}}]),e}())({address:"https://api.mestoproject.students.nomoredomains.club"}),L=n(23),E=n(24),T=["component"];function D(e){var t=e.component,n=Object(E.a)(e,T);return Object(p.jsx)(u.b,{children:function(){return n.isLoggedIn?Object(p.jsx)(t,Object(L.a)({},n)):Object(p.jsx)(u.a,{to:"/sign-in"})}})}var w=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),u=i[0],d=i[1];return Object(p.jsxs)("section",{className:"auth",children:[Object(p.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onRegister(a,u)},children:[Object(p.jsx)("input",{className:"auth__form-input",placeholder:"Email",name:"email",type:"email",required:!0,value:a||"",onChange:function(e){s(e.target.value)},autoComplete:"off"}),Object(p.jsx)("input",{className:"auth__form-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",required:!0,value:u||"",onChange:function(e){d(e.target.value)},autoComplete:"off"}),Object(p.jsx)("button",{className:"auth__form-submit-btn auth__form-submit-btn_size",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(p.jsxs)("div",{className:"auth__signup",children:[Object(p.jsx)("p",{className:"auth__signup_text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(p.jsx)(l.b,{to:"sign-in",className:"auth__signup_link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})};var P=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),u=i[0],l=i[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"auth",children:[Object(p.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onLogin(a,u)},children:[Object(p.jsx)("input",{onChange:function(e){s(e.target.value)},className:"auth__form-input",placeholder:"Email",name:"email",type:"email",required:!0,value:a||"",autoComplete:"off"}),Object(p.jsx)("input",{onChange:function(e){l(e.target.value)},className:"auth__form-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",required:!0,value:u||"",autoComplete:"off"}),Object(p.jsx)("button",{className:"auth__form-submit-btn",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},I="https://api.mestoproject.students.nomoredomains.club";function A(e){return e.ok?e.json():Promise.reject("".concat(e.status))}var R=n.p+"static/media/SuccessIcon.a9eb6caf.svg",U=n.p+"static/media/FailIcon.d4ce2a26.svg";var z=function(e){return Object(p.jsx)("div",{className:"popup popup_type_tooltip ".concat(e.isOpen?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content",children:[e.isSuccess?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:"".concat(R),alt:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e.",className:"popup__tooltip_image"}),Object(p.jsx)("p",{className:"popup__tooltip_message",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:"".concat(U),alt:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0435 \u0431\u044b\u043b\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430.",className:"popup__tooltip_image"}),Object(p.jsx)("p",{className:"popup__tooltip_message",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437!"})]}),Object(p.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose,children:Object(p.jsx)("img",{src:_,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430"})})]})})};var q=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(r.a)(s,2),l=o[0],h=o[1],m=c.a.useState(!1),_=Object(r.a)(m,2),O=_[0],N=_[1],y=c.a.useState({name:"",link:""}),L=Object(r.a)(y,2),E=L[0],T=L[1],R=c.a.useState(!1),U=Object(r.a)(R,2),q=U[0],F=U[1],J=c.a.useState(null),B=Object(r.a)(J,2),H=B[0],M=B[1],G=c.a.useState({}),K=Object(r.a)(G,2),Q=K[0],V=K[1],W=c.a.useState([]),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(""),ce=Object(r.a)(ae,2),se=ce[0],oe=ce[1],ie=Object(u.g)(),re=c.a.useState(!1),ue=Object(r.a)(re,2),le=ue[0],pe=ue[1],de=c.a.useState(!1),je=Object(r.a)(de,2),he=je[0],me=je[1],be=c.a.useState(!1),fe=Object(r.a)(be,2),_e=fe[0],Oe=fe[1];function xe(){N(!1),a(!1),h(!1),T({name:"",link:""}),F(!1),pe(!1)}return c.a.useEffect((function(){Oe(!0),Promise.all([S.getUserData(),S.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];V(n),Z(a)})).catch((function(e){return console.log(e)})).finally((function(){return Oe(!1)}))}),[]),c.a.useEffect((function(){function e(e){"Escape"===e.key&&xe()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),c.a.useEffect((function(){function e(e){e.target.classList.contains("popup_is-opened")&&xe()}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(I,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(A)}(e).then((function(e){ne(!0),oe(e.data.email),ie.push("/")})).catch((function(e){401===e.status&&console.log("401 \u2014 \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),console.log("401 \u2014 \u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}))}),[ie]),Object(p.jsx)(j.Provider,{value:Q,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"page__container",children:[Object(p.jsx)(d,{email:se,onSignOut:function(){localStorage.removeItem("jwt"),ne(!1),ie.push("/sign-in")}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(D,{exact:!0,path:"/",isLoggedIn:te,onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){h(!0)},onCardClick:function(e){T(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Q._id}));S.changeLikeCardStatus(e._id,!t).then((function(t){Z((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){F(!0),M(e)},cards:Y,component:b,isLoading:_e}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(P,{onLogin:function(e,t){(function(e,t){return fetch("".concat(I,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(A).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(t){localStorage.setItem("jwt",t.token),ne(!0),oe(e),ie.push("/")})).catch((function(e){400===e.status?console.log("400 - \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status&&console.log("401 - \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}))}})}),Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(w,{onRegister:function(e,t){(function(e,t){return fetch("".concat(I,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(A)})(e,t).then((function(e){pe(!0),me(!0),ie.push("/sign-in")})).catch((function(e){400===e.status&&console.log("400 - \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),pe(!0),me(!1)}))}})}),Object(p.jsx)(u.b,{children:te?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/sign-in"})})]}),te&&Object(p.jsx)(f,{}),Object(p.jsx)(x,{isOpen:l,onClose:xe,onAddCard:function(e){S.createCard(e).then((function(e){Z([e].concat(Object(i.a)(Y))),xe()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(v,{isOpen:O,onClose:xe,onUpdateAvatar:function(e){S.updateAvatar(e).then((function(e){V(e),xe()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(g,{isOpen:n,onClose:xe,onUpdateUser:function(e){S.setUserData(e).then((function(e){V(e),xe()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(C,{isOpen:q,onclose:xe,onDeleteCardConfirm:function(e){S.deleteCard(e._id).then((function(){Z((function(t){return t.filter((function(t){return t!==e}))})),xe()})).catch((function(e){return console.log(e)}))},cardId:H}),Object(p.jsx)(k,{card:null!==E&&E,onClose:xe})]}),Object(p.jsx)(z,{isOpen:le,onClose:xe,isSuccess:he})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(q,{})})}),document.getElementById("root")),F()}},[[36,1,2]]]);
//# sourceMappingURL=main.827465a4.chunk.js.map