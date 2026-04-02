import { useEffect, useRef } from 'react'

interface Flake {
  x: number
  y: number
  r: number       // radius
  speed: number
  drift: number   // horizontal drift speed
  driftAngle: number
  opacity: number
}

export function SnowflakeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const COUNT = 120

    function resize() {
      canvas!.width  = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    // Initialise flakes spread across full height
    const flakes: Flake[] = Array.from({ length: COUNT }, () => ({
      x:          Math.random() * canvas.width,
      y:          Math.random() * canvas.height,
      r:          1 + Math.random() * 2.2,
      speed:      0.35 + Math.random() * 0.55,
      drift:      0.18 + Math.random() * 0.22,
      driftAngle: Math.random() * Math.PI * 2,
      opacity:    0.25 + Math.random() * 0.45,
    }))

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      for (const f of flakes) {
        ctx!.beginPath()
        ctx!.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255,255,255,${f.opacity})`
        ctx!.fill()

        // Move
        f.y          += f.speed
        f.driftAngle += 0.012
        f.x          += Math.sin(f.driftAngle) * f.drift

        // Wrap around
        if (f.y > canvas!.height + f.r) { f.y = -f.r; f.x = Math.random() * canvas!.width }
        if (f.x > canvas!.width  + f.r)  f.x = -f.r
        if (f.x < -f.r)                   f.x = canvas!.width + f.r
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  )
}
