import PostList from '../components/shared/Post/PostList';

export function Posts() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Posts</h1>
        <p className="text-gray-600">Browse and discover stories from our community.</p>
      </div>
      <PostList limit={20} searchable={true} />
    </div>
  );
}

export default Posts;