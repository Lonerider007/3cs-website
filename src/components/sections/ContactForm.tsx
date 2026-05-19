'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { sendContactEmail } from '@/actions/contact'
import { type ContactFormData } from '@/types'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  service: z.string().min(1, 'Please select a service'),
  brief: z.string().min(20, 'Please describe your project (at least 20 characters)'),
})

const services = [
  'AI Orchestration',
  'AI Automation',
  'Intelligent Workflow Systems',
  'AI Integrations',
  'Analytics Infrastructure',
  'Other / Not Sure',
]

const inputClass = cn(
  'w-full px-4 py-3 rounded-xl border border-[rgba(0,0,0,0.10)] bg-white text-sm text-[#1D1D1F]',
  'placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/30 focus:border-[#0071E3]',
  'transition-all duration-150',
)

const errorClass = 'text-xs text-red-500 mt-1'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: ContactFormData) {
    setStatus('loading')
    setServerError('')
    const result = await sendContactEmail(data)
    if (result.success) {
      setStatus('success')
      reset()
    } else {
      setStatus('error')
      setServerError(result.error ?? 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[#A7F3D0] bg-[#D1FAE5] p-8">
        <p className="text-base font-semibold text-[#065F46]">Message sent.</p>
        <p className="mt-1 text-sm text-[#065F46]/80">We&apos;ll respond within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#1D1D1F] mb-1.5">Name</label>
          <input {...register('name')} placeholder="Your name" className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1D1D1F] mb-1.5">Email</label>
          <input {...register('email')} type="email" placeholder="you@company.com" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1D1D1F] mb-1.5">Company</label>
        <input {...register('company')} placeholder="Company or organisation name" className={inputClass} />
        {errors.company && <p className={errorClass}>{errors.company.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1D1D1F] mb-1.5">Service</label>
        <select {...register('service')} className={cn(inputClass, 'cursor-pointer')}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1D1D1F] mb-1.5">Project Brief</label>
        <textarea
          {...register('brief')}
          rows={5}
          placeholder="Tell us what you're building and how AI can help."
          className={cn(inputClass, 'resize-none')}
        />
        {errors.brief && <p className={errorClass}>{errors.brief.message}</p>}
      </div>

      {status === 'error' && serverError && (
        <p className="text-sm text-red-500">{serverError}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'loading'}
        className="self-start"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message →'}
      </Button>
    </form>
  )
}
