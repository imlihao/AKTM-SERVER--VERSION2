/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50636
Source Host           : localhost:3306
Source Database       : aktm

Target Server Type    : MYSQL
Target Server Version : 50636
File Encoding         : 65001

Date: 2017-05-23 16:32:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `cus_id` int(11) NOT NULL AUTO_INCREMENT,
  `addr` varchar(255) DEFAULT NULL,
  `co_status` int(11) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `sender_ID` int(11) NOT NULL,
  `sender_name` varchar(255) DEFAULT NULL,
  `sender_phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('3', '并州建康的一个大橡树底下', '1', '东晋', '0', '谢安', '1333666988');
INSERT INTO `customer` VALUES ('7', '海底两万里', '2', '明', '0', '徐渭', '2236655544');
INSERT INTO `customer` VALUES ('8', '韩国某某洞', '1', '美国', '0', '萨德', '13336669988');
INSERT INTO `customer` VALUES ('13', 'ds', '2', '323', '0', '1', '123333');
INSERT INTO `customer` VALUES ('14', 'dsds', '2', 'ew', '0', '1', 'ds');
INSERT INTO `customer` VALUES ('15', '亚利桑那州', '1', 'ufc', '0', '罗比劳乐', '85596321');
INSERT INTO `customer` VALUES ('16', '巴西利亚', '1', 'ufc', '0', '町田龙泰', '85596321');
INSERT INTO `customer` VALUES ('17', '巴西利亚', '1', 'ufc', '0', '卢克洛克胡德', '85596321');
INSERT INTO `customer` VALUES ('18', '巴西利亚', '1', 'ufc', '0', '旺德雷席尔瓦', '85596321');
INSERT INTO `customer` VALUES ('19', '德克萨斯圣安东尼奥', '1', 'nba', '0', '马努吉诺比利', '85596321');
INSERT INTO `customer` VALUES ('20', '德克萨斯圣安东尼奥', '1', 'nba', '0', '帕克', '85596321');
INSERT INTO `customer` VALUES ('21', '德克萨斯圣安东尼奥', '1', 'nba', '0', '莱昂纳德', '85596321');
INSERT INTO `customer` VALUES ('22', '里约热内卢', '1', 'ufc', '0', '安德森席尔瓦', '85596321');
INSERT INTO `customer` VALUES ('23', '里约热内卢', '1', 'ufc', '0', '温盾', '85596321');

-- ----------------------------
-- Table structure for `invoice`
-- ----------------------------
DROP TABLE IF EXISTS `invoice`;
CREATE TABLE `invoice` (
  `INV_ID` varchar(255) NOT NULL,
  `UTCTimeStamp` bigint(20) NOT NULL,
  `co_status` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `good_identifier` int(11) NOT NULL,
  `good_name` varchar(255) DEFAULT NULL,
  `good_num` int(11) NOT NULL,
  `inv_status` int(11) NOT NULL,
  `opid` bigint(20) NOT NULL,
  `receiver_addr` varchar(255) DEFAULT NULL,
  `receiver_name` varchar(255) DEFAULT NULL,
  `receiver_phone` varchar(255) DEFAULT NULL,
  `sender_ID` int(11) NOT NULL,
  `sender_name` varchar(255) DEFAULT NULL,
  `sender_phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`INV_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of invoice
-- ----------------------------
INSERT INTO `invoice` VALUES ('1395c41b-2215-443d-89a2-c48f2e29498a', '0', '1', '50', '0', '好猫', '22', '2', '2013020103', '安康学院逸夫科技楼', '李豪', '13619155070', '3', '谢安', '1333666988');
INSERT INTO `invoice` VALUES ('1d2f02b3-909a-4122-ba27-cfee13246136', '0', '2', '0', '0', '桃子', '0', '1', '2013020103', '安康', '我', '133', '3', '1333666988', '1333666988');
INSERT INTO `invoice` VALUES ('3b20bfe5-0466-4515-ba8b-2d911192d79d', '0', '1', '28', '0', '小霸王', '3223', '2', '2013020103', '陕西省安康市安康学院科技楼', '李豪', '13619155070', '19', '马努吉诺比利', '85596321');
INSERT INTO `invoice` VALUES ('400cf69c-c581-476f-9ed2-ce9841445edc', '0', '1', '0', '0', '苹果', '0', '4', '2013020103', '后赵邺城铜雀台', '石勒', '1336654412', '13', '123333', '123333');
INSERT INTO `invoice` VALUES ('4dfe7c48-37c4-4723-8652-83145541fe0c', '0', '2', '32', '0', '摇头丸', '1', '1', '2013020103', '的撒的撒', '李豪', '233131', '3', '谢安', '1333666988');
INSERT INTO `invoice` VALUES ('53134d90-d00d-4d4b-8e4b-e8bc527244f8', '0', '1', '30', '0', '香烟', '3', '3', '2013020103', '美国加州51号公路', '鲍勃迪伦', '1596636889', '3', '谢安', '1333666988');
INSERT INTO `invoice` VALUES ('5ec26d66-5ef3-42b1-8921-a1c396ed01e5', '0', '1', '28', '0', 'PRS aritist', '3223', '2', '2013020103', '陕西省安康市安康学院科技楼', '李豪', '13619155070', '21', '莱昂纳德', '85596321');
INSERT INTO `invoice` VALUES ('6cd58858-9610-46ea-8c15-32172cecb42a', '0', '1', '32', '0', 't1', '232', '4', '2013020103', '月亮', 'ds222', '132323232', '8', '萨德', '13336669988');
INSERT INTO `invoice` VALUES ('6f439617-b35e-49aa-95fe-32c70e2f2d74', '0', '1', '20', '0', 'gibson J45', '200', '2', '2013020103', '不列颠', '加里摩尔', '88559636', '8', '萨德', '13336669988');
INSERT INTO `invoice` VALUES ('8d54bc9a-39ba-4a86-9437-b24830fe0099', '0', '2', '0', '0', '栗子', '0', '1', '2013020103', '君士坦丁堡', '冰蛙', '1336699963', '8', '13336669988', '13336669988');
INSERT INTO `invoice` VALUES ('a990e7a3-697d-4e5a-994e-150f59f60a3e', '0', '1', '28', '0', 'PRS aritist', '3223', '1', '2013020103', '陕西省安康市安康学院科技楼', '李豪', '13619155070', '22', '安德森席尔瓦', '85596321');
INSERT INTO `invoice` VALUES ('bddb2e07-254e-4427-9368-c8235e7bdd66', '0', '1', '28', '0', '彩虹糖', '3223', '1', '2013020103', '陕西省安康市安康学院科技楼', '李豪', '13619155070', '15', '罗比劳乐', '85596321');
INSERT INTO `invoice` VALUES ('ca15db58-ecbf-4735-92d8-d53cb7405397', '0', '1', '28', '0', 'PRS aritist', '3223', '1', '2013020103', '陕西省安康市安康学院科技楼', '李豪', '13619155070', '23', '温盾', '85596321');
INSERT INTO `invoice` VALUES ('e4336e00-1160-46d5-80b4-fa104ea63a39', '0', '1', '2', '0', '大声', '3', '1', '2013020103', '订单', '额', '111', '3', '谢安', '1333666988');
INSERT INTO `invoice` VALUES ('f46604d9-b720-4d80-b1fd-85f6d47de987', '0', '1', '28', '0', 'PRS aritist', '3223', '1', '2013020103', '陕西省安康市安康学院科技楼', '李豪', '13619155070', '20', '帕克', '85596321');
INSERT INTO `invoice` VALUES ('f7c57cac-3cd6-4631-8f6d-b6bb21dd19e5', '0', '2', '100', '0', '海洛因', '994', '1', '2013020103', '地狱第十八层', '我', '133654412', '3', '谢安', '1333666988');

-- ----------------------------
-- Table structure for `loaddo`
-- ----------------------------
DROP TABLE IF EXISTS `loaddo`;
CREATE TABLE `loaddo` (
  `loaddo_id` varchar(255) NOT NULL,
  `UTCTimeStamp` bigint(20) NOT NULL,
  `autoid` varchar(255) DEFAULT NULL,
  `co_status` int(11) NOT NULL,
  `diver_id` int(11) NOT NULL,
  `loaddo_status` int(11) NOT NULL,
  PRIMARY KEY (`loaddo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of loaddo
