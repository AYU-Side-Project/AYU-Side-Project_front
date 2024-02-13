import styled from "styled-components";
/*태그 */
const Tag = styled.div`
  width: fit-content;
  margin: 10px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 10px;
  text-align: center;
  white-space: pre-wrap;

  padding: ${({ padding }) => (padding ? `${padding}px` : "3px 10px")};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: ${({ fontSize }) => fontSize || 15}px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#d9d9d9"};
  color: ${({ color }) => color || "black"};

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;

/*태그 컨테이너*/
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;

const Tags = ({
  tagsList,
  fontSize,
  fontWeight,
  backgroundColor,
  color,
  padding,
  justifyContent,
}) => {
  return (
    <TagsContainer justifyContent={justifyContent}>
      {tagsList.map((tag, index) => (
        <Tag
          key={index}
          fontSize={fontSize}
          fontWeight={fontWeight}
          backgroundColor={backgroundColor}
          color={color}
          padding={padding}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;
