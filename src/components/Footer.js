export const Footer = () => {
  const footerLinks = [
    {
      link: "https://github.com/ravikumar0403/vitube",
      icon: "fab fa-github",
    },
    {
      link: "https://twitter.com/ravikumar0403",
      icon: "fab fa-twitter",
    },
    {
      link: "https://www.linkedin.com/in/ravikumar0403/",
      icon: "fab fa-linkedin",
    },
  ];

  return (
    <footer className="footer py-3 text-center">
      <p>
        Made with &lt;/&gt; by{" "}
        <a href="https://ravikumar0403.netlify.app" className="text-primary">
          Ravi Kumar Singh
        </a>
      </p>
      <ul className="list inline justify-center">
        {footerLinks.map((item) => (
          <li key={item.link} className="nav-menu-item">
            <a
              className="fw-bold"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fs-1 ${item.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
