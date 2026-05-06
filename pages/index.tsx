import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import ParticlesBg from "@/components/ParticlesBg";

export const meta = {
  // ... keep your existing meta object ...
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Abdullah Mubarak - AI Researcher and Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Shad0wKillar.dev</Loader>

      <div className="bg-bglight dark:bg-bgdark overflow-hidden relative">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          {/* 1. Global Particles layer at z-[1] */}
          <ParticlesBg />

          <SkipToMain />
          <Header />
          <main id="main">
            {/* 2. Hero Section: Wrapped in solid background and z-[5] to completely block particles */}
            <div className="relative z-[5] bg-bglight dark:bg-bgdark">
              <HeroSection />
            </div>

            <div className="relative">
              {/* 3. About Section: Your existing AboutSection has a container with 'bg-white' and NO z-index.
                Because it has no z-index, it naturally paints at z-0 (below particles). 
                The text inside it has 'z-10' (above particles). This perfectly creates your requested sandwich effect!
              */}
              <AboutSection />

              {/* 4. Rest of the website: Elevated to z-[2] so text is readable over particles, 
                   with a transparent background so particles shine through. */}
              <div className="relative z-[2]">
                <ProjectSection />
                <ContactSection />
              </div>
            </div>
          </main>

          <div className="relative z-[2]">
            <SocialLinks page="index" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
