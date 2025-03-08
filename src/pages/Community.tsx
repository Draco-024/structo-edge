
import MainLayout from '@/layouts/MainLayout';

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "How to approach responsive design in 2023?",
      author: "Emma Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "2 days ago",
      replies: 24,
      category: "Design"
    },
    {
      id: 2,
      title: "Best practices for state management in React",
      author: "David Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "3 days ago",
      replies: 18,
      category: "Development"
    },
    {
      id: 3,
      title: "How are you implementing dark mode in your projects?",
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "1 week ago",
      replies: 32,
      category: "Design"
    },
    {
      id: 4,
      title: "Thoughts on using Tailwind CSS for large projects?",
      author: "Michael Zhang",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      date: "5 days ago",
      replies: 27,
      category: "Development"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Community Discussions
          </h1>
          <p className="text-muted-foreground">
            Connect with other learners, share ideas, and collaborate on projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
                className="pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              New Discussion
            </button>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="h-10 w-10 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-lg text-primary">
                      {discussion.title}
                    </h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Community;
