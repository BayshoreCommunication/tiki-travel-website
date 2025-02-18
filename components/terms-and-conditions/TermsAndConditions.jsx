import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <>
      <SectionLayout>
        <div>
          <h1
            className={`font-semibold text-3xl lg:text-5xl mb-10 text-center uppercase`}
          >
            Terms And Conditions
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-lg lg:text-xl">
                These Terms and Conditions (“Terms”) are:
              </p>
              <p className="text-lg lg:text-xl font-medium">
                BETWEEN: Tiki Travel Agency (“Agency,” “our,” “us,” or “we”)
              </p>
              <p className="text-lg lg:text-xl font-medium">
                AND: You (“you,” “your,” “yourself,” or “Traveler”)
              </p>
              <p className="text-lg lg:text-xl">
                (each a “Party” and, together, the “Parties”).
              </p>
              <p className="text-lg lg:text-xl">
                The Parties agree as set out below.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg lg:text-xl">
                These Terms: (1) become effective upon the earlier of: (a) your
                written, digital, or electronic signature; or (b) your
                submission to us of any payment or payment authorization for
                Travel Services; (2) will be renewed each time you submit to us
                any payment or payment authorization for Travel Services; (3)
                will terminate upon the earlier of: (a) completion of your Trip;
                or (b) either Party’s written notice of termination to the other
                Party; (4) are subject to change at any time, without prior
                notice.
              </p>
              <p className="text-lg lg:text-xl">
                The effective version of these Terms is located at{" "}
                <Link
                  href="https://tikitravelagency.com/"
                  className="text-primary"
                >
                  https://tikitravelagency.com/
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">DEFINITIONS</h5>
              <p className="text-lg lg:text-xl">
                <span className="font-medium">“Booking”</span> means a
                reservation made by Agency regarding your Trip.
              </p>
              <p className="text-lg lg:text-xl">
                <span className="font-medium">“Supplier”</span> means a party
                who provides Travel Services to Travelers.
              </p>
              <p className="text-lg lg:text-xl">
                <span className="font-medium">“Traveler”</span> means you and
                each traveler on the same Booking.
              </p>
              <p className="text-lg lg:text-xl">
                <span className="font-medium">“Travel Services”</span> means
                travel products and services provided to Travelers by Suppliers,
                including air, land, or water transportation, lodging, auto
                rentals, tours, excursions, entertainment, food and drink
                services, and similar products and services.
              </p>
              <p className="text-lg lg:text-xl">
                <span className="font-medium">“Trip”</span> means the composite
                of all Travel Services, for which Agency makes Bookings.
              </p>
              <p className="text-lg lg:text-xl">
                <span className="font-medium">“Trip Plan”</span> means the
                documentation we provide to you with details and pricing
                regarding your Trip.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">TRAVELERS</h5>
              <p className="text-lg lg:text-xl">
                You will: (1) carefully read and understand these Terms, your
                Trip Plan, and all correspondence between you and us regarding
                your Trip; (2) contact us to arrange your Trip Plan sufficiently
                prior to travel dates to ensure availability, avoid late-Booking
                fees and avoid fare increases; (3) confirm your written
                acceptance of your Trip Plan; (4) make all deposits and payments
                per the schedules and dates set out in your Trip Plan; (5)
                review, remain aware, and remain updated regarding travel
                warnings relating to your Trip by accessing the U.S.
                governmental travel advisory sites set out in these Terms; and
                (6) fully comply with the obligations to which you agree in
                these Terms.
              </p>
              <p className="text-lg lg:text-xl">
                You warrant that you are 18 years of age or older and have
                authority to sign and accept these Terms on behalf of all minor
                and adult Travelers on the same Booking who reside in your
                household.
              </p>
              <p className="text-lg lg:text-xl">
                If you do not understand any part of these Terms, please contact
                us in writing as soon as possible.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">SUPPLIERS</h5>
              <p className="text-lg lg:text-xl">
                Suppliers are independent of Agency, managed separately, who
                provide Travel Services to you. Suppliers are not subject to
                Agency’s control—they are not employees, agents,
                representatives, or affiliates of Agency. Agency is not
                responsible for any Supplier’s breach of contract, failure to
                comply with any laws, or willful or negligent acts, errors, or
                omissions, which may result in delays, inconvenience, damage,
                loss, costs, injury, or death to Travelers or companions.
              </p>
              <p className="text-lg lg:text-xl">
                Suppliers operate under their own terms, conditions, which are
                separate from these Terms. All documentation, receipts,
                confirmations, and tickets issued are subject to the terms and
                conditions specified by each Supplier. Your travel documentation
                identifies each Supplier responsible for providing your Travel
                Services. By paying for Travel Services, you consent to the use
                of those Suppliers.
              </p>
              <p className="text-lg lg:text-xl">
                Please read Supplier terms and conditions carefully—you are
                responsible for understanding and complying with the terms
                imposed by each Supplier, including: (1) payment of all amounts
                when due; and (2) rules and restrictions regarding the
                availability and use of Travel Services.
              </p>
              <p className="text-lg lg:text-xl">
                You understand that any violation of Supplier terms may result
                in denied access to Travel Services, cancellation of
                reservations, and forfeiture of any amounts paid by you. If such
                violation results in costs to Agency, you agree to promptly
                reimburse Agency for all such costs. Suppliers may require you
                to sign a liability waiver prior to participating in their
                Travel Services.
              </p>
              <p className="text-lg lg:text-xl">
                If a Supplier declares bankruptcy, it may not be obligated to
                transport you or to provide refunds. Following bankruptcy,
                Suppliers may continue to provide all or some Travel Services or
                they may stop operations. In such case, other Suppliers may, but
                are not required to, provide alternative travel services to you.
                Agency is not permitted to provide refunds.
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-lg lg:text-xl">
                    refunds to you for Suppliers who have declared bankruptcy.
                    Agency has no special knowledge about the financial
                    condition of any Supplier.
                  </p>
                  <p className="text-lg lg:text-xl">
                    Agency has no liability for recommending a Trip credit or a
                    refund. All Supplier promotions, incentives, prices, and
                    offers are subject to Supplier availability, which may
                    change at any time without notice.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">
                    TRAVEL RISK & INSURANCE
                  </h5>
                  <p className="text-lg lg:text-xl">
                    You understand and accept the inherent risks of choosing to
                    travel. We recommend that you purchase comprehensive travel
                    insurance to cover each Traveler. If you have not received a
                    travel insurance quote from us, please request one as soon
                    as possible.
                  </p>
                  <p className="text-lg lg:text-xl">
                    If you decline to purchase travel insurance, you assume all
                    risk and financial responsibility relating to your Trip,
                    including: (1) travel changes, interruptions, or
                    cancellations; (2) baggage delays or loss; (3) travel
                    supplier defaults; (4) medical costs; (5) accidents and
                    emergencies; and (6) any other loss, cost, injury, or death
                    that may arise.
                  </p>
                  <p className="text-lg lg:text-xl">
                    Travel insurance covers matters expressly included in each
                    policy. You understand that insurance policies may exclude
                    coverage relating to certain matters, including: (1) pre-
                    existing medical conditions; (2) trip interruptions relating
                    to any pandemic or epidemic; and (3) risk locations and
                    activities. You hold us harmless if an insurance provider
                    denies any of your claims for any reason.
                  </p>
                  <p className="text-lg lg:text-xl">
                    This clause will survive termination of these Terms.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">PERSONAL INFORMATION</h5>
                  <p className="text-lg lg:text-xl">
                    You understand that, as part of Booking any Travel Services,
                    your personal information may be conveyed to Agency,
                    Suppliers, and other third-party providers to accommodate
                    your travel, and you consent to the use of your personal
                    information by these parties. Such personal information may
                    include birth dates, passport numbers, travel dates,
                    occupation, frequent flyer information, bank accounts,
                    credit cards, and other information needed to secure travel
                    arrangements.
                  </p>
                  <p className="text-lg lg:text-xl">
                    Agency has no liability regarding: (1) the distribution of
                    your information to any Supplier or other third party,
                    including any CRM or other technology platform outside our
                    control; or (2) any third party’s failure to protect your
                    personal information. You authorize Agency to keep your
                    personal information for as long as needed to provide
                    Bookings and for a reasonable period thereafter for Agency’s
                    legal or business purposes.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">PRICING & INCLUSIONS</h5>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                      <p className="text-lg lg:text-xl">
                        Quoted prices are based on the precise inclusions we
                        provide to you in the Trip Plan.
                      </p>
                      <p className="text-lg lg:text-xl">
                        Unless specifically itemized on the Trip Plan, prices do
                        not include other travel costs, fees, or taxes,
                        including: (1) airports, ports, stations, security,
                        agriculture, customs, immigration, visas, passports, or
                        any other government-imposed fees or taxes; or (2)
                        meals, beverages, alcohol, minibars, entertainment, seat
                        assignments, upgrades, excursions, hospitality,
                        gratuities, copies, telecommunications, energy, laundry,
                        cleaning, bedding, parking, valet, insurance, taxis,
                        transfers, porterage, departures, travel segments,
                        health, medical treatment or tests, vaccinations,
                        pharmaceuticals, or any other personal charges.
                      </p>
                      <p className="text-lg lg:text-xl">
                        All Supplier prices and availability are subject to
                        change without prior notice until you make full payment
                        of deposits and other amounts due, as agreed in your
                        Trip Plan. However, even following your full payment,
                        you agree to pay additional fees that may arise for
                        variable matters beyond our control, including fuel and
                        other surcharges.
                      </p>
                      <p className="text-lg lg:text-xl">
                        Agency has no responsibility for: (1) transparency,
                        disclosure by any third party regarding its pricing; (2)
                        price changes or variable fees; (3) currency exchange
                        fluctuations; or (4) charges relating to
                        foreign-currency transactions.
                      </p>
                      <p className="text-lg lg:text-xl">
                        We reserve the right at any time for any reason to
                        correct errors or omissions regarding prices, to
                        re-invoice you at corrected prices, or to take any other
                        corrective measures regarding your Bookings.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h5 className="font-bold text-2xl">PAYMENT</h5>
                      <p className="text-lg lg:text-xl">
                        You agree to make full payment of deposits and other
                        amounts due as agreed in your Trip Plan. If you do not
                        make full payment of any deposit or other amount by its
                        due date: (1) Suppliers may impose price increases,
                        fees, or penalties; (2) Suppliers may cancel your
                        Bookings in whole or part; (3) Agency may cancel your
                        Bookings in whole or part; and (4) your previous
                        deposits and other amounts paid may be{" "}
                        <span className="font-medium">NON-REFUNDABLE</span>{" "}
                        under Supplier terms. You are solely responsible, and
                        Agency has no responsibility or liability, for
                        consequences relating to your late or non-payment.
                      </p>
                      <p className="text-lg lg:text-xl">
                        If you request re-Booking, Agency will assist you with
                        obtaining any refunds due to re- Booking Trips (e.g.,
                        using future cruise credits). However, Agency may, in
                        its discretion, charge a{" "}
                        <span className="font-medium">NON-REFUNDABLE</span> fee
                        for re-Bookings.
                      </p>
                      <p className="text-lg lg:text-xl">
                        Unless Agency provides to you prior written consent: (1)
                        we are not the “merchant of record” (as defined by the
                        U.S. Department of Transportation) regarding your Travel
                        Services; (2) we do not take possession of amounts you
                        pay to Suppliers for Travel Services; and (3) we are not
                        responsible for any refunds payable to you by Suppliers.
                      </p>
                      <p className="text-lg lg:text-xl">
                        Your payments in currency other than U.S. Dollars will
                        be converted at then-current exchange rates. Agency
                        payments to Suppliers will be converted at then-current
                        exchange rates between U.S. Dollars and the currency in
                        Supplier’s country.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">CREDIT & DEBIT CARDS</h5>
                  <p className="text-lg lg:text-xl">
                    By submitting your credit or debit card (“Card”) to us, you
                    confirm that: (1) you are an authorized user of that Card;
                    (2) you authorize us, or our agents, to charge your Card for
                    payments on due dates agreed in your Trip Plan; and (3) you
                    authorize us, or our agents, to credit to your Card any
                    amounts charged in error.
                  </p>
                  <p className="text-lg lg:text-xl">
                    You are responsible for all costs, including costs of
                    recovery, relating to the following: (1) if you provide to
                    us an incorrect Card number; (2) if our valid charges to
                    your Card are declined; (3) if your Card has insufficient
                    funds on payment dates agreed in your Trip Plan; and (4) if
                    your Card account is closed or expires before you pay all
                    amounts agreed in your Trip Plan.
                  </p>
                  <p className="text-lg lg:text-xl">
                    In any such event, you agree we have a right to suspend or
                    cancel any Booking, and we have no obligation to refund
                    amounts paid by you if we suspend or cancel any Booking.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">CHARGEBACKS</h5>
                  <p className="text-lg lg:text-xl">
                    You agree not to initiate, and you waive any right to
                    pursue, any credit- or debit-card chargeback,
                    reverse-charge, refund, or recollection (collectively,
                    “Chargeback”) for any reason, including delay, cancellation,
                    refusal of entry, exit, or transit, force majeure event,
                    Food Allergies, provision or non-provision of Travel
                    Services, Supplier price changes, fees, or penalties, or any
                    other matter relating to your Trip, except in the case of
                    fraud. Even in the case of fraud, before initiating any
                    Chargeback, you agree to first address the matter directly
                    with us in writing to give us a reasonable time to
                    investigate the matter and respond to you.
                  </p>
                  <p className="text-lg lg:text-xl">
                    If you initiate a Chargeback relating to any amount we
                    validly charge to your Card without our prior written
                    authorization, you agree to pay us for all fees and costs,
                    including attorney’s fees and legal expenses, we incur to
                    dispute and respond to that Chargeback.
                  </p>
                  <p className="text-lg lg:text-xl font-medium">
                    This clause will survive termination of these Terms.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">
                    CHANGES, CANCELLATIONS, REFUNDS
                  </h5>
                  <p className="text-lg lg:text-xl">
                    You agree to comply with Supplier terms relating to change
                    or cancellation of Bookings. Supplier terms may not allow
                    refunds if you change, cancel, partially use, or do not use
                    Travel Services for any reason, including actual,
                    threatened, or fear of potential health matters, pandemics,
                    epidemics, weather conditions, terrorism, political unrest,
                    or similar circumstances.
                  </p>
                  <p className="text-lg lg:text-xl">
                    If you change or cancel a Booking, you may be subject to
                    Supplier fees, charges, or penalties.
                  </p>
                  <p className="text-lg lg:text-xl">
                    If you have any claim for refund or adjustment regarding
                    your travel, you will deliver it to Agency in writing,
                    including full details and documentation regarding the
                    background, rationale, and proof of payment.
                  </p>
                  <p className="text-lg lg:text-xl font-medium">
                    This clause will survive termination of these Terms.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">NO SHOWS</h5>
                  <p className="text-lg lg:text-xl">
                    Failure to travel or show up for any Booking is considered a
                    “no show.” No show penalties will equal amounts up to the
                    entire cost of travel, subject to terms and conditions of
                    Suppliers and Agency.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">ACCOMMODATIONS</h5>
                  <p className="text-lg lg:text-xl">
                    Hotel accommodation is subject to availability at the time
                    of reservation. Some hotels require{" "}
                    <span className="font-medium">NON-REFUNDABLE</span> and
                    <span className="font-medium"> NON-TRANSFERABLE</span>{" "}
                    deposits to guarantee a Booking. In such cases, Agency will
                    notify you regarding the{" "}
                    <span className="font-medium">NON-REFUNDABLE</span>
                    pre-payment for that portion of your travel. Amenities
                    including air conditioning, elevators, bed size, connecting
                    or adjacent rooms, handicap accessibility, restaurants,
                    bars, fitness facilities, pools, and spas are not guaranteed
                    at all properties and are not guaranteed to be operational
                    or available during your stay. Refunds regarding amenities
                    are the responsibility of the hotel.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">AIR TRAVEL</h5>
                  <p className="text-lg lg:text-xl">
                    Suppliers may require tickets to be paid in full at the time
                    of Booking. Airline tickets, once purchased, may be{" "}
                    <span className="font-medium">NON-REFUNDABLE</span> and
                    <span className="font-medium"> NON-TRANSFERABLE</span>,
                    subject to Supplier terms and conditions. Most airlines
                    consider a name-change to be a cancellation. Domestic flight
                    requirements may differ from international flight
                    requirements.
                  </p>
                  <p className="text-lg lg:text-xl">
                    Seat assignments are based on availability at the time of
                    selection and payment. Airlines may change seat assignments
                    and aircraft or address other operational matters at any
                    time. Agency cannot guarantee seats in specific locations or
                    next to each other. Airline seat assignments, baggage,
                    carry-ons, meals, drinks, and other services may be subject
                    to additional fees. You are responsible for: (1) confirming
                    in advance airline rules and availability of such services
                    and baggage allowances; and (2) paying all related fees.
                  </p>
                  <p className="text-lg lg:text-xl">
                    Agency is not responsible for any: (1) fees imposed by
                    airlines for services; (2) changes to seat assignments after
                    selection and payment; (3) loss, injury, accident, error, or
                    omission that may occur, including schedule changes, delays,
                    cancellations, and expenses due to weather conditions,
                    airline operations, or equipment repair or failure; or (4)
                    other matters beyond Agency’s control. You agree to comply
                    with safety guidelines of all airlines and hold Agency
                    harmless from any liability due to airline rules and
                    operations.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-2xl">TRAVELER CONDUCT</h5>
                  <p className="text-lg lg:text-xl">
                    You are responsible for: (1) any damage or loss caused by
                    your acts, errors, or omissions; and (2) full payment for
                    any such damage or loss directly to Agency or any third
                    party.
                  </p>
                  <p className="text-lg lg:text-xl">
                    Agency is not responsible for any costs relating to: (1)
                    Traveler conduct; or (2) Traveler removal from any Travel
                    Services, in whole or part, whether based on Traveler
                    negligence, willful misconduct, or otherwise. You agree not
                    to hold Agency, its owners, directors, employees, agents, or
                    representatives accountable for any claims arising from
                    Traveler acts, errors, or omissions.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-lg lg:text-xl">
                    Any Authorized Party may, in its discretion, refuse you any
                    Travel Service, require you to leave any Travel Service, or
                    require you to disembark any mode of transportation if the
                    Authorized Party reasonably believes: (1) you are a danger
                    to yourself or any other participant; (2) you have engaged
                    in, are engaged in, or are threatening to engage in behavior
                    that is socially disruptive, verbally abusive, physically
                    abusive, obnoxious, harassing, discriminatory, obscene, or
                    any other behavior that may adversely affect the safety,
                    security, comfort, enjoyment, or well-being of any other
                    participant, any Authorized Party, or any third party; or
                    (3) you do not follow any rule, procedure, or instruction of
                    an Authorized Party.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-lg lg:text-xl">
                    If you are subject to any such determination of an
                    Authorized Party: (1) you may be left at any location, city,
                    port, or place any mode of transport stops; (2) you will be
                    solely responsible for all costs relating to your subsequent
                    subsistence, accommodation, and transportation; (3) you will
                    forego any right to any refund, in whole or part, of any
                    fees paid by you for any Travel Services; and (4) no
                    Authorized Party will have any direct or indirect liability
                    of any kind relating to Traveler acts, errors, or omissions.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-lg lg:text-xl">
                    <span className="font-medium">“Authorized Party”</span>{" "}
                    means Agency or any Supplier, including its owners,
                    directors, employees, agents, and representatives, who
                    provides to you Travel Services or related goods or
                    services, including any ship operator, ship captain, tour
                    operator, tour director, or other management personnel.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">
                DISABILITIES & SPECIAL NEEDS
              </h5>
              <p className="text-lg lg:text-xl">
                If you have disabilities or special needs that may require
                non-emergency special services, additional support, or
                disability accommodations, please advise Agency in advance of
                Booking.
              </p>
              <p className="text-lg lg:text-xl">
                Airlines and other Suppliers may impose charges for additional
                baggage and may have size restrictions for wheelchairs they can
                accommodate. If you are unable to use your own wheelchairs,
                mobility devices, or other medical equipment or devices, rentals
                may be available, potentially subject to additional charges. If
                you travel with a service or emotional support animal, Suppliers
                may require advance arrangements and documentation regarding the
                animal’s health, training, and related factors.
              </p>
              <p className="text-lg lg:text-xl">
                Countries outside the United States and Canada often apply
                different laws, rules, regulations, standards, and
                accommodations for persons with disabilities or special needs.
                Travel destinations may have limited medical facilities, limited
                availability of prescription medications, and limited means to
                accommodate your disability or special needs. Please consult
                your health provider prior to planning or Booking your travel.
              </p>
              <p className="text-lg lg:text-xl">
                Agency will make all reasonable efforts to request assistance or
                arrange for appropriate services or equipment regarding Traveler
                disabilities or special needs. However, Agency is not
                responsible for the failure of Suppliers to meet Traveler needs
                and expectations.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">FOOD ALLERGIES</h5>
              <p className="text-lg lg:text-xl">
                If you have food allergies or any similar conditions that may
                cause you harm during your travel (
                <span className="font-medium">“Food Allergies”</span>), please
                advise Agency in advance of Booking. If any Traveler has Food
                Allergies, each such Traveler: (1) acknowledges the possibility
                of an elevated risk of reactions, delays, or disruption during
                travel; and (2) has sole responsibility for his or her Food
                Allergies and for performing all due diligence related to such
                Food Allergies prior to or during, and/or following travel.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">RISK ACTIVITY</h5>
              <p className="text-lg lg:text-xl">
                If you engage in any activity that may involve any risk of harm
                to your own or another person’s health or well-being, damage to
                property, or costs relating to such activity (collectively,{" "}
                <span className="font-bold">“Risk Activity”</span>), you are
                solely responsible for your decision to engage in, and your
                involvement with, such Risk Activity. You assume all risks,
                costs, losses, liabilities, and claims relating to any Risk
                Activity. You will not pursue any claim against Agency, and you
                release Agency from all liabilities relating to any Risk
                Activity.
              </p>
              <p className="text-lg lg:text-xl">
                Risk Activity includes any activity, or travel to any location,
                which can reasonably be regarded as inherently dangerous,
                hazardous, or otherwise having the potential to result in: (1)
                the damage to or loss of any property; or (2) the injury,
                disability, illness, or death of any person.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">ILLNESS & INJURY</h5>
              <p className="text-lg lg:text-xl">
                If you become ill or injured during a Trip, you will bear all
                responsibility for your well-being and treatment, if required.
                In such case, you will be responsible for all costs, planning,
                and logistics regarding alternative travel arrangements. You
                will not cause a delay or interruption regarding any Trip or
                otherwise burden other Travelers. You release Agency, Suppliers,
                and other Travelers from any liability relating to your illness,
                injury, missed flights or connections, travel delays, or unused
                Bookings.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">BAGGAGE & PERSONAL ITEMS</h5>
              <p className="text-lg lg:text-xl">
                You are solely responsible at all times for your baggage,
                personal items, and travel documents. Agency is not responsible
                for any damage, loss, delays, or other matters relating to your
                baggage, personal items, and travel documents.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">
                PASSPORTS, VISAS, MEDICAL DOCUMENTATION
              </h5>
              <p className="text-lg lg:text-xl">
                You are responsible for: (1) determining in advance all
                documents needed to enter, exit, or transit any jurisdiction,
                including passports, visas, and medical and other required
                documentation; (2) acquiring all such documentation; and (3)
                remaining familiar with and understanding the rules governing
                travel in each jurisdiction on your itinerary.
              </p>
              <p className="text-lg lg:text-xl">
                You are responsible for: (1) your failure to obtain or possess
                the passports, visas, or medical or other documentation that may
                be required to enter, exit, or transit any jurisdiction; or (2)
                determining the validity of your passport, visa, or medical or
                other documentation required by any jurisdiction.
              </p>
              <p className="text-lg lg:text-xl">
                <span className="font-bold">NO REFUND</span> will be issued for
                any costs or losses incurred as a result of Traveler’s failure
                to obtain or possess any passport, visa, or medical or other
                documentation required by any jurisdiction for entry, exit, or
                transit. The lack of any such item will not be a basis for a
                reimbursement, cancellation, or refund regarding Travel
                Services.
              </p>
              <p className="text-lg lg:text-xl">
                All U.S. citizens traveling to or from any international
                destination must have a valid passport, which must be valid for
                at least six months beyond Traveler’s date of return. Minor
                Travelers age 17 and under traveling without an adult, with a
                single parent, or with a non-parent adult may be required to
                carry additional authorizations and documentation. Travel
                requirements are jurisdictional, and Agency has no
                responsibility relating to such authorizations or documentation.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">
                TRAVELER IDENTIFICATION & PROOF OF CITIZENSHIP
              </h5>
              <p className="text-lg lg:text-xl">
                The Transportation Security Administration (TSA) requires all
                airline passengers to provide: (1) Secure Flight Passenger Data
                (SFPD); (2) full name as it appears on government-issued
                identification; (3) date of birth; (4) gender; and (5) redress
                number (if available). The names of Travelers on all
                reservations and travel documents must match the name as it
                appears on that Traveler’s government-issued identification.
                Traveler is responsible for any fees and expenses that may be
                incurred due to an incorrect name or the denial of travel
                resulting from incorrect or non-matching information. Updated
                information regarding security measures and air travel
                requirements are available at
                <Link href="https://www.tsa.gov/" className="text-primary">
                  {" "}
                  https://www.tsa.gov/
                </Link>
                . We strongly recommend that Travelers review this website well
                before travel.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">CRIMINAL RECORDS</h5>
              <p className="text-lg lg:text-xl">
                Jurisdictions may restrict entry for persons with criminal
                records. You are responsible for understanding all destination
                entry laws and for knowing if you or anyone in your party has a
                criminal record. Agency does not inquire into Traveler criminal
                records in the interests of privacy.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">
                PANDEMICS, EPIDEMICS, AND TRAVEL ADVISORIES
              </h5>
              <p className="text-lg lg:text-xl">
                You are solely responsible for being aware of any compliance
                with any restrictions relating to pandemics, epidemics, and
                other travel advisories. You warrant that you have checked and
                will continually check U.S. Centers for Disease Control (
                <Link href="https://www.cdc.gov/" className="text-primary">
                  CDC
                </Link>
                ) and U.S. Department of State travel advisories, notices,
                warnings, restrictions, and rules. These agencies regulate
                pandemics, epidemics, and other health threats, which can be
                navigated via the following links: (1){" "}
                <Link href="https://www.cdc.gov/" className="text-primary">
                  CDC
                </Link>
                ; (2) U.S. Department of State{" "}
                <Link href="https://travel.state.gov/" className="text-primary">
                  https://travel.state.gov/
                </Link>
                . Government notices and policies may change frequently and
                could affect your itinerary.
              </p>
              <p className="text-lg lg:text-xl">
                You are aware that certain countries, including the United
                States, may require testing and screening prior to entry or
                country, as well as testing and quarantine upon returning to the
                United States or your country of residence. You understand
                destination countries may impose additional restrictions
                regarding entry to and from the United States. Screening
                procedures and restrictions may include restrictions and
                temperature checks in airports, hotels, cruise ships, trains, or
                other means of transport. If you fail to comply with current
                regulations or provide any required testing results or
                documentation, you may be denied boarding, entry, or re-entry to
                the United States or your country of residence.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">
                RESTRICTED PRODUCTS & MATERIALS
              </h5>
              <p className="text-lg lg:text-xl">
                You are responsible for knowing, understanding, and complying
                with applicable laws in each jurisdiction in which you travel or
                transit regarding possession and use of: (1) restricted or
                illegal products and materials, including:
              </p>
              <ul className="list-disc list-inside text-lg lg:text-xl">
                <li>Animals and animal products</li>
                <li>Plants, fruits, vegetables, and soil</li>
                <li>Cultural artifacts</li>
                <li>Alcohol</li>
                <li>Tobacco and vapes</li>
                <li>Firearms and ammunition</li>
                <li>Knives and cutting instruments</li>
                <li>Weapons</li>
                <li>Flammables and explosives</li>
                <li>
                  Drugs, substances, and paraphernalia (including prescription,
                  over-the-counter, and other products and materials)
                </li>
              </ul>
              <p className="text-lg lg:text-xl">
                Some of these may be restricted or illegal in some jurisdictions
                but unrestricted and legal in others (“Drugs”). Possession or
                use of Drugs may result in:
              </p>
              <ul className="list-disc list-inside text-lg lg:text-xl">
                <li>Immediate termination of Travel Services</li>
                <li>
                  Detainment, prosecution, and incarceration by any government
                  authority
                </li>
              </ul>
              <p className="text-lg lg:text-xl">
                Local laws may require you to carry evidence of medical
                prescriptions from a qualified physician.
              </p>
            </div>

            {/*  */}
            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">INDEMNITY</h5>
              <p className="text-lg lg:text-xl">
                You, on behalf of yourself and all minor and adult Travelers on
                the same Booking who reside in your household (each an{" "}
                <span className="font-bold">“Indemnifying Party”</span>), agree
                to indemnify and hold harmless Agency and its owners, directors,
                employees, contractors, agents, representatives, advisors, and
                successors and assigns from all claims, damages, and costs,
                including attorney’s fees and legal costs, arising from any: (1)
                breach of these Terms by an Indemnifying Party; or (2) act or
                omission, negligent or willful, by an Indemnifying Party. This
                clause will survive termination of these Terms.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">FORCE MAJEURE</h5>
              <p className="text-lg lg:text-xl">
                No failure or delay in the performance of any obligation under
                these Terms will be a breach if such failure or delay arises
                from a force majeure or any cause beyond the reasonable and
                foreseeable control of Agency. Force majeure includes acts of
                God, floods, weather conditions, fires, explosions, accidents,
                war or threats of war (declared or undeclared), acts of
                terrorism, sabotage, insurrection, riots, strikes, or civil
                disobedience, pandemics, epidemics, quarantines, and government
                interventions.
              </p>
              <p className="text-lg lg:text-xl">
                Agency is not liable to you and will not provide any refunds
                caused by delay or non-performance under these Terms if such
                delay is due to any force majeure. If Agency or any Supplier is
                affected by a force majeure, it may, in its discretion, vary or
                cancel any itinerary or arrangement in relation to your travel
                without notice. In such case, you will remain responsible,
                financially and otherwise, for all alternative travel
                arrangements.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">HAZARDOUS MATERIALS</h5>
              <p className="text-lg lg:text-xl">
                You are responsible for: (1) knowing, understanding, and
                complying with all applicable laws in each jurisdiction in which
                you travel or transit regarding hazardous materials and
                insecticides; and (2) confirming with your airline or other
                travel provider regarding your compliance with applicable rules.
              </p>
              <p className="text-lg lg:text-xl">
                All air passengers are prohibited by federal law from bringing
                hazardous materials aboard aircraft in their baggage or on their
                person. Violations can result in up to 10 years of imprisonment
                and significant fines under
                <Link href="https://www.govinfo.gov/" className="text-primary">
                  49 U.S.C. 5124
                </Link>
                .
              </p>
              <p className="text-lg lg:text-xl">
                Examples include explosives, compressed gases, flammable liquids
                and solids, oxidizers, poisons, corrosives, radioactive
                materials, and magnetized materials. Common restricted items
                include:
              </p>
              <ul className="list-disc list-inside text-lg lg:text-xl">
                <li>Paints</li>
                <li>Fireworks</li>
                <li>Bleach</li>
                <li>Tear gases</li>
                <li>Oxygen bottles</li>
                <li>Lithium batteries</li>
                <li>Radioactive medical treatments</li>
              </ul>
              <p className="text-lg lg:text-xl">
                Special exceptions apply for small quantities of medical and
                toiletry items in hand luggage or baggage on your person.
                Restrictions on hazardous materials are listed at
                <Link href="https://www.tsa.gov/" className="text-primary">
                  www.tsa.gov
                </Link>
                . Some foreign airports require treatment of passenger cabins
                with insecticides before or during flights. The U.S. Department
                of Transportation lists such requirements at
                <Link
                  href="https://www.transportation.gov/"
                  className="text-primary"
                >
                  www.transportation.gov
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">LIMITATION OF LIABILITY</h5>
              <p className="text-lg lg:text-xl">
                We arrange Travel Services, which are provided and controlled by
                Suppliers who are separate from and independent of us. We have
                no management or control over Suppliers, including their staff,
                representatives, facilities, equipment, products, or services.
              </p>
              <p className="text-lg lg:text-xl">
                Suppliers have sole responsibility and liability to you for
                their respective Travel Services. We have no responsibility or
                liability to you, and we make no representation or warranty,
                express or implied, regarding the value, quality, suitability,
                safety, or provision of Travel Services.
              </p>
              <p className="text-lg lg:text-xl">
                We have no liability to you for any claim of damage or loss
                arising from any act or omission, negligent or willful, of any
                Supplier, Traveler, or other third party, including:
              </p>
              <ul className="list-disc list-inside text-lg lg:text-xl">
                <li>Any damage to or loss of property</li>
                <li>Any physical, emotional, or mental injury or death</li>
                <li>Any cost, inconvenience, disruption, or delay</li>
                <li>
                  Any cancellation, bankruptcy, or cessation of operations
                </li>
                <li>Any misrepresentation or criminal act</li>
              </ul>
              <p className="text-lg lg:text-xl">
                We have no liability to you for any indirect, incidental,
                consequential, punitive, special, or other damages under
                contract, tort, or other theory of liability, even if we become
                aware of the possibility of such damages. If any decision-making
                authority awards you damages against us in law or equity, such
                damages will be limited to the total value of amounts paid in
                making your Bookings.
              </p>
              <p className="text-lg lg:text-xl">
                Neither Party will bring any legal action against the other
                Party as any part of a class, group, representative, or private
                attorney general action. Our entire liabilities are as stated in
                these Terms. All other representations and warranties—express or
                implied, by statute, law, or otherwise—are excluded.
              </p>
              <p className="text-lg lg:text-xl ">
                This clause will survive termination of these Terms.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">Dispute Resolution</h5>
              <p className="text-lg lg:text-xl">
                If any dispute arises under these Terms, the Parties will use
                all reasonable efforts to resolve the dispute informally through
                direct communication.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">Courts</h5>
              <p className="text-lg lg:text-xl">
                If the Parties are unable to resolve a dispute through informal
                discussions within 60 days of notice of dispute, any claim
                arising from these Terms will be resolved exclusively by the
                state or federal courts located in Florida County, Florida,
                which neither Party will challenge based on forum non conveniens
                or similar doctrine.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">Equitable Relief</h5>
              <p className="text-lg lg:text-xl">
                Either Party may seek injunctive or other equitable relief to
                remedy any actual or threatened breach of these Terms.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">Further Assurances</h5>
              <p className="text-lg lg:text-xl">
                Each Party will perform additional acts as necessary to effect
                these Terms. The Parties will address together in good faith any
                unforeseen issues that arise from these Terms with a view to
                mitigating any material adverse impact on either Party.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">Entire Agreement</h5>
              <p className="text-lg lg:text-xl">
                These Terms, together with any Travel Client Agreement between
                the Parties, represent the entire agreement and supersede all
                prior agreements between the Parties regarding their subject
                matter, written or oral, express or implied.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-lg lg:text-xl">
                Tiki Travel Agency is an independent agency authorized to
                operate under Legato.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-2xl">
                SELLER OF TRAVEL CREDENTIALS UNDER Legato.
              </h5>
              <p className="text-lg lg:text-xl">
                • Fla. Seller of Travel Ref. No. ST-41147.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default TermsAndConditions;
