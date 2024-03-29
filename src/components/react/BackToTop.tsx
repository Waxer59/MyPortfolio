import { useRef, useEffect } from 'react'
import { UpArrowSvg } from './Icons'

const BackToTop: React.FC = () => {
  const backToTopBtn = useRef<any>(null)

  const onBackToTopBtnClick = (): void => {
    history.pushState(null, '', '/')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 100 && window.innerWidth > 250) {
        backToTopBtn.current.style.display = 'block'
      } else {
        backToTopBtn.current.style.display = 'none'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      style={{
        display: `${
          window.scrollY > 100 && window.innerWidth > 250 ? 'block' : 'none'
        }`
      }}
      className="cursor-pointer fixed bottom-[20px] right-[15px] rounded-full text-white border-none text-5xl sm:text-6xl shadow-xl bg-secondaryColor hover:text-hoverColor z-50"
      aria-label="Back to top button"
      ref={backToTopBtn}
      onClick={onBackToTopBtnClick}>
      <UpArrowSvg className="transition all duration-300 ease-in-out" />
    </button>
  )
}

export default BackToTop
