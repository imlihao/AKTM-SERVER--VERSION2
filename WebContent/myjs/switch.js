//切换到客户中心
function switch2customer() {
    var base = $("#page-wrapper");
    if (document.getElementById("fromcenter")) {
        console.error("重复加载");
        return;
    }
    base.html("");
    var head = getHeadHtml("客户信息");
    var h5 = ['           <div class="row" id="fromcenter">',
        '                <div class="col-lg-12">',
        '                    <div class="panel panel-default">',
        '                        <div class="panel-heading">',
        '                            客户信息',
        '                        </div>',
        '                        <!-- /.panel-heading -->',
        '                        <div class="panel-body">',
        '                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-customer">',
        '                                <thead>',
        '                                    <tr>',
        '                                        <th>编号</th>',
        '                                        <th>姓名</th>',
        '                                        <th>公司</th>',
        '                                        <th>电话</th>',
        '                                        <th>地址</th> ',
        '                                        <th>操作</th>                                        ',
        '                                    </tr>',
        '                                </thead>',
        '                                <tbody>',
        '                                </tbody>',
        '                                   ',
        '                            </table>',
        '                            <!-- /.table-responsive -->',
        '               ',
        '            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">新增</button>',
        '                        </div>',
        '                        <!-- /.panel-body -->',
        '                    </div>',
        '                    <!-- /.panel -->',
        '                </div>',
        '                <!-- /.col-lg-12 -->',
        '            </div>',
        '            <!-- /.row -->',
        '            ',
        '            ',
        '            <div class="row">',
        '                 <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
        '                 <div class="modal-dialog modal-md" role="document">',
        '                 <div class="modal-content">',
        '                   <!-- 自定义新增用户 -->',
        '          ',
        '          ',
        '              <div class="row">',
        '                <div class="col-lg-12">',
        '                    <div class="panel panel-default">',
        '                        <div class="panel-heading">',
        '                            新增客户',
        '                        </div>',
        '                        <div class="panel-body">',
        '                            <div class="row">',
        '                                <div class="col-lg-12">',
        '                                  <form role="form">',
        '                                   ',
        '                                      <div class="form-group">',
        '                                            <label>客户姓名</label>',
        '                                            <input class="form-control" placeholder="name" id="cusname">',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>公司</label>',
        '                                            <input class="form-control" placeholder="company" id="cuscompany">',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>电话</label>',
        '                                            <input class="form-control" placeholder="phone" id="cusphone">',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>地址</label>',
        '                                            <textarea class="form-control" rows="3" id="cusaddr"></textarea>',
        '                                      </div>',
        '                                    <div class="modal-footer">',
        '                                       <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
        '                                       <button type="button" class="btn btn-primary"  data-dismiss="modal" onclick="addcus()">新增</button>',
        '                                    </div>',
        '                                  </form>',
        '                                </div>',
        '                                <!-- /.col-lg-6 (nested) -->',
        '                            </div>',
        '                            <!-- /.row (nested) -->',
        '                        </div>',
        '                        <!-- /.panel-body -->',
        '                    </div>',
        '                    <!-- /.panel -->',
        '                </div>',
        '                <!-- /.col-lg-12 -->',
        '               </div>',
        '                <!-- /.row -->                     ',
        '                </div>',
        '                </div>',
        '                </div>',
        '            </div> ',
        '            ',
        '            ',
        '                       ',
        '           ',
        '            ',
        '              <div class="modal fade "  id="cusop" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
        '                 <div class="modal-dialog modal-md" role="document">',
        '                 <div class="modal-content">',
        '                   <!-- 用户信息修改 -->',
        '                   <div class="row">',
        '                  <div class="col-lg-12">',
        '                      <div class="panel panel-default">',
        '                        <div class="panel-heading">',
        '                            客户信息修改',
        '                        </div>',
        '                        <div class="panel-body">',
        '                            <div class="row">',
        '                                <div class="col-lg-12">',
        '                                  <form role="form">',
        '                                     <div class="form-group">',
        '                                            <label>客户ID</label>',
        '                                            <input class="form-control" placeholder="id" id="cusidop" disabled>',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>客户姓名</label>',
        '                                            <input class="form-control" placeholder="name" id="cusnameop">',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>公司</label>',
        '                                            <input class="form-control" placeholder="company" id="cuscompanyop">',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>电话</label>',
        '                                            <input class="form-control" placeholder="phone" id="cusphoneop">',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>地址</label>',
        '                                            <textarea class="form-control" rows="3" id="cusaddrop"></textarea>',
        '                                      </div>',
        '                                    <div class="modal-footer">',
        '                                        <div class="pull-left">',
        '                                          <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="delcus()">删除</button>',
        '                                        </div>',
        '                                       <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>                                    ',
        '                                       <button type="button" class="btn btn-primary"  data-dismiss="modal" onclick="updatecus()">修改</button>',
        '                                    </div>',
        '                                  </form>',
        '                                </div>',
        '                                <!-- /.col-lg-6 (nested) -->',
        '                            </div>',
        '                            <!-- /.row (nested) -->',
        '                        </div>',
        '                        <!-- /.panel-body -->',
        '                    </div>',
        '                    <!-- /.panel -->',
        '                </div>',
        '                <!-- /.col-lg-12 -->',
        '               </div>',
        '                <!-- /.row -->       ',
        '             <!-- 自定义新增用户end --> ',
        '               ',
        '                </div>',
        '                </div>',
        '                </div>',
        '            '].join("");
    base.append(head);
    base.append(h5);
    dataManager.instance.showall();


}

