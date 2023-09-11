import { BiNotepad } from "react-icons/bi";

type IconProps = {
  size?: string;
  color?: string;
};

function ChartIcon({ size = "2em", color = "#000" }: IconProps) {
  return (
    <div>
      <BiNotepad size={size} color={color} />
    </div>
  );
}

export default ChartIcon;
