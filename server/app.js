require('./index');
//引入mongodb模块，获得客户端对象
// var MongoClient = require('mongodb').MongoClient;
var MongoClient = require("mongoose")
//连接字符串
var DB_CONN_STR = 'mongodb://localhost:27017/test?authSource=admin';

// var blogSchema = new Schema({ // Schema头字母大写，因为Schema是构造函数
//   title: String,
//   comments: [{
//     body: String,
//     date: Date
//   }], // 对象数组
//   date: {
//     type: Date,
//     default: Date.now
//   }, // 通过default设置默认值
//   hidden: Boolean,
//   meta: { // 嵌套对象
//     votes: Number,
//     favs: Number
//   }
// });

// var Blog = MongoClient.model('Blog', blogSchema); //编译model

var ListSchema = new MongoClient.Schema({
  user_id: String, //定义一个属性user_id，类型为String
  content: String, //定义一个属性content，类型为String
  updated_at: Date //定义一个属性updated_at，类型为Date
});

MongoClient.model('user', ListSchema); //将该Schema发布为Model,user就是集合名称

//定义函数表达式，用于操作数据库并返回结果
MongoClient.connect(DB_CONN_STR, {
      "user": "wuyifan",
      "pass": "123456",
    },(err) => {
  if (err) {
    console.log("连接成功--有返回", err)
  } else {
    console.log("连接成功--无返回")
  }
});
