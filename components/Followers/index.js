import FollowersList from '../FollowersList'
import Header from '../Header'
import styles from '../../styles/Followers.module.css'
export default function Followers({followers}) {
    return (
        <div className={styles.followers}>
            <Header title="Followers" />
            <FollowersList followers={followers} />
        </div>
    )
}