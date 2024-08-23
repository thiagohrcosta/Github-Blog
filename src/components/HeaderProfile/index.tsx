import { HeaderProfileStyle } from "./style";

import ExitIcon from "../../assets/exit.png";
import GithubIcon from "../../assets/githubIcon.png";
import CompanyIcon from "../../assets/companyIcon.png";
import SocialIcon from "../../assets/socialIcon.png";

interface UserProfileProps {
  name: string;
  bio: string;
  followers: number;
  avatar_url: string;
}


export function HeaderProfile({ name, bio, followers, avatar_url}: UserProfileProps) {

  return (
    <HeaderProfileStyle>
      {name && (
        <div className="profile-container">
          <div className="profile-avatar">
            <img src={avatar_url} alt="Photo" />
          </div>
          <div className="profile-info">
            <div className="profile-header">
              <div className="profile-name">
                <p>{name}</p>
              </div>
              <div className="profile-github">
                <p>GITHUB</p>
                <img src={ExitIcon} alt="Go to Github" />
              </div>
            </div>
            <div>
              <p>{bio}</p>
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
                  <p>{followers} Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </HeaderProfileStyle>
  )
}