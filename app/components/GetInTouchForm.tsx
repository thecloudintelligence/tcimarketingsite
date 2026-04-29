'use client'

import { useState } from 'react'
import Image from 'next/image'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSeGg3v4FF7ae72nhs54X_6W-zS0IcpvONRMrIBVqZts8f1i_w/formResponse'

export default function GetInTouchForm() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const payload = new URLSearchParams({
      'entry.754406640': formData.name,
      'entry.1762212097': formData.email,
      'entry.990331660': formData.purpose,
    })

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: payload.toString(),
      })

      setSubmitStatus('success')
      setFormData({ name: '', email: '', purpose: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSubmitStatus('idle')
          setShowForm(true)
        }}
        style={{ background: 'transparent', border: 'none', padding: 0, margin: 0 }}
        aria-label="Open contact form"
      >
        <div className="getTouchArrow">
          <div className="getTouchArrow2">
            <Image src="/img/arrow-up-right.svg" alt="arrow" width={84} height={84} />
          </div>
        </div>
      </button>

      {showForm && (
        <div
          className="modal fade show"
          style={{
            display: 'block',
            overflow: 'hidden',
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowForm(false)
          }}
        >
          <div
            className="modal-dialog"
            style={{ margin: '2rem auto', maxWidth: '600px', position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content tci-contact-modal" style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <div
                className="modal-header"
                style={{
                  background: '#2a57be',
                  color: '#fff',
                  padding: '20px 30px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h5 className="modal-title" style={{ margin: 0, fontSize: '24px', fontWeight: '600' }}>
                  Get in Touch
                </h5>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '28px',
                    cursor: 'pointer',
                    padding: 0,
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ padding: '30px', background: '#fff' }}>
                <form onSubmit={handleSubmit}>
                  {submitStatus === 'success' && (
                    <div
                      style={{
                        marginBottom: '20px',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #b7ebc6',
                        background: '#f2fcf5',
                        color: '#166534',
                        fontSize: '14px',
                        fontWeight: 500,
                      }}
                    >
                      Thank you! Your message has been submitted successfully.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div
                      style={{
                        marginBottom: '20px',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #fecaca',
                        background: '#fff7f7',
                        color: '#b91c1c',
                        fontSize: '14px',
                        fontWeight: 500,
                      }}
                    >
                      Unable to submit right now. Please try again.
                    </div>
                  )}

                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="contact-name-popup" style={{ display: 'block', marginBottom: '8px', color: '#02040a', fontSize: '16px', fontWeight: 500 }}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name-popup"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e1e5e9', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="contact-email-popup" style={{ display: 'block', marginBottom: '8px', color: '#02040a', fontSize: '16px', fontWeight: 500 }}>
                      Email Address *
                    </label>
                    <input
                      id="contact-email-popup"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e1e5e9', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="contact-purpose-popup" style={{ display: 'block', marginBottom: '8px', color: '#02040a', fontSize: '16px', fontWeight: 500 }}>
                      Purpose of Connecting *
                    </label>
                    <textarea
                      id="contact-purpose-popup"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e1e5e9', borderRadius: '4px', fontSize: '16px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      style={{ padding: '12px 24px', background: '#f1f2f4', color: '#02040a', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                    {submitStatus === 'success' && (
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitStatus('idle')
                          setShowForm(false)
                        }}
                        style={{ padding: '12px 24px', background: '#111827', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}
                      >
                        Close
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{ padding: '12px 24px', background: '#2a57be', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 500, cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
