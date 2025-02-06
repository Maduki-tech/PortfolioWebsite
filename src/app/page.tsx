import AboutMe from "@/components/full/aboutMe";
import Hero from "./hero";
import ProjectSection from "@/components/ui/projects/projects";
import ContactForm from "@/components/ui/contact/contact";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <AboutMe />
      <ProjectSection />
      <ContactForm />
    </main>
  );
}
