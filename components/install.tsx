"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { IconTerminal, IconCheck, IconDownload } from "@/components/icons";

const WINDOWS_ZIP = [
  { n: 1, title: "Download Glitch", body: "Download the latest release zip and extract it anywhere.", code: "Download from glitch-ai.com\nor grab the ZIP from GitHub" },
  { n: 2, title: "Launch Glitch", body: "Double-click launch-glitch.bat. First run auto-downloads Node.js and all dependencies.", code: ".\\launch-glitch.bat" },
  { n: 3, title: "Start chatting", body: "Glitch introduces itself with a session brief and remembers you next time.", code: "Hi Glitch \u2014 help me build a thing." },
];

const WINDOWS_GIT = [
  { n: 1, title: "Clone the repo", body: "Grab the launcher repo.", code: "git clone https://github.com/Cothek/glitch-ai.git\ncd glitch-ai\ngit submodule update --init --recursive" },
  { n: 2, title: "Run setup", body: "Downloads OpenCode and the Handy voice model.", code: ".\\scripts\\setup.ps1" },
  { n: 3, title: "Launch Glitch", body: "Pick a profile (or create a new one) and you're in.", code: ".\\launch-glitch.bat" },
  { n: 4, title: "Start chatting", body: "Glitch introduces itself with a session brief and remembers you next time.", code: "Hi Glitch \u2014 help me build a thing." },
];

const UNIX_ZIP = [
  { n: 1, title: "Download Glitch", body: "Download the latest release zip and extract it anywhere.", code: "Download from glitch-ai.com\nor grab the ZIP from GitHub" },
  { n: 2, title: "Install Node.js", body: "Make sure Node.js 22+ is installed (not auto-bootstrapped on Mac/Linux).", code: "Install from https://nodejs.org" },
  { n: 3, title: "Launch Glitch", body: "Open a terminal in the folder and run the shell launcher.", code: "./launch-glitch.sh" },
  { n: 4, title: "Start chatting", body: "Glitch introduces itself with a session brief and remembers you next time.", code: "Hi Glitch \u2014 help me build a thing." },
];

const UNIX_GIT = [
  { n: 1, title: "Clone the repo", body: "Grab the launcher repo and its submodules.", code: "git clone https://github.com/Cothek/glitch-ai.git\ncd glitch-ai\ngit submodule update --init --recursive" },
  { n: 2, title: "Install Node.js", body: "Make sure Node.js 22+ is installed.", code: "Install from https://nodejs.org" },
  { n: 3, title: "Launch Glitch", body: "Use the shell wrapper.", code: "./launch-glitch.sh" },
  { n: 4, title: "Start chatting", body: "Glitch introduces itself with a session brief and remembers you next time.", code: "Hi Glitch \u2014 help me build a thing." },
];

function TabButton({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-5 py-3 text-left transition-all ${
        active
          ? "border-accent bg-accent-soft"
          : "border-border bg-bg-elevated/40 hover:border-text-dim"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full transition-all ${
            active ? "bg-accent shadow-[0_0_6px_var(--color-accent)]" : "bg-text-dim"
          }`}
        />
        <span className="text-sm font-semibold text-text">{label}</span>
      </div>
    </button>
  );
}

export function Install() {
  const [tab, setTab] = useState<"win" | "unix">("win");
  const [method, setMethod] = useState<"zip" | "git">("zip");

  const steps =
    tab === "win"
      ? method === "zip" ? WINDOWS_ZIP : WINDOWS_GIT
      : method === "zip" ? UNIX_ZIP : UNIX_GIT;

  const shellLabel = tab === "win" ? "powershell" : "bash";

  return (
    <section id="install" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Pick your path. Done in minutes.</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Install Glitch
          </h2>
          <p className="mt-4 text-text-muted">
            Windows, macOS, and Linux all work. Pick your platform below.
          </p>
        </header>

        {/* Platform tabs */}
        <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3">
          <TabButton active={tab === "win"} label="Windows" onClick={() => setTab("win")} />
          <TabButton active={tab === "unix"} label="macOS / Linux" onClick={() => setTab("unix")} />
        </div>

        {/* Method toggle */}
        <div className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-2">
          <button
            onClick={() => setMethod("zip")}
            className={`flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
              method === "zip"
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-bg-elevated/40 text-text-muted hover:text-text hover:border-text-dim"
            }`}
          >
            <IconDownload className="h-4 w-4" />
            Download ZIP
          </button>
          <span className="text-xs text-text-dim">or</span>
          <button
            onClick={() => setMethod("git")}
            className={`flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
              method === "git"
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-bg-elevated/40 text-text-muted hover:text-text hover:border-text-dim"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M6 21V9a3 3 0 0 1 3-3h6" />
            </svg>
            Git Clone
          </button>
        </div>

        <ol className="mt-6 space-y-6">
          {steps.map((step) => (
            <li
              key={step.n}
              className="group relative grid grid-cols-1 gap-4 rounded-lg border border-border bg-bg-elevated/40 p-5 sm:grid-cols-[auto,1fr] sm:gap-6 sm:p-6"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-bold text-accent">
                  {step.n}
                </span>
                <h3 className="text-base font-semibold tracking-tight sm:mt-2">{step.title}</h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">{step.body}</p>
                <div className="relative mt-3 overflow-hidden rounded-md border border-border bg-bg-code">
                  <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-3 py-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
                      <IconTerminal className="h-3 w-3" />
                      {shellLabel}
                    </div>
                    <CopyButton text={step.code} />
                  </div>
                  <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed text-text">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Prerequisites note */}
        <div className="mt-8 rounded-lg border border-border bg-bg-code/60 p-4 text-sm">
          <p className="text-text-muted">
            <strong className="text-text">Prerequisites:</strong>{" "}
            Git and Node.js 22+ for the Git path.{" "}
            Windows ZIP download{" "}
            <a href="https://github.com/Cothek/glitch-ai/archive/refs/heads/main.zip" className="text-accent hover:underline">auto-bootstraps Node.js</a>
            {" \u2014 Mac/Linux ZIP needs "}
            <a href="https://nodejs.org" className="text-accent hover:underline">Node.js 22+</a>
            {" installed manually."}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2 text-text-muted">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Windows 10+</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>macOS 12+ / Linux</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>API key for an LLM provider</span>
          </div>
        </div>
      </div>
    </section>
  );
}