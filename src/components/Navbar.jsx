import logo from "../assets/logo.png";

const Navbar = ({ searchText, setSearchText }) => {
  return (
    <>
      <div className="nav-main px-2 sticky z-10 top-0 left-0  bg-[#F6D776] flex items-center justify-around h-[70px] ">
        <div className="text-2xl">
          <img width={200} height={100} src={logo} alt="" />
        </div>
        <div>
          <input
            placeholder="search..."
            className="outline-none pl-[15px] w-[200px] sm:w-[500px]  rounded-[20px] p-[10px]  "
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
