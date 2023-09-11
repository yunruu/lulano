import { BiMusic } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function MusicIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <div>
      <BiMusic size={size} color={color} />
    </div>
  );
}
export default MusicIcon;
