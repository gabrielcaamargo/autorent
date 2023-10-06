import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <header className='flex items-center justify-between p-5 border-b-[1px] border-gray-100'>
      <a href="/">
        <img src={logo} alt="Autorent" data-testid="logo" />
      </a>

      <div className='flex items-center gap-2'>
        <a href='/' className='font-bold text-carmesim-500' data-testid="sign-up">Inscrever-se</a>
        <a href='/' className='font-bold' data-testid="login">Login</a>
      </div>
    </header>
  );
}
