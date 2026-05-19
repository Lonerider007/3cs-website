import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { type CaseStudy, type CaseStudyFrontmatter } from '@/types'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'case-studies')

function normalizeFrontmatter(data: Record<string, unknown>): CaseStudyFrontmatter {
  const fm = data as unknown as CaseStudyFrontmatter
  return {
    ...fm,
    date: data.date instanceof Date
      ? data.date.toISOString().split('T')[0]
      : String(data.date),
  }
}

export function getAllCaseStudies(): CaseStudyFrontmatter[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
    const { data } = matter(raw)
    return normalizeFrontmatter(data)
  })
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { ...normalizeFrontmatter(data), content }
}
