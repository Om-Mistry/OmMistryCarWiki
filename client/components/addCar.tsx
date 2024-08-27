import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCarDB } from '../apis/getDBCars'
import { carLayout } from '../../models/carLayout'

export default function AddCar() {
  const queryClient = useQueryClient()
}
