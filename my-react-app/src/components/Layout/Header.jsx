import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Avatar } from '../shared';

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo with gradient */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 
                          flex items-center justify-center shadow-lg shadow-blue-500/30 
                          group-hover:shadow-xl group-hover:shadow-blue-500/40 
                          transition-all duration-300 group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                           bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 
                           transition-all duration-300">
              StoryBridge
            </span>
          </Link>

          {/* Navigation with animated links */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/posts', label: 'Posts' },
              { path: '/about', label: 'About' }
            ].map(({ path, label }) => (
              <NavLink 
                key={path}
                to={path} 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/profile" className="flex items-center gap-3 group/avatar">
                  <Avatar name={user.name} size="medium" className="avatar-glow" />
                  <span className="hidden sm:inline text-sm font-semibold text-gray-700 
                                 group-hover/avatar:text-blue-600 transition-colors">
                    {user.name}
                  </span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-semibold text-red-600 hover:text-white 
                           hover:bg-red-500 rounded-xl transition-all duration-300
                           hover:shadow-lg hover:shadow-red-500/30"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="btn-primary px-6 py-2.5 text-sm"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;