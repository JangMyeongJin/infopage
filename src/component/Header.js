import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="title">프로텐 개발 동호회</div>
                <div className="group-name">
                    <img src="/images/foot-w.png" alt="발바닥 이미지"/>
                    <span className="highlight">개발바닥</span>
                </div>
                <p><span className="highlight">개발</span>자의 역량을 <span className="highlight">바닥</span>부터 쌓아가자!</p>
            </div>
        </header>
    )
}

export default Header;