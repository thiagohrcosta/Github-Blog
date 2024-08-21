import { HeaderProfileStyle } from "./style";

import PhotoProfile from "../../assets/photo.png";
import ExitIcon from "../../assets/exit.png";
import GithubIcon from "../../assets/githubIcon.png";
import CompanyIcon from "../../assets/companyIcon.png";
import SocialIcon from "../../assets/socialIcon.png";

export function HeaderProfile() {
  return (
    <HeaderProfileStyle>
      <div className="profile-container">
        <div className="profile-avatar">
          <img src={PhotoProfile} alt="Photo" />
        </div>
        <div className="profile-info">
          <div className="profile-header">
            <div className="profile-name">
              <p>John Doe</p>
            </div>
            <div className="profile-github">
              <p>GITHUB</p>
              <img src={ExitIcon} alt="Go to Github" />
            </div>
          </div>
          <div>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. 
              Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
            <div className="profile-social">
              <div className="profile-social-container">
                <img src={GithubIcon} alt="Github Icon" />
                <p>GIthub</p>
              </div>
              <div className="profile-social-container">
                <img src={CompanyIcon} alt="Company Icon" />
                <p>Rocketseat</p>
              </div>
              <div className="profile-social-container">
                <img src={SocialIcon} alt="Social Media Icon" />
                <p>30 Seguidores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderProfileStyle>
  )
}