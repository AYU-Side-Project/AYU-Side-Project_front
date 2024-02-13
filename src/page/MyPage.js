import styled from "styled-components";
import Sidebar from "../component/SideBar";
import TopBar from "../component/TopBar";
import TitleFont from "../component/TitleFont";
import CustomButton from "../component/CustomButton";
import FoodPost from "../component/FoodPost";
import BottomBar from "../component/BottomBar";

const TopContents = styled.div`
  display: flex;
  margin-top: 4%;
  justify-content: flex-end;
`;
const Banner = styled.div`
  width: 45%;
  height: 417px;
  background-color: #d9d9d980;
`;

const CustomFont = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  font-family: Roboto;
`;

const MyPageBar = styled.div`
  display: flex;
  height: 100px;
  padding: 3%;
  margin-left: 212px;
  background: grey;
  gap: 2%;
`;

const Profile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: rgba(217, 217, 217, 0.5);
`;

const ProfileText = styled.div`
  width: 75%;
  color: white;
`;

const SettingZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: center;
`;

const MyPostContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 2%;
  justify-content: center;
  margin-left: 5%;
`;

const Posts = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 5%;
  gap: 50px;
`;
const MyPage = () => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <TopContents>
        <span style={{ marginRight: "15%", marginTop: "5%" }}>
          <CustomFont>먹는것이 좋은 홍길동의 홈</CustomFont>
          <p>안녕하세요. 홍길동의 홈페이지입니다.</p>
        </span>
        <Banner />
      </TopContents>
      <MyPageBar>
        <Profile />
        <ProfileText>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "700",
              letterSpacing: "5px",
              lineHeight: "32px" /* 133.333% */,
            }}
          >
            홍길동
          </span>
          <p>먹을것을 좋아합니다.</p>
        </ProfileText>
        <SettingZone>
          <CustomButton
            border={"1px solid #ffffff"}
            backgroundColor={"rgba(255, 255, 255, 0)"}
            hoverBackgroundColor="#eaeaea"
            width={200}
          >
            개인정보 관리
          </CustomButton>
          <CustomButton width={200}>프로필 관리</CustomButton>
        </SettingZone>
      </MyPageBar>
      <MyPostContents>
        <TitleFont>내가 올린 게시물</TitleFont>
        <Buttons>
          <CustomButton
            border={"1px solid #00000"}
            backgroundColor={"rgba(255,255,255,1)"}
            width="200"
            hoverBackgroundColor="#eaeaea"
            color="#000000"
          >
            전체 보기
          </CustomButton>
          <CustomButton
            border={"1px solid #ffffff"}
            width="200"
            color="#ffffff"
          >
            게시글 올리기
          </CustomButton>
        </Buttons>
        <Posts>
          <FoodPost />
          <FoodPost />
          <FoodPost />
        </Posts>
      </MyPostContents>
      <BottomBar />
    </>
  );
};

export default MyPage;
