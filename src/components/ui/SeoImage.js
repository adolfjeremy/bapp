import Image from "next/image";

export default function SeoImage({ imageSrc, seoAlt }) {
  return (
    <Image
      fill
      sizes="100svw"
      src={imageSrc}
      alt={seoAlt}
      className="seoImage"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
