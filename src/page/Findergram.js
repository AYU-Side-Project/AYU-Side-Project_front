import styled from "styled-components";
import Sidebar from "../component/SideBar";
import TopBar from "../component/TopBar";
import TitleFont from "../component/TitleFont";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomButton from "../component/CustomButton";
import Post from "../component/Post";
import Carousel from "../component/Carosal";
import Tags from "../component/Tags";
import FoodPost from "../component/FoodPost";
import BottomBar from "../component/BottomBar";
import { useState, useRef, useEffect } from "react";

const TopContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
`;

const SubTitle = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-left: 5%;
`;

/*구분선*/
const HorizonLine = styled.div`
  background-color: #d9d9d9;
  height: 1px;
  margin-left: 211px;
  margin-top: 100px;
`;

const BestFinderContents = styled.div`
  width: 1650px;
  margin-top: 4%;
  margin-left: 12%;
`;

/*파인더그램 컨텐츠*/
const FindergramContents = styled.div`
  display: flex;
  margin-left: 20%;
  align-items: center;
  gap: 200px;
`;

const Posts = styled.div`
  margin-top: 4%;
  width: 500px;
  align-items: center;
`;

const FindergramTags = styled.div`
  width: 500px;
`;

/*오늘 뭐먹지 컨텐츠* what to eat*/
const WTEContents = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
  gap: 20%;
`;

/*날씨 음식 추천*/
const WeatherRecomend = styled.div`
  display: flex;
  margin-left: 25%;
  gap: 100px;
  margin-top: 3%;
`;

const Findergram = () => {
  const tagsList = [
    "#노키즈존",
    "#분위기 맛집",
    "#애견동반",
    "#노키즈존",
    "#분위기 맛집",
    "#애견동반",
    "#노키즈존",
    "#분위기 맛집",
    "#애견동반",
    "#노키즈존",
    "#분위기 맛집",
  ];
  const [isTopVisible, setTopVisible] = useState(true);
  const topContentsRef = useRef(null);

  const handleIntersection = (entries) => {
    const isVisible = entries[0].isIntersecting;
    setTopVisible(isVisible);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });

    if (topContentsRef.current) {
      observer.observe(topContentsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [topContentsRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <TopBar />
      <Sidebar />
      <TopContents ref={topContentsRef} isVisible={isTopVisible}>
        <span style={{ marginLeft: "5%" }}>
          <KeyboardArrowUpIcon fontSize="large" onClick={scrollToTop} />
        </span>
        <TitleFont>파인더 커뮤니티</TitleFont>
        <SubTitle>파인더님이 찾으신 맛집을 공유해주세요!</SubTitle>
        <span style={{ paddingTop: "30px", marginLeft: "5%" }}>
          <CustomButton
            fontSize={18}
            fontWeight={600}
            width={450}
            marginTop={10}
            onClick={() => console.log("버튼클릭")}
          >
            리뷰 남기기
          </CustomButton>
        </span>
      </TopContents>
      <HorizonLine />
      <TitleFont>
        8월의 <span style={{ color: "red" }}>베스트 파인더 👑</span>
      </TitleFont>
      <BestFinderContents>
        <Carousel />
      </BestFinderContents>
      <HorizonLine />
      <TitleFont>
        <span style={{ color: "red" }}>파인더그램🔍</span>
      </TitleFont>
      <FindergramContents>
        <Posts>
          <Post postIdList={["홍길동"]} />
        </Posts>
        <FindergramTags>
          <Tags
            tagsList={tagsList}
            fontSize={16}
            fontWeight={700}
            backgroundColor="red"
            color="white"
            padding={{ top: 15, bottom: 10 }}
            justifyContent="center"
          />
        </FindergramTags>
      </FindergramContents>
      <HorizonLine />
      <div id="1" />
      <TitleFont>
        <span style={{ color: "red" }}>오늘 뭐먹지? 🤔</span>
      </TitleFont>
      <WTEContents>
        <FoodPost>짜장</FoodPost>
        <h1>VS</h1>
        <FoodPost>짬뽕</FoodPost>
      </WTEContents>
      <HorizonLine />
      <TitleFont>
        <span style={{ color: "red" }}>오늘같은 날씨엔 ____ 어때요?</span>
      </TitleFont>
      <WeatherRecomend>
        <FoodPost imgWidth={500} imgHeight={433} reviewWidth={470}>
          마라탕
        </FoodPost>
        <FoodPost imgWidth={500} imgHeight={433} reviewWidth={470}>
          떡볶이
        </FoodPost>
      </WeatherRecomend>
      <BottomBar />
    </>
  );
};

export default Findergram;
