import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks';
import { Input, LoadingSpinner, ErrorMessage, Card, Avatar } from '../shared';

export function SearchUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  const { data: allUsers, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredUsers = allUsers?.filter(user => 
    debouncedQuery 
      ? user.name.toLowerCase().includes(debouncedQuery) || 
        user.email.toLowerCase().includes(debouncedQuery) ||
        user.username.toLowerCase().includes(debouncedQuery)
      : true
  ) || [];

  return (
    <div>
      <div className="mb-6 max-w-md">
        <Input
          type="search"
          placeholder="Search users by name, email, or username..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading && <LoadingSpinner text="Loading users..." />}
      {error && <ErrorMessage message={error} />}
      
      {!loading && !error && (
        <div className="space-y-4">
          {filteredUsers.length === 0 ? (
            <Card className="text-center py-8">
              <p className="text-gray-600">
                {searchQuery ? 'No users match your search.' : 'No users found.'}
              </p>
            </Card>
          ) : (
            filteredUsers.map(user => (
              <Card key={user.id} className="flex items-center gap-4">
                <Avatar name={user.name} size="medium" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-600 truncate">@{user.username}</p>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
                <a 
                  href={`mailto:${user.email}`}
                  className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Email
                </a>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default SearchUsers;