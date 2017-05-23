$(function () {
    csmsg = new msg(msgType.SCupdateAll, "")
    NetMgr.instance.WSsend(csmsg);
});

/**
 * 刷新订单表格
 */
function updateTableInv(invs) {
    //测试数据
    var dataSet = [
        ['Trident', 'Internet Explorer 4.0', 'Win 95+', '4', 'X'],
        ['Trident', 'Internet Explorer 5.0', 'Win 95+', '5', 'C'],
        ['Trident', 'Internet Explorer 5.5', 'Win 95+', '5.5', 'A'],
        ['Trident', 'Internet Explorer 6', 'Win 98+', '6', 'A'],];

    var dt = $("#dataTables-invoice");
    if (!dt) {
        console.log("没有找到表");
        return;
    }
    dt.DataTable({
        data: invs,
        destroy: "true",
        columns: [
            {
                "title": "单号",
                "data": "INV_ID",
                "width": "auto",

            },
            {
                "title": "发送者姓名",
                "data": "sender_name",
                "width": "auto",


            },
            {
                "title": "发送者电话",
                "data": "sender_phone",
                "width": "auto",

            },
            {
                "title": "货物信息",
                "data": "good_name",
                "width": "auto",

            },
            {
                "title": "接受者",
                "data": "receiver_name",
                "width": "auto",

            },
            {
                "title": "送往地址",
                "data": "receiver_addr",
                "width": "auto",

            },
            {
                "title": "订单状态",
                "data": "inv_status_str",
                "width": "auto",
            },
            {
                "data": null,
                "class": "center",
                "width": "auto",
            }],
        columnDefs: [{
            targets: 7,
            render: function (data, type, row, meta) {
                if(row.inv_status==inv_status.finish){
                   return '<a type="button" class="btn btn-success center"  data-toggle="modal" data-target=".bs-example-modal-sm2"  onClick="invoceOp(' + "'" + row.INV_ID + "',0" + ')" >查看</a>';
                    
                }
                return '<a type="button" class="btn btn-success center"  data-toggle="modal" data-target=".bs-example-modal-sm2"  onClick="invoceOp(' + "'" + row.INV_ID + "',1" + ')" >操作</a>';

            }
        },
        { "orderable": false, "targets": 1 },
        ],
    });
}

/**
 *订单操作
 * */
function invoceOp(id,pos) {
    var inv=dataManager.instance.getInvByid(id);
     if(pos==1){
       $("#inv_submit2").attr('disabled',false);         
     }else{
       $("#inv_submit2").attr('disabled',true);         
     }
     $("#inv_id2").val(inv.INV_ID);
     $("#inv_cost2").val(inv.cost);
     $("#good_name2").val(inv.good_name);
     $("#good_num2").val( inv.good_num);
     $("#invselect2").val(inv.sender_name);    
     $("#receiver_name2").val(inv.receiver_name);
     $("#receiver_phone2").val(inv.receiver_phone);
     $("#receiver_addr2").val(inv.receiver_addr);
     $("#opid2").val(getSysNameById(inv.opid));

    inv.opid = dataManager.instance.sys.user_id;
    $("#invselectwop2").val(dataManager.instance.getOdoById(id).operator_id);
    $("#invselectdriver2").val(dataManager.instance.getloaddoByid(id).diver_id);

    

};

function getSysNameById(id){
    return dataManager.instance.getSysByid(id).name;
}


/**
 * 刷新客户表格
 */
function updateTableCus(cus) {

    var dt = $("#dataTables-customer");
    if (!dt) {
        console.log("没有找到表");
        return;
    }
    dt.DataTable({
        data: cus,
        destroy: "true",
        columns: [
            {
                "title": "编号",
                "data": "cus_id",
                "width": "auto",

            },
            {
                "title": "姓名",
                "data": "sender_name",


            },
            {
                "title": "公司",
                "data": "company",


            },
            {
                "title": "电话",
                "data": "sender_phone",


            },
            {
                "title": "地址",
                "data": "addr",
                "width": "auto",

            },
            {
                "data": null,

            }],
        columnDefs: [{
            targets: 5,
            render: function (data, type, row, meta) {
                return '<a type="button" class="btn btn-success center"  data-toggle="modal" data-target="#cusop" onClick="customerOp(' + row.cus_id + ')" >详细操作</a>';
            }
        },
        { "orderable": false, "targets": 1 },
        ],
    });
}


