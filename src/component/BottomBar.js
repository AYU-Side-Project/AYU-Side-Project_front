import styled from "styled-components";

const BottomContents = styled.div`
  margin: 5%;
  margin-left: 12%;
  text-align: center;
  font-size: 15px;
`;
/*구분선*/
const HorizonLine = styled.div`
  background-color: #d9d9d9;
  height: 1px;
  margin-left: 211px;
  margin-top: 100px;
`;
const BottomBar = () => {
  return (
    <>
      <HorizonLine />
      <BottomContents>
        @2024 Street Food FInder All rights reserved
      </BottomContents>
    </>
  );
};

export default BottomBar;
