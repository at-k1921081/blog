import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("blog");

	return rss({
		title: "Alex Tsvetanov | Blog",
		description: "My blog website",
		site: context.site,
		// items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/posts/${post.id}/`,
		})),
		customData: "<language>en-us</language>",
	});
}
