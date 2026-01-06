import PageHero from "@/components/sections/PageHero";
import ClientList from "@/components/sections/ClientList";
import Cta from "@/components/sections/Cta";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function Services() {
  return (
    <div>
      <main>
        <PageHero
          titleDesktop="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          descriptionDesktop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          titleMobile="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          descriptionMobile="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaLabel="Learn more about us"
          ctaHref="/about-us"
          bgDesktop="/images/contact-us-bg.png"
          bgMobile="/images/contact-us-bg.png"
          seoAlt="High Speed Diesel and Marine Fuel Supply by PT Bumi Asri Prima Pratama"
        />
        <ClientList />
        <ContactForm />
        <Cta />
      </main>
    </div>
  );
}
