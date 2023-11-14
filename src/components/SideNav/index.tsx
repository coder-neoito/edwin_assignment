import { Home, Logo, MobileLogo, News, POGR } from 'assets/Images';
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
  const navigate = useNavigate();
  const current = window.location.pathname;

  return (
    <div className="h-full bg-[#292936] flex flex-col w-fit md:w-[260px]">
      <div
        className="w-full py-6 text-white font-bold text-3xl cursor-pointer px-3 md:px-6"
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="" className="hidden md:block" />
        <img src={MobileLogo} alt="" className="block md:hidden" />
      </div>
      <ul className="flex flex-col list-none nav-list w-full">
        <li
          className={`${
            current === '/' ? 'bg-[#2F2F3D] border-r-4 border-[#0dd]' : ''
          }`}
          onClick={() => navigate('/')}
        >
          <img src={Home} alt="" width={20} height={20} />
          <div className="text-white font-medium hidden md:block">Home</div>
        </li>
        <li
          className={`${
            current.includes('news')
              ? 'bg-[#2F2F3D] border-r-4 border-[#0dd]'
              : ''
          }`}
          onClick={() => navigate('/news')}
        >
          <img src={News} alt="" width={20} height={20} />
          <div className="text-white font-medium hidden md:block">News</div>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
