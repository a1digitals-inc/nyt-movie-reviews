(window["webpackJsonpnyt-movie-reviews"]=window["webpackJsonpnyt-movie-reviews"]||[]).push([[0],{55:function(e,n,t){e.exports=t.p+"static/media/nyt.0a6ec0a2.svg"},58:function(e,n,t){e.exports=t.p+"static/media/review.1653301d.svg"},59:function(e,n,t){e.exports=t.p+"static/media/critic.4afd3ac5.svg"},60:function(e,n,t){e.exports=t.p+"static/media/favorite.d6e7adef.svg"},61:function(e,n,t){e.exports=t.p+"static/media/check.14b7074c.svg"},62:function(e,n,t){e.exports=t.p+"static/media/empty-image.c76326cd.svg"},63:function(e,n,t){e.exports=t.p+"static/media/empty-critic.5941113a.svg"},67:function(e,n,t){e.exports=t(95)},95:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(19),i=t.n(c),o=t(14),l=t(21),u=t(20),s=t(22),d=t(64),p=t(28),f=t(8),m={initialLoading:!1,loadingMore:!1,searchCounter:0,filters:{},reviews:[],hasMore:!1};var b={loading:!1,critics:[]};var v=[];var g=Object(s.c)({reviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"@reviews/SEARCH_REQUEST":return Object(f.a)(Object(f.a)({},e),{},{initialLoading:!0,loadingMore:!1,searchCounter:0,filters:n.payload.filters,reviews:[],hasMore:!1});case"@reviews/SEARCH_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{initialLoading:!1,searchCounter:e.searchCounter+1,reviews:n.payload.reviews,hasMore:n.payload.hasMore});case"@reviews/SEARCH_FAILURE":return Object(f.a)(Object(f.a)({},e),{},{initialLoading:!1});case"@reviews/SEARCH_MORE_REQUEST":return Object(f.a)(Object(f.a)({},e),{},{loadingMore:!0});case"@reviews/SEARCH_MORE_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{loadingMore:!1,searchCounter:e.searchCounter+1,reviews:[].concat(Object(p.a)(e.reviews),Object(p.a)(n.payload.reviews)),hasMore:n.payload.hasMore});case"@reviews/SEARCH_MORE_FAILURE":return Object(f.a)(Object(f.a)({},e),{},{loadingMore:!1});default:return e}},critics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"@critics/SEARCH_REQUEST":return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case"@critics/SEARCH_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{loading:!1,critics:n.payload.critics});case"@critics/SEARCH_FAILURE":return Object(f.a)(Object(f.a)({},e),{},{loading:!1});default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"@favorites/ADD":return[].concat(Object(p.a)(e),[n.payload.review]);case"@favorites/REMOVE":return e.filter((function(e){return e.display_title!==n.payload.title||e.byline!==n.payload.criticName}));default:return e}}}),x=t(12),E=t.n(x),y=t(13),h=t(24),O=t(32),w=t(33),j=t(54),k=t.n(j).a.create({baseURL:"https://api.nytimes.com/svc/movies/v2"}),C="IL5jD4w0aSHyYu1MeAKKf1MB8GWaGPzp",R=20,S=new(function(){function e(){Object(O.a)(this,e)}return Object(w.a)(e,null,[{key:"run",value:function(){var e=Object(h.a)(E.a.mark((function e(n){var t,r,a,c,i,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.order,r=n.query,a=n.reviewer,c=n.criticsPick,i=n.offset,e.prev=1,e.next=4,k.get("reviews/search.json?api-key=".concat(C).concat(c?"&critics-pick=Y":"").concat(t?"&order=".concat(t):"").concat(r?"&query=".concat(r):"").concat(a?"&reviewer=".concat(a):"").concat(i?"&offset=".concat(i):""));case 4:return o=e.sent,e.abrupt("return",{success:!0,data:o.data.results,hasMore:o.data.has_more});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{success:!1,data:[],hasMore:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()}]),e}());function _(e){return{type:"@reviews/SEARCH_REQUEST",payload:{filters:e}}}function A(e,n){return{type:"@reviews/SEARCH_SUCCESS",payload:{reviews:e,hasMore:n}}}function M(e,n){return{type:"@reviews/SEARCH_MORE_SUCCESS",payload:{reviews:e,hasMore:n}}}var H=E.a.mark(U),P=E.a.mark(F);function U(e){var n,t,r,a;return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,c.prev=1,c.next=4,S.constructor.run(Object(f.a)(Object(f.a)({},n.filters),{},{offset:0}));case 4:if(!(t=c.sent).success){c.next=11;break}return r=t.data,a=t.hasMore,c.next=9,Object(y.b)(A(r,a));case 9:c.next=14;break;case 11:return u.b.error("Failed to load data. Please, try again later."),c.next=14,Object(y.b)({type:"@reviews/SEARCH_FAILURE"});case 14:c.next=21;break;case 16:return c.prev=16,c.t0=c.catch(1),u.b.error("Failed to load data. Please, try again later."),c.next=21,Object(y.b)({type:"@reviews/SEARCH_FAILURE"});case 21:case"end":return c.stop()}}),H,null,[[1,16]])}function F(){var e,n,t,r,a,c;return E.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(y.c)((function(e){return e.reviews.searchCounter}));case 3:return e=i.sent,i.next=6,Object(y.c)((function(e){return e.reviews.filters}));case 6:return n=i.sent,t=e*R,i.next=10,S.constructor.run(Object(f.a)(Object(f.a)({},n),{},{offset:t}));case 10:if(!(r=i.sent).success){i.next=17;break}return a=r.data,c=r.hasMore,i.next=15,Object(y.b)(M(a,c));case 15:i.next=20;break;case 17:return u.b.error("Failed to load data. Please, try again later."),i.next=20,Object(y.b)({type:"@reviews/SEARCH_MORE_FAILURE"});case 20:i.next=27;break;case 22:return i.prev=22,i.t0=i.catch(0),u.b.error("Failed to load data. Please, try again later."),i.next=27,Object(y.b)({type:"@reviews/SEARCH_MORE_FAILURE"});case 27:case"end":return i.stop()}}),P,null,[[0,22]])}var L=Object(y.a)([Object(y.d)("@reviews/SEARCH_REQUEST",U),Object(y.d)("@reviews/SEARCH_MORE_REQUEST",F)]),T=new(function(){function e(){Object(O.a)(this,e)}return Object(w.a)(e,null,[{key:"run",value:function(){var e=Object(h.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("critics/all.json?api-key=".concat(C));case 3:return n=e.sent,e.abrupt("return",{success:!0,data:n.data.results});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{success:!1,data:[]});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}());function N(e){return{type:"@critics/SEARCH_SUCCESS",payload:{critics:e}}}var I=E.a.mark(D);function D(){var e,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.constructor.run();case 3:if(!(e=t.sent).success){t.next=10;break}return n=e.data,t.next=8,Object(y.b)(N(n));case 8:t.next=13;break;case 10:return u.b.error("Failed to load data. Please, try again later."),t.next=13,Object(y.b)({type:"@critics/SEARCH_FAILURE"});case 13:t.next=20;break;case 15:return t.prev=15,t.t0=t.catch(0),u.b.error("Failed to load data. Please, try again later."),t.next=20,Object(y.b)({type:"@critics/SEARCH_FAILURE"});case 20:case"end":return t.stop()}}),I,null,[[0,15]])}var Y=Object(y.a)([Object(y.d)("@critics/SEARCH_REQUEST",D)]),Q=E.a.mark(z);function z(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([L,Y]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),Q)}var q=Object(d.a)(),B=Object(s.a)(q),G=Object(s.e)(g,B);q.run(z);var K=G,J=t(11),V=t(55),W=t.n(V),X=t(6),Z=t(7),$=t(15);function ee(){var e=Object(X.a)(["\n  color: ",";\n"]);return ee=function(){return e},e}function ne(){var e=Object(X.a)(["\n  display: flex;\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #eee;\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    a {\n      display: block;\n      margin-top: 2px;\n      font-size: 12px;\n      font-weight: bold;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(X.a)(["\n  height: 64px;\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  nav {\n    display: flex;\n    align-items: center;\n\n    img {\n      margin-right: 20px;\n      padding-right: 20px;\n      border-right: 1px solid #eee;\n    }\n  }\n\n  aside {\n    display: flex;\n    align-items: center;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(X.a)(["\n  background: #fff;\n  padding: 0 30px;\n"]);return re=function(){return e},e}var ae=Z.b.div(re()),ce=Z.b.div(te()),ie=Z.b.div(ne(),Object($.a)(.5,"#999")),oe=Object(Z.b)(l.b)(ee(),(function(e){return e.current?Object($.a)(.5,"#999"):"#999"})),le=Object(J.f)((function(e){var n=e.location.pathname;return a.a.createElement(ae,null,a.a.createElement(ce,null,a.a.createElement("nav",null,a.a.createElement(l.b,{to:"/"},a.a.createElement("img",{src:W.a,alt:"NYTLogo"}))),a.a.createElement("aside",null,a.a.createElement(ie,null,a.a.createElement("div",null,a.a.createElement(oe,{to:"/reviews",current:"/reviews"===n?1:0},"Reviews"),a.a.createElement(oe,{to:"/critics",current:"/critics"===n?1:0},"Critics"),a.a.createElement(oe,{to:"/favorites",current:"/favorites"===n?1:0},"Favorites"))))))}));function ue(){var e=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 90px;\n"]);return ue=function(){return e},e}function se(){var e=Object(X.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-style: oblique;\n"]);return se=function(){return e},e}var de=Z.b.div(se()),pe=Z.b.div(ue()),fe=function(e){var n=e.Code,t=e.Message;return a.a.createElement(de,null,a.a.createElement(pe,null,a.a.createElement("strong",null,n),a.a.createElement("strong",null,t)))};fe.defaultProps={Code:null};var me=fe,be=t(58),ve=t.n(be),ge=t(59),xe=t.n(ge),Ee=t(60),ye=t.n(Ee);function he(){var e=Object(X.a)(["\n  padding: 20px;\n  border-radius: 4px;\n  color: #000000;\n  background: #fff;\n  text-align: center;\n  min-height: 220px;\n\n  &:hover {\n    color: #000000;\n    background: #e6e6e6;\n  }\n\n  strong {\n    display: block;\n    font-size: 20px;\n    font-weight: normal;\n  }\n\n  img {\n    height: 60px;\n    margin-top: 15px;\n  }\n\n  span {\n    display: block;\n    color: #999;\n    margin-top: 30px;\n  }\n"]);return he=function(){return e},e}function Oe(){var e=Object(X.a)(["\n  max-width: 1020px;\n  margin: 0 auto;\n  padding: 0 20px 50px;\n\n  display: flex;\n  flex-direction: column;\n\n  ul {\n    display: grid;\n    grid-gap: 15px;\n    margin-top: 30px;\n\n    @media (min-width: 900px) {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n"]);return Oe=function(){return e},e}var we=Z.b.div(Oe()),je=Object(Z.b)(l.b)(he());function ke(){return a.a.createElement(we,null,a.a.createElement("ul",null,a.a.createElement(je,{to:"/reviews"},a.a.createElement("strong",null,"Reviews"),a.a.createElement("img",{src:ve.a,alt:"ReviewLogo"}),a.a.createElement("span",null,"Search New York Times movie reviews by keyword and filter by Critic\u2019s Pick and Reviewer. Supports ordering results by-title, by-publication-date, or by-opening-date.")),a.a.createElement(je,{to:"/critics"},a.a.createElement("strong",null,"Critics"),a.a.createElement("img",{src:xe.a,alt:"CriticLogo"}),a.a.createElement("span",null,"Get New York Times movie critics. You can either specify the reviewer name.")),a.a.createElement(je,{to:"/favorites"},a.a.createElement("strong",null,"Favorites"),a.a.createElement("img",{src:ye.a,alt:"favoriteLogo"}),a.a.createElement("span",null,"Favorites New York Times movie reviews."))))}var Ce=t(27),Re=t(35);function Se(){var e=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 90px;\n\n  img {\n    height: 53px;\n  }\n"]);return Se=function(){return e},e}function _e(){var e=Object(X.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _e=function(){return e},e}var Ae=Z.b.div(_e()),Me=Z.b.div(Se());function He(){var e=Object(X.a)(["\n  background-color: black;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  margin: 0 5px;\n  animation: "," 0.5s linear infinite;\n  animation-delay: ",";\n"]);return He=function(){return e},e}function Pe(){var e=Object(X.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(X.a)(["\n  0% { margin-bottom: 0; }\n  50% { margin-bottom: 15px }\n  100% { margin-bottom: 0 }\n"]);return Ue=function(){return e},e}var Fe=Object(Z.c)(Ue()),Le=Z.b.div(Pe()),Te=Z.b.div(He(),Fe,(function(e){return e.delay}));function Ne(){return a.a.createElement(Le,null,a.a.createElement(Te,{delay:"0s"}),a.a.createElement(Te,{delay:".1s"}),a.a.createElement(Te,{delay:".2s"}))}function Ie(){return a.a.createElement(Ae,null,a.a.createElement(Me,null,a.a.createElement(Ne,null)))}var De=t(99);function Ye(){var e=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  margin-top: 15px;\n  border-radius: 4px;\n  background: #fff;\n\n  &:hover {\n    background: ",";\n  }\n\n  div {\n    strong {\n      display: block;\n      font-size: 20px;\n    }\n\n    small {\n      display: flex;\n      align-items: stretch;\n      padding: 0;\n      margin: 2px 0 0 0;\n      color: #999;\n\n      img {\n        width: 16px;\n        height: 16px;\n        padding: 0;\n        margin: 0 4px 0 0;\n      }\n    }\n\n    span {\n      display: block;\n      margin-top: 15px;\n      color: #000000;\n    }\n\n    a {\n      display: block;\n      margin-top: 15px;\n      color: #999;\n      font-weight: bold;\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    button {\n      display: block;\n      margin-top: 5px;\n      color: #999;\n      background-color: transparent;\n      font-weight: bold;\n      border: none;\n      cursor: pointer;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  img {\n    margin: 0 0 0 20px;\n    height: 120px;\n\n    @media (max-width: 480px) {\n      display: none;\n    }\n  }\n"]);return Ye=function(){return e},e}var Qe=Z.b.div(Ye(),Object($.a)(.04,"#fff"),Object($.a)(.5,"#999"),Object($.a)(.5,"#999")),ze=t(61),qe=t.n(ze),Be=t(62),Ge=t.n(Be),Ke=function(e){var n=e.rawData,t=n.display_title,c=n.summary_short,i=n.publication_date,l=n.multimedia,u=n.link.url,s=n.byline,d=n.critics_pick,p=Object(o.b)(),f=Object(r.useState)({title:t,description:c,date:i,image:l&&l.src?l.src:Ge.a,url:u,criticName:s,criticsPick:!!d}),m=Object(Re.a)(f,1)[0];var b=Object(o.c)((function(e){return e.favorites.find((function(e){return e.display_title===m.title&&e.byline===m.criticName}))}));return a.a.createElement(Qe,null,a.a.createElement("div",null,a.a.createElement("strong",null,m.title),m.criticsPick&&a.a.createElement("small",null,a.a.createElement("img",{src:qe.a,alt:"NYTCriticsPick"}),"NYT Critic Pick"),a.a.createElement("small",null,Object(De.a)(new Date(m.date),"P")),a.a.createElement("small",null,"By ",m.criticName),a.a.createElement("span",null,m.description),a.a.createElement("a",{href:m.url,target:"_blank",rel:"noopener noreferrer"},"Read review"),b?a.a.createElement("button",{type:"button",onClick:function(){p(function(e,n){return{type:"@favorites/REMOVE",payload:{title:e,criticName:n}}}(m.title,m.criticName))}},"Remove from favorites"):a.a.createElement("button",{type:"button",onClick:function(){p({type:"@favorites/ADD",payload:{review:n}})}},"Add to favorites")),a.a.createElement("img",{src:m.image,alt:"MovieImage"}))};function Je(){var e=Object(X.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  margin-top: 20px;\n"]);return Je=function(){return e},e}var Ve=Z.b.div(Je());function We(){return a.a.createElement(Ve,null,a.a.createElement(Ne,null))}var Xe=function(e){Object(r.useEffect)((function(){var n=function(){var n=window.innerHeight,t=document.documentElement;n+t.scrollTop===t.offsetHeight&&e()},t=window,r=t.addEventListener,a=t.removeEventListener;return r("scroll",n),function(){return a("scroll",n)}}),[e])};function Ze(){var e=Object(X.a)(["\n  max-width: 1020px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 0 20px 50px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(X.a)(["\n  max-width: 900px;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin: 0 auto;\n\n  form {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: space-between;\n\n    input,\n    select {\n      background: rgba(0, 0, 0, 0.1);\n      border: 0;\n      border-radius: 4px;\n      padding: 10px 15px;\n      margin: 15px 0 15px 0;\n    }\n\n    label {\n      input,\n      span {\n        font-size: smaller;\n        margin: 0 5px 0 0;\n        padding: 0;\n      }\n\n      input {\n        vertical-align: sub;\n      }\n    }\n\n    button {\n      height: 44px;\n      margin: 15px 0 15px 0;\n      padding: 10px 20px;\n      border: 0;\n      border-radius: 4px;\n      font-size: 16px;\n      font-weight: bold;\n      color: #fff;\n      background: #999;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n\n    @media (min-width: 900px) {\n      flex-direction: row;\n      align-items: center;\n    }\n  }\n"]);return $e=function(){return e},e}function en(){var e=Object(X.a)(["\n  background: #e6e6e6;\n  padding: 0 30px;\n"]);return en=function(){return e},e}var nn=Z.b.div(en()),tn=Z.b.div($e(),Object($.a)(.5,"#999")),rn=Z.b.div(Ze()),an=function(e){var n=e.match.params.critic,t=Object(o.b)(),c=Object(o.c)((function(e){return e.reviews.initialLoading})),i=Object(o.c)((function(e){return e.reviews.loadingMore})),l=Object(o.c)((function(e){return e.reviews.filters})),u=Object(o.c)((function(e){return e.reviews.reviews})),s=Object(o.c)((function(e){return e.reviews.hasMore})),d=Object(r.useState)(l),p=Object(Re.a)(d,2),m=p[0],b=p[1];Object(r.useEffect)((function(){t(_({order:"",query:"",reviewer:n,criticsPick:""}))}),[t,n]);var v=Object(r.useCallback)((function(){s&&t({type:"@reviews/SEARCH_MORE_REQUEST"})}),[t,s]);function g(e){e.preventDefault();var n=e.target,t=n.name,r=n.checked,a=n.value;["criticsPick"].includes(t)?b(Object(f.a)(Object(f.a)({},m),{},Object(Ce.a)({},t,r))):b(Object(f.a)(Object(f.a)({},m),{},Object(Ce.a)({},t,a)))}function x(){return(x=Object(h.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(_(m));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Xe(v),c?a.a.createElement(Ie,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,null,a.a.createElement(tn,null,a.a.createElement("form",{autoComplete:"off",onSubmit:function(e){return x.apply(this,arguments)}},a.a.createElement("select",{name:"order",onChange:g,value:m.order},a.a.createElement("option",{value:""},"Order"),a.a.createElement("option",{value:"by-title"},"Order by Title"),a.a.createElement("option",{value:"by-publication-date"},"Order by Publication date"),a.a.createElement("option",{value:"by-opening-date"},"Order by Opening date")),a.a.createElement("input",{type:"text",name:"query",placeholder:"Keyword",onChange:g,value:m.query}),a.a.createElement("input",{type:"text",name:"reviewer",placeholder:"Reviewer",onChange:g,value:m.reviewer}),a.a.createElement("label",{htmlFor:"criticsPick"},a.a.createElement("input",{type:"checkbox",id:"criticsPick",name:"criticsPick",onChange:g,checked:m.criticsPick}),a.a.createElement("span",null,"NYT Critic\u2019s Pick")),a.a.createElement("button",{type:"submit"},"Search")))),u.length?a.a.createElement(rn,null,u.map((function(e){return a.a.createElement(Ke,{key:"".concat(e.display_title,"-").concat(e.byline),rawData:e})})),i&&a.a.createElement(We,null)):a.a.createElement(me,{Message:"No records found"}))};an.defaultProps={match:{params:{critic:null}}};var cn=an;function on(){var e=Object(X.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n\n  li {\n    width: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 20px;\n    margin: 0 15px 15px 0;\n    background: #fff;\n    border: 1px solid ",";\n    border-radius: 4px;\n\n    &:hover {\n      background: ",";\n    }\n\n    div {\n      max-height: 250px;\n      overflow: hidden;\n    }\n\n    strong {\n      margin-top: 15px;\n      font-size: 20px;\n      color: #000000;\n    }\n\n    small {\n      margin-top: 15px;\n      color: #999;\n      max-height: 100px;\n      overflow-x: scroll;\n      overflow-x: hidden;\n    }\n\n    a {\n      margin-top: 15px;\n      color: #999;\n      font-weight: bold;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n"]);return on=function(){return e},e}function ln(){var e=Object(X.a)(["\n  max-width: 1020px;\n  margin: 0 auto;\n  padding: 0 20px 50px;\n  margin-top: 15px;\n"]);return ln=function(){return e},e}var un=Z.b.div(ln()),sn=Z.b.ul(on(),Object($.a)(.2,"#e6e6e6"),Object($.a)(.04,"#fff"),Object($.a)(.5,"#999")),dn=t(63),pn=t.n(dn);function fn(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.critics.loading})),t=Object(o.c)((function(e){return e.critics.critics}));return Object(r.useEffect)((function(){e({type:"@critics/SEARCH_REQUEST"})}),[e]),n?a.a.createElement(Ie,null):a.a.createElement(a.a.Fragment,null,t.length?a.a.createElement(un,null,a.a.createElement(sn,null,t.map((function(e){var n=e.multimedia&&e.multimedia.resource?e.multimedia.resource.src:null;return a.a.createElement("li",{key:e.display_name},a.a.createElement("div",null,a.a.createElement("img",{src:n||pn.a,alt:"critic"})),a.a.createElement("strong",null,e.display_name),a.a.createElement("small",null,e.bio),a.a.createElement("a",{href:"/reviews/".concat(e.display_name)},"See movie reviews"))})))):a.a.createElement(me,{Message:"No records found"}))}function mn(){var e=Object(X.a)(["\n  max-width: 1020px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 0 20px 50px;\n"]);return mn=function(){return e},e}var bn=Z.b.div(mn());function vn(){var e=Object(o.c)((function(e){return e.favorites}));return a.a.createElement(a.a.Fragment,null,e.length?a.a.createElement(bn,null,e.map((function(e){return a.a.createElement(Ke,{key:"".concat(e.display_title,"-").concat(e.byline),rawData:e})}))):a.a.createElement(me,{Message:"No records found"}))}function gn(){return a.a.createElement(J.c,null,a.a.createElement(J.a,{path:"/",exact:!0,component:ke}),a.a.createElement(J.a,{path:"/reviews/:critic?",component:cn}),a.a.createElement(J.a,{path:"/critics",exact:!0,component:fn}),a.a.createElement(J.a,{path:"/favorites",exact:!0,component:vn}),a.a.createElement(J.a,{render:function(e){return a.a.createElement(me,Object.assign({Code:"404",Message:"Page not found"},e))}}))}t(94);function xn(){var e=Object(X.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  body {\n    background: linear-gradient(-90deg, #e6e6e6, ",");\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return xn=function(){return e},e}var En=Object(Z.a)(xn(),Object($.a)(.1,"#e6e6e6"));var yn=function(){return a.a.createElement(o.a,{store:K},a.a.createElement(l.a,null,a.a.createElement(le,null),a.a.createElement(gn,null),a.a.createElement(En,null),a.a.createElement(u.a,{autoClose:1500})))};i.a.render(a.a.createElement(yn,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.2197ee92.chunk.js.map