
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Clock, User, Calendar, Share2, BookmarkPlus, Facebook, Twitter, Linkedin } from "lucide-react";

const BlogDetail = () => {
  const { blogId } = useParams();
  
  // This would normally be fetched from an API
  // For demo purposes, we'll hardcode one blog post
  const blogPost = {
    id: blogId,
    title: 'Advances in Concrete Mix Design for Sustainable Structures',
    excerpt: 'Explore the latest innovations in concrete mix design that reduce environmental impact while maintaining structural integrity.',
    content: `
      <p class="mb-5">The construction industry is one of the largest contributors to global carbon emissions, with concrete production alone accounting for approximately 8% of worldwide CO2 emissions. This significant environmental footprint has pushed researchers and engineers to develop innovative solutions for more sustainable concrete mixes without compromising structural performance.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">The Challenge of Traditional Concrete</h2>
      
      <p class="mb-5">Portland cement, the binding agent in traditional concrete, requires heating limestone and clay to temperatures exceeding 1400°C, a process that's extremely energy-intensive. For each ton of cement produced, nearly one ton of CO2 is released into the atmosphere.</p>
      
      <p class="mb-5">Furthermore, conventional concrete mixes typically use virgin aggregates extracted from quarries, leading to habitat destruction and landscape disruption. The water consumption for traditional concrete is also substantial, adding to the resource strain in many regions.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Emerging Sustainable Solutions</h2>
      
      <h3 class="text-xl font-medium mb-3 mt-6">1. Supplementary Cementitious Materials (SCMs)</h3>
      
      <p class="mb-5">One of the most promising approaches involves replacing portions of Portland cement with industrial byproducts that would otherwise be discarded:</p>
      
      <ul class="list-disc pl-6 mb-5 space-y-2">
        <li><strong>Fly Ash:</strong> A byproduct of coal combustion in power plants, fly ash can replace up to 30% of cement in conventional mixes while improving workability and reducing permeability.</li>
        <li><strong>Ground Granulated Blast Furnace Slag (GGBS):</strong> A byproduct of iron production, GGBS can replace up to 70% of cement in certain applications, offering excellent durability in aggressive environments.</li>
        <li><strong>Silica Fume:</strong> An ultrafine byproduct from silicon production, silica fume creates denser concrete with higher strength and improved resistance to chemical attack.</li>
      </ul>
      
      <p class="mb-5">Research at the Indian Institute of Technology Delhi has shown that concrete mixes incorporating 40% fly ash can reduce the carbon footprint by up to 35% while maintaining equivalent 28-day strength compared to conventional mixes.</p>
      
      <h3 class="text-xl font-medium mb-3 mt-6">2. Geopolymer Concrete</h3>
      
      <p class="mb-5">Geopolymer concrete represents a potentially game-changing approach by eliminating Portland cement entirely. Instead, it uses industrial waste materials like fly ash or slag activated by alkaline solutions. Recent Indian studies have demonstrated that geopolymer concrete can reduce carbon emissions by up to 80% compared to traditional concrete while offering comparable or superior performance in terms of strength and durability.</p>
      
      <h3 class="text-xl font-medium mb-3 mt-6">3. Carbon-Curing Technologies</h3>
      
      <p class="mb-5">Innovative companies are developing technologies that inject captured CO2 into concrete during the mixing process. The CO2 reacts with calcium ions in the mix to form calcium carbonate, effectively sequestering carbon while simultaneously improving the concrete's compressive strength. This approach offers a double benefit: reducing emissions while enhancing structural performance.</p>
      
      <h3 class="text-xl font-medium mb-3 mt-6">4. Recycled Aggregates</h3>
      
      <p class="mb-5">Construction and demolition waste constitutes a significant portion of landfill material in India. Recycling this waste to produce aggregates for new concrete can significantly reduce environmental impacts. Recent research has shown that replacing up to 30% of natural coarse aggregates with recycled concrete aggregates can yield comparable mechanical properties while diverting waste from landfills.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Implementation in Indian Construction</h2>
      
      <p class="mb-5">The Bureau of Indian Standards has already incorporated provisions for using fly ash and GGBS in its codes, particularly in IS 456:2000. However, wider adoption faces challenges including:</p>
      
      <ul class="list-disc pl-6 mb-5 space-y-2">
        <li>Lack of awareness among practitioners about sustainable options</li>
        <li>Initial resistance to change from traditional practices</li>
        <li>Concerns about long-term performance data</li>
        <li>Supply chain limitations for some materials in certain regions</li>
      </ul>
      
      <p class="mb-5">To address these challenges, organizations like the Indian Green Building Council are promoting educational initiatives and certification programs that incentivize sustainable concrete usage. Several flagship projects, including the new terminal at Bengaluru International Airport and the Delhi Metro expansion, have successfully implemented sustainable concrete mixes, serving as powerful case studies for the industry.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Future Directions</h2>
      
      <p class="mb-5">Ongoing research in India is focusing on locally available alternatives that could further enhance concrete sustainability:</p>
      
      <ul class="list-disc pl-6 mb-5 space-y-2">
        <li><strong>Rice Husk Ash:</strong> Abundant in agricultural regions, rice husk ash has pozzolanic properties that can replace portions of cement.</li>
        <li><strong>Plastic Waste:</strong> Researchers are exploring methods to incorporate non-recyclable plastic waste into concrete mixes as partial aggregate replacement.</li>
        <li><strong>Natural Fiber Reinforcement:</strong> Locally available fibers like jute, coir, and sisal are being studied as sustainable alternatives to synthetic fibers for crack resistance.</li>
      </ul>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Conclusion</h2>
      
      <p class="mb-5">The advances in sustainable concrete mix design represent a critical opportunity for India's construction industry to reduce its environmental footprint while meeting the immense infrastructure demands of a growing nation. By adopting these innovative approaches, structural engineers can play a pivotal role in building a more sustainable future without compromising structural integrity or safety.</p>
      
      <p class="mb-5">As these technologies continue to mature and gain wider acceptance, we can expect to see sustainable concrete becoming the standard rather than the exception in Indian construction practices, aligning with global efforts to combat climate change while supporting development goals.</p>
    `,
    author: 'Er. Vishal More',
    authorRole: 'Senior Structural Engineer',
    authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    category: 'Materials',
    date: 'October 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1545328805-821390a9c406?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Sustainable Construction', 'Concrete Technology', 'Green Building', 'Environmental Engineering', 'Structural Materials']
  };

  const relatedPosts = [
    {
      id: '002',
      title: 'Structural Analysis Techniques for High-Rise Buildings',
      excerpt: 'A comprehensive overview of modern structural analysis methods used in designing resilient skyscrapers.',
      author: 'Dr. Rajesh Sharma',
      category: 'Analysis',
      date: 'September 28, 2023',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: '008',
      title: 'Implementing IS 456:2000 Standards in Modern Construction',
      excerpt: 'A practical guide to applying Indian Standard code provisions for reinforced concrete design in contemporary projects.',
      author: 'Prof. Amit Desai',
      category: 'Codes & Standards',
      date: 'March 5, 2023',
      image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: '006',
      title: 'Climate Adaptation in Structural Design Codes',
      excerpt: 'An analysis of how design codes are evolving to address climate change impacts on structural performance and safety.',
      author: 'Er. Vishal More',
      category: 'Codes & Standards',
      date: 'May 30, 2023',
      image: 'https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  if (!blogPost) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-3xl font-medium mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="pl-0 hover:bg-transparent">
              <Link to="/blog" className="flex items-center text-muted-foreground">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {blogPost.category}
              </span>
              <span>•</span>
              <span className="inline-flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                {blogPost.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {blogPost.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={blogPost.authorImage} alt={blogPost.author} />
                  <AvatarFallback>{blogPost.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{blogPost.author}</div>
                  <div className="text-sm text-muted-foreground">{blogPost.authorRole}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {blogPost.date}
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full object-cover"
              style={{ maxHeight: "500px" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </div>
          
          {/* Blog Content */}
          <div className="prose prose-gray max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
          
          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-muted text-sm rounded-full hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share and Save */}
          <div className="flex flex-wrap justify-between items-center mb-12 py-6 border-y border-border">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="mr-4 font-medium">Share this article:</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center">
              <BookmarkPlus className="mr-2 h-4 w-4" />
              Save for later
            </Button>
          </div>
          
          {/* Author Bio */}
          <Card className="mb-16 p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={blogPost.authorImage} alt={blogPost.author} />
                <AvatarFallback>{blogPost.author[0]}</AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="text-xl font-medium mb-2">{blogPost.author}</h3>
                <p className="text-muted-foreground mb-4">
                  Er. Vishal More is a Senior Structural Engineer with over 10 years of experience in sustainable construction practices. He specializes in innovative concrete technologies and green building design, having worked on numerous sustainable infrastructure projects across India.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">Follow</Button>
                  <Button size="sm">View All Posts</Button>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Related Posts */}
          <div>
            <h2 className="text-2xl font-medium mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                      }}
                    />
                  </div>
                  <div>
                    <span className="text-sm text-primary mb-2 block">{post.category}</span>
                    <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetail;