-- ----------------------------
INSERT INTO `loaddo` VALUES ('1395c41b-2215-443d-89a2-c48f2e29498a', '0', '陕A7766', '1', '1001', '2');
INSERT INTO `loaddo` VALUES ('1d2f02b3-909a-4122-ba27-cfee13246136', '0', '陕A46d75', '2', '2013020100', '1');
INSERT INTO `loaddo` VALUES ('3b20bfe5-0466-4515-ba8b-2d911192d79d', '1495527443994', '陕A7766', '1', '1001', '2');
INSERT INTO `loaddo` VALUES ('400cf69c-c581-476f-9ed2-ce9841445edc', '0', '陕A46d75', '1', '2013020100', '3');
INSERT INTO `loaddo` VALUES ('4dfe7c48-37c4-4723-8652-83145541fe0c', '0', '陕A46d75', '2', '2013020100', '1');
INSERT INTO `loaddo` VALUES ('53134d90-d00d-4d4b-8e4b-e8bc527244f8', '0', '陕A46d7', '1', '2013020100', '3');
INSERT INTO `loaddo` VALUES ('5ec26d66-5ef3-42b1-8921-a1c396ed01e5', '1495527516317', '陕A7766', '1', '1001', '2');
INSERT INTO `loaddo` VALUES ('6cd58858-9610-46ea-8c15-32172cecb42a', '0', '陕A46d75', '1', '2013020100', '3');
INSERT INTO `loaddo` VALUES ('6f439617-b35e-49aa-95fe-32c70e2f2d74', '0', '陕A46d7', '1', '2013020100', '2');
INSERT INTO `loaddo` VALUES ('8d54bc9a-39ba-4a86-9437-b24830fe0099', '0', '陕A46d75', '2', '2013020100', '1');
INSERT INTO `loaddo` VALUES ('a990e7a3-697d-4e5a-994e-150f59f60a3e', '1495527501618', '陕A7766', '1', '1001', '1');
INSERT INTO `loaddo` VALUES ('bddb2e07-254e-4427-9368-c8235e7bdd66', '1495527401251', '陕A7766', '1', '1001', '1');
INSERT INTO `loaddo` VALUES ('ca15db58-ecbf-4735-92d8-d53cb7405397', '1495527489636', '陕A46d7', '1', '2013020100', '1');
INSERT INTO `loaddo` VALUES ('e4336e00-1160-46d5-80b4-fa104ea63a39', '0', '陕A46d75', '1', '2013020100', '1');
INSERT INTO `loaddo` VALUES ('f46604d9-b720-4d80-b1fd-85f6d47de987', '1495527527762', '陕A46d7', '1', '2013020100', '1');
INSERT INTO `loaddo` VALUES ('f7c57cac-3cd6-4631-8f6d-b6bb21dd19e5', '0', '陕A46d75', '2', '2013020100', '1');

