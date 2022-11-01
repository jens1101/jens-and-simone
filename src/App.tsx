import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function App() {
  return (
    <>
      <Header />
      <main className={"flex-grow-1 d-flex flex-column"}>
        <Outlet />
      </main>
    </>
  );
}
