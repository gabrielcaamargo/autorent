import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export function Footer() {
  return (
    <footer className="h-48 absolute w-full bottom-0 shadow-[0_-3px_4px_0_rgba(0,0,0,0.1)] px-9">
      <div className="flex items-center justify-between py-12">
        <Link to="/">
          <img src={logo} alt="Autorent" />
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">MINHAS RESERVAS</Link>
          </li>
          <li>
            <Link to="/">MEU PERFIL</Link>
          </li>
          <li>
            <Link to="/">NOS CONTRATE</Link>
          </li>
        </ul>
      </div>

      <p className="text-sm mt-4 pb-2 text-center">
        Desenvolvido por
        <a
          href="https://linkedin.com/in/gabrielcaamargo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-carmesim-500"
        >
          &nbsp;Gabriel Camargo
        </a>
      </p>
    </footer>
  );
}
