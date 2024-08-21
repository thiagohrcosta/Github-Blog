import styled from "styled-components";

export const PublicationComponentStyle = styled.div`
  background-color: ${props => props.theme["gray-600"]};
  padding: 40px 25px;
  border-radius: 10px;

  h2 {
    font-size: 20px;
  }

  .publication-content {
    color: ${props => props.theme["gray-300"]}
  }
`;