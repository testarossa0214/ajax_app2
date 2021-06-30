function post (){                                   //JS読み込み設定
  const submit = document.getElementById("submit"); //投稿ボタン要素取得
  submit.addEventListener("click", (e) => {         //ボタン押したらイベント発火、その内容を囲う
    e.preventDefault();                             //規定のイベント(ここでは投稿クリック)を無効化      
    const form = document.getElementById("form");   //投稿フォーム要素取得
    const formData = new FormData(form);            //投稿フォームの内容取得
    const XHR = new XMLHttpRequest();               //XHRオブジェクト生成、ajaxの根幹、API
    XHR.open("POST", "/posts", true);               //open()メソッドでHttpメソッド、パス、非同期をリクエスト
    XHR.responseType = "json";                      //データフォーマットをJSONに指定
    XHR.send(formData);
  });
};

window.addEventListener('load', post);