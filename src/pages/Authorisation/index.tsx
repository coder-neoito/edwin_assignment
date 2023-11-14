import { Auth, POGR } from 'assets/Images';
import SignIn from 'components/SignIn';
import SignUp from 'components/Signup/indext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Authorisation: React.FC<{ isSignIn?: boolean }> = ({
  isSignIn = false,
}) => {
  return (
    <div className="w-full flex h-full">
      <ToastContainer />
      <img src={Auth} alt="" className="hidden lg:block max-w-1/2" />
      <div className="p-16 flex-1">
        <img src={POGR} alt="" />
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default Authorisation;
