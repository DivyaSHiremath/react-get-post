import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section class="link-container">
      <Link href="login">Login</Link>
      <br />
      <br />
      <Link href="registeration">Register</Link>
    </section>
  );
}
