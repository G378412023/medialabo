//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let elem1 = document.getElementById("ex42");
let newElement = document.createElement("p");
newElement.setAttribute("style","text-emphasis: sesame green;");
newElement.textContent = "写真表と都市の緯度軽度のページです";
let elem2 = document.getElementsByTagName("body")[0];
elem2.insertBefore(newElement,elem1.nextSibling);


// 練習4-3 写真表作成プログラム
let div = document.getElementById("phototable");
let picture = ["taro.png","jiro.png","hanako.png"];
for(let i = 0;i < 3;i++){
	let newElement = document.createElement("p");
	let img = document.createElement("img");
	img.setAttribute("src",picture[i]);
	newElement.appendChild(img);
	div.appendChild(newElement);
}

// 練習4-4 箇条書き削除プログラム
let elem4 = document.querySelectorAll("li");
for(let i of elem4) {
	i.remove();
}


// 練習4-5 箇条書き追加プログラム
let elem5 = document.getElementById("location");
console.log(elem5);
//配列dataから情報の取得
for(let i of data){
	let newElement =document.createElement("li");
	newElement.textContent = i["name"] + " ... " + "緯度:" + i["lat"] + ", " + i["lng"];
	elem5.appendChild(newElement);
}