import { useEffect } from 'react'

const specializations = [
  {
    title: "Wedding Photography",
    desc: "Capturing not just the big moments, but the quiet promises, fleeting glances, and emotions that make your day truly yours.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
  },
  {
    title: "Portrait Photography",
    desc: "Telling your story through natural expressions, subtle details, and the emotions that make you who you are.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200",
  },
  {
    title: "Fashion Photography",
    desc: "Bringing out confidence, attitude, and individuality, turning every frame into a reflection of style and self-expression.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Event Photography",
    desc: "Preserving the energy, emotions, and little in-between moments that come together to make every event unforgettable.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
  },
]

const stats = [
  { label: "Years Experience", value: "08" },
  { label: "Global Awards", value: "12" },
  { label: "Weddings Shot", value: "150+" },
  { label: "Happy Clients", value: "100%" },
]

const brands = [
  "VOGUE",
  "KINFOLK",
  "BRIDES",
  "THE KNOT",
  "HARPER'S BAZAAR",
  "ELLE",
  "WEDDING BELLS",
  "VANITY FAIR",
  "NEW YORK TIMES",
  "GLAMOUR",
  "ROBB REPORT",
  "MARTHA STEWART",
  "STYLE ME PRETTY",
]

const behindTheScenesImages = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
  "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=800",
  "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=800",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
  "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800",
]

const scrollAnimations = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .animate-scroll-left {
    animation: scroll-left 50s linear infinite;
  }
  .animate-scroll-right {
    animation: scroll-right 60s linear infinite;
  }
  .animate-scroll-left:hover,
  .animate-scroll-right:hover {
    animation-play-state: paused;
  }
