// 导入mysql
const mysql = require('mysql')

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'A020658',
    database:'my_db_01',
})


module.exports = db