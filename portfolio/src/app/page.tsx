import { Navbar, Hero, HowIWork, Projects, Skills, Contact } from "@/components";

function Divider() {
  return (
    <div className="flex items-center justify-center py-10 sm:py-16">
      <div className="w-full max-w-xs sm:max-w-md h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Divider />
      <HowIWork />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
    </main>
  );
}
