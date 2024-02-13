import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Exampleimg = styled.div`
  height: 300px;
  max-width: 100%;
  max-height: 100%;
  background-color: grey;
`;

const Exq = styled.div`
  height: 300px;
  max-width: 100%;
  max-height: 100%;
  background-color: red;
`;

const Eq = styled.div`
  height: 300px;
  max-width: 100%;
  max-height: 100%;
  background-color: blue;
`;

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <Exampleimg />
        <Exq />
        <Eq />
        <Exampleimg />
        <Exampleimg />
        <Exampleimg />
      </Slider>
    </div>
  );
};

export default SimpleSlider;
