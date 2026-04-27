import ScrollReveal from '@/components/ui/ScrollReveal'

const pilotFeatures = [
  { img: '/assets/mg-pilot-imgs/tja.webp', code: 'TJA', name: 'Traffic Jam Assist' },
  { img: '/assets/mg-pilot-imgs/acc.webp', code: 'ACC', name: 'Adaptive Cruise Control' },
  { img: '/assets/mg-pilot-imgs/aeb.webp', code: 'AEB', name: 'Active Emergency Braking' },
  { img: '/assets/mg-pilot-imgs/lka.webp', code: 'LKA', name: 'Lane Keep Assist' },
  { img: '/assets/mg-pilot-imgs/bsm.webp', code: 'BSM', name: 'Blind Spot Detection' },
  { img: '/assets/mg-pilot-imgs/ihbc.webp', code: 'IHBC', name: 'Intelligent High Beam' },
  { img: '/assets/mg-pilot-imgs/rta.webp', code: 'RTA', name: 'Rear Cross Traffic Alert' },
  { img: '/assets/mg-pilot-imgs/sas.webp', code: 'SAS', name: 'Driver Attention Alert' },
]

export default function TechnologySection() {
  return (
    <div className="mx-auto max-w-[1360px]">
      <div className="pt-6 md:pt-16 pb-6 md:pb-16">

        {/* Header */}
        <ScrollReveal animation="fade-up" delay={0}>
        <div className="px-4 md:px-8 lg:px-10 mb-6 md:mb-14">
          <span className="text-xs md:text-base leading-5 font-medium text-[#ADADAD]">TECHNOLOGY</span>
          <p className="font-light text-gray-900 mt-3 md:mt-4 mb-3 md:mb-6 text-[26px] md:text-6xl">Experience Technology</p>
          <p className="font-light text-gray-700 text-sm md:text-2xl max-w-3xl text-justify">
            Smart safety keeps an eye out when you&apos;re enjoying the ride, while seamless connectivity keeps you plugged in without lifting a finger. It&apos;s not just driving — it&apos;s a front-row seat to the future.
          </p>
        </div>
        </ScrollReveal>

        {/* MG Pilot Card */}
        <ScrollReveal animation="fade-up" delay={150}>
        <div className="md:px-8 lg:px-10">
          <div className="rounded-none md:rounded-[10px] bg-[#181818] overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Left: text + feature icons */}
              <div className="flex-1 px-5 md:px-10 pt-6 md:pt-8 pb-6 md:pb-8">
                {/* Header row */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[1.5rem] md:text-[2rem] font-light text-white">MG Pilot</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/mg-logo-png.png"
                    alt="MG Logo"
                    className="h-9 w-9 md:h-12 md:w-12 object-contain opacity-80"
                  />
                </div>

                <h2 className="text-base md:text-2xl font-light text-white mb-2 md:mb-3 mt-4 md:mt-6">Driven by Safety</h2>
                <p className="text-sm md:text-base font-light text-white/70 mb-5 md:mb-8 text-justify max-w-xl">
                  MG Pilot is an advanced driver-assistance suite that gives you intelligent support across 11 safety scenarios — so you can focus on the joy of driving.
                </p>

                {/* Feature grid — 4-col on mobile too but smaller */}
                <div className="grid grid-cols-4 gap-2 md:gap-3">
                  {pilotFeatures.map(f => (
                    <div key={f.code} className="bg-white/5 rounded-lg md:rounded-xl p-2 md:p-3 text-center hover:bg-white/10 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.img} alt={f.name} className="w-full h-10 md:h-16 object-contain mb-1 md:mb-2 mx-auto" />
                      <p className="text-white text-[9px] md:text-xs font-medium">{f.code}</p>
                      <p className="text-white/50 text-[8px] md:text-[10px] mt-0.5 leading-tight hidden sm:block">{f.name}</p>
                    </div>
                  ))}
                </div>

                {/* Additional features */}
                <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                  {[
                    'Intelligent Speed Limit Assist',
                    'Lane Change Assist',
                    'Door Opening Warning',
                    'Lane Departure Warning',
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                      <span className="text-white/60 text-xs md:text-sm font-light">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: large car image — hidden on small mobile, shown from sm up */}
              <div className="lg:w-[45%] relative min-h-[200px] md:min-h-[240px] lg:min-h-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/phev/phev-updated.webp"
                  alt="MG Pilot Car"
                  className="w-full h-full object-cover object-center min-h-[200px] md:min-h-[240px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-transparent to-transparent lg:block hidden" />
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
