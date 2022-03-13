import { PostPreview } from "../types/PostPreview";

export default function Preview (props: PostPreview) {
    return (
        <div>
            <h1 className="font-title text-3xl">{props.title}</h1>
            <p className="text-gray-500">{props.date}</p>
            <p className="">{props.description}</p>
            <div className="py-4"><div className="w-full border-t hr border-gray-300"></div></div>
        </div>
    )
}