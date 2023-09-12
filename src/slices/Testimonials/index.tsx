import Heading from "@/components/Heading";
import OuterBound from "@/components/OuterBound";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => {
    return (
      <Heading
        as="h2"
        size="md"
        className="text-center mb-9 md:mb-12 font-semibold"
      >
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => {
    return (
      <p className="text-lg md:text-xl font-normal font-body text-slate-600 mb-8">
        {children}
      </p>
    );
  },
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.items.map(async (item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        const testimonial = await client.getByUID(
          "testimonial",
          item.testimonial.uid
        );
        return testimonial;
      }
    })
  );

  return (
    <OuterBound
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} components={components} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {testimonials.map(
          (item, idx) =>
            item && (
              <div
                key={idx}
                className="border bg-white shadow-lg rounded-lg px-8 py-10 md:px-14 md:py-12 grid content-between"
              >
                <PrismicRichText
                  field={item.data.quote}
                  components={components}
                />
                <div className="flex items-center">
                  <PrismicNextImage
                    width={56}
                    height={56}
                    field={item.data.avatar}
                    className="rounded-full mr-4"
                    imgixParams={{ fit: "crop", ar: "1:1", mask: "ellipse" }}
                  />
                  <div>
                    <p className="text-base font-medium text-slate-700">
                      {item.data.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {item.data.job_title}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </OuterBound>
  );
};

export default Testimonials;
