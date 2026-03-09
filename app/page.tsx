import Link from 'next/link';
import { HeartHandshake, GraduationCap, HandPlatter, ArrowRight } from 'lucide-react';
import { getCollection } from '@/lib/markdown';
import { impactStats } from '@/lib/site';
import { SectionHeading } from '@/components/section-heading';
import { MetricCard } from '@/components/metric-card';
import { ProjectCard } from '@/components/project-card';
import { PostCard } from '@/components/post-card';

const impactAreas = [
  {
    title: 'Ação Social',
    description:
      'Promovemos iniciativas solidárias para apoiar famílias e comunidades em situação de vulnerabilidade.',
    icon: HeartHandshake,
  },
  {
    title: 'Educação',
    description:
      'Incentivamos ações educativas que ampliam oportunidades e fortalecem o desenvolvimento social.',
    icon: GraduationCap,
  },
  {
    title: 'Distribuição de Cestas Básicas',
    description:
      'Realizamos campanhas e mobilizações para levar alimento a quem mais precisa.',
    icon: HandPlatter,
  },
];

export default function HomePage() {
  const projects = getCollection('projects').slice(0, 3);
  const posts = getCollection('posts').slice(0, 3);

  return (
    <>
      <section className="bg-hero text-white">
        <div className="container-shell grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85">
              São Paulo • Solidariedade • Educação • Apoio Comunitário
            </span>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Instituto Aliança e Renovação
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              A serviço da minha, da sua, das nossas comunidades. Promovemos solidariedade,
              acolhimento e apoio a famílias em situação de vulnerabilidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projetos"
                className="rounded-full bg-white px-6 py-3 font-semibold text-brand-blue transition hover:bg-slate-100"
              >
                Conheça nossos projetos
              </Link>
              <Link
                href="/como-ajudar"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Como ajudar
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center"
                >
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow="Quem somos"
            title="Uma organização social que transforma cuidado em ação"
            description="O Instituto Aliança e Renovação atua com presença, escuta e apoio direto às comunidades, fortalecendo famílias por meio de ações solidárias e iniciativas que geram oportunidades."
          />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow="Como atuamos"
            title="Nossas principais frentes de atuação"
            description="Trabalhamos para gerar impacto real com ações simples, humanas e consistentes."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {impactAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="card space-y-5">
                  <div className="inline-flex rounded-2xl bg-brand-greenSoft p-4 text-brand-blue">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{area.title}</h3>
                  <p className="leading-7 text-slate-600">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow="Nosso impacto"
            title="Cada ação fortalece uma rede de cuidado e solidariedade"
            description="Esses números ajudam a comunicar resultados e reforçar a confiança de doadores, voluntários, parceiros e comunidade."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {impactStats.map((stat) => (
              <MetricCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell space-y-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Projetos"
              title="Iniciativas que aproximam solidariedade e apoio comunitário"
              description="Projetos desenvolvidos para responder a necessidades imediatas e ampliar o alcance do instituto."
            />
            <Link href="/projetos" className="inline-flex items-center gap-2 font-semibold text-brand-blue">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((item) => (
              <ProjectCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Ações e novidades"
              title="Acompanhe campanhas, histórias e ações recentes"
              description="Um espaço para registrar o que o instituto realiza e compartilhar impacto com a comunidade."
            />
            <Link href="/impacto" className="inline-flex items-center gap-2 font-semibold text-brand-blue">
              Ver notícias <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {posts.map((item) => (
              <PostCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-brand-blue px-8 py-10 text-white shadow-soft sm:px-12 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                  Faça parte
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Sua ajuda fortalece o trabalho do instituto.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/85">
                  Voluntários, parceiros e doadores fazem parte dessa rede de apoio que ajuda o Instituto IAR a cuidar de mais pessoas e ampliar suas ações.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/como-ajudar" className="rounded-full bg-white px-6 py-3 font-semibold text-brand-blue">
                  Quero ajudar
                </Link>
                <Link href="/contato" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
                  Falar com o instituto
                </Link>
              </div>
            </div>
            <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-6 text-white/85">
              <strong>Pronto para evoluir:</strong> o site já pode receber futuramente área de doação via PIX, campanhas especiais e páginas de arrecadação.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
