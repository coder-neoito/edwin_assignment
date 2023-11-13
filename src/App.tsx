import Header from 'components/Header';
import SideNav from 'components/SideNav';
import Router from 'navigation/router';
import Authorisation from 'pages/Authorisation';
import HomePage from 'pages/HomePage';
import News from 'pages/News';
import NewsContextProvider from 'services/NewsContext';

function App() {
  return (
    <div className="App">
      <div className="flex h-[100vh]">
        <NewsContextProvider>
          <Router />
        </NewsContextProvider>
      </div>
    </div>
  );
}

export default App;
