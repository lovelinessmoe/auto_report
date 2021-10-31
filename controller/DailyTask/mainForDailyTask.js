/**
 * @Description:健康日报打卡
 * @Author loveliness
 * @Date 2021/10/29 4:15 下午
 * @Version 1.0
 */
const mainForDailyTask = {};
const mysql = require('../../common/mysql');
const axios = require('axios');
const dataUtil = require('./dataUtil');

/*
休眠函数sleep
调用 await sleep(1500)
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


submitDailyTask = async (postData) => {
    let jsessionid = postData.jsessionid;
    let authToken = postData.authToken;
    //请求获取唯一id接口
    let uniqueIdentify = await axios.post('http://eip.imnu.edu.cn/EIP/flowcfg/synergy_template/querySynergyTemplateById.htm',
        "flowKey=65369", {
            headers:
                {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Pragma": "no-cache",
                    "Accept": "application/json, text/javascript, */*; q=0.01",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-cn",
                    "Cache-Control": "no-cache",
                    "Origin": "ttp://eip.imnu.edu.cn",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) wxwork/3.1.18 (MicroMessenger/6.2) WeChat/2.0.4",
                    "Referer": "http://eip.imnu.edu.cn/EIP/weixin/weui/cooperate.html?_=1635590532280&bust=1635590532254",
                    "Connection": "keep-alive",
                    "Host": "eip.imnu.edu.cn",
                    "Cookie": jsessionid + "ht_platform=wxWork;" + authToken,
                    "X-Requested-With": "XMLHttpRequest",
                    "htReferer": "http://eip.imnu.edu.cn/EIP/weixin/weui/cooperate.html?_=1635590532280&bust=1635590532254#new/form/65369",
                }
        });

    uniqueIdentify = uniqueIdentify.data.uniqueIdentify;
    let data = await dataUtil.getData(postData, uniqueIdentify);

    //请求打卡接口
    let rs = await axios.post('http://eip.imnu.edu.cn/EIP/cooperative/sendCooperative.htm', data, {
        headers:
            {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Host": "eip.imnu.edu.cn",
                "Connection": "keep-alive",
                "Accept": "*/*",
                "X-Requested-With": "XMLHttpRequest",
                "htReferer": "http://eip.imnu.edu.cn/EIP/weixin/weui/cooperate.html?_=1635463948384&bust=1635463949183#new/flow/new/65369",
                "Origin": "http://eip.imnu.edu.cn",
                "Referer": "http://eip.imnu.edu.cn/EIP/weixin/weui/cooperate.html?_=1635463948384&bust=1635463949183",
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cookie": jsessionid + ";" + "ht_platform=wxWork" + ";" + authToken,
            }
    });
    console.log(rs.data);
    console.log("-------------DailyTaskSubmitEnd--------------");

}

forSubmitForDailyTask = async () => {
    let sql = `SELECT *
               FROM user_info`;
    let rs = await mysql.query(sql);
    for (const it of rs) {
        console.log("-------------DailyTaskSubmit--------------");
        console.log(it);
        await submitDailyTask(it);
        await sleep(1500);
    }
}

mainForDailyTask.submitM = async (req, res, next) => {
    forSubmitForDailyTask();
    res.send("ok");
}

module.exports = mainForDailyTask;
