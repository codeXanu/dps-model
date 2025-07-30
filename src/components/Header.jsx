export default function Header() {
    return(
         <header className="navbar application w-nav" role="banner" id="nav" data-doc-height="1">
            <div className="navbar-container w-container">
                <a href="/" className="brand-12 w-nav-brand" aria-label="Digital Product School Home">
                    <img
                    src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/63504a8fdca652750be0394a_Logo-DPS.svg"
                    alt="HOME"
                    className="image-39"
                    loading="lazy"
                    />
                </a>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <a href="/our-program" className="nav-link w-nav-link">PROGRAM</a>
                    <a href="/cases" className="nav-link w-nav-link">CASES</a>
                    <a href="/team" className="nav-link w-nav-link">ABOUT US</a>
                    <a href="/partners" className="nav-link w-nav-link">BECOME A PARTNER</a>
                    <a href="/apply" aria-current="page" className="link-block-5 w-inline-block w--current" aria-label="Apply now!">
                    <img
                        src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/645a53be3475e3cb70d4084d_CTA_Apply_black.svg"
                        alt="Apply now!"
                        className="image-44"
                        loading="lazy"
                    />
                    </a>
                </nav>
            </div>
      </header>
    )
}