"use strict";(self.webpackChunkbasic=self.webpackChunkbasic||[]).push([[770],{770:(h,a,e)=>{e.r(a),e.d(a,{MainModule:()=>s});var n=e(6895),l=e(4843),c=e(3227),t=e(4650);function r(u,o){if(1&u&&(t.TgZ(0,"a",2)(1,"span"),t._uU(2),t.qZA()()),2&u){const i=o.$implicit;t.ekj("disabled",!i.active),t.Q6J("routerLink","/"+i.path),t.xp6(2),t.Oqu(i.title)}}class m{constructor(){this.routesList=c.ZM}static#t=this.\u0275fac=function(i){return new(i||m)};static#i=this.\u0275cmp=t.Xpm({type:m,selectors:[["ng-component"]],decls:2,vars:1,consts:[[1,"route-block"],["class","route-block__link",3,"routerLink","disabled",4,"ngFor","ngForOf"],[1,"route-block__link",3,"routerLink"]],template:function(i,p){1&i&&(t.TgZ(0,"div",0),t.YNc(1,r,3,4,"a",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",p.routesList))},dependencies:[l.rH,n.sg],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%}"]})}const x=[{path:"",component:m}];class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#i=this.\u0275mod=t.oAB({type:s});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),n.ez]})}},3227:(h,a,e)=>{e.d(a,{K8:()=>n,RU:()=>l,ZM:()=>c});const n=[{title:"CUSTOM",width:50,height:100},{title:"ATX",width:244,height:305},{title:"Mini-ATX",width:208,height:284},{title:"microATX",width:244,height:244},{title:"Mini-ITX",width:170,height:170},{title:'5.25"',width:146,height:203},{title:"EPIC",width:114,height:165},{title:'3.5"',width:104,height:146}],l=[{title:"ETHERNET",name:"ethernet",max:null},{title:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 ATOM, i3, i5, i7 (T6)",name:"T6",max:null},{title:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 Atom (T10)",name:"T10",max:null},{title:"DVI",name:"dvi",max:2},{title:"VGA",name:"vga",max:null},{title:"LVDS",name:"lvds",max:2},{title:"DDI",name:"ddi",max:2},{title:"HDMI",name:"hdmi",max:2},{title:"USB 2.0",name:"usb_2",max:8},{title:"USB 3.0",name:"usb_3",max:4},{title:"RS232",name:"rs232",max:8},{title:"RS422",name:"rs422",max:8},{title:"RS232/422",name:"rs232",max:8},{title:"I2C",name:"i2c",max:null},{title:"ATX",name:"atx",max:null},{title:"+19V",name:"v19",max:null},{title:"+12V",name:"v12",max:null},{title:"miniPCIexpress/miniSATA",name:"pci_mini&sata_mini",max:null},{title:"miniPCIexpress/miniSATA",name:"pci_mini&sata_mini",max:null},{title:"SATA",name:"sata",max:4},{title:"miniSATA",name:"sata_mini",max:4},{title:"miniPCIexpress",name:"pci_mini",max:4},{title:"PCIexpress x 16",name:"pci_16",max:null},{title:"PCIexpress x 8",name:"pci_8",max:2},{title:"PCIexpress x 4",name:"pci_4",max:2},{title:"PCIexpress x 1",name:"pci_1",max:8},{title:"AUDIO out",name:"audio_out",max:null},{title:"AUDIO in",name:"audio_in",max:null},{title:"AUDIO POWER out",name:"",max:null}],c=[{path:"motherboards",title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438 \u0441\u0435\u0440\u0438\u0439\u043d\u043e\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0445 \u043f\u043b\u0430\u0442 \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 COM EXPRESS",active:!0},{path:"sound-devices",title:"C\u0435\u0440\u0438\u0439\u043d\u043e\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u0437\u0432\u0443\u043a\u043e\u0432\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0434\u043b\u044f \u0434\u043e\u043c\u0430 \u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u0430",active:!1},{path:"software",title:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0422\u0417 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430",active:!1},{path:"ship-equipment",title:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u043e \u0441\u0443\u0434\u043e\u0432\u043e\u043c\u0443 \u0438 \u043a\u043e\u0440\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044e",active:!1}]}}]);