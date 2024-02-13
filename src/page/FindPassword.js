import TopBar from "../component/TopBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const TitleFont = styled.p`
  color: #f43f3f;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  margin: 0; /* 기본 마진 제거 */
`;

const BlackText = styled.span`
  color: #000;
`;

const SubTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 100px;
`;

const InputField = styled.input`
  width: 604px;
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const InputLabel = styled.label`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-right: 570px;
`;

const SignUpButton = styled.button`
  width: 620px;
  background-color: #f43f3f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;

const NoUnderlineLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const FindPassWord = () => {
  return (
    <>
      <TopBar></TopBar>
      <Title>
        <TitleFont>
          <BlackText>비밀번호 찾기</BlackText>
          <br />
        </TitleFont>
      </Title>
      <SignInForm>
        <InputLabel htmlFor="email">이메일</InputLabel>
        <InputField type="text" id="email" placeholder="Enter your Email" />
        <SignUpButton type="submit">SEND EMAIL</SignUpButton>
        <span
          style={{
            color: "black",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          <NoUnderlineLink to="/SignIn">로그인</NoUnderlineLink> /
          <NoUnderlineLink to="/SignUp"> 회원가입</NoUnderlineLink>
        </span>
      </SignInForm>
    </>
  );
};

export default FindPassWord;
