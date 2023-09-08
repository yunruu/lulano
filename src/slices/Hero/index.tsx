import Heading from "@/components/Heading";
import LinkButton from "@/components/LinkButton";
import OuterBound from "@/components/OuterBound";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      size="md"
      as="h1"
      className="mb-4 md:mb-8 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 font-body text-center text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <OuterBound
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText field={slice.primary.body} components={components} />
        <LinkButton field={slice.primary.button_link} className="mb-10">
          {slice.primary.button_text}
        </LinkButton>
        <PrismicNextImage
          field={slice.primary.image}
          className="drop-shadow-xl max-w-4xl w-full"
        />
      </div>
    </OuterBound>
  );
};

export default Hero;
