(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5f/q":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class o{}class t{constructor(l,n,e,u){this._router=l,this._variablesGlobales=n,this._activatedRoute=e,this.deviceService=u,this.deviceInfo=null,this.isMobile=!1,this.username="",this.role=[],this.empresa="",this.sedes=[],this.loading=!1,this.epicFunction()}epicFunction(){console.log("hello `Home` component"),this.deviceInfo=this.deviceService.getDeviceInfo(),this.isMobile=this.deviceService.isMobile();const l=this.deviceService.isTablet(),n=this.deviceService.isDesktop();console.log(this.deviceInfo),console.log(this.isMobile),console.log(l),console.log(n)}ngOnInit(){this.username=localStorage.getItem("username");let l=localStorage.getItem("role");this.role=JSON.parse(l),this.empresa=localStorage.getItem("empresa");let n=localStorage.getItem("sedes");this.sedes=JSON.parse(n)}Sede(l){console.log("la sede"),this.loading=!0,localStorage.setItem("sede",l),this._router.navigate(["/private/sedes/dashboard"])}onClickLogout(){this.loading=!0,localStorage.removeItem("token"),localStorage.removeItem("empresa"),localStorage.removeItem("registros"),localStorage.removeItem("role"),localStorage.removeItem("sede"),localStorage.removeItem("sedes"),localStorage.removeItem("Insumos"),localStorage.removeItem("historial"),this._router.navigate(["/principal"],{relativeTo:this._activatedRoute})}}var i=e("pMnS"),r=e("SVse"),a=e("iInd"),c=e("alII"),d=e("ARm4"),s=u["\u0275crt"]({encapsulation:0,styles:[[".effect1[_ngcontent-%COMP%]{box-shadow:0 5px 20px 3px #777;background:#fff;box-shadow:0 5px 20px 3px #2c2c2c}.effect1[_ngcontent-%COMP%]:hover{box-shadow:0 2px 2px 2px #777}.panelPuntoVenta[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:200px;margin-bottom:10px;border-radius:3 px;position:relative;text-align:center;padding-top:10px;border:1px solid #4e4e4e}h4[_ngcontent-%COMP%]{color:#000}h4[_ngcontent-%COMP%]:hover{color:#4e4e4e}a[_ngcontent-%COMP%]{text-decoration:none}.titulo[_ngcontent-%COMP%]{border-top:1px solid #d5d5d7;border-bottom:1px solid #d5d5d7;padding-top:1px;width:80%;margin-left:10%;margin-right:10%}.interior[_ngcontent-%COMP%]{padding:5px}.main-sidebar[_ngcontent-%COMP%]{background-color:#333!important}.navbar-brand[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.example-container[_ngcontent-%COMP%]{width:100%;height:83%}.example-sidenav-content[_ngcontent-%COMP%]{height:100%}.example-sidenav[_ngcontent-%COMP%]{padding:20px;width:15%}.navbar[_ngcontent-%COMP%]{padding:0 5px!important}.pointer[_ngcontent-%COMP%]{cursor:pointer;color:gray}.pointer[_ngcontent-%COMP%]:hover{color:#b9b8b8;font-size:28px}.hov[_ngcontent-%COMP%]{background-color:#fff}.ses[_ngcontent-%COMP%]{cursor:pointer;color:#fff;margin-right:5px;padding-top:2px}.ses[_ngcontent-%COMP%]:hover{color:#c4c1c1}"]],data:{}});function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,0,"div",[["style","width:1100px"]],null,null,null,null,null))],null,null)}function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"form",[["class","form-inline"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"h6",[["class","ses"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onClickLogout()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Cerrar sesi\xf3n"])),(l()(),u["\u0275eld"](3,0,null,null,0,"i",[["aria-hidden","true"],["class","fas fa-sign-out-alt"],["style","cursor: pointer;color: #fff; margin-right: 20px"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onClickLogout()&&u),u},null,null))],null,null)}function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"form",[["class","form-inline"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"i",[["aria-hidden","true"],["class","fas fa-sign-out-alt"],["style","cursor: pointer;color: #fff; margin-right: 20px"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onClickLogout()&&u),u},null,null))],null,null)}function f(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","loading"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","../../../assets/images/loader.gif"]],null,null,null,null,null))],null,null)}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,8,"div",[["class","col-md-3 col-xs-6"],["style","margin-top:10px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,7,"div",[["style","cursor:pointer"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.Sede(l.context.$implicit)&&u),u},null,null)),(l()(),u["\u0275eld"](2,0,null,null,6,"div",[["class","panelPuntoVenta box effect1"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,5,"div",[["class","interior"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,2,"div",[["class","titulo"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](8,null,["",""]))],null,function(l,n){l(n,8,0,n.context.$implicit)})}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"nav",[["class","navbar navbar-light  justify-content-between"],["style","width: 100%; position: fixed; z-index: 100;background-color:#262626;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,3,"a",[["class","navbar-brand"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,2,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"h3",[["style","color:#fff; margin-left: 20px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,0,"img",[["alt",""],["src","../../../assets/images/letraylogo.png"],["style","width:8rem;  height:3rem; margin-top: 0.4rem;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,0,"div",[["class","example-sidenav-content"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,g)),u["\u0275did"](7,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,p)),u["\u0275did"](9,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,m)),u["\u0275did"](11,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,f)),u["\u0275did"](18,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](19,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](21,278528,null,0,r.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](27,0,null,null,2,"footer",[],null,null,null,null,null)),(l()(),u["\u0275eld"](28,0,null,null,1,"h6",[["style","color:gray; margin-left:43%; "]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["SIMCA 2019 Version 1.0"]))],function(l,n){var e=n.component;l(n,7,0,!e.isMobile),l(n,9,0,!e.isMobile),l(n,11,0,e.isMobile),l(n,18,0,e.loading),l(n,21,0,e.sedes)},null)}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-sede",[],null,null,null,v,s)),u["\u0275did"](1,114688,null,0,t,[a.k,c.a,a.a,d.b],null,null)],function(l,n){l(n,1,0)},null)}var x=u["\u0275ccf"]("app-sede",t,b,{},{},[]),C=e("BiSj");const I=()=>e.e(3).then(e.bind(null,"hUT1")).then(l=>l.DashboardModuleNgFactory);class M{}e.d(n,"SedeModuleNgFactory",function(){return _});var _=u["\u0275cmf"](o,[t],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,x]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[u.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,c.a,c.a,[C.a]),u["\u0275mpd"](4608,d.b,d.b,[u.PLATFORM_ID]),u["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),u["\u0275mpd"](1073742336,a.m,a.m,[[2,a.r],[2,a.k]]),u["\u0275mpd"](1073742336,M,M,[]),u["\u0275mpd"](1073742336,o,o,[]),u["\u0275mpd"](1024,a.i,function(){return[[{path:"",component:t},{path:"dashboard",loadChildren:I}]]},[])])})}}]);