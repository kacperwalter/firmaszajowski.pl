import SwitchableMenu from "@/app/common/components/organisms/SwitchableMenu/SwitchableMenu"
import { getContactData } from "@/sanity/sanity-utils"

const Contact = async () => {
  const switchableMenuData = await getContactData()

  return (
    <main>
      <SwitchableMenu content={switchableMenuData}/>
    </main>
  )
}

export default Contact