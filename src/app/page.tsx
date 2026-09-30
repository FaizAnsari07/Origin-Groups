import Image from "next/image";

const businesses = [
  {
    number: "01",
    name: "Umrah Booking",
    category: "Pilgrimage Travel",
    href: "https://umrahbooking.co/",
    logo: "/uploads/2020/01/1-300x120.png",
    imageWidth: 300,
    imageHeight: 120,
  },
  {
    number: "02",
    name: "Govakation",
    category: "Travel Experiences",
    href: "https://govakation.com/",
    logo: "/uploads/2020/01/2-300x120.png",
    imageWidth: 300,
    imageHeight: 120,
  },
  {
    number: "03",
    name: "Origin Softwares",
    category: "Software",
    href: "https://originsoftwares.com/",
    logo: "/uploads/2020/01/3-300x120.png",
    imageWidth: 300,
    imageHeight: 120,
  },
  {
    number: "04",
    name: "Origin Tours and Travels",
    category: "Travel and Tours",
    href: "https://www.origintoursandtravels.com/",
    logo: "/uploads/2020/01/4-300x119.png",
    imageWidth: 300,
    imageHeight: 119,
  },
  {
    number: "05",
    name: "Trip of Life",
    category: "Travel experiences",
    href: "http://tripoflife.net/",
    logo: "/uploads/2020/01/5-300x120.png",
    imageWidth: 300,
    imageHeight: 120,
  },
  {
    number: "06",
    name: "AttendanceWorld",
    category: "Workforce technology",
    href: "http://attendanceworld.com/",
    logo: "/uploads/2020/01/6-300x120.png",
    imageWidth: 300,
    imageHeight: 120,
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Origin Groups home">
          <Image
            className="brand-mark"
            src="/uploads/2020/01/Origin Group.png"
            alt=""
            width={150}
            height={80}
            priority
          />
          {/* <span className="brand-name">
            Origin <strong>Groups</strong>
          </span> */}
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#group">The group</a>
          <a className="nav-cta" href="#businesses">
            Explore businesses <span aria-hidden="true">↘</span>
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A connected portfolio</p>
          <h1 id="hero-title">Origin Groups</h1>
          <p className="hero-lede">
            Independent businesses moving people, ideas and opportunity forward.
          </p>
          <a className="hero-link" href="#businesses">
            Meet our businesses <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-stamp">Travel <span>·</span> Technology <span>·</span> Experiences</div>
          <Image
            className="portfolio-mark"
            src="/uploads/2020/01/All-Logos-2.png"
            alt=""
            width={1080}
            height={601}
            priority
          />
          <span className="visual-index">01 / 06</span>
        </div>
        <div className="hero-footnote"><span>01</span> Businesses shaped around what comes next</div>
      </section>

      <section className="portfolio section-wrap" id="businesses" aria-labelledby="portfolio-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark-eyebrow"><span /> Our businesses</p>
            <h2 id="portfolio-title">Different paths.<br />One shared direction.</h2>
          </div>
          <p className="section-intro">
            From the way we travel to the tools we work with, explore the businesses
            that make up Origin Groups.
          </p>
        </div>

        <div className="business-grid">
          {businesses.map((business) => (
            <article className="business" key={business.number}>
              <div className="business-topline">
                <span className="business-number">{business.number}</span>
                <span className="business-category">{business.category}</span>
              </div>
              <div className="business-logo">
                <Image
                  src={business.logo}
                  alt={`${business.name} logo`}
                  width={business.imageWidth}
                  height={business.imageHeight}
                  sizes="(max-width: 640px) 80vw, (max-width: 1000px) 38vw, 25vw"
                />
              </div>
              <div className="business-bottomline">
                <h3>{business.name}</h3>
                <a href={business.href} target="_blank" rel="noreferrer">
                  Visit site <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="group-note" id="group" aria-labelledby="group-title">
        <div className="group-note-inner">
          <p className="eyebrow"><span /> One group, many ambitions</p>
          <h2 id="group-title">Rooted in possibility.<br />Built to keep moving.</h2>
          <p>
            Origin Groups brings together a diverse portfolio with a shared belief
            in creating useful, memorable experiences.
          </p>
        </div>
        <div className="group-note-mark" aria-hidden="true">OG<span>.</span></div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">Origin Groups<span>.</span></a>
        <p>A connected portfolio across travel, technology and experiences.</p>
        <a href="#businesses">Explore the portfolio <span aria-hidden="true">↑</span></a>
        Developed by<a href="https://originsoftwares.com/" target="_blank" rel="noreferrer">Origin Softwares ©2026</a>
      </footer>
    </main>
  );
}