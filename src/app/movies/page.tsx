"use client";

import "@magiclabs/ui/dist/cjs/index.css";
import BaseLayout from "@/components/base-layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { favoriteMovies } from "@/lib/data";
import { Star } from "lucide-react";
import { Movie } from "@/lib/types";

const languages = ["English", "Telugu", "Tamil", "Hindi", "Kannada"] as const;

function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
        <Image
          src={movie.posterUrl}
          alt={`${movie.title} poster`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
        />
        {/* Rating badge
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-medium text-white">{movie.rating.toFixed(1)}</span>
        </div> */}
      </div>

      {/* Info */}
      <div className="space-y-0.5">
        <h3 className="text-xs font-medium text-foreground leading-tight line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span>{movie.year}</span>
          <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground/50" />
          <span className="truncate">{movie.genre}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MoviesPage() {
  const moviesByLanguage = languages.map((lang) => ({
    language: lang,
    movies: favoriteMovies.filter((m) => m.language === lang),
  })).filter((group) => group.movies.length > 0);

  return (
    <BaseLayout title="Films">
      <main className="flex flex-col items-center bg-background px-4 sm:px-0 min-h-screen">
        <div className="w-full max-w-3xl py-6 space-y-8">
          {/* Quote */}
          <blockquote className="text-sm italic text-muted-foreground border-l-2 border-muted-foreground/30 pl-4">
            <p>&ldquo;Film is not the art of scholars, but of illiterates. It reaches the soul directly.&rdquo;</p>
            <footer className="mt-1 text-xs not-italic">— Werner Herzog</footer>
          </blockquote>

          {moviesByLanguage.map((group) => (
            <section key={group.language}>
              <h2 className="text-sm font-medium text-muted-foreground mb-3">
                {group.language}
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {group.movies.map((movie, index) => (
                  <MovieCard key={movie.title} movie={movie} index={index} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </BaseLayout>
  );
}
