'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <Link className="navbar-brand" href="/">
        <Image src="/img/tci-logo.png" alt="TCI Logo" className="img-2" width={143} height={40} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon homepage"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link text-white" href="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/#about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/#our-solutions">
              Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/trainings">
              Trainings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/#testimonials">
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/#faq">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/careers">
              Careers
            </Link>
          </li>
          <div className="div-13 mobileFAQ">
            <Link href="#div-206">Get in touch</Link>
          </div>
        </ul>
      </div>
      <div className="div-13 desktop" id="getTouch">
        <Link href="#contact">Get in touch</Link>
      </div>
    </nav>
  )
}
