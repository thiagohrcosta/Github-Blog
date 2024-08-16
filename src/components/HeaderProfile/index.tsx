import { HeaderProfileStyle } from "./style";
import PhotoProfile from "../../assets/photo.png";

export function HeaderProfile() {
  return (
    <HeaderProfileStyle>
      <div className="profile-container">
        <div className="profile-avatar">
          <img src={PhotoProfile} alt="Photo" />
        </div>
        <div className="profile-info">
          <div className="profile-header">
            <div>John Doe</div>
            <div>GITHUB</div>
          </div>
          <div>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. 
              Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
            <div className="profile-social">
              <div>GIthub</div>
            </div>
          </div>
        </div>
      </div>
    
    </HeaderProfileStyle>
  )
}