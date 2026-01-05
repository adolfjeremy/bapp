import Container from "@/components/layout.js/Container";
import styles from "./TeamList.module.scss";
import TeamItem from "./TeamItem";

export default function TeamList() {
  let team = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <h2>Our Team</h2>
          <div className={styles.teamList}>
            {team.map((i) => (
              <TeamItem key={i} name="team name" title="board of commisioner" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
