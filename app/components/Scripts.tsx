'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Scripts() {
  useEffect(() => {
    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question')
    faqQuestions.forEach((question) => {
      question.addEventListener('click', function (this: Element) {
        const answer = this.nextElementSibling as HTMLElement
        const icon = this.querySelector('.toggle-icon') as HTMLImageElement
        const faqSection = answer?.closest('.faq-item')
        const faqQuestion = this.querySelector('.div-194')

        if (answer && icon) {
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block'
          icon.src = answer.style.display === 'block' ? '/img/minus-icon.png' : '/img/plus-icon.png'
        }

        if (faqSection) {
          if (answer?.style.display === 'block') {
            faqSection.classList.add('active')
            faqQuestion?.classList.add('active')
          } else {
            faqSection.classList.remove('active')
            faqQuestion?.classList.remove('active')
          }
        }
      })
    })

    // Navbar scroll functionality
    const handleScroll = () => {
      const stickyBtn = document.getElementById('button')
      const navbar = document.querySelector('.navbar')
      const navLinks = document.querySelectorAll('.nav-link')
      const navLogo = document.querySelector('.img-2') as HTMLImageElement
      const navGetTouch = document.getElementById('getTouch')
      const getInTouchLink = document.querySelector('#getTouch a') as HTMLElement
      const navToggler = document.querySelector('.navbar-toggler') as HTMLElement
      const hamBurger = document.querySelector('.homepage') as HTMLElement

      const scrollThreshold = 50
      const isTrainingsPage = window.location.pathname === '/trainings' || window.location.pathname === '/trainings/'
      const shouldUseScrolledStyle = isTrainingsPage || window.scrollY > scrollThreshold

      if (shouldUseScrolledStyle) {
        if (stickyBtn) stickyBtn.style.display = 'block'
        navbar?.classList.add('scrolled')
        if (navLogo) navLogo.src = '/img/tci-logo-color.svg'
        if (navGetTouch) navGetTouch.style.backgroundColor = '#265bb7'
        if (getInTouchLink) getInTouchLink.style.color = '#ffff'
        if (navToggler) navToggler.style.borderColor = '#265bb7'
        if (hamBurger) hamBurger.style.filter = 'none'

        navLinks.forEach((link) => {
          link.classList.add('scrollMenu')
          ;(link as HTMLElement).style.color = '#265bb7'
        })
      } else {
        if (stickyBtn) stickyBtn.style.display = 'none'
        navbar?.classList.remove('scrolled')
        if (navLogo) navLogo.src = '/img/tci-logo.png'
        if (navGetTouch) navGetTouch.style.backgroundColor = '#ffff'
        if (getInTouchLink) getInTouchLink.style.color = '#02040A'
        if (navToggler) navToggler.style.borderColor = '#ffff'
        if (hamBurger)
          hamBurger.style.filter =
            'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(324deg) brightness(105%) contrast(101%)'

        navLinks.forEach((link) => {
          link.classList.remove('scrollMenu')
          ;(link as HTMLElement).style.color = '#d4ddf2'
        })
      }
    }

    // Apply correct navbar state immediately on page load
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"
      />
    </>
  )
}
