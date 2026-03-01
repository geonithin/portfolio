import { useState, useCallback, useEffect, useRef, ReactNode } from 'react'
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react'
import './GradientText.css'

interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  showBorder?: boolean
  direction?: 'horizontal' | 'vertical' | 'diagonal'
  pauseOnHover?: boolean
  yoyo?: boolean
}

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false)
  const progress = useMotionValue(0)
  const elapsedRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)

  const animationDuration = animationSpeed * 1000

  useAnimationFrame(time => {
    if (isPaused) {
      lastTimeRef.current = null
      return
    }
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time
      return
    }
    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time
    elapsedRef.current += deltaTime

    if (yoyo) {
      const fullCycle = animationDuration * 2
      const cycleTime = elapsedRef.current % fullCycle
      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100)
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100)
      }
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100)
    }
  })

  useEffect(() => {
    elapsedRef.current = 0
    progress.set(0)
  }, [animationSpeed, progress, yoyo])

  const backgroundPosition = useTransform(progress, p => {
    if (direction === 'vertical') return `50% ${p}%`
    return `${p}% 50%`
  })

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true)
  }, [pauseOnHover])

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false)
  }, [pauseOnHover])

  const gradientAngle =
    direction === 'vertical' ? 'to bottom' : direction === 'diagonal' ? 'to bottom right' : 'to right'
  const gradientColors = [...colors, colors[0]].join(', ')

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === 'vertical' ? '100% 300%' : '300% 100%',
    backgroundRepeat: 'repeat' as const,
  }

  return (
    <motion.span
      className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && (
        <motion.span className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} />
      )}
      <motion.span className="text-content" style={{ ...gradientStyle, backgroundPosition }}>
        {children}
      </motion.span>
    </motion.span>
  )
}
