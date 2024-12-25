import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const CookiePolicy = () => {
  return (
    <>
      <SectionLayout>
        <div>
          <h1 className={`font-semibold text-3xl lg:text-5xl mb-6 text-center`}>
            Cookie Policy
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-lg lg:text-xl mb-3">
              We use cookies to enhance your experience on our website at
              https://tikitravelagency.com. This cookie policy is part of Tiki
              Travel Agency's privacy policy and explains the use of cookies
              between your device and our site. We may also share basic
              information about third-party services we use, which may also
              utilize cookies as part of their services. However, this policy
              does not cover their cookies. If you prefer not to accept cookies,
              you can adjust your browser settings to refuse cookies from our
              site. Please note that refusing cookies may impact the
              functionality and availability of certain features and services.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h5 className=" font-bold text-2xl">What is a Cookie?</h5>
            <p className="text-lg lg:text-xl">
              A cookie is a small data file stored on your device when you visit
              a website. It often contains information about the website, a
              unique identifier to recognize your browser, data to fulfill the
              cookie's purpose, and its lifespan.
            </p>
            <p className="text-lg lg:text-xl">
              Cookies can enable essential features (e.g., logging in), track
              website usage (e.g., analytics), save user preferences (e.g.,
              language or time zone), and personalize content (e.g., tailored
              advertisements). First-party cookies are set by the site you are
              visiting, while third-party cookies are set by other sites
              providing services or features used on the original site.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className=" font-bold text-2xl ">Types of Cookies We Use</h5>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">Essential Cookies:</h5>
              <p className="text-lg lg:text-xl">
                These cookies are necessary for core website functionality, such
                as user login, account management, and payment processing. We
                use essential cookies to enable these features.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">Performance Cookies:</h5>
              <p className="text-lg lg:text-xl">
                Performance cookies track how visitors use the website. The data
                is typically anonymized and aggregated, helping us understand
                usage patterns and improve website performance.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">Functionality Cookies:</h5>
              <p className="text-lg lg:text-xl">
                These cookies save information about your device and any
                configurations you make on our site (e.g., language and time
                zone preferences) to offer an optimized user experience.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">
                Targeting/Advertising Cookies:
              </h5>
              <p className="text-lg lg:text-xl">
                We do not use targeting or advertising cookies on our site.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">Acceptable Use Policy:</h5>
              <p className="text-lg lg:text-xl">
                This Acceptable Use Policy governs the use of our services,
                collectively referred to as "Products." Tiki Travel Agency
                customers found engaging in prohibited activities may face
                service suspension, account termination, or legal action, as
                applicable.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">
                Customer Accountability:
              </h5>
              <p className="text-lg lg:text-xl">
                You are responsible for your actions and those of others using
                our Products through your account. Complaints about improper
                usage will be directed to the account holder for resolution.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">Copyright Infringement:</h5>
              <p className="text-lg lg:text-xl">
                Do not use our services to share or store unauthorized
                materials. Spam: Sending unsolicited messages, running
                unconfirmed mailing lists, or engaging in unauthorized message
                activities is prohibited.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">Malicious Activity:</h5>
              <p className="text-lg lg:text-xl">
                Activities like hacking, spreading malware, or harassment are
                not tolerated. Other Violations: Actions that violate consumer
                protection laws, privacy rights, or promote illegal activities
                are strictly prohibited.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-xl ">Policy Updates:</h5>

              <p className="text-lg lg:text-xl">
                This policy may be updated periodically. Changes will take
                effect immediately upon publication or as stated in the revised
                version.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default CookiePolicy;
