
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Innovations in Bridge Design: The Future of Infrastructure',
      excerpt: 'Exploring cutting-edge technologies and methodologies that are revolutionizing bridge design and construction.',
      date: 'May 15, 2023',
      author: 'Dr. Sarah Chen',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      readTime: '7 min read'
    },
    {
      id: '2',
      title: 'Sustainable Materials in Structural Engineering',
      excerpt: 'How new eco-friendly building materials are changing the landscape of structural engineering practices.',
      date: 'April 22, 2023',
      author: 'Prof. James Wilson',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      readTime: '5 min read'
    },
    {
      id: '3',
      title: 'Seismic Design: Lessons from Recent Earthquakes',
      excerpt: 'Analyzing structural behaviors during recent major earthquakes and key takeaways for improved seismic design.',
      date: 'March 10, 2023',
      author: 'Dr. Robert Lee',
      category: 'Seismic Engineering',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      readTime: '9 min read'
    },
    {
      id: '4',
      title: 'Building Information Modeling (BIM) for Structural Engineers',
      excerpt: 'How BIM is transforming workflow, collaboration, and project outcomes in structural engineering projects.',
      date: 'February 28, 2023',
      author: 'Emily Parker',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      readTime: '6 min read'
    },
    {
      id: '5',
      title: 'The Role of AI in Structural Analysis and Design',
      excerpt: 'Examining how artificial intelligence and machine learning are being applied to solve complex structural engineering problems.',
      date: 'January 15, 2023',
      author: 'Dr. Michael Zhang',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      readTime: '8 min read'
    },
    {
      id: '6',
      title: 'Career Paths in Structural Engineering: Beyond Traditional Roles',
      excerpt: 'Exploring emerging career opportunities for structural engineers in tech, sustainability, and interdisciplinary fields.',
      date: 'December 5, 2022',
      author: 'Jessica Williams',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Sustainability', 'Seismic Engineering', 'Technology', 'Career'];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Structural Engineering Blog
          </h1>
          <p className="text-muted-foreground">
            Insights, innovations, and best practices from leading structural engineering experts.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-center space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category === 'All' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group">
              <article className="overflow-hidden rounded-lg border border-border transition-all duration-200 hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-muted hover:bg-muted/80 px-6 py-2 rounded-md text-sm font-medium text-foreground transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
