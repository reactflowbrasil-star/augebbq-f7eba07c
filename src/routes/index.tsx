import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/auge-logo.png.asset.json";
import heroImg from "@/assets/hero-aerial.jpg";
import bbqImg from "@/assets/bbq-close.jpg";
import stageImg from "@/assets/stage.jpg";
import barImg from "@/assets/bar.jpg";
import vipImg from "@/assets/vip.jpg";
import carsImg from "@/assets/cars.jpg";
import trucksImg from "@/assets/foodtrucks.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "AUGE BBQ 2026 — Patrocínios | 17 e 18 de Outubro · Rio Verde-GO" },
      {
        name: "description",
        content:
          "AUGE BBQ: o maior encontro de churrasco, música e experiências de marca de Rio Verde. Apresentação comercial para patrocinadores — 17 e 18 de Outubro no Buriti Shopping.",
      },
      { property: "og:title", content: "AUGE BBQ — Cotas de Patrocínio 2026" },
      {
        property: "og:description",
        content:
          "Dois dias conectando grandes marcas, consumidores e experiências inesquecíveis. Solicite a proposta comercial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const Logo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <img
    src={logoAsset.url}
    alt="AUGE BBQ"
    className={className}
    style={{ filter: "drop-shadow(0 6px 20px rgba(255,106,0,0.35))" }}
  />
);

const Embers = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 18 }).map((_, i) => (
      <span
        key={i}
        className="animate-ember absolute block h-1.5 w-1.5 rounded-full"
        style={{
          left: `${(i * 53) % 100}%`,
          bottom: `-10px`,
          background:
            i % 3 === 0 ? "#FFB35A" : i % 3 === 1 ? "#FF6A00" : "#D4A017",
          boxShadow: "0 0 12px currentColor",
          animationDelay: `${(i * 0.4) % 6}s`,
          opacity: 0.7,
        }}
      />
    ))}
  </div>
);

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <div className="glass-card flex items-center gap-3 rounded-full px-3 py-2 pr-5">
          <Logo className="h-9 w-9" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider text-gradient-gold">AUGE BBQ</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Comercial 2026
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#estrutura" className="hover:text-primary transition-colors">Estrutura</a>
          <a href="#cotas" className="hover:text-primary transition-colors">Cotas</a>
          <a href="#publico" className="hover:text-primary transition-colors">Público</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>
        <a
          href="#contato"
          className="btn-fire btn-fire-hover hidden rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex"
        >
          Quero patrocinar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Visão aérea do AUGE BBQ no Buriti Shopping"
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.55) saturate(1.1) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.35) 40%, rgba(8,8,8,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 30%, rgba(255,106,0,0.22), transparent 70%)",
          }}
        />
      </div>
      <Embers />

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center md:px-8">
        <div className="animate-fade-up">
          <div className="glass-card mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-fire animate-flicker" />
            Apresentação Comercial · Cotas 2026
          </div>

          <Logo className="mx-auto mb-6 h-32 w-32 md:h-44 md:w-44 animate-flicker" />

          <h1 className="font-display text-5xl leading-[0.9] tracking-tight md:text-8xl">
            <span className="text-gradient-fire">AUGE</span>{" "}
            <span className="text-gradient-gold">BBQ</span>
          </h1>

          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
            <span className="gold-border rounded-full px-4 py-1.5 font-semibold tracking-wider">
              17 & 18 DE OUTUBRO
            </span>
            <span className="gold-border rounded-full px-4 py-1.5 tracking-wider">
              BURITI SHOPPING
            </span>
            <span className="gold-border rounded-full px-4 py-1.5 tracking-wider">
              RIO VERDE · GO
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-balance text-xl font-light text-foreground/90 md:text-2xl">
            O maior encontro de{" "}
            <span className="text-gradient-fire font-semibold">churrasco, música</span> e{" "}
            <span className="text-gradient-gold font-semibold">experiências de marca</span> de
            Rio Verde.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            Dois dias conectando grandes marcas, consumidores e experiências inesquecíveis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contato"
              className="btn-fire btn-fire-hover rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Quero ser patrocinador
            </a>
            <a
              href="#contato"
              className="gold-border rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-gold-soft transition-colors hover:text-primary"
            >
              Receber apresentação comercial
            </a>
          </div>
        </div>

        <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { n: "+10.000", l: "Visitantes esperados" },
            { n: "2", l: "Dias de evento" },
            { n: "+50", l: "Oportunidades de exposição" },
            { n: "Milhões", l: "de impactos de marca" },
          ].map((k) => (
            <div key={k.l} className="glass-card rounded-2xl px-4 py-5 text-left">
              <div className="font-display text-3xl text-gradient-gold md:text-4xl">{k.n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {k.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gradient-fire">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl leading-tight md:text-6xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          )}
          <div className="ember-divider mx-auto mt-8 w-40" />
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: "🔥", t: "Churrasco Premium", d: "Experiência gastronômica com grandes especialistas do fogo e da brasa." },
    { icon: "🎤", t: "Shows Sertanejos", d: "Música e entretenimento em grande estrutura de palco e produção." },
    { icon: "🍻", t: "Gastronomia", d: "Food trucks, bares premium e espaços gastronômicos exclusivos." },
    { icon: "⭐", t: "Área VIP", d: "Camarote, relacionamento corporativo e experiências premium." },
  ];
  return (
    <Section
      id="sobre"
      eyebrow="Sobre o evento"
      title={
        <>
          Mais que um churrasco. <br />
          Uma <span className="text-gradient-fire">plataforma de experiências</span>.
        </>
      }
      subtitle="O AUGE BBQ transforma o estacionamento do Buriti Shopping em uma experiência completa de gastronomia, entretenimento e relacionamento — conectando marcas e consumidores em um dos maiores encontros do Centro-Oeste."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.t}
            className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1"
          >
            <div className="text-4xl">{c.icon}</div>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-gold-soft">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            <div
              className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
              style={{ background: "radial-gradient(circle, #FF6A00, transparent 70%)" }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Structure() {
  const items = [
    { t: "Palco Principal", d: "Shows sertanejos, LED, iluminação e branding integrado.", img: stageImg },
    { t: "Área BBQ", d: "Churrasqueiras, chefs e experiência gastronômica premium.", img: bbqImg },
    { t: "Bar Premium", d: "Balcão premium com experiências de bebidas exclusivas.", img: barImg },
    { t: "Camarote VIP", d: "Lounge, convidados especiais e relacionamento corporativo.", img: vipImg },
    { t: "Food Trucks", d: "Marcas gastronômicas e experiências para todos os públicos.", img: trucksImg },
    { t: "Área Automotiva", d: "Veículos expostos, lançamentos e ativações de montadoras.", img: carsImg },
  ];
  return (
    <Section
      id="estrutura"
      eyebrow="Estrutura do evento"
      title={<>Uma arena de <span className="text-gradient-gold">experiências</span></>}
      subtitle="Cada espaço foi projetado para gerar conteúdo, relacionamento e retorno comercial mensurável para marcas patrocinadoras."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article
            key={it.t}
            className="group relative overflow-hidden rounded-3xl border border-border"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={it.img}
                alt={it.t}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "brightness(0.75) saturate(1.1)" }}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.85) 85%, #080808 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold-soft">
                0{i + 1} · Espaço
              </div>
              <h3 className="font-display text-3xl leading-tight text-foreground">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gold-gradient opacity-0 transition-opacity group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </Section>
  );
}

