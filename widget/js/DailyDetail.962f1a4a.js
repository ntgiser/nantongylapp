(function(t){function e(e){for(var n,a,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)a=r[d],s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={DailyDetail:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([12,"chunk-vendors","chunk-common"]),i()})({12:function(t,e,i){t.exports=i("186b")},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},"186b":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ocn-background"),i("ocn-header",{attrs:{title:"新增日报",center:!0}},[i("div",{staticClass:"title-left",attrs:{slot:"left"},on:{click:t.back},slot:"left"},[i("i",{staticClass:"cubeic-back"})])]),i("div",{staticClass:"newzlog_wrapper"},[i("div",{staticClass:"con_cons"},[i("cube-button",{ref:"help",on:{click:t.yhcDropdownBox}},[t.tip?i("label",{staticStyle:{color:"red"}},[t._v(t._s("*"))]):t._e(),t._v("\n        "+t._s(t.yhcompanyN)+"\n      ")])],1),i("div",{staticClass:"yhList_box"},t._l(t.curList.guestList,function(e,n){return i("div",{key:n,staticClass:"yh_w"},[i("div",{staticStyle:{height:"3vh",width:"100%",background:"#f1f5fd"}}),i("div",{staticClass:"infoDetails"},[i("span",[i("label",{staticStyle:{color:"red","padding-left":"0px","padding-right":"5px"}},[t._v(t._s("*"))]),t._v("养护类型\n          ")]),i("cube-button",{on:{click:function(e){return t.curing(n)}},model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"item.type"}},[i("span",[t._v(t._s(e.type))]),i("i",{staticClass:"cubeic-arrow"})])],1),i("van-cell-group",[i("van-field",{attrs:{readonly:t.readonly,required:!0,type:"textarea",placeholder:"请输入养护内容，小于500字",autosize:"",border:!1},model:{value:e.remarks,callback:function(i){t.$set(e,"remarks",i)},expression:"item.remarks"}})],1),i("van-divider"),i("van-field",{attrs:{readonly:t.readonly,label:"养护量",type:"number",placeholder:"请输入养护量（数字）",required:!0,border:!1},model:{value:e.num,callback:function(i){t.$set(e,"num",i)},expression:"item.num"}}),i("van-divider"),i("van-field",{attrs:{readonly:t.readonly,label:"人工数",type:"number",placeholder:"请输入人工数（数字）",required:!0,border:!1},model:{value:e.workernum,callback:function(i){t.$set(e,"workernum",i)},expression:"item.workernum"}})],1)}),0),i("ocn-file",{ref:"ocnFile",attrs:{isEdit:t.isEdit,title:"养护照片",type:["photo"],maximum:50,showPic:!0}}),i("div",{staticClass:"newzBtn",on:{click:t.addPerson}},[t._v("+ 新增养护类型")]),t.isEdit?t._e():i("ocn-button-big",{attrs:{title:"提交"},on:{click:t.TJentireForm}})],1)],1)},o=[],a=(i("ac6a"),i("bd86")),r=i("9ed2"),c=i("565f"),u=(i("fdc4"),i("4be7"),i("1c46"),[{text:"绿化补植",value:"绿化补植"},{text:"松土除草",value:"松土除草"},{text:"浇水抗旱",value:"浇水抗旱"},{text:"修剪整形",value:"修剪整形"},{text:"绿化施肥",value:"绿化施肥"},{text:"病虫防治",value:"病虫防治"},{text:"草花布置",value:"草花布置"},{text:"其他工作",value:"其他工作"}]),l={data:function(){return{tip:!0,objindex:"",isEdit:!1,yhtypes:[],yhcompanyN:" 添加养护公司",yhcDropdown:[],token:JSON.parse(this.getData("userinfo")).data,list:[],formxq:[],mainid:"",curList:{guestList:[{remarks:"",type:"",num:"",workernum:""}]},placeholder:"输入养护内容(必填)",readonly:!1,maxlength:200,disabled:!0,autofocus:!0,remain:!1,SpeciesSummary:""}},components:(n={},Object(a["a"])(n,r["a"].name,r["a"]),Object(a["a"])(n,c["a"].name,c["a"]),n),onReady:function(){var t=this;this.formxq=api.pageParam,this.formxq.add&&api.closeWin({name:"YHDailyList"}),this.formxq.isEdit&&(this.isEdit=JSON.parse(this.formxq.isEdit)),this.formxq.yhCompany&&(0==this.formxq.yhCompany.type?(this.yhcompanyN=this.formxq.yhCompany.name,this.mainid=this.formxq.yhCompany.id):1==this.formxq.yhCompany.type&&this.formxq.yhCompany.arr.forEach(function(e){t.yhcDropdown.push({text:e.company,value:e.id})})),this.freshForm(),this.loadtypes()},created:function(){this.$nextTick(function(){})},methods:{curing:function(t){this.objindex=t,this.picker=this.$createPicker({title:"请选择养护类型",data:[u],onSelect:this.selectHandleyh}),this.picker.show()},selectHandleyh:function(t,e,i){this.curList.guestList[this.objindex].type=i[0],console.log("ssssss"),console.log(this.curList.guestList)},addPerson:function(){console.log(this.curList.guestList);var t={remarks:"",type:"",num:"",workernum:""};this.curList.guestList.length<u.length?(this.curList.guestList.push(t),console.log(this.curList.guestList)):this.ocn.warn_toast(this).show("已无养护类型种类")},freshForm:function(){},loadtypes:function(){var t=this;this.get("ws_yanghu_daily_type/get_all_list").then(function(e){e.success&&e.data.forEach(function(e){t.yhtypes.push({text:e.type,value:e.type})})})},yhcDropdownBox:function(){this.picker=this.$createPicker({title:"养护公司",data:[this.yhcDropdown],visible:!0,onSelect:this.selectHandleobj}),this.picker.show()},selectHandleobj:function(t,e,i){this.tip=!1,this.yhcompanyN=i[0],this.mainid=t[0]},back:function(){window.api&&api.historyBack(function(t,e){t.status||api.closeWin()})},TJentireForm:function(t){var e=this;this.checkValue().then(function(t){if(t){for(var i=!1,n=0;n<e.curList.guestList.length;n++){for(var s=n+1;s<e.curList.guestList.length;s++)if(e.curList.guestList[n].type==e.curList.guestList[s].type){i=!0;break}if(i)break}if(1==i)return e.ocn.warn_toast(e).show("添加项有重复"),void(i=!1);for(n=0;n<e.curList.guestList.length;n++)n+1==e.curList.guestList.length?e.SpeciesSummary+=e.curList.guestList[n].type:e.SpeciesSummary+=e.curList.guestList[n].type+",";console.log("提交数据："+JSON.stringify({maintainCompany:e.yhcompanyN,maintainCompanyId:e.mainid,optionInfo:e.SpeciesSummary,list:e.curList.guestList})),e.$refs.ocnFile.upload(e.slow.getInterport().host+"api/inspect_manage/uploadImgs?token="+e.token).then(function(t){console.log("图片返回数据："+JSON.stringify(t)),console.log("rFileq.data"+JSON.stringify(t.data)),t.success?e.post("ws_yanghu_daily/addDailyReport",{maintainCompany:e.yhcompanyN,maintainCompanyId:e.mainid,optionInfo:e.SpeciesSummary,list:e.curList.guestList,attacIds:t.data,num:e.maintainNum,workernum:e.maintainPeo}).then(function(t){console.log("接口返回数据："+JSON.stringify(t)),t.success?(e.ocn.warn_toast(e).show("保存成功"),api.closeWin()):e.ocn.warn_toast(e).show("上传失败！请稍后重试！")}):e.ocn.warn_toast(e).show("图片未上传或上传失败！")})}else e.ocn.warn_toast(e).show("请将标有*的项填写完毕")})},checkValue:function(){var t=this,e=new Promise(function(e,i){t.curList.guestList.forEach(function(i){i.remarks&&i.type&&i.num&&i.workernum&&t.mainid?e(!0):e(!1)})});return e}}},d=l,p=(i("2f0f"),i("2877")),h=Object(p["a"])(d,s,o,!1,null,"d581c4fe",null),f=h.exports,m=i("6912");Object(m["a"])(f)},"2f0f":function(t,e,i){"use strict";var n=i("4baf"),s=i.n(n);s.a},"4baf":function(t,e,i){}});