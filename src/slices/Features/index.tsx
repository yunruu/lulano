import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import OuterBound from "@/components/OuterBound";
import Heading from "@/components/Heading";
import { CalendarIcon, ChartIcon, HourglassIcon, MusicIcon } from "@/icons";

const components: JSXMapSerializer = {
  heading2: ({ children }) => {
    return (
      <Heading as="h2" size="md" className="text-center mb-12 md:mb-16">
        {children}
      </Heading>
    );
  },
  heading3: ({ children }) => {
    return (
      <Heading
        as="h3"
        size="sm"
        className="sm:text-left text-center font-medium mb-2"
      >
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => {
    return (
      <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
        {children}
      </p>
    );
  },
};

const icons = {
  music: <MusicIcon size="3em" color="#6E56CF" />,
  calendar: <CalendarIcon size="3em" color="#6E56CF" />,
  chart: <ChartIcon size="3em" color="#6E56CF" />,
  hourglass: <HourglassIcon size="3em" color="#6E56CF" />,
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <OuterBound
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, idx) => (
          <div
            key={idx}
            className="max-w-xs grid sm:place-items-start place-items-center"
          >
            {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
            <PrismicRichText field={item.title} components={components} />
            <PrismicRichText field={item.description} components={components} />
          </div>
        ))}
      </div>
    </OuterBound>
  );
};

export default Features;
