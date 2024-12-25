import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <SectionLayout>
        <div>
          <h1
            className={`font-semibold text-3xl lg:text-5xl mb-10 text-center`}
          >
            Privacy Policy{" "}
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-lg lg:text-xl mb-3">
              Your privacy is important to us. It is Tiki Travel Agency's policy
              to respect your privacy and comply with applicable laws and
              regulations regarding any personal information we may collect
              about you, including through our website,{" "}
              <Link
                href="https://tikitravelagency.com/"
                className="text-primary"
              >
                https://tikitravelagency.com/
              </Link>{" "}
              , and other sites we own and operate.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Information We Collect</h5>
            <p className="text-lg lg:text-xl">
              We collect both information you knowingly provide and data
              automatically sent by your devices when accessing our services.
            </p>
            <p className="text-lg lg:text-xl">
              Voluntarily Provided Information: Includes details you actively
              submit, such as your name, address, date of birth, payment
              information, and preferences.
            </p>
            <p className="text-lg lg:text-xl">
              Automatically Collected Information: Encompasses data like your
              device's IP address, browser type and version, pages visited, time
              and date of your visit, time spent on each page, and other usage
              details.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Use of Cookies</h5>
            <p className="text-lg lg:text-xl">
              We use cookies to collect information about your activity across
              our site. A cookie is a small piece of data stored on your
              computer that helps us understand your preferences and enhance
              your experience.
            </p>

            <p className="text-lg lg:text-xl">
              Use of Your Personal Information
            </p>
            <p className="text-lg lg:text-xl">
              We use your personal information to:
            </p>
            <p className="text-lg lg:text-xl">
              Provide and improve our services.
            </p>
            <p className="text-lg lg:text-xl">
              Communicate with you, including responding to inquiries and
              sending promotional materials (with your consent).
            </p>
            <p className="text-lg lg:text-xl">
              Process transactions and manage bookings.
            </p>
            <p className="text-lg lg:text-xl">
              Analyze usage of our website to enhance user experience.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">
              Security of Your Personal Information
            </h5>
            <p className="text-lg lg:text-xl">
              We take commercially acceptable measures to protect your personal
              information from loss, theft, unauthorized access, disclosure,
              copying, use, or modification. However, please be aware that no
              method of electronic transmission or storage is 100% secure.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">
              Retention of Personal Information
            </h5>
            <p className="text-lg lg:text-xl">
              We retain your personal information only as long as necessary for
              the purposes for which it was collected, or as required by law.
              When no longer needed, we will delete or anonymize your
              information.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Children’s Privacy</h5>
            <p className="text-lg lg:text-xl">
              Our services are not directed at children under 13, and we do not
              knowingly collect personal information from children under 13.
            </p>
            <p className="text-lg lg:text-xl">
              Your Rights and Controlling Your Personal Information
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">You have the right to:</h5>
            <p className="text-lg lg:text-xl">
              Access the personal information we hold about you.
            </p>
            <p className="text-lg lg:text-xl">
              Request corrections to any inaccurate or outdated information.
            </p>
            <p className="text-lg lg:text-xl">
              Withdraw consent for us to use your personal information.
            </p>
            <p className="text-lg lg:text-xl">
              Unsubscribe from marketing communications.
            </p>
            <p className="text-lg lg:text-xl">
              To exercise these rights, please contact us using the details
              provided below.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Third-Party Links</h5>
            <p className="text-lg lg:text-xl">
              Our website may contain links to external sites not operated by
              us. We are not responsible for the content or privacy practices of
              these sites and recommend reviewing their privacy policies.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Changes to This Policy</h5>
            <p className="text-lg lg:text-xl">
              We may update our privacy policy to reflect changes in our
              practices or for other operational, legal, or regulatory reasons.
              We will post any changes on this page.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Contact Us</h5>
            <p className="text-lg lg:text-xl">
              For any questions or concerns regarding your privacy, please
              contact us via the contact form on our website.
            </p>
            <p>This policy is effective as of December 24, 2024.</p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default PrivacyPolicy;
