export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Sri Harshith Akula
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js & TypeScript
        </p>
      </div>
    </footer>
  )
}
