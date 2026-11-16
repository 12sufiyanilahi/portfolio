import Effects from "@/components/Effects";
import Ticker from "@/components/Ticker";
import Terminal from "@/components/Terminal";
import ProjectTabs from "@/components/ProjectTabs";
import AppTypes from "@/components/AppTypes";
import CopyEmail from "@/components/CopyEmail";

const jobs = [
  {
    title: "Senior Software Engineer",
    company: "Hexaware Technologies",
    period: "Apr 2023 – Nov 2026",
    tags: ["React Native", "React.js", "Angular", "Node.js", "TypeScript", "MySQL", "Microservices"],
    points: [
      "Independently migrated a large enterprise mobile app from legacy Cordova/Ionic to React Native.",
      "Built offline-first features with connectivity monitoring and data synchronization.",
      "Implemented mobile security: SSL/certificate pinning, root & jailbreak detection, secure storage.",
      "Led feature delivery, code reviews and developer mentoring across cross-functional teams.",
    ],
  },
  {
    title: "Full Stack Developer (Ionic / Angular)",
    company: "Wattmonk",
    period: "Jul 2022 – Apr 2023",
    tags: ["Ionic", "Angular", "Capacitor", "Node.js"],
    points: ["Built hybrid mobile features for an international solar energy platform."],
  },
  {
    title: "Full Stack Developer",
    company: "Volive Solutions",
    period: "Jan 2022 – Jul 2022",
    tags: ["Ionic", "Angular", "Node.js", "Razorpay", "MySQL"],
    points: ["Built e-commerce features (catalogues, carts, orders) and integrated Razorpay payments."],
  },
  {
    title: "Full Stack Developer (MEAN Stack)",
    company: "Erstellen",
    period: "Mar 2020 – Jan 2022",
    tags: ["Angular", "Node.js", "Express.js", "Ionic", "MySQL"],
    points: ["Shipped web & mobile apps for LMS, e-commerce, Wi-Fi management and academy platforms."],
  },
];

