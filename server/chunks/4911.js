"use strict";exports.id=4911,exports.ids=[4911],exports.modules={4911:(t,e,i)=>{i.d(e,{Attractor:()=>a});var o=i(1146);class a extends o.$S{constructor(t){super(t)}clear(){}init(){}interact(t){let e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,o.Gu)(t.options.move.attract.distance)*e.retina.pixelRatio);let i=t.attractDistance,a=t.getPosition();for(let r of e.particles.quadTree.queryCircle(a,i)){if(t===r||!r.options.move.attract.enable||r.destroyed||r.spawning)continue;let e=r.getPosition(),{dx:i,dy:s}=(0,o.oW)(a,e),c=t.options.move.attract.rotate,n=i/(1e3*c.x),l=s/(1e3*c.y),v=r.size.value/t.size.value,d=1/v;t.velocity.x-=n*v,t.velocity.y-=l*v,r.velocity.x+=n*d,r.velocity.y+=l*d}}isEnabled(t){return t.options.move.attract.enable}reset(){}}}};