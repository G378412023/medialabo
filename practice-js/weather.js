let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather":[
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

// h1北京
let div = document.querySelector("div#result");
let s1 = document.createElement("h1");
s1.textContent = "北京市";
div.appendChild(s1);

// h2北京市の詳細
let s2 = document.createElement("h2");
s2.textContent = "北京市の詳細";
div.appendChild(s2);

// ul要素緯度と経度
let s3 = document.createElement("ul");
let li6 = document.createElement("li");
li6.textContent = "緯度："+data["coord"]["lon"];
s3.appendChild(li6);

let li7 = document.createElement("li");
li7.textContent = "経度："+data["coord"]["lat"];
s3.appendChild(li7);

div.appendChild(s3);

// h2北京市の天気
let s4 = document.createElement("h2");
s4.textContent = "北京市の天気";
div.appendChild(s4);

//ul要素、最低気温、最高気温、湿度、風速、風向
let s5 = document.createElement("ul");

let li1 = document.createElement("li");
li1.textContent = "最低気温: "+data["main"]["temp_min"];
s5.appendChild(li1)

let li2 = document.createElement("li");
li2.textContent = "最高気温: "+data["main"]["temp_max"];
s5.appendChild(li2)


let li3 = document.createElement("li");
li3.textContent = "最低気温: "+data["main"]["humidity"];
s5.appendChild(li3)

let li4 = document.createElement("li");
li4.textContent = "最低気温: "+data["wind"]["speed"];
s5.appendChild(li4)

let li5 = document.createElement("li");
li5.textContent = "最低気温: "+data["wind"]["deg"];
s5.appendChild(li5)

div.appendChild(s5);





//課題5-2
let b = document.querySelector("#button");
b.addEventListener("click",search);

function search(){
  let f = document.querySelector("#form");
  let r = f.querySelector('input[name="weather"]:checked')
  console.log(r.value);
}