-- ----------------------------
-- Table structure for `odo`
-- ----------------------------
DROP TABLE IF EXISTS `odo`;
CREATE TABLE `odo` (
  `odo_id` varchar(255) NOT NULL,
  `UTCtimeStamp` bigint(20) NOT NULL,
  `co_status` int(11) NOT NULL,
  `odo_status` int(11) NOT NULL,
  `operator_id` int(11) NOT NULL,
  PRIMARY KEY (`odo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of odo
-- ----------------------------
INSERT INTO `odo` VALUES ('1395c41b-2215-443d-89a2-c48f2e29498a', '1495522367468', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('1d2f02b3-909a-4122-ba27-cfee13246136', '1495169101410', '2', '2', '2013020101');
INSERT INTO `odo` VALUES ('3b20bfe5-0466-4515-ba8b-2d911192d79d', '1495527443982', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('400cf69c-c581-476f-9ed2-ce9841445edc', '1495264646022', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('4dfe7c48-37c4-4723-8652-83145541fe0c', '1495274599636', '2', '2', '2013020101');
INSERT INTO `odo` VALUES ('53134d90-d00d-4d4b-8e4b-e8bc527244f8', '1495459144088', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('5ec26d66-5ef3-42b1-8921-a1c396ed01e5', '1495527516297', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('6cd58858-9610-46ea-8c15-32172cecb42a', '1495291410117', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('6f439617-b35e-49aa-95fe-32c70e2f2d74', '1495522974829', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('8d54bc9a-39ba-4a86-9437-b24830fe0099', '1495264525409', '2', '2', '2013020101');
INSERT INTO `odo` VALUES ('a990e7a3-697d-4e5a-994e-150f59f60a3e', '1495527501604', '1', '2', '2013020101');
INSERT INTO `odo` VALUES ('bddb2e07-254e-4427-9368-c8235e7bdd66', '1495527401239', '1', '2', '2013020101');
INSERT INTO `odo` VALUES ('ca15db58-ecbf-4735-92d8-d53cb7405397', '1495527489612', '1', '2', '2013020101');
INSERT INTO `odo` VALUES ('e4336e00-1160-46d5-80b4-fa104ea63a39', '1495275245306', '1', '3', '2013020101');
INSERT INTO `odo` VALUES ('f46604d9-b720-4d80-b1fd-85f6d47de987', '1495527527719', '1', '2', '2013020101');
INSERT INTO `odo` VALUES ('f7c57cac-3cd6-4631-8f6d-b6bb21dd19e5', '1495287050222', '2', '2', '2013020101');

-- ----------------------------
-- Table structure for `sysuser`
-- ----------------------------
DROP TABLE IF EXISTS `sysuser`;
CREATE TABLE `sysuser` (
  `user_id` bigint(20) NOT NULL,
  `autoid` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `power_dispitch` bit(1) NOT NULL,
  `power_inv` bit(1) NOT NULL,
  `power_loaddo` bit(1) NOT NULL,
  `power_odo` bit(1) NOT NULL,
  `power_user` bit(1) NOT NULL,
  `psd` varchar(255) DEFAULT NULL,
  `roletype` int(11) NOT NULL,
  `co_status` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sysuser
-- ----------------------------
INSERT INTO `sysuser` VALUES ('1001', '陕A7766', '司机1', '13669645665', '', '', '', '', '', '123456', '4', '1');
INSERT INTO `sysuser` VALUES ('32313', 'ewew', 'ewe', '2013020103', '', '', '', '', '', '123456', '4', '2');
INSERT INTO `sysuser` VALUES ('2013020100', '陕A46d7', '潘子', '20130243433', '', '', '', '', '', '123456', '4', '1');
INSERT INTO `sysuser` VALUES ('2013020101', '', '仓库管理员', '13619155070', '', '', '', '', '', '123456', '3', '1');
INSERT INTO `sysuser` VALUES ('2013020102', null, '订单管理员1', '13619155070', '', '', '', '', '', '123456', '2', '1');
INSERT INTO `sysuser` VALUES ('2013020103', null, '李豪', '13619155070', '', '', '', '', '', '123456', '1', '1');

-- ----------------------------
-- Table structure for `transport`
-- ----------------------------
DROP TABLE IF EXISTS `transport`;
CREATE TABLE `transport` (
  `transport_id` varchar(255) NOT NULL,
  `UTCTimeStamp` bigint(20) NOT NULL,
  `auto_id` varchar(255) DEFAULT NULL,
  `co_status` int(11) NOT NULL,
  `diver_id` bigint(20) NOT NULL,
  `diver_name` varchar(255) DEFAULT NULL,
  `transport_status` int(11) NOT NULL,
  PRIMARY KEY (`transport_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of transport
-- ----------------------------
INSERT INTO `transport` VALUES ('1395c41b-2215-443d-89a2-c48f2e29498a', '1495522367586', '陕A7766', '1', '1001', '司机1', '1');
INSERT INTO `transport` VALUES ('1d2f02b3-909a-4122-ba27-cfee13246136', '1495169101491', '陕A46d75', '2', '2013020100', null, '1');
INSERT INTO `transport` VALUES ('3b20bfe5-0466-4515-ba8b-2d911192d79d', '1495527444009', '陕A7766', '1', '1001', '司机1', '1');
INSERT INTO `transport` VALUES ('400cf69c-c581-476f-9ed2-ce9841445edc', '1495264646171', '陕A46d75', '1', '2013020100', '潘子', '3');
INSERT INTO `transport` VALUES ('4dfe7c48-37c4-4723-8652-83145541fe0c', '1495274599679', '陕A46d75', '2', '2013020100', '潘子', '1');
INSERT INTO `transport` VALUES ('53134d90-d00d-4d4b-8e4b-e8bc527244f8', '1495459144135', '陕A46d7', '1', '2013020100', '潘子', '2');
INSERT INTO `transport` VALUES ('5ec26d66-5ef3-42b1-8921-a1c396ed01e5', '1495527516330', '陕A7766', '1', '1001', '司机1', '1');
INSERT INTO `transport` VALUES ('6cd58858-9610-46ea-8c15-32172cecb42a', '1495291410206', '陕A46d75', '1', '2013020100', '潘子', '3');
INSERT INTO `transport` VALUES ('6f439617-b35e-49aa-95fe-32c70e2f2d74', '1495522974967', '陕A46d7', '1', '2013020100', '潘子', '1');
INSERT INTO `transport` VALUES ('8d54bc9a-39ba-4a86-9437-b24830fe0099', '1495264525599', '陕A46d75', '2', '2013020100', '潘子', '1');
INSERT INTO `transport` VALUES ('a990e7a3-697d-4e5a-994e-150f59f60a3e', '1495527501639', '陕A7766', '1', '1001', '司机1', '1');
INSERT INTO `transport` VALUES ('bddb2e07-254e-4427-9368-c8235e7bdd66', '1495527401264', '陕A7766', '1', '1001', '司机1', '1');
INSERT INTO `transport` VALUES ('ca15db58-ecbf-4735-92d8-d53cb7405397', '1495527489692', '陕A46d7', '1', '2013020100', '潘子', '1');
INSERT INTO `transport` VALUES ('e4336e00-1160-46d5-80b4-fa104ea63a39', '1495275245461', '陕A46d75', '1', '2013020100', '潘子', '1');
INSERT INTO `transport` VALUES ('f46604d9-b720-4d80-b1fd-85f6d47de987', '1495527527781', '陕A46d7', '1', '2013020100', '潘子', '1');
INSERT INTO `transport` VALUES ('f7c57cac-3cd6-4631-8f6d-b6bb21dd19e5', '1495287050282', '陕A46d75', '2', '2013020100', '潘子', '1');
