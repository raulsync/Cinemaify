import logo from './../../assets/logo.png';
const Navbar = () => {
  return (
    <div className="flex justify-between gap-3">
      <img
        className=" h-10 px-9 sm:px-5 md:px-5"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default Navbar;
