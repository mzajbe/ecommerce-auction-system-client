import  { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  User, 
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  BookmarkPlus,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

const BlogDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(124);

  const blogData = {
    title: "Top 10 Classic Cars That Are Worth Investing In 2025",
    author: "James Mitchell",
    authorRole: "Classic Car Expert",
    authorImage: "https://media.istockphoto.com/id/1478316046/photo/portrait-of-high-school-teacher-at-school-library.jpg?s=612x612&w=0&k=20&c=sSU4PQgVZXW6jiddn8YcB3s2F_Vge5RekkWBlMiUKuU=",
    date: "January 8, 2025",
    readTime: "5 min read",
    category: "Investment",
    mainImage: "/src/assets/blogs/4.jpg",
    content: `
      The classic car market has seen significant changes in recent years, with certain models experiencing unprecedented growth in value. This comprehensive guide will help you navigate the classic car investment landscape of 2025.

      First on our list is the iconic 1967 Ford Mustang Fastback. This American classic has consistently appreciated in value over the past decade, with well-maintained examples now fetching premium prices at auction. The combination of timeless design and historical significance makes it a solid investment choice.

      The Mercedes-Benz 300SL Gullwing from the 1950s represents the pinnacle of German engineering from its era. While the initial investment is substantial, these vehicles have shown consistent value appreciation, particularly for original, well-documented examples.
    `,
    tags: ["Classic Cars", "Investment", "Automotive", "Collector Cars", "Market Trends"],
    relatedPosts: [
      {
        id: 2,
        title: "The Rise of Electric Classic Car Conversions",
        image: "https://images.squarespace-cdn.com/content/v1/6151d38ea56f9d31cf76ec07/cf57f534-f6d7-441d-82a5-06fa93906954/Most+exciting+electric+cars+coming+in+2024",
        date: "Jan 5, 2025"
      },
      {
        id: 3,
        title: "How to Spot a Hidden Gem at Car Auctions",
        image: "https://www.autoloansolutions.ca/wp-content/uploads/2015/05/british-car-auctions.jpeg",
        date: "Jan 3, 2025"
      }
    ]
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src={blogData.mainImage}
          alt={blogData.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-medium">
                {blogData.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                {blogData.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-300">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {blogData.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {blogData.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {blogData.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          {/* Social Share Sidebar */}
          <motion.div 
            className="md:col-span-1 flex md:flex-col gap-4 justify-center md:sticky md:top-8 h-fit"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button onClick={handleLike} className={`p-3 rounded-full border ${isLiked ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 text-gray-500'} hover:bg-gray-50 transition-colors`}>
              <ThumbsUp className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <BookmarkPlus className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Article Content */}
          <motion.article 
            className="md:col-span-6 prose prose-lg max-w-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="whitespace-pre-line">
              {blogData.content}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {blogData.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Box */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <img 
                  src={blogData.authorImage} 
                  alt={blogData.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-xl">{blogData.author}</h3>
                  <p className="text-gray-600">{blogData.authorRole}</p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Related Posts */}
        <motion.div 
          className="mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData.relatedPosts.map(post => (
              <a 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">{post.date}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogDetailPage;