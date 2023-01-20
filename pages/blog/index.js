
import styles from 'styles/samplewebsite.module.css'
export default function Blog(){ 
	return (<>
		<header className={styles.header}>
		<h1 className={styles.h1}>Sample Website</h1>
		</header>
		<main className={styles.main}>
		<h2 className={styles.h2}>Heading</h2>

		<p className={styles.p}>
		Content comes here. Content comes here. Content comes here.
		Content comes here. Content comes here. Content comes here.
		</p>

		<h2 className={styles.h2}>Heading 2</h2>
		<p className={styles.p}>
		Content comes here. Content comes here. Content comes here.
	Content comes here. Content comes here. Content comes here.

		</p>
		</main>

		<footer className={styles.footer}>
		  <p className={styles.p}>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
		</footer>
</>
)
}

