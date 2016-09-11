/*
ファイルから取得したファイル群のURLを確認する

*/
var fs = require('fs');
var http = require('http');
var https = require('https');
var rl = require('readline')

var file = process.argv[2];

// ファイルを読み込む
var inputStream   = fs.createReadStream(file)
var inputReadLine = rl.createInterface({ 'input': inputStream, 'output': {} });
// 通信プロトコル確認用正規表現
var ex = /^https:.*/;

inputReadLine
.on('line', function(line) {
  if(ex.test(line)){
    getStatusHttps(line);
  }else{
    getStatusHttp(line);
  }
})
.on('close', function() {
});

// ステータスコードを調べる
// http用
function getStatusHttp(url){
  http.get(url, function(res) {
    console.log(url + " Got response: " + res.statusCode);
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}
// https用
function getStatusHttps(url){
  https.get(url, function(res) {
    console.log(url + " Got response: " + res.statusCode);
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}
