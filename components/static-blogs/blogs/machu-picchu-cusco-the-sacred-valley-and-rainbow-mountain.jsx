import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  aguasCalientesStays,
  CANONICAL_URL,
  cuscoStays,
  externalResources,
  FEATURE_IMAGE,
  itineraryOverviewRows,
  KEYWORDS,
  limaRestaurants,
  META_DESCRIPTION,
  META_TITLE,
  peruFaqs,
  peruSeasonRows,
  sacredValleyStays,
  SLUG,
} from "@/components/static-blogs/data/peru-itinerary-data";
import {
  BodyParagraph,
  ComparisonTable,
  ExternalLink,
  GuidePage,
  RecommendationBlock,
  SacredValleyHighlightsGrid,
  SectionTitle,
  StatGrid,
  StructuredData,
  TipCallout,
} from "@/components/static-blogs/peru-guide/PeruGuideBlocks";

export const peruItineraryPost = {
  slug: SLUG,
  aliases: [
    "machu-picchu-cusco-the-sacred-valley-and-rainbow-mountain",
    "7-day-peru-itinerary-machu-picchu-cusco-sacred-valley-rainbow-mountain",
  ],
  canonicalUrl: CANONICAL_URL,
  title:
    "7 Day Peru Itinerary: Machu Picchu, Cusco, the Sacred Valley & Rainbow Mountain",
  metaTitle: META_TITLE,
  metaDescription: META_DESCRIPTION,
  keywords: KEYWORDS,
  category: "Peru Travel Guide",
  createdAt: "2026-11-18T12:00:00.000Z",
  updatedAt: "2026-11-18T12:00:00.000Z",
  published: true,
  latestBlogPriority: 4,
  featuredImage: FEATURE_IMAGE,
  excerpt:
    "Discover a luxury 7-day Peru itinerary covering Lima, the Sacred Valley, Machu Picchu, Cusco, and Rainbow Mountain with private guides, scenic trains, and insider travel tips.",
  body: META_DESCRIPTION,
  ContentComponent: MachuPicchuCuscoPeruItinerary,
};

