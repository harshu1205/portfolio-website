import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sri Harshith Akula. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> using Next.js & shadcn/ui
          </div>
        </div>
      </div>
    </footer>
  )
}