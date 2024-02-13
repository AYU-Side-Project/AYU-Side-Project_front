import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const RedCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-right: 25px;
`;

const Logo = styled.img`
  width: 237px;
  height: 63px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const NoUnderlineLink = styled(Link)`
  text-decoration: none;
`;

const SignInUp = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const SignInUpFont = styled.p`
  color: #333;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 36px;
`;

const TopBar = () => {
  return (
    <div>
      <TopBarContainer>
        <NoUnderlineLink to="/">
          <ContentContainer>
            <RedCircle>S</RedCircle>
            <Logo src="/logo.png" alt="로고" />
          </ContentContainer>
        </NoUnderlineLink>
        <SignInUp>
          <NoUnderlineLink to="/SignIn">
            <SignInUpFont>LOGIN</SignInUpFont>
          </NoUnderlineLink>
        </SignInUp>
        <NoUnderlineLink to="/MyPage">
          <SignInUpFont>
            <br />
            MYPAGE
          </SignInUpFont>
        </NoUnderlineLink>
      </TopBarContainer>
    </div>
  );
};

export default TopBar;
