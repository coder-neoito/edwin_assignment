import { Home, Logo, News } from 'assets/Images';

const SideNav = () => {
  return (
    <div className="h-full bg-[#292936] flex flex-col w-[260px]">
      <div className="w-full p-6 text-white font-bold text-3xl">
        <img src={Logo} alt="" />
      </div>
      <ul className="flex flex-col list-none nav-list w-full">
        <li>
          <img src={Home} alt="" width={20} height={20} />
          <div className="text-white font-medium">Home</div>
        </li>
        <li>
          <img src={News} alt="" width={20} height={20} />
          <div className="text-white font-medium">News</div>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
