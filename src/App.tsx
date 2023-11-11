import Header from 'components/Header';
import SideNav from 'components/SideNav';
import Authorisation from 'pages/Authorisation';
import HomePage from 'pages/HomePage';
import News from 'pages/News';

function App() {
  return (
    <div className="App">
      <div className="flex h-[100vh]">
        <SideNav />
        <div className="flex-1 h-full overflow-y-auto flex-col flex">
          <Header />
          <div className="bg-[#343444] text-white flex-1">
            {/* <HomePage /> */}
            {/* <Authorisation /> */}
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
