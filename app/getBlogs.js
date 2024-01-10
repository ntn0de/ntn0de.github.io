import fs from "fs";

import path from "path";

import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "blogs");
const mdFileExtension = ".md";

function getMdFiles() {
  return fs
    .readdirSync(blogsDirectory)
    .map((fileName) => path.parse(fileName))
    .filter((parsedFile) => parsedFile.ext === mdFileExtension);
}

export function getAllBlogsPath() {
  const allMdFiles = getMdFiles();
  return allMdFiles.map((parsedFile) => ({
    params: { id: parsedFile.name },
  }));
}

export function getBlogData(id) {
  const fullPath = path.join(blogsDirectory, id + mdFileExtension);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const metadata = { ...data, id };
  return { metadata, content };
}

export async function getBlogs() {
  const allMdFiles = getMdFiles();

  const postsMetaData = allMdFiles.map((parsedFile) => {
    const fullPath = path.join(blogsDirectory, parsedFile.base);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);
    const metadata = { ...data, id: parsedFile.name };
    return metadata;
  });

  postsMetaData.sort((a, b) =>
    Date.parse(a.date) < Date.parse(b.date) ? 1 : -1
  );
  return postsMetaData;
}
