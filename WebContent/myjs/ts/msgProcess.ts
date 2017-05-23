namespace msgProcess {
  export function onlogin() {
    window.location.href = "aktm_index.html";
  }
  /**
   * 警告
   */
  export function onalret(dat: msgClass.alret) {
    alert(dat.msg);
  }
  /**
   * 更新所有的消息
   */
  export function onSCupdateAll(dat: msgClass.SCupdateAll) {
    dataManager.instance.data = dat;
  }

  /**
  * 登出
  */
  export function onlogout(dat) {
    window.location.href = "login.html";
  }
}



namespace msgClass {
  export class CSloginMsg {
    name: string;
    psd: string;
  }

  /**
 * 登陆回复的消息，根据权限分配信息；
 */
  export class SCupdateAll {
    itype = msgType.login;
    sysu: vo.sysuer;
    invs: vo.invoice[];
    sysusers: vo.sysuer[];
    odos: vo.odo[];
    loaddos: vo.loaddo[];
    tps: vo.transport[];
    cus: vo.customer[];
  }

  export class invOp {
    itype = msgType.invOp;
    op: number;
    invs: vo.invoice[];

  }

  export class sysOp {
    itype = msgType.sysOp;
    op: number;
    user: vo.sysuer[];
  }

  export class odoOp {
    itype = msgType.odoOp;
    op: number;
    odos: vo.odo[];
  }

  export class tpsOp {
    itype = msgType.tpsOp;
    op: number;
    tps: vo.transport[];
  }

  export class cusOp {
    itype = msgType.cusOp;
    op: number;
    cus: vo.customer[];
  }

  export class lodOp {
    itype = msgType.lodOp;
    op: number;
    loaddos: vo.loaddo[];
  }

  export class alret {
    itype = msgType.alret;
    msg: string;
  }

  export class invcreate {
    itype = msgType.invcreate;
    inv: vo.invoice;
    driverid: number;
    wopid: number;
    autoid: string;
    drivername: string;
  }
  export class markitsolve{
	 pk:string;
 	type:number;
	 itype=msgType.markitsolve;
  }


}



namespace vo {
  /**
   * 客户
   */
  export class customer {
    cus_id: number;
    sender_name: string;
    company: string;
    sender_phone: string;
    addr: string;
    // 标志位
    co_status: number;
  }


  /**
   * 发货合同
   */
  export class invoice {
    INV_ID: string;

    //货物信息
    good_num: number;
    good_name: string;
    good_identifier: number;

    //发送者信息
    sender_name: string;
    sender_ID: number;
    sender_phone: string;

    //操作员id
    opid: number;

    UTCTimeStamp: number;

    //接受者信息
    receiver_name: string;
    receiver_phone: string;
    receiver_addr: string;
                
    //花费
    cost: number;

    co_status: number;
    inv_status: number;

    
    //仅客户端显示用
    timeString ;
    inv_status_str;
  }


  export function inv_stu2Sstring(inv_st: inv_status) {
    switch (inv_st) {
      case inv_status.chuku:
        return "1-出库中"
      case inv_status.zhuangche:
        return "2-装车中"
      case inv_status.peisong:
        return "3-配送中"
      case inv_status.finish:
        return "4-完成"
    }

    return "1-出库中";
  }

  /**
   * 配送单
   */
  export class loaddo {
    loaddo_id: string;
    diver_id: number;
    autoid: string;
    UTCTimeStamp: number;

    loaddo_status: number;
    co_status: number;

    //显示用附加信息
    loaddo_status_syr: string;
    UTCTimeStamp_str: string;
    op_name:string;
    good_num:number;
    good_name:string;
  }


  /**
   * 出库单
   */
  export class odo {

    odo_id: string;

    //	//取货信息
    //    int good_num;
    //    String good_name;  
    //    int good_identifier;

    //操作员
    operator_id: string;
    UTCtimeStamp: number;
    UTCtimeStamp_str: string;
    
    odo_status: number;
    co_status: number;
    co_status_str:string;


    good_num:number;
    good_name:string;
  }

  /**
   * 系统用户
   */
  export class sysuer {

    user_id: number;
    phone: number;

    roletype: number;
    psd: string;
    name: string;

    autoid: string;

    power_inv: boolean;
    power_odo: boolean;
    power_loaddo: boolean;
    power_user: boolean;
    power_dispitch: boolean;
  }

  /**
   * 运送单
   */
  export class transport {

    transport_id: string;
    UTCTimeStamp: number;

    diver_id: number;
    diver_name: number;
    auto_id: number;

    transport_status: number;
    co_status: number;

  //显示用附加信息
    transport_status_str: string;
    UTCTimeStamp_str: string;
    good_num:number;
    good_name:string;

       //接受者信息 来自inv
    receiver_name: string;
    receiver_phone: string;
    receiver_addr: string;
                
    //花费f inv
    cost: number;
  }


}

enum operator {
  del = 1,
  update = 2,
  updateAll = 3,
  add = 4
}


enum  roletype {
  sys = 1,
  operator_normal = 2,
  operator_Warehouse = 3,
  diver = 4,

}

enum inv_status {
  chuku = 1,
  zhuangche = 2,
  peisong = 3,
  finish = 4
}

enum order_status {
  NOT_START = 1,
  ONGOING = 2,
  FINISH = 3
}


