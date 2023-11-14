import Header from 'components/Header';
import SideNav from 'components/SideNav';
import useAuthContext from 'hooks/UseAuthContext';
import Authorisation from 'pages/Authorisation';
import HomePage from 'pages/HomePage';
import News from 'pages/News';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {
  const { loggedIn } = useAuthContext();
  return (
    <BrowserRouter>
      <SideNav />
      <div className="flex-1 h-full overflow-y-auto flex-col flex">
        <Header />
        <div className="bg-[#343444] text-white flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<News />} />
            {loggedIn ? (
              <>
                <Route path="/sign-in" element={<Navigate to={'/'} />} />
                <Route path="/register" element={<Navigate to={'/'} />} />
              </>
            ) : (
              <>
                <Route path="/sign-in" element={<Authorisation isSignIn />} />
                <Route path="/register" element={<Authorisation />} />
              </>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
