/**
 * 通信
 */
var NetMgr = (function () {
    function NetMgr() {
        this.func = new Array();
    }
    Object.defineProperty(NetMgr, "instance", {
        get: function () {
            if (!NetMgr._self) {
                NetMgr._self = new NetMgr();
            }
            return NetMgr._self;
        },
        enumerable: true,
        configurable: true
    });
    NetMgr.prototype.initWS = function () {
        this.ws = new WebSocket(msgType.urlws);
        this.ws.onmessage = this.onmessage;
    };
    NetMgr.prototype.onopen = function () {
        console.error("WS 初始化成功");
    };
    NetMgr.prototype.onmessage = function (ev) {
        console.log("[WS REC]:" + ev.data);
        NetMgr.analyJson(ev.data);
    };
    /**
     * 解析消息，找到相应办法处理
     */
    NetMgr.analyJson = function (json) {
        var data = JSON.parse(json);
        msgProcess["on" + data.itype](data);
    };
    NetMgr.prototype.WSsend = function (msg) {
        var _this = this;
        if (this.ws && this.ws.readyState != this.ws.CLOSING && this.ws.readyState != this.ws.CLOSED) {
            console.log("[ws send]:" + JSON.stringify(msg));
            this.ws.send(JSON.stringify(msg));
        }
        else {
            this.initWS();
            var func_1 = function () {
                console.log("[ws send(lag)]:" + JSON.stringify(msg));
                _this.ws.send(JSON.stringify(msg));
            };
            this.ws.onopen = function () {
                if (func_1) {
                    func_1();
                    func_1 = null;
                }
            };
        }
    };
    NetMgr.prototype.AJAXsend = function (msg) {
        console.log("[ajax send]:" + msg.itype + msg.data);
        $.ajax({
            url: msgType.urlajax,
            type: 'POST',
            async: true,
            headers: {
                Accept: "application/json; charset=utf-8",
            },
            data: {
                itype: msg.itype,
                data: msg.data,
            },
            success: function (data, textStatus, jqXHR) {
                console.log("[ajax rec]:" + data);
                NetMgr.analyJson(data);
            }
        });
    };
    NetMgr.prototype.wsClose = function () {
        this.ws.close();
    };
    return NetMgr;
}());
/**
 * 注册窗口关闭事件
 */
window.onbeforeunload = function () {
    alert("确定关闭？");
    NetMgr.instance.wsClose();
};
/**
 * 消息体
 */
var msg = (function () {
    function msg(itype, data) {
        if (itype) {
            this.itype = itype;
        }
        if (data) {
            this.data = data;
        }
    }
    return msg;
}());
/**
 * 消息类型常量，与服务器保持一致
 */
var msgType = (function () {
    function msgType() {
    }
    return msgType;
}());
msgType.urlajax = 'http://localhost:8090/AKTM-new-1/htttpajax';
msgType.urlws = 'ws://127.0.0.1:8090/AKTM-new-1/websocket';
msgType.login = "login";
msgType.logout = "logout";
msgType.SCupdateAll = "SCupdateAll";
msgType.alret = "alret";
msgType.lodOp = "lodOp";
msgType.cusOp = "cusOp";
msgType.tpsOp = "tpsOp";
msgType.odoOp = "odoOp";
msgType.sysOp = "sysOp";
msgType.invOp = "invOp";
msgType.markitsolve = "markitsolve";
msgType.invcreate = "invcreate";
