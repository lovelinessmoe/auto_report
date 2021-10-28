/**
 * @Description:
 * @Author loveliness
 * @Date 2021/10/28 3:15 下午
 * @Version 1.0
 */
const moment = require('moment');

const common = {};
common.checkLogin = async (req, res, next) => {
    if (req.session.user === undefined) {
        return res.send("用户未登陆");
    } else {
        next();
    }
};
common.info = async (req, res, next) => {
    console.log("===========info===========");
    if (req.session.user !== undefined) {
        console.log(req.session.user);
    }
    console.log("ip = " + req.ip);// 同req.connection.remoteAddress, 但是格式要好一些
    console.log(`接口请求:`, moment().format("YYYY-MM-DD HH:mm:ss") + " " + req.method + ` ${req.originalUrl}`);
    console.log(`接口参数:`, JSON.stringify(req.body));
    console.log("===========end===========");

    next();
};


module.exports = common;
