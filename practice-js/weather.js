let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

//セレクトボタンがチェックされていたら、li要素を作成し、該当する情報を入れて返す
function appendValue(root,number,text,data){
  let t = document.form.weather;
  if(t[number].checked){
    let li = document.createElement("li");
    li.textContent = text + data;
    root.appendChild(li)
  }
}

// 通信を開始する処理
function sendRequest() {
  let id = document.getElementById("weather").value;
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;
  //国の名前を取得
  let city = data["name"];

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  // data をコンソールに出力
  console.log(data);

  //前の都市の情報を削除
  let element = document.getElementById("result");
  element.innerHTML = "";

  // h1北京
  let div = document.querySelector("div#result");
  let s1 = document.createElement("h1");
  s1.textContent = city;
  div.appendChild(s1);

  // h2北京市の詳細
  let s2 = document.createElement("h2");
  s2.textContent = city+"の詳細";
  div.appendChild(s2);


  // ul要素緯度と経度
  let s3 = document.createElement("ul");

  appendValue(s3,1,"緯度：",data["coord"]["lon"]);
  appendValue(s3,2,"経度：",data["coord"]["lat"]);

  div.appendChild(s3);

  // h2北京市の天気
  let s4 = document.createElement("h2");
  s4.textContent = city+"の天気";
  div.appendChild(s4);

  //ul要素、最低気温、最高気温、湿度、風速、風向
  let s5 = document.createElement("ul");

  appendValue(s5,3,"最高気温：",data["main"]["temp_max"]);
  appendValue(s5,4,"最低気温：",data["main"]["temp_min"]);
  appendValue(s5,5,"湿度：",data["main"]["humidity"]);
  appendValue(s5,6,"風速：",data["wind"]["speed"]);
  appendValue(s5,7,"風向：",data["wind"]["deg"]);

  div.appendChild(s5);

}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}