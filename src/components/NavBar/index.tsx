const NavBar = () => {
  const test = true;
  return (
    <div className="flex items-center justify-between text-white bg-[#121212] px-2 py-3">
      <div className="font-bold text-2xl">C-Manage</div>
      <ul className="flex items-center list-none gap-3 font-semibold text-lg">
        <li className="cursor-pointer">All Courses</li>
        <li className="cursor-pointer">Login</li>
      </ul>
    </div>
  );
};

export default NavBar;
