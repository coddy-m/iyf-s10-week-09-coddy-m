import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks';
import { LoadingSpinner, ErrorMessage, Button, Card, Avatar } from '../components/shared';
import { mockPosts, mockUsers} from '../data/mockPosts';
export function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);


  const { 
    data: post, 
    loading, 
    error, 
    refetch 
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`);

  // Fetch user info for author
  const { data: user } = useFetch(
    post?.userId ? `https://jsonplaceholder.typicode.com/users/${post.userId}` : null
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (loading) return <LoadingSpinner text="Loading post..." />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;
  if (!post) return <ErrorMessage message="Post not found" onRetry={() => navigate('/posts')} />;

  return (
    <article className="max-w-3xl mx-auto">
      {/* Navigation */}
      <div className="mb-6">
        <Link 
          to="/posts" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Posts
        </Link>
      </div>

      {/* Post Content */}
      <Card className="mb-6">
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
          <Avatar 
            name={user?.name || `User ${post.userId}`} 
            size="large" 
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="font-medium text-gray-700">
                {user?.name || `User ${post.userId}`}
              </span>
              <span>•</span>
              <span>{new Date().toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="whitespace-pre-wrap">{post.body}</p>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            liked 
              ? 'bg-red-50 text-danger' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {liked ? 'Liked' : 'Like'}
        </button>

        <Button variant="outline" onClick={() => navigate('/posts')}>
          Read More Posts
        </Button>
      </div>
    </article>
  );
}

export default PostDetail;