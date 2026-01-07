"use client";
import { signUp } from "@/app/action/auth";
import { useActionState } from "react";
import Container from "@/components/layout.js/Container";
import styles from "./page.module.scss";

export default function AdminLogin() {
  const [state, action, pending] = useActionState(signUp, undefined);
  return (
    <section className={styles.authPage}>
      <Container>
        <h1 className={styles.h1}>Admin Login</h1>
        <form className={styles.inner} action={action}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Name" />
          </div>
          {state?.errors?.name && <p>{state.errors.name}</p>}

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="Email" />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          <button disabled={pending} type="submit">
            Sign Up
          </button>
        </form>
      </Container>
    </section>
  );
}
