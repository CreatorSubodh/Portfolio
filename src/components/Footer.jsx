import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <p className="footer__copy">
          &copy; {year} Subodh Kumar. Built with React.
        </p>
        <p className="footer__credit">
          Designed &amp; developed with ❤️
        </p>
      </div>
    </footer>
  )
}
