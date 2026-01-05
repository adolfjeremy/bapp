import Container from "@/components/layout.js/Container";
import SeoImage from "@/components/ui/SeoImage";
import styles from "./VisionMission.module.scss";

export default function VIsionMission() {
  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <div
            className={`${styles.itemContainer} ${styles.vision} flex flex-column justify-center align-center gap-sm`}
          >
            <SeoImage imageSrc="/images/vision-bg.png" seoAlt="bapp vision" />
            <h2>Vision</h2>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur
            </p>
          </div>
          <div
            className={`${styles.itemContainer} ${styles.mission} flex flex-column justify-center align-center gap-sm`}
          >
            <SeoImage imageSrc="/images/mission-bg.png" seoAlt="bapp mission" />
            <h2>mission</h2>
            <p>
              Sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
