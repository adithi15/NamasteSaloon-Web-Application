import React, { useState } from "react";
import { Clock, Calendar, User, ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { BLOGS } from "@/src/common/data";

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<import("@/src/common/types").BlogPost | null>(null);

  return (
    <section className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent" id="blog-section">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb back navigation when viewing single post */}
        {selectedBlog ? (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <button
              onClick={() => setSelectedBlog(null)}
              className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-black text-[#1E3E34] hover:text-[#2D5446] cursor-pointer transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" /> Back to all articles
            </button>
 
            {/* Featured Hero Image of Selected Post */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase font-bold text-[#DECBA5] bg-[#1E3E34] border border-[#2D5446] px-2.5 sm:px-3 py-1 rounded-md inline-block">
                  Somatic Science
                </span>
                <h1 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mt-2 sm:mt-3 leading-tight">
                  {selectedBlog.title}
                </h1>
              </div>
            </div>
 
            {/* Selected Post Meta info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6 py-4 border-b border-slate-200 text-slate-500 text-xs font-mono font-semibold">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#2D5446] shrink-0" />
                {selectedBlog.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#2D5446] shrink-0" />
                {selectedBlog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2D5446] shrink-0" />
                {selectedBlog.readTime}
              </span>
            </div>
 
            {/* Content Body */}
            <div className="prose max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-6 font-display font-medium text-left">
              {selectedBlog.content.split("\n\n").map((para, idx) => (
                <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:font-bold first-letter:text-[#1E3E34]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-12">
            
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#2D5446] shrink-0" />
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#1E3E34] font-black">THE RESTORATION LOG</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
                Somatic Wellness Blog
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
              <p className="text-slate-600 text-sm md:text-base font-semibold font-display px-1">
                Dive deep into clinical analysis, metabolic recovery mechanisms, and physiological wellness theories curated by our therapists.
              </p>
            </div>
 
            {/* Grid listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {BLOGS.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => setSelectedBlog(blog)}
                  className="card-leaf-bg border border-[#DECBA5]/30 hover:border-[#DECBA5]/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-[#022A24]/25 hover:scale-[1.01] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#DECBA5] border border-[#DECBA5]/40 px-2.5 sm:px-3 py-1 rounded text-[9px] uppercase tracking-wider font-extrabold text-[#1E3E34]">
                      Scientific Insights
                    </div>
                  </div>
 
                  <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                    <div className="text-left">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#FAF8F5]/55 text-[10px] font-mono font-bold mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#DECBA5] shrink-0" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#DECBA5] shrink-0" />
                          {blog.readTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-[#FAF8F5] text-base sm:text-lg font-bold group-hover:text-[#DECBA5] transition-colors mb-2.5 line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-[#FAF8F5]/70 font-display font-medium mb-4 line-clamp-3 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>
 
                    <div className="h-[1px] bg-[#DECBA5]/25 w-full mb-4" />
                    
                    <div className="flex items-center justify-between text-xs font-mono font-bold uppercase text-[#DECBA5] group-hover:text-[#E9E4DB] transition-colors">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" /> Read Article
                      </span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
 
          </div>
        )}

      </div>
    </section>
  );
}
