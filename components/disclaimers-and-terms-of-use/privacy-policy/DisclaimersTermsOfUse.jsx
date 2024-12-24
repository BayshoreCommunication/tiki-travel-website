import SectionLayout from "@/components/shared/SectionLayout";
import Link from "next/link";
import React from "react";

const css = `
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
  }
  h5{
    padding-top: 15px;
    font-size: 22px;
    padding-bottom: 15px;
    font-weight: bold;
  }
  p{
    padding-top: 6px;
    padding-bottom: 6px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;

  }
  li{
    margin-bottom: 5px;
  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const DisclaimersTermsOfUse = () => {
  return (
    <>
      <style>{css}</style>
      <SectionLayout>
        <div>
          <h1
            className={`font-semibold text-3xl lg:text-5xl mb-10 text-center`}
          >
            Disclaimers
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-lg lg:text-xl mb-3">
              At Tiki Travel Agency, we prioritize your privacy and are
              committed to complying with all relevant laws and regulations
              concerning the personal information we collect from you through
              our website,{" "}
              <Link
                href="https://tikitravelagency.com/"
                className="text-primary"
              >
                https://tikitravelagency.com/
              </Link>{" "}
              , and other platforms we manage.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Information Collection</h5>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">
              We gather two types of information:
            </h5>
            <p className="text-lg lg:text-xl">
              Voluntarily Provided Information: Details you actively share with
              us, such as your name, contact information, and preferences, when
              engaging with our services or promotions.
            </p>

            <p className="text-lg lg:text-xl">
              Automatically Collected Information: Data your devices send during
              interactions with our website, including IP addresses, browser
              types, pages visited, and the duration of visits.
            </p>
            <p className="text-lg lg:text-xl">Use of Collected Information</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">
              The information we collect is utilized to:
            </h5>
            <p className="text-lg lg:text-xl">
              Enhance and personalize your experience with our services.
            </p>
            <p className="text-lg lg:text-xl">
              Communicate with you effectively.
            </p>
            <p className="text-lg lg:text-xl">
              Analyze website usage to improve our offerings.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Communication</h5>
            <p className="text-lg lg:text-xl">
              To ensure accurate and prompt handling of your inquiries,
              communications between you and Tiki Travel Agency, including those
              with our affiliates or agents, may be recorded. We may also
              contact you via phone calls or text messages at the numbers
              associated with your account, using methods such as prerecorded
              messages or automated dialing systems. By providing your contact
              numbers, you confirm they are yours and that you consent to
              receive communications from us. Additionally, we may send emails
              to any email address you provide or use other electronic
              communication methods as permitted by law.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Security</h5>
            <p className="text-lg lg:text-xl">
              We implement commercially acceptable measures to protect your
              personal information from loss, theft, unauthorized access,
              disclosure, copying, use, or modification. However, please be
              aware that no method of electronic transmission or storage is
              entirely secure. You are responsible for maintaining the security
              of your passwords and personal information within our services.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Retention of Information</h5>
            <p className="text-lg lg:text-xl">
              We retain your personal information only as long as necessary for
              the purposes outlined in this policy or as required by law. Once
              your information is no longer needed, we will delete or anonymize
              it.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Children’s Privacy</h5>
            <p className="text-lg lg:text-xl">
              Our website may contain links to external sites not operated by
              us. We are not responsible for the content or privacy practices of
              these sites and recommend reviewing their privacy policies.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Your Rights</h5>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl ">You have the right to:</h5>
            <p className="text-lg lg:text-xl">
              Access the personal information we hold about you.
            </p>
            <p>
              Request corrections to any inaccurate or outdated information.
            </p>
            <p>Withdraw consent for direct marketing communications.</p>
            <p>
              Unsubscribe from our email database or opt-out of communications
              by contacting us or using the opt-out facilities provided in the
              communication.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl ">Use of Cookies</h5>
            <p className="text-lg lg:text-xl">
              We use cookies to collect information about your activity on our
              site to enhance your experience. For more details, please refer to
              our Cookie Policy.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl ">External Links</h5>
            <p className="text-lg lg:text-xl">
              Our website may contain links to external sites not operated by
              us. We are not responsible for the content or privacy practices of
              these sites and recommend reviewing their privacy policies.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl ">Policy Updates</h5>
            <p className="text-lg lg:text-xl">
              We may update this privacy policy to reflect changes in our
              practices or for other operational, legal, or regulatory reasons.
              The latest version will always be available on our website.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl ">Contact Us</h5>
            <p className="text-lg lg:text-xl">
              If you have any questions or concerns regarding your privacy,
              please contact us via the contact form on our website.
            </p>
            <p>This policy is effective as of December 24, 2024.</p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default DisclaimersTermsOfUse;
