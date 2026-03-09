import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { ContactForm } from '@/components/contact-form';
import { siteConfig } from '@/lib/site';

export default function ContatoPage() {
  const mapsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    'https://www.google.com/maps?q=Vila%20Mariana%20S%C3%A3o%20Paulo&output=embed';

  return (
    <>
      <PageHero
        title="Contato"
        description="Entre em contato para parcerias, voluntariado, doações, dúvidas institucionais ou apoio comunitário."
      />

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="card space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Canais institucionais</h2>
              <p className="text-slate-600">
                E-mail:{' '}
                <a className="text-brand-blue" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-slate-600">
                WhatsApp:{' '}
                <a
                  className="text-brand-blue"
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p className="text-slate-600">
                Endereço provisório: {siteConfig.addressLine}, {siteConfig.city} - {siteConfig.state}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={siteConfig.instagram}
                  target="_blank"
                  className="rounded-full bg-brand-greenSoft px-4 py-2 font-medium text-brand-blue"
                >
                  Instagram @iarinstituto
                </Link>
                <Link
                  href={siteConfig.facebook}
                  target="_blank"
                  className="rounded-full bg-brand-greenSoft px-4 py-2 font-medium text-brand-blue"
                >
                  Facebook
                </Link>
              </div>
              <p className="text-xs text-slate-400">
                E-mail e endereço podem ser substituídos pelos dados oficiais quando estiverem disponíveis.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <iframe
                src={mapsUrl}
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da região de São Paulo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
