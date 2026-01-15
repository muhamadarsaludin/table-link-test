import { useQuery } from '@tanstack/react-query'

const fetchUser = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export const useUser = () => {
  console.log("test");
  
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUser,
  })
} 