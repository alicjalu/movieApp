(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(33)},20:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(14),s=a.n(i),r=(a(20),a(3)),c=a(4),o=a(6),m=a(5),u=a(7),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({display:"block",display2:"none"})},a.handleClick2=function(){a.setState({display:"none",display2:"block"})},a.state={display:"none",display2:"block"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"main__navigation "},l.a.createElement("nav",{className:"navigation center"},l.a.createElement("i",{className:"fas fa-film nav__icon"}),l.a.createElement("ul",{className:"navigation__menu",style:{display:this.state.display}},l.a.createElement("li",{className:"navigation__element"},l.a.createElement("a",{href:"",className:"navigation__item"},"Lista Film\xf3w")),l.a.createElement("li",{className:"navigation__element"},l.a.createElement("a",{href:"",className:"navigation__item"},"Kontakt")),l.a.createElement("li",{className:"navigation__element"},l.a.createElement("a",{href:"",className:"navigation__item"},"O Autorze"))),l.a.createElement("i",{className:"fas fa-bars nav__icon",onClick:this.handleClick,style:{display:this.state.display2}}),l.a.createElement("i",{className:"fas fa-times nav__icon__2",style:{display:this.state.display},onClick:this.handleClick2})))}}]),t}(l.a.Component),f=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"main__information"},l.a.createElement("div",{className:"information center"},l.a.createElement("p",null,"Drodzy u\u017cytkownicy! Witam na stronie PWW - Przegl\u0105daj Wyszukaj Wylosuj, na kt\xf3rej mo\u017cesz przegl\u0105da\u0107 filmy znajduj\u0105ce si\u0119 w naszej bazie danych, mo\u017cesz wyszuka\u0107 konkretny tytu\u0142 lub wylosowa\u0107 film na wiecz\xf3r. ")))}}]),t}(l.a.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).likeClick=function(){var e=a.state.like;a.setState({like:!e,hate:!1})},a.hateClick=function(){var e=a.state.hate;a.setState({like:!1,hate:!e})},a.favClick=function(){var e=a.state.fav;a.setState({fav:!e})},a.commentClick=function(){a.setState({comment:a.comment.current.value}),console.log(a.comment.current.value)},a.handleQuit=function(e){console.log("klikam na ixa",e),"function"===typeof a.props.onClose&&a.props.onClose(e)},a.comment=l.a.createRef(),a.state={commentBtnTxt:"DODAJ KOMENTARZ",like:!1,hate:!1,fav:!1,comment:"Wpisz swoj\u0105 opini\u0119..."},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"lightbox"},l.a.createElement("div",{className:"lightbox__window"},l.a.createElement("div",{className:"lightbox__content"},l.a.createElement("img",{src:this.props.movie.posterUrl,alt:"movie poster",className:"lightbox__img"}),l.a.createElement("div",{className:"lightbox__data"},l.a.createElement("i",{className:"fas fa-times lightboxExit",onClick:function(t){return e.handleQuit(t)}}),l.a.createElement("h1",null,"Tytu\u0142:"),l.a.createElement("span",null,this.props.movie.title),l.a.createElement("h2",null,"Re\u017cyser:"),l.a.createElement("span",null,this.props.movie.director),l.a.createElement("h2",null,"Rok produkcji:"),l.a.createElement("span",null,this.props.movie.year),l.a.createElement("h2",null,"Opis:"),l.a.createElement("span",null,this.props.movie.description))),l.a.createElement("div",{className:"lightbox__user"},l.a.createElement("div",{className:"lightbox__rating"},l.a.createElement("h3",null,"Twoja ocena:"),l.a.createElement("div",null,l.a.createElement("i",{className:"far fa-angry lightbox__rate__icon",style:{color:this.state.hate?"red":""},onClick:this.hateClick}),l.a.createElement("i",{className:"far fa-smile lightbox__rate__icon",style:{color:this.state.like?"red":""},onClick:this.likeClick})),l.a.createElement("h3",null,"Dodaj do ulubionych:"),l.a.createElement("div",null,l.a.createElement("i",{className:"far fa-star lightbox__rate__star",style:{color:this.state.fav?"red":""},onClick:this.favClick}))),l.a.createElement("div",{className:"lightbox__comments"},l.a.createElement("h3",null,"Tw\xf3j komentarz:"),l.a.createElement("textarea",{className:"lightbox__comments__section",placeholder:this.state.comment,ref:this.comment}),l.a.createElement("button",{className:"lightbox__comments__btn",onClick:this.commentClick},this.state.commentBtnTxt)))))}}]),t}(l.a.Component),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){console.log("po kliknieciu w diva"),a.setState({showLightbox:!0,ppp:!0})},a.handleLightboxClose=function(e){console.log("klik z ligtboxa w ixa"),e.stopPropagation(),a.setState({showLightbox:!1,ppp:!1})},a.state={showLightbox:!1,ppp:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;return console.log(this.state.showLightbox,this.state),this.state.showLightbox&&(e=l.a.createElement(p,{movie:this.props.movie,onClose:this.handleLightboxClose})),l.a.createElement("div",{onClick:this.handleClick},e,l.a.createElement("img",{className:"slider__img",src:this.props.movie.posterUrl,alt:"movie poster"}))}}]),t}(l.a.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handlePrev=function(){var e=a.state.visibleSlides;for(var t in e)0===e[t]?e[t]=a.props.movies.length-1:e[t]-=1;a.setState({visibleSlides:e})},a.handleNext=function(){var e=a.state.visibleSlides;for(var t in e)e[t]===a.props.movies.length-1?e[t]=0:e[t]+=1;a.setState({visibleSlides:e})},a.state={movies:a.props.movies,visibleSlides:{left:0,center:1,right:2}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(0===this.props.movies.length)return l.a.createElement("p",{style:{textAlign:"center",fontSize:"60px"}},"loading ...");var e=this.state.visibleSlides.left,t=this.state.visibleSlides.center,a=this.state.visibleSlides.right;return l.a.createElement("div",null,l.a.createElement("section",{className:"main__slider"},l.a.createElement("div",{className:"center slider"},l.a.createElement("div",{className:"slider__prev"},l.a.createElement("i",{className:"fas fa-angle-left slider__arrow",onClick:this.handlePrev})),l.a.createElement(d,{key:"left",movie:this.props.movies[e],clickMethod:this.handleClick}),l.a.createElement(d,{key:"center",movie:this.props.movies[t],clickMethod:this.handleClick}),l.a.createElement(d,{key:"right",movie:this.props.movies[a],clickMethod:this.handleClick}),l.a.createElement("div",{className:"slider__next"},l.a.createElement("i",{className:"fas fa-angle-right slider__arrow",onClick:this.handleNext})))))}}]),t}(l.a.Component),_=a(10);_.initializeApp({apiKey:"AIzaSyBjVdgrY9iDhxazuywf2-MpVi7nRb1YFfM",authDomain:"film-base-32989.firebaseapp.com",databaseURL:"https://film-base-32989.firebaseio.com",projectId:"film-base-32989",storageBucket:"film-base-32989.appspot.com",messagingSenderId:"431133884937"});var E=_.firestore();E.settings({timestampsInSnapshots:!0});var b=E,k=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(o.a)(this,Object(m.a)(t).call(this,e)),console.log(e.filter),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={};for(var t in this.props.filter)null!==this.props.filter[t]&&(e.name=t,e.value=this.props.filter[t]);var a=this.props.movies.filter(function(t){return-1!=t[e.name].toLowerCase().indexOf(e.value.toLowerCase())}).map(function(e){return console.log(e.year),l.a.createElement("li",{key:e.title},l.a.createElement("h3",null,e.title,"(",e.year,")"),l.a.createElement("br",null),l.a.createElement("span",null,e.description),l.a.createElement("br",null),l.a.createElement("br",null))});return l.a.createElement("div",{className:"search__results"},l.a.createElement("ul",{className:"search__list"},a))}}]),t}(l.a.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSearch=function(e){console.log(a.form.filter.value),console.log(a.text.current.value),a.setState({hasSearch:!0,filter:{genre:"genre"===a.form.filter.value?a.text.current.value:null,year:"year"===a.form.filter.value?a.text.current.value:null,title:"title"===a.form.filter.value?a.text.current.value:null}})},a.text=l.a.createRef(),a.state={hasSearch:!1,filter:{genre:null,year:null,title:null}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=null;this.state.hasSearch&&(t=l.a.createElement(k,{movies:this.state.movies,filter:this.state.filter}));var a=this.state.hasSearch?"positionTop":0;return l.a.createElement("section",{className:"main__search"},l.a.createElement("div",{className:"center search"},l.a.createElement("div",{className:"search__form"},l.a.createElement("div",{className:"search__title"},l.a.createElement("span",null,"Wyszukaj film wed\u0142ug kategorii:")),l.a.createElement("form",{ref:function(t){return e.form=t}},l.a.createElement("input",{type:"radio",name:"filter",value:"genre",className:"search__type"}),l.a.createElement("span",{className:"search__label"},"gatunek"),l.a.createElement("input",{type:"radio",name:"filter",value:"year",className:"search__type"}),l.a.createElement("span",{className:"search__label"},"rok produkcji"),l.a.createElement("input",{type:"radio",name:"filter",value:"title",className:"search__type"}),l.a.createElement("span",{className:"search__label"},"tytu\u0142"))),l.a.createElement("div",{className:"search__btn ".concat(a)},l.a.createElement("input",{type:"text",className:"search__input",ref:this.text,placeholder:"Wyszukaj film"}),l.a.createElement("a",{className:"search__button"},l.a.createElement("i",{className:"fas fa-search",onClick:this.handleSearch}))),t))}},{key:"componentDidMount",value:function(){var e=this;b.collection("films").get().then(function(t){var a=[];t.docs.forEach(function(e){a.push(e.data())}),e.setState({movies:a})})}}]),t}(l.a.Component),y=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"random__result"},l.a.createElement("div",null,l.a.createElement("img",{className:"random__poster",src:this.props.movie.posterUrl,alt:""})),l.a.createElement("div",{className:"random__film"},l.a.createElement("h3",null,"Tytu\u0142:"),l.a.createElement("span",null,this.props.movie.title),l.a.createElement("br",null),l.a.createElement("h4",null,"Re\u017cyser:"),l.a.createElement("span",null,this.props.movie.director),l.a.createElement("br",null),l.a.createElement("h4",null,"Rok produkcji:"),l.a.createElement("span",null,this.props.movie.year),l.a.createElement("br",null),l.a.createElement("h4",null,"Opis:"),l.a.createElement("span",null,this.props.movie.description)))}}]),t}(l.a.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),console.log(a.form.genre.value);var t=a.state.movies.filter(function(e){return e.genre==a.form.genre.value}),n=t[Math.floor(Math.random()*t.length)];console.log(n),a.setState({hasRandom:!0,randomFilm:n})},a.state={movies:[],hasRandom:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.hasRandom?l.a.createElement(y,{movie:this.state.randomFilm}):null;return l.a.createElement("section",{className:"main__random"},l.a.createElement("div",{className:"center random"},l.a.createElement("div",{className:"random"},l.a.createElement("i",{className:"fas fa-question random__icon"}),l.a.createElement("div",null,"Podaj parametry i wylosuj film na wiecz\xf3r:")),l.a.createElement("div",null,l.a.createElement("form",{id:"random__select",onSubmit:this.handleSubmit,ref:function(t){return e.form=t}},l.a.createElement("label",{htmlFor:"random__select",className:"random__label"}," Gatunek:",l.a.createElement("select",{name:"genre",form:"random__select",className:"random__select"},l.a.createElement("option",{value:"horror",className:"random__option"},"horror"),l.a.createElement("option",{value:"romans",className:"random__option"},"romans"),l.a.createElement("option",{value:"komedia",className:"random__option"},"komedia"),l.a.createElement("option",{value:"akcja",className:"random__option"},"film akcji")),l.a.createElement("button",{type:"submit",className:"random__button"},"WYLOSUJ")))),t))}},{key:"componentDidMount",value:function(){var e=this;b.collection("films").get().then(function(t){var a=[];t.docs.forEach(function(e){a.push(e.data())}),e.setState({movies:a})})}}]),t}(l.a.Component),N=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"main__copyrights"},l.a.createElement("div",{className:"copyrights center"},l.a.createElement("div",null,l.a.createElement("span",null,"Alicja \u0141uczy\u0144ska "),l.a.createElement("i",{className:"far fa-hand-spock"}),l.a.createElement("span",null," 2018")),l.a.createElement("div",null,l.a.createElement("a",{href:"http://facebook.com/nie.dama",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook socialmedia__icon"})),l.a.createElement("a",{href:"https://github.com/alicjalu",target:"_blank"},l.a.createElement("i",{className:"fab fa-github socialmedia__icon"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/alicja-%C5%82uczy%C5%84ska-949772127/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin socialmedia__icon"})))))}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={movies:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(v,{movies:this.state.movies}),l.a.createElement(g,null),l.a.createElement(j,null),l.a.createElement(N,null))}},{key:"componentDidMount",value:function(){var e=this;b.collection("films").get().then(function(t){var a=[];t.docs.forEach(function(e){a.push(e.data())}),e.setState({movies:a})})}}]),t}(n.Component);s.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.a9f7b9b7.chunk.js.map