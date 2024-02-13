import styled from "styled-components";

const Buttons = styled.button`
  width: ${({ width }) => width || 620}px;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  font-size: ${({ fontSize }) => fontSize || 18}px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgba(244, 63, 63, 1)"};
  color: ${({ color }) => color || "#fff"};
  border: ${({ border }) => border || "1px solid #f43f3f"};
  border-radius: 10px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor || "#d32f2f"};
  }
`;

const CustomButton = ({
  onClick,
  children,
  fontSize,
  fontWeight,
  width,
  marginTop,
  backgroundColor,
  hoverBackgroundColor, // new prop for hover color
  color,
  border,
}) => {
  return (
    <Buttons
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      marginTop={marginTop}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor} // pass the prop
      color={color}
      border={border}
    >
      {children}
    </Buttons>
  );
};

export default CustomButton;
