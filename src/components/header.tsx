import MyMenu from "./nav-menu";

function Header() {
  return (
    <header className="bg-blue-100 flex flex-col items-center p-[50px]">
      <a className='border-solid border-black border-2 m-5 font-bold text-5xl' href='/'>Steve Sande</a>
      <MyMenu />
    </header>
  );
}

export default Header;
