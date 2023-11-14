import Router from 'navigation/router';
import AuthContextProvider from 'services/AuthContext';
import NewsContextProvider from 'services/NewsContext';

function App() {
  return (
    <div className="App">
      <div className="flex h-[100vh]">
        <AuthContextProvider>
          <NewsContextProvider>
            <Router />
          </NewsContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
