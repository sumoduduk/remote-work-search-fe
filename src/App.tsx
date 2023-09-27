import { SiteFooter } from "./components/footer";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col text-primary min-h-screen">
      <NavigationBar />
      <Outlet />
      <SiteFooter />
    </main>
  );
}

export default App;
