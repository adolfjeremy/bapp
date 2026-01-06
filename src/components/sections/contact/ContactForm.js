import Image from "next/image";
import Container from "@/components/layout.js/Container";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <div className="flex flex-column justify-center align-start">
            <h2>NAM LIBERO TEMPORE, SOLUTA NOBIS EST</h2>
            <p>
              Odio dignissimos ducimus qui blanditiis praesentium voluptatum.
            </p>
            <div className="flex flex-column align-center justify-center">
              <div>
                <input type="text" name="first name" id="" />
                <input type="text" name="second name" id="" />
              </div>
              <div>
                <input type="email" name="email" id="" />
                <input type="text" name="phone" id="" />
              </div>
              <div>
                <textarea name="phone" id=""></textarea>
              </div>
            </div>
          </div>
          <div
            className={`${styles.imageContainer} flex justify-end align-center position-relative`}
          >
            <Image
              src="/images/contact-us-img.png"
              width={520}
              height={442}
              alt="bapp ship refuling a big ship"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
