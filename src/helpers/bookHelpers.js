import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export const getListOfBooks = () => {
  const folder = path.join(process.cwd(), 'src/app/books')
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

export const getBookContent = (slug) => {
  const file = path.join(process.cwd(), 'src/app/books', slug) + '.md'
  const content = fs.readFileSync(file, 'utf8')
  return matter(content)
}