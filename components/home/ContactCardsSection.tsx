import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ContactCardsSection() {
  return (
    <section className="mx-auto max-w-[1360px]">
      <section className="mt-10 md:mt-5 mb-10 md:mb-28 px-4 md:px-8 lg:px-10">

        {/* Dealer locator */}
        <ScrollReveal animation="fade-up" delay={0}>
        <div
          className="relative h-[260px] md:h-[367px] text-white border rounded-lg flex flex-col overflow-hidden mb-5 md:mb-8"
          style={{ backgroundImage: `url('/assets/Find-your-dealer-Banner2.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="absolute z-10 top-6 left-6 md:top-10 md:left-10">
            <p className="text-2xl md:text-[2.5rem] leading-tight md:leading-[3rem] font-medium text-white mb-2 md:mb-5">Dealer Locator</p>
            <p className="text-sm md:text-xl leading-5 md:leading-7 font-medium text-white mb-3 md:mb-5">Find the Nearest Brand Store or Service Point.</p>
          </div>
          <div className="absolute z-10 bottom-6 left-6 md:bottom-10 md:left-10">
            <Link href="/dealer-locator">
              <button className="relative overflow-hidden h-10 md:h-12 px-6 md:px-8 border rounded-[58px] bg-white text-black hover:text-white hover:border-2 hover:border-white cursor-pointer group">
                <span className="text-sm md:text-base font-light relative z-10">Search</span>
                <span className="absolute top-0 left-0 w-full h-full bg-[#181818] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </button>
            </Link>
          </div>
        </div>
        </ScrollReveal>

        {/* Become dealer + Contact us */}
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-[1.5fr_1fr]">
          {[
            {
              title: 'Become a Dealer',
              body: 'Interested in Joining Our Professional Network? Get in Touch',
              href: '/dealer',
              cta: 'Become a Dealer',
              bg: `/assets/Find-your-dealer-Banner2.webp`,
            },
            {
              title: 'Contact Us',
              body: "We'll Be Happy to Answer Your Questions.",
              href: '/contact',
              cta: 'Contact Us',
              bg: `/assets/MG_LP_Desk_HeroHeader_768_br.webp`,
            },
          ].map((card, idx) => (
            <ScrollReveal key={card.title} animation="fade-up" delay={idx * 120}>
            <div
              className="relative h-[240px] md:h-[457px] text-white border rounded-lg flex flex-col overflow-hidden"
              style={{ backgroundImage: `url('${card.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/30 z-0" />
              <div className="absolute z-10 top-6 left-6 md:top-10 md:left-10">
                <p className="text-xl md:text-[2.5rem] leading-tight md:leading-[3rem] font-medium text-white mb-2 md:mb-5">{card.title}</p>
                <p className="text-sm md:text-xl leading-5 md:leading-7 font-medium text-white mb-2">{card.body}</p>
              </div>
              <div className="absolute z-10 bottom-6 left-6 md:bottom-10 md:left-10">
                <Link href={card.href}>
                  <button className="relative overflow-hidden h-10 md:h-12 px-6 md:px-8 border rounded-[58px] bg-white text-black hover:text-white hover:border-2 hover:border-white cursor-pointer group">
                    <span className="text-sm md:text-base font-light relative z-10">{card.cta}</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-[#181818] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                  </button>
                </Link>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </section>
    </section>
  )
}
