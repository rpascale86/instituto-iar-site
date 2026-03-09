import Image from 'next/image';
import Link from 'next/link';

export function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Instituto Aliança e Renovação"
    >
      <Image
        src="/logo-iar.png"
        alt="Logo do Instituto Aliança e Renovação"
        width={56}
        height={56}
        className="h-12 w-12 rounded-full object-cover"
        priority
      />

      {withText ? (
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Instituto
          </div>
          <div className="text-base font-bold leading-tight text-slate-900 sm:text-lg">
            Aliança e Renovação
          </div>
        </div>
      ) : null}
    </Link>
  );
}
