import "./assets/css/contacto.css";
import "./assets/css/styles.css";
import {
  FaPaperPlane,
  FaTrashAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBell,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const Contacto = () => {
  return (
    <div>
      <div id="breadcrumb" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="breadcrumb-header breadcrumb-title">Contáctanos</h3>
              <h4 class="breadcrumb-tree breadcrumb-subtitle">
                Nos gustaría saber de ti
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="message-details">
                <div class="section-title">
                  <h3 class="title">Envíanos un mensaje</h3>
                </div>
                <form class="contact-group">
                  <input
                    class="input"
                    type="text"
                    name="first-name"
                    placeholder="Nombre"
                    required
                  />
                  <input
                    class="input"
                    type="text"
                    name="last-name"
                    placeholder="Apellido"
                    required
                  />
                  <input class="input" type="date" name="birth-date" required />
                  <select class="input" name="birth-place" required>
                    <option value="" disabled selected>
                      Lugar de origen
                    </option>
                    <option value="gye">Guayaquil</option>
                    <option value="uio">Quito</option>
                    <option value="cue">Cuenca</option>
                  </select>
                  <input
                    class="input"
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required
                  />
                  <input
                    class="input"
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                  />
                  <textarea
                    class="input"
                    placeholder="Tu mensaje"
                    required
                  ></textarea>
                  <button class="primary-btn message-submit" type="submit">
                    <FaPaperPlane class="icon-send" /> Enviar mensaje
                  </button>
                  <button class="secondary-btn clear-fields" type="reset">
                    <FaTrashAlt class="icon-trash" /> Limpiar
                  </button>
                </form>
              </div>
            </div>

            <div class="col-md-5 vertical-line">
              <div class="liderwin-info">
                <div class="section-title">
                  <h3 class="title">Visítanos</h3>
                </div>
                <div class="enterprise-info">
                  <div class="separator">
                    <FaMapMarkerAlt size="1em" color="#012c73" />
                    <h4>Ubicación de la oficina</h4>
                  </div>
                  <div class="data-1">
                    <label class="city" for="city">
                      Guayaquil
                    </label>
                    <span>
                      C.C. Buenavista Plaza B5 Local 5, Km. 0.5 Vía Samborondón
                      y Av. Rio Vinces
                    </span>
                    <span>Samborondón - 092301</span>
                  </div>
                  <div class="separator">
                    <FaPhoneAlt size="1em" color="#012c73" />
                    <h4>Teléfonos</h4>
                  </div>
                  <div class="data-2">
                    <span>(+593) 4 283 7898</span>
                    <span>(+593) 95 895 4308</span>
                    <span>(+593) 72 939 8248</span>
                  </div>
                  <div class="separator">
                    <FaEnvelope size="1em" color="#012c73" />
                    <h4>Correo electrónico</h4>
                  </div>
                  <div class="data-2">
                    <span>ventas@liderwin.com</span>
                    <span>corporativo@liderwin.com</span>
                  </div>
                  <div class="separator">
                    <FaBell size="1em" color="#012c73" />
                    <h4 class="follow-us">Síguenos</h4>
                  </div>
                  <div class="social-media">
                    <a href="https://www.facebook.com">
                      <FaFacebookF color="#012c73" />
                    </a>
                    <a href="https://www.twitter.com">
                      <FaTwitter color="#012c73" />
                    </a>
                    <a href="https://www.instagram.com">
                      <FaInstagram color="#012c73" />
                    </a>
                    <a href="https://www.linkedin.com">
                      <FaLinkedin color="#012c73" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 office-location">
              <div class="section-title">
                <h3 class="title">Ubicación en Google Maps</h3>
              </div>
              <div class="map-container">
                <iframe
                  class="map-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.7524912451051!2d-79.86538430450634!3d-2.149871876350857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc221d2592a81a3fa!2zMsKwMDgnNTguNCJTIDc5wrA1MSc1NS45Ilc!5e0!3m2!1sen!2sec!4v1636905401208!5m2!1sen!2sec"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
