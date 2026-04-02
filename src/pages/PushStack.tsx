import { useEffect, useRef, useState } from 'react'
import styles from './PushStack.module.css'

interface PushItem { img: string; title: string }

interface PushStackProps {
  items: PushItem[]
  scrollerRef: React.RefObject<HTMLDivElement | null>
}

export function PushStack({ items, scrollerRef }: PushStackProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const onScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      // Position of wrapper top inside the scroll container
      const wrapperTop =
        wrapper.getBoundingClientRect().top -
        scroller.getBoundingClientRect().top +
        scroller.scrollTop

      const scrolled = scroller.scrollTop - wrapperTop
      const slideHeight = scroller.clientHeight
      const index = Math.max(0, Math.min(items.length - 1, Math.floor(scrolled / slideHeight)))
      setActive(index)
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [scrollerRef, items.length])

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ height: `calc(${items.length} * 100dvh)` }}
    >
      <div className={styles.sticky}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.slide}
            style={{ transform: `translateY(${i <= active ? '0' : '100%'})`, zIndex: i + 1 }}
          >
            <img src={item.img} alt={item.title} className={styles.img} />
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <button className={styles.btn}>Shop now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
