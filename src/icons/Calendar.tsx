import { BiCalendar } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function CalendarIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <div>
      <BiCalendar size={size} color={color} />
    </div>
  );
}

export default CalendarIcon;
