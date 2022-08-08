import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signUp } from "../firebase/auth";

const Home: NextPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, password, repeatPassword } = state;

    if (!password || !repeatPassword || !email) {
      window.alert("Please fill all fields");
      return;
    }

    if (password !== repeatPassword) {
      window.alert("Passwords do not match");
      return;
    }

    const user = await signUp(email, password);

    if (user) {
      window.alert("User created");
      console.log(user);
    } else {
      window.alert("User not created");
    }
  };

  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards study app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="repeatPassword">Repetir Contraseña</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              onChange={handleChange}
            />
          </div>

          <button type="submit">Registrate!</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
