"use client";

import type React from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Terminal, TerminalLine, TerminalPrompt } from "@/components/terminal";
import { CopyButton } from "@/components/copy-button";
import {
  IconBrain,
  IconSparkles,
  IconMic,
  IconFolder,
  IconLock,
  IconServer,
  IconCheck,
  IconGithub,
  IconZap,
  IconKey,
  IconRoute,
  IconTerminal,
  IconDownload,
} from "@/components/icons";

const ACCENT_CLASS = {
  purple: "text-accent bg-accent-soft border-accent/20",
  accent: "text-accent-2 bg-accent-2-soft border-accent-2/20",
  accent3: "text-accent-3 bg-accent-3-soft border-accent-3/20",
};

const ACCENT = {
  accent: {
    iconBg: "bg-accent-2-soft text-accent-2 border-accent-2/30",
    badgeBg: "bg-accent-2-soft text-accent-2",
  },
  purple: {
    iconBg: "bg-accent-soft text-accent border-accent/30",
    badgeBg: "bg-accent-soft text-accent",
  },
  amber: {
    iconBg: "bg-amber/10 text-amber border-amber/30",
    badgeBg: "bg-amber/10 text-amber",
  },
  accent3: {
    iconBg: "bg-accent-3-soft text-accent-3 border-accent-3/30",
    badgeBg: "bg-accent-3-soft text-accent-3",
  },
};

const WHY_FEATURES = [
  {
    icon: IconBrain,
    title: "Memory that persists",
    body: "Glitch remembers conversations, decisions, and projects across sessions. Start a task today, pick it up tomorrow with full context.",
    accent: "purple" as const,
  },
  {
    icon: IconSparkles,
    title: "Skills + agents that do the work",
    body: "30+ built-in skills — code review, testing, design, debugging. Glitch routes each task to the right skill and dispatches sub-agents in parallel.",
    accent: "accent" as const,
  },
  {
    icon: IconMic,
    title: "Voice or text",
    body: "Push-to-talk with offline voice-to-text, or type. Glitch adapts to how you work best.",
    accent: "accent3" as const,
  },
];

const ARCH_LAYERS = [
  {
    icon: IconFolder,
    title: "Engine",
    text: "Core identity, 30+ skills, prompt rules, plugin system. Open source.",
    accent: "purple" as const,
  },
  {
    icon: IconLock,
    title: "User Data",
    text: "Your profile, session history, decisions, diary. Private repo, yours alone.",
    accent: "accent" as const,
  },
  {
    icon: IconServer,
    title: "Launcher",
    text: "Setup scripts, config templates, validation tools. Portable, cross-platform.",
    accent: "accent3" as const,
  },
];

type Provider = {
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "purple" | "accent" | "amber" | "accent3";
  url: string;
  signupUrl: string;
  description: string;
  steps: Array<{
    n: number;
    title: string;
    body: string;
    code: string;
  }>;
};

const PROVIDERS: Provider[] = [
  {
    label: "NVIDIA",
    sublabel: "free",
    icon: IconZap,
    accent: "accent",
    url: "https://build.nvidia.com",
    signupUrl: "https://ngc.nvidia.com/signup",
    description: "Free NVIDIA models via OpenCode's built-in NVIDIA integration. No API key needed - just authenticate with your NVIDIA account.",
    steps: [
      {
        n: 1,
        title: "Connect NVIDIA provider",
        body: "Create a free NVIDIA account, then in OpenCode run /connect and select NVIDIA to authenticate.",
        code: "/connect\n# Select NVIDIA from the list\n# Follow the OAuth flow in your browser",
      },
      {
        n: 2,
        title: "Set as default model",
        body: "Add the NVIDIA model to your agent config in opencode.json.",
        code: '"model": "nvidia/z-ai/glm-5.1"',
      },
    ],
  },
  {
    label: "OpenCode Go",
    sublabel: "free trial",
    icon: IconKey,
    accent: "purple",
    url: "https://opencode.ai",
    signupUrl: "https://opencode.ai",
    description: "OpenCode's managed API gateway. One subscription gives you access to DeepSeek, Qwen, Kimi, and more. From $0.14/1M input tokens.",
    steps: [
      {
        n: 1,
        title: "Create an account",
        body: "Sign up at opencode.ai and add billing information to get your API key.",
        code: "# Visit https://opencode.ai\n# Create account \u2192 Get API key",
      },
      {
        n: 2,
        title: "Connect OpenCode Go",
        body: "Get your API key from the dashboard, then connect in the TUI.",
        code: "/connect\n# Select OpenCode Go\n# Paste your API key",
      },
      {
        n: 3,
        title: "Set as default model",
        body: "Add the OpenCode Go model to your agent config.",
        code: '"model": "opencode-go/deepseek-v4-flash"',
      },
    ],
  },
  {
    label: "OpenRouter",
    sublabel: "pay-per-use",
    icon: IconRoute,
    accent: "accent3",
    url: "https://openrouter.ai",
    signupUrl: "https://openrouter.ai/keys",
    description: "Route to 200+ models from OpenAI, Anthropic, Google, Meta, and more. One API key, pay-per-token. Free credits on signup.",
    steps: [
      {
        n: 1,
        title: "Create an account",
        body: "Sign up at openrouter.ai to get your API key. New accounts get free starter credits.",
        code: "# Visit https://openrouter.ai\n# Create account \u2192 Get API key",
      },
      {
        n: 2,
        title: "Set your API key",
        body: "Get your API key from the dashboard and set the environment variable.",
        code: "set OPENROUTER_API_KEY=sk-or-...",
      },
      {
        n: 3,
        title: "Configure in opencode.json",
        body: "Add the OpenRouter base URL and API key reference to your provider config.",
        code: '"baseURL": "https://openrouter.ai/api/v1"\n"apiKey": "${OPENROUTER_API_KEY}"',
      },
    ],
  },
];

