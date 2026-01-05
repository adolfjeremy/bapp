import PageHero from "@/components/sections/PageHero";
import ServiceList from "@/components/sections/services/ServiceList";
import Cta from "@/components/sections/Cta";

export default function Services() {
  return (
    <div>
      <main>
        <PageHero
          titleDesktop="Sed ut perspiciatis unde omnis iste natus error sit volup"
          descriptionDesktop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          titleMobile="Sed ut perspiciatis unde omnis iste natus error sit volup"
          descriptionMobile="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          bgDesktop="/images/services-bg.png"
          bgMobile="/images/services-bg.png"
          seoAlt="High Speed Diesel and Marine Fuel Supply by PT Bumi Asri Prima Pratama"
        />
        <ServiceList />
        <Cta />
      </main>
    </div>
  );
}
