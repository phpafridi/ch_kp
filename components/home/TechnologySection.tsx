import ScrollReveal from '@/components/ui/ScrollReveal'

const driverAssistFeatures = [
  { code: 'TJA',  name: 'Traffic Jam Assist' },
  { code: 'ACC',  name: 'Adaptive Cruise Control' },
  { code: 'AEB',  name: 'Auto Emergency Braking' },
  { code: 'LKA',  name: 'Lane Keep Assist' },
  { code: 'BSD',  name: 'Blind Spot Detection' },
  { code: 'IHC',  name: 'Intelligent High Beam' },
  { code: 'RCTA', name: 'Rear Cross Traffic Alert' },
  { code: 'DOW',  name: 'Door Opening Warning' },
]

const extraFeatures = [
  'Intelligent Speed Limit Assist',
  'Lane Change Assist',
  'Door Opening Warning',
  'Lane Departure Warning',
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

        {/* Chery Driver Assist Card */}
        <ScrollReveal animation="fade-up" delay={150}>
        <div className="md:px-8 lg:px-10">
          <div className="rounded-none md:rounded-[10px] bg-[#181818] overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Left: text + feature icons */}
              <div className="flex-1 px-5 md:px-10 pt-6 md:pt-10 pb-6 md:pb-10">
                {/* Header row */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[1.5rem] md:text-[2rem] font-light text-white">Chery Driver Assist</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/chery-logo.png"
                    alt="Chery Logo"
                    className="h-9 w-9 md:h-12 md:w-12 object-contain opacity-80"
                  />
                </div>

                <h2 className="text-base md:text-2xl font-light text-white mb-2 md:mb-3 mt-4 md:mt-6">Driven by Intelligence</h2>
                <p className="text-sm md:text-base font-light text-white/70 mb-5 md:mb-8 text-justify max-w-xl">
                  Chery Driver Assist is an advanced L2 driver-assistance suite covering 11 intelligent safety scenarios — so you can focus on the joy of driving.
                </p>

                {/* Feature grid — icon/code based, no MG images */}
                <div className="grid grid-cols-4 gap-2 md:gap-3">
                  {driverAssistFeatures.map(f => (
                    <div key={f.code} className="bg-white/5 border border-white/8 rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:bg-white/10 transition-colors">
                      {/* Code circle */}
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-[9px] md:text-[10px] font-bold tracking-wide leading-none">{f.code}</span>
                      </div>
                      <p className="text-white/60 text-[8px] md:text-[10px] leading-tight">{f.name}</p>
                    </div>
                  ))}
                </div>

                {/* Additional features */}
                <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                  {extraFeatures.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                      <span className="text-white/60 text-xs md:text-sm font-light">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Tiggo 8 PHEV car image */}
              <div className="lg:w-[45%] relative min-h-[200px] md:min-h-[240px] lg:min-h-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/tiggo8phev/tiggo8-index.png"
                  alt="Chery Tiggo 8 PHEV — Driver Assist"
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
