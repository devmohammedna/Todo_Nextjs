import Link from "next/link";
import styles from "../../styles/FollowersList.module.css";

export default function FollowersListComponent({followers}) {
    return (
     <div className={styles.followerslistContainer}>
      <div>
        {followers.map((follower, index) => (
          <div
            data-testid={`follower-card-${index}`}
            key={`follower-card-${index}`}
          >
            <Link href={`followers/${follower.id}`}>
              <div className={styles.followerItem}>
                <img alt={follower.name.first} src={follower.picture.medium} />
                <div className={styles.followersDetails}>
                  <div className={styles.followerItemName}>
                    <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                  </div>
                  <p>{follower.login.username}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link href="/">Go Back</Link>
      </div>
    </div>
    )
}
