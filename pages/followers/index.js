import React from 'react'
import Followers from "../../components/Followers";
import Head from "next/head";
export default function FollowersPage({followers}) {
    return (
          <div>
               <Head>
        <title>followers Naim</title>
        <meta
          name="description"
          content="Naim Converted app - this code is converted from react todo app"
        />
      </Head>
      <Followers followers={followers} />
    </div>
    )
}
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/followers", {
    method: "GET",
  });
  const data = await response.json();

  return {
    props: {
      ...data,
    },
  };
}