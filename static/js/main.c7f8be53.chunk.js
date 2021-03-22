(this["webpackJsonpcloud-jumper"]=this["webpackJsonpcloud-jumper"]||[]).push([[0],{14:function(t,i,e){},16:function(t,i,e){"use strict";e.r(i);var n=e(1),o=e.n(n),s=e(9),a=e.n(s),c=(e(14),e(2)),r=e(3),h=e(6),l=e(5),u=e(4),d=800,f=600,v=50,g=window.innerHeight-f,y=g+f-30,p=window.innerWidth/2-400,b=window.innerWidth/2+400,j=window.innerWidth/2,x=g+f-30,m=15,O=e(0),M=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){return Object(c.a)(this,e),i.call(this,t)}return Object(r.a)(e,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"game-area",style:{width:d,height:f},children:Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.props.startGame,children:"Play"})})})}}]),e}(o.a.Component),C=e(8),w=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){return Object(c.a)(this,e),i.call(this,t)}return Object(r.a)(e,[{key:"render",value:function(){return"left"==this.props.direction?Object(O.jsx)("div",{style:{position:"absolute",width:"".concat(20,"px"),height:"".concat(30,"px"),left:"".concat(this.props.x,"px"),bottom:"".concat(this.props.y,"px")},children:Object(O.jsx)("img",{className:"player",src:window.location.origin+"/bunny-left.png"})}):Object(O.jsx)("div",{style:{position:"absolute",width:"".concat(20,"px"),height:"".concat(30,"px"),left:"".concat(this.props.x,"px"),bottom:"".concat(this.props.y,"px")},children:Object(O.jsx)("img",{className:"player",src:window.location.origin+"/bunny-right.png"})})}}]),e}(o.a.Component),k=(e.p,function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){return Object(c.a)(this,e),i.call(this,t)}return Object(r.a)(e,[{key:"render",value:function(){return this.props.clouds.map((function(t){return Object(O.jsx)("div",{style:{position:"absolute",width:"".concat(80,"px"),height:"".concat(v,"px"),left:"".concat(t[0].left,"px"),bottom:"".concat(t[1].right,"px")},children:Object(O.jsx)("img",{className:"cloud",src:window.location.origin+"/cloudImage.png"})},t[0].left+t[1].right/t[0].left*t[1].right)}))}}]),e}(o.a.Component)),S=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){return Object(c.a)(this,e),i.call(this,t)}return Object(r.a)(e,[{key:"render",value:function(){return this.props.coins.map((function(t){return Object(O.jsx)("div",{style:{position:"absolute",width:"".concat(m,"px"),height:"".concat(m,"px"),left:"".concat(t[0].left,"px"),bottom:"".concat(t[1].right,"px")},children:Object(O.jsx)("img",{className:"coin",src:window.location.origin+"/coin.png"})},t[0].left+t[1].right/t[0].left*t[1].right)}))}}]),e}(o.a.Component),I=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){return Object(c.a)(this,e),i.call(this,t)}return Object(r.a)(e,[{key:"render",value:function(){return Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:"Score: "+this.props.score}})}}]),e}(o.a.Component),N=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){var n;return Object(c.a)(this,e),(n=i.call(this,t)).onKeyDown=function(t){"37"==t.keyCode&&n.state.x>p?n.setState((function(t,i){return{x:t.x-10,direction:"left"}})):"39"==t.keyCode&&n.state.x<b-20&&n.setState((function(t,i){return{x:t.x+10,direction:"right"}}))},n.clouds=[],n.coins=[],n.counter=0,n.state={x:j,y:x,gravity:1.9,score:0,direction:"left",cloudMove:0},n.gravityUpdate=n.gravityUpdate.bind(Object(h.a)(n)),n.initialize(),n}return Object(r.a)(e,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"game-area",style:{width:d,height:f},onClick:this.mousePos,children:[Object(O.jsx)(k,{clouds:this.clouds}),Object(O.jsx)(S,{coins:this.coins}),Object(O.jsx)(w,{x:this.state.x,y:this.state.y,direction:this.state.direction}),Object(O.jsx)(I,{score:this.state.score})]})}},{key:"componentDidMount",value:function(){this.gameInterval=setInterval(this.gravityUpdate,10),document.onkeydown=this.onKeyDown,document.coinCollision=this.coinCollision()}},{key:"componentWillUnmount",value:function(){clearInterval(this.gameInterval)}},{key:"initialize",value:function(){this.xMin=Math.ceil(window.innerWidth/2-400),this.xMax=Math.floor(window.innerWidth/2+400-80),this.yMin=y-v,this.yMax=g+v,this.initClouds(),this.initCoins()}},{key:"initClouds",value:function(){for(var t=0;t<7;t++){var i=Math.floor(Math.random()*(this.xMax-this.xMin)+this.xMin),e=Math.floor(Math.random()*(this.yMax-this.yMin)+this.yMin);this.clouds.push([{left:i},{right:e}])}for(var n=0;n<this.clouds.length;n++)this.validCloud(this.clouds[n],n),this.clouds.left=this.clouds[n][0].left,this.clouds.right=this.clouds[n][1].right,console.log(this.clouds.left,this.clouds.right)}},{key:"initCoins",value:function(){for(var t=0;t<3;t++){var i=Math.floor(Math.random()*(this.xMax-this.xMin)+this.xMin),e=Math.floor(Math.random()*(this.yMax-this.yMin)+this.yMin);this.coins.push([{left:i},{right:e}])}for(var n=0;n<this.coins.length;n++)this.validCloud(this.coins[n],n),this.clouds.left=this.clouds[n][0].left,this.clouds.right=this.clouds[n][1].right,console.log(this.clouds.left,this.clouds.right)}},{key:"gravityUpdate",value:function(t){0==this.counter?(this.setState((function(t,i){return{y:t.y-t.gravity}})),this.cloudCollision()):(70==this.counter?this.setState((function(t,i){return{gravity:-1*t.gravity}})):1==this.counter&&this.setState((function(t,i){return{gravity:1.9}})),this.moveClouds(),this.moveCoins(),this.setState((function(t,i){return{y:t.y-1.5*t.gravity}})),this.counter--),this.coinCollision(),this.gameOver(),this.ceillingCollide()}},{key:"moveClouds",value:function(){var t,i=Object(C.a)(this.clouds);try{for(i.s();!(t=i.n()).done;){var e=t.value;e[1].right-=2,e[1].right<=g&&this.updateCloud(e)}}catch(n){i.e(n)}finally{i.f()}}},{key:"moveCoins",value:function(){var t,i=Object(C.a)(this.coins);try{for(i.s();!(t=i.n()).done;){var e=t.value;e[1].right-=2,e[1].right<=g&&this.updateCoin(e)}}catch(n){i.e(n)}finally{i.f()}}},{key:"gameOver",value:function(){this.state.y<=g&&(this.setState((function(t,i){return{gravity:0}})),this.props.restart())}},{key:"ceillingCollide",value:function(){this.state.y>=y&&this.setState((function(t,i){return{gravity:0,y:y}}))}},{key:"cloudCollision",value:function(){for(var t=0;t<this.clouds.length;t++)this.state.x>=this.clouds[t][0].left-20&&this.state.x<=this.clouds[t][0].left+80&&this.state.y>=this.clouds[t][1].right-v&&this.state.y<=this.clouds[t][1].right+v&&(this.counter=70,this.updateCloud(this.clouds[t]),this.validCloud(this.clouds[t],t))}},{key:"coinCollision",value:function(){for(var t=0;t<this.coins.length;t++)this.state.x>=this.coins[t][0].left-20&&this.state.x<=this.coins[t][0].left+m&&this.state.y>=this.coins[t][1].right-m&&this.state.y<=this.coins[t][1].right+m&&(this.setState((function(t,i){return{score:t.score+10}})),console.log(this.state.score),this.updateCoin(this.coins[t]),this.coins[t][1].right=Math.floor(Math.random()*(window.innerHeight-g/2)+g),this.validCoin(this.coins[t],t))}},{key:"validCloud",value:function(t,i){for(;!this.checkAvailable(t,i);)this.updateCloud(t)}},{key:"validCoin",value:function(t,i){for(;!this.coinAvailable(t,i);)this.updateCoin(t)}},{key:"updateCloud",value:function(t){this.setState((function(t,i){return{cloudMove:t.cloudMove++}})),t[0].left=Math.floor(Math.random()*(this.xMax-this.xMin)+this.xMin),t[1].right=window.innerHeight}},{key:"updateCoin",value:function(t){this.setState((function(t,i){return{cloudMove:t.cloudMove++}})),t[0].left=Math.floor(Math.random()*(this.xMax-this.xMin)+this.xMin),t[1].right=window.innerHeight}},{key:"checkAvailable",value:function(t,i){for(var e=0;e<this.clouds.length;e++)if(Math.abs(this.clouds[i][0].left-this.clouds[e][0].left)<=80&&i!=e&&Math.abs(this.clouds[i][1].right-this.clouds[e][1].right)<=v)return!1;return!0}},{key:"coinAvailable",value:function(t,i){for(var e=0;e<this.coins.length;e++)if(Math.abs(this.coins[i][0].left-this.coins[e][0].left)<=m&&i!=e&&Math.abs(this.coins[i][1].right-this.coins[e][1].right)<=m)return!1;return!0}}]),e}(o.a.Component),G=function(t){Object(l.a)(e,t);var i=Object(u.a)(e);function e(t){var n;return Object(c.a)(this,e),(n=i.call(this,t)).state={playing:!1},n.startGame=n.startGame.bind(Object(h.a)(n)),n.gameOver=n.gameOver.bind(Object(h.a)(n)),n}return Object(r.a)(e,[{key:"render",value:function(){return this.state.playing?Object(O.jsx)(N,{restart:this.gameOver}):Object(O.jsx)(M,{startGame:this.startGame})}},{key:"startGame",value:function(){this.setState({playing:!0})}},{key:"gameOver",value:function(){this.setState((function(t,i){return{playing:!1}}))}}]),e}(o.a.Component);var W=function(){return Object(O.jsx)(G,{})},H=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(i){var e=i.getCLS,n=i.getFID,o=i.getFCP,s=i.getLCP,a=i.getTTFB;e(t),n(t),o(t),s(t),a(t)}))};a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root")),H()}},[[16,1,2]]]);
//# sourceMappingURL=main.c7f8be53.chunk.js.map