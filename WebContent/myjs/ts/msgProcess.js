var msgProcess;
(function (msgProcess) {
    function onlogin() {
        window.location.href = "aktm_index.html";
    }
    msgProcess.onlogin = onlogin;
    /**
     * 警告
     */
    function onalret(dat) {
        alert(dat.msg);
    }
    msgProcess.onalret = onalret;
    /**
     * 更新所有的消息
     */
    function onSCupdateAll(dat) {
        dataManager.instance.data = dat;
    }
    msgProcess.onSCupdateAll = onSCupdateAll;
    /**
    * 登出
    */
    function onlogout(dat) {
        window.location.href = "login.html";
    }
    msgProcess.onlogout = onlogout;
})(msgProcess || (msgProcess = {}));
var msgClass;
(function (msgClass) {
    var CSloginMsg = (function () {
        function CSloginMsg() {
        }
        return CSloginMsg;
    }());
    msgClass.CSloginMsg = CSloginMsg;
    /**
   * 登陆回复的消息，根据权限分配信息；
   */
    var SCupdateAll = (function () {
        function SCupdateAll() {
            this.itype = msgType.login;
        }
        return SCupdateAll;
    }());
    msgClass.SCupdateAll = SCupdateAll;
    var invOp = (function () {
        function invOp() {
            this.itype = msgType.invOp;
        }
        return invOp;
    }());
    msgClass.invOp = invOp;
    var sysOp = (function () {
        function sysOp() {
            this.itype = msgType.sysOp;
        }
        return sysOp;
    }());
    msgClass.sysOp = sysOp;
    var odoOp = (function () {
        function odoOp() {
            this.itype = msgType.odoOp;
        }
        return odoOp;
    }());
    msgClass.odoOp = odoOp;
    var tpsOp = (function () {
        function tpsOp() {
            this.itype = msgType.tpsOp;
        }
        return tpsOp;
    }());
    msgClass.tpsOp = tpsOp;
    var cusOp = (function () {
        function cusOp() {
            this.itype = msgType.cusOp;
        }
        return cusOp;
    }());
    msgClass.cusOp = cusOp;
    var lodOp = (function () {
        function lodOp() {
            this.itype = msgType.lodOp;
        }
        return lodOp;
    }());
    msgClass.lodOp = lodOp;
    var alret = (function () {
        function alret() {
            this.itype = msgType.alret;
        }
        return alret;
    }());
    msgClass.alret = alret;
    var invcreate = (function () {
        function invcreate() {
            this.itype = msgType.invcreate;
        }
        return invcreate;
    }());
    msgClass.invcreate = invcreate;
    var markitsolve = (function () {
        function markitsolve() {
            this.itype = msgType.markitsolve;
        }
        return markitsolve;
    }());
    msgClass.markitsolve = markitsolve;
})(msgClass || (msgClass = {}));
var vo;
(function (vo) {
    /**
     * 客户
     */
    var customer = (function () {
        function customer() {
        }
        return customer;
    }());
    vo.customer = customer;
    /**
     * 发货合同
     */
    var invoice = (function () {
        function invoice() {
        }
        return invoice;
    }());
    vo.invoice = invoice;
    function inv_stu2Sstring(inv_st) {
        switch (inv_st) {
            case inv_status.chuku:
                return "1-出库中";
            case inv_status.zhuangche:
                return "2-装车中";
            case inv_status.peisong:
                return "3-配送中";
            case inv_status.finish:
                return "4-完成";
        }
        return "1-出库中";
    }
    vo.inv_stu2Sstring = inv_stu2Sstring;
    /**
     * 配送单
     */
    var loaddo = (function () {
        function loaddo() {
        }
        return loaddo;
    }());
    vo.loaddo = loaddo;
    /**
     * 出库单
     */
    var odo = (function () {
        function odo() {
        }
        return odo;
    }());
    vo.odo = odo;
    /**
     * 系统用户
     */
    var sysuer = (function () {
        function sysuer() {
        }
        return sysuer;
    }());
    vo.sysuer = sysuer;
    /**
     * 运送单
     */
    var transport = (function () {
        function transport() {
        }
        return transport;
    }());
    vo.transport = transport;
    var pdo = (function () {
        function pdo() {
        }
        return pdo;
    }());
    vo.pdo = pdo;
})(vo || (vo = {}));
var operator;
(function (operator) {
    operator[operator["del"] = 1] = "del";
    operator[operator["update"] = 2] = "update";
    operator[operator["updateAll"] = 3] = "updateAll";
    operator[operator["add"] = 4] = "add";
})(operator || (operator = {}));
var roletype;
(function (roletype) {
    roletype[roletype["sys"] = 1] = "sys";
    roletype[roletype["operator_normal"] = 2] = "operator_normal";
    roletype[roletype["operator_Warehouse"] = 3] = "operator_Warehouse";
    roletype[roletype["diver"] = 4] = "diver";
})(roletype || (roletype = {}));
var inv_status;
(function (inv_status) {
    inv_status[inv_status["chuku"] = 1] = "chuku";
    inv_status[inv_status["zhuangche"] = 2] = "zhuangche";
    inv_status[inv_status["peisong"] = 3] = "peisong";
    inv_status[inv_status["finish"] = 4] = "finish";
})(inv_status || (inv_status = {}));
var order_status;
(function (order_status) {
    order_status[order_status["NOT_START"] = 1] = "NOT_START";
    order_status[order_status["ONGOING"] = 2] = "ONGOING";
    order_status[order_status["FINISH"] = 3] = "FINISH";
})(order_status || (order_status = {}));
