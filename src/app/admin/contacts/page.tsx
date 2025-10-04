import { createClient } from '@/lib/supabase/server'
import { format } from 'date-fns'
import { Mail, Phone, Building, Calendar, Download } from 'lucide-react'
import Link from 'next/link'

export default async function ContactsPage() {
  const supabase = await createClient()

  const { data: submissions } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Contact Submissions</h1>
          <p className="text-gray-600">View and manage all contact form submissions</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
            {submissions?.length || 0} Total
          </span>
        </div>
      </div>

      {submissions && submissions.length > 0 ? (
        <div className="grid gap-6">
          {submissions.map((submission) => (
            <div key={submission.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-yellow-300 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-3">{submission.name}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <a href={`mailto:${submission.email}`} className="flex items-center space-x-2 hover:text-yellow-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>{submission.email}</span>
                    </a>
                    {submission.phone && (
                      <a href={`tel:${submission.phone}`} className="flex items-center space-x-2 hover:text-yellow-600 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>{submission.phone}</span>
                      </a>
                    )}
                    {submission.company && (
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span>{submission.company}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(submission.created_at), 'MMM d, yyyy h:mm a')}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="text-sm font-semibold text-gray-700 mb-2">Message:</p>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{submission.message}</p>
              </div>

              <div className="mt-4 flex items-center space-x-3">
                <a 
                  href={`mailto:${submission.email}?subject=Re: Your inquiry to Creative Wired&body=Hi ${submission.name},%0D%0A%0D%0A`}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform"
                >
                  Reply via Email
                </a>
                {submission.phone && (
                  <a 
                    href={`tel:${submission.phone}`}
                    className="bg-gray-200 text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Call Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
          <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No submissions yet</h3>
          <p className="text-gray-600">Contact form submissions will appear here</p>
        </div>
      )}
    </div>
  )
}
