"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import {
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  Check,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Menu,
  Network,
  PenTool,
  Search,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { Button } from "@/components/ui/button";

const navItems = ["Services", "Solutions", "Process", "Work", "About"];
const capabilities = [
  "Custom Software",
  "Web & Mobile",
  "AI Integration",
  "Automation",
  "APIs & Backend",
  "SaaS Products",
];

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    copy: "Purpose-built software designed around your workflows, users, and business goals.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    copy: "Modern web platforms and mobile applications built for performance and scale.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    copy: "Integrate AI into existing products, workflows, and business processes.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    copy: "Automate repetitive operations and connect the tools your business already uses.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    copy: "Reliable backend systems, APIs, databases, integrations, and scalable infrastructure.",
  },
  {
    icon: Layers3,
    title: "SaaS Development",
    copy: "Transform product ideas into scalable SaaS platforms and digital products.",
  },
];

const work = [
  {
    type: "DEMO PROJECT · OPERATIONS",
    title: "Operations Intelligence Platform",
    copy: "A unified command center for workflows, decisions, and operational visibility.",
    tags: ["Product Design", "Automation", "Analytics"],
    visual: "ops",
  },
  {
    type: "DEMO PROJECT · AI",
    title: "Knowledge Automation System",
    copy: "An intelligent workspace that turns scattered business knowledge into usable answers.",
    tags: ["AI Integration", "Search", "APIs"],
    visual: "ai",
  },
  {
    type: "DEMO PROJECT · SAAS",
    title: "Connected Service Platform",
    copy: "A scalable product ecosystem for managing customers, services, and business events.",
    tags: ["SaaS", "Mobile", "Backend"],
    visual: "saas",
  },
];

const tech = [
  ["Frontend", ["React", "Next.js", "TypeScript"]],
  ["Backend", ["Node.js", "Python", "PostgreSQL"]],
  ["Mobile", ["React Native", "Flutter", "PWA"]],
  ["AI", ["LLMs", "RAG", "Computer Vision"]],
  ["Cloud", ["AWS", "Vercel", "Docker"]],
  ["Integrations", ["REST", "GraphQL", "Webhooks"]],
] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {copy}
        </p>
      )}
    </Reveal>
  );
}

