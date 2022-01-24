import "./assets/css/contacto.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import juan from "./assets/images/team/Juan.jpg";
import gabriela from "./assets/images/team/Gabriela.jpg";
import joby from "./assets/images/team/Joby.jpg";
import wesley from "./assets/images/team/Wesley.jpg";

const Equipo = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="equipo">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="team">
                <div className="col-md-4 member">
                  <div className="member-img juan">
                    <img id="juan" src={juan} alt="Juan" />
                  </div>
                  <div className="section-title member-name">
                    <h3 className="title">Juan Pita</h3>
                  </div>
                  <p className="summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <h4 className="member-role">Líder/ Programador 1</h4>
                  <h4 className="member-email">jxpita@espol.edu.ec</h4>
                  <div className="social-networks">
                    <a
                      href="https://www.facebook.com/jxpita17"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/jxpita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/jxpita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href="https://github.com/jxpita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>

                <div className="col-md-4 member">
                  <div className="member-img gabriela">
                    <img src={gabriela} alt="Gabriela" />
                  </div>
                  <div className="section-title member-name">
                    <h3 className="title">Gabriela Ramos</h3>
                  </div>
                  <p className="summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <h4 className="member-role">Diseñadora/ Programador 2</h4>
                  <h4 className="member-email">grramos@espol.edu.ec</h4>
                  <div className="social-networks">
                    <a
                      href="https://www.facebook.com/profile.php?id=100052190711172"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/gabrielaraamoss"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/gabrielaramosbaque"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href="https://github.com/gabrielaraamoss"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>

                <div className="col-md-4 member">
                  <div className="member-img joby">
                    <img src={joby} alt="Joby" />
                  </div>
                  <div className="section-title member-name">
                    <h3 className="title">Joby Farra</h3>
                  </div>
                  <p className="summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <h4 className="member-role">Semi Senior/ Programador 3</h4>
                  <h4 className="member-email">jjfarra@espol.edu.ec</h4>
                  <div className="social-networks">
                    <a
                      href="https://www.facebook.com/jobyfarra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/jobyfarra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/jobyfarra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href="https://github.com/jfnodel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>

                <div className="col-md-4 member">
                  <div className="member-img wesley">
                    <img src={wesley} alt="Wesley" />
                  </div>
                  <div className="section-title member-name">
                    <h3 className="title">Wesley Briones</h3>
                  </div>
                  <p className="summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <h4 className="member-role">Junior/ Programador 4</h4>
                  <h4 className="member-email">wesgbrio@espol.edu.ec</h4>
                  <div className="social-networks">
                    <a
                      href="https://www.facebook.com/wesley.briones"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/wesleybriones"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href="https://github.com/wesleybriones"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Equipo;
