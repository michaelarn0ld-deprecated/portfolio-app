(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var i=c(2),s=c(9),n=c.n(s),a=c(4),o=c(18),l=(c(23),c(5)),r=[{title:"Home",url:"#home",id:"home",inactiveClassName:"nav-links",activeClassName:"nav-links home"},{title:"About",url:"#about",id:"about",inactiveClassName:"nav-links",activeClassName:"nav-links about"},{title:"Projects",url:"#projects",id:"projects",inactiveClassName:"nav-links",activeClassName:"nav-links projects"},{title:"Blog",url:"#blog",id:"blog",inactiveClassName:"nav-links",activeClassName:"nav-links blog"},{title:"Contact",url:"#",id:"",inactiveClassName:"nav-links-mobile-button",activeClassName:"nav-links-mobile-button"}],j=(c(24),c(25),c(0)),d=["button--primary","button--outline"],b=["button--medium","button--large"],m=function(e){var t=e.children,c=e.type,i=e.onClick,s=e.buttonStyle,n=e.buttonSize,a=d.includes(s)?s:d[0],o=b.includes(n)?n:b[0];return Object(j.jsx)("button",{className:"button ".concat(a," ").concat(o),onClick:i,type:c,children:t})},h=c(3);var u=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),a=Object(l.a)(n,2),o=a[0],d=a[1],b=Object(i.useState)(""),u=Object(l.a)(b,2),p=u[0],O=u[1],f=Object(i.useState)(!1),x=Object(l.a)(f,2),v=x[0],g=x[1],y=v?{}:{display:"none"};return window.addEventListener("scroll",(function(){window.scrollY>=80?d(!0):d(!1)})),window.addEventListener("scroll",(function(){window.scrollY>=document.getElementById("home").getBoundingClientRect().top+window.pageYOffset-85&&window.scrollY<document.getElementById("about").getBoundingClientRect().top+window.pageYOffset-85?O("Home"):window.scrollY>=document.getElementById("about").getBoundingClientRect().top+window.pageYOffset+-85&&window.scrollY<document.getElementById("projects").getBoundingClientRect().top+window.pageYOffset-85?O("About"):window.scrollY>=document.getElementById("projects").getBoundingClientRect().top+window.pageYOffset-85&&window.scrollY<document.getElementById("blog").getBoundingClientRect().top+window.pageYOffset-85?O("Projects"):window.scrollY>=document.getElementById("blog").getBoundingClientRect().top+window.pageYOffset-85?O("Blog"):O("")})),Object(j.jsxs)("nav",{className:o?"navbar-items active":"navbar-items",children:[Object(j.jsx)("div",{className:o?"navbar-background active":"navbar-background"}),Object(j.jsxs)("h1",{className:"navbar-left",onClick:function(){return h.animateScroll.scrollToTop()},children:[Object(j.jsx)("i",{class:"fas fa-flask"}),"Michael Arnold"]}),Object(j.jsx)("div",{className:"mobile-menu-icon",onClick:function(){s(!c),g(!0)},children:Object(j.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(j.jsxs)("div",{className:"navbar-right",children:[Object(j.jsx)("ul",{style:window.screen.width>960?{}:y,className:c?"nav-right-links-wrapper active":"nav-right-links-wrapper",children:r.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)(h.Link,{className:p==e.title?e.activeClassName:e.inactiveClassName,to:e.id,smooth:!0,duration:1e3,offset:o?-55:-80,onClick:function(){s(!1)},children:e.title})},t)}))}),Object(j.jsx)(m,{children:"Contact"})]})]})},p=(c(37),c(1)),O=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null);return Object(i.useEffect)((function(){a.a.to(e,1.5,{opacity:1,y:-80,ease:p.c.easeOut,delay:.5}),a.a.to(t,1.5,{opacity:1,y:-100,ease:p.b.easeOut,delay:1.5})})),Object(j.jsxs)("div",{className:"content-landing-page-wrapper",children:[Object(j.jsx)("div",{className:"content-landing-page-text",ref:function(t){return e=t},children:"Hi, I'm Michael"}),Object(j.jsx)("div",{className:"content-landing-page-arrow",ref:function(e){return t=e},children:Object(j.jsx)(h.Link,{to:"home",smooth:!0,duration:1e3,offset:-80,children:Object(j.jsx)("i",{class:"fas fa-chevron-down"})})})]})},f=(c(38),c.p+"static/media/professional-headshot.e9b99b67.jpg"),x=function(e){var t=e.id;return Object(j.jsxs)("div",{id:t,className:"content-home-wrapper",children:[Object(j.jsxs)("div",{className:"content-home-upper-content",children:[Object(j.jsx)("h1",{children:"Who i am"}),Object(j.jsx)("div",{className:"content-home-image",children:Object(j.jsx)("img",{src:f,alt:"Selfie"})}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti voluptates cum voluptatum eaque in accusantium, aliquam doloribus, reiciendis sint architecto ab ipsa saepe? Optio cumque similique quaerat fugiat, facilis quos error provident eos ab est odit ad, quo eius voluptates, itaque facere minima eaque? Esse distinctio inventore alias qui quasi quos magnam soluta, nulla voluptatibus cum mollitia omnis adipisci aliquam animi modi, nihil tempora a. Incidunt consectetur voluptatum eaque totam."})]}),Object(j.jsxs)("div",{className:"content-home-lower-content",children:[Object(j.jsxs)("div",{className:"content-home-lower-one",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-laptop-code"})}),Object(j.jsx)("h4",{children:"Software Developer"})]}),Object(j.jsxs)("div",{className:"content-home-lower-two",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-flask"})}),Object(j.jsx)("h4",{children:"Science Enthusiast"})]}),Object(j.jsxs)("div",{className:"content-home-lower-three",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-dumbbell"})}),Object(j.jsx)("h4",{children:"Fitness Fanatic"})]}),Object(j.jsxs)("div",{className:"content-home-lower-four",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-users"})}),Object(j.jsx)("h4",{children:"UI/UX Designer"})]})]})]})},v=(c(39),function(e){var t=e.id;return Object(j.jsxs)("div",{id:t,className:"content-about-wrapper",children:[Object(j.jsx)("div",{className:"content-about-upper-content",children:Object(j.jsx)("h1",{children:"what I do"})}),Object(j.jsxs)("div",{className:"content-about-middle-content",children:[Object(j.jsxs)("div",{className:"content-about-middle-one",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-rocket"})}),Object(j.jsx)("h4",{children:"Quick"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "})]}),Object(j.jsxs)("div",{className:"content-about-middle-two",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-mobile-alt"})}),Object(j.jsx)("h4",{children:"Responsive"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "})]}),Object(j.jsxs)("div",{className:"content-about-middle-three",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-lightbulb"})}),Object(j.jsx)("h4",{children:"Intuitive"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "})]}),Object(j.jsxs)("div",{className:"content-about-middle-four",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-balance-scale"})}),Object(j.jsx)("h4",{children:"Balanced"}),Object(j.jsx)("p",{children:"I write clean code with a focus on simplicity and reusability. "})]})]}),Object(j.jsxs)("div",{className:"content-about-lower-content",children:[Object(j.jsx)("h1",{children:"my toolbox"}),Object(j.jsxs)("div",{className:"content-about-lower-content-one",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fab fa-html5"}),Object(j.jsx)("p",{children:"HTML 5"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fab fa-css3-alt"}),Object(j.jsx)("p",{children:"CSS 3"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fab fa-js-square"}),Object(j.jsx)("p",{children:"Javascript ES6+"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fab fa-react"}),Object(j.jsx)("p",{children:"ReactJS"})]})]}),Object(j.jsxs)("div",{className:"content-about-lower-content-two",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fab fa-python"}),Object(j.jsx)("p",{children:"Python"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fab fa-node-js"}),Object(j.jsx)("p",{children:"NodeJS"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fab fa-git-alt"}),Object(j.jsx)("p",{children:"Git"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{class:"fas fa-database"}),Object(j.jsx)("p",{className:"shift-icon",children:"MongoDB"})]})]})]})]})}),g=(c(40),function(e){var t=e.id;return Object(j.jsxs)("div",{id:t,className:"content-projects-wrapper",children:[Object(j.jsx)("h1",{children:"projects"}),Object(j.jsxs)("div",{className:"content-projects-items-bin-one",children:[Object(j.jsxs)("div",{className:"content-projects-one",children:[Object(j.jsx)("div",{className:"project-img"}),Object(j.jsxs)("div",{className:"project-description",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-cloud-sun-rain"})}),Object(j.jsx)("h3",{children:"Weather Application"})]}),Object(j.jsxs)("div",{className:"content-projects-one-live",children:[Object(j.jsx)("h4",{children:"This app utilizes a REST API to provide current and forecasted weather conditions."}),Object(j.jsx)("a",{href:"https://michaelarn0ld.github.io/weather-app/",target:"_blank",className:"navbar-left-media-links",children:Object(j.jsx)("h2",{children:"Visit Website "})})]})]}),Object(j.jsx)("div",{className:"content-projects-two",children:Object(j.jsx)("div",{className:"project-img"})}),Object(j.jsx)("div",{className:"content-projects-three",children:Object(j.jsx)("div",{className:"project-img"})})]}),Object(j.jsxs)("div",{className:"content-projects-items-bin-two",children:[Object(j.jsx)("div",{className:"content-projects-four",children:Object(j.jsx)("div",{className:"project-img"})}),Object(j.jsx)("div",{className:"content-projects-five",children:Object(j.jsx)("div",{className:"project-img"})}),Object(j.jsx)("div",{className:"content-projects-six",children:Object(j.jsx)("div",{className:"project-img"})})]})]})}),y=(c(41),function(e){var t=e.id;return Object(j.jsxs)("div",{id:t,className:"content-blog-wrapper",children:[Object(j.jsx)("h1",{children:"blog"}),Object(j.jsxs)("div",{className:"content-blog-items-bin-one",children:[Object(j.jsxs)("div",{className:"content-blog-one",children:[Object(j.jsx)("div",{className:"project-img"}),Object(j.jsx)("a",{href:"https://michaelarn0ld.medium.com/i-fell-in-love-with-code-leaping-from-chemical-engineering-to-software-development-9ccac9f430a7",target:"_blank",className:"navbar-left-media-links",children:Object(j.jsxs)("div",{className:"project-description",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("i",{class:"fas fa-file-code"})}),Object(j.jsx)("h3",{children:"I fell in love with code \u2014 Leaping from Chemical Engineering to Software Development."})]})})]}),Object(j.jsx)("div",{className:"content-blog-two",children:Object(j.jsx)("div",{className:"project-img"})}),Object(j.jsx)("div",{className:"content-blog-three",children:Object(j.jsx)("div",{className:"project-img"})})]}),Object(j.jsxs)("div",{className:"content-blog-items-bin-two",children:[Object(j.jsx)("h1",{onClick:function(){return h.animateScroll.scrollToTop()},children:Object(j.jsx)("i",{class:"fas fa-chevron-circle-up"})}),Object(j.jsxs)("div",{className:"content-blog-items-media",children:[Object(j.jsx)("a",{href:"https://github.com/michaelarn0ld",target:"_blank",className:"blog-media-links",children:Object(j.jsx)("i",{className:"fab fa-github"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/michaelarnoldcpp",target:"_blank",className:"blog-media-links",children:Object(j.jsx)("i",{className:"fab fa-linkedin",children:" "})}),Object(j.jsx)("a",{href:"https://twitter.com/michaelarn0ld_",target:"_blank",className:"blog-media-links",children:Object(j.jsx)("i",{className:"fab fa-twitter-square",children:" "})}),Object(j.jsx)("a",{href:"https://michaelarn0ld.medium.com/",target:"_blank",className:"blog-media-links",children:Object(j.jsx)("i",{class:"fab fa-medium"})}),Object(j.jsx)("a",{href:"https://twitter.com/michaelarn0ld_",target:"_blank",className:"blog-media-links",children:Object(j.jsx)("i",{class:"fab fa-youtube"})})]}),Object(j.jsx)("h4",{children:"\xa9 Michael Arnold 2021"})]})]})});var w=function(){a.b.registerPlugin(o.a);var e=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t=e.current,c=a.b.timeline({scrollTrigger:{trigger:t.querySelector(".content-home-upper-content"),start:"top center"}});c.fromTo(".content-home-upper-content > h1",{opacity:0,y:-30},{opacity:1,y:0,duration:.5,delay:.5}),c.fromTo(".content-home-upper-content > div",{opacity:0,y:-30},{opacity:1,y:0,duration:.5}),c.fromTo(".content-home-upper-content > p",{opacity:0,y:-30},{opacity:1,y:0,duration:.5}),c.fromTo(".content-home-lower-content",{opacity:0,y:-30},{opacity:1,y:0,duration:.5});var i=a.b.timeline({scrollTrigger:{trigger:t.querySelector(".content-about-middle-content"),start:"top center"}});i.fromTo(".content-about-upper-content",{opacity:0,y:-30},{opacity:1,y:0,duration:.5,delay:.5}),i.fromTo(".content-about-middle-one",{opacity:0,y:-30},{opacity:1,y:0,duration:.3,delay:.15}),i.fromTo(".content-about-middle-two",{opacity:0,y:-30},{opacity:1,y:0,duration:.3}),i.fromTo(".content-about-middle-three",{opacity:0,y:-30},{opacity:1,y:0,duration:.3}),i.fromTo(".content-about-middle-four",{opacity:0,y:-30},{opacity:1,y:0,duration:.3}),i.fromTo(".content-about-lower-content > h1",{opacity:0,y:-30},{opacity:1,y:0,duration:.5,delay:.3}),i.fromTo(".content-about-lower-content > div",{opacity:0},{opacity:1,duration:.5,delay:.3});var s=a.b.timeline({scrollTrigger:{trigger:t.querySelector(".content-projects-items-bin-one"),start:"top center"}});s.fromTo(".content-projects-wrapper > h1",{opacity:0,y:-30},{opacity:1,y:0,duration:.6,delay:.5}),s.fromTo(".content-projects-one",{opacity:0,y:-30},{opacity:1,y:0,duration:.3}),s.fromTo(".content-projects-two",{opacity:0,y:-30},{opacity:1,y:0,duration:.3}),s.fromTo(".content-projects-three",{opacity:0,y:-30},{opacity:1,y:0,duration:.3}),s.fromTo(".content-projects-four",{opacity:0,y:30},{opacity:1,y:0,duration:.3}),s.fromTo(".content-projects-five",{opacity:0,y:30},{opacity:1,y:0,duration:.3}),s.fromTo(".content-projects-six",{opacity:0,y:30},{opacity:1,y:0,duration:.3})}),[]),Object(j.jsxs)("div",{ref:e,className:"App",children:[Object(j.jsx)("div",{className:"navbar-wrapper",children:Object(j.jsx)(u,{})}),Object(j.jsx)(O,{}),Object(j.jsx)(x,{id:"home"}),Object(j.jsx)(v,{id:"about"}),Object(j.jsx)(g,{id:"projects"}),Object(j.jsx)(y,{id:"blog"})]})};n.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.95e86b3b.chunk.js.map