`

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="overflow-hidden bg-[#0F0F0F] px-6 py-24 font-['Poppins'] md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row lg:items-start lg:gap-24">
          <div
            data-reveal
            data-reveal-type="zoom-left"
            className="relative w-full md:w-1/2 lg:w-5/12"
          >
            <div className="absolute -left-4 -top-4 z-0 h-full w-full border border-[#C9A96E] opacity-20" />
            <div className="relative z-10 overflow-hidden shadow-[20px_20px_0px_0px_rgba(17,17,17,1)]">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
                alt="Alice - Photographer"
                className="h-[650px] w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          <div
            data-reveal
            data-reveal-type="sweep-right"
            className="flex w-full flex-col justify-center md:w-1/2 lg:w-7/12"
          >
            <header className="mb-12">
              <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight italic text-[#C9A96E] md:text-5xl">
                Hey, I am
                <span className="ml-5 italic text-[#C9A96E]">Alice.</span>
              </h2>
            </header>

            <div className="relative space-y-10">
              <p
                data-reveal
                data-reveal-type="line-rise"
                data-reveal-delay="0.15s"
                className="border-l-2 border-[#C9A96E]/30 pl-8 text-lg leading-[1.8] font-light text-[#EAEAEA] opacity-80"
              >
                I find joy in the little things -{" "}
                <span className="font-medium text-[#EAEAEA]">
                  slow mornings, long walks,
                </span>{" "}
                and unhurried conversations. I notice the small details and value
                moments that feel real. If you appreciate genuine connection and
                simple, honest moments, we&apos;ll get along just fine.
              </p>

              <p
                data-reveal
                data-reveal-type="line-rise"
                data-reveal-delay="0.3s"
                className="pl-8 text-lg leading-[1.8] font-light text-[#EAEAEA] opacity-80"
              >
                I believe the most beautiful moments are{" "}
                <span className="font-['Playfair_Display'] text-xl italic text-[#C9A96E]">
                  unplanned
                </span>{" "}
                - quiet smiles, fleeting glances, the ones you&apos;ll miss someday.
                That&apos;s what I look for through my camera. If you want photos that
                feel real and truly like you, we&apos;ll get along just fine - and
                might even forget the camera is there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#111111] bg-[#0F0F0F] px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div data-reveal data-reveal-type="line-rise" className="mb-24 text-center md:text-left">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#C9A96E] md:text-5xl italic">
              What I Spealized with
            </h2>
          </div>

          <div className="space-y-32 md:space-y-48">
            {specializations.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-type={index % 2 === 0 ? 'tilt-up-left' : 'tilt-up-right'}
                className={`flex flex-col items-center gap-12 lg:gap-24 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="group relative w-full md:w-1/2">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-[400px] w-full scale-110 object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-100 group-hover:grayscale-0 lg:h-[500px]"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-4 h-1/2 w-2/3 border border-[#C9A96E]/20 -z-10 ${
                      index % 2 === 0 ? "-right-4" : "-left-4"
                    }`}
                  />
                </div>

                <div className="flex w-full flex-col justify-center md:w-1/2">
                  <h3 className="mb-6 font-['Playfair_Display'] text-3xl font-bold text-[#C9A96E] md:text-5xl italic">
                    {item.title}
                  </h3>
                  <p className="max-w-md font-['Poppins'] text-lg leading-relaxed font-light text-[#EAEAEA] opacity-70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#0F0F0F] py-24 font-['Poppins']">
        <div className="mx-auto mb-32 max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-reveal
                data-reveal-type="pop-spin"
                data-reveal-delay={`${index * 0.1}s`}
                className="group text-center"
              >
                <p className="mb-2 font-['poppins'] text-5xl font-bold text-[#C9A96E] transition-transform duration-500 group-hover:scale-110 md:text-7xl">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#EAEAEA] opacity-60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div data-reveal data-reveal-type="line-rise" className="mb-10 text-center">
            <h2 className="mt-2 font-['Playfair_Display'] text-3xl font-bold italic text-[#C9A96E]">
              Featured & Trusted By
            </h2>
          </div>
          <div
            data-reveal
            data-reveal-type="mask-up"
            className="relative flex overflow-hidden border-y border-[#111111] py-10"
          >
            <div className="flex animate-scroll-right items-center gap-24 whitespace-nowrap">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="cursor-default font-['poppins'] text-2xl font-bold italic uppercase tracking-tighter text-[#EAEAEA] opacity-20 transition-opacity duration-500 hover:opacity-100 md:text-4xl"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div data-reveal data-reveal-type="line-rise" className="mb-10 px-6 text-center">
            <h2 className="mt-2 font-['Playfair_Display'] text-3xl font-bold italic text-[#C9A96E]">
              The Behind the Screens
            </h2>
          </div>
          <div
            data-reveal
            data-reveal-type="mask-up"
            className="relative flex overflow-hidden"
          >
            <div className="flex animate-scroll-left gap-6 whitespace-nowrap">
              {behindTheScenesImages.map((img, index) => (
                <div
                  key={`${img}-${index}`}
                  className="group relative h-[250px] w-[350px] flex-shrink-0 grayscale transition-all duration-1000 ease-in-out hover:grayscale-0 md:h-[300px] md:w-[450px]"
                >
                  <img src={img} alt="BTS" className="h-full w-full rounded-sm object-cover" />
                  <div className="absolute inset-0 bg-[#C9A96E]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-reveal data-reveal-type="cinema-rise" className="mx-auto max-w-5xl px-6 pt-10 text-center">
          <div className="mx-auto mb-10 h-[1px] w-20 bg-[#C9A96E]" />
          <p className="font-['Playfair_Display'] text-3xl font-bold italic leading-tight text-[#EAEAEA] md:text-5xl">
            &ldquo;I don&apos;t just take photos; I curate the{" "}
            <br className="hidden md:block" />
            <span className="text-[#C9A96E]">unspoken legacy</span> of your most
            honest moments.&rdquo;
          </p>
          <p className="mt-8 font-['Poppins'] text-xs font-semibold uppercase tracking-[0.5em] text-[#C9A96E]">
            - Alice Smith
          </p>
        </div>

        <style dangerouslySetInnerHTML={{ __html: scrollAnimations }} />
      </section>

      <section className="border-t border-[#111111] bg-[#0F0F0F] px-6 py-10 text-center">
        <div data-reveal data-reveal-type="cinema-rise" className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-4">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-[#EAEAEA] md:text-5xl">
              Shall we create <br />
              <span className="italic text-[#C9A96E]">something real?</span>
            </h2>
          </div>

          <p className="mx-auto max-w-xl font-['Poppins'] text-lg leading-relaxed font-light text-[#EAEAEA] opacity-60">
            If you feel a connection to my work and the way I see the world, I&apos;d
            love to hear your story. No pressure, just a conversation to see if
            we&apos;re the right fit for each other.
          </p>

          <div className="flex flex-col items-center gap-6 pt-8">
            <a
              href="/contact"
              className="group relative bg-[#C9A96E] px-12 py-5 font-['Poppins'] text-sm font-bold uppercase tracking-widest text-[#0F0F0F] transition-all duration-500 hover:bg-[#EAEAEA]"
            >
              Reach Out
              <div className="absolute -inset-2 scale-90 border border-[#C9A96E]/20 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
            </a>

            <p className="font-['Poppins'] text-[10px] uppercase tracking-[0.3em] text-[#EAEAEA] opacity-40">
              Limited availability for 2026/27
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
