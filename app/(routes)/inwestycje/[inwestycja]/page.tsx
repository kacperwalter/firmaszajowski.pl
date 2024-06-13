import { getInvestment } from "@/sanity/sanity-utils"

type Props = {
  params: { inwestycja: string }
}

const Inwestycja = async ({ params }: Props) => {
  const slug = params.inwestycja
  const investment = await getInvestment(slug)

  return (
    <div>{investment.name}</div>
  )
}

export default Inwestycja