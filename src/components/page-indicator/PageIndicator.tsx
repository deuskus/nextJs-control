import {FC} from "react";

type PageProps = {
    page: number,
}

export const PageIndicator: FC<PageProps> = ({page}) => {
    return (
        <div className="flex justify-center items-center gap-2 text-lg font-semibold text-black mt-4">
            <span>Page</span>
            <span>{page}</span>
        </div>
    );
};