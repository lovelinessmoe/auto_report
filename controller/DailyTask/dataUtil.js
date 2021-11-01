/**
 * @Description: 处理数据用
 * @Author loveliness
 * @Date 2021/10/31 6:30 下午
 * @Version 1.0
 */
const dataUtil = {};
const moment = require('moment');


function urlencode(str) {
    str = (str + '').toString();

    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

/*
    Math方法获取uuid
 */
let CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
Math.uuidFast = function () {
    for (var t, e = CHARS, n = new Array(36), r = 0, i = 0; i < 36; i++) 8 == i || 13 == i || 18 == i || 23 == i ? n[i] = "" : 14 == i ? n[i] = "4" : (r <= 2 && (r = 33554432 + 16777216 * Math.random() | 0), t = 15 & r, r >>= 4, n[i] = e[19 == i ? 3 & t | 8 : t]);
    return n.join("")
}

dataUtil.getData = async (data, uniqueIdentify) => {
    /*
       * uniqueIdentify是基于另一个请求的结果
       */
    //协同实例json
    const instJson = {
        "id": "",
        "wfInfoId": "529f36b0765180470176e6ffe06a4b85",
        "secLevle": "普通",
        "urgentLevel": "普通",
        "title": "健康状况日报",
        "formId": "529f36b0765180470176e6ffdf654b6a",
        "tStatus": "send",
        "tType": "pub",
        "correlation": "",
        //TODO
        "uniqueIdentify": "",
        "ifArchive": "0",
        "flow": "",
        "flowJson": "",
        "checkFlow": "",
        "makeCopy": "",
        "auditJson": ""
    };
    //表单数据json
    let formJson = [{
        "formId": "529f36b0765180470176e6ffdf654b6a",
        "TBRQ": "",//填报日期
        "DWXY": "",
        "BMBJ": "",
        "XZSF": "",
        "LXDH": "",
        "XM": "",
        "XB": "",
        "XGH": "",
        "DWWZ": "",
        "SSQ1": "15__@#@内蒙古自治区",
        "SSQ2": "1501@#@呼和浩特市",
        "SSQ3": "150123@#@和林格尔县",
        "JTMDD": "",
        "YWFR": "否@#@否",
        "YWKS": "否@#@否",
        "YWXM": "否@#@否",
        "SFJCBL": "否@#@否",
        "ZNSFWH": "否@#@否",
        "SFQZYSBL": "否@#@否",
        "ZGFXDQ": "否@#@否",
        "SHENG": "",
        "SHI": "",
        "JTDZ": "",
        "SFJZYM": "是@#@是",
        "RYZT": "在读",
        "WJZQKSM": "",
        "JZQK": "已接种第一剂、第二剂@#@已接种第一剂、第二剂",
        "GJDZJKMYS": "绿码@#@绿码",
        "ID": "",
        "SF": "是",
        "SJJY": "ok",
        "SJJYJB": ""
    }];
    //表单数据json
    const starterFormId = "529f36b0765180470176e6ffdf654b6a";
    const nodeEvent_parameters = [{
        "id": "529f36a96ff9f490016fffe1addb01dd",
        "paramName": "ruleId",
        "paramValue": "cf3f350cd0094263a59d3b95415b50f2@_@CollectRuleValue",
        "paramType": "2",
        "dataType": "String",
        "paramDesc": null,
        "serviceId": "529f36a96ff9f490016fffe117a501dc",
        "createTime": "2020-01-31T00:32:57.000Z",
        "paramText": "健康筛查表"
    }];
    const nodeEvent = [{
        "implWay": "internalImpl",
        "attestationId": "",
        "serviceId": "529f36a96ff9f490016fffe117a501dc",
        "serviceName": "数据采集节点事件",
        "parameters": JSON.stringify(nodeEvent_parameters),
        "eventType": "nodeExecute"
    }];
    /*
    * flowJson 的id是是使用Math的uuidFast生成的
    */
    //流程json串
    const flowJson = [{
        //TODO
        "id": "",
        "handerType": "flowHander",
        "nodeId": "0",
        "level": 1,
        "rightsConfig": {
            "formFiledDefaultValue": [{
                "field": "TBRQ",
                "fieldtype": "mini-datepicker",
                "_state": "modified",
                "_id": 8,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "TBRQ",
                "cnname": "健康筛查表",
                "rightKey": "defaultValue",
                "_uid": 8,
                "cnfield": "填报日期",
                "rightType": "noedit"
            }, {
                "field": "DWXY",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 9,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "DWXY",
                "cnname": "健康筛查表",
                "rightKey": "defaultValue",
                "_uid": 9,
                "cnfield": "单位学院",
                "rightType": "noedit"
            }, {
                "field": "BMBJ",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 10,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "BMBJ",
                "cnname": "健康筛查表",
                "rightKey": "defaultValue",
                "_uid": 10,
                "cnfield": "部门班级",
                "rightType": "noedit"
            }, {
                "field": "XZSF",
                "fieldtype": "mini-combobox",
                "_state": "modified",
                "_id": 11,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "XZSF",
                "cnname": "健康筛查表",
                "rightKey": "defaultValue",
                "_uid": 11,
                "cnfield": "身份",
                "rightType": "noedit"
            }, {
                "field": "LXDH",
                "fieldtype": "mini-textbox",
                "_id": 12,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "LXDH",
                "cnname": "健康筛查表",
                "_uid": 12,
                "cnfield": "联系电话"
            }, {
                "field": "XM",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 13,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "XM",
                "cnname": "健康筛查表",
                "rightKey": "defaultValue",
                "_uid": 13,
                "cnfield": "姓名",
                "rightType": "noedit"
            }, {
                "field": "XB",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 14,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "XB",
                "cnname": "健康筛查表",
                "rightKey": "defaultValue",
                "_uid": 14,
                "cnfield": "性别",
                "rightType": "noedit"
            }, {
                "field": "XGH",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 15,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "XGH",
                "cnname": "健康筛查表",
                "rightKey": "defaultValue",
                "_uid": 15,
                "cnfield": "学号/工号",
                "rightType": "noedit"
            }, {
                "field": "SSQ1",
                "fieldtype": "mini-combobox",
                "_id": 16,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SSQ1",
                "cnname": "健康状况日报表",
                "cnfield": "当前所在地-省（请下拉选择）",
                "_uid": 16
            }, {
                "field": "SSQ2",
                "fieldtype": "mini-combobox",
                "_id": 17,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SSQ2",
                "cnname": "健康状况日报表",
                "cnfield": "当前所在地-市（请下拉选择）",
                "_uid": 17
            }, {
                "field": "SSQ3",
                "fieldtype": "mini-combobox",
                "_id": 18,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SSQ3",
                "cnname": "健康状况日报表",
                "cnfield": "当前所在地-区（请下拉选择）",
                "_uid": 18
            }, {
                "field": "JTMDD",
                "fieldtype": "mini-textbox",
                "_id": 19,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "JTMDD",
                "cnname": "健康状况日报表",
                "cnfield": "当前具体所在地",
                "_uid": 19
            }, {
                "field": "YWFR",
                "fieldtype": "mini-combobox",
                "_id": 20,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "YWFR",
                "cnname": "健康筛查表",
                "_uid": 20,
                "cnfield": "是否发热"
            }, {
                "field": "YWKS",
                "fieldtype": "mini-combobox",
                "_id": 21,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "YWKS",
                "cnname": "健康筛查表",
                "_uid": 21,
                "cnfield": "是否咳嗽"
            }, {
                "field": "YWXM",
                "fieldtype": "mini-combobox",
                "_id": 22,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "YWXM",
                "cnname": "健康筛查表",
                "_uid": 22,
                "cnfield": "是否胸闷"
            }, {
                "field": "SFJCBL",
                "fieldtype": "mini-combobox",
                "_id": 23,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SFJCBL",
                "cnname": "健康筛查表",
                "_uid": 23,
                "cnfield": "是否与确诊、疑似患者有接触"
            }, {
                "field": "ZNSFWH",
                "fieldtype": "mini-radiobuttonlist",
                "_id": 24,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "ZNSFWH",
                "cnname": "健康状况日报表",
                "cnfield": "本人或家里人是否密切接触从疫区返回来的人",
                "_uid": 24
            }, {
                "field": "SFQZYSBL",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 25,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SFQZYSBL",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "_uid": 25,
                "cnfield": "是否被确诊或疑似新冠肺炎病例",
                "rightType": ""
            }, {
                "field": "ZGFXDQ",
                "fieldtype": "mini-combobox",
                "_state": "modified",
                "_id": 26,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "ZGFXDQ",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "近14天是否去过或居住在中高风险地区",
                "_uid": 26,
                "rightType": ""
            }, {
                "field": "SHENG",
                "fieldtype": "mini-combobox",
                "_state": "modified",
                "_id": 27,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SHENG",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "中高风险地区-省（请下拉选择）",
                "_uid": 27,
                "rightType": ""
            }, {
                "field": "SHI",
                "fieldtype": "mini-combobox",
                "_state": "modified",
                "_id": 28,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SHI",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "中高风险地区-市（请下拉选择）",
                "_uid": 28,
                "rightType": ""
            }, {
                "field": "JTDZ",
                "fieldtype": "mini-combobox",
                "_state": "modified",
                "_id": 29,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "JTDZ",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "中高风险地区-具体地址（请下拉选择）",
                "_uid": 29,
                "rightType": ""
            }, {
                "field": "SFJZYM",
                "fieldtype": "mini-radiobuttonlist",
                "_state": "modified",
                "_id": 30,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SFJZYM",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "是否接种疫苗",
                "_uid": 30,
                "rightType": ""
            }, {
                "field": "WJZQKSM",
                "fieldtype": "mini-textarea",
                "_state": "modified",
                "_id": 31,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "WJZQKSM",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "未接种情况说明",
                "_uid": 31,
                "rightType": ""
            }, {
                "field": "JZQK",
                "fieldtype": "mini-radiobuttonlist",
                "_state": "modified",
                "_id": 32,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "JZQK",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "接种情况",
                "_uid": 32,
                "rightType": ""
            }, {
                "field": "GJDZJKMYS",
                "fieldtype": "mini-radiobuttonlist",
                "_id": 33,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "GJDZJKMYS",
                "cnname": "健康状况日报表",
                "cnfield": "国家电子通行码颜色",
                "_uid": 33
            }, {
                "field": "RYZT",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 34,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "RYZT",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "人员状态",
                "_uid": 34,
                "rightType": "hidden"
            }, {
                "field": "SJJYJB",
                "fieldtype": "flow-javascript",
                "_state": "modified",
                "_id": 35,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SJJYJB",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "_uid": 35,
                "cnfield": "数据校验脚本",
                "rightType": ""
            }, {
                "field": "ID",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 36,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "ID",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "_uid": 36,
                "cnfield": "唯一标识",
                "rightType": "hidden"
            }, {
                "field": "SF",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 37,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SF",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "cnfield": "是否需要填报",
                "_uid": 37,
                "rightType": "hidden"
            }, {
                "field": "SJJY",
                "fieldtype": "mini-textbox",
                "_state": "modified",
                "_id": 38,
                "formId": "529f36b0765180470176e6ffdf654b6a",
                "enfield": "SJJY",
                "cnname": "健康状况日报表",
                "rightKey": "defaultValue",
                "_uid": 38,
                "cnfield": "数据校验",
                "rightType": "hidden"
            }], "showForms": "529f36b0765180470176e6ffdf654b6a"
        },
        "name": "",
        "groupOpType": "all",
        "typeStr": "user",
        "left": 10,
        "nodeEvent": JSON.stringify(nodeEvent),
        // "nodeEvent": "[{\"implWay\":\"internalImpl\",\"attestationId\":\"\",\"serviceId\":\"529f36a96ff9f490016fffe117a501dc\",\"serviceName\":\"数据采集节点事件\",\"parameters\":\"[{\\\"id\\\":\\\"529f36a96ff9f490016fffe1addb01dd\\\",\\\"paramName\\\":\\\"ruleId\\\",\\\"paramValue\\\":\\\"cf3f350cd0094263a59d3b95415b50f2@_@CollectRuleValue\\\",\\\"paramType\\\":\\\"2\\\",\\\"dataType\\\":\\\"String\\\",\\\"paramDesc\\\":null,\\\"serviceId\\\":\\\"529f36a96ff9f490016fffe117a501dc\\\",\\\"createTime\\\":\\\"2020-01-31T00:32:57.000Z\\\",\\\"paramText\\\":\\\"健康筛查表\\\"}]\",\"eventType\":\"nodeExecute\"}]",
        "type": 6,
        "top": 105,
        "pId": 0,
        "displayOrder": 0,
        "title": ""
    }];
    //默认表单中的值
    const defaultFormContent = '';
    //附件json串
    const annexJson = [];
    //抄送json串
    const makeCopeJson = '';
    //审核json串
    const auditJson = '';
    //流程版本信息json串
    const flowVerJson = {
        "id": "529f36b0765180470176e6ffe06a4b85",
        "wfname": "健康状况日报",
        "wfversion": "5.0",
        "flowId": "529f36a96ff9f490016ff9fdb1bf0000",
        "flowKey": "65369",
        "cooperativeTypeId": "8f287ffafb414ae997188ae700e85ac7",
        "cooperativeTypeName": "流程业务管理"
    };
    //表单版本信息json串
    const formVerJson = [{
        "id": "529f36b0765180470176e6ffdf654b6a",
        "wfname": "健康状况日报",
        "formId": "529f36b0765180470176e6ffdf654b6a",
        "version": "5.0",
        "cnname": "健康状况日报表"
    }];

    //填报日期
    formJson[0].TBRQ = moment().format("YYYY-MM-DD HH:mm:00");
    //flowJson id
    flowJson[0].id = Math.uuidFast();
    flowJson[0].name = data.XGH;
    flowJson[0].title = data.XM;
    //uniqueIdentify
    instJson.uniqueIdentify = uniqueIdentify;

    // let {DWXY, BMBJ, XZSF, LXDH, XM, XB, XGH, DWWZ, JTMDD} = data;
    // formJson = {DWXY, BMBJ, XZSF, LXDH, XM, XB, XGH, DWWZ, JTMDD};

    for (const it in data) {
        if (it !== 'user_id' && it !== 'jsessionid' && it !== 'authToken') {
            formJson[0][it] = data[it];
        }
    }
    /*

        return "instJson=" + urlencode(JSON.stringify(instJson)) + "&" +
            "formJson=" + urlencode(JSON.stringify(formJson)) + "&" +
            "starterFormId=" + urlencode(starterFormId) + "&" +
            "flowJson=" + urlencode(JSON.stringify(flowJson)) + "&" +
            "defaultFormContent=" + urlencode(defaultFormContent) + "&" +
            "annexJson=" + urlencode(JSON.stringify(annexJson)) + "&" +
            "makeCopeJson=" + urlencode(makeCopeJson) + "&" +
            "auditJson=" + urlencode(auditJson) + "&" +
            "flowVerJson=" + urlencode(JSON.stringify(flowVerJson)) + "&" +
            "formVerJson=" + urlencode(JSON.stringify(formVerJson));
    */

    /*return {
        instJson,
        formJson,
        starterFormId,
        flowJson,
        defaultFormContent,
        annexJson,
        makeCopeJson,
        auditJson,
        flowVerJson,
        formVerJson
    };*/

    return "instJson=" + JSON.stringify(instJson) + "&" +
        "formJson=" + JSON.stringify(formJson) + "&" +
        "starterFormId=" + starterFormId + "&" +
        "flowJson=" + JSON.stringify(flowJson) + "&" +
        "defaultFormContent=" + defaultFormContent + "&" +
        "annexJson=" + JSON.stringify(annexJson) + "&" +
        "makeCopeJson=" + makeCopeJson + "&" +
        "auditJson=" + auditJson + "&" +
        "flowVerJson=" + JSON.stringify(flowVerJson) + "&" +
        "formVerJson=" + JSON.stringify(formVerJson);

}


module.exports = dataUtil;
