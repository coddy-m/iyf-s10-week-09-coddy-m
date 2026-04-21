import { Link } from 'react-router-dom';
import { Button } from '../components/shared';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <span className="text-4xl font-bold text-gray-400">404</span>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex gap-4">
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
        <Link to="/posts">
          <Button variant="secondary">Browse Posts</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;