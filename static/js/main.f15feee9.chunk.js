(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,n,t){e.exports=t(282)},123:function(e,n,t){},280:function(e,n,t){},282:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),u=t.n(c),o=t(107),i=t(108),l=t(116),s=t(109),h=t(117),d={API_KEY:"2926cc269ba74564be3c4488db03cfb3",DELAY:3e6,URL:"https://openexchangerates.org/api/latest.json?app_id="},m=(t(123),t(110)),g=t.n(m),y=function(e){return g()({method:e.method,url:e.url,headers:{"Content-Type":"application/json"}})};function v(e,n){for(var t=e,a=1;a<n;a+=1)t*=e;return t}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return Math.floor(t*(n/e)*v(10,a))/v(10,a)}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="",t=/(?!0)(?:\d+)?(?:\.)?(?:\d)?(?:\d)/,a=/(?!0)(?:\d+)(?:\.)/;return a.test(e)&&!/(?!0)(?:\d+)(?:\.)(?:\d)/.test(e)?n=a.exec(e):t.test(e)&&(n=t.exec(e)),n},w=t(111),T=t.n(w),E=t(30),O=t.n(E),b=t(22),C=t.n(b),x=function(){return r.a.createElement(O.a,{muiTheme:C()()},r.a.createElement(T.a,{title:"Exchange your Currency",showMenuIconButton:!1,style:{textAlign:"center",background:"#004d9a"}}))},V=t(37),k=t(112),j=t.n(k),R=function(e){var n=Object(V.a)({margin:20,width:"90% !important",boxSizing:"border-box"}),t=e.floatingLabelText,a=e.value,c=e.onChange;return r.a.createElement(O.a,{muiTheme:C()()},r.a.createElement(j.a,{className:n,floatingLabelText:t,type:"text",value:a,onChange:c}))},A=t(113),S=t.n(A),Y=t(114),L=t.n(Y),D=function(e){var n=[],t=e.currency,a=e.handleChange,c=e.currenciesRates;return c&&Object.keys(c)&&Object.keys(c).map(function(e){return n.push(r.a.createElement(L.a,{key:e,value:e,primaryText:e})),n}),r.a.createElement(O.a,{muiTheme:C()()},r.a.createElement(S.a,{value:t,onChange:a},n))},M=Object(V.a)({width:"320px",margin:"auto",textAlign:"center"}),N=Object(V.a)({height:"60px",lineHeight:"60px",verticalAlign:"top",display:"inline-block"}),I=function(e){var n=e.currencyOne,t=e.currencyTwo,a=e.handleChangeOne,c=e.handleChangeTwo,u=e.currencyOneValue,o=e.currencyTwoValue,i=e.currenciesRates;return r.a.createElement("div",{className:M},r.a.createElement(D,{currenciesRates:i,currency:n,handleChange:a,currencyOneValue:u,currencyTwoValue:o}),r.a.createElement("span",{className:N},i&&f(i[n],i[t],1,4)),r.a.createElement(D,{currenciesRates:i,currency:t,handleChange:c,currencyOneValue:u,currencyTwoValue:o}))},U=t(115),W=t.n(U),K=function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center",margin:20}},e.time&&"Currencies rates timestamp: ".concat(W()(1e3*e.time).format("Do MMM YYYY, h:mm a"))),r.a.createElement("div",{style:{textAlign:"center",margin:20,fontWeight:"bold"}},"\xa9 ",e.currentYear," ",r.a.createElement("a",{href:"https://github.com/ckomop0x"},"Pavel Klochkov")))},P=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).state={seconds:0,currencyOne:"EUR",currencyTwo:"USD",currencyOneValue:"",currencyTwoValue:""},t}return Object(h.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,n={method:"GET",url:"".concat(d.URL).concat(d.API_KEY)};y(n).then(function(n){e.setState({currenciesRates:n.data.rates,dataTimestamp:n.data.timestamp})}).catch(function(n){e.setState({error:!0,errorText:"Can't connect",message:"".concat(n)})}),setInterval(function(){y(n).then(function(n){e.setState({currenciesRates:n.data.rates})}).catch(function(n){e.setState({error:!0,errorText:"Can't connect",message:"".concat(n)})}),e.setState({seconds:e.state.seconds+30})},d.DELAY)}},{key:"changeCurrencyOneValue",value:function(e){var n=this.state,t=n.currencyOne,a=n.currencyTwo,r=n.currenciesRates,c=e.target.value;this.setState({currencyOneValue:p(c),currencyTwoValue:f(r[t],r[a],p(c))})}},{key:"changeCurrencyTwoValue",value:function(e){var n=this.state,t=n.currencyOne,a=n.currencyTwo,r=n.currenciesRates,c=e.target.value;this.setState({currencyTwoValue:p(c),currencyOneValue:f(r[a],r[t],p(c))})}},{key:"handleChangeOne",value:function(e,n,t){this.setState({currencyOne:t,currencyOneValue:"",currencyTwoValue:""})}},{key:"handleChangeTwo",value:function(e,n,t){this.setState({currencyTwo:t,currencyOneValue:"",currencyTwoValue:""})}},{key:"render",value:function(){var e=this.state,n=e.currencyOne,t=e.currencyTwo,a=e.currencyOneValue,c=e.currencyTwoValue,u=e.currenciesRates,o=e.dataTimestamp,i=(new Date).getFullYear();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(I,{currencyOne:n,currencyTwo:t,currencyOneValue:a,currencyTwoValue:c,currenciesRates:u,handleChangeOne:this.handleChangeOne.bind(this),handleChangeTwo:this.handleChangeTwo.bind(this)}),r.a.createElement(R,{floatingLabelText:n,value:a,onChange:this.changeCurrencyOneValue.bind(this)}),r.a.createElement(R,{floatingLabelText:t,value:c,onChange:this.changeCurrencyTwoValue.bind(this)}),r.a.createElement(K,{time:o,currentYear:i})))}}]),n}(a.Component);t(280);u.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("/CurrencyExchangeApplication","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})}},[[118,2,1]]]);
//# sourceMappingURL=main.f15feee9.chunk.js.map