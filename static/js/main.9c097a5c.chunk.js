(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(7),a=c.n(i),n=(c(20),c(3)),l=[{title:"Home",url:"#home",id:"home",inactiveClassName:"nav-links",activeClassName:"nav-links home"},{title:"About",url:"#about",id:"about",inactiveClassName:"nav-links",activeClassName:"nav-links about"},{title:"Projects",url:"#projects",id:"projects",inactiveClassName:"nav-links",activeClassName:"nav-links projects"},{title:"Blog",url:"#blog",id:"blog",inactiveClassName:"nav-links",activeClassName:"nav-links blog"},{title:"Contact",url:"#",id:"",inactiveClassName:"nav-links-mobile-button",activeClassName:"nav-links-mobile-button"}],o=(c(21),c(22),c(0)),r=["button--primary","button--outline"],d=["button--medium","button--large"],j=function(e){var t=e.children,c=e.type,s=e.onClick,i=e.buttonStyle,a=e.buttonSize,n=r.includes(i)?i:r[0],l=d.includes(a)?a:d[0];return Object(o.jsx)("button",{className:"button ".concat(n," ").concat(l),onClick:s,type:c,children:t})},b=c(2);var u=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!1),r=Object(n.a)(a,2),d=r[0],u=r[1],m=Object(s.useState)(""),h=Object(n.a)(m,2),O=h[0],p=h[1],x=Object(s.useState)(!1),f=Object(n.a)(x,2),v=f[0],g=f[1],w=v?{}:{display:"none"};return window.addEventListener("scroll",(function(){window.scrollY>=80?u(!0):u(!1)})),window.addEventListener("scroll",(function(){window.scrollY>=document.getElementById("home").getBoundingClientRect().top+window.pageYOffset-85&&window.scrollY<document.getElementById("about").getBoundingClientRect().top+window.pageYOffset-85?p("Home"):window.scrollY>=document.getElementById("about").getBoundingClientRect().top+window.pageYOffset+-85&&window.scrollY<document.getElementById("projects").getBoundingClientRect().top+window.pageYOffset-85?p("About"):window.scrollY>=document.getElementById("projects").getBoundingClientRect().top+window.pageYOffset-85&&window.scrollY<document.getElementById("blog").getBoundingClientRect().top+window.pageYOffset-85?p("Projects"):window.scrollY>=document.getElementById("blog").getBoundingClientRect().top+window.pageYOffset-85?p("Blog"):p("")})),Object(o.jsxs)("nav",{className:d?"navbar-items active":"navbar-items",children:[Object(o.jsx)("div",{className:d?"navbar-background active":"navbar-background"}),Object(o.jsxs)("h1",{className:"navbar-left",onClick:function(){return b.animateScroll.scrollToTop()},children:["Michael Arnold",Object(o.jsx)("a",{href:"https://github.com/michaelarn0ld",target:"_blank",className:"navbar-left-media-links",style:{marginLeft:10},children:Object(o.jsx)("i",{className:"fab fa-github"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/michaelarnoldcpp",target:"_blank",className:"navbar-left-media-links",children:Object(o.jsx)("i",{className:"fab fa-linkedin",children:" "})}),Object(o.jsx)("a",{href:"https://twitter.com/michaelarn0ld_",target:"_blank",className:"navbar-left-media-links",children:Object(o.jsx)("i",{className:"fab fa-twitter-square",children:" "})})]}),Object(o.jsx)("div",{className:"mobile-menu-icon",onClick:function(){i(!c),g(!0)},children:Object(o.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(o.jsxs)("div",{className:"navbar-right",children:[Object(o.jsx)("ul",{style:window.screen.width>960?{}:w,className:c?"nav-right-links-wrapper active":"nav-right-links-wrapper",children:l.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)(b.Link,{className:O==e.title?e.activeClassName:e.inactiveClassName,to:e.id,smooth:!0,duration:1e3,onClick:function(){i(!1)},children:e.title})},t)}))}),Object(o.jsx)(j,{children:"Contact"})]})]})},m=(c(34),function(){return Object(o.jsxs)("div",{className:"content-landing-page-wrapper",children:[Object(o.jsx)("div",{className:"content-landing-page-text",children:"Hi, I'm Michael"}),Object(o.jsx)("div",{className:"content-landing-page-arrow",children:Object(o.jsx)(b.Link,{to:"home",smooth:!0,duration:1e3,offset:-80,children:Object(o.jsx)("i",{class:"fas fa-chevron-down"})})})]})}),h=(c(35),c.p+"static/media/self-portrait.4aac3446.jpeg"),O=function(e){var t=e.id;return Object(o.jsxs)("div",{id:t,className:"content-home-wrapper",children:[Object(o.jsxs)("div",{className:"content-home-upper-content",children:[Object(o.jsx)("h1",{children:"Who i am"}),Object(o.jsx)("div",{className:"content-home-image",children:Object(o.jsx)("img",{src:h,alt:"Selfie"})}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti voluptates cum voluptatum eaque in accusantium, aliquam doloribus, reiciendis sint architecto ab ipsa saepe? Optio cumque similique quaerat fugiat, facilis quos error provident eos ab est odit ad, quo eius voluptates, itaque facere minima eaque? Esse distinctio inventore alias qui quasi quos magnam soluta, nulla voluptatibus cum mollitia omnis adipisci aliquam animi modi, nihil tempora a. Incidunt consectetur voluptatum eaque totam. Quas, tempore explicabo! Eaque nemo a repudiandae magni, ad distinctio molestias, est fugiat magnam voluptatem sunt placeat natus. Eos sit nulla perspiciatis blanditiis in, quibusdam modi facilis odit fugit?"})]}),Object(o.jsxs)("div",{className:"content-home-lower-content",children:[Object(o.jsxs)("div",{className:"content-home-lower-one",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-laptop-code"})}),Object(o.jsx)("h4",{children:"Fullstack Developer"})]}),Object(o.jsxs)("div",{className:"content-home-lower-two",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-flask"})}),Object(o.jsx)("h4",{children:"Science Enthusiast"})]}),Object(o.jsxs)("div",{className:"content-home-lower-three",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-dumbbell"})}),Object(o.jsx)("h4",{children:"Fitness Fanatic"})]}),Object(o.jsxs)("div",{className:"content-home-lower-four",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-users"})}),Object(o.jsx)("h4",{children:"UI/UX Designer"})]})]})]})},p=(c(36),function(e){var t=e.id;return Object(o.jsxs)("div",{id:t,className:"content-about-wrapper",children:[Object(o.jsx)("div",{className:"content-about-upper-content",children:Object(o.jsx)("h1",{children:"what I do"})}),Object(o.jsxs)("div",{className:"content-about-middle-content",children:[Object(o.jsxs)("div",{className:"content-about-middle-one",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-rocket"})}),Object(o.jsx)("h4",{children:"Quick"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "})]}),Object(o.jsxs)("div",{className:"content-about-middle-two",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-mobile-alt"})}),Object(o.jsx)("h4",{children:"Responsive"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "})]}),Object(o.jsxs)("div",{className:"content-about-middle-three",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-lightbulb"})}),Object(o.jsx)("h4",{children:"Intuitive"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "})]}),Object(o.jsxs)("div",{className:"content-about-middle-four",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{class:"fas fa-balance-scale"})}),Object(o.jsx)("h4",{children:"Balanced"}),Object(o.jsx)("p",{children:"I write clean code with a focus on simplicity and reusability. "})]})]}),Object(o.jsxs)("div",{className:"content-about-lower-content",children:[Object(o.jsx)("h1",{children:"Tools of the trade"}),Object(o.jsxs)("div",{className:"content-about-lower-content-one",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fab fa-html5"}),Object(o.jsx)("p",{children:"HTML 5"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fab fa-css3-alt"}),Object(o.jsx)("p",{children:"CSS 3"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fab fa-js-square"}),Object(o.jsx)("p",{children:"Javascript ES6+"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fab fa-react"}),Object(o.jsx)("p",{children:"ReactJS"})]})]}),Object(o.jsxs)("div",{className:"content-about-lower-content-two",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fab fa-python"}),Object(o.jsx)("p",{children:"Python"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fab fa-node-js"}),Object(o.jsx)("p",{children:"NodeJS"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fab fa-git-alt"}),Object(o.jsx)("p",{children:"Git"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"fas fa-database"}),Object(o.jsx)("p",{className:"shift-icon",children:"MongoDB"})]})]})]})]})}),x=(c(37),function(e){var t=e.id;return Object(o.jsx)("div",{id:t,className:"content-projects-wrapper",children:Object(o.jsx)("h1",{children:"Projects"})})}),f=(c(38),function(e){var t=e.id;return Object(o.jsx)("div",{id:t,className:"content-blog-wrapper",children:Object(o.jsx)("h1",{children:"Blog"})})});var v=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"navbar-wrapper",children:Object(o.jsx)(u,{})}),Object(o.jsx)(m,{}),Object(o.jsx)(O,{id:"home"}),Object(o.jsx)(p,{id:"about"}),Object(o.jsx)(x,{id:"projects"}),Object(o.jsx)(f,{id:"blog"})]})};a.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9c097a5c.chunk.js.map