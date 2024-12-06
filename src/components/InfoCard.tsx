import IconBage from "./IconBadge";
import { LucideIcon } from "lucide-react";

function InfoCard({
  label,
  numberOfItem,
  icon,
  variant = "default",
}: {
  label: string;
  numberOfItem: number;
  icon: LucideIcon;
  variant?: "default" | "success";
}) {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBage variant={`${variant}`} icon={icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500 text-sm">{numberOfItem}</p>
      </div>
    </div>
  );
}
export default InfoCard;
