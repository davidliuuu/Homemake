import React from 'react';
import ItemImage from "./img/item1.jpg";
import ItemImage2 from "./img/item2.jpg";
import ItemImage3 from "./img/item3.jpg";

const IntroductComponent = () => {
    return (
      <div className="p-5">
        <div>
          <h1>✔家裡蹲🦴SGS寵物手工雞肉乾🐣寵物肉乾👉寵物零食👍</h1>
        </div>
        <div className="p-5">
          <img src={ItemImage} class="img-fluid rounded " alt="..."></img>
          <img src={ItemImage2} class="img-fluid rounded " alt="..."></img>
          <img src={ItemImage3} class="img-fluid rounded " alt="..."></img>
        </div>
        <div className="p-5">
          <h3>📣商品資訊</h3>
          <p>
            採用經CAS認證《100% 國產新鮮雞肉》烘乾製成。
            適合作為寵物零食或訓練獎勵，挑食的狗狗可以拌在乾飼料裡一起食用唷！
            👉小瑪Ｑ比非常挑食所以我都會拌在飼料裡讓他一起吃❤️
            因為純手工製品，所以雞肉乾每批的外觀、大小、厚度、顏色無法一致為正常現象
            （圖片為實品僅供參考唷～～～）
            目前賣場以薄片為主，若有特別需求（厚片、長條、圓形...等）可用聊聊詢問
            👉小瑪Ｑ比因為年紀牙齒的關係需要薄脆，虎斑妞妞還年輕就喜歡吃厚一點，因為這樣她才可以咬久一點點，越嚼越香！
            👉所以因家中寵物情況不同，請依寵物體型、健康狀況酌量食用唷～～❤️❤️❤️
            ❗食用時適量剝成小塊狀避免有些毛孩會噎到不舒服唷
          </p>
        </div>
        <div className="p-5">
          <h3>📣保存方法</h3>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">每包70g</li>
            <li class="list-group-item">未開封：常溫14天、冷藏1個月</li>
            <li class="list-group-item">
              無添加防腐劑與色素開封後建議冷藏保鮮且盡快食用
            </li>
            <li class="list-group-item">
              請放置於陰涼處、避免陽光照射及高溫處
            </li>
          </ol>
          <p className="p-4 text-danger">
            同為挑食毛媽的我，非常了解挑食寶貝的需求，所以我們也有35g的小嘗鮮包
            如果怕家中毛孩不適應可先購買小包裝嘗鮮唷～～❤️
          </p>
          <p>
            ✅本賣場商品已完成SGS驗證及行政院農委會寵物食品申報。
            <br />
            ✅商品皆為現點現做，出貨時間為下單後3~5天，我們會盡量盡快地讓各位毛寶貝吃到肉肉❤️
            <br />
            ✅商品可提供客製化，遇商品有任何問題，歡迎私訊蝦皮聊聊詢問唷。
            <br />
            ✅超取因材積大小限制最多10包，超過10包請幫我選擇宅配唷
            <br />
          </p>
        </div>
        <footer className="pt-3 mt-4 text-muted border-top mx-auto">
          &copy; 2021 David Liu
        </footer>
      </div>
    );
};

export default IntroductComponent;
