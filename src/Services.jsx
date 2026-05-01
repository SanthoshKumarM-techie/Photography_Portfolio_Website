const serviceButtons = ['Gallery', 'Package', 'Book']

const services = [
  {
    title: 'Wedding Photography',
    description: [
      'Not just photos, but the feeling of your wedding day preserved forever - every glance, every tear, every quiet moment you did not even realize was happening.',
      'Starting from Rs.20,000 with flexible packages tailored to your celebration. Full-day coverage, edited photos, and timely delivery - all handled seamlessly.',
    ],
    statLabel: 'Weddings',
    statValue: '100+',
    contentOrder: '',
    galleryOrder: '',
    revealType: 'tilt-up-left',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
        alt: 'Wedding Detail',
        className: 'row-span-2',
      },
      {
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
        alt: 'Wedding Couple',
        className: 'h-[220px]',
      },
      {
        src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800',
        alt: 'Wedding Emotion',
        className: 'h-[360px]',
      },
    ],
  },
  {
    title: 'Portrait Photography',
    description: [
      'More than just a photo - a reflection of who you are, captured in a way that feels real, confident, and completely you.',
      'Flexible sessions with guidance to help you feel comfortable and confident. Professionally edited portraits delivered on time, ready to share or use.',
    ],
    statLabel: 'Individuals',
    statValue: '100+',
    contentOrder: 'order-2 lg:order-1',
    galleryOrder: 'order-1 lg:order-2',
    revealType: 'tilt-up-right',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800',
        alt: 'Portrait Professional',
        className: 'h-[360px]',
      },
      {
        src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800',
        alt: 'Portrait Depth',
        className: 'row-span-2',
      },
      {
        src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800',
        alt: 'Portrait Candid',
        className: 'h-[220px]',
      },
    ],
  },
  {
    title: 'Fashion Photography',
    description: [
      'More than just visuals - creating striking imagery that defines your style and makes your brand stand out instantly.',
      'Relaxed sessions with full guidance, so you feel comfortable in front of the camera. High-quality edited portraits delivered quickly and ready to use.',
    ],
    statLabel: 'Fashions',
    statValue: '100+',
    contentOrder: '',
    galleryOrder: '',
    revealType: 'tilt-up-left',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800',
        alt: 'High Fashion Editorial',
        className: 'row-span-2',
      },
      {
        src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800',
        alt: 'Fashion Detail',
        className: 'h-[220px]',
      },
      {
        src: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800',
        alt: 'Model Pose',
        className: 'h-[360px]',
      },
    ],
  },
  {
    title: 'Event Photography',
    description: [
      'Capturing the energy, emotions, and key moments of your event - so every highlight lives on long after it ends.',
      'Flexible coverage for events of all sizes with quick turnaround. High-quality edited photos delivered, ready to share and promote.',
    ],
    statLabel: 'Events',
    statValue: '100+',
    contentOrder: 'order-2 lg:order-1',
    galleryOrder: 'order-1 lg:order-2',
    revealType: 'tilt-up-right',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
        alt: 'Event Energy',
        className: 'h-[360px]',
      },
      {
        src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800',
        alt: 'Main Event Moment',
        className: 'row-span-2',
      },
      {
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800',
        alt: 'Event Atmosphere',
        className: 'h-[220px]',
      },
    ],
  },
]

const sectionClassName = 'border-t border-[#111111] bg-[#0F0F0F] px-6 py-32 lg:px-24'
const gridClassName = 'grid grid-cols-1 items-center gap-16 lg:grid-cols-2'
const galleryClassName = 'grid h-[600px] grid-cols-2 gap-4'
const imageClassName =
  'h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110'
const contentClassName = 'space-y-8'
const copyClassName =
  "space-y-6 font-['Poppins'] text-lg font-light leading-relaxed text-[#EAEAEA]/80"
const buttonClassName =
  "bg-[#C9A96E]/80 px-6 py-3 font-['Poppins'] text-xs font-bold uppercase tracking-widest text-[#0F0F0F] transition-all duration-300 hover:bg-[#C9A96E]"

function Services() {
  return (
    <>
      {services.map((service) => (
        <section key={service.title} className={sectionClassName}>
          <div className="mx-auto max-w-7xl">
            <div className={gridClassName}>
              <div
                className={`${galleryClassName} ${service.galleryOrder}`.trim()}
                data-reveal
                data-reveal-type={service.revealType}
              >
                {service.gallery.map((image) => (
                  <div
                    key={image.alt}
                    className={`group relative overflow-hidden ${image.className}`.trim()}
                  >
                    <img src={image.src} alt={image.alt} className={imageClassName} />
                  </div>
                ))}
              </div>

              <div
                className={`${contentClassName} ${service.contentOrder}`.trim()}
                data-reveal
                data-reveal-type="line-rise"
              >
                <h2 className="font-['Playfair_Display'] text-5xl font-bold italic text-[#C9A96E] md:text-6xl">
                  {service.title}
                </h2>

                <div className={copyClassName}>
                  {service.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6">
                  <div className="border-r border-[#C9A96E]/20 pr-8">
                    <p className="font-['Poppins'] text-3xl font-bold text-[#C9A96E]">
                      {service.statValue}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-[#EAEAEA]/40">
                      {service.statLabel}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    {serviceButtons.map((buttonLabel) => (
                      <button key={buttonLabel} className={buttonClassName}>
                        {buttonLabel}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Services