const WINDOWS_INSTALL = "irm https://raw.githubusercontent.com/Cothek/glitch-ai/main/scripts/install.ps1 | iex";
const UNIX_INSTALL = "curl -sL https://raw.githubusercontent.com/Cothek/glitch-ai/main/scripts/install.sh | bash";

const REQUIREMENTS = [
  "Windows 10+ / macOS 13+ / Linux",
  "Node.js 22+",
  "~500 MB disk",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Why Glitch */}
        <section id="why" className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                What makes Glitch different
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Not another chatbot. A companion that grows with you.
              </h2>
              <p className="mt-4 text-text-muted">
                Most AI tools forget everything between sessions. Glitch is built on the opposite idea: memory, context, and continuity are the product.
              </p>
            </header>

            <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <li
                    key={f.title}
                    className="hover-lift group relative rounded-lg border border-border bg-bg-elevated/40 p-5"
                  >
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border ${ACCENT_CLASS[f.accent]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{f.body}</p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12">
              <Terminal title="glitch" className="max-w-3xl mx-auto">
                <TerminalPrompt>$ glitch</TerminalPrompt>
                <TerminalLine>
                  <span className="dim">Glitch AI v1.0</span> — <span className="dim">your personal companion</span>
                  {"\n\n"}
                  <span className="prompt-text">💜 Good morning! </span>
                  <span className="dim">8:42 AM on Sunday, June 1st, 2026</span>
                  {"\n"}
                  <span className="dim">Glitch is energized and ready for a productive day together.</span>
                  {"\n\n"}
                </TerminalLine>

                <TerminalPrompt user />
                <TerminalLine>
                  <span className="prompt-text">build me a beautiful website to share glitch with my friends</span>
                </TerminalLine>

                <TerminalLine>
                  <span className="prompt-text">on it. let me think through this:</span>
                  {"\n\n"}
                </TerminalLine>

                <TerminalLine>
                  <span className="dim">▸ plan</span> <span className="dim">·</span> <span className="prompt-text">shape → tokens → motion → ship</span>
                  {"\n"}
                  <span className="dim">▸ scaffold</span> <span className="dim">·</span> <span className="prompt-text">Next.js 15 + Tailwind v4 at </span><code>glitch-website/</code>
                  {"\n"}
                  <span className="dim">▸ design</span> <span className="dim">·</span> <span className="prompt-text">anti-slop + scan-line hero, dark theme</span>
                  {"\n"}
                  <span className="dim">▸ ship</span> <span className="dim">·</span> <span className="prompt-text">Vercel deploy + ZIP download endpoint</span>
                  {"\n\n"}
                  <span className="dim">running ~5 sub-agents in parallel...</span>
                  {"\n\n"}
                </TerminalLine>

                <TerminalLine>
                  <span className="text-green-500">✓</span> <span className="prompt-text">design tokens · </span><span className="dim">1.2s</span>
                  {"\n"}
                  <span className="text-green-500">✓</span> <span className="prompt-text">hero + features · </span><span className="dim">4.8s</span>
                  {"\n"}
                  <span className="text-green-500">✓</span> <span className="prompt-text">download endpoint · </span><span className="dim">2.1s</span>
                  {"\n"}
                  <span className="text-green-500">✓</span> <span className="prompt-text">vercel deploy · </span><span className="dim">8.3s</span>
                  {"\n\n"}
                  <span className="prompt-text">live at </span><span className="text-accent-2">https://glitch-ai.vercel.app</span>
                  {"\n"}
                  <span className="prompt-text cursor-blink">█</span>
                </TerminalLine>
              </Terminal>
            </div>
          </div>
        </section>

        {/* Skills Spotlight */}
        <section id="skills" className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                30+ skills at your command
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Say the trigger. Glitch loads the skill.
              </h2>
              <p className="mt-4 text-text-muted">
                Code review, UI design, security testing, debugging, image generation — every skill is
                voice-activated by a natural trigger phrase.
              </p>
            </header>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="hover-lift rounded-lg border border-border bg-bg-elevated/40 p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-accent-soft text-accent border-accent/20">
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h3 className="text-base font-semibold tracking-tight">Code &amp; Review</h3>
                <p className="mt-1 text-sm text-text-muted">code-review, testing, debugging, refactoring</p>
              </div>

              <div className="hover-lift rounded-lg border border-border bg-bg-elevated/40 p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-accent-2-soft text-accent-2 border-accent-2/20">
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <h3 className="text-base font-semibold tracking-tight">Design &amp; UI</h3>
                <p className="mt-1 text-sm text-text-muted">ui-craft, ui-design, goal, brainstorming</p>
              </div>

              <div className="hover-lift rounded-lg border border-border bg-bg-elevated/40 p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-accent-3-soft text-accent-3 border-accent-3/20">
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <h3 className="text-base font-semibold tracking-tight">Image &amp; Creative</h3>
                <p className="mt-1 text-sm text-text-muted">image-generation, song-creation, interactive-story</p>
              </div>

              <div className="hover-lift rounded-lg border border-border bg-bg-elevated/40 p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-accent-soft text-accent border-accent/20">
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h3 className="text-base font-semibold tracking-tight">System &amp; Automation</h3>
                <p className="mt-1 text-sm text-text-muted">dev-loop, forge, auto-commit, work-plan</p>
              </div>

              <div className="hover-lift rounded-lg border border-border bg-bg-elevated/40 p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-accent-2-soft text-accent-2 border-accent-2/20">
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="text-base font-semibold tracking-tight">Security &amp; Analysis</h3>
                <p className="mt-1 text-sm text-text-muted">security-testing, gitnexus, self-review, breakthrough</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/skills"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-text transition-all hover:border-accent hover:text-accent"
              >
                Browse all skills
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                How it&apos;s built
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Three layers. One mental model.
              </h2>
              <p className="mt-4 text-text-muted">
                Engine and launcher are public. Your data lives in its own private repo.
              </p>
            </header>

            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {ARCH_LAYERS.map((layer) => {
                const Icon = layer.icon;
                const a = ACCENT[layer.accent];
                return (
                  <div
                    key={layer.title}
                    className="hover-lift relative rounded-lg border border-border bg-bg-elevated/40 p-6"
                  >
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${a.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">{layer.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{layer.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Install & Download */}
        <section id="install" className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Get started
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                One command, and you&apos;re in.
              </h2>
              <p className="mt-4 text-text-muted">
                Free, open source, your data stays local.
              </p>
            </header>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-text-dim mb-2">
                  Windows (PowerShell)
                </p>
                <div className="relative overflow-hidden rounded-md border border-border bg-bg-code">
                  <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-3 py-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 21h16M4 12h16M4 3h16" />
                      </svg>
                      powershell
                    </div>
                    <CopyButton text={WINDOWS_INSTALL} />
                  </div>
                  <pre className="whitespace-pre-wrap break-all p-3 font-mono text-xs leading-relaxed text-text">
                    <code>{WINDOWS_INSTALL}</code>
                  </pre>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-text-dim mb-2">
                  macOS / Linux (bash)
                </p>
                <div className="relative overflow-hidden rounded-md border border-border bg-bg-code">
                  <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-3 py-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 21h16M4 12h16M4 3h16" />
                      </svg>
                      bash
                    </div>
                    <CopyButton text={UNIX_INSTALL} />
                  </div>
                  <pre className="whitespace-pre-wrap break-all p-3 font-mono text-xs leading-relaxed text-text">
                    <code>{UNIX_INSTALL}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-text-dim">
              {REQUIREMENTS.map((req, i) => (
                <span key={req} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>·</span>}
                  {req}
                </span>
              ))}
            </div>

            <div className="mt-16">
              <header className="mx-auto max-w-2xl text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                  Pick your free AI provider
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Three paths. Start free, scale up.
                </h3>
              </header>

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                {PROVIDERS.map((provider) => {
                  const Icon = provider.icon;
                  const a = ACCENT[provider.accent];
                  return (
                    <div
                      key={provider.label}
                      className="hover-lift relative flex flex-col rounded-lg border border-border bg-bg-elevated/40 p-6"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${a.iconBg}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${a.badgeBg}`}>
                          {provider.sublabel}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold tracking-tight">
                        <a href={provider.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          {provider.label}
                          <span className="sr-only"> (opens in new tab)</span>
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-text-muted">{provider.description}</p>
                      <a
                        href={provider.signupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-2"
                      >
                        Create account
                        <span className="sr-only"> (opens in new tab)</span>
                        <span aria-hidden="true"> ↗</span>
                      </a>

                      <ol className="mt-5 flex-1 space-y-4">
                        {provider.steps.map((step) => (
                          <li key={step.n}>
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold ${a.badgeBg}`}>
                                {step.n}
                              </span>
                              <h4 className="text-sm font-semibold tracking-tight">{step.title}</h4>
                            </div>
                            <p className="mt-1 pl-8 text-xs text-text-muted">{step.body}</p>
                            <div className="relative mt-2 overflow-hidden rounded-md border border-border bg-bg-code">
                              <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-3 py-1.5">
                                <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
                                  <IconTerminal className="h-3 w-3" />
                                  powershell
                                </div>
                                <CopyButton text={step.code} />
                              </div>
                              <pre className="whitespace-pre-wrap break-all p-3 font-mono text-xs leading-relaxed text-text">
                                <code>{step.code}</code>
                              </pre>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
