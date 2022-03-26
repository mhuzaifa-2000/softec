import { Sidebar } from "./Sidebar";
import { Footer } from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <main className="flex">{children}</main>
        </div>
      </div>

      <Footer />
    </>
  );
}
