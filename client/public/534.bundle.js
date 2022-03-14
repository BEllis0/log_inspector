"use strict";(self.webpackChunklogger_server=self.webpackChunklogger_server||[]).push([[534],{7534:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(7294),a=n(5977),l=n(8216),o=n(7645),i=n(5431),u=n(1420),m=n(9669),c=n.n(m),s=n(7109),d=n(2642),f=n(6720),g=n(9542),p=n(6634),h=n(5725),E=n(1508),y=n(3845),v=n(2658),Z=n(4065),b=n(4345),S=n(5974);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=(0,b.Z)(),C={register:function(e){return function(t){c().post("/api/v1/users/new",{headers:{"content-type":"application/json"},data:e}).then((function(e){t({type:u.N.register.REGISTER_USER,payload:e.data}),t({type:u.N.snackbar.MESSAGE,payload:{message:e.data.message||"Account created!",severity:"success"}})})).catch((function(e){t({type:u.N.error.UPDATE_ERROR,payload:{message:e.response.data,isLoggedIn:!1}})}))}}};const A=(0,a.EN)((0,l.$j)((function(e){return{state:e}}),C)((function(e){var t=x(r.useState(""),2),n=t[0],a=t[1],l=x(r.useState(""),2),o=l[0],u=l[1],m=x(r.useState(""),2),c=m[0],b=m[1],w=x(r.useState(""),2),C=w[0],A=w[1],I=x(r.useState(""),2),N=I[0],j=I[1];return r.createElement(S.Z,{theme:P},r.createElement(Z.Z,{component:"main",maxWidth:"xs"},r.createElement(f.ZP,null),r.createElement(E.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(s.Z,{sx:{m:1,bgcolor:"secondary.main"}},r.createElement(y.Z,null)),r.createElement(v.Z,{component:"h1",variant:"h5"},"Sign up"),r.createElement(E.Z,{onSubmit:function(t){t.preventDefault(),e.register({firstName:n,lastName:o,username:N,email:c,password:C})},component:"form",noValidate:!0,sx:{mt:3}},r.createElement(h.ZP,{container:!0,spacing:2},r.createElement(h.ZP,{item:!0,xs:12,sm:6},r.createElement(g.Z,{onChange:function(e){return a(e.target.value)},autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.createElement(h.ZP,{item:!0,xs:12,sm:6},r.createElement(g.Z,{onChange:function(e){return u(e.target.value)},required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.createElement(h.ZP,{item:!0,xs:12},r.createElement(g.Z,{onChange:function(e){return j(e.target.value)},required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username"})),r.createElement(h.ZP,{item:!0,xs:12},r.createElement(g.Z,{onChange:function(e){return b(e.target.value)},required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.createElement(h.ZP,{item:!0,xs:12},r.createElement(g.Z,{onChange:function(e){return A(e.target.value)},required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"}))),r.createElement(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign Up"),r.createElement(h.ZP,{container:!0,justifyContent:"flex-end"},r.createElement(h.ZP,{item:!0},r.createElement(p.Z,{href:"/sign-in",variant:"body2"},"Already have an account? Sign in"))))),r.createElement(i.Z,{sx:{mt:5}})))})));var I=n(2078),N=n(9706),j=n(8879);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var U={login:I.x4,getProfile:N.Ai,getMessagesByUser:j.zr,pollServer:I.w2};const q=(0,a.EN)((0,l.$j)((function(e){return{loggedIn:e.login.loggedIn}}),U)((function(e){var t=e.login,n=e.getProfile,a=e.getMessagesByUser,l=e.pollServer,o=k(r.useState(""),2),u=o[0],m=o[1],c=k(r.useState(""),2),f=c[0],Z=c[1];return r.createElement(h.ZP,{item:!0,xs:12,sm:8,md:5,elevation:6,square:"true"},r.createElement(E.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(s.Z,{sx:{m:1,bgcolor:"secondary.main"}},r.createElement(y.Z,null)),r.createElement(v.Z,{component:"h1",variant:"h5"},"Sign in"),r.createElement(E.Z,{onSubmit:function(e){e.preventDefault(),t({email:u,password:f}).then((function(e){n(),a(),window.interval=window.interval||setInterval((function(){l()}),6e4)})).catch((function(e){console.log("Error logging in user",e)}))},component:"form",noValidate:!0,sx:{mt:1}},r.createElement(g.Z,{onChange:function(e){return m(e.target.value)},margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.createElement(g.Z,{onChange:function(e){return Z(e.target.value)},margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.createElement(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign In"),r.createElement(h.ZP,{container:!0},r.createElement(h.ZP,{item:!0,xs:!0},r.createElement(p.Z,{href:"#",variant:"body2"},"Forgot password?")),r.createElement(h.ZP,{item:!0},r.createElement(p.Z,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))),r.createElement(i.Z,{sx:{mt:5}}))))})));var R=n(6672),D=(0,b.Z)();const M=(0,a.EN)((0,l.$j)((function(e){return{state:e}}),{})((function(e){return r.createElement(S.Z,{theme:D},r.createElement(o.Z,null),r.createElement(h.ZP,{container:!0,component:"main",sx:{height:"100vh"}},r.createElement(f.ZP,null),r.createElement(h.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),"/register"===e.location.pathname&&r.createElement(A,null),"/sign-in"===e.location.pathname&&r.createElement(q,null)),r.createElement(R.Z,null))})))}}]);