"use strict";exports.id=7956,exports.ids=[7956],exports.modules={7956:(t,e,i)=>{i.d(e,{Bouncer:()=>r});var o=i(1146);let n=.5*Math.PI;function s(t,e,i,s,a){for(let c of t.particles.quadTree.query(s,a))s instanceof o.Cd?(0,o.kR)((0,o.gy)(c),{position:e,radius:i,mass:i**2*n,velocity:o.OW.origin,factor:o.OW.origin}):s instanceof o.Ae&&(0,o.dp)(c,(0,o.M_)(e,i))}class a{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}let c="bounce";class r extends o.L8{constructor(t){super(t)}clear(){}init(){let t=this.container,e=t.actualOptions.interactivity.modes.bounce;e&&(t.retina.bounceModeDistance=e.distance*t.retina.pixelRatio)}interact(){let t=this.container,e=t.actualOptions.interactivity.events,i=t.interactivity.status===o.Wt,n=e.onHover.enable,a=e.onHover.mode,r=e.onDiv;if(i&&n&&(0,o.dB)(c,a))!function(t,e){let i=t.retina.pixelRatio,n=t.interactivity.mouse.position,a=t.retina.bounceModeDistance;a&&!(a<0)&&n&&s(t,n,a,new o.Cd(n.x,n.y,a+10*i),e)}(this.container,t=>this.isEnabled(t));else{var l,d;l=this.container,d=t=>this.isEnabled(t),(0,o.XD)(c,r,(t,e)=>(function(t,e,i,n){let s=document.querySelectorAll(e);s.length&&s.forEach(e=>{let s=t.retina.pixelRatio,a={x:(e.offsetLeft+.5*e.offsetWidth)*s,y:(e.offsetTop+.5*e.offsetHeight)*s},c=.5*e.offsetWidth*s,r=10*s,l="circle"===i.type?new o.Cd(a.x,a.y,c+r):new o.Ae(e.offsetLeft*s-r,e.offsetTop*s-r,e.offsetWidth*s+2*r,e.offsetHeight*s+2*r);n(a,c,l)})})(l,t,e,(t,e,i)=>s(l,t,e,i,d)))}}isEnabled(t){let e=this.container,i=e.actualOptions,n=e.interactivity.mouse,s=(t?.interactivity??i.interactivity).events,a=s.onDiv;return!!n.position&&s.onHover.enable&&(0,o.dB)(c,s.onHover.mode)||(0,o.wm)(c,a)}loadModeOptions(t,...e){for(let i of(t.bounce||(t.bounce=new a),e))t.bounce.load(i?.bounce)}reset(){}}}};