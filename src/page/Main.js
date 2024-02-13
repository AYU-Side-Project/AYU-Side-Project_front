import Sidebar from "../component/SideBar";
import TopBar from "../component/TopBar";
import styled from "styled-components";
import BottomBar from "../component/BottomBar";
import Tags from "../component/Tags";
import CustomButton from "../component/CustomButton";
import TitleFont from "../component/TitleFont";
import Carousal from "../component/Carosal";
import FoodPost from "../component/FoodPost";
const TopContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  max-width: 400px; /* 최대 너비 조절 */
  width: 400px;
  margin-left: 60px;
  margin-top: 30px;
`;

/*서치부분*/
const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
`;

/*구분선*/
const HorizonLine = styled.div`
  background-color: #d9d9d9;
  height: 1px;
  margin-left: 211px;
  margin-top: 100px;
`;
/*스트릿푸드 컨텐츠*/
const StreetFoodContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;
const RievewContents = styled.div`
  display: flex;
  gap: 50px;
  margin-left: 5%;
`;
/*베스트 파인더 컨텐츠*/
const BestFinderContents = styled.div`
  width: 1600px;
  margin-top: 4%;
  margin-left: 12%;
`;
/*파인더리뷰 컨텐츠*/
const FinderRieviewContents = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 80px;
  justify-content: center;
  max-width: 100%; /* 확대나 축소에 영향 받지 않도록 최대 너비 설정 */
`;

const FinderRieview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);
  width: 450px;
  height: 120px;
  border-radius: 5%;
`;
/*파인더리뷰 프로필사진 */
const FinderProfile = styled.div`
  background-color: grey;
  border-radius: 100%;
  width: 50px;
  margin: 10px;
`;
/*파인더리뷰 닉네임&이름 */
const FinderName = styled.div`
  display: flex;
  width: 100px;
  font-weight: 600;
  font-size: 20px;
  margin: 10px 0 10px 60px;
`;

/*파인더 리뷰 내용*/
const Rievews = styled.div`
  margin: 3%;
`;

const Main = () => {
  const tagsList = ["#노키즈존", "#분위기 맛집", "#애견동반"];
  return (
    <>
      <Sidebar />
      <TopBar></TopBar>
      <TopContents>
        <TitleFont>
          당신 근처에 있는 <span style={{ color: "red" }}>최고의 맛집</span>{" "}
          <br />
          <span style={{ fontSize: "16px" }}>
            근처에 있는 맛집을 찾아보세요!
          </span>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search for street food..." />
            <CustomButton
              fontSize={15}
              fontWeight={400}
              width={130}
              marginTop={0}
              onClick={() => console.log("버튼클릭")}
            >
              Search
            </CustomButton>
          </SearchContainer>
        </TitleFont>
        <span style={{ marginLeft: "5%" }}>
          <Tags tagsList={tagsList} />
          지도자리
        </span>
      </TopContents>
      <HorizonLine />
      <StreetFoodContents>
        <TitleFont>
          <span style={{ color: "red" }}>#요즘 급상승🔥</span> 스트릿 푸드
        </TitleFont>
        <RievewContents>
          <FoodPost>냠냠냠</FoodPost>
          <FoodPost>냠냠냠</FoodPost>
          <FoodPost>냠냠냠</FoodPost>
        </RievewContents>
      </StreetFoodContents>
      <HorizonLine />
      {/* 베스트파인더 */}
      <TitleFont>
        8월의 <span style={{ color: "red" }}>베스트 파인더 👑 </span>
      </TitleFont>
      <BestFinderContents>
        <Carousal />
      </BestFinderContents>
      {/* 파인더리뷰 */}
      <HorizonLine />
      <TitleFont>
        파인더 <span style={{ color: "red" }}>리뷰</span>
      </TitleFont>
      <FinderRieviewContents>
        <RievewContents>
          <FinderRieview>
            <FinderProfile>
              <FinderName>홍길동</FinderName>
            </FinderProfile>
            <Rievews>분위기가 좋고 아이들과 식사하기 좋아요</Rievews>
          </FinderRieview>
        </RievewContents>
        <RievewContents>
          <FinderRieview>
            <FinderProfile>
              <FinderName>홍길동</FinderName>
            </FinderProfile>
            <Rievews>분위기가 좋고 아이들과 식사하기 좋아요</Rievews>
          </FinderRieview>
        </RievewContents>
        <RievewContents>
          <FinderRieview>
            <FinderProfile>
              <FinderName>홍길동</FinderName>
            </FinderProfile>
            <Rievews>분위기가 좋고 아이들과 식사하기 좋아요</Rievews>
          </FinderRieview>
        </RievewContents>
      </FinderRieviewContents>
      <BottomBar />
    </>
  );
};

export default Main;
