import PageHero from "@/components/sections/PageHero";
import Journey from "@/components/sections/about/Journey";
import VIsionMission from "@/components/sections/about/VIsionMission";
import TeamList from "@/components/sections/about/TeamList";
import Cta from "@/components/sections/Cta";
import ClientList from "@/components/sections/ClientList";

export default function AboutUs() {
  return (
    <div>
      <main>
        <PageHero
          titleDesktop="Empowering Progress Through Reliable Energy Solutions"
          descriptionDesktop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          titleMobile="Empowering Progress Through Reliable Energy Solutions"
          descriptionMobile="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          bgDesktop="/images/hero-about-us.png"
          bgMobile="/images/hero-about-us.png"
          seoAlt="High Speed Diesel and Marine Fuel Supply by PT Bumi Asri Prima Pratama"
        />
        <Journey />
        <VIsionMission />
        <TeamList />
        <Cta />
        <ClientList />
      </main>
    </div>
  );
}
