import { useEffect, useState } from "react"
import { getDBCars } from "../apis/getDBCars"

export default function displayCars() {
  useEffect(() => {
    const fetchCarData = async () => {
      const data = await getDBCars()
      console.log(data)
    }
    fetchCarData()
  }, [])
}