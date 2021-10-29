/**
 * @Description:
 * @Author loveliness
 * @Date 2021/10/28 8:16 上午
 * @Version 1.0
 */
const main = {};
const mysql = require('../module/mysql');
const axios = require('axios');
const moment = require('moment');

main.editCookie = async (req, res, next) => {
    const {cookie} = req.body;
    const user_id = req.session.user.id;
    let sql = `update user
               set cookie = ?
               where id = ?`;

    let rs = await mysql.query(sql, [cookie, user_id]);
    if (rs.affectedRows > 0) {
        res.send('修改成功');
    }
};


submit = async (cookie) => {
    const data = {
        "temperature": 36.0,
        "mental_status": "",
        "mental_symptom": "",
        "latitude": "",
        "longitude": "",
        "address": "",
        "is_cough": 0,
        "is_weak": 0,
        "is_chest_tight": 0
    };

    axios.post('https://auth.imnu.edu.cn/app.php/imnu_apps/epidemic/index/report', data, {
        headers:
            {
                "Host": "auth.imnu.edu.cn",
                "accept": "application/json, text/javascript, */*; q=0.01",
                "x-requested-with": "XMLHttpRequest",
                "x-tingyun-id": "o_vYQuJFAnI;r=308115395",
                "origin": "https://auth.imnu.edu.cn",
                "sec-fetch-site": "same-origin",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                "referer": "https://auth.imnu.edu.cn/app.php/imnu_apps/epidemic/index/daily_report",
                "accept-encoding": "gzip, deflate",
                "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "cookie": cookie+";"+"login_from=oauth; query=think:{\"login_type\":\"imnu_qrcode\"}"
            }
    }).then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
        let date = moment.unix(res.data.timestamp).format("YYYY-MM-DD HH:mm:ss");
        console.log('Date: ', date);
        console.log("-----------submitEnd--------------");
    }).catch((err) => {
        console.error(err);
    });
}

forSubmit = async () => {
    let sql = `SELECT *
               FROM \`user\`
               WHERE cookie IS NOT NULL`;
    let rs = await mysql.query(sql);
    for (const it of rs) {
        if (it.cookie !== undefined || it.cookie === '') {
            console.log("-------------submit--------------");
            console.log(`username: ${it.username}`);
            console.log(`cookie: ${it.cookie}`);
            await submit(it.cookie);
        }
    }
}

const CronJob = require('cron').CronJob;
new CronJob('0 1,2,3 7,12 * * *', forSubmit, null, true);

main.submitM = async (req, res, next) => {
    forSubmit();
    res.send("ok");
};


module.exports = main;

