import React from 'react'
import { Link } from 'react-router-dom';

function NavComponent() {
    return (
      <div>
        <nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse d-flex p-2 bd-highlight"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      HomeMake 家裡蹲
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      關於我們
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/introduct">
                      商品介紹
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
      </div>
    );
};


export default NavComponent;
