const mysql = require('mysql')
const pool = mysql.createPool({
    host: '127.0.0.1',   // 数据库地址
    user: 'root',    // 数据库用户
    password: 'password',  // 数据库密码
    database: 'koa_demo'  // 选中数据库
})

// 执行sql脚本对数据库进行读写 
pool.getConnection(function (err, connection) {

    connection.query('SELECT * FROM my_table', (error, results, fields) => {

        // 结束会话
        // connection.release();
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);

        // 如果有错误就抛出
        if (error) throw error;
    })
})