import { BiHourglass } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function HourglassIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <div>
      <BiHourglass size={size} color={color} />
    </div>
  );
}

export default HourglassIcon;