/**
 *订单操作
 * */
function customerOp(id) {
    $("#cusidop").val(id);
    let cus = dataManager.instance.getCusByid(id);
    if (!cus) {
        console.error("数据里没找到customer:id=" + id);
        return;
    }
    $("#cusaddrop").val(cus.addr);
    $("#cusnameop").val(cus.sender_name);
    $("#cuscompanyop").val(cus.company);
    $("#cusphoneop").val(cus.sender_phone);

};

function invsaddpre() {
    $("#invsenderinfo").html("");

    var se = new Array();
    var cus = dataManager.instance.data.cus;
    //TODO 是否可以增加订单

    se.push(' <option></option>')
    for (i = 0; i < cus.length; i++) {
        se.push(' <option value="' + cus[i].cus_id + '">' + cus[i].sender_name + '</option>')
    }
    $("#invselect").html(se);
    $("#invselect").change(function () {
        var secus = dataManager.instance.getCusByid($("#invselect").val());

        var dat = ['  <div class="form-group">',
            '                                            <label>客户id</label>',
            '                                            <input class="form-control"  value="' + secus.cus_id + '" id="cus_id" disabled>',
            '                                      </div>',
            '                                      ',
            '                                      <div class="form-group">',
            '                                            <label>客户电话</label>',
            '                                            <input class="form-control"  value="' + secus.sender_phone + '" disabled>',
            '         </div>'].join("");
        $("#invsenderinfo").html(dat);
    });



    var ds = dataManager.instance.getSysByType(roletype.diver);
    var dsse = new Array();
    dsse.push(' <option></option>');
    for (i = 0; i < ds.length; i++) {
        dsse.push(' <option value="' + ds[i].user_id + '">' + ds[i].name + '</option>')
    }
    $("#invselectdriver").html(dsse);


    var wops = dataManager.instance.getSysByType(roletype.operator_Warehouse);
    var wopse = new Array();
    wopse.push(' <option></option>');
    for (i = 0; i < wops.length; i++) {
        wopse.push(' <option value="' + wops[i].user_id + '">' + wops[i].name + '</option>')
    }
    $("#invselectwop").html(wopse);


    $("#opid").val(dataManager.instance.sys.name);
}


function invAdd() {
    var inv = new vo.invoice();
    inv.good_name = $("#good_name").val();
    inv.good_num = $("#good_num").val();
    inv.cost = $("#inv_cost").val();
    inv.good_num = $("#good_identifier").val();
    var cusid = $("#invselect").val();
    var cus = dataManager.instance.getCusByid(cusid);
   
    inv.sender_ID = cus.cus_id;
    inv.sender_name = cus.sender_name;
    inv.sender_phone = cus.sender_phone
    inv.receiver_name = $("#receiver_name").val();
    inv.receiver_phone = $("#receiver_phone").val();
    inv.receiver_addr = $("#receiver_addr").val();

    inv.opid = dataManager.instance.sys.user_id;


    var wopid = $("#invselectwop").val();
    var driverid = $("#invselectdriver").val();
    var wop = dataManager.instance.getSysByid(wopid);
    var driver = dataManager.instance.getSysByid(driverid);




    //req
    var reqmsg = new msgClass.invcreate();
    reqmsg.inv = inv;
    reqmsg.autoid = driver.autoid;
    reqmsg.driverid = driver.user_id;
    reqmsg.wopid = wopid;
    reqmsg.drivername = driver.name;
    cs = new msg(msgType.invcreate, JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);

}


function delInv(){
   //req
    
    var reqmsg = new msgClass.invOp();
    reqmsg.invs=new Array();
    reqmsg.invs.push(dataManager.instance.getInvByid($("#inv_id2").val()));
    reqmsg.op=operator.del;
    cs = new msg(msgType.invOp, JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);
}

/**
 *客户操作
 * */
function addcus() {
    var cus = new vo.customer();
    cus.sender_name = $("#cusname").val();
    cus.company = $("#cuscompany").val();
    cus.sender_phone = $("#cusphone").val();
    cus.addr = $("#cusaddr").val();
    var reqmsg = new msgClass.cusOp();
    reqmsg.cus = new Array();
    reqmsg.cus.push(cus);
    reqmsg.op = operator.add;
    cs = new msg(msgType.cusOp, JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);
}

