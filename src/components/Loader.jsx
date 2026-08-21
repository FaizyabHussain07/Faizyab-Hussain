import { useEffect, useState } from 'react'

/**
 * Full-page loader shown on initial load and route changes.
 * Fades out after content is ready.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Give the page a moment to render, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setVisible(false), 400)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <img src="/faizyab-logo.png" alt="" className="loader-logo" width="48" height="48" />
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}
