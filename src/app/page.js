import PageHero from "@/components/sections/PageHero";
import HomeOverview from "@/components/sections/home/HomeOverview";
import HomeValue from "@/components/sections/home/HomeValue";

export default function Home() {
  return (
    <div>
      <main>
        <PageHero
          titleDesktop="Trusted High Speed Diesel Supplier & Bunker Service Provider in Indonesia"
          descriptionDesktop="PT. Bumi Asri Prima Pratama is a well-established company specializing in High Speed Diesel (HSD) and Marine Fuel Oil (MFO) trading, delivering reliable energy solutions for industrial, mining, and marine sectors since 2004."
          titleMobile="Reliable Industrial Diesel & Bunker Fuel Solutions"
          descriptionMobile="Serving industry, mining, and marine sectors since 2004."
          ctaLabel="Contact Our Team"
          ctaHref="/contact"
          bgDesktop="/images/hero-home.png"
          bgMobile="/images/hero-home-sm.png"
          seoAlt="High Speed Diesel and Marine Fuel Supply by PT Bumi Asri Prima Pratama"
        />
        <HomeOverview />
        <HomeValue />
      </main>
    </div>
  );
}
