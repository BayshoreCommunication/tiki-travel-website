import Image from "next/image";
import React from "react";

const FEATURE_IMAGE = {
  image: {
    url: "/assets/static-blogs/japan-cruise-land-tour-mount-fuji-kyoto-travel.webp",
  },
  altText:
    "Traveler enjoying a Japan cruise with Mount Fuji views beside a Kyoto cultural land tour scene",
  title: "Japan Cruise and Kyoto Land Tour Travel Experience",
  description:
    "Scenic Japan travel experience featuring a luxury cruise with Mount Fuji views and a cultural Kyoto land tour with traditional temples and historic streets, offered by TIKI Travel Agency.",
  caption:
    "Explore Japan through breathtaking cruises and unforgettable Kyoto cultural tours",
};

const META_DESCRIPTION =
  "Planning your Japan trip? Compare cruise vs land tour options and find out which travel style delivers the best experience for your family.";

export const japanCruiseOrLandTourPost = {
  slug: "japan-cruis-or-land-tour",
  title: "Japan Cruise or Land Tour?",
  metaTitle: "Japan Cruise vs Land Tour: Best for You",
  metaDescription: META_DESCRIPTION,
  category: "Japan Travel Guide",
  createdAt: "2026-05-17T00:00:00.000Z",
  published: true,
  latestBlogPriority: 1,
  featuredImage: FEATURE_IMAGE,
  excerpt:
    "Japan is one of the most fascinating and unforgettable destinations in the world, but it is not a beginner do-it-yourself destination. Compare cruise and land tour options for your first Japan trip.",
  body: META_DESCRIPTION,
  ContentComponent: JapanCruiseOrLandTour,
};

const cruiseLandRows = [
  ["Accommodation", "Unpack once. The ship is your hotel", "Multiple hotels, different each city"],
  ["Transportation", "The cruise ship handles city transfers", "Shinkansen, local trains, taxis"],
  ["Pacing", "Relaxed, organized port days", "Flexible. Fast or slow, as you like"],
  ["Cultural Depth", "Highlights and shore excursions", "Deep neighborhood immersion"],
  ["Food Experience", "Ship dining plus port tastings", "Full access to Japan's food culture"],
  ["Best For", "Families, retirees, first-timers", "Foodies, adventurers, culture seekers"],
  ["Physical Demand", "Low. Ship amenities available", "Walking, train stations"],
  ["Cost Structure", "All-inclusive per night", "Pay as you go"],
];

const foodCultureRows = [
  ["Local Restaurants", "Limited to port hours", "Full access any time, any neighborhood"],
  ["Nightlife", "Ship entertainment", "Tokyo bars, karaoke, themed cafes"],
  ["Regional Cuisine", "Introduction level", "Region-by-region deep dives"],
  ["Cultural Activities", "Organized excursions", "Spontaneous and independent"],
  ["Hidden Gems", "Harder to discover", "Wander off the beaten path freely"],
  ["Seasonal Festivals", "Depends on schedule", "Plan your trip around them"],
  ["Shopping Districts", "Port areas only", "Ginza, Akihabara, Nishiki Market and more"],
  ["Local Interaction", "Brief shore encounters", "Days spent in neighborhoods"],
];

const cruiseDestinations = [
  {
    title: "Nagasaki",
    description:
      "One of Japan's most historically important cities - beautiful waterfront surrounded by mountains.",
    points: [
      "Peace Park",
      "Atomic Bomb Museum",
      "Glover Garden",
      "European-influenced architecture",
      "Scenic harbor views",
    ],
  },
  {
    title: "Kagoshima",
    description:
      "Famous for the active Sakurajima volcano. Considered one of Japan's most scenic cruise ports.",
    points: [
      "Sakurajima volcano ferry",
      "Volcanic foot baths",
      "Local ramen shops",
      "Scenic viewpoints",
      "Tenmonkan shopping district",
    ],
  },
  {
    title: "Shimizu",
    description:
      "Offers some of the best views of Mount Fuji. It is a highlight on any Japan cruise itinerary.",
    points: [
      "Mt. Fuji sightseeing",
      "Tea plantations",
      "Traditional countryside scenery",
      "Nihondaira Plateau",
    ],
  },
  {
    title: "Busan, South Korea",
    description:
      "Many Japan cruises include Busan, a vibrant coastal city, as a bonus destination.",
    points: [
      "Korean street food",
      "Gamcheon Culture Village",
      "Haeundae Beach",
      "Coastal train rides",
      "Korean BBQ experiences",
    ],
  },
];

