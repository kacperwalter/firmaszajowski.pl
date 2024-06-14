// @ts-nocheck
import { DropdownItem } from '../types/types' 
import { getInvestments } from "@/sanity/sanity-utils"

export async function getDropdownItems(): Promise<DropdownItem[]> {
  const investments = await getInvestments()

  return investments.map((investment) => ({
    name: investment.name,
    category: investment.category,
    path: investment.path.current
  }))
}

export const dropdownItems: DropdownItem[] = [
    {
      name: 'Osiedle Sadowa',
      category: 'Nowoczesne domy dwulokalowe',
      path: '/osiedle-sadowa'
    },
    {
      name: 'Leśna Polana',
      category: 'Domy wolnostojące',
      path: '/lesna-polana'
    },
    {
      name: 'Osiedle Gajowa',
      category: 'Nowoczesne domy dwulokalowe',
      path: '/osiedle-gajowa'
    },
    {
      name: 'Osiedle Sadowa',
      category: 'Nowoczesne domy dwulokalowe',
      path: '/osiedle-sadowa-2'
    }
  ]
  