(this.webpackJsonpreduxcoursaz=this.webpackJsonpreduxcoursaz||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(1),u=n.n(a),o=(n(19),n(20),n(8)),i=n(9),l=n(12),m=n(10),s=n(13);n(21);function p(e){return r.a.createElement("div",null,e.valeur)}n(22);function E(e){return r.a.createElement("div",{className:"btnIncr",onClick:e.clicked},e.txt)}var f=n(3),d=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={compteur:0},n.calcul=function(e){"plus1"===e&&n.setState((function(e){return{compteur:e.compteur+1}})),"moins1"===e&&n.setState((function(e){return{compteur:e.compteur-1}}))},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cont"},r.a.createElement("div",{className:"blocConmpt"},r.a.createElement(p,{valeur:this.props.ctr})),r.a.createElement("div",{className:"contBtn"},r.a.createElement(E,{txt:"Incremente",clicked:this.props.incremente}),r.a.createElement(E,{txt:"Decremente",clicked:this.props.decremente})))}}]),t}(c.Component),v=Object(f.b)((function(e){return{ctr:e.compteur}}),(function(e){return{incremente:function(){return e({type:"INCREMENTE"})},decremente:function(){return e({type:"DECREMENTE"})}}}))(d);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))},h=n(2),N={compteur:0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return"INCREMENTE"===t.type?{compteur:e.compteur+1}:"DECREMENTE"===t.type?{compteur:e.compteur-1}:e},j=Object(h.b)(y);u.a.render(r.a.createElement(f.a,{store:j}," ",r.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5d3a17a7.chunk.js.map