export function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-border/60 bg-ivory/40">
      <div className="container-editorial py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-display text-5xl tracking-tight md:text-7xl">
              VALOR<span className="text-gold">·</span>IGNIS
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              An interschool business and leadership fest by the Class 12 students of NHVPS.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Find us on</span>
            <div className="flex gap-5 text-charcoal/80">
              <a
                href="https://www.instagram.com/nationalhillview_rrnagar/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <span>© 2026 IGNIS. All rights reserved.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}
