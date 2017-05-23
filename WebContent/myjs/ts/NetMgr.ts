
/**
 * 通信
 */
class NetMgr{
    /**
     * socket
     */
   private  ws:WebSocket; 

   private static _self:NetMgr;

   public static  get instance(){
     if(!NetMgr._self){
       NetMgr._self=new NetMgr();
     }
     return NetMgr._self;
   } 

   public initWS(){
     this.ws=new WebSocket(msgType.urlws);
     this.ws.onmessage=this.onmessage;
   }
   private func=new Array<Function>(); 
   public onopen(){
      console.error("WS 初始化成功");
   }

   public  onmessage (ev: MessageEvent){
       console.log("[WS REC]:"+ev.data);
       NetMgr.analyJson(ev.data);
      
   }
   
   /**
    * 解析消息，找到相应办法处理
    */
   public　static analyJson(json:string){

        let data=JSON.parse(json);
        msgProcess["on"+data.itype](data);
   }
   public WSsend(msg:msg ){
      if(this.ws&&this.ws.readyState!=this.ws.CLOSING&&this.ws.readyState!=this.ws.CLOSED){  
        console.log("[ws send]:"+JSON.stringify(msg));   
        this.ws.send(JSON.stringify(msg));   
      }else{
        this.initWS();
        let func=()=>{
          console.log("[ws send(lag)]:"+JSON.stringify(msg));             
          this.ws.send(JSON.stringify(msg));
          }
        this.ws.onopen=()=>{
           if(func){
             func();
             func=null;
           }
        }
      }
   }
   public AJAXsend(msg:msg ){
      console.log("[ajax send]:"+msg.itype+msg.data);     
      $.ajax(
      {
       url:msgType.urlajax,  
       type:'POST',
       async:true,
       headers: {
         Accept: "application/json; charset=utf-8",
       },
       data:{
       itype:msg.itype,
       data:msg.data,       
       },
       success:function(data,textStatus,jqXHR){
          console.log("[ajax rec]:"+data);
          NetMgr.analyJson(data);
      }
       
   }
   )
   }

   public wsClose(){
     this.ws.close();
   }
}

/**
 * 注册窗口关闭事件
 */
window.onbeforeunload=()=>{
    alert("确定关闭？");
   NetMgr.instance.wsClose();
}

/**
 * 消息体
 */
class msg{
   constructor(itype?:string,data?:any){
     if(itype){
       this.itype=itype;
     }
     if(data){
       this.data=data;
     }
   }
   /**
    * 类型常量
    */
   public itype:string;
   /**
    * 数据
    */
   public data:any;
}

/**
 * 消息类型常量，与服务器保持一致
 */
class msgType {
  public static urlajax:string='http://localhost:8090/AKTM-new-1/htttpajax';
  public static urlws:string='ws://127.0.0.1:8090/AKTM-new-1/websocket';

  public static login:string="login";
  public static logout:string="logout";
  
  public static SCupdateAll:string="SCupdateAll";
 
  public static alret:string="alret";
  public static lodOp:string="lodOp";
  public static cusOp:string="cusOp";
  public static tpsOp:string="tpsOp";
  public static odoOp:string="odoOp";
  public static sysOp:string="sysOp";
  public static invOp:string="invOp";

  public static markitsolve:string="markitsolve";

  public static invcreate:string="invcreate";
}
