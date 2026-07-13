import { CopyButton } from "@/components/copy-button";
import { IconGithub, IconCheck } from "@/components/icons";

const REQUIREMENTS = [
  "Windows 10+, macOS 13+, or Linux (x86_64)",
  "Node.js 22+ (required for the cross-platform launcher)",
  "API key for an LLM provider (OpenAI, Anthropic, etc.)",
  "Git (required for installation)",
  "~500 MB disk (after bootstrap downloads OpenCode + Handy)",
];

const WINDOWS_INSTALL = "irm https://raw.githubusercontent.com/Cothek/glitch-ai/main/scripts/install.ps1 | iex";
const UNIX_INSTALL = "curl -sL https://raw.githubusercontent.com/Cothek/glitch-ai/main/scripts/install.sh | bash";

export function Download() {
  return (
    <section id="download" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-bg-elevated/60 to-bg p-8 sm:p-12">
          {/* Background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-40 max-w-md bg-accent opacity-20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-20 right-0 h-40 max-w-xs bg-cyan opacity-10 blur-3xl"
          />

          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Install</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Get Glitch on your machine.
            </h2>
            <p className="mt-3 max-w-xl text-text-muted">
              Free, open source, your data stays local. One command downloads the install script, checks prerequisites, clones the repo, and bootstraps everything automatically.
            </p>

            {/* Install script code blocks */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
              {/* Windows */}
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-text-dim mb-2">Windows (PowerShell)</p>
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
                  <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed text-text">
                    <code>{WINDOWS_INSTALL}</code>
                  </pre>
                </div>
              </div>

              {/* macOS / Linux */}
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-text-dim mb-2">macOS / Linux (bash)</p>
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
                  <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed text-text">
                    <code>{UNIX_INSTALL}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-text-dim">
              <span>~1 KB (install script)</span>
              <span aria-hidden>·</span>
              <span>Free, MIT-style license</span>
              <span aria-hidden>·</span>
              <span>No telemetry</span>
            </div>

            {/* Star on GitHub */}
            <div className="mt-8">
              <a
                href="https://github.com/Cothek/glitch-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-border bg-bg-elevated/60 px-5 text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-bg-elevated"
              >
                <IconGithub className="h-4 w-4" />
                Star on GitHub
              </a>
            </div>

            {/* Requirements */}
            <div className="mt-10 border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-dim">System requirements</p>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-text-muted">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alternative: clone from GitHub */}
            <div className="mt-8 rounded-lg border border-border bg-bg-code/60 p-4 text-sm">
              <p className="text-text-muted">
                <strong className="text-text">Prefer git?</strong> Clone directly from GitHub — same content, always up to date.
              </p>
              <pre className="mt-3 overflow-x-auto rounded-md bg-bg/60 p-3 font-mono text-xs text-cyan">
                <code>git clone https://github.com/Cothek/glitch-ai.git</code>
              </pre>
              <p className="mt-3 text-text-dim text-xs">
                Prerequisites: <a href="https://git-scm.com/downloads" className="text-accent hover:underline">Git</a> and <a href="https://nodejs.org" className="text-accent hover:underline">Node.js 22+</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}