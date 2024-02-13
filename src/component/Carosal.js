import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Post from "./Post";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Carousal = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        activePostition={"center"}
        numberOfCards={3}
        gutter={20}
        leftChevron={<ArrowBackIosIcon />}
        rightChevron={<ArrowForwardIosIcon />}
        outsideChevron={true}
        showSlither={true}
        firstAndLastGutter={true}
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        <Post postIdList={["홍길동"]} />
        <Post postIdList={["나그네"]} />
        <Post postIdList={["별명"]} />
        <Post postIdList={["홍길동"]} />
        <Post postIdList={["나그네"]} />
        <Post postIdList={["별명"]} />
      </ItemsCarousel>
    </div>
  );
};

export default Carousal;
