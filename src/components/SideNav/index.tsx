import { Home, Logo, News } from 'assets/Images';
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
  const navigate = useNavigate();
  const current = window.location.pathname;
  console.log('current', current);
  return (
    <div className="h-full bg-[#292936] flex flex-col w-[260px]">
      <div
        className="w-full p-6 text-white font-bold text-3xl cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="" />
      </div>
      <ul className="flex flex-col list-none nav-list w-full">
        <li
          className={`${
            !current.includes('/news')
              ? 'bg-[#2F2F3D] border-r-4 border-[#0dd]'
              : ''
          }`}
          onClick={() => navigate('/')}
        >
          <img src={Home} alt="" width={20} height={20} />
          <div className="text-white font-medium">Home</div>
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
          <div className="text-white font-medium">News</div>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
