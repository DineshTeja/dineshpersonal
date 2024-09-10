import fs from 'fs/promises';
import path from 'path';

export async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const fileNames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const content = await fs.readFile(filePath, 'utf8');
      const id = fileName.replace(/\.(md|rmd)$/, '');

      // Split content into front matter and markdown
      const [, frontMatter, ...contentParts] = content.split('---');
      const markdown = contentParts.join('---').trim();

      console.log(markdown)
      
      // Parse front matter
      const frontMatterObj = JSON.parse(frontMatter.trim());

      return {
        id,
        title: frontMatterObj.title,
        content: markdown,
        date: frontMatterObj.date,
        description: frontMatterObj.description,
        tags: frontMatterObj.tags,
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}