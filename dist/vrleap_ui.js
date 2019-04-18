var t=AFRAME.registerComponent("view",{schema:{position:{default:"0 1.6 -2"},rotpos:{default:"rot0"},animation:{default:{property:"rotation",to:"0 -60 0",startEvents:"rot0",repeat:"1"}},animation__2:{default:{property:"rotation",to:"0 -120 0",startEvents:"rot1",repeat:"1"}},animation__3:{default:{property:"rotation",to:"0 -180 0",startEvents:"rot2",repeat:"1"}},animation__4:{default:{property:"rotation",to:"0 -240 0",startEvents:"rot3",repeat:"1"}},animation__5:{default:{property:"rotation",to:"0 -300 0",startEvents:"rot4",repeat:"1"}},animation__6:{default:{property:"rotation",to:"0 0 0",startEvents:"rot5",repeat:"1"}}},init:function(){document.createElement("a-entity").setAttribute("card","")},full_body_carousel_right_move:function(){console.log("entering this function"),"none"==lastrot?(this.el.emit("rot0"),lastrot="rot0"):(console.log(),lastrot="rot"+String((Number(lastrot[3])+1)%6),console.log(lastrot),this.el.emit(lastrot))}}),e=AFRAME.registerComponent("card",{schema:{depth:{default:.01,min:0},height:{default:.3,min:0},width:{default:.2,min:0},color:{default:"white"},position:{type:"vec3",default:{x:0,y:1.6,z:-.2}},src:{default:"/assets/rounded_edges.png"}},init:function(){this.el.setAttribute("geometry",{primitive:"box",height:this.data.height,width:this.data.width,depth:this.data.depth}),this.el.setAttribute("material",{transparent:"true",color:this.data.color,src:this.data.src}),console.log(this.data.position),this.el.object3D.position.set(this.data.position.x,this.data.position.y,this.data.position.z)}}),o=AFRAME.registerPrimitive("a-card",{defaultComponents:{card:{}},mappings:{position:"card.position",height:"card.height",width:"card.width",color:"card.color"}}),a=AFRAME.registerComponent("keyboard",{init:function(){var t=document.createElement("a-entity");t.setAttribute("geometry",{primitive:"box",height:.08,width:1.5,depth:.02}),t.setAttribute("id","searchBar"),t.setAttribute("position","-0.3 0.5 -1"),t.setAttribute("material",{opacity:.5,color:"#A9A9A9"});var e=document.createElement("a-text");e.setAttribute("scale","0.3 0.3 0.3"),e.setAttribute("rotation","0 0 0"),e.setAttribute("value",""),e.setAttribute("color","#68696b"),e.setAttribute("position","-0.7 0 0"),t.appendChild(e),this.el.parentNode.appendChild(t);var o=document.createElement("a-entity");o.setAttribute("geometry",{primitive:"box",height:.08,width:.5,depth:.02}),o.setAttribute("position","0.75 0.5 -1"),o.setAttribute("material",{opacity:.5,color:"#A9A9A9"}),o.setAttribute("id","backspace"),o.setAttribute("tappable",""),o.setAttribute("class","tappable"),(d=document.createElement("a-text")).setAttribute("scale","0.3 0.3 0.3"),d.setAttribute("rotation","0 0 0"),d.setAttribute("value","<- Backspace"),d.setAttribute("color","#68696b"),d.setAttribute("position","-0.2 0 0"),o.appendChild(d),this.el.parentNode.appendChild(o);var a=document.createElement("a-entity");a.setAttribute("geometry",{primitive:"cylinder",height:1.2,radius:.87,segmentsRadial:48,thetaLength:-180,openEnded:!0}),a.setAttribute("material",{color:"#A9A9A9",transparent:!0}),a.setAttribute("rotation"," 0 -90 0"),a.setAttribute("position","0 -0.3 -0.3"),a.setAttribute("loadresults","");var r=["P","O","I","U","Y","T","R","E","W","Q"],s=.15,n=[.34,.33,.32,.31,.31,.31,.32,.33,.34,.35],l=-.4,p=-45;for(i in r)(u=document.createElement("a-entity")).setAttribute("geometry",{primitive:"box",height:.04,width:.03,depth:.04}),u.setAttribute("position",Math.abs(s)+" "+n[i]+" "+l),u.setAttribute("rotation","0 "+p+" 0"),u.setAttribute("material",{opacity:.5,color:"white"}),u.setAttribute("tappable",""),u.setAttribute("class","tappable"),(d=document.createElement("a-text")).setAttribute("scale","0.05 0.05 0.05"),d.setAttribute("rotation","0 90 0"),d.setAttribute("value",r[i]),d.setAttribute("color","black"),d.setAttribute("position","0.017 0 0"),console.log(s),s-=.03,l+=.1,p+=10,u.appendChild(d),a.appendChild(u);for(i in s=.15,l=-.3,p=-35,r=["L","K","J","H","G","F","D","S","A"])(u=document.createElement("a-entity")).setAttribute("geometry",{primitive:"box",height:.04,width:.03,depth:.04}),u.setAttribute("position",Math.abs(s)+" 0.26 "+l),u.setAttribute("rotation","0 "+p+" 0"),u.setAttribute("material",{opacity:.5,color:"white"}),u.setAttribute("tappable",""),u.setAttribute("class","tappable"),(d=document.createElement("a-text")).setAttribute("scale","0.05 0.05 0.05"),d.setAttribute("rotation","0 90 0"),d.setAttribute("value",r[i]),d.setAttribute("color","black"),d.setAttribute("position","0.017 0 0"),s-=.03,l+=.1,p+=10,u.appendChild(d),a.appendChild(u);for(i in s=.09,n=[.18,.19,.19,.18,.18,.17,.16],l=-.2,p=-25,r=["M","N","B","V","C","X","Z"]){var u;(u=document.createElement("a-entity")).setAttribute("geometry",{primitive:"box",height:.04,width:.03,depth:.04}),u.setAttribute("position",Math.abs(s)+" "+n[i]+" "+l),u.setAttribute("rotation","0 "+p+" 0"),u.setAttribute("material",{opacity:.5,color:"white"}),u.setAttribute("tappable",""),u.setAttribute("class","tappable"),(d=document.createElement("a-text")).setAttribute("scale","0.05 0.05 0.05"),d.setAttribute("rotation","0 90 0"),d.setAttribute("value",r[i]),d.setAttribute("color","black"),d.setAttribute("position","0.017 0 0"),s-=.03,l+=.1,p+=10,u.appendChild(d),a.appendChild(u),console.log(u)}var d,c=document.createElement("a-entity");c.setAttribute("geometry",{primitive:"cylinder",radius:.01,height:.2}),c.setAttribute("position","0.1 0.17 0.05"),c.setAttribute("rotation","90 0 0"),c.setAttribute("material",{opacity:.5,color:"white"}),c.setAttribute("tappable",""),c.setAttribute("class","tappable"),(d=document.createElement("a-text")).setAttribute("value"," "),c.appendChild(d),a.appendChild(c);var b=document.createElement("a-text");b.setAttribute("scale","0.05 0.05 0.05"),b.setAttribute("rotation","0 90 0"),b.setAttribute("value","SPACE"),b.setAttribute("color","black"),b.setAttribute("position","0.12 0.18 0.07"),a.appendChild(b),this.el.parentNode.appendChild(a)}}),r=AFRAME.registerComponent("image_button",{schema:{color:{default:"white"},src:{default:"/assets/start.png"},radius:{default:.02,min:0},height:{default:.0025},position:{type:"vec3",default:{x:.055,y:.067,z:.0175}},rotation:{default:{x:90,y:0,z:0}}},init:function(){this.el.setAttribute("geometry",{primitive:"cylinder",height:this.data.height,radius:this.data.radius}),this.el.setAttribute("material",{src:this.data.src,color:this.data.color}),this.el.setAttribute("rotation",{x:this.data.rotation.x,y:this.data.rotation.y,z:this.data.rotation.z}),this.el.object3D.position.set(this.data.position.x,this.data.position.y,this.data.position.z)}}),s=AFRAME.registerPrimitive("a-imagebutton",{defaultComponents:{image_button:{}},mappings:{src:"image_button.src",color:"image_button.color",radius:"image_button.radius",height:"image_button.height",position:"image_button.position",rotation:"image_button.rotation"}});exports.view=t,exports.card_component=e,exports.card_primitive=o,exports.image_button_primitive=s,exports.image_button_component=r,exports.keyboard=a;
//# sourceMappingURL=vrleap_ui.js.map
