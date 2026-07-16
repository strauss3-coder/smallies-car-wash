import { site } from '@/data/site';

/** Embedded Google Map framed on the Ben Fleur Boulevard node. */
export function GoogleMap({ className = '' }: { className?: string }) {
  const q = encodeURIComponent(site.location.mapsQuery);
  return (
    <div className={`overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <iframe
        title={`Map to ${site.name}`}
        src={`https://maps.google.com/maps?q=${q}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        className="h-full min-h-[320px] w-full border-0 grayscale-[0.15]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
