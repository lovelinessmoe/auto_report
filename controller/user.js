/**
 * @Description:
 * @Author loveliness
 * @Date 2021/10/28 8:16 上午
 * @Version 1.0
 */
const user = {};
const mysql = require('../module/mysql');

user.login = async (req, res) => {
    let {username, password} = req.body;
    let sql = "select * from `user` where username = ? && password = ? limit 1"
    let user = await mysql.query(sql, [username, password]);

    if (user.length < 1) {
        return res.send("用户名或密码错误");
    }
    req.session.user = user[0];
    res.render("home",
        {
            user: req.session.user
        });
};
user.register = async (req, res) => {
    let {username, password} = req.body;
    let sql = "select count(1) as num from `user` where username = ?";
    let rs = await mysql.query(sql, [username]);
    console.log(rs);
    if (rs[0].num >= 1) {
        res.json(200, "用户名已存在");
    } else {
        sql = "insert into `user` (username, password) values (?,?)";
        await mysql.query(sql, [username, password]);
        res.json(200, "注册成功");
    }
};


module.exports = user;
