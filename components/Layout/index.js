import React from "react";
import Banner from "../Banner";
import styles from "../../styles/Container.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>To Do App Naim</title>
        <meta
          name="description"
          content="Naim Converted app - this code is converted from react todo app"
        />
      </Head>
      <Banner />
      <div className={styles.container}>{children}</div>
    </>
  );
}