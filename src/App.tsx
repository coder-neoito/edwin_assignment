import Header from "components/Header";
import SideNav from "components/SideNav";

function App() {
  return (
    <div className="App">
     <div className="flex h-[100vh]">
      <SideNav />
      <div className="flex-1 h-full overflow-y-auto flex-col flex">
        <Header />
        <div className="bg-[#343444] text-white flex-1">Content</div>
      </div>
     </div>
    </div>
  );
}

export default App;
