(()=>{"use strict";var e={2596:(e,n,t)=>{t(6992),t(8674),t(9601),t(7727);var a=t(9242),i=(t(4916),t(7601),t(8309),t(1249),t(2564),t(7658),t(9554),t(1539),t(3396)),o=t(7139),r=t(4870),s=t(9880),d=t(4543),l=t(4198),u=t(1989),v=t(2236),c=t(3803),p=t(8552),w={style:{width:"100vw",height:"100vh"}},f={style:{padding:"100px 50px","font-size":"20px",color:"#fff"}},h={key:0,style:{"text-align":"left",color:"#ffeb3b",margin:"0px 0px -200px 60px"}};const m={__name:"App",setup:function(e){var n=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),t=null,a=new s.xsS,m=new s.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);n?m.position.set(-3.23,10.98,30.06):m.position.set(-3.23,2.98,4.06),m.updateProjectionMatrix();var g=new s.CP7({antialias:!0});g.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(g.domElement),g.outputEncoding=s.knz,g.toneMappingExposure=.5,g.shadowMap.enabled=!0,g.physicallyCorrectLights=!0;var x=new d.z(m,g.domElement);x.target.set(-8,2,0),x.enableDamping=!0;var P=new u._;P.setDecoderPath("./draco/");var y=new l.E;y.setDRACOLoader(P);var b=new v.x;b.load("./textures/sky.hdr",(function(e){e.mapping=s.dSO,a.background=e,a.environment=e})),y.load("./model/scene.glb",(function(e){var n=e.scene;n.traverse((function(e){"Plane"===e.name&&(e.visible=!1),e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),a.add(n)}));var M=new s.zf8(300,32),z=new c.B(M,{textureWidth:1024,textureHeight:1024,color:15658751,flowDirection:new s.FM8(1,1),scale:100});z.rotation.x=-Math.PI/2,z.position.y=-.4,a.add(z);var k=new s.Ox3(16777215,1);k.position.set(0,50,0),a.add(k);var j=(new s.dpR).load("./images/ruime4.jpg"),O=new s._12(10,14),T=new s.vBJ({map:j}),I=new s.Kj0(O,T);I.position.y=6,I.position.x=10;var C=(new s.dpR).load("./images/ruime5.jpg"),E=new s._12(5,5),_=new s.vBJ({map:C}),A=new s.Kj0(E,_);A.position.y=2,A.position.z=8,A.rotation.y=Math.PI/2;var S=(new s.dpR).load("./images/ruime2.jpg"),D=new s._12(8,8),U=new s.vBJ({map:S}),H=new s.Kj0(D,U);H.position.y=-14,H.position.x=0;var K=document.createElement("video");K.src="./images/ruime5.ogv",K.loop=!0;var Z=(new s.dpR).load("./images/ruime7.jpg"),B=new s._12(10,12),R=new s.vBJ({map:Z}),W=new s.Kj0(B,R);W.position.y=2,W.position.z=16,W.rotation.y=Math.PI+Math.PI/2;var F=(0,r.iH)("单击有惊喜呦！"),J=function(e){if(re.value===oe.length-1)if(K.paused){F.value="单击暂停播放呦！",K.play();var n=new s.fO1(K);R.map=n,R.map.needsUpdate=!0}else F.value="单击有惊喜呦！",K.pause()};window.addEventListener("click",(function(e){console.log("index.value",re.value,oe.length),t&&clearTimeout(t),t=setTimeout(J,500)}));var L=new s.cek(16777215,50);L.position.set(.1,2.4,0),L.castShadow=!0,a.add(L);var G=new s.ZAu;G.position.set(-8,2.5,-1.5);for(var q=3,$=[],Y=0;Y<3;Y++){var N=new s.xo$(.2,32,32),Q=new s.Wid({color:16777215,emissive:16777215,emissiveIntensity:10}),V=new s.Kj0(N,Q);$.push(V),V.position.set(q*Math.cos(2*Y*Math.PI/3),Math.cos(2*Y*Math.PI/3),q*Math.sin(2*Y*Math.PI/3));var X=new s.cek(16777215,50);V.add(X),G.add(V)}a.add(G);var ee={angle:0};function ne(){requestAnimationFrame(ne),g.render(a,m),x.update()}p.ZP.to(ee,{angle:2*Math.PI,duration:10,repeat:-1,ease:"linear",onUpdate:function(){G.rotation.y=ee.angle,$.forEach((function(e,n){e.position.set(q*Math.cos(2*n*Math.PI/3),Math.cos(2*n*Math.PI/3+5*ee.angle),q*Math.sin(2*n*Math.PI/3))}))}}),ne();var te=p.ZP.timeline(),ae=p.ZP.timeline();function ie(e,n){te.to(m.position,{x:e.x,y:e.y,z:e.z,duration:1,ease:"power2.inOut"}),ae.to(x.target,{x:n.x,y:n.y,z:n.z,duration:1,ease:"power2.inOut"})}var oe=[{text:"这是一份特别的礼物!（双击屏幕）",callback:function(){a.remove(W),ie(new s.Pa4(-3.23,3,4.06),new s.Pa4(-8,2,0))}},{text:"愿你们的婚姻生活充满温馨与甜蜜",callback:function(){a.add(I),ie(n?new s.Pa4(10,0,40):new s.Pa4(7,0,23),new s.Pa4(0,0,0))}},{text:"相互扶持，共同成长",callback:function(){a.remove(I),a.add(A),n?ie(new s.Pa4(10,3,10),new s.Pa4(5,2,8)):ie(new s.Pa4(10,3,0),new s.Pa4(5,2,0))}},{text:"在爱的路上越走越宽广，幸福绵长",callback:function(){a.remove(A),a.add(H),ie(new s.Pa4(7,0,23),new s.Pa4(0,0,0)),ye()}},{text:"愿你们的爱情如同细水长流，岁月静好，携手共度每一个晨昏，幸福美满，白头偕老(单击有惊喜！)",callback:function(){a.remove(H),a.add(W),n?ie(new s.Pa4(-20,1.3,16.6),new s.Pa4(5,2,15)):ie(new s.Pa4(-20,1.3,6.6),new s.Pa4(5,2,0))},tip:!0}],re=(0,r.iH)(0),se=!1,de=function(e){se||(se=!0,console.log(e),e&&(re.value++,re.value>oe.length-1&&(re.value=0,be())),re.value>oe.length-1&&(re.value=0,be()),oe[re.value].callback(),setTimeout((function(){se=!1}),1e3))};window.addEventListener("dblclick",(function(e){t&&clearTimeout(t),t=setTimeout(de(e),500)}),!1);for(var le=new s.SPe(new s.xo$(.1,32,32),new s.Wid({color:16777215,emissive:16777215,emissiveIntensity:10}),100),ue=[],ve=[],ce=0;ce<100;ce++){var pe=100*Math.random()-50,we=100*Math.random()-50,fe=100*Math.random()-50;ue.push(new s.Pa4(pe,we,fe));var he=new s.yGw;he.setPosition(pe,we,fe),le.setMatrixAt(ce,he)}a.add(le);var me=new s.bnF;me.moveTo(25,25),me.bezierCurveTo(25,25,20,0,0,0),me.bezierCurveTo(-30,0,-30,35,-30,35),me.bezierCurveTo(-30,55,-10,77,25,95),me.bezierCurveTo(60,77,80,55,80,35),me.bezierCurveTo(80,35,80,0,50,0),me.bezierCurveTo(35,0,25,25,25,25);for(var ge=new s.Pa4(0,2,10),xe=0;xe<100;xe++){var Pe=me.getPoint(xe/100);ve.push(new s.Pa4(.1*Pe.x+ge.x,.1*Pe.y+ge.y,ge.z))}function ye(){var e={time:0};p.ZP.to(e,{time:1,duration:1,onUpdate:function(){for(var n=0;n<100;n++){var t=ue[n].x+(ve[n].x-ue[n].x)*e.time,a=ue[n].y+(ve[n].y-ue[n].y)*e.time,i=ue[n].z+(ve[n].z-ue[n].z)*e.time,o=new s.yGw;o.setPosition(t,a,i),le.setMatrixAt(n,o)}le.instanceMatrix.needsUpdate=!0}})}function be(){var e={time:0};p.ZP.to(e,{time:1,duration:1,onUpdate:function(){for(var n=0;n<100;n++){var t=ve[n].x+(ue[n].x-ve[n].x)*e.time,a=ve[n].y+(ue[n].y-ve[n].y)*e.time,i=ve[n].z+(ue[n].z-ve[n].z)*e.time,o=new s.yGw;o.setPosition(t,a,i),le.setMatrixAt(n,o)}le.instanceMatrix.needsUpdate=!0}})}return function(e,n){return(0,i.wg)(),(0,i.iD)("div",{class:"scenes",style:(0,o.j5)([{position:"fixed",left:"0",top:"0","z-index":"10","pointer-events":"none",transition:"all 1s"},{transform:"translate3d(0, ".concat(100*-(0,r.SU)(re),"vh, 0)")}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(oe),(function(e){return(0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("h1",f,(0,o.zw)(e.text),1),e.tip?((0,i.wg)(),(0,i.iD)("h1",h)):(0,i.kq)("",!0)])})),256))],4)}}},g=m,x=g;(0,a.ri)(x).mount("#app")}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,a,i,o)=>{if(!a){var r=1/0;for(u=0;u<e.length;u++){for(var[a,i,o]=e[u],s=!0,d=0;d<a.length;d++)(!1&o||r>=o)&&Object.keys(t.O).every((e=>t.O[e](a[d])))?a.splice(d--,1):(s=!1,o<r&&(r=o));if(s){e.splice(u--,1);var l=i();void 0!==l&&(n=l)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,i,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={143:0};t.O.j=n=>0===e[n];var n=(n,a)=>{var i,o,[r,s,d]=a,l=0;if(r.some((n=>0!==e[n]))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(d)var u=d(t)}for(n&&n(a);l<r.length;l++)o=r[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})();var a=t.O(void 0,[998],(()=>t(2596)));a=t.O(a)})();
//# sourceMappingURL=app.6b4fc6c4.js.map