function getHeadHtml(str) {
    var head = ['  <div class="row">',
        '                <div class="col-lg-12">',
        '                    <h1 class="page-header">' + str + '</h1>',
        '                </div>',
        '                <!-- /.col-lg-12 -->',
        '            </div>',
        '            <!-- /.row -->',
        '                <!-- /.row -->'].join("");
    return head;
}


//切换到合同中心
function switch2from() {
    var base = $("#page-wrapper");
    if (document.getElementById("ordercenter")) {
        console.error("重复加载");
        return;
    }
    base.html("");
  
    var head = getHeadHtml("发货合同中心");
    var table = ['              <!-- /.row -->',
        '            <div class="row" id="ordercenter">',
        '                <div class="col-lg-12">',
        '                    <div class="panel panel-default">',
        '                        <div class="panel-heading">',
        '                            发货单',
        '                        </div>',
        '                        <!-- /.panel-heading -->',
        '                        <div class="panel-body">',
        '                            <table width="100%" class=" table table-striped table-bordered table-hover " id="dataTables-invoice">',
        '                                <thead>',
        '                                    <tr>',
        '                                        <th>单号</th>',
        '                                        <th>发送者姓名</th>',
        '                                        <th>发送者电话</th>',
        '                                        <th>货物信息</th>',
        '                                        <th>接受者</th>',
        '                                        <th>送往地址</th>',
        '                                        <th>订单状态</th> ',
        '                                        <th>操作</th>                                        ',
        '                                    </tr>',
        '                                </thead>',
        '                                <tbody>',
        '                                </tbody>',
        '                                   ',
        '                            </table>',
        '                            <!-- /.table-responsive -->',
        '            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm"  onclick="invsaddpre()">新增订单</button>',
        '               ',
        '                        </div>',
        '                        <!-- /.panel-body -->',
        '                    </div>',
        '                    <!-- /.panel -->',
        '                </div>',
        '                <!-- /.col-lg-12 -->',
        '            </div>',
        '            <!-- /.row -->',
        '            ',
        '            ',
        '            <div class="row">',
        '                 <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
        '                 <div class="modal-dialog modal-dialog" role="document">',
        '                 <div class="modal-content">',
        '                   <!-- 自定义新增用户 -->',
        '          ',
        '          ',
        '              <div class="row">',
        '                <div class="col-lg-12">',
        '                    <div class="panel panel-default">',
        '                        <div class="panel-heading">',
        '                             新增订单',
        '                        </div>',
        '                        <div class="panel-body">',
        '                            <div class="row">',
        '                                <div class="col-lg-12">',
        '                                  <form role="form">',
        '                                      <div class="form-group">',
        '                                            <label>货物名称</label>',
        '                                            <input type="text" class="form-control" placeholder="good_name" id="good_name">',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>货物数量</label>',
        '                                            <input  type="number" class="form-control" placeholder="good_num" id="good_num">',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>货物标识符</label>',
        '                                            <input type="text" class="form-control" placeholder="good_identifier" id="good_identifier">',
        '                                      </div>',
        '                                      ',
        '                                        <div class="form-group">',
        '                                            <label>客户</label>',
        '                                            <select class="form-control" id="invselect">',
        '                                                <option>1</option>',
        '                                                <option>2</option>',
        '                                                <option>3</option>',
        '                                                <option>4</option>',
        '                                                <option>5</option>',
        '                                            </select>',
        '                                        </div>',
        '                                      ',
        '                                        ',
        '                                      <div id="invsenderinfo">',
        '                                    ',
        '                                      </div>',
        '                                      ',
        '                                     <div class="form-group">',
        '                                     ',
        '                                            <label>仓库操作员</label>',
        '                                            <select class="form-control" id="invselectwop">',
        '                                                <option>1</option>',
        '                                                <option>2</option>',
        '                                                <option>3</option>',
        '                                                <option>4</option>',
        '                                                <option>5</option>',
        '                                            </select>',
        '                                         ',
        '                                      </div>',
        '                                       <div class="form-group ">                                   ',
        '                                            <label>司机</label>',
        '                                            <select class="form-control" id="invselectdriver">',
        '                                                <option>1</option>',
        '                                                <option>2</option>',
        '                                                <option>3</option>',
        '                                                <option>4</option>',
        '                                                <option>5</option>',
        '                                            </select>                                 ',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>接收人姓名</label>',
        '                                            <input type="text"  class="form-control" placeholder="receiver_name" id="receiver_name">',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>接收人电话</label>',
        '                                            <input type="tel" class="form-control" placeholder="receiver_phone" id="receiver_phone">',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>费用</label>',
        '                                            <input  type="number" class="form-control"  id="inv_cost" >',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>客服人员</label>',
        '                                            <input class="form-control"  id="opid" disabled>',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>送往</label>',
        '                                            <textarea class="form-control" rows="3" id="receiver_addr"></textarea>',
        '                                      </div>',
        '                                      ',
        '                                      <div class="pull-right">',
        '                                      <button  type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
        '                                      <button  type="reset" class="btn btn-default">重置</button>',
        '                                      <button  type="button" class="btn btn-default" id="inv_submit" onclick="invAdd()" data-dismiss="modal">提交</button>',
        '                                      </div>',
        '                                  </form>',
        '                                </div>',
        '                                <!-- /.col-lg-6 (nested) -->',
        '                            </div>',
        '                            <!-- /.row (nested) -->',
        '                        </div>',
        '                        <!-- /.panel-body -->',
        '                    </div>',
        '                    <!-- /.panel -->',
        '                </div>',
        '                <!-- /.col-lg-12 -->',
        '               </div>',
        '                <!-- /.row -->           ',
        '             <!-- 自定义新增用户end -->               ',
        '                </div>',
        '                </div>',
        '                </div>',
        '            </div> ',
        '              <div class="row">',
        '                  <div class="modal fade bs-example-modal-sm2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
        '                 <div class="modal-dialog modal-dialog" role="document">',
        '                 <div class="modal-content">',
        '                   <!-- 自定义新增用户 -->',
        '          ',
        '          ',
        '              <div class="row">',
        '                <div class="col-lg-12">',
        '                    <div class="panel panel-default">',
        '                        <div class="panel-heading">',
        '                            订单操作',
        '                        </div>',
        '                        <div class="panel-body">',
        '                            <div class="row">',
        '                                <div class="col-lg-12">',
        '                                  <form role="form">',
        '                                     <div class="form-group">',
        '                                            <label>单号</label>',
        '                                            <input type="text" class="form-control" placeholder="good_name" id="inv_id2" disabled>',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>货物名称</label>',
        '                                            <input type="text" class="form-control" placeholder="good_name" id="good_name2" disabled>',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>货物数量</label>',
        '                                            <input  type="number" class="form-control" id="good_num2" disabled>',
        '                                      </div>',
        '                   ',
        '                                      ',
        '                                        <div class="form-group">',
        '                                            <label>客户</label>',
        '                                             <input type="text" class="form-control" id="invselect2" disabled>',
        '                                        </div>',
        '                                      ',
        '                                    ',
        '                                      ',
        '                                     <div class="form-group ">                                          ',
        '                                            <label>仓库操作员</label>',
        '                                          <input type="text" class="form-control" id="invselectwop2" disabled>',
        '                                      </div>',
        '                                      <div class="form-group ">                                 ',
        '                                            <label>司机</label>',
        '                                           <input type="text" class="form-control" id="invselectdriver2" disabled>',
        '                                  ',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>接收人姓名</label>',
        '                                            <input type="text"  class="form-control" placeholder="receiver_name" id="receiver_name2" disabled>',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>接收人电话</label>',
        '                                            <input type="tel" class="form-control" placeholder="receiver_phone" id="receiver_phone2" disabled>',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>客服人员</label>',
        '                                            <input class="form-control"  id="opid2" disabled>',
        '                                      </div>',
        '                                      <div class="form-group">',
        '                                            <label>费用</label>',
        '                                            <input class="form-control"  id="inv_cost2" disabled>',
        '                                      </div>',
        '                                      ',
        '                                      <div class="form-group">',
        '                                            <label>送往</label>',
        '                                            <textarea class="form-control" rows="3" id="receiver_addr2" disabled></textarea>',
        '                                      </div>',
        '                                      ',
        '                                      <div class="pull-right">',
        '                                      <button  type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
        '                                      <button  type="button" class="btn btn-default" id="inv_submit2" onclick="delInv()" data-dismiss="modal">停止订单</button>',
        '                                      </div>',
        '                                  </form>',
        '                                </div>',
        '                                <!-- /.col-lg-6 (nested) -->',
        '                            </div>',
        '                            <!-- /.row (nested) -->',
        '                        </div>',
        '                        <!-- /.panel-body -->',
        '                    </div>',
        '                    <!-- /.panel -->',
        '                </div>',
        '                <!-- /.col-lg-12 -->',
        '               </div>',
        '                <!-- /.row -->           ',
        '             <!-- 自定义新增用户end -->               ',
        '                </div>',
        '                </div>',
        '                </div>',
        '            ',
        '            </div>',
        '            ',
        '        </div>',
        '        <!-- /#page-wrapper -->'].join("");

        var grid=['  <div class="row">',
'              <div class="col-lg-6">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            订单完成情况',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body" id="morris-donut-chart-body">',
'                            <div id="morris-donut-chart2"></div>',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                  ',
'                <div class="col-lg-6">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                             成员订单归属',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body" id="morris-bar-chart-body">',
'                            <div id="morris-bar-chart2"></div>',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'             </div>'].join("");
    base.append(head);
    base.append(table);
    base.append(grid);
    dataManager.instance.showall();
}

