import { CopyButton } from "@/components/copy-button"
import { IconWifi, IconServer, IconGlobe, IconTerminal, IconExternalLink } from "@/components/icons"

const TIERS = [
  {
    label: "Local",
    sublabel: "offline / no internet",
    icon: IconWifi,
    accent: "green" as const,
    description:
      "Glitch runs entirely on your machine. No internet, no accounts, no cloud dependencies.",
    code: "http://localhost:4102",
    points: [
      "Works completely offline",
      "All data stays on your machine",
      "No account or API key required for the web UI",
      "Ideal for personal use and development",
    ],
  },
  {
    label: "Local Network",
    sublabel: "private / LAN",
    icon: IconServer,
    accent: "cyan" as const,
    description:
      "Share Glitch with other devices on your home or office network. Still no internet required.",
    code: '.\\launch-glitch.bat --host',
    points: [
      "Access from your phone, tablet, or laptop on the same network",
      "No internet connection needed",
      "All data stays on your local network",
      "Great for team demos or cross-device workflows",
    ],
  },
  {
    label: "Public",
    sublabel: "internet / anywhere",
    icon: IconGlobe,
    accent: "purple" as const,
    description:
      "Access Glitch from anywhere in the world. Combine with Cloudflare Tunnel for a secure, always-on connection.",
    code: null,
    subOptions: [
      {
        title: "Your own domain",
        recommended: true,
        description:
          "Buy a domain ($10–15/year) and add it to Cloudflare free tier. Set up cloudflared for a tunnel. Stable URL, DNS management, and security policies.",
        link: {
          text: "Cloudflare Tunnel docs",
          href: "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/",
        },
      },
      {
        title: "Free subdomain service",
        recommended: false,
        description:
          "No domain? Use DuckDNS, No-IP, or afraid.org for a free hostname like yourname.duckdns.org. Point it at Cloudflare Tunnel or your local IP. Limited but functional.",
        links: [
          { text: "DuckDNS (free)", href: "https://duckdns.org" },
          { text: "No-IP (free tier)", href: "https://www.noip.com" },
          { text: "afraid.org (free)", href: "https://freedns.afraid.org" },
        ],
      },
    ],
  },
]

const ACCENT = {
  green: {
    iconBg: "bg-green/10 text-green border-green/30",
    badgeBg: "bg-green/10 text-green",
    border: "border-green/20",
  },
  cyan: {
    iconBg: "bg-cyan-soft text-cyan border-cyan/30",
    badgeBg: "bg-cyan-soft text-cyan",
    border: "border-cyan/20",
  },
  purple: {
    iconBg: "bg-accent-soft text-accent border-accent/30",
    badgeBg: "bg-accent-soft text-accent",
    border: "border-accent/20",
  },
}

export function Network() {
  return (
    <section id="network" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Choose how to connect</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Access Glitch your way.
          </h2>
          <p className="mt-4 text-text-muted">
            Local, LAN, or public — pick the access model that fits your setup. No wrong choices, and you can switch anytime.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {TIERS.map((tier) => {
            const Icon = tier.icon
            const a = ACCENT[tier.accent]
            return (
              <div
                key={tier.label}
                className="hover-lift relative flex flex-col rounded-lg border border-border bg-bg-elevated/40 p-6"
              >
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${a.iconBg}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${a.badgeBg}`}
                  >
                    {tier.sublabel}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight">{tier.label}</h3>
                <p className="mt-1 text-sm text-text-muted">{tier.description}</p>

                {/* Code block (Local + LAN only) */}
                {tier.code && (
                  <div className="mt-5 overflow-hidden rounded-md border border-border bg-bg-code">
                    <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-3 py-1.5">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
                        <IconTerminal className="h-3 w-3" />
                        {tier.label === "Local" ? "url" : "powershell"}
                      </div>
                      <CopyButton text={tier.code} />
                    </div>
                    <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed text-text">
                      <code>{tier.code}</code>
                    </pre>
                  </div>
                )}

                {/* Bullet points (Local + LAN only) */}
                {tier.points && (
                  <ul className="mt-4 flex-1 space-y-2">
                    {tier.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-text-muted">
                        <span className={`mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.badgeBg}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Sub-options (Public only) */}
                {tier.subOptions && (
                  <div className="mt-5 flex-1 space-y-3">
                    {tier.subOptions.map((opt) => (
                      <div
                        key={opt.title}
                        className={`rounded-md border bg-bg-code p-3 ${
                          opt.recommended ? `border-l-2 ${a.border} border-l-accent` : "border-border"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold tracking-tight">{opt.title}</h4>
                          {opt.recommended && (
                            <span className="rounded-full bg-accent-soft px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-accent">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-text-muted">{opt.description}</p>
                        {opt.link && (
                          <a
                            href={opt.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
                          >
                            {opt.link.text}
                            <IconExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {opt.links && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {opt.links.map((link) => (
                              <a
                                key={link.text}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
                              >
                                {link.text}
                                <IconExternalLink className="h-3 w-3" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
