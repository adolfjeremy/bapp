import Image from "next/image";
import Container from "@/components/layout.js/Container";
import Button from "@/components/ui/Button";

import styles from "./Journey.module.scss";
export default function Journey() {
  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <div className="flex flex-column justify-center gap-sm">
            <Image
              src="/images/quote-icon.png"
              width={64}
              height={64}
              alt="qoute icon"
            />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </p>
            <p>
              Sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem.
            </p>
            <div className="flex align-center justify-center gap-sm">
              <Image
                src="/images/hutomo-mandala-putra.png"
                width={100}
                height={100}
                alt="profile hutomo mandala putra"
              />
              <div className="flex flex-column align-start justify-center">
                <h3>Hutomo Mandala Putra</h3>
                <p>Jabatan</p>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-column gap-sm bg-primary ${styles.journey}`}
          >
            <h2>Our Journey</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <Button as="a" href="contact" size="sm" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