//切换到出库单
function switch2odo() {
    if (document.getElementById("dataTables-odo")) {
        console.error("重复加载");
        return;
    }

    var head=getHeadHtml("出库管理");
    var body=[' <div class="row" id="chukuguanli">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            出库单',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body">',
'                            <table   class="table table-striped table-bordered table-hover" width="100%" id="dataTables-odo">',
'                                <thead>',
'                                    <tr>',
'                                        <th>单号</th>',
'                                        <th>货物名称</th>',
'                                        <th>数量</th>',
'                                        <th>时间</th>',
'                                        <th>订单状态</th> ',
'                                        <th>操作</th>                                        ',
'                                    </tr>',
'                                </thead>',
'                               ',
'                                <tbody>',
'                                </tbody>',
'                                   ',
'                            </table>',
'                            <!-- /.table-responsive -->',
'               ',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'            ',
'            ',
'            <div  class="row">',
'                  <!-- Modal -->',
'                            <div class="modal fade" id="odomodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">',
'                                <div class="modal-dialog">',
'                                    <div class="modal-content">',
'                                        <div class="modal-header">',
'                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
'                                            <h4 class="modal-title" id="myModalLabel">出库单</h4>',
'                                        </div>',
'                                        <div class="modal-body" id="odomodal_body" >',
'                                            <h4>单号：dddddd3232</h4>                       ',
'                                            <pre>单号：dddddd3232</pre>',
'                                            <pre>单号：dddddd3232</pre>',
'                                            <pre>单号：dddddd3232</pre>',
'                                        </div>',
'                                        <div class="modal-footer">',
'                                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
'                                            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="odomark()">标记为已完成</button>',
'                                        </div>',
'                                    </div>',
'                                    <!-- /.modal-content -->',
'                                </div>',
'                                <!-- /.modal-dialog -->',
'                            </div>',
'                            <!-- /.modal -->',
'            </div>'].join("");
      var base = $("#page-wrapper");
      base.html(head);
      base.append(body);
      $("#chukuguanli").append(getDismisPanel(2,1,2));
       $("#chukuguanli").append(getGonggaoPanel());
      dataManager.instance.showall();
}

