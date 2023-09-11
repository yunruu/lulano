import { IconContext } from "react-icons";
import { BiHourglass } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function HourglassIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <IconContext.Provider value={{ className: "global-class-name" }}>
      <div>
        <BiHourglass size={size} color={color} />
      </div>
    </IconContext.Provider>
  );
}

export default HourglassIcon;
