import { useEffect, useState } from 'react'
import { getDBCars } from '../apis/getDBCars'

export default function DBCars() {
  const [cars, setCars] = useState([])
  const [carsLoading, setCarsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCarData = async () => {
      const data = await getDBCars()
      setDBCars(data)
    }

    fetchCarData()
  }, [])
}