//切换到装配
function switch2load() {
  if (document.getElementById("dataTables-loaddo")) {
        console.error("重复加载");
        return;
    }
    var table=['           <div class="row">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            装车信息单',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body">',
'                            <table   class="table table-striped table-bordered table-hover" width="100%" id="dataTables-loaddo">',
'                                <thead>',
'                                    <tr>',
'                                        <th>单号</th>',
'                                        <th>货物名称</th>',
'                                        <th>数量</th>',
'                                        <th>车牌号</th>',
'                                        <th>操作员</th>',
'                                        <th>时间</th>',
'                                        <th>订单状态</th> ',
'                                        <th>操作</th>                                        ',
'                                    </tr>',
'                                </thead>',
'                               ',
'                                <tbody>',
'                                </tbody>',
'                                   ',
'                            </table>',
'                            <!-- /.table-responsive -->',
'               ',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'            ',
'            ',
'            <div  class="row">',
'                  <!-- Modal -->',
'                            <div class="modal fade" id="loaddomodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">',
'                                <div class="modal-dialog">',
'                                    <div class="modal-content">',
'                                        <div class="modal-header">',
'                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
'                                            <h4 class="modal-title" id="myModalLabel">装车信息单</h4>',
'                                        </div>',
'                                        <div class="modal-body" id="odomodal_body" >',
'                                            <h4>单号：dddddd3232</h4>                       ',
'                                            <pre>单号：dddddd3232</pre>',
'                                            <pre>单号：dddddd3232</pre>',
'                                            <pre>单号：dddddd3232</pre>',
'                                        </div>',
'                                        <div class="modal-footer">',
'                                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
'                                            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="loaddomark()">标记为已完成</button>',
'                                        </div>',
'                                    </div>',
'                                    <!-- /.modal-content -->',
'                                </div>',
'                                <!-- /.modal-dialog -->',
'                            </div>',
'                            <!-- /.modal -->',
'            </div>',
'        </div>'].join("");
      var base = $("#page-wrapper");
      base.html(getHeadHtml("装车信息单"));
      base.append(table);
      dataManager.instance.showall();
}



