import { useState } from 'react';
import { useUser } from '../hooks/useUser';
import Table from '../components/table/table';

export default function UserPage() {
  const {data, isLoading, isError} = useUser();
  const [search, setSearch] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data.</div>;
  }

  const filteredData = data.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>User Data</h1>
      <Table data={filteredData} />
    </div>
  );
}