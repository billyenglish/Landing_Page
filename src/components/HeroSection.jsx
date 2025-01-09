import ReactDOM from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
    return (
        <>
            <section className="hero-section">
                <div className="intro-container">
                    <h2 className="my-name">Billy English</h2>
                    <p className="job-title">Software Engineer</p>

                    <div className="my-links">
                        <FontAwesomeIcon icon={faGithub} size="4x" />
                        <FontAwesomeIcon icon={faLinkedin} size="4x" />
                        <FontAwesomeIcon icon={faMicrosoft} size="4x" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;