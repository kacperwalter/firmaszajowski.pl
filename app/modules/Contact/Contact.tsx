// @ts-nocheck
'use client'

import { useState, useEffect } from "react"
import SwitchableMenu from "@/app/common/components/organisms/SwitchableMenu/SwitchableMenu"
import { getContactData } from "@/sanity/sanity-utils"

const Contact = () => {
  const [switchableMenuData, setSwitchableMenuData] = useState(null)

  useEffect(() => {
    const fetchSwitchableMenuData = async () => {
      try {
        const data = await getContactData()
        setSwitchableMenuData(data)
      } catch (error) {
        console.error("Failed to fetch switchable menu data:", error)
      }
    }

    fetchSwitchableMenuData()
  }, [])

  return (
    <main>
      {switchableMenuData && (
        <SwitchableMenu content={switchableMenuData} />
      )}
    </main>
  )
}

export default Contact