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
            <li key={index}>
              {item.isDropdown ? (
                <>
                  <a href={item.path}>{item.label}</a>
                  <ul>
                    {dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <a href={dropdownItem.path}>{dropdownItem.description}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.path}>{item.label}</a>
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