function delcus() {
    cusid = $("#cusidop").val();
    var cus = new vo.customer();
    cus.cus_id = cusid;
    var reqmsg = new msgClass.cusOp();
    reqmsg.cus = new Array();
    reqmsg.cus.push(cus);
    reqmsg.op = operator.del;
    cs = new msg(msgType.cusOp, JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);

}

function updatecus() {
    var cus = dataManager.instance.getCusByid($("#cusidop").val());
    cus.sender_name = $("#cusnameop").val();
    cus.company = $("#cuscompanyop").val();
    cus.sender_phone = $("#cusphoneop").val();
    cus.addr = $("#cusaddrop").val();
    var reqmsg = new msgClass.cusOp();
    reqmsg.cus = new Array();
    reqmsg.cus.push(cus);
    reqmsg.op = operator.update;
    cs = new msg(msgType.cusOp, JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);
}



function syspost2String(rtype) {
    switch (rtype) {
        case roletype.operator_normal:
            return "操作员";
        case roletype.diver:
            return "司机";
        case roletype.operator_Warehouse:
            return "仓库管理员";
        case roletype.sys:
            return "超级管理员";

    }
}



function showsysuser(dat) {
    var base = $("#sysusercenter");
    if (base.length==0) {
        console.error("没找到客户信息div");
        return;
    }
      base.html("");
    dat=dataManager.instance.data.sysusers;
    if (dat) {
        
        for (i = 0; i < dat.length; i++) {
            var ys = dat[i];
            var h5 = [' <div class="col-lg-4">',
                '                    <div class="panel panel-default">',
                '                        <div class="panel-heading">',
                '                            ' + syspost2String(ys.roletype),
                '                        </div>',
                '                        <!-- /.panel-heading -->',
                '                        <div class="panel-body">',
                '                            <div class="col-lg-offset-1">',
                '                            <h3>姓名:' + ys.name + '</h3>   ',
                '                            <h3>工号：' + ys.user_id + '</h3>',
                '                            <h3>电话:' + ys.phone + '</h3>',
                '                            <h3>类别：' + syspost2String(ys.roletype) + '</h3>      ',
                '                            <h3>' + (ys.autoid ? '车牌号:' + ys.autoid : '&nbsp') + '</h3>',
                '                            <div class="pull-right">',
                '                            <button type="button"   data-toggle="modal" data-target="#sysadd" class="btn btn-outline btn-success btn-lg" onClick="sysPre()">增加用户</button>',                
                '                            <button type="button"   data-toggle="modal" data-target="#sysop" class="btn btn-outline btn-success btn-lg" onClick="sysop('+ys.user_id +')">操作</button>',
                '                            </div>                            ',
                '                            </div>                            ',
                '                        </div>',
                '                        <!-- /.panel-body -->',
                '                    </div>',
                '                    <!-- /.panel -->',
                '                </div>',
                '                <!-- /.col-lg-6 -->',
                '             '].join("");
            base.append(h5);
        }
    }


}

function sysop(id){
  var sys=dataManager.instance.getSysByid(id);
  $("#sysidop").val(sys.user_id);
  $("#sysnameop").val(sys.name);
  $("#sysphoneop").val(sys.phone);
  $("#syspsdop").val(sys.psd);
  $("#systypeop").val(syspost2String(sys.roletype));
  if(sys.roletype==roletype.diver){
     var ht=['                     <label>车牌号</label>',
'                                            <input class="form-control"  placeholder="autoid" id="autoidop">'].join("");
    $("#autoiddiv").html(ht);
   $("#autoidop").val(sys.autoid);
  }else{

      $("#autoiddiv").html("");
  }


}
function sysPre(){

   $("#systype").change(function () {
      if( $("#systype").val()==roletype.diver){
      var ht=['                     <label>车牌号</label>',
'                                            <input class="form-control"  placeholder="autoid" id="autoid">'].join("");
        $("#auto").html(ht);
      }else{

       $("#auto").html("");
      }
    });

}

