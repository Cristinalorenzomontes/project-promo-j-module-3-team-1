import React from "react";
import "../../stylesheets/form/_form.scss";
import "../../stylesheets/preview/_preview.scss";
import "../../stylesheets/common/_page.scss";
import "../../stylesheets/preview/_image_preview.scss";
import SocialMediaButtons from "./SocialMediaButtons";

//TENEMOS QUE PONER {props.palette} EN LOS SITIOS QUE VAYA A CAMBIAR??
const CardPreview = (props) => {
  let paletteClassName = "";
  if (props.palette === "1") {
    paletteClassName = "cold";
  } else if (props.palette === "2") {
    paletteClassName = "warm";
  } else if (props.palette === "3") {
    paletteClassName = "medium";
  }
  return (
    <div className={`app__preview--card palette-${paletteClassName}`}>
      <div className="top-block">
        <div className="name_job js-border border-cold">
          <h3 className="full_name js-name name-cold">
            {props.name || "Jeanne Baret"}
          </h3>
          <h4 className="job js-jobPreview">{props.job || "Botánica"}</h4>
        </div>
      </div>
      <div className="photo js-photo js-photo-default js__profile-image">
        <div className="js-frame js-frame-cold js-frame-hidden"></div>
      </div>
      <ul className="social_media js-icon icon-cold">
        <SocialMediaButtons
          socialMediaButtonClass="js-emailPreview"
          socialMediaButtonLink="mailto:"
          socialMediaButtonTitle="email address"
          socialMediaButtonIconClass="email"
          socialMediaButtonIcon="far fa-envelope"
        />
        <SocialMediaButtons
          socialMediaButtonClass="js-phonePreview"
          socialMediaButtonLink="tel:"
          socialMediaButtonTitle="phone number"
          socialMediaButtonIconClass="phone"
          socialMediaButtonIcon="fas fa-mobile-alt"
        />
        <SocialMediaButtons
          socialMediaButtonClass="js-linkedinPreview"
          socialMediaButtonLink="https:/www.linkedin.com/in/"
          socialMediaButtonTitle="linkedin profile"
          socialMediaButtonIconClass="linkedin"
          socialMediaButtonIcon="fab fa-linkedin-in"
        />
        <SocialMediaButtons
          socialMediaButtonClass="js-githubPreview"
          socialMediaButtonLink="https:/www.github.com/"
          socialMediaButtonTitle="github profile"
          socialMediaButtonIconClass="github"
          socialMediaButtonIcon="fab fa-github-alt"
        />
      </ul>
    </div>
  );
};

export default CardPreview;