//切换到配送中心
function switch2dispatch() {
    if (document.getElementById("dataTables-tps")) {
        console.error("重复加载");
        return;
    }
    
    var table=['   <div class="row" id="peisongzhongxin">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            配送单',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body">',
'                            <table   class="table table-striped table-bordered table-hover" width="100%" id="dataTables-tps">',
'                                <thead>',
'                                    <tr>',
'                                        <th>单号</th>',
'                                        <th>货物名称</th>',
'                                        <th>数量</th>',
'                                        <th>车牌号</th>',
'                                        <th>接收人</th>',
'                                        <th>操作员</th>',
'                                        <th>时间</th>',
'                                        <th>订单状态</th> ',
'                                        <th>操作</th>                                        ',
'                                    </tr>',
'                                </thead>',
'                               ',
'                                <tbody>',
'                                </tbody>',
'                                   ',
'                            </table>',
'                            <!-- /.table-responsive -->',
'               ',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'            ',
'            ',
'            <div  class="row">',
'                  <!-- Modal -->',
'                            <div class="modal fade" id="tpsmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">',
'                                <div class="modal-dialog">',
'                                    <div class="modal-content">',
'                                        <div class="modal-header">',
'                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
'                                            <h4 class="modal-title" id="myModalLabel">装车信息单</h4>',
'                                        </div>',
'                                        <div class="modal-body" id="tpsmodal_body" >',
'                                            <h4>单号：dddddd3232</h4>                       ',
'                                            <pre>单号：dddddd3232</pre>',
'                                            <pre>单号：dddddd3232</pre>',
'                                            <pre>单号：dddddd3232</pre>',
'                                        </div>',
'                                        <div class="modal-footer">',
'                                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
'                                            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="tpsmark()">标记为已完成</button>',
'                                        </div>',
'                                    </div>',
'                                    <!-- /.modal-content -->',
'                                </div>',
'                                <!-- /.modal-dialog -->',
'                            </div>',
'                            <!-- /.modal -->',
'            </div>'].join("");
      var base = $("#page-wrapper");
      base.html(getHeadHtml("配送信息中心"));
      base.append(table);
      $("#peisongzhongxin").append(getDismisPanel(3,2,1));
       $("#peisongzhongxin").append(getGonggaoPanel());
      dataManager.instance.showall();
}

