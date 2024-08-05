import "src/components/about/social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { AlertTypes } from "src/config/types";

type SocialMediaProps = {
  setAlert: React.Dispatch<React.SetStateAction<AlertTypes>>;
};

const SocialMedia = ({ setAlert }: SocialMediaProps) => {
  return (
    <ul className="social">
      <li>
        <a
          href="https://www.facebook.com/kumar.akumar.amresh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa" icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/akmr-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        {/* eslint-disable-next-line */}
        <a
          href="#"
          onClick={() => {
            navigator.clipboard.writeText("kumar.akumar.amresh@gmail.com");
            setAlert({
              open: true,
              type: "info",
              message: "Email Id copied to Clipboard!",
            });
          }}
        >
          <FontAwesomeIcon className="fa" icon={faGoogle} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/akmr-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa" icon={faGithub} />
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
