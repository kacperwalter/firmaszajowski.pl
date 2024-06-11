import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Button from "@/app/common/components/atoms/Button/Button"

import "./blogCTA.scss"

const content = {
  heading: "Jeśli interesuję Cię ta nieruchomość <strong>prosimy o kontakt</strong>",
  caption: "<strong>Oferta:</strong><br>- dom o łącznej powierzchni użytkowej 113,8 m2<br>- dom o łącznej powierzchni użytkowej 113,8 m2",
  buttons: [
    {
      text: "Sprawdź standard wykończenia",
      href: "#"
    },
    {
      text: "Zobacz galerię zdjęć",
      href: "#"
    },
  ]
}

const BlogCTA = () => {
  return (
    <section className="blogCTA">
      <Wrapper>
        <div className="blogCTA__container">
          <Heading
            text={content.heading}
            type="h2"
          />

          <div
            className="blogCTA__caption"
            dangerouslySetInnerHTML={{ __html: content.caption }}
          />

          <div className="blogCTA__buttons">
            {content.buttons[0].text && (
              <Button
                as="link"
                text={content.buttons[0].text}
                href={content.buttons[0].href}
              />
            )}

            {content.buttons[1].text && (
              <Button
                as="link"
                text={content.buttons[1].text}
                href={content.buttons[1].href}
                arrow
                arrowDirection="right"
                variant="secondary"
              />
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default BlogCTA