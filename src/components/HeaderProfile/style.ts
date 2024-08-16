import styled from "styled-components";

export const HeaderProfileStyle = styled.div`
  width: 100% ;
  max-width: 864px;
  margin: 0px auto;
  padding: 30px;
  background-color: ${props => props.theme["gray-700"]};
  z-index: 1;

  .profile-container {
    display: flex;
    justify-content: space-between;

    .profile-avatar {
      img {
        width: 120px;
        height: 120px;
        border-radius: 20px;
      }
    }

    .profile-info {
      margin: 0 20px;
      
      display: flex;
      flex-direction: column;

      .profile-header {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
      }

      .profile-social {
        margin-top: 20px;
      }

    }
  }
`;