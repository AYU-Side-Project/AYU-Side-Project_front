import TopBar from "../component/TopBar";
import styled from "styled-components";
import CustomButton from "../component/CustomButton";
import TitleFont from "../component/TitleFont";
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column; /* 컬럼 방향으로 정렬 */
  align-items: center; /* 수직 정렬 */
  gap: 24px;
  flex: 1 0 0;
  width: 520px;
  margin: 0 auto; /* 수평 가운데 정렬 */
  margin-top: 8%; /* 상단 여백 */
`;

const SubTitle = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const SignIn = () => {
  return (
    <>
      <TopBar></TopBar>
      <LoginForm>
        <Title>
          <TitleFont>
            안녕하세요! <span style={{ color: "red" }}>파인더님🔍</span> <br />
            <SubTitle>파인더가 되어 맛집을 찾아주세요!</SubTitle>
          </TitleFont>
        </Title>
        <CustomButton>카카오로 3초 로그인</CustomButton>
      </LoginForm>
    </>
  );
};

export default SignIn;
