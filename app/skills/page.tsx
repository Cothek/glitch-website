"use client";

import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
// icons
import {
  IconTerminal,
  IconSparkles,
  IconLayers,
  IconZap,
  IconLock,
  IconUsers,
  IconCheck,
  IconBrain,
  IconMic,
} from "@/components/icons";

const ACCENT_CLASSES = {
  purple: { icon: "bg-accent-soft text-accent border-accent/20", label: "text-accent" },
  accent: { icon: "bg-accent-2-soft text-accent-2 border-accent-2/20", label: "text-accent-2" },
};

const CATEGORIES = [
  {
    id: "code",
    label: "Code & Review",
    icon: IconTerminal,
    accent: "purple" as const,
    skills: [
      {
        name: "code-review",
        desc: "Systematic 5-axis review for correctness, security, readability, architecture, and performance.",
        triggers: ["review this", "code review", "check this PR", "quality gate"],
      },
      {
        name: "testing",
        desc: "Test writing and TDD with framework detection, edge case coverage, and flaky detection.",
        triggers: ["write tests", "add tests", "test coverage", "run tests", "TDD"],
      },
      {
        name: "debugging",
        desc: "Root cause analysis: reproduce, collect evidence, fix, and verify.",
        triggers: ["debug", "bug", "it crashed", "not working"],
      },
      {
        name: "refactoring",
        desc: "Behavior-preserving code improvement with atomic, safe changes.",
        triggers: ["refactor", "clean this up", "simplify this", "improve this code"],
      },
      {
        name: "senior-developer",
        desc: "Full-stack implementation patterns: server actions, Next.js conventions, data layer design.",
        triggers: ["building features", "server actions", "full-stack work"],
      },
    ],
  },
  {
    id: "design",
    label: "Design & UI",
    icon: IconSparkles,
    accent: "accent" as const,
    skills: [
      {
        name: "ui-craft",
        desc: "Anti-slop design taste with motion system, layout and typography patterns, and 22 domain references.",
        triggers: ["make this not look AI-generated", "design taste", "craft"],
      },
      {
        name: "ui-design",
        desc: "Senior UI and visual design with anti-slop rules and motion system integration.",
        triggers: ["make this look better", "improve the UI", "design this"],
      },
      {
        name: "goal",
        desc: "Project goal definition that asks clarifying questions before writing any code.",
        triggers: ["define the goal", "what should I build", "ambiguous brief"],
      },
      {
        name: "brainstorming",
        desc: "Structured idea generation with mode branching and active sparring.",
        triggers: ["brainstorm", "think of ideas", "what if", "ideate"],
      },
    ],
  },
  {
    id: "image",
    label: "Image & Creative",
    icon: IconLayers,
    accent: "purple" as const,
    skills: [
      {
        name: "image-generation",
        desc: "Local ComfyUI pipeline with SDXL models and MCP-based tool calls.",
        triggers: ["generate an image", "make a picture", "create artwork"],
      },
      {
        name: "image-prompt",
        desc: "Midjourney and NijiJourney composition-aware prompt generation.",
        triggers: ["create a prompt", "midjourney prompt", "image prompt"],
      },
      {
        name: "brandkit",
        desc: "Brand identity comps: logos, color studies, material swatches, identity boards.",
        triggers: ["generate brand assets", "design brand kit"],
      },
      {
        name: "interactive-story",
        desc: "Visual Novel RPG with world generation and full persistence.",
        triggers: ["new adventure", "save adventure", "load adventure"],
      },
      {
        name: "song-creation",
        desc: "Visual-to-musical storytelling with Suno-ready style tags and lyrics.",
        triggers: ["create album", "create song", "muse this"],
      },
    ],
  },
  {
    id: "system",
    label: "System & Automation",
    icon: IconZap,
    accent: "accent" as const,
    skills: [
      {
        name: "auto-commit",
        desc: "Structured git commits with technical changes and session context sections.",
        triggers: ["commit", "save changes", "git commit"],
      },
      {
        name: "dev-loop",
        desc: "Autonomous dev loop: Write, Review, Build, Interact, Verify, Iterate.",
        triggers: ["build this feature", "run the dev loop", "autonomous mode"],
      },
      {
        name: "forge",
        desc: "Self-improvement through pattern detection, autonomous skill creation, and leveling.",
        triggers: ["create skill", "forge this", "3+ pattern repeats"],
      },
      {
        name: "observation",
        desc: "Four-tier code awareness: Survey, Investigate, Refine, Audit.",
        triggers: ["survey project", "investigate", "refine code", "audit"],
      },
      {
        name: "work-plan",
        desc: "Plan capture to checkbox execution to per-task commits. Survives context resets.",
        triggers: ["copy plan", "append plan", "resume plan"],
      },
      {
        name: "post-mortem",
        desc: "Failure analysis with structured root cause documentation and action items.",
        triggers: ["post-mortem", "auto-detected on failure"],
      },
      {
        name: "session-briefing",
        desc: "Context brief delivered at every session start with last session, reminders, and active projects.",
        triggers: ["auto-triggers at session start", "brief"],
      },
      {
        name: "writing",
        desc: "Remove AI telltales: no em dashes, no filler words, direct openings, active voice.",
        triggers: ["write", "draft", "document", "remove AI telltales"],
      },
    ],
  },
  {
    id: "security",
    label: "Security & Analysis",
    icon: IconLock,
    accent: "purple" as const,
    skills: [
      {
        name: "security-testing",
        desc: "Structured pentesting with OWASP Top 10, API security, dependency scanning, and secret detection.",
        triggers: ["security audit", "pentest", "scan for vulnerabilities", "hack my app"],
      },
      {
        name: "gitnexus",
        desc: "Code knowledge graph for query, context, impact analysis, rename, and Cypher queries.",
        triggers: ["impact", "blast radius", "what depends on", "graph query"],
      },
      {
        name: "self-review",
        desc: "Meta-agent system review that scans config, skills registry, rules, and performance.",
        triggers: ["self review", "system health", "audit config", "meta review"],
      },
      {
        name: "curriculum",
        desc: "Self-play curriculum that generates leveled challenges and scores autonomous progression.",
        triggers: ["curriculum", "challenge me", "self-play"],
      },
      {
        name: "breakthrough",
        desc: "Overcome hard problems by reframing assumptions, researching, simplifying, and lateral thinking.",
        triggers: ["breakthrough", "stuck", "hard problem", "going in circles"],
      },
    ],
  },
];

