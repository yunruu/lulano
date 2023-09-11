import { IconContext } from "react-icons";
import { BiCalendar } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function CalendarIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <IconContext.Provider value={{ className: "global-class-name" }}>
      <div>
        <BiCalendar size={size} color={color} />
      </div>
    </IconContext.Provider>
  );
}

export default CalendarIcon;