function formatAmericanDate(value, fallback = "November 18, 2026") {
  if (!value) return fallback;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function toIsoDate(value, fallback = "2026-11-18") {
  if (!value) return fallback;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return parsed.toISOString().slice(0, 10);
}

function MachuPicchuCuscoPeruItinerary({ post = peruItineraryPost }) {
  const featuredImage = post.featuredImage || FEATURE_IMAGE;
  const publishedDate = formatAmericanDate(post?.createdAt, "November 18, 2026");
  const updatedDate = formatAmericanDate(post?.updatedAt || post?.createdAt, publishedDate);
  const publishedIso = toIsoDate(post?.createdAt, "2026-11-18");
  const updatedIso = toIsoDate(post?.updatedAt || post?.createdAt, publishedIso);

  return (
    <article className="space-y-6 text-left text-secondary">
      <StructuredData
        post={post}
        featuredImage={featuredImage}
        publishedIso={publishedIso}
        updatedIso={updatedIso}
      />

      {/* Page 1: Intro, Dates, Featured Image, Key Highlights & Overview */}
      <GuidePage>
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
            A 7-Day Peru Travel Guide by Tiki Travel Agency
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-secondary sm:mt-3 sm:text-3xl md:text-4xl">
            7 Day Peru Itinerary: Machu Picchu, Cusco, the Sacred Valley &amp;
            Rainbow Mountain
          </h1>
          <p className="mt-2 text-base font-medium text-secondary/75 sm:text-lg md:text-xl">
            Luxury Stays, Ancient Inca Ruins &amp; Unforgettable Andean
            Adventures
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.1em] text-secondary/70 sm:mt-4">
            <span>
              Published: <time dateTime={publishedIso}>{publishedDate}</time>
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>
              Updated: <time dateTime={updatedIso}>{updatedDate}</time>
            </span>
          </div>
        </header>

        <figure className="mt-5 overflow-hidden border border-slate-200 bg-slate-100 sm:mt-6">
          <div className="relative aspect-[5/3] w-full overflow-hidden bg-secondary">
            <Image
              src={featuredImage.image.url}
              alt={featuredImage.altText}
              title={featuredImage.title}
              fill
              priority
              aria-describedby="peru-feature-image-caption peru-feature-image-description"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px"
              className="object-contain object-center"
            />
          </div>
          <figcaption
            id="peru-feature-image-caption"
            className="border-t border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs italic text-secondary/75 sm:px-4 sm:py-3 sm:text-sm"
          >
            {featuredImage.caption}
          </figcaption>
          <p id="peru-feature-image-description" className="sr-only">
            {featuredImage.description}
          </p>
        </figure>

        <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
          <BodyParagraph>
            Dreaming of visiting Peru? Imagine exploring ancient Inca ruins,
            enjoying incredible food, staying in beautiful mountain resorts,
            shopping in colorful local markets and seeing alpacas grazing in the
            Andes. This seven-day Peru itinerary brings together some of the
            country&apos;s most unforgettable experiences, including the
            legendary Machu Picchu and the spectacular Rainbow Mountain.
          </BodyParagraph>
          <BodyParagraph>
            There are some places you visit, and then there are places that stay
            with you long after you return home. Peru is one of those
            destinations.
          </BodyParagraph>
          <BodyParagraph>
            Peru is a destination that really has it all. From exploring Lima
            and enjoying its incredible food to wandering through the charming
            towns of the Sacred Valley, there is so much to experience. Along
            the way, you&apos;ll discover fascinating history, meet wonderful
            people and see places that make this trip truly special.
          </BodyParagraph>
          <BodyParagraph>
            Of course, seeing Machu Picchu is usually the experience that brings
            travelers to Peru, but there is so much more to enjoy along the
            way.
          </BodyParagraph>
          <BodyParagraph>
            If Peru has been on your bucket list, I recommend allowing seven
            days to explore Lima, Cusco, the Sacred Valley, Machu Picchu and
            Rainbow Mountain. You can experience a wonderful combination of
            luxury, culture, sightseeing and adventure without feeling like your
            entire vacation is spent traveling between destinations.
          </BodyParagraph>
          <BodyParagraph>
            At Tiki Travel Agency, we can help put all the pieces together, from
            your hotels and private guides to train reservations, transportation
            and those special experiences that make a trip memorable.
          </BodyParagraph>
          <BodyParagraph className="font-medium text-secondary">
            Let&apos;s take a look at how I would plan this incredible journey.
          </BodyParagraph>
        </div>

        <div className="mt-6">
          <StatGrid />
        </div>

        <div className="mt-6 space-y-3 sm:mt-8">
          <h3 className="text-left text-base font-semibold text-secondary sm:text-lg md:text-xl">
            7-Day Peru Itinerary at a Glance
          </h3>
          <ComparisonTable
            headings={["Day", "Destination", "Key Experiences"]}
            rows={itineraryOverviewRows}
          />
        </div>
      </GuidePage>

      {/* Page 2: Day 1 (Lima) & Day 2 (Fly to Cusco & Sacred Valley) */}
      <GuidePage>
        <div className="space-y-4">
          <SectionTitle id="day-1-lima">
            Day 1: Lima – Start Your Peru Adventure with Incredible Food
          </SectionTitle>
          <BodyParagraph>
            Your Peruvian adventure begins in Lima, the country&apos;s capital
            and one of the most exciting food destinations in the world.
          </BodyParagraph>
          <BodyParagraph>
            I recommend spending your first night or two in Miraflores. This
            beautiful coastal neighborhood overlooks the Pacific Ocean and has
            everything you could want for a relaxing introduction to Peru:
            lovely hotels, great restaurants, boutique shopping and beautiful
            walking paths along the cliffs.
          </BodyParagraph>
          <BodyParagraph>
            Take a stroll along the Malecón, stop at Parque del Amor and enjoy
            the ocean views. It&apos;s a wonderful way to ease into your
            vacation.
          </BodyParagraph>
          <BodyParagraph>
            One thing you will quickly discover about Peru is that food is a
            huge part of the experience. Peruvian cuisine is internationally
            celebrated, blending indigenous ingredients with Spanish, Japanese
            and Chinese influences. Even if you&apos;re not a serious foodie,
            you&apos;ll want to make time for some memorable meals.
          </BodyParagraph>

          <RecommendationBlock
            title="A few restaurants I would put on your list:"
            items={limaRestaurants}
          />

          <BodyParagraph>
            If you enjoy food experiences, consider taking a private food tour
            or cooking class. Visit a local market, discover ingredients you
            may never have seen before and learn how to prepare traditional
            dishes such as ceviche and lomo saltado.
          </BodyParagraph>
          <BodyParagraph>
            I always think these kinds of experiences give you a better
            appreciation for a destination. You&apos;re not just seeing Peru;
            you&apos;re getting to experience a little of everyday life.
          </BodyParagraph>
        </div>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 sm:mt-10 sm:pt-8">
          <SectionTitle id="day-2-cusco-sacred-valley">
            Day 2: Fly to Cusco &amp; Head to the Beautiful Sacred Valley
          </SectionTitle>
          <BodyParagraph>
            After breakfast, it&apos;s time to head to the Andes! Take a nonstop
            flight from Lima to Cusco, which takes approximately 1 hour and 20
            minutes.
          </BodyParagraph>
          <BodyParagraph>
            Cusco sits at about 11,150 feet above sea level, so altitude is
            something you need to plan for. Some travelers experience headaches,
            fatigue, shortness of breath or nausea when they first arrive.
          </BodyParagraph>

          <TipCallout title="Altitude Acclimatization Tip">
            <BodyParagraph>
              My recommendation is to take it easy, drink plenty of water, avoid
              alcohol and give yourself time to adjust. Rather than spending
              your first night in Cusco, I recommend having a private driver
              take you directly to the Sacred Valley. The elevation is lower,
              and it is a beautiful place to relax and begin adjusting to the
              altitude.
            </BodyParagraph>
          </TipCallout>

          <BodyParagraph>
            There are some wonderful luxury properties here, and I would
            absolutely consider making one of them part of your experience.
          </BodyParagraph>

          <RecommendationBlock
            title="Where to stay in the Sacred Valley:"
            items={sacredValleyStays}
          />

          <BodyParagraph>
            Spend the afternoon enjoying your hotel, taking in the scenery and
            perhaps enjoying a relaxing spa treatment. There is no reason to
            rush. You&apos;re on vacation!
          </BodyParagraph>
        </div>
      </GuidePage>

      {/* Page 3: Day 3 (Sacred Valley) & Day 4 (Scenic Train to Machu Picchu) */}
      <GuidePage>
        <div className="space-y-4">
          <SectionTitle id="day-3-sacred-valley">
            Day 3: Explore the Sacred Valley – Inca Ruins, Markets &amp; Alpacas
          </SectionTitle>
          <BodyParagraph>
            The Sacred Valley is one of my favorite parts of this itinerary
            because it offers such a wonderful mix of history, scenery and local
            culture.
          </BodyParagraph>
          <BodyParagraph>
            Imagine driving through the Andes, passing small villages, terraced
            mountainsides and fields where alpacas and llamas graze. Everywhere
            you look, there is something beautiful to photograph.
          </BodyParagraph>
          <BodyParagraph>
            I recommend a private guided tour so you can explore at your own
            pace and spend more time at the places that interest you.
          </BodyParagraph>

          <div className="space-y-2.5">
            <p className="text-left text-sm font-semibold text-secondary sm:text-base">
              Some of the highlights include:
            </p>
            <SacredValleyHighlightsGrid />
          </div>

          <BodyParagraph>
            I would also make time for a cultural experience. Visit a local
            weaving community and learn how alpaca wool is transformed into
            beautiful handmade scarves, blankets and clothing. You may even have
            the opportunity to feed alpacas and see these adorable animals up
            close.
          </BodyParagraph>
          <BodyParagraph>
            A traditional Andean cooking class or a private lunch featuring
            local ingredients would be another wonderful addition.
          </BodyParagraph>
          <BodyParagraph>
            These are the moments that make a trip to Peru so special. You get
            to experience the history, meet local people and see a side of the
            country that you might otherwise miss.
          </BodyParagraph>
        </div>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 sm:mt-10 sm:pt-8">
          <SectionTitle id="day-4-scenic-train">
            Day 4: A Scenic Train Ride to Machu Picchu
          </SectionTitle>
          <BodyParagraph>
            Today is one of those travel days you&apos;ll remember long after
            your vacation is over.
          </BodyParagraph>
          <BodyParagraph>
            After enjoying the Sacred Valley, head to the train station in
            Ollantaytambo for your journey to Aguas Calientes, the small town at
            the base of Machu Picchu.
          </BodyParagraph>
          <BodyParagraph>
            The train ride follows the beautiful Urubamba River through the
            Andes, with incredible mountain views along the way.
          </BodyParagraph>
          <BodyParagraph>
            If you want to make this experience extra special, consider the
            Hiram Bingham, A Belmond Train. This is a beautiful luxury train
            featuring elegant dining, onboard entertainment and wonderful
            service. It is a lovely way to turn the journey itself into part of
            your vacation.
          </BodyParagraph>
          <BodyParagraph>
            Other options include{" "}
            <ExternalLink href="https://www.perurail.com/">
              PeruRail&apos;s
            </ExternalLink>{" "}
            Vistadome and Vistadome Observatory services, which feature large
            panoramic windows.
          </BodyParagraph>
          <BodyParagraph>
            Once you arrive in Aguas Calientes, check into your hotel and enjoy
            a relaxing evening before tomorrow&apos;s big adventure.
          </BodyParagraph>

          <RecommendationBlock
            title="Where to stay in Aguas Calientes:"
            items={aguasCalientesStays}
          />

          <BodyParagraph>
            I recommend spending the night here rather than trying to visit
            Machu Picchu and return to Cusco all in one day. It makes the
            experience much more enjoyable.
          </BodyParagraph>
        </div>
      </GuidePage>

      {/* Page 4: Day 5 (Machu Picchu) & Day 6 (Cusco) */}
      <GuidePage>
        <div className="space-y-4">
          <SectionTitle id="day-5-machu-picchu">
            Day 5: Machu Picchu – The Moment You&apos;ve Been Waiting For!
          </SectionTitle>
          <BodyParagraph>
            There is something truly magical about finally seeing Machu Picchu
            in person.
          </BodyParagraph>
          <BodyParagraph>
            You&apos;ve probably seen hundreds of photographs, but they really
            don&apos;t do it justice. Surrounded by towering green mountains and
            hidden high in the Andes, this ancient Inca city is one of the most
            extraordinary places you will ever visit.
          </BodyParagraph>
          <BodyParagraph>
            I highly recommend exploring Machu Picchu with a private guide. No
            worries, I have the perfect local guide for you! Having someone
            explain the history, architecture and significance of the different
            structures makes the experience so much more meaningful.
          </BodyParagraph>
          <BodyParagraph>
            You&apos;ll learn about the Inca civilization, see the impressive
            agricultural terraces and discover how this remarkable city was
            constructed in such a remote location.
          </BodyParagraph>

          <TipCallout title="A Very Important Planning Tip">
            <BodyParagraph>
              Machu Picchu tickets must be purchased in advance through the{" "}
              <ExternalLink href="https://tuboleto.cultura.pe/llaqta_machupicchu">
                official government ticketing platform
              </ExternalLink>
              . Tickets are limited, assigned to specific dates and times, and
              require you to select a designated visitor circuit.
            </BodyParagraph>
          </TipCallout>

          <BodyParagraph>
            This is not something I would leave until the last minute! Your
            entrance tickets, train reservations, bus transportation and private
            guide should all be arranged together well ahead of your visit. I
            work directly with highly recommended local guides and tour
            companies.
          </BodyParagraph>
          <BodyParagraph>
            After exploring Machu Picchu, return by train to Ollantaytambo and
            continue by private transportation to Cusco.
          </BodyParagraph>
        </div>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 sm:mt-10 sm:pt-8">
          <SectionTitle id="day-6-cusco">
            Day 6: Cusco – History, Shopping &amp; A Taste of Local Life
          </SectionTitle>
          <BodyParagraph>
            Cusco is such a beautiful city, and I think it deserves time to
            explore beyond just its famous archaeological sites.
          </BodyParagraph>
          <BodyParagraph>
            Once the capital of the Inca Empire, Cusco is filled with
            fascinating history, beautiful colonial architecture, charming
            streets and wonderful little shops.
          </BodyParagraph>

          <RecommendationBlock
            title="For a special stay, consider one of these beautiful properties:"
            items={cuscoStays}
          />

          <BodyParagraph>
            I recommend a private walking tour through the historic center.
            Visit Plaza de Armas, Cusco Cathedral and Qorikancha, the ancient
            Temple of the Sun. You can also visit Sacsayhuamán, an impressive
            Inca archaeological complex overlooking the city.
          </BodyParagraph>
          <BodyParagraph>
            Make sure to leave some time for San Pedro Market. This is one of my
            favorite types of places to explore when traveling. You&apos;ll find
            colorful displays of fresh produce, flowers, spices, traditional
            foods and handmade goods. It&apos;s a wonderful opportunity to shop
            for souvenirs and experience everyday Peruvian life.
          </BodyParagraph>
          <BodyParagraph>
            If you enjoyed the cooking experience in Lima, you may want to try
            another one here. Cusco offers wonderful opportunities for
            traditional cooking classes, chocolate-making experiences and local
            dining.
          </BodyParagraph>
          <BodyParagraph>
            And don&apos;t forget to explore the San Blas neighborhood, filled
            with artisan shops, galleries and charming cafés.
          </BodyParagraph>
        </div>
      </GuidePage>

      {/* Page 5: Day 7 (Rainbow Mountain), Best Time to Visit & Inca Trail */}
      <GuidePage>
        <div className="space-y-4">
          <SectionTitle id="day-7-rainbow-mountain">
            Day 7: Rainbow Mountain – An Incredible Andean Adventure
          </SectionTitle>
          <BodyParagraph>
            If you have seen photographs of Rainbow Mountain, you already know
            how spectacular it looks. Seeing it in person is an entirely
            different experience.
          </BodyParagraph>
          <BodyParagraph>
            Known locally as Vinicunca, Rainbow Mountain is famous for its
            naturally occurring mineral layers that create beautiful stripes of
            red, gold, turquoise and green across the mountainside.
          </BodyParagraph>
          <BodyParagraph>
            Your excursion begins early in the morning with transportation from
            Cusco into the Andes. Along the way, you&apos;ll pass traditional
            mountain communities, beautiful valleys and plenty of opportunities
            to see alpacas and llamas grazing in the countryside.
          </BodyParagraph>
          <BodyParagraph>
            The scenery is incredible, and it&apos;s a wonderful opportunity to
            experience another side of Peru.
          </BodyParagraph>

          <TipCallout title="High-Altitude Preparation (16,500 ft)">
            <BodyParagraph>
              The hike reaches approximately 16,500 feet above sea level, so
              this is definitely an excursion that requires preparation. I
              recommend allowing time to acclimatize before attempting the hike
              and discussing altitude precautions with your physician.
            </BodyParagraph>
          </TipCallout>

          <BodyParagraph>
            A private guide can arrange transportation, meals and the excursion.
            Some local operators also offer horseback or ATVs for a portion of
            the route, although walking may still be necessary.
          </BodyParagraph>
          <BodyParagraph>
            If the hike sounds too strenuous, don&apos;t worry. There are other
            beautiful scenic and cultural excursions in the region that can be
            arranged instead.
          </BodyParagraph>
          <BodyParagraph>
            After your Rainbow Mountain adventure, enjoy your final evening in
            Cusco before traveling home via Lima.
          </BodyParagraph>
        </div>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 sm:mt-10 sm:pt-8">
          <SectionTitle id="best-time-to-visit-peru">
            When Is the Best Time to Visit Peru?
          </SectionTitle>
          <BodyParagraph>
            The best time to visit Cusco, the Sacred Valley and Machu Picchu is
            generally May through September, during the dry season.
          </BodyParagraph>
          <BodyParagraph>
            May and June are wonderful months to visit, with generally favorable
            weather and beautiful scenery. July and August are also popular, but
            this is peak travel season, so hotels, trains and Machu Picchu
            tickets should be reserved well in advance.
          </BodyParagraph>
          <BodyParagraph>
            September and October are also great options if you prefer traveling
            during the shoulder season.
          </BodyParagraph>
          <BodyParagraph>
            November through March is generally the rainy season, with more
            frequent showers. If you are considering hiking the classic Inca
            Trail, remember that it closes every February for annual
            maintenance.
          </BodyParagraph>

          <ComparisonTable
            headings={["Months", "Season", "What to Expect"]}
            rows={peruSeasonRows}
          />
        </div>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 sm:mt-10 sm:pt-8">
          <SectionTitle id="hike-inca-trail">
            Want an Even Bigger Adventure? Hike the Legendary Inca Trail!
          </SectionTitle>
          <BodyParagraph>
            For those who want to make their Peru vacation even more
            adventurous, consider adding the famous Inca Trail.
          </BodyParagraph>
          <BodyParagraph>
            This is one of the world&apos;s most iconic hiking experiences.
            You&apos;ll follow ancient stone pathways through the Andes, passing
            archaeological sites, cloud forests and spectacular mountain
            scenery before reaching the Sun Gate overlooking Machu Picchu.
          </BodyParagraph>
          <BodyParagraph>
            And here&apos;s something many travelers don&apos;t realize: you
            don&apos;t have to carry all your camping equipment yourself.
          </BodyParagraph>
          <BodyParagraph>
            Licensed trekking operators provide a support team, including
            porters who carry tents, shared camping equipment, cooking supplies
            and food. Depending on your package, you&apos;ll also have a
            personal duffel allowance. You generally carry just a daypack with
            your daily essentials.
          </BodyParagraph>
          <BodyParagraph>
            Your trekking team prepares meals, sets up camp and helps make the
            journey more comfortable.
          </BodyParagraph>
          <BodyParagraph>
            Permits are limited and must be arranged through an authorized
            trekking operator well in advance. This experience requires
            additional days beyond our seven-day itinerary, but for adventurous
            travelers, it can be the highlight of the entire trip.
          </BodyParagraph>
          <BodyParagraph>
            Again no worries! Tiki Travel Agency has you covered with hiring a
            trekking team. I work with the perfect tour company.
          </BodyParagraph>
        </div>
      </GuidePage>

      {/* Page 6: FAQs, Official Resources & Start Planning CTA */}
      <GuidePage>
        <div className="space-y-4">
          <SectionTitle id="peru-faq">
            Frequently Asked Questions About Traveling to Peru
          </SectionTitle>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {peruFaqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-slate-200 bg-slate-50 p-3 text-left sm:p-4"
              >
                <h3 className="text-base font-semibold leading-snug text-secondary sm:text-lg">
                  {faq.question}
                </h3>
                <BodyParagraph className="mt-2">{faq.answer}</BodyParagraph>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 sm:mt-10 sm:pt-8">
          <SectionTitle id="start-planning-peru">
            Let&apos;s Start Planning Your Peru Adventure!
          </SectionTitle>
          <BodyParagraph>
            Peru is one of those destinations that offers a little bit of
            everything. You can spend the morning exploring ancient Inca ruins,
            enjoy an incredible local lunch, shop for handmade alpaca textiles in
            a traditional market and end the day surrounded by the beautiful
            mountains of the Andes.
          </BodyParagraph>
          <BodyParagraph>
            And of course, standing in front of Machu Picchu is an experience
            you will never forget.
          </BodyParagraph>
          <BodyParagraph>
            Whether you prefer a luxurious getaway, an adventure-filled vacation
            or a combination of both, there are so many ways to make this trip
            your own.
          </BodyParagraph>
          <BodyParagraph>
            At Tiki Travel Agency, we would love to help you plan it. We can
            coordinate your hotels, flights, private transfers, local guides,
            excursions, train reservations and advance entrance tickets so you
            can spend your time enjoying Peru rather than worrying about the
            details.
          </BodyParagraph>
          <BodyParagraph className="font-semibold text-secondary">
            Have Peru on your bucket list? Let&apos;s make it happen! Contact
            Tiki Travel Agency and let&apos;s start planning your unforgettable
            journey to Machu Picchu.
          </BodyParagraph>

          <div className="border border-slate-200 bg-slate-50 px-3 py-4 text-left sm:px-5 sm:py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
              Helpful Peru Travel Planning Resources
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 sm:gap-2.5 sm:text-base">
              {externalResources.map((resource) => (
                <li key={resource.href} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <ExternalLink href={resource.href}>
                    {resource.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border border-primary bg-primary/10 px-4 py-5 text-center sm:px-6 sm:py-7">
            <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-secondary sm:text-2xl">
              Plan Your 7-Day Peru Adventure
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-secondary/85 sm:mt-3 sm:text-base sm:leading-7">
              Ready to experience Machu Picchu, Cusco, the Sacred Valley, and
              Rainbow Mountain? Let Tiki Travel Agency customize every hotel,
              private guide, train ride, and entrance ticket for a seamless
              Peruvian getaway.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-5 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary sm:text-base"
              >
                Contact Tiki Travel Agency
              </Link>
              <Link
                href="/vacation-destinations"
                className="inline-block border border-secondary px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white sm:text-base"
              >
                Explore Destinations
              </Link>
            </div>
            <p className="mt-3 text-xs font-semibold text-primary sm:mt-4 sm:text-sm">
              www.tikitravelagency.com
            </p>
          </div>
        </div>
      </GuidePage>
    </article>
  );
}

export default MachuPicchuCuscoPeruItinerary;
