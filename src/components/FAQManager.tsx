'use client'

import { useState } from 'react'
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQManagerProps {
  faqs: FAQItem[]
  onChange: (faqs: FAQItem[]) => void
}

export default function FAQManager({ faqs, onChange }: FAQManagerProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const addFAQ = () => {
    onChange([...faqs, { question: '', answer: '' }])
    setExpandedIndex(faqs.length)
  }

  const removeFAQ = (index: number) => {
    const newFaqs = faqs.filter((_, i) => i !== index)
    onChange(newFaqs)
    setExpandedIndex(null)
  }

  const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
    const newFaqs = [...faqs]
    newFaqs[index][field] = value
    onChange(newFaqs)
  }

  const moveFAQ = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= faqs.length) return

    const newFaqs = [...faqs]
    const temp = newFaqs[index]
    newFaqs[index] = newFaqs[newIndex]
    newFaqs[newIndex] = temp
    onChange(newFaqs)
    setExpandedIndex(newIndex)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black">FAQ Schema</h3>
          <p className="text-sm text-gray-600">Add frequently asked questions for better SEO</p>
        </div>
        <button
          type="button"
          onClick={addFAQ}
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add FAQ</span>
        </button>
      </div>

      {faqs.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500 mb-2">No FAQs added yet</p>
          <button
            type="button"
            onClick={addFAQ}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            Add your first FAQ →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* FAQ Header */}
              <div
                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-700">
                    {faq.question || `FAQ #${index + 1} (Empty)`}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      moveFAQ(index, 'up')
                    }}
                    disabled={index === 0}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      moveFAQ(index, 'down')
                    }}
                    disabled={index === faqs.length - 1}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFAQ(index)
                    }}
                    className="p-1 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* FAQ Content (Expanded) */}
              {expandedIndex === index && (
                <div className="p-4 space-y-4 bg-white">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question *
                    </label>
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                      placeholder="What is your question?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Answer *
                    </label>
                    <textarea
                      value={faq.answer}
                      onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                      placeholder="Provide a detailed answer..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {faqs.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            ✨ <strong>{faqs.length} FAQ{faqs.length > 1 ? 's' : ''}</strong> will be added to your page with structured data for Google rich results
          </p>
        </div>
      )}
    </div>
  )
}
