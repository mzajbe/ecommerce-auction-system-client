
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Classic Cars That Are Worth Investing In 2025",
      excerpt: "Discover which classic cars are seeing the biggest returns on investment and why collectors are scrambling to get their hands on these timeless beauties.",
      image: "/src/assets/blogs/1.jpg",
      author: "James Mitchell",
      date: "Jan 8, 2025",
      readTime: "5 min read",
      category: "Investment"
    },
    {
      id: 2,
      title: "The Rise of Electric Classic Car Conversions",
      excerpt: "More collectors are converting their classic cars to electric. Learn about the pros, cons, and what this means for the future of classic car collecting.",
      image: "/src/assets/blogs/2.jpg",
      author: "Sarah Wong",
      date: "Jan 5, 2025",
      readTime: "4 min read",
      category: "Trends"
    },
    {
      id: 3,
      title: "How to Spot a Hidden Gem at Car Auctions",
      excerpt: "Expert tips on identifying undervalued cars at auctions. Learn what to look for and how to make smart bidding decisions.",
      image: "/src/assets/blogs/3.jpg",
      author: "Michael Brown",
      date: "Jan 3, 2025",
      readTime: "6 min read",
      category: "Guides"
    },
    {
      id: 4,
      title: "How to Spot a Hidden Gem at Car Auctions",
      excerpt: "Expert tips on identifying undervalued cars at auctions. Learn what to look for and how to make smart bidding decisions.",
      image: "/src/assets/blogs/3.jpg",
      author: "Michael Brown",
      date: "Jan 3, 2025",
      readTime: "6 min read",
      category: "Guides"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest From Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and stories from the world of classic car collecting and auctions.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                  <a
                    href={`/blog-details`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;