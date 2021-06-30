const buildHTML = (XHR) => {                       //投稿内容取得メソッドをまとめて書き出してる
  const item = XHR.response.post;                  //レスの中から投稿内容取得、itemに格納
      const html = `                                
      <div class="post">
        <div class"post-date">
          投稿日時:${item.created_at}
        </div>
        <div class="post-content">
          ${item.content}
        </div>
      </div>`;                                      //投稿メモを描画するHTML生成、htmlに格納
  return html;                                      //buildHTMLの返り値にhtmlを指定
};

function post (){                                   //JS読み込み設定
  const submit = document.getElementById("submit"); //投稿ボタン要素取得
  submit.addEventListener("click", (e) => {         //ボタン押したらイベント発火、その内容を囲う
    e.preventDefault();                             //規定のイベント(ここでは投稿クリック)を無効化      
    const form = document.getElementById("form");   //投稿フォーム要素取得
    const formData = new FormData(form);            //投稿フォームの内容取得
    const XHR = new XMLHttpRequest();               //XHRオブジェクト生成、ajaxの根幹、API
    XHR.open("POST", "/posts", true);               //open()メソッドでHttpメソッド、パス、非同期をリクエスト
    XHR.responseType = "json";                      //データフォーマットをJSONに指定
    XHR.send(formData);                             //リクエスト送信
    XHR.onload = () => {                            //リクエスト成功時の処理
      if (XHR.status != 200) {                      //失敗時の記載
        alert(`Error ${XHR.status}: ${XHR.statusText}`); //アラート鳴らす
        return null;                                //以降の処理はしない記述
      };
      const list = document.getElementById("list"); //新しいメモを挿入するための要素取得
      const formText = document.getElementById("content"); //入力欄の要素指定
      list.insertAdjacentHTML("afterend", buildHTML(XHR));    //挿入位置を要素の直後に指定、buildHTMLを挿入
      formText.value = "";                          //入力欄を空にする
    };
  });
};

window.addEventListener('load', post);