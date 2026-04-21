import { Card } from '../components/shared';

export function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About StoryBridge</h1>
        <p className="text-xl text-gray-600">
          Building connections through shared stories.
        </p>
      </div>

      <div className="space-y-6">
        <Card title="Our Mission">
          <p className="text-gray-700 leading-relaxed">
            StoryBridge is a platform dedicated to fostering meaningful connections through storytelling. 
            We believe that everyone has a story worth sharing, and that by listening to each other, 
            we build stronger, more empathetic communities.
          </p>
        </Card>

        <Card title="Features">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Easy-to-use post creation with rich text support</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Search and discover posts from the community</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Like and engage with content you love</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Responsive design that works on any device</span>
            </li>
          </ul>
        </Card>

        <Card title="Technology">
          <p className="text-gray-700 mb-4">
            StoryBridge is built with modern web technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'React Router', 'Tailwind CSS', 'Vite', 'JSONPlaceholder API'].map(tech => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default About;