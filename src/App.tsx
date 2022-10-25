import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function App() {
  return (
    <>
      <Header />
      <main className={"flex-grow-1 d-flex"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
