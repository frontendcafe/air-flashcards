import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

const Team = ({ team }: any) => {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: 20,
        }}
      >
        Devs
      </h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 1024,
          margin: "auto",
        }}
      >
        {team?.map(({ login, avatar_url, html_url }) => {
          return (
            <li key={login}>
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  width: 200,
                }}
              >
                <Image
                  src={avatar_url}
                  height="200"
                  width={200}
                  style={{
                    borderRadius: 10,
                  }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#1966FF",
                    color: "white",
                    padding: "5px 0",
                    borderRadius: 8,
                    marginTop: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    width: "100%",
                    lineBreak: "anywhere",
                  }}
                >
                  <AiFillGithub />
                  {login}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export const getServerSideProps = async () => {
  const ghResponse = await fetch(
    "https://api.github.com/repos/frontendcafe/air-flashcards/contributors"
  );
  const team = await ghResponse.json();
  return {
    props: { team },
  };
};

export default Team;
