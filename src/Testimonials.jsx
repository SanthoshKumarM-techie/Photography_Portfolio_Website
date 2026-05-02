import React from 'react'

const marqueeStyles = `
  @keyframes testimonial-scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes testimonial-scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  .testimonial-marquee-left {
    animation: testimonial-scroll-left 42s linear infinite;
  }

  .testimonial-marquee-right {
    animation: testimonial-scroll-right 42s linear infinite;
  }

  .testimonial-marquee-left:hover,
  .testimonial-marquee-right:hover {
    animation-play-state: paused;
  }
`

const sectionClassName = 'border-t border-[#111111] bg-[#0F0F0F] px-6 py-32 lg:px-24'
const wrapperClassName = 'mx-auto max-w-7xl space-y-32'
const titleClassName =
  "font-['Playfair_Display'] text-5xl font-bold italic text-[#C9A96E] md:text-6xl"
const bodyClassName =
  "font-['Poppins'] text-lg font-light leading-relaxed text-[#EAEAEA]/80"

const testimonialSections = [
  {
    title: 'Wedding Photography',
    featuredImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    reviews: [
      {
        name: 'John & Meera',
        category: 'Wedding',
        text: 'We were nervous before the shoot, but he made the entire day feel natural and full of emotion from start to finish.',
      },
      {
        name: 'Aakash & Nila',
        category: 'Wedding',
        text: 'Every important moment was captured beautifully, from the ceremony to the quiet candid moments with our families.',
      },
      {
        name: 'Rohan & Divya',
        category: 'Wedding',
        text: 'The photos feel honest and cinematic at the same time. Looking at them brings us right back to the day.',
      },
      {
        name: 'Harish & Keerthi',
        category: 'Wedding',
        text: 'He blended into the celebration so smoothly that nobody felt watched, yet every meaningful moment was there.',
      },
      {
        name: 'Vikram & Sana',
        category: 'Wedding',
        text: 'The couple portraits felt effortless, and the family coverage was warm, elegant, and incredibly thoughtful.',
      },
      {
        name: 'Arjun & Priyanka',
        category: 'Wedding',
        text: 'We loved how emotional the gallery felt. Nothing looked forced, and every frame carried the mood of the wedding.',
      },
      {
        name: 'Karthik & Asha',
        category: 'Wedding',
        text: 'From the first call to final delivery, everything was professional, calm, and beautifully executed.',
      },
      {
        name: 'Rahul & Janani',
        category: 'Wedding',
        text: 'He understood exactly how to photograph our traditions while still making the images feel modern and timeless.',
      },
    ],
  },
  {
    title: 'Portrait Photography',
    featuredImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop',
    reviews: [
      {
        name: 'Miya',
        category: 'Portrait',
        text: 'I was very camera-shy, but he made me feel completely at ease and the final portraits looked confident and natural.',
      },
      {
        name: 'Priya',
        category: 'Portrait',
        text: 'The shoot felt relaxed and easy. He guided expressions and posture without making anything feel stiff or awkward.',
      },
      {
        name: 'Sneha',
        category: 'Portrait',
        text: 'He understood my personality quickly and turned that into portraits that felt elegant, soft, and very real.',
      },
      {
        name: 'Diya',
        category: 'Portrait',
        text: 'Every frame looked polished, but still looked like me. That balance is exactly what I wanted from the session.',
      },
      {
        name: 'Kavi',
        category: 'Portrait',
        text: 'He brought out expressions I did not even know I could carry on camera. The final images felt effortlessly beautiful.',
      },
      {
        name: 'Riya',
        category: 'Portrait',
        text: 'Lighting, posing, and small details were handled so well. The gallery had a refined editorial quality to it.',
      },
      {
        name: 'Aadhya',
        category: 'Portrait',
        text: 'I usually dislike being photographed, but the whole experience felt comfortable and the portraits changed my mind.',
      },
      {
        name: 'Tara',
        category: 'Portrait',
        text: 'He created such a calm environment that my expressions stayed natural. The results felt intimate and graceful.',
      },
    ],
  },
  {
    title: 'Fashion Photography',
    featuredImage:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop',
    reviews: [
      {
        name: 'Anand',
        category: 'Fashion',
        text: 'Very professional and creative. He knew how to guide poses and make every frame feel premium and editorial.',
      },
      {
        name: 'Arav',
        category: 'Fashion',
        text: 'The mood board came alive perfectly. The final images looked polished, bold, and campaign-ready.',
      },
      {
        name: 'Ananya',
        category: 'Fashion',
        text: 'He understood styling, attitude, and composition in a way that made the entire shoot feel elevated from the start.',
      },
      {
        name: 'Aaradh',
        category: 'Fashion',
        text: 'Every look had its own identity, and the direction was clear enough that I felt confident through the entire session.',
      },
      {
        name: 'Vihaan',
        category: 'Fashion',
        text: 'The framing and lighting brought so much edge to the collection while still keeping the garments as the focus.',
      },
      {
        name: 'Nirva',
        category: 'Fashion',
        text: 'We needed strong visuals for a launch and the results exceeded expectations. The photos looked high-end and intentional.',
      },
      {
        name: 'Akshara',
        category: 'Fashion',
        text: 'He gave excellent direction without overcomplicating things. The workflow felt smooth and the output felt luxury.',
      },
      {
        name: 'Ishan',
        category: 'Fashion',
        text: 'The final set had texture, confidence, and a strong visual rhythm. It felt like a professional brand campaign.',
      },
    ],
  },
  {
    title: 'Event Photography',
    featuredImage:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop',
    reviews: [
      {
        name: 'Krish',
        category: 'Event',
        text: 'Very professional and well-organized. We did not have to worry about anything during the event coverage.',
      },
      {
        name: 'Kriti',
        category: 'Event',
        text: 'He captured the stage moments, guest reactions, and candid details without ever getting in the way.',
      },
      {
        name: 'Kiran',
        category: 'Event',
        text: 'The final gallery told the story of the whole event instead of just documenting it. That made a huge difference.',
      },
      {
        name: 'Kishan',
        category: 'Event',
        text: 'We received a complete set of polished images quickly, and every important highlight was covered beautifully.',
      },
      {
        name: 'Lavanya',
        category: 'Event',
        text: 'He handled a fast-moving event with total calm. The images still felt thoughtful and composed under pressure.',
      },
      {
        name: 'Manoj',
        category: 'Event',
        text: 'From decor shots to speaker moments, everything was covered with consistency and strong attention to detail.',
      },
      {
        name: 'Sanjana',
        category: 'Event',
        text: 'The energy of the evening came through perfectly in the pictures. They felt vibrant, elegant, and complete.',
      },
      {
        name: 'Naveen',
        category: 'Event',
        text: 'He moved through the venue so smoothly that guests stayed comfortable, and the candid images turned out incredible.',
      },
    ],
  },
]

