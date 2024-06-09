import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { ContentType, MdContent } from '@/app/types/types'


export const getListOfItems = (type: ContentType) => {
  const folderPath = itemPath(type)
  const folder = path.join(process.cwd(), folderPath)
  const files = fs.readdirSync(folder)
  const mdFiles = files.filter(file => file.endsWith('.md'))

  return mdFiles.map(filename => {
    const contents = fs.readFileSync(path.join(folder, filename), 'utf8')
    const { data } = matter(contents)

    return {
      ...data,
      slug: filename.replace('.md', '')
    }
  })

}

export const getItemContent = (type: ContentType, slug: string) => {
  const folderPath = itemPath(type)
  const file = path.join(process.cwd(), folderPath, slug) + '.md'
  const content = fs.readFileSync(file, 'utf8')
  return matter(content)
}

export const getFilteredListOfItems = (type: ContentType, term: string): MdContent[] | null => {
  const item = getListOfItems(type) as MdContent[]
  const filteredItems = item.filter((item: MdContent) => {
    if(!item.tags) {
      return null
    }
    const lowercaseTags = item.tags.map((tag) => tag.toLowerCase());
    const lowercaseTerm = term.toLowerCase()
    return lowercaseTags.includes(lowercaseTerm);
  });
  return filteredItems
}

const itemPath = (type: ContentType): string => {
  switch (type) {
    case "Book":
      return 'src/app/books/content'
    case "Lab":
      return 'src/app/lab/content'
    default:
      return 'src/app/books/content';
  }
}