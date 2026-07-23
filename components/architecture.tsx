import { IconLayers, IconFolder, IconFile, IconLock, IconServer, IconExternalLink } from "@/components/icons";

const LAYERS = [
  {
    label: "Engine",
    sublabel: "public",
    icon: IconLayers,
    accent: "purple" as const,
    files: [
      { kind: "dir", name: "core/" },
      { kind: "dir", name: "plugins/" },
      { kind: "dir", name: "library/" },
      { kind: "dir", name: "skills/" },
    ],
    note: "23 skills, identity, prompt rules",
    repo: "Cothek/glitch-engine",
    url: "https://github.com/Cothek/glitch-engine",
  },
  {
    label: "User Data",
    sublabel: "private",
    icon: IconLock,
    accent: "accent" as const,
    files: [
      { kind: "file", name: "main-memory.md" },
      { kind: "file", name: "current-session.md" },
      { kind: "dir", name: "diary/" },
      { kind: "dir", name: "projects/" },
    ],
    note: "Your profile, sessions, decisions",
    repo: "Cothek/glitch-user-troy",
    url: "https://github.com/Cothek/glitch-user-troy",
  },
  {
    label: "Launcher",
    sublabel: "public",
    icon: IconServer,
    accent: "purple" as const,
    files: [
      { kind: "file", name: "setup.bat" },
      { kind: "file", name: "launch-glitch.bat" },
      { kind: "dir", name: "scripts/" },
      { kind: "dir", name: "config/" },
    ],
    note: "Setup, launch, validation",
    repo: "Cothek/glitch-ai",
    url: "https://github.com/Cothek/glitch-ai",
  },
];

const ACCENT = {
  purple: {
    iconBg: "bg-accent-soft text-accent border-accent/30",
    badgeBg: "bg-accent-soft text-accent",
    line: "via-accent",
  },
  accent: {
    iconBg: "bg-accent-2-soft text-accent-2 border-accent-2/30",
    badgeBg: "bg-accent-2-soft text-accent-2",
    line: "via-accent-2",
  },
};

export function Architecture() {
  return (
    <section id="architecture" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-2">How it&apos;s built</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Three layers. One mental model.
          </h2>
          <p className="mt-4 text-text-muted">
            Engine and launcher are public. Your data lives in its own private repo. Share Glitch with friends without sharing your history.
          </p>
        </header>

        {/* Architecture diagram */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {LAYERS.map((layer) => {
              const Icon = layer.icon;
              const a = ACCENT[layer.accent];
              return (
                <div
                  key={layer.label}
                  className="hover-lift relative rounded-lg border border-border bg-bg-elevated/40 p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${a.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${a.badgeBg}`}>
                      {layer.sublabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight">{layer.label}</h3>
                  <p className="mt-1 text-sm text-text-muted">{layer.note}</p>

                  {/* File tree */}
                  <div className="mt-5 rounded-md border border-border bg-bg-code/60 p-3 font-mono text-xs">
                    {layer.files.map((f) => {
                      const FIcon = f.kind === "dir" ? IconFolder : IconFile;
                      return (
                        <div key={f.name} className="flex items-center gap-2 py-0.5">
                          <FIcon className={f.kind === "dir" ? "h-3 w-3 text-accent-2" : "h-3 w-3 text-text-muted"} />
                          <span className={f.kind === "dir" ? "text-accent-2" : "text-text-muted"}>{f.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href={layer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] text-text-dim hover:text-accent-2 transition-colors"
                  >
                    {layer.repo}
                    <IconExternalLink className="h-3 w-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Data flow note */}
        <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-border bg-bg-elevated/40 p-4 text-center text-sm text-text-muted">
          <span className="text-text">Launch flow:</span>{" "}
          <code>launch-glitch.bat</code> detects your profile → generates a runtime <code>opencode.json</code> that merges engine + user instructions → starts OpenCode with the combined config.
        </div>
      </div>
    </section>
  );
}
