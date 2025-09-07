"use client";
import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Calendar, User, Plus, X, Send, Mail, CheckCircle } from 'lucide-react';

const blogs = [
  {
    title: "🌤️ Bootstrap vs Tailwind CSS : Real Project Experience as a Student Developer",
    excerpt: "Real-world comparison of Bootstrap and Tailwind CSS from a student developer's perspective, exploring pros, cons, and practical applications.",
    date: "July 22, 2025",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*PCokWlV6Oda4VAYPNQsHeQ.jpeg",
    link: "https://medium.com/@khubaibxkhan/%EF%B8%8F-bootstrap-vs-tailwind-css-real-project-experience-as-a-student-developer-b650b3c5dc47",
    author: {
      name: "Khubaib Ahmad Khan",
      avatar: "/members/me.jpg",
      platform: "Medium"
    }
  },
  {
    title: "SSH Remote Port Forwarding (with Reverse Shell example)",
    excerpt: "Deep dive into SSH remote port forwarding techniques with practical reverse shell examples for network security professionals.",
    date: "July 11, 2025",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*6f-TzrUCDb8AZPvlKneHeA.png",
    link: "https://medium.com/@mfarazkhan2002/ssh-remote-port-forwarding-with-reverse-shell-example-47583783ccdf",
    author: {
      name: "Faraz Khan",
      avatar: "/members/faraz.jpg",
      platform: "Medium"
    }
  },
  {
    title: "Software Development Best Practices",
    excerpt: "Software development is a dynamic field that requires a deep understanding of technology and user needs. Explore best practices and methodologies.",
    date: "August 31, 2024",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog3.23190b6c716c35396daf.jpeg",
    link: "https://khaliquehussain.hashnode.dev/software-development",
    author: {
      name: "Khalique Hussain",
      avatar: "data:image/png;base64,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",
      platform: "Hashnode"
    }
  },
  {
    title: "Understanding DevOps: The Future of IT",
    excerpt: "In the ever-evolving IT landscape, DevOps is rapidly gaining traction. Explore what DevOps means and its key aspects for modern development.",
    date: "August 31, 2024",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog4.7b6b861b97e8e5622841.avif",
    link: "https://hashnode.com/post/cm0i7yhxm000609jqcd6ee2ch",
    author: {
      name: "Hamza",
      avatar: "/members/hamza_rizvi.jpg",
      platform: "Hashnode"
    }
  },
  {
    title: "GitHub Student Developer Pack Guide",
    excerpt: "GitHub offers a special programme for students. Learn why GitHub is essential for students and how to apply for the Student Developer Pack.",
    date: "April 6, 2024",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog6.ce5d98eb0d7569c671fd.png",
    link: "https://tauqeerahmad.hashnode.dev/get-your-github-student-developer-pack",
    author: {
      name: "Tauqeer Ahmad",
      avatar: "data:image/png;base64,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",
      platform: "Hashnode"
    }
  },
  {
    title: "Android Development for Beginners",
    excerpt: "Welcome to the exciting world of Android development, where you'll learn to create mobile apps from scratch in a fun and approachable way.",
    date: "March 10, 2024",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog5.4b1facd22f8fba7555f0.webp",
    link: "https://medium.com/@syedaasif009/a-playful-dive-into-android-development-for-beginners-080b0fe33ce2",
    author: {
      name: "Md Aasif",
      avatar: "/md-aasif4.jpg",
      platform: "Medium"
    }
  },
  {
    title: "Navigating Microsoft Azure CLI",
    excerpt: "Welcome to Azure CLI! As cloud computing revolutionizes application development, having Azure CLI in your toolkit is essential for success.",
    date: "January 28, 2024",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/Blog2.3ab1727ef0a455dc59c7.avif",
    link: "https://tauqeerahmad.hashnode.dev/navigating-the-microsoft-azure-cli",
    author: {
      name: "Tauqeer Husaain",
      avatar: "data:image/png;base64,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",
      platform: "Hashnode"
    }
  }
];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    date: '',
    image: '',
    link: '',
    authorName: '',
    authorEmail: '',
    platform: 'Medium'
  });

  const filteredBlogs = useMemo(() => {
    if (!searchTerm) return blogs;
    return blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email service using EmailJS (free alternative)
    const emailData = {
      to_email: 'khubaibxkhan22@gmail.com',
      subject: `🔥 New Blog Submission for Review: ${formData.title}`,
      author_name: formData.authorName,
      author_email: formData.authorEmail,
      blog_title: formData.title,
      blog_excerpt: formData.excerpt,
      blog_platform: formData.platform,
      blog_date: formData.date,
      blog_link: formData.link,
      blog_image: formData.image || 'Not provided',
      submission_time: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      })
    };

    try {
      // For now, we'll use a simple solution - open Gmail compose with all details
      const emailBody = `
Hi Khubaib,

A new blog has been submitted for review on your website:

═══════════════════════════════════════════════════
📝 BLOG SUBMISSION DETAILS
═══════════════════════════════════════════════════

👤 AUTHOR INFORMATION:
Name: ${formData.authorName}
Email: ${formData.authorEmail}

📚 BLOG DETAILS:
Title: ${formData.title}
Platform: ${formData.platform}
Publication Date: ${formData.date}
Blog URL: ${formData.link}
Cover Image: ${formData.image || 'Not provided'}

📄 DESCRIPTION:
${formData.excerpt}

⏰ SUBMISSION TIME:
${new Date().toLocaleString()}

═══════════════════════════════════════════════════
🔍 ACTION REQUIRED
═══════════════════════════════════════════════════

Please review the blog and decide to approve or reject.
You can visit the blog URL to read the full content.

Best regards,
Blog Submission System
      `.trim();

      // Open Gmail compose with pre-filled data
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=khubaibxkhan22@gmail.com&su=${encodeURIComponent(`🔥 New Blog Submission: ${formData.title}`)}&body=${encodeURIComponent(emailBody)}`;
      
      window.open(gmailUrl, '_blank');

      // Show success message
      setIsSubmitting(false);
      setShowSuccessMessage(true);
      setFormData({
        title: '',
        excerpt: '',
        date: '',
        image: '',
        link: '',
        authorName: '',
        authorEmail: '',
        platform: 'Medium'
      });
      setShowSubmissionForm(false);
      
      // Hide success message after 4 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 4000);

    } catch (error) {
      console.error('Error submitting blog:', error);
      setIsSubmitting(false);
      // You can add error handling here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-violet-950 to-gray-950 relative overflow-hidden pt-2">
      {/* bakground effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-lg p-4 flex items-center gap-3 max-w-sm animate-bounce">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
          <div>
            <p className="text-green-300 font-medium">Blog Submitted!</p>
            <p className="text-green-400 text-sm">Gmail opened with your submission details.</p>
          </div>
        </div>
      )}

      <section className="relative pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
              Our Blogs
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Discover insights, tutorials, and experiences from our talented community of developers
            </p>
            
            {/* Search Bar and Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6 sm:mb-8">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search blogs, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-md border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                />
              </div>
              <button
                onClick={() => setShowSubmissionForm(true)}
                className="group relative px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:from-violet-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 flex items-center gap-2 min-w-fit"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Submit Blog</span>
                <span className="sm:hidden">Submit</span>
              </button>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                {/* Enhanced Glowing Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-violet-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-violet-500/5 group-hover:to-pink-500/5 transition-all duration-700 rounded-xl sm:rounded-2xl"></div>
                
                <div className="relative">
                  {/* Blog Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-40 sm:h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                    
                    {/* Platform Badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                      {blog.author.platform}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    {/* Author Info */}
                    <div className="flex items-center space-x-3 pb-2 sm:pb-3 border-b border-violet-500/20">
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-violet-500/30 group-hover:ring-violet-400/50 transition-all duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-white truncate flex items-center">
                          <User className="w-3 h-3 mr-1 text-violet-400" />
                          {blog.author.name}
                        </p>
                        <p className="text-xs text-gray-400 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {blog.date}
                        </p>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <div className="space-y-2 sm:space-y-3">
                      <h2 className="text-sm sm:text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-300 line-clamp-2 leading-tight">
                        {blog.title}
                      </h2>
                      <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="pt-2">
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-violet-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-violet-500/25 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative">Read More</span>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 relative" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2">No blogs found</h3>
              <p className="text-gray-400 text-sm sm:text-base">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Blog Submission Modal */}
      {showSubmissionForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl border border-violet-500/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Submit Your Blog
                </h2>
                <button
                  onClick={() => setShowSubmissionForm(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.authorName}
                      onChange={(e) => setFormData({...formData, authorName: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder="Khubaib Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.authorEmail}
                      onChange={(e) => setFormData({...formData, authorEmail: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder="khubxkhan@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Blog Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your amazing blog title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Short Description *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder="Brief description of your blog (max 200 characters)"
                    maxLength={200}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Platform *</label>
                    <select
                      required
                      value={formData.platform}
                      onChange={(e) => setFormData({...formData, platform: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:text-violet-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="Medium">Medium</option>
                      <option value="Hashnode">Hashnode</option>
                      <option value="Dev.to">Dev.to</option>
                      <option value="Personal Blog">Personal Blog</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Publish Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Blog URL *</label>
                  <input
                    type="url"
                    required
                    value={formData.link}
                    onChange={(e) => setFormData({...formData, link: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder="https://medium.com/@you/your-blog-post"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Cover Image URL</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder="https://example.com/image.jpg (optional)"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSubmissionForm(false)}
                    className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 group relative px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:from-violet-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Opening Gmail...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Submit via Gmail</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-4 p-3 sm:p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-xs sm:text-sm text-blue-300 flex items-start gap-2">
                  <Mail className="text-blue-400 mt-0.5 w-4 h-4" />
                  This will open Gmail in a new tab with all your submission details pre-filled. Just click send!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}