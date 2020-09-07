(this["webpackJsonpmovie-database-crud"]=this["webpackJsonpmovie-database-crud"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=(a(30),a(7)),c=a(11),s=a(2),m=a(3),u=a(9),d=a(5),v=a(4),h=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"loading"},"Carregando...")}}]),a}(n.Component),p=a(15),b=a(12),f=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=Object(b.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(p.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_title"},"T\xedtulo")))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_subtitle"},"Subt\xedtulo")))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_image"},"Imagem")))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("textarea",{id:"movie_storyline",className:"materialize-textarea",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_storyline"},"Sinopse")))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",{className:"row col"},i.a.createElement("label",{htmlFor:"movie_genre"},"Genre Select"),i.a.createElement("select",{className:"browser-default",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense")))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",className:"form-control",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_rating"},"Avalia\xe7\xe3o")))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("button",{className:"btn waves-effect waves-light",type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"movie-form"},i.a.createElement("div",{className:"row"},i.a.createElement("form",{className:"col s12"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton())))}}]),a}(i.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.imagePath,r=e.id;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card movie-card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:"".concat(n)}),i.a.createElement("span",{className:"card-title"},t)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card-action"},i.a.createElement(l.b,{to:"/movie-cards/".concat(r)},"VER DETALHES")))))}}]),a}(i.a.Component),E=a(24),y=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(y));var N=function(){return JSON.parse(localStorage.getItem("movies"))},O=function(e){return localStorage.setItem("movies",JSON.stringify(e))},k=function(e){var t=N().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){setTimeout((function(){e(t)}),2e3)}))},S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:"",status:"loading",shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;k(t.params.id).then((function(t){return e.setState({movie:t,status:"running"})}))}},{key:"handleSubmit",value:function(e){var t=this;(function(e){var t=N().map((function(t){return t.id===parseInt(e.id,10)?Object(b.a)(Object(b.a)({},t),e):t}));return O(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))})(e).then((function(){return t.setState({shouldRedirect:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/movie-cards/"}):"loading"===t?i.a.createElement(h,null):i.a.createElement(f,{movie:n,onSubmit:this.handleSubmit})}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:"",showLoading:!0},n.delete=n.delete.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;k(t.params.id).then((function(t){return e.setState({movie:t,showLoading:!1})}))}},{key:"delete",value:function(){!function(e){var t=N();t=t.filter((function(t){return t.id!==parseInt(e,10)})),O(t),new Promise((function(e){setTimeout((function(){e({status:"OK"})}),1e3)}))}(this.state.movie.id)}},{key:"render",value:function(){var e=this.state,t=e.showLoading,a=e.movie;if(t)return i.a.createElement(h,null);var n=a.title,r=a.storyline,o=a.imagePath,c=a.genre,s=a.rating,m=a.subtitle,u=a.id;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",src:"../movie-cards/".concat(o)}),i.a.createElement("span",{className:"card-title"},n)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,"Subtitle: ".concat(m)),i.a.createElement("p",null,"Storyline: ".concat(r)),i.a.createElement("p",null,"Genre: ".concat(c)),i.a.createElement("p",null,"Rating: ".concat(s))),i.a.createElement("div",{className:"card-action"},i.a.createElement(l.b,{to:"/movie-cards/".concat(u,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/movie-cards/",onClick:this.delete},"APAGAR"),i.a.createElement(l.b,{to:"/movie-cards/"},"VOLTAR")))))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movies:"",showLoading:!0},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){setTimeout((function(){var t=N();e(t)}),2e3)})).then((function(t){return e.setState({movies:t,showLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies;return e.showLoading?i.a.createElement(h,null):i.a.createElement("div",null,i.a.createElement("div",{className:"movie-list"},t.map((function(e){return i.a.createElement(g,{key:e.title,movie:e})}))),i.a.createElement("div",{className:"center-align"},i.a.createElement(l.b,{className:"waves-effect waves-light btn",to:"/movie-cards/new"},"ADICIONAR CART\xc3O")))}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={shouldRedirect:!1,movieBlank:{id:"",title:"",subtitle:"",storyline:"",rating:"",imagePath:"",bookmarked:!1,genre:"action"}},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleSubmit",value:function(e){var t=this;(function(e){var t=N(),a=t[t.length-1].id+1,n=Object(b.a)(Object(b.a)({},e),{},{id:a});return t=[].concat(Object(E.a)(t),[n]),O(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))})(e).then((function(){return t.setState({shouldRedirect:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.shouldRedirect,a=e.movieBlank;return t?i.a.createElement(c.a,{to:"/movie-cards/"}):i.a.createElement(f,{movie:a,onSubmit:this.handleSubmit})}}]),a}(n.Component),_=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"not-found header"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);a(36);var C=function(){return i.a.createElement(l.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/movie-cards/new",component:I}),i.a.createElement(c.b,{exact:!0,path:"/movie-cards/:id",component:j}),i.a.createElement(c.b,{path:"/movie-cards/:id/edit",component:S}),i.a.createElement(c.b,{path:"/movie-cards",component:w}),i.a.createElement(c.b,{component:_})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.535beaee.chunk.js.map