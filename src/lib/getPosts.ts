import fs from 'fs';
import matter from 'gray-matter';

const postDirectory = './src/posts/';

export const parsePost = (file: string) => {
    const readPost = (filename: string) => fs.readFileSync(`${postDirectory}${filename}`).toString();
    let { data: metadata, content: body } = matter(readPost(file));
    let [day, month, year] = metadata.date.split('-');
    let postDate = new Date(Number(year), Number(month) - 1, Number(day));
    let postSlug = file.split('.mdx')[0]

    return {
        title: metadata.title,
        description: metadata.description,
        date: postDate,
        content: body,
        slug: postSlug
    }
}

let postList = fs.readdirSync(postDirectory)
    .map(parsePost)
    .sort(
        (post1, post2) => 
        (post1.date).getTime() - (post2.date).getTime()
    );

export default postList;