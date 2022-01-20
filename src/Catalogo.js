import "./assets/css/catalogo.css";
import "./assets/css/styles.css";
import Slider from "@mui/material/Slider";

// import antique from "https://sylvania.com.ec/wp-content/uploads/2019/12/Antique-producto.jpg";

const Catalogo = () => {
  return (
    <div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div id="aside" class="col-md-3">
              <div class="aside">
                <h3 class="aside-title">CATEGORÍAS</h3>
                <div class="checkbox-filter">
                  <div class="input-checkbox">
                    <input type="checkbox" id="category-1" />
                    <label for="category-1">
                      <span></span>
                      LED
                      <small>(120)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="category-2" />
                    <label for="category-2">
                      <span></span>
                      Reflector
                      <small>(740)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="category-3" />
                    <label for="category-3">
                      <span></span>
                      Interior
                      <small>(1450)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="category-4" />
                    <label for="category-4">
                      <span></span>
                      Foco
                      <small>(578)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="category-5" />
                    <label for="category-5">
                      <span></span>
                      Cinta
                      <small>(120)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="category-6" />
                    <label for="category-6">
                      <span></span>
                      LED Emergencia
                      <small>(740)</small>
                    </label>
                  </div>
                </div>
              </div>
              <div class="aside">
                <h3 class="aside-title">PRECIO</h3>
                <div class="price-filter">
                  <Slider
                    getAriaLabel={() => "Minimum distance shift"}
                    defaultValue={[0, 1000]}
                    value={20}
                    disableSwap
                    valueLabelDisplay="auto"
                    color="primary"
                  />
                  <div class="input-number price-min">
                    <input id="price-min" type="number" />
                    <span class="qty-up">+</span>
                    <span class="qty-down">-</span>
                  </div>
                  <span>-</span>
                  <div class="input-number price-max">
                    <input id="price-max" type="number" />
                    <span class="qty-up">+</span>
                    <span class="qty-down">-</span>
                  </div>
                </div>
              </div>
              <div class="aside">
                <h3 class="aside-title">MARCA</h3>
                <div class="checkbox-filter">
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-1" />
                    <label for="brand-1">
                      <span></span>
                      SYLVANIA
                      <small>(578)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-2" />
                    <label for="brand-2">
                      <span></span>
                      LEDVANCE
                      <small>(125)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-3" />
                    <label for="brand-3">
                      <span></span>
                      NEXXT
                      <small>(755)</small>
                    </label>
                  </div>
                </div>
              </div>
              <div class="aside">
                <h3 class="aside-title">MAS VENDIDOS</h3>
                <div class="product-widget">
                  <div class="product-img">
                    <img
                      src="./img/products/bestsellings/spotlight.jpeg"
                      alt=""
                    />
                  </div>
                  <div class="product-body">
                    <p class="product-category">REFLECTOR</p>
                    <h3 class="product-name">
                      <a href="#">LEDVANCE SPOTLIGHT</a>
                    </h3>
                    <h4 class="product-price">$55.00 </h4>
                  </div>
                </div>
                <div class="product-widget">
                  <div class="product-img">
                    <img
                      src="../img/products/bestsellings/jetahigh.jpeg"
                      alt=""
                    />
                  </div>
                  <div class="product-body">
                    <p class="product-category">REFLECTOR</p>
                    <h3 class="product-name">
                      <a href="#">LED REFLECTOR JETA HIGH POWER</a>
                    </h3>
                    <h4 class="product-price">$100.00 </h4>
                  </div>
                </div>
                <div class="product-widget">
                  <div class="product-img">
                    <img
                      src="./img/products/bestsellings/downlight.jpeg"
                      alt=""
                    />
                  </div>
                  <div class="product-body">
                    <p class="product-category">REFLECTOR</p>
                    <h3 class="product-name">
                      <a href="#">LEDVANCE DOWNLIGHT G2</a>
                    </h3>
                    <h4 class="product-price">$25.00</h4>
                  </div>
                </div>
                <div class="product-widget">
                  <div class="product-img">
                    <img src="./img/products/bestsellings/estaca.jpeg" alt="" />
                  </div>
                  <div class="product-body">
                    <p class="product-category">LED</p>
                    <h3 class="product-name">
                      <a href="#">LED ESTACA</a>
                    </h3>
                    <h4 class="product-price">$39.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
