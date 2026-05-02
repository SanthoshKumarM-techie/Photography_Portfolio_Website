import React from 'react'

const contactDetails = [
  {
    label: 'Location',
    value: ['24-3,', 'Gandi Nagar,', 'Chennai - 600028'],
  },
  {
    label: 'Social Media',
    value: ['Instagram', 'LinkedIn', 'Facebook'],
  },
  {
    label: 'Email',
    value: ['clickflick@gmail.com'],
  },
  {
    label: 'Phone',
    value: ['9876543210'],
  },
]

const inputClassName =
  "w-full border border-[#C9A96E]/20 bg-transparent px-6 py-4 font-['Poppins'] text-lg font-light leading-relaxed text-[#EAEAEA]/80 outline-none transition-colors duration-300 placeholder:text-[#EAEAEA]/35 focus:border-[#C9A96E]"

const sectionClassName = 'border-t border-[#111111] bg-[#0F0F0F] px-6 py-32 lg:px-24'
const gridClassName = 'grid grid-cols-1 items-start gap-16 lg:grid-cols-2'
const copyClassName =
  "space-y-6 font-['Poppins'] text-lg font-light leading-relaxed text-[#EAEAEA]/80"
const buttonClassName =
  "bg-[#C9A96E]/80 px-6 py-4 font-['Poppins'] text-xs font-bold uppercase tracking-widest text-[#0F0F0F] transition-all duration-300 hover:bg-[#C9A96E]"

function Contact() {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl">
        <div className={gridClassName}>
          <div className="space-y-8" data-reveal data-reveal-type="line-rise">
            <header className="space-y-8">
              <h1 className="font-['Playfair_Display'] text-5xl font-bold italic text-[#C9A96E] md:text-6xl">
                Let&apos;s Create Something Beautiful Together
              </h1>

              <div className={copyClassName}>
                <p>
                  Share your story, the kind of shoot you&apos;re planning, and the mood
                  you want to preserve. I&apos;ll reply within 24 hours with the next
                  steps and availability.
                </p>
                <p>
                  Limited slots are open for upcoming bookings, so reaching out early
                  is the best way to reserve your preferred date.
                </p>
              </div>
            </header>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="border-r border-[#C9A96E]/20 pr-8">
                <p className="font-['Poppins'] text-3xl font-bold text-[#C9A96E]">
                  24 HRS
                </p>
                <p className="text-[10px] uppercase tracking-widest text-[#EAEAEA]/40">
                  Response Time
                </p>
              </div>

              <div>
                <p className="font-['Playfair_Display'] text-2xl italic text-[#C9A96E]">
                  Limited Slots Available
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <div key={item.label} className="space-y-4 border-l border-[#C9A96E]/20 pl-5">
                  <h2 className="font-['Poppins'] text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A96E]">
                    {item.label}
                  </h2>

                  <div className="space-y-2">
                    {item.value.map((entry) => (
                      <p
                        key={entry}
                        className="font-['Poppins'] text-lg font-light leading-relaxed text-[#EAEAEA]/80 transition-colors duration-300 hover:text-[#EAEAEA]"
                      >
                        {entry}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="border border-[#C9A96E]/15 bg-[#111111]/30 p-8 shadow-[0_0_0_1px_rgba(201,169,110,0.05)] md:p-12"
            data-reveal
            data-reveal-type="tilt-up-right"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input type="text" placeholder="Name" className={inputClassName} />
                <input type="email" placeholder="Email" className={inputClassName} />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input type="tel" placeholder="Phone" className={inputClassName} />
                <input type="text" placeholder="Shoot Type" className={inputClassName} />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input type="text" placeholder="Event Date" className={inputClassName} />
                <input type="text" placeholder="Location" className={inputClassName} />
              </div>

              <textarea
                placeholder="Tell me about your vision"
                rows="7"
                className={`${inputClassName} resize-none py-5`}
              />

              <button type="submit" className={`${buttonClassName} w-full`}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
