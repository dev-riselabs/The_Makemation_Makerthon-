import { Outlet } from "react-router-dom";

function Investor() {
  return (
    <main className="bg-bg-primary p-6 md:p-8 w-full overflow-y-auto ">
      <Outlet />
    </main>
  );
}

export default Investor;
