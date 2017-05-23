NetMgr.instance.initWS();
document.getElementById("login").addEventListener("click",()=>{
    var name=document.getElementById("user").value;
    var psd=document.getElementById("psd").value;
    //TODO 验证
    var json={name,psd};
    var dat=new msg(msgType.login,JSON.stringify(json));
    NetMgr.instance.WSsend(dat);
   // NetMgr.instance.AJAXsend(dat);
},false);