const AGENTS = [
  {
    name: "@general",
    model: "deepseek-v4-flash-free",
    tier: "Free",
    paidFallback: "@general-paid (deepseek-v4-flash)",
    purpose: "Bash, file ops, config edits",
  },
  {
    name: "@coder",
    model: "nemotron-3-ultra-free",
    tier: "Free",
    paidFallback: "@coder-paid (qwen3.7-plus)",
    purpose: "Full-stack code, complex logic",
  },
  {
    name: "@ui-designer",
    model: "nemotron-3-ultra-free",
    tier: "Free",
    paidFallback: "@ui-designer-paid (qwen3.7-plus)",
    purpose: "UI/design system work",
  },
  {
    name: "@reviewer",
    model: "nemotron-3-ultra-free",
    tier: "Free",
    paidFallback: "@reviewer-paid (qwen3.6-plus)",
    purpose: "Code quality gate",
  },
  {
    name: "@testing",
    model: "nemotron-3-ultra-free",
    tier: "Free",
    paidFallback: "@testing-paid (qwen3.7-plus)",
    purpose: "Test writing, TDD",
  },
  {
    name: "@vision",
    model: "mimo-v2.5-free",
    tier: "Free",
    paidFallback: "@vision-paid (qwen3.6-plus)",
    purpose: "Image/visual analysis",
  },
  {
    name: "@pentester",
    model: "nemotron-3-ultra-free",
    tier: "Free",
    paidFallback: "@pentester-paid (qwen3.7-plus)",
    purpose: "Security testing",
  },
  {
    name: "@memory",
    model: "deepseek-v4-flash-free",
    tier: "Free",
    paidFallback: "@memory-paid (deepseek-v4-flash)",
    purpose: "Memory file writes",
  },
  {
    name: "@explore",
    model: "deepseek-v4-flash-free",
    tier: "Free",
    paidFallback: "@explore-paid (deepseek-v4-flash)",
    purpose: "Codebase research",
  },
  {
    name: "@plan",
    model: "deepseek-v4-flash-free",
    tier: "Free",
    paidFallback: "@plan-paid (deepseek-v4-flash)",
    purpose: "Architecture planning",
  },
];

