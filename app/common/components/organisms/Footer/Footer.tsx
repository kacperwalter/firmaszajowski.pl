import BrandLogo from "@/app/common/components/atoms/BrandLogo/BrandLogo"
import ContactInfo from "@/app/common/components/molecules/ContactInfo/ContactInfo"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import { navigationItems } from "@/app/data/navigationItems"
import { dropdownItems } from "@/app/data/dropdownItems"
import "./Footer.scss"

const Footer = () => {
  return (
    <section className="footer">
      <Wrapper isWide>
        <div className="footer__contact">
          <BrandLogo />
          <p>Firma Szajowski <br />ul. Słoneczna 23K, 64-800 Chodzież</p>
          <p>© 2024 Wszystkie prawa zastrzeżone</p>
        </div>

        <ul className="footer__navigation">
          {navigationItems.map((item, index) => (
            <li className="footer__navigation-column" key={index}>
              {item.isDropdown ? (
                <>
                  <a className="footer__navigation-heading" href={item.path}>{item.label}</a>
                  <ul className="footer__navigation-list">
                    {dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <a href={dropdownItem.path}>{dropdownItem.description}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a className="footer__navigation-heading" href={item.path}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>

        <ContactInfo
          phone="123 456 789"
          email="test@test.pl"
        />
      </Wrapper>
    </section>
  )
}

export default Footer