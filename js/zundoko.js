// zundoko.js
// auther: Ryusei Namai

// 初期設定
var wordList = ["ずん、","どこ、"];
var count = 0;
var random = 0;
var result = "";

function Zundoko(){
  for(i=0;i<100;i++){
    random = Math.floor( Math.random() * 2 );
    result += wordList[random];
    count++;
    console.log(result);
    if(result === "ずん、ずん、ずん、ずん、どこ、"){
      result += "キ・ヨ・シ!"
      break;
    }else{
      result = result.slice(-12);
    }
  }
  console.log(result + ":" + count + "回");
}
