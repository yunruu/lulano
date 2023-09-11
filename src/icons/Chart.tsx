import { IconContext } from "react-icons";
import { BiNotepad } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function ChartIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <IconContext.Provider value={{ className: "global-class-name" }}>
      <div>
        <BiNotepad size={size} color={color} />
      </div>
    </IconContext.Provider>
  );
}

export default ChartIcon;
