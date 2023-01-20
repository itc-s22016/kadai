import styles from 'styles/navigation.module.css'
export default function About() {
	return(
		<nav className={styles.nav}>
		<ul className={styles.ul}>
		<li className={styles.li}><a href="#">TOP</a></li>
		<li className={styles.li}><a href="#">ABOUT</a></li>
		<li className={styles.li}><a href="#">NEWS</a></li>
		<li className={styles.li}><a href="#">LINK</a></li>
		</ul>
		</nav>
	)
}

