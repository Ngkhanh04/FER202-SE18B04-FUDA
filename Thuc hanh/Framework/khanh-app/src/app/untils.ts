import { queryDataFromDB } from './api'
import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from 'react'
 
export async function getUserData() {
  const data = await queryDataFromDB()
  experimental_taintObjectReference(
    'Do not pass the whole user object to the client',
    data
  )
  experimental_taintUniqueValue(
    "Do not pass the user's address to the client",
    data,
    data.address
  )
  return data
}