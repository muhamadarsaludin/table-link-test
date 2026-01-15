type Person = {
  name: string
  age: number
}

const data: Person[] = [
  {
    name: 'Alice',
    age: 30
  },
  {
    name: 'Bob',
    age: 25
  },
  {
    name: 'Charlie',
    age: 35
  },
  {
    name: 'David',
    age: 40
  },
  {
    name: 'Eve',
    age: 28
  },
  {
    name: 'Frank',
    age: 33
  },
  {
    name: 'Grace',
    age: 27
  },
  {
    name: 'Heidi',
    age: 29
  },
  {
    name: 'Ivan',
    age: 31
  },
  {
    name: 'Judy',
    age: 26
  }
]

export function MinAge() {
  const minAge = data.find((person) => person.age === Math.min(...data.map((p) => p.age)))
  return <div>Minimum Age: {minAge?.name}</div>
}

export function MaxAge() {
  const maxAge = data.find((person) => person.age === Math.max(...data.map((p) => p.age)))
  return <div>Maximum Age: {maxAge?.name}</div>
}

export function SortAscAge() {
  const sorted = [...data].sort((a,b) => a.age - b.age)
  return (
    <div>
      Sorted by Age (Ascending): 
      <br /> 
      <ul>
          {sorted.map(p => (
            <li key={p.name}>{p.name} - {p.age}</li>
          ))} 
      </ul>
    </div>
  )
}

export default function SortDescAge() {
  const sorted = [...data].sort((a,b) => b.age - a.age)
  return (
    <div>
      Sorted by Age (Descending): 
      <br />
      <ul>
          {sorted.map(p => (
            <li key={p.name}>{p.name} - {p.age}</li>
          ))}
      </ul>
    </div>
  )
}