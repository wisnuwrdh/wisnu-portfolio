export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-[1200px] mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display text-xl font-bold text-on-surface">
          Wisnu Wardhana
        </div>
        <p className="text-on-surface-variant text-sm order-3 md:order-2 text-center">
          &copy; {new Date().getFullYear()} Wisnu Wardhana. All rights reserved.
        </p>
        <div className="flex gap-6 order-2 md:order-3 flex-wrap justify-center">
          <a
            href="https://github.com/wisnuwrdh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/wisnuwrdh_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm underline underline-offset-4"
          >
            Instagram
          </a>
          <a
            href="https://threads.net/@wisnuwrdh_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm underline underline-offset-4"
          >
            Threads
          </a>
          <a
            href="mailto:mywisnuwardhana@gmail.com"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
