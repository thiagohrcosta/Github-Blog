import styled from "styled-components";

export const PublicationContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  h1 {
    margin: 10px 0;
  }

  hr {
    border-color: ${props => props.theme["gray-400"]};
    margin: 10px 0;
  }

  .publication-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      height: 48px;
      width: 180px;
      padding: 5px;
      background-color: ${props => props.theme["gray-600"]};
      color:  ${props => props.theme["white"]};

      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 20px;
    }

    a:hover {
      background-color: ${props => props.theme["gray-300"]};
    }
  }

  .comment-container {
    background-color: ${props => props.theme["gray-600"]};
    padding: 40px 25px;
    border-radius: 10px;
    margin: 10px 0;


    .user-info {
      display: flex;

   

      img {
        width: 120px;
        border-radius: 8px;
        margin-right: 20px;
      }
    }
  }
`;