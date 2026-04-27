import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

const newsItems = [
  {
    imgSrc: `/assets/mg-binguo/banner/CtymTX.webp`,
    title: 'MG unveils the all-new MG U9 and Binguo EV at Pakistan Auto Show 2025.',
    excerpt: 'MG launched two new vehicles, the MG U9 truck, and the Binguo EV at the Pakistan Auto Show 2025 in Karachi with an overwhelming response from the audience.',
  },
  {
    imgSrc: `/assets/phev/phev-updated.webp`,
    title: 'MG at the 2025 Pakistan Auto Show: Flooded stalls and Exotic cars.',
    excerpt: "MG's display became the main focus for car enthusiasts at the Pakistan Auto Show 2025 in Karachi featuring its latest vehicles along with the MG Cyberster, MG HS PHEV, and the MG4 electric.",
  },
]

export default function NewsSection() {
  return (
    <section className="mx-auto max-w-[1360px]">
      <section>
        <div>
          {/* Header */}
          <div className="px-4 md:px-8 lg:px-10">
            <ScrollReveal animation="fade-up" delay={0}>
            <span className="text-sm md:text-base leading-5 font-medium text-[#ADADAD]">World of MG</span>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2 md:mt-10">
              <div className="flex flex-col">
                <h1 className="font-light text-gray-900 text-[26px] md:text-6xl pb-2 md:pb-6">Latest on Mobility</h1>
                <p className="font-light text-gray-900 text-sm md:text-[1.75rem] max-w-full pb-3 md:pb-6">
                  Stay Updated on the Latest Trends in Automobile Industry.
                </p>
              </div>
              <div className="mb-4 md:mb-0">
                <Link href="/world-of-mg">
                  <button className="relative overflow-hidden h-10 md:h-12 px-6 md:px-8 border border-black rounded-[58px] bg-white text-black hover:text-white cursor-pointer group">
                    <span className="text-sm md:text-base font-light relative z-10">See all News</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-black scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                  </button>
                </Link>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* YouTube featured video */}
          <ScrollReveal animation="fade-up" delay={100}>
          <div className="px-0 md:px-8 lg:px-10 mt-8 md:mt-20">
            <div className="relative w-full pt-[56.25%] md:rounded-[10px] overflow-hidden cursor-pointer">
              <a
                href="https://www.youtube.com/watch?v=dVuHIDXZsO4"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/dVuHIDXZsO4/maxresdefault.jpg"
                  alt="Play MG HS PHEV video"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[56px] h-[40px] md:w-[70px] md:h-[50px] bg-[#FF0000] rounded-[10px] md:rounded-[12px] flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" width="22" height="22">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Featured video caption */}
          <ScrollReveal animation="fade-up" delay={0}>
          <div className="pt-5 md:pt-8 flex flex-col md:flex-row md:justify-between md:gap-52 px-4 md:px-8 lg:px-10">
            <div>
              <h2 className="text-base md:text-2xl font-medium text-black text-justify max-w-[400px] mb-3 md:mb-0">
                THE TRUE HYBRID ELECTRIC is here with a Banger
              </h2>
            </div>
            <div className="flex flex-col gap-3 md:gap-8">
              <p className="text-sm md:text-base leading-6 font-normal text-gray-500 text-justify md:max-w-[600px]">
                MG&apos;s Latest Ad Campaign for the MG HS PHEV Boldly Celebrates Innovation, Showcasing MG&apos;s Leadership in Hybrid Technology.
              </p>
              <Link href="/world-of-mg">
                <button className="flex gap-2 items-center group">
                  <span className="text-sm md:text-base font-normal text-gray-900">Read the Story</span>
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="p1" fill="white"><path d="M0.939453 5.77979L6.59631 0.122926L12.2532 5.77979L6.59631 11.4366L0.939453 5.77979Z" /></mask>
                    <path d="M12.2532 5.77979L13.6674 7.194L15.0816 5.77979L13.6674 4.36557L12.2532 5.77979ZM5.1821 1.53714L10.839 7.194L13.6674 4.36557L8.01053 -1.29129L5.1821 1.53714ZM10.839 4.36557L5.1821 10.0224L8.01053 12.8509L13.6674 7.194L10.839 4.36557Z" fill="black" mask="url(#p1)" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          </ScrollReveal>

          {/* News grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mt-10 md:mt-20 px-0 md:px-8 lg:px-10">
            {newsItems.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
              <div className="relative pb-8 md:pb-20">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    width={664}
                    height={400}
                    className="w-full h-auto border-none md:border md:rounded-[10px] md:border-white"
                  />
                  <div className="mt-5 md:mt-8 px-4 md:px-0">
                    <p className="text-base md:text-2xl font-medium text-black text-justify leading-tight mb-2">{item.title}</p>
                    <div className="flex flex-col max-w-[518px]">
                      <p className="text-sm md:text-base leading-6 font-normal text-gray-500 text-justify">{item.excerpt}</p>
                      <Link href="/world-of-mg" className="mt-5 md:mt-9">
                        <button className="flex gap-2 items-center">
                          <span className="text-sm md:text-base font-normal text-gray-900">Read the Story</span>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="p2" fill="white"><path d="M0.939453 5.77979L6.59631 0.122926L12.2532 5.77979L6.59631 11.4366L0.939453 5.77979Z" /></mask>
                            <path d="M12.2532 5.77979L13.6674 7.194L15.0816 5.77979L13.6674 4.36557L12.2532 5.77979ZM5.1821 1.53714L10.839 7.194L13.6674 4.36557L8.01053 -1.29129L5.1821 1.53714ZM10.839 4.36557L5.1821 10.0224L8.01053 12.8509L13.6674 7.194L10.839 4.36557Z" fill="black" mask="url(#p2)" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
