import { cn } from "@/lib/utils";
import currency from "currency.js";

interface Props {
  type: string;
  value: number;
  Icon: React.ElementType;
  color: string;
}

const BlockOperation = ({ type, Icon, value, color }: Props) => {
  return (
    <div className="bg-white p-6 rounded-3xl flex justify-between w-[25rem] items-center">
      <div className="space-y-2">
        <div className="font-light text-lg">{type}</div>
        <div className="font-bold text-xl">
          {currency(value / 100, {
            symbol: "R$ ",
            decimal: ",",
            separator: ".",
          }).format()}
        </div>
      </div>

      <div
        className={cn(
          `p-2 rounded-full items-center flex justify-center ${color}`
        )}
      >
        <Icon width={26} height={26} className="text-white " />
      </div>
    </div>
  );
};

export { BlockOperation };
