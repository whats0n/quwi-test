(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(t,e,n){var content=n(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("74172497",content,!0,{sourceMap:!1})},164:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("7834d9df",content,!0,{sourceMap:!1})},165:function(t,e,n){var content=n(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("05249697",content,!0,{sourceMap:!1})},166:function(t,e,n){"use strict";var o=n(64),r=n.n(o),c=n(167),l=c.a.token,d=c.a.baseApiURL;e.a=l?r.a.create({baseURL:d,headers:{Authorization:"Bearer ".concat(l)}}):r.a.create({baseURL:d})},167:function(t,e,n){"use strict";e.a={baseApiURL:"https://api.quwi.com/v2/",token:window.localStorage.getItem("token"),checkAuthorization:function(t){window.localStorage.getItem("token")?t():window.location.href="/login"}}},168:function(t,e,n){"use strict";var o={name:"Button",data:function(){return{}}},r=(n(172),n(16)),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("button",this._g({staticClass:"btn"},this.$listeners),[this._t("default",[this._v("Button")])],2)},[],!1,null,null,null);e.a=component.exports},169:function(t,e,n){"use strict";var o=n(163);n.n(o).a},170:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,".field__label{font-size:16px;font-weight:500px}.field__label:not(:last-child){margin-bottom:8px}",""])},172:function(t,e,n){"use strict";var o=n(164);n.n(o).a},173:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,".btn{box-sizing:border-box;outline:none;padding:10px 24px;border:none;border-radius:3px;background:#d9d9d9;font-size:16px;line-height:20px;cursor:pointer}.btn:active{background:silver}",""])},174:function(t,e,n){"use strict";var o=n(165);n.n(o).a},175:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,".input{box-sizing:border-box;outline:none;padding:0 15px;border:1px solid #333;border-radius:3px;width:100%;height:40px;font-size:16px;line-height:normal;transition:border-color .25s,box-shadow .25s}.input:focus{box-shadow:0 0 2px 2px rgba(51,51,51,.1)}.input.is-error{border-color:red}",""])},177:function(t,e,n){var content=n(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("87e7c192",content,!0,{sourceMap:!1})},178:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("67114d8e",content,!0,{sourceMap:!1})},179:function(t,e,n){"use strict";var o={name:"Field",props:{label:{type:String,default:null}}},r=(n(169),n(16)),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[this.label?e("div",{staticClass:"field__label"},[this._v("\n    "+this._s(this.label)+"\n  ")]):this._e(),this._v(" "),e("div",{staticClass:"field__container"},[this._t("default")],2)])},[],!1,null,null,null);e.a=component.exports},180:function(t,e,n){"use strict";var o={name:"Input",model:{event:"modelChange",prop:"value"},props:{type:{type:String,default:"text"},value:{type:String,default:""}},methods:{handleInput:function(t){this.$emit("modelChange",t.target.value),this.$emit("input",t)}}},r=(n(174),n(16)),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("input",this._g({staticClass:"input",attrs:{type:this.type},domProps:{value:this.value},on:{input:this.handleInput}},this.$listeners))},[],!1,null,null,null);e.a=component.exports},185:function(t,e,n){"use strict";var o=n(2),r=n(15),c=n(18),l=n(95),d=n(47),f=n(8),h=n(48).f,_=n(63).f,m=n(9).f,v=n(186).trim,j=o.Number,x=j,y=j.prototype,w="Number"==c(n(62)(y)),C="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=C?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+e};if(!j(" 0o1")||!j("0b1")||j("+0x1")){j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(w?f(function(){y.valueOf.call(n)}):"Number"!=c(n))?l(new x(I(e)),n,j):I(e)};for(var N,k=n(7)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)r(x,N=k[E])&&!r(j,N)&&m(j,N,_(x,N));j.prototype=y,y.constructor=j,n(12)(o,"Number",j)}},186:function(t,e,n){var o=n(6),r=n(17),c=n(8),l=n(187),d="["+l+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),_=function(t,e,n){var r={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=r[t]=d?e(m):l[t];n&&(r[n]=f),o(o.P+o.F*d,"String",r)},m=_.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=_},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},188:function(t,e,n){"use strict";var o=n(177);n.n(o).a},189:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,".project{position:relative;cursor:pointer}.project.is-active .project__container{opacity:1;visibility:visible}.project__container{position:absolute;top:0;left:0;right:0;bottom:0;padding:20px;opacity:0;visibility:hidden;background:#fff;transition:opacity .25s,visibility .25s}.project__content{display:flex;align-items:center;justify-content:space-between;padding:20px;background:#fff;box-shadow:0 0 2px 1px rgba(0,0,0,.2)}.project__icon{flex:0 0 50px;font-size:0;text-align:center}.project__icon-img{max-width:50px}.project__schedule{flex:0 0 180px;padding:0;margin:0}.project__schedule,.project__schedule-item{list-style-type:none}.project__schedule-item{display:flex;align-items:flex-start;justify-content:space-between}.project__schedule-value,.project__status,.project__title{font-weight:700}.project__status{color:red}.project__status.is-active{color:green}.project__form{display:flex;align-items:flex-end}.project__field{flex:1 1 auto}.project__btn{flex:0 0 auto;margin-left:20px}",""])},190:function(t,e,n){"use strict";var o=n(178);n.n(o).a},191:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,'.header{padding:16px 20px;background:#f1f1f1}.header:after{content:"";display:block;clear:both}.header__logout{float:right}.projects{padding:20px;margin:0 auto;max-width:700px}',""])},192:function(t,e,n){"use strict";n.r(e);var o=n(166),r=n(167),c={name:"WithData",components:{},props:{url:{type:String,required:!0}},data:function(){return{fetchedData:null}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;o.a.get(this.url).then(function(e){var data=e.data;t.fetchedData=data})},updateData:function(data){this.fetchedData=data}}},l=n(16),d=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default",null,{data:this.fetchedData,update:this.updateData})],2)},[],!1,null,null,null).exports,f=(n(185),n(179)),h=n(168),_=n(180),m={name:"Project",components:{Field:f.a,Button:h.a,Input:_.a},props:{icon:{type:String,default:null},id:{type:Number,required:!0},title:{type:String,required:!0},status:{type:[Number,Boolean],default:0},timeWeek:{type:Number,default:0},timeMonth:{type:Number,default:0},timeTotal:{type:Number,default:0}},data:function(t){return{isEdit:!1,newTitle:t.title}},computed:{iconImg:function(){return this.icon?this.icon:"https://placehold.it/50/50"},iconAlt:function(){return"".concat(this.title," Logo")},statusText:function(){return this.status?"Active":"Not active"}},watch:{title:function(t,e){t!==e&&(this.isEdit=!1)}},methods:{getFormattedTime:function(t){var e=parseInt(t/1e3%60),n=parseInt(t/6e4%60),o=parseInt(t/36e5%24);return(o=o<10?"0"+o:o)+":"+(n=n<10?"0"+n:n)+":"+(e=e<10?"0"+e:e)},handleClick:function(){var t=this;this.isEdit=!0,setTimeout(function(){t.$refs.inputName.$el.focus(),t.$refs.inputName.$el.setSelectionRange(0,t.title.length)},100)},handleSubmit:function(){this.$emit("submit",this.newTitle)}}},v=(n(188),{components:{Project:Object(l.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project",class:{"is-active":t.isEdit}},[n("div",{staticClass:"project__content",on:{click:function(e){return e.preventDefault(),t.handleClick(e)}}},[n("div",{staticClass:"project__icon"},[n("img",{staticClass:"project__icon-img",attrs:{src:t.iconImg,alt:t.iconAlt}})]),t._v(" "),n("div",{staticClass:"project__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"project__status",class:{"is-active":t.status}},[t._v("\n      "+t._s(t.statusText)+"\n    ")]),t._v(" "),n("ul",{staticClass:"project__schedule"},[n("li",{staticClass:"project__schedule-item"},[n("div",{staticClass:"project__schedule-label"},[t._v("\n          time this week\n        ")]),t._v(" "),n("div",{staticClass:"project__schedule-value"},[t._v("\n          "+t._s(t.getFormattedTime(t.timeWeek))+"\n        ")])]),t._v(" "),n("li",{staticClass:"project__schedule-item"},[n("div",{staticClass:"project__schedule-label"},[t._v("\n          this month\n        ")]),t._v(" "),n("div",{staticClass:"project__schedule-value"},[t._v("\n          "+t._s(t.getFormattedTime(t.timeMonth))+"\n        ")])]),t._v(" "),n("li",{staticClass:"project__schedule-item"},[n("div",{staticClass:"project__schedule-label"},[t._v("\n          total\n        ")]),t._v(" "),n("div",{staticClass:"project__schedule-value"},[t._v("\n          "+t._s(t.getFormattedTime(t.timeTotal))+"\n        ")])])])]),t._v(" "),n("div",{staticClass:"project__container"},[n("form",{staticClass:"project__form",attrs:{action:"POST"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("Field",{staticClass:"project__field",attrs:{label:"Name:"}},[n("Input",{ref:"inputName",staticClass:"input",attrs:{type:"text",placeholder:"Enter new name"},model:{value:t.newTitle,callback:function(e){t.newTitle=e},expression:"newTitle"}})],1),t._v(" "),n("Button",{staticClass:"project__btn",attrs:{type:"submit"}},[t._v("\n        Submit\n      ")])],1)])])},[],!1,null,null,null).exports,WithData:d,Button:h.a},data:function(){return{projects:null,edited:null}},computed:{filteredProjects:function(){return this.projects&&this.projects.map(function(t){return t.url="projects-manage/".concat(t.id),t})},hadProjects:function(){return this.projects&&this.projects.length}},created:function(){var t=this;r.a.checkAuthorization(function(){o.a.get("projects-manage").then(function(e){var data=e.data;t.projects=data.projects})})},methods:{handleProjectSubmit:function(t,e,n){o.a.post("projects-manage/update?id=".concat(e),{name:t}).then(function(t){var data=t.data;n(data)})},handleLogout:function(){window.localStorage.removeItem("token"),window.location.reload()}}}),j=(n(190),Object(l.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("Button",{staticClass:"header__logout",on:{click:function(e){return e.preventDefault(),t.handleLogout(e)}}},[t._v("\n      Logout\n    ")])],1),t._v(" "),t.hadProjects?n("div",{staticClass:"projects"},[t._l(t.filteredProjects,function(e){return n("WithData",{key:e.id,ref:e.id,refInFor:!0,attrs:{url:e.url},scopedSlots:t._u([{key:"default",fn:function(o){var data=o.data,r=o.update;return data?[n("Project",{attrs:{id:data.project.id,title:data.project.name,icon:data.project.logo_url,status:data.project.is_active,"time-week":data.project.spent_time_week,"time-month":data.project.spent_time_month,"time-total":data.project.spent_time_all},on:{submit:function(n){return t.handleProjectSubmit(n,e.id,r)}}})]:void 0}}],!0)})}),t._v("\n    "+t._s(t.edited)+"\n  ")],2):t._e()])},[],!1,null,null,null));e.default=j.exports}}]);