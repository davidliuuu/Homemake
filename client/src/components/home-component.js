import React , {useEffect} from 'react';
import AuthService from '../services/auth.service';
import home from "./img/home.jpg";
import food from "./img/food.jpg";
import ig from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import shoppe from "./img/shoppe.png";
import line from "./img/Lineimage.png";

const HomeComponent = () => {

    return (
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className="d-flex flex-row bd-highlight mb-3">
          <img className="img-fluid mw-50" src={home} alt="home" />
          <img className="img-fluid mw-50" src={food} alt="home" />
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <a href="https://www.facebook.com/homemake1121">
            <img className="img-fluid mw-30" style={{padding:'2rem'}} src={facebook} alt="家裡蹲facebook" />
          </a>
          <a href="https://www.instagram.com/homemake1121/">
            <img className="img-fluid mw-30" style={{padding:'2rem'}} src={ig} alt="家裡蹲IG" />
          </a>
          <a href="https://shopee.tw/homemake1121?fbclid=IwAR20IgIZZY9MJ7X77NbenSlRaCi0AP2M1fXpx69cq8wKuz2PoGAW6PtlV0g">
            <img className="img-fluid mw-30" style={{padding:'2rem'}} src={shoppe} alt="家裡蹲蝦皮賣場" />
          </a>
          
        </div>
        <footer className="pt-3 mt-4 text-muted border-top mx-auto">
          &copy; 2021 David Liu
        </footer>
      </div>
    );
};

export default HomeComponent;