//切换到系统用户信息中心
function switch2sysuser(type) {

    var base = $("#page-wrapper");
    base.html("");
    base.append(getHeadHtml(syspost2String(type)+"中心"));
    base.append(' <div class="row" id="sysusercenter">');
    base.append('</div>');
    var pop=[' ',
'              <div class="modal fade bs-example-modal-lg" id="sysadd" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
'                 <div class="modal-dialog modal-md" role="document">',
'                 <div class="modal-content">',
'                   <!-- 自定义新增用户 -->',
'          ',
'              <div class="row">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            新增系统用户',
'                        </div>',
'                        <div class="panel-body">',
'                            <div class="row">',
'                                <div class="col-lg-12">',
'                                  <form role="form">',
'                                     <div class="form-group">',
'                                            <label>工号</label>',
'                                            <input type="number" class="form-control" placeholder="id" id="sysid">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>姓名</label>',
'                                            <input class="form-control" placeholder="name" id="sysname">',
'                                      </div>',
'                                     ',
'                                      <div class="form-group">',
'                                            <label>电话</label>',
'                                            <input class="form-control" placeholder="phone" id="sysphone">',
'                                      </div>',
'                                      ',
'                                      ',
'                                      <div class="form-group">',
'                                            <label>密码</label>',
'                                            <input class="form-control" type="password" placeholder="psd" id="syspsd">',
'                                      </div>',
'                                ',
'                                      ',
'                                       <div class="form-group">',
'                                            <label>类型</label>',
'                                            <select class="form-control" id="systype">',
'                                                <option value="2">普通操作员</option>',
'                                                <option value="3">仓库操作员</option>',
'                                                <option value="4">司机</option>',
'                                            </select>',
'                                       </div>',
'                                      <div class="form-group" id="auto">',
'                    ',
'                                      </div>',
'                                    <div class="modal-footer">',
'                                       <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
'                                       <button type="button" class="btn btn-primary"  data-dismiss="modal" onclick="addsys()">新增</button>',
'                                    </div>',
'                                  </form>',
'                                </div>',
'                                <!-- /.col-lg-6 (nested) -->',
'                            </div>',
'                            <!-- /.row (nested) -->',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'               </div>',
'                <!-- /.row -->                     ',
'                </div>',
'                </div>',
'                </div>',
'           ',
'            ',
'            ',
'                       ',
'           ',
'            ',
'              <div class="modal fade "  id="sysop"  tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
'                 <div class="modal-dialog modal-md" role="document">',
'                 <div class="modal-content">',
'                   <!-- 用户信息修改 -->',
'                   <div class="row">',
'                  <div class="col-lg-12">',
'                      <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            客户信息修改',
'                        </div>',
'                        <div class="panel-body">',
'                            <div class="row">',
'                                <div class="col-lg-12">',
'                                  <form role="form">',
'                                  <div class="form-group">',
'                                            <label>工号</label>',
'                                            <input type="number" class="form-control" placeholder="id" id="sysidop" disabled>',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>姓名</label>',
'                                            <input class="form-control" placeholder="name" id="sysnameop">',
'                                      </div>',
'                                     ',
'                                      <div class="form-group">',
'                                            <label>电话</label>',
'                                            <input class="form-control" placeholder="phone" id="sysphoneop">',
'                                      </div>',
'                                      ',
'                                      ',
'                                      <div class="form-group">',
'                                            <label>密码</label>',
'                                            <input class="form-control" type="password" placeholder="phone" id="syspsdop">',
'                                      </div>',
'                                      ',
'                                      <div class="form-group">',
'                                            <label>类型</label>',
'                                            <input class="form-control"  placeholder="type" id="systypeop" disabled>',
'                                      </div>',
'                                       <div class="form-group"  id="autoiddiv">',
'                       ',
'                                      </div>',
'                                      ',
'                                    <div class="modal-footer">',
'                                        <div class="pull-left">',
'                                          <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="delsys()">删除</button>',
'                                        </div>',
'                                       <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>                                    ',
'                                       <button type="button" class="btn btn-primary"  data-dismiss="modal" onclick="updatesys()">修改</button>',
'                                    </div>',
'                                  </form>',
'                                </div>',
'                                <!-- /.col-lg-6 (nested) -->',
'                            </div>',
'                            <!-- /.row (nested) -->',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'               </div>',
'                <!-- /.row -->       ',
'             <!-- 自定义新增用户end --> ',
'               ',
'                </div>',
'                </div>',
'                </div>'].join("");
  base.append(pop);
    dataManager.instance.systype=type;
    dataManager.instance.showall();


}

