//引入mongodb模块，获得客户端对象
// var MongoClient = require('mongodb').MongoClient;
var MongoClient = require("mongoose")
//连接字符串
var DB_CONN_STR = 'mongodb://localhost:27017/test?authSource=admin';
//定义函数表达式，用于操作数据库并返回结果

MongoClient.connect(DB_CONN_STR, {
      "user": "admin",
      "pass": "123456",
    },(err) => {
  if (err) {
    console.log("连接成功！", err)
  } else {
    console.log("连接成功")
  }
});
