import BrandLogo from "@/app/common/components/atoms/BrandLogo/BrandLogo"
import ContactInfo from "@/app/common/components/molecules/ContactInfo/ContactInfo"
import "./Footer.scss"

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__contact">
        <BrandLogo />
        <p>Firma Szajowski <br />ul. Słoneczna 23K, 64-800 Chodzież</p>
        <p>© 2024 Wszystkie prawa zastrzeżone</p>
      </div>
      <nav className="footer__navigation"></nav>
      <ContactInfo
        phone="123 456 789"
        email="test@test.pl"
      />
    </section>
  )
}

export default Footer