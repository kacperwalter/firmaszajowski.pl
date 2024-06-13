import { getInvestment } from "@/sanity/sanity-utils"

import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

type Props = {
  params: { inwestycja: string }
}

const Inwestycja = async ({ params }: Props) => {
  const slug = params.inwestycja
  const investment = await getInvestment(slug)

  return (
    <>
      <BckgRect placement="center" />

      <Navbar />

      <main>
        <div>{investment.name}</div>

      </main>

      <Footer />
    </>
  )
}

export default Inwestycja