/**
 * 普通
 */
function user1(){
   switch2sysuser(roletype.operator_normal);
}
/**
 * 仓库
 */
function user2(){
   switch2sysuser(roletype.operator_Warehouse);

}
/**
 * 司机
 */
function user3(){
   switch2sysuser(roletype.diver);

}


//权限控制
function powerContrl() {
   
    console.error("权限控制");
    if(dataManager.instance.data.sysu){
       sy=dataManager.instance.data.sysu.roletype;
       if(sy==roletype.diver){
           $("#2order").hide();
           $("#2odo").hide();
           $("#wh").hide();
           $("#2sysuser").hide();
           console.error("dr  ");
           
           switch2load();
       }else if(sy==roletype.operator_normal){
           $("#2odo").hide();
            $("#wh").hide();
           $("#2sysuser").hide();
           console.error("o pp ");
           
           $("#2dispatch").hide();
           $("#2load").hide();
           switch2from();
       }else if(sy==roletype.operator_Warehouse){
           $("#2order").hide();
           $("#2order").hide();
           console.error("wh ");
           $("#2sysuser").hide();
           $("#2load").hide();
           $("#2dispatch").hide();
           switch2odo();
       }else{
           switch2from();
       }
    }

}


//加监听
function addevent() {
    var tar = document.getElementById("2order");
    if (tar) {
        tar.addEventListener("click", switch2from, true);
    } else {
        console.error("没有订单权限");
    }

    var tar = document.getElementById("2odo");
    if (tar) {
        tar.addEventListener("click", switch2odo, true);
    } else {
        console.error("没有出库权限");
    }

    var tar = document.getElementById("2load");
    if (tar) {
        tar.addEventListener("click", switch2load, true);
    } else {
        console.error("没有装配权限");
    }

    var tar = document.getElementById("2dispatch");
    if (tar) {
        tar.addEventListener("click", switch2dispatch, true);
    } else {
        console.error("没有配送权限");
    }


    var tar = document.getElementById("2customer");
    if (tar) {
        tar.addEventListener("click", switch2customer, true);
    } else {
        console.error("没有客户中心权限");
    }


    // //用户权限，分别处理
    // var tar = document.getElementById("2sysuserdirver");
    // if (tar) {
    //     tar.addEventListener("click", user3, true);
    // } else {
    //     console.error("没有更改用户权限");
    // }

    // var tar = document.getElementById("2sysuserwop");
    // if (tar) {
    //     tar.addEventListener("click", user2, true);
    // } else {
    //     console.error("没有更改用户权限");
    // }

    // var tar = document.getElementById("2sysusernop");
    // if (tar) {
    //     tar.addEventListener("click", user1, true);
    // } else {
    //     console.error("没有更改用户权限");
    // }

    var tar = document.getElementById("2sysuser");
    if (tar) {
        tar.addEventListener("click", user1, true);
    } else {
        console.error("没有更改用户权限");
    }
}



