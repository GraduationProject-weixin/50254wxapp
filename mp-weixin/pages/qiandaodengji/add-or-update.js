(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiandaodengji/add-or-update"],{"562d":function(e,n,t){"use strict";var r=t("ddbe"),a=t.n(r);a.a},"6d9c":function(e,n,t){"use strict";t.r(n);var r=t("b9f2"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"88bd":function(e,n,t){"use strict";t.r(n);var r=t("c7ce"),a=t("6d9c");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("562d");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"7bddcd16",null,!1,r["a"],o);n["default"]=s.exports},b9f2:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function u(e){i(o,r,a,u,s,"next",e)}function s(e){i(o,r,a,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("baa7"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{shetuanmingcheng:"",huodongfenlei:"",huodongmingcheng:"",huodongtupian:"",huodongdidian:"",qiandaoleixing:"",zhanghao:"",xingming:"",beizhu:"",qiandaoshijian:"",userid:"",longitude:"",latitude:"",fulladdress:""},qiandaoleixingOptions:[],qiandaoleixingIndex:0,user:{},ro:{shetuanmingcheng:!1,huodongfenlei:!1,huodongmingcheng:!1,huodongtupian:!1,huodongdidian:!1,qiandaoleixing:!1,zhanghao:!1,xingming:!1,beizhu:!1,qiandaoshijian:!1,userid:!1,longitude:!1,latitude:!1,fulladdress:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return o(r.default.mark((function a(){var i,o,u,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.ruleForm.qiandaoshijian=t.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),a.next=4,t.$api.session(i);case 4:if(o=a.sent,t.user=o.data,t.ruleForm.zhanghao=t.user.zhanghao,t.ro.zhanghao=!0,t.ruleForm.xingming=t.user.xingming,t.ro.xingming=!0,t.qiandaoleixingOptions="签到,签退".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=19;break}return t.ruleForm.id=n.id,a.next=17,t.$api.info("qiandaodengji",t.ruleForm.id);case 17:o=a.sent,t.ruleForm=o.data;case 19:if(t.cross=n.cross,!n.cross){a.next=83;break}u=e.getStorageSync("crossObj"),a.t0=r.default.keys(u);case 23:if((a.t1=a.t0()).done){a.next=83;break}if(s=a.t1.value,"shetuanmingcheng"!=s){a.next=29;break}return t.ruleForm.shetuanmingcheng=u[s],t.ro.shetuanmingcheng=!0,a.abrupt("continue",23);case 29:if("huodongfenlei"!=s){a.next=33;break}return t.ruleForm.huodongfenlei=u[s],t.ro.huodongfenlei=!0,a.abrupt("continue",23);case 33:if("huodongmingcheng"!=s){a.next=37;break}return t.ruleForm.huodongmingcheng=u[s],t.ro.huodongmingcheng=!0,a.abrupt("continue",23);case 37:if("huodongtupian"!=s){a.next=41;break}return t.ruleForm.huodongtupian=u[s],t.ro.huodongtupian=!0,a.abrupt("continue",23);case 41:if("huodongdidian"!=s){a.next=45;break}return t.ruleForm.huodongdidian=u[s],t.ro.huodongdidian=!0,a.abrupt("continue",23);case 45:if("qiandaoleixing"!=s){a.next=49;break}return t.ruleForm.qiandaoleixing=u[s],t.ro.qiandaoleixing=!0,a.abrupt("continue",23);case 49:if("zhanghao"!=s){a.next=53;break}return t.ruleForm.zhanghao=u[s],t.ro.zhanghao=!0,a.abrupt("continue",23);case 53:if("xingming"!=s){a.next=57;break}return t.ruleForm.xingming=u[s],t.ro.xingming=!0,a.abrupt("continue",23);case 57:if("beizhu"!=s){a.next=61;break}return t.ruleForm.beizhu=u[s],t.ro.beizhu=!0,a.abrupt("continue",23);case 61:if("qiandaoshijian"!=s){a.next=65;break}return t.ruleForm.qiandaoshijian=u[s],t.ro.qiandaoshijian=!0,a.abrupt("continue",23);case 65:if("userid"!=s){a.next=69;break}return t.ruleForm.userid=u[s],t.ro.userid=!0,a.abrupt("continue",23);case 69:if("longitude"!=s){a.next=73;break}return t.ruleForm.longitude=u[s],t.ro.longitude=!0,a.abrupt("continue",23);case 73:if("latitude"!=s){a.next=77;break}return t.ruleForm.latitude=u[s],t.ro.latitude=!0,a.abrupt("continue",23);case 77:if("fulladdress"!=s){a.next=81;break}return t.ruleForm.fulladdress=u[s],t.ro.fulladdress=!0,a.abrupt("continue",23);case 81:a.next=23;break;case 83:t.styleChange();case 84:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fulladdressTap:function(){var n=this;e.chooseLocation({success:function(e){console.log(e),n.ruleForm.fulladdress=e.address,n.ruleForm.longitude=e.longitude,n.ruleForm.latitude=e.latitude}})},qiandaoshijianConfirm:function(e){console.log(e),this.ruleForm.qiandaoshijian=e.result,this.$forceUpdate()},qiandaoleixingChange:function(e){this.qiandaoleixingIndex=e.target.value,this.ruleForm.qiandaoleixing=this.qiandaoleixingOptions[this.qiandaoleixingIndex]},huodongtupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.huodongtupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function t(){var a,i,o,u,s,c,d,l,g,f;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.longitude||n.$validate.isNumber(n.ruleForm.longitude)){t.next=3;break}return n.$utils.msg("经度应输入数字"),t.abrupt("return");case 3:if(!n.ruleForm.latitude||n.$validate.isNumber(n.ruleForm.latitude)){t.next=6;break}return n.$utils.msg("纬度应输入数字"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){t.next=22;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=18;break}for(d in c)d==u&&(c[d]=s);return l=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(l),c);case 16:t.next=22;break;case 18:a=Number(e.getStorageSync("userid")),i=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!a){t.next=44;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=28,n.$api.list("qiandaodengji",g);case 28:if(f=t.sent,!(f.data.total>=o)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("qiandaodengji",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("qiandaodengji",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("qiandaodengji",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("qiandaodengji",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},c7ce:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"baa7"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},ddbe:function(e,n,t){},e49e:function(e,n,t){"use strict";(function(e){t("cb25");r(t("66fd"));var n=r(t("88bd"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["e49e","common/runtime","common/vendor"]]]);