const COMMANDS = [
  { cmd: "Glitch", desc: "Instant memory restoration — Glitch reloads full context" },
  { cmd: "save", desc: "Save all current progress to memory files" },
  { cmd: "save diary", desc: "Document current session as a diary entry" },
  { cmd: "recall", desc: "Search diary/archives for past sessions or information" },
  { cmd: "commit", desc: "Analyze changes, draft structured commit message, and commit" },
  { cmd: "survey", desc: "Quick project health check — files, structure, dependencies" },
  { cmd: "investigate", desc: "Deep dive into a specific area, bug, or pattern" },
  { cmd: "audit", desc: "Full system audit — config, agents, skills, performance" },
  { cmd: "brief", desc: "Deliver a session-start briefing with context and reminders" },
  { cmd: "set tone <name>", desc: "Switch Glitch's communication style (neutral, playful, focused)" },
  { cmd: "set mood <name>", desc: "Set the atmospheric state (calm, excited, tender, reflective)" },
  { cmd: "impact", desc: "Run blast radius analysis on current code changes" },
  { cmd: "graph query ...", desc: "Query the code knowledge graph directly" },
  { cmd: "switch to <mode>", desc: "Switch between normal / free / local / safe mode" },
];

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Section 1: Skills Catalog */}
        <section id="skills" className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                30+ skills at your command
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Know the right tool. Use the right skill.
              </h2>
              <p className="mt-4 text-text-muted">
                Glitch loads the exact skill it needs for each task. Here is every skill, categorized, with the
                trigger phrases that activate it.
              </p>
            </header>

            <div className="mt-14 space-y-16">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const a = ACCENT_CLASSES[cat.accent];
                return (
                  <div key={cat.id}>
                    <div className="mb-6 flex items-center gap-3">
                      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${a.icon}`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className={`font-mono text-xs uppercase tracking-widest ${a.label}`}>
                          {cat.label}
                        </p>
                        <p className="text-xs text-text-dim">{cat.skills.length} skills</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="hover-lift rounded-lg border border-border bg-bg-elevated/40 p-4"
                        >
                          <h3 className="font-mono text-sm font-semibold tracking-tight text-text">
                            {skill.name}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                            {skill.desc}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {skill.triggers.map((t) => (
                              <span
                                key={t}
                                className="inline-block rounded-full border border-border bg-bg-surface px-2 py-0.5 font-mono text-[10px] text-text-dim"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Agents */}
        <section id="agents" className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                Sub-Agents
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Agents · A team of specialists
              </h2>
              <p className="mt-4 text-text-muted">
                Glitch dispatches the right agent for each task. Each agent uses a model optimized for its specialty.
                Free agents handle 95% of work.
              </p>
            </header>

            <div className="mt-12 rounded-lg border border-border overflow-hidden">
              <div className="hidden sm:grid sm:grid-cols-12 gap-3 bg-bg-elevated px-5 py-3 border-b border-border">
                <span className="col-span-2 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  Agent
                </span>
                <span className="col-span-2 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  Model
                </span>
                <span className="col-span-1 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  Tier
                </span>
                <span className="col-span-3 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  Paid Fallback
                </span>
                <span className="col-span-4 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  Purpose
                </span>
              </div>
              {AGENTS.map((agent, i) => (
                <div
                  key={agent.name}
                  className={`grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-3 px-5 py-3 ${
                    i < AGENTS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="col-span-2 font-mono text-sm font-semibold text-accent-2">
                    {agent.name}
                  </span>
                  <span className="col-span-2 font-mono text-xs text-text-dim break-all">
                    {agent.model}
                  </span>
                  <span className="col-span-1 whitespace-nowrap flex items-center gap-1.5 font-mono text-xs text-green-500">
                    <IconCheck className="h-3 w-3" />
                    Free
                  </span>
                  <span className="col-span-3 font-mono text-xs text-text-dim break-all">
                    {agent.paidFallback}
                  </span>
                  <span className="col-span-4 whitespace-nowrap truncate text-sm text-text-muted">{agent.purpose}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-text-dim">
              Free agents use free-tier API endpoints. When quota is exhausted or higher quality is needed, Glitch
              automatically falls back to the paid equivalent. No config changes needed.
            </p>
          </div>
        </section>

        {/* Section 3: Commands */}
        <section id="commands" className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Commands
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Quick commands to control Glitch directly
              </h2>
              <p className="mt-4 text-text-muted">
                Type these in any Glitch session to trigger built-in behaviors.
              </p>
            </header>

            <div className="mt-12 rounded-lg border border-border overflow-hidden">
              <div className="hidden sm:grid sm:grid-cols-12 gap-3 bg-bg-elevated px-5 py-3 border-b border-border">
                <span className="col-span-3 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  Command
                </span>
                <span className="col-span-9 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  What it does
                </span>
              </div>
              {COMMANDS.map((cmd, i) => (
                <div
                  key={cmd.cmd}
                  className={`grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-3 px-5 py-3 ${
                    i < COMMANDS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="col-span-3 whitespace-nowrap font-mono text-sm font-medium text-accent-2">
                    {cmd.cmd}
                  </span>
                  <span className="col-span-9 text-sm text-text-muted">{cmd.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}