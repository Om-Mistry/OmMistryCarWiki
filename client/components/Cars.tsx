import { useEffect, useState } from 'react'
import { getDBCars } from '../apis/getDBCars'

export default function DBCars() {
  const [cars, setCars] = useState([])
  const [carsLoading, setCarsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const data = await getDBCars()
        setCars(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCarData()
  }, [])

}