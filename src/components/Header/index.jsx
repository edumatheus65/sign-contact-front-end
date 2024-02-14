import Logo from "../../assets/Logo.png";

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img src={Logo} alt="Logo Sign Contact" />
          <div>
            <button>Cadastre-se</button>
            <button>Entrar</button>
          </div>
        </div>
      </div>
    </header>
  );
};
