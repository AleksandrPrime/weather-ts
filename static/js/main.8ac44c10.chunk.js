(this["webpackJsonpweather-ts"]=this["webpackJsonpweather-ts"]||[]).push([[0],{44:function(e,t,a){e.exports=a(85)},85:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(13),s=a.n(i),c=a(33),l=a(5),o=a(6),u=a(8),m=a(7),h=a(9),p=a(2),d=a(14),f=a(3),w=function(){return n.a.createElement("div",null,"loading...")},b=function(){return n.a.createElement("div",null,"Error!")},v=a(34),y=a.n(v);a(63),a(64);function g(){var e=Object(p.a)(["\n    margin: 10px 0;\n"]);return g=function(){return e},e}var O=f.a.button(g()),E=function(e){var t=e.weather,a=e.settings,r=e.switchTempMod;return n.a.createElement("div",null,n.a.createElement("h2",{className:"center-block text-center"},t.city.name),n.a.createElement(O,{className:"btn btn-outline-secondary",onClick:function(e){return r()}},"switchTempMod"),n.a.createElement(y.a,Object.assign({},a,{className:"weather-list row"}),t.list.map((function(e,t){return t%8===0?n.a.createElement("div",{className:"center-block",key:e.dt},n.a.createElement(j,{item:e})):null}))))},j=function(e){var t=e.item,a=t.main,r=a.temp,i=a.temp_max,s=a.temp_min,c=t.dt_txt;return n.a.createElement("div",{className:"book-list-item list-group"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"Temp: ",r," \xb0"),n.a.createElement("li",{className:"list-group-item"},"Max. Temp: ",i," \xb0"),n.a.createElement("li",{className:"list-group-item"},"Min. Temp: ",s," \xb0"),n.a.createElement("li",{className:"list-group-item"},"Date: ",c.substring(0,10))))},_=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.state,a=t.weather,r=t.loading,i=t.error,s=e.switchTempMod;return r?i?n.a.createElement(b,null):(console.log(a),n.a.createElement(E,{weather:a,settings:{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},switchTempMod:s})):n.a.createElement(w,null)}}]),t}(r.Component),x=a(37),k=a.n(x),M=function(e){return k.a.get("https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=68c24b19a0f082eb5868d192ef1bc194&units=metric")).then((function(e){return e.data})).catch((function(e){return e.toJSON()}))},N=a(41),S=a(38);function T(){var e=Object(p.a)(["\n    margin: 0 auto;\n    width: 76.4%;\n"]);return T=function(){return e},e}function P(){var e=Object(p.a)(["\n    margin-top: 10px;\n"]);return P=function(){return e},e}var D=f.a.form(P()),C=f.a.input(T()),W=function(e){var t=e.fetchWeather,a=Object(r.useState)(),i=Object(N.a)(a,2),s=i[0],c=i[1],l=Object(S.a)(s,2e3);Object(r.useEffect)((function(){t(s)}),[t,l]);return n.a.createElement(D,{className:"d-flex",onSubmit:function(e){e.preventDefault()}},n.a.createElement(C,{type:"text",onChange:function(e){return c((t=e.target.value)&&t[0].toUpperCase()+t.slice(1));var t},placeholder:"Enter the name of the city",value:s||""}))};function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function q(){var e=Object(p.a)(["\n    max-width: 800px;\n    margin: auto;\n"]);return q=function(){return e},e}function z(){var e=Object(p.a)(['\n    font-family: "Playfair Display", Georgia, serif;\n    font-size: 2.5rem;\n    padding-left: 1rem;\n    ']);return z=function(){return e},e}function B(){var e=Object(p.a)(["\n    border-bottom: 1px solid #e5e5e5;\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: space-between;\n"]);return B=function(){return e},e}var G=f.a.header(B()),I=f.a.div(z()),U=function(){return n.a.createElement(G,{className:"row"},n.a.createElement(d.b,{to:"/"},n.a.createElement(I,{className:"text-dark"},"Weather-ts")))},F=f.a.div(q()),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={weather:{city:{name:""},list:[]},loading:!1,temperature:!0,error:!1},a.switchTempMod=function(){a.state.temperature?a.setState(A({},a.state,{weather:A({},a.state.weather,{city:A({},a.state.weather.city),list:a.state.weather.list.map((function(e,t){return{clouds:{all:a.state.weather.list[t].clouds.all},dt:a.state.weather.list[t].dt,dt_txt:a.state.weather.list[t].dt_txt,main:{grnd_level:a.state.weather.list[t].main.grnd_level,humidity:a.state.weather.list[t].main.humidity,pressure:a.state.weather.list[t].main.pressure,sea_level:a.state.weather.list[t].main.sea_level,temp:Math.round(9*a.state.weather.list[t].main.temp/5+32),temp_kf:a.state.weather.list[t].main.temp_kf,temp_max:Math.round(9*a.state.weather.list[t].main.temp_max/5+32),temp_min:Math.round(9*a.state.weather.list[t].main.temp_min/5+32)},sys:{pod:a.state.weather.list[t].sys.pod},weather:A({},a.state.weather.list[t].weather),wind:A({},a.state.weather.list[t].wind)}}))}),temperature:!1})):a.setState(A({},a.state,{weather:A({},a.state.weather,{city:A({},a.state.weather.city),list:a.state.weather.list.map((function(e,t){return{clouds:{all:a.state.weather.list[t].clouds.all},dt:a.state.weather.list[t].dt,dt_txt:a.state.weather.list[t].dt_txt,main:{grnd_level:a.state.weather.list[t].main.grnd_level,humidity:a.state.weather.list[t].main.humidity,pressure:a.state.weather.list[t].main.pressure,sea_level:a.state.weather.list[t].main.sea_level,temp:Math.round(5*(a.state.weather.list[t].main.temp-32)/9),temp_kf:a.state.weather.list[t].main.temp_kf,temp_max:Math.round(5*(a.state.weather.list[t].main.temp_max-32)/9),temp_min:Math.round(5*(a.state.weather.list[t].main.temp_min-32)/9)},sys:{pod:a.state.weather.list[t].sys.pod},weather:A({},a.state.weather.list[t].weather),wind:A({},a.state.weather.list[t].wind)}}))}),temperature:!0}))},a.fetchWeather=function(e){e||(e="Sevastopol"),a.setState({loading:!1}),M(e).then((function(e){return a.setState({weather:e,loading:!0})})).catch((function(){return a.setState({loading:!1,error:!0})})).catch((function(e){return console.log("\u043e\u0448\u0438\u0431\u043a\u0430",e.cod)}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(F,null,n.a.createElement(U,null),n.a.createElement(W,{fetchWeather:this.fetchWeather}),n.a.createElement(_,{state:this.state,fetchWeather:this.fetchWeather,switchTempMod:this.switchTempMod}))}}]),t}(r.Component),K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={hasError:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement(b,null):this.props.children}}]),t}(r.Component);s.a.render(n.a.createElement(K,null,n.a.createElement(d.a,null,n.a.createElement(H,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8ac44c10.chunk.js.map