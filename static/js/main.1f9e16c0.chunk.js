(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var i=s(2),a=s.n(i),c=s(8),n=s.n(c),r=(s(23),s(24),s(3)),o=s(6),l=[{image:"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{image:"https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80"},{image:"https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"},{image:"https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"}],d=(s(25),s(1)),j=function(e){var t=e.slides,s=Object(i.useState)(0),a=Object(r.a)(s,2),c=a[0],n=a[1],j=t.length;return!Array.isArray(t)||t.length<=0?null:Object(d.jsxs)("section",{className:"slider",children:[Object(d.jsx)(o.b,{className:"left-arrow",onClick:function(){n(0===c?j-1:c-1)}}),Object(d.jsx)(o.a,{className:"right-arrow",onClick:function(){n(c===j-1?0:c+1)}}),l.map((function(e,t){return Object(d.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(d.jsx)("img",{src:e.image,alt:"travel",className:"image"})},t)}))]})},u=s(9),m=(s(27),s(10)),b=s(11),h=s(12),p=s(13);s(28);var f=function(e){return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("h2",{children:"WISDOM SCHOOL"}),Object(d.jsx)(u.Navigation,{activeItemId:"/",onSelect:function(e){e.itemId},items:[{title:"Dashboard",itemId:"/dashboard",elemBefore:function(){return Object(d.jsx)(m.a,{})},subNav:[{title:"Performance",itemId:"/dashboard/Performance"},{title:"Profile",itemId:"/dashboard/Profile"},{title:"Progress",itemId:"/dashboard/Progress"},{title:"Scores",itemId:"/dashboard/Scores"}]},{title:"Courses",itemId:"/Courses",elemBefore:function(){return Object(d.jsx)(b.a,{})},subNav:[{title:"Modules",itemId:"/Courses/Modules"}]},{title:"Batches",itemId:"/Batches",elemBefore:function(){return Object(d.jsx)(h.a,{})},subNav:[{title:"Schedule",itemId:"/Batches/Schedule"}]},{title:"Sessions",itemId:"/Sessions",elemBefore:function(){return Object(d.jsx)(p.a,{})},subNav:[{title:"Recorded",itemId:"/Sessions/Recorded"},{title:"Upcoming",itemId:"/Sessions/Upcoming"}]}]})]})},x=s(14),g=s(15),O=s(4),v=s(18),w=s(17),S=(s(29),function(e){Object(v.a)(s,e);var t=Object(w.a)(s);function s(e){var i;return Object(x.a)(this,s),(i=t.call(this,e)).state={percentage:0},i.nextStep=i.nextStep.bind(Object(O.a)(i)),i}return Object(g.a)(s,[{key:"nextStep",value:function(){100!==this.state.percentage&&this.setState((function(e){return{percentage:e.percentage+20}}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"progress",children:[Object(d.jsx)("img",{alt:"courseImage",src:"https://edraak-marketing-uploads.edraak.org/Courses/French-Course-Image1%20(1).jpg"}),Object(d.jsx)("h3",{children:"The Complete French Learning Course: Zero to Mastery"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"WATCH"}),Object(d.jsx)("li",{children:"LISTEN and REPEAT"}),Object(d.jsx)("li",{children:"READ and WRITE"}),Object(d.jsx)("li",{children:"REVISION"}),Object(d.jsx)("li",{children:"Take the QUIZ"})]}),Object(d.jsx)(y,{percentage:this.state.percentage}),Object(d.jsxs)("p",{children:[this.state.percentage,"% completed"]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:this.nextStep,children:"Lesson Finished"})}),Object(d.jsx)("div",{style:{marginTop:"10px",marginBottom:"15px",marginLeft:"2px",cursor:"pointer"},onClick:function(){return e.setState({percentage:0})},children:"Restart course"})]})}}]),s}(a.a.Component)),y=function(e){return Object(d.jsx)("div",{className:"progress-bar",children:Object(d.jsx)(N,{percentage:e.percentage})})},N=function(e){return Object(d.jsx)("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}})},k=S;s(30);var I=function(e){return Object(d.jsxs)("div",{className:"course",children:[Object(d.jsx)("img",{alt:"course",src:"https://learntalk.org/photos/blog/header_photo/32/Learntalk_BlogPosts_09-29-17_-_English_Sites.jpg"}),Object(d.jsx)("h3",{style:{fontSize:"24px"},children:"Master English: Improve Your Speaking, Listening, & Writing"}),Object(d.jsx)("p",{children:"Learn new methods to improve your English proficiency fast"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Speak English with more confidence"}),Object(d.jsx)("li",{children:"Write organized essays that express your ideas clearly"}),Object(d.jsx)("li",{children:"Respond to questions during job interviews and university exams"}),Object(d.jsx)("li",{children:"Keep up with conversations with native speakers"})]}),Object(d.jsx)("div",{style:{marginTop:"5px"},children:Object(d.jsx)("button",{children:"Buy Now"})})]})},q=s(7),M=s(16),B=[{id:1,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",name:"Maria Ferguson",title:"Student, VIT",quote:"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."},{id:2,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",name:"John Doe",title:"Student, NIT",quote:"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."},{id:3,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",name:"Peter Smith",title:"Student, MIT",quote:"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."},{id:4,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",name:"Susan Andersen",title:"Student, NSIT",quote:"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. "}];s(31);var D=function(){var e=Object(i.useState)(B),t=Object(r.a)(e,1)[0],s=Object(i.useState)(0),a=Object(r.a)(s,2),c=a[0],n=a[1];return Object(i.useEffect)((function(){var e=t.length-1;c<0&&n(e),c>e&&n(0)}),[c,t]),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h2",{children:Object(d.jsx)("span",{children:"WHAT STUDENTS SAY?"})})}),Object(d.jsxs)("div",{className:"section-center",children:[t.map((function(e,s){var i=e.id,a=e.image,n=e.name,r=e.title,o=e.quote,l="nextSlide";return s===c&&(l="activeSlide"),(s===c-1||0===c&&s===t.length)&&(l="prevSlide"),Object(d.jsxs)("article",{className:l,children:[Object(d.jsx)("img",{src:a,alt:n,className:"person-img"}),Object(d.jsx)("h4",{children:n}),Object(d.jsx)("p",{className:"title",children:r}),Object(d.jsx)("p",{className:"text",children:o}),Object(d.jsx)(M.a,{})]},i)})),Object(d.jsx)("button",{className:"prev",onClick:function(){return n(c-1)},children:Object(d.jsx)(q.a,{})}),Object(d.jsx)("button",{className:"next",onClick:function(){return n(c+1)},children:Object(d.jsx)(q.b,{})})]})]})};var C=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(f,{className:"sidebar"}),Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)(j,{slides:l,className:"slider"}),Object(d.jsxs)("div",{className:"mid",children:[Object(d.jsx)(k,{className:"progress"}),Object(d.jsx)(I,{className:"course"})]}),Object(d.jsx)(D,{})]})]})})},H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),H()}},[[32,1,2]]]);
//# sourceMappingURL=main.1f9e16c0.chunk.js.map