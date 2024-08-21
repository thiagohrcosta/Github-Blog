import styled from "styled-components";

export const PublicationsComponentStyle = styled.div`
  width: 100% ;
  max-width: 864px;
  margin: 70px auto 0;

  .publication-header {
    display: flex;
    justify-content: space-between;

    h2 {
      color: ${props => props.theme["gray-100"]};
      margin-bottom: 10px;
    }

    p {
      color: ${props => props.theme["gray-400"]};

    }
  }

  .search-publication-container {
    input {
      width: 100%;
      height: 48px;
      padding: 5px 15px;
      margin-bottom: 48px;

      border-radius: 6px;
      background-color: ${props => props.theme["gray-900"]};
      border: 1px solid ${props => props.theme["gray-500"]};

      color: ${props => props.theme["white"]};
    }
  }

  .publications-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 34px;
    margin: 10px;
  }
`;