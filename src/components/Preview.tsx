import Link from 'next/link';
import { PostPreview } from '../types/PostPreview';

export default function Preview(props: PostPreview) {
	return (
		<div>
			<Link href={`/posts/${props.slug}`} passHref>
				<h1 className="font-title text-3xl cursor-pointer">{props.title}</h1>
			</Link>
			<p className="text-gray-500">{props.date}</p>
			<p className="">{props.description}</p>
			<div className="py-4">
				<div className="w-full border-t hr border-gray-300"></div>
			</div>
		</div>
	);
}
