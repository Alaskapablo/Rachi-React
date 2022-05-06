import NavBar from 'components/NavBar';
import './styles.css';
import imgFirst from '../assets/images/img-section.svg';
import perfilGroup from '../assets/images/group-perfil.svg';
import SecurityGroup from '../assets/images/security-group.svg';
import SmileGroup from '../assets/images/smile-group.svg';

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
                    <p>Crie conexões</p>
                    <span>Lorem ipsum dolor sit amet,consecteteu.</span>
                  </div>
                </li>
                <li className="group-item">
                  <div className="block-up-group">
                    <img src={SmileGroup} alt="Icon profile"></img>
                    <p>Crie conexões</p>
                    <span>Lorem ipsum dolor sit amet,consecteteu.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainSections;
