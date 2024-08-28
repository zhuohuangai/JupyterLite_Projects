"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[43154],{43154:(e,t,s)=>{s.d(t,{diagram:()=>_});var o=s(75343),i=s(67406),a=s(23617),r=s(24028),n=s(86281);s(27693),s(7608),s(31699),s(7259),s(81779);const d="rect",l="rectWithTitle",c="statediagram",p=`${c}-state`,b="transition",g=`${b} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,f="parent",w="note",x="----",T=`${x}${w}`,$=`${x}${f}`,m="fill:none",S="fill: #333",k="text",A="normal";let D={},B=0;function v(e="",t=0,s="",o=x){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const E=(e,t,s,i,a,n)=>{const c=s.id,b=null==(x=i[c])?"":x.classes?x.classes.join(" "):"";var x;if("root"!==c){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),D[c]||(D[c]={id:c,shape:t,description:r.e.sanitizeText(c,(0,r.c)()),classes:`${b} ${p}`});const i=D[c];s.description&&(Array.isArray(i.description)?(i.shape=l,i.description.push(s.description)):i.description.length>0?(i.shape=l,i.description===c?i.description=[s.description]:i.description=[i.description,s.description]):(i.shape=d,i.description=s.description),i.description=r.e.sanitizeTextOrArray(i.description,(0,r.c)())),1===i.description.length&&i.shape===l&&(i.shape=d),!i.type&&s.doc&&(r.l.info("Setting cluster for ",c,C(s)),i.type="group",i.dir=C(s),i.shape=s.type===o.a?"divider":"roundedWithTitle",i.classes=i.classes+" "+u+" "+(n?y:""));const a={labelStyle:"",shape:i.shape,labelText:i.description,classes:i.classes,style:"",id:c,dir:i.dir,domId:v(c,B),type:i.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:c+T+"-"+B,domId:v(c,B,w),type:i.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:i.classes,style:"",id:c+$,domId:v(c,B,f),type:"group",padding:0};B++;const r=c+$;e.setNode(r,o),e.setNode(t.id,t),e.setNode(c,a),e.setParent(c,r),e.setParent(t.id,r);let n=c,d=t.id;"left of"===s.note.position&&(n=t.id,d=c),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:m,labelStyle:"",classes:g,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:A})}else e.setNode(c,a)}t&&"root"!==t.id&&(r.l.trace("Setting node ",c," to be child of its parent ",t.id),e.setParent(c,t.id)),s.doc&&(r.l.trace("Adding nodes children "),R(e,s,s.doc,i,a,!n))},R=(e,t,s,i,a,n)=>{r.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:E(e,t,s,i,a,n);break;case o.S:{E(e,t,s.state1,i,a,n),E(e,t,s.state2,i,a,n);const o={id:"edge"+B,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:m,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:A,classes:b};e.setEdge(s.state1.id,s.state2.id,o,B),B++}}}))},C=(e,t=o.c)=>{let s=t;if(e.doc)for(let t=0;t<e.doc.length;t++){const o=e.doc[t];"dir"===o.stmt&&(s=o.value)}return s},P={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){r.l.info("Drawing state diagram (v2)",t),D={},o.db.getDirection();const{securityLevel:l,state:p}=(0,r.c)(),b=p.nodeSpacing||50,g=p.rankSpacing||50;r.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),r.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new i.k({multigraph:!0,compound:!0}).setGraph({rankdir:C(o.db.getRootDocV2()),nodesep:b,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;E(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===l&&(y=(0,a.Ys)("#i"+t));const f="sandbox"===l?(0,a.Ys)(y.nodes()[0].contentDocument.body):(0,a.Ys)("body"),w=f.select(`[id="${t}"]`),x=f.select("#"+t+" g");await(0,n.r)(x,u,["barb"],c,t),r.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const T=w.node().getBBox(),$=T.width+16,m=T.height+16;w.attr("class",c);const S=w.node().getBBox();(0,r.i)(w,m,$,p.useMaxWidth);const k=`${S.x-8} ${S.y-8} ${$} ${m}`;r.l.debug(`viewBox ${k}`),w.attr("viewBox",k);const A=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const e of A){const t=e.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg",d);s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",t.width),s.setAttribute("height",t.height),e.insertBefore(s,e.firstChild)}}},_={parser:o.p,db:o.d,renderer:P,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);
//# sourceMappingURL=43154.225a4b0.js.map