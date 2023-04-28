import NavBar from "./NavBar";

export default function Page({ children }) {
  return (
    <>
      <main className="px-6 py-4">
        <header>
          <NavBar></NavBar>
        </header>
        {children}
      </main>
    </>
  );
}
