import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-DyS1eclK.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function SmoothScroll({ children }) {
  reactExports.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const { location } = useRouterState();
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 1.1, ease: [0.7, 0, 0.2, 1], delay: 0.2 },
      className: "fixed left-0 right-0 top-4 z-50 flex justify-center px-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: `flex items-center gap-1 rounded-full border border-border/60 px-2 py-2 backdrop-blur-xl transition-all duration-500 ${scrolled ? "bg-ivory/70 shadow-[0_8px_30px_-12px_oklch(0.3_0.02_60/0.18)]" : "bg-ivory/40"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "px-4 py-1.5 font-display text-base tracking-tight text-charcoal",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "V" }),
                  "·",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "I" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 h-5 w-px bg-border" }),
            links.map((l) => {
              const active = location.pathname === l.to;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: l.to,
                  className: "relative rounded-full px-4 py-1.5 text-sm text-charcoal/80 transition-colors hover:text-charcoal",
                  children: [
                    active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        layoutId: "nav-pill",
                        transition: { type: "spring", stiffness: 380, damping: 32 },
                        className: "absolute inset-0 rounded-full bg-gold"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative z-10 ${active ? "text-background font-semibold" : ""}`, children: l.label })
                  ]
                },
                l.to
              );
            })
          ]
        }
      )
    }
  );
}
const TRACK_URL = "/audio/ambient.mp3";
function MusicToggle() {
  const [playing, setPlaying] = reactExports.useState(false);
  const [available, setAvailable] = reactExports.useState(true);
  const [mounted, setMounted] = reactExports.useState(false);
  const audioRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const a = new Audio(TRACK_URL);
    a.loop = true;
    a.volume = 0.18;
    a.preload = "auto";
    a.addEventListener("error", () => setAvailable(false));
    audioRef.current = a;
    setMounted(true);
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);
  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      const start = a.volume;
      const steps = 12;
      for (let i = 1; i <= steps; i++) {
        await new Promise((r) => setTimeout(r, 35));
        a.volume = Math.max(0, start * (1 - i / steps));
      }
      a.pause();
      a.volume = 0.18;
      setPlaying(false);
    } else {
      try {
        a.volume = 0;
        await a.play();
        setPlaying(true);
        const target = 0.18;
        const steps = 16;
        for (let i = 1; i <= steps; i++) {
          await new Promise((r) => setTimeout(r, 40));
          if (audioRef.current) audioRef.current.volume = target * i / steps;
        }
      } catch {
        setAvailable(false);
      }
    }
  };
  if (!mounted || !available) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1], delay: 1.4 },
      className: "fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: toggle,
          "aria-label": playing ? "Pause ambient music" : "Play ambient music",
          className: "group relative flex items-center gap-3 overflow-hidden rounded-full border border-charcoal/15 bg-cream/85 py-2.5 pl-3 pr-4 text-[10px] uppercase tracking-[0.28em] text-charcoal/75 shadow-[0_12px_40px_-12px_oklch(0.3_0.02_60/0.25)] backdrop-blur-xl transition-all duration-500 hover:border-charcoal/30 hover:text-charcoal hover:shadow-[0_16px_50px_-12px_oklch(0.3_0.02_60/0.35)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-7 w-7 items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: playing && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { opacity: 0, scale: 0.6 },
                  animate: { opacity: 1, scale: 1, rotate: 360 },
                  exit: { opacity: 0, scale: 0.6 },
                  transition: {
                    rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  },
                  className: "absolute inset-0 rounded-full border border-dashed border-gold/70"
                },
                "ring"
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-3 items-end gap-[2px]", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  className: "w-[2px] rounded-full bg-charcoal",
                  animate: playing ? { height: ["30%", "100%", "55%", "85%", "40%"] } : { height: "30%" },
                  transition: playing ? {
                    duration: 1.1,
                    repeat: Infinity,
                    delay: i * 0.09,
                    ease: "easeInOut"
                  } : { duration: 0.25 },
                  style: { height: "30%" }
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col items-start leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal/40", children: "Ambient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm normal-case tracking-tight text-charcoal", children: playing ? "Playing" : "Press to play" })
            ] })
          ]
        }
      )
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VALOR·IGNIS | An interschool business and leadership fest" },
      {
        name: "description",
        content: "VALOR·IGNIS is an interschool business and leadership fest by the Class 12 students of NHVPS. Cinematic, immersive, and built by students."
      },
      { property: "og:title", content: "VALOR·IGNIS | An interschool business and leadership fest" },
      {
        property: "og:description",
        content: "An interschool business and leadership fest by the Class 12 students of NHVPS."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "VALOR·IGNIS | An interschool business and leadership fest" },
      { name: "description", content: "A premium, modern React website for the VALOR IGNIS school fest, offering a cinematic and immersive motion-design experience." },
      { property: "og:description", content: "A premium, modern React website for the VALOR IGNIS school fest, offering a cinematic and immersive motion-design experience." },
      { name: "twitter:description", content: "A premium, modern React website for the VALOR IGNIS school fest, offering a cinematic and immersive motion-design experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/89e2573f-3dc2-4e1a-8a70-672df65f8086/id-preview-aabc5b62--bf00e521-1883-47d5-bdba-d544f8719d0b.lovable.app-1780069567523.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/89e2573f-3dc2-4e1a-8a70-672df65f8086/id-preview-aabc5b62--bf00e521-1883-47d5-bdba-d544f8719d0b.lovable.app-1780069567523.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Instrument+Serif:ital@0;1&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SmoothScroll, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MusicToggle, {})
  ] }) });
}
const $$splitComponentImporter$3 = () => import("./team-yYMOGZgN.mjs");
const Route$3 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Team | VALOR·IGNIS"
    }, {
      name: "description",
      content: "Meet the team behind VALOR·IGNIS. Event heads and the organizing committee turn ideas into experiences."
    }, {
      property: "og:title",
      content: "Meet the Team | VALOR·IGNIS"
    }, {
      property: "og:description",
      content: "The collective of students behind the VALOR·IGNIS fest."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./events-COvo17jU.mjs");
const Route$2 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events | VALOR·IGNIS"
    }, {
      name: "description",
      content: "Seven curated events at VALOR·IGNIS. Markets, courtrooms, campaigns, films and more."
    }, {
      property: "og:title",
      content: "Events | VALOR·IGNIS"
    }, {
      property: "og:description",
      content: "Seven curated events: Capital Chaos, Shadow Seer, Light of Film, Law & Order and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contact-DLJbUTw3.mjs");
const Route$1 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact | VALOR·IGNIS"
    }, {
      name: "description",
      content: "Get in touch with the VALOR·IGNIS team. Reach our organizing committee and social media manager."
    }, {
      property: "og:title",
      content: "Contact | VALOR·IGNIS"
    }, {
      property: "og:description",
      content: "Reach the VALOR·IGNIS organizing committee and social media team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DCmw9j1h.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "VALOR·IGNIS | An interschool business & leadership fest"
    }, {
      name: "description",
      content: "An interschool business and leadership fest by the Class 12 students of NHVPS. Where strategy meets creativity."
    }, {
      property: "og:title",
      content: "VALOR·IGNIS"
    }, {
      property: "og:description",
      content: "An interschool business and leadership fest by the Class 12 students of NHVPS."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TeamRoute = Route$3.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$4
});
const EventsRoute = Route$2.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$4
});
const ContactRoute = Route$1.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  EventsRoute,
  TeamRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
