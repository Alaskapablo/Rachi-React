import NavBar from 'components/NavBar';
import './styles.css';
import imgFirst from '../assets/images/img-section.svg';
import perfilGroup from '../assets/images/group-perfil.svg';
import SecurityGroup from '../assets/images/security-group.svg';
import SmileGroup from '../assets/images/smile-group.svg';
import DownloadIcon from '../assets/images/download-icon.svg';
import BannerInput from '../assets/images/banner-input-section.png';

const MainSections = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="first-section">
          <div className="container container-first-section">
            <div className="block-left__section">
              <h1>
                Rachi,<br></br>é tudo que você<br></br>
                precisa em um só lugar.
              </h1>
              <button>Cadastrar-se</button>
            </div>
            <div className="block-right__section">
              <img src={imgFirst} alt="Logo principal"></img>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="container container-second__section">
            <h2>Como funciona</h2>
            <div className="block-group__icons">
              <ul className="group-list">
                <li className="group-item">
                  <div className="block-up-group">
                    <img src={perfilGroup} alt="Icon profile"></img>
                    <p>Crie conexões</p>
                    <span>Lorem ipsum dolor sit amet,consecteteu.</span>
                  </div>
                </li>
                <li className="group-item">
                  <div className="block-up-group">
                    <img src={SecurityGroup} alt="Icon profile"></img>
                    <p>100% gratuito</p>
                    <span>Lorem ipsum dolor sit amet,consecteteu.</span>
                  </div>
                </li>
                <li className="group-item">
                  <div className="block-up-group">
                    <img src={SmileGroup} alt="Icon profile"></img>
                    <p>Compartilhamento</p>
                    <span>Lorem ipsum dolor sit amet,consecteteu.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* fixed */}
        <section className="third-section">
          <div className="container container-section__download">
            <div className="block-info__download">
              <h3>Baixe nosso app para desfrutar mais!</h3>
              <span>
                Amet in elementum nulla scelerisque dui, egestas at. Elit
                consectetur turpis elementum amet vitae et etiam nec. Varius
                volutpat hac adipiscing tincidunt pretium.
              </span>
              <div className="block-btn__download">
                <button type="button">Download</button>
              </div>
            </div>
            <div className="block-img__download">
              <img src={DownloadIcon} alt="Icone"></img>
            </div>
          </div>
        </section>
        <section className="four-section">
          <div className="container container-plans__section">
            <div className="block-header__plans">
              <h3>Nossos Planos</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia mi quis euismod ultrices.
              </span>
            </div>
            <ul className="container plans-cards__list">
              <li className="plans-card__item">
                <div className="block-content__card">
                  <div className="card-top__content">
                    <h3>Bronze</h3>
                    <div className="product-price__container">
                      <span>R$</span>
                      <h3>28</h3>
                      <p>/mes</p>
                    </div>
                    <span className="product-card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi quis euismod ultrices.
                    </span>
                  </div>
                  <button>Assinar</button>
                </div>
              </li>
              <li className="plans-card__item--silver">
                <div className="block-content__card">
                  <div className="card-top__content--silver">
                    <h3>Prata</h3>
                    <button>PREFERIDO</button>
                    <div className="product-price__container--silver">
                      <span>R$</span>
                      <h3>57</h3>
                      <p>/mes</p>
                    </div>
                    <span className="product-card__description--silver">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi quis euismod ultrices.
                    </span>
                  </div>
                  <button>Assinar</button>
                </div>
              </li>
              <li className="plans-card__item--gold">
                <div className="block-content__card">
                  <div className="card-top__content--gold">
                    <h3>Ouro</h3>
                    <div className="product-price__container--gold">
                      <span>R$</span>
                      <h3>94</h3>
                      <p>/mes</p>
                    </div>
                    <span className="product-card__description--gold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi quis euismod ultrices.
                    </span>
                  </div>
                  <button>Assinar</button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="five-section">
          <div className="container contact-container">
            <div className="block-up__contact">
              <h3>Contato</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia mi quis euismod ultrices.
              </span>
            </div>
            <div className="block-down__contact">
              <input type={'email'} placeholder="Seu melhor e-mail"></input>
              <button>Enviar</button>
            </div>
          </div>
          <img
            className="img-section__container"
            src={BannerInput}
            alt="banner desktop input"
          ></img>
        </section>
        <footer className='footer'>
          <div className='main-footer'>
            <p>Rachi - Todos os direitos reservados</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default MainSections;
