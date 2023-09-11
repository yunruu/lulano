import { IconContext } from "react-icons";
import { BiMusic } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function MusicIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <IconContext.Provider value={{ className: "global-class-name" }}>
      <div>
        <BiMusic size={size} color={color} />
      </div>
    </IconContext.Provider>
  );
}
export default MusicIcon;
