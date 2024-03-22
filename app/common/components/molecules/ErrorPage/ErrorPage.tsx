import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import type { ErrorPageProps } from "./ErrorPage.types"
import Header from "@/app/common/components/molecules/Header/Header"
import "./ErrorPage.scss"

const ErrorPage = ({ type }: ErrorPageProps) => {
  return (
    <section className={`error-page ${type === "404" ? "error-page--404" : "error-page--500" }`}>
      <Wrapper>
        <Header
          heading={type === "404" ? "Strona <strong>nie została znaleziona</strong>" : "Coś poszło nie tak - error 500"}
          caption="Zapraszamy za to na pozostałe podstrony :)"
          headingType="h1"
        />
      </Wrapper>
  </section>
  )
}

export default ErrorPage