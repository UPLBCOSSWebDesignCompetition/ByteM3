"use strict";exports.id=9575,exports.ids=[9575],exports.modules={9575:(t,i,e)=>{e.d(i,{Connector:()=>s});var o=e(1146);class n{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class a{constructor(){this.distance=80,this.links=new n,this.radius=60}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links),void 0!==t.radius&&(this.radius=t.radius))}}class s extends o.L8{constructor(t){super(t)}clear(){}init(){let t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}interact(){let t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){let i=t.interactivity.mouse.position,{connectModeDistance:e,connectModeRadius:n}=t.retina;if(!e||e<0||!n||n<0||!i)return;let a=t.particles.quadTree.queryCircle(i,Math.abs(n),t=>this.isEnabled(t));a.forEach((i,n)=>{let s=i.getPosition();for(let r of a.slice(n+1)){let n=r.getPosition(),a=Math.abs(e),c=Math.abs(s.x-n.x),l=Math.abs(s.y-n.y);c<a&&l<a&&function(t,i,e){t.canvas.draw(n=>{var a;let s=function(t,i,e,n){let a=t.actualOptions.interactivity.modes.connect;if(a)return function(t,i,e,n){let a=Math.floor(e.getRadius()/i.getRadius()),s=i.getFillColor(),r=e.getFillColor();if(!s||!r)return;let c=i.getPosition(),l=e.getPosition(),d=(0,o.oc)(s,r,i.getRadius(),e.getRadius()),u=t.createLinearGradient(c.x,c.y,l.x,l.y);return u.addColorStop(0,(0,o.vz)(s,n)),u.addColorStop((0,o.uZ)(a,0,1),(0,o.iz)(d,n)),u.addColorStop(1,(0,o.vz)(r,n)),u}(i,e,n,a.links.opacity)}(t,n,i,e);if(!s)return;let r=i.getPosition(),c=e.getPosition();a=i.retina.linksWidth??0,(0,o.pS)(n,r,c),n.lineWidth=a,n.strokeStyle=s,n.stroke()})}(t,i,r)}})}}isEnabled(t){let i=this.container,e=i.interactivity.mouse,n=(t?.interactivity??i.actualOptions.interactivity).events;return!!n.onHover.enable&&!!e.position&&(0,o.dB)("connect",n.onHover.mode)}loadModeOptions(t,...i){for(let e of(t.connect||(t.connect=new a),i))t.connect.load(e?.connect)}reset(){}}}};