import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export const getListOfLab = () => {
  const folder = path.join(process.cwd(), 'src/app/lab')
  const files = fs.readdirSync(folder)
  const mdFiles = files.filter(file => file.endsWith('.md'))

  return mdFiles.map(filename => {
    const contents = fs.readFileSync(path.join(folder, filename), 'utf8')
    const { data, content } = matter(contents)

    return {
      ...data,
      content,
      slug: filename.replace('.md', '')
    }
  })

}

export const getLabContent = (slug) => {
  const file = path.join(process.cwd(), 'src/app/lab', slug) + '.md'
  const content = fs.readFileSync(file, 'utf8')
  return matter(content)
}