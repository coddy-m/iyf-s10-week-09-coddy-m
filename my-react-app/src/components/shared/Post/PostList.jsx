import { useState, useEffect } from 'react';
import { useFetch } from '../../../hooks';
import { LoadingSpinner, ErrorMessage, Input, Button } from '../../shared';
import PostCard from './PostCard';
import { mockPosts } from "../../../data/mockPosts";  // Import mock data

export function PostList({ limit = 10, searchable = true }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter posts
  useEffect(() => {
    if (!loading) {
      let result = mockPosts;
      
      if (debouncedQuery) {
        result = result.filter(post => 
          post.title.toLowerCase().includes(debouncedQuery) ||
          post.body.toLowerCase().includes(debouncedQuery) ||
          post.author.name.toLowerCase().includes(debouncedQuery)
        );
      }
      
      setFilteredPosts(result.slice(0, limit));
    }
  }, [loading, debouncedQuery, limit]);

  if (loading) return <LoadingSpinner text="Loading posts..." />;

  return (
    <div>
      {searchable && (
        <div className="mb-6">
          <div className="relative max-w-md">
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-500">
            {searchQuery ? 'No posts match your search.' : 'No posts found.'}
          </p>
          {searchQuery && (
            <Button variant="ghost" onClick={() => setSearchQuery('')} className="mt-2">
              Clear search
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;