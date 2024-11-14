import React from "react";

const HandleGooleForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSehtwTJGDM8J1UB7mM7giZZjK0UgpGpb9JtWU3eNDeX3M96Cw/viewform?usp=sf_link', '_blank');
}

const Main = () => {
    return (
        <div className="container">
            <section>
                <div className="section-title">
                    <h2>동호회 소개</h2>
                    <img src="/images/foot.png" alt="발바닥 이미지"/>
                </div>
                <div className="activities">
                    <div className="activity-card">
                    <ul className="activity-details">
                        <li>
                            <p>개발바닥은 회원들 간의 교류와 협력을 통해 기술 역량을 강화하고 <span className="highlight">실질적인 서비스</span>를 구현하는 것을 목표합니다.</p>
                        </li>
                        <li>
                            <p>소수 인원이 팀을 이루어, 기획부터 배포까지 실전 경험을 쌓으며 서로 동기부여가 되는 활동을 지향합니다.</p>
                        </li>
                        <li>
                            <p><span className="highlight">자기주도적으로</span> 공부하고, 공부한 내용을 프로젝트에 적용하는 것을 지향합니다.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>

        <section>
            <div className="section-title">
                <h2>개발바닥에 들어오면</h2>
                <img src="/images/foot.png" alt="발바닥 이미지"/>
            </div>
            <div className="activities">
                <div className="activity-card">
                    
                    <ul className="activity-details">
                        <li>
                            <span className="detail-title"><span className="highlight">닉네임</span></span>
                            <p className="detail-desc">수평적인 활동을 위해 이름, 직급대신 닉네임을 사용합니다.</p>
                        </li>
                        <li>
                            <span className="detail-title"><span className="highlight">서비스 개발</span></span>
                            <p className="detail-desc">자신이 원하는 서비스를 기획하고 팀을 이뤄 개발합니다.</p>
                            <p className="detail-desc">대단한 서비스가 아니여도 좋습니다. 쉬운 서비스부터 단계를 높여 나가는 것을 지향합니다.</p>
                        </li>
                        <li>
                            <span className="detail-title"><span className="highlight">특허 및 수익화</span></span>
                            <p className="detail-desc">개발한 서비스를 방치하는게 아니라 특허를 받거나 수익화를 시도합니다.</p>
                        </li>
                        <li>
                            <span className="detail-title"><span className="highlight">퇴코</span></span>
                            <p className="detail-desc">업무가 먼저! 업무에 지장이 되지 않게 퇴코(퇴근하고 코딩)을 지향합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="section-title">
                <h2>정기모임</h2>
                <img src="/images/foot.png" alt="발바닥 이미지"/>
            </div>
            <div className="activities">
                <div className="activity-card">
                    <p>월 2회 (첫째주, 셋째주 금요일) 대회의실에서 진행합니다. (금요일 공휴일 시 목요일에 진행)</p>
                </div>
            </div>
        </section>

        <section>
            <div className="section-title">
                <h2>활동계획 (임시)</h2>
                <img src="/images/foot.png" alt="발바닥 이미지"/>
            </div>
            <div className="activities">
                <div className="activity-card">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">2024년 12월</div>
                            <div className="timeline-content">
                                <h3>동회회 OT (12.06)</h3>
                                <p>활동 계획 수립</p>
                                <h3>미니 프로젝트 기획 (12.20)</h3>
                                <p>미니 프로젝트 기획</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2025년 1월</div>
                            <div className="timeline-content">
                                <h3>미니 프로젝트 (01.03, 01.17)</h3>
                                <p>미니 프로젝트 진행 상황 공유</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2025년 2월, 3월, 4월</div>
                            <div className="timeline-content">
                                <h3>미니 프로젝트 최종 리뷰 (02.07)</h3>
                                <p>미니 프로젝트 최종 리뷰</p>
                                <h3>그룹 프로젝트 기획 (02.21, 03.07)</h3>
                                <p>그룹 프로젝트 기획</p>
                                <h3>그룹 프로젝트 (03.07 ~ 04.18)</h3>
                                <p>그룹 프로젝트 진행 상황 공유</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2025년 5월</div>
                            <div className="timeline-content">
                                <h3>그룹 프로젝트 (05.02)</h3>
                                <p>그룹 프로젝트 최종 리뷰</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="join-section">
            <h2>함께하고 싶으신가요?</h2>
            <p>새로운 동료를 언제나 환영합니다!</p>
            <button className="join-button main-button" onClick={HandleGooleForm}>가입하기</button>
        </section>
        </div>
    )
}

export default Main;
