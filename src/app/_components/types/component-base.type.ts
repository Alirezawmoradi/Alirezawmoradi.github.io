import {Variant} from "@/app/_components/types/variant.type";
import {Size} from "@/app/_components/types/size.type";

export type ComponentBase = {
    isDisabled?: boolean;
    className?: string;
    variant?: Variant;
    size?: Size;
}