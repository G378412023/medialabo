// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 3;
let challenge = 1;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let e = document.querySelector('#button');
console.log(e);
e.addEventListener('click', hantei);



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = parseInt(document.querySelector("#number").value);

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

    let elem1 = document.querySelector("span#kaisu");
    elem1.textContent = challenge;
    let elem2 = document.querySelector("span#answer");
    elem2.textContent = yoso;
    let elem3 = document.querySelector("p#result");
    
    if(kaisu >= 2){
        if(yoso === kotae){
            elem3.textContent = "正解です．おめでとう!";
        }else if(yoso > kotae){
            elem3.textContent = "まちがい．答えはもっと小さいですよ";
        }else if(kotae > yoso){
            elem3.textContent = "まちがい．答えはもっと大きいですよ";
        }
    }else if(kaisu === 1){
        if(yoso === kotae){
            elem3.textContent = "正解です．おめでとう!";
        }else{
            elem3.textContent = "まちがい．残念でした答えは"+kotae+"です．";
        }
    }else{
        elem3.textContent = "答えは"+kotae+"でした。すでにゲームは終わっています";
    }

    challenge += 1;
    kaisu -= 1;
}