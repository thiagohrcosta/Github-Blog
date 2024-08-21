import styled from "styled-components";

export const HeaderProfileStyle = styled.div`
  width: 100% ;
  max-width: 864px;
  margin: 0px auto;
  padding: 30px;
  background-color: ${props => props.theme["gray-700"]};
  z-index: 1;
  border-radius: 10px;

  margin-top: -60px;
  position: relative;

  .profile-container {
    display: flex;
    justify-content: space-between;

    .profile-avatar {
      img {
        width: 148px;
        height: 148px;
        border-radius: 20px;
      }
    }

    .profile-info {
      margin: 0 32px;
      
      display: flex;
      flex-direction: column;

      .profile-header {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;

        .profile-name {
          font-size: 24px;
          font-weight: bold;
        }

        .profile-github {
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${props => props.theme["blue-500"]};
          
          img {
            margin-left: 10px;
            width: 16px;
            height: 16px;
          }
        }
      }

      .profile-social {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;

        .profile-social-container {
          display: flex;

          img {
            margin-right: 10px;
            width: 18px;
            height: 18px;
          }
        }
      }

    }
  }
`;