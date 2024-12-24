import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <>
      <SectionLayout>
        <div>
          <h1
            className={`font-semibold text-3xl lg:text-5xl mb-10 text-center`}
          >
            Terms of service
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-lg lg:text-xl mb-3">
              These Terms of Service govern your use of the website located at{" "}
              <Link
                href="https://tikitravelagency.com/ "
                className="text-primary"
              >
                https://tikitravelagency.com/{" "}
              </Link>{" "}
              and any related services provided by Tiki Travel Agency. By
              accessing this website, you agree to abide by these Terms of
              Service and to comply with all applicable laws and regulations. If
              you do not agree with these Terms of Service, you are prohibited
              from using or accessing this website or any other services
              provided by Tiki Travel Agency.
            </p>
            <p className="text-lg lg:text-xl">
              We reserve the right to review and amend these Terms of Service at
              our sole discretion. Upon doing so, we will update this page. Any
              changes to these Terms of Service will take effect immediately
              upon publication.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h5 className=" font-bold text-2xl  ">Limitations of Use:</h5>
            <p className="text-lg lg:text-xl">
              By using this website, you warrant on behalf of yourself, your
              users, and other parties you represent that you will not:
            </p>
            <ul className=" list-item list-disc ms-4 space-y-2">
              <li className="text-lg lg:text-xl">
                Modify, copy, prepare derivative works of, decompile, or reverse
                engineer any materials and software contained on this website.
              </li>
              <li className="text-lg lg:text-xl">
                Remove any copyright or other proprietary notations from any
                materials and software on this website.
              </li>
              <li className="text-lg lg:text-xl">
                Transfer the materials to another person or “mirror” the
                materials on any other server.
              </li>
              <li className="text-lg lg:text-xl">
                Knowingly or negligently use this website or any of its
                associated services in a way that abuses or disrupts our
                networks or any other service Tiki Travel Agency provides.
              </li>
              <li className="text-lg lg:text-xl">
                Use this website or its associated services to transmit or
                publish any harassing, indecent, obscene, fraudulent, or
                unlawful material.
              </li>
              <li className="text-lg lg:text-xl">
                Use this website or its associated services in violation of any
                applicable laws or regulations.
              </li>
              <li className="text-lg lg:text-xl">
                Use this website in conjunction with sending unauthorized
                advertising or spam.
              </li>
              <li className="text-lg lg:text-xl">
                Harvest, collect, or gather user data without the user’s
                consent.
              </li>
            </ul>
            <p className="text-lg lg:text-xl">
              Use this website or its associated services in a way that may
              infringe the privacy, intellectual property rights, or other
              rights of third parties.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Intellectual Property:</h5>
            <p className="text-lg lg:text-xl">
              The intellectual property in the materials contained on this
              website is owned by or licensed to Tiki Travel Agency and is
              protected by applicable copyright and trademark law. We grant our
              users permission to download one copy of the materials for
              personal, non-commercial transitory use. This constitutes the
              grant of a license, not a transfer of title. This license shall
              automatically terminate if you violate any of these restrictions
              or the Terms of Service and may be terminated by Tiki Travel
              Agency at any time.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Liability:</h5>
            <p className="text-lg lg:text-xl">
              Our website and the materials on our website are provided on an
              'as is' basis. To the extent permitted by law, Tiki Travel Agency
              makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties, including, without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
            <p className="text-lg lg:text-xl">
              In no event shall Tiki Travel Agency or its suppliers be liable
              for any consequential loss suffered or incurred by you or any
              third party arising from the use or inability to use this website
              or the materials on this website, even if Tiki Travel Agency or an
              authorized representative has been notified, orally or in writing,
              of the possibility of such damage.
            </p>
            <p className="text-lg lg:text-xl">
              In the context of this agreement, “consequential loss” includes
              any indirect loss, real or anticipated loss of profit, loss of
              benefit, loss of revenue, loss of business, loss of goodwill, loss
              of opportunity, loss of savings, loss of reputation, loss of use,
              and/or loss or corruption of data, whether under statute,
              contract, equity, tort (including negligence), indemnity, or
              otherwise.
            </p>
            <p className="text-lg lg:text-xl">
              Because some jurisdictions do not allow limitations on implied
              warranties or limitations of liability for consequential or
              incidental damages, these limitations may not apply to you.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Accuracy of Materials:</h5>
            <p className="text-lg lg:text-xl">
              The materials appearing on our website are not comprehensive and
              are for general information purposes only. Tiki Travel Agency does
              not warrant or make any representations concerning the accuracy,
              likely results, or reliability of the use of the materials on this
              website or otherwise relating to such materials or on any
              resources linked to this website.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Links:</h5>
            <p className="text-lg lg:text-xl">
              Tiki Travel Agency has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement,
              approval, or control by Tiki Travel Agency of the site. Use of any
              such linked site is at your own risk, and we strongly advise you
              to make your own investigations with respect to the suitability of
              those sites.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Right to Terminate:</h5>
            <p className="text-lg lg:text-xl">
              We may suspend or terminate your right to use our website and
              terminate these Terms of Service immediately upon written notice
              to you for any breach of these Terms of Service.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Severance:</h5>
            <p className="text-lg lg:text-xl">
              Any term of these Terms of Service which is wholly or partially
              void or unenforceable is severed to the extent that it is void or
              unenforceable. The validity of the remainder of these Terms of
              Service is not affected.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" font-bold text-2xl l ">Governing Law:</h5>
            <p className="text-lg lg:text-xl">
              These Terms of Service are governed by and construed in accordance
              with the laws of the State of Florida. You irrevocably submit to
              the exclusive jurisdiction of the courts in that State or
              location.
            </p>
            <p className="text-lg lg:text-xl">
              These Terms of Service were last updated on December 24, 2024.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default TermsOfService;
