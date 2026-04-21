import { Link } from 'react-router-dom';
import { Card } from "../Card";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { useState } from 'react';

export function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || Math.floor(Math.random() * 100));
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <Link to={`/posts/${post.id}`} className="block h-full">
      <Card 
        className="post-card hover-card group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4 mb-4">
          <Avatar 
            name={post.author?.name || 'Anonymous'} 
            src={post.author?.avatar} 
            size="medium"
            className="avatar-glow flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
              {post.author?.name || 'Anonymous'}
            </p>
            <p className="text-sm text-gray-500">
              {post.createdAt 
                ? new Date(post.createdAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })
                : 'Recent'
              }
            </p>
          </div>
        </div>

        <h3 className="post-card-title group-hover:text-blue-600">
          {post.title}
        </h3>
        
        <p className="post-card-body">
          {post.body}
        </p>

        <div className="post-card-meta">
          <button 
            onClick={handleLike}
            className={`like-button ${liked ? 'like-button-liked' : 'like-button-unliked'}`}
          >
            <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className={`transition-all duration-300 ${liked ? 'scale-110' : ''}`}>
              {likeCount}
            </span>
          </button>

          <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 
                         transition-colors flex items-center gap-1">
            Read more 
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Card>
    </Link>
  );
}

export default PostCard;