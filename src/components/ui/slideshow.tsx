"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface Media {
  type: "image" | "video"
  src: string
  alt?: string
}

interface SlideshowProps {
  media: Media[]
  className?: string
}

export function Slideshow({ media, className = "" }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!media || media.length === 0) return null

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  const currentMedia = media[currentIndex]

  return (
    <div className={`relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden ${className}`}>
      {/* Media Display */}
      <div className="relative w-full h-full flex items-center justify-center">
        {currentMedia.type === "image" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={currentMedia.src}
            alt={currentMedia.alt || "Project media"}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="relative w-full h-full">
            <video
              src={currentMedia.src}
              controls
              className="w-full h-full object-contain"
              preload="metadata"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {media.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {media.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {media.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-background/50 hover:bg-background/70"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}

      {/* Media Counter */}
      {media.length > 1 && (
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-md px-3 py-1 text-sm">
          {currentIndex + 1} / {media.length}
        </div>
      )}

      {/* Video Play Indicator for Thumbnails */}
      {currentMedia.type === "video" && (
        <div className="absolute top-4 left-4 bg-primary/80 rounded-full p-2">
          <Play className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  )
}