export default function Home() {
  return (
    <>
      <Effects />

      <nav>
        <div className="progress" id="progress" />
        <div className="container">
          <a href="#top" className="logo">
            ~/<span>sufiyan</span>.dev
          </a>
          <div className="nav-links">
            <a href="#capabilities">Capabilities</a>
            <a href="#architecture">Architecture</a>
            <a href="#releases">Releases</a>
            <a href="#story">My story</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
          <div className="status-dot">
            <i /> available
          </div>
          <a href="#hire" className="btn btn-primary btn-sm">
            Hire me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="chip">● open to freelance projects</div>
            <h1>
              Hi, I&apos;m Shaikh Sufiyan Ilahi. I help turn ideas into{" "}
              <span className="gradient-text">apps people love.</span> <span aria-hidden="true">❤️</span>
            </h1>
            <p className="lead">
              I&apos;m a senior full stack developer with 7+ years of building web, mobile and backend products. I
              enjoy solving problems one step at a time, from the first sketch to the app in someone&apos;s hand.
            </p>
            <div className="hero-actions">
              <a href="#hire" className="btn btn-primary">
                Start a conversation →
              </a>
              <a href="#projects" className="btn">
                See the projects I&apos;ve built
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <b>9</b>
                backend domains in one platform
              </div>
              <div>
                <b>4</b>apps in one platform
              </div>
              <div>
                <b>2</b>app stores published
              </div>
            </div>
          </div>
          <Terminal />
        </div>

        <div className="container">
          <div className="metrics">
            <div className="metric reveal spot">
              <strong data-count="7">0</strong>
              <span>{"// years of experience"}</span>
            </div>
            <div className="metric reveal spot">
              <strong data-count="8">0</strong>
              <span>{"// production apps delivered"}</span>
            </div>
            <div className="metric reveal spot">
              <strong data-count="12">0</strong>
              <span>{"// build phases, one platform"}</span>
            </div>
            <div className="metric reveal spot">
              <strong data-count="43">0</strong>
              <span>{"// automated backend tests"}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="ticker-wrap">
        <Ticker />
      </div>

      {/* STORY */}
      <section id="story">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">{"// 00 my story"}</div>
            <h2>Every app is a quest. Here&apos;s mine so far. 🗺️</h2>
            <p className="lead">
              Five chapters, one favourite hobby: building apps that make everyday problems a little easier to solve.
            </p>
          </div>

          <div className="story">
            <div className="chapter reveal spot">
              <div className="chapter-icon">💡</div>
              <div className="chapter-label">Chapter 1 · 2020</div>
              <h3>The spark</h3>
              <p>
                I finished electrical engineering full of &quot;but how does this work?&quot; questions. Then I
                discovered software could solve everyday problems for real people. My first apps were learning
                platforms, online shops and Wi-Fi management tools, and I was hooked.
              </p>
            </div>
            <div className="chapter reveal spot">
              <div className="chapter-icon">☀️</div>
              <div className="chapter-label">Chapter 2 · 2022</div>
              <h3>Going mobile</h3>
              <p>
                At Volive and Wattmonk I put apps in people&apos;s pockets: payments, real-time chat and features for
                a solar energy platform. I learned that the small details are what make an app feel trustworthy.
              </p>
            </div>
            <div className="chapter reveal spot">
              <div className="chapter-icon">✈️</div>
              <div className="chapter-label">Chapter 3 · 2023 – 2026</div>
              <h3>The big migration</h3>
              <p>
                At Hexaware I moved a large aviation operations app from Cordova/Ionic to React Native. I built
                offline-first features so crews keep working without signal, and strengthened the app&apos;s
                security. Real people depend on every release.
              </p>
            </div>
            <div className="chapter reveal spot">
              <div className="chapter-icon">🤝</div>
              <div className="chapter-label">Chapter 4 · ongoing</div>
              <h3>Helping others build</h3>
              <p>
                I review code, mentor developers and bring AI tools into products through reliable APIs, so teams move
                faster without losing quality.
              </p>
            </div>
            <div className="chapter reveal spot">
              <div className="chapter-icon">🚀</div>
              <div className="chapter-label">Chapter 5 · the big build</div>
              <h3>A food-delivery platform</h3>
              <p>
                My biggest quest so far: four apps (customer, courier, merchant and admin) on one backend, from
                payments and live order tracking to cloud releases.
              </p>
            </div>
          </div>

          <div className="types reveal">
            <div className="types-label">Apps I&apos;ve built, by type</div>
            <AppTypes />
          </div>

          <p className="story-end reveal">
            Every app I build starts with one question: what problem does this solve for the people who use it? Let&apos;s
            find your answer together. 🚀
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="alt">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">{"// 01 capabilities"}</div>
            <h2>Full-stack help across every layer.</h2>
            <p className="lead">
              Instead of coordinating several people, you can work with one developer who understands the whole
              product. I explain trade-offs in plain language and we choose what fits your goals and budget.
            </p>
          </div>

          <div className="grid-3">
            <Card n="01" icon="🏗️" title="System design" text="Helping plan the structure, data and APIs so the product is clear to build and easy to grow.">
              <li>Modular monolith → microservices path</li>
              <li>Polyglot data (SQL, document, cache)</li>
              <li>Contract-first APIs (OpenAPI)</li>
            </Card>
            <Card n="02" icon="🌐" title="Web platforms" text="Responsive React and Angular applications, admin portals and dashboards built for real users and real operations teams.">
              <li>React.js · Angular</li>
              <li>Role-based admin consoles</li>
              <li>Live operational dashboards</li>
            </Card>
            <Card n="03" icon="📱" title="Mobile apps" text="Cross-platform Android and iOS apps in React Native, with offline-first sync, push notifications and store releases.">
              <li>React Native (Expo &amp; CLI)</li>
              <li>Google Play &amp; App Store</li>
              <li>OTA updates via EAS channels</li>
            </Card>
            <Card n="04" icon="🔌" title="Backend & APIs" text="Secure, well-tested services with auth, payments, background jobs and real-time updates.">
              <li>Node.js · Express · FastAPI</li>
              <li>OAuth 2.0 / JWT, RBAC</li>
              <li>Redis queues, correlation-ID logging</li>
            </Card>
            <Card n="05" icon="💳" title="Payments & integrations" text="Payment flows that are auditable and safe: tokenization, webhook verification and rate limits.">
              <li>Stripe · Razorpay</li>
              <li>HMAC-verified webhooks</li>
              <li>Immutable audit trails</li>
            </Card>
            <Card n="06" icon="🤖" title="AI-powered features" text="Practical AI added to real products through reliable API integrations, with cost and failure handling designed in.">
              <li>Claude · ChatGPT APIs</li>
              <li>Assistants &amp; smart search</li>
              <li>AI-assisted engineering workflow</li>
            </Card>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">{"// 02 architecture"}</div>
            <h2>How a multi-app product fits together.</h2>
            <p className="lead">
              This is how a food-delivery platform I worked on is organised: four client apps, one backend split into
              domains, several data stores, and cloud infrastructure managed as code.
            </p>
          </div>

          <div className="arch reveal">
            <div className="arch-label">clients</div>
            <div className="arch-row arch-clients">
              <div className="node hot">Customer app<small>React Native · Expo</small></div>
              <div className="node hot">Courier app<small>React Native · Expo</small></div>
              <div className="node hot">Merchant portal<small>Web · dashboards</small></div>
              <div className="node hot">Super admin<small>React · Vite · RBAC</small></div>
            </div>

            <div className="flow-down"><span>↓</span> <span>↓</span> <span>↓</span></div>

            <div className="arch-label">api gateway · python monolith (fastapi) · correlation ids · error middleware</div>
            <div className="arch-row arch-gw">
              <div className="node">
                Typed contracts &amp; generated TypeScript client
                <small>OpenAPI · contract registry · drift detection in CI</small>
              </div>
            </div>

            <div className="flow-down"><span>↓</span> <span>↓</span> <span>↓</span></div>

            <div className="arch-label">9 bounded-context domains · event-driven</div>
            <div className="arch-row arch-domains">
              {["Identity", "Restaurant", "Order", "Payment", "Delivery", "Rewards", "Booking", "Notify", "Pricing"].map(
                (d) => (
                  <div key={d} className="node">{d}</div>
                ),
              )}
            </div>

            <div className="flow-down"><span>↓</span> <span>↓</span> <span>↓</span></div>

            <div className="arch-label">data · cache · real-time · documents</div>
            <div className="arch-row arch-data">
              <div className="node green">PostgreSQL + PostGIS<small>orders · geo zones</small></div>
              <div className="node green">Redis<small>cache · jobs · pub/sub tracking</small></div>
              <div className="node green">MongoDB<small>flexible documents</small></div>
              <div className="node green">Event store<small>dead-letter + replay</small></div>
            </div>

            <div className="arch-notes">
              <span>AWS ECS Fargate</span>
              <span>RDS · ElastiCache</span>
              <span>Terraform (IaC)</span>
              <span>GitHub Actions CI/CD</span>
              <span>Blue/green + auto-rollback</span>
              <span>CloudWatch alarms</span>
            </div>
          </div>
        </div>
      </section>

      {/* RELEASES */}
      <section id="releases" className="alt">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">{"// 03 releases"}</div>
            <h2>How releases reach users safely.</h2>
            <p className="lead">
              Each change passes automated checks and a staged rollout, with a rollback plan, before everyone gets it.
            </p>
          </div>

          <div className="pipeline reveal">
            <div className="stage"><div className="bubble">🔍</div><h3>Lint &amp; format</h3><p>Static checks and security scans on every push</p></div>
            <div className="stage"><div className="bubble">🧪</div><h3>Test</h3><p>Unit, integration and contract tests against real Postgres</p></div>
            <div className="stage"><div className="bubble">📦</div><h3>Build</h3><p>Reproducible container and app bundles</p></div>
            <div className="stage"><div className="bubble">🐤</div><h3>Canary</h3><p>Blue/green rollout; a slice of traffic first</p><span className="badge">auto-rollback</span></div>
            <div className="stage"><div className="bubble">📲</div><h3>Store &amp; OTA</h3><p>EAS builds to Play Store &amp; App Store, OTA for JS fixes</p></div>
            <div className="stage"><div className="bubble">📈</div><h3>Observe</h3><p>Dashboards, six critical alarms, backup &amp; restore drills</p></div>
          </div>

          <div className="terminal pipe-term reveal" style={{ maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
            <div className="term-bar">
              <i style={{ background: "#f87171" }} />
              <i style={{ background: "#fbbf24" }} />
              <i style={{ background: "#34d399" }} />
              <span className="t">ci — example pipeline run (illustrative)</span>
            </div>
            <div className="term-body" style={{ minHeight: 0, fontSize: 13.5 }}>
              <span className="prompt">$</span> <span className="cmd">git push origin main</span>
              {"\n"}
              <span className="out">→ lint ........... </span><span className="ok">passed</span>
              {"\n"}
              <span className="out">→ test (43) ...... </span><span className="ok">passed</span>
              {"\n"}
              <span className="out">→ build ........... </span><span className="ok">passed</span>
              {"\n"}
              <span className="out">→ deploy canary .. </span><span className="hl">10% traffic</span>
              {"\n"}
              <span className="out">→ health checks ... </span><span className="ok">green</span>
              {"\n"}
              <span className="ok">✔ promoted to 100% — release live</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div className="spotlight-head">
            <div className="reveal">
              <div className="eyebrow">{"// 04 projects"}</div>
              <h2>A food-delivery platform, one of many apps I&apos;ve built.</h2>
              <p className="lead">
                Customer, courier and merchant apps plus a super-admin console, backed by one API. I contributed to the
                architecture, features across the apps, and the cloud and release setup.
              </p>
              <div style={{ marginTop: 22 }}>
                <span className="status-pill">● Build complete · final QA &amp; staging validation</span>
              </div>
            </div>
            <div className="facts reveal">
              <div className="fact"><b>Customer app</b><small>browse · cart · tracking · profile</small></div>
              <div className="fact"><b>Courier app</b><small>offers · routes · earnings · documents</small></div>
              <div className="fact"><b>Merchant portal</b><small>live orders · kitchen · menu · analytics</small></div>
              <div className="fact"><b>Admin platform</b><small>25+ RBAC endpoints · audit views</small></div>
            </div>
          </div>

          <ProjectTabs />

          <div className="section-head center" style={{ marginTop: 64, marginBottom: 0 }}>
            <div className="eyebrow">my contributions on this project</div>
            <p className="lead">
              Architecture decisions · domain design for 9 backend services · Stripe tokenization with AES-256-GCM and
              HMAC webhook verification · idempotent orders with immutable price snapshots · courier geo-fencing and
              live tracking · CI/CD, Terraform, blue/green releases and CloudWatch alarms.
            </p>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section id="process" className="alt">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">{"// 05 how we work"}</div>
            <h2>How we can work together.</h2>
            <p className="lead">You always know the stage, the cost and what&apos;s next.</p>
          </div>
          <div className="lifecycle">
            <Life n="01" title="Discover" text="Goals, users, must-haves and a fixed-scope summary." />
            <Life n="02" title="Plan" text="Plan the structure and tech choices together, and write them down." />
            <Life n="03" title="Design" text="Clickable flows and screens reviewed with you before code." />
            <Life n="04" title="Build" text="Sprints with working demos and automated tests from day one." />
            <Life n="05" title="Release" text="Store publishing, cloud deployment and a staged rollout." />
            <Life n="06" title="Operate" text="Monitoring, fixes, releases and a clear support plan." />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">{"// 06 experience"}</div>
            <h2>Seven years of hands-on work.</h2>
            <p className="lead">Enterprise, e-commerce, LMS, solar energy and business applications.</p>
          </div>

          <div className="timeline">
            <div className="job current reveal"><div className="card">
              <div className="job-head">
                <div><h3>Something new is cooking 🍳</h3><div className="company">Starting a new chapter</div></div>
                <div className="period">Nov 2026 – Now</div>
              </div>
              <div className="tags">
                <span className="tag">New venture</span><span className="tag">Fresh build</span><span className="tag">Coming soon</span>
              </div>
              <ul>
                <li>I&apos;ve started something new, and I&apos;m excited to share it.</li>
                <li>Ready to experience it with you? Stay tuned, something is cooking.</li>
              </ul>
            </div></div>

            {jobs.map((j) => (
              <div key={j.company} className="job reveal"><div className="card">
                <div className="job-head">
                  <div><h3>{j.title}</h3><div className="company">{j.company}</div></div>
                  <div className="period">{j.period}</div>
                </div>
                <div className="tags">
                  {j.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <ul>
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRE */}
      <section id="hire">
        <div className="container">
          <div className="hire">
            <div className="cta-box reveal">
              <h2>Have an idea? Let&apos;s talk.</h2>
              <p>
                Share your goal, your users and your timeline. I&apos;ll reply with a few questions, a realistic plan and
                a clear quote, and we can decide together if it&apos;s a good fit.
              </p>
              <div className="row">
                <a href="mailto:18ilahi@gmail.com" className="btn">Email me →</a>
                <CopyEmail />
                <a href="https://linkedin.com/in/shaikh-sufiyan-ilahi-8b663716b" target="_blank" rel="noopener" className="btn ghost">LinkedIn</a>
                <a href="tel:+917756077127" className="btn ghost">+91 7756077127</a>
              </div>
            </div>
            <div className="brief reveal">
              <span className="c">{"// your project brief, in 4 lines"}</span>
              {"\n"}
              <span className="k">const</span> project = {"{"}
              {"\n  "}goal:      <span className="s">&quot;What should users be able to do?&quot;</span>,
              {"\n  "}platforms: [<span className="s">&quot;web&quot;</span>, <span className="s">&quot;android&quot;</span>, <span className="s">&quot;ios&quot;</span>],
              {"\n  "}timeline:  <span className="s">&quot;Target launch date&quot;</span>,
              {"\n  "}budget:    <span className="s">&quot;Fixed or monthly&quot;</span>,
              {"\n"}
              {"};\n"}
              <span className="k">await</span> sufiyan.<span className="k">helpWith</span>(project); <span className="c">{"// let's talk"}</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <span>© 2026 Shaikh Sufiyan Ilahi · Aurangabad, India</span>
          <span>built with care · open to new projects</span>
        </div>
      </footer>
    </>
  );
}

function Card({
  n,
  icon,
  title,
  text,
  children,
}: {
  n: string;
  icon: string;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card reveal spot">
      <span className="tag-num">{n}</span>
      <div className="ico">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <ul>{children}</ul>
    </div>
  );
}

function Life({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="life reveal">
      <div className="n">{n}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
