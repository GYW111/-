(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-258c4f66"],{"18c3":function(e,t,i){"use strict";i("d723")},b91a:function(e,t,i){"use strict";i.d(t,"g",(function(){return l})),i.d(t,"a",(function(){return s})),i.d(t,"d",(function(){return c})),i.d(t,"i",(function(){return u})),i.d(t,"j",(function(){return d})),i.d(t,"h",(function(){return m})),i.d(t,"e",(function(){return p})),i.d(t,"k",(function(){return f})),i.d(t,"b",(function(){return h})),i.d(t,"f",(function(){return g})),i.d(t,"c",(function(){return b}));i("d3b7");var n=i("bc3a"),a=i.n(n);function o(e,t){return new Promise((function(i,n){a.a.get(e,{params:t,headers:{token:sessionStorage.getItem("token")}}).then((function(e){i(e.data)})).catch((function(e){n(e.data)}))}))}function r(e,t){return new Promise((function(i,n){a()({method:"post",url:e,data:t}).then((function(e){i(e.data)})).catch((function(e){n(e.data)}))}))}function l(e,t,i){return new Promise((function(n,a){r("/index.php/index/Yimi/getGoodsList",{page:e,pagelimit:t,type:i}).then((function(e){n(e.data)}))}))}function s(e){return new Promise((function(t,i){r("/index.php/index/Yimi/addGoods",e).then((function(e){t(e.data)}))}))}function c(e){return new Promise((function(t,i){r("/index.php/index/Yimi/delGoods",{id:e}).then((function(e){t(e.data)}))}))}function u(e){return new Promise((function(t,i){r("/index.php/index/Yimi/addGoods",e).then((function(e){t(e)}))}))}function d(e){return new Promise((function(t,i){r("/index.php/index/Yimi/getGoodsList",{type:e}).then((function(e){t(e)}))}))}function m(){return new Promise((function(e,t){o("/index.php/index/Yimi/getTuList").then((function(t){e(t.data)}))}))}function p(e){return new Promise((function(t,i){r("/index.php/index/Yimi/delTu",{id:e}).then((function(e){t(e)}))}))}function f(e){return new Promise((function(t,i){r("/index.php/index/upload/uploadimg",{imgurl:e}).then((function(e){t(e)}))}))}function h(e){return new Promise((function(t,i){r("/index.php/index/Yimi/addTu",e).then((function(e){t(e)}))}))}function g(e,t){return new Promise((function(i,n){r("/index.php/index/Yimi/getOrderList",{page:e,pagelimit:t}).then((function(e){i(e)}))}))}function b(e){return new Promise((function(t,i){r("/index.php/index/Yimi/delOrder",{id:e}).then((function(e){t(e)}))}))}a.a.defaults.timeout=3e4,a.a.defaults.baseURL="https://testshool.zzgoodqc.cn",a.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},d723:function(e,t,i){},efaa:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table-classic-wrapper"},[i("el-card",{attrs:{shadow:"always"}},[i("div",{staticClass:"control-btns"},[i("el-button",{attrs:{type:"primary",editIndex:"1"},on:{click:e.handleCreate}},[e._v("新建数据")])],1),i("el-select",{attrs:{placeholder:"请选择"},on:{change:e.searchByType},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(e.options,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"60"}}),i("el-table-column",{attrs:{prop:"id",label:"编号",align:"center",width:"120",sortable:""}}),i("el-table-column",{attrs:{prop:"url",label:"图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[i("img",{staticStyle:{"max-height":"129px","max-width":"60px"},attrs:{src:t.url}})]}}])}),i("el-table-column",{attrs:{prop:"url",label:"图片地址",align:"center"}}),i("el-table-column",{attrs:{prop:"type",label:"状态",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",disabled:t.row.forbid},on:{click:function(i){return e.bianjifun(t.$index,t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),i("div",{staticClass:"block"},[i("span",{staticClass:"demonstration"}),i("el-pagination",{attrs:{layout:"prev, pager, next",total:e.totalItems,"current-page":e.page,"page-size":e.pagelimit},on:{"current-change":e.handleCurrentChange}})],1),i("el-dialog",{staticClass:"dialog-form",attrs:{title:"新增",visible:e.formVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.formVisible=t}}},[i("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.formRules,"label-width":"100px","label-height":"500px"}},[i("el-form-item",{attrs:{label:"服务的图片",prop:"url"}},[i("el-input",{model:{value:e.dialogForm.url,callback:function(t){e.$set(e.dialogForm,"url",t)},expression:"dialogForm.url"}})],1),i("el-form-item",{attrs:{label:"服务的名字",prop:"name"}},[i("el-input",{model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),i("el-form-item",{attrs:{label:"服务详情描述",prop:"details"}},[i("el-input",{model:{value:e.dialogForm.details,callback:function(t){e.$set(e.dialogForm,"details",t)},expression:"dialogForm.details"}})],1),i("el-form-item",{attrs:{label:"单价",prop:"price"}},[i("el-input",{model:{value:e.dialogForm.price,callback:function(t){e.$set(e.dialogForm,"price",t)},expression:"dialogForm.price"}})],1),i("el-form-item",{attrs:{label:"类型",prop:"type"}},[i("el-input",{model:{value:e.dialogForm.type,callback:function(t){e.$set(e.dialogForm,"type",t)},expression:"dialogForm.type"}})],1),i("div",{staticClass:"footer-item"},[i("el-button",{on:{click:e.cancleForm}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dialogForm")}}},[e._v("确 定")])],1)],1)],1)],1),i("div",{class:0==e.type?"a":"b",attrs:{id:"overlay"}},[i("div",{attrs:{id:"dialog"}},[i("h2",[e._v("图片修改")]),i("br"),i("br"),e._v("图片： "),i("br"),i("br"),i("el-input",{model:{value:e.serviceimg,callback:function(t){e.serviceimg=t},expression:"serviceimg"}}),i("br"),i("br"),e._v("名字： "),i("br"),i("el-input",{model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}}),i("br"),e._v("详情： "),i("br"),i("el-input",{model:{value:e.serviceDetails,callback:function(t){e.serviceDetails=t},expression:"serviceDetails"}}),i("br"),e._v("单价： "),i("br"),i("el-input",{model:{value:e.servicePrice,callback:function(t){e.servicePrice=t},expression:"servicePrice"}}),i("br"),e._v("类型： "),i("br"),i("el-input",{model:{value:e.serviceType,callback:function(t){e.serviceType=t},expression:"serviceType"}}),i("br"),i("br"),i("el-button",{attrs:{type:"primary",round:""},on:{click:e.xiugaifun}},[e._v("确认修改")]),i("el-button",{attrs:{type:"primary",round:""},on:{click:e.quxiaofun}},[e._v("取消修改")])],1)])],1)},a=[],o=(i("b0c0"),i("bc3a")),r=i.n(o);function l(e){return r()({url:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/mock-data/table-list.json",method:"get",param:e})}var s=i("b91a"),c={name:"Table",data:function(){return{imgID:"",serviceimg:"",serviceName:"",serviceDetails:"",servicePrice:"",serviceType:"",nextpage:"",title:"",type:0,page:1,pagelimit:4,totalItems:0,listLoading:!0,listQuery:{id:void 0,type:void 0},dialogForm:{},total:0,id:"",tableData:[],deltab:[],multipleSelection:[],formVisible:!1,formRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}]},selectedType:"",options:[{label:"全部",value:""},{label:"代购",value:"1"},{label:"代排队",value:"2"},{label:"代送",value:"3"},{label:"租赁",value:"4"},{label:"快递代取",value:"5"}]}},created:function(){this.fetchData()},methods:{searchByType:function(){var e=this,t=this.selectedType;Object(s["j"])(t).then((function(t){e.tableData=t.data.data}))},handleCurrentChange:function(e){console.log(e),this.page=e,this.fetchData()},bianjifun:function(e){var t=this;console.log(e);var i=this.page,n=this.pagelimit;Object(s["g"])(i,n).then((function(i){t.imgID=i.data[e].id,t.serviceimg=i.data[e].url,t.serviceName=i.data[e].name,t.serviceDetails=i.data[e].details,t.serviceType=i.data[e].type,t.servicePrice=i.data[e].price})).catch((function(){t.listLoading=!1})),this.type=1},xiugaifun:function(){var e=this,t={url:this.serviceimg,name:this.serviceName,id:this.imgID,details:this.serviceDetails,price:this.servicePrice,type:this.serviceType};Object(s["i"])(t).then((function(t){console.log(t),e.fetchData()})),this.type=0},quxiaofun:function(){this.type=0},handleSelectionChange:function(e){this.multipleSelection=e},handleCreate:function(){this.title="新建",this.formVisible=!0},handleDelete:function(e,t){var i=this,n=this.tableData[e].id;console.log(n),this.$confirm("此操作将删除选中数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",showCancelButton:!0}).then((function(){Object(s["d"])(n).then((function(e){console.log(e)}))})).then((function(e){i.fetchData(),console.log(e),i.$message({type:"success",message:"删除成功!"})})).catch((function(){i.$message({type:"info",message:"已取消删除"})}))},handleClose:function(){this.formVisible=!1,this.$refs.dialogForm.resetFields()},fetchData:function(){var e=this;this.listLoading=!0;var t=this.page,i=this.pagelimit;l(this.dialogForm),Object(s["g"])(t,i).then((function(t){e.tableData=t.data,e.totalItems=t.pagecount,e.listLoading=!1}))},submitForm:function(e){var t=this;console.log(111),this.$refs[e].validate((function(e){if(!e)return t.isSubmit=!1,!1;var i={url:t.dialogForm.url,name:t.dialogForm.name,details:t.dialogForm.details,price:t.dialogForm.price,type:t.dialogForm.type};Object(s["a"])(i).then((function(e){console.log(e),t.fetchData(),t.formVisible=!1}))}))},cancleForm:function(){this.$refs.dialogForm.resetFields(),this.formVisible=!1}}},u=c,d=(i("18c3"),i("2877")),m=Object(d["a"])(u,n,a,!1,null,null,null);t["default"]=m.exports}}]);