import NavBar from "./NavBar";

interface PageProps {
  children: any;
}

export default function Page({ children }: PageProps) {
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
