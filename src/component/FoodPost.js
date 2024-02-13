import styled from "styled-components";
/*스트릿푸드 이미지*/
const FoodImage = styled.div`
  width: ${({ imgWidth }) => imgWidth || 340}px;

  height: ${({ imgHeight }) => imgHeight || 420}px;
  background-color: white;
  border-radius: 5%;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;
/*스트릿푸드 리뷰 내용*/
const FoodRievew = styled.div`
  width: ${({ reviewWidth }) => reviewWidth || 320}px; //기본크기
  height: 80px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  background: rgba(0, 0, 0, 0.05);
  margin-top: 320px;
  padding: 3%;
  font-size: 20px;
  line-height: 35px;
  font-size: 18px;
`;
const FoodPost = ({ children, imgWidth, imgHeight, reviewWidth }) => {
  return (
    <>
      <FoodImage imgWidth={imgWidth} imgHeight={imgHeight}>
        <FoodRievew reviewWidth={reviewWidth}>{children}</FoodRievew>
      </FoodImage>
    </>
  );
};

export default FoodPost;
