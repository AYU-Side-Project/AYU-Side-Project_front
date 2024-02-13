import styled from "styled-components";
import SimpleSlider from "./SimpleSlider";
import Tags from "./Tags";
/*베스트파인더*/

const PostContainer = styled.div`
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 100%; /* 최대 너비 설정 */
  margin: 0 auto;
`;
/*포스트헤더*/
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
/*프로필이미지*/
const PostAuthor = styled.div`
  margin-left: 10px;
  font-weight: bold;
`;

const PostContent = styled.div`
  padding: 3%;
  margin-top: 3%;
`;
const FinderProfile = styled.div`
  background-color: grey;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const Divider = styled.div`
  display: flex;

  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;
const Post = ({ postIdList }) => {
  const tagsList = ["#피자", "#노키즈존"];
  return (
    <>
      <PostContainer>
        <PostHeader>
          <FinderProfile />
          <PostAuthor>
            {postIdList.map((id, index) => (
              <id Key={index}>{id}</id>
            ))}
          </PostAuthor>
        </PostHeader>
        <SimpleSlider />
        <PostContent>
          분위기가 좋고 아이들과 식사하기 좋아요
          <br />
          <Tags tagsList={tagsList} />
        </PostContent>
      </PostContainer>
      <Divider />
    </>
  );
};

export default Post;