const landDestinations = [
  {
    title: "Tokyo",
    description:
      "One of the most exciting cities in the world. It offers endless entertainment for every age group.",
    points: [
      "Shibuya Crossing",
      "Tokyo Disney Resort",
      "teamLab immersive museums",
      "Senso-ji Temple",
      "Akihabara anime district",
      "Luxury shopping in Ginza",
      "Shinjuku nightlife",
    ],
  },
  {
    title: "Hakone",
    description:
      "Known for relaxation, nature, and traditional Japanese experiences. A peaceful contrast to Tokyo's energy.",
    points: [
      "Ryokan stays",
      "Private onsens",
      "Views of Mount Fuji",
      "Lake Ashi cruises",
      "Hakone Ropeway",
      "Kaiseki dining",
    ],
  },
  {
    title: "Kyoto",
    description:
      "The cultural heart of Japan is filled with temples, shrines, gardens, and traditional streets.",
    points: [
      "Fushimi Inari Shrine",
      "Kiyomizu-dera Temple",
      "Gion district",
      "Tea ceremonies",
      "Bamboo Forest",
      "Traditional Japanese cuisine",
    ],
  },
  {
    title: "Osaka",
    description: "Energetic, friendly, and famous for food.",
    points: [
      "Dotonbori street food",
      "Osaka Castle",
      "Universal Studios Japan",
      "Osaka Aquarium Kaiyukan",
      "Kuromon Market",
    ],
  },
];

const cruiseBestFor = [
  "You prefer convenience and simplicity",
  "You want less transportation stress",
  "Traveling with young children",
  "You prefer unpacking once",
  "You enjoy organized excursions",
  "You want a more relaxed pace",
];

const landBestFor = [
  "Cultural immersion is your goal",
  "Food experiences are important to you",
  "You enjoy independent exploration",
  "You want nightlife and entertainment",
  "Bullet train travel is on your bucket list",
  "You enjoy flexibility and adventure",
];

function GuidePage({ children }) {
  return (
    <section className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/75 sm:px-6">
        <span>Japan Travel Guide</span>
        <span>Tiki Travel Agency</span>
      </div>
      <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="border-l-4 border-primary pl-4 text-2xl font-semibold leading-tight text-secondary md:text-3xl">
      {children}
    </h2>
  );
}

function StatGrid() {
  const stats = [
    ["#1", "Top Bucket List Destination", "in Asia for global travelers"],
    ["26", "UNESCO World Heritage Sites", "temples, parks and historic zones"],
    ["200+", "Michelin-Starred Restaurants", "more than any other city (Tokyo)"],
    ["320", "km/h Bullet Train Speed", "Shinkansen top speed"],
  ];

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-4">
      {stats.map(([number, title, text]) => (
        <div key={title} className="bg-white px-4 py-5 text-center">
          <p className="text-3xl font-bold text-primary">{number}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-secondary">
            {title}
          </p>
          <p className="mt-2 text-sm text-secondary/70">{text}</p>
        </div>
      ))}
    </div>
  );
}

function TravelerGrid() {
  const travelers = [
    "Families with Children",
    "Multi-Generational Trips",
    "Food Lovers",
    "Luxury Travelers",
    "Disney Fans",
    "Cruise Enthusiasts",
    "Nature Lovers",
    "Anime and Gaming Fans",
    "History and Culture Buffs",
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {travelers.map((traveler) => (
        <div
          key={traveler}
          className="border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-secondary"
        >
          {traveler}
        </div>
      ))}
    </div>
  );
}

