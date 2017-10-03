function caesar(string, offset){
    var result = [];
    var work;
    for(i=0;i<string.length;i++){
        // 文字列のキャラコードを取得
        work = string.charCodeAt(i);
        // 決められた数だけシフトする
        // 大文字
        if(65 <= work && work <= 90){
            if(work+offset <= 90){
              result[i] = String.fromCharCode(work + offset);
            }else{
              result[i] = String.fromCharCode(work + offset -26);
            }
        };
        // 小文字
        if(97 <= work && work <= 122){
            if(work+offset <= 122){
              result[i] = String.fromCharCode(work + offset);
            }else{
              result[i] = String.fromCharCode(work + offset -26);
            }
        }
        if(work < 65 ||(90 < work && work < 97) ||122 < work){
          // それ以外は変換しない
          result[i] = String.fromCharCode(work);
        }
    }
    return result.join('');
}
