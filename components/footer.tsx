import Link from 'next/link';
import { navigation, siteConfig } from '@/lib/site';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            A serviço da minha, da sua, das nossas comunidades. O Instituto Aliança e
            Renovação é uma organização social sem fins lucrativos que promove acolhimento,
            solidariedade e apoio contínuo a famílias em situação de vulnerabilidade.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Navegação
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Contato
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              {siteConfig.addressLine}, {siteConfig.city} - {siteConfig.state}
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-brand-blue">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-brand-blue">
                @iarinstituto
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            Endereço e e-mail ainda podem ser ajustados para os dados oficiais do instituto.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container-shell flex flex-col gap-2 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Instituto Aliança e Renovação. Todos os direitos reservados.</p>
          <p>Site institucional em Next.js, pronto para evoluir com CMS e novas funcionalidades.</p>
        </div>
      </div>
    </footer>
  );
}
