import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useFetch } from '../hooks';
import { LoadingSpinner, ErrorMessage, Card, Avatar, Button } from '../components/shared';
export function UserProfile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('posts');
  
  const { data: posts, loading: postsLoading, error: postsError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user?.id || 1}`
  );
  
  const { data: todos, loading: todosLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${user?.id || 1}`
  );

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Please sign in to view your profile.</p>
        <Button onClick={() => window.location.href = '/login'}>Sign In</Button>
      </div>
    );
  }

  const completedTodos = todos?.filter(t => t.completed).length || 0;
  const totalTodos = todos?.length || 0;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <Card className="mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar name={user.name} size="xlarge" />
          
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{posts?.length || 0}</p>
                <p className="text-sm text-gray-500">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-success">{completedTodos}</p>
                <p className="text-sm text-gray-500">Tasks Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{totalTodos}</p>
                <p className="text-sm text-gray-500">Total Tasks</p>
              </div>
            </div>
          </div>
          
          <Button variant="outline">Edit Profile</Button>
        </div>
      </Card>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-1">
          {[
            { id: 'posts', label: 'My Posts' },
            { id: 'todos', label: 'Tasks' },
            { id: 'activity', label: 'Activity' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 font-medium rounded-t-lg transition-colors
                ${activeTab === tab.id 
                  ? 'bg-white text-primary border-b-2 border-primary -mb-px' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'posts' && (
          <div>
            {postsLoading ? (
              <LoadingSpinner text="Loading posts..." />
            ) : postsError ? (
              <ErrorMessage message={postsError} />
            ) : posts?.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-gray-600 mb-4">You haven't created any posts yet.</p>
                <Button onClick={() => window.location.href = '/create-post'}>
                  Create Your First Post
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts?.slice(0, 4).map(post => (
                  <PostCard key={post.id} post={{
                    ...post,
                    author: { name: user.name, avatar: null },
                    createdAt: new Date().toISOString(),
                    likes: Math.floor(Math.random() * 50)
                  }} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'todos' && (
          <Card>
            {todosLoading ? (
              <LoadingSpinner text="Loading tasks..." />
            ) : (
              <div className="space-y-3">
                {todos?.map(todo => (
                  <div 
                    key={todo.id}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      todo.completed ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      readOnly
                      className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {todo.title}
                    </span>
                    {todo.completed && (
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {activeTab === 'activity' && (
          <Card className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600">Activity feed coming soon!</p>
          </Card>
        )}
      </div>
    </div>
  );
}

export default UserProfile;