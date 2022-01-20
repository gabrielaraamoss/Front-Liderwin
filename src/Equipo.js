import "./assets/css/contacto.css";

import juan from "./assets/images/team/Juan.jpg";
import gabriela from "./assets/images/team/Gabriela.jpg";
import joby from "./assets/images/team/Joby.jpg";
import wesley from "./assets/images/team/Wesley.jpg";

const Equipo = () => {
  return (
    <div className="equipo">
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="team">
              <div class="col-md-4 member">
                <div class="member-img juan">
                  <img id="juan" src={juan} alt="Juan's Image" />
                </div>
                <div class="section-title member-name">
                  <h3 class="title">Juan Pita</h3>
                </div>
                <p class="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 class="member-role">Líder/ Programador 1</h4>
                <h4 class="member-email">jxpita@espol.edu.ec</h4>
                <div class="social-networks">
                  <a
                    href="https://www.facebook.com/jxpita17"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/jxpita"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/jxpita"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/jxpita"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-4 member">
                <div class="member-img gabriela">
                  <img src={gabriela} alt="Gabrielas's Image" />
                </div>
                <div class="section-title member-name">
                  <h3 class="title">Gabriela Ramos</h3>
                </div>
                <p class="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 class="member-role">Diseñadora/ Programador 2</h4>
                <h4 class="member-email">grramos@espol.edu.ec</h4>
                <div class="social-networks">
                  <a
                    href="https://www.facebook.com/profile.php?id=100052190711172"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/gabrielaraamoss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/gabrielaramosbaque"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/gabrielaraamoss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-4 member">
                <div class="member-img joby">
                  <img src={joby} alt="Joby's Image" />
                </div>
                <div class="section-title member-name">
                  <h3 class="title">Joby Farra</h3>
                </div>
                <p class="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 class="member-role">Semi Senior/ Programador 3</h4>
                <h4 class="member-email">jjfarra@espol.edu.ec</h4>
                <div class="social-networks">
                  <a
                    href="https://www.facebook.com/jobyfarra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/jobyfarra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/jobyfarra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/jfnodel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-4 member">
                <div class="member-img wesley">
                  <img src={wesley} alt="Wesley's Image" />
                </div>
                <div class="section-title member-name">
                  <h3 class="title">Wesley Briones</h3>
                </div>
                <p class="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 class="member-role">Junior/ Programador 4</h4>
                <h4 class="member-email">wesgbrio@espol.edu.ec</h4>
                <div class="social-networks">
                  <a
                    href="https://www.facebook.com/wesley.briones"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/wesleybriones"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/wesleybriones"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
