import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function userOrder() {

  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    console.log('Agregando...', item)
  }

  return {
    addItem
  }
}