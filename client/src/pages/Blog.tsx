import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Tag, Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog — Commercial Cleaning Insights | EagleWing Facility Services";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Expert insights on commercial cleaning, facility management, infection control, and sustainable practices from EagleWing Facility Services Melbourne & Sydney.");
    }
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 sm:pt-44 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]" />
        <div className="absolute inset-0 carbon-pattern opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8A84E]" />
              <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
                Industry Insights
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A84E]" />
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight mb-6">
              <span className="text-white">The EagleWing </span>
              <span className="text-gold-gradient">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/50 font-body font-light max-w-2xl mx-auto leading-relaxed">
              Expert insights on commercial cleaning, facility management, and intelligent systems — from the team that's redefining industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141414] border border-white/10 rounded-none px-12 py-4 text-white placeholder:text-white/30 font-body focus:border-[#C8A84E]/50 focus:outline-none transition-colors"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#C8A84E] text-[#0A0A0A] font-bold"
                  : "bg-[#141414] text-white/50 border border-white/10 hover:border-[#C8A84E]/40 hover:text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 font-body text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-[#111] border border-white/5 hover:border-[#C8A84E]/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#C8A84E]/90 text-[#0A0A0A] text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-3 text-white/30 text-xs font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-xl sm:text-2xl text-white group-hover:text-[#C8A84E] transition-colors duration-300 mb-3 leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-white/40 font-body leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read more */}
                      <div className="flex items-center gap-2 text-[#C8A84E] text-sm font-mono tracking-wider uppercase group-hover:gap-3 transition-all duration-300">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-5xl text-white mb-4">
            Ready to Experience the <span className="text-gold-gradient">Difference?</span>
          </h2>
          <p className="text-white/50 font-body text-lg mb-8 max-w-2xl mx-auto">
            Book a free site audit and discover how EagleWing's intelligent cleaning systems can transform your facility.
          </p>
          <Link href="/#contact">
            <button className="btn-gold px-8 py-4 text-sm font-bold tracking-wider uppercase font-body inline-flex items-center gap-2">
              Book a Site Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
