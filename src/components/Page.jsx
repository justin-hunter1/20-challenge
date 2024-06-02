function Page() {
  return (
    <div className="main-container">

    <body>
        <header>
            <h1 class="main-header">Justin's Portfiolo</h1>
            <nav>
                <ul id="heading-nav-bar">
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#code-demo">Code Demonstrations</a></li>
                    <li><a href="#footer-nav-bar">Contacts</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section id="about-me">
                <aside><h2 class="l-column">About Me</h2></aside>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nisl id lacinia maximus. Sed sodales nunc ut tortor interdum gravida. Maecenas nec enim id odio blandit hendrerit. Suspendisse tempus urna augue, at ornare dolor sodales in. Proin dapibus elit sagittis consectetur eleifend. Phasellus eget enim ligula. Praesent non massa lacus. Maecenas auctor commodo imperdiet. Nulla vel purus vitae justo imperdiet egestas et eget lorem. Suspendisse quis congue tellus, consectetur tincidunt arcu. </p>
            </section>

            <section id="code-demo">
                <aside><h2 class="l-column">Work</h2></aside>
                <a href="https://passwords-generator.org/" class="main-demo"><img src="assets/Images/main-page.png" /></a>
                <a href="#" class="demos" src=""><img /></a>
                <a href="#" class="demos" src=""><img /></a>
                <a href="#" class="demos" src=""><img /></a>
            </section>
        </main>

        <footer>
            <div id="footer-nav-bar">
                <aside><h2 class="l-column">Contact Info</h2></aside>
                <ul>
                    <li><a href="#">Socials</a></li>
                    <li><a href="https://github.com">GitHub</a></li>
                </ul>
            </div>
        </footer>
    </body>
    </div>
  );
}

export default Page;
