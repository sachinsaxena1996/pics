(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),i=a(8),o=a.n(i),u=a(16),l=a(2),m=a(3),f=a(5),p=a(4),h=a(6),b=a(17),d=a.n(b).a.create({baseUrl:"https://api.unsplash.com/search/photos",headers:{Authorization:"Client-ID 76acff122294735981c14b1c460a288c24a9967f6e974fa41cc662ee26ef7b11"}}),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null," Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),t}(r.a.Component),g=(a(45),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),t}(r.a.Component)),j=function(e){var t=e.images.map(function(e){return r.a.createElement(g,{key:e.id,image:e})});return r.a.createElement("div",{className:"image-list"},t)},O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("https://api.unsplash.com/search/photos",{params:{query:t},headers:{Authorization:"Client-ID 76acff122294735981c14b1c460a288c24a9967f6e974fa41cc662ee26ef7b11"}});case 2:n=e.sent,console.log(n.data.results),a.setState({images:n.data.results});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(v,{onSubmit:this.onSearchSubmit}),r.a.createElement(j,{images:this.state.images}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f0840369.chunk.js.map