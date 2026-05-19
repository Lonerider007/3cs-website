export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  brief: string
}

export interface CaseStudyFrontmatter {
  title: string
  client: string
  tag: string
  date: string
  stack: string
  outcome: string
  slug: string
}

export interface CaseStudy extends CaseStudyFrontmatter {
  content: string
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
}
