import { Auth, POGR } from 'assets/Images';
import SignIn from 'components/SignIn';

const Authorisation = () => {
  return (
    <div className="w-full flex h-full">
      <img src={Auth} alt="" />
      <div className="p-16">
        <img src={POGR} alt="" />
        <SignIn />
      </div>
    </div>
  );
};

export default Authorisation;
