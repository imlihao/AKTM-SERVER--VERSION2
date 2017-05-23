var dataManager = (function () {
    function dataManager() {
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.ty = true;
    }
    Object.defineProperty(dataManager, "instance", {
        get: function () {
            if (!dataManager._self) {
                dataManager._self = new dataManager();
            }
            return dataManager._self;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(dataManager.prototype, "data", {
        get: function () {
            return this.dataMian;
        },
        set: function (dat) {
            this.dataMian = dat;
            this.a1 = 0;
            this.a2 = 0;
            this.a3 = 0;
            if (this.dataMian.invs) {
                for (var i = 0; i < this.dataMian.invs.length; i++) {
                    this.dataMian.invs[i].inv_status_str = vo.inv_stu2Sstring(this.dataMian.invs[i].inv_status);
                    this.dataMian.invs[i].timeString = new Date(this.dataMian.invs[i].UTCTimeStamp).toLocaleString();
                    if (this.dataMian.invs[i].inv_status == inv_status.chuku)
                        this.a1++;
                    if (this.dataMian.invs[i].inv_status == inv_status.zhuangche)
                        this.a2++;
                    if (this.dataMian.invs[i].inv_status == inv_status.peisong)
                        this.a3++;
                }
            }
            if (this.dataMian.odos) {
                for (var i = 0; i < this.dataMian.odos.length; i++) {
                    this.dataMian.odos[i].co_status_str = getOrderStatusStr(od_type.odo, this.dataMian.odos[i].odo_status);
                    this.dataMian.odos[i].UTCtimeStamp_str = new Date(this.dataMian.odos[i].UTCtimeStamp).toLocaleString();
                    this.dataMian.odos[i].good_name = this.getInvByid(this.dataMian.odos[i].odo_id).good_name;
                    this.dataMian.odos[i].good_num = this.getInvByid(this.dataMian.odos[i].odo_id).good_num;
                }
            }
            if (this.dataMian.loaddos) {
                for (var i = 0; i < this.dataMian.odos.length; i++) {
                    this.dataMian.loaddos[i].loaddo_status_syr = getOrderStatusStr(od_type.loaddo, this.dataMian.loaddos[i].loaddo_status);
                    this.dataMian.loaddos[i].UTCTimeStamp_str = new Date(this.dataMian.loaddos[i].UTCTimeStamp).toLocaleString();
                    this.dataMian.loaddos[i].good_name = this.getInvByid(this.dataMian.loaddos[i].loaddo_id).good_name;
                    this.dataMian.loaddos[i].good_num = this.getInvByid(this.dataMian.loaddos[i].loaddo_id).good_num;
                    this.dataMian.loaddos[i].op_name = getSysNameById(this.dataMian.loaddos[i].diver_id);
                }
            }
            if (this.dataMian.tps) {
                for (var i = 0; i < this.dataMian.odos.length; i++) {
                    this.dataMian.tps[i].transport_status_str = getOrderStatusStr(od_type.tps, this.dataMian.tps[i].transport_status);
                    this.dataMian.tps[i].UTCTimeStamp_str = new Date(this.dataMian.tps[i].UTCTimeStamp).toLocaleString();
                    this.dataMian.tps[i].good_name = this.getInvByid(this.dataMian.tps[i].transport_id).good_name;
                    this.dataMian.tps[i].good_num = this.getInvByid(this.dataMian.tps[i].transport_id).good_num;
                    this.dataMian.tps[i].receiver_name = this.getInvByid(this.dataMian.tps[i].transport_id).receiver_name;
                    this.dataMian.tps[i].receiver_addr = this.getInvByid(this.dataMian.tps[i].transport_id).receiver_addr;
                    this.dataMian.tps[i].receiver_phone = this.getInvByid(this.dataMian.tps[i].transport_id).receiver_phone;
                    this.dataMian.tps[i].cost = this.getInvByid(this.dataMian.tps[i].transport_id).cost;
                }
            }
            if (this.ty) {
                powerContrl();
                addevent();
                this.ty = false;
            }
            showname();
            this.showall();
        },
        enumerable: true,
        configurable: true
    });
    dataManager.prototype.showall = function () {
        if (!this.data) {
            console.error("数据dataMian==null");
        }
        updateTableInv(this.dataMian.invs);
        updateTableCus(this.dataMian.cus);
        showsysuser(this.getSysByType(this.systype));
        updateTableOdo(this.dataMian.odos);
        updateTableloaddo(this.dataMian.loaddos);
        updateTableTps(this.dataMian.tps);
        drowGrid1(this.a1, this.a2, this.a3);
        drowGrid2();
    };
    dataManager.prototype.getCusByid = function (id) {
        id = Number(id);
        if (this.dataMian && this.dataMian.cus) {
            return this.dataMian.cus.find(function (value) { return value.cus_id == id; });
        }
        ;
        return null;
    };
    dataManager.prototype.getSysByid = function (id) {
        id = Number(id);
        if (this.dataMian && this.dataMian.sysusers) {
            return this.dataMian.sysusers.find(function (value) { return value.user_id == id; });
        }
        ;
        return null;
    };
    dataManager.prototype.getInvByid = function (id) {
        if (this.dataMian && this.dataMian.invs) {
            return this.dataMian.invs.find(function (value) { return value.INV_ID == id; });
        }
        ;
        return null;
    };
    dataManager.prototype.getloaddoByid = function (id) {
        if (this.dataMian && this.dataMian.loaddos) {
            return this.dataMian.loaddos.find(function (value) { return value.loaddo_id == id; });
        }
        ;
        return null;
    };
    dataManager.prototype.getTpsByid = function (id) {
        if (this.dataMian && this.dataMian.tps) {
            return this.dataMian.tps.find(function (value) { return value.transport_id == id; });
        }
        ;
        return null;
    };
    dataManager.prototype.getOdoById = function (id) {
        if (this.dataMian && this.dataMian.odos) {
            return this.dataMian.odos.find(function (value) { return value.odo_id == id; });
        }
        ;
        return null;
    };
    dataManager.prototype.getSysByType = function (type) {
        var redata = new Array();
        if (this.dataMian && this.dataMian.sysusers) {
            for (var i = 0; i < this.dataMian.sysusers.length; i++) {
                if (this.dataMian.sysusers[i].roletype == type) {
                    redata.push(this.dataMian.sysusers[i]);
                }
            }
        }
        ;
        return redata;
    };
    dataManager.prototype.test = function () {
        this.dataMian = new msgClass.SCupdateAll();
        this.dataMian.invs = new Array();
        var vovo = new vo.invoice();
        for (var i = 1; i <= 10; i++) {
            vovo.good_name = "货物名";
            vovo.co_status = 1;
            vovo.UTCTimeStamp = 132113;
            vovo.sender_name = "发送者";
            vovo.cost = 1;
            vovo.receiver_phone = "1233333";
            vovo.INV_ID = "dasdaokmdajn1322jisdf";
            vovo.receiver_addr = "天朝";
            vovo.good_num = 1;
            vovo.inv_status = 1;
            vovo.receiver_name = "接受者名字";
            vovo.receiver_addr = "dsdssd";
            vovo.sender_ID = 32;
            vovo.sender_ID = 23;
            this.dataMian.invs.push(vovo);
        }
    };
    Object.defineProperty(dataManager.prototype, "invs", {
        get: function () {
            return this.dataMian.invs;
        },
        enumerable: true,
        configurable: true
    });
    return dataManager;
}());
var od_type;
(function (od_type) {
    od_type[od_type["odo"] = 1] = "odo";
    od_type[od_type["tps"] = 2] = "tps";
    od_type[od_type["loaddo"] = 3] = "loaddo";
})(od_type || (od_type = {}));
function getOrderStatusStr(otype, ost) {
    if (ost == order_status.ONGOING) {
        if (otype == od_type.odo) {
            return "1-出库中";
        }
        else if (otype == od_type.tps) {
            return "1-运送中";
        }
        else {
            return "1-装车中";
        }
    }
    switch (ost) {
        case order_status.NOT_START:
            return "0-未开始";
        case order_status.FINISH:
            return "2-已完成";
    }
}
function getSysEnByType(ty) {
    switch (ty) {
        case roletype.diver:
            return "driver";
        case roletype.operator_normal:
            return "nop";
        case roletype.operator_Warehouse:
            return "wop";
        case roletype.sys:
            return "sys";
    }
}
