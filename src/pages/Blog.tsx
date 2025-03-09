
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, User, CalendarDays } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: '001',
      title: 'Advances in Concrete Mix Design for Sustainable Structures',
      excerpt: 'Explore the latest innovations in concrete mix design that reduce environmental impact while maintaining structural integrity.',
      author: 'Dr. Robert Chen',
      category: 'Materials',
      date: 'October 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1545328805-821390a9c406?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '002',
      title: 'Structural Analysis Techniques for High-Rise Buildings',
      excerpt: 'A comprehensive overview of modern structural analysis methods used in designing resilient skyscrapers.',
      author: 'Emily Wong, PE',
      category: 'Analysis',
      date: 'September 28, 2023',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '003',
      title: 'Seismic Retrofitting: Lessons from Recent Earthquakes',
      excerpt: 'What recent seismic events have taught us about the effectiveness of various retrofitting strategies.',
      author: 'Dr. Michael Barnes',
      category: 'Seismic',
      date: 'August 10, 2023',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '004',
      title: 'Bridge Engineering: Innovations in Long-Span Designs',
      excerpt: 'Recent advancements in materials and analysis techniques that are pushing the boundaries of long-span bridge design.',
      author: 'Jessica Taylor, PhD',
      category: 'Bridges',
      date: 'July 22, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1546500417-1465443272e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '005',
      title: 'Digital Twins in Structural Engineering Practice',
      excerpt: 'How digital twin technology is transforming monitoring, maintenance, and lifecycle management of critical infrastructure.',
      author: 'Robert Lee, PE',
      category: 'Technology',
      date: 'June 15, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '006',
      title: 'Climate Adaptation in Structural Design Codes',
      excerpt: 'An analysis of how design codes are evolving to address climate change impacts on structural performance and safety.',
      author: 'Prof. Sophia Kim',
      category: 'Codes & Standards',
      date: 'May 30, 2023',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const categories = ['All', 'Materials', 'Analysis', 'Seismic', 'Bridges', 'Technology', 'Codes & Standards'];

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
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === category)
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 flex justify-center">
          <Link 
            to="#" 
            className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Load More Articles
          </Link>
        </div>
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
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
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
      <CardContent>
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
