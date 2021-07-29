import React from 'react';
import QbImage from './img/Qb.jpg'
import NnImage from "./img/NN.jpg";
import QbImage2 from "./img/Qb2.jpg";

const AboutComponent = () => {
    return (
      <div>
        <div className="p-5 mb-2 bg-secondary text-white">
          <p>
            因自家毛孩對於市售寵物零食總是興趣缺缺，因而開啟自製寵物肉乾這條路，提供各位有相同困擾的毛爸媽一個新選擇🐶🐱
            <br />
            主打商品為「手工雞肉乾」，無添加任何防腐劑，讓毛孩吃的開心、父母安心❤️❤️❤️
            <br />
            為保持商品新鮮皆為下單後製作（約３～５天寄出），還請各位毛爸媽們耐心等候🙇‍♂️🙇‍♂️🙇‍♂️
            <br />
            ✅本賣場商品已完成SGS驗證及行政院農委會寵物食品申報。
            <br />
            ✅商品皆為現點現做，無任何添加。
            <br />
            ✅商品可提供客製化，歡迎私訊蝦皮聊聊詢問唷。
            <br />
            📣桃園市可面交自取，歡迎聊聊詢問。 📣滿６９９元，超商取貨免運費。
            <br />
            店狗為小瑪Q比、虎斑妞妞。
            <br />
          </p>
        </div>
        <div class="container">
        <div class="row align-items-start">
          <div class="col">
                <img className="img-fluid rounded float-start p-3" src={NnImage} alt="home" />
          </div>
          <div class="col">
          <img className="img-fluid rounded p-3 " src={QbImage} alt="home" />
          </div>
          <div class="col">
          <img className="img-fluid rounded float-end p-3" src={QbImage2} alt="home" />

          </div>
  </div>
  </div>
        <footer className="pt-3 mt-4 text-muted border-top mx-auto">
          &copy; 2021 David Liu
        </footer>
      </div>
    );
}

export default AboutComponent;