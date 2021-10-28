/**
 * @Description:
 * @Author loveliness
 * @Date 2021/10/28 8:13 上午
 * @Version 1.0
 */
const express = require('express');
const common = require('../common/common');
const {checkLogin, info} = common;
const router = express.Router();

router.get('/', function (req, res, next) {
    //销毁登陆状态
    if (req.session) {
        req.session.destroy();
    }
    res.render('login');
});
router.get('/home', checkLogin, info, async (req, res, next) => {
    res.render('home');
});

const user = require('../controller/user');
router.post('/login', info, user.login);
router.post('/register', info, user.register);


const main = require('../controller/main');
router.post('/editCookie', checkLogin, info, main.editCookie);

module.exports = router;
