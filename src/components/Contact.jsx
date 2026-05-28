import { useState } from 'react'
import { Mail, MapPin, Clock, Send, Loader2, Linkedin, Github, MessageSquare } from 'lucide-react'

export default function Contact({ onShowSuccessModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [statusType, setStatusType] = useState("") // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate inputs
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatusMessage("Please complete all required fields correctly.")
      setStatusType("error")
      return
    }

    setIsSubmitting(true)
    setStatusMessage("")
    
    // FormSubmit AJAX payload
    const postData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "New Portfolio Inquiry",
      message: formData.message,
      _captcha: "false",
      _template: "table",
      _subject: `New Portfolio Inquiry from ${formData.name}`,
      _autoresponse: "Thank you for reaching out! I've received your message and will get back to you within 24 hours. — Faizyab Hussain"
    }

    fetch("https://formsubmit.co/ajax/syedfaizyabhussain07@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Server responded with error status")
        return res.json()
      })
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          setFormData({ name: "", email: "", subject: "", message: "" })
          onShowSuccessModal()
        } else {
          throw new Error(data.message || "Failed to submit message")
        }
      })
      .catch((err) => {
        console.error("FormSubmit Error:", err)
        setStatusMessage("Something went wrong. Please try again or email directly at syedfaizyabhussain07@gmail.com.")
        setStatusType("error")
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contact" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-teal/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN - Information Nodes */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mt-6">
                Let’s Build Something <span className="text-gradient-teal">Exceptional</span>
              </h2>
              
              <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-md">
                Have a SaaS proposal, custom AI workflow requirement, layout concept, or contract inquiry? Let's engineer a solution together.
              </p>
            </div>

            {/* Icon Info Nodes */}
            <div className="space-y-6 pt-4">
              
              {/* Mail */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-light" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Email Address</p>
                  <a 
                    href="mailto:syedfaizyabhussain07@gmail.com" 
                    className="text-xs font-semibold text-slate-200 hover:text-teal-light transition-colors"
                  >
                    syedfaizyabhussain07@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Location</p>
                  <p className="text-xs font-semibold text-slate-200">Karachi, Pakistan · Remote Worldwide</p>
                </div>
              </div>

              {/* Clock */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Response Time</p>
                  <p className="text-xs font-semibold text-slate-200">Typically responds within 2 hours</p>
                </div>
              </div>

            </div>

            {/* Socials Connection */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Direct Channels</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/faizyabhussain"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal/30 text-slate-400 hover:text-teal-light flex items-center justify-center transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/faizyabhussain07"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal/30 text-slate-400 hover:text-teal-light flex items-center justify-center transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923352811970"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal/30 text-slate-400 hover:text-teal-light flex items-center justify-center transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-[32px] p-6 sm:p-10 border border-white/5 bg-slate-dark/30">
              <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono pl-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-5 py-4 rounded-xl premium-input ${
                        errors.name ? 'border-red-500/40 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-400 font-mono pl-2">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono pl-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className={`w-full px-5 py-4 rounded-xl premium-input ${
                        errors.email ? 'border-red-500/40 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-400 font-mono pl-2">{errors.email}</p>}
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono pl-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project proposal / contract opportunity"
                    className="w-full px-5 py-4 rounded-xl premium-input"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono pl-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, and budget specs..."
                    rows="5"
                    className={`w-full px-5 py-4 rounded-xl premium-input resize-none ${
                      errors.message ? 'border-red-500/40 focus:border-red-500' : ''
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-red-400 font-mono pl-2">{errors.message}</p>}
                </div>

                {/* Local status indicators */}
                {statusMessage && (
                  <div className={`p-4 rounded-xl text-xs font-semibold ${
                    statusType === "success" 
                      ? 'bg-teal/10 border border-teal/20 text-teal-light' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-450'
                  }`}>
                    {statusMessage}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-premium-teal w-full sm:w-auto px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending Inquiry...</span>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                    </>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