function getDismisPanel(d1,d2,d3){
  var dp=['   <div class="col-lg-6">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            最近信息',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body">',
'                            <div class="alert alert-success alert-dismissable">',
'                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
'                                当前已有'+d1+'订单准备完毕.',
'                            </div>',
'                            <div class="alert alert-info alert-dismissable">',
'                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
'                               当前有'+d2+'订单正在准备中.',
'                            </div>',
'                            <div class="alert alert-success alert-dismissable">',
'                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
'                               今日完成'+0+'订单.',
'                            </div>',
'                            <div class="alert alert-info  alert-dismissable">',
'                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
'                                历史完成'+d3+'订单.',
'                            </div>',
'                        </div>',
'                        <!-- .panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-6 -->'].join("");

     return dp;

}



function getGonggaoPanel(){
    var gp=['  <div class="col-lg-6">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            公告',
'                        </div>',
'                        <!-- .panel-heading -->',
'                        <div class="panel-body">',
'                            <div class="panel-group" id="accordion">',
'                                <div class="panel panel-default">',
'                                    <div class="panel-heading">',
'                                        <h4 class="panel-title">',
'                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">全体公告</a>',
'                                        </h4>',
'                                    </div>',
'                                    <div id="collapseOne" class="panel-collapse collapse in">',
'                                        <div class="panel-body">',
'                                           <h4>消息to everyone</h4>',
'                                            <p>请快速的清理手中的未完成的订单，避免影响下一步</p>',
'                                        </div>',
'                                    </div>',
'                                </div>',
'                                <div class="panel panel-default">',
'                                    <div class="panel-heading">',
'                                        <h4 class="panel-title">',
'                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">全体公告</a>',
'                                        </h4>',
'                                    </div>',
'                                    <div id="collapseTwo" class="panel-collapse collapse">',
'                                        <div class="panel-body">',
'                                            <h4>消息to everyone</h4>',
'                                            <p>最近订单处理情况：2</p>    ',
'                                            <p>最近订单处理情况：1</p>',
'                                            <p>最近订单处理情况：2</p>',
'                                        </div>',
'                                    </div>',
'                                </div>',
'                                <div class="panel panel-default">',
'                                    <div class="panel-heading">',
'                                        <h4 class="panel-title">',
'                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">普通公告</a>',
'                                        </h4>',
'                                    </div>',
'                                    <div id="collapseThree" class="panel-collapse collapse">',
'                                        <div class="panel-body">',
'                                            <h4>消息</h4>',
'                                           <p>最近订单处理情况：2</p>    ',
'                                            <p>最近订单处理情况：1</p>',
'                                            <p>最近订单处理情况：2</p>',
'                                        </div>',
'                                    </div>',
'                                </div>',
'                            </div>',
'                        </div>',
'                        <!-- .panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->'].join("");
  return gp;
}

