import { Link } from 'react-router-dom';
import { Button, Card } from '../components/shared';
import PostList from '../components/shared/Post/PostList';

export function Home() {
  return (
    <div className="space-y-12 fade-in">
      {/* Hero Section with Gradient */}
      <section className="hero-section">
        <div className="relative z-10">
          <h1 className="hero-title">
            Welcome to <span className="text-yellow-300">StoryBridge</span>
          </h1>
          <p className="hero-subtitle">
            Share your stories, connect with others, and build meaningful communities together. 
            Join thousands of users sharing their experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/posts">
              <Button variant="success" size="large" className="shadow-xl">
                ✨ Explore Posts
              </Button>
            </Link>
            <Link to="/create-post">
              <button className="btn bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 
                               hover:bg-white/30 hover:border-white px-8 py-3 text-lg">
                📝 Create Post
              </button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { number: '10K+', label: 'Users' },
              { number: '50K+', label: 'Posts' },
              { number: '100K+', label: 'Likes' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features with Icons */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: '📝',
            title: 'Share Stories',
            description: 'Publish your thoughts and experiences with the community.',
            color: 'from-blue-500 to-blue-600',
            shadow: 'shadow-blue-500/30'
          },
          {
            icon: '👥',
            title: 'Connect',
            description: 'Engage with others through comments and reactions.',
            color: 'from-green-500 to-green-600',
            shadow: 'shadow-green-500/30'
          },
          {
            icon: '🔍',
            title: 'Discover',
            description: 'Find posts that inspire and inform you.',
            color: 'from-purple-500 to-purple-600',
            shadow: 'shadow-purple-500/30'
          }
        ].map((feature, idx) => (
          <Card key={idx} hover={false} className={`hover-card stagger-${idx + 1} fade-in`}>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} 
                          flex items-center justify-center mb-6 shadow-lg ${feature.shadow} 
                          text-3xl`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Recent Posts</h2>
            <p className="section-subtitle mb-0">Latest stories from our community</p>
          </div>
          <Link to="/posts" className="btn-outline text-sm">
            View all →
          </Link>
        </div>
        <PostList limit={6} searchable={false} />
      </section>
    </div>
  );
}

export default Home;