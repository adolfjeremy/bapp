// import { loginAction } from "./action";
import Container from "@/components/layout.js/Container";
import styles from "./page.module.scss";

export default function AdminLogin() {
  return (
    <section className={styles.authPage}>
      <Container>
        <h1 className={styles.h1}>Admin Login</h1>
        <form className={styles.inner} action={loginAction}>
          <input name="email" type="email" placeholder="Email" required />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </Container>
    </section>
  );
}
