import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
	return (
	 <nav>
	   <ul>
	     <li>
		<Link href="/">
		  Home
		</Link>
	     </li>
	     <li>
		<Link href="/blog">
		  SampleWebsite
		</Link>
	     </li>
	     <li>
		<Link href="/about">
		  Newspaper
		</Link>
	     </li>
	    <li>
		<Link href="/prepmart">
		PrepMart
		</Link>
	    </li>
	    <li>
		<Link href="/cafeprep">
		CafePrep
		</Link>
	    </li>
	    <li>
		<Link href="/navigation">
		Navigation
		</Link>
	    </li>

	  </ul>
	</nav>
	)
}

