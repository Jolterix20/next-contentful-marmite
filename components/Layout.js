import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Head>
				<title>Just Add Marmite</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<header>
				<Link href="/">
					<a>
						<h1>
							<span>Just Add</span>
							<span>Marmite</span>
						</h1>
						<h2>Spread The Joy</h2>
					</a>
				</Link>
			</header>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright 2021 Just Add Marmite :)</p>
			</footer>
		</div>
	)
}
