var t=AFRAME.registerComponent("views",{schema:{position:{default:"0 0 -2"},rotpos:{default:"rot0"},animation:{default:{property:"rotation",to:"0 -60 0",startEvents:"rot0",repeat:"1"}},animation__2:{default:{property:"rotation",to:"0 -120 0",startEvents:"rot1",repeat:"1"}},animation__3:{default:{property:"rotation",to:"0 -180 0",startEvents:"rot2",repeat:"1"}},animation__4:{default:{property:"rotation",to:"0 -240 0",startEvents:"rot3",repeat:"1"}},animation__5:{default:{property:"rotation",to:"0 -300 0",startEvents:"rot4",repeat:"1"}},animation__6:{default:{property:"rotation",to:"0 0 0",startEvents:"rot5",repeat:"1"}}},init:function(){console.log(AFRAME),cards=[];for(var t=0;t<6;t++)console.log("yeah you called hexagon"),cards.push(this.append.createElement("a-box"))},full_body_carousel_right_move:function(){cards=this,console.log("entering this function"),"none"==lastrot?(cards.emit("rot0"),lastrot="rot0"):(console.log(),lastrot="rot"+String((Number(lastrot[3])+1)%6),console.log(lastrot),cards.emit(lastrot))}}),o=AFRAME.registerComponent("card",{schema:{depth:{default:.01,min:0},height:{default:.3,min:0},width:{default:.2,min:0},color:{default:"white"},position:{default:{x:0,y:0,z:-.2}},src:{default:"../assets/rounded_edges.png"}},init:function(){this.el.setAttribute("geometry",{primitive:"box",height:this.data.height,width:this.data.width,depth:this.data.depth}),this.el.setAttribute("material",{transparent:"true",color:this.data.color,src:this.data.src}),this.el.object3D.position.set(this.data.position.x,this.data.position.y,this.data.position.z)}}),e=AFRAME.registerComponent("image_button",{schema:{color:{default:"white"},src:{default:"../assets/start.png"},radius:{default:.02,min:0},height:{default:.0025},position:{default:{x:.055,y:.067,z:.0175}},rotation:{default:{x:90,y:0,z:0}}},init:function(){this.el.setAttribute("geometry",{primitive:"cylinder",height:this.data.height,radius:this.data.radius}),this.el.setAttribute("material",{src:this.data.src,color:this.data.color}),this.el.setAttribute("rotation",{x:this.data.rotation.x,y:this.data.rotation.y,z:this.data.rotation.z}),this.el.object3D.position.set(this.data.position.x,this.data.position.y,this.data.position.z)}});exports.views=t,exports.cards=o,exports.image_button=e;
//# sourceMappingURL=vrleap_ui.js.map
