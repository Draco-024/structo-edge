import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, User, CalendarDays } from "lucide-react";
import { useState } from 'react';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const blogPosts = [
    {
      id: '001',
      title: 'Advances in Concrete Mix Design for Sustainable Structures',
      excerpt: 'Explore the latest innovations in concrete mix design that reduce environmental impact while maintaining structural integrity.',
      author: 'Er. Vishal More',
      category: 'Materials',
      date: 'October 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1545328805-821390a9c406?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '002',
      title: 'Structural Analysis Techniques for High-Rise Buildings',
      excerpt: 'A comprehensive overview of modern structural analysis methods used in designing resilient skyscrapers.',
      author: 'Dr. Rajesh Sharma',
      category: 'Analysis',
      date: 'September 28, 2023',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '003',
      title: 'Seismic Retrofitting: Lessons from Recent Earthquakes',
      excerpt: 'What recent seismic events have taught us about the effectiveness of various retrofitting strategies.',
      author: 'Prof. Sunil Jadhav',
      category: 'Seismic',
      date: 'August 10, 2023',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '004',
      title: 'Bridge Engineering: Innovations in Long-Span Designs',
      excerpt: 'Recent advancements in materials and analysis techniques that are pushing the boundaries of long-span bridge design.',
      author: 'Er. Anand Patil',
      category: 'Bridges',
      date: 'July 22, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1546500417-1465443272e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '005',
      title: 'Digital Twins in Structural Engineering Practice',
      excerpt: 'How digital twin technology is transforming monitoring, maintenance, and lifecycle management of critical infrastructure.',
      author: 'Dr. Kavita Mehta',
      category: 'Technology',
      date: 'June 15, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '006',
      title: 'Climate Adaptation in Structural Design Codes',
      excerpt: 'An analysis of how design codes are evolving to address climate change impacts on structural performance and safety.',
      author: 'Er. Vishal More',
      category: 'Codes & Standards',
      date: 'May 30, 2023',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '007',
      title: 'Foundation Design Considerations for Black Cotton Soil',
      excerpt: 'Exploring effective foundation solutions for problematic expansive soils commonly found across central India.',
      author: 'Er. Vishal More',
      category: 'Geotechnical',
      date: 'April 12, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '008',
      title: 'Implementing IS 456:2000 Standards in Modern Construction',
      excerpt: 'A practical guide to applying Indian Standard code provisions for reinforced concrete design in contemporary projects.',
      author: 'Prof. Amit Desai',
      category: 'Codes & Standards',
      date: 'March 5, 2023',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '009',
      title: 'Cost-Effective Design Practices for Rural Housing',
      excerpt: 'Addressing the challenges of providing affordable yet resilient housing solutions in rural India.',
      author: 'Dr. Priya Patel',
      category: 'Housing',
      date: 'February 18, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '010',
      title: 'Traditional vs Modern Construction Techniques in India',
      excerpt: 'Comparing the durability, cost, and environmental impact of traditional building methods with modern approaches.',
      author: 'Er. Vishal More',
      category: 'Construction',
      date: 'January 24, 2023',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '011',
      title: 'Designing for Monsoons: Drainage Systems for Buildings',
      excerpt: 'Best practices for integrating effective water management systems in buildings across high-rainfall regions of India.',
      author: 'Er. Rahul Kumar',
      category: 'Water Management',
      date: 'December 10, 2022',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '012',
      title: 'The Role of Structural Engineers in Heritage Conservation',
      excerpt: "Challenges and solutions in preserving India's architectural heritage while ensuring structural safety.",
      author: 'Dr. Sneha Iyer',
      category: 'Conservation',
      date: 'November 5, 2022',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const categories = ['All', 'Materials', 'Analysis', 'Seismic', 'Bridges', 'Technology', 'Codes & Standards', 'Geotechnical', 'Housing', 'Construction', 'Water Management', 'Conservation'];

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 6, blogPosts.length));
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Structural Engineering Blog
          </h1>
          <p className="text-muted-foreground">
            Stay updated with the latest trends, research findings, and best practices in structural engineering.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full mb-8">
          <TabsList className="flex flex-wrap justify-center space-x-2 mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="All" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, visiblePosts).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === category)
                  .slice(0, visiblePosts)
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {visiblePosts < blogPosts.length && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={loadMorePosts}
              className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {post.category}
          </span>
          <span>•</span>
          <span className="inline-flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {post.readTime}
          </span>
        </div>
        <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3 mb-4">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground border-t border-border pt-4 flex justify-between">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          {post.author}
        </div>
        <div className="flex items-center">
          <CalendarDays className="h-4 w-4 mr-1" />
          {post.date}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Blog;
