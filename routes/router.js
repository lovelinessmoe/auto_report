/**
 * @Description:
 * @Author loveliness
 * @Date 2021/10/28 8:13 上午
 * @Version 1.0
 */
const express = require('express');
const common = require('../common/common');
const {checkLogin, info, checkAdmin} = common;
const router = express.Router();

router.get('/index', info, function (req, res, next) {
    //销毁登陆状态
    if (req.session) {
        req.session.destroy();
    }
    res.render('login');
});
router.get('/info', info, function (req, res, next) {
    res.render('info');
});
router.get('/home', info, checkLogin, (req, res, next) => {
    res.render('home');
});
router.get('/', info, (req, res, next) => {
    res.render('info');
});

const user = require('../controller/user');
router.post('/login', info, user.login);
router.post('/register', info, user.register);


const main = require('../controller/main');
router.post('/editCookie', info, checkLogin, main.editCookie);
router.get('/submit', info, checkLogin, checkAdmin, main.submitM);

const mainForDailyTask = require('../controller/DailyTask/mainForDailyTask');
router.get('/DT', info, checkLogin, checkAdmin, mainForDailyTask.submitM);
// router.get('/DT', mainForDailyTask.submitM);

module.exports = router;
