import Image from "next/image";
import Link from "next/link";
import React from "react";

const FEATURE_IMAGE = {
  image: {
    url: "/assets/static-blogs/why-use-travel-advisor-first-trip-japan.jpg",
  },
  altText:
    "Traveler overlooking a traditional Japanese town with Mount Fuji in the background, illustrating the benefits of using a travel advisor for planning a first trip to Japan.",
  title: "Why Use a Travel Advisor for Your First Trip to Japan",
  description:
    "Professional travel planning graphic highlighting the benefits of using a travel advisor for a first trip to Japan. The image features a traveler in traditional Japanese attire overlooking a historic town with Mount Fuji, representing expert itinerary planning, cultural experiences, personalized travel recommendations, visa guidance, accommodation booking, and stress-free vacation planning. It emphasizes how professional travel advisors help travelers enjoy a seamless and unforgettable journey to Japan.",
  caption:
    "Discover how a travel advisor can simplify your first trip to Japan with personalized planning, expert local insights, seamless bookings, and a stress-free travel experience.",
};

const META_TITLE = "The Real Reasons First-Time Travelers Need a Japan Advisor";

const META_DESCRIPTION =
  "Working with a Japan travel advisor ensures your hotels and luxury bullet trains are perfectly booked before landing. This simple choice saves thousands.";

export const whyUseTravelAdvisorPost = {
  slug: "why-use-travel-advisor-first-trip-japan",
  title: "Why Use a Travel Advisor for Your First Trip to Japan",
  metaTitle: META_TITLE,
  metaDescription: META_DESCRIPTION,
  category: "Japan Travel Guide",
  createdAt: "2026-07-13T00:00:00.000Z",
  updatedAt: "2026-07-13T00:00:00.000Z",
  published: true,
  latestBlogPriority: 3,
  featuredImage: FEATURE_IMAGE,
  excerpt:
    "Discover how a travel advisor can simplify your first trip to Japan with personalized planning, expert local insights, seamless bookings, and a stress-free travel experience.",
  body: META_DESCRIPTION,
  ContentComponent: WhyUseTravelAdvisor,
};

function BrochurePage({ page, children }) {
  return (
    <section className="overflow-hidden border border-slate-200 bg-white shadow-sm my-6">
      <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary/75 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3 md:text-[11px]">
        <span>Tiki Travel Agency: Expert Vacation Planning</span>
        <span>First Trip to Japan Guide</span>
      </div>
      <div className="px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {children}
      </div>
      <div className="flex flex-col gap-1 border-t border-slate-200 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>www.tikitravelagency.com</span>
        <span>Page {page}</span>
      </div>
    </section>
  );
}

