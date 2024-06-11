function Page() {
	return (
		<div className="main-container">
			<body>
				<main>
					<section id="about-me">
						<aside><h2 className="l-column">About Me</h2></aside>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nisl id lacinia maximus. Sed sodales nunc ut tortor interdum gravida. Maecenas nec enim id odio blandit hendrerit. Suspendisse tempus urna augue, at ornare dolor sodales in. Proin dapibus elit sagittis consectetur eleifend. Phasellus eget enim ligula. Praesent non massa lacus. Maecenas auctor commodo imperdiet. Nulla vel purus vitae justo imperdiet egestas et eget lorem. Suspendisse quis congue tellus, consectetur tincidunt arcu. </p>
					</section>
					<section id="code-demo">
						<aside><h2 className="l-column">Work</h2></aside>
						<a href="https://justin-hunter1.github.io/03-challenge/" className="main-demo"><img src="/images/pgen.png" /></a>
						<a href="https://justin-hunter1.github.io/04-challenge/" className="main-demo"><img src="/images/quiz.png" /></a>
						<a href="https://justin-hunter1.github.io/anything/" className="demos"><img src="/images/anything.png" /></a>
						<a href="https://pindemonium.onrender.com" className="demos"><img src="/images/pindemonium.png" /></a>
					</section>
				</main>
			</body>
		</div>
	);
}

export default Page;
