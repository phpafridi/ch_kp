import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ContactCardsSection() {
  return (
    <section className="mx-auto max-w-[1360px]">
      <section className="mt-10 md:mt-5 mb-10 md:mb-28 px-4 md:px-8 lg:px-10">

        {/* Contact Us full width */}
        <ScrollReveal animation="fade-up" delay={0}>
          <div
            className="relative h-[260px] md:h-[367px] text-white border rounded-lg flex flex-col overflow-hidden"
            style={{ backgroundImage: `url('/assets/tiggo8/newtigo8.webp')`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent z-0" />
            <div className="absolute z-10 top-6 left-6 md:top-10 md:left-10">
              <p className="text-2xl md:text-[2.5rem] leading-tight md:leading-[3rem] font-medium text-white mb-2 md:mb-5">Contact Us</p>
              <p className="text-sm md:text-xl leading-5 md:leading-7 font-light text-white/80 mb-3 md:mb-5">We&apos;ll Be Happy to Answer Your Questions.</p>
            </div>
            <div className="absolute z-10 bottom-6 left-6 md:bottom-10 md:left-10">
              <Link href="/contact">
                <button className="relative overflow-hidden h-10 md:h-12 px-6 md:px-8 border rounded-[58px] bg-white text-black hover:text-white hover:border-2 hover:border-white cursor-pointer group">
                  <span className="text-sm md:text-base font-light relative z-10">Contact Us</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-[#181818] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </section>
    </section>
  )
}
