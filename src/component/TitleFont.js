import styled from "styled-components";

const TitleFontStyle = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  font-family: Roboto;
  margin-left: 5%;
`;

const TitleFont = ({ children }) => {
  return (
    <>
      <TitleFontStyle>{children}</TitleFontStyle>
    </>
  );
};

export default TitleFont;
