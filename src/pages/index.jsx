import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
    console.log(posts);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />

      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      ) : null}
    </div>
  );
};

export default Home;
