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
                                <span className="detail-title">개발바닥은 회원들 간의 교류와 협력을 통해 기술 역량을 강화하고 실질적인 프로젝트를 구현하는 것을 목표합니다.</span>
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
                            <span className="detail-title"><span className="highlight">그룹 프로젝트</span></span>
                            <p className="detail-desc">소규모로 팀을 이뤄 기획부터 배포까지 그룹 프로젝트를 진행합니다.</p>
                        </li>
                        <li>
                            <span className="detail-title"><span className="highlight">코드 리뷰</span></span>
                            <p className="detail-desc">코드 리뷰를 통해 프로젝트별로 새로 알게 된 코드나 정보를 리뷰합니다.</p>
                        </li>
                        <li>
                            <span className="detail-title"><span className="highlight">기술 스터디</span></span>
                            <p className="detail-desc">한가지 주제를 정해 서로 공부한 내용을 공유합니다.</p>
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
                                <p>동회회 방향성 설정 및 활동 계획 수립</p>
                                <h3>기술 스터디 (12.20)</h3>
                                <p>기술 스터디 상황 공유</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2025년 1월</div>
                            <div className="timeline-content">
                                <h3>기술 스터디 (01.03)</h3>
                                <p>기술 스터디 상황 공유</p>
                                <h3>기술 스터디 (01.17)</h3>
                                <p>기술 스터디 최종 리뷰</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2025년 2월</div>
                            <div className="timeline-content">
                                <h3>미니 프로젝트 기획 (02.07)</h3>
                                <p>미니 프로젝트 기획 발표</p>
                                <h3>미니 프로젝트 (02.21)</h3>
                                <p>미니 프로젝트 진행 상황 공유 및 코드 리뷰</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2025년 3월</div>
                            <div className="timeline-content">
                                <h3>미니 프로젝트 (03.07)</h3>
                                <p>미니 프로젝트 진행 상황 공유 및 코드 리뷰</p>
                                <h3>미니 프로젝트 리뷰 (03.21)</h3>
                                <p>미니 프로젝트 최종 리뷰</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2025년 4월, 5월, 6월</div>
                            <div className="timeline-content">
                                <h3>그룹 프로젝트 기획 (04.04)</h3>
                                <p>그룹 프로젝트 기획 발표</p>
                                <h3>그룹 프로젝트 (04.18 ~ 06.05)</h3>
                                <p>그룹 프로젝트 진행 상황 공유 및 코드 리뷰</p>
                                <h3>그룹 프로젝트 리뷰 (06.20)</h3>
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