function ComparisonTable({ rows, headings = ["Category", "Japan Cruise", "Land Tour"] }) {
  return (
    <div className="overflow-x-auto border border-slate-200">
      <table className="w-full min-w-[620px] border-collapse text-left text-sm">
        <thead className="bg-secondary text-white">
          <tr>
            {headings.map((heading) => (
              <th key={heading} className="px-4 py-3 font-semibold">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([category, cruise, land], index) => (
            <tr
              key={category}
              className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              <td className="border-t border-slate-200 px-4 py-3 font-semibold text-secondary">
                {category}
              </td>
              <td className="border-t border-slate-200 px-4 py-3 text-secondary/80">
                {cruise}
              </td>
              <td className="border-t border-slate-200 px-4 py-3 text-secondary/80">
                {land}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BenefitBlock({ title, points }) {
  return (
    <div className="border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-lg font-semibold text-secondary">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-secondary/80">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DestinationBlock({ destination }) {
  return (
    <div className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
      <h3 className="text-xl font-semibold text-secondary">{destination.title}</h3>
      <p className="mt-2 text-secondary/80">{destination.description}</p>
      <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {destination.points.map((point) => (
          <div key={point} className="flex gap-2 text-sm font-medium text-secondary/80">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BestForList({ title, items, accent = "primary" }) {
  const colorClass = accent === "secondary" ? "bg-secondary" : "bg-primary";

  return (
    <div className="border border-slate-200 bg-white">
      <h3 className={`${colorClass} px-4 py-3 text-lg font-semibold uppercase tracking-[0.08em] text-white`}>
        {title}
      </h3>
      <ul className="space-y-3 p-4 text-secondary/85">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${colorClass}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function JapanCruiseOrLandTour({ post = japanCruiseOrLandTourPost }) {
  const featuredImage = post.featuredImage || FEATURE_IMAGE;

  return (
    <article className="space-y-6 text-secondary">
      <GuidePage page="1">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            A complete comparison guide by Tiki Travel Agency
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-secondary md:text-5xl">
            Japan Cruise or Land Tour?
          </h1>
          <p className="mt-2 text-xl font-medium text-secondary/75">
            The Best Choice for First-Time Visitors
          </p>
        </div>

        <figure className="mt-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-slate-200 bg-slate-100">
            <Image
              src={featuredImage.image.url}
              alt={featuredImage.altText}
              title={featuredImage.title}
              fill
              priority
              aria-describedby="japan-feature-image-caption japan-feature-image-description"
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover"
            />
          </div>
          <figcaption
            id="japan-feature-image-caption"
            className="border-x border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm italic text-secondary/70"
          >
            {featuredImage.caption}
          </figcaption>
          <p id="japan-feature-image-description" className="sr-only">
            {featuredImage.description}
          </p>
        </figure>

        <p className="mt-6 text-base leading-7 text-secondary/85">
          Japan is one of the most fascinating and unforgettable destinations in
          the world, but it is not a beginner do-it-yourself destination. The
          biggest question for first-time visitors is whether to explore by
          cruise or by land. The right choice depends greatly on your travel
          style, energy level, interests, and who is traveling with you.
        </p>

        <div className="mt-6">
          <StatGrid />
        </div>

        <div className="mt-8 space-y-4">
          <SectionTitle>
            Why Japan Has Become One of the World's Top Bucket List Destination
          </SectionTitle>
          <p className="leading-7 text-secondary/85">
            Japan offers a travel experience unlike anywhere else. Ancient
            temples beside futuristic skyscrapers. Centuries-old traditions
            blending seamlessly with cutting-edge technology. Every city feels
            completely different from the next.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-secondary">
            A Country for Every Kind of Traveler
          </h3>
          <ul className="space-y-2 text-secondary/85">
            <li>Walk through quiet bamboo forests in Kyoto, then stand under giant neon signs in Tokyo.</li>
            <li>Experience world-class food culture: sushi, ramen, Kobe beef, matcha desserts, and street food.</li>
            <li>Japan is incredibly clean, safe, organized, and welcoming to international visitors.</li>
          </ul>
          <TravelerGrid />
        </div>
      </GuidePage>

      <GuidePage page="2">
        <div className="space-y-5">
          <SectionTitle>Cruise vs. Land Tour: Side-by-Side Comparison</SectionTitle>
          <ComparisonTable rows={cruiseLandRows} />
        </div>

        <div className="mt-8 space-y-4">
          <SectionTitle>Exploring Japan by Cruise</SectionTitle>
          <p className="leading-7 text-secondary/85">
            Japan cruises have grown tremendously in popularity, especially
            among first-time visitors who want an easier and more comfortable
            way to see multiple destinations. Cruising allows travelers to
            unpack once while visiting several cities throughout Japan and even
            nearby countries like South Korea.
          </p>
          <h3 className="text-xl font-semibold text-secondary">
            Benefits of Cruising Japan
          </h3>
          <div className="grid gap-4">
            <BenefitBlock
              title="Convenience and Simplicity"
              points={[
                "Accommodations, dining, transportation, and entertainment all included in one experience.",
                "Return to your cabin after a full day of exploring. No hotel check-ins or luggage moves.",
                "Ideal for travelers who want structure and predictability.",
              ]}
            />
            <BenefitBlock
              title="Great for Older Travelers"
              points={[
                "Japan involves surprising amounts of walking, stairs, and crowded train transfers.",
                "Cruises reduce physical strain while still allowing visits to several beautiful regions.",
                "Accessibility is a key advantage for multi-generational family trips.",
              ]}
            />
            <BenefitBlock
              title="Family-Friendly Experience"
              points={[
                "Pools, kids' clubs, and onboard entertainment keep children engaged.",
                "Familiar food options available alongside Japanese cuisine.",
                "Easy access to rest during shore excursions and flexible schedule.",
              ]}
            />
          </div>
        </div>
      </GuidePage>

      <GuidePage page="3">
        <div className="space-y-6">
          <SectionTitle>Best Destinations Commonly Seen on Japan Cruises</SectionTitle>
          <div className="space-y-6">
            {cruiseDestinations.map((destination) => (
              <DestinationBlock key={destination.title} destination={destination} />
            ))}
          </div>
        </div>
      </GuidePage>

      <GuidePage page="4">
        <div className="space-y-5">
          <SectionTitle>Exploring Japan by Land</SectionTitle>
          <p className="leading-7 text-secondary/85">
            Land-based travel offers a much deeper connection to Japan's
            culture, food, traditions, and daily life. Travelers ride the
            famous Shinkansen bullet trains, explore local neighborhoods, stay
            in traditional inns, and spend enough time in each city to truly
            absorb the atmosphere.
          </p>
          <h3 className="text-xl font-semibold text-secondary">
            Must-Visit Destinations for a Japan Land Tour
          </h3>
          <div className="space-y-6">
            {landDestinations.map((destination) => (
              <DestinationBlock key={destination.title} destination={destination} />
            ))}
          </div>
        </div>
      </GuidePage>

      <GuidePage page="5">
        <div className="space-y-5">
          <SectionTitle>
            Food, Culture and Entertainment: Which Experience Is Better?
          </SectionTitle>
          <p className="leading-7 text-secondary/85">
            One of the biggest differences between cruises and land tours is
            the level of immersion. Cruises provide wonderful convenience and
            allow travelers to sample different destinations. However, land
            travel generally offers a much deeper cultural experience.
          </p>
          <ComparisonTable
            rows={foodCultureRows}
            headings={["Experience", "On a Cruise", "On a Land Tour"]}
          />
        </div>

        <div className="mt-8 space-y-5">
          <SectionTitle>Which Style of Travel Is Right for You?</SectionTitle>
          <div className="grid gap-5 lg:grid-cols-2">
            <BestForList title="Cruise Is Best If..." items={cruiseBestFor} />
            <BestForList
              title="Land Tour Is Best If..."
              items={landBestFor}
              accent="secondary"
            />
          </div>
        </div>
      </GuidePage>

      <GuidePage page="6">
        <div className="space-y-5">
          <SectionTitle>The Best of Both Worlds</SectionTitle>
          <ul className="space-y-3 leading-7 text-secondary/85">
            <li>
              Some travelers combine both styles, spending several days in
              Tokyo and Kyoto before boarding a Japan cruise.
            </li>
            <li>
              This hybrid approach provides cultural depth on land and the ease
              of multi-port cruise travel.
            </li>
            <li>
              Ask your travel advisor about customized hybrid Japan
              itineraries.
            </li>
          </ul>
        </div>

        <div className="mt-8 space-y-4">
          <SectionTitle>Final Thoughts from Tiki Travel Agency</SectionTitle>
          <p className="leading-7 text-secondary/85">
            There is no wrong way to experience Japan. Both cruises and
            land-based itineraries can create unforgettable memories and
            incredible cultural experiences. The key is choosing the style of
            travel that best matches your comfort level, interests, mobility
            needs, and travel goals.
          </p>
          <p className="leading-7 text-secondary/85">
            Whether you want to experience Japan through a relaxing cruise
            itinerary or an immersive land-based adventure, we help make the
            planning process seamless and stress-free.
          </p>
          <p className="text-center text-lg font-semibold italic text-secondary">
            Once you visit Japan, it often becomes the first of many trips back.
          </p>
        </div>

        <div className="mt-8 border border-primary bg-primary/10 px-5 py-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-secondary">
            Plan Your Japan Adventure
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-secondary/85">
            At Tiki Travel Agency, we specialize in helping travelers create
            personalized Japan vacations designed around their travel style and
            dream experiences.
          </p>
          <p className="mt-4 font-semibold text-primary">www.tikitravelagency.com</p>
        </div>
      </GuidePage>
    </article>
  );
}

export default JapanCruiseOrLandTour;