function Opportunities() {
  const rows = [
    {
      t: "Entrada Principal",
      d: "Portal personalizado, naming da entrada, backdrop, recepção e exposição de produtos.",
    },
    { t: "Área Interna", d: "Totens patrocinadores, banners, painéis e ativações imersivas." },
    { t: "Palco AUGE BBQ", d: "Marca no palco, LED, chamadas de apresentador e conteúdo digital." },
    { t: "Área VIP", d: "Lounge corporativo, convidados e relacionamento premium." },
    { t: "Área Automotiva", d: "Exposição de veículos, test drive e lançamento de produto." },
  ];
  return (
    <Section
      eyebrow="Oportunidades"
      title={<>Sua marca no <span className="text-gradient-fire">centro</span> da experiência.</>}
    >
      <div className="glass-card overflow-hidden rounded-3xl">
        {rows.map((r, i) => (
          <div
            key={r.t}
            className="grid grid-cols-[auto_1fr] gap-6 border-b border-border/60 p-6 last:border-b-0 md:grid-cols-[80px_1fr_2fr] md:items-center md:p-8"
          >
            <div className="font-display text-3xl text-gradient-gold md:text-4xl">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-2xl tracking-wide md:text-3xl">{r.t}</h3>
            <p className="col-span-2 text-muted-foreground md:col-span-1">{r.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Quotas() {
  const quotas = [
    {
      tag: "🔥",
      name: "AUGE Master",
      lead: "Maior exposição do evento",
      highlight: true,
      benefits: [
        "Patrocinador principal",
        "Maior destaque visual",
        "Logo no palco e entrada",
        "Naming de espaços",
        "Camarote corporativo",
        "Ativações exclusivas",
        "Totens premium",
      ],
    },
    {
      tag: "🥩",
      name: "Premium",
      lead: "Alta visibilidade e ativação",
      benefits: [
        "Espaço personalizado",
        "Banners internos",
        "Totens exclusivos",
        "Comunicação visual",
        "Ativação de marca",
      ],
    },
    {
      tag: "🚗",
      name: "Mobilidade",
      lead: "Especial para montadoras",
      benefits: [
        "Exposição de veículos",
        "Área exclusiva",
        "Test drive",
        "Conteúdo digital",
        "Experiência com público",
      ],
    },
    {
      tag: "⭐",
      name: "Experience",
      lead: "Interação direta com o público",
      benefits: [
        "Espaço promocional",
        "Sampling",
        "Interação com consumidores",
        "Divulgação institucional",
      ],
    },
    {
      tag: "🤝",
      name: "Apoio",
      lead: "Presença institucional",
      benefits: [
        "Presença de marca",
        "Comunicação institucional",
        "Divulgação digital",
      ],
    },
  ];

  return (
    <Section
      id="cotas"
      eyebrow="Cotas de patrocínio"
      title={<>Escolha o nível de <span className="text-gradient-gold">exposição</span>.</>}
      subtitle="Formatos flexíveis, desenhados para gerar retorno comercial, mídia espontânea e experiência de marca de alto impacto."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quotas.map((q) => (
          <div
            key={q.name}
            className={`relative flex flex-col overflow-hidden rounded-3xl p-8 ${
              q.highlight ? "gold-border" : "glass-card"
            }`}
          >
            {q.highlight && (
              <div className="absolute right-6 top-6 rounded-full bg-fire-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Destaque
              </div>
            )}
            <div className="text-4xl">{q.tag}</div>
            <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Cota
            </div>
            <h3 className="font-display text-4xl leading-tight text-gradient-gold">
              {q.name}
            </h3>
            <p className="mt-1 text-sm text-foreground/80">{q.lead}</p>

            <ul className="mt-6 space-y-3 text-sm">
              {q.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fire" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-bold uppercase tracking-widest transition ${
                q.highlight
                  ? "btn-fire btn-fire-hover"
                  : "gold-border text-gold-soft hover:text-primary"
              }`}
            >
              Solicitar proposta
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Activations() {
  const items = [
    { brand: "Montadoras", tag: "Mobilidade", d: "Mobilidade e lançamentos presentes no maior evento BBQ da região." },
    { brand: "Bebidas", tag: "Consumo", d: "Crie experiências de consumo memoráveis com sampling e ativações." },
    { brand: "Alimentos", tag: "Gastronomia", d: "Coloque sua marca no coração da gastronomia do evento." },
    { brand: "Tecnologia", tag: "Inovação", d: "Conecte sua marca com milhares de consumidores qualificados." },
  ];
  return (
    <Section
      eyebrow="Ativações de marca"
      title={<>Transforme consumidores em <span className="text-gradient-fire">experiências</span>.</>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.brand} className="glass-card rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft">{it.tag}</div>
              <div className="h-px w-16 bg-gold-gradient" />
            </div>
            <h3 className="mt-4 font-display text-4xl text-gradient-gold">{it.brand}</h3>
            <p className="mt-3 text-muted-foreground">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Automotive() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src={carsImg}
          alt="Área automotiva do AUGE BBQ"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.35) saturate(1.15)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.9) 100%)",
          }}
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gradient-fire">
            Exposição de veículos
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Apresente sua marca para <span className="text-gradient-gold">milhares</span> de visitantes.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Uma área dedicada às grandes marcas automotivas — com iluminação especial, totens
            informativos, equipe comercial e experiências diretas com o público consumidor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Veículos premium", "Test drive", "Lançamento", "Equipe comercial", "Área instagramável"].map(
              (t) => (
                <span
                  key={t}
                  className="gold-border rounded-full px-4 py-2 text-xs uppercase tracking-widest text-gold-soft"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="glass-card rounded-3xl p-8">
          <div className="font-display text-2xl text-gradient-gold">
            "Grandes marcas automotivas têm espaço garantido no AUGE BBQ."
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { n: "+10k", l: "Visitantes" },
              { n: "48h", l: "Exposição" },
              { n: "1:1", l: "Contato" },
            ].map((k) => (
              <div key={k.l}>
                <div className="font-display text-4xl text-gradient-fire">{k.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {k.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const bars = [
    { l: "18–24", v: 18 },
    { l: "25–34", v: 34 },
    { l: "35–44", v: 26 },
    { l: "45–54", v: 14 },
    { l: "55+", v: 8 },
  ];
  const interests = [
    { l: "Gastronomia", v: 82 },
    { l: "Música sertaneja", v: 74 },
    { l: "Automotivo", v: 58 },
    { l: "Bebidas premium", v: 66 },
    { l: "Lifestyle", v: 61 },
  ];
  return (
    <Section
      id="publico"
      eyebrow="Perfil do público"
      title={<>Consumidores <span className="text-gradient-fire">qualificados</span> e engajados.</>}
      subtitle="Famílias, empresários, amantes de gastronomia, público sertanejo e compradores potenciais com alto poder de decisão."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card rounded-3xl p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft">Idade</div>
          <div className="mt-6 space-y-4">
            {bars.map((b) => (
              <div key={b.l}>
                <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                  <span>{b.l}</span>
                  <span>{b.v}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-fire-gradient"
                    style={{ width: `${b.v * 2.4}%`, maxWidth: "100%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-3xl p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft">Interesses</div>
          <div className="mt-6 space-y-4">
            {interests.map((b) => (
              <div key={b.l}>
                <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                  <span>{b.l}</span>
                  <span>{b.v}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gold-gradient"
                    style={{ width: `${b.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          { n: "A/B", l: "Classe social" },
          { n: "62%", l: "Decisores de compra" },
          { n: "48h", l: "Tempo médio no evento" },
          { n: "3.4x", l: "Compartilhamento social" },
        ].map((k) => (
          <div key={k.l} className="gold-border rounded-2xl p-6 text-center">
            <div className="font-display text-3xl text-gradient-gold">{k.n}</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {k.l}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const imgs = [heroImg, bbqImg, stageImg, barImg, vipImg, trucksImg];
  return (
    <Section
      eyebrow="Galeria"
      title={<>Uma <span className="text-gradient-gold">produção</span> que gera conteúdo.</>}
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {imgs.map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ minHeight: i === 0 ? 400 : 200 }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    interesse: "Cota Master",
  });

  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(255,106,0,0.25), transparent 70%), linear-gradient(180deg, #080808, #0e0906)",
        }}
      />
      <Embers />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gradient-fire">
              Proposta comercial
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              A sua marca merece estar no <span className="text-gradient-gold">centro</span>{" "}
              dessa experiência.
            </h2>
            <div className="ember-divider my-8 w-40" />
            <div className="glass-card rounded-2xl p-6">
              <Logo className="h-14 w-14" />
              <div className="mt-4 space-y-2 text-sm">
                <div className="font-display text-2xl tracking-wider text-gradient-gold">
                  AUGE BBQ
                </div>
                <div className="text-muted-foreground">17 e 18 de Outubro</div>
                <div className="text-muted-foreground">
                  Estacionamento do Buriti Shopping
                </div>
                <div className="text-muted-foreground">Rio Verde · Goiás</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-card rounded-3xl p-8"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="text-5xl">🔥</div>
                <h3 className="mt-4 font-display text-3xl text-gradient-gold">
                  Solicitação enviada
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Nossa equipe comercial entrará em contato em breve com a apresentação
                  completa.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-3xl text-gradient-gold">
                  Solicitar proposta
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Preencha os dados e receba a apresentação comercial completa.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    { k: "nome", label: "Nome", type: "text" },
                    { k: "empresa", label: "Empresa", type: "text" },
                    { k: "telefone", label: "Telefone", type: "tel" },
                    { k: "email", label: "E-mail", type: "email" },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">
                        {f.label}
                      </label>
                      <input
                        required
                        type={f.type}
                        value={form[f.k as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [f.k]: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                      Interesse
                    </label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {[
                        "Cota Master",
                        "Cota Premium",
                        "Ativação de Marca",
                        "Exposição de Veículos",
                        "Espaço Gastronômico",
                      ].map((opt) => {
                        const active = form.interesse === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setForm({ ...form, interesse: opt })}
                            className={`rounded-xl px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest transition ${
                              active
                                ? "btn-fire text-white"
                                : "gold-border text-gold-soft hover:text-primary"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-fire btn-fire-hover mt-8 w-full rounded-full px-6 py-4 text-sm font-bold uppercase tracking-widest"
                >
                  Solicitar proposta comercial
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <div>
            <div className="font-display tracking-wider text-gradient-gold">AUGE BBQ</div>
            <div className="text-xs">© {new Date().getFullYear()} · Todos os direitos reservados</div>
          </div>
        </div>
        <div className="text-xs uppercase tracking-widest">
          Rio Verde · Goiás · Brasil
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <About />
        <Structure />
        <Opportunities />
        <Quotas />
        <Activations />
        <Automotive />
        <Audience />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
