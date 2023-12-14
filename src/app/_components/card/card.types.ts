import {ComponentBase} from "@/app/_components/types/component-base.type";

export type CardProps = ComponentBase & {
    index?: number;
    title?: Title;
}
export type Title = 'Frontend Developer' | 'Mobile Developer'
