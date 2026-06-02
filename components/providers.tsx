import { CopyButton } from "@/components/copy-button"
import { IconTerminal, IconKey, IconZap, IconRoute } from "@/components/icons"

const PROVIDERS = [
  {
    label: 'NVIDIA',
    sublabel: 'free',
    icon: IconZap,
    accent: 'cyan' as const,
    description:
      "NVIDIA free model endpoint — great for getting started. No credit card needed. Rate-limited but fully functional for personal use.",
    pricing: '$0 / month — rate-limited',
    steps: [
      {
        n: 1,
        title: 'Connect NVIDIA provider',
        body: 'In OpenCode, run /connect and select NVIDIA. Authenticate with your NVIDIA account.',
        code: '/connect\n# Select NVIDIA from the list\n# Follow the OAuth flow in your browser',
      },
      {
        n: 2,
        title: 'Set as default model',
        body: 'Add the NVIDIA model to your agent config in opencode.json.',
        code: '"model": "nvidia/z-ai/glm-5.1"',
      },
    ],
  },
  {
    label: 'OpenCode Go',
    sublabel: 'paid',
    icon: IconKey,
    accent: 'purple' as const,
    description:
      "OpenCode Go managed API gateway — access DeepSeek, Qwen, Kimi, and more through a single subscription. Higher rate limits, priority access, and premium models.",
    pricing: 'Pay-per-token — from $0.14/1M input',
    steps: [
      {
        n: 1,
        title: 'Create an account',
        body: 'Sign up at opencode.ai and add billing information.',
        code: '# Visit https://opencode.ai\n# Create account → Add billing',
      },
      {
        n: 2,
        title: 'Connect OpenCode Go',
        body: 'Get your API key from the dashboard, then connect in the TUI.',
        code: '/connect\n# Select OpenCode Go\n# Paste your API key',
      },
      {
        n: 3,
        title: 'Set as default model',
        body: 'Add the OpenCode Go model to your agent config.',
        code: '"model": "opencode-go/deepseek-v4-flash"',
      },
    ],
  },
  {
    label: 'OpenRouter',
    sublabel: 'aggregator',
    icon: IconRoute,
    accent: 'amber' as const,
    description:
      'Route to 200+ models from OpenAI, Anthropic, Google, Meta, and more. One API key, every model. Pay only for what you use.',
    pricing: 'Pay-per-token — varies by model',
    steps: [
      {
        n: 1,
        title: 'Create an account',
        body: 'Sign up at openrouter.ai and add credits.',
        code: '# Visit https://openrouter.ai\n# Create account → Add credits',
      },
      {
        n: 2,
        title: 'Set your API key',
        body: 'Get your API key from the dashboard and set the environment variable.',
        code: 'set OPENROUTER_API_KEY=sk-or-...',
      },
      {
        n: 3,
        title: 'Configure in opencode.json',
        body: 'Add the OpenRouter base URL and API key reference to your provider config.',
        code: '"baseURL": "https://openrouter.ai/api/v1"\n"apiKey": "${OPENROUTER_API_KEY}"',
      },
    ],
  },
]

const ACCENT = {
  cyan: {
    iconBg: 'bg-cyan-soft text-cyan border-cyan/30',
    badgeBg: 'bg-cyan-soft text-cyan',
  },
  purple: {
    iconBg: 'bg-accent-soft text-accent border-accent/30',
    badgeBg: 'bg-accent-soft text-accent',
  },
  amber: {
    iconBg: 'bg-amber/10 text-amber border-amber/30',
    badgeBg: 'bg-amber/10 text-amber',
  },
}

export function Providers() {
  return (
    <section id="providers" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Connect your models</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Three providers. Pick your path.
          </h2>
          <p className="mt-4 text-text-muted">
            Start free with NVIDIA, go premium with OpenCode Go, or route to every model through OpenRouter. One config, any provider.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {PROVIDERS.map((provider) => {
            const Icon = provider.icon
            const a = ACCENT[provider.accent]
            return (
              <div
                key={provider.label}
                className="hover-lift relative flex flex-col rounded-lg border border-border bg-bg-elevated/40 p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${a.iconBg}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${a.badgeBg}`}
                  >
                    {provider.sublabel}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight">{provider.label}</h3>
        <p className="mt-1 text-sm text-text-muted">{provider.description}</p>
                <p className="mt-2 font-mono text-xs text-text-dim">{provider.pricing}</p>

                <ol className="mt-5 flex-1 space-y-4">
                  {provider.steps.map((step) => (
                    <li key={step.n}>
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold ${a.badgeBg}`}
                        >
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
                        <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed text-text">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
