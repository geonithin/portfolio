import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './ProjectGallery.css'

interface GalleryImage {
  src: string
  alt: string
  label?: string
}

interface ProjectGalleryProps {
  images: GalleryImage[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close])

  return (
    <>
      <div className="pg-row">
        {images.map((img, i) => (
          <button
            key={i}
            className="pg-btn"
            aria-label={`View ${img.alt}`}
            type="button"
            onClick={() => setLightbox(img)}
          >
            {/* back panel = screenshot */}
            <span className="pg-btn__back">
              <img src={img.src} alt={img.alt} className="pg-btn__thumb" />
            </span>
            {/* front panel = white glass card with icon + label */}
            <span className="pg-btn__front">
              <svg className="pg-btn__front-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="14" x="3" y="5" rx="2"/>
                <circle cx="8.5" cy="10.5" r="1.5"/>
                <path d="m21 15-5-5L5 19"/>
              </svg>
              {img.label && <span className="pg-btn__front-label">{img.label}</span>}
            </span>
          </button>
        ))}
      </div>

      {lightbox && createPortal(
        <div className="pg-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Screenshot preview">
          <button className="pg-overlay__close" onClick={close} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          <div className="pg-overlay__frame" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="pg-overlay__img" />
            {lightbox.label && <p className="pg-overlay__caption">{lightbox.label}</p>}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
