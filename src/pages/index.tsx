import { Accomplishments, Hero, Projects, Technologies } from "@/components";
import About from "@/components/About/About";
import { Layout } from "@/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Accomplishments />
      </Layout>
    </>
  );
}