function addsys(){
  var sys=new vo.sysuer();
  sys.user_id= $("#sysid").val();
  sys.name= $("#sysname").val();
  sys.phone= $("#sysphone").val();
  sys.psd=$("#syspsd").val();
  sys.roletype=$("#systype").val();

  
  sys.autoid=$("#autoid").val()?$("#autoid").val():null;
  


  var reqmsg=new msgClass.sysOp();
  reqmsg.itype=msgType.sysOp;
  reqmsg.op=operator.add;
  reqmsg.user=new Array();
  reqmsg.user.push(sys);
  var sc=new msg(msgType.sysOp,JSON.stringify(reqmsg));
  NetMgr.instance.WSsend(sc);  
}

function delsys(){
  var sys=dataManager.instance.getSysByid($("#sysidop").val());

  var reqmsg=new msgClass.sysOp();
  reqmsg.itype=msgType.sysOp;
  reqmsg.op=operator.del;
  reqmsg.user=new Array();
  reqmsg.user.push(sys);
  var sc=new msg(msgType.sysOp,JSON.stringify(reqmsg));
  NetMgr.instance.WSsend(sc); 

}
function updatesys(){
   var sys=dataManager.instance.getSysByid($("#sysidop").val());
  sys.name= $("#sysnameop").val();
  sys.phone= $("#sysphoneop").val();
  sys.psd=$("#syspsdop").val();
  sys.autoid=$("#autoidop").val();

  var reqmsg=new msgClass.sysOp();
  reqmsg.itype=msgType.sysOp;
  reqmsg.op=operator.update;
  reqmsg.user=new Array();
  reqmsg.user.push(sys);
  var sc=new msg(msgType.sysOp,JSON.stringify(reqmsg));
  NetMgr.instance.WSsend(sc); 
}



/**
 * 刷新odo
 */
function updateTableOdo(odos) {
    //测试数据
    var dt = $("#dataTables-odo");
    if (!dt) {
        console.log("没有找到表");
        return;
    }
      dt.DataTable({
        data: odos,
        destroy: "true",
        responsive: true,
        columns: [
            {
                "title": "单号",
                "data": "odo_id",
                "width": "auto",

            },
            {
                "title": "货物名称",
                "data": "good_name",
                "width": "auto",


            },
            {
                "title": "数量",
                "data": "good_num",
                "width": "auto",

            },
            {
                "title": "时间",
                "data": "UTCtimeStamp_str",
                "width": "auto",

            },
            {
                "title": "订单状态",
                "data": "co_status_str",
                "width": "auto",

            },
            {
                "data": null,
                "width": "auto",
            }],
        columnDefs: [{
            targets: 5,
            render: function (data, type, row, meta) {
                if(row.odo_status!=order_status.ONGOING) return '<button  class="btn btn-success disabled"    >操作</button>';
                return '<a type="button" class="btn btn-success "  data-toggle="modal" data-target="#odomodal"   onClick="odoOp(' + "'" + row.odo_id + "'" + ')" >操作</a>';
            }
        },
        { "orderable": false, "targets": 1 },
        ],
    });
}


/**
 * 刷新odo
 */
function updateTablePdo(pdos) {
    //测试数据
    var dt = $("#dataTables-pdo");
    if (!dt) {
        console.log("没有找到表");
        return;
    }
      dt.DataTable({
        data: pdos,
        destroy: "true",
        responsive: true,
        columns: [
            {
                "title": "单号",
                "data": "pdo_id",
                "width": "auto",

            },
            {
                "title": "货物名称",
                "data": "good_name",
                "width": "auto",


            },
            {
                "title": "数量",
                "data": "good_num",
                "width": "auto",

            },
            {
                "title": "时间",
                "data": "UTCtimeStamp",
                "width": "auto",

            },
            {
                "title": "订单状态",
                "data": "pdo_status",
                "width": "auto",

            },
            {
                "data": null,
                "width": "auto",
            }],
        columnDefs: [{
            targets: 5,
            render: function (data, type, row, meta) {
                if(row.pdo_status!=order_status.ONGOING) return '<button  class="btn btn-success disabled"    >操作</button>';
                return '<a type="button" class="btn btn-success "  data-toggle="modal" data-target="#odomodal"   onClick="pdoOp(' + "'" + row.pdo_id + "'" + ')" >操作</a>';
            }
        },
        { "orderable": false, "targets": 1 },
        ],
    });
}

