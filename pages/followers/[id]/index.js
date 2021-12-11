import Link from "next/link";
import Header from "../../../components/Header";
import styles from "../../../styles/FollowersList.module.css";
import styles2 from "../../../styles/Todo.module.css";

function follower({ follower }) {
  return (
    <>
      {console.log(follower)}
      <div className={styles2.todo}>
        <Header title={follower.name.first + " " + follower.name.medium} />
        <div className={styles.followerItem}>
          <img alt={follower.name.first} src={follower.picture.medium} />
          <div className={styles.followersDetails}>
            <div className={styles.followerItemName}>
              <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
            </div>
            <p>{follower.gender}</p>
            <p>{follower.email}</p>
            <p>{follower.login.username}</p>
          </div>
        </div>
      </div>
      <button>
        <Link href="/followers">Back To Followers</Link>
      </button>
    </>
  );
}


export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/followers");
  const data = await response.json();
  return {
    paths: data.followers.map((item) => ({ params: { id: item.id } })),
    fallback: false,
  };
}


export async function getStaticProps(context) {
  const response = await fetch("http://localhost:3000/api/followers");
  const data = await response.json();

  return {
    props: {
      follower: data.followers.filter(
        (item) => item.id === context.params.id
      )[0],
    },
    revalidate: 10,
  };
}
