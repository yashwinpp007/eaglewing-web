import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag, User, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

function renderMarkdown(content: string) {
  // Simple markdown renderer for blog content
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];
  let key = 0;

  const processInline = (text: string) => {
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
    // Links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#C8A84E] hover:underline">$1</a>');
    return text;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table detection
    if (line.includes("|") && line.trim().startsWith("|")) {
      if (!inTable) {
        inTable = true;
        tableHeaders = line.split("|").filter(c => c.trim()).map(c => c.trim());
        // Skip separator line
        if (i + 1 < lines.length && lines[i + 1].includes("---")) {
          i++;
        }
        continue;
      } else {
        tableRows.push(line.split("|").filter(c => c.trim()).map(c => c.trim()));
        continue;
      }
    } else if (inTable) {
      // End of table
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-[#C8A84E]/10 border-b border-white/10">
                {tableHeaders.map((h, idx) => (
                  <th key={idx} className="px-4 py-3 text-left text-[#C8A84E] font-mono text-xs tracking-wider uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-white/5">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-white/60">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      inTable = false;
      tableRows = [];
      tableHeaders = [];
    }

    // Headers
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-display text-2xl sm:text-3xl text-white mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-display text-xl sm:text-2xl text-white mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={key++} className="font-body text-lg font-semibold text-white mt-6 mb-2">
          {line.replace("#### ", "")}
        </h4>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li
          key={key++}
          className="text-white/60 font-body leading-relaxed ml-4 mb-2 list-disc list-outside"
          dangerouslySetInnerHTML={{ __html: processInline(line.replace("- ", "")) }}
        />
      );
    } else if (line.trim() === "") {
      // Skip empty lines
    } else {
      elements.push(
        <p
          key={key++}
          className="text-white/60 font-body text-base sm:text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: processInline(line) }}
        />
      );
    }
  }

  // Close any remaining table
  if (inTable && tableHeaders.length > 0) {
    elements.push(
      <div key={key++} className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-white/10">
          <thead>
            <tr className="bg-[#C8A84E]/10 border-b border-white/10">
              {tableHeaders.map((h, idx) => (
                <th key={idx} className="px-4 py-3 text-left text-[#C8A84E] font-mono text-xs tracking-wider uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, rIdx) => (
              <tr key={rIdx} className="border-b border-white/5">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-3 text-white/60">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", post.metaDescription);
      }
    }
  }, [post]);

  // Get related posts (same category, excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.slug !== post.slug)
      .sort((a, b) => {
        // Prioritize same category
        const aMatch = a.category === post.category ? 1 : 0;
        const bMatch = b.category === post.category ? 1 : 0;
        return bMatch - aMatch;
      })
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-40">
          <h1 className="font-display text-4xl text-white mb-4">Article Not Found</h1>
          <p className="text-white/50 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <button className="btn-gold px-6 py-3 text-sm font-bold tracking-wider uppercase font-body inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Article Header */}
      <article>
        <header className="relative pt-32 sm:pt-44 pb-8 sm:pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-mono text-white/30 mb-8"
            >
              <Link href="/" className="hover:text-[#C8A84E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#C8A84E] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/50 truncate">{post.title}</span>
            </motion.nav>

            {/* Category & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-[#C8A84E]/10 border border-[#C8A84E]/30 text-[#C8A84E] text-xs font-mono tracking-wider uppercase px-3 py-1 mb-6">
                {post.category}
              </span>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/40 font-mono mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-[#C8A84E] transition-colors ml-auto"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 mb-12"
        >
          <div className="relative h-64 sm:h-96 lg:h-[480px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 pb-16"
        >
          <div className="prose-custom">
            {renderMarkdown(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-white/30" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-white/40 bg-white/5 border border-white/10 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-8 p-6 bg-[#111] border border-white/5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#C8A84E]/10 border border-[#C8A84E]/30 flex items-center justify-center shrink-0">
                <span className="font-display text-xl text-[#C8A84E]">BS</span>
              </div>
              <div>
                <h4 className="font-body font-semibold text-white text-lg">{post.author}</h4>
                <p className="text-[#C8A84E] text-sm font-mono mb-2">{post.authorRole}</p>
                <p className="text-white/40 text-sm font-body leading-relaxed">
                  Brian Sylvester is a cleaning industry leader with over 25 years of experience delivering results across commercial, medical, logistics, and high-traffic environments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      <section className="border-t border-white/5 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-10 text-center">
            Related <span className="text-gold-gradient">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`}>
                <div className="group bg-[#111] border border-white/5 hover:border-[#C8A84E]/30 transition-all duration-500 overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2 text-white/30 text-xs font-mono">
                      <span>{new Date(related.date).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}</span>
                      <span>·</span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg text-white group-hover:text-[#C8A84E] transition-colors duration-300 leading-tight">
                      {related.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="border-t border-white/5 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 text-[#C8A84E] font-mono text-sm tracking-wider uppercase hover:gap-3 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
