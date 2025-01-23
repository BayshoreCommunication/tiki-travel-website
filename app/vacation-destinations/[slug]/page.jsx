export async function generateMetadata({ params }) {
  // Filter the package data based on the slug
  const packageDetails = vacationPackagesData?.filter(
    (packages) => packages.slug === params.slug
  );

  if (!packageDetails || packageDetails.length === 0) {
    return {
      title: "Package not found",
      description: "No package details available.",
    };
  }

  // Extract metadata fields from packageDetails
  const { title, metaDescription, image } = packageDetails[0];

  return {
    title: title || "Vacation Package", // Fallback to default title
    description:
      metaDescription ||
      "Explore our exciting vacation packages and discover beautiful destinations.",
    openGraph: {
      title: title || "Vacation Package",
      description:
        metaDescription ||
        "Explore our exciting vacation packages and discover beautiful destinations.",
      images: [
        {
          url: image || "/default-og-image.jpg", // Fallback image
          width: 1200,
          height: 800,
          alt: title || "Vacation Package Image",
        },
      ],
      siteName: "Tiki Travels",
      type: "article",
      locale: "en_US",
    },
  };
}

const page = async ({ params }) => {
  const packageDetails = vacationPackagesData?.filter(
    (packages) => packages.slug === params.slug
  );

  if (!packageDetails || packageDetails.length === 0) {
    notFound();
  }

  // Extract the dynamic background image and title
  const { image: bgImage, title } = packageDetails[0];

  return (
    <>
      <BreadcrumbSection
        bgImage={bgImage} // Dynamic Background Image
        title={title} // Dynamic Title
        subTitle={"Vacation Destinations"}
      />
      {/* Main Content */}
      <div className="py-10 md:py-24">
        <div className="container">
          {packageDetails?.map((packages, index) => (
            <div className="col-span-3 lg:col-span-2" key={index}>
              <div className="mt-5 text-base">{parse(packages?.content)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* More Packages */}
      <MorePackages />
      <CallToAction />
    </>
  );
};

export default page;