function CustomCursor() {
  const [point, setPoint] = useState({ x: -40, y: -40 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    const move = (event: MouseEvent) =>
      setPoint({ x: event.clientX, y: event.clientY });
    const over = (event: MouseEvent) =>
      setActive(
        Boolean(
          (event.target as HTMLElement).closest("a,button,[data-cursor]"),
        ),
      );
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full bg-primary mix-blend-screen lg:block"
      animate={{
        x: point.x - (active ? 14 : 6),
        y: point.y - (active ? 14 : 6),
        width: active ? 28 : 12,
        height: active ? 28 : 12,
        opacity: active ? 0.65 : 0.9,
      }}
      transition={{ type: "spring", stiffness: 520, damping: 32, mass: 0.2 }}
    />
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo-white.png"
      alt=""
      aria-hidden="true"
      className={`object-contain ${className}`}
    />
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"}`}
      >
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
          <a
            href="#top"
            aria-label="GCOAM Software home"
            className="flex min-w-0 items-center gap-1 text-base font-bold text-foreground"
          >
            <BrandMark className="size-10 shrink-0" />
            <span>
              GCOAM{" "}
              <span className="font-medium text-muted-foreground">
                Software
              </span>
            </span>
          </a>
          <nav className="hidden items-center justify-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden justify-end lg:flex">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              Let's Talk{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="shrink-0 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background px-6 py-6 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 font-bold">
                <BrandMark className="size-6" />
                GCOAM Software
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>
            <nav className="mt-20 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-5 text-3xl font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <Button
              asChild
              variant="studio"
              size="studio"
              className="mt-10 w-full"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Start a Project <ArrowRight />
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroVisual() {
  const nodes = [
    { label: "SOFTWARE", icon: Braces, pos: "left-[7%] top-[22%]" },
    { label: "AI", icon: Sparkles, pos: "right-[8%] top-[18%]" },
    { label: "AUTOMATION", icon: Workflow, pos: "right-[3%] bottom-[18%]" },
    { label: "APIs", icon: Network, pos: "left-[8%] bottom-[16%]" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="relative mx-auto mt-12 aspect-[1.12/1] w-full max-w-[600px] lg:mt-0"
    >
      <div className="technical-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-[20%] rounded-full bg-primary/10 blur-3xl" />
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 600 530"
        fill="none"
        aria-hidden
      >
        <path
          d="M300 265L100 130M300 265L505 120M300 265L525 415M300 265L85 420"
          stroke="currentColor"
          className="animate-pulse-line text-primary/40"
          strokeWidth="1"
        />
        <circle
          cx="300"
          cy="265"
          r="126"
          stroke="currentColor"
          className="text-border"
        />
        <circle
          cx="300"
          cy="265"
          r="184"
          stroke="currentColor"
          className="text-border"
          strokeDasharray="3 8"
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/35 bg-card shadow-[var(--shadow-accent)] sm:size-40">
        <div className="mb-3 grid size-10 place-items-center rounded-md border border-primary/30 bg-primary/10">
          <Cpu className="size-5 text-primary" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Business
        </span>
        <span className="text-sm font-bold">IMPACT</span>
      </div>
      {nodes.map(({ label, icon: Icon, pos }, i) => (
        <div
          key={label}
          className={`animate-drift absolute ${pos} flex items-center gap-3 rounded-md border border-border bg-card/95 px-3 py-3 shadow-xl sm:px-4`}
          style={{ animationDelay: `${i * -1.1}s` }}
        >
          <div className="grid size-8 place-items-center rounded border border-border bg-secondary">
            <Icon className="size-4 text-primary" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.12em] sm:text-xs">
            {label}
          </span>
        </div>
      ))}
      <span className="absolute left-1/2 top-[8%] -translate-x-1/2 text-[9px] font-semibold tracking-[0.24em] text-muted-foreground">
        IDEA / 01
      </span>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="grain relative min-h-screen overflow-hidden border-b border-border pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_48%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_30%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] items-center gap-4 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="mb-7 text-xs font-semibold tracking-[0.2em] text-primary"
          >
            SOFTWARE • AUTOMATION • AI
          </motion.p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-normal sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            {["We build software", "that moves businesses", "forward."].map(
              (line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.12 + i * 0.09,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              ),
            )}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.65 }}
            className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            GCOAM Software helps businesses turn ideas into reliable software,
            intelligent automation, and AI-powered digital products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.65 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="studio" size="studio">
              <a href="#contact">
                Start a Project <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="studioOutline" size="studio">
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>
        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <SectionHeading
        eyebrow="What we build"
        title="Technology built around your business."
        copy="From the first idea to production systems, we build technology designed for real-world use."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, copy }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <a
              href="#contact"
              data-cursor
              className="group block min-h-72 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-raised sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-11 place-items-center rounded-md border border-border bg-secondary transition-transform group-hover:-translate-y-1">
                  <Icon className="size-5 text-primary" />
                </div>
                <ArrowRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <h3 className="mt-16 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {copy}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Automation() {
  const flow = [
    { title: "DATA", icon: Database },
    { title: "AI", icon: Sparkles },
    { title: "AUTOMATION", icon: Workflow },
    { title: "ACTION", icon: Zap },
  ];
  return (
    <section
      id="solutions"
      className="border-y border-border bg-secondary/45 py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Intelligent systems"
          title="Make your business work smarter."
          copy="We combine software engineering, automation, and AI to create systems that reduce manual work, improve efficiency, and unlock new possibilities."
        />
        <Reveal className="relative mt-16 overflow-hidden rounded-lg border border-border bg-card p-5 sm:p-10 lg:p-14">
          <div className="technical-grid absolute inset-0 opacity-40" />
          <div className="relative grid gap-8 md:grid-cols-4 md:gap-4">
            {flow.map(({ title, icon: Icon }, i) => (
              <div key={title} className="relative">
                <motion.div
                  initial={{ opacity: 0.3, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.16, duration: 0.55 }}
                  className="relative z-10 flex min-h-36 flex-col justify-between rounded-md border border-border bg-secondary p-5"
                >
                  <Icon className="size-5 text-primary" />
                  <div>
                    <span className="text-[10px] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 text-sm font-bold tracking-[0.12em]">
                      {title}
                    </h3>
                  </div>
                </motion.div>
                {i < 3 && (
                  <div className="absolute left-1/2 top-full h-8 w-px bg-gradient-to-b from-primary to-transparent md:left-full md:top-1/2 md:h-px md:w-4 md:bg-gradient-to-r" />
                )}
              </div>
            ))}
          </div>
          <div className="relative mt-8 grid gap-3 text-xs text-muted-foreground sm:grid-cols-3 lg:grid-cols-5">
            {[
              "Processing data...",
              "AI analysis complete",
              "Workflow triggered",
              "Task automated",
              "Action completed",
            ].map((x, i) => (
              <motion.div
                key={x}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 + i * 0.1 }}
                className="flex items-center gap-2 rounded border border-border bg-background/60 px-3 py-3"
              >
                <Check className="size-3 text-primary" />
                {x}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type ProcessStepProps = {
  num: string;
  title: string;
  copy: string;
  icon: ComponentType<{ className?: string }>;
  index: number;
};

function ProcessStep({
  num,
  title,
  copy,
  icon: Icon,
  index,
}: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { margin: "-38% 0px -38% 0px" });

  return (
    <motion.div
      ref={ref}
      data-cursor
      className="group relative grid grid-cols-[5rem_1fr] gap-5 md:block"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className={`relative z-10 grid size-20 place-items-center rounded-full border bg-background transition-all duration-500 md:mb-10 md:size-24 ${active ? "border-primary shadow-[0_0_28px_color-mix(in_oklab,var(--primary)_22%,transparent)]" : "border-border group-hover:border-primary group-hover:shadow-[0_0_28px_color-mix(in_oklab,var(--primary)_22%,transparent)]"}`}
      >
        <div
          className={`grid size-12 place-items-center rounded-full border bg-secondary transition-all duration-500 md:size-14 ${active ? "border-primary/45 bg-primary/10" : "border-border group-hover:border-primary/45 group-hover:bg-primary/10"}`}
        >
          <Icon
            className={`size-5 transition-all duration-500 md:size-6 ${active ? "scale-110 text-primary" : "text-muted-foreground group-hover:scale-110 group-hover:text-primary"}`}
          />
        </div>
      </div>
      <div
        className={`pb-10 transition-opacity duration-500 md:pb-0 ${active ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
      >
        <span className="font-mono text-xs font-semibold text-primary">
          {num}
        </span>
        <h3 className="mt-4 text-lg font-semibold uppercase text-foreground">
          {title}
        </h3>
        <p className="mt-3 max-w-[17rem] text-sm leading-6 text-muted-foreground">
          {copy}
        </p>
      </div>
    </motion.div>
  );
}

function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      copy: "We dive into your business, users, and goals to understand the real problem before proposing a solution.",
      icon: Search,
    },
    {
      num: "02",
      title: "Design",
      copy: "We architect the system, map the user experience, and define the technical approach before writing code.",
      icon: PenTool,
    },
    {
      num: "03",
      title: "Build",
      copy: "We develop in iterative cycles with clean, maintainable code, continuous testing, and regular reviews.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Scale",
      copy: "We deploy, monitor, and refine — ensuring the system grows reliably alongside your business.",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="process"
      className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <SectionHeading eyebrow="How we work" title="From idea to impact." />
      <div className="relative mt-16 md:mt-20">
        <div className="absolute bottom-10 left-10 top-10 w-px bg-border md:bottom-auto md:left-0 md:right-0 md:top-12 md:h-px md:w-auto" />
        <motion.div
          aria-hidden
          className="absolute left-10 top-10 h-[calc(100%_-_5rem)] w-px origin-top bg-primary md:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-25%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-12 hidden h-px origin-left bg-primary md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-25%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative grid gap-2 md:grid-cols-4 md:gap-7">
          {steps.map((step, index) => (
            <ProcessStep key={step.num} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ type }: { type: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary p-5 sm:p-8">
      <div className="technical-grid absolute inset-0 opacity-30" />
      <div className="relative h-full rounded-md border border-border bg-background/90 p-4 transition-transform duration-500 group-hover:scale-[1.015]">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex gap-1.5">
            <i className="size-1.5 rounded-full bg-muted-foreground" />
            <i className="size-1.5 rounded-full bg-muted-foreground" />
            <i className="size-1.5 rounded-full bg-muted-foreground" />
          </div>
          <span className="text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
            System / {type}
          </span>
        </div>
        {type === "ops" ? (
          <div className="mt-5 grid h-[70%] grid-cols-3 gap-3">
            <div className="rounded border border-border bg-card p-3">
              <div className="h-2 w-12 bg-primary/60" />
              <div className="mt-5 space-y-2">
                {[1, 2, 3, 4].map((x) => (
                  <div key={x} className="h-1.5 bg-muted" />
                ))}
              </div>
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-3">
              <div className="rounded border border-border bg-card p-3">
                <div className="flex h-full items-end gap-2">
                  {[35, 70, 48, 82, 58, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/35"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded border border-border bg-card" />
                <div className="rounded border border-border bg-card" />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-5 grid h-[70%] place-items-center">
            <div className="relative grid size-36 place-items-center rounded-full border border-primary/30">
              <div className="absolute inset-4 rounded-full border border-dashed border-brand-blue/50" />
              <Cpu className="size-9 text-primary" />
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="absolute size-2 rounded-full bg-brand-blue"
                  style={{
                    transform: `rotate(${i * 90}deg) translateY(-72px)`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="border-y border-border bg-secondary/45 py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Selected concepts"
          title="Built for real-world problems."
          copy="Illustrative project concepts showing how product thinking, software engineering, automation, and AI come together."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {work.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article
                data-cursor
                className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-line-bright"
              >
                <ProjectVisual type={item.visual} />
                <div className="p-6 sm:p-7">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-primary">
                    {item.type}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.copy}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border px-2.5 py-1 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    View Case Study{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const icons: Record<string, ComponentType<{ className?: string }>> = {
    Frontend: Code2,
    Backend: Database,
    Mobile: Smartphone,
    AI: Bot,
    Cloud,
    Integrations: GitBranch,
  };
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <SectionHeading
        eyebrow="Technology"
        title="The technology behind the work."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {tech.map(([category, chips], i) => {
          const Icon = icons[category] ?? Blocks;
          return (
            <Reveal key={category} delay={i * 0.05} className="h-full">
              <div className="h-full bg-card p-7">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-8 font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  const principles = [
    [
      "01",
      "Think Clearly",
      "Understand the problem before building the solution.",
    ],
    [
      "02",
      "Build Properly",
      "Focus on quality, maintainability, security, and performance.",
    ],
    [
      "03",
      "Improve Continuously",
      "Technology should evolve with the business.",
    ],
  ];
  return (
    <section
      id="about"
      className="border-y border-border bg-secondary/45 py-24 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About GCOAM"
            title="A technology partner, not just a development team."
            copy="GCOAM Software works with businesses to turn ideas, operational challenges, and product opportunities into dependable digital systems. We combine software engineering, automation, and AI to build technology that creates practical business value."
          />
        </div>
        <div className="lg:col-span-5">
          {principles.map(([num, title, copy], i) => (
            <Reveal
              key={num}
              delay={i * 0.08}
              className="border-t border-border py-7"
            >
              <div className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-mono text-xs text-primary">{num}</span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    if (!bookingOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBookingOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  return (
    <>
      <section id="contact" className="relative overflow-hidden py-28 lg:py-44">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary">
            START A CONVERSATION
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Let&apos;s turn your business challenge or product idea into a
            scalable digital solution.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              variant="studio"
              size="studio"
              onClick={() => setBookingOpen(true)}
            >
              Book a Discovery Call <ArrowRight />
            </Button>
            <Button asChild variant="studioOutline" size="studio">
              <a href="mailto:contact@gcoam.in">Send an Email</a>
            </Button>
          </div>
        </Reveal>
      </section>

      {bookingOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center  p-3 backdrop-blur-sm sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setBookingOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="relative h-[min(860px,calc(100vh-1.5rem))] w-full max-w-5xl overflow-hidden rounded-lg shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
          >
            <h2 id="booking-title" className="sr-only">
              Book a discovery call with GCOAM Software
            </h2>
            <button
              type="button"
              aria-label="Close booking dialog"
              onClick={() => setBookingOpen(false)}
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-black/10 text-slate-700 backdrop-blur-sm transition-colors hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="size-5" />
            </button>
            <iframe
              title="Book a discovery call with GCOAM Software"
              src="https://calendly.com/contact-gcoam/30min?hide_gdpr_banner=1&background_color=f8fafc&text_color=101828&primary_color=8472fe"
              className="size-full border-0 bg-slate-50"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto]">
          <div>
            <p className="flex items-center gap-3 font-bold">
              <BrandMark className="size-10" />
              GCOAM Software
            </p>
            <p className="mt-2 text-xs tracking-[0.15em] text-muted-foreground">
              SOFTWARE • AUTOMATION • AI
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["Services", "Solutions", "Work", "About"].map((x) => (
              <a
                key={x}
                href={`#${x.toLowerCase()}`}
                className="hover:text-foreground"
              >
                {x}
              </a>
            ))}
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </div>
          <div className="flex gap-5 text-sm text-muted-foreground">
            <a href="#contact" className="hover:text-foreground">
              LinkedIn
            </a>
            <a href="mailto:hello@gcoam.com" className="hover:text-foreground">
              Email
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 GCOAM Software. All rights reserved.</span>
          <span>Built with clarity and purpose.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[80] h-px origin-left bg-primary"
        style={{ scaleX }}
      />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <div className="overflow-hidden border-b border-border bg-secondary py-5">
          <div className="animate-marquee flex w-max items-center">
            {[...capabilities, ...capabilities].map((x, i) => (
              <div key={`${x}-${i}`} className="flex items-center">
                <span className="px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {x}
                </span>
                <span className="size-1 rounded-full bg-primary/70" />
              </div>
            ))}
          </div>
        </div>
        <Services />
        <Automation />
        <Process />
        <Work />
        <Technology />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
