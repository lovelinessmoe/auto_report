'use strict';

const mysql = require('mysql');
const moment = require('moment');

const database = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql',
    database: 'auto_report',
    debug: false
};
const sql = {};
const pool = mysql.createPool(database);
/**
 * 通用操作方法
 */
sql.query = function (sql, params) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.error(moment().format() + "sql.query:" + err + "----sql:" + sql);
                reject(err);
            }

            connection.query(sql, params, function (err, result) {
                if (err) {
                    console.error(moment().format() + "\n #### sql.query:" + err + "\n----sql:" + sql + "\n----param:" + params);
                    reject(err);
                }
                resolve(result);
            });
            //回收pool
            connection.release();
        });
    });
};

/**
 * 单条插入
 * @param table_name
 * @param obj
 * @returns {Promise<any>}
 */
sql.insertOne = function (table_name, obj) {
    return new Promise((resolve, reject) => {
        if (!table_name || Object.prototype.toString.call(obj) != '[object Object]') {
            reject(new Error('插入参数不正确'));
        }
        let sql = `INSERT INTO \`${table_name}\` SET ? `;
        this.query(sql, obj).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject('插入失败');
        });
    });
},


    /**
     * 批量插入
     * @param table_name
     * @param data_arr
     * @returns {Promise<any>}
     */
    sql.insertMany = function (table_name, data_arr) {
        return new Promise((resolve, reject) => {
            if (!table_name || !Array.isArray(data_arr)) {
                reject(new Error('插入参数不正确'));
            }
            let filed = [];
            let vaules = [];
            data_arr.map(x => {
                if (filed.length == 0) {
                    filed = Object.keys(x);
                }
                vaules.push(Object.values(x));
            });
            if (filed.length == 0 || vaules.length == 0) {
                reject(new Error('数据不正确'));
            }
            filed = '`' + filed.join('`,`') + '`';

            let sql = `INSERT INTO \`${table_name}\` (${filed}) VALUES ? `;
            this.query(sql, [vaules]).then((result) => {
                resolve(result.insertId);
            }).catch((err) => {
                reject('插入失败');
            });
        });
    }


sql.update = function (table_name, where_obj, set_obj) {
    return new Promise((resolve, reject) => {
        if (!table_name || Object.prototype.toString.call(set_obj) != '[object Object]' || Object.prototype.toString.call(where_obj) != '[object Object]') {
            reject(new Error('更新参数不正确'));
        }

        let where_arr = [];
        for (let i in where_obj) {
            if (Array.isArray(where_obj[i])) {
                where_arr.push(`\`${i}\` in (${'\'' + (where_obj[i]).join('\',\'') + '\''})`);
            } else {
                where_arr.push(`\`${i}\` = '${where_obj[i]}'`);
            }
        }

        let sql = `UPDATE \`${table_name}\` SET ? WHERE ${where_arr.join(' AND ')} `;
        this.query(sql, [set_obj]).then((result) => {
            resolve(result);
        }).catch((err) => {
            console.error(err)
            reject('更新失败');
        });
    });
}
sql.format = function (sql, params) {
    return new Promise(function (resolve, reject) {
        resolve(mysql.format(sql, params));
    });
}

module.exports = sql;
