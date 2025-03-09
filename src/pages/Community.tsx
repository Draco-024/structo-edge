
import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare, ThumbsUp, MessageCircle, Send, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Community = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Best practices for designing earthquake-resistant structures?",
      author: "Rajesh Mehta",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "2 days ago",
      replies: 24,
      category: "Structural Design",
      content: "I'm working on a project in a high seismic zone and I'm looking for modern approaches beyond the code requirements. What are some best practices you've implemented in your projects?",
      comments: [
        {
          id: 101,
          author: "Priya Singh",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          date: "1 day ago",
          content: "Base isolation systems have worked really well for my projects in Zone V. They're expensive but worth it for critical structures."
        },
        {
          id: 102,
          author: "Ankit Sharma",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          date: "1 day ago",
          content: "Consider implementing dampers - they've been quite effective in my experience. Also, regular floor plans with evenly distributed mass help significantly."
        }
      ]
    },
    {
      id: 2,
      title: "IS 456:2000 vs International Concrete Design Codes - Key Differences?",
      author: "Neha Patel",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "3 days ago",
      replies: 18,
      category: "Codes & Standards",
      content: "I'm trying to understand the major differences between IS 456:2000 and ACI 318. Has anyone worked with both codes who can highlight the key differences in design approaches?",
      comments: [
        {
          id: 201,
          author: "Suresh Kumar",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          date: "2 days ago",
          content: "The partial safety factors differ significantly. IS 456 uses 1.5 for concrete and 1.15 for steel, while ACI uses strength reduction factors that vary by failure mode."
        }
      ]
    },
    {
      id: 3,
      title: "Tips for STAAD Pro modeling of complex geometries?",
      author: "Vikram Desai",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "1 week ago",
      replies: 32,
      category: "Software & Tools",
      content: "I'm modeling a structure with non-orthogonal geometry in STAAD Pro and facing some challenges. Any tips for managing complex geometries efficiently?",
      comments: [
        {
          id: 301,
          author: "Amit Shah",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          date: "5 days ago",
          content: "Break down the complex geometry into simpler parts and use master-slave joints to connect them. It makes the modeling more manageable."
        }
      ]
    },
    {
      id: 4,
      title: "Cost optimization techniques for RCC structures in Indian context?",
      author: "Deepa Sharma",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "5 days ago",
      replies: 27,
      category: "Cost Analysis",
      content: "With rising material costs, I'm looking for practical strategies to optimize the cost of RCC structures while maintaining structural integrity. Any suggestions from the Indian market perspective?",
      comments: [
        {
          id: 401,
          author: "Ravi Iyer",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          date: "3 days ago",
          content: "Consider using higher grades of concrete with optimized section sizes - it can reduce overall material quantities. Also, flat slabs can save on formwork costs for larger spans."
        }
      ]
    }
  ]);
  
  const [selectedDiscussion, setSelectedDiscussion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newDiscussionTitle, setNewDiscussionTitle] = useState('');
  const [newDiscussionContent, setNewDiscussionContent] = useState('');
  const [newDiscussionCategory, setNewDiscussionCategory] = useState('Structural Design');
  const { toast } = useToast();
  const [showDiscussionDialog, setShowDiscussionDialog] = useState(false);
  
  const categories = [
    "Structural Design",
    "Codes & Standards",
    "Software & Tools",
    "Cost Analysis",
    "Materials",
    "Construction Techniques",
    "Career Advice"
  ];

  const filteredDiscussions = discussions.filter(discussion => 
    discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast({
        title: "Empty comment",
        description: "Please write something before posting.",
        variant: "destructive",
      });
      return;
    }

    if (selectedDiscussion !== null) {
      setDiscussions(discussions.map(discussion => 
        discussion.id === selectedDiscussion
          ? {
              ...discussion,
              comments: [
                ...discussion.comments,
                {
                  id: Math.floor(Math.random() * 1000) + 500,
                  author: "You",
                  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                  date: "Just now",
                  content: newComment
                }
              ],
              replies: discussion.replies + 1
            }
          : discussion
      ));

      setNewComment('');
      toast({
        title: "Comment posted",
        description: "Your comment has been added to the discussion.",
      });
    }
  };

  const handleCreateDiscussion = () => {
    if (!newDiscussionTitle.trim() || !newDiscussionContent.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide both a title and content for your discussion.",
        variant: "destructive",
      });
      return;
    }

    const newDiscussion = {
      id: Math.floor(Math.random() * 1000) + 100,
      title: newDiscussionTitle,
      author: "You",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "Just now",
      replies: 0,
      category: newDiscussionCategory,
      content: newDiscussionContent,
      comments: []
    };

    setDiscussions([newDiscussion, ...discussions]);
    setNewDiscussionTitle('');
    setNewDiscussionContent('');
    setShowDiscussionDialog(false);
    
    toast({
      title: "Discussion created",
      description: "Your discussion has been posted successfully.",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Community Discussions
          </h1>
          <p className="text-muted-foreground">
            Connect with other structural engineers, share ideas, and collaborate on projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search discussions..."
                className="pl-10 pr-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog open={showDiscussionDialog} onOpenChange={setShowDiscussionDialog}>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto">New Discussion</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New Discussion</DialogTitle>
                  <DialogDescription>
                    Share your thoughts or questions with the community.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm text-muted-foreground">Title</label>
                    <Input
                      className="col-span-3"
                      value={newDiscussionTitle}
                      onChange={(e) => setNewDiscussionTitle(e.target.value)}
                      placeholder="Enter a descriptive title"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm text-muted-foreground">Category</label>
                    <select 
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={newDiscussionCategory}
                      onChange={(e) => setNewDiscussionCategory(e.target.value)}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm text-muted-foreground align-top mt-2">Content</label>
                    <Textarea
                      className="col-span-3"
                      value={newDiscussionContent}
                      onChange={(e) => setNewDiscussionContent(e.target.value)}
                      placeholder="Describe your question or topic in detail"
                      rows={5}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleCreateDiscussion}>Post Discussion</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {selectedDiscussion === null ? (
              // List of discussions
              filteredDiscussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="h-10 w-10 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <CardTitle 
                          className="text-lg text-primary hover:text-accent cursor-pointer transition-colors"
                          onClick={() => setSelectedDiscussion(discussion.id)}
                        >
                          {discussion.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <span>{discussion.author}</span>
                          <span className="mx-2">•</span>
                          <span>{discussion.date}</span>
                          <span className="mx-2">•</span>
                          <span>{discussion.replies} replies</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {discussion.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2">{discussion.content}</p>
                  </CardContent>
                  <CardFooter className="pt-1">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground"
                      onClick={() => setSelectedDiscussion(discussion.id)}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      View Discussion
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              // Single discussion view
              <>
                <Button 
                  variant="outline" 
                  className="mb-4"
                  onClick={() => setSelectedDiscussion(null)}
                >
                  Back to Discussions
                </Button>
                
                {discussions.filter(d => d.id === selectedDiscussion).map(discussion => (
                  <div key={discussion.id} className="space-y-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-start">
                          <img
                            src={discussion.avatar}
                            alt={discussion.author}
                            className="h-10 w-10 rounded-full object-cover mr-4"
                          />
                          <div className="flex-1">
                            <CardTitle className="text-xl text-primary">{discussion.title}</CardTitle>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <span>{discussion.author}</span>
                              <span className="mx-2">•</span>
                              <span>{discussion.date}</span>
                              <span className="mx-2">•</span>
                              <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                                {discussion.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground mb-4">{discussion.content}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-1 text-muted-foreground text-sm">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          Like
                        </Button>
                        <span>{discussion.replies} replies</span>
                      </CardFooter>
                    </Card>

                    <h3 className="text-lg font-medium mt-6 mb-3">Comments</h3>
                    
                    <div className="space-y-4">
                      {discussion.comments.map(comment => (
                        <Card key={comment.id}>
                          <CardHeader className="pb-2">
                            <div className="flex items-start">
                              <img
                                src={comment.avatar}
                                alt={comment.author}
                                className="h-8 w-8 rounded-full object-cover mr-3"
                              />
                              <div>
                                <span className="font-medium">{comment.author}</span>
                                <span className="ml-2 text-xs text-muted-foreground">{comment.date}</span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">{comment.content}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-6 flex items-start gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                        alt="Your avatar"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <div className="flex-1 flex gap-2">
                        <Textarea
                          placeholder="Add a comment..."
                          className="flex-1"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                        />
                        <Button 
                          onClick={handleAddComment}
                          size="icon"
                          className="h-full aspect-square"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Community;
