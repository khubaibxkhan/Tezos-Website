import Link from 'next/link';

const blogs = [
  {
    title: "HAMZA",
    excerpt: "In the ever-evolving IT landscape, you’ve likely come across the term “DevOps” — a concept that’s rapidly gaining traction among major tech companies. With its emphasis on streamlining operations and development, DevOps is shaping the future of IT practices. In this blog, I’ll dive into what DevOps means, and the key aspects we’ll explore include:-",
    date: "August 15, 2025",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog4.7b6b861b97e8e5622841.avif",
    link: "https://hashnode.com/post/cm0i7yhxm000609jqcd6ee2ch",
  },
  {
    title: "TAUQEER AHMAD",
    excerpt: "GitHub, the world’s leading platform for version control and collaborative software development, offers a special programme for students under the GitHub Student Developer Pack. This pack provides resources and benefits to help students learn, collaborate, and build their skills. In this blog post, we’ll explore why GitHub is essential for students, the relevance of GitHub Education, and how to apply for the Student Developer Pack.",
    date: "July 22, 2025",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog6.ce5d98eb0d7569c671fd.png",
    link: "https://tauqeerahmad.hashnode.dev/get-your-github-student-developer-pack",
  },
  {
    title: "KHALIQUE HUSSAIN",
    excerpt: "Software development is a dynamic field that requires a deep understanding of technology and user needs. By following best practices, adopting the right methodologies, and staying updated with emerging trends, developers can create high-quality software that meets the needs of users alike. Whether you’re a beginner or an experienced developer, continuous learning and adaptation are key to success in the ever-evolving world of software development.",
    date: "June 10, 2025",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog3.23190b6c716c35396daf.jpeg",
    link: "https://khaliquehussain.hashnode.dev/software-development",
  },
  {
    title: "MD AASIF",
    excerpt: "Welcome to the exciting world of Android development, where you’ll learn to create your own mobile apps from scratch. Whether you’re new to coding or have some experience, this journey is all about making things happen in a fun and approachable way.",
    date: "May 5, 2025",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog5.4b1facd22f8fba7555f0.webp",
    link: "https://medium.com/@syedaasif009/a-playful-dive-into-android-development-for-beginners-080b0fe33ce2",
  },  
  {
    title: "TAUQEER HUSAAIN",
    excerpt: "Welcome to the world of Azure Command-Line Interface (CLI)! As cloud computing continues to revolutionize the way we build, deploy, and manage applications, having a powerful and efficient tool like the Azure CLI in your toolkit is essential.",
    date: "May 5, 2025",
    image: "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/Blog2.3ab1727ef0a455dc59c7.avif",
    link: "https://tauqeerahmad.hashnode.dev/navigating-the-microsoft-azure-cli",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-violet-300 mb-12 tracking-tight">
            My Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="relative group bg-purple-900/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-violet-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-2">{blog.date}</p>
                  <h2 className="text-xl font-semibold text-violet-200 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={blog.link}
                    className="inline-block text-violet-400 font-medium hover:text-violet-200 transition-colors duration-200 border-b-2 border-violet-400 hover:border-violet-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}