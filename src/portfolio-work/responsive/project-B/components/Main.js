import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import CustomControls from "./CustomControls";
import ItemList from "./ItemList";
import dummyData from "../components/dummyData";

const Main = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // 비디오 컨트롤러
  const [isMuted, setIsMuted] = useState(true); // 초기 음소거
  const videoRef = useRef(null); // 비디오 접근 ref
  // 슬라이더 ref
  const sliderRef = useRef(null);

  // 음소거 토글함수
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    console.log("selectedIndex", selectedIndex);
  }, [selectedIndex]);

  // 슬라이더에 표시할 콘텐츠 배열
  const contents = [
    {
      title: "2024년 리미티드 시리즈",
      category: ["드라마", "코미디", "한국"],
      comment: "2024년 10월 12일부터!",
      img: "img_rank1",
    },
    {
      title: "한석규의 미스터리 시리즈",
      category: ["드라마", "미스터리 범죄", "한국"],
      comment: "2024년 10월 11일 부터!",
      img: "img_rank2",
    },
    {
      title: "김병만의 생존 극복기",
      category: ["예능", "리얼 버라이어티"],
      comment: "2024년 10월 07일 부터!",
      img: "img_rank3",
    },
    {
      title: "백종원의 이븐한 요리 전쟁",
      category: ["예능", "경쟁 리얼리티 시리즈"],
      comment: "2024년 09월 17일 부터!",
      img: "img_rank4",
    },
    {
      title: "10년 만의 재회, 설렘 주의",
      category: ["드라마", "로맨스", "한국"],
      comment: "2024년 10월 19일 부터!",
      img: "img_rank5",
    },
    {
      title: "이경규의 웃겨야 산다",
      category: ["예능", "경쟁 리얼리티 시리즈"],
      comment: "2024년 10월 15일 부터!",
      img: "img_rank6",
    },
    {
      title: "끝나지 않은 경성의 운명",
      category: ["드라마", "호러 시리즈", "한국"],
      comment: "2024년 10월 19일 부터!",
      img: "img_rank7",
    },
    {
      title: "돈 세탁해 드려요!",
      category: ["드라마", "블랙 코미디", "한국"],
      comment: "2024년 09월 28일 부터!",
      img: "img_rank8",
    },
    {
      title: "란마가 돌아왔다",
      category: ["애니", "액션 코미디", "일본"],
      comment: "2024년 10월 05일 부터!",
      img: "img_rank9",
    },
    {
      title: "최강대 최강, 승자는?",
      category: ["예능", "경쟁 리얼리티 시리즈"],
      comment: "2024년 10월 01일 부터!",
      img: "img_rank10",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const totalItems = contents.length; // 슬라이더 아이템 총 개수

  // prev
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  // next
  const handleNext = () => {
    if (currentIndex < totalItems - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("추천");

  const filteredData =
    selectedCategory === "추천"
      ? Object.values(dummyData)
          .flat()
          .sort((a, b) => b.favoriteRatio - a.favoriteRatio)
      : dummyData[selectedCategory] || [];

  const menuItems = ["추천", "드라마", "예능", "영화", "애니메이션"];

  return (
    <div className="main_container">
      <main>
        <section className="container_top10">
          <div className="video-display">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              controls={false}
              key={selectedIndex} // 선택한 슬라이더의 비디오만 재생
            >
              <source
                src={`${process.env.PUBLIC_URL}/video/video_rank${
                  selectedIndex + 1
                }.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="video-controls-tool">
            <div className="top"></div>
            <div className="btm">
              <CustomControls
                isMuted={isMuted}
                toggleMute={toggleMute}
                selectedIndex={selectedIndex}
              />
              <div className="slider-bg">
                <div className="slider-container" ref={sliderRef}>
                  <Slider
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    contents={contents}
                    currentIndex={currentIndex}
                  />
                </div>
                <button
                  className={`prev-btn ${currentIndex === 0 ? "disabled" : ""}`}
                  onClick={handlePrev}
                >
                  <span className="icon icon_prev"></span>
                </button>
                <button
                  className={`next-btn ${
                    currentIndex >= totalItems - itemsPerView ? "disabled" : ""
                  }`}
                  onClick={handleNext}
                >
                  <span className="icon icon_next"></span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container_watch_history">
          <div className="title">
            <span className="user_id">{`용용`}</span>
            <span className="text">님이 시청 중인 콘텐츠</span>
          </div>
          <div className="history-wrap">
            <div className="item img1"></div>
            <div className="item img2"></div>
            <div className="item img3"></div>
            <div className="item img4"></div>
          </div>
        </section>
        <section className="all-contents">
          <div className="menu-container">
            <ul>
              {menuItems.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "selected" : ""}
                  >
                    <span className="text">{category}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ItemList data={filteredData} />
        </section>
      </main>
    </div>
  );
};

export default Main;
