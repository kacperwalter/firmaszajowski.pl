'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import './Dropdown.scss'
import { getInvestments } from "@/sanity/sanity-utils"
import type { DropdownProps } from "./Dropdown.types"
import { Investment } from '@/app/types/Investment'

const Dropdown = ({ isVisible }: DropdownProps) => {
  const [investments, setInvestments] = useState<Investment[]>([])
  // console.log("Dropdown mounted");

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const investments = await getInvestments()
        console.log("Dropdown - fetched investments useEffect", investments)
        setInvestments(investments)
      } catch (error) {
        console.error("Failed to fetch investments:", error)
      }
    }
  
    fetchInvestments()
  }, [])

  return (
    <ul className={`dropdown ${isVisible ? "" : "is-hidden"}`}>
      {investments.map((item, index) => (
        <li key={index} className="dropdown__item">
          <Link href={`/inwestycje/${item.slug}`} className="dropdown__link">
              <h4 className="dropdown__title">{item.name}</h4>
              <p className="dropdown__description">{item.category}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
