(this.webpackJsonpaaron=this.webpackJsonpaaron||[]).push([[0],[,function(e){e.exports=JSON.parse('{"backgroundType":"plain","plainBackgroundMode":"daylight","devIntro":"Hello, I\'m Aaron Southammavong","devDesc":"Full-Stack Developer | Coding Enthusiast | Full-Time Learner","gradientColors":"#EE7752, #E73C7E, #23A6D5, #23D5AB","backgroundImageUrl":"http://hdwpro.com/wp-content/uploads/2017/03/Art-Background-Image.png","icons":[{"image":"fab fa-github","url":"https://github.com/aaronsomo"},{"image":"fab fa-linkedin","url":"https://www.linkedin.com/in/aaronsouthammavong/"},{"image":"far fa-address-card","url":"https://resume.creddle.io/resume/g9yezxvbe6n"}]}')},,function(e){e.exports=JSON.parse('{"languages":["JavaScript (ES6+)"],"frameworksLibraries":["React","React-Native","Redux","Node.js","Express","Sequelize","Mongoose"],"databases":["PostgreSQL","MySQL","MongoDB"],"developerTools":["Git","Xcode","Amazon S3","NGINX","Socket.io","Firebase"]}')},,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),l=t.n(i),c=(t(12),t(4)),o=t.n(c),s=t(1),m=t(2),d=t(3),u=function(){return r.a.createElement("div",{id:"about",className:"about-container"},r.a.createElement("div",{className:"bio"},r.a.createElement("div",{className:"about-text"},r.a.createElement("div",{className:"header"},"About Me"),r.a.createElement("div",{className:"text"},"Welcome! I'm Aaron and I have a knack for building creative and meaningful things, be it a bridge in Chicago or a web application on the Internet. As a former Civil Engineer, I\u2019ve worked with different teams to utilize my creative nature in designing and managing many projects, but they haven\u2019t quite filled that void - that curiosity in seeing an idea, solving issues, and having that idea realized.",r.a.createElement("br",null),r.a.createElement("br",null)," I enjoy solving problems that challenge my understanding, as well as engaging myself in finding better solutions. With my proficiency in front-end technologies using JavaScript, React, and React-Native; projects in scaling back-end systems with technologies like Express and Node.js; as well as my comfortability with both SQL and NoSQL databases, I believe I\u2019m equipped to be a strong asset in any engineering environment. I\u2019d love the opportunity to learn more about your challenges and have a discussion about what I can do to help solve them."),r.a.createElement("div",{className:"paragraph"},"Some technologies that I frequent..."),r.a.createElement("div",{className:"technologies-container"},r.a.createElement("div",{className:"technologies"},r.a.createElement("div",{className:"technologies-header"},"Languages"),r.a.createElement("div",null,d.languages.map((function(e,a){return r.a.createElement("div",{className:"text",key:a},e)})))),r.a.createElement("div",{className:"technologies"},r.a.createElement("div",{className:"technologies-header"},"Frameworks & Libraries"),r.a.createElement("div",null,d.frameworksLibraries.map((function(e,a){return r.a.createElement("div",{className:"text",key:a},e)})))),r.a.createElement("div",{className:"technologies"},r.a.createElement("div",{className:"technologies-header"},"Databases"),r.a.createElement("div",null,d.databases.map((function(e,a){return r.a.createElement("div",{className:"text",key:a},e)})))),r.a.createElement("div",{className:"technologies"},r.a.createElement("div",{className:"technologies-header"},"Developer Tools"),r.a.createElement("div",null,d.developerTools.map((function(e,a){return r.a.createElement("div",{className:"text",key:a},e)}))))))))},g=function(){var e=["day","terminal","torquoise","alizarin","amythyst","carrot","peterriver"],a=["night","lightred","lightpurple","lightgreen","lightblue","lightyellow"],t=Object(n.useState)(e),i=Object(m.a)(t,2),l=(i[0],i[1],Object(n.useState)(a)),c=Object(m.a)(l,2),d=(c[0],c[1],Object(n.useState)(s.backgroundType)),g=Object(m.a)(d,2),b=g[0],h=(g[1],Object(n.useState)(s.plainBackgroundMode)),v=Object(m.a)(h,2),p=v[0],E=v[1],f=Object(n.useState)(s.devIntro),k=Object(m.a)(f,2),N=k[0],y=(k[1],Object(n.useState)(s.devDesc)),S=Object(m.a)(y,2),j=S[0],O=(S[1],Object(n.useState)("default")),w=Object(m.a)(O,2),I=w[0],x=w[1],A=Object(n.useState)(0),z=Object(m.a)(A,2),C=z[0],D=z[1],L=Object(n.useState)({}),B=Object(m.a)(L,2),J=B[0],M=B[1],T=Object(n.useState)(s.icons),q=Object(m.a)(T,2),R=q[0],F=(q[1],function(){return"plain"===b&&"nightlight"===p}),Q=function(){return"plain"===b&&"daylight"===p};return Object(n.useEffect)((function(){"plain"!==b&&("gradient"===b?(E("gradient"),M(s.gradientColors?{background:"linear-gradient(-45deg, "+s.gradientColors+")",backgroundSize:"400% 400%"}:{background:"linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",backgroundSize:"400% 400%"})):"image"===b&&(E("full-bg-image"),M(s.backgroundImageUrl?{background:'url("'+s.backgroundImageUrl+'") no-repeat center center fixed',backgroundSize:"cover"}:{background:'url("/images/sample-background.jpg") no-repeat center center fixed',backgroundSize:"cover"})))})),r.a.createElement("div",{className:p,style:J},r.a.createElement("div",{className:"change-mode",onClick:function(){F()?(E("daylight"),D(0),x(e[0])):Q()&&(E("nightlight"),D(0),x(a[0]))}}),r.a.createElement("div",{className:I,onClick:function(){F()&&C<a.length-1?(D(C+1),x(a[C+1])):Q()&&C<e.length-1?(D(C+1),x(e[C+1])):(D(0),x(F()?a[0]:Q()?e[0]:void 0))}},r.a.createElement("main",{className:"App-main"},r.a.createElement("h1",{className:"intro"},N),r.a.createElement("div",{className:"tagline"},r.a.createElement(o.a,null,j)),r.a.createElement("div",{className:"icons-social"},R.map((function(e,a){return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.url),key:a},r.a.createElement("i",{className:"".concat(e.image)}))})))),r.a.createElement("div",{className:"App-main"},r.a.createElement(u,null))))},b=(t(13),function(e){return r.a.createElement("div",null,r.a.createElement(g,null))});l.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.6bd4bf36.chunk.js.map