function pdoOp(id){ 
   var html=new Array();
    var pdo=dataManager.instance.getPdoById(id);
    html.push(' <h3>单号：'+pdo.pdo_id+'</h3>  ');
    html.push(' <h4>&nb sp</h4>  ');
    html.push(' <h4>货物：'+pdo.good_name+'</h4>  ');
    html.push(' <h4>数量：'+pdo.good_num+'</h4>  ');
    html.push(' <h4>操作员：'+getSysNameById(pdo.operator_id)+'</h4>  ');
    html.push(' <h4>时间：'+pdo.UTCtimeStamp+'</h4>  ');
    $("#odomodal_body").html(html);
    temp_pdoid=pdo.pdo_id; 
}
var temp_pdoid;

function pdomark(){
   marksolve(od_type.pdo,temp_pdoid);
}



function odoOp(id){ 
   var html=new Array();
    var odo=dataManager.instance.getOdoById(id);
    html.push(' <h3>单号：'+odo.odo_id+'</h3>  ');
    html.push(' <h4>&nb sp</h4>  ');
    html.push(' <h4>货物：'+odo.good_name+'</h4>  ');
    html.push(' <h4>数量：'+odo.good_num+'</h4>  ');
    html.push(' <h4>操作员：'+getSysNameById(odo.operator_id)+'</h4>  ');
    html.push(' <h4>时间：'+odo.UTCtimeStamp_str+'</h4>  ');
    $("#odomodal_body").html(html);
    temp_odoid=odo.odo_id;
}

var temp_odoid=null;


function odomark(){
   marksolve(od_type.odo,temp_odoid);
}




/**
 * 刷新loaddo
 */
function updateTableloaddo(odos) {
    //测试数据
    var dt = $("#dataTables-loaddo");
    if (!dt) {
        console.log("没有找到表");
        return;
    }
      dt.DataTable({
        data: odos,
        destroy: "true",
        responsive: true,
        columns: [
            {
                "title": "单号",
                "data": "loaddo_id",
                "width": "auto",

            },
            {
                "title": "货物名称",
                "data": "good_name",
                "width": "auto",


            },
            {
                "title": "数量",
                "data": "good_num",
                "width": "auto",

            },
              {
                "title": "车牌号",
                "data": "autoid",
                "width": "auto",

            },
            {
                "title": "操作员",
                "data": "op_name",
                "width": "auto",

            },
            {
                "title": "时间",
                "data": "UTCTimeStamp_str",
                "width": "auto",

            },
            {
                "title": "订单状态",
                "data": "loaddo_status_syr",
                "width": "auto",

            },
            {
                "data": null,
                "width": "auto",
            }],
        columnDefs: [{
            targets: 7,
            render: function (data, type, row, meta) {
                if(row.loaddo_status!=order_status.ONGOING) return '<button  class="btn btn-success disabled">操作</button>';
                return '<a type="button" class="btn btn-success "  data-toggle="modal" data-target="#loaddomodal"   onClick="loadOp(' + "'" + row.loaddo_id + "'" + ')" >操作</a>';
            }
        },
        { "orderable": false, "targets": 1 },
        ],
    });
}

function loadOp(id){ 
    var html=new Array();
    var loaddo=dataManager.instance.getloaddoByid(id);
    html.push(' <h3>单号：'+loaddo.loaddo_id+'</h3>  ');
    html.push(' <h4>&nbsp</h4>  ');
    html.push(' <h4>货物：'+loaddo.good_name+'</h4>  ');
    html.push(' <h4>数量：'+loaddo.good_num+'</h4>  ');
    html.push(' <h4>交接车牌号：'+loaddo.autoid+'</h4>  ');
    html.push(' <h4>操作员：'+loaddo.op_name+'</h4>  ');
    html.push(' <h4>时间：'+loaddo.UTCTimeStamp_str+'</h4>  ');
     html.push(' <h4>&nbsp</h4>  ');
    $("#odomodal_body").html(html);
    temp_loaddoid=loaddo.loaddo_id;
    
}
var temp_loaddoid=null;

function loaddomark(){
    marksolve(od_type.loaddo,temp_loaddoid);
}

/**
 * type类型 pk 主键
 */
function marksolve(type,pk){
    var reqmsg = new msgClass.markitsolve();
    reqmsg.pk=pk;
    reqmsg.type=type;
    cs = new msg(msgType.markitsolve, JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);
}