function StopHeader({ symbol, stopNumber, title }) {
  return (
    <div className="flex border border-slate-200 overflow-hidden mb-6">
      <div className="flex flex-col items-center justify-center bg-[#1b2430] py-3 px-4 min-w-[70px] sm:min-w-[80px] text-center shrink-0">
        <span className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">
          {symbol}
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#9c8b6e] uppercase leading-none">
          {stopNumber}
        </span>
      </div>
      <div className="flex items-center bg-[#f7f3ea] px-4 py-3 w-full">
        <h2 className="text-base sm:text-xl font-bold text-[#1b2430] leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Paragraph({ children, className = "" }) {
  return (
    <p
      className={`text-sm leading-7 text-secondary/85 sm:text-base sm:leading-8 text-justify ${className}`}
      style={{ textAlign: "justify" }}
    >
      {children}
    </p>
  );
}

function RedBorderCallout({ title, children }) {
  return (
    <div className="flex border border-slate-200 overflow-hidden bg-[#f7f3ea] my-6">
      <div className="w-2 bg-[#a6332b] shrink-0" />
      <div className="p-4 sm:p-5 flex-1">
        {title && (
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#a6332b] mb-2 font-mono">
            {title}
          </p>
        )}
        <div className="text-sm leading-7 text-[#1b2430] sm:text-base sm:leading-8 italic font-serif">
          {children}
        </div>
      </div>
    </div>
  );
}

function CustomTable({ headings, rows }) {
  return (
    <div className="overflow-x-auto border border-[#d8d0be] my-6 -mx-3 sm:mx-0">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-[#1b2430] text-white">
          <tr>
            {headings.map((heading, index) => (
              <th
                key={index}
                className="px-3 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap border-b border-[#d8d0be]"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-[#f7f3ea]"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border-b border-[#d8d0be] px-3 py-3 text-secondary/90 text-xs sm:text-sm leading-relaxed ${
                    cellIndex === 0 ? "font-bold text-secondary" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HotelHighlights() {
  const cards = [
    {
      kanji: "新宿",
      title: "SHINJUKU",
      desc: "Nightlife and easy Hakone access",
    },
    {
      kanji: "浅草",
      title: "ASAKUSA",
      desc: "Traditional streets, old Tokyo charm",
    },
    {
      kanji: "渋谷",
      title: "SHIBUYA",
      desc: "High energy, the famous crossing",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="border-2 border-[#a6332b] bg-white p-4 text-center rounded-sm"
        >
          <p className="text-xl sm:text-2xl font-bold text-[#a6332b] mb-1 font-serif">
            {card.kanji}
          </p>
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#1b2430] mb-2 font-mono">
            {card.title}
          </p>
          <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

function FamiliesVsCouples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="bg-[#1b2430] p-5 text-left border border-slate-700">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#9c8b6e] mb-2 font-mono">
          FOR FAMILIES
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-white">
          Tokyo DisneySea, interactive museums, animal cafes, and hands-on cultural activities.
        </p>
      </div>
      <div className="bg-[#f7f3ea] p-5 text-left border border-[#d8d0be]">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#a6332b] mb-2 font-mono">
          FOR COUPLES
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#1b2430]">
          Ryokans, hot springs, gardens, fine dining, and romantic evening walks.
        </p>
      </div>
    </div>
  );
}

function FinalStopBox() {
  return (
    <div className="bg-[#1b2430] p-6 sm:p-8 text-center text-white border border-slate-800 my-8">
      <p className="text-2xl font-bold text-[#a6332b] mb-1 font-serif">
        終点
      </p>
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9c8b6e] mb-3 font-mono">
        FINAL STOP
      </p>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-white mb-6">
        Make the Most of Your Japan Vacation
      </h2>
      
      <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto text-justify">
        <p>
          A trip to Japan requires a meaningful investment of money, time, and energy. After a long international flight, the last thing you want is to feel lost, miss an important reservation, or spend the first several days trying to understand transportation.
        </p>
        <p>
          Working with Tiki Travel Agency gives you more than a collection of bookings. You receive a coordinated travel plan created by a Japan destination specialist who understands how flights, hotels, trains, luggage transfers, attractions, and cultural experiences must work together.
        </p>
      </div>

      <div className="my-6 border-y border-slate-700 py-4 max-w-2xl mx-auto">
        <p className="text-base sm:text-lg font-bold italic font-serif text-[#a6332b]">
          Japan may have a learning curve, but you do not have to figure it out alone.
        </p>
      </div>

      <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto text-justify">
        With the right guidance, your first trip can feel less intimidating and far more rewarding, leaving you free to focus on why you wanted to visit Japan. The food. The history. The scenery. The culture. The unforgettable moments waiting for you.
      </p>
    </div>
  );
}

function WhyUseTravelAdvisor({ post = whyUseTravelAdvisorPost }) {
  const featuredImage = post.featuredImage || FEATURE_IMAGE;

  return (
    <article className="space-y-6 text-secondary">
      {/* PAGE 1 */}
      <BrochurePage page="1">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a6332b] sm:text-sm font-mono">
            TIKI TRAVEL AGENCY
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60 sm:text-xs">
            FIELD NOTES FOR FIRST-TIME TRAVELERS
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-2xl font-bold leading-tight text-secondary sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl font-serif text-left md:text-center">
            Why Use a Travel Advisor for Your First Trip to Japan
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-secondary/75 sm:text-base md:text-lg italic font-serif text-left md:text-center">
            A guide for those who want the trip to feel <span className="font-bold text-[#a6332b]">considered</span> from the moment they land.
          </p>
          
          <div className="mt-4 flex items-center justify-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-secondary/60">
            <span>Published: July 13, 2026</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>Updated: July 13, 2026</span>
          </div>
        </div>

        <figure className="mt-5 overflow-visible border border-slate-200 bg-slate-100 sm:mt-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={featuredImage.image.url}
              alt={featuredImage.altText}
              title={featuredImage.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px"
              className="object-cover object-center"
            />
          </div>
          <figcaption
            className="border-t border-slate-200 bg-white px-3 py-2 text-xs italic text-secondary/70 sm:px-4 sm:py-3 sm:text-sm"
          >
            {featuredImage.caption}
          </figcaption>
          <p className="sr-only">{featuredImage.description}</p>
        </figure>

        <div className="mt-6 space-y-4">
          <Paragraph>
            <span className="float-left text-5xl sm:text-6xl font-bold text-[#b8862e] font-serif leading-none mr-2 mt-1">F</span>
            <span className="text-base sm:text-lg italic font-medium text-[#1f2e3d] font-serif">irst trip to Japan is exciting, but it can also feel like learning an entirely new way to travel.</span>
          </Paragraph>
          <Paragraph>
            Japan is known for being safe, organized, and incredibly welcoming, yet first-time visitors often underestimate the learning curve. The language and cultural customs are unfamiliar, and the train stations can feel like cities of their own. Hotel bookings are tricky and not always what American travelers expect. Add in advance reservations, luggage logistics, and hundreds of attractions competing for your limited time, and the planning can quickly become overwhelming.
          </Paragraph>
          <Paragraph>
            The journey itself is also a major investment. Flights to Japan are long and often expensive, so you do not want to arrive after months of anticipation only to discover that your hotel is far from the places you want to visit, your train tickets are not arranged correctly, or the experience at the top of your list sold out weeks ago. Everyday matters while you are vacationing in Japan, and thoughtful planning can make the difference between a stressful vacation and an unforgettable one.
          </Paragraph>
          
          <RedBorderCallout title="THE DIFFERENCE">
            That is where working with a Japan destination specialist becomes especially valuable.
          </RedBorderCallout>

          <Paragraph>
            At Tiki Travel Agency, we understand that planning Japan is about much more than reserving a flight and hotel. We help first-time visitors understand how the country works before they arrive, then design an itinerary that allows them to experience Japan confidently and comfortably.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 2 */}
      <BrochurePage page="2">
        <StopHeader
          symbol="駅"
          stopNumber="STOP 01"
          title="Navigating Japan's Train System"
        />
        <div className="space-y-4">
          <Paragraph>
            Japan's rail network is one of the most efficient in the world, but it can be intimidating at first. Tokyo alone has multiple train and subway operators, and large stations such as Shinjuku and Tokyo Station have dozens of entrances, platforms, and connecting lines.
          </Paragraph>
          <Paragraph>
            Travelers also need to understand the difference between local trains, limited express services, airport trains, and the Shinkansen bullet train. Some trains require only an IC card, while others require a separate base fare and reserved-seat ticket. Even choosing a Japan Rail Pass, a regional pass, or individual tickets depends on the itinerary.
          </Paragraph>

          <CustomTable
            headings={["Ticket Type", "How It Works", "Best For"]}
            rows={[
              [
                "IC Card",
                "Tap-and-go on nearly every train, subway, and bus",
                "Short hops, daily travel, vending machines",
              ],
              [
                "Japan Rail Pass",
                "Fixed window of unlimited JR travel, bought in advance",
                "Multi-city trips covering long distances",
              ],
              [
                "Shinkansen ticket",
                "Base fare plus a reserved-seat surcharge",
                "Long hauls and travel on busy holidays",
              ],
            ]}
          />

          <Paragraph>
            Tiki Travel Agency helps organize the transportation plan in advance. We explain which trains to take, how to map out ideal train routes, and when reserved seating is recommended. We also help clients understand IC cards such as Suica and Pasmo, how the Shinkansen works, and how to reach each hotel without wasting valuable vacation time.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 3 */}
      <BrochurePage page="3">
        <StopHeader
          symbol="宿"
          stopNumber="STOP 02"
          title="Choosing the Right Hotels"
        />
        <div className="space-y-4">
          <Paragraph>
            Hotel selection in Japan is much more than looking at star ratings. Rooms may be smaller than travelers expect, and a hotel that appears close to an attraction on a map may not be near the most convenient train line. One station exit can place you next to your hotel, while another can leave you hauling luggage several blocks through a busy neighborhood.
          </Paragraph>
          <Paragraph>
            A travel advisor considers the full itinerary before recommending accommodations. We look at station proximity, neighborhoods, room size, breakfast options, airport transportation, and overall convenience.
          </Paragraph>

          <HotelHighlights />

          <Paragraph>
            In Kyoto, staying near Kyoto Station creates a very different experience from staying near Gion or the Kawaramachi shopping district. The right choice depends on how you want to spend your days, not simply which hotel has the highest rating.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 4 */}
      <BrochurePage page="4">
        <StopHeader
          symbol="礼"
          stopNumber="STOP 03"
          title="Understanding the Language and Culture"
        />
        <div className="space-y-4">
          <Paragraph>
            You do not need to speak Japanese to have a memorable trip, but knowing what to expect can make your vacation much easier.
          </Paragraph>
          <Paragraph>
            Japanese culture places great importance on courtesy, cleanliness, punctuality, and respect for shared spaces. Everyday customs may feel unfamiliar, from lining up for trains and remaining quiet onboard to removing shoes indoors and following bathing etiquette at an onsen.
          </Paragraph>
          <Paragraph>
            Dining can create questions as well. Travelers may wonder how to order from a ticket machine, whether tipping is expected, how to make restaurant reservations, or what to do when menus are only available in Japanese.
          </Paragraph>

          <RedBorderCallout title="GOOD TO KNOW">
            Tipping is not expected anywhere in Japan, and leaving cash on a table is more likely to cause confusion than gratitude.
          </RedBorderCallout>

          <Paragraph>
            Tiki Travel Agency prepares clients for these moments. We explain essential etiquette, helpful phrases, restaurant customs, hotel practices, and transportation expectations so travelers can be respectful and confident while on vacation.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 5 */}
      <BrochurePage page="5">
        <StopHeader
          symbol="鞄"
          stopNumber="STOP 04"
          title="Making Sense of Luggage Transportation"
        />
        <div className="space-y-4">
          <Paragraph>
            Traveling with large suitcases can be challenging on crowded trains and while maneuvering through busy stations. Japan's luggage-forwarding services offer a convenient solution, but many first-time visitors do not know how they work.
          </Paragraph>
          <Paragraph>
            We help clients plan when to forward their luggage, what to pack in an overnight bag, and how to coordinate delivery between Tokyo, Hakone, Kyoto, Osaka, and other destinations. This can be especially helpful when staying at a ryokan or traveling on the Shinkansen, where oversized baggage may require advance reservations.
          </Paragraph>

          <CustomTable
            headings={["Question", "What We Plan Together"]}
            rows={[
              [
                "When to forward",
                "So your bags arrive before you do, not after",
              ],
              [
                "What to pack light",
                "An overnight bag for the days luggage travels separately",
              ],
              [
                "Where it lands",
                "Coordinated delivery between Tokyo, Hakone, Kyoto, and Osaka",
              ],
            ]}
          />

          <Paragraph>
            Instead of struggling with suitcases on station escalators, travelers can enjoy a more comfortable journey while their bags are delivered to their next hotel.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 6 */}
      <BrochurePage page="6">
        <StopHeader
          symbol="券"
          stopNumber="STOP 05"
          title="Securing Popular Experiences Before They Sell Out"
        />
        <div className="space-y-4">
          <Paragraph>
            Some of Japan's most sought-after experiences require advance planning. Tickets and reservations may open on specific dates and times.
          </Paragraph>
          <Paragraph>
            Popular experiences such as themed cafes, museums, Tokyo Disney Resort, Universal Studios Japan, teamLab, sumo experiences, and seasonal attractions can sell out quickly. Certain restaurants and activities may require reservations weeks or months in advance.
          </Paragraph>

          <RedBorderCallout title="BOOK EARLY">
            Tokyo Disney Resort, Universal Studios Japan, teamLab, sumo tournaments, and seasonal favorites like cherry blossom season all move fast.
          </RedBorderCallout>

          <Paragraph>
            A Japan travel specialist helps identify the experiences that matter most to you and builds the planning timeline around their booking windows. This reduces the risk of traveling across the world only to learn that the attraction you want to visit is unavailable.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 7 */}
      <BrochurePage page="7">
        <StopHeader
          symbol="図"
          stopNumber="STOP 06"
          title="Creating an Itinerary That Actually Works"
        />
        <div className="space-y-4">
          <Paragraph>
            Japan offers so much that first-time visitors often try to include too much.
          </Paragraph>
          <Paragraph>
            It is easy to create a schedule that looks possible on paper but becomes exhausting in real life. Attractions may be located on opposite sides of the city, temples may close earlier than expected, and popular neighborhoods deserve more time to discover than a quick photo stop.
          </Paragraph>
          <Paragraph>
            Tiki Travel Agency organizes sightseeing geographically and realistically. We consider travel time, opening hours, reservation times, weather, and the pace of the travelers.
          </Paragraph>
          <Paragraph>
            A thoughtfully designed itinerary might combine Asakusa and Tokyo Skytree on one day, Shibuya and Harajuku on another, and allow enough time in Kyoto for both its famous temples and quieter traditional neighborhoods. We also build in flexibility, because some of the best moments in Japan happen while exploring a local market, discovering a small restaurant, or wandering through a neighborhood you did not expect to love.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 8 */}
      <BrochurePage page="8">
        <StopHeader
          symbol="旅"
          stopNumber="STOP 07"
          title="Helping You Experience What You Do Not Want to Miss"
        />
        <div className="space-y-4">
          <Paragraph>
            Japan is full of major landmarks, but the most memorable trip is not necessarily the one that checks off the longest list. Sometimes traveling at a slower pace creates a more authentic experience.
          </Paragraph>

          <FamiliesVsCouples />

          <Paragraph>
            Anime fans, food lovers, and history enthusiasts will each experience a completely different Japan.
          </Paragraph>
          <Paragraph>
            As a Japan destination specialist, Tiki Travel Agency helps uncover the experiences that fit your interests. We may recommend an evening food tour in Osaka, a traditional tea ceremony in Kyoto, a Hakone ryokan stay, a luggage-free ride on the bullet train, or a neighborhood in Tokyo you may never have discovered through a generic travel package.
          </Paragraph>
        </div>
      </BrochurePage>

      {/* PAGE 9 */}
      <BrochurePage page="9">
        <FinalStopBox />
      </BrochurePage>
    </article>
  );
}

export default WhyUseTravelAdvisor;
