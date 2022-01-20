import "./assets/css/servicio.css";
import "./assets/css/styles.css";

import asesorias from "./assets/images/services/cellphone.png";
import instalacion from "./assets/images/services/instalacion.png";
import envio from "./assets/images/services/shipping.png";
import garantia from "./assets/images/services/devolucion.png";

const Servicio = () => {
  return (
    <div>
      <div id="breadcrumb" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="breadcrumb-header">Nuestros servicios</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <h4 class="col-md-7 text-center subheader">
              Nos aseguraremos que te sientas cómodo y feliz con nuestros
              productos ofreciéndote múltiples servicios. Siempre dispuestos
              para ti.
            </h4>

            <div class="services">
              <div class="col-md-5 service">
                <div class="service-img">
                  <img src={instalacion} alt="" />
                </div>
                <div class="section-title">
                  <h3 class="title">Instalación</h3>
                </div>
                <div class="service-caption">
                  <p>Instalación y conexión de luminarias y reflectores</p>
                </div>
                <button class="secondary-btn more-info">
                  <i class="fa fa-info"></i>más información
                </button>
              </div>
              <div class="col-md-5 service">
                <div class="service-img">
                  <img src={envio} alt="" />
                </div>
                <div class="section-title">
                  <h3 class="title">Envío Inmediato</h3>
                </div>
                <div class="service-caption">
                  <p>Recibe tu pedido entre 2 y 4 días laborables</p>
                </div>
                <button class="secondary-btn more-info">
                  <i class="fa fa-info"></i>más información
                </button>
              </div>
              <div class="col-md-5 service">
                <div class="service-img">
                  <img src={asesorias} alt="" />
                </div>
                <div class="section-title">
                  <h3 class="title">Asesorías</h3>
                </div>
                <div class="service-caption">
                  <p>
                    Si necesitas asesoramiento para realizar tu compra, llámanos
                  </p>
                </div>
                <button class="secondary-btn more-info">
                  <i class="fa fa-info"></i>más información
                </button>
              </div>
              <div class="col-md-5 service">
                <div class="service-img">
                  <img src={garantia} alt="" />
                </div>
                <div class="section-title">
                  <h3 class="title">Garantía</h3>
                </div>
                <div class="service-caption">
                  <p>
                    Hasta 30 días para realizar reposición por defectos de
                    fábrica
                  </p>
                </div>
                <button class="secondary-btn more-info">
                  <i class="fa fa-info"></i>más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicio;
