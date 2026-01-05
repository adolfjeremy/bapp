import ServiceSwiper from "@/components/layout.js/ServiceSwiper";
import ClientList from "@/components/sections/ClientList";
import Cta from "@/components/sections/Cta";
import PageHero from "@/components/sections/PageHero";
import ServiceList from "@/components/sections/ServiceList";
import HomeOverview from "@/components/sections/home/HomeOverview";
import HomeValue from "@/components/sections/home/HomeValue";
import WhyChooseBAPP from "@/components/sections/home/WhyChooseBAPP";

export default function Home() {
  return (
    <div>
      <main>
        <PageHero
          titleDesktop="Rising stronger with renewed energy"
          descriptionDesktop="Our journey has shaped us to become more resilient, innovative, and ready for a new era of growth"
          titleMobile="Rising stronger with renewed energy"
          descriptionMobile="Our journey has shaped us to become more resilient, innovative, and ready for a new era of growth"
          ctaLabel="Contact us"
          ctaHref="/contact"
          bgDesktop="/images/hero-home.png"
          bgMobile="/images/hero-home.png"
          seoAlt="High Speed Diesel and Marine Fuel Supply by PT Bumi Asri Prima Pratama"
        />
        <HomeOverview />
        <HomeValue />
        <ServiceList />
        {/* <ServiceSwiper /> */}
        <ClientList />
        <WhyChooseBAPP />
        <Cta />
      </main>
    </div>
  );
}