const highlightPhrase = 'made me feel completely at ease'

const renderHighlightedText = (text) => {
  if (!text.includes(highlightPhrase)) {
    return text
  }

  const [before, after] = text.split(highlightPhrase)

  return (
    <>
      {before}
      <span className="text-[#C9A96E]">{highlightPhrase}</span>
      {after}
    </>
  )
}

const TestimonialCard = ({ name, category, text, compact = false }) => (
  <article
    className={`border-l border-[#C9A96E]/30 bg-[#111111]/20 ${
      compact ? 'w-[320px] px-5 py-5 sm:w-[360px] sm:px-6' : 'px-6 py-6 sm:px-8 sm:py-8'
    }`}
  >
    <div className="mb-5 flex items-start gap-4">
      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#EAEAEA]" />

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate font-['Poppins'] text-sm font-medium uppercase tracking-[0.22em] text-[#EAEAEA]">
            {name}
          </h3>
          <span className="font-['Poppins'] text-[10px] font-medium uppercase tracking-[0.28em] text-[#C9A96E]">
            {category}
          </span>
        </div>

        <div className="mt-2 flex gap-1 text-xs text-[#C9A96E]">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>{'\u2605'}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="relative pl-3">
      <span className="absolute left-0 top-0 font-['Playfair_Display'] text-2xl leading-none text-[#C9A96E]">
        {'\u201C'}
      </span>
      <p className={bodyClassName}>
        {renderHighlightedText(text)}
      </p>
    </div>
  </article>
)

const TestimonialSection = ({ title, featuredImage, reviews, reverseScroll = false, delay = '0s' }) => {
  const [featuredReview, ...marqueeReviews] = reviews
  const repeatedReviews = [...marqueeReviews, ...marqueeReviews]
  const marqueeClass = reverseScroll ? 'testimonial-marquee-right' : 'testimonial-marquee-left'

  return (
    <section
      className="space-y-10"
      data-reveal
      data-reveal-type="line-rise"
      data-reveal-delay={delay}
    >
      <h2 className={titleClassName}>
        {title}
      </h2>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.9fr)] lg:items-start">
        <div className="relative flex h-[260px] items-center justify-center overflow-hidden border border-[#C9A96E]/15 bg-[#161616] md:h-[320px]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,169,110,0.08),transparent_45%,rgba(234,234,234,0.03))]" />
          <div className="absolute inset-6 border border-dashed border-[#C9A96E]/25" />
          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A96E]/40 bg-[#C9A96E]/10">
              <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[18px] border-t-[12px] border-b-transparent border-l-[#C9A96E] border-t-transparent" />
            </div>
            <div className="space-y-2">
              <p className="font-['Poppins'] text-xs font-semibold uppercase tracking-[0.42em] text-[#C9A96E]">
                Video Testimonial
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-full">
          <TestimonialCard
            name={featuredReview.name}
            category={featuredReview.category}
            text={featuredReview.text}
          />
        </div>
      </div>

      <div className="overflow-hidden">
        <div className={`flex w-max gap-6 ${marqueeClass}`}>
          {repeatedReviews.map((review, index) => (
            <TestimonialCard
              key={`${title}-${review.name}-${index}`}
              name={review.name}
              category={review.category}
              text={review.text}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  return (
    <section className={sectionClassName}>
      <div className={wrapperClassName}>
        {testimonialSections.map((section, index) => (
          <TestimonialSection
            key={section.title}
            title={section.title}
            featuredImage={section.featuredImage}
            reviews={section.reviews}
            reverseScroll={index % 2 === 0}
            delay={`${index * 0.1}s`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: marqueeStyles }} />
    </section>
  )
}

export default Testimonials
