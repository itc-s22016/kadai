import styles from 'styles/prepmart.module.css'
export default function PrepMart() {
        return (
		<div className={styles.box}>
			<h1 className={styles.h1}>Prep Mart</h1>
		<ul className={styles.col_3}>
		  <li className={styles.li}>
		     <h2 className={styles.meat}>Meat</h2>
		<ul className={styles.menu}>
		  <li className={styles.li}>Beef</li>
		  <li className={styles.li}>Chicken</li>
		  <li className={styles.li}>Other</li>
		</ul>
		  </li>
		
		<li className={styles.li}>
		<h2 className={styles.fish}>Fish</h2>
		<ul className={styles.menu}>
		  <li className={styles.li}>Tuna</li>
		  <li className={styles.li}>Shrimp</li>
		  <li className={styles.li}>Other</li>
		</ul>
		  </li>
		<li className={styles.li}>
		<h2 className={styles.vegetable}>Vegetable</h2>
		<ul className={styles.menu}>
		<li className={styles.li}>Tomato</li>
		<li className={styles.li}>Lettuce</li>
		<li className={styles.li}>Other</li>
		</ul>
        	</li>
 		</ul>
</div>


	)
}


