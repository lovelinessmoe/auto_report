/*
 Navicat Premium Data Transfer

 Source Server         : Meow
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : auto_report

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 27/12/2021 14:11:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `cookie` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_id` int NOT NULL COMMENT '用户id',
  `DWXY` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT '单位学院',
  `BMBJ` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '班级',
  `XZSF` varchar(16) COLLATE utf8_bin DEFAULT NULL COMMENT '行政身份',
  `LXDH` char(11) COLLATE utf8_bin DEFAULT NULL COMMENT '联系电话',
  `XM` varchar(8) COLLATE utf8_bin DEFAULT NULL COMMENT '姓名',
  `XB` char(1) COLLATE utf8_bin DEFAULT NULL COMMENT '性别',
  `XGH` char(11) COLLATE utf8_bin DEFAULT NULL COMMENT '学工号',
  `DWWZ` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '定位位置',
  `JTMDD` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '地点',
  `jsessionid` char(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `authToken` char(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