/**
 * 刷新tps
 */
function updateTableTps(odos) {
    //测试数据
    var dt = $("#dataTables-tps");
    if (!dt) {
        console.log("没有找到表");
        return;
    }
      dt.DataTable({
        data: odos,
        destroy: "true",
        responsive: true,
        columns: [
            {
                "title": "单号",
                "data": "transport_id",
                "width": "auto",

            },
            {
                "title": "货物名称",
                "data": "good_name",
                "width": "auto",


            },
            {
                "title": "数量",
                "data": "good_num",
                "width": "auto",

            },
              {
                "title": "车牌号",
                "data": "auto_id",
                "width": "auto",

            }, 
            {
                "title": "接收人",
                "data": "receiver_name",
                "width": "auto",

            },
            {
                "title": "操作员",
                "data": "diver_name",
                "width": "auto",

            },
            {
                "title": "时间",
                "data": "UTCTimeStamp_str",
                "width": "auto",

            },
            {
                "title": "订单状态",
                "data": "transport_status_str",
                "width": "auto",

            },
            {
                "data": null,
                "width": "auto",
            }],
        columnDefs: [{
            targets: 8,
            render: function (data, type, row, meta) {
                if(row.transport_status!=order_status.ONGOING) return '<button  class="btn btn-success disabled">操作</button>';
                return '<a type="button" class="btn btn-success "  data-toggle="modal" data-target="#tpsmodal"   onClick="tpsOp(' + "'" + row.transport_id + "'" + ')" >操作</a>';
            }
        },
        { "orderable": false, "targets": 1 },
        ],
    });
}

function tpsOp(id){ 
    var html=new Array();
    var tps=dataManager.instance.getTpsByid(id);
    html.push(' <h3>单号：'+tps.transport_id+'</h3>  ');
    html.push(' <h4>&nbsp</h4>  ');
    html.push(' <h4>货物：'+tps.good_name+'</h4>  ');
    html.push(' <h4>数量：'+tps.good_num+'</h4>  ');
    html.push(' <h4>车牌号：'+tps.auto_id+'</h4>  ');
    html.push(' <h4>司机：'+tps.diver_name+'</h4>  ');

    html.push(' <h4>&nbsp</h4>  ');
    html.push(' <h4>接收人：'+tps.receiver_name+'</h4>  ');
    html.push(' <h4>电话：'+tps.receiver_phone+'</h4>  ');
    html.push(' <h4>地址：'+tps.receiver_addr+'</h4>  ');

     html.push(' <h4>&nbsp</h4>  ');
    html.push(' <h4>时间：'+tps.UTCTimeStamp_str+'</h4>  ');
    $("#tpsmodal_body").html(html);
    temp_tpsid=tps.transport_id;
    
}
var temp_tpsid=null;

function tpsmark(){
    marksolve(od_type.tps,temp_tpsid);
}






function drowGrid1(a1,a2,a3){
    console.error(a1,a2,a3);
    
    if(!document.getElementById("morris-donut-chart2")){
     return;
   }
   $("#morris-donut-chart-body").html('<div id="morris-donut-chart2"></div>');
   $("#morris-bar-chart-body").html('<div id="morris-bar-chart2"></div>');
     Morris.Donut({
        element: 'morris-donut-chart2',
        data: [{
            label: "正在出库的订单",
            value:a1 
        }, {
            label: "正在装车的订单",
            value:a2
        }, {
            label: "正在配送的订单",
            value:a3
        }],
        resize: true
    });

    
}

function drowGrid2(){
     if(!document.getElementById("morris-bar-chart2")){
     return;
   }
 Morris.Bar({
        element: 'morris-bar-chart2',
        data: [{
            y: '潘子',
            a: 2,
            b: 1
        }, {
            y: '仓库操作员1',
            a: 3,
            b: 2
        }, {
            y: '操作员2',
            a: 4,
            b: 2
        }, ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['未开始的', '正在进行的'],
        hideHover: 'auto',
        resize: true
    });

}


function showname(){    
        $("#sysu_name").text("用户:" + dataManager.instance.sys.name + "("+getSysEnByType(dataManager.instance.sys.roletype)+")");
        console.error( $("#sysu_name").val());
}