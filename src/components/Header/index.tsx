import useAuthContext from 'hooks/UseAuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn, logoutHandler } = useAuthContext();
  return (
    <div className="w-full bg-[#292936] flex justify-end items-center gap-3 p-4">
      {loggedIn ? (
        <>
          <div className="text-lg text-white font-medium">
            Hello <span className="text-[#0dd] font-bold">{loggedIn}</span>
          </div>
          <button
            className="bg-white text-[#292936] header-button"
            onClick={() => logoutHandler()}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            className="header-button text-white bg-[#4A4A5F]"
            onClick={() => navigate('/sign-in')}
          >
            Sign in
          </button>
          <button
            className="bg-white text-[#292936] header-button"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
