import styles from 'styles/cafeprep.module.css'
export default function CafePrep() {
        return (
		<div className={styles.body}>

		<div className={styles.box}>


		<div className={styles.boxhead}>	
		<h1 className={styles.h1}>Cafe Prep</h1>
		</div>

		<nav className={styles.box}>
			<h2 className={styles.h2}>Drink</h2>
		
		<ul className={styles.ul}>
		   <li className={styles.li}>Coffee</li>
		   <li className={styles.li}>Latte</li>
		   <li className={styles.li}>Espresso</li>
		</ul>

		<p className={styles.bgp}>a</p>
		</nav>
		</div>
		</div>
	)
}


